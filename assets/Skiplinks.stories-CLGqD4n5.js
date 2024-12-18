var _a, _b, _c, _d, _e, _f;
import { e, r as reactExports } from "./index-BehpJNG5.js";
import { c as classNames } from "./index-D3ELxcOV.js";
import "./track-focus-DbJ2CO43.js";
const Skiplink = ({ ariaLabel = null, className, tag = "div", nav = false, testId, children, ...attributes }) => {
  const Tag = nav ? "nav" : tag;
  const classes = classNames(className, "skiplinks");
  if (nav) {
    return /* @__PURE__ */ e.createElement(Tag, { "aria-label": ariaLabel, className: classes, ...attributes, "data-testid": testId }, /* @__PURE__ */ e.createElement("ul", null, children));
  } else {
    return /* @__PURE__ */ e.createElement(Tag, { "aria-label": ariaLabel, className: classes, ...attributes, "data-testid": testId });
  }
};
Skiplink.__docgenInfo = { "description": "", "methods": [], "displayName": "Skiplink", "props": { "ariaLabel": { "required": false, "tsType": { "name": "string" }, "description": "", "defaultValue": { "value": "null", "computed": false } }, "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'div'", "computed": false } }, "nav": { "required": false, "tsType": { "name": "boolean" }, "description": "Utilizzare il componente in modalità `nav`", "defaultValue": { "value": "false", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Skiplink" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const SkiplinkItem = ({
  className,
  tag = "a",
  focusable = true,
  navItem = false,
  testId,
  ...attributes
}) => {
  const Tag = tag;
  const classes = classNames(className, {
    "visually-hidden-focusable": focusable
  });
  const extraHref = attributes.onClick ? { href: "#" } : {};
  if (navItem) {
    return /* @__PURE__ */ e.createElement("li", { className: classes }, /* @__PURE__ */ e.createElement(Tag, { ...attributes, ...extraHref, "data-testid": testId }));
  } else {
    return /* @__PURE__ */ e.createElement(Tag, { className: classes, ...attributes, ...extraHref, "data-testid": testId });
  }
};
SkiplinkItem.__docgenInfo = { "description": "", "methods": [], "displayName": "SkiplinkItem", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'a'", "computed": false } }, "navItem": { "required": false, "tsType": { "name": "boolean" }, "description": "Utilizzare il componente come elemento di uno Skiplink in modalità `nav`", "defaultValue": { "value": "false", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Skiplink" }, "focusable": { "required": false, "tsType": { "name": "boolean" }, "description": "Abilitare questo attributo per renderizzare lo SkipLinkItem al focus", "defaultValue": { "value": "true", "computed": false } }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["AnchorHTMLAttributes"] };
const meta = {
  title: "Documentazione/Componenti/Skiplinks",
  component: Skiplink,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const EsempiWithHooks = () => {
  const containerRef = reactExports.useRef(null);
  const footerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    var _a2;
    (_a2 = containerRef.current) == null ? void 0 : _a2.focus();
  }, []);
  const onClick = () => {
    var _a2;
    (_a2 = footerRef.current) == null ? void 0 : _a2.scrollIntoView();
  };
  return /* @__PURE__ */ e.createElement("section", { tabIndex: -1, ref: containerRef }, /* @__PURE__ */ e.createElement("div", { id: "#main" }), /* @__PURE__ */ e.createElement("div", { id: "#footer", ref: footerRef }), /* @__PURE__ */ e.createElement(Skiplink, null, /* @__PURE__ */ e.createElement(SkiplinkItem, { href: "#main" }, "Skip to main content"), /* @__PURE__ */ e.createElement(SkiplinkItem, { onClick }, "Skip to footer")));
};
const EsempiWithNav = () => {
  const containerRef = reactExports.useRef(null);
  const footerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    var _a2;
    (_a2 = containerRef.current) == null ? void 0 : _a2.focus();
  }, []);
  const onClick = () => {
    var _a2;
    (_a2 = footerRef.current) == null ? void 0 : _a2.scrollIntoView();
  };
  return /* @__PURE__ */ e.createElement("section", { tabIndex: -1, ref: containerRef }, /* @__PURE__ */ e.createElement("div", { id: "#main" }), /* @__PURE__ */ e.createElement("div", { id: "#footer", ref: footerRef }), /* @__PURE__ */ e.createElement(Skiplink, { nav: true, "aria-label": "Scorciatoie di navigazione" }, /* @__PURE__ */ e.createElement(SkiplinkItem, { navItem: true, href: "#main" }, "Skip to main content"), /* @__PURE__ */ e.createElement(SkiplinkItem, { navItem: true, onClick }, "Skip to footer")));
};
const _Esempi = {
  render: () => /* @__PURE__ */ e.createElement(EsempiWithHooks, null)
};
const _EsempiWithNav = {
  render: () => /* @__PURE__ */ e.createElement(EsempiWithNav, null)
};
_Esempi.parameters = {
  ..._Esempi.parameters,
  docs: {
    ...(_a = _Esempi.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <EsempiWithHooks />\n}",
      ...(_c = (_b = _Esempi.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
_EsempiWithNav.parameters = {
  ..._EsempiWithNav.parameters,
  docs: {
    ...(_d = _EsempiWithNav.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => <EsempiWithNav />\n}",
      ...(_f = (_e = _EsempiWithNav.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["_Esempi", "_EsempiWithNav"];
const SkiplinksStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _Esempi,
  _EsempiWithNav,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  SkiplinksStories as S,
  _Esempi as _,
  _EsempiWithNav as a
};
