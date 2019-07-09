import React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";

import {
    Row,
    Form,
    FormGroup,
    Label,
    InputGroup,
    InputGroupAddon,
    Input,
    FormText,
    Button,
    PasswordInput,
    // Select,
    PasswordMeter,
    Toggle
} from "../../src";

import FormInputFileExample from "./FormInputFileExample";
import FormGroupsExample from "./FormGroupsExample";
import FormSizingExample from "./FormSizingExample";
import FormInputPasswordExample from "./FormInputPasswordExample";

// import SelectExample from "../Select/SelectExample";
import CheckboxGroupsExample from "../Checkbox/CheckboxGroupsExample";
import RadioGroupsExample from "../Radio/RadioGroupsExample";
// import AutocompleteExample from "../Autocomplete/AutocompleteExample";
import TogglesExample from "../Toggle/TogglesExample";
import TogglesGroupsExample from "../Toggle/TogglesGroupsExample";

import Esempi from "./docs/Esempi.md";
import InputPassword from "./docs/InputPassword.md";
import InputFile from "./docs/InputFile.md";
// import InputAutocomplete from "./docs/InputAutocomplete.md";
// import SelectEsempio from "./docs/Select.md";
// import SelectMultipla from "./docs/SelectMultipla.md";
// import SelectRicerca from "./docs/SelectRicerca.md";
// import SelectGruppi from "./docs/SelectGruppi.md";
import Textarea from "./docs/Textarea.md";
// import IconeAggiuntive from "./docs/IconeAggiuntive.md";
// import Dimensioni from "./docs/Dimensioni.md";
import Readonly from "./docs/Readonly.md";
import ReadonlyNormalizzato from "./docs/ReadonlyNormalizzato.md";
import CheckboxRadio from "./docs/CheckboxRadio.md";
import Inline from "./docs/Inline.md";
import Disabilitato from "./docs/Disabilitato.md";
import Gruppi from "./docs/Gruppi.md";
import Toggles from "./docs/Toggles.md";
import TogglesDisabilitate from "./docs/TogglesDisabilitate.md";
import GruppiToggles from "./docs/GruppiToggles.md";
// import FormGroupEsempio from "./docs/FormGroup.md";
import FormGriglia from "./docs/FormGriglia.md";
import DimensioneColonne from "./docs/DimensioneColonne.md";
import AutoDimensionamento from "./docs/AutoDimensionamento.md";
import InlineForms from "./docs/InlineForms.md";
import TestoAiuto from "./docs/TestoAiuto.md";
import FormDisabilitato from "./docs/FormDisabilitato.md";

const EsempiComponent = () => (
    <Form>
        <InputGroup className="pb-3">
            <InputGroupAddon addonType="prepend">
                <span
                    className="input-group-text it-search"
                    id="basic-addon1"
                />
            </InputGroupAddon>
            <Input type="text" placeholder="Username" aria-label="Username"/>
        </InputGroup>

        <FormGroup>
            <Input type="text" name="text" id="exampleInputText"/>
            <Label for="exampleInputText">Nominativo</Label>
        </FormGroup>

        <FormGroup>
            <Input type="number" name="number" id="exampleInputNumber"/>
            <Label for="exampleInputNumber">Numero partecipanti</Label>
        </FormGroup>

        <FormGroup>
            <Input type="email" name="email" id="exampleInputEmail1"/>
            <Label for="exampleInputEmail1">Email</Label>
            <FormText color="muted">
                Non condivideremo mai la tua email con nessun altro.
            </FormText>
        </FormGroup>
    </Form>
);

/*
stories.add(
    "Input autocomplete",
    withDocs(
        InputAutocomplete,
        withInfo({
            propTables: [],
            propTablesExclude: [AutocompleteExample]
        })(() => <AutocompleteExample />)
    )
);

const SelectComponent = () => (
    <div>
        <h4>Select Classica</h4>
        <SelectExample classic />
        <h4>Select Personalizzata</h4>
        <SelectExample />
    </div>
);

stories.add(
    "Select",
    withDocs(
        SelectEsempio,
        withInfo({
            propTables: [],
            propTablesExclude: [SelectExample]
        })(SelectComponent)
    )
);

stories.add(
    "Select multipla",
    withDocs(
        SelectMultipla,
        withInfo({
            propTables: [],
            propTablesExclude: [SelectExample]
        })(() => <SelectExample multi />)
    )
);

stories.add(
    "Select con ricerca",
    withDocs(
        SelectRicerca,
        withInfo({
            propTables: [],
            propTablesExclude: [SelectExample]
        })(() => <SelectExample search />)
    )
);

stories.add(
    "Select con gruppi di opzioni",
    withDocs(
        SelectGruppi,
        withInfo({
            propTables: [],
            propTablesExclude: [SelectExample]
        })(() => <SelectExample group multi />)
    )
); */

