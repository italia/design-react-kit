import React, { ElementType, FC, HTMLAttributes } from 'react';
import classname from 'classnames';

export interface GridItemProps extends HTMLAttributes<HTMLSpanElement> {
  /** Classi aggiuntive da usare per il componente LinkListItem */
  className?: string;
  /** Indica il tag da utilizzare per il titolo */
  tag?: ElementType;
}

export const GridItem: FC<GridItemProps> = ({
  tag: Tag = 'div',
  className,
  children,
  ...attributes
}) => {
  const classes = classname('it-grid-item-wrapper', className);
  return (
    <Tag {...attributes} className={classes}>
      {children}
    </Tag>
  );
};
