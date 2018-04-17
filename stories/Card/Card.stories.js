import React from "react";
import { storiesOf } from "@storybook/react";

import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  CardImgOverlay,
  CardHeader,
  CardFooter,
  CardGroup,
  CardDeck,
  CardColumns,
  Button
} from "../../src";

const stories = storiesOf("Componenti/Card", module);


stories.add("Esempi", () => (
  <Card className="w-50">
    <CardImg
      top
      width="100%"
      src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
      alt="Immagine"
    />
    <CardBody>
      <CardTitle>Titolo esempio Card</CardTitle>
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </CardText>
      <Button color="primary">Vai avanti</Button>
    </CardBody>
  </Card>
));
stories.add("Contenuti", () => (
  <Card className="w-50">
    <CardBody>
      <CardTitle>Titolo card</CardTitle>
      <CardSubtitle>Sottotitolo card</CardSubtitle>
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </CardText>
      <CardLink href="#">Card Link</CardLink>
      <CardLink href="#">Altro Link</CardLink>
    </CardBody>
  </Card>
));
stories.add("Immagini", () => (
  <div>
    <Card className="w-50">
      <CardImg
        top
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
        alt="Immagine"
      />
      <CardBody>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </CardText>
      </CardBody>
    </Card>

    <Card inverse className="w-50 mt-5">
      <CardImg
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
        alt="Immagine"
      />
      <CardImgOverlay>
        <CardTitle>Titolo card</CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </CardText>
        <CardText>
          <small className="text-muted">Ultimo aggiornamento 3 minuti fa</small>
        </CardText>
      </CardImgOverlay>
    </Card>
  </div>
));
stories.add("Header e Footer", () => (
  <Card className="w-50 mt-5">
    <CardHeader>Featured</CardHeader>
    <CardBody>
      <CardTitle>Titolo card</CardTitle>
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </CardText>
      <Button>Vai avanti</Button>
    </CardBody>
    <CardFooter className="text-center">2 giorni fa</CardFooter>
  </Card>
));
stories.add("Gruppi", () => (
  <CardGroup>
    <Card>
      <CardImg
        top
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
        alt="Immagine"
      />
      <CardBody>
        <CardTitle>Titolo card</CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardText>
        <CardFooter>Ultimo aggiornamento 3 minuti fa</CardFooter>
      </CardBody>
    </Card>
    <Card>
      <CardImg
        top
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
        alt="Immagine"
      />
      <CardBody>
        <CardTitle>Titolo card</CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardText>
        <CardFooter>Ultimo aggiornamento 3 minuti fa</CardFooter>
      </CardBody>
    </Card>
    <Card>
      <CardImg
        top
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
        alt="Immagine"
      />
      <CardBody>
        <CardTitle>Titolo card</CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardText>
        <CardFooter>Ultimo aggiornamento 3 minuti fa</CardFooter>
      </CardBody>
    </Card>
  </CardGroup>
));
stories.add("Deck", () => (
  <CardDeck>
    <Card>
      <CardImg
        top
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
        alt="Immagine"
      />
      <CardBody>
        <CardTitle>Titolo card</CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardText>
        <CardFooter>Ultimo aggiornamento 3 minuti fa</CardFooter>
      </CardBody>
    </Card>
    <Card>
      <CardImg
        top
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
        alt="Immagine"
      />
      <CardBody>
        <CardTitle>Titolo card</CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardText>
        <CardFooter>Ultimo aggiornamento 3 minuti fa</CardFooter>
      </CardBody>
    </Card>
    <Card>
      <CardImg
        top
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
        alt="Immagine"
      />
      <CardBody>
        <CardTitle>Titolo card</CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardText>
        <CardFooter>Ultimo aggiornamento 3 minuti fa</CardFooter>
      </CardBody>
    </Card>
  </CardDeck>
));
stories.add("Colonne", () => (
  <CardColumns>
    <Card>
      <CardImg
        top
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
        alt="Immagine"
      />
      <CardBody>
        <CardTitle>Titolo card</CardTitle>
        <CardSubtitle>Sottotitolo card</CardSubtitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardText>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardText>
      </CardBody>
    </Card>
    <Card>
      <CardImg
        top
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
        alt="Immagine"
      />
      <CardBody>
        <CardTitle>Titolo card</CardTitle>
        <CardSubtitle>Sottotitolo card</CardSubtitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardText>
      </CardBody>
    </Card>
    <Card body inverse color="primary">
      <CardTitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat.
      </CardTitle>
    </Card>
    <Card>
      <CardImg
        top
        width="100%"
        src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
        alt="Immagine"
      />
    </Card>
    <Card>
      <CardBody>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardText>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CardText>
      </CardBody>
    </Card>
    <Card body inverse style={{ backgroundColor: "#333", borderColor: "#333" }}>
      <CardTitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat.
      </CardTitle>
    </Card>
  </CardColumns>
));
