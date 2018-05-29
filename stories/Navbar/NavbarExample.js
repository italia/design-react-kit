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
    Button,
    LinkList,
    LinkListItem
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
        const { isOpen } = this.state;
        const { dropdown } = this.props;
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

                    <Collapse isOpen={isOpen} navbar>
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
                            {(() => {
                                if (dropdown) {
                                    return (
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
                                    );
                                }
                                return (
                                    <NavItem>
                                        <NavLink href="#">link 6</NavLink>
                                    </NavItem>
                                );
                            })()}
                        </Nav>
                    </Collapse>
                </Navbar>
            </section>
        );
    }
}

export default NavbarExample;
