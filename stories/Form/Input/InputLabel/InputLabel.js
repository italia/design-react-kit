import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    infoText: PropTypes.string,
    readOnly: PropTypes.bool,
    normalized: PropTypes.bool
};
const defaultProps = {
    type: "text"
};

export default class InputLabel extends React.Component {
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
        const {
            label,
            placeholder,
            infoText,
            normalized,
            ...attributes
        } = this.props;

        if (normalized) {
            return (
                <div className="form-group">
                    <input
                        {...attributes}
                        type="text"
                        className={
                            this.state.isFocused
                                ? "form-control-plaintext focus--mouse"
                                : "form-control-plaintext"
                        }
                        onFocus={this.toggleFocusLabel}
                        onBlur={e => this.toggleBlurLabel(e)}
                        id="inputLabel"
                        readOnly
                    />
                    <label
                        htmlFor="inputLabel"
                        className={this.state.isFocused ? "active" : ""}
                    >
                        {this.props.label}
                    </label>
                    <small className="form-text text-muted">
                        {this.props.infoText}
                    </small>
                </div>
            );
        }

        return (
            <div className="form-group">
                <input
                    {...attributes}
                    type="text"
                    className={
                        this.state.isFocused
                            ? "form-control focus--mouse"
                            : "form-control"
                    }
                    onFocus={this.toggleFocusLabel}
                    onBlur={e => this.toggleBlurLabel(e)}
                    id="inputLabel"
                />
                <label
                    htmlFor="inputLabel"
                    className={this.state.isFocused ? "active" : ""}
                >
                    {this.props.label}
                </label>
                <small className="form-text text-muted">
                    {this.props.infoText}
                </small>
            </div>
        );
    }
}
InputLabel.propTypes = propTypes;
InputLabel.defaultProps = defaultProps;
