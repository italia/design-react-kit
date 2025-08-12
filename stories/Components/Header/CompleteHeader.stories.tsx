import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import {
  Button,
  Col,
  Collapse,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  Header,
  HeaderBrand,
  HeaderContent,
  HeaderLinkZone,
  HeaderProps,
  HeaderRightZone,
  HeaderSearch,
  HeaderSocialsZone,
  HeaderToggler,
  Headers,
  Icon,
  LinkList,
  LinkListItem,
  MegamenuHighlightColumn,
  MegamenuItem,
  Nav,
  NavItem,
  NavLink,
  Row
} from '../../../src';

type ThemeType = {
  theme: 'light' | 'dark' | '';
};

type HeaderCompleteProps = ThemeType & {
  slimHeaderType: string;
  sticky: boolean;
  iconName: string;
  iconAlt: string;
};

const CenterHeader = ({ theme }: ThemeType) => {
  return (
    <Header type='center' theme={theme} small={true}>
      <HeaderContent>
        <HeaderBrand iconName='it-code-circle' iconAlt='it code circle icon'>
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
};

const NavHeader = ({ theme }: ThemeType) => {
  const [isOpenSide, setIsOpenSide] = useState(false);
  return (
    <Header type='navbar' theme={theme}>
      <HeaderContent expand='lg' megamenu>
        <HeaderToggler
          onClick={() => {
            /* set logic open state  */
            setIsOpenSide(!isOpenSide);
          }}
          aria-controls='nav1'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <Icon icon='it-burger' />
        </HeaderToggler>
        <Collapse
          navbar
          header
          isOpen={isOpenSide}
          onOverlayClick={() => {
            /* set close logic here */
            setIsOpenSide(!isOpenSide);
          }}
        >
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
              <Dropdown inNavbar>
                <DropdownToggle caret>
                  <span>Menu Dropdown</span>
                </DropdownToggle>
                <DropdownMenu>
                  <LinkList>
                    <LinkListItem inDropdown href='#'>
                      <span>Link list 1</span>
                    </LinkListItem>
                    <LinkListItem inDropdown href='#'>
                      <span>Link list 2</span>
                    </LinkListItem>
                    <LinkListItem inDropdown href='#'>
                      <span>Link list 3</span>
                    </LinkListItem>
                    <LinkListItem inDropdown href='#'>
                      <span>Link list 4</span>
                    </LinkListItem>
                  </LinkList>
                </DropdownMenu>
              </Dropdown>
              <MegamenuItem itemName='Megamenu con Immagine e Descrizione'>
                <Row>
                  <MegamenuHighlightColumn xs='12' lg='4' description>
                    <div className='ratio ratio-21x9 lightgrey-bg-a1 mb-4 rounded'>
                      <figure className='figure'>
                        <img
                          src='https://placehold.co/560x240/ebebeb/808080/?text=Immagine'
                          className='figure-img img-fluid rounded'
                          alt='Segnaposto'
                        />
                      </figure>
                    </div>
                    <p>Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                  </MegamenuHighlightColumn>
                  <Col xs='12' lg='8'>
                    <div className='it-heading-link-wrapper'>
                      <a className='it-heading-link' href='#'>
                        <Icon className='icon icon-sm me-2 mb-1' icon='it-arrow-right-triangle'></Icon>
                        <span>Esplora la sezione megamenu</span>
                      </a>
                    </div>
                    <Row>
                      <Col xs='12' lg='6'>
                        <LinkList>
                          <LinkListItem inDropdown href='#'>
                            <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                            <span>Link lista 1</span>
                          </LinkListItem>
                          <LinkListItem inDropdown href='#'>
                            <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                            <span>Link lista 2</span>
                          </LinkListItem>
                          <LinkListItem inDropdown href='#'>
                            <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                            <span>Link lista 3</span>
                          </LinkListItem>
                        </LinkList>
                      </Col>
                      <Col xs='12' lg='6'>
                        <LinkList>
                          <LinkListItem inDropdown href='#'>
                            <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                            <span>Link lista 4</span>
                          </LinkListItem>
                          <LinkListItem inDropdown href='#'>
                            <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                            <span>Link lista 5</span>
                          </LinkListItem>
                          <LinkListItem inDropdown href='#'>
                            <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                            <span>Link lista 6</span>
                          </LinkListItem>
                        </LinkList>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </MegamenuItem>
            </Nav>
          </div>
        </Collapse>
      </HeaderContent>
    </Header>
  );
};

const SlimHeader = ({ theme, brandText }: Pick<HeaderProps, 'theme'> & { brandText: string }) => {
  const [isOpenCollapse, setIsOpenCollapse] = useState(false);
  return (
    <Header type='slim' theme={theme}>
      <HeaderContent>
        <HeaderBrand>{brandText}</HeaderBrand>
        <HeaderLinkZone aria-label='Navigazione accessoria'>
          <HeaderToggler
            isOpen={isOpenCollapse}
            onClick={() => {
              setIsOpenCollapse(!isOpenCollapse);
            }}
          >
            <span>{brandText}</span>
            <Icon icon='it-expand' />
          </HeaderToggler>
          <Collapse isOpen={isOpenCollapse} header>
            <LinkList noWrapper>
              <LinkListItem href='#'>Link 1</LinkListItem>
              <LinkListItem href='#' active>
                Link 2 Active
              </LinkListItem>
            </LinkList>
          </Collapse>
        </HeaderLinkZone>
        <HeaderRightZone>
          <Dropdown inNavbar>
            <DropdownToggle caret>
              ITA
            </DropdownToggle>
            <DropdownMenu>
              <Row>
                <Col size='12'>
                  <LinkList>
                    <LinkListItem inDropdown href='#'>
                      <span>ITA</span>
                    </LinkListItem>
                    <LinkListItem inDropdown href='#'>
                      <span>ENG</span>
                    </LinkListItem>
                  </LinkList>
                </Col>
              </Row>
            </DropdownMenu>
          </Dropdown>
          <div className='it-access-top-wrapper'>
            <Button color='primary' size='sm'>
              Accedi
            </Button>
          </div>
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
};

const meta: Meta = {
  title: 'Documentazione/Menu di navigazione/Header/Complete',
  component: Header,
  parameters: {
    docs: {
      controls: {
        exclude: ['isOpen', 'className', 'type', 'small', 'testId']
      }
    }
  }
};
export default meta;

type Story = StoryObj<HeaderCompleteProps>;

export const CompleteHeaderStory: Story = {
  render: ({ theme, sticky }) => (
    <Headers sticky={sticky}>
      <SlimHeader theme={theme} brandText='Ente di appartenenza'/>
      <div className='it-nav-wrapper'>
        <CenterHeader theme={theme} />
        <NavHeader theme={theme} />
      </div>
    </Headers>
  ),
  args: {
    theme: 'dark'
  },
  argTypes: {
    theme: {
      control: 'radio',
      options: ['', 'light', 'dark']
    },
    sticky: {
      control: 'boolean'
    }
  }
};
