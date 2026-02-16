"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    const images = useRef<HTMLImageElement[]>([]);
    const rafId = useRef<number>(0);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (!canvasRef.current || !pinRef.current) return;
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");
            if (!context) return;

            const render = (index: number) => {
                const img = images.current[index];
                if (!img || !img.complete || img.naturalWidth === 0) return;

                context.clearRect(0, 0, canvas.width, canvas.height);

                const dpr = Math.min(window.devicePixelRatio || 1, 2);
                const isMobile = window.innerWidth < 768;

                // Optimized scaling math
                const scale = isMobile
                    ? Math.max(canvas.width / img.width, canvas.height / img.height) * 1.05
                    : Math.max(canvas.width / img.width, canvas.height / img.height);

                const x = (canvas.width - img.width * scale) / 2;
                const y = (canvas.height - img.height * scale) / 2;

                context.drawImage(img, x, y, img.width * scale, img.height * scale);
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

            if (images.current.length === 0) {
                // Priority load first frame immediately
                const firstImg = new Image();
                firstImg.src = `/frames/frame_0001.jpg`;
                firstImg.onload = () => render(0);

                for (let i = 0; i < FRAME_COUNT; i++) {
                    const img = new Image();
                    img.src = `/frames/frame_${String(i + 1).padStart(4, "0")}.jpg`;
                    // Only render if it's the first frame to avoid flickering during batch load
                    if (i === 0) img.onload = () => render(0);
                    images.current.push(img);
                }
            } else {
                // Ensure initial frame even if already loaded
                render(0);
            }

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

            // Robust PINNING
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "+=5000", // Increased scroll length for more cinematic feel
                pin: pinRef.current,
                scrub: 1, // Smoother scrubbing
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
            ScrollTrigger.getAll().forEach(t => {
                if (t.trigger === sectionRef.current) t.kill(true);
            });
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
