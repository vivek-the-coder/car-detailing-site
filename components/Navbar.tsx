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
    <div className="fixed top-0 inset-x-0 z-[100] flex justify-center p-4 md:p-6 pointer-events-none">

      {/* Mobile Menu - Fullscreen Underlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#030303]/95 backdrop-blur-3xl z-[0] flex flex-col items-center justify-center pointer-events-auto"
          >
            <div className="flex flex-col items-center gap-8 md:gap-12 p-8 w-full max-w-md">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (i * 0.05), duration: 0.5, ease: "easeOut" }}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    onClick={handleNavClick}
                    className="block text-4xl md:text-5xl font-light text-white tracking-tighter hover:text-luxury-accent transition-colors italic uppercase leading-tight"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="w-full pt-8 mt-4 border-t border-white/10"
              >
                <Link
                  href="/book"
                  onClick={handleNavClick}
                  className="w-full py-5 block text-center rounded-full bg-luxury-accent text-black font-bold uppercase tracking-[0.3em] text-[13px] shadow-[0_0_40px_rgba(0,255,65,0.3)] active:scale-95 transition-transform"
                >
                  Establish Aura
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Navbar - Floating Above */}
      <nav className={clsx(
        "relative z-[10] w-full max-w-[1700px] rounded-[2rem] flex flex-row items-center justify-between px-6 py-3 md:px-10 md:py-4 pointer-events-auto transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1)",
        scrolled
          ? "shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] border border-white/10 bg-black/40 backdrop-blur-md"
          : "border border-transparent bg-transparent"
      )}>
        {/* Brand Section */}
        <div className="flex items-center gap-12">
          <Link href="/" onClick={handleNavClick} className="relative h-6 w-24 md:h-8 md:w-32 block group">
            <Image
              src="/images/logo.png"
              alt="The Detailing Aura"
              fill
              className="object-contain object-left group-hover:brightness-110 transition-all"
              priority
            />
          </Link>

          {/* Centered links - Desktop */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="text-[10px] uppercase tracking-[0.25em] font-bold text-white/40 hover:text-luxury-accent transition-all duration-300 relative group"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-luxury-accent transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>

        {/* Right Actions Cluster */}
        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden xl:flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/5 bg-white/[0.03]">
            <span className="w-1.5 h-1.5 rounded-full bg-luxury-accent animate-pulse shadow-[0_0_8px_#00ff41]" />
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/40">Studio Operational</span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/book"
              onClick={handleNavClick}
              className="hidden sm:block py-2.5 px-8 md:px-10 rounded-full bg-luxury-accent text-black text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:scale-[1.03] transition-all shadow-[0_10px_20px_rgba(0,255,65,0.2)] active:scale-95"
            >
              Establish Aura
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-end justify-center gap-1.5 group relative"
              aria-label="Toggle Menu"
            >
              <div className={clsx(
                "h-[2px] bg-white transition-all duration-500",
                isOpen ? "w-8 rotate-45 translate-y-[4px]" : "w-8"
              )} />
              <div className={clsx(
                "h-[2px] bg-white transition-all duration-500",
                isOpen ? "w-0 opacity-0" : "w-5 group-hover:w-8"
              )} />
              <div className={clsx(
                "h-[2px] bg-white transition-all duration-500",
                isOpen ? "w-8 -rotate-45 -translate-y-[4px]" : "w-7 group-hover:w-8"
              )} />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
