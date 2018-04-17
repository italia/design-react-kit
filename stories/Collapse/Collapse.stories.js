import React from "react";
import { storiesOf } from "@storybook/react";

import CollapseExample from "./CollapseExample";
import CollapseAccordionExample from "./CollapseAccordionExample";

const stories = storiesOf("Componenti/Collapse", module);


stories.add("Esempi", () => <CollapseExample />);
stories.add("Elemento a fisarmonica", () => <CollapseAccordionExample />);
