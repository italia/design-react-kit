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
  const Classes = classNames('chip', className, {
    'chip-simple': simple,
    'chip-lg': large,
    'chip-disabled': disabled
  })

  return <Tag className={Classes} {...attributes} />
}

Chip.propTypes = propTypes
Chip.defaultProps = defaultProps

export default Chip
