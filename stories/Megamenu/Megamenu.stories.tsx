import React, { useState }  from 'react';
import {
    Col,
    Collapse,
    Icon,
    LinkList,
    LinkListItem,
    MegamenuItem,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Row,
} from '../../src';

export const Classico = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggle = () => {
    setOpenNav(!openNav);
  };
  return (
    <Navbar expand='lg' className='has-megamenu'>
      <NavbarBrand />
      <NavbarToggler className='custom-navbar-toggler' onClick={toggle}>
        <Icon icon='it-list' size='sm'/>
      </NavbarToggler>
      <Collapse isOpen={openNav} navbar>
        <Nav className='mt-0' navbar>
          <MegamenuItem itemName='Megamenu Classico'>
            <Row>
              <Col>
                <LinkList >
                  <LinkListItem href="#">Link list Item 1</LinkListItem>
                  <LinkListItem href="#">Link list Item 2</LinkListItem>
                  <LinkListItem href="#">Link list Item 3</LinkListItem>
                  <LinkListItem href="#">Link list Item 4</LinkListItem>
                </LinkList>
              </Col>
              <Col>
                <LinkList >
                  <LinkListItem href="#">Link list Item 1</LinkListItem>
                  <LinkListItem href="#">Link list Item 2</LinkListItem>
                  <LinkListItem href="#">Link list Item 3</LinkListItem>
                  <LinkListItem href="#">Link list Item 4</LinkListItem>
                </LinkList>
              </Col>
              <Col>
                <LinkList >
                  <LinkListItem href="#">Link list Item 1</LinkListItem>
                  <LinkListItem href="#">Link list Item 2</LinkListItem>
                  <LinkListItem href="#">Link list Item 3</LinkListItem>
                  <LinkListItem href="#">Link list Item 4</LinkListItem>
                </LinkList>
              </Col>
            </Row>
          </MegamenuItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export const ConLinkMore = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggle = () => {
    setOpenNav(!openNav);
  };
  return (
    <Navbar expand='lg' className='has-megamenu'>
      <NavbarBrand />
      <NavbarToggler className='custom-navbar-toggler' onClick={toggle}>
        <Icon icon='it-list' size='sm'/>
      </NavbarToggler>
      <Collapse isOpen={openNav} navbar header megamenu>
        <Nav className='mt-0' navbar>
          <MegamenuItem itemName='Megamenu con Link More'>
            <Row>
              <Col>
                <LinkList >
                  <LinkListItem href="#">Link list Item 1</LinkListItem>
                  <LinkListItem href="#">Link list Item 2</LinkListItem>
                  <LinkListItem href="#">Link list Item 3</LinkListItem>
                  <LinkListItem href="#">Link list Item 4</LinkListItem>
                </LinkList>
              </Col>
              <Col>
                <LinkList >
                  <LinkListItem href="#">Link list Item 1</LinkListItem>
                  <LinkListItem href="#">Link list Item 2</LinkListItem>
                  <LinkListItem href="#">Link list Item 3</LinkListItem>
                  <LinkListItem href="#">Link list Item 4</LinkListItem>
                </LinkList>
              </Col>
              <Col>
                <LinkList >
                  <LinkListItem href="#">Link list Item 1</LinkListItem>
                  <LinkListItem href="#">Link list Item 2</LinkListItem>
                  <LinkListItem href="#">Link list Item 3</LinkListItem>
                  <LinkListItem href="#">Link list Item 4</LinkListItem>
                </LinkList>
              </Col>
            </Row>
            <div className='it-external'>
              <Row>
                <Col />
                <Col />
                <Col>
                  <LinkList >
                    <LinkListItem wrapperClassName='it-more' className='medium' href="#">Link list Item 5 <Icon color='primary' icon='it-arrow-right' size='sm' /></LinkListItem>
                  </LinkList>
                </Col>
              </Row>
            </div>
          </MegamenuItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
export const ConIntestazione = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggle = () => {
    setOpenNav(!openNav);
  };
  return (
    <Navbar expand='lg' className='has-megamenu'>
      <NavbarBrand />
      <NavbarToggler className='custom-navbar-toggler' onClick={toggle}>
        <Icon icon='it-list' size='sm'/>
      </NavbarToggler>
      <Collapse isOpen={openNav} navbar>
        <div className='menu-wrapper'>
          <Nav className='mt-0' navbar>
            <MegamenuItem itemName='Megamenu con Intestazione'>
              <Row>
                <Col>
                  <LinkList >
                    <LinkListItem header>Heading 1</LinkListItem>
                    <LinkListItem href="#">Link list Item 1</LinkListItem>
                    <LinkListItem href="#">Link list Item 2</LinkListItem>
                    <LinkListItem href="#">Link list Item 3</LinkListItem>
                    <LinkListItem href="#">Link list Item 4</LinkListItem>
                  </LinkList>
                </Col>
                <Col>
                  <LinkList >
                    <LinkListItem header>Heading 2</LinkListItem>
                    <LinkListItem href="#">Link list Item 1</LinkListItem>
                    <LinkListItem href="#">Link list Item 2</LinkListItem>
                    <LinkListItem href="#">Link list Item 3</LinkListItem>
                    <LinkListItem href="#">Link list Item 4</LinkListItem>
                  </LinkList>
                </Col>
                <Col>
                  <LinkList >
                    <LinkListItem header>Heading 3</LinkListItem>
                    <LinkListItem href="#">Link list Item 1</LinkListItem>
                    <LinkListItem href="#">Link list Item 2</LinkListItem>
                    <LinkListItem href="#">Link list Item 3</LinkListItem>
                    <LinkListItem href="#">Link list Item 4</LinkListItem>
                  </LinkList>
                </Col>
              </Row>
            </MegamenuItem>
          </Nav>
        </div>
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
        <Icon icon='it-list' size='sm'/>
      </NavbarToggler>
      <Collapse isOpen={openNav} navbar>
        <div className='menu-wrapper'>
          <Nav className='mt-0' navbar>
            <MegamenuItem itemName='Megamenu con Intestazione e Link More'>
              <Row>
                <Col>
                  <LinkList >
                    <LinkListItem header>Heading 1</LinkListItem>
                    <LinkListItem href="#">Link list Item 1</LinkListItem>
                    <LinkListItem href="#">Link list Item 2</LinkListItem>
                    <LinkListItem href="#">Link list Item 3</LinkListItem>
                    <LinkListItem href="#">Link list Item 4</LinkListItem>
                      <LinkListItem wrapperClassName='it-more' className='medium' href="#">View More <Icon color='primary' icon='it-arrow-right' size='sm' /></LinkListItem>
                  </LinkList>
                </Col>
                <Col>
                  <LinkList >
                    <LinkListItem header>Heading 2</LinkListItem>
                    <LinkListItem href="#">Link list Item 1</LinkListItem>
                    <LinkListItem href="#">Link list Item 2</LinkListItem>
                    <LinkListItem href="#">Link list Item 3</LinkListItem>
                    <LinkListItem href="#">Link list Item 4</LinkListItem>
                      <LinkListItem wrapperClassName='it-more' className='medium' href="#">View More <Icon color='primary' icon='it-arrow-right' size='sm' /></LinkListItem>
                  </LinkList>
                </Col>
                <Col>
                  <LinkList >
                    <LinkListItem header>Heading 3</LinkListItem>
                    <LinkListItem href="#">Link list Item 1</LinkListItem>
                    <LinkListItem href="#">Link list Item 2</LinkListItem>
                    <LinkListItem href="#">Link list Item 3</LinkListItem>
                    <LinkListItem href="#">Link list Item 4</LinkListItem>
                      <LinkListItem wrapperClassName='it-more' className='medium' href="#">View More <Icon color='primary' icon='it-arrow-right' size='sm' /></LinkListItem>
                  </LinkList>
                </Col>
              </Row>
            </MegamenuItem>
          </Nav>
        </div>
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
        <Icon icon='it-list' size='sm'/>
      </NavbarToggler>
      <Collapse isOpen={openNav} navbar>
        <div className='menu-wrapper'>
          <Nav className='mt-0' navbar>
            <MegamenuItem itemName='Megamenu con Call to Action in basso'>
              <Row>
                <Col>
                  <LinkList >
                    <LinkListItem href="#">Link list Item 1</LinkListItem>
                    <LinkListItem href="#">Link list Item 2</LinkListItem>
                    <LinkListItem href="#">Link list Item 3</LinkListItem>
                    <LinkListItem href="#">Link list Item 4</LinkListItem>
                  </LinkList>
                </Col>
                <Col>
                  <LinkList >
                    <LinkListItem href="#">Link list Item 1</LinkListItem>
                    <LinkListItem href="#">Link list Item 2</LinkListItem>
                    <LinkListItem href="#">Link list Item 3</LinkListItem>
                    <LinkListItem href="#">Link list Item 4</LinkListItem>
                  </LinkList>
                </Col>
                <Col>
                  <LinkList >
                    <LinkListItem href="#">Link list Item 1</LinkListItem>
                    <LinkListItem href="#">Link list Item 2</LinkListItem>
                    <LinkListItem href="#">Link list Item 3</LinkListItem>
                    <LinkListItem href="#">Link list Item 4</LinkListItem>
                  </LinkList>
                </Col>
              </Row>
              <div className='it-megamenu-footer'>
                <Row>
                  <Col>
                    <LinkList>
                      <LinkListItem href="#"><Icon color='primary' icon='it-star-outline' size='sm' /> Link list 1</LinkListItem>
                    </LinkList>
                  </Col>
                  <Col>
                    <LinkList>
                      <LinkListItem href="#"><Icon color='primary' icon='it-star-outline' size='sm' /> Link list 2</LinkListItem>
                    </LinkList>
                  </Col>
                  <Col>
                    <LinkList>
                      <LinkListItem href="#"><Icon color='primary' icon='it-star-outline' size='sm' /> Link list 3</LinkListItem>
                    </LinkList>
                  </Col>
                </Row>
              </div>
            </MegamenuItem>
          </Nav>
        </div>
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
        <Icon icon='it-list' size='sm'/>
      </NavbarToggler>
      <Collapse isOpen={openNav} navbar>
        <div className='menu-wrapper'>
          <Nav className='mt-0' navbar>
            <MegamenuItem itemName='Megamenu con Call to Action a destra'>
              <Row className='max-height-col'>
                <Col xs='12' lg='8'>
                  <Row className='margin-right-col'>
                    <Col>
                      <LinkList >
                        <LinkListItem href="#">Link list Item 1</LinkListItem>
                        <LinkListItem href="#">Link list Item 2</LinkListItem>
                        <LinkListItem href="#">Link list Item 3</LinkListItem>
                        <LinkListItem href="#">Link list Item 4</LinkListItem>
                      </LinkList>
                    </Col>
                    <Col>
                      <LinkList >
                        <LinkListItem href="#">Link list Item 1</LinkListItem>
                        <LinkListItem href="#">Link list Item 2</LinkListItem>
                        <LinkListItem href="#">Link list Item 3</LinkListItem>
                        <LinkListItem href="#">Link list Item 4</LinkListItem>
                      </LinkList>
                    </Col>
                    <Col>
                      <LinkList >
                        <LinkListItem href="#">Link list Item 1</LinkListItem>
                        <LinkListItem href="#">Link list Item 2</LinkListItem>
                        <LinkListItem href="#">Link list Item 3</LinkListItem>
                        <LinkListItem href="#">Link list Item 4</LinkListItem>
                      </LinkList>
                    </Col>
                  </Row>
                </Col>
                <Col xs='12' lg='4'>
                  <Row className='max-height-col'>
                    <Col className='it-vertical'>
                      <LinkList>
                        <LinkListItem href="#">Link list 1 <Icon color='primary' icon='it-star-outline' size='sm' /></LinkListItem>
                        <LinkListItem href="#">Link list 2 <Icon color='primary' icon='it-star-outline' size='sm' /></LinkListItem>
                        <LinkListItem href="#">Link list 3 <Icon color='primary' icon='it-star-outline' size='sm' /></LinkListItem>
                      </LinkList>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </MegamenuItem>
          </Nav>
        </div>
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
        <Icon icon='it-list' size='sm'/>
      </NavbarToggler>
      <Collapse isOpen={openNav} navbar>
        <div className='menu-wrapper'>
          <Nav className='mt-0' navbar>
            <MegamenuItem itemName='Megamenu con Immagine e Descrizione'>
              <Row className='max-height-col'>
                <Col xs='12' lg='8'>
                  <Row className='margin-right-col'>
                    <Col>
                      <LinkList >
                        <LinkListItem href="#">Link list Item 1</LinkListItem>
                        <LinkListItem href="#">Link list Item 2</LinkListItem>
                        <LinkListItem href="#">Link list Item 3</LinkListItem>
                        <LinkListItem href="#">Link list Item 4</LinkListItem>
                      </LinkList>
                    </Col>
                    <Col>
                      <LinkList >
                        <LinkListItem href="#">Link list Item 1</LinkListItem>
                        <LinkListItem href="#">Link list Item 2</LinkListItem>
                        <LinkListItem href="#">Link list Item 3</LinkListItem>
                        <LinkListItem href="#">Link list Item 4</LinkListItem>
                      </LinkList>
                    </Col>
                    <Col>
                      <LinkList >
                        <LinkListItem href="#">Link list Item 1</LinkListItem>
                        <LinkListItem href="#">Link list Item 2</LinkListItem>
                        <LinkListItem href="#">Link list Item 3</LinkListItem>
                        <LinkListItem href="#">Link list Item 4</LinkListItem>
                      </LinkList>
                    </Col>
                  </Row>
                </Col>
                <Col xs='12' lg='4'>
                  <Row>
                    <Col className='it-vertical it-description'>
                      <div className='description-content'>
                        <img src="https://via.placeholder.com/225x110/ebebeb/808080/?text=Immagine" alt="placeholder" title="placeholder title" />
                        <p>Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </MegamenuItem>
          </Nav>
        </div>
      </Collapse>
    </Navbar>
  );
};
export const ConColonneAsimmetriche = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggle = () => {
    setOpenNav(!openNav);
  };
  return (
    <Navbar expand='lg' className='has-megamenu'>
      <NavbarBrand />
      <NavbarToggler className='custom-navbar-toggler' onClick={toggle}>
        <Icon icon='it-list' size='sm'/>
      </NavbarToggler>
      <Collapse isOpen={openNav} navbar>
        <div className='menu-wrapper'>
          <Nav className='mt-0' navbar>
            <MegamenuItem itemName='Megamenu con Colonne Asimmetriche'>
              <Row>
                <Col xs='12' lg='8'>
                  <Row>
                    <Col>
                      <LinkList>
                        <LinkListItem header className='it-heading-megacolumn no_toc'>Heading title left</LinkListItem>
                      </LinkList>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <LinkList >
                        <LinkListItem href="#">Link list Item 1</LinkListItem>
                        <LinkListItem href="#">Link list Item 2</LinkListItem>
                        <LinkListItem href="#">Link list Item 3</LinkListItem>
                        <LinkListItem href="#">Link list Item 4</LinkListItem>
                      </LinkList>
                    </Col>
                    <Col>
                      <LinkList >
                        <LinkListItem href="#">Link list Item 1</LinkListItem>
                        <LinkListItem href="#">Link list Item 2</LinkListItem>
                        <LinkListItem href="#">Link list Item 3</LinkListItem>
                        <LinkListItem href="#">Link list Item 4</LinkListItem>
                      </LinkList>
                    </Col>
                  </Row>
                </Col>
                <Col xs='12' lg='4'>
                  <Row>
                    <Col>
                      <LinkList>
                        <LinkListItem header className='it-heading-megacolumn no_toc'>Heading title right</LinkListItem>
                      </LinkList>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <LinkList >
                        <LinkListItem href="#">Link list Item 1</LinkListItem>
                        <LinkListItem href="#">Link list Item 2</LinkListItem>
                        <LinkListItem href="#">Link list Item 3</LinkListItem>
                        <LinkListItem href="#">Link list Item 4</LinkListItem>
                      </LinkList>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </MegamenuItem>
          </Nav>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default {
  title: 'Componenti/Megamenu'
};
