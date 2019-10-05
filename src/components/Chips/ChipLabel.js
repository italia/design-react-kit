import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /** Classi aggiuntive da usare per il componente ChipLabel */
  className: PropTypes.string
}

const defaultProps = {
  tag: 'span'
}

const ChipLabel = props => {
  const { className, tag: Tag, ...attributes } = props
  const classes = classNames(className, 'chip-label')
  return <Tag {...attributes} className={classes} />
}

ChipLabel.propTypes = propTypes
ChipLabel.defaultProps = defaultProps

export default ChipLabel
