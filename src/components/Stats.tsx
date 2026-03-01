import { motion } from "motion/react";

const STATS = [
  { label: "Anni di Esperienza", value: "20+" },
  { label: "Progetti Completati", value: "500+" },
  { label: "Clienti Soddisfatti", value: "100%" },
  { label: "Certificazioni ISO", value: "3" }
];

export default function Stats() {
  return (
    <section className="py-24 md:py-32 bg-cream border-t border-dark/5">
      <div className="container-standard">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
            >
              <span className="text-[4.8rem] md:text-[6.4rem] lg:text-[7.4rem] font-medium tracking-tighter text-dark leading-none mb-4">
                {stat.value}
              </span>
              <span className="text-[1.4rem] md:text-[1.6rem] uppercase tracking-widest text-dark/40 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
