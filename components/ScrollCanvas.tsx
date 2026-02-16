"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { frameStore } from "@/lib/frameStore";
import { SCENES } from "@/lib/scenes";
import { frameQueue } from "@/lib/sceneLoader";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const FRAME_COUNT = 336;

export default function ScrollCanvas() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const pinRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [activeScene, setActiveScene] = useState(SCENES[0]);
    const lastSceneIdRef = useRef<number>(-1);

    // Track loaded scene sets to prevent redundant checks
    const loadedScenes = useRef(new Set<number>());

    // Physics-based scrolling state refs
    const renderState = useRef({
        currentFrame: 0,
        targetFrame: 0
    });
    const rafId = useRef<number>(0);

    // Initial Startup Preload: Scenes 0 + 1 (The prompt implies 0-indexed scenes)
    // "Startup: Preload Scene 1 + Scene 2" -> In our 0-indexed array, that's Scene 0 and Scene 1.
    useEffect(() => {
        const preloadStartup = async () => {
            // SCENES[0] is loaded by page.tsx (1-63), but we ensure it here + load scene 1
            // sceneLoader handles internal checks if already loaded.
            await frameQueue.preloadScenes([0, 1]);
            loadedScenes.current.add(0);
            loadedScenes.current.add(1);
        };
        preloadStartup();
    }, []);

    const getScene = (frame: number) => {
        return SCENES.findIndex(s => frame >= s.start && frame <= s.end);
    };

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

                        // Scene Logic
                        const matchedSceneIndex = getScene(currentFrameInt);
                        const matchedScene = SCENES[matchedSceneIndex];

                        if (matchedScene && matchedScene.id !== lastSceneIdRef.current) {
                            lastSceneIdRef.current = matchedScene.id;
                            setActiveScene(matchedScene);
                        }

                        // Predictive Preload Logic
                        if (matchedSceneIndex !== -1 && !loadedScenes.current.has(matchedSceneIndex)) {
                            // Mark current scene as fully "visited/active" so we don't trigger again
                            loadedScenes.current.add(matchedSceneIndex);

                            // Preload next 2 scenes
                            // e.g. if current is 1, load 2 and 3.
                            const nextScenes = [matchedSceneIndex + 1, matchedSceneIndex + 2];
                            // Filter valid scenes only (handled in loader)
                            frameQueue.preloadScenes(nextScenes);
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
