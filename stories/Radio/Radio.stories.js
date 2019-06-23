import React from "react";
import {storiesOf} from "@storybook/react";
import {withKnobs, boolean, text} from "@storybook/addon-knobs/react";
import {withA11y} from "@storybook/addon-a11y";
import {withInfo} from "@storybook/addon-info";

import {Form, FormGroup, Label, Input, FormText} from "../../src";

import RadioGroupsExample from "./RadioGroupsExample";

import Esempi from "./docs/Esempi.md";
import Inline from "./docs/Inline.md";
import Disabilitati from "./docs/Disabilitati.md";
import GruppiRadioButtons from "./docs/GruppiRadioButtons.md";
import EsempiInterattivi from "./docs/EsempiInterattivi.md";

const EsempiComponent = () => (
    <fieldset>
        <legend>Radio</legend>
        <Form className="m-3">
            <FormGroup check>
                <Input name="gruppo1" type="radio" id="radio1" defaultChecked/>
                <Label check for="radio1">
                    Opzione 1
                </Label>
            </FormGroup>

            <FormGroup check>
                <Input name="gruppo1" type="radio" id="radio2"/>
                <Label check for="radio2">
                    Opzione 2
                </Label>
            </FormGroup>

            <FormGroup check>
                <Input name="gruppo1" type="radio" id="radio3"/>
                <Label check for="radio3">
                    Opzione 3
                </Label>
            </FormGroup>
        </Form>
    </fieldset>
);

const InlineComponent = () => (
    <fieldset>
        <legend>Radio</legend>
        <Form className="m-3">
            <FormGroup check inline>
                <Input name="gruppo1" type="radio" id="radio1" defaultChecked/>
                <Label check for="radio1">
                    Opzione 1
                </Label>
            </FormGroup>

            <FormGroup check inline>
                <Input name="gruppo1" type="radio" id="radio2"/>
                <Label check for="radio2">
                    Opzione 2
                </Label>
            </FormGroup>

            <FormGroup check inline>
                <Input name="gruppo1" type="radio" id="radio3"/>
                <Label check for="radio3">
                    Opzione 3
                </Label>
            </FormGroup>
        </Form>
    </fieldset>
);

const DisabilitatiComponent = () => (
    <fieldset>
        <legend>Radio</legend>
        <Form className="m-3">
            <FormGroup check>
                <Input
                    name="gruppo1"
                    type="radio"
                    id="radio1"
                    defaultChecked
                    disabled
                />
                <Label check for="radio1">
                    Opzione 1
                </Label>
            </FormGroup>

            <FormGroup check>
                <Input name="gruppo1" type="radio" id="radio2" disabled/>
                <Label check for="radio2">
                    Opzione 2
                </Label>
            </FormGroup>

            <FormGroup check>
                <Input name="gruppo1" type="radio" id="radio3" disabled/>
                <Label check for="radio3">
                    Opzione 3
                </Label>
            </FormGroup>
        </Form>
    </fieldset>
);

const EsempiInterattiviComponent = () => {
    const checked = boolean("Selezionato", true);
    const disabled = boolean("Disabilitato", false);
    const inline = boolean("Inline", false);
    const label = text("Label", "Opzione");

    return (
        <Form>
            <FormGroup check inline={inline}>
                <Input
                    id="radio1"
                    type="radio"
                    checked={checked}
                    disabled={disabled}
                    onChange={() => {
                    }}
                />
                <Label for="radio1" check>
                    {label} {checked ? "Selezionato" : ""}{" "}
                    {disabled ? "Disabilitato" : ""} {inline ? "Inline" : ""}
                </Label>
            </FormGroup>
            <FormGroup check inline={inline}>
                <Input
                    id="radio2"
                    type="radio"
                    checked={!checked}
                    disabled={disabled}
                    onChange={() => {
                    }}
                />
                <Label for="radio2" check>
                    {label} inversa {!checked ? "Selezionato" : ""}{" "}
                    {disabled ? "Disabilitato" : ""} {inline ? "Inline" : ""}
                </Label>
            </FormGroup>
        </Form>
    );
};

storiesOf("Componenti/Radio Button", module)
    .addDecorator(withA11y)
    .add("Esempi", withInfo({
        text: Esempi
    })(EsempiComponent))
    .add("Inline", withInfo({
        text: Inline
    })(InlineComponent))
    .add("Disabilitati", withInfo({
        text: Disabilitati
    })(DisabilitatiComponent))
    .add("Gruppi di radio buttons", withInfo({
        text: GruppiRadioButtons,
        propTables: [Form, FormGroup, Label, Input, FormText],
        propTablesExclude: [RadioGroupsExample]
    })(() => <RadioGroupsExample/>))
    .addDecorator(withKnobs)
    .add("Esempi interattivi", withInfo({
        text: EsempiInterattivi
    })(EsempiInterattiviComponent));
