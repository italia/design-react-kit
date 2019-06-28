import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import { Label } from "../../src";

const defaultOptions = [
    { value: "Value 1", label: "Opzione 1" },
    { value: "Value 2", label: "Opzione 2" },
    { value: "Value 3", label: "Opzione 3" },
    { value: "Value 4", label: "Opzione 4" },
    { value: "Value 5", label: "Opzione 5" }
];

const multiOptions = [
    { value: "Value 1", label: "Lorem ipsum dolor sit amet" },
    { value: "Value 2", label: "Duis vestibulum eleifend libero" },
    { value: "Value 3", label: "Phasellus pretium orci sed odio tempus" },
    {
        value: "Value 4",
        label: "Vestibulum bibendum ex vel augue porttitor sodales"
    },
    { value: "Value 5", label: "Praesent quis elementum turpis" }
];

export const groupOneOptions = [
    { value: "option-1", label: "Opzione 1" },
    { value: "option-2", label: "Opzione 2" }
];

export const groupTwoOptions = [
    { value: "option-3", label: "Opzione 3" },
    { value: "option-4", label: "Opzione 4" }
];

export const groupedOptions = [
    {
        label: "Gruppo 1",
        options: groupOneOptions
    },
    {
        label: "Gruppo 2",
        options: groupTwoOptions
    }
];

class SelectExample extends React.Component {
    state = {
        selectedOption: null,
        placeholder: "Scegli una opzione",
        isDisabled: false,
        isSearchable: false,
        isMulti: false,
        isClearable: false
    };
    handleChange = selectedOption => {
        this.setState({ selectedOption });
    };
    render() {
        const {
            selectedOption,
            disabled,
            search,
            multi,
            group,
            reset
        } = this.props;
        let options = defaultOptions;
        if (search) {
            options = multiOptions;
        } else if (multi) {
            options = defaultOptions;
        } else if (group) {
            options = groupedOptions;
        }

        return (
            <div class="bootstrap-select-wrapper">
                <Label for="selectExample">Etichetta di esempio</Label>
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    placeholder={this.state.placeholder}
                    isDisabled={disabled ? true : false}
                    isSearchable={search ? true : false}
                    isMulti={multi ? true : false}
                    isClearable={reset ? true : false}
                />
            </div>
        );
    }
}

export default SelectExample;

SelectExample.propTypes = {
    disabled: PropTypes.bool,
    reset: PropTypes.bool,
    search: PropTypes.bool,
    multi: PropTypes.bool,
    group: PropTypes.bool,
    placeholder: PropTypes.string
};
