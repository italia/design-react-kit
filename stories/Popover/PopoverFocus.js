import React from "react";
import { Popover, PopoverHeader, PopoverBody } from "../../src";

class PopoverFocus extends React.Component {
    state = {
        popoverOpen: false
    };

    togglePopover = () => {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    };

    render() {
        const id = "example";
        // Avoid Jest complaints
        const target = () => document.getElementById(id);

        return (
            <div>
                <a
                    tabindex="0"
                    class="btn btn-lg btn-danger"
                    role="button"
                    data-toggle="popover"
                    data-trigger="focus"
                    id={id}
                >
                    Dismissible popover
                </a>

                <Popover
                    placement="right"
                    trigger="focus"
                    target={target}
                    isOpen={this.state.popoverOpen}
                    toggle={this.togglePopover}
                >
                    <PopoverHeader>Dismissible popover</PopoverHeader>
                    <PopoverBody>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vel finibus augue.
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}

export default PopoverFocus;
