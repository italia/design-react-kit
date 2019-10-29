import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  status: PropTypes.string
}

const defaultProps = {
  tag: 'div'
}

const AvatarStatus = props => {
  const { className, tag: Tag, status, ...attributes } = props
  const typeClass = classNames('avatar-status', {
    [`${status}`]: status
  })
  return <Tag {...attributes} className={typeClass} />
}

AvatarStatus.propTypes = propTypes
AvatarStatus.defaultProps = defaultProps
export default AvatarStatus
