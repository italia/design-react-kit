import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";

import { Form, FormGroup, Label, Input } from "../../src";

import CheckboxGroupsExample from "./CheckboxGroupsExample";

import Esempi from "./docs/Esempi.md";
import Inline from "./docs/Inline.md";
import Disabilitate from "./docs/Disabilitate.md";
import Gruppi from "./docs/Gruppi.md";
import EsempiInterattivi from "./docs/EsempiInterattivi.md";


const EsempiComponent = () => (
    <Form>
        <FormGroup check>
            <Input id="checkbox1" type="checkbox"/>
            <Label for="checkbox1" check>
                Label di esempio
            </Label>
        </FormGroup>
    </Form>
);


const InlineComponent = () => (
    <Form>
        <FormGroup check inline>
            <Input id="checkbox1" type="checkbox"/>
            <Label for="checkbox1" check>
                Checkbox non selezionato
            </Label>
        </FormGroup>
        <FormGroup check inline>
            <Input id="checkbox2" type="checkbox" defaultChecked/>
            <Label for="checkbox2" check>
                Checkbox selezionato
            </Label>
        </FormGroup>
    </Form>
);


const DisabilitateComponent = () => (
    <Form>
        <FormGroup check>
            <Input id="checkbox1" type="checkbox" disabled/>
            <Label for="checkbox1" check>
                Checkbox disabilitato non selezionato
            </Label>
        </FormGroup>
        <FormGroup check>
            <Input id="checkbox2" type="checkbox" disabled defaultChecked/>
            <Label for="checkbox2" check>
                Checkbox disabilitato selezionato
            </Label>
        </FormGroup>
    </Form>
);

const EsempiInterattiviComponent = () => {
    const checked = boolean("Selezionato", true);
    const disabled = boolean("Disabilitato", false);
    const inline = boolean("Inline", false);
    const label = text("Label", "Checkbox");

    return (
        <Form>
            <FormGroup check inline={inline}>
                <Input
                    id="checkbox1"
                    type="checkbox"
                    checked={checked}
                    disabled={disabled}
                    onChange={() => {
                    }}
                />
                <Label for="checkbox1" check>
                    {label} {checked ? "Selezionato" : ""}{" "}
                    {disabled ? "Disabilitato" : ""} {inline ? "Inline" : ""}
                </Label>
            </FormGroup>
            <FormGroup check inline={inline}>
                <Input
                    id="checkbox1"
                    type="checkbox"
                    checked={!checked}
                    disabled={disabled}
                    onChange={() => {
                    }}
                />
                <Label for="checkbox1" check>
                    {label} inverso {!checked ? "Selezionato" : ""}{" "}
                    {disabled ? "Disabilitato" : ""} {inline ? "Inline" : ""}
                </Label>
            </FormGroup>
        </Form>
    );
};

storiesOf("Componenti/Checkbox", module)
    .addDecorator(withA11y)
    .add("Esempi", withInfo({
        text: Esempi,
        propTablesExclude: [Form, FormGroup]
    })(EsempiComponent))
    .add("Inline", withInfo({
        text: Inline,
        propTablesExclude: [Form, FormGroup]
    })(InlineComponent))
    .add("Disabilitate", withInfo({
        text: Disabilitate,
        propTablesExclude: [Form, FormGroup]
    })(DisabilitateComponent))
    .add("Gruppi di Checkbox", withInfo({
        text: Gruppi,
        propTablesExclude: [CheckboxGroupsExample]
    })(() => <CheckboxGroupsExample/>))

storiesOf("Componenti/Checkbox", module)
    .addDecorator(withA11y)
    .addDecorator(withKnobs)
    .add("Esempi interattivi", withInfo({
        text: EsempiInterattivi,
        propTablesExclude: [Form, FormGroup]
    })(EsempiInterattiviComponent))
