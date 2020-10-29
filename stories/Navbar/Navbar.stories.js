import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select, color } from '@storybook/addon-knobs/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

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

const EsempiInterattiviComponent = () => {
  const variations = ['', 'primary', 'dark']
  const variation = select('Variazioni', variations, variations[0])
  const selectedColor = color('Color', '#e3f2fd')
  const placements = ['', 'top', 'bottom']
  const placement = select('Posizionamento', placements, placements[0])

  return (
    <Navbar
      light
      expand="lg"
      fixed={placement}
      sticky={placement}
      className={`bg-${variation}`}
      style={{ backgroundColor: selectedColor }}>
      <NavbarBrand href="#">Brand</NavbarBrand>
    </Navbar>
  )
}

storiesOf('Componenti/Navbar', module)
  .addDecorator(withA11y)
  .add(
    'Esempi',
    withInfo({
      text: Esempi,
      propTables: [Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink],
      propTablesExclude: [NavbarExample]
    })(NavbarExample)
  )
  .add(
    'Con Dropdown',
    withInfo({
      text: Dropdown,
      propTables: [
        Navbar,
        NavbarToggler,
        Collapse,
        Nav,
        NavItem,
        NavLink,
        UncontrolledDropdown,
        DropdownToggle,
        DropdownMenu
      ],
      propTablesExclude: [NavbarExample]
    })(NavbarDropdownExample)
  )
  .add(
    'Con Megamenu (in progress)',
    withInfo({
      text: Megamenu,
      propTables: [
        Navbar,
        NavbarToggler,
        Collapse,
        Nav,
        NavItem,
        NavLink,
        UncontrolledDropdown,
        DropdownToggle,
        DropdownMenu,
        LinkList,
        LinkListItem
      ],
      propTablesExclude: [NavbarExample]
    })(NavbarMegamenuExample)
  )
  .add(
    'Inline Menù',
    withInfo({
      text: Inline,
      propTables: [LinkList, LinkListItem, Collapse],
      propTablesExclude: [NavbarInlineExample]
    })(NavbarInlineExample)
  )
  .addDecorator(withKnobs)
  .add(
    'Esempi interattivi',
    withInfo({
      text: EsempiInterattivi
    })(EsempiInterattiviComponent)
  )
