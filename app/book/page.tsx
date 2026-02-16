"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function BookPage() {
    return (
        <section className="min-h-screen bg-[#030303] pt-32 pb-20">
            <div className="container-lux">
                <FadeIn direction="up">
                    <p className="text-luxury-sm text-luxury-accent uppercase tracking-[0.3em] font-medium mb-6">Reservation</p>
                    <h1 className="text-5xl md:text-7xl font-semibold text-white mb-10 tracking-tight">
                        Secure Your <span className="italic">Aura</span>
                    </h1>
                    <p className="text-luxury-body text-white/50 max-w-2xl mb-20">
                        Select your desired service and preferred schedule. Our team will confirm your reservation within 24 hours.
                    </p>
                </FadeIn>

                <div className="max-w-3xl mx-auto p-10 bg-zinc-950 rounded-3xl border border-luxury-accent/20 shadow-[0_0_50px_rgba(0,255,65,0.05)]">
                    <p className="text-center text-white/20 uppercase tracking-widest text-xs mb-10">Booking Interface</p>
                    <div className="space-y-8">
                        {/* Service Selection Placeholder */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="h-20 bg-white/5 rounded-xl border border-white/10" />
                            <div className="h-20 bg-white/5 rounded-xl border border-white/10" />
                            <div className="h-20 bg-white/5 rounded-xl border border-white/10" />
                            <div className="h-20 bg-luxury-accent/5 border border-luxury-accent/20 rounded-xl" />
                        </div>
                        <div className="h-40 bg-white/5 rounded-xl border border-white/10" />
                        <button className="w-full py-6 bg-luxury-accent text-black font-bold uppercase tracking-[0.3em] text-[11px] rounded-full hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all">
                            Request Appointment
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
