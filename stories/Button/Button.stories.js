import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import { Button } from "../../src";

import Esempi from "./Esempi.md";
import Dimensioni from "./Dimensioni.md";
import StatoAttivo from "./StatoAttivo.md";
import StatoDisabilitato from "./StatoDisabilitato.md";
import EsempiInterattivi from "./EsempiInterattivi.md";

const stories = storiesOf("Componenti/Button", module);
stories.addDecorator(checkA11y);

const colors = [
    "Primary",
    "Secondary",
    "Tertiary",
    "Quaternary",
    "Success",
    "Info",
    "Danger",
    "Warning",
    "Link"
];

const EsempiComponent = () => (
    <div>
        {colors.map(color => (
            <div key={color} className="mb-2">
                <Button color={color.toLowerCase()} className="mr-1">
                    {color}
                </Button>
                <Button outline color={color.toLowerCase()} className="mr-1">
                    {color} Outline
                </Button>
            </div>
        ))}
    </div>
);
stories.add("Esempi", withDocs(Esempi, withInfo()(EsempiComponent)));

const DimensioniComponent = () => (
    <section>
        <div>
            <Button color="primary" size="lg" className="mr-1">
                Primary Large
            </Button>
            <Button color="secondary" size="lg">
                Secondary Large
            </Button>
            <div className="mt-3" />
            <Button color="primary" size="sm" className="mr-1">
                Primary Small
            </Button>
            <Button color="secondary" size="sm">
                Secondary Small
            </Button>
            <div className="mt-3" />
            <Button color="primary" size="xs" className="mr-1">
                Primary Mini
            </Button>
            <Button color="secondary" size="xs">
                Secondary Mini
            </Button>
            <div className="mt-3" />
            <Button color="primary" block>
                Primary Block
            </Button>
            <Button color="secondary" block>
                Secondary Block
            </Button>
        </div>
    </section>
);
stories.add(
    "Dimensioni",
    withDocs(Dimensioni, withInfo()(DimensioniComponent))
);

const StatoAttivoComponent = () => (
    <div>
        {colors.map(color => (
            <Button
                key={color}
                color={color.toLowerCase()}
                active
                className="mr-1"
            >
                {color}
            </Button>
        ))}
    </div>
);
stories.add(
    "Stato Attivo",
    withDocs(StatoAttivo, withInfo()(StatoAttivoComponent))
);

const StatoDisabilitatoComponent = () => (
    <div>
        {colors.map(color => (
            <Button
                key={color}
                color={color.toLowerCase()}
                disabled
                className="mr-1"
            >
                {color}
            </Button>
        ))}
    </div>
);
stories.add(
    "Stato Disabilitato",
    withDocs(StatoDisabilitato, withInfo()(StatoDisabilitatoComponent))
);

const knobsStories = storiesOf("Componenti/Button", module);
knobsStories.addDecorator(checkA11y);
knobsStories.addDecorator(withKnobs);

const EsempiInterattiviComponent = () => {
    const colors = [
        "primary",
        "secondary",
        "tertiary",
        "quaternary",
        "success",
        "info",
        "danger",
        "warning",
        "link"
    ];
    const dimensions = ["xs", "sm", "lg"];
    const color = select("Variazioni", colors, colors[0]);
    const dimension = select("Dimensioni", dimensions, dimensions[0]);
    const block = boolean("Block", false);
    const active = boolean("Attivo", true);
    const disabled = boolean("Disabilitato", false);
    const label = text("Label", "");

    return (
        <Button color={color} block={block} size={dimension} active={active} disabled={disabled}>
            {label} {color} {dimension} {block ? "block" : ""}{" "}
            {active ? "attivo" : ""} {disabled ? "disabilitato" : ""}
        </Button>
    );
};
knobsStories.add(
    "Esempi interattivi",
    withDocs(EsempiInterattivi, withInfo()(EsempiInterattiviComponent))
);
