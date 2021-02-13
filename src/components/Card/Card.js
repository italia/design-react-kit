import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Card as CardBase } from 'reactstrap'

const propTypes = {
  /** Permette personalizzare il tag utilizzato per la Card. Accetta sia tag HTML che componenti React. */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /** Classi aggiuntive per il componente */
  className: PropTypes.string,
  /** Utilizzare per sovrascrivere le classi di default */
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func
  ]),
  /** Abilita la versione teaser della Card */
  teaser: PropTypes.bool,
  /** Quando attivo distanzia la Card nella versione mobile */
  spacing: PropTypes.bool,
  /** Quando attivo rimuove il componente contenitore della carta. Utile per card multiple nello stesso contenitore */
  noWrapper: PropTypes.bool,
  /** Classi aggiuntive per l'elemento contenitore */
  wrapperClassName: PropTypes.string
}

const defaultProps = {
  tag: 'div',
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
