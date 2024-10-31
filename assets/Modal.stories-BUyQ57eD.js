var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P;
import { R as React, r as reactExports } from "./index-C-_iGYWo.js";
import { P as PropTypes } from "./index-C6XlOQIa.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { e as canUseDOM, b as targetPropType, T as TransitionTimeouts, k as keyCodes, f as focusableElements, g as getTarget, h as getOriginalBodyPadding, j as conditionallyUpdateScrollbar, m as mapToCssModules, s as setScrollbarWidth, o as omit, t as tagPropType } from "./utils-BFoSoHid.js";
import { I as Icon } from "./Icon-CdS0NozM.js";
import { m as mapToCssModules$1 } from "./utils-CwYUlCuU.js";
import { B as Button } from "./Button-vuvwJGEz.js";
import { R as ReactDOM } from "./index-ClxGM1EF.js";
import { F as Fade } from "./Fade-DysH9QCn.js";
import { F as FormGroup } from "./FormGroup-Dm03kL2Q.js";
import { L as Label } from "./Label-Dgx7kIS2.js";
import { I as Input } from "./Input-3qIylNdJ.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-BcZlcF5e.js";
function _typeof$1(obj) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$1(obj);
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
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
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
function _getPrototypeOf$1(o) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf$1(o);
}
var propTypes$3 = {
  children: PropTypes.node.isRequired,
  node: PropTypes.any
};
var Portal = /* @__PURE__ */ function(_React$Component) {
  _inherits$1(Portal2, _React$Component);
  var _super = _createSuper$1(Portal2);
  function Portal2() {
    _classCallCheck$1(this, Portal2);
    return _super.apply(this, arguments);
  }
  _createClass$1(Portal2, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
    }
  }, {
    key: "render",
    value: function render() {
      if (!canUseDOM) {
        return null;
      }
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement("div");
        document.body.appendChild(this.defaultNode);
      }
      return /* @__PURE__ */ ReactDOM.createPortal(this.props.children, this.props.node || this.defaultNode);
    }
  }]);
  return Portal2;
}(React.Component);
Portal.propTypes = propTypes$3;
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
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
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
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
function noop() {
}
var FadePropTypes = PropTypes.shape(Fade.propTypes);
var propTypes$2 = {
  /** */
  autoFocus: PropTypes.bool,
  /** Add backdrop to modal */
  backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["static"])]),
  /** add custom classname to backdrop */
  backdropClassName: PropTypes.string,
  backdropTransition: FadePropTypes,
  /** Vertically center the modal */
  centered: PropTypes.bool,
  /** Add children for the modal to wrap */
  children: PropTypes.node,
  /** Add custom className for modal content */
  contentClassName: PropTypes.string,
  className: PropTypes.string,
  container: targetPropType,
  cssModule: PropTypes.object,
  external: PropTypes.node,
  /** Enable/Disable animation */
  fade: PropTypes.bool,
  /** Make the modal fullscreen */
  fullscreen: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(["sm", "md", "lg", "xl"])]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  /** The status of the modal, either open or close */
  isOpen: PropTypes.bool,
  /** Allow modal to be closed with escape key. */
  keyboard: PropTypes.bool,
  /** Identifies the element (or elements) that labels the current element. */
  labelledBy: PropTypes.string,
  modalClassName: PropTypes.string,
  modalTransition: FadePropTypes,
  /** Function to be triggered on close */
  onClosed: PropTypes.func,
  /** Function to be triggered on enter */
  onEnter: PropTypes.func,
  /** Function to be triggered on exit */
  onExit: PropTypes.func,
  /** Function to be triggered on open */
  onOpened: PropTypes.func,
  /** Returns focus to the element that triggered opening of the modal */
  returnFocusAfterClose: PropTypes.bool,
  /** Accessibility role */
  role: PropTypes.string,
  /** Make the modal scrollable */
  scrollable: PropTypes.bool,
  /** Two optional sizes `lg` and `sm` */
  size: PropTypes.string,
  /** Function to toggle modal visibility */
  toggle: PropTypes.func,
  trapFocus: PropTypes.bool,
  /** Unmounts the modal when modal is closed */
  unmountOnClose: PropTypes.bool,
  wrapClassName: PropTypes.string,
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
var propsToOmit = Object.keys(propTypes$2);
var defaultProps = {
  isOpen: false,
  autoFocus: true,
  centered: false,
  scrollable: false,
  role: "dialog",
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  onOpened: noop,
  onClosed: noop,
  modalTransition: {
    timeout: TransitionTimeouts.Modal
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: TransitionTimeouts.Fade
    // uses standard fade transition
  },
  unmountOnClose: true,
  returnFocusAfterClose: true,
  container: "body",
  trapFocus: false
};
var Modal$1 = /* @__PURE__ */ function(_React$Component) {
  _inherits(Modal2, _React$Component);
  var _super = _createSuper(Modal2);
  function Modal2(props) {
    var _this;
    _classCallCheck(this, Modal2);
    _this = _super.call(this, props);
    _this._element = null;
    _this._originalBodyPadding = null;
    _this.getFocusableChildren = _this.getFocusableChildren.bind(_assertThisInitialized(_this));
    _this.handleBackdropClick = _this.handleBackdropClick.bind(_assertThisInitialized(_this));
    _this.handleBackdropMouseDown = _this.handleBackdropMouseDown.bind(_assertThisInitialized(_this));
    _this.handleEscape = _this.handleEscape.bind(_assertThisInitialized(_this));
    _this.handleStaticBackdropAnimation = _this.handleStaticBackdropAnimation.bind(_assertThisInitialized(_this));
    _this.handleTab = _this.handleTab.bind(_assertThisInitialized(_this));
    _this.onOpened = _this.onOpened.bind(_assertThisInitialized(_this));
    _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
    _this.manageFocusAfterClose = _this.manageFocusAfterClose.bind(_assertThisInitialized(_this));
    _this.clearBackdropAnimationTimeout = _this.clearBackdropAnimationTimeout.bind(_assertThisInitialized(_this));
    _this.trapFocus = _this.trapFocus.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: false,
      showStaticBackdropAnimation: false
    };
    return _this;
  }
  _createClass(Modal2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props, isOpen = _this$props.isOpen, autoFocus = _this$props.autoFocus, onEnter = _this$props.onEnter;
      if (isOpen) {
        this.init();
        this.setState({
          isOpen: true
        });
        if (autoFocus) {
          this.setFocus();
        }
      }
      if (onEnter) {
        onEnter();
      }
      document.addEventListener("focus", this.trapFocus, true);
      this._isMounted = true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.isOpen && !prevProps.isOpen) {
        this.init();
        this.setState({
          isOpen: true
        });
        return;
      }
      if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
        this.setFocus();
      }
      if (this._element && prevProps.zIndex !== this.props.zIndex) {
        this._element.style.zIndex = this.props.zIndex;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearBackdropAnimationTimeout();
      if (this.props.onExit) {
        this.props.onExit();
      }
      if (this._element) {
        this.destroy();
        if (this.props.isOpen || this.state.isOpen) {
          this.close();
        }
      }
      document.removeEventListener("focus", this.trapFocus, true);
      this._isMounted = false;
    }
    // not mouseUp because scrollbar fires it, shouldn't close when user scrolls
  }, {
    key: "handleBackdropClick",
    value: function handleBackdropClick(e) {
      if (e.target === this._mouseDownElement) {
        e.stopPropagation();
        var backdrop = this._dialog ? this._dialog.parentNode : null;
        if (backdrop && e.target === backdrop && this.props.backdrop === "static") {
          this.handleStaticBackdropAnimation();
        }
        if (!this.props.isOpen || this.props.backdrop !== true) return;
        if (backdrop && e.target === backdrop && this.props.toggle) {
          this.props.toggle(e);
        }
      }
    }
  }, {
    key: "handleTab",
    value: function handleTab(e) {
      if (e.which !== 9) return;
      if (this.modalIndex < Modal2.openCount - 1) return;
      var focusableChildren = this.getFocusableChildren();
      var totalFocusable = focusableChildren.length;
      if (totalFocusable === 0) return;
      var currentFocus = this.getFocusedChild();
      var focusedIndex = 0;
      for (var i = 0; i < totalFocusable; i += 1) {
        if (focusableChildren[i] === currentFocus) {
          focusedIndex = i;
          break;
        }
      }
      if (e.shiftKey && focusedIndex === 0) {
        e.preventDefault();
        focusableChildren[totalFocusable - 1].focus();
      } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
        e.preventDefault();
        focusableChildren[0].focus();
      }
    }
  }, {
    key: "handleBackdropMouseDown",
    value: function handleBackdropMouseDown(e) {
      this._mouseDownElement = e.target;
    }
  }, {
    key: "handleEscape",
    value: function handleEscape(e) {
      if (this.props.isOpen && e.keyCode === keyCodes.esc && this.props.toggle) {
        if (this.props.keyboard) {
          e.preventDefault();
          e.stopPropagation();
          this.props.toggle(e);
        } else if (this.props.backdrop === "static") {
          e.preventDefault();
          e.stopPropagation();
          this.handleStaticBackdropAnimation();
        }
      }
    }
  }, {
    key: "handleStaticBackdropAnimation",
    value: function handleStaticBackdropAnimation() {
      var _this2 = this;
      this.clearBackdropAnimationTimeout();
      this.setState({
        showStaticBackdropAnimation: true
      });
      this._backdropAnimationTimeout = setTimeout(function() {
        _this2.setState({
          showStaticBackdropAnimation: false
        });
      }, 100);
    }
  }, {
    key: "onOpened",
    value: function onOpened(node, isAppearing) {
      this.props.onOpened();
      (this.props.modalTransition.onEntered || noop)(node, isAppearing);
    }
  }, {
    key: "onClosed",
    value: function onClosed(node) {
      var unmountOnClose = this.props.unmountOnClose;
      this.props.onClosed();
      (this.props.modalTransition.onExited || noop)(node);
      if (unmountOnClose) {
        this.destroy();
      }
      this.close();
      if (this._isMounted) {
        this.setState({
          isOpen: false
        });
      }
    }
  }, {
    key: "setFocus",
    value: function setFocus() {
      if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === "function") {
        this._dialog.parentNode.focus();
      }
    }
  }, {
    key: "getFocusableChildren",
    value: function getFocusableChildren() {
      return this._element.querySelectorAll(focusableElements.join(", "));
    }
  }, {
    key: "getFocusedChild",
    value: function getFocusedChild() {
      var currentFocus;
      var focusableChildren = this.getFocusableChildren();
      try {
        currentFocus = document.activeElement;
      } catch (err) {
        currentFocus = focusableChildren[0];
      }
      return currentFocus;
    }
  }, {
    key: "trapFocus",
    value: function trapFocus(ev) {
      if (!this.props.trapFocus) {
        return;
      }
      if (!this._element) {
        return;
      }
      if (this._dialog && this._dialog.parentNode === ev.target) {
        return;
      }
      if (this.modalIndex < Modal2.openCount - 1) {
        return;
      }
      var children = this.getFocusableChildren();
      for (var i = 0; i < children.length; i += 1) {
        if (children[i] === ev.target) return;
      }
      if (children.length > 0) {
        ev.preventDefault();
        ev.stopPropagation();
        children[0].focus();
      }
    }
  }, {
    key: "init",
    value: function init() {
      try {
        this._triggeringElement = document.activeElement;
      } catch (err) {
        this._triggeringElement = null;
      }
      if (!this._element) {
        this._element = document.createElement("div");
        this._element.setAttribute("tabindex", "-1");
        this._element.style.position = "relative";
        this._element.style.zIndex = this.props.zIndex;
        this._mountContainer = getTarget(this.props.container);
        this._mountContainer.appendChild(this._element);
      }
      this._originalBodyPadding = getOriginalBodyPadding();
      if (Modal2.openCount < 1) {
        Modal2.originalBodyOverflow = window.getComputedStyle(document.body).overflow;
      }
      conditionallyUpdateScrollbar();
      if (Modal2.openCount === 0) {
        document.body.className = classNames(document.body.className, mapToCssModules("modal-open", this.props.cssModule));
        document.body.style.overflow = "hidden";
      }
      this.modalIndex = Modal2.openCount;
      Modal2.openCount += 1;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this._element) {
        this._mountContainer.removeChild(this._element);
        this._element = null;
      }
      this.manageFocusAfterClose();
    }
  }, {
    key: "manageFocusAfterClose",
    value: function manageFocusAfterClose() {
      if (this._triggeringElement) {
        var returnFocusAfterClose = this.props.returnFocusAfterClose;
        if (this._triggeringElement.focus && returnFocusAfterClose) this._triggeringElement.focus();
        this._triggeringElement = null;
      }
    }
  }, {
    key: "close",
    value: function close() {
      if (Modal2.openCount <= 1) {
        var modalOpenClassName = mapToCssModules("modal-open", this.props.cssModule);
        var modalOpenClassNameRegex = new RegExp("(^| )".concat(modalOpenClassName, "( |$)"));
        document.body.className = document.body.className.replace(modalOpenClassNameRegex, " ").trim();
        document.body.style.overflow = Modal2.originalBodyOverflow;
      }
      this.manageFocusAfterClose();
      Modal2.openCount = Math.max(0, Modal2.openCount - 1);
      setScrollbarWidth(this._originalBodyPadding);
    }
  }, {
    key: "clearBackdropAnimationTimeout",
    value: function clearBackdropAnimationTimeout() {
      if (this._backdropAnimationTimeout) {
        clearTimeout(this._backdropAnimationTimeout);
        this._backdropAnimationTimeout = void 0;
      }
    }
  }, {
    key: "renderModalDialog",
    value: function renderModalDialog() {
      var _classNames, _this3 = this;
      var attributes = omit(this.props, propsToOmit);
      var dialogBaseClass = "modal-dialog";
      return /* @__PURE__ */ React.createElement("div", _extends$2({}, attributes, {
        className: mapToCssModules(classNames(dialogBaseClass, this.props.className, (_classNames = {}, _defineProperty(_classNames, "modal-".concat(this.props.size), this.props.size), _defineProperty(_classNames, "".concat(dialogBaseClass, "-centered"), this.props.centered), _defineProperty(_classNames, "".concat(dialogBaseClass, "-scrollable"), this.props.scrollable), _defineProperty(_classNames, "modal-fullscreen", this.props.fullscreen === true), _defineProperty(_classNames, "modal-fullscreen-".concat(this.props.fullscreen, "-down"), typeof this.props.fullscreen === "string"), _classNames)), this.props.cssModule),
        role: "document",
        ref: function ref(c) {
          _this3._dialog = c;
        }
      }), /* @__PURE__ */ React.createElement("div", {
        className: mapToCssModules(classNames("modal-content", this.props.contentClassName), this.props.cssModule)
      }, this.props.children));
    }
  }, {
    key: "render",
    value: function render() {
      var unmountOnClose = this.props.unmountOnClose;
      if (!!this._element && (this.state.isOpen || !unmountOnClose)) {
        var isModalHidden = !!this._element && !this.state.isOpen && !unmountOnClose;
        this._element.style.display = isModalHidden ? "none" : "block";
        var _this$props2 = this.props, wrapClassName = _this$props2.wrapClassName, modalClassName = _this$props2.modalClassName, backdropClassName = _this$props2.backdropClassName, cssModule = _this$props2.cssModule, isOpen = _this$props2.isOpen, backdrop = _this$props2.backdrop, role = _this$props2.role, labelledBy = _this$props2.labelledBy, external = _this$props2.external, innerRef = _this$props2.innerRef;
        var modalAttributes = {
          onClick: this.handleBackdropClick,
          onMouseDown: this.handleBackdropMouseDown,
          onKeyUp: this.handleEscape,
          onKeyDown: this.handleTab,
          style: {
            display: "block"
          },
          "aria-labelledby": labelledBy,
          "aria-modal": true,
          role,
          tabIndex: "-1"
        };
        var hasTransition = this.props.fade;
        var modalTransition = _objectSpread(_objectSpread(_objectSpread({}, Fade.defaultProps), this.props.modalTransition), {}, {
          baseClass: hasTransition ? this.props.modalTransition.baseClass : "",
          timeout: hasTransition ? this.props.modalTransition.timeout : 0
        });
        var backdropTransition = _objectSpread(_objectSpread(_objectSpread({}, Fade.defaultProps), this.props.backdropTransition), {}, {
          baseClass: hasTransition ? this.props.backdropTransition.baseClass : "",
          timeout: hasTransition ? this.props.backdropTransition.timeout : 0
        });
        var Backdrop = backdrop && (hasTransition ? /* @__PURE__ */ React.createElement(Fade, _extends$2({}, backdropTransition, {
          "in": isOpen && !!backdrop,
          cssModule,
          className: mapToCssModules(classNames("modal-backdrop", backdropClassName), cssModule)
        })) : /* @__PURE__ */ React.createElement("div", {
          className: mapToCssModules(classNames("modal-backdrop", "show", backdropClassName), cssModule)
        }));
        return /* @__PURE__ */ React.createElement(Portal, {
          node: this._element
        }, /* @__PURE__ */ React.createElement("div", {
          className: mapToCssModules(wrapClassName)
        }, /* @__PURE__ */ React.createElement(Fade, _extends$2({}, modalAttributes, modalTransition, {
          "in": isOpen,
          onEntered: this.onOpened,
          onExited: this.onClosed,
          cssModule,
          className: mapToCssModules(classNames("modal", modalClassName, this.state.showStaticBackdropAnimation && "modal-static"), cssModule),
          innerRef
        }), external, this.renderModalDialog()), Backdrop));
      }
      return null;
    }
  }]);
  return Modal2;
}(React.Component);
Modal$1.propTypes = propTypes$2;
Modal$1.defaultProps = defaultProps;
Modal$1.openCount = 0;
Modal$1.originalBodyOverflow = null;
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
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType
};
function ModalBody$1(props) {
  var className = props.className, cssModule = props.cssModule, _props$tag = props.tag, Tag = _props$tag === void 0 ? "div" : _props$tag, attributes = _objectWithoutProperties$1(props, _excluded$1);
  var classes = mapToCssModules(classNames(className, "modal-body"), cssModule);
  return /* @__PURE__ */ React.createElement(Tag, _extends$1({}, attributes, {
    className: classes
  }));
}
ModalBody$1.propTypes = propTypes$1;
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
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Set a custom element for this component */
  tag: tagPropType
};
function ModalFooter$1(props) {
  var className = props.className, cssModule = props.cssModule, _props$tag = props.tag, Tag = _props$tag === void 0 ? "div" : _props$tag, attributes = _objectWithoutProperties(props, _excluded);
  var classes = mapToCssModules(classNames(className, "modal-footer"), cssModule);
  return /* @__PURE__ */ React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}
