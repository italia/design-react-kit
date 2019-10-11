import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Card as CardBase } from 'reactstrap'

const propTypes = {
  // eslint-disable-next-line react/forbid-foreign-prop-types
  ...CardBase.propTypes,
  teaser: PropTypes.bool,
  spacing: PropTypes.bool,
  noWrapper: PropTypes.bool,
  wrapperClassName: PropTypes.string
}

const defaultProps = {
  // eslint-disable-next-line react/forbid-foreign-prop-types
  ...CardBase.defaultProps,
  noWrapper: false
}

const Card = ({
  teaser,
  spacing,
  noWrapper,
  wrapperClassName,
  ...attributes
}) => {
  const wrapperClasses = classNames('card-wrapper', wrapperClassName, {
    'card-space': spacing,
    'card-teaser-wrapper': teaser
  })
  const cardClasses = classNames(attributes.className, {
    'card-teaser': teaser
  })

  if (noWrapper) {
    return <CardBase {...attributes} className={cardClasses} />
  }

  return (
    <div className={wrapperClasses}>
      <CardBase {...attributes} className={cardClasses} />
    </div>
  )
}

Card.propTypes = propTypes
Card.defaultProps = defaultProps

export default Card
