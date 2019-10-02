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
  tag: 'div'
}

const Chip = props => {
  const { className, tag: Tag, simple, large, disabled, ...attributes } = props
  const wrapperClasses = classNames(className,
    simple ? 'chip-simple' : false,
    large ? 'chip-lg' : false,
    disabled ? 'chip-disabled' : false,
    'chip'
  )

  //   const classes = classNames(className, sublist ? 'link-sublist' : 'link-list')

  return (
    <Tag className={wrapperClasses} {...attributes} />

  )
}

Chip.propTypes = propTypes
Chip.defaultProps = defaultProps

export default Chip


