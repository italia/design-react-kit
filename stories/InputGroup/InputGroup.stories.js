import React from "react";
import { storiesOf } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import {
    FormGroup,
    Label,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupText,
    DropdownToggle,
    DropdownItem,
    Button
} from "../../src";

import InputGroupDropdownExample from "./InputGroupDropdownExample";

import Esempi from "./Esempi.md";
import Dimensioni from "./Dimensioni.md";
import CheckboxRadio from "./CheckboxRadio.md";
import InputMultipli from "./InputMultipli.md";
import AggiunteMultiple from "./AggiunteMultiple.md";
import AggiuntaBottoni from "./AggiuntaBottoni.md";
import BottoniDropdown from "./BottoniDropdown.md";
import PulsantiSegmentati from "./PulsantiSegmentati.md";

const stories = storiesOf("Componenti/Form/Input Group", module);
stories.addDecorator(withA11y);

const EsempiComponent = () => (
      <div className="p-3">
      <div className="form-group">
            <input type="text" className="form-control" id="exampleInputText" />
            <label htmlFor="exampleInputText">Campo di tipo testuale</label>
      </div>
      <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-labelledby="emailHelp1" />
            <label htmlFor="exampleInputEmail1">Campo di tipo email</label>
      </div>
      <div className="form-group">
            <input type="number" className="form-control" id="exampleInputNumber" />
            <label htmlFor="exampleInputNumber">Campo di tipo numerico</label>
      </div>
      <div className="form-group">
            <input type="tel" className="form-control" id="exampleInputTelephone" />
            <label htmlFor="exampleInputTelephone">Campo di tipo telefono</label>
      </div>
      <div className="form-group">
            <input type="time" className="form-control" id="exampleInputTime" min="9:00" max="18:00" />
            <label htmlFor="exampleInputTime">Campo di tipo ora</label>
      </div>

      <div className="form-group">
            <input type="password" className="form-control input-password" id="exampleInputPassword"
                  aria-labelledby="infoPassword" />
            <label htmlFor="exampleInputPassword">Password con label, placeholder e testo di aiuto</label>
            <small id="infoPassword" className="form-text text-muted">Inserisci almeno 8 caratteri e una lettera
                  maiuscola</small>
      </div>
      <div className="form-group">
            <input type="password" className="form-control input-password input-password-strength-meter"
                  id="exampleInputPassword3" />
            <label htmlFor="exampleInputPassword3">Password con strength meter</label>
      </div>
      <div className="form-group">
            <input className="form-control" type="text" id="input-text-disabled" disabled />
            <label htmlFor="input-text-disabled">Contenuto disabilitato</label>
      </div>
      <div className="form-group">
            <input type="search" className="autocomplete" placeholder="Testo da cercare" id="autocomplete-regioni"
                  name="autocomplete-regioni"
                  data-autocomplete='[{"text":"Abruzzo","link":"#"},{"text":"Basilicata","link":"#"},{"text":"Calabria","link":"#"},{"text":"Campania","link":"#"},{"text":"Emilia Romagna","link":"#"},{"text":"Friuli Venezia Giulia","link":"#"},{"text":"Lazio","link":"#"},{"text":"Liguria","link":"#"},{"text":"Lombardia","link":"#"},{"text":"Marche","link":"#"},{"text":"Molise","link":"#"},{"text":"Piemonte","link":"#"},{"text":"Puglia","link":"#"},{"text":"Sardegna","link":"#"},{"text":"Sicilia","link":"#"},{"text":"Toscana","link":"#"},{"text":"Trentino Alto Adige","link":"#"},{"text":"Umbria","link":"#"},{"text":"Valle d’Aosta","link":"#"},{"text":"Veneto","link":"#"}]' />
            <span className="autocomplete-icon" aria-hidden="true">
                  <svg className="icon icon-sm">
                        <use xlinkHref="/bootstrap-italia/dist/svg/sprite.svg#it-search"></use>
                  </svg>
            </span>
            <label htmlFor="autocomplete-regioni" className="sr-only">Cerca nel sito</label>
      </div>
      <div className="form-group">
            <textarea id="exampleFormControlTextarea1" rows="3"></textarea>
            <label htmlFor="exampleFormControlTextarea1">Esempio di area di testo</label>
      </div>
</div>

);

stories.add("Esempi", withDocs(Esempi, withInfo()(EsempiComponent)));

