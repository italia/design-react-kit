import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import resizer from 'bootstrap-italia/dist/assets/resizer-3x2.svg'

const propTypes = {
  active: PropTypes.bool,
  targetUrl: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  actionDescription: PropTypes.string
}

const defaultProps = {
  active: false
}

class ThumbNavItem extends React.Component {
  render() {
    const classes = classNames({ active: this.props.active })

    return (
      <li>
        <img src={resizer} className="thumb-nav-resizer" aria-hidden="true" />
        <a href={this.props.targetUrl} className={classes}>
          <img src={this.props.imageUrl} alt={this.props.actionDescription} />
        </a>
      </li>
    )
  }
}

ThumbNavItem.propTypes = propTypes
ThumbNavItem.defaultProps = defaultProps

export default ThumbNavItem
