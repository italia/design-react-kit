import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import {
  Card,
  Col,
  Row
} from '../../src';

const meta: Meta<typeof Card> = {
  title: 'Documentazione/Componenti/Cards',
  component: Card
};

export default meta;

type Story = StoryObj<typeof Card>;

export const SimpleCard: Story = {
  render: () => (
    <Row>
      <Col xs='12' lg='12'>
        {/* start card */}
        <Card image shadow={'sm'} rounded>
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
        {/* end card */}
      </Col>
    </Row>
  )
};

export const EditorialStandard: Story = {
  render: () => (
    <Row>
      <Col xs='12' md='6'>
        {/* start card */}
        <Card image fullHeight rounded shadow={'sm'}>
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
            <div className="it-card-taxonomy">
              <a href="#" className="it-card-category it-card-link link-secondary"><span className="visually-hidden">Categoria correlata: </span>Categoria</a>
            </div>
            <time className="it-card-date" dateTime="2025-04-22">22 aprile 2025</time>
          </footer>
        </Card>
        {/* end card */}
      </Col>
      <Col xs='12' md='6'>
        {/* start card */}
        <Card image fullHeight rounded shadow={'sm'}>
          <h3 className="it-card-title ">
            <a href="#">Titolo del contenuto</a>
          </h3>
          <div className="it-card-image-wrapper">
            <div className="ratio ratio-16x9">
              <figure className="figure img-full">
                <img src="https://placeholderimage.eu/api/nature/800/600" alt="Breve descrizione immagine se ha senso nel contesto, marcare altrimenti come decorativa lasciando l'alt applicato ma vuoto."></img>
              </figure>
            </div>
          </div>
          <div className="it-card-body">
            <p className="it-card-text">Questo è un testo breve che riassume il contenuto della pagina di destinazione in massimo tre o quattro righe, senza troncamento.</p>
          </div>
          <footer className="it-card-related it-card-footer">
            <div className="it-card-taxonomy">
              <ul className="it-card-chips chips-list" aria-label="Argomenti correlati: ">
                <li className="list-item"><a className="chip chip-simple chip-sm" href="#">
                  <span className="chip-label"><span className="visually-hidden">Argomento: </span>Argomento 1</span>
                </a></li>
                <li className="list-item"><a className="chip chip-simple chip-sm" href="#">
                  <span className="chip-label"><span className="visually-hidden">Argomento: </span>Argomento 2</span>
                </a></li>
              </ul>
            </div>
            <time className="it-card-date" dateTime="2025-04-22">22 aprile 2025</time>
          </footer>
        </Card>
        {/* end card */}
      </Col>
      <Col xs='12' md='6'>
        {/* start card */}
        <Card image rounded shadow={'sm'}>
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
        {/* end card */}
      </Col>
    </Row>
  )
};
