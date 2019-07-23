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
      <div key={color} className='mb-2'>
        <button
          type='button'
          className={`btn btn-${color.toLowerCase()}`}
        >
          {color}
        </button>
        {' '}
        <button
          type='button'
          className={`btn btn-outline-${color.toLowerCase()}`}
        >
          {color}
        </button>
      </div>
    ))}
  </div>
)

const DarkBackgroundComponent = () => (
  <div className='bg-dark py-1'>
    {colors.map(color => (
      <div key={color} className='mb-2'>
        <button
          type='button'
          className={`btn btn-${color.toLowerCase()}`}
        >
          {color}
        </button>
        {' '}
        <button
          type='button'
          className={`btn btn-outline-${color.toLowerCase()}`}
        >
          {color}
        </button>
      </div>
    ))}
  </div>
)

const DimensioniComponent = () => (
  <section>
    <div>
      <button type='button' className='btn btn-primary btn-lg'>
                Primary Large
      </button>
      {' '}
      <button type='button' className='btn btn-secondary btn-lg'>
                Secondary Large
      </button>
      <div className='mt-3' />
      <button type='button' className='btn btn-primary btn-sm'>
                Primary Small
      </button>
      {' '}
      <button type='button' className='btn btn-secondary btn-sm'>
                Secondary Small
      </button>
      <div className='mt-3' />
      <button type='button' className='btn btn-primary btn-xs'>
                Primary Mini
      </button>
      {' '}
      <button type='button' className='btn btn-secondary btn-xs'>
                Secondary Mini
      </button>
      <div className='mt-3' />
      <button type='button' className='btn btn-primary btn-lg btn-block'>
                Primary Block
      </button>
      {' '}
      <button type='button'
        className='btn btn-secondary btn-lg btn-block'>
                Secondary Block
      </button>
    </div>
  </section>
)

const ButtonIconComponent = () => (
  <div>
    <button className='btn btn-success btn-lg btn-icon'>
      <svg className='icon icon-white'>
        <use xlinkHref='/svg/sprite.svg#it-star-full' />
      </svg>
      <span>Icon Button Lg</span>
    </button>
    {' '}
    <button className='btn btn-primary btn-icon'>
      <svg className='icon icon-white'>
        <use xlinkHref='/svg/sprite.svg#it-star-full' />
      </svg>
      <span>Icon Button</span>
    </button>
    {' '}
    <button className='btn btn-danger btn-sm btn-icon'>
      <svg className='icon icon-secondary'>
        <use xlinkHref='/svg/sprite.svg#it-star-full' />
      </svg>
      <span>Icon Button Sm</span>
    </button>
    {' '}
    <button className='btn btn-info btn-xs btn-icon'>
      <svg className='icon icon-danger'>
        <use xlinkHref='/svg/sprite.svg#it-star-full' />
      </svg>
      <span>Icon Button Xs</span>
    </button>
  </div>
)

const StatoAttivoComponent = () => (
  <div>
    {colors.map(color => (
      <span key={color}>
        <button
          type='button'
          className={`btn btn-${color.toLowerCase()}`}
        >
          {color}
        </button>
        {' '}
      </span>
    ))}
  </div>
)

const StatoDisabilitatoComponent = () => (
  <div>
    {colors.map(color => (
      <span key={color}>
        <button
          type='button'
          className={`btn btn-${color.toLowerCase()} disabled`}
        >
          {color}
        </button>
        {' '}
      </span>
    ))}
  </div>
)

const EsempiInterattiviComponent = () => {
  const dimensions = ['btn-xs', 'btn-sm', 'btn-lg']
  const color = select('Variazioni', colors, colors[0])
  const dimension = select('Dimensioni', dimensions, dimensions[0])
  const block = boolean('Block', false)
  const disabled = boolean('Disabilitato', false)
  const label = text('Label', '')

  return (
    <button
      type='button'
      className={`btn btn-${color.toLowerCase()} ${dimension} ${
        disabled ? 'disabled' : ' '
      } ${block ? 'btn-block' : ''}`}
    >
      {label} {color} {dimension} {block ? 'block' : ''}{' '}
      {disabled ? 'disabled' : ' '}
    </button>
  )
}

storiesOf('Componenti/Button', module)
  .addDecorator(withA11y)
  .add('Esempi', withInfo({
    text: Esempi
  })(EsempiComponent))
  .add('Sfondo scuro', withInfo({
    text: DarkBackground
  })(DarkBackgroundComponent))
  .add('Varianti di dimensione', withInfo({
    text: Dimensioni
  })(DimensioniComponent))
  .add('Bottoni con icona', withInfo({
    text: ButtonIcon
  })(ButtonIconComponent))
  .add('Stato Attivo', withInfo({
    text: StatoAttivo
  })(StatoAttivoComponent))
  .add('Stato Disabilitato', withInfo({
    text: StatoDisabilitato
  })(StatoDisabilitatoComponent))

storiesOf('Componenti/Button', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('Esempi interattivi', withInfo({
    text: EsempiInterattivi
  })(EsempiInterattiviComponent))
