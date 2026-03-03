import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ARTICLES } from '../data/journal';
import { ArrowLeft, Clock, Calendar, Facebook, Twitter, Linkedin, Share2 } from 'lucide-react';
import { useContact } from '../context/ContactContext';

export default function ArticleDetail() {
    const { id } = useParams<{ id: string }>();
    const article = ARTICLES.find(a => a.id === id);
    const { openContact } = useContact();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!article) {
        return <Navigate to="/journal" replace />;
    }

    // Get 3 related articles (just picking the latest that aren't this one)
    const relatedArticles = ARTICLES.filter(a => a.id !== id).slice(0, 3);

    return (
        <div className="bg-[#FAF9F5] text-zinc-900 min-h-screen font-sans selection:bg-red-600 selection:text-white">
            <Header theme="light" />

            <main className="pt-32 pb-24">
                <article>
                    {/* Header Section */}
                    <section className="px-6 md:px-12 lg:px-24 max-w-5xl mx-auto mb-12">
                        <Link to="/journal" className="inline-flex items-center py-3 pr-6 -ml-3 text-zinc-500 hover:text-black transition-colors mb-8 text-sm md:text-base uppercase tracking-widest font-medium group cursor-pointer">
                            <ArrowLeft className="w-4 h-4 mr-3 group-hover:-translate-x-1 transition-transform" />
                            Indietro al Journal
                        </Link>

                        <div className="flex items-center gap-4 text-xs font-semibold text-red uppercase tracking-wider mb-6">
                            <span>{article.category}</span>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl lg:text-6xl xl:text-[4rem] font-medium tracking-tight leading-[1.1] mb-8"
                        >
                            {article.title}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-wrap items-center gap-6 text-zinc-500 text-sm md:text-base border-t border-zinc-200 pt-6"
                        >
                            <div className="flex items-center gap-2">
                                <span className="font-medium text-zinc-900">{article.author.name}</span>
                                <span className="text-zinc-400">({article.author.role})</span>
                            </div>
                            <div className="hidden md:block w-px h-4 bg-zinc-300" />
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{article.date}</span>
                            </div>
                            <div className="hidden md:block w-px h-4 bg-zinc-300" />
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{article.readTime} read</span>
                            </div>
                        </motion.div>
                    </section>

                    {/* Featured Image */}
                    <motion.section
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto mb-20 md:mb-24"
                    >
                        <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden bg-zinc-200">
                            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                        </div>
                    </motion.section>

                    {/* Content Section with sidebar */}
                    <section className="px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 relative">
                        {/* Social Share Sidebar (Sticky) */}
                        <div className="md:w-16 shrink-0 relative">
                            <div className="sticky top-32 flex md:flex-col gap-4">
                                <span className="text-xs uppercase tracking-widest font-medium text-zinc-400 mb-2 md:mb-4 hidden md:block">Condividi</span>
                                <button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-black hover:border-black transition-colors">
                                    <Facebook className="w-4 h-4" />
                                </button>
                                <button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-black hover:border-black transition-colors">
                                    <Twitter className="w-4 h-4" />
                                </button>
                                <button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-black hover:border-black transition-colors">
                                    <Linkedin className="w-4 h-4" />
                                </button>
                                <button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-black hover:border-black transition-colors">
                                    <Share2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Formatting the injected HTML content */}
                        <div
                            className="prose prose-lg prose-zinc max-w-[800px] w-full 
                                       prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-zinc-900 
                                       prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:mt-12 prose-h2:mb-6
                                       prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:mt-8 prose-h3:mb-4
                                       prose-p:text-zinc-600 prose-p:font-light prose-p:text-lg md:prose-p:text-xl prose-p:leading-relaxed prose-p:mb-8
                                       prose-img:rounded-2xl prose-img:w-full prose-img:my-12 prose-img:shadow-sm
                                       prose-a:text-red prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-black prose-a:transition-colors"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />
                    </section>
                </article>

                {/* Inline CTA */}
                <section className="px-6 md:px-12 lg:px-24 max-w-4xl mx-auto mt-24">
                    <div className="bg-zinc-100 rounded-3xl p-8 md:p-12 text-center border border-zinc-200">
                        <h3 className="text-2xl md:text-3xl font-medium mb-4">Hai in mente un progetto?</h3>
                        <p className="text-zinc-600 font-light text-lg mb-8 max-w-xl mx-auto">
                            Che si tratti di arredo di design, di un infisso speciale o di grandi opere strutturali, siamo pronti ad ascoltarti.
                        </p>
                        <button onClick={() => openContact()} className="btn bg-zinc-900 text-white hover:bg-red border-none">
                            Contattaci per una consulenza
                        </button>
                    </div>
                </section>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                    <section className="px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto mt-32 border-t border-zinc-200 pt-24">
                        <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-12">Articoli Simili</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedArticles.map(rel => (
                                <Link to={`/journal/${rel.id}`} key={rel.id} className="group block">
                                    <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-zinc-200 relative">
                                        <img src={rel.image} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                    <div className="flex items-center gap-3 text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3">
                                        <span>{rel.date}</span>
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-medium tracking-tight group-hover:text-red transition-colors line-clamp-2">
                                        {rel.title}
                                    </h4>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </main>

            <Footer className="bg-zinc-950 text-white border-none" />
        </div>
    );
}
