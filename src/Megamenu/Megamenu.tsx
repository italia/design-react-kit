import React, { FC, useState } from 'react';
import { Navbar, NavbarBrand, NavbarProps, NavbarToggler } from 'reactstrap';
import classNames from 'classnames';
import { Collapse } from '../Collapse/Collapse';
import { Icon } from '../Icon/Icon';
import { Nav } from '../Nav/Nav';

export interface MegamenuProps extends NavbarProps {
  /** Eventuale brand da inserire sulla navbar */
  brand?: NavbarBrand;
  /** Classi aggiuntive da usare per il componente Nav */
  className?: string;
  testId?: string;
}

export const Megamenu: FC<MegamenuProps> = ({
  brand,
  className,
  children,
  testId,
  ...attributes
}) => {
  const [openNav, setOpenNav] = useState(false);
  const toggle = () => {
    setOpenNav(!openNav);
  };
  const classes = classNames(className, 'has-megamenu');
  return (
    <Navbar className={classes} {...attributes} data-testid={testId}>
      <NavbarToggler className='custom-navbar-toggler' onClick={toggle}>
        <Icon icon='it-list' size='sm' />
      </NavbarToggler>
      {brand}
      <Collapse isOpen={openNav} megamenu>
        <Nav navbar>{children}</Nav>
      </Collapse>
    </Navbar>
  );
};
