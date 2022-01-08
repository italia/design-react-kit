import { Story } from '@storybook/react';
import React from 'react';

import { LinkList, LinkListItem, Sidebar, Icon } from '../../src';

import SidebarCollapseExample from './SidebarCollapsibleExample';

export const BasicSidebar: Story = () => (
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

export const _ConIcona: Story = () => (
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

_ConIcona.storyName = 'Con icona';

export const ConLineaADestra: Story = () => (
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

ConLineaADestra.storyName = 'Con linea a destra';

export const ConLineaASinistra: Story = () => (
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

ConLineaASinistra.storyName = 'Con linea a sinistra';

export const _Annidata: Story = SidebarCollapseExample.bind({});

export const SidebarVersioneScura: Story = () => (
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

_Annidata.storyName = 'Sidebar annidata';

SidebarVersioneScura.storyName = 'Sidebar versione scura';
