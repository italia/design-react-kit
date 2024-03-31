import { Meta, StoryObj } from "@storybook/react";
import Autocomplete from "accessible-autocomplete/react"; // Reference to https://www.npmjs.com/package/accessible-autocomplete
import React, { useState } from "react";
import { FormGroup, Icon, Input, TextArea } from "../../../src";

const meta: Meta<typeof Input> = {
    title: "Documentazione/Form/Input",
    component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

const multiOptions: { value: string, label: string }[] = [
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
    { value: "20", label: "Veneto" },
];

export const EsempiDiCampiDiInput: Story = {
    render: () => {
        return (
            <div>
                <Input type="text" label="Campo di tipo testuale" id="exampleInputText" />
                <Input type="email" label="Campo di tipo email" id="exampleInputEmail" />
                <Input type="number" label="Campo di tipo numerico" id="exampleInputNumber" />
                <Input type="tel" label="Campo di tipo telefono" id="exampleInputTel" />
            </div>
        );
    }
};

export const UtilizzoDiPlaceholderELabel: Story = {
    render: () => (
        <div>
            <Input label="Etichetta di esempio" id="exampleLabel" />
            <Input label="Etichetta di esempio" type="text" placeholder="Testo di esempio" id="examplePlaceholder" />
            <Input label="Etichetta di esempio" type="text" placeholder="Testo di esempio" infoText="Ulteriore testo informativo" id="exampleInfoText" />
            <Input
                label="Etichetta di esempio"
                type="text"
                placeholder="Testo di esempio"
                validationText="Campo non valido"
                id="examplevalidationText"
                valid={false}
            />
        </div>
    )
};

export const InputConIconaOBottoni: Story = {
    render: () => {
        const [isFocused1, toggleFocus1] = useState(false);
        const [isFocused2, toggleFocus2] = useState(false);
        const [isFocused3, toggleFocus3] = useState(false);

        const toggleFocusLabel1 = () => toggleFocus1(true);
        // @ts-ignore: ignore types for now
        const toggleBlurLabel1 = (e) => {
            if (e.target.value === "") {
                toggleFocus1(!isFocused1);
            }
        };
        const toggleFocusLabel2 = () => toggleFocus2(true);
        // @ts-ignore: ignore types for now
        const toggleBlurLabel2 = (e) => {
            if (e.target.value === "") {
                toggleFocus2(!isFocused2);
            }
        };
        const toggleFocusLabel3 = () => toggleFocus3(true);
        // @ts-ignore: ignore types for no}w
        const toggleBlurLabel3 = (e) => {
            if (e.target.value === "") {
                toggleFocus3(!isFocused3);
            }
        };
        return (
            <div>
                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-text">
                            <Icon icon="it-pencil" aria-hidden size="sm" />
                        </span>
                        <label htmlFor="input-group-1" className={isFocused1 ? "active" : ""}>
                            Con Etichetta
                        </label>
                        <input
                            type="text"
                            className={isFocused1 ? "form-control focus--mouse" : "form-control"}
                            onFocus={toggleFocusLabel1}
                            onBlur={toggleBlurLabel1}
                            id="input-group-1"
                            name="input-group-1"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-text">
                            <Icon icon="it-pencil" color="danger" aria-hidden size="sm" />
                        </span>
                        <label htmlFor="input-group-2" className="active">
                            Con Etichetta e placeholder
                        </label>
                        <input
                            type="text"
                            className={isFocused2 ? "form-control focus--mouse" : "form-control"}
                            onFocus={toggleFocusLabel2}
                            onBlur={toggleBlurLabel2}
                            id="input-group-2"
                            name="input-group-2"
                            placeholder="Lorem Ipsum"
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-text">
                            <Icon icon="it-pencil" color="primary" aria-hidden size="sm" />
                        </span>
                        <label htmlFor="input-group-3" className={isFocused3 ? "active" : ""}>
                            Con Etichetta e bottone di tipo primary
                        </label>
                        <input
                            type="text"
                            className={isFocused3 ? "form-control focus--mouse" : "form-control"}
                            onFocus={toggleFocusLabel3}
                            onBlur={toggleBlurLabel3}
                            id="input-group-3"
                            name="input-group-3"
                        />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button" id="button-3">
                                Invio
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
    parameters: {
        docs: {
            canvas: { sourceState: "none" },
        },
    },
};

export const InputPassword: Story = {
    args: {
        type: "password",
        id: "exampleInputPassword",
        label: "Password con label, placeholder e testo di aiuto",
        infoText: "Inserisci almeno 8 caratteri e una lettera maiuscola",
    }
};

export const Disabilitato: Story = {
    args: {
        label: "Contenuto disabilitato",
        id: "exampleDisabled",
        disabled: true
    }
}

export const Readonly: Story = {
    args: {
        label: "Contenuto in sola lettura",
        id: "examplereadOnly",
        readOnly: true
    }
}

export const ReadonlyNormalizzato: Story = {
    args: {
        type: 'text',
        label: "Contenuto in sola lettura",
        id: "exampleNormalized",
        normalized: true
    }
}

export const _InputAutocompleteConDatiAccessibile: Story = {
    render: () => {
        const suggest = (query: any, populateResults: any) => {
            const filteredResults = multiOptions.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));
            let data = filteredResults.map((item) => {
                return item.label;
            });
            populateResults(data);
        };

        return (
            <FormGroup className="select-wrapper">
                <label htmlFor="autocomplete">Provincia</label>
                <Autocomplete
                    id="autocomplete"
                    source={suggest}
                    placeholder={"Testo da cercare"}
                    defaultValue={""}
                    displayMenu={"inline"}
                    tNoResults={() => "Nessun risultato"}
                />
            </FormGroup>
        );
    },
    parameters: {
        docs: {
            canvas: { sourceState: "none" },
        },
    },
};

export const AreaDiTesto: Story = { render: () => <TextArea label="Esempio di area di testo" rows={3} /> }

export const AreaDiTestoConSegnaposto: Story = {
    render: () => (
        <TextArea rows={3} label="Esempio di area di testo" placeholder="Testo di esempio" id="example-textarea-placeholder" />
    )
};

export const InputDatepicker: Story = {
    render: () => {
        const [value, setValue] = useState("");

        return (
            <Input
                type="date"
                label="Datepicker"
                className="active"
                placeholder="22/12/2023"
                value={value}
                onChange={(ev) => {
                    setValue(ev.target.value);
                }}
            />
        );
    },
    parameters: {
        docs: {
            canvas: { sourceState: "none" },
        },
    },
};

export const InputHourpicker: Story = {
    render: () => {
        const [value, setValue] = useState("");

        return (
            <Input
                type="time"
                label="Hourpicker"
                className="active"
                value={value}
                onChange={(ev) => {
                    setValue(ev.target.value);
                }}
            />
        );
    },
    parameters: {
        docs: {
            canvas: { sourceState: "none" },
        },
    },
};