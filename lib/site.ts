// Centralni sadržaj sajta — tekstovi, liste i galerija.
// Uređivanjem ovog fajla menjaš sadržaj kroz ceo sajt.

export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: "Početna", href: "/" },
  { label: "Žardinjere", href: "/#zardinjere" },
  { label: "Ostali proizvodi", href: "/#ostali-proizvodi" },
  { label: "Galerija", href: "/galerija" },
  { label: "Kontakt", href: "/kontakt" },
];

// ─── Ključne prednosti (trust bar) ───────────────────────────────────────────
export const HIGHLIGHTS: { label: string; value: string }[] = [
  { value: "2 mm", label: "Čelični lim za punu čvrstinu i stabilnost" },
  { value: "RAL", label: "Bilo koja nijansa iz RAL karte boja" },
  { value: "2015.", label: "Godina osnivanja i početak proizvodnje" },
  { value: "Cela Srbija", label: "Dostava i slanje kurirskom službom" },
];

// ─── Oblici žardinjera ───────────────────────────────────────────────────────
export const SHAPES: { name: string; description: string }[] = [
  {
    name: "Pravougaone",
    description:
      "Najtraženiji oblik za terase, ograde i pregrade u kancelarijama — dug, uzak gabarit koji lepo deli prostor.",
  },
  {
    name: "Kvadratne",
    description:
      "Stabilne kockaste žardinjere za pojedinačne biljke, drveće u saksiji ili akcente pored ulaza.",
  },
  {
    name: "Okrugle",
    description: "Meka, skulpturalna forma za enterijere, recepcije i reprezentativne prostore.",
  },
  {
    name: "Ovalne",
    description:
      "Elegantna kombinacija okruglog i izduženog oblika, idealna za centralne pozicije u prostoru.",
  },
  {
    name: "Konusne",
    description:
      "Suženje ka dnu daje lakoću i moderan izgled — čest izbor za dizajnerske enterijere.",
  },
];

// ─── Prednosti izrade (materijal) ────────────────────────────────────────────
export const MATERIAL_POINTS: { title: string; text: string }[] = [
  {
    title: "Zaštita od korozije i rđe",
    text: "Plastifikacija pre završnog farbanja — sloj koji lim čuva godinama.",
  },
  {
    title: "Vodonepropusni zavari",
    text: "Zavareni spojevi, brušeni i polirani do glatke, bezbedne površine.",
  },
  {
    title: "Drenaža po potrebi",
    text: "Otvori i uložak prilagođeni nameni i podlozi na koju se žardinjera postavlja.",
  },
  {
    title: "Ista trajnost unutra i napolju",
    text: "Otporne na sunce, mraz i vlagu — jednako dobre u dvorištu i u kancelariji.",
  },
];

// ─── Boje po RAL karti ───────────────────────────────────────────────────────
export const RAL_COLORS: { name: string; text: string }[] = [
  {
    name: "Antracit siva (RAL 7016)",
    text: "Najčešći izbor za terase i eksterijer — elegantno i neutralno.",
  },
  {
    name: "Crna (RAL 9005)",
    text: "Snažan, moderan kontrast uz staklo, drvo i beton.",
  },
  {
    name: "Bela (RAL 9016)",
    text: "Standard za kancelarije i svetle enterijere.",
  },
  {
    name: "Boja po izboru",
    text: "Bilo koji RAL ton, mat ili sjaj, po identitetu prostora ili brenda.",
  },
];

// ─── Primena — gde se žardinjere postavljaju ─────────────────────────────────
export const USE_CASES: { title: string; text: string }[] = [
  {
    title: "Terase i balkoni",
    text: "Žardinjere za ogradu i pod terase koje daju privatnost i zelenilo bez zauzimanja prostora.",
  },
  {
    title: "Krovne bašte",
    text: "Veliki, stabilni modeli otporni na vetar i sunce, sa drenažom prilagođenom hidroizolaciji.",
  },
  {
    title: "Dvorišta i prilazi",
    text: "Žbunje, lovor i ukrasne trave u žardinjerama koje uokviruju ulaz i stazu.",
  },
  {
    title: "Kancelarije",
    text: "Visoke žardinjere kao tihe pregrade između radnih mesta — bez bušenja i preuređenja.",
  },
  {
    title: "Lokali i ugostiteljstvo",
    text: "Žardinjere kao granica bašte kafića ili restorana prema trotoaru, u boji brenda.",
  },
  {
    title: "Enterijeri i recepcije",
    text: "Okrugle i konusne žardinjere kao dekorativni akcenat u reprezentativnim prostorima.",
  },
];