const TextareaComponent = () => (
    <Form>
        <FormGroup>
            <Input type="textarea" name="text" id="exampleText" rows="3"/>
            <Label for="exampleText">Example textarea</Label>
        </FormGroup>
    </Form>
);

/*
const IconeAggiuntiveComponent = () => (
    <Form>
        <FormGroup className="m-3">
            <i className="ico-prefix it-youtube" />
            <Input type="text" id="videoYoutube" />
            <Label for="videoYoutube">Link video di youtube</Label>
        </FormGroup>
        <SelectExample icon />
    </Form>
);
stories.add(
    "Icone aggiuntive",
    withDocs(
        IconeAggiuntive,
        withInfo({
            propTables: [],
            propTablesExclude: [SelectExample]
        })(IconeAggiuntiveComponent)
    )
);

const DimensioniComponent = () => (
    <section>
        <Form className="m-3">
            <Input placeholder="lg" bsSize="lg" aria-label="lg" />
            <Input placeholder="Input predefinito" aria-label="Input" />
            <Input placeholder="sm" bsSize="sm" aria-label="sm" />
        </Form>

        <Form className="m-3">
            <Select
                bsSize="lg"
                placeholder="Select grande"
                options={[{ value: "", label: "Select grande" }]}
            />
            <Select
                placeholder="Select predefinita"
                options={[{ value: "", label: "Select predefinita" }]}
            />
            <Select
                bsSize="sm"
                placeholder="Select piccola"
                options={[{ value: "", label: "Select piccola" }]}
            />
        </Form>
    </section>
);
stories.add(
    "Dimensioni",
    withDocs(
        Dimensioni,
        withInfo({
            propTables: [],
            propTablesExclude: [SelectExample]
        })(DimensioniComponent)
    )
);
*/

const ReadonlyComponent = () => (
    <Form className="m-3">
        <Input
            type="text"
            placeholder="Contenuto in sola lettura"
            aria-label="Contenuto in sola lettura"
            readOnly
        />
    </Form>
);

const ReadonlyNormalizzatoComponent = () => (
    <Form className="m-3">
        <FormGroup>
            <Input plaintext readOnly id="staticEmail">
                email@example.com
            </Input>
            <Label for="staticEmail">Email</Label>
        </FormGroup>
    </Form>
);

const CheckboxRadioComponent = () => (
    <Form className="m-3">
        <fieldset>
            <legend>Checkbox</legend>
            <FormGroup check>
                <Input id="checkbox1" type="checkbox"/>
                <Label for="checkbox1" check>
                    Checkbox di esempio
                </Label>
            </FormGroup>
        </fieldset>

        <fieldset>
            <legend>Radio</legend>

            <FormGroup check>
                <Input name="gruppo1" type="radio" id="radio1" defaultChecked/>
                <Label check for="radio1">
                    Radio di esempio 1
                </Label>
            </FormGroup>

            <FormGroup check>
                <Input name="gruppo1" type="radio" id="radio2"/>
                <Label check for="radio2">
                    Radio di esempio 2
                </Label>
            </FormGroup>
        </fieldset>
    </Form>
);

const InlineComponent = () => (
    <section>
        <fieldset>
            <legend>Checkbox</legend>
            <Form className="m-3">
                <FormGroup check inline>
                    <Input id="checkbox1" type="checkbox"/>
                    <Label for="checkbox1" check>
                        Checkbox non selezionato
                    </Label>
                </FormGroup>
                <FormGroup check inline>
                    <Input id="checkbox2" type="checkbox" defaultChecked/>
                    <Label for="checkbox2" check>
                        Checkbox selezionato
                    </Label>
                </FormGroup>
            </Form>
        </fieldset>

        <fieldset>
            <legend>Radio</legend>
            <Form className="m-3">
                <FormGroup check inline>
                    <Input
                        name="gruppo1"
                        type="radio"
                        id="radio1"
                        defaultChecked
                    />
                    <Label check for="radio1">
                        Opzione 1
                    </Label>
                </FormGroup>
                <FormGroup check inline>
                    <Input name="gruppo1" type="radio" id="radio2"/>
                    <Label check for="radio2">
                        Opzione 2
                    </Label>
                </FormGroup>
            </Form>
        </fieldset>
    </section>
);

