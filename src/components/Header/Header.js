import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import HeaderContext, { CENTER, NAVBAR } from './HeaderContext'

const propTypes = {
  /** Classi addizionali per il componente Header */
  className: PropTypes.string,
  // cannot use variables above here or storybook writes the full import stacktrace
  /** Tipo di componente Header: può essere solamente uno di questi tre tipi */
  type: PropTypes.oneOf(['slim', 'center', 'navbar']).isRequired,
  /** Riduce la grandezza del componente Header. Funziona solamente con Header "center". */
  small: PropTypes.bool,
  /** Imposta il tema per il componente Header. Per gli Header di tipo "slim" o "center"
   *  il valore di default è "dark". Per l'Header di tipo "nav" il tema di default è "light"
   *  in mobile, mentre "dark" in versione desktop.
   */
  theme: PropTypes.oneOf(['', 'light', 'dark'])
}

const defaultProps = {
  small: false
}

const Header = ({ className, small, theme, type, ...attributes }) => {
  // use context here as theme
  const classes = classNames(className, {
    [`it-header-${type}-wrapper`]: type,
    'it-small-header': type === CENTER && small,
    [`theme-${theme}`]: type !== NAVBAR && theme,
    'theme-dark-mobile': type === NAVBAR && theme === 'dark',
    'theme-light-desk': type === NAVBAR && theme === 'light'
  })
  return (
    <HeaderContext.Provider value={{ type }}>
      <div className={classes} {...attributes} />
    </HeaderContext.Provider>
  )
}

Header.propTypes = propTypes
Header.defaultProps = defaultProps

export default Header
