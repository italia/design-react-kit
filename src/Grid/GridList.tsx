import React, { FC, HTMLAttributes } from 'react';
import classname from 'classnames';

export interface GridListProps extends HTMLAttributes<HTMLSpanElement> {
  /** Classi aggiuntive da usare per il componente LinkListItem */
  className?: string;
}

export const GridList: FC<GridListProps> = ({
  className,
  children,
  ...attributes
}) => {
  const classes = classname('it-grid-list-wrapper', className);
  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};
