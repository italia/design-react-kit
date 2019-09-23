import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

const defaultProps = {
  tag: 'ul'
}

const PagerList = props => {
  const { className, size, tag: Tag, ...attributes } = props

  const listClasses = classNames(className, 'pagination', {
    [`pagination-${size}`]: !!size
  })

  return <Tag {...attributes} className={listClasses} />
}

PagerList.propTypes = propTypes
PagerList.defaultProps = defaultProps

export default PagerList
