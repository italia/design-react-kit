import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { DropdownMenu as BSDRopdownMenu } from 'reactstrap';
export interface DropdownMenuProps extends HTMLAttributes<HTMLElement> {
  /** Classi aggiuntive da usare per il componente Button */
  className?: string;
  testId?: string;
}

export const DropdownMenu: FC<DropdownMenuProps> = ({ className, testId, children, ...attributes }) => {
  const classes = classNames(className, {
    'dropdown-menu': true
  });

  return (
    <BSDRopdownMenu className={classes} data-testid={testId} {...attributes}>
      {children}
    </BSDRopdownMenu>
  );
};
