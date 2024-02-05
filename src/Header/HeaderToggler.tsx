import React, { ElementType, ButtonHTMLAttributes, useEffect } from 'react';
import classNames from 'classnames';
import { NavbarToggler } from 'reactstrap';

import { SLIM, NAVBAR, useHeaderContext } from './HeaderContext';

export interface HeaderTogglerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Tipo di elemento DOM da utilizzare: di default "a" per Header Slim, "button" per altri tipi di Header.
   * Se fornito questo sovrascriverà il valore di default.
   */
  tag?: ElementType;
  /** Classi aggiuntive da usare per il componente HeaderToggler */
  className?: string;
  /** Indica l'attributo "type" sull'elemento DOM. Di default '' per Header Slim, "button" per altri tipi di Header.
   * Se fornito questo sovrascriverà il valore di default.
   */
  type?: 'button' | 'submit' | 'reset';
  testId?: string;
}

const BUTTON = 'button';

export const HeaderToggler = ({ className, tag, type, testId, ...attributes }: HeaderTogglerProps) => {
  const HeaderType = useHeaderContext();
  const defaultTag = HeaderType === SLIM ? 'a' : BUTTON;
  const defaultType = HeaderType === SLIM ? undefined : BUTTON;
  const classes = classNames(
    {
      'it-opener d-lg-none': HeaderType === SLIM,
      'custom-navbar-toggler': HeaderType === NAVBAR
    },
    className
  );
  useEffect(() => {
    document.querySelectorAll('.container-fluid').forEach((element) => {
      element.classList.remove('container-fluid');
    });
  });
  return (
    <NavbarToggler
      className={classes}
      {...attributes}
      tag={tag || defaultTag}
      type={type || defaultType}
      href='#'
      data-testid={testId}
    />
  );
};
