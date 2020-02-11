import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const propTypes = {
  children: PropTypes.node
}

const TimelineWrapper = ({ children, ...rest }) => {
  const timelineWrapper = classnames('it-timeline-wrapper')

  return (
    <div className={timelineWrapper} {...rest}>
      {children}
    </div>
  )
}

TimelineWrapper.propTypes = propTypes

export default TimelineWrapper
