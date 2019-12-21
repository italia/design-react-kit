import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  /** Aggiunge un ombra per enfatizzare il componente rispetto alla pagina in cui è contenuto */
  shadow: PropTypes.bool,
  sticky: PropTypes.bool,
  /** Classi addizionali per il componente Headers */
  className: PropTypes.string
}

const defaultProps = {
  shadow: false,
  sticky: false
}

const Headers = ({ className, shadow, sticky, ...attributes }) => {
  const classes = classNames(
    'it-header-wrapper',
    {
      'it-shadow': shadow
    },
    {
      'it-header-sticky': sticky
    },
    className
  )
  console.log(classes)
  return <div className={classes} {...attributes}></div>
}

Headers.propTypes = propTypes
Headers.defaultProps = defaultProps
export default Headers
