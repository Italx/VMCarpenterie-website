export interface Article {
    id: string;
    title: string;
    excerpt: string;
    content: string; // HTML or Markdown string for the body
    date: string;
    category: string;
    readTime: string;
    image: string;
    author: {
        name: string;
        role: string;
        avatar?: string;
    };
}

export const JOURNAL_CATEGORIES = ["Tutti", "Progetti", "Azienda", "Guide", "Design e Tendenze"];

export const ARTICLES: Article[] = [
    {
        id: "office-fit-out-trends-2026",
        title: "Tendenze Arredamento Uffici 2026: Cosa Pianificare Ora",
        excerpt: "Scopri come i nuovi layout e l'uso intelligente del metallo stanno trasformando gli spazi di lavoro moderni post-ibridazione.",
        content: `
      <h2>L'evoluzione dello spazio lavorativo</h2>
      <p>Negli ultimi anni, il concetto di ufficio ha subito una trasformazione radicale. Non è più solo un luogo dove le persone si recano per lavorare, ma un hub per la collaborazione, l'innovazione e la cultura aziendale. Nel 2026, vediamo una forte spinta verso spazi flessibili che integrano elementi industriali eleganti. Le pareti rigide in cartongesso stanno lasciando spazio a divisori vetrati con strutture in alluminio minimale o acciaio verniciato scuro, favorendo la luce naturale e il contatto visivo, pur garantendo l'isolamento acustico necessario.</p>
      
      <img src="https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0143.jpg" alt="Esempio di divisori in vetro e metallo" />

      <h3>Il Ruolo del Metallo nel Design</h3>
      <p>L'uso di finiture metalliche, dal ferro grezzo all'acciaio corten o verniciato a polvere, sta diventando un elemento estetico centrale. Questi materiali non solo offrono una durabilità senza pari in ambienti ad alto traffico, ma conferiscono agli uffici un aspetto premium e contemporaneo. Le pareti vetrate con infissi neri minimalisti sono ormai uno standard per dividere gli spazi direzionali e le sale riunioni. Inoltre, scale a vista, parapetti di design e corpi illuminanti su misura realizzati in carpenteria metallica si trasformano da elementi strutturali a veri e propri punti focali dell'interior design aziendale.</p>
      
      <h3>Sostenibilità e Benessere: Una Priorità Ineludibile</h3>
      <p>Le aziende stanno investendo in materiali riciclabili e in costruzioni "a secco". La carpenteria metallica si sposa perfettamente con questa esigenza, offrendo strutture che sono interamente smontabili, riconfigurabili e riciclabili a fine vita. Questo approccio circolare riduce drasticamente l'impatto ambientale delle ristrutturazioni ricorrenti. Oltretutto, un ufficio ben progettato, che combina l'estetica industriale del metallo con elementi biofilici (piante, legno naturale), riduce lo stress e aumenta la produttività e la soddisfazione del team.</p>

      <h2>Il Futuro: Personalizzazione Spinta</h2>
      <p>In VM Carpenteria Metallica, lavoriamo costantemente con studi di architettura e progettisti d'interni per creare soluzioni custom. Dai tavoli riunione scultorei ai sistemi di scrivanie modulari, fino ai complementi d'arredo unici, il nostro approccio artigianale permette di svincolarsi dalle soluzioni a catalogo, offrendo ad ogni azienda la possibilità di comunicare la propria brand identity attraverso arredi unici ed esclusivi.</p>
    `,
        date: "12 Mar 2026",
        category: "Design e Tendenze",
        readTime: "4 min",
        image: "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0142.jpg",
        author: {
            name: "Team VM",
            role: "Designers & Engineers"
        }
    },
    {
        id: "importanza-serramenti-isolamento",
        title: "L'Impatto dei Serramenti sull'Efficienza Energetica Industriale",
        excerpt: "Come la giusta scelta di infissi in acciaio o alluminio a taglio termico può ridurre drasticamente i costi operativi della tua azienda.",
        content: `
      <h2>Oltre l'estetica: Il risparmio tangibile</h2>
      <p>Capannoni industriali e uffici direzionali degli anni passati disperdono spesso enormi quantità di energia termica a causa di serramenti obsoleti. La riqualificazione energetica passa obbligatoriamente dalla sostituzione degli infissi, un intervento che non impatta solo sul comfort degli ambienti interni, ma si traduce direttamente in una diminuzione dei costi di riscaldamento e raffrescamento.</p>
      
      <p>In ambito industriale, dove le superfici vetrate possono essere molto ampie (lucernari, facciate continue, ingressi di carico), la dispersione causata da un infisso non a taglio termico o da vetri singoli può inficiare persino i moderni sistemi di climatizzazione.</p>

      <img src="https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0116.jpg" alt="Installazione serramenti a taglio termico" />

      <h3>Perché l'Acciaio a Taglio Termico?</h3>
      <p>I profili in acciaio a taglio termico combinano la straordinaria resistenza meccanica (imprescindibile per sostenere i pesi delle grandi specchiature e i tripli vetri) con un isolamento termico eccezionale. Il poliammide inserito all'interno del profilo in acciaio interrompe il ponte termico tra esterno e interno, impedendo la formazione di condensa e garantendo prestazioni in linea con le più restrittive normative CasaClima o similari.</p>
      <p>Inoltre, a differenza di altri materiali, l'acciaio possiede una resistenza al fuoco innata ed è in grado di supportare kit antieffrazione certificati di massimo livello, garantendo la sicurezza delle aree industriali.</p>
      
      <h3>Incentivi e Ritorno sull'Investimento (ROI)</h3>
      <p>Sostituire i vecchi serramenti non va considerato come una spesa passiva. È un investimento con un ritorno ben calcolabile, che spesso si ripaga nel giro di 5-7 anni. Ad accorciare i tempi di ammortamento contribuiscono in modo drastico gli incentivi fiscali statali previsti per la riqualificazione energetica degli edifici strumentali (Ecobonus).</p>
      <p>Noi di VM Carpenteria Metallica accompagniamo il cliente dalla consulenza iniziale, alla scelta del profilo (acciaio Secco Sistemi, Jansen, o alluminio Schüco), fornitura, posa qualificata certificata, fino alla corretta documentazione dei test di tenuta.</p>
    `,
        date: "05 Feb 2026",
        category: "Guide",
        readTime: "5 min",
        image: "https://www.vmcarpenteriametallica.it/wp-content/uploads/2026/01/IMG_6468-2.jpg",
        author: {
            name: "Team VM",
            role: "Technical Consultants"
        }
    },
    {
        id: "strutture-metalliche-sicurezza-cantiere",
        title: "Strutture Portanti in Acciaio: Sicurezza e Velocità in Cantiere",
        excerpt: "I vantaggi innegabili di scegliere la carpenteria metallica pesante per la costruzione e l'ampliamento di capannoni logistici e strutture commerciali.",
        content: `
      <h2>Costruire più velocemente, costruire più sicuro</h2>
      <p>Lo scenario costruttivo moderno richiede velocità e flessibilità. A differenza dell'edilizia tradizionale in cemento armato gettato in opera, l'impiego di strutture in acciaio interamente prefabbricate in officina garantisce tempi di cantiere drasticamente ridotti. Questo si traduce per l'investitore in cantieri più brevi, meno imprevisti meteorologici e, soprattutto, in una consegna più rapida dell'edificio finito per renderlo operativo sui mercati (time-to-market ridotto).</p>
      
      <h3>Precisione Millimetrica in Officina e in Cantiere</h3>
      <p>Nella carpenteria metallica, niente viene lasciato al caso. Ogni trave, colonna, piastra o tirante viene progettata al CAD (Computer-Aided Design), simulata strutturalmente e inviata alle macchine a controllo numerico (CNC) dove viene tagliata e forata con tolleranze strettissime. Il lavoro di saldatura viene eseguito da personale patentato, controllato tramite test non distruttivi.</p>
      
      <img src="https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0090.jpg" alt="Lavorazioni di carpenteria pesante" />

      <p>Quando i materiali arrivano in cantiere, il montaggio diventa un enorme e rapido assemblaggio. L'utilizzo di complessi imbullonati invece di saldature in quota velocizza il tutto in totale sicurezza per gli operatori. Questo azzera quasi le lavorazioni "sporche" e rumorose in sito.</p>

      <h3>Resistenza Sismica e Strutture Leggere</h3>
      <p>Non possiamo parlare di strutture in acciaio senza menzionare l'eccezionale comportamento sismico. L'acciaio, grazie alla sua intrinseca duttilità e flessibilità, è in grado di dissipare l'energia sprigionata durante i terremoti mediante deformazione controllata, senza giungere al collasso improvviso. In Italia, questa caratteristica è la chiave che porta sempre più progettisti a preferire la carpenteria d'acciaio per nuovi poli logistici, centri sportivi o per l'adeguamento e riqualificazione sismica di fabbricati industriali esistenti (es. incamiciatura di pilastri esistenti).</p>
      
      <p>Le grandi luci (distanze libere tra un pilastro e l'altro) realizzabili con travi tralicciate o a sezione piena permettono inoltre di creare magazzini enormi e senza ostacoli, perfetti per la logistica automatizzata.</p>
    `,
        date: "22 Gen 2026",
        category: "Guide",
        readTime: "7 min",
        image: "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0134.jpg",
        author: {
            name: "Team VM",
            role: "Structural Engineers"
        }
    },
    {
        id: "luxury-retail-fit-out",
        title: "Restyling Boutique di Lusso: Il Dettaglio che fa la Differenza",
        excerpt: "Un caso studio su come arredi e finiture metalliche personalizzate elevano l'esperienza cliente nel settore retail di fascia alta.",
        content: `
      <h2>L'Esperienza del Cliente Inizia dal Design</h2>
      <p>Nel retail di lusso, il punto vendita non è un semplice negozio, ma l'incarnazione fisica dello spirito del marchio. I materiali scelti devono comunicare solidità, pregio, esclusività e un'impeccabile cura del dettaglio. VM Carpenteria Metallica ha recentemente collaborato come partner operativo al restyling di prestigiose boutique nel centro di Milano e Ginevra, fornendo scale elicoidali, vetrine blindate e sistemi espositivi su misura.</p>
      
      <p>In questi progetti, il metallo è passato da essere mero supporto strutturale a vero protagonista dell'architettura d'interni, definendo lo spazio ed esaltando i prodotti in esposizione, dalla gioielleria all'haute couture.</p>

      <h3>Ottone, Bronzo, e Acciaio Inox Sartoriale</h3>
      <p>Le classiche finiture lasciano spazio a superfici nobili. L'ottone, il bronzo naturale e l'acciaio inox austenitico (AISI 316), trattati con finiture satinate, spazzolate a mano o lucidate a specchio, creano texture visive e giochi di luce inarrivabili. La difficoltà di queste realizzazioni sta nella manipolazione del materiale: qualsiasi piccolo graffio o variazione termica durante la saldatura può comprometterne l'estetica, richiedendo una manualità artigianale di altissimo livello che mescola la precisione meccanica alla scultura.</p>
      
      <img src="https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0078.jpg" alt="Dettaglio finiture metalliche" />

      <h3>Soluzioni "Seamless" e Sospese</h3>
      <p>La sfida principale imposta dagli interior designers in contesti fashion e luxury è nascondere completamente ogni indizio costruttivo. Le giunzioni, le saldature, i bulloni e i sistemi di ancoraggio devono semplicemente sparire alla vista del consumatore. Il risultato finale deve essere fluido (seamless) e apparentemente privo di sforzo strutturale, come se gli espositori pesanti tonnellate "galleggiassero" nel vuoto.</p>
      <p>L'Ufficio Tecnico di VM Carpenteria lavora letteralmente fianco a fianco con gli architetti per ingegnerizzare queste sfide, ideando giunti complessi e mascherine di rivestimento in fresatura per trasformare i render più audaci e sofisticati in realtà fisiche ineccepibili, pronte per il taglio del nastro.</p>
    `,
        date: "14 Nov 2025",
        category: "Progetti",
        readTime: "5 min",
        image: "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/Immagine-WhatsApp-2025-04-16-ore-12.22.27_6c9130ee.jpg",
        author: {
            name: "Team VM",
            role: "Project Managers"
        }
    },
    {
        id: "behind-the-scenes-officina",
        title: "Dietro le Quinte: Una Giornata nella Nostra Officina",
        excerpt: "Dalla progettazione CAD al taglio laser industriale e saldatura manuale. Scopri come prendono vita quotidianamente le nostre opere in metallo.",
        content: `
      <h2>Dove il design incontra la materia cruda</h2>
      <p>La nostra officina e stabilimento produttivo a Sommacampagna (Verona) è il vero cuore pulsante dell'azienda, il luogo dove i fogli di lamiera grezzi e le putrelle gigantesche diventano strutture eleganti, infissi minimali o ponti carrabili. Vi portiamo nella nostra officina per raccontarvi la filiera completa di un nostro prodotto su misura.</p>
      
      <img src="https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0166.jpg" alt="Vista dall'officina VM Carpenteria" />

      <h3>Dal Disegno alla Macchina CN</h3>
      <p>Prima ancora di accendere le scintille, il lavoro inizia davanti ai monitor ad altissima risoluzione del nostro ufficio tecnico. Qui la modellazione tridimensionale (BIM, CAD 3D) assicura lo sviluppo di elaborati esecutivi perfetti. Quegli stessi elaborati vengono tradotti in linguaggio macchina per il centro di taglio plasma, per il taglio laser della lamiera e le pressopiegatrici robotizzate. Questo passaggio unisce la mente artigiana alla scalabilità e standardizzazione industriale, minimizzando lo spreco di materiale (nesting).</p>
      
      <h3>L'Arte della Saldatura e Messa in Opera</h3>
      <p>Per quanto le macchine possano essere avanzate, l'assemblaggio di manufatti complessi rimane appannaggio esclusivo dell'uomo. I nostri operatori specializzati, saldatori qualificati (TIG, MIG, MAG, Elettrodo), eseguono le fasi più critiche con perizia chirurgica.</p>
      <p>Nella produzione per il design d'interni in particolare, la saldatura non funge solo da giunto strutturale ma assume una valenza puramente estetica: l'operatore impiega ore con la smerigliatrice per livellare l'apporto di materiale fino a fondere due pezzi contigui in un unico volume monolitico, sul quale poi verrà applicato il rivestimento scelto: zincatura, verniciatura ignifuga, polveri poliestere o laccature speciali a liquido.</p>
      
      <p>Terminata la costruzione a secco in officina per un pre-collaudo, l'opera viene ispezionata dalla dirigenza tecnica, caricata sui nostri bilici e spedita in cantiere per la posa, pronta per resistere alla prova del tempo. Questa filiera cortissima, controllata internamente dalla fase bozza fino all'installazione dell'ultima vite, garantisce la qualità svizzero-tedesca che distingue VM Carpenteria Metallica in Nord Italia ed Europa.</p>
    `,
        date: "03 Ott 2025",
        category: "Azienda",
        readTime: "6 min",
        image: "https://www.vmcarpenteriametallica.it/wp-content/uploads/2025/10/IMG-20250414-WA0112.jpg",
        author: {
            name: "Team VM",
            role: "Operations"
        }
    }
];
