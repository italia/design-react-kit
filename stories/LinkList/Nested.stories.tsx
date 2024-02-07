import React from 'react';

import { LinkList, LinkListItem, Icon } from '../../src';

import LinkListCollapsibleExample from './LinkListCollapsibleExample';

const NavigationComponent = () => (
  <LinkList>
    <LinkListItem bold large className='icon-right'>
      <LinkListItem.TitleIconWrapper>
        <span>Link list 1 </span>
        <Icon icon='it-link' color='primary' className='right' />
      </LinkListItem.TitleIconWrapper>
    </LinkListItem>
    <LinkListItem bold large className='icon-right'>
      <LinkListItem.TitleIconWrapper>
        <span>Link list 2 </span>
        <Icon icon='it-link' color='primary' className='right' />
      </LinkListItem.TitleIconWrapper>
    </LinkListItem>
    <LinkList sublist>
      <LinkListItem>
        <span>Link list 4 </span>
      </LinkListItem>
      <LinkListItem>
        <span>Link list 5 </span>
      </LinkListItem>
      <LinkListItem>
        <span>Link list 6 </span>
      </LinkListItem>
    </LinkList>
    <LinkListItem bold large className='icon-right'>
      <LinkListItem.TitleIconWrapper>
        <span>Link list 3 </span>
        <Icon icon='it-link' color='primary' className='right' />
      </LinkListItem.TitleIconWrapper>
    </LinkListItem>
  </LinkList>
);

export default {
  title: 'Componenti/LinkList/Nested navigation'
};

export const Fixed = NavigationComponent;

export const _Collapsible = LinkListCollapsibleExample;
