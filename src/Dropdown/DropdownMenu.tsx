import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { DropdownMenu as BSDRopdownMenu } from 'reactstrap';

// .it-header-slim-wrapper .it-header-slim-wrapper-content .dropdown-menu {
//   top: unset !important;
// }

export interface DropdownMenuProps extends HTMLAttributes<HTMLElement> {
  /** Classi aggiuntive da usare per il componente Button */
  inNavbar?: boolean;
  className?: string;
  testId?: string;
}

export const DropdownMenu: FC<DropdownMenuProps> = ({ className, inNavbar, testId, children, ...attributes }) => {
  const classes = classNames(className, {
    'dropdown-menu': true
  });

  const style = inNavbar ? {'top' : 'unset !important'} : {}
  
  return (
    <BSDRopdownMenu style={style} className={classes} data-testid={testId} {...attributes}>
      {children}
    </BSDRopdownMenu>
  );
};
