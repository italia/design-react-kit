import React from 'react'
import PropTypes from 'prop-types'
import { Badge as BadgeReact } from 'reactstrap'

const propTypes = {
  color: PropTypes.string,
  pill: PropTypes.bool,
  tag: PropTypes.string,
  children: PropTypes.node,
  cssModule: PropTypes.object,
  className: PropTypes.string
}

const defaultProps = {
  color: 'secondary',
  pill: false,
  tag: 'span'
}

const Badge = props => {
  const { children } = props
  return <BadgeReact {...props}>{children}</BadgeReact>
}

Badge.propTypes = propTypes
Badge.defaultProps = defaultProps

export default Badge
