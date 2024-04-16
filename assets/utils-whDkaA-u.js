import { r as reactExports } from "./index-CQCy530F.js";
var ManagerReferenceNodeContext = reactExports.createContext();
var ManagerReferenceNodeSetterContext = reactExports.createContext();
function Manager(_ref) {
  var children = _ref.children;
  var _React$useState = reactExports.useState(null), referenceNode = _React$useState[0], setReferenceNode = _React$useState[1];
  var hasUnmounted = reactExports.useRef(false);
  reactExports.useEffect(function() {
    return function() {
      hasUnmounted.current = true;
    };
  }, []);
  var handleSetReferenceNode = reactExports.useCallback(function(node) {
    if (!hasUnmounted.current) {
      setReferenceNode(node);
    }
  }, []);
  return /* @__PURE__ */ reactExports.createElement(ManagerReferenceNodeContext.Provider, {
    value: referenceNode
  }, /* @__PURE__ */ reactExports.createElement(ManagerReferenceNodeSetterContext.Provider, {
    value: handleSetReferenceNode
  }, children));
}
var unwrapArray = function unwrapArray2(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
var safeInvoke = function safeInvoke2(fn) {
  if (typeof fn === "function") {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return fn.apply(void 0, args);
  }
};
var setRef = function setRef2(ref, node) {
  if (typeof ref === "function") {
    return safeInvoke(ref, node);
  } else if (ref != null) {
    ref.current = node;
  }
};
var fromEntries = function fromEntries2(entries) {
  return entries.reduce(function(acc, _ref) {
    var key = _ref[0], value = _ref[1];
    acc[key] = value;
    return acc;
  }, {});
};
var useIsomorphicLayoutEffect = typeof window !== "undefined" && window.document && window.document.createElement ? reactExports.useLayoutEffect : reactExports.useEffect;
export {
  ManagerReferenceNodeContext as M,
  unwrapArray as a,
  ManagerReferenceNodeSetterContext as b,
  safeInvoke as c,
  Manager as d,
  fromEntries as f,
  setRef as s,
  useIsomorphicLayoutEffect as u
};
