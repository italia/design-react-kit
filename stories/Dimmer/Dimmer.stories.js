import React from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean } from '@storybook/addon-knobs/react'

import {
  Dimmer,
  DimmerButtons,
  Button,
  Fade,
  Card,
  CardBody,
  CardTitle,
  CardText
} from '../../src'

import Esempi from './docs/Esempi.md'
import DimmerActions from './docs/DimmerActions.md'
import ColorePrimario from './docs/ColorePrimario.md'

const EsempiComponent = () => {
  const fadeIn = boolean('Dimmer Toggle', true)
  return (
    <div>
      <Fade in={fadeIn} tag="div" className="mt-3">
        <Dimmer icon="it-unlocked">
          <p>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper
            dignissim cras. Dictum sit amet justo donec enim diam vulputate ut.
            Eu nisl nunc mi ipsum faucibus.
          </p>
        </Dimmer>
      </Fade>
      <div className="row">
        <div className="col-12 col-lg-4">
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag="h5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>

        <div className="col-12 col-lg-4 d-none d-lg-block">
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag="h5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>
        <div className="col-12 col-lg-4 d-none d-lg-block">
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag="h5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

const ColorePrimarioComponent = () => {
  const fadeIn = boolean('Dimmer Toggle', true)
  return (
    <div>
      <Fade in={fadeIn} tag="div" className="mt-3">
        <Dimmer color="primary" icon="it-unlocked">
          <p>
            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper
            dignissim cras. Dictum sit amet justo donec enim diam vulputate ut.
            Eu nisl nunc mi ipsum faucibus.
          </p>
        </Dimmer>
      </Fade>
      <div className="row">
        <div className="col-12 col-lg-4">
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag="h5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>

        <div className="col-12 col-lg-4 d-none d-lg-block">
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag="h5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>
        <div className="col-12 col-lg-4 d-none d-lg-block">
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag="h5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

const DimmerConAzioniComponent = () => {
  const fadeIn = boolean('Dimmer Toggle', true)
  return (
    <div>
      <Fade in={fadeIn} tag="div" className="mt-3">
        <Dimmer icon="it-unlocked">
          <h4>Titolo Dimmer</h4>
          <DimmerButtons dark>
            <Button color="primary" outline>
              Azione secondaria
            </Button>
            <Button color="primary">Azione primaria</Button>
          </DimmerButtons>
        </Dimmer>
      </Fade>
      <div className="col">
        <div className="col-12 col-lg-4">
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag="h5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>
        <div className="col-12 col-lg-4 d-none d-lg-block">
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag="h5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>
      </div>
    </div>
  )
}

const DimmerPrimaryActionsComponent = () => {
  const fadeIn = boolean('Dimmer Toggle', true)
  return (
    <div>
      <Fade in={fadeIn} tag="div" className="mt-3">
        <Dimmer color="primary" icon="it-unlocked">
          <h4>Titolo Dimmer</h4>
          <DimmerButtons single dark>
            <Button color="primary">Azione primaria</Button>
          </DimmerButtons>
        </Dimmer>
      </Fade>
      <div className="col">
        <div className="col-12 col-lg-4">
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag="h5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>
        <div className="col-12 col-lg-4 d-none d-lg-block">
          {/* start card */}
          <Card>
            <CardBody>
              <CardTitle tag="h5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor…
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </CardText>
            </CardBody>
          </Card>
          {/* end card */}
        </div>
      </div>
    </div>
  )
}

storiesOf('Componenti/Dimmer', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add(
    'Esempi',
    withInfo({
      text: Esempi
    })(EsempiComponent)
  )
  .add(
    'Colore Primario',
    withInfo({
      text: ColorePrimario
    })(ColorePrimarioComponent)
  )
  .add(
    'Dimmer con Azioni',
    withInfo({
      text: DimmerActions
    })(DimmerConAzioniComponent)
  )
  .add(
    'Dimmer con Azioni Colore Primario',
    withInfo({
      text: ColorePrimario
    })(DimmerPrimaryActionsComponent)
  )
