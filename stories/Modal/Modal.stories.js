import React from 'react'

import { ModalHeader, ModalBody, ModalFooter, Button } from '../../src'

import ModalExample from './ModalExample'
import ModalTooltipExample from './ModalTooltipExample'
import ModalGridExample from './ModalGridExample'
import ModalDynamicExample from './ModalDynamicExample'

import Esempi from './docs/Esempi.md'
import BottoneChiusura from './docs/BottoneChiusura.md'

const BottoneChiusuraComponent = () => (
  <div className="p-3">
    <button className="close position-absolute">&times;</button>
  </div>
)

export default {
  title: 'Componenti/Modal'
}

export const _Esempi = () => (
  <div>
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

export const BottoneDiChiusura = BottoneChiusuraComponent

BottoneDiChiusura.story = {
  name: 'Bottone di chiusura'
}

export const _Demo = () => <ModalExample />

export const ScrollDiContenutiLunghi = () => <ModalExample long />

ScrollDiContenutiLunghi.story = {
  name: 'Scroll di contenuti lunghi'
}

export const _CentraturaVerticale = () => <ModalExample centered />

_CentraturaVerticale.story = {
  name: 'Centratura verticale'
}

export const TooltipAndPopover = () => <ModalTooltipExample />

TooltipAndPopover.story = {
  name: 'Tooltip and popover'
}

export const UsoDellaGriglia = () => <ModalGridExample />

UsoDellaGriglia.story = {
  name: 'Uso della griglia'
}

export const ContenutoDellaModaleVariabile = () => <ModalDynamicExample />

ContenutoDellaModaleVariabile.story = {
  name: 'Contenuto della modale variabile'
}

export const RimuovereLanimazione = () => <ModalExample fade={false} />

RimuovereLanimazione.story = {
  name: 'Rimuovere l’animazione'
}

export const _Dimensioni = () => <ModalExample sizing />
