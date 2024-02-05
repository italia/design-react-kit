/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { Component } from 'react';

import {
  Button,
  Collapse,
  Row,
  Col,
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
  LinkList,
  LinkListItem,
  Nav,
  NavItem,
  NavLink,
  HeaderBrand,
  UncontrolledDropdown,
  MegamenuItem
} from '../../../src';
import type { HeaderCompleteProps, ThemeType } from '../types';

const SlimHeaderFullResponsive = ({ theme }: ThemeType) => {
  return (
    <Header type='slim' theme={theme}>
      <HeaderContent>
        <HeaderBrand>Ente appartenenza</HeaderBrand>
        <HeaderRightZone>
          <UncontrolledDropdown nav tag='div'>
            <DropdownToggle nav caret role='button'>
              ITA
              <Icon icon='it-expand' />
            </DropdownToggle>
            <DropdownMenu>
              <Row>
                <Col size='12'>
                  <LinkList>
                    <LinkListItem tag={DropdownItem} href='#'>
                      <span>ITA</span>
                    </LinkListItem>
                    <LinkListItem tag={DropdownItem} href='#'>
                      <span>ENG</span>
                    </LinkListItem>
                  </LinkList>
                </Col>
              </Row>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Button color='primary' icon href='#'>
            <span className='rounded-icon'>
              <Icon color='primary' icon='it-user' />
            </span>
            <span className='d-none d-lg-block'>Accedi all&#39;area personale</span>
          </Button>
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
};

// eslint rule has to be disable for few lines here as Storybook addons will go in error
// if PropTypes are declared in these components
export class SlimHeader extends Component<{ theme?: 'light' | 'dark' | '' }, { collapsed: boolean }> {
  state = {
    collapsed: true
  };

  render() {
    return (
      <Header type='slim' theme={this.props.theme}>
        <HeaderContent>
          <HeaderBrand>Ente appartenenza</HeaderBrand>
          <HeaderLinkZone>
            <HeaderToggler onClick={() => this.setState({ collapsed: !this.state.collapsed })}>
              <span>Ente appartenenza</span>
              <Icon icon='it-expand' />
            </HeaderToggler>
            <Collapse isOpen={!this.state.collapsed}>
              <LinkList>
                <LinkListItem href='#'>Link 1</LinkListItem>
                <LinkListItem href='#' active>
                  Link 2 (Active)
                </LinkListItem>
              </LinkList>
            </Collapse>
          </HeaderLinkZone>
          <HeaderRightZone>
            <UncontrolledDropdown nav tag='div'>
              <DropdownToggle nav caret role='button'>
                ITA
                <Icon icon='it-expand' />
              </DropdownToggle>
              <DropdownMenu>
                <Row>
                  <Col size='12'>
                    <LinkList>
                      <LinkListItem tag={DropdownItem} href='#'>
                        <span>ITA</span>
                      </LinkListItem>
                      <LinkListItem tag={DropdownItem} href='#'>
                        <span>ENG</span>
                      </LinkListItem>
                    </LinkList>
                  </Col>
                </Row>
              </DropdownMenu>
            </UncontrolledDropdown>
            <div className='it-access-top-wrapper'>
              <Button color='primary' size='sm'>
                Accedi
              </Button>
            </div>
          </HeaderRightZone>
        </HeaderContent>
      </Header>
    );
  }
}

export class CenterHeader extends Component<
  { theme?: 'light' | 'dark' | ''; iconName: string; iconAlt?: string },
  { collapsed: boolean }
> {
  render() {
    return (
      <Header type='center' theme={this.props.theme}>
        <HeaderContent>
          <HeaderBrand iconName={this.props.iconName} iconAlt={this.props.iconAlt || ''}>
            <h2>Lorem Ipsum Lorem Ipsum</h2>
            <h3>Inserire qui la tag line</h3>
          </HeaderBrand>
          <HeaderRightZone>
            <HeaderSocialsZone label='Seguici su'>
              <ul>
                <li>
                  <a href='#' aria-label='Facebook' target='_blank'>
                    <Icon icon='it-facebook' />
                  </a>
                </li>
                <li>
                  <a href='#' aria-label='Github' target='_blank'>
                    <Icon icon='it-github' />
                  </a>
                </li>
                <li>
                  <a href='#' aria-label='Twitter' target='_blank'>
                    <Icon icon='it-twitter' />
                  </a>
                </li>
              </ul>
            </HeaderSocialsZone>
            <HeaderSearch label='Cerca' iconName='it-search' />
          </HeaderRightZone>
        </HeaderContent>
      </Header>
    );
  }
}

export class NavHeader extends Component<{ theme?: 'light' | 'dark' | '' }, { collapsed: boolean }> {
  state = {
    collapsed: true
  };

  render() {
    const isOpen = !this.state.collapsed;
    return (
      // eslint-disable-next-line react/prop-types
      <Header type='navbar' theme={this.props.theme}>
        <HeaderContent expand='lg' megamenu>
          <HeaderToggler
            onClick={() => this.setState({ collapsed: isOpen })}
            aria-controls='nav1'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <Icon icon='it-burger' />
          </HeaderToggler>
          <Collapse isOpen={isOpen} navbar header onOverlayClick={() => this.setState({ collapsed: isOpen })}>
            <div className='menu-wrapper'>
              <Nav navbar>
                <NavItem active>
                  <NavLink href='#' active>
                    <span>link 1 active </span>
                    <span className='visually-hidden'>current</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='#' disabled>
                    Link 2
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='#'>Link 3</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='#'>Link 4</NavLink>
                </NavItem>
                <MegamenuItem itemName='Megamenu Classico'>
                  <Row>
                    <Col xs='12' lg='4'>
                      <LinkList>
                        <LinkListItem tag={DropdownItem} href='#'>
                          Link list Item 1
                        </LinkListItem>
                        <LinkListItem tag={DropdownItem} href='#'>
                          Link list Item 2
                        </LinkListItem>
                        <LinkListItem tag={DropdownItem} href='#'>
                          Link list Item 3
                        </LinkListItem>
                      </LinkList>
                    </Col>
                    <Col xs='12' lg='4'>
                      <LinkList>
                        <LinkListItem tag={DropdownItem} href='#'>
                          Link list Item 1
                        </LinkListItem>
                        <LinkListItem tag={DropdownItem} href='#'>
                          Link list Item 2
                        </LinkListItem>
                        <LinkListItem tag={DropdownItem} href='#'>
                          Link list Item 3
                        </LinkListItem>
                      </LinkList>
                    </Col>
                    <Col xs='12' lg='4'>
                      <LinkList>
                        <LinkListItem tag={DropdownItem} href='#'>
                          Link list Item 1
                        </LinkListItem>
                        <LinkListItem tag={DropdownItem} href='#'>
                          Link list Item 2
                        </LinkListItem>
                        <LinkListItem tag={DropdownItem} href='#'>
                          Link list Item 3
                        </LinkListItem>
                      </LinkList>
                    </Col>
                  </Row>
                </MegamenuItem>
              </Nav>
            </div>
          </Collapse>
        </HeaderContent>
      </Header>
    );
  }
}

const CompleteHeader = ({ theme, slimHeaderType, sticky, iconName, iconAlt }: HeaderCompleteProps) => {
  const SlimTag = slimHeaderType === 'default' ? SlimHeader : SlimHeaderFullResponsive;
  return (
    <Headers sticky={sticky}>
      <SlimTag theme={theme} />
      <div className='it-nav-wrapper'>
        <CenterHeader theme={theme} iconName={iconName} iconAlt={iconAlt} />
        <NavHeader theme={theme} />
      </div>
    </Headers>
  );
};

export default CompleteHeader;
