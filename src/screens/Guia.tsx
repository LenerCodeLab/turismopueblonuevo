import "react-pdf/dist/Page/AnnotationLayer.css";
import guia from "../../public/guia.pdf";

export default function Guia() {
  return (
    <section className="bg-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24">
    <div className="text-center mb-10 md:mb-16">
      <h2 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">
        Guía Turística
      </h2>

      <div className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed space-y-5 text-justify">
        <p>
          La <strong>Guía Turística del Distrito de Pueblo Nuevo – Ica</strong> es una invitación a
          descubrir la esencia de este histórico lugar, donde tradición, naturaleza y cultura se
          entrelazan.
        </p>
        <p>
          En sus páginas encontrarás una selección de los principales atractivos turísticos, rutas
          históricas, gastronomía típica y festividades que definen la identidad del distrito.
        </p>
        <p>
          Desde los recorridos rurales entre viñedos y capillas coloniales hasta la calidez de su
          gente y sus sabores únicos, esta guía ha sido elaborada para orientar tanto a visitantes
          como a locales que desean redescubrir los encantos de Pueblo Nuevo.
        </p>
        <p>
          Es una herramienta completa que resalta la riqueza patrimonial, las costumbres vivas y los
          paisajes que convierten a <strong>Pueblo Nuevo</strong> en un destino inolvidable dentro del
          corazón de Ica.
        </p>
      </div>
    </div>

    <div className="w-full">
      <div className="rounded-2xl shadow-xl ring-1 ring-black/5 overflow-hidden bg-slate-50">
        {/* Visor de PDF */}
        <object
          data={`${guia}#zoom=page-width`}
          type="application/pdf"
          className="w-full h-[70vh] md:h-[85vh]"
          aria-label="Guía turística en PDF"
        >
          {/* Fallback si el PDF no se puede mostrar */}
          <div className="p-6 text-center text-slate-600">
            Tu navegador no puede mostrar PDFs embebidos.{" "}
            <a href={guia} className="text-blue-600 underline font-medium">
              Descarga la guía (PDF)
            </a>
            .
          </div>
        </object>
      </div>

      <p className="mt-4 text-sm text-slate-500 text-center">
        💡 Usa el zoom del visor o el modo pantalla completa para una mejor lectura.
      </p>
    </div>
  </div>
</section>

  );
}
