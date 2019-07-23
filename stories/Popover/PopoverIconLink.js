import React from "react";
import { Popover, PopoverHeader, PopoverBody } from "../../src";


class PopoverIconLink extends React.Component {
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
                <button
                    type="button"
                    className="btn btn-secondary"
                    data-container="body"
                    data-toggle="popover" 
                    data-placement="right"
                    data-html="true"
                    id={id}
                    onClick={this.togglePopover}
                >
                    Popover con icona e link
                </button>

                <Popover
                    placement="right"
                    target={target}
                    isOpen={this.state.popoverOpen}
                    toggle={this.togglePopover}
                >
                    <PopoverHeader>
                        <svg className="icon icon-white">
                            <use xlinkHref="/svg/sprite.svg#it-help-circle" />
                        </svg>{" "}
                        Titolo con icona
                    </PopoverHeader>
                    <PopoverBody>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vel finibus augue.
                        <a href="#" className="popover-inner-link">
                            More info
                            <svg className="icon">
                                <use xlinkhref="/bootstrap-italia/dist/svg/sprite.svg#it-arrow-right" />
                            </svg>
                        </a>
                    </PopoverBody>
                </Popover>
            </div>
        );
    }
}

export default PopoverIconLink;
