import React from 'react'
import Notification from './Notification'

const notificationId = () => {
  return Math.random()
    .toString(36)
    .substr(2, 9)
}

class NotificationManager extends React.Component {
  state = { items: [] }

  showNotif = (index, items) => {
    const item = items[index]
    let { timeout, dismissable: dismissStatus } = item
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

  add = (id, item) => {
    item.id = id
    item.show = false
    const items = [...this.state.items, item]
    this.showNotif(items.length - 1, items)
  }

  show = (event, myItem) => {
    const id = event.target.id
    if (id) {
      const idIndex = this.state.items.findIndex(item => item.id === id)
      if (idIndex === -1) {
        return this.add(id, myItem)
      }
      return this.showNotif(idIndex, this.state.items)
    } else {
      const freshId = notificationId()
      event.target.setAttribute('id', freshId)
      return this.add(freshId, myItem)
    }
  }

  close = id => {
    const items = this.state.items
    const idIndex = items.findIndex(item => item.id === id)
    if (idIndex !== -1) {
      items[idIndex].show = false
      const state = Object.assign({}, this.state)
      this.setState(state)
    }
  }

  render() {
    const Notifications = this.state.items.map(item => (
      <Notification key={item.id} {...item} onClose={this.close} />
    ))
    return <div>{Notifications}</div>
  }
}

export default NotificationManager
