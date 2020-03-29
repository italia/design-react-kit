import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  muted: PropTypes.string,
  color: PropTypes.string,
  neutral: PropTypes.string,
  image: PropTypes.string,
  className: PropTypes.string
}

const Section = props => {
  const {
    muted,
    color,
    neutral,
    image,
    className,

    ...attributes
  } = props
  const { children, ...rest } = attributes

  const classes = classNames('section', className, {
    'section-muted': muted,
    [`section-${color}`]: color,
    'section-neutral': neutral,
    'section-image': image
  })

  const innerClasses = classNames('section-content', className)

  const styleClass = {
    backgroundImageClass: {
      'background-image': [`url(${image})`]
    }
  }

  return (
    <div className={classes} style={styleClass.backgroundImageClass} {...rest}>
      <div className={innerClasses}>{children}</div>
    </div>
  )
}

Section.propTypes = propTypes

export default Section
