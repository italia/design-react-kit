import React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import { Collapse, Accordion, AccordionHeader, AccordionBody } from "../../src";

import CollapseExample from "./CollapseExample";
import CollapseGroupsExample from "./CollapseGroupsExample";
import CollapseAccordionExample from "./CollapseAccordionExample";
import CollapseNestedExample from "./CollapseNestedExample";

import Esempi from "./Esempi.md";
import Gruppi from "./Gruppi.md";
import AccordionEsempio from "./AccordionEsempio.md";
import Innestati from "./Innestati.md";

const stories = storiesOf("Componenti/Collapse", module);
stories.addDecorator(withA11y);

stories.add(
    "Esempi",
    withDocs(
        Esempi,
        withInfo({
            propTables: [Collapse],
            propTablesExclude: [CollapseExample]
        })(() => <CollapseExample />)
    )
);
stories.add(
    "Gruppi di elementi richiudibili",
    withDocs(
        Gruppi,
        withInfo({
            propTables: [Accordion, AccordionHeader, AccordionBody],
            propTablesExclude: [CollapseGroupsExample]
        })(() => <CollapseGroupsExample />)
    )
);
stories.add(
    "Accordion",
    withDocs(
        AccordionEsempio,
        withInfo({
            propTables: [Accordion, AccordionHeader, AccordionBody],
            propTablesExclude: [CollapseAccordionExample]
        })(() => <CollapseAccordionExample />)
    )
);
stories.add(
    "Collapse e Accordion innestati",
    withDocs(
        Innestati,
        withInfo({
            propTables: [Collapse],
            propTablesExclude: [Accordion, AccordionHeader, AccordionBody]
        })(() => <CollapseNestedExample />)
    )
);
