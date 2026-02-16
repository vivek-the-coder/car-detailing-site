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
      <Hero />
      <HeroDesktop />
      <ScrollCanvas />
      <Services />
      <BeforeAfter />
      <Showcase />
      <Features />
      <Pricing />
      <CTA />
    </>
  );
}
