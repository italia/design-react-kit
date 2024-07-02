var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
const { addons } = __STORYBOOK_MODULE_PREVIEW_API__;
const { once } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
const { FORCE_REMOUNT, STORY_RENDER_PHASE_CHANGED, SET_CURRENT_STORY } = __STORYBOOK_MODULE_CORE_EVENTS__;
const { global } = __STORYBOOK_MODULE_GLOBAL__;
var __create = Object.create;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = ((x) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(x, { get: (a, b) => (typeof require < "u" ? require : a)[b] }) : x)(function(x) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function") for (let key of __getOwnPropNames(from)) !__hasOwnProp.call(to, key) && key !== except && __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(__defProp2(target, "default", { value: mod, enumerable: true }), mod));
var require_ansi_styles = __commonJS({ "../../node_modules/pretty-format/node_modules/ansi-styles/index.js"(exports, module) {
  var wrapAnsi256 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`, wrapAnsi16m = (offset = 0) => (red, green, blue) => `\x1B[${38 + offset};2;${red};${green};${blue}m`;
  function assembleStyles() {
    let codes = /* @__PURE__ */ new Map(), styles = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], overline: [53, 55], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], blackBright: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };
    styles.color.gray = styles.color.blackBright, styles.bgColor.bgGray = styles.bgColor.bgBlackBright, styles.color.grey = styles.color.blackBright, styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
    for (let [groupName, group] of Object.entries(styles)) {
      for (let [styleName, style] of Object.entries(group)) styles[styleName] = { open: `\x1B[${style[0]}m`, close: `\x1B[${style[1]}m` }, group[styleName] = styles[styleName], codes.set(style[0], style[1]);
      Object.defineProperty(styles, groupName, { value: group, enumerable: false });
    }
    return Object.defineProperty(styles, "codes", { value: codes, enumerable: false }), styles.color.close = "\x1B[39m", styles.bgColor.close = "\x1B[49m", styles.color.ansi256 = wrapAnsi256(), styles.color.ansi16m = wrapAnsi16m(), styles.bgColor.ansi256 = wrapAnsi256(10), styles.bgColor.ansi16m = wrapAnsi16m(10), Object.defineProperties(styles, { rgbToAnsi256: { value: (red, green, blue) => red === green && green === blue ? red < 8 ? 16 : red > 248 ? 231 : Math.round((red - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5), enumerable: false }, hexToRgb: { value: (hex) => {
      let matches = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(hex.toString(16));
      if (!matches) return [0, 0, 0];
      let { colorString } = matches.groups;
      colorString.length === 3 && (colorString = colorString.split("").map((character) => character + character).join(""));
      let integer = Number.parseInt(colorString, 16);
      return [integer >> 16 & 255, integer >> 8 & 255, integer & 255];
    }, enumerable: false }, hexToAnsi256: { value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)), enumerable: false } }), styles;
  }
  Object.defineProperty(module, "exports", { enumerable: true, get: assembleStyles });
} });
var require_collections = __commonJS({ "../../node_modules/pretty-format/build/collections.js"(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.printIteratorEntries = printIteratorEntries;
  exports.printIteratorValues = printIteratorValues;
  exports.printListItems = printListItems;
  exports.printObjectProperties = printObjectProperties;
  var getKeysOfEnumerableProperties = (object, compareKeys) => {
    let rawKeys = Object.keys(object), keys = compareKeys !== null ? rawKeys.sort(compareKeys) : rawKeys;
    return Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(object).forEach((symbol) => {
      Object.getOwnPropertyDescriptor(object, symbol).enumerable && keys.push(symbol);
    }), keys;
  };
  function printIteratorEntries(iterator, config, indentation, depth, refs, printer, separator = ": ") {
    let result = "", width = 0, current = iterator.next();
    if (!current.done) {
      result += config.spacingOuter;
      let indentationNext = indentation + config.indent;
      for (; !current.done; ) {
        if (result += indentationNext, width++ === config.maxWidth) {
          result += "…";
          break;
        }
        let name = printer(current.value[0], config, indentationNext, depth, refs), value = printer(current.value[1], config, indentationNext, depth, refs);
        result += name + separator + value, current = iterator.next(), current.done ? config.min || (result += ",") : result += `,${config.spacingInner}`;
      }
      result += config.spacingOuter + indentation;
    }
    return result;
  }
  function printIteratorValues(iterator, config, indentation, depth, refs, printer) {
    let result = "", width = 0, current = iterator.next();
    if (!current.done) {
      result += config.spacingOuter;
      let indentationNext = indentation + config.indent;
      for (; !current.done; ) {
        if (result += indentationNext, width++ === config.maxWidth) {
          result += "…";
          break;
        }
        result += printer(current.value, config, indentationNext, depth, refs), current = iterator.next(), current.done ? config.min || (result += ",") : result += `,${config.spacingInner}`;
      }
      result += config.spacingOuter + indentation;
    }
    return result;
  }
  function printListItems(list, config, indentation, depth, refs, printer) {
    let result = "";
    if (list.length) {
      result += config.spacingOuter;
      let indentationNext = indentation + config.indent;
      for (let i = 0; i < list.length; i++) {
        if (result += indentationNext, i === config.maxWidth) {
          result += "…";
          break;
        }
        i in list && (result += printer(list[i], config, indentationNext, depth, refs)), i < list.length - 1 ? result += `,${config.spacingInner}` : config.min || (result += ",");
      }
      result += config.spacingOuter + indentation;
    }
    return result;
  }
  function printObjectProperties(val, config, indentation, depth, refs, printer) {
    let result = "", keys = getKeysOfEnumerableProperties(val, config.compareKeys);
    if (keys.length) {
      result += config.spacingOuter;
      let indentationNext = indentation + config.indent;
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i], name = printer(key, config, indentationNext, depth, refs), value = printer(val[key], config, indentationNext, depth, refs);
        result += `${indentationNext + name}: ${value}`, i < keys.length - 1 ? result += `,${config.spacingInner}` : config.min || (result += ",");
      }
      result += config.spacingOuter + indentation;
    }
    return result;
  }
} });
var require_AsymmetricMatcher = __commonJS({ "../../node_modules/pretty-format/build/plugins/AsymmetricMatcher.js"(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.test = exports.serialize = exports.default = void 0;
  var _collections = require_collections(), Symbol2 = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol, asymmetricMatcher = typeof Symbol2 == "function" && Symbol2.for ? Symbol2.for("jest.asymmetricMatcher") : 1267621, SPACE = " ", serialize = (val, config, indentation, depth, refs, printer) => {
    let stringedValue = val.toString();
    if (stringedValue === "ArrayContaining" || stringedValue === "ArrayNotContaining") return ++depth > config.maxDepth ? `[${stringedValue}]` : `${stringedValue + SPACE}[${(0, _collections.printListItems)(val.sample, config, indentation, depth, refs, printer)}]`;
    if (stringedValue === "ObjectContaining" || stringedValue === "ObjectNotContaining") return ++depth > config.maxDepth ? `[${stringedValue}]` : `${stringedValue + SPACE}{${(0, _collections.printObjectProperties)(val.sample, config, indentation, depth, refs, printer)}}`;
    if (stringedValue === "StringMatching" || stringedValue === "StringNotMatching" || stringedValue === "StringContaining" || stringedValue === "StringNotContaining") return stringedValue + SPACE + printer(val.sample, config, indentation, depth, refs);
    if (typeof val.toAsymmetricMatcher != "function") throw new Error(`Asymmetric matcher ${val.constructor.name} does not implement toAsymmetricMatcher()`);
    return val.toAsymmetricMatcher();
  };
  exports.serialize = serialize;
  var test = (val) => val && val.$$typeof === asymmetricMatcher;
  exports.test = test;
  var plugin = { serialize, test }, _default = plugin;
  exports.default = _default;
} });
var require_DOMCollection = __commonJS({ "../../node_modules/pretty-format/build/plugins/DOMCollection.js"(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.test = exports.serialize = exports.default = void 0;
  var _collections = require_collections(), SPACE = " ", OBJECT_NAMES = ["DOMStringMap", "NamedNodeMap"], ARRAY_REGEXP = /^(HTML\w*Collection|NodeList)$/, testName = (name) => OBJECT_NAMES.indexOf(name) !== -1 || ARRAY_REGEXP.test(name), test = (val) => val && val.constructor && !!val.constructor.name && testName(val.constructor.name);
  exports.test = test;
  var isNamedNodeMap = (collection) => collection.constructor.name === "NamedNodeMap", serialize = (collection, config, indentation, depth, refs, printer) => {
    let name = collection.constructor.name;
    return ++depth > config.maxDepth ? `[${name}]` : (config.min ? "" : name + SPACE) + (OBJECT_NAMES.indexOf(name) !== -1 ? `{${(0, _collections.printObjectProperties)(isNamedNodeMap(collection) ? Array.from(collection).reduce((props, attribute) => (props[attribute.name] = attribute.value, props), {}) : { ...collection }, config, indentation, depth, refs, printer)}}` : `[${(0, _collections.printListItems)(Array.from(collection), config, indentation, depth, refs, printer)}]`);
  };
  exports.serialize = serialize;
  var plugin = { serialize, test }, _default = plugin;
  exports.default = _default;
} });
var require_escapeHTML = __commonJS({ "../../node_modules/pretty-format/build/plugins/lib/escapeHTML.js"(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = escapeHTML;
  function escapeHTML(str) {
    return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
} });
var require_markup = __commonJS({ "../../node_modules/pretty-format/build/plugins/lib/markup.js"(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.printText = exports.printProps = exports.printElementAsLeaf = exports.printElement = exports.printComment = exports.printChildren = void 0;
  var _escapeHTML = _interopRequireDefault(require_escapeHTML());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var printProps = (keys, props, config, indentation, depth, refs, printer) => {
    let indentationNext = indentation + config.indent, colors = config.colors;
    return keys.map((key) => {
      let value = props[key], printed = printer(value, config, indentationNext, depth, refs);
      return typeof value != "string" && (printed.indexOf(`
`) !== -1 && (printed = config.spacingOuter + indentationNext + printed + config.spacingOuter + indentation), printed = `{${printed}}`), `${config.spacingInner + indentation + colors.prop.open + key + colors.prop.close}=${colors.value.open}${printed}${colors.value.close}`;
    }).join("");
  };
  exports.printProps = printProps;
  var printChildren = (children, config, indentation, depth, refs, printer) => children.map((child) => config.spacingOuter + indentation + (typeof child == "string" ? printText(child, config) : printer(child, config, indentation, depth, refs))).join("");
  exports.printChildren = printChildren;
  var printText = (text, config) => {
    let contentColor = config.colors.content;
    return contentColor.open + (0, _escapeHTML.default)(text) + contentColor.close;
  };
  exports.printText = printText;
  var printComment = (comment, config) => {
    let commentColor = config.colors.comment;
    return `${commentColor.open}<!--${(0, _escapeHTML.default)(comment)}-->${commentColor.close}`;
  };
  exports.printComment = printComment;
  var printElement = (type, printedProps, printedChildren, config, indentation) => {
    let tagColor = config.colors.tag;
    return `${tagColor.open}<${type}${printedProps && tagColor.close + printedProps + config.spacingOuter + indentation + tagColor.open}${printedChildren ? `>${tagColor.close}${printedChildren}${config.spacingOuter}${indentation}${tagColor.open}</${type}` : `${printedProps && !config.min ? "" : " "}/`}>${tagColor.close}`;
  };
  exports.printElement = printElement;
  var printElementAsLeaf = (type, config) => {
    let tagColor = config.colors.tag;
    return `${tagColor.open}<${type}${tagColor.close} …${tagColor.open} />${tagColor.close}`;
  };
  exports.printElementAsLeaf = printElementAsLeaf;
} });
var require_DOMElement = __commonJS({ "../../node_modules/pretty-format/build/plugins/DOMElement.js"(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.test = exports.serialize = exports.default = void 0;
  var _markup = require_markup(), ELEMENT_NODE = 1, TEXT_NODE = 3, COMMENT_NODE = 8, FRAGMENT_NODE = 11, ELEMENT_REGEXP = /^((HTML|SVG)\w*)?Element$/, testHasAttribute = (val) => {
    try {
      return typeof val.hasAttribute == "function" && val.hasAttribute("is");
    } catch {
      return false;
    }
  }, testNode = (val) => {
    let constructorName = val.constructor.name, { nodeType, tagName } = val, isCustomElement = typeof tagName == "string" && tagName.includes("-") || testHasAttribute(val);
    return nodeType === ELEMENT_NODE && (ELEMENT_REGEXP.test(constructorName) || isCustomElement) || nodeType === TEXT_NODE && constructorName === "Text" || nodeType === COMMENT_NODE && constructorName === "Comment" || nodeType === FRAGMENT_NODE && constructorName === "DocumentFragment";
  }, test = (val) => {
    var _a;
    return ((_a = val == null ? void 0 : val.constructor) == null ? void 0 : _a.name) && testNode(val);
  };
  exports.test = test;
  function nodeIsText(node) {
    return node.nodeType === TEXT_NODE;
  }
  function nodeIsComment(node) {
    return node.nodeType === COMMENT_NODE;
  }
  function nodeIsFragment(node) {
    return node.nodeType === FRAGMENT_NODE;
  }
  var serialize = (node, config, indentation, depth, refs, printer) => {
    if (nodeIsText(node)) return (0, _markup.printText)(node.data, config);
    if (nodeIsComment(node)) return (0, _markup.printComment)(node.data, config);
    let type = nodeIsFragment(node) ? "DocumentFragment" : node.tagName.toLowerCase();
    return ++depth > config.maxDepth ? (0, _markup.printElementAsLeaf)(type, config) : (0, _markup.printElement)(type, (0, _markup.printProps)(nodeIsFragment(node) ? [] : Array.from(node.attributes, (attr) => attr.name).sort(), nodeIsFragment(node) ? {} : Array.from(node.attributes).reduce((props, attribute) => (props[attribute.name] = attribute.value, props), {}), config, indentation + config.indent, depth, refs, printer), (0, _markup.printChildren)(Array.prototype.slice.call(node.childNodes || node.children), config, indentation + config.indent, depth, refs, printer), config, indentation);
  };
  exports.serialize = serialize;
  var plugin = { serialize, test }, _default = plugin;
  exports.default = _default;
} });
var require_Immutable = __commonJS({ "../../node_modules/pretty-format/build/plugins/Immutable.js"(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.test = exports.serialize = exports.default = void 0;
  var _collections = require_collections(), IS_ITERABLE_SENTINEL = "@@__IMMUTABLE_ITERABLE__@@", IS_LIST_SENTINEL = "@@__IMMUTABLE_LIST__@@", IS_KEYED_SENTINEL = "@@__IMMUTABLE_KEYED__@@", IS_MAP_SENTINEL = "@@__IMMUTABLE_MAP__@@", IS_ORDERED_SENTINEL = "@@__IMMUTABLE_ORDERED__@@", IS_RECORD_SENTINEL = "@@__IMMUTABLE_RECORD__@@", IS_SEQ_SENTINEL = "@@__IMMUTABLE_SEQ__@@", IS_SET_SENTINEL = "@@__IMMUTABLE_SET__@@", IS_STACK_SENTINEL = "@@__IMMUTABLE_STACK__@@", getImmutableName = (name) => `Immutable.${name}`, printAsLeaf = (name) => `[${name}]`, SPACE = " ", LAZY = "…", printImmutableEntries = (val, config, indentation, depth, refs, printer, type) => ++depth > config.maxDepth ? printAsLeaf(getImmutableName(type)) : `${getImmutableName(type) + SPACE}{${(0, _collections.printIteratorEntries)(val.entries(), config, indentation, depth, refs, printer)}}`;
  function getRecordEntries(val) {
    let i = 0;
    return { next() {
      if (i < val._keys.length) {
        let key = val._keys[i++];
        return { done: false, value: [key, val.get(key)] };
      }
      return { done: true, value: void 0 };
    } };
  }
  var printImmutableRecord = (val, config, indentation, depth, refs, printer) => {
    let name = getImmutableName(val._name || "Record");
    return ++depth > config.maxDepth ? printAsLeaf(name) : `${name + SPACE}{${(0, _collections.printIteratorEntries)(getRecordEntries(val), config, indentation, depth, refs, printer)}}`;
  }, printImmutableSeq = (val, config, indentation, depth, refs, printer) => {
    let name = getImmutableName("Seq");
    return ++depth > config.maxDepth ? printAsLeaf(name) : val[IS_KEYED_SENTINEL] ? `${name + SPACE}{${val._iter || val._object ? (0, _collections.printIteratorEntries)(val.entries(), config, indentation, depth, refs, printer) : LAZY}}` : `${name + SPACE}[${val._iter || val._array || val._collection || val._iterable ? (0, _collections.printIteratorValues)(val.values(), config, indentation, depth, refs, printer) : LAZY}]`;
  }, printImmutableValues = (val, config, indentation, depth, refs, printer, type) => ++depth > config.maxDepth ? printAsLeaf(getImmutableName(type)) : `${getImmutableName(type) + SPACE}[${(0, _collections.printIteratorValues)(val.values(), config, indentation, depth, refs, printer)}]`, serialize = (val, config, indentation, depth, refs, printer) => val[IS_MAP_SENTINEL] ? printImmutableEntries(val, config, indentation, depth, refs, printer, val[IS_ORDERED_SENTINEL] ? "OrderedMap" : "Map") : val[IS_LIST_SENTINEL] ? printImmutableValues(val, config, indentation, depth, refs, printer, "List") : val[IS_SET_SENTINEL] ? printImmutableValues(val, config, indentation, depth, refs, printer, val[IS_ORDERED_SENTINEL] ? "OrderedSet" : "Set") : val[IS_STACK_SENTINEL] ? printImmutableValues(val, config, indentation, depth, refs, printer, "Stack") : val[IS_SEQ_SENTINEL] ? printImmutableSeq(val, config, indentation, depth, refs, printer) : printImmutableRecord(val, config, indentation, depth, refs, printer);
  exports.serialize = serialize;
  var test = (val) => val && (val[IS_ITERABLE_SENTINEL] === true || val[IS_RECORD_SENTINEL] === true);
  exports.test = test;
  var plugin = { serialize, test }, _default = plugin;
  exports.default = _default;
} });
var require_react_is_development = __commonJS({ "../../node_modules/pretty-format/node_modules/react-is/cjs/react-is.development.js"(exports) {
  (function() {
    var REACT_ELEMENT_TYPE = Symbol.for("react.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_PROVIDER_TYPE = Symbol.for("react.provider"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_SERVER_CONTEXT_TYPE = Symbol.for("react.server_context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), enableScopeAPI = false, enableCacheElement = false, enableTransitionTracing = false, enableLegacyHidden = false, enableDebugTracing = false, REACT_MODULE_REFERENCE;
    REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
    function isValidElementType(type) {
      return !!(typeof type == "string" || typeof type == "function" || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing || typeof type == "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0));
    }
    function typeOf(object) {
      if (typeof object == "object" && object !== null) {
        var $$typeof = object.$$typeof;
        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;
            switch (type) {
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
              case REACT_SUSPENSE_LIST_TYPE:
                return type;
              default:
                var $$typeofType = type && type.$$typeof;
                switch ($$typeofType) {
                  case REACT_SERVER_CONTEXT_TYPE:
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;
                  default:
                    return $$typeof;
                }
            }
          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }
    }
    var ContextConsumer = REACT_CONTEXT_TYPE, ContextProvider = REACT_PROVIDER_TYPE, Element2 = REACT_ELEMENT_TYPE, ForwardRef = REACT_FORWARD_REF_TYPE, Fragment = REACT_FRAGMENT_TYPE, Lazy = REACT_LAZY_TYPE, Memo = REACT_MEMO_TYPE, Portal = REACT_PORTAL_TYPE, Profiler = REACT_PROFILER_TYPE, StrictMode = REACT_STRICT_MODE_TYPE, Suspense = REACT_SUSPENSE_TYPE, SuspenseList = REACT_SUSPENSE_LIST_TYPE, hasWarnedAboutDeprecatedIsAsyncMode = false, hasWarnedAboutDeprecatedIsConcurrentMode = false;
    function isAsyncMode(object) {
      return hasWarnedAboutDeprecatedIsAsyncMode || (hasWarnedAboutDeprecatedIsAsyncMode = true, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), false;
    }
    function isConcurrentMode(object) {
      return hasWarnedAboutDeprecatedIsConcurrentMode || (hasWarnedAboutDeprecatedIsConcurrentMode = true, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), false;
    }
    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement(object) {
      return typeof object == "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }
    function isSuspenseList(object) {
      return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
    }
    exports.ContextConsumer = ContextConsumer, exports.ContextProvider = ContextProvider, exports.Element = Element2, exports.ForwardRef = ForwardRef, exports.Fragment = Fragment, exports.Lazy = Lazy, exports.Memo = Memo, exports.Portal = Portal, exports.Profiler = Profiler, exports.StrictMode = StrictMode, exports.Suspense = Suspense, exports.SuspenseList = SuspenseList, exports.isAsyncMode = isAsyncMode, exports.isConcurrentMode = isConcurrentMode, exports.isContextConsumer = isContextConsumer, exports.isContextProvider = isContextProvider, exports.isElement = isElement, exports.isForwardRef = isForwardRef, exports.isFragment = isFragment, exports.isLazy = isLazy, exports.isMemo = isMemo, exports.isPortal = isPortal, exports.isProfiler = isProfiler, exports.isStrictMode = isStrictMode, exports.isSuspense = isSuspense, exports.isSuspenseList = isSuspenseList, exports.isValidElementType = isValidElementType, exports.typeOf = typeOf;
  })();
} });
var require_react_is = __commonJS({ "../../node_modules/pretty-format/node_modules/react-is/index.js"(exports, module) {
  module.exports = require_react_is_development();
} });
var require_ReactElement = __commonJS({ "../../node_modules/pretty-format/build/plugins/ReactElement.js"(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.test = exports.serialize = exports.default = void 0;
  var ReactIs = _interopRequireWildcard(require_react_is()), _markup = require_markup();
  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap != "function") return null;
    var cacheBabelInterop = /* @__PURE__ */ new WeakMap(), cacheNodeInterop = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop2) {
      return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }
  function _interopRequireWildcard(obj, nodeInterop) {
    if (obj && obj.__esModule) return obj;
    if (obj === null || typeof obj != "object" && typeof obj != "function") return { default: obj };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {}, hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      desc && (desc.get || desc.set) ? Object.defineProperty(newObj, key, desc) : newObj[key] = obj[key];
    }
    return newObj.default = obj, cache && cache.set(obj, newObj), newObj;
  }
  var getChildren = (arg, children = []) => (Array.isArray(arg) ? arg.forEach((item) => {
    getChildren(item, children);
  }) : arg != null && arg !== false && children.push(arg), children), getType3 = (element) => {
    let type = element.type;
    if (typeof type == "string") return type;
    if (typeof type == "function") return type.displayName || type.name || "Unknown";
    if (ReactIs.isFragment(element)) return "React.Fragment";
    if (ReactIs.isSuspense(element)) return "React.Suspense";
    if (typeof type == "object" && type !== null) {
      if (ReactIs.isContextProvider(element)) return "Context.Provider";
      if (ReactIs.isContextConsumer(element)) return "Context.Consumer";
      if (ReactIs.isForwardRef(element)) {
        if (type.displayName) return type.displayName;
        let functionName = type.render.displayName || type.render.name || "";
        return functionName !== "" ? `ForwardRef(${functionName})` : "ForwardRef";
      }
      if (ReactIs.isMemo(element)) {
        let functionName = type.displayName || type.type.displayName || type.type.name || "";
        return functionName !== "" ? `Memo(${functionName})` : "Memo";
      }
    }
    return "UNDEFINED";
  }, getPropKeys = (element) => {
    let { props } = element;
    return Object.keys(props).filter((key) => key !== "children" && props[key] !== void 0).sort();
  }, serialize = (element, config, indentation, depth, refs, printer) => ++depth > config.maxDepth ? (0, _markup.printElementAsLeaf)(getType3(element), config) : (0, _markup.printElement)(getType3(element), (0, _markup.printProps)(getPropKeys(element), element.props, config, indentation + config.indent, depth, refs, printer), (0, _markup.printChildren)(getChildren(element.props.children), config, indentation + config.indent, depth, refs, printer), config, indentation);
  exports.serialize = serialize;
  var test = (val) => val != null && ReactIs.isElement(val);
  exports.test = test;
  var plugin = { serialize, test }, _default = plugin;
  exports.default = _default;
} });
var require_ReactTestComponent = __commonJS({ "../../node_modules/pretty-format/build/plugins/ReactTestComponent.js"(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.test = exports.serialize = exports.default = void 0;
  var _markup = require_markup(), Symbol2 = globalThis["jest-symbol-do-not-touch"] || globalThis.Symbol, testSymbol = typeof Symbol2 == "function" && Symbol2.for ? Symbol2.for("react.test.json") : 245830487, getPropKeys = (object) => {
    let { props } = object;
    return props ? Object.keys(props).filter((key) => props[key] !== void 0).sort() : [];
  }, serialize = (object, config, indentation, depth, refs, printer) => ++depth > config.maxDepth ? (0, _markup.printElementAsLeaf)(object.type, config) : (0, _markup.printElement)(object.type, object.props ? (0, _markup.printProps)(getPropKeys(object), object.props, config, indentation + config.indent, depth, refs, printer) : "", object.children ? (0, _markup.printChildren)(object.children, config, indentation + config.indent, depth, refs, printer) : "", config, indentation);
  exports.serialize = serialize;
  var test = (val) => val && val.$$typeof === testSymbol;
  exports.test = test;
  var plugin = { serialize, test }, _default = plugin;
  exports.default = _default;
} });
var require_build = __commonJS({ "../../node_modules/pretty-format/build/index.js"(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = exports.DEFAULT_OPTIONS = void 0;
  exports.format = format3;
  exports.plugins = void 0;
  var _ansiStyles = _interopRequireDefault(require_ansi_styles()), _collections = require_collections(), _AsymmetricMatcher = _interopRequireDefault(require_AsymmetricMatcher()), _DOMCollection = _interopRequireDefault(require_DOMCollection()), _DOMElement = _interopRequireDefault(require_DOMElement()), _Immutable = _interopRequireDefault(require_Immutable()), _ReactElement = _interopRequireDefault(require_ReactElement()), _ReactTestComponent = _interopRequireDefault(require_ReactTestComponent());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var toString = Object.prototype.toString, toISOString = Date.prototype.toISOString, errorToString = Error.prototype.toString, regExpToString = RegExp.prototype.toString, getConstructorName = (val) => typeof val.constructor == "function" && val.constructor.name || "Object", isWindow = (val) => typeof window < "u" && val === window, SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/, NEWLINE_REGEXP = /\n/gi, PrettyFormatPluginError = class extends Error {
    constructor(message, stack) {
      super(message), this.stack = stack, this.name = this.constructor.name;
    }
  };
  function isToStringedArrayType(toStringed) {
    return toStringed === "[object Array]" || toStringed === "[object ArrayBuffer]" || toStringed === "[object DataView]" || toStringed === "[object Float32Array]" || toStringed === "[object Float64Array]" || toStringed === "[object Int8Array]" || toStringed === "[object Int16Array]" || toStringed === "[object Int32Array]" || toStringed === "[object Uint8Array]" || toStringed === "[object Uint8ClampedArray]" || toStringed === "[object Uint16Array]" || toStringed === "[object Uint32Array]";
  }
  function printNumber(val) {
    return Object.is(val, -0) ? "-0" : String(val);
  }
  function printBigInt(val) {
    return `${val}n`;
  }
  function printFunction(val, printFunctionName) {
    return printFunctionName ? `[Function ${val.name || "anonymous"}]` : "[Function]";
  }
  function printSymbol(val) {
    return String(val).replace(SYMBOL_REGEXP, "Symbol($1)");
  }
  function printError(val) {
    return `[${errorToString.call(val)}]`;
  }
  function printBasicValue(val, printFunctionName, escapeRegex, escapeString) {
    if (val === true || val === false) return `${val}`;
    if (val === void 0) return "undefined";
    if (val === null) return "null";
    let typeOf = typeof val;
    if (typeOf === "number") return printNumber(val);
    if (typeOf === "bigint") return printBigInt(val);
    if (typeOf === "string") return escapeString ? `"${val.replace(/"|\\/g, "\\$&")}"` : `"${val}"`;
    if (typeOf === "function") return printFunction(val, printFunctionName);
    if (typeOf === "symbol") return printSymbol(val);
    let toStringed = toString.call(val);
    return toStringed === "[object WeakMap]" ? "WeakMap {}" : toStringed === "[object WeakSet]" ? "WeakSet {}" : toStringed === "[object Function]" || toStringed === "[object GeneratorFunction]" ? printFunction(val, printFunctionName) : toStringed === "[object Symbol]" ? printSymbol(val) : toStringed === "[object Date]" ? isNaN(+val) ? "Date { NaN }" : toISOString.call(val) : toStringed === "[object Error]" ? printError(val) : toStringed === "[object RegExp]" ? escapeRegex ? regExpToString.call(val).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&") : regExpToString.call(val) : val instanceof Error ? printError(val) : null;
  }
  function printComplexValue(val, config, indentation, depth, refs, hasCalledToJSON) {
    if (refs.indexOf(val) !== -1) return "[Circular]";
    refs = refs.slice(), refs.push(val);
    let hitMaxDepth = ++depth > config.maxDepth, min = config.min;
    if (config.callToJSON && !hitMaxDepth && val.toJSON && typeof val.toJSON == "function" && !hasCalledToJSON) return printer(val.toJSON(), config, indentation, depth, refs, true);
    let toStringed = toString.call(val);
    return toStringed === "[object Arguments]" ? hitMaxDepth ? "[Arguments]" : `${min ? "" : "Arguments "}[${(0, _collections.printListItems)(val, config, indentation, depth, refs, printer)}]` : isToStringedArrayType(toStringed) ? hitMaxDepth ? `[${val.constructor.name}]` : `${min || !config.printBasicPrototype && val.constructor.name === "Array" ? "" : `${val.constructor.name} `}[${(0, _collections.printListItems)(val, config, indentation, depth, refs, printer)}]` : toStringed === "[object Map]" ? hitMaxDepth ? "[Map]" : `Map {${(0, _collections.printIteratorEntries)(val.entries(), config, indentation, depth, refs, printer, " => ")}}` : toStringed === "[object Set]" ? hitMaxDepth ? "[Set]" : `Set {${(0, _collections.printIteratorValues)(val.values(), config, indentation, depth, refs, printer)}}` : hitMaxDepth || isWindow(val) ? `[${getConstructorName(val)}]` : `${min || !config.printBasicPrototype && getConstructorName(val) === "Object" ? "" : `${getConstructorName(val)} `}{${(0, _collections.printObjectProperties)(val, config, indentation, depth, refs, printer)}}`;
  }
  function isNewPlugin(plugin) {
    return plugin.serialize != null;
  }
  function printPlugin(plugin, val, config, indentation, depth, refs) {
    let printed;
    try {
      printed = isNewPlugin(plugin) ? plugin.serialize(val, config, indentation, depth, refs, printer) : plugin.print(val, (valChild) => printer(valChild, config, indentation, depth, refs), (str) => {
        let indentationNext = indentation + config.indent;
        return indentationNext + str.replace(NEWLINE_REGEXP, `
${indentationNext}`);
      }, { edgeSpacing: config.spacingOuter, min: config.min, spacing: config.spacingInner }, config.colors);
    } catch (error) {
      throw new PrettyFormatPluginError(error.message, error.stack);
    }
    if (typeof printed != "string") throw new Error(`pretty-format: Plugin must return type "string" but instead returned "${typeof printed}".`);
    return printed;
  }
  function findPlugin(plugins4, val) {
    for (let p = 0; p < plugins4.length; p++) try {
      if (plugins4[p].test(val)) return plugins4[p];
    } catch (error) {
      throw new PrettyFormatPluginError(error.message, error.stack);
    }
    return null;
  }
  function printer(val, config, indentation, depth, refs, hasCalledToJSON) {
    let plugin = findPlugin(config.plugins, val);
    if (plugin !== null) return printPlugin(plugin, val, config, indentation, depth, refs);
    let basicResult = printBasicValue(val, config.printFunctionName, config.escapeRegex, config.escapeString);
    return basicResult !== null ? basicResult : printComplexValue(val, config, indentation, depth, refs, hasCalledToJSON);
  }
  var DEFAULT_THEME = { comment: "gray", content: "reset", prop: "yellow", tag: "cyan", value: "green" }, DEFAULT_THEME_KEYS = Object.keys(DEFAULT_THEME), toOptionsSubtype = (options) => options, DEFAULT_OPTIONS = toOptionsSubtype({ callToJSON: true, compareKeys: void 0, escapeRegex: false, escapeString: true, highlight: false, indent: 2, maxDepth: 1 / 0, maxWidth: 1 / 0, min: false, plugins: [], printBasicPrototype: true, printFunctionName: true, theme: DEFAULT_THEME });
  exports.DEFAULT_OPTIONS = DEFAULT_OPTIONS;
  function validateOptions(options) {
    if (Object.keys(options).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(DEFAULT_OPTIONS, key)) throw new Error(`pretty-format: Unknown option "${key}".`);
    }), options.min && options.indent !== void 0 && options.indent !== 0) throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
    if (options.theme !== void 0) {
      if (options.theme === null) throw new Error('pretty-format: Option "theme" must not be null.');
      if (typeof options.theme != "object") throw new Error(`pretty-format: Option "theme" must be of type "object" but instead received "${typeof options.theme}".`);
    }
  }
  var getColorsHighlight = (options) => DEFAULT_THEME_KEYS.reduce((colors, key) => {
    let value = options.theme && options.theme[key] !== void 0 ? options.theme[key] : DEFAULT_THEME[key], color = value && _ansiStyles.default[value];
    if (color && typeof color.close == "string" && typeof color.open == "string") colors[key] = color;
    else throw new Error(`pretty-format: Option "theme" has a key "${key}" whose value "${value}" is undefined in ansi-styles.`);
    return colors;
  }, /* @__PURE__ */ Object.create(null)), getColorsEmpty = () => DEFAULT_THEME_KEYS.reduce((colors, key) => (colors[key] = { close: "", open: "" }, colors), /* @__PURE__ */ Object.create(null)), getPrintFunctionName = (options) => (options == null ? void 0 : options.printFunctionName) ?? DEFAULT_OPTIONS.printFunctionName, getEscapeRegex = (options) => (options == null ? void 0 : options.escapeRegex) ?? DEFAULT_OPTIONS.escapeRegex, getEscapeString = (options) => (options == null ? void 0 : options.escapeString) ?? DEFAULT_OPTIONS.escapeString, getConfig = (options) => ({ callToJSON: (options == null ? void 0 : options.callToJSON) ?? DEFAULT_OPTIONS.callToJSON, colors: (options == null ? void 0 : options.highlight) ? getColorsHighlight(options) : getColorsEmpty(), compareKeys: typeof (options == null ? void 0 : options.compareKeys) == "function" || (options == null ? void 0 : options.compareKeys) === null ? options.compareKeys : DEFAULT_OPTIONS.compareKeys, escapeRegex: getEscapeRegex(options), escapeString: getEscapeString(options), indent: (options == null ? void 0 : options.min) ? "" : createIndent((options == null ? void 0 : options.indent) ?? DEFAULT_OPTIONS.indent), maxDepth: (options == null ? void 0 : options.maxDepth) ?? DEFAULT_OPTIONS.maxDepth, maxWidth: (options == null ? void 0 : options.maxWidth) ?? DEFAULT_OPTIONS.maxWidth, min: (options == null ? void 0 : options.min) ?? DEFAULT_OPTIONS.min, plugins: (options == null ? void 0 : options.plugins) ?? DEFAULT_OPTIONS.plugins, printBasicPrototype: (options == null ? void 0 : options.printBasicPrototype) ?? true, printFunctionName: getPrintFunctionName(options), spacingInner: (options == null ? void 0 : options.min) ? " " : `
`, spacingOuter: (options == null ? void 0 : options.min) ? "" : `
` });
  function createIndent(indent) {
    return new Array(indent + 1).join(" ");
  }
  function format3(val, options) {
    if (options && (validateOptions(options), options.plugins)) {
      let plugin = findPlugin(options.plugins, val);
      if (plugin !== null) return printPlugin(plugin, val, getConfig(options), "", 0, []);
    }
    let basicResult = printBasicValue(val, getPrintFunctionName(options), getEscapeRegex(options), getEscapeString(options));
    return basicResult !== null ? basicResult : printComplexValue(val, getConfig(options), "", 0, []);
  }
  var plugins3 = { AsymmetricMatcher: _AsymmetricMatcher.default, DOMCollection: _DOMCollection.default, DOMElement: _DOMElement.default, Immutable: _Immutable.default, ReactElement: _ReactElement.default, ReactTestComponent: _ReactTestComponent.default };
  exports.plugins = plugins3;
  var _default = format3;
  exports.default = _default;
} });
var require_build2 = __commonJS({ "../../node_modules/diff-sequences/build/index.js"(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.default = diffSequence;
  var pkg = "diff-sequences", NOT_YET_SET = 0, countCommonItemsF = (aIndex, aEnd, bIndex, bEnd, isCommon) => {
    let nCommon = 0;
    for (; aIndex < aEnd && bIndex < bEnd && isCommon(aIndex, bIndex); ) aIndex += 1, bIndex += 1, nCommon += 1;
    return nCommon;
  }, countCommonItemsR = (aStart, aIndex, bStart, bIndex, isCommon) => {
    let nCommon = 0;
    for (; aStart <= aIndex && bStart <= bIndex && isCommon(aIndex, bIndex); ) aIndex -= 1, bIndex -= 1, nCommon += 1;
    return nCommon;
  }, extendPathsF = (d, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF) => {
    let iF = 0, kF = -d, aFirst = aIndexesF[iF], aIndexPrev1 = aFirst;
    aIndexesF[iF] += countCommonItemsF(aFirst + 1, aEnd, bF + aFirst - kF + 1, bEnd, isCommon);
    let nF = d < iMaxF ? d : iMaxF;
    for (iF += 1, kF += 2; iF <= nF; iF += 1, kF += 2) {
      if (iF !== d && aIndexPrev1 < aIndexesF[iF]) aFirst = aIndexesF[iF];
      else if (aFirst = aIndexPrev1 + 1, aEnd <= aFirst) return iF - 1;
      aIndexPrev1 = aIndexesF[iF], aIndexesF[iF] = aFirst + countCommonItemsF(aFirst + 1, aEnd, bF + aFirst - kF + 1, bEnd, isCommon);
    }
    return iMaxF;
  }, extendPathsR = (d, aStart, bStart, bR, isCommon, aIndexesR, iMaxR) => {
    let iR = 0, kR = d, aFirst = aIndexesR[iR], aIndexPrev1 = aFirst;
    aIndexesR[iR] -= countCommonItemsR(aStart, aFirst - 1, bStart, bR + aFirst - kR - 1, isCommon);
    let nR = d < iMaxR ? d : iMaxR;
    for (iR += 1, kR -= 2; iR <= nR; iR += 1, kR -= 2) {
      if (iR !== d && aIndexesR[iR] < aIndexPrev1) aFirst = aIndexesR[iR];
      else if (aFirst = aIndexPrev1 - 1, aFirst < aStart) return iR - 1;
      aIndexPrev1 = aIndexesR[iR], aIndexesR[iR] = aFirst - countCommonItemsR(aStart, aFirst - 1, bStart, bR + aFirst - kR - 1, isCommon);
    }
    return iMaxR;
  }, extendOverlappablePathsF = (d, aStart, aEnd, bStart, bEnd, isCommon, aIndexesF, iMaxF, aIndexesR, iMaxR, division) => {
    let bF = bStart - aStart, aLength = aEnd - aStart, baDeltaLength = bEnd - bStart - aLength, kMinOverlapF = -baDeltaLength - (d - 1), kMaxOverlapF = -baDeltaLength + (d - 1), aIndexPrev1 = NOT_YET_SET, nF = d < iMaxF ? d : iMaxF;
    for (let iF = 0, kF = -d; iF <= nF; iF += 1, kF += 2) {
      let insert = iF === 0 || iF !== d && aIndexPrev1 < aIndexesF[iF], aLastPrev = insert ? aIndexesF[iF] : aIndexPrev1, aFirst = insert ? aLastPrev : aLastPrev + 1, bFirst = bF + aFirst - kF, nCommonF = countCommonItemsF(aFirst + 1, aEnd, bFirst + 1, bEnd, isCommon), aLast = aFirst + nCommonF;
      if (aIndexPrev1 = aIndexesF[iF], aIndexesF[iF] = aLast, kMinOverlapF <= kF && kF <= kMaxOverlapF) {
        let iR = (d - 1 - (kF + baDeltaLength)) / 2;
        if (iR <= iMaxR && aIndexesR[iR] - 1 <= aLast) {
          let bLastPrev = bF + aLastPrev - (insert ? kF + 1 : kF - 1), nCommonR = countCommonItemsR(aStart, aLastPrev, bStart, bLastPrev, isCommon), aIndexPrevFirst = aLastPrev - nCommonR, bIndexPrevFirst = bLastPrev - nCommonR, aEndPreceding = aIndexPrevFirst + 1, bEndPreceding = bIndexPrevFirst + 1;
          division.nChangePreceding = d - 1, d - 1 === aEndPreceding + bEndPreceding - aStart - bStart ? (division.aEndPreceding = aStart, division.bEndPreceding = bStart) : (division.aEndPreceding = aEndPreceding, division.bEndPreceding = bEndPreceding), division.nCommonPreceding = nCommonR, nCommonR !== 0 && (division.aCommonPreceding = aEndPreceding, division.bCommonPreceding = bEndPreceding), division.nCommonFollowing = nCommonF, nCommonF !== 0 && (division.aCommonFollowing = aFirst + 1, division.bCommonFollowing = bFirst + 1);
          let aStartFollowing = aLast + 1, bStartFollowing = bFirst + nCommonF + 1;
          return division.nChangeFollowing = d - 1, d - 1 === aEnd + bEnd - aStartFollowing - bStartFollowing ? (division.aStartFollowing = aEnd, division.bStartFollowing = bEnd) : (division.aStartFollowing = aStartFollowing, division.bStartFollowing = bStartFollowing), true;
        }
      }
    }
    return false;
  }, extendOverlappablePathsR = (d, aStart, aEnd, bStart, bEnd, isCommon, aIndexesF, iMaxF, aIndexesR, iMaxR, division) => {
    let bR = bEnd - aEnd, aLength = aEnd - aStart, baDeltaLength = bEnd - bStart - aLength, kMinOverlapR = baDeltaLength - d, kMaxOverlapR = baDeltaLength + d, aIndexPrev1 = NOT_YET_SET, nR = d < iMaxR ? d : iMaxR;
    for (let iR = 0, kR = d; iR <= nR; iR += 1, kR -= 2) {
      let insert = iR === 0 || iR !== d && aIndexesR[iR] < aIndexPrev1, aLastPrev = insert ? aIndexesR[iR] : aIndexPrev1, aFirst = insert ? aLastPrev : aLastPrev - 1, bFirst = bR + aFirst - kR, nCommonR = countCommonItemsR(aStart, aFirst - 1, bStart, bFirst - 1, isCommon), aLast = aFirst - nCommonR;
      if (aIndexPrev1 = aIndexesR[iR], aIndexesR[iR] = aLast, kMinOverlapR <= kR && kR <= kMaxOverlapR) {
        let iF = (d + (kR - baDeltaLength)) / 2;
        if (iF <= iMaxF && aLast - 1 <= aIndexesF[iF]) {
          let bLast = bFirst - nCommonR;
          if (division.nChangePreceding = d, d === aLast + bLast - aStart - bStart ? (division.aEndPreceding = aStart, division.bEndPreceding = bStart) : (division.aEndPreceding = aLast, division.bEndPreceding = bLast), division.nCommonPreceding = nCommonR, nCommonR !== 0 && (division.aCommonPreceding = aLast, division.bCommonPreceding = bLast), division.nChangeFollowing = d - 1, d === 1) division.nCommonFollowing = 0, division.aStartFollowing = aEnd, division.bStartFollowing = bEnd;
          else {
            let bLastPrev = bR + aLastPrev - (insert ? kR - 1 : kR + 1), nCommonF = countCommonItemsF(aLastPrev, aEnd, bLastPrev, bEnd, isCommon);
            division.nCommonFollowing = nCommonF, nCommonF !== 0 && (division.aCommonFollowing = aLastPrev, division.bCommonFollowing = bLastPrev);
            let aStartFollowing = aLastPrev + nCommonF, bStartFollowing = bLastPrev + nCommonF;
            d - 1 === aEnd + bEnd - aStartFollowing - bStartFollowing ? (division.aStartFollowing = aEnd, division.bStartFollowing = bEnd) : (division.aStartFollowing = aStartFollowing, division.bStartFollowing = bStartFollowing);
          }
          return true;
        }
      }
    }
    return false;
  }, divide = (nChange, aStart, aEnd, bStart, bEnd, isCommon, aIndexesF, aIndexesR, division) => {
    let bF = bStart - aStart, bR = bEnd - aEnd, aLength = aEnd - aStart, bLength = bEnd - bStart, baDeltaLength = bLength - aLength, iMaxF = aLength, iMaxR = aLength;
    if (aIndexesF[0] = aStart - 1, aIndexesR[0] = aEnd, baDeltaLength % 2 === 0) {
      let dMin = (nChange || baDeltaLength) / 2, dMax = (aLength + bLength) / 2;
      for (let d = 1; d <= dMax; d += 1) if (iMaxF = extendPathsF(d, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF), d < dMin) iMaxR = extendPathsR(d, aStart, bStart, bR, isCommon, aIndexesR, iMaxR);
      else if (extendOverlappablePathsR(d, aStart, aEnd, bStart, bEnd, isCommon, aIndexesF, iMaxF, aIndexesR, iMaxR, division)) return;
    } else {
      let dMin = ((nChange || baDeltaLength) + 1) / 2, dMax = (aLength + bLength + 1) / 2, d = 1;
      for (iMaxF = extendPathsF(d, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF), d += 1; d <= dMax; d += 1) if (iMaxR = extendPathsR(d - 1, aStart, bStart, bR, isCommon, aIndexesR, iMaxR), d < dMin) iMaxF = extendPathsF(d, aEnd, bEnd, bF, isCommon, aIndexesF, iMaxF);
      else if (extendOverlappablePathsF(d, aStart, aEnd, bStart, bEnd, isCommon, aIndexesF, iMaxF, aIndexesR, iMaxR, division)) return;
    }
    throw new Error(`${pkg}: no overlap aStart=${aStart} aEnd=${aEnd} bStart=${bStart} bEnd=${bEnd}`);
  }, findSubsequences = (nChange, aStart, aEnd, bStart, bEnd, transposed, callbacks, aIndexesF, aIndexesR, division) => {
    if (bEnd - bStart < aEnd - aStart) {
      if (transposed = !transposed, transposed && callbacks.length === 1) {
        let { foundSubsequence: foundSubsequence2, isCommon: isCommon2 } = callbacks[0];
        callbacks[1] = { foundSubsequence: (nCommon, bCommon, aCommon) => {
          foundSubsequence2(nCommon, aCommon, bCommon);
        }, isCommon: (bIndex, aIndex) => isCommon2(aIndex, bIndex) };
      }
      let tStart = aStart, tEnd = aEnd;
      aStart = bStart, aEnd = bEnd, bStart = tStart, bEnd = tEnd;
    }
    let { foundSubsequence, isCommon } = callbacks[transposed ? 1 : 0];
    divide(nChange, aStart, aEnd, bStart, bEnd, isCommon, aIndexesF, aIndexesR, division);
    let { nChangePreceding, aEndPreceding, bEndPreceding, nCommonPreceding, aCommonPreceding, bCommonPreceding, nCommonFollowing, aCommonFollowing, bCommonFollowing, nChangeFollowing, aStartFollowing, bStartFollowing } = division;
    aStart < aEndPreceding && bStart < bEndPreceding && findSubsequences(nChangePreceding, aStart, aEndPreceding, bStart, bEndPreceding, transposed, callbacks, aIndexesF, aIndexesR, division), nCommonPreceding !== 0 && foundSubsequence(nCommonPreceding, aCommonPreceding, bCommonPreceding), nCommonFollowing !== 0 && foundSubsequence(nCommonFollowing, aCommonFollowing, bCommonFollowing), aStartFollowing < aEnd && bStartFollowing < bEnd && findSubsequences(nChangeFollowing, aStartFollowing, aEnd, bStartFollowing, bEnd, transposed, callbacks, aIndexesF, aIndexesR, division);
  }, validateLength = (name, arg) => {
    if (typeof arg != "number") throw new TypeError(`${pkg}: ${name} typeof ${typeof arg} is not a number`);
    if (!Number.isSafeInteger(arg)) throw new RangeError(`${pkg}: ${name} value ${arg} is not a safe integer`);
    if (arg < 0) throw new RangeError(`${pkg}: ${name} value ${arg} is a negative integer`);
  }, validateCallback = (name, arg) => {
    let type = typeof arg;
    if (type !== "function") throw new TypeError(`${pkg}: ${name} typeof ${type} is not a function`);
  };
  function diffSequence(aLength, bLength, isCommon, foundSubsequence) {
    validateLength("aLength", aLength), validateLength("bLength", bLength), validateCallback("isCommon", isCommon), validateCallback("foundSubsequence", foundSubsequence);
    let nCommonF = countCommonItemsF(0, aLength, 0, bLength, isCommon);
    if (nCommonF !== 0 && foundSubsequence(nCommonF, 0, 0), aLength !== nCommonF || bLength !== nCommonF) {
      let aStart = nCommonF, bStart = nCommonF, nCommonR = countCommonItemsR(aStart, aLength - 1, bStart, bLength - 1, isCommon), aEnd = aLength - nCommonR, bEnd = bLength - nCommonR, nCommonFR = nCommonF + nCommonR;
      aLength !== nCommonFR && bLength !== nCommonFR && findSubsequences(0, aStart, aEnd, bStart, bEnd, false, [{ foundSubsequence, isCommon }], [NOT_YET_SET], [NOT_YET_SET], { aCommonFollowing: NOT_YET_SET, aCommonPreceding: NOT_YET_SET, aEndPreceding: NOT_YET_SET, aStartFollowing: NOT_YET_SET, bCommonFollowing: NOT_YET_SET, bCommonPreceding: NOT_YET_SET, bEndPreceding: NOT_YET_SET, bStartFollowing: NOT_YET_SET, nChangeFollowing: NOT_YET_SET, nChangePreceding: NOT_YET_SET, nCommonFollowing: NOT_YET_SET, nCommonPreceding: NOT_YET_SET }), nCommonR !== 0 && foundSubsequence(nCommonR, aEnd, bEnd);
    }
  }
} });
var require_loupe = __commonJS({ "../../node_modules/loupe/loupe.js"(exports, module) {
  (function(global2, factory) {
    typeof exports == "object" && typeof module < "u" ? factory(exports) : typeof define == "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis < "u" ? globalThis : global2 || self, factory(global2.loupe = {}));
  })(exports, function(exports2) {
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof = function(obj2) {
        return typeof obj2;
      } : _typeof = function(obj2) {
        return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }
    function _iterableToArrayLimit(arr, i) {
      if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(arr)))) {
        var _arr = [], _n = true, _d = false, _e = void 0;
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !(i && _arr.length === i)); _n = true) ;
        } catch (err) {
          _d = true, _e = err;
        } finally {
          try {
            !_n && _i.return != null && _i.return();
          } finally {
            if (_d) throw _e;
          }
        }
        return _arr;
      }
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (o) {
        if (typeof o == "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }
    }
    function _arrayLikeToArray(arr, len) {
      (len == null || len > arr.length) && (len = arr.length);
      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
      return arr2;
    }
    function _nonIterableRest() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var ansiColors = { bold: ["1", "22"], dim: ["2", "22"], italic: ["3", "23"], underline: ["4", "24"], inverse: ["7", "27"], hidden: ["8", "28"], strike: ["9", "29"], black: ["30", "39"], red: ["31", "39"], green: ["32", "39"], yellow: ["33", "39"], blue: ["34", "39"], magenta: ["35", "39"], cyan: ["36", "39"], white: ["37", "39"], brightblack: ["30;1", "39"], brightred: ["31;1", "39"], brightgreen: ["32;1", "39"], brightyellow: ["33;1", "39"], brightblue: ["34;1", "39"], brightmagenta: ["35;1", "39"], brightcyan: ["36;1", "39"], brightwhite: ["37;1", "39"], grey: ["90", "39"] }, styles = { special: "cyan", number: "yellow", bigint: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", symbol: "green", date: "magenta", regexp: "red" }, truncator = "…";
    function colorise(value, styleType) {
      var color = ansiColors[styles[styleType]] || ansiColors[styleType];
      return color ? "\x1B[".concat(color[0], "m").concat(String(value), "\x1B[").concat(color[1], "m") : String(value);
    }
    function normaliseOptions() {
      var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$showHidden = _ref.showHidden, showHidden = _ref$showHidden === void 0 ? false : _ref$showHidden, _ref$depth = _ref.depth, depth = _ref$depth === void 0 ? 2 : _ref$depth, _ref$colors = _ref.colors, colors = _ref$colors === void 0 ? false : _ref$colors, _ref$customInspect = _ref.customInspect, customInspect = _ref$customInspect === void 0 ? true : _ref$customInspect, _ref$showProxy = _ref.showProxy, showProxy = _ref$showProxy === void 0 ? false : _ref$showProxy, _ref$maxArrayLength = _ref.maxArrayLength, maxArrayLength = _ref$maxArrayLength === void 0 ? 1 / 0 : _ref$maxArrayLength, _ref$breakLength = _ref.breakLength, breakLength = _ref$breakLength === void 0 ? 1 / 0 : _ref$breakLength, _ref$seen = _ref.seen, seen = _ref$seen === void 0 ? [] : _ref$seen, _ref$truncate = _ref.truncate, truncate2 = _ref$truncate === void 0 ? 1 / 0 : _ref$truncate, _ref$stylize = _ref.stylize, stylize = _ref$stylize === void 0 ? String : _ref$stylize, options = { showHidden: !!showHidden, depth: Number(depth), colors: !!colors, customInspect: !!customInspect, showProxy: !!showProxy, maxArrayLength: Number(maxArrayLength), breakLength: Number(breakLength), truncate: Number(truncate2), seen, stylize };
      return options.colors && (options.stylize = colorise), options;
    }
    function truncate(string2, length) {
      var tail = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : truncator;
      string2 = String(string2);
      var tailLength = tail.length, stringLength = string2.length;
      return tailLength > length && stringLength > tailLength ? tail : stringLength > length && stringLength > tailLength ? "".concat(string2.slice(0, length - tailLength)).concat(tail) : string2;
    }
    function inspectList(list, options, inspectItem) {
      var separator = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ", ";
      inspectItem = inspectItem || options.inspect;
      var size = list.length;
      if (size === 0) return "";
      for (var originalLength = options.truncate, output = "", peek = "", truncated = "", i = 0; i < size; i += 1) {
        var last = i + 1 === list.length, secondToLast = i + 2 === list.length;
        truncated = "".concat(truncator, "(").concat(list.length - i, ")");
        var value = list[i];
        options.truncate = originalLength - output.length - (last ? 0 : separator.length);
        var string2 = peek || inspectItem(value, options) + (last ? "" : separator), nextLength = output.length + string2.length, truncatedLength = nextLength + truncated.length;
        if (last && nextLength > originalLength && output.length + truncated.length <= originalLength || !last && !secondToLast && truncatedLength > originalLength || (peek = last ? "" : inspectItem(list[i + 1], options) + (secondToLast ? "" : separator), !last && secondToLast && truncatedLength > originalLength && nextLength + peek.length > originalLength)) break;
        if (output += string2, !last && !secondToLast && nextLength + peek.length >= originalLength) {
          truncated = "".concat(truncator, "(").concat(list.length - i - 1, ")");
          break;
        }
        truncated = "";
      }
      return "".concat(output).concat(truncated);
    }
    function quoteComplexKey(key) {
      return key.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/) ? key : JSON.stringify(key).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
    }
    function inspectProperty(_ref2, options) {
      var _ref3 = _slicedToArray(_ref2, 2), key = _ref3[0], value = _ref3[1];
      return options.truncate -= 2, typeof key == "string" ? key = quoteComplexKey(key) : typeof key != "number" && (key = "[".concat(options.inspect(key, options), "]")), options.truncate -= key.length, value = options.inspect(value, options), "".concat(key, ": ").concat(value);
    }
    function inspectArray(array, options) {
      var nonIndexProperties = Object.keys(array).slice(array.length);
      if (!array.length && !nonIndexProperties.length) return "[]";
      options.truncate -= 4;
      var listContents = inspectList(array, options);
      options.truncate -= listContents.length;
      var propertyContents = "";
      return nonIndexProperties.length && (propertyContents = inspectList(nonIndexProperties.map(function(key) {
        return [key, array[key]];
      }), options, inspectProperty)), "[ ".concat(listContents).concat(propertyContents ? ", ".concat(propertyContents) : "", " ]");
    }
    var toString = Function.prototype.toString, functionNameMatch = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/, maxFunctionSourceLength = 512;
    function getFuncName(aFunc) {
      if (typeof aFunc != "function") return null;
      var name = "";
      if (typeof Function.prototype.name > "u" && typeof aFunc.name > "u") {
        var functionSource = toString.call(aFunc);
        if (functionSource.indexOf("(") > maxFunctionSourceLength) return name;
        var match = functionSource.match(functionNameMatch);
        match && (name = match[1]);
      } else name = aFunc.name;
      return name;
    }
    var getFuncName_1 = getFuncName, getArrayName = function(array) {
      return typeof Buffer == "function" && array instanceof Buffer ? "Buffer" : array[Symbol.toStringTag] ? array[Symbol.toStringTag] : getFuncName_1(array.constructor);
    };
    function inspectTypedArray(array, options) {
      var name = getArrayName(array);
      options.truncate -= name.length + 4;
      var nonIndexProperties = Object.keys(array).slice(array.length);
      if (!array.length && !nonIndexProperties.length) return "".concat(name, "[]");
      for (var output = "", i = 0; i < array.length; i++) {
        var string2 = "".concat(options.stylize(truncate(array[i], options.truncate), "number")).concat(i === array.length - 1 ? "" : ", ");
        if (options.truncate -= string2.length, array[i] !== array.length && options.truncate <= 3) {
          output += "".concat(truncator, "(").concat(array.length - array[i] + 1, ")");
          break;
        }
        output += string2;
      }
      var propertyContents = "";
      return nonIndexProperties.length && (propertyContents = inspectList(nonIndexProperties.map(function(key) {
        return [key, array[key]];
      }), options, inspectProperty)), "".concat(name, "[ ").concat(output).concat(propertyContents ? ", ".concat(propertyContents) : "", " ]");
    }
    function inspectDate(dateObject, options) {
      var stringRepresentation = dateObject.toJSON();
      if (stringRepresentation === null) return "Invalid Date";
      var split = stringRepresentation.split("T"), date = split[0];
      return options.stylize("".concat(date, "T").concat(truncate(split[1], options.truncate - date.length - 1)), "date");
    }
    function inspectFunction(func, options) {
      var name = getFuncName_1(func);
      return name ? options.stylize("[Function ".concat(truncate(name, options.truncate - 11), "]"), "special") : options.stylize("[Function]", "special");
    }
    function inspectMapEntry(_ref, options) {
      var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
      return options.truncate -= 4, key = options.inspect(key, options), options.truncate -= key.length, value = options.inspect(value, options), "".concat(key, " => ").concat(value);
    }
    function mapToEntries(map) {
      var entries = [];
      return map.forEach(function(value, key) {
        entries.push([key, value]);
      }), entries;
    }
    function inspectMap(map, options) {
      var size = map.size - 1;
      return size <= 0 ? "Map{}" : (options.truncate -= 7, "Map{ ".concat(inspectList(mapToEntries(map), options, inspectMapEntry), " }"));
    }
    var isNaN2 = Number.isNaN || function(i) {
      return i !== i;
    };
    function inspectNumber(number, options) {
      return isNaN2(number) ? options.stylize("NaN", "number") : number === 1 / 0 ? options.stylize("Infinity", "number") : number === -1 / 0 ? options.stylize("-Infinity", "number") : number === 0 ? options.stylize(1 / number === 1 / 0 ? "+0" : "-0", "number") : options.stylize(truncate(number, options.truncate), "number");
    }
    function inspectBigInt(number, options) {
      var nums = truncate(number.toString(), options.truncate - 1);
      return nums !== truncator && (nums += "n"), options.stylize(nums, "bigint");
    }
    function inspectRegExp(value, options) {
      var flags = value.toString().split("/")[2], sourceLength = options.truncate - (2 + flags.length), source = value.source;
      return options.stylize("/".concat(truncate(source, sourceLength), "/").concat(flags), "regexp");
    }
    function arrayFromSet(set) {
      var values = [];
      return set.forEach(function(value) {
        values.push(value);
      }), values;
    }
    function inspectSet(set, options) {
      return set.size === 0 ? "Set{}" : (options.truncate -= 7, "Set{ ".concat(inspectList(arrayFromSet(set), options), " }"));
    }
    var stringEscapeChars = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]", "g"), escapeCharacters = { "\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", "'": "\\'", "\\": "\\\\" }, hex = 16, unicodeLength = 4;
    function escape(char) {
      return escapeCharacters[char] || "\\u".concat("0000".concat(char.charCodeAt(0).toString(hex)).slice(-unicodeLength));
    }
    function inspectString(string2, options) {
      return stringEscapeChars.test(string2) && (string2 = string2.replace(stringEscapeChars, escape)), options.stylize("'".concat(truncate(string2, options.truncate - 2), "'"), "string");
    }
    function inspectSymbol(value) {
      return "description" in Symbol.prototype ? value.description ? "Symbol(".concat(value.description, ")") : "Symbol()" : value.toString();
    }
    var getPromiseValue = function() {
      return "Promise{…}";
    };
    try {
      var _process$binding = process.binding("util"), getPromiseDetails = _process$binding.getPromiseDetails, kPending = _process$binding.kPending, kRejected = _process$binding.kRejected;
      Array.isArray(getPromiseDetails(Promise.resolve())) && (getPromiseValue = function(value, options) {
        var _getPromiseDetails = getPromiseDetails(value), _getPromiseDetails2 = _slicedToArray(_getPromiseDetails, 2), state = _getPromiseDetails2[0], innerValue = _getPromiseDetails2[1];
        return state === kPending ? "Promise{<pending>}" : "Promise".concat(state === kRejected ? "!" : "", "{").concat(options.inspect(innerValue, options), "}");
      });
    } catch {
    }
    var inspectPromise = getPromiseValue;
    function inspectObject(object, options) {
      var properties = Object.getOwnPropertyNames(object), symbols = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(object) : [];
      if (properties.length === 0 && symbols.length === 0) return "{}";
      if (options.truncate -= 4, options.seen = options.seen || [], options.seen.indexOf(object) >= 0) return "[Circular]";
      options.seen.push(object);
      var propertyContents = inspectList(properties.map(function(key) {
        return [key, object[key]];
      }), options, inspectProperty), symbolContents = inspectList(symbols.map(function(key) {
        return [key, object[key]];
      }), options, inspectProperty);
      options.seen.pop();
      var sep = "";
      return propertyContents && symbolContents && (sep = ", "), "{ ".concat(propertyContents).concat(sep).concat(symbolContents, " }");
    }
    var toStringTag = typeof Symbol < "u" && Symbol.toStringTag ? Symbol.toStringTag : false;
    function inspectClass(value, options) {
      var name = "";
      return toStringTag && toStringTag in value && (name = value[toStringTag]), name = name || getFuncName_1(value.constructor), (!name || name === "_class") && (name = "<Anonymous Class>"), options.truncate -= name.length, "".concat(name).concat(inspectObject(value, options));
    }
    function inspectArguments(args, options) {
      return args.length === 0 ? "Arguments[]" : (options.truncate -= 13, "Arguments[ ".concat(inspectList(args, options), " ]"));
    }
    var errorKeys = ["stack", "line", "column", "name", "message", "fileName", "lineNumber", "columnNumber", "number", "description"];
    function inspectObject$1(error, options) {
      var properties = Object.getOwnPropertyNames(error).filter(function(key) {
        return errorKeys.indexOf(key) === -1;
      }), name = error.name;
      options.truncate -= name.length;
      var message = "";
      typeof error.message == "string" ? message = truncate(error.message, options.truncate) : properties.unshift("message"), message = message ? ": ".concat(message) : "", options.truncate -= message.length + 5;
      var propertyContents = inspectList(properties.map(function(key) {
        return [key, error[key]];
      }), options, inspectProperty);
      return "".concat(name).concat(message).concat(propertyContents ? " { ".concat(propertyContents, " }") : "");
    }
    function inspectAttribute(_ref, options) {
      var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
      return options.truncate -= 3, value ? "".concat(options.stylize(key, "yellow"), "=").concat(options.stylize('"'.concat(value, '"'), "string")) : "".concat(options.stylize(key, "yellow"));
    }
    function inspectHTMLCollection(collection, options) {
      return inspectList(collection, options, inspectHTML, `
`);
    }
    function inspectHTML(element, options) {
      var properties = element.getAttributeNames(), name = element.tagName.toLowerCase(), head = options.stylize("<".concat(name), "special"), headClose = options.stylize(">", "special"), tail = options.stylize("</".concat(name, ">"), "special");
      options.truncate -= name.length * 2 + 5;
      var propertyContents = "";
      properties.length > 0 && (propertyContents += " ", propertyContents += inspectList(properties.map(function(key) {
        return [key, element.getAttribute(key)];
      }), options, inspectAttribute, " ")), options.truncate -= propertyContents.length;
      var truncate2 = options.truncate, children = inspectHTMLCollection(element.children, options);
      return children && children.length > truncate2 && (children = "".concat(truncator, "(").concat(element.children.length, ")")), "".concat(head).concat(propertyContents).concat(headClose).concat(children).concat(tail);
    }
    var symbolsSupported = typeof Symbol == "function" && typeof Symbol.for == "function", chaiInspect = symbolsSupported ? Symbol.for("chai/inspect") : "@@chai/inspect", nodeInspect = false;
    try {
      var nodeUtil = __require("util");
      nodeInspect = nodeUtil.inspect ? nodeUtil.inspect.custom : false;
    } catch {
      nodeInspect = false;
    }
    function FakeMap() {
      this.key = "chai/loupe__" + Math.random() + Date.now();
    }
    FakeMap.prototype = { get: function(key) {
      return key[this.key];
    }, has: function(key) {
      return this.key in key;
    }, set: function(key, value) {
      Object.isExtensible(key) && Object.defineProperty(key, this.key, { value, configurable: true });
    } };
    var constructorMap = new (typeof WeakMap == "function" ? WeakMap : FakeMap)(), stringTagMap = {}, baseTypesMap = { undefined: function(value, options) {
      return options.stylize("undefined", "undefined");
    }, null: function(value, options) {
      return options.stylize(null, "null");
    }, boolean: function(value, options) {
      return options.stylize(value, "boolean");
    }, Boolean: function(value, options) {
      return options.stylize(value, "boolean");
    }, number: inspectNumber, Number: inspectNumber, bigint: inspectBigInt, BigInt: inspectBigInt, string: inspectString, String: inspectString, function: inspectFunction, Function: inspectFunction, symbol: inspectSymbol, Symbol: inspectSymbol, Array: inspectArray, Date: inspectDate, Map: inspectMap, Set: inspectSet, RegExp: inspectRegExp, Promise: inspectPromise, WeakSet: function(value, options) {
      return options.stylize("WeakSet{…}", "special");
    }, WeakMap: function(value, options) {
      return options.stylize("WeakMap{…}", "special");
    }, Arguments: inspectArguments, Int8Array: inspectTypedArray, Uint8Array: inspectTypedArray, Uint8ClampedArray: inspectTypedArray, Int16Array: inspectTypedArray, Uint16Array: inspectTypedArray, Int32Array: inspectTypedArray, Uint32Array: inspectTypedArray, Float32Array: inspectTypedArray, Float64Array: inspectTypedArray, Generator: function() {
      return "";
    }, DataView: function() {
      return "";
    }, ArrayBuffer: function() {
      return "";
    }, Error: inspectObject$1, HTMLCollection: inspectHTMLCollection, NodeList: inspectHTMLCollection }, inspectCustom = function(value, options, type) {
      return chaiInspect in value && typeof value[chaiInspect] == "function" ? value[chaiInspect](options) : nodeInspect && nodeInspect in value && typeof value[nodeInspect] == "function" ? value[nodeInspect](options.depth, options) : "inspect" in value && typeof value.inspect == "function" ? value.inspect(options.depth, options) : "constructor" in value && constructorMap.has(value.constructor) ? constructorMap.get(value.constructor)(value, options) : stringTagMap[type] ? stringTagMap[type](value, options) : "";
    }, toString$1 = Object.prototype.toString;
    function inspect3(value, options) {
      options = normaliseOptions(options), options.inspect = inspect3;
      var _options = options, customInspect = _options.customInspect, type = value === null ? "null" : _typeof(value);
      if (type === "object" && (type = toString$1.call(value).slice(8, -1)), baseTypesMap[type]) return baseTypesMap[type](value, options);
      if (customInspect && value) {
        var output = inspectCustom(value, options, type);
        if (output) return typeof output == "string" ? output : inspect3(output, options);
      }
      var proto = value ? Object.getPrototypeOf(value) : false;
      return proto === Object.prototype || proto === null ? inspectObject(value, options) : value && typeof HTMLElement == "function" && value instanceof HTMLElement ? inspectHTML(value, options) : "constructor" in value ? value.constructor !== Object ? inspectClass(value, options) : inspectObject(value, options) : value === Object(value) ? inspectObject(value, options) : options.stylize(String(value), type);
    }
    function registerConstructor(constructor, inspector) {
      return constructorMap.has(constructor) ? false : (constructorMap.set(constructor, inspector), true);
    }
    function registerStringTag(stringTag, inspector) {
      return stringTag in stringTagMap ? false : (stringTagMap[stringTag] = inspector, true);
    }
    var custom = chaiInspect;
    exports2.custom = custom, exports2.default = inspect3, exports2.inspect = inspect3, exports2.registerConstructor = registerConstructor, exports2.registerStringTag = registerStringTag, Object.defineProperty(exports2, "__esModule", { value: true });
  });
} });
var import_pretty_format = __toESM(require_build()), diff$1 = __toESM(require_build2());
var SAFE_COLORS_SYMBOL = Symbol("vitest:SAFE_COLORS"), colorsMap = { bold: ["\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"], dim: ["\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"], italic: ["\x1B[3m", "\x1B[23m"], underline: ["\x1B[4m", "\x1B[24m"], inverse: ["\x1B[7m", "\x1B[27m"], hidden: ["\x1B[8m", "\x1B[28m"], strikethrough: ["\x1B[9m", "\x1B[29m"], black: ["\x1B[30m", "\x1B[39m"], red: ["\x1B[31m", "\x1B[39m"], green: ["\x1B[32m", "\x1B[39m"], yellow: ["\x1B[33m", "\x1B[39m"], blue: ["\x1B[34m", "\x1B[39m"], magenta: ["\x1B[35m", "\x1B[39m"], cyan: ["\x1B[36m", "\x1B[39m"], white: ["\x1B[37m", "\x1B[39m"], gray: ["\x1B[90m", "\x1B[39m"], bgBlack: ["\x1B[40m", "\x1B[49m"], bgRed: ["\x1B[41m", "\x1B[49m"], bgGreen: ["\x1B[42m", "\x1B[49m"], bgYellow: ["\x1B[43m", "\x1B[49m"], bgBlue: ["\x1B[44m", "\x1B[49m"], bgMagenta: ["\x1B[45m", "\x1B[49m"], bgCyan: ["\x1B[46m", "\x1B[49m"], bgWhite: ["\x1B[47m", "\x1B[49m"] }, colorsEntries = Object.entries(colorsMap);
function string(str) {
  return String(str);
}
string.open = "";
string.close = "";
var defaultColors = colorsEntries.reduce((acc, [key]) => (acc[key] = string, acc), { isColorSupported: false });
function getColors() {
  return globalThis[SAFE_COLORS_SYMBOL] || defaultColors;
}
function getType(value) {
  if (value === void 0) return "undefined";
  if (value === null) return "null";
  if (Array.isArray(value)) return "array";
  if (typeof value == "boolean") return "boolean";
  if (typeof value == "function") return "function";
  if (typeof value == "number") return "number";
  if (typeof value == "string") return "string";
  if (typeof value == "bigint") return "bigint";
  if (typeof value == "object") {
    if (value != null) {
      if (value.constructor === RegExp) return "regexp";
      if (value.constructor === Map) return "map";
      if (value.constructor === Set) return "set";
      if (value.constructor === Date) return "date";
    }
    return "object";
  } else if (typeof value == "symbol") return "symbol";
  throw new Error(`value of unknown type: ${value}`);
}
var DIFF_DELETE = -1, DIFF_INSERT = 1, DIFF_EQUAL = 0, Diff = class {
  constructor(op, text) {
    __publicField(this, 0);
    __publicField(this, 1);
    this[0] = op, this[1] = text;
  }
};
var NO_DIFF_MESSAGE = "Compared values have no visual difference.", SIMILAR_MESSAGE = "Compared values serialize to the same structure.\nPrinting internal object structure without calling `toJSON` instead.";
function formatTrailingSpaces(line, trailingSpaceFormatter) {
  return line.replace(/\s+$/, (match) => trailingSpaceFormatter(match));
}
function printDiffLine(line, isFirstOrLast, color, indicator, trailingSpaceFormatter, emptyFirstOrLastLinePlaceholder) {
  return line.length !== 0 ? color(`${indicator} ${formatTrailingSpaces(line, trailingSpaceFormatter)}`) : indicator !== " " ? color(indicator) : isFirstOrLast && emptyFirstOrLastLinePlaceholder.length !== 0 ? color(`${indicator} ${emptyFirstOrLastLinePlaceholder}`) : "";
}
function printDeleteLine(line, isFirstOrLast, { aColor, aIndicator, changeLineTrailingSpaceColor, emptyFirstOrLastLinePlaceholder }) {
  return printDiffLine(line, isFirstOrLast, aColor, aIndicator, changeLineTrailingSpaceColor, emptyFirstOrLastLinePlaceholder);
}
function printInsertLine(line, isFirstOrLast, { bColor, bIndicator, changeLineTrailingSpaceColor, emptyFirstOrLastLinePlaceholder }) {
  return printDiffLine(line, isFirstOrLast, bColor, bIndicator, changeLineTrailingSpaceColor, emptyFirstOrLastLinePlaceholder);
}
function printCommonLine(line, isFirstOrLast, { commonColor, commonIndicator, commonLineTrailingSpaceColor, emptyFirstOrLastLinePlaceholder }) {
  return printDiffLine(line, isFirstOrLast, commonColor, commonIndicator, commonLineTrailingSpaceColor, emptyFirstOrLastLinePlaceholder);
}
function createPatchMark(aStart, aEnd, bStart, bEnd, { patchColor }) {
  return patchColor(`@@ -${aStart + 1},${aEnd - aStart} +${bStart + 1},${bEnd - bStart} @@`);
}
function joinAlignedDiffsNoExpand(diffs, options) {
  let iLength = diffs.length, nContextLines = options.contextLines, nContextLines2 = nContextLines + nContextLines, jLength = iLength, hasExcessAtStartOrEnd = false, nExcessesBetweenChanges = 0, i = 0;
  for (; i !== iLength; ) {
    let iStart = i;
    for (; i !== iLength && diffs[i][0] === DIFF_EQUAL; ) i += 1;
    if (iStart !== i) if (iStart === 0) i > nContextLines && (jLength -= i - nContextLines, hasExcessAtStartOrEnd = true);
    else if (i === iLength) {
      let n = i - iStart;
      n > nContextLines && (jLength -= n - nContextLines, hasExcessAtStartOrEnd = true);
    } else {
      let n = i - iStart;
      n > nContextLines2 && (jLength -= n - nContextLines2, nExcessesBetweenChanges += 1);
    }
    for (; i !== iLength && diffs[i][0] !== DIFF_EQUAL; ) i += 1;
  }
  let hasPatch = nExcessesBetweenChanges !== 0 || hasExcessAtStartOrEnd;
  nExcessesBetweenChanges !== 0 ? jLength += nExcessesBetweenChanges + 1 : hasExcessAtStartOrEnd && (jLength += 1);
  let jLast = jLength - 1, lines = [], jPatchMark = 0;
  hasPatch && lines.push("");
  let aStart = 0, bStart = 0, aEnd = 0, bEnd = 0, pushCommonLine = (line) => {
    let j = lines.length;
    lines.push(printCommonLine(line, j === 0 || j === jLast, options)), aEnd += 1, bEnd += 1;
  }, pushDeleteLine = (line) => {
    let j = lines.length;
    lines.push(printDeleteLine(line, j === 0 || j === jLast, options)), aEnd += 1;
  }, pushInsertLine = (line) => {
    let j = lines.length;
    lines.push(printInsertLine(line, j === 0 || j === jLast, options)), bEnd += 1;
  };
  for (i = 0; i !== iLength; ) {
    let iStart = i;
    for (; i !== iLength && diffs[i][0] === DIFF_EQUAL; ) i += 1;
    if (iStart !== i) if (iStart === 0) {
      i > nContextLines && (iStart = i - nContextLines, aStart = iStart, bStart = iStart, aEnd = aStart, bEnd = bStart);
      for (let iCommon = iStart; iCommon !== i; iCommon += 1) pushCommonLine(diffs[iCommon][1]);
    } else if (i === iLength) {
      let iEnd = i - iStart > nContextLines ? iStart + nContextLines : i;
      for (let iCommon = iStart; iCommon !== iEnd; iCommon += 1) pushCommonLine(diffs[iCommon][1]);
    } else {
      let nCommon = i - iStart;
      if (nCommon > nContextLines2) {
        let iEnd = iStart + nContextLines;
        for (let iCommon = iStart; iCommon !== iEnd; iCommon += 1) pushCommonLine(diffs[iCommon][1]);
        lines[jPatchMark] = createPatchMark(aStart, aEnd, bStart, bEnd, options), jPatchMark = lines.length, lines.push("");
        let nOmit = nCommon - nContextLines2;
        aStart = aEnd + nOmit, bStart = bEnd + nOmit, aEnd = aStart, bEnd = bStart;
        for (let iCommon = i - nContextLines; iCommon !== i; iCommon += 1) pushCommonLine(diffs[iCommon][1]);
      } else for (let iCommon = iStart; iCommon !== i; iCommon += 1) pushCommonLine(diffs[iCommon][1]);
    }
    for (; i !== iLength && diffs[i][0] === DIFF_DELETE; ) pushDeleteLine(diffs[i][1]), i += 1;
    for (; i !== iLength && diffs[i][0] === DIFF_INSERT; ) pushInsertLine(diffs[i][1]), i += 1;
  }
  return hasPatch && (lines[jPatchMark] = createPatchMark(aStart, aEnd, bStart, bEnd, options)), lines.join(`
`);
}
function joinAlignedDiffsExpand(diffs, options) {
  return diffs.map((diff2, i, diffs2) => {
    let line = diff2[1], isFirstOrLast = i === 0 || i === diffs2.length - 1;
    switch (diff2[0]) {
      case DIFF_DELETE:
        return printDeleteLine(line, isFirstOrLast, options);
      case DIFF_INSERT:
        return printInsertLine(line, isFirstOrLast, options);
      default:
        return printCommonLine(line, isFirstOrLast, options);
    }
  }).join(`
`);
}
var noColor = (string2) => string2, DIFF_CONTEXT_DEFAULT = 5, DIFF_TRUNCATE_THRESHOLD_DEFAULT = 0;
function getDefaultOptions() {
  let c = getColors();
  return { aAnnotation: "Expected", aColor: c.green, aIndicator: "-", bAnnotation: "Received", bColor: c.red, bIndicator: "+", changeColor: c.inverse, changeLineTrailingSpaceColor: noColor, commonColor: c.dim, commonIndicator: " ", commonLineTrailingSpaceColor: noColor, compareKeys: void 0, contextLines: DIFF_CONTEXT_DEFAULT, emptyFirstOrLastLinePlaceholder: "", expand: true, includeChangeCounts: false, omitAnnotationLines: false, patchColor: c.yellow, truncateThreshold: DIFF_TRUNCATE_THRESHOLD_DEFAULT, truncateAnnotation: "... Diff result is truncated", truncateAnnotationColor: noColor };
}
function getCompareKeys(compareKeys) {
  return compareKeys && typeof compareKeys == "function" ? compareKeys : void 0;
}
function getContextLines(contextLines) {
  return typeof contextLines == "number" && Number.isSafeInteger(contextLines) && contextLines >= 0 ? contextLines : DIFF_CONTEXT_DEFAULT;
}
function normalizeDiffOptions(options = {}) {
  return { ...getDefaultOptions(), ...options, compareKeys: getCompareKeys(options.compareKeys), contextLines: getContextLines(options.contextLines) };
}
function isEmptyString(lines) {
  return lines.length === 1 && lines[0].length === 0;
}
function countChanges(diffs) {
  let a = 0, b = 0;
  return diffs.forEach((diff2) => {
    switch (diff2[0]) {
      case DIFF_DELETE:
        a += 1;
        break;
      case DIFF_INSERT:
        b += 1;
        break;
    }
  }), { a, b };
}
function printAnnotation({ aAnnotation, aColor, aIndicator, bAnnotation, bColor, bIndicator, includeChangeCounts, omitAnnotationLines }, changeCounts) {
  if (omitAnnotationLines) return "";
  let aRest = "", bRest = "";
  if (includeChangeCounts) {
    let aCount = String(changeCounts.a), bCount = String(changeCounts.b), baAnnotationLengthDiff = bAnnotation.length - aAnnotation.length, aAnnotationPadding = " ".repeat(Math.max(0, baAnnotationLengthDiff)), bAnnotationPadding = " ".repeat(Math.max(0, -baAnnotationLengthDiff)), baCountLengthDiff = bCount.length - aCount.length, aCountPadding = " ".repeat(Math.max(0, baCountLengthDiff)), bCountPadding = " ".repeat(Math.max(0, -baCountLengthDiff));
    aRest = `${aAnnotationPadding}  ${aIndicator} ${aCountPadding}${aCount}`, bRest = `${bAnnotationPadding}  ${bIndicator} ${bCountPadding}${bCount}`;
  }
  let a = `${aIndicator} ${aAnnotation}${aRest}`, b = `${bIndicator} ${bAnnotation}${bRest}`;
  return `${aColor(a)}
${bColor(b)}

`;
}
function printDiffLines(diffs, truncated, options) {
  return printAnnotation(options, countChanges(diffs)) + (options.expand ? joinAlignedDiffsExpand(diffs, options) : joinAlignedDiffsNoExpand(diffs, options)) + (truncated ? options.truncateAnnotationColor(`
${options.truncateAnnotation}`) : "");
}
function diffLinesUnified(aLines, bLines, options) {
  let normalizedOptions = normalizeDiffOptions(options), [diffs, truncated] = diffLinesRaw(isEmptyString(aLines) ? [] : aLines, isEmptyString(bLines) ? [] : bLines, normalizedOptions);
  return printDiffLines(diffs, truncated, normalizedOptions);
}
function diffLinesUnified2(aLinesDisplay, bLinesDisplay, aLinesCompare, bLinesCompare, options) {
  if (isEmptyString(aLinesDisplay) && isEmptyString(aLinesCompare) && (aLinesDisplay = [], aLinesCompare = []), isEmptyString(bLinesDisplay) && isEmptyString(bLinesCompare) && (bLinesDisplay = [], bLinesCompare = []), aLinesDisplay.length !== aLinesCompare.length || bLinesDisplay.length !== bLinesCompare.length) return diffLinesUnified(aLinesDisplay, bLinesDisplay, options);
  let [diffs, truncated] = diffLinesRaw(aLinesCompare, bLinesCompare, options), aIndex = 0, bIndex = 0;
  return diffs.forEach((diff2) => {
    switch (diff2[0]) {
      case DIFF_DELETE:
        diff2[1] = aLinesDisplay[aIndex], aIndex += 1;
        break;
      case DIFF_INSERT:
        diff2[1] = bLinesDisplay[bIndex], bIndex += 1;
        break;
      default:
        diff2[1] = bLinesDisplay[bIndex], aIndex += 1, bIndex += 1;
    }
  }), printDiffLines(diffs, truncated, normalizeDiffOptions(options));
}
function diffLinesRaw(aLines, bLines, options) {
  let truncate = (options == null ? void 0 : options.truncateThreshold) ?? false, truncateThreshold = Math.max(Math.floor((options == null ? void 0 : options.truncateThreshold) ?? 0), 0), aLength = truncate ? Math.min(aLines.length, truncateThreshold) : aLines.length, bLength = truncate ? Math.min(bLines.length, truncateThreshold) : bLines.length, truncated = aLength !== aLines.length || bLength !== bLines.length, isCommon = (aIndex2, bIndex2) => aLines[aIndex2] === bLines[bIndex2], diffs = [], aIndex = 0, bIndex = 0, foundSubsequence = (nCommon, aCommon, bCommon) => {
    for (; aIndex !== aCommon; aIndex += 1) diffs.push(new Diff(DIFF_DELETE, aLines[aIndex]));
    for (; bIndex !== bCommon; bIndex += 1) diffs.push(new Diff(DIFF_INSERT, bLines[bIndex]));
    for (; nCommon !== 0; nCommon -= 1, aIndex += 1, bIndex += 1) diffs.push(new Diff(DIFF_EQUAL, bLines[bIndex]));
  };
  for ((diff$1.default.default || diff$1.default)(aLength, bLength, isCommon, foundSubsequence); aIndex !== aLength; aIndex += 1) diffs.push(new Diff(DIFF_DELETE, aLines[aIndex]));
  for (; bIndex !== bLength; bIndex += 1) diffs.push(new Diff(DIFF_INSERT, bLines[bIndex]));
  return [diffs, truncated];
}
function getCommonMessage(message, options) {
  let { commonColor } = normalizeDiffOptions(options);
  return commonColor(message);
}
var { AsymmetricMatcher, DOMCollection, DOMElement, Immutable, ReactElement, ReactTestComponent } = import_pretty_format.plugins, PLUGINS = [ReactTestComponent, ReactElement, DOMElement, DOMCollection, Immutable, AsymmetricMatcher], FORMAT_OPTIONS = { plugins: PLUGINS }, FALLBACK_FORMAT_OPTIONS = { callToJSON: false, maxDepth: 10, plugins: PLUGINS };
function diff(a, b, options) {
  if (Object.is(a, b)) return "";
  let aType = getType(a), expectedType = aType, omitDifference = false;
  if (aType === "object" && typeof a.asymmetricMatch == "function") {
    if (a.$$typeof !== Symbol.for("jest.asymmetricMatcher") || typeof a.getExpectedType != "function") return null;
    expectedType = a.getExpectedType(), omitDifference = expectedType === "string";
  }
  if (expectedType !== getType(b)) {
    let { aAnnotation, aColor, aIndicator, bAnnotation, bColor, bIndicator } = normalizeDiffOptions(options), formatOptions = getFormatOptions(FALLBACK_FORMAT_OPTIONS, options), aDisplay = (0, import_pretty_format.format)(a, formatOptions), bDisplay = (0, import_pretty_format.format)(b, formatOptions), aDiff = `${aColor(`${aIndicator} ${aAnnotation}:`)} 
${aDisplay}`, bDiff = `${bColor(`${bIndicator} ${bAnnotation}:`)} 
${bDisplay}`;
    return `${aDiff}

${bDiff}`;
  }
  if (omitDifference) return null;
  switch (aType) {
    case "string":
      return diffLinesUnified(a.split(`
`), b.split(`
`), options);
    case "boolean":
    case "number":
      return comparePrimitive(a, b, options);
    case "map":
      return compareObjects(sortMap(a), sortMap(b), options);
    case "set":
      return compareObjects(sortSet(a), sortSet(b), options);
    default:
      return compareObjects(a, b, options);
  }
}
function comparePrimitive(a, b, options) {
  let aFormat = (0, import_pretty_format.format)(a, FORMAT_OPTIONS), bFormat = (0, import_pretty_format.format)(b, FORMAT_OPTIONS);
  return aFormat === bFormat ? "" : diffLinesUnified(aFormat.split(`
`), bFormat.split(`
`), options);
}
function sortMap(map) {
  return new Map(Array.from(map.entries()).sort());
}
function sortSet(set) {
  return new Set(Array.from(set.values()).sort());
}
function compareObjects(a, b, options) {
  let difference, hasThrown = false;
  try {
    let formatOptions = getFormatOptions(FORMAT_OPTIONS, options);
    difference = getObjectsDifference(a, b, formatOptions, options);
  } catch {
    hasThrown = true;
  }
  let noDiffMessage = getCommonMessage(NO_DIFF_MESSAGE, options);
  if (difference === void 0 || difference === noDiffMessage) {
    let formatOptions = getFormatOptions(FALLBACK_FORMAT_OPTIONS, options);
    difference = getObjectsDifference(a, b, formatOptions, options), difference !== noDiffMessage && !hasThrown && (difference = `${getCommonMessage(SIMILAR_MESSAGE, options)}

${difference}`);
  }
  return difference;
}
function getFormatOptions(formatOptions, options) {
  let { compareKeys } = normalizeDiffOptions(options);
  return { ...formatOptions, compareKeys };
}
function getObjectsDifference(a, b, formatOptions, options) {
  let formatOptionsZeroIndent = { ...formatOptions, indent: 0 }, aCompare = (0, import_pretty_format.format)(a, formatOptionsZeroIndent), bCompare = (0, import_pretty_format.format)(b, formatOptionsZeroIndent);
  if (aCompare === bCompare) return getCommonMessage(NO_DIFF_MESSAGE, options);
  {
    let aDisplay = (0, import_pretty_format.format)(a, formatOptions), bDisplay = (0, import_pretty_format.format)(b, formatOptions);
    return diffLinesUnified2(aDisplay.split(`
`), bDisplay.split(`
`), aCompare.split(`
`), bCompare.split(`
`), options);
  }
}
var import_pretty_format2 = __toESM(require_build()), loupe = __toESM(require_loupe()), { AsymmetricMatcher: AsymmetricMatcher2, DOMCollection: DOMCollection2, DOMElement: DOMElement2, Immutable: Immutable2, ReactElement: ReactElement2, ReactTestComponent: ReactTestComponent2 } = import_pretty_format2.plugins, PLUGINS2 = [ReactTestComponent2, ReactElement2, DOMElement2, DOMCollection2, Immutable2, AsymmetricMatcher2];
function stringify(object, maxDepth = 10, { maxLength, ...options } = {}) {
  let MAX_LENGTH = maxLength ?? 1e4, result;
  try {
    result = (0, import_pretty_format2.format)(object, { maxDepth, escapeString: false, plugins: PLUGINS2, ...options });
  } catch {
    result = (0, import_pretty_format2.format)(object, { callToJSON: false, maxDepth, escapeString: false, plugins: PLUGINS2, ...options });
  }
  return result.length >= MAX_LENGTH && maxDepth > 1 ? stringify(object, Math.floor(maxDepth / 2)) : result;
}
var formatRegExp = /%[sdjifoOcj%]/g;
function format2(...args) {
  if (typeof args[0] != "string") {
    let objects = [];
    for (let i2 = 0; i2 < args.length; i2++) objects.push(inspect2(args[i2], { depth: 0, colors: false, compact: 3 }));
    return objects.join(" ");
  }
  let len = args.length, i = 1, template = args[0], str = String(template).replace(formatRegExp, (x) => {
    if (x === "%%") return "%";
    if (i >= len) return x;
    switch (x) {
      case "%s": {
        let value = args[i++];
        return typeof value == "bigint" ? `${value.toString()}n` : typeof value == "number" && value === 0 && 1 / value < 0 ? "-0" : typeof value == "object" && value !== null ? inspect2(value, { depth: 0, colors: false, compact: 3 }) : String(value);
      }
      case "%d": {
        let value = args[i++];
        return typeof value == "bigint" ? `${value.toString()}n` : Number(value).toString();
      }
      case "%i": {
        let value = args[i++];
        return typeof value == "bigint" ? `${value.toString()}n` : Number.parseInt(String(value)).toString();
      }
      case "%f":
        return Number.parseFloat(String(args[i++])).toString();
      case "%o":
        return inspect2(args[i++], { showHidden: true, showProxy: true });
      case "%O":
        return inspect2(args[i++]);
      case "%c":
        return i++, "";
      case "%j":
        try {
          return JSON.stringify(args[i++]);
        } catch (err) {
          let m = err.message;
          if (m.includes("circular structure") || m.includes("cyclic structures") || m.includes("cyclic object")) return "[Circular]";
          throw err;
        }
      default:
        return x;
    }
  });
  for (let x = args[i]; i < len; x = args[++i]) x === null || typeof x != "object" ? str += ` ${x}` : str += ` ${inspect2(x)}`;
  return str;
}
function inspect2(obj, options = {}) {
  return options.truncate === 0 && (options.truncate = Number.POSITIVE_INFINITY), loupe.inspect(obj, options);
}
function isFinalObj(obj) {
  return obj === Object.prototype || obj === Function.prototype || obj === RegExp.prototype;
}
function getType2(value) {
  return Object.prototype.toString.apply(value).slice(8, -1);
}
function collectOwnProperties(obj, collector) {
  let collect = typeof collector == "function" ? collector : (key) => collector.add(key);
  Object.getOwnPropertyNames(obj).forEach(collect), Object.getOwnPropertySymbols(obj).forEach(collect);
}
function getOwnProperties(obj) {
  let ownProps = /* @__PURE__ */ new Set();
  return isFinalObj(obj) ? [] : (collectOwnProperties(obj, ownProps), Array.from(ownProps));
}
var defaultCloneOptions = { forceWritable: false };
function deepClone(val, options = defaultCloneOptions) {
  return clone(val, /* @__PURE__ */ new WeakMap(), options);
}
function clone(val, seen, options = defaultCloneOptions) {
  let k, out;
  if (seen.has(val)) return seen.get(val);
  if (Array.isArray(val)) {
    for (out = Array(k = val.length), seen.set(val, out); k--; ) out[k] = clone(val[k], seen, options);
    return out;
  }
  if (Object.prototype.toString.call(val) === "[object Object]") {
    out = Object.create(Object.getPrototypeOf(val)), seen.set(val, out);
    let props = getOwnProperties(val);
    for (let k2 of props) {
      let descriptor = Object.getOwnPropertyDescriptor(val, k2);
      if (!descriptor) continue;
      let cloned = clone(val[k2], seen, options);
      options.forceWritable ? Object.defineProperty(out, k2, { enumerable: descriptor.enumerable, configurable: true, writable: true, value: cloned }) : "get" in descriptor ? Object.defineProperty(out, k2, { ...descriptor, get() {
        return cloned;
      } }) : Object.defineProperty(out, k2, { ...descriptor, value: cloned });
    }
    return out;
  }
  return val;
}
__toESM(require_build());
__toESM(require_build2());
__toESM(require_loupe());
var IS_RECORD_SYMBOL = "@@__IMMUTABLE_RECORD__@@", IS_COLLECTION_SYMBOL = "@@__IMMUTABLE_ITERABLE__@@";
function isImmutable(v) {
  return v && (v[IS_COLLECTION_SYMBOL] || v[IS_RECORD_SYMBOL]);
}
var OBJECT_PROTO = Object.getPrototypeOf({});
function getUnserializableMessage(err) {
  return err instanceof Error ? `<unserializable>: ${err.message}` : typeof err == "string" ? `<unserializable>: ${err}` : "<unserializable>";
}
function serializeError(val, seen = /* @__PURE__ */ new WeakMap()) {
  if (!val || typeof val == "string") return val;
  if (typeof val == "function") return `Function<${val.name || "anonymous"}>`;
  if (typeof val == "symbol") return val.toString();
  if (typeof val != "object") return val;
  if (isImmutable(val)) return serializeError(val.toJSON(), seen);
  if (val instanceof Promise || val.constructor && val.constructor.prototype === "AsyncFunction") return "Promise";
  if (typeof Element < "u" && val instanceof Element) return val.tagName;
  if (typeof val.asymmetricMatch == "function") return `${val.toString()} ${format2(val.sample)}`;
  if (typeof val.toJSON == "function") return val.toJSON();
  if (seen.has(val)) return seen.get(val);
  if (Array.isArray(val)) {
    let clone2 = new Array(val.length);
    return seen.set(val, clone2), val.forEach((e, i) => {
      try {
        clone2[i] = serializeError(e, seen);
      } catch (err) {
        clone2[i] = getUnserializableMessage(err);
      }
    }), clone2;
  } else {
    let clone2 = /* @__PURE__ */ Object.create(null);
    seen.set(val, clone2);
    let obj = val;
    for (; obj && obj !== OBJECT_PROTO; ) Object.getOwnPropertyNames(obj).forEach((key) => {
      if (!(key in clone2)) try {
        clone2[key] = serializeError(val[key], seen);
      } catch (err) {
        delete clone2[key], clone2[key] = getUnserializableMessage(err);
      }
    }), obj = Object.getPrototypeOf(obj);
    return clone2;
  }
}
function normalizeErrorMessage(message) {
  return message.replace(/__(vite_ssr_import|vi_import)_\d+__\./g, "");
}
function processError(err, diffOptions) {
  if (!err || typeof err != "object") return { message: err };
  if (err.stack && (err.stackStr = String(err.stack)), err.name && (err.nameStr = String(err.name)), err.showDiff || err.showDiff === void 0 && err.expected !== void 0 && err.actual !== void 0) {
    let clonedActual = deepClone(err.actual, { forceWritable: true }), clonedExpected = deepClone(err.expected, { forceWritable: true }), { replacedActual, replacedExpected } = replaceAsymmetricMatcher(clonedActual, clonedExpected);
    err.diff = diff(replacedExpected, replacedActual, { ...diffOptions, ...err.diffOptions });
  }
  typeof err.expected != "string" && (err.expected = stringify(err.expected, 10)), typeof err.actual != "string" && (err.actual = stringify(err.actual, 10));
  try {
    typeof err.message == "string" && (err.message = normalizeErrorMessage(err.message)), typeof err.cause == "object" && typeof err.cause.message == "string" && (err.cause.message = normalizeErrorMessage(err.cause.message));
  } catch {
  }
  try {
    return serializeError(err);
  } catch (e) {
    return serializeError(new Error(`Failed to fully serialize error: ${e == null ? void 0 : e.message}
Inner error message: ${err == null ? void 0 : err.message}`));
  }
}
function isAsymmetricMatcher(data) {
  return getType2(data) === "Object" && typeof data.asymmetricMatch == "function";
}
function isReplaceable(obj1, obj2) {
  let obj1Type = getType2(obj1), obj2Type = getType2(obj2);
  return obj1Type === obj2Type && (obj1Type === "Object" || obj1Type === "Array");
}
function replaceAsymmetricMatcher(actual, expected, actualReplaced = /* @__PURE__ */ new WeakSet(), expectedReplaced = /* @__PURE__ */ new WeakSet()) {
  return isReplaceable(actual, expected) ? actualReplaced.has(actual) || expectedReplaced.has(expected) ? { replacedActual: actual, replacedExpected: expected } : (actualReplaced.add(actual), expectedReplaced.add(expected), getOwnProperties(expected).forEach((key) => {
    let expectedValue = expected[key], actualValue = actual[key];
    if (isAsymmetricMatcher(expectedValue)) expectedValue.asymmetricMatch(actualValue) && (actual[key] = expectedValue);
    else if (isAsymmetricMatcher(actualValue)) actualValue.asymmetricMatch(expectedValue) && (expected[key] = actualValue);
    else if (isReplaceable(actualValue, expectedValue)) {
      let replaced = replaceAsymmetricMatcher(actualValue, expectedValue, actualReplaced, expectedReplaced);
      actual[key] = replaced.replacedActual, expected[key] = replaced.replacedExpected;
    }
  }), { replacedActual: actual, replacedExpected: expected }) : { replacedActual: actual, replacedExpected: expected };
}
var CallStates = ((CallStates2) => (CallStates2.DONE = "done", CallStates2.ERROR = "error", CallStates2.ACTIVE = "active", CallStates2.WAITING = "waiting", CallStates2))(CallStates || {});
var EVENTS = { CALL: "storybook/instrumenter/call", SYNC: "storybook/instrumenter/sync", START: "storybook/instrumenter/start", BACK: "storybook/instrumenter/back", GOTO: "storybook/instrumenter/goto", NEXT: "storybook/instrumenter/next", END: "storybook/instrumenter/end" }, controlsDisabled = { start: false, back: false, goto: false, next: false, end: false }, alreadyCompletedException = new Error("This function ran after the play function completed. Did you forget to `await` it?"), isObject = (o) => Object.prototype.toString.call(o) === "[object Object]", isModule = (o) => Object.prototype.toString.call(o) === "[object Module]", isInstrumentable = (o) => {
  if (!isObject(o) && !isModule(o)) return false;
  if (o.constructor === void 0) return true;
  let proto = o.constructor.prototype;
  return !!isObject(proto);
}, construct = (obj) => {
  try {
    return new obj.constructor();
  } catch {
    return {};
  }
}, getInitialState = () => ({ renderPhase: void 0, isDebugging: false, isPlaying: false, isLocked: false, cursor: 0, calls: [], shadowCalls: [], callRefsByResult: /* @__PURE__ */ new Map(), chainedCallIds: /* @__PURE__ */ new Set(), ancestors: [], playUntil: void 0, resolvers: {}, syncTimeout: void 0 }), getRetainedState = (state, isDebugging = false) => {
  let calls = (isDebugging ? state.shadowCalls : state.calls).filter((call) => call.retain);
  if (!calls.length) return;
  let callRefsByResult = new Map(Array.from(state.callRefsByResult.entries()).filter(([, ref]) => ref.retain));
  return { cursor: calls.length, calls, callRefsByResult };
}, Instrumenter = class {
  constructor() {
    var _a;
    this.initialized = false;
    this.channel = addons.getChannel(), this.state = ((_a = global.window) == null ? void 0 : _a.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__) || {};
    let resetState = ({ storyId, isPlaying = true, isDebugging = false }) => {
      let state = this.getState(storyId);
      this.setState(storyId, { ...getInitialState(), ...getRetainedState(state, isDebugging), shadowCalls: isDebugging ? state.shadowCalls : [], chainedCallIds: isDebugging ? state.chainedCallIds : /* @__PURE__ */ new Set(), playUntil: isDebugging ? state.playUntil : void 0, isPlaying, isDebugging }), this.sync(storyId);
    };
    this.channel.on(FORCE_REMOUNT, resetState), this.channel.on(STORY_RENDER_PHASE_CHANGED, ({ storyId, newPhase }) => {
      let { isDebugging } = this.getState(storyId);
      this.setState(storyId, { renderPhase: newPhase }), newPhase === "preparing" && isDebugging && resetState({ storyId }), newPhase === "playing" && resetState({ storyId, isDebugging }), newPhase === "played" && this.setState(storyId, { isLocked: false, isPlaying: false, isDebugging: false }), newPhase === "errored" && this.setState(storyId, { isLocked: false, isPlaying: false });
    }), this.channel.on(SET_CURRENT_STORY, () => {
      this.initialized ? this.cleanup() : this.initialized = true;
    });
    let start = ({ storyId, playUntil }) => {
      this.getState(storyId).isDebugging || this.setState(storyId, ({ calls }) => ({ calls: [], shadowCalls: calls.map((call) => ({ ...call, status: "waiting" })), isDebugging: true }));
      let log = this.getLog(storyId);
      this.setState(storyId, ({ shadowCalls }) => {
        var _a2;
        if (playUntil || !log.length) return { playUntil };
        let firstRowIndex = shadowCalls.findIndex((call) => call.id === log[0].callId);
        return { playUntil: (_a2 = shadowCalls.slice(0, firstRowIndex).filter((call) => call.interceptable && !call.ancestors.length).slice(-1)[0]) == null ? void 0 : _a2.id };
      }), this.channel.emit(FORCE_REMOUNT, { storyId, isDebugging: true });
    }, back = ({ storyId }) => {
      var _a2;
      let log = this.getLog(storyId).filter((call) => !call.ancestors.length), last = log.reduceRight((res, item, index) => res >= 0 || item.status === "waiting" ? res : index, -1);
      start({ storyId, playUntil: (_a2 = log[last - 1]) == null ? void 0 : _a2.callId });
    }, goto = ({ storyId, callId }) => {
      var _a2;
      let { calls, shadowCalls, resolvers } = this.getState(storyId), call = calls.find(({ id }) => id === callId), shadowCall = shadowCalls.find(({ id }) => id === callId);
      if (!call && shadowCall && Object.values(resolvers).length > 0) {
        let nextId = (_a2 = this.getLog(storyId).find((c) => c.status === "waiting")) == null ? void 0 : _a2.callId;
        shadowCall.id !== nextId && this.setState(storyId, { playUntil: shadowCall.id }), Object.values(resolvers).forEach((resolve) => resolve());
      } else start({ storyId, playUntil: callId });
    }, next = ({ storyId }) => {
      var _a2;
      let { resolvers } = this.getState(storyId);
      if (Object.values(resolvers).length > 0) Object.values(resolvers).forEach((resolve) => resolve());
      else {
        let nextId = (_a2 = this.getLog(storyId).find((c) => c.status === "waiting")) == null ? void 0 : _a2.callId;
        nextId ? start({ storyId, playUntil: nextId }) : end({ storyId });
      }
    }, end = ({ storyId }) => {
      this.setState(storyId, { playUntil: void 0, isDebugging: false }), Object.values(this.getState(storyId).resolvers).forEach((resolve) => resolve());
    };
    this.channel.on(EVENTS.START, start), this.channel.on(EVENTS.BACK, back), this.channel.on(EVENTS.GOTO, goto), this.channel.on(EVENTS.NEXT, next), this.channel.on(EVENTS.END, end);
  }
  getState(storyId) {
    return this.state[storyId] || getInitialState();
  }
  setState(storyId, update) {
    var _a;
    let state = this.getState(storyId), patch = typeof update == "function" ? update(state) : update;
    this.state = { ...this.state, [storyId]: { ...state, ...patch } }, ((_a = global.window) == null ? void 0 : _a.parent) && (global.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state);
  }
  cleanup() {
    var _a;
    this.state = Object.entries(this.state).reduce((acc, [storyId, state]) => {
      let retainedState = getRetainedState(state);
      return retainedState && (acc[storyId] = Object.assign(getInitialState(), retainedState)), acc;
    }, {});
    let payload = { controlStates: controlsDisabled, logItems: [] };
    this.channel.emit(EVENTS.SYNC, payload), ((_a = global.window) == null ? void 0 : _a.parent) && (global.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state);
  }
  getLog(storyId) {
    let { calls, shadowCalls } = this.getState(storyId), merged = [...shadowCalls];
    calls.forEach((call, index) => {
      merged[index] = call;
    });
    let seen = /* @__PURE__ */ new Set();
    return merged.reduceRight((acc, call) => (call.args.forEach((arg) => {
      (arg == null ? void 0 : arg.__callId__) && seen.add(arg.__callId__);
    }), call.path.forEach((node) => {
      node.__callId__ && seen.add(node.__callId__);
    }), (call.interceptable || call.exception) && !seen.has(call.id) && (acc.unshift({ callId: call.id, status: call.status, ancestors: call.ancestors }), seen.add(call.id)), acc), []);
  }
  instrument(obj, options, depth = 0) {
    if (!isInstrumentable(obj)) return obj;
    let { mutate = false, path = [] } = options, keys = options.getKeys ? options.getKeys(obj, depth) : Object.keys(obj);
    return depth += 1, keys.reduce((acc, key) => {
      let descriptor = getPropertyDescriptor(obj, key);
      if (typeof (descriptor == null ? void 0 : descriptor.get) == "function") {
        let getter = () => {
          var _a, _b;
          return (_b = (_a = descriptor == null ? void 0 : descriptor.get) == null ? void 0 : _a.bind(obj)) == null ? void 0 : _b();
        };
        return Object.defineProperty(acc, key, { get: () => this.instrument(getter(), { ...options, path: path.concat(key) }, depth) }), acc;
      }
      let value = obj[key];
      return typeof value != "function" ? (acc[key] = this.instrument(value, { ...options, path: path.concat(key) }, depth), acc) : "__originalFn__" in value && typeof value.__originalFn__ == "function" ? (acc[key] = value, acc) : (acc[key] = (...args) => this.track(key, value, obj, args, options), acc[key].__originalFn__ = value, Object.defineProperty(acc[key], "name", { value: key, writable: false }), Object.keys(value).length > 0 && Object.assign(acc[key], this.instrument({ ...value }, { ...options, path: path.concat(key) }, depth)), acc);
    }, mutate ? obj : construct(obj));
  }
  track(method, fn, object, args, options) {
    var _a, _b, _c, _d;
    let storyId = ((_a = args == null ? void 0 : args[0]) == null ? void 0 : _a.__storyId__) || ((_d = (_c = (_b = global.__STORYBOOK_PREVIEW__) == null ? void 0 : _b.selectionStore) == null ? void 0 : _c.selection) == null ? void 0 : _d.storyId), { cursor, ancestors } = this.getState(storyId);
    this.setState(storyId, { cursor: cursor + 1 });
    let id = `${ancestors.slice(-1)[0] || storyId} [${cursor}] ${method}`, { path = [], intercept = false, retain = false } = options, interceptable = typeof intercept == "function" ? intercept(method, path) : intercept, call = { id, cursor, storyId, ancestors, path, method, args, interceptable, retain }, result = (interceptable && !ancestors.length ? this.intercept : this.invoke).call(this, fn, object, call, options);
    return this.instrument(result, { ...options, mutate: true, path: [{ __callId__: call.id }] });
  }
  intercept(fn, object, call, options) {
    let { chainedCallIds, isDebugging, playUntil } = this.getState(call.storyId), isChainedUpon = chainedCallIds.has(call.id);
    return !isDebugging || isChainedUpon || playUntil ? (playUntil === call.id && this.setState(call.storyId, { playUntil: void 0 }), this.invoke(fn, object, call, options)) : new Promise((resolve) => {
      this.setState(call.storyId, ({ resolvers }) => ({ isLocked: false, resolvers: { ...resolvers, [call.id]: resolve } }));
    }).then(() => (this.setState(call.storyId, (state) => {
      let { [call.id]: _, ...resolvers } = state.resolvers;
      return { isLocked: true, resolvers };
    }), this.invoke(fn, object, call, options)));
  }
  invoke(fn, object, call, options) {
    let { callRefsByResult, renderPhase } = this.getState(call.storyId), serializeValues = (value) => {
      var _a, _b, _c;
      if (callRefsByResult.has(value)) return callRefsByResult.get(value);
      if (value instanceof Array) return value.map(serializeValues);
      if (value instanceof Date) return { __date__: { value: value.toISOString() } };
      if (value instanceof Error) {
        let { name, message, stack } = value;
        return { __error__: { name, message, stack } };
      }
      if (value instanceof RegExp) {
        let { flags, source } = value;
        return { __regexp__: { flags, source } };
      }
      if (value instanceof ((_a = global.window) == null ? void 0 : _a.HTMLElement)) {
        let { prefix, localName, id, classList, innerText } = value, classNames = Array.from(classList);
        return { __element__: { prefix, localName, id, classNames, innerText } };
      }
      return typeof value == "function" ? { __function__: { name: "getMockName" in value ? value.getMockName() : value.name } } : typeof value == "symbol" ? { __symbol__: { description: value.description } } : typeof value == "object" && ((_b = value == null ? void 0 : value.constructor) == null ? void 0 : _b.name) && ((_c = value == null ? void 0 : value.constructor) == null ? void 0 : _c.name) !== "Object" ? { __class__: { name: value.constructor.name } } : Object.prototype.toString.call(value) === "[object Object]" ? Object.fromEntries(Object.entries(value).map(([key, val]) => [key, serializeValues(val)])) : value;
    }, info = { ...call, args: call.args.map(serializeValues) };
    call.path.forEach((ref) => {
      (ref == null ? void 0 : ref.__callId__) && this.setState(call.storyId, ({ chainedCallIds }) => ({ chainedCallIds: new Set(Array.from(chainedCallIds).concat(ref.__callId__)) }));
    });
    let handleException = (e) => {
      if (e instanceof Error) {
        let { name, message, stack, callId = call.id } = e, { showDiff = void 0, diff: diff2 = void 0, actual = void 0, expected = void 0 } = e.name === "AssertionError" ? processError(e) : e, exception = { name, message, stack, callId, showDiff, diff: diff2, actual, expected };
        if (this.update({ ...info, status: "error", exception }), this.setState(call.storyId, (state) => ({ callRefsByResult: new Map([...Array.from(state.callRefsByResult.entries()), [e, { __callId__: call.id, retain: call.retain }]]) })), call.ancestors.length) throw Object.prototype.hasOwnProperty.call(e, "callId") || Object.defineProperty(e, "callId", { value: call.id }), e;
      }
      throw e;
    };
    try {
      if (renderPhase === "played" && !call.retain) throw alreadyCompletedException;
      let finalArgs = (options.getArgs ? options.getArgs(call, this.getState(call.storyId)) : call.args).map((arg) => typeof arg != "function" || Object.keys(arg).length ? arg : (...args) => {
        let { cursor, ancestors } = this.getState(call.storyId);
        this.setState(call.storyId, { cursor: 0, ancestors: [...ancestors, call.id] });
        let restore = () => this.setState(call.storyId, { cursor, ancestors }), willRestore = false;
        try {
          let res = arg(...args);
          return res instanceof Promise ? (willRestore = true, res.finally(restore)) : res;
        } finally {
          willRestore || restore();
        }
      }), result = fn.apply(object, finalArgs);
      return result && ["object", "function", "symbol"].includes(typeof result) && this.setState(call.storyId, (state) => ({ callRefsByResult: new Map([...Array.from(state.callRefsByResult.entries()), [result, { __callId__: call.id, retain: call.retain }]]) })), this.update({ ...info, status: result instanceof Promise ? "active" : "done" }), result instanceof Promise ? result.then((value) => (this.update({ ...info, status: "done" }), value), handleException) : result;
    } catch (e) {
      return handleException(e);
    }
  }
  update(call) {
    this.channel.emit(EVENTS.CALL, call), this.setState(call.storyId, ({ calls }) => {
      let callsById = calls.concat(call).reduce((a, c) => Object.assign(a, { [c.id]: c }), {});
      return { calls: Object.values(callsById).sort((a, b) => a.id.localeCompare(b.id, void 0, { numeric: true })) };
    }), this.sync(call.storyId);
  }
  sync(storyId) {
    let synchronize = () => {
      var _a;
      let { isLocked, isPlaying } = this.getState(storyId), logItems = this.getLog(storyId), pausedAt = (_a = logItems.filter(({ ancestors }) => !ancestors.length).find((item) => item.status === "waiting")) == null ? void 0 : _a.callId, hasActive = logItems.some((item) => item.status === "active");
      if (isLocked || hasActive || logItems.length === 0) {
        let payload2 = { controlStates: controlsDisabled, logItems };
        this.channel.emit(EVENTS.SYNC, payload2);
        return;
      }
      let hasPrevious = logItems.some((item) => item.status === "done" || item.status === "error"), payload = { controlStates: { start: hasPrevious, back: hasPrevious, goto: true, next: isPlaying, end: isPlaying }, logItems, pausedAt };
      this.channel.emit(EVENTS.SYNC, payload);
    };
    this.setState(storyId, ({ syncTimeout }) => (clearTimeout(syncTimeout), { syncTimeout: setTimeout(synchronize, 0) }));
  }
};
function instrument(obj, options = {}) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  try {
    let forceInstrument = false, skipInstrument = false;
    return ((_c = (_b = (_a = global.window) == null ? void 0 : _a.location) == null ? void 0 : _b.search) == null ? void 0 : _c.includes("instrument=true")) ? forceInstrument = true : ((_f = (_e = (_d = global.window) == null ? void 0 : _d.location) == null ? void 0 : _e.search) == null ? void 0 : _f.includes("instrument=false")) && (skipInstrument = true), ((_g = global.window) == null ? void 0 : _g.parent) === global.window && !forceInstrument || skipInstrument ? obj : (global.window && !global.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ && (global.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ = new Instrumenter()), ((_h = global.window) == null ? void 0 : _h.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__).instrument(obj, options));
  } catch (e) {
    return once.warn(e), obj;
  }
}
function getPropertyDescriptor(obj, propName) {
  let target = obj;
  for (; target != null; ) {
    let descriptor = Object.getOwnPropertyDescriptor(target, propName);
    if (descriptor) return descriptor;
    target = Object.getPrototypeOf(target);
  }
}
var { step: runStep } = instrument({ step: (label, play, context) => play(context) }, { intercept: true }), parameters = { throwPlayFunctionExceptions: false };
export {
  parameters,
  runStep
};
