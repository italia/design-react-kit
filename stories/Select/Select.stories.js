import React from "react";
import { storiesOf } from "@storybook/react";

import SelectExample from "./SelectExample";

const stories = storiesOf("Componenti/Select", module);

stories.add("Esempi", () => <SelectExample />);
stories.add("Multipla", () => <SelectExample multi />);
stories.add("Con ricerca", () => <SelectExample search />);
stories.add("Con gruppi di opzioni", () => <SelectExample group multi />);
