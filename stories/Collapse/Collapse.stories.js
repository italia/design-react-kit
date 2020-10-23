import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import { Collapse, Accordion, AccordionHeader, AccordionBody } from '../../src'

import CollapseExample from './CollapseExample'
import CollapseGroupsExample from './CollapseGroupsExample'
import CollapseAccordionExample from './CollapseAccordionExample'
import CollapseNestedExample from './CollapseNestedExample'

import Esempi from './docs/Esempi.md'
import Gruppi from './docs/Gruppi.md'
import AccordionEsempio from './docs/AccordionEsempio.md'
import Innestati from './docs/Innestati.md'

storiesOf('Componenti/Collapse', module)
  .addDecorator(withA11y)
  .add(
    'Esempi',
    withInfo({
      text: Esempi,
      propTables: [Collapse],
      propTablesExclude: [CollapseExample]
    })(CollapseExample)
  )
  .add(
    'Gruppi di elementi richiudibili',
    withInfo({
      text: Gruppi,
      propTables: [Accordion, AccordionHeader, AccordionBody],
      propTablesExclude: [CollapseGroupsExample]
    })(CollapseGroupsExample)
  )
  .add(
    'Accordion',
    withInfo({
      text: AccordionEsempio,
      propTables: [Accordion, AccordionHeader, AccordionBody],
      propTablesExclude: [CollapseAccordionExample]
    })(CollapseAccordionExample)
  )
  .add(
    'Collapse e Accordion innestati',
    withInfo({
      text: Innestati,
      propTables: [Collapse],
      propTablesExclude: [Accordion, AccordionHeader, AccordionBody]
    })(CollapseNestedExample)
  )
