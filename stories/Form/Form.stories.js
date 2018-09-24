import React from "react";
import { storiesOf } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

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
    Select,
    PasswordMeter,
    Toggle
} from "../../src";

import FormInputFileExample from "./FormInputFileExample";
import FormGroupsExample from "./FormGroupsExample";
import FormSizingExample from "./FormSizingExample";
import FormInputPasswordExample from "./FormInputPasswordExample";

import SelectExample from "../Select/SelectExample";
import CheckboxGroupsExample from "../Checkbox/CheckboxGroupsExample";
import RadioGroupsExample from "../Radio/RadioGroupsExample";
import AutocompleteExample from "../Autocomplete/AutocompleteExample";
import TogglesExample from "../Toggle/TogglesExample";
import TogglesGroupsExample from "../Toggle/TogglesGroupsExample";

import Esempi from "./Esempi.md";
import InputPassword from "./InputPassword.md";
import InputFile from "./InputFile.md";
import InputAutocomplete from "./InputAutocomplete.md";
import SelectEsempio from "./Select.md";
import SelectMultipla from "./SelectMultipla.md";
import SelectRicerca from "./SelectRicerca.md";
import SelectGruppi from "./SelectGruppi.md";
import Textarea from "./Textarea.md";
import IconeAggiuntive from "./IconeAggiuntive.md";
import Dimensioni from "./Dimensioni.md";
import Readonly from "./Readonly.md";
import ReadonlyNormalizzato from "./ReadonlyNormalizzato.md";
import CheckboxRadio from "./CheckboxRadio.md";
import Inline from "./Inline.md";
import Disabilitato from "./Disabilitato.md";
import Gruppi from "./Gruppi.md";
import Toggles from "./Toggles.md";
import TogglesDisabilitate from "./TogglesDisabilitate.md";
import GruppiToggles from "./GruppiToggles.md";
import FormGroupEsempio from "./FormGroup.md";
import FormGriglia from "./FormGriglia.md";
import DimensioneColonne from "./DimensioneColonne.md";
import AutoDimensionamento from "./AutoDimensionamento.md";
import InlineForms from "./InlineForms.md";
import TestoAiuto from "./TestoAiuto.md";
import FormDisabilitato from "./FormDisabilitato.md";

const stories = storiesOf("Componenti/Form", module);
stories.addDecorator(checkA11y);

const EsempiComponent = () => (
    <Form>
        <InputGroup className="pb-3">
            <InputGroupAddon addonType="prepend">
                <span
                    className="input-group-text it-search"
                    id="basic-addon1"
                />
            </InputGroupAddon>
            <Input type="text" placeholder="Username" aria-label="Username" />
        </InputGroup>

        <FormGroup>
            <Input type="text" name="text" id="exampleInputText" />
            <Label for="exampleInputText">Nominativo</Label>
        </FormGroup>

        <FormGroup>
            <Input type="number" name="number" id="exampleInputNumber" />
            <Label for="exampleInputNumber">Numero partecipanti</Label>
        </FormGroup>

        <FormGroup>
            <Input type="email" name="email" id="exampleInputEmail1" />
            <Label for="exampleInputEmail1">Email</Label>
            <FormText color="muted">
                Non condivideremo mai la tua email con nessun altro.
            </FormText>
        </FormGroup>
    </Form>
);
stories.add("Input text", withDocs(Esempi, withInfo()(EsempiComponent)));

stories.add(
    "Input password",
    withDocs(
        InputPassword,
        withInfo({
            propTables: [Label, FormText, PasswordInput, PasswordMeter],
            propTablesExclude: [FormInputPasswordExample]
        })(() => <FormInputPasswordExample />)
    )
);

stories.add(
    "Input file",
    withDocs(
        InputFile,
        withInfo({
            propTables: [Input, Label],
            propTablesExclude: [FormInputFileExample]
        })(() => <FormInputFileExample />)
    )
);

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
);

