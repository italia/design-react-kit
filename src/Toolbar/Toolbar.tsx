import React, { ElementType, FC, HTMLAttributes } from 'react';
import classnames from 'classnames';

export interface ToolbarProps extends HTMLAttributes<HTMLElement> {
  tag?: ElementType;
  isMedium?: boolean;
  isSmall?: boolean;
}

export const Toolbar: FC<ToolbarProps> = ({
  tag = 'nav',
  isMedium = false,
  isSmall = false,
  children,
  ...attributes
}) => {
  const Tag = tag;
  const classes = classnames('toolbar', {
    'toolbar-medium': isMedium,
    'toolbar-small': isSmall
  });
  return (
    <Tag className={classes} {...attributes}>
      <ul>{children}</ul>
    </Tag>
  );
};
