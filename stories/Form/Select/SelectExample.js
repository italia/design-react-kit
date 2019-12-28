import React from 'react'
import Select, { components } from 'react-select'
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
  { value: 'Value 1', label: 'Opzione 1' },
  { value: 'Value 2', label: 'Opzione 2' },
  { value: 'Value 3', label: 'Opzione 3' },
  { value: 'Value 4', label: 'Opzione 4' },
  { value: 'Value 5', label: 'Opzione 5' }
]

const multiOptions = [
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
  { value: 'option-1', label: 'Opzione 1' },
  { value: 'option-2', label: 'Opzione 2' }
]

export const groupTwoOptions = [
  { value: 'option-3', label: 'Opzione 3' },
  { value: 'option-4', label: 'Opzione 4' }
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

class SelectExample extends React.Component {
  state = {
    selectedOption: null,
    placeholder: 'Scegli una opzione',
    isDisabled: false,
    isSearchable: false,
    isMulti: false,
    isClearable: false
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption })
  }

  render() {
    const { selectedOption, disabled, search, multi, group, reset } = this.props
    let options = defaultOptions
    if (search) {
      options = multiOptions
    } else if (multi) {
      options = defaultOptions
    } else if (group) {
      options = groupedOptions
    }

    return (
      <div className="bootstrap-select-wrapper">
        <label htmlFor="selectExample">Etichetta di esempio</label>
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
          id="selectExample"
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          placeholder={this.state.placeholder}
          isDisabled={!!disabled}
          isSearchable={!!search}
          isMulti={!!multi}
          isClearable={!!reset}
          aria-label={this.state.placeholder}
          classNamePrefix={'react-select'}
        />
      </div>
    )
  }
}

export default SelectExample

SelectExample.propTypes = {
  selectedOption: PropTypes.string,
  disabled: PropTypes.bool,
  reset: PropTypes.bool,
  search: PropTypes.bool,
  multi: PropTypes.bool,
  group: PropTypes.bool,
  placeholder: PropTypes.string
}
