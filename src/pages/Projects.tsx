import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const CATEGORIES = ['Tutti', 'Fornitura e Posa Serramenti', 'Arredamenti di Design in Ferro', 'Opere di Carpenterie Pesanti e Leggere', 'Lavorazioni Montaggi conto Terzi', 'Forniture e pose per Edilizia', 'Manutenzioni Civili e Industriali'];

export const ALL_PROJECTS = [
    {
        "title": "Installazione Serramenti - 1",
        "category": "Fornitura e Posa Serramenti",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2026/01/IMG_6468-2.jpg",
        "gallery": [],
        "slug": "installazione-serramenti---1"
    },
    {
        "title": "Installazione Serramenti - 3",
        "category": "Fornitura e Posa Serramenti",
        "location": "Garda, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0114.jpg",
        "gallery": [
            "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0116.jpg",
            "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0117.jpg",
            "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0118.jpg"
        ],
        "slug": "installazione-serramenti---3"
    },
    {
        "title": "Installazione Serramenti - 4",
        "category": "Fornitura e Posa Serramenti",
        "location": "Vicenza, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0126.jpg",
        "gallery": [],
        "slug": "installazione-serramenti---4"
    },
    {
        "title": "Installazione Serramenti - 5",
        "category": "Fornitura e Posa Serramenti",
        "location": "Brescia, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0142.jpg",
        "gallery": [
            "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0143.jpg"
        ],
        "slug": "installazione-serramenti---5"
    },
    {
        "title": "Installazione Serramenti - 6",
        "category": "Fornitura e Posa Serramenti",
        "location": "Padova, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0150.jpg",
        "gallery": [
            "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0151.jpg",
            "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0153.jpg",
            "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0154.jpg"
        ],
        "slug": "installazione-serramenti---6"
    },
    {
        "title": "Arredo in Ferro Su Misura - 1",
        "category": "Arredamenti di Design in Ferro",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/Immagine-WhatsApp-2025-04-16-ore-12.22.27_6c9130ee.jpg",
        "gallery": [],
        "slug": "arredo-in-ferro-su-misura---1"
    },
    {
        "title": "Arredo in Ferro Su Misura - 3",
        "category": "Arredamenti di Design in Ferro",
        "location": "Garda, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0076.jpg",
        "gallery": [
            "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0078.jpg",
            "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0079.jpg"
        ],
        "slug": "arredo-in-ferro-su-misura---3"
    },
    {
        "title": "Arredo in Ferro Su Misura - 4",
        "category": "Arredamenti di Design in Ferro",
        "location": "Vicenza, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0090.jpg",
        "gallery": [
            "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0095.jpg"
        ],
        "slug": "arredo-in-ferro-su-misura---4"
    },
    {
        "title": "Arredo in Ferro Su Misura - 5",
        "category": "Arredamenti di Design in Ferro",
        "location": "Brescia, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0130.jpg",
        "gallery": [],
        "slug": "arredo-in-ferro-su-misura---5"
    },
    {
        "title": "Arredo in Ferro Su Misura - 6",
        "category": "Arredamenti di Design in Ferro",
        "location": "Padova, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0139.jpg",
        "gallery": [],
        "slug": "arredo-in-ferro-su-misura---6"
    },
    {
        "title": "Struttura in Acciaio - 2",
        "category": "Opere di Carpenterie Pesanti e Leggere",
        "location": "Sommacampagna, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0090.jpg",
        "gallery": [
            "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0091.jpg"
        ],
        "slug": "struttura-in-acciaio---2"
    },
    {
        "title": "Struttura in Acciaio - 3",
        "category": "Opere di Carpenterie Pesanti e Leggere",
        "location": "Garda, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0112.jpg",
        "gallery": [],
        "slug": "struttura-in-acciaio---3"
    },
    {
        "title": "Struttura in Acciaio - 4",
        "category": "Opere di Carpenterie Pesanti e Leggere",
        "location": "Vicenza, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0134.jpg",
        "gallery": [],
        "slug": "struttura-in-acciaio---4"
    },
    {
        "title": "Struttura in Acciaio - 5",
        "category": "Opere di Carpenterie Pesanti e Leggere",
        "location": "Brescia, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0148.jpg",
        "gallery": [
            "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0152.jpg"
        ],
        "slug": "struttura-in-acciaio---5"
    },
    {
        "title": "Struttura in Acciaio - 6",
        "category": "Opere di Carpenterie Pesanti e Leggere",
        "location": "Padova, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0159.jpg",
        "gallery": [],
        "slug": "struttura-in-acciaio---6"
    },
    {
        "title": "Struttura in Acciaio - 7",
        "category": "Opere di Carpenterie Pesanti e Leggere",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0166.jpg",
        "gallery": [
            "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0169.jpg"
        ],
        "slug": "struttura-in-acciaio---7"
    },
    {
        "title": "Montaggio Industriale - 2",
        "category": "Lavorazioni Montaggi conto Terzi",
        "location": "Sommacampagna, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0085.jpg",
        "gallery": [
            "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0089.jpg"
        ],
        "slug": "montaggio-industriale---2"
    },
    {
        "title": "Montaggio Industriale - 3",
        "category": "Lavorazioni Montaggi conto Terzi",
        "location": "Garda, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0123.jpg",
        "gallery": [],
        "slug": "montaggio-industriale---3"
    },
    {
        "title": "Montaggio Industriale - 4",
        "category": "Lavorazioni Montaggi conto Terzi",
        "location": "Vicenza, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0160.jpg",
        "gallery": [
            "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0162.jpg",
            "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0166.jpg"
        ],
        "slug": "montaggio-industriale---4"
    },
    {
        "title": "Carpenteria per Edilizia - 2",
        "category": "Forniture e pose per Edilizia",
        "location": "Sommacampagna, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0076.jpg",
        "gallery": [],
        "slug": "carpenteria-per-edilizia---2"
    },
    {
        "title": "Carpenteria per Edilizia - 3",
        "category": "Forniture e pose per Edilizia",
        "location": "Garda, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0089.jpg",
        "gallery": [],
        "slug": "carpenteria-per-edilizia---3"
    },
    {
        "title": "Carpenteria per Edilizia - 4",
        "category": "Forniture e pose per Edilizia",
        "location": "Vicenza, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0111.jpg",
        "gallery": [],
        "slug": "carpenteria-per-edilizia---4"
    },
    {
        "title": "Carpenteria per Edilizia - 5",
        "category": "Forniture e pose per Edilizia",
        "location": "Brescia, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0130.jpg",
        "gallery": [],
        "slug": "carpenteria-per-edilizia---5"
    },
    {
        "title": "Manutenzione Impianto - 2",
        "category": "Manutenzioni Civili e Industriali",
        "location": "Sommacampagna, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0140.jpg",
        "gallery": [],
        "slug": "manutenzione-impianto---2"
    },
    {
        "title": "Manutenzione Impianto - 3",
        "category": "Manutenzioni Civili e Industriali",
        "location": "Garda, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0152.jpg",
        "gallery": [
            "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0155.jpg"
        ],
        "slug": "manutenzione-impianto---3"
    }
];

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState("Tutti");

    const filteredProjects = activeCategory === "Tutti"
        ? ALL_PROJECTS
        : ALL_PROJECTS.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen bg-cream flex flex-col">
            <Header theme="light" />
            <main id="main-content" className="flex-1 pt-40 pb-24 md:pt-48 md:pb-32">
                <div className="container-standard">

                    {/* Header Section */}
                    <div className="mb-16 md:mb-24">
                        <h1 className="text-dark mb-6">Progetti</h1>
                        <p className="text-[1.8rem] md:text-[2.2rem] text-dark/70 max-w-3xl">
                            Scoprite l'eccellenza della carpenteria metallica attraverso i nostri progetti più recenti.
                            Ogni realizzazione è frutto della nostra passione, precisione e dedizione.
                        </p>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex flex-wrap gap-4 mb-16">
                        {CATEGORIES.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-8 py-3 rounded-full text-[1.4rem] font-medium transition-all cursor-pointer ${activeCategory === category
                                    ? "bg-dark text-cream"
                                    : "bg-transparent border border-dark/20 text-dark hover:border-dark"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-12 md:gap-y-20">
                        {filteredProjects.map((project) => (
                            <Link
                                to={`/progetti/${project.slug}`}
                                key={project.title}
                                className="group cursor-pointer block"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] md:rounded-[15px] mb-6 md:mb-8">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        referrerPolicy="no-referrer"
                                    />
                                    <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        <Plus className="w-6 h-6 text-dark" />
                                    </div>
                                </div>
                                <h3 className="text-dark text-[2.2rem] md:text-[2.8rem] font-semibold leading-tight mb-3 group-hover:text-red transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex gap-4 text-dark/60 text-[1.4rem] md:text-[1.6rem] uppercase tracking-wider font-medium">
                                    <span>{project.category}</span>
                                    <span>•</span>
                                    <span>{project.location}</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}
