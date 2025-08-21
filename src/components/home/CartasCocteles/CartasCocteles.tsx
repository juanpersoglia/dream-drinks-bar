"use client";

import Image from "next/image";

interface CartaProps {
  titulo: string;
  descripcion: string;
  cocteles: string[];
  precio: string;
  imagen: string;
  isReversed?: boolean;
}

const cartasData = [
  {
    titulo: "Carta Clásica",
    descripcion:
      "La selección perfecta para eventos que buscan calidad y tradición. Incluye los cócteles más emblemáticos de la coctelería internacional, preparados con técnicas tradicionales y ingredientes de primera calidad.",
    cocteles: [
      "Mojito • Cuba Libre • Daiquiri",
      "Martini • Negroni • Manhattan",
      "Gin Tonic • Aperol Spritz • Campari",
      "Whiskey Sour • Old Fashioned",
      "Cosmopolitan • Sex on the Beach",
      "Fernet con Coca • Destornillador",
    ],
    precio: "Desde $XX.XXX por persona",
    imagen: "/assets/cynar.jpg",
  },
  {
    titulo: "Carta Premium",
    descripcion:
      "Experiencia elevada con cócteles autorales y técnicas avanzadas. Ingredientes premium, spirits de alta gama y presentaciones únicas que sorprenden a los invitados más exigentes.",
    cocteles: [
      "Cócteles autorales de la casa",
      "Gin tonics premium con botánicos",
      "Whiskeys de malta y bourbon añejo",
      "Macerados y bitter artesanales",
      "Técnicas de clarificación y infusión",
      "Presentaciones con humo y nitrógeno",
      "Garnish y decoración gourmet",
    ],
    precio: "Desde $XX.XXX por persona",
    imagen: "/assets/trago-autor.jpg",
  },
  {
    titulo: "Carta Premium VIP",
    descripcion:
      "La experiencia más exclusiva en coctelería de eventos. Spirits ultra premium, técnicas de mixología molecular, presentaciones teatrales y un servicio personalizado que convierte cada trago en una obra de arte.",
    cocteles: [
      "Spirits ultra premium y ediciones limitadas",
      "Mixología molecular y esferificaciones",
      "Cócteles en fuego y técnicas flambeadas",
      "Hielos decorativos y cristalería premium",
      "Show de coctelería en vivo",
      "Maridajes exclusivos con aperitivos",
      "Servicio personalizado de sommelier",
      "Carta completamente customizable",
    ],
    precio: "Consultar cotización personalizada",
    imagen: "/assets/jager.jpg",
  },
];

const CartaCard = ({
  titulo,
  descripcion,
  cocteles,
  imagen,
  isReversed = false,
}: CartaProps) => {
  return (
    <div
      className={`flex flex-col ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-8 lg:gap-12 items-center`}
    >
      {/* Imagen */}
      <div className="w-full lg:w-1/2">
        <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
          <Image
            src={imagen}
            alt={titulo}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </div>

      {/* Contenido */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h3 className="text-3xl lg:text-4xl font-montserrat font-bold text-white">
          {titulo}
        </h3>

        <p className="text-lg font-montserrat font-medium text-gray-300 leading-relaxed">
          {descripcion}
        </p>

        <div className="space-y-4">
          <h4 className="text-xl font-montserrat font-bold text-yellow-400">
            Incluye:
          </h4>
          <ul className="space-y-3">
            {cocteles.map((coctel, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 mt-2 flex-shrink-0"></div>
                <span className="font-montserrat font-medium">{coctel}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const CartasCocteles = () => {
  return (
    <section id="cartas-cocteles" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-white mb-6">
            Cartas de Cócteles
          </h2>
          <p className="text-xl font-montserrat font-medium text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cada carta está diseñada para diferentes tipos de evento y
            presupuesto. Desde cócteles clásicos hasta experiencias de mixología
            premium, encontrá la opción perfecta para tu celebración.
          </p>
        </div>

        {/* Grid de cartas */}
        <div className="space-y-24 lg:space-y-32">
          {cartasData.map((carta, index) => (
            <CartaCard
              key={index}
              titulo={carta.titulo}
              descripcion={carta.descripcion}
              cocteles={carta.cocteles}
              precio={carta.precio}
              imagen={carta.imagen}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>

        {/* Nota adicional */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto bg-gray-800/50 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-montserrat font-bold text-white mb-4">
              ¿Necesitás algo personalizado?
            </h3>
            <p className="text-gray-300 font-montserrat font-medium leading-relaxed mb-6">
              Podemos crear una carta completamente personalizada para tu
              evento. Contanos tus preferencias, presupuesto y el tipo de
              experiencia que buscás, y diseñaremos una propuesta única.
            </p>
            <a
              href="https://wa.me/+5491112345678?text=Hola!%20Me%20interesa%20una%20carta%20personalizada%20de%20cócteles%20para%20mi%20evento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
            >
              Solicitar carta personalizada
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
