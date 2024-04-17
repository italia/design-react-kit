var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
import { R as React, r as reactExports } from "./index-CQCy530F.js";
import { c as classNames } from "./index-CpyNLP69.js";
import { T as TooltipPopoverWrapper, p as propTypes$2 } from "./TooltipPopoverWrapper-BffXJ8Kj.js";
import { P as PropTypes } from "./index-Cas18JYw.js";
import { t as tagPropType, m as mapToCssModules } from "./utils-l7qJ8bIE.js";
import { B as Button } from "./Button-CDo48zCf.js";
import { I as Icon } from "./Icon-JP3vHaan.js";
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends$2.apply(this, arguments);
}
var defaultProps = {
  placement: "right",
  placementPrefix: "bs-popover",
  trigger: "click",
  offset: [0, 8]
};
function Popover(props) {
  var arrowClasses = classNames("popover-arrow", props.arrowClassName);
  var popperClasses = classNames("popover", "show", props.popperClassName);
  var classes = classNames("popover-inner", props.innerClassName);
  return /* @__PURE__ */ React.createElement(TooltipPopoverWrapper, _extends$2({}, props, {
    arrowClassName: arrowClasses,
    popperClassName: popperClasses,
    innerClassName: classes
  }));
}
Popover.propTypes = propTypes$2;
Popover.defaultProps = defaultProps;
var _excluded$1 = ["className", "cssModule", "tag"];
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
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
function PopoverHeader(props) {
  var className = props.className, cssModule = props.cssModule, _props$tag = props.tag, Tag = _props$tag === void 0 ? "h3" : _props$tag, attributes = _objectWithoutProperties$1(props, _excluded$1);
  var classes = mapToCssModules(classNames(className, "popover-header"), cssModule);
  return /* @__PURE__ */ React.createElement(Tag, _extends$1({}, attributes, {
    className: classes
  }));
}
PopoverHeader.propTypes = propTypes$1;
var _excluded = ["className", "cssModule", "tag"];
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
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
function PopoverBody(props) {
  var className = props.className, cssModule = props.cssModule, _props$tag = props.tag, Tag = _props$tag === void 0 ? "div" : _props$tag, attributes = _objectWithoutProperties(props, _excluded);
  var classes = mapToCssModules(classNames(className, "popover-body"), cssModule);
  return /* @__PURE__ */ React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}
