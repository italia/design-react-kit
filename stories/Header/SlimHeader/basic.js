import React, { Component } from 'react';

import { Button, Collapse, Header, HeaderContent, HeaderLinkZone, HeaderRightZone, Icon, Nav, NavItem, NavLink, HeaderBrand, HeaderToggler, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from '../../../src';

export default class SlimHeader extends Component {
    state = {
        collapsed: false
    }
    render() {
        return (
            <Header type="slim" >
                <HeaderContent>
                    <HeaderBrand>Ente appartenenza/Owner</HeaderBrand>
                    <HeaderLinkZone>
                            <HeaderToggler onClick={() => this.setState({ collapsed: !this.state.collapsed })}>
                                <span>Ente appartenenza/Owner</span>
                                <Icon icon="it-expand" />
                            </HeaderToggler>
                            <Collapse isOpen={this.state.collapsed} header>
                                <Nav inHeader>
                                    <NavItem><NavLink href="#">Link 1</NavLink></NavItem>
                                    <NavItem><NavLink href="#" active>Link 2 Active</NavLink></NavItem>
                                </Nav>
                            </Collapse>
                    </HeaderLinkZone>
                    <HeaderRightZone>
                        <UncontrolledDropdown nav inHeader tag="div">
                            <DropdownToggle nav caret>
                                ITA
                                <Icon icon="it-expand" />
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>
                                    ITA
                                </DropdownItem>
                                <DropdownItem>
                                    ENG
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <div className="it-access-top-wrapper">
                            <Button color="primary" size="sm">Accedi</Button>
                        </div>
                    </HeaderRightZone>
                </HeaderContent>
            </Header>)
    }
}