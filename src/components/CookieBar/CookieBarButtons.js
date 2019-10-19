import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const defaultProps = {
  tag: 'div'
}

const CookieBarButtons = props => {
  const { className, tag: Tag, ...attributes } = props
  const buttonClasses = classNames(className, 'cookiebar-buttons')
  return <Tag className={buttonClasses} {...attributes} />
}

CookieBarButtons.propTypes = propTypes
CookieBarButtons.defaultProps = defaultProps

export default CookieBarButtons
