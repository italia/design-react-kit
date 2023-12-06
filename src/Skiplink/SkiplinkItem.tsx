import React, { FC, ElementType, AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';

export interface SkiplinkItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente Skiplink */
  className?: string;
  /** Abilitare questo attributo per renderizzare lo SkipLinkItem al focus */
  focusable?: boolean;
  testId?: string;
}

export const SkiplinkItem: FC<SkiplinkItemProps> = ({
  className,
  tag = 'a',
  focusable = true,
  testId,
  ...attributes
}) => {
  const Tag = tag;
  const classes = classNames(className, {
    'visually-hidden-focusable': focusable
  });

  // Add an extra href for focusable if the user passes an onClick rather than href prop
  const extraHref = attributes.onClick ? { href: '#' } : {};

  return <Tag className={classes} {...attributes} {...extraHref} data-testid={testId} />;
};
