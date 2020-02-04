import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs/react";
import { withA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";

import { Dimmer, DimmerButtons, Button } from "../../src";

const EsempiComponent = () => (
  <div>
    <Dimmer color="primary">
      <h4>Hello wowow</h4>
      <DimmerButtons single dark>
        <Button color="primary">Button</Button>
      </DimmerButtons>
    </Dimmer>
    ))}
  </div>
);

storiesOf("Componenti/Dimmer", module)
  .addDecorator(withA11y)
  .add(
    "Esempi",
    withInfo({
      text: Esempi
    })(EsempiComponent)
  );
