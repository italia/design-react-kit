import React from 'react';

import { boolean, select } from '@storybook/addon-knobs/react'
import { Collapse, Header, HeaderContent, Icon, Nav, NavItem, NavLink, HeaderToggler, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from '../../../src';

const NavHeader = () => {

    const theme = select('Tema', { default: '', light: 'light', dark: 'dark' }, '');
    const isOpen = boolean('Aperto (mobile)', false);
    return (
        <Header type="navbar" theme={theme}>
            <HeaderContent expand="lg" megamenu>
                <HeaderToggler onClick={() => {/* set logic state  */ }} aria-controls="nav1" aria-expanded="false" aria-label="Toggle navigation">
                    <Icon icon="it-burger" />
                </HeaderToggler>
                <Collapse isOpen={isOpen} navbar className="navbar-collapsable">
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
                                <UncontrolledDropdown nav tag="div">
                                    <DropdownToggle nav caret>
                                        Dropdown item
                                            <Icon icon="it-expand" />
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <div className="link-list-wrapper">
                                            <ul className="link-list">
                                                <li>
                                                    <h3 className="no_toc" id="heading-es-1">Heading</h3>
                                                </li>
                                                <li><DropdownItem className="list-item" href="#"><span>Link list 1</span></DropdownItem></li>
                                                <li><DropdownItem className="list-item" href="#"><span>Link list 2</span></DropdownItem></li>
                                                <li><DropdownItem className="list-item" href="#"><span>Link list 3</span></DropdownItem></li>
                                                <li><span className="divider"></span></li>
                                                <li><DropdownItem className="list-item" href="#"><span>Link list 4</span></DropdownItem></li>
                                            </ul>
                                        </div>
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

export default NavHeader;