import React, { ElementType, FC } from 'react';
import classNames from 'classnames';

export interface AccordionItemProps {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente */
  className?: string;
}

export const AccordionItem: FC<AccordionItemProps> = ({ tag = 'div', className, ...attributes }) => {
  const Tag = tag;
  const classes = classNames('accordion-item', className);

  return <Tag {...attributes} className={classes} />;
};
