import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Timeline = props => {
  const { className, ...attributes } = props
  const { children, ...rest } = attributes
  const timelineWrapper = classnames(className, 'it-timeline-wrapper')

  return (
    <div className={timelineWrapper} {...rest}>
      {children}
    </div>
  )
}

Timeline.propTypes = {
  className: PropTypes.string
}

export default Timeline
