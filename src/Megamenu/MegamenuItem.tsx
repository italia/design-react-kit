import React, { FC, HTMLAttributes } from 'react';
import { DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import classNames from 'classnames';

export interface MegamenuItemProps extends HTMLAttributes<HTMLUListElement> {
  /** Etichetta del megamenu visibile all'interno della barra di navigazione */
  itemName: string;
  /** Classi aggiuntive da usare per il componente UncontrolledDropdown */
  className?: string;
}

const styleDropdownToggle = {
  clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
};

export const MegamenuItem: FC<MegamenuItemProps> = ({
  itemName,
  className,
  children,
  ...attributes
}) => {
  const classes = classNames(className, 'megamenu');
  return (
    <UncontrolledDropdown nav tag='li' className={classes} {...attributes}>
      <DropdownToggle caret nav style={styleDropdownToggle}>
        {itemName}
      </DropdownToggle>
      <DropdownMenu positionFixed>{children}</DropdownMenu>
    </UncontrolledDropdown>
  );
};
