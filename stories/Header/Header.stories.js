import React from 'react'
import { storiesOf } from '@storybook/react'
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

storiesOf('Componenti/Header', module)
  .addParameters({
    options: {
      showPanel: false
    }
  })
  .add('Introduzione', () => <Introduction />)

storiesOf('Componenti/Header', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add(
    'Header slim',
    withInfo({
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
  )
  .add(
    'Header slim with full button',
    withInfo({
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
  )

storiesOf('Componenti/Header', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add(
    'Header center',
    withInfo({
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
  )

storiesOf('Componenti/Header', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add(
    'Header nav',
    withInfo({
      text: NavBasicDoc,
      propTables: [Header, HeaderContent, HeaderToggler],
      propTablesExclude: [NavHeaderBasic, ...ComponentsToExclude]
    })(NavHeaderBasic)
  )

storiesOf('Componenti/Header', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add(
    'Header Complete',
    withInfo({
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
  )
