import React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";

import { Breadcrumb, BreadcrumbItem } from "../../src";

import Esempi from "./docs/Esempi.md";
import Icone from "./docs/Icone.md";
import Background from "./docs/Background.md";

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

const IconeComponent = () => (
  <section>
    <nav className="breadcrumb-container">
      <Breadcrumb>
        <BreadcrumbItem>
          <i className="it-favorite" />
          <svg
            className="icon icon-sm icon-secondary align-top mr-1"
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
            className="icon icon-sm icon-secondary align-top mr-1"
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
            className="icon icon-sm icon-secondary align-top mr-1"
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

const BackgroundComponent = () => (
  <section>
    <nav className="breadcrumb-container" aria-label="breadcrumb">
      <ol className="breadcrumb dark">
        <li className="breadcrumb-item">
          <a href="#">Home</a>
          <span className="separator">/</span>
        </li>
        <li className="breadcrumb-item">
          <a href="#">Subsection</a>
          <span className="separator">/</span>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          <a href="#">Current section</a>
        </li>
      </ol>
    </nav>

    <nav className="breadcrumb-container" aria-label="breadcrumb">
      <ol className="breadcrumb dark">
        <li className="breadcrumb-item">
          <svg
            className="icon icon-sm icon-white align-top mr-1"
            aria-hidden="true"
          >
            <use xlinkHref="/svg/sprite.svg#it-star-outline" />
          </svg>
          <a href="#">Home</a>
          <span className="separator">/</span>
        </li>
        <li className="breadcrumb-item">
          <svg
            className="icon icon-sm icon-white align-top mr-1"
            aria-hidden="true"
          >
            <use xlinkHref="/svg/sprite.svg#it-star-outline" />
          </svg>
          <a href="#">Subsection</a>
          <span className="separator">/</span>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          <svg
            className="icon icon-sm icon-white align-top mr-1"
            aria-hidden="true"
          >
            <use xlinkHref="/svg/sprite.svg#it-star-outline" />
          </svg>
          <a href="#">Current section</a>
        </li>
      </ol>
    </nav>

    <nav className="breadcrumb-container" aria-label="breadcrumb">
      <ol className="breadcrumb dark">
        <li className="breadcrumb-item">
          <svg
            className="icon icon-sm icon-white align-top mr-1"
            aria-hidden="true"
          >
            <use xlinkHref="/svg/sprite.svg#it-star-outline" />
          </svg>
          <a href="#">Home</a>
          <span className="separator">&gt;</span>
        </li>
        <li className="breadcrumb-item">
          <svg
            className="icon icon-sm icon-white align-top mr-1"
            aria-hidden="true"
          >
            <use xlinkHref="/svg/sprite.svg#it-star-outline" />
          </svg>
          <a href="#">Subsection</a>
          <span className="separator">&gt;</span>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          <svg
            className="icon icon-sm icon-white align-top mr-1"
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

storiesOf("Componenti/Breadcrumb", module)
  .addDecorator(withA11y)
  .add(
    "Esempi",
    withInfo({
      text: Esempi
    })(EsempiComponent)
  )
  .add(
    "Con icone",
    withInfo({
      text: Icone
    })(IconeComponent)
  )
  .add(
    "Su sfondo scuro",
    withInfo({
      text: Background
    })(BackgroundComponent)
  );
