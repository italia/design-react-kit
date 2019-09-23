import React, { Component } from 'react'

import { FormGroup as ReactStrapFormGroup, Input, Label } from 'reactstrap'

class FormGroup extends Component {
  state = {
    active: this.props.active || false,
    value: null
  }

  onFocus = (callback, active = true) => {
    this.setState(
      {
        active
      },
      () => {
        if (callback) {
          callback()
        }
      }
    )
  }

  onBlur = (callback, active = false) => {
    this.setState(
      {
        active
      },
      () => {
        if (callback) {
          callback()
        }
      }
    )
  }

  onChange = (callback, event) => {
    let value
    let target
    if (event && event.persist) {
      // SyntheticEvent
      event.persist()
      target = { event }
      value = { target }
    } else if (event.label) {
      // Autocomplete
      value = event.label
    }

    this.setState(
      {
        value
      },
      () => {
        if (callback) {
          callback(event)
        }
      }
    )
  }

  render() {
    const { active, value } = this.state
    const { children, className, col, ...rest } = this.props

    const hasValue = !!value

    let classNames = [className, active ? 'active' : '', col ? 'col' : ''].join(
      ' '
    )

    return (
      <ReactStrapFormGroup {...rest} className={classNames}>
        {(() =>
          React.Children.map(children, child => {
            if (child === null) return

            const { onFocus, onBlur, onChange, className } = child.props

            switch (child.type) {
              case Input:
                const isLabelActive = null

                return React.cloneElement(child, {
                  ...child.props,
                  onFocus: () => {
                    this.onFocus(onFocus)
                  },
                  onBlur: () => {
                    this.onBlur(onBlur)
                  },
                  onChange: e => {
                    this.onChange(onChange, e)
                  },
                  ...isLabelActive
                })
              case Label:
                let hasChildValue = false

                React.Children.toArray(children)
                  .filter(child => {
                    switch (child.type) {
                      case Input:
                        return true
                      default:
                        return false
                    }
                  })
                  .map(child => {
                    if (child.props.value) {
                      hasChildValue = true
                    }
                    return false
                  })

                classNames =
                  hasValue || hasChildValue
                    ? [className, 'active'].join(' ')
                    : className

                return React.cloneElement(child, {
                  ...child.props,
                  className: classNames
                })
              default:
                return child
            }
          }))()}
      </ReactStrapFormGroup>
    )
  }
}

FormGroup.defaultProps = ReactStrapFormGroup.defaultProps
FormGroup.propTypes = ReactStrapFormGroup.propTypes

export default FormGroup
