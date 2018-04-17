import React from "react";
import Welcome from "./Welcome";

import { storiesOf } from "@storybook/react";

const stories = storiesOf("Introduzione", module);

stories.add("Benvenuto", () => <Welcome />);