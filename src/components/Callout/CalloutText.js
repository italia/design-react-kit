import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  children: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

const defaultProps = {
  tag: 'p'
}

const CalloutText = ({ children, tag: Tag }) => {
  return <Tag>{children}</Tag>
}

CalloutText.propTypes = propTypes
CalloutText.defaultProps = defaultProps

export default CalloutText