const DisabilitatoComponent = () => (
    <section>
        <fieldset>
            <legend>Checkbox</legend>
            <Form className="m-3">
                <FormGroup check>
                    <Input disabled id="checkbox1" type="checkbox"/>
                    <Label for="checkbox1" check>
                        Checkbox disabilitato non selezionato
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Input
                        disabled
                        id="checkbox2"
                        type="checkbox"
                        defaultChecked
                    />
                    <Label for="checkbox2" check>
                        Checkbox disabilitato selezionato
                    </Label>
                </FormGroup>
            </Form>
        </fieldset>

        <fieldset>
            <legend>Radio</legend>
            <Form className="m-3">
                <FormGroup check>
                    <Input
                        disabled
                        name="gruppo1"
                        type="radio"
                        id="radio1"
                        defaultChecked
                    />
                    <Label check for="radio1">
                        Opzione disabilitata selezionata
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Input disabled name="gruppo1" type="radio" id="radio2"/>
                    <Label check for="radio2">
                        Opzione disabilitata non selezionata
                    </Label>
                </FormGroup>
            </Form>
        </fieldset>
    </section>
);

const GruppiComponent = () => (
    <section>
        <CheckboxGroupsExample/>
        <RadioGroupsExample/>
    </section>
);

/*
const FormGroupEsempioComponent = () => (
    <Form>
        <FormGroup>
            <Label for="FormGroupExampleInput">Esempio di etichetta</Label>
            <Input type="text" name="text" id="FormGroupExampleInput" />
        </FormGroup>
        <FormGroup>
            <Label for="FormGroupExampleInput2">
                Altro esempio di etichetta
            </Label>
            <Input type="text" name="text" id="FormGroupExampleInput2" />
        </FormGroup>
    </Form>
);
moreStories.add(
    "Form group",
    withDocs(FormGroupEsempio, withInfo()(FormGroupEsempioComponent))
);
*/

const DimensioneColonneComponent = () => (
    <section>
        <Form className="m-3">
            <div className="form-row">
                <FormGroup className="col-7">
                    <Label for="Citta" sm={7}>
                        Città
                    </Label>
                    <Input type="text" id="Citta"/>
                </FormGroup>
                <FormGroup col>
                    <Label for="Comune" sm={1}>
                        Comune
                    </Label>
                    <Input type="text" id="Comune"/>
                </FormGroup>
                <FormGroup col>
                    <Label for="CAP" sm={1}>
                        CAP
                    </Label>
                    <Input type="text" id="CAP"/>
                </FormGroup>
            </div>
        </Form>
    </section>
);

const FormGrigliaComponent = () => (
    <section>
        <Form>
            <Row className="m-3">
                <FormGroup col>
                    <Label for="formNome">Nome</Label>
                    <Input type="text" name="text" id="formNome"/>
                </FormGroup>
                <FormGroup col>
                    <Label for="formCognome">Cognome</Label>
                    <Input type="text" name="text" id="formCognome"/>
                </FormGroup>
            </Row>
        </Form>

        <FormGroupsExample/>
    </section>
);

const InlineFormsComponent = () => (
    <section>
        <FormSizingExample inline/>

        <Form inline className="m-3">
            {/*<Label className="my-1 mr-2" for="inlineFormCustomSelectPref">
                Preference
            </Label>
            <Select
                id="inlineFormCustomSelectPref"
                placeholder="Choose..."
                options={[
                    { value: "1", label: "One" },
                    { value: "2", label: "Two" },
                    { value: "3", label: "Three" }
                ]}
            />*/}

            <div className="custom-control custom-checkbox my-1 mr-sm-2">
                <Input
                    type="checkbox"
                    id="customControlInline"
                    className="custom-control-input"
                />
                <Label
                    className="custom-control-label"
                    for="customControlInline"
                >
                    Remember my preference
                </Label>
            </div>

            <Button color="primary" type="submit">
                Submit
            </Button>
        </Form>
    </section>
);

const TestoAiutoComponent = () => (
    <section>
        <Form className="m-2">
            <FormGroup>
                <PasswordInput id="inputPassword5" className="form-control"/>
                <Label for="inputPassword5">Password</Label>
                <FormText id="passwordHelpBlock" color="muted">
                    La tua password deve essere lunga 8-20 caratteri, contenere
                    lettere e numeri e non deve contenere spazi, caratteri
                    speciali o emoji.
                </FormText>
            </FormGroup>
        </Form>

        <Form>
            <FormGroup>
                <PasswordInput id="inputPassword6" className="mx-sm-3"/>
                <Label for="inputPassword6">Password</Label>
                <FormText id="passwordHelpInline" color="muted">
                    Deve essere lunga 8-20 caratteri.
                </FormText>
            </FormGroup>
        </Form>
    </section>
);

