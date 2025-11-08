import { MapPin, Clock, Trophy } from "lucide-react";
import puebloNuevo from "../assets/images/PUEBLO NUEVO 4.webp";
import iglesiaCarmen1 from "../assets/images/IGLESIA VIRGEN DEL CARMEN.webp";
import museoSitio from "../assets/images/MUSEO DE SITIO.webp";
import museaTacara from "../assets/images/tacaraca.webp";
import cruzTacaraca from "../assets/images/CRUZ DE TACARACA.webp";
import cruzChulpaca from "../assets/images/CHULPACA.webp";
import cruzHuacachina from "../assets/images/CRUZ DE HUACACHINA SECA.webp";
import huacachinaSeca from "../assets/images/huacachina seca.webp";
import iglesiaEspinos from "../assets/images/IGLESIA CALLEJON DE LOS ESPINOS 2.webp";
import casonaEspinos from "../assets/images/CRUZ CALLEJON DE LOS ESPINOS.webp";
import iglesiaYajasi from "../assets/images/IGLESIA DE YAJASI.webp";
import cruzYajasi from "../assets/images/IGLESIA CALLEJON DE LOS ESPINOS CRUZ.webp";
import santisimoJuliana from "../assets/images/CRUZ DE PONGO GRANDE.webp";
import achiranaInca from "../assets/images/LA ACHIRANA DEL INCA.webp";
import cruzChibillona from "../assets/images/CRUZ DE LA CHIBILLONA.webp";
import cruzUchuya from "../assets/images/CRUZ DE LOS UCHUYA.webp";
import cruzConuca from "../assets/images/CRUZ DE CONUCA.webp";
import cruzParinaGrande from "../assets/images/CRUZ DE PARIÑA GRANDE.webp";
interface Attraction {
  id: number;
  name: string;
  description: string;
  details: string;
  image: string;
  type: string;
  bestTime: string;
  difficulty: string;
}

