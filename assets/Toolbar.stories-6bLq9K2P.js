var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M;
import { r as reactExports, R as React } from "./index-CQCy530F.js";
import { c as classNames } from "./index-CpyNLP69.js";
import { I as Icon } from "./Icon-CYxksTIN.js";
import { P as PropTypes } from "./index-Cas18JYw.js";
import { b as ManagerReferenceNodeSetterContext, s as setRef, c as safeInvoke, a as unwrapArray, d as Manager } from "./utils-whDkaA-u.js";
import { t as tagPropType, k as keyCodes, o as omit, m as mapToCssModules } from "./utils-l7qJ8bIE.js";
import { g as getDefaultExportFromCjs } from "./_commonjsHelpers-LQfde5yM.js";
import { B as Button } from "./Button-DfNj8dlY.js";
import { D as DropdownMenu } from "./DropdownMenu-D4O4lxvn.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-Bip2UIsY.js";
var warning = function() {
};
var warning_1 = warning;
const warning$1 = /* @__PURE__ */ getDefaultExportFromCjs(warning_1);
function Reference(_ref) {
  var children = _ref.children, innerRef = _ref.innerRef;
  var setReferenceNode = reactExports.useContext(ManagerReferenceNodeSetterContext);
  var refHandler = reactExports.useCallback(function(node) {
    setRef(innerRef, node);
    safeInvoke(setReferenceNode, node);
  }, [innerRef, setReferenceNode]);
  reactExports.useEffect(function() {
    return function() {
      return setRef(innerRef, null);
    };
  }, []);
  reactExports.useEffect(function() {
    warning$1(Boolean(setReferenceNode), "`Reference` should not be used outside of a `Manager` component.");
  }, [setReferenceNode]);
  return unwrapArray(children)({
    ref: refHandler
  });
}
var DropdownContext = /* @__PURE__ */ React.createContext({});
var InputGroupContext = /* @__PURE__ */ React.createContext({});
function _typeof$1(obj) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$1(obj);
}
var _excluded$1 = ["className", "cssModule", "direction", "isOpen", "group", "size", "nav", "setActiveFromChild", "active", "tag", "menuRole"];
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
function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
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
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties$1(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf$1(subClass, superClass);
}
function _setPrototypeOf$1(o, p) {
  _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf$1(o, p);
}
function _createSuper$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$1(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$1(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$1(this, result);
  };
}
function _possibleConstructorReturn$1(self, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$1(self);
}
function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct$1() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$1(o);
}
var propTypes$1 = {
  a11y: PropTypes.bool,
  disabled: PropTypes.bool,
  direction: PropTypes.oneOf(["up", "down", "start", "end", "left", "right"]),
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  nav: PropTypes.bool,
  active: PropTypes.bool,
  size: PropTypes.string,
  tag: tagPropType,
  toggle: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  dropup: PropTypes.bool,
  inNavbar: PropTypes.bool,
  setActiveFromChild: PropTypes.bool,
  menuRole: PropTypes.oneOf(["listbox", "menu"])
};
var defaultProps$1 = {
  a11y: true,
  isOpen: false,
  direction: "down",
  nav: false,
  active: false,
  inNavbar: false,
  setActiveFromChild: false
};
var preventDefaultKeys = [keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down, keyCodes.end, keyCodes.home];
var Dropdown = /* @__PURE__ */ function(_React$Component) {
  _inherits$1(Dropdown2, _React$Component);
  var _super = _createSuper$1(Dropdown2);
  function Dropdown2(props) {
    var _this;
    _classCallCheck$1(this, Dropdown2);
    _this = _super.call(this, props);
    _this.addEvents = _this.addEvents.bind(_assertThisInitialized$1(_this));
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized$1(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized$1(_this));
    _this.removeEvents = _this.removeEvents.bind(_assertThisInitialized$1(_this));
    _this.toggle = _this.toggle.bind(_assertThisInitialized$1(_this));
    _this.handleMenuRef = _this.handleMenuRef.bind(_assertThisInitialized$1(_this));
    _this.handleToggleRef = _this.handleToggleRef.bind(_assertThisInitialized$1(_this));
    _this.containerRef = /* @__PURE__ */ React.createRef();
    _this.menuRef = /* @__PURE__ */ React.createRef();
    _this.toggleRef = /* @__PURE__ */ React.createRef();
    return _this;
  }
  _createClass$1(Dropdown2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleProps();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.isOpen !== prevProps.isOpen) {
        this.handleProps();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeEvents();
    }
  }, {
    key: "handleMenuRef",
    value: function handleMenuRef(menuRef) {
      this.menuRef.current = menuRef;
    }
  }, {
    key: "handleToggleRef",
    value: function handleToggleRef(toggleRef) {
      this.toggleRef.current = toggleRef;
    }
  }, {
    key: "handleDocumentClick",
    value: function handleDocumentClick(e) {
      if (e && (e.which === 3 || e.type === "keyup" && e.which !== keyCodes.tab))
        return;
      var container = this.getContainer();
      var menu = this.getMenu();
      var toggle = this.getToggle();
      if (!toggle) {
        return;
      }
      var targetIsToggle = toggle.contains(e.target);
      var clickIsInMenu = menu && menu.contains(e.target) && menu !== e.target;
      var clickIsInInput = false;
      if (container) {
        clickIsInInput = container.classList.contains("input-group") && container.classList.contains("dropdown") && e.target.tagName === "INPUT";
      }
      if ((targetIsToggle && !clickIsInInput || clickIsInMenu) && (e.type !== "keyup" || e.which === keyCodes.tab)) {
        return;
      }
      this.toggle(e);
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(e) {
      var _this2 = this;
      var isTargetMenuItem = e.target.getAttribute("role") === "menuitem" || e.target.getAttribute("role") === "option";
      var isTargetMenuCtrl = this.getMenuCtrl() === e.target;
      var isTab = keyCodes.tab === e.which;
      if (/input|textarea/i.test(e.target.tagName) || isTab && !this.props.a11y || isTab && !(isTargetMenuItem || isTargetMenuCtrl)) {
        return;
      }
      if (preventDefaultKeys.indexOf(e.which) !== -1 || e.which >= 48 && e.which <= 90) {
        e.preventDefault();
      }
      if (this.props.disabled)
        return;
      if (isTargetMenuCtrl) {
        if ([keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down].indexOf(e.which) > -1) {
          if (!this.props.isOpen) {
            this.toggle(e);
          }
          setTimeout(function() {
            var _this2$getMenuItems$;
            return (_this2$getMenuItems$ = _this2.getMenuItems()[0]) === null || _this2$getMenuItems$ === void 0 ? void 0 : _this2$getMenuItems$.focus();
          });
        } else if (this.props.isOpen && isTab) {
          var _this$getMenuItems$;
          e.preventDefault();
          (_this$getMenuItems$ = this.getMenuItems()[0]) === null || _this$getMenuItems$ === void 0 ? void 0 : _this$getMenuItems$.focus();
        } else if (this.props.isOpen && e.which === keyCodes.esc) {
          this.toggle(e);
        }
      }
      if (this.props.isOpen && isTargetMenuItem) {
        if ([keyCodes.tab, keyCodes.esc].indexOf(e.which) > -1) {
          this.toggle(e);
          this.getMenuCtrl().focus();
        } else if ([keyCodes.space, keyCodes.enter].indexOf(e.which) > -1) {
          e.target.click();
          this.getMenuCtrl().focus();
        } else if ([keyCodes.down, keyCodes.up].indexOf(e.which) > -1 || [keyCodes.n, keyCodes.p].indexOf(e.which) > -1 && e.ctrlKey) {
          var $menuitems = this.getMenuItems();
          var index = $menuitems.indexOf(e.target);
          if (keyCodes.up === e.which || keyCodes.p === e.which && e.ctrlKey) {
            index = index !== 0 ? index - 1 : $menuitems.length - 1;
          } else if (keyCodes.down === e.which || keyCodes.n === e.which && e.ctrlKey) {
            index = index === $menuitems.length - 1 ? 0 : index + 1;
          }
          $menuitems[index].focus();
        } else if (keyCodes.end === e.which) {
          var _$menuitems = this.getMenuItems();
          _$menuitems[_$menuitems.length - 1].focus();
        } else if (keyCodes.home === e.which) {
          var _$menuitems2 = this.getMenuItems();
          _$menuitems2[0].focus();
        } else if (e.which >= 48 && e.which <= 90) {
          var _$menuitems3 = this.getMenuItems();
          var charPressed = String.fromCharCode(e.which).toLowerCase();
          for (var i = 0; i < _$menuitems3.length; i += 1) {
            var firstLetter = _$menuitems3[i].textContent && _$menuitems3[i].textContent[0].toLowerCase();
            if (firstLetter === charPressed) {
              _$menuitems3[i].focus();
              break;
            }
          }
        }
      }
    }
  }, {
    key: "handleProps",
    value: function handleProps() {
      if (this.props.isOpen) {
        this.addEvents();
      } else {
        this.removeEvents();
      }
    }
  }, {
    key: "getContextValue",
    value: function getContextValue() {
      return {
        toggle: this.toggle,
        isOpen: this.props.isOpen,
        direction: this.props.direction === "down" && this.props.dropup ? "up" : this.props.direction,
        inNavbar: this.props.inNavbar,
        disabled: this.props.disabled,
        // Callback that should be called by DropdownMenu to provide a ref to
        // a HTML tag that's used for the DropdownMenu
        onMenuRef: this.handleMenuRef,
        onToggleRef: this.handleToggleRef,
        menuRole: this.props.menuRole
      };
    }
  }, {
    key: "getContainer",
    value: function getContainer() {
      return this.containerRef.current;
    }
  }, {
    key: "getMenu",
    value: function getMenu() {
      return this.menuRef.current;
    }
  }, {
    key: "getToggle",
    value: function getToggle() {
      return this.toggleRef.current;
    }
  }, {
    key: "getMenuCtrl",
    value: function getMenuCtrl() {
      if (this._$menuCtrl)
        return this._$menuCtrl;
      this._$menuCtrl = this.getToggle();
      return this._$menuCtrl;
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      if (this.props.menuRole === "listbox") {
        return "option";
      }
      return "menuitem";
    }
  }, {
    key: "getMenuItems",
    value: function getMenuItems() {
      var menuContainer = this.getMenu() || this.getContainer();
      return [].slice.call(menuContainer.querySelectorAll('[role="'.concat(this.getItemType(), '"]')));
    }
  }, {
    key: "addEvents",
    value: function addEvents() {
      var _this3 = this;
      ["click", "touchstart", "keyup"].forEach(function(event) {
        return document.addEventListener(event, _this3.handleDocumentClick, true);
      });
    }
  }, {
    key: "removeEvents",
    value: function removeEvents() {
      var _this4 = this;
      ["click", "touchstart", "keyup"].forEach(function(event) {
        return document.removeEventListener(event, _this4.handleDocumentClick, true);
      });
    }
  }, {
    key: "toggle",
    value: function toggle(e) {
      if (this.props.disabled) {
        return e && e.preventDefault();
      }
      return this.props.toggle(e);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames, _this5 = this;
      var _omit = omit(this.props, ["toggle", "disabled", "inNavbar", "a11y"]), className = _omit.className, cssModule = _omit.cssModule, direction = _omit.direction, isOpen = _omit.isOpen, group = _omit.group, size = _omit.size, nav = _omit.nav, setActiveFromChild = _omit.setActiveFromChild, active = _omit.active, tag = _omit.tag;
      _omit.menuRole;
      var attrs = _objectWithoutProperties$1(_omit, _excluded$1);
      var Tag = tag || (nav ? "li" : "div");
      var subItemIsActive = false;
      if (setActiveFromChild) {
        React.Children.map(this.props.children[1].props.children, function(dropdownItem) {
          if (dropdownItem && dropdownItem.props.active)
            subItemIsActive = true;
        });
      }
      var classes = mapToCssModules(classNames(className, nav && active ? "active" : false, setActiveFromChild && subItemIsActive ? "active" : false, (_classNames = {
        "btn-group": group
      }, _defineProperty$1(_classNames, "btn-group-".concat(size), !!size), _defineProperty$1(_classNames, "dropdown", !group), _defineProperty$1(_classNames, "dropup", direction === "up"), _defineProperty$1(_classNames, "dropstart", direction === "start" || direction === "left"), _defineProperty$1(_classNames, "dropend", direction === "end" || direction === "right"), _defineProperty$1(_classNames, "show", isOpen), _defineProperty$1(_classNames, "nav-item", nav), _classNames)), cssModule);
      if (this.context.insideInputGroup) {
        return /* @__PURE__ */ React.createElement(DropdownContext.Provider, {
          value: this.getContextValue()
        }, /* @__PURE__ */ React.createElement(Manager, null, React.Children.map(this.props.children, function(child) {
          return /* @__PURE__ */ React.cloneElement(child, {
            onKeyDown: _this5.handleKeyDown
          });
        })));
      }
      return /* @__PURE__ */ React.createElement(DropdownContext.Provider, {
        value: this.getContextValue()
      }, /* @__PURE__ */ React.createElement(Manager, null, /* @__PURE__ */ React.createElement(Tag, _extends$1({}, attrs, _defineProperty$1({}, typeof Tag === "string" ? "ref" : "innerRef", this.containerRef), {
        onKeyDown: this.handleKeyDown,
        className: classes
      }))));
    }
  }]);
  return Dropdown2;
}(React.Component);
Dropdown.propTypes = propTypes$1;
Dropdown.defaultProps = defaultProps$1;
Dropdown.contextType = InputGroupContext;
const Dropdown$1 = Dropdown;
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
var _excluded = ["className", "color", "cssModule", "caret", "split", "nav", "tag", "innerRef"];
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
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
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
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
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
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
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
var propTypes = {
  caret: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  "aria-haspopup": PropTypes.bool,
  split: PropTypes.bool,
  tag: tagPropType,
  nav: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
};
var defaultProps = {
  color: "secondary",
  "aria-haspopup": true
};
var DropdownToggle = /* @__PURE__ */ function(_React$Component) {
  _inherits(DropdownToggle2, _React$Component);
  var _super = _createSuper(DropdownToggle2);
  function DropdownToggle2(props) {
    var _this;
    _classCallCheck(this, DropdownToggle2);
    _this = _super.call(this, props);
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(DropdownToggle2, [{
    key: "onClick",
    value: function onClick(e) {
      if (this.props.disabled || this.context.disabled) {
        e.preventDefault();
        return;
      }
      if (this.props.nav && !this.props.tag) {
        e.preventDefault();
      }
      if (this.props.onClick) {
        this.props.onClick(e);
      }
      this.context.toggle(e);
    }
  }, {
    key: "getRole",
    value: function getRole() {
      return this.context.menuRole || this.props["aria-haspopup"];
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props, className = _this$props.className, color = _this$props.color, cssModule = _this$props.cssModule, caret = _this$props.caret, split = _this$props.split, nav = _this$props.nav, tag = _this$props.tag, innerRef = _this$props.innerRef, props = _objectWithoutProperties(_this$props, _excluded);
      var ariaLabel = props["aria-label"] || "Toggle Dropdown";
      var classes = mapToCssModules(classNames(className, {
        "dropdown-toggle": caret || split,
        "dropdown-toggle-split": split,
        "nav-link": nav
      }), cssModule);
      var children = typeof props.children !== "undefined" ? props.children : /* @__PURE__ */ React.createElement("span", {
        className: "visually-hidden"
      }, ariaLabel);
      var Tag;
      if (nav && !tag) {
        Tag = "a";
        props.href = "#";
      } else if (!tag) {
        Tag = Button;
        props.color = color;
        props.cssModule = cssModule;
      } else {
        Tag = tag;
      }
      var returnFunction = function returnFunction2(_ref) {
        var ref = _ref.ref;
        var handleRef = function handleRef2(tagRef) {
          ref(tagRef);
          var onToggleRef = _this2.context.onToggleRef;
          if (onToggleRef)
            onToggleRef(tagRef);
        };
        return /* @__PURE__ */ React.createElement(Tag, _extends({}, props, _defineProperty({}, typeof Tag === "string" ? "ref" : "innerRef", handleRef), {
          className: classes,
          onClick: _this2.onClick,
          "aria-expanded": _this2.context.isOpen,
          "aria-haspopup": _this2.getRole(),
          children
        }));
      };
      if (this.context.inNavbar) {
        return /* @__PURE__ */ React.createElement(React.Fragment, null, returnFunction({
          ref: this.context.onToggleRef
        }));
      }
      return /* @__PURE__ */ React.createElement(Reference, {
        innerRef
      }, returnFunction);
    }
  }]);
  return DropdownToggle2;
}(React.Component);
DropdownToggle.propTypes = propTypes;
DropdownToggle.defaultProps = defaultProps;
DropdownToggle.contextType = DropdownContext;
const DropdownToggle$1 = DropdownToggle;
const SizeContext = reactExports.createContext(void 0);
const Toolbar = ({ tag = "nav", size, testId, children, vertical, ...attributes }) => {
  const Tag = tag;
  const classes = classNames("toolbar", {
    [`toolbar-${size}`]: size && size !== "large",
    "toolbar-vertical": vertical
  });
  return /* @__PURE__ */ React.createElement(SizeContext.Provider, { value: size || "large" }, /* @__PURE__ */ React.createElement(Tag, { className: classes, ...attributes, "data-testid": testId }, /* @__PURE__ */ React.createElement("ul", null, children)));
};
Toolbar.__docgenInfo = { "description": "", "methods": [], "displayName": "Toolbar", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "", "defaultValue": { "value": "'nav'", "computed": false } }, "size": { "required": false, "tsType": { "name": "union", "raw": "'large' | 'medium' | 'small'", "elements": [{ "name": "literal", "value": "'large'" }, { "name": "literal", "value": "'medium'" }, { "name": "literal", "value": "'small'" }] }, "description": "" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" }, "vertical": { "required": false, "tsType": { "name": "boolean" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const ToolbarDividerItem = () => /* @__PURE__ */ React.createElement("li", { className: "toolbar-divider", "aria-hidden": true });
ToolbarDividerItem.__docgenInfo = { "description": "", "methods": [], "displayName": "ToolbarDividerItem" };
const disabledMessage = " elemento disabilitato";
function ToolbarItemLabel({
  label,
  size,
  disabled,
  badge
}) {
  const showSrText = size && size !== "large";
  if (disabled) {
    if (!label || showSrText) {
      return /* @__PURE__ */ React.createElement("span", { className: "visually-hidden" }, disabledMessage);
    }
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { className: "toolbar-label" }, label), /* @__PURE__ */ React.createElement("span", { className: "visually-hidden" }, disabledMessage));
  }
  if (!label) {
    return null;
  }
  return showSrText ? /* @__PURE__ */ React.createElement("span", { className: "visually-hidden" }, label) : /* @__PURE__ */ React.createElement("span", { className: "toolbar-label" }, label, (badge == null ? void 0 : badge.label) ? /* @__PURE__ */ React.createElement("span", { className: "visually-hidden" }, badge.label) : null);
}
const ToolbarItem = ({
  active = false,
  badge,
  url,
  iconName,
  label,
  tag = "a",
  disabled,
  testId,
  srText,
  dropdown,
  dropdownProps,
  children,
  showMore,
  onClick,
  isDropdownOpen,
  ...attributes
}) => {
  const Tag = tag;
  const size = reactExports.useContext(SizeContext);
  const activeClass = classNames({ active, disabled });
  const ariaAttributes = {
    ...disabled && { "aria-disabled": true }
  };
  const badgeObject = typeof badge === "number" ? { value: badge, label: srText || "", srText: srText || "" } : badge;
  const toolbarItemContent = /* @__PURE__ */ React.createElement(React.Fragment, null, badgeObject ? /* @__PURE__ */ React.createElement("div", { className: "badge-wrapper" }, /* @__PURE__ */ React.createElement("span", { className: "toolbar-badge" }, size !== "large" ? null : badgeObject.value), size !== "large" && /* @__PURE__ */ React.createElement("span", { className: "visually-hidden" }, badgeObject.srText)) : null, /* @__PURE__ */ React.createElement(Icon, { icon: iconName, size: size === "small" ? "sm" : "" }), /* @__PURE__ */ React.createElement(ToolbarItemLabel, { label, size, disabled, badge: badgeObject }));
  if (dropdown) {
    return /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Dropdown$1, { ...dropdownProps, toggle: onClick, isOpen: isDropdownOpen }, /* @__PURE__ */ React.createElement(
      DropdownToggle$1,
      {
        disabled,
        caret: true,
        className: classNames("btn-dropdown", { "toolbar-more": showMore }),
        color: ""
      },
      toolbarItemContent
    ), children));
  }
  return /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(
    Tag,
    {
      href: url || "#",
      className: activeClass,
      "data-testid": testId,
      ...attributes,
      ...ariaAttributes,
      onClick
    },
    toolbarItemContent
  ));
};
ToolbarItem.__docgenInfo = { "description": "", "methods": [], "displayName": "ToolbarItem", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati. Il valore di default è il tag anchor.", "defaultValue": { "value": "'a'", "computed": false } }, "active": { "required": false, "tsType": { "name": "boolean" }, "description": "Indica l'elemento attivo nella Toolbar", "defaultValue": { "value": "false", "computed": false } }, "disabled": { "required": false, "tsType": { "name": "boolean" }, "description": "Mostra l'elemento come disabilitato nella Toolbar" }, "url": { "required": false, "tsType": { "name": "string" }, "description": "L'URL a cui far puntare il tag anchor." }, "label": { "required": false, "tsType": { "name": "string" }, "description": "L'etichetta da mostrare sotto l'icona. In caso di dimensioni più piccole verrà\nautomaticamente sintegrata in uno span per gli screen reader." }, "iconName": { "required": true, "tsType": { "name": "string" }, "description": "Il nome dell'icona da utilizzare" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" }, "srText": { "required": false, "tsType": { "name": "string" }, "description": 'Un testo completo da mostrare per Toolbar di grandezza media e piccola con badge (ad esempio: "ci sono 42 nuovi documenti da esaminare")\n@deprecated' }, "badge": { "required": false, "tsType": { "name": "union", "raw": "number | ToolbarItemBadge", "elements": [{ "name": "number" }, { "name": "ToolbarItemBadge" }] }, "description": `Il badge da mostrare sull'icona del ToolbarItem.
Un badge è composto da:

  * una label per screen reader da affiancare alla label corrente (ad esempio: "da leggere")
  * un testo completo da mostrare per Toolbar di grandezza media e piccola (ad esempio: "ci sono 42 nuovi documenti da esaminare")
  * un eventuale valore numerico (omesso in caso di un badge di alert)` }, "dropdown": { "required": false, "tsType": { "name": "boolean" }, "description": "Indica che il ToolbarItem contiene un menu dropdown.\nQuando questo attributo è attivo il contenuto del componente ToolbarItem verrà mostrato all'interno del dropdown." }, "showMore": { "required": false, "tsType": { "name": "boolean" }, "description": `Quando l'opzione dropdown è attiva questo attributo controlla se
l'elemento è di tipo "altro" contenente altre icone/opzioni o no.` }, "isDropdownOpen": { "required": false, "tsType": { "name": "boolean" }, "description": "Quando il componente è in modalità dropdown permette di controllarne\nlo stato di visibilità. Il valore di default è false." }, "dropdownProps": { "required": false, "tsType": { "name": "Omit", "elements": [{ "name": "DropdownProps" }, { "name": "union", "raw": "'toggle' | 'isOpen'", "elements": [{ "name": "literal", "value": "'toggle'" }, { "name": "literal", "value": "'isOpen'" }] }], "raw": "Omit<DropdownProps, 'toggle' | 'isOpen'>" }, "description": `Da utilizzare quando l'attributo "dropdown" è attivo.
Gli attributi qui passati verranno inoltrati al componente Dropdown interno.` }, "onClick": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "(event: MouseEvent<HTMLAnchorElement>) => void", "signature": { "arguments": [{ "type": { "name": "MouseEvent", "elements": [{ "name": "HTMLAnchorElement" }], "raw": "MouseEvent<HTMLAnchorElement>" }, "name": "event" }], "return": { "name": "void" } } }, "description": "Funzione chiamata al click dell'element ToolbarItem" } }, "composes": ["HTMLAttributes"] };
const meta = {
  title: "Documentazione/Componenti/Toolbar",
  component: Toolbar
};
const Esempio = () => /* @__PURE__ */ React.createElement("div", {
  className: "toolbar-docs-style"
}, /* @__PURE__ */ React.createElement(Toolbar, null, /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "messaggi",
  iconName: "it-comment",
  active: true
}), /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "immagini",
  iconName: "it-camera"
}), /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "documenti",
  iconName: "it-file"
}), /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "privacy",
  iconName: "it-lock"
}), /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "preferiti",
  iconName: "it-star-outline",
  disabled: true
})));
const EsempioMedium = () => /* @__PURE__ */ React.createElement("div", {
  className: "toolbar-docs-style"
}, /* @__PURE__ */ React.createElement(Toolbar, {
  size: "medium"
}, /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "messaggi",
  iconName: "it-comment",
  active: true
}), /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "immagini",
  iconName: "it-camera"
}), /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "documenti",
  iconName: "it-file"
}), /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "privacy",
  iconName: "it-lock"
}), /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "preferiti",
  iconName: "it-star-outline",
  disabled: true
})));
const EsempioSmall = () => /* @__PURE__ */ React.createElement("div", {
  className: "toolbar-docs-style"
}, /* @__PURE__ */ React.createElement(Toolbar, {
  size: "small"
}, /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "messaggi",
  iconName: "it-comment",
  active: true
}), /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "immagini",
  iconName: "it-camera"
}), /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "documenti",
  iconName: "it-file"
}), /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "privacy",
  iconName: "it-lock"
}), /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "preferiti",
  iconName: "it-star-outline"
}), /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "downloads",
  iconName: "it-download",
  disabled: true
})));
const EsempioWithDivider = () => /* @__PURE__ */ React.createElement("div", {
  className: "toolbar-docs-style"
}, /* @__PURE__ */ React.createElement(Toolbar, null, /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "messaggi",
  iconName: "it-comment",
  active: true
}), /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "immagini",
  iconName: "it-camera"
}), /* @__PURE__ */ React.createElement(ToolbarDividerItem, null), /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "documenti",
  iconName: "it-file"
}), /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "privacy",
  iconName: "it-lock"
}), /* @__PURE__ */ React.createElement(ToolbarDividerItem, null), /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "preferiti",
  iconName: "it-star-outline",
  disabled: true
})));
const EsempioConBadgeGrande = () => /* @__PURE__ */ React.createElement("div", {
  className: "toolbar-docs-style"
}, /* @__PURE__ */ React.createElement(Toolbar, null, /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "messaggi",
  iconName: "it-comment",
  active: true,
  badge: {
    value: 1,
    label: "da leggere",
    srText: `c'è un messaggio da leggere`
  }
}), /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "documenti",
  iconName: "it-file",
  badge: {
    value: 42,
    label: "da esaminare",
    srText: `ci sono 42 documenti da esaminare`
  }
}), /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "immagini",
  iconName: "it-camera"
}), /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "privacy",
  iconName: "it-lock"
}), /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "preferiti",
  iconName: "it-star-outline",
  disabled: true
})));
const EsempioConBadgeMedio = () => /* @__PURE__ */ React.createElement("div", {
  className: "toolbar-docs-style"
}, /* @__PURE__ */ React.createElement(Toolbar, {
  size: "medium"
}, /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "messaggi",
  iconName: "it-comment",
  active: true,
  badge: {
    value: 1,
    label: "da leggere",
    srText: `c'è un messaggio da leggere`
  }
}), /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "documenti",
  iconName: "it-file",
  badge: {
    value: 42,
    label: "da esaminare",
    srText: `ci sono 42 documenti da esaminare`
  }
}), /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "immagini",
  iconName: "it-camera"
}), /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "privacy",
  iconName: "it-lock"
}), /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "preferiti",
  iconName: "it-star-outline",
  disabled: true
})));
const EsempioConBadgePiccolo = () => /* @__PURE__ */ React.createElement("div", {
  className: "toolbar-docs-style"
}, /* @__PURE__ */ React.createElement(Toolbar, {
  size: "small"
}, /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "messaggi",
  iconName: "it-comment",
  active: true,
  badge: {
    value: 1,
    label: "da leggere",
    srText: `c'è un messaggio da leggere`
  }
}), /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "documenti",
  iconName: "it-file",
  badge: {
    value: 42,
    label: "da esaminare",
    srText: `ci sono 42 documenti da esaminare`
  }
}), /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "immagini",
  iconName: "it-camera"
}), /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "privacy",
  iconName: "it-lock"
}), /* @__PURE__ */ React.createElement(ToolbarItem, {
  label: "preferiti",
  iconName: "it-star-outline",
  disabled: true
})));
const EsempioConDropdownGrandeWithHooks = () => {
  const [openFirst, toggleFirst] = reactExports.useState(false);
  const [openSecond, toggleSecond] = reactExports.useState(false);
  const [openThird, toggleThird] = reactExports.useState(false);
  const [openFourth, toggleFourth] = reactExports.useState(false);
  const [openFifth, toggleFifth] = reactExports.useState(false);
  return /* @__PURE__ */ React.createElement("div", {
    className: "toolbar-docs-style"
  }, /* @__PURE__ */ React.createElement(Toolbar, {
    size: "large"
  }, /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "messaggi",
    iconName: "it-comment",
    active: true,
    badge: {
      value: 1,
      label: "da leggere",
      srText: `c'è un messaggio da leggere`
    },
    dropdown: true,
    isDropdownOpen: openFirst,
    onClick: () => toggleFirst(!openFirst)
  }, /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "immagini",
    iconName: "it-camera",
    badge: {
      value: 42,
      label: "da visualizzare",
      srText: `ci sono 42 immagini da visualizzare`
    },
    dropdown: true,
    isDropdownOpen: openSecond,
    onClick: () => toggleSecond(!openSecond)
  }, /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "documenti",
    iconName: "it-file",
    dropdown: true,
    isDropdownOpen: openThird,
    onClick: () => toggleThird(!openThird)
  }, /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "privacy",
    iconName: "it-lock",
    disabled: true,
    dropdown: true,
    isDropdownOpen: openFourth,
    onClick: () => toggleFourth(!openFourth)
  }, /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "altro",
    iconName: "it-more-actions",
    dropdown: true,
    isDropdownOpen: openFifth,
    onClick: () => toggleFifth(!openFifth),
    showMore: true
  }, /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, {
    className: "left-icon"
  }, /* @__PURE__ */ React.createElement(Icon, {
    className: "me-2",
    icon: "it-link"
  }), /* @__PURE__ */ React.createElement("span", null, "Azione 1")), /* @__PURE__ */ React.createElement(LinkListItem, {
    className: "left-icon"
  }, /* @__PURE__ */ React.createElement(Icon, {
    className: "me-2",
    icon: "it-mail"
  }), /* @__PURE__ */ React.createElement("span", null, "Azione 2")), /* @__PURE__ */ React.createElement(LinkListItem, {
    className: "left-icon"
  }, /* @__PURE__ */ React.createElement(Icon, {
    className: "me-2",
    icon: "it-settings"
  }), /* @__PURE__ */ React.createElement("span", null, "Azione 3")))))));
};
const EsempioConDropdownGrande = {
  render: () => /* @__PURE__ */ React.createElement(EsempioConDropdownGrandeWithHooks, null)
};
const EsempioConDropdownMediaWithHooks = () => {
  const [openFirst, toggleFirst] = reactExports.useState(false);
  const [openSecond, toggleSecond] = reactExports.useState(false);
  const [openThird, toggleThird] = reactExports.useState(false);
  const [openFourth, toggleFourth] = reactExports.useState(false);
  const [openFifth, toggleFifth] = reactExports.useState(false);
  const [openSixth, toggleSixth] = reactExports.useState(false);
  return /* @__PURE__ */ React.createElement("div", {
    className: "toolbar-docs-style"
  }, /* @__PURE__ */ React.createElement(Toolbar, {
    size: "medium"
  }, /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "messaggi",
    iconName: "it-comment",
    active: true,
    badge: {
      value: 1,
      label: "da leggere",
      srText: `c'è un messaggio da leggere`
    },
    dropdown: true,
    isDropdownOpen: openFirst,
    onClick: () => toggleFirst(!openFirst)
  }, /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "immagini",
    iconName: "it-camera",
    badge: {
      value: 42,
      label: "da visualizzare",
      srText: `ci sono 42 immagini da visualizzare`
    },
    dropdown: true,
    isDropdownOpen: openSecond,
    onClick: () => toggleSecond(!openSecond)
  }, /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "documenti",
    iconName: "it-file",
    dropdown: true,
    isDropdownOpen: openThird,
    onClick: () => toggleThird(!openThird)
  }, /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "privacy",
    iconName: "it-lock",
    dropdown: true,
    isDropdownOpen: openFourth,
    onClick: () => toggleFourth(!openFourth)
  }, /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "preferiti",
    iconName: "it-star-outline",
    disabled: true,
    dropdown: true,
    isDropdownOpen: openFifth,
    onClick: () => toggleFifth(!openFifth)
  }, /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "altro",
    iconName: "it-more-actions",
    dropdown: true,
    isDropdownOpen: openSixth,
    onClick: () => toggleSixth(!openSixth),
    showMore: true
  }, /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, {
    className: "left-icon"
  }, /* @__PURE__ */ React.createElement(Icon, {
    className: "me-2",
    icon: "it-link"
  }), /* @__PURE__ */ React.createElement("span", null, "Azione 1")), /* @__PURE__ */ React.createElement(LinkListItem, {
    className: "left-icon"
  }, /* @__PURE__ */ React.createElement(Icon, {
    className: "me-2",
    icon: "it-mail"
  }), /* @__PURE__ */ React.createElement("span", null, "Azione 2")), /* @__PURE__ */ React.createElement(LinkListItem, {
    className: "left-icon"
  }, /* @__PURE__ */ React.createElement(Icon, {
    className: "me-2",
    icon: "it-settings"
  }), /* @__PURE__ */ React.createElement("span", null, "Azione 3")))))));
};
const EsempioConDropdownMedia = {
  render: () => /* @__PURE__ */ React.createElement(EsempioConDropdownMediaWithHooks, null)
};
const EsempioConDropdownPiccolaWithHooks = () => {
  const [openFirst, toggleFirst] = reactExports.useState(false);
  const [openSecond, toggleSecond] = reactExports.useState(false);
  const [openThird, toggleThird] = reactExports.useState(false);
  const [openFourth, toggleFourth] = reactExports.useState(false);
  const [openFifth, toggleFifth] = reactExports.useState(false);
  const [openSixth, toggleSixth] = reactExports.useState(false);
  return /* @__PURE__ */ React.createElement("div", {
    className: "toolbar-docs-style"
  }, /* @__PURE__ */ React.createElement(Toolbar, {
    size: "small"
  }, /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "messaggi",
    iconName: "it-comment",
    active: true,
    badge: {
      value: 1,
      label: "da leggere",
      srText: `c'è un messaggio da leggere`
    },
    dropdown: true,
    isDropdownOpen: openFirst,
    onClick: () => toggleFirst(!openFirst)
  }, /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "immagini",
    iconName: "it-camera",
    badge: {
      value: 42,
      label: "da visualizzare",
      srText: `ci sono 42 immagini da visualizzare`
    },
    dropdown: true,
    isDropdownOpen: openSecond,
    onClick: () => toggleSecond(!openSecond)
  }, /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "documenti",
    iconName: "it-file",
    dropdown: true,
    isDropdownOpen: openThird,
    onClick: () => toggleThird(!openThird)
  }, /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "privacy",
    iconName: "it-lock",
    dropdown: true,
    isDropdownOpen: openFourth,
    onClick: () => toggleFourth(!openFourth)
  }, /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "preferiti",
    iconName: "it-star-outline",
    disabled: true,
    dropdown: true,
    isDropdownOpen: openFifth,
    onClick: () => toggleFifth(!openFifth)
  }, /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "altro",
    iconName: "it-more-actions",
    dropdown: true,
    isDropdownOpen: openSixth,
    onClick: () => toggleSixth(!openSixth),
    showMore: true
  }, /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, {
    className: "left-icon"
  }, /* @__PURE__ */ React.createElement(Icon, {
    className: "me-2",
    icon: "it-link"
  }), /* @__PURE__ */ React.createElement("span", null, "Azione 1")), /* @__PURE__ */ React.createElement(LinkListItem, {
    className: "left-icon"
  }, /* @__PURE__ */ React.createElement(Icon, {
    className: "me-2",
    icon: "it-mail"
  }), /* @__PURE__ */ React.createElement("span", null, "Azione 2")), /* @__PURE__ */ React.createElement(LinkListItem, {
    className: "left-icon"
  }, /* @__PURE__ */ React.createElement(Icon, {
    className: "me-2",
    icon: "it-settings"
  }), /* @__PURE__ */ React.createElement("span", null, "Azione 3")))))));
};
const EsempioConDropdownPiccola = {
  render: () => /* @__PURE__ */ React.createElement(EsempioConDropdownPiccolaWithHooks, null)
};
const EsempioVerticaleGrandeWithHooks = () => {
  const [openFirst, toggleFirst] = reactExports.useState(false);
  return /* @__PURE__ */ React.createElement("div", {
    className: "toolbar-docs-style"
  }, /* @__PURE__ */ React.createElement(Toolbar, {
    vertical: true
  }, /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "messaggi",
    iconName: "it-comment",
    active: true,
    badge: {
      value: 1,
      label: "da leggere",
      srText: `c'è un messaggio da leggere`
    }
  }), /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "immagini",
    iconName: "it-camera",
    badge: {
      value: 42,
      label: "da visualizzare",
      srText: `ci sono 42 immagini da visualizzare`
    },
    dropdown: true,
    isDropdownOpen: openFirst,
    onClick: () => toggleFirst(!openFirst)
  }, /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ React.createElement(ToolbarDividerItem, null), /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "immagini",
    iconName: "it-camera"
  }), /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "privacy",
    iconName: "it-lock"
  }), /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "preferiti",
    iconName: "it-star-outline",
    disabled: true
  })));
};
const EsempioVerticaleGrande = {
  render: () => /* @__PURE__ */ React.createElement(EsempioVerticaleGrandeWithHooks, null)
};
const EsempioVerticaleMediaWithHooks = () => {
  const [openFirst, toggleFirst] = reactExports.useState(false);
  return /* @__PURE__ */ React.createElement("div", {
    className: "toolbar-docs-style"
  }, /* @__PURE__ */ React.createElement(Toolbar, {
    vertical: true,
    size: "medium"
  }, /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "messaggi",
    iconName: "it-comment",
    active: true,
    badge: {
      value: 1,
      label: "da leggere",
      srText: `c'è un messaggio da leggere`
    }
  }), /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "immagini",
    iconName: "it-camera",
    badge: {
      value: 42,
      label: "da visualizzare",
      srText: `ci sono 42 immagini da visualizzare`
    },
    dropdown: true,
    isDropdownOpen: openFirst,
    onClick: () => toggleFirst(!openFirst)
  }, /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ React.createElement(ToolbarDividerItem, null), /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "immagini",
    iconName: "it-camera"
  }), /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "privacy",
    iconName: "it-lock"
  }), /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "preferiti",
    iconName: "it-star-outline",
    disabled: true
  })));
};
const EsempioVerticaleMedia = {
  render: () => /* @__PURE__ */ React.createElement(EsempioVerticaleMediaWithHooks, null)
};
const EsempioVerticalePiccolaWithHooks = () => {
  const [openFirst, toggleFirst] = reactExports.useState(false);
  return /* @__PURE__ */ React.createElement("div", {
    className: "toolbar-docs-style"
  }, /* @__PURE__ */ React.createElement(Toolbar, {
    vertical: true,
    size: "small"
  }, /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "messaggi",
    iconName: "it-comment",
    active: true,
    badge: {
      value: 1,
      label: "da leggere",
      srText: `c'è un messaggio da leggere`
    }
  }), /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "immagini",
    iconName: "it-camera",
    badge: {
      value: 42,
      label: "da visualizzare",
      srText: `ci sono 42 immagini da visualizzare`
    },
    dropdown: true,
    isDropdownOpen: openFirst,
    onClick: () => toggleFirst(!openFirst)
  }, /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ React.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ React.createElement(ToolbarDividerItem, null), /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "immagini",
    iconName: "it-camera"
  }), /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "privacy",
    iconName: "it-lock"
  }), /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "preferiti",
    iconName: "it-star-outline"
  }), /* @__PURE__ */ React.createElement(ToolbarItem, {
    label: "download",
    iconName: "it-download",
    disabled: true
  })));
};
const EsempioVerticalePiccola = {
  render: () => /* @__PURE__ */ React.createElement(EsempioVerticalePiccolaWithHooks, null)
};
Esempio.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Esempio"
};
EsempioMedium.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EsempioMedium"
};
EsempioSmall.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EsempioSmall"
};
EsempioWithDivider.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EsempioWithDivider"
};
EsempioConBadgeGrande.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EsempioConBadgeGrande"
};
EsempioConBadgeMedio.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EsempioConBadgeMedio"
};
EsempioConBadgePiccolo.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "EsempioConBadgePiccolo"
};
Esempio.parameters = {
  ...Esempio.parameters,
  docs: {
    ...(_a = Esempio.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "() => <div className='toolbar-docs-style'>\n    <Toolbar>\n      <ToolbarItem label='messaggi' iconName='it-comment' active />\n      <ToolbarItem label='immagini' iconName='it-camera' />\n      <ToolbarItem label='documenti' iconName='it-file' />\n      <ToolbarItem label='privacy' iconName='it-lock' />\n      <ToolbarItem label='preferiti' iconName='it-star-outline' disabled />\n    </Toolbar>\n  </div>",
      ...(_c = (_b = Esempio.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
EsempioMedium.parameters = {
  ...EsempioMedium.parameters,
  docs: {
    ...(_d = EsempioMedium.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "() => <div className='toolbar-docs-style'>\n    <Toolbar size={'medium'}>\n      <ToolbarItem label='messaggi' iconName='it-comment' active />\n      <ToolbarItem label='immagini' iconName='it-camera' />\n      <ToolbarItem label='documenti' iconName='it-file' />\n      <ToolbarItem label='privacy' iconName='it-lock' />\n      <ToolbarItem label='preferiti' iconName='it-star-outline' disabled />\n    </Toolbar>\n  </div>",
      ...(_f = (_e = EsempioMedium.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
EsempioSmall.parameters = {
  ...EsempioSmall.parameters,
  docs: {
    ...(_g = EsempioSmall.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "() => <div className='toolbar-docs-style'>\n    <Toolbar size={'small'}>\n      <ToolbarItem label='messaggi' iconName='it-comment' active />\n      <ToolbarItem label='immagini' iconName='it-camera' />\n      <ToolbarItem label='documenti' iconName='it-file' />\n      <ToolbarItem label='privacy' iconName='it-lock' />\n      <ToolbarItem label='preferiti' iconName='it-star-outline' />\n      <ToolbarItem label='downloads' iconName='it-download' disabled />\n    </Toolbar>\n  </div>",
      ...(_i = (_h = EsempioSmall.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
EsempioWithDivider.parameters = {
  ...EsempioWithDivider.parameters,
  docs: {
    ...(_j = EsempioWithDivider.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "() => <div className='toolbar-docs-style'>\n    <Toolbar>\n      <ToolbarItem label='messaggi' iconName='it-comment' active />\n      <ToolbarItem label='immagini' iconName='it-camera' />\n      <ToolbarDividerItem />\n      <ToolbarItem label='documenti' iconName='it-file' />\n      <ToolbarItem label='privacy' iconName='it-lock' />\n      <ToolbarDividerItem />\n      <ToolbarItem label='preferiti' iconName='it-star-outline' disabled />\n    </Toolbar>\n  </div>",
      ...(_l = (_k = EsempioWithDivider.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
EsempioConBadgeGrande.parameters = {
  ...EsempioConBadgeGrande.parameters,
  docs: {
    ...(_m = EsempioConBadgeGrande.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "() => <div className='toolbar-docs-style'>\n    <Toolbar>\n      <ToolbarItem label='messaggi' iconName='it-comment' active badge={{\n      value: 1,\n      label: 'da leggere',\n      srText: `c'è un messaggio da leggere`\n    }} />\n      <ToolbarItem label='documenti' iconName='it-file' badge={{\n      value: 42,\n      label: 'da esaminare',\n      srText: `ci sono 42 documenti da esaminare`\n    }} />\n      <ToolbarItem label='immagini' iconName='it-camera' />\n      <ToolbarItem label='privacy' iconName='it-lock' />\n      <ToolbarItem label='preferiti' iconName='it-star-outline' disabled />\n    </Toolbar>\n  </div>",
      ...(_o = (_n = EsempioConBadgeGrande.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
EsempioConBadgeMedio.parameters = {
  ...EsempioConBadgeMedio.parameters,
  docs: {
    ...(_p = EsempioConBadgeMedio.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "() => <div className='toolbar-docs-style'>\n    <Toolbar size='medium'>\n      <ToolbarItem label='messaggi' iconName='it-comment' active badge={{\n      value: 1,\n      label: 'da leggere',\n      srText: `c'è un messaggio da leggere`\n    }} />\n      <ToolbarItem label='documenti' iconName='it-file' badge={{\n      value: 42,\n      label: 'da esaminare',\n      srText: `ci sono 42 documenti da esaminare`\n    }} />\n      <ToolbarItem label='immagini' iconName='it-camera' />\n      <ToolbarItem label='privacy' iconName='it-lock' />\n      <ToolbarItem label='preferiti' iconName='it-star-outline' disabled />\n    </Toolbar>\n  </div>",
      ...(_r = (_q = EsempioConBadgeMedio.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
EsempioConBadgePiccolo.parameters = {
  ...EsempioConBadgePiccolo.parameters,
  docs: {
    ...(_s = EsempioConBadgePiccolo.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "() => <div className='toolbar-docs-style'>\n    <Toolbar size='small'>\n      <ToolbarItem label='messaggi' iconName='it-comment' active badge={{\n      value: 1,\n      label: 'da leggere',\n      srText: `c'è un messaggio da leggere`\n    }} />\n      <ToolbarItem label='documenti' iconName='it-file' badge={{\n      value: 42,\n      label: 'da esaminare',\n      srText: `ci sono 42 documenti da esaminare`\n    }} />\n      <ToolbarItem label='immagini' iconName='it-camera' />\n      <ToolbarItem label='privacy' iconName='it-lock' />\n      <ToolbarItem label='preferiti' iconName='it-star-outline' disabled />\n    </Toolbar>\n  </div>",
      ...(_u = (_t = EsempioConBadgePiccolo.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
EsempioConDropdownGrande.parameters = {
  ...EsempioConDropdownGrande.parameters,
  docs: {
    ...(_v = EsempioConDropdownGrande.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: "{\n  render: () => <EsempioConDropdownGrandeWithHooks />\n}",
      ...(_x = (_w = EsempioConDropdownGrande.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
EsempioConDropdownMedia.parameters = {
  ...EsempioConDropdownMedia.parameters,
  docs: {
    ...(_y = EsempioConDropdownMedia.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: "{\n  render: () => <EsempioConDropdownMediaWithHooks />\n}",
      ...(_A = (_z = EsempioConDropdownMedia.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
EsempioConDropdownPiccola.parameters = {
  ...EsempioConDropdownPiccola.parameters,
  docs: {
    ...(_B = EsempioConDropdownPiccola.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: "{\n  render: () => <EsempioConDropdownPiccolaWithHooks />\n}",
      ...(_D = (_C = EsempioConDropdownPiccola.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
EsempioVerticaleGrande.parameters = {
  ...EsempioVerticaleGrande.parameters,
  docs: {
    ...(_E = EsempioVerticaleGrande.parameters) == null ? void 0 : _E.docs,
    source: {
      originalSource: "{\n  render: () => <EsempioVerticaleGrandeWithHooks />\n}",
      ...(_G = (_F = EsempioVerticaleGrande.parameters) == null ? void 0 : _F.docs) == null ? void 0 : _G.source
    }
  }
};
EsempioVerticaleMedia.parameters = {
  ...EsempioVerticaleMedia.parameters,
  docs: {
    ...(_H = EsempioVerticaleMedia.parameters) == null ? void 0 : _H.docs,
    source: {
      originalSource: "{\n  render: () => <EsempioVerticaleMediaWithHooks />\n}",
      ...(_J = (_I = EsempioVerticaleMedia.parameters) == null ? void 0 : _I.docs) == null ? void 0 : _J.source
    }
  }
};
EsempioVerticalePiccola.parameters = {
  ...EsempioVerticalePiccola.parameters,
  docs: {
    ...(_K = EsempioVerticalePiccola.parameters) == null ? void 0 : _K.docs,
    source: {
      originalSource: "{\n  render: () => <EsempioVerticalePiccolaWithHooks />\n}",
      ...(_M = (_L = EsempioVerticalePiccola.parameters) == null ? void 0 : _L.docs) == null ? void 0 : _M.source
    }
  }
};
const __namedExportsOrder = ["Esempio", "EsempioMedium", "EsempioSmall", "EsempioWithDivider", "EsempioConBadgeGrande", "EsempioConBadgeMedio", "EsempioConBadgePiccolo", "EsempioConDropdownGrande", "EsempioConDropdownMedia", "EsempioConDropdownPiccola", "EsempioVerticaleGrande", "EsempioVerticaleMedia", "EsempioVerticalePiccola"];
const ToolbarStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Esempio,
  EsempioConBadgeGrande,
  EsempioConBadgeMedio,
  EsempioConBadgePiccolo,
  EsempioConDropdownGrande,
  EsempioConDropdownMedia,
  EsempioConDropdownPiccola,
  EsempioMedium,
  EsempioSmall,
  EsempioVerticaleGrande,
  EsempioVerticaleMedia,
  EsempioVerticalePiccola,
  EsempioWithDivider,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Esempio as E,
  ToolbarStories as T,
  EsempioMedium as a,
  EsempioSmall as b,
  EsempioWithDivider as c,
  EsempioConBadgeGrande as d,
  EsempioConBadgeMedio as e,
  EsempioConBadgePiccolo as f,
  EsempioConDropdownGrande as g,
  EsempioConDropdownMedia as h,
  EsempioConDropdownPiccola as i,
  EsempioVerticaleGrande as j,
  EsempioVerticaleMedia as k,
  EsempioVerticalePiccola as l
};
