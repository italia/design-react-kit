import { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import { Input } from "../../../src";

const meta: Meta<typeof Input> = {
    title: "Documentazione/Form/InputNumerico",
    component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

const InputNumericoDimensionamentoHooks = () => {
    const [value, setValue] = useState("100");
    const [value50, setValue50] = useState("100");
    return (
        <>
            <div className="w-100">
                <Input
                    id="example-w100"
                    type="number"
                    label="Input Number inserito in una colonna a tutta larghezza"
                    incrementLabel="Aumenta il valore  di 1"
                    decrementLabel="Diminuisci il valore di 1"
                    value={value}
                    onChange={(ev) => {
                        setValue(ev.target.value);
                    }}
                />
            </div>
            <div className="w-50 mt-5">
                <Input
                    id="example-w50"
                    type="number"
                    label="Input Number inserito in una colonna di larghezza 50%"
                    incrementLabel="Aumenta il valore  di 1"
                    decrementLabel="Diminuisci il valore di 1"
                    value={value50}
                    onChange={(ev) => {
                        setValue50(ev.target.value);
                    }}
                />
            </div>
        </>
    );

};

export const InputNumericoDimensionamento: Story = {
    render: () => {
        return <InputNumericoDimensionamentoHooks />
    },
    parameters: {
        docs: {
            canvas: { sourceState: "none" },
        },
    },
}

const InputNumericoStepsHooks = () => {
    const [value, setValue] = useState("100");
    return (
        <Input
            id="example-steps"
            type="number"
            label="Min, Max & Step"
            incrementLabel="Aumenta il valore  di 500"
            decrementLabel="Diminuisci il valore di 500"
            value={value}
            min={-2000}
            max={15000}
            step={500}
            onChange={(ev) => {
                setValue(ev.target.value);
            }}
        />
    );
};

export const InputNumericoSteps: Story = {
    render: () => {
        return <InputNumericoStepsHooks />
    },
    parameters: {
        docs: {
            canvas: { sourceState: "none" },
        },
    },
}


export const InputNumericoDisabilitato: Story = {
    render: () => {
        return <Input type="number" label="Disabled" value="50" min={0} max={100} disabled />;
    },
};

const InputNumericoValutaHooks = () => {
    const [value, setValue] = useState("100");

    return (
        <Input
            id="example-currency"
            addonText="€"
            type="currency"
            label="Currency"
            incrementLabel="Aumenta il valore di 1 euro"
            decrementLabel="Diminuisci il valore di 1 euro"
            value={value}
            step="any"
            min={3.5}
            max={100}
            onChange={(ev) => {
                setValue(ev.target.value);
            }}
        />
    );
};

export const InputNumericoValuta: Story = {
    render: () => {
        return <InputNumericoValutaHooks />
    },
    parameters: {
        docs: {
            canvas: { sourceState: "none" },
        },
    },
}


const InputNumericoPercentualeHooks = () => {
    const [value, setValue] = useState("100");

    return (
        <Input
            id="example-percentage"
            addonText="%"
            type="percentage"
            label="Percentage"
            incrementLabel="Aumenta il valore in percentuale di 1"
            decrementLabel="Diminuisci il valore in percentuale di 1"
            value={value}
            min={0}
            max={100}
            onChange={(ev) => {
                setValue(ev.target.value);
            }}
        />
    );
};

export const InputNumericoPercentuale: Story = {
    render: () => {
        return <InputNumericoPercentualeHooks />
    },
    parameters: {
        docs: {
            canvas: { sourceState: "none" },
        },
    },
}

const InputNumericoRidimensionamentoHooks = () => {
    const [value, setValue] = useState("100");

    return (
        <Input
            id="example-adaptive"
            type="adaptive"
            label="Ridimensionamento"
            incrementLabel="Aumenta il valore  di 1"
            decrementLabel="Diminuisci il valore di 1"
            value={value}
            placeholder={"0"}
            min={0}
            max={99999999999}
            onChange={(ev) => {
                setValue(ev.target.value);
            }}
        />
    );
};

export const InputNumericoRidimensionamento: Story = {
    render: () => {
        return <InputNumericoRidimensionamentoHooks />
    },
    parameters: {
        docs: {
            canvas: { sourceState: "none" },
        },
    },
}
