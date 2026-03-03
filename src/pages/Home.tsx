import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import USP from "../components/USP";
import Projects from "../components/Projects";
import Stats from "../components/Stats";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-cream">
            <Header />
            <main id="main-content">
                <Hero />
                <Services />
                <USP />
                <section className="py-24 md:py-32 bg-cream">
                    <div className="container-standard">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div className="relative aspect-square overflow-hidden rounded-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2069&auto=format&fit=crop"
                                    alt="Carpenteria"
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                            <div>
                                <h2 className="mb-8 text-dark">Oltre 20 anni di esperienza nel settore metallurgico</h2>
                                <p className="text-[1.8rem] text-dark/70 mb-12">
                                    La nostra filosofia si fonda sull’equilibrio tra tradizione artigianale e innovazione tecnologica. Ogni progetto è affrontato con dedizione e competenza, garantendo risultati affidabili e durevoli nel tempo.
                                </p>
                                <a href="#" className="btn btn-dark">
                                    La nostra storia
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <Stats />
                <Projects />
            </main>
            <Footer />
        </div>
    );
}
