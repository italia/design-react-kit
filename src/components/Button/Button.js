import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Button as ButtonBase } from 'reactstrap'

const propTypes = {
  //* Taken from reactstrap to propagate them on the table */
  active: PropTypes.bool,
  'aria-label': PropTypes.string,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,

  tag: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    // remove it for now as the rendering on the table is more confusing than helpful
    // PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string
        // remove it for now as the rendering on the table is more confusing than helpful
        // PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func })
      ])
    )
  ]),

  // ref will only get you a reference to the Button component, use innerRef to get a reference to the DOM element (for things like focus management).
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string
  ]),

  onClick: PropTypes.func,
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,

  // use close prop for BS4 close icon utility
  close: PropTypes.bool,
  icon: PropTypes.bool
}

const defaultProps = {
  tag: 'button',
  icon: false,
  // reactstrap uses "secondary" as default, but on BI there's no color at all
  color: ''
}

const Button = ({ icon, className, ...attributes }) => {
  const classes = classNames(className, {
    'btn-icon': icon
  })

  const ariaAttributes = {
    ...(attributes.disabled && { 'aria-disabled': true })
  }

  return <ButtonBase className={classes} {...attributes} {...ariaAttributes} />
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps
export default Button
