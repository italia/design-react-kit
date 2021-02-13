import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Icon from '../Icon/Icon'

const propTypes = {
  /** Classi aggiuntive per il componente */
  className: PropTypes.string,
  /** Mostra un'icona nella Card per l'azione "Leggi di più". Passare il nome dell'icona per utilizzarlo. */
  iconName: PropTypes.string,
  /** Passare l'URL target. */
  href: PropTypes.string,
  /** Il contenuto in testo da mostrare */
  text: PropTypes.string,
  /** Permette personalizzare il tag utilizzato per il CardReadMore (diverso da "a"). Accetta sia tag HTML che componenti React. */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

const defaultProps = {
  tag: 'a',
  iconName: 'it-arrow-right'
}

const CardReadMore = props => {
  const { className, text, iconName, tag: Tag, href, ...attributes } = props
  const classes = classNames(className, 'read-more')
  return (
    <Tag className={classes} href={href} {...attributes}>
      <span className="text">{text}</span>
      {iconName && <Icon icon={iconName} />}
    </Tag>
  )
}

CardReadMore.propTypes = propTypes
CardReadMore.defaultProps = defaultProps

export default CardReadMore
