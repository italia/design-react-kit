import React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";

import InputGroupExample from "./input/example/InputGroupExample";
import InputLabel from "./input/InputLabel/InputLabel";
import InputIconButtonExample from "./input/InputIcon/InputIconButtonExample";
import InputPasswordExample from "./input/Password/InputPasswordExample";
import TextArea from "./input/TextArea/TextArea";
import { Input } from "../../src";

import Esempi from "./docs/Esempi.md";
import Placeholder from "./docs/Placeholder.md";
import IconButton from "./docs/IconButton.md";
import Password from "./docs/Password.md";
import Disabled from "./docs/Disabled.md";
import Readonly from "./docs/Readonly.md";
import Normalize from "./docs/Normalize.md";
import Textarea from "./docs/Textarea.md";

const InputPlaceHolderLabelComponent = () => (
    <div>
        <InputLabel label="Etichetta di esempio" />
        <Input
            label="Etichetta di esempio"
            type="text"
            placeholder="Testo di esempio"
        />
        <Input
            label="Etichetta di esempio"
            type="text"
            placeholder="Testo di esempio"
            infoText="Ulteriore testo informativo"
        />
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
    )
    .add(
        "Disabilitato",
        withInfo({
            text: Disabled
        })(() => <InputLabel label="Contenuto disabilitato" disabled />)
    )
    .add(
        "Readonly",
        withInfo({
            text: Readonly
        })(() => <InputLabel label="Contenuto in sola lettura" readOnly />)
    )
    .add(
        "Readonly normalizzato",
        withInfo({
            text: Normalize
        })(() => <InputLabel label="Contenuto in sola lettura" normalized />)
    )
    .add(
        "Area di testo",
        withInfo({
            text: Textarea
        })(() => <TextArea rows="3" label="Esempio di area di testo" />)
    )

    .add(
        "Area di testo con segnaposto",
        withInfo({
            text: Textarea
        })(() => (
            <TextArea
                rows="3"
                label="Esempio di area di testo"
                placeholder="Testo di esempio"
            />
        ))
    );
