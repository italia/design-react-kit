import React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs/react";

import { Navbar, NavbarToggler, Offcanvas } from "../../src";

import OffcanvasExample from "./OffcanvasExample";

import Esempi from "./docs/Esempi.md";

storiesOf("Componenti/Offcanvas", module)
    .addDecorator(withA11y)
    .addDecorator(withKnobs)
    .addParameters({ viewport: { defaultViewport: "iphone6" } })
    .add(
        "Esempio", withInfo({
            text: Esempi,
            propTables: [Navbar, NavbarToggler, Offcanvas],
            propTablesExclude: [OffcanvasExample]
        })(() => <OffcanvasExample />))
