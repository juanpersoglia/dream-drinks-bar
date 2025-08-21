'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// Imágenes de la galería desde assets locales
const galleryImages = [
  {
    src: '/assets/galery/00005.jpg',
    alt: 'Evento DreamDrinks - Momento especial',
    width: 800,
    height: 600,
  },
  {
    src: '/assets/galery/00024.jpg',
    alt: 'Celebración con cócteles artesanales',
    width: 800,
    height: 600,
  },
  {
    src: '/assets/galery/00025.jpg',
    alt: 'Bar profesional en evento',
    width: 800,
    height: 600,
  },
  {
    src: '/assets/galery/00030.jpg',
    alt: 'Experiencia única de cócteles',
    width: 800,
    height: 600,
  },
  {
    src: '/assets/galery/00060.jpg',
    alt: 'Evento nocturno con DreamDrinks',
    width: 800,
    height: 600,
  },
  {
    src: '/assets/galery/00063.jpg',
    alt: 'Bartender profesional en acción',
    width: 800,
    height: 600,
  },
  {
    src: '/assets/galery/00064.jpg',
    alt: 'Servicio de bar móvil premium',
    width: 800,
    height: 600,
  },
  {
    src: '/assets/galery/00079.jpg',
    alt: 'Ambiente festivo con cócteles',
    width: 800,
    height: 600,
  },
  {
    src: '/assets/galery/00088.jpg',
    alt: 'Momentos únicos en eventos',
    width: 800,
    height: 600,
  },
  {
    src: '/assets/galery/coctail.jpg',
    alt: 'Cóctel artesanal DreamDrints',
    width: 800,
    height: 600,
  },
  {
    src: '/assets/galery/oldschool.jpg',
    alt: 'Estilo clásico en eventos',
    width: 800,
    height: 600,
  },
];

export const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  // Mostrar solo las primeras 6 fotos inicialmente
  const initialPhotosCount = 6;
  const displayedPhotos = showMore ? galleryImages : galleryImages.slice(0, initialPhotosCount);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <section id="galeria" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-montserrat font-bold text-white mb-4">
            Galería
          </h2>
          <p className="text-lg font-montserrat font-medium text-gray-300 max-w-2xl mx-auto mb-4">
            Descubre algunos de nuestros eventos más memorables. Cada imagen cuenta la historia de momentos únicos creados con nuestros cócteles artesanales.
          </p>
          {/* Texto adicional para desktop */}
          <p className="hidden md:block text-sm font-montserrat text-gray-400">
            Haz clic en cualquier imagen para verla en pantalla completa
          </p>
        </div>

        {/* Grid de fotos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {displayedPhotos.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 aspect-square cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Overlay solo en desktop al hacer hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Ver Más */}
        {!showMore && galleryImages.length > initialPhotosCount && (
          <div className="text-center">
            <button
              onClick={() => setShowMore(true)}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-montserrat font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-yellow-400/30"
            >
              Ver Más ({galleryImages.length - initialPhotosCount} fotos más)
            </button>
          </div>
        )}

        {/* Lightbox */}
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            index={photoIndex}
            slides={galleryImages.map((image) => ({
              src: image.src,
              alt: image.alt,
            }))}
            styles={{
              container: { backgroundColor: 'rgba(0, 0, 0, 0.9)' },
            }}
          />
      </div>
    </section>
  );
};
