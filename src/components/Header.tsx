import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { CONTACT_INFO } from "../constants";
import NavigationMenu from "./NavigationMenu";
import ContactOverlay from "./ContactOverlay";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen || isContactOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen, isContactOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 md:py-8 ${
          isScrolled || isMenuOpen || isContactOpen ? "bg-cream/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container-standard flex items-center justify-between">
          <div className="flex items-center gap-12">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="flex flex-col gap-1.5 group cursor-pointer"
            >
              <span className={`h-[2px] w-8 bg-current transition-all ${isScrolled || isMenuOpen || isContactOpen ? "text-dark" : "text-cream"}`}></span>
              <span className={`h-[2px] w-6 bg-current transition-all ${isScrolled || isMenuOpen || isContactOpen ? "text-dark" : "text-cream"}`}></span>
            </button>
            <nav className="hidden lg:flex gap-10">
              {["Cosa Facciamo", "Progetti", "Lavora con noi"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`text-[1.4rem] font-medium multi-line-underline ${
                    isScrolled || isMenuOpen || isContactOpen ? "text-dark" : "text-cream"
                  }`}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <a href="/" className="block">
              <img
                src={CONTACT_INFO.logo}
                alt="VM Logo"
                className={`h-12 md:h-16 transition-all duration-500 ${
                  isScrolled || isMenuOpen || isContactOpen ? "brightness-0" : "brightness-0 invert"
                }`}
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsContactOpen(true)}
              className={`btn cursor-pointer ${
                isScrolled || isMenuOpen || isContactOpen ? "btn-dark" : "bg-cream/10 border border-cream/20 text-cream hover:bg-cream hover:text-dark"
              }`}
            >
              Contattaci
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <NavigationMenu onClose={() => setIsMenuOpen(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isContactOpen && (
          <ContactOverlay onClose={() => setIsContactOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