PopoverBody.propTypes = propTypes;
const meta = {
  title: "Documentazione/Componenti/Popover",
  component: Popover,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const ExampleWithHooks = () => {
  const [popoverOpen, setPopoverOpen] = reactExports.useState(false);
  const targetRef = reactExports.useRef(null);
  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, {
    color: "danger",
    size: "lg",
    innerRef: targetRef,
    onClick: togglePopover
  }, "Clicca per attivare/disattivare il popover"), /* @__PURE__ */ React.createElement(Popover, {
    placement: "right",
    target: targetRef,
    isOpen: popoverOpen,
    toggle: togglePopover
  }, /* @__PURE__ */ React.createElement(PopoverHeader, null, "Titolo del popover"), /* @__PURE__ */ React.createElement(PopoverBody, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.")));
};
const Example = {
  render: () => /* @__PURE__ */ React.createElement(ExampleWithHooks, null)
};
const ElementiDisabilitatiWithHooks = () => {
  const [popoverOpen, setPopoverOpen] = reactExports.useState(false);
  const targetRef = reactExports.useRef(null);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", {
    ref: targetRef
  }, /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    disabled: true,
    style: {
      pointerEvents: "none"
    }
  }, "Popover disabilitato")), /* @__PURE__ */ React.createElement(Popover, {
    placement: "right",
    target: targetRef,
    trigger: "hover",
    toggle: () => setPopoverOpen(!popoverOpen),
    isOpen: popoverOpen
  }, /* @__PURE__ */ React.createElement(PopoverHeader, null, "Titolo del popover"), /* @__PURE__ */ React.createElement(PopoverBody, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.")));
};
const ElementiDisabilitati = {
  render: () => /* @__PURE__ */ React.createElement(ElementiDisabilitatiWithHooks, null)
};
const DirezioniWithHooks = () => {
  const [popoverOpenSx, setPopoverOpenSx] = reactExports.useState(false);
  const [popoverOpenDx, setPopoverOpenDx] = reactExports.useState(false);
  const [popoverOpenAlto, setPopoverOpenAlto] = reactExports.useState(false);
  const [popoverOpenBasso, setPopoverOpenBasso] = reactExports.useState(false);
  const targetRefSx = reactExports.useRef(null);
  const targetRefDx = reactExports.useRef(null);
  const targetRefAlto = reactExports.useRef(null);
  const targetRefBasso = reactExports.useRef(null);
  return /* @__PURE__ */ React.createElement("div", {
    className: "d-flex flex-column"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto align-self-center p-2"
  }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(Button, {
    className: "me-1",
    color: "secondary",
    innerRef: targetRefSx,
    onClick: () => {
      setPopoverOpenSx(!popoverOpenSx);
    }
  }, "Popover ", "a sinistra"), /* @__PURE__ */ React.createElement(Popover, {
    placement: "left",
    isOpen: popoverOpenSx,
    target: targetRefSx,
    toggle: () => {
      setPopoverOpenSx(!popoverOpenSx);
    }
  }, /* @__PURE__ */ React.createElement(PopoverBody, null, "Vivamus sagittis lacus vel augue laoreet rutrum faucibus")))), /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto align-self-center p-2"
  }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(Button, {
    className: "me-1",
    color: "secondary",
    innerRef: targetRefDx,
    onClick: () => {
      setPopoverOpenDx(!popoverOpenDx);
    }
  }, "Popover ", "a destra"), /* @__PURE__ */ React.createElement(Popover, {
    placement: "right",
    isOpen: popoverOpenDx,
    target: targetRefDx,
    toggle: () => {
      setPopoverOpenDx(!popoverOpenDx);
    }
  }, /* @__PURE__ */ React.createElement(PopoverBody, null, "Vivamus sagittis lacus vel augue laoreet rutrum faucibus")))), /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto align-self-center p-2"
  }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(Button, {
    className: "me-1",
    color: "secondary",
    innerRef: targetRefAlto,
    onClick: () => {
      setPopoverOpenAlto(!popoverOpenAlto);
    }
  }, "Popover ", "in alto"), /* @__PURE__ */ React.createElement(Popover, {
    placement: "top",
    isOpen: popoverOpenAlto,
    target: targetRefAlto,
    toggle: () => {
      setPopoverOpenAlto(!popoverOpenAlto);
    }
  }, /* @__PURE__ */ React.createElement(PopoverBody, null, "Vivamus sagittis lacus vel augue laoreet rutrum faucibus")))), /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto align-self-center p-2"
  }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(Button, {
    className: "me-1",
    color: "secondary",
    innerRef: targetRefBasso,
    onClick: () => {
      setPopoverOpenBasso(!popoverOpenBasso);
    }
  }, "Popover ", "in basso"), /* @__PURE__ */ React.createElement(Popover, {
    placement: "bottom",
    isOpen: popoverOpenBasso,
    target: targetRefBasso,
    toggle: () => {
      setPopoverOpenBasso(!popoverOpenBasso);
    }
  }, /* @__PURE__ */ React.createElement(PopoverBody, null, "Vivamus sagittis lacus vel augue laoreet rutrum faucibus")))));
};
const Direzioni = {
  render: () => /* @__PURE__ */ React.createElement(DirezioniWithHooks, null)
};
const TitoloIconaLinkWithHooks = () => {
  const [popoverOpen, setPopoverOpen] = reactExports.useState(false);
  const targetRef = reactExports.useRef(null);
  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, {
    color: "secondary",
    innerRef: targetRef,
    onClick: togglePopover
  }, "Popover con icona e link"), /* @__PURE__ */ React.createElement(Popover, {
    placement: "right",
    target: targetRef,
    isOpen: popoverOpen,
    toggle: togglePopover
  }, /* @__PURE__ */ React.createElement(PopoverHeader, null, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-help-circle",
    "aria-hidden": true
  }), "Titolo con icona"), /* @__PURE__ */ React.createElement(PopoverBody, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.", /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "popover-inner-link"
  }, "More info", /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-arrow-right",
    "aria-hidden": true
  })))));
};
const TitoloIconaLink = {
  render: () => /* @__PURE__ */ React.createElement(TitoloIconaLinkWithHooks, null)
};
const ModalitàHoverWithHooks = () => {
  const [popoverOpen, setPopoverOpen] = reactExports.useState(false);
  const targetRef = reactExports.useRef(null);
  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, {
    color: "secondary",
    innerRef: targetRef
  }, "Apertura in Hover"), /* @__PURE__ */ React.createElement(Popover, {
    placement: "right",
    trigger: "hover",
    target: targetRef,
    isOpen: popoverOpen,
    toggle: togglePopover
  }, /* @__PURE__ */ React.createElement(PopoverHeader, null, "Popover in Hover"), /* @__PURE__ */ React.createElement(PopoverBody, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.")));
};
const ModalitàHover = {
  render: () => /* @__PURE__ */ React.createElement(ModalitàHoverWithHooks, null)
};
const ClickSuccessivoWithHooks = () => {
  const [popoverOpen, setPopoverOpen] = reactExports.useState(false);
  const targetRef = reactExports.useRef(null);
  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, {
    tabIndex: 0,
    color: "danger",
    innerRef: targetRef
  }, "Popover richiudibile"), /* @__PURE__ */ React.createElement(Popover, {
    placement: "right",
    trigger: "focus",
    target: targetRef,
    isOpen: popoverOpen,
    toggle: togglePopover
  }, /* @__PURE__ */ React.createElement(PopoverHeader, null, "Dismissible popover"), /* @__PURE__ */ React.createElement(PopoverBody, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus augue.")));
};
const ClickSuccessivo = {
  render: () => /* @__PURE__ */ React.createElement(ClickSuccessivoWithHooks, null)
};
Example.parameters = {
  ...Example.parameters,
  docs: {
    ...(_a = Example.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <ExampleWithHooks />\n}",
      ...(_c = (_b = Example.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
ElementiDisabilitati.parameters = {
  ...ElementiDisabilitati.parameters,
  docs: {
    ...(_d = ElementiDisabilitati.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => <ElementiDisabilitatiWithHooks />\n}",
      ...(_f = (_e = ElementiDisabilitati.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Direzioni.parameters = {
  ...Direzioni.parameters,
  docs: {
    ...(_g = Direzioni.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => <DirezioniWithHooks />\n}",
      ...(_i = (_h = Direzioni.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
TitoloIconaLink.parameters = {
  ...TitoloIconaLink.parameters,
  docs: {
    ...(_j = TitoloIconaLink.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  render: () => <TitoloIconaLinkWithHooks />\n}",
      ...(_l = (_k = TitoloIconaLink.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
ModalitàHover.parameters = {
  ...ModalitàHover.parameters,
  docs: {
    ...(_m = ModalitàHover.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  render: () => <ModalitàHoverWithHooks />\n}",
      ...(_o = (_n = ModalitàHover.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
ClickSuccessivo.parameters = {
  ...ClickSuccessivo.parameters,
  docs: {
    ...(_p = ClickSuccessivo.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  render: () => <ClickSuccessivoWithHooks />\n}",
      ...(_r = (_q = ClickSuccessivo.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
const __namedExportsOrder = ["Example", "ElementiDisabilitati", "Direzioni", "TitoloIconaLink", "ModalitàHover", "ClickSuccessivo"];
const PopoverStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ClickSuccessivo,
  Direzioni,
  ElementiDisabilitati,
  Example,
  ModalitàHover,
  TitoloIconaLink,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  ClickSuccessivo as C,
  Direzioni as D,
  Example as E,
  ModalitàHover as M,
  PopoverStories as P,
  TitoloIconaLink as T,
  ElementiDisabilitati as a
};
