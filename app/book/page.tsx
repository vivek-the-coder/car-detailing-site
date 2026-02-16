"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

export default function BookPage() {
    const [form, setForm] = useState({
        name: "",
        car: "",
        type: "Luxury Sedan",
        service: "",
        date: "",
        slot: "Morning (9 AM - 12 PM)",
        phone: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const message = `✨ *New Booking Request - The Detailing Aura* ✨

👤 *Client:* ${form.name}
🚗 *Vehicle:* ${form.car} (${form.type})
🛠️ *Service:* ${form.service}

📅 *Preferred Date:* ${form.date}
⏰ *Time Slot:* ${form.slot}
📱 *Phone:* ${form.phone}

_Request sent via website booking engine._`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/919979068777?text=${encodedMessage}`;

        window.open(whatsappUrl, "_blank");
    };

    return (
        <main className="bg-[#030303] text-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-luxury-accent/5 to-transparent blur-[120px]" />
                </div>

                <div className="container-lux relative z-10 text-center">
                    <FadeIn direction="up">
                        <p className="text-luxury-sm text-luxury-accent uppercase tracking-[0.4em] font-medium mb-8">Reservation</p>
                        <h1 className="text-5xl md:text-8xl font-semibold mb-8 tracking-tighter leading-[0.95] uppercase italic">
                            Secure your <span className="text-luxury-accent">Aura</span>
                        </h1>
                        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed italic">
                            Professional detailing tailored to your schedule. Complete the form below to initiate your transformation via WhatsApp.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Booking Form Layout */}
            <section className="pb-32">
                <div className="container-lux">
                    <FadeIn direction="up" delay={0.2}>
                        <div className="max-w-4xl mx-auto">
                            <form
                                onSubmit={handleSubmit}
                                className="grid md:grid-cols-2 gap-x-12 gap-y-8 p-10 md:p-20 rounded-[3rem] border border-white/5 bg-zinc-900/30 backdrop-blur-xl shadow-2xl"
                            >
                                {/* Left Column: Client & Vehicle Info */}
                                <div className="space-y-8">
                                    <h3 className="text-luxury-sm text-white/40 uppercase tracking-widest font-bold mb-4">01. Vehicle Details</h3>

                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-4">Owner Name</label>
                                        <input
                                            name="name"
                                            required
                                            onChange={handleChange}
                                            placeholder="Full Name"
                                            className="w-full bg-white/[0.03] border border-white/5 p-5 rounded-2xl outline-none focus:border-luxury-accent/50 transition-colors text-white font-light"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-4">Vehicle Model</label>
                                        <input
                                            name="car"
                                            required
                                            onChange={handleChange}
                                            placeholder="e.g. Mercedes S-Class / Defender"
                                            className="w-full bg-white/[0.03] border border-white/5 p-5 rounded-2xl outline-none focus:border-luxury-accent/50 transition-colors text-white font-light"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-4">Vehicle Category</label>
                                        <select
                                            name="type"
                                            onChange={handleChange}
                                            className="w-full bg-white/[0.03] border border-white/5 p-5 rounded-2xl outline-none focus:border-luxury-accent/50 transition-colors text-white/70 font-light appearance-none"
                                        >
                                            <option className="bg-zinc-900">Luxury Sedan</option>
                                            <option className="bg-zinc-900">Premium SUV</option>
                                            <option className="bg-zinc-900">Supercar / Sports</option>
                                            <option className="bg-zinc-900">Executive Hatchback</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Right Column: Service & Time */}
                                <div className="space-y-8">
                                    <h3 className="text-luxury-sm text-white/40 uppercase tracking-widest font-bold mb-4">02. Service & Schedule</h3>

                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-4">Select Service</label>
                                        <select
                                            name="service"
                                            required
                                            onChange={handleChange}
                                            className="w-full bg-white/[0.03] border border-white/5 p-5 rounded-2xl outline-none focus:border-luxury-accent/50 transition-colors text-white/70 font-light appearance-none"
                                        >
                                            <option value="" className="bg-zinc-900">Choose Treatment</option>
                                            <option className="bg-zinc-900">Exterior Detailing</option>
                                            <option className="bg-zinc-900">Interior Restoration</option>
                                            <option className="bg-zinc-900">Full Paint Correction</option>
                                            <option className="bg-zinc-900">Ceramic Protection Package</option>
                                            <option className="bg-zinc-900">Full Front PPF</option>
                                            <option className="bg-zinc-900">Full Body PPF</option>
                                        </select>
                                    </div>

                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-4">Date</label>
                                            <input
                                                type="date"
                                                name="date"
                                                required
                                                onChange={handleChange}
                                                className="w-full bg-white/[0.03] border border-white/5 p-5 rounded-2xl outline-none focus:border-luxury-accent/50 transition-colors text-white/40 font-light"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-4">Preferred Slot</label>
                                            <select
                                                name="slot"
                                                onChange={handleChange}
                                                className="w-full bg-white/[0.03] border border-white/5 p-5 rounded-2xl outline-none focus:border-luxury-accent/50 transition-colors text-white/70 font-light appearance-none"
                                            >
                                                <option className="bg-zinc-900">Morning (9 AM - 12 PM)</option>
                                                <option className="bg-zinc-900">Afternoon (1 PM - 4 PM)</option>
                                                <option className="bg-zinc-900">Evening (4 PM - 7 PM)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-4">Contact Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            onChange={handleChange}
                                            placeholder="+91 Phone Number"
                                            className="w-full bg-white/[0.03] border border-white/5 p-5 rounded-2xl outline-none focus:border-luxury-accent/50 transition-colors text-white font-light"
                                        />
                                    </div>
                                </div>

                                {/* Form Action */}
                                <div className="md:col-span-2 pt-10">
                                    <button
                                        type="submit"
                                        className="w-full group relative bg-luxury-accent text-black py-8 rounded-full overflow-hidden transition-all duration-500 shadow-[0_20px_50px_rgba(0,255,65,0.2)] hover:shadow-[0_30px_70px_rgba(0,255,65,0.4)] hover:scale-[1.01]"
                                    >
                                        <div className="relative z-10 flex items-center justify-center gap-4">
                                            <span className="text-black font-bold uppercase tracking-[0.4em] text-sm group-hover:tracking-[0.5em] transition-all">
                                                Book via WhatsApp
                                            </span>
                                            <svg className="w-6 h-6 fill-black" viewBox="0 0 24 24">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Privacy Shield Info */}
            <section className="pb-32">
                <div className="container-lux text-center">
                    <FadeIn direction="up">
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/5 bg-white/[0.02] text-white/30 text-[10px] uppercase tracking-[0.2em] font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                            Secure End-to-End Encryption via WhatsApp Business Engine
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}