const attractions: Attraction[] = [
  {
    id: 1,
    name: "Plaza de Armas de Pueblo Nuevo",
    description: "Joya arquitectónica del distrito",
    details:
      "Esta plaza se caracteriza es un lugarapasible para despejarse del bullisio de laciudad, donde cuenta con 3 tachos de basura para la clasificacion de los desechos, plasticos y una pileta ornamental, en los ultimos años la plaza ha pasado por muchas remodelaciones",
    image: puebloNuevo,
    type: "Histórico-Religioso",
    bestTime: "Durante festividades",
    difficulty: "Fácil",
  },
  {
    id: 2,
    name: "Iglesia de la Virgen del carmen",
    description: "Epicentro de la vida comunitaria",
    details:
      "Esta iglesia ubicada en el Distrito de Pueblo Nuevo está situada cerca de la Plaza de Armas de Pueblo Nuevo y la Comisaría PNP Pueblo Nuevo; su festividad de la Virgen del Carmen tiene su día central el 16 de julio; la iglesia matriz está a cargo del sacerdote Walter Avalos Saravia, encargado por el obispado de Ica.",
    image: iglesiaCarmen1,
    type: "Cultural",
    bestTime: "Fines de semana",
    difficulty: "Fácil",
  },
  {
    id: 3,
    name: "Museo de Sitio Taky",
    description: "Corazón social del distrito",
    details:
      "Por el CLIII aniversario de creación política del histórico distrito de Pueblo Nuevo, Ica, se inauguró la Sala de Exposición de la Cultura, encabezada por el alcalde Hebert Gonzáles Arcos; allí se conservan restos de las culturas Nasca e Ica, como cerámicas y textilerías.",
    image: museoSitio,
    type: "Espacio Público",
    bestTime: "Cualquier hora",
    difficulty: "Fácil",
  },
  {
    id: 4,
    name: "Sitio Arqueologico de Tacaraca",
    description: "Auténtica experiencia comercial",
    details: `A 5 km aproximadamente se encuentra
ubicado a la ciudad de Ica y a 500 metros
del Km310 de la Carretera Panamericana
Sur de la entrada de Pueblo Nuevo – Ica. El
Complejo Arqueologico de Tacaraca
comprende al periodo intermedio tardío y
Horizonte tardío de la Costa Sur del Perú y
fue la capital del Asentamiento del Señorío
Ica, cuyas evidencias son las innumerables
Huacas que se encuentran en sus
alrededores.`,
    image: museaTacara,
    type: "Comercio",
    bestTime: "Mañana",
    difficulty: "Fácil",
  },
  {
    id: 5,
    name: "Cruz de Tacaraca",
    description: "Auténtica experiencia comercial",
    details: `
      Ubicada frente al sitio arqueológico de
Tacaraca, es un lugar de gran significado
religioso y cultural para los habitantes de
Pueblo Nuevo. En este lugar se realizan
anualmente misas y ceremonias, donde los
devotos de la cruz participan con gran
fervor. La cruz es considerada un símbolo de
fe y comunidad, y su veneración mantiene
vivas las tradiciones religiosas del distrito.
      `,
    image: cruzTacaraca,
    type: "Comercio",
    bestTime: "Mañana",
    difficulty: "Fácil",
  },
  {
    id: 20,
    name: "Cruz de Chulpaca",
    description: "Auténtica experiencia comercial",
    details:
      "La Cruz Misionera de Chulpaca es una de las tres cruces más altas del país, símbolo de profunda fe católica en el Distrito de Pueblo Nuevo, Ica.",
    image: cruzChulpaca,
    type: "Comercio",
    bestTime: "Mañana",
    difficulty: "Fácil",
  },
  {
    id: 7,
    name: "Cruz de Huacachina Seca",
    description: "Auténtica experiencia comercial",
    details: `La Cruz de Huacachina seca es un símbolo
religioso ubicado el caserío de Huacachina
seca donde los pobladores le rinden
homenaje cada mes de mayo y es venerado
por los pobladores del lugar.
      `,
    image: cruzHuacachina,
    type: "Comercio",
    bestTime: "Mañana",
    difficulty: "Fácil",
  },
  {
    id: 8,
    name: "Sitio Arqueológico Huacachina Seca",
    description: "Auténtica experiencia comercial",
    details: `Es un recinto arqueológico y un lugar donde
se puede explorar con toda la familia y es un
lugar tranquilo para despejarse. Hoy en día
el sitio arqueológico está en excavación
donde se encontraron restos de cerámica y
textileria perteneciente a la cultura ica`,
    image: huacachinaSeca,
    type: "Comercio",
    bestTime: "Mañana",
    difficulty: "Fácil",
  },
  {
    id: 9,
    name: "La Iglesia Callejon de los Espinos",
    description: "Auténtica experiencia comercial",
    details: `En el aspecto religioso en esta iglesia
veneran al patrón de san Antonio de padua
donde los pobladores del lugar cuentan que
algunos matrimonios se han consolidado en
el caserío gracias al patrón de san Antonio
de Padua.`,
    image: iglesiaEspinos,
    type: "Comercio",
    bestTime: "Mañana",
    difficulty: "Fácil",
  },

  {
    id: 11,
    name: "Santisimo Madero de Callejon de los Espinos",
    description: "Auténtica experiencia comercial",
    details: `El callejón de los espinos esta frente a una
antigua vivienda perteneciente a la familia
navarro desde el año de 1981 se venera esa
cruz, se venera esta cruz hasta la
actualidad.`,
    image: casonaEspinos,
    type: "Comercio",
    bestTime: "Mañana",
    difficulty: "Fácil",
  },
  {
    id: 12,
    name: "Iglesia Colonial de la Virgen del Carmen de Yajasi",
    description: "Auténtica experiencia comercial",
    details: `La iglesia colonial de yajasi esta iglesia se
construyo en honor a la santisima virgen del
carmen de yajasi cuya festividad se realiza
desde el 04 de setiembre primer dia de
festividad hasta el 22 de setiembre dia
central.`,
    image: iglesiaYajasi,
    type: "Comercio",
    bestTime: "Mañana",
    difficulty: "Fácil",
  },
  {
    id: 13,
    name: "Cruz de Yajasi",
    description: "Auténtica experiencia comercial",
    details: `Es un símbolo religioso significativo ubicado
en el caserio de yajasi donde cada año, en
los meses de mayo los fieles de la
comunidad celebran misas y rituales en su
honor, lo que fortalece la unión y la tradición
religiosa entre los devotos locales`,
    image: cruzYajasi,
    type: "Comercio",
    bestTime: "Mañana",
    difficulty: "Fácil",
  },
  {
    id: 13,
    name: `Santísimo Madero de la
Juliana de pongo
Grande`,
    description: "Auténtica experiencia comercial",
    details: `El santísimo madero de la juliana de pongo
grande tiene como principal atractivo
religioso la cruz de la juliana de pongo
grande según testimonios este madero fue
instalado en el siglo 18 por los misioneros
provenientes de Europa en el lugar
denominado pampa de los castillos
posteriormente por los años de 1945 el
predio de la pampa de los castillos fue
vendido a una firma Americana Anderson
Cleyton la cual inicia una serie de trabajos
con maquina pesada llegando al extremo
arrojar al camino real la denominada cruz
de la juliana su fiesta patronal se realiza
todos los años en el mes de mayo.`,
    image: santisimoJuliana,
    type: "Comercio",
    bestTime: "Mañana",
    difficulty: "Fácil",
  },
  {
    id: 14,
    name: `La Achirana del
Inca`,
    description: "Auténtica experiencia comercial",
    details: `Es un canal de regadío Incaico, que las
versiones legendarias le asignan 600 años
de antigüedad.
Según la leyenda, el Inca Pachacútec
ordenó su construcción como prueba del
amor que despertó en él una joven de la
localidad.`,
    image: achiranaInca,
    type: "Comercio",
    bestTime: "Mañana",
    difficulty: "Fácil",
  },
  {
    id: 15,
    name: `Cruz de la
Chibillona`,
    description: "Auténtica experiencia comercial",
    details: `Este santísimo madero antiguamente
los que provenían de las partes altas
de Ica enterraban a sus muertos en
ese lugar, cuando construyeron esta
cruz al remover la arena se
encontraron restos principalmente de
niños enterrados. Hoy en día la familia
Altamirano muy cerca de su predio
cuida este madero.`,
    image: cruzChibillona,
    type: "Comercio",
    bestTime: "Mañana",
    difficulty: "Fácil",
  },

  {
    id: 17,
    name: `Cruz de los
Uchuya`,
    description: "Auténtica experiencia comercial",
    details: `La cruz de los Uchuya se colocó
por parte de la municipalidad
distrital de pueblo nuevo siendo
como alcalde en ese entonces el
exalcalde de la municipalidad
distrital de pueblo nuevo Fredy
Condori flores un 20 de mayo del
2001 donde este madero se
caracteriza por tener dos cruces
uno grande y uno pequeño, en su
día central de celebración del
caserío se realiza la danza de los
pastorcillos (atajo de negritos).`,
    image: cruzUchuya,
    type: "Comercio",
    bestTime: "Mañana",
    difficulty: "Fácil",
  },
  {
    id: 18,
    name: `Cruz de Conuca`,
    description: "Auténtica experiencia comercial",
    details: `La veneración de la Santísima Cruz
de Conuca comenzó en 1930,
organizada por devotos de la
comunidad tras un terremoto que
formó el morro alto donde se
establecieron los primeros
habitantes. La cruz se venera en el
atrio, construido de material noble,
con bancos y un espacio para misa.
La última mayordomía se celebró
en 2010, continuando una tradición
que ha perdurado con el apoyo de
los residentes del distrito de Pueblo
Nuevo.`,
    image: cruzConuca,
    type: "Comercio",
    bestTime: "Mañana",
    difficulty: "Fácil",
  },
  {
    id: 17,
    name: `Cruz de Pariña
Grande`,
    description: "Auténtica experiencia comercial",
    details: `La cruz de pariña grande es un
simbolo religioso ubicado en el
caserio de pariña grande
donde los pobladores le rinden
homenaje en el mes de mayo
igual como las demás
maderos hay cada
mayordomo por familia asume
el cargo.`,
    image: cruzParinaGrande,
    type: "Comercio",
    bestTime: "Mañana",
    difficulty: "Fácil",
  },
];

