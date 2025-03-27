var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { e } from "./index-N7T0HPyM.js";
import { R as Row, C as Col } from "./Col-C4Vz86Og.js";
import { B as Button } from "./Button-DzBfv9Kx.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { I as Icon } from "./Icon-CpFYfyxV.js";
import "./track-focus-DbJ2CO43.js";
const Chip = ({
  className,
  color = "",
  tag = "div",
  simple = false,
  large = false,
  disabled = false,
  testId,
  ...attributes
}) => {
  const Tag = tag;
  const classes = classNames("chip", className, {
    "chip-simple": simple,
    "chip-lg": large,
    "chip-disabled": disabled,
    [`chip-${color}`]: color
  });
  return /* @__PURE__ */ e.createElement(Tag, { className: classes, ...attributes, "data-testid": testId });
};
Chip.__docgenInfo = { "description": "", "methods": [], "displayName": "Chip", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'div'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Chip" }, "simple": { "required": false, "tsType": { "name": "boolean" }, "description": "Impostarlo su `true` per centrare la label all'interno", "defaultValue": { "value": "false", "computed": false } }, "large": { "required": false, "tsType": { "name": "boolean" }, "description": "Impostarlo su `true` per una versione più grande del componente Chip.", "defaultValue": { "value": "false", "computed": false } }, "disabled": { "required": false, "tsType": { "name": "boolean" }, "description": "Impostarlo su `true` per renderizzare il componente Chip come disabilitato", "defaultValue": { "value": "false", "computed": false } }, "color": { "required": false, "tsType": { "name": "union", "raw": "'primary' | 'secondary' | 'success' | 'danger' | 'warning' | string", "elements": [{ "name": "literal", "value": "'primary'" }, { "name": "literal", "value": "'secondary'" }, { "name": "literal", "value": "'success'" }, { "name": "literal", "value": "'danger'" }, { "name": "literal", "value": "'warning'" }, { "name": "string" }] }, "description": "Le varianti di colore definite in Bootstrap Italia", "defaultValue": { "value": "''", "computed": false } }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const ChipLabel = ({ className, tag = "span", testId, ...attributes }) => {
  const Tag = tag;
  const classes = classNames(className, "chip-label");
  return /* @__PURE__ */ e.createElement(Tag, { ...attributes, className: classes, "data-testid": testId });
};
ChipLabel.__docgenInfo = { "description": "", "methods": [], "displayName": "ChipLabel", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'span'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente ChipLabel" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const meta = {
  title: "Documentazione/Componenti/Chips",
  component: Chip
};
const Esempi = {
  render: () => /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", md: {
    size: 6
  } }, /* @__PURE__ */ e.createElement("h4", null, "Versione Standard"), /* @__PURE__ */ e.createElement("p", { className: "mt-4 mb-2" }, "Solo testo"), /* @__PURE__ */ e.createElement(Chip, { simple: true }, /* @__PURE__ */ e.createElement(ChipLabel, null, "Label")), /* @__PURE__ */ e.createElement("p", { className: "mt-4 mb-2" }, "Testo e chiusura"), /* @__PURE__ */ e.createElement(Chip, null, /* @__PURE__ */ e.createElement(ChipLabel, null, "Label"), /* @__PURE__ */ e.createElement(Button, null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close" }))), /* @__PURE__ */ e.createElement("p", { className: "mt-4 mb-2" }, "Icona, testo e chiusura"), /* @__PURE__ */ e.createElement(Chip, null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-github", size: "xs" }), /* @__PURE__ */ e.createElement(ChipLabel, null, "Label"), /* @__PURE__ */ e.createElement(Button, null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close" }))), /* @__PURE__ */ e.createElement("p", { className: "mt-4 mb-2" }, "Avatar, testo e chiusura"), /* @__PURE__ */ e.createElement(Chip, null, /* @__PURE__ */ e.createElement("div", { className: "avatar size-xs" }, /* @__PURE__ */ e.createElement("img", { src: "https://randomuser.me/api/portraits/men/46.jpg", alt: "Mario Rossi" })), /* @__PURE__ */ e.createElement(ChipLabel, null, "Label"), /* @__PURE__ */ e.createElement(Button, null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close" })))), /* @__PURE__ */ e.createElement(Col, { xs: "12", md: {
    size: 6
  } }, /* @__PURE__ */ e.createElement("h4", null, "Versione Grande"), /* @__PURE__ */ e.createElement("p", { className: "mt-4 mb-2" }, "Solo testo"), /* @__PURE__ */ e.createElement(Chip, { simple: true, large: true }, /* @__PURE__ */ e.createElement(ChipLabel, null, "Label")), /* @__PURE__ */ e.createElement("p", { className: "mt-4 mb-2" }, "Testo e chiusura"), /* @__PURE__ */ e.createElement(Chip, { large: true }, /* @__PURE__ */ e.createElement(ChipLabel, null, "Label"), /* @__PURE__ */ e.createElement(Button, null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close" }))), /* @__PURE__ */ e.createElement("p", { className: "mt-4 mb-2" }, "Icona, testo e chiusura"), /* @__PURE__ */ e.createElement(Chip, { large: true }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-github", size: "xs" }), /* @__PURE__ */ e.createElement(ChipLabel, null, "Label"), /* @__PURE__ */ e.createElement(Button, null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close" }))), /* @__PURE__ */ e.createElement("p", { className: "mt-4 mb-2" }, "Avatar, testo e chiusura"), /* @__PURE__ */ e.createElement(Chip, { large: true }, /* @__PURE__ */ e.createElement("div", { className: "avatar size-xs" }, /* @__PURE__ */ e.createElement("img", { src: "https://randomuser.me/api/portraits/men/46.jpg", alt: "Mario Rossi" })), /* @__PURE__ */ e.createElement(ChipLabel, null, "Label"), /* @__PURE__ */ e.createElement(Button, null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close" })))))
};
const ChipDisabilitata = {
  render: () => /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(Chip, { simple: true, large: true, disabled: true }, /* @__PURE__ */ e.createElement(ChipLabel, null, "Label Disabled")), /* @__PURE__ */ e.createElement(Chip, { simple: true, large: true, disabled: true }, /* @__PURE__ */ e.createElement(ChipLabel, null, "Label Disabled"), /* @__PURE__ */ e.createElement(Button, { disabled: true }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close" }))), /* @__PURE__ */ e.createElement(Chip, { large: true, disabled: true }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-github", size: "xs" }), /* @__PURE__ */ e.createElement(ChipLabel, null, "Label Disabled"), /* @__PURE__ */ e.createElement(Button, { disabled: true }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close" }))), /* @__PURE__ */ e.createElement(Chip, { large: true, disabled: true }, /* @__PURE__ */ e.createElement("div", { className: "avatar size-xs" }, /* @__PURE__ */ e.createElement("img", { src: "https://randomuser.me/api/portraits/men/46.jpg", alt: "Mario Rossi" })), /* @__PURE__ */ e.createElement(ChipLabel, null, "Label"), /* @__PURE__ */ e.createElement(Button, { disabled: true }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close" }))))
};
const GruppiDiChip = {
  render: () => /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(Chip, { simple: true }, /* @__PURE__ */ e.createElement(ChipLabel, null, "Label")), /* @__PURE__ */ e.createElement(Chip, null, /* @__PURE__ */ e.createElement(ChipLabel, null, "Label"), /* @__PURE__ */ e.createElement(Button, null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close" }))), /* @__PURE__ */ e.createElement(Chip, null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-github", size: "xs" }), /* @__PURE__ */ e.createElement(ChipLabel, null, "Label "), /* @__PURE__ */ e.createElement(Button, null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close" }))), /* @__PURE__ */ e.createElement(Chip, null, /* @__PURE__ */ e.createElement("div", { className: "avatar size-xs" }, /* @__PURE__ */ e.createElement("img", { src: "https://randomuser.me/api/portraits/men/46.jpg", alt: "Mario Rossi" })), /* @__PURE__ */ e.createElement(ChipLabel, null, "Label"), /* @__PURE__ */ e.createElement(Button, null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close" }))), /* @__PURE__ */ e.createElement("hr", null), /* @__PURE__ */ e.createElement(Chip, { simple: true, large: true }, /* @__PURE__ */ e.createElement(ChipLabel, null, "Label")), /* @__PURE__ */ e.createElement(Chip, { large: true }, /* @__PURE__ */ e.createElement(ChipLabel, null, "Label"), /* @__PURE__ */ e.createElement(Button, null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close" }))), /* @__PURE__ */ e.createElement(Chip, { large: true }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-github", size: "xs" }), /* @__PURE__ */ e.createElement(ChipLabel, null, "Label "), /* @__PURE__ */ e.createElement(Button, null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close" }))), /* @__PURE__ */ e.createElement(Chip, { large: true }, /* @__PURE__ */ e.createElement("div", { className: "avatar size-xs" }, /* @__PURE__ */ e.createElement("img", { src: "https://randomuser.me/api/portraits/men/46.jpg", alt: "Mario Rossi" })), /* @__PURE__ */ e.createElement(ChipLabel, null, "Label"), /* @__PURE__ */ e.createElement(Button, null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close" }))))
};
const VariantiDiColore = {
  render: () => /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("p", { className: "mt-4 mb-2" }, "Primary color"), /* @__PURE__ */ e.createElement(Chip, { simple: true, color: "primary" }, /* @__PURE__ */ e.createElement(ChipLabel, null, "Primary")), /* @__PURE__ */ e.createElement("p", { className: "mt-4 mb-2" }, "Warning Color"), /* @__PURE__ */ e.createElement(Chip, { simple: true, color: "warning" }, /* @__PURE__ */ e.createElement(ChipLabel, null, "Warning")), /* @__PURE__ */ e.createElement("p", { className: "mt-4 mb-2" }, "Success Color"), /* @__PURE__ */ e.createElement(Chip, { simple: true, color: "success" }, /* @__PURE__ */ e.createElement(ChipLabel, null, "Success")), /* @__PURE__ */ e.createElement("p", { className: "mt-4 mb-2" }, "Danger Color"), /* @__PURE__ */ e.createElement(Chip, { simple: true, color: "danger" }, /* @__PURE__ */ e.createElement(ChipLabel, null, "Danger")), /* @__PURE__ */ e.createElement("p", { className: "mt-4 mb-2" }, "Info Color"), /* @__PURE__ */ e.createElement(Chip, { simple: true, color: "info" }, /* @__PURE__ */ e.createElement(ChipLabel, null, "Information")))
};
Esempi.parameters = {
  ...Esempi.parameters,
  docs: {
    ...(_a = Esempi.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <Row>\n      <Col xs='12' md={{\n      size: 6\n    }}>\n        <h4>Versione Standard</h4>\n        <p className='mt-4 mb-2'>Solo testo</p>\n        <Chip simple>\n          <ChipLabel>Label</ChipLabel>\n        </Chip>\n        <p className='mt-4 mb-2'>Testo e chiusura</p>\n        <Chip>\n          <ChipLabel>Label</ChipLabel>\n          <Button>\n            <Icon icon='it-close' />\n          </Button>\n        </Chip>\n        <p className='mt-4 mb-2'>Icona, testo e chiusura</p>\n        <Chip>\n          <Icon icon='it-github' size='xs' />\n          <ChipLabel>Label</ChipLabel>\n          <Button>\n            <Icon icon='it-close' />\n          </Button>\n        </Chip>\n        <p className='mt-4 mb-2'>Avatar, testo e chiusura</p>\n        <Chip>\n          <div className='avatar size-xs'>\n            <img src='https://randomuser.me/api/portraits/men/46.jpg' alt='Mario Rossi' />\n          </div>\n          <ChipLabel>Label</ChipLabel>\n          <Button>\n            <Icon icon='it-close' />\n          </Button>\n        </Chip>\n      </Col>\n      <Col xs='12' md={{\n      size: 6\n    }}>\n        <h4>Versione Grande</h4>\n        <p className='mt-4 mb-2'>Solo testo</p>\n        <Chip simple large>\n          <ChipLabel>Label</ChipLabel>\n        </Chip>\n        <p className='mt-4 mb-2'>Testo e chiusura</p>\n        <Chip large>\n          <ChipLabel>Label</ChipLabel>\n          <Button>\n            <Icon icon='it-close' />\n          </Button>\n        </Chip>\n        <p className='mt-4 mb-2'>Icona, testo e chiusura</p>\n        <Chip large>\n          <Icon icon='it-github' size='xs' />\n          <ChipLabel>Label</ChipLabel>\n          <Button>\n            <Icon icon='it-close' />\n          </Button>\n        </Chip>\n        <p className='mt-4 mb-2'>Avatar, testo e chiusura</p>\n        <Chip large>\n          <div className='avatar size-xs'>\n            <img src='https://randomuser.me/api/portraits/men/46.jpg' alt='Mario Rossi' />\n          </div>\n          <ChipLabel>Label</ChipLabel>\n          <Button>\n            <Icon icon='it-close' />\n          </Button>\n        </Chip>\n      </Col>\n    </Row>\n}",
      ...(_c = (_b = Esempi.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
ChipDisabilitata.parameters = {
  ...ChipDisabilitata.parameters,
  docs: {
    ...(_d = ChipDisabilitata.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => <div>\n      <Chip simple large disabled>\n        <ChipLabel>Label Disabled</ChipLabel>\n      </Chip>\n      <Chip simple large disabled>\n        <ChipLabel>Label Disabled</ChipLabel>\n        <Button disabled>\n          <Icon icon='it-close' />\n        </Button>\n      </Chip>\n      <Chip large disabled>\n        <Icon icon='it-github' size='xs' />\n        <ChipLabel>Label Disabled</ChipLabel>\n        <Button disabled>\n          <Icon icon='it-close' />\n        </Button>\n      </Chip>\n      <Chip large disabled>\n        <div className='avatar size-xs'>\n          <img src='https://randomuser.me/api/portraits/men/46.jpg' alt='Mario Rossi' />\n        </div>\n        <ChipLabel>Label</ChipLabel>\n        <Button disabled>\n          <Icon icon='it-close' />\n        </Button>\n      </Chip>\n    </div>\n}",
      ...(_f = (_e = ChipDisabilitata.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
GruppiDiChip.parameters = {
  ...GruppiDiChip.parameters,
  docs: {
    ...(_g = GruppiDiChip.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => <div>\n      <Chip simple>\n        <ChipLabel>Label</ChipLabel>\n      </Chip>\n      <Chip>\n        <ChipLabel>Label</ChipLabel>\n        <Button>\n          <Icon icon='it-close' />\n        </Button>\n      </Chip>\n      <Chip>\n        <Icon icon='it-github' size='xs' />\n        <ChipLabel>Label </ChipLabel>\n        <Button>\n          <Icon icon='it-close' />\n        </Button>\n      </Chip>\n      <Chip>\n        <div className='avatar size-xs'>\n          <img src='https://randomuser.me/api/portraits/men/46.jpg' alt='Mario Rossi' />\n        </div>\n        <ChipLabel>Label</ChipLabel>\n        <Button>\n          <Icon icon='it-close' />\n        </Button>\n      </Chip>\n      <hr />\n      <Chip simple large>\n        <ChipLabel>Label</ChipLabel>\n      </Chip>\n      <Chip large>\n        <ChipLabel>Label</ChipLabel>\n        <Button>\n          <Icon icon='it-close' />\n        </Button>\n      </Chip>\n      <Chip large>\n        <Icon icon='it-github' size='xs' />\n        <ChipLabel>Label </ChipLabel>\n        <Button>\n          <Icon icon='it-close' />\n        </Button>\n      </Chip>\n      <Chip large>\n        <div className='avatar size-xs'>\n          <img src='https://randomuser.me/api/portraits/men/46.jpg' alt='Mario Rossi' />\n        </div>\n        <ChipLabel>Label</ChipLabel>\n        <Button>\n          <Icon icon='it-close' />\n        </Button>\n      </Chip>\n    </div>\n}",
      ...(_i = (_h = GruppiDiChip.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
VariantiDiColore.parameters = {
  ...VariantiDiColore.parameters,
  docs: {
    ...(_j = VariantiDiColore.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  render: () => <div>\n      <p className='mt-4 mb-2'>Primary color</p>\n      <Chip simple color='primary'>\n        <ChipLabel>Primary</ChipLabel>\n      </Chip>\n      <p className='mt-4 mb-2'>Warning Color</p>\n      <Chip simple color='warning'>\n        <ChipLabel>Warning</ChipLabel>\n      </Chip>\n      <p className='mt-4 mb-2'>Success Color</p>\n      <Chip simple color='success'>\n        <ChipLabel>Success</ChipLabel>\n      </Chip>\n      <p className='mt-4 mb-2'>Danger Color</p>\n      <Chip simple color='danger'>\n        <ChipLabel>Danger</ChipLabel>\n      </Chip>\n      <p className='mt-4 mb-2'>Info Color</p>\n      <Chip simple color='info'>\n        <ChipLabel>Information</ChipLabel>\n      </Chip>\n    </div>\n}",
      ...(_l = (_k = VariantiDiColore.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
const __namedExportsOrder = ["Esempi", "ChipDisabilitata", "GruppiDiChip", "VariantiDiColore"];
const ChipStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ChipDisabilitata,
  Esempi,
  GruppiDiChip,
  VariantiDiColore,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  ChipStories as C,
  Esempi as E,
  GruppiDiChip as G,
  VariantiDiColore as V,
  ChipDisabilitata as a,
  Chip as b,
  ChipLabel as c
};
