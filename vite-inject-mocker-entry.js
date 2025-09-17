var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { _ as __vitePreload } from "./assets/preload-helper-CQrtv1eE.js";
class MockerRegistry {
  constructor() {
    __publicField(this, "registryByUrl", /* @__PURE__ */ new Map());
    __publicField(this, "registryById", /* @__PURE__ */ new Map());
  }
  clear() {
    this.registryByUrl.clear();
    this.registryById.clear();
  }
  keys() {
    return this.registryByUrl.keys();
  }
  add(mock) {
    this.registryByUrl.set(mock.url, mock);
    this.registryById.set(mock.id, mock);
  }
  register(typeOrEvent, raw, id, url, factoryOrRedirect) {
    const type = typeof typeOrEvent === "object" ? typeOrEvent.type : typeOrEvent;
    if (typeof typeOrEvent === "object") {
      const event = typeOrEvent;
      if (event instanceof AutomockedModule || event instanceof AutospiedModule || event instanceof ManualMockedModule || event instanceof RedirectedModule) {
        throw new TypeError(`[vitest] Cannot register a mock that is already defined. Expected a JSON representation from \`MockedModule.toJSON\`, instead got "${event.type}". Use "registry.add()" to update a mock instead.`);
      }
      if (event.type === "automock") {
        const module = AutomockedModule.fromJSON(event);
        this.add(module);
        return module;
      } else if (event.type === "autospy") {
        const module = AutospiedModule.fromJSON(event);
        this.add(module);
        return module;
      } else if (event.type === "redirect") {
        const module = RedirectedModule.fromJSON(event);
        this.add(module);
        return module;
      } else if (event.type === "manual") {
        throw new Error(`Cannot set serialized manual mock. Define a factory function manually with \`ManualMockedModule.fromJSON()\`.`);
      } else {
        throw new Error(`Unknown mock type: ${event.type}`);
      }
    }
    if (typeof raw !== "string") {
      throw new TypeError("[vitest] Mocks require a raw string.");
    }
    if (typeof url !== "string") {
      throw new TypeError("[vitest] Mocks require a url string.");
    }
    if (typeof id !== "string") {
      throw new TypeError("[vitest] Mocks require an id string.");
    }
    if (type === "manual") {
      if (typeof factoryOrRedirect !== "function") {
        throw new TypeError("[vitest] Manual mocks require a factory function.");
      }
      const mock = new ManualMockedModule(raw, id, url, factoryOrRedirect);
      this.add(mock);
      return mock;
    } else if (type === "automock" || type === "autospy") {
      const mock = type === "automock" ? new AutomockedModule(raw, id, url) : new AutospiedModule(raw, id, url);
      this.add(mock);
      return mock;
    } else if (type === "redirect") {
      if (typeof factoryOrRedirect !== "string") {
        throw new TypeError("[vitest] Redirect mocks require a redirect string.");
      }
      const mock = new RedirectedModule(raw, id, url, factoryOrRedirect);
      this.add(mock);
      return mock;
    } else {
      throw new Error(`[vitest] Unknown mock type: ${type}`);
    }
  }
  delete(id) {
    this.registryByUrl.delete(id);
  }
  get(id) {
    return this.registryByUrl.get(id);
  }
  getById(id) {
    return this.registryById.get(id);
  }
  has(id) {
    return this.registryByUrl.has(id);
  }
}
class AutomockedModule {
  constructor(raw, id, url) {
    __publicField(this, "type", "automock");
    this.raw = raw;
    this.id = id;
    this.url = url;
  }
  static fromJSON(data) {
    return new AutospiedModule(data.raw, data.id, data.url);
  }
  toJSON() {
    return {
      type: this.type,
      url: this.url,
      raw: this.raw,
      id: this.id
    };
  }
}
class AutospiedModule {
  constructor(raw, id, url) {
    __publicField(this, "type", "autospy");
    this.raw = raw;
    this.id = id;
    this.url = url;
  }
  static fromJSON(data) {
    return new AutospiedModule(data.raw, data.id, data.url);
  }
  toJSON() {
    return {
      type: this.type,
      url: this.url,
      id: this.id,
      raw: this.raw
    };
  }
}
class RedirectedModule {
  constructor(raw, id, url, redirect) {
    __publicField(this, "type", "redirect");
    this.raw = raw;
    this.id = id;
    this.url = url;
    this.redirect = redirect;
  }
  static fromJSON(data) {
    return new RedirectedModule(data.raw, data.id, data.url, data.redirect);
  }
  toJSON() {
    return {
      type: this.type,
      url: this.url,
      raw: this.raw,
      id: this.id,
      redirect: this.redirect
    };
  }
}
class ManualMockedModule {
  constructor(raw, id, url, factory) {
    __publicField(this, "cache");
    __publicField(this, "type", "manual");
    this.raw = raw;
    this.id = id;
    this.url = url;
    this.factory = factory;
  }
  async resolve() {
    if (this.cache) {
      return this.cache;
    }
    let exports;
    try {
      exports = await this.factory();
    } catch (err) {
      const vitestError = new Error('[vitest] There was an error when mocking a module. If you are using "vi.mock" factory, make sure there are no top level variables inside, since this call is hoisted to top of the file. Read more: https://vitest.dev/api/vi.html#vi-mock');
      vitestError.cause = err;
      throw vitestError;
    }
    if (exports === null || typeof exports !== "object" || Array.isArray(exports)) {
      throw new TypeError(`[vitest] vi.mock("${this.raw}", factory?: () => unknown) is not returning an object. Did you mean to return an object with a "default" key?`);
    }
    return this.cache = exports;
  }
  static fromJSON(data, factory) {
    return new ManualMockedModule(data.raw, data.id, data.url, factory);
  }
  toJSON() {
    return {
      type: this.type,
      url: this.url,
      id: this.id,
      raw: this.raw
    };
  }
}
function mockObject(options, object, mockExports = {}) {
  const finalizers = new Array();
  const refs = new RefTracker();
  const define = (container, key, value) => {
    try {
      container[key] = value;
      return true;
    } catch {
      return false;
    }
  };
  const mockPropertiesOf = (container, newContainer) => {
    const containerType = getType(container);
    const isModule = containerType === "Module" || !!container.__esModule;
    for (const { key: property, descriptor } of getAllMockableProperties(container, isModule, options.globalConstructors)) {
      if (!isModule && descriptor.get) {
        try {
          Object.defineProperty(newContainer, property, descriptor);
        } catch {
        }
        continue;
      }
      if (isSpecialProp(property, containerType)) {
        continue;
      }
      const value = container[property];
      const refId = refs.getId(value);
      if (refId !== void 0) {
        finalizers.push(() => define(newContainer, property, refs.getMockedValue(refId)));
        continue;
      }
      const type = getType(value);
      if (Array.isArray(value)) {
        define(newContainer, property, []);
        continue;
      }
      const isFunction = type.includes("Function") && typeof value === "function";
      if ((!isFunction || value._isMockFunction) && type !== "Object" && type !== "Module") {
        define(newContainer, property, value);
        continue;
      }
      if (!define(newContainer, property, isFunction ? value : {})) {
        continue;
      }
      if (isFunction) {
        let mockFunction = function() {
          if (this instanceof newContainer[property]) {
            for (const { key, descriptor: descriptor2 } of getAllMockableProperties(this, false, options.globalConstructors)) {
              if (descriptor2.get) {
                continue;
              }
              const value2 = this[key];
              const type2 = getType(value2);
              const isFunction2 = type2.includes("Function") && typeof value2 === "function";
              if (isFunction2) {
                const original = this[key];
                const mock2 = spyOn(this, key).mockImplementation(original);
                const origMockReset = mock2.mockReset;
                mock2.mockRestore = mock2.mockReset = () => {
                  origMockReset.call(mock2);
                  mock2.mockImplementation(original);
                  return mock2;
                };
              }
            }
          }
        };
        if (!options.spyOn) {
          throw new Error("[@vitest/mocker] `spyOn` is not defined. This is a Vitest error. Please open a new issue with reproduction.");
        }
        const spyOn = options.spyOn;
        const mock = spyOn(newContainer, property);
        if (options.type === "automock") {
          mock.mockImplementation(mockFunction);
          const origMockReset = mock.mockReset;
          mock.mockRestore = mock.mockReset = () => {
            origMockReset.call(mock);
            mock.mockImplementation(mockFunction);
            return mock;
          };
        }
        Object.defineProperty(newContainer[property], "length", { value: 0 });
      }
      refs.track(value, newContainer[property]);
      mockPropertiesOf(value, newContainer[property]);
    }
  };
  const mockedObject = mockExports;
  mockPropertiesOf(object, mockedObject);
  for (const finalizer of finalizers) {
    finalizer();
  }
  return mockedObject;
}
class RefTracker {
  constructor() {
    __publicField(this, "idMap", /* @__PURE__ */ new Map());
    __publicField(this, "mockedValueMap", /* @__PURE__ */ new Map());
  }
  getId(value) {
    return this.idMap.get(value);
  }
  getMockedValue(id) {
    return this.mockedValueMap.get(id);
  }
  track(originalValue, mockedValue) {
    const newId = this.idMap.size;
    this.idMap.set(originalValue, newId);
    this.mockedValueMap.set(newId, mockedValue);
    return newId;
  }
}
function getType(value) {
  return Object.prototype.toString.apply(value).slice(8, -1);
}
function isSpecialProp(prop, parentType) {
  return parentType.includes("Function") && typeof prop === "string" && [
    "arguments",
    "callee",
    "caller",
    "length",
    "name"
  ].includes(prop);
}
function getAllMockableProperties(obj, isModule, constructors) {
  const { Map: Map2, Object: Object2, Function: Function2, RegExp: RegExp2, Array: Array2 } = constructors;
  const allProps = new Map2();
  let curr = obj;
  do {
    if (curr === Object2.prototype || curr === Function2.prototype || curr === RegExp2.prototype) {
      break;
    }
    collectOwnProperties(curr, (key) => {
      const descriptor = Object2.getOwnPropertyDescriptor(curr, key);
      if (descriptor) {
        allProps.set(key, {
          key,
          descriptor
        });
      }
    });
  } while (curr = Object2.getPrototypeOf(curr));
  if (isModule && !allProps.has("default") && "default" in obj) {
    const descriptor = Object2.getOwnPropertyDescriptor(obj, "default");
    if (descriptor) {
      allProps.set("default", {
        key: "default",
        descriptor
      });
    }
  }
  return Array2.from(allProps.values());
}
function collectOwnProperties(obj, collector) {
  const collect = typeof collector === "function" ? collector : (key) => collector.add(key);
  Object.getOwnPropertyNames(obj).forEach(collect);
  Object.getOwnPropertySymbols(obj).forEach(collect);
}
const _DRIVE_LETTER_START_RE$1 = /^[A-Za-z]:\//;
function normalizeWindowsPath$1(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE$1, (r) => r.toUpperCase());
}
const _UNC_REGEX = /^[/\\]{2}/;
const _IS_ABSOLUTE_RE$1 = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
const _EXTNAME_RE = /.(\.[^./]+|\.)$/;
const normalize = function(path) {
  if (path.length === 0) {
    return ".";
  }
  path = normalizeWindowsPath$1(path);
  const isUNCPath = path.match(_UNC_REGEX);
  const isPathAbsolute = isAbsolute$1(path);
  const trailingSeparator = path[path.length - 1] === "/";
  path = normalizeString$1(path, !isPathAbsolute);
  if (path.length === 0) {
    if (isPathAbsolute) {
      return "/";
    }
    return trailingSeparator ? "./" : ".";
  }
  if (trailingSeparator) {
    path += "/";
  }
  if (_DRIVE_LETTER_RE.test(path)) {
    path += "/";
  }
  if (isUNCPath) {
    if (!isPathAbsolute) {
      return `//./${path}`;
    }
    return `//${path}`;
  }
  return isPathAbsolute && !isAbsolute$1(path) ? `/${path}` : path;
};
const join = function(...segments) {
  let path = "";
  for (const seg of segments) {
    if (!seg) {
      continue;
    }
    if (path.length > 0) {
      const pathTrailing = path[path.length - 1] === "/";
      const segLeading = seg[0] === "/";
      const both = pathTrailing && segLeading;
      if (both) {
        path += seg.slice(1);
      } else {
        path += pathTrailing || segLeading ? seg : `/${seg}`;
      }
    } else {
      path += seg;
    }
  }
  return normalize(path);
};
function normalizeString$1(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index2 = 0; index2 <= path.length; ++index2) {
    if (index2 < path.length) {
      char = path[index2];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index2 - 1 || dots === 1) ;
      else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index2;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index2;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index2)}`;
        } else {
          res = path.slice(lastSlash + 1, index2);
        }
        lastSegmentLength = index2 - lastSlash - 1;
      }
      lastSlash = index2;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute$1 = function(p2) {
  return _IS_ABSOLUTE_RE$1.test(p2);
};
const extname = function(p2) {
  if (p2 === "..") return "";
  const match = _EXTNAME_RE.exec(normalizeWindowsPath$1(p2));
  return match && match[1] || "";
};
var f = {
  reset: [0, 0],
  bold: [1, 22, "\x1B[22m\x1B[1m"],
  dim: [2, 22, "\x1B[22m\x1B[2m"],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],
  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  gray: [90, 39],
  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],
  blackBright: [90, 39],
  redBright: [91, 39],
  greenBright: [92, 39],
  yellowBright: [93, 39],
  blueBright: [94, 39],
  magentaBright: [95, 39],
  cyanBright: [96, 39],
  whiteBright: [97, 39],
  bgBlackBright: [100, 49],
  bgRedBright: [101, 49],
  bgGreenBright: [102, 49],
  bgYellowBright: [103, 49],
  bgBlueBright: [104, 49],
  bgMagentaBright: [105, 49],
  bgCyanBright: [106, 49],
  bgWhiteBright: [107, 49]
}, h = Object.entries(f);
function a(n) {
  return String(n);
}
a.open = "";
a.close = "";
function C(n = false) {
  let e = typeof process != "undefined" ? process : void 0, i = (e == null ? void 0 : e.env) || {}, g = (e == null ? void 0 : e.argv) || [];
  return !("NO_COLOR" in i || g.includes("--no-color")) && ("FORCE_COLOR" in i || g.includes("--color") || (e == null ? void 0 : e.platform) === "win32" || n && i.TERM !== "dumb" || "CI" in i) || typeof window != "undefined" && !!window.chrome;
}
function p(n = false) {
  let e = C(n), i = (r, t, c, o) => {
    let l = "", s = 0;
    do
      l += r.substring(s, o) + c, s = o + t.length, o = r.indexOf(t, s);
    while (~o);
    return l + r.substring(s);
  }, g = (r, t, c = r) => {
    let o = (l) => {
      let s = String(l), b = s.indexOf(t, r.length);
      return ~b ? r + i(s, t, c, b) + t : r + s + t;
    };
    return o.open = r, o.close = t, o;
  }, u = {
    isColorSupported: e
  }, d = (r) => `\x1B[${r}m`;
  for (let [r, t] of h)
    u[r] = e ? g(
      d(t[0]),
      d(t[1]),
      t[2]
    ) : a;
  return u;
}
p();
function _mergeNamespaces(n, m) {
  m.forEach(function(e) {
    e && typeof e !== "string" && !Array.isArray(e) && Object.keys(e).forEach(function(k) {
      if (k !== "default" && !(k in n)) {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k];
          }
        });
      }
    });
  });
  return Object.freeze(n);
}
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var reactIs$1 = { exports: {} };
var reactIs_production = {};
/**
* @license React
* react-is.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var hasRequiredReactIs_production;
function requireReactIs_production() {
  if (hasRequiredReactIs_production) return reactIs_production;
  hasRequiredReactIs_production = 1;
  var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
  var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
  function typeOf(object) {
    if ("object" === typeof object && null !== object) {
      var $$typeof = object.$$typeof;
      switch ($$typeof) {
        case REACT_ELEMENT_TYPE:
          switch (object = object.type, object) {
            case REACT_FRAGMENT_TYPE:
            case REACT_PROFILER_TYPE:
            case REACT_STRICT_MODE_TYPE:
            case REACT_SUSPENSE_TYPE:
            case REACT_SUSPENSE_LIST_TYPE:
            case REACT_VIEW_TRANSITION_TYPE:
              return object;
            default:
              switch (object = object && object.$$typeof, object) {
                case REACT_CONTEXT_TYPE:
                case REACT_FORWARD_REF_TYPE:
                case REACT_LAZY_TYPE:
                case REACT_MEMO_TYPE:
                  return object;
                case REACT_CONSUMER_TYPE:
                  return object;
                default:
                  return $$typeof;
              }
          }
        case REACT_PORTAL_TYPE:
          return $$typeof;
      }
    }
  }
  reactIs_production.ContextConsumer = REACT_CONSUMER_TYPE;
  reactIs_production.ContextProvider = REACT_CONTEXT_TYPE;
  reactIs_production.Element = REACT_ELEMENT_TYPE;
  reactIs_production.ForwardRef = REACT_FORWARD_REF_TYPE;
  reactIs_production.Fragment = REACT_FRAGMENT_TYPE;
  reactIs_production.Lazy = REACT_LAZY_TYPE;
  reactIs_production.Memo = REACT_MEMO_TYPE;
  reactIs_production.Portal = REACT_PORTAL_TYPE;
  reactIs_production.Profiler = REACT_PROFILER_TYPE;
  reactIs_production.StrictMode = REACT_STRICT_MODE_TYPE;
  reactIs_production.Suspense = REACT_SUSPENSE_TYPE;
  reactIs_production.SuspenseList = REACT_SUSPENSE_LIST_TYPE;
  reactIs_production.isContextConsumer = function(object) {
    return typeOf(object) === REACT_CONSUMER_TYPE;
  };
  reactIs_production.isContextProvider = function(object) {
    return typeOf(object) === REACT_CONTEXT_TYPE;
  };
  reactIs_production.isElement = function(object) {
    return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
  };
  reactIs_production.isForwardRef = function(object) {
    return typeOf(object) === REACT_FORWARD_REF_TYPE;
  };
  reactIs_production.isFragment = function(object) {
    return typeOf(object) === REACT_FRAGMENT_TYPE;
  };
  reactIs_production.isLazy = function(object) {
    return typeOf(object) === REACT_LAZY_TYPE;
  };
  reactIs_production.isMemo = function(object) {
    return typeOf(object) === REACT_MEMO_TYPE;
  };
  reactIs_production.isPortal = function(object) {
    return typeOf(object) === REACT_PORTAL_TYPE;
  };
  reactIs_production.isProfiler = function(object) {
    return typeOf(object) === REACT_PROFILER_TYPE;
  };
  reactIs_production.isStrictMode = function(object) {
    return typeOf(object) === REACT_STRICT_MODE_TYPE;
  };
  reactIs_production.isSuspense = function(object) {
    return typeOf(object) === REACT_SUSPENSE_TYPE;
  };
  reactIs_production.isSuspenseList = function(object) {
    return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
  };
  reactIs_production.isValidElementType = function(type) {
    return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || void 0 !== type.getModuleId) ? true : false;
  };
  reactIs_production.typeOf = typeOf;
  return reactIs_production;
}
var hasRequiredReactIs$1;
function requireReactIs$1() {
  if (hasRequiredReactIs$1) return reactIs$1.exports;
  hasRequiredReactIs$1 = 1;
  {
    reactIs$1.exports = requireReactIs_production();
  }
  return reactIs$1.exports;
}
var reactIsExports$1 = requireReactIs$1();
var index$1 = /* @__PURE__ */ getDefaultExportFromCjs(reactIsExports$1);
var ReactIs19 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: index$1
}, [reactIsExports$1]);
var reactIs = { exports: {} };
var reactIs_production_min = {};
/**
* @license React
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var hasRequiredReactIs_production_min;
function requireReactIs_production_min() {
  if (hasRequiredReactIs_production_min) return reactIs_production_min;
  hasRequiredReactIs_production_min = 1;
  var b = Symbol.for("react.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), e = Symbol.for("react.strict_mode"), f2 = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), h2 = Symbol.for("react.context"), k = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), n = Symbol.for("react.suspense_list"), p2 = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), t = Symbol.for("react.offscreen"), u;
  u = Symbol.for("react.module.reference");
  function v(a2) {
    if ("object" === typeof a2 && null !== a2) {
      var r = a2.$$typeof;
      switch (r) {
        case b:
          switch (a2 = a2.type, a2) {
            case d:
            case f2:
            case e:
            case m:
            case n:
              return a2;
            default:
              switch (a2 = a2 && a2.$$typeof, a2) {
                case k:
                case h2:
                case l:
                case q:
                case p2:
                case g:
                  return a2;
                default:
                  return r;
              }
          }
        case c:
          return r;
      }
    }
  }
  reactIs_production_min.ContextConsumer = h2;
  reactIs_production_min.ContextProvider = g;
  reactIs_production_min.Element = b;
  reactIs_production_min.ForwardRef = l;
  reactIs_production_min.Fragment = d;
  reactIs_production_min.Lazy = q;
  reactIs_production_min.Memo = p2;
  reactIs_production_min.Portal = c;
  reactIs_production_min.Profiler = f2;
  reactIs_production_min.StrictMode = e;
  reactIs_production_min.Suspense = m;
  reactIs_production_min.SuspenseList = n;
  reactIs_production_min.isAsyncMode = function() {
    return false;
  };
  reactIs_production_min.isConcurrentMode = function() {
    return false;
  };
  reactIs_production_min.isContextConsumer = function(a2) {
    return v(a2) === h2;
  };
  reactIs_production_min.isContextProvider = function(a2) {
    return v(a2) === g;
  };
  reactIs_production_min.isElement = function(a2) {
    return "object" === typeof a2 && null !== a2 && a2.$$typeof === b;
  };
  reactIs_production_min.isForwardRef = function(a2) {
    return v(a2) === l;
  };
  reactIs_production_min.isFragment = function(a2) {
    return v(a2) === d;
  };
  reactIs_production_min.isLazy = function(a2) {
    return v(a2) === q;
  };
  reactIs_production_min.isMemo = function(a2) {
    return v(a2) === p2;
  };
  reactIs_production_min.isPortal = function(a2) {
    return v(a2) === c;
  };
  reactIs_production_min.isProfiler = function(a2) {
    return v(a2) === f2;
  };
  reactIs_production_min.isStrictMode = function(a2) {
    return v(a2) === e;
  };
  reactIs_production_min.isSuspense = function(a2) {
    return v(a2) === m;
  };
  reactIs_production_min.isSuspenseList = function(a2) {
    return v(a2) === n;
  };
  reactIs_production_min.isValidElementType = function(a2) {
    return "string" === typeof a2 || "function" === typeof a2 || a2 === d || a2 === f2 || a2 === e || a2 === m || a2 === n || a2 === t || "object" === typeof a2 && null !== a2 && (a2.$$typeof === q || a2.$$typeof === p2 || a2.$$typeof === g || a2.$$typeof === h2 || a2.$$typeof === l || a2.$$typeof === u || void 0 !== a2.getModuleId) ? true : false;
  };
  reactIs_production_min.typeOf = v;
  return reactIs_production_min;
}
var hasRequiredReactIs;
function requireReactIs() {
  if (hasRequiredReactIs) return reactIs.exports;
  hasRequiredReactIs = 1;
  {
    reactIs.exports = requireReactIs_production_min();
  }
  return reactIs.exports;
}
var reactIsExports = requireReactIs();
var index = /* @__PURE__ */ getDefaultExportFromCjs(reactIsExports);
var ReactIs18 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: index
}, [reactIsExports]);
const reactIsMethods = [
  "isAsyncMode",
  "isConcurrentMode",
  "isContextConsumer",
  "isContextProvider",
  "isElement",
  "isForwardRef",
  "isFragment",
  "isLazy",
  "isMemo",
  "isPortal",
  "isProfiler",
  "isStrictMode",
  "isSuspense",
  "isSuspenseList",
  "isValidElementType"
];
Object.fromEntries(reactIsMethods.map((m) => [m, (v) => ReactIs18[m](v) || ReactIs19[m](v)]));
let getPromiseValue = () => "Promise{…}";
try {
  const { getPromiseDetails, kPending, kRejected } = process.binding("util");
  if (Array.isArray(getPromiseDetails(Promise.resolve()))) {
    getPromiseValue = (value, options) => {
      const [state, innerValue] = getPromiseDetails(value);
      if (state === kPending) {
        return "Promise{<pending>}";
      }
      return `Promise${state === kRejected ? "!" : ""}{${options.inspect(innerValue, options)}}`;
    };
  }
} catch (notNode) {
}
function createSimpleStackTrace(options) {
  const { message = "$$stack trace error", stackTraceLimit = 1 } = options || {};
  const limit = Error.stackTraceLimit;
  const prepareStackTrace = Error.prepareStackTrace;
  Error.stackTraceLimit = stackTraceLimit;
  Error.prepareStackTrace = (e) => e.stack;
  const err = new Error(message);
  const stackTrace = err.stack || "";
  Error.prepareStackTrace = prepareStackTrace;
  Error.stackTraceLimit = limit;
  return stackTrace;
}
var jsTokens_1;
var hasRequiredJsTokens;
function requireJsTokens() {
  if (hasRequiredJsTokens) return jsTokens_1;
  hasRequiredJsTokens = 1;
  var Identifier, JSXIdentifier, JSXPunctuator, JSXString, JSXText, KeywordsWithExpressionAfter, KeywordsWithNoLineTerminatorAfter, LineTerminatorSequence, MultiLineComment, Newline, NumericLiteral, Punctuator, RegularExpressionLiteral, SingleLineComment, StringLiteral, Template, TokensNotPrecedingObjectLiteral, TokensPrecedingExpression, WhiteSpace;
  RegularExpressionLiteral = /\/(?![*\/])(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\\]).|\\.)*(\/[$_\u200C\u200D\p{ID_Continue}]*|\\)?/uy;
  Punctuator = /--|\+\+|=>|\.{3}|\??\.(?!\d)|(?:&&|\|\||\?\?|[+\-%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2}|\/(?![\/*]))=?|[?~,:;[\](){}]/y;
  Identifier = /(\x23?)(?=[$_\p{ID_Start}\\])(?:[$_\u200C\u200D\p{ID_Continue}]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+/uy;
  StringLiteral = /(['"])(?:(?!\1)[^\\\n\r]|\\(?:\r\n|[^]))*(\1)?/y;
  NumericLiteral = /(?:0[xX][\da-fA-F](?:_?[\da-fA-F])*|0[oO][0-7](?:_?[0-7])*|0[bB][01](?:_?[01])*)n?|0n|[1-9](?:_?\d)*n|(?:(?:0(?!\d)|0\d*[89]\d*|[1-9](?:_?\d)*)(?:\.(?:\d(?:_?\d)*)?)?|\.\d(?:_?\d)*)(?:[eE][+-]?\d(?:_?\d)*)?|0[0-7]+/y;
  Template = /[`}](?:[^`\\$]|\\[^]|\$(?!\{))*(`|\$\{)?/y;
  WhiteSpace = /[\t\v\f\ufeff\p{Zs}]+/uy;
  LineTerminatorSequence = /\r?\n|[\r\u2028\u2029]/y;
  MultiLineComment = /\/\*(?:[^*]|\*(?!\/))*(\*\/)?/y;
  SingleLineComment = /\/\/.*/y;
  JSXPunctuator = /[<>.:={}]|\/(?![\/*])/y;
  JSXIdentifier = /[$_\p{ID_Start}][$_\u200C\u200D\p{ID_Continue}-]*/uy;
  JSXString = /(['"])(?:(?!\1)[^])*(\1)?/y;
  JSXText = /[^<>{}]+/y;
  TokensPrecedingExpression = /^(?:[\/+-]|\.{3}|\?(?:InterpolationIn(?:JSX|Template)|NoLineTerminatorHere|NonExpressionParenEnd|UnaryIncDec))?$|[{}([,;<>=*%&|^!~?:]$/;
  TokensNotPrecedingObjectLiteral = /^(?:=>|[;\]){}]|else|\?(?:NoLineTerminatorHere|NonExpressionParenEnd))?$/;
  KeywordsWithExpressionAfter = /^(?:await|case|default|delete|do|else|instanceof|new|return|throw|typeof|void|yield)$/;
  KeywordsWithNoLineTerminatorAfter = /^(?:return|throw|yield)$/;
  Newline = RegExp(LineTerminatorSequence.source);
  jsTokens_1 = function* (input, { jsx = false } = {}) {
    var braces, firstCodePoint, isExpression, lastIndex, lastSignificantToken, length, match, mode, nextLastIndex, nextLastSignificantToken, parenNesting, postfixIncDec, punctuator, stack;
    ({ length } = input);
    lastIndex = 0;
    lastSignificantToken = "";
    stack = [{ tag: "JS" }];
    braces = [];
    parenNesting = 0;
    postfixIncDec = false;
    while (lastIndex < length) {
      mode = stack[stack.length - 1];
      switch (mode.tag) {
        case "JS":
        case "JSNonExpressionParen":
        case "InterpolationInTemplate":
        case "InterpolationInJSX":
          if (input[lastIndex] === "/" && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken))) {
            RegularExpressionLiteral.lastIndex = lastIndex;
            if (match = RegularExpressionLiteral.exec(input)) {
              lastIndex = RegularExpressionLiteral.lastIndex;
              lastSignificantToken = match[0];
              postfixIncDec = true;
              yield {
                type: "RegularExpressionLiteral",
                value: match[0],
                closed: match[1] !== void 0 && match[1] !== "\\"
              };
              continue;
            }
          }
          Punctuator.lastIndex = lastIndex;
          if (match = Punctuator.exec(input)) {
            punctuator = match[0];
            nextLastIndex = Punctuator.lastIndex;
            nextLastSignificantToken = punctuator;
            switch (punctuator) {
              case "(":
                if (lastSignificantToken === "?NonExpressionParenKeyword") {
                  stack.push({
                    tag: "JSNonExpressionParen",
                    nesting: parenNesting
                  });
                }
                parenNesting++;
                postfixIncDec = false;
                break;
              case ")":
                parenNesting--;
                postfixIncDec = true;
                if (mode.tag === "JSNonExpressionParen" && parenNesting === mode.nesting) {
                  stack.pop();
                  nextLastSignificantToken = "?NonExpressionParenEnd";
                  postfixIncDec = false;
                }
                break;
              case "{":
                Punctuator.lastIndex = 0;
                isExpression = !TokensNotPrecedingObjectLiteral.test(lastSignificantToken) && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken));
                braces.push(isExpression);
                postfixIncDec = false;
                break;
              case "}":
                switch (mode.tag) {
                  case "InterpolationInTemplate":
                    if (braces.length === mode.nesting) {
                      Template.lastIndex = lastIndex;
                      match = Template.exec(input);
                      lastIndex = Template.lastIndex;
                      lastSignificantToken = match[0];
                      if (match[1] === "${") {
                        lastSignificantToken = "?InterpolationInTemplate";
                        postfixIncDec = false;
                        yield {
                          type: "TemplateMiddle",
                          value: match[0]
                        };
                      } else {
                        stack.pop();
                        postfixIncDec = true;
                        yield {
                          type: "TemplateTail",
                          value: match[0],
                          closed: match[1] === "`"
                        };
                      }
                      continue;
                    }
                    break;
                  case "InterpolationInJSX":
                    if (braces.length === mode.nesting) {
                      stack.pop();
                      lastIndex += 1;
                      lastSignificantToken = "}";
                      yield {
                        type: "JSXPunctuator",
                        value: "}"
                      };
                      continue;
                    }
                }
                postfixIncDec = braces.pop();
                nextLastSignificantToken = postfixIncDec ? "?ExpressionBraceEnd" : "}";
                break;
              case "]":
                postfixIncDec = true;
                break;
              case "++":
              case "--":
                nextLastSignificantToken = postfixIncDec ? "?PostfixIncDec" : "?UnaryIncDec";
                break;
              case "<":
                if (jsx && (TokensPrecedingExpression.test(lastSignificantToken) || KeywordsWithExpressionAfter.test(lastSignificantToken))) {
                  stack.push({ tag: "JSXTag" });
                  lastIndex += 1;
                  lastSignificantToken = "<";
                  yield {
                    type: "JSXPunctuator",
                    value: punctuator
                  };
                  continue;
                }
                postfixIncDec = false;
                break;
              default:
                postfixIncDec = false;
            }
            lastIndex = nextLastIndex;
            lastSignificantToken = nextLastSignificantToken;
            yield {
              type: "Punctuator",
              value: punctuator
            };
            continue;
          }
          Identifier.lastIndex = lastIndex;
          if (match = Identifier.exec(input)) {
            lastIndex = Identifier.lastIndex;
            nextLastSignificantToken = match[0];
            switch (match[0]) {
              case "for":
              case "if":
              case "while":
              case "with":
                if (lastSignificantToken !== "." && lastSignificantToken !== "?.") {
                  nextLastSignificantToken = "?NonExpressionParenKeyword";
                }
            }
            lastSignificantToken = nextLastSignificantToken;
            postfixIncDec = !KeywordsWithExpressionAfter.test(match[0]);
            yield {
              type: match[1] === "#" ? "PrivateIdentifier" : "IdentifierName",
              value: match[0]
            };
            continue;
          }
          StringLiteral.lastIndex = lastIndex;
          if (match = StringLiteral.exec(input)) {
            lastIndex = StringLiteral.lastIndex;
            lastSignificantToken = match[0];
            postfixIncDec = true;
            yield {
              type: "StringLiteral",
              value: match[0],
              closed: match[2] !== void 0
            };
            continue;
          }
          NumericLiteral.lastIndex = lastIndex;
          if (match = NumericLiteral.exec(input)) {
            lastIndex = NumericLiteral.lastIndex;
            lastSignificantToken = match[0];
            postfixIncDec = true;
            yield {
              type: "NumericLiteral",
              value: match[0]
            };
            continue;
          }
          Template.lastIndex = lastIndex;
          if (match = Template.exec(input)) {
            lastIndex = Template.lastIndex;
            lastSignificantToken = match[0];
            if (match[1] === "${") {
              lastSignificantToken = "?InterpolationInTemplate";
              stack.push({
                tag: "InterpolationInTemplate",
                nesting: braces.length
              });
              postfixIncDec = false;
              yield {
                type: "TemplateHead",
                value: match[0]
              };
            } else {
              postfixIncDec = true;
              yield {
                type: "NoSubstitutionTemplate",
                value: match[0],
                closed: match[1] === "`"
              };
            }
            continue;
          }
          break;
        case "JSXTag":
        case "JSXTagEnd":
          JSXPunctuator.lastIndex = lastIndex;
          if (match = JSXPunctuator.exec(input)) {
            lastIndex = JSXPunctuator.lastIndex;
            nextLastSignificantToken = match[0];
            switch (match[0]) {
              case "<":
                stack.push({ tag: "JSXTag" });
                break;
              case ">":
                stack.pop();
                if (lastSignificantToken === "/" || mode.tag === "JSXTagEnd") {
                  nextLastSignificantToken = "?JSX";
                  postfixIncDec = true;
                } else {
                  stack.push({ tag: "JSXChildren" });
                }
                break;
              case "{":
                stack.push({
                  tag: "InterpolationInJSX",
                  nesting: braces.length
                });
                nextLastSignificantToken = "?InterpolationInJSX";
                postfixIncDec = false;
                break;
              case "/":
                if (lastSignificantToken === "<") {
                  stack.pop();
                  if (stack[stack.length - 1].tag === "JSXChildren") {
                    stack.pop();
                  }
                  stack.push({ tag: "JSXTagEnd" });
                }
            }
            lastSignificantToken = nextLastSignificantToken;
            yield {
              type: "JSXPunctuator",
              value: match[0]
            };
            continue;
          }
          JSXIdentifier.lastIndex = lastIndex;
          if (match = JSXIdentifier.exec(input)) {
            lastIndex = JSXIdentifier.lastIndex;
            lastSignificantToken = match[0];
            yield {
              type: "JSXIdentifier",
              value: match[0]
            };
            continue;
          }
          JSXString.lastIndex = lastIndex;
          if (match = JSXString.exec(input)) {
            lastIndex = JSXString.lastIndex;
            lastSignificantToken = match[0];
            yield {
              type: "JSXString",
              value: match[0],
              closed: match[2] !== void 0
            };
            continue;
          }
          break;
        case "JSXChildren":
          JSXText.lastIndex = lastIndex;
          if (match = JSXText.exec(input)) {
            lastIndex = JSXText.lastIndex;
            lastSignificantToken = match[0];
            yield {
              type: "JSXText",
              value: match[0]
            };
            continue;
          }
          switch (input[lastIndex]) {
            case "<":
              stack.push({ tag: "JSXTag" });
              lastIndex++;
              lastSignificantToken = "<";
              yield {
                type: "JSXPunctuator",
                value: "<"
              };
              continue;
            case "{":
              stack.push({
                tag: "InterpolationInJSX",
                nesting: braces.length
              });
              lastIndex++;
              lastSignificantToken = "?InterpolationInJSX";
              postfixIncDec = false;
              yield {
                type: "JSXPunctuator",
                value: "{"
              };
              continue;
          }
      }
      WhiteSpace.lastIndex = lastIndex;
      if (match = WhiteSpace.exec(input)) {
        lastIndex = WhiteSpace.lastIndex;
        yield {
          type: "WhiteSpace",
          value: match[0]
        };
        continue;
      }
      LineTerminatorSequence.lastIndex = lastIndex;
      if (match = LineTerminatorSequence.exec(input)) {
        lastIndex = LineTerminatorSequence.lastIndex;
        postfixIncDec = false;
        if (KeywordsWithNoLineTerminatorAfter.test(lastSignificantToken)) {
          lastSignificantToken = "?NoLineTerminatorHere";
        }
        yield {
          type: "LineTerminatorSequence",
          value: match[0]
        };
        continue;
      }
      MultiLineComment.lastIndex = lastIndex;
      if (match = MultiLineComment.exec(input)) {
        lastIndex = MultiLineComment.lastIndex;
        if (Newline.test(match[0])) {
          postfixIncDec = false;
          if (KeywordsWithNoLineTerminatorAfter.test(lastSignificantToken)) {
            lastSignificantToken = "?NoLineTerminatorHere";
          }
        }
        yield {
          type: "MultiLineComment",
          value: match[0],
          closed: match[1] !== void 0
        };
        continue;
      }
      SingleLineComment.lastIndex = lastIndex;
      if (match = SingleLineComment.exec(input)) {
        lastIndex = SingleLineComment.lastIndex;
        postfixIncDec = false;
        yield {
          type: "SingleLineComment",
          value: match[0]
        };
        continue;
      }
      firstCodePoint = String.fromCodePoint(input.codePointAt(lastIndex));
      lastIndex += firstCodePoint.length;
      lastSignificantToken = firstCodePoint;
      postfixIncDec = false;
      yield {
        type: mode.tag.startsWith("JSX") ? "JSXInvalid" : "Invalid",
        value: firstCodePoint
      };
    }
    return void 0;
  };
  return jsTokens_1;
}
requireJsTokens();
var reservedWords = {
  keyword: [
    "break",
    "case",
    "catch",
    "continue",
    "debugger",
    "default",
    "do",
    "else",
    "finally",
    "for",
    "function",
    "if",
    "return",
    "switch",
    "throw",
    "try",
    "var",
    "const",
    "while",
    "with",
    "new",
    "this",
    "super",
    "class",
    "extends",
    "export",
    "import",
    "null",
    "true",
    "false",
    "in",
    "instanceof",
    "typeof",
    "void",
    "delete"
  ],
  strict: [
    "implements",
    "interface",
    "let",
    "package",
    "private",
    "protected",
    "public",
    "static",
    "yield"
  ]
};
new Set(reservedWords.keyword);
new Set(reservedWords.strict);
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
const intToChar = new Uint8Array(64);
const charToInt = new Uint8Array(128);
for (let i = 0; i < chars.length; i++) {
  const c = chars.charCodeAt(i);
  intToChar[i] = c;
  charToInt[c] = i;
}
var UrlType;
(function(UrlType2) {
  UrlType2[UrlType2["Empty"] = 1] = "Empty";
  UrlType2[UrlType2["Hash"] = 2] = "Hash";
  UrlType2[UrlType2["Query"] = 3] = "Query";
  UrlType2[UrlType2["RelativePath"] = 4] = "RelativePath";
  UrlType2[UrlType2["AbsolutePath"] = 5] = "AbsolutePath";
  UrlType2[UrlType2["SchemeRelative"] = 6] = "SchemeRelative";
  UrlType2[UrlType2["Absolute"] = 7] = "Absolute";
})(UrlType || (UrlType = {}));
const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index2 = arguments_.length - 1; index2 >= -1 && !resolvedAbsolute; index2--) {
    const path = index2 >= 0 ? arguments_[index2] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index2 = 0; index2 <= path.length; ++index2) {
    if (index2 < path.length) {
      char = path[index2];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index2 - 1 || dots === 1) ;
      else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index2;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index2;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index2)}`;
        } else {
          res = path.slice(lastSlash + 1, index2);
        }
        lastSegmentLength = index2 - lastSlash - 1;
      }
      lastSlash = index2;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p2) {
  return _IS_ABSOLUTE_RE.test(p2);
};
const CHROME_IE_STACK_REGEXP = /^\s*at .*(?:\S:\d+|\(native\))/m;
const SAFARI_NATIVE_CODE_REGEXP = /^(?:eval@)?(?:\[native code\])?$/;
function extractLocation(urlLike) {
  if (!urlLike.includes(":")) {
    return [urlLike];
  }
  const regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
  const parts = regExp.exec(urlLike.replace(/^\(|\)$/g, ""));
  if (!parts) {
    return [urlLike];
  }
  let url = parts[1];
  if (url.startsWith("async ")) {
    url = url.slice(6);
  }
  if (url.startsWith("http:") || url.startsWith("https:")) {
    const urlObj = new URL(url);
    urlObj.searchParams.delete("import");
    urlObj.searchParams.delete("browserv");
    url = urlObj.pathname + urlObj.hash + urlObj.search;
  }
  if (url.startsWith("/@fs/")) {
    const isWindows = /^\/@fs\/[a-zA-Z]:\//.test(url);
    url = url.slice(isWindows ? 5 : 4);
  }
  return [
    url,
    parts[2] || void 0,
    parts[3] || void 0
  ];
}
function parseSingleFFOrSafariStack(raw) {
  let line = raw.trim();
  if (SAFARI_NATIVE_CODE_REGEXP.test(line)) {
    return null;
  }
  if (line.includes(" > eval")) {
    line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1");
  }
  if (!line.includes("@") && !line.includes(":")) {
    return null;
  }
  const functionNameRegex = /((.*".+"[^@]*)?[^@]*)(@)/;
  const matches = line.match(functionNameRegex);
  const functionName = matches && matches[1] ? matches[1] : void 0;
  const [url, lineNumber, columnNumber] = extractLocation(line.replace(functionNameRegex, ""));
  if (!url || !lineNumber || !columnNumber) {
    return null;
  }
  return {
    file: url,
    method: functionName || "",
    line: Number.parseInt(lineNumber),
    column: Number.parseInt(columnNumber)
  };
}
function parseSingleStack(raw) {
  const line = raw.trim();
  if (!CHROME_IE_STACK_REGEXP.test(line)) {
    return parseSingleFFOrSafariStack(line);
  }
  return parseSingleV8Stack(line);
}
function parseSingleV8Stack(raw) {
  let line = raw.trim();
  if (!CHROME_IE_STACK_REGEXP.test(line)) {
    return null;
  }
  if (line.includes("(eval ")) {
    line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, "");
  }
  let sanitizedLine = line.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
  const location2 = sanitizedLine.match(/ (\(.+\)$)/);
  sanitizedLine = location2 ? sanitizedLine.replace(location2[0], "") : sanitizedLine;
  const [url, lineNumber, columnNumber] = extractLocation(location2 ? location2[1] : sanitizedLine);
  let method = location2 && sanitizedLine || "";
  let file = url && ["eval", "<anonymous>"].includes(url) ? void 0 : url;
  if (!file || !lineNumber || !columnNumber) {
    return null;
  }
  if (method.startsWith("async ")) {
    method = method.slice(6);
  }
  if (file.startsWith("file://")) {
    file = file.slice(7);
  }
  file = file.startsWith("node:") || file.startsWith("internal:") ? file : resolve(file);
  if (method) {
    method = method.replace(/__vite_ssr_import_\d+__\./g, "");
  }
  return {
    method,
    file,
    line: Number.parseInt(lineNumber),
    column: Number.parseInt(columnNumber)
  };
}
function createCompilerHints(options) {
  const globalThisAccessor = (options === null || options === void 0 ? void 0 : options.globalThisKey) || "__vitest_mocker__";
  function _mocker() {
    return typeof globalThis[globalThisAccessor] !== "undefined" ? globalThis[globalThisAccessor] : new Proxy({}, { get(_, name) {
      throw new Error(`Vitest mocker was not initialized in this environment. vi.${String(name)}() is forbidden.`);
    } });
  }
  return {
    hoisted(factory) {
      if (typeof factory !== "function") {
        throw new TypeError(`vi.hoisted() expects a function, but received a ${typeof factory}`);
      }
      return factory();
    },
    mock(path, factory) {
      if (typeof path !== "string") {
        throw new TypeError(`vi.mock() expects a string path, but received a ${typeof path}`);
      }
      const importer = getImporter("mock");
      _mocker().queueMock(path, importer, typeof factory === "function" ? () => factory(() => _mocker().importActual(path, importer)) : factory);
    },
    unmock(path) {
      if (typeof path !== "string") {
        throw new TypeError(`vi.unmock() expects a string path, but received a ${typeof path}`);
      }
      _mocker().queueUnmock(path, getImporter("unmock"));
    },
    doMock(path, factory) {
      if (typeof path !== "string") {
        throw new TypeError(`vi.doMock() expects a string path, but received a ${typeof path}`);
      }
      const importer = getImporter("doMock");
      _mocker().queueMock(path, importer, typeof factory === "function" ? () => factory(() => _mocker().importActual(path, importer)) : factory);
    },
    doUnmock(path) {
      if (typeof path !== "string") {
        throw new TypeError(`vi.doUnmock() expects a string path, but received a ${typeof path}`);
      }
      _mocker().queueUnmock(path, getImporter("doUnmock"));
    },
    async importActual(path) {
      return _mocker().importActual(path, getImporter("importActual"));
    },
    async importMock(path) {
      return _mocker().importMock(path, getImporter("importMock"));
    }
  };
}
function getImporter(name) {
  const stackTrace = /* @__PURE__ */ createSimpleStackTrace({ stackTraceLimit: 5 });
  const stackArray = stackTrace.split("\n");
  const importerStackIndex = stackArray.findIndex((stack2) => {
    return stack2.includes(` at Object.${name}`) || stack2.includes(`${name}@`);
  });
  const stack = /* @__PURE__ */ parseSingleStack(stackArray[importerStackIndex + 1]);
  return (stack === null || stack === void 0 ? void 0 : stack.file) || "";
}
const { now } = Date;
class ModuleMocker {
  constructor(interceptor, rpc2, spyOn, config) {
    __publicField(this, "registry", new MockerRegistry());
    __publicField(this, "queue", /* @__PURE__ */ new Set());
    __publicField(this, "mockedIds", /* @__PURE__ */ new Set());
    this.interceptor = interceptor;
    this.rpc = rpc2;
    this.spyOn = spyOn;
    this.config = config;
  }
  async prepare() {
    if (!this.queue.size) {
      return;
    }
    await Promise.all([...this.queue.values()]);
  }
  async resolveFactoryModule(id) {
    const mock = this.registry.get(id);
    if (!mock || mock.type !== "manual") {
      throw new Error(`Mock ${id} wasn't registered. This is probably a Vitest error. Please, open a new issue with reproduction.`);
    }
    const result = await mock.resolve();
    return result;
  }
  getFactoryModule(id) {
    const mock = this.registry.get(id);
    if (!mock || mock.type !== "manual") {
      throw new Error(`Mock ${id} wasn't registered. This is probably a Vitest error. Please, open a new issue with reproduction.`);
    }
    if (!mock.cache) {
      throw new Error(`Mock ${id} wasn't resolved. This is probably a Vitest error. Please, open a new issue with reproduction.`);
    }
    return mock.cache;
  }
  async invalidate() {
    const ids = Array.from(this.mockedIds);
    if (!ids.length) {
      return;
    }
    await this.rpc.invalidate(ids);
    await this.interceptor.invalidate();
    this.registry.clear();
  }
  async importActual(id, importer) {
    const resolved = await this.rpc.resolveId(id, importer);
    if (resolved == null) {
      throw new Error(`[vitest] Cannot resolve "${id}" imported from "${importer}"`);
    }
    const ext = extname(resolved.id);
    const url = new URL(resolved.url, location.href);
    const query = `_vitest_original&ext${ext}`;
    const actualUrl = `${url.pathname}${url.search ? `${url.search}&${query}` : `?${query}`}${url.hash}`;
    return this.wrapDynamicImport(() => import(
      /* @vite-ignore */
      actualUrl
    )).then((mod) => {
      if (!resolved.optimized || typeof mod.default === "undefined") {
        return mod;
      }
      const m = mod.default;
      return (m === null || m === void 0 ? void 0 : m.__esModule) ? m : {
        ...typeof m === "object" && !Array.isArray(m) || typeof m === "function" ? m : {},
        default: m
      };
    });
  }
  async importMock(rawId, importer) {
    await this.prepare();
    const { resolvedId, resolvedUrl, redirectUrl } = await this.rpc.resolveMock(rawId, importer, { mock: "auto" });
    const mockUrl = this.resolveMockPath(cleanVersion(resolvedUrl));
    let mock = this.registry.get(mockUrl);
    if (!mock) {
      if (redirectUrl) {
        const resolvedRedirect = new URL(this.resolveMockPath(cleanVersion(redirectUrl)), location.href).toString();
        mock = new RedirectedModule(rawId, resolvedId, mockUrl, resolvedRedirect);
      } else {
        mock = new AutomockedModule(rawId, resolvedId, mockUrl);
      }
    }
    if (mock.type === "manual") {
      return await mock.resolve();
    }
    if (mock.type === "automock" || mock.type === "autospy") {
      const url = new URL(`/@id/${resolvedId}`, location.href);
      const query = url.search ? `${url.search}&t=${now()}` : `?t=${now()}`;
      const moduleObject = await __vitePreload(() => import(
        /* @vite-ignore */
        `${url.pathname}${query}&mock=${mock.type}${url.hash}`
      ), true ? [] : void 0, import.meta.url);
      return this.mockObject(moduleObject, mock.type);
    }
    return import(
      /* @vite-ignore */
      mock.redirect
    );
  }
  mockObject(object, moduleType = "automock") {
    return mockObject({
      globalConstructors: {
        Object,
        Function,
        Array,
        Map,
        RegExp
      },
      spyOn: this.spyOn,
      type: moduleType
    }, object);
  }
  queueMock(rawId, importer, factoryOrOptions) {
    const promise = this.rpc.resolveMock(rawId, importer, { mock: typeof factoryOrOptions === "function" ? "factory" : (factoryOrOptions === null || factoryOrOptions === void 0 ? void 0 : factoryOrOptions.spy) ? "spy" : "auto" }).then(async ({ redirectUrl, resolvedId, resolvedUrl, needsInterop, mockType }) => {
      const mockUrl = this.resolveMockPath(cleanVersion(resolvedUrl));
      this.mockedIds.add(resolvedId);
      const factory = typeof factoryOrOptions === "function" ? async () => {
        const data = await factoryOrOptions();
        return needsInterop ? { default: data } : data;
      } : void 0;
      const mockRedirect = typeof redirectUrl === "string" ? new URL(this.resolveMockPath(cleanVersion(redirectUrl)), location.href).toString() : null;
      let module;
      if (mockType === "manual") {
        module = this.registry.register("manual", rawId, resolvedId, mockUrl, factory);
      } else if (mockType === "autospy") {
        module = this.registry.register("autospy", rawId, resolvedId, mockUrl);
      } else if (mockType === "redirect") {
        module = this.registry.register("redirect", rawId, resolvedId, mockUrl, mockRedirect);
      } else {
        module = this.registry.register("automock", rawId, resolvedId, mockUrl);
      }
      await this.interceptor.register(module);
    }).finally(() => {
      this.queue.delete(promise);
    });
    this.queue.add(promise);
  }
  queueUnmock(id, importer) {
    const promise = this.rpc.resolveId(id, importer).then(async (resolved) => {
      if (!resolved) {
        return;
      }
      const mockUrl = this.resolveMockPath(cleanVersion(resolved.url));
      this.mockedIds.add(resolved.id);
      this.registry.delete(mockUrl);
      await this.interceptor.delete(mockUrl);
    }).finally(() => {
      this.queue.delete(promise);
    });
    this.queue.add(promise);
  }
  // We need to await mock registration before importing the actual module
  // In case there is a mocked module in the import chain
  wrapDynamicImport(moduleFactory) {
    if (typeof moduleFactory === "function") {
      const promise = new Promise((resolve2, reject) => {
        this.prepare().finally(() => {
          moduleFactory().then(resolve2, reject);
        });
      });
      return promise;
    }
    return moduleFactory;
  }
  resolveMockPath(path) {
    const config = this.config;
    const fsRoot = join("/@fs/", config.root);
    if (path.startsWith(config.root)) {
      return path.slice(config.root.length);
    }
    if (path.startsWith(fsRoot)) {
      return path.slice(fsRoot.length);
    }
    return path;
  }
}
const versionRegexp = /(\?|&)v=\w{8}/;
function cleanVersion(url) {
  return url.replace(versionRegexp, "");
}
class ModuleMockerInterceptor {
  constructor() {
    // A registry for runtime mocks (e.g., `sb.mock('path', () => ({}))`)
    __publicField(this, "mocks", new MockerRegistry());
  }
  /**
   * Called by ModuleMocker when `sb.mock()` is executed. We just store the mock in our registry.
   * The dynamic MSW handler will pick it up on the next relevant network request. Currently, we
   * don't use this.mocks in any way. Mocks will be registered in the user's preview file and live
   * until the end. There is no way to invalidate or delete them.
   */
  async register(module) {
    this.mocks.add(module);
  }
  async delete(url) {
    this.mocks.delete(url);
  }
  async invalidate() {
    this.mocks.clear();
  }
}
const rpc = (method) => {
  switch (method) {
    case "resolveId":
      return Promise.resolve({
        id: "",
        url: "",
        optimized: false
      });
    case "resolveMock":
      return Promise.resolve({
        mockType: "dummy",
        resolvedId: "",
        resolvedUrl: "",
        redirectUrl: "",
        needsInterop: false
      });
    case "invalidate":
      return Promise.resolve();
  }
};
class BuildModuleMocker extends ModuleMocker {
  queueMock() {
  }
}
function registerModuleMocker(interceptor) {
  const mocker = new BuildModuleMocker(
    interceptor("__vitest_mocker__"),
    {
      resolveId(id, importer) {
        return rpc("resolveId");
      },
      resolveMock(id, importer, options) {
        return rpc("resolveMock");
      },
      async invalidate(ids) {
        return rpc("invalidate");
      }
    },
    (...args) => {
      return globalThis.__STORYBOOK_MODULE_TEST__.spyOn(...args);
    },
    {
      root: ""
    }
  );
  globalThis["__vitest_mocker__"] = mocker;
  return createCompilerHints({
    globalThisKey: "__vitest_mocker__"
  });
}
globalThis.__STORYBOOK_MOCKER__ = registerModuleMocker(() => new ModuleMockerInterceptor());
