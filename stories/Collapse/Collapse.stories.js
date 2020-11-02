import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

import { Collapse, Accordion, AccordionHeader, AccordionBody } from '../../src';

import CollapseExample from './CollapseExample';
import CollapseGroupsExample from './CollapseGroupsExample';
import CollapseAccordionExample from './CollapseAccordionExample';
import CollapseNestedExample from './CollapseNestedExample';

import Esempi from './docs/Esempi.md';
import Gruppi from './docs/Gruppi.md';
import AccordionEsempio from './docs/AccordionEsempio.md';
import Innestati from './docs/Innestati.md';

export default {
  title: 'Componenti/Collapse',
  decorators: [withA11y],
};

export const _Esempi = withInfo({
  text: Esempi,
  propTables: [Collapse],
  propTablesExclude: [CollapseExample],
})(CollapseExample);

export const GruppiDiElementiRichiudibili = withInfo({
  text: Gruppi,
  propTables: [Accordion, AccordionHeader, AccordionBody],
  propTablesExclude: [CollapseGroupsExample],
})(CollapseGroupsExample);

GruppiDiElementiRichiudibili.story = {
  name: 'Gruppi di elementi richiudibili',
};

export const _Accordion = withInfo({
  text: AccordionEsempio,
  propTables: [Accordion, AccordionHeader, AccordionBody],
  propTablesExclude: [CollapseAccordionExample],
})(CollapseAccordionExample);

export const CollapseEAccordionInnestati = withInfo({
  text: Innestati,
  propTables: [Collapse],
  propTablesExclude: [Accordion, AccordionHeader, AccordionBody],
})(CollapseNestedExample);

CollapseEAccordionInnestati.story = {
  name: 'Collapse e Accordion innestati',
};
