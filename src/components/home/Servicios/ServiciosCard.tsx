import Image from "next/image";

interface ServicioProps {
  titulo: string;
  descripcion: string;
  caracteristicas: string[];
  imagen: string;
  isReversed?: boolean;
}

export const ServicioCard = ({
  titulo,
  descripcion,
  caracteristicas,
  imagen,
  isReversed = false,
}: ServicioProps) => {
  return (
    <div
      className={`flex flex-col ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-8 lg:gap-12 items-center`}
    >
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
              <span className="font-montserrat font-medium">
                {caracteristica}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
