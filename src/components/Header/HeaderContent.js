import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Navbar } from 'reactstrap'

import HeaderContext, { SLIM, CENTER, NAVBAR } from './HeaderContext'

const propTypes = {
  /** Classi addizionali per il componente HeaderContent */
  className: PropTypes.string,
  /** Da utilizzare per indicare che all'interno dell'Header verrà utilizzato un Megamenu */
  megamenu: PropTypes.bool,
  /** Parametro per il controllo responsive del componente: valori Bootstrap standard sono "sm", "md", "lg", "xl" */
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}

const defaultProps = {}

class HeaderContent extends PureComponent {
  static propTypes = propTypes
  static defaultProps = defaultProps
  static contextType = HeaderContext
  render() {
    const { className, megamenu, ...attributes } = this.props
    const { type } = this.context
    const classes = classNames(className, {
      'it-header-slim-wrapper-content': type === SLIM,
      'it-header-center-content-wrapper': type === CENTER,
      navbar: type === NAVBAR,
      'has-megamenu': megamenu
    })

    const Content =
      type === NAVBAR ? (
        <Navbar className={classes} {...attributes} />
      ) : (
        <div className={classes} {...attributes} />
      )
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">{Content}</div>
        </div>
      </div>
    )
  }
}

export default HeaderContent