// ─── Proces izrade ───────────────────────────────────────────────────────────
export const PROCESS: { step: string; title: string; description: string }[] = [
  {
    step: "01",
    title: "Sečenje",
    description: "Lim debljine 2 mm sečemo precizno na dimenzije usklađene sa vašim prostorom.",
  },
  {
    step: "02",
    title: "Varenje",
    description: "Delove zavarujemo u čvrstu, vodonepropusnu konstrukciju bez slabih tačaka.",
  },
  {
    step: "03",
    title: "Brušenje",
    description: "Sve zavare i ivice brusimo do glatke, bezbedne površine.",
  },
  {
    step: "04",
    title: "Poliranje",
    description: "Površinu pripremamo i poliramo za savršeno prijanjanje boje.",
  },
  {
    step: "05",
    title: "Plastifikacija",
    description:
      "Nanosimo zaštitni sloj koji čuva žardinjeru od korozije, rđe i vremenskih uslova.",
  },
  {
    step: "06",
    title: "Farbanje po RAL karti",
    description: "Završni sloj u nijansi po vašem izboru — mat ili sjaj, unutra i spolja.",
  },
];

// ─── Usluge ──────────────────────────────────────────────────────────────────
export const SERVICES: {
  slug: string;
  title: string;
  short: string;
  details: string[];
}[] = [
  {
    slug: "izrada",
    title: "Izrada žardinjera po meri",
    short:
      "Izrada metalnih žardinjera od lima debljine 2 mm, sa plastifikacijom i farbanjem u boji po vašem izboru.",
    details: [
      "Dimenzije, oblik i visina prilagođeni tačno vašem prostoru.",
      "Kompletna obrada: sečenje, varenje, brušenje, poliranje, plastifikacija i farbanje.",
      "Nijansa po RAL karti — od diskretne antracit sive do izražene boje brenda.",
      "Rešenja za unutrašnji i spoljašnji prostor, otporna na vremenske uslove.",
    ],
  },
  {
    slug: "teren",
    title: "Postavljanje na terenu",
    short:
      "Postavljanje žardinjera na željeno mesto, sa mogućnošću dekorisanja sadnim materijalom.",
    details: [
      "Izlazak na lice mesta i precizno pozicioniranje žardinjera.",
      "Priprema drenaže i punjenje kvalitetnim supstratom.",
      "Dekoracija sadnim materijalom po dogovoru — zelenilo, žbunje, ukrasne trave, sezonske sadnice.",
      "Kompletno rešenje „ključ u ruke“ za dvorišta, terase i poslovne prostore.",
    ],
  },
  {
    slug: "dostava",
    title: "Dostava i slanje",
    short:
      "Isporuka na kućnu adresu na teritoriji Beograda, a za ostatak Srbije slanje kurirskom službom.",
    details: [
      "Dostava vlastitim vozilom na teritoriji Beograda.",
      "Slanje na teritoriji cele Srbije putem kurirskih službi, uobičajeno u roku od 2 dana.",
      "Pažljivo pakovanje koje štiti boju i ivice tokom transporta.",
    ],
  },
];

// ─── Ostali proizvodi od lima ────────────────────────────────────────────────
export const OTHER_PRODUCTS: { name: string; description: string }[] = [
  {
    name: "Maske za klima uređaje",
    description: "Diskretno sakrivaju spoljne jedinice i uklapaju se u fasadu i enterijer.",
  },
  {
    name: "Police",
    description:
      "Funkcionalna i dugotrajna rešenja od čeličnog profila — za magacin, radionicu ili dom.",
  },
  {
    name: "Kapije",
    description: "Sigurne i estetski oblikovane kapije po meri, u boji po izboru.",
  },
  {
    name: "Ograde",
    description: "Moderne i klasične ograde, izrađene s posebnom pažnjom prema detalju.",
  },
  {
    name: "Drvene žardinjere",
    description:
      "Za prirodan ambijent — od pažljivo biranog drveta sa limenim uloškom, zaštićene specijalnim premazima.",
  },
  {
    name: "Metalni stolovi i konstrukcije",
    description:
      "Stolovi sa čeličnim nogama, industrijske konstrukcije i sitna bravarija po zahtevu.",
  },
];

