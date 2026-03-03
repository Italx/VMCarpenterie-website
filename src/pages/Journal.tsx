import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ARTICLES, JOURNAL_CATEGORIES } from '../data/journal';
import { ArrowUpRight } from 'lucide-react';

export default function Journal() {
    const [activeCategory, setActiveCategory] = useState("Tutti");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredArticles = activeCategory === "Tutti"
        ? ARTICLES
        : ARTICLES.filter(article => article.category === activeCategory);

    return (
        <div className="bg-[#FAF9F5] text-zinc-900 min-h-screen font-sans selection:bg-red-600 selection:text-white">
            <Header theme="light" />

            <main className="pt-32 pb-24">
                {/* Hero / Header */}
                <section className="px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6">
                            Journal &<br />Insights.
                        </h1>
                        <p className="text-2xl md:text-3xl text-zinc-600 font-light max-w-3xl leading-snug">
                            Esplora le ultime tendenze, i nostri progetti più recenti e le guide tecniche sul mondo della carpenteria metallica e dell'arredamento di design.
                        </p>
                    </motion.div>
                </section>

                {/* Categories Filter */}
                <section className="px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto mb-16">
                    <div className="flex flex-wrap gap-3">
                        {JOURNAL_CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2.5 rounded-full text-base font-medium transition-all duration-300 cursor-pointer ${activeCategory === category
                                    ? "bg-zinc-900 text-white"
                                    : "bg-zinc-200/60 text-zinc-600 hover:bg-zinc-300"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Articles Grid */}
                <section className="px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
                    <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        <AnimatePresence>
                            {filteredArticles.map((article, idx) => (
                                <motion.article
                                    key={article.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                                    className="group flex flex-col"
                                >
                                    <Link to={`/journal/${article.id}`} className="block overflow-hidden rounded-2xl mb-6 relative aspect-[4/3] bg-zinc-200">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                        <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                            <ArrowUpRight className="w-5 h-5 text-red" />
                                        </div>
                                    </Link>

                                    <div className="flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-4">
                                            <span>{article.date}</span>
                                            <span className="w-1 h-1 rounded-full bg-zinc-300" />
                                            <span>{article.category}</span>
                                        </div>

                                        <Link to={`/journal/${article.id}`} className="block group-hover:text-red transition-colors duration-300">
                                            <h2 className="text-2xl md:text-3xl font-medium tracking-tight leading-tight mb-4">
                                                {article.title}
                                            </h2>
                                        </Link>

                                        <p className="text-zinc-600 font-light text-xl leading-relaxed mb-6 line-clamp-3">
                                            {article.excerpt}
                                        </p>
                                    </div>
                                </motion.article>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </section>

            </main>

            <Footer className="bg-zinc-950 text-white border-none" />
        </div>
    );
}
