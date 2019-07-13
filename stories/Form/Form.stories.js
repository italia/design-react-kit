import React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";

import InputGroupExample from "./input/example/InputGroupExample";
import InputLabel from "./input/placeholderLabel/InputLabel";
import InputPlaceHolderLabel from "./input/placeholderLabel/InputPlaceholderLabel";
import InputInformation from "./input/placeholderLabel/InputInformation";

import Esempi from "./docs/Esempi.md";
import Placeholder from "./docs/Placeholder.md";

const EsempiComponent = () => <InputGroupExample />;

const InputPlaceHolderLabelComponent = () => (
    <div>
        <InputLabel />
        <InputPlaceHolderLabel />
        <InputInformation />
    </div>
);

storiesOf("Componenti/Form.Input", module)
    .addDecorator(withA11y)
    .add(
        "Esempi di campi di input",
        withInfo({
            text: Esempi
        })(EsempiComponent)
    )
    .add(
        "Utilizzo di placeholder e label",
        withInfo({
            text: Placeholder
        })(InputPlaceHolderLabelComponent)
    );
