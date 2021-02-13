import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  /** Permette personalizzare il tag utilizzato per il CardTag (diverso da "a"). Accetta sia tag HTML che componenti React. */
  tag: PropTypes.string,
  /** Classi aggiuntive per il componente */
  className: PropTypes.string
}

const defaultProps = {
  tag: 'a'
}

const CardTag = props => {
  const { className, tag: Tag, ...attributes } = props
  const classes = classNames(className, 'card-tag')
  return <Tag className={classes} {...attributes} />
}

CardTag.propTypes = propTypes
CardTag.defaultProps = defaultProps

export default CardTag
