import React from "react";
import { storiesOf } from "@storybook/react";
import { Viewport } from "@storybook/addon-viewport";

import OffcanvasExample from "./OffcanvasExample";

import Esempi from "./Esempi.md";

const stories = storiesOf("Componenti/Offcanvas", module);
stories.add("Esempio", () => (
  <Viewport name="iphone6">
    <OffcanvasExample />
  </Viewport>
));
