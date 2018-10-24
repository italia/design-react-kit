import React from "react";
import { storiesOf } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import { Scrollspy } from "../../src";

import ComponenteBarraDiNavigazione from "./ComponenteBarraDiNavigazione";
import ComponenteListaElenco from "./ComponenteListaElenco";

import BarraDiNavigazione from "./BarraDiNavigazione.md";
import ListaElenco from "./ListaElenco.md";

const stories = storiesOf("Componenti/Scrollspy", module);
stories.addDecorator(checkA11y);

stories.add(
    "Esempio in barra di navigazione",
    withDocs(
        BarraDiNavigazione,
        withInfo({
            propTables: [Scrollspy],
            propTablesExclude: [ComponenteBarraDiNavigazione]
        })(() => {
            return <ComponenteBarraDiNavigazione />;
        })
    )
);

stories.add(
    "Esempio con una lista elenco",
    withDocs(
        ListaElenco,
        withInfo({
            propTables: [Scrollspy],
            propTablesExclude: [ComponenteListaElenco]
        })(() => {
            return <ComponenteListaElenco />;
        })
    )
);
