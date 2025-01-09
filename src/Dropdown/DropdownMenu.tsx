import React, { FC, HTMLAttributes } from 'react';
import { DropdownMenu as BSDRopdownMenu } from 'reactstrap';
import { SLIM, useHeaderContext } from '../Header/HeaderContext';

export interface DropdownMenuProps extends HTMLAttributes<HTMLElement> {
  /** Classi aggiuntive da usare per il componente Button */
  inNavbar?: boolean;
  className?: string;
  testId?: string;
}

export const DropdownMenu: FC<DropdownMenuProps> = ({ className, inNavbar, testId, children, ...attributes }) => {
  const type = useHeaderContext();
  const style = inNavbar && type === SLIM ? { top: 'unset !important' } : {};

  return (
    <BSDRopdownMenu style={style} data-testid={testId} {...attributes} className={className}>
      {children}
    </BSDRopdownMenu>
  );
};
