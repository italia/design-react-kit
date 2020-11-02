import React from 'react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import { Collapse, LinkList, LinkListItem, Icon } from '../../src'

import Navigation from './docs/Navigation.md'
import Collapsible from './docs/Collapsible.md'

import LinkListCollapsibleExample from './LinkListCollapsibleExample'

const NavigationComponent = () => (
  <LinkList>
    <LinkListItem size="medium" className="right-icon">
      <span>Link list 1 </span>
      <i className="it-favorite right" />
      <Icon icon="it-link" color="primary" className="right" />
    </LinkListItem>
    <LinkListItem size="medium" className="right-icon">
      <span>Link list 2 </span>
      <i className="it-favorite right" />
      <Icon icon="it-link" color="primary" className="right" />
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
    <LinkListItem size="medium" className="right-icon">
      <span>Link list 3 </span>
      <i className="it-favorite right" />
      <Icon icon="it-link" color="primary" className="right" />
    </LinkListItem>
  </LinkList>
)

export default {
  title: 'Componenti/LinkList.Nested navigation',
  decorators: [withA11y]
}

export const Fixed = withInfo({
  text: Navigation
})(NavigationComponent)

export const _Collapsible = withInfo({
  text: Collapsible,
  propTables: [Collapse, LinkList, LinkListItem],
  propTablesExclude: [LinkListCollapsibleExample]
})(() => <LinkListCollapsibleExample />)
