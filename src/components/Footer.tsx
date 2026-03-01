import { CONTACT_INFO } from "../constants";

export default function Footer() {
  return (
    <footer className="bg-dark text-cream pt-24 pb-12 rounded-t-[10px] md:rounded-t-[20px] mt-24">
      <div className="container-standard">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-6">
            <h2 className="text-cream text-[3.4rem] md:text-[4.6rem] mb-12">
              Pronti a iniziare il vostro prossimo progetto?{" "}
              <a href="#" className="text-red underline decoration-red underline-offset-8 hover:decoration-transparent transition-all">
                Parliamone
              </a>
            </h2>
            <nav className="flex flex-wrap gap-8 md:gap-12">
              {["Cosa Facciamo", "Progetti", "About", "Lavora con noi", "Contatti"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-cream/60 hover:text-cream text-[1.6rem] md:text-[1.8rem] transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          
          <div className="lg:col-span-6 lg:text-right flex flex-col justify-between">
            <div>
              <h4 className="text-cream/40 uppercase tracking-widest text-[1.2rem] mb-4">Sede</h4>
              <p className="text-[1.8rem] mb-8">{CONTACT_INFO.address}</p>
            </div>
            <div className="flex flex-col lg:items-end gap-2">
              <a href={`tel:${CONTACT_INFO.phone}`} className="text-[2.2rem] font-medium hover:text-red transition-colors">
                {CONTACT_INFO.phone}
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-[1.8rem] text-red multi-line-underline">
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-8">
            <img src="https://somervilles.s3-assets.com/logos/ISO-9001.svg" alt="ISO 9001" className="h-10 opacity-50" />
            <img src="https://somervilles.s3-assets.com/logos/ISO-45001.svg" alt="ISO 45001" className="h-10 opacity-50" />
          </div>
          
          <div className="text-cream/40 text-[1.4rem] flex flex-wrap justify-center gap-6">
            <span>© 2026 VM Carpenterie Metalliche</span>
            <a href="#" className="hover:text-cream">Termini e Condizioni</a>
            <a href="#" className="hover:text-cream">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
