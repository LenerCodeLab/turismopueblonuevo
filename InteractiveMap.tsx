import { useState, useEffect } from 'react';
import { MapPin, Star, X } from 'lucide-react';


interface InteractiveMapProps {
  locations: TouristLocation[];
  onLocationClick: (location: TouristLocation) => void;
}

export function InteractiveMap({ locations, onLocationClick }: InteractiveMapProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const minLat = Math.min(...locations.map(l => Number(l.latitude)));
  const maxLat = Math.max(...locations.map(l => Number(l.latitude)));
  const minLon = Math.min(...locations.map(l => Number(l.longitude)));
  const maxLon = Math.max(...locations.map(l => Number(l.longitude)));

  const latRange = maxLat - minLat || 0.1;
  const lonRange = maxLon - minLon || 0.1;

  const padding = 0.15;

  const getPosition = (lat: number, lon: number) => {
    const x = ((Number(lon) - minLon + lonRange * padding) / (lonRange * (1 + 2 * padding))) * 100;
    const y = ((maxLat - Number(lat) + latRange * padding) / (latRange * (1 + 2 * padding))) * 100;
    return { x, y };
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      museum: 'bg-purple-500 border-purple-600',
      restaurant: 'bg-orange-500 border-orange-600',
      park: 'bg-green-500 border-green-600',
      monument: 'bg-blue-500 border-blue-600',
      beach: 'bg-cyan-500 border-cyan-600',
      attraction: 'bg-pink-500 border-pink-600',
    };
    return colors[category] || 'bg-gray-500 border-gray-600';
  };

  return (
    <div className="relative w-full h-[600px] bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl shadow-2xl overflow-hidden border-4 border-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>

      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg z-10">
        <p className="text-sm font-semibold text-gray-700">
          {locations.length} lugares increíbles
        </p>
      </div>

      {locations.map((location) => {
        const { x, y } = getPosition(Number(location.latitude), Number(location.longitude));
        const isHovered = hoveredId === location.id;

        return (
          <div
            key={location.id}
            className="absolute transform -translate-x-1/2 -translate-y-full transition-all duration-300 cursor-pointer z-20"
            style={{ left: `${x}%`, top: `${y}%` }}
            onMouseEnter={() => setHoveredId(location.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => onLocationClick(location)}
          >
            <div
              className={`
                relative transition-all duration-300
                ${isHovered ? 'scale-125' : 'scale-100 hover:scale-110'}
              `}
            >
              <div className={`
                w-10 h-10 rounded-full ${getCategoryColor(location.category)}
                flex items-center justify-center
                shadow-lg border-2
                ${isHovered ? 'animate-bounce' : ''}
              `}>
                <MapPin className="w-6 h-6 text-white" fill="white" />
              </div>

              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-2 h-2 bg-gray-800/20 rounded-full blur-sm"></div>
            </div>

            {isHovered && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-2xl p-3 w-64 z-30 animate-[fadeIn_0.2s_ease-in-out]">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-gray-900 text-sm">{location.name}</h3>
                  <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 text-yellow-500" fill="currentColor" />
                    <span className="text-xs font-semibold text-gray-700">{location.rating}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 line-clamp-2">{location.description}</p>
                <p className="text-xs text-teal-600 font-medium mt-2 capitalize">{location.category}</p>
              </div>
            )}
          </div>
        );
      })}

      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-3 z-10">
        <p className="text-xs font-semibold text-gray-600 mb-2">Categorías:</p>
        <div className="flex flex-wrap gap-2">
          {['museum', 'restaurant', 'park', 'monument', 'beach', 'attraction'].map(cat => (
            <div key={cat} className="flex items-center gap-1.5">
              <div className={`w-3 h-3 rounded-full ${getCategoryColor(cat).split(' ')[0]}`}></div>
              <span className="text-xs text-gray-700 capitalize">{cat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}