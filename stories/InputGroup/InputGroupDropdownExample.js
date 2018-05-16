import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from "../../src";

class InputGroupDropdownExample extends React.Component {
  state = {
    dropdownOpen: false,
    splitButtonOpen: false
  };

  toggleDropDown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  toggleSplit = () => {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen
    });
  };

  render() {
    const { split } = this.props;
    return (
      <div>
        <InputGroup className="mb-3">
          <InputGroupButtonDropdown
            addonType="prepend"
            isOpen={this.state.dropdownOpen}
            toggle={this.toggleDropDown}
          >
            <DropdownToggle caret color="primary">
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
          <Input type="text" />
        </InputGroup>

        <InputGroup>
          <Input type="text" />
          <InputGroupButtonDropdown
            addonType="append"
            isOpen={this.state.splitButtonOpen}
            toggle={this.toggleSplit}
          >
            {(() => {
              if (split) {
                return (
                  <div>
                    <Button color="primary">Action</Button>
                    <DropdownToggle split color="primary" />
                  </div>
                );
              }

              return (
                <DropdownToggle caret color="primary">
                  Dropdown
                </DropdownToggle>
              );
            })()}
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
        </InputGroup>
      </div>
    );
  }
}

export default InputGroupDropdownExample;
