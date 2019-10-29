import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  extra: PropTypes.string
}

const defaultProps = {
  tag: 'div'
}

const AvatarWrapper = props => {
  const { className, tag: Tag, extra, ...attributes } = props
  const wrapperClass = classNames('avatar-wrapper', className, {
    [`avatar-extra-${extra}`]: extra
  })
  return <Tag {...attributes} className={wrapperClass} />
}

AvatarWrapper.propTypes = propTypes
AvatarWrapper.defaultProps = defaultProps
export default AvatarWrapper
