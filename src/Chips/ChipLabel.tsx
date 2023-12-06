import React, { ElementType, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface ChipLabelProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente ChipLabel */
  className?: string;
  testId?: string;
}

export const ChipLabel: FC<ChipLabelProps> = ({ className, tag = 'span', testId, ...attributes }) => {
  const Tag = tag;
  const classes = classNames(className, 'chip-label');
  return <Tag {...attributes} className={classes} data-testid={testId} />;
};
