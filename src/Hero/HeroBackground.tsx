import React, { FC, HTMLAttributes } from 'react';

export interface HeroBackgroundProps extends HTMLAttributes<HTMLImageElement> {
  /** Un testo alternativo per descrivere l'immagine mostrata */
  alt: string;
  /** L'URI dell'immagine da mostrare */
  src: string;
  /** Il titolo dell'immagine */
  title?: string;
}

export const HeroBackground: FC<HeroBackgroundProps> = ({
  alt,
  ...attributes
}) => {
  return (
    <div className='img-responsive-wrapper'>
      <div className='img-responsive'>
        <div className='img-wrapper'>
          <img {...attributes} alt={alt} />
        </div>
      </div>
    </div>
  );
};
