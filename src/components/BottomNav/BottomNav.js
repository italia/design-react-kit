import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
}

const defaultProps = {
  tag: 'nav'
}

const BottomNav = props => {
  const { tag: Tag, ...attributes } = props
  const wrapperClasses = classNames('bottom-nav')
  return (
    <Tag className={wrapperClasses}>
      <ul {...attributes} />
    </Tag>
  )
}

BottomNav.propTypes = propTypes
BottomNav.defaultProps = defaultProps

export default BottomNav
