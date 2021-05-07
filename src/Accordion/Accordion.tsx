import React, {ElementType, FC} from 'react';
import classNames from 'classnames'

export interface AccordionProps {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente Badge */
  className?: string;
}

export const Accordion: FC<AccordionProps> = ({tag: Tag = 'div', className, ...attributes}) => {
  const classes = classNames('collapse-div', className)

  return <Tag {...attributes} className={classes} />
}

