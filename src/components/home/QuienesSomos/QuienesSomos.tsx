"use client";

const inclusions = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    label: "Bartenders profesionales",
    desc: "Capacitados, con presencia y vocación de servicio",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    label: "Barra incluida",
    desc: "Barras lineales en estructura y estética",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    label: "Insumos y cristalería",
    desc: "Todo lo necesario para un servicio impecable",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
      </svg>
    ),
    label: "Traslado incluido",
    desc: "Equipamiento, insumos y personal en tu evento",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "8 horas de servicio",
    desc: "Con opción de horas adicionales según necesidad",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    label: "Hielo incluido",
    desc: "El hielo necesario para el correcto funcionamiento del servicio",
  },
];

export const QuienesSomos = () => {
  return (
    <section id="que-incluye" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="mb-4">¿Qué incluye tu barra?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Todo lo que necesitás para que la barra de tu evento sea un momento que se recuerde. Sin sorpresas, sin extras ocultos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {inclusions.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.03] hover:border-yellow-400/30 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">{item.label}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-xs mt-10">
          * Las barras octogonales, New York y Comby Bar tienen costo adicional y sujetas a disponibilidad.
        </p>
      </div>
    </section>
  );
};
