import { X, MapPin, Camera } from "lucide-react";

import { useState } from "react";
import type { Attraction } from "../data/attractions";
import defaulImage from "../assets/images/default.jpg";
interface AttractionModalProps {
  attraction: Attraction | null;
  onClose: () => void;
}

export default function AttractionModal({
  attraction,
  onClose,
}: AttractionModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!attraction) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === attraction?.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? attraction?.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999] p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp z-[10000]">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>

          <div className="relative h-96 bg-gray-900">
            <img
              src={attraction.images?.[currentImageIndex] ?? defaulImage}
              alt={attraction.name}
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-black bg-opacity-50 px-4 py-2 rounded-full">
              <button
                onClick={prevImage}
                className="text-white hover:text-gray-300 transition-colors"
              >
                ‹
              </button>
              <div className="flex gap-2">
                {attraction?.images?.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentImageIndex ? "bg-white w-6" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextImage}
                className="text-white hover:text-gray-300 transition-colors"
              >
                ›
              </button>
            </div>

            <div className="absolute top-4 left-4 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
              <Camera className="w-4 h-4" />
              {currentImageIndex + 1} / {attraction?.images?.length}
            </div>
          </div>

          <div className="p-8">
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                {attraction.category}
              </span>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {attraction.name}
            </h2>

            <div className="flex items-center text-gray-600 mb-6">
              <MapPin className="w-5 h-5 mr-2 text-red-500" />
              <span className="text-sm">
                {attraction.coordinates[0].toFixed(4)},{" "}
                {attraction.coordinates[1].toFixed(4)}
              </span>
            </div>

            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              {attraction.description}
            </p>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border-l-4 border-amber-500">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                Detalles de la Atracción
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {attraction.details}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
