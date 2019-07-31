import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number, text, select } from "@storybook/addon-knobs/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";

import { Progress, Button } from "../../src";

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
            <Progress value="0" />
        </div>
        <div className="mb-3">
            <Progress value="25" />
        </div>
        <div className="mb-3">
            <Progress value="50" />
        </div>
        <div className="mb-3">
            <Progress value="75" />
        </div>
        <div className="mb-3">
            <Progress value="100" />
        </div>
    </div>
);

const EtichetteComponent = () => (
    <div>
        <Progress value="35" label="progresso" />
    </div>
);

const ProgressoIndeterminato = () => (
    <Progress intermediate label="In elaborazione..." />
);

const ColoriComponent = () => (
    <div>
        <div className="mb-3">
            <Progress value="25" color="success" />
        </div>
        <div className="mb-3">
            <Progress value="33" color="info" />
        </div>
        <div className="mb-3">
            <Progress value="50" color="warning" />
        </div>
        <div className="mb-3">
            <Progress value="66" color="danger" />
        </div>
    </div>
);

const ButtonProgressComponent = () => (
    <div className="container">
        <div className="row">
            <div className="col-12 col-sm-6">
                <p>
                    <strong>Bottone primario</strong>
                </p>
                <Button color="primary" className="btn-progress" disabled>
                    Label bottone{" "}
                    <svg className="icon icon-light">
                        <use xlinkHref="/svg/sprite.svg#it-github" />
                    </svg>
                    <span>
                        <Progress value="50" />
                    </span>
                </Button>
            </div>
            <div className="col-12 col-sm-6">
                <p>
                    <strong>Bottone secondario</strong>
                </p>
                <Button color="secondary" className="btn-progress" disabled>
                    Label bottone{" "}
                    <svg className="icon icon-light">
                        <use xlinkHref="/svg/sprite.svg#it-github" />
                    </svg>
                    <span>
                        <Progress value="50" />
                    </span>
                </Button>
            </div>
        </div>
    </div>
);

const EsempiInterattiviComponent = () => {
    const value = number("Valore", 25);
    const colors = ["", "success", "info", "warning", "danger"];
    const color = select("Color", colors, colors[0]);
    const label = text("Etichetta", "progresso");

    return (
        <div>
            <Progress value={value} label={label} color={color} />
        </div>
    );
};

const SpinnerComponent = () => (
    <div className="container">
        <div className="row">
            <div className="col-6 col-lg-3">
                <p className="mb-3">
                    <strong>Spinner standard</strong>
                </p>
                <div className="progress-spinner">
                    <span className="sr-only">Caricamento...</span>
                </div>
            </div>
            <div className="col-6 col-lg-3">
                <p className="mb-3">
                    <strong>Spinner Attivo</strong>
                </p>
                <div className="progress-spinner progress-spinner-active">
                    <span className="sr-only">Caricamento...</span>
                </div>
            </div>
            <div className="col-6 col-lg-3 mt-3 mt-lg-0">
                <p className="mb-3">
                    <strong>Small</strong>
                </p>
                <div className="progress-spinner size-sm">
                    <span className="sr-only">Caricamento...</span>
                </div>
            </div>
            <div className="col-6 col-lg-3 mt-3 mt-lg-0">
                <p className="mb-3">
                    <strong>Small attivo</strong>
                </p>
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
                <p className="mb-3">
                    <strong>Spinner doppio</strong>
                </p>
                <div className="progress-spinner progress-spinner-double">
                    <div className="progress-spinner-inner" />
                    <div className="progress-spinner-inner" />
                    <span className="sr-only">Caricamento...</span>
                </div>
            </div>
            <div className="col-6 col-lg-3">
                <p className="mb-3">
                    <strong>Doppio attivo</strong>
                </p>
                <div className="progress-spinner progress-spinner-double progress-spinner-active">
                    <div className="progress-spinner-inner" />
                    <div className="progress-spinner-inner" />
                    <span className="sr-only">Caricamento...</span>
                </div>
            </div>
            <div className="col-6 col-lg-3 mt-3 mt-lg-0">
                <p className="mb-3">
                    <strong>Doppio small</strong>
                </p>
                <div className="progress-spinner progress-spinner-double size-sm">
                    <div className="progress-spinner-inner" />
                    <div className="progress-spinner-inner" />
                    <span className="sr-only">Caricamento...</span>
                </div>
            </div>
            <div className="col-6 col-lg-3 mt-3 mt-lg-0">
                <p className="mb-3">
                    <strong>Doppio small attivo</strong>
                </p>
                <div className="progress-spinner progress-spinner-double size-sm progress-spinner-active">
                    <div className="progress-spinner-inner" />
                    <div className="progress-spinner-inner" />
                    <span className="sr-only">Caricamento...</span>
                </div>
            </div>
        </div>
    </div>
);

storiesOf("Componenti/Progress Indicators", module)
    .addDecorator(withA11y)
    .add(
        "Esempi",
        withInfo({
            text: Esempi
        })(EsempiComponent)
    )
    .add(
        "Etichette",
        withInfo({
            text: Etichette
        })(EtichetteComponent)
    )
    .add(
        "Progresso Indeterminato",
        withInfo({
            text: Indeterminato
        })(ProgressoIndeterminato)
    )
    .add(
        "Colori",
        withInfo({
            text: Colori
        })(ColoriComponent)
    )
    .add(
        "Bottone con Progress Bar",
        withInfo({
            text: ButtonProgress
        })(ButtonProgressComponent)
    )
    .addDecorator(withKnobs)
    .add(
        "Esempi interattivi",
        withInfo({
            text: EsempiInterattivi
        })(EsempiInterattiviComponent)
    );

storiesOf("Componenti/Progress Indicators.Spinners", module)
    .add(
        "Spinner",
        withInfo({
            text: Spinner
        })(SpinnerComponent)
    )
    .add(
        "Spinner Doppio",
        withInfo({
            text: SpinnerDoppio
        })(SpinnerDoppioComponent)
    );
