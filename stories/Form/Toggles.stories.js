import React from 'react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import { FormText, Toggle } from '../../src'

import TogglesExample from './Toggles/TogglesExample'
import TogglesGroupsExample from './Toggles/TogglesGroupsExample'

import GruppiToggles from './docs/Toggles/GruppiToggles.md'
import Toggles from './docs/Toggles/Toggles.md'
import TogglesDisabilitate from './docs/Toggles/TogglesDisabilitate.md'

export default {
  title: 'Componenti/Form.Toggles',
  decorators: [withA11y]
}

export const _Toggles = withInfo({
  text: Toggles,
  propTables: [Toggle],
  propTablesExclude: [TogglesExample]
})(() => <TogglesExample />)

export const _TogglesDisabilitate = withInfo({
  text: TogglesDisabilitate,
  propTables: [Toggle],
  propTablesExclude: [TogglesExample]
})(() => <TogglesExample disabled />)

export const GruppiDiToggles = withInfo({
  text: GruppiToggles,
  propTables: [Toggle, FormText],
  propTablesExclude: [TogglesGroupsExample]
})(() => <TogglesGroupsExample />)

GruppiDiToggles.story = {
  name: 'Gruppi di Toggles'
}
