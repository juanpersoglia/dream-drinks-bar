"use client";

const steps = [
  {
    number: "01",
    title: "Escuchamos el evento",
    description:
      "Analizamos el tipo de celebración, el contexto, el público y el estilo buscado. Ninguna propuesta es igual a otra.",
  },
  {
    number: "02",
    title: "Diseñamos la experiencia",
    description:
      "Definimos la carta de cócteles, el tipo de barra y la estética general, cuidando que todo dialogue de forma armónica.",
  },
  {
    number: "03",
    title: "Seleccionamos el equipo",
    description:
      "Asignamos bartenders capacitados, con experiencia y presencia. El servicio es tan importante como el cóctel.",
  },
  {
    number: "04",
    title: "Ejecutamos con precisión",
    description:
      "Realizamos el montaje con anticipación, trabajamos con ritmo, orden y limpieza durante todo el evento, y desmontamos de forma discreta.",
  },
  {
    number: "05",
    title: "El resultado",
    description:
      "Una barra que funciona, se ve bien y se disfruta. El cliente se relaja. Los invitados viven la experiencia.",
  },
];

export const Metodo = () => {
  return (
    <section id="metodo" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="mb-4">Cómo trabajamos</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cada evento se aborda de manera personalizada. Un método claro que nos permite brindar un servicio profesional, ordenado y sin imprevistos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-[-calc(50%-2rem)] h-px bg-gradient-to-r from-yellow-400/40 to-transparent w-full" />
              )}
              <div className="w-16 h-16 rounded-full border-2 border-yellow-400/50 flex items-center justify-center mb-4 group-hover:border-yellow-400 transition-colors duration-300 bg-yellow-400/5">
                <span className="text-yellow-400 font-bold text-sm">{step.number}</span>
              </div>
              <h3 className="text-white text-xs font-bold uppercase tracking-wide mb-2 leading-tight">
                {step.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
