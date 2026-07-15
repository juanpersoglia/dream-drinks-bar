"use client";

import Image from "next/image";
import { ServicioCard } from "./ServiciosCard";
import { serviciosData } from "./serviciosData";

export const Servicios = () => {
  const whatsappNumber = "+5493794347949";
  const whatsappMessage =
    "Hola! Me gustaría cotizar una barra para mi evento.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="servicios" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4">Nuestras Barras</h2>
          <h3 className="mb-4">Elegí el diseño que mejor represente tu evento.</h3>
          <p className="text-gray-400 max-w-5xl mx-auto">
            Cada celebración es diferente. Por eso desarrollamos una línea de barras modulares que
            combinan diseño, funcionalidad y versatilidad.
          </p>
          <p className="text-gray-400 max-w-5xl mx-auto mt-4">
            Primero elegí la estética que más te identifique y luego la modalidad de montaje que
            mejor se adapte al espacio disponible.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-28">
          {serviciosData.map((servicio, index) => (
            <ServicioCard
              key={index}
              titulo={servicio.titulo}
              descripcion={servicio.descripcion}
              imagen={servicio.imagen}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>

        <div className="mt-20 border-t border-white/10 pt-16">
          <h3 className="text-center text-white text-xl font-semibold tracking-wide uppercase mb-12">
            Adaptamos la barra a tu evento.
          </h3>
          <p className="text-gray-400 max-w-5xl mx-auto text-center">
            Independientemente de la estética que elijas, nuestras barras pueden configurarse de
            distintas maneras para adaptarse a la cantidad de invitados, la circulación y las
            características del lugar del evento.
          </p>

          <div className="mt-12 flex justify-center">
            <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden">
              <Image
                src="/assets/barritas.jpeg"
                alt="Configuraciones de barras Dream Drinks"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
