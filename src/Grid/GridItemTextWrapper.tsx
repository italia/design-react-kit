import React, { FC, HTMLAttributes } from 'react';
import classname from 'classnames';

export interface GridItemTextWrapperProps
  extends HTMLAttributes<HTMLSpanElement> {
  /** Classi aggiuntive da usare per l'elemento */
  className?: string;
}

export const GridItemTextWrapper: FC<GridItemTextWrapperProps> = ({
  className,
  children,
  ...attributes
}) => {
  const classes = classname('it-griditem-text-wrapper', className);
  return (
    <span {...attributes} className={classes}>
      {children}
    </span>
  );
};
