import React from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "../../src";

class OffcanvasExample extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const classNames = [
      "navbar-collapse offcanvas-collapse px-2",
      this.state.isOpen ? "open" : ""
    ].join(" ");

    return (
      <Navbar dark fixed="top" expand="md" className="bg-dark">
        <NavbarBrand href="#">Esempio Offcanvas</NavbarBrand>
        <NavItem
          tag="button"
          className="navbar-toggler p-0 border-0 ml-auto"
          data-toggle="offcanvas"
          onClick={this.toggle}
        >
          <span className="navbar-toggler-icon" />
        </NavItem>

        <div className={classNames} id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <NavItem active>
              <NavLink href="#">Link 1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link 2</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link 3</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link 4</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Dropdown
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Azione 1</DropdownItem>
                <DropdownItem>Azione 2</DropdownItem>
                <DropdownItem>Azione 3</DropdownItem>
                <DropdownItem>Azione 4</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </ul>
        </div>
      </Navbar>
    );
  }
}

export default OffcanvasExample;
