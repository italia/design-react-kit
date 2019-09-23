import React from 'react';

import { boolean, select } from '@storybook/addon-knobs/react'
import { Button, Collapse, Header, HeaderContent, HeaderLinkZone, HeaderRightZone, Icon, Nav, NavItem, NavLink, HeaderBrand, HeaderToggler, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from '../../../src';

const SlimHeader = () => {

    const theme = select('Tema', { default: '', light: 'light' }, '');
    const isOpen = boolean('Aperto (mobile)', false);
    return (
        <Header type="slim" theme={theme}>
            <HeaderContent>
                <HeaderBrand>Ente appartenenza/Owner</HeaderBrand>
                <HeaderLinkZone>
                    <HeaderToggler onClick={() => {/* open logic state here */ }}>
                        <span>Ente appartenenza/Owner</span>
                        <Icon icon="it-expand" />
                    </HeaderToggler>
                    <Collapse isOpen={isOpen} header>
                        <Nav inHeader>
                            <NavItem><NavLink href="#">Link 1</NavLink></NavItem>
                            <NavItem><NavLink href="#" active>Link 2 Active</NavLink></NavItem>
                        </Nav>
                    </Collapse>
                </HeaderLinkZone>
                <HeaderRightZone>
                    <UncontrolledDropdown nav tag="div">
                        <DropdownToggle nav caret>
                            ITA
                            <Icon icon="it-expand" />
                        </DropdownToggle>
                        <DropdownMenu>
                            <div className="row">
                                <div className="col-12">
                                    <div className="link-list-wrapper">
                                        <ul className="link-list">
                                            <li>
                                                <DropdownItem href="#" className="list-item">
                                                    <span>ITA</span>
                                            </DropdownItem></li>
                                            <li><DropdownItem href="#" className="list-item">
                                                <span>ENG</span>
                                </DropdownItem></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <div className="it-access-top-wrapper">
                        <Button color="primary" size="sm">Accedi</Button>
                    </div>
                </HeaderRightZone>
            </HeaderContent>
        </Header>)
}

export default SlimHeader;