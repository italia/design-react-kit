import React, { Component } from "react";
import PropTypes from "prop-types";

import { FormGroup, Input, Label } from "reactstrap";

import PasswordInput from "./PasswordInput";
import Autocomplete from "./Autocomplete";

class EnhancedFormGroup extends Component {
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
      <FormGroup {...rest} className={classNames}>
        {(() => {
          {
            return React.Children.map(children, child => {
              if (child === null) return;

              const { onFocus, onBlur, onChange, className } = child.props;

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
                  break;
                case Label:
                  const classNames = hasValue
                    ? [className, "active"].join(" ")
                    : className;

                  return React.cloneElement(child, {
                    ...child.props,
                    className: classNames
                  });
                  break;
                default:
                  return child;
                  break;
              }
            });
          }
        })()}
      </FormGroup>
    );
  }
}

EnhancedFormGroup.propTypes = {
  ...FormGroup.propTypes
};

export default EnhancedFormGroup;
