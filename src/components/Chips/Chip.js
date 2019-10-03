import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  simple: PropTypes.bool,
  large: PropTypes.bool,
  disabled: PropTypes.bool
}

const defaultProps = {
  tag: 'div',
  simple: false,
  large: false,
  disabled: false
}

const Chip = props => {
  const { className, tag: Tag, simple, large, disabled, ...attributes } = props
  const wrapperClasses = classNames(
    className,
    simple ? 'chip-simple' : false,
    large ? 'chip-lg' : false,
    disabled ? 'chip-disabled' : false,
    'chip'
  )

  return <Tag className={wrapperClasses} {...attributes} />
}

Chip.propTypes = propTypes
Chip.defaultProps = defaultProps

export default Chip