const TextareaComponent = () => (
    <Form>
        <FormGroup>
            <Input type="textarea" name="text" id="exampleText" rows="3" />
            <Label for="exampleText">Example textarea</Label>
        </FormGroup>
    </Form>
);
stories.add("Textarea", withDocs(Textarea, withInfo()(TextareaComponent)));

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
stories.add("Readonly", withDocs(Readonly, withInfo()(ReadonlyComponent)));

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
stories.add(
    "Readonly normalizzato",
    withDocs(ReadonlyNormalizzato, withInfo()(ReadonlyNormalizzatoComponent))
);

const CheckboxRadioComponent = () => (
    <Form className="m-3">
        <fieldset>
            <legend>Checkbox</legend>
            <FormGroup check>
                <Input id="checkbox1" type="checkbox" />
                <Label for="checkbox1" check>
                    Checkbox di esempio
                </Label>
            </FormGroup>
        </fieldset>

        <fieldset>
            <legend>Radio</legend>

            <FormGroup check>
                <Input name="gruppo1" type="radio" id="radio1" defaultChecked />
                <Label check for="radio1">
                    Radio di esempio 1
                </Label>
            </FormGroup>

            <FormGroup check>
                <Input name="gruppo1" type="radio" id="radio2" />
                <Label check for="radio2">
                    Radio di esempio 2
                </Label>
            </FormGroup>
        </fieldset>
    </Form>
);
stories.add(
    "Checkbox e radio",
    withDocs(CheckboxRadio, withInfo()(CheckboxRadioComponent))
);

const InlineComponent = () => (
    <section>
        <fieldset>
            <legend>Checkbox</legend>
            <Form className="m-3">
                <FormGroup check inline>
                    <Input id="checkbox1" type="checkbox" />
                    <Label for="checkbox1" check>
                        Checkbox non selezionato
                    </Label>
                </FormGroup>
                <FormGroup check inline>
                    <Input id="checkbox2" type="checkbox" defaultChecked />
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
                    <Input name="gruppo1" type="radio" id="radio2" />
                    <Label check for="radio2">
                        Opzione 2
                    </Label>
                </FormGroup>
            </Form>
        </fieldset>
    </section>
);
stories.add("Inline", withDocs(Inline, withInfo()(InlineComponent)));

const DisabilitatoComponent = () => (
    <section>
        <fieldset>
            <legend>Checkbox</legend>
            <Form className="m-3">
                <FormGroup check>
                    <Input disabled id="checkbox1" type="checkbox" />
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
                    <Input disabled name="gruppo1" type="radio" id="radio2" />
                    <Label check for="radio2">
                        Opzione disabilitata non selezionata
                    </Label>
                </FormGroup>
            </Form>
        </fieldset>
    </section>
);
stories.add(
    "Disabilitato",
    withDocs(Disabilitato, withInfo()(DisabilitatoComponent))
);

const GruppiComponent = () => (
    <section>
        <CheckboxGroupsExample />
        <RadioGroupsExample />
    </section>
);
stories.add(
    "Gruppi",
    withDocs(
        Gruppi,
        withInfo({
            propTables: [Input, Label, FormText],
            propTablesExclude: [CheckboxGroupsExample, RadioGroupsExample]
        })(GruppiComponent)
    )
);

stories.add(
    "Toggles",
    withDocs(
        Toggles,
        withInfo({
            propTables: [Toggle],
            propTablesExclude: [TogglesExample]
        })(() => <TogglesExample />)
    )
);

stories.add(
    "Toggles Disabilitate",
    withDocs(
        TogglesDisabilitate,
        withInfo({
            propTables: [Toggle],
            propTablesExclude: [TogglesExample]
        })(() => <TogglesExample disabled />)
    )
);

stories.add(
    "Gruppi di Toggles",
    withDocs(
        GruppiToggles,
        withInfo({
            propTables: [Toggle, FormText],
            propTablesExclude: [TogglesGroupsExample]
        })(() => <TogglesGroupsExample />)
    )
);

const moreStories = storiesOf("Componenti/Form/Layout", module);
moreStories.addDecorator(checkA11y);

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

