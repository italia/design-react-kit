import React from "react";
import { storiesOf } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import { Nav, NavItem, NavLink, TabContent, TabPane } from "../../src";

import TabExample from "./TabExample";
import TabButtonExample from "./TabButtonExample";

import Esempi from "./Esempi.md";
import Contenuto from "./Contenuto.md";
import Icone from "./Icone.md";
import IconeTesto from "./IconeTesto.md";
import TabBottoni from "./TabBottoni.md";
import AllineamentoVerticale from "./AllineamentoVerticale.md";

const stories = storiesOf("Componenti/Tab", module);
stories.addDecorator(checkA11y);

const EsempiComponent = () => (
    <div>
        <Nav tabs className="mb-3">
            <NavItem>
                <NavLink href="#" active>
                    Link Attivo
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#" disabled>
                    Link disabilitato
                </NavLink>
            </NavItem>
        </Nav>

        <Nav tabs className="nav-dark">
            <NavItem>
                <NavLink href="#" active>
                    Link Attivo
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#" disabled>
                    Link disabilitato
                </NavLink>
            </NavItem>
        </Nav>
    </div>
);
stories.add("Esempi", withDocs(Esempi, withInfo()(EsempiComponent)));

stories.add(
    "Contenuto",
    withDocs(
        Contenuto,
        withInfo({
            propTables: [Nav, NavItem, NavLink, TabContent, TabPane],
            propTablesExclude: [TabExample]
        })(() => <TabExample text />)
    )
);

stories.add(
    "Icone",
    withDocs(
        Icone,
        withInfo({
            propTables: [Nav, NavItem, NavLink, TabContent, TabPane],
            propTablesExclude: [TabExample]
        })(() => <TabExample icons />)
    )
);

stories.add(
    "Icone e testo",
    withDocs(
        IconeTesto,
        withInfo({
            propTables: [Nav, NavItem, NavLink, TabContent, TabPane],
            propTablesExclude: [TabExample]
        })(() => <TabExample text icons />)
    )
);

stories.add(
    "Tab a bottoni",
    withDocs(
        TabBottoni,
        withInfo({
            propTables: [Nav, NavItem, NavLink, TabContent, TabPane],
            propTablesExclude: [TabButtonExample]
        })(() => <TabButtonExample />)
    )
);

stories.add(
    "Allineamento Verticale",
    withDocs(
        AllineamentoVerticale,
        withInfo({
            propTables: [Nav, NavItem, NavLink, TabContent, TabPane],
            propTablesExclude: [TabButtonExample]
        })(() => <TabButtonExample vertical />)
    )
);
