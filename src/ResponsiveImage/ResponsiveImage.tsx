import React, { FC, HTMLAttributes } from 'react';

export interface ResponsiveImageProps extends HTMLAttributes<HTMLImageElement> {
  /** Un testo alternativo per descrivere l'immagine mostrata */
  alt: string;
  /** L'URI dell'immagine da mostrare */
  src: string;
  /** Il titolo dell'immagine */
  title?: string;
}

export const ResponsiveImage: FC<ResponsiveImageProps> = ({
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
