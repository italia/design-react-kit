import { Meta, StoryObj } from '@storybook/react';
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

//Non esiste un componente specifico per cui uso GridItem come riferimento per la storia
const meta: Meta<typeof GridItem> = {
  title: "Documentazione/Organizzare i contenuti/Liste di Immagini",
  component: GridItem,
};

export default meta;

type Story = StoryObj<typeof GridItem>;

export const ElementoSingolo: Story = {
  render: () => (
    <Row>
      <Col lg={4} xs={12}>
        <GridItem>
          <a href='#'>
            <ResponsiveImage
              src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine'
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
              src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine'
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
              src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine'
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
  )
};

export const GrigliaStandard: Story = {
  render: () => (
    <GridList>
      <GridRow>
        <Col lg={4} xs={6}>
          <GridItem>
            <a href='#'>
              <ResponsiveImage
                src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine'
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
                src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine'
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
                src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine'
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
                src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine'
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
                src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine'
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
                src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine'
                alt='Alternative Text'
                title='Image Title'
              />
            </a>
          </GridItem>
        </Col>
      </GridRow>
    </GridList>
  )
};

export const StandardDidascalie: Story = {
  render: () => (
    <GridList className='it-image-label-grid'>
      <GridRow>
        <Col lg={4} xs={6}>
          <GridItem>
            <a href='#'>
              <ResponsiveImage
                src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine'
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
                src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine'
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
                src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine'
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
                src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine'
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
                src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine'
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
                src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine'
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
  )
};

export const Proporzionale: Story = {
  render: () => (
    <GridList className='it-quilted-grid'>
      <GridRow>
        <Col md={6} xs={12}>
          <GridItem className='it-grid-item-overlay'>
            <a href='#' className=''>
              <ResponsiveImage
                src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine'
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
                    src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine'
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
                    src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine'
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
                    src='https://placehold.co/660x300/ebebeb/808080/?text=Immagine'
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
  )
};

export const Masonry: Story = {
  render: () => (
    <GridList className='it-image-label-grid it-masonry'>
      <div className='card-columns'>
        <Col xs={12}>
          <GridItem>
            <a href='#'>
              <ResponsiveImage
                src='https://placehold.co/400x300/ebebeb/808080/?text=Immagine'
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
                src='https://placehold.co/400x500/ebebeb/808080/?text=Immagine'
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
                src='https://placehold.co/400x700/ebebeb/808080/?text=Immagine'
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
                src='https://placehold.co/400x600/ebebeb/808080/?text=Immagine'
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
                src='https://placehold.co/400x500/ebebeb/808080/?text=Immagine'
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
                src='https://placehold.co/400x400/ebebeb/808080/?text=Immagine'
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
                src='https://placehold.co/400x600/ebebeb/808080/?text=Immagine'
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
                src='https://placehold.co/400x500/ebebeb/808080/?text=Immagine'
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
                src='https://placehold.co/400x400/ebebeb/808080/?text=Immagine'
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
                src='https://placehold.co/400x600/ebebeb/808080/?text=Immagine'
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
                src='https://placehold.co/400x500/ebebeb/808080/?text=Immagine'
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
                src='https://placehold.co/400x400/ebebeb/808080/?text=Immagine'
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
  )
};