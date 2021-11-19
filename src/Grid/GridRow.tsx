import React, { FC, HTMLAttributes } from 'react';
import classname from 'classnames';

export interface GridRowProps extends HTMLAttributes<HTMLSpanElement> {
  /** Classi aggiuntive da usare per il componente LinkListItem */
  className?: string;
}

export const GridRow: FC<GridRowProps> = ({
  className,
  children,
  ...attributes
}) => {
  const classes = classname('grid-row', className);
  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};
