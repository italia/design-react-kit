/* eslint jsx-a11y/anchor-is-valid: 0 */
import * as React from 'react';
import type { FC } from 'react';
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
} from '../src';

type Theme = {
  theme?: 'light' | 'dark';
};

type TownLabels = {
  townName: string;
  townTagLine: string;
  logo: string;
  logoAlt: string;
};

type State = { collapsed: boolean };

// eslint rule has to be disable for few lines here as Storybook addons will go in error
// if PropTypes are declared in these components
export class SlimHeader extends React.Component<Theme, State> {
  state = {
    collapsed: true
  };

  render() {
    return (
      // eslint-disable-next-line react/prop-types
      <Header type='slim' theme={this.props.theme}>
        <HeaderContent>
          <HeaderBrand>Ente appartenenza/Owner</HeaderBrand>
          <HeaderLinkZone>
            <HeaderToggler
              onClick={() =>
                this.setState({ collapsed: !this.state.collapsed })
              }
            >
              <span>Ente appartenenza/Owner</span>
              <Icon icon='it-expand' />
            </HeaderToggler>
            <Collapse isOpen={!this.state.collapsed} header>
              <LinkList>
                <LinkListItem href='#'>Link 1</LinkListItem>
                <LinkListItem active href='#'>
                  Link 2 Active
                </LinkListItem>
              </LinkList>
            </Collapse>
          </HeaderLinkZone>
          <HeaderRightZone>
            <UncontrolledDropdown nav tag='div'>
              <DropdownToggle nav caret>
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

export const CenterHeader: FC<TownLabels & Theme> = ({
  townName,
  townTagLine,
  theme,
  logo,
  logoAlt = ''
}) => {
  return (
    <Header type='center' theme={theme}>
      <HeaderContent>
        <HeaderBrand iconName={logo} iconAlt={logoAlt}>
          <h2>{townName}</h2>
          <h3>{townTagLine}</h3>
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
};

export class NavHeader extends React.Component<
  { active: string } & Theme,
  State
> {
  state = {
    collapsed: true
  };

  render() {
    const isOpen = !this.state.collapsed;
    const { active, theme } = this.props;
    return (
      <Header type='navbar' theme={theme}>
        <HeaderContent expand='lg' megamenu>
          <HeaderToggler
            onClick={() => this.setState({ collapsed: isOpen })}
            aria-controls='nav1'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <Icon icon='it-burger' />
          </HeaderToggler>
          <Collapse
            isOpen={isOpen}
            navbar
            header
            onOverlayClick={() => this.setState({ collapsed: isOpen })}
          >
            <div className='menu-wrapper'>
              <Nav navbar>
                {[
                  'Amministrazione',
                  'Novità',
                  'Servizi',
                  'Documenti e Dati'
                ].map((label) => {
                  const isActive = label === active;
                  return (
                    <NavItem active={isActive} key={label}>
                      <NavLink href='#' active={isActive}>
                        <span>{label}</span>
                        {isActive && <span className='sr-only'>current</span>}
                      </NavLink>
                    </NavItem>
                  );
                })}
              </Nav>
              <Nav navbar secondary>
                {[
                  { label: 'Argomento 1' },
                  { label: 'Argomento 2' },
                  { label: 'Tutti gli argomenti...', bold: true }
                ].map(({ label, bold }) => {
                  return (
                    <NavItem key={label}>
                      <NavLink href='#'>
                        <span className={`${bold ? 'font-weight-bold' : ''}`}>
                          {label}
                        </span>
                      </NavLink>
                    </NavItem>
                  );
                })}
              </Nav>
            </div>
          </Collapse>
        </HeaderContent>
      </Header>
    );
  }
}

export default ({ page, sticky, theme, townName, townTagLine, logo }) => {
  return (
    <Headers sticky={sticky}>
      <SlimHeader theme={theme} />
      <div className='it-nav-wrapper'>
        <CenterHeader
          logo={logo}
          theme={theme}
          townName={townName}
          townTagLine={townTagLine}
        />
        <NavHeader theme={theme} active={page} />
      </div>
    </Headers>
  );
};
