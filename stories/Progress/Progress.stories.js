import React from "react";
import { storiesOf } from "@storybook/react";
import {
    withKnobs,
    number,
    text,
    select,
    boolean
} from "@storybook/addon-knobs/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import { Progress } from "../../src";

import Esempi from "./Esempi.md";
import Etichette from "./Etichette.md";
import Altezza from "./Altezza.md";
import Background from "./Background.md";
import EsempiInterattivi from "./EsempiInterattivi.md";

const stories = storiesOf("Componenti/Progress", module);
stories.addDecorator(checkA11y);

const EsempiComponent = () => (
    <div>
        <Progress />
        <Progress value="25" className="mt-3" />
        <Progress value={50} className="mt-3" />
        <Progress value={75} className="mt-3" />
        <Progress value="100" className="mt-3" />
    </div>
);
stories.add("Esempi", withDocs(Esempi, withInfo()(EsempiComponent)));

stories.add(
    "Etichette",
    withDocs(Etichette, withInfo()(() => <Progress value="25">25%</Progress>))
);

const AltezzaComponent = () => (
    <div>
        <Progress value="25" style={{ height: 1 }} />
        <Progress value="25" style={{ height: 10 }} className="mt-3" />
        <Progress value="25" style={{ height: 20 }} className="mt-3" />
    </div>
);
stories.add("Altezza", withDocs(Altezza, withInfo()(AltezzaComponent)));

const BackgroundComponent = () => (
    <div>
        <Progress color="success" value="25" className="mt-3" />
        <Progress color="info" value={50} className="mt-3" />
        <Progress color="warning" value={75} className="mt-3" />
        <Progress color="danger" value="100" className="mt-3" />
    </div>
);
stories.add(
    "Background",
    withDocs(Background, withInfo()(BackgroundComponent))
);

const knobsStories = storiesOf("Componenti/Progress", module);
knobsStories.addDecorator(checkA11y);
knobsStories.addDecorator(withKnobs);

const EsempiInterattiviComponent = () => {
    const value = number("Valore", 25);
    const height = number("Altezza", 18);
    const colors = ["", "success", "info", "warning", "danger"];
    const color = select("Background", colors, colors[0]);
    const label = text("Etichetta", "");

    return (
        <Progress
            color={color}
            value={value}
            className="m-3"
            style={{ height }}
        >
            {label}
        </Progress>
    );
};
knobsStories.add(
    "Esempi interattivi",
    withDocs(EsempiInterattivi, withInfo()(EsempiInterattiviComponent))
);
