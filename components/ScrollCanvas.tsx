"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 336;

// --- Precise frame-mapped scenes for mobile storytelling ---
const SCENES = [
    {
        id: 0,
        start: 0, // Adjusted to 0 for safety
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
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeScene, setActiveScene] = useState(SCENES[0]);
    const lastSceneIdRef = useRef<number>(-1);

    // Physics-based scrolling state refs
    const renderState = useRef({
        currentFrame: 0,
        targetFrame: 0
    });
    const images = useRef<HTMLImageElement[]>([]);
    const rafId = useRef<number>(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const canvas = canvasRef.current;
            const container = containerRef.current;
            if (!canvas || !container) return;

            const context = canvas.getContext("2d");
            if (!context) return;

            // --- 1. Setup & Mobile Optimization ---
            const setCanvasSize = () => {
                const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
                canvas.width = window.innerWidth * dpr;
                canvas.height = window.innerHeight * dpr;
                canvas.style.width = `${window.innerWidth}px`;
                canvas.style.height = `${window.innerHeight}px`;
                context.scale(dpr, dpr);
            };
            setCanvasSize();

            let lastWidth = window.innerWidth;
            const handleResize = () => {
                if (window.innerWidth !== lastWidth) {
                    lastWidth = window.innerWidth;
                    setCanvasSize();
                    render(Math.round(renderState.current.currentFrame));
                }
            };
            window.addEventListener("resize", handleResize);

            // --- 2. Image Preloading ---
            if (images.current.length === 0) {
                for (let i = 0; i < FRAME_COUNT; i++) {
                    const img = new Image();
                    img.src = `/frames/frame_${String(i + 1).padStart(4, "0")}.jpg`;
                    images.current.push(img);
                }
            }

            // --- 3. Render Logic ---
            const render = (index: number) => {
                const img = images.current[index];
                if (!img || !img.complete || img.naturalWidth === 0) return;
                context.clearRect(0, 0, window.innerWidth, window.innerHeight);
                const isMobile = window.innerWidth < 768;
                let scale;
                if (isMobile) {
                    const containScale = Math.min(window.innerWidth / img.width, window.innerHeight / img.height);
                    scale = containScale * 1.25;
                } else {
                    scale = Math.max(window.innerWidth / img.width, window.innerHeight / img.height);
                }
                const x = (window.innerWidth - img.width * scale) / 2;
                const y = (window.innerHeight - img.height * scale) / 2;
                context.drawImage(img, x, y, img.width * scale, img.height * scale);
            };

            // --- 4. Physics Loop ---
            const animate = () => {
                const state = renderState.current;
                const diff = state.targetFrame - state.currentFrame;
                if (Math.abs(diff) > 0.05) {
                    state.currentFrame += diff * 0.08;
                    const currentFrameInt = Math.round(state.currentFrame);
                    render(currentFrameInt);
                    const matchedScene = SCENES.find(scene => currentFrameInt >= scene.start && currentFrameInt <= scene.end);
                    if (matchedScene && matchedScene.id !== lastSceneIdRef.current) {
                        lastSceneIdRef.current = matchedScene.id;
                        setActiveScene(matchedScene);
                    }
                }
                rafId.current = requestAnimationFrame(animate);
            };
            animate();

            // --- 5. ScrollTrigger (The Locking Mechanism) ---
            ScrollTrigger.create({
                trigger: container,
                start: "top top",
                end: "+=4000",
                pin: true,
                scrub: true,
                anticipatePin: 1,
                onUpdate: (self) => {
                    renderState.current.targetFrame = self.progress * (FRAME_COUNT - 1);
                }
            });

            // Cleanup handler inside context
            return () => {
                window.removeEventListener("resize", handleResize);
                cancelAnimationFrame(rafId.current);
            };
        }, containerRef);

        return () => ctx.revert(); // Reverts all GSAP changes (including pinning)
    }, []);

    return (
        // Wrapper is pinned by ScrollTrigger, maintaining viewport lock while scrolling
        <section
            ref={containerRef}
            className="h-[100dvh] w-full bg-black relative overflow-hidden"
        >
            {/* Cinematic Overlay Text (Mobile Only) */}
            <div className="md:hidden absolute inset-0 z-20 pointer-events-none flex flex-col justify-between py-16 px-6">
                {/* Top Text Area */}
                <div key={activeScene?.id + "-top"} className="transition-all duration-700 ease-out transform translate-y-0 opacity-100 animate-in fade-in slide-in-from-bottom-2">
                    <p className="text-luxury-accent text-xs tracking-[0.35em] font-medium mb-3">
                        {activeScene?.tag}
                    </p>
                    <h2 className="text-white text-2xl font-semibold leading-tight max-w-[80%]">
                        {activeScene?.title}
                    </h2>
                </div>

                {/* Bottom Text Area */}
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
        </section>
    );
}
