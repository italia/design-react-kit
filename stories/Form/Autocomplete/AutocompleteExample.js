import React from 'react'
import { components } from 'react-select'
import AsyncSelect from 'react-select/async'
import './assets/css/autocomplete-styles.css'
import PropTypes from 'prop-types'

const propTypes = {
  isHidden: PropTypes.bool
}

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <span style={{ padding: '0px 5px' }} aria-hidden="true">
        <svg className="icon icon-sm">
          <use xlinkHref="/svg/sprite.svg#it-search" />
        </svg>
      </span>
    </components.DropdownIndicator>
  )
}

const Input = props => {
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

const filterOptions = inputValue => {
  return multiOptions.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  )
}

const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filterOptions(inputValue))
  }, 1000)
}

export default class AutocompleteExample extends React.Component {
  state = { inputValue: '', placeholder: 'Testo da cercare' }

  handleInputChange = newValue => {
    const inputValue = newValue.replace(/\W/g, '')
    this.setState({ inputValue })
    return inputValue
  }

  render() {
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
          loadOptions={loadOptions}
          defaultOptions
          placeholder={this.state.placeholder}
          onInputChange={this.handleInputChange}
          classNamePrefix={'react-autocomplete'}
        />
        <label htmlFor="autocomplete-regioni" className="sr-only">
          Cerca nel sito
        </label>
      </div>
    )
  }
}

Input.propTypes = propTypes
