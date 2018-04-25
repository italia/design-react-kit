import React from "react";
import { storiesOf } from "@storybook/react";
import { withDocs, envIs } from "../utils";

import ScrollspyExample from "./ScrollspyExample";

import Esempi from "./Esempi.md";

const stories = storiesOf("Componenti/Scrollspy", module);

stories.add(
  "Esempi",
  withDocs(Esempi, () => {
    return <ScrollspyExample />;
  })
);
