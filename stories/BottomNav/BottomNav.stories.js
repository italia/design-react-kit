import React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";

import { Nav } from "../../src";

import Esempi from "./docs/Esempi.md";
import Badge from "./docs/Badge.md";
import Alert from "./docs/Alert.md";

const EsempiComponent = () => (
    <nav className="bottom-nav">
        <ul>
            <li>
                <a href="#" className="active">
                    <svg className="icon ">
                        <use xlinkHref="/svg/sprite.svg#it-comment"/>
                    </svg>
                    <span className="bottom-nav-label">messaggi</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <svg className="icon">
                        <use xlinkHref="/svg/sprite.svg#it-camera"/>
                    </svg>
                    <span className="bottom-nav-label">immagini</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <svg className="icon">
                        <use xlinkHref="/svg/sprite.svg#it-file"/>
                    </svg>
                    <span className="bottom-nav-label">documenti</span>
                </a>
            </li>
        </ul>
    </nav>
);

const BadgeComponent = () => (
    <nav className="bottom-nav">
        <ul>
            <li>
                <a href="#">
                    <div className="badge-wrapper">
                        <span className="bottom-nav-badge">1</span>
                    </div>
                    <svg className="icon">
                        <use xlinkHref="/svg/sprite.svg#it-comment"/>
                    </svg>
                    <span className="bottom-nav-label">
                        messaggi<span className="sr-only"> - 1 da leggere</span>
                    </span>
                </a>
            </li>
            <li>
                <a href="#" className="active">
                    <div className="badge-wrapper">
                        <span className="bottom-nav-badge">2</span>
                    </div>
                    <svg className="icon">
                        <use xlinkHref="/svg/sprite.svg#it-camera"/>
                    </svg>
                    <span className="bottom-nav-label">
                        immagini<span className="sr-only"> - 2 da vedere</span>
                    </span>
                </a>
            </li>
            <li>
                <a href="#">
                    <div className="badge-wrapper">
                        <span className="bottom-nav-badge">88</span>
                    </div>
                    <svg className="icon">
                        <use xlinkHref="/svg/sprite.svg#it-file"/>
                    </svg>
                    <span className="bottom-nav-label">
                        documenti<span
                        className="sr-only"> - 88 da esaminare</span>
                    </span>
                </a>
            </li>
            <li>
                <a href="#">
                    <svg className="icon">
                        <use xlinkHref="/svg/sprite.svg#it-star-outline"/>
                    </svg>
                    <span className="bottom-nav-label">preferiti</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <svg className="icon">
                        <use xlinkHref="/svg/sprite.svg#it-settings"/>
                    </svg>
                    <span className="bottom-nav-label">preferenze</span>
                </a>
            </li>
        </ul>
    </nav>
);

const AlertComponent = () => (
    <nav className="bottom-nav">
        <ul>
            <li>
                <a href="#" className="active">
                    <div className="badge-wrapper">
                        <span className="bottom-nav-alert"/>
                    </div>
                    <svg className="icon">
                        <use xlinkHref="/svg/sprite.svg#it-comment"/>
                    </svg>
                    <span className="bottom-nav-label">
                        messaggi
                        <span className="sr-only">
                            {" "}
                            - nuovo contenuto disponibile
                        </span>
                    </span>
                </a>
            </li>
            <li>
                <a href="#">
                    <svg className="icon">
                        <use xlinkHref="/svg/sprite.svg#it-camera"/>
                    </svg>
                    <span className="bottom-nav-label">immagini</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <div className="badge-wrapper">
                        <span className="bottom-nav-alert"/>
                    </div>
                    <svg className="icon">
                        <use xlinkHref="/svg/sprite.svg#it-file"/>
                    </svg>
                    <span className="bottom-nav-label">
                        documenti
                        <span className="sr-only">
                            {" "}
                            - nuovo contenuto disponibile
                        </span>
                    </span>
                </a>
            </li>
            <li>
                <a href="#">
                    <svg className="icon">
                        <use xlinkHref="/svg/sprite.svg#it-star-outline"/>
                    </svg>
                    <span className="bottom-nav-label">preferiti</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <svg className="icon">
                        <use xlinkHref="/svg/sprite.svg#it-settings"/>
                    </svg>
                    <span className="bottom-nav-label">preferenze</span>
                </a>
            </li>
        </ul>
    </nav>
);

storiesOf("Componenti/BottomNav", module)
    .addDecorator(withA11y)
    .add("Esempi", withInfo({
        text: Esempi,
        propTables: [Nav]
    })(EsempiComponent))
    .add("Badge", withInfo({
        text: Badge,
        propTables: [Nav]
    })(BadgeComponent))
    .add("Alert", withInfo({
        text: Alert,
        propTables: [Nav]
    })(AlertComponent));
