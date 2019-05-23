import React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import MenuInline from "./MenuInline.md";
import PosizionamentoFondo from "./PosizionamentoFondo.md";
import PosizionamentoTesta from "./PosizionamentoTestaAlla.md";
import ComponenteMenuInline from "./ComponenteMenuInline";
import PosizionamentoFondoPagina from "./PosizionamentoFondoPagina";
import PosizionamentoTestaAlla from "./PosizionamentoTestaAlla";

const stories = storiesOf("Componenti/NavScroll", module);
stories.addDecorator(withA11y);

stories.add(
      "Posizionamento a fondo pagina con linea a sinistra",
      withDocs(
          PosizionamentoFondo,
          withInfo({
              propTables: [PosizionamentoFondoPagina]
          })(() => {
              return <PosizionamentoFondoPagina />;
          })
      )
  );

stories.add(
      "Posizionamento in testa alla pagina con linea a destra",
      withDocs(
          PosizionamentoTesta,
          withInfo({
              propTables: [PosizionamentoTestaAlla]
          })(() => {
              return <PosizionamentoTestaAlla />;
          })
      )
  );

stories.add(
      "Menu Inline",
      withDocs(
          MenuInline,
          withInfo({
              propTables: [ComponenteMenuInline]
          })(() => {
              return <ComponenteMenuInline />;
          })
      )
  );
