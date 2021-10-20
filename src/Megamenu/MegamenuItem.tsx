import React, { FC, HTMLAttributes } from 'react';
import { DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import classNames from 'classnames';

export interface MegamenuItemProps extends HTMLAttributes<HTMLUListElement> {
  /** @type {string} Etichetta del megamenu */
  itemName?: string;
  /** Classi aggiuntive da usare per il componente Nav */
  className?: string;
}

export const MegamenuItem: FC<MegamenuItemProps> = ({
  itemName,
  className,
  children,
  ...attributes
}) => {
  const classes = classNames(className, 'megamenu');
  return (
    <UncontrolledDropdown nav tag='li' className={classes} {...attributes}>
      <DropdownToggle caret nav>
        {itemName}
      </DropdownToggle>
      <DropdownMenu>{children}</DropdownMenu>
    </UncontrolledDropdown>
  );
};