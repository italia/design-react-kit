import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withDocs } from "../utils";

import { Form, FormGroup, Label, Input } from "../../src";

import CheckboxGroupsExample from "./CheckboxGroupsExample";

import Esempi from "./Esempi.md";
import Inline from "./Inline.md";
import Disabilitate from "./Disabilitate.md";
import Gruppi from "./Gruppi.md";
import EsempiInterattivi from "./EsempiInterattivi.md";

const stories = storiesOf("Componenti/Checkbox", module);
stories.addDecorator(checkA11y);

stories.add(
    "Esempi",
    withDocs(Esempi, () => (
        <Form>
            <FormGroup check>
                <Input id="checkbox1" type="checkbox" />
                <Label for="checkbox1" check>
                    Label di esempio
                </Label>
            </FormGroup>
        </Form>
    ))
);
stories.add(
    "Inline",
    withDocs(Inline, () => (
        <Form>
            <FormGroup check inline>
                <Input id="checkbox1" type="checkbox" />
                <Label for="checkbox1" check>
                    Checkbox non selezionato
                </Label>
            </FormGroup>
            <FormGroup check inline>
                <Input id="checkbox2" type="checkbox" defaultChecked />
                <Label for="checkbox2" check>
                    Checkbox selezionato
                </Label>
            </FormGroup>
        </Form>
    ))
);
stories.add(
    "Disabilitate",
    withDocs(Disabilitate, () => (
        <Form>
            <FormGroup check>
                <Input id="checkbox1" type="checkbox" disabled />
                <Label for="checkbox1" check>
                    Checkbox disabilitato non selezionato
                </Label>
            </FormGroup>
            <FormGroup check>
                <Input id="checkbox2" type="checkbox" disabled defaultChecked />
                <Label for="checkbox2" check>
                    Checkbox disabilitato selezionato
                </Label>
            </FormGroup>
        </Form>
    ))
);
stories.add(
    "Gruppi di Checkbox",
    withDocs(Gruppi, () => <CheckboxGroupsExample />)
);

const knobsStories = storiesOf("Componenti/Checkbox", module);
knobsStories.addDecorator(checkA11y);
knobsStories.addDecorator(withKnobs);

knobsStories.add(
    "Esempi interattivi",
    withDocs(EsempiInterattivi, () => {
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
                        onChange={() => {}}
                    />
                    <Label for="checkbox1" check>
                        {label} {checked ? "Selezionato" : ""}{" "}
                        {disabled ? "Disabilitato" : ""}{" "}
                        {inline ? "Inline" : ""}
                    </Label>
                </FormGroup>
                <FormGroup check inline={inline}>
                    <Input
                        id="checkbox1"
                        type="checkbox"
                        checked={!checked}
                        disabled={disabled}
                        onChange={() => {}}
                    />
                    <Label for="checkbox1" check>
                        {label} inverso {!checked ? "Selezionato" : ""}{" "}
                        {disabled ? "Disabilitato" : ""}{" "}
                        {inline ? "Inline" : ""}
                    </Label>
                </FormGroup>
            </Form>
        );
    })
);
