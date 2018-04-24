import React from "react";
import { storiesOf } from "@storybook/react";

import Welcome from "./Welcome";

const stories = storiesOf("Introduzione", module);
stories.add("Benvenuto", () => <Welcome />);

// automatically import all files ending in *.stories.js
const req = require.context("./", true, /.stories.js$/);
req.keys().forEach(filename => req(filename));
