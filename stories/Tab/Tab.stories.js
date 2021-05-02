import React from 'react'

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

export default {
  title: 'Componenti/Tab'
}

export const _Esempi = EsempiComponent

export const _Contenuto = () => <TabExample text />

export const _Icone = () => <TabExample icons />

export const IconeETesto = () => <TabExample text icons />

IconeETesto.story = {
  name: 'Icone e testo'
}

export const TabABottoni = () => <TabButtonExample />

TabABottoni.story = {
  name: 'Tab a bottoni'
}

export const _AllineamentoVerticale = () => <TabButtonExample vertical />
