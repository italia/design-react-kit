import React, { ElementType, FC, HTMLAttributes } from 'react';
import classnames from 'classnames';

export interface ToolbarProps extends HTMLAttributes<HTMLElement> {
  tag?: ElementType;
  size?: 'large' | 'medium' | 'small';
}

export const Toolbar: FC<ToolbarProps> = ({
  tag = 'nav',
  size = 'large',
  children,
  ...attributes
}) => {
  const Tag = tag;
  const classes = classnames('toolbar', {
    [`toolbar-${size}`]: size
  });
  return (
    <Tag className={classes} {...attributes}>
      <ul>{children}</ul>
    </Tag>
  );
};
