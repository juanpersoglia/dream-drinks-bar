"use client";

import Image from "next/image";

const paragraphs = [
  "Hace más de 12 años entendimos que un servicio de coctelería no consiste únicamente en preparar excelentes tragos.",
  "Consiste en acompañar uno de los momentos más importantes de la vida de nuestros clientes.",
  "Por eso cuidamos cada detalle: la presentación, la calidad de los insumos, la atención del bartender, la estética de nuestras barras y la experiencia completa de cada invitado.",
  "Con cientos de eventos realizados en distintas ciudades y provincias, hoy somos una de las empresas referentes en coctelería premium para eventos en el NEA.",
  "Nuestro compromiso sigue siendo el mismo desde el primer día:",
  "Crear experiencias memorables con profesionalismo, calidad y pasión.",
];

export const QuienesSomos = () => {
  return (
    <section id="quienes-somos" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="w-full md:w-1/2 flex-shrink-0">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/assets/capacitacion.jpg"
                alt="El equipo de DreamDrinks"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 flex flex-col gap-5">
            <h2 className="text-white mb-2">¿Quiénes somos?</h2>
            {paragraphs.map((text, i) => (
              <p key={i} className="text-gray-300 leading-relaxed">
                {text}
              </p>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 border-t border-white/10 pt-16">
          <h3 className="text-center text-white text-xl font-semibold tracking-wide uppercase mb-12">
            Dream Drinks en números
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "+12", label: "Años creando experiencias" },
              { value: "+45", label: "Localidades recorridas" },
              { value: "+400.000", label: "Cócteles preparados" },
              { value: "98%", label: "De clientes que vuelven" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
                <span className="text-4xl md:text-5xl font-bold text-yellow-400">
                  {stat.value}
                </span>
                <span className="text-gray-400 text-sm leading-snug">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
