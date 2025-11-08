import { Cake, UtensilsCrossed } from "lucide-react";
import { bebidasData, comidaData, postresData } from "../data/comidaData";

export default function ComidaTipica() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <div className="inline-block mb-4">
          <span className="bg-teal-100 text-teal-600 px-6 py-3 rounded-full text-sm font-semibold tracking-wide">
            Comida Típica
          </span>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Sabores de Pueblo Nuevo
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Descubre la riqueza culinaria de Pueblo Nuevo a través de sus platos
        </p>
      </div>
      <div className=" flex items-center gap-4 my-12 ">
        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg">
          <UtensilsCrossed className="w-8 h-8" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-gray-900">
            Platos Principales
          </h2>
          <p className="text-gray-600 mt-1">
            Descubre nuestras especialidades locales
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {comidaData.map((attraction) => (
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
                <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                  {attraction.description}
                </p>
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
      <div className=" flex items-center gap-4 my-12 ">
        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg">
          <UtensilsCrossed className="w-8 h-8" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-gray-900">
            Bebidas Principales
          </h2>
          <p className="text-gray-600 mt-1">
            Descubre nuestras especialidades locales
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {bebidasData.map((attraction) => (
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
                <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                  {attraction.description}
                </p>
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
      <div className=" flex items-center gap-4 my-12 ">
        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-lg">
          <UtensilsCrossed className="w-8 h-8" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-gray-900">
            Postres Principales
          </h2>
          <p className="text-gray-600 mt-1">
            Descubre nuestras especialidades locales
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {postresData.map((attraction) => (
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
                <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                  {attraction.description}
                </p>
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
