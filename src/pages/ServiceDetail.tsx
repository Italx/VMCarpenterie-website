import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../constants';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

export default function ServiceDetail() {
    const { id } = useParams<{ id: string }>();
    const service = SERVICES.find(s => s.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) {
        return <Navigate to="/cosa-facciamo" replace />;
    }

    const { title, description, detailImages, processSteps, features } = service;
    const [openProcessStep, setOpenProcessStep] = useState<number | null>(0);

    return (
        <div className="bg-amber-50 text-zinc-900 min-h-screen font-sans selection:bg-red-600 selection:text-white">
            <Header theme="light" />

            <main className="pt-32 pb-24">
                {/* Hero Section */}
                <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-16 md:mb-24">
                    <div className="mb-12">
                        <Link to="/cosa-facciamo" className="inline-flex items-center py-3 pr-6 -ml-3 text-zinc-500 hover:text-black transition-colors mb-8 text-base md:text-lg uppercase tracking-widest font-medium group cursor-pointer">
                            <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 mr-3 group-hover:-translate-x-1 transition-transform" />
                            Tutti i servizi
                        </Link>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-8"
                        >
                            {title}
                        </motion.h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 md:mt-24">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight"
                            >
                                Soluzioni su misura<br />che superano le<br />aspettative.
                            </motion.h2>
                            <div className="space-y-6">
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    className="text-lg md:text-xl text-zinc-600 font-light leading-relaxed"
                                >
                                    {description} Noi di VM Carpenteria Metallica applichiamo metodi artigianali e innovazione per consegnare lavori impeccabili.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="text-lg md:text-xl text-zinc-600 font-light leading-relaxed"
                                >
                                    Il nostro team lavora a stretto contatto con voi per garantire che ogni dettaglio sia curato con precisione, assicurando velocità, efficienza e il massimo valore in ogni fase del progetto.
                                </motion.p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Image Grid / Collage */}
                {detailImages && detailImages.length > 0 && (
                    <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-24 md:mb-32">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {detailImages.map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                                    className={`rounded-3xl overflow-hidden aspect-[4/3] ${idx === 0 ? 'md:col-span-2 md:aspect-[21/9]' : ''} relative bg-zinc-200`}
                                >
                                    <img
                                        src={img}
                                        alt={`${title} detail ${idx + 1}`}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Features & Process Section */}
                <section className="px-6 md:px-12 lg:px-24 flex flex-col items-center">

                    <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-24">

                        {/* Features Column */}
                        <div>
                            <motion.h3
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl font-medium mb-12 tracking-tight"
                            >
                                Caratteristiche<br />del Servizio
                            </motion.h3>

                            <div className="space-y-12">
                                {features.map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                                        className="border-t border-zinc-300 pt-6"
                                    >
                                        <h4 className="text-xl font-medium mb-3">{feature.title}</h4>
                                        <p className="text-zinc-600 font-light leading-relaxed">{feature.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Process Column */}
                        <div>
                            <motion.h3
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="text-3xl md:text-4xl font-medium mb-12 tracking-tight"
                            >
                                Il Nostro Metodo
                            </motion.h3>

                            <div className="flex flex-col border-t border-zinc-200 w-full shrink-0">
                                {processSteps.map((step, idx) => {
                                    const isOpen = openProcessStep === idx;
                                    return (
                                        <div key={idx} className="border-b border-zinc-200 py-8">
                                            <div
                                                className="flex items-start md:items-center justify-between cursor-pointer group"
                                                onClick={() => setOpenProcessStep(isOpen ? null : idx)}
                                            >
                                                <div className="flex items-start md:items-center gap-6 md:gap-8">
                                                    <span className="text-zinc-400 font-medium text-lg md:text-xl shrink-0 pt-1 md:pt-0">
                                                        {String(idx + 1).padStart(2, '0')}.
                                                    </span>
                                                    <h4 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 group-hover:text-black transition-colors">
                                                        {step.title}
                                                    </h4>
                                                </div>
                                                <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center shrink-0 ml-4">
                                                    {isOpen ? '−' : '+'}
                                                </div>
                                            </div>
                                            <AnimatePresence>
                                                {isOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                                        className="overflow-hidden"
                                                    >
                                                        <p className="mt-6 text-zinc-600 text-lg md:text-xl leading-relaxed pl-[2.2rem] md:pl-[3.25rem] max-w-2xl">
                                                            {step.description}
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonial / Quote */}
                <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mt-32 mb-16">
                    <div className="bg-zinc-950 text-white rounded-[2rem] p-12 md:p-24 flex flex-col items-center justify-center text-center">
                        <span className="text-red-500 text-6xl leading-none font-serif mb-6 inline-block">"</span>
                        <p className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-tight mb-12 max-w-4xl">
                            Siamo stati felicissimi del nostro ufficio rinnovato. La qualità costruttiva e l'attenzione ai dettagli fornite da VM Carpenteria Metallica sono eccezionali. Il team ha lavorato incessantemente per rendere il processo fluido dall'inizio alla fine. Lo raccomandiamo vivamente.
                        </p>
                        <div className="text-zinc-400 font-light text-lg">
                            — Cliente Soddisfatto
                        </div>
                    </div>
                </section>

            </main>

            {/* Override footer background to dark for contrast with next dark sections if needed, or keep white if footer is light. The dark footer is standard in their design. */}
            <Footer className="bg-zinc-950 text-white border-none" />
        </div>
    );
}
