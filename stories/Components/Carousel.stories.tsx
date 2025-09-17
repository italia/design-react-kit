import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import {
  Container, Carousel, CarouselSlide,
  Card,
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
    <Card rounded shadow={'sm'}>
      <h3 className="it-card-title ">
        <a href="#">Titolo del contenuto</a>
      </h3>
      <div className="it-card-body">
        <p className="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
      </div>
      <footer className="it-card-related it-card-footer">
        <time className="it-card-date" dateTime="2025-04-22">22 aprile 2025</time>
      </footer>
    </Card>
  </CarouselSlide>

const carouselSlides: React.JSX.Element[] = []

for (let i = 0; i < 10; i++) {
  carouselSlides.push(carouselSlide);
}

const carouselSlideLandscapeImage = <CarouselSlide>
  <div className="it-single-slide-wrapper p-2e">
    <Card image inline rounded shadow={'sm'}>
      <div className="it-card-inline-content">
        <h3 className="it-card-title ">
          <a href="#">Titolo contenuto editoriale</a>
        </h3>
        <div className="it-card-body">
          <address className="it-card-signature">di Maria Verde</address>
          <p className="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
        </div>
        <footer className="it-card-related it-card-footer">
          <div className="it-card-taxonomy">
            <a href="#" className="it-card-category it-card-link link-secondary"><span className="visually-hidden">Categoria correlata: </span>Categoria</a>
          </div>
          <time className="it-card-date" dateTime="2025-04-22">22 aprile 2025</time>
        </footer>
      </div>
      <div className="it-card-image-wrapper">
        <div className="ratio ratio-16x9">
          <figure className="figure img-full">
            <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."></img>
          </figure>
        </div>
      </div>
    </Card>
  </div>
</CarouselSlide>

const carouselSlidesLandascapeImages: React.JSX.Element[] = []

for (let i = 0; i < 3; i++) {
  carouselSlidesLandascapeImages.push(carouselSlideLandscapeImage);
}


const carouselHighImage = <CarouselSlide>
  <Card image fullHeight rounded shadow={'sm'}>
    <h3 className="it-card-title">
      <a href="#">Titolo del contenuto</a>
    </h3>
    <div className="it-card-image-wrapper">
      <div className="ratio ratio-16x9">
        <figure className="figure img-full">
          <img src="https://placeholderimage.eu/api/city/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."></img>
        </figure>
      </div>
    </div>
    <div className="it-card-body">
      <p className="it-card-text">Questo è un testo breve.</p>
    </div>
    <footer className="it-card-related it-card-footer">
      <div className="it-card-taxonomy">
        <a href="#" className="it-card-category it-card-link link-secondary"><span className="visually-hidden">Categoria correlata: </span>Categoria</a>
      </div>
      <time className="it-card-date" dateTime="2025-04-22">22 aprile 2025</time>
    </footer>
  </Card>
</CarouselSlide>


const carouselHighImages: React.JSX.Element[] = []

for (let i = 0; i < 10; i++) {
  carouselHighImages.push(carouselHighImage);
}


const carouselFullscreenImage = <CarouselSlide>
  <Card inline image rounded>
    <ResponsiveImage
      src='https://placeholderimage.eu/api/city/800/600'
      alt='Alternative Text'
      title='Image Title'
    />
  </Card>
</CarouselSlide>

const carouselFullscreenImages: React.JSX.Element[] = []

for (let i = 0; i < 10; i++) {
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

