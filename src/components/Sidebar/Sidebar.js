import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  secondary: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  dark: PropTypes.bool
}

const defaultProps = {
  tag: 'div'
}

const Sidebar = props => {
  const {
    className,
    tag: Tag,
    secondary,
    left,
    right,
    dark,
    ...attributes
  } = props
  const wrapperClasses = classNames(
    className,
    left ? 'it-line-left-side' : false,
    right ? 'it-line-right-side' : false,
    dark ? 'theme-dark' : false,
    'sidebar-wrapper'
  )

  const wrapperClassesLinkList = classNames(
    secondary ? 'linklist-secondary' : false,
    'sidebar-linklist-wrapper'
  )
  if (secondary) {
    return <Tag {...attributes} className={wrapperClassesLinkList} />
  }
  return (
    <Tag className={wrapperClasses}>
      <Tag {...attributes} className={wrapperClassesLinkList} />
    </Tag>
  )
}

Sidebar.propTypes = propTypes
Sidebar.defaultProps = defaultProps

export default Sidebar
