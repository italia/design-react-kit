import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  /** Il contenuto del Callout */
  children: PropTypes.node.isRequired,
  /** Classi aggiuntive per il componente */
  className: PropTypes.string,
  /** Permette di dichiarare il colore del bordo e del titolo */
  color: PropTypes.oneOf([
    'success',
    'warning',
    'danger',
    'note',
    'important',
    ''
  ]),
  /** Abilita il Callout di tipo Highlight */
  highlight: PropTypes.bool,
  /** Permette personalizzare il tag utilizzato per il Callout (diverso da "div"). Accetta sia tag HTML che componenti React. */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /** Abilita il Callout di tipo Approfondimento */
  detailed: PropTypes.bool
}

const defaultProps = {
  color: '',
  highlight: false,
  tag: 'div'
}

const Callout = ({
  children,
  color,
  highlight,
  detailed,
  tag: Tag,
  ...attributes
}) => {
  const classes = classNames('callout', color, {
    'callout-highlight': highlight,
    'callout-more': detailed
  })
  return (
    <Tag className={classes} {...attributes}>
      {children}
    </Tag>
  )
}

Callout.propTypes = propTypes
Callout.defaultProps = defaultProps

export default Callout
