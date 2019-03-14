import React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "../../src";

import ModalExample from "./ModalExample";
import ModalTooltipExample from "./ModalTooltipExample";
import ModalGridExample from "./ModalGridExample";
import ModalDynamicExample from "./ModalDynamicExample";

import Esempi from "./Esempi.md";
import BottoneChiusura from "./BottoneChiusura.md";
import Demo from "./Demo.md";
import ScrollContenutiLunghi from "./ScrollContenutiLunghi.md";
import CentraturaVerticale from "./CentraturaVerticale.md";
import TooltipPopover from "./TooltipPopover.md";
import UsoGriglia from "./UsoGriglia.md";
import RimuovereAnimazione from "./RimuovereAnimazione.md";
import Dimensioni from "./Dimensioni.md";
import ModalVariabile from "./ModalVariabile.md";

const stories = storiesOf("Componenti/Modal", module);
stories.addDecorator(withA11y);

const EsempiComponent = () => (
    <div style={{ padding: "0px 290px" }}>
        <div className="modal-content">
            <ModalHeader>Titolo della modale</ModalHeader>
            <ModalBody>Il testo del corpo della modale va qui.</ModalBody>
            <ModalFooter>
                <Button color="secondary">Chiudi</Button>
                <Button color="primary">Salva le modifiche</Button>
            </ModalFooter>
        </div>
    </div>
);
stories.add(
    "Esempi",
    withDocs(
        Esempi,
        withInfo({
            propTablesExclude: [Button]
        })(EsempiComponent)
    )
);

const BottoneChiusuraComponent = () => (
    <div className="p-3">
        <button className="close position-absolute">&times;</button>
    </div>
);
stories.add(
    "Bottone di chiusura",
    withDocs(BottoneChiusura, withInfo()(BottoneChiusuraComponent))
);

stories.add(
    "Demo",
    withDocs(
        Demo,
        withInfo({
            propTables: [Modal, ModalHeader, ModalBody, ModalFooter],
            propTablesExclude: [ModalExample]
        })(() => <ModalExample />)
    )
);

stories.add(
    "Scroll di contenuti lunghi",
    withDocs(
        ScrollContenutiLunghi,
        withInfo({
            propTables: [Modal, ModalHeader, ModalBody, ModalFooter],
            propTablesExclude: [ModalExample]
        })(() => <ModalExample long />)
    )
);

stories.add(
    "Centratura verticale",
    withDocs(
        CentraturaVerticale,
        withInfo({
            propTables: [Modal, ModalHeader, ModalBody, ModalFooter],
            propTablesExclude: [ModalExample]
        })(() => <ModalExample centered />)
    )
);

stories.add(
    "Tooltip and popover",
    withDocs(
        TooltipPopover,
        withInfo({
            propTables: [Modal, ModalHeader, ModalBody, ModalFooter],
            propTablesExclude: [ModalTooltipExample]
        })(() => <ModalTooltipExample />)
    )
);

stories.add(
    "Uso della griglia",
    withDocs(
        UsoGriglia,
        withInfo({
            propTables: [Modal, ModalHeader, ModalBody, ModalFooter],
            propTablesExclude: [ModalGridExample]
        })(() => <ModalGridExample />)
    )
);

stories.add(
    "Contenuto della modale variabile",
    withDocs(
        ModalVariabile,
        withInfo({
            propTables: [Modal, ModalHeader, ModalBody, ModalFooter],
            propTablesExclude: [ModalDynamicExample]
        })(() => <ModalDynamicExample />)
    )
);

stories.add(
    "Rimuovere l’animazione",
    withDocs(
        RimuovereAnimazione,
        withInfo({
            propTables: [Modal, ModalHeader, ModalBody, ModalFooter],
            propTablesExclude: [ModalExample]
        })(() => <ModalExample fade={false} />)
    )
);

stories.add(
    "Dimensioni",
    withDocs(
        Dimensioni,
        withInfo({
            propTables: [Modal, ModalHeader, ModalBody, ModalFooter],
            propTablesExclude: [ModalExample]
        })(() => <ModalExample sizing />)
    )
);
