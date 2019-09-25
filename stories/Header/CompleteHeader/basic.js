import React, { Component } from 'react'

import { select } from '@storybook/addon-knobs/react'
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Header,
  Headers,
  HeaderContent,
  HeaderSearch,
  HeaderRightZone,
  HeaderSocialsZone,
  HeaderToggler,
  HeaderLinkZone,
  Icon,
  Nav,
  NavItem,
  NavLink,
  HeaderBrand,
  UncontrolledDropdown
} from '../../../src'

// eslint rule has to be disable for few lines here as Storybook addons will go in error
// if PropTypes are declared in these components
export class SlimHeader extends Component {
  state = {
    collapsed: false
  }

  render() {
    return (
      // eslint-disable-next-line react/prop-types
      <Header type="slim" theme={this.props.theme}>
        <HeaderContent>
          <HeaderBrand>Ente appartenenza/Owner</HeaderBrand>
          <HeaderLinkZone>
            <HeaderToggler
              onClick={() =>
                this.setState({ collapsed: !this.state.collapsed })
              }>
              <span>Ente appartenenza/Owner</span>
              <Icon icon="it-expand" />
            </HeaderToggler>
            <Collapse isOpen={this.state.collapsed} header>
              <Nav inHeader>
                <NavItem>
                  <NavLink href="#">Link 1</NavLink>
                </NavItem>
                <NavItem active>
                  <NavLink href="#">Link 2 Active</NavLink>
                </NavItem>
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
                          </DropdownItem>
                        </li>
                        <li>
                          <DropdownItem href="#" className="list-item">
                            <span>ENG</span>
                          </DropdownItem>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </DropdownMenu>
            </UncontrolledDropdown>
            <div className="it-access-top-wrapper">
              <Button color="primary" size="sm">
                Accedi
              </Button>
            </div>
          </HeaderRightZone>
        </HeaderContent>
      </Header>
    )
  }
}

export class CenterHeader extends Component {
  render() {
    return (
      // eslint-disable-next-line react/prop-types
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
      </Header>
    )
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
          <HeaderToggler
            onClick={() => this.setState({ collapsed: !this.state.collapsed })}
            aria-controls="nav1"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <Icon icon="it-burger" />
          </HeaderToggler>
          <Collapse
            isOpen={this.state.collapsed}
            navbar
            className="navbar-collapsable">
            <div className="menu-wrapper">
              <Nav navbar>
                <NavItem active>
                  <NavLink href="#" active>
                    <span>link 1 active </span>
                    <span className="sr-only">current</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" disabled>
                    Link 2
                  </NavLink>
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
                            <h3 className="no_toc" id="heading-es-1">
                              Heading
                            </h3>
                          </li>
                          <li>
                            <DropdownItem className="list-item" href="#">
                              <span>Link list 1</span>
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem className="list-item" href="#">
                              <span>Link list 2</span>
                            </DropdownItem>
                          </li>
                          <li>
                            <DropdownItem className="list-item" href="#">
                              <span>Link list 3</span>
                            </DropdownItem>
                          </li>
                          <li>
                            <span className="divider"></span>
                          </li>
                          <li>
                            <DropdownItem className="list-item" href="#">
                              <span>Link list 4</span>
                            </DropdownItem>
                          </li>
                        </ul>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </NavItem>
                <NavItem>
                  <NavLink href="#" disabled>
                    Megamenu label
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </Collapse>
        </HeaderContent>
      </Header>
    )
  }
}

const CompleteHeader = () => {
  const theme = select(
    'Tema',
    { default: '', light: 'light', dark: 'dark' },
    ''
  )
  return (
    <Headers>
      <SlimHeader theme={theme} />
      <CenterHeader theme={theme} />
      <NavHeader theme={theme} />
    </Headers>
  )
}

export default CompleteHeader
