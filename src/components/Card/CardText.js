import React from 'react'
import PropTypes from 'prop-types'
import { CardText as InnerCardText } from 'reactstrap'

// Note: this is a wrapper class around a reactstrap component.
// TODO: remove this class and restore the direct import when
// https://github.com/storybookjs/storybook/issues/10536 gets resolved

const propTypes = {
  /** Permette personalizzare il tag utilizzato per il CardText. Accetta sia tag HTML che componenti React. */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /** Classi aggiuntive per il componente */
  className: PropTypes.string,
  /** Utilizzare per sovrascrivere le classi di default */
  cssModule: PropTypes.object
}

const defaultProps = {
  tag: 'p'
}

export default function CardText(props) {
  return <InnerCardText {...props} />
}

CardText.propTypes = propTypes
CardText.defaultProps = defaultProps
