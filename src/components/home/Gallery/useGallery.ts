import { useState, useEffect } from 'react';

interface GalleryImage {
  src: string;
  alt: string;
}

interface UseGalleryProps {
  images: GalleryImage[];
  initialPhotosCount?: number;
}

export const useGallery = ({ images, initialPhotosCount = 6 }: UseGalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detectar si estamos en desktop para habilitar el lightbox
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  // Mostrar solo las primeras fotos inicialmente
  const displayedPhotos = showMore ? images : images.slice(0, initialPhotosCount);

  const openLightbox = (index: number) => {
    // Solo abrir lightbox en desktop
    if (isDesktop) {
      setPhotoIndex(index);
      setIsOpen(true);
    }
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return {
    // Estados
    isOpen,
    photoIndex,
    showMore,
    isDesktop,
    displayedPhotos,
    
    // Funciones
    openLightbox,
    closeLightbox,
    toggleShowMore,
    
    // Información útil
    hasMorePhotos: images.length > initialPhotosCount,
    remainingPhotosCount: images.length - initialPhotosCount,
  };
};
