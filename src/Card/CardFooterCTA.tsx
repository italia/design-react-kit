import React, { FC, HTMLAttributes, ElementType } from 'react';
import classNames from 'classnames';

export interface CardFooterCTAProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente CardFooterCTA*/
  className?: string;
}

export const CardFooterCTA: FC<CardFooterCTAProps> = ({
  className,
  tag: Tag = 'div',
  ...attributes
}) => {
  const classes = classNames(className, 'it-card-footer');
  return <Tag className={classes} {...attributes} />;
};
