import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Icon from '../Icon/Icon'

const propTypes = {
  /** Classi addizionali per il componente HeaderSearch */
  className: PropTypes.string,
  /** Etichetta di testo da applicare all'elemento. In caso di stringa vuota non verrà mostrato alcun testo */
  label: PropTypes.string,
  /** Nome dell'icona da utilizzare */
  iconName: PropTypes.string,
  /** Indirizzo di indirizzamento al click dell'icona */
  href: PropTypes.string
}

const defaultProps = {
  iconName: 'it-search'
}

const HeaderSearch = ({ className, label, href, iconName, ...attributes }) => {
  const classes = classNames('it-search-wrapper', className)
  return (
    <div className={classes} {...attributes}>
      {label && <span className="d-none d-md-block">{label}</span>}
      <a className="search-link rounded-icon" aria-label={label} href={href}>
        <Icon icon={iconName} />
      </a>
    </div>
  )
}

HeaderSearch.propTypes = propTypes
HeaderSearch.defaultProps = defaultProps
export default HeaderSearch
