import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  wrapperClassName: PropTypes.string
}

const defaultProps = {
  tag: 'ul'
}

const AvatarGroupContainer = props => {
  const { className, tag: Tag, wrapperClassName, ...attributes } = props
  const wrapperClasses = classNames('avatar-group-stacked', wrapperClassName)
  return <Tag {...attributes} className={wrapperClasses}></Tag>
}

AvatarGroupContainer.propTypes = propTypes
AvatarGroupContainer.defaultProps = defaultProps
export default AvatarGroupContainer
