'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const leftNavItems = [
    { href: '#quienes-somos', label: 'Quienes somos' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#cartas-cocteles', label: 'Cartas' },
  ];

  const rightNavItems = [
    { href: '#nuestras-barras', label: 'Nuestras barras' },
    { href: '#galeria', label: 'Galería' },
    { href: '#contactos', label: 'Contactos' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Left Navigation - Hidden on mobile */}
          <div className="hidden lg:flex space-x-8">
            {leftNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-gold-400 font-montserrat font-semibold transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/logos/logo-degradado.PNG"
                alt="DreamDrinks Logo"
                width={200}
                height={80}
                className="h-10 sm:h-12 lg:h-14 w-auto"
                priority
                quality={100}
              />
            </Link>
          </div>

          {/* Right Navigation - Hidden on mobile */}
          <div className="hidden lg:flex space-x-8">
            {rightNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-gold-400 font-montserrat font-semibold transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gold-400 focus:outline-none focus:text-gold-400"
              aria-label="Abrir menú"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95 backdrop-blur-sm border-t border-gold-400/30">
              {[...leftNavItems, ...rightNavItems].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-montserrat font-semibold text-white hover:text-gold-400 hover:bg-white/10 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

