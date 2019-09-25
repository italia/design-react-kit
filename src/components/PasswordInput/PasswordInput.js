import React, { Component, Fragment } from 'react'

import Input from '../Input/Input'

class PasswordInput extends Component {
  state = {
    showPassword: false
  }

  static defaultProps = {
    type: 'password'
  }

  onPasswordToggle = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword
    }))
  }

  render() {
    const { showPassword } = this.state
    const { type, ...rest } = this.props

    const classNames = ['btn-eye', showPassword ? 'eye-off' : 'eye-on'].join(
      ' '
    )

    return (
      <Fragment>
        <span className={classNames} onClick={this.onPasswordToggle} />
        <Input {...rest} type={showPassword ? 'text' : type} />
      </Fragment>
    )
  }
}

PasswordInput.propTypes = {
  ...Input.propTypes
}

export default PasswordInput
