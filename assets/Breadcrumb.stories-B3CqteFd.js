var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { e } from "./index-BehpJNG5.js";
import { P as PropTypes, t as tagPropType, m as mapToCssModules } from "./utils-CruPskUV.js";
import { c as classNames } from "./index-D3ELxcOV.js";
import { I as Icon } from "./Icon-DyWUmh-K.js";
import "./track-focus-DbJ2CO43.js";
var _excluded$1 = ["className", "listClassName", "cssModule", "children", "tag", "listTag", "aria-label"];
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends$1.apply(this, arguments);
}
function _objectWithoutProperties$1(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
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
function _objectWithoutPropertiesLoose$1(source, excluded) {
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
var propTypes$1 = {
  /** Aria label */
  "aria-label": PropTypes.string,
  /** Pass children so this component can wrap them */
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Change existing className with a new className */
  cssModule: PropTypes.object,
  /** Add custom class to list tag */
  listClassName: PropTypes.string,
  /** Set a custom element for list tag */
  listTag: tagPropType,
  /** Set a custom element for this component */
  tag: tagPropType
};
function Breadcrumb$1(props) {
  var className = props.className, listClassName = props.listClassName, cssModule = props.cssModule, children = props.children, _props$tag = props.tag, Tag = _props$tag === void 0 ? "nav" : _props$tag, _props$listTag = props.listTag, ListTag = _props$listTag === void 0 ? "ol" : _props$listTag, _props$ariaLabel = props["aria-label"], label = _props$ariaLabel === void 0 ? "breadcrumb" : _props$ariaLabel, attributes = _objectWithoutProperties$1(props, _excluded$1);
  var classes = mapToCssModules(classNames(className), cssModule);
  var listClasses = mapToCssModules(classNames("breadcrumb", listClassName), cssModule);
  return /* @__PURE__ */ e.createElement(Tag, _extends$1({}, attributes, {
    className: classes,
    "aria-label": label
  }), /* @__PURE__ */ e.createElement(ListTag, {
    className: listClasses
  }, children));
}
Breadcrumb$1.propTypes = propTypes$1;
var _excluded = ["className", "cssModule", "active", "tag"];
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
  /** Adds a visual "active" state to a Breadcrumb Item */
  active: PropTypes.bool,
  /** Add custom class to the element */
  className: PropTypes.string,
  /** Change existing className with a new className */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType
};
function BreadcrumbItem(props) {
  var className = props.className, cssModule = props.cssModule, active = props.active, _props$tag = props.tag, Tag = _props$tag === void 0 ? "li" : _props$tag, attributes = _objectWithoutProperties(props, _excluded);
  var classes = mapToCssModules(classNames(className, active ? "active" : false, "breadcrumb-item"), cssModule);
  return /* @__PURE__ */ e.createElement(Tag, _extends({}, attributes, {
    className: classes,
    "aria-current": active ? "page" : void 0
  }));
}
BreadcrumbItem.propTypes = propTypes;
const Breadcrumb = ({
  className,
  listClassName,
  dark,
  "aria-label": label,
  testId,
  ...attributes
}) => {
  const classes = classNames(className, "breadcrumb-container");
  const listClasses = classNames(listClassName, { dark }, dark && "px-3");
  const ariaLabel = label ?? "Percorso di navigazione";
  return /* @__PURE__ */ e.createElement(
    Breadcrumb$1,
    {
      className: classes,
      listClassName: listClasses,
      "aria-label": ariaLabel,
      "data-testid": testId,
      ...attributes
    }
  );
};
Breadcrumb.__docgenInfo = { "description": "", "methods": [], "displayName": "Breadcrumb", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati" }, "listTag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati per la l'elemento lista interno" }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Nav" }, "listClassName": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente di lista interno" }, "cssModule": { "required": false, "tsType": { "name": "CSSModule" }, "description": "Oggetto contenente la nuova mappatura per le classi CSS." }, "dark": { "required": false, "tsType": { "name": "boolean" }, "description": "Indica se si vuole la versione con fondo scuro" }, "aria-label": { "required": false, "tsType": { "name": "string" }, "description": "Etichetta significativa per descrivere il tipo di navigazione" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const meta = {
  title: "Documentazione/Menu di navigazione/Breadcrumbs",
  component: Breadcrumb
};
const Esempi = {
  render: () => /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement(Breadcrumb, null, /* @__PURE__ */ e.createElement(BreadcrumbItem, null, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Home"), /* @__PURE__ */ e.createElement("span", { className: "separator" }, "/")), /* @__PURE__ */ e.createElement(BreadcrumbItem, null, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Subsection"), /* @__PURE__ */ e.createElement("span", { className: "separator" }, "/")), /* @__PURE__ */ e.createElement(BreadcrumbItem, { active: true }, "Current section")), /* @__PURE__ */ e.createElement(Breadcrumb, null, /* @__PURE__ */ e.createElement(BreadcrumbItem, null, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Home"), /* @__PURE__ */ e.createElement("span", { className: "separator" }, ">")), /* @__PURE__ */ e.createElement(BreadcrumbItem, null, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Subsection"), /* @__PURE__ */ e.createElement("span", { className: "separator" }, ">")), /* @__PURE__ */ e.createElement(BreadcrumbItem, { active: true }, "Current section")))
};
const ConIcone = {
  render: () => /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement(Breadcrumb, null, /* @__PURE__ */ e.createElement(BreadcrumbItem, null, /* @__PURE__ */ e.createElement(Icon, { className: "align-top me-1", icon: "it-link", color: "secondary", "aria-hidden": true, size: "sm" }), /* @__PURE__ */ e.createElement("a", { href: "#" }, "Home"), /* @__PURE__ */ e.createElement("span", { className: "separator" }, "/")), /* @__PURE__ */ e.createElement(BreadcrumbItem, null, /* @__PURE__ */ e.createElement(Icon, { className: "align-top me-1", icon: "it-link", color: "secondary", "aria-hidden": true, size: "sm" }), /* @__PURE__ */ e.createElement("a", { href: "#" }, "Subsection"), /* @__PURE__ */ e.createElement("span", { className: "separator" }, "/")), /* @__PURE__ */ e.createElement(BreadcrumbItem, { active: true }, /* @__PURE__ */ e.createElement(Icon, { className: "align-top me-1", icon: "it-link", color: "secondary", "aria-hidden": true, size: "sm" }), "Current section")))
};
const SuSfondoScuro = {
  render: () => /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement(Breadcrumb, { dark: true }, /* @__PURE__ */ e.createElement(BreadcrumbItem, null, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Home"), /* @__PURE__ */ e.createElement("span", { className: "separator" }, "/")), /* @__PURE__ */ e.createElement(BreadcrumbItem, null, /* @__PURE__ */ e.createElement("a", { href: "#" }, "Subsection"), /* @__PURE__ */ e.createElement("span", { className: "separator" }, "/")), /* @__PURE__ */ e.createElement(BreadcrumbItem, { active: true }, "Current section")), /* @__PURE__ */ e.createElement(Breadcrumb, { dark: true }, /* @__PURE__ */ e.createElement(BreadcrumbItem, null, /* @__PURE__ */ e.createElement(Icon, { className: "align-top me-1", icon: "it-link", color: "white", "aria-hidden": true, size: "sm" }), /* @__PURE__ */ e.createElement("a", { href: "#" }, "Home"), /* @__PURE__ */ e.createElement("span", { className: "separator" }, "/")), /* @__PURE__ */ e.createElement(BreadcrumbItem, null, /* @__PURE__ */ e.createElement(Icon, { className: "align-top me-1", icon: "it-link", color: "white", "aria-hidden": true, size: "sm" }), /* @__PURE__ */ e.createElement("a", { href: "#" }, "Subsection"), /* @__PURE__ */ e.createElement("span", { className: "separator" }, "/")), /* @__PURE__ */ e.createElement(BreadcrumbItem, { active: true }, /* @__PURE__ */ e.createElement(Icon, { className: "align-top me-1", icon: "it-link", color: "white", "aria-hidden": true, size: "sm" }), "Current section")))
};
Esempi.parameters = {
  ...Esempi.parameters,
  docs: {
    ...(_a = Esempi.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  render: () => <section>\n            <Breadcrumb>\n                <BreadcrumbItem>\n                    <a href="#">Home</a>\n                    <span className="separator">/</span>\n                </BreadcrumbItem>\n                <BreadcrumbItem>\n                    <a href="#">Subsection</a>\n                    <span className="separator">/</span>\n                </BreadcrumbItem>\n                <BreadcrumbItem active>Current section</BreadcrumbItem>\n            </Breadcrumb>\n\n            <Breadcrumb>\n                <BreadcrumbItem>\n                    <a href="#">Home</a>\n                    <span className="separator">&gt;</span>\n                </BreadcrumbItem>\n                <BreadcrumbItem>\n                    <a href="#">Subsection</a>\n                    <span className="separator">&gt;</span>\n                </BreadcrumbItem>\n                <BreadcrumbItem active>Current section</BreadcrumbItem>\n            </Breadcrumb>\n        </section>\n}',
      ...(_c = (_b = Esempi.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
ConIcone.parameters = {
  ...ConIcone.parameters,
  docs: {
    ...(_d = ConIcone.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  render: () => <section>\n            <Breadcrumb>\n                <BreadcrumbItem>\n                    <Icon className="align-top me-1" icon="it-link" color="secondary" aria-hidden size="sm" />\n                    <a href="#">Home</a>\n                    <span className="separator">/</span>\n                </BreadcrumbItem>\n                <BreadcrumbItem>\n                    <Icon className="align-top me-1" icon="it-link" color="secondary" aria-hidden size="sm" />\n                    <a href="#">Subsection</a>\n                    <span className="separator">/</span>\n                </BreadcrumbItem>\n                <BreadcrumbItem active>\n                    <Icon className="align-top me-1" icon="it-link" color="secondary" aria-hidden size="sm" />\n                    Current section\n                </BreadcrumbItem>\n            </Breadcrumb>\n        </section>\n}',
      ...(_f = (_e = ConIcone.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
SuSfondoScuro.parameters = {
  ...SuSfondoScuro.parameters,
  docs: {
    ...(_g = SuSfondoScuro.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  render: () => <section>\n            <Breadcrumb dark>\n                <BreadcrumbItem>\n                    <a href="#">Home</a>\n                    <span className="separator">/</span>\n                </BreadcrumbItem>\n                <BreadcrumbItem>\n                    <a href="#">Subsection</a>\n                    <span className="separator">/</span>\n                </BreadcrumbItem>\n                <BreadcrumbItem active>Current section</BreadcrumbItem>\n            </Breadcrumb>\n\n            <Breadcrumb dark>\n                <BreadcrumbItem>\n                    <Icon className="align-top me-1" icon="it-link" color="white" aria-hidden size="sm" />\n                    <a href="#">Home</a>\n                    <span className="separator">/</span>\n                </BreadcrumbItem>\n                <BreadcrumbItem>\n                    <Icon className="align-top me-1" icon="it-link" color="white" aria-hidden size="sm" />\n                    <a href="#">Subsection</a>\n                    <span className="separator">/</span>\n                </BreadcrumbItem>\n                <BreadcrumbItem active>\n                    <Icon className="align-top me-1" icon="it-link" color="white" aria-hidden size="sm" />\n                    Current section\n                </BreadcrumbItem>\n            </Breadcrumb>\n        </section>\n}',
      ...(_i = (_h = SuSfondoScuro.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
const __namedExportsOrder = ["Esempi", "ConIcone", "SuSfondoScuro"];
const BreadcrumbStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ConIcone,
  Esempi,
  SuSfondoScuro,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  BreadcrumbStories as B,
  ConIcone as C,
  Esempi as E,
  SuSfondoScuro as S
};
