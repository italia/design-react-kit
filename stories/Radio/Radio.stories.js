import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withDocs } from "../utils";

import { Form, FormGroup, Label, Input } from "../../src";

import RadioGroupsExample from "./RadioGroupsExample";

import Esempi from "./Esempi.md";
import Inline from "./Inline.md";
import Disabilitati from "./Disabilitati.md";
import GruppiRadioButtons from "./GruppiRadioButtons.md";
import EsempiInterattivi from "./EsempiInterattivi.md";

const stories = storiesOf("Componenti/Radio Button", module);
stories.addDecorator(checkA11y);

stories.add(
    "Esempi",
    withDocs(Esempi, () => (
        <fieldset>
            <legend>Radio</legend>
            <Form className="m-3">
                <FormGroup check>
                    <Input
                        name="gruppo1"
                        type="radio"
                        id="radio1"
                        defaultChecked
                    />
                    <Label check for="radio1">
                        Opzione 1
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Input name="gruppo1" type="radio" id="radio2" />
                    <Label check for="radio2">
                        Opzione 2
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Input name="gruppo1" type="radio" id="radio3" />
                    <Label check for="radio3">
                        Opzione 3
                    </Label>
                </FormGroup>
            </Form>
        </fieldset>
    ))
);
stories.add(
    "Inline",
    withDocs(Inline, () => (
        <fieldset>
            <legend>Radio</legend>
            <Form className="m-3">
                <FormGroup check inline>
                    <Input
                        name="gruppo1"
                        type="radio"
                        id="radio1"
                        defaultChecked
                    />
                    <Label check for="radio1">
                        Opzione 1
                    </Label>
                </FormGroup>

                <FormGroup check inline>
                    <Input name="gruppo1" type="radio" id="radio2" />
                    <Label check for="radio2">
                        Opzione 2
                    </Label>
                </FormGroup>

                <FormGroup check inline>
                    <Input name="gruppo1" type="radio" id="radio3" />
                    <Label check for="radio3">
                        Opzione 3
                    </Label>
                </FormGroup>
            </Form>
        </fieldset>
    ))
);
stories.add(
    "Disabilitati",
    withDocs(Disabilitati, () => (
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
                    <Input name="gruppo1" type="radio" id="radio2" disabled />
                    <Label check for="radio2">
                        Opzione 2
                    </Label>
                </FormGroup>

                <FormGroup check>
                    <Input name="gruppo1" type="radio" id="radio3" disabled />
                    <Label check for="radio3">
                        Opzione 3
                    </Label>
                </FormGroup>
            </Form>
        </fieldset>
    ))
);
stories.add(
    "Gruppi di radio buttons",
    withDocs(GruppiRadioButtons, () => <RadioGroupsExample />)
);

const knobsStories = storiesOf("Componenti/Radio Button", module);
knobsStories.addDecorator(checkA11y);
knobsStories.addDecorator(withKnobs);

knobsStories.add(
    "Esempi interattivi",
    withDocs(EsempiInterattivi, () => {
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
                        onChange={() => {}}
                    />
                    <Label for="radio1" check>
                        {label} {checked ? "Selezionato" : ""}{" "}
                        {disabled ? "Disabilitato" : ""}{" "}
                        {inline ? "Inline" : ""}
                    </Label>
                </FormGroup>
                <FormGroup check inline={inline}>
                    <Input
                        id="radio2"
                        type="radio"
                        checked={!checked}
                        disabled={disabled}
                        onChange={() => {}}
                    />
                    <Label for="radio2" check>
                        {label} inversa {!checked ? "Selezionato" : ""}{" "}
                        {disabled ? "Disabilitato" : ""}{" "}
                        {inline ? "Inline" : ""}
                    </Label>
                </FormGroup>
            </Form>
        );
    })
);
