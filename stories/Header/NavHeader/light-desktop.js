import React, { Component } from 'react';

import { Collapse, Header, HeaderContent, Icon, Nav, NavItem, NavLink, HeaderToggler, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from '../../../src';

export default class NavHeader extends Component {
    state = {
        collapsed: false
    }
    render() {
        return (
            <Header type="navbar" theme="light-desk">
                <HeaderContent expand="lg" megamenu>
                    <HeaderToggler onClick={() => this.setState({ collapsed: !this.state.collapsed })} aria-controls="nav1" aria-expanded="false" aria-label="Toggle navigation">
                        <Icon icon="it-burger" />
                    </HeaderToggler>
                    <Collapse isOpen={this.state.collapsed} navbar className="navbar-collapsable">
                        <div className="menu-wrapper">
                            <Nav navbar>
                                <NavItem active>
                                    <NavLink href="#" active>
                                        <span>link 1 active </span>
                                        <span className="sr-only">current</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>Link 2</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Link 3</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Link 4</NavLink>
                                </NavItem>
                                <NavItem>
                                    <UncontrolledDropdown nav inHeader tag="div">
                                        <DropdownToggle nav caret>
                                            Dropdown item
                                            <Icon icon="it-expand" />
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>
                                                <h3 className="no_toc">Heading</h3>
                                            </DropdownItem>
                                            <DropdownItem>
                                                Link 1
                                            </DropdownItem>
                                            <DropdownItem>
                                                Link 2
                                            </DropdownItem>
                                            <DropdownItem>
                                                Link 3
                                            </DropdownItem>
                                            <DropdownItem>
                                                Link 4
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" disabled>Megamenu label</NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </Collapse>
                </HeaderContent>
            </Header>)
    }
}