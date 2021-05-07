import React from 'react'

import { Button, Icon, Progress } from '../../src'

// import Esempi from './docs/Esempi.md'
// import Etichette from './docs/Etichette.md'
// import Indeterminato from './docs/Indeterminato.md'
// import Colori from './docs/Colori.md'
// import ButtonProgress from './docs/ButtonProgress.md'
// import EsempiInterattivi from './docs/EsempiInterattivi.md'

const EsempiComponent = () => (
  <div>
    <div className="mb-3">
      <Progress value="0" />
    </div>
    <div className="mb-3">
      <Progress value="25" />
    </div>
    <div className="mb-3">
      <Progress value="50" />
    </div>
    <div className="mb-3">
      <Progress value="75" />
    </div>
    <div className="mb-3">
      <Progress value="100" />
    </div>
  </div>
)

const EtichetteComponent = () => (
  <div>
    <Progress value="35" label="progresso" />
  </div>
)

const ProgressoIndeterminato = () => (
  <Progress indeterminate label="In elaborazione..." />
)

const ColoriComponent = () => (
  <div>
    <div className="mb-3">
      <Progress value="25" color="success" />
    </div>
    <div className="mb-3">
      <Progress value="33" color="info" />
    </div>
    <div className="mb-3">
      <Progress value="50" color="warning" />
    </div>
    <div className="mb-3">
      <Progress value="66" color="danger" />
    </div>
  </div>
)

export const BottoneConProgressBar = () => (
  <div className="container">
    <div className="row">
      <div className="col-12 col-sm-6">
        <p>
          <strong>Bottone primario</strong>
        </p>
        <Button color="primary" className="btn-progress" disabled>
          Label bottone{' '}
          <Icon color="light" icon="it-github" aria-hidden />
          <span>
            <Progress value="50" />
          </span>
        </Button>
      </div>
      <div className="col-12 col-sm-6">
        <p>
          <strong>Bottone secondario</strong>
        </p>
        <Button color="secondary" className="btn-progress" disabled>
          Label bottone{' '}
          <Icon color="light" icon="it-github" aria-hidden />
          <span>
            <Progress value="50" />
          </span>
        </Button>
      </div>
    </div>
  </div>
)

export const _EsempiInterattivi = ({ value, color, label }) => {
  return (
    <div>
      <Progress value={value} label={label} color={color} />
    </div>
  )
}

export default {
  title: 'Componenti/Progress Indicators'
}

export const _Esempi = EsempiComponent

export const _Etichette = EtichetteComponent

export const _ProgressoIndeterminato = ProgressoIndeterminato

export const _Colori = ColoriComponent

BottoneConProgressBar.story = {
  name: 'Bottone con Progress Bar'
}

_EsempiInterattivi.story = {
  name: 'Esempi interattivi'
}

_EsempiInterattivi.args = {
  color: '',
  value: 25,
  label: 'progresso'
}
_EsempiInterattivi.argTypes = {
  color: {
    control: {
      type: 'select',
      options: ['', 'success', 'info', 'warning', 'danger']
    }
  }
}
