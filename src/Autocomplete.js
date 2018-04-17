// Customized components for https://github.com/JedWatson/react-select/tree/v2/src

import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Select, { components as defaultComponents } from "react-select";

const SelectContainer = props => {
  const { children, innerProps, selectProps } = props;
  const { bsSize } = selectProps;

  const classNames = [
    "autocomplete-container autocomplete-wrapper custom-autocomplete",
    bsSize ? `form-control-${bsSize}` : ""
  ].join(" ");

  return (
    <div className={classNames} {...innerProps}>
      {children}
    </div>
  );
};

const Control = props => {
  const { children, innerProps, selectProps } = props;
  const { innerRef, ...rest } = innerProps;
  const { inputValue, onInputClear } = selectProps;

  const hasValue = !!inputValue;

  return (
    <div className="autocomplete-control" {...rest}>
      <button
        className="autocomplete-clear"
        style={{ visibility: hasValue ? "visible" : "hidden" }}
        onClick={onInputClear}
      >
        <svg
          fill="#000000"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          xmlns="https://www.w3.org/2000/svg"
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
      {children}
    </div>
  );
};

class ValueContainer extends Component {
  render() {
    const { selectProps, children } = this.props;
    const { components } = selectProps;

    return (
      <div className="autocomplete-value-container">
        {(() => {
          return React.Children.map(children, child => {
            if (child === null) return;

            const { isDisabled, ...rest } = child.props;
            switch (child.type) {
              case defaultComponents.Input:
              case components.Input:
                return <Input {...rest} selectProps={selectProps} />;
                break;
              default:
                return child;
                break;
            }
          });
        })()}
      </div>
    );
  }
}

class MenuList extends Component {
  styles = {
    top: -16
  };

  render() {
    const { children, innerProps } = this.props;
    const { innerRef, ...rest } = innerProps;

    return (
      <ul className="autocomplete-wrap" style={this.styles} {...rest}>
        {children}
      </ul>
    );
  }
}

const Option = props => {
  const { children, innerProps } = props;
  const { innerRef, ...rest } = innerProps;

  return <li {...rest}>{children}</li>;
};

class Input extends Component {
  render() {
    const { getStyles, innerRef, isHidden, selectProps, ...rest } = this.props;
    const classNames = "autocomplete-input-container search-wrap";

    return (
      <div className={classNames}>
        <input {...rest} type="search" className="form-control autocomplete" />
      </div>
    );
  }
}

class AutocompleteComponent extends Component {
  state = {
    inputText: ""
  };

  static defaultProps = {
    onInputChange: null,
    onInputClear: null,
    onChange: null
  };

  components = {
    SelectContainer,
    Control,
    DropdownIndicator: null,
    IndicatorsContainer: () => <div className="select-indicators" />,
    ValueContainer,
    MenuList,
    Option,
    SingleValue: () => <div className="single-value-container" />,
    ...this.props.components
  };

  onInputChange = (inputText, { action }) => {
    // Do not clear on blur
    if (action && ["input-blur", "menu-close"].includes(action)) {
      return;
    }

    this.setState(
      {
        inputText
      },
      () => {
        this.props.onInputChange &&
          this.props.onInputChange(inputText, { action });
      }
    );
  };

  onInputClear = () => {
    this.setState(
      {
        inputText: ""
      },
      () => {
        this.props.onInputClear && this.props.onInputClear();
      }
    );
  };

  onChange = selected => {
    this.setState(
      {
        inputText: selected.label
      },
      () => {
        this.props.onChange && this.props.onChange(selected);
      }
    );
  };

  render() {
    const { inputText } = this.state;
    const { options, placeholder, isLabelActive } = this.props;

    const classNames = isLabelActive ? "active" : "";

    return (
      <Fragment>
        <Select
          {...this.props}
          onInputChange={this.onInputChange}
          onInputClear={this.onInputClear}
          onChange={this.onChange}
          placeholder={null}
          hideSelectedOptions={false}
          backspaceRemovesValue={false}
          isSearchable={true}
          options={options}
          components={this.components}
          inputValue={inputText}
        />
        <label className={classNames} style={{ pointerEvents: "none" }}>
          {placeholder}
        </label>
      </Fragment>
    );
  }
}

export default AutocompleteComponent;
