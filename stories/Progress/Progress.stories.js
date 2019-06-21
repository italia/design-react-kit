import React from "react";
import {storiesOf} from "@storybook/react";
import {
    withKnobs,
    number,
    text,
    select
} from "@storybook/addon-knobs/react";
import {withA11y} from "@storybook/addon-a11y";
import {withInfo} from "@storybook/addon-info";

import Esempi from "./docs/Esempi.md";
import Etichette from "./docs/Etichette.md";
import Indeterminato from "./docs/Indeterminato.md";
import Colori from "./docs/Colori.md";
import ButtonProgress from "./docs/ButtonProgress.md";
import Spinner from "./docs/Spinner.md";
import SpinnerDoppio from "./docs/SpinnerDoppio.md";
import EsempiInterattivi from "./docs/EsempiInterattivi.md";

const EsempiComponent = () => (
    <div>
        <div className="mb-3">
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "0%"}} aria-valuenow="0"
                     aria-valuemin="0" aria-valuemax="100"/>
            </div>
        </div>
        <div className="mb-3">
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25"
                     aria-valuemin="0" aria-valuemax="100"/>
            </div>
        </div>
        <div className="mb-3">
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="50"
                     aria-valuemin="0" aria-valuemax="100"/>
            </div>
        </div>
        <div className="mb-3">
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="75"
                     aria-valuemin="0" aria-valuemax="100"/>
            </div>
        </div>
        <div className="mb-3">
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow="100"
                     aria-valuemin="0" aria-valuemax="100"/>
            </div>
        </div>
    </div>
);

const EtichetteComponent = () => (

    <div>
        <div className="progress-bar-wrapper">
            <div className="progress-bar-label"><span className="sr-only">Progresso </span>35%</div>
            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width: "35%"}} aria-valuenow="35"
                     aria-valuemin="0" aria-valuemax="100"/>
            </div>
        </div>
    </div>
);

const ProgressoIndeterminato = () => (
    <div className="progress progress-indeterminate">
        <span className="sr-only">In elaborazione...</span>
        <div className="progress-bar" role="progressbar"/>
    </div>
);

const ColoriComponent = () => (
    <div>
        <div className="mb-3">
            <div className="progress progress-color">
                <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25"
                     aria-valuemin="0" aria-valuemax="100"/>
            </div>
        </div>
        <div className="mb-3">
            <div className="progress progress-color">
                <div className="progress-bar bg-info" role="progressbar" style={{width: "33%"}} aria-valuenow="33"
                     aria-valuemin="0" aria-valuemax="100"/>
            </div>
        </div>
        <div className="mb-3">
            <div className="progress progress-color">
                <div className="progress-bar bg-warning" role="progressbar" style={{width: "50%"}} aria-valuenow="50"
                     aria-valuemin="0" aria-valuemax="100"/>
            </div>
        </div>
        <div className="mb-3">
            <div className="progress progress-color">
                <div className="progress-bar bg-danger" role="progressbar" style={{width: "66%"}} aria-valuenow="66"
                     aria-valuemin="0" aria-valuemax="100"/>
            </div>
        </div>
    </div>
);

const ButtonProgressComponent = () => (
    <div className="container">
        <div className="row">
            <div className="col-12 col-sm-6">
                <p><strong>Bottone primario</strong></p>
                <button type="button" className="btn btn-primary btn-progress disabled" disabled>
                    Label bottone <svg className="icon icon-light">
                    <use xlinkHref="/svg/sprite.svg#it-github"/>
                </svg>
                    <span className="progress">
				<span className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100"/>
			</span>
                </button>
            </div>
            <div className="col-12 col-sm-6">
                <p><strong>Bottone secondario</strong></p>
                <button type="button" className="btn btn-secondary btn-progress disabled" disabled>
                    Label bottone <svg className="icon icon-light">
                    <use xlinkHref="/svg/sprite.svg#it-github"/>
                </svg>
                    <span className="progress">
				<span className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="50"
                      aria-valuemin="0" aria-valuemax="100"/>
			</span>
                </button>
            </div>
        </div>
    </div>
);

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
                    <div className={`progress-bar bg-${color}`} role="progressbar" style={{width: `${value}%`}}
                         aria-valuenow={`${value}`} aria-valuemin="0" aria-valuemax="100">{label}</div>
                </div>
            </div>
        </div>


    );
};


