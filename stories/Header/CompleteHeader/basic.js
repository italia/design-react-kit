import React, { Component } from 'react';

import { select } from '@storybook/addon-knobs/react'
import { Button, Collapse, DropdownToggle, DropdownMenu, DropdownItem, Header, Headers, HeaderContent, HeaderSearch, HeaderRightZone, HeaderSocialsZone, HeaderToggler, HeaderLinkZone, Icon, Nav, NavItem, NavLink, HeaderBrand, UncontrolledDropdown } from '../../../src';

export class SlimHeader extends Component {

    state = {
        collapsed: false
    }

    render() {

        return (<Header type="slim" theme={this.props.theme}>
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
                            <NavItem active><NavLink href="#">Link 2 Active</NavLink></NavItem>
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

export class CenterHeader extends Component {

    render() {
        return (
            <Header type="center" theme={this.props.theme}>
                <HeaderContent>
                    <HeaderBrand iconName="it-code-circle">
                        <h2>Lorem Ipsum Lorem Ipsum</h2>
                        <h3>Inserire qui la tag line</h3>
                    </HeaderBrand>
                    <HeaderRightZone>
                        <HeaderSocialsZone label="Seguici su">
                            <Nav inHeader>
                                <NavItem>
                                    <NavLink href="#" aria-label="Facebook" target="_blank">
                                        <Icon icon="it-facebook" />
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" aria-label="Github" target="_blank">
                                        <Icon icon="it-github" />
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#" aria-label="Twitter" target="_blank">
                                        <Icon icon="it-twitter" />
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </HeaderSocialsZone>
                        <HeaderSearch label="Cerca" iconName="it-search" />
                    </HeaderRightZone>
                </HeaderContent>
            </Header>)
    }
}


export class NavHeader extends Component {

    state = {
        collapsed: false
    }
    render() {
        return (
            <Header type="navbar" theme={this.props.theme}>
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
                                    <UncontrolledDropdown nav tag="div">
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

const CompleteHeader = () => {
    const theme = select('Tema', { default: '', light: 'light', dark: 'dark' }, '');
    return <Headers>
        <SlimHeader theme={theme} />
        <CenterHeader theme={theme} />
        <NavHeader theme={theme} />
    </Headers>
}

export default CompleteHeader