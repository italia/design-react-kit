import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { Button, Card, Dimmer, DimmerButtons } from '../../src';

const colors = ['primary', 'secondary'];

const meta: Meta<typeof Dimmer> = {
  title: 'Documentazione/Componenti/Dimmer',
  component: Dimmer
};

export default meta;

type Story = StoryObj<typeof Dimmer>;

export const Esempi: Story = {
  parameters: {
    docs: {
      controls: {
        include: ['color', 'show', 'icon']
      }
    }
  },
  render: ({ ...args }) => (
    <div>
      <div className='row dimmable'>
        <div className='col-12 col-lg-4'>
          {/* start card */}
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
          {/* end card */}
        </div>

        <div className='col-12 col-lg-4 d-none d-lg-block'>
          {/* start card */}
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
          {/* end card */}
        </div>
        <div className='col-12 col-lg-4 d-none d-lg-block'>
          {/* start card */}
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
        </div>
      </div>
      <Dimmer {...args}>
        <p>
          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
          donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
        </p>
      </Dimmer>
    </div>
  ),
  args: {
    color: 'primary',
    show: true,
    icon: 'it-unlocked'
  },
  argTypes: {
    color: {
      control: 'radio',
      options: colors
    },
    show: {
      control: 'boolean'
    },
    icon: {
      control: 'text'
    }
  }
};

export const DimmerConAzioni: Story = {
  render: () => (
    <div>
      <div className='row dimmable'>
        <div className='col-12 col-md-6 col-lg-6 my-3 my-md-4'>
          {/* start card */}
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
          {/* end card */}
        </div>
        <div className='col-12 col-md-6 col-lg-6 my-3 my-md-4'>
          {/* start card */}
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
          {/* end card */}
        </div>
      </div>
      <Dimmer icon='it-unlocked'>
        <h4>Titolo Dimmer</h4>
        <DimmerButtons>
          <Button color='primary' outline>
            Azione secondaria
          </Button>
          <Button color='primary'>Azione primaria</Button>
        </DimmerButtons>
      </Dimmer>
    </div>
  )
};

export const DimmerConAzioniColorePrimario: Story = {
  render: () => (
    <div>
      <div className='row dimmable'>
        <div className='col-12 col-md-6 col-lg-6 my-3 my-md-4'>
          {/* start card */}
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
          {/* end card */}
        </div>
        <div className='col-12 col-md-6 col-lg-6 my-3 my-md-4'>
          {/* start card */}
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
          {/* end card */}
        </div>
      </div>
      <Dimmer color='primary' icon='it-unlocked'>
        <h4>Titolo Dimmer</h4>
        <DimmerButtons single>
          <Button color='primary'>Azione primaria</Button>
        </DimmerButtons>
      </Dimmer>
    </div>
  )
};
