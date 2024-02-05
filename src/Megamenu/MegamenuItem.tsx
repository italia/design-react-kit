import React, { FC, HTMLAttributes, useRef } from 'react';
import { DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import classNames from 'classnames';
import { Icon } from '../Icon/Icon';

export interface MegamenuItemProps extends HTMLAttributes<HTMLUListElement> {
  /** Etichetta del megamenu visibile all'interno della barra di navigazione */
  itemName: string;
  /** Classi aggiuntive da usare per il componente UncontrolledDropdown */
  className?: string;
}

export const MegamenuItem: FC<MegamenuItemProps> = ({ itemName, className, children, ...attributes }) => {
  const classes = classNames(className, 'megamenu');
  const [isOpen, setShowButton] = React.useState(false);
  const toggleRef = useRef(null);
  const toggleClasses = classNames('px-lg-2', 'px-xl-3', {
    show: isOpen
  });
  const setMegamenuButtonClass = () => {
    //setShowButton(contact);
    if (toggleRef && toggleRef.current) {
      setShowButton((toggleRef.current as DropdownToggle).context.isOpen);
    }
  };

  return (
    <UncontrolledDropdown nav tag='li' className={classes} {...attributes} inNavbar onToggle={setMegamenuButtonClass}>
      <DropdownToggle caret nav tag='button' className={toggleClasses} ref={toggleRef}>
        <span>{itemName}</span>
        <Icon icon='it-expand' size='xs' className='ms-1' />
      </DropdownToggle>
      <DropdownMenu>
        <div className='megamenu pb-5 pt-3 py-lg-0'>{children}</div>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};
