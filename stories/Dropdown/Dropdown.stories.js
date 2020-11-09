import React from 'react'

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
  title: 'Componenti/Dropdown'
}

export const _Esempi = () => <DropdownExample />

export const _VarianteBottoni = VarianteComponent

export const _Link = () => <DropdownExample tag="span" />
