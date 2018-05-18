import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Tooltip,
  UncontrolledTooltip,
  Popover,
  PopoverHeader,
  PopoverBody
} from "../../src";

class ModalTooltipExample extends React.Component {
  state = {
    modal: false,
    popoverOpen: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  togglePopover = () => {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  };

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>
          Lancia la demo della modale
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Titolo della modale</ModalHeader>
          <ModalBody>
            <h5>Popover in una modale</h5>
            <p>
              Questo{" "}
              <Button
                color="secondary"
                id="Example"
                onClick={this.togglePopover}
              >
                Pulsante
              </Button>{" "}
              attiva un popover al click.
              <Popover
                placement="right"
                isOpen={this.state.popoverOpen}
                target="Example"
                toggle={this.togglePopover}
              >
                <PopoverHeader>Titolo del popover</PopoverHeader>
                <PopoverBody>
                  Il contenuto del corpo del popover è impostato in questo
                  elemento.
                </PopoverBody>
              </Popover>
            </p>
            <hr />
            <h5>Tooltip in una modal</h5>
            <p>
              <a href="#" title="Tooltip" id="Example1">
                Questo link
              </a>{" "}
              e{" "}
              <a href="#" title="Tooltip" id="Example2">
                questo link
              </a>{" "}
              attivano un tooltip al passaggio del mouse.
              <UncontrolledTooltip placement="top" target="Example1">
                Tooltip
              </UncontrolledTooltip>
              <UncontrolledTooltip placement="top" target="Example2">
                Tooltip
              </UncontrolledTooltip>
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Chiudi
            </Button>
            <Button color="primary" onClick={this.toggle}>
              Salva le modifiche
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalTooltipExample;
