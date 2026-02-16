export async function preloadCriticalFrames(
    totalFrames: number,
    onProgress: (progress: number) => void
): Promise<(ImageBitmap | null)[]> {
    const bitmaps: (ImageBitmap | null)[] = new Array(totalFrames + 1).fill(null);
    const criticalCount = Math.min(totalFrames, 100); // Preload first 100 frames for smooth start

    const tasks = [];

    for (let i = 1; i <= criticalCount; i++) {
        const url = `/frames/frame_${String(i).padStart(4, "0")}.jpg`;

        tasks.push(
            (async () => {
                try {
                    const res = await fetch(url);
                    if (!res.ok) throw new Error(`Failed to fetch ${url}`);
                    const blob = await res.blob();
                    const bitmap = await createImageBitmap(blob);
                    bitmaps[i] = bitmap;
                    onProgress((i / criticalCount) * 100);
                } catch (error) {
                    console.error(`Error preloading frame ${i}:`, error);
                }
            })()
        );
    }

    await Promise.all(tasks);
    return bitmaps;
}
