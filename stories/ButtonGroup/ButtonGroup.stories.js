/*
import React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";

import { ButtonToolbar, ButtonGroup, Button } from "../../src";

import ButtonGroupDropdownExample from "./ButtonGroupDropdownExample";

import Esempi from "./docs/Esempi.md";
import Toolbar from "./docs/Toolbar.md";
import Dimensioni from "./docs/Dimensioni.md";
import Vertical from "./docs/Vertical.md";
import Nesting from "./docs/Nesting.md";

storiesOf("Componenti/Button Group", module)
    .addDecorator(withA11y)
    .add("Esempi", withInfo({
        text: Esempi,
    })(() => (
        <ButtonGroup>
            <Button>Left</Button>
            <Button>Middle</Button>
            <Button>Right</Button>
        </ButtonGroup>
    )))
    .add("Toolbar", withInfo({
        text: Toolbar,
    })(() => (
        <ButtonToolbar>
            <ButtonGroup className="mr-1">
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>4</Button>
            </ButtonGroup>
            <ButtonGroup className="mr-1">
                <Button>5</Button>
                <Button>6</Button>
                <Button>7</Button>
            </ButtonGroup>
            <ButtonGroup className="mr-1">
                <Button>8</Button>
            </ButtonGroup>
        </ButtonToolbar>
    )))
    .add("Dimensioni", withInfo({
        text: Dimensioni,
    })(() => (
        <section>
            <div>
                <ButtonGroup size="lg">
                    <Button>Left</Button>
                    <Button>Middle</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </div>
            <div className="mt-3">
                <ButtonGroup>
                    <Button>Left</Button>
                    <Button>Middle</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </div>
            <div className="mt-3">
                <ButtonGroup size="sm">
                    <Button>Left</Button>
                    <Button>Middle</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </div>
        </section>
    )))
    .add("Vertical", withInfo({
        text: Vertical,
    })(() => (
        <ButtonGroup vertical>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
        </ButtonGroup>
    )));

storiesOf("Componenti/Button Group/Nesting", module)
    .add("Esempi",withInfo({
        text: Nesting
    })(() => <ButtonGroupDropdownExample />))
*/
