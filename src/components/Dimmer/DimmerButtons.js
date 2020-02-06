import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  color: PropTypes.string,
  dark: PropTypes.string,
  single: PropTypes.string,
  className: PropTypes.string
}

const defaultProps = {
  single: false,
  dark: false
}

const DimmerButtons = props => {
  const { color, dark, className, single, ...attributes } = props
  const { children, ...rest } = attributes
  const classes = classNames('dimmer-buttons', className, {
    'single-button': single,
    'bg-dark': dark
  })

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

DimmerButtons.propTypes = propTypes
DimmerButtons.defaultProps = defaultProps

export default DimmerButtons
