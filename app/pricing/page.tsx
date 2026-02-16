"use client";

import Pricing from "@/components/Pricing";
import FadeIn from "@/components/ui/FadeIn";

export default function PricingPage() {
    return (
        <div className="bg-[#030303]">
            <section className="pt-32">
                <div className="container-lux">
                    <FadeIn direction="up">
                        <p className="text-luxury-sm text-luxury-accent uppercase tracking-[0.3em] font-medium mb-6">Investment</p>
                        <h1 className="text-5xl md:text-7xl font-semibold text-white mb-10 tracking-tight">
                            Pricing <span className="italic">Plans</span>
                        </h1>
                    </FadeIn>
                </div>
            </section>
            <Pricing />
        </div>
    );
}
