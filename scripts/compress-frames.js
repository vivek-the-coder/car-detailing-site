const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const INPUT_DIR = path.join(__dirname, "public/frames");
const OUTPUT_DIR_DESKTOP = path.join(__dirname, "public/frames/desktop");
const OUTPUT_DIR_MOBILE = path.join(__dirname, "public/frames/mobile");

const desktopConfig = {
    width: 1920,
    quality: 60,
    format: "webp",
};

const mobileConfig = {
    width: 1280,
    quality: 50,
    format: "webp",
};

async function processFrames() {
    if (!fs.existsSync(OUTPUT_DIR_DESKTOP)) fs.mkdirSync(OUTPUT_DIR_DESKTOP, { recursive: true });
    if (!fs.existsSync(OUTPUT_DIR_MOBILE)) fs.mkdirSync(OUTPUT_DIR_MOBILE, { recursive: true });

    const files = fs.readdirSync(INPUT_DIR).filter((file) => file.match(/\.(jpg|jpeg|png)$/i));

    console.log(`Found ${files.length} frames to process...`);

    let processedCount = 0;
    const total = files.length;

    // Process in chunks to avoid memory issues
    const chunkSize = 10;
    for (let i = 0; i < files.length; i += chunkSize) {
        const chunk = files.slice(i, i + chunkSize);

        await Promise.all(chunk.map(async (file) => {
            const inputPath = path.join(INPUT_DIR, file);
            const fileName = path.parse(file).name; // e.g. "frame_0001"

            // Output filenames: frame_0001.webp
            const outputName = `${fileName}.webp`;
            const desktopPath = path.join(OUTPUT_DIR_DESKTOP, outputName);
            const mobilePath = path.join(OUTPUT_DIR_MOBILE, outputName);

            try {
                // Desktop Optimization
                await sharp(inputPath)
                    .resize(desktopConfig.width, null, { fit: "inside", withoutEnlargement: true }) // Maintains aspect ratio
                    .webp({
                        quality: desktopConfig.quality,
                        smartSubsample: true, // Efficient chroma subsampling
                        effort: 4 // Balance speed/compression
                    })
                    .toFile(desktopPath);

                // Mobile Optimization
                await sharp(inputPath)
                    .resize(mobileConfig.width, null, { fit: "inside", withoutEnlargement: true })
                    .webp({
                        quality: mobileConfig.quality,
                        smartSubsample: true,
                        effort: 4
                    })
                    .toFile(mobilePath);

                process.stdout.write(`\rProcessed ${++processedCount}/${total} frames...`);
            } catch (err) {
                console.error(`\nError processing ${file}:`, err);
            }
        }));
    }

    console.log("\nAll frames processed successfully!");
    console.log(`Desktop output: ${OUTPUT_DIR_DESKTOP}`);
    console.log(`Mobile output: ${OUTPUT_DIR_MOBILE}`);
}

processFrames();
