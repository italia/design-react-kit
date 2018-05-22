import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs/react";
import { withDocs } from "../utils";

import {
    LinkList,
    LinkListItem,
    Toggle,
    Input,
    Label,
    FormGroup,
} from "../../src";

import LinkListCollapsibleExample from "./LinkListCollapsibleExample";

import Esempi from "./Esempi.md";
import StatoAttivo from "./StatoAttivo.md";
import StatoDisabilitato from "./StatoDisabilitato.md";
import HeaderDivider from "./HeaderDivider.md";
import Large from "./Large.md";
import Multiline from "./Multiline.md";
import Controlli from "./Controlli.md";
import ControlliSecondari from "./ControlliSecondari.md";
import ControlliPrimariSecondari from "./ControlliPrimariSecondari.md";
import Avatar from "./Avatar.md";
import Switch from "./Switch.md";
import Checkbox from "./Checkbox.md";
import Navigation from "./Navigation.md";
import Collapsible from "./Collapsible.md";

const stories = storiesOf("Componenti/LinkList", module);

stories.add(
    "Esempi",
    withDocs(Esempi, () => (
        <LinkList>
            <LinkListItem>
                <span>Link list 1</span>
            </LinkListItem>
            <LinkListItem>
                <span>Link list 2</span>
            </LinkListItem>
            <LinkListItem>
                <span>Link list 3</span>
            </LinkListItem>
        </LinkList>
    ))
);
stories.add(
    "Stato Attivo",
    withDocs(StatoAttivo, () => (
        <LinkList>
            <LinkListItem>
                <span>Link list 1</span>
            </LinkListItem>
            <LinkListItem active>
                <span>Link list 2 active</span>
            </LinkListItem>
            <LinkListItem>
                <span>Link list 3</span>
            </LinkListItem>
        </LinkList>
    ))
);
stories.add(
    "Stato Disabilitato",
    withDocs(StatoDisabilitato, () => (
        <LinkList>
            <LinkListItem>
                <span>Link list 1</span>
            </LinkListItem>
            <LinkListItem disabled>
                <span>Link list 2 disabled</span>
            </LinkListItem>
            <LinkListItem>
                <span>Link list 3</span>
            </LinkListItem>
        </LinkList>
    ))
);
stories.add(
    "Header e Divider",
    withDocs(HeaderDivider, () => (
        <section>
            <LinkList>
                <LinkListItem header>Heading senza link</LinkListItem>
                <LinkListItem>
                    <span>Link list 1</span>
                </LinkListItem>
                <LinkListItem>
                    <span>Link list 2</span>
                </LinkListItem>
                <LinkListItem>
                    <span>Link list 3</span>
                </LinkListItem>
                <LinkListItem divider />
                <LinkListItem>
                    <span>Link list 4</span>
                </LinkListItem>
            </LinkList>

            <LinkList>
                <LinkListItem header href="#">
                    Heading con link
                </LinkListItem>
                <LinkListItem>
                    <span>Link list 1</span>
                </LinkListItem>
                <LinkListItem>
                    <span>Link list 2</span>
                </LinkListItem>
                <LinkListItem>
                    <span>Link list 3</span>
                </LinkListItem>
                <LinkListItem divider />
                <LinkListItem>
                    <span>Link list 4</span>
                </LinkListItem>
            </LinkList>
        </section>
    ))
);
stories.add(
    "Sizing",
    withDocs(Large, () => (
        <LinkList>
            <LinkListItem header href="#">
                Heading
            </LinkListItem>
            <LinkListItem size="large">
                <span>Link list 1</span>
            </LinkListItem>
            <LinkListItem size="large">
                <span>Link list 2</span>
            </LinkListItem>
            <LinkListItem size="large">
                <span>Link list 3</span>
            </LinkListItem>
            <LinkListItem divider />
            <LinkListItem size="large">
                <span>Link list 4</span>
            </LinkListItem>
        </LinkList>
    ))
);

const multilineStories = storiesOf("Componenti/LinkList/Multiline", module);

multilineStories.add(
    "Esempi",
    withDocs(Multiline, () => (
        <LinkList multiline>
            <LinkListItem active className="right-icon">
                <span>Link list 1 active</span>
                <i className="it-chevron-right right" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
            </LinkListItem>
            <LinkListItem divider />
            <LinkListItem className="right-icon">
                <span>Link list 2</span>
                <i className="it-chevron-right right" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
            </LinkListItem>
            <LinkListItem divider />
            <LinkListItem disabled className="right-icon">
                <span>Link list 3 disabled</span>
                <i className="it-chevron-right right" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>
            </LinkListItem>
        </LinkList>
    ))
);

const controlStories = storiesOf("Componenti/LinkList/Con controlli", module);

