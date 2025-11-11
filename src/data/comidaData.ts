export interface Attraction {
  id: number;
  name: string;
  description: string;
  image: string;
  details: string;
  type: string;
  bestTime: string;
  difficulty: string;
}
import carapulcra from "../assets/images/CARAPULCRA CON SOPASECA.webp";
import chupe from "../assets/images/CHUPEDEPALLARESVERDES.webp";
import ensaladaGarbanzos from "../assets/images/ENSALADA DE GARBANZOS.webp";
import ensaladaPallares from "../assets/images/ENSALADA DE PALLARES.webp";
import picantePallares from "../assets/images/PICANTE DE PALLARES VERDES.webp";
import tamales from "../assets/images/TAMALES DE CHANCHO.webp";
import chicharron from "../assets/images/Chicharrón de Chancho.webp";
import piscoPuro from "../assets/images/Pisco Puro Aromático.webp";
import piscoAcholado from "../assets/images/Pisco Acholado.webp";
import mostoVerde from "../assets/images/Mosto Verde.webp";
import cachina from "../assets/images/Cachina.webp";
import vinoArtesanal from "../assets/images/Variedad de Vinos.webp";
import chilcano from "../assets/images/Chilcano de Pisco.webp";
import piscoSour from "../assets/images/Pisco Sour.webp";
import mazamorra from "../assets/images/Mazamorra de Uva.webp";
import quequePecana from "../assets/images/Queque de Pecana.webp";
import tejas from "../assets/images/Tejas y Chocotejas.webp";
import causaPapa from "../assets/images/Causa de Papa.webp";
import causaPallaresSecos from "../assets/images/Causa de pallares.webp";
import causaGarbanzos from "../assets/images/Causa de Garbanzos.webp";
import causaPallaresVerdes from "../assets/images/Causa Rellena de Pallares Verdes.webp";
import arrozPallaresChancho from "../assets/images/Arroz con Pallares con Adobo de Chancho.webp";
import carapulcraGarbanzos from "../assets/images/Carapulcra de Garbanzos y Chancho.webp";
import polloPecana from "../assets/images/Pollo en Salsa de Pecana.webp";
import pureGarbanzos from "../assets/images/Puré de Garbanzos.webp";
import secoPallaresLonja from "../assets/images/Seco de Pallares con Lonja.webp";
import cremaGarbanzosPapa from "../assets/images/Crema de Garbanzos con Papa.webp";
import cremaEsparragos from "../assets/images/Crema de Espárragos.webp";
import escabecheGarbanzos from "../assets/images/Escabeche de Garbanzos.webp";
import sopaPallaresVerdes from "../assets/images/Sopa de Pallares Verdes.webp";
import tamalesGarbanzos from "../assets/images/Tamales de Garbanzos.webp";
import torrejitasGarbanzos from "../assets/images/Torrejas de Garbanzos.webp";
import conejoPiscoGarbanzos from "../assets/images/Conejo al Pisco con Crema de Garbanzos.webp";
import quequeFrejol from "../assets/images/Queque de Frejol.webp";
import dulceGarbanzos from "../assets/images/Dulce de Garbanzos.webp";
import piePecana from "../assets/images/Pie de Pecana.webp";
import quituscos from "../assets/images/Quituscos.webp";
import caldoGallina from "../assets/images/caldoGallina.jpg";
import sopaCancate from "../assets/images/sopaCancate.jpg";
import adoboRes from "../assets/images/adoboRes.jpg";
import arrozPato from "../assets/images/arrozPato.jpg";
export const comidaData: Attraction[] = [
  // ---------------- PLATOS TÍPICOS ----------------
  {
    id: 1,
    name: "Carapulcra con Sopa Seca",
    description: "Plato emblemático del distrito",
    details:
      "Preparado con papa seca guisada con carne de cerdo o gallina, ají panca y especias, acompañado de Sopa Seca hecha con fideos, ají colorado y cebolla.",
    image: carapulcra,
    type: "Gastronómico",
    bestTime: "Todo el año",
    difficulty: "Fácil",
  },
  {
    id: 2,
    name: "Chupe de Pallares Verdes",
    description: "Sabor tradicional iqueño",
    details:
      "Plato cremoso elaborado con pallares verdes cocidos, queso, leche y cebolla. Ideal para días fríos.",
    image: chupe,
    type: "Gastronómico",
    bestTime: "Todo el año",
    difficulty: "Fácil",
  },
  {
    id: 3,
    name: "Ensalada de Garbanzos",
    description: "Entrada fresca y ligera",
    details:
      "Preparada con garbanzos cocidos, cebolla, rocoto y limón. Se sirve como acompañamiento o entrada.",
    image: ensaladaGarbanzos,
    type: "Gastronómico",
    bestTime: "Todo el año",
    difficulty: "Fácil",
  },
  {
    id: 4,
    name: "Ensalada de Pallares",
    description: "Fresca y tradicional",
    details:
      "Pallares sancochados mezclados con cebolla, tomate y una vinagreta ligera. Puede incluir queso rallado.",
    image: ensaladaPallares,
    type: "Gastronómico",
    bestTime: "Todo el año",
    difficulty: "Fácil",
  },
  {
    id: 5,
    name: "Picante de Pallares Verdes",
    description: "Plato criollo con toque de ají",
    details:
      "Pallares cocidos en aderezo de ají amarillo, acompañados con arroz blanco y carne guisada.",
    image: picantePallares,
    type: "Gastronómico",
    bestTime: "Todo el año",
    difficulty: "Media",
  },
  {
    id: 6,
    name: "Tamales de Chancho",
    description: "Tradición de domingos",
    details:
      "Masa de maíz con carne de cerdo, ajíes y condimentos, envuelta en hoja de plátano y cocida al vapor.",
    image: tamales,
    type: "Gastronómico",
    bestTime: "Fines de semana",
    difficulty: "Fácil",
  },
  {
    id: 7,
    name: "Chicharrón de Chancho",
    description: "Clásico desayuno iqueño",
    details:
      "Carne de cerdo frita, acompañada con camote frito y sarza criolla. Símbolo de la mezcla gastronómica peruana.",
    image: chicharron,
    type: "Gastronómico",
    bestTime: "Mañanas",
    difficulty: "Fácil",
  },
  {
    id: 20,
    name: "Causa de Papa",
    description: "Clásico tradicional",
    details:
      "Preparada con papa amarilla prensada, aliñada con ají amarillo y limón, rellena al gusto. Plato emblemático de la cocina peruana.",
    image: causaPapa,
    type: "Gastronómico",
    bestTime: "Almuerzo",
    difficulty: "Fácil",
  },
  {
    id: 21,
    name: "Causa de Pallares Secos",
    description: "Variante regional",
    details:
      "Base de pallares secos molidos, mezclados con ají amarillo y limón, servida fría como entrada tradicional.",
    image: causaPallaresSecos,
    type: "Gastronómico",
    bestTime: "Almuerzo",
    difficulty: "Media",
  },
  {
    id: 22,
    name: "Causa de Garbanzos",
    description: "Receta nutritiva",
    details:
      "Garbanzos cocidos y prensados como base, mezclados con especias y rellenos con pollo o atún.",
    image: causaGarbanzos,
    type: "Gastronómico",
    bestTime: "Almuerzo",
    difficulty: "Media",
  },
  {
    id: 23,
    name: "Causa Rellena de Pallares Verdes",
    description: "Fresco y tradicional",
    details:
      "Pallares verdes aplastados con ají amarillo y limón, rellenos con pollo deshilachado y verduras.",
    image: causaPallaresVerdes,
    type: "Gastronómico",
    bestTime: "Almuerzo",
    difficulty: "Media",
  },
  {
    id: 24,
    name: "Arroz con Pallares con Adobo de Chancho",
    description: "Sabroso y contundente",
    details:
      "Arroz graneado con pallares tiernos, acompañado de chancho adobado cocido lentamente en ají panca y especias.",
    image: arrozPallaresChancho,
    type: "Gastronómico",
    bestTime: "Almuerzo",
    difficulty: "Difícil",
  },
  {
    id: 25,
    name: "Carapulcra de Garbanzos y Chancho",
    description: "Sabor profundo y tradicional",
    details:
      "Carapulcra preparada con garbanzos y carne de cerdo, sazonada con ajíes secos y especias de la región.",
    image: carapulcraGarbanzos,
    type: "Gastronómico",
    bestTime: "Almuerzo",
    difficulty: "Media",
  },
  {
    id: 26,
    name: "Pollo en Salsa de Pecana",
    description: "Cremoso y elegante",
    details:
      "Pollo suave bañado en salsa espesa de pecanas molidas con leche y especias.",
    image: polloPecana,
    type: "Gastronómico",
    bestTime: "Almuerzo",
    difficulty: "Media",
  },
  {
    id: 27,
    name: "Puré de Garbanzos",
    description: "Suave y nutritivo",
    details:
      "Garbanzos cocidos y triturados con aceite de oliva, limón y especias.",
    image: pureGarbanzos,
    type: "Gastronómico",
    bestTime: "Cena",
    difficulty: "Fácil",
  },
  {
    id: 28,
    name: "Seco de Pallares con Lonja",
    description: "Sabor intenso",
    details:
      "Guiso espeso de pallares acompañado de carne de res en lonjas, con culantro y ají amarillo.",
    image: secoPallaresLonja,
    type: "Gastronómico",
    bestTime: "Almuerzo",
    difficulty: "Media",
  },
  {
    id: 29,
    name: "Crema de Garbanzos con Papa",
    description: "Calentito y casero",
    details:
      "Sopa cremosa hecha a base de garbanzos y papa amarilla, sazonada suavemente.",
    image: cremaGarbanzosPapa,
    type: "Gastronómico",
    bestTime: "Tardes",
    difficulty: "Fácil",
  },
  {
    id: 30,
    name: "Crema de Espárragos",
    description: "Ligera y saludable",
    details: "Espárragos licuados con caldo suave, crema y especias finas.",
    image: cremaEsparragos,
    type: "Gastronómico",
    bestTime: "Cena",
    difficulty: "Fácil",
  },
  {
    id: 31,
    name: "Escabeche de Garbanzos",
    description: "Tradición regional",
    details:
      "Garbanzos acompañados con escabeche de cebolla, ají y vinagre, servidos fríos.",
    image: escabecheGarbanzos,
    type: "Gastronómico",
    bestTime: "Tardes",
    difficulty: "Media",
  },
  {
    id: 32,
    name: "Sopa de Pallares Verdes",
    description: "Ligera y reconfortante",
    details: "Caldo suave con pallares verdes tiernos, hierbas y vegetales.",
    image: sopaPallaresVerdes,
    type: "Gastronómico",
    bestTime: "Noches",
    difficulty: "Fácil",
  },
  {
    id: 33,
    name: "Tamales de Garbanzos",
    description: "Hecho a mano",
    details:
      "Masa creada a base de garbanzo molido envuelta en hojas y cocida al vapor.",
    image: tamalesGarbanzos,
    type: "Gastronómico",
    bestTime: "Mañanas",
    difficulty: "Media",
  },
  {
    id: 34,
    name: "Torrejas de Garbanzos",
    description: "Crujiente y casero",
    details: "Torrejitas fritas hechas de garbanzos molidos y sazonados.",
    image: torrejitasGarbanzos,
    type: "Gastronómico",
    bestTime: "Tardes",
    difficulty: "Fácil",
  },
  {
    id: 35,
    name: "Conejo al Pisco con Crema de Garbanzos",
    description: "Platillo regional de lujo",
    details:
      "Conejo maridado con pisco, cocido lentamente y servido sobre crema suave de garbanzos.",
    image: conejoPiscoGarbanzos,
    type: "Gastronómico",
    bestTime: "Almuerzo",
    difficulty: "Difícil",
  },

  {
    id: 36,
    name: "Sopa de Cancate",
    description: "Sopa tradicional iqueña",
    details:
      "Caldo preparado con carne de gallina, cordero o res, acompañado de mote y hierbas aromáticas.",
    image: sopaCancate,
    type: "Gastronómico",
    bestTime: "Almuerzo",
    difficulty: "Intermedio",
  },
  {
    id: 37,
    name: "Adobo de Res",
    description: "Plato típico criollo",
    details:
      "Carne de res marinada en chicha de jora y especias, cocida lentamente hasta quedar suave y jugosa.",
    image: adoboRes,
    type: "Gastronómico",
    bestTime: "Almuerzo",
    difficulty: "Intermedio",
  },
  {
    id: 38,
    name: "Arroz con Pato con Carapulcra",
    description: "Fusión regional con sabor intenso",
    details:
      "Pato cocido con culantro y cerveza negra servido junto a carapulcra preparada con papa seca y ajíes.",
    image: arrozPato,
    type: "Gastronómico",
    bestTime: "Almuerzo",
    difficulty: "Difícil",
  },
  {
    id: 39,
    name: "Caldo de Gallina",
    description: "Sopa reconfortante tradicional",
    details:
      "Caldo elaborado con gallina criolla, tallarines y huevo, servido con cebolla china y limón.",
    image: caldoGallina,
    type: "Gastronómico",
    bestTime: "Desayuno",
    difficulty: "Fácil",
  },
  // ---------------- BEBIDAS ----------------

  // ---------------- POSTRES ----------------
];

