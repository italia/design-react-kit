import React from 'react'
import {
  Button,
  UncontrolledCollapse,
  Row,
  Col,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Header,
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
  UncontrolledDropdown
} from '../../src'
import { Sticky, StickyProvider } from 'react-stickup'

const SlimHeader = props => {
  return (
    <Header type="slim">
      <HeaderContent>
        <HeaderBrand>Ente appartenenza/Owner</HeaderBrand>
        <HeaderLinkZone>
          <HeaderToggler>
            <span>Ente appartenenza/Owner</span>
            <Icon icon="it-expand" />
          </HeaderToggler>
          <UncontrolledCollapse toggler>
            <LinkList>
              <LinkListItem href="#">Link 1</LinkListItem>
              <LinkListItem href="#" active>
                Link 2 Active
              </LinkListItem>
            </LinkList>
          </UncontrolledCollapse>
        </HeaderLinkZone>
        <HeaderRightZone>
          <UncontrolledDropdown nav tag="div">
            <DropdownToggle nav caret>
              ITA
              <Icon icon="it-expand" />
            </DropdownToggle>
            <DropdownMenu>
              <Row>
                <Col size="12">
                  <LinkList>
                    <LinkListItem tag={DropdownItem} href="#">
                      <span>ITA</span>
                    </LinkListItem>
                    <LinkListItem tag={DropdownItem} href="#">
                      <span>ENG</span>
                    </LinkListItem>
                  </LinkList>
                </Col>
              </Row>
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

const CenterHeader = props => {
  return (
    <Header type="center">
      <HeaderContent>
        <HeaderBrand iconName="it-code-circle">
          <h2>Lorem Ipsum Lorem Ipsum</h2>
          <h3>Inserire qui la tag line</h3>
        </HeaderBrand>
        <HeaderRightZone>
          <HeaderSocialsZone label="Seguici su">
            <ul>
              <li>
                <a href="#" aria-label="Facebook" target="_blank">
                  <Icon icon="it-facebook" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Github" target="_blank">
                  <Icon icon="it-github" />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Twitter" target="_blank">
                  <Icon icon="it-twitter" />
                </a>
              </li>
            </ul>
          </HeaderSocialsZone>
          <HeaderSearch label="Cerca" iconName="it-search" />
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  )
}

const NavHeader = props => {
  return (
    <Header type="navbar">
      <HeaderContent expand="lg" megamenu>
        <HeaderToggler
          aria-controls="nav1"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <Icon icon="it-burger" />
        </HeaderToggler>
        <UncontrolledCollapse toggler>
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
                <NavLink href="#" disabled>
                  Megamenu label
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </UncontrolledCollapse>
      </HeaderContent>
    </Header>
  )
}

const StickyHeader = () => {
  return (
    <StickyProvider>
      <Sticky style={{ position: 'sticky', zIndex: 2 }}>
        <SlimHeader />
        <CenterHeader />
        <NavHeader />
      </Sticky>
    </StickyProvider>
  )
}

export default StickyHeader
