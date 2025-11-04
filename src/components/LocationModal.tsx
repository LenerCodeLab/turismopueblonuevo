import { X, Star, MapPin, Calendar } from "lucide-react";

interface LocationModalProps {
  location: TouristLocation | null;
  onClose: () => void;
}

export function LocationModal({ location, onClose }: LocationModalProps) {
  if (!location) return null;

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      museum: "bg-purple-100 text-purple-700 border-purple-300",
      restaurant: "bg-orange-100 text-orange-700 border-orange-300",
      park: "bg-green-100 text-green-700 border-green-300",
      monument: "bg-blue-100 text-blue-700 border-blue-300",
      beach: "bg-cyan-100 text-cyan-700 border-cyan-300",
      attraction: "bg-pink-100 text-pink-700 border-pink-300",
    };
    return colors[category] || "bg-gray-100 text-gray-700 border-gray-300";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-in-out]">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden animate-[slideUp_0.3s_ease-out]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200"
        >
          <X className="w-6 h-6 text-gray-700" />
        </button>

        <div className="relative h-64 md:h-80 overflow-hidden">
          <img
            src={location.image_url}
            alt={location.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                {location.name}
              </h2>
              <div className="flex items-center gap-1.5 bg-yellow-400 px-3 py-1.5 rounded-full shadow-lg">
                <Star className="w-5 h-5 text-yellow-900" fill="currentColor" />
                <span className="text-lg font-bold text-yellow-900">
                  {location.rating}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-20rem)]">
          <div className="flex items-center gap-3 mb-6">
            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold border-2 ${getCategoryColor(
                location.category
              )} capitalize`}
            >
              {location.category}
            </span>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">
                {Number(location.latitude).toFixed(4)},{" "}
                {Number(location.longitude).toFixed(4)}
              </span>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Acerca de este lugar
            </h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {location.description}
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border-2 border-teal-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Información adicional
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Agregado el</p>
                  <p className="font-semibold text-gray-900">
                    {new Date(location.created_at).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button className="flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-teal-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Ver en Google Maps
            </button>
            <button className="px-6 py-3 border-2 border-teal-600 text-teal-600 rounded-xl font-semibold hover:bg-teal-50 transition-all duration-300">
              Compartir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
