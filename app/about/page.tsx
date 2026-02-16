"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function AboutPage() {
    return (
        <main className="bg-[#030303] text-white">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center pt-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/herostudiodesk.jpeg"
                        alt="The Studio"
                        fill
                        className="object-cover opacity-20 grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303]" />
                </div>

                <div className="container-lux relative z-10 text-center">
                    <FadeIn direction="up">
                        <p className="text-luxury-sm text-luxury-accent uppercase tracking-[0.4em] font-medium mb-8">Uncompromising Standards</p>
                        <h1 className="text-5xl md:text-8xl font-semibold mb-8 tracking-tighter leading-[0.95] uppercase">
                            Precision. Protection.<br />
                            <span className="text-luxury-accent">Perfection.</span>
                        </h1>
                        <p className="text-white/60 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed italic">
                            Aura Detailing is a professional automotive detailing studio dedicated to restoring and protecting vehicles with uncompromising precision.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 md:py-32">
                <div className="container-lux">
                    <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                        <FadeIn direction="right">
                            <p className="text-luxury-sm text-luxury-accent/60 uppercase tracking-[0.3em] font-medium mb-8">The Philosophy</p>
                            <h2 className="text-4xl md:text-6xl font-semibold text-white mb-8 tracking-tighter uppercase italic">Our Approach</h2>
                            <p className="text-xl text-white/50 font-light mb-8 italic leading-relaxed">
                                We believe automotive detailing is not just cleaning — it is surface refinement and long-term preservation.
                            </p>
                            <p className="text-lg text-white/40 font-light leading-relaxed mb-10">
                                Every vehicle undergoes a structured process including decontamination, correction, and protection. Our methods ensure maximum gloss, durability, and preservation of your vehicle’s original finish.
                            </p>
                            <div className="h-px w-24 bg-luxury-accent/40" />
                        </FadeIn>
                        <FadeIn direction="left">
                            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 group shadow-2xl">
                                <Image
                                    src="/images/bodyshop.png"
                                    alt="Detailing Process"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-[2000ms] opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Studio Environment Section */}
            <section className="py-24 md:py-32 bg-zinc-950/20">
                <div className="container-lux">
                    <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                        <FadeIn direction="right" className="lg:order-2">
                            <p className="text-luxury-sm text-luxury-accent/60 uppercase tracking-[0.3em] font-medium mb-8">Controlled Studio</p>
                            <h2 className="text-4xl md:text-6xl font-semibold text-white mb-8 tracking-tighter uppercase italic">The Studio Environment</h2>
                            <p className="text-xl text-white/50 font-light mb-10 italic leading-relaxed">
                                All services are performed inside a controlled detailing studio designed to eliminate contamination and ensure consistent, flawless results.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    "Professional lighting for defect detection",
                                    "Controlled environment application",
                                    "Industry-grade detailing tools",
                                    "Certified protection products"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-5 text-white/70 font-light text-lg">
                                        <div className="w-1.5 h-1.5 rounded-full bg-luxury-accent" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>
                        <FadeIn direction="left" className="lg:order-1">
                            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 group shadow-2xl">
                                <Image
                                    src="/herostudiodesk3.png"
                                    alt="Studio Environment"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-[2000ms] opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="py-24 md:py-32 border-b border-white/5">
                <div className="container-lux">
                    <FadeIn direction="up">
                        <div className="text-center max-w-4xl mx-auto">
                            <p className="text-luxury-sm text-luxury-accent uppercase tracking-[0.3em] font-medium mb-8">Core Expertise</p>
                            <h2 className="text-4xl md:text-6xl font-semibold mb-10 tracking-tight uppercase">Professional Automotive Protection</h2>
                            <p className="text-xl text-white/50 font-light leading-relaxed italic">
                                Our expertise includes paint correction, ceramic coating, and paint protection film installation. Every service is performed with precision to preserve your vehicle’s condition and value.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Why Choose Us Grid */}
            <section className="py-24 md:py-32">
                <div className="container-lux">
                    <FadeIn direction="up">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-medium tracking-tight uppercase italic">Why Choose Aura</h2>
                        </div>
                    </FadeIn>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Feature
                            title="Professional Process"
                            description="Structured detailing and protection workflow ensuring consistency and excellence."
                        />
                        <Feature
                            title="Premium Protection"
                            description="Access to industry-leading ceramic and self-healing PPF protection systems."
                        />
                        <Feature
                            title="Studio Environment"
                            description="State-of-the-art controlled facility eliminating environmental contamination."
                        />
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 relative overflow-hidden text-center border-t border-white/5">
                <div className="container-lux">
                    <FadeIn direction="up">
                        <h2 className="text-4xl md:text-7xl font-semibold mb-10 tracking-tighter uppercase italic leading-tight">
                            Protect Your Vehicle <br /> <span className="text-luxury-accent">With Confidence</span>
                        </h2>
                        <p className="text-xl text-white/50 mb-16 max-w-2xl mx-auto font-light leading-relaxed italic">
                            Professional detailing and protection tailored to your vehicle. Choose the standard your car deserves.
                        </p>
                        <Link
                            href="/book"
                            className="inline-block group relative bg-transparent border border-luxury-accent px-16 py-6 rounded-full overflow-hidden transition-all duration-500"
                        >
                            <span className="relative z-10 text-luxury-accent font-bold uppercase tracking-[0.4em] text-sm group-hover:text-black">
                                Book Your Session
                            </span>
                            <div className="absolute inset-0 bg-luxury-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}

function Feature({ title, description }: { title: string; description: string }) {
    return (
        <FadeIn direction="up" delay={0.1}>
            <div className="p-12 rounded-[2.5rem] border border-white/5 bg-zinc-900/40 hover:border-luxury-accent/30 hover:bg-zinc-900/60 transition-all duration-500 group h-full">
                <div className="w-12 h-px bg-luxury-accent/40 mb-8 group-hover:w-20 transition-all duration-500" />
                <h3 className="text-2xl font-semibold text-white mb-6 uppercase tracking-tight italic">{title}</h3>
                <p className="text-white/40 font-light leading-relaxed group-hover:text-white/60 transition-colors">
                    {description}
                </p>
            </div>
        </FadeIn>
    );
}
