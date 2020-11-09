import React from 'react'

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

export default {
  title: 'Componenti/Sidebar'
}

export const _BasicSidebar = BasicSidebarComponent

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

export const _ConIcona = ConIconaSidebarComponent

_ConIcona.story = {
  name: 'Con icona'
}

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

export const ConLineaADestra = ConLineaDestraSidebarComponent

ConLineaADestra.story = {
  name: 'Con linea a destra'
}

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

export const ConLineaASinistra = ConLineaSinistraSidebarComponent

ConLineaASinistra.story = {
  name: 'Con linea a sinistra'
}

export const _Annidata = SidebarCollapseExample

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

_Annidata.story = {
  name: 'Sidebar annidata'
}

export const SidebarVersioneScura = ScuraSidebarComponent

SidebarVersioneScura.story = {
  name: 'Sidebar versione scura'
}
