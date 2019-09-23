import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  LinkList,
  LinkListItem
} from "../../src";

class NavbarMegamenuExample extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <section>
        <Navbar expand="lg" className="megamenu">
          <NavbarBrand />
          <NavbarToggler
            className="custom-navbar-toggler"
            onClick={this.toggle}
          >
            <span className="it-list" />
          </NavbarToggler>

          <Collapse isOpen={isOpen} navbar>
            <Nav navbar className="mt-0">
              <NavItem active>
                <UncontrolledDropdown tag="div" nav inNavbar>
                  <DropdownToggle nav caret>
                    Megamenu 1
                  </DropdownToggle>
                  <DropdownMenu>
                    <LinkList>
                      <LinkListItem header>Header</LinkListItem>
                    </LinkList>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
              <NavItem>
                <UncontrolledDropdown tag="div" nav inNavbar>
                  <DropdownToggle nav caret>
                    Megamenu 2
                  </DropdownToggle>
                  <DropdownMenu>
                    <LinkList>
                      <LinkListItem header>Header</LinkListItem>
                    </LinkList>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
              <NavItem>
                <UncontrolledDropdown tag="div" nav inNavbar>
                  <DropdownToggle nav caret>
                    Megamenu 3
                  </DropdownToggle>
                  <DropdownMenu>
                    <LinkList>
                      <LinkListItem header>Header</LinkListItem>
                    </LinkList>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </section>
    );
  }
}

export default NavbarMegamenuExample;
