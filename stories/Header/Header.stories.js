import React from 'react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'

import {
  // Components to exclude from the table
  Button,
  Collapse,
  Icon,
  Nav,
  NavItem,
  NavLink,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  // Components to include
  Header,
  HeaderContent,
  HeaderLinkZone,
  HeaderRightZone,
  HeaderBrand,
  HeaderSearch,
  HeaderSocialsZone,
  HeaderToggler
} from '../../src'

import SlimHeaderBasic from './SlimHeader/basic'
import SlimHeaderFull from './SlimHeader/basic-full-responsive'
import CenterHeaderBasic from './CenterHeader/basic'
import NavHeaderBasic from './NavHeader/basic'
import CompleteHeaderBasic, {
  SlimHeader,
  CenterHeader,
  NavHeader
} from './CompleteHeader/basic'

import Introduction from './Introduction'

import SlimBasicDoc from './SlimHeader/basic.md'
import SlimFullDoc from './SlimHeader/basic-full-responsive.md'
import CenterBasicDoc from './CenterHeader/basic.md'
import NavBasicDoc from './NavHeader/basic.md'
import CompleteBasicDoc from './CompleteHeader/basic.md'

const ComponentsToExclude = [
  Button,
  Collapse,
  Icon,
  Nav,
  NavItem,
  NavLink,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
]

export default {
  title: 'Componenti/Header',
  decorators: [withA11y, withKnobs],

  parameters: {
    options: {
      showPanel: false
    }
  }
}

export const Introduzione = () => <Introduction />

export const HeaderSlim = withInfo({
  text: SlimBasicDoc,
  propTables: [
    Header,
    HeaderContent,
    HeaderLinkZone,
    HeaderRightZone,
    HeaderBrand,
    HeaderToggler
  ],
  propTablesExclude: [SlimHeaderBasic, ...ComponentsToExclude]
})(SlimHeaderBasic)

HeaderSlim.story = {
  name: 'Header slim'
}

export const HeaderSlimWithFullButton = withInfo({
  text: SlimFullDoc,
  propTables: [
    Header,
    HeaderContent,
    HeaderLinkZone,
    HeaderRightZone,
    HeaderBrand,
    HeaderToggler
  ],
  propTablesExclude: [SlimHeaderFull, ...ComponentsToExclude]
})(SlimHeaderFull)

HeaderSlimWithFullButton.story = {
  name: 'Header slim with full button'
}

export const HeaderCenter = withInfo({
  text: CenterBasicDoc,
  propTables: [
    Header,
    HeaderBrand,
    HeaderContent,
    HeaderSearch,
    HeaderRightZone,
    HeaderSocialsZone
  ],
  propTablesExclude: [CenterHeaderBasic, ...ComponentsToExclude]
})(CenterHeaderBasic)

HeaderCenter.story = {
  name: 'Header center'
}

export const HeaderNav = withInfo({
  text: NavBasicDoc,
  propTables: [Header, HeaderContent, HeaderToggler],
  propTablesExclude: [NavHeaderBasic, ...ComponentsToExclude]
})(NavHeaderBasic)

HeaderNav.story = {
  name: 'Header nav'
}

export const HeaderComplete = withInfo({
  text: CompleteBasicDoc,
  propTables: [Headers, Header],
  propTablesExclude: [
    CompleteHeaderBasic,
    SlimHeader,
    CenterHeader,
    NavHeader,
    ...ComponentsToExclude
  ]
})(CompleteHeaderBasic)
