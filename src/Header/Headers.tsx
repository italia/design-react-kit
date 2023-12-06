import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { Sticky, StickyProvider } from 'react-stickup';

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
      'it-header-sticky': sticky
    },
    className
  );
  if (!sticky) {
    return <div className={classes} {...attributes} data-testid={testId}></div>;
  }
  return (
    <StickyProvider>
      <Sticky style={{ position: 'sticky', zIndex: 2 }} data-testid={testId}>
        <div className={classes} {...attributes}></div>
      </Sticky>
    </StickyProvider>
  );
};
