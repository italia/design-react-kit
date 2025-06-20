import React, { FC, HTMLAttributes, ElementType } from 'react';
import classNames from 'classnames';

export interface PagerProps extends HTMLAttributes<HTMLElement> {
  /** Etichetta di descrizione del contenuto del componente Pager */
  'aria-label': string;
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati per la l'elemento lista interno */
  listTag?: ElementType;
  /** Classi aggiuntive da usare per il componente Pager */
  className?: string;
  /** Classi aggiuntive da usare per il componente di lista interno Pager */
  listClassName?: string;
  /** Utilizzare questo attributo per indicare il numero totale di pagine */
  total?: { ariaLabel: string; label: string };
  testId?: string;
}

export const Pager: FC<PagerProps> = ({
  className,
  tag = 'nav',
  listTag: ListTag = 'ul',
  listClassName,
  children,
  total,
  testId,
  ...attributes
}) => {
  const Tag = tag;
  const classes = classNames(className, 'pagination-wrapper', {
    'pagination-total': total
  });
  const listClasses = classNames(listClassName, 'pagination');
  const { ariaLabel, label } = total || {};
  const totalAriaLabel = ariaLabel ? <span className='visually-hidden'>{ariaLabel}</span> : null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const listChildren = React.Children.toArray(children).filter((child: any) => child.type.name === 'PaginationItem');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const extraChildren = React.Children.toArray(children).filter((child: any)=> child.type.name !== 'PaginationItem');

  // listChildren?.forEach(child => {
  //   console.log(child)
  // })

  return (
    <Tag className={classes} {...attributes} data-testid={testId}>
      <ListTag className={listClasses}>{listChildren}</ListTag>
      {extraChildren}
      {total ? (
        <p>
          {totalAriaLabel}
          {label}
        </p>
      ) : null}
    </Tag>
  );
};
