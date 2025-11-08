import { Mail, MapPin, Phone } from "lucide-react";
import muñeco from "../assets/images/muñeco.webp";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 text-white overflow-hidden py-8 px-4 border-t border-gray-200">
      <div className="w-full ">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-[auto_1fr_auto] gap-8 items-center p-8 md:p-12">
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-2xl border-2 border-white/30">
                  <div className="w-32 h-32 flex items-center justify-center">
                    <img
                      src={muñeco}
                      alt="Muñeco Municipalidad"
                      className="w-[180px] h-[180px] object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white/90 mb-2">
                    Contáctanos las 24 horas:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="tel:976922667"
                      className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    >
                      976922667
                    </a>
                    <a
                      href="tel:056-999999"
                      className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    >
                      056-999999
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl group-hover:bg-white/30 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white/90 mb-1">
                    Correo electrónico
                  </p>
                  <a
                    href="mailto:contacto@munipueblonuevo-ica.gob.pe"
                    className="text-lg font-medium hover:underline"
                  >
                    contacto@munipueblonuevo-ica.gob.pe
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl group-hover:bg-white/30 transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white/90 mb-1">
                    Sede Central
                  </p>
                  <p className="text-lg font-medium">
                    Calle El Carmen Mz. 1 Lt. 06
                  </p>
                  <p className="text-base text-white/90">Pueblo Nuevo - Ica</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <div className="w-32 h-32 grid grid-cols-3 gap-2">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className={`${
                        i === 1 || i === 3 || i === 5 || i === 7
                          ? "bg-emerald-500"
                          : "bg-emerald-600"
                      } rounded-md`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
