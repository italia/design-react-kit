import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import iconSprite from 'bootstrap-italia/dist/svg/sprite.svg'

const propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string
}

const defaultProps = {
  color: '',
  size: '',
  icon: 'it-tool'
}

class Icon extends React.Component {
  render () {
    const {
      color,
      size
    } = this.props
    const classes = classNames('icon', color, size)
    const iconName = this.props.icon
    return (
      <svg className={classes}>
        <use xlinkHref={`${iconSprite}#${iconName}`} />
      </svg>
    )
  }
}

Icon.propTypes = propTypes
Icon.defaultProps = defaultProps

export default Icon
