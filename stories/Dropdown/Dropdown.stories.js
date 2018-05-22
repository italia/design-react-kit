import React from "react";
import {storiesOf} from "@storybook/react";
import {withDocs} from "../utils";

import {Dropdown, DropdownMenu, DropdownItem, DropdownToggle} from "../../src";

import DropdownExample from "./DropdownExample";
import DropdownButtonExample from "./DropdownButtonExample";

import Esempi from "./Esempi.md";
import VarianteBottoni from "./VarianteBottoni.md";
import Link from "./Link.md";
import MenuVociAttive from "./MenuVociAttive.md";
import MenuVociDisabilitate from "./MenuVociDisabilitate.md";
import MenuHeaderDivider from "./MenuHeaderDivider.md";
import MenuLarge from "./MenuLarge.md";
import MenuFull from "./MenuFull.md";
import MenuIconRight from "./MenuIconRight.md";
import MenuIconLeft from "./MenuIconLeft.md";
import MenuDark from "./MenuDark.md";

const stories = storiesOf("Componenti/Dropdown", module);

stories.add("Esempi", withDocs(Esempi, () => <DropdownExample />));
stories.add(
    "Variante Bottoni",
    withDocs(VarianteBottoni, () => (
        <section>
            <DropdownButtonExample color="primary" />
            <DropdownButtonExample color="secondary" />
            <DropdownButtonExample color="danger" />
        </section>
    ))
);
stories.add(
    "Link",
    withDocs(VarianteBottoni, () => <DropdownExample tag="span" />)
);

const menuStories = storiesOf("Componenti/Dropdown/Dropdown menu", module);
menuStories.add(
    "Menà voci attive",
    withDocs(MenuVociAttive, () => (
        <DropdownMenu isOpen className="d-block" style={{position: "relative"}}>
            <DropdownItem>Azione 1</DropdownItem>
            <DropdownItem active>Azione 2</DropdownItem>
            <DropdownItem>Azione 3</DropdownItem>
        </DropdownMenu>
    ))
);
menuStories.add(
    "Menù voci disabilitate",
    withDocs(MenuVociDisabilitate, () => (
        <DropdownMenu isOpen className="d-block" style={{position: "relative"}}>
            <DropdownItem>Azione 1</DropdownItem>
            <DropdownItem disabled>Azione 2</DropdownItem>
            <DropdownItem>Azione 3</DropdownItem>
        </DropdownMenu>
    ))
);
menuStories.add(
    "Menù headers e separatori",
    withDocs(MenuHeaderDivider, () => (
        <DropdownMenu isOpen className="d-block" style={{position: "relative"}}>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem>Azione 1</DropdownItem>
            <DropdownItem>Azione 2</DropdownItem>
            <DropdownItem>Azione 3</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Azione 4</DropdownItem>
        </DropdownMenu>
    ))
);
menuStories.add(
    "Menu con voci large",
    withDocs(MenuLarge, () => (
        <Dropdown toggle={() => {}}>
            <DropdownToggle className="btn-dropdown" color="">
                Dropdown{" "}
            </DropdownToggle>
            <DropdownMenu isOpen style={{position: "relative"}}>
                <DropdownItem className="large">Azione 1</DropdownItem>
                <DropdownItem className="large">Azione 2</DropdownItem>
                <DropdownItem className="large">Azione 3</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    ))
);
// Needs to be updated with the new LinkList component
menuStories.add(
    "Menù full width",
    withDocs(MenuFull, () => (
        <Dropdown toggle={() => {}}>
            <DropdownToggle className="btn-dropdown" color="">
                Dropdown{" "}
            </DropdownToggle>
            <DropdownMenu
                isOpen
                className="full-width"
                style={{position: "relative"}}>
                <DropdownItem className="large">Azione 1</DropdownItem>
                <DropdownItem className="large">Azione 2</DropdownItem>
                <DropdownItem className="large">Azione 3</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    ))
);
menuStories.add(
    "Menù icona a destra",
    withDocs(MenuIconRight, () => (
        <DropdownMenu isOpen className="d-block" style={{position: "relative"}}>
            <div className="link-list-wrapper">
                <ul className="link-list">
                    <li>
                        <a className="list-item right-icon" href="#">
                            <span>Azione 1</span>
                            <i className="it-info right" />
                        </a>
                    </li>
                    <li>
                        <a className="list-item right-icon" href="#">
                            <span>Azione 2</span>
                            <i className="it-info right" />
                        </a>
                    </li>
                    <li>
                        <a className="list-item right-icon" href="#">
                            <span>Azione 3</span>
                            <i className="it-info right" />
                        </a>
                    </li>
                </ul>
            </div>
        </DropdownMenu>
    ))
);
menuStories.add(
    "Menù icona a sinistra",
    withDocs(MenuIconLeft, () => (
        <DropdownMenu isOpen className="d-block" style={{position: "relative"}}>
            <div className="link-list-wrapper">
                <ul className="link-list">
                    <li>
                        <a className="list-item left-icon" href="#">
                            <i className="it-info left" />
                            <span>Azione 1</span>
                        </a>
                    </li>
                    <li>
                        <a className="list-item left-icon" href="#">
                            <i className="it-info left" />
                            <span>Azione 2</span>
                        </a>
                    </li>
                    <li>
                        <a className="list-item left-icon" href="#">
                            <i className="it-info left" />
                            <span>Azione 3</span>
                        </a>
                    </li>
                </ul>
            </div>
        </DropdownMenu>
    ))
);

menuStories.add(
    "Menù dark",
    withDocs(MenuDark, () => (
        <DropdownMenu
            isOpen
            className="d-block dark"
            style={{position: "relative"}}>
            <div className="link-list-wrapper">
                <ul className="link-list">
                    <li>
                        <h3>Header</h3>
                    </li>
                    <li>
                        <a className="list-item right-icon active" href="#">
                            <span>Azione 1 (attivo)</span>
                            <i className="it-info right" />
                        </a>
                    </li>
                    <li>
                        <a className="list-item right-icon" href="#">
                            <span>Azione 2</span>
                            <i className="it-info right" />
                        </a>
                    </li>
                    <li>
                        <a className="list-item right-icon" href="#">
                            <span>Azione 3</span>
                            <i className="it-info right" />
                        </a>
                    </li>
                    <li>
                        <span className="divider" />
                    </li>
                    <li>
                        <a className="list-item right-icon" href="#">
                            <span>Azione 4</span>
                            <i className="it-info right" />
                        </a>
                    </li>
                    <li>
                        <a className="list-item right-icon disabled" href="#">
                            <span>Azione 5 (disabilitato)</span>
                            <i className="it-info right" />
                        </a>
                    </li>
                </ul>
            </div>
        </DropdownMenu>
    ))
);
