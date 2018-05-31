import React from "react";
import { storiesOf } from "@storybook/react";
import {
    withKnobs,
    select,
    boolean,
    color
} from "@storybook/addon-knobs/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Collapse,
    NavbarToggler,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownToggle,
    Form,
    Input,
    Button,
    InputGroup,
    InputGroupAddon,
    Container,
    LinkList,
    LinkListItem
} from "../../src";

import NavbarExample from "./NavbarExample";
import NavbarOffcanvasExample from "./NavbarOffcanvasExample";
import NavbarMegamenuExample from "./NavbarMegamenuExample";
import NavbarInlineExample from "./NavbarInlineExample";

import Esempi from "./Esempi.md";
import Offcanvas from "./Offcanvas.md";
import Dropdown from "./Dropdown.md";
import Megamenu from "./Megamenu.md";
import Inline from "./Inline.md";
import EsempiInterattivi from "./EsempiInterattivi.md";

const stories = storiesOf("Componenti/Navbar", module);
stories.addDecorator(checkA11y);

stories.add(
    "Esempi",
    withDocs(
        Esempi,
        withInfo({
            propTables: [
                Navbar,
                NavbarToggler,
                Collapse,
                Nav,
                NavItem,
                NavLink
            ],
            propTablesExclude: [NavbarExample]
        })(() => <NavbarExample />)
    )
);

stories.add(
    "Con Offcanvas",
    withDocs(
        Offcanvas,
        withInfo({
            propTables: [
                Navbar,
                NavbarToggler,
                Offcanvas,
                Nav,
                NavItem,
                NavLink
            ],
            propTablesExclude: [NavbarOffcanvasExample]
        })(() => <NavbarOffcanvasExample />)
    )
);

stories.add(
    "Con Dropdown",
    withDocs(
        Dropdown,
        withInfo({
            propTables: [
                Navbar,
                NavbarToggler,
                Collapse,
                Nav,
                NavItem,
                NavLink,
                UncontrolledDropdown,
                DropdownToggle,
                DropdownMenu
            ],
            propTablesExclude: [NavbarExample]
        })(() => <NavbarExample dropdown />)
    )
);

stories.add(
    "Con Megamenu (in progress)",
    withDocs(
        Megamenu,
        withInfo({
            propTables: [
                Navbar,
                NavbarToggler,
                Collapse,
                Nav,
                NavItem,
                NavLink,
                UncontrolledDropdown,
                DropdownToggle,
                DropdownMenu,
                LinkList,
                LinkListItem
            ],
            propTablesExclude: [NavbarMegamenuExample]
        })(() => <NavbarMegamenuExample />)
    )
);

stories.add(
    "Inline Menù",
    withDocs(
        Inline,
        withInfo({
            propTables: [LinkList, LinkListItem, Collapse],
            propTablesExclude: [NavbarInlineExample]
        })(() => <NavbarInlineExample />)
    )
);

const knobsStories = storiesOf("Componenti/Navbar", module);
knobsStories.addDecorator(checkA11y);
knobsStories.addDecorator(withKnobs);

const EsempiInterattiviComponent = () => {
    const variations = ["", "primary", "dark"];
    const variation = select("Variazioni", variations, variations[0]);
    const selectedColor = color("Color", "#e3f2fd");
    const placements = ["", "top", "bottom"];
    const placement = select("Posizionamento", placements, placements[0]);
    const sticky = boolean("Sticky", false);

    return (
        <Navbar
            light
            expand="lg"
            fixed={placement}
            sticky={placement}
            className={`bg-${variation}`}
            style={{ backgroundColor: selectedColor }}
        >
            <NavbarBrand href="#">Brand</NavbarBrand>
        </Navbar>
    );
};
knobsStories.add(
    "Esempi interattivi",
    withDocs(EsempiInterattivi, withInfo()(EsempiInterattiviComponent))
);
