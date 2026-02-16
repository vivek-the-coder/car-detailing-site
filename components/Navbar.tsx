"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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

  const isHome = pathname === "/";

  const navLinks = [
    { name: "Services", href: isHome ? "#services" : "/services" },
    { name: "Protection", href: "/protection" },
    { name: "Portfolio", href: isHome ? "#portfolio" : "/portfolio" },
    { name: "Pricing", href: isHome ? "#pricing" : "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: isHome ? "#contact" : "/contact" },
  ];

  const handleNavClick = () => setIsOpen(false);

  return (
    <div className="fixed top-6 md:top-8 inset-x-0 z-[100] flex justify-center px-4 pointer-events-none">
      <nav className={clsx(
        "metal-blur metal-border rounded-full flex items-center gap-8 md:gap-12 px-6 py-3.5 md:px-10 md:py-4 pointer-events-auto transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1)",
        scrolled
          ? "scale-95 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] border-white/20 bg-black/80"
          : "scale-100 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] border-white/10 bg-black/40"
      )}>
        {/* Logo Area */}
        <Link href="/" onClick={handleNavClick} className="relative h-6 w-24 md:h-8 md:w-32 block group">
          <Image
            src="/images/logo.png"
            alt="The Detailing Aura"
            fill
            className="object-contain object-left group-hover:brightness-110 transition-all"
            priority
          />
        </Link>

        {/* Primary Navigation Links */}
        <div className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={handleNavClick}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 hover:text-luxury-accent transition-all duration-300 relative group"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-luxury-accent transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Status Indicator & CTA */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/[0.03]">
            <span className="w-1.5 h-1.5 rounded-full bg-luxury-accent animate-pulse shadow-[0_0_8px_#00ff41]" />
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/40">Studio Open</span>
          </div>

          <Link
            href="/book"
            onClick={handleNavClick}
            className="hidden md:block py-2.5 px-8 rounded-full bg-luxury-accent text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:scale-105 transition-all shadow-[0_10px_20px_rgba(0,255,65,0.2)] active:scale-95"
          >
            Book
          </Link>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden w-8 h-8 flex flex-col items-end justify-center gap-1.5 group relative"
            aria-label="Toggle Menu"
          >
            <div className={clsx(
              "h-[2px] bg-white transition-all duration-500 ease-in-out",
              isOpen ? "w-7 rotate-45 translate-y-[4px]" : "w-7"
            )} />
            <div className={clsx(
              "h-[2px] bg-white transition-all duration-500 ease-in-out",
              isOpen ? "w-0 opacity-0" : "w-4 group-hover:w-7"
            )} />
            <div className={clsx(
              "h-[2px] bg-white transition-all duration-500 ease-in-out",
              isOpen ? "w-7 -rotate-45 -translate-y-[4px]" : "w-6 group-hover:w-7"
            )} />
          </button>
        </div>
      </nav>

      {/* Premium Mobile Menu - Metal Reveal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dim Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[-1] xl:hidden pointer-events-auto"
            />

            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-20 inset-x-4 max-w-lg mx-auto metal-blur border border-white/10 rounded-[2.5rem] p-10 md:p-14 shadow-[0_50px_100px_rgba(0,0,0,0.9)] z-40 pointer-events-auto xl:hidden"
            >
              <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (i * 0.05) }}
                  >
                    <Link
                      href={link.href}
                      onClick={handleNavClick}
                      className="text-4xl font-light text-white tracking-tighter hover:text-luxury-accent transition-colors italic uppercase flex items-center justify-between group"
                    >
                      {link.name}
                      <span className="w-10 h-px bg-white/10 group-hover:w-20 group-hover:bg-luxury-accent transition-all duration-500" />
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-6"
                >
                  <Link
                    href="/book"
                    onClick={handleNavClick}
                    className="w-full py-6 block text-center rounded-2xl bg-luxury-accent text-black font-bold uppercase tracking-[0.3em] text-[13px] shadow-[0_20px_40px_rgba(0,255,65,0.25)] active:scale-95 transition-transform"
                  >
                    Start Your Aura
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
