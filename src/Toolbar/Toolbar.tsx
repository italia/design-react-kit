import React, { ElementType, FC, HTMLAttributes, createContext } from 'react';
import classnames from 'classnames';

export const SizeContext = createContext<ToolbarProps['size']>(undefined);

export interface ToolbarProps extends HTMLAttributes<HTMLElement> {
  tag?: ElementType;
  size?: 'large' | 'medium' | 'small';
  testId?: string;
  vertical?: boolean;
}

export const Toolbar: FC<ToolbarProps> = ({ tag = 'nav', size, testId, children, vertical, ...attributes }) => {
  const Tag = tag;
  const classes = classnames('toolbar', {
    [`toolbar-${size}`]: size && size !== 'large',
    'toolbar-vertical': vertical
  });
  return (
    <SizeContext.Provider value={size || 'large'}>
      <Tag className={classes} {...attributes} data-testid={testId}>
        <ul>{children}</ul>
      </Tag>
    </SizeContext.Provider>
  );
};
