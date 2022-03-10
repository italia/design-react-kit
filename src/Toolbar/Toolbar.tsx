import React, { ElementType, FC, HTMLAttributes, createContext } from 'react';
import classnames from 'classnames';

export const SizeContext = createContext<ToolbarProps['size']>(undefined);

export interface ToolbarProps extends HTMLAttributes<HTMLElement> {
  tag?: ElementType;
  size?: 'large' | 'medium' | 'small';
  testId?: string;
}

export const Toolbar: FC<ToolbarProps> = ({
  tag = 'nav',
  size,
  testId,
  children,
  ...attributes
}) => {
  const Tag = tag;
  const classes = classnames('toolbar', {
    [`toolbar-${size}`]: size && size !== 'large'
  });
  return (
    <SizeContext.Provider value={size || 'large'}>
      <Tag className={classes} {...attributes} data-testid={testId}>
        <ul>{children}</ul>
      </Tag>
    </SizeContext.Provider>
  );
};
