import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button, Card, CardBody, CardText, CardTitle, Dimmer, DimmerButtons } from '../../src';

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
      <div className='col dimmable'>
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
      <div className='col dimmable'>
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
      <Dimmer color='primary' icon='it-unlocked'>
        <h4>Titolo Dimmer</h4>
        <DimmerButtons single>
          <Button color='primary'>Azione primaria</Button>
        </DimmerButtons>
      </Dimmer>
    </div>
  )
};
