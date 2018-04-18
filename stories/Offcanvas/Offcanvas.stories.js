import React from "react";
import { storiesOf } from "@storybook/react";
import { Viewport } from "@storybook/addon-viewport";

import OffcanvasExample from "./OffcanvasExample";

const stories = storiesOf("Componenti/Offcanvas", module);
stories.add("Esempio", () => (
  <Viewport name="iphone6">
    <OffcanvasExample />
  </Viewport>
));
