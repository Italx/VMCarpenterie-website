import { motion } from "motion/react";
import { X, Send } from "lucide-react";
import { CONTACT_INFO } from "../constants";

interface ContactOverlayProps {
  onClose: () => void;
}

export default function ContactOverlay({ onClose }: ContactOverlayProps) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
      className="fixed inset-0 z-[60] bg-cream flex flex-col lg:flex-row overflow-hidden"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-10 right-10 z-[70] flex items-center gap-4 group cursor-pointer"
      >
        <span className="text-[1.6rem] font-medium text-dark multi-line-underline">Chiudi</span>
        <div className="w-12 h-12 rounded-full bg-dark flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <X className="text-cream w-6 h-6" />
        </div>
      </button>

      {/* Left Side: Form */}
      <div className="flex-1 pt-32 pb-20 px-10 md:px-24 overflow-y-auto">
        <div className="max-w-[600px]">
          <h2 className="text-[4rem] md:text-[5.6rem] leading-tight mb-8">
            Inizia il tuo <span className="text-red">progetto</span> con noi
          </h2>
          <p className="text-[1.8rem] text-dark/60 mb-16">
            Compila il modulo sottostante e ti ricontatteremo al più presto per discutere le tue esigenze.
          </p>

          <form className="flex flex-col gap-12">
            <div className="relative group">
              <input
                type="text"
                placeholder="Nome e Cognome"
                className="w-full bg-transparent border-b border-dark/20 py-4 text-[1.8rem] focus:outline-none focus:border-red transition-colors placeholder:text-dark/30"
              />
            </div>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-dark/20 py-4 text-[1.8rem] focus:outline-none focus:border-red transition-colors placeholder:text-dark/30"
              />
            </div>
            <div className="relative group">
              <input
                type="tel"
                placeholder="Telefono"
                className="w-full bg-transparent border-b border-dark/20 py-4 text-[1.8rem] focus:outline-none focus:border-red transition-colors placeholder:text-dark/30"
              />
            </div>
            <div className="relative group">
              <textarea
                placeholder="Il tuo messaggio"
                rows={4}
                className="w-full bg-transparent border-b border-dark/20 py-4 text-[1.8rem] focus:outline-none focus:border-red transition-colors placeholder:text-dark/30 resize-none"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-dark w-fit flex items-center gap-4 group">
              Invia Messaggio
              <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>
        </div>
      </div>

      {/* Right Side: Info & Image */}
      <div className="hidden lg:flex w-[40%] bg-dark flex-col justify-between p-24 relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-cream text-[2.4rem] mb-12">Contatti Diretti</h3>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-cream/40 text-[1.4rem] uppercase tracking-widest">Telefono</span>
              <a href={`tel:${CONTACT_INFO.phone}`} className="text-cream text-[2.2rem] hover:text-red transition-colors">
                {CONTACT_INFO.phone}
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-cream/40 text-[1.4rem] uppercase tracking-widest">Email</span>
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-cream text-[2.2rem] hover:text-red transition-colors">
                {CONTACT_INFO.email}
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-cream/40 text-[1.4rem] uppercase tracking-widest">Sede</span>
              <p className="text-cream text-[2rem] leading-relaxed">
                {CONTACT_INFO.address}
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 pt-20">
          <div className="flex gap-8">
            <a href="#" className="text-cream/60 hover:text-cream transition-colors text-[1.4rem] uppercase tracking-widest">Instagram</a>
            <a href="#" className="text-cream/60 hover:text-cream transition-colors text-[1.4rem] uppercase tracking-widest">LinkedIn</a>
          </div>
        </div>

        {/* Decorative Image Background */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
            alt="Contact Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </motion.div>
  );
}
