import { motion } from "motion/react";
import { USPs } from "../constants";

export default function USP() {
  return (
    <section className="py-24 md:py-32 bg-dark text-cream rounded-[10px] md:rounded-[20px] mx-4 md:mx-8">
      <div className="container-standard grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <div className="lg:col-span-7">
          <h2 className="text-cream mb-8">
            Precisione, esperienza e creatività
          </h2>
          <p className="text-cream/70 text-[1.8rem] mb-12 max-w-[600px]">
            Siamo due professionisti con competenze complementari, uniti dalla passione per il mestiere e dalla volontà di creare prodotti che coniughino estetica e funzionalità.
          </p>
          <a href="#" className="btn btn-light">
            Chi Siamo
          </a>
        </div>

        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {USPs.map((usp) => (
            <div
              key={usp.title}
              className="flex flex-col"
            >
              <div className="aspect-video overflow-hidden rounded-[10px] md:rounded-[15px] mb-8">
                <img
                  src={usp.image}
                  alt={usp.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-cream text-[2.2rem] mb-4">{usp.title}</h3>
              <p className="text-cream/60 text-[1.6rem]">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
