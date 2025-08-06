import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DreamDrinks - Cócteles Premium para Eventos",
  description: "Servicio de bar móvil y cócteles artesanales para eventos. Transformamos tus celebraciones en experiencias únicas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} font-montserrat antialiased`}
        suppressHydrationWarning={true}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