const DimensioniComponent = () => (
    <div>
        <InputGroup size="sm" className="mb-3">
            <InputGroupAddon addonType="prepend">Testo piccolo</InputGroupAddon>
            <Input type="text" aria-label="Testo piccolo" />
        </InputGroup>

        <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
                Testo predefinito
            </InputGroupAddon>
            <Input type="text" aria-label="Testo predefinito" />
        </InputGroup>

        <InputGroup size="lg">
            <InputGroupAddon addonType="prepend">Testo grande</InputGroupAddon>
            <Input type="text" aria-label="Testo grande" />
        </InputGroup>
    </div>

);
stories.add(
    "Dimensioni",
    withDocs(Dimensioni, withInfo()(DimensioniComponent))
);

const CheckboxRadioComponent = () => (
    <div>
        <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
                <InputGroup>
                    <Input type="checkbox" aria-label="Addon" />
                </InputGroup>
            </InputGroupAddon>
            <Input type="text" aria-label="Addon" />
        </InputGroup>

        <InputGroup>
            <InputGroupAddon addonType="prepend">
                <InputGroup>
                    <Input type="radio" aria-label="Addon" />
                </InputGroup>
            </InputGroupAddon>
            <Input type="text" aria-label="Addon" />
        </InputGroup>
    </div>
);
stories.add(
    "Checkbox e radio",
    withDocs(CheckboxRadio, withInfo()(CheckboxRadioComponent))
);

const InputMultipliComponent = () => (
    <div>
        <InputGroup>
            <InputGroupAddon addonType="prepend">Nominativo</InputGroupAddon>
            <Input type="text" placeholder="Nome" aria-label="Nome" />
            <Input type="text" placeholder="Cognome" aria-label="Cognome" />
        </InputGroup>
    </div>
);
stories.add(
    "Input multipli",
    withDocs(InputMultipli, withInfo()(InputMultipliComponent))
);

const AggiunteMultipleComponent = () => (
    <div>
        <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
                <InputGroupText>€</InputGroupText>
                <InputGroupText>0,00</InputGroupText>
            </InputGroupAddon>
            <Input type="text" aria-label="€" />
        </InputGroup>

        <InputGroup>
            <Input type="text" aria-label="€" />
            <InputGroupAddon addonType="append">
                <InputGroupText>€</InputGroupText>
                <InputGroupText>0,00</InputGroupText>
            </InputGroupAddon>
        </InputGroup>
    </div>
);
stories.add(
    "Aggiunte multiple",
    withDocs(AggiunteMultiple, withInfo()(AggiunteMultipleComponent))
);

const AggiuntaBottoniComponent = () => (
    <div>
        <InputGroup className="mb-3">
            <InputGroupAddon addonType="prepend">
                <Button color="primary">Bottone</Button>
            </InputGroupAddon>
            <Input type="text" placeholder="" aria-label="Bottone" />
        </InputGroup>

        <InputGroup className="input-group mb-3">
            <Input
                type="text"
                placeholder="Contenitore"
                aria-label="Contenitore"
            />
            <InputGroupAddon addonType="append">
                <Button color="primary">Bottone</Button>
            </InputGroupAddon>
        </InputGroup>

        <InputGroup className="input-group mb-3">
            <InputGroupAddon addonType="prepend">
                <Button color="primary">Bottone</Button>
                <Button color="primary">Bottone</Button>
            </InputGroupAddon>
            <Input type="text" placeholder="" aria-label="Bottone" />
        </InputGroup>

        <InputGroup className="input-group">
            <Input
                type="text"
                placeholder="Contenitore"
                aria-label="Contenitore"
            />
            <InputGroupAddon addonType="append">
                <Button color="primary">Bottone</Button>
                <Button color="primary">Bottone</Button>
            </InputGroupAddon>
        </InputGroup>
    </div>
);
stories.add(
    "Aggiunta bottoni",
    withDocs(AggiuntaBottoni, withInfo()(AggiuntaBottoniComponent))
);

stories.add(
    "Bottoni con dropdown",
    withDocs(
        BottoniDropdown,
        withInfo({
            propTables: [
                InputGroup,
                InputGroupButtonDropdown,
                DropdownToggle,
                DropdownItem
            ],
            propTablesExclude: [InputGroupDropdownExample]
        })(() => <InputGroupDropdownExample />)
    )
);

stories.add(
    "Pulsanti segmentati",
    withDocs(
        PulsantiSegmentati,
        withInfo({
            propTables: [
                InputGroup,
                InputGroupButtonDropdown,
                DropdownToggle,
                DropdownItem
            ],
            propTablesExclude: [InputGroupDropdownExample]
        })(() => <InputGroupDropdownExample split />)
    )
);
