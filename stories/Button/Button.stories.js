import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import { Button } from "../../src";

import Esempi from "./Esempi.md";
import Dimensioni from "./Dimensioni.md";
import StatoAttivo from "./StatoAttivo.md";
import StatoDisabilitato from "./StatoDisabilitato.md";
import EsempiInterattivi from "./EsempiInterattivi.md";

const stories = storiesOf("Componenti/Button", module);
stories.addDecorator(withA11y);

const colors = [
    "Primary",
    "Secondary",
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
            <button type="button" className={`btn btn-${color.toLowerCase()}`}>
                {color}
            </button>{' '}
            <button type="button" className={`btn btn-outline-${color.toLowerCase()}`}>
                {color}
            </button>     
        </div>
    ))}
    </div>
);
stories.add("Esempi", withDocs(Esempi, withInfo()(EsempiComponent)));

const DimensioniComponent = () => (
    <section>
        <div>
            <button type="button" class="btn btn-primary btn-lg">Primary Large</button>{' '}
            <button type="button" class="btn btn-secondary btn-lg">Secondary Large</button>
            
            <div className="mt-3" />
            <button type="button" class="btn btn-primary btn-sm">Primary Small</button>{' '}
            <button type="button" class="btn btn-secondary btn-sm">Secondary Small</button>

            <div className="mt-3" />
            <button type="button" class="btn btn-primary btn-xs">Primary Mini</button>{' '}
            <button type="button" class="btn btn-secondary btn-xs">Secondary Mini</button>

            <div className="mt-3" />
            <button type="button" class="btn btn-primary btn-lg btn-block">Primary Block</button>{' '}
            <button type="button" class="btn btn-secondary btn-lg btn-block">Secondary Block</button>
        </div>
    </section>
);
stories.add(
    "Varianti di dimensione",
    withDocs(Dimensioni, withInfo()(DimensioniComponent))
);

const StatoAttivoComponent = () => (
    <div>
    {colors.map(color => (
        <span>
            <button type="button" className={`btn btn-${color.toLowerCase()}`}>
                {color}
            </button>{' '}     
        </span>
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
knobsStories.addDecorator(withA11y);
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
