import React, { FC, HTMLAttributes, ReactChild } from 'react';
import classNames from 'classnames';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Classi aggiuntive da usare per il contenitore più esterno */
  wrapperClassName?: string;
  /** Classi aggiuntive da usare per il contenitore più interno */
  className?: string;
  /**
   * Colore utilizzato per lo sfondo del componente Section.
   * In caso di `primary` o `neutral` si consiglia di applicare la classe `.white-color` al contenuto per garantire la leggibilità dei testi contenuti.
   * */
  color?: 'primary' | 'neutral' | 'muted' | string;
  /**
   * Indicare l'URL dell'immagine da utilizzare come sfondo della sezione.
   */
  image?: string;
  /** Il contenuto della sezione */
  children?: ReactChild;
}

export const Section: FC<SectionProps> = ({
  color,
  image,
  wrapperClassName,
  className,
  children,
  ...rest
}) => {
  const classes = classNames('section', wrapperClassName, {
    [`section-${color}`]: color,
    'section-image': image
  });

  const innerClasses = classNames('section-content', className);

  const styleClass = {
    backgroundImageClass: {
      backgroundImage: `url(${image})`
    }
  };

  return (
    <div className={classes} style={styleClass.backgroundImageClass} {...rest}>
      <div className={innerClasses}>{children}</div>
    </div>
  );
};
