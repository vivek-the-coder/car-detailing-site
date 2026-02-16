"use client";

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

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroDesktop />
      <ScrollCanvas />
      <div id="services">
        <Services />
      </div>
      <div id="portfolio">
        {/* BeforeAfter and Showcase are part of the portfolio section */}
        <BeforeAfter />
        <Showcase />
      </div>
      <Features />
      <div id="pricing">
        <Pricing />
      </div>
      <CTA />
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
