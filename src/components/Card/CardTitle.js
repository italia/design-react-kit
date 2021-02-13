import React from 'react'
import PropTypes from 'prop-types'
import { CardTitle as InnerCardTitle } from 'reactstrap'

// Note: this is a wrapper class around a reactstrap component.
// TODO: remove this class and restore the direct import when
// https://github.com/storybookjs/storybook/issues/10536 gets resolved

const propTypes = {
  /** Permette personalizzare il tag utilizzato per il CardTitle. Accetta sia tag HTML che componenti React. */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /** Classi aggiuntive per il componente */
  className: PropTypes.string
}

const defaultProps = {
  tag: 'div'
}

export default function CardTitle(props) {
  return <InnerCardTitle {...props} />
}

CardTitle.propTypes = propTypes
CardTitle.defaultProps = defaultProps
