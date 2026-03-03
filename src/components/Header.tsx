import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { CONTACT_INFO } from "../constants";
import NavigationMenu from "./NavigationMenu";
import { Link } from "react-router-dom";
import { useContact } from "../context/ContactContext";

export default function Header({ theme = "dark" }: { theme?: "light" | "dark" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isContactOpen, openContact } = useContact();
  const isDarkText = theme === "light" || isScrolled || isMenuOpen || isContactOpen;

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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 md:py-8 ${isScrolled || isMenuOpen || isContactOpen ? "bg-cream/90 backdrop-blur-md" : "bg-transparent"
          }`}
      >
        <div className="container-standard flex items-center justify-between">
          <div className="flex items-center gap-12">
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Apri menu"
              className="flex flex-col gap-1.5 group cursor-pointer"
            >
              <span className={`h-[2px] w-8 bg-current transition-all ${isDarkText ? "text-dark" : "text-cream"}`}></span>
              <span className={`h-[2px] w-6 bg-current transition-all ${isDarkText ? "text-dark" : "text-cream"}`}></span>
            </button>
            <nav className="hidden lg:flex gap-10">
              {[
                { name: "Home", path: "/" },
                { name: "Cosa Facciamo", path: "/cosa-facciamo" },
                { name: "Progetti", path: "/progetti" },
                { name: "Lavora con noi", path: "#" }
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-[1.4rem] font-medium multi-line-underline ${isDarkText ? "text-dark" : "text-cream"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2">
            <Link to="/" className="block">
              <img
                src={CONTACT_INFO.logo}
                alt="VM Logo"
                className={`h-12 md:h-16 transition-all duration-500 ${isDarkText ? "brightness-0" : "brightness-0 invert"
                  }`}
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => openContact()}
              className={`btn cursor-pointer ${isDarkText ? "btn-dark" : "bg-cream/10 border border-cream/20 text-cream hover:bg-cream hover:text-dark"
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
        {isMenuOpen && (
          <NavigationMenu onClose={() => setIsMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
