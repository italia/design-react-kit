import React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import SelectExample from "./SelectExample";
import Select from "react-select";

import Esempi from "./docs/Esempi.md";
import Disabled from "./docs/Disabled.md";
import Reset from "./docs/Reset.md";
import Searchable from "./docs/Searchable.md";
import Multipla from "./docs/Multipla.md";
import Grouped from "./docs/Grouped.md";

const stories = storiesOf("Componenti/Select", module);


stories
.addDecorator(withA11y)
.add(
    "Select classica",
    withInfo({
        text: Esempi,
        propTables: [Select],
        propTablesExclude: [SelectExample]
    })(() => <SelectExample />)
)
.add(
    "Select disabilitata",
    withInfo({
        text: Disabled,
        propTables: [Select],
        propTablesExclude: [SelectExample]
    })(() => <SelectExample disabled/>)
)
.add(
    "Select con reset",
    withInfo({
        text: Reset,
        propTables: [Select],
        propTablesExclude: [SelectExample]
    })(() => <SelectExample reset/>)
)
.add(
    "Select con ricerca",
    withInfo({
        text: Searchable,
        propTables: [Select],
        propTablesExclude: [SelectExample]
    })(() => <SelectExample search/>)
)
.add(
    "Select Multipla",
    withInfo({
        text: Multipla,
        propTables: [Select],
        propTablesExclude: [SelectExample]
    })(() => <SelectExample multi/>)
)
.add(
    "Select con gruppi",
    withInfo({
        text: Grouped,
        propTables: [Select],
        propTablesExclude: [SelectExample]
    })(() => <SelectExample group/>)
)

