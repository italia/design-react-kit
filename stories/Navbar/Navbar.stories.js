import React from "react";
import { storiesOf } from "@storybook/react";
import {
    withKnobs,
    select,
    boolean,
    color
} from "@storybook/addon-knobs/react";
import { withDocs } from "../utils";

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Collapse,
    NavbarToggler,
    Form,
    Input,
    Button,
    InputGroup,
    InputGroupAddon,
    Container
} from "../../src";

import NavbarExample from "./NavbarExample";
import NavbarMegamenuExample from "./NavbarMegamenuExample";
import NavbarInlineExample from "./NavbarInlineExample";

import Esempi from "./Esempi.md";
import Dropdown from "./Dropdown.md";
import Megamenu from "./Megamenu.md";
import Inline from "./Inline.md";
import EsempiInterattivi from "./EsempiInterattivi.md";

const stories = storiesOf("Componenti/Navbar", module);

// TODO update stories with new Offcanvas example
stories.add("Esempi", withDocs(Esempi, () => <NavbarExample />));
stories.add(
    "Con Dropdown",
    withDocs(Dropdown, () => <NavbarExample dropdown />)
);
stories.add(
    "Con Megamenu (in progress)",
    withDocs(Megamenu, () => <NavbarMegamenuExample />)
);
stories.add("Inline Menù", withDocs(Inline, () => <NavbarInlineExample />));

const knobsStories = storiesOf("Componenti/Navbar", module);
knobsStories.addDecorator(withKnobs);

knobsStories.add(
    "Esempi interattivi",
    withDocs(EsempiInterattivi, () => {
        const themes = ["", "dark", "light"];
        const theme = select("Temi", themes, themes[0]);
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
    })
);
