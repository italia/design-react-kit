import React from "react";
import {
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "../../src";

class DropdownButtonExample extends React.Component {
    state = {
        dropdownOpen: false,
    };

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    };

    render() {
        const {color} = this.props;
        return (
            <ButtonDropdown
                className="mr-3"
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}>
                <DropdownToggle className="" color={color} caret>
                    Apri dropdown
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Azione 1</DropdownItem>
                    <DropdownItem>Azione 2</DropdownItem>
                    <DropdownItem>Azione 3</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        );
    }
}

export default DropdownButtonExample;
