import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '../../src';

import ModalExample from './ModalExample';
import ModalTooltipExample from './ModalTooltipExample';
import ModalGridExample from './ModalGridExample';
import ModalDynamicExample from './ModalDynamicExample';

import Esempi from './docs/Esempi.md';
import BottoneChiusura from './docs/BottoneChiusura.md';
import Demo from './docs/Demo.md';
import ScrollContenutiLunghi from './docs/ScrollContenutiLunghi.md';
import CentraturaVerticale from './docs/CentraturaVerticale.md';
import TooltipPopover from './docs/TooltipPopover.md';
import UsoGriglia from './docs/UsoGriglia.md';
import RimuovereAnimazione from './docs/RimuovereAnimazione.md';
import Dimensioni from './docs/Dimensioni.md';
import ModalVariabile from './docs/ModalVariabile.md';

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
);

const BottoneChiusuraComponent = () => (
  <div className="p-3">
    <button className="close position-absolute">&times;</button>
  </div>
);

export default {
  title: 'Componenti/Modal',
  decorators: [withA11y],
};

export const _Esempi = withInfo({
  text: Esempi,
  propTablesExclude: [Button],
})(EsempiComponent);

export const BottoneDiChiusura = withInfo({
  text: BottoneChiusura,
  propTablesExclude: [Button],
})(BottoneChiusuraComponent);

BottoneDiChiusura.story = {
  name: 'Bottone di chiusura',
};

export const _Demo = withInfo({
  text: Demo,
  propTables: [Modal, ModalHeader, ModalBody, ModalFooter],
  propTablesExclude: [ModalExample],
})(() => <ModalExample />);

export const ScrollDiContenutiLunghi = withInfo({
  text: ScrollContenutiLunghi,
  propTables: [Modal, ModalHeader, ModalBody, ModalFooter],
  propTablesExclude: [ModalExample],
})(() => <ModalExample long />);

ScrollDiContenutiLunghi.story = {
  name: 'Scroll di contenuti lunghi',
};

export const _CentraturaVerticale = withInfo({
  text: CentraturaVerticale,
  propTables: [Modal, ModalHeader, ModalBody, ModalFooter],
  propTablesExclude: [ModalExample],
})(() => <ModalExample centered />);

_CentraturaVerticale.story = {
  name: 'Centratura verticale',
};

export const TooltipAndPopover = withInfo({
  text: TooltipPopover,
  propTables: [Modal, ModalHeader, ModalBody, ModalFooter],
  propTablesExclude: [ModalTooltipExample],
})(() => <ModalTooltipExample />);

TooltipAndPopover.story = {
  name: 'Tooltip and popover',
};

export const UsoDellaGriglia = withInfo({
  text: UsoGriglia,
  propTables: [Modal, ModalHeader, ModalBody, ModalFooter],
  propTablesExclude: [ModalGridExample],
})(() => <ModalGridExample />);

UsoDellaGriglia.story = {
  name: 'Uso della griglia',
};

export const ContenutoDellaModaleVariabile = withInfo({
  text: ModalVariabile,
  propTables: [Modal, ModalHeader, ModalBody, ModalFooter],
  propTablesExclude: [ModalDynamicExample],
})(() => <ModalDynamicExample />);

ContenutoDellaModaleVariabile.story = {
  name: 'Contenuto della modale variabile',
};

export const RimuovereLanimazione = withInfo({
  text: RimuovereAnimazione,
  propTables: [Modal, ModalHeader, ModalBody, ModalFooter],
  propTablesExclude: [ModalExample],
})(() => <ModalExample fade={false} />);

RimuovereLanimazione.story = {
  name: 'Rimuovere l’animazione',
};

export const _Dimensioni = withInfo({
  text: Dimensioni,
  propTables: [Modal, ModalHeader, ModalBody, ModalFooter],
  propTablesExclude: [ModalExample],
})(() => <ModalExample sizing />);
