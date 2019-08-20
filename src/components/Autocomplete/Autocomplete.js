// /* eslint no-unused-vars: ["error", { "ignoreRestSiblings": true }] */
// // Customized components for https://github.com/JedWatson/react-select/tree/v2/src

// import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
// import ReactSelect, { SelectBase, components as defaultComponents } from 'react-select';

// import { SelectPropTypes } from '../Select/Select';

// const SelectContainer = (props) => {
//   const { children, innerProps, selectProps } = props;
//   const { bsSize } = selectProps;

//   const classNames = [
//     'autocomplete-container autocomplete-wrapper custom-autocomplete',
//     bsSize ? `form-control-${bsSize}` : '',
//   ].join(' ');

//   return (
//     <div className={classNames} {...innerProps}>
//       {children}
//     </div>
//   );
// };

// SelectContainer.propTypes = {
//   selectProps: PropTypes.shape(SelectPropTypes),
//   children: PropTypes.node,
//   innerProps: PropTypes.any,
// };

// const Control = (props) => {
//   const { children, innerProps } = props;
//   const { innerRef, ...rest } = innerProps;

//   return (
//     <div className="autocomplete-control" {...rest}>
//       {children}
//     </div>
//   );
// };

// Control.propTypes = {
//   selectProps: PropTypes.shape(SelectPropTypes),
//   children: PropTypes.node,
//   innerProps: PropTypes.any,
// };

// class ValueContainer extends Component {
//   render() {
//     const { children, selectProps } = this.props;
//     const { components } = selectProps;

//     return (
//       <div className="autocomplete-value-container">
//         {(() => React.Children.map(children, (child) => {
//           if (child === null) return;

//           const { isDisabled, cx, ...rest } = child.props;
//           switch (child.type) {
//             case defaultComponents.Input:
//             case components.Input:
//               return <Input
//                 {...rest}
//                 selectProps={selectProps}
//               />;
//             default:
//               return child;
//           }
//         }))()}
//       </div>
//     );
//   }
// }

// ValueContainer.propTypes = {
//   selectProps: PropTypes.shape(SelectPropTypes),
//   children: PropTypes.node,
// };

// class MenuList extends Component {
//   styles = {
//     top: -16,
//   };

//   render() {
//     const { children } = this.props;

//     return (
//       <ul className="autocomplete-wrap" style={this.styles}>
//         {children}
//       </ul>
//     );
//   }
// }

// MenuList.propTypes = {
//   children: PropTypes.node,
//   innerProps: PropTypes.any,
// };

// const Option = (props) => {
//   const { children, innerProps } = props;
//   const { innerRef, ...rest } = innerProps;

//   return <li {...rest}>{children}</li>;
// };

// Option.propTypes = {
//   children: PropTypes.node,
//   innerProps: PropTypes.any,
// };

// class Input extends Component {
//   render() {
//     const {
//       getStyles,
//       innerRef,
//       isHidden,
//       selectProps,
//       ...rest
//     } = this.props;
//     const classNames = 'autocomplete-input-container search-wrap';

//     return (
//       <div className={classNames}>
//         <input
//           {...rest}
//           type="search"
//           className="form-control autocomplete"
//         />
//       </div>
//     );
//   }
// }

// Input.propTypes = {
//   selectProps: PropTypes.shape(SelectPropTypes),
//   getStyles: PropTypes.func,
//   isHidden: PropTypes.bool,
//   innerRef: PropTypes.func,
// };

// class Autocomplete extends Component {
//   state = {
//     inputText: '',
//   };

//   componentDidMount() {
//     const { defaultValue } = this.props;

//     // It has to trigger its `FormGroup` as well
//     if (defaultValue) {
//       this.onChange(defaultValue);
//     }
//   }

//   components = {
//     SelectContainer,
//     Control,
//     DropdownIndicator: null,
//     IndicatorsContainer: () => <div className="select-indicators" />,
//     ValueContainer,
//     MenuList,
//     Option,
//     SingleValue: () => <div className="single-value-container" />,
//     ...this.props.components,
//   };

//   onInputChange = (inputText, { action }) => {
//     // Do not clear on blur
//     if (action && ['input-blur', 'menu-close'].includes(action)) {
//       return;
//     }

//     this.setState(
//       {
//         inputText,
//       },
//       () => {
//         if (this.props.onInputChange) {
//           this.props.onInputChange(inputText, { action });
//         }
//       },
//     );
//   };

//   onInputClear = () => {
//     this.setState(
//       {
//         inputText: '',
//       },
//       () => {
//         if (this.props.onInputClear) {
//           this.props.onInputClear();
//         }
//       },
//     );
//   };

//   onChange = (selected) => {
//     this.setState(
//       {
//         inputText: selected.label,
//       },
//       () => {
//         if (this.props.onChange) {
//           this.props.onChange(selected);
//         }
//       },
//     );
//   };

//   render() {
//     const { inputText } = this.state;
//     const {
//       options,
//       placeholder,
//       menuIsOpen,
//       ...rest
//     } = this.props;

//     const isLabelActive = !!inputText;

//     const classNames = isLabelActive ? 'active' : '';

//     return (
//       <Fragment>
//         <ReactSelect
//           {...rest}
//           onInputChange={this.onInputChange}
//           onInputClear={this.onInputClear}
//           onChange={this.onChange}
//           placeholder={null}
//           hideSelectedOptions={false}
//           backspaceRemovesValue={false}
//           isSearchable={true}
//           options={options}
//           components={this.components}
//           inputValue={inputText}
//           aria-label={placeholder}
//         />
//         <label className={classNames} style={{ pointerEvents: 'none' }}>
//           {placeholder}
//         </label>
//       </Fragment>
//     );
//   }
// }

// export default Autocomplete;

// Autocomplete.propTypes = SelectPropTypes;

// Autocomplete.defaultProps = SelectBase.defaultProps;
