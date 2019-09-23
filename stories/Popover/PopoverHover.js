import React from "react";
import { Popover, PopoverHeader, PopoverBody } from "../../src";

class PopoverHover extends React.Component {
  state = {
    popoverOpen: false
  };

  togglePopover = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  };

  render() {
    const id = "example";
    // Avoid Jest complaints
    const target = () => document.getElementById(id);

    return (
      <div>
        <button
          type="button"
          className="btn btn-secondary"
          data-container="body"
          data-toggle="popover"
          data-trigger="hover"
          data-placement="right"
          data-html="true"
          id={id}
          onMouseOver={this.togglePopover}
          onMouseOut={this.togglePopover}
        >
          Apertura in Hover
        </button>

        <Popover
          placement="right"
          target={target}
          isOpen={this.state.popoverOpen}
          toggle={this.togglePopover}
        >
          <PopoverHeader>Popover in Hover</PopoverHeader>
          <PopoverBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
            finibus augue.
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default PopoverHover;
