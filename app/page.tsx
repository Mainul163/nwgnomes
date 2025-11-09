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
                        <Image
                            src="/images/logo.jpeg"
                            alt="NORTHWEST GNOMES logo"
                            width={70}
                            height={70}
                            className="rounded-full"
                            priority
                        />
                        <span className="text-lg font-semibold text-slate-900">
              NORTHWEST GNOMES
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
                        className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-medium px-5 py-2.5 rounded-lg"
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
                            simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the  standard dummy text ever since the 1500s.
                        </p>
                        <div className="flex gap-3 flex-wrap">
                            <a
                                href="#contact"
                                className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-5 py-2.5 rounded-lg text-sm font-medium shadow-sm"
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
                            At NORTHWEST GNOMES, we’re your local go-to for all things maintenance, construction, and repairs.
                            From keeping your property clean to building beautiful outdoor spaces, we take pride in work that lasts.
                        </p>
                        <p className="text-slate-600 mb-4">
                            We handle it all — landscaping, gutter cleaning, property washing,
                            decks, fences, patios, concrete slabs, artificial lawns, and more.
                            No job too big or small — just honest, reliable service done right the first time.
                        </p>
                        <p className="text-slate-600 mb-4">
                            No job too big or small — just honest, reliable service done right the first time.
                        </p>
                        <p className="text-slate-600 mb-4">
                            Your property, our passion.
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
                        mixed project shots — Professional Outdoor & Indoor Property Services
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
            <section id="contact" className="max-w-6xl mx-auto px-4 py-10">
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact</h2>
                <p className="text-slate-500 mb-6 text-sm">
                    Reach us by phone anytime.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                    {/* Tel */}
                    <a
                        href="tel:+16047195248"
                        className="flex items-center gap-4 rounded-xl border bg-white p-4 shadow-sm hover:shadow-md transition"
                    >
                        <div className="h-11 w-11 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                            {/* phone icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 0 0 2.25-2.25v-1.17a1.5 1.5 0 0 0-1.036-1.427l-3.104-1.035a1.5 1.5 0 0 0-1.554.36l-.723.723a.75.75 0 0 1-.853.146 12.035 12.035 0 0 1-4.63-4.63.75.75 0 0 1 .146-.853l.723-.723a1.5 1.5 0 0 0 .36-1.554L8.097 4.036A1.5 1.5 0 0 0 6.67 3H5.25A2.25 2.25 0 0 0 3 5.25v1.5Z"
                                />
                            </svg>
                        </div>
                        <div className="flex flex-col">
        <span className="text-xs uppercase tracking-wide text-slate-400">
          Tel
        </span>
                            <span className="text-base font-medium text-slate-900">
          (604) 719-5248
        </span>
                        </div>
                    </a>

                    {/* Cell */}
                    <a
                        href="tel:+17786821470"
                        className="flex items-center gap-4 rounded-xl border bg-white p-4 shadow-sm hover:shadow-md transition"
                    >
                        <div className="h-11 w-11 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                            {/* mobile icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 2.25h6A1.75 1.75 0 0 1 16.75 4v16A1.75 1.75 0 0 1 15 21.75H9A1.75 1.75 0 0 1 7.25 20V4A1.75 1.75 0 0 1 9 2.25Z"
                                />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 18.25h4" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
        <span className="text-xs uppercase tracking-wide text-slate-400">
          Cell
        </span>
                            <span className="text-base font-medium text-slate-900">
          (778) 682-1470
        </span>
                        </div>
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t py-6 text-center text-xs text-slate-400">
                © {new Date().getFullYear()} GreenBuild Services. All rights reserved.
            </footer>
        </main>
    );
}
