import React from 'react'
import PropTypes from 'prop-types'
import { Alert as InnerAlert } from 'reactstrap'

// Note: this is a wrapper class around a reactstrap component.
// TODO: remove this class and restore the direct import when
// https://github.com/storybookjs/storybook/issues/10536 gets resolved

const propTypes = {
  className: PropTypes.string,
  closeClassName: PropTypes.string,
  color: PropTypes.string,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fade: PropTypes.bool,
  /** Controlla la transizione in entrata e uscita dell'Alert. Per maggiori informazioni consulta la pagina https://reactstrap.github.io/components/fade/. */
  transition: PropTypes.shape({
    // Controls if the fade is currently showing or not (default: true)
    in: PropTypes.bool,

    // All of these match react-transition-group/Transition props
    mountOnEnter: PropTypes.bool,
    unmountOnExit: PropTypes.bool,
    appear: PropTypes.bool, // (default: true)
    enter: PropTypes.bool, // (default: true)
    exit: PropTypes.bool, // (default: true)
    timeout: PropTypes.oneOfType([
      // (default: 150)
      PropTypes.number,
      PropTypes.shape({
        enter: PropTypes.number,
        exit: PropTypes.number
      }).isRequired
    ]),
    addEndListener: PropTypes.func,
    onEnter: PropTypes.func,
    onEntering: PropTypes.func,
    onEntered: PropTypes.func,
    onExit: PropTypes.func,
    onExiting: PropTypes.func,
    onExited: PropTypes.func,

    // The component(s) that should be faded
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    // Pass in a component or primitive component name to override the default element
    // (default: 'div')
    tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    // Class always applied to the Fade element (default: 'fade')
    baseClass: PropTypes.string,
    // Class applied to transition the Fade element in (default: 'show')
    baseClassActive: PropTypes.string,
    // Other classes that should always be applied
    className: PropTypes.string,
    cssModule: PropTypes.object
  })
}

const defaultProps = {
  color: 'success',
  isOpen: true,
  fade: true
}

export default function Alert(props) {
  return <InnerAlert {...props} />
}

Alert.propTypes = propTypes
Alert.defaultProps = defaultProps
