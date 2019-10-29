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

const AvatarExtraText = props => {
  const { className, tag: Tag, ...attributes } = props
  const wrapperClass = classNames('extra-text', className)
  return <Tag className={wrapperClass} {...attributes} />
}

AvatarExtraText.propTypes = propTypes
AvatarExtraText.defaultProps = defaultProps
export default AvatarExtraText
