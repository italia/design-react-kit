import React from 'react';

import { Meta, StoryObj } from "@storybook/react-vite";
import {
  Card,
  Col,
  Row,
  Timeline,
  TimelinePin
} from '../../src';


const meta: Meta<typeof Timeline> = {
  title: "Documentazione/Componenti/Timeline",
  component: Timeline
};

export default meta;

type Story = StoryObj<typeof Timeline>;

export const Esempi: Story = {
  render: () => (
    <div>
      <Timeline>
        <Row>
          <Col xs='12'>
            <TimelinePin label='maggio 2018' past iconTitle='Segnaposto'>
              {/* start card */}
              <Card rounded image shadow={'sm'}>
                <h4 className="it-card-title ">
                  <a href="#">Titolo del contenuto</a>
                </h4>
                <div className="it-card-image-wrapper">
                  <div className="ratio ratio-21x9">
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
            </TimelinePin>
          </Col>
          <Col xs='12'>
            <TimelinePin label='giugno 2018' past iconTitle='Segnaposto'>
              {/* start card */}
              <Card rounded border image>
                <h4 className="it-card-title ">
                  <a href="#">Titolo del contenuto</a>
                </h4>
                <div className="it-card-image-wrapper">
                  <div className="ratio ratio-21x9">
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
            </TimelinePin>
          </Col>
          <Col xs='12'>
            <TimelinePin label='luglio 2018' past iconTitle='Segnaposto'>
              {/* start card */}
              <Card rounded border image>
                <h4 className="it-card-title ">
                  <a href="#">Titolo del contenuto</a>
                </h4>
                <div className="it-card-image-wrapper">
                  <div className="ratio ratio-21x9">
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
            </TimelinePin>
          </Col>
          <Col xs='12'>
            <TimelinePin label='agosto 2018' now nowText='Oggi' iconTitle='Segnaposto'>
              {/* start card */}
              <Card rounded border image>
                <h4 className="it-card-title ">
                  <a href="#">Titolo del contenuto</a>
                </h4>
                <div className="it-card-image-wrapper">
                  <div className="ratio ratio-21x9">
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
            </TimelinePin>
          </Col>
          <Col xs='12'>
            <TimelinePin label='settembre 2018' iconTitle='Segnaposto'>
              {/* start card */}
              <Card rounded border image>
                <h4 className="it-card-title ">
                  <a href="#">Titolo del contenuto</a>
                </h4>
                <div className="it-card-image-wrapper">
                  <div className="ratio ratio-21x9">
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
            </TimelinePin>
          </Col>
          <Col xs='12'>
            <TimelinePin label='ottobre 2018' iconTitle='Segnaposto'>
              {/* start card */}
              <Card rounded border image>
                <h4 className="it-card-title ">
                  <a href="#">Titolo del contenuto</a>
                </h4>
                <div className="it-card-image-wrapper">
                  <div className="ratio ratio-21x9">
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
            </TimelinePin>
          </Col>
          <Col xs='12'>
            <TimelinePin label='novembre 2018' iconTitle='Segnaposto'>
              {/* start card */}
              <Card rounded border image>
                <h4 className="it-card-title ">
                  <a href="#">Titolo del contenuto</a>
                </h4>
                <div className="it-card-image-wrapper">
                  <div className="ratio ratio-21x9">
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
            </TimelinePin>
          </Col>
          <Col xs='12'>
            <TimelinePin label='dicembre 2018' iconTitle='Segnaposto'>
              {/* start card */}
              <Card rounded border image>
                <h4 className="it-card-title ">
                  <a href="#">Titolo del contenuto</a>
                </h4>
                <div className="it-card-image-wrapper">
                  <div className="ratio ratio-21x9">
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
            </TimelinePin>
          </Col>
        </Row>
      </Timeline>
    </div>
  )
};
