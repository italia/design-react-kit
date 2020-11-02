import React, { useState } from 'react'
import Select, { components } from 'react-select'
import { boolean } from '@storybook/addon-knobs/react'
import { Icon } from '../../../src'
import PropTypes from 'prop-types'
import './assets/css/select-styles.css'

const SelectContainer = ({ children, ...props }) => {
  return (
    <div>
      <components.SelectContainer {...props}>
        {children}
      </components.SelectContainer>
    </div>
  )
}

SelectContainer.propTypes = {
  children: PropTypes.node
}

const Option = props => {
  return (
    <div className="select-pill text-primary">
      <components.Option {...props} />
    </div>
  )
}
const MenuList = ({ children, ...props }) => {
  return (
    <div>
      <components.MenuList {...props}>{children}</components.MenuList>
    </div>
  )
}

MenuList.propTypes = {
  children: PropTypes.node
}

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon icon="it-arrow-down-triangle" style={{ ariaHidden: true }} />
    </components.DropdownIndicator>
  )
}

const GroupHeading = props => (
  <div>
    <components.GroupHeading {...props} />
  </div>
)

const CustomClearText = () => 'Annulla'

const ClearIndicator = props => {
  const {
    children = <CustomClearText />,
    innerProps: { ref, ...restInnerProps }
  } = props
  return (
    <div className="select-pill text-primary" {...restInnerProps} ref={ref}>
      <div style={{ padding: '0px 5px' }}>{children}</div>
    </div>
  )
}

ClearIndicator.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object
}

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
        components={{
          Option,
          DropdownIndicator,
          IndicatorSeparator: null
        }}
        id="selectExampleClassic"
        onChange={handleChange}
        options={defaultOptions}
        placeholder="Scegli una opzione"
        aria-label="Scegli una opzione"
        classNamePrefix="react-select"
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
        components={{
          Option,
          DropdownIndicator,
          IndicatorSeparator: null
        }}
        id="selectExampleDisabled"
        isDisabled={true}
        onChange={handleChange}
        options={defaultOptions}
        placeholder="Scegli una opzione"
        aria-label="Scegli una opzione"
        classNamePrefix="react-select"
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
        components={{
          Option,
          DropdownIndicator,
          ClearIndicator,
          IndicatorSeparator: null
        }}
        id="selectExampleReset"
        isClearable={true}
        onChange={handleChange}
        options={defaultOptions}
        placeholder="Scegli una opzione"
        aria-label="Scegli una opzione"
        classNamePrefix="react-select"
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
        components={{
          Option,
          DropdownIndicator,
          IndicatorSeparator: null
        }}
        id="selectExampleSearch"
        isSearchable={true}
        onChange={handleChange}
        options={defaultOptions}
        placeholder="Scegli una opzione"
        aria-label="Scegli una opzione"
        classNamePrefix="react-select"
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
        components={{
          MenuList,
          Option,
          SelectContainer,
          DropdownIndicator,
          IndicatorSeparator: null
        }}
        id="selectExampleMulti"
        isMulti={true}
        onChange={handleChange}
        options={defaultOptions}
        placeholder="Scegli una opzione"
        aria-label="Scegli una opzione"
        classNamePrefix="react-select"
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
        components={{
          MenuList,
          Option,
          DropdownIndicator,
          GroupHeading,
          IndicatorSeparator: null
        }}
        id="selectExampleGroups"
        onChange={handleChange}
        options={groupedOptions}
        placeholder="Scegli una opzione"
        aria-label="Scegli una opzione"
        classNamePrefix="react-select"
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
        components={{
          MenuList,
          Option,
          SelectContainer,
          DropdownIndicator,
          ClearIndicator,
          GroupHeading,
          IndicatorSeparator: null
        }}
        id="selectExampleInteractive"
        onChange={handleChange}
        options={options}
        placeholder="Scegli una opzione"
        isDisabled={!!disabled}
        isSearchable={!!search}
        isMulti={!!multi}
        isClearable={!!reset}
        aria-label="Scegli una opzione"
        classNamePrefix={'react-select'}
      />
    </div>
  )
}