const SpinnerComponent = () => (
    <div className="container">
        <div className="row">
            <div className="col-6 col-lg-3">
                <p className="mb-3"><strong>Spinner standard</strong></p>
                <div className="progress-spinner">
                    <span className="sr-only">Caricamento...</span>
                </div>
            </div>
            <div className="col-6 col-lg-3">
                <p className="mb-3"><strong>Spinner Attivo</strong></p>
                <div className="progress-spinner progress-spinner-active">
                    <span className="sr-only">Caricamento...</span>
                </div>
            </div>
            <div className="col-6 col-lg-3 mt-3 mt-lg-0">
                <p className="mb-3"><strong>Small</strong></p>
                <div className="progress-spinner size-sm">
                    <span className="sr-only">Caricamento...</span>
                </div>
            </div>
            <div className="col-6 col-lg-3 mt-3 mt-lg-0">
                <p className="mb-3"><strong>Small attivo</strong></p>
                <div className="progress-spinner progress-spinner-active size-sm">
                    <span className="sr-only">Caricamento...</span>
                </div>
            </div>
        </div>
    </div>
);


const SpinnerDoppioComponent = () => (
    <div className="container">
        <div className="row">
            <div className="col-6 col-lg-3">
                <p className="mb-3"><strong>Spinner doppio</strong></p>
                <div className="progress-spinner progress-spinner-double">
                    <div className="progress-spinner-inner"/>
                    <div className="progress-spinner-inner"/>
                    <span className="sr-only">Caricamento...</span>
                </div>
            </div>
            <div className="col-6 col-lg-3">
                <p className="mb-3"><strong>Doppio attivo</strong></p>
                <div className="progress-spinner progress-spinner-double progress-spinner-active">
                    <div className="progress-spinner-inner"/>
                    <div className="progress-spinner-inner"/>
                    <span className="sr-only">Caricamento...</span>
                </div>
            </div>
            <div className="col-6 col-lg-3 mt-3 mt-lg-0">
                <p className="mb-3"><strong>Doppio small</strong></p>
                <div className="progress-spinner progress-spinner-double size-sm">
                    <div className="progress-spinner-inner"/>
                    <div className="progress-spinner-inner"/>
                    <span className="sr-only">Caricamento...</span>
                </div>
            </div>
            <div className="col-6 col-lg-3 mt-3 mt-lg-0">
                <p className="mb-3"><strong>Doppio small attivo</strong></p>
                <div className="progress-spinner progress-spinner-double size-sm progress-spinner-active">
                    <div className="progress-spinner-inner"/>
                    <div className="progress-spinner-inner"/>
                    <span className="sr-only">Caricamento...</span>
                </div>
            </div>
        </div>
    </div>
);

storiesOf("Componenti/Progress Indicators", module)
    .addDecorator(withA11y)
    .add("Esempi", withInfo({
        text: Esempi
    })(EsempiComponent))
    .add("Etichette", withInfo({
        text: Etichette
    })(EtichetteComponent))
    .add("Progresso Indeterminato", withInfo({
        text: Indeterminato
    })(ProgressoIndeterminato))
    .add("Colori", withInfo({
        text: Colori
    })(ColoriComponent))
    .add("Bottone con Progress Bar", withInfo({
        text: ButtonProgress
    })(ButtonProgressComponent))
    .addDecorator(withKnobs)
    .add("Esempi interattivi", withInfo({
        text: EsempiInterattivi
    })(EsempiInterattiviComponent));

storiesOf("Componenti/Progress Indicators.Spinners", module)
    .add("Spinner", withInfo({
        text: Spinner
    })(SpinnerComponent))
    .add("Spinner Doppio", withInfo({
        text: SpinnerDoppio
    })(SpinnerDoppioComponent));
