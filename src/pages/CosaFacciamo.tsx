import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useContact } from "../context/ContactContext";

export default function CosaFacciamo() {
    const { openContact } = useContact();

    return (
        <div className="bg-zinc-950 text-white min-h-screen font-sans selection:bg-red-600 selection:text-white">
            <Header />

            <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
                {/* Hero Section */}
                <section className="max-w-7xl mx-auto mb-24 md:mb-32 text-center md:text-left mt-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-8 text-white"
                    >
                        Spazi d'eccellenza.<br />
                        Precisione artigianale.<br />
                        Soluzioni su misura.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto md:mx-0 font-light leading-relaxed"
                    >
                        Sviluppiamo soluzioni in carpenteria metallica e serramenti per l'edilizia, il retail e residenze di lusso, costruite per valorizzare ogni ambiente.
                    </motion.p>
                </section>

                {/* Services Grid */}
                <section className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
                        {SERVICES.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                                className={`group relative rounded-3xl overflow-hidden aspect-square md:aspect-[4/3] ${index === 0 ? 'md:col-span-2 md:aspect-[21/9]' : ''}`}
                            >
                                <Link to={service.link} className="block w-full h-full text-white">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 group-hover:from-black/95 group-hover:via-black/40 transition-colors duration-700 z-10" />
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="absolute inset-0 w-full h-full object-cover origin-center transform group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                                    />
                                    <div className="absolute inset-0 z-20 p-8 md:p-12 flex flex-col justify-end">
                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 text-white">{service.title}</h2>
                                        <div className="flex items-end justify-between">
                                            <p className="text-zinc-200 text-lg md:text-xl max-w-md font-light leading-relaxed hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                                                {service.description}
                                            </p>
                                            <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transform group-hover:-rotate-45 transition-transform duration-500 shrink-0 ml-auto">
                                                <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Intro Text Section */}
                <section className="max-w-7xl mx-auto mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-white"
                    >
                        Spazi eccezionali,<br />
                        realizzati con<br />maestria
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 text-white/80 text-xl md:text-2xl font-light leading-relaxed"
                    >
                        <p>
                            Collaboriamo con architetti, designer, project manager e costruttori per consegnare interni tanto pratici quanto splendidi. Con anni di esperienza manifatturiera, produciamo opere in ferro su misura per uffici, hotel, ambienti retail e residenze di lusso, unendo artigianato ed efficienza.
                        </p>
                        <p>
                            Il nostro approccio full-service copre la progettazione su misura, i dettagli architettonici, le finiture e l'installazione completa. Gestiamo l'integrazione tecnica con competenza per proteggere ed estendere la vita di ogni spazio.
                        </p>
                        <p>
                            Operando dal nostro stabilimento all'avanguardia, offriamo capacità produttiva eccellente, controllo qualità rigoroso e garanzia di continuità, assicurando velocità, coerenza e valore in ogni fase.
                        </p>
                    </motion.div>
                </section>

                {/* CTA Section */}
                <section className="max-w-7xl mx-auto mt-32 mb-16 px-6 md:px-0 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="border-t border-zinc-800 pt-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-medium mb-8 text-white">
                            Pronto a iniziare il tuo prossimo progetto? <button onClick={() => openContact()} className="underline decoration-1 underline-offset-8 hover:text-zinc-300 transition-colors text-white cursor-pointer">Parliamone</button>
                        </h2>
                    </motion.div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
