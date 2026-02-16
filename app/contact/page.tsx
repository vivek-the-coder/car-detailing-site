"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function ContactPage() {
    return (
        <main className="bg-[#030303] text-white">
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center pt-32 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-luxury-accent/5 blur-[150px] rounded-full" />
                </div>

                <div className="container-lux relative z-10 text-center">
                    <FadeIn direction="up">
                        <p className="text-luxury-sm text-luxury-accent uppercase tracking-[0.4em] font-medium mb-6 md:mb-8">Concierge Service</p>
                        <h1 className="text-4xl md:text-8xl font-semibold mb-8 tracking-tighter leading-[1.1] md:leading-[0.95] uppercase italic">
                            Contact <span className="text-luxury-accent">Aura</span> Detailing
                        </h1>
                        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed italic">
                            Book your detailing service or get in touch with our specialists for a tailored consultation.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Contact Info + Form */}
            <section className="py-24 md:py-32">
                <div className="container-lux">
                    <div className="grid lg:grid-cols-2 gap-20 items-start">

                        {/* Information Column */}
                        <FadeIn direction="right">
                            <div className="space-y-12 md:space-y-16">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-semibold mb-8 md:mb-10 tracking-tight uppercase italic">Studio Information</h2>
                                    <div className="grid sm:grid-cols-2 gap-10">
                                        <div className="space-y-8">
                                            <ContactInfoItem
                                                label="Location"
                                                value="Vadodara, Gujarat, India"
                                            />
                                            <ContactInfoItem
                                                label="Business Hours"
                                                value="Monday – Saturday"
                                                subValue="9:00 AM – 7:00 PM"
                                            />
                                        </div>
                                        <div className="space-y-8">
                                            <ContactInfoItem
                                                label="Direct Line"
                                                value="+91 XXXXX XXXXX"
                                            />
                                            <ContactInfoItem
                                                label="Correspondence"
                                                value="contact@auradetailing.com"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Quick Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-6">
                                    <a
                                        href="tel:+91XXXXXXXXXX"
                                        className="group relative flex-1 bg-white text-black py-6 rounded-full text-center font-bold uppercase tracking-[0.3em] text-[11px] transition-all hover:scale-[1.02] active:scale-95"
                                    >
                                        <span className="relative z-10">Call Studio</span>
                                    </a>
                                    <a
                                        href="https://wa.me/91XXXXXXXXXX"
                                        target="_blank"
                                        className="group relative flex-1 bg-luxury-accent text-black py-6 rounded-full text-center font-bold uppercase tracking-[0.3em] text-[11px] transition-all hover:scale-[1.02] active:scale-95 shadow-[0_10px_30px_rgba(0,255,65,0.2)]"
                                    >
                                        <span className="relative z-10">WhatsApp Desk</span>
                                    </a>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Form Column */}
                        <FadeIn direction="left">
                            <div className="p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] border border-white/5 bg-zinc-900/30">
                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-8 md:mb-10 uppercase tracking-widest italic">Send a Message</h3>
                                <form className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-4">Identification</label>
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            className="w-full bg-white/[0.03] border border-white/5 p-5 rounded-2xl outline-none focus:border-luxury-accent/50 transition-colors text-white font-light"
                                        />
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-4">Email</label>
                                            <input
                                                type="email"
                                                placeholder="Address"
                                                className="w-full bg-white/[0.03] border border-white/5 p-5 rounded-2xl outline-none focus:border-luxury-accent/50 transition-colors text-white font-light"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-4">Mobile</label>
                                            <input
                                                type="tel"
                                                placeholder="Number"
                                                className="w-full bg-white/[0.03] border border-white/5 p-5 rounded-2xl outline-none focus:border-luxury-accent/50 transition-colors text-white font-light"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-4">Message</label>
                                        <textarea
                                            placeholder="Detail your request..."
                                            rows={5}
                                            className="w-full bg-white/[0.03] border border-white/5 p-5 rounded-2xl outline-none focus:border-luxury-accent/50 transition-colors text-white font-light resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full group relative bg-transparent border border-white/10 py-6 rounded-full overflow-hidden transition-all duration-500 mt-4"
                                    >
                                        <span className="relative z-10 text-white font-bold uppercase tracking-[0.3em] text-[11px] group-hover:text-black">
                                            Send Message
                                        </span>
                                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                    </button>
                                </form>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-24 md:py-32 bg-zinc-950/20">
                <div className="container-lux">
                    <FadeIn direction="up">
                        <div className="text-center mb-12 md:mb-16">
                            <p className="text-luxury-sm text-luxury-accent uppercase tracking-[0.3em] font-medium mb-4 md:mb-6">Navigation</p>
                            <h2 className="text-3xl md:text-6xl font-semibold text-white tracking-tight uppercase italic">Visit Our Studio</h2>
                        </div>
                        <div className="relative aspect-[16/9] w-full rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-900 group">
                            {/* Placeholder for Google Maps - Add real embed here */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center space-y-4">
                                    <div className="w-16 h-16 rounded-full bg-luxury-accent/10 flex items-center justify-center mx-auto border border-luxury-accent/20">
                                        <div className="w-2 h-2 rounded-full bg-luxury-accent animate-ping" />
                                    </div>
                                    <p className="text-white/20 uppercase tracking-widest text-[10px] font-bold">Google Maps Engine Integration Pending</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-black/40 pointer-events-none group-hover:bg-black/20 transition-colors duration-700" />
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 relative overflow-hidden text-center border-t border-white/5">
                <div className="container-lux">
                    <FadeIn direction="up">
                        <h2 className="text-3xl md:text-7xl font-semibold mb-8 md:mb-10 tracking-tighter uppercase italic leading-tight">
                            Ready to Protect <br /> <span className="text-luxury-accent">Your Investment?</span>
                        </h2>
                        <p className="text-lg md:text-xl text-white/50 mb-12 md:mb-16 max-w-2xl mx-auto font-light leading-relaxed italic">
                            Experience the standard of surgical detailing. Professional protection tailored to your vehicle&apos;s unique needs.
                        </p>
                        <Link
                            href="/book"
                            className="inline-block group relative bg-white border border-white px-12 py-5 md:px-16 md:py-6 rounded-full overflow-hidden transition-all duration-500"
                        >
                            <span className="relative z-10 text-black font-bold uppercase tracking-[0.4em] text-[12px] md:text-sm group-hover:text-white">
                                Book Now
                            </span>
                            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}

function ContactInfoItem({ label, value, subValue }: { label: string; value: string; subValue?: string }) {
    return (
        <div className="space-y-2 md:space-y-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-luxury-accent font-bold">{label}</p>
            <div className="space-y-1">
                <p className="text-lg md:text-xl text-white font-medium tracking-tight leading-none">{value}</p>
                {subValue && <p className="text-sm md:text-base text-white/40 font-light italic">{subValue}</p>}
            </div>
        </div>
    );
}
