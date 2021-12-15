import React, { ElementType, FC, HTMLAttributes, createContext } from 'react';
import classnames from 'classnames';

export const SizeContext = createContext<ToolbarProps['size']>(undefined);

export interface ToolbarProps extends HTMLAttributes<HTMLElement> {
  tag?: ElementType;
  size?: 'large' | 'medium' | 'small';
}

export const Toolbar: FC<ToolbarProps> = ({
  tag = 'nav',
  size,
  children,
  ...attributes
}) => {
  const Tag = tag;
  const classes = classnames('toolbar', {
    [`toolbar-${size}`]: size && size !== 'large'
  });
  return (
    <SizeContext.Provider value={size || 'large'}>
      <Tag className={classes} {...attributes}>
        <ul>{children}</ul>
      </Tag>
    </SizeContext.Provider>
  );
};
