import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import {
    Row,
    Col,
    Form,
    FormGroup,
    FormText,
    Label,
    Input,
    Toggle
} from "../../src";

import TogglesExample from "./TogglesExample";
import TogglesGroupsExample from "./TogglesGroupsExample";

import Esempi from "./Esempi.md";
import Disabilitati from "./Disabilitati.md";
import Gruppi from "./Gruppi.md";
import EsempiMarkup from "./EsempiMarkup.md";
import EsempiInterattivi from "./EsempiInterattivi.md";

const stories = storiesOf("Componenti/Toggles", module);
stories.addDecorator(checkA11y);

stories.add(
    "Esempi",
    withDocs(
        Esempi,
        withInfo({
            propTables: [FormGroup, Toggle],
            propTablesExclude: [TogglesExample]
        })(() => <TogglesExample />)
    )
);

stories.add(
    "Disabilitati",
    withDocs(
        Disabilitati,
        withInfo({
            propTables: [FormGroup, Toggle],
            propTablesExclude: [TogglesExample]
        })(() => <TogglesExample disabled />)
    )
);

stories.add(
    "Gruppi",
    withDocs(
        Gruppi,
        withInfo({
            propTables: [FormGroup, Toggle, FormText],
            propTablesExclude: [TogglesGroupsExample]
        })(() => <TogglesGroupsExample />)
    )
);

const knobsStories = storiesOf("Componenti/Toggles", module);
knobsStories.addDecorator(checkA11y);
knobsStories.addDecorator(withKnobs);

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
knobsStories.add(
    "Esempi interattivi",
    withDocs(EsempiInterattivi, withInfo()(EsempiInterattiviComponent))
);
