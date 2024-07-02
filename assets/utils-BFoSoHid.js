import { P as PropTypes } from "./index-C6XlOQIa.js";
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
function getScrollbarWidth() {
  var scrollDiv = document.createElement("div");
  scrollDiv.style.position = "absolute";
  scrollDiv.style.top = "-9999px";
  scrollDiv.style.width = "50px";
  scrollDiv.style.height = "50px";
  scrollDiv.style.overflow = "scroll";
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}
function setScrollbarWidth(padding) {
  document.body.style.paddingRight = padding > 0 ? "".concat(padding, "px") : null;
}
function isBodyOverflowing() {
  return document.body.clientWidth < window.innerWidth;
}
function getOriginalBodyPadding() {
  var style = window.getComputedStyle(document.body, null);
  return parseInt(style && style.getPropertyValue("padding-right") || 0, 10);
}
function conditionallyUpdateScrollbar() {
  var scrollbarWidth = getScrollbarWidth();
  var fixedContent = document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0];
  var bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;
  if (isBodyOverflowing()) {
    setScrollbarWidth(bodyPadding + scrollbarWidth);
  }
}
var globalCssModule;
function mapToCssModules() {
  var className = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  var cssModule = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : globalCssModule;
  if (!cssModule) return className;
  return className.split(" ").map(function(c) {
    return cssModule[c] || c;
  }).join(" ");
}
function omit(obj, omitKeys) {
  var result = {};
  Object.keys(obj).forEach(function(key) {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}
function pick(obj, keys) {
  var pickKeys = Array.isArray(keys) ? keys : [keys];
  var length = pickKeys.length;
  var key;
  var result = {};
  while (length > 0) {
    length -= 1;
    key = pickKeys[length];
    result[key] = obj[key];
  }
  return result;
}
var warned = {};
function warnOnce(message) {
  if (!warned[message]) {
    if (typeof console !== "undefined") {
      console.error(message);
    }
    warned[message] = true;
  }
}
function deprecated(propType, explanation) {
  return function validate(props, propName, componentName) {
    if (props[propName] !== null && typeof props[propName] !== "undefined") {
      warnOnce('"'.concat(propName, '" property of "').concat(componentName, '" has been deprecated.\n').concat(explanation));
    }
    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }
    return propType.apply(void 0, [props, propName, componentName].concat(rest));
  };
}
var Element = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.Element || function() {
};
function DOMElement(props, propName, componentName) {
  if (!(props[propName] instanceof Element)) {
    return new Error("Invalid prop `" + propName + "` supplied to `" + componentName + "`. Expected prop to be an instance of Element. Validation failed.");
  }
}
var targetPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement, PropTypes.shape({
  current: PropTypes.any
})]);
var tagPropType = PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.shape({
  $$typeof: PropTypes.symbol,
  render: PropTypes.func
}), PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.shape({
  $$typeof: PropTypes.symbol,
  render: PropTypes.func
})]))]);
var TransitionTimeouts = {
  Fade: 150,
  // $transition-fade
  Collapse: 350,
  // $transition-collapse
  Modal: 300,
  // $modal-transition
  Carousel: 600,
  // $carousel-transition
  Offcanvas: 300
  // $offcanvas-transition
};
var TransitionPropTypeKeys = ["in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"];
var TransitionStatuses = {
  ENTERING: "entering",
  ENTERED: "entered",
  EXITING: "exiting",
  EXITED: "exited"
};
var keyCodes = {
  esc: 27,
  space: 32,
  enter: 13,
  tab: 9,
  up: 38,
  down: 40,
  home: 36,
  end: 35,
  n: 78,
  p: 80
};
var PopperPlacements = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"];
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function isReactRefObj(target) {
  if (target && _typeof(target) === "object") {
    return "current" in target;
  }
  return false;
}
function getTag(value) {
  if (value == null) {
    return value === void 0 ? "[object Undefined]" : "[object Null]";
  }
  return Object.prototype.toString.call(value);
}
function isObject(value) {
  var type = _typeof(value);
  return value != null && (type === "object" || type === "function");
}
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  var tag = getTag(value);
  return tag === "[object Function]" || tag === "[object AsyncFunction]" || tag === "[object GeneratorFunction]" || tag === "[object Proxy]";
}
function findDOMElements(target) {
  if (isReactRefObj(target)) {
    return target.current;
  }
  if (isFunction(target)) {
    return target();
  }
  if (typeof target === "string" && canUseDOM) {
    var selection = document.querySelectorAll(target);
    if (!selection.length) {
      selection = document.querySelectorAll("#".concat(target));
    }
    if (!selection.length) {
      throw new Error("The target '".concat(target, "' could not be identified in the dom, tip: check spelling"));
    }
    return selection;
  }
  return target;
}
function isArrayOrNodeList(els) {
  if (els === null) {
    return false;
  }
  return Array.isArray(els) || canUseDOM && typeof els.length === "number";
}
function getTarget(target, allElements) {
  var els = findDOMElements(target);
  if (allElements) {
    if (isArrayOrNodeList(els)) {
      return els;
    }
    if (els === null) {
      return [];
    }
    return [els];
  }
  if (isArrayOrNodeList(els)) {
    return els[0];
  }
  return els;
}
var focusableElements = ["a[href]", "area[href]", "input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "object", "embed", "[tabindex]:not(.modal):not(.offcanvas)", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'];
export {
  DOMElement as D,
  PopperPlacements as P,
  TransitionTimeouts as T,
  TransitionPropTypeKeys as a,
  targetPropType as b,
  TransitionStatuses as c,
  deprecated as d,
  canUseDOM as e,
  focusableElements as f,
  getTarget as g,
  getOriginalBodyPadding as h,
  isObject as i,
  conditionallyUpdateScrollbar as j,
  keyCodes as k,
  mapToCssModules as m,
  omit as o,
  pick as p,
  setScrollbarWidth as s,
  tagPropType as t,
  warnOnce as w
};
