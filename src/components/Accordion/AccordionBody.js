import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Transition from 'react-transition-group/Transition'

import { Util } from 'reactstrap'

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
  active: PropTypes.bool,
  onToggle: PropTypes.func
}

const defaultProps = {
  ...Transition.defaultProps,
  timeout: TransitionTimeouts.Collapse,
  tag: 'div'
}

const transitionStatusToClassHash = {
  [TransitionStatuses.ENTERING]: 'collapsing',
  [TransitionStatuses.ENTERED]: 'collapse show',
  [TransitionStatuses.EXITING]: 'collapsing',
  [TransitionStatuses.EXITED]: 'collapse'
}

function getTransitionClass(status) {
  return transitionStatusToClassHash[status] || 'collapse'
}

function getHeight(node) {
  return node.scrollHeight
}

export default class AccordionBody extends Component {
  state = {
    height: null
  }

  onEntering = (node, isAppearing) => {
    this.setState({ height: getHeight(node) })
    this.props.onEntering(node, isAppearing)
  }

  onEntered = (node, isAppearing) => {
    this.setState({ height: null })
    this.props.onEntered(node, isAppearing)
  }

  onExit = node => {
    this.setState({ height: getHeight(node) })
    this.props.onExit(node)
  }

  onExiting = node => {
    // getting this variable triggers a reflow
    const _unused = node.offsetHeight // eslint-disable-line no-unused-vars
    this.setState({ height: 0 })
    this.props.onExiting(node)
  }

  onExited = node => {
    this.setState({ height: null })
    this.props.onExited(node)
  }

  render() {
    const { className, tag: Tag, active, children, ...attributes } = this.props
    const { height } = this.state

    const transitionProps = pick(attributes, TransitionPropTypeKeys)
    const childProps = omit(attributes, TransitionPropTypeKeys)

    return (
      <Transition
        {...transitionProps}
        in={active}
        onEntering={this.onEntering}
        onEntered={this.onEntered}
        onExit={this.onExit}
        onExiting={this.onExiting}
        onExited={this.onExited}>
        {status => {
          const transitionClass = getTransitionClass(status)
          const classes = classNames(className, transitionClass)

          const style = height === null ? null : { height }

          return (
            <Tag
              className={classes}
              style={{ ...childProps.style, ...style }}
              {...childProps}>
              <div className="collapse-body">{children}</div>
            </Tag>
          )
        }}
      </Transition>
    )
  }
}

AccordionBody.propTypes = propTypes
AccordionBody.defaultProps = defaultProps
