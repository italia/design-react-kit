var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
import { R as React, r as reactExports } from "./index-C-_iGYWo.js";
import { N as Nav } from "./Nav-SUKqi6BQ.js";
import { N as NavItem, a as NavLink } from "./NavLink-DiRF8l1-.js";
import { C as Container } from "./Container-DhalTljb.js";
import { R as Row, C as Col } from "./Col-CM3Y6KlU.js";
import { P as PropTypes } from "./index-C6XlOQIa.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { t as tagPropType, o as omit, m as mapToCssModules } from "./utils-BFoSoHid.js";
import { I as Icon } from "./Icon-BNsLnf7r.js";
var TabContext = /* @__PURE__ */ React.createContext({});
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
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
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
var propTypes$1 = {
  tag: tagPropType,
  activeTab: PropTypes.any,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
var TabContent = /* @__PURE__ */ function(_Component) {
  _inherits(TabContent2, _Component);
  var _super = _createSuper(TabContent2);
  function TabContent2(props) {
    var _this;
    _classCallCheck(this, TabContent2);
    _this = _super.call(this, props);
    _this.state = {
      activeTab: _this.props.activeTab
    };
    return _this;
  }
  _createClass(TabContent2, [{
    key: "render",
    value: function render() {
      var _this$props = this.props, className = _this$props.className, cssModule = _this$props.cssModule, _this$props$tag = _this$props.tag, Tag = _this$props$tag === void 0 ? "div" : _this$props$tag;
      var attributes = omit(this.props, Object.keys(propTypes$1));
      var classes = mapToCssModules(classNames("tab-content", className), cssModule);
      return /* @__PURE__ */ React.createElement(TabContext.Provider, {
        value: {
          activeTabId: this.state.activeTab
        }
      }, /* @__PURE__ */ React.createElement(Tag, _extends$1({}, attributes, {
        className: classes
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.activeTab !== nextProps.activeTab) {
        return {
          activeTab: nextProps.activeTab
        };
      }
      return null;
    }
  }]);
  return TabContent2;
}(reactExports.Component);
TabContent.propTypes = propTypes$1;
var _excluded = ["className", "cssModule", "tabId", "tag"];
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
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  tabId: PropTypes.any
};
function TabPane(props) {
  var className = props.className, cssModule = props.cssModule, tabId = props.tabId, _props$tag = props.tag, Tag = _props$tag === void 0 ? "div" : _props$tag, attributes = _objectWithoutProperties(props, _excluded);
  var getClasses = function getClasses2(activeTabId) {
    return mapToCssModules(classNames("tab-pane", className, {
      active: tabId === activeTabId
    }), cssModule);
  };
  return /* @__PURE__ */ React.createElement(TabContext.Consumer, null, function(_ref) {
    var activeTabId = _ref.activeTabId;
    return /* @__PURE__ */ React.createElement(Tag, _extends({}, attributes, {
      className: getClasses(activeTabId)
    }));
  });
}
TabPane.propTypes = propTypes;
const meta = {
  title: "Documentazione/Componenti/Tab",
  component: Nav
};
const Esempi = {
  render: () => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Nav, {
    tabs: true,
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#",
    active: true
  }, "Link Attivo")), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#"
  }, "Link")), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#"
  }, "Link")), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#",
    disabled: true
  }, "Link disabilitato"))), /* @__PURE__ */ React.createElement(Nav, {
    tabs: true,
    className: "nav-dark"
  }, /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#",
    active: true
  }, "Link Attivo")), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#"
  }, "Link")), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#"
  }, "Link")), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#",
    disabled: true
  }, "Link disabilitato"))))
};
const TestoWithHooks = () => {
  const [activeTab, toggleTab] = reactExports.useState("1");
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Nav, {
    tabs: true,
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#",
    active: activeTab === "1",
    onClick: () => {
      if (activeTab !== "1") {
        toggleTab("1");
      }
    }
  }, /* @__PURE__ */ React.createElement("span", null, "Tab titolo 1"))), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#",
    active: activeTab === "2",
    onClick: () => {
      if (activeTab !== "2") {
        toggleTab("2");
      }
    }
  }, /* @__PURE__ */ React.createElement("span", null, "Tab titolo 2"))), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#",
    active: activeTab === "3",
    onClick: () => {
      if (activeTab !== "3") {
        toggleTab("3");
      }
    }
  }, /* @__PURE__ */ React.createElement("span", null, "Tab titolo 3")))), /* @__PURE__ */ React.createElement(TabContent, {
    activeTab
  }, /* @__PURE__ */ React.createElement(TabPane, {
    tabId: "1",
    className: "p-3"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), /* @__PURE__ */ React.createElement(TabPane, {
    tabId: "2",
    className: "p-3"
  }, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."), /* @__PURE__ */ React.createElement(TabPane, {
    tabId: "3",
    className: "p-3"
  }, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")));
};
const Testo = {
  render: () => /* @__PURE__ */ React.createElement(TestoWithHooks, null),
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const IconaWithHooks = () => {
  const [activeTab, toggleTab] = reactExports.useState("1");
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Nav, {
    tabs: true,
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#",
    active: activeTab === "1",
    onClick: () => {
      if (activeTab !== "1") {
        toggleTab("1");
      }
    }
  }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(Icon, {
    color: "primary",
    icon: "it-link",
    "aria-hidden": true
  }), /* @__PURE__ */ React.createElement("i", {
    className: "it-ico-lg it-file d-block text-center",
    "aria-label": "Tab titolo 1"
  })))), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#",
    active: activeTab === "2",
    onClick: () => {
      if (activeTab !== "2") {
        toggleTab("2");
      }
    }
  }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(Icon, {
    color: "primary",
    icon: "it-calendar",
    "aria-hidden": true
  }), /* @__PURE__ */ React.createElement("i", {
    className: "it-ico-lg it-calendar d-block text-center",
    "aria-label": "Tab titolo 2"
  })))), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#",
    active: activeTab === "3",
    onClick: () => {
      if (activeTab !== "3") {
        toggleTab("3");
      }
    }
  }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(Icon, {
    color: "primary",
    icon: "it-comment",
    "aria-hidden": true
  }), /* @__PURE__ */ React.createElement("i", {
    className: "it-ico-lg it-comment d-block text-center",
    "aria-label": "Tab titolo 3"
  }))))), /* @__PURE__ */ React.createElement(TabContent, {
    activeTab
  }, /* @__PURE__ */ React.createElement(TabPane, {
    tabId: "1",
    className: "p-3"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), /* @__PURE__ */ React.createElement(TabPane, {
    tabId: "2",
    className: "p-3"
  }, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."), /* @__PURE__ */ React.createElement(TabPane, {
    tabId: "3",
    className: "p-3"
  }, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")));
};
const Icona = {
  render: () => /* @__PURE__ */ React.createElement(IconaWithHooks, null),
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const TestoIconaWithHooks = () => {
  const [activeTab, toggleTab] = reactExports.useState("1");
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Nav, {
    tabs: true,
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#",
    active: activeTab === "1",
    onClick: () => {
      if (activeTab !== "1") {
        toggleTab("1");
      }
    }
  }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(Icon, {
    color: "primary",
    icon: "it-link",
    "aria-hidden": true
  }), /* @__PURE__ */ React.createElement("i", {
    className: "it-ico-lg it-file d-block text-center",
    "aria-label": "Tab titolo 1"
  })), /* @__PURE__ */ React.createElement("span", null, "Tab titolo 1"))), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#",
    active: activeTab === "2",
    onClick: () => {
      if (activeTab !== "2") {
        toggleTab("2");
      }
    }
  }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(Icon, {
    color: "primary",
    icon: "it-calendar",
    "aria-hidden": true
  }), /* @__PURE__ */ React.createElement("i", {
    className: "it-ico-lg it-calendar d-block text-center",
    "aria-label": "Tab titolo 2"
  })), /* @__PURE__ */ React.createElement("span", null, "Tab titolo 2"))), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#",
    active: activeTab === "3",
    onClick: () => {
      if (activeTab !== "3") {
        toggleTab("3");
      }
    }
  }, /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(Icon, {
    color: "primary",
    icon: "it-comment",
    "aria-hidden": true
  }), /* @__PURE__ */ React.createElement("i", {
    className: "it-ico-lg it-comment d-block text-center",
    "aria-label": "Tab titolo 3"
  })), /* @__PURE__ */ React.createElement("span", null, "Tab titolo 3")))), /* @__PURE__ */ React.createElement(TabContent, {
    activeTab
  }, /* @__PURE__ */ React.createElement(TabPane, {
    tabId: "1",
    className: "p-3"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), /* @__PURE__ */ React.createElement(TabPane, {
    tabId: "2",
    className: "p-3"
  }, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."), /* @__PURE__ */ React.createElement(TabPane, {
    tabId: "3",
    className: "p-3"
  }, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")));
};
const TestoIcona = {
  render: () => /* @__PURE__ */ React.createElement(TestoIconaWithHooks, null),
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const BottoneWithHooks = () => {
  const [activeTab, toggleTab] = reactExports.useState("1");
  return /* @__PURE__ */ React.createElement(Container, {
    className: "m-3"
  }, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
    sm: "12"
  }, /* @__PURE__ */ React.createElement(Nav, {
    pills: true,
    className: "mb-3"
  }, /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#",
    active: activeTab === "1",
    onClick: (e) => {
      e.preventDefault();
      toggleTab("1");
    }
  }, "Tab 1")), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#",
    active: activeTab === "2",
    onClick: (e) => {
      e.preventDefault();
      toggleTab("2");
    }
  }, "Tab 2")), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#",
    active: activeTab === "3",
    onClick: (e) => {
      e.preventDefault();
      toggleTab("3");
    }
  }, "Tab 3")))), /* @__PURE__ */ React.createElement(Col, {
    sm: "12"
  }, /* @__PURE__ */ React.createElement(TabContent, {
    activeTab
  }, /* @__PURE__ */ React.createElement(TabPane, {
    tabId: "1",
    className: "p-3"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), /* @__PURE__ */ React.createElement(TabPane, {
    tabId: "2",
    className: "p-3"
  }, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."), /* @__PURE__ */ React.createElement(TabPane, {
    tabId: "3",
    className: "p-3"
  }, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))));
};
const Bottone = {
  render: () => /* @__PURE__ */ React.createElement(BottoneWithHooks, null),
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const VerticaleWithHooks = () => {
  const [activeTab, toggleTab] = reactExports.useState("1");
  return /* @__PURE__ */ React.createElement(Container, {
    className: "m-3"
  }, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
    sm: "3"
  }, /* @__PURE__ */ React.createElement(Nav, {
    pills: true,
    className: "mb-3",
    vertical: true
  }, /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#",
    active: activeTab === "1",
    onClick: (e) => {
      e.preventDefault();
      toggleTab("1");
    }
  }, "Tab 1")), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#",
    active: activeTab === "2",
    onClick: (e) => {
      e.preventDefault();
      toggleTab("2");
    }
  }, "Tab 2")), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#",
    active: activeTab === "3",
    onClick: (e) => {
      e.preventDefault();
      toggleTab("3");
    }
  }, "Tab 3")))), /* @__PURE__ */ React.createElement(Col, {
    sm: "9"
  }, /* @__PURE__ */ React.createElement(TabContent, {
    activeTab
  }, /* @__PURE__ */ React.createElement(TabPane, {
    tabId: "1",
    className: "p-3"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), /* @__PURE__ */ React.createElement(TabPane, {
    tabId: "2",
    className: "p-3"
  }, "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."), /* @__PURE__ */ React.createElement(TabPane, {
    tabId: "3",
    className: "p-3"
  }, "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")))));
};
const Verticale = {
  render: () => /* @__PURE__ */ React.createElement(VerticaleWithHooks, null),
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
Esempi.parameters = {
  ...Esempi.parameters,
  docs: {
    ...(_a = Esempi.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  render: () => <div>\n      <Nav tabs className="mb-3">\n        <NavItem>\n          <NavLink href="#" active>\n            Link Attivo\n          </NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink href="#">Link</NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink href="#">Link</NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink href="#" disabled>\n            Link disabilitato\n          </NavLink>\n        </NavItem>\n      </Nav>\n\n      <Nav tabs className="nav-dark">\n        <NavItem>\n          <NavLink href="#" active>\n            Link Attivo\n          </NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink href="#">Link</NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink href="#">Link</NavLink>\n        </NavItem>\n        <NavItem>\n          <NavLink href="#" disabled>\n            Link disabilitato\n          </NavLink>\n        </NavItem>\n      </Nav>\n    </div>\n}',
      ...(_c = (_b = Esempi.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Testo.parameters = {
  ...Testo.parameters,
  docs: {
    ...(_d = Testo.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  render: () => <TestoWithHooks />,\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "none"\n      }\n    }\n  }\n}',
      ...(_f = (_e = Testo.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Icona.parameters = {
  ...Icona.parameters,
  docs: {
    ...(_g = Icona.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  render: () => <IconaWithHooks />,\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "none"\n      }\n    }\n  }\n}',
      ...(_i = (_h = Icona.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
TestoIcona.parameters = {
  ...TestoIcona.parameters,
  docs: {
    ...(_j = TestoIcona.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  render: () => <TestoIconaWithHooks />,\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "none"\n      }\n    }\n  }\n}',
      ...(_l = (_k = TestoIcona.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Bottone.parameters = {
  ...Bottone.parameters,
  docs: {
    ...(_m = Bottone.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: '{\n  render: () => <BottoneWithHooks />,\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "none"\n      }\n    }\n  }\n}',
      ...(_o = (_n = Bottone.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
Verticale.parameters = {
  ...Verticale.parameters,
  docs: {
    ...(_p = Verticale.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: '{\n  render: () => <VerticaleWithHooks />,\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "none"\n      }\n    }\n  }\n}',
      ...(_r = (_q = Verticale.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
const __namedExportsOrder = ["Esempi", "Testo", "Icona", "TestoIcona", "Bottone", "Verticale"];
const TabStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Bottone,
  Esempi,
  Icona,
  Testo,
  TestoIcona,
  Verticale,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Bottone as B,
  Esempi as E,
  Icona as I,
  TabStories as T,
  Verticale as V,
  Testo as a,
  TestoIcona as b
};
