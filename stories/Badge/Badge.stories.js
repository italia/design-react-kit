import React from 'react'

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

const EsempiInterattiviComponent = ({ color, pill, label }) => {
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

export default {
  title: 'Componenti/Badge',
  decorators: [withA11y]
}

export const _Esempi = EsempiComponent

export const _EsempiInterattivi = EsempiInterattiviComponent
_EsempiInterattivi.args = {
  color: 'info',
  pill: true,
  label: ''
}
_EsempiInterattivi.argTypes = {
  color: {
    control: {
      type: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'quaternary',
        'success',
        'danger',
        'warning'
      ]
    }
  }
}

export const _Contatore = ContatoreComponent

export const _Variazioni = VariazioniComponent

export const _BordiArrotondati = ArrotondatiComponent

export const ConLink = LinkComponent
