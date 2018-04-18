import React from "react";
import { storiesOf } from "@storybook/react";
import { withDocs } from "../utils";

import AutocompleteExample from "./AutocompleteExample";

import InputAutocomplete from "./InputAutocomplete.md";

const stories = storiesOf("Componenti/Autocomplete", module);

stories.add(
  "Input autocomplete",
  withDocs(InputAutocomplete, () => (
    <section>
      <AutocompleteExample />
    </section>
  ))
);
