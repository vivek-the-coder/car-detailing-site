export async function preloadInitialFrames({
    initialFrames,
    onProgress,
}: {
    initialFrames: number;
    onProgress: (progress: number) => void;
}): Promise<(ImageBitmap | null)[]> {
    const bitmaps: (ImageBitmap | null)[] = new Array(337).fill(null);

    const batchSize = 10;

    for (let i = 1; i <= initialFrames; i += batchSize) {
        const batch = [];
        for (let j = i; j < i + batchSize && j <= initialFrames; j++) {
            const url = `/frames/frame_${String(j).padStart(4, "0")}.jpg`;
            batch.push(
                (async (index) => {
                    try {
                        const response = await fetch(url, { cache: "force-cache" });
                        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                        const blob = await response.blob();
                        const bitmap = await createImageBitmap(blob);
                        bitmaps[index] = bitmap;
                    } catch (error) {
                        console.error(`Error preloading initial frame ${index}:`, error);
                    }
                })(j)
            );
        }

        await Promise.all(batch);
        onProgress((Math.min(i + batchSize - 1, initialFrames) / initialFrames) * 100);
    }

    return bitmaps;
}
