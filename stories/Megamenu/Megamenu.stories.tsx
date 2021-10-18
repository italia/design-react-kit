import React, { useState }  from 'react';
import {
    Collapse,
    MegamenuItem,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
} from '../../src';

export const Classico = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggle = () => {
    setOpenNav(!openNav);
  };
  return (
    <Navbar expand='lg' className='has-megamenu'>
      <NavbarBrand />
      <NavbarToggler className='custom-navbar-toggler' onClick={toggle}>
        <span className='it-list' />
      </NavbarToggler>
      <Collapse isOpen={openNav} navbar>
        <Nav className='mt-0' navbar>
          <MegamenuItem />
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default {
  title: 'Componenti/Megamenu'
};
