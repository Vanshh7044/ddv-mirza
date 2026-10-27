// Responsive srcset for our photos: every .webp under /images (except posters) has an 800px "-800" twin.
export const srcSet = (src?: string) =>
  src && /^\/images\/.+\.webp$/.test(src) && !src.includes('poster')
    ? `${src.replace(/\.webp$/, '-800.webp')} 800w, ${src} 1600w`
    : undefined;

export const CARD_SIZES = '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw';
