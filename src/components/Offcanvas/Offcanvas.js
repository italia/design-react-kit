import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition'

import { Util, Button } from 'reactstrap'

const {
  TransitionTimeouts,
  TransitionPropTypeKeys,
  TransitionStatuses,
  pick,
  omit
} = Util

const propTypes = {
  ...Transition.propTypes, // eslint-disable-line react/forbid-foreign-prop-types
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool
}

const defaultProps = {
  ...Transition.defaultProps,
  timeout: TransitionTimeouts.Collapse,
  tag: 'div'
}

const transitionStatusToClassHash = {
  [TransitionStatuses.ENTERING]: 'navbar-collapsable d-block',
  [TransitionStatuses.ENTERED]: 'navbar-collapsable d-block expanded',
  [TransitionStatuses.EXITING]: 'navbar-collapsable d-block',
  [TransitionStatuses.EXITED]: 'navbar-collapsable'
}

const defaultStyle = {
  transition: '400ms ease-in-out',
  transitionProperty: 'opacity'
}

const transitionStyles = {
  entering: {
    opacity: 0
  },
  entered: {
    opacity: 1
  },
  exiting: {
    opacity: 0
  }
}

function getTransitionClass(status) {
  return transitionStatusToClassHash[status] || ''
}

export default class Offcanvas extends Component {
  render() {
    const { tag: Tag, children, isOpen, onClose, ...attributes } = this.props

    const transitionProps = pick(attributes, TransitionPropTypeKeys)
    const childProps = omit(attributes, TransitionPropTypeKeys)

    return (
      <Transition {...transitionProps} in={isOpen}>
        {status => {
          const transitionClass = getTransitionClass(status)
          const currentStyles = transitionStyles[status]

          return (
            <div
              className={transitionClass}
              style={{
                ...defaultStyle,
                ...childProps.style,
                ...currentStyles
              }}
              {...childProps}>
              <div className="close-div" onClick={onClose}>
                <Button className="close-menu" color="">
                  <span className="it-close" />
                  close
                </Button>
              </div>
              <div className="menu-wrapper">
                <Tag>{children}</Tag>
              </div>
            </div>
          )
        }}
      </Transition>
    )
  }
}

Offcanvas.propTypes = propTypes
Offcanvas.defaultProps = defaultProps
