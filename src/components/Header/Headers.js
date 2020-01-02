import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Sticky, StickyProvider } from 'react-stickup'

const propTypes = {
  /** Aggiunge un ombra per enfatizzare il componente rispetto alla pagina in cui è contenuto */
  shadow: PropTypes.bool,
  /** Aggiunge il comportamento "sticky" ai componenti Header contenuti */
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
      'it-shadow': shadow,
      'it-header-sticky': sticky
    },
    className
  )
  if (!sticky) {
    return <div className={classes} {...attributes}></div>
  }
  return (
    <StickyProvider>
      <Sticky style={{ position: 'sticky', zIndex: 2 }}>
        <div className={classes} {...attributes}></div>
      </Sticky>
    </StickyProvider>
  )
}

Headers.propTypes = propTypes
Headers.defaultProps = defaultProps
export default Headers
