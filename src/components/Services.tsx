import { motion } from "motion/react";
import { SERVICES } from "../constants";
import { Plus } from "lucide-react";

export default function Services() {
  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container-standard mb-20">
        <div className="max-w-[800px]">
          <h2 className="mb-0">
            Soluzioni complete in carpenteria metallica e arredamento di design
          </h2>
        </div>
      </div>

      <div className="container-standard grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[10px] md:rounded-[15px] mb-8">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-dark group-hover:scale-110">
                <Plus className="w-6 h-6 text-red group-hover:text-white transition-colors" />
              </div>
            </div>
            <h3 className="text-[2rem] md:text-[2.4rem] multi-line-underline mb-4">
              {service.title}
            </h3>
            <p className="text-dark/70 text-[1.6rem]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
