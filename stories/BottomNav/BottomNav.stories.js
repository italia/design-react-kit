import React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";

import { Nav } from "../../src";

import Esempi from "./Esempi.md";
import Badge from "./Badge.md";
import Alert from "./Alert.md";
const EsempiComponent = () => (
    <nav class="bottom-nav">
        <ul>
            <li>
                <a href="#" class="active">
                    <svg class="icon ">
                        <use xlinkHref="/svg/sprite.svg#it-comment" />
                    </svg>
                    <span class="bottom-nav-label">messaggi</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <svg class="icon">
                        <use xlinkHref="/svg/sprite.svg#it-camera" />
                    </svg>
                    <span class="bottom-nav-label">immagini</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <svg class="icon">
                        <use xlinkHref="/svg/sprite.svg#it-file" />
                    </svg>
                    <span class="bottom-nav-label">documenti</span>
                </a>
            </li>
        </ul>
    </nav>
);
const BadgeComponent = () => (
    <nav class="bottom-nav">
        <ul>
            <li>
                <a href="#">
                    <div class="badge-wrapper">
                        <span class="bottom-nav-badge">1</span>
                    </div>
                    <svg class="icon">
                        <use xlinkHref="/svg/sprite.svg#it-comment" />
                    </svg>
                    <span class="bottom-nav-label">
                        messaggi<span class="sr-only"> - 1 da leggere</span>
                    </span>
                </a>
            </li>
            <li>
                <a href="#" class="active">
                    <div class="badge-wrapper">
                        <span class="bottom-nav-badge">2</span>
                    </div>
                    <svg class="icon">
                        <use xlinkHref="/svg/sprite.svg#it-camera" />
                    </svg>
                    <span class="bottom-nav-label">
                        immagini<span class="sr-only"> - 2 da vedere</span>
                    </span>
                </a>
            </li>
            <li>
                <a href="#">
                    <div class="badge-wrapper">
                        <span class="bottom-nav-badge">88</span>
                    </div>
                    <svg class="icon">
                        <use xlinkHref="/svg/sprite.svg#it-file" />
                    </svg>
                    <span class="bottom-nav-label">
                        documenti<span class="sr-only"> - 88 da esaminare</span>
                    </span>
                </a>
            </li>
            <li>
                <a href="#">
                    <svg class="icon">
                        <use xlinkHref="/svg/sprite.svg#it-star-outline" />
                    </svg>
                    <span class="bottom-nav-label">preferiti</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <svg class="icon">
                        <use xlinkHref="/svg/sprite.svg#it-settings" />
                    </svg>
                    <span class="bottom-nav-label">preferenze</span>
                </a>
            </li>
        </ul>
    </nav>
);

const AlertComponent = () => (
    <nav class="bottom-nav">
        <ul>
            <li>
                <a href="#" class="active">
                    <div class="badge-wrapper">
                        <span class="bottom-nav-alert" />
                    </div>
                    <svg class="icon">
                        <use xlinkHref="/svg/sprite.svg#it-comment" />
                    </svg>
                    <span class="bottom-nav-label">
                        messaggi
                        <span class="sr-only">
                            {" "}
                            - nuovo contenuto disponibile
                        </span>
                    </span>
                </a>
            </li>
            <li>
                <a href="#">
                    <svg class="icon">
                        <use xlinkHref="/svg/sprite.svg#it-camera" />
                    </svg>
                    <span class="bottom-nav-label">immagini</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <div class="badge-wrapper">
                        <span class="bottom-nav-alert" />
                    </div>
                    <svg class="icon">
                        <use xlinkHref="/svg/sprite.svg#it-file" />
                    </svg>
                    <span class="bottom-nav-label">
                        documenti
                        <span class="sr-only">
                            {" "}
                            - nuovo contenuto disponibile
                        </span>
                    </span>
                </a>
            </li>
            <li>
                <a href="#">
                    <svg class="icon">
                        <use xlinkHref="/svg/sprite.svg#it-star-outline" />
                    </svg>
                    <span class="bottom-nav-label">preferiti</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <svg class="icon">
                        <use xlinkHref="/svg/sprite.svg#it-settings" />
                    </svg>
                    <span class="bottom-nav-label">preferenze</span>
                </a>
            </li>
        </ul>
    </nav>
);

storiesOf("Componenti/BottomNav", module)
    .addDecorator(withA11y)
    .add(
        "Esempi",
        withInfo({
            text: Esempi,
            propTables: [Nav]
        })(EsempiComponent)
    )
    .add(
        "Badge",
        withInfo({
            text: Badge,
            propTables: [Nav]
        })(BadgeComponent)
    )
    .add(
        "Alert",
        withInfo({
            text: Alert,
            propTables: [Nav]
        })(AlertComponent)
    );
