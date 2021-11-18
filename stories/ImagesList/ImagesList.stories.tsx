import React from 'react';
import { Col, GridItem, GridItemText, GridItemTextWrapper, Icon, ResponsiveImage, Row } from '../../src';

export const ElementoSingolo = () => (
  <Row>
    <Col lg={4} xs={12}>
      <GridItem>
        <a href='#'>
          <ResponsiveImage
            src='https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine'
            alt='Alternative Text'
            title='Image Title'
          />
        </a>
      </GridItem>
    </Col>
    <Col lg={4} xs={12}>
      <GridItem>
        <a href='#'>
          <ResponsiveImage
            src='https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine'
            alt='Alternative Text'
            title='Image Title'
          />
          <GridItemTextWrapper>
            <GridItemText>Didascalia</GridItemText>
            <Icon icon='it-code-circle' size='sm' />
          </GridItemTextWrapper>
        </a>
      </GridItem>
    </Col>
    <Col lg={4} xs={12}>
      <GridItem className='it-grid-item-overlay'>
        <a href='#'>
          <ResponsiveImage
            src='https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine'
            alt='Alternative Text'
            title='Image Title'
          />
          <GridItemTextWrapper>
            <GridItemText>Didascalia</GridItemText>
            <Icon icon='it-code-circle' size='sm' />
          </GridItemTextWrapper>
        </a>
      </GridItem>
    </Col>
  </Row>
);

export const GrigliaStandard = () => (
  <div className='it-grid-list-wrapper'>
    <div className='grid-row'>
      <Col lg={4} xs={6}>
        <GridItem>
          <a href='#'>
            <ResponsiveImage
              src='https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine'
              alt='Alternative Text'
              title='Image Title'
            />
          </a>
        </GridItem>
      </Col>
      <Col lg={4} xs={6}>
        <GridItem>
          <a href='#'>
            <ResponsiveImage
              src='https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine'
              alt='Alternative Text'
              title='Image Title'
            />
          </a>
        </GridItem>
      </Col>
      <Col lg={4} xs={6}>
        <GridItem>
          <a href='#'>
            <ResponsiveImage
              src='https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine'
              alt='Alternative Text'
              title='Image Title'
            />
          </a>
        </GridItem>
      </Col>
      <Col lg={4} xs={6}>
        <GridItem>
          <a href='#'>
            <ResponsiveImage
              src='https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine'
              alt='Alternative Text'
              title='Image Title'
            />
          </a>
        </GridItem>
      </Col>
      <Col lg={4} xs={6}>
        <GridItem>
          <a href='#'>
            <ResponsiveImage
              src='https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine'
              alt='Alternative Text'
              title='Image Title'
            />
          </a>
        </GridItem>
      </Col>
      <Col lg={4} xs={6}>
        <GridItem>
          <a href='#'>
            <ResponsiveImage
              src='https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine'
              alt='Alternative Text'
              title='Image Title'
            />
          </a>
        </GridItem>
      </Col>
    </div>
  </div>
);

export const StandardDidascalie = () => (
  <div className='it-grid-list-wrapper it-image-label-grid'>
    <div className='grid-row'>
      <Col lg={4} xs={6}>
        <GridItem>
          <a href='#'>
            <ResponsiveImage
              src='https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine'
              alt='Alternative Text'
              title='Image Title'
            />
            <GridItemTextWrapper>
              <GridItemText>Didascalia</GridItemText>
              <Icon icon='it-code-circle' size='sm' />
            </GridItemTextWrapper>
          </a>
        </GridItem>
      </Col>
      <Col lg={4} xs={6}>
        <GridItem>
          <a href='#'>
            <ResponsiveImage
              src='https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine'
              alt='Alternative Text'
              title='Image Title'
            />
            <GridItemTextWrapper>
              <GridItemText>Didascalia</GridItemText>
              <Icon icon='it-code-circle' size='sm' />
            </GridItemTextWrapper>
          </a>
        </GridItem>
      </Col>
      <Col lg={4} xs={6}>
        <GridItem>
          <a href='#'>
            <ResponsiveImage
              src='https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine'
              alt='Alternative Text'
              title='Image Title'
            />
            <GridItemTextWrapper>
              <GridItemText>Didascalia</GridItemText>
              <Icon icon='it-code-circle' size='sm' />
            </GridItemTextWrapper>
          </a>
        </GridItem>
      </Col>
      <Col lg={4} xs={6}>
        <GridItem>
          <a href='#'>
            <ResponsiveImage
              src='https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine'
              alt='Alternative Text'
              title='Image Title'
            />
            <GridItemTextWrapper>
              <GridItemText>Didascalia</GridItemText>
              <Icon icon='it-code-circle' size='sm' />
            </GridItemTextWrapper>
          </a>
        </GridItem>
      </Col>
      <Col lg={4} xs={6}>
        <GridItem>
          <a href='#'>
            <ResponsiveImage
              src='https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine'
              alt='Alternative Text'
              title='Image Title'
            />
            <GridItemTextWrapper>
              <GridItemText>Didascalia</GridItemText>
              <Icon icon='it-code-circle' size='sm' />
            </GridItemTextWrapper>
          </a>
        </GridItem>
      </Col>
      <Col lg={4} xs={6}>
        <GridItem>
          <a href='#'>
            <ResponsiveImage
              src='https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine'
              alt='Alternative Text'
              title='Image Title'
            />
            <GridItemTextWrapper>
              <GridItemText>Didascalia</GridItemText>
              <Icon icon='it-code-circle' size='sm' />
            </GridItemTextWrapper>
          </a>
        </GridItem>
      </Col>
    </div>
  </div>
);

