import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  /** Classi addizionali per il componente HeaderLinkZone, applicata all'element "nav" annidato */
  className: PropTypes.string
}

const defaultProps = {}

const HeaderLinkZone = ({ className, ...attributes }) => {
  const classes = classNames(className)
  return (
    <div className="nav-mobile">
      <nav className={classes} {...attributes} />
    </div>
  )
}

HeaderLinkZone.propTypes = propTypes
HeaderLinkZone.defaultProps = defaultProps

export default HeaderLinkZone
