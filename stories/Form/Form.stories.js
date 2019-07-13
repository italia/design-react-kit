import React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";

import InputGroupExample from "./input/example/InputGroupExample";
import InputLabel from "./input/placeholderLabel/InputLabel";
import InputPlaceHolderLabel from "./input/placeholderLabel/InputPlaceholderLabel";
import InputInformation from "./input/placeholderLabel/InputInformation";
import InputIconButtonExample from "./input/InputIcon/InputIconButtonExample";
import InputPasswordExample from "./input/Password/InputPasswordExample";

import Esempi from "./docs/Esempi.md";
import Placeholder from "./docs/Placeholder.md";
import IconButton from "./docs/IconButton.md";
import Password from "./docs/Password.md";

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
        })(() => <InputGroupExample />)
    )
    .add(
        "Utilizzo di placeholder e label",
        withInfo({
            text: Placeholder
        })(InputPlaceHolderLabelComponent)
    )
    .add(
        "Input con icona o bottoni",
        withInfo({
            text: IconButton
        })(() => <InputIconButtonExample />)
    )
    .add(
        "Input password",
        withInfo({
            text: Password
        })(() => <InputPasswordExample />)
    );
