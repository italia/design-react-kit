import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// SSR does have no access to the Element global variable, so mock it
if (typeof window === 'undefined') {
  global.Element = typeof Element === 'undefined' ? function() {} : Element
}

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
