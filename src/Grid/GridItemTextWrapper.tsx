import React, { ElementType, FC, HTMLAttributes } from 'react';
import classname from 'classnames';

export interface GridItemTextWrapperProps extends HTMLAttributes<HTMLSpanElement> {
  /** Classi aggiuntive da usare per l'elemento */
  className?: string;
  testId?: string;
  /** Tag dell'elemento (può essere ad esempio trasformato in figcaption) */
  tag?: ElementType;
}

export const GridItemTextWrapper: FC<GridItemTextWrapperProps> = ({ className, children, testId, tag='span', ...attributes }) => {
  const classes = classname('it-griditem-text-wrapper', className);
  const Tag = tag;
  return (
    <Tag {...attributes} className={classes} data-testid={testId}>
      {children}
    </Tag>
  );
};
