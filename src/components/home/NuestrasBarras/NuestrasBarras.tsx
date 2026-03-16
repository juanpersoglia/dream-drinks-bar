'use client';

import Image from 'next/image';
import { barrasData } from './barrasData';

interface BarraProps {
  titulo?: string;
  descripcion?: string;
  caracteristicas?: string[];
  imagen?: string;
  isReversed?: boolean;
}

export const NuestrasBarras = () => {
  return (
    <section id="nuestras-barras" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-center text-center mb-16`}>
       {/* Contenido */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h2>
          ESTÉTICA Y BARRAS
        </h2>
        
        <p className="text-gray-300 leading-relaxed">
          Contamos con una selección de barras diseñadas para integrarse de forma armónica a la estética de cada evento.
        </p>

        <p className="text-gray-300 leading-relaxed">
         Cada propuesta combina diseño, funcionalidad y presencia visual, convirtiendo la barra en un elemento central de la experiencia.
        </p>

        <p className="text-gray-300 leading-relaxed">
          Cuidamos cada detalle para que la barra no solo acompañe el evento, sino que lo eleve.
        </p>

      </div>
      {/* Imagen */}
      <div className="w-full lg:w-1/2">
        <div className="relative aspect-[4/3]  overflow-hidden shadow-2xl">
          <Image
            src={'/assets/hexagonal.jpg'}
            alt={'ESTÉTICA Y BARRAS'}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      </div>

     
    </div>
    </section>
  );
};