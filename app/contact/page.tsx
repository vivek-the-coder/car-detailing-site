"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function ContactPage() {
    return (
        <section className="min-h-screen bg-[#030303] pt-32 pb-20">
            <div className="container-lux">
                <FadeIn direction="up">
                    <p className="text-luxury-sm text-luxury-accent uppercase tracking-[0.3em] font-medium mb-6">Concierge</p>
                    <h1 className="text-5xl md:text-7xl font-semibold text-white mb-10 tracking-tight">
                        Get in <span className="italic">Touch</span>
                    </h1>
                    <p className="text-luxury-body text-white/50 max-w-2xl mb-20">
                        Ready to begin your vehicle's transformation? Contact our specialists for a tailored consultation.
                    </p>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-10">
                    <div className="p-10 bg-zinc-950 rounded-3xl border border-white/5">
                        <p className="text-white/20 uppercase tracking-widest text-xs mb-8">Contact Form</p>
                        <div className="space-y-6">
                            <div className="h-12 bg-white/5 rounded-lg" />
                            <div className="h-12 bg-white/5 rounded-lg" />
                            <div className="h-32 bg-white/5 rounded-lg" />
                            <div className="h-12 bg-luxury-accent/10 border border-luxury-accent/20 rounded-lg" />
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="h-full bg-zinc-900 rounded-3xl border border-white/5 flex items-center justify-center">
                            <p className="text-white/20 uppercase tracking-widest text-xs">Location Map</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
