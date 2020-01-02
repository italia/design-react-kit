import React, { Component } from 'react'
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
  UncontrolledDropdown
} from '../../../src'

// eslint-disable-next-line react/prop-types
const SlimHeaderFullResponsive = ({ theme }) => {
  return (
    <Header type="slim" theme={theme}>
      <HeaderContent>
        <HeaderBrand responsive>Ente appartenenza/Owner</HeaderBrand>
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
          <Button color="primary" size="full" className="btn-icon" href="#">
            <span className="rounded-icon">
              <Icon color="primary" icon="it-user" />
            </span>
            <span className="d-none d-lg-block">
              Accedi all&#39;area personale
            </span>
          </Button>
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  )
}

// eslint rule has to be disable for few lines here as Storybook addons will go in error
// if PropTypes are declared in these components
export class SlimHeader extends Component {
  state = {
    collapsed: true
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
            <Collapse isOpen={!this.state.collapsed} header>
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
}

export class NavHeader extends Component {
  state = {
    collapsed: true
  }

  render() {
    const isOpen = !this.state.collapsed
    // eslint-disable-next-line react/prop-types
    const { active, theme } = this.props
    return (
      <Header type="navbar" theme={theme}>
        <HeaderContent expand="lg" megamenu>
          <HeaderToggler
            onClick={() => this.setState({ collapsed: isOpen })}
            aria-controls="nav1"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <Icon icon="it-burger" />
          </HeaderToggler>
          <Collapse
            isOpen={isOpen}
            navbar
            header
            onOverlayClick={() => this.setState({ collapsed: isOpen })}>
            <div className="menu-wrapper">
              <Nav navbar>
                {[
                  'Amministrazione',
                  'Novità',
                  'Servizi',
                  'Documenti e Dati'
                ].map(label => {
                  const isActive = label === active
                  return (
                    <NavItem active={isActive} key={label}>
                      <NavLink href="#" active={isActive}>
                        <span>{label}</span>
                        {isActive && <span className="sr-only">current</span>}
                      </NavLink>
                    </NavItem>
                  )
                })}
              </Nav>
              <Nav navbar className="navbar-secondary">
                {[
                  { label: 'Argomento 1' },
                  { label: 'Argomento 2' },
                  { label: 'Tutti gli argomenti...', bold: true }
                ].map(({ label, bold }) => {
                  return (
                    <NavItem key={label}>
                      <NavLink href="#">
                        <span className={`${bold ? 'font-weight-bold' : ''}`}>
                          {label}
                        </span>
                      </NavLink>
                    </NavItem>
                  )
                })}
              </Nav>
            </div>
          </Collapse>
        </HeaderContent>
      </Header>
    )
  }
}

const CompleteHeader = ({
  // eslint-disable-next-line react/prop-types
  page,
  // eslint-disable-next-line react/prop-types
  sticky,
  // eslint-disable-next-line react/prop-types
  theme,
  // eslint-disable-next-line react/prop-types
  type,
  // eslint-disable-next-line react/prop-types
  townName,
  // eslint-disable-next-line react/prop-types
  townTagLine
}) => {
  const SlimTag = type === 'default' ? SlimHeader : SlimHeaderFullResponsive
  return (
    <Headers sticky={sticky}>
      <SlimTag theme={theme} />
      <div className="it-nav-wrapper">
        <CenterHeader
          theme={theme}
          townName={townName}
          townTagLine={townTagLine}
        />
        <NavHeader theme={theme} active={page} />
      </div>
    </Headers>
  )
}

export default CompleteHeader