// ─── Zašto NIKOMIL ───────────────────────────────────────────────────────────
export const WHY_US: { title: string; description: string }[] = [
  {
    title: "Zaista po meri",
    description:
      "Ne biramo iz kataloga gotovih dimenzija. Žardinjeru pravimo prema centimetrima vašeg prostora.",
  },
  {
    title: "Materijal koji traje",
    description:
      "Lim debljine 2 mm, plastifikacija i farbanje po RAL karti daju otpornost na koroziju, rđu i sve vremenske uslove.",
  },
  {
    title: "Sopstvena proizvodnja",
    description:
      "Sečenje, varenje, brušenje, poliranje, plastifikacija i farbanje — sve na jednom mestu, od 2015. godine.",
  },
  {
    title: "Kompletno rešenje",
    description:
      "Od merenja i izrade, preko dostave, do postavljanja i sadnje zelenila na licu mesta.",
  },
  {
    title: "Unutra i spolja",
    description:
      "Žardinjere za dvorišta, terase, krovne bašte, poslovne prostore, lokale i enterijere.",
  },
  {
    title: "Cela Srbija",
    description: "Dostava na teritoriji Beograda i slanje kurirskom službom u ostatak zemlje.",
  },
];

// ─── Utisci klijenata ───────────────────────────────────────────────────────
export const TESTIMONIALS: { quote: string; name: string; company: string }[] = [
  {
    quote:
      "Kao firma koja često uređuje poslovne komplekse i stambene projekte, važno nam je da partneri isporučuju kvalitetna i dugotrajna rešenja. Žardinjere od pocinkovanog lima debljine 2 mm pokazale su se kao pouzdane i estetski besprekorne. Sarađivali smo na više projekata i uvek smo dobili maksimalnu podršku i prilagođena rešenja.",
    name: "Vesna Lazić",
    company: "Granit Invest",
  },
  {
    quote:
      "Naša kompanija se bavi uređenjem zelenih površina i dugo smo tragali za partnerom koji može da isporuči žardinjere vrhunskog kvaliteta. Žardinjere izrađene od pocinkovanog lima debljine 2 mm pokazale su se kao idealno rešenje – stabilne su, otporne na vremenske uslove i izgledaju moderno. Zadovoljni smo kako kvalitetom, tako i profesionalnim odnosom tokom cele saradnje.",
    name: "Radovan Popović",
    company: "Ever Green",
  },
  {
    quote:
      "Želeli smo da unapredimo izgled naše bašte i odlučili smo se za metalne žardinjere po meri. Rezultat je prevazišao očekivanja – prostor sada izgleda moderno i atraktivno, a gosti nam često hvale novi ambijent. Posebno nam je značilo što smo mogli da biramo dimenzije i boju kako bi se savršeno uklopile u enterijer i eksterijer kafića.",
    name: "Perica Stančevski",
    company: "Java kafić",
  },
];

// ─── Logoi firmi za koje smo radili ─────────────────────────────────────────
export const CLIENT_LOGOS: { src: string; name: string }[] = [
  { src: "/partneri/granit-invest.png", name: "Granit Invest" },
  { src: "/partneri/ever-green.png", name: "Ever Green" },
  { src: "/partneri/java-coffee.png", name: "Java Coffee" },
  { src: "/partneri/hilton-belgrade.png", name: "Hilton Belgrade" },
  { src: "/partneri/rajiceva-shopping-center.png", name: "Rajićeva Shopping Center" },
];

