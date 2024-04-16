import { r as reactExports, R as React } from "./index-CQCy530F.js";
import { P as PropTypes } from "./index-Cas18JYw.js";
import { r as reactDomExports, R as ReactDOM } from "./index-Hv2vTVdx.js";
import { c as classNames } from "./index-CpyNLP69.js";
import { f as fromEntries, u as useIsomorphicLayoutEffect, M as ManagerReferenceNodeContext, s as setRef, a as unwrapArray } from "./utils-whDkaA-u.js";
import { g as getDefaultExportFromCjs } from "./_commonjsHelpers-LQfde5yM.js";
import { c as createPopper } from "./popper-DTKBVcSS.js";
import { t as tagPropType, c as targetPropType, D as DOMElement, g as getTarget, m as mapToCssModules, P as PopperPlacements, o as omit } from "./utils-l7qJ8bIE.js";
import { F as Fade } from "./Fade-CLeEbCSE.js";
var hasElementType = typeof Element !== "undefined";
var hasMap = typeof Map === "function";
var hasSet = typeof Set === "function";
var hasArrayBuffer = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
function equal(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a == "object" && typeof b == "object") {
    if (a.constructor !== b.constructor)
      return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!equal(a[i], b[i]))
          return false;
      return true;
    }
    var it;
    if (hasMap && a instanceof Map && b instanceof Map) {
      if (a.size !== b.size)
        return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0]))
          return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0])))
          return false;
      return true;
    }
    if (hasSet && a instanceof Set && b instanceof Set) {
      if (a.size !== b.size)
        return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0]))
          return false;
      return true;
    }
    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (a[i] !== b[i])
          return false;
      return true;
    }
    if (a.constructor === RegExp)
      return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === "function" && typeof b.valueOf === "function")
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString && typeof a.toString === "function" && typeof b.toString === "function")
      return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
        return false;
    if (hasElementType && a instanceof Element)
      return false;
    for (i = length; i-- !== 0; ) {
      if ((keys[i] === "_owner" || keys[i] === "__v" || keys[i] === "__o") && a.$$typeof) {
        continue;
      }
      if (!equal(a[keys[i]], b[keys[i]]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
}
var reactFastCompare = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message || "").match(/stack|recursion/i)) {
      console.warn("react-fast-compare cannot handle circular refs");
      return false;
    }
    throw error;
  }
};
const isEqual2 = /* @__PURE__ */ getDefaultExportFromCjs(reactFastCompare);
var EMPTY_MODIFIERS$1 = [];
var usePopper = function usePopper2(referenceElement, popperElement, options) {
  if (options === void 0) {
    options = {};
  }
  var prevOptions = reactExports.useRef(null);
  var optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || "bottom",
    strategy: options.strategy || "absolute",
    modifiers: options.modifiers || EMPTY_MODIFIERS$1
  };
  var _React$useState = reactExports.useState({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), state = _React$useState[0], setState = _React$useState[1];
  var updateStateModifier = reactExports.useMemo(function() {
    return {
      name: "updateState",
      enabled: true,
      phase: "write",
      fn: function fn(_ref) {
        var state2 = _ref.state;
        var elements = Object.keys(state2.elements);
        reactDomExports.flushSync(function() {
          setState({
            styles: fromEntries(elements.map(function(element) {
              return [element, state2.styles[element] || {}];
            })),
            attributes: fromEntries(elements.map(function(element) {
              return [element, state2.attributes[element]];
            }))
          });
        });
      },
      requires: ["computeStyles"]
    };
  }, []);
  var popperOptions = reactExports.useMemo(function() {
    var newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {
        name: "applyStyles",
        enabled: false
      }])
    };
    if (isEqual2(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    } else {
      prevOptions.current = newOptions;
      return newOptions;
    }
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
  var popperInstanceRef = reactExports.useRef();
  useIsomorphicLayoutEffect(function() {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);
  useIsomorphicLayoutEffect(function() {
    if (referenceElement == null || popperElement == null) {
      return;
    }
    var createPopper$1 = options.createPopper || createPopper;
    var popperInstance = createPopper$1(referenceElement, popperElement, popperOptions);
    popperInstanceRef.current = popperInstance;
    return function() {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
  };
};
var NOOP = function NOOP2() {
  return void 0;
};
var NOOP_PROMISE = function NOOP_PROMISE2() {
  return Promise.resolve(null);
};
var EMPTY_MODIFIERS = [];
function Popper(_ref) {
  var _ref$placement = _ref.placement, placement = _ref$placement === void 0 ? "bottom" : _ref$placement, _ref$strategy = _ref.strategy, strategy = _ref$strategy === void 0 ? "absolute" : _ref$strategy, _ref$modifiers = _ref.modifiers, modifiers = _ref$modifiers === void 0 ? EMPTY_MODIFIERS : _ref$modifiers, referenceElement = _ref.referenceElement, onFirstUpdate = _ref.onFirstUpdate, innerRef = _ref.innerRef, children = _ref.children;
  var referenceNode = reactExports.useContext(ManagerReferenceNodeContext);
  var _React$useState = reactExports.useState(null), popperElement = _React$useState[0], setPopperElement = _React$useState[1];
  var _React$useState2 = reactExports.useState(null), arrowElement = _React$useState2[0], setArrowElement = _React$useState2[1];
  reactExports.useEffect(function() {
    setRef(innerRef, popperElement);
  }, [innerRef, popperElement]);
  var options = reactExports.useMemo(function() {
    return {
      placement,
      strategy,
      onFirstUpdate,
      modifiers: [].concat(modifiers, [{
        name: "arrow",
        enabled: arrowElement != null,
        options: {
          element: arrowElement
        }
      }])
    };
  }, [placement, strategy, onFirstUpdate, modifiers, arrowElement]);
  var _usePopper = usePopper(referenceElement || referenceNode, popperElement, options), state = _usePopper.state, styles = _usePopper.styles, forceUpdate = _usePopper.forceUpdate, update = _usePopper.update;
  var childrenProps = reactExports.useMemo(function() {
    return {
      ref: setPopperElement,
      style: styles.popper,
      placement: state ? state.placement : placement,
      hasPopperEscaped: state && state.modifiersData.hide ? state.modifiersData.hide.hasPopperEscaped : null,
      isReferenceHidden: state && state.modifiersData.hide ? state.modifiersData.hide.isReferenceHidden : null,
      arrowProps: {
        style: styles.arrow,
        ref: setArrowElement
      },
      forceUpdate: forceUpdate || NOOP,
      update: update || NOOP_PROMISE
    };
  }, [setPopperElement, setArrowElement, placement, state, styles, update, forceUpdate]);
  return unwrapArray(children)(childrenProps);
}
function _typeof$1(obj) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof$1(obj);
}
var _excluded = ["cssModule", "children", "isOpen", "flip", "target", "offset", "fallbackPlacements", "placementPrefix", "arrowClassName", "hideArrow", "popperClassName", "tag", "container", "modifiers", "strategy", "boundariesElement", "onClosed", "fade", "transition", "placement"];
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
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
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
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function noop() {
}
var propTypes$1 = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  popperClassName: PropTypes.string,
  placement: PropTypes.string,
  placementPrefix: PropTypes.string,
  arrowClassName: PropTypes.string,
  hideArrow: PropTypes.bool,
  tag: tagPropType,
  isOpen: PropTypes.bool,
  cssModule: PropTypes.object,
  offset: PropTypes.arrayOf(PropTypes.number),
  fallbackPlacements: PropTypes.array,
  flip: PropTypes.bool,
  container: targetPropType,
  target: targetPropType.isRequired,
  modifiers: PropTypes.array,
  strategy: PropTypes.string,
  boundariesElement: PropTypes.oneOfType([PropTypes.string, DOMElement]),
  onClosed: PropTypes.func,
  fade: PropTypes.bool,
  transition: PropTypes.shape(Fade.propTypes)
};
var defaultProps$1 = {
  boundariesElement: "scrollParent",
  placement: "auto",
  hideArrow: false,
  isOpen: false,
  offset: [0, 0],
  flip: true,
  container: "body",
  modifiers: [],
  onClosed: noop,
  fade: true,
  transition: _objectSpread({}, Fade.defaultProps)
};
var PopperContent = /* @__PURE__ */ function(_React$Component) {
  _inherits$1(PopperContent2, _React$Component);
  var _super = _createSuper$1(PopperContent2);
  function PopperContent2(props) {
    var _this;
    _classCallCheck$1(this, PopperContent2);
    _this = _super.call(this, props);
    _this.setTargetNode = _this.setTargetNode.bind(_assertThisInitialized$1(_this));
    _this.getTargetNode = _this.getTargetNode.bind(_assertThisInitialized$1(_this));
    _this.getRef = _this.getRef.bind(_assertThisInitialized$1(_this));
    _this.onClosed = _this.onClosed.bind(_assertThisInitialized$1(_this));
    _this.state = {
      isOpen: props.isOpen
    };
    return _this;
  }
  _createClass$1(PopperContent2, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this._element && this._element.childNodes && this._element.childNodes[0] && this._element.childNodes[0].focus) {
        this._element.childNodes[0].focus();
      }
    }
  }, {
    key: "onClosed",
    value: function onClosed() {
      this.props.onClosed();
      this.setState({
        isOpen: false
      });
    }
  }, {
    key: "getTargetNode",
    value: function getTargetNode() {
      return this.targetNode;
    }
  }, {
    key: "getContainerNode",
    value: function getContainerNode() {
      return getTarget(this.props.container);
    }
  }, {
    key: "getRef",
    value: function getRef(ref) {
      this._element = ref;
    }
  }, {
    key: "setTargetNode",
    value: function setTargetNode(node) {
      this.targetNode = typeof node === "string" ? getTarget(node) : node;
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var _this$props = this.props, cssModule = _this$props.cssModule, children = _this$props.children, isOpen = _this$props.isOpen, flip = _this$props.flip;
      _this$props.target;
      var offset = _this$props.offset, fallbackPlacements = _this$props.fallbackPlacements, placementPrefix = _this$props.placementPrefix, _arrowClassName = _this$props.arrowClassName, hideArrow = _this$props.hideArrow, _popperClassName = _this$props.popperClassName, tag = _this$props.tag;
      _this$props.container;
      var modifiers = _this$props.modifiers, strategy = _this$props.strategy, boundariesElement = _this$props.boundariesElement;
      _this$props.onClosed;
      var fade = _this$props.fade, transition = _this$props.transition, placement = _this$props.placement, attrs = _objectWithoutProperties(_this$props, _excluded);
      var arrowClassName = mapToCssModules(classNames("arrow", _arrowClassName), cssModule);
      var popperClassName = mapToCssModules(classNames(_popperClassName, placementPrefix ? "".concat(placementPrefix, "-auto") : ""), this.props.cssModule);
      var modifierNames = modifiers.map(function(m) {
        return m.name;
      });
      var baseModifiers = [{
        name: "offset",
        options: {
          offset
        }
      }, {
        name: "flip",
        enabled: flip,
        options: {
          fallbackPlacements
        }
      }, {
        name: "preventOverflow",
        options: {
          boundary: boundariesElement
        }
      }].filter(function(m) {
        return !modifierNames.includes(m.name);
      });
      var extendedModifiers = [].concat(_toConsumableArray(baseModifiers), _toConsumableArray(modifiers));
      var popperTransition = _objectSpread(_objectSpread(_objectSpread({}, Fade.defaultProps), transition), {}, {
        baseClass: fade ? transition.baseClass : "",
        timeout: fade ? transition.timeout : 0
      });
      return /* @__PURE__ */ React.createElement(Fade, _extends$1({}, popperTransition, attrs, {
        "in": isOpen,
        onExited: this.onClosed,
        tag
      }), /* @__PURE__ */ React.createElement(Popper, {
        referenceElement: this.targetNode,
        modifiers: extendedModifiers,
        placement,
        strategy
      }, function(_ref) {
        var ref = _ref.ref, style = _ref.style, popperPlacement = _ref.placement, isReferenceHidden = _ref.isReferenceHidden, arrowProps = _ref.arrowProps, update = _ref.update;
        return /* @__PURE__ */ React.createElement("div", {
          ref,
          style,
          className: popperClassName,
          "data-popper-placement": popperPlacement,
          "data-popper-reference-hidden": isReferenceHidden ? "true" : void 0
        }, typeof children === "function" ? children({
          update
        }) : children, !hideArrow && /* @__PURE__ */ React.createElement("span", {
          ref: arrowProps.ref,
          className: arrowClassName,
          style: arrowProps.style
        }));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      this.setTargetNode(this.props.target);
      if (this.state.isOpen) {
        return this.props.container === "inline" ? this.renderChildren() : /* @__PURE__ */ ReactDOM.createPortal(/* @__PURE__ */ React.createElement("div", {
          ref: this.getRef
        }, this.renderChildren()), this.getContainerNode());
      }
      return null;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.isOpen && !state.isOpen) {
        return {
          isOpen: props.isOpen
        };
      }
      return null;
    }
  }]);
  return PopperContent2;
}(React.Component);
PopperContent.propTypes = propTypes$1;
PopperContent.defaultProps = defaultProps$1;
const PopperContent$1 = PopperContent;
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
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
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
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  placement: PropTypes.oneOf(PopperPlacements),
  target: targetPropType.isRequired,
  container: targetPropType,
  isOpen: PropTypes.bool,
  disabled: PropTypes.bool,
  hideArrow: PropTypes.bool,
  boundariesElement: PropTypes.oneOfType([PropTypes.string, DOMElement]),
  className: PropTypes.string,
  innerClassName: PropTypes.string,
  arrowClassName: PropTypes.string,
  popperClassName: PropTypes.string,
  cssModule: PropTypes.object,
  toggle: PropTypes.func,
  autohide: PropTypes.bool,
  placementPrefix: PropTypes.string,
  delay: PropTypes.oneOfType([PropTypes.shape({
    show: PropTypes.number,
    hide: PropTypes.number
  }), PropTypes.number]),
  modifiers: PropTypes.array,
  strategy: PropTypes.string,
  offset: PropTypes.arrayOf(PropTypes.number),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object]),
  trigger: PropTypes.string,
  fade: PropTypes.bool,
  flip: PropTypes.bool
};
var DEFAULT_DELAYS = {
  show: 0,
  hide: 50
};
var defaultProps = {
  isOpen: false,
  hideArrow: false,
  autohide: false,
  delay: DEFAULT_DELAYS,
  toggle: function toggle() {
  },
  trigger: "click",
  fade: true
};
function isInDOMSubtree(element, subtreeRoot) {
  return subtreeRoot && (element === subtreeRoot || subtreeRoot.contains(element));
}
function isInDOMSubtrees(element) {
  var subtreeRoots = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return subtreeRoots && subtreeRoots.length && subtreeRoots.filter(function(subTreeRoot) {
    return isInDOMSubtree(element, subTreeRoot);
  })[0];
}
var TooltipPopoverWrapper = /* @__PURE__ */ function(_React$Component) {
  _inherits(TooltipPopoverWrapper2, _React$Component);
  var _super = _createSuper(TooltipPopoverWrapper2);
  function TooltipPopoverWrapper2(props) {
    var _this;
    _classCallCheck(this, TooltipPopoverWrapper2);
    _this = _super.call(this, props);
    _this._targets = [];
    _this.currentTargetElement = null;
    _this.addTargetEvents = _this.addTargetEvents.bind(_assertThisInitialized(_this));
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
    _this.removeTargetEvents = _this.removeTargetEvents.bind(_assertThisInitialized(_this));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.showWithDelay = _this.showWithDelay.bind(_assertThisInitialized(_this));
    _this.hideWithDelay = _this.hideWithDelay.bind(_assertThisInitialized(_this));
    _this.onMouseOverTooltipContent = _this.onMouseOverTooltipContent.bind(_assertThisInitialized(_this));
    _this.onMouseLeaveTooltipContent = _this.onMouseLeaveTooltipContent.bind(_assertThisInitialized(_this));
    _this.show = _this.show.bind(_assertThisInitialized(_this));
    _this.hide = _this.hide.bind(_assertThisInitialized(_this));
    _this.onEscKeyDown = _this.onEscKeyDown.bind(_assertThisInitialized(_this));
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: props.isOpen
    };
    _this._isMounted = false;
    return _this;
  }
  _createClass(TooltipPopoverWrapper2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
      this.updateTarget();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
      this.removeTargetEvents();
      this._targets = null;
      this.clearShowTimeout();
      this.clearHideTimeout();
    }
  }, {
    key: "handleDocumentClick",
    value: function handleDocumentClick(e) {
      var triggers = this.props.trigger.split(" ");
      if (triggers.indexOf("legacy") > -1 && (this.props.isOpen || isInDOMSubtrees(e.target, this._targets))) {
        if (this._hideTimeout) {
          this.clearHideTimeout();
        }
        if (this.props.isOpen && !isInDOMSubtree(e.target, this._popover)) {
          this.hideWithDelay(e);
        } else if (!this.props.isOpen) {
          this.showWithDelay(e);
        }
      } else if (triggers.indexOf("click") > -1 && isInDOMSubtrees(e.target, this._targets)) {
        if (this._hideTimeout) {
          this.clearHideTimeout();
        }
        if (!this.props.isOpen) {
          this.showWithDelay(e);
        } else {
          this.hideWithDelay(e);
        }
      }
    }
  }, {
    key: "onMouseOverTooltipContent",
    value: function onMouseOverTooltipContent() {
      if (this.props.trigger.indexOf("hover") > -1 && !this.props.autohide) {
        if (this._hideTimeout) {
          this.clearHideTimeout();
        }
        if (this.state.isOpen && !this.props.isOpen) {
          this.toggle();
        }
      }
    }
  }, {
    key: "onMouseLeaveTooltipContent",
    value: function onMouseLeaveTooltipContent(e) {
      if (this.props.trigger.indexOf("hover") > -1 && !this.props.autohide) {
        if (this._showTimeout) {
          this.clearShowTimeout();
        }
        e.persist();
        this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay("hide"));
      }
    }
  }, {
    key: "onEscKeyDown",
    value: function onEscKeyDown(e) {
      if (e.key === "Escape") {
        this.hide(e);
      }
    }
  }, {
    key: "getRef",
    value: function getRef(ref) {
      var innerRef = this.props.innerRef;
      if (innerRef) {
        if (typeof innerRef === "function") {
          innerRef(ref);
        } else if (_typeof(innerRef) === "object") {
          innerRef.current = ref;
        }
      }
      this._popover = ref;
    }
  }, {
    key: "getDelay",
    value: function getDelay(key) {
      var delay = this.props.delay;
      if (_typeof(delay) === "object") {
        return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
      }
      return delay;
    }
  }, {
    key: "getCurrentTarget",
    value: function getCurrentTarget(target) {
      if (!target)
        return null;
      var index = this._targets.indexOf(target);
      if (index >= 0)
        return this._targets[index];
      return this.getCurrentTarget(target.parentElement);
    }
  }, {
    key: "show",
    value: function show(e) {
      if (!this.props.isOpen) {
        this.clearShowTimeout();
        this.currentTargetElement = e ? e.currentTarget || this.getCurrentTarget(e.target) : null;
        if (e && e.composedPath && typeof e.composedPath === "function") {
          var path = e.composedPath();
          this.currentTargetElement = path && path[0] || this.currentTargetElement;
        }
        this.toggle(e);
      }
    }
  }, {
    key: "showWithDelay",
    value: function showWithDelay(e) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }
      this._showTimeout = setTimeout(this.show.bind(this, e), this.getDelay("show"));
    }
  }, {
    key: "hide",
    value: function hide(e) {
      if (this.props.isOpen) {
        this.clearHideTimeout();
        this.currentTargetElement = null;
        this.toggle(e);
      }
    }
  }, {
    key: "hideWithDelay",
    value: function hideWithDelay(e) {
      if (this._showTimeout) {
        this.clearShowTimeout();
      }
      this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay("hide"));
    }
  }, {
    key: "clearShowTimeout",
    value: function clearShowTimeout() {
      clearTimeout(this._showTimeout);
      this._showTimeout = void 0;
    }
  }, {
    key: "clearHideTimeout",
    value: function clearHideTimeout() {
      clearTimeout(this._hideTimeout);
      this._hideTimeout = void 0;
    }
  }, {
    key: "addEventOnTargets",
    value: function addEventOnTargets(type, handler, isBubble) {
      this._targets.forEach(function(target) {
        target.addEventListener(type, handler, isBubble);
      });
    }
  }, {
    key: "removeEventOnTargets",
    value: function removeEventOnTargets(type, handler, isBubble) {
      this._targets.forEach(function(target) {
        target.removeEventListener(type, handler, isBubble);
      });
    }
  }, {
    key: "addTargetEvents",
    value: function addTargetEvents() {
      if (this.props.trigger) {
        var triggers = this.props.trigger.split(" ");
        if (triggers.indexOf("manual") === -1) {
          if (triggers.indexOf("click") > -1 || triggers.indexOf("legacy") > -1) {
            document.addEventListener("click", this.handleDocumentClick, true);
          }
          if (this._targets && this._targets.length) {
            if (triggers.indexOf("hover") > -1) {
              this.addEventOnTargets("mouseover", this.showWithDelay, true);
              this.addEventOnTargets("mouseout", this.hideWithDelay, true);
            }
            if (triggers.indexOf("focus") > -1) {
              this.addEventOnTargets("focusin", this.show, true);
              this.addEventOnTargets("focusout", this.hide, true);
            }
            this.addEventOnTargets("keydown", this.onEscKeyDown, true);
          }
        }
      }
    }
  }, {
    key: "removeTargetEvents",
    value: function removeTargetEvents() {
      if (this._targets) {
        this.removeEventOnTargets("mouseover", this.showWithDelay, true);
        this.removeEventOnTargets("mouseout", this.hideWithDelay, true);
        this.removeEventOnTargets("keydown", this.onEscKeyDown, true);
        this.removeEventOnTargets("focusin", this.show, true);
        this.removeEventOnTargets("focusout", this.hide, true);
      }
      document.removeEventListener("click", this.handleDocumentClick, true);
    }
  }, {
    key: "updateTarget",
    value: function updateTarget() {
      var newTarget = getTarget(this.props.target, true);
      if (newTarget !== this._targets) {
        this.removeTargetEvents();
        this._targets = newTarget ? Array.from(newTarget) : [];
        this.currentTargetElement = this.currentTargetElement || this._targets[0];
        this.addTargetEvents();
      }
    }
  }, {
    key: "toggle",
    value: function toggle2(e) {
      if (this.props.disabled || !this._isMounted) {
        return e && e.preventDefault();
      }
      return this.props.toggle(e);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      if (this.props.isOpen) {
        this.updateTarget();
      }
      var target = this.currentTargetElement || this._targets[0];
      if (!target) {
        return null;
      }
      var _this$props = this.props, className = _this$props.className, cssModule = _this$props.cssModule, innerClassName = _this$props.innerClassName, isOpen = _this$props.isOpen, hideArrow = _this$props.hideArrow, boundariesElement = _this$props.boundariesElement, placement = _this$props.placement, placementPrefix = _this$props.placementPrefix, arrowClassName = _this$props.arrowClassName, popperClassName = _this$props.popperClassName, container = _this$props.container, modifiers = _this$props.modifiers, strategy = _this$props.strategy, offset = _this$props.offset, fade = _this$props.fade, flip = _this$props.flip, children = _this$props.children;
      var attributes = omit(this.props, Object.keys(propTypes));
      var popperClasses = mapToCssModules(popperClassName, cssModule);
      var classes = mapToCssModules(innerClassName, cssModule);
      return /* @__PURE__ */ React.createElement(PopperContent$1, {
        className,
        target,
        isOpen,
        hideArrow,
        boundariesElement,
        placement,
        placementPrefix,
        arrowClassName,
        popperClassName: popperClasses,
        container,
        modifiers,
        strategy,
        offset,
        cssModule,
        fade,
        flip
      }, function(_ref) {
        var update = _ref.update;
        return /* @__PURE__ */ React.createElement("div", _extends({}, attributes, {
          ref: _this2.getRef,
          className: classes,
          role: "tooltip",
          onMouseOver: _this2.onMouseOverTooltipContent,
          onMouseLeave: _this2.onMouseLeaveTooltipContent,
          onKeyDown: _this2.onEscKeyDown
        }), typeof children === "function" ? children({
          update
        }) : children);
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      if (props.isOpen && !state.isOpen) {
        return {
          isOpen: props.isOpen
        };
      }
      return null;
    }
  }]);
  return TooltipPopoverWrapper2;
}(React.Component);
TooltipPopoverWrapper.propTypes = propTypes;
TooltipPopoverWrapper.defaultProps = defaultProps;
const TooltipPopoverWrapper$1 = TooltipPopoverWrapper;
export {
  TooltipPopoverWrapper$1 as T,
  propTypes as p
};
