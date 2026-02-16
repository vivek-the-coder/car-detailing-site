"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function ProtectionPage() {
    return (
        <main className="bg-[#030303] text-white">
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center justify-center pt-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/herostudiodesk2.png"
                        alt="Protection Studio"
                        fill
                        className="object-cover opacity-20 grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303]" />
                </div>

                <div className="container-lux relative z-10 text-center">
                    <FadeIn direction="up">
                        <p className="text-luxury-sm text-luxury-accent uppercase tracking-[0.4em] font-medium mb-8">Defensive Engineering</p>
                        <h1 className="text-5xl md:text-8xl font-semibold mb-8 tracking-tighter leading-[0.95] uppercase">
                            Permanent Protection.<br />
                            <span className="text-luxury-accent">Absolute</span> Preservation.
                        </h1>
                        <p className="text-white/60 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed italic">
                            Our advanced protection systems defend your vehicle against environmental damage, scratches, and long-term wear while preserving its original finish.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Ceramic Coating Section */}
            <section className="py-24 md:py-32">
                <div className="container-lux">
                    <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                        <FadeIn direction="right">
                            <p className="text-luxury-sm text-luxury-accent/60 uppercase tracking-[0.3em] font-medium mb-8">Molecular Shield</p>
                            <h2 className="text-4xl md:text-6xl font-semibold text-white mb-8 tracking-tighter uppercase italic">Ceramic Coating</h2>
                            <p className="text-xl text-white/50 font-light mb-10 italic leading-relaxed">
                                Ceramic coating forms a hardened nano-protection layer over your vehicle’s paint.
                                This invisible barrier protects against UV damage, oxidation, chemicals, and environmental contamination.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Long-term protection (3–5 years)",
                                    "Hydrophobic water-repelling surface",
                                    "UV and chemical resistance",
                                    "Enhanced gloss and paint depth",
                                    "Reduced maintenance effort"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-4 text-white/70 font-light text-lg">
                                        <div className="w-6 h-px bg-luxury-accent/30" />
                                        • {item}
                                    </li>
                                ))}
                            </ul>
                        </FadeIn>
                        <FadeIn direction="left">
                            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 group">
                                <Image
                                    src="/images/ceramiccoating.png"
                                    alt="Ceramic Coating"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* PPF Highlight Section (MASSIVE VISUAL EMPHASIS - LIGHT MODE CARD) */}
            <section className="py-24 md:py-32">
                <div className="container-lux">
                    <FadeIn direction="up">
                        <div className="relative rounded-[3rem] overflow-hidden bg-white text-black p-10 md:p-24 shadow-[0_50px_100px_rgba(0,0,0,0.3)]">
                            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                                <span className="text-[12rem] font-bold leading-none">PPF</span>
                            </div>
                            <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
                                <div>
                                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/5 mb-8">
                                        <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                                        <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-black/60">Invisible Armor</span>
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-semibold text-black mb-8 tracking-tighter uppercase italic">Paint Protection Film</h2>
                                    <p className="text-xl text-black/70 font-light mb-10 italic leading-relaxed">
                                        Paint Protection Film (PPF) is a transparent, self-healing film that protects your vehicle
                                        against physical damage including stone chips, scratches, and abrasion.
                                    </p>
                                    <ul className="space-y-4">
                                        {[
                                            "Stone chip protection",
                                            "Scratch resistance",
                                            "Self-healing surface technology",
                                            "Preserves original factory paint",
                                            "Invisible protective layer"
                                        ].map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-4 text-black/60 font-medium text-lg">
                                                <div className="w-6 h-px bg-black/20" />
                                                • {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/images/ppf.png"
                                        alt="PPF Protection"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-24 md:py-32 bg-zinc-950/20">
                <div className="container-lux">
                    <FadeIn direction="up">
                        <div className="text-center mb-20">
                            <p className="text-luxury-sm text-luxury-accent uppercase tracking-[0.3em] font-medium mb-6">Decision Matrix</p>
                            <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight uppercase">Protection Comparison</h2>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 gap-10">
                        <FadeIn direction="right">
                            <div className="h-full p-10 md:p-16 rounded-[2rem] border border-white/5 bg-zinc-900/30 hover:border-white/20 transition-all duration-500">
                                <h3 className="text-2xl font-semibold text-white mb-10 uppercase tracking-widest italic text-center">Ceramic Coating</h3>
                                <ul className="space-y-5">
                                    {[
                                        "Enhances gloss",
                                        "Hydrophobic protection",
                                        "UV resistance",
                                        "Chemical resistance"
                                    ].map((li, i) => (
                                        <li key={i} className="flex items-center gap-4 text-white/50 border-b border-white/10 pb-4 last:border-0 font-light">
                                            <span className="w-1.5 h-1.5 rounded-full bg-luxury-accent/40" />
                                            {li}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                        <FadeIn direction="left">
                            <div className="h-full p-10 md:p-16 rounded-[2rem] border border-white/5 bg-zinc-900/30 hover:border-white/20 transition-all duration-500">
                                <h3 className="text-2xl font-semibold text-white mb-10 uppercase tracking-widest italic text-center">Paint Protection Film</h3>
                                <ul className="space-y-5">
                                    {[
                                        "Physical impact protection",
                                        "Scratch protection",
                                        "Self-healing surface",
                                        "Maximum preservation"
                                    ].map((li, i) => (
                                        <li key={i} className="flex items-center gap-4 text-white/50 border-b border-white/10 pb-4 last:border-0 font-light">
                                            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                            {li}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 md:py-32">
                <div className="container-lux">
                    <FadeIn direction="up">
                        <h2 className="text-4xl md:text-7xl font-semibold mb-20 text-center tracking-tighter uppercase italic">Our Protection Process</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <ProcessStep
                                number="01"
                                title="Surface Preparation"
                                description="Complete decontamination and paint correction."
                            />
                            <ProcessStep
                                number="02"
                                title="Application"
                                description="Precision application of ceramic coating or PPF."
                            />
                            <ProcessStep
                                number="03"
                                title="Curing"
                                description="Controlled curing process for maximum durability."
                            />
                            <ProcessStep
                                number="04"
                                title="Final Inspection"
                                description="Quality inspection to ensure flawless results."
                            />
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 relative overflow-hidden text-center border-t border-white/5">
                <div className="container-lux">
                    <FadeIn direction="up">
                        <h2 className="text-4xl md:text-7xl font-semibold mb-10 tracking-tighter uppercase italic">
                            Protect Your <span className="text-luxury-accent">Investment</span>
                        </h2>
                        <p className="text-xl text-white/50 mb-16 max-w-2xl mx-auto font-light leading-relaxed italic">
                            Professional-grade protection trusted by automotive enthusiasts.
                            Secure your vehicle's future with the world's most advanced defense systems.
                        </p>
                        <Link
                            href="/book"
                            className="inline-block group relative bg-transparent border border-luxury-accent px-16 py-6 rounded-full overflow-hidden transition-all duration-500"
                        >
                            <span className="relative z-10 text-luxury-accent font-bold uppercase tracking-[0.4em] text-sm group-hover:text-black">
                                Book Protection Service
                            </span>
                            <div className="absolute inset-0 bg-luxury-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}

function ProcessStep({ number, title, description }: { number: string; title: string; description: string }) {
    return (
        <div className="p-10 rounded-3xl border border-white/5 bg-zinc-900/20 hover:border-luxury-accent/30 hover:bg-zinc-900/40 transition-all duration-500 group">
            <div className="text-luxury-accent/40 text-sm font-bold tracking-[0.3em] mb-6 group-hover:text-luxury-accent transition-colors">
                {number}
            </div>
            <h3 className="text-xl font-medium text-white mb-4 uppercase tracking-tight">{title}</h3>
            <p className="text-white/40 text-sm font-light leading-relaxed group-hover:text-white/60 transition-colors">
                {description}
            </p>
        </div>
    );
}
