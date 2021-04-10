import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

const CardFooterCTA = props => {
  const { className, children } = props
  const classes = classNames(className, 'it-card-footer')
  return <div className={classes}>{children}</div>
}

CardFooterCTA.propTypes = propTypes

export default CardFooterCTA
