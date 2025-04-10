var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa, _ga, _ha, _ia, _ja, _ka, _la, _ma, _na, _oa, _pa, _qa, _ra, _sa, _ta, _ua;
import { r as reactExports, e } from "./index-N7T0HPyM.js";
import { R as Row, C as Col } from "./Col-C4Vz86Og.js";
import { I as Icon } from "./Icon-D5Ay-CRR.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { _ as _extends } from "./extends-BllNL3fH.js";
import { _ as _objectWithoutPropertiesLoose$5, T as Transition, E as ENTERED, a as ENTERING } from "./Transition-l9AVs-4D.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-Dd8filLf.js";
import "./track-focus-DbJ2CO43.js";
import { h as hL } from "./index-_6PbV05F.js";
function defaultKey(key) {
  return "default" + key.charAt(0).toUpperCase() + key.substr(1);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint);
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(input);
}
function useUncontrolledProp$1(propValue, defaultValue, handler) {
  var wasPropRef = reactExports.useRef(propValue !== void 0);
  var _useState = reactExports.useState(defaultValue), stateValue = _useState[0], setState = _useState[1];
  var isProp = propValue !== void 0;
  var wasProp = wasPropRef.current;
  wasPropRef.current = isProp;
  if (!isProp && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }
  return [isProp ? propValue : stateValue, reactExports.useCallback(function(value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    if (handler) handler.apply(void 0, [value].concat(args));
    setState(value);
  }, [handler])];
}
function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function(result, fieldName) {
    var _extends2;
    var _ref = result, defaultValue = _ref[defaultKey(fieldName)], propsValue = _ref[fieldName], rest = _objectWithoutPropertiesLoose$5(_ref, [defaultKey(fieldName), fieldName].map(_toPropertyKey));
    var handlerName = config[fieldName];
    var _useUncontrolledProp = useUncontrolledProp$1(propsValue, defaultValue, props[handlerName]), value = _useUncontrolledProp[0], handler = _useUncontrolledProp[1];
    return _extends({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
  }, props);
}
const DEFAULT_BREAKPOINTS = ["xxl", "xl", "lg", "md", "sm", "xs"];
const DEFAULT_MIN_BREAKPOINT = "xs";
const ThemeContext = /* @__PURE__ */ reactExports.createContext({
  prefixes: {},
  breakpoints: DEFAULT_BREAKPOINTS,
  minBreakpoint: DEFAULT_MIN_BREAKPOINT
});
const {
  Consumer,
  Provider
} = ThemeContext;
function useBootstrapPrefix(prefix, defaultPrefix) {
  const {
    prefixes
  } = reactExports.useContext(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}
function ownerWindow(node) {
  var doc = ownerDocument(node);
  return doc && doc.defaultView || window;
}
function getComputedStyle(node, psuedoElement) {
  return ownerWindow(node).getComputedStyle(node, psuedoElement);
}
var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, "-$1").toLowerCase();
}
var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, "-ms-");
}
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}
function style(node, property) {
  var css = "";
  var transforms = "";
  if (typeof property === "string") {
    return node.style.getPropertyValue(hyphenateStyleName(property)) || getComputedStyle(node).getPropertyValue(hyphenateStyleName(property));
  }
  Object.keys(property).forEach(function(key) {
    var value = property[key];
    if (!value && value !== 0) {
      node.style.removeProperty(hyphenateStyleName(key));
    } else if (isTransform(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += hyphenateStyleName(key) + ": " + value + ";";
    }
  });
  if (transforms) {
    css += "transform: " + transforms + ";";
  }
  node.style.cssText += ";" + css;
}
function getReactVersion() {
  const parts = reactExports.version.split(".");
  return {
    major: +parts[0],
    minor: +parts[1],
    patch: +parts[2]
  };
}
function getChildRef(element) {
  if (!element || typeof element === "function") {
    return null;
  }
  const {
    major
  } = getReactVersion();
  const childRef = major >= 19 ? element.props.ref : element.ref;
  return childRef;
}
const canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var optionsSupported = false;
var onceSupported = false;
try {
  var options = {
    get passive() {
      return optionsSupported = true;
    },
    get once() {
      return onceSupported = optionsSupported = true;
    }
  };
  if (canUseDOM) {
    window.addEventListener("test", options, options);
    window.removeEventListener("test", options, true);
  }
} catch (e2) {
}
function addEventListener(node, eventName, handler, options) {
  if (options && typeof options !== "boolean" && !onceSupported) {
    var once = options.once, capture = options.capture;
    var wrappedHandler = handler;
    if (!onceSupported && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };
      handler.__once = wrappedHandler;
    }
    node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
  }
  node.addEventListener(eventName, handler, options);
}
function removeEventListener(node, eventName, handler, options) {
  var capture = options && typeof options !== "boolean" ? options.capture : options;
  node.removeEventListener(eventName, handler, capture);
  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}
