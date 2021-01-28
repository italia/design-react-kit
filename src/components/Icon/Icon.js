import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import * as Svgs from './assets'

const kebabCase = string =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase()

// Icons are stored with names in PascalCase, but icon names are in kebab-case
// Here's the remap of the icons from PascalCase to kebab-case
const icons = Object.keys(Svgs).reduce((memo, pascalName) => {
  memo[kebabCase(pascalName)] = Svgs[pascalName]
  return memo
}, {})

export const iconsList = Object.keys(icons)

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

const EmptyIcon = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
  </svg>
)

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

  if (!icons[icon]) {
    console.error(
      `Icon "${icon}" not found. Check on https://rb.gy/lcdkyi for the full icon list.`
    )
    return <EmptyIcon className={classes} {...attributes} />
  }

  const IconComponent = icons[icon]
  return <IconComponent className={classes} {...attributes} />
}

Icon.propTypes = propTypes
Icon.defaultProps = defaultProps

export default Icon
