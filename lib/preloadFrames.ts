export async function preloadInitialFrames({
    initialFrames,
    onProgress,
}: {
    initialFrames: number;
    onProgress: (progress: number) => void;
}): Promise<(ImageBitmap | null)[]> {
    const bitmaps: (ImageBitmap | null)[] = new Array(337).fill(null);
    const concurrency = 6;
    let loaded = 0;

    const loadFrame = async (i: number) => {
        const url = `/frames/frame_${String(i).padStart(4, "0")}.webp`;
        try {
            const res = await fetch(url, { cache: "force-cache" });
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            const blob = await res.blob();
            const bitmap = await createImageBitmap(blob);
            bitmaps[i] = bitmap;
            loaded++;
            onProgress((loaded / initialFrames) * 100);
        } catch (error) {
            console.error(`Error preloading frame ${i}:`, error);
        }
    };

    const executing: Promise<void>[] = [];
    const allPromises: Promise<void>[] = [];

    for (let i = 1; i <= initialFrames; i++) {
        const p = loadFrame(i);
        allPromises.push(p);

        if (concurrency < initialFrames) {
            const e: Promise<void> = p.then(() => {
                executing.splice(executing.indexOf(e), 1);
            });
            executing.push(e);
            if (executing.length >= concurrency) {
                await Promise.race(executing);
            }
        }
    }

    await Promise.all(allPromises);

    return bitmaps;
}
