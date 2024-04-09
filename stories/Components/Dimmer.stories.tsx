import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button, Card, CardBody, CardText, CardTitle, Dimmer, DimmerButtons, Fade } from '../../src';

const meta: Meta<typeof Dimmer> = {
  title: "Documentazione/Componenti/Dimmer",
  component: Dimmer,
};

export default meta;

type Story = StoryObj<typeof Dimmer>;

export const Esempi: Story = {
  render: () => (
    <div>
      <Fade in={true} tag='div' className='mt-3'>
        <Dimmer icon='it-unlocked'>
          <p>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
          </p>
        </Dimmer>
      </Fade>
      <div className='row'>
        <div className='col-12 col-lg-4'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>

        <div className='col-12 col-lg-4 d-none d-lg-block'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>
        <div className='col-12 col-lg-4 d-none d-lg-block'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
};

export const ColorePrimario: Story = {
  render: () => (
    <div>
      <Fade in={true} tag='div' className='mt-3'>
        <Dimmer color='primary' icon='it-unlocked'>
          <p>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
          </p>
        </Dimmer>
      </Fade>
      <div className='row'>
        <div className='col-12 col-lg-4'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>

        <div className='col-12 col-lg-4 d-none d-lg-block'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>
        <div className='col-12 col-lg-4 d-none d-lg-block'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
};

export const DimmerConAzioni: Story = {
  render: () => (
    <div>
      <Fade in={true} tag='div' className='mt-3'>
        <Dimmer icon='it-unlocked'>
          <h4>Titolo Dimmer</h4>
          <DimmerButtons>
            <Button color='primary' outline>
              Azione secondaria
            </Button>
            <Button color='primary'>Azione primaria</Button>
          </DimmerButtons>
        </Dimmer>
      </Fade>
      <div className='col'>
        <div className='col-12 col-lg-4'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>
        <div className='col-12 col-lg-4 d-none d-lg-block'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>
      </div>
    </div>
  )
};

export const DimmerConAzioniColorePrimario: Story = {
  render: () => (
    <div>
      <Fade in={true} tag='div' className='mt-3'>
        <Dimmer color='primary' icon='it-unlocked'>
          <h4>Titolo Dimmer</h4>
          <DimmerButtons single>
            <Button color='primary'>Azione primaria</Button>
          </DimmerButtons>
        </Dimmer>
      </Fade>
      <div className='col'>
        <div className='col-12 col-lg-4'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>
        <div className='col-12 col-lg-4 d-none d-lg-block'>
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag='h5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>
      </div>
    </div>
  )
};
