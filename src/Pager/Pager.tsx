import React, { FC, HTMLAttributes, ElementType } from 'react';
import classNames from 'classnames';

export interface PagerProps extends HTMLAttributes<HTMLElement> {
  /** Etichetta di descrizione del contenuto del componente Pager */
  'aria-label': string;
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente Badge */
  className?: string;
  /** Utilizzare questo attributo per indicare il numero totale di pagine */
  total?: { ariaLabel: string; label: string };
}

export const Pager: FC<PagerProps> = ({
  className,
  tag: Tag = 'nav',
  children,
  total,
  ...attributes
}) => {
  const classes = classNames(className, 'pagination-wrapper', {
    'pagination-total': total
  });
  const { ariaLabel, label } = total || {};
  const totalAriaLabel = ariaLabel ? (
    <span className='sr-only'>{ariaLabel}</span>
  ) : null;
  return (
    <Tag className={classes} {...attributes}>
      {children}
      {total ? (
        <p>
          {totalAriaLabel}
          {label}
        </p>
      ) : null}
    </Tag>
  );
};
