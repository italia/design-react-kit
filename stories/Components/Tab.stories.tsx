import { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Col, Container, Icon, Nav, NavItem, NavLink, Row, TabContent, TabPane } from "../../src";

const meta: Meta<typeof Nav> = {
    title: "Documentazione/Componenti/Tab",
    component: Nav,
};

export default meta;

type Story = StoryObj<typeof Nav>;

export const Esempi: Story = {
    render: () => (
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
    )
};

const TestoWithHooks = () => {
  const [activeTab, toggleTab] = useState("1");
  return (
    <div>
      <Nav tabs className="mb-3">
        <NavItem>
          <NavLink
            href="#"
            active={activeTab === "1"}
            onClick={() => {
              if (activeTab !== "1") {
                toggleTab("1");
              }
            }}
          >
            <span>Tab titolo 1</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#"
            active={activeTab === "2"}
            onClick={() => {
              if (activeTab !== "2") {
                toggleTab("2");
              }
            }}
          >
            <span>Tab titolo 2</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#"
            active={activeTab === "3"}
            onClick={() => {
              if (activeTab !== "3") {
                toggleTab("3");
              }
            }}
          >
            <span>Tab titolo 3</span>
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1" className="p-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </TabPane>
        <TabPane tabId="2" className="p-3">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </TabPane>
        <TabPane tabId="3" className="p-3">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </TabPane>
      </TabContent>
    </div>
  );
}

export const Testo: Story = {
    render: () => <TestoWithHooks/>
};

const IconaWithHooks = () => {
  const [activeTab, toggleTab] = useState("1");
  return (
    <div>
      <Nav tabs className="mb-3">
        <NavItem>
          <NavLink
            href="#"
            active={activeTab === "1"}
            onClick={() => {
              if (activeTab !== "1") {
                toggleTab("1");
              }
            }}
          >
                            <span>
                                <Icon color="primary" icon="it-link" aria-hidden />
                                <i className="it-ico-lg it-file d-block text-center" aria-label="Tab titolo 1" />
                            </span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#"
            active={activeTab === "2"}
            onClick={() => {
              if (activeTab !== "2") {
                toggleTab("2");
              }
            }}
          >
                            <span>
                                <Icon color="primary" icon="it-calendar" aria-hidden />
                                <i className="it-ico-lg it-calendar d-block text-center" aria-label="Tab titolo 2" />
                            </span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#"
            active={activeTab === "3"}
            onClick={() => {
              if (activeTab !== "3") {
                toggleTab("3");
              }
            }}
          >
                            <span>
                                <Icon color="primary" icon="it-comment" aria-hidden />
                                <i className="it-ico-lg it-comment d-block text-center" aria-label="Tab titolo 3" />
                            </span>
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1" className="p-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </TabPane>
        <TabPane tabId="2" className="p-3">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </TabPane>
        <TabPane tabId="3" className="p-3">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </TabPane>
      </TabContent>
    </div>
  );
}
export const Icona: Story = {
    render: () => <IconaWithHooks/>
};

const TestoIconaWithHooks = () => {
  const [activeTab, toggleTab] = useState("1");
  return (
    <div>
      <Nav tabs className="mb-3">
        <NavItem>
          <NavLink
            href="#"
            active={activeTab === "1"}
            onClick={() => {
              if (activeTab !== "1") {
                toggleTab("1");
              }
            }}
          >
                            <span>
                                <Icon color="primary" icon="it-link" aria-hidden />
                                <i className="it-ico-lg it-file d-block text-center" aria-label="Tab titolo 1" />
                            </span>
            <span>Tab titolo 1</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#"
            active={activeTab === "2"}
            onClick={() => {
              if (activeTab !== "2") {
                toggleTab("2");
              }
            }}
          >
                            <span>
                                <Icon color="primary" icon="it-calendar" aria-hidden />
                                <i className="it-ico-lg it-calendar d-block text-center" aria-label="Tab titolo 2" />
                            </span>
            <span>Tab titolo 2</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#"
            active={activeTab === "3"}
            onClick={() => {
              if (activeTab !== "3") {
                toggleTab("3");
              }
            }}
          >
                            <span>
                                <Icon color="primary" icon="it-comment" aria-hidden />
                                <i className="it-ico-lg it-comment d-block text-center" aria-label="Tab titolo 3" />
                            </span>
            <span>Tab titolo 3</span>
          </NavLink>
        </NavItem>
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId="1" className="p-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </TabPane>
        <TabPane tabId="2" className="p-3">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </TabPane>
        <TabPane tabId="3" className="p-3">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </TabPane>
      </TabContent>
    </div>
  );
}

export const TestoIcona: Story = {
  render: () => <TestoIconaWithHooks/>
};

const BottoneWithHooks = () => {
  const [activeTab, toggleTab] = useState("1");
  return (
    <Container className="m-3">
      <Row>
        <Col sm={"12"}>
          <Nav pills className="mb-3">
            <NavItem>
              <NavLink
                href="#"
                active={activeTab === "1"}
                onClick={(e) => {
                  e.preventDefault();
                  toggleTab("1");
                }}
              >
                Tab 1
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                active={activeTab === "2"}
                onClick={(e) => {
                  e.preventDefault();
                  toggleTab("2");
                }}
              >
                Tab 2
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                active={activeTab === "3"}
                onClick={(e) => {
                  e.preventDefault();
                  toggleTab("3");
                }}
              >
                Tab 3
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col sm={"12"}>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1" className="p-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
              in culpa qui officia deserunt mollit anim id est laborum.
            </TabPane>
            <TabPane tabId="2" className="p-3">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </TabPane>
            <TabPane tabId="3" className="p-3">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
              in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </Container>
  );
}

export const Bottone: Story = {
  render: () => <BottoneWithHooks/>
};

const VerticaleWithHooks = () => {
  const [activeTab, toggleTab] = useState("1");
  return (
    <Container className="m-3">
      <Row>
        <Col sm={"3"}>
          <Nav pills className="mb-3" vertical>
            <NavItem>
              <NavLink
                href="#"
                active={activeTab === "1"}
                onClick={(e) => {
                  e.preventDefault();
                  toggleTab("1");
                }}
              >
                Tab 1
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                active={activeTab === "2"}
                onClick={(e) => {
                  e.preventDefault();
                  toggleTab("2");
                }}
              >
                Tab 2
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#"
                active={activeTab === "3"}
                onClick={(e) => {
                  e.preventDefault();
                  toggleTab("3");
                }}
              >
                Tab 3
              </NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col sm={"9"}>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1" className="p-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
              in culpa qui officia deserunt mollit anim id est laborum.
            </TabPane>
            <TabPane tabId="2" className="p-3">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </TabPane>
            <TabPane tabId="3" className="p-3">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
              in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </Container>
  );
}
export const Verticale: Story = {
  render: () => <VerticaleWithHooks/>
};
