"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function PortfolioPage() {
    return (
        <section className="min-h-screen bg-[#030303] pt-32 pb-20">
            <div className="container-lux">
                <FadeIn direction="up">
                    <p className="text-luxury-sm text-luxury-accent uppercase tracking-[0.3em] font-medium mb-6">Gallery</p>
                    <h1 className="text-5xl md:text-7xl font-semibold text-white mb-10 tracking-tight">
                        Our <span className="italic">Work</span>
                    </h1>
                    <p className="text-luxury-body text-white/50 max-w-2xl mb-20">
                        Evidence of our commitment to perfection. Explore our portfolio of luxury, sports, and exotic vehicle transformations.
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <FadeIn key={i} delay={i * 0.1} padding={false}>
                            <div className="relative aspect-square bg-zinc-900/50 rounded-[2rem] border border-white/5 overflow-hidden group hover:border-luxury-accent/30 transition-all duration-[1500ms]">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10" />
                                <div className="absolute bottom-8 left-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                                    <p className="text-luxury-accent text-[10px] uppercase tracking-[0.3em] font-bold mb-2">Ceramic Protection</p>
                                    <p className="text-white text-lg font-medium tracking-tight italic">Mercedes AMG-GT</p>
                                </div>
                                <div className="absolute inset-0 noise-texture opacity-[0.03] z-0" />
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
