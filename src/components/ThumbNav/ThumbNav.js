import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  fixedWidth: PropTypes.bool,
  isSmall: PropTypes.bool,
  isVertical: PropTypes.bool,
  noZoomOnHover: PropTypes.bool,
  overlayOnHover: PropTypes.oneOf(['black', 'primary']),
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  rowItems: PropTypes.oneOf([2, 3, 4, 5]),
}

const defaultProps = {
  fixedWidth: false,
  isSmall: false,
  isVertical: false,
  noZoomOnHover: false,
}

class ThumbNav extends React.Component {
  render() {
    const classes = classNames('thumb-nav',
      {
        'thumb-nav-fixed': this.props.fixedWidth,
        'thumb-nav-small': this.props.isSmall,
        'thumb-nav-vertical': this.props.isVertical,
        'thumb-nav-nozoom': this.props.noZoomOnHover,

        'thumb-nav-black': this.props.overlayOnHover == 'black',
        'thumb-nav-primary': this.props.overlayOnHover == 'primary',

        'thumb-nav-top': this.props.position == 'top',
        'thumb-nav-right': this.props.position == 'right',
        'thumb-nav-bottom': this.props.position == 'bottom',
        'thumb-nav-left': this.props.position == 'left',

        'thumb-nav-auto': this.props.rowItems !== undefined,
        'thumb-nav-auto-2': this.props.rowItems == 2,
        'thumb-nav-auto-3': this.props.rowItems == 3,
        'thumb-nav-auto-4': this.props.rowItems == 4,
        'thumb-nav-auto-5': this.props.rowItems == 5,
      }
    )

    return (
        <ul class={classes}>
          {this.props.children}
        </ul>
    )
  }
}

ThumbNav.propTypes = propTypes
ThumbNav.defaultProps = defaultProps

export default ThumbNav
