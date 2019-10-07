import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  sublist: PropTypes.string,
  highlight: PropTypes.bool
}

const defaultProps = {
  tag: 'div'
}

const Callout = props => {
  const { className, tag: Tag, highlight, sublist  } = props
  const wrapperClasses = classNames(
    sublist =  'important',
    'callout',
    highlight ? 'callout-highlight' : false
  )
  const classes = classNames(className, 'callout-title')

  return (
    <Tag className={wrapperClasses}>
      <div  className={classes}></div>
    </Tag>
  )
}
Callout.propTypes = propTypes
Callout.defaultProps = defaultProps

export default Callout
