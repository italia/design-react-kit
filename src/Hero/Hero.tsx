import React, { FC, HTMLAttributes, ElementType } from 'react';
import classname from 'classnames';

export interface HeroProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Indica se il componente Hero deve ridurre l'altezza */
  small?: boolean;
  /** Indica al componente Hero di centrare i contenuti testuali orizzontalmente */
  centered?: boolean;
  /** Da utilizzare per creare un testi in overlay su immagini, al fine di migliorare la leggibilità di testo */
  overlay?: 'dark' | 'primary' | 'filter';
  /** Aggiunge margine negativo in fondo al componente Hero per creare una sovrapposizione con il contenuto seguente. */
  overlap?: boolean;
  testId?: string;
}

export const Hero: FC<HeroProps> = ({
  tag: Tag = 'div',
  small,
  centered,
  overlay,
  overlap,
  className,
  testId,
  ...attributes
}) => {
  const classes = classname('it-hero-wrapper', className, {
    'it-overlay': overlay,
    ['it-' + overlay]: overlay,
    'it-hero-small-size': small,
    'it-text-centered': centered,
    'it-bottom-overlapping-content': overlap
  });
  return <Tag className={classes} {...attributes} data-testid={testId} />;
};
