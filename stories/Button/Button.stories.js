import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

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

const EsempiInterattiviComponent = () => {
  const dimensions = [' ', 'xs', 'sm', 'lg']
  const color = select('Variazioni', colors, colors[0])
  const dimension = select('Dimensioni', dimensions, dimensions[0])
  const block = boolean('Block', false)
  const disabled = boolean('Disabilitato', false)
  const label = text('Label', '')

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

storiesOf('Componenti/Button', module)
  .addDecorator(withA11y)
  .add(
    'Esempi',
    withInfo({
      text: Esempi
    })(EsempiComponent)
  )
  .add(
    'Sfondo scuro',
    withInfo({
      text: DarkBackground
    })(DarkBackgroundComponent)
  )
  .add(
    'Varianti di dimensione',
    withInfo({
      text: Dimensioni
    })(DimensioniComponent)
  )
  .add(
    'Bottoni con icona',
    withInfo({
      text: ButtonIcon
    })(ButtonIconComponent)
  )
  .add(
    'Stato Attivo',
    withInfo({
      text: StatoAttivo
    })(StatoAttivoComponent)
  )
  .add(
    'Stato Disabilitato',
    withInfo({
      text: StatoDisabilitato
    })(StatoDisabilitatoComponent)
  )

storiesOf('Componenti/Button', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add(
    'Esempi interattivi',
    withInfo({
      text: EsempiInterattivi
    })(EsempiInterattiviComponent)
  )
