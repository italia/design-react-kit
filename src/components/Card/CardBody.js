import React from 'react'
import PropTypes from 'prop-types'
import { CardBody as InnerCardBody } from 'reactstrap'

// Note: this is a wrapper class around a reactstrap component.
// TODO: remove this class and restore the direct import when
// https://github.com/storybookjs/storybook/issues/10536 gets resolved

const propTypes = {
  /** Permette personalizzare il tag utilizzato per il CardBody. Accetta sia tag HTML che componenti React. */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /** Classi aggiuntive per il componente */
  className: PropTypes.string,
  /** Utilizzare per sovrascrivere le classi di default */
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func
  ])
}

const defaultProps = {
  tag: 'div'
}

export default function CardBody(props) {
  return <InnerCardBody {...props} />
}

CardBody.propTypes = propTypes
CardBody.defaultProps = defaultProps
