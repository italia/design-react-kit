import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
  /** Aumenta la dimensione del testo nel paragrafo contenuto  */
  bigText: PropTypes.bool,
  /** Il titolo del Callout */
  children: PropTypes.node.isRequired,
  /** Classi aggiuntive per il componente */
  className: PropTypes.string,
  /** Permette personalizzare il tag utilizzato per il contenitore del titolo (diverso da "div"). Accetta sia tag HTML che componenti React. */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
}

const defaultProps = {
  bigText: false,
  tag: 'p'
}

const CalloutText = ({
  bigText,
  children,
  className,
  tag: Tag,
  ...attributes
}) => {
  const classes = classNames(className, {
    'callout-big-text': bigText
  })
  return (
    <Tag className={classes} {...attributes}>
      {children}
    </Tag>
  )
}

CalloutText.propTypes = propTypes
CalloutText.defaultProps = defaultProps

export default CalloutText
