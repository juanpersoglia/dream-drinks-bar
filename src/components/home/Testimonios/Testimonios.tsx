"use client";

import { useRef, useState, useCallback, useEffect } from "react";

const testimonios = [
  {
    nombre: "María & Juan",
    evento: "Boda · Corrientes",
    texto:
      "Desde el primer contacto hasta el último cóctel, todo fue impecable. La barra fue uno de los grandes atractivos de la noche y nuestros invitados no dejaron de felicitarnos.",
    estrellas: 5,
  },
  {
    nombre: "Valentina M.",
    evento: "Fiesta de 15 · Corrientes",
    texto:
      "La barra fue lo que más comentaron todos los invitados. Los bartenders increíbles, atentos y con una presencia impecable. ¡Volvería a contratarlos sin dudar!",
    estrellas: 5,
  },
  {
    nombre: "Rodrigo P.",
    evento: "Evento corporativo",
    texto:
      "Profesionales de verdad. Llegaron antes, montaron todo sin inconvenientes y el servicio fue de primer nivel. Los cócteles, espectaculares.",
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
    evento: "Cumpleaños · Resistencia",
    texto:
      "Desde la propuesta inicial hasta el último trago, todo fue perfecto. Atención personalizada y un resultado que realmente elevó el evento.",
    estrellas: 5,
  },
  {
    nombre: "Carolina S.",
    evento: "Aniversario · Corrientes",
    texto:
      "Elegancia, profesionalismo y sabor en cada detalle. Nuestros invitados quedaron encantados y nosotros no podríamos haber pedido más.",
    estrellas: 5,
  },
];

const empresas = [
  "Corrientes Tennis Club",
  "Torre Rivera",
  "Grupo Meucci · Royal Enfield",
  "Consejo de Ciencias Económicas de Corrientes",
  "Colegio de Bioquímicos",
];

const StarIcon = () => (
  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export const Testimonios = () => {
  const [current, setCurrent] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Update active dot based on scroll position
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(el.children).indexOf(entry.target as HTMLElement);
            if (index !== -1) setCurrent(index);
          }
        });
      },
      { root: el, threshold: 0.6 }
    );
    Array.from(el.children).forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const scrollTo = useCallback((index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement;
    if (card) el.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  }, []);

  const prev = () => scrollTo((current - 1 + testimonios.length) % testimonios.length);
  const next = () => scrollTo((current + 1) % testimonios.length);

  return (
    <section id="testimonios" className="py-20 bg-zinc-900">
      <style>{`
        .testimonios-scroll { scrollbar-width: none; -ms-overflow-style: none; }
        .testimonios-scroll::-webkit-scrollbar { display: none; }
        @keyframes marquee-slide {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-slide 28s linear infinite;
        }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="mb-4">Lo que dicen quienes confiaron en nosotros</h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            La mayor satisfacción de nuestro trabajo es formar parte de momentos únicos y
            superar las expectativas de cada cliente. Estas son algunas de las experiencias de
            quienes eligieron Dream Drinks para sus eventos.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Prev */}
          <button
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hidden sm:flex"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards */}
          <div
            ref={scrollerRef}
            className="testimonios-scroll flex gap-5 overflow-x-auto"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {testimonios.map((t, i) => (
              <div
                key={i}
                style={{ scrollSnapAlign: "start" }}
                className="flex-shrink-0 w-[82vw] sm:w-[calc(50%-10px)] lg:w-[calc(33.33%-14px)] bg-white/[0.04] border border-white/8 rounded-2xl p-7 flex flex-col gap-5 hover:border-yellow-400/25 transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: t.estrellas }).map((_, j) => (
                    <StarIcon key={j} />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 text-sm leading-relaxed flex-1">
                  &ldquo;{t.texto}&rdquo;
                </p>

                {/* Client */}
                <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                  <div className="w-9 h-9 rounded-full bg-yellow-400/15 flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-400 font-bold text-sm">{t.nombre[0]}</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold leading-tight">{t.nombre}</p>
                    <p className="text-yellow-400/60 text-xs mt-0.5">{t.evento}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            aria-label="Siguiente"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-200 hidden sm:flex"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-7">
          {testimonios.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-yellow-400" : "w-1.5 bg-white/20"
              }`}
              aria-label={`Ir al testimonio ${i + 1}`}
            />
          ))}
        </div>

        {/* Footer text */}
        <p className="text-center text-gray-500 text-sm mt-12 max-w-2xl mx-auto leading-relaxed">
          * Más de 850 eventos realizados y cientos de clientes que confiaron en nosotros para
          acompañar algunos de los momentos más importantes de sus vidas.
        </p>

        {/* Empresas que confiaron */}
        <div className="border-t border-white/8 pt-14 mt-14 overflow-hidden">
          <p className="text-center text-gray-500 text-xs uppercase tracking-widest mb-10">
            Empresas que confiaron en nosotros
          </p>
          <div className="overflow-hidden">
            <div className="marquee-track flex gap-16 w-max">
              {[...empresas, ...empresas].map((empresa, i) => (
                <span
                  key={i}
                  className="text-white/40 hover:text-white/80 text-sm font-semibold tracking-wide uppercase whitespace-nowrap transition-colors duration-300 cursor-default"
                >
                  {empresa}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
