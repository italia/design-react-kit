import React from 'react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  LinkList,
  LinkListItem
} from '../../src'

import DropdownExample from './DropdownExample'
import DropdownButtonExample from './DropdownButtonExample'

import Esempi from './docs/Esempi.md'
import VarianteBottoni from './docs/VarianteBottoni.md'
import Link from './docs/Link.md'

const VarianteComponent = () => (
  <section>
    <DropdownButtonExample color="primary" />
    <DropdownButtonExample color="secondary" />
    <DropdownButtonExample color="danger" />
  </section>
)

export default {
  title: 'Componenti/Dropdown',
  decorators: [withA11y]
}

export const _Esempi = withInfo({
  text: Esempi,
  propTables: [
    Dropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    LinkList,
    LinkListItem
  ],
  propTablesExclude: [DropdownExample]
})(() => <DropdownExample />)

export const _VarianteBottoni = withInfo({
  text: VarianteBottoni,
  propTables: [
    Dropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    LinkList,
    LinkListItem
  ],
  propTablesExclude: [DropdownButtonExample]
})(VarianteComponent)

export const _Link = withInfo({
  text: Link,
  propTables: [
    Dropdown,
    DropdownMenu,
    DropdownItem,
    DropdownToggle,
    LinkList,
    LinkListItem
  ],
  propTablesExclude: [DropdownExample]
})(() => <DropdownExample tag="span" />)
