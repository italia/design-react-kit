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

function CookieBar(props) {
  const { className, tag: Tag, ...attributes } = props
  const wrapperClasses = classNames('cookiebar show', className)
  return <Tag {...attributes} className={wrapperClasses} />
}

CookieBar.propTypes = propTypes
CookieBar.defaultProps = defaultProps
export default CookieBar
