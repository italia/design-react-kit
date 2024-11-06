import React, { FC, HTMLAttributes } from 'react';

export interface ResponsiveImageProps extends HTMLAttributes<HTMLImageElement> {
  /** Un testo alternativo per descrivere l'immagine mostrata */
  alt: string;
  /** L'URI dell'immagine da mostrare */
  src: string;
  /** Il titolo dell'immagine */
  title?: string;
  testId?: string;
  /** Indica se l'immagine deve essere considerata proporzionata */
  proportioned?: boolean;
}

export const ResponsiveImage: FC<ResponsiveImageProps> = ({ alt, testId, proportioned=false, children, ...attributes }) => {
  if (children) {
    if (proportioned) {
      return(
        <div className='img-responsive-wrapper'>
          <div className='img-responsive'>
            <figure className='img-wrapper'>
              <img {...attributes} alt={alt}  className='figure-img img-fluid rounded' />
              {children}
            </figure>
          </div>
        </div>
      )
    } else {
      return(
        <figure className='figure img-full w-100 img-responsive-wrapper'>
          <img {...attributes} alt={alt}  className='figure-img img-fluid rounded' />
          {children}
        </figure>
      )
    }
  } else {
    return (
      <div className='img-responsive-wrapper' data-testid={testId}>
        <div className='img-responsive'>
          <div className='img-wrapper'>
            <img {...attributes} alt={alt} />
          </div>
        </div>
      </div>
    );
  }
};
