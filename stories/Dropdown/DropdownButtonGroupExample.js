import React from "react";
import {
  ButtonGroup,
  Button,
  ButtonDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle
} from "../../src";

class DropdownButtonGroupExample extends React.Component {
  state = {
    dropdownOpen: false
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    const { color } = this.props;
    return (
      <ButtonGroup>
        <Button>Bottone diviso</Button>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret />
          <DropdownMenu>
            <DropdownItem>Azione 1</DropdownItem>
            <DropdownItem>Azione 2</DropdownItem>
            <DropdownItem>Azione 3</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </ButtonGroup>
    );
  }
}

export default DropdownButtonGroupExample;