const FormDisabilitatoComponent = () => (
    <section className="m-3">
        <Form>
            <fieldset disabled>
                <FormGroup>
                    <Label for="disabledTextInput"
                           style={{ position: " static " }}>Input </Label>
                    <Input
                        id="disabledTextInput"
                        type="text"
                        placeholder="Disabled input"
                        disabled
                    />
                </FormGroup>

                {/*<FormGroup className="mt-3">
                <Label for="exampleSelect" style = {{position : ' static ' }}>Select disabilitata</Label>
                    <Select
                        id="exampleSelect"
                        placeholder="Scegli..."
                        options={[{ value: "", label: "..." }]}
                        disabled
                    />
                </FormGroup>*/}

                {/*<FormGroup className="mt-3">
                <Label for="disabledSelect" style = {{position : ' static ' }}>
                Select default disabilitata
            </Label>
                    <Select
                        classic
                        className="form-control"
                        placeholder="Select disabilitato"
                        disabled
                    />
                </FormGroup>*/}

                <div className="form-row">
                    <FormGroup check className="mt-3">
                        <Input id="disabledFieldsetCheck" type="checkbox"/>
                        <Label for="disabledFieldsetCheck">
                            Checkbox disabilitato
                        </Label>
                    </FormGroup>
                </div>

                <Button color="primary" className="mt-3" type="submit" disabled>
                    Submit
                </Button>
            </fieldset>
        </Form>
    </section>
);

storiesOf("Componenti/Form", module)
    .addDecorator(withA11y)
    .add("Input text", withInfo({
        text: Esempi
    })(EsempiComponent))
    .add("Input password", withInfo({
        text: InputPassword,
        propTables: [Label, FormText, PasswordInput, PasswordMeter],
        propTablesExclude: [FormInputPasswordExample]
    })(() => <FormInputPasswordExample/>))
    .add("Input file", withInfo({
        text: InputFile,
        propTables: [Input, Label],
        propTablesExclude: [FormInputFileExample]
    })(() => <FormInputFileExample/>))
    .add("Textarea", withInfo({
        text: Textarea
    })(TextareaComponent))
    .add("Input Readonly", withInfo({
        text: Readonly
    })(ReadonlyComponent))
    .add("Input Readonly normalizzato", withInfo({
        text: ReadonlyNormalizzato
    })(ReadonlyNormalizzatoComponent))
storiesOf("Componenti/Form.Checkbox and radio", module)
    .addDecorator(withA11y)    
    .add("Checkbox e radio", withInfo({
        text: CheckboxRadio
    })(CheckboxRadioComponent))
    .add("Inline", withInfo({
        text: Inline
    })(InlineComponent))
    .add("Disabilitato", withInfo({
        text: Disabilitato
    })(DisabilitatoComponent))
    .add("Gruppi", withInfo({
        text: Gruppi,
        propTables: [Input, Label, FormText],
        propTablesExclude: [CheckboxGroupsExample, RadioGroupsExample]
    })(GruppiComponent))
storiesOf("Componenti/Form.Toggles", module)
    .addDecorator(withA11y) 
    .add("Toggles", withInfo({
        text: Toggles,
        propTables: [Toggle],
        propTablesExclude: [TogglesExample]
    })(() => <TogglesExample/>))
    .add("Toggles Disabilitate", withInfo({
        text: TogglesDisabilitate,
        propTables: [Toggle],
        propTablesExclude: [TogglesExample]
    })(() => <TogglesExample disabled/>))
    .add("Gruppi di Toggles", withInfo({
        text: GruppiToggles,
        propTables: [Toggle, FormText],
        propTablesExclude: [TogglesGroupsExample]
    })(() => <TogglesGroupsExample/>));

storiesOf("Componenti/Form.Layout", module)
    .addDecorator(withA11y)
    .add("Form a griglia", withInfo({
        text: FormGriglia,
        propTables: [],
        propTablesExclude: [FormGroupsExample]
    })(FormGrigliaComponent))
    .add("Dimensione delle colonne", withInfo({
        text: DimensioneColonne
    })(DimensioneColonneComponent))
    .add("Auto dimensionamento", withInfo({
        text: AutoDimensionamento,
        propTables: [Input, InputGroup, InputGroupAddon],
        propTablesExclude: [FormSizingExample]
    })(() => <FormSizingExample/>))
    .add("Inline forms", withInfo({
        text: InlineForms,
        propTables: [],
        propTablesExclude: [Button, FormSizingExample]
    })(InlineFormsComponent))
    .add("Testo di aiuto", withInfo({
        text: TestoAiuto
    })(TestoAiutoComponent))
    .add("Form disabilitato", withInfo({
        text: FormDisabilitato
    })(FormDisabilitatoComponent));
