import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Button as ButtonBase } from 'reactstrap'

const propTypes = {
  ...ButtonBase.propTypes,
  icon: PropTypes.bool,
  stepperClass: PropTypes.string
}

const defaultProps = {
  ...ButtonBase.defaultProps,
  icon: false
}

const Button = ({ icon, className, stepperClass, ...attributes }) => {
  const classes = classNames(
    className,
    {
      'btn-icon': icon
    },
    stepperClass
  )
  return <ButtonBase className={classes} {...attributes} />
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps
export default Button
