import { Story } from '@storybook/react';
import React from 'react';

import { LinkList, LinkListItem, Sidebar, Icon } from '../../src';

import SidebarCollapseExample from './SidebarCollapsibleExample';

export const BasicSidebar: Story = () => (
  <Sidebar>
    <LinkList>
      <LinkListItem header>HEADER</LinkListItem>
      <LinkListItem bold active>
        <span>Link list active</span>
      </LinkListItem>
      <LinkListItem bold disabled>
        <span>Link list disabled</span>
      </LinkListItem>
      <LinkListItem bold>
        <span>Link list</span>
      </LinkListItem>
      <LinkListItem bold>
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
      <LinkListItem bold active className='left-icon'>
        <LinkListItem.TitleIconWrapper>
          <Icon icon='it-star-outline' color='primary' aria-hidden size='sm' />
          <span>Link list active</span>
        </LinkListItem.TitleIconWrapper>
      </LinkListItem>
      <LinkListItem bold disabled className='left-icon'>
        <LinkListItem.TitleIconWrapper>
          <Icon icon='it-star-outline' color='primary' aria-hidden size='sm' />
          <span>Link list disabled</span>
        </LinkListItem.TitleIconWrapper>
      </LinkListItem>
      <LinkListItem bold className='left-icon'>
        <LinkListItem.TitleIconWrapper>
          <Icon icon='it-star-outline' color='primary' aria-hidden size='sm' />
          <span>Link list</span>
        </LinkListItem.TitleIconWrapper>
      </LinkListItem>
      <LinkListItem bold className='left-icon'>
        <LinkListItem.TitleIconWrapper>
          <Icon icon='it-star-outline' color='primary' aria-hidden size='sm' />
          <span>Link list</span>
        </LinkListItem.TitleIconWrapper>
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
      <LinkListItem bold active>
        <span>Link list active</span>
      </LinkListItem>
      <LinkListItem bold disabled>
        <span>Link list disabled</span>
      </LinkListItem>
      <LinkListItem bold>
        <span>Link list</span>
      </LinkListItem>
      <LinkListItem bold>
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
      <LinkListItem bold active>
        <span>Link list active</span>
      </LinkListItem>
      <LinkListItem bold disabled>
        <span>Link list disabled</span>
      </LinkListItem>
      <LinkListItem bold>
        <span>Link list</span>
      </LinkListItem>
      <LinkListItem bold>
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
      <LinkListItem bold active>
        <span>Link list active</span>
      </LinkListItem>
      <LinkListItem bold disabled>
        <span>Link list disabled</span>
      </LinkListItem>
      <LinkListItem bold>
        <span>Link list</span>
      </LinkListItem>
      <LinkListItem bold>
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
