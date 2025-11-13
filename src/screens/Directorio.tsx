import {
  Building2,
  Utensils,
  Cake,
  Wine,
  Bus,
  Landmark,
  PhoneCall,
  AlertTriangle,
  Info,
} from "lucide-react";

export function Directorio() {
  const hospedajes = [
    {
      nombre: "Hostal El Parral",
      direccion: "Carretera Camino Chico",
      telefono: "956038042",
    },
    {
      nombre: "Hostal Las Delicias del Paraíso",
      direccion: "Pasaje San Juan, Pueblo Nuevo",
      telefono: "939598304",
    },
    {
      nombre: "Hotel Casa Hacienda El Pajonal",
      direccion: "Pasaje San Juan, Pueblo Nuevo",
      telefono: "956876050",
    },
    {
      nombre: "Hospedaje El Mangual",
      direccion: "Caserío de San Rafael de Aguaguana",
      telefono: "987554773",
    },
    {
      nombre: "La Casona de Don Paulo",
      direccion: "Caserío de San Rafael de Aguaguana",
      telefono: "S/N",
    },
  ];

  const restaurantes = [
    {
      nombre: "El Batan de Juanita",
      direccion: "Calle Bellavista S/N",
      telefono: "919180088",
    },
    {
      nombre: "La Fortaleza de Aurorita",
      direccion: "Caserío de Chulpaca",
      telefono: "956188888",
    },
    {
      nombre: "Anticuchería “Francchia”",
      direccion: "Pueblo Nuevo",
      telefono: "962514798",
    },
    {
      nombre: "Restaurante Tierra Verde",
      direccion: "Caserío de Conuca B-17ª",
      telefono: "939788219",
    },
    {
      nombre: "Viña Jazmín – Centro de Esparcimiento Campestre",
      direccion: "Caserío Huacachina Seca",
      telefono: "987629219",
    },
    {
      nombre: "Restobar Don Bruno",
      direccion: "Caserío Huacachina Seca",
      telefono: "969030590",
    },
  ];

  const pastelerias = [
    {
      nombre: "Pastelería “Cannelle Fina”",
      direccion: "Pueblo Nuevo",
      telefono: "946199498",
    },
    {
      nombre: "Pastelería “Mi Dulce Cata”",
      direccion: "Pueblo Nuevo",
      telefono: "947328325",
    },
  ];

  const estadio = [
    {
      nombre: "Estadio Municipal Pedro Tipacti Ríos",
      direccion: "Calle Pedro Uchuga S/N",
      telefono: "S/N",
    },
  ];

  const transporte = [
    {
      empresa: "Comité de autos Juan Pablo Segundo",
      direccion: "Calle Ayacucho",
      horario: "8:00 a.m. – 6:00 p.m.",
      tarifa: "S/ 3.00",
      telefono: "S/N",
    },
  ];

  const artesanos = [
    {
      nombre: "Tejidos “Mis dos Princesas”",
      rubro: "Tejidos / artesanía textil",
      telefono: "983277761",
      ubicacion: "Caserío de Chulpaca",
    },
  ];

  const emergencias = [
    {
      nombre: "Puesto Policial",
      direccion: "Calle El Carmen S/N",
      telefono: "956917991",
    },
    {
      nombre: "Centro de Salud",
      direccion: "Calle El Carmen S/N",
      telefono: "(056) 239558",
    },
    {
      nombre: "Serenazgo",
      direccion: "Calle El Carmen Mz. L Lte. 17",
      telefono: "976922667",
    },
    {
      nombre: "DEMUNA",
      direccion: "Calle El Carmen S/N",
      telefono: "986091575",
    },
  ];

  const obligaciones = [
    "Al llegar al Distrito de Pueblo Nuevo, infórmate sobre los sitios turísticos en la Gerencia de Desarrollo Económico – Área de Cultura y Turismo (Municipalidad Distrital de Pueblo Nuevo, Calle El Carmen Mz. L Lte. 17).",
    "Si visitas sitios arqueológicos como Tacaraca, lleva gorro, bloqueador solar y agua. Cuida tu salud y respeta el entorno.",
    "No arrojes basura en los atractivos turísticos. Si no hay tachos, guarda tus residuos y deposítalos al volver al distrito.",
    "Respeta las costumbres, tradiciones y normas de la comunidad que visitas.",
  ];

  const recomendaciones = [
    "Lleva ropa ligera de manga larga, gorro, protector solar y repelente para mosquitos.",
    "Entre las 11:00 y las 16:00 horas la radiación es más intensa; utiliza lentes de sol y bloqueador de alta protección.",
  ];

  return (
    <section id="directorio" className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Título principal */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Directorio Turístico de Pueblo Nuevo
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
            Encuentra información útil sobre hospedajes, restaurantes, servicios
            de emergencia y recomendaciones para disfrutar tu visita al
            histórico distrito de Pueblo Nuevo – Ica.
          </p>
        </div>

        <div className="space-y-12">
          {/* Hospedajes */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                <Building2 className="h-5 w-5" />
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                1. Hospedajes
              </h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {hospedajes.map((h, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 flex flex-col gap-1"
                >
                  <h4 className="text-lg font-semibold text-slate-900">
                    {h.nombre}
                  </h4>
                  <p className="text-sm text-slate-600">{h.direccion}</p>
                  <p className="text-sm text-slate-700 flex items-center gap-1">
                    <PhoneCall className="h-4 w-4 text-emerald-600" />
                    <span className="font-medium">
                      {h.telefono === "S/N" ? "Sin número" : h.telefono}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Restaurantes */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                <Utensils className="h-5 w-5" />
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                2. Restaurantes y Restobares
              </h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {restaurantes.map((r, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 flex flex-col gap-1"
                >
                  <h4 className="text-lg font-semibold text-slate-900">
                    {r.nombre}
                  </h4>
                  <p className="text-sm text-slate-600">{r.direccion}</p>
                  <p className="text-sm text-slate-700 flex items-center gap-1">
                    <PhoneCall className="h-4 w-4 text-emerald-600" />
                    <span>{r.telefono}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pastelerías */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-pink-100 text-pink-700">
                <Cake className="h-5 w-5" />
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                3. Pastelerías
              </h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {pastelerias.map((p, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 flex flex-col gap-1"
                >
                  <h4 className="text-lg font-semibold text-slate-900">
                    {p.nombre}
                  </h4>
                  <p className="text-sm text-slate-600">{p.direccion}</p>
                  <p className="text-sm text-slate-700 flex items-center gap-1">
                    <PhoneCall className="h-4 w-4 text-emerald-600" />
                    <span>{p.telefono}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bodegas */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                <Wine className="h-5 w-5" />
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                4. Bodegas vitivinícolas
              </h3>
            </div>
            <p className="text-sm text-slate-600 bg-white rounded-2xl p-4 shadow-sm ring-1 ring-slate-200">
              Próximamente se incorporará el detalle de bodegas y viñedos del
              distrito de Pueblo Nuevo para que puedas planificar tus rutas
              enoturísticas.
            </p>
          </div>

          {/* Estadio */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700">
                <Landmark className="h-5 w-5" />
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                5. Estadio de Pueblo Nuevo
              </h3>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 max-w-xl">
              <h4 className="text-lg font-semibold text-slate-900">
                {estadio[0].nombre}
              </h4>
              <p className="text-sm text-slate-600">{estadio[0].direccion}</p>
              <p className="text-sm text-slate-700 mt-1">
                Teléfono:{" "}
                {estadio[0].telefono === "S/N"
                  ? "Sin número registrado"
                  : estadio[0].telefono}
              </p>
            </div>
          </div>

          {/* Transporte terrestre */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-sky-700">
                <Bus className="h-5 w-5" />
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                6. Transporte terrestre
              </h3>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 max-w-xl">
              <h4 className="text-lg font-semibold text-slate-900">
                {transporte[0].empresa}
              </h4>
              <p className="text-sm text-slate-600">
                Dirección: {transporte[0].direccion}
              </p>
              <p className="text-sm text-slate-600">
                Horario de salidas: {transporte[0].horario}
              </p>
              <p className="text-sm text-slate-600">
                Tarifa referencial: {transporte[0].tarifa}
              </p>
            </div>
          </div>

          {/* Artesanos */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                <Building2 className="h-5 w-5" />
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                7. Artesanos
              </h3>
            </div>
            <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 max-w-xl">
              <h4 className="text-lg font-semibold text-slate-900">
                {artesanos[0].nombre}
              </h4>
              <p className="text-sm text-slate-600">
                Ubicación: {artesanos[0].ubicacion}
              </p>
              <p className="text-sm text-slate-600">
                Rubro: {artesanos[0].rubro}
              </p>
              <p className="text-sm text-slate-700 flex items-center gap-1 mt-1">
                <PhoneCall className="h-4 w-4 text-emerald-600" />
                <span>{artesanos[0].telefono}</span>
              </p>
            </div>
          </div>

          {/* Servicios de emergencia */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-red-700">
                <AlertTriangle className="h-5 w-5" />
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                8. Servicios de emergencia
              </h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {emergencias.map((e, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
                >
                  <h4 className="text-lg font-semibold text-slate-900">
                    {e.nombre}
                  </h4>
                  <p className="text-sm text-slate-600">{e.direccion}</p>
                  <p className="text-sm text-slate-700 flex items-center gap-1 mt-1">
                    <PhoneCall className="h-4 w-4 text-emerald-600" />
                    <span>{e.telefono}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Obligaciones del visitante */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                <Info className="h-5 w-5" />
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                9. Obligaciones del visitante
              </h3>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
                {obligaciones.map((o, idx) => (
                  <li key={idx}>{o}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recomendaciones */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                <Info className="h-5 w-5" />
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                10. Recomendaciones
              </h3>
            </div>
            <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
                {recomendaciones.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
