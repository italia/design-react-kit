import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "../../src";

class DropdownAlignmentExample extends React.Component {
  state = {
    dropdownOpen: false
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>Dropdown allineato a destra</DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Azione 1</DropdownItem>
          <DropdownItem>Azione 2</DropdownItem>
          <DropdownItem>Azione 3</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default DropdownAlignmentExample;
