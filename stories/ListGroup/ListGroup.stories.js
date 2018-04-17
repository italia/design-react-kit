import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs/react";

import { ListGroup, ListGroupItem, Badge } from "../../src";

const stories = storiesOf("Componenti/ListGroup", module);

stories.add("Esempi", () => (
  <ListGroup className="w-50">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Morbi leo risus</ListGroupItem>
    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
));
stories.add("Elementi attivi", () => (
  <ListGroup className="w-50">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem active>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Morbi leo risus</ListGroupItem>
    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
));
stories.add("Link", () => (
  <ListGroup className="w-50">
    <ListGroupItem action tag="a" href="#">
      Cras justo odio
    </ListGroupItem>
    <ListGroupItem action tag="a" href="#" active>
      Dapibus ac facilisis in
    </ListGroupItem>
    <ListGroupItem action tag="a" href="#">
      Morbi leo risus
    </ListGroupItem>
    <ListGroupItem action tag="a" href="#">
      Porta ac consectetur ac
    </ListGroupItem>
    <ListGroupItem action tag="a" href="#" disabled>
      Vestibulum at eros
    </ListGroupItem>
  </ListGroup>
));
stories.add("Bottoni", () => (
  <ListGroup className="w-50">
    <ListGroupItem action tag="button">
      Cras justo odio
    </ListGroupItem>
    <ListGroupItem action tag="button" active>
      Dapibus ac facilisis in
    </ListGroupItem>
    <ListGroupItem action tag="button">
      Morbi leo risus
    </ListGroupItem>
    <ListGroupItem action tag="button">
      Porta ac consectetur ac
    </ListGroupItem>
    <ListGroupItem action tag="button" disabled>
      Vestibulum at eros
    </ListGroupItem>
  </ListGroup>
));
stories.add("Flush", () => (
  <ListGroup className="w-50" flush>
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem active>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Morbi leo risus</ListGroupItem>
    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
    <ListGroupItem disabled>Vestibulum at eros</ListGroupItem>
  </ListGroup>
));
stories.add("Classi contestuali", () => (
  <ListGroup className="w-50" flush>
    <ListGroupItem action color="italia">
      This is a italia list group item
    </ListGroupItem>
    <ListGroupItem action color="primary">
      This is a primary list group item
    </ListGroupItem>
    <ListGroupItem action color="secondary">
      This is a secondary list group item
    </ListGroupItem>
    <ListGroupItem action color="tertiary">
      This is a tertiary list group item
    </ListGroupItem>
    <ListGroupItem action color="quaternary">
      This is a quaternary list group item
    </ListGroupItem>
    <ListGroupItem action color="success">
      This is a success list group item
    </ListGroupItem>
    <ListGroupItem action color="danger">
      This is a danger list group item
    </ListGroupItem>
    <ListGroupItem action color="warning">
      This is a warning list group item
    </ListGroupItem>
  </ListGroup>
));
stories.add("Con i badge", () => (
  <ListGroup className="w-50">
    <ListGroupItem className="justify-content-between">
      Cras justo odio{" "}
      <Badge color="primary" pill>
        14
      </Badge>
    </ListGroupItem>
    <ListGroupItem className="justify-content-between">
      Dapibus ac facilisis in{" "}
      <Badge color="primary" pill>
        2
      </Badge>
    </ListGroupItem>
    <ListGroupItem className="justify-content-between">
      Morbi leo risus{" "}
      <Badge color="primary" pill>
        1
      </Badge>
    </ListGroupItem>
  </ListGroup>
));
stories.add("Contenuto personalizzato", () => (
  <ListGroup className="w-50">
    <ListGroupItem action className="flex-column align-items-start active">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">Intestazione dell'elemento dell'elenco</h5>
        <small>3 days ago</small>
      </div>
      <p className="mb-1">
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
        risus varius blandit.
      </p>
      <small>Donec id elit non mi porta.</small>
    </ListGroupItem>
    <ListGroupItem action className="flex-column align-items-start">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">Intestazione dell'elemento dell'elenco</h5>
        <small className="text-muted">3 giorni fa</small>
      </div>
      <p className="mb-1">
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
        risus varius blandit.
      </p>
      <small className="text-muted">Donec id elit non mi porta.</small>
    </ListGroupItem>
    <ListGroupItem action className="flex-column align-items-start">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">Intestazione dell'elemento dell'elenco</h5>
        <small className="text-muted">3 giorni fa</small>
      </div>
      <p className="mb-1">
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
        risus varius blandit.
      </p>
      <small className="text-muted">Donec id elit non mi porta.</small>
    </ListGroupItem>
  </ListGroup>
));

const knobsStories = storiesOf("Componenti/ListGroup", module);
knobsStories.addDecorator(withKnobs);
knobsStories.add("Esempi interattivi", () => {
  const active = boolean("Attivo", false);
  const link = boolean("Link", false);
  const button = boolean("Bottoni", false);
  const flush = boolean("Flush", false);
  const colors = [
    "italia",
    "primary",
    "secondary",
    "tertiary",
    "quaternary",
    "success",
    "danger",
    "warning"
  ];
  const color = select("Variazioni", colors, colors[0]);
  const disabled = boolean("Disabilitato", false);
  const value = text("Testo", "Dapibus ac facilisis in");

  let tag;
  let href;
  if (link) {
    tag = "a";
    href = "#";
  } else if (button) {
    tag = "button";
  }

  return (
    <ListGroup flush={flush}>
      <ListGroupItem
        action
        active={active}
        disabled={disabled}
        color={color}
        tag={tag}
        href={href}
      >
        {value}
      </ListGroupItem>
    </ListGroup>
  );
});
