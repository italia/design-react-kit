import React from "react";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    LinkList,
    LinkListItem
} from "../../src";

class PageChangerExample extends React.Component {
    state = {
        dropdownOpen: false,
    };

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    };

    render() {
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle
                    tag="a"
                    id="pagerChanger"
                    className="btn btn-dropdown"
                    caret>
                    pag.10
                </DropdownToggle>
                <DropdownMenu>
                    <LinkList>
                        <LinkListItem active>pag. 10</LinkListItem>
                        <LinkListItem>pag. 20</LinkListItem>
                        <LinkListItem>pag. 30</LinkListItem>
                        <LinkListItem>pag. 40</LinkListItem>
                        <LinkListItem>pag. 50</LinkListItem>
                    </LinkList>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default PageChangerExample;
