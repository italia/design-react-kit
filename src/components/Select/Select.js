// Customized components for https://github.com/JedWatson/react-select/tree/v2/src
// We might want to follow up on https://github.com/JedWatson/react-select/issues/2393

import React, { Component } from "react";
import ReactDOM from "react-dom";
import Select from "react-select";

const SelectContainer = props => {
  const { children, innerProps, selectProps } = props;
  const { menuIsOpen, bsSize } = selectProps;

  const classNames = [
    "select-container select-wrapper custom-select",
    menuIsOpen ? "show" : "",
    bsSize ? `form-control-${bsSize}` : ""
  ].join(" ");

  return (
    <div className={classNames} {...innerProps}>
      {children}
    </div>
  );
};

const Control = props => {
  const { children, innerProps } = props;
  const { innerRef, ...rest } = innerProps;
  return (
    <div className="select-control" {...rest}>
      <span className="caret it-expand" />
      {children}
    </div>
  );
};

class ValueContainer extends Component {
  shouldScrollBottom = false;
  node = null;

  componentWillUpdate() {
    if (!this.props.isMulti) return;

    // scroll only if the user was already at the bottom
    const total = this.node.scrollTop + this.node.offsetHeight;
    this.shouldScrollBottom = total === this.node.scrollHeight;
  }

  componentDidUpdate() {
    const { isMulti } = this.props;

    if (!isMulti) return;

    // ensure we're showing items being added by forcing scroll to the bottom
    if (this.shouldScrollBottom && this.node) {
      this.node.scrollTop = this.node.scrollHeight;
    }
  }

  getScrollContainer = ref => {
    this.node = ref;
  };

  render() {
    const { isMulti, hasValue, selectProps } = this.props;
    const { placeholder, toggleMenuIsOpen } = selectProps;

    let selected = placeholder || "";
    if (hasValue) {
      const value = this.props.getValue();
      selected = value.map(option => option.label);
      selected = selected.length > 1 ? selected.join(", ") : selected;
    }

    return (
      <div
        ref={isMulti ? this.getScrollContainer : undefined}
        className="select-control-value-container"
      >
        <Placeholder
          handleInputClick={toggleMenuIsOpen}
          placeholder={selected}
        />
        <Input selectProps={selectProps} />
      </div>
    );
  }
}

function getMenuPlacement({
  maxHeight,
  menuEl,
  minHeight,
  placement,
  shouldScroll
}) {
  const optimisticState = { placement: "bottom", maxHeight };
  return optimisticState;
}

class Menu extends Component {
  state = {
    maxHeight: this.props.maxMenuHeight,
    placement: null
  };

  getPlacement = ref => {
    const {
      minMenuHeight,
      maxMenuHeight,
      menuPlacement,
      scrollMenuIntoView
    } = this.props;

    if (!ref) return;

    const state = getMenuPlacement({
      maxHeight: maxMenuHeight,
      menuEl: ref,
      minHeight: minMenuHeight,
      placement: menuPlacement,
      shouldScroll: scrollMenuIntoView
    });

    this.setState(state);
  };

  getState = () => {
    const { menuPlacement } = this.props;
    const placement = this.state.placement || coercePlacement(menuPlacement);

    return { ...this.props, placement, maxHeight: this.state.maxHeight };
  };

  styles = {
    position: "absolute",
    transform: "translate3d(0px, 45px, 0px)",
    top: 0,
    left: 0,
    willChange: "transform",
    display: "block"
  };

  render() {
    const { children, innerProps } = this.props;

    return (
      <div
        className="select-menu dropdown-menu dropdown-menu-container"
        style={this.styles}
        ref={this.getPlacement}
        {...innerProps}
      >
        {children}
      </div>
    );
  }
}

class MenuList extends Component {
  state = { inputValue: "" };

  onInputChange = ({ target }) => {
    this.setState({
      inputValue: target.value
    });
  };

  styles = { marginTop: 45 };

  render() {
    const { children, innerProps, selectProps } = this.props;
    const { innerRef, ...rest } = innerProps;
    const { isSearchable, placeholder } = selectProps;

    return (
      <div className="select-menu-list dropdown-menu-list" {...rest}>
        {(() => {
          if (isSearchable) {
            return <div style={this.styles} />;
          }
        })()}
        <li className="select-menu-list-placeholder disabled">
          <span>{placeholder}</span>
        </li>
        {children}
      </div>
    );
  }
}

