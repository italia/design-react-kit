import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  className: PropTypes.string,
  scrollToRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
}

const Forward = ({ className, scrollToRef, ...attributes }) => {
  const classes = classNames(className, 'forward')
  return (
    <a
      className={classes}
      onClick={() =>
        scrollToRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
      {...attributes}
    />
  )
}

Forward.propTypes = propTypes
export default Forward
