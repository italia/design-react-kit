import React, { FC, HTMLAttributes } from 'react';
import classname from 'classnames';

export interface GridRowProps extends HTMLAttributes<HTMLSpanElement> {
  /** Classi aggiuntive da usare per il componente LinkListItem */
  className?: string;
  testId?: string;
}

export const GridRow: FC<GridRowProps> = ({ className, children, testId, ...attributes }) => {
  const classes = classname('grid-row', className);
  return (
    <div {...attributes} className={classes} data-testid={testId}>
      {children}
    </div>
  );
};
