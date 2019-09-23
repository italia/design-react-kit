import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  'aria-label': PropTypes.string
}

const defaultProps = {
  tag: 'nav',
  'aria-label': 'pagination'
}

const Pager = props => {
  const { children, className, tag: Tag, 'aria-label': label } = props

  const classes = classNames(className, 'pagination-wrapper')

  return (
    <Tag className={classes} aria-label={label}>
      {children}
    </Tag>
  )
}

Pager.propTypes = propTypes
Pager.defaultProps = defaultProps

export default Pager
