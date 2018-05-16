import React from "react";
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
  DropdownItem,
  Form,
  Input,
  Button
} from "../../src";

class NavbarExample extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <Navbar light expand="lg" className="bg-light">
        <NavbarBrand href="#">Navbar</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />

        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem active>
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Dropdown
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Something else here</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <NavItem disabled>
              <NavLink href="#">Link</NavLink>
            </NavItem>
          </Nav>

          <Form inline className="my-2 my-lg-0">
            <Input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
            />
            <Button
              outline
              color="success"
              className="my-2 my-sm-0"
              type="submit"
            >
              Search
            </Button>
          </Form>
        </Collapse>
      </Navbar>
    );
  }
}

export default NavbarExample;
