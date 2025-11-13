import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/cropped-logo-muni-3-245x300.webp";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-white rounded-full p-2">
              {/* <MapPin className="w-6 h-6 text-teal-600" /> */}
              <img
                src={logo}
                alt="Logo Municipalidad"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-black font-bold text-xl">Pueblo nuevo</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-black hover:text-orange-300 transition-colors font-medium"
            >
              Inicio
            </Link>

            <Link
              to="/guia"
              className="text-black hover:text-orange-300 transition-colors font-medium"
            >
              Guia
            </Link>
            <Link
              to="/comida"
              className="text-black hover:text-orange-300 transition-colors font-medium"
            >
              Comida Tipica
            </Link>
            <Link
              to="/directorio"
              className="text-black hover:text-orange-300 transition-colors font-medium"
            >
              Directorio
            </Link>
            <Link
              to={"/calendario"}
              className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Ver Calendario
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black p-2"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6 " />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link
              to="/"
              className="block text-black hover:text-orange-300 transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>

            <Link
              to="/guia"
              className="block text-black hover:text-orange-300 transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Guia
            </Link>
            <Link
              to="/comida"
              className="block text-black hover:text-orange-300 transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Comida Tipica
            </Link>
            <Link
              to="/directorio"
              className="block text-black hover:text-orange-300 transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Directorio
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/calendario"
              className="w-full bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-full font-medium transition-colors mt-5"
            >
              Ver Calendario Interactivo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
