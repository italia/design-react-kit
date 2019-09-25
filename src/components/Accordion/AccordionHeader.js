import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  active: PropTypes.bool,
  onToggle: PropTypes.func
}

const defaultProps = {
  tag: 'button'
}

export default function AccordionHeader(props) {
  const { className, tag: Tag, active, onToggle, ...attributes } = props
  const classes = classNames('collapse-header')
  const toggleClasses = classNames(className, {
    collapsed: active
  })

  return (
    <div className={classes}>
      <Tag
        data-toggle="collapse"
        aria-expanded={active ? 'true' : 'false'}
        className={toggleClasses}
        onClick={onToggle}
        {...attributes}
      />
    </div>
  )
}

AccordionHeader.propTypes = propTypes
AccordionHeader.defaultProps = defaultProps
