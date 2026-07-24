import { Hero } from "@/components/home/Hero";
import { QuienesSomos } from "@/components/home/QuienesSomos";
import { Servicios } from "@/components/home/Servicios";
import { NuestrasBarras } from "@/components/home/NuestrasBarras";
import { Gallery } from "@/components/home/Gallery";
import { Testimonios } from "@/components/home/Testimonios";
import { Contacto } from "@/components/home/Contacto";
import { Anexo } from "@/components/home/Anexo";

export default function Home() {
  return (
    <main className="text-white font-montserrat">
      {/* Hero — full width, no margin */}
      <Hero />

      <QuienesSomos />
      <Servicios />
      <Testimonios />
      <Gallery />
      <Contacto />
      <Anexo />
    </main>
  );
}
