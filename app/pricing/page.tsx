"use client";

import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function PricingPage() {
    return (
        <main className="bg-[#030303] text-white">
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center pt-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/herostudiodesk3.png"
                        alt="Pricing Hero"
                        fill
                        className="object-cover opacity-10 grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303]" />
                </div>

                <div className="container-lux relative z-10 text-center">
                    <FadeIn direction="up">
                        <p className="text-luxury-sm text-luxury-accent uppercase tracking-[0.4em] font-medium mb-8">Investment & Value</p>
                        <h1 className="text-5xl md:text-8xl font-semibold mb-8 tracking-tighter leading-[0.95] uppercase">
                            Protection<br />
                            <span className="text-luxury-accent">Packages</span>
                        </h1>
                        <p className="text-white/60 text-lg md:text-2xl max-w-3xl mx-auto font-light leading-relaxed italic">
                            Professional detailing and protection packages designed to restore, enhance, and preserve your vehicle.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Detailing Packages */}
            <section className="py-24">
                <div className="container-lux">
                    <FadeIn direction="up">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-medium tracking-tight uppercase italic">Detailing Tiers</h2>
                        </div>
                    </FadeIn>
                    <div className="grid md:grid-cols-3 gap-8">
                        <PricingCard
                            title="Essential Detail"
                            price="₹2,499"
                            features={[
                                "Exterior foam wash",
                                "Wheel and tire cleaning",
                                "Interior vacuum",
                                "Dashboard cleaning",
                                "Gloss enhancement",
                            ]}
                        />
                        <PricingCard
                            title="Interior Restoration"
                            price="₹4,999"
                            features={[
                                "Deep interior cleaning",
                                "Seat shampoo",
                                "Carpet extraction",
                                "Leather conditioning",
                                "Odor removal",
                            ]}
                        />
                        <PricingCard
                            title="Paint Enhancement"
                            price="₹7,999"
                            features={[
                                "Decontamination wash",
                                "Clay bar treatment",
                                "Machine polishing",
                                "Gloss enhancement",
                                "Protective sealant",
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Ceramic Highlight (Visual Anchor) */}
            <section className="py-24 md:py-32">
                <div className="container-lux">
                    <FadeIn direction="up">
                        <div className="relative rounded-[3rem] overflow-hidden bg-white text-black p-12 md:p-24 shadow-[0_50px_100px_rgba(0,255,65,0.2)] text-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-white via-luxury-accent/5 to-white pointer-events-none" />

                            <div className="relative z-10">
                                <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-black/40 mb-6 italic">Most Popular Choice</p>
                                <h2 className="text-4xl md:text-7xl font-semibold text-black mb-6 tracking-tighter uppercase italic">Ceramic Protection</h2>
                                <p className="text-3xl md:text-5xl font-bold mb-10 text-black tracking-tight">₹19,999 – ₹39,999</p>

                                <div className="max-w-xl mx-auto mb-16">
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                                        {[
                                            "Full Paint Correction",
                                            "Multi-layer Ceramic Coating",
                                            "Ultra Hydrophobic Protection",
                                            "3–5 Years Warrantied Durability",
                                            "Maximum Mirror Gloss",
                                            "Chemical & UV Resistance"
                                        ].map((f, i) => (
                                            <li key={i} className="flex items-center gap-3 text-black/70 font-medium">
                                                <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link
                                    href="/book"
                                    className="inline-block bg-black text-white px-16 py-6 rounded-full font-bold uppercase tracking-[0.3em] text-[11px] hover:scale-105 transition-all shadow-xl hover:shadow-black/20"
                                >
                                    Book Ceramic Protection
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* PPF Section */}
            <section className="py-24 md:py-32">
                <div className="container-lux">
                    <FadeIn direction="up">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-medium tracking-tight uppercase italic">Paint Protection Film</h2>
                        </div>
                    </FadeIn>
                    <div className="grid md:grid-cols-3 gap-8">
                        <PricingCard
                            title="Partial Protection"
                            price="₹25,000+"
                            features={[
                                "High-impact areas coverage",
                                "Physical scratch protection",
                                "Self-healing film technology",
                                "Preserves factory paint finish",
                            ]}
                        />
                        <PricingCard
                            highlight
                            title="Full Front Protection"
                            price="₹55,000+"
                            features={[
                                "Front bumper & headlights",
                                "Full hood and fenders",
                                "Side mirrors & door edges",
                                "Maximum front-end impact armor",
                            ]}
                        />
                        <PricingCard
                            title="Full Body Protection"
                            price="₹1,20,000+"
                            features={[
                                "Complete vehicle coverage",
                                "Absolute environmental armor",
                                "Self-healing advanced layer",
                                "Maximum resale value preservation",
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 relative overflow-hidden text-center border-t border-white/5">
                <div className="container-lux">
                    <FadeIn direction="up">
                        <h2 className="text-4xl md:text-7xl font-semibold mb-10 tracking-tighter uppercase italic">
                            Protect Your <span className="text-luxury-accent">Masterpiece</span>
                        </h2>
                        <p className="text-xl text-white/50 mb-16 max-w-2xl mx-auto font-light leading-relaxed italic">
                            Choose the protection package best suited for your vehicle. Our experts are ready to guide you through the selection process.
                        </p>
                        <Link
                            href="/book"
                            className="inline-block group relative bg-transparent border border-luxury-accent px-16 py-6 rounded-full overflow-hidden transition-all duration-500"
                        >
                            <span className="relative z-10 text-luxury-accent font-bold uppercase tracking-[0.4em] text-sm group-hover:text-black">
                                Book Now
                            </span>
                            <div className="absolute inset-0 bg-luxury-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}

function PricingCard({
    title,
    price,
    features,
    highlight,
}: {
    title: string;
    price: string;
    features: string[];
    highlight?: boolean;
}) {
    return (
        <FadeIn direction="up" delay={0.1}>
            <div
                className={`p-10 rounded-[2.5rem] border transition-all duration-500 group h-full flex flex-col ${highlight
                        ? "bg-white text-black border-white shadow-[0_30px_60px_rgba(255,255,255,0.1)] scale-105"
                        : "border-white/5 bg-zinc-900/30 hover:border-white/20"
                    }`}
            >
                <div className="mb-10">
                    <h3 className={`text-xl font-semibold uppercase tracking-widest mb-4 italic ${highlight ? "text-black" : "text-white"}`}>
                        {title}
                    </h3>
                    <p className={`text-4xl font-bold tracking-tighter ${highlight ? "text-black" : "text-luxury-accent"}`}>
                        {price}
                    </p>
                </div>

                <ul className="space-y-5 mb-12 flex-grow">
                    {features.map((feature, index) => (
                        <li key={index} className={`flex items-start gap-4 text-sm font-light ${highlight ? "text-black/70" : "text-white/50"}`}>
                            <div className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${highlight ? "bg-black/20" : "bg-luxury-accent/30"}`} />
                            {feature}
                        </li>
                    ))}
                </ul>

                <Link
                    href="/book"
                    className={`block text-center py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] transition-all ${highlight
                            ? "bg-black text-white hover:bg-neutral-800"
                            : "border border-white/20 text-white hover:bg-white hover:text-black hover:border-white"
                        }`}
                >
                    Book Now
                </Link>
            </div>
        </FadeIn>
    );
}