function listen(node, eventName, handler, options) {
  addEventListener(node, eventName, handler, options);
  return function() {
    removeEventListener(node, eventName, handler, options);
  };
}
function triggerEvent(node, eventName, bubbles, cancelable) {
  if (cancelable === void 0) {
    cancelable = true;
  }
  if (node) {
    var event = document.createEvent("HTMLEvents");
    event.initEvent(eventName, bubbles, cancelable);
    node.dispatchEvent(event);
  }
}
function parseDuration$1(node) {
  var str = style(node, "transitionDuration") || "";
  var mult = str.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(str) * mult;
}
function emulateTransitionEnd(element, duration, padding) {
  if (padding === void 0) {
    padding = 5;
  }
  var called = false;
  var handle = setTimeout(function() {
    if (!called) triggerEvent(element, "transitionend", true);
  }, duration + padding);
  var remove = listen(element, "transitionend", function() {
    called = true;
  }, {
    once: true
  });
  return function() {
    clearTimeout(handle);
    remove();
  };
}
function transitionEnd(element, handler, duration, padding) {
  if (duration == null) duration = parseDuration$1(element) || 0;
  var removeEmulate = emulateTransitionEnd(element, duration, padding);
  var remove = listen(element, "transitionend", handler);
  return function() {
    removeEmulate();
    remove();
  };
}
function parseDuration(node, property) {
  const str = style(node, property) || "";
  const mult = str.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(str) * mult;
}
function transitionEndListener(element, handler) {
  const duration = parseDuration(element, "transitionDuration");
  const delay = parseDuration(element, "transitionDelay");
  const remove = transitionEnd(element, (e2) => {
    if (e2.target === element) {
      remove();
      handler(e2);
    }
  }, duration + delay);
}
function triggerBrowserReflow(node) {
  node.offsetHeight;
}
const toFnRef$1 = (ref) => !ref || typeof ref === "function" ? ref : (value) => {
  ref.current = value;
};
function mergeRefs$1(refA, refB) {
  const a = toFnRef$1(refA);
  const b = toFnRef$1(refB);
  return (value) => {
    if (a) a(value);
    if (b) b(value);
  };
}
function useMergedRefs$1(refA, refB) {
  return reactExports.useMemo(() => mergeRefs$1(refA, refB), [refA, refB]);
}
function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && "setState" in componentOrElement) {
    return hL.findDOMNode(componentOrElement);
  }
  return componentOrElement != null ? componentOrElement : null;
}
const TransitionWrapper = /* @__PURE__ */ e.forwardRef(({
  onEnter,
  onEntering,
  onEntered,
  onExit,
  onExiting,
  onExited,
  addEndListener,
  children,
  childRef,
  ...props
}, ref) => {
  const nodeRef = reactExports.useRef(null);
  const mergedRef = useMergedRefs$1(nodeRef, childRef);
  const attachRef = (r) => {
    mergedRef(safeFindDOMNode(r));
  };
  const normalize = (callback) => (param) => {
    if (callback && nodeRef.current) {
      callback(nodeRef.current, param);
    }
  };
  const handleEnter = reactExports.useCallback(normalize(onEnter), [onEnter]);
  const handleEntering = reactExports.useCallback(normalize(onEntering), [onEntering]);
  const handleEntered = reactExports.useCallback(normalize(onEntered), [onEntered]);
  const handleExit = reactExports.useCallback(normalize(onExit), [onExit]);
  const handleExiting = reactExports.useCallback(normalize(onExiting), [onExiting]);
  const handleExited = reactExports.useCallback(normalize(onExited), [onExited]);
  const handleAddEndListener = reactExports.useCallback(normalize(addEndListener), [addEndListener]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Transition, {
    ref,
    ...props,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    nodeRef,
    children: typeof children === "function" ? (status, innerProps) => (
      // TODO: Types for RTG missing innerProps, so need to cast.
      children(status, {
        ...innerProps,
        ref: attachRef
      })
    ) : /* @__PURE__ */ e.cloneElement(children, {
      ref: attachRef
    })
  });
});
function useCommittedRef(value) {
  const ref = reactExports.useRef(value);
  reactExports.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref;
}
function useEventCallback(fn) {
  const ref = useCommittedRef(fn);
  return reactExports.useCallback(function(...args) {
    return ref.current && ref.current(...args);
  }, [ref]);
}
const _excluded$4 = ["as", "disabled"];
function _objectWithoutPropertiesLoose$4(r, e2) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e2.indexOf(n) >= 0) continue;
    t[n] = r[n];
  }
  return t;
}
function isTrivialHref$1(href) {
  return !href || href.trim() === "#";
}
function useButtonProps({
  tagName,
  disabled,
  href,
  target,
  rel,
  role,
  onClick,
  tabIndex = 0,
  type
}) {
  if (!tagName) {
    if (href != null || target != null || rel != null) {
      tagName = "a";
    } else {
      tagName = "button";
    }
  }
  const meta2 = {
    tagName
  };
  if (tagName === "button") {
    return [{
      type: type || "button",
      disabled
    }, meta2];
  }
  const handleClick = (event) => {
    if (disabled || tagName === "a" && isTrivialHref$1(href)) {
      event.preventDefault();
    }
    if (disabled) {
      event.stopPropagation();
      return;
    }
    onClick == null ? void 0 : onClick(event);
  };
  const handleKeyDown = (event) => {
    if (event.key === " ") {
      event.preventDefault();
      handleClick(event);
    }
  };
  if (tagName === "a") {
    href || (href = "#");
    if (disabled) {
      href = void 0;
    }
  }
  return [{
    role: role != null ? role : "button",
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: void 0,
    tabIndex: disabled ? void 0 : tabIndex,
    href,
    target: tagName === "a" ? target : void 0,
    "aria-disabled": !disabled ? void 0 : disabled,
    rel: tagName === "a" ? rel : void 0,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  }, meta2];
}
const Button = /* @__PURE__ */ reactExports.forwardRef((_ref, ref) => {
  let {
    as: asProp,
    disabled
  } = _ref, props = _objectWithoutPropertiesLoose$4(_ref, _excluded$4);
  const [buttonProps, {
    tagName: Component
  }] = useButtonProps(Object.assign({
    tagName: asProp,
    disabled
  }, props));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, Object.assign({}, props, buttonProps, {
    ref
  }));
});
Button.displayName = "Button";
const _excluded$3 = ["onKeyDown"];
function _objectWithoutPropertiesLoose$3(r, e2) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e2.indexOf(n) >= 0) continue;
    t[n] = r[n];
  }
  return t;
}
function isTrivialHref(href) {
  return !href || href.trim() === "#";
}
const Anchor = /* @__PURE__ */ reactExports.forwardRef((_ref, ref) => {
  let {
    onKeyDown
  } = _ref, props = _objectWithoutPropertiesLoose$3(_ref, _excluded$3);
  const [buttonProps] = useButtonProps(Object.assign({
    tagName: "a"
  }, props));
  const handleKeyDown = useEventCallback((e2) => {
    buttonProps.onKeyDown(e2);
    onKeyDown == null ? void 0 : onKeyDown(e2);
  });
  if (isTrivialHref(props.href) || props.role === "button") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("a", Object.assign({
      ref
    }, props, buttonProps, {
      onKeyDown: handleKeyDown
    }));
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("a", Object.assign({
    ref
  }, props, {
    onKeyDown
  }));
});
Anchor.displayName = "Anchor";
const fadeStyles = {
  [ENTERING]: "show",
  [ENTERED]: "show"
};
const Fade = /* @__PURE__ */ reactExports.forwardRef(({
  className,
  children,
  transitionClasses = {},
  onEnter,
  ...rest
}, ref) => {
  const props = {
    in: false,
    timeout: 300,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    ...rest
  };
  const handleEnter = reactExports.useCallback((node, isAppearing) => {
    triggerBrowserReflow(node);
    onEnter == null || onEnter(node, isAppearing);
  }, [onEnter]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionWrapper, {
    ref,
    addEndListener: transitionEndListener,
    ...props,
    onEnter: handleEnter,
    childRef: getChildRef(children),
    children: (status, innerProps) => /* @__PURE__ */ reactExports.cloneElement(children, {
      ...innerProps,
      className: classNames("fade", className, children.props.className, fadeStyles[status], transitionClasses[status])
    })
  });
});
Fade.displayName = "Fade";
const context$1 = /* @__PURE__ */ reactExports.createContext(null);
context$1.displayName = "CardHeaderContext";
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}
function useUncontrolledProp(propValue, defaultValue, handler) {
  const wasPropRef = reactExports.useRef(propValue !== void 0);
  const [stateValue, setState] = reactExports.useState(defaultValue);
  const isProp = propValue !== void 0;
  const wasProp = wasPropRef.current;
  wasPropRef.current = isProp;
  if (!isProp && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }
  return [isProp ? propValue : stateValue, reactExports.useCallback((...args) => {
    const [value, ...rest] = args;
    let returnValue = handler == null ? void 0 : handler(value, ...rest);
    setState(value);
    return returnValue;
  }, [handler])];
}
function useForceUpdate() {
  const [, dispatch] = reactExports.useReducer((revision) => revision + 1, 0);
  return dispatch;
}
const $b5e257d569688ac6$var$defaultContext = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
};
const $b5e257d569688ac6$var$SSRContext = /* @__PURE__ */ e.createContext($b5e257d569688ac6$var$defaultContext);
const $b5e257d569688ac6$var$IsSSRContext = /* @__PURE__ */ e.createContext(false);
let $b5e257d569688ac6$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
let $b5e257d569688ac6$var$componentIds = /* @__PURE__ */ new WeakMap();
function $b5e257d569688ac6$var$useCounter(isDisabled = false) {
  let ctx = reactExports.useContext($b5e257d569688ac6$var$SSRContext);
  let ref = reactExports.useRef(null);
  if (ref.current === null && !isDisabled) {
    var _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner, _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    let currentOwner = (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === void 0 ? void 0 : (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner = _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner === void 0 ? void 0 : _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current;
    if (currentOwner) {
      let prevComponentValue = $b5e257d569688ac6$var$componentIds.get(currentOwner);
      if (prevComponentValue == null)
        $b5e257d569688ac6$var$componentIds.set(currentOwner, {
          id: ctx.current,
          state: currentOwner.memoizedState
        });
      else if (currentOwner.memoizedState !== prevComponentValue.state) {
        ctx.current = prevComponentValue.id;
        $b5e257d569688ac6$var$componentIds.delete(currentOwner);
      }
    }
    ref.current = ++ctx.current;
  }
  return ref.current;
}
function $b5e257d569688ac6$var$useLegacySSRSafeId(defaultId) {
  let ctx = reactExports.useContext($b5e257d569688ac6$var$SSRContext);
  if (ctx === $b5e257d569688ac6$var$defaultContext && !$b5e257d569688ac6$var$canUseDOM) console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let counter = $b5e257d569688ac6$var$useCounter(!!defaultId);
  let prefix = `react-aria${ctx.prefix}`;
  return defaultId || `${prefix}-${counter}`;
}
function $b5e257d569688ac6$var$useModernSSRSafeId(defaultId) {
  let id = e.useId();
  let [didSSR] = reactExports.useState($b5e257d569688ac6$export$535bd6ca7f90a273());
  let prefix = didSSR || false ? "react-aria" : `react-aria${$b5e257d569688ac6$var$defaultContext.prefix}`;
  return defaultId || `${prefix}-${id}`;
}
const $b5e257d569688ac6$export$619500959fc48b26 = typeof e["useId"] === "function" ? $b5e257d569688ac6$var$useModernSSRSafeId : $b5e257d569688ac6$var$useLegacySSRSafeId;
function $b5e257d569688ac6$var$getSnapshot() {
  return false;
}
function $b5e257d569688ac6$var$getServerSnapshot() {
  return true;
}
function $b5e257d569688ac6$var$subscribe(onStoreChange) {
  return () => {
  };
}
function $b5e257d569688ac6$export$535bd6ca7f90a273() {
  if (typeof e["useSyncExternalStore"] === "function") return e["useSyncExternalStore"]($b5e257d569688ac6$var$subscribe, $b5e257d569688ac6$var$getSnapshot, $b5e257d569688ac6$var$getServerSnapshot);
  return reactExports.useContext($b5e257d569688ac6$var$IsSSRContext);
}
const SelectableContext = /* @__PURE__ */ reactExports.createContext(null);
const makeEventKey = (eventKey, href = null) => {
  if (eventKey != null) return String(eventKey);
  return href || null;
};
const NavContext = /* @__PURE__ */ reactExports.createContext(null);
NavContext.displayName = "NavContext";
const ATTRIBUTE_PREFIX = `data-rr-ui-`;
const PROPERTY_PREFIX = `rrUi`;
function dataAttr(property) {
  return `${ATTRIBUTE_PREFIX}${property}`;
}
function dataProp(property) {
  return `${PROPERTY_PREFIX}${property}`;
}
const context = /* @__PURE__ */ reactExports.createContext(null);
context.displayName = "NavbarContext";
const toFnRef = (ref) => !ref || typeof ref === "function" ? ref : (value) => {
  ref.current = value;
};
function mergeRefs(refA, refB) {
  const a = toFnRef(refA);
  const b = toFnRef(refB);
  return (value) => {
    if (a) a(value);
    if (b) b(value);
  };
}
function useMergedRefs(refA, refB) {
  return reactExports.useMemo(() => mergeRefs(refA, refB), [refA, refB]);
}
const TabContext = /* @__PURE__ */ reactExports.createContext(null);
const _excluded$2 = ["as", "active", "eventKey"];
function _objectWithoutPropertiesLoose$2(r, e2) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e2.indexOf(n) >= 0) continue;
    t[n] = r[n];
  }
  return t;
}
function useNavItem({
  key,
  onClick,
  active,
  id,
  role,
  disabled
}) {
  const parentOnSelect = reactExports.useContext(SelectableContext);
  const navContext = reactExports.useContext(NavContext);
  const tabContext = reactExports.useContext(TabContext);
  let isActive = active;
  const props = {
    role
  };
  if (navContext) {
    if (!role && navContext.role === "tablist") props.role = "tab";
    const contextControllerId = navContext.getControllerId(key != null ? key : null);
    const contextControlledId = navContext.getControlledId(key != null ? key : null);
    props[dataAttr("event-key")] = key;
    props.id = contextControllerId || id;
    isActive = active == null && key != null ? navContext.activeKey === key : active;
    if (isActive || !(tabContext != null && tabContext.unmountOnExit) && !(tabContext != null && tabContext.mountOnEnter)) props["aria-controls"] = contextControlledId;
  }
  if (props.role === "tab") {
    props["aria-selected"] = isActive;
    if (!isActive) {
      props.tabIndex = -1;
    }
    if (disabled) {
      props.tabIndex = -1;
      props["aria-disabled"] = true;
    }
  }
  props.onClick = useEventCallback((e2) => {
    if (disabled) return;
    onClick == null ? void 0 : onClick(e2);
    if (key == null) {
      return;
    }
    if (parentOnSelect && !e2.isPropagationStopped()) {
      parentOnSelect(key, e2);
    }
  });
  return [props, {
    isActive
  }];
}
const NavItem$1 = /* @__PURE__ */ reactExports.forwardRef((_ref, ref) => {
  let {
    as: Component = Button,
    active,
    eventKey
  } = _ref, options = _objectWithoutPropertiesLoose$2(_ref, _excluded$2);
  const [props, meta2] = useNavItem(Object.assign({
    key: makeEventKey(eventKey, options.href),
    active
  }, options));
  props[dataAttr("active")] = meta2.isActive;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, Object.assign({}, options, props, {
    ref
  }));
});
NavItem$1.displayName = "NavItem";
const _excluded$1 = ["as", "onSelect", "activeKey", "role", "onKeyDown"];
function _objectWithoutPropertiesLoose$1(r, e2) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e2.indexOf(n) >= 0) continue;
    t[n] = r[n];
  }
  return t;
}
const noop = () => {
};
const EVENT_KEY_ATTR = dataAttr("event-key");
const Nav$2 = /* @__PURE__ */ reactExports.forwardRef((_ref, ref) => {
  let {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = "div",
    onSelect,
    activeKey,
    role,
    onKeyDown
  } = _ref, props = _objectWithoutPropertiesLoose$1(_ref, _excluded$1);
  const forceUpdate = useForceUpdate();
  const needsRefocusRef = reactExports.useRef(false);
  const parentOnSelect = reactExports.useContext(SelectableContext);
  const tabContext = reactExports.useContext(TabContext);
  let getControlledId, getControllerId;
  if (tabContext) {
    role = role || "tablist";
    activeKey = tabContext.activeKey;
    getControlledId = tabContext.getControlledId;
    getControllerId = tabContext.getControllerId;
  }
  const listNode = reactExports.useRef(null);
  const getNextActiveTab = (offset) => {
    const currentListNode = listNode.current;
    if (!currentListNode) return null;
    const items = qsa(currentListNode, `[${EVENT_KEY_ATTR}]:not([aria-disabled=true])`);
    const activeChild = currentListNode.querySelector("[aria-selected=true]");
    if (!activeChild || activeChild !== document.activeElement) return null;
    const index = items.indexOf(activeChild);
    if (index === -1) return null;
    let nextIndex = index + offset;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    return items[nextIndex];
  };
  const handleSelect = (key, event) => {
    if (key == null) return;
    onSelect == null ? void 0 : onSelect(key, event);
    parentOnSelect == null ? void 0 : parentOnSelect(key, event);
  };
  const handleKeyDown = (event) => {
    onKeyDown == null ? void 0 : onKeyDown(event);
    if (!tabContext) {
      return;
    }
    let nextActiveChild;
    switch (event.key) {
      case "ArrowLeft":
      case "ArrowUp":
        nextActiveChild = getNextActiveTab(-1);
        break;
      case "ArrowRight":
      case "ArrowDown":
        nextActiveChild = getNextActiveTab(1);
        break;
      default:
        return;
    }
    if (!nextActiveChild) return;
    event.preventDefault();
    handleSelect(nextActiveChild.dataset[dataProp("EventKey")] || null, event);
    needsRefocusRef.current = true;
    forceUpdate();
  };
  reactExports.useEffect(() => {
    if (listNode.current && needsRefocusRef.current) {
      const activeChild = listNode.current.querySelector(`[${EVENT_KEY_ATTR}][aria-selected=true]`);
      activeChild == null ? void 0 : activeChild.focus();
    }
    needsRefocusRef.current = false;
  });
  const mergedRef = useMergedRefs(ref, listNode);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SelectableContext.Provider, {
    value: handleSelect,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(NavContext.Provider, {
      value: {
        role,
        // used by NavLink to determine it's role
        activeKey: makeEventKey(activeKey),
        getControlledId: getControlledId || noop,
        getControllerId: getControllerId || noop
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Component, Object.assign({}, props, {
        onKeyDown: handleKeyDown,
        ref: mergedRef,
        role
      }))
    })
  });
});
Nav$2.displayName = "Nav";
const BaseNav = Object.assign(Nav$2, {
  Item: NavItem$1
});
function NoopTransition({
  children,
  in: inProp,
  onExited,
  mountOnEnter,
  unmountOnExit
}) {
  const ref = reactExports.useRef(null);
  const hasEnteredRef = reactExports.useRef(inProp);
  const handleExited = useEventCallback(onExited);
  reactExports.useEffect(() => {
    if (inProp) hasEnteredRef.current = true;
    else {
      handleExited(ref.current);
    }
  }, [inProp, handleExited]);
  const combinedRef = useMergedRefs(ref, getChildRef(children));
  const child = /* @__PURE__ */ reactExports.cloneElement(children, {
    ref: combinedRef
  });
  if (inProp) return child;
  if (unmountOnExit) {
    return null;
  }
  if (!hasEnteredRef.current && mountOnEnter) {
    return null;
  }
  return child;
}
const NavItem = /* @__PURE__ */ reactExports.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "nav-item");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {
    ref,
    className: classNames(className, bsPrefix),
    ...props
  });
});
NavItem.displayName = "NavItem";
const NavLink = /* @__PURE__ */ reactExports.forwardRef(({
  bsPrefix,
  className,
  as: Component = Anchor,
  active,
  eventKey,
  disabled = false,
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "nav-link");
  const [navItemProps, meta2] = useNavItem({
    key: makeEventKey(eventKey, props.href),
    active,
    disabled,
    ...props
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {
    ...props,
    ...navItemProps,
    ref,
    disabled,
    className: classNames(className, bsPrefix, disabled && "disabled", meta2.isActive && "active")
  });
});
NavLink.displayName = "NavLink";
const Nav = /* @__PURE__ */ reactExports.forwardRef((uncontrolledProps, ref) => {
  const {
    as = "div",
    bsPrefix: initialBsPrefix,
    variant,
    fill = false,
    justify = false,
    navbar,
    navbarScroll,
    className,
    activeKey,
    ...props
  } = useUncontrolled(uncontrolledProps, {
    activeKey: "onSelect"
  });
  const bsPrefix = useBootstrapPrefix(initialBsPrefix, "nav");
  let navbarBsPrefix;
  let cardHeaderBsPrefix;
  let isNavbar = false;
  const navbarContext = reactExports.useContext(context);
  const cardHeaderContext = reactExports.useContext(context$1);
  if (navbarContext) {
    navbarBsPrefix = navbarContext.bsPrefix;
    isNavbar = navbar == null ? true : navbar;
  } else if (cardHeaderContext) {
    ({
      cardHeaderBsPrefix
    } = cardHeaderContext);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(BaseNav, {
    as,
    ref,
    activeKey,
    className: classNames(className, {
      [bsPrefix]: !isNavbar,
      [`${navbarBsPrefix}-nav`]: isNavbar,
      [`${navbarBsPrefix}-nav-scroll`]: isNavbar && navbarScroll,
      [`${cardHeaderBsPrefix}-${variant}`]: !!cardHeaderBsPrefix,
      [`${bsPrefix}-${variant}`]: !!variant,
      [`${bsPrefix}-fill`]: fill,
      [`${bsPrefix}-justified`]: justify
    }),
    ...props
  });
});
Nav.displayName = "Nav";
const Nav$1 = Object.assign(Nav, {
  Item: NavItem,
  Link: NavLink
});
const _excluded = ["active", "eventKey", "mountOnEnter", "transition", "unmountOnExit", "role", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"], _excluded2 = ["activeKey", "getControlledId", "getControllerId"], _excluded3 = ["as"];
function _objectWithoutPropertiesLoose(r, e2) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e2.indexOf(n) >= 0) continue;
    t[n] = r[n];
  }
  return t;
}
function useTabPanel(_ref) {
  let {
    active,
    eventKey,
    mountOnEnter,
    transition,
    unmountOnExit,
    role = "tabpanel",
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited
  } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded);
  const context2 = reactExports.useContext(TabContext);
  if (!context2) return [Object.assign({}, props, {
    role
  }), {
    eventKey,
    isActive: active,
    mountOnEnter,
    transition,
    unmountOnExit,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited
  }];
  const {
    activeKey,
    getControlledId,
    getControllerId
  } = context2, rest = _objectWithoutPropertiesLoose(context2, _excluded2);
  const key = makeEventKey(eventKey);
  return [Object.assign({}, props, {
    role,
    id: getControlledId(eventKey),
    "aria-labelledby": getControllerId(eventKey)
  }), {
    eventKey,
    isActive: active == null && key != null ? makeEventKey(activeKey) === key : active,
    transition: transition || rest.transition,
    mountOnEnter: mountOnEnter != null ? mountOnEnter : rest.mountOnEnter,
    unmountOnExit: unmountOnExit != null ? unmountOnExit : rest.unmountOnExit,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited
  }];
}
const TabPanel = /* @__PURE__ */ reactExports.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  (_ref2, ref) => {
    let {
      as: Component = "div"
    } = _ref2, props = _objectWithoutPropertiesLoose(_ref2, _excluded3);
    const [tabPanelProps, {
      isActive,
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited,
      mountOnEnter,
      unmountOnExit,
      transition: Transition2 = NoopTransition
    }] = useTabPanel(props);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TabContext.Provider, {
      value: null,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectableContext.Provider, {
        value: null,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Transition2, {
          in: isActive,
          onEnter,
          onEntering,
          onEntered,
          onExit,
          onExiting,
          onExited,
          mountOnEnter,
          unmountOnExit,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Component, Object.assign({}, tabPanelProps, {
            ref,
            hidden: !isActive,
            "aria-hidden": !isActive
          }))
        })
      })
    });
  }
);
TabPanel.displayName = "TabPanel";
const Tabs = (props) => {
  const {
    id: userId,
    generateChildId: generateCustomChildId,
    onSelect: propsOnSelect,
    activeKey: propsActiveKey,
    defaultActiveKey,
    transition,
    mountOnEnter,
    unmountOnExit,
    children
  } = props;
  const [activeKey, onSelect] = useUncontrolledProp(propsActiveKey, defaultActiveKey, propsOnSelect);
  const id = $b5e257d569688ac6$export$619500959fc48b26(userId);
  const generateChildId = reactExports.useMemo(() => generateCustomChildId || ((key, type) => id ? `${id}-${type}-${key}` : null), [id, generateCustomChildId]);
  const tabContext = reactExports.useMemo(() => ({
    onSelect,
    activeKey,
    transition,
    mountOnEnter: mountOnEnter || false,
    unmountOnExit: unmountOnExit || false,
    getControlledId: (key) => generateChildId(key, "tabpane"),
    getControllerId: (key) => generateChildId(key, "tab")
  }), [onSelect, activeKey, transition, mountOnEnter, unmountOnExit, generateChildId]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TabContext.Provider, {
    value: tabContext,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectableContext.Provider, {
      value: onSelect || null,
      children
    })
  });
};
Tabs.Panel = TabPanel;
function getTabTransitionComponent(transition) {
  if (typeof transition === "boolean") {
    return transition ? Fade : NoopTransition;
  }
  return transition;
}
const TabContainer = ({
  transition,
  ...props
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(Tabs, {
  ...props,
  transition: getTabTransitionComponent(transition)
});
TabContainer.displayName = "TabContainer";
const TabContent = /* @__PURE__ */ reactExports.forwardRef(({
  className,
  bsPrefix,
  as: Component = "div",
  ...props
}, ref) => {
  bsPrefix = useBootstrapPrefix(bsPrefix, "tab-content");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {
    ref,
    className: classNames(className, bsPrefix),
    ...props
  });
});
TabContent.displayName = "TabContent";
const TabPane = /* @__PURE__ */ reactExports.forwardRef(({
  bsPrefix,
  transition,
  ...props
}, ref) => {
  const [{
    className,
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: Component = "div",
    ...rest
  }, {
    isActive,
    onEnter,
    onEntering,
    onEntered,
    onExit,
    onExiting,
    onExited,
    mountOnEnter,
    unmountOnExit,
    transition: Transition2 = Fade
  }] = useTabPanel({
    ...props,
    transition: getTabTransitionComponent(transition)
  });
  const prefix = useBootstrapPrefix(bsPrefix, "tab-pane");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TabContext.Provider, {
    value: null,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectableContext.Provider, {
      value: null,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Transition2, {
        in: isActive,
        onEnter,
        onEntering,
        onEntered,
        onExit,
        onExiting,
        onExited,
        mountOnEnter,
        unmountOnExit,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Component, {
          ...rest,
          ref,
          className: classNames(className, prefix, isActive && "active")
        })
      })
    })
  });
});
TabPane.displayName = "TabPane";
const TabNav = ({
  className,
  vertical = false,
  dark = false,
  card = false,
  tag = "ul",
  testId,
  ...attributes
}) => {
  const Tag = tag;
  const rootRef = reactExports.useRef();
  const classes = classNames(
    className,
    "nav-tabs",
    { "nav-tabs-vertical": vertical },
    { "nav-dark": dark },
    { "nav-tabs-cards": card }
  );
  let currentTabIndex = 0;
  let activeTabIndex = -1;
  const handleKeyDown = (event, disabled = false) => {
    var _a2;
    const queriedElements = (_a2 = rootRef.current) == null ? void 0 : _a2.querySelectorAll(".nav-link");
    if (queriedElements) {
      for (let i = 0; i < queriedElements.length; i++) {
        if (queriedElements[i].ariaSelected === "true") {
          activeTabIndex = i;
        }
        if (!disabled && document.activeElement === queriedElements[i]) {
          currentTabIndex = i;
        }
        queriedElements[i].ariaSelected = "false";
      }
      switch (event.key) {
        case "ArrowLeft":
        case "ArrowUp":
          event.stopPropagation();
          event.preventDefault();
          if (currentTabIndex - 1 < 0) {
            currentTabIndex = queriedElements.length;
          }
          currentTabIndex = (currentTabIndex - 1) % queriedElements.length;
          break;
        case "ArrowRight":
        case "ArrowDown":
          event.stopPropagation();
          event.preventDefault();
          currentTabIndex = (currentTabIndex + 1) % queriedElements.length;
          break;
        case "Enter":
          event.stopPropagation();
          event.preventDefault();
          queriedElements[currentTabIndex].click();
          break;
        case "Tab":
          break;
        default:
          return;
      }
      if (queriedElements[currentTabIndex].ariaDisabled === "true") {
        handleKeyDown(event, true);
      } else {
        queriedElements[currentTabIndex].focus({ preventScroll: true });
        setTimeout(() => {
          queriedElements[activeTabIndex].ariaSelected = "true";
        }, 300);
      }
    }
  };
  return /* @__PURE__ */ e.createElement(
    Nav$1,
    {
      ref: rootRef,
      as: Tag,
      className: classes,
      "data-testid": testId,
      ...attributes,
      onKeyDown: handleKeyDown
    }
  );
};
TabNav.__docgenInfo = { "description": "", "methods": [], "displayName": "TabNav", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati\n@default ul", "defaultValue": { "value": "'ul'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Tab" }, "vertical": { "required": false, "tsType": { "name": "boolean" }, "description": "Imposta l'orientameno delle tab in verticale\n@default false", "defaultValue": { "value": "false", "computed": false } }, "dark": { "required": false, "tsType": { "name": "boolean" }, "description": "Imposta la tab con sfondo scuro\n@default false", "defaultValue": { "value": "false", "computed": false } }, "card": { "required": false, "tsType": { "name": "boolean" }, "description": "Imposta la tab con design tipo card\n@default false", "defaultValue": { "value": "false", "computed": false } }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["NavProps"] };
const TabNavItem = ({ tag = "li", testId, ...attributes }) => {
  const Tag = tag;
  return /* @__PURE__ */ e.createElement(Nav$1.Item, { as: Tag, role: "presentation", "data-testid": testId, ...attributes });
};
TabNavItem.__docgenInfo = { "description": "", "methods": [], "displayName": "TabNavItem", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'li'", "computed": false } }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["NavItemProps"] };
const TabNavLink = ({ tag, testId, ...attributes }) => {
  const Tag = tag;
  return /* @__PURE__ */ e.createElement(Nav$1.Link, { as: Tag, "data-testid": testId, ...attributes });
};
TabNavLink.__docgenInfo = { "description": "", "methods": [], "displayName": "TabNavLink", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["NavLinkProps"] };
const meta = {
  title: "Documentazione/Componenti/Tab",
  component: TabNav
};
const TestualeFull = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, { className: "auto" }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, "Attivo")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, "Disattivo"))))
};
const IconaFull = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, { className: "auto" }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-link", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-calendar", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-comment", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1"))))))
};
const IconaGrandeFull = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, { className: "nav-tabs-icon-lg auto" }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { className: "icon-lg", icon: "it-link", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { className: "icon-lg", icon: "it-calendar", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { className: "icon-lg", icon: "it-comment", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { className: "icon-lg", icon: "it-close", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1"))))))
};
const TestoIconaFull = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, { className: "auto" }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-link", "aria-hidden": true }), "Tab 1")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-calendar", "aria-hidden": true }), "Tab 2")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-comment", "aria-hidden": true }), "Tab 3")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }), "Tab 4"))))
};
const Testuale = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, null, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, "Attivo")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, "Disattivo"))))
};
const Icona = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, null, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-link", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-calendar", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-comment", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1"))))))
};
const IconaGrande = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, { className: "nav-tabs-icon-lg" }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { className: "icon-lg", icon: "it-link", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { className: "icon-lg", icon: "it-calendar", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { className: "icon-lg", icon: "it-comment", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { className: "icon-lg", icon: "it-close", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1"))))))
};
const TestoIcona = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, null, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-link", "aria-hidden": true }), "Tab 1")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-calendar", "aria-hidden": true }), "Tab 2")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-comment", "aria-hidden": true }), "Tab 3")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }), "Tab 4"))))
};
const Hidescroll = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "nav-tabs-hidescroll hidescroll-ico" }, /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, { className: "auto" }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, "Attivo")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "5" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "6" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "7" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "8" }, "Link")))))
};
const TestualePannel = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, null, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, "Attivo")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, "Disattivo"))), /* @__PURE__ */ e.createElement(TabContent, null, /* @__PURE__ */ e.createElement(TabPane, { eventKey: "1", className: "p-4" }, "Contenuto 1"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "2", className: "p-4" }, "Contenuto 2"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "3", className: "p-4" }, "Contenuto 3"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "4", className: "p-4" }, "Contenuto 4")))
};
const IconaPannel = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, null, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-link", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-calendar", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-comment", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1"))))), /* @__PURE__ */ e.createElement(TabContent, null, /* @__PURE__ */ e.createElement(TabPane, { eventKey: "1", className: "p-4" }, "Contenuto 1"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "2", className: "p-4" }, "Contenuto 2"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "3", className: "p-4" }, "Contenuto 3"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "4", className: "p-4" }, "Contenuto 4")))
};
const IconaGrandePannel = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, { className: "nav-tabs-icon-lg" }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { className: "icon-lg", icon: "it-link", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { className: "icon-lg", icon: "it-calendar", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { className: "icon-lg", icon: "it-comment", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1")))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, /* @__PURE__ */ e.createElement("span", null, /* @__PURE__ */ e.createElement(Icon, { className: "icon-lg", icon: "it-close", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab titolo 1"))))), /* @__PURE__ */ e.createElement(TabContent, null, /* @__PURE__ */ e.createElement(TabPane, { eventKey: "1", className: "p-4" }, "Contenuto 1"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "2", className: "p-4" }, "Contenuto 2"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "3", className: "p-4" }, "Contenuto 3"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "4", className: "p-4" }, "Contenuto 4")))
};
const TestoIconaPannel = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, null, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-link", "aria-hidden": true }), "Tab 1")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-calendar", "aria-hidden": true }), "Tab 2")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-comment", "aria-hidden": true }), "Tab 3")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }), "Tab 4"))), /* @__PURE__ */ e.createElement(TabContent, null, /* @__PURE__ */ e.createElement(TabPane, { eventKey: "1", className: "p-4" }, "Contenuto 1"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "2", className: "p-4" }, "Contenuto 2"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "3", className: "p-4" }, "Contenuto 3"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "4", className: "p-4" }, "Contenuto 4")))
};
const TestualePannelVertical = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: 3 }, /* @__PURE__ */ e.createElement(TabNav, { vertical: true }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, "Attivo")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, "Disattivo")))), /* @__PURE__ */ e.createElement(Col, { sm: 9 }, /* @__PURE__ */ e.createElement(TabContent, null, /* @__PURE__ */ e.createElement(TabPane, { eventKey: "1", className: "p-4" }, "Contenuto 1"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "2", className: "p-4" }, "Contenuto 2"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "3", className: "p-4" }, "Contenuto 3"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "4", className: "p-4" }, "Contenuto 4")))))
};
const TestualePannelVerticalBackground = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: 3 }, /* @__PURE__ */ e.createElement(TabNav, { vertical: true, className: "nav-tabs-vertical-background" }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, "Attivo")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, "Disattivo")))), /* @__PURE__ */ e.createElement(Col, { sm: 9 }, /* @__PURE__ */ e.createElement(TabContent, null, /* @__PURE__ */ e.createElement(TabPane, { eventKey: "1", className: "p-4" }, "Contenuto 1"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "2", className: "p-4" }, "Contenuto 2"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "3", className: "p-4" }, "Contenuto 3"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "4", className: "p-4" }, "Contenuto 4")))))
};
const TestoIconaPannelVertical = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: 3 }, /* @__PURE__ */ e.createElement(TabNav, { vertical: true }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, "Tab 1", /* @__PURE__ */ e.createElement(Icon, { icon: "it-link", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, "Tab 2", /* @__PURE__ */ e.createElement(Icon, { icon: "it-calendar", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, "Tab 3", /* @__PURE__ */ e.createElement(Icon, { icon: "it-comment", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, "Tab 4", /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }))))), /* @__PURE__ */ e.createElement(Col, { sm: 9 }, /* @__PURE__ */ e.createElement(TabContent, null, /* @__PURE__ */ e.createElement(TabPane, { eventKey: "1", className: "p-4" }, "Contenuto 1"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "2", className: "p-4" }, "Contenuto 2"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "3", className: "p-4" }, "Contenuto 3"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "4", className: "p-4" }, "Contenuto 4")))))
};
const TestoPannelVertical = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: 3 }, /* @__PURE__ */ e.createElement(TabNav, { vertical: true }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1", className: "justify-content-end" }, /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab 1"), /* @__PURE__ */ e.createElement(Icon, { icon: "it-link", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2", className: "justify-content-end" }, /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab 2"), /* @__PURE__ */ e.createElement(Icon, { icon: "it-calendar", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3", className: "justify-content-end" }, /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab 3"), /* @__PURE__ */ e.createElement(Icon, { icon: "it-comment", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", className: "justify-content-end", disabled: true }, /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Tab 4"), /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }))))), /* @__PURE__ */ e.createElement(Col, { sm: 9 }, /* @__PURE__ */ e.createElement(TabContent, null, /* @__PURE__ */ e.createElement(TabPane, { eventKey: "1", className: "p-4" }, "Contenuto 1"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "2", className: "p-4" }, "Contenuto 2"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "3", className: "p-4" }, "Contenuto 3"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "4", className: "p-4" }, "Contenuto 4")))))
};
const TestualePannelReverseBottom = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement("div", { className: "d-flex flex-column-reverse" }, /* @__PURE__ */ e.createElement(TabNav, null, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, "Attivo")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, "Disattivo"))), /* @__PURE__ */ e.createElement(TabContent, null, /* @__PURE__ */ e.createElement(TabPane, { eventKey: "1", className: "p-4" }, "Contenuto 1"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "2", className: "p-4" }, "Contenuto 2"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "3", className: "p-4" }, "Contenuto 3"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "4", className: "p-4" }, "Contenuto 4"))))
};
const TestualePannelReverseRight = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(Row, { className: "flex-row-reverse" }, /* @__PURE__ */ e.createElement(Col, { xs: "6", md: "4", lg: "3" }, /* @__PURE__ */ e.createElement(TabNav, { vertical: true }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, "Attivo")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, "Disattivo")))), /* @__PURE__ */ e.createElement(Col, { xs: "6", md: "8", lg: "9" }, /* @__PURE__ */ e.createElement(TabContent, null, /* @__PURE__ */ e.createElement(TabPane, { eventKey: "1", className: "p-4" }, "Contenuto 1"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "2", className: "p-4" }, "Contenuto 2"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "3", className: "p-4" }, "Contenuto 3"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "4", className: "p-4" }, "Contenuto 4")))))
};
const TestualeFullDark = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, { dark: true, className: "auto" }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, "Attivo")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, "Disattivo"))))
};
const TestoIconaFullDark = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, { dark: true, className: "auto" }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-link", "aria-hidden": true }), "Tab 1")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-calendar", "aria-hidden": true }), "Tab 2")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-comment", "aria-hidden": true }), "Tab 3")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }), "Tab 4"))))
};
const TestoIconaPannelVerticalDark = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { sm: 3 }, /* @__PURE__ */ e.createElement(TabNav, { vertical: true, dark: true }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, "Tab 1", /* @__PURE__ */ e.createElement(Icon, { icon: "it-link", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, "Tab 2", /* @__PURE__ */ e.createElement(Icon, { icon: "it-calendar", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, "Tab 3", /* @__PURE__ */ e.createElement(Icon, { icon: "it-comment", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, "Tab 4", /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }))))), /* @__PURE__ */ e.createElement(Col, { sm: 9 }, /* @__PURE__ */ e.createElement(TabContent, null, /* @__PURE__ */ e.createElement(TabPane, { eventKey: "1", className: "p-4" }, "Contenuto 1"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "2", className: "p-4" }, "Contenuto 2"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "3", className: "p-4" }, "Contenuto 3"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "4", className: "p-4" }, "Contenuto 4")))))
};
const TestualePannelReverseRightDark = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(Row, { className: "flex-row-reverse" }, /* @__PURE__ */ e.createElement(Col, { xs: "6", md: "4", lg: "3" }, /* @__PURE__ */ e.createElement(TabNav, { vertical: true, dark: true }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-link", "aria-hidden": true }), "Tab 1")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-calendar", "aria-hidden": true }), "Tab 2")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-comment", "aria-hidden": true }), "Tab 3")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }), "Tab 4")))), /* @__PURE__ */ e.createElement(Col, { xs: "6", md: "8", lg: "9" }, /* @__PURE__ */ e.createElement(TabContent, null, /* @__PURE__ */ e.createElement(TabPane, { eventKey: "1", className: "p-4" }, "Contenuto 1"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "2", className: "p-4" }, "Contenuto 2"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "3", className: "p-4" }, "Contenuto 3"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "4", className: "p-4" }, "Contenuto 4")))))
};
const TestualePannelCard = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement(TabNav, { card: true }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, "Attivo")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, "Link")), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, "Disattivo"))), /* @__PURE__ */ e.createElement(TabContent, null, /* @__PURE__ */ e.createElement(TabPane, { eventKey: "1", className: "p-4" }, "Contenuto 1"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "2", className: "p-4" }, "Contenuto 2"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "3", className: "p-4" }, "Contenuto 3"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "4", className: "p-4" }, "Contenuto 4")))
};
const TestualePannelCardEditable = {
  render: () => /* @__PURE__ */ e.createElement(TabContainer, { defaultActiveKey: "1" }, /* @__PURE__ */ e.createElement("div", { className: "nav-tabs-wrapper" }, /* @__PURE__ */ e.createElement(TabNav, { card: true, className: "nav-tabs-editable" }, /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "1" }, "Tab 1"), /* @__PURE__ */ e.createElement("div", { className: "nav-link-close" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, " Chiudi tab 1"))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "2" }, "Tab 2"), /* @__PURE__ */ e.createElement("div", { className: "nav-link-close" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, " Chiudi tab 2"))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "3" }, "Tab 3"), /* @__PURE__ */ e.createElement("div", { className: "nav-link-close" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, " Chiudi tab 3"))), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement(TabNavLink, { eventKey: "4", disabled: true }, "Disattivo"), /* @__PURE__ */ e.createElement("div", { className: "nav-link-close disabled" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close", "aria-hidden": true }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, " Chiudi tab 4"))), /* @__PURE__ */ e.createElement("li", { className: "nav-item-filler" }), /* @__PURE__ */ e.createElement(TabNavItem, null, /* @__PURE__ */ e.createElement("a", { className: "nav-tab-add" }, /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, " Aggiungi un tab"))))), /* @__PURE__ */ e.createElement(TabContent, null, /* @__PURE__ */ e.createElement(TabPane, { eventKey: "1", className: "p-4" }, "Contenuto 1"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "2", className: "p-4" }, "Contenuto 2"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "3", className: "p-4" }, "Contenuto 3"), /* @__PURE__ */ e.createElement(TabPane, { eventKey: "4", className: "p-4" }, "Contenuto 4")))
};
TestualeFull.parameters = {
  ...TestualeFull.parameters,
  docs: {
    ...(_a = TestualeFull.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav className='auto'>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>Attivo</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>Link</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>Link</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            Disattivo\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n    </TabContainer>\n}",
      ...(_c = (_b = TestualeFull.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
IconaFull.parameters = {
  ...IconaFull.parameters,
  docs: {
    ...(_d = IconaFull.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav className='auto'>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>\n            <span>\n              <Icon icon='it-link' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>\n            <span>\n              <Icon icon='it-calendar' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>\n            <span>\n              <Icon icon='it-comment' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            <span>\n              <Icon icon='it-close' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n    </TabContainer>\n}",
      ...(_f = (_e = IconaFull.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
IconaGrandeFull.parameters = {
  ...IconaGrandeFull.parameters,
  docs: {
    ...(_g = IconaGrandeFull.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav className='nav-tabs-icon-lg auto'>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>\n            <span>\n              <Icon className='icon-lg' icon='it-link' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>\n            <span>\n              <Icon className='icon-lg' icon='it-calendar' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>\n            <span>\n              <Icon className='icon-lg' icon='it-comment' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            <span>\n              <Icon className='icon-lg' icon='it-close' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n    </TabContainer>\n}",
      ...(_i = (_h = IconaGrandeFull.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
TestoIconaFull.parameters = {
  ...TestoIconaFull.parameters,
  docs: {
    ...(_j = TestoIconaFull.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav className='auto'>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>\n            <Icon icon='it-link' aria-hidden />\n            Tab 1\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>\n            <Icon icon='it-calendar' aria-hidden />\n            Tab 2\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>\n            <Icon icon='it-comment' aria-hidden />\n            Tab 3\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            <Icon icon='it-close' aria-hidden />\n            Tab 4\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n    </TabContainer>\n}",
      ...(_l = (_k = TestoIconaFull.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Testuale.parameters = {
  ...Testuale.parameters,
  docs: {
    ...(_m = Testuale.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>Attivo</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>Link</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>Link</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            Disattivo\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n    </TabContainer>\n}",
      ...(_o = (_n = Testuale.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
Icona.parameters = {
  ...Icona.parameters,
  docs: {
    ...(_p = Icona.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>\n            <span>\n              <Icon icon='it-link' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>\n            <span>\n              <Icon icon='it-calendar' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>\n            <span>\n              <Icon icon='it-comment' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            <span>\n              <Icon icon='it-close' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n    </TabContainer>\n}",
      ...(_r = (_q = Icona.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
IconaGrande.parameters = {
  ...IconaGrande.parameters,
  docs: {
    ...(_s = IconaGrande.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav className='nav-tabs-icon-lg'>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>\n            <span>\n              <Icon className='icon-lg' icon='it-link' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>\n            <span>\n              <Icon className='icon-lg' icon='it-calendar' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>\n            <span>\n              <Icon className='icon-lg' icon='it-comment' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            <span>\n              <Icon className='icon-lg' icon='it-close' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n    </TabContainer>\n}",
      ...(_u = (_t = IconaGrande.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
TestoIcona.parameters = {
  ...TestoIcona.parameters,
  docs: {
    ...(_v = TestoIcona.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>\n            <Icon icon='it-link' aria-hidden />\n            Tab 1\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>\n            <Icon icon='it-calendar' aria-hidden />\n            Tab 2\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>\n            <Icon icon='it-comment' aria-hidden />\n            Tab 3\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            <Icon icon='it-close' aria-hidden />\n            Tab 4\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n    </TabContainer>\n}",
      ...(_x = (_w = TestoIcona.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
Hidescroll.parameters = {
  ...Hidescroll.parameters,
  docs: {
    ...(_y = Hidescroll.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: "{\n  render: () => <div className='nav-tabs-hidescroll hidescroll-ico'>\n      <TabContainer defaultActiveKey='1'>\n        <TabNav className='auto'>\n          <TabNavItem>\n            <TabNavLink eventKey='1'>Attivo</TabNavLink>\n          </TabNavItem>\n          <TabNavItem>\n            <TabNavLink eventKey='2'>Link</TabNavLink>\n          </TabNavItem>\n          <TabNavItem>\n            <TabNavLink eventKey='3'>Link</TabNavLink>\n          </TabNavItem>\n          <TabNavItem>\n            <TabNavLink eventKey='4'>Link</TabNavLink>\n          </TabNavItem>\n          <TabNavItem>\n            <TabNavLink eventKey='5'>Link</TabNavLink>\n          </TabNavItem>\n          <TabNavItem>\n            <TabNavLink eventKey='6'>Link</TabNavLink>\n          </TabNavItem>\n          <TabNavItem>\n            <TabNavLink eventKey='7'>Link</TabNavLink>\n          </TabNavItem>\n          <TabNavItem>\n            <TabNavLink eventKey='8'>Link</TabNavLink>\n          </TabNavItem>\n        </TabNav>\n      </TabContainer>\n    </div>\n}",
      ...(_A = (_z = Hidescroll.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
TestualePannel.parameters = {
  ...TestualePannel.parameters,
  docs: {
    ...(_B = TestualePannel.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>Attivo</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>Link</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>Link</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            Disattivo\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n      <TabContent>\n        <TabPane eventKey='1' className='p-4'>\n          Contenuto 1\n        </TabPane>\n        <TabPane eventKey='2' className='p-4'>\n          Contenuto 2\n        </TabPane>\n        <TabPane eventKey='3' className='p-4'>\n          Contenuto 3\n        </TabPane>\n        <TabPane eventKey='4' className='p-4'>\n          Contenuto 4\n        </TabPane>\n      </TabContent>\n    </TabContainer>\n}",
      ...(_D = (_C = TestualePannel.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
IconaPannel.parameters = {
  ...IconaPannel.parameters,
  docs: {
    ...(_E = IconaPannel.parameters) == null ? void 0 : _E.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>\n            <span>\n              <Icon icon='it-link' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>\n            <span>\n              <Icon icon='it-calendar' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>\n            <span>\n              <Icon icon='it-comment' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            <span>\n              <Icon icon='it-close' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n      <TabContent>\n        <TabPane eventKey='1' className='p-4'>\n          Contenuto 1\n        </TabPane>\n        <TabPane eventKey='2' className='p-4'>\n          Contenuto 2\n        </TabPane>\n        <TabPane eventKey='3' className='p-4'>\n          Contenuto 3\n        </TabPane>\n        <TabPane eventKey='4' className='p-4'>\n          Contenuto 4\n        </TabPane>\n      </TabContent>\n    </TabContainer>\n}",
      ...(_G = (_F = IconaPannel.parameters) == null ? void 0 : _F.docs) == null ? void 0 : _G.source
    }
  }
};
IconaGrandePannel.parameters = {
  ...IconaGrandePannel.parameters,
  docs: {
    ...(_H = IconaGrandePannel.parameters) == null ? void 0 : _H.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav className='nav-tabs-icon-lg'>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>\n            <span>\n              <Icon className='icon-lg' icon='it-link' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>\n            <span>\n              <Icon className='icon-lg' icon='it-calendar' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>\n            <span>\n              <Icon className='icon-lg' icon='it-comment' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            <span>\n              <Icon className='icon-lg' icon='it-close' aria-hidden />\n              <span className='visually-hidden'>Tab titolo 1</span>\n            </span>\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n      <TabContent>\n        <TabPane eventKey='1' className='p-4'>\n          Contenuto 1\n        </TabPane>\n        <TabPane eventKey='2' className='p-4'>\n          Contenuto 2\n        </TabPane>\n        <TabPane eventKey='3' className='p-4'>\n          Contenuto 3\n        </TabPane>\n        <TabPane eventKey='4' className='p-4'>\n          Contenuto 4\n        </TabPane>\n      </TabContent>\n    </TabContainer>\n}",
      ...(_J = (_I = IconaGrandePannel.parameters) == null ? void 0 : _I.docs) == null ? void 0 : _J.source
    }
  }
};
TestoIconaPannel.parameters = {
  ...TestoIconaPannel.parameters,
  docs: {
    ...(_K = TestoIconaPannel.parameters) == null ? void 0 : _K.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>\n            <Icon icon='it-link' aria-hidden />\n            Tab 1\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>\n            <Icon icon='it-calendar' aria-hidden />\n            Tab 2\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>\n            <Icon icon='it-comment' aria-hidden />\n            Tab 3\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            <Icon icon='it-close' aria-hidden />\n            Tab 4\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n      <TabContent>\n        <TabPane eventKey='1' className='p-4'>\n          Contenuto 1\n        </TabPane>\n        <TabPane eventKey='2' className='p-4'>\n          Contenuto 2\n        </TabPane>\n        <TabPane eventKey='3' className='p-4'>\n          Contenuto 3\n        </TabPane>\n        <TabPane eventKey='4' className='p-4'>\n          Contenuto 4\n        </TabPane>\n      </TabContent>\n    </TabContainer>\n}",
      ...(_M = (_L = TestoIconaPannel.parameters) == null ? void 0 : _L.docs) == null ? void 0 : _M.source
    }
  }
};
TestualePannelVertical.parameters = {
  ...TestualePannelVertical.parameters,
  docs: {
    ...(_N = TestualePannelVertical.parameters) == null ? void 0 : _N.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <Row>\n        <Col sm={3}>\n          <TabNav vertical>\n            <TabNavItem>\n              <TabNavLink eventKey='1'>Attivo</TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='2'>Link</TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='3'>Link</TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='4' disabled>\n                Disattivo\n              </TabNavLink>\n            </TabNavItem>\n          </TabNav>\n        </Col>\n        <Col sm={9}>\n          <TabContent>\n            <TabPane eventKey='1' className='p-4'>\n              Contenuto 1\n            </TabPane>\n            <TabPane eventKey='2' className='p-4'>\n              Contenuto 2\n            </TabPane>\n            <TabPane eventKey='3' className='p-4'>\n              Contenuto 3\n            </TabPane>\n            <TabPane eventKey='4' className='p-4'>\n              Contenuto 4\n            </TabPane>\n          </TabContent>\n        </Col>\n      </Row>\n    </TabContainer>\n}",
      ...(_P = (_O = TestualePannelVertical.parameters) == null ? void 0 : _O.docs) == null ? void 0 : _P.source
    }
  }
};
TestualePannelVerticalBackground.parameters = {
  ...TestualePannelVerticalBackground.parameters,
  docs: {
    ...(_Q = TestualePannelVerticalBackground.parameters) == null ? void 0 : _Q.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <Row>\n        <Col sm={3}>\n          <TabNav vertical className='nav-tabs-vertical-background'>\n            <TabNavItem>\n              <TabNavLink eventKey='1'>Attivo</TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='2'>Link</TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='3'>Link</TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='4' disabled>\n                Disattivo\n              </TabNavLink>\n            </TabNavItem>\n          </TabNav>\n        </Col>\n        <Col sm={9}>\n          <TabContent>\n            <TabPane eventKey='1' className='p-4'>\n              Contenuto 1\n            </TabPane>\n            <TabPane eventKey='2' className='p-4'>\n              Contenuto 2\n            </TabPane>\n            <TabPane eventKey='3' className='p-4'>\n              Contenuto 3\n            </TabPane>\n            <TabPane eventKey='4' className='p-4'>\n              Contenuto 4\n            </TabPane>\n          </TabContent>\n        </Col>\n      </Row>\n    </TabContainer>\n}",
      ...(_S = (_R = TestualePannelVerticalBackground.parameters) == null ? void 0 : _R.docs) == null ? void 0 : _S.source
    }
  }
};
TestoIconaPannelVertical.parameters = {
  ...TestoIconaPannelVertical.parameters,
  docs: {
    ...(_T = TestoIconaPannelVertical.parameters) == null ? void 0 : _T.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <Row>\n        <Col sm={3}>\n          <TabNav vertical>\n            <TabNavItem>\n              <TabNavLink eventKey='1'>\n                Tab 1\n                <Icon icon='it-link' aria-hidden />\n              </TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='2'>\n                Tab 2\n                <Icon icon='it-calendar' aria-hidden />\n              </TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='3'>\n                Tab 3\n                <Icon icon='it-comment' aria-hidden />\n              </TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='4' disabled>\n                Tab 4\n                <Icon icon='it-close' aria-hidden />\n              </TabNavLink>\n            </TabNavItem>\n          </TabNav>\n        </Col>\n        <Col sm={9}>\n          <TabContent>\n            <TabPane eventKey='1' className='p-4'>\n              Contenuto 1\n            </TabPane>\n            <TabPane eventKey='2' className='p-4'>\n              Contenuto 2\n            </TabPane>\n            <TabPane eventKey='3' className='p-4'>\n              Contenuto 3\n            </TabPane>\n            <TabPane eventKey='4' className='p-4'>\n              Contenuto 4\n            </TabPane>\n          </TabContent>\n        </Col>\n      </Row>\n    </TabContainer>\n}",
      ...(_V = (_U = TestoIconaPannelVertical.parameters) == null ? void 0 : _U.docs) == null ? void 0 : _V.source
    }
  }
};
TestoPannelVertical.parameters = {
  ...TestoPannelVertical.parameters,
  docs: {
    ...(_W = TestoPannelVertical.parameters) == null ? void 0 : _W.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <Row>\n        <Col sm={3}>\n          <TabNav vertical>\n            <TabNavItem>\n              <TabNavLink eventKey='1' className='justify-content-end'>\n                <span className='visually-hidden'>Tab 1</span>\n                <Icon icon='it-link' aria-hidden />\n              </TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='2' className='justify-content-end'>\n                <span className='visually-hidden'>Tab 2</span>\n                <Icon icon='it-calendar' aria-hidden />\n              </TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='3' className='justify-content-end'>\n                <span className='visually-hidden'>Tab 3</span>\n                <Icon icon='it-comment' aria-hidden />\n              </TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='4' className='justify-content-end' disabled>\n                <span className='visually-hidden'>Tab 4</span>\n                <Icon icon='it-close' aria-hidden />\n              </TabNavLink>\n            </TabNavItem>\n          </TabNav>\n        </Col>\n        <Col sm={9}>\n          <TabContent>\n            <TabPane eventKey='1' className='p-4'>\n              Contenuto 1\n            </TabPane>\n            <TabPane eventKey='2' className='p-4'>\n              Contenuto 2\n            </TabPane>\n            <TabPane eventKey='3' className='p-4'>\n              Contenuto 3\n            </TabPane>\n            <TabPane eventKey='4' className='p-4'>\n              Contenuto 4\n            </TabPane>\n          </TabContent>\n        </Col>\n      </Row>\n    </TabContainer>\n}",
      ...(_Y = (_X = TestoPannelVertical.parameters) == null ? void 0 : _X.docs) == null ? void 0 : _Y.source
    }
  }
};
TestualePannelReverseBottom.parameters = {
  ...TestualePannelReverseBottom.parameters,
  docs: {
    ...(_Z = TestualePannelReverseBottom.parameters) == null ? void 0 : _Z.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <div className='d-flex flex-column-reverse'>\n        <TabNav>\n          <TabNavItem>\n            <TabNavLink eventKey='1'>Attivo</TabNavLink>\n          </TabNavItem>\n          <TabNavItem>\n            <TabNavLink eventKey='2'>Link</TabNavLink>\n          </TabNavItem>\n          <TabNavItem>\n            <TabNavLink eventKey='3'>Link</TabNavLink>\n          </TabNavItem>\n          <TabNavItem>\n            <TabNavLink eventKey='4' disabled>\n              Disattivo\n            </TabNavLink>\n          </TabNavItem>\n        </TabNav>\n        <TabContent>\n          <TabPane eventKey='1' className='p-4'>\n            Contenuto 1\n          </TabPane>\n          <TabPane eventKey='2' className='p-4'>\n            Contenuto 2\n          </TabPane>\n          <TabPane eventKey='3' className='p-4'>\n            Contenuto 3\n          </TabPane>\n          <TabPane eventKey='4' className='p-4'>\n            Contenuto 4\n          </TabPane>\n        </TabContent>\n      </div>\n    </TabContainer>\n}",
      ...(_$ = (__ = TestualePannelReverseBottom.parameters) == null ? void 0 : __.docs) == null ? void 0 : _$.source
    }
  }
};
TestualePannelReverseRight.parameters = {
  ...TestualePannelReverseRight.parameters,
  docs: {
    ...(_aa = TestualePannelReverseRight.parameters) == null ? void 0 : _aa.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <Row className='flex-row-reverse'>\n        <Col xs='6' md='4' lg='3'>\n          <TabNav vertical>\n            <TabNavItem>\n              <TabNavLink eventKey='1'>Attivo</TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='2'>Link</TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='3'>Link</TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='4' disabled>\n                Disattivo\n              </TabNavLink>\n            </TabNavItem>\n          </TabNav>\n        </Col>\n        <Col xs='6' md='8' lg='9'>\n          <TabContent>\n            <TabPane eventKey='1' className='p-4'>\n              Contenuto 1\n            </TabPane>\n            <TabPane eventKey='2' className='p-4'>\n              Contenuto 2\n            </TabPane>\n            <TabPane eventKey='3' className='p-4'>\n              Contenuto 3\n            </TabPane>\n            <TabPane eventKey='4' className='p-4'>\n              Contenuto 4\n            </TabPane>\n          </TabContent>\n        </Col>\n      </Row>\n    </TabContainer>\n}",
      ...(_ca = (_ba = TestualePannelReverseRight.parameters) == null ? void 0 : _ba.docs) == null ? void 0 : _ca.source
    }
  }
};
TestualeFullDark.parameters = {
  ...TestualeFullDark.parameters,
  docs: {
    ...(_da = TestualeFullDark.parameters) == null ? void 0 : _da.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav dark className='auto'>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>Attivo</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>Link</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>Link</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            Disattivo\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n    </TabContainer>\n}",
      ...(_fa = (_ea = TestualeFullDark.parameters) == null ? void 0 : _ea.docs) == null ? void 0 : _fa.source
    }
  }
};
TestoIconaFullDark.parameters = {
  ...TestoIconaFullDark.parameters,
  docs: {
    ...(_ga = TestoIconaFullDark.parameters) == null ? void 0 : _ga.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav dark className='auto'>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>\n            <Icon icon='it-link' aria-hidden />\n            Tab 1\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>\n            <Icon icon='it-calendar' aria-hidden />\n            Tab 2\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>\n            <Icon icon='it-comment' aria-hidden />\n            Tab 3\n          </TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            <Icon icon='it-close' aria-hidden />\n            Tab 4\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n    </TabContainer>\n}",
      ...(_ia = (_ha = TestoIconaFullDark.parameters) == null ? void 0 : _ha.docs) == null ? void 0 : _ia.source
    }
  }
};
TestoIconaPannelVerticalDark.parameters = {
  ...TestoIconaPannelVerticalDark.parameters,
  docs: {
    ...(_ja = TestoIconaPannelVerticalDark.parameters) == null ? void 0 : _ja.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <Row>\n        <Col sm={3}>\n          <TabNav vertical dark>\n            <TabNavItem>\n              <TabNavLink eventKey='1'>\n                Tab 1\n                <Icon icon='it-link' aria-hidden />\n              </TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='2'>\n                Tab 2\n                <Icon icon='it-calendar' aria-hidden />\n              </TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='3'>\n                Tab 3\n                <Icon icon='it-comment' aria-hidden />\n              </TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='4' disabled>\n                Tab 4\n                <Icon icon='it-close' aria-hidden />\n              </TabNavLink>\n            </TabNavItem>\n          </TabNav>\n        </Col>\n        <Col sm={9}>\n          <TabContent>\n            <TabPane eventKey='1' className='p-4'>\n              Contenuto 1\n            </TabPane>\n            <TabPane eventKey='2' className='p-4'>\n              Contenuto 2\n            </TabPane>\n            <TabPane eventKey='3' className='p-4'>\n              Contenuto 3\n            </TabPane>\n            <TabPane eventKey='4' className='p-4'>\n              Contenuto 4\n            </TabPane>\n          </TabContent>\n        </Col>\n      </Row>\n    </TabContainer>\n}",
      ...(_la = (_ka = TestoIconaPannelVerticalDark.parameters) == null ? void 0 : _ka.docs) == null ? void 0 : _la.source
    }
  }
};
TestualePannelReverseRightDark.parameters = {
  ...TestualePannelReverseRightDark.parameters,
  docs: {
    ...(_ma = TestualePannelReverseRightDark.parameters) == null ? void 0 : _ma.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <Row className='flex-row-reverse'>\n        <Col xs='6' md='4' lg='3'>\n          <TabNav vertical dark>\n            <TabNavItem>\n              <TabNavLink eventKey='1'>\n                <Icon icon='it-link' aria-hidden />\n                Tab 1\n              </TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='2'>\n                <Icon icon='it-calendar' aria-hidden />\n                Tab 2\n              </TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='3'>\n                <Icon icon='it-comment' aria-hidden />\n                Tab 3\n              </TabNavLink>\n            </TabNavItem>\n            <TabNavItem>\n              <TabNavLink eventKey='4' disabled>\n                <Icon icon='it-close' aria-hidden />\n                Tab 4\n              </TabNavLink>\n            </TabNavItem>\n          </TabNav>\n        </Col>\n        <Col xs='6' md='8' lg='9'>\n          <TabContent>\n            <TabPane eventKey='1' className='p-4'>\n              Contenuto 1\n            </TabPane>\n            <TabPane eventKey='2' className='p-4'>\n              Contenuto 2\n            </TabPane>\n            <TabPane eventKey='3' className='p-4'>\n              Contenuto 3\n            </TabPane>\n            <TabPane eventKey='4' className='p-4'>\n              Contenuto 4\n            </TabPane>\n          </TabContent>\n        </Col>\n      </Row>\n    </TabContainer>\n}",
      ...(_oa = (_na = TestualePannelReverseRightDark.parameters) == null ? void 0 : _na.docs) == null ? void 0 : _oa.source
    }
  }
};
TestualePannelCard.parameters = {
  ...TestualePannelCard.parameters,
  docs: {
    ...(_pa = TestualePannelCard.parameters) == null ? void 0 : _pa.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <TabNav card>\n        <TabNavItem>\n          <TabNavLink eventKey='1'>Attivo</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='2'>Link</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='3'>Link</TabNavLink>\n        </TabNavItem>\n        <TabNavItem>\n          <TabNavLink eventKey='4' disabled>\n            Disattivo\n          </TabNavLink>\n        </TabNavItem>\n      </TabNav>\n      <TabContent>\n        <TabPane eventKey='1' className='p-4'>\n          Contenuto 1\n        </TabPane>\n        <TabPane eventKey='2' className='p-4'>\n          Contenuto 2\n        </TabPane>\n        <TabPane eventKey='3' className='p-4'>\n          Contenuto 3\n        </TabPane>\n        <TabPane eventKey='4' className='p-4'>\n          Contenuto 4\n        </TabPane>\n      </TabContent>\n    </TabContainer>\n}",
      ...(_ra = (_qa = TestualePannelCard.parameters) == null ? void 0 : _qa.docs) == null ? void 0 : _ra.source
    }
  }
};
TestualePannelCardEditable.parameters = {
  ...TestualePannelCardEditable.parameters,
  docs: {
    ...(_sa = TestualePannelCardEditable.parameters) == null ? void 0 : _sa.docs,
    source: {
      originalSource: "{\n  render: () => <TabContainer defaultActiveKey='1'>\n      <div className='nav-tabs-wrapper'>\n        <TabNav card className='nav-tabs-editable'>\n          <TabNavItem>\n            <TabNavLink eventKey='1'>Tab 1</TabNavLink>\n            <div className='nav-link-close'>\n              <Icon icon='it-close' aria-hidden />\n              <span className='visually-hidden'> Chiudi tab 1</span>\n            </div>\n          </TabNavItem>\n          <TabNavItem>\n            <TabNavLink eventKey='2'>Tab 2</TabNavLink>\n            <div className='nav-link-close'>\n              <Icon icon='it-close' aria-hidden />\n              <span className='visually-hidden'> Chiudi tab 2</span>\n            </div>\n          </TabNavItem>\n          <TabNavItem>\n            <TabNavLink eventKey='3'>Tab 3</TabNavLink>\n            <div className='nav-link-close'>\n              <Icon icon='it-close' aria-hidden />\n              <span className='visually-hidden'> Chiudi tab 3</span>\n            </div>\n          </TabNavItem>\n          <TabNavItem>\n            <TabNavLink eventKey='4' disabled>\n              Disattivo\n            </TabNavLink>\n            <div className='nav-link-close disabled'>\n              <Icon icon='it-close' aria-hidden />\n              <span className='visually-hidden'> Chiudi tab 4</span>\n            </div>\n          </TabNavItem>\n          <li className='nav-item-filler'></li>\n          <TabNavItem>\n            <a className='nav-tab-add'>\n              <span className='visually-hidden'> Aggiungi un tab</span>\n            </a>\n          </TabNavItem>\n        </TabNav>\n      </div>\n      <TabContent>\n        <TabPane eventKey='1' className='p-4'>\n          Contenuto 1\n        </TabPane>\n        <TabPane eventKey='2' className='p-4'>\n          Contenuto 2\n        </TabPane>\n        <TabPane eventKey='3' className='p-4'>\n          Contenuto 3\n        </TabPane>\n        <TabPane eventKey='4' className='p-4'>\n          Contenuto 4\n        </TabPane>\n      </TabContent>\n    </TabContainer>\n}",
      ...(_ua = (_ta = TestualePannelCardEditable.parameters) == null ? void 0 : _ta.docs) == null ? void 0 : _ua.source
    }
  }
};
const __namedExportsOrder = ["TestualeFull", "IconaFull", "IconaGrandeFull", "TestoIconaFull", "Testuale", "Icona", "IconaGrande", "TestoIcona", "Hidescroll", "TestualePannel", "IconaPannel", "IconaGrandePannel", "TestoIconaPannel", "TestualePannelVertical", "TestualePannelVerticalBackground", "TestoIconaPannelVertical", "TestoPannelVertical", "TestualePannelReverseBottom", "TestualePannelReverseRight", "TestualeFullDark", "TestoIconaFullDark", "TestoIconaPannelVerticalDark", "TestualePannelReverseRightDark", "TestualePannelCard", "TestualePannelCardEditable"];
const TabStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Hidescroll,
  Icona,
  IconaFull,
  IconaGrande,
  IconaGrandeFull,
  IconaGrandePannel,
  IconaPannel,
  TestoIcona,
  TestoIconaFull,
  TestoIconaFullDark,
  TestoIconaPannel,
  TestoIconaPannelVertical,
  TestoIconaPannelVerticalDark,
  TestoPannelVertical,
  Testuale,
  TestualeFull,
  TestualeFullDark,
  TestualePannel,
  TestualePannelCard,
  TestualePannelCardEditable,
  TestualePannelReverseBottom,
  TestualePannelReverseRight,
  TestualePannelReverseRightDark,
  TestualePannelVertical,
  TestualePannelVerticalBackground,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Hidescroll as H,
  IconaFull as I,
  TabStories as T,
  TestualeFull as a,
  IconaGrandeFull as b,
  TestoIconaFull as c,
  Testuale as d,
  Icona as e,
  IconaGrande as f,
  TestoIcona as g,
  TestualePannel as h,
  IconaPannel as i,
  IconaGrandePannel as j,
  TestoIconaPannel as k,
  TestualePannelVertical as l,
  TestualePannelVerticalBackground as m,
  TestoIconaPannelVertical as n,
  TestoPannelVertical as o,
  TestualePannelReverseBottom as p,
  TestualePannelReverseRight as q,
  TestualeFullDark as r,
  TestoIconaFullDark as s,
  TestoIconaPannelVerticalDark as t,
  TestualePannelReverseRightDark as u,
  TestualePannelCard as v,
  TestualePannelCardEditable as w
};
