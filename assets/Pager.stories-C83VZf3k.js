var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
import { R as React } from "./index-CQCy530F.js";
import { c as classNames } from "./index-CpyNLP69.js";
import { P as PropTypes } from "./index-Cas18JYw.js";
import { t as tagPropType, m as mapToCssModules } from "./utils-l7qJ8bIE.js";
import { F as Form } from "./Form-DhHNlI4v.js";
import { F as FormGroup } from "./FormGroup-CLeJ8HCL.js";
import { L as Label } from "./Label-D5MqlDDw.js";
import { I as Icon } from "./Icon-JP3vHaan.js";
import { D as Dropdown, a as DropdownToggle } from "./DropdownToggle-f_MefXRL.js";
import { D as DropdownMenu } from "./DropdownMenu-D4O4lxvn.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-Bip2UIsY.js";
import { I as Input } from "./Input-DI7Vm1Km.js";
var _excluded$1 = ["active", "className", "cssModule", "disabled", "tag"];
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
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose$1(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var propTypes$1 = {
  /** Set item as active */
  active: PropTypes.bool,
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set item as disabled */
  disabled: PropTypes.bool,
  /** Set a custom element for this component */
  tag: tagPropType
};
function PaginationItem(props) {
  var active = props.active, className = props.className, cssModule = props.cssModule, disabled = props.disabled, _props$tag = props.tag, Tag = _props$tag === void 0 ? "li" : _props$tag, attributes = _objectWithoutProperties$1(props, _excluded$1);
  var classes = mapToCssModules(classNames(className, "page-item", {
    active,
    disabled
  }), cssModule);
  return /* @__PURE__ */ React.createElement(Tag, _extends$1({}, attributes, {
    className: classes
  }));
}
PaginationItem.propTypes = propTypes$1;
var _excluded = ["className", "cssModule", "next", "previous", "first", "last", "tag"];
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
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var propTypes = {
  "aria-label": PropTypes.string,
  children: PropTypes.node,
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Add to next button to add default aria label and icon */
  next: PropTypes.bool,
  /** Add to previous button to add default aria label and icon */
  previous: PropTypes.bool,
  /** Add to first button to add default aria label and icon */
  first: PropTypes.bool,
  /** Add to last button to add default aria label and icon */
  last: PropTypes.bool,
  /** Set a custom element for this component */
  tag: tagPropType
};
function PaginationLink(props) {
  var className = props.className, cssModule = props.cssModule, next = props.next, previous = props.previous, first = props.first, last = props.last, _props$tag = props.tag, Tag = _props$tag === void 0 ? "a" : _props$tag, attributes = _objectWithoutProperties(props, _excluded);
  var classes = mapToCssModules(classNames(className, "page-link"), cssModule);
  var defaultAriaLabel;
  if (previous) {
    defaultAriaLabel = "Previous";
  } else if (next) {
    defaultAriaLabel = "Next";
  } else if (first) {
    defaultAriaLabel = "First";
  } else if (last) {
    defaultAriaLabel = "Last";
  }
  var ariaLabel = props["aria-label"] || defaultAriaLabel;
  var defaultCaret;
  if (previous) {
    defaultCaret = "‹";
  } else if (next) {
    defaultCaret = "›";
  } else if (first) {
    defaultCaret = "«";
  } else if (last) {
    defaultCaret = "»";
  }
  var children = props.children;
  if (children && Array.isArray(children) && children.length === 0) {
    children = null;
  }
  if (!attributes.href && Tag === "a") {
    Tag = "button";
  }
  if (previous || next || first || last) {
    children = [/* @__PURE__ */ React.createElement("span", {
      "aria-hidden": "true",
      key: "caret"
    }, children || defaultCaret), /* @__PURE__ */ React.createElement("span", {
      className: "visually-hidden",
      key: "ariaLabel"
    }, ariaLabel)];
  }
  return /* @__PURE__ */ React.createElement(Tag, _extends({}, attributes, {
    className: classes,
    "aria-label": ariaLabel
  }), children);
}
PaginationLink.propTypes = propTypes;
const Pager = ({
  className,
  tag = "nav",
  listTag: ListTag = "ul",
  listClassName,
  children,
  total,
  testId,
  ...attributes
}) => {
  const Tag = tag;
  const classes = classNames(className, "pagination-wrapper", {
    "pagination-total": total
  });
  const listClasses = classNames(listClassName, "pagination");
  const { ariaLabel, label } = total || {};
  const totalAriaLabel = ariaLabel ? /* @__PURE__ */ React.createElement("span", { className: "visually-hidden" }, ariaLabel) : null;
  return /* @__PURE__ */ React.createElement(Tag, { className: classes, ...attributes, "data-testid": testId }, /* @__PURE__ */ React.createElement(ListTag, { className: listClasses }, children), total ? /* @__PURE__ */ React.createElement("p", null, totalAriaLabel, label) : null);
};
Pager.__docgenInfo = { "description": "", "methods": [], "displayName": "Pager", "props": { "aria-label": { "required": true, "tsType": { "name": "string" }, "description": "Etichetta di descrizione del contenuto del componente Pager" }, "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'nav'", "computed": false } }, "listTag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati per la l'elemento lista interno", "defaultValue": { "value": "'ul'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Pager" }, "listClassName": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente di lista interno Pager" }, "total": { "required": false, "tsType": { "name": "signature", "type": "object", "raw": "{ ariaLabel: string; label: string }", "signature": { "properties": [{ "key": "ariaLabel", "value": { "name": "string", "required": true } }, { "key": "label", "value": { "name": "string", "required": true } }] } }, "description": "Utilizzare questo attributo per indicare il numero totale di pagine" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const meta = {
  title: "Documentazione/Componenti/Pager",
  component: Pager
};
const Esempi = {
  render: () => /* @__PURE__ */ React.createElement(Pager, {
    "aria-label": "Esempio di navigazione"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "pagination"
  }, /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    previous: true,
    href: "#"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-chevron-left",
    "aria-hidden": true
  }))), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "1")), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "2")), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "3")), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    next: true,
    href: "#"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-chevron-right",
    "aria-hidden": true
  })))))
};
const StatoDisabilitatoEAttivo = {
  render: () => /* @__PURE__ */ React.createElement(Pager, {
    "aria-label": "Esempio di navigazione"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "pagination"
  }, /* @__PURE__ */ React.createElement(PaginationItem, {
    disabled: true
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    previous: true,
    href: "#"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-chevron-left",
    "aria-hidden": true
  }))), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    "aria-current": "page",
    href: "#"
  }, "1")), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "2")), /* @__PURE__ */ React.createElement(PaginationItem, {
    disabled: true
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "3")), /* @__PURE__ */ React.createElement(PaginationItem, {
    disabled: true
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    next: true,
    href: "#"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-chevron-right",
    "aria-hidden": true
  })))))
};
const Allineamento = {
  render: () => /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement(Pager, {
    className: "justify-content-center",
    "aria-label": "Esempio di navigazione"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "pagination"
  }, /* @__PURE__ */ React.createElement(PaginationItem, {
    disabled: true
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    previous: true,
    href: "#"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-chevron-left",
    "aria-hidden": true
  }))), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    "aria-current": "page",
    href: "#"
  }, "1")), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "2")), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "3")), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    next: true,
    href: "#"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-chevron-right",
    "aria-hidden": true
  }))))), /* @__PURE__ */ React.createElement(Pager, {
    className: "justify-content-end",
    "aria-label": "Esempio di navigazione"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "pagination"
  }, /* @__PURE__ */ React.createElement(PaginationItem, {
    disabled: true
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    previous: true,
    href: "#"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-chevron-left",
    "aria-hidden": true
  }))), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    "aria-current": "page",
    href: "#"
  }, "1")), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "2")), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "3")), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    next: true,
    href: "#"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-chevron-right",
    "aria-hidden": true
  }))))))
};
const Responsive = {
  render: () => /* @__PURE__ */ React.createElement(Pager, {
    "aria-label": "Esempio di navigazione"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "pagination"
  }, /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    previous: true,
    href: "#"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-chevron-left",
    "aria-hidden": true
  }))), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "9")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "10")), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    "aria-current": "page",
    href: "#"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "d-sm-none"
  }, "Pagina "), "11")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "12")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "13")), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    next: true,
    href: "#"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-chevron-right",
    "aria-hidden": true
  })))))
};
const MoreComponent = {
  render: () => /* @__PURE__ */ React.createElement(Pager, {
    className: "mb-3",
    "aria-label": "Esempio di paginazione"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "pagination"
  }, /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    previous: true,
    href: "#"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-chevron-left",
    "aria-hidden": true
  }))), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "1")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    tag: "span"
  }, "…")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "24")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "25")), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    "aria-current": "page",
    href: "#"
  }, "26")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "27")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "28")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    tag: "span"
  }, "…")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "50")), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    next: true,
    href: "#"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-chevron-right",
    "aria-hidden": true
  })))))
};
const PageChanger = {
  render: () => /* @__PURE__ */ React.createElement(Pager, {
    className: "mb-3",
    "aria-label": "Esempio di paginazione"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "pagination"
  }, /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    previous: true,
    href: "#"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-chevron-left",
    "aria-hidden": true
  }))), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "1")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    tag: "span"
  }, "…")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "24")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "25")), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    "aria-current": "page",
    href: "#"
  }, "26")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "27")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "28")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    tag: "span"
  }, "…")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "50")), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    next: true,
    href: "#"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-chevron-right",
    "aria-hidden": true
  })))), /* @__PURE__ */ React.createElement(Dropdown, null, /* @__PURE__ */ React.createElement(DropdownToggle, {
    id: "pagerChanger",
    "aria-label": "Salta alla pagina",
    caret: true
  }, "10/pagina", /* @__PURE__ */ React.createElement(Icon, {
    className: "icon icon-primary icon-sm",
    icon: "it-expand"
  })), /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, {
    active: true
  }, "pag. 10"), /* @__PURE__ */ React.createElement(LinkListItem, null, "pag. 20"), /* @__PURE__ */ React.createElement(LinkListItem, null, "pag. 30"), /* @__PURE__ */ React.createElement(LinkListItem, null, "pag. 40"), /* @__PURE__ */ React.createElement(LinkListItem, null, "pag. 50")))))
};
const JumpToPage = {
  render: () => /* @__PURE__ */ React.createElement(Pager, {
    className: "mb-3",
    "aria-label": "Esempio di paginazione"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "pagination"
  }, /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    previous: true,
    href: "#"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-chevron-left",
    "aria-hidden": true
  }))), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "1")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    tag: "span"
  }, "…")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "24")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "25")), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    "aria-current": "page",
    href: "#"
  }, "26")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "27")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "28")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    tag: "span"
  }, "…")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "50")), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    next: true,
    href: "#"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-chevron-right",
    "aria-hidden": true
  })))), /* @__PURE__ */ React.createElement(Form, null, /* @__PURE__ */ React.createElement(FormGroup, null, /* @__PURE__ */ React.createElement(Input, {
    id: "jumpToPage",
    type: "text",
    className: "form-control",
    maxLength: 2
  }), /* @__PURE__ */ React.createElement(Label, {
    for: "jumpToPage"
  }, "Vai a ..."))))
};
const SimpleMode = {
  render: () => /* @__PURE__ */ React.createElement(Pager, {
    className: "mb-3",
    "aria-label": "Esempio di paginazione"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "pagination"
  }, /* @__PURE__ */ React.createElement(PaginationItem, {
    disabled: true
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    previous: true,
    href: "#"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-chevron-left",
    "aria-hidden": true
  }))), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    tag: "span"
  }, "1")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    tag: "span"
  }, "/")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    tag: "span"
  }, "5")), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    next: true,
    href: "#"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-chevron-right",
    "aria-hidden": true
  })))))
};
const LinkTestuali = {
  render: () => /* @__PURE__ */ React.createElement(Pager, {
    className: "mb-3",
    "aria-label": "Esempio di paginazione"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "pagination"
  }, /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    previous: true,
    href: "#",
    className: "text"
  }, "Precedente")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "1")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    tag: "span"
  }, "…")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "24")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "25")), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    "aria-current": "page",
    href: "#"
  }, "26")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "27")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "28")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    tag: "span"
  }, "…")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "50")), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    next: true,
    href: "#",
    className: "text"
  }, "Successiva"))))
};
const TotalNumber = {
  render: () => /* @__PURE__ */ React.createElement(Pager, {
    total: {
      ariaLabel: "Pagina",
      label: " 24 di 50"
    },
    "aria-label": "Esempio di paginazione"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "pagination"
  }, /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    previous: true,
    href: "#"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-chevron-left",
    "aria-hidden": true
  }))), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "1")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    tag: "span"
  }, "…")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    "aria-current": "page",
    href: "#"
  }, "24")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "25")), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "26")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "27")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "28")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    tag: "span"
  }, "…")), /* @__PURE__ */ React.createElement(PaginationItem, {
    className: "d-none d-sm-block"
  }, /* @__PURE__ */ React.createElement(PaginationLink, {
    href: "#"
  }, "50")), /* @__PURE__ */ React.createElement(PaginationItem, null, /* @__PURE__ */ React.createElement(PaginationLink, {
    next: true,
    href: "#"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-chevron-right",
    "aria-hidden": true
  })))))
};
Esempi.parameters = {
  ...Esempi.parameters,
  docs: {
    ...(_a = Esempi.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <Pager aria-label='Esempio di navigazione'>\n      <ul className='pagination'>\n        <PagerItem>\n          <PagerLink previous href='#'>\n            <Icon icon='it-chevron-left' aria-hidden />\n          </PagerLink>\n        </PagerItem>\n        <PagerItem>\n          <PagerLink href='#'>1</PagerLink>\n        </PagerItem>\n        <PagerItem>\n          <PagerLink href='#'>2</PagerLink>\n        </PagerItem>\n        <PagerItem>\n          <PagerLink href='#'>3</PagerLink>\n        </PagerItem>\n        <PagerItem>\n          <PagerLink next href='#'>\n            <Icon icon='it-chevron-right' aria-hidden />\n          </PagerLink>\n        </PagerItem>\n      </ul>\n    </Pager>\n}",
      ...(_c = (_b = Esempi.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
StatoDisabilitatoEAttivo.parameters = {
  ...StatoDisabilitatoEAttivo.parameters,
  docs: {
    ...(_d = StatoDisabilitatoEAttivo.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => <Pager aria-label='Esempio di navigazione'>\n      <ul className='pagination'>\n        <PagerItem disabled>\n          <PagerLink previous href='#'>\n            <Icon icon='it-chevron-left' aria-hidden />\n          </PagerLink>\n        </PagerItem>\n        <PagerItem>\n          <PagerLink aria-current='page' href='#'>\n            1\n          </PagerLink>\n        </PagerItem>\n        <PagerItem>\n          <PagerLink href='#'>2</PagerLink>\n        </PagerItem>\n        <PagerItem disabled>\n          <PagerLink href='#'>3</PagerLink>\n        </PagerItem>\n        <PagerItem disabled>\n          <PagerLink next href='#'>\n            <Icon icon='it-chevron-right' aria-hidden />\n          </PagerLink>\n        </PagerItem>\n      </ul>\n    </Pager>\n}",
      ...(_f = (_e = StatoDisabilitatoEAttivo.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Allineamento.parameters = {
  ...Allineamento.parameters,
  docs: {
    ...(_g = Allineamento.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => <section>\n      <Pager className='justify-content-center' aria-label='Esempio di navigazione'>\n        <ul className='pagination'>\n          <PagerItem disabled>\n            <PagerLink previous href='#'>\n              <Icon icon='it-chevron-left' aria-hidden />\n            </PagerLink>\n          </PagerItem>\n          <PagerItem>\n            <PagerLink aria-current='page' href='#'>\n              1\n            </PagerLink>\n          </PagerItem>\n          <PagerItem>\n            <PagerLink href='#'>2</PagerLink>\n          </PagerItem>\n          <PagerItem>\n            <PagerLink href='#'>3</PagerLink>\n          </PagerItem>\n          <PagerItem>\n            <PagerLink next href='#'>\n              <Icon icon='it-chevron-right' aria-hidden />\n            </PagerLink>\n          </PagerItem>\n        </ul>\n      </Pager>\n\n      <Pager className='justify-content-end' aria-label='Esempio di navigazione'>\n        <ul className='pagination'>\n          <PagerItem disabled>\n            <PagerLink previous href='#'>\n              <Icon icon='it-chevron-left' aria-hidden />\n            </PagerLink>\n          </PagerItem>\n          <PagerItem>\n            <PagerLink aria-current='page' href='#'>\n              1\n            </PagerLink>\n          </PagerItem>\n          <PagerItem>\n            <PagerLink href='#'>2</PagerLink>\n          </PagerItem>\n          <PagerItem>\n            <PagerLink href='#'>3</PagerLink>\n          </PagerItem>\n          <PagerItem>\n            <PagerLink next href='#'>\n              <Icon icon='it-chevron-right' aria-hidden />\n            </PagerLink>\n          </PagerItem>\n        </ul>\n      </Pager>\n    </section>\n}",
      ...(_i = (_h = Allineamento.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Responsive.parameters = {
  ...Responsive.parameters,
  docs: {
    ...(_j = Responsive.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  render: () => <Pager aria-label='Esempio di navigazione'>\n      <ul className='pagination'>\n        <PagerItem>\n          <PagerLink previous href='#'>\n            <Icon icon='it-chevron-left' aria-hidden />\n          </PagerLink>\n        </PagerItem>\n        <PagerItem className='d-sm-block'>\n          <PagerLink href='#'>9</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-sm-block'>\n          <PagerLink href='#'>10</PagerLink>\n        </PagerItem>\n        <PagerItem>\n          <PagerLink aria-current='page' href='#'>\n            <span className='d-sm-none'>Pagina&nbsp;</span>11\n          </PagerLink>\n        </PagerItem>\n        <PagerItem className='d-sm-block'>\n          <PagerLink href='#'>12</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-sm-block'>\n          <PagerLink href='#'>13</PagerLink>\n        </PagerItem>\n        <PagerItem>\n          <PagerLink next href='#'>\n            <Icon icon='it-chevron-right' aria-hidden />\n          </PagerLink>\n        </PagerItem>\n      </ul>\n    </Pager>\n}",
      ...(_l = (_k = Responsive.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
MoreComponent.parameters = {
  ...MoreComponent.parameters,
  docs: {
    ...(_m = MoreComponent.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  render: () => <Pager className='mb-3' aria-label='Esempio di paginazione'>\n      <ul className='pagination'>\n        <PagerItem>\n          <PagerLink previous href='#'>\n            <Icon icon='it-chevron-left' aria-hidden />\n          </PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink href='#'>1</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink tag='span'>…</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink href='#'>24</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink href='#'>25</PagerLink>\n        </PagerItem>\n        <PagerItem>\n          <PagerLink aria-current='page' href='#'>\n            26\n          </PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink href='#'>27</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink href='#'>28</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink tag='span'>…</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink href='#'>50</PagerLink>\n        </PagerItem>\n        <PagerItem>\n          <PagerLink next href='#'>\n            <Icon icon='it-chevron-right' aria-hidden />\n          </PagerLink>\n        </PagerItem>\n      </ul>\n    </Pager>\n}",
      ...(_o = (_n = MoreComponent.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
PageChanger.parameters = {
  ...PageChanger.parameters,
  docs: {
    ...(_p = PageChanger.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  render: () => <Pager className='mb-3' aria-label='Esempio di paginazione'>\n      <ul className='pagination'>\n        <PagerItem>\n          <PagerLink previous href='#'>\n            <Icon icon='it-chevron-left' aria-hidden />\n          </PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink href='#'>1</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink tag='span'>…</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink href='#'>24</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink href='#'>25</PagerLink>\n        </PagerItem>\n        <PagerItem>\n          <PagerLink aria-current='page' href='#'>\n            26\n          </PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink href='#'>27</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink href='#'>28</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink tag='span'>…</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink href='#'>50</PagerLink>\n        </PagerItem>\n        <PagerItem>\n          <PagerLink next href='#'>\n            <Icon icon='it-chevron-right' aria-hidden />\n          </PagerLink>\n        </PagerItem>\n      </ul>\n      <Dropdown>\n        <DropdownToggle id='pagerChanger' aria-label='Salta alla pagina' caret>\n          10/pagina\n          <Icon className='icon icon-primary icon-sm' icon='it-expand' />\n        </DropdownToggle>\n        <DropdownMenu>\n          <LinkList>\n            <LinkListItem active>pag. 10</LinkListItem>\n            <LinkListItem>pag. 20</LinkListItem>\n            <LinkListItem>pag. 30</LinkListItem>\n            <LinkListItem>pag. 40</LinkListItem>\n            <LinkListItem>pag. 50</LinkListItem>\n          </LinkList>\n        </DropdownMenu>\n      </Dropdown>\n    </Pager>\n}",
      ...(_r = (_q = PageChanger.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
JumpToPage.parameters = {
  ...JumpToPage.parameters,
  docs: {
    ...(_s = JumpToPage.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  render: () => <Pager className='mb-3' aria-label='Esempio di paginazione'>\n      <ul className='pagination'>\n        <PagerItem>\n          <PagerLink previous href='#'>\n            <Icon icon='it-chevron-left' aria-hidden />\n          </PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink href='#'>1</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink tag='span'>…</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink href='#'>24</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink href='#'>25</PagerLink>\n        </PagerItem>\n        <PagerItem>\n          <PagerLink aria-current='page' href='#'>\n            26\n          </PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink href='#'>27</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink href='#'>28</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink tag='span'>…</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink href='#'>50</PagerLink>\n        </PagerItem>\n        <PagerItem>\n          <PagerLink next href='#'>\n            <Icon icon='it-chevron-right' aria-hidden />\n          </PagerLink>\n        </PagerItem>\n      </ul>\n      <Form>\n        <FormGroup>\n          <Input id='jumpToPage' type='text' className='form-control' maxLength={2} />\n          <Label for='jumpToPage'>Vai a ...</Label>\n        </FormGroup>\n      </Form>\n    </Pager>\n}",
      ...(_u = (_t = JumpToPage.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
SimpleMode.parameters = {
  ...SimpleMode.parameters,
  docs: {
    ...(_v = SimpleMode.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: "{\n  render: () => <Pager className='mb-3' aria-label='Esempio di paginazione'>\n      <ul className='pagination'>\n        <PagerItem disabled>\n          <PagerLink previous href='#'>\n            <Icon icon='it-chevron-left' aria-hidden />\n          </PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink tag='span'>1</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink tag='span'>/</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink tag='span'>5</PagerLink>\n        </PagerItem>\n        <PagerItem>\n          <PagerLink next href='#'>\n            <Icon icon='it-chevron-right' aria-hidden />\n          </PagerLink>\n        </PagerItem>\n      </ul>\n    </Pager>\n}",
      ...(_x = (_w = SimpleMode.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
LinkTestuali.parameters = {
  ...LinkTestuali.parameters,
  docs: {
    ...(_y = LinkTestuali.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: "{\n  render: () => <Pager className='mb-3' aria-label='Esempio di paginazione'>\n      <ul className='pagination'>\n        <PagerItem>\n          <PagerLink previous href='#' className='text'>\n            Precedente\n          </PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink href='#'>1</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink tag='span'>…</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink href='#'>24</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink href='#'>25</PagerLink>\n        </PagerItem>\n        <PagerItem>\n          <PagerLink aria-current='page' href='#'>\n            26\n          </PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink href='#'>27</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink href='#'>28</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink tag='span'>…</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink href='#'>50</PagerLink>\n        </PagerItem>\n        <PagerItem>\n          <PagerLink next href='#' className='text'>\n            Successiva\n          </PagerLink>\n        </PagerItem>\n      </ul>\n    </Pager>\n}",
      ...(_A = (_z = LinkTestuali.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
TotalNumber.parameters = {
  ...TotalNumber.parameters,
  docs: {
    ...(_B = TotalNumber.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: "{\n  render: () => <Pager total={{\n    ariaLabel: 'Pagina',\n    label: ' 24 di 50'\n  }} aria-label='Esempio di paginazione'>\n      <ul className='pagination'>\n        <PagerItem>\n          <PagerLink previous href='#'>\n            <Icon icon='it-chevron-left' aria-hidden />\n          </PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink href='#'>1</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink tag='span'>…</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink aria-current='page' href='#'>\n            24\n          </PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink href='#'>25</PagerLink>\n        </PagerItem>\n        <PagerItem>\n          <PagerLink href='#'>26</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink href='#'>27</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink href='#'>28</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink tag='span'>…</PagerLink>\n        </PagerItem>\n        <PagerItem className='d-none d-sm-block'>\n          <PagerLink href='#'>50</PagerLink>\n        </PagerItem>\n        <PagerItem>\n          <PagerLink next href='#'>\n            <Icon icon='it-chevron-right' aria-hidden />\n          </PagerLink>\n        </PagerItem>\n      </ul>\n    </Pager>\n}",
      ...(_D = (_C = TotalNumber.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
const __namedExportsOrder = ["Esempi", "StatoDisabilitatoEAttivo", "Allineamento", "Responsive", "MoreComponent", "PageChanger", "JumpToPage", "SimpleMode", "LinkTestuali", "TotalNumber"];
const PagerStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Allineamento,
  Esempi,
  JumpToPage,
  LinkTestuali,
  MoreComponent,
  PageChanger,
  Responsive,
  SimpleMode,
  StatoDisabilitatoEAttivo,
  TotalNumber,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Allineamento as A,
  Esempi as E,
  JumpToPage as J,
  LinkTestuali as L,
  MoreComponent as M,
  PagerStories as P,
  Responsive as R,
  StatoDisabilitatoEAttivo as S,
  TotalNumber as T,
  PageChanger as a,
  SimpleMode as b
};
