import { Collapse, Accordion, AccordionHeader, AccordionBody } from '../../src'

import CollapseExample from './CollapseExample'
import CollapseGroupsExample from './CollapseGroupsExample'
import CollapseAccordionExample from './CollapseAccordionExample'
import CollapseNestedExample from './CollapseNestedExample'

import Esempi from './docs/Esempi.md'
import Gruppi from './docs/Gruppi.md'
import AccordionEsempio from './docs/AccordionEsempio.md'
import Innestati from './docs/Innestati.md'

export default {
  title: 'Componenti/Collapse'
}

export const _Esempi = CollapseExample

export const GruppiDiElementiRichiudibili = CollapseGroupsExample

GruppiDiElementiRichiudibili.story = {
  name: 'Gruppi di elementi richiudibili'
}

export const _Accordion = CollapseAccordionExample

export const CollapseEAccordionInnestati = CollapseNestedExample

CollapseEAccordionInnestati.story = {
  name: 'Collapse e Accordion innestati'
}
