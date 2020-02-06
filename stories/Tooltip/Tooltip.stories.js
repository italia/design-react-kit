import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select } from '@storybook/addon-knobs/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'
import { UncontrolledTooltip, Button } from '../../src'

import Esempi from './docs/Esempi.md'
import Posizioni from './docs/Posizioni.md'
import EsempiInterattivi from './docs/EsempiInterattivi.md'

const EsempiComponent = () => {
  const ids = ['Example1', 'Example2', 'Example3']

  ids.map((id, i) => {
    const div = document.createElement('div')
    div.setAttribute('id', id)
    document.body.appendChild(div)
  })

  return (
    <div className="bd-example tooltip-demo">
      <p className="muted">
        Ecco un{' '}
        <a href="#" id={ids[0]}>
          bianco scenario
        </a>
        <br />
        per tratteggiarvi l’accompagnamento
        <br />
        degli oggetti di sfondo che pur vivono.
        <br />
        Non ne sarò{' '}
        <a href="#" id={ids[1]}>
          l’artefice
        </a>{' '}
        impaziente.
        <br />
        Berrò alle coppe della nostalgia,
        <br />
        avrò preteso d’ozio nelle lacrime...
        <br />
        perché non mi ribello alla natura:
        <br />
        la mia lentezza li esaspera...
        <br />
        La mia lentezza? No, la mia fiducia.
        <br />
        Per adesso è deserto.
        <br />
        <a href="#" id={ids[2]}>
          Il mondo può rifarsi senza me
        </a>
        ,
        <br />E intanto gli altri mi denigreranno
      </p>
      <p>
        <em>La città nuova, Alda Merini</em>
      </p>

      <UncontrolledTooltip placement="top" target={ids[0]}>
        Primo tooltip
      </UncontrolledTooltip>
      <UncontrolledTooltip placement="top" target={ids[1]}>
        Secondo tooltip
      </UncontrolledTooltip>
      <UncontrolledTooltip placement="top" target={ids[2]}>
        Terzo tooltip
      </UncontrolledTooltip>
    </div>
  )
}

const PosizioniComponent = () => {
  const ids = ['example1', 'example2', 'example3', 'example4', 'example5']

  ids.map((id, i) => {
    const div = document.createElement('div')
    div.setAttribute('id', id)
    document.body.appendChild(div)
  })

  return (
    <div style={{ padding: 100 }}>
      <Button id={ids[0]} className="m-3">
        Tooltip in alto
      </Button>
      <Button id={ids[1]} className="m-3">
        Tooltip a destra
      </Button>
      <Button id={ids[2]} className="m-3">
        Tooltip in basso
      </Button>
      <Button id={ids[3]} className="m-3">
        Tooltip a sinistra
      </Button>
      <Button id={ids[4]} className="m-3">
        Tooltip con HTML
      </Button>

      <UncontrolledTooltip placement="top" target={ids[0]}>
        Tooltip on top
      </UncontrolledTooltip>
      <UncontrolledTooltip placement="right" target={ids[1]}>
        Tooltip on right
      </UncontrolledTooltip>
      <UncontrolledTooltip placement="bottom" target={ids[2]}>
        Tooltip on bottom
      </UncontrolledTooltip>
      <UncontrolledTooltip placement="left" target={ids[3]}>
        Tooltip on left
      </UncontrolledTooltip>
      <UncontrolledTooltip placement="top" target={ids[4]}>
        <em>Tooltip</em> <u>with</u> <b>HTML</b>
      </UncontrolledTooltip>
    </div>
  )
}

const EsempiInterattiviComponent = () => {
  // TODO find a better way to handle this
  // Storyshot does not use the dom so can't render refs
  // to fix the problem we append the elements manually
  // this fixes tests without touching the rendered components
  // nor storybook
  // https://github.com/storybookjs/storybook/issues/886
  // https://github.com/infinitered/addon-storyshots#using-createnodemock-to-mock-refs

  const id = 'example'
  const div = document.createElement('div')
  div.setAttribute('id', id)
  document.body.appendChild(div)

  const placements = ['top', 'bottom', 'left', 'right']
  const placement = select('Posizione', placements, placements[0])
  const body = text('Body', 'Tooltip')

  return (
    <div style={{ padding: 200 }}>
      <Button id={id} className="m-3">
        Tooltip
      </Button>

      <UncontrolledTooltip placement={placement} target={id}>
        {body}
      </UncontrolledTooltip>
    </div>
  )
}

storiesOf('Componenti/Tooltip', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add(
    'Esempi',
    withInfo({
      text: Esempi
    })(EsempiComponent)
  )
  .add(
    'Posizioni',
    withInfo({
      text: Posizioni
    })(PosizioniComponent)
  )
  .add(
    'Esempi interattivi',
    withInfo({
      text: EsempiInterattivi
    })(EsempiInterattiviComponent)
  )
