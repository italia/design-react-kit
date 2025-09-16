import React from 'react';

import { Meta } from "@storybook/react-vite";
import { Card, Col, Container, Row, Section } from '../../src';

const meta: Meta<typeof Section> = {
  title: "Documentazione/Componenti/Section",
  component: Section
};

export default meta;

//type Story = StoryObj<typeof Section>;

export const Esempio = () => {
  return (
    <Section aria-labelledby="titleEx1">
      <Container>
        <Row className='mb-3'>
          <Col xs={'12'}>
            <h2 id="titleEx1">Morbi fermentum amet</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'} className='pe-0 pe-md-5 mb-3'>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'} className='pe-0 pe-md-5 mb-3'>
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim
            diam quis enim. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'} className='pe-0 pe-md-5 mb-3'>
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna
            condimentum. Mattis enim ut tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export const SfondoTenue = () => {
  return (
    <Section color='muted' aria-labelledby="titleEx2">
      <Container>
        <Row className='mb-3'>
          <Col xs={'12'}>
            <h2 id="titleEx2">Morbi fermentum amet</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim
            diam quis enim. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna
            condimentum. Mattis enim ut tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export const SfondoPrimario = () => {
  return (
    <Section color='primary' aria-labelledby="titleEx3">
      <Container className='white-color'>
        <Row>
          <Col xs={'12'}>
            <h2 id="titleEx3">Morbi fermentum amet</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim
            diam quis enim. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna
            condimentum. Mattis enim ut tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export const SfondoNeutrale = () => {
  return (
    <Section color='neutral' aria-labelledby="titleEx4">
      <Container className='white-color'>
        <Row>
          <Col xs={'12'}>
            <h2 id="titleEx4">Morbi fermentum amet</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim
            diam quis enim. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna
            condimentum. Mattis enim ut tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export const ImmagineDiSfondo = () => {
  return (
    <Section image='https://picsum.photos/1280/720?image=811' aria-labelledby="titleEx5">
      <Container className='white-color'>
        <Row>
          <Col xs={'12'}>
            <h2 id="titleEx5">Morbi fermentum amet</h2>
          </Col>
        </Row>
        <Row>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim
            diam quis enim. Eu nisl nunc mi ipsum faucibus.
          </Col>
          <Col xs={'12'} lg={'6'} xl={'4'}>
            Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna
            condimentum. Mattis enim ut tellus elementum sagittis.
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export const SectionConCard = () => {
  return (
    <Section color='muted' aria-labelledby="titleEx6">
      <h2 id="titleEx6">Morbi fermentum amet</h2>
      <Row>
        <Col sm={6}>
          <Card image rounded border>
            <h3 className="it-card-title ">
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
              <p className="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
            </div>
            <footer className="it-card-related it-card-footer">
              <time className="it-card-date" dateTime="2025-04-22">22 aprile 2025</time>
            </footer>
          </Card>
        </Col>
        <Col sm={6}>
          <Card image rounded border>
            <h3 className="it-card-title ">
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
              <p className="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
            </div>
            <footer className="it-card-related it-card-footer">
              <time className="it-card-date" dateTime="2025-04-22">22 aprile 2025</time>
            </footer>
          </Card>
        </Col>
      </Row>
    </Section>
  );
};
ImmagineDiSfondo.storyName = 'Immagine di sfondo';

SectionConCard.storyName = 'Section con Card';
