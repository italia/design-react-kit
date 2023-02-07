import React, { ElementType, FC } from 'react';
import classNames from 'classnames';

export interface AccordionProps {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente Badge */
  className?: string;
  /** Utilizzare questo attributo per ottenere header con sfondo di colore primario quando questi è attivo o all’hover. */
  background?: 'active' | 'hover';
  /** Utilizzare questo attributo per mostrare, mediante un'icona a sinistra, lo stato di apertura */
  iconLeft?: boolean;
  testId?: string;
}

export const Accordion: FC<AccordionProps> = ({
  tag = 'div',
  className,
  background,
  iconLeft = false,
  testId,
  ...attributes
}) => {
  const Tag = tag;
  const classes = classNames('accordion', className, {
    'accordion-background-active': background === 'active',
    'accordion-background-hover': background === 'hover',
    'accordion-left-icon': iconLeft
  });

  return <Tag {...attributes} className={classes} data-testid={testId} />;
};
