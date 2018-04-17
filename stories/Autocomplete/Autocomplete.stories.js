import React from "react";
import { storiesOf } from "@storybook/react";

import AutocompleteExample from "./AutocompleteExample";

const stories = storiesOf("Componenti/Autocomplete", module);

stories.add("Input autocomplete", () => (
  <section>
    <AutocompleteExample />
  </section>
));
