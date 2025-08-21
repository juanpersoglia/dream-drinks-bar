"use client";

export const QuienesSomos = () => {
  return (
    <section id="quienes-somos" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-montserrat font-bold text-white mb-8">
          Quienes Somos
        </h2>

        <div className="space-y-6">
          <p className="text-xl font-montserrat font-medium text-gray-300 leading-relaxed">
            Somos <span className="text-yellow-400 font-bold">DreamDrinks</span>
            , una empresa especializada en servicios de coctelería premium para
            eventos.
          </p>
{/* 
          <p className="text-lg font-montserrat font-medium text-gray-400 leading-relaxed">
            Con años de experiencia en el mundo de la coctelería, nuestro equipo
            de bartenders profesionales se dedica a crear momentos especiales a
            través de cócteles artesanales y un servicio de excelencia. Desde
            eventos íntimos hasta grandes celebraciones, adaptamos nuestro
            servicio a las necesidades específicas de cada cliente.
          </p> */}

          <p className="text-lg font-montserrat font-medium text-gray-400 leading-relaxed">
            Cada trago es una obra, cada evento una galería. Creamos
            experiencias sensoriales donde el sabor y la estética van de la
            mano. Dream Drinks: más que coctelería, una experiencia.
          </p>
        </div>
      </div>
    </section>
  );
};
