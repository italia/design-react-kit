// import React from "react";

// import { Autocomplete, FormGroup } from "../../src";

// const defaultOptions = [
//     { value: "1", label: "Abruzzo" },
//     { value: "2", label: "Basilicata" },
//     { value: "3", label: "Calabria" },
//     { value: "4", label: "Campania" },
//     { value: "5", label: "Emilia Romagna" },
//     { value: "6", label: "Friuli Venezia Giulia" },
//     { value: "7", label: "Lazio" },
//     { value: "8", label: "Liguria" },
//     { value: "9", label: "Lombardia" },
//     { value: "10", label: "Marche" },
//     { value: "11", label: "Molise" },
//     { value: "12", label: "Piemonte" },
//     { value: "13", label: "Puglia" },
//     { value: "14", label: "Sardegna" },
//     { value: "15", label: "Sicilia" },
//     { value: "16", label: "Toscana" },
//     { value: "17", label: "Trentino Alto Adige" },
//     { value: "18", label: "Umbria" },
//     { value: "19", label: "Valle d'Aosta" },
//     { value: "20", label: "Veneto" }
// ];

// class AutocompleteExample extends React.Component {
//     constructor() {
//         super();
//         this.state = defaultOptions
//       }
//     handleChange = (e) =>{
//         this.setState({value: e.target.value});
//       }
//     render() {
//         let options = defaultOptions;
//         let defaultOption = this.props.defaultValue && defaultOptions[10];

//         return (
//             <FormGroup className="m-3">
//                 <div class="form-group">
//                     <input
//                         type="search"
//                         class="autocomplete"
//                         placeholder="Testo da cercare"
//                         id="autocomplete-regioni"
//                         name="autocomplete-regioni"
//                         onChange={this.handleChange}
//                         value={defaultOption}
//                     />
//                     <span class="autocomplete-icon" aria-hidden="true">
//                         <svg class="icon icon-sm">
//                             <use xlinkHref="/svg/sprite.svg#it-search" />
//                         </svg>
//                     </span>
//                     <label for="autocomplete-regioni" class="sr-only">
//                         Cerca nel sito
//                     </label>
//                 </div>
//             </FormGroup>
//         );
//     }
// }

// export default AutocompleteExample;

// import React from "react";
// import Select, { components } from "react-select";
// import PropTypes from "prop-types";

// const SelectContainer = ({ children, ...props }) => {
//     return (
//         <div>
//             <components.SelectContainer {...props}>
//                 {children}
//             </components.SelectContainer>
//         </div>
//     );
// };

// const Option = props => {
//     return (
//         <div className="select-pill text-primary">
//             <components.Option {...props} />
//         </div>
//     );
// };
// const MenuList = props => {
//     return (
//         <div>
//             <components.MenuList {...props}>
//                 {props.children}
//             </components.MenuList>
//         </div>
//     );
// };

// const DropdownIndicator = props => {
//     return (
//         <components.DropdownIndicator {...props}>
//             <span style={{ padding: "0px 5px" }} aria-hidden="true">
//                 <svg class="icon icon-sm">
//                     <use xlinkHref="/svg/sprite.svg#it-search" />
//                 </svg>
//             </span>
//         </components.DropdownIndicator>
//     );
// };

// const GroupHeading = props => (
//     <div>
//         <components.GroupHeading {...props} />
//     </div>
// );

// const IndicatorSeparator = ({ innerProps }) => {
//     return <span {...innerProps} />;
// };

// const CustomClearText = () => "Annulla";

// const ClearIndicator = props => {
//     const {
//         children = <CustomClearText />,
//         getStyles,
//         innerProps: { ref, ...restInnerProps }
//     } = props;
//     return (
//         <div className="select-pill text-primary" {...restInnerProps} ref={ref}>
//             <div style={{ padding: "0px 5px" }}>{children}</div>
//         </div>
//     );
// };

// const defaultOptions = [
//     { value: "Value 1", label: "Opzione 1" },
//     { value: "Value 2", label: "Opzione 2" },
//     { value: "Value 3", label: "Opzione 3" },
//     { value: "Value 4", label: "Opzione 4" },
//     { value: "Value 5", label: "Opzione 5" }
// ];

// const multiOptions = [
//     { value: "1", label: "Abruzzo" },
//     { value: "2", label: "Basilicata" },
//     { value: "3", label: "Calabria" },
//     { value: "4", label: "Campania" },
//     { value: "5", label: "Emilia Romagna" },
//     { value: "6", label: "Friuli Venezia Giulia" },
//     { value: "7", label: "Lazio" },
//     { value: "8", label: "Liguria" },
//     { value: "9", label: "Lombardia" },
//     { value: "10", label: "Marche" },
//     { value: "11", label: "Molise" },
//     { value: "12", label: "Piemonte" },
//     { value: "13", label: "Puglia" },
//     { value: "14", label: "Sardegna" },
//     { value: "15", label: "Sicilia" },
//     { value: "16", label: "Toscana" },
//     { value: "17", label: "Trentino Alto Adige" },
//     { value: "18", label: "Umbria" },
//     { value: "19", label: "Valle d'Aosta" },
//     { value: "20", label: "Veneto" }
// ];

