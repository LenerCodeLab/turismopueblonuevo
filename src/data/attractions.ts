export interface Attraction {
  id: number;
  name: string;
  category: string;
  description: string;
  coordinates: [number, number];
  images?: string[];
  details: string;
}
import iglesiaYajasi from "../assets/images/IGLESIA DE YAJASI.webp";
import puebloNuevo from "../assets/images/PUEBLO NUEVO 2.webp";
import puebloNuevo2 from "../assets/images/PUEBLO NUEVO 3.webp";
import puebloNuevo3 from "../assets/images/PUEBLO NUEVO 4.webp";
export const attractions: Attraction[] = [
  {
    id: 1,
    name: "Hospedaje El Mangual",
    category: "Alojamiento",
    description: "Hospedaje en un ambiente natural",
    coordinates: [-14.116911, -75.712835],

    details: "Un lugar tranquilo rodeado de naturaleza, ideal para descanso.",
  },
  {
    id: 2,
    name: "La Casona de Don Paulo",
    category: "Alojamiento",
    description: "Hotel con arquitectura colonial",
    coordinates: [-14.116771, -75.716829],

    details: "Hotel clásico con un estilo colonial, muy acogedor.",
  },
  {
    id: 3,
    name: "Hostal El Parral",
    category: "Alojamiento",
    description: "Hostal económico en el corazón de la ciudad",
    coordinates: [-14.120102, -75.706366],

    details: "Ideal para estancias cortas y cómodas a buen precio.",
  },
  {
    id: 4,
    name: "Hospedaje Wolf House",
    category: "Alojamiento",
    description: "Hospedaje rural con un ambiente familiar",
    coordinates: [-14.120369, -75.707645],

    details: "Un ambiente familiar en un entorno natural tranquilo.",
  },
  {
    id: 5,
    name: "Hotel Casa Hacienda El Pajonal",
    category: "Alojamiento",
    description: "Hotel en un entorno rural y natural",
    coordinates: [-14.11874, -75.708032],
    details: "Perfecto para quienes buscan descansar en plena naturaleza.",
  },
  {
    id: 6,
    name: "Hostal Las Delicias del Paraíso",
    category: "Alojamiento",
    description: "Hostal en una ubicación estratégica",
    coordinates: [-14.120375, -75.706469],
    details: "Alojamiento accesible y cómodo, rodeado de naturaleza.",
  },
  {
    id: 7,
    name: "El Batan de Juanita",
    category: "Atractivo turístico",
    description: "Lugar turístico tradicional de la región",
    coordinates: [-14.130406, -75.709038],
    details: "Un sitio con historia, perfecto para explorar lo tradicional.",
  },
  {
    id: 8,
    name: "La Fortaleza de Aurorita",
    category: "Atractivo turístico",
    description: "Sitio arqueológico histórico",
    coordinates: [-14.131995, -75.70814],
    details: "Restos de fortificaciones antiguas con una vista impresionante.",
  },
  {
    id: 9,
    name: "Fortaleza de Aurorita",
    category: "Atractivo turístico",
    description: "Antiguas ruinas de una fortaleza",
    coordinates: [-14.131971, -75.707542],
    details:
      "Las ruinas de esta fortaleza ofrecen un vistazo al pasado histórico.",
  },
  {
    id: 10,
    name: "Restaurante Tierra Verde - Ica",
    category: "Restaurante",
    description: "Comida típica de la región de Ica",
    coordinates: [-14.121276, -75.703778],

    details: "Restaurante con una excelente variedad de platos típicos.",
  },
  {
    id: 11,
    name: "Viña Jazmín - Centro de Esparcimiento Campestre",
    category: "Atractivo turístico",
    description: "Viñedo y centro de esparcimiento",
    coordinates: [-14.135071, -75.691203],

    details:
      "Centro de esparcimiento con viñedos, ideal para pasar un día relajante.",
  },
  {
    id: 12,
    name: "Bodega Don Benjamín",
    category: "Atractivo turístico",
    description: "Viñedo y bodega tradicional",
    coordinates: [-14.135677, -75.693016],

    details: "Visita a una bodega tradicional donde se elabora el pisco local.",
  },
  {
    id: 13,
    name: "Restaurant - MariaRosa",
    category: "Restaurante",
    description: "Comida peruana de alta calidad",
    coordinates: [-14.138849, -75.706923],

    details: "Restaurante con una selección de platos autóctonos.",
  },
  {
    id: 14,
    name: "La Pichanga Restaurante",
    category: "Restaurante",
    description: "Restaurante familiar y acogedor",
    coordinates: [-14.136476, -75.691942],

    details:
      "Ideal para disfrutar de la gastronomía local en un ambiente familiar.",
  },
  {
    id: 15,
    name: "Restaurante Silvana",
    category: "Restaurante",
    description: "Restaurante con comida casera",
    coordinates: [-14.116313, -75.716901],

    details: "Un lugar acogedor para disfrutar de platos caseros y locales.",
  },
  {
    id: 16,
    name: "Restaurant Corina",
    category: "Restaurante",
    description: "Comida típica con ambiente tranquilo",
    coordinates: [-14.11557, -75.717277],

    details:
      "Un restaurante ideal para disfrutar de platos locales y tradicionales.",
  },
  {
    id: 17,
    name: "Plaza de Armas del Distrito de Pueblo Nuevo",
    category: "Plaza Principal",
    description: "Centro histórico de Pueblo Nuevo",
    coordinates: [-14.12706, -75.705899],
    images: [puebloNuevo, puebloNuevo2, puebloNuevo3],
    details: "Lugar central de la ciudad, rodeado de edificaciones coloniales.",
  },
  {
    id: 18,
    name: "Iglesia de la Virgen del Carmen",
    category: "Patrimonio religioso",
    description: "Iglesia histórica de Pueblo Nuevo",
    coordinates: [-14.12719, -75.705681],
    details: "Una iglesia con una rica historia religiosa y arquitectónica.",
  },
  {
    id: 19,
    name: "Museo de Sitio Taky",
    category: "Cultura e historia",
    description: "Museo arqueológico de la región",
    coordinates: [-14.127499, -75.705891],
    details: "Un museo que muestra el pasado cultural e histórico de Ica.",
  },
  {
    id: 20,
    name: "Cruz de Chulpaca",
    category: "Atractivo turístico",
    description: "Monumento religioso en el campo",
    coordinates: [-14.131054, -75.708937],
    details:
      "Cruz ubicada en un entorno natural, ideal para caminar y reflexionar.",
  },
  {
    id: 21,
    name: "Centro Arqueológico de Tacaraca",
    category: "Atractivo turístico",
    description: "Sitio arqueológico ancestral",
    coordinates: [-14.129828, -75.711826],
    details:
      "Un importante sitio arqueológico para los interesados en las culturas preincaicas.",
  },
  {
    id: 22,
    name: "Cruz de Huacachina Seca",
    category: "Atractivo turístico",
    description: "Monumento emblemático de la región",
    coordinates: [-14.137964, -75.708074],
    details:
      "Cruz localizada en el desierto, con una vista impresionante del paisaje.",
  },
  {
    id: 23,
    name: "Sitio Arqueológico de Soniche - Huacachina Seca",
    category: "Atractivo turístico",
    description: "Sitio arqueológico preincaico",
    coordinates: [-14.138019, -75.713721],
    details:
      "Un sitio arqueológico que ofrece un vistazo a las antiguas culturas que habitaron la región.",
  },
  {
    id: 24,
    name: "Cruz de Bellavista",
    category: "Atractivo turístico",
    description: "Monumento histórico",
    coordinates: [-14.128917, -75.711494],
    details:
      "Una cruz que se erige como símbolo de la región, ofreciendo una vista panorámica del área.",
  },
  {
    id: 25,
    name: "Iglesia del Callejón de los Espinos",
    category: "Patrimonio religioso",
    description: "Iglesia tradicional en la región",
    coordinates: [-14.134979, -75.699987],
    details:
      "Iglesia ubicada en el corazón de la comunidad, famosa por su arquitectura colonial.",
  },
  {
    id: 26,
    name: "Santísimo Madero del Callejón de los Espinos",
    category: "Patrimonio religioso",
    description: "Monumento religioso en el Callejón de los Espinos",
    coordinates: [-14.134895, -75.701491],
    details:
      "Un lugar de veneración popular, conocido por su devoción en la región.",
  },
  {
    id: 27,
    name: "Cruz de Chaype",
    category: "Atractivo turístico",
    description: "Cruz ubicada en una zona rural",
    coordinates: [-14.134367, -75.69484],
    details:
      "Monumento religioso en una zona de difícil acceso, ideal para quienes disfrutan del turismo rural.",
  },
  {
    id: 28,
    name: "Iglesia Colonial de la Virgen del Carmen de Yajasi",
    category: "Patrimonio religioso",
    description: "Iglesia colonial con rica historia religiosa",
    coordinates: [-14.13638, -75.691892],
    images: [iglesiaYajasi],
    details:
      "Iglesia que data del periodo colonial, famosa por su arquitectura y su importancia histórica.",
  },
  {
    id: 29,
    name: "Santísimo Madero de la Juliana de Pongo Grande",
    category: "Patrimonio religioso",
    description: "Monumento religioso en Pongo Grande",
    coordinates: [-14.117448, -75.700394],
    details:
      "Un sitio de peregrinación importante para los habitantes de la zona.",
  },
  {
    id: 30,
    name: "La Achirana del Inca",
    category: "Atractivo turístico",
    description: "Zona arqueológica ancestral",
    coordinates: [-14.123372, -75.689517],
    details:
      "Un antiguo canal preincaico, importante para la historia hidráulica de la región.",
  },
  {
    id: 31,
    name: "Cruz de la Chivillona",
    category: "Atractivo turístico",
    description: "Monumento religioso en una zona elevada",
    coordinates: [-14.115289, -75.686139],
    details:
      "Cruz ubicada en un lugar estratégico, conocida por su gran simbolismo religioso.",
  },
  {
    id: 32,
    name: "Cruz de los Uchuya",
    category: "Atractivo turístico",
    description: "Cruz histórica y símbolo religioso",
    coordinates: [-14.118134, -75.689686],
    details:
      "Un monumento religioso con una vista impresionante de la región circundante.",
  },
  {
    id: 33,
    name: "Iglesia Colonial Virgen del Carmen de Pongo Chico",
    category: "Patrimonio religioso",
    description: "Iglesia colonial de gran importancia histórica",
    coordinates: [-14.119609, -75.694688],
    details:
      "Una iglesia colonial que refleja la herencia religiosa y arquitectónica de la región.",
  },
  {
    id: 34,
    name: "La Iglesia de Pongo los Zegarra",
    category: "Patrimonio religioso",
    description: "Iglesia histórica en Pongo los Zegarra",
    coordinates: [-14.116914, -75.69413],
    details:
      "Iglesia con un largo historial de culto y un gran valor patrimonial.",
  },
  {
    id: 35,
    name: "Cruz de Pariña Grande",
    category: "Atractivo turístico",
    description: "Monumento tradicional y símbolo religioso",
    coordinates: [-14.110133, -75.702682],
    details:
      "Cruz en una localidad pintoresca, ideal para quienes disfrutan de la tranquilidad del campo.",
  },
  {
    id: 36,
    name: "Iglesia de Pariña Grande",
    category: "Patrimonio religioso",
    description: "Iglesia histórica en Pariña Grande",
    coordinates: [-14.108063, -75.702392],
    details: "Una iglesia local de gran valor arquitectónico e histórico.",
  },
  {
    id: 37,
    name: "Iglesia de San Rafael de Aguaguana",
    category: "Patrimonio religioso",
    description: "Iglesia tradicional en la región",
    coordinates: [-14.115132, -75.717052],
    details: "Un sitio religioso tradicionalmente importante en Aguaguana.",
  },
  {
    id: 38,
    name: "Cruz de Conuca",
    category: "Atractivo turístico",
    description: "Monumento religioso de la región",
    coordinates: [-14.117706, -75.702355],
    details:
      "Cruz ubicada en una región rural, famosa por sus vistas y su simbolismo.",
  },
  {
    id: 39,
    name: "Entrada al Distrito de Pueblo Nuevo",
    category: "Atractivo turístico",
    description: "Entrada histórica a Pueblo Nuevo",
    coordinates: [-14.128727, -75.716268],
    details:
      "La entrada principal a Pueblo Nuevo, un lugar de gran significancia cultural y histórica.",
  },
];
