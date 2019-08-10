import React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";

import { Card, Button } from "../../src";

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
            {/* start card */}
            <Card
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            {/* end card */}
        </div>
    </div>
);

const SimpleArticleComponent = () => (
    <div className="row">
        <div className="col-12 col-lg-6">
            {/* start card */}
            <Card
                article
                category="Category"
                date="10/12/2018"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit…"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua."
                signature="di Federico De Paolis"
            />

            {/* end card */}
        </div>
    </div>
);

const CardIconComponent = () => (
    <div className="row">
        <div className="col-12 col-lg-6">
            {/* Start card */}
            <Card
                icon
                iconName="it-file"
                category="Category"
                name="Name"
                title=" Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor…"
                text=" Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua."
            />

            {/* end card */}
        </div>
    </div>
);

const CardShadingComponent = () => (
    <div className="row">
        <div className="col-12 col-lg-6">
            {/* Start card */}
            <Card
                space
                shade
                title="Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor…"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua."
            />

            {/* end card */}
        </div>
    </div>
);

const BigCardComponent = () => (
    <div className="row">
        <div className="col-12 col-lg-8">
            {/* Start card */}
            <Card
                big
                iconName="it-card"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor…"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua."
            />
            {/* end card */}
        </div>
    </div>
);
const BigCardTagComponent = () => (
    <div className="row">
        <div className="col-12 col-lg-6">
            {/* Start card */}
            <Card
                big
                tagCard
                tagName="Tag"
                date="10/12/2018"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor…"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua."
                signature="di Federico De Paolis"
            />
            {/* end card */}
        </div>
    </div>
);

const CardImageComponent = () => (
    <div className="row">
        <div className="col-12 col-lg-6">
            {/* Start card */}
            <Card
                image="https://via.placeholder.com/310x190/0066cc/FFFFFF/?text=IMMAGINE%20DI%20ESEMPIO"
                imageTitle="img title"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit…"
            />
            {/* end card */}
        </div>
    </div>
);

const SpecialCardComponent = () => (
    <div className="row">
        <div className="col-12 col-lg-6">
            {/* Start card */}
            <Card
                specialCard
                image="https://via.placeholder.com/174x214/F9F9FE/0066CC/?text=IMMAGINE%20DI%20ESEMPIO"
                imageTitle="img title"
                date="10/12/2018"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit…"
            />
            {/* end card */}
        </div>
    </div>
);

storiesOf("Componenti/Cards", module)
    .addDecorator(withA11y)
    .add(
        "Simple Card",
        withInfo({
            text: SimpleCard,
            propTables: [Card],
            propTablesExclude: [Button]
        })(SimpleCardComponent)
    )
    .add(
        "Simple Article",
        withInfo({
            text: SimpleArticle,
            propTables: [Card],
        })(SimpleArticleComponent)
    )
    .add(
        "Card with icon",
        withInfo({
            text: CardIcon,
            propTables: [Card],
        })(CardIconComponent)
    )
    .add(
        "Card with shading",
        withInfo({
            text: CardShading,
            propTables: [Card],
            propTablesExclude: [Button]
        })(CardShadingComponent)
    )
    .add(
        "Big card",
        withInfo({
            text: BigCard,
            propTables: [Card],
        })(BigCardComponent)
    )
    .add(
        "Big card with tag",
        withInfo({
            text: BigCardTag,
            propTables: [Card],
        })(BigCardTagComponent)
    )
    .add(
        "Card with image",
        withInfo({
            text: CardImage,
            propTables: [Card],
        })(CardImageComponent)
    )
    .add(
        "Special cards",
        withInfo({
            text: SpecialCard,
            propTables: [Card],
        })(SpecialCardComponent)
    );
