import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import { Badge, Button } from "../../src";

import Esempi from "./Esempi.md";
import Contatore from "./Contatore.md";
import Variazioni from "./Variazioni.md";
import Arrotondati from "./Arrotondati.md";
import Link from "./Link.md";
import EsempiInterattivi from "./EsempiInterattivi.md";

const stories = storiesOf("Componenti/Badge", module);
stories.addDecorator(checkA11y);

const EsempiComponent = () => (
    <div>
        <h1>
            Titolo di esempio <Badge color="secondary">New</Badge>
        </h1>
        <h2>
            Titolo di esempio <Badge color="secondary">New</Badge>
        </h2>
        <h3>
            Titolo di esempio <Badge color="secondary">New</Badge>
        </h3>
        <h4>
            Titolo di esempio <Badge color="secondary">New</Badge>
        </h4>
        <h5>
            Titolo di esempio <Badge color="secondary">New</Badge>
        </h5>
        <h6>
            Titolo di esempio <Badge color="secondary">New</Badge>
        </h6>
    </div>
);
stories.add("Esempi", withDocs(Esempi, withInfo()(EsempiComponent)));

stories.add(
    "Contatore",
    withDocs(
        Contatore,
        withInfo({
            propTablesExclude: [Button]
        })(() => (
            <Button color="primary">
                Notifiche <Badge color="secondary">4</Badge>
            </Button>
        ))
    )
);

const VariazioniComponent = () => (
    <div>
        <Badge color="italia">Italia</Badge>
        <Badge color="primary">Primary</Badge>
        <Badge color="secondary">Secondary</Badge>
        <Badge color="tertiary">Tertiary</Badge>
        <Badge color="quaternary">Quaternary</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="danger">Danger</Badge>
        <Badge color="warning">Warning</Badge>
    </div>
);
stories.add(
    "Variazioni",
    withDocs(Variazioni, withInfo()(VariazioniComponent))
);

const ArrotondatiComponent = () => (
    <div>
        <Badge color="italia" pill>
            Italia
        </Badge>
        <Badge color="primary" pill>
            Primary
        </Badge>
        <Badge color="secondary" pill>
            Secondary
        </Badge>
        <Badge color="tertiary" pill>
            Tertiary
        </Badge>
        <Badge color="quaternary" pill>
            Quaternary
        </Badge>
        <Badge color="success" pill>
            Success
        </Badge>
        <Badge color="danger" pill>
            Danger
        </Badge>
        <Badge color="warning" pill>
            Warning
        </Badge>
    </div>
);
stories.add(
    "Arrotondati",
    withDocs(Arrotondati, withInfo()(ArrotondatiComponent))
);

const LinkComponent = () => (
    <div>
        <Badge href="#" color="italia">
            Italia
        </Badge>
        <Badge href="#" color="primary">
            Primary
        </Badge>
        <Badge href="#" color="secondary">
            Secondary
        </Badge>
        <Badge href="#" color="tertiary">
            Tertiary
        </Badge>
        <Badge href="#" color="quaternary">
            Quaternary
        </Badge>
        <Badge href="#" color="success">
            Success
        </Badge>
        <Badge href="#" color="danger">
            Danger
        </Badge>
        <Badge href="#" color="warning">
            Warning
        </Badge>
    </div>
);
stories.add("Link", withDocs(Link, withInfo()(LinkComponent)));

const knobsStories = storiesOf("Componenti/Badge", module);
knobsStories.addDecorator(checkA11y);
knobsStories.addDecorator(withKnobs);

const EsempiInterattiviComponent = () => {
    const colors = [
        "italia",
        "primary",
        "secondary",
        "tertiary",
        "quaternary",
        "success",
        "danger",
        "warning"
    ];
    const color = select("Variazioni", colors, colors[0]);
    const pill = boolean("Arrotondati", true);
    const label = text("Label", "");

    return (
        <Badge color={color} pill={pill}>
            {label}
            {color}
        </Badge>
    );
};
knobsStories.add(
    "Esempi interattivi",
    withDocs(EsempiInterattivi, withInfo()(EsempiInterattiviComponent))
);
