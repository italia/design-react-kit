import React, { FC, HTMLAttributes } from 'react';
import classname from 'classnames';

export interface GridItemTextWrapperProps extends HTMLAttributes<HTMLSpanElement> {
  /** Classi aggiuntive da usare per l'elemento */
  className?: string;
  testId?: string;
}

export const GridItemTextWrapper: FC<GridItemTextWrapperProps> = ({ className, children, testId, ...attributes }) => {
  const classes = classname('it-griditem-text-wrapper', className);
  return (
    <span {...attributes} className={classes} data-testid={testId}>
      {children}
    </span>
  );
};
