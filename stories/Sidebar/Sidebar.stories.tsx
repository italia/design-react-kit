import React from 'react';

// import BasicSidebar from './docs/BasicSidebar.md'
// import ConIcona from './docs/ConIcona.md'
// import ConLineaDestra from './docs/ConLineaDestra.md'
// import ConLineaSinistra from './docs/ConLineaSinistra.md'
// import Annidata from './docs/Annidata.md'
// import ScuraSidebar from './docs/ScuraSidebar.md'

import { LinkList, LinkListItem, Sidebar, Icon } from '../../src';

import SidebarCollapseExample from './SidebarCollapsibleExample';

const BasicSidebarComponent = () => (
  <Sidebar>
    <LinkList>
      <LinkListItem header>HEADER</LinkListItem>
      <LinkListItem size='medium' active>
        <span>Link list active</span>
      </LinkListItem>
      <LinkListItem size='medium' disabled>
        <span>Link list disabled</span>
      </LinkListItem>
      <LinkListItem size='medium'>
        <span>Link list</span>
      </LinkListItem>
      <LinkListItem size='medium'>
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
);

export default {
  title: 'Componenti/Sidebar'
};

export const _BasicSidebar = BasicSidebarComponent;

export const _ConIcona = () => (
  <Sidebar>
    <LinkList>
      <LinkListItem header>HEADER</LinkListItem>
      <LinkListItem size='medium' active className='left-icon'>
        <Icon
          className='left'
          icon='it-chevron-right'
          color=''
          aria-hidden
          size='sm'
        />
        <span>Link list active</span>
      </LinkListItem>
      <LinkListItem size='medium' disabled>
        <Icon
          className='left'
          icon='it-chevron-right'
          color=''
          aria-hidden
          size='sm'
        />
        <span>Link list disabled</span>
      </LinkListItem>
      <LinkListItem size='medium'>
        <Icon
          className='left'
          icon='it-chevron-right'
          color=''
          aria-hidden
          size='sm'
        />
        <span>Link list</span>
      </LinkListItem>
      <LinkListItem size='medium'>
        <Icon
          className='left'
          icon='it-chevron-right'
          color=''
          aria-hidden
          size='sm'
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
);

_ConIcona.story = {
  name: 'Con icona'
};

export const ConLineaADestra = () => (
  <Sidebar right>
    <LinkList>
      <LinkListItem header>HEADER</LinkListItem>
      <LinkListItem size='medium' active>
        <span>Link list active</span>
      </LinkListItem>
      <LinkListItem size='medium' disabled>
        <span>Link list disabled</span>
      </LinkListItem>
      <LinkListItem size='medium'>
        <span>Link list</span>
      </LinkListItem>
      <LinkListItem size='medium'>
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
);

ConLineaADestra.story = {
  name: 'Con linea a destra'
};

export const ConLineaASinistra = () => (
  <Sidebar left>
    <LinkList>
      <LinkListItem header>HEADER</LinkListItem>
      <LinkListItem size='medium' active>
        <span>Link list active</span>
      </LinkListItem>
      <LinkListItem size='medium' disabled>
        <span>Link list disabled</span>
      </LinkListItem>
      <LinkListItem size='medium'>
        <span>Link list</span>
      </LinkListItem>
      <LinkListItem size='medium'>
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
);

ConLineaASinistra.story = {
  name: 'Con linea a sinistra'
};

export const _Annidata = SidebarCollapseExample;

export const SidebarVersioneScura = () => (
  <Sidebar dark>
    <LinkList>
      <LinkListItem header>HEADER</LinkListItem>
      <LinkListItem size='medium' active>
        <span>Link list active</span>
      </LinkListItem>
      <LinkListItem size='medium' disabled>
        <span>Link list disabled</span>
      </LinkListItem>
      <LinkListItem size='medium'>
        <span>Link list</span>
      </LinkListItem>
      <LinkListItem size='medium'>
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
);

_Annidata.story = {
  name: 'Sidebar annidata'
};

SidebarVersioneScura.story = {
  name: 'Sidebar versione scura'
};