controlStories.add(
    "Primary Action",
    withDocs(Controlli, () => (
        <LinkList>
            <LinkListItem active className="left-icon">
                <i className="it-chevron-right left" aria-hidden="true" />
                <span>Link list 1 active</span>
            </LinkListItem>
            <LinkListItem className="left-icon">
                <i className="it-chevron-right left" aria-hidden="true" />
                <span>Link list 2</span>
            </LinkListItem>
            <LinkListItem disabled className="left-icon">
                <i className="it-chevron-right left" aria-hidden="true" />
                <span>Link list 3 disabled</span>
            </LinkListItem>
        </LinkList>
    ))
);
controlStories.add(
    "Secondary Action",
    withDocs(ControlliSecondari, () => (
        <LinkList>
            <LinkListItem active className="right-icon">
                <span>Link list 1 active</span>
                <i className="it-app right secondary" />
            </LinkListItem>
            <LinkListItem className="right-icon">
                <span>Link list 2</span>
                <i className="it-app right secondary" />
            </LinkListItem>
            <LinkListItem disabled className="right-icon">
                <span>Link list 3 disabled</span>
                <i className="it-app right secondary" />
            </LinkListItem>
        </LinkList>
    ))
);
controlStories.add(
    "Primary e Secondary Action",
    withDocs(ControlliPrimariSecondari, () => (
        <LinkList>
            <LinkListItem active className="left-icon right-icon">
                <i className="it-favorite left" />
                <span>Link list 1 active</span>
                <i className="it-app right secondary" />
            </LinkListItem>
            <LinkListItem className="left-icon right-icon">
                <i className="it-favorite left" />
                <span>Link list 2</span>
                <i className="it-app right secondary" />
            </LinkListItem>
            <LinkListItem disabled className="left-icon right-icon">
                <i className="it-favorite left" />
                <span>Link list 3 disabled</span>
                <i className="it-app right secondary" />
            </LinkListItem>
        </LinkList>
    ))
);
controlStories.add(
    "Con avatar",
    withDocs(Avatar, () => (
        <LinkList>
            <LinkListItem active className="avatar">
                <img
                    className="avatar"
                    src="http://via.placeholder.com/40x40"
                    title="avatartitle"
                />
                <span>Link list 1 active </span>
            </LinkListItem>
            <LinkListItem className="avatar">
                <img
                    className="avatar"
                    src="http://via.placeholder.com/40x40"
                    title="avatartitle"
                />
                <span>Link list 2 </span>
            </LinkListItem>
            <LinkListItem disabled className="avatar">
                <img
                    className="avatar"
                    src="http://via.placeholder.com/40x40"
                    title="avatartitle"
                />
                <span>Link list 3 disabled </span>
            </LinkListItem>
        </LinkList>
    ))
);
controlStories.add(
    "Con switch",
    withDocs(Switch, () => (
        <LinkList>
            <LinkListItem tag="div" active>
                <Toggle label="Label per toggle" />
            </LinkListItem>
            <LinkListItem tag="div" disabled>
                <Toggle disabled label="Label per disabled toggle" />
            </LinkListItem>
        </LinkList>
    ))
);
controlStories.add(
    "Con checkbox",
    withDocs(Checkbox, () => (
        <LinkList>
            <LinkListItem tag="div" active>
                <FormGroup check className="form-check-group">
                    <Input id="checkbox1" type="checkbox" defaultChecked />
                    <Label for="checkbox1" check>
                        Checkbox selezionato
                    </Label>
                </FormGroup>
            </LinkListItem>
            <LinkListItem tag="div" active>
                <FormGroup check className="form-check-group">
                    <Input id="checkbox2" type="checkbox" />
                    <Label for="checkbox2" check>
                        Checkbox non selezionato
                    </Label>
                </FormGroup>
            </LinkListItem>
            <LinkListItem tag="div" disabled>
                <FormGroup check className="form-check-group">
                    <Input id="checkbox3" type="checkbox" disabled />
                    <Label for="checkbox3" check>
                        Checkbox disabilitato non selezionato
                    </Label>
                </FormGroup>
            </LinkListItem>
        </LinkList>
    ))
);

const navigationStories = storiesOf(
    "Componenti/LinkList/Nested navigation",
    module
);

navigationStories.add(
    "Fixed",
    withDocs(Navigation, () => (
        <LinkList>
            <LinkListItem size="medium" className="right-icon">
                <span>Link list 1 </span>
                <i className="it-favorite right" />
            </LinkListItem>
            <LinkListItem size="medium" className="right-icon">
                <span>Link list 2 </span>
                <i className="it-favorite right" />
            </LinkListItem>
            <LinkList sublist>
                <LinkListItem>
                    <span>Link list 4 </span>
                </LinkListItem>
                <LinkListItem>
                    <span>Link list 5 </span>
                </LinkListItem>
                <LinkListItem>
                    <span>Link list 6 </span>
                </LinkListItem>
            </LinkList>
            <LinkListItem size="medium" className="right-icon">
                <span>Link list 3 </span>
                <i className="it-favorite right" />
            </LinkListItem>
        </LinkList>
    ))
);
navigationStories.add(
    "Collapsible",
    withDocs(Collapsible, () => (
        <LinkListCollapsibleExample />
    ))
);
