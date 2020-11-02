import React from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '../../src'

import {
  ModalExampleClassic,
  ModalExampleCentered,
  ModalExampleLong,
  ModalExampleNoAnimation,
  ModalExampleSizing
} from './ModalExample'
import ModalTooltipExample from './ModalTooltipExample'
import ModalGridExample from './ModalGridExample'
import ModalDynamicExample from './ModalDynamicExample'

import Esempi from './docs/Esempi.md'
import BottoneChiusura from './docs/BottoneChiusura.md'
import Demo from './docs/Demo.md'
import ScrollContenutiLunghi from './docs/ScrollContenutiLunghi.md'
import CentraturaVerticale from './docs/CentraturaVerticale.md'
import TooltipPopover from './docs/TooltipPopover.md'
import UsoGriglia from './docs/UsoGriglia.md'
import RimuovereAnimazione from './docs/RimuovereAnimazione.md'
import Dimensioni from './docs/Dimensioni.md'
import ModalVariabile from './docs/ModalVariabile.md'

const EsempiComponent = () => (
  <div style={{ padding: '0px 290px' }}>
    <div className="modal-content">
      <ModalHeader>Titolo della modale</ModalHeader>
      <ModalBody>Il testo del corpo della modale va qui.</ModalBody>
      <ModalFooter>
        <Button color="secondary">Chiudi</Button>
        <Button color="primary">Salva le modifiche</Button>
      </ModalFooter>
    </div>
  </div>
)

const BottoneChiusuraComponent = () => (
  <div className="p-3">
    <button className="close position-absolute">&times;</button>
  </div>
)

storiesOf('Componenti/Modal', module)
  .addDecorator(withA11y)
  .add(
    'Esempi',
    withInfo({
      text: Esempi,
      propTablesExclude: [Button]
    })(EsempiComponent)
  )
  .add(
    'Bottone di chiusura',
    withInfo({
      text: BottoneChiusura,
      propTablesExclude: [Button]
    })(BottoneChiusuraComponent)
  )
  .add(
    'Demo',
    withInfo({
      text: Demo,
      propTables: [Modal, ModalHeader, ModalBody, ModalFooter],
      propTablesExclude: []
    })(ModalExampleClassic)
  )
  .add(
    'Scroll di contenuti lunghi',
    withInfo({
      text: ScrollContenutiLunghi,
      propTables: [Modal, ModalHeader, ModalBody, ModalFooter],
      propTablesExclude: []
    })(ModalExampleLong)
  )
  .add(
    'Centratura verticale',
    withInfo({
      text: CentraturaVerticale,
      propTables: [Modal, ModalHeader, ModalBody, ModalFooter],
      propTablesExclude: []
    })(ModalExampleCentered)
  )
  .add(
    'Tooltip and popover',
    withInfo({
      text: TooltipPopover,
      propTables: [Modal, ModalHeader, ModalBody, ModalFooter],
      propTablesExclude: [ModalTooltipExample]
    })(ModalTooltipExample)
  )
  .add(
    'Uso della griglia',
    withInfo({
      text: UsoGriglia,
      propTables: [Modal, ModalHeader, ModalBody, ModalFooter],
      propTablesExclude: [ModalGridExample]
    })(ModalGridExample)
  )
  .add(
    'Contenuto della modale variabile',
    withInfo({
      text: ModalVariabile,
      propTables: [Modal, ModalHeader, ModalBody, ModalFooter],
      propTablesExclude: [ModalDynamicExample]
    })(() => <ModalDynamicExample />)
  )
  .add(
    'Rimuovere l’animazione',
    withInfo({
      text: RimuovereAnimazione,
      propTables: [Modal, ModalHeader, ModalBody, ModalFooter],
      propTablesExclude: []
    })(ModalExampleNoAnimation)
  )
  .add(
    'Dimensioni',
    withInfo({
      text: Dimensioni,
      propTables: [Modal, ModalHeader, ModalBody, ModalFooter],
      propTablesExclude: []
    })(ModalExampleSizing)
  )
