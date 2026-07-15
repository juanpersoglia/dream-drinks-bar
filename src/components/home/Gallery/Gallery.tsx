'use client';

import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { galleryImages } from './galleryImages';
import { useGallery } from './useGallery';

// 24 aspectos mezclados manualmente para máxima variedad en bloques de 2, 3 y 4 columnas
const ASPECT_SEQUENCE = [
  'aspect-[4/3]',   //  0  wide
  'aspect-[2/3]',   //  1  very tall
  'aspect-square',  //  2  square
  'aspect-[3/4]',   //  3  tall
  'aspect-[4/5]',   //  4  tall-ish
  'aspect-[4/3]',   //  5  wide
  'aspect-[3/4]',   //  6  tall
  'aspect-square',  //  7  square
  'aspect-[4/3]',   //  8  wide
  'aspect-[2/3]',   //  9  very tall
  'aspect-[4/5]',   // 10  tall-ish
  'aspect-square',  // 11  square
  'aspect-[3/4]',   // 12  tall
  'aspect-[4/3]',   // 13  wide
  'aspect-[2/3]',   // 14  very tall
  'aspect-[4/5]',   // 15  tall-ish
  'aspect-square',  // 16  square
  'aspect-[4/3]',   // 17  wide
  'aspect-[3/4]',   // 18  tall
  'aspect-[2/3]',   // 19  very tall
  'aspect-square',  // 20  square
  'aspect-[4/5]',   // 21  tall-ish
  'aspect-[4/3]',   // 22  wide
  'aspect-[3/4]',   // 23  tall
];

export const Gallery = () => {
  const { displayedImages, hasMore, loadMore, lightboxIndex, openLightbox, closeLightbox } =
    useGallery(galleryImages);

  return (
    <section id="galeria" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-white mb-4">Galería</h2>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Cada evento cuenta una historia diferente.
            <br />
            Descubrí algunos de los momentos que tuvimos el privilegio de acompañar, donde el
            diseño, la coctelería y el servicio se unieron para crear experiencias inolvidables.
          </p>
        </div>

        {/* Masonry grid + gradient cut */}
        <div className="relative">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
            {displayedImages.map((img, i) => {
              const aspectClass = ASPECT_SEQUENCE[i % ASPECT_SEQUENCE.length];
              return (
                <div
                  key={img.src + i}
                  className={`relative ${aspectClass} mb-3 break-inside-avoid overflow-hidden rounded-lg cursor-pointer group`}
                  onClick={() => openLightbox(i)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    quality={80}
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <svg
                      className="w-9 h-9 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Gradient cut — visible mientras haya más imágenes */}
          {hasMore && (
            <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
          )}
        </div>

        {/* Botón Ver más */}
        {hasMore && (
          <div className="mt-10 text-center">
            <button
              onClick={loadMore}
              className="inline-flex items-center gap-2 border-2 border-white/70 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 font-montserrat font-medium py-3 px-8 rounded-lg text-base transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Ver más fotografías
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex !== null}
        close={closeLightbox}
        index={lightboxIndex ?? 0}
        slides={galleryImages.map((img) => ({ src: img.src, alt: img.alt }))}
        styles={{ container: { backgroundColor: 'rgba(0,0,0,0.97)' } }}
      />
    </section>
  );
};
