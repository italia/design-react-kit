import React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";
import { withKnobs } from "@storybook/addon-knobs/react";

import { Navbar, NavbarToggler, } from "../../src";

import HeaderNavExample from './HeaderNavExample'

import Esempi from "./Esempi.md";

const EsempiComponent = () => (
    <HeaderNavExample></HeaderNavExample>
);

storiesOf("Componenti/HeaderNav", module)
    .addDecorator(withA11y)
    .addDecorator(withKnobs)
    .addParameters({ viewport: { defaultViewport: "iphone6" } })
    .add(
        "Esempio",
        withDocs(
            Esempi,
            withInfo({
                propTables: [Navbar, NavbarToggler],
                propTablesExclude: [HeaderNavExample]
            })(EsempiComponent)
        )
    );