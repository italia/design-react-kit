import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "../../src";

class DropdownDirectionsExample extends React.Component {
  state = {
    btnDropUp: false,
    btnDropLeft: false,
    btnDropRight: false
  };

  toggle = id => {
    this.setState({
      [`btnDrop${id}`]: !this.state[`btnDrop${id}`]
    });
  };

  render() {
    return (
      <div style={{ padding: 200 }}>
        <Dropdown
          direction="up"
          isOpen={this.state.btnDropUp}
          toggle={() => this.toggle("Up")}
        >
          <DropdownToggle caret>Dropup</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Azione 1</DropdownItem>
            <DropdownItem>Azione 2</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown
          className="mt-3"
          direction="left"
          isOpen={this.state.btnDropLeft}
          toggle={() => this.toggle("Left")}
        >
          <DropdownToggle caret>Dropleft</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Azione 1</DropdownItem>
            <DropdownItem>Azione 2</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown
          className="mt-3"
          direction="right"
          isOpen={this.state.btnDropRight}
          toggle={() => this.toggle("Right")}
        >
          <DropdownToggle caret>Dropright</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Azione 1</DropdownItem>
            <DropdownItem>Azione 2</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default DropdownDirectionsExample;
