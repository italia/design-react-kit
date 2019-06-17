import React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import SelectExample from "./SelectExample";
import Select from "react-select";

import Esempi from "./Esempi.md";
import Disabled from "./Disabled.md"
import Multipla from "./Multipla.md";
import ConRicerca from "./ConRicerca.md";
import ConGruppiOpzioni from "./ConGruppiOpzioni.md";

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
);

// stories.add(
//     "Con valore predefinito",
//     withDocs(
//         Esempi,
//         withInfo({
//             propTables: [Select],
//             propTablesExclude: [SelectExample]
//         })(() => <SelectExample defaultValue />)
//     )
// );

// stories.add(
//     "Multipla",
//     withDocs(
//         Multipla,
//         withInfo({
//             propTables: [Select],
//             propTablesExclude: [SelectExample]
//         })(() => <SelectExample multi />)
//     )
// );

// stories.add(
//     "Con ricerca",
//     withDocs(
//         ConRicerca,
//         withInfo({
//             propTables: [Select],
//             propTablesExclude: [SelectExample]
//         })(() => <SelectExample search />)
//     )
// );

// stories.add(
//     "Con gruppi di opzioni",
//     withDocs(
//         ConGruppiOpzioni,
//         withInfo({
//             propTables: [Select],
//             propTablesExclude: [SelectExample]
//         })(() => <SelectExample group multi />)
//     )
// );
