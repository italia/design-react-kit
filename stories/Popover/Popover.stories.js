import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs/react";
import { State, Store } from "@sambego/storybook-state";

import { Popover, PopoverHeader, PopoverBody, Button } from "../../src";

import PopoverExample from "./PopoverExample";
import PopoverPositionExample from "./PopoverPositionExample";

const stories = storiesOf("Componenti/Popover", module);

stories.add("Esempi", () => <PopoverExample />);
stories.add("Le quattro direzioni", () => <PopoverPositionExample />);
stories.add("Elementi disabilitati", () => (
  <div>
    <Button color="primary" id="Example" disabled>
      Popover disabilitato
    </Button>
    <Popover placement="right" target="Example">
      <PopoverHeader>Titolo del popover</PopoverHeader>
      <PopoverBody>
        Ed ecco alcuni contenuti sorprendenti. È molto coinvolgente. Non trovi?
      </PopoverBody>
    </Popover>
  </div>
));

const store = new Store({
  isOpen: false
});

const knobsStories = storiesOf("Componenti/Popover", module);
knobsStories.addDecorator(withKnobs);
knobsStories.add("Esempi interattivi", () => {
  const disabled = boolean("Disabilitato", false);
  const placements = ["top", "bottom", "left", "right"];
  const placement = select("Posizione", placements, placements[0]);
  const title = text("Titolo", "Titolo del popover");
  const body = text(
    "Body",
    "Ed ecco alcuni contenuti sorprendenti. È molto coinvolgente. Non trovi?"
  );

  return (
    <div style={{ padding: 250 }}>
      <Button
        color="primary"
        id="Example"
        disabled={disabled}
        onClick={() => store.set({ isOpen: !store.get("isOpen") })}
      >
        Popover {disabled ? "Disabilitato" : ""}
      </Button>
      <State store={store}>
        <Popover
          placement={placement}
          target="Example"
          toggle={() => store.set({ isOpen: !store.get("isOpen") })}
          isOpen={store.get("isOpen")}
        >
          <PopoverHeader>{title}</PopoverHeader>
          <PopoverBody>{body}</PopoverBody>
        </Popover>
      </State>
    </div>
  );
});
