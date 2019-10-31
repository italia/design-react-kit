import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  presence: PropTypes.string
}

const defaultProps = {
  tag: 'div'
}

const AvatarPresence = props => {
  const { className, tag: Tag, presence, ...attributes } = props
  const typeClass = classNames('avatar-presence', {
    [`${presence}`]: presence
  })
  return <Tag {...attributes} className={typeClass} />
}

AvatarPresence.propTypes = propTypes
AvatarPresence.defaultProps = defaultProps
export default AvatarPresence
