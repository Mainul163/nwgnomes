"use client";

import Image from "next/image";

const services = [
    {
        id: "landscaping",
        title: "Landscaping",
        description: "Modern, clean, and sustainable landscape design.",
        images: [
            "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56",
            "https://images.unsplash.com/photo-1541443131872-2b5be985d6aa",
            "https://images.unsplash.com/photo-1551878019-7ef1a00f3e7b",
        ],
    },
    {
        id: "gardening",
        title: "Gardening",
        description: "Regular maintenance, planting, and seasonal care.",
        images: [
            "https://images.unsplash.com/photo-1466690672306-5f92132f7248",
            "https://images.unsplash.com/photo-1483794344563-d27a8d18014e",
            "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
        ],
    },
    {
        id: "construction",
        title: "Construction",
        description: "Small to mid-size renovation and structure build.",
        images: [
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
            "https://images.unsplash.com/photo-1416331108676-a22ccb276e35",
            "https://images.unsplash.com/photo-1498575207490-3e4ceae1edc4",
        ],
    },
    {
        id: "carpentry",
        title: "Carpentry",
        description: "Custom wood works, cabinets, and interior finishes.",
        images: [
            "https://images.unsplash.com/photo-1503386435953-66943ba996cd",
            "https://images.unsplash.com/photo-1504148455328-c376907d081c",
            "https://images.unsplash.com/photo-1506084868230-bb9d95c24759",
        ],
    },
];

