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

const AvatarContainer = props => {
  const { className, tag: Tag, ...attributes } = props
  const wrapperClasses = classNames(
    'd-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap',
    className
  )
  return <Tag {...attributes} className={wrapperClasses} />
}
AvatarContainer.propTypes = propTypes
AvatarContainer.defaultProps = defaultProps
export default AvatarContainer
