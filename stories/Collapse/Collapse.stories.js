import React from "react";
import { storiesOf } from "@storybook/react";
import { withDocs } from "../utils";

import CollapseExample from "./CollapseExample";
import CollapseAccordionExample from "./CollapseAccordionExample";

import Esempi from "./Esempi.md";
import Accordion from "./Accordion.md";

const stories = storiesOf("Componenti/Collapse", module);

stories.add("Esempi", withDocs(Esempi, () => <CollapseExample />));
stories.add(
  "Accordion",
  withDocs(Accordion, () => <CollapseAccordionExample />)
);
