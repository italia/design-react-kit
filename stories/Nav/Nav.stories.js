import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, boolean } from "@storybook/addon-knobs/react";
import { withDocs } from "../utils";

import { Nav, NavLink, NavItem } from "../../src";

import Esempi from "./Esempi.md";
import Allineamento from "./Allineamento.md";
import MenuTab from "./MenuTab.md";
import MenuBottoni from "./MenuBottoni.md";
import FillJustify from "./FillJustify.md";
import EsempiInterattivi from "./EsempiInterattivi.md";

const stories = storiesOf("Componenti/Nav", module);

stories.add(
  "Esempi",
  withDocs(Esempi, () => (
    <div>
      <Nav className="mb-3">
        <NavLink active href="#">
          Link Attivo
        </NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink disabled href="#">
          Link Disabilitato
        </NavLink>
      </Nav>
      <Nav pills>
        <NavItem>
          <NavLink active href="#">
            Active
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            Disabled
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  ))
);
stories.add(
  "Allineamento",
  withDocs(Allineamento, () => (
    <div>
      <Nav className="justify-content-center mb-3">
        <NavLink active href="#">
          Link Attivo
        </NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink disabled href="#">
          Link Disabilitato
        </NavLink>
      </Nav>
      <Nav className="justify-content-end mb-3">
        <NavLink active href="#">
          Link Attivo
        </NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink disabled href="#">
          Link Disabilitato
        </NavLink>
      </Nav>
      <Nav vertical>
        <NavLink active href="#">
          Link Attivo
        </NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink disabled href="#">
          Link Disabilitato
        </NavLink>
      </Nav>
    </div>
  ))
);
stories.add(
  "Menù a tab",
  withDocs(MenuTab, () => (
    <Nav tabs>
      <NavLink active href="#">
        Link Attivo
      </NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink disabled href="#">
        Link Disabilitato
      </NavLink>
    </Nav>
  ))
);
stories.add(
  "Menù a bottoni",
  withDocs(MenuBottoni, () => (
    <Nav pills>
      <NavLink active href="#">
        Link Attivo
      </NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink href="#">Link</NavLink>
      <NavLink disabled href="#">
        Link Disabilitato
      </NavLink>
    </Nav>
  ))
);
stories.add(
  "“fill” e “justify”",
  withDocs(FillJustify, () => (
    <div>
      <Nav pills fill className="mb-3">
        <NavLink active href="#">
          Link con molto testo Attivo
        </NavLink>
        <NavLink href="#">Link con molto testo</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink disabled href="#">
          Link Disabilitato
        </NavLink>
      </Nav>
      <Nav pills justified>
        <NavLink active href="#">
          Link con molto testo Attivo
        </NavLink>
        <NavLink href="#">Link con molto testo</NavLink>
        <NavLink href="#">Link</NavLink>
        <NavLink disabled href="#">
          Link Disabilitato
        </NavLink>
      </Nav>
    </div>
  ))
);

const knobsStories = storiesOf("Componenti/Nav", module);
knobsStories.addDecorator(withKnobs);

knobsStories.add(
  "Esempi interattivi",
  withDocs(EsempiInterattivi, () => {
    const active = boolean("Attivo", false);
    const disabled = boolean("Disabilitato", false);

    const tabs = boolean("Tab", false);
    const pills = boolean("Bottoni", false);
    const fill = boolean("Fill", false);
    const justified = boolean("Justify", false);

    return (
      <Nav tabs={tabs} pills={pills} fill={fill} justified={justified}>
        <NavLink active={active} disabled={disabled} href="#">
          Link {active ? "Attivo" : ""} {disabled ? "Disabilitato" : ""}{" "}
          {pills ? "Bottone" : ""} {tabs ? "Tab" : ""}
        </NavLink>
      </Nav>
    );
  })
);
