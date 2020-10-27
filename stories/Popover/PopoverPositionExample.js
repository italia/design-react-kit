import React from 'react'
import { Button, Popover, PopoverBody } from '../../src'
import PropTypes from 'prop-types'

class PopoverItem extends React.Component {
  state = {
    popoverOpen: false
  }

  toggle = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    })
  }

  render() {
    const id = `Popover-${this.props.id}`
    // Avoid Jest complaints
    const target = () => document.getElementById(id)

    return (
      <span>
        <Button
          className="mr-1"
          color="secondary"
          id={id}
          onClick={this.toggle}>
          Popover {this.props.item.text}
        </Button>
        <Popover
          placement={this.props.item.placement}
          isOpen={this.state.popoverOpen}
          target={target}
          toggle={this.toggle}>
          <PopoverBody>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus
          </PopoverBody>
        </Popover>
      </span>
    )
  }
}

PopoverItem.propTypes = {
  id: PropTypes.string,
  item: PropTypes.object
}

class PopoverPositionExample extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column">
        <div className="mx-auto align-self-center p-2">
          <PopoverItem
            item={{ placement: 'left', text: 'a sinistra' }}
            id={'left'}
          />
        </div>
        <div className="mx-auto align-self-center p-2">
          <PopoverItem
            item={{ placement: 'right', text: 'a destra' }}
            id={'right'}
          />
        </div>
        <div className="mx-auto align-self-center p-2">
          <PopoverItem
            item={{ placement: 'top', text: 'in alto' }}
            id={'top'}
          />
        </div>
        <div className="mx-auto align-self-center p-2">
          <PopoverItem
            item={{ placement: 'bottom', text: 'in basso' }}
            id={'bottom'}
          />
        </div>
      </div>
    )
  }
}

export default PopoverPositionExample