// ─── Česta pitanja ───────────────────────────────────────────────────────────
export const FAQ: { q: string; a: string }[] = [
  {
    q: "Da li se žardinjere rade po meri?",
    a: "Da. To je naša osnovna delatnost — svaku žardinjeru izrađujemo prema dimenzijama, obliku i visini koje odgovaraju vašem prostoru. Pošaljite nam mere ili opišite lokaciju i predlažemo rešenje.",
  },
  {
    q: "Od kog materijala su žardinjere?",
    a: "Izrađujemo ih od čeličnog lima debljine 2 mm, što obezbeđuje čvrstinu i stabilnost. Sledi kompletna obrada — plastifikacija i farbanje po RAL karti — koja štiti od korozije, rđe i vremenskih uslova.",
  },
  {
    q: "Koje boje su dostupne?",
    a: "Bilo koja nijansa iz RAL karte boja, u mat ili sjajnoj završnici. Najčešće se biraju antracit siva, crna i bela, ali radimo i boje po identitetu brenda.",
  },
  {
    q: "Da li su žardinjere za spoljašnju ili unutrašnju upotrebu?",
    a: "Za obe. Otporne su na vremenske uslove pa su idealne za dvorišta, terase i krovne bašte, a jednako dobro stoje u kancelarijama, lokalima i enterijerima kao pregrade i akcenti.",
  },
  {
    q: "Koje oblike i dimenzije radite?",
    a: "Pravougaone, kvadratne, okrugle, ovalne i konusne — od manjih dekorativnih žardinjera do velikih modela za drveće. Visina i dužina se prilagođavaju nameni.",
  },
  {
    q: "Da li postavljate žardinjere i sadite biljke?",
    a: "Da. Izlazimo na teren, postavljamo žardinjere na željeno mesto i po dogovoru ih dekorišemo sadnim materijalom — kompletno rešenje bez vaše dodatne organizacije.",
  },
  {
    q: "Kako funkcioniše dostava van Beograda?",
    a: "Na teritoriji Beograda dostavljamo sami. Za ostatak Srbije šaljemo kurirskom službom, uobičajeno u roku od 2 dana, uz pakovanje koje čuva boju i ivice.",
  },
  {
    q: "Kako da dobijem ponudu?",
    a: "Pozovite 060 39 76 642 ili pišite na nikomilbg@gmail.com. Recite nam dimenzije, željeni oblik i boju (RAL) i gde se žardinjera postavlja — ponudu dobijate brzo.",
  },
];

// ─── Galerija ────────────────────────────────────────────────────────────────
export type GalleryCategory =
  | "terasa"
  | "enterijer"
  | "ulica"
  | "proizvodnja"
  | "drvene"
  | "ostalo";

export const GALLERY_FILTERS: { key: GalleryCategory | "sve"; label: string }[] = [
  { key: "sve", label: "Sve" },
  { key: "terasa", label: "Terase i dvorišta" },
  { key: "enterijer", label: "Kancelarije i enterijeri" },
  { key: "ulica", label: "Lokali i ulica" },
  { key: "proizvodnja", label: "Proizvodnja i montaža" },
  { key: "drvene", label: "Drvene žardinjere" },
  { key: "ostalo", label: "Ostali proizvodi" },
];

export type GalleryImage = {
  src: string;
  alt: string;
  category: GalleryCategory;
};

const g = (src: string, alt: string, category: GalleryCategory): GalleryImage => ({
  src: `/galerija/${src}`,
  alt,
  category,
});

