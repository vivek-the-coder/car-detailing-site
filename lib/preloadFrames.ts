export async function preloadInitialFrames({
    initialFrames,
    onProgress,
}: {
    initialFrames: number;
    onProgress: (progress: number) => void;
}): Promise<(ImageBitmap | null)[]> {
    // Detect mobile viewport (SSR safe check)
    const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
    const pathPrefix = isMobile ? '/frames/mobile' : '/frames/desktop';

    const bitmaps: (ImageBitmap | null)[] = new Array(337).fill(null);
    const concurrency = 6;
    let loaded = 0;

    async function loadFrame(i: number) {
        // Use optimized WebP path
        const url = `${pathPrefix}/frame_${String(i).padStart(4, "0")}.webp`;
        try {
            const res = await fetch(url, { cache: "force-cache" });
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            const blob = await res.blob();
            const bitmap = await createImageBitmap(blob);
            bitmaps[i] = bitmap;
            loaded++;
            onProgress((loaded / initialFrames) * 100);
        } catch (e) {
            console.error(`Error loading frame ${i}:`, e);
        }
    }

    const queue: Promise<void>[] = [];

    for (let i = 1; i <= initialFrames; i++) {
        queue.push(loadFrame(i));

        // Strict batching as requested: wait for 6, then clear
        if (queue.length === concurrency) {
            await Promise.all(queue);
            queue.length = 0;
        }
    }

    // Await any remaining in the last batch
    if (queue.length > 0) {
        await Promise.all(queue);
    }

    return bitmaps;
}
