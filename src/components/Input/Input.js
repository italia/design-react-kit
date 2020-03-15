/* eslint react/prefer-stateless-function: 0 */

import React from 'react'
import PropTypes from 'prop-types'
import { Util } from 'reactstrap'
import isNumber from 'is-number'

import InputContainer from './InputContainer'
import Icon from '../Icon/Icon'
import {
  getTag,
  getFormControlClass,
  getClasses,
  getInfoTextControlClass
} from './utils'

const { deprecated, warnOnce } = Util

const propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  infoText: PropTypes.string,
  normalized: PropTypes.bool,
  bsSize: PropTypes.string,
  state: deprecated(
    PropTypes.string,
    'Please use the props "valid" and "invalid" to indicate the state.'
  ),
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.string
  ]),
  static: deprecated(PropTypes.bool, 'Please use the prop "plaintext"'),
  plaintext: PropTypes.bool,
  addon: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object
}

const defaultProps = {
  type: 'text'
}

class Input extends React.Component {
  state = {
    isFocused: false,
    hidden: true,
    icon: true
  }

  toggleFocusLabel = () => {
    this.setState({
      isFocused: true
    })
  }

  toggleBlurLabel = e => {
    if (e.target.value === '') {
      this.setState({
        isFocused: !this.state.isFocused
      })
    }
  }

  toggleShow = () => {
    this.setState({ hidden: !this.state.hidden, icon: !this.state.icon })
  }

  render() {
    const {
      id,
      className,
      cssModule,
      type,
      state,
      tag,
      addon,
      static: staticInput,
      plaintext,
      innerRef,
      label,
      infoText,
      placeholder,
      normalized,
      value,
      ...attributes
    } = this.props
    let { bsSize, valid, invalid } = this.props

    const Tag = getTag({ tag, plaintext, staticInput, type })
    const formControlClass = getFormControlClass(
      {
        plaintext,
        staticInput,
        type,
        addon
      },
      cssModule
    )
    const infoTextControlClass = getInfoTextControlClass(
      { valid, invalid },
      cssModule
    )

    if (state && valid == null && invalid == null) {
      invalid = state === 'danger'
      valid = state === 'success'
    }

    if (attributes.size && !isNumber(attributes.size)) {
      warnOnce(
        'Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'
      )
      bsSize = attributes.size
      delete attributes.size
    }

    if (Tag === 'input' || typeof tag !== 'string') {
      attributes.type = type
    }

    if (
      attributes.children &&
      !(
        plaintext ||
        staticInput ||
        type === 'select' ||
        typeof Tag !== 'string' ||
        Tag === 'select'
      )
    ) {
      warnOnce(
        `Input with a type of "${type}" cannot have children. Please use "value"/"defaultValue" instead.`
      )
      delete attributes.children
    }

    const inputPassword = attributes.type === 'password'

    // Styling
    const {
      activeClass,
      infoTextClass,
      inputClasses,
      wrapperClass
    } = getClasses(
      className,
      {
        valid,
        invalid,
        bsSize,
        placeholder,
        value,
        label,
        infoText,
        normalized,
        inputPassword,
        formControlClass,
        infoTextControlClass,
        isFocused: this.state.isFocused
      },
      cssModule
    )

    // set of attributes always shared by the Input components
    const sharedAttributes = {
      id,
      onFocus: this.toggleFocusLabel,
      onBlur: this.toggleBlurLabel,
      value: value,
      ref: innerRef
    }

    // set of attributes always shared by the wrapper component
    const containerProps = {
      id,
      activeClass,
      label,
      infoTextClass,
      infoText,
      wrapperClass
    }

    if (placeholder) {
      return (
        <InputContainer {...containerProps}>
          <Tag
            {...attributes}
            {...sharedAttributes}
            className={inputClasses}
            placeholder={placeholder}
          />
        </InputContainer>
      )
    }

    if (inputPassword) {
      return (
        <InputContainer {...containerProps}>
          <Tag
            {...attributes}
            {...sharedAttributes}
            type={this.state.hidden ? 'password' : 'text'}
            className={inputClasses}
            placeholder={placeholder}
          />
          <span className="password-icon" aria-hidden="true">
            <Icon
              size="sm"
              icon={`it-password-${this.state.icon ? 'visible' : 'invisible'}`}
              className="password-icon-visible"
              onClick={this.toggleShow}
            />
          </span>
        </InputContainer>
      )
    }
    if (normalized) {
      return (
        <InputContainer {...containerProps}>
          <Tag
            {...attributes}
            {...sharedAttributes}
            className={inputClasses}
            readOnly
          />
        </InputContainer>
      )
    }
    if (label || infoText) {
      return (
        <InputContainer {...containerProps}>
          <Tag {...attributes} {...sharedAttributes} className={inputClasses} />
        </InputContainer>
      )
    }

    return (
      <Tag
        {...attributes}
        ref={innerRef}
        className={inputClasses}
        {...sharedAttributes}
      />
    )
  }
}

Input.propTypes = propTypes
Input.defaultProps = defaultProps

export default Input