export const Proporzionale = () => (
  <div className='it-grid-list-wrapper it-quilted-grid'>
    <div className='grid-row'>
      <Col md={6} xs={12}>
        <GridItem className='it-grid-item-overlay'>
          <a href='#' className=''>
            <ResponsiveImage
              src='https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine'
              alt='Alternative Text'
              title='Image Title'
            />
            <GridItemTextWrapper>
              <GridItemText>Didascalia</GridItemText>
              <Icon icon='it-code-circle' size='sm' />
            </GridItemTextWrapper>
          </a>
        </GridItem>
      </Col>
      <Col md={6} xs={12}>
        <div className='grid-row'>
          <Col xs={6}>
            <GridItem className='it-grid-item-overlay'>
              <a href='#'>
                <ResponsiveImage
                  src='https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine'
                  alt='Alternative Text'
                  title='Image Title'
                />
                <GridItemTextWrapper>
                  <GridItemText>Didascalia</GridItemText>
                  <Icon icon='it-code-circle' size='sm' />
                </GridItemTextWrapper>
              </a>
            </GridItem>
          </Col>
          <Col xs={6}>
            <GridItem className='it-grid-item-overlay'>
              <a href='#'>
                <ResponsiveImage
                  src='https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine'
                  alt='Alternative Text'
                  title='Image Title'
                />
                <GridItemTextWrapper>
                  <GridItemText>Didascalia</GridItemText>
                  <Icon icon='it-code-circle' size='sm' />
                </GridItemTextWrapper>
              </a>
            </GridItem>
          </Col>
          <Col xs={12}>
            <div className='it-grid-item-wrapper it-grid-item-overlay it-grid-item-double-w'>
              <a href='#'>
                <ResponsiveImage
                  src='https://via.placeholder.com/660x300/ebebeb/808080/?text=Immagine'
                  alt='Alternative Text'
                  title='Image Title'
                />
                <GridItemTextWrapper>
                  <GridItemText>Didascalia</GridItemText>
                  <Icon icon='it-code-circle' size='sm' />
                </GridItemTextWrapper>
              </a>
            </div>
          </Col>
        </div>
      </Col>
    </div>
  </div>
);

