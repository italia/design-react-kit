import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  color: PropTypes.string
};

import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  LinkList,
  LinkListItem
} from "../../src";

class DropdownButtonExample extends React.Component {
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
      <ButtonDropdown
        className="mr-3"
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
      >
        <DropdownToggle className="" color={color} caret>
          Apri dropdown
        </DropdownToggle>
        <DropdownMenu>
          <LinkList>
            <LinkListItem>Azione 1</LinkListItem>
            <LinkListItem>Azione 2</LinkListItem>
            <LinkListItem>Azione 3</LinkListItem>
          </LinkList>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default DropdownButtonExample;

DropdownButtonExample.propTypes = propTypes;
