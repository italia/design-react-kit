import React, { useState } from 'react';
import {
  Col,
  Icon,
  LinkList,
  LinkListItem,
  MegamenuItem,
  MegamenuFooter,
  MegamenuHighlightColumn,
  Row,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  Collapse
} from '../../src';

export const ConLinkMore = () => {
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
                <LinkList>
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
                </LinkList>
              </Col>
            </Row>
            <MegamenuFooter className='text-end'>
              <MegamenuFooter.Item href='#'>
                <span>
                  Esplora tutti i contenuti del megamenu{' '}
                  <Icon className='ms-2' color='primary' icon='it-arrow-right' size='sm' />
                </span>
              </MegamenuFooter.Item>
            </MegamenuFooter>
          </MegamenuItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
export const ConIntestazioneELinkMore = () => {
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
                    <LinkList>
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
                    </LinkList>
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
export const ConCallToActionInBasso = () => {
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
                <LinkList>
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
                </LinkList>
              </Col>
            </Row>
            <MegamenuFooter>
              <div className='d-flex flex-column flex-lg-row justify-content-around'>
                <MegamenuFooter.Item href='#'>
                  <Icon className='me-2' color='primary' icon='it-bookmark' size='sm' />
                  <span>Call to action 1</span>
                </MegamenuFooter.Item>
                <MegamenuFooter.Item href='#'>
                  <Icon className='me-2' color='primary' icon='it-bookmark' size='sm' />
                  <span>Call to action 2</span>
                </MegamenuFooter.Item>
              </div>
            </MegamenuFooter>
          </MegamenuItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
export const ConCallToActionADestra = () => {
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
                </Row>
              </Col>
              <Col xs='12' lg='4'>
                <MegamenuFooter vertical>
                  <div className='d-flex flex-column justify-content-around'>
                    <MegamenuFooter.Item href='#'>
                      <Icon className='me-2' color='primary' icon='it-bookmark' size='sm' />
                      <span>Call to action 1</span>
                    </MegamenuFooter.Item>
                    <MegamenuFooter.Item href='#'>
                      <Icon className='me-2' color='primary' icon='it-bookmark' size='sm' />
                      <span>Call to action 2</span>
                    </MegamenuFooter.Item>
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
export const ConImmagineEDescrizione = () => {
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
                      src='https://via.placeholder.com/560x240/ebebeb/808080/?text=Immagine'
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
      </Collapse>
    </Navbar>
  );
};

export default {
  title: 'Componenti/Megamenu'
};
