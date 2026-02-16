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

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="aspect-square bg-zinc-900 rounded-2xl border border-white/5" />
                    ))}
                </div>
            </div>
        </section>
    );
}
