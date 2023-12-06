import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { SLIM, useHeaderContext } from './HeaderContext';

export interface HeaderRightZoneProps extends HTMLAttributes<HTMLElement> {
  /** Classi addizionali per il componente HeaderLinkZone, applicata all'element "nav" annidato */
  className?: string;
  testId?: string;
}

export const HeaderRightZone = ({ className, testId, ...attributes }: HeaderRightZoneProps) => {
  const type = useHeaderContext();
  const classes = classNames(className, {
    // BI >= 1.3.6
    'it-header-slim-right-zone': type === SLIM,
    // BI < 1.3.6
    'header-slim-right-zone': type === SLIM,
    'it-right-zone': type !== SLIM
  });
  return <div className={classes} {...attributes} data-testid={testId} />;
};
