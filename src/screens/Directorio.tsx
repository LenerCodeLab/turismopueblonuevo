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
    {
      nombre: "Restaurant Maria Rosa",
      direccion: "Caserío Huacachina Seca",
      telefono: "922234444",
    },
    {
      nombre: "Restaurante La Pichanga",
      direccion: "Upis Magisterial S/N, Caserío de Yajasi",
      telefono: "912502393 / 992608040",
    },
    {
      nombre: "Restaurant Campestre La Granja de Eva",
      direccion: "Caserío de San Rafael de Aguaguana",
      telefono: "997415503",
    },
    {
      nombre: "Restaurant “Pepa de Oro”",
      direccion: "CC.PP Pongo Chico",
      telefono: "S/N",
    },
    {
      nombre: "Restaurant “El Carbón”",
      direccion: "Pongo Grande",
      telefono: "959782023",
    },
    {
      nombre: "Restaurant “Virgen de Chapi”",
      direccion: "Pueblo Nuevo",
      telefono: "903146581",
    },
    {
      nombre: "Bar “Bar Warren”",
      direccion: "Pueblo Nuevo",
      telefono: "994931068",
    },
    {
      nombre: "Restaurant “Huarique del chicho”",
      direccion: "Pueblo Nuevo",
      telefono: "992808848",
    },
    {
      nombre: "Restaurant “La tía bebe”",
      direccion: "Pueblo Nuevo",
      telefono: "956393839",
    },
    {
      nombre: "Restaurant “Comida Campestre”",
      direccion: "Pueblo Nuevo",
      telefono: "996400927",
    },
    {
      nombre: "Restaurant “La esquina de Yovi”",
      direccion: "Pueblo Nuevo",
      telefono: "947709665",
    },
    {
      nombre: "Restaurant “Las delicias de Dina”",
      direccion: "Caserío de Chulpaca",
      telefono: "917201454",
    },
    {
      nombre: "Restaurant Chacra Rosa",
      direccion: "Camino Pueblo Nuevo",
      telefono: "S/N",
    },
    {
      nombre: "Restaurant Silvana",
      direccion: "Caserío San Rafael de Aguanana",
      telefono: "S/N",
    },
    {
      nombre: "Restaurante “La sazón de Juanita”",
      direccion: "Bellavista S/N, Pueblo Nuevo",
      telefono: "975027255",
    },
    {
      nombre: "Restaurante Corina",
      direccion: "Caserío San Rafael de Aguanana",
      telefono: "S/N",
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

  const bodegas = [
    {
      nombre: "Bodega Hermanos Anicama Rejas",
      direccion: "Av. Luis Camino Dibos N-10",
      telefono: "956382437",
    },
    {
      nombre: "Bodega Hermanos Anicama",
      direccion: "Av. Luis Camino Divos",
      telefono: "953293433",
    },
    {
      nombre: "Bodega Chacaltana",
      direccion: "Caserío Callejón de los Espinos",
      telefono: "987105373",
    },
    {
      nombre: "Bodega Don Benjamín",
      direccion: "Caserío Chaype",
      telefono: "S/N",
    },
    {
      nombre: "Bodega Piscos y Vinos",
      direccion: "Caserío Chaype",
      telefono: "902333937",
    },
    {
      nombre: "Open Bar Chepe Cocteles",
      direccion: "Caserío Chulpaca",
      telefono: "923277761",
    },
    {
      nombre: "Bodega San Inocente",
      direccion: "Caserío Chulpaca",
      telefono: "966907950",
    },
    {
      nombre: "Bodega Liduvina",
      direccion: "Caserío Chulpaca",
      telefono: "917201454",
    },
    {
      nombre: "Bodega Don Artemio",
      direccion: "Caserío Chulpaca",
      telefono: "971124603",
    },
    {
      nombre: "Bodega Don Chevo",
      direccion: "Caserío Chulpaca",
      telefono: "972251642",
    },
    {
      nombre: "Bodega Familia Angulo Rejas",
      direccion: "Caserío Chulpaca",
      telefono: "932325278",
    },
    {
      nombre: "Bodega Huarangal",
      direccion: "Caserío Conuca",
      telefono: "953293821",
    },
    {
      nombre: "Bodega Piscos Adriano",
      direccion: "Caserío Conuca",
      telefono: "941125799",
    },
    {
      nombre: "Bodega Don Nicolás DYA",
      direccion: "Caserío Huacachina Seca",
      telefono: "968966205",
    },
    {
      nombre: "Productora Piscos y Vinos",
      direccion: "Caserío Pariña Grande",
      telefono: "S/N",
    },
    {
      nombre: "Bodega Angulo",
      direccion: "Caserío Pariña Grande",
      telefono: "956634886",
    },
    {
      nombre: "Bodega Bohórquez",
      direccion: "Caserío Pongo Chico",
      telefono: "S/N",
    },
    {
      nombre: "Bodega Municipal",
      direccion: "Caserío Pongo Chico",
      telefono: "S/N",
    },
    {
      nombre: "Productora Piscos y Vinos",
      direccion: "Caserío Pongo de los Zegarra",
      telefono: "S/N",
    },

  ];

  const estadio = [
    {
      nombre: "Estadio Municipal Pedro Tipacti Rios",
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
    },
    {
      empresa: "Comité de Autos Virgen del Carmen",
      direccion: "Calle Ayacucho",
      horario: "5:00 a.m. – 6:00 p.m.",
      tarifa: "4.00",
    },
    {
      empresa: "Comité de Autos Pariña y Pongo Grande – EMTAPASA",
      direccion: "Calle Ayacucho",
      horario: "8:00 a.m. – 6:00 p.m.",
      tarifa: "3.00",
    },
    {
      empresa: "Comité de Autos EPSACRUZ",
      direccion: "Calle Ayacucho",
      horario: "8:00 a.m. – 6:00 p.m.",
      tarifa: "3.00",
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
            <div className="grid gap-4 md:grid-cols-2">
              {bodegas.map((p, idx) => (
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
            <div className="grid md:grid-cols-2 gap-4">
              {transporte.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
                >
                  <h4 className="text-lg font-semibold text-slate-900">
                    {item.empresa}
                  </h4>

                  <p className="text-sm text-slate-600">
                    Dirección: {item.direccion}
                  </p>

                  <p className="text-sm text-slate-600">
                    Horario de salidas: {item.horario}
                  </p>

                  <p className="text-sm text-slate-600">
                    Tarifa referencial: {item.tarifa}
                  </p>
                </div>
              ))}
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
