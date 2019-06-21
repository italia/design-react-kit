import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";

import {
    Row,
    Col,
    FormGroup,
    FormText,
    Toggle
} from "../../src";

import TogglesExample from "./TogglesExample";
import TogglesGroupsExample from "./TogglesGroupsExample";

import Esempi from "./docs/Esempi.md";
import Disabilitati from "./docs/Disabilitati.md";
import Gruppi from "./docs/Gruppi.md";
import EsempiInterattivi from "./docs/EsempiInterattivi.md";

const EsempiInterattiviComponent = () => {
    const checked = boolean("Selezionato", true);
    const disabled = boolean("Disabilitato", false);
    const label = text("Label", "Label");

    return (
        <Row>
            <Col sm="6">
                <FormGroup check className="m-3">
                    <Toggle
                        label={`${label} ${checked ? "Selezionato" : ""}  ${
                            disabled ? "Disabilitato" : ""
                            }`}
                        disabled={disabled}
                        checked={checked}
                        onChange={() => {}}
                    />
                </FormGroup>
            </Col>
            <Col sm="6">
                <FormGroup check className="m-3">
                    <Toggle
                        label={`${label} inverso ${
                            !checked ? "Selezionato" : ""
                            }  ${disabled ? "Disabilitato" : ""}`}
                        disabled={disabled}
                        checked={!checked}
                        onChange={() => {}}
                    />
                </FormGroup>
            </Col>
        </Row>
    );
};

storiesOf("Componenti/Toggles", module)
    .addDecorator(withA11y)
    .add("Esempi", withInfo({
        text: Esempi,
        propTables: [FormGroup, Toggle],
        propTablesExclude: [TogglesExample]
    })(() => <TogglesExample />))
    .add("Disabilitati", withInfo({
        text: Disabilitati,
        propTables: [FormGroup, Toggle],
        propTablesExclude: [TogglesExample]
    })(() => <TogglesExample disabled />))
    .add("Gruppi", withInfo({
        text: Gruppi,
        propTables: [FormGroup, Toggle, FormText],
        propTablesExclude: [TogglesGroupsExample]
    })(() => <TogglesGroupsExample />));

storiesOf("Componenti/Toggles", module)
    .addDecorator(withA11y)
    .addDecorator(withKnobs)
    .add("Esempi interattivi", withInfo({
        text: EsempiInterattivi
    })(EsempiInterattiviComponent));
