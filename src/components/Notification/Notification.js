import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Transition } from 'react-transition-group'

import { Button, Icon } from '../../../src'

const propTypes = {
  show: PropTypes.bool,
  id: PropTypes.string,
  type: PropTypes.string,
  position: PropTypes.string,
  dismissable: PropTypes.bool,
  icon: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  onClose: PropTypes.func
}

const defaultProps = {
  type: 'success',
  icon: 'it-check-circle',
  title: 'Notification'
}

const Notification = props => {
  if (!props) return ''
  let { show, id, type, position, dismissable, icon, title, text } = props
  if (type === 'default') {
    icon = ''
  }
  const notificationClass = classNames({
    notification: true,
    dismissable: dismissable,
    'with-icon': !!icon,
    [type]: true,
    [position]: !!position
  })
  const close = () => {
    props.onClose(id)
  }
  return (
    <Transition in={show} timeout={300} classNames="fade">
      <div
        className={notificationClass}
        role="alert"
        id={'notification-' + id}
        aria-labelledby={'notification-' + id + '-title'}
        style={{ display: show ? 'block' : 'none' }}>
        <h5 id={'notification-' + id + '-title'}>
          {icon && <Icon icon={icon} />}
          {title}
        </h5>
        {text && <p>{text}</p>}
        {dismissable && (
          <Button type="button" className="notification-close" onClick={close}>
            <Icon icon="it-close" />
            <span className="sr-only">Chiudi notifica: {title}</span>
          </Button>
        )}
      </div>
    </Transition>
  )
}

Notification.propTypes = propTypes
Notification.defaultProps = defaultProps

export default Notification
