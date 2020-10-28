import React from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import { Nav, NavItem, NavLink, TabContent, TabPane } from '../../src'

import {
  TabExampleText,
  TabExampleIcon,
  TabExampleTextIcon,
  TabExampleButton,
  TabExampleButtonVertical
} from './TabExample'

import Esempi from './docs/Esempi.md'
import Contenuto from './docs/Contenuto.md'
import Icone from './docs/Icone.md'
import IconeTesto from './docs/IconeTesto.md'
import TabBottoni from './docs/TabBottoni.md'
import AllineamentoVerticale from './docs/AllineamentoVerticale.md'

const EsempiComponent = () => (
  <div>
    <Nav tabs className="mb-3">
      <NavItem>
        <NavLink href="#" active>
          Link Attivo
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" disabled>
          Link disabilitato
        </NavLink>
      </NavItem>
    </Nav>

    <Nav tabs className="nav-dark">
      <NavItem>
        <NavLink href="#" active>
          Link Attivo
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" disabled>
          Link disabilitato
        </NavLink>
      </NavItem>
    </Nav>
  </div>
)
storiesOf('Componenti/Tab', module)
  .addDecorator(withA11y)
  .add(
    'Esempi',
    withInfo({
      text: Esempi
    })(EsempiComponent)
  )
  .add(
    'Contenuto',
    withInfo({
      text: Contenuto,
      propTables: [Nav, NavItem, NavLink, TabContent, TabPane],
      propTablesExclude: []
    })(TabExampleText)
  )
  .add(
    'Icone',
    withInfo({
      text: Icone,
      propTables: [Nav, NavItem, NavLink, TabContent, TabPane],
      propTablesExclude: []
    })(TabExampleIcon)
  )
  .add(
    'Icone e testo',
    withInfo({
      text: IconeTesto,
      propTables: [Nav, NavItem, NavLink, TabContent, TabPane],
      propTablesExclude: []
    })(TabExampleTextIcon)
  )
  .add(
    'Tab a bottoni',
    withInfo({
      text: TabBottoni,
      propTables: [Nav, NavItem, NavLink, TabContent, TabPane],
      propTablesExclude: []
    })(TabExampleButton)
  )
  .add(
    'Allineamento Verticale',
    withInfo({
      text: AllineamentoVerticale,
      propTables: [Nav, NavItem, NavLink, TabContent, TabPane],
      propTablesExclude: []
    })(TabExampleButtonVertical)
  )
