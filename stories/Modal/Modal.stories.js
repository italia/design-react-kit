import React from "react";
import { storiesOf } from "@storybook/react";

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "../../src";

import ModalExample from "./ModalExample";
import ModalTooltipExample from "./ModalTooltipExample";
import ModalGridExample from "./ModalGridExample";

const stories = storiesOf("Componenti/Modal", module);


stories.add("Esempi", () => (
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
));
stories.add("Bottone di chiusura", () => (
  <div style={{ position: "relative", padding: 10 }}>
    <Button className="close" style={{ position: "absolute" }}>
      &times;
    </Button>
  </div>
));
stories.add("Demo", () => <ModalExample />);
stories.add("Scroll di contenuti lunghi", () => <ModalExample long />);
stories.add("Centratura verticale", () => <ModalExample centered />);
stories.add("Tooltip and popover", () => <ModalTooltipExample />);
stories.add("Uso della griglia", () => <ModalGridExample />);
stories.add("Rimuovere l’animazione", () => <ModalExample fade={false} />);
stories.add("Dimensioni", () => <ModalExample sizing />);
