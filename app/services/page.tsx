"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function ServicesPage() {
    return (
        <main className="bg-[#030303] text-white">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center pt-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/herostudiodesk3.png"
                        alt="Aura Studio"
                        fill
                        className="object-cover opacity-30 grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303]" />
                </div>

                <div className="container-lux relative z-10 text-center">
                    <FadeIn direction="up">
                        <p className="text-luxury-sm text-luxury-accent uppercase tracking-[0.4em] font-medium mb-8">Engineering Perfection</p>
                        <h1 className="text-5xl md:text-8xl font-semibold mb-8 tracking-tighter leading-[0.95] uppercase">
                            Precision Detailing.<br />
                            <span className="text-luxury-accent">Permanent</span> Protection.
                        </h1>
                        <p className="text-white/60 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed italic">
                            Every surface refined. Every detail perfected. Our professional detailing restores and protects your vehicle to its highest possible condition.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-24 border-b border-white/5 bg-zinc-950/20">
                <div className="container-lux">
                    <FadeIn direction="up">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-5xl font-medium mb-10 tracking-tight">The Aura Methodology</h2>
                            <p className="text-xl text-white/50 leading-relaxed font-light italic">
                                At Aura Detailing, we don’t clean vehicles — we restore their original presence.
                                Using industry-leading tools, professional-grade coatings, and controlled studio environments,
                                every service is engineered to deliver flawless results and long-term protection.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Core Services */}
            <section className="py-32 space-y-48">
                <div className="container-lux">
                    {/* Exterior Detailing */}
                    <ServiceBlock
                        title="Exterior Detailing"
                        tag="Restoration"
                        description="Safely removes contamination and restores deep gloss while protecting your paint surface. We tackle iron particles, UV damage, and environmental fallout."
                        image="/images/bodyshop.png"
                        features={[
                            "Foam pre-wash and safe contact wash",
                            "Wheel and brake dust deep cleaning",
                            "Iron and fallout decontamination",
                            "Clay bar surface purification",
                            "High-gloss protective sealant",
                        ]}
                    />

                    {/* Interior Detailing */}
                    <ServiceBlock
                        title="Interior Detailing"
                        tag="Hygiene & Comfort"
                        description="Deep cleaning and restoration of interior materials. We remove embedded contaminants while restoring the original factory finish of leather, fabric, and trim."
                        image="/images/1000250563.jpg"
                        reversed
                        features={[
                            "Full interior vacuum and dust removal",
                            "Seat, carpet, and fabric deep cleaning",
                            "Leather cleaning and conditioning",
                            "Dashboard and trim restoration",
                            "Odor neutralization",
                        ]}
                    />

                    {/* Paint Correction */}
                    <ServiceBlock
                        title="Paint Correction"
                        tag="Optical Clarity"
                        description="Our surgical machine polishing process eliminates swirl marks, scratches, and oxidation, revealing the true depth of your paintwork."
                        image="/images/bodyshop.png"
                        features={[
                            "Multi-stage machine polishing",
                            "Swirl mark and micro-scratch removal",
                            "Oxidation and haze correction",
                            "Paint clarity restoration",
                            "Maximum gloss enhancement",
                        ]}
                    />

                    {/* Ceramic Coating (Highlighted Card) */}
                    <FadeIn direction="up">
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-luxury-accent/30 bg-zinc-900/40 p-12 md:p-24 shadow-[0_40px_100px_rgba(0,255,65,0.1)]">
                            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                                <span className="text-[12rem] font-bold leading-none">04</span>
                            </div>
                            <div className="grid lg:grid-cols-2 gap-20 items-center">
                                <div>
                                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-luxury-accent/30 bg-luxury-accent/5 mb-8">
                                        <span className="w-2 h-2 rounded-full bg-luxury-accent animate-pulse shadow-[0_0_10px_#00ff41]" />
                                        <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-luxury-accent">Legacy Protection</span>
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-semibold text-white mb-8 tracking-tighter uppercase italic">Ceramic Coating</h2>
                                    <p className="text-xl text-white/70 font-light mb-12 italic leading-relaxed">
                                        A permanent nano-protection layer that bonds to your vehicle's surface.
                                        It shields against environmental hazards while providing an eternal, ultra-hydrophobic mirror gloss.
                                    </p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                                        {[
                                            "3–5 years permanent protection",
                                            "Extreme hydrophobic surface",
                                            "UV and Chemical resistance",
                                            "Surgical depth and gloss",
                                            "Reduced maintenance effort",
                                            "Molecular bonding technology"
                                        ].map((f, i) => (
                                            <li key={i} className="flex items-center gap-4 text-white/60 font-light">
                                                <span className="w-1.5 h-1.5 rounded-full bg-luxury-accent" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/5">
                                    <Image
                                        src="/images/ceramiccoating.png"
                                        alt="Ceramic Coating"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* PPF */}
                    <div className="mt-48">
                        <ServiceBlock
                            title="Paint Protection Film"
                            tag="Physical Armor"
                            description="The ultimate physical barrier. A transparent, self-healing film that protects your factory paint from rock chips, abrasions, and road debris."
                            image="/images/ppf.png"
                            reversed
                            features={[
                                "Stone chip impact protection",
                                "Self-healing micro-scratches",
                                "Acid rain and chemical resistance",
                                "Preserves resale value",
                                "100% invisible clarity",
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Studio Environment Section */}
            <section className="py-32 bg-zinc-950/40 relative overflow-hidden">
                <div className="container-lux relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <FadeIn direction="right">
                            <p className="text-luxury-sm text-luxury-accent uppercase tracking-[0.3em] font-medium mb-8">Controlled Excellence</p>
                            <h2 className="text-4xl md:text-6xl font-semibold mb-10 tracking-tight uppercase">Studio Process</h2>
                            <p className="text-xl text-white/50 leading-relaxed font-light italic mb-12">
                                Every vehicle is serviced inside a controlled studio environment designed to eliminate external contamination and ensure consistent, flawless results.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { t: "Professional Lighting", d: "High-intensity multi-spectrum light arrays to reveal microscopic defects." },
                                    { t: "Controlled Environment", d: "Dust-filtered air and temperature regulation for optimal coating bonding." },
                                    { t: "Surgical Tools", d: "Rupes® and Flex® polishing systems with precision backing plates." },
                                    { t: "Certified Expertise", d: "Technicians trained to handle the world's most delicate paint systems." },
                                ].map((item, idx) => (
                                    <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                                        <h4 className="text-white font-medium mb-2">{item.t}</h4>
                                        <p className="text-white/40 text-sm">{item.d}</p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                        <FadeIn direction="left">
                            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10">
                                <Image
                                    src="/herostudiodesk3.png"
                                    alt="Studio Environment"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 relative overflow-hidden text-center border-t border-white/5">
                <div className="container-lux">
                    <FadeIn direction="up">
                        <h2 className="text-4xl md:text-7xl font-semibold mb-10 tracking-tighter uppercase italic">
                            Secure your <span className="text-luxury-accent">Masterpiece</span> today
                        </h2>
                        <p className="text-xl text-white/50 mb-16 max-w-2xl mx-auto font-light leading-relaxed italic">
                            Your vehicle deserves more than basic cleaning. It deserves preservation.
                            Aura Detailing delivers professional automotive protection trusted by owners who expect uncompromising results.
                        </p>
                        <Link
                            href="/book"
                            className="inline-block group relative bg-transparent border border-luxury-accent px-16 py-6 rounded-full overflow-hidden transition-all duration-500"
                        >
                            <span className="relative z-10 text-luxury-accent font-bold uppercase tracking-[0.4em] text-sm group-hover:text-black">
                                Book Your Appointment
                            </span>
                            <div className="absolute inset-0 bg-luxury-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}

interface ServiceBlockProps {
    title: string;
    tag: string;
    description: string;
    image: string;
    features: string[];
    reversed?: boolean;
}

function ServiceBlock({ title, tag, description, image, features, reversed }: ServiceBlockProps) {
    return (
        <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className={`${reversed ? "lg:order-2" : ""}`}>
                <FadeIn direction={reversed ? "left" : "right"}>
                    <p className="text-luxury-sm text-luxury-accent/60 uppercase tracking-[0.3em] font-medium mb-8">{tag}</p>
                    <h2 className="text-4xl md:text-6xl font-semibold text-white mb-8 tracking-tighter uppercase italic">{title}</h2>
                    <p className="text-xl text-white/50 font-light mb-12 italic leading-relaxed">
                        {description}
                    </p>
                    <ul className="space-y-6">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-5 text-white/70 font-light text-lg">
                                <div className="w-6 h-px bg-luxury-accent/30" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </FadeIn>
            </div>
            <div className={`${reversed ? "lg:order-1" : ""}`}>
                <FadeIn direction={reversed ? "right" : "left"}>
                    <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 group">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-[2000ms] ease-out opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
