import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
export interface HeadersProps extends HTMLAttributes<HTMLElement> {
  /** Aggiunge un ombra per enfatizzare il componente rispetto alla pagina in cui è contenuto */
  shadow?: boolean;
  /** Aggiunge il comportamento "sticky" ai componenti Header contenuti */
  sticky?: boolean;
  /** Classi addizionali per il componente Headers */
  className?: string;
  testId?: string;
}

export const Headers: FC<HeadersProps> = ({ className, shadow = false, sticky = false, testId, ...attributes }) => {
  const classes = classNames(
    'it-header-wrapper',
    {
      'it-shadow': shadow,
      'it-header-sticky': sticky,
      'sticky-top': sticky

    },
    className
  );
  return <div className={classes} {...attributes} data-testid={testId}></div>;
};
