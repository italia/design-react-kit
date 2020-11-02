import React from 'react'
import { withKnobs, number, text, select } from '@storybook/addon-knobs/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import { Button, Icon, Progress } from '../../src'

import Esempi from './docs/Esempi.md'
import Etichette from './docs/Etichette.md'
import Indeterminato from './docs/Indeterminato.md'
import Colori from './docs/Colori.md'
import ButtonProgress from './docs/ButtonProgress.md'
import EsempiInterattivi from './docs/EsempiInterattivi.md'

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

const ButtonProgressComponent = () => (
  <div className="container">
    <div className="row">
      <div className="col-12 col-sm-6">
        <p>
          <strong>Bottone primario</strong>
        </p>
        <Button color="primary" className="btn-progress" disabled>
          Label bottone{' '}
          <Icon color="light" icon="it-github" style={{ ariaHidden: true }} />
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
          <Icon color="light" icon="it-github" style={{ ariaHidden: true }} />
          <span>
            <Progress value="50" />
          </span>
        </Button>
      </div>
    </div>
  </div>
)

const EsempiInterattiviComponent = () => {
  const value = number('Valore', 25)
  const colors = ['', 'success', 'info', 'warning', 'danger']
  const color = select('Color', colors, colors[0])
  const label = text('Etichetta', 'progresso')

  return (
    <div>
      <Progress value={value} label={label} color={color} />
    </div>
  )
}

export default {
  title: 'Componenti/Progress Indicators',
  decorators: [withA11y, withKnobs]
}

export const _Esempi = withInfo({
  text: Esempi
})(EsempiComponent)

export const _Etichette = withInfo({
  text: Etichette
})(EtichetteComponent)

export const _ProgressoIndeterminato = withInfo({
  text: Indeterminato
})(ProgressoIndeterminato)

export const _Colori = withInfo({
  text: Colori
})(ColoriComponent)

export const BottoneConProgressBar = withInfo({
  text: ButtonProgress
})(ButtonProgressComponent)

BottoneConProgressBar.story = {
  name: 'Bottone con Progress Bar'
}

export const _EsempiInterattivi = withInfo({
  text: EsempiInterattivi
})(EsempiInterattiviComponent)

_EsempiInterattivi.story = {
  name: 'Esempi interattivi'
}
