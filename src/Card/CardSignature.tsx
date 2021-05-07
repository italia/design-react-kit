import React, {FC, HTMLAttributes, ElementType} from 'react';
import classNames from 'classnames'


export interface CardSignatureProps extends HTMLAttributes<HTMLElement>{
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente CardSignature*/
  className?: string;
}

export const CardSignature: FC<CardSignatureProps> = ({ className, tag:Tag = 'span', ...attributes }) => {
  const classes = classNames(className, 'card-signature')
  return <Tag className={classes} {...attributes} />
}
