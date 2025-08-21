'use client';

import Image from 'next/image';

interface ServicioProps {
  titulo: string;
  descripcion: string;
  caracteristicas: string[];
  imagen: string;
  isReversed?: boolean;
}

const serviciosData = [
  {
    titulo: "Bar en tu Evento",
    descripcion: "Ofrecemos servicio de bar para eventos sociales y corporativos, brindando una atención personalizada a nuestros clientes y sus invitados. Contamos con el conocimiento y estructura para poder adaptarnos a cualquier ambiente y formato.",
    caracteristicas: [
      "Bartenders profesionales",
      "Equipamiento completo de bar",
      "Adaptación a cualquier ambiente",
      "Servicio personalizado",
      "Eventos sociales y corporativos"
    ],
    imagen: "/assets/coctail.jpg"
  },
  {
    titulo: "Cocktail Workshops",
    descripcion: "Servicio de Workshops de Coctelería, donde junto con tus invitados van a poder aprender a hacer cócteles clásicos y, por supuesto, degustarlos! Una experiencia única de aproximadamente 3 horas.",
    caracteristicas: [
      "Duración: 3 horas aproximadamente",
      "Aprendizaje de 4 cócteles clásicos",
      "Práctica y teoría incluida",
      "Para grupos de 8 a 12 personas",
      "Experiencia interactiva única"
    ],
    imagen: "/assets/oldschool.jpg"
  },
  {
    titulo: "Catas y Degustaciones",
    descripcion: "Servicio de Catas personalizadas para grupos desde 8 a 20 personas, tanto para experiencias en domicilios privados como empresas. Ofrecemos catas de Whisky, Gin, Vinos y Espumantes.",
    caracteristicas: [
      "Duración: 1:30hs a 2:00hs",
      "Degustación de 4 etiquetas premium",
      "Dirigido por sommelier especializado",
      "Para grupos de 8 a 20 personas",
      "Catas de Whisky, Gin, Vinos y Espumantes"
    ],
    imagen: "/assets/coctail.jpg"
  },
  {
    titulo: "Catering Premium",
    descripcion: "Ahora podés tener en tu evento nuestra coctelería de alto nivel junto con gastronomía exclusiva. Agasajá a tus invitados y llevá tu evento al siguiente nivel con nuestra propuesta integral.",
    caracteristicas: [
      "Coctelería de alto nivel",
      "Gastronomía exclusiva",
      "Para grupos de 50 a 150 personas",
      "Eventos en CABA y GBA",
      "Casamientos, cumpleaños y eventos corporativos"
    ],
    imagen: "/assets/oldschool.jpg"
  }
];

const BLUR_PLACEHOLDER = 'data:image/jpeg;base64,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';

const ServicioCard = ({ titulo, descripcion, caracteristicas, imagen, isReversed = false }: ServicioProps) => {
  return (
    <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}>
      {/* Imagen */}
      <div className="w-full lg:w-1/2">
        <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
          <Image
            src={imagen}
            alt={titulo}
            fill // esta prop hace que la imagen ocupe todo el contenedor padre
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={100}
            placeholder='blur'
            blurDataURL={BLUR_PLACEHOLDER}
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

export const Servicios = () => {
  return (
    <section id="servicios" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-white mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl font-montserrat font-medium text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transformamos cada celebración en una experiencia única. Desde eventos íntimos hasta grandes celebraciones, 
            tenemos el servicio perfecto para hacer de tu evento algo inolvidable.
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
