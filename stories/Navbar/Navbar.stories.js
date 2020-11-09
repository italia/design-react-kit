import React from 'react'

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  LinkList,
  LinkListItem
} from '../../src'

import NavbarExample from './NavbarExample'
import NavbarDropdownExample from './NavbarDropdownExample'
import NavbarMegamenuExample from './NavbarMegamenuExample'
import NavbarInlineExample from './NavbarInlineExample'

import Esempi from './docs/Esempi.md'
import Dropdown from './docs/Dropdown.md'
import Megamenu from './docs/Megamenu.md'
import Inline from './docs/Inline.md'
import EsempiInterattivi from './docs/EsempiInterattivi.md'

const EsempiInterattiviComponent = ({ variation, color, placement }) => {
  return (
    <Navbar
      light
      expand="lg"
      fixed={placement}
      sticky={placement}
      className={`bg-${variation}`}
      style={{ backgroundColor: color }}>
      <NavbarBrand href="#">Brand</NavbarBrand>
    </Navbar>
  )
}

export default {
  title: 'Componenti/Navbar'
}

export const _Esempi = NavbarExample

export const ConDropdown = NavbarDropdownExample

export const ConMegamenuInProgress = NavbarMegamenuExample

ConMegamenuInProgress.story = {
  name: 'Con Megamenu (in progress)'
}

export const InlineMenu = NavbarInlineExample

InlineMenu.story = {
  name: 'Inline Menù'
}

export const _EsempiInterattivi = EsempiInterattiviComponent

_EsempiInterattivi.story = {
  name: 'Esempi interattivi'
}

_EsempiInterattivi.args = {
  placement: '',
  variation: '',
  color: '#e3f2fd'
}
_EsempiInterattivi.argTypes = {
  placement: {
    control: {
      type: 'select',
      options: ['', 'top', 'bottom']
    }
  },
  variation: {
    control: {
      type: 'select',
      options: ['', 'primary', 'dark']
    }
  },
  color: {
    control: {
      type: 'color'
    }
  }
}
