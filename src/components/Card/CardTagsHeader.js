import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  /** Il CardTag da mostrare */
  children: PropTypes.node,
  /** Mostra la data nella Card. Passare una data già formattata come stringa. */
  date: PropTypes.string
}

const CardTagsHeader = props => {
  const { date, children, ...attributes } = props
  return (
    <div className="head-tags" {...attributes}>
      {children}
      {date && <span className="data">{date}</span>}
    </div>
  )
}

CardTagsHeader.propTypes = propTypes

export default CardTagsHeader
