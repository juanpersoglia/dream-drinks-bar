'use client';

import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { galleryImages } from './galleryImages';
import { useGallery } from './useGallery';

export const Gallery = () => {
  const {
    isOpen,
    photoIndex,
    showMore,
    isDesktop,
    displayedPhotos,
    openLightbox,
    closeLightbox,
    toggleShowMore,
    hasMorePhotos,
    remainingPhotosCount,
  } = useGallery({ images: galleryImages, initialPhotosCount: 6 });

  return (
    <section id="galeria" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-white mb-4">
            Galería
          </h2>
          <p className="text-gray-300 mx-auto mb-4">
            Descubre algunos de nuestros eventos más memorables. Cada imagen cuenta la historia de momentos únicos creados con nuestros cócteles artesanales.
          </p>
          {/* Texto adicional para desktop */}
          {isDesktop && (
            <p className="text-sm text-gray-400">
              Haz clic en cualquier imagen para verla en pantalla completa
            </p>
          )}
        </div>

        {/* Grid de fotos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {displayedPhotos.map((image, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 aspect-square ${isDesktop ? 'cursor-pointer' : ''}`}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={100}
              />
              {/* Overlay solo en desktop al hacer hover */}
              {isDesktop && (
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
              )}
            </div>
          ))}
        </div>

        {/* Botón Ver Más */}
        {!showMore && hasMorePhotos && (
          <div className="text-center">
            <button
              onClick={toggleShowMore}
              className="max-w-xs mx-auto border-2 border-white/70 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 font-montserrat font-medium py-3 px-6 rounded-lg text-base transition-all duration-300 flex items-center gap-2 sm:w-auto justify-center"
            >
              Ver Más ({remainingPhotosCount} fotos más)
            </button>
          </div>
        )}

        {/* Lightbox */}
          <Lightbox
            open={isOpen}
            close={closeLightbox}
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
