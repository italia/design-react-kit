import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
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

const EsempiComponent = () => (
    <Form>
        <FormGroup check>
            <Input id="checkbox1" type="checkbox" />
            <Label for="checkbox1" check>
                Label di esempio
            </Label>
        </FormGroup>
    </Form>
);
stories.add(
    "Esempi",
    withDocs(
        Esempi,
        withInfo({
            propTablesExclude: [Form, FormGroup]
        })(EsempiComponent)
    )
);

const InlineComponent = () => (
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
);
stories.add(
    "Inline",
    withDocs(
        Inline,
        withInfo({
            propTablesExclude: [Form, FormGroup]
        })(InlineComponent)
    )
);

const DisabilitateComponent = () => (
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
);
stories.add(
    "Disabilitate",
    withDocs(
        Disabilitate,
        withInfo({
            propTablesExclude: [Form, FormGroup]
        })(DisabilitateComponent)
    )
);

stories.add(
    "Gruppi di Checkbox",
    withDocs(
        Gruppi,
        withInfo({
            propTablesExclude: [CheckboxGroupsExample]
        })(() => <CheckboxGroupsExample />)
    )
);

const knobsStories = storiesOf("Componenti/Checkbox", module);
knobsStories.addDecorator(checkA11y);
knobsStories.addDecorator(withKnobs);

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
                    onChange={() => {}}
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
                    onChange={() => {}}
                />
                <Label for="checkbox1" check>
                    {label} inverso {!checked ? "Selezionato" : ""}{" "}
                    {disabled ? "Disabilitato" : ""} {inline ? "Inline" : ""}
                </Label>
            </FormGroup>
        </Form>
    );
};
knobsStories.add(
    "Esempi interattivi",
    withDocs(EsempiInterattivi, withInfo({
        propTablesExclude: [Form, FormGroup]
    })(EsempiInterattiviComponent))
);
