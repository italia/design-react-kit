import React, { FC, HTMLAttributes, useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import classNames from 'classnames';
import { Collapse } from '../Collapse/Collapse';
import { Icon } from '../Icon/Icon';
import { Nav } from '../Nav/Nav';

export interface MegamenuProps extends HTMLAttributes<HTMLDivElement> {
  /** Eventuale brand da inserire sulla navbar */
  brand?: NavbarBrand;
  /** Classi aggiuntive da usare per il componente Nav */
  className?: string;
}

export const Megamenu: FC<MegamenuProps> = ({
  brand,
  className,
  children,
  ...attributes
}) => {
  const [openNav, setOpenNav] = useState(false);
  const toggle = () => {
    setOpenNav(!openNav);
  };
  const classes = classNames(className, 'has-megamenu');
  return (
    <Navbar className={classes} {...attributes}>
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
