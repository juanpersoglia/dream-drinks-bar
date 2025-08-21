import { Hero } from "@/components/home/Hero";
import { Gallery } from "@/components/home/Gallery";
import { Servicios } from "@/components/home/Servicios";
import { NuestrasBarras } from "@/components/home/NuestrasBarras";
import { CartasCocteles } from "@/components/home/CartasCocteles";
import { QuienesSomos } from "@/components/home/QuienesSomos";
import { Contacto } from "@/components/home/Contacto";

const LineDivider = () => (
  <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-8"></div>
);

export default function Home() {
  return (
    <main className="bg-black-primary text-white font-montserrat">
      <Hero />
      <LineDivider />
      <QuienesSomos />
      <LineDivider />
      <Servicios />
      <LineDivider />
      <CartasCocteles />
      <LineDivider />
      <NuestrasBarras />
      <LineDivider />
      <Gallery />
      <LineDivider />
      <Contacto />
    </main>
  );
}
