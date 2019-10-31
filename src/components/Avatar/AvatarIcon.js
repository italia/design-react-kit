import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  href: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  color: PropTypes.string,
  size: PropTypes.string
}

const defaultProps = {
  tag: 'div'
}

const AvatarIcon = props => {
  const { className, tag: Tag, size, href, color, ...attributes } = props
  const typeClass = classNames('avatar', {
    [`size-${size}`]: size,
    [`avatar-${color}`]: color
  })
  if (href) {
    return <a href={href} {...attributes} className={typeClass}></a>
  }

  return <Tag {...attributes} className={typeClass} />
}

AvatarIcon.propTypes = propTypes
AvatarIcon.defaultProps = defaultProps
export default AvatarIcon
