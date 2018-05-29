import React from "react";
import { storiesOf } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withDocs } from "../utils";

import CollapseExample from "./CollapseExample";
import CollapseGroupsExample from "./CollapseGroupsExample";
import CollapseAccordionExample from "./CollapseAccordionExample";
import CollapseNestedExample from "./CollapseNestedExample";

import Esempi from "./Esempi.md";
import Gruppi from "./Gruppi.md";
import Accordion from "./Accordion.md";
import Innestati from "./Innestati.md";

const stories = storiesOf("Componenti/Collapse", module);
stories.addDecorator(checkA11y);

stories.add("Esempi", withDocs(Esempi, () => <CollapseExample />));
stories.add(
    "Gruppi di elementi richiudibili",
    withDocs(Gruppi, () => <CollapseGroupsExample />)
);
stories.add(
    "Accordion",
    withDocs(Accordion, () => <CollapseAccordionExample />)
);
stories.add(
    "Collapse e Accordion innestati",
    withDocs(Innestati, () => <CollapseNestedExample />)
);