export const postresData: Attraction[] = [
  {
    id: 15,
    name: "Mazamorra de Uva",
    description: "Postre tradicional del valle",
    details:
      "Preparado con uvas trituradas, especias como clavo y canela, espesado con harina.",
    image: mazamorra,
    type: "Postre Típico",
    bestTime: "Todo el año",
    difficulty: "Fácil",
  },
  {
    id: 16,
    name: "Queque de Pecana",
    description: "Bizcocho suave y tradicional",
    details:
      "Pastel esponjoso preparado con pecanas del valle y esencia aromática.",
    image: quequePecana,
    type: "Postre Típico",
    bestTime: "Tardes",
    difficulty: "Fácil",
  },
  {
    id: 17,
    name: "Tejas y Chocotejas",
    description: "Dulces representativos de Ica",
    details:
      "Dulces rellenos con manjar y pecanas o frutas, cubiertos en chocolate o glasé.",
    image: tejas,
    type: "Postre Típico",
    bestTime: "Todo el año",
    difficulty: "Media",
  },
  {
    id: 18,
    name: "Queque de Frejol",
    description: "Bizcocho dulce y sorprendente",
    details:
      "Pastel esponjoso preparado con frejoles negros cocidos y molidos, mezclados con canela y azúcar. Tradición casera de Pueblo Nuevo.",
    image: quequeFrejol,
    type: "Postre Típico",
    bestTime: "Tardes",
    difficulty: "Fácil",
  },
  {
    id: 19,
    name: "Dulce de Garbanzos",
    description: "Postre de textura suave",
    details:
      "Garbanzos cocidos y molidos con leche, azúcar y canela, cocidos hasta obtener una crema espesa y dulce.",
    image: dulceGarbanzos,
    type: "Postre Típico",
    bestTime: "Tardes",
    difficulty: "Media",
  },
  {
    id: 20,
    name: "Pie de Pecana",
    description: "Repostería fina iqueña",
    details:
      "Base crocante de masa horneada rellena con crema dulce y pecanas del valle caramelizadas.",
    image: piePecana,
    type: "Postre Típico",
    bestTime: "Todo el año",
    difficulty: "Media",
  },
  {
    id: 21,
    name: "Quituscos",
    description: "Tradición dulce del campo",
    details:
      "Pequeñas bolitas dulces hechas con harina, miel y ligeras especias. Se consumen en fiestas y reuniones familiares.",
    image: quituscos,
    type: "Postre Típico",
    bestTime: "Tardes",
    difficulty: "Fácil",
  },
];
export const bebidasData: Attraction[] = [
  {
    id: 8,
    name: "Pisco Puro",
    description: "Bebida bandera del Perú",
    details:
      "Elaborado con uvas quebranta, negra criolla o mollar. Sabor intenso y suave aroma.",
    image: piscoPuro,
    type: "Bebida Típica",
    bestTime: "Todo el año",
    difficulty: "Fácil",
  },
  {
    id: 9,
    name: "Pisco Acholado",
    description: "Mezcla equilibrada de uvas",
    details:
      "Combinación de uvas aromáticas y no aromáticas que producen un sabor armonioso.",
    image: piscoAcholado,
    type: "Bebida Típica",
    bestTime: "Todo el año",
    difficulty: "Fácil",
  },
  {
    id: 10,
    name: "Mosto Verde",
    description: "Pisco suave y fino",
    details:
      "Destilado antes de completar la fermentación, resultando en una bebida más delicada.",
    image: mostoVerde,
    type: "Bebida Típica",
    bestTime: "Todo el año",
    difficulty: "Fácil",
  },
  {
    id: 11,
    name: "Cachina",
    description: "Fermento tradicional de uva",
    details:
      "Bebida típica elaborada del jugo fermentado de uvas, en versión dulce o seca.",
    image: cachina,
    type: "Bebida Típica",
    bestTime: "Fiestas y vendimia",
    difficulty: "Fácil",
  },
  {
    id: 12,
    name: "Vino Artesanal",
    description: "Producto representativo de Ica",
    details:
      "Vino elaborado en bodegas locales, disponible en variedades tinto, blanco, dulce y espumante.",
    image: vinoArtesanal,
    type: "Bebida Típica",
    bestTime: "Todo el año",
    difficulty: "Fácil",
  },
  {
    id: 13,
    name: "Chilcano de Pisco",
    description: "Refrescante y popular",
    details:
      "Cóctel preparado con pisco, jugo de limón y soda blanca. Ideal para tardes y noches calurosas.",
    image: chilcano,
    type: "Bebida Típica",
    bestTime: "Tardes y noches",
    difficulty: "Fácil",
  },
  {
    id: 14,
    name: "Pisco Sour",
    description: "Cóctel bandera del Perú",
    details:
      "Mezcla de pisco, jugo de limón, clara de huevo y jarabe de goma, batido con hielo.",
    image: piscoSour,
    type: "Bebida Típica",
    bestTime: "Celebraciones",
    difficulty: "Media",
  },
];
