import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  infoText: PropTypes.string,
  wrapperClass: PropTypes.string,
  activeClass: PropTypes.string,
  infoTextClass: PropTypes.string,
  children: PropTypes.node
}
const defaultProps = {}

const InputContainer = ({
  id,
  activeClass,
  label,
  infoTextClass,
  infoText,
  wrapperClass,
  children
}) => {
  return (
    <div className={wrapperClass}>
      {children}
      <label htmlFor={id} className={activeClass}>
        {label}
      </label>
      <small className={infoTextClass}>{infoText}</small>
    </div>
  )
}

InputContainer.propTypes = propTypes
InputContainer.defaultProps = defaultProps

export default InputContainer
