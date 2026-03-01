import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[500px] overflow-hidden rounded-b-2xl bg-zinc-900">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
          alt="Industrial Metalwork"
          className="w-full h-full object-cover opacity-70"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
      </div>

      <div className="container-standard relative z-10 h-full flex flex-col justify-end pb-20">
        <div className="max-w-[1000px]">
          <h1 className="text-white leading-[0.9] mb-8 text-[4rem] md:text-[6rem] lg:text-[8rem]">
            <span className="block">Eccellenza nella</span>
            <span className="block text-red-600">Carpenteria Metallica</span>
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <hr className="w-16 border-white/30" />
            <p className="text-white/90 text-[1.6rem] md:text-[2rem] font-light uppercase tracking-widest">
              Lavori conto terzi • Montaggi • Produzione
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
