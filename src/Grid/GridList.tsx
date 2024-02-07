import React, { FC, HTMLAttributes } from 'react';
import classname from 'classnames';

export interface GridListProps extends HTMLAttributes<HTMLSpanElement> {
  /** Classi aggiuntive da usare per il componente LinkListItem */
  className?: string;
  testId?: string;
}

export const GridList: FC<React.PropsWithChildren<React.PropsWithChildren<GridListProps>>> = ({ className, children, testId, ...attributes }) => {
  const classes = classname('it-grid-list-wrapper', className);
  return (
    <div {...attributes} className={classes} data-testid={testId}>
      {children}
    </div>
  );
};
