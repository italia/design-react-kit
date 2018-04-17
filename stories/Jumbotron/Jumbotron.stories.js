import React from "react";
import { storiesOf } from "@storybook/react";

import { Jumbotron, Button, Container } from "../../src";

const stories = storiesOf("Componenti/Hero", module);

stories.add("Esempi", () => (
  <Jumbotron className="hero w-50">
    <h1 className="hero-heading display-4">Ciao, mondo!</h1>
    <p className="lead">
      Questa è una semplice unità hero, un semplice per richiamare un'attenzione
      particolare al contenuto o alle informazioni in primo piano.
    </p>
    <hr className="my-4" />
    <p>
      Utilizza le classi di utilità per la tipografia e la spaziatura per
      l'ingombro del contenuto all'interno del contenitore più grande.
    </p>
    <p className="lead">
      <Button color="primary">Per saperne di più</Button>
    </p>
  </Jumbotron>
));
stories.add("Fluid", () => (
  <Jumbotron fluid className="hero m-3">
    <Container fluid>
      <h1 className="hero-heading display-4">Hero fluido</h1>
      <p className="lead">
        Questo è un hero modificato che occupa l'intero spazio orizzontale del
        suo contenitore.
      </p>
    </Container>
  </Jumbotron>
));
