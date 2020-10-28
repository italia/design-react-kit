import React from 'react'
import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import BasicSidebar from './docs/BasicSidebar.md'
import ConIcona from './docs/ConIcona.md'
import ConLineaDestra from './docs/ConLineaDestra.md'
import ConLineaSinistra from './docs/ConLineaSinistra.md'
import Annidata from './docs/Annidata.md'
import ScuraSidebar from './docs/ScuraSidebar.md'

import { LinkList, LinkListItem, Sidebar, Icon } from '../../src'

import SidebarCollapseExample from './SidebarCollapsibleExample'

const BasicSidebarComponent = () => (
  <Sidebar>
    <LinkList>
      <LinkListItem header>HEADER</LinkListItem>
      <LinkListItem medium active>
        <span>Link list active</span>
      </LinkListItem>
      <LinkListItem medium disabled>
        <span>Link list disabled</span>
      </LinkListItem>
      <LinkListItem medium>
        <span>Link list</span>
      </LinkListItem>
      <LinkListItem medium>
        <span>Link list</span>
      </LinkListItem>
    </LinkList>
    <Sidebar secondary />
    <LinkList>
      <LinkListItem>
        <span>Secondary item</span>
      </LinkListItem>
      <LinkListItem active>
        <span>Secondary item active</span>
      </LinkListItem>
      <LinkListItem disabled>
        <span>Secondary item disabled</span>
      </LinkListItem>
    </LinkList>
  </Sidebar>
)

storiesOf('Componenti/Sidebar.Basic Sidebar', module)
  .addDecorator(withA11y)
  .add(
    'Basic Sidebar',
    withInfo({
      text: BasicSidebar,
      propTables: [Sidebar],
      propTablesExclude: [LinkList, LinkListItem]
    })(BasicSidebarComponent)
  )

const ConIconaSidebarComponent = () => (
  <Sidebar>
    <LinkList>
      <LinkListItem header>HEADER</LinkListItem>
      <LinkListItem medium active className="left-icon">
        <Icon
          className="left"
          icon="it-chevron-right"
          color=""
          style={{ ariaHidden: true }}
          size="sm"
        />
        <span>Link list active</span>
      </LinkListItem>
      <LinkListItem medium disabled>
        <Icon
          className="left"
          icon="it-chevron-right"
          color=""
          style={{ ariaHidden: true }}
          size="sm"
        />
        <span>Link list disabled</span>
      </LinkListItem>
      <LinkListItem medium>
        <Icon
          className="left"
          icon="it-chevron-right"
          color=""
          style={{ ariaHidden: true }}
          size="sm"
        />
        <span>Link list</span>
      </LinkListItem>
      <LinkListItem medium>
        <Icon
          className="left"
          icon="it-chevron-right"
          color=""
          style={{ ariaHidden: true }}
          size="sm"
        />
        <span>Link list</span>
      </LinkListItem>
    </LinkList>
    <Sidebar secondary />
    <LinkList>
      <LinkListItem>
        <span>Secondary item</span>
      </LinkListItem>
      <LinkListItem active>
        <span>Secondary item active</span>
      </LinkListItem>
      <LinkListItem disabled>
        <span>Secondary item disabled</span>
      </LinkListItem>
    </LinkList>
  </Sidebar>
)

storiesOf('Componenti/Sidebar.Basic Sidebar', module)
  .addDecorator(withA11y)
  .add(
    'Con icona',
    withInfo({
      text: ConIcona,
      propTables: [Sidebar],
      propTablesExclude: [LinkList, LinkListItem]
    })(ConIconaSidebarComponent)
  )

const ConLineaDestraSidebarComponent = () => (
  <Sidebar right>
    <LinkList>
      <LinkListItem header>HEADER</LinkListItem>
      <LinkListItem medium active>
        <span>Link list active</span>
      </LinkListItem>
      <LinkListItem medium disabled>
        <span>Link list disabled</span>
      </LinkListItem>
      <LinkListItem medium>
        <span>Link list</span>
      </LinkListItem>
      <LinkListItem medium>
        <span>Link list</span>
      </LinkListItem>
    </LinkList>
    <Sidebar secondary />
    <LinkList>
      <LinkListItem>
        <span>Secondary item</span>
      </LinkListItem>
      <LinkListItem active>
        <span>Secondary item active</span>
      </LinkListItem>
      <LinkListItem disabled>
        <span>Secondary item disabled</span>
      </LinkListItem>
    </LinkList>
  </Sidebar>
)

storiesOf('Componenti/Sidebar.Basic Sidebar', module)
  .addDecorator(withA11y)
  .add(
    'Con linea a destra',
    withInfo({
      text: ConLineaDestra,
      propTables: [Sidebar],
      propTablesExclude: [LinkList, LinkListItem]
    })(ConLineaDestraSidebarComponent)
  )

const ConLineaSinistraSidebarComponent = () => (
  <Sidebar left>
    <LinkList>
      <LinkListItem header>HEADER</LinkListItem>
      <LinkListItem medium active>
        <span>Link list active</span>
      </LinkListItem>
      <LinkListItem medium disabled>
        <span>Link list disabled</span>
      </LinkListItem>
      <LinkListItem medium>
        <span>Link list</span>
      </LinkListItem>
      <LinkListItem medium>
        <span>Link list</span>
      </LinkListItem>
    </LinkList>
    <Sidebar secondary />
    <LinkList>
      <LinkListItem>
        <span>Secondary item</span>
      </LinkListItem>
      <LinkListItem active>
        <span>Secondary item active</span>
      </LinkListItem>
      <LinkListItem disabled>
        <span>Secondary item disabled</span>
      </LinkListItem>
    </LinkList>
  </Sidebar>
)

storiesOf('Componenti/Sidebar.Basic Sidebar', module)
  .addDecorator(withA11y)
  .add(
    'Con linea a sinistra',
    withInfo({
      text: ConLineaSinistra,
      propTables: [Sidebar],
      propTablesExclude: [LinkList, LinkListItem]
    })(ConLineaSinistraSidebarComponent)
  )
storiesOf('Componenti/Sidebar', module)
  .addDecorator(withA11y)
  .add(
    'Annidata',
    withInfo({
      text: Annidata,
      propTables: [Sidebar],
      propTablesExclude: [LinkList, LinkListItem]
    })(SidebarCollapseExample)
  )

const ScuraSidebarComponent = () => (
  <Sidebar dark>
    <LinkList>
      <LinkListItem header>HEADER</LinkListItem>
      <LinkListItem medium active>
        <span>Link list active</span>
      </LinkListItem>
      <LinkListItem medium disabled>
        <span>Link list disabled</span>
      </LinkListItem>
      <LinkListItem medium>
        <span>Link list</span>
      </LinkListItem>
      <LinkListItem medium>
        <span>Link list</span>
      </LinkListItem>
    </LinkList>
    <Sidebar secondary />
    <LinkList>
      <LinkListItem>
        <span>Secondary item</span>
      </LinkListItem>
      <LinkListItem active>
        <span>Secondary item active</span>
      </LinkListItem>
      <LinkListItem disabled>
        <span>Secondary item disabled</span>
      </LinkListItem>
    </LinkList>
  </Sidebar>
)

storiesOf('Componenti/Sidebar', module)
  .addDecorator(withA11y)
  .add(
    'Sidebar versione scura',
    withInfo({
      text: ScuraSidebar,
      propTables: [Sidebar],
      propTablesExclude: [LinkList, LinkListItem]
    })(ScuraSidebarComponent)
  )
