import React, { FC, ElementType, AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';

export interface SkiplinkItemProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente Skiplink */
  className?: string;
}

export const SkiplinkItem: FC<SkiplinkItemProps> = ({
  className,
  tag: Tag = 'a',
  ...attributes
}) => {
  const classes = classNames(className, 'sr-only', 'sr-only-focusable');

  return <Tag className={classes} {...attributes} />;
};
