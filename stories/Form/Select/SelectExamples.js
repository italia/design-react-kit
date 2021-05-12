import React, { useState } from 'react'
import { boolean } from '@storybook/addon-knobs/react'
import { Select } from '../../../src'

const defaultOptions = [
  { value: 'Value 1', label: 'Lorem ipsum dolor sit amet' },
  { value: 'Value 2', label: 'Duis vestibulum eleifend libero' },
  { value: 'Value 3', label: 'Phasellus pretium orci sed odio tempus' },
  {
    value: 'Value 4',
    label: 'Vestibulum bibendum ex vel augue porttitor sodales'
  },
  { value: 'Value 5', label: 'Praesent quis elementum turpis' }
]

export const groupOneOptions = [
  { value: 'Value 1', label: 'Lorem ipsum dolor sit amet' },
  { value: 'Value 2', label: 'Duis vestibulum eleifend libero' },
  { value: 'Value 3', label: 'Phasellus pretium orci sed odio tempus' }
]

export const groupTwoOptions = [
  {
    value: 'Value 4',
    label: 'Vestibulum bibendum ex vel augue porttitor sodales'
  },
  { value: 'Value 5', label: 'Praesent quis elementum turpis' }
]

export const groupedOptions = [
  {
    label: 'Gruppo 1',
    options: groupOneOptions
  },
  {
    label: 'Gruppo 2',
    options: groupTwoOptions
  }
]

export const SelectExampleClassic = () => {
  const [, setValue] = useState(null)

  const handleChange = selectedOption => setValue(selectedOption)
  return (
    <div className="bootstrap-select-wrapper">
      <label htmlFor="selectExampleClassic">Etichetta di esempio</label>
      <Select
        id="selectExampleClassic"
        onChange={handleChange}
        options={defaultOptions}
        placeholder="Scegli una opzione"
        aria-label="Scegli una opzione"
      />
    </div>
  )
}

export const SelectExampleDisabled = () => {
  const [, setValue] = useState(null)

  const handleChange = selectedOption => setValue(selectedOption)
  return (
    <div className="bootstrap-select-wrapper">
      <label htmlFor="selectExampleDisabled">Etichetta di esempio</label>
      <Select
        id="selectExampleDisabled"
        isDisabled={true}
        onChange={handleChange}
        options={defaultOptions}
        placeholder="Scegli una opzione"
        aria-label="Scegli una opzione"
      />
    </div>
  )
}

export const SelectExampleReset = () => {
  const [, setValue] = useState(null)

  const handleChange = selectedOption => setValue(selectedOption)
  return (
    <div className="bootstrap-select-wrapper">
      <label htmlFor="selectExampleReset">Etichetta di esempio</label>
      <Select
        id="selectExampleReset"
        isClearable={true}
        onChange={handleChange}
        options={defaultOptions}
        placeholder="Scegli una opzione"
        aria-label="Scegli una opzione"
      />
    </div>
  )
}

export const SelectExampleSearch = () => {
  const [, setValue] = useState(null)

  const handleChange = selectedOption => setValue(selectedOption)
  return (
    <div className="bootstrap-select-wrapper">
      <label htmlFor="selectExampleSearch">Etichetta di esempio</label>
      <Select
        id="selectExampleSearch"
        isSearchable={true}
        onChange={handleChange}
        options={defaultOptions}
        placeholder="Scegli una opzione"
        aria-label="Scegli una opzione"
      />
    </div>
  )
}

export const SelectExampleMulti = () => {
  const [, setValue] = useState(null)

  const handleChange = selectedOption => setValue(selectedOption)
  return (
    <div className="bootstrap-select-wrapper">
      <label htmlFor="selectExampleMulti">Etichetta di esempio</label>
      <Select
        id="selectExampleMulti"
        isMulti={true}
        onChange={handleChange}
        options={defaultOptions}
        placeholder="Scegli una opzione"
        aria-label="Scegli una opzione"
      />
    </div>
  )
}

export const SelectExampleGroups = () => {
  const [, setValue] = useState(null)

  const handleChange = selectedOption => setValue(selectedOption)
  return (
    <div className="bootstrap-select-wrapper">
      <label htmlFor="selectExampleGroups">Etichetta di esempio</label>
      <Select
        id="selectExampleGroups"
        onChange={handleChange}
        options={groupedOptions}
        placeholder="Scegli una opzione"
        aria-label="Scegli una opzione"
      />
    </div>
  )
}

export const SelectExampleInteractive = () => {
  const [, setValue] = useState(null)

  const search = boolean('Abilita ricerca', false)
  const multi = boolean('Abilita valori multipli', false)
  const group = boolean('Mostra valori raggruppati', true)
  const disabled = boolean('Disabilita campo', false)
  const reset = boolean('Abilita reset campo', false)

  let options = defaultOptions

  if (group) {
    options = groupedOptions
  }

  const handleChange = selectedOption => setValue(selectedOption)
  return (
    <div className="bootstrap-select-wrapper">
      <label htmlFor="selectExampleInteractive">Etichetta di esempio</label>
      <Select
        id="selectExampleInteractive"
        onChange={handleChange}
        options={options}
        placeholder="Scegli una opzione"
        isDisabled={!!disabled}
        isSearchable={!!search}
        isMulti={!!multi}
        isClearable={!!reset}
        clearText="Cancella selezione"
        aria-label="Scegli una opzione"
      />
    </div>
  )
}
