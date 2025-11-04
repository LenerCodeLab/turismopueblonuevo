import { MapPin } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDQwYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xNCAzNmMtMi4yMSAwLTQtMS43OS00LTRzMS43OS00IDQtNCA0IDEuNzkgNCA0LTEuNzkgNC00IDR6bTQwIDBjLTIuMjEgMC00LTEuNzktNC00czEuNzktNCA0LTQgNCAxLjc5IDQgNC0xLjc5IDQtNCA0eiIvPjwvZz48L2c+PC9zdmc+')] animate-[pulse_8s_ease-in-out_infinite]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-center mb-6">
          <MapPin className="w-16 h-16 text-white drop-shadow-lg" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 drop-shadow-xl">
          Descubre Tu Próxima
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-300">
            Aventura
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-center text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-lg">
          Explora los lugares más fascinantes de la ciudad. Cada punto en el mapa es una historia esperando ser descubierta.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => document.getElementById('map-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-teal-700 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Ver Mapa Interactivo
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </div>
  );
}