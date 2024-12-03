import React, { FC, HTMLAttributes } from 'react';
import { Dropdown } from '../Dropdown/Dropdown';
import { DropdownMenu } from '../Dropdown/DropdownMenu';
import { DropdownToggle } from '../Dropdown/DropdownToggle';
import classNames from 'classnames';

export interface MegamenuItemProps extends HTMLAttributes<HTMLUListElement> {
  /** Etichetta del megamenu visibile all'interno della barra di navigazione */
  itemName: string;
  /** Classi aggiuntive da usare per il componente Dropdown */
  className?: string;
}

export const MegamenuItem: FC<MegamenuItemProps> = ({ itemName, className, children, ...attributes }) => {
  const classes = classNames(className, 'megamenu');
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggleClasses = classNames('px-lg-2', 'px-xl-3', dropdownOpen ? 'show' : '');

  return (
    <Dropdown className={classes} inNavbar {...attributes} isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle inNavbar caret className={toggleClasses}>
        <span>{itemName}</span>
      </DropdownToggle>
      <DropdownMenu>
        <div className='megamenu pb-5 pt-3 py-lg-0'>{children}</div>
      </DropdownMenu>
    </Dropdown>
  );
};