// export const groupOneOptions = [
//     { value: "option-1", label: "Opzione 1" },
//     { value: "option-2", label: "Opzione 2" }
// ];

// export const groupTwoOptions = [
//     { value: "option-3", label: "Opzione 3" },
//     { value: "option-4", label: "Opzione 4" }
// ];

// export const groupedOptions = [
//     {
//         label: "Gruppo 1",
//         options: groupOneOptions
//     },
//     {
//         label: "Gruppo 2",
//         options: groupTwoOptions
//     }
// ];

// class AutocompleteExample extends React.Component {
//     state = {
//         selectedOption: null,
//         placeholder: "Testo da cercare",
//         isDisabled: false,
//         isSearchable: true,
//         isMulti: false,
//         isClearable: false
//     };
//     handleChange = selectedOption => {
//         this.setState({ selectedOption });
//     };
//     render() {
//         const {
//             selectedOption,
//             disabled,
//             search,
//             multi,
//             group,
//             reset
//         } = this.props;
//         let options = multiOptions;
//         return (
//             <div class="autocomplete">
//                 <label for="autocompleteExample" class="sr-only">
//                     Cerca nel sito
//                 </label>
//                 <Select
//                     components={{
//                         MenuList,
//                         Option,
//                         SelectContainer,
//                         DropdownIndicator,
//                         ClearIndicator,
//                         GroupHeading,
//                         IndicatorSeparator: null
//                     }}
//                     id="autocompleteExample"
//                     value={selectedOption}
//                     onChange={this.handleChange}
//                     options={options}
//                     placeholder={this.state.placeholder}
//                     isDisabled={disabled ? true : false}
//                     isMulti={multi ? true : false}
//                     isClearable={reset ? true : false}
//                     aria-label={this.state.placeholder}
//                 />
//             </div>
//         );
//     }
// }

// export default AutocompleteExample;

// AutocompleteExample.propTypes = {
//     disabled: PropTypes.bool,
//     reset: PropTypes.bool,
//     search: PropTypes.bool,
//     multi: PropTypes.bool,
//     group: PropTypes.bool,
//     placeholder: PropTypes.string
// };

import React, { Component } from "react";
import { components } from "react-select";
import AsyncSelect from "react-select/async";

const DropdownIndicator = props => {
    return (
        <components.DropdownIndicator {...props}>
            <span style={{ padding: "0px 5px" }} aria-hidden="true">
                <svg class="icon icon-sm">
                    <use xlinkHref="/svg/sprite.svg#it-search" />
                </svg>
            </span>
        </components.DropdownIndicator>
    );
};

const Input = props => {
    if (props.isHidden) {
        return <components.Input {...props} />;
    }
    return (
        <div style={{ border: `1px dotted blue}` }}>
            <components.Input {...props} />
        </div>
    );
};

const multiOptions = [
    { value: "1", label: "Abruzzo" },
    { value: "2", label: "Basilicata" },
    { value: "3", label: "Calabria" },
    { value: "4", label: "Campania" },
    { value: "5", label: "Emilia Romagna" },
    { value: "6", label: "Friuli Venezia Giulia" },
    { value: "7", label: "Lazio" },
    { value: "8", label: "Liguria" },
    { value: "9", label: "Lombardia" },
    { value: "10", label: "Marche" },
    { value: "11", label: "Molise" },
    { value: "12", label: "Piemonte" },
    { value: "13", label: "Puglia" },
    { value: "14", label: "Sardegna" },
    { value: "15", label: "Sicilia" },
    { value: "16", label: "Toscana" },
    { value: "17", label: "Trentino Alto Adige" },
    { value: "18", label: "Umbria" },
    { value: "19", label: "Valle d'Aosta" },
    { value: "20", label: "Veneto" }
];

const filterOptions = inputValue => {
    return multiOptions.filter(i =>
        i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
};

const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
        callback(filterOptions(inputValue));
    }, 1000);
};

export default class AutocompleteExample extends React.Component {
    state = { inputValue: "", placeholder: "Testo da cercare" };

    handleInputChange = newValue => {
        const inputValue = newValue.replace(/\W/g, "");
        this.setState({ inputValue });
        return inputValue;
    };
    render() {
        return (
            <div className="form-group">
                <AsyncSelect
                    id="autocomplete-regioni"
                    components={{
                        DropdownIndicator,
                        Input,
                        IndicatorSeparator: null
                    }}
                    cacheOptions
                    loadOptions={loadOptions}
                    defaultOptions
                    placeholder={this.state.placeholder}
                    onInputChange={this.handleInputChange}
                    
                />
                <label for="autocomplete-regioni" class="sr-only">
                    Cerca nel sito
                </label>
            </div>
        );
    }
}
