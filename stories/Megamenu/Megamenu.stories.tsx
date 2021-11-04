import React from 'react';
import {
  Col,
  Icon,
  LinkList,
  LinkListItem,
  Megamenu,
  MegamenuItem,
  MegamenuFooter,
  MegamenuHighlightColumn,
  Row
} from '../../src';

export const Classico = () => {
  return (
    <Megamenu expand='lg'>
      <MegamenuItem itemName='Megamenu Classico'>
        <Row>
          <Col xs='12' lg='4'>
            <LinkList>
              <LinkListItem href='#'>Link list Item 1</LinkListItem>
              <LinkListItem href='#'>Link list Item 2</LinkListItem>
              <LinkListItem href='#'>Link list Item 3</LinkListItem>
            </LinkList>
          </Col>
          <Col xs='12' lg='4'>
            <LinkList>
              <LinkListItem href='#'>Link list Item 1</LinkListItem>
              <LinkListItem href='#'>Link list Item 2</LinkListItem>
              <LinkListItem href='#'>Link list Item 3</LinkListItem>
            </LinkList>
          </Col>
          <Col xs='12' lg='4'>
            <LinkList>
              <LinkListItem href='#'>Link list Item 1</LinkListItem>
              <LinkListItem href='#'>Link list Item 2</LinkListItem>
              <LinkListItem href='#'>Link list Item 3</LinkListItem>
            </LinkList>
          </Col>
        </Row>
      </MegamenuItem>
    </Megamenu>
  );
};

