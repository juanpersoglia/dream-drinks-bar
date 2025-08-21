import Hero from "@/components/home/Hero";
import Gallery from "@/components/home/Gallery";
import Servicios from "@/components/home/Servicios";
import NuestrasBarras from "@/components/home/NuestrasBarras";
import CartasCocteles from "@/components/home/CartasCocteles";
import QuienesSomos from "@/components/home/QuienesSomos";
import Contacto from "@/components/home/Contacto";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <main className="bg-black-primary text-white font-montserrat">
      <Hero />

      {/* Línea divisora */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

      <QuienesSomos />

      {/* Línea divisora */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

      <Servicios />

      {/* Línea divisora */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

      <CartasCocteles />

      {/* Línea divisora */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

      <NuestrasBarras />

      {/* Línea divisora */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

      <Gallery />

      {/* Línea divisora */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

      <Contacto />
      
      <Footer />
    </main>
  );
}
