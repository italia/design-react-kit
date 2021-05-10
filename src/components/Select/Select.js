import React from 'react'
import SelectBase, { components } from 'react-select'
import { Icon } from '../../'
import PropTypes from 'prop-types'

const propTypes = {
  ...SelectBase.propTypes,
  icon: PropTypes.bool,
  clearText: PropTypes.string
}

const defaultProps = {
  ...SelectBase.defaultProps,
  icon: false,
  clearText: 'Cancella'
}

const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon icon="it-arrow-down-triangle" style={{ ariaHidden: true }} />
    </components.DropdownIndicator>
  )
}

const Option = props => {
  return (
    <div className="select-pill text-primary">
      <components.Option {...props} />
    </div>
  )
}

const styles = {
  container: provided => ({ ...provided, height: '2.5rem' }),
  control: provided => ({
    ...provided,
    height: '2.5rem',
    borderRadius: '0',
    borderLeft: 'none',
    borderRight: 'none',
    borderTop: 'none',
    borderBottom: 'solid #435a70 1px',
    boxShadow: 'none',
    '&:hover': { borderBottom: 'solid #435a70 1.25px' } // border style on hover
  }),
  dropdownIndicator: provided => ({
    ...provided,
    fill: '#435a70'
  }),
  option: (provided, { isDisabled, isFocused, isSelected }) => ({
    ...provided,
    background: 'white',
    textDecoration: isFocused || isSelected ? 'underline' : 'none',
    color: isSelected ? '#17324d' : '#06c',
    cursor: isDisabled ? 'not-allowed' : 'pointer'
  }),
  placeholder: provided => ({
    ...provided,
    fill: '#435a70'
  }),
  singleValue: (provided, { isFocused }) => ({
    ...provided,
    color: isFocused ? 'black' : '#435a70',
    fontWeight: 'bold'
  }),
  valueContainer: provided => ({ ...provided, height: '2.5rem' })
}

const Select = props => {
  const CustomClearText = () => (props.clearText ? props.clearText : 'Annulla')

  const ClearIndicator = clearIndicatorProps => {
    const {
      children = <CustomClearText />,
      innerProps: { ref, ...restInnerProps }
    } = clearIndicatorProps
    return (
      <div className="select-pill text-primary" {...restInnerProps} ref={ref}>
        <div style={{ padding: '0px 5px' }}>{children}</div>
      </div>
    )
  }

  let selectComponents = {
    ...props.components,
    Option,
    DropdownIndicator,
    IndicatorSeparator: null
  }

  if (props.isClearable) {
    selectComponents = { ...selectComponents, ClearIndicator }
  }
  return <SelectBase {...props} components={selectComponents} styles={styles} />
}

Select.propTypes = propTypes
Select.defaultProps = defaultProps
export default Select
