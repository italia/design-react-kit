import React from 'react'
import { storiesOf } from '@storybook/react'

import { withKnobs, select, boolean, text } from '@storybook/addon-knobs/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import { Badge, Button } from '../../src'

import Esempi from './docs/Esempi.md'
import EsempiInterattivi from './docs/EsempiInterattivi.md'
import Contatore from './docs/Contatore.md'
import Variazioni from './docs/Variazioni.md'
import BordiArrotondati from './docs/BordiArrotondati.md'
import Link from './docs/Link.md'

const EsempiComponent = () => (
  <div>
    <h1>
      Titolo di esempio <Badge color="secondary">New</Badge>
    </h1>
    <h2>
      Titolo di esempio <Badge color="secondary">New</Badge>
    </h2>
    <h3>
      Titolo di esempio <Badge color="secondary">New</Badge>
    </h3>
    <h4>
      Titolo di esempio <Badge color="secondary">New</Badge>
    </h4>
    <h5>
      Titolo di esempio <Badge color="secondary">New</Badge>
    </h5>
    <h6>
      Titolo di esempio <Badge color="secondary">New</Badge>
    </h6>
  </div>
)

const ContatoreComponent = () => (
  <Button color="primary">
    Notifiche <Badge color="light">4</Badge>
  </Button>
)

const VariazioniComponent = () => (
  <div>
    <Badge className="mr-1" color="primary">
      Primary
    </Badge>
    <Badge className="mr-1" color="secondary">
      Secondary
    </Badge>
    <Badge className="mr-1" color="tertiary">
      Tertiary
    </Badge>
    <Badge className="mr-1" color="quaternary">
      Quaternary
    </Badge>
    <Badge className="mr-1" color="success">
      Success
    </Badge>
    <Badge className="mr-1" color="danger">
      Danger
    </Badge>
    <Badge className="mr-1" color="warning">
      Warning
    </Badge>
  </div>
)

const ArrotondatiComponent = () => (
  <div>
    <Badge className="mr-1" color="primary" pill>
      Primary
    </Badge>
    <Badge className="mr-1" color="secondary" pill>
      Secondary
    </Badge>
    <Badge className="mr-1" color="tertiary" pill>
      Tertiary
    </Badge>
    <Badge className="mr-1" color="quaternary" pill>
      Quaternary
    </Badge>
    <Badge className="mr-1" color="success" pill>
      Success
    </Badge>
    <Badge className="mr-1" color="danger" pill>
      Danger
    </Badge>
    <Badge className="mr-1" color="warning" pill>
      Warning
    </Badge>
  </div>
)

const LinkComponent = () => (
  <div>
    <Badge className="mr-1" href="#" color="primary">
      Primary
    </Badge>
    <Badge className="mr-1" href="#" color="secondary">
      Secondary
    </Badge>
    <Badge className="mr-1" href="#" color="tertiary">
      Tertiary
    </Badge>
    <Badge className="mr-1" href="#" color="quaternary">
      Quaternary
    </Badge>
    <Badge className="mr-1" href="#" color="success">
      Success
    </Badge>
    <Badge className="mr-1" href="#" color="danger">
      Danger
    </Badge>
    <Badge className="mr-1" href="#" color="warning">
      Warning
    </Badge>
  </div>
)

const EsempiInterattiviComponent = () => {
  const colors = [
    'primary',
    'secondary',
    'tertiary',
    'quaternary',
    'success',
    'danger',
    'warning'
  ]
  const color = select('Variazioni', colors, colors[0])
  const pill = boolean('Arrotondati', true)
  const label = text('Label', '')

  return (
    <p>
      Testo di esempio
      <Badge className="mx-1" color={color} pill={pill}>
        {label}
        {color}
      </Badge>
    </p>
  )
}

storiesOf('Componenti/Badge', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add(
    'Esempi',
    withInfo({
      text: Esempi
    })(EsempiComponent)
  )
  .add(
    'Esempi Interattivi',
    withInfo({
      text: EsempiInterattivi
    })(EsempiInterattiviComponent)
  )
  .add(
    'Contatore',
    withInfo({
      text: Contatore,
      propTablesExclude: [Button]
    })(ContatoreComponent)
  )
  .add(
    'Variazioni',
    withInfo({
      text: Variazioni
    })(VariazioniComponent)
  )
  .add(
    'Bordi Arrotondati',
    withInfo({
      text: BordiArrotondati
    })(ArrotondatiComponent)
  )
  .add(
    'Con Link',
    withInfo({
      text: Link
    })(LinkComponent)
  )
