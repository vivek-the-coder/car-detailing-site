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
import { preloadCriticalFrames } from "@/lib/preloadFrames";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Preload first 100 frames (safe threshold for 336 frames)
    preloadCriticalFrames(336, setProgress).then(() => {
      // Small buffer for smoothness
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    });
  }, []);

  return (
    <>
      <LoadingScreen progress={progress} isFinished={!isLoading} />

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Hero />
            <HeroDesktop />
            <ScrollCanvas />
            <Services />
            <BeforeAfter />
            <Showcase />
            <Features />
            <Pricing />
            <CTA />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
