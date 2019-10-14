import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Button as ButtonBase } from 'reactstrap'

const propTypes = {
  ...ButtonBase.propTypes,
  icon: PropTypes.bool
}

const defaultProps = {
  ...ButtonBase.defaultProps,
  icon: false
}

const Button = ({ icon, className, ...attributes }) => {
  const classes = classNames(className, {
    'btn-icon': icon
  })
  return <ButtonBase className={classes} {...attributes} />
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps
export default Button
