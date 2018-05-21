import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "../../src";

class PageChangerExample extends React.Component {
  state = {
    dropdownOpen: false
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    // This will require the new Linklist component
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle tag="a" id="pagerChanger" className="btn btn-dropdown" caret>pag.10</DropdownToggle>
        <DropdownMenu>
            <DropdownItem active>pag. 10</DropdownItem>
            <DropdownItem>pag. 20</DropdownItem>
            <DropdownItem>pag. 30</DropdownItem>
            <DropdownItem>pag. 40</DropdownItem>
            <DropdownItem>pag. 50</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default PageChangerExample;