ModalFooter$1.propTypes = propTypes;
const Modal = ({
  withIcon,
  withLinkList,
  popConfirm,
  modalClassName,
  align,
  scrollable,
  className,
  ...props
}) => {
  const isAligned = align != null && ["left", "right"].includes(align);
  const modalDialogClassnames = classNames(modalClassName, {
    "alert-modal": withIcon,
    "it-dialog-link-list": withLinkList,
    "popconfirm-modal": popConfirm,
    "it-dialog-scrollable": scrollable && isAligned
  });
  const modalClassnames = classNames(className, {
    "modal-dialog-left": align === "left",
    "modal-dialog-right": align === "right"
  });
  return /* @__PURE__ */ React.createElement(
    Modal$1,
    {
      ...props,
      scrollable: !isAligned && scrollable,
      className: modalClassnames,
      modalClassName: modalDialogClassnames
    }
  );
};
Modal.__docgenInfo = { "description": "", "methods": [], "displayName": "Modal", "props": { "isOpen": { "required": false, "tsType": { "name": "boolean" }, "description": "Indica lo stato del modale. Valore di default: undefined." }, "autoFocus": { "required": false, "tsType": { "name": "boolean" }, "description": "" }, "size": { "required": false, "tsType": { "name": "string" }, "description": "" }, "toggle": { "required": false, "tsType": { "name": "union", "raw": "React.KeyboardEventHandler<unknown> | React.MouseEventHandler<unknown>", "elements": [{ "name": "ReactKeyboardEventHandler", "raw": "React.KeyboardEventHandler<unknown>", "elements": [{ "name": "unknown" }] }, { "name": "ReactMouseEventHandler", "raw": "React.MouseEventHandler<unknown>", "elements": [{ "name": "unknown" }] }] }, "description": "Funzione da chiamare quando l'utente clicca sul backdrop. Valore di default: undefined." }, "keyboard": { "required": false, "tsType": { "name": "boolean" }, "description": "" }, "backdrop": { "required": false, "tsType": { "name": "union", "raw": "boolean | 'static'", "elements": [{ "name": "boolean" }, { "name": "literal", "value": "'static'" }] }, "description": "" }, "scrollable": { "required": false, "tsType": { "name": "boolean" }, "description": "Abilitare quando si vuole che solo il contenuto della modale sia scrollabile.\nValore di default: undefined." }, "onEnter": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "() => void", "signature": { "arguments": [], "return": { "name": "void" } } }, "description": "" }, "onExit": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "() => void", "signature": { "arguments": [], "return": { "name": "void" } } }, "description": "" }, "onOpened": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "() => void", "signature": { "arguments": [], "return": { "name": "void" } } }, "description": "" }, "onClosed": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "() => void", "signature": { "arguments": [], "return": { "name": "void" } } }, "description": "" }, "cssModule": { "required": false, "tsType": { "name": "CSSModule" }, "description": "" }, "wrapClassName": { "required": false, "tsType": { "name": "string" }, "description": "" }, "modalClassName": { "required": false, "tsType": { "name": "string" }, "description": "" }, "backdropClassName": { "required": false, "tsType": { "name": "string" }, "description": "" }, "contentClassName": { "required": false, "tsType": { "name": "string" }, "description": "" }, "zIndex": { "required": false, "tsType": { "name": "union", "raw": "number | string", "elements": [{ "name": "number" }, { "name": "string" }] }, "description": "" }, "fade": { "required": false, "tsType": { "name": "boolean" }, "description": "" }, "backdropTransition": { "required": false, "tsType": { "name": "FadeProps" }, "description": "" }, "modalTransition": { "required": false, "tsType": { "name": "FadeProps" }, "description": "" }, "centered": { "required": false, "tsType": { "name": "boolean" }, "description": "" }, "external": { "required": false, "tsType": { "name": "ReactReactNode", "raw": "React.ReactNode" }, "description": "" }, "labelledBy": { "required": false, "tsType": { "name": "string" }, "description": "" }, "unmountOnClose": { "required": false, "tsType": { "name": "boolean" }, "description": "" }, "returnFocusAfterClose": { "required": false, "tsType": { "name": "boolean" }, "description": "" }, "container": { "required": false, "tsType": { "name": "union", "raw": "string | HTMLElement | React.RefObject<HTMLElement>", "elements": [{ "name": "string" }, { "name": "HTMLElement" }, { "name": "ReactRefObject", "raw": "React.RefObject<HTMLElement>", "elements": [{ "name": "HTMLElement" }] }] }, "description": "" }, "innerRef": { "required": false, "tsType": { "name": "ReactRef", "raw": "React.Ref<HTMLElement>", "elements": [{ "name": "HTMLElement" }] }, "description": "" }, "withIcon": { "required": false, "tsType": { "name": "boolean" }, "description": "Abilitare quando si utilizza una icona nell'intestazione, al fine di formattare correttamente il modale. Valore di default: undefined." }, "withLinkList": { "required": false, "tsType": { "name": "boolean" }, "description": "Abilitare quando si utilizza una LinkList nell'intestazione, al fine di formattare correttamente il modale. Valore di default: undefined." }, "popConfirm": { "required": false, "tsType": { "name": "boolean" }, "description": "Abilitare quando si vuole mostrare un breve messaggio di conferma. Valore di default: undefined." }, "align": { "required": false, "tsType": { "name": "union", "raw": "'left' | 'right'", "elements": [{ "name": "literal", "value": "'left'" }, { "name": "literal", "value": "'right'" }] }, "description": "Abilitare quando si vuole mostrare un modale allineato a sinistra. Valore di default: undefined." } }, "composes": ["HTMLAttributes"] };
const ModalBody = (props) => /* @__PURE__ */ React.createElement(ModalBody$1, { ...props });
ModalBody.__docgenInfo = { "description": "", "methods": [], "displayName": "ModalBody", "props": { "tag": { "required": false, "tsType": { "name": "ReactElementType", "raw": "React.ElementType" }, "description": "" }, "cssModule": { "required": false, "tsType": { "name": "CSSModule" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const ModalFooter = (props) => /* @__PURE__ */ React.createElement(ModalFooter$1, { ...props });
ModalFooter.__docgenInfo = { "description": "", "methods": [], "displayName": "ModalFooter", "props": { "tag": { "required": false, "tsType": { "name": "ReactElementType", "raw": "React.ElementType" }, "description": "" }, "cssModule": { "required": false, "tsType": { "name": "CSSModule" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const ModalHeader = ({
  icon,
  className,
  children,
  toggle,
  tag: Tag = "h2",
  wrapTag: WrapTag = "div",
  closeAriaLabel = "Close",
  close,
  cssModule,
  ...props
}) => {
  const classes = mapToCssModules$1(classNames(className, "modal-header"), cssModule);
  let CloseButton;
  if (!close && toggle) {
    CloseButton = /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: toggle,
        className: mapToCssModules$1("btn-close", cssModule),
        "aria-label": closeAriaLabel
      }
    );
  }
  return /* @__PURE__ */ React.createElement(WrapTag, { ...props, className: classes }, icon != null ? /* @__PURE__ */ React.createElement(Icon, { icon }) : null, /* @__PURE__ */ React.createElement(Tag, { className: mapToCssModules$1("modal-title h5", cssModule) }, children), close || CloseButton);
};
ModalHeader.__docgenInfo = { "description": "", "methods": [], "displayName": "ModalHeader", "props": { "cssModule": { "required": false, "tsType": { "name": "CSSModule" }, "description": "" }, "tag": { "required": false, "tsType": { "name": "ReactElementType", "raw": "React.ElementType" }, "description": "Componente che conterrà il nodo titolo. Valore di default: h5", "defaultValue": { "value": "'h2'", "computed": false } }, "wrapTag": { "required": false, "tsType": { "name": "ReactElementType", "raw": "React.ElementType" }, "description": "Componente che contenitore per l'header. Valore di default: div.", "defaultValue": { "value": "'div'", "computed": false } }, "toggle": { "required": false, "tsType": { "name": "ReactMouseEventHandler", "raw": "React.MouseEventHandler<unknown>", "elements": [{ "name": "unknown" }] }, "description": "Funzione da passare al tasto di chiusura nell'intestazione. Quando questa funzione non è presente il tasto di chiusura non viene mostrato. Valore di default: undefined" }, "icon": { "required": false, "tsType": { "name": "string" }, "description": "Indica il nome dell'icona da utilizzare nel titolo." }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi da aggiungere al nodo contenitore." }, "closeAriaLabel": { "required": false, "tsType": { "name": "string" }, "description": "Utilizzato per personalizzare il messaggio peer screen reader per il bottone di chiusura del modale. Valore di default: 'Close'", "defaultValue": { "value": "'Close'", "computed": false } } }, "composes": ["HTMLAttributes"] };
const meta = {
  title: "Documentazione/Componenti/Modale",
  component: ModalBody
};
const _EsempioBase = {
  render: () => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "modal-dialog",
    role: "document"
  }, /* @__PURE__ */ React.createElement(ModalHeader, null, "Titolo della modale"), /* @__PURE__ */ React.createElement(ModalBody, null, "Il testo del corpo della modale va qui."), /* @__PURE__ */ React.createElement(ModalFooter, null, /* @__PURE__ */ React.createElement(Button, {
    color: "secondary"
  }, "Chiudi"), /* @__PURE__ */ React.createElement(Button, {
    color: "primary"
  }, "Salva le modifiche"))))
};
const ModaleBaseConBottoneChiusuraHooks = () => {
  const [isOpen, toggleModal] = reactExports.useState(false);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    onClick: () => toggleModal(!isOpen)
  }, "Mostra modale con bottone di chiusura"), /* @__PURE__ */ React.createElement(Modal, {
    isOpen,
    toggle: () => toggleModal(!isOpen),
    labelledBy: "esempio2"
  }, /* @__PURE__ */ React.createElement(ModalHeader, {
    toggle: () => toggleModal(!isOpen),
    id: "esempio2"
  }, "Titolo della modale"), /* @__PURE__ */ React.createElement(ModalBody, null, /* @__PURE__ */ React.createElement("p", null, "Woohoo, stai leggendo questo testo in una modale!")), /* @__PURE__ */ React.createElement(ModalFooter, null, /* @__PURE__ */ React.createElement(Button, {
    color: "secondary",
    onClick: () => toggleModal(!isOpen)
  }, "Chiudi"), /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    onClick: () => toggleModal(!isOpen)
  }, "Salva modifiche"))));
};
const ModaleBaseConBottoneChiusura = {
  render: () => {
    return /* @__PURE__ */ React.createElement(ModaleBaseConBottoneChiusuraHooks, null);
  },
  parameters: {
    layout: "centered",
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const ModaleBaseHooks = () => {
  const [isOpen, toggleModal] = reactExports.useState(false);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    onClick: () => toggleModal(!isOpen)
  }, "Lancia la demo della modale"), /* @__PURE__ */ React.createElement(Modal, {
    isOpen,
    toggle: () => toggleModal(!isOpen),
    labelledBy: "esempio1"
  }, /* @__PURE__ */ React.createElement(ModalHeader, {
    toggle: () => toggleModal(!isOpen),
    id: "esempio1"
  }, "Titolo della modale"), /* @__PURE__ */ React.createElement(ModalBody, null, /* @__PURE__ */ React.createElement("p", null, "Woohoo, stai leggendo questo testo in una modale!")), /* @__PURE__ */ React.createElement(ModalFooter, null, /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    onClick: () => toggleModal(!isOpen)
  }, "Salva modifiche"))));
};
const ModaleBase = {
  render: () => {
    return /* @__PURE__ */ React.createElement(ModaleBaseHooks, null);
  },
  parameters: {
    layout: "centered",
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const ModaleConIconaHooks = () => {
  const [isOpen, toggleModal] = reactExports.useState(false);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    onClick: () => toggleModal(!isOpen)
  }, "Lancia modale con icona"), /* @__PURE__ */ React.createElement(Modal, {
    isOpen,
    toggle: () => toggleModal(!isOpen),
    withIcon: true,
    labelledBy: "esempio3"
  }, /* @__PURE__ */ React.createElement(ModalHeader, {
    icon: "it-info-circle",
    id: "esempio3"
  }, "This is a notification message more long than usual"), /* @__PURE__ */ React.createElement(ModalBody, null, /* @__PURE__ */ React.createElement("p", null, "In the various types of information modal dialog, only one button to close dialog is provided.")), /* @__PURE__ */ React.createElement(ModalFooter, null, /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    onClick: () => toggleModal(!isOpen)
  }, "Ok"))));
};
const ModaleConIcona = {
  render: () => {
    return /* @__PURE__ */ React.createElement(ModaleConIconaHooks, null);
  },
  parameters: {
    layout: "centered",
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const ModaleConFormInputsHooks = () => {
  const [isOpen, toggleModal] = reactExports.useState(false);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    onClick: () => toggleModal(!isOpen)
  }, "Lancia modale con form"), /* @__PURE__ */ React.createElement(Modal, {
    isOpen,
    toggle: () => toggleModal(!isOpen),
    labelledBy: "esempio4"
  }, /* @__PURE__ */ React.createElement(ModalHeader, {
    id: "esempio4",
    toggle: () => toggleModal(!isOpen)
  }, "SCEGLI UNA OPZIONE"), /* @__PURE__ */ React.createElement(ModalBody, null, /* @__PURE__ */ React.createElement(FormGroup, {
    check: true
  }, /* @__PURE__ */ React.createElement(Input, {
    name: "gruppo1",
    type: "radio",
    id: "radio1",
    defaultChecked: true
  }), /* @__PURE__ */ React.createElement(Label, {
    check: true,
    htmlFor: "radio1"
  }, "Opzione 1")), /* @__PURE__ */ React.createElement(FormGroup, {
    check: true
  }, /* @__PURE__ */ React.createElement(Input, {
    name: "gruppo1",
    type: "radio",
    id: "radio2"
  }), /* @__PURE__ */ React.createElement(Label, {
    check: true,
    htmlFor: "radio2"
  }, "Opzione 2")), /* @__PURE__ */ React.createElement(FormGroup, {
    check: true
  }, /* @__PURE__ */ React.createElement(Input, {
    name: "gruppo1",
    type: "radio",
    id: "radio3"
  }), /* @__PURE__ */ React.createElement(Label, {
    check: true,
    htmlFor: "radio3"
  }, "Opzione 3"))), /* @__PURE__ */ React.createElement(ModalFooter, null, /* @__PURE__ */ React.createElement(Button, {
    outline: true,
    color: "primary",
    onClick: () => toggleModal(!isOpen)
  }, "Chiudi"), /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    onClick: () => toggleModal(!isOpen),
    disabled: true
  }, "Ok"))));
};
const ModaleConFormInputs = {
  render: () => {
    return /* @__PURE__ */ React.createElement(ModaleConFormInputsHooks, null);
  },
  parameters: {
    layout: "centered",
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const ModaleConLinkListHooks = () => {
  const [isOpen, toggleModal] = reactExports.useState(false);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    onClick: () => toggleModal(!isOpen)
  }, "Lancia modale con LinkList"), /* @__PURE__ */ React.createElement(Modal, {
    isOpen,
    toggle: () => toggleModal(!isOpen),
    withLinkList: true,
    labelledBy: "esempio5"
  }, /* @__PURE__ */ React.createElement(ModalHeader, {
    id: "esempio5"
  }, /* @__PURE__ */ React.createElement("span", null, "1."), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."), /* @__PURE__ */ React.createElement(ModalBody, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, {
    className: "icon-left"
  }, /* @__PURE__ */ React.createElement(Icon, {
    color: "primary",
    icon: "it-chevron-right",
    "aria-hidden": true
  }), /* @__PURE__ */ React.createElement("span", null, "Link list 1")), /* @__PURE__ */ React.createElement(LinkListItem, {
    className: "icon-left"
  }, /* @__PURE__ */ React.createElement(Icon, {
    color: "primary",
    icon: "it-chevron-right",
    "aria-hidden": true
  }), /* @__PURE__ */ React.createElement("span", null, "Link list 2")), /* @__PURE__ */ React.createElement(LinkListItem, {
    className: "icon-left"
  }, /* @__PURE__ */ React.createElement(Icon, {
    color: "primary",
    icon: "it-chevron-right",
    "aria-hidden": true
  }), /* @__PURE__ */ React.createElement("span", null, "Link list 3")))), /* @__PURE__ */ React.createElement(ModalFooter, null, /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    onClick: () => toggleModal(!isOpen)
  }, "Ok"))));
};
const ModaleConLinkList = {
  render: () => {
    return /* @__PURE__ */ React.createElement(ModaleConLinkListHooks, null);
  },
  parameters: {
    layout: "centered",
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const ModalePopConfirmHooks = () => {
  const [isOpenBase, toggleBaseModal] = reactExports.useState(false);
  const [isOpenWithHeader, toggleModalWithHeader] = reactExports.useState(false);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    onClick: () => toggleBaseModal(!isOpenBase),
    className: "me-3"
  }, "Lancia modale pop-confirm base"), /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    onClick: () => toggleModalWithHeader(!isOpenWithHeader),
    className: "me-3"
  }, "Lancia modale pop-confirm con titolo"), /* @__PURE__ */ React.createElement(Modal, {
    isOpen: isOpenBase,
    toggle: () => toggleBaseModal(!isOpenBase),
    popConfirm: true
  }, /* @__PURE__ */ React.createElement(ModalBody, null, /* @__PURE__ */ React.createElement("p", null, "Font Titillium 14px. Leading 21px.")), /* @__PURE__ */ React.createElement(ModalFooter, null, /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    onClick: () => toggleBaseModal(!isOpenBase),
    size: "sm"
  }, "Action one"), /* @__PURE__ */ React.createElement(Button, {
    color: "secondary",
    onClick: () => toggleBaseModal(!isOpenBase),
    size: "sm",
    outline: true
  }, "Action two"))), /* @__PURE__ */ React.createElement(Modal, {
    isOpen: isOpenWithHeader,
    toggle: () => toggleModalWithHeader(!isOpenWithHeader),
    popConfirm: true,
    labelledBy: "esempio6"
  }, /* @__PURE__ */ React.createElement(ModalHeader, {
    labelledBy: "esempio6"
  }, "Popconfirm header"), /* @__PURE__ */ React.createElement(ModalBody, null, /* @__PURE__ */ React.createElement("p", null, "Font Titillium 14px. Leading 21px.")), /* @__PURE__ */ React.createElement(ModalFooter, null, /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    onClick: () => toggleModalWithHeader(!isOpenWithHeader),
    size: "sm"
  }, "Action one"), /* @__PURE__ */ React.createElement(Button, {
    color: "secondary",
    onClick: () => toggleModalWithHeader(!isOpenWithHeader),
    size: "sm",
    outline: true
  }, "Action two"))));
};
const ModalePopConfirm = {
  render: () => {
    return /* @__PURE__ */ React.createElement(ModalePopConfirmHooks, null);
  },
  parameters: {
    layout: "centered",
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const ScrollDiContenutiLunghiHooks = () => {
  const [isOpen, toggleModal] = reactExports.useState(false);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    onClick: () => toggleModal(!isOpen)
  }, "Lancia la demo della modale scrollabile"), /* @__PURE__ */ React.createElement(Modal, {
    isOpen,
    toggle: () => toggleModal(!isOpen),
    labelledBy: "esempio7"
  }, /* @__PURE__ */ React.createElement(ModalHeader, {
    toggle: () => toggleModal(!isOpen),
    id: "esempio7"
  }, "Titolo della modale"), /* @__PURE__ */ React.createElement(ModalBody, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."), /* @__PURE__ */ React.createElement("p", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."), /* @__PURE__ */ React.createElement("p", null, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."), /* @__PURE__ */ React.createElement("p", null, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."), /* @__PURE__ */ React.createElement("p", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."), /* @__PURE__ */ React.createElement("p", null, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."), /* @__PURE__ */ React.createElement("p", null, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."), /* @__PURE__ */ React.createElement("p", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."), /* @__PURE__ */ React.createElement("p", null, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."), /* @__PURE__ */ React.createElement("p", null, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."), /* @__PURE__ */ React.createElement("p", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."), /* @__PURE__ */ React.createElement("p", null, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."), /* @__PURE__ */ React.createElement("p", null, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."), /* @__PURE__ */ React.createElement("p", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."), /* @__PURE__ */ React.createElement("p", null, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."), /* @__PURE__ */ React.createElement("p", null, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."), /* @__PURE__ */ React.createElement("p", null, "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."), /* @__PURE__ */ React.createElement("p", null, "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."))), /* @__PURE__ */ React.createElement(ModalFooter, null, /* @__PURE__ */ React.createElement(Button, {
    color: "secondary",
    onClick: () => toggleModal(!isOpen)
  }, "Chiudi"), /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    onClick: () => toggleModal(!isOpen)
  }, "Salva modifiche"))));
};
const ScrollDiContenutiLunghi = {
  render: () => {
    return /* @__PURE__ */ React.createElement(ScrollDiContenutiLunghiHooks, null);
  },
  parameters: {
    layout: "centered",
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const ModaleConContenutoScrollabileHooks = () => {
  const [isOpen, toggleModal] = reactExports.useState(false);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    onClick: () => toggleModal(!isOpen)
  }, "Lancia modale con contenuto scrollabile"), /* @__PURE__ */ React.createElement(Modal, {
    isOpen,
    toggle: () => toggleModal(!isOpen),
    scrollable: true,
    labelledBy: "esempio8"
  }, /* @__PURE__ */ React.createElement(ModalHeader, {
    id: "esempio8"
  }, "INTESTAZIONE MODALE"), /* @__PURE__ */ React.createElement(ModalBody, null, /* @__PURE__ */ React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")), /* @__PURE__ */ React.createElement(ModalFooter, null, /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    outline: true,
    onClick: () => toggleModal(!isOpen),
    size: "sm"
  }, "Chiudi"), /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    onClick: () => toggleModal(!isOpen),
    size: "sm"
  }, "Azione Uno"))));
};
const ModaleConContenutoScrollabile = {
  render: () => {
    return /* @__PURE__ */ React.createElement(ModaleConContenutoScrollabileHooks, null);
  },
  parameters: {
    layout: "centered",
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const CentraturaVerticaleStoryHooks = () => {
  const [isOpen, toggleModal] = reactExports.useState(false);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    onClick: () => toggleModal(!isOpen)
  }, "Lancia la demo della modale"), /* @__PURE__ */ React.createElement(Modal, {
    isOpen,
    toggle: () => toggleModal(!isOpen),
    centered: true,
    labelledBy: "esempio9"
  }, /* @__PURE__ */ React.createElement(ModalHeader, {
    toggle: () => toggleModal(!isOpen),
    id: "essempio9"
  }, "Titolo della modale"), /* @__PURE__ */ React.createElement(ModalBody, null, /* @__PURE__ */ React.createElement("p", null, "Woohoo, stai leggendo questo testo in una modale!")), /* @__PURE__ */ React.createElement(ModalFooter, null, /* @__PURE__ */ React.createElement(Button, {
    color: "secondary",
    onClick: () => toggleModal(!isOpen)
  }, "Chiudi"), /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    onClick: () => toggleModal(!isOpen)
  }, "Salva modifiche"))));
};
const _CentraturaVerticale = {
  render: () => {
    return /* @__PURE__ */ React.createElement(CentraturaVerticaleStoryHooks, null);
  },
  parameters: {
    layout: "centered",
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const AllineamentoASinistraHooks = () => {
  const [isOpen, toggleModal] = reactExports.useState(false);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    onClick: () => toggleModal(!isOpen)
  }, "Lancia la demo della modale a sinistra"), /* @__PURE__ */ React.createElement(Modal, {
    isOpen,
    toggle: () => toggleModal(!isOpen),
    align: "left",
    scrollable: true,
    labelledBy: "esempio10"
  }, /* @__PURE__ */ React.createElement(ModalHeader, {
    toggle: () => toggleModal(!isOpen),
    id: "esempio10"
  }, "This is a notification message"), /* @__PURE__ */ React.createElement(ModalBody, null, /* @__PURE__ */ React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")), /* @__PURE__ */ React.createElement(ModalFooter, null, /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    onClick: () => toggleModal(!isOpen)
  }, "Ok"))));
};
const AllineamentoASinistra = {
  render: () => {
    return /* @__PURE__ */ React.createElement(AllineamentoASinistraHooks, null);
  },
  parameters: {
    layout: "centered",
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const AllineamentoADestraHooks = () => {
  const [isOpen, toggleModal] = reactExports.useState(false);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    onClick: () => toggleModal(!isOpen)
  }, "Lancia la demo della modale a destra"), /* @__PURE__ */ React.createElement(Modal, {
    isOpen,
    toggle: () => toggleModal(!isOpen),
    align: "right",
    scrollable: true,
    labelledBy: "esempio11"
  }, /* @__PURE__ */ React.createElement(ModalHeader, {
    toggle: () => toggleModal(!isOpen),
    id: "esempio11"
  }, "This is a notification message"), /* @__PURE__ */ React.createElement(ModalBody, null, /* @__PURE__ */ React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")), /* @__PURE__ */ React.createElement(ModalFooter, null, /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    onClick: () => toggleModal(!isOpen)
  }, "Ok"))));
};
const AllineamentoADestra = {
  render: () => {
    return /* @__PURE__ */ React.createElement(AllineamentoADestraHooks, null);
  },
  parameters: {
    layout: "centered",
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const RimuovereLanimazioneHooks = () => {
  const [isOpen, toggleModal] = reactExports.useState(false);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    onClick: () => toggleModal(!isOpen)
  }, "Lancia la demo della modale"), /* @__PURE__ */ React.createElement(Modal, {
    isOpen,
    toggle: () => toggleModal(!isOpen),
    fade: false,
    labelledBy: "esempio12"
  }, /* @__PURE__ */ React.createElement(ModalHeader, {
    toggle: () => toggleModal(!isOpen),
    id: "esempio12"
  }, "Titolo della modale"), /* @__PURE__ */ React.createElement(ModalBody, null, /* @__PURE__ */ React.createElement("p", null, "Woohoo, stai leggendo questo testo in una modale!")), /* @__PURE__ */ React.createElement(ModalFooter, null, /* @__PURE__ */ React.createElement(Button, {
    color: "secondary",
    onClick: () => toggleModal(!isOpen)
  }, "Chiudi"), /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    onClick: () => toggleModal(!isOpen)
  }, "Salva modifiche"))));
};
const RimuovereLanimazione = {
  render: () => {
    return /* @__PURE__ */ React.createElement(RimuovereLanimazioneHooks, null);
  },
  parameters: {
    layout: "centered",
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const DimensioniHooks = () => {
  const [isOpen, toggleModal] = reactExports.useState(false);
  const [size, setSize] = reactExports.useState("");
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    onClick: () => {
      setSize("lg");
      toggleModal(true);
    },
    className: "me-3"
  }, "Modale grande"), /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    onClick: () => {
      setSize("sm");
      toggleModal(true);
    }
  }, "Modale piccola")), /* @__PURE__ */ React.createElement(Modal, {
    isOpen,
    toggle: () => toggleModal(!isOpen),
    size,
    labelledBy: "esempio13"
  }, /* @__PURE__ */ React.createElement(ModalHeader, {
    toggle: () => toggleModal(!isOpen),
    id: "esempio13"
  }, "Titolo della modale"), /* @__PURE__ */ React.createElement(ModalBody, null, /* @__PURE__ */ React.createElement("p", null, "Woohoo, stai leggendo questo testo in una modale!")), /* @__PURE__ */ React.createElement(ModalFooter, null, /* @__PURE__ */ React.createElement(Button, {
    color: "secondary",
    onClick: () => toggleModal(!isOpen)
  }, "Chiudi"), /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    onClick: () => toggleModal(!isOpen)
  }, "Salva modifiche"))));
};
const _Dimensioni = {
  render: () => {
    return /* @__PURE__ */ React.createElement(DimensioniHooks, null);
  },
  parameters: {
    layout: "centered",
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
_EsempioBase.parameters = {
  ..._EsempioBase.parameters,
  docs: {
    ...(_a = _EsempioBase.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  render: () => <div>\n            <div className="modal-dialog" role="document">\n                <ModalHeader>Titolo della modale</ModalHeader>\n                <ModalBody>Il testo del corpo della modale va qui.</ModalBody>\n                <ModalFooter>\n                    <Button color="secondary">Chiudi</Button>\n                    <Button color="primary">Salva le modifiche</Button>\n                </ModalFooter>\n            </div>\n        </div>\n}',
      ...(_c = (_b = _EsempioBase.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
ModaleBaseConBottoneChiusura.parameters = {
  ...ModaleBaseConBottoneChiusura.parameters,
  docs: {
    ...(_d = ModaleBaseConBottoneChiusura.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: `{
  render: () => {
    return <ModaleBaseConBottoneChiusuraHooks />;
  },
  parameters: {
    layout: 'centered',
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
}`,
      ...(_f = (_e = ModaleBaseConBottoneChiusura.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
ModaleBase.parameters = {
  ...ModaleBase.parameters,
  docs: {
    ...(_g = ModaleBase.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: `{
  render: () => {
    return <ModaleBaseHooks />;
  },
  parameters: {
    layout: 'centered',
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
}`,
      ...(_i = (_h = ModaleBase.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
ModaleConIcona.parameters = {
  ...ModaleConIcona.parameters,
  docs: {
    ...(_j = ModaleConIcona.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: `{
  render: () => {
    return <ModaleConIconaHooks />;
  },
  parameters: {
    layout: 'centered',
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
}`,
      ...(_l = (_k = ModaleConIcona.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
ModaleConFormInputs.parameters = {
  ...ModaleConFormInputs.parameters,
  docs: {
    ...(_m = ModaleConFormInputs.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: `{
  render: () => {
    return <ModaleConFormInputsHooks />;
  },
  parameters: {
    layout: 'centered',
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
}`,
      ...(_o = (_n = ModaleConFormInputs.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
ModaleConLinkList.parameters = {
  ...ModaleConLinkList.parameters,
  docs: {
    ...(_p = ModaleConLinkList.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: `{
  render: () => {
    return <ModaleConLinkListHooks />;
  },
  parameters: {
    layout: 'centered',
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
}`,
      ...(_r = (_q = ModaleConLinkList.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
ModalePopConfirm.parameters = {
  ...ModalePopConfirm.parameters,
  docs: {
    ...(_s = ModalePopConfirm.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: `{
  render: () => {
    return <ModalePopConfirmHooks />;
  },
  parameters: {
    layout: 'centered',
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
}`,
      ...(_u = (_t = ModalePopConfirm.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
ScrollDiContenutiLunghi.parameters = {
  ...ScrollDiContenutiLunghi.parameters,
  docs: {
    ...(_v = ScrollDiContenutiLunghi.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: `{
  render: () => {
    return <ScrollDiContenutiLunghiHooks />;
  },
  parameters: {
    layout: 'centered',
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
}`,
      ...(_x = (_w = ScrollDiContenutiLunghi.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
ModaleConContenutoScrollabile.parameters = {
  ...ModaleConContenutoScrollabile.parameters,
  docs: {
    ...(_y = ModaleConContenutoScrollabile.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: `{
  render: () => {
    return <ModaleConContenutoScrollabileHooks />;
  },
  parameters: {
    layout: 'centered',
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
}`,
      ...(_A = (_z = ModaleConContenutoScrollabile.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
_CentraturaVerticale.parameters = {
  ..._CentraturaVerticale.parameters,
  docs: {
    ...(_B = _CentraturaVerticale.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: `{
  render: () => {
    return <CentraturaVerticaleStoryHooks />;
  },
  parameters: {
    layout: 'centered',
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
}`,
      ...(_D = (_C = _CentraturaVerticale.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
AllineamentoASinistra.parameters = {
  ...AllineamentoASinistra.parameters,
  docs: {
    ...(_E = AllineamentoASinistra.parameters) == null ? void 0 : _E.docs,
    source: {
      originalSource: `{
  render: () => {
    return <AllineamentoASinistraHooks />;
  },
  parameters: {
    layout: 'centered',
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
}`,
      ...(_G = (_F = AllineamentoASinistra.parameters) == null ? void 0 : _F.docs) == null ? void 0 : _G.source
    }
  }
};
AllineamentoADestra.parameters = {
  ...AllineamentoADestra.parameters,
  docs: {
    ...(_H = AllineamentoADestra.parameters) == null ? void 0 : _H.docs,
    source: {
      originalSource: `{
  render: () => {
    return <AllineamentoADestraHooks />;
  },
  parameters: {
    layout: 'centered',
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
}`,
      ...(_J = (_I = AllineamentoADestra.parameters) == null ? void 0 : _I.docs) == null ? void 0 : _J.source
    }
  }
};
RimuovereLanimazione.parameters = {
  ...RimuovereLanimazione.parameters,
  docs: {
    ...(_K = RimuovereLanimazione.parameters) == null ? void 0 : _K.docs,
    source: {
      originalSource: `{
  render: () => {
    return <RimuovereLanimazioneHooks />;
  },
  parameters: {
    layout: 'centered',
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
}`,
      ...(_M = (_L = RimuovereLanimazione.parameters) == null ? void 0 : _L.docs) == null ? void 0 : _M.source
    }
  }
};
_Dimensioni.parameters = {
  ..._Dimensioni.parameters,
  docs: {
    ...(_N = _Dimensioni.parameters) == null ? void 0 : _N.docs,
    source: {
      originalSource: `{
  render: () => {
    return <DimensioniHooks />;
  },
  parameters: {
    layout: 'centered',
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
}`,
      ...(_P = (_O = _Dimensioni.parameters) == null ? void 0 : _O.docs) == null ? void 0 : _P.source
    }
  }
};
const __namedExportsOrder = ["_EsempioBase", "ModaleBaseConBottoneChiusura", "ModaleBase", "ModaleConIcona", "ModaleConFormInputs", "ModaleConLinkList", "ModalePopConfirm", "ScrollDiContenutiLunghi", "ModaleConContenutoScrollabile", "_CentraturaVerticale", "AllineamentoASinistra", "AllineamentoADestra", "RimuovereLanimazione", "_Dimensioni"];
const ModalStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AllineamentoADestra,
  AllineamentoASinistra,
  ModaleBase,
  ModaleBaseConBottoneChiusura,
  ModaleConContenutoScrollabile,
  ModaleConFormInputs,
  ModaleConIcona,
  ModaleConLinkList,
  ModalePopConfirm,
  RimuovereLanimazione,
  ScrollDiContenutiLunghi,
  _CentraturaVerticale,
  _Dimensioni,
  _EsempioBase,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  AllineamentoASinistra as A,
  ModalStories as M,
  RimuovereLanimazione as R,
  ScrollDiContenutiLunghi as S,
  _EsempioBase as _,
  ModaleBase as a,
  ModaleBaseConBottoneChiusura as b,
  ModaleConIcona as c,
  ModaleConFormInputs as d,
  ModaleConLinkList as e,
  ModalePopConfirm as f,
  ModaleConContenutoScrollabile as g,
  _CentraturaVerticale as h,
  AllineamentoADestra as i,
  _Dimensioni as j,
  Modal as k,
  ModalHeader as l,
  ModalBody as m,
  ModalFooter as n
};
