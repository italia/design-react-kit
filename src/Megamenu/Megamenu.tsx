import React, { FC, HTMLAttributes, useState } from 'react';
import { Button, Navbar, NavbarBrand } from 'reactstrap';
import { Icon } from '../Icon/Icon';
import classNames from 'classnames';

const uniqueId = ((): ((prefix: string) => string) => {
  let counter = 0;
  return (prefix: string): string => `${prefix}${++counter}`;
})();

export interface MegamenuProps extends HTMLAttributes<HTMLUListElement> {
  /** Classi aggiuntive da usare per il componente Nav */
  className?: string;
}

export const Megamenu: FC<MegamenuProps> = ({
  className,
  children,
  ...attributes
}) => {
  const [megamenuId] = useState(uniqueId('navbarNav-'));
  const classes = classNames(className, 'has-megamenu');
  const removeButtonShadow = {
    boxShadow: 'none',
  };
  console.log(children)
  return (
    <Navbar expand='lg' className={classes} {...attributes}>
      <NavbarBrand />
      <Button className='navbar-toggler' aria-controls={megamenuId} aria-expanded='false' aria-label='Toggle navigation' color="primary" style={removeButtonShadow}>
        <Icon icon='it-list' size='sm' className='icon-light'/>
      </Button>
      <div className='navbar-collapsable' id={megamenuId}>
        <div className='overlay'></div>
        <div className='close-div sr-only'>
          <Button className='close-menu' color='primary'>
            <Icon icon='it-close' size='sm' className='icon-light' />Close
          </Button>
        </div>
        <div className='menu-wrapper'>
          <ul className='navbar-nav'>
          </ul>
        </div>
      </div>
    </Navbar>
  );
};
