"use client";

const testimonios = [
  {
    nombre: "Valentina M.",
    evento: "Casamiento",
    texto:
      "La barra fue lo que más comentaron todos los invitados. Los bartenders increíbles, atentos y con una presencia impecable. ¡Volvería a contratarlos sin dudar!",
    estrellas: 5,
  },
  {
    nombre: "Rodrigo P.",
    evento: "Evento corporativo",
    texto:
      "Profesionales de verdad. Llegaron antes, montaron todo sin inconvenientes y el servicio durante el evento fue de primer nivel. Los cócteles, espectaculares.",
    estrellas: 5,
  },
  {
    nombre: "Luciana F.",
    evento: "Fiesta de 15",
    texto:
      "Mis invitados no paraban de hablar de la barra. El carrito de gin fue un hit total. Muy recomendables, superaron todas mis expectativas.",
    estrellas: 5,
  },
  {
    nombre: "Martín G.",
    evento: "Cumpleaños",
    texto:
      "Desde la propuesta inicial hasta el último trago, todo fue perfecto. Atención personalizada y un resultado que realmente elevó el evento.",
    estrellas: 5,
  },
];

const marcas = [
  "Bodega Norton",
  "Hendrick's Gin",
  "Johnnie Walker",
  "Aperol",
  "Chandon",
  "Campari",
  "Jack Daniel's",
  "Absolut",
];

const StarIcon = () => (
  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export const Testimonios = () => {
  return (
    <section id="testimonios" className="py-20 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Testimonios */}
        <div className="text-center mb-14">
          <h2 className="mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Eventos reales, experiencias reales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {testimonios.map((t, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-white/5 rounded-xl p-6 flex flex-col gap-4 hover:border-yellow-400/20 transition-all duration-300"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.estrellas }).map((_, j) => (
                  <StarIcon key={j} />
                ))}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">&ldquo;{t.texto}&rdquo;</p>
              <div>
                <p className="text-white text-sm font-bold">{t.nombre}</p>
                <p className="text-yellow-400/70 text-xs">{t.evento}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Marcas / Partners */}
        <div className="border-t border-white/5 pt-14">
          <p className="text-center text-gray-500 text-xs uppercase tracking-widest mb-10">
            Trabajamos con las mejores marcas
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {marcas.map((marca, i) => (
              <span
                key={i}
                className="text-gray-600 hover:text-gray-300 text-sm font-semibold tracking-wide transition-colors duration-300 uppercase"
              >
                {marca}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
