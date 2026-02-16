"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { clsx } from "clsx";

import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Protection", href: "/protection" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pricing", href: "/pricing" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (window.location.pathname === href) {
      e.preventDefault();
      setIsOpen(false);
      return;
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b flex items-center",
        isOpen
          ? "h-16 md:h-24 metal-blur border-white/10"
          : scrolled
            ? "h-16 md:h-24 bg-black/60 backdrop-blur-xl border-white/5"
            : "h-16 md:h-28 bg-transparent border-transparent"
      )}
    >
      <div className="w-full px-6 md:px-12 flex items-center justify-between mx-auto max-w-[1800px]">
        {/* Left Aligned Logo */}
        <Link href="/" onClick={(e) => handleNavClick(e, "/")} className={clsx(
          "relative transition-all duration-500 z-50",
          scrolled ? "h-6 w-24 md:h-8 md:w-32" : "h-7 w-28 md:h-10 md:w-40"
        )}>
          <Image
            src="/images/logo.png"
            alt="The Detailing Aura"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Center Navigation */}
        <div className="hidden xl:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[11px] uppercase tracking-[0.25em] font-bold text-white/50 hover:text-luxury-accent transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-8">
          <Link
            href="/book"
            onClick={(e) => handleNavClick(e, "/book")}
            className="hidden lg:block group relative overflow-hidden rounded-full border border-white/10 px-10 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:border-white/30"
          >
            <span className="relative z-10">Book Now</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-10" />
          </Link>

          {/* Premium 2-Bar Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 flex flex-col items-end justify-center gap-2 relative z-50 group xl:hidden"
            aria-label="Toggle Menu"
          >
            <div className={clsx(
              "h-[2px] bg-white transition-all duration-500 ease-[0.22, 1, 0.36, 1]",
              isOpen ? "w-7 -rotate-45 translate-y-[5px]" : "w-7"
            )} />
            <div className={clsx(
              "h-[2px] bg-white transition-all duration-500 ease-[0.22, 1, 0.36, 1]",
              isOpen ? "w-7 rotate-45 -translate-y-[5px]" : "w-5 group-hover:w-7"
            )} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Metal Blur Cinematic */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 metal-blur px-8 pt-32 pb-12 flex flex-col xl:hidden"
          >
            {/* Texture Layer */}
            <div className="absolute inset-0 noise-texture opacity-[0.03] pointer-events-none" />

            <div className="flex flex-col gap-6 md:gap-10 container-lux relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.05), duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-4xl md:text-7xl font-light text-white tracking-tighter hover:text-luxury-accent transition-colors italic uppercase leading-none block py-2"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-auto container-lux relative z-10"
            >
              <Link
                href="/book"
                onClick={(e) => handleNavClick(e, "/book")}
                className="w-full py-6 md:py-8 block text-center rounded-full border border-luxury-accent/20 bg-luxury-accent/5 text-luxury-accent font-bold uppercase tracking-[0.3em] text-[11px] md:text-[13px] hover:bg-luxury-accent hover:text-black transition-all shadow-[0_0_30px_rgba(0,255,65,0.1)] active:scale-95"
              >
                Book Reservation
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
