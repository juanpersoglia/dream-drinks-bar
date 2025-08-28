"use client";
import { CartaCard } from "./CartaCard";
import { cartasData } from "./cartasData";

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
              href="https://wa.me/+5493794347949?text=Hola!%20Me%20interesa%20una%20carta%20personalizada%20de%20cócteles%20para%20mi%20evento."
              target="_blank"
              rel="noopener noreferrer"
              className="max-w-xs mx-auto border-2 border-white/70 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 font-montserrat font-medium py-3 px-6 rounded-lg text-base transition-all duration-300 flex items-center gap-2 sm:w-auto justify-center"
            >
              Solicitar carta personalizada
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
