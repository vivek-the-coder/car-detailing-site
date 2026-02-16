"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function ProtectionPage() {
    return (
        <section className="min-h-screen bg-[#030303] pt-32 pb-20">
            <div className="container-lux">
                <FadeIn direction="up">
                    <p className="text-luxury-sm text-luxury-accent uppercase tracking-[0.3em] font-medium mb-6">Flagship</p>
                    <h1 className="text-5xl md:text-7xl font-semibold text-white mb-10 tracking-tight">
                        Ceramic & <span className="italic">PPF</span>
                    </h1>
                    <p className="text-luxury-body text-white/50 max-w-2xl mb-20">
                        This is your highest revenue page. Premium defense for those who demand the absolute best in automotive protection.
                    </p>
                </FadeIn>

                <div className="h-[400px] bg-gradient-to-br from-zinc-900 to-black rounded-3xl border border-white/5 flex items-center justify-center">
                    <p className="text-white/20 uppercase tracking-widest text-xs">Protection Comparison Table</p>
                </div>
            </div>
        </section>
    );
}
