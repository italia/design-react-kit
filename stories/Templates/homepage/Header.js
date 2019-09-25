import React, { Component } from 'react';

import { select, text } from '@storybook/addon-knobs/react'
import { Button, Collapse, Col, Row, LinkList, LinkListItem, DropdownToggle, DropdownMenu, DropdownItem, Header, Headers, HeaderContent, HeaderSearch, HeaderRightZone, HeaderSocialsZone, HeaderToggler, HeaderLinkZone, Icon, Nav, NavItem, NavLink, HeaderBrand, UncontrolledDropdown } from '../../../src';

// eslint rule has to be disable for few lines here as Storybook addons will go in error
// if PropTypes are declared in these components
export class SlimHeader extends Component {
    render() {
        const regionName = text('Regione', 'Nome della Regione');
        return (
            // eslint-disable-next-line react/prop-types
            <Header type="slim" theme={this.props.theme}>
                <HeaderContent>
                    <HeaderBrand>{regionName}</HeaderBrand>
                    <HeaderRightZone>
                        <UncontrolledDropdown nav tag="div">
                            <DropdownToggle nav caret>
                                ITA
                            <Icon icon="it-expand" />
                            </DropdownToggle>
                            <DropdownMenu>
                                <Row>
                                    <Col size={12}>
                                        <LinkList>
                                            <LinkListItem>
                                                <DropdownItem href="#" className="list-item">
                                                    <span>ITA</span>
                                                </DropdownItem>
                                            </LinkListItem>
                                            <LinkListItem>
                                                <DropdownItem href="#" className="list-item">
                                                    <span>ENG</span>
                                                </DropdownItem>
                                            </LinkListItem>
                                        </LinkList>
                                    </Col>
                                </Row>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <Button color="primary" size="full" className="btn-icon" href="#">
                            <span className="rounded-icon">
                                <Icon color="primary" icon="it-user" />
                            </span>
                            <span className="d-none d-lg-block">Accedi all&#39;area personale</span>
                        </Button>
                    </HeaderRightZone>
                </HeaderContent>
            </Header>)
    }
}

export class CenterHeader extends Component {

    render() {
        const townName = text('Comune', 'Nome del Comune');
        const townTagLine = text('Motto Comune', "Uno dei tanti Comuni d'Italia");
        return (
            // eslint-disable-next-line react/prop-types
            <Header type="center" theme={this.props.theme}>
                <HeaderContent>
                    <HeaderBrand iconName="it-code-circle">
                        <h2>{townName}</h2>
                        <h3>{townTagLine}</h3>
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
            // eslint-disable-next-line react/prop-types
            <Header type="navbar" theme={this.props.theme}>
                <HeaderContent expand="lg" megamenu>
                    <HeaderToggler onClick={() => this.setState({ collapsed: !this.state.collapsed })} aria-controls="nav1" aria-expanded="false" aria-label="Toggle navigation">
                        <Icon icon="it-burger" />
                    </HeaderToggler>
                    <Collapse isOpen={this.state.collapsed} navbar className="navbar-collapsable">
                        <div className="menu-wrapper">
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href="#" >
                                        <span>Amministrazione </span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Novità</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Servizi</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Documenti e Dati</NavLink>
                                </NavItem>
                            </Nav>
                            <Nav navbar class="navbar-secondary">
                                <NavItem>
                                    <NavLink href="#">
                                        <span>Argomento 1</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        <span>Argomento 2</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        <span className="font-weight-bold">Tutti gli argomenti...</span>
                                    </NavLink>
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