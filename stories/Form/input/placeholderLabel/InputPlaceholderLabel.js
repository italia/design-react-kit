import React from "react";

export default class InputPlaceholderLabel extends React.Component {
    constructor() {
        super();
        this.state = {
            isFocused: false
        };
    }

    toggleFocusLabel = () => {
        this.setState({
            isFocused: true
        });
    };

    toggleBlurLabel = e => {
        if (e.target.value === "") {
            this.setState({
                isFocused: !this.state.isFocused
            });
        }
    };
    render() {
        return (
            <div className="form-group">
                <input
                    type="text"
                    className={
                        this.state.isFocused
                            ? "form-control focus--mouse"
                            : "form-control"
                    }
                    onFocus={this.toggleFocusLabel}
                    onBlur={e => this.toggleBlurLabel(e)}
                    id="inputPlaceholderLabel"
                    placeholder="Testo di esempio"
                />
                <label htmlFor="inputPlaceholderLabel" className="active">
                    Etichetta di esempio
                </label>
            </div>
        );
    }
}
