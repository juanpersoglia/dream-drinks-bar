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
      {/* bg-black */}
      <Hero />
      {/* bg-zinc-950 */}
      <QuienesSomos />
      {/* bg-black */}
       {/*<Metodo />
      bg-zinc-950 */}
      <Servicios />
      {/* bg-black */}
      {/*<NuestrasBarras />
       bg-zinc-950 */}
      <Testimonios />
      {/* bg-zinc-950 */}
      <Gallery />
      
      {/* bg-black */}
      <Contacto />
      {/* bg-black with border-t */}
      <Anexo />
    </main>
  );
}