export const Masonry = () => (
  <div className='it-grid-list-wrapper it-image-label-grid it-masonry'>
    <div className='card-columns'>
      <Col xs={12}>
        <GridItem>
          <a href='#'>
            <ResponsiveImage
              src='https://via.placeholder.com/400x300/ebebeb/808080/?text=Immagine'
              alt='Alternative Text'
              title='Image Title'
            />
            <GridItemTextWrapper>
              <GridItemText>Didascalia</GridItemText>
              <Icon icon='it-code-circle' size='sm' />
            </GridItemTextWrapper>
          </a>
        </GridItem>
      </Col>
      <Col xs={12}>
        <GridItem>
          <a href='#'>
            <ResponsiveImage
              src='https://via.placeholder.com/400x500/ebebeb/808080/?text=Immagine'
              alt='Alternative Text'
              title='Image Title'
            />
            <GridItemTextWrapper>
              <GridItemText>Didascalia</GridItemText>
              <Icon icon='it-code-circle' size='sm' />
            </GridItemTextWrapper>
          </a>
        </GridItem>
      </Col>
      <Col xs={12}>
        <GridItem>
          <a href='#'>
            <ResponsiveImage
              src='https://via.placeholder.com/400x700/ebebeb/808080/?text=Immagine'
              alt='Alternative Text'
              title='Image Title'
            />
            <GridItemTextWrapper>
              <GridItemText>Didascalia</GridItemText>
              <Icon icon='it-code-circle' size='sm' />
            </GridItemTextWrapper>
          </a>
        </GridItem>
      </Col>
      <Col xs={12}>
        <GridItem>
          <a href='#'>
            <ResponsiveImage
              src='https://via.placeholder.com/400x600/ebebeb/808080/?text=Immagine'
              alt='Alternative Text'
              title='Image Title'
            />
            <GridItemTextWrapper>
              <GridItemText>Didascalia</GridItemText>
              <Icon icon='it-code-circle' size='sm' />
            </GridItemTextWrapper>
          </a>
        </GridItem>
      </Col>
      <Col xs={12}>
        <GridItem>
          <a href='#'>
            <ResponsiveImage
              src='https://via.placeholder.com/400x500/ebebeb/808080/?text=Immagine'
              alt='Alternative Text'
              title='Image Title'
            />
            <GridItemTextWrapper>
              <GridItemText>Didascalia</GridItemText>
              <Icon icon='it-code-circle' size='sm' />
            </GridItemTextWrapper>
          </a>
        </GridItem>
      </Col>
      <Col xs={12}>
        <GridItem>
          <a href='#'>
            <ResponsiveImage
              src='https://via.placeholder.com/400x400/ebebeb/808080/?text=Immagine'
              alt='Alternative Text'
              title='Image Title'
            />
            <GridItemTextWrapper>
              <GridItemText>Didascalia</GridItemText>
              <Icon icon='it-code-circle' size='sm' />
            </GridItemTextWrapper>
          </a>
        </GridItem>
      </Col>
      <Col xs={12}>
        <GridItem>
          <a href='#'>
            <ResponsiveImage
              src='https://via.placeholder.com/400x600/ebebeb/808080/?text=Immagine'
              alt='Alternative Text'
              title='Image Title'
            />
            <GridItemTextWrapper>
              <GridItemText>Didascalia</GridItemText>
              <Icon icon='it-code-circle' size='sm' />
            </GridItemTextWrapper>
          </a>
        </GridItem>
      </Col>
      <Col xs={12}>
        <GridItem>
          <a href='#'>
            <ResponsiveImage
              src='https://via.placeholder.com/400x500/ebebeb/808080/?text=Immagine'
              alt='Alternative Text'
              title='Image Title'
            />
            <GridItemTextWrapper>
              <GridItemText>Didascalia</GridItemText>
              <Icon icon='it-code-circle' size='sm' />
            </GridItemTextWrapper>
          </a>
        </GridItem>
      </Col>
      <Col xs={12}>
        <GridItem>
          <a href='#'>
            <ResponsiveImage
              src='https://via.placeholder.com/400x400/ebebeb/808080/?text=Immagine'
              alt='Alternative Text'
              title='Image Title'
            />
            <GridItemTextWrapper>
              <GridItemText>Didascalia</GridItemText>
              <Icon icon='it-code-circle' size='sm' />
            </GridItemTextWrapper>
          </a>
        </GridItem>
      </Col>
      <Col xs={12}>
        <GridItem>
          <a href='#'>
            <ResponsiveImage
              src='https://via.placeholder.com/400x600/ebebeb/808080/?text=Immagine'
              alt='Alternative Text'
              title='Image Title'
            />
            <GridItemTextWrapper>
              <GridItemText>Didascalia</GridItemText>
              <Icon icon='it-code-circle' size='sm' />
            </GridItemTextWrapper>
          </a>
        </GridItem>
      </Col>
      <Col xs={12}>
        <GridItem>
          <a href='#'>
            <ResponsiveImage
              src='https://via.placeholder.com/400x500/ebebeb/808080/?text=Immagine'
              alt='Alternative Text'
              title='Image Title'
            />
            <GridItemTextWrapper>
              <GridItemText>Didascalia</GridItemText>
              <Icon icon='it-code-circle' size='sm' />
            </GridItemTextWrapper>
          </a>
        </GridItem>
      </Col>
      <Col xs={12}>
        <GridItem>
          <a href='#'>
            <ResponsiveImage
              src='https://via.placeholder.com/400x400/ebebeb/808080/?text=Immagine'
              alt='Alternative Text'
              title='Image Title'
            />
            <GridItemTextWrapper>
              <GridItemText>Didascalia</GridItemText>
              <Icon icon='it-code-circle' size='sm' />
            </GridItemTextWrapper>
          </a>
        </GridItem>
      </Col>
    </div>
  </div>
);

export default {
  title: 'Componenti/ImageList'
};
