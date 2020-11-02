import React, { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  LinkList,
  LinkListItem
} from '../../src'

const NavbarDropdownExample = () => {
  const [openNav, setOpenNav] = useState(false)
  const toggle = () => {
    setOpenNav(!openNav)
  }
  return (
    <section>
      <Navbar expand="lg">
        <NavbarBrand />
        <NavbarToggler className="custom-navbar-toggler" onClick={toggle}>
          <span className="it-list" />
        </NavbarToggler>

        <Collapse isOpen={openNav} navbar>
          <Nav navbar className="mt-0">
            <NavItem active>
              <NavLink active href="#">
                link 1 active
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">
                link 2 disabilitato
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">link 3</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">link 4</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">link 5</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Dropdown item
              </DropdownToggle>
              <DropdownMenu>
                <LinkList>
                  <LinkListItem header>Header</LinkListItem>
                  <LinkListItem>
                    <span>Link list 1</span>
                  </LinkListItem>
                  <LinkListItem>
                    <span>Link list 2</span>
                  </LinkListItem>
                  <LinkListItem>
                    <span>Link list 3</span>
                  </LinkListItem>
                  <LinkListItem divider />
                  <LinkListItem>
                    <span>Link list 4</span>
                  </LinkListItem>
                </LinkList>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </section>
  )
}

export default NavbarDropdownExample
