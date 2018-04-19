import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs/react";
import { withDocs } from "../utils";

import { Pagination, PaginationItem, PaginationLink } from "../../src";

import Esempi from "./Esempi.md";
import StatoDisabilitatoAttivo from "./StatoDisabilitatoAttivo.md";
import DimensioneAllineamento from "./DimensioneAllineamento.md";
import Responsive from "./Responsive.md";
import EsempiInterattivi from "./EsempiInterattivi.md";

const stories = storiesOf("Componenti/Pagination", module);

stories.add(
  "Esempi",
  withDocs(Esempi, () => (
    <Pagination>
      <PaginationItem>
        <PaginationLink previous href="#">
          <span className="it-chevron-left" />
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#">
          <span className="it-chevron-right" />
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  ))
);
stories.add(
  "Stato disabilitato e attivo",
  withDocs(StatoDisabilitatoAttivo, () => (
    <Pagination>
      <PaginationItem disabled>
        <PaginationLink previous href="#">
          <span className="it-chevron-left" />
        </PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#">
          <span className="it-chevron-right" />
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  ))
);
stories.add(
  "Dimensione e allineamento",
  withDocs(DimensioneAllineamento, () => (
    <div>
      <Pagination size="lg" className="mb-3">
        <PaginationItem disabled>
          <PaginationLink previous href="#">
            <span className="it-chevron-left" />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#">
            <span className="it-chevron-right" />
          </PaginationLink>
        </PaginationItem>
      </Pagination>

      <Pagination size="sm" className="justify-content-end mb-3">
        <PaginationItem disabled>
          <PaginationLink previous href="#">
            <span className="it-chevron-left" />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#">
            <span className="it-chevron-right" />
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    </div>
  ))
);
stories.add(
  "Responsive",
  withDocs(Responsive, () => (
    <Pagination className="mb-3">
      <PaginationItem>
        <PaginationLink previous href="#">
          <span className="it-chevron-left" />
        </PaginationLink>
      </PaginationItem>
      <PaginationItem className="d-none d-sm-block">
        <span className="p-3">...</span>
      </PaginationItem>
      <PaginationItem className="d-none d-sm-block">
        <PaginationLink href="#">9</PaginationLink>
      </PaginationItem>
      <PaginationItem className="d-none d-sm-block">
        <PaginationLink href="#">10</PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">11</PaginationLink>
      </PaginationItem>
      <PaginationItem className="d-none d-sm-block">
        <PaginationLink href="#">12</PaginationLink>
      </PaginationItem>
      <PaginationItem className="d-none d-sm-block">
        <PaginationLink href="#">13</PaginationLink>
      </PaginationItem>
      <PaginationItem className="d-none d-sm-block">
        <span className="p-3">...</span>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#">
          <span className="it-chevron-right" />
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  ))
);

const knobsStories = storiesOf("Componenti/Pagination", module);
knobsStories.addDecorator(withKnobs);

knobsStories.add(
  "Esempi interattivi",
  withDocs(EsempiInterattivi, () => {
    const active = boolean("Attivo", false);
    const disabled = boolean("Disabilitato", false);
    const sizes = ["sm", "", "lg"];
    const size = select("Dimensioni", sizes, sizes[0]);

    return (
      <Pagination size={size}>
        <PaginationItem active={active} disabled={disabled}>
          <PaginationLink previous href="#">
            <span className="it-chevron-left" />
          </PaginationLink>
        </PaginationItem>
        <PaginationItem active={active} disabled={disabled}>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem active={active} disabled={disabled}>
          <PaginationLink next href="#">
            <span className="it-chevron-right" />
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    );
  })
);
