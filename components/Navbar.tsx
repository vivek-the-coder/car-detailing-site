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
      <nav className={clsx(
        "w-full max-w-[1700px] metal-blur metal-border rounded-[2rem] flex items-center justify-between px-6 py-3 md:px-10 md:py-4 pointer-events-auto transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1)",
        scrolled
          ? "shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] border-white/20 bg-black/80 backdrop-blur-3xl"
          : "shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] border-white/10 bg-black/40"
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

      {/* Mobile Menu - Heavy Metal Blur */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[-1] lg:hidden pointer-events-auto"
            />

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-24 right-4 left-4 max-w-lg ml-auto metal-blur border border-white/10 rounded-[2.5rem] p-10 md:p-14 shadow-[0_60px_120px_rgba(0,0,0,1)] z-40 pointer-events-auto lg:hidden"
            >
              <div className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
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
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6 border-t border-white/5"
                >
                  <Link
                    href="/book"
                    onClick={handleNavClick}
                    className="w-full py-6 block text-center rounded-2xl bg-luxury-accent text-black font-bold uppercase tracking-[0.3em] text-[13px] shadow-[0_20px_40px_rgba(0,255,65,0.25)] active:scale-95 transition-transform"
                  >
                    Establish Aura
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
