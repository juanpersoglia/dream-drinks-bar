"use client";

const serviciosAnexo = [
  {
    titulo: "Capacitación y Asesoramiento",
    descripcion:
      "Brindamos formación y acompañamiento a bares y restaurantes para optimizar el servicio de barra y profesionalizar equipos de trabajo.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    titulo: "Mixología & Cartas de Cócteles",
    descripcion:
      "Creación de cartas de cócteles alineadas con la identidad y la operatividad de cada espacio gastronómico.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
];

export const Anexo = () => {
  return (
    <section id="otros-servicios" className="py-16 bg-black border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <p className="text-gray-600 text-xs uppercase tracking-widest mb-2">Otros servicios</p>
          <h2 className="text-gray-400 text-lg font-semibold">Más allá de la barra</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {serviciosAnexo.map((s, i) => (
            <div
              key={i}
              className="flex gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all duration-300"
            >
              <div className="text-gray-600 flex-shrink-0 mt-0.5">{s.icon}</div>
              <div>
                <h3 className="text-gray-400 text-sm font-semibold mb-1 uppercase tracking-wide">{s.titulo}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{s.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
