import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import iconSprite from 'bootstrap-italia/dist/svg/sprite.svg'

const propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'lg', 'xl', '']),
  icon: PropTypes.string.isRequired,
  padding: PropTypes.bool
}

const defaultProps = {
  color: '',
  size: '',
  icon: '',
  padding: false
}

const Icon = ({ color, size, icon, className, padding, ...attributes }) => {
  const classes = classNames('icon', className, {
    [`icon-${color}`]: color,
    [`icon-${size}`]: size,
    'icon-padded': padding
  })
  return (
    <svg className={classes} {...attributes}>
      <use href={`${iconSprite}#${icon}`} />
    </svg>
  )
}

Icon.propTypes = propTypes
Icon.defaultProps = defaultProps

export default Icon
