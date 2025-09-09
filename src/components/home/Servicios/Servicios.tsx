"use client";

import { ServicioCard } from "./ServiciosCard";
import { serviciosData } from "./serviciosData";

export const Servicios = () => {
  return (
    <section id="servicios" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transformamos cada celebración en una experiencia única. Desde
            eventos íntimos hasta grandes celebraciones, tenemos el servicio
            perfecto para hacer de tu evento algo inolvidable.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="space-y-24 lg:space-y-32">
          {serviciosData.map((servicio, index) => (
            <ServicioCard
              key={index}
              titulo={servicio.titulo}
              descripcion={servicio.descripcion}
              caracteristicas={servicio.caracteristicas}
              imagen={servicio.imagen}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
