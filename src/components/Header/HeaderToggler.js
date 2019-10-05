import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { NavbarToggler } from 'reactstrap'

import HeaderContext, { SLIM, NAVBAR } from './HeaderContext'

const propTypes = {
  /** Tipo di elemento DOM da utilizzare: di default "a" per Header Slim, "button" per altri tipi di Header.
   * Se fornito questo sovrascriverà il valore di default.
   */
  tag: PropTypes.string,
  /** Indica l'attributo "type" sull'elemento DOM. Di default '' per Header Slim, "button" per altri tipi di Header.
   * Se fornito questo sovrascriverà il valore di default.
   */
  type: PropTypes.string,
  /** Classi addizionali per il componente HeaderToggler */
  className: PropTypes.string
}

const defaultProps = {}

export default class HeaderToggler extends PureComponent {
  static propTypes = propTypes
  static defaultProps = defaultProps
  static contextType = HeaderContext
  render() {
    const { className, tag, type, ...attributes } = this.props
    const { type: HeaderType } = this.context
    const BUTTON = 'button'
    const defaultTag = HeaderType === SLIM ? 'a' : BUTTON
    const defaultType = HeaderType === SLIM ? '' : BUTTON
    const classes = classNames(
      {
        'it-opener d-lg-none': HeaderType === SLIM,
        'custom-navbar-toggler': HeaderType === NAVBAR
      },
      className
    )
    return (
      <NavbarToggler
        className={classes}
        {...attributes}
        tag={tag || defaultTag}
        type={type || defaultType}
        href="#"
      />
    )
  }
}
