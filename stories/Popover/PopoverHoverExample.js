import React from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "../../src";

class PopoverHoverExample extends React.Component {
    state = {
        popoverOpen: false
    };

    togglePopover = () => {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    };

    render() {
        const id = "hoverexample";
        // Avoid Jest complaints
        const target = () => document.getElementById(id);

        return (
            <div>
                <Button
                    color="primary"
                    id={id}
                    onMouseEnter={this.togglePopover}
                    onMouseLeave={this.togglePopover}
                >
                    Apertura in hover
                </Button>

                <Popover
                    placement="right"
                    target={target}
                    isOpen={this.state.popoverOpen}
                    toggle={this.togglePopover}
                >
                    <PopoverHeader>Titolo del popover</PopoverHeader>
                    <PopoverBody>
                        Ed ecco alcuni contenuti sorprendenti. È molto
                        coinvolgente. Non trovi?
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}

export default PopoverHoverExample;
