export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  detailImages: string[];
  processSteps: ServiceProcessStep[];
  features: ServiceFeature[];
}

const defaultProcessSteps: ServiceProcessStep[] = [
  {
    title: "Consultazione Preliminare",
    description: "Analisi delle esigenze, rilievi sul posto e studio di fattibilità per delineare la soluzione migliore."
  },
  {
    title: "Progettazione e Ingegnerizzazione",
    description: "Sviluppo di disegni tecnici dettagliati, scelta dei materiali e validazione del progetto con il cliente."
  },
  {
    title: "Produzione in Officina",
    description: "Realizzazione delle opere metalliche avvalendosi di tecnologie avanzate e precisione artigianale."
  },
  {
    title: "Posa in Opera e Collaudo",
    description: "Installazione qualificata in cantiere nel rispetto delle normative di sicurezza, seguita da collaudo finale."
  }
];

export const SERVICES: ServiceData[] = [
  {
    id: "fornitura-posa-serramenti",
    title: "Fornitura e Posa Serramenti",
    description: "Soluzioni su misura per serramenti di alta qualità, garantendo isolamento e design.",
    image: "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0141-800x450.jpg",
    link: "/cosa-facciamo/fornitura-posa-serramenti",
    detailImages: [
      "https://www.vmcarpenteriametallica.it/wp-content/uploads/2026/01/IMG_6468-2.jpg",
      "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0114.jpg",
      "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0116.jpg",
      "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0126.jpg"
    ],
    processSteps: defaultProcessSteps,
    features: [
      { title: "Isolamento Acustico e Termico", description: "Elevate prestazioni energetiche e comfort abitativo." },
      { title: "Finiture di Pregio", description: "Design moderno che si adatta a contesti residenziali e commerciali." },
      { title: "Sicurezza Antieffrazione", description: "Sistemi blindati e vetri antisfondamento certificati." },
      { title: "Manutenzione Ridotta", description: "Materiali resistenti progettati per durare nel tempo con scarsa manutenzione." }
    ]
  },
  {
    id: "arredamenti-design-ferro",
    title: "Arredamenti di Design in Ferro",
    description: "Creazioni uniche in ferro che coniugano estetica industriale e funzionalità moderna.",
    image: "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/Immagine-WhatsApp-2025-04-16-ore-12.22.27_5937a1de-800x600.jpg",
    link: "/cosa-facciamo/arredamenti-design-ferro",
    detailImages: [
      "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/Immagine-WhatsApp-2025-04-16-ore-12.22.27_6c9130ee.jpg",
      "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0076.jpg",
      "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0090.jpg",
      "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0139.jpg"
    ],
    processSteps: defaultProcessSteps,
    features: [
      { title: "Pezzi Unici Personalizzati", description: "Ogni realizzazione è studiata su misura per l'ambiente." },
      { title: "Stile Industriale Contemporaneo", description: "Integrazione perfetta tra metallo, legno e altri materiali." },
      { title: "Robustezza ed Eleganza", description: "Il ferro crudo o trattato garantisce solidità impareggiabile." },
      { title: "Versatilità di Impiego", description: "Adatti per locali commerciali, negozi, uffici e abitazioni private." }
    ]
  },
  {
    id: "opere-carpenterie-pesanti-leggere",
    title: "Opere di Carpenterie Pesanti e Leggere",
    description: "Realizzazione di strutture metalliche per ogni esigenza, dalla piccola alla grande scala.",
    image: "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0166-800x600.jpg",
    link: "/cosa-facciamo/opere-carpenterie-pesanti-leggere",
    detailImages: [
      "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0090.jpg",
      "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0112.jpg",
      "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0134.jpg",
      "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0169.jpg"
    ],
    processSteps: defaultProcessSteps,
    features: [
      { title: "Certificazione e Sicurezza", description: "Tutte le strutture rispettano le normative tecniche vigenti (NTC)." },
      { title: "Strutture Portanti", description: "Travi, pilastri e soppalchi per edilizia industriale e civile." },
      { title: "Componenti Architettonici", description: "Scale d'emergenza, parapetti e tettoie di grandi dimensioni." },
      { title: "Saldature Certificate", description: "Procedure di saldatura eseguite da personale patentato." }
    ]
  },
  {
    id: "lavorazioni-montaggi-conto-terzi",
    title: "Lavorazioni Montaggi conto Terzi",
    description: "Servizio professionale di montaggio e lavorazione metallica per partner industriali.",
    image: "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0157-e1768397520454-800x654.jpg",
    link: "/cosa-facciamo/lavorazioni-montaggi-conto-terzi",
    detailImages: [
      "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0085.jpg",
      "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0123.jpg",
      "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0160.jpg",
      "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0166.jpg"
    ],
    processSteps: defaultProcessSteps,
    features: [
      { title: "Squadre Specializzate", description: "Personale formato e addestrato al montaggio in quota." },
      { title: "Rispetto dei Tempi", description: "Organizzazione efficiente per rispettare le scadenze concordate." },
      { title: "Parco Mezzi Proprietario", description: "Disponibilità di attrezzature da sollevamento all'avanguardia." },
      { title: "Partnership di Fiducia", description: "Collaborazioni stabili con importanti realtà industriali della zona." }
    ]
  },
  {
    id: "forniture-pose-edilizia",
    title: "Forniture e pose per Edilizia",
    description: "Componenti metallici e installazioni specializzate per il settore delle costruzioni.",
    image: "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0132-800x600.jpg",
    link: "/cosa-facciamo/forniture-pose-edilizia",
    detailImages: [
      "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0076.jpg",
      "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0089.jpg",
      "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0111.jpg",
      "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0130.jpg"
    ],
    processSteps: defaultProcessSteps,
    features: [
      { title: "Supporto al Cantiere", description: "Integrazione perfetta con le altre maestranze in cantiere." },
      { title: "Strutture Ausiliarie", description: "Fornitura di staffaggi, rinforzi strutturali e ancoraggi metallici." },
      { title: "Finiture Estetiche", description: "Coprimuri, scossaline, e lavorazioni di lattoneria di precisione." },
      { title: "Competenza Normativa", description: "Piena conoscenza delle pratiche costruttive ottimali." }
    ]
  },
  {
    id: "manutenzioni-civili-industriali",
    title: "Manutenzioni Civili e Industriali",
    description: "Interventi di manutenzione programmata e straordinaria per impianti e strutture.",
    image: "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0152-e1768397386701-800x609.jpg",
    link: "/cosa-facciamo/manutenzioni-civili-industriali",
    detailImages: [
      "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0140.jpg",
      "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0152.jpg",
      "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0155.jpg",
      "https://www.vmcarpenteriametallica.it/wp-content/uploads/2026/01/IMG_6468-2.jpg"
    ],
    processSteps: defaultProcessSteps,
    features: [
      { title: "Interventi in Emergenza", description: "Riparazioni tempestive per minimizzare i fermi produttivi." },
      { title: "Adeguamento Strutturale", description: "Modifiche impiantistiche o rinforzi su strutture esistenti." },
      { title: "Manutenzione Periodica", description: "Controlli programmati sullo stato delle carpenterie metalliche." },
      { title: "Sostituzione Componenti Usurati", description: "Ripristino di parti metalliche compromesse nel tempo." }
    ]
  }
];

export const USPs = [
  {
    title: "Passione Artigiana",
    description: "Due professionisti uniti dalla passione per il mestiere e dalla volontà di creare prodotti d'eccellenza.",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Innovazione Tecnologica",
    description: "Investiamo costantemente in tecnologie all'avanguardia per garantire precisione e qualità superiore.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Sostenibilità",
    description: "Utilizziamo materiali eco-compatibili e processi ottimizzati per ridurre gli sprechi e l'impatto ambientale.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2069&auto=format&fit=crop"
  }
];

export const CONTACT_INFO = {
  address: "Via del Commercio, 25, 37066 Sommacampagna VR, Italy",
  email: "info@vmcarpenteriametallica.it",
  phone: "+39 123 456 7890", // Placeholder if not provided
  logo: "https://www.vmcarpenteriametallica.it/wp-content/uploads/2026/01/erasebg-transformed.png"
};