export const ConLinkMore = () => {
  return (
    <Megamenu expand='lg'>
      <MegamenuItem itemName='Megamenu con Link More'>
        <Row>
          <Col xs='12' lg='4'>
            <LinkList>
              <LinkListItem href='#'>Link list Item 1</LinkListItem>
              <LinkListItem href='#'>Link list Item 2</LinkListItem>
              <LinkListItem href='#'>Link list Item 3</LinkListItem>
            </LinkList>
          </Col>
          <Col xs='12' lg='4'>
            <LinkList>
              <LinkListItem href='#'>Link list Item 1</LinkListItem>
              <LinkListItem href='#'>Link list Item 2</LinkListItem>
              <LinkListItem href='#'>Link list Item 3</LinkListItem>
            </LinkList>
          </Col>
          <Col xs='12' lg='4'>
            <LinkList>
              <LinkListItem href='#'>Link list Item 1</LinkListItem>
              <LinkListItem href='#'>Link list Item 2</LinkListItem>
              <LinkListItem href='#'>Link list Item 3</LinkListItem>
            </LinkList>
          </Col>
        </Row>
        <div className='it-external'>
          <Row>
            <Col xs='12' lg='4' />
            <Col xs='12' lg='4' />
            <Col xs='12' lg='4'>
              <LinkList>
                <LinkListItem
                  wrapperClassName='it-more'
                  className='medium'
                  href='#'
                >
                  Link list Item 5
                  <Icon color='primary' icon='it-arrow-right' size='sm' />
                </LinkListItem>
              </LinkList>
            </Col>
          </Row>
        </div>
      </MegamenuItem>
    </Megamenu>
  );
};
export const ConIntestazione = () => {
  return (
    <Megamenu expand='lg'>
      <MegamenuItem itemName='Megamenu con Intestazione'>
        <Row>
          <Col xs='12' lg='4'>
            <LinkList>
              <LinkListItem header>Heading 1</LinkListItem>
              <LinkListItem href='#'>Link list Item 1</LinkListItem>
              <LinkListItem href='#'>Link list Item 2</LinkListItem>
              <LinkListItem href='#'>Link list Item 3</LinkListItem>
            </LinkList>
          </Col>
          <Col xs='12' lg='4'>
            <LinkList>
              <LinkListItem header>Heading 2</LinkListItem>
              <LinkListItem href='#'>Link list Item 1</LinkListItem>
              <LinkListItem href='#'>Link list Item 2</LinkListItem>
              <LinkListItem href='#'>Link list Item 3</LinkListItem>
            </LinkList>
          </Col>
          <Col xs='12' lg='4'>
            <LinkList>
              <LinkListItem header>Heading 3</LinkListItem>
              <LinkListItem href='#'>Link list Item 1</LinkListItem>
              <LinkListItem href='#'>Link list Item 2</LinkListItem>
              <LinkListItem href='#'>Link list Item 3</LinkListItem>
            </LinkList>
          </Col>
        </Row>
      </MegamenuItem>
    </Megamenu>
  );
};
export const ConIntestazioneELinkMore = () => {
  return (
    <Megamenu expand='lg'>
      <MegamenuItem itemName='Megamenu con Intestazione e Link More'>
        <Row>
          <Col xs='12' lg='4'>
            <LinkList>
              <LinkListItem header>Heading 1</LinkListItem>
              <LinkListItem href='#'>Link list Item 1</LinkListItem>
              <LinkListItem href='#'>Link list Item 2</LinkListItem>
              <LinkListItem href='#'>Link list Item 3</LinkListItem>
              <LinkListItem
                wrapperClassName='it-more'
                className='medium'
                href='#'
              >
                View More
                <Icon color='primary' icon='it-arrow-right' size='sm' />
              </LinkListItem>
            </LinkList>
          </Col>
          <Col xs='12' lg='4'>
            <LinkList>
              <LinkListItem header>Heading 2</LinkListItem>
              <LinkListItem href='#'>Link list Item 1</LinkListItem>
              <LinkListItem href='#'>Link list Item 2</LinkListItem>
              <LinkListItem href='#'>Link list Item 3</LinkListItem>
              <LinkListItem
                wrapperClassName='it-more'
                className='medium'
                href='#'
              >
                View More
                <Icon color='primary' icon='it-arrow-right' size='sm' />
              </LinkListItem>
            </LinkList>
          </Col>
          <Col xs='12' lg='4'>
            <LinkList>
              <LinkListItem header>Heading 3</LinkListItem>
              <LinkListItem href='#'>Link list Item 1</LinkListItem>
              <LinkListItem href='#'>Link list Item 2</LinkListItem>
              <LinkListItem href='#'>Link list Item 3</LinkListItem>
              <LinkListItem
                wrapperClassName='it-more'
                className='medium'
                href='#'
              >
                View More
                <Icon color='primary' icon='it-arrow-right' size='sm' />
              </LinkListItem>
            </LinkList>
          </Col>
        </Row>
      </MegamenuItem>
    </Megamenu>
  );
};
export const ConCallToActionInBasso = () => {
  return (
    <Megamenu expand='lg'>
      <MegamenuItem itemName='Megamenu con Call to Action in basso'>
        <Row>
          <Col xs='12' lg='4'>
            <LinkList>
              <LinkListItem href='#'>Link list Item 1</LinkListItem>
              <LinkListItem href='#'>Link list Item 2</LinkListItem>
              <LinkListItem href='#'>Link list Item 3</LinkListItem>
            </LinkList>
          </Col>
          <Col xs='12' lg='4'>
            <LinkList>
              <LinkListItem href='#'>Link list Item 1</LinkListItem>
              <LinkListItem href='#'>Link list Item 2</LinkListItem>
              <LinkListItem href='#'>Link list Item 3</LinkListItem>
            </LinkList>
          </Col>
          <Col xs='12' lg='4'>
            <LinkList>
              <LinkListItem href='#'>Link list Item 1</LinkListItem>
              <LinkListItem href='#'>Link list Item 2</LinkListItem>
              <LinkListItem href='#'>Link list Item 3</LinkListItem>
            </LinkList>
          </Col>
        </Row>
        <MegamenuFooter>
          <Row>
            <Col xs='12' lg='4'>
              <LinkList>
                <LinkListItem href='#'>
                  <Icon color='primary' icon='it-star-outline' size='sm' />
                  Link list 1
                </LinkListItem>
              </LinkList>
            </Col>
            <Col xs='12' lg='4'>
              <LinkList>
                <LinkListItem href='#'>
                  <Icon color='primary' icon='it-star-outline' size='sm' />
                  Link list 2
                </LinkListItem>
              </LinkList>
            </Col>
            <Col xs='12' lg='4'>
              <LinkList>
                <LinkListItem href='#'>
                  <Icon color='primary' icon='it-star-outline' size='sm' />
                  Link list 3
                </LinkListItem>
              </LinkList>
            </Col>
          </Row>
        </MegamenuFooter>
      </MegamenuItem>
    </Megamenu>
  );
};
export const ConCallToActionADestra = () => {
  return (
    <Megamenu expand='lg'>
      <MegamenuItem itemName='Megamenu con Call to Action a destra'>
        <Row className='max-height-col'>
          <Col xs='12' lg='8'>
            <Row className='margin-right-col'>
              <Col xs='12' lg='4'>
                <LinkList>
                  <LinkListItem href='#'>Link list Item 1</LinkListItem>
                  <LinkListItem href='#'>Link list Item 2</LinkListItem>
                  <LinkListItem href='#'>Link list Item 3</LinkListItem>
                </LinkList>
              </Col>
              <Col xs='12' lg='4'>
                <LinkList>
                  <LinkListItem href='#'>Link list Item 1</LinkListItem>
                  <LinkListItem href='#'>Link list Item 2</LinkListItem>
                  <LinkListItem href='#'>Link list Item 3</LinkListItem>
                </LinkList>
              </Col>
              <Col xs='12' lg='4'>
                <LinkList>
                  <LinkListItem href='#'>Link list Item 1</LinkListItem>
                  <LinkListItem href='#'>Link list Item 2</LinkListItem>
                  <LinkListItem href='#'>Link list Item 3</LinkListItem>
                </LinkList>
              </Col>
            </Row>
          </Col>
          <MegamenuHighlightColumn xs='12' lg='4'>
            <LinkList>
              <LinkListItem href='#'>
                Link list 1
                <Icon color='primary' icon='it-star-outline' size='sm' />
              </LinkListItem>
              <LinkListItem href='#'>
                Link list 2
                <Icon color='primary' icon='it-star-outline' size='sm' />
              </LinkListItem>
              <LinkListItem href='#'>
                Link list 3
                <Icon color='primary' icon='it-star-outline' size='sm' />
              </LinkListItem>
            </LinkList>
          </MegamenuHighlightColumn>
        </Row>
      </MegamenuItem>
    </Megamenu>
  );
};
export const ConImmagineEDescrizione = () => {
  return (
    <Megamenu expand='lg'>
      <MegamenuItem itemName='Megamenu con Immagine e Descrizione'>
        <Row className='max-height-col'>
          <Col xs='12' lg='8'>
            <Row className='margin-right-col'>
              <Col xs='12' lg='4'>
                <LinkList>
                  <LinkListItem href='#'>Link list Item 1</LinkListItem>
                  <LinkListItem href='#'>Link list Item 2</LinkListItem>
                  <LinkListItem href='#'>Link list Item 3</LinkListItem>
                </LinkList>
              </Col>
              <Col xs='12' lg='4'>
                <LinkList>
                  <LinkListItem href='#'>Link list Item 1</LinkListItem>
                  <LinkListItem href='#'>Link list Item 2</LinkListItem>
                  <LinkListItem href='#'>Link list Item 3</LinkListItem>
                </LinkList>
              </Col>
              <Col xs='12' lg='4'>
                <LinkList>
                  <LinkListItem href='#'>Link list Item 1</LinkListItem>
                  <LinkListItem href='#'>Link list Item 2</LinkListItem>
                  <LinkListItem href='#'>Link list Item 3</LinkListItem>
                </LinkList>
              </Col>
            </Row>
          </Col>
          <MegamenuHighlightColumn xs='12' lg='4' description>
            <img
              src='https://via.placeholder.com/225x110/ebebeb/808080/?text=Immagine'
              alt='placeholder'
              title='placeholder title'
            />
            <p>
              Omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam.
            </p>
          </MegamenuHighlightColumn>
        </Row>
      </MegamenuItem>
    </Megamenu>
  );
};
export const ConColonneAsimmetriche = () => {
  return (
    <Megamenu expand='lg'>
      <MegamenuItem itemName='Megamenu con Colonne Asimmetriche'>
        <Row>
          <Col xs='12' lg='8'>
            <Row>
              <Col xs='12'>
                <h3 className='it-heading-megacolumn'>Heading title left</h3>
              </Col>
            </Row>
            <Row>
              <Col xs='12' lg='6'>
                <LinkList>
                  <LinkListItem href='#'>Link list Item 1</LinkListItem>
                  <LinkListItem href='#'>Link list Item 2</LinkListItem>
                  <LinkListItem href='#'>Link list Item 3</LinkListItem>
                </LinkList>
              </Col>
              <Col xs='12' lg='6'>
                <LinkList>
                  <LinkListItem href='#'>Link list Item 1</LinkListItem>
                  <LinkListItem href='#'>Link list Item 2</LinkListItem>
                  <LinkListItem href='#'>Link list Item 3</LinkListItem>
                </LinkList>
              </Col>
            </Row>
          </Col>
          <Col xs='12' lg='4'>
            <Row>
              <Col xs='12'>
                <h3 className='it-heading-megacolumn'>Heading title right</h3>
              </Col>
            </Row>
            <Row>
              <Col xs='12'>
                <LinkList>
                  <LinkListItem href='#'>Link list Item 1</LinkListItem>
                  <LinkListItem href='#'>Link list Item 2</LinkListItem>
                  <LinkListItem href='#'>Link list Item 3</LinkListItem>
                </LinkList>
              </Col>
            </Row>
          </Col>
        </Row>
      </MegamenuItem>
    </Megamenu>
  );
};

export default {
  title: 'Componenti/Megamenu'
};
