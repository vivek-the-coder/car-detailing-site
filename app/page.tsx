"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HeroDesktop from "@/components/HeroDesktop";
import ScrollCanvas from "@/components/ScrollCanvas";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Showcase from "@/components/Showcase";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { preloadAllFrames } from "@/lib/preloadFrames";
import { frameStore } from "@/lib/frameStore";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    // 1. Minimum duration for brand impact
    const timer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 2500);

    // 2. Full frame preloading (336 frames)
    preloadAllFrames({
      totalFrames: 336,
      onProgress: setProgress,
    }).then((bitmaps) => {
      frameStore.bitmaps = bitmaps;
      setIsLoading(false);
    });

    return () => clearTimeout(timer);
  }, []);

  const isActuallyFinished = !isLoading && minTimeElapsed;

  return (
    <>
      <LoadingScreen progress={progress} isFinished={isActuallyFinished} />

      <AnimatePresence>
        {isActuallyFinished && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Navbar />
            <Hero />
            <HeroDesktop />
            <ScrollCanvas />
            <Services />
            <BeforeAfter />
            <Showcase />
            <Features />
            <Pricing />
            <CTA />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
