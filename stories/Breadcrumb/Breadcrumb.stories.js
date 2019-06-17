import React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";

import { Breadcrumb, BreadcrumbItem } from "../../src";

import Esempi from "./Esempi.md";
import Icone from "./Icone.md";
import Background from "./Background.md";

const stories = storiesOf("Componenti/Breadcrumb", module);
stories.addDecorator(withA11y);

const EsempiComponent = () => (
    <section>
        <nav className="breadcrumb-container">
            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="#">
                        Home<span className="separator">/</span>
                    </a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <a href="#">
                        Subsection<span className="separator">/</span>
                    </a>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    <a href="#">Current section</a>
                </BreadcrumbItem>
            </Breadcrumb>
        </nav>

        <nav className="breadcrumb-container">
            <Breadcrumb>
                <BreadcrumbItem>
                    <a href="#">
                        Home<span className="separator">&gt;</span>
                    </a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <a href="#">
                        Subsection<span className="separator">&gt;</span>
                    </a>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    <a href="#">Current section</a>
                </BreadcrumbItem>
            </Breadcrumb>
        </nav>
    </section>
);
stories.add("Esempi", withInfo({
    text: Esempi
})(EsempiComponent));

const IconeComponent = () => (
    <section>
        <nav className="breadcrumb-container">
            <Breadcrumb>
                <BreadcrumbItem>
                    <i className="it-favorite" />
                    <svg
                        class="icon icon-sm icon-secondary align-top mr-1"
                        aria-hidden="true"
                    >
                        <use xlinkHref="/svg/sprite.svg#it-star-outline" />
                    </svg>
                    <a href="#">
                        Home<span className="separator">/</span>
                    </a>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <i className="it-favorite" />
                    <svg
                        class="icon icon-sm icon-secondary align-top mr-1"
                        aria-hidden="true"
                    >
                        <use xlinkHref="/svg/sprite.svg#it-star-outline" />
                    </svg>
                    <a href="#">
                        Subsection<span className="separator">/</span>
                    </a>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    <i className="it-favorite" />
                    <svg
                        class="icon icon-sm icon-secondary align-top mr-1"
                        aria-hidden="true"
                    >
                        <use xlinkHref="/svg/sprite.svg#it-star-outline" />
                    </svg>
                    <a href="#">Current section</a>
                </BreadcrumbItem>
            </Breadcrumb>
        </nav>
    </section>
);
stories.add("Con icone",withInfo({
    text: Icone
})(IconeComponent));

const BackgroundComponent = () => (
    <section>
        <nav class="breadcrumb-container" aria-label="breadcrumb">
            <ol class="breadcrumb dark">
                <li class="breadcrumb-item">
                    <a href="#">Home</a>
                    <span class="separator">/</span>
                </li>
                <li class="breadcrumb-item">
                    <a href="#">Subsection</a>
                    <span class="separator">/</span>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                    <a href="#">Current section</a>
                </li>
            </ol>
        </nav>

        <nav class="breadcrumb-container" aria-label="breadcrumb">
            <ol class="breadcrumb dark">
                <li class="breadcrumb-item">
                    <svg
                        class="icon icon-sm icon-white align-top mr-1"
                        aria-hidden="true"
                    >
                        <use xlinkHref="/svg/sprite.svg#it-star-outline" />
                    </svg>
                    <a href="#">Home</a>
                    <span class="separator">/</span>
                </li>
                <li class="breadcrumb-item">
                    <svg
                        class="icon icon-sm icon-white align-top mr-1"
                        aria-hidden="true"
                    >
                        <use xlinkHref="/svg/sprite.svg#it-star-outline" />
                    </svg>
                    <a href="#">Subsection</a>
                    <span class="separator">/</span>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                    <svg
                        class="icon icon-sm icon-white align-top mr-1"
                        aria-hidden="true"
                    >
                        <use xlinkHref="/svg/sprite.svg#it-star-outline" />
                    </svg>
                    <a href="#">Current section</a>
                </li>
            </ol>
        </nav>

        <nav class="breadcrumb-container" aria-label="breadcrumb">
            <ol class="breadcrumb dark">
                <li class="breadcrumb-item">
                    <svg
                        class="icon icon-sm icon-white align-top mr-1"
                        aria-hidden="true"
                    >
                        <use xlinkHref="/svg/sprite.svg#it-star-outline" />
                    </svg>
                    <a href="#">Home</a>
                    <span class="separator">&gt;</span>
                </li>
                <li class="breadcrumb-item">
                    <svg
                        class="icon icon-sm icon-white align-top mr-1"
                        aria-hidden="true"
                    >
                        <use xlinkHref="/svg/sprite.svg#it-star-outline" />
                    </svg>
                    <a href="#">Subsection</a>
                    <span class="separator">&gt;</span>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                    <svg
                        class="icon icon-sm icon-white align-top mr-1"
                        aria-hidden="true"
                    >
                        <use xlinkHref="/svg/sprite.svg#it-star-outline" />
                    </svg>
                    <a href="#">Current section</a>
                </li>
            </ol>
        </nav>
    </section>
);
stories.add(
    "Su sfondo scuro", withInfo({
        text: Background, 
    })(BackgroundComponent));
