var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u;
import { e } from "./index-BehpJNG5.js";
import { c as componentColor } from "./stories-helper-xr0oHPtf.js";
import { P as PropTypes, t as tagPropType, m as mapToCssModules } from "./utils-CruPskUV.js";
import { c as classNames } from "./index-D3ELxcOV.js";
import { B as Button } from "./Button-BVZxHsm7.js";
import "./track-focus-DbJ2CO43.js";
var _excluded = ["className", "cssModule", "color", "innerRef", "pill", "tag"];
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var propTypes = {
  /** Pass children so this component can wrap the child elements */
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Change background color of Badge */
  color: PropTypes.string,
  /** Change existing className with a new className */
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  /** Add rounded corners to the Badge */
  pill: PropTypes.bool,
  /** Set a custom element for this component */
  tag: tagPropType
};
function Badge$1(props) {
  var className = props.className, cssModule = props.cssModule, _props$color = props.color, color = _props$color === void 0 ? "secondary" : _props$color, innerRef = props.innerRef, _props$pill = props.pill, pill = _props$pill === void 0 ? false : _props$pill, _props$tag = props.tag, Tag = _props$tag === void 0 ? "span" : _props$tag, attributes = _objectWithoutProperties(props, _excluded);
  var classes = mapToCssModules(classNames(className, "badge", "bg-" + color, pill ? "rounded-pill" : false), cssModule);
  if (attributes.href && Tag === "span") {
    Tag = "a";
  }
  return /* @__PURE__ */ e.createElement(Tag, _extends({}, attributes, {
    className: classes,
    ref: innerRef
  }));
}
Badge$1.propTypes = propTypes;
const Badge = ({
  color = "secondary",
  pill = false,
  tag = "span",
  children,
  testId,
  ...attributes
}) => {
  return /* @__PURE__ */ e.createElement(Badge$1, { color, pill, tag, ...attributes, "data-testid": testId }, children);
};
Badge.__docgenInfo = { "description": "", "methods": [], "displayName": "Badge", "props": { "color": { "required": false, "tsType": { "name": "union", "raw": "'primary' | 'secondary' | 'success' | 'danger' | 'warning' | string", "elements": [{ "name": "literal", "value": "'primary'" }, { "name": "literal", "value": "'secondary'" }, { "name": "literal", "value": "'success'" }, { "name": "literal", "value": "'danger'" }, { "name": "literal", "value": "'warning'" }, { "name": "string" }] }, "description": "Le varianti di colore definite in Bootstrap Italia", "defaultValue": { "value": "'secondary'", "computed": false } }, "pill": { "required": false, "tsType": { "name": "boolean" }, "description": "Quando attivo rende i Badge arrotondati", "defaultValue": { "value": "false", "computed": false } }, "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'span'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Badge" }, "cssModule": { "required": false, "tsType": { "name": "CSSModule" }, "description": "Oggetto contenente la nuova mappatura per le classi CSS." }, "innerRef": { "required": false, "tsType": { "name": "Ref", "elements": [{ "name": "HTMLElement" }], "raw": "Ref<HTMLElement>" }, "description": "Da utilizzare per impostare un riferimento all'elemento DOM" }, "children": { "required": true, "tsType": { "name": "ReactNode" }, "description": "Il contenuto del badge" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
const meta = {
  title: "Documentazione/Componenti/Badge",
  component: Badge,
  args: {
    color: "secondary"
  },
  argTypes: {
    color: {
      control: "select",
      options: componentColor
    }
  }
};
const EsempioInterattivo = {
  render: ({
    ...args
  }) => /* @__PURE__ */ e.createElement(Badge, { ...args }, "Badge"),
  parameters: {
    layout: "centered"
  }
};
const DiffenteGrandezza = {
  render: () => /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("h1", null, "Titolo di esempio ", /* @__PURE__ */ e.createElement(Badge, { color: "secondary" }, "New")), /* @__PURE__ */ e.createElement("h2", null, "Titolo di esempio ", /* @__PURE__ */ e.createElement(Badge, { color: "secondary" }, "New")), /* @__PURE__ */ e.createElement("h3", null, "Titolo di esempio ", /* @__PURE__ */ e.createElement(Badge, { color: "secondary" }, "New")), /* @__PURE__ */ e.createElement("h4", null, "Titolo di esempio ", /* @__PURE__ */ e.createElement(Badge, { color: "secondary" }, "New")), /* @__PURE__ */ e.createElement("h5", null, "Titolo di esempio ", /* @__PURE__ */ e.createElement(Badge, { color: "secondary" }, "New")), /* @__PURE__ */ e.createElement("h6", null, "Titolo di esempio ", /* @__PURE__ */ e.createElement(Badge, { color: "secondary" }, "New")))
};
const Contatore = {
  render: () => /* @__PURE__ */ e.createElement(Button, { color: "primary" }, "Notifiche ", /* @__PURE__ */ e.createElement(Badge, { color: "light", className: "text-secondary" }, "4"))
};
const ContatoreTestoAggiuntivo = {
  render: () => /* @__PURE__ */ e.createElement(Button, { color: "primary" }, "Notifiche ", /* @__PURE__ */ e.createElement(Badge, { color: "light", className: "text-primary" }, "9"), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Messaggi non letti"))
};
const Variazioni = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "d-flex justify-content-around" }, /* @__PURE__ */ e.createElement(Badge, { color: "primary" }, "Primary"), /* @__PURE__ */ e.createElement(Badge, { color: "secondary" }, "Secondary"), /* @__PURE__ */ e.createElement(Badge, { color: "success" }, "Success"), /* @__PURE__ */ e.createElement(Badge, { color: "danger" }, "Danger"), /* @__PURE__ */ e.createElement(Badge, { color: "warning" }, "Warning"))
};
const BordiArrotondati = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "d-flex justify-content-around" }, /* @__PURE__ */ e.createElement(Badge, { color: "primary", pill: true }, "Primary"), /* @__PURE__ */ e.createElement(Badge, { color: "secondary", pill: true }, "Secondary"), /* @__PURE__ */ e.createElement(Badge, { color: "success", pill: true }, "Success"), /* @__PURE__ */ e.createElement(Badge, { color: "danger", pill: true }, "Danger"), /* @__PURE__ */ e.createElement(Badge, { color: "warning", pill: true }, "Warning"))
};
const ConLink = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "d-flex justify-content-around" }, /* @__PURE__ */ e.createElement(Badge, { href: "#", color: "primary", tag: "a" }, "Primary"), /* @__PURE__ */ e.createElement(Badge, { href: "#", color: "secondary", tag: "a" }, "Secondary"), /* @__PURE__ */ e.createElement(Badge, { href: "#", color: "success", tag: "a" }, "Success"), /* @__PURE__ */ e.createElement(Badge, { href: "#", color: "danger", tag: "a" }, "Danger"), /* @__PURE__ */ e.createElement(Badge, { href: "#", color: "warning", tag: "a" }, "Warning"))
};
EsempioInterattivo.parameters = {
  ...EsempioInterattivo.parameters,
  docs: {
    ...(_a = EsempioInterattivo.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  render: ({\n    ...args\n  }) => <Badge {...args}>Badge</Badge>,\n  parameters: {\n    layout: "centered"\n  }\n}',
      ...(_c = (_b = EsempioInterattivo.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
DiffenteGrandezza.parameters = {
  ...DiffenteGrandezza.parameters,
  docs: {
    ...(_d = DiffenteGrandezza.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  render: () => <div>\n            <h1>\n                Titolo di esempio&nbsp;<Badge color="secondary">New</Badge>\n            </h1>\n            <h2>\n                Titolo di esempio&nbsp;<Badge color="secondary">New</Badge>\n            </h2>\n            <h3>\n                Titolo di esempio&nbsp;<Badge color="secondary">New</Badge>\n            </h3>\n            <h4>\n                Titolo di esempio&nbsp;<Badge color="secondary">New</Badge>\n            </h4>\n            <h5>\n                Titolo di esempio&nbsp;<Badge color="secondary">New</Badge>\n            </h5>\n            <h6>\n                Titolo di esempio&nbsp;<Badge color="secondary">New</Badge>\n            </h6>\n        </div>\n}',
      ...(_f = (_e = DiffenteGrandezza.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Contatore.parameters = {
  ...Contatore.parameters,
  docs: {
    ...(_g = Contatore.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  render: () => <Button color="primary">\n            Notifiche&nbsp;\n            <Badge color="light" className="text-secondary">\n                4\n            </Badge>\n        </Button>\n}',
      ...(_i = (_h = Contatore.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
ContatoreTestoAggiuntivo.parameters = {
  ...ContatoreTestoAggiuntivo.parameters,
  docs: {
    ...(_j = ContatoreTestoAggiuntivo.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  render: () => <Button color="primary">\n            Notifiche&nbsp;\n            <Badge color="light" className="text-primary">\n                9\n            </Badge>\n            <span className="visually-hidden">Messaggi non letti</span>\n        </Button>\n}',
      ...(_l = (_k = ContatoreTestoAggiuntivo.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Variazioni.parameters = {
  ...Variazioni.parameters,
  docs: {
    ...(_m = Variazioni.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: '{\n  render: () => <div className="d-flex justify-content-around">\n            <Badge color="primary">Primary</Badge>\n            <Badge color="secondary">Secondary</Badge>\n            <Badge color="success">Success</Badge>\n            <Badge color="danger">Danger</Badge>\n            <Badge color="warning">Warning</Badge>\n        </div>\n}',
      ...(_o = (_n = Variazioni.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
BordiArrotondati.parameters = {
  ...BordiArrotondati.parameters,
  docs: {
    ...(_p = BordiArrotondati.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: '{\n  render: () => <div className="d-flex justify-content-around">\n            <Badge color="primary" pill>\n                Primary\n            </Badge>\n            <Badge color="secondary" pill>\n                Secondary\n            </Badge>\n            <Badge color="success" pill>\n                Success\n            </Badge>\n            <Badge color="danger" pill>\n                Danger\n            </Badge>\n            <Badge color="warning" pill>\n                Warning\n            </Badge>\n        </div>\n}',
      ...(_r = (_q = BordiArrotondati.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
ConLink.parameters = {
  ...ConLink.parameters,
  docs: {
    ...(_s = ConLink.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: '{\n  render: () => <div className="d-flex justify-content-around">\n            <Badge href="#" color="primary" tag="a">\n                Primary\n            </Badge>\n            <Badge href="#" color="secondary" tag="a">\n                Secondary\n            </Badge>\n            <Badge href="#" color="success" tag="a">\n                Success\n            </Badge>\n            <Badge href="#" color="danger" tag="a">\n                Danger\n            </Badge>\n            <Badge href="#" color="warning" tag="a">\n                Warning\n            </Badge>\n        </div>\n}',
      ...(_u = (_t = ConLink.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
const __namedExportsOrder = ["EsempioInterattivo", "DiffenteGrandezza", "Contatore", "ContatoreTestoAggiuntivo", "Variazioni", "BordiArrotondati", "ConLink"];
const BadgeStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BordiArrotondati,
  ConLink,
  Contatore,
  ContatoreTestoAggiuntivo,
  DiffenteGrandezza,
  EsempioInterattivo,
  Variazioni,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  BadgeStories as B,
  Contatore as C,
  DiffenteGrandezza as D,
  Variazioni as V,
  ContatoreTestoAggiuntivo as a,
  BordiArrotondati as b,
  ConLink as c
};
