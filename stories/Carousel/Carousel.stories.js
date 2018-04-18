import React from "react";
import { storiesOf } from "@storybook/react";
import { withDocs } from "../utils";

import CarouselExample from "./CarouselExample";

import Esempi from "./Esempi.md";
import ConControlli from "./ConControlli.md";
import ConIndicatori from "./ConIndicatori.md";
import ConDidascalie from "./ConDidascalie.md";

const stories = storiesOf("Componenti/Carousel", module);

stories.add("Solo diapositive", withDocs(Esempi, () => <CarouselExample />));
stories.add(
  "Con i controlli",
  withDocs(ConControlli, () => <CarouselExample controls={true} />)
);
stories.add(
  "Con gli indicatori",
  withDocs(ConIndicatori, () => (
    <CarouselExample controls={true} indicators={true} />
  ))
);
stories.add(
  "Con le didascalie",
  withDocs(ConDidascalie, () => (
    <CarouselExample controls={true} indicators={true} captions={true} />
  ))
);
