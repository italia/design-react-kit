var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { e } from "./index-N7T0HPyM.js";
import { B as Button } from "./Button-DzBfv9Kx.js";
import { C as Card } from "./Card-C_tzQcI4.js";
import { C as CardBody, a as CardText } from "./CardText-B3_Owstv.js";
import { C as CardTitle } from "./CardTitle-CT3exvbd.js";
import { D as Dimmer, a as DimmerButtons } from "./DimmerButtons-C0pR-Dl2.js";
import "./track-focus-DbJ2CO43.js";
const colors = ["primary", "secondary"];
const meta = {
  title: "Documentazione/Componenti/Dimmer",
  component: Dimmer
};
const Esempi = {
  parameters: {
    docs: {
      controls: {
        include: ["color", "show", "icon"]
      }
    }
  },
  render: ({
    ...args
  }) => /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("div", { className: "row dimmable" }, /* @__PURE__ */ e.createElement("div", { className: "col-12 col-lg-4" }, /* @__PURE__ */ e.createElement(Card, null, /* @__PURE__ */ e.createElement(CardBody, null, /* @__PURE__ */ e.createElement(CardTitle, { tag: "h5" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ e.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))), /* @__PURE__ */ e.createElement("div", { className: "col-12 col-lg-4 d-none d-lg-block" }, /* @__PURE__ */ e.createElement(Card, null, /* @__PURE__ */ e.createElement(CardBody, null, /* @__PURE__ */ e.createElement(CardTitle, { tag: "h5" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ e.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))), /* @__PURE__ */ e.createElement("div", { className: "col-12 col-lg-4 d-none d-lg-block" }, /* @__PURE__ */ e.createElement(Card, null, /* @__PURE__ */ e.createElement(CardBody, null, /* @__PURE__ */ e.createElement(CardTitle, { tag: "h5" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ e.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))), /* @__PURE__ */ e.createElement(Dimmer, { ...args }, /* @__PURE__ */ e.createElement("p", null, "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."))),
  args: {
    color: "primary",
    show: true,
    icon: "it-unlocked"
  },
  argTypes: {
    color: {
      control: "radio",
      options: colors
    },
    show: {
      control: "boolean"
    },
    icon: {
      control: "text"
    }
  }
};
const DimmerConAzioni = {
  render: () => /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("div", { className: "col dimmable" }, /* @__PURE__ */ e.createElement("div", { className: "col-12 col-lg-4" }, /* @__PURE__ */ e.createElement(Card, null, /* @__PURE__ */ e.createElement(CardBody, null, /* @__PURE__ */ e.createElement(CardTitle, { tag: "h5" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ e.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))), /* @__PURE__ */ e.createElement("div", { className: "col-12 col-lg-4 d-none d-lg-block" }, /* @__PURE__ */ e.createElement(Card, null, /* @__PURE__ */ e.createElement(CardBody, null, /* @__PURE__ */ e.createElement(CardTitle, { tag: "h5" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ e.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))), /* @__PURE__ */ e.createElement(Dimmer, { icon: "it-unlocked" }, /* @__PURE__ */ e.createElement("h4", null, "Titolo Dimmer"), /* @__PURE__ */ e.createElement(DimmerButtons, null, /* @__PURE__ */ e.createElement(Button, { color: "primary", outline: true }, "Azione secondaria"), /* @__PURE__ */ e.createElement(Button, { color: "primary" }, "Azione primaria"))))
};
const DimmerConAzioniColorePrimario = {
  render: () => /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("div", { className: "col dimmable" }, /* @__PURE__ */ e.createElement("div", { className: "col-12 col-lg-4" }, /* @__PURE__ */ e.createElement(Card, null, /* @__PURE__ */ e.createElement(CardBody, null, /* @__PURE__ */ e.createElement(CardTitle, { tag: "h5" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ e.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))), /* @__PURE__ */ e.createElement("div", { className: "col-12 col-lg-4 d-none d-lg-block" }, /* @__PURE__ */ e.createElement(Card, null, /* @__PURE__ */ e.createElement(CardBody, null, /* @__PURE__ */ e.createElement(CardTitle, { tag: "h5" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ e.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))), /* @__PURE__ */ e.createElement(Dimmer, { color: "primary", icon: "it-unlocked" }, /* @__PURE__ */ e.createElement("h4", null, "Titolo Dimmer"), /* @__PURE__ */ e.createElement(DimmerButtons, { single: true }, /* @__PURE__ */ e.createElement(Button, { color: "primary" }, "Azione primaria"))))
};
Esempi.parameters = {
  ...Esempi.parameters,
  docs: {
    ...(_a = Esempi.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  parameters: {\n    docs: {\n      controls: {\n        include: ['color', 'show', 'icon']\n      }\n    }\n  },\n  render: ({\n    ...args\n  }) => <div>\n      <div className='row dimmable'>\n        <div className='col-12 col-lg-4'>\n          {/* start card */}\n          <Card>\n            <CardBody>\n              <CardTitle tag='h5'>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n              </CardTitle>\n              <CardText>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua.\n              </CardText>\n            </CardBody>\n          </Card>\n          {/* end card */}\n        </div>\n\n        <div className='col-12 col-lg-4 d-none d-lg-block'>\n          {/* start card */}\n          <Card>\n            <CardBody>\n              <CardTitle tag='h5'>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n              </CardTitle>\n              <CardText>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua.\n              </CardText>\n            </CardBody>\n          </Card>\n          {/* end card */}\n        </div>\n        <div className='col-12 col-lg-4 d-none d-lg-block'>\n          {/* start card */}\n          <Card>\n            <CardBody>\n              <CardTitle tag='h5'>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n              </CardTitle>\n              <CardText>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua.\n              </CardText>\n            </CardBody>\n          </Card>\n        </div>\n      </div>\n      <Dimmer {...args}>\n        <p>\n          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo\n          donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.\n        </p>\n      </Dimmer>\n    </div>,\n  args: {\n    color: 'primary',\n    show: true,\n    icon: 'it-unlocked'\n  },\n  argTypes: {\n    color: {\n      control: 'radio',\n      options: colors\n    },\n    show: {\n      control: 'boolean'\n    },\n    icon: {\n      control: 'text'\n    }\n  }\n}",
      ...(_c = (_b = Esempi.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
DimmerConAzioni.parameters = {
  ...DimmerConAzioni.parameters,
  docs: {
    ...(_d = DimmerConAzioni.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => <div>\n      <div className='col dimmable'>\n        <div className='col-12 col-lg-4'>\n          {/* start card */}\n          <Card>\n            <CardBody>\n              <CardTitle tag='h5'>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n              </CardTitle>\n              <CardText>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua.\n              </CardText>\n            </CardBody>\n          </Card>\n          {/* end card */}\n        </div>\n        <div className='col-12 col-lg-4 d-none d-lg-block'>\n          {/* start card */}\n          <Card>\n            <CardBody>\n              <CardTitle tag='h5'>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n              </CardTitle>\n              <CardText>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua.\n              </CardText>\n            </CardBody>\n          </Card>\n          {/* end card */}\n        </div>\n      </div>\n      <Dimmer icon='it-unlocked'>\n        <h4>Titolo Dimmer</h4>\n        <DimmerButtons>\n          <Button color='primary' outline>\n            Azione secondaria\n          </Button>\n          <Button color='primary'>Azione primaria</Button>\n        </DimmerButtons>\n      </Dimmer>\n    </div>\n}",
      ...(_f = (_e = DimmerConAzioni.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
DimmerConAzioniColorePrimario.parameters = {
  ...DimmerConAzioniColorePrimario.parameters,
  docs: {
    ...(_g = DimmerConAzioniColorePrimario.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => <div>\n      <div className='col dimmable'>\n        <div className='col-12 col-lg-4'>\n          {/* start card */}\n          <Card>\n            <CardBody>\n              <CardTitle tag='h5'>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n              </CardTitle>\n              <CardText>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua.\n              </CardText>\n            </CardBody>\n          </Card>\n          {/* end card */}\n        </div>\n        <div className='col-12 col-lg-4 d-none d-lg-block'>\n          {/* start card */}\n          <Card>\n            <CardBody>\n              <CardTitle tag='h5'>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n              </CardTitle>\n              <CardText>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua.\n              </CardText>\n            </CardBody>\n          </Card>\n          {/* end card */}\n        </div>\n      </div>\n      <Dimmer color='primary' icon='it-unlocked'>\n        <h4>Titolo Dimmer</h4>\n        <DimmerButtons single>\n          <Button color='primary'>Azione primaria</Button>\n        </DimmerButtons>\n      </Dimmer>\n    </div>\n}",
      ...(_i = (_h = DimmerConAzioniColorePrimario.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
const __namedExportsOrder = ["Esempi", "DimmerConAzioni", "DimmerConAzioniColorePrimario"];
const DimmerStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DimmerConAzioni,
  DimmerConAzioniColorePrimario,
  Esempi,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  DimmerStories as D,
  Esempi as E,
  DimmerConAzioni as a,
  DimmerConAzioniColorePrimario as b
};
