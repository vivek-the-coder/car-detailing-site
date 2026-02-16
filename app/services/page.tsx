"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function ServicesPage() {
    return (
        <section className="min-h-screen bg-[#030303] pt-32 pb-20">
            <div className="container-lux">
                <FadeIn direction="up">
                    <p className="text-luxury-sm text-luxury-accent uppercase tracking-[0.3em] font-medium mb-6">Expertise</p>
                    <h1 className="text-5xl md:text-7xl font-semibold text-white mb-10 tracking-tight">
                        Our <span className="italic">Services</span>
                    </h1>
                    <p className="text-luxury-body text-white/50 max-w-2xl mb-20">
                        Complete detailing solutions including interior, exterior, paint correction, ceramic coating, and PPF. We elevate automotive care into an art form.
                    </p>
                </FadeIn>

                {/* Placeholders for Content */}
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="aspect-video bg-zinc-900 rounded-3xl border border-white/5 flex items-center justify-center">
                        <p className="text-white/20 uppercase tracking-widest text-xs">Exterior Detailing</p>
                    </div>
                    <div className="aspect-video bg-zinc-900 rounded-3xl border border-white/5 flex items-center justify-center">
                        <p className="text-white/20 uppercase tracking-widest text-xs">Interior Restoration</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
