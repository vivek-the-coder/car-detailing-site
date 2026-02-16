"use client";

import { useEffect, useRef, useState } from "react";
import { FrameBuffer } from "@/lib/frameBuffer";

const TOTAL_FRAMES = 336; // Matches your actual frame count

// --- Precise frame-mapped scenes for mobile storytelling ---
const SCENES = [
    {
        id: 0,
        start: 0,
        end: 62,
        tag: "ORIGIN",
        title: "Where perfection enters the light",
        desc: "Every masterpiece begins with precise positioning"
    },
    {
        id: 1,
        start: 63,
        end: 98,
        tag: "ANALYSIS",
        title: "Every imperfection revealed",
        desc: "Microscopic defects exposed under controlled LED inspection"
    },
    {
        id: 2,
        start: 99,
        end: 151,
        tag: "PROTECTION",
        title: "Engineered defense applied by hand",
        desc: "Paint protection film applied with surgical precision"
    },
    {
        id: 3,
        start: 152,
        end: 212,
        tag: "CERAMIC",
        title: "Molecular-level ceramic bonding",
        desc: "Ultra-hydrophobic shield enhancing gloss and durability"
    },
    {
        id: 4,
        start: 213,
        end: 285,
        tag: "ISOLATION",
        title: "Sealed from the outside world",
        desc: "Controlled curing environment ensures flawless finish"
    },
    {
        id: 5,
        start: 286,
        end: 336,
        tag: "REVEAL",
        title: "Perfection, realized",
        desc: "A finish defined by absolute clarity and depth"
    }
];

export default function ScrollCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const bufferRef = useRef(new FrameBuffer());
    const [activeScene, setActiveScene] = useState(SCENES[0]);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const context = canvas.getContext("2d", { alpha: false }); // Optimization
        if (!context) return;

        let currentFrame = 1;
        let ticking = false;

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render(currentFrame);
        }

        window.addEventListener("resize", resize);
        resize();

        function getFrameFromScroll() {
            const scrollTop = window.scrollY;
            // Use existing document height logic since we probably removed the PIN trigger
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            const progress = Math.max(0, Math.min(1, scrollTop / scrollHeight));

            return Math.min(
                TOTAL_FRAMES,
                Math.max(1, Math.floor(progress * TOTAL_FRAMES))
            );
        }

        async function render(frame: number) {
            try {
                // Determine active scene based on frame
                const scene = SCENES.find(s => frame >= s.start && frame <= s.end);
                if (scene && scene.id !== activeScene.id) {
                    setActiveScene(scene);
                }

                const bitmap = await bufferRef.current.load(frame);

                context!.clearRect(0, 0, canvas.width, canvas.height);

                // calculate cover
                const scale = Math.max(
                    canvas.width / bitmap.width,
                    canvas.height / bitmap.height
                );

                const x = (canvas.width - bitmap.width * scale) / 2;
                const y = (canvas.height - bitmap.height * scale) / 2;

                context!.drawImage(
                    bitmap,
                    x,
                    y,
                    bitmap.width * scale,
                    bitmap.height * scale
                );
            } catch (e) {
                // Silent catch for frame loading errors during fast scroll
            }
        }

        function update() {
            const frame = getFrameFromScroll();

            if (frame !== currentFrame) {
                currentFrame = frame;
                render(frame);
                bufferRef.current.updateBuffer(frame, TOTAL_FRAMES);
            }
            ticking = false;
        }

        function onScroll() {
            if (!ticking) {
                requestAnimationFrame(update);
                ticking = true;
            }
        }

        window.addEventListener("scroll", onScroll);

        // Instant start: Load frame 1
        bufferRef.current.load(1).then(() => render(1));
        // Preload initial buffer
        bufferRef.current.updateBuffer(1, TOTAL_FRAMES);

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", resize);
        };
    }, []); // Removed dependency on activeScene to prevent re-binding scroll listener constantly

    return (
        <section className="relative h-[500vh] bg-black">
            {/* 
                We need explicit height to allow scrolling since we removed GSAP pin. 
                500vh ensures roughly enough scroll distance for the video length.
            */}

            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Cinematic Overlay Text (Mobile Only) */}
                <div className="md:hidden absolute inset-0 z-20 pointer-events-none flex flex-col justify-between py-16 px-6">
                    <div key={activeScene?.id + "-top"} className="transition-all duration-700 ease-out transform translate-y-0 opacity-100 animate-in fade-in slide-in-from-bottom-2">
                        <p className="text-luxury-accent text-xs tracking-[0.35em] font-medium mb-3">
                            {activeScene?.tag}
                        </p>
                        <h2 className="text-white text-2xl font-semibold leading-tight max-w-[80%]">
                            {activeScene?.title}
                        </h2>
                    </div>

                    <div key={activeScene?.id + "-bottom"} className="transition-all duration-700 ease-out transform translate-y-0 opacity-100 animate-in fade-in slide-in-from-bottom-2">
                        <p className="text-white/60 text-sm max-w-[90%] leading-relaxed">
                            {activeScene?.desc}
                        </p>
                    </div>
                </div>

                <canvas
                    ref={canvasRef}
                    className="block w-full h-full object-cover"
                />
            </div>
        </section>
    );
}
