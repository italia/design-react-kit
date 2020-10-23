import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  children: PropTypes.element,
  fixedWidth: PropTypes.bool,
  isSmall: PropTypes.bool,
  isVertical: PropTypes.bool,
  noZoomOnHover: PropTypes.bool,
  overlayOnHover: PropTypes.oneOf(['black', 'primary']),
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  rowItems: PropTypes.oneOf([2, 3, 4, 5])
}

const defaultProps = {
  fixedWidth: false,
  isSmall: false,
  isVertical: false,
  noZoomOnHover: false
}

class ThumbNav extends React.Component {
  render() {
    const classes = classNames('thumb-nav', {
      'thumb-nav-fixed': this.props.fixedWidth,
      'thumb-nav-small': this.props.isSmall,
      'thumb-nav-vertical': this.props.isVertical,
      'thumb-nav-nozoom': this.props.noZoomOnHover,
      [`thumb-nav-${this.props.overlayOnHover}`]: this.props.overlayOnHover,
      [`thumb-nav-${this.props.position}`]: this.props.position,
      'thumb-nav-auto': this.props.rowItems != null,
      [`thumb-nav-auto-${this.props.rowItems}`]:
        typeof this.props.rowItems === 'number'
    })

    return <ul className={classes}>{this.props.children}</ul>
  }
}

ThumbNav.propTypes = propTypes
ThumbNav.defaultProps = defaultProps

export default ThumbNav
