import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import Esempi from "./Esempi.md";
import Dimensioni from "./Dimensioni.md";
import StatoAttivo from "./StatoAttivo.md";
import StatoDisabilitato from "./StatoDisabilitato.md";
import EsempiInterattivi from "./EsempiInterattivi.md";
import ButtonIcon from "./ButtonIcon.md";
import DarkBackground from "./DarkBackground.md";

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
                <button
                    type="button"
                    className={`btn btn-${color.toLowerCase()}`}
                >
                    {color}
                </button>{" "}
                <button
                    type="button"
                    className={`btn btn-outline-${color.toLowerCase()}`}
                >
                    {color}
                </button>
            </div>
        ))}
    </div>
);
stories.add("Esempi", withDocs(Esempi, withInfo()(EsempiComponent)));

const DarkBackgroundComponent = () => (
    <div className="bg-dark py-1">
        {colors.map(color => (
            <div key={color} className="mb-2">
                <button
                    type="button"
                    className={`btn btn-${color.toLowerCase()}`}
                >
                    {color}
                </button>{" "}
                <button
                    type="button"
                    className={`btn btn-outline-${color.toLowerCase()}`}
                >
                    {color}
                </button>
            </div>
        ))}
    </div>
);
stories.add(
    "Sfondo scuro",
    withDocs(DarkBackground, withInfo()(DarkBackgroundComponent))
);

const DimensioniComponent = () => (
    <section>
        <div>
            <button type="button" class="btn btn-primary btn-lg">
                Primary Large
            </button>{" "}
            <button type="button" class="btn btn-secondary btn-lg">
                Secondary Large
            </button>
            <div className="mt-3" />
            <button type="button" class="btn btn-primary btn-sm">
                Primary Small
            </button>{" "}
            <button type="button" class="btn btn-secondary btn-sm">
                Secondary Small
            </button>
            <div className="mt-3" />
            <button type="button" class="btn btn-primary btn-xs">
                Primary Mini
            </button>{" "}
            <button type="button" class="btn btn-secondary btn-xs">
                Secondary Mini
            </button>
            <div className="mt-3" />
            <button type="button" class="btn btn-primary btn-lg btn-block">
                Primary Block
            </button>{" "}
            <button type="button" class="btn btn-secondary btn-lg btn-block">
                Secondary Block
            </button>
        </div>
    </section>
);
stories.add(
    "Varianti di dimensione",
    withDocs(Dimensioni, withInfo()(DimensioniComponent))
);

const ButtonIconComponent = () => (
    <div>
        <button class="btn btn-success btn-lg btn-icon">
            <svg class="icon icon-white">{/*Add Icon Later */}</svg>
            <span>Icon Button Lg</span>
        </button>{" "}
        <button class="btn btn-primary btn-icon">
            <svg class="icon icon-white">{/*Add Icon Later */}</svg>
            <span>Icon Button</span>
        </button>{" "}
        <button class="btn btn-danger btn-sm btn-icon">
            <svg class="icon icon-secondary">{/*Add Icon Later */}</svg>
            <span>Icon Button Sm</span>
        </button>{" "}
        <button class="btn btn-info btn-xs btn-icon">
            <svg class="icon icon-danger">{/*Add Icon Later */}</svg>
            <span>Icon Button Xs</span>
        </button>
    </div>
);
stories.add(
    "Bottoni con icona",
    withDocs(ButtonIcon, withInfo()(ButtonIconComponent))
);

const StatoAttivoComponent = () => (
    <div>
        {colors.map(color => (
            <span>
                <button
                    type="button"
                    className={`btn btn-${color.toLowerCase()}`}
                >
                    {color}
                </button>{" "}
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
            <span>
                <button
                    type="button"
                    className={`btn btn-${color.toLowerCase()} disabled`}
                >
                    {color}
                </button>{" "}
            </span>
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
        "success",
        "info",
        "danger",
        "warning",
        "link"
    ];
    const dimensions = ["btn-xs", "btn-sm", "btn-lg"];
    const color = select("Variazioni", colors, colors[0]);
    const dimension = select("Dimensioni", dimensions, dimensions[0]);
    const block = boolean("Block", false);
    const disabled = boolean("Disabilitato", false);
    const label = text("Label", "");

    return (
        <button
            type="button"
            className={`btn btn-${color.toLowerCase()} ${dimension} ${
                disabled ? "disabled" : " "
            } ${block ? "btn-block" : ""}`}
        >
            {label} {color} {dimension} {block ? "block" : ""}{" "}
            {disabled ? "disabled" : " "}
        </button>
    );
};
knobsStories.add(
    "Esempi interattivi",
    withDocs(EsempiInterattivi, withInfo()(EsempiInterattiviComponent))
);
