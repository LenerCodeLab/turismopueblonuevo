import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {  divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Attraction } from "../data/attractions";
import defaultImagen from "../assets/images/default.jpg";
interface MapProps {
  attractions: Attraction[];
  onMarkerClick: (attraction: Attraction) => void;
}

const createCustomIcon = (imageUrl: string) => {
  return divIcon({
    html: `
      <div class="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-125 transition-transform cursor-pointer bg-white">
        <img src="${imageUrl}" alt="marker" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
    `,
    className: "custom-marker",
    iconSize: [64, 64],
    iconAnchor: [32, 64],
    popupAnchor: [0, -64],
  });
};

export default function Map({ attractions, onMarkerClick }: MapProps) {
  const center: [number, number] = [-14.123378, -75.712882];

  return (
    <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-2xl border-4 border-white relative z-10">
      <MapContainer
        center={center}
        zoom={15}
        scrollWheelZoom={true}
        className="w-full h-full"
        style={{ zIndex: 10 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {attractions.map((attraction) => (
          <Marker
            key={attraction.id}
            position={attraction.coordinates}
            icon={createCustomIcon(attraction?.images?.[0] ?? defaultImagen)}
            eventHandlers={{
              click: () => onMarkerClick(attraction),
            }}
          >
            <Popup >
              <div className="text-center p-2">
                <h3 className="font-bold text-sm text-gray-900">
                  {attraction.name}
                </h3>
                <p className="text-xs text-gray-600 mt-1">
                  {attraction.category}
                </p>
                <p className="text-xs text-orange-600 font-semibold mt-2">
                  Haz clic en el marcador para más detalles
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
