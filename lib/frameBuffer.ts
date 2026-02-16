export class FrameBuffer {
    private frames = new Map<number, ImageBitmap>();
    private loading = new Set<number>();

    // User requested "10 behind, 20 ahead"
    private BUFFER_AHEAD = 20;
    private BUFFER_BEHIND = 10;

    // Path configuration
    private CDN_BASE = "/frames";

    async get(frame: number): Promise<ImageBitmap> {
        if (this.frames.has(frame)) return this.frames.get(frame)!;
        return await this.load(frame);
    }

    async load(frame: number): Promise<ImageBitmap> {
        if (this.frames.has(frame)) {
            return this.frames.get(frame)!;
        }

        if (this.loading.has(frame)) {
            return new Promise<ImageBitmap>((resolve) => {
                const check = () => {
                    if (this.frames.has(frame)) resolve(this.frames.get(frame)!);
                    else requestAnimationFrame(check);
                };
                check();
            });
        }

        this.loading.add(frame);

        const img = new Image();
        img.src = `${this.CDN_BASE}/frame_${String(frame).padStart(4, "0")}.jpg`;

        await img.decode();

        const bitmap = await createImageBitmap(img);
        this.frames.set(frame, bitmap);
        this.loading.delete(frame);

        return bitmap;
    }

    updateBuffer(currentFrame: number, maxFrame: number) {
        const start = Math.max(1, currentFrame - this.BUFFER_BEHIND);
        const end = Math.min(maxFrame, currentFrame + this.BUFFER_AHEAD);

        for (let i = start; i <= end; i++) {
            if (!this.frames.has(i) && !this.loading.has(i)) {
                this.load(i).catch(() => { }); // Catch silent failures
            }
        }
    }
}
