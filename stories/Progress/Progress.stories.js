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


import Esempi from "./Esempi.md";
import Etichette from "./Etichette.md";
import Indeterminato from "./Indeterminato.md";
import Colori from "./Colori.md";
import ButtonProgress from "./ButtonProgress.md";
import Spinner from "./Spinner.md";
import SpinnerDoppio from "./SpinnerDoppio.md";
import EsempiInterattivi from "./EsempiInterattivi.md";

const stories = storiesOf("Componenti/Progress Indicators", module);
stories.addDecorator(withA11y);

const EsempiComponent = () => (
    <div>
        <div className="mb-3">
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        <div className="mb-3">
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        <div className="mb-3">
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        <div className="mb-3">
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        <div className="mb-3">
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    </div>
);
stories.add("Esempi", withDocs(Esempi, withInfo()(EsempiComponent)));

const EtichetteComponent = () => (

      <div>
            <div className="progress-bar-wrapper">
                  <div className="progress-bar-label"><span className="sr-only">Progresso </span>35%</div>
                  <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: "35%"}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
            </div>
      </div>
);

stories.add(
    "Etichette",
    withDocs(Etichette, withInfo()(EtichetteComponent))
);

const ProgressoIndeterminato = () =>(
    <div class="progress progress-indeterminate">
        <span class="sr-only">In elaborazione...</span>
        <div class="progress-bar" role="progressbar"></div>
    </div>
);
stories.add(
    "Progresso Indeterminato",
    withDocs(Indeterminato, withInfo()(ProgressoIndeterminato))
);

const ColoriComponent = () => (
    <div>
        <div className="mb-3">
            <div className="progress progress-color">
                <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        <div className="mb-3">
            <div className="progress progress-color">
                <div className="progress-bar bg-info" role="progressbar" style={{width: "33%"}} aria-valuenow="33" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        <div className="mb-3">
            <div className="progress progress-color">
                <div className="progress-bar bg-warning" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
        <div className="mb-3">
            <div className="progress progress-color">
                <div className="progress-bar bg-danger" role="progressbar" style={{width: "66%"}} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    </div>
);
stories.add(
    "Colori",
    withDocs(Colori, withInfo()(ColoriComponent))
);

const ButtonProgressComponent = () =>(
    <div class="container">
  <div class="row">
    <div class="col-12 col-sm-6">
      <p><strong>Bottone primario</strong></p>
      <button type="button" class="btn btn-primary btn-progress disabled" disabled>
        Label bottone <svg class="icon icon-light"><use xlinkHref="/svg/sprite.svg#it-github"></use></svg>
        <span class="progress">
				<span class="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></span>
			</span>
      </button>
    </div>
    <div class="col-12 col-sm-6">
      <p><strong>Bottone secondario</strong></p>
      <button type="button" class="btn btn-secondary btn-progress disabled" disabled>
        Label bottone <svg class="icon icon-light"><use xlinkHref="/svg/sprite.svg#it-github"></use></svg>
        <span class="progress">
				<span class="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></span>
			</span>
      </button>
    </div>
  </div>
</div>
);

stories.add(
    "Bottone con Progress Bar",
    withDocs(ButtonProgress, withInfo()(ButtonProgressComponent))
);

const knobsStories = storiesOf("Componenti/Progress Indicators", module);
knobsStories.addDecorator(withA11y);
knobsStories.addDecorator(withKnobs);

const EsempiInterattiviComponent = () => {
    const value = number("Valore", 25);
    const colors = ["", "success", "info", "warning", "danger"];
    const color = select("Background", colors, colors[0]);
    const label = text("Etichetta", "");

    return (
      <div>
            <div className="progress-bar-wrapper">
                  <div className="progress-bar-label">
                        <span className="sr-only">Progresso </span>{value}%
                  </div>
                  <div className="progress progress-color">
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

const SpinnerComponent = () => (
    <div class="container">
  <div class="row">
    <div class="col-6 col-lg-3">
      <p class="mb-3"><strong>Spinner standard</strong></p>
      <div class="progress-spinner">
        <span class="sr-only">Caricamento...</span>
      </div>
    </div>
    <div class="col-6 col-lg-3">
      <p class="mb-3"><strong>Spinner Attivo</strong></p>
      <div class="progress-spinner progress-spinner-active">
        <span class="sr-only">Caricamento...</span>
      </div>
    </div>
    <div class="col-6 col-lg-3 mt-3 mt-lg-0">
      <p class="mb-3"><strong>Small</strong></p>
      <div class="progress-spinner size-sm">
        <span class="sr-only">Caricamento...</span>
      </div>
    </div>
    <div class="col-6 col-lg-3 mt-3 mt-lg-0">
      <p class="mb-3"><strong>Small attivo</strong></p>
      <div class="progress-spinner progress-spinner-active size-sm">
        <span class="sr-only">Caricamento...</span>
      </div>
    </div>
  </div>
</div>
);


const SpinnerDoppioComponent = () => (
    <div class="container">
  <div class="row">
    <div class="col-6 col-lg-3">
      <p class="mb-3"><strong>Spinner doppio</strong></p>
      <div class="progress-spinner progress-spinner-double">
        <div class="progress-spinner-inner"></div>
        <div class="progress-spinner-inner"></div>
        <span class="sr-only">Caricamento...</span>
      </div>
    </div>
    <div class="col-6 col-lg-3">
      <p class="mb-3"><strong>Doppio attivo</strong></p>
      <div class="progress-spinner progress-spinner-double progress-spinner-active">
        <div class="progress-spinner-inner"></div>
        <div class="progress-spinner-inner"></div>
        <span class="sr-only">Caricamento...</span>
      </div>
    </div>
    <div class="col-6 col-lg-3 mt-3 mt-lg-0">
      <p class="mb-3"><strong>Doppio small</strong></p>
      <div class="progress-spinner progress-spinner-double size-sm">
        <div class="progress-spinner-inner"></div>
        <div class="progress-spinner-inner"></div>
        <span class="sr-only">Caricamento...</span>
      </div>
    </div>
    <div class="col-6 col-lg-3 mt-3 mt-lg-0">
      <p class="mb-3"><strong>Doppio small attivo</strong></p>
      <div class="progress-spinner progress-spinner-double size-sm progress-spinner-active">
        <div class="progress-spinner-inner"></div>
        <div class="progress-spinner-inner"></div>
        <span class="sr-only">Caricamento...</span>
      </div>
    </div>
  </div>
</div>
);
storiesOf("Componenti/Progress Indicators.Spinners", module)
.add(
    "Spinner",
    withDocs(Spinner, withInfo()(SpinnerComponent))
)
.add(
    "Spinner Doppio",
    withDocs(SpinnerDoppio, withInfo()(SpinnerDoppioComponent))
);