import React from "react";
import { storiesOf } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withDocs } from "../utils";

import ScrollspyExample from "./ScrollspyExample";

import Esempi from "./Esempi.md";

const stories = storiesOf("Componenti/Scrollspy", module);
stories.addDecorator(checkA11y);

stories.add(
    "Esempi",
    withDocs(Esempi, () => {
        return <ScrollspyExample />;
    })
);
