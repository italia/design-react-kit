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

export const ConLinkMore = () => {
  return (
    <Megamenu expand='lg'>
      <MegamenuItem itemName='Megamenu con Call to Action in basso'>
        <Row>
          <Col xs='12' lg='4'>
            <LinkList>
              <LinkListItem href='#'>
                <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                <span>Link lista 1</span>
              </LinkListItem>
              <LinkListItem href='#'>
                <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                <span>Link lista 2</span>
              </LinkListItem>
              <LinkListItem href='#'>
                <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                <span>Link lista 3</span>
              </LinkListItem>
            </LinkList>
          </Col>
          <Col xs='12' lg='4'>
            <LinkList>
              <LinkListItem href='#'>
                <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                <span>Link lista 4</span>
              </LinkListItem>
              <LinkListItem href='#'>
                <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                <span>Link lista 5</span>
              </LinkListItem>
              <LinkListItem href='#'>
                <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                <span>Link lista 6</span>
              </LinkListItem>
            </LinkList>
          </Col>
          <Col xs='12' lg='4'>
            <LinkList>
              <LinkListItem href='#'>
                <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                <span>Link lista 7</span>
              </LinkListItem>
              <LinkListItem href='#'>
                <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                <span>Link lista 8</span>
              </LinkListItem>
              <LinkListItem href='#'>
                <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                <span>Link lista 9</span>
              </LinkListItem>
            </LinkList>
          </Col>
        </Row>
        <MegamenuFooter className='text-end'>
          <a className='it-footer-link' href='#'>
            <span>
              Esplora tutti i contenuti del megamenu{' '}
              <Icon className='ms-2' color='primary' icon='it-arrow-right' size='sm' />
            </span>
          </a>
        </MegamenuFooter>
      </MegamenuItem>
    </Megamenu>
  );
};
export const ConIntestazioneELinkMore = () => {
  return (
    <Megamenu expand='lg'>
      <MegamenuItem itemName='Megamenu con Call to Action in basso'>
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
                  <LinkListItem href='#'>
                    <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                    <span>Link lista 1</span>
                  </LinkListItem>
                  <LinkListItem href='#'>
                    <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                    <span>Link lista 2</span>
                  </LinkListItem>
                  <LinkListItem href='#'>
                    <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                    <span>Link lista 3</span>
                  </LinkListItem>
                </LinkList>
              </Col>
              <Col xs='12' lg='4'>
                <LinkList>
                  <LinkListItem href='#'>
                    <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                    <span>Link lista 4</span>
                  </LinkListItem>
                  <LinkListItem href='#'>
                    <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                    <span>Link lista 5</span>
                  </LinkListItem>
                  <LinkListItem href='#'>
                    <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                    <span>Link lista 6</span>
                  </LinkListItem>
                </LinkList>
              </Col>
              <Col xs='12' lg='4'>
                <LinkList>
                  <LinkListItem href='#'>
                    <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                    <span>Link lista 7</span>
                  </LinkListItem>
                  <LinkListItem href='#'>
                    <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                    <span>Link lista 8</span>
                  </LinkListItem>
                  <LinkListItem href='#'>
                    <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                    <span>Link lista 9</span>
                  </LinkListItem>
                </LinkList>
              </Col>
            </Row>
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
              <LinkListItem href='#'>
                <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                <span>Link lista 1</span>
              </LinkListItem>
              <LinkListItem href='#'>
                <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                <span>Link lista 2</span>
              </LinkListItem>
              <LinkListItem href='#'>
                <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                <span>Link lista 3</span>
              </LinkListItem>
            </LinkList>
          </Col>
          <Col xs='12' lg='4'>
            <LinkList>
              <LinkListItem href='#'>
                <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                <span>Link lista 4</span>
              </LinkListItem>
              <LinkListItem href='#'>
                <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                <span>Link lista 5</span>
              </LinkListItem>
              <LinkListItem href='#'>
                <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                <span>Link lista 6</span>
              </LinkListItem>
            </LinkList>
          </Col>
          <Col xs='12' lg='4'>
            <LinkList>
              <LinkListItem href='#'>
                <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                <span>Link lista 7</span>
              </LinkListItem>
              <LinkListItem href='#'>
                <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                <span>Link lista 8</span>
              </LinkListItem>
              <LinkListItem href='#'>
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
    </Megamenu>
  );
};
export const ConCallToActionADestra = () => {
  return (
    <Megamenu expand='lg'>
      <MegamenuItem itemName='Megamenu con Call to Action a destra'>
        <Row>
          <Col xs='12' lg='8'>
            <Row>
              <Col xs='12' lg='6'>
                <LinkList>
                  <LinkListItem href='#'>
                    <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                    <span>Link lista 1</span>
                  </LinkListItem>
                  <LinkListItem href='#'>
                    <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                    <span>Link lista 2</span>
                  </LinkListItem>
                  <LinkListItem href='#'>
                    <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                    <span>Link lista 3</span>
                  </LinkListItem>
                </LinkList>
              </Col>
              <Col xs='12' lg='6'>
                <LinkList>
                  <LinkListItem href='#'>
                    <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                    <span>Link lista 1</span>
                  </LinkListItem>
                  <LinkListItem href='#'>
                    <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                    <span>Link lista 2</span>
                  </LinkListItem>
                  <LinkListItem href='#'>
                    <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                    <span>Link lista 3</span>
                  </LinkListItem>
                </LinkList>
              </Col>
            </Row>
          </Col>
          <MegamenuHighlightColumn xs='12' lg='4'>
            <LinkList>
              <LinkListItem href='#'>
                <Icon className='me-2' color='primary' icon='it-bookmark' size='sm' />
                Link lista 1
              </LinkListItem>
              <LinkListItem href='#'>
                <Icon className='me-2' color='primary' icon='it-bookmark' size='sm' />
                Link lista 2
              </LinkListItem>
              <LinkListItem href='#'>
                <Icon className='me-2' color='primary' icon='it-bookmark' size='sm' />
                Link lista 3
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
                  <LinkListItem href='#'>
                    <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                    <span>Link lista 1</span>
                  </LinkListItem>
                  <LinkListItem href='#'>
                    <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                    <span>Link lista 2</span>
                  </LinkListItem>
                  <LinkListItem href='#'>
                    <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                    <span>Link lista 3</span>
                  </LinkListItem>
                </LinkList>
              </Col>
              <Col xs='12' lg='6'>
                <LinkList>
                  <LinkListItem href='#'>
                    <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                    <span>Link lista 4</span>
                  </LinkListItem>
                  <LinkListItem href='#'>
                    <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                    <span>Link lista 5</span>
                  </LinkListItem>
                  <LinkListItem href='#'>
                    <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />
                    <span>Link lista 6</span>
                  </LinkListItem>
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
