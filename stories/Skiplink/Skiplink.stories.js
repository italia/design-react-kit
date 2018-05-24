import React from "react";
import { storiesOf } from "@storybook/react";
import { withDocs } from "../utils";

import SkipLinkExample from "./SkipLinkExample";

import Esempi from "./Esempi.md";

const stories = storiesOf("Componenti/Skiplink", module);

stories.add("Esempi", withDocs(Esempi, () => <SkipLinkExample />));
