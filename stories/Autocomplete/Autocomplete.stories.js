import React from "react";
import { storiesOf } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import { Autocomplete } from "../../src/";
import AutocompleteExample from "./AutocompleteExample";

import InputAutocomplete from "./InputAutocomplete.md";

const stories = storiesOf("Componenti/Autocomplete", module);
stories.addDecorator(checkA11y);

stories.add(
    "Input autocomplete",
    withDocs(
        InputAutocomplete,
        withInfo({
            propTables: [Autocomplete],
            propTablesExclude: [AutocompleteExample]
        })(() => <AutocompleteExample />)
    )
);

stories.add(
    "Input autocomplete con valore predefinito",
    withDocs(
        InputAutocomplete,
        withInfo({
            propTables: [Autocomplete],
            propTablesExclude: [AutocompleteExample]
        })(() => <AutocompleteExample defaultValue />)
    )
);