export default function AttractionDetails() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <div className="inline-block mb-4">
          <span className="bg-teal-100 text-teal-600 px-6 py-3 rounded-full text-sm font-semibold tracking-wide">
            Lugares destacados
          </span>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Atractivos Turísticos
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Cada lugar cuenta una historia única. Descubre los espacios que hacen
          de Pueblo Nuevo un destino imprescindible para visitantes y locales.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {attractions.map((attraction) => (
          <div
            key={attraction.id}
            className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative h-80 overflow-hidden">
              <img
                src={attraction.image}
                alt={attraction.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* <div className="absolute top-4 right-4 bg-orange-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-semibold">
                {attraction.type}
              </div> */}

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-2xl leading-tight mb-2 group-hover:text-orange-300 transition-colors">
                  {attraction.name}
                </h3>
                {/* <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                  {attraction.description}
                </p> */}
              </div>
            </div>

            <div className="relative bg-white p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                {attraction.details}
              </p>

              {/* <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 group-hover:from-teal-100 group-hover:to-teal-200 transition-all duration-300">
                  <Clock className="w-5 h-5 text-teal-600 mb-2" />
                  <p className="text-xs text-teal-600 font-semibold block text-uppercase">
                    Mejor hora
                  </p>
                  <p className="text-sm font-bold text-gray-900 mt-1">
                    {attraction.bestTime}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 group-hover:from-orange-100 group-hover:to-orange-200 transition-all duration-300">
                  <Trophy className="w-5 h-5 text-orange-600 mb-2" />
                  <p className="text-xs text-orange-600 font-semibold block text-uppercase">
                    Dificultad
                  </p>
                  <p className="text-sm font-bold text-gray-900 mt-1">
                    {attraction.difficulty}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 group-hover:from-green-100 group-hover:to-green-200 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-green-600 mb-2" />
                  <p className="text-xs text-green-600 font-semibold block text-uppercase">
                    Ubicación
                  </p>
                  <p className="text-sm font-bold text-gray-900 mt-1">
                    Pueblo Nuevo
                  </p>
                </div>
              </div> */}

              {/* <button className="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95">
                Explorar Ahora
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
