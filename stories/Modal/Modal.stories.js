import React from "react";
import { storiesOf } from "@storybook/react";
import { withDocs } from "../utils";

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "../../src";

import ModalExample from "./ModalExample";
import ModalTooltipExample from "./ModalTooltipExample";
import ModalGridExample from "./ModalGridExample";

import Esempi from "./Esempi.md";
import BottoneChiusura from "./BottoneChiusura.md";
import Demo from "./Demo.md";
import ScrollContenutiLunghi from "./ScrollContenutiLunghi.md";
import CentraturaVerticale from "./CentraturaVerticale.md";
import TooltipPopover from "./TooltipPopover.md";
import UsoGriglia from "./UsoGriglia.md";
import RimuovereAnimazione from "./RimuovereAnimazione.md";
import Dimensioni from "./Dimensioni.md";

const stories = storiesOf("Componenti/Modal", module);

stories.add(
  "Esempi",
  withDocs(Esempi, () => (
    <div style={{ padding: "100px 300px" }}>
      <div className="modal-content">
        <ModalHeader>Titolo della modale</ModalHeader>
        <ModalBody>Il testo del corpo della modale va qui.</ModalBody>
        <ModalFooter>
          <Button color="secondary">Chiudi</Button>
          <Button color="primary">Salva le modifiche</Button>
        </ModalFooter>
      </div>
    </div>
  ))
);
stories.add(
  "Bottone di chiusura",
  withDocs(BottoneChiusura, () => (
    <div style={{ position: "relative", padding: 10 }}>
      <Button className="close" style={{ position: "absolute" }}>
        &times;
      </Button>
    </div>
  ))
);
stories.add("Demo", withDocs(Demo, () => <ModalExample />));
stories.add(
  "Scroll di contenuti lunghi",
  withDocs(ScrollContenutiLunghi, () => <ModalExample long />)
);
stories.add(
  "Centratura verticale",
  withDocs(CentraturaVerticale, () => <ModalExample centered />)
);
stories.add(
  "Tooltip and popover",
  withDocs(TooltipPopover, () => <ModalTooltipExample />)
);
stories.add(
  "Uso della griglia",
  withDocs(UsoGriglia, () => <ModalGridExample />)
);
stories.add(
  "Rimuovere l’animazione",
  withDocs(RimuovereAnimazione, () => <ModalExample fade={false} />)
);
stories.add("Dimensioni", withDocs(Dimensioni, () => <ModalExample sizing />));
