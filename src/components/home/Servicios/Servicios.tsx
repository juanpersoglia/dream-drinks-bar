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

const ServicioCard = ({ titulo, descripcion, caracteristicas, imagen, isReversed = false }: ServicioProps) => {
  return (
    <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}>
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