export const GALLERY: GalleryImage[] = [
  g(
    "antracit-zardinjere-duz-trema-vile-sa-lukovima.jpg",
    "Antracit metalne žardinjere po meri duž trema vile sa kamenim lukovima",
    "terasa"
  ),
  g(
    "zardinjere-ukrasna-trava-muskatle-trem-vile.jpg",
    "Metalna žardinjera sa ukrasnom travom i crvenim muškatlama na tremu vile",
    "terasa"
  ),
  g(
    "zardinjere-trem-pogled-na-kapelu-sa-kupolom.jpg",
    "Metalne žardinjere na tremu dvorišta sa pogledom na kapelu sa kupolom",
    "terasa"
  ),
  g(
    "niz-antracit-zardinjera-duz-trema-vile.jpg",
    "Dug niz antracit metalnih žardinjera po meri duž trema vile",
    "terasa"
  ),
  g(
    "antracit-zardinjere-fasada-vile-dvoriste.jpg",
    "Antracit metalne žardinjere po meri uz fasadu vile u dvorištu",
    "terasa"
  ),
  g(
    "metalna-zardinjera-antracit-terasa-restoran.jpg",
    "Antracit metalna žardinjera po meri sa lovorom, bašta restorana u Beogradu",
    "ulica"
  ),
  g(
    "metalne-zardinjere-antracit-dvoriste-ograda.jpg",
    "Niz antracit metalnih žardinjera od lima uz ogradu u dvorištu",
    "terasa"
  ),
  g(
    "metalna-zardinjera-po-meri-terasa-kafic.jpg",
    "Duga metalna žardinjera po meri kao pregrada na terasi kafića",
    "ulica"
  ),
  g(
    "zardinjera-od-lima-antracit-basta-restorana.jpg",
    "Metalna žardinjera od lima u antracit boji, ulaz u restoran",
    "ulica"
  ),
  g(
    "metalne-zardinjere-lovor-terasa-beograd.jpg",
    "Metalne žardinjere sa lovorom uz staklenu ogradu terase",
    "terasa"
  ),
  g(
    "zardinjere-krovna-terasa-pogled-beograd.jpg",
    "Ugaone metalne žardinjere na krovnoj terasi sa pogledom na Beograd",
    "terasa"
  ),
  g(
    "metalne-zardinjere-krovna-terasa-ukrasne-trave.jpg",
    "Metalne žardinjere sa ukrasnim travama duž krovne terase",
    "terasa"
  ),
  g(
    "zardinjera-antracit-trotoar-beograd.jpg",
    "Antracit metalna žardinjera sa zelenilom na trotoaru u Beogradu",
    "ulica"
  ),
  g(
    "metalne-zardinjere-za-ogradu-terase-simsir.jpg",
    "Visoka bela metalna žardinjera sa sobnim biljem uz prozor kancelarije",
    "enterijer"
  ),
  g(
    "zardinjere-na-ogradi-terase-sive.jpg",
    "Sive metalne žardinjere okačene na ogradu terase",
    "terasa"
  ),
  g(
    "zardinjere-terasa-pogled-hram-svetog-save.jpg",
    "Bela metalna žardinjera kao pregrada pored police u kancelariji",
    "enterijer"
  ),
  g(
    "metalne-zardinjere-tuje-krovna-terasa.jpg",
    "Visoka bela metalna žardinjera sa zelenilom uz prozor kancelarije",
    "enterijer"
  ),
  g(
    "zardinjera-na-ogradi-terase-zacinsko-bilje.jpg",
    "Metalna žardinjera na ogradi terase zasađena začinskim biljem",
    "terasa"
  ),
  g(
    "zardinjere-antracit-ispred-lokala-beograd.jpg",
    "Antracit metalna žardinjera sa bambusom na natkrivenoj terasi stana",
    "terasa"
  ),
  g(
    "izrada-metalnih-zardinjera-pocinkovani-lim.jpg",
    "Izrada metalnih žardinjera od pocinkovanog lima u radionici",
    "proizvodnja"
  ),
  g(
    "postavljanje-zardinjera-na-terasi-beograd.jpg",
    "Postavljanje belih metalnih žardinjera na terasi",
    "proizvodnja"
  ),
  g(
    "montaza-zardinjera-na-licu-mesta.jpg",
    "Montaža metalnih žardinjera i sadnja zelenila na licu mesta",
    "proizvodnja"
  ),
  g(
    "sadnja-zelenila-u-metalne-zardinjere.jpg",
    "Metalne police od crnog profila sa OSB pločama u magacinu",
    "ostalo"
  ),
  g(
    "bela-metalna-zardinjera-kancelarija.jpg",
    "Visoka bela metalna žardinjera sa sobnim biljem u kancelariji",
    "enterijer"
  ),
  g(
    "bele-zardinjere-pregrade-kancelarija.jpg",
    "Bele metalne žardinjere kao pregrade između radnih mesta",
    "enterijer"
  ),
  g(
    "metalna-zardinjera-za-enterijer-bela.jpg",
    "Bela metalna žardinjera sa belim oblutkom u enterijeru",
    "enterijer"
  ),
  g(
    "visoka-bela-zardinjera-poslovni-prostor.jpg",
    "Visoka bela metalna žardinjera u poslovnom prostoru pored prozora",
    "enterijer"
  ),
  g(
    "zardinjera-bela-uz-prozor-kancelarija.jpg",
    "Bela metalna žardinjera uz prozor kancelarije sa zamiokulkasom",
    "enterijer"
  ),
  g(
    "bela-zardinjera-razdelnik-radnog-prostora.jpg",
    "Bela metalna žardinjera kao razdelnik radnog prostora ispred zida",
    "enterijer"
  ),
  g(
    "bela-zardinjera-open-space-kancelarija.jpg",
    "Bela metalna žardinjera u open space kancelariji",
    "enterijer"
  ),
  g(
    "bele-zardinjere-uz-radne-stolove.jpg",
    "Niz belih metalnih žardinjera sa zelenilom uz radne stolove",
    "enterijer"
  ),
  g(
    "drvene-zardinjere-sa-limenim-uloskom.jpg",
    "Drvene žardinjere sa limenim uloškom na kamenom zidu u dvorištu",
    "drvene"
  ),
  g(
    "drvene-zardinjere-na-ogradnom-zidu.jpg",
    "Drvene žardinjere sa letvicama postavljene na ogradni zid kuće",
    "drvene"
  ),
  g(
    "maske-za-klima-uredjaje-od-lima.jpg",
    "Maske za spoljne jedinice klima uređaja izrađene od lima",
    "ostalo"
  ),
  g(
    "metalna-ograda-antracit-sa-zardinjerama.jpg",
    "Dve antracit metalne žardinjere na balkonu sa staklenom ogradom",
    "terasa"
  ),
  g(
    "metalne-police-crni-celicni-profil.jpg",
    "Antracit metalna žardinjera sa lovorom na terasi, pogled na Hram Svetog Save",
    "terasa"
  ),
  g(
    "sto-sa-metalnim-nogama-i-drvenom-plocom.jpg",
    "Velika ugradna antracit metalna žardinjera sa lavandom i drvetom",
    "enterijer"
  ),
  g(
    "zardinjera-za-drvo-u-kaficu-okrugli-sto.jpg",
    "Okrugli sto sa ugrađenom metalnom žardinjerom za drvo u kafiću",
    "enterijer"
  ),
  g(
    "zardinjere-krovna-terasa-hram-svetog-save.jpg",
    "Crne metalne žardinjere na krovnoj terasi sa pogledom na Hram Svetog Save",
    "terasa"
  ),
  g(
    "metalna-zardinjera-na-trotoaru-sa-krotonom.jpg",
    "Antracit metalna žardinjera sa krotonom na trotoaru u Beogradu",
    "ulica"
  ),
  g(
    "zardinjera-antracit-ulica-krotoni-beograd.jpg",
    "Bela metalna žardinjera sa sobnim biljem ispred zelenog zida u kancelariji",
    "enterijer"
  ),
  g(
    "bela-zardinjera-kancelarija-zeleni-zid.jpg",
    "Antracit metalne žardinjere na krovnoj terasi sa pogledom na Hram Svetog Save",
    "terasa"
  ),
  g(
    "bela-zardinjera-pregrada-izmedju-stolova.jpg",
    "Bela metalna žardinjera kao pregrada između radnih stolova",
    "enterijer"
  ),
  g(
    "zardinjere-uz-staklenu-ogradu-terase-hram.jpg",
    "Metalne žardinjere duž staklene ograde terase, pogled na Hram Svetog Save",
    "terasa"
  ),
  g(
    "bela-metalna-zardinjera-uz-prozor-kancelarije.jpg",
    "Bela metalna žardinjera sa zelenilom uz prozor kancelarije",
    "enterijer"
  ),
  g(
    "sadnja-lovora-u-crne-metalne-zardinjere.jpg",
    "Antracit metalne žardinjere sa krotonima na trotoaru u Beogradu, ispred lokala",
    "ulica"
  ),
  g(
    "ugaone-zardinjere-krovna-terasa-pogled-grad.jpg",
    "Ugaone antracit žardinjere na krovnoj terasi sa pogledom na grad",
    "terasa"
  ),
  g(
    "zardinjera-antracit-basta-restorana-stolice.jpg",
    "Antracit metalna žardinjera kao pregrada bašte restorana",
    "ulica"
  ),
  g(
    "metalne-zardinjere-sa-tujama-na-terasi.jpg",
    "Kvadratne metalne žardinjere sa tujama na terasi",
    "terasa"
  ),
  g(
    "zardinjere-terasa-staklena-ograda-pogled.jpg",
    "Sto sa crnim metalnim nogama i drvenom pločom u kuhinji",
    "ostalo"
  ),
  g(
    "prozorske-zardinjere-antracit-simsir-balkon.jpg",
    "Antracit prozorske žardinjere sa šimširom na zidu balkona",
    "terasa"
  ),
  g(
    "bela-zardinjera-pregrada-open-space.jpg",
    "Bela metalna žardinjera kao pregrada u open space kancelariji",
    "enterijer"
  ),
  g(
    "zardinjere-antracit-krovna-terasa-vestacka-trava.jpg",
    "Antracit žardinjere na ivici krovne terase sa veštačkom travom",
    "terasa"
  ),
  g(
    "crne-zardinjere-spremne-za-isporuku.jpg",
    "Crne metalne žardinjere zapakovane i spremne za isporuku",
    "proizvodnja"
  ),
  g(
    "bela-zardinjera-zeleni-zid-kancelarija.jpg",
    "Bela metalna žardinjera ispred zelenog zida sa akustičnim panelima",
    "enterijer"
  ),
  g(
    "zardinjere-duz-krovne-terase-beograd.jpg",
    "Niz metalnih žardinjera duž krovne terase u Beogradu",
    "terasa"
  ),
  g(
    "crne-zardinjere-brsljan-terasa-hram-save.jpg",
    "Crne metalne žardinjere sa zelenilom u enterijeru, pogled na Hram Svetog Save",
    "enterijer"
  ),
  g(
    "zardinjere-krovna-terasa-drveni-pod-pogled.jpg",
    "Antracit žardinjere na krovnoj terasi sa drvenim podom i pogledom na grad",
    "terasa"
  ),
  g(
    "crne-zardinjere-basta-kafica-suncobrani.jpg",
    "Niz crnih metalnih žardinjera oko bašte kafića sa suncobranima",
    "ulica"
  ),
  g(
    "bele-zardinjere-sansevijere-uz-radne-stolove.jpg",
    "Bele metalne žardinjere sa sansevijerama uz radne stolove u kancelariji",
    "enterijer"
  ),
  g(
    "krovna-terasa-lounge-crne-zardinjere-hram.jpg",
    "Crne metalne žardinjere u lounge enterijeru sa pogledom na Hram Svetog Save",
    "enterijer"
  ),
  g(
    "ugaone-zardinjere-krovna-terasa-vedro-nebo.jpg",
    "Ugaone antracit žardinjere sa žbunjem na krovnoj terasi",
    "terasa"
  ),
  g(
    "zardinjere-lovor-staklena-ograda-terase.jpg",
    "Metalne žardinjere sa lovorom uz staklenu ogradu terase",
    "terasa"
  ),
  g(
    "metalne-zardinjere-lovor-zbunje-terasa.jpg",
    "Metalne žardinjere sa lovorom i žbunjem duž terase",
    "terasa"
  ),
  g(
    "zardinjere-antracit-lovor-brsljan-terasa.jpg",
    "Antracit žardinjere sa lovorom i bršljanom na terasi",
    "terasa"
  ),
  g(
    "bele-zardinjere-izmedju-radnih-stolova-kancelarija.jpg",
    "Bele metalne žardinjere između radnih stolova u kancelariji",
    "enterijer"
  ),
  g(
    "crna-zardinjera-kroton-ispred-kafica.jpg",
    "Crna metalna žardinjera sa krotonom ispred kafića",
    "ulica"
  ),
  g(
    "bela-visoka-zardinjera-prazna-kancelarija.jpg",
    "Visoka bela metalna žardinjera u kancelariji pre useljenja",
    "enterijer"
  ),
  g(
    "crna-zardinjera-ispred-kafe-radnje.jpg",
    "Antracit metalne žardinjere na veštačkoj travi uz ogradu u dvorištu",
    "terasa"
  ),
  g(
    "bela-kockasta-zardinjera-ugao-kancelarije.jpg",
    "Bela kockasta metalna žardinjera u uglu kancelarije",
    "enterijer"
  ),
  g(
    "bela-visoka-zardinjera-sobno-bilje-kancelarija.jpg",
    "Visoka bela metalna žardinjera sa sobnim biljem uz prozor kancelarije",
    "enterijer"
  ),
  g(
    "drvena-prozorska-zardinjera-na-kamenoj-fasadi.jpg",
    "Drvena prozorska žardinjera na kamenoj fasadi kuće",
    "drvene"
  ),
  g(
    "zardinjere-ukrasne-trave-krovna-terasa-hram.jpg",
    "Metalne žardinjere sa ukrasnim travama na krovnoj terasi, pogled na Hram Svetog Save",
    "terasa"
  ),
  g(
    "zardinjere-uz-ogradu-terase-pogled-hram-save.jpg",
    "Metalne žardinjere uz ogradu terase sa pogledom na Hram Svetog Save",
    "terasa"
  ),
];

export const HERO_IMAGE = "/galerija/metalna-zardinjera-antracit-terasa-restoran.jpg";
export const PRODUCTION_IMAGE = "/galerija/izrada-metalnih-zardinjera-pocinkovani-lim.jpg";
export const OG_IMAGE = "/galerija/metalna-zardinjera-antracit-terasa-restoran.jpg";
