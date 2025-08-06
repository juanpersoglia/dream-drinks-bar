import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main>
      <Hero />
      
      {/* Secciones temporales para navegación */}
      <section id="quienes-somos" className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-montserrat font-bold text-white mb-4">Quienes Somos</h2>
          <p className="text-lg font-montserrat font-medium text-gray-300">Contenido de la sección próximamente...</p>
        </div>
      </section>

      <section id="servicios" className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-montserrat font-bold text-white mb-4">Servicios</h2>
          <p className="text-lg font-montserrat font-medium text-gray-300">Contenido de la sección próximamente...</p>
        </div>
      </section>

      <section id="cartas-cocteles" className="min-h-screen bg-gray-800 flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-montserrat font-bold text-white mb-4">Cartas de Cócteles</h2>
          <p className="text-lg font-montserrat font-medium text-gray-300">Contenido de la sección próximamente...</p>
        </div>
      </section>

      <section id="nuestras-barras" className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-montserrat font-bold text-white mb-4">Nuestras Barras</h2>
          <p className="text-lg font-montserrat font-medium text-gray-300">Contenido de la sección próximamente...</p>
        </div>
      </section>

      <Gallery />

      <section id="contactos" className="min-h-screen bg-zinc-900 flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-montserrat font-bold text-white mb-4">Contactos</h2>
          <p className="text-lg font-montserrat font-medium text-gray-300">Contenido de la sección próximamente...</p>
        </div>
      </section>
    </main>
  );
}
