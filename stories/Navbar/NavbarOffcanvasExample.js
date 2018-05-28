import React from "react";
import classNames from "classnames";

import {
    Offcanvas,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Form,
    Input,
    Button,
    LinkList,
    LinkListItem
} from "../../src";

class NavbarOffcanvasExample extends React.Component {
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
                <Navbar expand="lg">
                    <NavbarBrand />
                    <NavbarToggler
                        className="custom-navbar-toggler"
                        onClick={this.toggle}
                    >
                        <span className="it-list" />
                    </NavbarToggler>

                    <Offcanvas>
                        <Nav navbar>
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

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Dropdown item
                                </DropdownToggle>
                                <DropdownMenu>
                                    <LinkList>
                                        <LinkListItem header>
                                            Header
                                        </LinkListItem>
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

                            <NavItem>
                                <NavLink href="#">link 5</NavLink>
                            </NavItem>
                        </Nav>
                    </Offcanvas>
                </Navbar>
            </section>
        );
    }
}

export default NavbarOffcanvasExample;
