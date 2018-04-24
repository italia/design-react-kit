import React from "react";
import { storiesOf } from "@storybook/react";
import { withDocs, envIs } from "../utils";

import ScrollspyExample from "./ScrollspyExample";

import Esempi from "./Esempi.md";

const stories = storiesOf("Componenti/Scrollspy", module);

stories.add(
  "Esempi",
  withDocs(Esempi, () => {
    if (envIs("test")) {
      // Current story has a dependency on the DOM, skip it for now
      return null;
    }

    return <ScrollspyExample />;
  })
);
