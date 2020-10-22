import React from 'react'
import { storiesOf } from '@storybook/react'

import { withKnobs, select, boolean } from '@storybook/addon-knobs/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import { Alert } from '../../src'

import AlertExample from './AlertExample'

import Esempi from './docs/Esempi.md'
import EsempiInterattivi from './docs/EsempiInterattivi.md'
import LinkEvidenziato from './docs/LinkEvidenziato.md'
import ContenutoAggiuntivo from './docs/ContenutoAggiuntivo.md'
import ChiusuraControllata from './docs/ChiusuraControllata.md'

const EsempiComponent = () => (
  <div>
    <Alert color="info">
      Questo è un alert di tipo <b>info</b>!
    </Alert>
    <Alert color="success">
      Questo è un alert di <b>success</b>!
    </Alert>
    <Alert color="danger">
      Questo è un alert di <b>danger</b>!
    </Alert>
    <Alert color="warning">
      Questo è un alert di <b>warning</b>!
    </Alert>
  </div>
)

const LinkEvidenziatoComponent = () => (
  <Alert color="danger">
    Questo è un alert con un esempio di{' '}
    <a href="#" className="alert-link">
      link
    </a>{' '}
    evidenziato.
  </Alert>
)

const ContenutoAggiuntivoComponent = () => (
  <Alert>
    <h4 className="alert-heading">Avviso di successo!</h4>
    <p>
      Stai leggendo questo importante messaggio di avviso di successo. Questo
      testo di esempio sarà più a lungo in modo da poter vedere come funzioni la
      spaziatura all&apos;interno di un avviso con questo tipo di contenuto.
    </p>
    <hr />
    <p className="mb-0">
      Quando necessario, assicurarti di inserire le utilità di margine per
      mantenere gli spazi equilibrati.
    </p>
  </Alert>
)

const ChiusuraControllataComponent = AlertExample

const EsempiInterattiviComponent = () => {
  const colors = ['info', 'success', 'danger', 'warning']
  const color = select('Variazioni', colors, colors[0])
  const open = boolean('Visible', true)

  return (
    <Alert color={color} isOpen={open}>
      Questo è un alert di <b>{color}</b>!
    </Alert>
  )
}

storiesOf('Componenti/Alert', module)
  .addDecorator(withA11y)
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
    'Link evidenziato',
    withInfo({
      text: LinkEvidenziato
    })(LinkEvidenziatoComponent)
  )
  .add(
    'Contenuto aggiuntivo',
    withInfo({
      text: ContenutoAggiuntivo
    })(ContenutoAggiuntivoComponent)
  )
  .addDecorator(withKnobs)
  .add(
    'Chiusura Controllata',
    withInfo({
      text: ChiusuraControllata,
      propTables: [Alert],
      propTablesExclude: [AlertExample]
    })(ChiusuraControllataComponent)
  )
