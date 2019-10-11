import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import HeaderContext, { SLIM } from './HeaderContext'

const propTypes = {
  /** Classi addizionali per il componente HeaderRightZone */
  className: PropTypes.string
}

const defaultProps = {}

class HeaderRightZone extends PureComponent {
  static propTypes = propTypes
  static defaultProps = defaultProps
  static contextType = HeaderContext

  render() {
    const { className, ...attributes } = this.props
    const { type } = this.context
    const classes = classNames(className, {
      // BI >= 1.3.6
      'it-header-slim-right-zone': type === SLIM,
      // BI < 1.3.6
      'header-slim-right-zone': type === SLIM,
      'it-right-zone': type !== SLIM
    })
    return <div className={classes} {...attributes} />
  }
}

export default HeaderRightZone
