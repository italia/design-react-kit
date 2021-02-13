import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  /** Il titolo del Callout */
  children: PropTypes.node.isRequired,
  /** Classi aggiuntive per il componente */
  className: PropTypes.string,
  /** Permette personalizzare il tag utilizzato per il contenitore del titolo (diverso da "div"). Accetta sia tag HTML che componenti React. */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

const defaultProps = {
  tag: 'div'
}

const CalloutTitle = ({ children, className, tag: Tag, ...attributes }) => {
  const classes = classNames(className, 'callout-title')
  return (
    <Tag className={classes} {...attributes}>
      {children}
    </Tag>
  )
}

CalloutTitle.propTypes = propTypes
CalloutTitle.defaultProps = defaultProps

export default CalloutTitle
