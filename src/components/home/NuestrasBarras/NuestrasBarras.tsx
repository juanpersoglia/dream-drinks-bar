'use client';

import Image from 'next/image';

interface BarraProps {
  titulo: string;
  descripcion: string;
  caracteristicas: string[];
  imagen: string;
  isReversed?: boolean;
}

const barrasData = [
  {
    titulo: "Barra Vintage",
    descripcion: "Un toque clásico y elegante que transporta a tus invitados a la época dorada de la coctelería. Perfecta para eventos con temática retro o para quienes buscan un ambiente sofisticado y nostálgico.",
    caracteristicas: [
      "Diseño clásico de los años 20-30",
      "Materiales nobles y acabados vintage",
      "Ideal para eventos temáticos",
      "Ambiente sofisticado y elegante",
      "Detalles artesanales únicos"
    ],
    imagen: "/assets/gallery/oldschool.jpg"
  },
  {
    titulo: "Barra Hexagonal",
    descripcion: "Diseño moderno y vanguardista que se convierte en el centro de atención de cualquier evento. Su forma única permite una mejor interacción entre bartender e invitados, creando una experiencia más dinámica.",
    caracteristicas: [
      "Diseño geométrico innovador",
      "Mayor espacio de trabajo",
      "Interacción 360° con invitados",
      "Estilo contemporáneo y llamativo",
      "Optimizada para el flujo de servicio"
    ],
    imagen: "/assets/gallery/00024.jpg"
  },
  {
    titulo: "Carrito Gintonero",
    descripcion: "Especializado en gin tonics y cócteles con gin. Móvil y versátil, perfecto para eventos al aire libre o espacios donde se requiere flexibilidad en el montaje y un toque distintivo.",
    caracteristicas: [
      "Especializado en gin y tónicos",
      "Completamente móvil",
      "Ideal para espacios reducidos",
      "Perfecto para eventos outdoor",
      "Amplia selección de botánicos"
    ],
    imagen: "/assets/gallery/00030.jpg"
  },
  {
    titulo: "Barra Espejada",
    descripcion: "Elegancia y glamour en estado puro. Los acabados espejados reflejan las luces del evento creando un ambiente mágico y sofisticado que deslumbra a todos los invitados con su brillo único.",
    caracteristicas: [
      "Acabados espejados de lujo",
      "Efectos visuales únicos",
      "Ambiente glamoroso",
      "Perfecta para eventos de gala",
      "Refleja la iluminación del ambiente"
    ],
    imagen: "/assets/gallery/00063.jpg"
  }
];

const BarraCard = ({ titulo, descripcion, caracteristicas, imagen, isReversed = false }: BarraProps) => {
  return (
    <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}>
      {/* Imagen */}
      <div className="w-full lg:w-1/2">
        <div className="relative aspect-[4/3]  overflow-hidden shadow-2xl">
          <Image
            src={imagen}
            alt={titulo}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
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

        <ul className="space-y-3">
          {caracteristicas.map((caracteristica, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-300">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 mt-2 flex-shrink-0"></div>
              <span className="font-montserrat font-medium">{caracteristica}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const NuestrasBarras = () => {
  return (
    <section id="nuestras-barras" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-white mb-6">
            Nuestras Barras
          </h2>
          <p className="text-xl font-montserrat font-medium text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cada evento es único y merece una barra que refleje su personalidad. Descubrí nuestras diferentes 
            opciones de barras, desde lo clásico hasta lo más vanguardista, diseñadas para crear la experiencia perfecta.
          </p>
        </div>

        {/* Grid de barras */}
        <div className="space-y-24 lg:space-y-32">
          {barrasData.map((barra, index) => (
            <BarraCard
              key={index}
              titulo={barra.titulo}
              descripcion={barra.descripcion}
              caracteristicas={barra.caracteristicas}
              imagen={barra.imagen}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};