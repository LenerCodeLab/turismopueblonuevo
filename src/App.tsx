import { useState } from "react";
import { Hero } from "./components/Hero";
import { InteractiveMap } from "./components/InteractiveMap";
import { LocationModal } from "./components/LocationModal";

import {
  Camera,
  Loader2,
  MapPin,
  Mountain,
  Star,
  Users,
  Wine,
} from "lucide-react";
import Map from "./components/Mapa";
import { attractions, type Attraction } from "./data/attractions";
import AttractionModal from "./components/AttractionModal";
import Calendar from "./components/Calendar";
import AttractionDetails from "./components/AttractionDetails";

function App() {
  const [locations, setLocations] = useState<any[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedAttraction, setSelectedAttraction] =
    useState<Attraction | null>(null);
  const handleMarkerClick = (attraction: Attraction) => {
    console.log("Attraction clicked:", attraction);
    setSelectedAttraction(attraction);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-orange-400/20 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                Circuito Turístico: Pueblo Nuevo
              </span>
            </div>

            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              Explora el Corazón Cultural de{" "}
              <span className="text-teal-600">Pueblo Nuevo</span>
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Ubicado en el corazón del fértil valle de Ica, el distrito de
              Pueblo Nuevo ofrece una experiencia única para los visitantes que
              deseen explorar su historia, cultura y paisajes naturales. En este
              circuito, descubrirás la riqueza de sus campos agrícolas, las
              encantadoras plazas y su arquitectura tradicional, todo ello
              envuelto en el cálido clima del desierto costero. Este recorrido
              es ideal para quienes buscan una escapada tranquila con vistas
              impresionantes y un contacto cercano con la cultura local.
            </p>

            {/* <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex gap-3 items-start">
                <div className="bg-teal-100 rounded-lg p-3 mt-1">
                  <MapPin className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">8+ Lugares</h3>
                  <p className="text-gray-600 text-sm">Increíbles destinos</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="bg-teal-100 rounded-lg p-3 mt-1">
                  <Camera className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Patrimonio</h3>
                  <p className="text-gray-600 text-sm">Cultural y natural</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="bg-teal-100 rounded-lg p-3 mt-1">
                  <Users className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Experiencias</h3>
                  <p className="text-gray-600 text-sm">Para toda la familia</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="bg-teal-100 rounded-lg p-3 mt-1">
                  <Star className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Calidad</h3>
                  <p className="text-gray-600 text-sm">Servicio garantizado</p>
                </div>
              </div>
            </div> */}
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src="https://img.mitula.com/eyJidWNrZXQiOiJwcmQtbGlmdWxsY29ubmVjdC1iYWNrZW5kLWIyYi1pbWFnZXMiLCJrZXkiOiJwcm9wZXJ0aWVzLzAxOTYxNmM5LWUwYzUtNzQ0Ny04OGU4LWUzZjg4YmQ1MWQ3ZC8wMTk2MWM5ZS1jYmM0LTczZmEtYTNkYS1jYzZjNTQ0MjA0MjguanBnIiwiYnJhbmQiOiJtaXR1bGEiLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJ3aWR0aCI6MzgwLCJoZWlnaHQiOjIzMCwiZml0IjoiY292ZXIifX19"
              alt="Circuito Turístico Pueblo Nuevo"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-6">
              <p className="text-white font-semibold text-lg">
                Descubre nuestros destinos
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-teal-600">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Información Turística
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Ubicación</h3>
            <p className="text-gray-600">
              Distrito de Pueblo Nuevo, Provincia de ica, Región Ica
            </p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wine className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              Especialidad
            </h3>
            <p className="text-gray-600">
              Producción de pisco y vino de alta calidad, tradición vitivinícola
            </p>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mountain className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Clima</h3>
            <p className="text-gray-600">
              Clima cálido y seco ideal para visitas durante todo el año
            </p>
          </div>
        </div>
      </section>
  <AttractionDetails/>
      <section id="map-section" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explora el Mapa Interactivo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Haz clic en cualquier marcador para descubrir información
              detallada sobre cada lugar
            </p>
          </div>

          {/* {loading ? (
            <div className="flex items-center justify-center h-96">
              <Loader2 className="w-12 h-12 text-teal-600 animate-spin" />
            </div>
          ) : (
            <InteractiveMap
              locations={locations}
              onLocationClick={setSelectedLocation}
            />
          )} */}

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.slice(0, 4).map((location) => (
              <div
                key={location.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105"
                onClick={() => setSelectedLocation(location)}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={location.image_url}
                    alt={location.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-2">
                    {location.name}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {location.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LocationModal
        location={selectedLocation}
        onClose={() => setSelectedLocation(null)}
      />
      <Map attractions={attractions} onMarkerClick={handleMarkerClick} />

      <AttractionModal
        attraction={selectedAttraction}
        onClose={() => setSelectedAttraction(null)}
      />
      <Calendar/>
      <iframe src="https://www.google.com/maps/d/embed?mid=1-3uO1UFQMbeir6doKm-YboQFJKCb3Q8&ehbc=2E312F"  className=" w-full  min-h-[600px]"></iframe>
    </div>
  );
}

export default App;
