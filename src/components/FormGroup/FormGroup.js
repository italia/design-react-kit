import React, { Component } from "react";

import { FormGroup as ReactStrapFormGroup } from "reactstrap";
import { Input, Label } from "../../../src";

import PasswordInput from "../PasswordInput/PasswordInput";
import Autocomplete from "../Autocomplete/Autocomplete";

class FormGroup extends Component {
    state = {
        active: this.props.active || false,
        value: null
    };

    onFocus = (callback, active = true) => {
        this.setState(
            {
                active
            },
            () => {
                callback && callback();
            }
        );
    };

    onBlur = (callback, active = false) => {
        this.setState(
            {
                active
            },
            () => {
                callback && callback();
            }
        );
    };

    onChange = (callback, event) => {
        let value;
        if (event && event.persist) {
            // SyntheticEvent
            event.persist();
            value = event.target.value;
        } else if (event.label) {
            // Autocomplete
            value = event.label;
        }

        this.setState(
            {
                value
            },
            () => {
                callback && callback(event);
            }
        );
    };

    render() {
        const { active, value } = this.state;
        const { children, className, col, ...rest } = this.props;

        const hasValue = !!value;

        const classNames = [
            className,
            active ? "active" : "",
            col ? "col" : ""
        ].join(" ");

        return (
            <ReactStrapFormGroup {...rest} className={classNames}>
                {(() => {
                    {
                        return React.Children.map(children, child => {
                            if (child === null) return;

                            const {
                                onFocus,
                                onBlur,
                                onChange,
                                className
                            } = child.props;

                            switch (child.type) {
                                case Input:
                                case PasswordInput:
                                case Autocomplete:
                                    let isLabelActive = null;
                                    if (child.type === Autocomplete) {
                                        isLabelActive = {
                                            isLabelActive: hasValue
                                        };
                                    }

                                    return React.cloneElement(child, {
                                        ...child.props,
                                        onFocus: () => {
                                            this.onFocus(onFocus);
                                        },
                                        onBlur: () => {
                                            this.onBlur(onBlur);
                                        },
                                        onChange: e => {
                                            this.onChange(onChange, e);
                                        },
                                        ...isLabelActive
                                    });
                                case Label:
                                    let hasChildValue = false;

                                    React.Children.toArray(children)
                                        .filter(child => {
                                            switch (child.type) {
                                                case Input:
                                                case PasswordInput:
                                                    return true;
                                                default:
                                                    return false;
                                            }
                                        })
                                        .map(child => {
                                            if (child.props.value) {
                                                hasChildValue = true;
                                            }
                                        });

                                    const classNames =
                                        hasValue || hasChildValue
                                            ? [className, "active"].join(" ")
                                            : className;

                                    return React.cloneElement(child, {
                                        ...child.props,
                                        className: classNames
                                    });
                                default:
                                    return child;
                            }
                        });
                    }
                })()}
            </ReactStrapFormGroup>
        );
    }
}

FormGroup.defaultProps = ReactStrapFormGroup.defaultProps;
FormGroup.propTypes = ReactStrapFormGroup.propTypes;

export default FormGroup;
