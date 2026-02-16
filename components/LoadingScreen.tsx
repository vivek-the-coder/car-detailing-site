"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function LoadingScreen({
    progress,
    isFinished,
}: {
    progress: number;
    isFinished: boolean;
}) {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        if (isFinished) {
            setIsExiting(true);
        }
    }, [isFinished]);

    useEffect(() => {
        // Lock scroll during loading
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <AnimatePresence>
            {!isFinished && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: isExiting ? 0 : 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 bg-black text-white z-[9999] flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Animated Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-luxury-accent/10 blur-[120px] rounded-full animate-pulse" />

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Logo with Ambient Fade */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="mb-12 relative w-48 h-12"
                        >
                            <Image
                                src="/images/logo.png"
                                alt="The Detailing Aura"
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>

                        {/* Premium Progress Bar System */}
                        <div className="relative w-64 md:w-80 group">
                            {/* Outer Track */}
                            <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                                {/* Inner Glow */}
                                <motion.div
                                    className="h-full bg-gradient-to-r from-luxury-accent/50 via-luxury-accent to-white shadow-[0_0_15px_rgba(0,255,65,0.5)]"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                />
                            </div>

                            {/* Progress Text */}
                            <div className="mt-6 flex justify-between items-end w-full">
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold mb-1">Status</span>
                                    <span className="text-[11px] text-white/80 font-medium tracking-wide">
                                        {progress < 100 ? "Restoring Perfection..." : "Excellence Ready"}
                                    </span>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold mb-1">Level</span>
                                    <span className="text-xl font-light text-luxury-accent tabular-nums tracking-tighter">
                                        {Math.floor(progress)}<span className="text-[10px] ml-1 text-white/20">%</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-12 left-12">
                        <p className="text-[9px] uppercase tracking-[0.3em] text-white/20 font-medium">EST. MMXXIV</p>
                    </div>
                    <div className="absolute top-12 right-12">
                        <p className="text-[9px] uppercase tracking-[0.3em] text-white/20 font-medium">Precision Detailing</p>
                    </div>

                    <div className="absolute inset-0 noise-texture opacity-[0.03] pointer-events-none" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
