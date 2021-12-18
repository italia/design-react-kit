/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  Col,
  GridItem,
  GridItemText,
  GridItemTextWrapper,
  GridList,
  GridRow,
  Icon,
  ResponsiveImage,
  Row
} from '../../src';

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
  <GridList>
    <GridRow>
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
    </GridRow>
  </GridList>
);

export const StandardDidascalie = () => (
  <GridList className='it-image-label-grid'>
    <GridRow>
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
    </GridRow>
  </GridList>
);

export const Proporzionale = () => (
  <GridList className='it-quilted-grid'>
    <GridRow>
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
        <GridRow>
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
            <GridItem className='it-grid-item-overlay it-grid-item-double-w'>
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
        </GridRow>
      </Col>
    </GridRow>
  </GridList>
);

export const Masonry = () => (
  <GridList className='it-image-label-grid it-masonry'>
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
  </GridList>
);

export default {
  title: 'Componenti/ImageList'
};
