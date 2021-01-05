import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import * as Svgs from './assets'

const kebabCase = string =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase()

const icons = Object.keys(Svgs).reduce((memo, pascalName) => {
  memo[kebabCase(pascalName)] = Svgs[pascalName]
  return memo
}, {})

const propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  padding: PropTypes.bool
}

const defaultProps = {
  color: '',
  size: '',
  icon: '',
  padding: false
}

const EmptyIcon = props => <svg {...props}></svg>

const Icon = ({ color, size, icon, className, padding, ...attributes }) => {
  const classes = classNames(
    'icon',
    className,
    {
      [`icon-${color}`]: color,
      [`icon-${size}`]: size,
      'icon-padded': padding
    },
    size
  )

  const IconComponent = icons[icon] || EmptyIcon
  return <IconComponent className={classes} {...attributes} />
}

Icon.propTypes = propTypes
Icon.defaultProps = defaultProps

export default Icon
