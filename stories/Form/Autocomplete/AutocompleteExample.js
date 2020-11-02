import React, { useState } from 'react'
import { components } from 'react-select'
import AsyncSelect from 'react-select/async'
import './assets/css/autocomplete-styles.css'
import { Icon } from '../../../src'

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <span style={{ padding: '0px 5px' }} aria-hidden="true">
        <Icon icon="it-search" style={{ ariaHidden: true }} size="sm" />
      </span>
    </components.DropdownIndicator>
  )
}

const Input = props => {
  // eslint-disable-next-line react/prop-types
  if (props.isHidden) {
    return <components.Input {...props} />
  }
  return (
    <div style={{ border: `1px dotted blue}` }}>
      <components.Input {...props} />
    </div>
  )
}

const multiOptions = [
  { value: '1', label: 'Abruzzo' },
  { value: '2', label: 'Basilicata' },
  { value: '3', label: 'Calabria' },
  { value: '4', label: 'Campania' },
  { value: '5', label: 'Emilia Romagna' },
  { value: '6', label: 'Friuli Venezia Giulia' },
  { value: '7', label: 'Lazio' },
  { value: '8', label: 'Liguria' },
  { value: '9', label: 'Lombardia' },
  { value: '10', label: 'Marche' },
  { value: '11', label: 'Molise' },
  { value: '12', label: 'Piemonte' },
  { value: '13', label: 'Puglia' },
  { value: '14', label: 'Sardegna' },
  { value: '15', label: 'Sicilia' },
  { value: '16', label: 'Toscana' },
  { value: '17', label: 'Trentino Alto Adige' },
  { value: '18', label: 'Umbria' },
  { value: '19', label: "Valle d'Aosta" },
  { value: '20', label: 'Veneto' }
]

const AutocompleteExample = () => {
  // "value" is used to show or propagate it externally
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState('')

  const handleInputChange = newValue => {
    const inputValue = newValue.replace(/\W/g, '')
    setValue(inputValue)
    return inputValue
  }

  return (
    <div className="form-group">
      <AsyncSelect
        id="autocomplete-regioni"
        components={{
          DropdownIndicator,
          Input,
          IndicatorSeparator: null
        }}
        cacheOptions
        loadOptions={(inputValue, callback) => {
          setTimeout(() => {
            callback(
              multiOptions.filter(i =>
                i.label.toLowerCase().includes(inputValue.toLowerCase())
              )
            )
          }, 1000)
        }}
        defaultOptions
        placeholder="Testo da cercare"
        onInputChange={handleInputChange}
        classNamePrefix="react-autocomplete"
      />
      <label htmlFor="autocomplete-regioni" className="sr-only">
        Cerca nel sito
      </label>
    </div>
  )
}

export default AutocompleteExample
