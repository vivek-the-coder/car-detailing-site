"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function AboutPage() {
    return (
        <section className="min-h-screen bg-[#030303] pt-32 pb-20">
            <div className="container-lux">
                <FadeIn direction="up">
                    <p className="text-luxury-sm text-luxury-accent uppercase tracking-[0.3em] font-medium mb-6">Facility</p>
                    <h1 className="text-5xl md:text-7xl font-semibold text-white mb-10 tracking-tight">
                        The <span className="italic">Studio</span>
                    </h1>
                    <p className="text-luxury-body text-white/50 max-w-2xl mb-20">
                        Our facility is designed for surgical precision. We maintain a controlled environment to ensure every ceramic application and PPF installation is flawless.
                    </p>
                </FadeIn>

                <div className="aspect-[21/9] bg-zinc-900 rounded-3xl border border-white/5 flex items-center justify-center">
                    <p className="text-white/20 uppercase tracking-widest text-xs">Studio Facility Image</p>
                </div>
            </div>
        </section>
    );
}
