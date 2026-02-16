"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { frameStore } from "@/lib/frameStore";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const FRAME_COUNT = 336;

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
    const sectionRef = useRef<HTMLDivElement>(null);
    const pinRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [activeScene, setActiveScene] = useState(SCENES[0]);
    const lastSceneIdRef = useRef<number>(-1);

    // Physics-based scrolling state refs
    const renderState = useRef({
        currentFrame: 0,
        targetFrame: 0
    });
    const rafId = useRef<number>(0);

    // Background loading for remaining frames
    useEffect(() => {
        const initialFrames = 63;
        const totalFrames = FRAME_COUNT;

        // Concurrent Background Loader
        const loadRemaining = async () => {
            const concurrency = 4;
            const queue: Promise<void>[] = [];

            // Detect mobile viewport (Client-side, so window is safe)
            const isMobile = window.innerWidth < 768;
            const pathPrefix = isMobile ? '/frames/mobile' : '/frames/desktop';

            const loadFrame = async (i: number) => {
                if (frameStore.bitmaps[i]) return; // Skip if already loaded

                const url = `${pathPrefix}/frame_${String(i).padStart(4, "0")}.webp`;
                try {
                    const response = await fetch(url, { cache: "force-cache" });
                    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                    const blob = await response.blob();
                    const bitmap = await createImageBitmap(blob);
                    frameStore.bitmaps[i] = bitmap;
                } catch (e) {
                    console.error(`Background preload failed for frame ${i}`, e);
                }
            };


            for (let i = initialFrames + 1; i <= totalFrames; i++) {
                queue.push(loadFrame(i));

                if (queue.length === concurrency) {
                    await Promise.all(queue);
                    queue.length = 0;
                    // minimal yield to keep main thread breathing
                    await new Promise(r => setTimeout(r, 10));
                }
            }

            // Clean up any stragglers
            if (queue.length > 0) {
                await Promise.all(queue);
            }
        };

        loadRemaining();
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!canvasRef.current) return;
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");
            if (!context) return;

            const render = (index: number) => {
                const img = frameStore.bitmaps[index];
                if (!img) return;

                context.clearRect(0, 0, canvas.width, canvas.height);

                const dpr = Math.min(window.devicePixelRatio || 1, 2);
                const isMobile = window.innerWidth < 768;

                const imgWidth = img.width;
                const imgHeight = img.height;

                // Optimized scaling math: 'contain' for mobile (+ subtle zoom), 'cover' for desktop
                const scale = isMobile
                    ? Math.min(canvas.width / imgWidth, canvas.height / imgHeight) * 1.25
                    : Math.max(canvas.width / imgWidth, canvas.height / imgHeight);

                const x = (canvas.width - imgWidth * scale) / 2;
                const y = (canvas.height - imgHeight * scale) / 2;

                context.drawImage(img, x, y, imgWidth * scale, imgHeight * scale);
            };

            const setCanvasSize = () => {
                const dpr = Math.min(window.devicePixelRatio || 1, 2);
                canvas.width = window.innerWidth * dpr;
                canvas.height = window.innerHeight * dpr;
                render(Math.round(renderState.current.currentFrame));
            };
            setCanvasSize();

            const handleResize = () => {
                setCanvasSize();
            };
            window.addEventListener("resize", handleResize);

            // Initial frame render
            render(0);

            const animate = () => {
                const state = renderState.current;
                const diff = state.targetFrame - state.currentFrame;

                // Allow very small movements and always allow frame 0
                if (Math.abs(diff) > 0.001 || state.currentFrame === 0) {
                    state.currentFrame += diff * 0.1; // Slightly faster tracking
                    const currentFrameInt = Math.round(state.currentFrame);

                    if (currentFrameInt >= 0 && currentFrameInt < FRAME_COUNT) {
                        render(currentFrameInt);
                        const matchedScene = SCENES.find(scene => currentFrameInt >= scene.start && currentFrameInt <= scene.end);
                        if (matchedScene && matchedScene.id !== lastSceneIdRef.current) {
                            lastSceneIdRef.current = matchedScene.id;
                            setActiveScene(matchedScene);
                        }
                    }
                }
                rafId.current = requestAnimationFrame(animate);
            };
            rafId.current = requestAnimationFrame(animate);

            // Robust PINNING & LOCK
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "+=5000",
                pin: true,
                pinSpacing: true,
                scrub: 1,
                anticipatePin: 1,
                onUpdate: (self) => {
                    renderState.current.targetFrame = self.progress * (FRAME_COUNT - 1);
                }
            });

            return () => {
                window.removeEventListener("resize", handleResize);
                cancelAnimationFrame(rafId.current);
            };
        }, sectionRef);

        return () => {
            ctx.revert();
            // Full Cleanup
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="bg-black relative">
            <div
                ref={pinRef}
                className="h-[100dvh] w-full bg-black relative overflow-hidden"
            >
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
