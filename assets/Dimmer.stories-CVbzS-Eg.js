var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { R as React } from "./index-CQCy530F.js";
import { c as classNames } from "./index-CpyNLP69.js";
import { I as Icon } from "./Icon-Dropx6Zw.js";
import { F as Fade } from "./Fade-CLeEbCSE.js";
import { C as Card } from "./Card-DwMgcAmL.js";
import { C as CardBody, a as CardText } from "./CardText-C_rsIDQI.js";
import { C as CardTitle } from "./CardTitle-9rUeaSmq.js";
import { B as Button } from "./Button-CDo48zCf.js";
const Dimmer = ({ icon, color, className, wrapperClassName, testId, ...attributes }) => {
  const { children, ...rest } = attributes;
  const classes = classNames("dimmer", wrapperClassName === true ? className : wrapperClassName, {
    [`dimmer-${color}`]: color
  });
  const innerClasses = classNames("dimmer-inner", className);
  const dimmerIcon = icon && /* @__PURE__ */ React.createElement("div", { className: "dimmer-icon" }, /* @__PURE__ */ React.createElement(Icon, { icon }));
  return /* @__PURE__ */ React.createElement("div", { className: classes, ...rest, style: { display: "flex" }, "data-testid": testId }, /* @__PURE__ */ React.createElement("div", { className: innerClasses, ...rest }, dimmerIcon, children));
};
Dimmer.__docgenInfo = { "description": "", "methods": [], "displayName": "Dimmer", "props": { "icon": { "required": false, "tsType": { "name": "string" }, "description": "Il nome dell'icona da mostrare. Per una lista completa vedi: @TODO-URL" }, "color": { "required": false, "tsType": { "name": "union", "raw": "'success' | 'warning' | 'danger' | 'note' | 'important' | string", "elements": [{ "name": "literal", "value": "'success'" }, { "name": "literal", "value": "'warning'" }, { "name": "literal", "value": "'danger'" }, { "name": "literal", "value": "'note'" }, { "name": "literal", "value": "'important'" }, { "name": "string" }] }, "description": "Le varianti di colore definite in Bootstrap Italia" }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Dimmer" }, "wrapperClassName": { "required": false, "tsType": { "name": "union", "raw": "string | true", "elements": [{ "name": "string" }, { "name": "literal", "value": "true" }] }, "description": "Classi aggiuntive da usare per il componente contenitore del Dimmer\nPer replicare il comportamento precedente, in cui `className` veniva applicato anche al wrapper,\npassare `true`." }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const DimmerButtons = ({
  color,
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
DimmerButtons.__docgenInfo = { "description": "", "methods": [], "displayName": "DimmerButtons", "props": { "color": { "required": false, "tsType": { "name": "union", "raw": "'primary' | string", "elements": [{ "name": "literal", "value": "'primary'" }, { "name": "string" }] }, "description": "Le varianti di colore definite in Bootstrap Italia per il componente Dimmer" }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Dimmer" }, "single": { "required": false, "tsType": { "name": "boolean" }, "description": "Da utilizzare in presenza di un singolo bottone: quando abilitato ne centra il contenuto.", "defaultValue": { "value": "false", "computed": false } }, "dark": { "required": false, "tsType": { "name": "boolean" }, "description": "Da utilizzare con `false` per abilitare il precedente comportamento senza sfondo scuro.\n@deprecated", "defaultValue": { "value": "true", "computed": false } }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const meta = {
  title: "Documentazione/Componenti/Dimmer",
  component: Dimmer
};
const Esempi = {
  render: () => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Fade, {
    in: true,
    tag: "div",
    className: "mt-3"
  }, /* @__PURE__ */ React.createElement(Dimmer, {
    icon: "it-unlocked"
  }, /* @__PURE__ */ React.createElement("p", null, "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."))), /* @__PURE__ */ React.createElement("div", {
    className: "row"
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
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ React.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))))
};
const ColorePrimario = {
  render: () => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Fade, {
    in: true,
    tag: "div",
    className: "mt-3"
  }, /* @__PURE__ */ React.createElement(Dimmer, {
    color: "primary",
    icon: "it-unlocked"
  }, /* @__PURE__ */ React.createElement("p", null, "Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus."))), /* @__PURE__ */ React.createElement("div", {
    className: "row"
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
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ React.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))))
};
const DimmerConAzioni = {
  render: () => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Fade, {
    in: true,
    tag: "div",
    className: "mt-3"
  }, /* @__PURE__ */ React.createElement(Dimmer, {
    icon: "it-unlocked"
  }, /* @__PURE__ */ React.createElement("h4", null, "Titolo Dimmer"), /* @__PURE__ */ React.createElement(DimmerButtons, null, /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    outline: true
  }, "Azione secondaria"), /* @__PURE__ */ React.createElement(Button, {
    color: "primary"
  }, "Azione primaria")))), /* @__PURE__ */ React.createElement("div", {
    className: "col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-12 col-lg-4"
  }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardBody, null, /* @__PURE__ */ React.createElement(CardTitle, {
    tag: "h5"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ React.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))), /* @__PURE__ */ React.createElement("div", {
    className: "col-12 col-lg-4 d-none d-lg-block"
  }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardBody, null, /* @__PURE__ */ React.createElement(CardTitle, {
    tag: "h5"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ React.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))))
};
const DimmerConAzioniColorePrimario = {
  render: () => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Fade, {
    in: true,
    tag: "div",
    className: "mt-3"
  }, /* @__PURE__ */ React.createElement(Dimmer, {
    color: "primary",
    icon: "it-unlocked"
  }, /* @__PURE__ */ React.createElement("h4", null, "Titolo Dimmer"), /* @__PURE__ */ React.createElement(DimmerButtons, {
    single: true
  }, /* @__PURE__ */ React.createElement(Button, {
    color: "primary"
  }, "Azione primaria")))), /* @__PURE__ */ React.createElement("div", {
    className: "col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-12 col-lg-4"
  }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardBody, null, /* @__PURE__ */ React.createElement(CardTitle, {
    tag: "h5"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ React.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))), /* @__PURE__ */ React.createElement("div", {
    className: "col-12 col-lg-4 d-none d-lg-block"
  }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardBody, null, /* @__PURE__ */ React.createElement(CardTitle, {
    tag: "h5"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"), /* @__PURE__ */ React.createElement(CardText, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))))
};
Esempi.parameters = {
  ...Esempi.parameters,
  docs: {
    ...(_a = Esempi.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <div>\n      <Fade in={true} tag='div' className='mt-3'>\n        <Dimmer icon='it-unlocked'>\n          <p>\n            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo\n            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.\n          </p>\n        </Dimmer>\n      </Fade>\n      <div className='row'>\n        <div className='col-12 col-lg-4'>\n          {/* start card */}\n          <Card>\n            <CardBody>\n              <CardTitle tag='h5'>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n              </CardTitle>\n              <CardText>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua.\n              </CardText>\n            </CardBody>\n          </Card>\n          {/* end card */}\n        </div>\n\n        <div className='col-12 col-lg-4 d-none d-lg-block'>\n          {/* start card */}\n          <Card>\n            <CardBody>\n              <CardTitle tag='h5'>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n              </CardTitle>\n              <CardText>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua.\n              </CardText>\n            </CardBody>\n          </Card>\n          {/* end card */}\n        </div>\n        <div className='col-12 col-lg-4 d-none d-lg-block'>\n          {/* start card */}\n          <Card>\n            <CardBody>\n              <CardTitle tag='h5'>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n              </CardTitle>\n              <CardText>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua.\n              </CardText>\n            </CardBody>\n          </Card>\n        </div>\n      </div>\n    </div>\n}",
      ...(_c = (_b = Esempi.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
ColorePrimario.parameters = {
  ...ColorePrimario.parameters,
  docs: {
    ...(_d = ColorePrimario.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => <div>\n      <Fade in={true} tag='div' className='mt-3'>\n        <Dimmer color='primary' icon='it-unlocked'>\n          <p>\n            Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo\n            donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.\n          </p>\n        </Dimmer>\n      </Fade>\n      <div className='row'>\n        <div className='col-12 col-lg-4'>\n          {/* start card */}\n          <Card>\n            <CardBody>\n              <CardTitle tag='h5'>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n              </CardTitle>\n              <CardText>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua.\n              </CardText>\n            </CardBody>\n          </Card>\n          {/* end card */}\n        </div>\n\n        <div className='col-12 col-lg-4 d-none d-lg-block'>\n          {/* start card */}\n          <Card>\n            <CardBody>\n              <CardTitle tag='h5'>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n              </CardTitle>\n              <CardText>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua.\n              </CardText>\n            </CardBody>\n          </Card>\n          {/* end card */}\n        </div>\n        <div className='col-12 col-lg-4 d-none d-lg-block'>\n          {/* start card */}\n          <Card>\n            <CardBody>\n              <CardTitle tag='h5'>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n              </CardTitle>\n              <CardText>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua.\n              </CardText>\n            </CardBody>\n          </Card>\n        </div>\n      </div>\n    </div>\n}",
      ...(_f = (_e = ColorePrimario.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
DimmerConAzioni.parameters = {
  ...DimmerConAzioni.parameters,
  docs: {
    ...(_g = DimmerConAzioni.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => <div>\n      <Fade in={true} tag='div' className='mt-3'>\n        <Dimmer icon='it-unlocked'>\n          <h4>Titolo Dimmer</h4>\n          <DimmerButtons>\n            <Button color='primary' outline>\n              Azione secondaria\n            </Button>\n            <Button color='primary'>Azione primaria</Button>\n          </DimmerButtons>\n        </Dimmer>\n      </Fade>\n      <div className='col'>\n        <div className='col-12 col-lg-4'>\n          {/* start card */}\n          <Card>\n            <CardBody>\n              <CardTitle tag='h5'>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n              </CardTitle>\n              <CardText>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua.\n              </CardText>\n            </CardBody>\n          </Card>\n          {/* end card */}\n        </div>\n        <div className='col-12 col-lg-4 d-none d-lg-block'>\n          {/* start card */}\n          <Card>\n            <CardBody>\n              <CardTitle tag='h5'>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n              </CardTitle>\n              <CardText>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua.\n              </CardText>\n            </CardBody>\n          </Card>\n          {/* end card */}\n        </div>\n      </div>\n    </div>\n}",
      ...(_i = (_h = DimmerConAzioni.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
DimmerConAzioniColorePrimario.parameters = {
  ...DimmerConAzioniColorePrimario.parameters,
  docs: {
    ...(_j = DimmerConAzioniColorePrimario.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  render: () => <div>\n      <Fade in={true} tag='div' className='mt-3'>\n        <Dimmer color='primary' icon='it-unlocked'>\n          <h4>Titolo Dimmer</h4>\n          <DimmerButtons single>\n            <Button color='primary'>Azione primaria</Button>\n          </DimmerButtons>\n        </Dimmer>\n      </Fade>\n      <div className='col'>\n        <div className='col-12 col-lg-4'>\n          {/* start card */}\n          <Card>\n            <CardBody>\n              <CardTitle tag='h5'>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n              </CardTitle>\n              <CardText>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua.\n              </CardText>\n            </CardBody>\n          </Card>\n          {/* end card */}\n        </div>\n        <div className='col-12 col-lg-4 d-none d-lg-block'>\n          {/* start card */}\n          <Card>\n            <CardBody>\n              <CardTitle tag='h5'>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n              </CardTitle>\n              <CardText>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n                dolore magna aliqua.\n              </CardText>\n            </CardBody>\n          </Card>\n          {/* end card */}\n        </div>\n      </div>\n    </div>\n}",
      ...(_l = (_k = DimmerConAzioniColorePrimario.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
const __namedExportsOrder = ["Esempi", "ColorePrimario", "DimmerConAzioni", "DimmerConAzioniColorePrimario"];
const DimmerStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ColorePrimario,
  DimmerConAzioni,
  DimmerConAzioniColorePrimario,
  Esempi,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  ColorePrimario as C,
  DimmerStories as D,
  Esempi as E,
  DimmerConAzioni as a,
  DimmerConAzioniColorePrimario as b,
  Dimmer as c
};
