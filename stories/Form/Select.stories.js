import React from 'react'
import { withA11y } from '@storybook/addon-a11y'
import { withInfo } from '@storybook/addon-info'

import SelectExample from './Select/SelectExample'
import Select from 'react-select'

import SelectEsempi from './docs/Select/Esempi.md'
import SelectDisabled from './docs/Select/Disabled.md'
import SelectReset from './docs/Select/Reset.md'
import SelectSearchable from './docs/Select/Searchable.md'
import SelectMultipla from './docs/Select/Multipla.md'
import SelectGrouped from './docs/Select/Grouped.md'

export default {
  title: 'Componenti/Form.Select',
  decorators: [withA11y]
}

export const SelectClassica = withInfo({
  text: SelectEsempi,
  propTables: [Select],
  propTablesExclude: [SelectExample]
})(() => <SelectExample />)

SelectClassica.story = {
  name: 'Select classica'
}

export const SelectDisabilitata = withInfo({
  text: SelectDisabled,
  propTables: [Select],
  propTablesExclude: [SelectExample]
})(() => <SelectExample disabled />)

SelectDisabilitata.story = {
  name: 'Select disabilitata'
}

export const SelectConReset = withInfo({
  text: SelectReset,
  propTables: [Select],
  propTablesExclude: [SelectExample]
})(() => <SelectExample reset />)

SelectConReset.story = {
  name: 'Select con reset'
}

export const SelectConRicerca = withInfo({
  text: SelectSearchable,
  propTables: [Select],
  propTablesExclude: [SelectExample]
})(() => <SelectExample search />)

SelectConRicerca.story = {
  name: 'Select con ricerca'
}

export const _SelectMultipla = withInfo({
  text: SelectMultipla,
  propTables: [Select],
  propTablesExclude: [SelectExample]
})(() => <SelectExample multi />)

export const SelectConGruppi = withInfo({
  text: SelectGrouped,
  propTables: [Select],
  propTablesExclude: [SelectExample]
})(() => <SelectExample group />)

SelectConGruppi.story = {
  name: 'Select con gruppi'
}
