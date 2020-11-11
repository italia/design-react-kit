import React from 'react'

import { FormText, Toggle } from '../../src'

import TogglesExample from './Toggles/TogglesExample'
import TogglesGroupsExample from './Toggles/TogglesGroupsExample'

import GruppiToggles from './docs/Toggles/GruppiToggles.md'
import Toggles from './docs/Toggles/Toggles.md'
import TogglesDisabilitate from './docs/Toggles/TogglesDisabilitate.md'

export default {
  title: 'Componenti/Form/Toggles'
}

export const _Toggles = () => <TogglesExample />

export const _TogglesDisabilitate = () => <TogglesExample disabled />

export const GruppiDiToggles = () => <TogglesGroupsExample />

GruppiDiToggles.story = {
  name: 'Gruppi di Toggles'
}
