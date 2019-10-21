import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Transition } from 'react-transition-group'

import { Button, Icon } from '../../../src'

const propTypes = {
  item: {
    show: PropTypes.bool,
    key: PropTypes.string,
    type: PropTypes.string,
    position: PropTypes.string,
    isDismissable: PropTypes.bool,
    isWithIcon: PropTypes.bool,
    icon: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
  },
  close: PropTypes.func
}

class Notification extends React.Component {
  render() {
    if (!this.props || !this.props.item) return ''
    const {
      show,
      key,
      type = 'success',
      position,
      isDismissable,
      isWithIcon,
      icon = 'it-check-circle',
      title = 'Notification',
      text
    } = this.props.item
    const notificationClass = classNames({
      notification: true,
      dismissable: isDismissable,
      'with-icon': isWithIcon,
      [type]: true,
      [position]: !!position
    })
    const close = () => {
      this.props.close(key)
    }
    return (
      <Transition in={show} timeout={300} classNames="fade">
        <div
          className={notificationClass}
          role="alert"
          id={'notification-' + key}
          aria-labelledby={'notification-' + key + '-title'}
          style={{ display: show ? 'block' : 'none' }}>
          <h5 id={'notification-' + key + '-title'}>
            {isWithIcon && <Icon icon={icon} />}
            {title}
          </h5>
          {text && <p>{text}</p>}
          {isDismissable && (
            <Button
              type="button"
              className="notification-close"
              onClick={close}>
              <Icon icon="it-close" />
              <span className="sr-only">
                Chiudi notifica: Titolo notification
              </span>
            </Button>
          )}
        </div>
      </Transition>
    )
  }
}

Notification.propTypes = propTypes

export default Notification
