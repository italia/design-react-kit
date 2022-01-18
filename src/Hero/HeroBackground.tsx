import React, { FC, HTMLAttributes } from 'react';

export interface HeroBackgroundProps extends HTMLAttributes<HTMLImageElement> {
  /** Un testo alternativo per descrivere l'immagine mostrata */
  alt: string;
  /** L'URI dell'immagine da mostrare */
  src: string;
  /** Il titolo dell'immagine */
  title?: string;
  testId?: string;
}

export const HeroBackground: FC<HeroBackgroundProps> = ({
  alt,
  testId,
  ...attributes
}) => {
  return (
    <div className='img-responsive-wrapper' data-testid={testId}>
      <div className='img-responsive'>
        <div className='img-wrapper'>
          <img {...attributes} alt={alt} />
        </div>
      </div>
    </div>
  );
};
