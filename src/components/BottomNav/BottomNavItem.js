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

class BottomNavItem extends React.Component {
  render() {
    const { tag: Tag, ...attributes } = this.props
    const activeClass = classNames(this.props.active ? 'active' : false)
    const badgeWrapper = this.props.badge ? (
      <div className="badge-wrapper">
        <span className="bottom-nav-badge">{this.props.badge}</span>
      </div>
    ) : (
      false
    )
    const alertWrapper = this.props.alert ? (
      <div className="badge-wrapper">
        <span className="bottom-nav-alert" />
      </div>
    ) : (
      false
    )
    return (
      <li {...attributes}>
        <Tag href={this.props.link} className={activeClass}>
          {badgeWrapper}
          {alertWrapper}
          <Icon icon={this.props.iconName} />
          <span className="bottom-nav-label">
            {this.props.label}
            <span className="sr-only">{this.props.srText}</span>
          </span>
        </Tag>
      </li>
    )
  }
}

BottomNavItem.propTypes = propTypes
BottomNavItem.defaultProps = defaultProps

export default BottomNavItem
