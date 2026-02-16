import { frameStore } from "@/lib/frameStore";
import { SCENES, Scene } from "@/lib/scenes";

/**
 * A dedicated singleton queue manager for loading frames in parallel batches.
 * Following the rule: "Always keep 2 scenes ahead loaded".
 */
class FrameQueue {
    private queue: number[] = [];
    private activeCount = 0;
    private concurrency = 6;
    private processing = false;

    /**
     * Preloads scenes predictively.
     * Given a list of scene indexes (e.g. current+1, current+2),
     * it queues all frames belonging to those scenes.
     */
    async preloadScenes(sceneIndexes: number[]) {
        for (const idx of sceneIndexes) {
            const scene = SCENES.find(s => s.id === idx);
            if (!scene) continue;

            for (let i = scene.start; i <= scene.end; i++) {
                this.load(i);
            }
        }
    }

    /**
     * Adds a frame to the loading queue if not already loaded.
     */
    load(index: number) {
        if (frameStore.bitmaps[index]) return;
        if (this.queue.includes(index)) return;

        this.queue.push(index);
        this.processQueue();
    }

    private async processQueue() {
        if (this.processing) return;
        this.processing = true;

        // Process as long as we have items and available slots
        while (this.queue.length > 0 && this.activeCount < this.concurrency) {
            const index = this.queue.shift();
            if (index === undefined) break;

            this.activeCount++;
            this.fetchFrame(index).finally(() => {
                this.activeCount--;
                // Recursive call to pick up next item as soon as one slot frees up
                this.processQueue();
            });
        }

        this.processing = false;
    }

    private async fetchFrame(i: number) {
        try {
            // Check again just in case it was loaded by another process (e.g. initial loader)
            if (frameStore.bitmaps[i]) return;

            const url = `/frames/frame_${String(i).padStart(4, "0")}.webp`;
            const res = await fetch(url, { cache: "force-cache" });
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            const blob = await res.blob();
            const bitmap = await createImageBitmap(blob);
            frameStore.bitmaps[i] = bitmap;
        } catch (error) {
            console.error(`Error loading frame ${i}:`, error);
        }
    }
}

export const frameQueue = new FrameQueue();
