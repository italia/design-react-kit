import React from "react";
import {
  Button,
  Tooltip,
  UncontrolledTooltip,
  Popover,
  PopoverHeader,
  PopoverBody
} from "../../src";

class PopoverExample extends React.Component {
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
        <Button color="danger" id={id} onClick={this.togglePopover}>
          Clicca par attivare/disattivare il popover
        </Button>

        <Popover
          placement="right"
          target={target}
          isOpen={this.state.popoverOpen}
          toggle={this.togglePopover}
        >
          <PopoverHeader>Titolo del popover</PopoverHeader>
          <PopoverBody>
            Ed ecco alcuni contenuti sorprendenti. È molto coinvolgente. Non
            trovi?
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default PopoverExample;
