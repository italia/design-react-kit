import React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";

import { Button } from "../../src";

import SimpleCard from "./docs/SimpleCard.md";
import SimpleArticle from "./docs/SimpleArticle.md";
import CardIcon from "./docs/CardIcon.md";
import CardShading from "./docs/CardShading.md";
import BigCard from "./docs/BigCard.md";
import BigCardTag from "./docs/BigCardTag.md";
import CardImage from "./docs/CardImage.md";
import SpecialCard from "./docs/SpecialCard.md";

const SimpleCardComponent = () => (
    <div className="row">
        <div className="col-12 col-lg-4">
            {/*start card */}
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod
                            tempor…</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            {/*end card */}
        </div>
    </div>
);

const SimpleArticleComponent = () => (
    <div className="row">
        <div className="col-12 col-lg-6">
            {/*start card */}
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-body">
                        <div className="category-top">
                            <a className="category" href="#">Category</a>
                            <span className="data">10/12/2018</span>
                        </div>
                        <h5 className="card-title big-heading">Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit…</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.</p>
                        <span
                            className="card-signature">di Federico De Paolis</span>
                        <a className="read-more" href="#">
                            <span className="text">Leggi di più</span>
                            <svg className="icon">
                                <use
                                    xlinkHref="/svg/sprite.svg#it-arrow-right"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            {/*end card */}
        </div>
    </div>
);

const CardIconComponent = () => (
    <div className="row">
        <div className="col-12 col-lg-6">
            {/*Start card */}
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-body">
                        <div className="categoryicon-top">
                            <svg className="icon">
                                <use xlinkHref="/svg/sprite.svg#it-file"></use>
                            </svg>
                            <span className="text">Category<br/>Name</span>
                        </div>
                        <a href="#">
                            <h5 className="card-title">Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit, sed do
                                eiusmod tempor…</h5>
                        </a>
                        <p className="card-text">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            {/*end card */}
        </div>
    </div>
);

const CardShadingComponent = () => (
    <div className="row">
        <div className="col-12 col-lg-6">
            {/*Start card */}
            <div className="card-wrapper card-space">
                <div className="card card-bg">
                    <div className="card-body">
                        <h5 className="card-title">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod
                            tempor…</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.</p>
                        <a className="read-more" href="#">
                            <span className="text">Leggi di più</span>
                            <svg className="icon">
                                <use
                                    xlinkHref="/svg/sprite.svg#it-arrow-right"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            {/*end card */}
        </div>
    </div>
);

const BigCardComponent = () => (
    <div className="row">
        <div className="col-12 col-lg-8">
            {/*Start card */}
            <div className="card-wrapper card-space">
                <div className="card card-bg card-big">
                    <div className="card-body">
                        <div className="top-icon">
                            <div className="top-icon">
                                <svg className="icon">
                                    <use
                                        xlinkHref="/svg/sprite.svg#it-card"></use>
                                </svg>
                            </div>
                        </div>
                        <h5 className="card-title">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod
                            tempor…</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.</p>
                        <a className="read-more" href="#">
                            <span className="text">Leggi di più</span>
                            <svg className="icon">
                                <use
                                    xlinkHref="/svg/sprite.svg#it-arrow-right"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            {/*end card */}
        </div>
    </div>
);
const BigCardTagComponent = () => (
    <div className="row">
        <div className="col-12 col-lg-6">
            {/*Start card */}
            <div className="card-wrapper card-space">
                <div className="card card-bg card-big no-after">
                    <div className="card-body">
                        <div className="head-tags">
                            <a className="card-tag" href="#">Tag</a>
                            <span className="data">10/10/2018</span>
                        </div>
                        <h5 className="card-title">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod
                            tempor…</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.</p>
                        <div className="it-card-footer">
                            <span className="card-signature">di Federico De Paolis</span>
                            <button
                                className="btn btn-outline-primary btn-sm">Action
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/*end card */}
        </div>
    </div>
);

const CardImageComponent = () => (
    <div className="row">
        <div className="col-12 col-lg-6">
            {/*Start card */}
            <div className="card-wrapper">
                <div className="card card-img no-after">
                    <div className="img-responsive-wrapper">
                        <div className="img-responsive">
                            <div className="img-wrapper">
                                <img
                                    src="https://via.placeholder.com/310x190/ebebeb/808080/?text=Immagine"
                                    title="img title" alt="imagealt"></img>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit…</h5>
                        <p className="card-text"></p><a className="read-more"
                                                        href="#"><span
                        className="text">Leggi di più</span>
                        <svg className="icon">
                            <use
                                xlinkHref="/svg/sprite.svg#it-arrow-right"></use>
                        </svg>
                    </a>
                    </div>
                </div>
            </div>
            {/*end card */}
        </div>
    </div>
);

const SpecialCardComponent = () => (
    <div className="row">
        <div className="col-12 col-lg-6">
            {/*Start card */}
            <div className="card-wrapper">
                <a className="card card-img no-after special-card" href="#">
                    <div className="img-responsive-wrapper">
                        <div className="img-responsive">
                            <div className="img-wrapper">
                                <img
                                    src="https://via.placeholder.com/310x190/ebebeb/808080/?text=Immagine"
                                    title="img title" alt="imagealt"></img>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="head-tags"><span
                            className="data">10/10/2018</span>
                        </div>
                        <h5 className="card-title">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit…</h5>
                    </div>
                </a>
            </div>
            {/*end card */}
        </div>
    </div>
);

storiesOf("Componenti/Cards", module)
    .addDecorator(withA11y)
    .add("Simple Card", withInfo({
        text: SimpleCard,
        propTablesExclude: [Button]
    })(SimpleCardComponent))
    .add("Simple Article", withInfo({
        text: SimpleArticle
    })(SimpleArticleComponent))
    .add("Card with icon", withInfo({
        text: CardIcon
    })(CardIconComponent))
    .add("Card with shading", withInfo({
        text: CardShading,
        propTablesExclude: [Button]
    })(CardShadingComponent))
    .add("Big card", withInfo({
        text: BigCard
    })(BigCardComponent))
    .add("Big card with tag", withInfo({
        text: BigCardTag
    })(BigCardTagComponent))
    .add("Card with image", withInfo({
        text: CardImage
    })(CardImageComponent))
    .add("Special cards", withInfo({
        text: SpecialCard
    })(SpecialCardComponent));


