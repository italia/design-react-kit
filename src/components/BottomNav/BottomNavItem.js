import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Icon from '../Icon/Icon'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  active: PropTypes.bool,
  link: PropTypes.string,
  label: PropTypes.string,
  iconName: PropTypes.string,
  srText: PropTypes.string,
  alert: PropTypes.bool,
  badge: PropTypes.bool
}

const defaultProps = {
  tag: 'a',
  link: '#',
  iconName: 'it-comment',
  srText: false
}

const BottomNavItem = ({
  active,
  badge,
  alert,
  link,
  srText,
  iconName,
  label,
  tag: Tag,
  ...attributes
}) => {
  const activeClass = classNames(active ? 'active' : false)
  const badgeWrapper = badge ? (
    <div className="badge-wrapper">
      <span className="bottom-nav-badge">{badge}</span>
    </div>
  ) : (
    false
  )
  const alertWrapper = alert ? (
    <div className="badge-wrapper">
      <span className="bottom-nav-alert" />
    </div>
  ) : (
    false
  )
  return (
    <li {...attributes}>
      <Tag href={link} className={activeClass}>
        {badgeWrapper}
        {alertWrapper}
        <Icon icon={iconName} />
        <span className="bottom-nav-label">
          {label}
          <span className="sr-only">{srText}</span>
        </span>
      </Tag>
    </li>
  )
}

BottomNavItem.propTypes = propTypes
BottomNavItem.defaultProps = defaultProps

export default BottomNavItem
