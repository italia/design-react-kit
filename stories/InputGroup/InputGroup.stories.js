import React from "react";
import {storiesOf} from "@storybook/react";
import {withA11y} from "@storybook/addon-a11y";
import {withInfo} from "@storybook/addon-info";

import {
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupText,
    DropdownToggle,
    DropdownItem,
    Button
} from "../../src";

import InputGroupExample from "./InputGroupExample";
import InputGroupDropdownExample from "./InputGroupDropdownExample";

import Esempi from "./docs/Esempi.md";
import InputMultipli from "./docs/InputMultipli.md";
import AggiunteMultiple from "./docs/AggiunteMultiple.md";
import AggiuntaBottoni from "./docs/AggiuntaBottoni.md";
import BottoniDropdown from "./docs/BottoniDropdown.md";
import PulsantiSegmentati from "./docs/PulsantiSegmentati.md";

const EsempiComponent = () => (
    <InputGroupExample/>
);

const InputMultipliComponent = () => (
    <div>
        <InputGroup>
            <InputGroupAddon addonType="prepend">Nominativo</InputGroupAddon>
            <Input type="text" placeholder="Nome" aria-label="Nome"/>
            <Input type="text" placeholder="Cognome" aria-label="Cognome"/>
        </InputGroup>
    </div>
);

const AggiunteMultipleComponent = () => (
    <div>
        <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
                <InputGroupText>€</InputGroupText>
                <InputGroupText>0,00</InputGroupText>
            </InputGroupAddon>
            <Input type="text" aria-label="€"/>
        </InputGroup>

        <InputGroup>
            <Input type="text" aria-label="€"/>
            <InputGroupAddon addonType="append">
                <InputGroupText>€</InputGroupText>
                <InputGroupText>0,00</InputGroupText>
            </InputGroupAddon>
        </InputGroup>
    </div>
);

const AggiuntaBottoniComponent = () => (
    <div>
        <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
                <Button color="primary">Bottone</Button>
            </InputGroupAddon>
            <Input type="text" placeholder="" aria-label="Bottone"/>
        </InputGroup>

        <InputGroup className="input-group mb-3">
            <Input
                type="text"
                placeholder="Contenitore"
                aria-label="Contenitore"
            />
            <InputGroupAddon addonType="append">
                <Button color="primary">Bottone</Button>
            </InputGroupAddon>
        </InputGroup>

        <InputGroup className="input-group mb-3">
            <InputGroupAddon addonType="prepend">
                <Button color="primary">Bottone</Button>
                <Button color="primary">Bottone</Button>
            </InputGroupAddon>
            <Input type="text" placeholder="" aria-label="Bottone"/>
        </InputGroup>

        <InputGroup className="input-group">
            <Input
                type="text"
                placeholder="Contenitore"
                aria-label="Contenitore"
            />
            <InputGroupAddon addonType="append">
                <Button color="primary">Bottone</Button>
                <Button color="primary">Bottone</Button>
            </InputGroupAddon>
        </InputGroup>
    </div>
);

storiesOf("Componenti/Form.Input Group", module)
    .addDecorator(withA11y)
    .add("Esempi", withInfo({
        text: Esempi
    })(EsempiComponent))
    .add("Input multipli", withInfo({
        text: InputMultipli
    })(InputMultipliComponent))
    .add("Aggiunte multiple", withInfo({
        text: AggiunteMultiple
    })(AggiunteMultipleComponent))
    .add("Aggiunta bottoni", withInfo({
        text: AggiuntaBottoni
    })(AggiuntaBottoniComponent))
    .add("Bottoni con dropdown", withInfo({
        text: BottoniDropdown,
        propTables: [InputGroup, InputGroupButtonDropdown, DropdownToggle, DropdownItem],
        propTablesExclude: [InputGroupDropdownExample]
    })(() => <InputGroupDropdownExample/>))
    .add("Pulsanti segmentati", withInfo({
        text: PulsantiSegmentati,
        propTables: [InputGroup, InputGroupButtonDropdown, DropdownToggle, DropdownItem],
        propTablesExclude: [InputGroupDropdownExample]
    })(() => <InputGroupDropdownExample split/>));
