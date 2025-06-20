var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { e } from "./index-CoR6MlO7.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { B as Button } from "./Button-DWiqemTT.js";
import { I as Icon } from "./Icon-DiIdFz3Z.js";
import "./track-focus-DbJ2CO43.js";
const goBack = () => {
  window.history.back();
};
const GoBack = ({ className, link = false, up = false, children }) => {
  const Tag = link ? "a" : Button;
  return /* @__PURE__ */ e.createElement(Tag, { className: classNames(className, "go-back"), color: "primary", onClick: goBack }, /* @__PURE__ */ e.createElement(
    Icon,
    {
      className: children ? "me-2" : "",
      color: link ? "primary" : "white",
      icon: up ? "it-arrow-up" : "it-arrow-left"
    }
  ), children);
};
GoBack.__docgenInfo = { "description": "", "methods": [], "displayName": "GoBack", "props": { "className": { "required": false, "tsType": { "name": "string" }, "description": "Optional classnames to pass to the element" }, "link": { "required": false, "tsType": { "name": "boolean" }, "description": "Render the link variant of the go back button", "defaultValue": { "value": "false", "computed": false } }, "up": { "required": false, "tsType": { "name": "boolean" }, "description": "Render the up variant of the go back button", "defaultValue": { "value": "false", "computed": false } }, "children": { "required": false, "tsType": { "name": "ReactNode" }, "description": "" } } };
const meta = {
  title: "Documentazione/Componenti/GoBack",
  component: GoBack
};
const Esempi = {
  render: () => /* @__PURE__ */ e.createElement(GoBack, { link: true }, "Torna indietro")
};
const Pulsanti = {
  render: () => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(GoBack, null, "Torna indietro"), " ", /* @__PURE__ */ e.createElement(GoBack, { up: true }, "Livello superiore"))
};
const PulsantiSoloIcona = {
  render: () => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(GoBack, null), " ", /* @__PURE__ */ e.createElement(GoBack, { up: true }))
};
Esempi.parameters = {
  ...Esempi.parameters,
  docs: {
    ...(_a = Esempi.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <GoBack link>Torna indietro</GoBack>\n}",
      ...(_c = (_b = Esempi.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Pulsanti.parameters = {
  ...Pulsanti.parameters,
  docs: {
    ...(_d = Pulsanti.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => <><GoBack>Torna indietro</GoBack>{' '}<GoBack up>Livello superiore</GoBack></>\n}",
      ...(_f = (_e = Pulsanti.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
PulsantiSoloIcona.parameters = {
  ...PulsantiSoloIcona.parameters,
  docs: {
    ...(_g = PulsantiSoloIcona.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => <><GoBack />{' '}<GoBack up /></>\n}",
      ...(_i = (_h = PulsantiSoloIcona.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
const __namedExportsOrder = ["Esempi", "Pulsanti", "PulsantiSoloIcona"];
const GoBackStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Esempi,
  Pulsanti,
  PulsantiSoloIcona,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Esempi as E,
  GoBackStories as G,
  Pulsanti as P,
  PulsantiSoloIcona as a
};
