import React from "react";
import { storiesOf } from "@storybook/react";
import { withDocs } from "../utils";

import { Nav, NavItem, NavLink } from "../../src";

import TabExample from "./TabExample";
import TabButtonExample from "./TabButtonExample";

import Esempi from "./Esempi.md";
import Contenuto from "./Contenuto.md";
import Icone from "./Icone.md";
import IconeTesto from "./IconeTesto.md";
import TabBottoni from "./TabBottoni.md";
import AllineamentoVerticale from "./AllineamentoVerticale.md";

const stories = storiesOf("Componenti/Tab", module);

stories.add(
  "Esempi",
  withDocs(Esempi, () => (
    <div>
      <Nav tabs className="mb-3">
        <NavItem>
          <NavLink href="#" active>
            Link Attivo
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" disabled>
            Link disabilitato
          </NavLink>
        </NavItem>
      </Nav>

      <Nav tabs className="nav-dark">
        <NavItem>
          <NavLink href="#" active>
            Link Attivo
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" disabled>
            Link disabilitato
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  ))
);
stories.add("Contenuto", withDocs(Contenuto, () => <TabExample text />));
stories.add("Icone", withDocs(Icone, () => <TabExample icons />));
stories.add(
  "Icone e testo",
  withDocs(IconeTesto, () => <TabExample text icons />)
);
stories.add("Tab a bottoni", withDocs(TabBottoni, () => <TabButtonExample />));
stories.add(
  "Allineamento Verticale",
  withDocs(AllineamentoVerticale, () => <TabButtonExample vertical />)
);
