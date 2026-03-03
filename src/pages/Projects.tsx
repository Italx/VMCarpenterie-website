import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const CATEGORIES = ['Tutti', 'Fornitura e Posa Serramenti', 'Arredamenti di Design in Ferro', 'Opere di Carpenterie Pesanti e Leggere', 'Lavorazioni Montaggi conto Terzi', 'Forniture e pose per Edilizia', 'Manutenzioni Civili e Industriali'];

export const ALL_PROJECTS = [
    {
        "title": "Overview - 1",
        "category": "Overview (gallery-3-columns)",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2026/01/erasebg-transformed.png",
        "gallery": [],
        "slug": "project-1"
    },
    {
        "title": "Fornitura - 1",
        "category": "Fornitura e Posa Serramenti",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2026/01/IMG_6468-2.jpg",
        "gallery": [],
        "slug": "project-2"
    },
    {
        "title": "Fornitura - 2",
        "category": "Fornitura e Posa Serramenti",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2026/01/erasebg-transformed.png",
        "gallery": [],
        "slug": "project-3"
    },
    {
        "title": "Fornitura - 3",
        "category": "Fornitura e Posa Serramenti",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0114.jpg",
        "gallery": ["https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0116.jpg", "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0117.jpg", "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0118.jpg"],
        "slug": "project-4"
    },
    {
        "title": "Fornitura - 4",
        "category": "Fornitura e Posa Serramenti",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0126.jpg",
        "gallery": [],
        "slug": "project-5"
    },
    {
        "title": "Fornitura - 5",
        "category": "Fornitura e Posa Serramenti",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0142.jpg",
        "gallery": ["https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0143.jpg"],
        "slug": "project-6"
    },
    {
        "title": "Fornitura - 6",
        "category": "Fornitura e Posa Serramenti",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0150.jpg",
        "gallery": ["https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0151.jpg", "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0153.jpg", "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0154.jpg"],
        "slug": "project-7"
    },
    {
        "title": "Arredamenti - 1",
        "category": "Arredamenti di Design in Ferro",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/Immagine-WhatsApp-2025-04-16-ore-12.22.27_6c9130ee.jpg",
        "gallery": [],
        "slug": "project-8"
    },
    {
        "title": "Arredamenti - 2",
        "category": "Arredamenti di Design in Ferro",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2026/01/erasebg-transformed.png",
        "gallery": [],
        "slug": "project-9"
    },
    {
        "title": "Arredamenti - 3",
        "category": "Arredamenti di Design in Ferro",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0076.jpg",
        "gallery": ["https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0078.jpg", "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0079.jpg"],
        "slug": "project-10"
    },
    {
        "title": "Arredamenti - 4",
        "category": "Arredamenti di Design in Ferro",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0090.jpg",
        "gallery": ["https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0095.jpg"],
        "slug": "project-11"
    },
    {
        "title": "Arredamenti - 5",
        "category": "Arredamenti di Design in Ferro",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0130.jpg",
        "gallery": [],
        "slug": "project-12"
    },
    {
        "title": "Arredamenti - 6",
        "category": "Arredamenti di Design in Ferro",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0139.jpg",
        "gallery": [],
        "slug": "project-13"
    },
    {
        "title": "Opere - 1",
        "category": "Opere di Carpenterie Pesanti e Leggere",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2026/01/erasebg-transformed.png",
        "gallery": [],
        "slug": "project-14"
    },
    {
        "title": "Opere - 2",
        "category": "Opere di Carpenterie Pesanti e Leggere",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0090.jpg",
        "gallery": ["https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0091.jpg"],
        "slug": "project-15"
    },
    {
        "title": "Opere - 3",
        "category": "Opere di Carpenterie Pesanti e Leggere",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0112.jpg",
        "gallery": [],
        "slug": "project-16"
    },
    {
        "title": "Opere - 4",
        "category": "Opere di Carpenterie Pesanti e Leggere",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0134.jpg",
        "gallery": [],
        "slug": "project-17"
    },
    {
        "title": "Opere - 5",
        "category": "Opere di Carpenterie Pesanti e Leggere",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0148.jpg",
        "gallery": ["https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0152.jpg"],
        "slug": "project-18"
    },
    {
        "title": "Opere - 6",
        "category": "Opere di Carpenterie Pesanti e Leggere",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0159.jpg",
        "gallery": [],
        "slug": "project-19"
    },
    {
        "title": "Opere - 7",
        "category": "Opere di Carpenterie Pesanti e Leggere",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0166.jpg",
        "gallery": ["https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0169.jpg"],
        "slug": "project-20"
    },
    {
        "title": "Lavorazioni - 1",
        "category": "Lavorazioni Montaggi conto Terzi",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2026/01/erasebg-transformed.png",
        "gallery": [],
        "slug": "project-21"
    },
    {
        "title": "Lavorazioni - 2",
        "category": "Lavorazioni Montaggi conto Terzi",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0085.jpg",
        "gallery": ["https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0089.jpg"],
        "slug": "project-22"
    },
    {
        "title": "Lavorazioni - 3",
        "category": "Lavorazioni Montaggi conto Terzi",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0123.jpg",
        "gallery": [],
        "slug": "project-23"
    },
    {
        "title": "Lavorazioni - 4",
        "category": "Lavorazioni Montaggi conto Terzi",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0160.jpg",
        "gallery": ["https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0162.jpg", "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0166.jpg"],
        "slug": "project-24"
    },
    {
        "title": "Forniture - 1",
        "category": "Forniture e pose per Edilizia",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2026/01/erasebg-transformed.png",
        "gallery": [],
        "slug": "project-25"
    },
    {
        "title": "Forniture - 2",
        "category": "Forniture e pose per Edilizia",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0076.jpg",
        "gallery": [],
        "slug": "project-26"
    },
    {
        "title": "Forniture - 3",
        "category": "Forniture e pose per Edilizia",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0089.jpg",
        "gallery": [],
        "slug": "project-27"
    },
    {
        "title": "Forniture - 4",
        "category": "Forniture e pose per Edilizia",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0111.jpg",
        "gallery": [],
        "slug": "project-28"
    },
    {
        "title": "Forniture - 5",
        "category": "Forniture e pose per Edilizia",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0130.jpg",
        "gallery": [],
        "slug": "project-29"
    },
    {
        "title": "Manutenzioni - 1",
        "category": "Manutenzioni Civili e Industriali",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2026/01/erasebg-transformed.png",
        "gallery": [],
        "slug": "project-30"
    },
    {
        "title": "Manutenzioni - 2",
        "category": "Manutenzioni Civili e Industriali",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0140.jpg",
        "gallery": [],
        "slug": "project-31"
    },
    {
        "title": "Manutenzioni - 3",
        "category": "Manutenzioni Civili e Industriali",
        "location": "Verona, IT",
        "image": "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0152.jpg",
        "gallery": ["https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0155.jpg"],
        "slug": "project-32"
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
