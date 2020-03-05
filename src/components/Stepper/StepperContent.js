import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.element,
  dark: PropTypes.bool
}

const defaultProps = {
  tag: 'div'
}

const contentStyleLight = {
  height: '400px',
  border: '2px dashed #eee',
  background: '#fafafa',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#333'
}

const contentStyleDark = {
  height: '400px',
  border: '2px dashed #eee',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#EEE',
  borderColor: '#aaa',
  background: '#17324d',
  opacity: 0.5
}

const StepperContent = props => {
  const { tag: Tag, children, dark, ...attributes } = props
  const wrapperClass = classNames('steppers-content')
  return (
    <Tag
      {...attributes}
      className={wrapperClass}
      style={(dark && contentStyleDark) || contentStyleLight}
      aria-live="polite">
      {children}
    </Tag>
  )
}

StepperContent.propTypes = propTypes
StepperContent.defaultProps = defaultProps
export default StepperContent
