import { motion } from "motion/react";
import { Plus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const PROJECTS = [
  {
    title: "Saldature Specializzate per l'Industria",
    company: "Partner Industriale",
    location: "Verona, IT",
    image: "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0166-800x600.jpg"
  },
  {
    title: "Scale di Design in Acciaio e Vetro",
    company: "Residenza Privata",
    location: "Garda, IT",
    image: "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/Immagine-WhatsApp-2025-04-16-ore-12.22.27_5937a1de-800x600.jpg"
  },
  {
    title: "Strutture Metalliche per Edilizia Civile",
    company: "Cantiere Edile",
    location: "Sommacampagna, IT",
    image: "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0132-800x600.jpg"
  }
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section className="py-24 md:py-32 bg-dark text-cream rounded-[10px] md:rounded-[20px] mx-4 md:mx-8 mb-24">
      <div className="container-standard">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-4">
            <h2 className="text-cream text-[3.2rem] md:text-[4.4rem]">
              Progetti che definiscono l'eccellenza
            </h2>
            <p className="text-cream/60 text-[1.8rem] mt-8 mb-12">
              Scoprite alcuni dei nostri lavori più recenti, dove la precisione incontra il design.
            </p>
            <Link to="/progetti" className="btn btn-light">
              Tutti i Progetti
            </Link>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project) => (
              <div
                key={project.title}
                className="group cursor-pointer"
                onClick={() => navigate(`/progetti/${project.title.toLowerCase().replace(/\s+/g, '-')}`)}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] md:rounded-[15px] mb-8">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-dark group-hover:scale-110">
                    <Plus className="w-6 h-6 text-red group-hover:text-white transition-colors" />
                  </div>
                </div>
                <h3 className="text-cream text-[2rem] md:text-[2.4rem] multi-line-underline mb-4">
                  {project.title}
                </h3>
                <div className="flex gap-4 text-cream/40 text-[1.4rem] uppercase tracking-wider">
                  <span>{project.company}</span>
                  <span>•</span>
                  <span>{project.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
