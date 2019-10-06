import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  active: PropTypes.bool,
  small: PropTypes.bool,
  double: PropTypes.bool
}

const defaultProps = {
  tag: 'span',
  active: false,
  small: false,
  double: false
}

class Spinner extends React.Component {
  render() {
    const {
      className,
      tag: Tag,
      active,
      small,
      double,
      ...attributes
    } = this.props

    const wrapperClasses = classNames(
      active ? 'progress-spinner-active' : false,
      small ? 'size-sm' : false,
      double ? 'progress-spinner-double' : false,
      'progress-spinner'
    )
    const innerClasses = classNames('progress-spinner-inner')

    const classes = classNames(className, 'sr-only')
    if (double) {
      return (
        <Tag className={wrapperClasses}>
          <div className={innerClasses} />
          <div className={innerClasses} />
          <Tag {...attributes} className={classes}>
            Caricamento...
          </Tag>
        </Tag>
      )
    }

    return (
      <Tag className={wrapperClasses}>
        <Tag {...attributes} className={classes}>
          Caricamento...
        </Tag>
      </Tag>
    )
  }
}

Spinner.propTypes = propTypes
Spinner.defaultProps = defaultProps

export default Spinner