const FormGrigliaComponent = () => (
    <section>
        <Form>
            <Row className="m-3">
                <FormGroup col>
                    <Label for="formNome">Nome</Label>
                    <Input type="text" name="text" id="formNome" />
                </FormGroup>
                <FormGroup col>
                    <Label for="formCognome">Cognome</Label>
                    <Input type="text" name="text" id="formCognome" />
                </FormGroup>
            </Row>
        </Form>

        <FormGroupsExample />
    </section>
);
moreStories.add(
    "Form a griglia",
    withDocs(
        FormGriglia,
        withInfo({
            propTables: [],
            propTablesExclude: [FormGroupsExample]
        })(FormGrigliaComponent)
    )
);

const DimensioneColonneComponent = () => (
    <section>
        <Form className="m-3">
            <div className="form-row">
                <FormGroup className="col-7">
                    <Label for="Citta" sm={7}>
                        Città
                    </Label>
                    <Input type="text" id="Citta" />
                </FormGroup>
                <FormGroup col>
                    <Label for="Comune" sm={1}>
                        Comune
                    </Label>
                    <Input type="text" id="Comune" />
                </FormGroup>
                <FormGroup col>
                    <Label for="CAP" sm={1}>
                        CAP
                    </Label>
                    <Input type="text" id="CAP" />
                </FormGroup>
            </div>
        </Form>
    </section>
);
moreStories.add(
    "Dimensione delle colonne",
    withDocs(DimensioneColonne, withInfo()(DimensioneColonneComponent))
);

moreStories.add(
    "Auto-dimensionamento",
    withDocs(
        AutoDimensionamento,
        withInfo({
            propTables: [Input, InputGroup, InputGroupAddon],
            propTablesExclude: [FormSizingExample]
        })(() => <FormSizingExample />)
    )
);

const InlineFormsComponent = () => (
    <section>
        <FormSizingExample inline />

        <Form inline className="m-3">
            <Label className="my-1 mr-2" for="inlineFormCustomSelectPref">
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
            />

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
moreStories.add(
    "Inline forms",
    withDocs(
        InlineForms,
        withInfo({
            propTables: [],
            propTablesExclude: [Button, FormSizingExample]
        })(InlineFormsComponent)
    )
);

const TestoAiutoComponent = () => (
    <section>
        <Form className="m-2">
            <FormGroup>
                <PasswordInput id="inputPassword5" className="form-control" />
                <Label for="inputPassword5">Password</Label>
                <FormText id="passwordHelpBlock" color="muted">
                    La tua password deve essere lunga 8-20 caratteri, contenere
                    lettere e numeri e non deve contenere spazi, caratteri
                    speciali o emoji.
                </FormText>
            </FormGroup>
        </Form>

        <Form inline>
            <FormGroup>
                <PasswordInput id="inputPassword6" className="mx-sm-3" />
                <Label for="inputPassword6">Password</Label>
                <FormText id="passwordHelpInline" color="muted">
                    Deve essere lunga 8-20 caratteri.
                </FormText>
            </FormGroup>
        </Form>
    </section>
);
moreStories.add(
    "Testo di aiuto",
    withDocs(TestoAiuto, withInfo()(TestoAiutoComponent))
);

const FormDisabilitatoComponent = () => (
    <section className="m-3">
        <Form>
            <fieldset disabled>
                <FormGroup>
                    <Input
                        id="disabledTextInput"
                        type="text"
                        placeholder="Disabled input"
                        disabled
                    />
                    <Label for="disabledTextInput">Input </Label>
                </FormGroup>

                <FormGroup className="mt-3">
                    <Select
                        id="exampleSelect"
                        placeholder="Scegli..."
                        options={[{ value: "", label: "..." }]}
                        disabled
                    />
                    <Label for="exampleSelect">Select disabilitata</Label>
                </FormGroup>

                <FormGroup className="mt-3">
                    <select id="disabledSelect" className="form-control">
                        <option>Disabled select</option>
                    </select>
                    <Label for="disabledSelect">
                        Select default disabilitata
                    </Label>
                </FormGroup>

                <div className="form-row">
                    <FormGroup check className="mt-3">
                        <Input id="disabledFieldsetCheck" type="checkbox" />
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
moreStories.add(
    "Form disabilitato",
    withDocs(FormDisabilitato, withInfo()(FormDisabilitatoComponent))
);
