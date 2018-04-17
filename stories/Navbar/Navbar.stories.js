import React from "react";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  select,
  boolean,
  color
} from "@storybook/addon-knobs/react";

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
  Form,
  Input,
  Button,
  InputGroup,
  InputGroupAddon,
  Container
} from "../../src";

import NavbarExample from "./NavbarExample";

const stories = storiesOf("Componenti/Navbar", module);


stories.add("Esempi", () => <NavbarExample />);
stories.add("Brand", () => (
  <div>
    <Navbar light className="bg-light mb-3">
      <NavbarBrand href="#">Navbar</NavbarBrand>
    </Navbar>
    <Navbar light className="bg-light">
      <NavbarBrand href="#" tag="h1">
        Navbar
      </NavbarBrand>
    </Navbar>
  </div>
));
stories.add("Nav", () => (
  <Navbar light expand="lg" className="bg-light">
    <NavbarBrand href="#">Navbar</NavbarBrand>
    <Collapse isOpen>
      <Nav navbar>
        <NavItem active>
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Features</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Pricing</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" disabled>
            Disabled
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
));
stories.add("Forms", () => (
  <div>
    <Navbar light expand="lg" className="bg-light mb-3">
      <Form inline className="my-2 my-lg-0">
        <Input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
        />
        <Button outline color="success" className="my-2 my-sm-0" type="submit">
          Search
        </Button>
      </Form>
    </Navbar>

    <Navbar light expand="lg" className="bg-light justify-content-between mb-3">
      <NavbarBrand href="#">Navbar</NavbarBrand>
      <Form inline className="my-2 my-lg-0">
        <Input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
        />
        <Button outline color="success" className="my-2 my-sm-0" type="submit">
          Search
        </Button>
      </Form>
    </Navbar>

    <Navbar light expand="lg" className="bg-light justify-content-between mb-3">
      <Form inline className="my-2 my-lg-0">
        <InputGroup>
          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
          <Input type="text" placeholder="Username" />
        </InputGroup>
      </Form>
    </Navbar>

    <Navbar light expand="lg" className="bg-light justify-content-between mb-3">
      <Form inline className="my-2 my-lg-0">
        <Button color="success" outline>
          Main button
        </Button>
        <Button color="secondary" outline>
          Smaller button
        </Button>
      </Form>
    </Navbar>
  </div>
));
stories.add("Text", () => (
  <div>
    <Navbar light expand="lg" className="bg-light mb-3">
      <span className="navbar-text">Navbar text with an inline element</span>
    </Navbar>

    <Navbar light expand="lg" className="bg-light">
      <NavbarBrand href="#">Navbar w/ text</NavbarBrand>
      <Collapse isOpen navbar>
        <Nav navbar>
          <NavItem active>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Features</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Pricing</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      <span className="navbar-text">Navbar text with an inline element</span>
    </Navbar>
  </div>
));
stories.add("Color schemes", () => (
  <div>
    <Navbar dark expand="lg" className="bg-dark mb-3">
      <NavbarBrand href="#">Navbar</NavbarBrand>
      <Collapse isOpen navbar>
        <Nav navbar>
          <NavItem active>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Features</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Pricing</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      <Form inline className="my-2 my-lg-0">
        <Input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
        />
        <Button
          outline
          className="my-2 my-sm-0"
          color="secondary"
          type="submit"
        >
          Search
        </Button>
      </Form>
    </Navbar>

    <Navbar dark expand="lg" className="bg-primary mb-3">
      <NavbarBrand href="#">Navbar</NavbarBrand>
      <Collapse isOpen navbar>
        <Nav navbar>
          <NavItem active>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Features</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Pricing</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      <Form inline className="my-2 my-lg-0">
        <Input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
        />
        <Button
          outline
          className="my-2 my-sm-0"
          color="secondary"
          type="submit"
        >
          Search
        </Button>
      </Form>
    </Navbar>

    <Navbar
      light
      expand="lg"
      className="mb-3"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <NavbarBrand href="#">Navbar</NavbarBrand>
      <Collapse isOpen navbar>
        <Nav navbar>
          <NavItem active>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Features</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Pricing</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
      <Form inline className="my-2 my-lg-0">
        <Input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
        />
        <Button outline className="my-2 my-sm-0" color="primary" type="submit">
          Search
        </Button>
      </Form>
    </Navbar>
  </div>
));
stories.add("Placement", () => (
  <Container style={{ position: "relative" }}>
    <Navbar light expand="lg" className="bg-light mb-3">
      <NavbarBrand href="#">Default</NavbarBrand>
    </Navbar>

    <Navbar light fixed="top" expand="lg" className="bg-light mb-3">
      <NavbarBrand href="#">Fixed top</NavbarBrand>
    </Navbar>

    <Navbar light fixed="bottom" expand="lg" className="bg-light mb-3">
      <NavbarBrand href="#">Fixed bottom</NavbarBrand>
    </Navbar>

    <Navbar light sticky="top" expand="lg" className="bg-light mb-3">
      <NavbarBrand href="#">Sticky top</NavbarBrand>
    </Navbar>
  </Container>
));

const knobsStories = storiesOf("Componenti/Navbar", module);
knobsStories.addDecorator(withKnobs);
knobsStories.add("Esempi interattivi", () => {
  const themes = ["", "dark", "light"];
  const theme = select("Temi", themes, themes[0]);
  const variations = ["", "primary", "dark"];
  const variation = select("Variazioni", variations, variations[0]);
  const selectedColor = color("Color", "#e3f2fd");
  const placements = ["", "top", "bottom"];
  const placement = select("Posizionamento", placements, placements[0]);
  const sticky = boolean("Sticky", false);

  return (
    <Navbar
      light
      expand="lg"
      fixed={placement}
      sticky={placement}
      className={`bg-${variation}`}
      style={{ backgroundColor: selectedColor }}
    >
      <NavbarBrand href="#">Brand</NavbarBrand>
    </Navbar>
  );
});
