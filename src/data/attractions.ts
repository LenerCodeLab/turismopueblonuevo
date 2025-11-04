export interface Attraction {
  id: number;
  name: string;
  category: string;
  description: string;
  coordinates: [number, number];
  images: string[];
  details: string;
}

export const attractions: Attraction[] = [
  {
    id: 1,
    name: "Hospedaje El Mangual",
    category: "Alojamiento",
    description: "Hospedaje en un ambiente natural",
    coordinates: [-14.116911, -75.712835],
    images: ["https://example.com/image1.jpg"],
    details: "Un lugar tranquilo rodeado de naturaleza, ideal para descanso."
  },
  {
    id: 2,
    name: "La Casona de Don Paulo",
    category: "Alojamiento",
    description: "Hotel con arquitectura colonial",
    coordinates: [-14.116771, -75.716829],
    images: ["https://example.com/image2.jpg"],
    details: "Hotel clásico con un estilo colonial, muy acogedor."
  },
  {
    id: 3,
    name: "Hostal El Parral",
    category: "Alojamiento",
    description: "Hostal económico en el corazón de la ciudad",
    coordinates: [-14.120102, -75.706366],
    images: ["https://example.com/image3.jpg"],
    details: "Ideal para estancias cortas y cómodas a buen precio."
  },
  {
    id: 4,
    name: "Hospedaje Wolf House",
    category: "Alojamiento",
    description: "Hospedaje rural con un ambiente familiar",
    coordinates: [-14.120369, -75.707645],
    images: ["https://example.com/image4.jpg"],
    details: "Un ambiente familiar en un entorno natural tranquilo."
  },
  {
    id: 5,
    name: "Hotel Casa Hacienda El Pajonal",
    category: "Alojamiento",
    description: "Hotel en un entorno rural y natural",
    coordinates: [-14.11874, -75.708032],
    images: ["https://example.com/image5.jpg"],
    details: "Perfecto para quienes buscan descansar en plena naturaleza."
  },
  {
    id: 6,
    name: "Hostal Las Delicias del Paraíso",
    category: "Alojamiento",
    description: "Hostal en una ubicación estratégica",
    coordinates: [-14.120375, -75.706469],
    images: ["https://example.com/image6.jpg"],
    details: "Alojamiento accesible y cómodo, rodeado de naturaleza."
  },
  {
    id: 7,
    name: "El Batan de Juanita",
    category: "Atractivo turístico",
    description: "Lugar turístico tradicional de la región",
    coordinates: [-14.130406, -75.709038],
    images: ["https://example.com/image7.jpg"],
    details: "Un sitio con historia, perfecto para explorar lo tradicional."
  },
  {
    id: 8,
    name: "La Fortaleza de Aurorita",
    category: "Atractivo turístico",
    description: "Sitio arqueológico histórico",
    coordinates: [-14.131995, -75.70814],
    images: ["https://example.com/image8.jpg"],
    details: "Restos de fortificaciones antiguas con una vista impresionante."
  },
  {
    id: 9,
    name: "Fortaleza de Aurorita",
    category: "Atractivo turístico",
    description: "Antiguas ruinas de una fortaleza",
    coordinates: [-14.131971, -75.707542],
    images: ["https://example.com/image9.jpg"],
    details: "Las ruinas de esta fortaleza ofrecen un vistazo al pasado histórico."
  },
  {
    id: 10,
    name: "Restaurante Tierra Verde - Ica",
    category: "Restaurante",
    description: "Comida típica de la región de Ica",
    coordinates: [-14.121276, -75.703778],
    images: ["https://example.com/image10.jpg"],
    details: "Restaurante con una excelente variedad de platos típicos."
  },
  {
    id: 11,
    name: "Viña Jazmín - Centro de Esparcimiento Campestre",
    category: "Atractivo turístico",
    description: "Viñedo y centro de esparcimiento",
    coordinates: [-14.135071, -75.691203],
    images: ["https://example.com/image11.jpg"],
    details: "Centro de esparcimiento con viñedos, ideal para pasar un día relajante."
  },
  {
    id: 12,
    name: "Bodega Don Benjamín",
    category: "Atractivo turístico",
    description: "Viñedo y bodega tradicional",
    coordinates: [-14.135677, -75.693016],
    images: ["https://example.com/image12.jpg"],
    details: "Visita a una bodega tradicional donde se elabora el pisco local."
  },
  {
    id: 13,
    name: "Restaurant - MariaRosa",
    category: "Restaurante",
    description: "Comida peruana de alta calidad",
    coordinates: [-14.138849, -75.706923],
    images: ["https://example.com/image13.jpg"],
    details: "Restaurante con una selección de platos autóctonos."
  },
  {
    id: 14,
    name: "La Pichanga Restaurante",
    category: "Restaurante",
    description: "Restaurante familiar y acogedor",
    coordinates: [-14.136476, -75.691942],
    images: ["https://example.com/image14.jpg"],
    details: "Ideal para disfrutar de la gastronomía local en un ambiente familiar."
  },
  {
    id: 15,
    name: "Restaurante Silvana",
    category: "Restaurante",
    description: "Restaurante con comida casera",
    coordinates: [-14.116313, -75.716901],
    images: ["https://example.com/image15.jpg"],
    details: "Un lugar acogedor para disfrutar de platos caseros y locales."
  },
  {
    id: 16,
    name: "Restaurant Corina",
    category: "Restaurante",
    description: "Comida típica con ambiente tranquilo",
    coordinates: [-14.11557, -75.717277],
    images: ["https://example.com/image16.jpg"],
    details: "Un restaurante ideal para disfrutar de platos locales y tradicionales."
  },
  {
    id: 17,
    name: "Plaza de Armas del Distrito de Pueblo Nuevo",
    category: "Plaza Principal",
    description: "Centro histórico de Pueblo Nuevo",
    coordinates: [-14.12706, -75.705899],
    images: ["https://example.com/image17.jpg"],
    details: "Lugar central de la ciudad, rodeado de edificaciones coloniales."
  },
  {
    id: 18,
    name: "Iglesia de la Virgen del Carmen",
    category: "Patrimonio religioso",
    description: "Iglesia histórica de Pueblo Nuevo",
    coordinates: [-14.12719, -75.705681],
    images: ["https://example.com/image18.jpg"],
    details: "Una iglesia con una rica historia religiosa y arquitectónica."
  },
  {
    id: 19,
    name: "Museo de Sitio Taky",
    category: "Cultura e historia",
    description: "Museo arqueológico de la región",
    coordinates: [-14.127499, -75.705891],
    images: ["https://example.com/image19.jpg"],
    details: "Un museo que muestra el pasado cultural e histórico de Ica."
  },
  {
    id: 20,
    name: "Cruz de Chulpaca",
    category: "Atractivo turístico",
    description: "Monumento religioso en el campo",
    coordinates: [-14.131054, -75.708937],
    images: ["https://example.com/image20.jpg"],
    details: "Cruz ubicada en un entorno natural, ideal para caminar y reflexionar."
  },
  {
    id: 21,
    name: "Centro Arqueológico de Tacaraca",
    category: "Atractivo turístico",
    description: "Sitio arqueológico ancestral",
    coordinates: [-14.129828, -75.711826],
    images: ["https://example.com/image21.jpg"],
    details: "Un importante sitio arqueológico para los interesados en las culturas preincaicas."
  },
  {
    id: 22,
    name: "Cruz de Huacachina Seca",
    category: "Atractivo turístico",
    description: "Monumento emblemático de la región",
    coordinates: [-14.137964, -75.708074],
    images: ["https://example.com/image22.jpg"],
    details: "Cruz localizada en el desierto, con una vista impresionante del paisaje."
  },
  {
    id: 23,
    name: "Sitio Arqueológico de Soniche - Huacachina Seca",
    category: "Atractivo turístico",
    description: "Sitio arqueológico preincaico",
    coordinates: [-14.138019, -75.713721],
    images: ["https://example.com/image23.jpg"],
    details: "Un sitio arqueológico que ofrece un vistazo a las antiguas culturas que habitaron la región."
  },
  {
    id: 24,
    name: "Cruz de Bellavista",
    category: "Atractivo turístico",
    description: "Monumento histórico",
    coordinates: [-14.128917, -75.711494],
    images: ["https://example.com/image24.jpg"],
    details: "Una cruz que se erige como símbolo de la región, ofreciendo una vista panorámica del área."
  },
  {
    id: 25,
    name: "Iglesia del Callejón de los Espinos",
    category: "Patrimonio religioso",
    description: "Iglesia tradicional en la región",
    coordinates: [-14.134979, -75.699987],
    images: ["https://example.com/image25.jpg"],
    details: "Iglesia ubicada en el corazón de la comunidad, famosa por su arquitectura colonial."
  },
  {
    id: 26,
    name: "Santísimo Madero del Callejón de los Espinos",
    category: "Patrimonio religioso",
    description: "Monumento religioso en el Callejón de los Espinos",
    coordinates: [-14.134895, -75.701491],
    images: ["https://example.com/image26.jpg"],
    details: "Un lugar de veneración popular, conocido por su devoción en la región."
  },
  {
    id: 27,
    name: "Cruz de Chaype",
    category: "Atractivo turístico",
    description: "Cruz ubicada en una zona rural",
    coordinates: [-14.134367, -75.69484],
    images: ["https://example.com/image27.jpg"],
    details: "Monumento religioso en una zona de difícil acceso, ideal para quienes disfrutan del turismo rural."
  },
  {
    id: 28,
    name: "Iglesia Colonial de la Virgen del Carmen de Yajasi",
    category: "Patrimonio religioso",
    description: "Iglesia colonial con rica historia religiosa",
    coordinates: [-14.13638, -75.691892],
    images: ["https://example.com/image28.jpg"],
    details: "Iglesia que data del periodo colonial, famosa por su arquitectura y su importancia histórica."
  },
  {
    id: 29,
    name: "Santísimo Madero de la Juliana de Pongo Grande",
    category: "Patrimonio religioso",
    description: "Monumento religioso en Pongo Grande",
    coordinates: [-14.117448, -75.700394],
    images: ["https://example.com/image29.jpg"],
    details: "Un sitio de peregrinación importante para los habitantes de la zona."
  },
  {
    id: 30,
    name: "La Achirana del Inca",
    category: "Atractivo turístico",
    description: "Zona arqueológica ancestral",
    coordinates: [-14.123372, -75.689517],
    images: ["https://example.com/image30.jpg"],
    details: "Un antiguo canal preincaico, importante para la historia hidráulica de la región."
  },
  {
    id: 31,
    name: "Cruz de la Chivillona",
    category: "Atractivo turístico",
    description: "Monumento religioso en una zona elevada",
    coordinates: [-14.115289, -75.686139],
    images: ["https://example.com/image31.jpg"],
    details: "Cruz ubicada en un lugar estratégico, conocida por su gran simbolismo religioso."
  },
  {
    id: 32,
    name: "Cruz de los Uchuya",
    category: "Atractivo turístico",
    description: "Cruz histórica y símbolo religioso",
    coordinates: [-14.118134, -75.689686],
    images: ["https://example.com/image32.jpg"],
    details: "Un monumento religioso con una vista impresionante de la región circundante."
  },
  {
    id: 33,
    name: "Iglesia Colonial Virgen del Carmen de Pongo Chico",
    category: "Patrimonio religioso",
    description: "Iglesia colonial de gran importancia histórica",
    coordinates: [-14.119609, -75.694688],
    images: ["https://example.com/image33.jpg"],
    details: "Una iglesia colonial que refleja la herencia religiosa y arquitectónica de la región."
  },
  {
    id: 34,
    name: "La Iglesia de Pongo los Zegarra",
    category: "Patrimonio religioso",
    description: "Iglesia histórica en Pongo los Zegarra",
    coordinates: [-14.116914, -75.69413],
    images: ["https://example.com/image34.jpg"],
    details: "Iglesia con un largo historial de culto y un gran valor patrimonial."
  },
  {
    id: 35,
    name: "Cruz de Pariña Grande",
    category: "Atractivo turístico",
    description: "Monumento tradicional y símbolo religioso",
    coordinates: [-14.110133, -75.702682],
    images: ["https://example.com/image35.jpg"],
    details: "Cruz en una localidad pintoresca, ideal para quienes disfrutan de la tranquilidad del campo."
  },
  {
    id: 36,
    name: "Iglesia de Pariña Grande",
    category: "Patrimonio religioso",
    description: "Iglesia histórica en Pariña Grande",
    coordinates: [-14.108063, -75.702392],
    images: ["https://example.com/image36.jpg"],
    details: "Una iglesia local de gran valor arquitectónico e histórico."
  },
  {
    id: 37,
    name: "Iglesia de San Rafael de Aguaguana",
    category: "Patrimonio religioso",
    description: "Iglesia tradicional en la región",
    coordinates: [-14.115132, -75.717052],
    images: ["https://example.com/image37.jpg"],
    details: "Un sitio religioso tradicionalmente importante en Aguaguana."
  },
  {
    id: 38,
    name: "Cruz de Conuca",
    category: "Atractivo turístico",
    description: "Monumento religioso de la región",
    coordinates: [-14.117706, -75.702355],
    images: ["https://example.com/image38.jpg"],
    details: "Cruz ubicada en una región rural, famosa por sus vistas y su simbolismo."
  },
  {
    id: 39,
    name: "Entrada al Distrito de Pueblo Nuevo",
    category: "Atractivo turístico",
    description: "Entrada histórica a Pueblo Nuevo",
    coordinates: [-14.128727, -75.716268],
    images: ["https://example.com/image39.jpg"],
    details: "La entrada principal a Pueblo Nuevo, un lugar de gran significancia cultural y histórica."
  }
];