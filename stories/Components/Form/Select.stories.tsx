import { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import { Select } from "../../../src";

const meta: Meta<typeof Select> = {
    title: "Documentazione/Form/Select",
    component: Select,
    parameters: {
        docs: {
            canvas: { sourceState: "none" },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Select>;

const SelectClassicaHooks = () => {
    const [, setValue] = useState<string>();

    const handleChange = (selectedOption: string) => setValue(selectedOption);

    return (
        <Select id="example-reactstrap" label="Etichetta di esempio" onChange={handleChange}>
            <option value="">Scegli un'opzione</option>
            <option value="Value 1">Lorem ipsum dolor sit amet</option>
            <option value="Value 2">Duis vestibulum eleifend libero</option>
            <option value="Value 3">Phasellus pretium orci sed odio tempus</option>
            <option value="Value 4">Vestibulum bibendum ex vel augue porttitor sodales</option>
            <option value="Value 5">Praesent quis elementum turpis</option>
        </Select>
    );

};

export const SelectClassica: Story = {
    render: () => {
        return <SelectClassicaHooks />
    }
}

const SelectDisabilitataHooks = () => {
    const [, setValue] = useState<string>();

    const handleChange = (selectedOption: string) => setValue(selectedOption);

    return (
        <Select id="example-reactstrap" label="Etichetta di esempio" onChange={handleChange} disabled>
            <option value="">Scegli un'opzione</option>
            <option value="Value 1">Lorem ipsum dolor sit amet</option>
            <option value="Value 2">Duis vestibulum eleifend libero</option>
            <option value="Value 3">Phasellus pretium orci sed odio tempus</option>
            <option value="Value 4">Vestibulum bibendum ex vel augue porttitor sodales</option>
            <option value="Value 5">Praesent quis elementum turpis</option>
        </Select>
    );

};

export const SelectDisabilitata: Story = {
    render: () => {
        return <SelectDisabilitataHooks />
    }
}

const SelectConGruppiHooks = () => {
    const [, setValue] = useState<string>();

    const handleChange = (selectedOption: string) => setValue(selectedOption);

    return (
        <Select id="example-reactstrap" label="Etichetta di esempio" onChange={handleChange}>
            <option value="">Scegli un'opzione</option>
            <optgroup label="Gruppo 1">
                <option value="Value 1">Lorem ipsum dolor sit amet</option>
                <option value="Value 2">Duis vestibulum eleifend libero</option>
                <option value="Value 3">Phasellus pretium orci sed odio tempus</option>
            </optgroup>
            <optgroup label="Gruppo 2">
                <option value="Value 4">Vestibulum bibendum ex vel augue porttitor sodales</option>
                <option value="Value 5">Praesent quis elementum turpis</option>
            </optgroup>
        </Select>
    );

};

export const SelectConGruppi: Story = {
    render: () => {
        return <SelectConGruppiHooks />
    }
}