const Option = props => {
  const { children, isSelected, innerProps } = props;
  const { innerRef, ...rest } = innerProps;
  const classNames = [
    "select-menu-option dropdown-menu-list-option",
    isSelected ? "active" : ""
  ].join(" ");

  return (
    <li className={classNames} {...rest}>
      <span>{children}</span>
    </li>
  );
};

const Placeholder = props => {
  const { placeholder, innerProps, handleInputClick } = props;
  return (
    <input
      onClick={() => handleInputClick()}
      type="text"
      className="select-placeholder dropdown select-dropdown"
      value={placeholder}
      readOnly
      {...innerProps}
    />
  );
};

class Input extends Component {
  styles = {
    position: "absolute",
    // zIndex for menu is 999
    zIndex: 1000,
    backgroundColor: "#FFF",
    margin: "0 24px 0 6px",
    top: 45,
    right: 0,
    left: 0,
    height: 45
  };

  render() {
    const { selectProps, handleBlur, ...props } = this.props;
    const {
      searchPlaceholder,
      menuIsOpen,
      isSearchable,
      updateSearchInput,
      searchInput
    } = selectProps;

    const shouldShow = !isSearchable || !menuIsOpen ? "d-none" : "";
    const classNames = `select-input-container search-wrap ${shouldShow}`;

    return (
      <div className={classNames} style={this.styles}>
        <input
          type="text"
          {...props}
          className="select-input search"
          placeholder={searchPlaceholder}
          value={searchInput}
          onChange={({ target }) => updateSearchInput(target.value)}
        />
      </div>
    );
  }
}

export const GroupHeading = (props: any) => {
  const { children } = props;

  return (
    <li className="select-menu-group-heading optgroup">
      <span>{children}</span>
    </li>
  );
};

class SelectComponent extends Component {
  state = {
    menuIsOpen: false,
    searchInput: ""
  };

  components = {
    SelectContainer,
    Control,
    DropdownIndicator: null,
    IndicatorsContainer: () => <div className="select-indicators" />,
    ValueContainer,
    Menu,
    MenuList,
    Option,
    MultiValue: () => <div className="multi-value-container" />,
    SingleValue: () => <div className="single-value-container" />,
    GroupHeading,
    ...this.props.components
  };

  componentDidMount() {
    document.addEventListener("touchend", this.handle, true);
    document.addEventListener("click", this.handle, true);
  }

  componentWillUnmount() {
    document.removeEventListener("touchend", this.handle, true);
    document.removeEventListener("click", this.handle, true);
  }

  handle = e => {
    if (e.type === "touchend") this.isTouch = true;
    if (e.type === "click" && this.isTouch) return;

    const el = ReactDOM.findDOMNode(this.container);
    if (el && !el.contains(e.target)) this.toggleMenuIsOpen(false);
  };

  toggleMenuIsOpen = status => {
    const { disabled } = this.props;
    if (disabled) return;

    const isDefined = status !== undefined;
    this.setState((prevState, props) => {
      return { menuIsOpen: isDefined ? status : !prevState.menuIsOpen };
    });
  };

  updateSearchInput = searchInput => {
    this.setState({ searchInput });
  };

  filterOptions = options => {
    if (this.state.searchInput) {
      const searchInput = this.state.searchInput.toLowerCase();
      return options.filter(option => {
        const label = option.label.toLowerCase();
        const matches = label.match(searchInput);
        return matches !== null;
      });
    }

    return options;
  };

  render() {
    const { menuIsOpen, searchInput } = this.state;
    const { options, isSearchable, disabled } = this.props;

    return (
      <Select
        {...this.props}
        ref={el => {
          this.container = el;
        }}
        isDisabled={disabled}
        menuIsOpen={menuIsOpen}
        hideSelectedOptions={false}
        backspaceRemovesValue={false}
        options={this.filterOptions(options)}
        searchInput={searchInput}
        isSearchable={!!isSearchable}
        toggleMenuIsOpen={this.toggleMenuIsOpen}
        updateSearchInput={this.updateSearchInput}
        components={this.components}
      />
    );
  }
}

export default SelectComponent;
