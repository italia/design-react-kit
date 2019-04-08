import React from "react";
import { storiesOf } from "@storybook/react";
import {
    withKnobs,
    number,
    text,
    select,
    boolean
} from "@storybook/addon-knobs/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import { Progress } from "../../src";

import Esempi from "./Esempi.md";
import Etichette from "./Etichette.md";
import Altezza from "./Altezza.md";
import Background from "./Background.md";
import EsempiInterattivi from "./EsempiInterattivi.md";

const stories = storiesOf("Componenti/Progress", module);
stories.addDecorator(withA11y);

const EsempiComponent = () => (
    <div>
        <div className="progress" style={{marginBottom: "2em"}}>
            <div className="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div className="progress" style={{marginBottom: "2em"}}>
            <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div className="progress" style={{marginBottom: "2em"}}>
            <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div className="progress" style={{marginBottom: "2em"}}>
            <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div className="progress" style={{marginBottom: "2em"}}>
            <div className="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
);
stories.add("Esempi", withDocs(Esempi, withInfo()(EsempiComponent)));

const EtichetteComponent = () => {

      <div>
            <div className="progress-bar-wrapper">
                  <div className="progress-bar-label">
                  <span className="sr-only">Progresso </span>35%
                  </div>
                  <div className="progress">
                        <div className="progress-bar" role="progressbar" style="width: 35%" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
            </div>
      </div>
};

stories.add(
    "Etichette",
    withDocs(Etichette, withInfo()(EtichetteComponent))
);

const AltezzaComponent = () => (
    <div>
          <div className="progress" style={{marginBottom: "2em"}}>
            <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div className="progress" style={{marginBottom: "2em", height:"1em"}}>
            <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div className="progress" style={{marginBottom: "2em", height:"2em"}}>
            <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
);
stories.add("Altezza", withDocs(Altezza, withInfo()(AltezzaComponent)));

const BackgroundComponent = () => (
    <div>
        <div className="progress progress-color" style={{marginBottom: "2em"}}>
            <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      <div className="progress progress-color" style={{marginBottom: "2em"}}>
            <div className="progress-bar bg-info" role="progressbar" style={{width: "33%"}} aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div className="progress progress-color" style={{marginBottom: "2em"}}>
            <div className="progress-bar bg-warning" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div className="progress progress-color" style={{marginBottom: "2em"}}>
            <div className="progress-bar bg-danger" role="progressbar" style={{width: "66%"}} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
);
stories.add(
    "Background",
    withDocs(Background, withInfo()(BackgroundComponent))
);

const knobsStories = storiesOf("Componenti/Progress", module);
knobsStories.addDecorator(withA11y);
knobsStories.addDecorator(withKnobs);

const EsempiInterattiviComponent = () => {
    const value = number("Valore", 25);
    const height = number("Altezza", 18);
    const colors = ["", "success", "info", "warning", "danger"];
    const color = select("Background", colors, colors[0]);
    const label = text("Etichetta", "");

    return (
      <div>
            <div className="progress-bar-wrapper">
                  <div className="progress-bar-label">
                        <span className="sr-only">Progresso </span>{value}%
                  </div>

                  <div className="progress progress-color" style={{marginBottom: "2em", height:`${height}px`}}>
                        <div className={`progress-bar bg-${color}`} role="progressbar" style={{width: `${value}%`}} aria-valuenow={`${value}`} aria-valuemin="0" aria-valuemax="100">{label}</div>
                  </div>
            </div>
      </div>


    );
};
knobsStories.add(
    "Esempi interattivi",
    withDocs(EsempiInterattivi, withInfo()(EsempiInterattiviComponent))
);
