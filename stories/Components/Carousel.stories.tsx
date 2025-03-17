import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Container, Carousel, CarouselSlide,
  Card, CardText, CardBody, CardCategory, CardTitle, CardSignature, CardReadMore,
  ResponsiveImage
} from '../../src';

//Non esiste un componente specifico per cui uso Container come riferimento per la storia
const meta: Meta<typeof Container> = {
  title: 'Documentazione/Componenti/Carousel',
  component: Container,
};

export default meta;

type Story = StoryObj<typeof Container>;

const carouselSlide =
<CarouselSlide>
  <Card>
    <CardBody>
      <CardCategory date="10/12/2018">
        Category
      </CardCategory>
      <CardTitle
        className="big-heading"
        tag="h5"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit…
      </CardTitle>
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </CardText>
      <CardSignature>
        di Federico De Paolis
      </CardSignature>
      <CardReadMore
        iconName="it-arrow-right"
        text="Leggi di più"
      />
    </CardBody>
  </Card>
</CarouselSlide>

const carouselSlides:React.JSX.Element[] = []

for (let i = 0 ; i < 10 ; i++) {
  carouselSlides.push(carouselSlide);
}

const carouselSlideLandscapeImage = <CarouselSlide>
<ResponsiveImage
  src='https://placehold.co/480x360/ebebeb/808080/?text=Immagine1'
  alt='Alternative Text'
  title='Image Title'
/>
<div className="it-text-slider-wrapper-outside">
  <Card>
    <CardBody>
      <CardCategory date="10/12/2018">
        Category
      </CardCategory>
      <CardTitle
        className="big-heading"
        tag="h5"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit…
      </CardTitle>
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </CardText>
      <CardSignature>
        di Federico De Paolis
      </CardSignature>
      <CardReadMore
        iconName="it-arrow-right"
        text="Leggi di più"
      />
    </CardBody>
  </Card>
</div>
</CarouselSlide>

const carouselSlidesLandascapeImages:React.JSX.Element[] = []

for (let i = 0 ; i < 3 ; i++) {
  carouselSlidesLandascapeImages.push(carouselSlideLandscapeImage);
}


const carouselHighImage = <CarouselSlide>
  <Card className="card-img no-after">
    <ResponsiveImage
      src='https://placehold.co/480x360/ebebeb/808080/?text=Immagine1'
      alt='Alternative Text'
      title='Image Title'
    />
    <CardBody>
      <CardCategory date="10/12/2018">
        Category
      </CardCategory>
      <CardTitle
        className="big-heading"
        tag="h5"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit…
      </CardTitle>
      <CardReadMore
        iconName="it-arrow-right"
        text="Leggi di più"
      />
    </CardBody>
  </Card>
</CarouselSlide>

const carouselHighImages:React.JSX.Element[] = []

for (let i = 0 ; i < 10 ; i++) {
  carouselHighImages.push(carouselHighImage);
}


const carouselFullscreenImage = <CarouselSlide>
  <Card className="card-img no-after">
    <ResponsiveImage
      src='https://placehold.co/480x360/ebebeb/808080/?text=Immagine1'
      alt='Alternative Text'
      title='Image Title'
    />
  </Card>
</CarouselSlide>

const carouselFullscreenImages:React.JSX.Element[] = []

for (let i = 0 ; i < 10 ; i++) {
  carouselFullscreenImages.push(carouselFullscreenImage);
}

export const Base: Story = {
  render: () => (
    <Carousel type="landscape-three-cols-arrows">
      {carouselSlides}
    </Carousel>
  )
};

export const EvidenceImage: Story = {
  render: () => (
    <Carousel type="landscape">
      {carouselSlidesLandascapeImages}
    </Carousel>
  )
};

export const HighImage: Story = {
  render: () => (
    <Carousel type="landscape-three-cols">
      {carouselHighImages}
    </Carousel>
  )
};

export const FullscreenImage: Story = {
  render: () => (
    <Carousel type="big-image">
      {carouselFullscreenImages}
    </Carousel>
  )
};

export const FullscreenStandardImage: Story = {
  render: () => (
    <Carousel type="standard-image">
      {carouselFullscreenImages}
    </Carousel>
  )
};
