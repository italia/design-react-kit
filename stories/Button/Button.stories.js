import React from 'react'

import Esempi from './docs/Esempi.md'
import Dimensioni from './docs/Dimensioni.md'
import StatoAttivo from './docs/StatoAttivo.md'
import StatoDisabilitato from './docs/StatoDisabilitato.md'
import EsempiInterattivi from './docs/EsempiInterattivi.md'
import ButtonIcon from './docs/ButtonIcon.md'
import DarkBackground from './docs/DarkBackground.md'

import { Button, Icon } from '../../src'

const colors = [
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Danger',
  'Warning',
  'Link'
]

const EsempiComponent = () => (
  <div>
    {colors.map(color => (
      <div key={color} className="mb-2">
        <Button color={color.toLowerCase()}>{color}</Button>{' '}
        <Button outline color={color.toLowerCase()}>
          {color} Outline
        </Button>
      </div>
    ))}
  </div>
)

const DarkBackgroundComponent = () => (
  <div className="bg-dark py-1">
    {colors.map(color => (
      <div key={color} className="mb-2">
        <Button color={color.toLowerCase()}>{color}</Button>{' '}
        <Button outline color={color.toLowerCase()}>
          {color} Outline
        </Button>
      </div>
    ))}
  </div>
)

const DimensioniComponent = () => (
  <section>
    <div>
      <Button color="primary" size="lg">
        Primary Large
      </Button>{' '}
      <Button color="secondary" size="lg">
        Secondary Large
      </Button>{' '}
      <div className="mt-3" />
      <Button color="primary" size="sm">
        Primary Small
      </Button>{' '}
      <Button color="secondary" size="sm">
        Secondary Small
      </Button>{' '}
      <div className="mt-3" />
      <Button color="primary" size="xs">
        Primary Mini
      </Button>{' '}
      <Button color="secondary" size="xs">
        Secondary Mini
      </Button>{' '}
      <div className="mt-3" />
      <Button color="primary" block>
        Primary Block
      </Button>{' '}
      <Button color="secondary" block>
        Secondary Block
      </Button>{' '}
    </div>
  </section>
)

const ButtonIconComponent = () => (
  <div>
    <Button color="primary" size="lg" icon>
      <Icon color="white" icon="it-star-full" /> Icon Button Large
    </Button>{' '}
    <Button color="success" icon>
      <Icon color="white" icon="it-star-full" /> Icon Button
    </Button>{' '}
    <Button color="danger" size="sm" icon>
      <Icon color="secondary" icon="it-star-full" /> Icon Button Small
    </Button>{' '}
    <Button color="info" size="xs" icon>
      <Icon color="danger" icon="it-star-full" /> Icon Button Extra Small
    </Button>
  </div>
)

const StatoAttivoComponent = () => (
  <div>
    {colors.map(color => (
      <span key={color}>
        <Button color={color.toLowerCase()}>{color}</Button>{' '}
      </span>
    ))}
  </div>
)

const StatoDisabilitatoComponent = () => (
  <div>
    {colors.map(color => (
      <span key={color}>
        <Button color={color.toLowerCase()} disabled>
          {color}
        </Button>{' '}
      </span>
    ))}
  </div>
)

const EsempiInterattiviComponent = ({
  color,
  dimension,
  block,
  disabled,
  label
}) => {
  return (
    <Button
      color={color.toLowerCase()}
      disabled={disabled}
      block={block}
      size={dimension}>
      {label} {color} {dimension} {block ? 'block' : ''}{' '}
      {disabled ? 'disabled' : ' '}
    </Button>
  )
}

export default {
  title: 'Componenti/Button',
  decorators: [withA11y]
}

export const _Esempi = EsempiComponent

export const SfondoScuro = DarkBackgroundComponent

SfondoScuro.story = {
  name: 'Sfondo scuro'
}

export const VariantiDiDimensione = DimensioniComponent

VariantiDiDimensione.story = {
  name: 'Varianti di dimensione'
}

export const BottoniConIcona = ButtonIconComponent

BottoniConIcona.story = {
  name: 'Bottoni con icona'
}

export const _StatoAttivo = StatoAttivoComponent

export const _StatoDisabilitato = StatoDisabilitatoComponent

export const _EsempiInterattivi = EsempiInterattiviComponent
_EsempiInterattivi.args = {
  color: colors[0],
  dimension: ' ',
  block: false,
  disabled: false,
  label: ''
}
_EsempiInterattivi.argTypes = {
  color: {
    control: {
      type: 'select',
      options: colors
    }
  },
  dimension: {
    control: {
      type: 'select',
      options: [' ', 'xs', 'sm', 'lg']
    }
  }
}

_EsempiInterattivi.story = {
  name: 'Esempi interattivi'
}
