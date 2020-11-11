import React from 'react'

import SelectExample from './Select/SelectExample'
import Select from 'react-select'

import SelectEsempi from './docs/Select/Esempi.md'
import SelectDisabled from './docs/Select/Disabled.md'
import SelectReset from './docs/Select/Reset.md'
import SelectSearchable from './docs/Select/Searchable.md'
import SelectMultipla from './docs/Select/Multipla.md'
import SelectGrouped from './docs/Select/Grouped.md'

export default {
  title: 'Componenti/Form/Select'
}

export const SelectClassica = () => <SelectExample />

SelectClassica.story = {
  name: 'Select classica'
}

export const SelectDisabilitata = () => <SelectExample disabled />

SelectDisabilitata.story = {
  name: 'Select disabilitata'
}

export const SelectConReset = () => <SelectExample reset />

SelectConReset.story = {
  name: 'Select con reset'
}

export const SelectConRicerca = () => <SelectExample search />

SelectConRicerca.story = {
  name: 'Select con ricerca'
}

export const _SelectMultipla = () => <SelectExample multi />

export const SelectConGruppi = () => <SelectExample group />

SelectConGruppi.story = {
  name: 'Select con gruppi'
}
