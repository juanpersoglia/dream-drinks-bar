'use client';

import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Logo y descripción */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-4">
              <Image
                src="/assets/logo.png"
                alt="DreamDrinks Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
                quality={100}
              />
            </div>
            <p className="text-gray-400 font-montserrat text-sm leading-relaxed">
              Coctelería premium para eventos únicos e inolvidables.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="text-center">
            <h3 className="text-white font-montserrat font-bold mb-4">Enlaces</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#quienes-somos" className="text-gray-400 hover:text-yellow-400 font-montserrat text-sm transition-colors">
                Quiénes Somos
              </Link>
              <Link href="#servicios" className="text-gray-400 hover:text-yellow-400 font-montserrat text-sm transition-colors">
                Servicios
              </Link>
              <Link href="#cartas-cocteles" className="text-gray-400 hover:text-yellow-400 font-montserrat text-sm transition-colors">
                Cartas de Cócteles
              </Link>
              <Link href="#nuestras-barras" className="text-gray-400 hover:text-yellow-400 font-montserrat text-sm transition-colors">
                Nuestras Barras
              </Link>
              <Link href="#galeria" className="text-gray-400 hover:text-yellow-400 font-montserrat text-sm transition-colors">
                Galería
              </Link>
              <Link href="#contactos" className="text-gray-400 hover:text-yellow-400 font-montserrat text-sm transition-colors">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Redes sociales */}
          <div className="text-center md:text-right">
            <h3 className="text-white font-montserrat font-bold mb-4">Seguinos</h3>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              <Link
                href="https://instagram.com/dreamdrinks"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-yellow-400 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              
              <Link
                href="https://facebook.com/dreamdrinks"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-yellow-400 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              
              <Link
                href="https://tiktok.com/@dreamdrinks"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-yellow-400 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </Link>
            </div>
            
            
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 font-montserrat text-sm">
                © {currentYear} DreamDrinks. Todos los derechos reservados.
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 font-montserrat text-sm">
                Desarrollado por{' '}
                <Link 
                  href="https://github.com/juansamuelfranco" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 font-medium transition-colors"
                >
                  Juan Samuel Franco
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
