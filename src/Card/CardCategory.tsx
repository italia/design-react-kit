import React, { FC, HTMLAttributes, MouseEvent } from 'react';
import classNames from 'classnames';

import { Icon } from '../Icon/Icon';

export interface CardCategoryProps extends HTMLAttributes<HTMLElement> {
  /** Mostra un'icona nella Card. Passare il nome dell'icona per utilizzarlo. */
  iconName?: string;
  /** Mostra la data nella Card. Passare una data già formattata come stringa. */
  date?: string;
  /** Se usato come link, passare l'URL target. */
  href?: string;
  /** Descrizione della data (es. 'Data evento') */
  dateDescription?: string;
  /** Descrizione del testo (es. 'Titolo evento') */
  textDescription?: string;
  /** Titolo dell' icona */
  iconTitle?: string;
  /** Da utilizzare al posto di url quando la gestione del click è in JS */
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  testId?: string;
}

export const CardCategory: FC<CardCategoryProps> = ({
  iconName,
  iconTitle,
  date,
  href,
  onClick,
  testId,
  children,
  textDescription,
  dateDescription,
  ...rest
}) => {
  const classes = classNames({
    'category-top': date || ' ',
    'categoryicon-top': iconName
  });
  // Simple category link
  const categoryLink = !iconName && (
    <>
      {textDescription && <span className='visually-hidden'>{textDescription}</span>}
      <a href={href} className='category' onClick={onClick}>
        {children}
      </a>
    </>
  );
  const categoryDate = date && <span className='data'>{date}</span>;
  // Category with icon
  const categoryText = iconName && <span className='text'>{children}</span>;
  const categoryIcon = iconName && <Icon icon={iconName} title={iconTitle} />;

  return (
    <div className={classes} {...rest} data-testid={testId}>
      {categoryLink}
      {categoryIcon}
      {categoryText && textDescription && <span className='visually-hidden'>{textDescription}</span>}
      {categoryText}
      {dateDescription && <span className='visually-hidden'>{dateDescription}</span>}
      {categoryDate}
    </div>
  );
};
