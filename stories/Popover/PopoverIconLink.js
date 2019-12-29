import React from 'react'
import { Icon, Popover, PopoverHeader, PopoverBody } from '../../src'

class PopoverIconLink extends React.Component {
  state = {
    popoverOpen: false
  }

  togglePopover = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    })
  }

  render() {
    const id = 'example'
    // Avoid Jest complaints
    const target = () => document.getElementById(id)

    return (
      <div>
        <button
          type="button"
          className="btn btn-secondary"
          data-container="body"
          data-toggle="popover"
          data-placement="right"
          data-html="true"
          id={id}
          onClick={this.togglePopover}>
          Popover con icona e link
        </button>

        <Popover
          placement="right"
          target={target}
          isOpen={this.state.popoverOpen}
          toggle={this.togglePopover}>
          <PopoverHeader>
            <Icon
              color="white"
              icon="it-help-circle"
              style={{ ariaHidden: true }}
            />
            Titolo con icona
          </PopoverHeader>
          <PopoverBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
            finibus augue.
            <a href="#" className="popover-inner-link">
              More info
              <Icon icon="it-arrow-right" style={{ ariaHidden: true }} />
            </a>
          </PopoverBody>
        </Popover>
      </div>
    )
  }
}

export default PopoverIconLink
