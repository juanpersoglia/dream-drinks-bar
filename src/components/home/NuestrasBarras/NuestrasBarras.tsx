'use client';

import Image from 'next/image';
import { barrasData } from './barrasData';

export const NuestrasBarras = () => {
  return (
    <section id="nuestras-barras" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="mb-4">Barras que definen la experiencia</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cada barra es una pieza pensada para acompañar el espacio, ordenar el servicio y potenciar la experiencia del invitado, manteniendo siempre la estética y la presencia Dream Drinks.
          </p>
        </div>

        {/* Featured bar */}
        <div className="relative aspect-[16/7] overflow-hidden rounded-xl mb-6 shadow-2xl">
          <Image
            src={barrasData[0].imagen}
            alt={barrasData[0].titulo}
            fill
            className="object-cover hover:scale-105 transition-transform duration-700"
            sizes="100vw"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="text-yellow-400 font-bold text-sm uppercase tracking-widest">{barrasData[0].titulo}</span>
          </div>
        </div>

        {/* Grid of remaining bars */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {barrasData.slice(1).map((barra, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-lg group">
              <Image
                src={barra.imagen}
                alt={barra.titulo}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                quality={90}
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-xs font-semibold truncate">{barra.titulo}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-xs mt-6">
          La disponibilidad de cada modelo se confirma al momento de la reserva.
        </p>
      </div>
    </section>
  );
};
