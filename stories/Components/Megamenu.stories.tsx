import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import {
  Col,
  Collapse,
  Icon,
  LinkList,
  LinkListItem,
  MegamenuFooter,
  MegamenuHighlightColumn,
  MegamenuItem,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Row
} from '../../src';

const meta: Meta<typeof MegamenuItem> = {
  title: 'Documentazione/Menu di navigazione/Megamenu',
  component: MegamenuItem,
  parameters: {
    docs: {
      story: {
        height: '350px'
      },
      canvas: { sourceState: 'none' }
    }
  }
};

export default meta;

type Story = StoryObj<typeof MegamenuItem>;

const ConLinkMoreHooks = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggle = () => {
    setOpenNav(!openNav);
  };
  return (
    <Navbar expand='lg' className='has-megamenu'>
      <NavbarBrand />
      <NavbarToggler className='custom-navbar-toggler' onClick={toggle}>
        <Icon icon='it-list' size='sm' />
      </NavbarToggler>
      <Collapse isOpen={openNav} navbar header megamenu>
        <Nav className='mt-0' navbar>
          <MegamenuItem itemName='Megamenu con link "Esplora tutti"'>
            <Row>
              <Col xs='12' lg='4'>
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
              <Col xs='12' lg='4'>
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
              <Col xs='12' lg='4'>
                <LinkListItem inDropdown href='#'>
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                  <span>Link lista 7</span>
                </LinkListItem>
                <LinkListItem inDropdown href='#'>
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                  <span>Link lista 8</span>
                </LinkListItem>
                <LinkListItem inDropdown href='#'>
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                  <span>Link lista 9</span>
                </LinkListItem>
              </Col>
            </Row>
            <MegamenuFooter className='text-end'>
              <a href='#'>
                <span>
                  Esplora tutti i contenuti del megamenu{' '}
                  <Icon className='ms-2' color='primary' icon='it-arrow-right' size='sm' />
                </span>
              </a>
            </MegamenuFooter>
          </MegamenuItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export const ConLinkMore: Story = {
  render: () => {
    return <ConLinkMoreHooks />;
  }
};

const ConIntestazioneELinkMoreHooks = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggle = () => {
    setOpenNav(!openNav);
  };
  return (
    <Navbar expand='lg' className='has-megamenu'>
      <NavbarBrand />
      <NavbarToggler className='custom-navbar-toggler' onClick={toggle}>
        <Icon icon='it-list' size='sm' />
      </NavbarToggler>
      <Collapse isOpen={openNav} navbar header megamenu>
        <Nav className='mt-0' navbar>
          <MegamenuItem itemName='Megamenu con intestazione e "esplora tutti"'>
            <Row>
              <Col xs='12'>
                <div className='it-heading-link-wrapper'>
                  <a className='it-heading-link' href='#'>
                    <Icon className='me-2 mb-1' icon='it-arrow-right-triangle'></Icon>
                    <span>Esplora la sezione megamenu</span>
                  </a>
                </div>
                <Row>
                  <Col xs='12' lg='4'>
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
                  </Col>
                  <Col xs='12' lg='4'>
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
                  </Col>
                  <Col xs='12' lg='4'>
                    <LinkListItem inDropdown href='#'>
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                      <span>Link lista 7</span>
                    </LinkListItem>
                    <LinkListItem inDropdown href='#'>
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                      <span>Link lista 8</span>
                    </LinkListItem>
                    <LinkListItem inDropdown href='#'>
                      <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                      <span>Link lista 9</span>
                    </LinkListItem>
                  </Col>
                </Row>
              </Col>
            </Row>
          </MegamenuItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export const ConIntestazioneELinkMore: Story = {
  render: () => {
    return <ConIntestazioneELinkMoreHooks />;
  }
};

const ConCallToActionInBassoHooks = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggle = () => {
    setOpenNav(!openNav);
  };
  return (
    <Navbar expand='lg' className='has-megamenu'>
      <NavbarBrand />
      <NavbarToggler className='custom-navbar-toggler' onClick={toggle}>
        <Icon icon='it-list' size='sm' />
      </NavbarToggler>
      <Collapse isOpen={openNav} navbar header megamenu>
        <Nav className='mt-0' navbar>
          <MegamenuItem itemName='Megamenu con Call to Action in basso'>
            <Row>
              <Col xs='12' lg='4'>
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
              </Col>
              <Col xs='12' lg='4'>
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
              </Col>
              <Col xs='12' lg='4'>
                <LinkListItem inDropdown href='#'>
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                  <span>Link lista 7</span>
                </LinkListItem>
                <LinkListItem inDropdown href='#'>
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                  <span>Link lista 8</span>
                </LinkListItem>
                <LinkListItem inDropdown href='#'>
                  <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                  <span>Link lista 9</span>
                </LinkListItem>
              </Col>
            </Row>
            <MegamenuFooter>
              <div className='d-flex flex-column flex-lg-row justify-content-around'>
                <a href='#'>
                  <Icon className='me-2' color='primary' icon='it-bookmark' size='sm' />
                  <span>Call to action 1</span>
                </a>
                <a href='#'>
                  <Icon className='me-2' color='primary' icon='it-bookmark' size='sm' />
                  <span>Call to action 2</span>
                </a>
              </div>
            </MegamenuFooter>
          </MegamenuItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export const ConCallToActionInBasso: Story = {
  render: () => {
    return <ConCallToActionInBassoHooks />;
  }
};

const ConCallToActionADestraHooks = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggle = () => {
    setOpenNav(!openNav);
  };
  return (
    <Navbar expand='lg' className='has-megamenu'>
      <NavbarBrand />
      <NavbarToggler className='custom-navbar-toggler' onClick={toggle}>
        <Icon icon='it-list' size='sm' />
      </NavbarToggler>
      <Collapse isOpen={openNav} navbar header megamenu>
        <Nav className='mt-0' navbar>
          <MegamenuItem itemName='Megamenu con Call to Action a destra'>
            <Row>
              <Col xs='12' lg='8'>
                <Row>
                  <Col xs='12' lg='6'>
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
                  </Col>
                  <Col xs='12' lg='6'>
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
                  </Col>
                </Row>
              </Col>
              <Col xs='12' lg='4'>
                <MegamenuFooter vertical>
                  <div className='d-flex flex-column justify-content-around'>
                    <a href='#'>
                      <Icon className='me-2' color='primary' icon='it-bookmark' size='sm' />
                      <span>Call to action 1</span>
                    </a>
                    <a href='#'>
                      <Icon className='me-2' color='primary' icon='it-bookmark' size='sm' />
                      <span>Call to action 2</span>
                    </a>
                  </div>
                </MegamenuFooter>
              </Col>
            </Row>
          </MegamenuItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export const ConCallToActionADestra: Story = {
  render: () => {
    return <ConCallToActionADestraHooks />;
  }
};

const ConImmagineEDescrizioneHooks = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggle = () => {
    setOpenNav(!openNav);
  };
  return (
    <Navbar expand='lg' className='has-megamenu'>
      <NavbarBrand />
      <NavbarToggler className='custom-navbar-toggler' onClick={toggle}>
        <Icon icon='it-list' size='sm' />
      </NavbarToggler>
      <Collapse isOpen={openNav} navbar header megamenu>
        <Nav className='mt-0' navbar>
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
                  </Col>
                  <Col xs='12' lg='6'>
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
                  </Col>
                </Row>
              </Col>
            </Row>
          </MegamenuItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export const ConImmagineEDescrizione: Story = {
  render: () => {
    return <ConImmagineEDescrizioneHooks />;
  }
};
