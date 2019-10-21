import React from 'react'
import Notification from './Notification'

const notificationId = () => {
  return Math.random()
    .toString(36)
    .substr(2, 9)
}

class NotificationManager extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: [] }
  }

  showNotif = (index, items) => {
    const item = items[index]
    let { timeout, isDismissable: dismissStatus } = item
    if (item.show === true) {
      return
    }
    item.show = !item.show
    this.setState({ items })
    if (dismissStatus === true && !timeout) {
      return
    }
    if (dismissStatus !== false) {
      dismissStatus = true
    }
    if (dismissStatus === true) {
      setTimeout(() => {
        const itemHide = this.state.items[index]
        itemHide.show = false
        this.setState(this.state)
      }, timeout || 7000)
    }
  }

  add = (key, item) => {
    item.key = key
    item.show = false
    const items = [...this.state.items, item]
    this.showNotif(items.length - 1, items)
  }

  show = (event, myItem) => {
    const key = event.target.id
    const keyIndex = this.state.items.findIndex(item => item.key === key)
    if (keyIndex === -1) {
      this.add(key, myItem)
    } else {
      this.showNotif(keyIndex, this.state.items)
    }
  }

  close = key => {
    const items = this.state.items
    const keyIndex = items.findIndex(item => item.key === key)
    if (keyIndex !== -1) {
      items[keyIndex].show = false
      this.setState(this.state)
    }
  }

  render() {
    const Notifications = this.state.items.map(item => (
      <Notification key={item.key} item={item} close={this.close} />
    ))
    return <div>{Notifications}</div>
  }
}

export default {
  notificationId,
  NotificationManager
}
