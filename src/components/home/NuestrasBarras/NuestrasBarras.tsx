'use client';

import Image from 'next/image';
import { barrasData } from './barrasData';

interface BarraProps {
  titulo: string;
  descripcion: string;
  caracteristicas: string[];
  imagen: string;
  isReversed?: boolean;
}

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