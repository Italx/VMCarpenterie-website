import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ALL_PROJECTS } from "./Projects";

export default function ProjectDetail() {
    const { id } = useParams();

    const project = ALL_PROJECTS.find(p => p.slug === id);
    const relatedProjects = ALL_PROJECTS.filter(p => p.category === project?.category && p.slug !== project?.slug).slice(0, 2);

    if (!project) {
        return (
            <div className="min-h-screen bg-cream flex flex-col items-center justify-center">
                <Header />
                <h1 className="text-dark">Progetto non trovato</h1>
                <Link to="/progetti" className="btn btn-dark mt-8">Torna ai progetti</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-dark text-cream flex flex-col">
            <Header />

            <main id="main-content" className="flex-1">
                {/* Full Bleed Hero */}
                <section className="relative h-[60vh] md:h-[80vh] w-full mt-24">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full pb-16 md:pb-24">
                        <div className="container-standard">
                            <h1 className="text-cream text-[4rem] md:text-[6.4rem] lg:text-[8rem] leading-none tracking-tight multi-line-underline max-w-[90%]">
                                {project.title}
                            </h1>
                            <p className="text-cream/80 text-[1.8rem] md:text-[2.4rem] mt-6">
                                Carpenteria Metallica d'Eccellenza
                            </p>
                        </div>
                    </div>
                </section>

                {/* Project Intro Details */}
                <section className="py-24 md:py-32">
                    <div className="container-standard">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                            <div className="lg:col-span-8">
                                <p className="text-[2rem] md:text-[2.6rem] leading-relaxed font-light text-cream/90">
                                    {project.title} rappresenta uno dei nostri interventi più significativi nel settore {project.category.toLowerCase()}.
                                    Realizzato per <strong>{project.company}</strong> a {project.location}, questo progetto dimostra
                                    la nostra capacità di coniugare le rigide tolleranze della carpenteria industriale con finiture di alto livello.
                                </p>
                                <div className="mt-12 text-[1.6rem] md:text-[1.8rem] text-cream/70 space-y-6">
                                    <p>In questo cantiere ci siamo occupati di tutte le fasi: dalla progettazione esecutiva e rilevazione delle misure in loco,
                                        alla produzione nel nostro stabilimento di Sommacampagna, fino alla logistica e all'installazione specializzata finale.</p>
                                    <p>La sfida principale è stata garantire la massima precisione dei componenti pre-assemblati, riducendo le lavorazioni
                                        necessarie in cantiere e i tempi di montaggio complessivi.</p>
                                </div>
                            </div>
                            <div className="lg:col-span-4">
                                <div className="flex flex-col border-t border-cream/20">
                                    <div className="py-6 border-b border-cream/20 grid grid-cols-3 gap-4">
                                        <span className="text-cream/50 text-[1.4rem] uppercase tracking-widest col-span-1">Cliente</span>
                                        <span className="text-[1.6rem] font-medium col-span-2">{project.company}</span>
                                    </div>
                                    <div className="py-6 border-b border-cream/20 grid grid-cols-3 gap-4">
                                        <span className="text-cream/50 text-[1.4rem] uppercase tracking-widest col-span-1">Settore</span>
                                        <span className="text-[1.6rem] font-medium col-span-2">{project.category}</span>
                                    </div>
                                    <div className="py-6 border-b border-cream/20 grid grid-cols-3 gap-4">
                                        <span className="text-cream/50 text-[1.4rem] uppercase tracking-widest col-span-1">Luogo</span>
                                        <span className="text-[1.6rem] font-medium col-span-2">{project.location}</span>
                                    </div>
                                    <div className="py-6 border-b border-cream/20 grid grid-cols-3 gap-4">
                                        <span className="text-cream/50 text-[1.4rem] uppercase tracking-widest col-span-1">Completamento</span>
                                        <span className="text-[1.6rem] font-medium col-span-2">2025</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Image Full Width */}
                <section className="w-full aspect-video md:aspect-[3/1] relative overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
                        alt="Dettaglio lavorazione"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />
                </section>

                {/* Fit-Out Details */}
                <section className="py-24 md:py-32">
                    <div className="container-standard">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                            <div className="lg:col-span-4">
                                <h3 className="text-[3rem] md:text-[4rem] text-cream">Dettagli Tecnici</h3>
                            </div>
                            <div className="lg:col-span-8 text-[1.8rem] text-cream/80 space-y-8">
                                <p>
                                    Per la realizzazione di questo ambizioso progetto, il nostro team tecnico ha optato per l'utilizzo di acciaio di prima scelta, trattato con cicli di verniciatura protettiva ad alta resistenza.
                                </p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mt-8">
                                    <li className="flex items-start gap-4">
                                        <span className="text-red mt-1">●</span>
                                        <span>Progettazione 3D e rendering strutturali</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="text-red mt-1">●</span>
                                        <span>Taglio laser e piegatura di precisione CNC</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="text-red mt-1">●</span>
                                        <span>Saldature certificate da personale qualificato</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="text-red mt-1">●</span>
                                        <span>Trattamento anticorrosivo avanzato</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Big CTA */}
                <section className="bg-cream text-dark py-24 my-16 mx-4 md:mx-8 rounded-[20px]">
                    <div className="container-standard">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                            <h3 className="text-[3.2rem] md:text-[4.8rem] max-w-3xl leading-tight">
                                Vorresti discutere del tuo prossimo progetto di <span className="text-red">Carpenteria</span>?
                            </h3>
                            <div className="flex flex-col items-center gap-6">
                                <Link to="/" className="btn btn-dark w-fit text-[1.8rem] px-12 py-6">Parla con Noi</Link>
                                <span className="text-[1.4rem] uppercase tracking-widest font-medium text-dark/50">Preventivi Gratuiti</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Projects */}
                {relatedProjects.length > 0 && (
                    <section className="py-24">
                        <div className="container-standard">
                            <h3 className="text-[3rem] mb-16 text-cream">Progetti Correlati a {project.category}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {relatedProjects.map((related) => (
                                    <Link
                                        key={related.slug}
                                        to={`/progetti/${related.slug}`}
                                        className="group cursor-pointer block"
                                    >
                                        <div className="relative aspect-[4/3] overflow-hidden rounded-[15px] mb-6">
                                            <img
                                                src={related.image}
                                                alt={related.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                referrerPolicy="no-referrer"
                                            />
                                        </div>
                                        <h4 className="text-[2.4rem] text-cream multi-line-underline mb-2">{related.title}</h4>
                                        <p className="text-cream/50 text-[1.4rem] uppercase tracking-wider">{related.location}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

            </main>
            <Footer />
        </div>
    );
}
