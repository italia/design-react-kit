import React, { ElementType, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

export interface DropdownProps extends HTMLAttributes<HTMLElement> {
  tag?: ElementType;
  inNavbar?: boolean;
  textCenter?: boolean;
  /** Classi aggiuntive da usare per il componente Button */
  className?: string;
  testId?: string;
}

export const Dropdown: FC<DropdownProps> = ({
  className,
  testId,
  tag,
  children,
  inNavbar,
  textCenter,
  ...attributes
}) => {
  const classes = classNames(className, {
    dropdown: true,
    'text-center': textCenter,
    'nav-item': inNavbar
  });

  const Tag = tag !== undefined ? tag : 'div';

  return (
    <Tag className={classes} data-testid={testId} {...attributes}>
      {children}
    </Tag>
  );
};
