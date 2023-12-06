import React, { ElementType, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface CookieBarButtonsProps extends HTMLAttributes<HTMLElement> {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente CookieBarButtons */
  className?: string;
  testId?: string;
}

export const CookieBarButtons: FC<CookieBarButtonsProps> = ({ className, tag = 'div', testId, ...attributes }) => {
  const Tag = tag;
  const buttonClasses = classNames(className, 'cookiebar-buttons');
  return <Tag className={buttonClasses} {...attributes} data-testid={testId} />;
};
