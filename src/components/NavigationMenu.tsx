import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useState } from "react";
import { CONTACT_INFO } from "../constants";
import { Link } from "react-router-dom";
import { useContact } from "../context/ContactContext";

interface NavigationMenuProps {
  onClose: () => void;
}

export default function NavigationMenu({ onClose }: NavigationMenuProps) {
  const menuItems = [
    {
      title: "Cosa Facciamo",
      path: "/cosa-facciamo",
      subItems: [
        { name: "Serramenti", path: "/cosa-facciamo/fornitura-posa-serramenti" },
        { name: "Arredamento Design", path: "/cosa-facciamo/arredamenti-design-ferro" },
        { name: "Carpenteria", path: "/cosa-facciamo/opere-carpenterie-pesanti-leggere" },
        { name: "Manutenzioni", path: "/cosa-facciamo/manutenzioni-civili-industriali" }
      ],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Progetti",
      path: "/progetti",
      subItems: [],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Journal",
      path: "/journal",
      subItems: [],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "About",
      subItems: [],
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Il Nostro Laboratorio",
      subItems: [],
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Lavora con noi",
      subItems: [],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2069&auto=format&fit=crop"
    },
    {
      title: "Contatti",
      subItems: [],
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop"
    },
  ];

  const [activeImage, setActiveImage] = useState(menuItems[0].image);
  const { openContact } = useContact();

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
      className="fixed inset-0 z-[60] bg-cream flex flex-col md:flex-row overflow-hidden"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Chiudi menu"
        className="absolute top-10 left-10 md:left-24 z-[70] flex items-center gap-4 group cursor-pointer"
      >
        <div className="w-12 h-12 rounded-full bg-dark flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          <X className="text-cream w-6 h-6" />
        </div>
        <span className="text-[1.6rem] font-medium text-dark multi-line-underline">Chiudi</span>
      </button>

      {/* Left Side: Navigation */}
      <div className="flex-1 pt-40 pb-20 px-10 md:px-24 overflow-y-auto">
        <nav>
          <ul className="flex flex-col gap-4 md:gap-8">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="group relative"
                onMouseEnter={() => setActiveImage(item.image)}
              >
                <div className="flex items-start gap-8">
                  {item.path ? (
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className="text-[3rem] md:text-[4.4rem] font-medium text-dark/40 hover:text-dark transition-colors multi-line-underline"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        if (item.title === "Contatti") {
                          openContact();
                          onClose();
                        }
                      }}
                      className="text-[3rem] md:text-[4.4rem] font-medium text-dark/40 hover:text-dark transition-colors multi-line-underline text-left cursor-pointer"
                    >
                      {item.title}
                    </button>
                  )}
                  {item.subItems.length > 0 && (
                    <div className="hidden lg:flex flex-col gap-2 pt-4">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          onClick={onClose}
                          className="text-[1.6rem] text-dark/70 hover:text-red transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className="mt-20 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <a href={`tel:${CONTACT_INFO.phone}`} className="text-[2rem] md:text-[2.6rem] font-medium text-dark hover:text-red transition-colors">
              {CONTACT_INFO.phone}
            </a>
            <button onClick={() => { openContact(); onClose(); }} className="text-[1.6rem] md:text-[1.8rem] text-red multi-line-underline cursor-pointer block text-left">
              {CONTACT_INFO.email}
            </button>
          </div>
          <button onClick={() => { openContact(); onClose(); }} className="btn btn-dark w-fit cursor-pointer">
            Inizia il tuo Progetto
          </button>
        </div>
      </div>

      {/* Right Side: Image Holder */}
      <div className="hidden md:block w-[45%] h-full relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage}
            src={activeImage}
            alt="Navigation Visual"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover rounded-l-[20px]"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
      </div>
    </motion.div >
  );
}
