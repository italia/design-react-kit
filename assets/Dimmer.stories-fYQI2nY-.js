var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { R as React } from "./index-C-_iGYWo.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { I as Icon } from "./Icon-BNsLnf7r.js";
import { C as Card } from "./Card-BbLD9VPT.js";
import { C as CardBody, a as CardText } from "./CardText-BXch16fi.js";
import { C as CardTitle } from "./CardTitle-M54T_6p1.js";
import { B as Button } from "./Button-vuvwJGEz.js";
const Dimmer = ({
  icon,
  color,
  className,
  show = true,
  wrapperClassName,
  testId,
  ...attributes
}) => {
  const { children, ...rest } = attributes, classes = classNames("dimmer fade", { show }, wrapperClassName === true ? className : wrapperClassName, {
    [`dimmer-${color}`]: color
  }), innerClasses = classNames("dimmer-inner", className), dimmerIcon = icon && /* @__PURE__ */ React.createElement("div", { className: "dimmer-icon" }, /* @__PURE__ */ React.createElement(Icon, { icon }));
  return /* @__PURE__ */ React.createElement("div", { className: classes, ...rest, "data-testid": testId, "aria-hidden": show ? void 0 : true }, /* @__PURE__ */ React.createElement("div", { className: innerClasses, ...rest }, dimmerIcon, children));
};
Dimmer.__docgenInfo = { "description": "", "methods": [], "displayName": "Dimmer", "props": { "icon": { "required": false, "tsType": { "name": "string" }, "description": "Il nome dell'icona da mostrare" }, "color": { "required": false, "tsType": { "name": "union", "raw": "'primary' | 'secondary'", "elements": [{ "name": "literal", "value": "'primary'" }, { "name": "literal", "value": "'secondary'" }] }, "description": "Le varianti di colore definite in Bootstrap Italia" }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Dimmer" }, "show": { "required": false, "tsType": { "name": "boolean" }, "description": "Mostra il wrapper", "defaultValue": { "value": "true", "computed": false } }, "wrapperClassName": { "required": false, "tsType": { "name": "union", "raw": "string | true", "elements": [{ "name": "string" }, { "name": "literal", "value": "true" }] }, "description": "Classi aggiuntive da usare per il componente contenitore del Dimmer\nPer replicare il comportamento precedente, in cui `className` veniva applicato anche al wrapper,\npassare `true`." }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const DimmerButtons = ({
  className,
  single = false,
  dark = true,
  testId,
  ...attributes
}) => {
  const { children, ...rest } = attributes;
  const classes = classNames("dimmer-buttons", className, {
    "bg-dark": dark,
    "single-button": single
  });
  return /* @__PURE__ */ React.createElement("div", { className: classes, ...rest, "data-testid": testId }, children);
};
DimmerButtons.__docgenInfo = { "description": "", "methods": [], "displayName": "DimmerButtons", "props": { "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Dimmer" }, "single": { "required": false, "tsType": { "name": "boolean" }, "description": "Da utilizzare in presenza di un singolo bottone: quando abilitato ne centra il contenuto.", "defaultValue": { "value": "false", "computed": false } }, "dark": { "required": false, "tsType": { "name": "boolean" }, "description": "Da utilizzare con `false` per abilitare il precedente comportamento senza sfondo scuro.\n@deprecated", "defaultValue": { "value": "true", "computed": false } }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
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
  }) => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "row dimmable"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-12 col-lg-4"
  }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardBody, null, /* @__PURE__ */ React.createElement(CardTitle, {
    tag: "h5"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ React.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))), /* @__PURE__ */ React.createElement("div", {
    className: "col-12 col-lg-4 d-none d-lg-block"
  }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardBody, null, /* @__PURE__ */ React.createElement(CardTitle, {
    tag: "h5"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ React.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))), /* @__PURE__ */ React.createElement("div", {
    className: "col-12 col-lg-4 d-none d-lg-block"
  }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardBody, null, /* @__PURE__ */ React.createElement(CardTitle, {
    tag: "h5"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ React.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))), /* @__PURE__ */ React.createElement(Dimmer, {
    ...args
  }, /* @__PURE__ */ React.createElement("p", null, "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."))),
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
  render: () => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "col dimmable"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-12 col-lg-4"
  }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardBody, null, /* @__PURE__ */ React.createElement(CardTitle, {
    tag: "h5"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ React.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))), /* @__PURE__ */ React.createElement("div", {
    className: "col-12 col-lg-4 d-none d-lg-block"
  }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardBody, null, /* @__PURE__ */ React.createElement(CardTitle, {
    tag: "h5"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ React.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))), /* @__PURE__ */ React.createElement(Dimmer, {
    icon: "it-unlocked"
  }, /* @__PURE__ */ React.createElement("h4", null, "Titolo Dimmer"), /* @__PURE__ */ React.createElement(DimmerButtons, null, /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    outline: true
  }, "Azione secondaria"), /* @__PURE__ */ React.createElement(Button, {
    color: "primary"
  }, "Azione primaria"))))
};
const DimmerConAzioniColorePrimario = {
  render: () => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "col dimmable"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-12 col-lg-4"
  }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardBody, null, /* @__PURE__ */ React.createElement(CardTitle, {
    tag: "h5"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ React.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))), /* @__PURE__ */ React.createElement("div", {
    className: "col-12 col-lg-4 d-none d-lg-block"
  }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardBody, null, /* @__PURE__ */ React.createElement(CardTitle, {
    tag: "h5"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ React.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))), /* @__PURE__ */ React.createElement(Dimmer, {
    color: "primary",
    icon: "it-unlocked"
  }, /* @__PURE__ */ React.createElement("h4", null, "Titolo Dimmer"), /* @__PURE__ */ React.createElement(DimmerButtons, {
    single: true
  }, /* @__PURE__ */ React.createElement(Button, {
    color: "primary"
  }, "Azione primaria"))))
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
  DimmerConAzioniColorePrimario as b,
  Dimmer as c,
  DimmerButtons as d
};
