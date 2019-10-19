import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const defaultProps = {
  tag: 'button'
}

class CookieBarButton extends React.Component {
  render() {
    const { tag: Tag, className, ...attributes } = this.props
    const activeClass = classNames(className, 'cookiebar-btn')
    return <Tag href className={activeClass} {...attributes} />
  }
}

CookieBarButton.propTypes = propTypes
CookieBarButton.defaultProps = defaultProps

export default CookieBarButton
