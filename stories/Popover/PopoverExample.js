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
    return (
      <div>
        <Button color="danger" id="Example" onClick={this.togglePopover}>
          Clicca par attivare/disattivare il popover
        </Button>
        <Popover
          placement="right"
          isOpen={this.state.popoverOpen}
          target="Example"
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
