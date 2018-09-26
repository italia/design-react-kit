import React from "react";
import { storiesOf } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import {
    Carousel,
    CarouselItem,
    CarouselCaption,
    CarouselControl,
    CarouselIndicators
} from "../../src";
import CarouselExample from "./CarouselExample";

import Esempi from "./Esempi.md";
import ConControlli from "./ConControlli.md";
import ConIndicatori from "./ConIndicatori.md";
import ConDidascalie from "./ConDidascalie.md";

const stories = storiesOf("Componenti/Carousel", module);
stories.addDecorator(checkA11y);

stories.add(
    "Solo diapositive",
    withDocs(
        Esempi,
        withInfo({
            propTables: [Carousel, CarouselItem],
            propTablesExclude: [CarouselExample]
        })(() => <CarouselExample />)
    )
);
stories.add(
    "Con i controlli",
    withDocs(
        ConControlli,
        withInfo({
            propTables: [Carousel, CarouselItem, CarouselControl],
            propTablesExclude: [CarouselExample]
        })(() => <CarouselExample controls />)
    )
);
stories.add(
    "Con gli indicatori",
    withDocs(
        ConIndicatori,
        withInfo({
            propTables: [Carousel, CarouselItem, CarouselIndicators],
            propTablesExclude: [CarouselExample]
        })(() => <CarouselExample controls indicators />)
    )
);
stories.add(
    "Con le didascalie",
    withDocs(
        ConDidascalie,
        withInfo({
            propTables: [Carousel, CarouselItem, CarouselCaption],
            propTablesExclude: [CarouselExample]
        })(() => <CarouselExample controls indicators captions />)
    )
);
