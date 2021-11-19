import React, { FC, HTMLAttributes } from 'react';
import classname from 'classnames';

export interface GridItemTextProps extends HTMLAttributes<HTMLSpanElement> {
  /** Classi aggiuntive da usare per l'elemento */
  className?: string;
}

export const GridItemText: FC<GridItemTextProps> = ({
  className,
  children,
  ...attributes
}) => {
  const classes = classname('it-griditem-text', className);
  return (
    <span {...attributes} className={classes}>
      {children}
    </span>
  );
};
