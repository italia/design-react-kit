import React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import { Skiplink, SkiplinkItem } from "../../src";

import SkipLinkExample from "./SkipLinkExample";

import Esempi from "./Esempi.md";

const stories = storiesOf("Componenti/Skiplink", module);
stories.addDecorator(withA11y);

stories.add(
    "Esempi",
    withDocs(
        Esempi,
        withInfo({
            propTables: [Skiplink, SkiplinkItem],
            propTablesExclude: [SkipLinkExample]
        })(() => <SkipLinkExample />)
    )
);