export default function HomePage() {
    return (
        <main className="min-h-screen bg-slate-50" id="top">
            {/* Navbar */}
            <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
                <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-emerald-600 grid place-items-center text-white text-sm font-bold">
              G
            </span>
                        <span className="text-lg font-semibold tracking-tight text-slate-900">
              GreenBuild
            </span>
                    </div>
                    <nav className="hidden md:flex gap-5 text-sm text-slate-600">
                        <a href="#hero" className="hover:text-slate-900">Home</a>
                        <a href="#about" className="hover:text-slate-900">About</a>
                        <a href="#services" className="hover:text-slate-900">Services</a>
                        <a href="#gallery" className="hover:text-slate-900">Gallery</a>
                        <a href="#contact" className="hover:text-slate-900">Contact</a>
                    </nav>
                    <a
                        href="#contact"
                        className="hidden md:inline-flex bg-emerald-600 text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-emerald-700 transition"
                    >
                        Get a Quote
                    </a>
                </div>
            </header>

            {/* Hero */}
            <section id="hero" className="mx-auto max-w-6xl px-4 py-10 md:py-14">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <p className="inline-block text-xs font-semibold tracking-wide uppercase bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full mb-4">
                            Landscaping • Gardening • Construction • Carpentry
                        </p>
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Professional Outdoor & Indoor Property Services
                        </h1>
                        <p className="text-slate-600 mb-6">
                            amra full property solution dei — lawn theke woodwork porjonto.
                            ek jaygay 4 dhoroner service paoar jonno ei website-ta use korte
                            parba.
                        </p>
                        <div className="flex gap-3 flex-wrap">
                            <a
                                href="#contact"
                                className="bg-emerald-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-emerald-700 transition"
                            >
                                Book an Inspection
                            </a>
                            <a
                                href="#services"
                                className="text-sm font-medium text-emerald-700 hover:text-emerald-900"
                            >
                                View Services →
                            </a>
                        </div>
                        <div className="mt-6 flex gap-6 text-xs text-slate-500">
                            <div>
                                <p className="text-slate-900 text-lg font-semibold">80+</p>
                                <p>Completed Projects</p>
                            </div>
                            <div>
                                <p className="text-slate-900 text-lg font-semibold">4.9/5</p>
                                <p>Client Satisfaction</p>
                            </div>
                            <div>
                                <p className="text-slate-900 text-lg font-semibold">24/7</p>
                                <p>Support</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-36 md:h-48 bg-emerald-200 rounded-2xl relative overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=900&q=60"
                                alt="landscaping"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="h-36 md:h-64 bg-slate-200 rounded-2xl relative overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1483794344563-d27a8d18014e?auto=format&fit=crop&w=900&q=60"
                                alt="gardening"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="h-36 md:h-64 bg-slate-200 rounded-2xl relative overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=60"
                                alt="construction"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="h-36 md:h-48 bg-emerald-200 rounded-2xl relative overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1503386435953-66943ba996cd?auto=format&fit=crop&w=900&q=60"
                                alt="carpentry"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="bg-white py-12">
                <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                            About Our Company
                        </h2>
                        <p className="text-slate-600 mb-4">
                            amra ekta multi-service property improvement team. landscaping,
                            gardening, construction, ar carpentry — 4 dhoroner expert eki
                            team-e kaj kore. tai client der ke alada alada vendor er jonno
                            chinta korte hoy na.
                        </p>
                        <p className="text-slate-600 mb-4">
                            tumi ei template ta dhore nijer company info boshale fully
                            professional dekhabe — “since 2020”, “licensed & insured”,
                            “trained workers”, “on-time delivery” etc.
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="bg-slate-50 rounded-lg p-3 border">
                                <p className="font-semibold text-slate-900">Licensed Team</p>
                                <p className="text-slate-500 text-xs mt-1">
                                    safety & compliance maintained
                                </p>
                            </div>
                            <div className="bg-slate-50 rounded-lg p-3 border">
                                <p className="font-semibold text-slate-900">Quality Materials</p>
                                <p className="text-slate-500 text-xs mt-1">
                                    long-lasting & premium finish
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-64 md:h-72 rounded-2xl overflow-hidden bg-slate-200">
                        <Image
                            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=60"
                            alt="team working"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="mx-auto max-w-6xl px-4 py-12 space-y-10">
                <div className="flex items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-semibold text-slate-900">
                            Our Services
                        </h2>
                        <p className="text-slate-500 text-sm">
                            4 ta core category — protita e 3 ta kore sample image
                        </p>
                    </div>
                    <p className="text-xs text-slate-400">
                        You can add more sections later
                    </p>
                </div>

                {services.map((service) => (
                    <div key={service.id} id={service.id} className="space-y-4">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-xl font-semibold text-slate-900">
                                    {service.title}
                                </h3>
                                <p className="text-slate-500 text-sm">{service.description}</p>
                            </div>
                            <a
                                href="#contact"
                                className="text-xs text-emerald-700 hover:text-emerald-900"
                            >
                                Get estimate →
                            </a>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                            {service.images.map((img, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition"
                                >
                                    <div className="relative h-44 w-full">
                                        <Image
                                            src={img + "?auto=format&fit=crop&w=900&q=60"}
                                            alt={`${service.title} ${idx + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="p-3">
                                        <h4 className="text-sm font-semibold text-slate-800">
                                            {service.title} #{idx + 1}
                                        </h4>
                                        <p className="text-xs text-slate-500 mt-1">
                                            sample preview — replace with real project.
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>

            {/* Gallery */}
            <section id="gallery" className="bg-white py-12">
                <div className="mx-auto max-w-6xl px-4">
                    <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                        Recent Works
                    </h2>
                    <p className="text-slate-500 text-sm mb-6">
                        mixed project shots — landing page e dekhale client trust barhe
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                        {services.flatMap((s) => s.images).slice(0, 8).map((img, i) => (
                            <div
                                key={i}
                                className="relative h-40 md:h-44 rounded-xl overflow-hidden bg-slate-200"
                            >
                                <Image
                                    src={img + "?auto=format&fit=crop&w=900&q=60"}
                                    alt={`gallery ${i + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact / CTA */}
            <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
                <div className="bg-emerald-600 rounded-2xl p-8 md:p-10 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Need a service?</h2>
                        <p className="text-white/80 text-sm">
                            phone/email form boshale ekdom ready hoye jabe.
                        </p>
                    </div>
                    <form className="bg-white rounded-xl p-4 flex flex-col md:flex-row gap-3 w-full md:w-auto md:min-w-[380px]">
                        <input
                            type="text"
                            placeholder="Your name"
                            className="flex-1 border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Phone / Email"
                            className="flex-1 border border-slate-200 rounded-lg px-3 py-2 text-sm outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-emerald-600 text-white text-sm font-medium rounded-lg px-4 py-2 hover:bg-emerald-700 transition"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t py-6 text-center text-xs text-slate-400">
                © {new Date().getFullYear()} GreenBuild Services. All rights reserved.
            </footer>
        </main>
    );
}
