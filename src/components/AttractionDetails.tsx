import { MapPin, Clock, Trophy } from "lucide-react";

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
    image:
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
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
    image:
      "https://images.pexels.com/photos/356230/pexels-photo-356230.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
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
    image:
      "https://images.pexels.com/photos/416676/pexels-photo-416676.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
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
    image:
      "https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
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
    image:
      "https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    type: "Comercio",
    bestTime: "Mañana",
    difficulty: "Fácil",
  },
  {
    id: 4,
    name: "Cruz de Chulpaca",
    description: "Auténtica experiencia comercial",
    details:
      "La Cruz Misionera de Chulpaca es una de las tres cruces más altas del país, símbolo de profunda fe católica en el Distrito de Pueblo Nuevo, Ica.",
    image:
      "https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
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
    image:
      "https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
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
    image:
      "https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
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
    image:
      "https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    type: "Comercio",
    bestTime: "Mañana",
    difficulty: "Fácil",
  },
  {
    id: 10,
    name: "Casona Colonial de Callejon de los Espinos",
    description: "Auténtica experiencia comercial",
    details: `Se puede apreciar una antigua casona de
tipo colonial su infraestructura original
patrimonio arqueológico y cultural
considerado por parte de los habitantes del
caserío.`,
    image:
      "https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
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
    image:
      "https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    type: "Comercio",
    bestTime: "Mañana",
    difficulty: "Fácil",
  },
  {
    id: 8,
    name: "Iglesia Colonial de la Virgen del Carmen de Yajasi",
    description: "Auténtica experiencia comercial",
    details: `La iglesia colonial de yajasi esta iglesia se
construyo en honor a la santisima virgen del
carmen de yajasi cuya festividad se realiza
desde el 04 de setiembre primer dia de
festividad hasta el 22 de setiembre dia
central.`,
    image:
      "https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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

              <div className="absolute top-4 right-4 bg-orange-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-xs font-semibold">
                {attraction.type}
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-2xl leading-tight mb-2 group-hover:text-orange-300 transition-colors">
                  {attraction.name}
                </h3>
                <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                  {attraction.description}
                </p>
              </div>
            </div>

            <div className="relative bg-white p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                {attraction.details}
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6">
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
              </div>

              <button className="w-full bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95">
                Explorar Ahora
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-teal-600 to-teal-500 rounded-3xl p-12 text-white text-center">
        <h3 className="text-4xl font-bold mb-4">Descubre más lugares</h3>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Hay mucho más que explorar en Pueblo Nuevo. Cada rincón tiene una
          historia que contar.
        </p>
        <button className="bg-white text-teal-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-300">
          Ver Mapa Interactivo
        </button>
      </div>
    </section>
  );
}
