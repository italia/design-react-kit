import React from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs/react'

import { Navbar, NavbarToggler } from '../../src'

import SlimHeaderBasic from './SlimHeader/basic'
import SlimHeaderLight from './SlimHeader/light'
import CenterHeaderBasic from './CenterHeader/basic'
import CenterHeaderSmall from './CenterHeader/small'
import CenterHeaderLight from './CenterHeader/light'
import NavHeaderBasic from './NavHeader/basic'
import NavHeaderLight from './NavHeader/light-desktop'
import NavHeaderDark from './NavHeader/dark-mobile'
import CompleteHeaderBasic from './CompleteHeader/basic'
import CompleteHeaderLight from './CompleteHeader/light'

import Introduction from './Introduction'

import Esempi from './docs/Esempi.md'

storiesOf('Componenti/Header', module)
  .addParameters({
    options: {
      showAddonPanel: false
    }
  })
  .add('Introduzione', () => <Introduction />)

storiesOf('Componenti/Header.Slim', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  // .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add(
    'Header slim', withInfo({
      text: Esempi,
      propTables: [Navbar, NavbarToggler],
      propTablesExclude: [SlimHeaderBasic]
    })(() => <SlimHeaderBasic />))
    .add(
      'Header slim - light theme', withInfo({
        text: Esempi,
        propTables: [Navbar, NavbarToggler],
        propTablesExclude: [SlimHeaderLight]
      })(() => <SlimHeaderLight />))


storiesOf('Componenti/Header.Center', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  // .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add(
    'Header center', withInfo({
      text: Esempi,
      propTables: [Navbar, NavbarToggler],
      propTablesExclude: [CenterHeaderBasic]
    })(() => <CenterHeaderBasic />))
  .add(
    'Header center - small', withInfo({
      text: Esempi,
      propTables: [Navbar, NavbarToggler],
      propTablesExclude: [CenterHeaderSmall]
    })(() => <CenterHeaderSmall />))
    .add(
      'Header center - light theme', withInfo({
        text: Esempi,
        propTables: [Navbar, NavbarToggler],
        propTablesExclude: [CenterHeaderLight]
      })(() => <CenterHeaderLight />))

storiesOf('Componenti/Header.Nav', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  // .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add(
    'Header nav', withInfo({
      text: Esempi,
      propTables: [Navbar, NavbarToggler],
      propTablesExclude: [NavHeaderBasic]
    })(() => <NavHeaderBasic />))
  .add(
    'Header nav - light desktop theme', withInfo({
      text: Esempi,
      propTables: [Navbar, NavbarToggler],
      propTablesExclude: [NavHeaderLight]
    })(() => <NavHeaderLight />))
  .add(
    'Header nav - dark mobile theme', withInfo({
      text: Esempi,
      propTables: [Navbar, NavbarToggler],
      propTablesExclude: [NavHeaderDark]
    })(() => <NavHeaderDark />))

storiesOf('Componenti/Header.Complete', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  // .addParameters({ viewport: { defaultViewport: "iphone6" } })
  .add(
    'Header Complete', withInfo({
      text: Esempi,
      propTables: [Navbar, NavbarToggler],
      propTablesExclude: [CompleteHeaderBasic]
    })(() => <CompleteHeaderBasic />))
    .add(
      'Header Complete - light theme', withInfo({
        text: Esempi,
        propTables: [Navbar, NavbarToggler],
        propTablesExclude: [CompleteHeaderLight]
      })(() => <CompleteHeaderLight />))
