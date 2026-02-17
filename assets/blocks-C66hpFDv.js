const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Color-AVL7NMMY-SKTCXoFT.js","./iframe-BMr-kR9u.js","./preload-helper-CQrtv1eE.js","./iframe-CvHQwD_6.css","./jsx-runtime-COvKL7u4.js","./index-CJ9b0Pjr.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value2) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __publicField = (obj, key, value2) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value2);
var _a, _b, _c2, _d2;
import { _ as __vitePreload } from "./preload-helper-CQrtv1eE.js";
import { x as xr$3, e, r as reactExports, y as yr$3, h as h$1, W as W$3, a as hf$1, f as fo$3, E as Ee$3, b as We$3, S as St$3, T as Tt$3, I as Ir$2, M as Me$3, p as pf$1, d as Tn$2, i as ha } from "./iframe-BMr-kR9u.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-COvKL7u4.js";
import { F as Fg, r as reactDomExports } from "./index-CJ9b0Pjr.js";
var lr$2 = Object.defineProperty;
var i$1 = (e4, t4) => lr$2(e4, "name", { value: t4, configurable: true });
const { once: qs } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
const {
  FORCE_REMOUNT: ir$2,
  SET_CURRENT_STORY: Ks,
  STORY_RENDER_PHASE_CHANGED: Gs
} = __STORYBOOK_MODULE_CORE_EVENTS__;
const { global: Z$3 } = __STORYBOOK_MODULE_GLOBAL__;
var fr$2 = {
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
}, mr$2 = Object.entries(fr$2);
function Ge$3(e4) {
  return String(e4);
}
i$1(Ge$3, "a");
Ge$3.open = "";
Ge$3.close = "";
function Ft$1(e4 = false) {
  let t4 = typeof process < "u" ? process : void 0, n3 = (t4 == null ? void 0 : t4.env) || {}, r4 = (t4 == null ? void 0 : t4.argv) || [];
  return !("NO_COLOR" in n3 || r4.includes("--no-color")) && ("FORCE_COLOR" in n3 || r4.includes("--color") || (t4 == null ? void 0 : t4.platform) === "win32" || e4 && n3.TERM !== "dumb" || "CI" in n3) || typeof window < "u" && !!window.chrome;
}
i$1(Ft$1, "C");
function jt$1(e4 = false) {
  let t4 = Ft$1(e4), n3 = /* @__PURE__ */ i$1((c3, a4, u4, m2) => {
    let p3 = "", l4 = 0;
    do
      p3 += c3.substring(l4, m2) + u4, l4 = m2 + a4.length, m2 = c3.indexOf(a4, l4);
    while (~m2);
    return p3 + c3.substring(l4);
  }, "i"), r4 = /* @__PURE__ */ i$1((c3, a4, u4 = c3) => {
    let m2 = /* @__PURE__ */ i$1((p3) => {
      let l4 = String(p3), b3 = l4.indexOf(a4, c3.length);
      return ~b3 ? c3 + n3(l4, a4, u4, b3) + a4 : c3 + l4 + a4;
    }, "o");
    return m2.open = c3, m2.close = a4, m2;
  }, "g"), o3 = {
    isColorSupported: t4
  }, s4 = /* @__PURE__ */ i$1((c3) => `\x1B[${c3}m`, "d");
  for (let [c3, a4] of mr$2)
    o3[c3] = t4 ? r4(
      s4(a4[0]),
      s4(a4[1]),
      a4[2]
    ) : Ge$3;
  return o3;
}
i$1(jt$1, "p");
var v$1 = jt$1();
function Xt$2(e4, t4) {
  return t4.forEach(function(n3) {
    n3 && typeof n3 != "string" && !Array.isArray(n3) && Object.keys(n3).forEach(function(r4) {
      if (r4 !== "default" && !(r4 in e4)) {
        var o3 = Object.getOwnPropertyDescriptor(n3, r4);
        Object.defineProperty(e4, r4, o3.get ? o3 : {
          enumerable: true,
          get: /* @__PURE__ */ i$1(function() {
            return n3[r4];
          }, "get")
        });
      }
    });
  }), Object.freeze(e4);
}
i$1(Xt$2, "_mergeNamespaces");
function pr$2(e4, t4) {
  let n3 = Object.keys(e4), r4 = t4 === null ? n3 : n3.sort(t4);
  if (Object.getOwnPropertySymbols)
    for (let o3 of Object.getOwnPropertySymbols(e4))
      Object.getOwnPropertyDescriptor(e4, o3).enumerable && r4.push(o3);
  return r4;
}
i$1(pr$2, "getKeysOfEnumerableProperties");
function Ee$2(e4, t4, n3, r4, o3, s4, c3 = ": ") {
  let a4 = "", u4 = 0, m2 = e4.next();
  if (!m2.done) {
    a4 += t4.spacingOuter;
    let p3 = n3 + t4.indent;
    for (; !m2.done; ) {
      if (a4 += p3, u4++ === t4.maxWidth) {
        a4 += "…";
        break;
      }
      let l4 = s4(m2.value[0], t4, p3, r4, o3), b3 = s4(m2.value[1], t4, p3, r4, o3);
      a4 += l4 + c3 + b3, m2 = e4.next(), m2.done ? t4.min || (a4 += ",") : a4 += `,${t4.spacingInner}`;
    }
    a4 += t4.spacingOuter + n3;
  }
  return a4;
}
i$1(Ee$2, "printIteratorEntries");
function Qe$2(e4, t4, n3, r4, o3, s4) {
  let c3 = "", a4 = 0, u4 = e4.next();
  if (!u4.done) {
    c3 += t4.spacingOuter;
    let m2 = n3 + t4.indent;
    for (; !u4.done; ) {
      if (c3 += m2, a4++ === t4.maxWidth) {
        c3 += "…";
        break;
      }
      c3 += s4(u4.value, t4, m2, r4, o3), u4 = e4.next(), u4.done ? t4.min || (c3 += ",") : c3 += `,${t4.spacingInner}`;
    }
    c3 += t4.spacingOuter + n3;
  }
  return c3;
}
i$1(Qe$2, "printIteratorValues");
function Ae$3(e4, t4, n3, r4, o3, s4) {
  let c3 = "";
  e4 = e4 instanceof ArrayBuffer ? new DataView(e4) : e4;
  let a4 = /* @__PURE__ */ i$1((m2) => m2 instanceof DataView, "isDataView"), u4 = a4(e4) ? e4.byteLength : e4.length;
  if (u4 > 0) {
    c3 += t4.spacingOuter;
    let m2 = n3 + t4.indent;
    for (let p3 = 0; p3 < u4; p3++) {
      if (c3 += m2, p3 === t4.maxWidth) {
        c3 += "…";
        break;
      }
      (a4(e4) || p3 in e4) && (c3 += s4(a4(e4) ? e4.getInt8(p3) : e4[p3], t4, m2, r4, o3)), p3 < u4 - 1 ? c3 += `,${t4.spacingInner}` : t4.min || (c3 += ",");
    }
    c3 += t4.spacingOuter + n3;
  }
  return c3;
}
i$1(Ae$3, "printListItems");
function ve$2(e4, t4, n3, r4, o3, s4) {
  let c3 = "", a4 = pr$2(e4, t4.compareKeys);
  if (a4.length > 0) {
    c3 += t4.spacingOuter;
    let u4 = n3 + t4.indent;
    for (let m2 = 0; m2 < a4.length; m2++) {
      let p3 = a4[m2], l4 = s4(p3, t4, u4, r4, o3), b3 = s4(e4[p3], t4, u4, r4, o3);
      c3 += `${u4 + l4}: ${b3}`, m2 < a4.length - 1 ? c3 += `,${t4.spacingInner}` : t4.min || (c3 += ",");
    }
    c3 += t4.spacingOuter + n3;
  }
  return c3;
}
i$1(ve$2, "printObjectProperties");
var gr$1 = typeof Symbol == "function" && Symbol.for ? Symbol.for("jest.asymmetricMatcher") : 1267621, we$2 = " ", hr$2 = /* @__PURE__ */ i$1((e4, t4, n3, r4, o3, s4) => {
  let c3 = e4.toString();
  if (c3 === "ArrayContaining" || c3 === "ArrayNotContaining")
    return ++r4 > t4.maxDepth ? `[${c3}]` : `${c3 + we$2}[${Ae$3(e4.sample, t4, n3, r4, o3, s4)}]`;
  if (c3 === "ObjectContaining" || c3 === "ObjectNotContaining")
    return ++r4 > t4.maxDepth ? `[${c3}]` : `${c3 + we$2}{${ve$2(e4.sample, t4, n3, r4, o3, s4)}}`;
  if (c3 === "StringMatching" || c3 === "StringNotMatching" || c3 === "StringContaining" || c3 === "StringNotContaining")
    return c3 + we$2 + s4(e4.sample, t4, n3, r4, o3);
  if (typeof e4.toAsymmetricMatcher != "function")
    throw new TypeError(`Asymmetric matcher ${e4.constructor.name} does not implement toAsymmetricMatcher()`);
  return e4.toAsymmetricMatcher();
}, "serialize$5"), dr$2 = /* @__PURE__ */ i$1((e4) => e4 && e4.$$typeof === gr$1, "test$5"), yr$2 = {
  serialize: hr$2,
  test: dr$2
}, br$2 = " ", Zt$2 = /* @__PURE__ */ new Set(["DOMStringMap", "NamedNodeMap"]), Sr$1 = /^(?:HTML\w*Collection|NodeList)$/;
function Er$2(e4) {
  return Zt$2.has(e4) || Sr$1.test(e4);
}
i$1(Er$2, "testName");
var _r$2 = /* @__PURE__ */ i$1((e4) => e4 && e4.constructor && !!e4.constructor.name && Er$2(e4.constructor.name), "test$4");
function Tr$2(e4) {
  return e4.constructor.name === "NamedNodeMap";
}
i$1(Tr$2, "isNamedNodeMap");
var Cr$2 = /* @__PURE__ */ i$1((e4, t4, n3, r4, o3, s4) => {
  let c3 = e4.constructor.name;
  return ++r4 > t4.maxDepth ? `[${c3}]` : (t4.min ? "" : c3 + br$2) + (Zt$2.has(c3) ? `{${ve$2(Tr$2(e4) ? [...e4].reduce(
    (a4, u4) => (a4[u4.name] = u4.value, a4),
    {}
  ) : { ...e4 }, t4, n3, r4, o3, s4)}}` : `[${Ae$3([...e4], t4, n3, r4, o3, s4)}]`);
}, "serialize$4"), Or$2 = {
  serialize: Cr$2,
  test: _r$2
};
function Qt$1(e4) {
  return e4.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
i$1(Qt$1, "escapeHTML");
function et$2(e4, t4, n3, r4, o3, s4, c3) {
  let a4 = r4 + n3.indent, u4 = n3.colors;
  return e4.map((m2) => {
    let p3 = t4[m2], l4 = c3(p3, n3, a4, o3, s4);
    return typeof p3 != "string" && (l4.includes(`
`) && (l4 = n3.spacingOuter + a4 + l4 + n3.spacingOuter + r4), l4 = `{${l4}}`), `${n3.spacingInner + r4 + u4.prop.open + m2 + u4.prop.close}=${u4.value.open}${l4}${u4.value.close}`;
  }).join("");
}
i$1(et$2, "printProps");
function tt$2(e4, t4, n3, r4, o3, s4) {
  return e4.map((c3) => t4.spacingOuter + n3 + (typeof c3 == "string" ? vt$2(c3, t4) : s4(c3, t4, n3, r4, o3))).join("");
}
i$1(tt$2, "printChildren");
function vt$2(e4, t4) {
  let n3 = t4.colors.content;
  return n3.open + Qt$1(e4) + n3.close;
}
i$1(vt$2, "printText");
function $r$2(e4, t4) {
  let n3 = t4.colors.comment;
  return `${n3.open}<!--${Qt$1(e4)}-->${n3.close}`;
}
i$1($r$2, "printComment");
function nt$2(e4, t4, n3, r4, o3) {
  let s4 = r4.colors.tag;
  return `${s4.open}<${e4}${t4 && s4.close + t4 + r4.spacingOuter + o3 + s4.open}${n3 ? `>${s4.close}${n3}${r4.spacingOuter}${o3}${s4.open}</${e4}` : `${t4 && !r4.min ? "" : " "}/`}>${s4.close}`;
}
i$1(nt$2, "printElement");
function rt$2(e4, t4) {
  let n3 = t4.colors.tag;
  return `${n3.open}<${e4}${n3.close} …${n3.open} />${n3.close}`;
}
i$1(rt$2, "printElementAsLeaf");
var wr$1 = 1, en$2 = 3, tn$2 = 8, nn$2 = 11, Rr$1 = /^(?:(?:HTML|SVG)\w*)?Element$/;
function Ar$1(e4) {
  try {
    return typeof e4.hasAttribute == "function" && e4.hasAttribute("is");
  } catch {
    return false;
  }
}
i$1(Ar$1, "testHasAttribute");
function Pr$1(e4) {
  let t4 = e4.constructor.name, { nodeType: n3, tagName: r4 } = e4, o3 = typeof r4 == "string" && r4.includes("-") || Ar$1(e4);
  return n3 === wr$1 && (Rr$1.test(t4) || o3) || n3 === en$2 && t4 === "Text" || n3 === tn$2 && t4 === "Comment" || n3 === nn$2 && t4 === "DocumentFragment";
}
i$1(Pr$1, "testNode");
var Nr$2 = /* @__PURE__ */ i$1((e4) => {
  var t4;
  return (e4 == null || (t4 = e4.constructor) === null || t4 === void 0 ? void 0 : t4.name) && Pr$1(e4);
}, "test$3");
function Ir$1(e4) {
  return e4.nodeType === en$2;
}
i$1(Ir$1, "nodeIsText");
function Mr$2(e4) {
  return e4.nodeType === tn$2;
}
i$1(Mr$2, "nodeIsComment");
function He$3(e4) {
  return e4.nodeType === nn$2;
}
i$1(He$3, "nodeIsFragment");
var Lr$1 = /* @__PURE__ */ i$1((e4, t4, n3, r4, o3, s4) => {
  if (Ir$1(e4))
    return vt$2(e4.data, t4);
  if (Mr$2(e4))
    return $r$2(e4.data, t4);
  let c3 = He$3(e4) ? "DocumentFragment" : e4.tagName.toLowerCase();
  return ++r4 > t4.maxDepth ? rt$2(c3, t4) : nt$2(c3, et$2(He$3(e4) ? [] : Array.from(e4.attributes, (a4) => a4.name).sort(), He$3(e4) ? {} : [...e4.attributes].reduce((a4, u4) => (a4[u4.name] = u4.value, a4), {}), t4, n3 + t4.indent, r4, o3, s4), tt$2(Array.prototype.slice.call(e4.childNodes || e4.children), t4, n3 + t4.indent, r4, o3, s4), t4, n3);
}, "serialize$3"), xr$2 = {
  serialize: Lr$1,
  test: Nr$2
}, Dr$2 = "@@__IMMUTABLE_ITERABLE__@@", Fr$2 = "@@__IMMUTABLE_LIST__@@", jr$2 = "@@__IMMUTABLE_KEYED__@@", kr$1 = "@@__IMMUTABLE_MAP__@@", kt$1 = "@@__IMMUTABLE_ORDERED__@@", Br$1 = "@@__IMMUTABLE_RECORD__@@", zr$2 = "@@__IMMUTABLE_SEQ__@@", Yr$1 = "@@__IMMUTABLE_SET__@@", Ur$2 = "@@__IMMUTABLE_STACK__@@", de$2 = /* @__PURE__ */ i$1((e4) => `Immutable.${e4}`, "getImmutableName"), Ne$3 = /* @__PURE__ */ i$1((e4) => `[${e4}]`, "printAsLeaf"), Se$3 = " ", Bt$1 = "…";
function Wr$2(e4, t4, n3, r4, o3, s4, c3) {
  return ++r4 > t4.maxDepth ? Ne$3(de$2(c3)) : `${de$2(c3) + Se$3}{${Ee$2(e4.entries(), t4, n3, r4, o3, s4)}}`;
}
i$1(Wr$2, "printImmutableEntries");
function Vr$2(e4) {
  let t4 = 0;
  return { next() {
    if (t4 < e4._keys.length) {
      let n3 = e4._keys[t4++];
      return {
        done: false,
        value: [n3, e4.get(n3)]
      };
    }
    return {
      done: true,
      value: void 0
    };
  } };
}
i$1(Vr$2, "getRecordEntries");
function qr$1(e4, t4, n3, r4, o3, s4) {
  let c3 = de$2(e4._name || "Record");
  return ++r4 > t4.maxDepth ? Ne$3(c3) : `${c3 + Se$3}{${Ee$2(Vr$2(e4), t4, n3, r4, o3, s4)}}`;
}
i$1(qr$1, "printImmutableRecord");
function Kr$1(e4, t4, n3, r4, o3, s4) {
  let c3 = de$2("Seq");
  return ++r4 > t4.maxDepth ? Ne$3(c3) : e4[jr$2] ? `${c3 + Se$3}{${e4._iter || e4._object ? Ee$2(e4.entries(), t4, n3, r4, o3, s4) : Bt$1}}` : `${c3 + Se$3}[${e4._iter || e4._array || e4._collection || e4._iterable ? Qe$2(e4.values(), t4, n3, r4, o3, s4) : Bt$1}]`;
}
i$1(Kr$1, "printImmutableSeq");
function Je$2(e4, t4, n3, r4, o3, s4, c3) {
  return ++r4 > t4.maxDepth ? Ne$3(de$2(c3)) : `${de$2(c3) + Se$3}[${Qe$2(e4.values(), t4, n3, r4, o3, s4)}]`;
}
i$1(Je$2, "printImmutableValues");
var Gr$1 = /* @__PURE__ */ i$1((e4, t4, n3, r4, o3, s4) => e4[kr$1] ? Wr$2(e4, t4, n3, r4, o3, s4, e4[kt$1] ? "OrderedMap" : "Map") : e4[Fr$2] ? Je$2(e4, t4, n3, r4, o3, s4, "List") : e4[Yr$1] ? Je$2(e4, t4, n3, r4, o3, s4, e4[kt$1] ? "OrderedSet" : "Set") : e4[Ur$2] ? Je$2(e4, t4, n3, r4, o3, s4, "Stack") : e4[zr$2] ? Kr$1(e4, t4, n3, r4, o3, s4) : qr$1(e4, t4, n3, r4, o3, s4), "serialize$2"), Hr$2 = /* @__PURE__ */ i$1((e4) => e4 && (e4[Dr$2] === true || e4[Br$1] === true), "test$2"), Jr$2 = {
  serialize: Gr$1,
  test: Hr$2
};
function rn$2(e4) {
  return e4 && e4.__esModule && Object.prototype.hasOwnProperty.call(e4, "default") ? e4.default : e4;
}
i$1(rn$2, "getDefaultExportFromCjs");
var Xe$3 = { exports: {} };
var A$1 = {};
var zt$2;
function Xr$1() {
  return zt$2 || (zt$2 = 1, function() {
    function e4(f4) {
      if (typeof f4 == "object" && f4 !== null) {
        var d4 = f4.$$typeof;
        switch (d4) {
          case t4:
            switch (f4 = f4.type, f4) {
              case r4:
              case s4:
              case o3:
              case m2:
              case p3:
              case g2:
                return f4;
              default:
                switch (f4 = f4 && f4.$$typeof, f4) {
                  case a4:
                  case u4:
                  case b3:
                  case l4:
                    return f4;
                  case c3:
                    return f4;
                  default:
                    return d4;
                }
            }
          case n3:
            return d4;
        }
      }
    }
    i$1(e4, "typeOf");
    var t4 = Symbol.for("react.transitional.element"), n3 = Symbol.for("react.portal"), r4 = Symbol.for("react.fragment"), o3 = Symbol.for("react.strict_mode"), s4 = Symbol.for("react.profiler"), c3 = Symbol.for("react.consumer"), a4 = Symbol.for("react.context"), u4 = Symbol.for("react.forward_ref"), m2 = Symbol.for("react.suspense"), p3 = Symbol.for("react.suspense_list"), l4 = Symbol.for("react.memo"), b3 = Symbol.for("react.lazy"), g2 = Symbol.for("react.view_transition"), h2 = Symbol.for("react.client.reference");
    A$1.ContextConsumer = c3, A$1.ContextProvider = a4, A$1.Element = t4, A$1.ForwardRef = u4, A$1.Fragment = r4, A$1.Lazy = b3, A$1.Memo = l4, A$1.Portal = n3, A$1.Profiler = s4, A$1.StrictMode = o3, A$1.Suspense = m2, A$1.SuspenseList = p3, A$1.isContextConsumer = function(f4) {
      return e4(f4) === c3;
    }, A$1.isContextProvider = function(f4) {
      return e4(f4) === a4;
    }, A$1.isElement = function(f4) {
      return typeof f4 == "object" && f4 !== null && f4.$$typeof === t4;
    }, A$1.isForwardRef = function(f4) {
      return e4(f4) === u4;
    }, A$1.isFragment = function(f4) {
      return e4(f4) === r4;
    }, A$1.isLazy = function(f4) {
      return e4(f4) === b3;
    }, A$1.isMemo = function(f4) {
      return e4(f4) === l4;
    }, A$1.isPortal = function(f4) {
      return e4(f4) === n3;
    }, A$1.isProfiler = function(f4) {
      return e4(f4) === s4;
    }, A$1.isStrictMode = function(f4) {
      return e4(f4) === o3;
    }, A$1.isSuspense = function(f4) {
      return e4(f4) === m2;
    }, A$1.isSuspenseList = function(f4) {
      return e4(f4) === p3;
    }, A$1.isValidElementType = function(f4) {
      return typeof f4 == "string" || typeof f4 == "function" || f4 === r4 || f4 === s4 || f4 === o3 || f4 === m2 || f4 === p3 || typeof f4 == "object" && f4 !== null && (f4.$$typeof === b3 || f4.$$typeof === l4 || f4.$$typeof === a4 || f4.$$typeof === c3 || f4.$$typeof === u4 || f4.$$typeof === h2 || f4.getModuleId !== void 0);
    }, A$1.typeOf = e4;
  }()), A$1;
}
i$1(Xr$1, "requireReactIs_development$1");
var Yt$2;
function Zr$1() {
  return Yt$2 || (Yt$2 = 1, Xe$3.exports = Xr$1()), Xe$3.exports;
}
i$1(Zr$1, "requireReactIs$1");
var on$1 = Zr$1(), Qr$2 = /* @__PURE__ */ rn$2(on$1), vr$1 = /* @__PURE__ */ Xt$2({
  __proto__: null,
  default: Qr$2
}, [on$1]), Ze$2 = { exports: {} };
var w$1 = {};
var Ut$1;
function eo$2() {
  return Ut$1 || (Ut$1 = 1, function() {
    var e4 = Symbol.for("react.element"), t4 = Symbol.for("react.portal"), n3 = Symbol.for("react.fragment"), r4 = Symbol.for("react.strict_mode"), o3 = Symbol.for("react.profiler"), s4 = Symbol.for("react.provider"), c3 = Symbol.for("react.context"), a4 = Symbol.for("react.server_context"), u4 = Symbol.for("react.forward_ref"), m2 = Symbol.for("react.suspense"), p3 = Symbol.for("react.suspense_list"), l4 = Symbol.for("react.memo"), b3 = Symbol.for("react.lazy"), g2 = Symbol.for("react.offscreen"), h2 = false, f4 = false, d4 = false, S4 = false, _2 = false, O2;
    O2 = Symbol.for("react.module.reference");
    function y3(C4) {
      return !!(typeof C4 == "string" || typeof C4 == "function" || C4 === n3 || C4 === o3 || _2 || C4 === r4 || C4 === m2 || C4 === p3 || S4 || C4 === g2 || h2 || f4 || d4 || typeof C4 == "object" && C4 !== null && (C4.$$typeof === b3 || C4.$$typeof === l4 || C4.$$typeof === s4 || C4.$$typeof === c3 || C4.$$typeof === u4 || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      C4.$$typeof === O2 || C4.getModuleId !== void 0));
    }
    i$1(y3, "isValidElementType");
    function E4(C4) {
      if (typeof C4 == "object" && C4 !== null) {
        var Ke2 = C4.$$typeof;
        switch (Ke2) {
          case e4:
            var $e2 = C4.type;
            switch ($e2) {
              case n3:
              case o3:
              case r4:
              case m2:
              case p3:
                return $e2;
              default:
                var Dt2 = $e2 && $e2.$$typeof;
                switch (Dt2) {
                  case a4:
                  case c3:
                  case u4:
                  case b3:
                  case l4:
                  case s4:
                    return Dt2;
                  default:
                    return Ke2;
                }
            }
          case t4:
            return Ke2;
        }
      }
    }
    i$1(E4, "typeOf");
    var $2 = c3, T4 = s4, R4 = e4, K2 = u4, Q2 = n3, I4 = b3, k2 = l4, G2 = t4, Y2 = o3, N2 = r4, L4 = m2, x3 = p3, H2 = false, F2 = false;
    function W2(C4) {
      return H2 || (H2 = true, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), false;
    }
    i$1(W2, "isAsyncMode");
    function re2(C4) {
      return F2 || (F2 = true, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), false;
    }
    i$1(re2, "isConcurrentMode");
    function V2(C4) {
      return E4(C4) === c3;
    }
    i$1(V2, "isContextConsumer");
    function q2(C4) {
      return E4(C4) === s4;
    }
    i$1(q2, "isContextProvider");
    function se2(C4) {
      return typeof C4 == "object" && C4 !== null && C4.$$typeof === e4;
    }
    i$1(se2, "isElement");
    function J2(C4) {
      return E4(C4) === u4;
    }
    i$1(J2, "isForwardRef");
    function U2(C4) {
      return E4(C4) === n3;
    }
    i$1(U2, "isFragment");
    function oe2(C4) {
      return E4(C4) === b3;
    }
    i$1(oe2, "isLazy");
    function he2(C4) {
      return E4(C4) === l4;
    }
    i$1(he2, "isMemo");
    function ue2(C4) {
      return E4(C4) === t4;
    }
    i$1(ue2, "isPortal");
    function be2(C4) {
      return E4(C4) === o3;
    }
    i$1(be2, "isProfiler");
    function Ce2(C4) {
      return E4(C4) === r4;
    }
    i$1(Ce2, "isStrictMode");
    function Oe2(C4) {
      return E4(C4) === m2;
    }
    i$1(Oe2, "isSuspense");
    function ar2(C4) {
      return E4(C4) === p3;
    }
    i$1(ar2, "isSuspenseList"), w$1.ContextConsumer = $2, w$1.ContextProvider = T4, w$1.Element = R4, w$1.ForwardRef = K2, w$1.Fragment = Q2, w$1.Lazy = I4, w$1.Memo = k2, w$1.Portal = G2, w$1.Profiler = Y2, w$1.StrictMode = N2, w$1.Suspense = L4, w$1.SuspenseList = x3, w$1.isAsyncMode = W2, w$1.isConcurrentMode = re2, w$1.isContextConsumer = V2, w$1.isContextProvider = q2, w$1.isElement = se2, w$1.isForwardRef = J2, w$1.isFragment = U2, w$1.isLazy = oe2, w$1.isMemo = he2, w$1.isPortal = ue2, w$1.isProfiler = be2, w$1.isStrictMode = Ce2, w$1.isSuspense = Oe2, w$1.isSuspenseList = ar2, w$1.isValidElementType = y3, w$1.typeOf = E4;
  }()), w$1;
}
i$1(eo$2, "requireReactIs_development");
var Wt$1;
function to$2() {
  return Wt$1 || (Wt$1 = 1, Ze$2.exports = eo$2()), Ze$2.exports;
}
i$1(to$2, "requireReactIs");
var sn$2 = to$2(), no$1 = /* @__PURE__ */ rn$2(sn$2), ro$2 = /* @__PURE__ */ Xt$2({
  __proto__: null,
  default: no$1
}, [sn$2]), oo$2 = [
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
], fe$2 = Object.fromEntries(oo$2.map((e4) => [e4, (t4) => ro$2[e4](t4) || vr$1[e4](t4)]));
function cn$1(e4, t4 = []) {
  if (Array.isArray(e4))
    for (let n3 of e4)
      cn$1(n3, t4);
  else e4 != null && e4 !== false && e4 !== "" && t4.push(e4);
  return t4;
}
i$1(cn$1, "getChildren");
function Vt$2(e4) {
  let t4 = e4.type;
  if (typeof t4 == "string")
    return t4;
  if (typeof t4 == "function")
    return t4.displayName || t4.name || "Unknown";
  if (fe$2.isFragment(e4))
    return "React.Fragment";
  if (fe$2.isSuspense(e4))
    return "React.Suspense";
  if (typeof t4 == "object" && t4 !== null) {
    if (fe$2.isContextProvider(e4))
      return "Context.Provider";
    if (fe$2.isContextConsumer(e4))
      return "Context.Consumer";
    if (fe$2.isForwardRef(e4)) {
      if (t4.displayName)
        return t4.displayName;
      let n3 = t4.render.displayName || t4.render.name || "";
      return n3 === "" ? "ForwardRef" : `ForwardRef(${n3})`;
    }
    if (fe$2.isMemo(e4)) {
      let n3 = t4.displayName || t4.type.displayName || t4.type.name || "";
      return n3 === "" ? "Memo" : `Memo(${n3})`;
    }
  }
  return "UNDEFINED";
}
i$1(Vt$2, "getType");
function so$1(e4) {
  let { props: t4 } = e4;
  return Object.keys(t4).filter((n3) => n3 !== "children" && t4[n3] !== void 0).sort();
}
i$1(so$1, "getPropKeys$1");
var io = /* @__PURE__ */ i$1((e4, t4, n3, r4, o3, s4) => ++r4 > t4.maxDepth ? rt$2(Vt$2(e4), t4) : nt$2(Vt$2(e4), et$2(so$1(e4), e4.props, t4, n3 + t4.indent, r4, o3, s4), tt$2(
  cn$1(e4.props.children),
  t4,
  n3 + t4.indent,
  r4,
  o3,
  s4
), t4, n3), "serialize$1"), co = /* @__PURE__ */ i$1((e4) => e4 != null && fe$2.isElement(e4), "test$1"), uo$1 = {
  serialize: io,
  test: co
}, ao$2 = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.test.json") : 245830487;
function lo$2(e4) {
  let { props: t4 } = e4;
  return t4 ? Object.keys(t4).filter((n3) => t4[n3] !== void 0).sort() : [];
}
i$1(lo$2, "getPropKeys");
var fo$2 = /* @__PURE__ */ i$1((e4, t4, n3, r4, o3, s4) => ++r4 > t4.maxDepth ? rt$2(e4.type, t4) : nt$2(e4.type, e4.props ? et$2(
  lo$2(e4),
  e4.props,
  t4,
  n3 + t4.indent,
  r4,
  o3,
  s4
) : "", e4.children ? tt$2(e4.children, t4, n3 + t4.indent, r4, o3, s4) : "", t4, n3), "serialize"), mo$1 = /* @__PURE__ */ i$1((e4) => e4 && e4.$$typeof === ao$2, "test"), po$1 = {
  serialize: fo$2,
  test: mo$1
}, un$2 = Object.prototype.toString, go$2 = Date.prototype.toISOString, ho$1 = Error.prototype.toString, qt$1 = RegExp.prototype.toString;
function Re$2(e4) {
  return typeof e4.constructor == "function" && e4.constructor.name || "Object";
}
i$1(Re$2, "getConstructorName");
function yo$2(e4) {
  return typeof window < "u" && e4 === window;
}
i$1(yo$2, "isWindow");
var bo$2 = /^Symbol\((.*)\)(.*)$/, So$2 = /\n/g, st$1 = class st extends Error {
  constructor(t4, n3) {
    super(t4), this.stack = n3, this.name = this.constructor.name;
  }
};
i$1(st$1, "PrettyFormatPluginError");
var Pe$2 = st$1;
function Eo$2(e4) {
  return e4 === "[object Array]" || e4 === "[object ArrayBuffer]" || e4 === "[object DataView]" || e4 === "[object Float32Array]" || e4 === "[object Float64Array]" || e4 === "[object Int8Array]" || e4 === "[object Int16Array]" || e4 === "[object Int32Array]" || e4 === "[object Uint8Array]" || e4 === "[object Uint8ClampedArray]" || e4 === "[object Uint16Array]" || e4 === "[object Uint32Array]";
}
i$1(Eo$2, "isToStringedArrayType");
function _o$2(e4) {
  return Object.is(e4, -0) ? "-0" : String(e4);
}
i$1(_o$2, "printNumber");
function To$2(e4) {
  return `${e4}n`;
}
i$1(To$2, "printBigInt");
function Kt$2(e4, t4) {
  return t4 ? `[Function ${e4.name || "anonymous"}]` : "[Function]";
}
i$1(Kt$2, "printFunction");
function Gt$2(e4) {
  return String(e4).replace(bo$2, "Symbol($1)");
}
i$1(Gt$2, "printSymbol");
function Ht$2(e4) {
  return `[${ho$1.call(e4)}]`;
}
i$1(Ht$2, "printError");
function an$1(e4, t4, n3, r4) {
  if (e4 === true || e4 === false)
    return `${e4}`;
  if (e4 === void 0)
    return "undefined";
  if (e4 === null)
    return "null";
  let o3 = typeof e4;
  if (o3 === "number")
    return _o$2(e4);
  if (o3 === "bigint")
    return To$2(e4);
  if (o3 === "string")
    return r4 ? `"${e4.replaceAll(/"|\\/g, "\\$&")}"` : `"${e4}"`;
  if (o3 === "function")
    return Kt$2(e4, t4);
  if (o3 === "symbol")
    return Gt$2(e4);
  let s4 = un$2.call(e4);
  return s4 === "[object WeakMap]" ? "WeakMap {}" : s4 === "[object WeakSet]" ? "WeakSet {}" : s4 === "[object Function]" || s4 === "[object GeneratorFunction]" ? Kt$2(e4, t4) : s4 === "[object Symbol]" ? Gt$2(e4) : s4 === "[object Date]" ? Number.isNaN(+e4) ? "Date { NaN }" : go$2.call(e4) : s4 === "[object Error]" ? Ht$2(e4) : s4 === "[object RegExp]" ? n3 ? qt$1.call(e4).replaceAll(/[$()*+.?[\\\]^{|}]/g, "\\$&") : qt$1.call(e4) : e4 instanceof Error ? Ht$2(e4) : null;
}
i$1(an$1, "printBasicValue");
function ln$1(e4, t4, n3, r4, o3, s4) {
  if (o3.includes(e4))
    return "[Circular]";
  o3 = [...o3], o3.push(e4);
  let c3 = ++r4 > t4.maxDepth, a4 = t4.min;
  if (t4.callToJSON && !c3 && e4.toJSON && typeof e4.toJSON == "function" && !s4)
    return ae$3(e4.toJSON(), t4, n3, r4, o3, true);
  let u4 = un$2.call(e4);
  return u4 === "[object Arguments]" ? c3 ? "[Arguments]" : `${a4 ? "" : "Arguments "}[${Ae$3(e4, t4, n3, r4, o3, ae$3)}]` : Eo$2(u4) ? c3 ? `[${e4.constructor.name}]` : `${a4 || !t4.printBasicPrototype && e4.constructor.name === "Array" ? "" : `${e4.constructor.name} `}[${Ae$3(e4, t4, n3, r4, o3, ae$3)}]` : u4 === "[object Map]" ? c3 ? "[Map]" : `Map {${Ee$2(e4.entries(), t4, n3, r4, o3, ae$3, " => ")}}` : u4 === "[object Set]" ? c3 ? "[Set]" : `Set {${Qe$2(
    e4.values(),
    t4,
    n3,
    r4,
    o3,
    ae$3
  )}}` : c3 || yo$2(e4) ? `[${Re$2(e4)}]` : `${a4 || !t4.printBasicPrototype && Re$2(e4) === "Object" ? "" : `${Re$2(e4)} `}{${ve$2(
    e4,
    t4,
    n3,
    r4,
    o3,
    ae$3
  )}}`;
}
i$1(ln$1, "printComplexValue");
var Co$1 = {
  test: /* @__PURE__ */ i$1((e4) => e4 && e4 instanceof Error, "test"),
  serialize(e4, t4, n3, r4, o3, s4) {
    if (o3.includes(e4))
      return "[Circular]";
    o3 = [...o3, e4];
    let c3 = ++r4 > t4.maxDepth, { message: a4, cause: u4, ...m2 } = e4, p3 = {
      message: a4,
      ...typeof u4 < "u" ? { cause: u4 } : {},
      ...e4 instanceof AggregateError ? { errors: e4.errors } : {},
      ...m2
    }, l4 = e4.name !== "Error" ? e4.name : Re$2(e4);
    return c3 ? `[${l4}]` : `${l4} {${Ee$2(Object.entries(p3).values(), t4, n3, r4, o3, s4)}}`;
  }
};
function Oo$2(e4) {
  return e4.serialize != null;
}
i$1(Oo$2, "isNewPlugin");
function fn$1(e4, t4, n3, r4, o3, s4) {
  let c3;
  try {
    c3 = Oo$2(e4) ? e4.serialize(t4, n3, r4, o3, s4, ae$3) : e4.print(t4, (a4) => ae$3(a4, n3, r4, o3, s4), (a4) => {
      let u4 = r4 + n3.indent;
      return u4 + a4.replaceAll(So$2, `
${u4}`);
    }, {
      edgeSpacing: n3.spacingOuter,
      min: n3.min,
      spacing: n3.spacingInner
    }, n3.colors);
  } catch (a4) {
    throw new Pe$2(a4.message, a4.stack);
  }
  if (typeof c3 != "string")
    throw new TypeError(`pretty-format: Plugin must return type "string" but instead returned "${typeof c3}".`);
  return c3;
}
i$1(fn$1, "printPlugin");
function mn$2(e4, t4) {
  for (let n3 of e4)
    try {
      if (n3.test(t4))
        return n3;
    } catch (r4) {
      throw new Pe$2(r4.message, r4.stack);
    }
  return null;
}
i$1(mn$2, "findPlugin");
function ae$3(e4, t4, n3, r4, o3, s4) {
  let c3 = mn$2(t4.plugins, e4);
  if (c3 !== null)
    return fn$1(c3, e4, t4, n3, r4, o3);
  let a4 = an$1(e4, t4.printFunctionName, t4.escapeRegex, t4.escapeString);
  return a4 !== null ? a4 : ln$1(e4, t4, n3, r4, o3, s4);
}
i$1(ae$3, "printer");
var ot$2 = {
  comment: "gray",
  content: "reset",
  prop: "yellow",
  tag: "cyan",
  value: "green"
}, pn$2 = Object.keys(ot$2), ee$2 = {
  callToJSON: true,
  compareKeys: void 0,
  escapeRegex: false,
  escapeString: true,
  highlight: false,
  indent: 2,
  maxDepth: Number.POSITIVE_INFINITY,
  maxWidth: Number.POSITIVE_INFINITY,
  min: false,
  plugins: [],
  printBasicPrototype: true,
  printFunctionName: true,
  theme: ot$2
};
function $o$1(e4) {
  for (let t4 of Object.keys(e4))
    if (!Object.prototype.hasOwnProperty.call(ee$2, t4))
      throw new Error(`pretty-format: Unknown option "${t4}".`);
  if (e4.min && e4.indent !== void 0 && e4.indent !== 0)
    throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
}
i$1($o$1, "validateOptions");
function wo$1() {
  return pn$2.reduce((e4, t4) => {
    let n3 = ot$2[t4], r4 = n3 && v$1[n3];
    if (r4 && typeof r4.close == "string" && typeof r4.open == "string")
      e4[t4] = r4;
    else
      throw new Error(`pretty-format: Option "theme" has a key "${t4}" whose value "${n3}" is undefined in ansi-styles.`);
    return e4;
  }, /* @__PURE__ */ Object.create(null));
}
i$1(wo$1, "getColorsHighlight");
function Ro$2() {
  return pn$2.reduce((e4, t4) => (e4[t4] = {
    close: "",
    open: ""
  }, e4), /* @__PURE__ */ Object.create(null));
}
i$1(Ro$2, "getColorsEmpty");
function gn$2(e4) {
  return (e4 == null ? void 0 : e4.printFunctionName) ?? ee$2.printFunctionName;
}
i$1(gn$2, "getPrintFunctionName");
function hn$2(e4) {
  return (e4 == null ? void 0 : e4.escapeRegex) ?? ee$2.escapeRegex;
}
i$1(hn$2, "getEscapeRegex");
function dn$2(e4) {
  return (e4 == null ? void 0 : e4.escapeString) ?? ee$2.escapeString;
}
i$1(dn$2, "getEscapeString");
function Jt$2(e4) {
  return {
    callToJSON: (e4 == null ? void 0 : e4.callToJSON) ?? ee$2.callToJSON,
    colors: (e4 == null ? void 0 : e4.highlight) ? wo$1() : Ro$2(),
    compareKeys: typeof (e4 == null ? void 0 : e4.compareKeys) == "function" || (e4 == null ? void 0 : e4.compareKeys) === null ? e4.compareKeys : ee$2.compareKeys,
    escapeRegex: hn$2(e4),
    escapeString: dn$2(e4),
    indent: (e4 == null ? void 0 : e4.min) ? "" : Ao$2((e4 == null ? void 0 : e4.indent) ?? ee$2.indent),
    maxDepth: (e4 == null ? void 0 : e4.maxDepth) ?? ee$2.maxDepth,
    maxWidth: (e4 == null ? void 0 : e4.maxWidth) ?? ee$2.maxWidth,
    min: (e4 == null ? void 0 : e4.min) ?? ee$2.min,
    plugins: (e4 == null ? void 0 : e4.plugins) ?? ee$2.plugins,
    printBasicPrototype: (e4 == null ? void 0 : e4.printBasicPrototype) ?? true,
    printFunctionName: gn$2(e4),
    spacingInner: (e4 == null ? void 0 : e4.min) ? " " : `
`,
    spacingOuter: (e4 == null ? void 0 : e4.min) ? "" : `
`
  };
}
i$1(Jt$2, "getConfig");
function Ao$2(e4) {
  return Array.from({ length: e4 + 1 }).join(" ");
}
i$1(Ao$2, "createIndent");
function X$1(e4, t4) {
  if (t4 && ($o$1(t4), t4.plugins)) {
    let r4 = mn$2(t4.plugins, e4);
    if (r4 !== null)
      return fn$1(r4, e4, Jt$2(t4), "", 0, []);
  }
  let n3 = an$1(e4, gn$2(t4), hn$2(t4), dn$2(t4));
  return n3 !== null ? n3 : ln$1(e4, Jt$2(t4), "", 0, []);
}
i$1(X$1, "format");
var _e$2 = {
  AsymmetricMatcher: yr$2,
  DOMCollection: Or$2,
  DOMElement: xr$2,
  Immutable: Jr$2,
  ReactElement: uo$1,
  ReactTestComponent: po$1,
  Error: Co$1
};
var yn$1 = {
  bold: ["1", "22"],
  dim: ["2", "22"],
  italic: ["3", "23"],
  underline: ["4", "24"],
  // 5 & 6 are blinking
  inverse: ["7", "27"],
  hidden: ["8", "28"],
  strike: ["9", "29"],
  // 10-20 are fonts
  // 21-29 are resets for 1-9
  black: ["30", "39"],
  red: ["31", "39"],
  green: ["32", "39"],
  yellow: ["33", "39"],
  blue: ["34", "39"],
  magenta: ["35", "39"],
  cyan: ["36", "39"],
  white: ["37", "39"],
  brightblack: ["30;1", "39"],
  brightred: ["31;1", "39"],
  brightgreen: ["32;1", "39"],
  brightyellow: ["33;1", "39"],
  brightblue: ["34;1", "39"],
  brightmagenta: ["35;1", "39"],
  brightcyan: ["36;1", "39"],
  brightwhite: ["37;1", "39"],
  grey: ["90", "39"]
}, Po$2 = {
  special: "cyan",
  number: "yellow",
  bigint: "yellow",
  boolean: "yellow",
  undefined: "grey",
  null: "bold",
  string: "green",
  symbol: "green",
  date: "magenta",
  regexp: "red"
}, ie$2 = "…";
function No$2(e4, t4) {
  let n3 = yn$1[Po$2[t4]] || yn$1[t4] || "";
  return n3 ? `\x1B[${n3[0]}m${String(e4)}\x1B[${n3[1]}m` : String(e4);
}
i$1(No$2, "colorise");
function bn$1({
  showHidden: e4 = false,
  depth: t4 = 2,
  colors: n3 = false,
  customInspect: r4 = true,
  showProxy: o3 = false,
  maxArrayLength: s4 = 1 / 0,
  breakLength: c3 = 1 / 0,
  seen: a4 = [],
  // eslint-disable-next-line no-shadow
  truncate: u4 = 1 / 0,
  stylize: m2 = String
} = {}, p3) {
  let l4 = {
    showHidden: !!e4,
    depth: Number(t4),
    colors: !!n3,
    customInspect: !!r4,
    showProxy: !!o3,
    maxArrayLength: Number(s4),
    breakLength: Number(c3),
    truncate: Number(u4),
    seen: a4,
    inspect: p3,
    stylize: m2
  };
  return l4.colors && (l4.stylize = No$2), l4;
}
i$1(bn$1, "normaliseOptions");
function Io$2(e4) {
  return e4 >= "\uD800" && e4 <= "\uDBFF";
}
i$1(Io$2, "isHighSurrogate");
function B$2(e4, t4, n3 = ie$2) {
  e4 = String(e4);
  let r4 = n3.length, o3 = e4.length;
  if (r4 > t4 && o3 > r4)
    return n3;
  if (o3 > t4 && o3 > r4) {
    let s4 = t4 - r4;
    return s4 > 0 && Io$2(e4[s4 - 1]) && (s4 = s4 - 1), `${e4.slice(0, s4)}${n3}`;
  }
  return e4;
}
i$1(B$2, "truncate");
function D$2(e4, t4, n3, r4 = ", ") {
  n3 = n3 || t4.inspect;
  let o3 = e4.length;
  if (o3 === 0)
    return "";
  let s4 = t4.truncate, c3 = "", a4 = "", u4 = "";
  for (let m2 = 0; m2 < o3; m2 += 1) {
    let p3 = m2 + 1 === e4.length, l4 = m2 + 2 === e4.length;
    u4 = `${ie$2}(${e4.length - m2})`;
    let b3 = e4[m2];
    t4.truncate = s4 - c3.length - (p3 ? 0 : r4.length);
    let g2 = a4 || n3(b3, t4) + (p3 ? "" : r4), h2 = c3.length + g2.length, f4 = h2 + u4.length;
    if (p3 && h2 > s4 && c3.length + u4.length <= s4 || !p3 && !l4 && f4 > s4 || (a4 = p3 ? "" : n3(e4[m2 + 1], t4) + (l4 ? "" : r4), !p3 && l4 && f4 > s4 && h2 + a4.length > s4))
      break;
    if (c3 += g2, !p3 && !l4 && h2 + a4.length >= s4) {
      u4 = `${ie$2}(${e4.length - m2 - 1})`;
      break;
    }
    u4 = "";
  }
  return `${c3}${u4}`;
}
i$1(D$2, "inspectList");
function Mo$2(e4) {
  return e4.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/) ? e4 : JSON.stringify(e4).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
}
i$1(Mo$2, "quoteComplexKey");
function ce$2([e4, t4], n3) {
  return n3.truncate -= 2, typeof e4 == "string" ? e4 = Mo$2(e4) : typeof e4 != "number" && (e4 = `[${n3.inspect(e4, n3)}]`), n3.truncate -= e4.length, t4 = n3.inspect(t4, n3), `${e4}: ${t4}`;
}
i$1(ce$2, "inspectProperty");
function it$1(e4, t4) {
  let n3 = Object.keys(e4).slice(e4.length);
  if (!e4.length && !n3.length)
    return "[]";
  t4.truncate -= 4;
  let r4 = D$2(e4, t4);
  t4.truncate -= r4.length;
  let o3 = "";
  return n3.length && (o3 = D$2(n3.map((s4) => [s4, e4[s4]]), t4, ce$2)), `[ ${r4}${o3 ? `, ${o3}` : ""} ]`;
}
i$1(it$1, "inspectArray");
var Lo$1 = /* @__PURE__ */ i$1((e4) => typeof Buffer == "function" && e4 instanceof Buffer ? "Buffer" : e4[Symbol.toStringTag] ? e4[Symbol.toStringTag] : e4.constructor.name, "getArrayName");
function te$3(e4, t4) {
  let n3 = Lo$1(e4);
  t4.truncate -= n3.length + 4;
  let r4 = Object.keys(e4).slice(e4.length);
  if (!e4.length && !r4.length)
    return `${n3}[]`;
  let o3 = "";
  for (let c3 = 0; c3 < e4.length; c3++) {
    let a4 = `${t4.stylize(B$2(e4[c3], t4.truncate), "number")}${c3 === e4.length - 1 ? "" : ", "}`;
    if (t4.truncate -= a4.length, e4[c3] !== e4.length && t4.truncate <= 3) {
      o3 += `${ie$2}(${e4.length - e4[c3] + 1})`;
      break;
    }
    o3 += a4;
  }
  let s4 = "";
  return r4.length && (s4 = D$2(r4.map((c3) => [c3, e4[c3]]), t4, ce$2)), `${n3}[ ${o3}${s4 ? `, ${s4}` : ""} ]`;
}
i$1(te$3, "inspectTypedArray");
function ct$2(e4, t4) {
  let n3 = e4.toJSON();
  if (n3 === null)
    return "Invalid Date";
  let r4 = n3.split("T"), o3 = r4[0];
  return t4.stylize(`${o3}T${B$2(r4[1], t4.truncate - o3.length - 1)}`, "date");
}
i$1(ct$2, "inspectDate");
function Ie$2(e4, t4) {
  let n3 = e4[Symbol.toStringTag] || "Function", r4 = e4.name;
  return r4 ? t4.stylize(`[${n3} ${B$2(r4, t4.truncate - 11)}]`, "special") : t4.stylize(`[${n3}]`, "special");
}
i$1(Ie$2, "inspectFunction");
function xo$2([e4, t4], n3) {
  return n3.truncate -= 4, e4 = n3.inspect(e4, n3), n3.truncate -= e4.length, t4 = n3.inspect(t4, n3), `${e4} => ${t4}`;
}
i$1(xo$2, "inspectMapEntry");
function Do$1(e4) {
  let t4 = [];
  return e4.forEach((n3, r4) => {
    t4.push([r4, n3]);
  }), t4;
}
i$1(Do$1, "mapToEntries");
function ut$2(e4, t4) {
  return e4.size === 0 ? "Map{}" : (t4.truncate -= 7, `Map{ ${D$2(Do$1(e4), t4, xo$2)} }`);
}
i$1(ut$2, "inspectMap");
var Fo$2 = Number.isNaN || ((e4) => e4 !== e4);
function Me$2(e4, t4) {
  return Fo$2(e4) ? t4.stylize("NaN", "number") : e4 === 1 / 0 ? t4.stylize("Infinity", "number") : e4 === -1 / 0 ? t4.stylize("-Infinity", "number") : e4 === 0 ? t4.stylize(1 / e4 === 1 / 0 ? "+0" : "-0", "number") : t4.stylize(B$2(String(e4), t4.truncate), "number");
}
i$1(Me$2, "inspectNumber");
function Le$3(e4, t4) {
  let n3 = B$2(e4.toString(), t4.truncate - 1);
  return n3 !== ie$2 && (n3 += "n"), t4.stylize(n3, "bigint");
}
i$1(Le$3, "inspectBigInt");
function at$1(e4, t4) {
  let n3 = e4.toString().split("/")[2], r4 = t4.truncate - (2 + n3.length), o3 = e4.source;
  return t4.stylize(`/${B$2(o3, r4)}/${n3}`, "regexp");
}
i$1(at$1, "inspectRegExp");
function jo$1(e4) {
  let t4 = [];
  return e4.forEach((n3) => {
    t4.push(n3);
  }), t4;
}
i$1(jo$1, "arrayFromSet");
function lt$2(e4, t4) {
  return e4.size === 0 ? "Set{}" : (t4.truncate -= 7, `Set{ ${D$2(jo$1(e4), t4)} }`);
}
i$1(lt$2, "inspectSet");
var Sn$1 = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]", "g"), ko$2 = {
  "\b": "\\b",
  "	": "\\t",
  "\n": "\\n",
  "\f": "\\f",
  "\r": "\\r",
  "'": "\\'",
  "\\": "\\\\"
}, Bo$2 = 16;
function Yo$2(e4) {
  return ko$2[e4] || `\\u${`0000${e4.charCodeAt(0).toString(Bo$2)}`.slice(-4)}`;
}
i$1(Yo$2, "escape");
function xe$1(e4, t4) {
  return Sn$1.test(e4) && (e4 = e4.replace(Sn$1, Yo$2)), t4.stylize(`'${B$2(e4, t4.truncate - 2)}'`, "string");
}
i$1(xe$1, "inspectString");
function De$3(e4) {
  return "description" in Symbol.prototype ? e4.description ? `Symbol(${e4.description})` : "Symbol()" : e4.toString();
}
i$1(De$3, "inspectSymbol");
var En$1 = /* @__PURE__ */ i$1(() => "Promise{…}", "getPromiseValue");
try {
  let { getPromiseDetails: e4, kPending: t4, kRejected: n3 } = process.binding("util");
  Array.isArray(e4(Promise.resolve())) && (En$1 = /* @__PURE__ */ i$1((r4, o3) => {
    let [s4, c3] = e4(r4);
    return s4 === t4 ? "Promise{<pending>}" : `Promise${s4 === n3 ? "!" : ""}{${o3.inspect(c3, o3)}}`;
  }, "getPromiseValue"));
} catch {
}
var _n$2 = En$1;
function me$3(e4, t4) {
  let n3 = Object.getOwnPropertyNames(e4), r4 = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e4) : [];
  if (n3.length === 0 && r4.length === 0)
    return "{}";
  if (t4.truncate -= 4, t4.seen = t4.seen || [], t4.seen.includes(e4))
    return "[Circular]";
  t4.seen.push(e4);
  let o3 = D$2(n3.map((a4) => [a4, e4[a4]]), t4, ce$2), s4 = D$2(r4.map((a4) => [a4, e4[a4]]), t4, ce$2);
  t4.seen.pop();
  let c3 = "";
  return o3 && s4 && (c3 = ", "), `{ ${o3}${c3}${s4} }`;
}
i$1(me$3, "inspectObject");
var ft$1 = typeof Symbol < "u" && Symbol.toStringTag ? Symbol.toStringTag : false;
function mt$2(e4, t4) {
  let n3 = "";
  return ft$1 && ft$1 in e4 && (n3 = e4[ft$1]), n3 = n3 || e4.constructor.name, (!n3 || n3 === "_class") && (n3 = "<Anonymous Class>"), t4.truncate -= n3.length, `${n3}${me$3(e4, t4)}`;
}
i$1(mt$2, "inspectClass");
function pt$2(e4, t4) {
  return e4.length === 0 ? "Arguments[]" : (t4.truncate -= 13, `Arguments[ ${D$2(e4, t4)} ]`);
}
i$1(pt$2, "inspectArguments");
var Uo$2 = [
  "stack",
  "line",
  "column",
  "name",
  "message",
  "fileName",
  "lineNumber",
  "columnNumber",
  "number",
  "description",
  "cause"
];
function gt(e4, t4) {
  let n3 = Object.getOwnPropertyNames(e4).filter((c3) => Uo$2.indexOf(c3) === -1), r4 = e4.name;
  t4.truncate -= r4.length;
  let o3 = "";
  if (typeof e4.message == "string" ? o3 = B$2(e4.message, t4.truncate) : n3.unshift("message"), o3 = o3 ? `: ${o3}` : "", t4.truncate -= o3.length + 5, t4.seen = t4.seen || [], t4.seen.includes(e4))
    return "[Circular]";
  t4.seen.push(e4);
  let s4 = D$2(n3.map((c3) => [c3, e4[c3]]), t4, ce$2);
  return `${r4}${o3}${s4 ? ` { ${s4} }` : ""}`;
}
i$1(gt, "inspectObject");
function Wo$1([e4, t4], n3) {
  return n3.truncate -= 3, t4 ? `${n3.stylize(String(e4), "yellow")}=${n3.stylize(`"${t4}"`, "string")}` : `${n3.stylize(String(e4), "yellow")}`;
}
i$1(Wo$1, "inspectAttribute");
function Fe$2(e4, t4) {
  return D$2(e4, t4, Vo$2, `
`);
}
i$1(Fe$2, "inspectNodeCollection");
function Vo$2(e4, t4) {
  switch (e4.nodeType) {
    case 1:
      return je$2(e4, t4);
    case 3:
      return t4.inspect(e4.data, t4);
    default:
      return t4.inspect(e4, t4);
  }
}
i$1(Vo$2, "inspectNode");
function je$2(e4, t4) {
  let n3 = e4.getAttributeNames(), r4 = e4.tagName.toLowerCase(), o3 = t4.stylize(`<${r4}`, "special"), s4 = t4.stylize(">", "special"), c3 = t4.stylize(
    `</${r4}>`,
    "special"
  );
  t4.truncate -= r4.length * 2 + 5;
  let a4 = "";
  n3.length > 0 && (a4 += " ", a4 += D$2(n3.map((p3) => [p3, e4.getAttribute(p3)]), t4, Wo$1, " ")), t4.truncate -= a4.length;
  let u4 = t4.truncate, m2 = Fe$2(e4.children, t4);
  return m2 && m2.length > u4 && (m2 = `${ie$2}(${e4.children.length})`), `${o3}${a4}${s4}${m2}${c3}`;
}
i$1(je$2, "inspectHTML");
var qo$1 = typeof Symbol == "function" && typeof Symbol.for == "function", ht$1 = qo$1 ? Symbol.for("chai/inspect") : "@@chai/inspect", dt$2 = Symbol.for("nodejs.util.inspect.custom"), Tn$1 = /* @__PURE__ */ new WeakMap(), Cn$2 = {}, On$2 = {
  undefined: /* @__PURE__ */ i$1((e4, t4) => t4.stylize("undefined", "undefined"), "undefined"),
  null: /* @__PURE__ */ i$1((e4, t4) => t4.stylize("null", "null"), "null"),
  boolean: /* @__PURE__ */ i$1((e4, t4) => t4.stylize(String(e4), "boolean"), "boolean"),
  Boolean: /* @__PURE__ */ i$1((e4, t4) => t4.stylize(String(e4), "boolean"), "Boolean"),
  number: Me$2,
  Number: Me$2,
  bigint: Le$3,
  BigInt: Le$3,
  string: xe$1,
  String: xe$1,
  function: Ie$2,
  Function: Ie$2,
  symbol: De$3,
  // A Symbol polyfill will return `Symbol` not `symbol` from typedetect
  Symbol: De$3,
  Array: it$1,
  Date: ct$2,
  Map: ut$2,
  Set: lt$2,
  RegExp: at$1,
  Promise: _n$2,
  // WeakSet, WeakMap are totally opaque to us
  WeakSet: /* @__PURE__ */ i$1((e4, t4) => t4.stylize("WeakSet{…}", "special"), "WeakSet"),
  WeakMap: /* @__PURE__ */ i$1((e4, t4) => t4.stylize("WeakMap{…}", "special"), "WeakMap"),
  Arguments: pt$2,
  Int8Array: te$3,
  Uint8Array: te$3,
  Uint8ClampedArray: te$3,
  Int16Array: te$3,
  Uint16Array: te$3,
  Int32Array: te$3,
  Uint32Array: te$3,
  Float32Array: te$3,
  Float64Array: te$3,
  Generator: /* @__PURE__ */ i$1(() => "", "Generator"),
  DataView: /* @__PURE__ */ i$1(() => "", "DataView"),
  ArrayBuffer: /* @__PURE__ */ i$1(() => "", "ArrayBuffer"),
  Error: gt,
  HTMLCollection: Fe$2,
  NodeList: Fe$2
}, Ko$1 = /* @__PURE__ */ i$1((e4, t4, n3) => ht$1 in e4 && typeof e4[ht$1] == "function" ? e4[ht$1](t4) : dt$2 in e4 && typeof e4[dt$2] == "function" ? e4[dt$2](
  t4.depth,
  t4
) : "inspect" in e4 && typeof e4.inspect == "function" ? e4.inspect(t4.depth, t4) : "constructor" in e4 && Tn$1.has(e4.constructor) ? Tn$1.get(e4.constructor)(
  e4,
  t4
) : Cn$2[n3] ? Cn$2[n3](e4, t4) : "", "inspectCustom"), Go = Object.prototype.toString;
function ke$3(e4, t4 = {}) {
  let n3 = bn$1(t4, ke$3), { customInspect: r4 } = n3, o3 = e4 === null ? "null" : typeof e4;
  if (o3 === "object" && (o3 = Go.call(e4).slice(8, -1)), o3 in On$2)
    return On$2[o3](e4, n3);
  if (r4 && e4) {
    let c3 = Ko$1(e4, n3, o3);
    if (c3)
      return typeof c3 == "string" ? c3 : ke$3(c3, n3);
  }
  let s4 = e4 ? Object.getPrototypeOf(e4) : false;
  return s4 === Object.prototype || s4 === null ? me$3(e4, n3) : e4 && typeof HTMLElement == "function" && e4 instanceof HTMLElement ? je$2(e4, n3) : "constructor" in e4 ? e4.constructor !== Object ? mt$2(e4, n3) : me$3(e4, n3) : e4 === Object(e4) ? me$3(e4, n3) : n3.stylize(String(e4), o3);
}
i$1(ke$3, "inspect");
var { AsymmetricMatcher: Jo$1, DOMCollection: Xo$1, DOMElement: Zo$1, Immutable: Qo$2, ReactElement: vo$2, ReactTestComponent: es } = _e$2, $n$2 = [
  es,
  vo$2,
  Zo$1,
  Xo$1,
  Qo$2,
  Jo$1
];
function pe$3(e4, t4 = 10, { maxLength: n3, ...r4 } = {}) {
  let o3 = n3 ?? 1e4, s4;
  try {
    s4 = X$1(e4, {
      maxDepth: t4,
      escapeString: false,
      plugins: $n$2,
      ...r4
    });
  } catch {
    s4 = X$1(e4, {
      callToJSON: false,
      maxDepth: t4,
      escapeString: false,
      plugins: $n$2,
      ...r4
    });
  }
  return s4.length >= o3 && t4 > 1 ? pe$3(e4, Math.floor(Math.min(t4, Number.MAX_SAFE_INTEGER) / 2), {
    maxLength: n3,
    ...r4
  }) : s4;
}
i$1(pe$3, "stringify");
var ts$1 = /%[sdjifoOc%]/g;
function wn(...e4) {
  if (typeof e4[0] != "string") {
    let s4 = [];
    for (let c3 = 0; c3 < e4.length; c3++)
      s4.push(Te$2(e4[c3], {
        depth: 0,
        colors: false
      }));
    return s4.join(" ");
  }
  let t4 = e4.length, n3 = 1, r4 = e4[0], o3 = String(r4).replace(ts$1, (s4) => {
    if (s4 === "%%")
      return "%";
    if (n3 >= t4)
      return s4;
    switch (s4) {
      case "%s": {
        let c3 = e4[n3++];
        return typeof c3 == "bigint" ? `${c3.toString()}n` : typeof c3 == "number" && c3 === 0 && 1 / c3 < 0 ? "-0" : typeof c3 == "object" && c3 !== null ? typeof c3.toString == "function" && c3.toString !== Object.prototype.toString ? c3.toString() : Te$2(c3, {
          depth: 0,
          colors: false
        }) : String(c3);
      }
      case "%d": {
        let c3 = e4[n3++];
        return typeof c3 == "bigint" ? `${c3.toString()}n` : Number(c3).toString();
      }
      case "%i": {
        let c3 = e4[n3++];
        return typeof c3 == "bigint" ? `${c3.toString()}n` : Number.parseInt(String(c3)).toString();
      }
      case "%f":
        return Number.parseFloat(String(e4[n3++])).toString();
      case "%o":
        return Te$2(e4[n3++], {
          showHidden: true,
          showProxy: true
        });
      case "%O":
        return Te$2(e4[n3++]);
      case "%c":
        return n3++, "";
      case "%j":
        try {
          return JSON.stringify(e4[n3++]);
        } catch (c3) {
          let a4 = c3.message;
          if (a4.includes("circular structure") || a4.includes("cyclic structures") || a4.includes("cyclic object"))
            return "[Circular]";
          throw c3;
        }
      default:
        return s4;
    }
  });
  for (let s4 = e4[n3]; n3 < t4; s4 = e4[++n3])
    s4 === null || typeof s4 != "object" ? o3 += ` ${s4}` : o3 += ` ${Te$2(s4)}`;
  return o3;
}
i$1(wn, "format");
function Te$2(e4, t4 = {}) {
  return t4.truncate === 0 && (t4.truncate = Number.POSITIVE_INFINITY), ke$3(e4, t4);
}
i$1(Te$2, "inspect");
function Rn$2(e4) {
  return e4 && e4.__esModule && Object.prototype.hasOwnProperty.call(e4, "default") ? e4.default : e4;
}
i$1(Rn$2, "getDefaultExportFromCjs");
function ns$1(e4) {
  return e4 === Object.prototype || e4 === Function.prototype || e4 === RegExp.prototype;
}
i$1(ns$1, "isFinalObj");
function Be$3(e4) {
  return Object.prototype.toString.apply(e4).slice(8, -1);
}
i$1(Be$3, "getType");
function rs(e4, t4) {
  let n3 = typeof t4 == "function" ? t4 : (r4) => t4.add(r4);
  Object.getOwnPropertyNames(e4).forEach(n3), Object.getOwnPropertySymbols(e4).forEach(n3);
}
i$1(rs, "collectOwnProperties");
function bt$2(e4) {
  let t4 = /* @__PURE__ */ new Set();
  return ns$1(e4) ? [] : (rs(e4, t4), Array.from(t4));
}
i$1(bt$2, "getOwnProperties");
var An$2 = { forceWritable: false };
function St$2(e4, t4 = An$2) {
  return yt$2(e4, /* @__PURE__ */ new WeakMap(), t4);
}
i$1(St$2, "deepClone");
function yt$2(e4, t4, n3 = An$2) {
  let r4, o3;
  if (t4.has(e4))
    return t4.get(e4);
  if (Array.isArray(e4)) {
    for (o3 = Array.from({ length: r4 = e4.length }), t4.set(e4, o3); r4--; )
      o3[r4] = yt$2(e4[r4], t4, n3);
    return o3;
  }
  if (Object.prototype.toString.call(e4) === "[object Object]") {
    o3 = Object.create(Object.getPrototypeOf(e4)), t4.set(e4, o3);
    let s4 = bt$2(e4);
    for (let c3 of s4) {
      let a4 = Object.getOwnPropertyDescriptor(e4, c3);
      if (!a4)
        continue;
      let u4 = yt$2(e4[c3], t4, n3);
      n3.forceWritable ? Object.defineProperty(o3, c3, {
        enumerable: a4.enumerable,
        configurable: true,
        writable: true,
        value: u4
      }) : "get" in a4 ? Object.defineProperty(o3, c3, {
        ...a4,
        get() {
          return u4;
        }
      }) : Object.defineProperty(o3, c3, {
        ...a4,
        value: u4
      });
    }
    return o3;
  }
  return e4;
}
i$1(yt$2, "clone");
var z$2 = -1, j$2 = 1, M$2 = 0, At$2 = class At {
  constructor(t4, n3) {
    __publicField(this, 0);
    __publicField(this, 1);
    this[0] = t4, this[1] = n3;
  }
};
i$1(At$2, "Diff");
var P$1 = At$2;
function os(e4, t4) {
  if (!e4 || !t4 || e4.charAt(0) !== t4.charAt(0))
    return 0;
  let n3 = 0, r4 = Math.min(e4.length, t4.length), o3 = r4, s4 = 0;
  for (; n3 < o3; )
    e4.substring(s4, o3) === t4.substring(s4, o3) ? (n3 = o3, s4 = n3) : r4 = o3, o3 = Math.floor((r4 - n3) / 2 + n3);
  return o3;
}
i$1(os, "diff_commonPrefix");
function Vn$1(e4, t4) {
  if (!e4 || !t4 || e4.charAt(e4.length - 1) !== t4.charAt(t4.length - 1))
    return 0;
  let n3 = 0, r4 = Math.min(e4.length, t4.length), o3 = r4, s4 = 0;
  for (; n3 < o3; )
    e4.substring(e4.length - o3, e4.length - s4) === t4.substring(t4.length - o3, t4.length - s4) ? (n3 = o3, s4 = n3) : r4 = o3, o3 = Math.floor((r4 - n3) / 2 + n3);
  return o3;
}
i$1(Vn$1, "diff_commonSuffix");
function Pn$2(e4, t4) {
  let n3 = e4.length, r4 = t4.length;
  if (n3 === 0 || r4 === 0)
    return 0;
  n3 > r4 ? e4 = e4.substring(n3 - r4) : n3 < r4 && (t4 = t4.substring(0, n3));
  let o3 = Math.min(n3, r4);
  if (e4 === t4)
    return o3;
  let s4 = 0, c3 = 1;
  for (; ; ) {
    let a4 = e4.substring(o3 - c3), u4 = t4.indexOf(a4);
    if (u4 === -1)
      return s4;
    c3 += u4, (u4 === 0 || e4.substring(o3 - c3) === t4.substring(0, c3)) && (s4 = c3, c3++);
  }
}
i$1(Pn$2, "diff_commonOverlap_");
function ss(e4) {
  let t4 = false, n3 = [], r4 = 0, o3 = null, s4 = 0, c3 = 0, a4 = 0, u4 = 0, m2 = 0;
  for (; s4 < e4.length; )
    e4[s4][0] === M$2 ? (n3[r4++] = s4, c3 = u4, a4 = m2, u4 = 0, m2 = 0, o3 = e4[s4][1]) : (e4[s4][0] === j$2 ? u4 += e4[s4][1].length : m2 += e4[s4][1].length, o3 && o3.length <= Math.max(c3, a4) && o3.length <= Math.max(u4, m2) && (e4.splice(n3[r4 - 1], 0, new P$1(z$2, o3)), e4[n3[r4 - 1] + 1][0] = j$2, r4--, r4--, s4 = r4 > 0 ? n3[r4 - 1] : -1, c3 = 0, a4 = 0, u4 = 0, m2 = 0, o3 = null, t4 = true)), s4++;
  for (t4 && qn(e4), us(e4), s4 = 1; s4 < e4.length; ) {
    if (e4[s4 - 1][0] === z$2 && e4[s4][0] === j$2) {
      let p3 = e4[s4 - 1][1], l4 = e4[s4][1], b3 = Pn$2(p3, l4), g2 = Pn$2(l4, p3);
      b3 >= g2 ? (b3 >= p3.length / 2 || b3 >= l4.length / 2) && (e4.splice(s4, 0, new P$1(M$2, l4.substring(0, b3))), e4[s4 - 1][1] = p3.substring(0, p3.length - b3), e4[s4 + 1][1] = l4.substring(b3), s4++) : (g2 >= p3.length / 2 || g2 >= l4.length / 2) && (e4.splice(s4, 0, new P$1(M$2, p3.substring(0, g2))), e4[s4 - 1][0] = j$2, e4[s4 - 1][1] = l4.substring(0, l4.length - g2), e4[s4 + 1][0] = z$2, e4[s4 + 1][1] = p3.substring(g2), s4++), s4++;
    }
    s4++;
  }
}
i$1(ss, "diff_cleanupSemantic");
var Nn$2 = /[^a-z0-9]/i, In$1 = /\s/, Mn$2 = /[\r\n]/, is = /\n\r?\n$/, cs = /^\r?\n\r?\n/;
function us(e4) {
  let t4 = 1;
  for (; t4 < e4.length - 1; ) {
    if (e4[t4 - 1][0] === M$2 && e4[t4 + 1][0] === M$2) {
      let n3 = e4[t4 - 1][1], r4 = e4[t4][1], o3 = e4[t4 + 1][1], s4 = Vn$1(n3, r4);
      if (s4) {
        let p3 = r4.substring(r4.length - s4);
        n3 = n3.substring(0, n3.length - s4), r4 = p3 + r4.substring(0, r4.length - s4), o3 = p3 + o3;
      }
      let c3 = n3, a4 = r4, u4 = o3, m2 = ze$2(n3, r4) + ze$2(r4, o3);
      for (; r4.charAt(0) === o3.charAt(0); ) {
        n3 += r4.charAt(0), r4 = r4.substring(1) + o3.charAt(0), o3 = o3.substring(1);
        let p3 = ze$2(n3, r4) + ze$2(r4, o3);
        p3 >= m2 && (m2 = p3, c3 = n3, a4 = r4, u4 = o3);
      }
      e4[t4 - 1][1] !== c3 && (c3 ? e4[t4 - 1][1] = c3 : (e4.splice(t4 - 1, 1), t4--), e4[t4][1] = a4, u4 ? e4[t4 + 1][1] = u4 : (e4.splice(t4 + 1, 1), t4--));
    }
    t4++;
  }
}
i$1(us, "diff_cleanupSemanticLossless");
function qn(e4) {
  e4.push(new P$1(M$2, ""));
  let t4 = 0, n3 = 0, r4 = 0, o3 = "", s4 = "", c3;
  for (; t4 < e4.length; )
    switch (e4[t4][0]) {
      case j$2:
        r4++, s4 += e4[t4][1], t4++;
        break;
      case z$2:
        n3++, o3 += e4[t4][1], t4++;
        break;
      case M$2:
        n3 + r4 > 1 ? (n3 !== 0 && r4 !== 0 && (c3 = os(s4, o3), c3 !== 0 && (t4 - n3 - r4 > 0 && e4[t4 - n3 - r4 - 1][0] === M$2 ? e4[t4 - n3 - r4 - 1][1] += s4.substring(0, c3) : (e4.splice(0, 0, new P$1(M$2, s4.substring(0, c3))), t4++), s4 = s4.substring(c3), o3 = o3.substring(c3)), c3 = Vn$1(s4, o3), c3 !== 0 && (e4[t4][1] = s4.substring(s4.length - c3) + e4[t4][1], s4 = s4.substring(0, s4.length - c3), o3 = o3.substring(0, o3.length - c3))), t4 -= n3 + r4, e4.splice(t4, n3 + r4), o3.length && (e4.splice(t4, 0, new P$1(z$2, o3)), t4++), s4.length && (e4.splice(t4, 0, new P$1(j$2, s4)), t4++), t4++) : t4 !== 0 && e4[t4 - 1][0] === M$2 ? (e4[t4 - 1][1] += e4[t4][1], e4.splice(t4, 1)) : t4++, r4 = 0, n3 = 0, o3 = "", s4 = "";
        break;
    }
  e4[e4.length - 1][1] === "" && e4.pop();
  let a4 = false;
  for (t4 = 1; t4 < e4.length - 1; )
    e4[t4 - 1][0] === M$2 && e4[t4 + 1][0] === M$2 && (e4[t4][1].substring(e4[t4][1].length - e4[t4 - 1][1].length) === e4[t4 - 1][1] ? (e4[t4][1] = e4[t4 - 1][1] + e4[t4][1].substring(0, e4[t4][1].length - e4[t4 - 1][1].length), e4[t4 + 1][1] = e4[t4 - 1][1] + e4[t4 + 1][1], e4.splice(t4 - 1, 1), a4 = true) : e4[t4][1].substring(0, e4[t4 + 1][1].length) === e4[t4 + 1][1] && (e4[t4 - 1][1] += e4[t4 + 1][1], e4[t4][1] = e4[t4][1].substring(e4[t4 + 1][1].length) + e4[t4 + 1][1], e4.splice(t4 + 1, 1), a4 = true)), t4++;
  a4 && qn(e4);
}
i$1(qn, "diff_cleanupMerge");
function ze$2(e4, t4) {
  if (!e4 || !t4)
    return 6;
  let n3 = e4.charAt(e4.length - 1), r4 = t4.charAt(0), o3 = n3.match(Nn$2), s4 = r4.match(Nn$2), c3 = o3 && n3.match(In$1), a4 = s4 && r4.match(In$1), u4 = c3 && n3.match(Mn$2), m2 = a4 && r4.match(Mn$2), p3 = u4 && e4.match(is), l4 = m2 && t4.match(cs);
  return p3 || l4 ? 5 : u4 || m2 ? 4 : o3 && !c3 && a4 ? 3 : c3 || a4 ? 2 : o3 || s4 ? 1 : 0;
}
i$1(ze$2, "diff_cleanupSemanticScore_");
var Kn$1 = "Compared values have no visual difference.", as$1 = "Compared values serialize to the same structure.\nPrinting internal object structure without calling `toJSON` instead.", Ye$2 = {}, Ln$1;
function ls() {
  if (Ln$1) return Ye$2;
  Ln$1 = 1, Object.defineProperty(Ye$2, "__esModule", {
    value: true
  }), Ye$2.default = b3;
  let e4 = "diff-sequences", t4 = 0, n3 = /* @__PURE__ */ i$1((g2, h2, f4, d4, S4) => {
    let _2 = 0;
    for (; g2 < h2 && f4 < d4 && S4(g2, f4); )
      g2 += 1, f4 += 1, _2 += 1;
    return _2;
  }, "countCommonItemsF"), r4 = /* @__PURE__ */ i$1((g2, h2, f4, d4, S4) => {
    let _2 = 0;
    for (; g2 <= h2 && f4 <= d4 && S4(h2, d4); )
      h2 -= 1, d4 -= 1, _2 += 1;
    return _2;
  }, "countCommonItemsR"), o3 = /* @__PURE__ */ i$1((g2, h2, f4, d4, S4, _2, O2) => {
    let y3 = 0, E4 = -g2, $2 = _2[y3], T4 = $2;
    _2[y3] += n3(
      $2 + 1,
      h2,
      d4 + $2 - E4 + 1,
      f4,
      S4
    );
    let R4 = g2 < O2 ? g2 : O2;
    for (y3 += 1, E4 += 2; y3 <= R4; y3 += 1, E4 += 2) {
      if (y3 !== g2 && T4 < _2[y3])
        $2 = _2[y3];
      else if ($2 = T4 + 1, h2 <= $2)
        return y3 - 1;
      T4 = _2[y3], _2[y3] = $2 + n3($2 + 1, h2, d4 + $2 - E4 + 1, f4, S4);
    }
    return O2;
  }, "extendPathsF"), s4 = /* @__PURE__ */ i$1((g2, h2, f4, d4, S4, _2, O2) => {
    let y3 = 0, E4 = g2, $2 = _2[y3], T4 = $2;
    _2[y3] -= r4(
      h2,
      $2 - 1,
      f4,
      d4 + $2 - E4 - 1,
      S4
    );
    let R4 = g2 < O2 ? g2 : O2;
    for (y3 += 1, E4 -= 2; y3 <= R4; y3 += 1, E4 -= 2) {
      if (y3 !== g2 && _2[y3] < T4)
        $2 = _2[y3];
      else if ($2 = T4 - 1, $2 < h2)
        return y3 - 1;
      T4 = _2[y3], _2[y3] = $2 - r4(
        h2,
        $2 - 1,
        f4,
        d4 + $2 - E4 - 1,
        S4
      );
    }
    return O2;
  }, "extendPathsR"), c3 = /* @__PURE__ */ i$1((g2, h2, f4, d4, S4, _2, O2, y3, E4, $2, T4) => {
    let R4 = d4 - h2, K2 = f4 - h2, I4 = S4 - d4 - K2, k2 = -I4 - (g2 - 1), G2 = -I4 + (g2 - 1), Y2 = t4, N2 = g2 < y3 ? g2 : y3;
    for (let L4 = 0, x3 = -g2; L4 <= N2; L4 += 1, x3 += 2) {
      let H2 = L4 === 0 || L4 !== g2 && Y2 < O2[L4], F2 = H2 ? O2[L4] : Y2, W2 = H2 ? F2 : F2 + 1, re2 = R4 + W2 - x3, V2 = n3(
        W2 + 1,
        f4,
        re2 + 1,
        S4,
        _2
      ), q2 = W2 + V2;
      if (Y2 = O2[L4], O2[L4] = q2, k2 <= x3 && x3 <= G2) {
        let se2 = (g2 - 1 - (x3 + I4)) / 2;
        if (se2 <= $2 && E4[se2] - 1 <= q2) {
          let J2 = R4 + F2 - (H2 ? x3 + 1 : x3 - 1), U2 = r4(
            h2,
            F2,
            d4,
            J2,
            _2
          ), oe2 = F2 - U2, he2 = J2 - U2, ue2 = oe2 + 1, be2 = he2 + 1;
          T4.nChangePreceding = g2 - 1, g2 - 1 === ue2 + be2 - h2 - d4 ? (T4.aEndPreceding = h2, T4.bEndPreceding = d4) : (T4.aEndPreceding = ue2, T4.bEndPreceding = be2), T4.nCommonPreceding = U2, U2 !== 0 && (T4.aCommonPreceding = ue2, T4.bCommonPreceding = be2), T4.nCommonFollowing = V2, V2 !== 0 && (T4.aCommonFollowing = W2 + 1, T4.bCommonFollowing = re2 + 1);
          let Ce2 = q2 + 1, Oe2 = re2 + V2 + 1;
          return T4.nChangeFollowing = g2 - 1, g2 - 1 === f4 + S4 - Ce2 - Oe2 ? (T4.aStartFollowing = f4, T4.bStartFollowing = S4) : (T4.aStartFollowing = Ce2, T4.bStartFollowing = Oe2), true;
        }
      }
    }
    return false;
  }, "extendOverlappablePathsF"), a4 = /* @__PURE__ */ i$1((g2, h2, f4, d4, S4, _2, O2, y3, E4, $2, T4) => {
    let R4 = S4 - f4, K2 = f4 - h2, I4 = S4 - d4 - K2, k2 = I4 - g2, G2 = I4 + g2, Y2 = t4, N2 = g2 < $2 ? g2 : $2;
    for (let L4 = 0, x3 = g2; L4 <= N2; L4 += 1, x3 -= 2) {
      let H2 = L4 === 0 || L4 !== g2 && E4[L4] < Y2, F2 = H2 ? E4[L4] : Y2, W2 = H2 ? F2 : F2 - 1, re2 = R4 + W2 - x3, V2 = r4(
        h2,
        W2 - 1,
        d4,
        re2 - 1,
        _2
      ), q2 = W2 - V2;
      if (Y2 = E4[L4], E4[L4] = q2, k2 <= x3 && x3 <= G2) {
        let se2 = (g2 + (x3 - I4)) / 2;
        if (se2 <= y3 && q2 - 1 <= O2[se2]) {
          let J2 = re2 - V2;
          if (T4.nChangePreceding = g2, g2 === q2 + J2 - h2 - d4 ? (T4.aEndPreceding = h2, T4.bEndPreceding = d4) : (T4.aEndPreceding = q2, T4.bEndPreceding = J2), T4.nCommonPreceding = V2, V2 !== 0 && (T4.aCommonPreceding = q2, T4.bCommonPreceding = J2), T4.nChangeFollowing = g2 - 1, g2 === 1)
            T4.nCommonFollowing = 0, T4.aStartFollowing = f4, T4.bStartFollowing = S4;
          else {
            let U2 = R4 + F2 - (H2 ? x3 - 1 : x3 + 1), oe2 = n3(
              F2,
              f4,
              U2,
              S4,
              _2
            );
            T4.nCommonFollowing = oe2, oe2 !== 0 && (T4.aCommonFollowing = F2, T4.bCommonFollowing = U2);
            let he2 = F2 + oe2, ue2 = U2 + oe2;
            g2 - 1 === f4 + S4 - he2 - ue2 ? (T4.aStartFollowing = f4, T4.bStartFollowing = S4) : (T4.aStartFollowing = he2, T4.bStartFollowing = ue2);
          }
          return true;
        }
      }
    }
    return false;
  }, "extendOverlappablePathsR"), u4 = /* @__PURE__ */ i$1((g2, h2, f4, d4, S4, _2, O2, y3, E4) => {
    let $2 = d4 - h2, T4 = S4 - f4, R4 = f4 - h2, K2 = S4 - d4, Q2 = K2 - R4, I4 = R4, k2 = R4;
    if (O2[0] = h2 - 1, y3[0] = f4, Q2 % 2 === 0) {
      let G2 = (g2 || Q2) / 2, Y2 = (R4 + K2) / 2;
      for (let N2 = 1; N2 <= Y2; N2 += 1)
        if (I4 = o3(N2, f4, S4, $2, _2, O2, I4), N2 < G2)
          k2 = s4(N2, h2, d4, T4, _2, y3, k2);
        else if (
          // If a reverse path overlaps a forward path in the same diagonal,
          // return a division of the index intervals at the middle change.
          a4(
            N2,
            h2,
            f4,
            d4,
            S4,
            _2,
            O2,
            I4,
            y3,
            k2,
            E4
          )
        )
          return;
    } else {
      let G2 = ((g2 || Q2) + 1) / 2, Y2 = (R4 + K2 + 1) / 2, N2 = 1;
      for (I4 = o3(N2, f4, S4, $2, _2, O2, I4), N2 += 1; N2 <= Y2; N2 += 1)
        if (k2 = s4(
          N2 - 1,
          h2,
          d4,
          T4,
          _2,
          y3,
          k2
        ), N2 < G2)
          I4 = o3(N2, f4, S4, $2, _2, O2, I4);
        else if (
          // If a forward path overlaps a reverse path in the same diagonal,
          // return a division of the index intervals at the middle change.
          c3(
            N2,
            h2,
            f4,
            d4,
            S4,
            _2,
            O2,
            I4,
            y3,
            k2,
            E4
          )
        )
          return;
    }
    throw new Error(
      `${e4}: no overlap aStart=${h2} aEnd=${f4} bStart=${d4} bEnd=${S4}`
    );
  }, "divide"), m2 = /* @__PURE__ */ i$1((g2, h2, f4, d4, S4, _2, O2, y3, E4, $2) => {
    if (S4 - d4 < f4 - h2) {
      if (_2 = !_2, _2 && O2.length === 1) {
        let { foundSubsequence: q2, isCommon: se2 } = O2[0];
        O2[1] = {
          foundSubsequence: /* @__PURE__ */ i$1((J2, U2, oe2) => {
            q2(J2, oe2, U2);
          }, "foundSubsequence"),
          isCommon: /* @__PURE__ */ i$1((J2, U2) => se2(U2, J2), "isCommon")
        };
      }
      let re2 = h2, V2 = f4;
      h2 = d4, f4 = S4, d4 = re2, S4 = V2;
    }
    let { foundSubsequence: T4, isCommon: R4 } = O2[_2 ? 1 : 0];
    u4(
      g2,
      h2,
      f4,
      d4,
      S4,
      R4,
      y3,
      E4,
      $2
    );
    let {
      nChangePreceding: K2,
      aEndPreceding: Q2,
      bEndPreceding: I4,
      nCommonPreceding: k2,
      aCommonPreceding: G2,
      bCommonPreceding: Y2,
      nCommonFollowing: N2,
      aCommonFollowing: L4,
      bCommonFollowing: x3,
      nChangeFollowing: H2,
      aStartFollowing: F2,
      bStartFollowing: W2
    } = $2;
    h2 < Q2 && d4 < I4 && m2(
      K2,
      h2,
      Q2,
      d4,
      I4,
      _2,
      O2,
      y3,
      E4,
      $2
    ), k2 !== 0 && T4(k2, G2, Y2), N2 !== 0 && T4(N2, L4, x3), F2 < f4 && W2 < S4 && m2(
      H2,
      F2,
      f4,
      W2,
      S4,
      _2,
      O2,
      y3,
      E4,
      $2
    );
  }, "findSubsequences"), p3 = /* @__PURE__ */ i$1((g2, h2) => {
    if (typeof h2 != "number")
      throw new TypeError(`${e4}: ${g2} typeof ${typeof h2} is not a number`);
    if (!Number.isSafeInteger(h2))
      throw new RangeError(`${e4}: ${g2} value ${h2} is not a safe integer`);
    if (h2 < 0)
      throw new RangeError(`${e4}: ${g2} value ${h2} is a negative integer`);
  }, "validateLength"), l4 = /* @__PURE__ */ i$1((g2, h2) => {
    let f4 = typeof h2;
    if (f4 !== "function")
      throw new TypeError(`${e4}: ${g2} typeof ${f4} is not a function`);
  }, "validateCallback");
  function b3(g2, h2, f4, d4) {
    p3("aLength", g2), p3("bLength", h2), l4("isCommon", f4), l4("foundSubsequence", d4);
    let S4 = n3(0, g2, 0, h2, f4);
    if (S4 !== 0 && d4(S4, 0, 0), g2 !== S4 || h2 !== S4) {
      let _2 = S4, O2 = S4, y3 = r4(
        _2,
        g2 - 1,
        O2,
        h2 - 1,
        f4
      ), E4 = g2 - y3, $2 = h2 - y3, T4 = S4 + y3;
      g2 !== T4 && h2 !== T4 && m2(
        0,
        _2,
        E4,
        O2,
        $2,
        false,
        [
          {
            foundSubsequence: d4,
            isCommon: f4
          }
        ],
        [t4],
        [t4],
        {
          aCommonFollowing: t4,
          aCommonPreceding: t4,
          aEndPreceding: t4,
          aStartFollowing: t4,
          bCommonFollowing: t4,
          bCommonPreceding: t4,
          bEndPreceding: t4,
          bStartFollowing: t4,
          nChangeFollowing: t4,
          nChangePreceding: t4,
          nCommonFollowing: t4,
          nCommonPreceding: t4
        }
      ), y3 !== 0 && d4(y3, E4, $2);
    }
  }
  return i$1(b3, "diffSequence"), Ye$2;
}
i$1(ls, "requireBuild");
var fs = ls(), Gn = /* @__PURE__ */ Rn$2(fs);
function ms(e4, t4) {
  return e4.replace(/\s+$/, (n3) => t4(n3));
}
i$1(ms, "formatTrailingSpaces");
function wt$2(e4, t4, n3, r4, o3, s4) {
  return e4.length !== 0 ? n3(`${r4} ${ms(e4, o3)}`) : r4 !== " " ? n3(r4) : t4 && s4.length !== 0 ? n3(`${r4} ${s4}`) : "";
}
i$1(wt$2, "printDiffLine");
function Hn(e4, t4, { aColor: n3, aIndicator: r4, changeLineTrailingSpaceColor: o3, emptyFirstOrLastLinePlaceholder: s4 }) {
  return wt$2(e4, t4, n3, r4, o3, s4);
}
i$1(Hn, "printDeleteLine");
function Jn(e4, t4, { bColor: n3, bIndicator: r4, changeLineTrailingSpaceColor: o3, emptyFirstOrLastLinePlaceholder: s4 }) {
  return wt$2(e4, t4, n3, r4, o3, s4);
}
i$1(Jn, "printInsertLine");
function Xn$1(e4, t4, { commonColor: n3, commonIndicator: r4, commonLineTrailingSpaceColor: o3, emptyFirstOrLastLinePlaceholder: s4 }) {
  return wt$2(e4, t4, n3, r4, o3, s4);
}
i$1(Xn$1, "printCommonLine");
function xn$2(e4, t4, n3, r4, { patchColor: o3 }) {
  return o3(`@@ -${e4 + 1},${t4 - e4} +${n3 + 1},${r4 - n3} @@`);
}
i$1(xn$2, "createPatchMark");
function ps(e4, t4) {
  let n3 = e4.length, r4 = t4.contextLines, o3 = r4 + r4, s4 = n3, c3 = false, a4 = 0, u4 = 0;
  for (; u4 !== n3; ) {
    let y3 = u4;
    for (; u4 !== n3 && e4[u4][0] === M$2; )
      u4 += 1;
    if (y3 !== u4)
      if (y3 === 0)
        u4 > r4 && (s4 -= u4 - r4, c3 = true);
      else if (u4 === n3) {
        let E4 = u4 - y3;
        E4 > r4 && (s4 -= E4 - r4, c3 = true);
      } else {
        let E4 = u4 - y3;
        E4 > o3 && (s4 -= E4 - o3, a4 += 1);
      }
    for (; u4 !== n3 && e4[u4][0] !== M$2; )
      u4 += 1;
  }
  let m2 = a4 !== 0 || c3;
  a4 !== 0 ? s4 += a4 + 1 : c3 && (s4 += 1);
  let p3 = s4 - 1, l4 = [], b3 = 0;
  m2 && l4.push("");
  let g2 = 0, h2 = 0, f4 = 0, d4 = 0, S4 = /* @__PURE__ */ i$1((y3) => {
    let E4 = l4.length;
    l4.push(Xn$1(y3, E4 === 0 || E4 === p3, t4)), f4 += 1, d4 += 1;
  }, "pushCommonLine"), _2 = /* @__PURE__ */ i$1((y3) => {
    let E4 = l4.length;
    l4.push(Hn(y3, E4 === 0 || E4 === p3, t4)), f4 += 1;
  }, "pushDeleteLine"), O2 = /* @__PURE__ */ i$1((y3) => {
    let E4 = l4.length;
    l4.push(Jn(y3, E4 === 0 || E4 === p3, t4)), d4 += 1;
  }, "pushInsertLine");
  for (u4 = 0; u4 !== n3; ) {
    let y3 = u4;
    for (; u4 !== n3 && e4[u4][0] === M$2; )
      u4 += 1;
    if (y3 !== u4)
      if (y3 === 0) {
        u4 > r4 && (y3 = u4 - r4, g2 = y3, h2 = y3, f4 = g2, d4 = h2);
        for (let E4 = y3; E4 !== u4; E4 += 1)
          S4(e4[E4][1]);
      } else if (u4 === n3) {
        let E4 = u4 - y3 > r4 ? y3 + r4 : u4;
        for (let $2 = y3; $2 !== E4; $2 += 1)
          S4(e4[$2][1]);
      } else {
        let E4 = u4 - y3;
        if (E4 > o3) {
          let $2 = y3 + r4;
          for (let R4 = y3; R4 !== $2; R4 += 1)
            S4(e4[R4][1]);
          l4[b3] = xn$2(g2, f4, h2, d4, t4), b3 = l4.length, l4.push("");
          let T4 = E4 - o3;
          g2 = f4 + T4, h2 = d4 + T4, f4 = g2, d4 = h2;
          for (let R4 = u4 - r4; R4 !== u4; R4 += 1)
            S4(e4[R4][1]);
        } else
          for (let $2 = y3; $2 !== u4; $2 += 1)
            S4(e4[$2][1]);
      }
    for (; u4 !== n3 && e4[u4][0] === z$2; )
      _2(e4[u4][1]), u4 += 1;
    for (; u4 !== n3 && e4[u4][0] === j$2; )
      O2(e4[u4][1]), u4 += 1;
  }
  return m2 && (l4[b3] = xn$2(g2, f4, h2, d4, t4)), l4.join(`
`);
}
i$1(ps, "joinAlignedDiffsNoExpand");
function gs(e4, t4) {
  return e4.map((n3, r4, o3) => {
    let s4 = n3[1], c3 = r4 === 0 || r4 === o3.length - 1;
    switch (n3[0]) {
      case z$2:
        return Hn(s4, c3, t4);
      case j$2:
        return Jn(s4, c3, t4);
      default:
        return Xn$1(s4, c3, t4);
    }
  }).join(`
`);
}
i$1(gs, "joinAlignedDiffsExpand");
var Et$1 = /* @__PURE__ */ i$1((e4) => e4, "noColor"), Zn$1 = 5, hs$1 = 0;
function ds$1() {
  return {
    aAnnotation: "Expected",
    aColor: v$1.green,
    aIndicator: "-",
    bAnnotation: "Received",
    bColor: v$1.red,
    bIndicator: "+",
    changeColor: v$1.inverse,
    changeLineTrailingSpaceColor: Et$1,
    commonColor: v$1.dim,
    commonIndicator: " ",
    commonLineTrailingSpaceColor: Et$1,
    compareKeys: void 0,
    contextLines: Zn$1,
    emptyFirstOrLastLinePlaceholder: "",
    expand: false,
    includeChangeCounts: false,
    omitAnnotationLines: false,
    patchColor: v$1.yellow,
    printBasicPrototype: false,
    truncateThreshold: hs$1,
    truncateAnnotation: "... Diff result is truncated",
    truncateAnnotationColor: Et$1
  };
}
i$1(ds$1, "getDefaultOptions");
function ys(e4) {
  return e4 && typeof e4 == "function" ? e4 : void 0;
}
i$1(ys, "getCompareKeys");
function bs$1(e4) {
  return typeof e4 == "number" && Number.isSafeInteger(e4) && e4 >= 0 ? e4 : Zn$1;
}
i$1(bs$1, "getContextLines");
function ge$3(e4 = {}) {
  return {
    ...ds$1(),
    ...e4,
    compareKeys: ys(e4.compareKeys),
    contextLines: bs$1(e4.contextLines)
  };
}
i$1(ge$3, "normalizeDiffOptions");
function ye$3(e4) {
  return e4.length === 1 && e4[0].length === 0;
}
i$1(ye$3, "isEmptyString");
function Ss$1(e4) {
  let t4 = 0, n3 = 0;
  return e4.forEach((r4) => {
    switch (r4[0]) {
      case z$2:
        t4 += 1;
        break;
      case j$2:
        n3 += 1;
        break;
    }
  }), {
    a: t4,
    b: n3
  };
}
i$1(Ss$1, "countChanges");
function Es({ aAnnotation: e4, aColor: t4, aIndicator: n3, bAnnotation: r4, bColor: o3, bIndicator: s4, includeChangeCounts: c3, omitAnnotationLines: a4 }, u4) {
  if (a4)
    return "";
  let m2 = "", p3 = "";
  if (c3) {
    let g2 = String(u4.a), h2 = String(u4.b), f4 = r4.length - e4.length, d4 = " ".repeat(Math.max(0, f4)), S4 = " ".repeat(Math.max(0, -f4)), _2 = h2.length - g2.length, O2 = " ".repeat(Math.max(0, _2)), y3 = " ".repeat(Math.max(0, -_2));
    m2 = `${d4}  ${n3} ${O2}${g2}`, p3 = `${S4}  ${s4} ${y3}${h2}`;
  }
  let l4 = `${n3} ${e4}${m2}`, b3 = `${s4} ${r4}${p3}`;
  return `${t4(l4)}
${o3(b3)}

`;
}
i$1(Es, "printAnnotation");
function Rt$2(e4, t4, n3) {
  return Es(n3, Ss$1(e4)) + (n3.expand ? gs(e4, n3) : ps(e4, n3)) + (t4 ? n3.truncateAnnotationColor(`
${n3.truncateAnnotation}`) : "");
}
i$1(Rt$2, "printDiffLines");
function We$2(e4, t4, n3) {
  let r4 = ge$3(n3), [o3, s4] = Qn$1(ye$3(e4) ? [] : e4, ye$3(t4) ? [] : t4, r4);
  return Rt$2(o3, s4, r4);
}
i$1(We$2, "diffLinesUnified");
function _s(e4, t4, n3, r4, o3) {
  if (ye$3(e4) && ye$3(n3) && (e4 = [], n3 = []), ye$3(t4) && ye$3(r4) && (t4 = [], r4 = []), e4.length !== n3.length || t4.length !== r4.length)
    return We$2(e4, t4, o3);
  let [s4, c3] = Qn$1(n3, r4, o3), a4 = 0, u4 = 0;
  return s4.forEach((m2) => {
    switch (m2[0]) {
      case z$2:
        m2[1] = e4[a4], a4 += 1;
        break;
      case j$2:
        m2[1] = t4[u4], u4 += 1;
        break;
      default:
        m2[1] = t4[u4], a4 += 1, u4 += 1;
    }
  }), Rt$2(s4, c3, ge$3(o3));
}
i$1(_s, "diffLinesUnified2");
function Qn$1(e4, t4, n3) {
  let r4 = (n3 == null ? void 0 : n3.truncateThreshold) ?? false, o3 = Math.max(Math.floor((n3 == null ? void 0 : n3.truncateThreshold) ?? 0), 0), s4 = r4 ? Math.min(e4.length, o3) : e4.length, c3 = r4 ? Math.min(t4.length, o3) : t4.length, a4 = s4 !== e4.length || c3 !== t4.length, u4 = /* @__PURE__ */ i$1((g2, h2) => e4[g2] === t4[h2], "isCommon"), m2 = [], p3 = 0, l4 = 0;
  for (Gn(s4, c3, u4, /* @__PURE__ */ i$1((g2, h2, f4) => {
    for (; p3 !== h2; p3 += 1)
      m2.push(new P$1(z$2, e4[p3]));
    for (; l4 !== f4; l4 += 1)
      m2.push(new P$1(j$2, t4[l4]));
    for (; g2 !== 0; g2 -= 1, p3 += 1, l4 += 1)
      m2.push(new P$1(M$2, t4[l4]));
  }, "foundSubsequence")); p3 !== s4; p3 += 1)
    m2.push(new P$1(z$2, e4[p3]));
  for (; l4 !== c3; l4 += 1)
    m2.push(new P$1(j$2, t4[l4]));
  return [m2, a4];
}
i$1(Qn$1, "diffLinesRaw");
function Dn$1(e4) {
  if (e4 === void 0)
    return "undefined";
  if (e4 === null)
    return "null";
  if (Array.isArray(e4))
    return "array";
  if (typeof e4 == "boolean")
    return "boolean";
  if (typeof e4 == "function")
    return "function";
  if (typeof e4 == "number")
    return "number";
  if (typeof e4 == "string")
    return "string";
  if (typeof e4 == "bigint")
    return "bigint";
  if (typeof e4 == "object") {
    if (e4 != null) {
      if (e4.constructor === RegExp)
        return "regexp";
      if (e4.constructor === Map)
        return "map";
      if (e4.constructor === Set)
        return "set";
      if (e4.constructor === Date)
        return "date";
    }
    return "object";
  } else if (typeof e4 == "symbol")
    return "symbol";
  throw new Error(`value of unknown type: ${e4}`);
}
i$1(Dn$1, "getType");
function Fn$2(e4) {
  return e4.includes(`\r
`) ? `\r
` : `
`;
}
i$1(Fn$2, "getNewLineSymbol");
function Ts(e4, t4, n3) {
  let r4 = (n3 == null ? void 0 : n3.truncateThreshold) ?? false, o3 = Math.max(Math.floor((n3 == null ? void 0 : n3.truncateThreshold) ?? 0), 0), s4 = e4.length, c3 = t4.length;
  if (r4) {
    let g2 = e4.includes(`
`), h2 = t4.includes(`
`), f4 = Fn$2(e4), d4 = Fn$2(t4), S4 = g2 ? `${e4.split(f4, o3).join(f4)}
` : e4, _2 = h2 ? `${t4.split(d4, o3).join(d4)}
` : t4;
    s4 = S4.length, c3 = _2.length;
  }
  let a4 = s4 !== e4.length || c3 !== t4.length, u4 = /* @__PURE__ */ i$1((g2, h2) => e4[g2] === t4[h2], "isCommon"), m2 = 0, p3 = 0, l4 = [];
  return Gn(s4, c3, u4, /* @__PURE__ */ i$1((g2, h2, f4) => {
    m2 !== h2 && l4.push(new P$1(z$2, e4.slice(m2, h2))), p3 !== f4 && l4.push(new P$1(j$2, t4.slice(p3, f4))), m2 = h2 + g2, p3 = f4 + g2, l4.push(new P$1(M$2, t4.slice(
      f4,
      p3
    )));
  }, "foundSubsequence")), m2 !== s4 && l4.push(new P$1(z$2, e4.slice(m2))), p3 !== c3 && l4.push(new P$1(j$2, t4.slice(p3))), [l4, a4];
}
i$1(Ts, "diffStrings");
function Cs(e4, t4, n3) {
  return t4.reduce((r4, o3) => r4 + (o3[0] === M$2 ? o3[1] : o3[0] === e4 && o3[1].length !== 0 ? n3(o3[1]) : ""), "");
}
i$1(Cs, "concatenateRelevantDiffs");
var Pt$2 = class Pt {
  constructor(t4, n3) {
    __publicField(this, "op");
    __publicField(this, "line");
    __publicField(this, "lines");
    __publicField(this, "changeColor");
    this.op = t4, this.line = [], this.lines = [], this.changeColor = n3;
  }
  pushSubstring(t4) {
    this.pushDiff(new P$1(this.op, t4));
  }
  pushLine() {
    this.lines.push(this.line.length !== 1 ? new P$1(this.op, Cs(this.op, this.line, this.changeColor)) : this.line[0][0] === this.op ? this.line[0] : new P$1(this.op, this.line[0][1])), this.line.length = 0;
  }
  isLineEmpty() {
    return this.line.length === 0;
  }
  // Minor input to buffer.
  pushDiff(t4) {
    this.line.push(t4);
  }
  // Main input to buffer.
  align(t4) {
    let n3 = t4[1];
    if (n3.includes(`
`)) {
      let r4 = n3.split(`
`), o3 = r4.length - 1;
      r4.forEach((s4, c3) => {
        c3 < o3 ? (this.pushSubstring(s4), this.pushLine()) : s4.length !== 0 && this.pushSubstring(s4);
      });
    } else
      this.pushDiff(t4);
  }
  // Output from buffer.
  moveLinesTo(t4) {
    this.isLineEmpty() || this.pushLine(), t4.push(...this.lines), this.lines.length = 0;
  }
};
i$1(Pt$2, "ChangeBuffer");
var Ue$2 = Pt$2, Nt$1 = class Nt {
  constructor(t4, n3) {
    __publicField(this, "deleteBuffer");
    __publicField(this, "insertBuffer");
    __publicField(this, "lines");
    this.deleteBuffer = t4, this.insertBuffer = n3, this.lines = [];
  }
  pushDiffCommonLine(t4) {
    this.lines.push(t4);
  }
  pushDiffChangeLines(t4) {
    let n3 = t4[1].length === 0;
    (!n3 || this.deleteBuffer.isLineEmpty()) && this.deleteBuffer.pushDiff(t4), (!n3 || this.insertBuffer.isLineEmpty()) && this.insertBuffer.pushDiff(
      t4
    );
  }
  flushChangeLines() {
    this.deleteBuffer.moveLinesTo(this.lines), this.insertBuffer.moveLinesTo(this.lines);
  }
  // Input to buffer.
  align(t4) {
    let n3 = t4[0], r4 = t4[1];
    if (r4.includes(`
`)) {
      let o3 = r4.split(`
`), s4 = o3.length - 1;
      o3.forEach((c3, a4) => {
        if (a4 === 0) {
          let u4 = new P$1(n3, c3);
          this.deleteBuffer.isLineEmpty() && this.insertBuffer.isLineEmpty() ? (this.flushChangeLines(), this.pushDiffCommonLine(u4)) : (this.pushDiffChangeLines(u4), this.flushChangeLines());
        } else a4 < s4 ? this.pushDiffCommonLine(new P$1(n3, c3)) : c3.length !== 0 && this.pushDiffChangeLines(new P$1(n3, c3));
      });
    } else
      this.pushDiffChangeLines(t4);
  }
  // Output from buffer.
  getLines() {
    return this.flushChangeLines(), this.lines;
  }
};
i$1(Nt$1, "CommonBuffer");
var Tt$2 = Nt$1;
function Os(e4, t4) {
  let n3 = new Ue$2(z$2, t4), r4 = new Ue$2(j$2, t4), o3 = new Tt$2(n3, r4);
  return e4.forEach((s4) => {
    switch (s4[0]) {
      case z$2:
        n3.align(s4);
        break;
      case j$2:
        r4.align(s4);
        break;
      default:
        o3.align(s4);
    }
  }), o3.getLines();
}
i$1(Os, "getAlignedDiffs");
function $s$1(e4, t4) {
  if (t4) {
    let n3 = e4.length - 1;
    return e4.some((r4, o3) => r4[0] === M$2 && (o3 !== n3 || r4[1] !== `
`));
  }
  return e4.some((n3) => n3[0] === M$2);
}
i$1($s$1, "hasCommonDiff");
function ws$1(e4, t4, n3) {
  if (e4 !== t4 && e4.length !== 0 && t4.length !== 0) {
    let r4 = e4.includes(`
`) || t4.includes(`
`), [o3, s4] = vn$2(r4 ? `${e4}
` : e4, r4 ? `${t4}
` : t4, true, n3);
    if ($s$1(o3, r4)) {
      let c3 = ge$3(n3), a4 = Os(o3, c3.changeColor);
      return Rt$2(a4, s4, c3);
    }
  }
  return We$2(e4.split(`
`), t4.split(`
`), n3);
}
i$1(ws$1, "diffStringsUnified");
function vn$2(e4, t4, n3, r4) {
  let [o3, s4] = Ts(e4, t4, r4);
  return n3 && ss(o3), [o3, s4];
}
i$1(vn$2, "diffStringsRaw");
function Ct$2(e4, t4) {
  let { commonColor: n3 } = ge$3(t4);
  return n3(e4);
}
i$1(Ct$2, "getCommonMessage");
var { AsymmetricMatcher: Rs, DOMCollection: As, DOMElement: Ps, Immutable: Ns, ReactElement: Is, ReactTestComponent: Ms$1 } = _e$2, er$2 = [
  Ms$1,
  Is,
  Ps,
  As,
  Ns,
  Rs,
  _e$2.Error
], Ot$2 = {
  maxDepth: 20,
  plugins: er$2
}, tr$2 = {
  callToJSON: false,
  maxDepth: 8,
  plugins: er$2
};
function Ls$1(e4, t4, n3) {
  if (Object.is(e4, t4))
    return "";
  let r4 = Dn$1(e4), o3 = r4, s4 = false;
  if (r4 === "object" && typeof e4.asymmetricMatch == "function") {
    if (e4.$$typeof !== Symbol.for("jest.asymmetricMatcher") || typeof e4.getExpectedType != "function")
      return;
    o3 = e4.getExpectedType(), s4 = o3 === "string";
  }
  if (o3 !== Dn$1(t4)) {
    let d4 = function(O2) {
      return O2.length <= f4 ? O2 : `${O2.slice(0, f4)}...`;
    };
    i$1(d4, "truncate");
    let { aAnnotation: c3, aColor: a4, aIndicator: u4, bAnnotation: m2, bColor: p3, bIndicator: l4 } = ge$3(n3), b3 = $t$2(tr$2, n3), g2 = X$1(e4, b3), h2 = X$1(
      t4,
      b3
    ), f4 = 1e5;
    g2 = d4(g2), h2 = d4(h2);
    let S4 = `${a4(`${u4} ${c3}:`)} 
${g2}`, _2 = `${p3(`${l4} ${m2}:`)} 
${h2}`;
    return `${S4}

${_2}`;
  }
  if (!s4)
    switch (r4) {
      case "string":
        return We$2(e4.split(`
`), t4.split(`
`), n3);
      case "boolean":
      case "number":
        return xs$1(e4, t4, n3);
      case "map":
        return _t$2(jn$2(e4), jn$2(t4), n3);
      case "set":
        return _t$2(kn$2(e4), kn$2(t4), n3);
      default:
        return _t$2(e4, t4, n3);
    }
}
i$1(Ls$1, "diff");
function xs$1(e4, t4, n3) {
  let r4 = X$1(e4, Ot$2), o3 = X$1(t4, Ot$2);
  return r4 === o3 ? "" : We$2(r4.split(`
`), o3.split(`
`), n3);
}
i$1(xs$1, "comparePrimitive");
function jn$2(e4) {
  return new Map(Array.from(e4.entries()).sort());
}
i$1(jn$2, "sortMap");
function kn$2(e4) {
  return new Set(Array.from(e4.values()).sort());
}
i$1(kn$2, "sortSet");
function _t$2(e4, t4, n3) {
  let r4, o3 = false;
  try {
    let c3 = $t$2(Ot$2, n3);
    r4 = Bn$1(e4, t4, c3, n3);
  } catch {
    o3 = true;
  }
  let s4 = Ct$2(Kn$1, n3);
  if (r4 === void 0 || r4 === s4) {
    let c3 = $t$2(tr$2, n3);
    r4 = Bn$1(e4, t4, c3, n3), r4 !== s4 && !o3 && (r4 = `${Ct$2(as$1, n3)}

${r4}`);
  }
  return r4;
}
i$1(_t$2, "compareObjects");
function $t$2(e4, t4) {
  let { compareKeys: n3, printBasicPrototype: r4, maxDepth: o3 } = ge$3(t4);
  return {
    ...e4,
    compareKeys: n3,
    printBasicPrototype: r4,
    maxDepth: o3 ?? e4.maxDepth
  };
}
i$1($t$2, "getFormatOptions");
function Bn$1(e4, t4, n3, r4) {
  let o3 = {
    ...n3,
    indent: 0
  }, s4 = X$1(e4, o3), c3 = X$1(t4, o3);
  if (s4 === c3)
    return Ct$2(Kn$1, r4);
  {
    let a4 = X$1(e4, n3), u4 = X$1(t4, n3);
    return _s(a4.split(`
`), u4.split(`
`), s4.split(`
`), c3.split(`
`), r4);
  }
}
i$1(Bn$1, "getObjectsDifference");
var zn = 2e4;
function Yn$1(e4) {
  return Be$3(e4) === "Object" && typeof e4.asymmetricMatch == "function";
}
i$1(Yn$1, "isAsymmetricMatcher");
function Un(e4, t4) {
  let n3 = Be$3(e4), r4 = Be$3(t4);
  return n3 === r4 && (n3 === "Object" || n3 === "Array");
}
i$1(Un, "isReplaceable");
function nr$2(e4, t4, n3) {
  let { aAnnotation: r4, bAnnotation: o3 } = ge$3(n3);
  if (typeof t4 == "string" && typeof e4 == "string" && t4.length > 0 && e4.length > 0 && t4.length <= zn && e4.length <= zn && t4 !== e4) {
    if (t4.includes(`
`) || e4.includes(`
`))
      return ws$1(t4, e4, n3);
    let [p3] = vn$2(t4, e4, true), l4 = p3.some((f4) => f4[0] === M$2), b3 = Ds(r4, o3), g2 = b3(r4) + ks(Wn(p3, z$2, l4)), h2 = b3(o3) + js(Wn(p3, j$2, l4));
    return `${g2}
${h2}`;
  }
  let s4 = St$2(t4, { forceWritable: true }), c3 = St$2(e4, { forceWritable: true }), { replacedExpected: a4, replacedActual: u4 } = rr$2(c3, s4);
  return Ls$1(a4, u4, n3);
}
i$1(nr$2, "printDiffOrStringify");
function rr$2(e4, t4, n3 = /* @__PURE__ */ new WeakSet(), r4 = /* @__PURE__ */ new WeakSet()) {
  return e4 instanceof Error && t4 instanceof Error && typeof e4.cause < "u" && typeof t4.cause > "u" ? (delete e4.cause, {
    replacedActual: e4,
    replacedExpected: t4
  }) : Un(e4, t4) ? n3.has(e4) || r4.has(t4) ? {
    replacedActual: e4,
    replacedExpected: t4
  } : (n3.add(e4), r4.add(t4), bt$2(t4).forEach((o3) => {
    let s4 = t4[o3], c3 = e4[o3];
    if (Yn$1(s4))
      s4.asymmetricMatch(c3) && (e4[o3] = s4);
    else if (Yn$1(c3))
      c3.asymmetricMatch(s4) && (t4[o3] = c3);
    else if (Un(c3, s4)) {
      let a4 = rr$2(c3, s4, n3, r4);
      e4[o3] = a4.replacedActual, t4[o3] = a4.replacedExpected;
    }
  }), {
    replacedActual: e4,
    replacedExpected: t4
  }) : {
    replacedActual: e4,
    replacedExpected: t4
  };
}
i$1(rr$2, "replaceAsymmetricMatcher");
function Ds(...e4) {
  let t4 = e4.reduce((n3, r4) => r4.length > n3 ? r4.length : n3, 0);
  return (n3) => `${n3}: ${" ".repeat(t4 - n3.length)}`;
}
i$1(Ds, "getLabelPrinter");
var Fs = "·";
function or$2(e4) {
  return e4.replace(/\s+$/gm, (t4) => Fs.repeat(t4.length));
}
i$1(or$2, "replaceTrailingSpaces");
function js(e4) {
  return v$1.red(or$2(pe$3(e4)));
}
i$1(js, "printReceived");
function ks(e4) {
  return v$1.green(or$2(pe$3(e4)));
}
i$1(ks, "printExpected");
function Wn(e4, t4, n3) {
  return e4.reduce((r4, o3) => r4 + (o3[0] === M$2 ? o3[1] : o3[0] === t4 ? n3 ? v$1.inverse(o3[1]) : o3[1] : ""), "");
}
i$1(Wn, "getCommonAndChangedSubstrings");
var Bs = "@@__IMMUTABLE_RECORD__@@", zs = "@@__IMMUTABLE_ITERABLE__@@";
function Ys$1(e4) {
  return e4 && (e4[zs] || e4[Bs]);
}
i$1(Ys$1, "isImmutable");
var Us = Object.getPrototypeOf({});
function sr$1(e4) {
  return e4 instanceof Error ? `<unserializable>: ${e4.message}` : typeof e4 == "string" ? `<unserializable>: ${e4}` : "<unserializable>";
}
i$1(sr$1, "getUnserializableMessage");
function le$1(e4, t4 = /* @__PURE__ */ new WeakMap()) {
  if (!e4 || typeof e4 == "string")
    return e4;
  if (e4 instanceof Error && "toJSON" in e4 && typeof e4.toJSON == "function") {
    let n3 = e4.toJSON();
    return n3 && n3 !== e4 && typeof n3 == "object" && (typeof e4.message == "string" && Ve$2(() => n3.message ?? (n3.message = e4.message)), typeof e4.stack == "string" && Ve$2(() => n3.stack ?? (n3.stack = e4.stack)), typeof e4.name == "string" && Ve$2(() => n3.name ?? (n3.name = e4.name)), e4.cause != null && Ve$2(() => n3.cause ?? (n3.cause = le$1(e4.cause, t4)))), le$1(n3, t4);
  }
  if (typeof e4 == "function")
    return `Function<${e4.name || "anonymous"}>`;
  if (typeof e4 == "symbol")
    return e4.toString();
  if (typeof e4 != "object")
    return e4;
  if (typeof Buffer < "u" && e4 instanceof Buffer)
    return `<Buffer(${e4.length}) ...>`;
  if (typeof Uint8Array < "u" && e4 instanceof Uint8Array)
    return `<Uint8Array(${e4.length}) ...>`;
  if (Ys$1(e4))
    return le$1(e4.toJSON(), t4);
  if (e4 instanceof Promise || e4.constructor && e4.constructor.prototype === "AsyncFunction")
    return "Promise";
  if (typeof Element < "u" && e4 instanceof Element)
    return e4.tagName;
  if (typeof e4.asymmetricMatch == "function")
    return `${e4.toString()} ${wn(e4.sample)}`;
  if (typeof e4.toJSON == "function")
    return le$1(e4.toJSON(), t4);
  if (t4.has(e4))
    return t4.get(e4);
  if (Array.isArray(e4)) {
    let n3 = new Array(e4.length);
    return t4.set(e4, n3), e4.forEach((r4, o3) => {
      try {
        n3[o3] = le$1(r4, t4);
      } catch (s4) {
        n3[o3] = sr$1(s4);
      }
    }), n3;
  } else {
    let n3 = /* @__PURE__ */ Object.create(null);
    t4.set(e4, n3);
    let r4 = e4;
    for (; r4 && r4 !== Us; )
      Object.getOwnPropertyNames(r4).forEach((o3) => {
        if (!(o3 in n3))
          try {
            n3[o3] = le$1(e4[o3], t4);
          } catch (s4) {
            delete n3[o3], n3[o3] = sr$1(s4);
          }
      }), r4 = Object.getPrototypeOf(r4);
    return n3;
  }
}
i$1(le$1, "serializeValue");
function Ve$2(e4) {
  try {
    return e4();
  } catch {
  }
}
i$1(Ve$2, "safe");
function Ws$1(e4) {
  return e4.replace(/__(vite_ssr_import|vi_import)_\d+__\./g, "");
}
i$1(Ws$1, "normalizeErrorMessage");
function It$2(e4, t4, n3 = /* @__PURE__ */ new WeakSet()) {
  if (!e4 || typeof e4 != "object")
    return { message: String(e4) };
  let r4 = e4;
  (r4.showDiff || r4.showDiff === void 0 && r4.expected !== void 0 && r4.actual !== void 0) && (r4.diff = nr$2(r4.actual, r4.expected, {
    ...t4,
    ...r4.diffOptions
  })), "expected" in r4 && typeof r4.expected != "string" && (r4.expected = pe$3(r4.expected, 10)), "actual" in r4 && typeof r4.actual != "string" && (r4.actual = pe$3(r4.actual, 10));
  try {
    typeof r4.message == "string" && (r4.message = Ws$1(r4.message));
  } catch {
  }
  try {
    !n3.has(r4) && typeof r4.cause == "object" && (n3.add(r4), r4.cause = It$2(r4.cause, t4, n3));
  } catch {
  }
  try {
    return le$1(r4);
  } catch (o3) {
    return le$1(new Error(`Failed to fully serialize error: ${o3 == null ? void 0 : o3.message}
Inner error message: ${r4 == null ? void 0 : r4.message}`));
  }
}
i$1(It$2, "processError");
var ne$3 = {
  CALL: "storybook/instrumenter/call",
  SYNC: "storybook/instrumenter/sync",
  START: "storybook/instrumenter/start",
  BACK: "storybook/instrumenter/back",
  GOTO: "storybook/instrumenter/goto",
  NEXT: "storybook/instrumenter/next",
  END: "storybook/instrumenter/end"
};
var qe$3 = globalThis.__STORYBOOK_ADDONS_PREVIEW;
var Hs = new Error(
  "This function ran after the play function completed. Did you forget to `await` it?"
), cr$2 = /* @__PURE__ */ i$1((e4) => Object.prototype.toString.call(e4) === "[object Object]", "isObject"), Js = /* @__PURE__ */ i$1((e4) => Object.prototype.toString.call(e4) === "[object Module]", "isModule"), Xs = /* @__PURE__ */ i$1((e4) => {
  if (!cr$2(e4) && !Js(e4))
    return false;
  if (e4.constructor === void 0)
    return true;
  let t4 = e4.constructor.prototype;
  return !!cr$2(t4);
}, "isInstrumentable"), Zs$1 = /* @__PURE__ */ i$1((e4) => {
  try {
    return new e4.constructor();
  } catch {
    return {};
  }
}, "construct"), Mt$2 = /* @__PURE__ */ i$1(() => ({
  renderPhase: "preparing",
  isDebugging: false,
  isPlaying: false,
  isLocked: false,
  cursor: 0,
  calls: [],
  shadowCalls: [],
  callRefsByResult: /* @__PURE__ */ new Map(),
  chainedCallIds: /* @__PURE__ */ new Set(),
  ancestors: [],
  playUntil: void 0,
  resolvers: {},
  syncTimeout: void 0
}), "getInitialState"), ur$1 = /* @__PURE__ */ i$1((e4, t4 = false) => {
  let n3 = (t4 ? e4.shadowCalls : e4.calls).filter((o3) => o3.retain);
  if (!n3.length)
    return;
  let r4 = new Map(
    Array.from(e4.callRefsByResult.entries()).filter(([, o3]) => o3.retain)
  );
  return { cursor: n3.length, calls: n3, callRefsByResult: r4 };
}, "getRetainedState"), xt$1 = class xt {
  constructor() {
    this.detached = false;
    this.initialized = false;
    this.state = {};
    this.loadParentWindowState = /* @__PURE__ */ i$1(() => {
      var _a2, _b2;
      try {
        this.state = ((_b2 = (_a2 = Z$3.window) == null ? void 0 : _a2.parent) == null ? void 0 : _b2.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__) || {};
      } catch {
        this.detached = true;
      }
    }, "loadParentWindowState");
    this.updateParentWindowState = /* @__PURE__ */ i$1(() => {
      try {
        Z$3.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state;
      } catch {
        this.detached = true;
      }
    }, "updateParentWindowState");
    this.loadParentWindowState();
    let t4 = /* @__PURE__ */ i$1(({
      storyId: u4,
      renderPhase: m2,
      isPlaying: p3 = true,
      isDebugging: l4 = false
    }) => {
      let b3 = this.getState(u4);
      this.setState(u4, {
        ...Mt$2(),
        ...ur$1(b3, l4),
        renderPhase: m2 || b3.renderPhase,
        shadowCalls: l4 ? b3.shadowCalls : [],
        chainedCallIds: l4 ? b3.chainedCallIds : /* @__PURE__ */ new Set(),
        playUntil: l4 ? b3.playUntil : void 0,
        isPlaying: p3,
        isDebugging: l4
      }), this.sync(u4);
    }, "resetState"), n3 = /* @__PURE__ */ i$1((u4) => ({ storyId: m2, playUntil: p3 }) => {
      this.getState(m2).isDebugging || this.setState(m2, ({ calls: b3 }) => ({
        calls: [],
        shadowCalls: b3.map((g2) => ({ ...g2, status: "waiting" })),
        isDebugging: true
      }));
      let l4 = this.getLog(m2);
      this.setState(m2, ({ shadowCalls: b3 }) => {
        var _a2;
        if (p3 || !l4.length)
          return { playUntil: p3 };
        let g2 = b3.findIndex((h2) => h2.id === l4[0].callId);
        return {
          playUntil: (_a2 = b3.slice(0, g2).filter((h2) => {
            var _a3;
            return h2.interceptable && !((_a3 = h2.ancestors) == null ? void 0 : _a3.length);
          }).slice(-1)[0]) == null ? void 0 : _a2.id
        };
      }), u4.emit(ir$2, { storyId: m2, isDebugging: true });
    }, "start"), r4 = /* @__PURE__ */ i$1((u4) => ({ storyId: m2 }) => {
      var _a2;
      let p3 = this.getLog(m2).filter((b3) => {
        var _a3;
        return !((_a3 = b3.ancestors) == null ? void 0 : _a3.length);
      }), l4 = p3.reduceRight((b3, g2, h2) => b3 >= 0 || g2.status === "waiting" ? b3 : h2, -1);
      n3(u4)({ storyId: m2, playUntil: (_a2 = p3[l4 - 1]) == null ? void 0 : _a2.callId });
    }, "back"), o3 = /* @__PURE__ */ i$1((u4) => ({ storyId: m2, callId: p3 }) => {
      var _a2;
      let { calls: l4, shadowCalls: b3, resolvers: g2 } = this.getState(m2), h2 = l4.find(({ id: d4 }) => d4 === p3), f4 = b3.find(({ id: d4 }) => d4 === p3);
      if (!h2 && f4 && Object.values(g2).length > 0) {
        let d4 = (_a2 = this.getLog(m2).find((S4) => S4.status === "waiting")) == null ? void 0 : _a2.callId;
        f4.id !== d4 && this.setState(m2, { playUntil: f4.id }), Object.values(g2).forEach((S4) => S4());
      } else
        n3(u4)({ storyId: m2, playUntil: p3 });
    }, "goto"), s4 = /* @__PURE__ */ i$1((u4) => ({ storyId: m2 }) => {
      var _a2;
      let { resolvers: p3 } = this.getState(m2);
      if (Object.values(p3).length > 0)
        Object.values(p3).forEach((l4) => l4());
      else {
        let l4 = (_a2 = this.getLog(m2).find((b3) => b3.status === "waiting")) == null ? void 0 : _a2.callId;
        l4 ? n3(u4)({ storyId: m2, playUntil: l4 }) : c3({ storyId: m2 });
      }
    }, "next"), c3 = /* @__PURE__ */ i$1(({ storyId: u4 }) => {
      this.setState(u4, { playUntil: void 0, isDebugging: false }), Object.values(this.getState(u4).resolvers).forEach((m2) => m2());
    }, "end"), a4 = /* @__PURE__ */ i$1(({
      storyId: u4,
      newPhase: m2
    }) => {
      let { isDebugging: p3 } = this.getState(u4);
      if (m2 === "preparing" && p3)
        return t4({ storyId: u4, renderPhase: m2 });
      if (m2 === "playing")
        return t4({ storyId: u4, renderPhase: m2, isDebugging: p3 });
      m2 === "played" ? this.setState(u4, {
        renderPhase: m2,
        isLocked: false,
        isPlaying: false,
        isDebugging: false
      }) : m2 === "errored" ? this.setState(u4, {
        renderPhase: m2,
        isLocked: false,
        isPlaying: false
      }) : m2 === "aborted" ? this.setState(u4, {
        renderPhase: m2,
        isLocked: true,
        isPlaying: false
      }) : this.setState(u4, {
        renderPhase: m2
      }), this.sync(u4);
    }, "renderPhaseChanged");
    qe$3 && qe$3.ready().then(() => {
      this.channel = qe$3.getChannel(), this.channel.on(ir$2, t4), this.channel.on(Gs, a4), this.channel.on(Ks, () => {
        this.initialized ? this.cleanup() : this.initialized = true;
      }), this.channel.on(ne$3.START, n3(this.channel)), this.channel.on(ne$3.BACK, r4(this.channel)), this.channel.on(ne$3.GOTO, o3(this.channel)), this.channel.on(ne$3.NEXT, s4(this.channel)), this.channel.on(ne$3.END, c3);
    });
  }
  getState(t4) {
    return this.state[t4] || Mt$2();
  }
  setState(t4, n3) {
    if (t4) {
      let r4 = this.getState(t4), o3 = typeof n3 == "function" ? n3(r4) : n3;
      this.state = { ...this.state, [t4]: { ...r4, ...o3 } }, this.updateParentWindowState();
    }
  }
  cleanup() {
    var _a2;
    this.state = Object.entries(this.state).reduce(
      (r4, [o3, s4]) => {
        let c3 = ur$1(s4);
        return c3 && (r4[o3] = Object.assign(Mt$2(), c3)), r4;
      },
      {}
    );
    let n3 = { controlStates: {
      detached: this.detached,
      start: false,
      back: false,
      goto: false,
      next: false,
      end: false
    }, logItems: [] };
    (_a2 = this.channel) == null ? void 0 : _a2.emit(ne$3.SYNC, n3), this.updateParentWindowState();
  }
  getLog(t4) {
    let { calls: n3, shadowCalls: r4 } = this.getState(t4), o3 = [...r4];
    n3.forEach((c3, a4) => {
      o3[a4] = c3;
    });
    let s4 = /* @__PURE__ */ new Set();
    return o3.reduceRight((c3, a4) => (a4.args.forEach((u4) => {
      (u4 == null ? void 0 : u4.__callId__) && s4.add(u4.__callId__);
    }), a4.path.forEach((u4) => {
      u4.__callId__ && s4.add(u4.__callId__);
    }), (a4.interceptable || a4.exception) && !s4.has(a4.id) && (c3.unshift({ callId: a4.id, status: a4.status, ancestors: a4.ancestors }), s4.add(a4.id)), c3), []);
  }
  // Traverses the object structure to recursively patch all function properties.
  // Returns the original object, or a new object with the same constructor,
  // depending on whether it should mutate.
  instrument(t4, n3, r4 = 0) {
    if (!Xs(t4))
      return t4;
    let { mutate: o3 = false, path: s4 = [] } = n3, c3 = n3.getKeys ? n3.getKeys(t4, r4) : Object.keys(t4);
    return r4 += 1, c3.reduce(
      (a4, u4) => {
        let m2 = vs$1(t4, u4);
        if (typeof (m2 == null ? void 0 : m2.get) == "function") {
          if (m2.configurable) {
            let l4 = /* @__PURE__ */ i$1(() => {
              var _a2, _b2;
              return (_b2 = (_a2 = m2 == null ? void 0 : m2.get) == null ? void 0 : _a2.bind(t4)) == null ? void 0 : _b2();
            }, "getter");
            Object.defineProperty(a4, u4, {
              get: /* @__PURE__ */ i$1(() => this.instrument(l4(), { ...n3, path: s4.concat(u4) }, r4), "get")
            });
          }
          return a4;
        }
        let p3 = t4[u4];
        return typeof p3 != "function" ? (a4[u4] = this.instrument(p3, { ...n3, path: s4.concat(u4) }, r4), a4) : "__originalFn__" in p3 && typeof p3.__originalFn__ == "function" ? (a4[u4] = p3, a4) : (a4[u4] = (...l4) => this.track(u4, p3, t4, l4, n3), a4[u4].__originalFn__ = p3, Object.defineProperty(
          a4[u4],
          "name",
          { value: u4, writable: false }
        ), Object.keys(p3).length > 0 && Object.assign(
          a4[u4],
          this.instrument({ ...p3 }, { ...n3, path: s4.concat(u4) }, r4)
        ), a4);
      },
      o3 ? t4 : Zs$1(t4)
    );
  }
  // Monkey patch an object method to record calls.
  // Returns a function that invokes the original function, records the invocation ("call") and
  // returns the original result.
  track(t4, n3, r4, o3, s4) {
    var _a2, _b2, _c3, _d3;
    let c3 = ((_a2 = o3 == null ? void 0 : o3[0]) == null ? void 0 : _a2.__storyId__) || ((_d3 = (_c3 = (_b2 = Z$3.__STORYBOOK_PREVIEW__) == null ? void 0 : _b2.selectionStore) == null ? void 0 : _c3.selection) == null ? void 0 : _d3.storyId), { cursor: a4, ancestors: u4 } = this.getState(
      c3
    );
    this.setState(c3, { cursor: a4 + 1 });
    let m2 = `${u4.slice(-1)[0] || c3} [${a4}] ${t4}`, { path: p3 = [], intercept: l4 = false, retain: b3 = false } = s4, g2 = typeof l4 == "function" ? l4(
      t4,
      p3
    ) : l4, h2 = { id: m2, cursor: a4, storyId: c3, ancestors: u4, path: p3, method: t4, args: o3, interceptable: g2, retain: b3 }, d4 = (g2 && !u4.length ? this.intercept : this.invoke).call(this, n3, r4, h2, s4);
    return this.instrument(d4, { ...s4, mutate: true, path: [{ __callId__: h2.id }] });
  }
  intercept(t4, n3, r4, o3) {
    let { chainedCallIds: s4, isDebugging: c3, playUntil: a4 } = this.getState(r4.storyId), u4 = s4.has(r4.id);
    return !c3 || u4 || a4 ? (a4 === r4.id && this.setState(r4.storyId, { playUntil: void 0 }), this.invoke(t4, n3, r4, o3)) : new Promise((m2) => {
      this.setState(r4.storyId, ({ resolvers: p3 }) => ({
        isLocked: false,
        resolvers: { ...p3, [r4.id]: m2 }
      }));
    }).then(() => (this.setState(r4.storyId, (m2) => {
      let { [r4.id]: p3, ...l4 } = m2.resolvers;
      return { isLocked: true, resolvers: l4 };
    }), this.invoke(t4, n3, r4, o3)));
  }
  invoke(t4, n3, r4, o3) {
    let { callRefsByResult: s4, renderPhase: c3 } = this.getState(r4.storyId), a4 = 25, u4 = /* @__PURE__ */ i$1((l4, b3, g2) => {
      var _a2, _b2, _c3;
      if (g2.includes(l4))
        return "[Circular]";
      if (g2 = [...g2, l4], b3 > a4)
        return "...";
      if (s4.has(l4))
        return s4.get(l4);
      if (l4 instanceof Array)
        return l4.map((h2) => u4(h2, ++b3, g2));
      if (l4 instanceof Date)
        return { __date__: { value: l4.toISOString() } };
      if (l4 instanceof Error) {
        let { name: h2, message: f4, stack: d4 } = l4;
        return { __error__: { name: h2, message: f4, stack: d4 } };
      }
      if (l4 instanceof RegExp) {
        let { flags: h2, source: f4 } = l4;
        return { __regexp__: { flags: h2, source: f4 } };
      }
      if (l4 instanceof ((_a2 = Z$3.window) == null ? void 0 : _a2.HTMLElement)) {
        let { prefix: h2, localName: f4, id: d4, classList: S4, innerText: _2 } = l4, O2 = Array.from(S4);
        return { __element__: { prefix: h2, localName: f4, id: d4, classNames: O2, innerText: _2 } };
      }
      return typeof l4 == "function" ? {
        __function__: { name: "getMockName" in l4 ? l4.getMockName() : l4.name }
      } : typeof l4 == "symbol" ? { __symbol__: { description: l4.description } } : typeof l4 == "object" && ((_b2 = l4 == null ? void 0 : l4.constructor) == null ? void 0 : _b2.name) && ((_c3 = l4 == null ? void 0 : l4.constructor) == null ? void 0 : _c3.name) !== "Object" ? { __class__: { name: l4.constructor.name } } : Object.prototype.toString.call(l4) === "[object Object]" ? Object.fromEntries(
        Object.entries(l4).map(([h2, f4]) => [h2, u4(f4, ++b3, g2)])
      ) : l4;
    }, "serializeValues"), m2 = {
      ...r4,
      args: r4.args.map((l4) => u4(l4, 0, []))
    };
    r4.path.forEach((l4) => {
      (l4 == null ? void 0 : l4.__callId__) && this.setState(r4.storyId, ({ chainedCallIds: b3 }) => ({
        chainedCallIds: new Set(Array.from(b3).concat(l4.__callId__))
      }));
    });
    let p3 = /* @__PURE__ */ i$1((l4) => {
      var _a2;
      if (l4 instanceof Error) {
        let { name: b3, message: g2, stack: h2, callId: f4 = r4.id } = l4, {
          showDiff: d4 = void 0,
          diff: S4 = void 0,
          actual: _2 = void 0,
          expected: O2 = void 0
        } = l4.name === "AssertionError" ? It$2(l4) : l4, y3 = { name: b3, message: g2, stack: h2, callId: f4, showDiff: d4, diff: S4, actual: _2, expected: O2 };
        if (this.update({ ...m2, status: "error", exception: y3 }), this.setState(r4.storyId, (E4) => ({
          callRefsByResult: new Map([
            ...Array.from(E4.callRefsByResult.entries()),
            [l4, { __callId__: r4.id, retain: r4.retain }]
          ])
        })), (_a2 = r4.ancestors) == null ? void 0 : _a2.length)
          throw Object.prototype.hasOwnProperty.call(l4, "callId") || Object.defineProperty(l4, "callId", { value: r4.id }), l4;
      }
      throw l4;
    }, "handleException");
    try {
      if (c3 === "played" && !r4.retain)
        throw Hs;
      let b3 = (o3.getArgs ? o3.getArgs(r4, this.getState(r4.storyId)) : r4.args).map((h2) => typeof h2 != "function" || ei$1(h2) || Object.keys(h2).length ? h2 : (...f4) => {
        let { cursor: d4, ancestors: S4 } = this.getState(r4.storyId);
        this.setState(r4.storyId, { cursor: 0, ancestors: [...S4, r4.id] });
        let _2 = /* @__PURE__ */ i$1(() => this.setState(r4.storyId, { cursor: d4, ancestors: S4 }), "restore"), O2 = false;
        try {
          let y3 = h2(...f4);
          return y3 instanceof Promise ? (O2 = true, y3.finally(_2)) : y3;
        } finally {
          O2 || _2();
        }
      }), g2 = t4.apply(n3, b3);
      return g2 && ["object", "function", "symbol"].includes(typeof g2) && this.setState(r4.storyId, (h2) => ({
        callRefsByResult: new Map([
          ...Array.from(h2.callRefsByResult.entries()),
          [g2, { __callId__: r4.id, retain: r4.retain }]
        ])
      })), this.update({
        ...m2,
        status: g2 instanceof Promise ? "active" : "done"
      }), g2 instanceof Promise ? g2.then((h2) => (this.update({ ...m2, status: "done" }), h2), p3) : g2;
    } catch (l4) {
      return p3(l4);
    }
  }
  // Sends the call info to the manager and synchronizes the log.
  update(t4) {
    var _a2;
    (_a2 = this.channel) == null ? void 0 : _a2.emit(ne$3.CALL, t4), this.setState(t4.storyId, ({ calls: n3 }) => {
      let r4 = n3.concat(t4).reduce((o3, s4) => Object.assign(o3, { [s4.id]: s4 }), {});
      return {
        // Calls are sorted to ensure parent calls always come before calls in their callback.
        calls: Object.values(r4).sort(
          (o3, s4) => o3.id.localeCompare(s4.id, void 0, { numeric: true })
        )
      };
    }), this.sync(t4.storyId);
  }
  // Builds a log of interceptable calls and control states and sends it to the manager.
  // Uses a 0ms debounce because this might get called many times in one tick.
  sync(t4) {
    let n3 = /* @__PURE__ */ i$1(() => {
      var _a2, _b2, _c3;
      let { isLocked: r4, isPlaying: o3 } = this.getState(t4), s4 = this.getLog(t4), c3 = (_a2 = s4.filter(({ ancestors: l4 }) => !l4.length).find((l4) => l4.status === "waiting")) == null ? void 0 : _a2.callId, a4 = s4.some((l4) => l4.status === "active");
      if (this.detached || r4 || a4 || s4.length === 0) {
        let b3 = { controlStates: {
          detached: this.detached,
          start: false,
          back: false,
          goto: false,
          next: false,
          end: false
        }, logItems: s4 };
        (_b2 = this.channel) == null ? void 0 : _b2.emit(ne$3.SYNC, b3);
        return;
      }
      let u4 = s4.some(
        (l4) => l4.status === "done" || l4.status === "error"
      ), p3 = { controlStates: {
        detached: this.detached,
        start: u4,
        back: u4,
        goto: true,
        next: o3,
        end: o3
      }, logItems: s4, pausedAt: c3 };
      (_c3 = this.channel) == null ? void 0 : _c3.emit(ne$3.SYNC, p3);
    }, "synchronize");
    this.setState(t4, ({ syncTimeout: r4 }) => (clearTimeout(r4), { syncTimeout: setTimeout(n3, 0) }));
  }
};
i$1(xt$1, "Instrumenter");
var Lt$1 = xt$1;
function Qs(e4, t4 = {}) {
  var _a2, _b2, _c3, _d3, _e2, _f2, _g2, _h2;
  try {
    let n3 = false, r4 = false;
    return ((_c3 = (_b2 = (_a2 = Z$3.window) == null ? void 0 : _a2.location) == null ? void 0 : _b2.search) == null ? void 0 : _c3.includes("instrument=true")) ? n3 = true : ((_f2 = (_e2 = (_d3 = Z$3.window) == null ? void 0 : _d3.location) == null ? void 0 : _e2.search) == null ? void 0 : _f2.includes("instrument=false")) && (r4 = true), ((_g2 = Z$3.window) == null ? void 0 : _g2.parent) === Z$3.window && !n3 || r4 ? e4 : (Z$3.window && !Z$3.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ && (Z$3.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ = new Lt$1()), ((_h2 = Z$3.window) == null ? void 0 : _h2.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__).instrument(e4, t4));
  } catch (n3) {
    return qs.warn(n3), e4;
  }
}
i$1(Qs, "instrument");
function vs$1(e4, t4) {
  let n3 = e4;
  for (; n3 != null; ) {
    let r4 = Object.getOwnPropertyDescriptor(n3, t4);
    if (r4)
      return r4;
    n3 = Object.getPrototypeOf(n3);
  }
}
i$1(vs$1, "getPropertyDescriptor");
function ei$1(e4) {
  if (typeof e4 != "function")
    return false;
  let t4 = Object.getOwnPropertyDescriptor(e4, "prototype");
  return t4 ? !t4.writable : false;
}
i$1(ei$1, "isClass");
var Br = Object.create;
var ce$1 = Object.defineProperty;
var zr$1 = Object.getOwnPropertyDescriptor;
var Ur$1 = Object.getOwnPropertyNames;
var Gr = Object.getPrototypeOf, Wr$1 = Object.prototype.hasOwnProperty;
var n$1 = (e4, t4) => ce$1(e4, "name", { value: t4, configurable: true });
var Yr = (e4, t4) => () => (t4 || e4((t4 = { exports: {} }).exports, t4), t4.exports), xt2 = (e4, t4) => {
  for (var r4 in t4)
    ce$1(e4, r4, { get: t4[r4], enumerable: true });
}, Vr$1 = (e4, t4, r4, o3) => {
  if (t4 && typeof t4 == "object" || typeof t4 == "function")
    for (let i4 of Ur$1(t4))
      !Wr$1.call(e4, i4) && i4 !== r4 && ce$1(e4, i4, { get: () => t4[i4], enumerable: !(o3 = zr$1(t4, i4)) || o3.enumerable });
  return e4;
};
var Kr = (e4, t4, r4) => (r4 = e4 != null ? Br(Gr(e4)) : {}, Vr$1(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  ce$1(r4, "default", { value: e4, enumerable: true }),
  e4
));
var Tt$1 = Yr((Ee2) => {
  Object.defineProperty(Ee2, "__esModule", { value: true }), Ee2.isEqual = /* @__PURE__ */ function() {
    var e4 = Object.prototype.toString, t4 = Object.getPrototypeOf, r4 = Object.getOwnPropertySymbols ? function(o3) {
      return Object.keys(o3).concat(Object.getOwnPropertySymbols(o3));
    } : Object.keys;
    return function(o3, i4) {
      return (/* @__PURE__ */ n$1(function s4(a4, p3, c3) {
        var l4, y3, u4, h2 = e4.call(a4), T4 = e4.call(p3);
        if (a4 === p3) return true;
        if (a4 == null || p3 == null) return false;
        if (c3.indexOf(a4) > -1 && c3.indexOf(p3) > -1) return true;
        if (c3.push(a4, p3), h2 != T4 || (l4 = r4(a4), y3 = r4(p3), l4.length != y3.length || l4.some(function(R4) {
          return !s4(a4[R4], p3[R4], c3);
        }))) return false;
        switch (h2.slice(8, -1)) {
          case "Symbol":
            return a4.valueOf() == p3.valueOf();
          case "Date":
          case "Number":
            return +a4 == +p3 || +a4 != +a4 && +p3 != +p3;
          case "RegExp":
          case "Function":
          case "String":
          case "Boolean":
            return "" + a4 == "" + p3;
          case "Set":
          case "Map":
            l4 = a4.entries(), y3 = p3.entries();
            do
              if (!s4((u4 = l4.next()).value, y3.next().value, c3)) return false;
            while (!u4.done);
            return true;
          case "ArrayBuffer":
            a4 = new Uint8Array(a4), p3 = new Uint8Array(p3);
          case "DataView":
            a4 = new Uint8Array(a4.buffer), p3 = new Uint8Array(p3.buffer);
          case "Float32Array":
          case "Float64Array":
          case "Int8Array":
          case "Int16Array":
          case "Int32Array":
          case "Uint8Array":
          case "Uint16Array":
          case "Uint32Array":
          case "Uint8ClampedArray":
          case "Arguments":
          case "Array":
            if (a4.length != p3.length) return false;
            for (u4 = 0; u4 < a4.length; u4++) if ((u4 in a4 || u4 in p3) && (u4 in a4 != u4 in p3 || !s4(a4[u4], p3[u4], c3))) return false;
            return true;
          case "Object":
            return s4(t4(a4), t4(p3), c3);
          default:
            return false;
        }
      }, "n"))(o3, i4, []);
    };
  }();
});
function bt$1(e4) {
  return e4.replace(/_/g, " ").replace(/-/g, " ").replace(/\./g, " ").replace(/([^\n])([A-Z])([a-z])/g, (t4, r4, o3, i4) => `${r4} ${o3}${i4}`).replace(
    /([a-z])([A-Z])/g,
    (t4, r4, o3) => `${r4} ${o3}`
  ).replace(/([a-z])([0-9])/gi, (t4, r4, o3) => `${r4} ${o3}`).replace(/([0-9])([a-z])/gi, (t4, r4, o3) => `${r4} ${o3}`).replace(/(\s|^)(\w)/g, (t4, r4, o3) => `${r4}${o3.toUpperCase()}`).replace(/ +/g, " ").trim();
}
n$1(bt$1, "toStartCaseStr");
var Ce$1 = Kr(Tt$1());
var St$1 = /* @__PURE__ */ n$1((e4) => e4.map((t4) => typeof t4 < "u").filter(Boolean).length, "count"), qr = /* @__PURE__ */ n$1((e4, t4) => {
  let { exists: r4, eq: o3, neq: i4, truthy: s4 } = e4;
  if (St$1([r4, o3, i4, s4]) > 1)
    throw new Error(`Invalid conditional test ${JSON.stringify({ exists: r4, eq: o3, neq: i4 })}`);
  if (typeof o3 < "u")
    return (0, Ce$1.isEqual)(t4, o3);
  if (typeof i4 < "u")
    return !(0, Ce$1.isEqual)(t4, i4);
  if (typeof r4 < "u") {
    let p3 = typeof t4 < "u";
    return r4 ? p3 : !p3;
  }
  return (typeof s4 > "u" ? true : s4) ? !!t4 : !t4;
}, "testValue"), Xr = /* @__PURE__ */ n$1((e4, t4, r4) => {
  if (!e4.if)
    return true;
  let { arg: o3, global: i4 } = e4.if;
  if (St$1([o3, i4]) !== 1)
    throw new Error(`Invalid conditional value ${JSON.stringify({ arg: o3, global: i4 })}`);
  let s4 = o3 ? t4[o3] : r4[i4];
  return qr(e4.if, s4);
}, "includeConditionalArg");
const { global: ve$1 } = __STORYBOOK_MODULE_GLOBAL__;
const { Channel: Zr } = __STORYBOOK_MODULE_CHANNELS__;
function At$1() {
  let e4 = {
    setHandler: /* @__PURE__ */ n$1(() => {
    }, "setHandler"),
    send: /* @__PURE__ */ n$1(() => {
    }, "send")
  };
  return new Zr({ transport: e4 });
}
n$1(At$1, "mockChannel");
var Me$1 = class Me {
  constructor() {
    this.getChannel = /* @__PURE__ */ n$1(() => {
      if (!this.channel) {
        let t4 = At$1();
        return this.setChannel(t4), t4;
      }
      return this.channel;
    }, "getChannel");
    this.ready = /* @__PURE__ */ n$1(() => this.promise, "ready");
    this.hasChannel = /* @__PURE__ */ n$1(() => !!this.channel, "hasChannel");
    this.setChannel = /* @__PURE__ */ n$1((t4) => {
      this.channel = t4, this.resolve();
    }, "setChannel");
    this.promise = new Promise((t4) => {
      this.resolve = () => t4(this.getChannel());
    });
  }
};
n$1(Me$1, "AddonStore");
var Pe$1 = Me$1, ke$2 = "__STORYBOOK_ADDONS_PREVIEW";
function Jr$1() {
  return ve$1[ke$2] || (ve$1[ke$2] = new Pe$1()), ve$1[ke$2];
}
n$1(Jr$1, "getAddonsStore");
var Oe$2 = Jr$1();
const { logger: ri$1 } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
const {
  FORCE_RE_RENDER: ni$1,
  RESET_STORY_ARGS: ii$1,
  STORY_RENDERED: Rt$1,
  UPDATE_GLOBALS: si$1,
  UPDATE_STORY_ARGS: ai$1
} = __STORYBOOK_MODULE_CORE_EVENTS__;
const { global: $e$2 } = __STORYBOOK_MODULE_GLOBAL__;
var Ie$1 = class Ie {
  constructor() {
    this.hookListsMap = void 0;
    this.mountedDecorators = void 0;
    this.prevMountedDecorators = void 0;
    this.currentHooks = void 0;
    this.nextHookIndex = void 0;
    this.currentPhase = void 0;
    this.currentEffects = void 0;
    this.prevEffects = void 0;
    this.currentDecoratorName = void 0;
    this.hasUpdates = void 0;
    this.currentContext = void 0;
    this.renderListener = /* @__PURE__ */ n$1((t4) => {
      var _a2;
      t4 === ((_a2 = this.currentContext) == null ? void 0 : _a2.id) && (this.triggerEffects(), this.currentContext = null, this.removeRenderListeners());
    }, "renderListener");
    this.init();
  }
  init() {
    this.hookListsMap = /* @__PURE__ */ new WeakMap(), this.mountedDecorators = /* @__PURE__ */ new Set(), this.prevMountedDecorators = /* @__PURE__ */ new Set(), this.currentHooks = [], this.nextHookIndex = 0, this.currentPhase = "NONE", this.currentEffects = [], this.prevEffects = [], this.currentDecoratorName = null, this.hasUpdates = false, this.currentContext = null;
  }
  clean() {
    this.prevEffects.forEach((t4) => {
      t4.destroy && t4.destroy();
    }), this.init(), this.removeRenderListeners();
  }
  getNextHook() {
    let t4 = this.currentHooks[this.nextHookIndex];
    return this.nextHookIndex += 1, t4;
  }
  triggerEffects() {
    this.prevEffects.forEach((t4) => {
      !this.currentEffects.includes(t4) && t4.destroy && t4.destroy();
    }), this.currentEffects.forEach((t4) => {
      this.prevEffects.includes(t4) || (t4.destroy = t4.create());
    }), this.prevEffects = this.currentEffects, this.currentEffects = [];
  }
  addRenderListeners() {
    this.removeRenderListeners(), Oe$2.getChannel().on(Rt$1, this.renderListener);
  }
  removeRenderListeners() {
    Oe$2.getChannel().removeListener(Rt$1, this.renderListener);
  }
};
n$1(Ie$1, "HooksContext");
var de$1 = Ie$1;
function wt$1(e4) {
  let t4 = /* @__PURE__ */ n$1((...r4) => {
    let { hooks: o3 } = typeof r4[0] == "function" ? r4[1] : r4[0], i4 = o3.currentPhase, s4 = o3.currentHooks, a4 = o3.nextHookIndex, p3 = o3.currentDecoratorName;
    o3.currentDecoratorName = e4.name, o3.prevMountedDecorators.has(e4) ? (o3.currentPhase = "UPDATE", o3.currentHooks = o3.hookListsMap.get(e4) || []) : (o3.currentPhase = "MOUNT", o3.currentHooks = [], o3.hookListsMap.set(e4, o3.currentHooks), o3.prevMountedDecorators.add(e4)), o3.nextHookIndex = 0;
    let c3 = $e$2.STORYBOOK_HOOKS_CONTEXT;
    $e$2.STORYBOOK_HOOKS_CONTEXT = o3;
    let l4 = e4(...r4);
    if ($e$2.STORYBOOK_HOOKS_CONTEXT = c3, o3.currentPhase === "UPDATE" && o3.getNextHook() != null)
      throw new Error(
        "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
      );
    return o3.currentPhase = i4, o3.currentHooks = s4, o3.nextHookIndex = a4, o3.currentDecoratorName = p3, l4;
  }, "hookified");
  return t4.originalFn = e4, t4;
}
n$1(wt$1, "hookify");
var Fe$1 = 0, Qr$1 = 25, Et = /* @__PURE__ */ n$1((e4) => (t4, r4) => {
  let o3 = e4(
    wt$1(t4),
    r4.map((i4) => wt$1(i4))
  );
  return (i4) => {
    let { hooks: s4 } = i4;
    s4.prevMountedDecorators ?? (s4.prevMountedDecorators = /* @__PURE__ */ new Set()), s4.mountedDecorators = /* @__PURE__ */ new Set([t4, ...r4]), s4.currentContext = i4, s4.hasUpdates = false;
    let a4 = o3(i4);
    for (Fe$1 = 1; s4.hasUpdates; )
      if (s4.hasUpdates = false, s4.currentEffects = [], a4 = o3(i4), Fe$1 += 1, Fe$1 > Qr$1)
        throw new Error(
          "Too many re-renders. Storybook limits the number of renders to prevent an infinite loop."
        );
    return s4.addRenderListeners(), a4;
  };
}, "applyHooks");
function ee$1(e4) {
  if (!e4 || typeof e4 != "object")
    return false;
  let t4 = Object.getPrototypeOf(e4);
  return t4 === null || t4 === Object.prototype || Object.getPrototypeOf(t4) === null ? Object.prototype.toString.call(e4) === "[object Object]" : false;
}
n$1(ee$1, "isPlainObject");
function U$1(e4, t4) {
  let r4 = {}, o3 = Object.keys(e4);
  for (let i4 = 0; i4 < o3.length; i4++) {
    let s4 = o3[i4], a4 = e4[s4];
    r4[s4] = t4(a4, s4, e4);
  }
  return r4;
}
n$1(U$1, "mapValues");
function Le$2(e4, t4) {
  let r4 = {}, o3 = Object.keys(e4);
  for (let i4 = 0; i4 < o3.length; i4++) {
    let s4 = o3[i4], a4 = e4[s4];
    t4(a4, s4) && (r4[s4] = a4);
  }
  return r4;
}
n$1(Le$2, "pickBy");
const { once: Ei$1 } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
function W$2(e4) {
  for (var t4 = [], r4 = 1; r4 < arguments.length; r4++)
    t4[r4 - 1] = arguments[r4];
  var o3 = Array.from(typeof e4 == "string" ? [e4] : e4);
  o3[o3.length - 1] = o3[o3.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var i4 = o3.reduce(function(p3, c3) {
    var l4 = c3.match(/\n([\t ]+|(?!\s).)/g);
    return l4 ? p3.concat(l4.map(function(y3) {
      var u4, h2;
      return (h2 = (u4 = y3.match(/[\t ]/g)) === null || u4 === void 0 ? void 0 : u4.length) !== null && h2 !== void 0 ? h2 : 0;
    })) : p3;
  }, []);
  if (i4.length) {
    var s4 = new RegExp(`
[	 ]{` + Math.min.apply(Math, i4) + "}", "g");
    o3 = o3.map(function(p3) {
      return p3.replace(s4, `
`);
    });
  }
  o3[0] = o3[0].replace(/^\r?\n/, "");
  var a4 = o3[0];
  return t4.forEach(function(p3, c3) {
    var l4 = a4.match(/(?:^|\n)( *)$/), y3 = l4 ? l4[1] : "", u4 = p3;
    typeof p3 == "string" && p3.includes(`
`) && (u4 = String(p3).split(`
`).map(function(h2, T4) {
      return T4 === 0 ? h2 : "" + y3 + h2;
    }).join(`
`)), a4 += u4 + o3[c3 + 1];
  }), a4;
}
n$1(W$2, "dedent");
var De$2 = "UNTARGETED";
function Ct$1({
  args: e4,
  argTypes: t4
}) {
  let r4 = {};
  return Object.entries(e4).forEach(([o3, i4]) => {
    let { target: s4 = De$2 } = t4[o3] || {};
    r4[s4] = r4[s4] || {}, r4[s4][o3] = i4;
  }), r4;
}
n$1(Ct$1, "groupArgsByTarget");
var vt$1 = /* @__PURE__ */ n$1((e4 = {}) => Object.entries(e4).reduce((t4, [r4, { defaultValue: o3 }]) => (typeof o3 < "u" && (t4[r4] = o3), t4), {}), "getValuesFromArgTypes");
var eo$1 = /* @__PURE__ */ n$1((e4) => typeof e4 == "string" ? { name: e4 } : e4, "normalizeType"), to$1 = /* @__PURE__ */ n$1((e4) => typeof e4 == "string" ? { type: e4 } : e4, "normalizeControl"), ro$1 = /* @__PURE__ */ n$1((e4, t4) => {
  let { type: r4, control: o3, ...i4 } = e4, s4 = {
    name: t4,
    ...i4
  };
  return r4 && (s4.type = eo$1(r4)), o3 ? s4.control = to$1(o3) : o3 === false && (s4.control = { disable: true }), s4;
}, "normalizeInputType"), K$1 = /* @__PURE__ */ n$1((e4) => U$1(e4, ro$1), "normalizeInputTypes");
const { deprecate: oo$1, logger: no } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var b$1 = /* @__PURE__ */ n$1((e4) => Array.isArray(e4) ? e4 : e4 ? [e4] : [], "normalizeArrays");
var ao$1 = W$2`
CSF .story annotations deprecated; annotate story functions directly:
- StoryFn.story.name => StoryFn.storyName
- StoryFn.story.(parameters|decorators) => StoryFn.(parameters|decorators)
See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations for details and codemod.
`;
function _e$1(e4, t4, r4) {
  let o3 = t4, i4 = typeof t4 == "function" ? t4 : null, { story: s4 } = o3;
  s4 && (no.debug("deprecated story", s4), oo$1(ao$1));
  let a4 = cc$1(e4), p3 = typeof o3 != "function" && o3.name || o3.storyName || (s4 == null ? void 0 : s4.name) || a4, c3 = [
    ...b$1(o3.decorators),
    ...b$1(s4 == null ? void 0 : s4.decorators)
  ], l4 = { ...s4 == null ? void 0 : s4.parameters, ...o3.parameters }, y3 = { ...s4 == null ? void 0 : s4.args, ...o3.args }, u4 = { ...s4 == null ? void 0 : s4.argTypes, ...o3.argTypes }, h2 = [...b$1(o3.loaders), ...b$1(
    s4 == null ? void 0 : s4.loaders
  )], T4 = [
    ...b$1(o3.beforeEach),
    ...b$1(s4 == null ? void 0 : s4.beforeEach)
  ], R4 = [
    ...b$1(o3.afterEach),
    ...b$1(s4 == null ? void 0 : s4.afterEach)
  ], { render: P2, play: L4, tags: O2 = [], globals: F2 = {} } = o3, A4 = l4.__id || lc$1(r4.id, a4);
  return {
    moduleExport: t4,
    id: A4,
    name: p3,
    tags: O2,
    decorators: c3,
    parameters: l4,
    args: y3,
    argTypes: K$1(u4),
    loaders: h2,
    beforeEach: T4,
    afterEach: R4,
    globals: F2,
    ...P2 && { render: P2 },
    ...i4 && { userStoryFn: i4 },
    ...L4 && { play: L4 }
  };
}
n$1(_e$1, "normalizeStory");
function kt(e4, t4 = e4.title, r4) {
  let { id: o3, argTypes: i4 } = e4;
  return {
    id: jn$1(o3 || t4),
    ...e4,
    title: t4,
    ...i4 && { argTypes: K$1(i4) },
    parameters: {
      fileName: r4,
      ...e4.parameters
    }
  };
}
n$1(kt, "normalizeComponentAnnotations");
const { NoRenderFunctionError: uo } = __STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;
const { global: fo$1 } = __STORYBOOK_MODULE_GLOBAL__;
const { global: yo$1 } = __STORYBOOK_MODULE_GLOBAL__;
function Ot$1(e4) {
  return e4 != null && lo$1(e4).includes("mount");
}
n$1(Ot$1, "mountDestructured");
function lo$1(e4) {
  let t4 = e4.toString().match(/[^(]*\(([^)]*)/);
  if (!t4)
    return [];
  let r4 = Pt$1(t4[1]);
  if (!r4.length)
    return [];
  let o3 = r4[0];
  return o3.startsWith("{") && o3.endsWith("}") ? Pt$1(o3.slice(1, -1).replace(/\s/g, "")).map((s4) => s4.replace(/:.*|=.*/g, "")) : [];
}
n$1(lo$1, "getUsedProps");
function Pt$1(e4) {
  let t4 = [], r4 = [], o3 = 0;
  for (let s4 = 0; s4 < e4.length; s4++)
    if (e4[s4] === "{" || e4[s4] === "[")
      r4.push(e4[s4] === "{" ? "}" : "]");
    else if (e4[s4] === r4[r4.length - 1])
      r4.pop();
    else if (!r4.length && e4[s4] === ",") {
      let a4 = e4.substring(o3, s4).trim();
      a4 && t4.push(a4), o3 = s4 + 1;
    }
  let i4 = e4.substring(o3).trim();
  return i4 && t4.push(i4), t4;
}
n$1(Pt$1, "splitByComma");
function Mt$1(e4, t4, r4) {
  let o3 = r4(e4);
  return (i4) => t4(o3, i4);
}
n$1(Mt$1, "decorateStory");
function $t$1({
  componentId: e4,
  title: t4,
  kind: r4,
  id: o3,
  name: i4,
  story: s4,
  parameters: a4,
  initialArgs: p3,
  argTypes: c3,
  ...l4
} = {}) {
  return l4;
}
n$1($t$1, "sanitizeStoryContextUpdate");
function He$2(e4, t4) {
  let r4 = {}, o3 = /* @__PURE__ */ n$1((s4) => (a4) => {
    if (!r4.value)
      throw new Error("Decorated function called without init");
    return r4.value = {
      ...r4.value,
      ...$t$1(a4)
    }, s4(r4.value);
  }, "bindWithContext"), i4 = t4.reduce(
    (s4, a4) => Mt$1(s4, a4, o3),
    e4
  );
  return (s4) => (r4.value = s4, i4(s4));
}
n$1(He$2, "defaultDecorateStory");
var D$1 = /* @__PURE__ */ n$1((...e4) => {
  let t4 = {}, r4 = e4.filter(Boolean), o3 = r4.reduce((i4, s4) => (Object.entries(s4).forEach(([a4, p3]) => {
    let c3 = i4[a4];
    Array.isArray(p3) || typeof c3 > "u" ? i4[a4] = p3 : ee$1(p3) && ee$1(c3) ? t4[a4] = true : typeof p3 < "u" && (i4[a4] = p3);
  }), i4), {});
  return Object.keys(t4).forEach((i4) => {
    let s4 = r4.filter(Boolean).map((a4) => a4[i4]).filter((a4) => typeof a4 < "u");
    s4.every((a4) => ee$1(a4)) ? o3[i4] = D$1(...s4) : o3[i4] = s4[s4.length - 1];
  }), o3;
}, "combineParameters");
function Ne$2(e4, t4, r4) {
  let { moduleExport: o3, id: i4, name: s4 } = e4 || {}, a4 = go$1(
    e4,
    t4,
    r4
  ), p3 = /* @__PURE__ */ n$1(async (w2) => {
    let d4 = {};
    for (let m2 of [
      b$1(r4.loaders),
      b$1(t4.loaders),
      b$1(e4.loaders)
    ]) {
      if (w2.abortSignal.aborted)
        return d4;
      let f4 = await Promise.all(m2.map((x3) => x3(w2)));
      Object.assign(d4, ...f4);
    }
    return d4;
  }, "applyLoaders"), c3 = /* @__PURE__ */ n$1(async (w2) => {
    let d4 = new Array();
    for (let m2 of [
      ...b$1(r4.beforeEach),
      ...b$1(t4.beforeEach),
      ...b$1(e4.beforeEach)
    ]) {
      if (w2.abortSignal.aborted)
        return d4;
      let f4 = await m2(w2);
      f4 && d4.push(f4);
    }
    return d4;
  }, "applyBeforeEach"), l4 = /* @__PURE__ */ n$1(async (w2) => {
    let d4 = [
      ...b$1(r4.afterEach),
      ...b$1(t4.afterEach),
      ...b$1(e4.afterEach)
    ].reverse();
    for (let m2 of d4) {
      if (w2.abortSignal.aborted)
        return;
      await m2(w2);
    }
  }, "applyAfterEach"), y3 = /* @__PURE__ */ n$1((w2) => w2.originalStoryFn(w2.args, w2), "undecoratedStoryFn"), { applyDecorators: u4 = He$2, runStep: h2 } = r4, T4 = [
    ...b$1(e4 == null ? void 0 : e4.decorators),
    ...b$1(t4 == null ? void 0 : t4.decorators),
    ...b$1(r4 == null ? void 0 : r4.decorators)
  ], R4 = (e4 == null ? void 0 : e4.userStoryFn) || (e4 == null ? void 0 : e4.render) || t4.render || r4.render, P2 = Et(u4)(y3, T4), L4 = /* @__PURE__ */ n$1((w2) => P2(w2), "unboundStoryFn"), O2 = (e4 == null ? void 0 : e4.play) ?? (t4 == null ? void 0 : t4.play), F2 = Ot$1(O2);
  if (!R4 && !F2)
    throw new uo({ id: i4 });
  let A4 = /* @__PURE__ */ n$1((w2) => async () => (await w2.renderToCanvas(), w2.canvas), "defaultMount"), S4 = e4.mount ?? t4.mount ?? r4.mount ?? A4, v2 = r4.testingLibraryRender;
  return {
    storyGlobals: {},
    ...a4,
    moduleExport: o3,
    id: i4,
    name: s4,
    story: s4,
    originalStoryFn: R4,
    undecoratedStoryFn: y3,
    unboundStoryFn: L4,
    applyLoaders: p3,
    applyBeforeEach: c3,
    applyAfterEach: l4,
    playFunction: O2,
    runStep: h2,
    mount: S4,
    testingLibraryRender: v2,
    renderToCanvas: r4.renderToCanvas,
    usesMount: F2
  };
}
n$1(Ne$2, "prepareStory");
function go$1(e4, t4, r4) {
  var _a2;
  let o3 = ["dev", "test"], i4 = ((_a2 = yo$1.DOCS_OPTIONS) == null ? void 0 : _a2.autodocs) === true ? ["autodocs"] : [], s4 = uc$1(
    ...o3,
    ...i4,
    ...r4.tags ?? [],
    ...t4.tags ?? [],
    ...(e4 == null ? void 0 : e4.tags) ?? []
  ), a4 = D$1(
    r4.parameters,
    t4.parameters,
    e4 == null ? void 0 : e4.parameters
  ), { argTypesEnhancers: p3 = [], argsEnhancers: c3 = [] } = r4, l4 = D$1(
    r4.argTypes,
    t4.argTypes,
    e4 == null ? void 0 : e4.argTypes
  );
  if (e4) {
    let O2 = (e4 == null ? void 0 : e4.userStoryFn) || (e4 == null ? void 0 : e4.render) || t4.render || r4.render;
    a4.__isArgsStory = O2 && O2.length > 0;
  }
  let y3 = {
    ...r4.args,
    ...t4.args,
    ...e4 == null ? void 0 : e4.args
  }, u4 = {
    ...t4.globals,
    ...e4 == null ? void 0 : e4.globals
  }, h2 = {
    componentId: t4.id,
    title: t4.title,
    kind: t4.title,
    // Back compat
    id: (e4 == null ? void 0 : e4.id) || t4.id,
    // if there's no story name, we create a fake one since enhancers expect a name
    name: (e4 == null ? void 0 : e4.name) || "__meta",
    story: (e4 == null ? void 0 : e4.name) || "__meta",
    // Back compat
    component: t4.component,
    subcomponents: t4.subcomponents,
    tags: s4,
    parameters: a4,
    initialArgs: y3,
    argTypes: l4,
    storyGlobals: u4
  };
  h2.argTypes = p3.reduce(
    (O2, F2) => F2({ ...h2, argTypes: O2 }),
    h2.argTypes
  );
  let T4 = { ...y3 };
  h2.initialArgs = [...c3].reduce(
    (O2, F2) => ({
      ...O2,
      ...F2({
        ...h2,
        initialArgs: O2
      })
    }),
    T4
  );
  let { name: R4, story: P2, ...L4 } = h2;
  return L4;
}
n$1(go$1, "preparePartialAnnotations");
function Ft(e4) {
  var _a2;
  let { args: t4 } = e4, r4 = {
    ...e4,
    allArgs: void 0,
    argsByTarget: void 0
  };
  if ((_a2 = fo$1.FEATURES) == null ? void 0 : _a2.argTypeTargetsV7) {
    let s4 = Ct$1(e4);
    r4 = {
      ...e4,
      allArgs: e4.args,
      argsByTarget: s4,
      args: s4[De$2] || {}
    };
  }
  let o3 = Object.entries(r4.args).reduce((s4, [a4, p3]) => {
    var _a3;
    if (!((_a3 = r4.argTypes[a4]) == null ? void 0 : _a3.mapping))
      return s4[a4] = p3, s4;
    let c3 = /* @__PURE__ */ n$1((l4) => {
      let y3 = r4.argTypes[a4].mapping;
      return y3 && l4 in y3 ? y3[l4] : l4;
    }, "mappingFn");
    return s4[a4] = Array.isArray(p3) ? p3.map(c3) : c3(p3), s4;
  }, {}), i4 = Object.entries(o3).reduce((s4, [a4, p3]) => {
    let c3 = r4.argTypes[a4] || {};
    return Xr(c3, o3, r4.globals) && (s4[a4] = p3), s4;
  }, {});
  return { ...r4, unmappedArgs: t4, args: i4 };
}
n$1(Ft, "prepareContext");
const { logger: ho } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var je$1 = /* @__PURE__ */ n$1((e4, t4, r4) => {
  let o3 = typeof e4;
  switch (o3) {
    case "boolean":
    case "string":
    case "number":
    case "function":
    case "symbol":
      return { name: o3 };
  }
  return e4 ? r4.has(e4) ? (ho.warn(W$2`
        We've detected a cycle in arg '${t4}'. Args should be JSON-serializable.

        Consider using the mapping feature or fully custom args:
        - Mapping: https://storybook.js.org/docs/writing-stories/args#mapping-to-complex-arg-values
        - Custom args: https://storybook.js.org/docs/essentials/controls#fully-custom-args
      `), { name: "other", value: "cyclic object" }) : (r4.add(e4), Array.isArray(e4) ? { name: "array", value: e4.length > 0 ? je$1(e4[0], t4, new Set(
    r4
  )) : { name: "other", value: "unknown" } } : { name: "object", value: U$1(e4, (s4) => je$1(s4, t4, new Set(r4))) }) : { name: "object", value: {} };
}, "inferType"), Be$2 = /* @__PURE__ */ n$1((e4) => {
  let { id: t4, argTypes: r4 = {}, initialArgs: o3 = {} } = e4, i4 = U$1(o3, (a4, p3) => ({
    name: p3,
    type: je$1(a4, `${t4}.${p3}`, /* @__PURE__ */ new Set())
  })), s4 = U$1(r4, (a4, p3) => ({
    name: p3
  }));
  return D$1(i4, s4, r4);
}, "inferArgTypes");
Be$2.secondPass = true;
const { logger: xo$1 } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var It$1 = /* @__PURE__ */ n$1((e4, t4) => Array.isArray(t4) ? t4.includes(e4) : e4.match(t4), "matches"), ze$1 = /* @__PURE__ */ n$1((e4, t4, r4) => !t4 && !r4 ? e4 : e4 && Le$2(e4, (o3, i4) => {
  let s4 = o3.name || i4.toString();
  return !!(!t4 || It$1(s4, t4)) && (!r4 || !It$1(s4, r4));
}), "filterArgTypes");
var bo$1 = /* @__PURE__ */ n$1((e4, t4, r4) => {
  let { type: o3, options: i4 } = e4;
  if (o3) {
    if (r4.color && r4.color.test(t4)) {
      let s4 = o3.name;
      if (s4 === "string")
        return { control: { type: "color" } };
      s4 !== "enum" && xo$1.warn(
        `Addon controls: Control of type color only supports string, received "${s4}" instead`
      );
    }
    if (r4.date && r4.date.test(t4))
      return { control: { type: "date" } };
    switch (o3.name) {
      case "array":
        return { control: { type: "object" } };
      case "boolean":
        return { control: { type: "boolean" } };
      case "string":
        return { control: { type: "text" } };
      case "number":
        return { control: { type: "number" } };
      case "enum": {
        let { value: s4 } = o3;
        return { control: { type: (s4 == null ? void 0 : s4.length) <= 5 ? "radio" : "select" }, options: s4 };
      }
      case "function":
      case "symbol":
        return null;
      default:
        return { control: { type: i4 ? "select" : "object" } };
    }
  }
}, "inferControl"), me$2 = /* @__PURE__ */ n$1((e4) => {
  let {
    argTypes: t4,
    parameters: { __isArgsStory: r4, controls: { include: o3 = null, exclude: i4 = null, matchers: s4 = {} } = {} }
  } = e4;
  if (!r4)
    return t4;
  let a4 = ze$1(t4, o3, i4), p3 = U$1(a4, (c3, l4) => (c3 == null ? void 0 : c3.type) && bo$1(c3, l4.toString(), s4));
  return D$1(p3, a4);
}, "inferControls");
me$2.secondPass = true;
function te$2({
  argTypes: e4,
  globalTypes: t4,
  argTypesEnhancers: r4,
  decorators: o3,
  loaders: i4,
  beforeEach: s4,
  afterEach: a4,
  initialGlobals: p3,
  ...c3
}) {
  return {
    ...e4 && { argTypes: K$1(e4) },
    ...t4 && { globalTypes: K$1(t4) },
    decorators: b$1(o3),
    loaders: b$1(i4),
    beforeEach: b$1(s4),
    afterEach: b$1(a4),
    argTypesEnhancers: [
      ...r4 || [],
      Be$2,
      // There's an architectural decision to be made regarding embedded addons in core:
      //
      // Option 1: Keep embedded addons but ensure consistency by moving addon-specific code
      // (like inferControls) to live alongside the addon code itself. This maintains the
      // concept of core addons while improving code organization.
      //
      // Option 2: Fully integrate these addons into core, potentially moving UI components
      // into the manager and treating them as core features rather than addons. This is a
      // bigger architectural change requiring careful consideration.
      //
      // For now, we're keeping inferControls here as we need time to properly evaluate
      // these options and their implications. Some features (like Angular's cleanArgsDecorator)
      // currently rely on this behavior.
      //
      // TODO: Make an architectural decision on the handling of core addons
      me$2
    ],
    initialGlobals: p3,
    ...c3
  };
}
n$1(te$2, "normalizeProjectAnnotations");
const { global: To$1 } = __STORYBOOK_MODULE_GLOBAL__;
var Lt = /* @__PURE__ */ n$1((e4) => async () => {
  let t4 = [];
  for (let r4 of e4) {
    let o3 = await r4();
    o3 && t4.unshift(o3);
  }
  return async () => {
    for (let r4 of t4)
      await r4();
  };
}, "composeBeforeAllHooks");
function Ue$1(e4) {
  return async (t4, r4, o3) => {
    await e4.reduceRight(
      (s4, a4) => async () => a4(t4, s4, o3),
      async () => r4(o3)
    )();
  };
}
n$1(Ue$1, "composeStepRunners");
function oe$1(e4, t4) {
  return e4.map((r4) => {
    var _a2;
    return ((_a2 = r4.default) == null ? void 0 : _a2[t4]) ?? r4[t4];
  }).filter(Boolean);
}
n$1(oe$1, "getField");
function Y$1(e4, t4, r4 = {}) {
  return oe$1(e4, t4).reduce((o3, i4) => {
    let s4 = b$1(i4);
    return r4.reverseFileOrder ? [...s4, ...o3] : [...o3, ...s4];
  }, []);
}
n$1(Y$1, "getArrayField");
function ue$2(e4, t4) {
  return Object.assign({}, ...oe$1(e4, t4));
}
n$1(ue$2, "getObjectField");
function re$1(e4, t4) {
  return oe$1(e4, t4).pop();
}
n$1(re$1, "getSingletonField");
function ne$2(e4) {
  var _a2;
  let t4 = Y$1(e4, "argTypesEnhancers"), r4 = oe$1(e4, "runStep"), o3 = Y$1(e4, "beforeAll");
  return {
    parameters: D$1(...oe$1(e4, "parameters")),
    decorators: Y$1(e4, "decorators", {
      reverseFileOrder: !(((_a2 = To$1.FEATURES) == null ? void 0 : _a2.legacyDecoratorFileOrder) ?? false)
    }),
    args: ue$2(e4, "args"),
    argsEnhancers: Y$1(e4, "argsEnhancers"),
    argTypes: ue$2(e4, "argTypes"),
    argTypesEnhancers: [
      ...t4.filter((i4) => !i4.secondPass),
      ...t4.filter((i4) => i4.secondPass)
    ],
    initialGlobals: ue$2(e4, "initialGlobals"),
    globalTypes: ue$2(e4, "globalTypes"),
    loaders: Y$1(e4, "loaders"),
    beforeAll: Lt(o3),
    beforeEach: Y$1(e4, "beforeEach"),
    afterEach: Y$1(e4, "afterEach"),
    render: re$1(e4, "render"),
    renderToCanvas: re$1(e4, "renderToCanvas"),
    applyDecorators: re$1(e4, "applyDecorators"),
    runStep: Ue$1(r4),
    tags: Y$1(e4, "tags"),
    mount: re$1(e4, "mount"),
    testingLibraryRender: re$1(e4, "testingLibraryRender")
  };
}
n$1(ne$2, "composeConfigs");
const { MountMustBeDestructuredError: Ao$1 } = __STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;
function Dt$1() {
  var _a2, _b2, _c3;
  try {
    return (
      // @ts-expect-error This property exists in Vitest browser mode
      !!globalThis.__vitest_browser__ || !!((_c3 = (_b2 = (_a2 = globalThis.window) == null ? void 0 : _a2.navigator) == null ? void 0 : _b2.userAgent) == null ? void 0 : _c3.match(/StorybookTestRunner/))
    );
  } catch {
    return false;
  }
}
n$1(Dt$1, "isTestEnvironment");
function _t$1(e4 = true) {
  if (!("document" in globalThis && "createElement" in globalThis.document))
    return () => {
    };
  let t4 = document.createElement("style");
  t4.textContent = `*, *:before, *:after {
    animation: none !important;
  }`, document.head.appendChild(t4);
  let r4 = document.createElement("style");
  return r4.textContent = `*, *:before, *:after {
    animation-delay: 0s !important;
    animation-direction: ${e4 ? "reverse" : "normal"} !important;
    animation-play-state: paused !important;
    transition: none !important;
  }`, document.head.appendChild(r4), document.body.clientHeight, document.head.removeChild(t4), () => {
    var _a2;
    (_a2 = r4.parentNode) == null ? void 0 : _a2.removeChild(r4);
  };
}
n$1(_t$1, "pauseAnimations");
async function Ht$1(e4) {
  if (!("document" in globalThis && "getAnimations" in globalThis.document && "querySelectorAll" in globalThis.document))
    return;
  let t4 = false;
  await Promise.race([
    // After 50ms, retrieve any running animations and wait for them to finish
    // If new animations are created while waiting, we'll wait for them too
    new Promise((r4) => {
      setTimeout(() => {
        let o3 = [globalThis.document, ...Nt2(globalThis.document)], i4 = /* @__PURE__ */ n$1(async () => {
          if (t4 || (e4 == null ? void 0 : e4.aborted))
            return;
          let s4 = o3.flatMap((a4) => {
            var _a2;
            return ((_a2 = a4 == null ? void 0 : a4.getAnimations) == null ? void 0 : _a2.call(a4)) || [];
          }).filter((a4) => a4.playState === "running" && !So$1(a4));
          s4.length > 0 && (await Promise.all(s4.map((a4) => a4.finished)), await i4());
        }, "checkAnimationsFinished");
        i4().then(r4);
      }, 100);
    }),
    // If animations don't finish within the timeout, continue without waiting
    new Promise(
      (r4) => setTimeout(() => {
        t4 = true, r4(void 0);
      }, 5e3)
    )
  ]);
}
n$1(Ht$1, "waitForAnimations");
function Nt2(e4) {
  return [e4, ...e4.querySelectorAll("*")].reduce(
    (t4, r4) => ("shadowRoot" in r4 && r4.shadowRoot && t4.push(r4.shadowRoot, ...Nt2(r4.shadowRoot)), t4),
    []
  );
}
n$1(Nt2, "getShadowRoots");
function So$1(e4) {
  var _a2;
  if (e4 instanceof CSSAnimation && e4.effect instanceof KeyframeEffect && e4.effect.target) {
    let t4 = getComputedStyle(e4.effect.target, e4.effect.pseudoElement), r4 = (_a2 = t4.animationName) == null ? void 0 : _a2.split(", ").indexOf(e4.animationName);
    return t4.animationIterationCount.split(", ")[r4] === "infinite";
  }
  return false;
}
n$1(So$1, "isInfiniteAnimation");
var Ge$2 = class Ge {
  constructor() {
    this.reports = [];
  }
  async addReport(t4) {
    this.reports.push(t4);
  }
};
n$1(Ge$2, "ReporterAPI");
var fe$1 = Ge$2;
var Ro$1 = "ComposedStory", wo = "Unnamed Story";
var V$1 = [];
function We$1(e4, t4, r4, o3, i4) {
  var _a2;
  if (e4 === void 0)
    throw new Error("Expected a story but received undefined.");
  t4.title = t4.title ?? Ro$1;
  let s4 = kt(t4), a4 = i4 || e4.storyName || ((_a2 = e4.story) == null ? void 0 : _a2.name) || e4.name || wo, p3 = _e$1(
    a4,
    e4,
    s4
  ), c3 = te$2(
    ne$2([
      o3 ?? globalThis.globalProjectAnnotations ?? {},
      r4 ?? {}
    ])
  ), l4 = Ne$2(
    p3,
    s4,
    c3
  ), u4 = {
    ...vt$1(c3.globalTypes),
    ...c3.initialGlobals,
    ...l4.storyGlobals
  }, h2 = new fe$1(), T4 = /* @__PURE__ */ n$1(() => {
    let A4 = Ft({
      hooks: new de$1(),
      globals: u4,
      args: { ...l4.initialArgs },
      viewMode: "story",
      reporting: h2,
      loaded: {},
      abortSignal: new AbortController().signal,
      step: /* @__PURE__ */ n$1((S4, v2) => l4.runStep(S4, v2, A4), "step"),
      canvasElement: null,
      canvas: {},
      userEvent: {},
      globalTypes: c3.globalTypes,
      ...l4,
      context: null,
      mount: null
    });
    return A4.parameters.__isPortableStory = true, A4.context = A4, l4.renderToCanvas && (A4.renderToCanvas = async () => {
      var _a3;
      let S4 = await ((_a3 = l4.renderToCanvas) == null ? void 0 : _a3.call(
        l4,
        {
          componentId: l4.componentId,
          title: l4.title,
          id: l4.id,
          name: l4.name,
          tags: l4.tags,
          showMain: /* @__PURE__ */ n$1(() => {
          }, "showMain"),
          showError: /* @__PURE__ */ n$1((v2) => {
            throw new Error(`${v2.title}
${v2.description}`);
          }, "showError"),
          showException: /* @__PURE__ */ n$1((v2) => {
            throw v2;
          }, "showException"),
          forceRemount: true,
          storyContext: A4,
          storyFn: /* @__PURE__ */ n$1(() => l4.unboundStoryFn(A4), "storyFn"),
          unboundStoryFn: l4.unboundStoryFn
        },
        A4.canvasElement
      ));
      S4 && V$1.push(S4);
    }), A4.mount = l4.mount(A4), A4;
  }, "initializeContext"), R4, P2 = /* @__PURE__ */ n$1(async (A4) => {
    var _a3;
    let S4 = T4();
    return S4.canvasElement ?? (S4.canvasElement = (_a3 = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a3.body), R4 && (S4.loaded = R4.loaded), Object.assign(S4, A4), l4.playFunction(S4);
  }, "play"), L4 = /* @__PURE__ */ n$1((A4) => {
    let S4 = T4();
    return Object.assign(S4, A4), Eo$1(l4, S4);
  }, "run"), O2 = l4.playFunction ? P2 : void 0;
  return Object.assign(
    /* @__PURE__ */ n$1(function(S4) {
      let v2 = T4();
      return R4 && (v2.loaded = R4.loaded), v2.args = {
        ...v2.initialArgs,
        ...S4
      }, l4.unboundStoryFn(v2);
    }, "storyFn"),
    {
      id: l4.id,
      storyName: a4,
      load: /* @__PURE__ */ n$1(async () => {
        for (let S4 of [...V$1].reverse())
          await S4();
        V$1.length = 0;
        let A4 = T4();
        A4.loaded = await l4.applyLoaders(A4), V$1.push(...(await l4.applyBeforeEach(A4)).filter(Boolean)), R4 = A4;
      }, "load"),
      globals: u4,
      args: l4.initialArgs,
      parameters: l4.parameters,
      argTypes: l4.argTypes,
      play: O2,
      run: L4,
      reporting: h2,
      tags: l4.tags
    }
  );
}
n$1(We$1, "composeStory");
async function Eo$1(e4, t4) {
  var _a2, _b2;
  for (let s4 of [...V$1].reverse())
    await s4();
  if (V$1.length = 0, !t4.canvasElement) {
    let s4 = document.createElement("div");
    (_b2 = (_a2 = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a2.body) == null ? void 0 : _b2.appendChild(s4), t4.canvasElement = s4, V$1.push(() => {
      var _a3, _b3, _c3, _d3;
      ((_b3 = (_a3 = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a3.body) == null ? void 0 : _b3.contains(s4)) && ((_d3 = (_c3 = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _c3.body) == null ? void 0 : _d3.removeChild(s4));
    });
  }
  if (t4.loaded = await e4.applyLoaders(t4), t4.abortSignal.aborted)
    return;
  V$1.push(...(await e4.applyBeforeEach(t4)).filter(Boolean));
  let r4 = e4.playFunction, o3 = e4.usesMount;
  if (o3 || await t4.mount(), t4.abortSignal.aborted)
    return;
  r4 && (o3 || (t4.mount = async () => {
    throw new Ao$1({ playFunction: r4.toString() });
  }), await r4(t4));
  let i4;
  Dt$1() ? i4 = _t$1() : await Ht$1(t4.abortSignal), await e4.applyAfterEach(t4), await (i4 == null ? void 0 : i4());
}
n$1(Eo$1, "runStory");
var Ye$1 = "Invariant failed";
function ye$2(e4, t4) {
  if (!e4) {
    var r4 = typeof t4 == "function" ? t4() : t4, o3 = r4 ? "".concat(Ye$1, ": ").concat(r4) : Ye$1;
    throw new Error(o3);
  }
}
n$1(ye$2, "invariant");
var Ke$1 = {};
xt2(Ke$1, {
  argsEnhancers: () => Mo$1
});
const { ImplicitActionsDuringRendering: vo$1 } = __STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;
const { global: zt$1 } = __STORYBOOK_MODULE_GLOBAL__;
const { addons: ko$1 } = __STORYBOOK_MODULE_PREVIEW_API__;
var Ve$1 = "storybook/actions", jt = `${Ve$1}/action-event`;
var Bt = {
  depth: 10,
  clearOnStoryChange: true,
  limit: 50
};
var Ut = /* @__PURE__ */ n$1((e4, t4) => {
  let r4 = Object.getPrototypeOf(e4);
  return !r4 || t4(r4) ? r4 : Ut(r4, t4);
}, "findProto"), Po$1 = /* @__PURE__ */ n$1((e4) => !!(typeof e4 == "object" && e4 && Ut(e4, (t4) => /^Synthetic(?:Base)?Event$/.test(t4.constructor.name)) && typeof e4.persist == "function"), "isReactSyntheticEvent"), Oo$1 = /* @__PURE__ */ n$1((e4) => {
  if (Po$1(e4)) {
    let t4 = Object.create(
      e4.constructor.prototype,
      Object.getOwnPropertyDescriptors(e4)
    );
    t4.persist();
    let r4 = Object.getOwnPropertyDescriptor(t4, "view"), o3 = r4 == null ? void 0 : r4.value;
    return typeof o3 == "object" && (o3 == null ? void 0 : o3.constructor.name) === "Window" && Object.defineProperty(t4, "view", {
      ...r4,
      value: Object.create(o3.constructor.prototype)
    }), t4;
  }
  return e4;
}, "serializeArg");
function ie$1(e4, t4 = {}) {
  let r4 = {
    ...Bt,
    ...t4
  }, o3 = /* @__PURE__ */ n$1(function(...s4) {
    var _a2, _b2;
    if (t4.implicit) {
      let T4 = (_a2 = "__STORYBOOK_PREVIEW__" in zt$1 ? zt$1.__STORYBOOK_PREVIEW__ : void 0) == null ? void 0 : _a2.storyRenders.find(
        (R4) => R4.phase === "playing" || R4.phase === "rendering"
      );
      if (T4) {
        let R4 = !((_b2 = globalThis == null ? void 0 : globalThis.FEATURES) == null ? void 0 : _b2.disallowImplicitActionsInRenderV8), P2 = new vo$1({
          phase: T4.phase,
          name: e4,
          deprecated: R4
        });
        if (R4)
          console.warn(P2);
        else
          throw P2;
      }
    }
    let a4 = ko$1.getChannel(), p3 = Date.now().toString(36) + Math.random().toString(36).substring(2), c3 = 5, l4 = s4.map(Oo$1), y3 = s4.length > 1 ? l4 : l4[0], u4 = {
      id: p3,
      count: 0,
      data: { name: e4, args: y3 },
      options: {
        ...r4,
        maxDepth: c3 + (r4.depth || 3)
      }
    };
    a4.emit(jt, u4);
  }, "actionHandler");
  return o3.isAction = true, o3.implicit = t4.implicit, o3;
}
n$1(ie$1, "action");
var Gt$1 = /* @__PURE__ */ n$1((e4, t4) => typeof t4[e4] > "u" && !(e4 in t4), "isInInitialArgs"), Wt = /* @__PURE__ */ n$1((e4) => {
  let {
    initialArgs: t4,
    argTypes: r4,
    id: o3,
    parameters: { actions: i4 }
  } = e4;
  if (!i4 || i4.disable || !i4.argTypesRegex || !r4)
    return {};
  let s4 = new RegExp(i4.argTypesRegex);
  return Object.entries(r4).filter(
    ([p3]) => !!s4.test(p3)
  ).reduce((p3, [c3, l4]) => (Gt$1(c3, t4) && (p3[c3] = ie$1(c3, { implicit: true, id: o3 })), p3), {});
}, "inferActionsFromArgTypesRegex"), Yt$1 = /* @__PURE__ */ n$1((e4) => {
  let {
    initialArgs: t4,
    argTypes: r4,
    parameters: { actions: o3 }
  } = e4;
  return (o3 == null ? void 0 : o3.disable) || !r4 ? {} : Object.entries(r4).filter(([s4, a4]) => !!a4.action).reduce((s4, [a4, p3]) => (Gt$1(a4, t4) && (s4[a4] = ie$1(typeof p3.action == "string" ? p3.action : a4)), s4), {});
}, "addActionsFromArgTypes");
var Mo$1 = [
  Yt$1,
  Wt
];
var qe$2 = {};
xt2(qe$2, {
  loaders: () => Io$1
});
const { onMockCall: $o } = __STORYBOOK_MODULE_TEST__;
var Vt$1 = false, Fo$1 = /* @__PURE__ */ n$1((e4) => {
  var _a2;
  let { parameters: t4 } = e4;
  ((_a2 = t4 == null ? void 0 : t4.actions) == null ? void 0 : _a2.disable) || Vt$1 || ($o((r4, o3) => {
    let i4 = r4.getMockName();
    i4 !== "spy" && (!/^next\/.*::/.test(i4) || [
      "next/router::useRouter()",
      "next/navigation::useRouter()",
      "next/navigation::redirect",
      "next/cache::",
      "next/headers::cookies().set",
      "next/headers::cookies().delete",
      "next/headers::headers().set",
      "next/headers::headers().delete"
    ].some((s4) => i4.startsWith(s4))) && ie$1(i4)(o3);
  }), Vt$1 = true);
}, "logActionsWhenMockCalled"), Io$1 = [Fo$1];
var Xe$2 = /* @__PURE__ */ n$1(() => rc$1({
  ...Ke$1,
  ...qe$2
}), "default");
var Z$2 = "backgrounds";
const { useEffect: Jt$1 } = __STORYBOOK_MODULE_PREVIEW_API__;
var Kt$1 = {
  light: { name: "light", value: "#F8F8F8" },
  dark: { name: "dark", value: "#333" }
};
var { document: N$2 } = globalThis, qt = /* @__PURE__ */ n$1(() => {
  var _a2;
  return (globalThis == null ? void 0 : globalThis.matchMedia) ? !!((_a2 = globalThis.matchMedia("(prefers-reduced-motion: reduce)")) == null ? void 0 : _a2.matches) : false;
}, "isReduceMotionEnabled"), Ze$1 = /* @__PURE__ */ n$1((e4) => {
  (Array.isArray(e4) ? e4 : [e4]).forEach(_o$1);
}, "clearStyles"), _o$1 = /* @__PURE__ */ n$1((e4) => {
  if (!N$2)
    return;
  let t4 = N$2.getElementById(e4);
  t4 && t4.parentElement && t4.parentElement.removeChild(t4);
}, "clearStyle"), Xt$1 = /* @__PURE__ */ n$1((e4, t4) => {
  if (!N$2)
    return;
  let r4 = N$2.getElementById(e4);
  if (r4)
    r4.innerHTML !== t4 && (r4.innerHTML = t4);
  else {
    let o3 = N$2.createElement("style");
    o3.setAttribute("id", e4), o3.innerHTML = t4, N$2.head.appendChild(o3);
  }
}, "addGridStyle"), Zt$1 = /* @__PURE__ */ n$1((e4, t4, r4) => {
  var _a2;
  if (!N$2)
    return;
  let o3 = N$2.getElementById(e4);
  if (o3)
    o3.innerHTML !== t4 && (o3.innerHTML = t4);
  else {
    let i4 = N$2.createElement("style");
    i4.setAttribute("id", e4), i4.innerHTML = t4;
    let s4 = `addon-backgrounds-grid${r4 ? `-docs-${r4}` : ""}`, a4 = N$2.getElementById(s4);
    a4 ? (_a2 = a4.parentElement) == null ? void 0 : _a2.insertBefore(i4, a4) : N$2.head.appendChild(i4);
  }
}, "addBackgroundStyle");
var Ho$1 = {
  cellSize: 100,
  cellAmount: 10,
  opacity: 0.8
}, Qt = "addon-backgrounds", er$1 = "addon-backgrounds-grid", No$1 = qt() ? "" : "transition: background-color 0.3s;", tr$1 = /* @__PURE__ */ n$1((e4, t4) => {
  let { globals: r4 = {}, parameters: o3 = {}, viewMode: i4, id: s4 } = t4, {
    options: a4 = Kt$1,
    disable: p3,
    grid: c3 = Ho$1
  } = o3[Z$2] || {}, l4 = r4[Z$2] || {}, y3 = typeof l4 == "string" ? l4 : l4 == null ? void 0 : l4.value, u4 = y3 ? a4[y3] : void 0, h2 = typeof u4 == "string" ? u4 : (u4 == null ? void 0 : u4.value) || "transparent", T4 = typeof l4 == "string" ? false : l4.grid || false, R4 = !!u4 && !p3, P2 = i4 === "docs" ? `#anchor--${s4} .docs-story` : ".sb-show-main", L4 = i4 === "docs" ? `#anchor--${s4} .docs-story` : ".sb-show-main", O2 = o3.layout === void 0 || o3.layout === "padded", F2 = i4 === "docs" ? 20 : O2 ? 16 : 0, { cellAmount: A4, cellSize: S4, opacity: v2, offsetX: w2 = F2, offsetY: d4 = F2 } = c3, m2 = i4 === "docs" ? `${Qt}-docs-${s4}` : `${Qt}-color`, f4 = i4 === "docs" ? s4 : null;
  Jt$1(() => {
    let g2 = `
    ${P2} {
      background: ${h2} !important;
      ${No$1}
      }`;
    if (!R4) {
      Ze$1(m2);
      return;
    }
    Zt$1(m2, g2, f4);
  }, [P2, m2, f4, R4, h2]);
  let x3 = i4 === "docs" ? `${er$1}-docs-${s4}` : `${er$1}`;
  return Jt$1(() => {
    if (!T4) {
      Ze$1(x3);
      return;
    }
    let g2 = [
      `${S4 * A4}px ${S4 * A4}px`,
      `${S4 * A4}px ${S4 * A4}px`,
      `${S4}px ${S4}px`,
      `${S4}px ${S4}px`
    ].join(", "), E4 = `
        ${L4} {
          background-size: ${g2} !important;
          background-position: ${w2}px ${d4}px, ${w2}px ${d4}px, ${w2}px ${d4}px, ${w2}px ${d4}px !important;
          background-blend-mode: difference !important;
          background-image: linear-gradient(rgba(130, 130, 130, ${v2}) 1px, transparent 1px),
           linear-gradient(90deg, rgba(130, 130, 130, ${v2}) 1px, transparent 1px),
           linear-gradient(rgba(130, 130, 130, ${v2 / 2}) 1px, transparent 1px),
           linear-gradient(90deg, rgba(130, 130, 130, ${v2 / 2}) 1px, transparent 1px) !important;
        }
      `;
    Xt$1(x3, E4);
  }, [A4, S4, L4, x3, T4, w2, d4, v2]), e4();
}, "withBackgroundAndGrid");
var Bo$1 = ((_a = globalThis.FEATURES) == null ? void 0 : _a.backgrounds) ? [tr$1] : [], zo = {
  [Z$2]: {
    grid: {
      cellSize: 20,
      opacity: 0.5,
      cellAmount: 5
    },
    disable: false
  }
}, Uo$1 = {
  [Z$2]: { value: void 0, grid: false }
}, Je$1 = /* @__PURE__ */ n$1(() => rc$1({
  decorators: Bo$1,
  parameters: zo,
  initialGlobals: Uo$1
}), "default");
var { step: Yo$1 } = Qs(
  {
    // It seems like the label is unused, but the instrumenter has access to it
    // The context will be bounded later in StoryRender, so that the user can write just:
    // await step("label", (context) => {
    //   // labeled step
    // });
    step: /* @__PURE__ */ n$1(async (e4, t4, r4) => t4(r4), "step")
  },
  { intercept: true }
), Qe$1 = /* @__PURE__ */ n$1(() => rc$1({
  parameters: {
    throwPlayFunctionExceptions: false
  },
  runStep: Yo$1
}), "default");
const { addons: ur } = __STORYBOOK_MODULE_PREVIEW_API__;
const { STORY_RENDER_PHASE_CHANGED: qo } = __STORYBOOK_MODULE_CORE_EVENTS__;
var ge$2 = "storybook/highlight", rr$1 = `${ge$2}/add`, or$1 = `${ge$2}/remove`, nr$1 = `${ge$2}/reset`, ir$1 = `${ge$2}/scroll-into-view`, et$1 = 2147483647, B$1 = 28;
var tt$1 = {
  chevronLeft: [
    "M9.10355 10.1464C9.29882 10.3417 9.29882 10.6583 9.10355 10.8536C8.90829 11.0488 8.59171 11.0488 8.39645 10.8536L4.89645 7.35355C4.70118 7.15829 4.70118 6.84171 4.89645 6.64645L8.39645 3.14645C8.59171 2.95118 8.90829 2.95118 9.10355 3.14645C9.29882 3.34171 9.29882 3.65829 9.10355 3.85355L5.95711 7L9.10355 10.1464Z"
  ],
  chevronRight: [
    "M4.89645 10.1464C4.70118 10.3417 4.70118 10.6583 4.89645 10.8536C5.09171 11.0488 5.40829 11.0488 5.60355 10.8536L9.10355 7.35355C9.29882 7.15829 9.29882 6.84171 9.10355 6.64645L5.60355 3.14645C5.40829 2.95118 5.09171 2.95118 4.89645 3.14645C4.70118 3.34171 4.70118 3.65829 4.89645 3.85355L8.04289 7L4.89645 10.1464Z"
  ],
  info: [
    "M7 5.5a.5.5 0 01.5.5v4a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zM7 4.5A.75.75 0 107 3a.75.75 0 000 1.5z",
    "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z"
  ],
  shareAlt: [
    "M2 1.004a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-4.5a.5.5 0 00-1 0v4.5H2v-10h4.5a.5.5 0 000-1H2z",
    "M7.354 7.357L12 2.711v1.793a.5.5 0 001 0v-3a.5.5 0 00-.5-.5h-3a.5.5 0 100 1h1.793L6.646 6.65a.5.5 0 10.708.707z"
  ]
};
var Vo$1 = "svg,path,rect,circle,line,polyline,polygon,ellipse,text".split(","), M$1 = /* @__PURE__ */ n$1((e4, t4 = {}, r4) => {
  let o3 = Vo$1.includes(e4) ? document.createElementNS("http://www.w3.org/2000/svg", e4) : document.createElement(e4);
  return Object.entries(t4).forEach(([i4, s4]) => {
    /[A-Z]/.test(i4) ? (i4 === "onClick" && (o3.addEventListener("click", s4), o3.addEventListener("keydown", (a4) => {
      (a4.key === "Enter" || a4.key === " ") && (a4.preventDefault(), s4());
    })), i4 === "onMouseEnter" && o3.addEventListener("mouseenter", s4), i4 === "onMouseLeave" && o3.addEventListener("mouseleave", s4)) : o3.setAttribute(
      i4,
      s4
    );
  }), r4 == null ? void 0 : r4.forEach((i4) => {
    if (!(i4 == null || i4 === false))
      try {
        o3.appendChild(i4);
      } catch {
        o3.appendChild(document.createTextNode(String(i4)));
      }
  }), o3;
}, "createElement"), ae$2 = /* @__PURE__ */ n$1((e4) => tt$1[e4] && M$1(
  "svg",
  { width: "14", height: "14", viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" },
  tt$1[e4].map(
    (t4) => M$1("path", {
      fill: "currentColor",
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: t4
    })
  )
), "createIcon"), sr = /* @__PURE__ */ n$1((e4) => {
  if ("elements" in e4) {
    let { elements: o3, color: i4, style: s4 } = e4;
    return {
      id: void 0,
      priority: 0,
      selectors: o3,
      styles: {
        outline: `2px ${s4} ${i4}`,
        outlineOffset: "2px",
        boxShadow: "0 0 0 6px rgba(255,255,255,0.6)"
      },
      menu: void 0
    };
  }
  let { menu: t4, ...r4 } = e4;
  return {
    id: void 0,
    priority: 0,
    styles: {
      outline: "2px dashed #029cfd"
    },
    ...r4,
    menu: Array.isArray(t4) ? t4.every(Array.isArray) ? t4 : [t4] : void 0
  };
}, "normalizeOptions"), Ko = /* @__PURE__ */ n$1((e4) => e4 instanceof Function, "isFunction"), se$2 = /* @__PURE__ */ new Map(), q$1 = /* @__PURE__ */ new Map(), he$1 = /* @__PURE__ */ new Map(), z$1 = /* @__PURE__ */ n$1((e4) => {
  let t4 = Symbol();
  return q$1.set(t4, []), se$2.set(t4, e4), { get: /* @__PURE__ */ n$1(() => se$2.get(t4), "get"), set: /* @__PURE__ */ n$1((a4) => {
    var _a2;
    let p3 = se$2.get(t4), c3 = Ko(a4) ? a4(p3) : a4;
    c3 !== p3 && (se$2.set(t4, c3), (_a2 = q$1.get(t4)) == null ? void 0 : _a2.forEach((l4) => {
      var _a3;
      (_a3 = he$1.get(l4)) == null ? void 0 : _a3(), he$1.set(l4, l4(c3));
    }));
  }, "set"), subscribe: /* @__PURE__ */ n$1((a4) => {
    var _a2;
    return (_a2 = q$1.get(t4)) == null ? void 0 : _a2.push(a4), () => {
      let p3 = q$1.get(t4);
      p3 && q$1.set(
        t4,
        p3.filter((c3) => c3 !== a4)
      );
    };
  }, "subscribe"), teardown: /* @__PURE__ */ n$1(() => {
    var _a2;
    (_a2 = q$1.get(t4)) == null ? void 0 : _a2.forEach((a4) => {
      var _a3;
      (_a3 = he$1.get(a4)) == null ? void 0 : _a3(), he$1.delete(a4);
    }), q$1.delete(t4), se$2.delete(t4);
  }, "teardown") };
}, "useStore"), rt$1 = /* @__PURE__ */ n$1((e4) => {
  let t4 = document.getElementById("storybook-root"), r4 = /* @__PURE__ */ new Map();
  for (let o3 of e4) {
    let { priority: i4 = 0 } = o3;
    for (let s4 of o3.selectors) {
      let a4 = [
        ...document.querySelectorAll(
          // Elements matching the selector, excluding storybook elements and their descendants.
          // Necessary to find portaled elements (e.g. children of `body`).
          `:is(${s4}):not([id^="storybook-"], [id^="storybook-"] *, [class^="sb-"], [class^="sb-"] *)`
        ),
        // Elements matching the selector inside the storybook root, as these were excluded above.
        ...(t4 == null ? void 0 : t4.querySelectorAll(s4)) || []
      ];
      for (let p3 of a4) {
        let c3 = r4.get(p3);
        (!c3 || c3.priority <= i4) && r4.set(p3, {
          ...o3,
          priority: i4,
          selectors: Array.from(new Set(((c3 == null ? void 0 : c3.selectors) || []).concat(s4)))
        });
      }
    }
  }
  return r4;
}, "mapElements"), ar$1 = /* @__PURE__ */ n$1((e4) => Array.from(e4.entries()).map(([t4, {
  selectors: r4,
  styles: o3,
  hoverStyles: i4,
  focusStyles: s4,
  menu: a4
}]) => {
  let { top: p3, left: c3, width: l4, height: y3 } = t4.getBoundingClientRect(), { position: u4 } = getComputedStyle(t4);
  return {
    element: t4,
    selectors: r4,
    styles: o3,
    hoverStyles: i4,
    focusStyles: s4,
    menu: a4,
    top: u4 === "fixed" ? p3 : p3 + window.scrollY,
    left: u4 === "fixed" ? c3 : c3 + window.scrollX,
    width: l4,
    height: y3
  };
}).sort((t4, r4) => r4.width * r4.height - t4.width * t4.height), "mapBoxes"), ot$1 = /* @__PURE__ */ n$1((e4, t4) => {
  let r4 = e4.getBoundingClientRect(), { x: o3, y: i4 } = t4;
  return (r4 == null ? void 0 : r4.top) && (r4 == null ? void 0 : r4.left) && o3 >= r4.left && o3 <= r4.left + r4.width && i4 >= r4.top && i4 <= r4.top + r4.height;
}, "isOverMenu"), nt$1 = /* @__PURE__ */ n$1((e4, t4, r4) => {
  if (!t4 || !r4)
    return false;
  let { left: o3, top: i4, width: s4, height: a4 } = e4;
  a4 < B$1 && (i4 = i4 - Math.round((B$1 - a4) / 2), a4 = B$1), s4 < B$1 && (o3 = o3 - Math.round((B$1 - s4) / 2), s4 = B$1), t4.style.position === "fixed" && (o3 += window.scrollX, i4 += window.scrollY);
  let { x: p3, y: c3 } = r4;
  return p3 >= o3 && p3 <= o3 + s4 && c3 >= i4 && c3 <= i4 + a4;
}, "isTargeted"), pr$1 = /* @__PURE__ */ n$1((e4, t4, r4 = {}) => {
  let { x: o3, y: i4 } = t4, { margin: s4 = 5, topOffset: a4 = 0, centered: p3 = false } = r4, { scrollX: c3, scrollY: l4, innerHeight: y3, innerWidth: u4 } = window, h2 = Math.min(
    e4.style.position === "fixed" ? i4 - l4 : i4,
    y3 - e4.clientHeight - s4 - a4 + l4
  ), T4 = p3 ? e4.clientWidth / 2 : 0, R4 = e4.style.position === "fixed" ? Math.max(Math.min(o3 - c3, u4 - T4 - s4), T4 + s4) : Math.max(
    Math.min(o3, u4 - T4 - s4 + c3),
    T4 + s4 + c3
  );
  Object.assign(e4.style, {
    ...R4 !== o3 && { left: `${R4}px` },
    ...h2 !== i4 && { top: `${h2}px` }
  });
}, "keepInViewport"), it = /* @__PURE__ */ n$1((e4) => {
  window.HTMLElement.prototype.hasOwnProperty("showPopover") && e4.showPopover();
}, "showPopover"), lr$1 = /* @__PURE__ */ n$1((e4) => {
  window.HTMLElement.prototype.hasOwnProperty("showPopover") && e4.hidePopover();
}, "hidePopover"), cr$1 = /* @__PURE__ */ n$1((e4) => ({
  top: e4.top,
  left: e4.left,
  width: e4.width,
  height: e4.height,
  selectors: e4.selectors,
  element: {
    attributes: Object.fromEntries(
      Array.from(e4.element.attributes).map((t4) => [t4.name, t4.value])
    ),
    localName: e4.element.localName,
    tagName: e4.element.tagName,
    outerHTML: e4.element.outerHTML
  }
}), "getEventDetails");
var C$2 = "storybook-highlights-menu", dr$1 = "storybook-highlights-root", Xo = "storybook-root", mr$1 = /* @__PURE__ */ n$1((e4) => {
  if (globalThis.__STORYBOOK_HIGHLIGHT_INITIALIZED)
    return;
  globalThis.__STORYBOOK_HIGHLIGHT_INITIALIZED = true;
  let { document: t4 } = globalThis, r4 = z$1([]), o3 = z$1(/* @__PURE__ */ new Map()), i4 = z$1([]), s4 = z$1(), a4 = z$1(), p3 = z$1([]), c3 = z$1([]), l4 = z$1(), y3 = z$1(), u4 = t4.getElementById(dr$1);
  r4.subscribe(() => {
    u4 || (u4 = M$1("div", { id: dr$1 }), t4.body.appendChild(u4));
  }), r4.subscribe((d4) => {
    let m2 = t4.getElementById(Xo);
    if (!m2)
      return;
    o3.set(rt$1(d4));
    let f4 = new MutationObserver(() => o3.set(rt$1(d4)));
    return f4.observe(m2, { subtree: true, childList: true }), () => {
      f4.disconnect();
    };
  }), o3.subscribe((d4) => {
    let m2 = /* @__PURE__ */ n$1(() => requestAnimationFrame(() => i4.set(ar$1(d4))), "updateBoxes"), f4 = new ResizeObserver(m2);
    f4.observe(t4.body), Array.from(d4.keys()).forEach((g2) => f4.observe(g2));
    let x3 = Array.from(t4.body.querySelectorAll("*")).filter((g2) => {
      let { overflow: E4, overflowX: I4, overflowY: k2 } = window.getComputedStyle(g2);
      return ["auto", "scroll"].some((H2) => [E4, I4, k2].includes(H2));
    });
    return x3.forEach((g2) => g2.addEventListener("scroll", m2)), () => {
      f4.disconnect(), x3.forEach((g2) => g2.removeEventListener("scroll", m2));
    };
  }), o3.subscribe((d4) => {
    let m2 = Array.from(d4.keys()).filter(({ style: x3 }) => x3.position === "sticky"), f4 = /* @__PURE__ */ n$1(() => requestAnimationFrame(() => {
      i4.set(
        (x3) => x3.map((g2) => {
          if (m2.includes(g2.element)) {
            let { top: E4, left: I4 } = g2.element.getBoundingClientRect();
            return { ...g2, top: E4 + window.scrollY, left: I4 + window.scrollX };
          }
          return g2;
        })
      );
    }), "updateBoxes");
    return t4.addEventListener("scroll", f4), () => t4.removeEventListener("scroll", f4);
  }), o3.subscribe((d4) => {
    p3.set((m2) => m2.filter(({ element: f4 }) => d4.has(f4)));
  }), p3.subscribe((d4) => {
    d4.length ? (y3.set((m2) => d4.some((f4) => f4.element === (m2 == null ? void 0 : m2.element)) ? m2 : void 0), l4.set((m2) => d4.some((f4) => f4.element === (m2 == null ? void 0 : m2.element)) ? m2 : void 0)) : (y3.set(void 0), l4.set(void 0), s4.set(void 0));
  });
  let h2 = new Map(/* @__PURE__ */ new Map());
  r4.subscribe((d4) => {
    d4.forEach(({ keyframes: m2 }) => {
      if (m2) {
        let f4 = h2.get(m2);
        f4 || (f4 = t4.createElement("style"), f4.setAttribute("data-highlight", "keyframes"), h2.set(m2, f4), t4.head.appendChild(f4)), f4.innerHTML = m2;
      }
    }), h2.forEach((m2, f4) => {
      d4.some((x3) => x3.keyframes === f4) || (m2.remove(), h2.delete(f4));
    });
  });
  let T4 = new Map(/* @__PURE__ */ new Map());
  i4.subscribe((d4) => {
    d4.forEach((m2) => {
      let f4 = T4.get(m2.element);
      if (u4 && !f4) {
        let x3 = {
          popover: "manual",
          "data-highlight-dimensions": `w${m2.width.toFixed(0)}h${m2.height.toFixed(0)}`,
          "data-highlight-coordinates": `x${m2.left.toFixed(0)}y${m2.top.toFixed(0)}`
        };
        f4 = u4.appendChild(
          M$1("div", x3, [M$1("div")])
        ), T4.set(m2.element, f4);
      }
    }), T4.forEach((m2, f4) => {
      d4.some(({ element: x3 }) => x3 === f4) || (m2.remove(), T4.delete(f4));
    });
  }), i4.subscribe((d4) => {
    let m2 = d4.filter((x3) => x3.menu);
    if (!m2.length)
      return;
    let f4 = /* @__PURE__ */ n$1((x3) => {
      requestAnimationFrame(() => {
        let g2 = t4.getElementById(C$2), E4 = { x: x3.pageX, y: x3.pageY };
        if (g2 && !ot$1(g2, E4)) {
          let I4 = m2.filter((k2) => {
            let H2 = T4.get(k2.element);
            return nt$1(k2, H2, E4);
          });
          s4.set(I4.length ? E4 : void 0), p3.set(I4);
        }
      });
    }, "onClick");
    return t4.addEventListener("click", f4), () => t4.removeEventListener("click", f4);
  });
  let R4 = /* @__PURE__ */ n$1(() => {
    let d4 = t4.getElementById(C$2), m2 = a4.get();
    !m2 || d4 && ot$1(d4, m2) || c3.set((f4) => {
      let x3 = i4.get().filter((k2) => {
        let H2 = T4.get(k2.element);
        return nt$1(k2, H2, m2);
      }), g2 = f4.filter((k2) => x3.includes(k2)), E4 = x3.filter((k2) => !f4.includes(k2)), I4 = f4.length - g2.length;
      return E4.length || I4 ? [...g2, ...E4] : f4;
    });
  }, "updateHovered");
  a4.subscribe(R4), i4.subscribe(R4);
  let P2 = /* @__PURE__ */ n$1(() => {
    let d4 = y3.get(), m2 = d4 ? [d4] : p3.get(), f4 = m2.length === 1 ? m2[0] : l4.get(), x3 = s4.get() !== void 0;
    i4.get().forEach((g2) => {
      var _a2;
      let E4 = T4.get(g2.element);
      if (E4) {
        let I4 = f4 === g2, k2 = x3 ? f4 ? I4 : m2.includes(g2) : (_a2 = c3.get()) == null ? void 0 : _a2.includes(g2);
        Object.assign(E4.style, {
          animation: "none",
          background: "transparent",
          border: "none",
          boxSizing: "border-box",
          outline: "none",
          outlineOffset: "0px",
          ...g2.styles,
          ...k2 ? g2.hoverStyles : {},
          ...I4 ? g2.focusStyles : {},
          position: getComputedStyle(g2.element).position === "fixed" ? "fixed" : "absolute",
          zIndex: et$1 - 10,
          top: `${g2.top}px`,
          left: `${g2.left}px`,
          width: `${g2.width}px`,
          height: `${g2.height}px`,
          margin: 0,
          padding: 0,
          cursor: g2.menu && k2 ? "pointer" : "default",
          pointerEvents: g2.menu ? "auto" : "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "visible"
        }), Object.assign(E4.children[0].style, {
          width: "100%",
          height: "100%",
          minHeight: `${B$1}px`,
          minWidth: `${B$1}px`,
          boxSizing: "content-box",
          padding: E4.style.outlineWidth || "0px"
        }), it(E4);
      }
    });
  }, "updateBoxStyles");
  i4.subscribe(P2), p3.subscribe(P2), c3.subscribe(P2), l4.subscribe(P2), y3.subscribe(P2);
  let L4 = /* @__PURE__ */ n$1(() => {
    var _a2;
    if (!u4)
      return;
    let d4 = t4.getElementById(C$2);
    if (d4)
      d4.innerHTML = "";
    else {
      let g2 = { id: C$2, popover: "manual" };
      d4 = u4.appendChild(M$1("div", g2)), u4.appendChild(
        M$1("style", {}, [
          `
            #${C$2} {
              position: absolute;
              z-index: ${et$1};
              width: 300px;
              padding: 0px;
              margin: 15px 0 0 0;
              transform: translateX(-50%);
              font-family: "Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;
              font-size: 12px;
              background: white;
              border: none;
              border-radius: 6px;
              box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05), 0 5px 15px 0 rgba(0, 0, 0, 0.1);
              color: #2E3438;
            }
            #${C$2} ul {
              list-style: none;
              margin: 0;
              padding: 0;
            }
            #${C$2} > ul {
              max-height: 300px;
              overflow-y: auto;
              padding: 4px 0;
            }
            #${C$2} li {
              padding: 0 4px;
              margin: 0;
            }
            #${C$2} li > :not(ul) {
              display: flex;
              padding: 8px;
              margin: 0;
              align-items: center;
              gap: 8px;
              border-radius: 4px;
            }
            #${C$2} button {
              width: 100%;
              border: 0;
              background: transparent;
              color: inherit;
              text-align: left;
              font-family: inherit;
              font-size: inherit;
            }
            #${C$2} button:focus-visible {
              outline-color: #029CFD;
            }
            #${C$2} button:hover {
              background: rgba(2, 156, 253, 0.07);
              color: #029CFD;
              cursor: pointer;
            }
            #${C$2} li code {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              line-height: 16px;
              font-size: 11px;
            }
            #${C$2} li svg {
              flex-shrink: 0;
              margin: 1px;
              color: #73828C;
            }
            #${C$2} li > button:hover svg, #${C$2} li > button:focus-visible svg {
              color: #029CFD;
            }
            #${C$2} .element-list li svg {
              display: none;
            }
            #${C$2} li.selectable svg, #${C$2} li.selected svg {
              display: block;
            }
            #${C$2} .menu-list {
              border-top: 1px solid rgba(38, 85, 115, 0.15);
            }
            #${C$2} .menu-list > li:not(:last-child) {
              padding-bottom: 4px;
              margin-bottom: 4px;
              border-bottom: 1px solid rgba(38, 85, 115, 0.15);
            }
            #${C$2} .menu-items, #${C$2} .menu-items li {
              padding: 0;
            }
            #${C$2} .menu-item {
              display: flex;
            }
            #${C$2} .menu-item-content {
              display: flex;
              flex-direction: column;
              flex-grow: 1;
            }
          `
        ])
      );
    }
    let m2 = y3.get(), f4 = m2 ? [m2] : p3.get();
    if (f4.length && (d4.style.position = getComputedStyle(f4[0].element).position === "fixed" ? "fixed" : "absolute", d4.appendChild(
      M$1(
        "ul",
        { class: "element-list" },
        f4.map((g2) => {
          var _a3;
          let E4 = f4.length > 1 && !!((_a3 = g2.menu) == null ? void 0 : _a3.some(
            (H2) => H2.some(
              (X2) => !X2.selectors || X2.selectors.some((le2) => g2.selectors.includes(le2))
            )
          )), I4 = E4 ? {
            class: "selectable",
            onClick: /* @__PURE__ */ n$1(() => y3.set(g2), "onClick"),
            onMouseEnter: /* @__PURE__ */ n$1(() => l4.set(g2), "onMouseEnter"),
            onMouseLeave: /* @__PURE__ */ n$1(() => l4.set(void 0), "onMouseLeave")
          } : m2 ? { class: "selected", onClick: /* @__PURE__ */ n$1(() => y3.set(void 0), "onClick") } : {}, k2 = E4 || m2;
          return M$1("li", I4, [
            M$1(k2 ? "button" : "div", k2 ? { type: "button" } : {}, [
              m2 ? ae$2("chevronLeft") : null,
              M$1("code", {}, [g2.element.outerHTML]),
              E4 ? ae$2("chevronRight") : null
            ])
          ]);
        })
      )
    )), y3.get() || p3.get().length === 1) {
      let g2 = y3.get() || p3.get()[0], E4 = (_a2 = g2.menu) == null ? void 0 : _a2.filter(
        (I4) => I4.some(
          (k2) => !k2.selectors || k2.selectors.some((H2) => g2.selectors.includes(H2))
        )
      );
      (E4 == null ? void 0 : E4.length) && d4.appendChild(
        M$1(
          "ul",
          { class: "menu-list" },
          E4.map(
            (I4) => M$1("li", {}, [
              M$1(
                "ul",
                { class: "menu-items" },
                I4.map(
                  ({ id: k2, title: H2, description: X2, iconLeft: le2, iconRight: gt2, clickEvent: ht2 }) => {
                    let we2 = ht2 && (() => e4.emit(ht2, k2, cr$1(g2)));
                    return M$1("li", {}, [
                      M$1(
                        we2 ? "button" : "div",
                        we2 ? { class: "menu-item", type: "button", onClick: we2 } : { class: "menu-item" },
                        [
                          le2 ? ae$2(le2) : null,
                          M$1("div", { class: "menu-item-content" }, [
                            M$1(X2 ? "strong" : "span", {}, [H2]),
                            X2 && M$1("span", {}, [X2])
                          ]),
                          gt2 ? ae$2(gt2) : null
                        ]
                      )
                    ]);
                  }
                )
              )
            ])
          )
        )
      );
    }
    let x3 = s4.get();
    x3 ? (Object.assign(d4.style, {
      display: "block",
      left: `${d4.style.position === "fixed" ? x3.x - window.scrollX : x3.x}px`,
      top: `${d4.style.position === "fixed" ? x3.y - window.scrollY : x3.y}px`
    }), it(d4), requestAnimationFrame(() => pr$1(d4, x3, { topOffset: 15, centered: true }))) : (lr$1(d4), Object.assign(d4.style, { display: "none" }));
  }, "renderMenu");
  p3.subscribe(L4), y3.subscribe(L4);
  let O2 = /* @__PURE__ */ n$1((d4) => {
    let m2 = sr(d4);
    r4.set((f4) => {
      var _a2;
      let x3 = m2.id ? f4.filter((g2) => g2.id !== m2.id) : f4;
      return ((_a2 = m2.selectors) == null ? void 0 : _a2.length) ? [...x3, m2] : x3;
    });
  }, "addHighlight"), F2 = /* @__PURE__ */ n$1((d4) => {
    d4 && r4.set((m2) => m2.filter((f4) => f4.id !== d4));
  }, "removeHighlight"), A4 = /* @__PURE__ */ n$1(() => {
    r4.set([]), o3.set(/* @__PURE__ */ new Map()), i4.set([]), s4.set(void 0), a4.set(void 0), p3.set([]), c3.set([]), l4.set(void 0), y3.set(void 0);
  }, "resetState"), S4, v2 = /* @__PURE__ */ n$1((d4, m2) => {
    let f4 = "scrollIntoView-highlight";
    clearTimeout(S4), F2(f4);
    let x3 = t4.querySelector(d4);
    if (!x3) {
      console.warn(`Cannot scroll into view: ${d4} not found`);
      return;
    }
    x3.scrollIntoView({ behavior: "smooth", block: "center", ...m2 });
    let g2 = `kf-${Math.random().toString(36).substring(2, 15)}`;
    r4.set((E4) => [
      ...E4,
      {
        id: f4,
        priority: 1e3,
        selectors: [d4],
        styles: {
          outline: "2px solid #1EA7FD",
          outlineOffset: "-1px",
          animation: `${g2} 3s linear forwards`
        },
        keyframes: `@keyframes ${g2} {
          0% { outline: 2px solid #1EA7FD; }
          20% { outline: 2px solid #1EA7FD00; }
          40% { outline: 2px solid #1EA7FD; }
          60% { outline: 2px solid #1EA7FD00; }
          80% { outline: 2px solid #1EA7FD; }
          100% { outline: 2px solid #1EA7FD00; }
        }`
      }
    ]), S4 = setTimeout(() => F2(f4), 3500);
  }, "scrollIntoView"), w2 = /* @__PURE__ */ n$1((d4) => {
    requestAnimationFrame(() => a4.set({ x: d4.pageX, y: d4.pageY }));
  }, "onMouseMove");
  t4.body.addEventListener("mousemove", w2), e4.on(rr$1, O2), e4.on(or$1, F2), e4.on(nr$1, A4), e4.on(ir$1, v2), e4.on(qo, ({ newPhase: d4 }) => {
    d4 === "loading" && A4();
  });
}, "useHighlights");
((_b = globalThis == null ? void 0 : globalThis.FEATURES) == null ? void 0 : _b.highlight) && (ur == null ? void 0 : ur.ready) && ur.ready().then(mr$1);
var st2 = /* @__PURE__ */ n$1(() => rc$1({}), "default");
var fr$1 = "measureEnabled";
const { useEffect: kr } = __STORYBOOK_MODULE_PREVIEW_API__;
const { global: be$1 } = __STORYBOOK_MODULE_GLOBAL__;
function yr$1() {
  let e4 = be$1.document.documentElement, t4 = Math.max(e4.scrollHeight, e4.offsetHeight);
  return { width: Math.max(e4.scrollWidth, e4.offsetWidth), height: t4 };
}
n$1(yr$1, "getDocumentWidthAndHeight");
function Jo() {
  let e4 = be$1.document.createElement("canvas");
  e4.id = "storybook-addon-measure";
  let t4 = e4.getContext("2d");
  ye$2(t4 != null);
  let { width: r4, height: o3 } = yr$1();
  return at(e4, t4, { width: r4, height: o3 }), e4.style.position = "absolute", e4.style.left = "0", e4.style.top = "0", e4.style.zIndex = "2147483647", e4.style.pointerEvents = "none", be$1.document.body.appendChild(e4), { canvas: e4, context: t4, width: r4, height: o3 };
}
n$1(Jo, "createCanvas");
function at(e4, t4, { width: r4, height: o3 }) {
  e4.style.width = `${r4}px`, e4.style.height = `${o3}px`;
  let i4 = be$1.window.devicePixelRatio;
  e4.width = Math.floor(r4 * i4), e4.height = Math.floor(o3 * i4), t4.scale(i4, i4);
}
n$1(at, "setCanvasWidthAndHeight");
var $$1 = {};
function gr() {
  $$1.canvas || ($$1 = Jo());
}
n$1(gr, "init");
function hr$1() {
  $$1.context && $$1.context.clearRect(0, 0, $$1.width ?? 0, $$1.height ?? 0);
}
n$1(hr$1, "clear");
function xr$1(e4) {
  hr$1(), e4($$1.context);
}
n$1(xr$1, "draw");
function br$1() {
  ye$2($$1.canvas, "Canvas should exist in the state."), ye$2($$1.context, "Context should exist in the state."), at($$1.canvas, $$1.context, {
    width: 0,
    height: 0
  });
  let { width: e4, height: t4 } = yr$1();
  at($$1.canvas, $$1.context, { width: e4, height: t4 }), $$1.width = e4, $$1.height = t4;
}
n$1(br$1, "rescale");
function Tr$1() {
  var _a2;
  $$1.canvas && (hr$1(), (_a2 = $$1.canvas.parentNode) == null ? void 0 : _a2.removeChild($$1.canvas), $$1 = {});
}
n$1(Tr$1, "destroy");
const { global: j$1 } = __STORYBOOK_MODULE_GLOBAL__;
var J$2 = {
  margin: "#f6b26b",
  border: "#ffe599",
  padding: "#93c47d",
  content: "#6fa8dc",
  text: "#232020"
}, G$1 = 6;
function Sr(e4, { x: t4, y: r4, w: o3, h: i4, r: s4 }) {
  t4 = t4 - o3 / 2, r4 = r4 - i4 / 2, o3 < 2 * s4 && (s4 = o3 / 2), i4 < 2 * s4 && (s4 = i4 / 2), e4.beginPath(), e4.moveTo(t4 + s4, r4), e4.arcTo(t4 + o3, r4, t4 + o3, r4 + i4, s4), e4.arcTo(t4 + o3, r4 + i4, t4, r4 + i4, s4), e4.arcTo(t4, r4 + i4, t4, r4, s4), e4.arcTo(t4, r4, t4 + o3, r4, s4), e4.closePath();
}
n$1(Sr, "roundedRect");
function Qo$1(e4, { padding: t4, border: r4, width: o3, height: i4, top: s4, left: a4 }) {
  let p3 = o3 - r4.left - r4.right - t4.left - t4.right, c3 = i4 - t4.top - t4.bottom - r4.top - r4.bottom, l4 = a4 + r4.left + t4.left, y3 = s4 + r4.top + t4.top;
  return e4 === "top" ? l4 += p3 / 2 : e4 === "right" ? (l4 += p3, y3 += c3 / 2) : e4 === "bottom" ? (l4 += p3 / 2, y3 += c3) : e4 === "left" ? y3 += c3 / 2 : e4 === "center" && (l4 += p3 / 2, y3 += c3 / 2), { x: l4, y: y3 };
}
n$1(Qo$1, "positionCoordinate");
function en$1(e4, t4, { margin: r4, border: o3, padding: i4 }, s4, a4) {
  let p3 = /* @__PURE__ */ n$1((h2) => 0, "shift"), c3 = 0, l4 = 0, y3 = a4 ? 1 : 0.5, u4 = a4 ? s4 * 2 : 0;
  return e4 === "padding" ? p3 = /* @__PURE__ */ n$1((h2) => i4[h2] * y3 + u4, "shift") : e4 === "border" ? p3 = /* @__PURE__ */ n$1((h2) => i4[h2] + o3[h2] * y3 + u4, "shift") : e4 === "margin" && (p3 = /* @__PURE__ */ n$1((h2) => i4[h2] + o3[h2] + r4[h2] * y3 + u4, "shift")), t4 === "top" ? l4 = -p3("top") : t4 === "right" ? c3 = p3("right") : t4 === "bottom" ? l4 = p3("bottom") : t4 === "left" && (c3 = -p3("left")), { offsetX: c3, offsetY: l4 };
}
n$1(en$1, "offset");
function tn$1(e4, t4) {
  return Math.abs(e4.x - t4.x) < Math.abs(e4.w + t4.w) / 2 && Math.abs(e4.y - t4.y) < Math.abs(e4.h + t4.h) / 2;
}
n$1(tn$1, "collide");
function rn$1(e4, t4, r4) {
  return e4 === "top" ? t4.y = r4.y - r4.h - G$1 : e4 === "right" ? t4.x = r4.x + r4.w / 2 + G$1 + t4.w / 2 : e4 === "bottom" ? t4.y = r4.y + r4.h + G$1 : e4 === "left" && (t4.x = r4.x - r4.w / 2 - G$1 - t4.w / 2), { x: t4.x, y: t4.y };
}
n$1(rn$1, "overlapAdjustment");
function Ar(e4, t4, { x: r4, y: o3, w: i4, h: s4 }, a4) {
  return Sr(e4, { x: r4, y: o3, w: i4, h: s4, r: 3 }), e4.fillStyle = `${J$2[t4]}dd`, e4.fill(), e4.strokeStyle = J$2[t4], e4.stroke(), e4.fillStyle = J$2.text, e4.fillText(a4, r4, o3), Sr(e4, { x: r4, y: o3, w: i4, h: s4, r: 3 }), e4.fillStyle = `${J$2[t4]}dd`, e4.fill(), e4.strokeStyle = J$2[t4], e4.stroke(), e4.fillStyle = J$2.text, e4.fillText(a4, r4, o3), { x: r4, y: o3, w: i4, h: s4 };
}
n$1(Ar, "textWithRect");
function Rr(e4, t4) {
  e4.font = "600 12px monospace", e4.textBaseline = "middle", e4.textAlign = "center";
  let r4 = e4.measureText(t4), o3 = r4.actualBoundingBoxAscent + r4.actualBoundingBoxDescent, i4 = r4.width + G$1 * 2, s4 = o3 + G$1 * 2;
  return { w: i4, h: s4 };
}
n$1(Rr, "configureText");
function on(e4, t4, { type: r4, position: o3 = "center", text: i4 }, s4, a4 = false) {
  let { x: p3, y: c3 } = Qo$1(o3, t4), { offsetX: l4, offsetY: y3 } = en$1(r4, o3, t4, G$1 + 1, a4);
  p3 += l4, c3 += y3;
  let { w: u4, h: h2 } = Rr(e4, i4);
  if (s4 && tn$1({ x: p3, y: c3, w: u4, h: h2 }, s4)) {
    let T4 = rn$1(o3, { x: p3, y: c3, w: u4 }, s4);
    p3 = T4.x, c3 = T4.y;
  }
  return Ar(e4, r4, { x: p3, y: c3, w: u4, h: h2 }, i4);
}
n$1(on, "drawLabel");
function nn$1(e4, { w: t4, h: r4 }) {
  let o3 = t4 * 0.5 + G$1, i4 = r4 * 0.5 + G$1;
  return {
    offsetX: (e4.x === "left" ? -1 : 1) * o3,
    offsetY: (e4.y === "top" ? -1 : 1) * i4
  };
}
n$1(nn$1, "floatingOffset");
function sn$1(e4, t4, { type: r4, text: o3 }) {
  let { floatingAlignment: i4, extremities: s4 } = t4, a4 = s4[i4.x], p3 = s4[i4.y], { w: c3, h: l4 } = Rr(e4, o3), { offsetX: y3, offsetY: u4 } = nn$1(i4, {
    w: c3,
    h: l4
  });
  return a4 += y3, p3 += u4, Ar(e4, r4, { x: a4, y: p3, w: c3, h: l4 }, o3);
}
n$1(sn$1, "drawFloatingLabel");
function pe$2(e4, t4, r4, o3) {
  let i4 = [];
  r4.forEach((s4, a4) => {
    let p3 = o3 && s4.position === "center" ? sn$1(e4, t4, s4) : on(e4, t4, s4, i4[a4 - 1], o3);
    i4[a4] = p3;
  });
}
n$1(pe$2, "drawStack");
function wr(e4, t4, r4, o3) {
  let i4 = r4.reduce((s4, a4) => {
    var _a2;
    return Object.prototype.hasOwnProperty.call(s4, a4.position) || (s4[a4.position] = []), (_a2 = s4[a4.position]) == null ? void 0 : _a2.push(a4), s4;
  }, {});
  i4.top && pe$2(e4, t4, i4.top, o3), i4.right && pe$2(e4, t4, i4.right, o3), i4.bottom && pe$2(e4, t4, i4.bottom, o3), i4.left && pe$2(e4, t4, i4.left, o3), i4.center && pe$2(e4, t4, i4.center, o3);
}
n$1(wr, "labelStacks");
var Te$1 = {
  margin: "#f6b26ba8",
  border: "#ffe599a8",
  padding: "#93c47d8c",
  content: "#6fa8dca8"
}, Er$1 = 30;
function _$1(e4) {
  return parseInt(e4.replace("px", ""), 10);
}
n$1(_$1, "pxToNumber");
function Q$1(e4) {
  return Number.isInteger(e4) ? e4 : e4.toFixed(2);
}
n$1(Q$1, "round");
function pt$1(e4) {
  return e4.filter((t4) => t4.text !== 0 && t4.text !== "0");
}
n$1(pt$1, "filterZeroValues");
function an(e4) {
  let t4 = {
    top: j$1.window.scrollY,
    bottom: j$1.window.scrollY + j$1.window.innerHeight,
    left: j$1.window.scrollX,
    right: j$1.window.scrollX + j$1.window.innerWidth
  }, r4 = {
    top: Math.abs(t4.top - e4.top),
    bottom: Math.abs(t4.bottom - e4.bottom),
    left: Math.abs(t4.left - e4.left),
    right: Math.abs(t4.right - e4.right)
  };
  return {
    x: r4.left > r4.right ? "left" : "right",
    y: r4.top > r4.bottom ? "top" : "bottom"
  };
}
n$1(an, "floatingAlignment");
function pn$1(e4) {
  let t4 = j$1.getComputedStyle(e4), { top: r4, left: o3, right: i4, bottom: s4, width: a4, height: p3 } = e4.getBoundingClientRect(), {
    marginTop: c3,
    marginBottom: l4,
    marginLeft: y3,
    marginRight: u4,
    paddingTop: h2,
    paddingBottom: T4,
    paddingLeft: R4,
    paddingRight: P2,
    borderBottomWidth: L4,
    borderTopWidth: O2,
    borderLeftWidth: F2,
    borderRightWidth: A4
  } = t4;
  r4 = r4 + j$1.window.scrollY, o3 = o3 + j$1.window.scrollX, s4 = s4 + j$1.window.scrollY, i4 = i4 + j$1.window.scrollX;
  let S4 = {
    top: _$1(c3),
    bottom: _$1(l4),
    left: _$1(y3),
    right: _$1(u4)
  }, v2 = {
    top: _$1(h2),
    bottom: _$1(T4),
    left: _$1(R4),
    right: _$1(P2)
  }, w2 = {
    top: _$1(O2),
    bottom: _$1(L4),
    left: _$1(F2),
    right: _$1(A4)
  }, d4 = {
    top: r4 - S4.top,
    bottom: s4 + S4.bottom,
    left: o3 - S4.left,
    right: i4 + S4.right
  };
  return {
    margin: S4,
    padding: v2,
    border: w2,
    top: r4,
    left: o3,
    bottom: s4,
    right: i4,
    width: a4,
    height: p3,
    extremities: d4,
    floatingAlignment: an(d4)
  };
}
n$1(pn$1, "measureElement");
function ln(e4, { margin: t4, width: r4, height: o3, top: i4, left: s4, bottom: a4, right: p3 }) {
  let c3 = o3 + t4.bottom + t4.top;
  e4.fillStyle = Te$1.margin, e4.fillRect(s4, i4 - t4.top, r4, t4.top), e4.fillRect(p3, i4 - t4.top, t4.right, c3), e4.fillRect(s4, a4, r4, t4.bottom), e4.fillRect(
    s4 - t4.left,
    i4 - t4.top,
    t4.left,
    c3
  );
  let l4 = [
    {
      type: "margin",
      text: Q$1(t4.top),
      position: "top"
    },
    {
      type: "margin",
      text: Q$1(t4.right),
      position: "right"
    },
    {
      type: "margin",
      text: Q$1(t4.bottom),
      position: "bottom"
    },
    {
      type: "margin",
      text: Q$1(t4.left),
      position: "left"
    }
  ];
  return pt$1(l4);
}
n$1(ln, "drawMargin");
function cn(e4, { padding: t4, border: r4, width: o3, height: i4, top: s4, left: a4, bottom: p3, right: c3 }) {
  let l4 = o3 - r4.left - r4.right, y3 = i4 - t4.top - t4.bottom - r4.top - r4.bottom;
  e4.fillStyle = Te$1.padding, e4.fillRect(a4 + r4.left, s4 + r4.top, l4, t4.top), e4.fillRect(
    c3 - t4.right - r4.right,
    s4 + t4.top + r4.top,
    t4.right,
    y3
  ), e4.fillRect(
    a4 + r4.left,
    p3 - t4.bottom - r4.bottom,
    l4,
    t4.bottom
  ), e4.fillRect(a4 + r4.left, s4 + t4.top + r4.top, t4.left, y3);
  let u4 = [
    {
      type: "padding",
      text: t4.top,
      position: "top"
    },
    {
      type: "padding",
      text: t4.right,
      position: "right"
    },
    {
      type: "padding",
      text: t4.bottom,
      position: "bottom"
    },
    {
      type: "padding",
      text: t4.left,
      position: "left"
    }
  ];
  return pt$1(u4);
}
n$1(cn, "drawPadding");
function dn$1(e4, { border: t4, width: r4, height: o3, top: i4, left: s4, bottom: a4, right: p3 }) {
  let c3 = o3 - t4.top - t4.bottom;
  e4.fillStyle = Te$1.border, e4.fillRect(s4, i4, r4, t4.top), e4.fillRect(s4, a4 - t4.bottom, r4, t4.bottom), e4.fillRect(s4, i4 + t4.top, t4.left, c3), e4.fillRect(
    p3 - t4.right,
    i4 + t4.top,
    t4.right,
    c3
  );
  let l4 = [
    {
      type: "border",
      text: t4.top,
      position: "top"
    },
    {
      type: "border",
      text: t4.right,
      position: "right"
    },
    {
      type: "border",
      text: t4.bottom,
      position: "bottom"
    },
    {
      type: "border",
      text: t4.left,
      position: "left"
    }
  ];
  return pt$1(l4);
}
n$1(dn$1, "drawBorder");
function mn$1(e4, { padding: t4, border: r4, width: o3, height: i4, top: s4, left: a4 }) {
  let p3 = o3 - r4.left - r4.right - t4.left - t4.right, c3 = i4 - t4.top - t4.bottom - r4.top - r4.bottom;
  return e4.fillStyle = Te$1.content, e4.fillRect(
    a4 + r4.left + t4.left,
    s4 + r4.top + t4.top,
    p3,
    c3
  ), [
    {
      type: "content",
      position: "center",
      text: `${Q$1(p3)} x ${Q$1(c3)}`
    }
  ];
}
n$1(mn$1, "drawContent");
function un$1(e4) {
  return (t4) => {
    if (e4 && t4) {
      let r4 = pn$1(e4), o3 = ln(t4, r4), i4 = cn(t4, r4), s4 = dn$1(t4, r4), a4 = mn$1(t4, r4), p3 = r4.width <= Er$1 * 3 || r4.height <= Er$1;
      wr(
        t4,
        r4,
        [...a4, ...i4, ...s4, ...o3],
        p3
      );
    }
  };
}
n$1(un$1, "drawBoxModel");
function Cr$1(e4) {
  xr$1(un$1(e4));
}
n$1(Cr$1, "drawSelectedElement");
const { global: fn } = __STORYBOOK_MODULE_GLOBAL__;
var vr = /* @__PURE__ */ n$1((e4, t4) => {
  let r4 = fn.document.elementFromPoint(e4, t4), o3 = /* @__PURE__ */ n$1((s4) => {
    if (s4 && s4.shadowRoot) {
      let a4 = s4.shadowRoot.elementFromPoint(e4, t4);
      return s4.isEqualNode(a4) ? s4 : a4.shadowRoot ? o3(a4) : a4;
    }
    return s4;
  }, "crawlShadows");
  return o3(r4) || r4;
}, "deepElementFromPoint");
var Pr, Se$2 = { x: 0, y: 0 };
function Or$1(e4, t4) {
  Pr = vr(e4, t4), Cr$1(Pr);
}
n$1(Or$1, "findAndDrawElement");
var Mr$1 = /* @__PURE__ */ n$1((e4, t4) => {
  let { measureEnabled: r4 } = t4.globals || {};
  return kr(() => {
    if (typeof globalThis.document > "u")
      return;
    let o3 = /* @__PURE__ */ n$1((i4) => {
      window.requestAnimationFrame(() => {
        i4.stopPropagation(), Se$2.x = i4.clientX, Se$2.y = i4.clientY;
      });
    }, "onPointerMove");
    return globalThis.document.addEventListener("pointermove", o3), () => {
      globalThis.document.removeEventListener("pointermove", o3);
    };
  }, []), kr(() => {
    let o3 = /* @__PURE__ */ n$1((s4) => {
      window.requestAnimationFrame(() => {
        s4.stopPropagation(), Or$1(s4.clientX, s4.clientY);
      });
    }, "onPointerOver"), i4 = /* @__PURE__ */ n$1(() => {
      window.requestAnimationFrame(() => {
        br$1();
      });
    }, "onResize");
    return t4.viewMode === "story" && r4 && (globalThis.document.addEventListener("pointerover", o3), gr(), globalThis.window.addEventListener(
      "resize",
      i4
    ), Or$1(Se$2.x, Se$2.y)), () => {
      globalThis.window.removeEventListener("resize", i4), Tr$1();
    };
  }, [r4, t4.viewMode]), e4();
}, "withMeasure");
var gn$1 = ((_c2 = globalThis.FEATURES) == null ? void 0 : _c2.measure) ? [Mr$1] : [], hn$1 = {
  [fr$1]: false
}, lt$1 = /* @__PURE__ */ n$1(() => rc$1({
  decorators: gn$1,
  initialGlobals: hn$1
}), "default");
var Ae$2 = "outline";
const { useEffect: bn, useMemo: Tn } = __STORYBOOK_MODULE_PREVIEW_API__;
const { global: Re$1 } = __STORYBOOK_MODULE_GLOBAL__;
var ct$1 = /* @__PURE__ */ n$1((e4) => {
  (Array.isArray(e4) ? e4 : [e4]).forEach(xn$1);
}, "clearStyles"), xn$1 = /* @__PURE__ */ n$1((e4) => {
  let t4 = typeof e4 == "string" ? e4 : e4.join(""), r4 = Re$1.document.getElementById(t4);
  r4 && r4.parentElement && r4.parentElement.removeChild(r4);
}, "clearStyle"), $r$1 = /* @__PURE__ */ n$1((e4, t4) => {
  let r4 = Re$1.document.getElementById(e4);
  if (r4)
    r4.innerHTML !== t4 && (r4.innerHTML = t4);
  else {
    let o3 = Re$1.document.createElement("style");
    o3.setAttribute("id", e4), o3.innerHTML = t4, Re$1.document.head.appendChild(o3);
  }
}, "addOutlineStyles");
function dt$1(e4) {
  return W$2`
    ${e4} body {
      outline: 1px solid #2980b9 !important;
    }

    ${e4} article {
      outline: 1px solid #3498db !important;
    }

    ${e4} nav {
      outline: 1px solid #0088c3 !important;
    }

    ${e4} aside {
      outline: 1px solid #33a0ce !important;
    }

    ${e4} section {
      outline: 1px solid #66b8da !important;
    }

    ${e4} header {
      outline: 1px solid #99cfe7 !important;
    }

    ${e4} footer {
      outline: 1px solid #cce7f3 !important;
    }

    ${e4} h1 {
      outline: 1px solid #162544 !important;
    }

    ${e4} h2 {
      outline: 1px solid #314e6e !important;
    }

    ${e4} h3 {
      outline: 1px solid #3e5e85 !important;
    }

    ${e4} h4 {
      outline: 1px solid #449baf !important;
    }

    ${e4} h5 {
      outline: 1px solid #c7d1cb !important;
    }

    ${e4} h6 {
      outline: 1px solid #4371d0 !important;
    }

    ${e4} main {
      outline: 1px solid #2f4f90 !important;
    }

    ${e4} address {
      outline: 1px solid #1a2c51 !important;
    }

    ${e4} div {
      outline: 1px solid #036cdb !important;
    }

    ${e4} p {
      outline: 1px solid #ac050b !important;
    }

    ${e4} hr {
      outline: 1px solid #ff063f !important;
    }

    ${e4} pre {
      outline: 1px solid #850440 !important;
    }

    ${e4} blockquote {
      outline: 1px solid #f1b8e7 !important;
    }

    ${e4} ol {
      outline: 1px solid #ff050c !important;
    }

    ${e4} ul {
      outline: 1px solid #d90416 !important;
    }

    ${e4} li {
      outline: 1px solid #d90416 !important;
    }

    ${e4} dl {
      outline: 1px solid #fd3427 !important;
    }

    ${e4} dt {
      outline: 1px solid #ff0043 !important;
    }

    ${e4} dd {
      outline: 1px solid #e80174 !important;
    }

    ${e4} figure {
      outline: 1px solid #ff00bb !important;
    }

    ${e4} figcaption {
      outline: 1px solid #bf0032 !important;
    }

    ${e4} table {
      outline: 1px solid #00cc99 !important;
    }

    ${e4} caption {
      outline: 1px solid #37ffc4 !important;
    }

    ${e4} thead {
      outline: 1px solid #98daca !important;
    }

    ${e4} tbody {
      outline: 1px solid #64a7a0 !important;
    }

    ${e4} tfoot {
      outline: 1px solid #22746b !important;
    }

    ${e4} tr {
      outline: 1px solid #86c0b2 !important;
    }

    ${e4} th {
      outline: 1px solid #a1e7d6 !important;
    }

    ${e4} td {
      outline: 1px solid #3f5a54 !important;
    }

    ${e4} col {
      outline: 1px solid #6c9a8f !important;
    }

    ${e4} colgroup {
      outline: 1px solid #6c9a9d !important;
    }

    ${e4} button {
      outline: 1px solid #da8301 !important;
    }

    ${e4} datalist {
      outline: 1px solid #c06000 !important;
    }

    ${e4} fieldset {
      outline: 1px solid #d95100 !important;
    }

    ${e4} form {
      outline: 1px solid #d23600 !important;
    }

    ${e4} input {
      outline: 1px solid #fca600 !important;
    }

    ${e4} keygen {
      outline: 1px solid #b31e00 !important;
    }

    ${e4} label {
      outline: 1px solid #ee8900 !important;
    }

    ${e4} legend {
      outline: 1px solid #de6d00 !important;
    }

    ${e4} meter {
      outline: 1px solid #e8630c !important;
    }

    ${e4} optgroup {
      outline: 1px solid #b33600 !important;
    }

    ${e4} option {
      outline: 1px solid #ff8a00 !important;
    }

    ${e4} output {
      outline: 1px solid #ff9619 !important;
    }

    ${e4} progress {
      outline: 1px solid #e57c00 !important;
    }

    ${e4} select {
      outline: 1px solid #e26e0f !important;
    }

    ${e4} textarea {
      outline: 1px solid #cc5400 !important;
    }

    ${e4} details {
      outline: 1px solid #33848f !important;
    }

    ${e4} summary {
      outline: 1px solid #60a1a6 !important;
    }

    ${e4} command {
      outline: 1px solid #438da1 !important;
    }

    ${e4} menu {
      outline: 1px solid #449da6 !important;
    }

    ${e4} del {
      outline: 1px solid #bf0000 !important;
    }

    ${e4} ins {
      outline: 1px solid #400000 !important;
    }

    ${e4} img {
      outline: 1px solid #22746b !important;
    }

    ${e4} iframe {
      outline: 1px solid #64a7a0 !important;
    }

    ${e4} embed {
      outline: 1px solid #98daca !important;
    }

    ${e4} object {
      outline: 1px solid #00cc99 !important;
    }

    ${e4} param {
      outline: 1px solid #37ffc4 !important;
    }

    ${e4} video {
      outline: 1px solid #6ee866 !important;
    }

    ${e4} audio {
      outline: 1px solid #027353 !important;
    }

    ${e4} source {
      outline: 1px solid #012426 !important;
    }

    ${e4} canvas {
      outline: 1px solid #a2f570 !important;
    }

    ${e4} track {
      outline: 1px solid #59a600 !important;
    }

    ${e4} map {
      outline: 1px solid #7be500 !important;
    }

    ${e4} area {
      outline: 1px solid #305900 !important;
    }

    ${e4} a {
      outline: 1px solid #ff62ab !important;
    }

    ${e4} em {
      outline: 1px solid #800b41 !important;
    }

    ${e4} strong {
      outline: 1px solid #ff1583 !important;
    }

    ${e4} i {
      outline: 1px solid #803156 !important;
    }

    ${e4} b {
      outline: 1px solid #cc1169 !important;
    }

    ${e4} u {
      outline: 1px solid #ff0430 !important;
    }

    ${e4} s {
      outline: 1px solid #f805e3 !important;
    }

    ${e4} small {
      outline: 1px solid #d107b2 !important;
    }

    ${e4} abbr {
      outline: 1px solid #4a0263 !important;
    }

    ${e4} q {
      outline: 1px solid #240018 !important;
    }

    ${e4} cite {
      outline: 1px solid #64003c !important;
    }

    ${e4} dfn {
      outline: 1px solid #b4005a !important;
    }

    ${e4} sub {
      outline: 1px solid #dba0c8 !important;
    }

    ${e4} sup {
      outline: 1px solid #cc0256 !important;
    }

    ${e4} time {
      outline: 1px solid #d6606d !important;
    }

    ${e4} code {
      outline: 1px solid #e04251 !important;
    }

    ${e4} kbd {
      outline: 1px solid #5e001f !important;
    }

    ${e4} samp {
      outline: 1px solid #9c0033 !important;
    }

    ${e4} var {
      outline: 1px solid #d90047 !important;
    }

    ${e4} mark {
      outline: 1px solid #ff0053 !important;
    }

    ${e4} bdi {
      outline: 1px solid #bf3668 !important;
    }

    ${e4} bdo {
      outline: 1px solid #6f1400 !important;
    }

    ${e4} ruby {
      outline: 1px solid #ff7b93 !important;
    }

    ${e4} rt {
      outline: 1px solid #ff2f54 !important;
    }

    ${e4} rp {
      outline: 1px solid #803e49 !important;
    }

    ${e4} span {
      outline: 1px solid #cc2643 !important;
    }

    ${e4} br {
      outline: 1px solid #db687d !important;
    }

    ${e4} wbr {
      outline: 1px solid #db175b !important;
    }`;
}
n$1(dt$1, "outlineCSS");
var Fr$1 = /* @__PURE__ */ n$1((e4, t4) => {
  let r4 = t4.globals || {}, o3 = [true, "true"].includes(r4[Ae$2]), i4 = t4.viewMode === "docs", s4 = Tn(() => dt$1(i4 ? '[data-story-block="true"]' : ".sb-show-main"), [t4]);
  return bn(() => {
    let a4 = i4 ? `addon-outline-docs-${t4.id}` : "addon-outline";
    return o3 ? $r$1(a4, s4) : ct$1(a4), () => {
      ct$1(a4);
    };
  }, [o3, s4, t4]), e4();
}, "withOutline");
var An$1 = ((_d2 = globalThis.FEATURES) == null ? void 0 : _d2.outline) ? [Fr$1] : [], Rn$1 = {
  [Ae$2]: false
}, mt$1 = /* @__PURE__ */ n$1(() => rc$1({ decorators: An$1, initialGlobals: Rn$1 }), "default");
const {
  clearAllMocks: Cn$1,
  fn: vn$1,
  isMockFunction: kn$1,
  resetAllMocks: Pn$1,
  restoreAllMocks: On$1,
  uninstrumentedUserEvent: Mn$1,
  within: $n$1
} = __STORYBOOK_MODULE_TEST__;
var Fn$1 = /* @__PURE__ */ n$1(({ parameters: e4 }) => {
  var _a2, _b2, _c3;
  ((_a2 = e4 == null ? void 0 : e4.test) == null ? void 0 : _a2.mockReset) === true ? Pn$1() : ((_b2 = e4 == null ? void 0 : e4.test) == null ? void 0 : _b2.clearMocks) === true ? Cn$1() : ((_c3 = e4 == null ? void 0 : e4.test) == null ? void 0 : _c3.restoreMocks) !== false && On$1();
}, "resetAllMocksLoader"), ut$1 = /* @__PURE__ */ n$1((e4, t4 = 0, r4) => {
  var _a2, _b2;
  if (t4 > 5 || e4 == null)
    return e4;
  if (kn$1(e4))
    return r4 && e4.mockName(r4), e4;
  if (typeof e4 == "function" && "isAction" in e4 && e4.isAction && !("implicit" in e4 && e4.implicit)) {
    let o3 = vn$1(e4);
    return r4 && o3.mockName(r4), o3;
  }
  if (Array.isArray(e4)) {
    t4++;
    for (let o3 = 0; o3 < e4.length; o3++)
      ((_a2 = Object.getOwnPropertyDescriptor(e4, o3)) == null ? void 0 : _a2.writable) && (e4[o3] = ut$1(e4[o3], t4));
    return e4;
  }
  if (typeof e4 == "object" && e4.constructor === Object) {
    t4++;
    for (let [o3, i4] of Object.entries(e4))
      ((_b2 = Object.getOwnPropertyDescriptor(e4, o3)) == null ? void 0 : _b2.writable) && (e4[o3] = ut$1(i4, t4, o3));
    return e4;
  }
  return e4;
}, "traverseArgs"), In = /* @__PURE__ */ n$1(({ initialArgs: e4 }) => {
  ut$1(e4);
}, "nameSpiesAndWrapActionsInSpies"), Ir = false, Ln = /* @__PURE__ */ n$1(async (e4) => {
  var _a2, _b2;
  globalThis.HTMLElement && e4.canvasElement instanceof globalThis.HTMLElement && (e4.canvas = $n$1(e4.canvasElement));
  let t4 = (_b2 = (_a2 = globalThis.window) == null ? void 0 : _a2.navigator) == null ? void 0 : _b2.clipboard;
  if (t4) {
    e4.userEvent = Qs(
      { userEvent: Mn$1.setup() },
      {
        intercept: true,
        getKeys: /* @__PURE__ */ n$1((o3) => Object.keys(o3).filter((i4) => i4 !== "eventWrapper"), "getKeys")
      }
    ).userEvent, Object.defineProperty(globalThis.window.navigator, "clipboard", {
      get: /* @__PURE__ */ n$1(() => t4, "get"),
      configurable: true
    });
    let r4 = HTMLElement.prototype.focus;
    Ir || Object.defineProperties(HTMLElement.prototype, {
      focus: {
        configurable: true,
        set: /* @__PURE__ */ n$1((o3) => {
          r4 = o3, Ir = true;
        }, "set"),
        get: /* @__PURE__ */ n$1(() => r4, "get")
      }
    });
  }
}, "enhanceContext"), ft = /* @__PURE__ */ n$1(() => rc$1({
  loaders: [Fn$1, In, Ln]
}), "default");
var Dr$1 = "viewport";
var _n$1 = {
  [Dr$1]: { value: void 0, isRotated: false }
}, yt$1 = /* @__PURE__ */ n$1(() => rc$1({
  initialGlobals: _n$1
}), "default");
function _r$1() {
  return [
    // @ts-expect-error CJS fallback
    (lt$1.default ?? lt$1)(),
    // @ts-expect-error CJS fallback
    (Je$1.default ?? Je$1)(),
    // @ts-expect-error CJS fallback
    (st2.default ?? st2)(),
    // @ts-expect-error CJS fallback
    (mt$1.default ?? mt$1)(),
    // @ts-expect-error CJS fallback
    (yt$1.default ?? yt$1)(),
    // @ts-expect-error CJS fallback
    (Xe$2.default ?? Xe$2)(),
    // @ts-expect-error CJS fallback
    (Qe$1.default ?? Qe$1)(),
    // @ts-expect-error CJS fallback
    (ft.default ?? ft)()
  ];
}
n$1(_r$1, "getCoreAnnotations");
function tc$1(e4) {
  let t4, r4 = {
    _tag: "Preview",
    input: e4,
    get composed() {
      if (t4)
        return t4;
      let { addons: o3, ...i4 } = e4;
      return t4 = te$2(
        ne$2([..._r$1(), ...o3 ?? [], i4])
      ), t4;
    },
    meta(o3) {
      return Nn$1(o3, this);
    }
  };
  return globalThis.globalProjectAnnotations = r4.composed, r4;
}
n$1(tc$1, "definePreview");
function rc$1(e4) {
  return e4;
}
n$1(rc$1, "definePreviewAddon");
function oc$1(e4) {
  return e4 != null && typeof e4 == "object" && "_tag" in e4 && (e4 == null ? void 0 : e4._tag) === "Preview";
}
n$1(oc$1, "isPreview");
function nc$1(e4) {
  return e4 != null && typeof e4 == "object" && "_tag" in e4 && (e4 == null ? void 0 : e4._tag) === "Meta";
}
n$1(nc$1, "isMeta");
function Nn$1(e4, t4) {
  return {
    _tag: "Meta",
    input: e4,
    preview: t4,
    get composed() {
      throw new Error("Not implemented");
    },
    // @ts-expect-error hard
    story(r4 = {}) {
      return Hr$1(typeof r4 == "function" ? { render: r4 } : r4, this);
    }
  };
}
n$1(Nn$1, "defineMeta");
function ic$1(e4) {
  return e4 != null && typeof e4 == "object" && "_tag" in e4 && (e4 == null ? void 0 : e4._tag) === "Story";
}
n$1(ic$1, "isStory");
function Hr$1(e4, t4) {
  let r4, o3 = /* @__PURE__ */ n$1(() => (r4 || (r4 = We$1(
    e4,
    t4.input,
    void 0,
    t4.preview.composed
  )), r4), "compose");
  return {
    _tag: "Story",
    input: e4,
    meta: t4,
    __compose: o3,
    get composed() {
      let i4 = o3(), { args: s4, argTypes: a4, parameters: p3, id: c3, tags: l4, globals: y3, storyName: u4 } = i4;
      return { args: s4, argTypes: a4, parameters: p3, id: c3, tags: l4, name: u4, globals: y3 };
    },
    get play() {
      var _a2;
      return e4.play ?? ((_a2 = t4.input) == null ? void 0 : _a2.play) ?? (async () => {
      });
    },
    get run() {
      return o3().run ?? (async () => {
      });
    },
    extend(i4) {
      var _a2, _b2, _c3, _d3;
      return Hr$1(
        {
          ...this.input,
          ...i4,
          args: { ...this.input.args, ...i4.args },
          argTypes: D$1(this.input.argTypes, i4.argTypes),
          afterEach: [
            ...b$1(((_a2 = this.input) == null ? void 0 : _a2.afterEach) ?? []),
            ...b$1(i4.afterEach ?? [])
          ],
          beforeEach: [
            ...b$1(((_b2 = this.input) == null ? void 0 : _b2.beforeEach) ?? []),
            ...b$1(i4.beforeEach ?? [])
          ],
          decorators: [
            ...b$1(((_c3 = this.input) == null ? void 0 : _c3.decorators) ?? []),
            ...b$1(i4.decorators ?? [])
          ],
          globals: { ...this.input.globals, ...i4.globals },
          loaders: [
            ...b$1(((_d3 = this.input) == null ? void 0 : _d3.loaders) ?? []),
            ...b$1(i4.loaders ?? [])
          ],
          parameters: D$1(this.input.parameters, i4.parameters),
          tags: uc$1(...this.input.tags ?? [], ...i4.tags ?? [])
        },
        this.meta
      );
    }
  };
}
n$1(Hr$1, "defineStory");
var jn$1 = /* @__PURE__ */ n$1((e4) => e4.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "-").replace(
  /-+/g,
  "-"
).replace(/^-+/, "").replace(/-+$/, ""), "sanitize"), Nr$1 = /* @__PURE__ */ n$1((e4, t4) => {
  let r4 = jn$1(e4);
  if (r4 === "")
    throw new Error(`Invalid ${t4} '${e4}', must include alphanumeric characters`);
  return r4;
}, "sanitizeSafe"), lc$1 = /* @__PURE__ */ n$1((e4, t4) => `${Nr$1(e4, "kind")}${t4 ? `--${Nr$1(t4, "name")}` : ""}`, "toId"), cc$1 = /* @__PURE__ */ n$1((e4) => bt$1(
  e4
), "storyNameFromExport");
function jr$1(e4, t4) {
  return Array.isArray(t4) ? t4.includes(e4) : e4.match(t4);
}
n$1(jr$1, "matches");
function dc$1(e4, { includeStories: t4, excludeStories: r4 }) {
  return (
    // https://babeljs.io/docs/en/babel-plugin-transform-modules-commonjs
    e4 !== "__esModule" && (!t4 || jr$1(e4, t4)) && (!r4 || !jr$1(e4, r4))
  );
}
n$1(dc$1, "isExportStory");
var uc$1 = /* @__PURE__ */ n$1((...e4) => {
  let t4 = e4.reduce((r4, o3) => (o3.startsWith("!") ? r4.delete(o3.slice(1)) : r4.add(o3), r4), /* @__PURE__ */ new Set());
  return Array.from(t4);
}, "combineTags");
function debounce$1(func, debounceMs, { signal, edges } = {}) {
  let pendingThis, pendingArgs = null, leading = edges != null && edges.includes("leading"), trailing = edges == null || edges.includes("trailing"), invoke = () => {
    pendingArgs !== null && (func.apply(pendingThis, pendingArgs), pendingThis = void 0, pendingArgs = null);
  }, onTimerEnd = () => {
    trailing && invoke(), cancel();
  }, timeoutId = null, schedule = () => {
    timeoutId != null && clearTimeout(timeoutId), timeoutId = setTimeout(() => {
      timeoutId = null, onTimerEnd();
    }, debounceMs);
  }, cancelTimer = () => {
    timeoutId !== null && (clearTimeout(timeoutId), timeoutId = null);
  }, cancel = () => {
    cancelTimer(), pendingThis = void 0, pendingArgs = null;
  }, flush = () => {
    cancelTimer(), invoke();
  }, debounced = function(...args) {
    if (signal == null ? void 0 : signal.aborted) return;
    pendingThis = this, pendingArgs = args;
    let isFirstCall = timeoutId == null;
    schedule(), leading && isFirstCall && invoke();
  };
  return debounced.schedule = schedule, debounced.cancel = cancel, debounced.flush = flush, signal == null ? void 0 : signal.addEventListener("abort", cancel, { once: true }), debounced;
}
function debounce2(func, debounceMs = 0, options = {}) {
  typeof options != "object" && (options = {});
  let { signal, leading = false, trailing = true, maxWait } = options, edges = Array(2);
  leading && (edges[0] = "leading"), trailing && (edges[1] = "trailing");
  let result, pendingAt = null, _debounced = debounce$1(function(...args) {
    result = func.apply(this, args), pendingAt = null;
  }, debounceMs, { signal, edges }), debounced = function(...args) {
    if (maxWait != null) {
      if (pendingAt === null) pendingAt = Date.now();
      else if (Date.now() - pendingAt >= maxWait) return result = func.apply(this, args), pendingAt = Date.now(), _debounced.cancel(), _debounced.schedule(), result;
    }
    return _debounced.apply(this, args), result;
  }, flush = () => (_debounced.flush(), result);
  return debounced.cancel = _debounced.cancel, debounced.flush = flush, debounced;
}
function isSymbol(value2) {
  return typeof value2 == "symbol" || value2 instanceof Symbol;
}
function toNumber(value2) {
  return isSymbol(value2) ? NaN : Number(value2);
}
function toFinite(value2) {
  return value2 ? (value2 = toNumber(value2), value2 === 1 / 0 || value2 === -1 / 0 ? (value2 < 0 ? -1 : 1) * Number.MAX_VALUE : value2 === value2 ? value2 : 0) : value2 === 0 ? value2 : 0;
}
function toInteger(value2) {
  let finite = toFinite(value2), remainder = finite % 1;
  return remainder ? finite - remainder : finite;
}
function uniq(arr) {
  return Array.from(new Set(arr));
}
function isPrimitive(value2) {
  return value2 == null || typeof value2 != "object" && typeof value2 != "function";
}
function isTypedArray(x3) {
  return ArrayBuffer.isView(x3) && !(x3 instanceof DataView);
}
function getSymbols(object2) {
  return Object.getOwnPropertySymbols(object2).filter((symbol) => Object.prototype.propertyIsEnumerable.call(object2, symbol));
}
function getTag(value2) {
  return value2 == null ? value2 === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value2);
}
var regexpTag = "[object RegExp]", stringTag = "[object String]", numberTag = "[object Number]", booleanTag = "[object Boolean]", argumentsTag = "[object Arguments]", symbolTag = "[object Symbol]", dateTag = "[object Date]", mapTag = "[object Map]", setTag = "[object Set]", arrayTag = "[object Array]";
var arrayBufferTag = "[object ArrayBuffer]", objectTag = "[object Object]";
var dataViewTag = "[object DataView]", uint8ArrayTag = "[object Uint8Array]", uint8ClampedArrayTag = "[object Uint8ClampedArray]", uint16ArrayTag = "[object Uint16Array]", uint32ArrayTag = "[object Uint32Array]";
var int8ArrayTag = "[object Int8Array]", int16ArrayTag = "[object Int16Array]", int32ArrayTag = "[object Int32Array]";
var float32ArrayTag = "[object Float32Array]", float64ArrayTag = "[object Float64Array]";
function cloneDeepWith(obj, cloneValue) {
  return cloneDeepWithImpl(obj, void 0, obj, /* @__PURE__ */ new Map(), cloneValue);
}
function cloneDeepWithImpl(valueToClone, keyToClone, objectToClone, stack = /* @__PURE__ */ new Map(), cloneValue = void 0) {
  let cloned = cloneValue == null ? void 0 : cloneValue(valueToClone, keyToClone, objectToClone, stack);
  if (cloned != null) return cloned;
  if (isPrimitive(valueToClone)) return valueToClone;
  if (stack.has(valueToClone)) return stack.get(valueToClone);
  if (Array.isArray(valueToClone)) {
    let result = new Array(valueToClone.length);
    stack.set(valueToClone, result);
    for (let i4 = 0; i4 < valueToClone.length; i4++) result[i4] = cloneDeepWithImpl(valueToClone[i4], i4, objectToClone, stack, cloneValue);
    return Object.hasOwn(valueToClone, "index") && (result.index = valueToClone.index), Object.hasOwn(valueToClone, "input") && (result.input = valueToClone.input), result;
  }
  if (valueToClone instanceof Date) return new Date(valueToClone.getTime());
  if (valueToClone instanceof RegExp) {
    let result = new RegExp(valueToClone.source, valueToClone.flags);
    return result.lastIndex = valueToClone.lastIndex, result;
  }
  if (valueToClone instanceof Map) {
    let result = /* @__PURE__ */ new Map();
    stack.set(valueToClone, result);
    for (let [key, value2] of valueToClone) result.set(key, cloneDeepWithImpl(value2, key, objectToClone, stack, cloneValue));
    return result;
  }
  if (valueToClone instanceof Set) {
    let result = /* @__PURE__ */ new Set();
    stack.set(valueToClone, result);
    for (let value2 of valueToClone) result.add(cloneDeepWithImpl(value2, void 0, objectToClone, stack, cloneValue));
    return result;
  }
  if (typeof Buffer < "u" && Buffer.isBuffer(valueToClone)) return valueToClone.subarray();
  if (isTypedArray(valueToClone)) {
    let result = new (Object.getPrototypeOf(valueToClone)).constructor(valueToClone.length);
    stack.set(valueToClone, result);
    for (let i4 = 0; i4 < valueToClone.length; i4++) result[i4] = cloneDeepWithImpl(valueToClone[i4], i4, objectToClone, stack, cloneValue);
    return result;
  }
  if (valueToClone instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && valueToClone instanceof SharedArrayBuffer) return valueToClone.slice(0);
  if (valueToClone instanceof DataView) {
    let result = new DataView(valueToClone.buffer.slice(0), valueToClone.byteOffset, valueToClone.byteLength);
    return stack.set(valueToClone, result), copyProperties(result, valueToClone, objectToClone, stack, cloneValue), result;
  }
  if (typeof File < "u" && valueToClone instanceof File) {
    let result = new File([valueToClone], valueToClone.name, { type: valueToClone.type });
    return stack.set(valueToClone, result), copyProperties(result, valueToClone, objectToClone, stack, cloneValue), result;
  }
  if (valueToClone instanceof Blob) {
    let result = new Blob([valueToClone], { type: valueToClone.type });
    return stack.set(valueToClone, result), copyProperties(result, valueToClone, objectToClone, stack, cloneValue), result;
  }
  if (valueToClone instanceof Error) {
    let result = new valueToClone.constructor();
    return stack.set(valueToClone, result), result.message = valueToClone.message, result.name = valueToClone.name, result.stack = valueToClone.stack, result.cause = valueToClone.cause, copyProperties(result, valueToClone, objectToClone, stack, cloneValue), result;
  }
  if (typeof valueToClone == "object" && isCloneableObject(valueToClone)) {
    let result = Object.create(Object.getPrototypeOf(valueToClone));
    return stack.set(valueToClone, result), copyProperties(result, valueToClone, objectToClone, stack, cloneValue), result;
  }
  return valueToClone;
}
function copyProperties(target, source, objectToClone = target, stack, cloneValue) {
  let keys = [...Object.keys(source), ...getSymbols(source)];
  for (let i4 = 0; i4 < keys.length; i4++) {
    let key = keys[i4], descriptor = Object.getOwnPropertyDescriptor(target, key);
    (descriptor == null || descriptor.writable) && (target[key] = cloneDeepWithImpl(source[key], key, objectToClone, stack, cloneValue));
  }
}
function isCloneableObject(object2) {
  switch (getTag(object2)) {
    case argumentsTag:
    case arrayTag:
    case arrayBufferTag:
    case dataViewTag:
    case booleanTag:
    case dateTag:
    case float32ArrayTag:
    case float64ArrayTag:
    case int8ArrayTag:
    case int16ArrayTag:
    case int32ArrayTag:
    case mapTag:
    case numberTag:
    case objectTag:
    case regexpTag:
    case setTag:
    case stringTag:
    case symbolTag:
    case uint8ArrayTag:
    case uint8ClampedArrayTag:
    case uint16ArrayTag:
    case uint32ArrayTag:
      return true;
    default:
      return false;
  }
}
function isLength(value2) {
  return Number.isSafeInteger(value2) && value2 >= 0;
}
function isArrayLike(value2) {
  return value2 != null && typeof value2 != "function" && isLength(value2.length);
}
function cloneDeepWith2(obj, cloneValue) {
  return cloneDeepWith(obj, (value2, key, object2, stack) => {
    if (typeof obj == "object") switch (Object.prototype.toString.call(obj)) {
      case numberTag:
      case stringTag:
      case booleanTag: {
        let result = new obj.constructor(obj == null ? void 0 : obj.valueOf());
        return copyProperties(result, obj), result;
      }
      case argumentsTag: {
        let result = {};
        return copyProperties(result, obj), result.length = obj.length, result[Symbol.iterator] = obj[Symbol.iterator], result;
      }
      default:
        return;
    }
  });
}
function cloneDeep(obj) {
  return cloneDeepWith2(obj);
}
function range(start, end, step = 1) {
  if (end == null && (end = start, start = 0), !Number.isInteger(step) || step === 0) throw new Error("The step value must be a non-zero integer.");
  let length = Math.max(Math.ceil((end - start) / step), 0), result = new Array(length);
  for (let i4 = 0; i4 < length; i4++) result[i4] = start + i4 * step;
  return result;
}
function uniq2(arr) {
  return isArrayLike(arr) ? uniq(Array.from(arr)) : [];
}
function isBuffer(x3) {
  return typeof Buffer < "u" && Buffer.isBuffer(x3);
}
function isPrototype(value2) {
  let constructor = value2 == null ? void 0 : value2.constructor, prototype = typeof constructor == "function" ? constructor.prototype : Object.prototype;
  return value2 === prototype;
}
function isTypedArray2(x3) {
  return isTypedArray(x3);
}
function times(n3, getValue2) {
  if (n3 = toInteger(n3), n3 < 1 || !Number.isSafeInteger(n3)) return [];
  let result = new Array(n3);
  for (let i4 = 0; i4 < n3; i4++) result[i4] = typeof getValue2 == "function" ? getValue2(i4) : i4;
  return result;
}
function keysIn(object2) {
  if (object2 == null) return [];
  switch (typeof object2) {
    case "object":
    case "function":
      return isArrayLike(object2) ? arrayLikeKeysIn(object2) : isPrototype(object2) ? prototypeKeysIn(object2) : keysInImpl(object2);
    default:
      return keysInImpl(Object(object2));
  }
}
function keysInImpl(object2) {
  let result = [];
  for (let key in object2) result.push(key);
  return result;
}
function prototypeKeysIn(object2) {
  return keysInImpl(object2).filter((key) => key !== "constructor");
}
function arrayLikeKeysIn(object2) {
  let indices = times(object2.length, (index2) => `${index2}`), filteredKeys = new Set(indices);
  return isBuffer(object2) && (filteredKeys.add("offset"), filteredKeys.add("parent")), isTypedArray2(object2) && (filteredKeys.add("buffer"), filteredKeys.add("byteLength"), filteredKeys.add("byteOffset")), [...indices, ...keysInImpl(object2).filter((key) => !filteredKeys.has(key))];
}
function getSymbolsIn(object2) {
  let result = [];
  for (; object2; ) result.push(...getSymbols(object2)), object2 = Object.getPrototypeOf(object2);
  return result;
}
function pickBy(obj, shouldPick) {
  if (obj == null) return {};
  let result = {};
  if (shouldPick == null) return obj;
  let keys = isArrayLike(obj) ? range(0, obj.length) : [...keysIn(obj), ...getSymbolsIn(obj)];
  for (let i4 = 0; i4 < keys.length; i4++) {
    let key = isSymbol(keys[i4]) ? keys[i4] : keys[i4].toString(), value2 = obj[key];
    shouldPick(value2, key, obj) && (result[key] = value2);
  }
  return result;
}
var getControlId = (value2) => `control-${value2.replace(/\s+/g, "-")}`, getControlSetterButtonId = (value2) => `set-${value2.replace(/\s+/g, "-")}`;
var __create$1 = Object.create;
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __getOwnPropNames$1 = Object.getOwnPropertyNames;
var __getProtoOf$1 = Object.getPrototypeOf, __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __require = ((x3) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(x3, { get: (a4, b3) => (typeof require < "u" ? require : a4)[b3] }) : x3)(function(x3) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x3 + '" is not supported');
});
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames$1(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps$1 = (to2, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function") for (let key of __getOwnPropNames$1(from)) !__hasOwnProp$1.call(to2, key) && key !== except && __defProp$1(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc$1(from, key)) || desc.enumerable });
  return to2;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create$1(__getProtoOf$1(mod)) : {}, __copyProps$1(!mod || !mod.__esModule ? __defProp$1(target, "default", { value: mod, enumerable: true }) : target, mod));
var Ep = Object.create;
var Pn = Object.defineProperty;
var Sp = Object.getOwnPropertyDescriptor;
var Cp = Object.getOwnPropertyNames;
var Mp = Object.getPrototypeOf, Ap = Object.prototype.hasOwnProperty;
var o$1 = (e4, t4) => Pn(e4, "name", { value: t4, configurable: true }), Jr = /* @__PURE__ */ ((e4) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e4, {
  get: (t4, r4) => (typeof require < "u" ? require : t4)[r4]
}) : e4)(function(e4) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e4 + '" is not supported');
});
var C$1 = (e4, t4) => () => (e4 && (t4 = e4(e4 = 0)), t4);
var H$1 = (e4, t4) => () => (t4 || e4((t4 = { exports: {} }).exports, t4), t4.exports), Qr = (e4, t4) => {
  for (var r4 in t4)
    Pn(e4, r4, { get: t4[r4], enumerable: true });
}, Lp = (e4, t4, r4, n3) => {
  if (t4 && typeof t4 == "object" || typeof t4 == "function")
    for (let a4 of Cp(t4))
      !Ap.call(e4, a4) && a4 !== r4 && Pn(e4, a4, { get: () => t4[a4], enumerable: !(n3 = Sp(t4, a4)) || n3.enumerable });
  return e4;
};
var ge$1 = (e4, t4, r4) => (r4 = e4 != null ? Ep(Mp(e4)) : {}, Lp(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  t4 || !e4 || !e4.__esModule ? Pn(r4, "default", { value: e4, enumerable: true }) : r4,
  e4
));
function W$1() {
  return W$1 = Object.assign ? Object.assign.bind() : function(e4) {
    for (var t4 = 1; t4 < arguments.length; t4++) {
      var r4 = arguments[t4];
      for (var n3 in r4) ({}).hasOwnProperty.call(r4, n3) && (e4[n3] = r4[n3]);
    }
    return e4;
  }, W$1.apply(null, arguments);
}
var en = C$1(() => {
  o$1(W$1, "_extends");
});
function H0(e4) {
  if (e4 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e4;
}
var P0 = C$1(() => {
  o$1(H0, "_assertThisInitialized");
});
function vt(e4, t4) {
  return vt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r4, n3) {
    return r4.__proto__ = n3, r4;
  }, vt(e4, t4);
}
var kn = C$1(() => {
  o$1(vt, "_setPrototypeOf");
});
function On(e4) {
  return On = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t4) {
    return t4.__proto__ || Object.getPrototypeOf(t4);
  }, On(e4);
}
var O0 = C$1(() => {
  o$1(On, "_getPrototypeOf");
});
var rn = H$1((q0, ca) => {
  (function(e4) {
    if (typeof q0 == "object" && typeof ca < "u")
      ca.exports = e4();
    else if (typeof define == "function" && define.amd)
      define([], e4);
    else {
      var t4;
      typeof window < "u" ? t4 = window : typeof global < "u" ? t4 = global : typeof self < "u" ? t4 = self : t4 = this, t4.memoizerific = e4();
    }
  })(function() {
    return (/* @__PURE__ */ o$1(function n3(a4, i4, c3) {
      function l4(f4, d4) {
        if (!i4[f4]) {
          if (!a4[f4]) {
            var m2 = typeof Jr == "function" && Jr;
            if (!d4 && m2) return m2(f4, true);
            if (s4) return s4(f4, true);
            var v2 = new Error("Cannot find module '" + f4 + "'");
            throw v2.code = "MODULE_NOT_FOUND", v2;
          }
          var y3 = i4[f4] = { exports: {} };
          a4[f4][0].call(y3.exports, function(p3) {
            var h2 = a4[f4][1][p3];
            return l4(h2 || p3);
          }, y3, y3.exports, n3, a4, i4, c3);
        }
        return i4[f4].exports;
      }
      o$1(l4, "s");
      for (var s4 = typeof Jr == "function" && Jr, u4 = 0; u4 < c3.length; u4++) l4(c3[u4]);
      return l4;
    }, "e"))({ 1: [function(n3, a4, i4) {
      a4.exports = function(c3) {
        if (typeof Map != "function" || c3) {
          var l4 = n3("./similar");
          return new l4();
        } else
          return /* @__PURE__ */ new Map();
      };
    }, { "./similar": 2 }], 2: [function(n3, a4, i4) {
      function c3() {
        return this.list = [], this.lastItem = void 0, this.size = 0, this;
      }
      o$1(c3, "Similar"), c3.prototype.get = function(l4) {
        var s4;
        if (this.lastItem && this.isEqual(this.lastItem.key, l4))
          return this.lastItem.val;
        if (s4 = this.indexOf(l4), s4 >= 0)
          return this.lastItem = this.list[s4], this.list[s4].val;
      }, c3.prototype.set = function(l4, s4) {
        var u4;
        return this.lastItem && this.isEqual(this.lastItem.key, l4) ? (this.lastItem.val = s4, this) : (u4 = this.indexOf(l4), u4 >= 0 ? (this.lastItem = this.list[u4], this.list[u4].val = s4, this) : (this.lastItem = { key: l4, val: s4 }, this.list.push(this.lastItem), this.size++, this));
      }, c3.prototype.delete = function(l4) {
        var s4;
        if (this.lastItem && this.isEqual(this.lastItem.key, l4) && (this.lastItem = void 0), s4 = this.indexOf(l4), s4 >= 0)
          return this.size--, this.list.splice(s4, 1)[0];
      }, c3.prototype.has = function(l4) {
        var s4;
        return this.lastItem && this.isEqual(this.lastItem.key, l4) ? true : (s4 = this.indexOf(l4), s4 >= 0 ? (this.lastItem = this.list[s4], true) : false);
      }, c3.prototype.forEach = function(l4, s4) {
        var u4;
        for (u4 = 0; u4 < this.size; u4++)
          l4.call(s4 || this, this.list[u4].val, this.list[u4].key, this);
      }, c3.prototype.indexOf = function(l4) {
        var s4;
        for (s4 = 0; s4 < this.size; s4++)
          if (this.isEqual(this.list[s4].key, l4))
            return s4;
        return -1;
      }, c3.prototype.isEqual = function(l4, s4) {
        return l4 === s4 || l4 !== l4 && s4 !== s4;
      }, a4.exports = c3;
    }, {}], 3: [function(n3, a4, i4) {
      var c3 = n3("map-or-similar");
      a4.exports = function(f4) {
        var d4 = new c3(false), m2 = [];
        return function(v2) {
          var y3 = /* @__PURE__ */ o$1(function() {
            var p3 = d4, h2, g2, w2 = arguments.length - 1, b3 = Array(w2 + 1), x3 = true, E4;
            if ((y3.numArgs || y3.numArgs === 0) && y3.numArgs !== w2 + 1)
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (E4 = 0; E4 < w2; E4++) {
              if (b3[E4] = {
                cacheItem: p3,
                arg: arguments[E4]
              }, p3.has(arguments[E4])) {
                p3 = p3.get(arguments[E4]);
                continue;
              }
              x3 = false, h2 = new c3(false), p3.set(arguments[E4], h2), p3 = h2;
            }
            return x3 && (p3.has(arguments[w2]) ? g2 = p3.get(arguments[w2]) : x3 = false), x3 || (g2 = v2.apply(null, arguments), p3.set(arguments[w2], g2)), f4 > 0 && (b3[w2] = {
              cacheItem: p3,
              arg: arguments[w2]
            }, x3 ? l4(m2, b3) : m2.push(b3), m2.length > f4 && s4(m2.shift())), y3.wasMemoized = x3, y3.numArgs = w2 + 1, g2;
          }, "memoizerific");
          return y3.limit = f4, y3.wasMemoized = false, y3.cache = d4, y3.lru = m2, y3;
        };
      };
      function l4(f4, d4) {
        var m2 = f4.length, v2 = d4.length, y3, p3, h2;
        for (p3 = 0; p3 < m2; p3++) {
          for (y3 = true, h2 = 0; h2 < v2; h2++)
            if (!u4(f4[p3][h2].arg, d4[h2].arg)) {
              y3 = false;
              break;
            }
          if (y3)
            break;
        }
        f4.push(f4.splice(p3, 1)[0]);
      }
      o$1(l4, "moveToMostRecentLru");
      function s4(f4) {
        var d4 = f4.length, m2 = f4[d4 - 1], v2, y3;
        for (m2.cacheItem.delete(m2.arg), y3 = d4 - 2; y3 >= 0 && (m2 = f4[y3], v2 = m2.cacheItem.get(m2.arg), !v2 || !v2.size); y3--)
          m2.cacheItem.delete(m2.arg);
      }
      o$1(s4, "removeCachedResult");
      function u4(f4, d4) {
        return f4 === d4 || f4 !== f4 && d4 !== d4;
      }
      o$1(u4, "isEqual");
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
});
function pr(e4, t4) {
  if (e4 == null) return {};
  var r4 = {};
  for (var n3 in e4) if ({}.hasOwnProperty.call(e4, n3)) {
    if (t4.indexOf(n3) !== -1) continue;
    r4[n3] = e4[n3];
  }
  return r4;
}
var Fn = C$1(() => {
  o$1(pr, "_objectWithoutPropertiesLoose");
});
function G0(e4, t4) {
  if (e4 == null) return {};
  var r4, n3, a4 = pr(e4, t4);
  if (Object.getOwnPropertySymbols) {
    var i4 = Object.getOwnPropertySymbols(e4);
    for (n3 = 0; n3 < i4.length; n3++) r4 = i4[n3], t4.indexOf(r4) === -1 && {}.propertyIsEnumerable.call(e4, r4) && (a4[r4] = e4[r4]);
  }
  return a4;
}
var Y0 = C$1(() => {
  Fn();
  o$1(G0, "_objectWithoutProperties");
});
function nn(e4, t4) {
  (t4 == null || t4 > e4.length) && (t4 = e4.length);
  for (var r4 = 0, n3 = Array(t4); r4 < t4; r4++) n3[r4] = e4[r4];
  return n3;
}
var sa = C$1(() => {
  o$1(nn, "_arrayLikeToArray");
});
function X0(e4) {
  if (Array.isArray(e4)) return nn(e4);
}
var Z0 = C$1(() => {
  sa();
  o$1(X0, "_arrayWithoutHoles");
});
function K0(e4) {
  if (typeof Symbol < "u" && e4[Symbol.iterator] != null || e4["@@iterator"] != null) return Array.from(e4);
}
var J0 = C$1(() => {
  o$1(K0, "_iterableToArray");
});
function Q0(e4, t4) {
  if (e4) {
    if (typeof e4 == "string") return nn(e4, t4);
    var r4 = {}.toString.call(e4).slice(8, -1);
    return r4 === "Object" && e4.constructor && (r4 = e4.constructor.name), r4 === "Map" || r4 === "Set" ? Array.from(e4) : r4 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r4) ? nn(e4, t4) : void 0;
  }
}
var ec = C$1(() => {
  sa();
  o$1(Q0, "_unsupportedIterableToArray");
});
function tc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var rc = C$1(() => {
  o$1(tc, "_nonIterableSpread");
});
function Dn(e4) {
  return X0(e4) || K0(e4) || Q0(e4) || tc();
}
var nc = C$1(() => {
  Z0();
  J0();
  ec();
  rc();
  o$1(Dn, "_toConsumableArray");
});
function Vt(e4) {
  "@babel/helpers - typeof";
  return Vt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
    return typeof t4;
  } : function(t4) {
    return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
  }, Vt(e4);
}
var ua = C$1(() => {
  o$1(Vt, "_typeof");
});
function oc(e4, t4) {
  if (Vt(e4) != "object" || !e4) return e4;
  var r4 = e4[Symbol.toPrimitive];
  if (r4 !== void 0) {
    var n3 = r4.call(e4, t4 || "default");
    if (Vt(n3) != "object") return n3;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t4 === "string" ? String : Number)(e4);
}
var ac = C$1(() => {
  ua();
  o$1(oc, "toPrimitive");
});
function ic(e4) {
  var t4 = oc(e4, "string");
  return Vt(t4) == "symbol" ? t4 : t4 + "";
}
var lc = C$1(() => {
  ua();
  ac();
  o$1(ic, "toPropertyKey");
});
function _n(e4, t4, r4) {
  return (t4 = ic(t4)) in e4 ? Object.defineProperty(e4, t4, {
    value: r4,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e4[t4] = r4, e4;
}
var fa = C$1(() => {
  lc();
  o$1(_n, "_defineProperty");
});
function cc(e4, t4) {
  var r4 = Object.keys(e4);
  if (Object.getOwnPropertySymbols) {
    var n3 = Object.getOwnPropertySymbols(e4);
    t4 && (n3 = n3.filter(function(a4) {
      return Object.getOwnPropertyDescriptor(e4, a4).enumerable;
    })), r4.push.apply(r4, n3);
  }
  return r4;
}
function mr(e4) {
  for (var t4 = 1; t4 < arguments.length; t4++) {
    var r4 = arguments[t4] != null ? arguments[t4] : {};
    t4 % 2 ? cc(Object(r4), true).forEach(function(n3) {
      _n(e4, n3, r4[n3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e4, Object.getOwnPropertyDescriptors(r4)) : cc(Object(r4)).forEach(function(n3) {
      Object.defineProperty(e4, n3, Object.getOwnPropertyDescriptor(r4, n3));
    });
  }
  return e4;
}
function b2(e4) {
  var t4 = e4.length;
  if (t4 === 0 || t4 === 1) return e4;
  if (t4 === 2)
    return [e4[0], e4[1], "".concat(e4[0], ".").concat(e4[1]), "".concat(e4[1], ".").concat(e4[0])];
  if (t4 === 3)
    return [e4[0], e4[1], e4[2], "".concat(e4[0], ".").concat(e4[1]), "".concat(e4[0], ".").concat(e4[2]), "".concat(e4[1], ".").concat(e4[0]), "".concat(
      e4[1],
      "."
    ).concat(e4[2]), "".concat(e4[2], ".").concat(e4[0]), "".concat(e4[2], ".").concat(e4[1]), "".concat(e4[0], ".").concat(e4[1], ".").concat(
      e4[2]
    ), "".concat(e4[0], ".").concat(e4[2], ".").concat(e4[1]), "".concat(e4[1], ".").concat(e4[0], ".").concat(e4[2]), "".concat(e4[1], ".").concat(
      e4[2],
      "."
    ).concat(e4[0]), "".concat(e4[2], ".").concat(e4[0], ".").concat(e4[1]), "".concat(e4[2], ".").concat(e4[1], ".").concat(e4[0])];
  if (t4 >= 4)
    return [
      e4[0],
      e4[1],
      e4[2],
      e4[3],
      "".concat(e4[0], ".").concat(e4[1]),
      "".concat(e4[0], ".").concat(e4[2]),
      "".concat(e4[0], ".").concat(e4[3]),
      "".concat(e4[1], ".").concat(e4[0]),
      "".concat(e4[1], ".").concat(e4[2]),
      "".concat(e4[1], ".").concat(e4[3]),
      "".concat(e4[2], ".").concat(e4[0]),
      "".concat(e4[2], ".").concat(e4[1]),
      "".concat(e4[2], ".").concat(e4[3]),
      "".concat(e4[3], ".").concat(e4[0]),
      "".concat(e4[3], ".").concat(e4[1]),
      "".concat(e4[3], ".").concat(e4[2]),
      "".concat(e4[0], ".").concat(e4[1], ".").concat(e4[2]),
      "".concat(e4[0], ".").concat(e4[1], ".").concat(e4[3]),
      "".concat(e4[0], ".").concat(e4[2], ".").concat(e4[1]),
      "".concat(e4[0], ".").concat(e4[2], ".").concat(e4[3]),
      "".concat(e4[0], ".").concat(
        e4[3],
        "."
      ).concat(e4[1]),
      "".concat(e4[0], ".").concat(e4[3], ".").concat(e4[2]),
      "".concat(e4[1], ".").concat(e4[0], ".").concat(e4[2]),
      "".concat(
        e4[1],
        "."
      ).concat(e4[0], ".").concat(e4[3]),
      "".concat(e4[1], ".").concat(e4[2], ".").concat(e4[0]),
      "".concat(e4[1], ".").concat(e4[2], ".").concat(
        e4[3]
      ),
      "".concat(e4[1], ".").concat(e4[3], ".").concat(e4[0]),
      "".concat(e4[1], ".").concat(e4[3], ".").concat(e4[2]),
      "".concat(e4[2], ".").concat(
        e4[0],
        "."
      ).concat(e4[1]),
      "".concat(e4[2], ".").concat(e4[0], ".").concat(e4[3]),
      "".concat(e4[2], ".").concat(e4[1], ".").concat(e4[0]),
      "".concat(
        e4[2],
        "."
      ).concat(e4[1], ".").concat(e4[3]),
      "".concat(e4[2], ".").concat(e4[3], ".").concat(e4[0]),
      "".concat(e4[2], ".").concat(e4[3], ".").concat(
        e4[1]
      ),
      "".concat(e4[3], ".").concat(e4[0], ".").concat(e4[1]),
      "".concat(e4[3], ".").concat(e4[0], ".").concat(e4[2]),
      "".concat(e4[3], ".").concat(
        e4[1],
        "."
      ).concat(e4[0]),
      "".concat(e4[3], ".").concat(e4[1], ".").concat(e4[2]),
      "".concat(e4[3], ".").concat(e4[2], ".").concat(e4[0]),
      "".concat(
        e4[3],
        "."
      ).concat(e4[2], ".").concat(e4[1]),
      "".concat(e4[0], ".").concat(e4[1], ".").concat(e4[2], ".").concat(e4[3]),
      "".concat(e4[0], ".").concat(
        e4[1],
        "."
      ).concat(e4[3], ".").concat(e4[2]),
      "".concat(e4[0], ".").concat(e4[2], ".").concat(e4[1], ".").concat(e4[3]),
      "".concat(e4[0], ".").concat(
        e4[2],
        "."
      ).concat(e4[3], ".").concat(e4[1]),
      "".concat(e4[0], ".").concat(e4[3], ".").concat(e4[1], ".").concat(e4[2]),
      "".concat(e4[0], ".").concat(
        e4[3],
        "."
      ).concat(e4[2], ".").concat(e4[1]),
      "".concat(e4[1], ".").concat(e4[0], ".").concat(e4[2], ".").concat(e4[3]),
      "".concat(e4[1], ".").concat(
        e4[0],
        "."
      ).concat(e4[3], ".").concat(e4[2]),
      "".concat(e4[1], ".").concat(e4[2], ".").concat(e4[0], ".").concat(e4[3]),
      "".concat(e4[1], ".").concat(
        e4[2],
        "."
      ).concat(e4[3], ".").concat(e4[0]),
      "".concat(e4[1], ".").concat(e4[3], ".").concat(e4[0], ".").concat(e4[2]),
      "".concat(e4[1], ".").concat(
        e4[3],
        "."
      ).concat(e4[2], ".").concat(e4[0]),
      "".concat(e4[2], ".").concat(e4[0], ".").concat(e4[1], ".").concat(e4[3]),
      "".concat(e4[2], ".").concat(
        e4[0],
        "."
      ).concat(e4[3], ".").concat(e4[1]),
      "".concat(e4[2], ".").concat(e4[1], ".").concat(e4[0], ".").concat(e4[3]),
      "".concat(e4[2], ".").concat(
        e4[1],
        "."
      ).concat(e4[3], ".").concat(e4[0]),
      "".concat(e4[2], ".").concat(e4[3], ".").concat(e4[0], ".").concat(e4[1]),
      "".concat(e4[2], ".").concat(
        e4[3],
        "."
      ).concat(e4[1], ".").concat(e4[0]),
      "".concat(e4[3], ".").concat(e4[0], ".").concat(e4[1], ".").concat(e4[2]),
      "".concat(e4[3], ".").concat(
        e4[0],
        "."
      ).concat(e4[2], ".").concat(e4[1]),
      "".concat(e4[3], ".").concat(e4[1], ".").concat(e4[0], ".").concat(e4[2]),
      "".concat(e4[3], ".").concat(
        e4[1],
        "."
      ).concat(e4[2], ".").concat(e4[0]),
      "".concat(e4[3], ".").concat(e4[2], ".").concat(e4[0], ".").concat(e4[1]),
      "".concat(e4[3], ".").concat(
        e4[2],
        "."
      ).concat(e4[1], ".").concat(e4[0])
    ];
}
function y2(e4) {
  if (e4.length === 0 || e4.length === 1) return e4;
  var t4 = e4.join(".");
  return da[t4] || (da[t4] = b2(e4)), da[t4];
}
function R2(e4) {
  var t4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r4 = arguments.length > 2 ? arguments[2] : void 0, n3 = e4.filter(
    function(i4) {
      return i4 !== "token";
    }
  ), a4 = y2(n3);
  return a4.reduce(function(i4, c3) {
    return mr(mr({}, i4), r4[c3]);
  }, t4);
}
function sc(e4) {
  return e4.join(" ");
}
function x2(e4, t4) {
  var r4 = 0;
  return function(n3) {
    return r4 += 1, n3.map(function(a4, i4) {
      return $t({
        node: a4,
        stylesheet: e4,
        useInlineStyles: t4,
        key: "code-segment-".concat(r4, "-").concat(i4)
      });
    });
  };
}
function $t(e$1) {
  var t4 = e$1.node, r4 = e$1.stylesheet, n3 = e$1.style, a4 = n3 === void 0 ? {} : n3, i4 = e$1.useInlineStyles, c3 = e$1.key, l4 = t4.properties, s4 = t4.type, u4 = t4.tagName, f4 = t4.value;
  if (s4 === "text")
    return f4;
  if (u4) {
    var d4 = x2(r4, i4), m2;
    if (!i4)
      m2 = mr(mr({}, l4), {}, {
        className: sc(l4.className)
      });
    else {
      var v2 = Object.keys(r4).reduce(function(g2, w2) {
        return w2.split(".").forEach(function(b3) {
          g2.includes(b3) || g2.push(b3);
        }), g2;
      }, []), y3 = l4.className && l4.className.includes("token") ? ["token"] : [], p3 = l4.className && y3.concat(l4.className.filter(function(g2) {
        return !v2.includes(g2);
      }));
      m2 = mr(mr({}, l4), {}, {
        className: sc(p3) || void 0,
        style: R2(l4.className, Object.assign({}, l4.style, a4), r4)
      });
    }
    var h2 = d4(t4.children);
    return /* @__PURE__ */ e.createElement(u4, W$1({
      key: c3
    }, m2), h2);
  }
}
var da, pa = C$1(() => {
  en();
  fa();
  o$1(cc, "ownKeys");
  o$1(mr, "_objectSpread");
  o$1(b2, "powerSetPermutations");
  da = {};
  o$1(y2, "getClassNameCombinations");
  o$1(R2, "createStyleObject");
  o$1(sc, "createClassNameString");
  o$1(x2, "createChildren");
  o$1($t, "createElement");
});
var uc, fc = C$1(() => {
  uc = /* @__PURE__ */ o$1(function(e4, t4) {
    var r4 = e4.listLanguages();
    return r4.indexOf(t4) !== -1;
  }, "default");
});
function dc(e4, t4) {
  var r4 = Object.keys(e4);
  if (Object.getOwnPropertySymbols) {
    var n3 = Object.getOwnPropertySymbols(e4);
    t4 && (n3 = n3.filter(function(a4) {
      return Object.getOwnPropertyDescriptor(e4, a4).enumerable;
    })), r4.push.apply(r4, n3);
  }
  return r4;
}
function Rt(e4) {
  for (var t4 = 1; t4 < arguments.length; t4++) {
    var r4 = arguments[t4] != null ? arguments[t4] : {};
    t4 % 2 ? dc(Object(r4), true).forEach(function(n3) {
      _n(e4, n3, r4[n3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e4, Object.getOwnPropertyDescriptors(r4)) : dc(Object(r4)).forEach(function(n3) {
      Object.defineProperty(e4, n3, Object.getOwnPropertyDescriptor(r4, n3));
    });
  }
  return e4;
}
function C2(e4) {
  return e4.match(S2);
}
function M2(e$1) {
  var t4 = e$1.lines, r4 = e$1.startingLineNumber, n3 = e$1.style;
  return t4.map(function(a4, i4) {
    var c3 = i4 + r4;
    return /* @__PURE__ */ e.createElement("span", {
      key: "line-".concat(i4),
      className: "react-syntax-highlighter-line-number",
      style: typeof n3 == "function" ? n3(c3) : n3
    }, "".concat(c3, `
`));
  });
}
function A2$1(e$1) {
  var t4 = e$1.codeString, r4 = e$1.codeStyle, n3 = e$1.containerStyle, a4 = n3 === void 0 ? {
    float: "left",
    paddingRight: "10px"
  } : n3, i4 = e$1.numberStyle, c3 = i4 === void 0 ? {} : i4, l4 = e$1.startingLineNumber;
  return /* @__PURE__ */ e.createElement("code", {
    style: Object.assign({}, r4, a4)
  }, M2({
    lines: t4.replace(/\n$/, "").split(`
`),
    style: c3,
    startingLineNumber: l4
  }));
}
function L2(e4) {
  return "".concat(e4.toString().length, ".25em");
}
function pc(e4, t4) {
  return {
    type: "element",
    tagName: "span",
    properties: {
      key: "line-number--".concat(e4),
      className: ["comment", "linenumber", "react-syntax-highlighter-line-number"],
      style: t4
    },
    children: [{
      type: "text",
      value: e4
    }]
  };
}
function mc(e4, t4, r4) {
  var n3 = {
    display: "inline-block",
    minWidth: L2(r4),
    paddingRight: "1em",
    textAlign: "right",
    userSelect: "none"
  }, a4 = typeof e4 == "function" ? e4(t4) : e4, i4 = Rt(Rt({}, n3), a4);
  return i4;
}
function Vn(e4) {
  var t4 = e4.children, r4 = e4.lineNumber, n3 = e4.lineNumberStyle, a4 = e4.largestLineNumber, i4 = e4.showInlineLineNumbers, c3 = e4.lineProps, l4 = c3 === void 0 ? {} : c3, s4 = e4.className, u4 = s4 === void 0 ? [] : s4, f4 = e4.showLineNumbers, d4 = e4.wrapLongLines, m2 = e4.wrapLines, v2 = m2 === void 0 ? false : m2, y3 = v2 ? Rt({}, typeof l4 == "function" ? l4(r4) : l4) : {};
  if (y3.className = y3.className ? [].concat(Dn(y3.className.trim().split(/\s+/)), Dn(u4)) : u4, r4 && i4) {
    var p3 = mc(n3, r4, a4);
    t4.unshift(pc(r4, p3));
  }
  return d4 & f4 && (y3.style = Rt({
    display: "flex"
  }, y3.style)), {
    type: "element",
    tagName: "span",
    properties: y3,
    children: t4
  };
}
function hc(e4) {
  for (var t4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r4 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], n3 = 0; n3 < e4.length; n3++) {
    var a4 = e4[n3];
    if (a4.type === "text")
      r4.push(Vn({
        children: [a4],
        className: Dn(new Set(t4))
      }));
    else if (a4.children) {
      var i4 = t4.concat(a4.properties.className);
      hc(a4.children, i4).forEach(function(c3) {
        return r4.push(c3);
      });
    }
  }
  return r4;
}
function I2(e4, t4, r4, n3, a4, i4, c3, l4, s4) {
  var u4, f4 = hc(e4.value), d4 = [], m2 = -1, v2 = 0;
  function y3(E4, R4) {
    var S4 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return Vn({
      children: E4,
      lineNumber: R4,
      lineNumberStyle: l4,
      largestLineNumber: c3,
      showInlineLineNumbers: a4,
      lineProps: r4,
      className: S4,
      showLineNumbers: n3,
      wrapLongLines: s4,
      wrapLines: t4
    });
  }
  o$1(y3, "createWrappedLine");
  function p3(E4, R4) {
    if (n3 && R4 && a4) {
      var S4 = mc(l4, R4, c3);
      E4.unshift(pc(R4, S4));
    }
    return E4;
  }
  o$1(p3, "createUnwrappedLine");
  function h2(E4, R4) {
    var S4 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return t4 || S4.length > 0 ? y3(E4, R4, S4) : p3(E4, R4);
  }
  o$1(h2, "createLine");
  for (var g2 = /* @__PURE__ */ o$1(function() {
    var R4 = f4[v2], S4 = R4.children[0].value, A4 = C2(S4);
    if (A4) {
      var M4 = S4.split(`
`);
      M4.forEach(function(L4, P2) {
        var _2 = n3 && d4.length + i4, D2 = {
          type: "text",
          value: "".concat(L4, `
`)
        };
        if (P2 === 0) {
          var K2 = f4.slice(m2 + 1, v2).concat(Vn({
            children: [D2],
            className: R4.properties.className
          })), T4 = h2(K2, _2);
          d4.push(T4);
        } else if (P2 === M4.length - 1) {
          var z4 = f4[v2 + 1] && f4[v2 + 1].children && f4[v2 + 1].children[0], k2 = {
            type: "text",
            value: "".concat(L4)
          };
          if (z4) {
            var $2 = Vn({
              children: [k2],
              className: R4.properties.className
            });
            f4.splice(v2 + 1, 0, $2);
          } else {
            var F2 = [k2], j2 = h2(F2, _2, R4.properties.className);
            d4.push(j2);
          }
        } else {
          var O2 = [D2], G2 = h2(O2, _2, R4.properties.className);
          d4.push(G2);
        }
      }), m2 = v2;
    }
    v2++;
  }, "_loop"); v2 < f4.length; )
    g2();
  if (m2 !== f4.length - 1) {
    var w2 = f4.slice(m2 + 1, f4.length);
    if (w2 && w2.length) {
      var b3 = n3 && d4.length + i4, x3 = h2(w2, b3);
      d4.push(x3);
    }
  }
  return t4 ? d4 : (u4 = []).concat.apply(u4, d4);
}
function z2(e4) {
  var t4 = e4.rows, r4 = e4.stylesheet, n3 = e4.useInlineStyles;
  return t4.map(function(a4, i4) {
    return $t({
      node: a4,
      stylesheet: r4,
      useInlineStyles: n3,
      key: "code-segement".concat(i4)
    });
  });
}
function gc(e4) {
  return e4 && typeof e4.highlightAuto < "u";
}
function T2(e4) {
  var t4 = e4.astGenerator, r4 = e4.language, n3 = e4.code, a4 = e4.defaultCodeValue;
  if (gc(t4)) {
    var i4 = uc(t4, r4);
    return r4 === "text" ? {
      value: a4,
      language: "text"
    } : i4 ? t4.highlight(r4, n3) : t4.highlightAuto(n3);
  }
  try {
    return r4 && r4 !== "text" ? {
      value: t4.highlight(n3, r4)
    } : {
      value: a4
    };
  } catch {
    return {
      value: a4
    };
  }
}
function ma(e$1, t4) {
  return /* @__PURE__ */ o$1(function(n3) {
    var a4 = n3.language, i4 = n3.children, c3 = n3.style, l4 = c3 === void 0 ? t4 : c3, s4 = n3.customStyle, u4 = s4 === void 0 ? {} : s4, f4 = n3.codeTagProps, d4 = f4 === void 0 ? {
      className: a4 ? "language-".concat(a4) : void 0,
      style: Rt(Rt({}, l4['code[class*="language-"]']), l4['code[class*="language-'.concat(a4, '"]')])
    } : f4, m2 = n3.useInlineStyles, v2 = m2 === void 0 ? true : m2, y3 = n3.showLineNumbers, p3 = y3 === void 0 ? false : y3, h2 = n3.showInlineLineNumbers, g2 = h2 === void 0 ? true : h2, w2 = n3.startingLineNumber, b3 = w2 === void 0 ? 1 : w2, x3 = n3.lineNumberContainerStyle, E4 = n3.lineNumberStyle, R4 = E4 === void 0 ? {} : E4, S4 = n3.wrapLines, A4 = n3.wrapLongLines, M4 = A4 === void 0 ? false : A4, L4 = n3.lineProps, P2 = L4 === void 0 ? {} : L4, _2 = n3.renderer, D2 = n3.PreTag, K2 = D2 === void 0 ? "pre" : D2, T4 = n3.CodeTag, z4 = T4 === void 0 ? "code" : T4, k2 = n3.code, $2 = k2 === void 0 ? (Array.isArray(i4) ? i4[0] : i4) || "" : k2, F2 = n3.astGenerator, j2 = G0(n3, E2);
    F2 = F2 || e$1;
    var O2 = p3 ? /* @__PURE__ */ e.createElement(A2$1, {
      containerStyle: x3,
      codeStyle: d4.style || {},
      numberStyle: R4,
      startingLineNumber: b3,
      codeString: $2
    }) : null, G2 = l4.hljs || l4['pre[class*="language-"]'] || {
      backgroundColor: "#fff"
    }, Ce2 = gc(F2) ? "hljs" : "prismjs", he2 = v2 ? Object.assign({}, j2, {
      style: Object.assign({}, G2, u4)
    }) : Object.assign({}, j2, {
      className: j2.className ? "".concat(Ce2, " ").concat(j2.className) : Ce2,
      style: Object.assign({}, u4)
    });
    if (M4 ? d4.style = Rt({
      whiteSpace: "pre-wrap"
    }, d4.style) : d4.style = Rt({
      whiteSpace: "pre"
    }, d4.style), !F2)
      return /* @__PURE__ */ e.createElement(K2, he2, O2, /* @__PURE__ */ e.createElement(z4, d4, $2));
    (S4 === void 0 && _2 || M4) && (S4 = true), _2 = _2 || z2;
    var fe2 = [{
      type: "text",
      value: $2
    }], de2 = T2({
      astGenerator: F2,
      language: a4,
      code: $2,
      defaultCodeValue: fe2
    });
    de2.language === null && (de2.value = fe2);
    var be2 = de2.value.length;
    be2 === 1 && de2.value[0].type === "text" && (be2 = de2.value[0].value.split(`
`).length);
    var Me3 = be2 + b3, Nt3 = I2(de2, S4, P2, p3, g2, b3, Me3, R4, M4);
    return /* @__PURE__ */ e.createElement(K2, he2, /* @__PURE__ */ e.createElement(z4, d4, !g2 && O2, _2({
      rows: Nt3,
      stylesheet: l4,
      useInlineStyles: v2
    })));
  }, "SyntaxHighlighter");
}
var E2, S2, vc = C$1(() => {
  Y0();
  nc();
  fa();
  pa();
  fc();
  E2 = ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "wrapLongLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"];
  o$1(dc, "ownKeys");
  o$1(Rt, "_objectSpread");
  S2 = /\n/g;
  o$1(C2, "getNewLines");
  o$1(M2, "getAllLineNumbers");
  o$1(A2$1, "AllLineNumbers");
  o$1(L2, "getEmWidthOfNumber");
  o$1(pc, "getInlineLineNumber");
  o$1(mc, "assembleLineNumberStyles");
  o$1(Vn, "createLineElement");
  o$1(hc, "flattenCodeTree");
  o$1(I2, "processLines");
  o$1(z2, "defaultRenderer");
  o$1(gc, "isHighlightJs");
  o$1(T2, "getCodeTree");
  o$1(ma, "default");
});
var bc = H$1((Zb, wc) => {
  wc.exports = P2;
  var H2 = Object.prototype.hasOwnProperty;
  function P2() {
    for (var e4 = {}, t4 = 0; t4 < arguments.length; t4++) {
      var r4 = arguments[t4];
      for (var n3 in r4)
        H2.call(r4, n3) && (e4[n3] = r4[n3]);
    }
    return e4;
  }
  o$1(P2, "extend");
});
var ga = H$1((Jb, Rc) => {
  Rc.exports = yc;
  var ha2 = yc.prototype;
  ha2.space = null;
  ha2.normal = {};
  ha2.property = {};
  function yc(e4, t4, r4) {
    this.property = e4, this.normal = t4, r4 && (this.space = r4);
  }
  o$1(yc, "Schema");
});
var Sc = H$1((e9, Ec) => {
  var xc = bc(), k2 = ga();
  Ec.exports = O2;
  function O2(e4) {
    for (var t4 = e4.length, r4 = [], n3 = [], a4 = -1, i4, c3; ++a4 < t4; )
      i4 = e4[a4], r4.push(i4.property), n3.push(i4.normal), c3 = i4.space;
    return new k2(
      xc.apply(null, r4),
      xc.apply(null, n3),
      c3
    );
  }
  o$1(O2, "merge");
});
var $n = H$1((r9, Cc) => {
  Cc.exports = B2;
  function B2(e4) {
    return e4.toLowerCase();
  }
  o$1(B2, "normalize");
});
var va = H$1((o9, Ac) => {
  Ac.exports = Mc;
  var _e2 = Mc.prototype;
  _e2.space = null;
  _e2.attribute = null;
  _e2.property = null;
  _e2.boolean = false;
  _e2.booleanish = false;
  _e2.overloadedBoolean = false;
  _e2.number = false;
  _e2.commaSeparated = false;
  _e2.spaceSeparated = false;
  _e2.commaOrSpaceSeparated = false;
  _e2.mustUseProperty = false;
  _e2.defined = false;
  function Mc(e4, t4) {
    this.property = e4, this.attribute = t4;
  }
  o$1(Mc, "Info");
});
var jn = H$1((xt3) => {
  var N2 = 0;
  xt3.boolean = Wt2();
  xt3.booleanish = Wt2();
  xt3.overloadedBoolean = Wt2();
  xt3.number = Wt2();
  xt3.spaceSeparated = Wt2();
  xt3.commaSeparated = Wt2();
  xt3.commaOrSpaceSeparated = Wt2();
  function Wt2() {
    return Math.pow(2, ++N2);
  }
  o$1(Wt2, "increment");
});
var ba = H$1((c9, Hc) => {
  var zc = va(), Lc = jn();
  Hc.exports = wa;
  wa.prototype = new zc();
  wa.prototype.defined = true;
  var Tc = [
    "boolean",
    "booleanish",
    "overloadedBoolean",
    "number",
    "commaSeparated",
    "spaceSeparated",
    "commaOrSpaceSeparated"
  ], F2 = Tc.length;
  function wa(e4, t4, r4, n3) {
    var a4 = -1, i4;
    for (Ic(this, "space", n3), zc.call(this, e4, t4); ++a4 < F2; )
      i4 = Tc[a4], Ic(this, i4, (r4 & Lc[i4]) === Lc[i4]);
  }
  o$1(wa, "DefinedInfo");
  function Ic(e4, t4, r4) {
    r4 && (e4[t4] = r4);
  }
  o$1(Ic, "mark");
});
var hr = H$1((u9, kc) => {
  var Pc = $n(), D2 = ga(), _2 = ba();
  kc.exports = V2;
  function V2(e4) {
    var t4 = e4.space, r4 = e4.mustUseProperty || [], n3 = e4.attributes || {}, a4 = e4.properties, i4 = e4.transform, c3 = {}, l4 = {}, s4, u4;
    for (s4 in a4)
      u4 = new _2(
        s4,
        i4(n3, s4),
        a4[s4],
        t4
      ), r4.indexOf(s4) !== -1 && (u4.mustUseProperty = true), c3[s4] = u4, l4[Pc(s4)] = s4, l4[Pc(u4.attribute)] = s4;
    return new D2(c3, l4, t4);
  }
  o$1(V2, "create");
});
var Bc = H$1((d9, Oc) => {
  var $2 = hr();
  Oc.exports = $2({
    space: "xlink",
    transform: j2,
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null
    }
  });
  function j2(e4, t4) {
    return "xlink:" + t4.slice(5).toLowerCase();
  }
  o$1(j2, "xlinkTransform");
});
var Fc = H$1((m9, Nc) => {
  var W2 = hr();
  Nc.exports = W2({
    space: "xml",
    transform: U2,
    properties: {
      xmlLang: null,
      xmlBase: null,
      xmlSpace: null
    }
  });
  function U2(e4, t4) {
    return "xml:" + t4.slice(3).toLowerCase();
  }
  o$1(U2, "xmlTransform");
});
var _c = H$1((g9, Dc) => {
  Dc.exports = q2;
  function q2(e4, t4) {
    return t4 in e4 ? e4[t4] : t4;
  }
  o$1(q2, "caseSensitiveTransform");
});
var ya = H$1((w9, Vc) => {
  var G2 = _c();
  Vc.exports = Y2;
  function Y2(e4, t4) {
    return G2(e4, t4.toLowerCase());
  }
  o$1(Y2, "caseInsensitiveTransform");
});
var jc = H$1((y9, $c) => {
  var X2 = hr(), Z2 = ya();
  $c.exports = X2({
    space: "xmlns",
    attributes: {
      xmlnsxlink: "xmlns:xlink"
    },
    transform: Z2,
    properties: {
      xmlns: null,
      xmlnsXLink: null
    }
  });
});
var Uc = H$1((R9, Wc) => {
  var Ra = jn(), K2 = hr(), Ie3 = Ra.booleanish, Ve2 = Ra.number, Ut2 = Ra.spaceSeparated;
  Wc.exports = K2({
    transform: J2,
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: Ie3,
      ariaAutoComplete: null,
      ariaBusy: Ie3,
      ariaChecked: Ie3,
      ariaColCount: Ve2,
      ariaColIndex: Ve2,
      ariaColSpan: Ve2,
      ariaControls: Ut2,
      ariaCurrent: null,
      ariaDescribedBy: Ut2,
      ariaDetails: null,
      ariaDisabled: Ie3,
      ariaDropEffect: Ut2,
      ariaErrorMessage: null,
      ariaExpanded: Ie3,
      ariaFlowTo: Ut2,
      ariaGrabbed: Ie3,
      ariaHasPopup: null,
      ariaHidden: Ie3,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: Ut2,
      ariaLevel: Ve2,
      ariaLive: null,
      ariaModal: Ie3,
      ariaMultiLine: Ie3,
      ariaMultiSelectable: Ie3,
      ariaOrientation: null,
      ariaOwns: Ut2,
      ariaPlaceholder: null,
      ariaPosInSet: Ve2,
      ariaPressed: Ie3,
      ariaReadOnly: Ie3,
      ariaRelevant: null,
      ariaRequired: Ie3,
      ariaRoleDescription: Ut2,
      ariaRowCount: Ve2,
      ariaRowIndex: Ve2,
      ariaRowSpan: Ve2,
      ariaSelected: Ie3,
      ariaSetSize: Ve2,
      ariaSort: null,
      ariaValueMax: Ve2,
      ariaValueMin: Ve2,
      ariaValueNow: Ve2,
      ariaValueText: null,
      role: null
    }
  });
  function J2(e4, t4) {
    return t4 === "role" ? t4 : "aria-" + t4.slice(4).toLowerCase();
  }
  o$1(J2, "ariaTransform");
});
var Gc = H$1((E9, qc) => {
  var gr2 = jn(), Q2 = hr(), e4 = ya(), B2 = gr2.boolean, t4 = gr2.overloadedBoolean, on2 = gr2.booleanish, Y2 = gr2.number, xe2 = gr2.spaceSeparated, Wn2 = gr2.commaSeparated;
  qc.exports = Q2({
    space: "html",
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv"
    },
    transform: e4,
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      // Standard Properties.
      abbr: null,
      accept: Wn2,
      acceptCharset: xe2,
      accessKey: xe2,
      action: null,
      allow: null,
      allowFullScreen: B2,
      allowPaymentRequest: B2,
      allowUserMedia: B2,
      alt: null,
      as: null,
      async: B2,
      autoCapitalize: null,
      autoComplete: xe2,
      autoFocus: B2,
      autoPlay: B2,
      capture: B2,
      charSet: null,
      checked: B2,
      cite: null,
      className: xe2,
      cols: Y2,
      colSpan: null,
      content: null,
      contentEditable: on2,
      controls: B2,
      controlsList: xe2,
      coords: Y2 | Wn2,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: B2,
      defer: B2,
      dir: null,
      dirName: null,
      disabled: B2,
      download: t4,
      draggable: on2,
      encType: null,
      enterKeyHint: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: B2,
      formTarget: null,
      headers: xe2,
      height: Y2,
      hidden: B2,
      high: Y2,
      href: null,
      hrefLang: null,
      htmlFor: xe2,
      httpEquiv: xe2,
      id: null,
      imageSizes: null,
      imageSrcSet: Wn2,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: B2,
      itemId: null,
      itemProp: xe2,
      itemRef: xe2,
      itemScope: B2,
      itemType: xe2,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: B2,
      low: Y2,
      manifest: null,
      max: null,
      maxLength: Y2,
      media: null,
      method: null,
      min: null,
      minLength: Y2,
      multiple: B2,
      muted: B2,
      name: null,
      nonce: null,
      noModule: B2,
      noValidate: B2,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforePrint: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextMenu: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: B2,
      optimum: Y2,
      pattern: null,
      ping: xe2,
      placeholder: null,
      playsInline: B2,
      poster: null,
      preload: null,
      readOnly: B2,
      referrerPolicy: null,
      rel: xe2,
      required: B2,
      reversed: B2,
      rows: Y2,
      rowSpan: Y2,
      sandbox: xe2,
      scope: null,
      scoped: B2,
      seamless: B2,
      selected: B2,
      shape: null,
      size: Y2,
      sizes: null,
      slot: null,
      span: Y2,
      spellCheck: on2,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: Wn2,
      start: Y2,
      step: null,
      style: null,
      tabIndex: Y2,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: B2,
      useMap: null,
      value: on2,
      width: Y2,
      wrap: null,
      // Legacy.
      // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
      align: null,
      // Several. Use CSS `text-align` instead,
      aLink: null,
      // `<body>`. Use CSS `a:active {color}` instead
      archive: xe2,
      // `<object>`. List of URIs to archives
      axis: null,
      // `<td>` and `<th>`. Use `scope` on `<th>`
      background: null,
      // `<body>`. Use CSS `background-image` instead
      bgColor: null,
      // `<body>` and table elements. Use CSS `background-color` instead
      border: Y2,
      // `<table>`. Use CSS `border-width` instead,
      borderColor: null,
      // `<table>`. Use CSS `border-color` instead,
      bottomMargin: Y2,
      // `<body>`
      cellPadding: null,
      // `<table>`
      cellSpacing: null,
      // `<table>`
      char: null,
      // Several table elements. When `align=char`, sets the character to align on
      charOff: null,
      // Several table elements. When `char`, offsets the alignment
      classId: null,
      // `<object>`
      clear: null,
      // `<br>`. Use CSS `clear` instead
      code: null,
      // `<object>`
      codeBase: null,
      // `<object>`
      codeType: null,
      // `<object>`
      color: null,
      // `<font>` and `<hr>`. Use CSS instead
      compact: B2,
      // Lists. Use CSS to reduce space between items instead
      declare: B2,
      // `<object>`
      event: null,
      // `<script>`
      face: null,
      // `<font>`. Use CSS instead
      frame: null,
      // `<table>`
      frameBorder: null,
      // `<iframe>`. Use CSS `border` instead
      hSpace: Y2,
      // `<img>` and `<object>`
      leftMargin: Y2,
      // `<body>`
      link: null,
      // `<body>`. Use CSS `a:link {color: *}` instead
      longDesc: null,
      // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
      lowSrc: null,
      // `<img>`. Use a `<picture>`
      marginHeight: Y2,
      // `<body>`
      marginWidth: Y2,
      // `<body>`
      noResize: B2,
      // `<frame>`
      noHref: B2,
      // `<area>`. Use no href instead of an explicit `nohref`
      noShade: B2,
      // `<hr>`. Use background-color and height instead of borders
      noWrap: B2,
      // `<td>` and `<th>`
      object: null,
      // `<applet>`
      profile: null,
      // `<head>`
      prompt: null,
      // `<isindex>`
      rev: null,
      // `<link>`
      rightMargin: Y2,
      // `<body>`
      rules: null,
      // `<table>`
      scheme: null,
      // `<meta>`
      scrolling: on2,
      // `<frame>`. Use overflow in the child context
      standby: null,
      // `<object>`
      summary: null,
      // `<table>`
      text: null,
      // `<body>`. Use CSS `color` instead
      topMargin: Y2,
      // `<body>`
      valueType: null,
      // `<param>`
      version: null,
      // `<html>`. Use a doctype.
      vAlign: null,
      // Several. Use CSS `vertical-align` instead
      vLink: null,
      // `<body>`. Use CSS `a:visited {color}` instead
      vSpace: Y2,
      // `<img>` and `<object>`
      // Non-standard Properties.
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: B2,
      disableRemotePlayback: B2,
      prefix: null,
      property: null,
      results: Y2,
      security: null,
      unselectable: null
    }
  });
});
var Xc = H$1((S9, Yc) => {
  var r4 = Sc(), n4 = Bc(), o4 = Fc(), a4 = jc(), i4 = Uc(), l4 = Gc();
  Yc.exports = r4([o4, n4, a4, i4, l4]);
});
var Jc = H$1((C9, Kc) => {
  var c4 = $n(), s4 = ba(), u4 = va(), xa = "data";
  Kc.exports = p4;
  var f4 = /^data[-\w.:]+$/i, Zc = /-[a-z]/g, d4 = /[A-Z]/g;
  function p4(e4, t4) {
    var r4 = c4(t4), n3 = t4, a4 = u4;
    return r4 in e4.normal ? e4.property[e4.normal[r4]] : (r4.length > 4 && r4.slice(0, 4) === xa && f4.test(t4) && (t4.charAt(4) === "-" ? n3 = m4(t4) : t4 = h4(t4), a4 = s4), new a4(n3, t4));
  }
  o$1(p4, "find");
  function m4(e4) {
    var t4 = e4.slice(5).replace(Zc, v4);
    return xa + t4.charAt(0).toUpperCase() + t4.slice(1);
  }
  o$1(m4, "datasetToProperty");
  function h4(e4) {
    var t4 = e4.slice(4);
    return Zc.test(t4) ? e4 : (t4 = t4.replace(d4, g4), t4.charAt(0) !== "-" && (t4 = "-" + t4), xa + t4);
  }
  o$1(h4, "datasetToAttribute");
  function g4(e4) {
    return "-" + e4.toLowerCase();
  }
  o$1(g4, "kebab");
  function v4(e4) {
    return e4.charAt(1).toUpperCase();
  }
  o$1(v4, "camelcase");
});
var ts = H$1((A9, es2) => {
  es2.exports = w4;
  var Qc = /[#.]/g;
  function w4(e4, t4) {
    for (var r4 = e4 || "", n3 = t4 || "div", a4 = {}, i4 = 0, c3, l4, s4; i4 < r4.length; )
      Qc.lastIndex = i4, s4 = Qc.exec(r4), c3 = r4.slice(i4, s4 ? s4.index : r4.length), c3 && (l4 ? l4 === "#" ? a4.id = c3 : a4.className ? a4.className.push(
        c3
      ) : a4.className = [c3] : n3 = c3, i4 += c3.length), s4 && (l4 = s4[0], i4++);
    return { type: "element", tagName: n3, properties: a4, children: [] };
  }
  o$1(w4, "parse");
});
var ns = H$1((Ea) => {
  Ea.parse = R4;
  Ea.stringify = x4;
  var rs2 = "", b4 = " ", y4 = /[ \t\n\r\f]+/g;
  function R4(e4) {
    var t4 = String(e4 || rs2).trim();
    return t4 === rs2 ? [] : t4.split(y4);
  }
  o$1(R4, "parse");
  function x4(e4) {
    return e4.join(b4).trim();
  }
  o$1(x4, "stringify");
});
var as = H$1((Ca) => {
  Ca.parse = E4;
  Ca.stringify = S4;
  var Sa = ",", os2 = " ", an2 = "";
  function E4(e4) {
    for (var t4 = [], r4 = String(e4 || an2), n3 = r4.indexOf(Sa), a4 = 0, i4 = false, c3; !i4; )
      n3 === -1 && (n3 = r4.length, i4 = true), c3 = r4.slice(a4, n3).trim(), (c3 || !i4) && t4.push(c3), a4 = n3 + 1, n3 = r4.indexOf(Sa, a4);
    return t4;
  }
  o$1(E4, "parse");
  function S4(e4, t4) {
    var r4 = t4 || {}, n3 = r4.padLeft === false ? an2 : os2, a4 = r4.padRight ? os2 : an2;
    return e4[e4.length - 1] === an2 && (e4 = e4.concat(an2)), e4.join(a4 + Sa + n3).trim();
  }
  o$1(S4, "stringify");
});
var ds = H$1((P9, fs2) => {
  var C4 = Jc(), is2 = $n(), M4 = ts(), ls2 = ns().parse, cs2 = as().parse;
  fs2.exports = L4;
  var A4 = {}.hasOwnProperty;
  function L4(e4, t4, r4) {
    var n3 = r4 ? P4(r4) : null;
    return a4;
    function a4(c3, l4) {
      var s4 = M4(c3, t4), u4 = Array.prototype.slice.call(arguments, 2), f4 = s4.tagName.toLowerCase(), d4;
      if (s4.tagName = n3 && A4.call(n3, f4) ? n3[f4] : f4, l4 && I4(l4, s4) && (u4.unshift(l4), l4 = null), l4)
        for (d4 in l4)
          i4(s4.properties, d4, l4[d4]);
      return us2(s4.children, u4), s4.tagName === "template" && (s4.content = { type: "root", children: s4.children }, s4.children = []), s4;
    }
    function i4(c3, l4, s4) {
      var u4, f4, d4;
      s4 == null || s4 !== s4 || (u4 = C4(e4, l4), f4 = u4.property, d4 = s4, typeof d4 == "string" && (u4.spaceSeparated ? d4 = ls2(d4) : u4.commaSeparated ? d4 = cs2(d4) : u4.commaOrSpaceSeparated && (d4 = ls2(cs2(d4).join(" ")))), f4 === "style" && typeof s4 != "string" && (d4 = H4(d4)), f4 === "className" && c3.className && (d4 = c3.className.concat(d4)), c3[f4] = T4(u4, f4, d4));
    }
  }
  o$1(L4, "factory");
  function I4(e4, t4) {
    return typeof e4 == "string" || "length" in e4 || z4(t4.tagName, e4);
  }
  o$1(I4, "isChildren");
  function z4(e4, t4) {
    var r4 = t4.type;
    return e4 === "input" || !r4 || typeof r4 != "string" ? false : typeof t4.children == "object" && "length" in t4.children ? true : (r4 = r4.toLowerCase(), e4 === "button" ? r4 !== "menu" && r4 !== "submit" && r4 !== "reset" && r4 !== "button" : "value" in t4);
  }
  o$1(z4, "isNode");
  function us2(e4, t4) {
    var r4, n3;
    if (typeof t4 == "string" || typeof t4 == "number") {
      e4.push({ type: "text", value: String(t4) });
      return;
    }
    if (typeof t4 == "object" && "length" in t4) {
      for (r4 = -1, n3 = t4.length; ++r4 < n3; )
        us2(e4, t4[r4]);
      return;
    }
    if (typeof t4 != "object" || !("type" in t4))
      throw new Error("Expected node, nodes, or string, got `" + t4 + "`");
    e4.push(t4);
  }
  o$1(us2, "addChild");
  function T4(e4, t4, r4) {
    var n3, a4, i4;
    if (typeof r4 != "object" || !("length" in r4))
      return ss2(e4, t4, r4);
    for (a4 = r4.length, n3 = -1, i4 = []; ++n3 < a4; )
      i4[n3] = ss2(e4, t4, r4[n3]);
    return i4;
  }
  o$1(T4, "parsePrimitives");
  function ss2(e4, t4, r4) {
    var n3 = r4;
    return e4.number || e4.positiveNumber ? !isNaN(n3) && n3 !== "" && (n3 = Number(n3)) : (e4.boolean || e4.overloadedBoolean) && typeof n3 == "string" && (n3 === "" || is2(r4) === is2(t4)) && (n3 = true), n3;
  }
  o$1(ss2, "parsePrimitive");
  function H4(e4) {
    var t4 = [], r4;
    for (r4 in e4)
      t4.push([r4, e4[r4]].join(": "));
    return t4.join("; ");
  }
  o$1(H4, "style");
  function P4(e4) {
    for (var t4 = e4.length, r4 = -1, n3 = {}, a4; ++r4 < t4; )
      a4 = e4[r4], n3[a4.toLowerCase()] = a4;
    return n3;
  }
  o$1(P4, "createAdjustMap");
});
var hs = H$1((O9, ms2) => {
  var k4 = Xc(), O4 = ds(), ps2 = O4(k4, "div");
  ps2.displayName = "html";
  ms2.exports = ps2;
});
var vs = H$1((B9, gs2) => {
  gs2.exports = hs();
});
var ws = H$1((N9, B4) => {
  B4.exports = {
    AElig: "Æ",
    AMP: "&",
    Aacute: "Á",
    Acirc: "Â",
    Agrave: "À",
    Aring: "Å",
    Atilde: "Ã",
    Auml: "Ä",
    COPY: "©",
    Ccedil: "Ç",
    ETH: "Ð",
    Eacute: "É",
    Ecirc: "Ê",
    Egrave: "È",
    Euml: "Ë",
    GT: ">",
    Iacute: "Í",
    Icirc: "Î",
    Igrave: "Ì",
    Iuml: "Ï",
    LT: "<",
    Ntilde: "Ñ",
    Oacute: "Ó",
    Ocirc: "Ô",
    Ograve: "Ò",
    Oslash: "Ø",
    Otilde: "Õ",
    Ouml: "Ö",
    QUOT: '"',
    REG: "®",
    THORN: "Þ",
    Uacute: "Ú",
    Ucirc: "Û",
    Ugrave: "Ù",
    Uuml: "Ü",
    Yacute: "Ý",
    aacute: "á",
    acirc: "â",
    acute: "´",
    aelig: "æ",
    agrave: "à",
    amp: "&",
    aring: "å",
    atilde: "ã",
    auml: "ä",
    brvbar: "¦",
    ccedil: "ç",
    cedil: "¸",
    cent: "¢",
    copy: "©",
    curren: "¤",
    deg: "°",
    divide: "÷",
    eacute: "é",
    ecirc: "ê",
    egrave: "è",
    eth: "ð",
    euml: "ë",
    frac12: "½",
    frac14: "¼",
    frac34: "¾",
    gt: ">",
    iacute: "í",
    icirc: "î",
    iexcl: "¡",
    igrave: "ì",
    iquest: "¿",
    iuml: "ï",
    laquo: "«",
    lt: "<",
    macr: "¯",
    micro: "µ",
    middot: "·",
    nbsp: " ",
    not: "¬",
    ntilde: "ñ",
    oacute: "ó",
    ocirc: "ô",
    ograve: "ò",
    ordf: "ª",
    ordm: "º",
    oslash: "ø",
    otilde: "õ",
    ouml: "ö",
    para: "¶",
    plusmn: "±",
    pound: "£",
    quot: '"',
    raquo: "»",
    reg: "®",
    sect: "§",
    shy: "­",
    sup1: "¹",
    sup2: "²",
    sup3: "³",
    szlig: "ß",
    thorn: "þ",
    times: "×",
    uacute: "ú",
    ucirc: "û",
    ugrave: "ù",
    uml: "¨",
    uuml: "ü",
    yacute: "ý",
    yen: "¥",
    yuml: "ÿ"
  };
});
var bs = H$1((F9, N4) => {
  N4.exports = {
    "0": "�",
    "128": "€",
    "130": "‚",
    "131": "ƒ",
    "132": "„",
    "133": "…",
    "134": "†",
    "135": "‡",
    "136": "ˆ",
    "137": "‰",
    "138": "Š",
    "139": "‹",
    "140": "Œ",
    "142": "Ž",
    "145": "‘",
    "146": "’",
    "147": "“",
    "148": "”",
    "149": "•",
    "150": "–",
    "151": "—",
    "152": "˜",
    "153": "™",
    "154": "š",
    "155": "›",
    "156": "œ",
    "158": "ž",
    "159": "Ÿ"
  };
});
var Ma = H$1((D9, ys2) => {
  ys2.exports = F4;
  function F4(e4) {
    var t4 = typeof e4 == "string" ? e4.charCodeAt(0) : e4;
    return t4 >= 48 && t4 <= 57;
  }
  o$1(F4, "decimal");
});
var xs = H$1((V9, Rs2) => {
  Rs2.exports = D4;
  function D4(e4) {
    var t4 = typeof e4 == "string" ? e4.charCodeAt(0) : e4;
    return t4 >= 97 && t4 <= 102 || t4 >= 65 && t4 <= 70 || t4 >= 48 && t4 <= 57;
  }
  o$1(D4, "hexadecimal");
});
var Ss = H$1((j9, Es2) => {
  Es2.exports = _4;
  function _4(e4) {
    var t4 = typeof e4 == "string" ? e4.charCodeAt(0) : e4;
    return t4 >= 97 && t4 <= 122 || t4 >= 65 && t4 <= 90;
  }
  o$1(_4, "alphabetical");
});
var Ms = H$1((U9, Cs2) => {
  var V4 = Ss(), $4 = Ma();
  Cs2.exports = j4;
  function j4(e4) {
    return V4(e4) || $4(e4);
  }
  o$1(j4, "alphanumerical");
});
var Ls = H$1((G9, As2) => {
  var Un2, W4 = 59;
  As2.exports = U4;
  function U4(e4) {
    var t4 = "&" + e4 + ";", r4;
    return Un2 = Un2 || document.createElement("i"), Un2.innerHTML = t4, r4 = Un2.textContent, r4.charCodeAt(r4.length - 1) === W4 && e4 !== "semi" || r4 === t4 ? false : r4;
  }
  o$1(U4, "decodeEntity");
});
var $s = H$1((X9, Vs) => {
  var Is2 = ws(), zs2 = bs(), q4 = Ma(), G4 = xs(), ks2 = Ms(), Y4 = Ls();
  Vs.exports = lm;
  var X4 = {}.hasOwnProperty, vr2 = String.fromCharCode, Z4 = Function.prototype, Ts2 = {
    warning: null,
    reference: null,
    text: null,
    warningContext: null,
    referenceContext: null,
    textContext: null,
    position: {},
    additional: null,
    attribute: false,
    nonTerminated: true
  }, K4 = 9, Hs2 = 10, J4 = 12, Q4 = 32, Ps2 = 38, em = 59, tm = 60, rm = 61, nm = 35, om = 88, am = 120, im = 65533, wr2 = "named", La = "hexadecimal", Ia = "decimal", za = {};
  za[La] = 16;
  za[Ia] = 10;
  var qn2 = {};
  qn2[wr2] = ks2;
  qn2[Ia] = q4;
  qn2[La] = G4;
  var Os2 = 1, Bs2 = 2, Ns2 = 3, Fs2 = 4, Ds2 = 5, Aa = 6, _s2 = 7, Et2 = {};
  Et2[Os2] = "Named character references must be terminated by a semicolon";
  Et2[Bs2] = "Numeric character references must be terminated by a semicolon";
  Et2[Ns2] = "Named character references cannot be empty";
  Et2[Fs2] = "Numeric character references cannot be empty";
  Et2[Ds2] = "Named character references must be known";
  Et2[Aa] = "Numeric character references cannot be disallowed";
  Et2[_s2] = "Numeric character references cannot be outside the permissible Unicode range";
  function lm(e4, t4) {
    var r4 = {}, n3, a4;
    t4 || (t4 = {});
    for (a4 in Ts2)
      n3 = t4[a4], r4[a4] = n3 ?? Ts2[a4];
    return (r4.position.indent || r4.position.start) && (r4.indent = r4.position.indent || [], r4.position = r4.position.start), cm(e4, r4);
  }
  o$1(lm, "parseEntities");
  function cm(e4, t4) {
    var r4 = t4.additional, n3 = t4.nonTerminated, a4 = t4.text, i4 = t4.reference, c3 = t4.warning, l4 = t4.textContext, s4 = t4.referenceContext, u4 = t4.warningContext, f4 = t4.position, d4 = t4.indent || [], m2 = e4.length, v2 = 0, y3 = -1, p3 = f4.column || 1, h2 = f4.line || 1, g2 = "", w2 = [], b3, x3, E4, R4, S4, A4, M4, L4, P2, _2, D2, K2, T4, z4, k2, $2, F2, j2, O2;
    for (typeof r4 == "string" && (r4 = r4.charCodeAt(0)), $2 = G2(), L4 = c3 ? Ce2 : Z4, v2--, m2++; ++v2 < m2; )
      if (S4 === Hs2 && (p3 = d4[y3] || 1), S4 = e4.charCodeAt(v2), S4 === Ps2) {
        if (M4 = e4.charCodeAt(v2 + 1), M4 === K4 || M4 === Hs2 || M4 === J4 || M4 === Q4 || M4 === Ps2 || M4 === tm || M4 !== M4 || r4 && M4 === r4) {
          g2 += vr2(S4), p3++;
          continue;
        }
        for (T4 = v2 + 1, K2 = T4, O2 = T4, M4 === nm ? (O2 = ++K2, M4 = e4.charCodeAt(O2), M4 === om || M4 === am ? (z4 = La, O2 = ++K2) : z4 = Ia) : z4 = wr2, b3 = "", D2 = "", R4 = "", k2 = qn2[z4], O2--; ++O2 < m2 && (M4 = e4.charCodeAt(O2), !!k2(M4)); )
          R4 += vr2(M4), z4 === wr2 && X4.call(Is2, R4) && (b3 = R4, D2 = Is2[R4]);
        E4 = e4.charCodeAt(O2) === em, E4 && (O2++, x3 = z4 === wr2 ? Y4(R4) : false, x3 && (b3 = R4, D2 = x3)), j2 = 1 + O2 - T4, !E4 && !n3 || (R4 ? z4 === wr2 ? (E4 && !D2 ? L4(Ds2, 1) : (b3 !== R4 && (O2 = K2 + b3.length, j2 = 1 + O2 - K2, E4 = false), E4 || (P2 = b3 ? Os2 : Ns2, t4.attribute ? (M4 = e4.charCodeAt(O2), M4 === rm ? (L4(P2, j2), D2 = null) : ks2(M4) ? D2 = null : L4(P2, j2)) : L4(P2, j2))), A4 = D2) : (E4 || L4(Bs2, j2), A4 = parseInt(R4, za[z4]), sm(A4) ? (L4(_s2, j2), A4 = vr2(im)) : A4 in zs2 ? (L4(Aa, j2), A4 = zs2[A4]) : (_2 = "", um(A4) && L4(Aa, j2), A4 > 65535 && (A4 -= 65536, _2 += vr2(A4 >>> 10 | 55296), A4 = 56320 | A4 & 1023), A4 = _2 + vr2(A4))) : z4 !== wr2 && L4(Fs2, j2)), A4 ? (he2(), $2 = G2(), v2 = O2 - 1, p3 += O2 - T4 + 1, w2.push(A4), F2 = G2(), F2.offset++, i4 && i4.call(
          s4,
          A4,
          { start: $2, end: F2 },
          e4.slice(T4 - 1, O2)
        ), $2 = F2) : (R4 = e4.slice(T4 - 1, O2), g2 += R4, p3 += R4.length, v2 = O2 - 1);
      } else
        S4 === 10 && (h2++, y3++, p3 = 0), S4 === S4 ? (g2 += vr2(S4), p3++) : he2();
    return w2.join("");
    function G2() {
      return {
        line: h2,
        column: p3,
        offset: v2 + (f4.offset || 0)
      };
    }
    function Ce2(fe2, de2) {
      var be2 = G2();
      be2.column += de2, be2.offset += de2, c3.call(u4, Et2[fe2], be2, fe2);
    }
    function he2() {
      g2 && (w2.push(g2), a4 && a4.call(l4, g2, { start: $2, end: G2() }), g2 = "");
    }
  }
  o$1(cm, "parse");
  function sm(e4) {
    return e4 >= 55296 && e4 <= 57343 || e4 > 1114111;
  }
  o$1(sm, "prohibited");
  function um(e4) {
    return e4 >= 1 && e4 <= 8 || e4 === 11 || e4 >= 13 && e4 <= 31 || e4 >= 127 && e4 <= 159 || e4 >= 64976 && e4 <= 65007 || (e4 & 65535) === 65535 || (e4 & 65535) === 65534;
  }
  o$1(um, "disallowed");
});
var Ws = H$1((K9, Gn2) => {
  var fm = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  var js2 = function(e4) {
    var t4 = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, r4 = 0, n3 = {}, a4 = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: e4.Prism && e4.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: e4.Prism && e4.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: /* @__PURE__ */ o$1(function p3(h2) {
          return h2 instanceof i4 ? new i4(h2.type, p3(h2.content), h2.alias) : Array.isArray(h2) ? h2.map(p3) : h2.replace(/&/g, "&amp;").replace(
            /</g,
            "&lt;"
          ).replace(/\u00a0/g, " ");
        }, "encode"),
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: /* @__PURE__ */ o$1(function(p3) {
          return Object.prototype.toString.call(p3).slice(8, -1);
        }, "type"),
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: /* @__PURE__ */ o$1(function(p3) {
          return p3.__id || Object.defineProperty(p3, "__id", { value: ++r4 }), p3.__id;
        }, "objId"),
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: /* @__PURE__ */ o$1(function p3(h2, g2) {
          g2 = g2 || {};
          var w2, b3;
          switch (a4.util.type(h2)) {
            case "Object":
              if (b3 = a4.util.objId(h2), g2[b3])
                return g2[b3];
              w2 = /** @type {Record<string, any>} */
              {}, g2[b3] = w2;
              for (var x3 in h2)
                h2.hasOwnProperty(x3) && (w2[x3] = p3(h2[x3], g2));
              return (
                /** @type {any} */
                w2
              );
            case "Array":
              return b3 = a4.util.objId(h2), g2[b3] ? g2[b3] : (w2 = [], g2[b3] = w2, /** @type {Array} */
              /** @type {any} */
              h2.forEach(function(E4, R4) {
                w2[R4] = p3(E4, g2);
              }), /** @type {any} */
              w2);
            default:
              return h2;
          }
        }, "deepClone"),
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: /* @__PURE__ */ o$1(function(p3) {
          for (; p3; ) {
            var h2 = t4.exec(p3.className);
            if (h2)
              return h2[1].toLowerCase();
            p3 = p3.parentElement;
          }
          return "none";
        }, "getLanguage"),
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: /* @__PURE__ */ o$1(function(p3, h2) {
          p3.className = p3.className.replace(RegExp(t4, "gi"), ""), p3.classList.add("language-" + h2);
        }, "setLanguage"),
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: /* @__PURE__ */ o$1(function() {
          if (typeof document > "u")
            return null;
          if ("currentScript" in document)
            return (
              /** @type {any} */
              document.currentScript
            );
          try {
            throw new Error();
          } catch (w2) {
            var p3 = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(w2.stack) || [])[1];
            if (p3) {
              var h2 = document.getElementsByTagName("script");
              for (var g2 in h2)
                if (h2[g2].src == p3)
                  return h2[g2];
            }
            return null;
          }
        }, "currentScript"),
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: /* @__PURE__ */ o$1(function(p3, h2, g2) {
          for (var w2 = "no-" + h2; p3; ) {
            var b3 = p3.classList;
            if (b3.contains(h2))
              return true;
            if (b3.contains(w2))
              return false;
            p3 = p3.parentElement;
          }
          return !!g2;
        }, "isActive")
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: n3,
        plaintext: n3,
        text: n3,
        txt: n3,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: /* @__PURE__ */ o$1(function(p3, h2) {
          var g2 = a4.util.clone(a4.languages[p3]);
          for (var w2 in h2)
            g2[w2] = h2[w2];
          return g2;
        }, "extend"),
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: /* @__PURE__ */ o$1(function(p3, h2, g2, w2) {
          w2 = w2 || /** @type {any} */
          a4.languages;
          var b3 = w2[p3], x3 = {};
          for (var E4 in b3)
            if (b3.hasOwnProperty(E4)) {
              if (E4 == h2)
                for (var R4 in g2)
                  g2.hasOwnProperty(R4) && (x3[R4] = g2[R4]);
              g2.hasOwnProperty(E4) || (x3[E4] = b3[E4]);
            }
          var S4 = w2[p3];
          return w2[p3] = x3, a4.languages.DFS(a4.languages, function(A4, M4) {
            M4 === S4 && A4 != p3 && (this[A4] = x3);
          }), x3;
        }, "insertBefore"),
        // Traverse a language definition with Depth First Search
        DFS: /* @__PURE__ */ o$1(function p3(h2, g2, w2, b3) {
          b3 = b3 || {};
          var x3 = a4.util.objId;
          for (var E4 in h2)
            if (h2.hasOwnProperty(E4)) {
              g2.call(h2, E4, h2[E4], w2 || E4);
              var R4 = h2[E4], S4 = a4.util.type(R4);
              S4 === "Object" && !b3[x3(R4)] ? (b3[x3(R4)] = true, p3(R4, g2, null, b3)) : S4 === "Array" && !b3[x3(R4)] && (b3[x3(R4)] = true, p3(R4, g2, E4, b3));
            }
        }, "DFS")
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: /* @__PURE__ */ o$1(function(p3, h2) {
        a4.highlightAllUnder(document, p3, h2);
      }, "highlightAll"),
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: /* @__PURE__ */ o$1(function(p3, h2, g2) {
        var w2 = {
          callback: g2,
          container: p3,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        a4.hooks.run("before-highlightall", w2), w2.elements = Array.prototype.slice.apply(w2.container.querySelectorAll(w2.selector)), a4.hooks.run(
          "before-all-elements-highlight",
          w2
        );
        for (var b3 = 0, x3; x3 = w2.elements[b3++]; )
          a4.highlightElement(x3, h2 === true, w2.callback);
      }, "highlightAllUnder"),
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: /* @__PURE__ */ o$1(function(p3, h2, g2) {
        var w2 = a4.util.getLanguage(p3), b3 = a4.languages[w2];
        a4.util.setLanguage(p3, w2);
        var x3 = p3.parentElement;
        x3 && x3.nodeName.toLowerCase() === "pre" && a4.util.setLanguage(x3, w2);
        var E4 = p3.textContent, R4 = {
          element: p3,
          language: w2,
          grammar: b3,
          code: E4
        };
        function S4(M4) {
          R4.highlightedCode = M4, a4.hooks.run("before-insert", R4), R4.element.innerHTML = R4.highlightedCode, a4.hooks.run("after-highlight", R4), a4.hooks.run("complete", R4), g2 && g2.call(R4.element);
        }
        if (o$1(S4, "insertHighlightedCode"), a4.hooks.run("before-sanity-check", R4), x3 = R4.element.parentElement, x3 && x3.nodeName.toLowerCase() === "pre" && !x3.hasAttribute("tabindex") && x3.setAttribute("tabindex", "0"), !R4.code) {
          a4.hooks.run("complete", R4), g2 && g2.call(R4.element);
          return;
        }
        if (a4.hooks.run("before-highlight", R4), !R4.grammar) {
          S4(a4.util.encode(R4.code));
          return;
        }
        if (h2 && e4.Worker) {
          var A4 = new Worker(a4.filename);
          A4.onmessage = function(M4) {
            S4(M4.data);
          }, A4.postMessage(JSON.stringify({
            language: R4.language,
            code: R4.code,
            immediateClose: true
          }));
        } else
          S4(a4.highlight(R4.code, R4.grammar, R4.language));
      }, "highlightElement"),
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: /* @__PURE__ */ o$1(function(p3, h2, g2) {
        var w2 = {
          code: p3,
          grammar: h2,
          language: g2
        };
        if (a4.hooks.run("before-tokenize", w2), !w2.grammar)
          throw new Error('The language "' + w2.language + '" has no grammar.');
        return w2.tokens = a4.tokenize(w2.code, w2.grammar), a4.hooks.run("after-tokenize", w2), i4.stringify(a4.util.encode(w2.tokens), w2.language);
      }, "highlight"),
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: /* @__PURE__ */ o$1(function(p3, h2) {
        var g2 = h2.rest;
        if (g2) {
          for (var w2 in g2)
            h2[w2] = g2[w2];
          delete h2.rest;
        }
        var b3 = new s4();
        return u4(b3, b3.head, p3), l4(p3, b3, h2, b3.head, 0), d4(b3);
      }, "tokenize"),
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: /* @__PURE__ */ o$1(function(p3, h2) {
          var g2 = a4.hooks.all;
          g2[p3] = g2[p3] || [], g2[p3].push(h2);
        }, "add"),
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: /* @__PURE__ */ o$1(function(p3, h2) {
          var g2 = a4.hooks.all[p3];
          if (!(!g2 || !g2.length))
            for (var w2 = 0, b3; b3 = g2[w2++]; )
              b3(h2);
        }, "run")
      },
      Token: i4
    };
    e4.Prism = a4;
    function i4(p3, h2, g2, w2) {
      this.type = p3, this.content = h2, this.alias = g2, this.length = (w2 || "").length | 0;
    }
    o$1(i4, "Token"), i4.stringify = /* @__PURE__ */ o$1(function p3(h2, g2) {
      if (typeof h2 == "string")
        return h2;
      if (Array.isArray(h2)) {
        var w2 = "";
        return h2.forEach(function(S4) {
          w2 += p3(S4, g2);
        }), w2;
      }
      var b3 = {
        type: h2.type,
        content: p3(h2.content, g2),
        tag: "span",
        classes: ["token", h2.type],
        attributes: {},
        language: g2
      }, x3 = h2.alias;
      x3 && (Array.isArray(x3) ? Array.prototype.push.apply(b3.classes, x3) : b3.classes.push(x3)), a4.hooks.run("wrap", b3);
      var E4 = "";
      for (var R4 in b3.attributes)
        E4 += " " + R4 + '="' + (b3.attributes[R4] || "").replace(/"/g, "&quot;") + '"';
      return "<" + b3.tag + ' class="' + b3.classes.join(" ") + '"' + E4 + ">" + b3.content + "</" + b3.tag + ">";
    }, "stringify");
    function c3(p3, h2, g2, w2) {
      p3.lastIndex = h2;
      var b3 = p3.exec(g2);
      if (b3 && w2 && b3[1]) {
        var x3 = b3[1].length;
        b3.index += x3, b3[0] = b3[0].slice(x3);
      }
      return b3;
    }
    o$1(c3, "matchPattern");
    function l4(p3, h2, g2, w2, b3, x3) {
      for (var E4 in g2)
        if (!(!g2.hasOwnProperty(E4) || !g2[E4])) {
          var R4 = g2[E4];
          R4 = Array.isArray(R4) ? R4 : [R4];
          for (var S4 = 0; S4 < R4.length; ++S4) {
            if (x3 && x3.cause == E4 + "," + S4)
              return;
            var A4 = R4[S4], M4 = A4.inside, L4 = !!A4.lookbehind, P2 = !!A4.greedy, _2 = A4.alias;
            if (P2 && !A4.pattern.global) {
              var D2 = A4.pattern.toString().match(/[imsuy]*$/)[0];
              A4.pattern = RegExp(A4.pattern.source, D2 + "g");
            }
            for (var K2 = A4.pattern || A4, T4 = w2.next, z4 = b3; T4 !== h2.tail && !(x3 && z4 >= x3.reach); z4 += T4.value.length, T4 = T4.next) {
              var k2 = T4.value;
              if (h2.length > p3.length)
                return;
              if (!(k2 instanceof i4)) {
                var $2 = 1, F2;
                if (P2) {
                  if (F2 = c3(K2, z4, p3, L4), !F2 || F2.index >= p3.length)
                    break;
                  var Ce2 = F2.index, j2 = F2.index + F2[0].length, O2 = z4;
                  for (O2 += T4.value.length; Ce2 >= O2; )
                    T4 = T4.next, O2 += T4.value.length;
                  if (O2 -= T4.value.length, z4 = O2, T4.value instanceof i4)
                    continue;
                  for (var G2 = T4; G2 !== h2.tail && (O2 < j2 || typeof G2.value == "string"); G2 = G2.next)
                    $2++, O2 += G2.value.length;
                  $2--, k2 = p3.slice(z4, O2), F2.index -= z4;
                } else if (F2 = c3(K2, 0, k2, L4), !F2)
                  continue;
                var Ce2 = F2.index, he2 = F2[0], fe2 = k2.slice(0, Ce2), de2 = k2.slice(Ce2 + he2.length), be2 = z4 + k2.length;
                x3 && be2 > x3.reach && (x3.reach = be2);
                var Me3 = T4.prev;
                fe2 && (Me3 = u4(h2, Me3, fe2), z4 += fe2.length), f4(h2, Me3, $2);
                var Nt3 = new i4(E4, M4 ? a4.tokenize(he2, M4) : he2, _2, he2);
                if (T4 = u4(h2, Me3, Nt3), de2 && u4(h2, T4, de2), $2 > 1) {
                  var Kr2 = {
                    cause: E4 + "," + S4,
                    reach: be2
                  };
                  l4(p3, h2, g2, T4.prev, z4, Kr2), x3 && Kr2.reach > x3.reach && (x3.reach = Kr2.reach);
                }
              }
            }
          }
        }
    }
    o$1(l4, "matchGrammar");
    function s4() {
      var p3 = { value: null, prev: null, next: null }, h2 = { value: null, prev: p3, next: null };
      p3.next = h2, this.head = p3, this.tail = h2, this.length = 0;
    }
    o$1(s4, "LinkedList");
    function u4(p3, h2, g2) {
      var w2 = h2.next, b3 = { value: g2, prev: h2, next: w2 };
      return h2.next = b3, w2.prev = b3, p3.length++, b3;
    }
    o$1(u4, "addAfter");
    function f4(p3, h2, g2) {
      for (var w2 = h2.next, b3 = 0; b3 < g2 && w2 !== p3.tail; b3++)
        w2 = w2.next;
      h2.next = w2, w2.prev = h2, p3.length -= b3;
    }
    o$1(f4, "removeRange");
    function d4(p3) {
      for (var h2 = [], g2 = p3.head.next; g2 !== p3.tail; )
        h2.push(g2.value), g2 = g2.next;
      return h2;
    }
    if (o$1(d4, "toArray"), !e4.document)
      return e4.addEventListener && (a4.disableWorkerMessageHandler || e4.addEventListener("message", function(p3) {
        var h2 = JSON.parse(p3.data), g2 = h2.language, w2 = h2.code, b3 = h2.immediateClose;
        e4.postMessage(a4.highlight(w2, a4.languages[g2], g2)), b3 && e4.close();
      }, false)), a4;
    var m2 = a4.util.currentScript();
    m2 && (a4.filename = m2.src, m2.hasAttribute("data-manual") && (a4.manual = true));
    function v2() {
      a4.manual || a4.highlightAll();
    }
    if (o$1(v2, "highlightAutomaticallyCallback"), !a4.manual) {
      var y3 = document.readyState;
      y3 === "loading" || y3 === "interactive" && m2 && m2.defer ? document.addEventListener("DOMContentLoaded", v2) : window.requestAnimationFrame ? window.requestAnimationFrame(v2) : window.setTimeout(v2, 16);
    }
    return a4;
  }(fm);
  typeof Gn2 < "u" && Gn2.exports && (Gn2.exports = js2);
  typeof global < "u" && (global.Prism = js2);
});
var Ha = H$1((Q9, Us2) => {
  Us2.exports = Ta;
  Ta.displayName = "markup";
  Ta.aliases = ["html", "mathml", "svg", "xml", "ssml", "atom", "rss"];
  function Ta(e4) {
    e4.languages.markup = {
      comment: {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        greedy: true
      },
      prolog: {
        pattern: /<\?[\s\S]+?\?>/,
        greedy: true
      },
      doctype: {
        // https://www.w3.org/TR/xml/#NT-doctypedecl
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: true,
        inside: {
          "internal-subset": {
            pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
            lookbehind: true,
            greedy: true,
            inside: null
            // see below
          },
          string: {
            pattern: /"[^"]*"|'[^']*'/,
            greedy: true
          },
          punctuation: /^<!|>$|[[\]]/,
          "doctype-tag": /^DOCTYPE/i,
          name: /[^\s<>'"]+/
        }
      },
      cdata: {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        greedy: true
      },
      tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: true,
        inside: {
          tag: {
            pattern: /^<\/?[^\s>\/]+/,
            inside: {
              punctuation: /^<\/?/,
              namespace: /^[^\s>\/:]+:/
            }
          },
          "special-attr": [],
          "attr-value": {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
            inside: {
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          },
          punctuation: /\/?>/,
          "attr-name": {
            pattern: /[^\s>\/]+/,
            inside: {
              namespace: /^[^\s>\/:]+:/
            }
          }
        }
      },
      entity: [
        {
          pattern: /&[\da-z]{1,8};/i,
          alias: "named-entity"
        },
        /&#x?[\da-f]{1,8};/i
      ]
    }, e4.languages.markup.tag.inside["attr-value"].inside.entity = e4.languages.markup.entity, e4.languages.markup.doctype.inside["internal-subset"].inside = e4.languages.markup, e4.hooks.add("wrap", function(t4) {
      t4.type === "entity" && (t4.attributes.title = t4.content.value.replace(/&amp;/, "&"));
    }), Object.defineProperty(e4.languages.markup.tag, "addInlined", {
      /**
       * Adds an inlined language to markup.
       *
       * An example of an inlined language is CSS with `<style>` tags.
       *
       * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addInlined('style', 'css');
       */
      value: /* @__PURE__ */ o$1(function(r4, n3) {
        var a4 = {};
        a4["language-" + n3] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: true,
          inside: e4.languages[n3]
        }, a4.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var i4 = {
          "included-cdata": {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: a4
          }
        };
        i4["language-" + n3] = {
          pattern: /[\s\S]+/,
          inside: e4.languages[n3]
        };
        var c3 = {};
        c3[r4] = {
          pattern: RegExp(
            /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
              /__/g,
              function() {
                return r4;
              }
            ),
            "i"
          ),
          lookbehind: true,
          greedy: true,
          inside: i4
        }, e4.languages.insertBefore("markup", "cdata", c3);
      }, "addInlined")
    }), Object.defineProperty(e4.languages.markup.tag, "addAttribute", {
      /**
       * Adds an pattern to highlight languages embedded in HTML attributes.
       *
       * An example of an inlined language is CSS with `style` attributes.
       *
       * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addAttribute('style', 'css');
       */
      value: /* @__PURE__ */ o$1(function(t4, r4) {
        e4.languages.markup.tag.inside["special-attr"].push({
          pattern: RegExp(
            /(^|["'\s])/.source + "(?:" + t4 + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
            "i"
          ),
          lookbehind: true,
          inside: {
            "attr-name": /^[^\s=]+/,
            "attr-value": {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: true,
                  alias: [r4, "language-" + r4],
                  inside: e4.languages[r4]
                },
                punctuation: [
                  {
                    pattern: /^=/,
                    alias: "attr-equals"
                  },
                  /"|'/
                ]
              }
            }
          }
        });
      }, "value")
    }), e4.languages.html = e4.languages.markup, e4.languages.mathml = e4.languages.markup, e4.languages.svg = e4.languages.markup, e4.languages.xml = e4.languages.extend("markup", {}), e4.languages.ssml = e4.languages.xml, e4.languages.atom = e4.languages.xml, e4.languages.rss = e4.languages.xml;
  }
  o$1(Ta, "markup");
});
var ka = H$1((ty, qs2) => {
  qs2.exports = Pa;
  Pa.displayName = "css";
  Pa.aliases = [];
  function Pa(e4) {
    (function(t4) {
      var r4 = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      t4.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
          pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
          inside: {
            rule: /^@[\w-]+/,
            "selector-function-argument": {
              pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
              lookbehind: true,
              alias: "selector"
            },
            keyword: {
              pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
              lookbehind: true
            }
            // See rest below
          }
        },
        url: {
          // https://drafts.csswg.org/css-values-3/#urls
          pattern: RegExp(
            "\\burl\\((?:" + r4.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)",
            "i"
          ),
          greedy: true,
          inside: {
            function: /^url/i,
            punctuation: /^\(|\)$/,
            string: {
              pattern: RegExp("^" + r4.source + "$"),
              alias: "url"
            }
          }
        },
        selector: {
          pattern: RegExp(
            `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + r4.source + ")*(?=\\s*\\{)"
          ),
          lookbehind: true
        },
        string: {
          pattern: r4,
          greedy: true
        },
        property: {
          pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
          lookbehind: true
        },
        important: /!important\b/i,
        function: {
          pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
          lookbehind: true
        },
        punctuation: /[(){};:,]/
      }, t4.languages.css.atrule.inside.rest = t4.languages.css;
      var n3 = t4.languages.markup;
      n3 && (n3.tag.addInlined("style", "css"), n3.tag.addAttribute("style", "css"));
    })(e4);
  }
  o$1(Pa, "css");
});
var Ys = H$1((ny, Gs2) => {
  Gs2.exports = Oa;
  Oa.displayName = "clike";
  Oa.aliases = [];
  function Oa(e4) {
    e4.languages.clike = {
      comment: [
        {
          pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
          lookbehind: true,
          greedy: true
        },
        {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: true,
          greedy: true
        }
      ],
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      },
      "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: true,
        inside: {
          punctuation: /[.\\]/
        }
      },
      keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
      boolean: /\b(?:false|true)\b/,
      function: /\b\w+(?=\()/,
      number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
      operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      punctuation: /[{}[\];(),.:]/
    };
  }
  o$1(Oa, "clike");
});
var Zs = H$1((ay, Xs2) => {
  Xs2.exports = Ba;
  Ba.displayName = "javascript";
  Ba.aliases = ["js"];
  function Ba(e4) {
    e4.languages.javascript = e4.languages.extend("clike", {
      "class-name": [
        e4.languages.clike["class-name"],
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
          lookbehind: true
        }
      ],
      keyword: [
        {
          pattern: /((?:^|\})\s*)catch\b/,
          lookbehind: true
        },
        {
          pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
          lookbehind: true
        }
      ],
      // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
      function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      number: {
        pattern: RegExp(
          /(^|[^\w$])/.source + "(?:" + // constant
          (/NaN|Infinity/.source + "|" + // binary integer
          /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
          /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
          /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
          /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
          /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
        ),
        lookbehind: true
      },
      operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    }), e4.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, e4.languages.insertBefore("javascript", "keyword", {
      regex: {
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: true,
        greedy: true,
        inside: {
          "regex-source": {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: true,
            alias: "language-regex",
            inside: e4.languages.regex
          },
          "regex-delimiter": /^\/|\/$/,
          "regex-flags": /^[a-z]+$/
        }
      },
      // This must be declared before keyword because we use "function" inside the look-forward
      "function-variable": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function"
      },
      parameter: [
        {
          pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: true,
          inside: e4.languages.javascript
        },
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: true,
          inside: e4.languages.javascript
        },
        {
          pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: true,
          inside: e4.languages.javascript
        },
        {
          pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: true,
          inside: e4.languages.javascript
        }
      ],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }), e4.languages.insertBefore("javascript", "string", {
      hashbang: {
        pattern: /^#!.*/,
        greedy: true,
        alias: "comment"
      },
      "template-string": {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: true,
        inside: {
          "template-punctuation": {
            pattern: /^`|`$/,
            alias: "string"
          },
          interpolation: {
            pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: true,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\$\{|\}$/,
                alias: "punctuation"
              },
              rest: e4.languages.javascript
            }
          },
          string: /[\s\S]+/
        }
      },
      "string-property": {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: true,
        greedy: true,
        alias: "property"
      }
    }), e4.languages.insertBefore("javascript", "operator", {
      "literal-property": {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: true,
        alias: "property"
      }
    }), e4.languages.markup && (e4.languages.markup.tag.addInlined("script", "javascript"), e4.languages.markup.tag.addAttribute(
      /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
      "javascript"
    )), e4.languages.js = e4.languages.javascript;
  }
  o$1(Ba, "javascript");
});
var e1 = H$1((ly, Qs2) => {
  var ln2 = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, dm = Am();
  ln2.Prism = { manual: true, disableWorkerMessageHandler: true };
  var pm = vs(), mm = $s(), Ks2 = Ws(), hm = Ha(), gm = ka(), vm = Ys(), wm = Zs();
  dm();
  var Na = {}.hasOwnProperty;
  function Js2() {
  }
  o$1(Js2, "Refractor");
  Js2.prototype = Ks2;
  var oe2 = new Js2();
  Qs2.exports = oe2;
  oe2.highlight = ym;
  oe2.register = cn2;
  oe2.alias = bm;
  oe2.registered = Rm;
  oe2.listLanguages = xm;
  cn2(hm);
  cn2(gm);
  cn2(vm);
  cn2(wm);
  oe2.util.encode = Cm;
  oe2.Token.stringify = Em;
  function cn2(e4) {
    if (typeof e4 != "function" || !e4.displayName)
      throw new Error("Expected `function` for `grammar`, got `" + e4 + "`");
    oe2.languages[e4.displayName] === void 0 && e4(oe2);
  }
  o$1(cn2, "register");
  function bm(e4, t4) {
    var r4 = oe2.languages, n3 = e4, a4, i4, c3, l4;
    t4 && (n3 = {}, n3[e4] = t4);
    for (a4 in n3)
      for (i4 = n3[a4], i4 = typeof i4 == "string" ? [i4] : i4, c3 = i4.length, l4 = -1; ++l4 < c3; )
        r4[i4[l4]] = r4[a4];
  }
  o$1(bm, "alias");
  function ym(e4, t4) {
    var r4 = Ks2.highlight, n3;
    if (typeof e4 != "string")
      throw new Error("Expected `string` for `value`, got `" + e4 + "`");
    if (oe2.util.type(t4) === "Object")
      n3 = t4, t4 = null;
    else {
      if (typeof t4 != "string")
        throw new Error("Expected `string` for `name`, got `" + t4 + "`");
      if (Na.call(oe2.languages, t4))
        n3 = oe2.languages[t4];
      else
        throw new Error("Unknown language: `" + t4 + "` is not registered");
    }
    return r4.call(this, e4, n3, t4);
  }
  o$1(ym, "highlight");
  function Rm(e4) {
    if (typeof e4 != "string")
      throw new Error("Expected `string` for `language`, got `" + e4 + "`");
    return Na.call(oe2.languages, e4);
  }
  o$1(Rm, "registered");
  function xm() {
    var e4 = oe2.languages, t4 = [], r4;
    for (r4 in e4)
      Na.call(e4, r4) && typeof e4[r4] == "object" && t4.push(r4);
    return t4;
  }
  o$1(xm, "listLanguages");
  function Em(e4, t4, r4) {
    var n3;
    return typeof e4 == "string" ? { type: "text", value: e4 } : oe2.util.type(e4) === "Array" ? Sm(e4, t4) : (n3 = {
      type: e4.type,
      content: oe2.Token.stringify(e4.content, t4, r4),
      tag: "span",
      classes: ["token", e4.type],
      attributes: {},
      language: t4,
      parent: r4
    }, e4.alias && (n3.classes = n3.classes.concat(e4.alias)), oe2.hooks.run("wrap", n3), pm(
      n3.tag + "." + n3.classes.join("."),
      Mm(n3.attributes),
      n3.content
    ));
  }
  o$1(Em, "stringify");
  function Sm(e4, t4) {
    for (var r4 = [], n3 = e4.length, a4 = -1, i4; ++a4 < n3; )
      i4 = e4[a4], i4 !== "" && i4 !== null && i4 !== void 0 && r4.push(i4);
    for (a4 = -1, n3 = r4.length; ++a4 < n3; )
      i4 = r4[a4], r4[a4] = oe2.Token.stringify(i4, t4, r4);
    return r4;
  }
  o$1(Sm, "stringifyAll");
  function Cm(e4) {
    return e4;
  }
  o$1(Cm, "encode");
  function Mm(e4) {
    var t4;
    for (t4 in e4)
      e4[t4] = mm(e4[t4]);
    return e4;
  }
  o$1(Mm, "attributes");
  function Am() {
    var e4 = "Prism" in ln2, t4 = e4 ? ln2.Prism : void 0;
    return r4;
    function r4() {
      e4 ? ln2.Prism = t4 : delete ln2.Prism, e4 = void 0, t4 = void 0;
    }
  }
  o$1(Am, "capture");
});
var Yn, Fa, Xn, t1 = C$1(() => {
  vc();
  Yn = ge$1(e1()), Fa = ma(Yn.default, {});
  Fa.registerLanguage = function(e4, t4) {
    return Yn.default.register(t4);
  };
  Fa.alias = function(e4, t4) {
    return Yn.default.alias(e4, t4);
  };
  Xn = Fa;
});
var r1 = C$1(() => {
  pa();
});
var o1 = H$1((py, n1) => {
  n1.exports = Da;
  Da.displayName = "bash";
  Da.aliases = ["shell"];
  function Da(e4) {
    (function(t4) {
      var r4 = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", n3 = {
        pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
        lookbehind: true,
        alias: "punctuation",
        // this looks reasonably well in all themes
        inside: null
        // see below
      }, a4 = {
        bash: n3,
        environment: {
          pattern: RegExp("\\$" + r4),
          alias: "constant"
        },
        variable: [
          // [0]: Arithmetic Environment
          {
            pattern: /\$?\(\([\s\S]+?\)\)/,
            greedy: true,
            inside: {
              // If there is a $ sign at the beginning highlight $(( and )) as variable
              variable: [
                {
                  pattern: /(^\$\(\([\s\S]+)\)\)/,
                  lookbehind: true
                },
                /^\$\(\(/
              ],
              number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
              // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
              operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
              // If there is no $ sign at the beginning highlight (( and )) as punctuation
              punctuation: /\(\(?|\)\)?|,|;/
            }
          },
          // [1]: Command Substitution
          {
            pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
            greedy: true,
            inside: {
              variable: /^\$\(|^`|\)$|`$/
            }
          },
          // [2]: Brace expansion
          {
            pattern: /\$\{[^}]+\}/,
            greedy: true,
            inside: {
              operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
              punctuation: /[\[\]]/,
              environment: {
                pattern: RegExp("(\\{)" + r4),
                lookbehind: true,
                alias: "constant"
              }
            }
          },
          /\$(?:\w+|[#?*!@$])/
        ],
        // Escape sequences from echo and printf's manuals, and escaped quotes.
        entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
      };
      t4.languages.bash = {
        shebang: {
          pattern: /^#!\s*\/.*/,
          alias: "important"
        },
        comment: {
          pattern: /(^|[^"{\\$])#.*/,
          lookbehind: true
        },
        "function-name": [
          // a) function foo {
          // b) foo() {
          // c) function foo() {
          // but not “foo {”
          {
            // a) and c)
            pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
            lookbehind: true,
            alias: "function"
          },
          {
            // b)
            pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
            alias: "function"
          }
        ],
        // Highlight variable names as variables in for and select beginnings.
        "for-or-select": {
          pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
          alias: "variable",
          lookbehind: true
        },
        // Highlight variable names as variables in the left-hand part
        // of assignments (“=” and “+=”).
        "assign-left": {
          pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
          inside: {
            environment: {
              pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + r4),
              lookbehind: true,
              alias: "constant"
            }
          },
          alias: "variable",
          lookbehind: true
        },
        string: [
          // Support for Here-documents https://en.wikipedia.org/wiki/Here_document
          {
            pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
            lookbehind: true,
            greedy: true,
            inside: a4
          },
          // Here-document with quotes around the tag
          // → No expansion (so no “inside”).
          {
            pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
            lookbehind: true,
            greedy: true,
            inside: {
              bash: n3
            }
          },
          // “Normal” string
          {
            // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
            pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
            lookbehind: true,
            greedy: true,
            inside: a4
          },
          {
            // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
            pattern: /(^|[^$\\])'[^']*'/,
            lookbehind: true,
            greedy: true
          },
          {
            // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
            pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
            greedy: true,
            inside: {
              entity: a4.entity
            }
          }
        ],
        environment: {
          pattern: RegExp("\\$?" + r4),
          alias: "constant"
        },
        variable: a4.variable,
        function: {
          pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
          lookbehind: true
        },
        keyword: {
          pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
          lookbehind: true
        },
        // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
        builtin: {
          pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
          lookbehind: true,
          // Alias added to make those easier to distinguish from strings.
          alias: "class-name"
        },
        boolean: {
          pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
          lookbehind: true
        },
        "file-descriptor": {
          pattern: /\B&\d\b/,
          alias: "important"
        },
        operator: {
          // Lots of redirections here, but not just that.
          pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
          inside: {
            "file-descriptor": {
              pattern: /^\d/,
              alias: "important"
            }
          }
        },
        punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
        number: {
          pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
          lookbehind: true
        }
      }, n3.inside = t4.languages.bash;
      for (var i4 = [
        "comment",
        "function-name",
        "for-or-select",
        "assign-left",
        "string",
        "environment",
        "function",
        "keyword",
        "builtin",
        "boolean",
        "file-descriptor",
        "operator",
        "punctuation",
        "number"
      ], c3 = a4.variable[1].inside, l4 = 0; l4 < i4.length; l4++)
        c3[i4[l4]] = t4.languages.bash[i4[l4]];
      t4.languages.shell = t4.languages.bash;
    })(e4);
  }
  o$1(Da, "bash");
});
var a1, i1, l1 = C$1(() => {
  a1 = ge$1(o1()), i1 = a1.default;
});
var c1, s1, u1 = C$1(() => {
  c1 = ge$1(ka()), s1 = c1.default;
});
var d1 = H$1((vy, f1) => {
  f1.exports = _a2;
  _a2.displayName = "graphql";
  _a2.aliases = [];
  function _a2(e4) {
    e4.languages.graphql = {
      comment: /#.*/,
      description: {
        pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
        greedy: true,
        alias: "string",
        inside: {
          "language-markdown": {
            pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
            lookbehind: true,
            inside: e4.languages.markdown
          }
        }
      },
      string: {
        pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
        greedy: true
      },
      number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
      boolean: /\b(?:false|true)\b/,
      variable: /\$[a-z_]\w*/i,
      directive: {
        pattern: /@[a-z_]\w*/i,
        alias: "function"
      },
      "attr-name": {
        pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
        greedy: true
      },
      "atom-input": {
        pattern: /\b[A-Z]\w*Input\b/,
        alias: "class-name"
      },
      scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
      constant: /\b[A-Z][A-Z_\d]*\b/,
      "class-name": {
        pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
        lookbehind: true
      },
      fragment: {
        pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
        lookbehind: true,
        alias: "function"
      },
      "definition-mutation": {
        pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
        lookbehind: true,
        alias: "function"
      },
      "definition-query": {
        pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
        lookbehind: true,
        alias: "function"
      },
      keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
      operator: /[!=|&]|\.{3}/,
      "property-query": /\w+(?=\s*\()/,
      object: /\w+(?=\s*\{)/,
      punctuation: /[!(){}\[\]:=,]/,
      property: /\w+/
    }, e4.hooks.add("after-tokenize", /* @__PURE__ */ o$1(function(r4) {
      if (r4.language !== "graphql")
        return;
      var n3 = r4.tokens.filter(function(h2) {
        return typeof h2 != "string" && h2.type !== "comment" && h2.type !== "scalar";
      }), a4 = 0;
      function i4(h2) {
        return n3[a4 + h2];
      }
      o$1(i4, "getToken");
      function c3(h2, g2) {
        g2 = g2 || 0;
        for (var w2 = 0; w2 < h2.length; w2++) {
          var b3 = i4(w2 + g2);
          if (!b3 || b3.type !== h2[w2])
            return false;
        }
        return true;
      }
      o$1(c3, "isTokenType");
      function l4(h2, g2) {
        for (var w2 = 1, b3 = a4; b3 < n3.length; b3++) {
          var x3 = n3[b3], E4 = x3.content;
          if (x3.type === "punctuation" && typeof E4 == "string") {
            if (h2.test(E4))
              w2++;
            else if (g2.test(E4) && (w2--, w2 === 0))
              return b3;
          }
        }
        return -1;
      }
      o$1(l4, "findClosingBracket");
      function s4(h2, g2) {
        var w2 = h2.alias;
        w2 ? Array.isArray(w2) || (h2.alias = w2 = [w2]) : h2.alias = w2 = [], w2.push(g2);
      }
      for (o$1(s4, "addAlias"); a4 < n3.length; ) {
        var u4 = n3[a4++];
        if (u4.type === "keyword" && u4.content === "mutation") {
          var f4 = [];
          if (c3(["definition-mutation", "punctuation"]) && i4(1).content === "(") {
            a4 += 2;
            var d4 = l4(/^\($/, /^\)$/);
            if (d4 === -1)
              continue;
            for (; a4 < d4; a4++) {
              var m2 = i4(0);
              m2.type === "variable" && (s4(m2, "variable-input"), f4.push(m2.content));
            }
            a4 = d4 + 1;
          }
          if (c3(["punctuation", "property-query"]) && i4(0).content === "{" && (a4++, s4(i4(0), "property-mutation"), f4.length > 0)) {
            var v2 = l4(/^\{$/, /^\}$/);
            if (v2 === -1)
              continue;
            for (var y3 = a4; y3 < v2; y3++) {
              var p3 = n3[y3];
              p3.type === "variable" && f4.indexOf(p3.content) >= 0 && s4(p3, "variable-input");
            }
          }
        }
      }
    }, "afterTokenizeGraphql"));
  }
  o$1(_a2, "graphql");
});
var p1, m1, h1 = C$1(() => {
  p1 = ge$1(d1()), m1 = p1.default;
});
var v1 = H$1((yy, g1) => {
  g1.exports = Va;
  Va.displayName = "jsExtras";
  Va.aliases = [];
  function Va(e4) {
    (function(t4) {
      t4.languages.insertBefore("javascript", "function-variable", {
        "method-variable": {
          pattern: RegExp(
            "(\\.\\s*)" + t4.languages.javascript["function-variable"].pattern.source
          ),
          lookbehind: true,
          alias: ["function-variable", "method", "function", "property-access"]
        }
      }), t4.languages.insertBefore("javascript", "function", {
        method: {
          pattern: RegExp(
            "(\\.\\s*)" + t4.languages.javascript.function.source
          ),
          lookbehind: true,
          alias: ["function", "property-access"]
        }
      }), t4.languages.insertBefore("javascript", "constant", {
        "known-class-name": [
          {
            // standard built-ins
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
            pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
            alias: "class-name"
          },
          {
            // errors
            pattern: /\b(?:[A-Z]\w*)Error\b/,
            alias: "class-name"
          }
        ]
      });
      function r4(s4, u4) {
        return RegExp(
          s4.replace(/<ID>/g, function() {
            return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
          }),
          u4
        );
      }
      o$1(r4, "withId"), t4.languages.insertBefore("javascript", "keyword", {
        imports: {
          // https://tc39.es/ecma262/#sec-imports
          pattern: r4(
            /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source
          ),
          lookbehind: true,
          inside: t4.languages.javascript
        },
        exports: {
          // https://tc39.es/ecma262/#sec-exports
          pattern: r4(
            /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source
          ),
          lookbehind: true,
          inside: t4.languages.javascript
        }
      }), t4.languages.javascript.keyword.unshift(
        {
          pattern: /\b(?:as|default|export|from|import)\b/,
          alias: "module"
        },
        {
          pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
          alias: "control-flow"
        },
        {
          pattern: /\bnull\b/,
          alias: ["null", "nil"]
        },
        {
          pattern: /\bundefined\b/,
          alias: "nil"
        }
      ), t4.languages.insertBefore("javascript", "operator", {
        spread: {
          pattern: /\.{3}/,
          alias: "operator"
        },
        arrow: {
          pattern: /=>/,
          alias: "operator"
        }
      }), t4.languages.insertBefore("javascript", "punctuation", {
        "property-access": {
          pattern: r4(/(\.\s*)#?<ID>/.source),
          lookbehind: true
        },
        "maybe-class-name": {
          pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
          lookbehind: true
        },
        dom: {
          // this contains only a few commonly used DOM variables
          pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
          alias: "variable"
        },
        console: {
          pattern: /\bconsole(?=\s*\.)/,
          alias: "class-name"
        }
      });
      for (var n3 = [
        "function",
        "function-variable",
        "method",
        "method-variable",
        "property-access"
      ], a4 = 0; a4 < n3.length; a4++) {
        var i4 = n3[a4], c3 = t4.languages.javascript[i4];
        t4.util.type(c3) === "RegExp" && (c3 = t4.languages.javascript[i4] = {
          pattern: c3
        });
        var l4 = c3.inside || {};
        c3.inside = l4, l4["maybe-class-name"] = /^[A-Z][\s\S]*/;
      }
    })(e4);
  }
  o$1(Va, "jsExtras");
});
var w1, b1, y1 = C$1(() => {
  w1 = ge$1(v1()), b1 = w1.default;
});
var x1 = H$1((Ey, R1) => {
  R1.exports = $a;
  $a.displayName = "json";
  $a.aliases = ["webmanifest"];
  function $a(e4) {
    e4.languages.json = {
      property: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
        lookbehind: true,
        greedy: true
      },
      string: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
        lookbehind: true,
        greedy: true
      },
      comment: {
        pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: true
      },
      number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
      punctuation: /[{}[\],]/,
      operator: /:/,
      boolean: /\b(?:false|true)\b/,
      null: {
        pattern: /\bnull\b/,
        alias: "keyword"
      }
    }, e4.languages.webmanifest = e4.languages.json;
  }
  o$1($a, "json");
});
var E1, S1, C1 = C$1(() => {
  E1 = ge$1(x1()), S1 = E1.default;
});
var Wa = H$1((My, M1) => {
  M1.exports = ja;
  ja.displayName = "jsx";
  ja.aliases = [];
  function ja(e4) {
    (function(t4) {
      var r4 = t4.util.clone(t4.languages.javascript), n3 = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source, a4 = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source, i4 = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
      function c3(u4, f4) {
        return u4 = u4.replace(/<S>/g, function() {
          return n3;
        }).replace(/<BRACES>/g, function() {
          return a4;
        }).replace(/<SPREAD>/g, function() {
          return i4;
        }), RegExp(u4, f4);
      }
      o$1(c3, "re"), i4 = c3(i4).source, t4.languages.jsx = t4.languages.extend("markup", r4), t4.languages.jsx.tag.pattern = c3(
        /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source
      ), t4.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, t4.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, t4.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, t4.languages.jsx.tag.inside.comment = r4.comment, t4.languages.insertBefore(
        "inside",
        "attr-name",
        {
          spread: {
            pattern: c3(/<SPREAD>/.source),
            inside: t4.languages.jsx
          }
        },
        t4.languages.jsx.tag
      ), t4.languages.insertBefore(
        "inside",
        "special-attr",
        {
          script: {
            // Allow for two levels of nesting
            pattern: c3(/=<BRACES>/.source),
            alias: "language-javascript",
            inside: {
              "script-punctuation": {
                pattern: /^=(?=\{)/,
                alias: "punctuation"
              },
              rest: t4.languages.jsx
            }
          }
        },
        t4.languages.jsx.tag
      );
      var l4 = /* @__PURE__ */ o$1(function(u4) {
        return u4 ? typeof u4 == "string" ? u4 : typeof u4.content == "string" ? u4.content : u4.content.map(l4).join("") : "";
      }, "stringifyToken"), s4 = /* @__PURE__ */ o$1(function(u4) {
        for (var f4 = [], d4 = 0; d4 < u4.length; d4++) {
          var m2 = u4[d4], v2 = false;
          if (typeof m2 != "string" && (m2.type === "tag" && m2.content[0] && m2.content[0].type === "tag" ? m2.content[0].content[0].content === "</" ? f4.length > 0 && f4[f4.length - 1].tagName === l4(m2.content[0].content[1]) && f4.pop() : m2.content[m2.content.length - 1].content === "/>" || f4.push({
            tagName: l4(m2.content[0].content[1]),
            openedBraces: 0
          }) : f4.length > 0 && m2.type === "punctuation" && m2.content === "{" ? f4[f4.length - 1].openedBraces++ : f4.length > 0 && f4[f4.length - 1].openedBraces > 0 && m2.type === "punctuation" && m2.content === "}" ? f4[f4.length - 1].openedBraces-- : v2 = true), (v2 || typeof m2 == "string") && f4.length > 0 && f4[f4.length - 1].openedBraces === 0) {
            var y3 = l4(m2);
            d4 < u4.length - 1 && (typeof u4[d4 + 1] == "string" || u4[d4 + 1].type === "plain-text") && (y3 += l4(u4[d4 + 1]), u4.splice(d4 + 1, 1)), d4 > 0 && (typeof u4[d4 - 1] == "string" || u4[d4 - 1].type === "plain-text") && (y3 = l4(u4[d4 - 1]) + y3, u4.splice(d4 - 1, 1), d4--), u4[d4] = new t4.Token(
              "plain-text",
              y3,
              null,
              y3
            );
          }
          m2.content && typeof m2.content != "string" && s4(m2.content);
        }
      }, "walkTokens");
      t4.hooks.add("after-tokenize", function(u4) {
        u4.language !== "jsx" && u4.language !== "tsx" || s4(u4.tokens);
      });
    })(e4);
  }
  o$1(ja, "jsx");
});
var A1, L1, I1 = C$1(() => {
  A1 = ge$1(Wa()), L1 = A1.default;
});
var T1 = H$1((Iy, z1) => {
  z1.exports = Ua;
  Ua.displayName = "markdown";
  Ua.aliases = ["md"];
  function Ua(e4) {
    (function(t4) {
      var r4 = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
      function n3(d4) {
        return d4 = d4.replace(/<inner>/g, function() {
          return r4;
        }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + d4 + ")");
      }
      o$1(n3, "createInline");
      var a4 = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, i4 = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
        /__/g,
        function() {
          return a4;
        }
      ), c3 = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
      t4.languages.markdown = t4.languages.extend("markup", {}), t4.languages.insertBefore("markdown", "prolog", {
        "front-matter-block": {
          pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
          lookbehind: true,
          greedy: true,
          inside: {
            punctuation: /^---|---$/,
            "front-matter": {
              pattern: /\S+(?:\s+\S+)*/,
              alias: ["yaml", "language-yaml"],
              inside: t4.languages.yaml
            }
          }
        },
        blockquote: {
          // > ...
          pattern: /^>(?:[\t ]*>)*/m,
          alias: "punctuation"
        },
        table: {
          pattern: RegExp(
            "^" + i4 + c3 + "(?:" + i4 + ")*",
            "m"
          ),
          inside: {
            "table-data-rows": {
              pattern: RegExp(
                "^(" + i4 + c3 + ")(?:" + i4 + ")*$"
              ),
              lookbehind: true,
              inside: {
                "table-data": {
                  pattern: RegExp(a4),
                  inside: t4.languages.markdown
                },
                punctuation: /\|/
              }
            },
            "table-line": {
              pattern: RegExp("^(" + i4 + ")" + c3 + "$"),
              lookbehind: true,
              inside: {
                punctuation: /\||:?-{3,}:?/
              }
            },
            "table-header-row": {
              pattern: RegExp("^" + i4 + "$"),
              inside: {
                "table-header": {
                  pattern: RegExp(a4),
                  alias: "important",
                  inside: t4.languages.markdown
                },
                punctuation: /\|/
              }
            }
          }
        },
        code: [
          {
            // Prefixed by 4 spaces or 1 tab and preceded by an empty line
            pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
            lookbehind: true,
            alias: "keyword"
          },
          {
            // ```optional language
            // code block
            // ```
            pattern: /^```[\s\S]*?^```$/m,
            greedy: true,
            inside: {
              "code-block": {
                pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                lookbehind: true
              },
              "code-language": {
                pattern: /^(```).+/,
                lookbehind: true
              },
              punctuation: /```/
            }
          }
        ],
        title: [
          {
            // title 1
            // =======
            // title 2
            // -------
            pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
            alias: "important",
            inside: {
              punctuation: /==+$|--+$/
            }
          },
          {
            // # title 1
            // ###### title 6
            pattern: /(^\s*)#.+/m,
            lookbehind: true,
            alias: "important",
            inside: {
              punctuation: /^#+|#+$/
            }
          }
        ],
        hr: {
          // ***
          // ---
          // * * *
          // -----------
          pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
          lookbehind: true,
          alias: "punctuation"
        },
        list: {
          // * item
          // + item
          // - item
          // 1. item
          pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
          lookbehind: true,
          alias: "punctuation"
        },
        "url-reference": {
          // [id]: http://example.com "Optional title"
          // [id]: http://example.com 'Optional title'
          // [id]: http://example.com (Optional title)
          // [id]: <http://example.com> "Optional title"
          pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
          inside: {
            variable: {
              pattern: /^(!?\[)[^\]]+/,
              lookbehind: true
            },
            string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
            punctuation: /^[\[\]!:]|[<>]/
          },
          alias: "url"
        },
        bold: {
          // **strong**
          // __strong__
          // allow one nested instance of italic text using the same delimiter
          pattern: n3(
            /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source
          ),
          lookbehind: true,
          greedy: true,
          inside: {
            content: {
              pattern: /(^..)[\s\S]+(?=..$)/,
              lookbehind: true,
              inside: {}
              // see below
            },
            punctuation: /\*\*|__/
          }
        },
        italic: {
          // *em*
          // _em_
          // allow one nested instance of bold text using the same delimiter
          pattern: n3(
            /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source
          ),
          lookbehind: true,
          greedy: true,
          inside: {
            content: {
              pattern: /(^.)[\s\S]+(?=.$)/,
              lookbehind: true,
              inside: {}
              // see below
            },
            punctuation: /[*_]/
          }
        },
        strike: {
          // ~~strike through~~
          // ~strike~
          // eslint-disable-next-line regexp/strict
          pattern: n3(/(~~?)(?:(?!~)<inner>)+\2/.source),
          lookbehind: true,
          greedy: true,
          inside: {
            content: {
              pattern: /(^~~?)[\s\S]+(?=\1$)/,
              lookbehind: true,
              inside: {}
              // see below
            },
            punctuation: /~~?/
          }
        },
        "code-snippet": {
          // `code`
          // ``code``
          pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
          lookbehind: true,
          greedy: true,
          alias: ["code", "keyword"]
        },
        url: {
          // [example](http://example.com "Optional title")
          // [example][id]
          // [example] [id]
          pattern: n3(
            /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source
          ),
          lookbehind: true,
          greedy: true,
          inside: {
            operator: /^!/,
            content: {
              pattern: /(^\[)[^\]]+(?=\])/,
              lookbehind: true,
              inside: {}
              // see below
            },
            variable: {
              pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
              lookbehind: true
            },
            url: {
              pattern: /(^\]\()[^\s)]+/,
              lookbehind: true
            },
            string: {
              pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
              lookbehind: true
            }
          }
        }
      }), ["url", "bold", "italic", "strike"].forEach(function(d4) {
        ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(m2) {
          d4 !== m2 && (t4.languages.markdown[d4].inside.content.inside[m2] = t4.languages.markdown[m2]);
        });
      }), t4.hooks.add("after-tokenize", function(d4) {
        if (d4.language !== "markdown" && d4.language !== "md")
          return;
        function m2(v2) {
          if (!(!v2 || typeof v2 == "string"))
            for (var y3 = 0, p3 = v2.length; y3 < p3; y3++) {
              var h2 = v2[y3];
              if (h2.type !== "code") {
                m2(h2.content);
                continue;
              }
              var g2 = h2.content[1], w2 = h2.content[3];
              if (g2 && w2 && g2.type === "code-language" && w2.type === "code-block" && typeof g2.content == "string") {
                var b3 = g2.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
                b3 = (/[a-z][\w-]*/i.exec(b3) || [""])[0].toLowerCase();
                var x3 = "language-" + b3;
                w2.alias ? typeof w2.alias == "string" ? w2.alias = [w2.alias, x3] : w2.alias.push(x3) : w2.alias = [x3];
              }
            }
        }
        o$1(m2, "walkTokens"), m2(d4.tokens);
      }), t4.hooks.add("wrap", function(d4) {
        if (d4.type === "code-block") {
          for (var m2 = "", v2 = 0, y3 = d4.classes.length; v2 < y3; v2++) {
            var p3 = d4.classes[v2], h2 = /language-(.+)/.exec(p3);
            if (h2) {
              m2 = h2[1];
              break;
            }
          }
          var g2 = t4.languages[m2];
          if (g2)
            d4.content = t4.highlight(
              f4(d4.content.value),
              g2,
              m2
            );
          else if (m2 && m2 !== "none" && t4.plugins.autoloader) {
            var w2 = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(Math.random() * 1e16);
            d4.attributes.id = w2, t4.plugins.autoloader.loadLanguages(m2, function() {
              var b3 = document.getElementById(w2);
              b3 && (b3.innerHTML = t4.highlight(
                b3.textContent,
                t4.languages[m2],
                m2
              ));
            });
          }
        }
      });
      var l4 = RegExp(t4.languages.markup.tag.pattern.source, "gi"), s4 = {
        amp: "&",
        lt: "<",
        gt: ">",
        quot: '"'
      }, u4 = String.fromCodePoint || String.fromCharCode;
      function f4(d4) {
        var m2 = d4.replace(l4, "");
        return m2 = m2.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(v2, y3) {
          if (y3 = y3.toLowerCase(), y3[0] === "#") {
            var p3;
            return y3[1] === "x" ? p3 = parseInt(y3.slice(2), 16) : p3 = Number(y3.slice(1)), u4(p3);
          } else {
            var h2 = s4[y3];
            return h2 || v2;
          }
        }), m2;
      }
      o$1(f4, "textContent"), t4.languages.md = t4.languages.markdown;
    })(e4);
  }
  o$1(Ua, "markdown");
});
var H1, P1, k1 = C$1(() => {
  H1 = ge$1(T1()), P1 = H1.default;
});
var O1, B1, N1 = C$1(() => {
  O1 = ge$1(Ha()), B1 = O1.default;
});
var Ga = H$1((Py, F1) => {
  F1.exports = qa;
  qa.displayName = "typescript";
  qa.aliases = ["ts"];
  function qa(e4) {
    (function(t4) {
      t4.languages.typescript = t4.languages.extend("javascript", {
        "class-name": {
          pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
          lookbehind: true,
          greedy: true,
          inside: null
          // see below
        },
        builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
      }), t4.languages.typescript.keyword.push(
        /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
        // keywords that have to be followed by an identifier
        /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
        // This is for `import type *, {}`
        /\btype\b(?=\s*(?:[\{*]|$))/
      ), delete t4.languages.typescript.parameter, delete t4.languages.typescript["literal-property"];
      var r4 = t4.languages.extend("typescript", {});
      delete r4["class-name"], t4.languages.typescript["class-name"].inside = r4, t4.languages.insertBefore("typescript", "function", {
        decorator: {
          pattern: /@[$\w\xA0-\uFFFF]+/,
          inside: {
            at: {
              pattern: /^@/,
              alias: "operator"
            },
            function: /^[\s\S]+/
          }
        },
        "generic-function": {
          // e.g. foo<T extends "bar" | "baz">( ...
          pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
          greedy: true,
          inside: {
            function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
            generic: {
              pattern: /<[\s\S]+/,
              // everything after the first <
              alias: "class-name",
              inside: r4
            }
          }
        }
      }), t4.languages.ts = t4.languages.typescript;
    })(e4);
  }
  o$1(qa, "typescript");
});
var _1 = H$1((Oy, D1) => {
  var Lm = Wa(), Im = Ga();
  D1.exports = Ya;
  Ya.displayName = "tsx";
  Ya.aliases = [];
  function Ya(e4) {
    e4.register(Lm), e4.register(Im), function(t4) {
      var r4 = t4.util.clone(t4.languages.typescript);
      t4.languages.tsx = t4.languages.extend("jsx", r4), delete t4.languages.tsx.parameter, delete t4.languages.tsx["literal-property"];
      var n3 = t4.languages.tsx.tag;
      n3.pattern = RegExp(
        /(^|[^\w$]|(?=<\/))/.source + "(?:" + n3.pattern.source + ")",
        n3.pattern.flags
      ), n3.lookbehind = true;
    }(e4);
  }
  o$1(Ya, "tsx");
});
var V1, $1, j1 = C$1(() => {
  V1 = ge$1(_1()), $1 = V1.default;
});
var W1, U1, q1 = C$1(() => {
  W1 = ge$1(Ga()), U1 = W1.default;
});
var Y1 = H$1((Dy, G1) => {
  G1.exports = Xa;
  Xa.displayName = "yaml";
  Xa.aliases = ["yml"];
  function Xa(e4) {
    (function(t4) {
      var r4 = /[*&][^\s[\]{},]+/, n3 = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, a4 = "(?:" + n3.source + "(?:[ 	]+" + r4.source + ")?|" + r4.source + "(?:[ 	]+" + n3.source + ")?)", i4 = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
        /<PLAIN>/g,
        function() {
          return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
        }
      ), c3 = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
      function l4(s4, u4) {
        u4 = (u4 || "").replace(/m/g, "") + "m";
        var f4 = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
          return a4;
        }).replace(/<<value>>/g, function() {
          return s4;
        });
        return RegExp(f4, u4);
      }
      o$1(l4, "createValuePattern"), t4.languages.yaml = {
        scalar: {
          pattern: RegExp(
            /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
              /<<prop>>/g,
              function() {
                return a4;
              }
            )
          ),
          lookbehind: true,
          alias: "string"
        },
        comment: /#.*/,
        key: {
          pattern: RegExp(
            /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
              return a4;
            }).replace(/<<key>>/g, function() {
              return "(?:" + i4 + "|" + c3 + ")";
            })
          ),
          lookbehind: true,
          greedy: true,
          alias: "atrule"
        },
        directive: {
          pattern: /(^[ \t]*)%.+/m,
          lookbehind: true,
          alias: "important"
        },
        datetime: {
          pattern: l4(
            /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source
          ),
          lookbehind: true,
          alias: "number"
        },
        boolean: {
          pattern: l4(/false|true/.source, "i"),
          lookbehind: true,
          alias: "important"
        },
        null: {
          pattern: l4(/null|~/.source, "i"),
          lookbehind: true,
          alias: "important"
        },
        string: {
          pattern: l4(c3),
          lookbehind: true,
          greedy: true
        },
        number: {
          pattern: l4(
            /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,
            "i"
          ),
          lookbehind: true
        },
        tag: n3,
        important: r4,
        punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
      }, t4.languages.yml = t4.languages.yaml;
    })(e4);
  }
  o$1(Xa, "yaml");
});
var X1, Z1, K1 = C$1(() => {
  X1 = ge$1(Y1()), Z1 = X1.default;
});
var zm, e5, Za, Ka = C$1(() => {
  zm = xr$3.div(({ theme: e4 }) => ({
    position: "absolute",
    bottom: 0,
    right: 0,
    maxWidth: "100%",
    display: "flex",
    background: e4.background.content,
    zIndex: 1
  })), e5 = xr$3.button(
    ({ theme: e4 }) => ({
      margin: 0,
      border: "0 none",
      padding: "4px 10px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      color: e4.color.defaultText,
      background: e4.background.content,
      fontSize: 12,
      lineHeight: "16px",
      fontFamily: e4.typography.fonts.base,
      fontWeight: e4.typography.weight.bold,
      borderTop: `1px solid ${e4.appBorderColor}`,
      borderLeft: `1px solid ${e4.appBorderColor}`,
      marginLeft: -1,
      borderRadius: "4px 0 0 0",
      "&:not(:last-child)": { borderRight: `1px solid ${e4.appBorderColor}` },
      "& + *": {
        borderLeft: `1px solid ${e4.appBorderColor}`,
        borderRadius: 0
      },
      "&:focus": {
        boxShadow: `${e4.color.secondary} 0 -3px 0 0 inset`,
        outline: "0 none",
        "@media (forced-colors: active)": {
          outline: "1px solid highlight"
        }
      }
    }),
    ({ disabled: e4 }) => e4 && {
      cursor: "not-allowed",
      opacity: 0.5
    }
  );
  e5.displayName = "ActionButton";
  Za = /* @__PURE__ */ o$1(({ actionItems: e$1, ...t4 }) => /* @__PURE__ */ e.createElement(zm, { ...t4 }, e$1.map(({
    title: r4,
    className: n3,
    onClick: a4,
    disabled: i4
  }, c3) => /* @__PURE__ */ e.createElement(e5, { key: c3, className: n3, onClick: a4, disabled: !!i4 }, r4))), "ActionBar");
});
function Tm(e4, t4) {
  typeof e4 == "function" ? e4(t4) : e4 != null && (e4.current = t4);
}
function Ja(...e4) {
  return (t4) => e4.forEach((r4) => Tm(r4, t4));
}
function ct(...e4) {
  return reactExports.useCallback(Ja(...e4), e4);
}
var Zn = C$1(() => {
  o$1(Tm, "setRef");
  o$1(Ja, "composeRefs");
  o$1(ct, "useComposedRefs");
});
function km(e4) {
  return reactExports.isValidElement(e4) && e4.type === Pm;
}
function Om(e4, t4) {
  let r4 = { ...t4 };
  for (let n3 in t4) {
    let a4 = e4[n3], i4 = t4[n3];
    /^on[A-Z]/.test(n3) ? a4 && i4 ? r4[n3] = (...l4) => {
      i4(...l4), a4(...l4);
    } : a4 && (r4[n3] = a4) : n3 === "style" ? r4[n3] = { ...a4, ...i4 } : n3 === "className" && (r4[n3] = [a4, i4].filter(Boolean).join(" "));
  }
  return { ...e4, ...r4 };
}
function Bm(e4) {
  var _a2, _b2;
  let t4 = (_a2 = Object.getOwnPropertyDescriptor(e4.props, "ref")) == null ? void 0 : _a2.get, r4 = t4 && "isReactWarning" in t4 && t4.isReactWarning;
  return r4 ? e4.ref : (t4 = (_b2 = Object.getOwnPropertyDescriptor(e4, "ref")) == null ? void 0 : _b2.get, r4 = t4 && "isReactWarning" in t4 && t4.isReactWarning, r4 ? e4.props.ref : e4.props.ref || e4.ref);
}
var ti, ei, Pm, r5 = C$1(() => {
  Zn();
  ti = reactExports.forwardRef((e4, t4) => {
    let { children: r4, ...n3 } = e4, a4 = reactExports.Children.toArray(r4), i4 = a4.find(km);
    if (i4) {
      let c3 = i4.props.children, l4 = a4.map((s4) => s4 === i4 ? reactExports.Children.count(c3) > 1 ? reactExports.Children.only(null) : reactExports.isValidElement(c3) ? c3.props.children : null : s4);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(ei, { ...n3, ref: t4, children: reactExports.isValidElement(c3) ? reactExports.cloneElement(c3, void 0, l4) : null });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ei, { ...n3, ref: t4, children: r4 });
  });
  ti.displayName = "Slot";
  ei = reactExports.forwardRef((e4, t4) => {
    let { children: r4, ...n3 } = e4;
    if (reactExports.isValidElement(r4)) {
      let a4 = Bm(r4);
      return reactExports.cloneElement(r4, {
        ...Om(n3, r4.props),
        // @ts-ignore
        ref: t4 ? Ja(t4, a4) : a4
      });
    }
    return reactExports.Children.count(r4) > 1 ? reactExports.Children.only(null) : null;
  });
  ei.displayName = "SlotClone";
  Pm = /* @__PURE__ */ o$1(({ children: e4 }) => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: e4 }), "Slottable");
  o$1(km, "isSlottable");
  o$1(Om, "mergeProps");
  o$1(Bm, "getElementRef");
});
var Dm, br, o5 = C$1(() => {
  r5();
  Dm = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul"
  ], br = Dm.reduce((e4, t4) => {
    let r4 = reactExports.forwardRef((n3, a4) => {
      let { asChild: i4, ...c3 } = n3, l4 = i4 ? ti : t4;
      return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), /* @__PURE__ */ jsxRuntimeExports.jsx(l4, { ...c3, ref: a4 });
    });
    return r4.displayName = `Primitive.${t4}`, { ...e4, [t4]: r4 };
  }, {});
});
var sn, ri = C$1(() => {
  sn = (globalThis == null ? void 0 : globalThis.document) ? reactExports.useLayoutEffect : () => {
  };
});
function _m(e4, t4) {
  return reactExports.useReducer((r4, n3) => t4[r4][n3] ?? r4, e4);
}
function Vm(e4) {
  let [t4, r4] = reactExports.useState(), n3 = reactExports.useRef({}), a4 = reactExports.useRef(e4), i4 = reactExports.useRef("none"), c3 = e4 ? "mounted" : "unmounted", [l4, s4] = _m(c3, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return reactExports.useEffect(() => {
    let u4 = Kn(n3.current);
    i4.current = l4 === "mounted" ? u4 : "none";
  }, [l4]), sn(() => {
    let u4 = n3.current, f4 = a4.current;
    if (f4 !== e4) {
      let m2 = i4.current, v2 = Kn(u4);
      e4 ? s4("MOUNT") : v2 === "none" || (u4 == null ? void 0 : u4.display) === "none" ? s4("UNMOUNT") : s4(f4 && m2 !== v2 ? "ANIMATION_OUT" : "UNMOUNT"), a4.current = e4;
    }
  }, [e4, s4]), sn(() => {
    if (t4) {
      let u4 = /* @__PURE__ */ o$1((d4) => {
        let v2 = Kn(n3.current).includes(d4.animationName);
        d4.target === t4 && v2 && reactDomExports.flushSync(() => s4("ANIMATION_END"));
      }, "handleAnimationEnd"), f4 = /* @__PURE__ */ o$1((d4) => {
        d4.target === t4 && (i4.current = Kn(n3.current));
      }, "handleAnimationStart");
      return t4.addEventListener("animationstart", f4), t4.addEventListener("animationcancel", u4), t4.addEventListener("animationend", u4), () => {
        t4.removeEventListener("animationstart", f4), t4.removeEventListener("animationcancel", u4), t4.removeEventListener("animationend", u4);
      };
    } else
      s4("ANIMATION_END");
  }, [t4, s4]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l4),
    ref: reactExports.useCallback((u4) => {
      u4 && (n3.current = getComputedStyle(u4)), r4(u4);
    }, [])
  };
}
function Kn(e4) {
  return (e4 == null ? void 0 : e4.animationName) || "none";
}
function $m(e4) {
  var _a2, _b2;
  let t4 = (_a2 = Object.getOwnPropertyDescriptor(e4.props, "ref")) == null ? void 0 : _a2.get, r4 = t4 && "isReactWarning" in t4 && t4.isReactWarning;
  return r4 ? e4.ref : (t4 = (_b2 = Object.getOwnPropertyDescriptor(e4, "ref")) == null ? void 0 : _b2.get, r4 = t4 && "isReactWarning" in t4 && t4.isReactWarning, r4 ? e4.props.ref : e4.props.ref || e4.ref);
}
var yr, c5 = C$1(() => {
  "use client";
  Zn();
  ri();
  o$1(_m, "useStateMachine");
  yr = /* @__PURE__ */ o$1((e4) => {
    let { present: t4, children: r4 } = e4, n3 = Vm(t4), a4 = typeof r4 == "function" ? r4({ present: n3.isPresent }) : reactExports.Children.only(r4), i4 = ct(n3.ref, $m(a4));
    return typeof r4 == "function" || n3.isPresent ? reactExports.cloneElement(a4, { ref: i4 }) : null;
  }, "Presence");
  yr.displayName = "Presence";
  o$1(Vm, "usePresence");
  o$1(Kn, "getAnimationName");
  o$1($m, "getElementRef");
});
function s5(e4, t4 = []) {
  let r4 = [];
  function n3(i4, c3) {
    let l4 = reactExports.createContext(c3), s4 = r4.length;
    r4 = [...r4, c3];
    function u4(d4) {
      let { scope: m2, children: v2, ...y3 } = d4, p3 = (m2 == null ? void 0 : m2[e4][s4]) || l4, h2 = reactExports.useMemo(() => y3, Object.values(y3));
      return /* @__PURE__ */ jsxRuntimeExports.jsx(p3.Provider, { value: h2, children: v2 });
    }
    o$1(u4, "Provider");
    function f4(d4, m2) {
      let v2 = (m2 == null ? void 0 : m2[e4][s4]) || l4, y3 = reactExports.useContext(v2);
      if (y3) return y3;
      if (c3 !== void 0) return c3;
      throw new Error(`\`${d4}\` must be used within \`${i4}\``);
    }
    return o$1(f4, "useContext2"), u4.displayName = i4 + "Provider", [u4, f4];
  }
  o$1(n3, "createContext3");
  let a4 = /* @__PURE__ */ o$1(() => {
    let i4 = r4.map((c3) => reactExports.createContext(c3));
    return /* @__PURE__ */ o$1(function(l4) {
      let s4 = (l4 == null ? void 0 : l4[e4]) || i4;
      return reactExports.useMemo(
        () => ({ [`__scope${e4}`]: { ...l4, [e4]: s4 } }),
        [l4, s4]
      );
    }, "useScope");
  }, "createScope");
  return a4.scopeName = e4, [n3, Wm(a4, ...t4)];
}
function Wm(...e4) {
  let t4 = e4[0];
  if (e4.length === 1) return t4;
  let r4 = /* @__PURE__ */ o$1(() => {
    let n3 = e4.map((a4) => ({
      useScope: a4(),
      scopeName: a4.scopeName
    }));
    return /* @__PURE__ */ o$1(function(i4) {
      let c3 = n3.reduce((l4, { useScope: s4, scopeName: u4 }) => {
        let d4 = s4(i4)[`__scope${u4}`];
        return { ...l4, ...d4 };
      }, {});
      return reactExports.useMemo(() => ({ [`__scope${t4.scopeName}`]: c3 }), [c3]);
    }, "useComposedScopes");
  }, "createScope");
  return r4.scopeName = t4.scopeName, r4;
}
var u5 = C$1(() => {
  o$1(s5, "createContextScope");
  o$1(Wm, "composeContextScopes");
});
function St(e4) {
  let t4 = reactExports.useRef(e4);
  return reactExports.useEffect(() => {
    t4.current = e4;
  }), reactExports.useMemo(() => (...r4) => {
    var _a2;
    return (_a2 = t4.current) == null ? void 0 : _a2.call(t4, ...r4);
  }, []);
}
var f5 = C$1(() => {
  o$1(St, "useCallbackRef");
});
function d5(e4) {
  let t4 = reactExports.useContext(Um);
  return e4 || t4 || "ltr";
}
var Um, p5 = C$1(() => {
  Um = reactExports.createContext(void 0);
  o$1(d5, "useDirection");
});
function m5(e4, [t4, r4]) {
  return Math.min(r4, Math.max(t4, e4));
}
var h5 = C$1(() => {
  o$1(m5, "clamp");
});
function Ct(e4, t4, { checkForDefaultPrevented: r4 = true } = {}) {
  return /* @__PURE__ */ o$1(function(a4) {
    if (e4 == null ? void 0 : e4(a4), r4 === false || !a4.defaultPrevented)
      return t4 == null ? void 0 : t4(a4);
  }, "handleEvent");
}
var g5 = C$1(() => {
  o$1(Ct, "composeEventHandlers");
});
function qm(e4, t4) {
  return reactExports.useReducer((r4, n3) => t4[r4][n3] ?? r4, e4);
}
function eo(e4) {
  return e4 ? parseInt(e4, 10) : 0;
}
function I5(e4, t4) {
  let r4 = e4 / t4;
  return isNaN(r4) ? 0 : r4;
}
function to(e4) {
  let t4 = I5(e4.viewport, e4.content), r4 = e4.scrollbar.paddingStart + e4.scrollbar.paddingEnd, n3 = (e4.scrollbar.size - r4) * t4;
  return Math.max(n3, 18);
}
function nh(e4, t4, r4, n3 = "ltr") {
  let a4 = to(r4), i4 = a4 / 2, c3 = t4 || i4, l4 = a4 - c3, s4 = r4.scrollbar.paddingStart + c3, u4 = r4.scrollbar.size - r4.scrollbar.paddingEnd - l4, f4 = r4.content - r4.viewport, d4 = n3 === "ltr" ? [0, f4] : [f4 * -1, 0];
  return z5([s4, u4], d4)(e4);
}
function v5(e4, t4, r4 = "ltr") {
  let n3 = to(t4), a4 = t4.scrollbar.paddingStart + t4.scrollbar.paddingEnd, i4 = t4.scrollbar.size - a4, c3 = t4.content - t4.viewport, l4 = i4 - n3, s4 = r4 === "ltr" ? [0, c3] : [c3 * -1, 0], u4 = m5(e4, s4);
  return z5([0, c3], [0, l4])(u4);
}
function z5(e4, t4) {
  return (r4) => {
    if (e4[0] === e4[1] || t4[0] === t4[1]) return t4[0];
    let n3 = (t4[1] - t4[0]) / (e4[1] - e4[0]);
    return t4[0] + n3 * (r4 - e4[0]);
  };
}
function T5(e4, t4) {
  return e4 > 0 && e4 < t4;
}
function ro(e4, t4) {
  let r4 = St(e4), n3 = reactExports.useRef(0);
  return reactExports.useEffect(() => () => window.clearTimeout(n3.current), []), reactExports.useCallback(() => {
    window.clearTimeout(n3.current), n3.current = window.setTimeout(r4, t4);
  }, [r4, t4]);
}
function xr(e4, t4) {
  let r4 = St(t4);
  sn(() => {
    let n3 = 0;
    if (e4) {
      let a4 = new ResizeObserver(() => {
        cancelAnimationFrame(n3), n3 = window.requestAnimationFrame(r4);
      });
      return a4.observe(e4), () => {
        window.cancelAnimationFrame(n3), a4.unobserve(e4);
      };
    }
  }, [e4, r4]);
}
function ah(e4, t4) {
  let { asChild: r4, children: n3 } = e4;
  if (!r4) return typeof t4 == "function" ? t4(n3) : t4;
  let a4 = reactExports.Children.only(n3);
  return reactExports.cloneElement(a4, {
    children: typeof t4 == "function" ? t4(a4.props.children) : t4
  });
}
var ni, b5, zR, Xm, $e$1, y5, R5, x5, ot, E5, Zm, Km, S5, oi, Jm, Qm, eh, C5, M5, Qn, A5, th, ai, L5, rh, oh, H5, P5, k5, O5, B5, N5 = C$1(() => {
  "use client";
  o5();
  c5();
  u5();
  Zn();
  f5();
  p5();
  ri();
  h5();
  g5();
  o$1(qm, "useStateMachine");
  ni = "ScrollArea", [b5, zR] = s5(ni), [Xm, $e$1] = b5(ni), y5 = reactExports.forwardRef(
    (e4, t4) => {
      let {
        __scopeScrollArea: r4,
        type: n3 = "hover",
        dir: a4,
        scrollHideDelay: i4 = 600,
        ...c3
      } = e4, [l4, s4] = reactExports.useState(null), [u4, f4] = reactExports.useState(null), [d4, m2] = reactExports.useState(null), [v2, y3] = reactExports.useState(null), [p3, h2] = reactExports.useState(
        null
      ), [g2, w2] = reactExports.useState(0), [b3, x3] = reactExports.useState(0), [E4, R4] = reactExports.useState(false), [S4, A4] = reactExports.useState(false), M4 = ct(t4, (P2) => s4(P2)), L4 = d5(
        a4
      );
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Xm,
        {
          scope: r4,
          type: n3,
          dir: L4,
          scrollHideDelay: i4,
          scrollArea: l4,
          viewport: u4,
          onViewportChange: f4,
          content: d4,
          onContentChange: m2,
          scrollbarX: v2,
          onScrollbarXChange: y3,
          scrollbarXEnabled: E4,
          onScrollbarXEnabledChange: R4,
          scrollbarY: p3,
          onScrollbarYChange: h2,
          scrollbarYEnabled: S4,
          onScrollbarYEnabledChange: A4,
          onCornerWidthChange: w2,
          onCornerHeightChange: x3,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            br.div,
            {
              dir: L4,
              ...c3,
              ref: M4,
              style: {
                position: "relative",
                // Pass corner sizes as CSS vars to reduce re-renders of context consumers
                "--radix-scroll-area-corner-width": g2 + "px",
                "--radix-scroll-area-corner-height": b3 + "px",
                ...e4.style
              }
            }
          )
        }
      );
    }
  );
  y5.displayName = ni;
  R5 = "ScrollAreaViewport", x5 = reactExports.forwardRef(
    (e4, t4) => {
      let { __scopeScrollArea: r4, children: n3, asChild: a4, nonce: i4, ...c3 } = e4, l4 = $e$1(R5, r4), s4 = reactExports.useRef(null), u4 = ct(t4, s4, l4.onViewportChange);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
[data-radix-scroll-area-viewport] {
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
}
[data-radix-scroll-area-viewport]::-webkit-scrollbar {
  display: none;
}
:where([data-radix-scroll-area-viewport]) {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
:where([data-radix-scroll-area-content]) {
  flex-grow: 1;
}
`
            },
            nonce: i4
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          br.div,
          {
            "data-radix-scroll-area-viewport": "",
            ...c3,
            asChild: a4,
            ref: u4,
            style: {
              /**
               * We don't support `visible` because the intention is to have at least one scrollbar
               * if this component is used and `visible` will behave like `auto` in that case
               * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
               *
               * We don't handle `auto` because the intention is for the native implementation
               * to be hidden if using this component. We just want to ensure the node is scrollable
               * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
               * the browser from having to work out whether to render native scrollbars or not,
               * we tell it to with the intention of hiding them in CSS.
               */
              overflowX: l4.scrollbarXEnabled ? "scroll" : "hidden",
              overflowY: l4.scrollbarYEnabled ? "scroll" : "hidden",
              ...e4.style
            },
            children: ah({ asChild: a4, children: n3 }, (f4) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                "data-radix-scroll-area-content": "",
                ref: l4.onContentChange,
                style: { minWidth: l4.scrollbarXEnabled ? "fit-content" : void 0 },
                children: f4
              }
            ))
          }
        )
      ] });
    }
  );
  x5.displayName = R5;
  ot = "ScrollAreaScrollbar", E5 = reactExports.forwardRef(
    (e4, t4) => {
      let { forceMount: r4, ...n3 } = e4, a4 = $e$1(ot, e4.__scopeScrollArea), { onScrollbarXEnabledChange: i4, onScrollbarYEnabledChange: c3 } = a4, l4 = e4.orientation === "horizontal";
      return reactExports.useEffect(() => (l4 ? i4(true) : c3(true), () => {
        l4 ? i4(false) : c3(false);
      }), [l4, i4, c3]), a4.type === "hover" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Zm, { ...n3, ref: t4, forceMount: r4 }) : a4.type === "scroll" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        Km,
        { ...n3, ref: t4, forceMount: r4 }
      ) : a4.type === "auto" ? /* @__PURE__ */ jsxRuntimeExports.jsx(S5, { ...n3, ref: t4, forceMount: r4 }) : a4.type === "always" ? /* @__PURE__ */ jsxRuntimeExports.jsx(oi, { ...n3, ref: t4 }) : null;
    }
  );
  E5.displayName = ot;
  Zm = reactExports.forwardRef((e4, t4) => {
    let { forceMount: r4, ...n3 } = e4, a4 = $e$1(ot, e4.__scopeScrollArea), [i4, c3] = reactExports.useState(false);
    return reactExports.useEffect(() => {
      let l4 = a4.scrollArea, s4 = 0;
      if (l4) {
        let u4 = /* @__PURE__ */ o$1(() => {
          window.clearTimeout(s4), c3(true);
        }, "handlePointerEnter"), f4 = /* @__PURE__ */ o$1(() => {
          s4 = window.setTimeout(() => c3(false), a4.scrollHideDelay);
        }, "handlePointerLeave");
        return l4.addEventListener("pointerenter", u4), l4.addEventListener("pointerleave", f4), () => {
          window.clearTimeout(s4), l4.removeEventListener("pointerenter", u4), l4.removeEventListener("pointerleave", f4);
        };
      }
    }, [a4.scrollArea, a4.scrollHideDelay]), /* @__PURE__ */ jsxRuntimeExports.jsx(yr, { present: r4 || i4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      S5,
      {
        "data-state": i4 ? "visible" : "hidden",
        ...n3,
        ref: t4
      }
    ) });
  }), Km = reactExports.forwardRef((e4, t4) => {
    let { forceMount: r4, ...n3 } = e4, a4 = $e$1(ot, e4.__scopeScrollArea), i4 = e4.orientation === "horizontal", c3 = ro(() => s4("SCROLL_END"), 100), [l4, s4] = qm("hidden", {
      hidden: {
        SCROLL: "scrolling"
      },
      scrolling: {
        SCROLL_END: "idle",
        POINTER_ENTER: "interacting"
      },
      interacting: {
        SCROLL: "interacting",
        POINTER_LEAVE: "idle"
      },
      idle: {
        HIDE: "hidden",
        SCROLL: "scrolling",
        POINTER_ENTER: "interacting"
      }
    });
    return reactExports.useEffect(() => {
      if (l4 === "idle") {
        let u4 = window.setTimeout(() => s4("HIDE"), a4.scrollHideDelay);
        return () => window.clearTimeout(u4);
      }
    }, [l4, a4.scrollHideDelay, s4]), reactExports.useEffect(() => {
      let u4 = a4.viewport, f4 = i4 ? "scrollLeft" : "scrollTop";
      if (u4) {
        let d4 = u4[f4], m2 = /* @__PURE__ */ o$1(() => {
          let v2 = u4[f4];
          d4 !== v2 && (s4("SCROLL"), c3()), d4 = v2;
        }, "handleScroll");
        return u4.addEventListener("scroll", m2), () => u4.removeEventListener("scroll", m2);
      }
    }, [a4.viewport, i4, s4, c3]), /* @__PURE__ */ jsxRuntimeExports.jsx(yr, { present: r4 || l4 !== "hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      oi,
      {
        "data-state": l4 === "hidden" ? "hidden" : "visible",
        ...n3,
        ref: t4,
        onPointerEnter: Ct(e4.onPointerEnter, () => s4("POINTER_ENTER")),
        onPointerLeave: Ct(e4.onPointerLeave, () => s4("POINTER_LEAVE"))
      }
    ) });
  }), S5 = reactExports.forwardRef((e4, t4) => {
    let r4 = $e$1(ot, e4.__scopeScrollArea), { forceMount: n3, ...a4 } = e4, [i4, c3] = reactExports.useState(false), l4 = e4.orientation === "horizontal", s4 = ro(() => {
      if (r4.viewport) {
        let u4 = r4.viewport.offsetWidth < r4.viewport.scrollWidth, f4 = r4.viewport.offsetHeight < r4.viewport.scrollHeight;
        c3(l4 ? u4 : f4);
      }
    }, 10);
    return xr(r4.viewport, s4), xr(r4.content, s4), /* @__PURE__ */ jsxRuntimeExports.jsx(yr, { present: n3 || i4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      oi,
      {
        "data-state": i4 ? "visible" : "hidden",
        ...a4,
        ref: t4
      }
    ) });
  }), oi = reactExports.forwardRef((e4, t4) => {
    let { orientation: r4 = "vertical", ...n3 } = e4, a4 = $e$1(ot, e4.__scopeScrollArea), i4 = reactExports.useRef(null), c3 = reactExports.useRef(0), [l4, s4] = reactExports.useState(
      {
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
      }
    ), u4 = I5(l4.viewport, l4.content), f4 = {
      ...n3,
      sizes: l4,
      onSizesChange: s4,
      hasThumb: u4 > 0 && u4 < 1,
      onThumbChange: /* @__PURE__ */ o$1((m2) => i4.current = m2, "onThumbChange"),
      onThumbPointerUp: /* @__PURE__ */ o$1(() => c3.current = 0, "onThumbPointerUp"),
      onThumbPointerDown: /* @__PURE__ */ o$1((m2) => c3.current = m2, "onThumbPointerDown")
    };
    function d4(m2, v2) {
      return nh(m2, c3.current, l4, v2);
    }
    return o$1(d4, "getScrollPosition"), r4 === "horizontal" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Jm,
      {
        ...f4,
        ref: t4,
        onThumbPositionChange: /* @__PURE__ */ o$1(() => {
          if (a4.viewport && i4.current) {
            let m2 = a4.viewport.scrollLeft, v2 = v5(m2, l4, a4.dir);
            i4.current.style.transform = `translate3d(${v2}px, 0, 0)`;
          }
        }, "onThumbPositionChange"),
        onWheelScroll: /* @__PURE__ */ o$1((m2) => {
          a4.viewport && (a4.viewport.scrollLeft = m2);
        }, "onWheelScroll"),
        onDragScroll: /* @__PURE__ */ o$1((m2) => {
          a4.viewport && (a4.viewport.scrollLeft = d4(m2, a4.dir));
        }, "onDragScroll")
      }
    ) : r4 === "vertical" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Qm,
      {
        ...f4,
        ref: t4,
        onThumbPositionChange: /* @__PURE__ */ o$1(() => {
          if (a4.viewport && i4.current) {
            let m2 = a4.viewport.scrollTop, v2 = v5(m2, l4);
            i4.current.style.transform = `translate3d(0, ${v2}px, 0)`;
          }
        }, "onThumbPositionChange"),
        onWheelScroll: /* @__PURE__ */ o$1((m2) => {
          a4.viewport && (a4.viewport.scrollTop = m2);
        }, "onWheelScroll"),
        onDragScroll: /* @__PURE__ */ o$1((m2) => {
          a4.viewport && (a4.viewport.scrollTop = d4(m2));
        }, "onDragScroll")
      }
    ) : null;
  }), Jm = reactExports.forwardRef((e4, t4) => {
    let { sizes: r4, onSizesChange: n3, ...a4 } = e4, i4 = $e$1(ot, e4.__scopeScrollArea), [c3, l4] = reactExports.useState(), s4 = reactExports.useRef(null), u4 = ct(t4, s4, i4.onScrollbarXChange);
    return reactExports.useEffect(() => {
      s4.current && l4(getComputedStyle(s4.current));
    }, [s4]), /* @__PURE__ */ jsxRuntimeExports.jsx(
      M5,
      {
        "data-orientation": "horizontal",
        ...a4,
        ref: u4,
        sizes: r4,
        style: {
          bottom: 0,
          left: i4.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
          right: i4.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
          "--radix-scroll-area-thumb-width": to(r4) + "px",
          ...e4.style
        },
        onThumbPointerDown: /* @__PURE__ */ o$1((f4) => e4.onThumbPointerDown(f4.x), "onThumbPointerDown"),
        onDragScroll: /* @__PURE__ */ o$1((f4) => e4.onDragScroll(f4.x), "onDragScroll"),
        onWheelScroll: /* @__PURE__ */ o$1((f4, d4) => {
          if (i4.viewport) {
            let m2 = i4.viewport.scrollLeft + f4.deltaX;
            e4.onWheelScroll(m2), T5(m2, d4) && f4.preventDefault();
          }
        }, "onWheelScroll"),
        onResize: /* @__PURE__ */ o$1(() => {
          s4.current && i4.viewport && c3 && n3({
            content: i4.viewport.scrollWidth,
            viewport: i4.viewport.offsetWidth,
            scrollbar: {
              size: s4.current.clientWidth,
              paddingStart: eo(c3.paddingLeft),
              paddingEnd: eo(c3.paddingRight)
            }
          });
        }, "onResize")
      }
    );
  }), Qm = reactExports.forwardRef((e4, t4) => {
    let { sizes: r4, onSizesChange: n3, ...a4 } = e4, i4 = $e$1(ot, e4.__scopeScrollArea), [c3, l4] = reactExports.useState(), s4 = reactExports.useRef(null), u4 = ct(t4, s4, i4.onScrollbarYChange);
    return reactExports.useEffect(() => {
      s4.current && l4(getComputedStyle(s4.current));
    }, [s4]), /* @__PURE__ */ jsxRuntimeExports.jsx(
      M5,
      {
        "data-orientation": "vertical",
        ...a4,
        ref: u4,
        sizes: r4,
        style: {
          top: 0,
          right: i4.dir === "ltr" ? 0 : void 0,
          left: i4.dir === "rtl" ? 0 : void 0,
          bottom: "var(--radix-scroll-area-corner-height)",
          "--radix-scroll-area-thumb-height": to(r4) + "px",
          ...e4.style
        },
        onThumbPointerDown: /* @__PURE__ */ o$1((f4) => e4.onThumbPointerDown(f4.y), "onThumbPointerDown"),
        onDragScroll: /* @__PURE__ */ o$1((f4) => e4.onDragScroll(f4.y), "onDragScroll"),
        onWheelScroll: /* @__PURE__ */ o$1((f4, d4) => {
          if (i4.viewport) {
            let m2 = i4.viewport.scrollTop + f4.deltaY;
            e4.onWheelScroll(m2), T5(m2, d4) && f4.preventDefault();
          }
        }, "onWheelScroll"),
        onResize: /* @__PURE__ */ o$1(() => {
          s4.current && i4.viewport && c3 && n3({
            content: i4.viewport.scrollHeight,
            viewport: i4.viewport.offsetHeight,
            scrollbar: {
              size: s4.current.clientHeight,
              paddingStart: eo(c3.paddingTop),
              paddingEnd: eo(c3.paddingBottom)
            }
          });
        }, "onResize")
      }
    );
  }), [eh, C5] = b5(ot), M5 = reactExports.forwardRef((e4, t4) => {
    let {
      __scopeScrollArea: r4,
      sizes: n3,
      hasThumb: a4,
      onThumbChange: i4,
      onThumbPointerUp: c3,
      onThumbPointerDown: l4,
      onThumbPositionChange: s4,
      onDragScroll: u4,
      onWheelScroll: f4,
      onResize: d4,
      ...m2
    } = e4, v2 = $e$1(ot, r4), [y3, p3] = reactExports.useState(null), h2 = ct(t4, (M4) => p3(M4)), g2 = reactExports.useRef(null), w2 = reactExports.useRef(""), b3 = v2.viewport, x3 = n3.content - n3.viewport, E4 = St(f4), R4 = St(s4), S4 = ro(d4, 10);
    function A4(M4) {
      if (g2.current) {
        let L4 = M4.clientX - g2.current.left, P2 = M4.clientY - g2.current.top;
        u4({ x: L4, y: P2 });
      }
    }
    return o$1(A4, "handleDragScroll"), reactExports.useEffect(() => {
      let M4 = /* @__PURE__ */ o$1((L4) => {
        let P2 = L4.target;
        (y3 == null ? void 0 : y3.contains(P2)) && E4(L4, x3);
      }, "handleWheel");
      return document.addEventListener("wheel", M4, { passive: false }), () => document.removeEventListener("wheel", M4, { passive: false });
    }, [b3, y3, x3, E4]), reactExports.useEffect(R4, [n3, R4]), xr(y3, S4), xr(v2.content, S4), /* @__PURE__ */ jsxRuntimeExports.jsx(
      eh,
      {
        scope: r4,
        scrollbar: y3,
        hasThumb: a4,
        onThumbChange: St(i4),
        onThumbPointerUp: St(c3),
        onThumbPositionChange: R4,
        onThumbPointerDown: St(l4),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          br.div,
          {
            ...m2,
            ref: h2,
            style: { position: "absolute", ...m2.style },
            onPointerDown: Ct(e4.onPointerDown, (M4) => {
              M4.button === 0 && (M4.target.setPointerCapture(M4.pointerId), g2.current = y3.getBoundingClientRect(), w2.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", v2.viewport && (v2.viewport.style.scrollBehavior = "auto"), A4(M4));
            }),
            onPointerMove: Ct(e4.onPointerMove, A4),
            onPointerUp: Ct(e4.onPointerUp, (M4) => {
              let L4 = M4.target;
              L4.hasPointerCapture(M4.pointerId) && L4.releasePointerCapture(M4.pointerId), document.body.style.webkitUserSelect = w2.current, v2.viewport && (v2.viewport.style.scrollBehavior = ""), g2.current = null;
            })
          }
        )
      }
    );
  }), Qn = "ScrollAreaThumb", A5 = reactExports.forwardRef(
    (e4, t4) => {
      let { forceMount: r4, ...n3 } = e4, a4 = C5(Qn, e4.__scopeScrollArea);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(yr, { present: r4 || a4.hasThumb, children: /* @__PURE__ */ jsxRuntimeExports.jsx(th, { ref: t4, ...n3 }) });
    }
  ), th = reactExports.forwardRef(
    (e4, t4) => {
      let { __scopeScrollArea: r4, style: n3, ...a4 } = e4, i4 = $e$1(Qn, r4), c3 = C5(Qn, r4), { onThumbPositionChange: l4 } = c3, s4 = ct(
        t4,
        (d4) => c3.onThumbChange(d4)
      ), u4 = reactExports.useRef(), f4 = ro(() => {
        u4.current && (u4.current(), u4.current = void 0);
      }, 100);
      return reactExports.useEffect(() => {
        let d4 = i4.viewport;
        if (d4) {
          let m2 = /* @__PURE__ */ o$1(() => {
            if (f4(), !u4.current) {
              let v2 = oh(d4, l4);
              u4.current = v2, l4();
            }
          }, "handleScroll");
          return l4(), d4.addEventListener("scroll", m2), () => d4.removeEventListener("scroll", m2);
        }
      }, [i4.viewport, f4, l4]), /* @__PURE__ */ jsxRuntimeExports.jsx(
        br.div,
        {
          "data-state": c3.hasThumb ? "visible" : "hidden",
          ...a4,
          ref: s4,
          style: {
            width: "var(--radix-scroll-area-thumb-width)",
            height: "var(--radix-scroll-area-thumb-height)",
            ...n3
          },
          onPointerDownCapture: Ct(e4.onPointerDownCapture, (d4) => {
            let v2 = d4.target.getBoundingClientRect(), y3 = d4.clientX - v2.left, p3 = d4.clientY - v2.top;
            c3.onThumbPointerDown({ x: y3, y: p3 });
          }),
          onPointerUp: Ct(e4.onPointerUp, c3.onThumbPointerUp)
        }
      );
    }
  );
  A5.displayName = Qn;
  ai = "ScrollAreaCorner", L5 = reactExports.forwardRef(
    (e4, t4) => {
      let r4 = $e$1(ai, e4.__scopeScrollArea), n3 = !!(r4.scrollbarX && r4.scrollbarY);
      return r4.type !== "scroll" && n3 ? /* @__PURE__ */ jsxRuntimeExports.jsx(rh, { ...e4, ref: t4 }) : null;
    }
  );
  L5.displayName = ai;
  rh = reactExports.forwardRef((e4, t4) => {
    let { __scopeScrollArea: r4, ...n3 } = e4, a4 = $e$1(ai, r4), [i4, c3] = reactExports.useState(0), [l4, s4] = reactExports.useState(0), u4 = !!(i4 && l4);
    return xr(a4.scrollbarX, () => {
      var _a2;
      let f4 = ((_a2 = a4.scrollbarX) == null ? void 0 : _a2.offsetHeight) || 0;
      a4.onCornerHeightChange(f4), s4(f4);
    }), xr(a4.scrollbarY, () => {
      var _a2;
      let f4 = ((_a2 = a4.scrollbarY) == null ? void 0 : _a2.offsetWidth) || 0;
      a4.onCornerWidthChange(f4), c3(f4);
    }), u4 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      br.div,
      {
        ...n3,
        ref: t4,
        style: {
          width: i4,
          height: l4,
          position: "absolute",
          right: a4.dir === "ltr" ? 0 : void 0,
          left: a4.dir === "rtl" ? 0 : void 0,
          bottom: 0,
          ...e4.style
        }
      }
    ) : null;
  });
  o$1(eo, "toInt");
  o$1(I5, "getThumbRatio");
  o$1(to, "getThumbSize");
  o$1(nh, "getScrollPositionFromPointer");
  o$1(v5, "getThumbOffsetFromScroll");
  o$1(z5, "linearScale");
  o$1(T5, "isScrollingWithinScrollbarBounds");
  oh = /* @__PURE__ */ o$1((e4, t4 = () => {
  }) => {
    let r4 = { left: e4.scrollLeft, top: e4.scrollTop }, n3 = 0;
    return (/* @__PURE__ */ o$1(function a4() {
      let i4 = { left: e4.scrollLeft, top: e4.scrollTop }, c3 = r4.left !== i4.left, l4 = r4.top !== i4.top;
      (c3 || l4) && t4(), r4 = i4, n3 = window.requestAnimationFrame(a4);
    }, "loop"))(), () => window.cancelAnimationFrame(n3);
  }, "addUnlinkedScrollListener");
  o$1(ro, "useDebounceCallback");
  o$1(xr, "useResizeObserver");
  o$1(ah, "getSubtree");
  H5 = y5, P5 = x5, k5 = E5, O5 = A5, B5 = L5;
});
var ch, sh, F5, D5, Er, oo = C$1(() => {
  N5();
  ch = xr$3(H5)(
    ({ scrollbarsize: e4, offset: t4 }) => ({
      width: "100%",
      height: "100%",
      overflow: "hidden",
      "--scrollbar-size": `${e4 + t4}px`,
      "--radix-scroll-area-thumb-width": `${e4}px`
    })
  ), sh = xr$3(P5)({
    width: "100%",
    height: "100%"
  }), F5 = xr$3(k5)(({ offset: e4, horizontal: t4, vertical: r4 }) => ({
    display: "flex",
    userSelect: "none",
    // ensures no selection
    touchAction: "none",
    // disable browser handling of all panning and zooming gestures on touch devices
    background: "transparent",
    transition: "all 0.2s ease-out",
    borderRadius: "var(--scrollbar-size)",
    zIndex: 1,
    '&[data-orientation="vertical"]': {
      width: "var(--scrollbar-size)",
      paddingRight: e4,
      marginTop: e4,
      marginBottom: t4 === "true" && r4 === "true" ? 0 : e4
    },
    '&[data-orientation="horizontal"]': {
      flexDirection: "column",
      height: "var(--scrollbar-size)",
      paddingBottom: e4,
      marginLeft: e4,
      marginRight: t4 === "true" && r4 === "true" ? 0 : e4
    }
  })), D5 = xr$3(O5)(({ theme: e4 }) => ({
    flex: 1,
    background: e4.textMutedColor,
    opacity: 0.5,
    borderRadius: "var(--scrollbar-size)",
    position: "relative",
    transition: "opacity 0.2s ease-out",
    "&:hover": { opacity: 0.8 },
    /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
    "::before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: "100%",
      height: "100%"
    }
  })), Er = reactExports.forwardRef(
    ({ children: e$1, horizontal: t4 = false, vertical: r4 = false, offset: n3 = 2, scrollbarSize: a4 = 6, className: i4 }, c3) => /* @__PURE__ */ e.createElement(
      ch,
      { scrollbarsize: a4, offset: n3, className: i4 },
      /* @__PURE__ */ e.createElement(sh, { ref: c3 }, e$1),
      t4 && /* @__PURE__ */ e.createElement(
        F5,
        {
          orientation: "horizontal",
          offset: n3,
          horizontal: t4.toString(),
          vertical: r4.toString()
        },
        /* @__PURE__ */ e.createElement(D5, null)
      ),
      r4 && /* @__PURE__ */ e.createElement(
        F5,
        {
          orientation: "vertical",
          offset: n3,
          horizontal: t4.toString(),
          vertical: r4.toString()
        },
        /* @__PURE__ */ e.createElement(D5, null)
      ),
      t4 && r4 && /* @__PURE__ */ e.createElement(B5, null)
    )
  );
  Er.displayName = "ScrollArea";
});
var li = {};
Qr(li, {
  SyntaxHighlighter: () => dn,
  createCopyToClipboardFunction: () => ii,
  default: () => Eh,
  supportedLanguages: () => $5
});
const { logger: dh } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
const { global: ph } = __STORYBOOK_MODULE_GLOBAL__;
function ii() {
  var _a2;
  return ((_a2 = ao.navigator) == null ? void 0 : _a2.clipboard) ? async (e4) => {
    var _a3;
    try {
      await ((_a3 = ao.top) == null ? void 0 : _a3.navigator.clipboard.writeText(e4));
    } catch {
      await ao.navigator.clipboard.writeText(e4);
    }
  } : async (e4) => {
    let t4 = un.createElement("TEXTAREA"), r4 = un.activeElement;
    t4.value = e4, un.body.appendChild(t4), t4.select(), un.execCommand("copy"), un.body.removeChild(t4), r4.focus();
  };
}
var V5, un, ao, $5, mh, hh, gh, vh, wh, bh, yh, j5, Rh, xh, dn, Eh, pn = C$1(() => {
  V5 = ge$1(rn(), 1);
  r1();
  l1();
  u1();
  h1();
  y1();
  C1();
  I1();
  k1();
  N1();
  j1();
  q1();
  K1();
  t1();
  Ka();
  oo();
  ({ document: un, window: ao } = ph), $5 = {
    jsextra: b1,
    jsx: L1,
    json: S1,
    yml: Z1,
    md: P1,
    bash: i1,
    css: s1,
    html: B1,
    tsx: $1,
    typescript: U1,
    graphql: m1
  };
  Object.entries($5).forEach(([e4, t4]) => {
    Xn.registerLanguage(e4, t4);
  });
  mh = (0, V5.default)(2)(
    (e4) => Object.entries(e4.code || {}).reduce((t4, [r4, n3]) => ({ ...t4, [`* .${r4}`]: n3 }), {})
  ), hh = ii();
  o$1(ii, "createCopyToClipboardFunction");
  gh = xr$3.div(
    ({ theme: e4 }) => ({
      position: "relative",
      overflow: "hidden",
      color: e4.color.defaultText
    }),
    ({ theme: e4, bordered: t4 }) => t4 ? {
      border: `1px solid ${e4.appBorderColor}`,
      borderRadius: e4.borderRadius,
      background: e4.background.content
    } : {},
    ({ showLineNumbers: e4 }) => e4 ? {
      // use the before pseudo element to display line numbers
      ".react-syntax-highlighter-line-number::before": {
        content: "attr(data-line-number)"
      }
    } : {}
  ), vh = /* @__PURE__ */ o$1(({ children: e$1, className: t4 }) => /* @__PURE__ */ e.createElement(
    Er,
    { horizontal: true, vertical: true, className: t4 },
    e$1
  ), "UnstyledScroller"), wh = xr$3(vh)(
    {
      position: "relative"
    },
    ({ theme: e4 }) => mh(e4)
  ), bh = xr$3.pre(({ theme: e4, padded: t4 }) => ({
    display: "flex",
    justifyContent: "flex-start",
    margin: 0,
    padding: t4 ? e4.layoutMargin : 0
  })), yh = xr$3.div(({ theme: e4 }) => ({
    flex: 1,
    paddingLeft: 2,
    // TODO: To match theming/global.ts for now
    paddingRight: e4.layoutMargin,
    opacity: 1,
    fontFamily: e4.typography.fonts.mono
  })), j5 = /* @__PURE__ */ o$1((e4) => {
    let t4 = [...e4.children], r4 = t4[0], n3 = r4.children[0].value, a4 = {
      ...r4,
      // empty the line-number element
      children: [],
      properties: {
        ...r4.properties,
        // add a data-line-number attribute to line-number element, so we can access the line number with `content: attr(data-line-number)`
        "data-line-number": n3,
        // remove the 'userSelect: none' style, which will produce extra empty lines when copy-pasting in firefox
        style: { ...r4.properties.style, userSelect: "auto" }
      }
    };
    return t4[0] = a4, { ...e4, children: t4 };
  }, "processLineNumber"), Rh = /* @__PURE__ */ o$1(({ rows: e4, stylesheet: t4, useInlineStyles: r4 }) => e4.map((n3, a4) => $t({
    node: j5(n3),
    stylesheet: t4,
    useInlineStyles: r4,
    key: `code-segement${a4}`
  })), "defaultRenderer"), xh = /* @__PURE__ */ o$1((e4, t4) => t4 ? e4 ? ({ rows: r4, ...n3 }) => e4({ rows: r4.map((a4) => j5(a4)), ...n3 }) : Rh : e4, "wrapRenderer"), dn = /* @__PURE__ */ o$1(({
    children: e$1,
    language: t4 = "jsx",
    copyable: r4 = false,
    bordered: n3 = false,
    padded: a4 = false,
    format: i4 = true,
    formatter: c3 = void 0,
    className: l4 = void 0,
    showLineNumbers: s4 = false,
    ...u4
  }) => {
    if (typeof e$1 != "string" || !e$1.trim())
      return null;
    let [f4, d4] = reactExports.useState("");
    reactExports.useEffect(() => {
      c3 ? c3(i4, e$1).then(d4) : d4(e$1.trim());
    }, [e$1, i4, c3]);
    let [m2, v2] = reactExports.useState(false), y3 = reactExports.useCallback(
      (h2) => {
        h2.preventDefault(), hh(f4).then(() => {
          v2(true), ao.setTimeout(() => v2(false), 1500);
        }).catch(dh.error);
      },
      [f4]
    ), p3 = xh(u4.renderer, s4);
    return /* @__PURE__ */ e.createElement(
      gh,
      {
        bordered: n3,
        padded: a4,
        showLineNumbers: s4,
        className: l4
      },
      /* @__PURE__ */ e.createElement(wh, null, /* @__PURE__ */ e.createElement(
        Xn,
        {
          padded: a4 || n3,
          language: t4,
          showLineNumbers: s4,
          showInlineLineNumbers: s4,
          useInlineStyles: false,
          PreTag: bh,
          CodeTag: yh,
          lineNumberContainerStyle: {},
          ...u4,
          renderer: p3
        },
        f4
      )),
      r4 ? /* @__PURE__ */ e.createElement(Za, { actionItems: [{ title: m2 ? "Copied" : "Copy", onClick: y3 }] }) : null
    );
  }, "SyntaxHighlighter");
  dn.registerLanguage = (...e4) => Xn.registerLanguage(...e4);
  Eh = dn;
});
function K5(e4) {
  for (var t4 = [], r4 = 1; r4 < arguments.length; r4++)
    t4[r4 - 1] = arguments[r4];
  var n3 = Array.from(typeof e4 == "string" ? [e4] : e4);
  n3[n3.length - 1] = n3[n3.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var a4 = n3.reduce(function(l4, s4) {
    var u4 = s4.match(/\n([\t ]+|(?!\s).)/g);
    return u4 ? l4.concat(u4.map(function(f4) {
      var d4, m2;
      return (m2 = (d4 = f4.match(/[\t ]/g)) === null || d4 === void 0 ? void 0 : d4.length) !== null && m2 !== void 0 ? m2 : 0;
    })) : l4;
  }, []);
  if (a4.length) {
    var i4 = new RegExp(`
[	 ]{` + Math.min.apply(Math, a4) + "}", "g");
    n3 = n3.map(function(l4) {
      return l4.replace(i4, `
`);
    });
  }
  n3[0] = n3[0].replace(/^\r?\n/, "");
  var c3 = n3[0];
  return t4.forEach(function(l4, s4) {
    var u4 = c3.match(/(?:^|\n)( *)$/), f4 = u4 ? u4[1] : "", d4 = l4;
    typeof l4 == "string" && l4.includes(`
`) && (d4 = String(l4).split(`
`).map(function(m2, v2) {
      return v2 === 0 ? m2 : "" + f4 + m2;
    }).join(`
`)), c3 += d4 + n3[s4 + 1];
  }), c3;
}
var J5 = C$1(() => {
  o$1(K5, "dedent");
});
var eu = {};
Qr(eu, {
  formatter: () => ig
});
var Q5, ig, tu = C$1(() => {
  Q5 = ge$1(rn(), 1);
  J5();
  ig = (0, Q5.default)(2)(async (e4, t4) => e4 === false ? t4 : K5(t4));
});
var Il, zl, $f = C$1(() => {
  Il = /* @__PURE__ */ o$1(function(t4) {
    return t4.reduce(function(r4, n3) {
      var a4 = n3[0], i4 = n3[1];
      return r4[a4] = i4, r4;
    }, {});
  }, "fromEntries"), zl = typeof window < "u" && window.document && window.document.createElement ? reactExports.useLayoutEffect : reactExports.useEffect;
});
var te$1, se$1, ae$1, ne$1, To, It, dt, er, jf, Ho, Nr, Wf, Tl, Po, p7, m7, h7, g7, v7, w7, b7, y7, R7, Uf, Be$1 = C$1(() => {
  te$1 = "top", se$1 = "bottom", ae$1 = "right", ne$1 = "left", To = "auto", It = [te$1, se$1, ae$1, ne$1], dt = "start", er = "end", jf = "clippingParents", Ho = "viewport", Nr = "popper", Wf = "reference", Tl = /* @__PURE__ */ It.reduce(function(e4, t4) {
    return e4.concat([t4 + "-" + dt, t4 + "-" + er]);
  }, []), Po = /* @__PURE__ */ [].concat(It, [To]).reduce(function(e4, t4) {
    return e4.concat([t4, t4 + "-" + dt, t4 + "-" + er]);
  }, []), p7 = "beforeRead", m7 = "read", h7 = "afterRead", g7 = "beforeMain", v7 = "main", w7 = "afterMain", b7 = "beforeWrite", y7 = "write", R7 = "afterWrite", Uf = [p7, m7, h7, g7, v7, w7, b7, y7, R7];
});
function pe$1(e4) {
  return e4 ? (e4.nodeName || "").toLowerCase() : null;
}
var zt = C$1(() => {
  o$1(pe$1, "getNodeName");
});
function Z$1(e4) {
  if (e4 == null)
    return window;
  if (e4.toString() !== "[object Window]") {
    var t4 = e4.ownerDocument;
    return t4 && t4.defaultView || window;
  }
  return e4;
}
var et = C$1(() => {
  o$1(Z$1, "getWindow");
});
function qe$1(e4) {
  var t4 = Z$1(e4).Element;
  return e4 instanceof t4 || e4 instanceof Element;
}
function ue$1(e4) {
  var t4 = Z$1(e4).HTMLElement;
  return e4 instanceof t4 || e4 instanceof HTMLElement;
}
function Fr(e4) {
  if (typeof ShadowRoot > "u")
    return false;
  var t4 = Z$1(e4).ShadowRoot;
  return e4 instanceof t4 || e4 instanceof ShadowRoot;
}
var Ne$1 = C$1(() => {
  et();
  o$1(qe$1, "isElement");
  o$1(ue$1, "isHTMLElement");
  o$1(Fr, "isShadowRoot");
});
function x7(e4) {
  var t4 = e4.state;
  Object.keys(t4.elements).forEach(function(r4) {
    var n3 = t4.styles[r4] || {}, a4 = t4.attributes[r4] || {}, i4 = t4.elements[r4];
    !ue$1(i4) || !pe$1(i4) || (Object.assign(i4.style, n3), Object.keys(a4).forEach(function(c3) {
      var l4 = a4[c3];
      l4 === false ? i4.removeAttribute(c3) : i4.setAttribute(c3, l4 === true ? "" : l4);
    }));
  });
}
function E7(e4) {
  var t4 = e4.state, r4 = {
    popper: {
      position: t4.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t4.elements.popper.style, r4.popper), t4.styles = r4, t4.elements.arrow && Object.assign(t4.elements.arrow.style, r4.arrow), function() {
    Object.keys(t4.elements).forEach(function(n3) {
      var a4 = t4.elements[n3], i4 = t4.attributes[n3] || {}, c3 = Object.keys(t4.styles.hasOwnProperty(n3) ? t4.styles[n3] : r4[n3]), l4 = c3.reduce(function(s4, u4) {
        return s4[u4] = "", s4;
      }, {});
      !ue$1(a4) || !pe$1(a4) || (Object.assign(a4.style, l4), Object.keys(i4).forEach(function(s4) {
        a4.removeAttribute(s4);
      }));
    });
  };
}
var qf, Gf = C$1(() => {
  zt();
  Ne$1();
  o$1(x7, "applyStyles");
  o$1(E7, "effect");
  qf = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: x7,
    effect: E7,
    requires: ["computeStyles"]
  };
});
function me$1(e4) {
  return e4.split("-")[0];
}
var Tt = C$1(() => {
  o$1(me$1, "getBasePlacement");
});
var tt, tr, pt, Ht = C$1(() => {
  tt = Math.max, tr = Math.min, pt = Math.round;
});
function Dr() {
  var e4 = navigator.userAgentData;
  return e4 != null && e4.brands && Array.isArray(e4.brands) ? e4.brands.map(function(t4) {
    return t4.brand + "/" + t4.version;
  }).join(" ") : navigator.userAgent;
}
var Hl = C$1(() => {
  o$1(Dr, "getUAString");
});
function yn() {
  return !/^((?!chrome|android).)*safari/i.test(Dr());
}
var Pl = C$1(() => {
  Hl();
  o$1(yn, "isLayoutViewport");
});
function Ge$1(e4, t4, r4) {
  t4 === void 0 && (t4 = false), r4 === void 0 && (r4 = false);
  var n3 = e4.getBoundingClientRect(), a4 = 1, i4 = 1;
  t4 && ue$1(e4) && (a4 = e4.offsetWidth > 0 && pt(n3.width) / e4.offsetWidth || 1, i4 = e4.offsetHeight > 0 && pt(n3.height) / e4.offsetHeight || 1);
  var c3 = qe$1(e4) ? Z$1(e4) : window, l4 = c3.visualViewport, s4 = !yn() && r4, u4 = (n3.left + (s4 && l4 ? l4.offsetLeft : 0)) / a4, f4 = (n3.top + (s4 && l4 ? l4.offsetTop : 0)) / i4, d4 = n3.width / a4, m2 = n3.height / i4;
  return {
    width: d4,
    height: m2,
    top: f4,
    right: u4 + d4,
    bottom: f4 + m2,
    left: u4,
    x: u4,
    y: f4
  };
}
var _r = C$1(() => {
  Ne$1();
  Ht();
  et();
  Pl();
  o$1(Ge$1, "getBoundingClientRect");
});
function rr(e4) {
  var t4 = Ge$1(e4), r4 = e4.offsetWidth, n3 = e4.offsetHeight;
  return Math.abs(t4.width - r4) <= 1 && (r4 = t4.width), Math.abs(t4.height - n3) <= 1 && (n3 = t4.height), {
    x: e4.offsetLeft,
    y: e4.offsetTop,
    width: r4,
    height: n3
  };
}
var ko = C$1(() => {
  _r();
  o$1(rr, "getLayoutRect");
});
function Rn(e4, t4) {
  var r4 = t4.getRootNode && t4.getRootNode();
  if (e4.contains(t4))
    return true;
  if (r4 && Fr(r4)) {
    var n3 = t4;
    do {
      if (n3 && e4.isSameNode(n3))
        return true;
      n3 = n3.parentNode || n3.host;
    } while (n3);
  }
  return false;
}
var kl = C$1(() => {
  Ne$1();
  o$1(Rn, "contains");
});
function Se$1(e4) {
  return Z$1(e4).getComputedStyle(e4);
}
var Vr = C$1(() => {
  et();
  o$1(Se$1, "getComputedStyle");
});
function Ol(e4) {
  return ["table", "td", "th"].indexOf(pe$1(e4)) >= 0;
}
var Yf = C$1(() => {
  zt();
  o$1(Ol, "isTableElement");
});
function we$1(e4) {
  return ((qe$1(e4) ? e4.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e4.document
  )) || window.document).documentElement;
}
var mt = C$1(() => {
  Ne$1();
  o$1(we$1, "getDocumentElement");
});
function ht(e4) {
  return pe$1(e4) === "html" ? e4 : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e4.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e4.parentNode || // DOM Element detected
    (Fr(e4) ? e4.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    we$1(e4)
  );
}
var xn = C$1(() => {
  zt();
  mt();
  Ne$1();
  o$1(ht, "getParentNode");
});
function Xf(e4) {
  return !ue$1(e4) || // https://github.com/popperjs/popper-core/issues/837
  Se$1(e4).position === "fixed" ? null : e4.offsetParent;
}
function S7(e4) {
  var t4 = /firefox/i.test(Dr()), r4 = /Trident/i.test(Dr());
  if (r4 && ue$1(e4)) {
    var n3 = Se$1(e4);
    if (n3.position === "fixed")
      return null;
  }
  var a4 = ht(e4);
  for (Fr(a4) && (a4 = a4.host); ue$1(a4) && ["html", "body"].indexOf(pe$1(a4)) < 0; ) {
    var i4 = Se$1(a4);
    if (i4.transform !== "none" || i4.perspective !== "none" || i4.contain === "paint" || ["transform", "perspective"].indexOf(i4.willChange) !== -1 || t4 && i4.willChange === "filter" || t4 && i4.filter && i4.filter !== "none")
      return a4;
    a4 = a4.parentNode;
  }
  return null;
}
function rt(e4) {
  for (var t4 = Z$1(e4), r4 = Xf(e4); r4 && Ol(r4) && Se$1(r4).position === "static"; )
    r4 = Xf(r4);
  return r4 && (pe$1(r4) === "html" || pe$1(r4) === "body" && Se$1(r4).position === "static") ? t4 : r4 || S7(e4) || t4;
}
var $r = C$1(() => {
  et();
  zt();
  Vr();
  Ne$1();
  Yf();
  xn();
  Hl();
  o$1(Xf, "getTrueOffsetParent");
  o$1(S7, "getContainingBlock");
  o$1(rt, "getOffsetParent");
});
function nr(e4) {
  return ["top", "bottom"].indexOf(e4) >= 0 ? "x" : "y";
}
var Oo = C$1(() => {
  o$1(nr, "getMainAxisFromPlacement");
});
function or(e4, t4, r4) {
  return tt(e4, tr(t4, r4));
}
function Zf(e4, t4, r4) {
  var n3 = or(e4, t4, r4);
  return n3 > r4 ? r4 : n3;
}
var Bl = C$1(() => {
  Ht();
  o$1(or, "within");
  o$1(Zf, "withinMaxClamp");
});
function En() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
var Nl = C$1(() => {
  o$1(En, "getFreshSideObject");
});
function Sn(e4) {
  return Object.assign({}, En(), e4);
}
var Fl = C$1(() => {
  Nl();
  o$1(Sn, "mergePaddingObject");
});
function Cn(e4, t4) {
  return t4.reduce(function(r4, n3) {
    return r4[n3] = e4, r4;
  }, {});
}
var Dl = C$1(() => {
  o$1(Cn, "expandToHashMap");
});
function M7(e4) {
  var t4, r4 = e4.state, n3 = e4.name, a4 = e4.options, i4 = r4.elements.arrow, c3 = r4.modifiersData.popperOffsets, l4 = me$1(r4.placement), s4 = nr(l4), u4 = [
    ne$1,
    ae$1
  ].indexOf(l4) >= 0, f4 = u4 ? "height" : "width";
  if (!(!i4 || !c3)) {
    var d4 = C7(a4.padding, r4), m2 = rr(i4), v2 = s4 === "y" ? te$1 : ne$1, y3 = s4 === "y" ? se$1 : ae$1, p3 = r4.rects.reference[f4] + r4.rects.reference[s4] - c3[s4] - r4.rects.popper[f4], h2 = c3[s4] - r4.rects.reference[s4], g2 = rt(i4), w2 = g2 ? s4 === "y" ? g2.clientHeight || 0 : g2.clientWidth || 0 : 0, b3 = p3 / 2 - h2 / 2, x3 = d4[v2], E4 = w2 - m2[f4] - d4[y3], R4 = w2 / 2 - m2[f4] / 2 + b3, S4 = or(x3, R4, E4), A4 = s4;
    r4.modifiersData[n3] = (t4 = {}, t4[A4] = S4, t4.centerOffset = S4 - R4, t4);
  }
}
function A7(e4) {
  var t4 = e4.state, r4 = e4.options, n3 = r4.element, a4 = n3 === void 0 ? "[data-popper-arrow]" : n3;
  a4 != null && (typeof a4 == "string" && (a4 = t4.elements.popper.querySelector(a4), !a4) || Rn(t4.elements.popper, a4) && (t4.elements.arrow = a4));
}
var C7, Kf, Jf = C$1(() => {
  Tt();
  ko();
  kl();
  $r();
  Oo();
  Bl();
  Fl();
  Dl();
  Be$1();
  C7 = /* @__PURE__ */ o$1(function(t4, r4) {
    return t4 = typeof t4 == "function" ? t4(Object.assign({}, r4.rects, {
      placement: r4.placement
    })) : t4, Sn(typeof t4 != "number" ? t4 : Cn(t4, It));
  }, "toPaddingObject");
  o$1(M7, "arrow");
  o$1(A7, "effect");
  Kf = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: M7,
    effect: A7,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };
});
function Ye(e4) {
  return e4.split("-")[1];
}
var jr = C$1(() => {
  o$1(Ye, "getVariation");
});
function I7(e4, t4) {
  var r4 = e4.x, n3 = e4.y, a4 = t4.devicePixelRatio || 1;
  return {
    x: pt(r4 * a4) / a4 || 0,
    y: pt(n3 * a4) / a4 || 0
  };
}
function Qf(e4) {
  var t4, r4 = e4.popper, n3 = e4.popperRect, a4 = e4.placement, i4 = e4.variation, c3 = e4.offsets, l4 = e4.position, s4 = e4.gpuAcceleration, u4 = e4.adaptive, f4 = e4.roundOffsets, d4 = e4.isFixed, m2 = c3.x, v2 = m2 === void 0 ? 0 : m2, y3 = c3.y, p3 = y3 === void 0 ? 0 : y3, h2 = typeof f4 == "function" ? f4({
    x: v2,
    y: p3
  }) : {
    x: v2,
    y: p3
  };
  v2 = h2.x, p3 = h2.y;
  var g2 = c3.hasOwnProperty("x"), w2 = c3.hasOwnProperty("y"), b3 = ne$1, x3 = te$1, E4 = window;
  if (u4) {
    var R4 = rt(r4), S4 = "clientHeight", A4 = "clientWidth";
    if (R4 === Z$1(r4) && (R4 = we$1(r4), Se$1(R4).position !== "static" && l4 === "absolute" && (S4 = "scrollHeight", A4 = "scrollWidth")), R4 = R4, a4 === te$1 || (a4 === ne$1 || a4 === ae$1) && i4 === er) {
      x3 = se$1;
      var M4 = d4 && R4 === E4 && E4.visualViewport ? E4.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        R4[S4]
      );
      p3 -= M4 - n3.height, p3 *= s4 ? 1 : -1;
    }
    if (a4 === ne$1 || (a4 === te$1 || a4 === se$1) && i4 === er) {
      b3 = ae$1;
      var L4 = d4 && R4 === E4 && E4.visualViewport ? E4.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        R4[A4]
      );
      v2 -= L4 - n3.width, v2 *= s4 ? 1 : -1;
    }
  }
  var P2 = Object.assign({
    position: l4
  }, u4 && L7), _2 = f4 === true ? I7({
    x: v2,
    y: p3
  }, Z$1(r4)) : {
    x: v2,
    y: p3
  };
  if (v2 = _2.x, p3 = _2.y, s4) {
    var D2;
    return Object.assign({}, P2, (D2 = {}, D2[x3] = w2 ? "0" : "", D2[b3] = g2 ? "0" : "", D2.transform = (E4.devicePixelRatio || 1) <= 1 ? "translate(" + v2 + "px, " + p3 + "px)" : "translate3d(" + v2 + "px, " + p3 + "px, 0)", D2));
  }
  return Object.assign({}, P2, (t4 = {}, t4[x3] = w2 ? p3 + "px" : "", t4[b3] = g2 ? v2 + "px" : "", t4.transform = "", t4));
}
function z7(e4) {
  var t4 = e4.state, r4 = e4.options, n3 = r4.gpuAcceleration, a4 = n3 === void 0 ? true : n3, i4 = r4.adaptive, c3 = i4 === void 0 ? true : i4, l4 = r4.roundOffsets, s4 = l4 === void 0 ? true : l4, u4 = {
    placement: me$1(t4.placement),
    variation: Ye(t4.placement),
    popper: t4.elements.popper,
    popperRect: t4.rects.popper,
    gpuAcceleration: a4,
    isFixed: t4.options.strategy === "fixed"
  };
  t4.modifiersData.popperOffsets != null && (t4.styles.popper = Object.assign({}, t4.styles.popper, Qf(Object.assign({}, u4, {
    offsets: t4.modifiersData.popperOffsets,
    position: t4.options.strategy,
    adaptive: c3,
    roundOffsets: s4
  })))), t4.modifiersData.arrow != null && (t4.styles.arrow = Object.assign({}, t4.styles.arrow, Qf(Object.assign({}, u4, {
    offsets: t4.modifiersData.arrow,
    position: "absolute",
    adaptive: false,
    roundOffsets: s4
  })))), t4.attributes.popper = Object.assign({}, t4.attributes.popper, {
    "data-popper-placement": t4.placement
  });
}
var L7, ed, td = C$1(() => {
  Be$1();
  $r();
  et();
  mt();
  Vr();
  Tt();
  jr();
  Ht();
  L7 = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  o$1(I7, "roundOffsetsByDPR");
  o$1(Qf, "mapToStyles");
  o$1(z7, "computeStyles");
  ed = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: z7,
    data: {}
  };
});
function T7(e4) {
  var t4 = e4.state, r4 = e4.instance, n3 = e4.options, a4 = n3.scroll, i4 = a4 === void 0 ? true : a4, c3 = n3.resize, l4 = c3 === void 0 ? true : c3, s4 = Z$1(t4.elements.popper), u4 = [].concat(t4.scrollParents.reference, t4.scrollParents.popper);
  return i4 && u4.forEach(function(f4) {
    f4.addEventListener("scroll", r4.update, Bo);
  }), l4 && s4.addEventListener("resize", r4.update, Bo), function() {
    i4 && u4.forEach(function(f4) {
      f4.removeEventListener("scroll", r4.update, Bo);
    }), l4 && s4.removeEventListener("resize", r4.update, Bo);
  };
}
var Bo, rd, nd = C$1(() => {
  et();
  Bo = {
    passive: true
  };
  o$1(T7, "effect");
  rd = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: /* @__PURE__ */ o$1(function() {
    }, "fn"),
    effect: T7,
    data: {}
  };
});
function Wr(e4) {
  return e4.replace(/left|right|bottom|top/g, function(t4) {
    return H7[t4];
  });
}
var H7, od = C$1(() => {
  H7 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  o$1(Wr, "getOppositePlacement");
});
function No(e4) {
  return e4.replace(/start|end/g, function(t4) {
    return P7[t4];
  });
}
var P7, ad = C$1(() => {
  P7 = {
    start: "end",
    end: "start"
  };
  o$1(No, "getOppositeVariationPlacement");
});
function ar(e4) {
  var t4 = Z$1(e4), r4 = t4.pageXOffset, n3 = t4.pageYOffset;
  return {
    scrollLeft: r4,
    scrollTop: n3
  };
}
var Fo = C$1(() => {
  et();
  o$1(ar, "getWindowScroll");
});
function ir(e4) {
  return Ge$1(we$1(e4)).left + ar(e4).scrollLeft;
}
var Do = C$1(() => {
  _r();
  mt();
  Fo();
  o$1(ir, "getWindowScrollBarX");
});
function _l(e4, t4) {
  var r4 = Z$1(e4), n3 = we$1(e4), a4 = r4.visualViewport, i4 = n3.clientWidth, c3 = n3.clientHeight, l4 = 0, s4 = 0;
  if (a4) {
    i4 = a4.width, c3 = a4.height;
    var u4 = yn();
    (u4 || !u4 && t4 === "fixed") && (l4 = a4.offsetLeft, s4 = a4.offsetTop);
  }
  return {
    width: i4,
    height: c3,
    x: l4 + ir(e4),
    y: s4
  };
}
var id = C$1(() => {
  et();
  mt();
  Do();
  Pl();
  o$1(_l, "getViewportRect");
});
function Vl(e4) {
  var t4, r4 = we$1(e4), n3 = ar(e4), a4 = (t4 = e4.ownerDocument) == null ? void 0 : t4.body, i4 = tt(r4.scrollWidth, r4.clientWidth, a4 ? a4.scrollWidth : 0, a4 ? a4.clientWidth : 0), c3 = tt(r4.scrollHeight, r4.clientHeight, a4 ? a4.scrollHeight : 0, a4 ? a4.clientHeight : 0), l4 = -n3.scrollLeft + ir(
    e4
  ), s4 = -n3.scrollTop;
  return Se$1(a4 || r4).direction === "rtl" && (l4 += tt(r4.clientWidth, a4 ? a4.clientWidth : 0) - i4), {
    width: i4,
    height: c3,
    x: l4,
    y: s4
  };
}
var ld = C$1(() => {
  mt();
  Vr();
  Do();
  Fo();
  Ht();
  o$1(Vl, "getDocumentRect");
});
function lr(e4) {
  var t4 = Se$1(e4), r4 = t4.overflow, n3 = t4.overflowX, a4 = t4.overflowY;
  return /auto|scroll|overlay|hidden/.test(r4 + a4 + n3);
}
var _o = C$1(() => {
  Vr();
  o$1(lr, "isScrollParent");
});
function Vo(e4) {
  return ["html", "body", "#document"].indexOf(pe$1(e4)) >= 0 ? e4.ownerDocument.body : ue$1(e4) && lr(e4) ? e4 : Vo(ht(e4));
}
var cd = C$1(() => {
  xn();
  _o();
  zt();
  Ne$1();
  o$1(Vo, "getScrollParent");
});
function Pt2(e4, t4) {
  var r4;
  t4 === void 0 && (t4 = []);
  var n3 = Vo(e4), a4 = n3 === ((r4 = e4.ownerDocument) == null ? void 0 : r4.body), i4 = Z$1(n3), c3 = a4 ? [i4].concat(i4.visualViewport || [], lr(n3) ? n3 : []) : n3, l4 = t4.concat(c3);
  return a4 ? l4 : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l4.concat(Pt2(ht(c3)))
  );
}
var $l = C$1(() => {
  cd();
  xn();
  et();
  _o();
  o$1(Pt2, "listScrollParents");
});
function Ur(e4) {
  return Object.assign({}, e4, {
    left: e4.x,
    top: e4.y,
    right: e4.x + e4.width,
    bottom: e4.y + e4.height
  });
}
var jl = C$1(() => {
  o$1(Ur, "rectToClientRect");
});
function k7(e4, t4) {
  var r4 = Ge$1(e4, false, t4 === "fixed");
  return r4.top = r4.top + e4.clientTop, r4.left = r4.left + e4.clientLeft, r4.bottom = r4.top + e4.clientHeight, r4.right = r4.left + e4.clientWidth, r4.width = e4.clientWidth, r4.height = e4.clientHeight, r4.x = r4.left, r4.y = r4.top, r4;
}
function sd(e4, t4, r4) {
  return t4 === Ho ? Ur(_l(e4, r4)) : qe$1(t4) ? k7(t4, r4) : Ur(Vl(we$1(e4)));
}
function O7(e4) {
  var t4 = Pt2(ht(e4)), r4 = ["absolute", "fixed"].indexOf(Se$1(e4).position) >= 0, n3 = r4 && ue$1(e4) ? rt(e4) : e4;
  return qe$1(n3) ? t4.filter(function(a4) {
    return qe$1(a4) && Rn(a4, n3) && pe$1(a4) !== "body";
  }) : [];
}
function Wl(e4, t4, r4, n3) {
  var a4 = t4 === "clippingParents" ? O7(e4) : [].concat(t4), i4 = [].concat(a4, [r4]), c3 = i4[0], l4 = i4.reduce(function(s4, u4) {
    var f4 = sd(e4, u4, n3);
    return s4.top = tt(f4.top, s4.top), s4.right = tr(f4.right, s4.right), s4.bottom = tr(f4.bottom, s4.bottom), s4.left = tt(f4.left, s4.left), s4;
  }, sd(e4, c3, n3));
  return l4.width = l4.right - l4.left, l4.height = l4.bottom - l4.top, l4.x = l4.left, l4.y = l4.top, l4;
}
var ud = C$1(() => {
  Be$1();
  id();
  ld();
  $l();
  $r();
  mt();
  Vr();
  Ne$1();
  _r();
  xn();
  kl();
  zt();
  jl();
  Ht();
  o$1(k7, "getInnerBoundingClientRect");
  o$1(sd, "getClientRectFromMixedType");
  o$1(O7, "getClippingParents");
  o$1(Wl, "getClippingRect");
});
function Mn(e4) {
  var t4 = e4.reference, r4 = e4.element, n3 = e4.placement, a4 = n3 ? me$1(n3) : null, i4 = n3 ? Ye(n3) : null, c3 = t4.x + t4.width / 2 - r4.width / 2, l4 = t4.y + t4.height / 2 - r4.height / 2, s4;
  switch (a4) {
    case te$1:
      s4 = {
        x: c3,
        y: t4.y - r4.height
      };
      break;
    case se$1:
      s4 = {
        x: c3,
        y: t4.y + t4.height
      };
      break;
    case ae$1:
      s4 = {
        x: t4.x + t4.width,
        y: l4
      };
      break;
    case ne$1:
      s4 = {
        x: t4.x - r4.width,
        y: l4
      };
      break;
    default:
      s4 = {
        x: t4.x,
        y: t4.y
      };
  }
  var u4 = a4 ? nr(a4) : null;
  if (u4 != null) {
    var f4 = u4 === "y" ? "height" : "width";
    switch (i4) {
      case dt:
        s4[u4] = s4[u4] - (t4[f4] / 2 - r4[f4] / 2);
        break;
      case er:
        s4[u4] = s4[u4] + (t4[f4] / 2 - r4[f4] / 2);
        break;
    }
  }
  return s4;
}
var Ul = C$1(() => {
  Tt();
  jr();
  Oo();
  Be$1();
  o$1(Mn, "computeOffsets");
});
function nt(e4, t4) {
  t4 === void 0 && (t4 = {});
  var r4 = t4, n3 = r4.placement, a4 = n3 === void 0 ? e4.placement : n3, i4 = r4.strategy, c3 = i4 === void 0 ? e4.strategy : i4, l4 = r4.boundary, s4 = l4 === void 0 ? jf : l4, u4 = r4.rootBoundary, f4 = u4 === void 0 ? Ho : u4, d4 = r4.elementContext, m2 = d4 === void 0 ? Nr : d4, v2 = r4.altBoundary, y3 = v2 === void 0 ? false : v2, p3 = r4.padding, h2 = p3 === void 0 ? 0 : p3, g2 = Sn(typeof h2 != "number" ? h2 : Cn(h2, It)), w2 = m2 === Nr ? Wf : Nr, b3 = e4.rects.popper, x3 = e4.elements[y3 ? w2 : m2], E4 = Wl(qe$1(x3) ? x3 : x3.contextElement || we$1(e4.elements.popper), s4, f4, c3), R4 = Ge$1(e4.elements.reference), S4 = Mn(
    {
      reference: R4,
      element: b3,
      placement: a4
    }
  ), A4 = Ur(Object.assign({}, b3, S4)), M4 = m2 === Nr ? A4 : R4, L4 = {
    top: E4.top - M4.top + g2.top,
    bottom: M4.bottom - E4.bottom + g2.bottom,
    left: E4.left - M4.left + g2.left,
    right: M4.right - E4.right + g2.right
  }, P2 = e4.modifiersData.offset;
  if (m2 === Nr && P2) {
    var _2 = P2[a4];
    Object.keys(L4).forEach(function(D2) {
      var K2 = [ae$1, se$1].indexOf(D2) >= 0 ? 1 : -1, T4 = [te$1, se$1].indexOf(D2) >= 0 ? "y" : "x";
      L4[D2] += _2[T4] * K2;
    });
  }
  return L4;
}
var An = C$1(() => {
  ud();
  mt();
  _r();
  Ul();
  jl();
  Be$1();
  Ne$1();
  Fl();
  Dl();
  o$1(nt, "detectOverflow");
});
function ql(e4, t4) {
  t4 === void 0 && (t4 = {});
  var r4 = t4, n3 = r4.placement, a4 = r4.boundary, i4 = r4.rootBoundary, c3 = r4.padding, l4 = r4.flipVariations, s4 = r4.allowedAutoPlacements, u4 = s4 === void 0 ? Po : s4, f4 = Ye(n3), d4 = f4 ? l4 ? Tl : Tl.filter(function(y3) {
    return Ye(y3) === f4;
  }) : It, m2 = d4.filter(function(y3) {
    return u4.indexOf(y3) >= 0;
  });
  m2.length === 0 && (m2 = d4);
  var v2 = m2.reduce(function(y3, p3) {
    return y3[p3] = nt(e4, {
      placement: p3,
      boundary: a4,
      rootBoundary: i4,
      padding: c3
    })[me$1(p3)], y3;
  }, {});
  return Object.keys(v2).sort(function(y3, p3) {
    return v2[y3] - v2[p3];
  });
}
var fd = C$1(() => {
  jr();
  Be$1();
  An();
  Tt();
  o$1(ql, "computeAutoPlacement");
});
function B7(e4) {
  if (me$1(e4) === To)
    return [];
  var t4 = Wr(e4);
  return [No(e4), t4, No(t4)];
}
function N7(e4) {
  var t4 = e4.state, r4 = e4.options, n3 = e4.name;
  if (!t4.modifiersData[n3]._skip) {
    for (var a4 = r4.mainAxis, i4 = a4 === void 0 ? true : a4, c3 = r4.altAxis, l4 = c3 === void 0 ? true : c3, s4 = r4.fallbackPlacements, u4 = r4.padding, f4 = r4.boundary, d4 = r4.rootBoundary, m2 = r4.altBoundary, v2 = r4.flipVariations, y3 = v2 === void 0 ? true : v2, p3 = r4.allowedAutoPlacements, h2 = t4.options.placement, g2 = me$1(h2), w2 = g2 === h2, b3 = s4 || (w2 || !y3 ? [Wr(h2)] : B7(h2)), x3 = [h2].concat(b3).reduce(function(he2, fe2) {
      return he2.concat(me$1(fe2) === To ? ql(t4, {
        placement: fe2,
        boundary: f4,
        rootBoundary: d4,
        padding: u4,
        flipVariations: y3,
        allowedAutoPlacements: p3
      }) : fe2);
    }, []), E4 = t4.rects.reference, R4 = t4.rects.popper, S4 = /* @__PURE__ */ new Map(), A4 = true, M4 = x3[0], L4 = 0; L4 < x3.length; L4++) {
      var P2 = x3[L4], _2 = me$1(P2), D2 = Ye(P2) === dt, K2 = [te$1, se$1].indexOf(_2) >= 0, T4 = K2 ? "width" : "height", z4 = nt(t4, {
        placement: P2,
        boundary: f4,
        rootBoundary: d4,
        altBoundary: m2,
        padding: u4
      }), k2 = K2 ? D2 ? ae$1 : ne$1 : D2 ? se$1 : te$1;
      E4[T4] > R4[T4] && (k2 = Wr(k2));
      var $2 = Wr(k2), F2 = [];
      if (i4 && F2.push(z4[_2] <= 0), l4 && F2.push(z4[k2] <= 0, z4[$2] <= 0), F2.every(function(he2) {
        return he2;
      })) {
        M4 = P2, A4 = false;
        break;
      }
      S4.set(P2, F2);
    }
    if (A4)
      for (var j2 = y3 ? 3 : 1, O2 = /* @__PURE__ */ o$1(function(fe2) {
        var de2 = x3.find(function(be2) {
          var Me3 = S4.get(be2);
          if (Me3)
            return Me3.slice(0, fe2).every(function(Nt3) {
              return Nt3;
            });
        });
        if (de2)
          return M4 = de2, "break";
      }, "_loop"), G2 = j2; G2 > 0; G2--) {
        var Ce2 = O2(G2);
        if (Ce2 === "break") break;
      }
    t4.placement !== M4 && (t4.modifiersData[n3]._skip = true, t4.placement = M4, t4.reset = true);
  }
}
var dd, pd = C$1(() => {
  od();
  Tt();
  ad();
  An();
  fd();
  Be$1();
  jr();
  o$1(B7, "getExpandedFallbackPlacements");
  o$1(N7, "flip");
  dd = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: N7,
    requiresIfExists: ["offset"],
    data: {
      _skip: false
    }
  };
});
function md(e4, t4, r4) {
  return r4 === void 0 && (r4 = {
    x: 0,
    y: 0
  }), {
    top: e4.top - t4.height - r4.y,
    right: e4.right - t4.width + r4.x,
    bottom: e4.bottom - t4.height + r4.y,
    left: e4.left - t4.width - r4.x
  };
}
function hd(e4) {
  return [te$1, ae$1, se$1, ne$1].some(function(t4) {
    return e4[t4] >= 0;
  });
}
function F7(e4) {
  var t4 = e4.state, r4 = e4.name, n3 = t4.rects.reference, a4 = t4.rects.popper, i4 = t4.modifiersData.preventOverflow, c3 = nt(t4, {
    elementContext: "reference"
  }), l4 = nt(t4, {
    altBoundary: true
  }), s4 = md(c3, n3), u4 = md(l4, a4, i4), f4 = hd(s4), d4 = hd(u4);
  t4.modifiersData[r4] = {
    referenceClippingOffsets: s4,
    popperEscapeOffsets: u4,
    isReferenceHidden: f4,
    hasPopperEscaped: d4
  }, t4.attributes.popper = Object.assign({}, t4.attributes.popper, {
    "data-popper-reference-hidden": f4,
    "data-popper-escaped": d4
  });
}
var gd, vd = C$1(() => {
  Be$1();
  An();
  o$1(md, "getSideOffsets");
  o$1(hd, "isAnySideFullyClipped");
  o$1(F7, "hide");
  gd = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: F7
  };
});
function D7(e4, t4, r4) {
  var n3 = me$1(e4), a4 = [ne$1, te$1].indexOf(n3) >= 0 ? -1 : 1, i4 = typeof r4 == "function" ? r4(Object.assign({}, t4, {
    placement: e4
  })) : r4, c3 = i4[0], l4 = i4[1];
  return c3 = c3 || 0, l4 = (l4 || 0) * a4, [ne$1, ae$1].indexOf(n3) >= 0 ? {
    x: l4,
    y: c3
  } : {
    x: c3,
    y: l4
  };
}
function _7(e4) {
  var t4 = e4.state, r4 = e4.options, n3 = e4.name, a4 = r4.offset, i4 = a4 === void 0 ? [0, 0] : a4, c3 = Po.reduce(function(f4, d4) {
    return f4[d4] = D7(d4, t4.rects, i4), f4;
  }, {}), l4 = c3[t4.placement], s4 = l4.x, u4 = l4.y;
  t4.modifiersData.popperOffsets != null && (t4.modifiersData.popperOffsets.x += s4, t4.modifiersData.popperOffsets.y += u4), t4.modifiersData[n3] = c3;
}
var wd, bd = C$1(() => {
  Tt();
  Be$1();
  o$1(D7, "distanceAndSkiddingToXY");
  o$1(_7, "offset");
  wd = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: ["popperOffsets"],
    fn: _7
  };
});
function V7(e4) {
  var t4 = e4.state, r4 = e4.name;
  t4.modifiersData[r4] = Mn({
    reference: t4.rects.reference,
    element: t4.rects.popper,
    placement: t4.placement
  });
}
var yd, Rd = C$1(() => {
  Ul();
  o$1(V7, "popperOffsets");
  yd = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: V7,
    data: {}
  };
});
function Gl(e4) {
  return e4 === "x" ? "y" : "x";
}
var xd = C$1(() => {
  o$1(Gl, "getAltAxis");
});
function $7(e4) {
  var t4 = e4.state, r4 = e4.options, n3 = e4.name, a4 = r4.mainAxis, i4 = a4 === void 0 ? true : a4, c3 = r4.altAxis, l4 = c3 === void 0 ? false : c3, s4 = r4.boundary, u4 = r4.rootBoundary, f4 = r4.altBoundary, d4 = r4.padding, m2 = r4.tether, v2 = m2 === void 0 ? true : m2, y3 = r4.tetherOffset, p3 = y3 === void 0 ? 0 : y3, h2 = nt(t4, {
    boundary: s4,
    rootBoundary: u4,
    padding: d4,
    altBoundary: f4
  }), g2 = me$1(t4.placement), w2 = Ye(t4.placement), b3 = !w2, x3 = nr(g2), E4 = Gl(x3), R4 = t4.modifiersData.popperOffsets, S4 = t4.rects.reference, A4 = t4.rects.popper, M4 = typeof p3 == "function" ? p3(Object.assign({}, t4.rects, {
    placement: t4.placement
  })) : p3, L4 = typeof M4 == "number" ? {
    mainAxis: M4,
    altAxis: M4
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, M4), P2 = t4.modifiersData.offset ? t4.modifiersData.offset[t4.placement] : null, _2 = {
    x: 0,
    y: 0
  };
  if (R4) {
    if (i4) {
      var D2, K2 = x3 === "y" ? te$1 : ne$1, T4 = x3 === "y" ? se$1 : ae$1, z4 = x3 === "y" ? "height" : "width", k2 = R4[x3], $2 = k2 + h2[K2], F2 = k2 - h2[T4], j2 = v2 ? -A4[z4] / 2 : 0, O2 = w2 === dt ? S4[z4] : A4[z4], G2 = w2 === dt ? -A4[z4] : -S4[z4], Ce2 = t4.elements.arrow, he2 = v2 && Ce2 ? rr(Ce2) : {
        width: 0,
        height: 0
      }, fe2 = t4.modifiersData["arrow#persistent"] ? t4.modifiersData["arrow#persistent"].padding : En(), de2 = fe2[K2], be2 = fe2[T4], Me3 = or(
        0,
        S4[z4],
        he2[z4]
      ), Nt3 = b3 ? S4[z4] / 2 - j2 - Me3 - de2 - L4.mainAxis : O2 - Me3 - de2 - L4.mainAxis, Kr2 = b3 ? -S4[z4] / 2 + j2 + Me3 + be2 + L4.mainAxis : G2 + Me3 + be2 + L4.mainAxis, Ko2 = t4.elements.arrow && rt(t4.elements.arrow), wp = Ko2 ? x3 === "y" ? Ko2.clientTop || 0 : Ko2.clientLeft || 0 : 0, E0 = (D2 = P2 == null ? void 0 : P2[x3]) != null ? D2 : 0, bp = k2 + Nt3 - E0 - wp, yp = k2 + Kr2 - E0, S0 = or(v2 ? tr($2, bp) : $2, k2, v2 ? tt(F2, yp) : F2);
      R4[x3] = S0, _2[x3] = S0 - k2;
    }
    if (l4) {
      var C0, Rp = x3 === "x" ? te$1 : ne$1, xp = x3 === "x" ? se$1 : ae$1, Ft2 = R4[E4], Hn2 = E4 === "y" ? "height" : "width", M0 = Ft2 + h2[Rp], A0 = Ft2 - h2[xp], Jo2 = [te$1, ne$1].indexOf(g2) !== -1, L0 = (C0 = P2 == null ? void 0 : P2[E4]) != null ? C0 : 0, I0 = Jo2 ? M0 : Ft2 - S4[Hn2] - A4[Hn2] - L0 + L4.altAxis, z0 = Jo2 ? Ft2 + S4[Hn2] + A4[Hn2] - L0 - L4.altAxis : A0, T0 = v2 && Jo2 ? Zf(I0, Ft2, z0) : or(v2 ? I0 : M0, Ft2, v2 ? z0 : A0);
      R4[E4] = T0, _2[E4] = T0 - Ft2;
    }
    t4.modifiersData[n3] = _2;
  }
}
var Ed, Sd = C$1(() => {
  Be$1();
  Tt();
  Oo();
  xd();
  Bl();
  ko();
  $r();
  An();
  jr();
  Nl();
  Ht();
  o$1($7, "preventOverflow");
  Ed = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: $7,
    requiresIfExists: ["offset"]
  };
});
var Yl = C$1(() => {
});
function Xl(e4) {
  return {
    scrollLeft: e4.scrollLeft,
    scrollTop: e4.scrollTop
  };
}
var Cd = C$1(() => {
  o$1(Xl, "getHTMLElementScroll");
});
function Zl(e4) {
  return e4 === Z$1(e4) || !ue$1(e4) ? ar(e4) : Xl(e4);
}
var Md = C$1(() => {
  Fo();
  et();
  Ne$1();
  Cd();
  o$1(Zl, "getNodeScroll");
});
function j7(e4) {
  var t4 = e4.getBoundingClientRect(), r4 = pt(t4.width) / e4.offsetWidth || 1, n3 = pt(t4.height) / e4.offsetHeight || 1;
  return r4 !== 1 || n3 !== 1;
}
function Kl(e4, t4, r4) {
  r4 === void 0 && (r4 = false);
  var n3 = ue$1(t4), a4 = ue$1(t4) && j7(t4), i4 = we$1(t4), c3 = Ge$1(e4, a4, r4), l4 = {
    scrollLeft: 0,
    scrollTop: 0
  }, s4 = {
    x: 0,
    y: 0
  };
  return (n3 || !n3 && !r4) && ((pe$1(t4) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  lr(i4)) && (l4 = Zl(t4)), ue$1(t4) ? (s4 = Ge$1(t4, true), s4.x += t4.clientLeft, s4.y += t4.clientTop) : i4 && (s4.x = ir(i4))), {
    x: c3.left + l4.scrollLeft - s4.x,
    y: c3.top + l4.scrollTop - s4.y,
    width: c3.width,
    height: c3.height
  };
}
var Ad = C$1(() => {
  _r();
  Md();
  zt();
  Ne$1();
  Do();
  mt();
  _o();
  Ht();
  o$1(j7, "isElementScaled");
  o$1(Kl, "getCompositeRect");
});
function W7(e4) {
  var t4 = /* @__PURE__ */ new Map(), r4 = /* @__PURE__ */ new Set(), n3 = [];
  e4.forEach(function(i4) {
    t4.set(i4.name, i4);
  });
  function a4(i4) {
    r4.add(i4.name);
    var c3 = [].concat(i4.requires || [], i4.requiresIfExists || []);
    c3.forEach(function(l4) {
      if (!r4.has(l4)) {
        var s4 = t4.get(l4);
        s4 && a4(s4);
      }
    }), n3.push(i4);
  }
  return o$1(a4, "sort"), e4.forEach(function(i4) {
    r4.has(i4.name) || a4(i4);
  }), n3;
}
function Jl(e4) {
  var t4 = W7(e4);
  return Uf.reduce(function(r4, n3) {
    return r4.concat(t4.filter(function(a4) {
      return a4.phase === n3;
    }));
  }, []);
}
var Ld = C$1(() => {
  Be$1();
  o$1(W7, "order");
  o$1(Jl, "orderModifiers");
});
function Ql(e4) {
  var t4;
  return function() {
    return t4 || (t4 = new Promise(function(r4) {
      Promise.resolve().then(function() {
        t4 = void 0, r4(e4());
      });
    })), t4;
  };
}
var Id = C$1(() => {
  o$1(Ql, "debounce");
});
function e0(e4) {
  var t4 = e4.reduce(function(r4, n3) {
    var a4 = r4[n3.name];
    return r4[n3.name] = a4 ? Object.assign({}, a4, n3, {
      options: Object.assign({}, a4.options, n3.options),
      data: Object.assign({}, a4.data, n3.data)
    }) : n3, r4;
  }, {});
  return Object.keys(t4).map(function(r4) {
    return t4[r4];
  });
}
var zd = C$1(() => {
  o$1(e0, "mergeByName");
});
function Hd() {
  for (var e4 = arguments.length, t4 = new Array(e4), r4 = 0; r4 < e4; r4++)
    t4[r4] = arguments[r4];
  return !t4.some(function(n3) {
    return !(n3 && typeof n3.getBoundingClientRect == "function");
  });
}
function Pd(e4) {
  e4 === void 0 && (e4 = {});
  var t4 = e4, r4 = t4.defaultModifiers, n3 = r4 === void 0 ? [] : r4, a4 = t4.defaultOptions, i4 = a4 === void 0 ? Td : a4;
  return /* @__PURE__ */ o$1(function(l4, s4, u4) {
    u4 === void 0 && (u4 = i4);
    var f4 = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Td, i4),
      modifiersData: {},
      elements: {
        reference: l4,
        popper: s4
      },
      attributes: {},
      styles: {}
    }, d4 = [], m2 = false, v2 = {
      state: f4,
      setOptions: /* @__PURE__ */ o$1(function(g2) {
        var w2 = typeof g2 == "function" ? g2(f4.options) : g2;
        p3(), f4.options = Object.assign({}, i4, f4.options, w2), f4.scrollParents = {
          reference: qe$1(l4) ? Pt2(l4) : l4.contextElement ? Pt2(l4.contextElement) : [],
          popper: Pt2(s4)
        };
        var b3 = Jl(e0([].concat(n3, f4.options.modifiers)));
        return f4.orderedModifiers = b3.filter(function(x3) {
          return x3.enabled;
        }), y3(), v2.update();
      }, "setOptions"),
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: /* @__PURE__ */ o$1(function() {
        if (!m2) {
          var g2 = f4.elements, w2 = g2.reference, b3 = g2.popper;
          if (Hd(w2, b3)) {
            f4.rects = {
              reference: Kl(w2, rt(b3), f4.options.strategy === "fixed"),
              popper: rr(b3)
            }, f4.reset = false, f4.placement = f4.options.placement, f4.orderedModifiers.forEach(function(L4) {
              return f4.modifiersData[L4.name] = Object.assign({}, L4.data);
            });
            for (var x3 = 0; x3 < f4.orderedModifiers.length; x3++) {
              if (f4.reset === true) {
                f4.reset = false, x3 = -1;
                continue;
              }
              var E4 = f4.orderedModifiers[x3], R4 = E4.fn, S4 = E4.options, A4 = S4 === void 0 ? {} : S4, M4 = E4.name;
              typeof R4 == "function" && (f4 = R4({
                state: f4,
                options: A4,
                name: M4,
                instance: v2
              }) || f4);
            }
          }
        }
      }, "forceUpdate"),
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Ql(function() {
        return new Promise(function(h2) {
          v2.forceUpdate(), h2(f4);
        });
      }),
      destroy: /* @__PURE__ */ o$1(function() {
        p3(), m2 = true;
      }, "destroy")
    };
    if (!Hd(l4, s4))
      return v2;
    v2.setOptions(u4).then(function(h2) {
      !m2 && u4.onFirstUpdate && u4.onFirstUpdate(h2);
    });
    function y3() {
      f4.orderedModifiers.forEach(function(h2) {
        var g2 = h2.name, w2 = h2.options, b3 = w2 === void 0 ? {} : w2, x3 = h2.effect;
        if (typeof x3 == "function") {
          var E4 = x3({
            state: f4,
            name: g2,
            instance: v2,
            options: b3
          }), R4 = /* @__PURE__ */ o$1(function() {
          }, "noopFn");
          d4.push(E4 || R4);
        }
      });
    }
    o$1(y3, "runModifierEffects");
    function p3() {
      d4.forEach(function(h2) {
        return h2();
      }), d4 = [];
    }
    return o$1(p3, "cleanupModifierEffects"), v2;
  }, "createPopper");
}
var Td, kd = C$1(() => {
  Ad();
  ko();
  $l();
  $r();
  Ld();
  Id();
  zd();
  Ne$1();
  Td = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  o$1(Hd, "areValidElements");
  o$1(Pd, "popperGenerator");
});
var U7, t0, Od = C$1(() => {
  kd();
  nd();
  Rd();
  td();
  Gf();
  bd();
  pd();
  Sd();
  Jf();
  vd();
  Yl();
  U7 = [rd, yd, ed, qf, wd, dd, Ed, Kf, gd], t0 = /* @__PURE__ */ Pd({
    defaultModifiers: U7
  });
});
var Bd = C$1(() => {
  Be$1();
  Yl();
  Od();
});
var Fd = H$1((VP, Nd) => {
  var q7 = typeof Element < "u", G7 = typeof Map == "function", Y7 = typeof Set == "function", X7 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function $o2(e4, t4) {
    if (e4 === t4) return true;
    if (e4 && t4 && typeof e4 == "object" && typeof t4 == "object") {
      if (e4.constructor !== t4.constructor) return false;
      var r4, n3, a4;
      if (Array.isArray(e4)) {
        if (r4 = e4.length, r4 != t4.length) return false;
        for (n3 = r4; n3-- !== 0; )
          if (!$o2(e4[n3], t4[n3])) return false;
        return true;
      }
      var i4;
      if (G7 && e4 instanceof Map && t4 instanceof Map) {
        if (e4.size !== t4.size) return false;
        for (i4 = e4.entries(); !(n3 = i4.next()).done; )
          if (!t4.has(n3.value[0])) return false;
        for (i4 = e4.entries(); !(n3 = i4.next()).done; )
          if (!$o2(n3.value[1], t4.get(n3.value[0]))) return false;
        return true;
      }
      if (Y7 && e4 instanceof Set && t4 instanceof Set) {
        if (e4.size !== t4.size) return false;
        for (i4 = e4.entries(); !(n3 = i4.next()).done; )
          if (!t4.has(n3.value[0])) return false;
        return true;
      }
      if (X7 && ArrayBuffer.isView(e4) && ArrayBuffer.isView(t4)) {
        if (r4 = e4.length, r4 != t4.length) return false;
        for (n3 = r4; n3-- !== 0; )
          if (e4[n3] !== t4[n3]) return false;
        return true;
      }
      if (e4.constructor === RegExp) return e4.source === t4.source && e4.flags === t4.flags;
      if (e4.valueOf !== Object.prototype.valueOf && typeof e4.valueOf == "function" && typeof t4.valueOf == "function") return e4.valueOf() === t4.valueOf();
      if (e4.toString !== Object.prototype.toString && typeof e4.toString == "function" && typeof t4.toString == "function") return e4.toString() === t4.toString();
      if (a4 = Object.keys(e4), r4 = a4.length, r4 !== Object.keys(t4).length) return false;
      for (n3 = r4; n3-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(t4, a4[n3])) return false;
      if (q7 && e4 instanceof Element) return false;
      for (n3 = r4; n3-- !== 0; )
        if (!((a4[n3] === "_owner" || a4[n3] === "__v" || a4[n3] === "__o") && e4.$$typeof) && !$o2(e4[a4[n3]], t4[a4[n3]]))
          return false;
      return true;
    }
    return e4 !== e4 && t4 !== t4;
  }
  o$1($o2, "equal");
  Nd.exports = /* @__PURE__ */ o$1(function(t4, r4) {
    try {
      return $o2(t4, r4);
    } catch (n3) {
      if ((n3.message || "").match(/stack|recursion/i))
        return console.warn("react-fast-compare cannot handle circular refs"), false;
      throw n3;
    }
  }, "isEqual");
});
var _d, Z7, r0, Vd = C$1(() => {
  Bd();
  _d = ge$1(Fd());
  $f();
  Z7 = [], r0 = /* @__PURE__ */ o$1(function(t4, r4, n3) {
    n3 === void 0 && (n3 = {});
    var a4 = reactExports.useRef(null), i4 = {
      onFirstUpdate: n3.onFirstUpdate,
      placement: n3.placement || "bottom",
      strategy: n3.strategy || "absolute",
      modifiers: n3.modifiers || Z7
    }, c3 = reactExports.useState({
      styles: {
        popper: {
          position: i4.strategy,
          left: "0",
          top: "0"
        },
        arrow: {
          position: "absolute"
        }
      },
      attributes: {}
    }), l4 = c3[0], s4 = c3[1], u4 = reactExports.useMemo(function() {
      return {
        name: "updateState",
        enabled: true,
        phase: "write",
        fn: /* @__PURE__ */ o$1(function(v2) {
          var y3 = v2.state, p3 = Object.keys(y3.elements);
          reactDomExports.flushSync(function() {
            s4({
              styles: Il(p3.map(function(h2) {
                return [h2, y3.styles[h2] || {}];
              })),
              attributes: Il(p3.map(function(h2) {
                return [h2, y3.attributes[h2]];
              }))
            });
          });
        }, "fn"),
        requires: ["computeStyles"]
      };
    }, []), f4 = reactExports.useMemo(function() {
      var m2 = {
        onFirstUpdate: i4.onFirstUpdate,
        placement: i4.placement,
        strategy: i4.strategy,
        modifiers: [].concat(i4.modifiers, [u4, {
          name: "applyStyles",
          enabled: false
        }])
      };
      return (0, _d.default)(a4.current, m2) ? a4.current || m2 : (a4.current = m2, m2);
    }, [i4.onFirstUpdate, i4.placement, i4.strategy, i4.modifiers, u4]), d4 = reactExports.useRef();
    return zl(function() {
      d4.current && d4.current.setOptions(f4);
    }, [f4]), zl(function() {
      if (!(t4 == null || r4 == null)) {
        var m2 = n3.createPopper || t0, v2 = m2(t4, r4, f4);
        return d4.current = v2, function() {
          v2.destroy(), d4.current = null;
        };
      }
    }, [t4, r4, n3.createPopper]), {
      state: d4.current ? d4.current.state : null,
      styles: l4.styles,
      attributes: l4.attributes,
      update: d4.current ? d4.current.update : null,
      forceUpdate: d4.current ? d4.current.forceUpdate : null
    };
  }, "usePopper");
});
var $d = C$1(() => {
  Vd();
});
function Ud(e4) {
  var t4 = reactExports.useRef(e4);
  return t4.current = e4, reactExports.useCallback(function() {
    return t4.current;
  }, []);
}
function J7(e4) {
  var t4 = e4.initial, r4 = e4.value, n3 = e4.onChange, a4 = n3 === void 0 ? K7 : n3;
  if (t4 === void 0 && r4 === void 0)
    throw new TypeError('Either "value" or "initial" variable must be set. Now both are undefined');
  var i4 = reactExports.useState(t4), c3 = i4[0], l4 = i4[1], s4 = Ud(c3), u4 = reactExports.useCallback(function(d4) {
    var m2 = s4(), v2 = typeof d4 == "function" ? d4(m2) : d4;
    typeof v2.persist == "function" && v2.persist(), l4(v2), typeof a4 == "function" && a4(v2);
  }, [s4, a4]), f4 = r4 !== void 0;
  return [f4 ? r4 : c3, f4 ? a4 : u4];
}
function qd(e4, t4) {
  return e4 === void 0 && (e4 = 0), t4 === void 0 && (t4 = 0), function() {
    return {
      width: 0,
      height: 0,
      top: t4,
      right: e4,
      bottom: t4,
      left: e4,
      x: 0,
      y: 0,
      toJSON: /* @__PURE__ */ o$1(function() {
        return null;
      }, "toJSON")
    };
  };
}
function Gd(e4, t4) {
  var r4, n3, a4;
  e4 === void 0 && (e4 = {}), t4 === void 0 && (t4 = {});
  var i4 = Object.keys(Wd).reduce(function(T4, z4) {
    var k2;
    return W$1({}, T4, (k2 = {}, k2[z4] = T4[z4] !== void 0 ? T4[z4] : Wd[z4], k2));
  }, e4), c3 = reactExports.useMemo(
    function() {
      return [{
        name: "offset",
        options: {
          offset: i4.offset
        }
      }];
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    Array.isArray(i4.offset) ? i4.offset : []
  ), l4 = W$1({}, t4, {
    placement: t4.placement || i4.placement,
    modifiers: t4.modifiers || c3
  }), s4 = reactExports.useState(null), u4 = s4[0], f4 = s4[1], d4 = reactExports.useState(null), m2 = d4[0], v2 = d4[1], y3 = J7({
    initial: i4.defaultVisible,
    value: i4.visible,
    onChange: i4.onVisibleChange
  }), p3 = y3[0], h2 = y3[1], g2 = reactExports.useRef();
  reactExports.useEffect(function() {
    return function() {
      return clearTimeout(g2.current);
    };
  }, []);
  var w2 = r0(i4.followCursor ? jd : u4, m2, l4), b3 = w2.styles, x3 = w2.attributes, E4 = pr(w2, Q7), R4 = E4.update, S4 = Ud({
    visible: p3,
    triggerRef: u4,
    tooltipRef: m2,
    finalConfig: i4
  }), A4 = reactExports.useCallback(
    function(T4) {
      return Array.isArray(i4.trigger) ? i4.trigger.includes(T4) : i4.trigger === T4;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    Array.isArray(i4.trigger) ? i4.trigger : [i4.trigger]
  ), M4 = reactExports.useCallback(function() {
    clearTimeout(g2.current), g2.current = window.setTimeout(function() {
      return h2(false);
    }, i4.delayHide);
  }, [i4.delayHide, h2]), L4 = reactExports.useCallback(function() {
    clearTimeout(g2.current), g2.current = window.setTimeout(function() {
      return h2(true);
    }, i4.delayShow);
  }, [i4.delayShow, h2]), P2 = reactExports.useCallback(function() {
    S4().visible ? M4() : L4();
  }, [S4, M4, L4]);
  reactExports.useEffect(function() {
    if (S4().finalConfig.closeOnOutsideClick) {
      var T4 = /* @__PURE__ */ o$1(function(k2) {
        var $2, F2 = S4(), j2 = F2.tooltipRef, O2 = F2.triggerRef, G2 = (k2.composedPath == null || ($2 = k2.composedPath()) == null ? void 0 : $2[0]) || k2.target;
        G2 instanceof Node && j2 != null && O2 != null && !j2.contains(G2) && !O2.contains(G2) && M4();
      }, "handleClickOutside");
      return document.addEventListener("mousedown", T4), function() {
        return document.removeEventListener("mousedown", T4);
      };
    }
  }, [S4, M4]), reactExports.useEffect(function() {
    if (!(u4 == null || !A4("click")))
      return u4.addEventListener("click", P2), function() {
        return u4.removeEventListener("click", P2);
      };
  }, [u4, A4, P2]), reactExports.useEffect(function() {
    if (!(u4 == null || !A4("double-click")))
      return u4.addEventListener("dblclick", P2), function() {
        return u4.removeEventListener("dblclick", P2);
      };
  }, [u4, A4, P2]), reactExports.useEffect(function() {
    if (!(u4 == null || !A4("right-click"))) {
      var T4 = /* @__PURE__ */ o$1(function(k2) {
        k2.preventDefault(), P2();
      }, "preventDefaultAndToggle");
      return u4.addEventListener("contextmenu", T4), function() {
        return u4.removeEventListener("contextmenu", T4);
      };
    }
  }, [u4, A4, P2]), reactExports.useEffect(function() {
    if (!(u4 == null || !A4("focus")))
      return u4.addEventListener("focus", L4), u4.addEventListener("blur", M4), function() {
        u4.removeEventListener("focus", L4), u4.removeEventListener("blur", M4);
      };
  }, [u4, A4, L4, M4]), reactExports.useEffect(function() {
    if (!(u4 == null || !A4("hover")))
      return u4.addEventListener("mouseenter", L4), u4.addEventListener("mouseleave", M4), function() {
        u4.removeEventListener("mouseenter", L4), u4.removeEventListener("mouseleave", M4);
      };
  }, [u4, A4, L4, M4]), reactExports.useEffect(function() {
    if (!(m2 == null || !A4("hover") || !S4().finalConfig.interactive))
      return m2.addEventListener("mouseenter", L4), m2.addEventListener("mouseleave", M4), function() {
        m2.removeEventListener("mouseenter", L4), m2.removeEventListener("mouseleave", M4);
      };
  }, [m2, A4, L4, M4, S4]);
  var _2 = E4 == null || (r4 = E4.state) == null || (n3 = r4.modifiersData) == null || (a4 = n3.hide) == null ? void 0 : a4.isReferenceHidden;
  reactExports.useEffect(function() {
    i4.closeOnTriggerHidden && _2 && M4();
  }, [i4.closeOnTriggerHidden, M4, _2]), reactExports.useEffect(function() {
    if (!i4.followCursor || u4 == null) return;
    function T4(z4) {
      var k2 = z4.clientX, $2 = z4.clientY;
      jd.getBoundingClientRect = qd(k2, $2), R4 == null ? void 0 : R4();
    }
    return o$1(T4, "setMousePosition"), u4.addEventListener("mousemove", T4), function() {
      return u4.removeEventListener("mousemove", T4);
    };
  }, [i4.followCursor, u4, R4]), reactExports.useEffect(function() {
    if (!(m2 == null || R4 == null || i4.mutationObserverOptions == null)) {
      var T4 = new MutationObserver(R4);
      return T4.observe(m2, i4.mutationObserverOptions), function() {
        return T4.disconnect();
      };
    }
  }, [i4.mutationObserverOptions, m2, R4]);
  var D2 = /* @__PURE__ */ o$1(function(z4) {
    return z4 === void 0 && (z4 = {}), W$1({}, z4, {
      style: W$1({}, z4.style, b3.popper)
    }, x3.popper, {
      "data-popper-interactive": i4.interactive
    });
  }, "getTooltipProps"), K2 = /* @__PURE__ */ o$1(function(z4) {
    return z4 === void 0 && (z4 = {}), W$1({}, z4, x3.arrow, {
      style: W$1({}, z4.style, b3.arrow),
      "data-popper-arrow": true
    });
  }, "getArrowProps");
  return W$1({
    getArrowProps: K2,
    getTooltipProps: D2,
    setTooltipRef: v2,
    setTriggerRef: f4,
    tooltipRef: m2,
    triggerRef: u4,
    visible: p3
  }, E4);
}
var K7, Q7, jd, Wd, Yd = C$1(() => {
  Fn();
  en();
  $d();
  o$1(Ud, "useGetLatest");
  K7 = /* @__PURE__ */ o$1(function() {
  }, "noop");
  o$1(J7, "useControlledState");
  o$1(qd, "generateBoundingClientRect");
  Q7 = ["styles", "attributes"], jd = {
    getBoundingClientRect: qd()
  }, Wd = {
    closeOnOutsideClick: true,
    closeOnTriggerHidden: false,
    defaultVisible: false,
    delayHide: 0,
    delayShow: 0,
    followCursor: false,
    interactive: false,
    mutationObserverOptions: {
      attributes: true,
      childList: true,
      subtree: true
    },
    offset: [0, 6],
    trigger: "hover"
  };
  o$1(Gd, "usePopperTooltip");
});
var Xd, Xe$1, Ot, e6, t6, o0, Kd = C$1(() => {
  Xd = ge$1(rn(), 1), Xe$1 = (0, Xd.default)(1e3)(
    (e4, t4, r4, n3 = 0) => t4.split("-")[0] === e4 ? r4 : n3
  ), Ot = 8, e6 = xr$3.div(
    {
      position: "absolute",
      borderStyle: "solid"
    },
    ({ placement: e4 }) => {
      let t4 = 0, r4 = 0;
      switch (true) {
        case (e4.startsWith("left") || e4.startsWith("right")): {
          r4 = 8;
          break;
        }
        case (e4.startsWith("top") || e4.startsWith("bottom")): {
          t4 = 8;
          break;
        }
      }
      return { transform: `translate3d(${t4}px, ${r4}px, 0px)` };
    },
    ({ theme: e4, color: t4, placement: r4 }) => ({
      bottom: `${Xe$1("top", r4, `${Ot * -1}px`, "auto")}`,
      top: `${Xe$1("bottom", r4, `${Ot * -1}px`, "auto")}`,
      right: `${Xe$1("left", r4, `${Ot * -1}px`, "auto")}`,
      left: `${Xe$1("right", r4, `${Ot * -1}px`, "auto")}`,
      borderBottomWidth: `${Xe$1("top", r4, "0", Ot)}px`,
      borderTopWidth: `${Xe$1("bottom", r4, "0", Ot)}px`,
      borderRightWidth: `${Xe$1("left", r4, "0", Ot)}px`,
      borderLeftWidth: `${Xe$1("right", r4, "0", Ot)}px`,
      borderTopColor: Xe$1(
        "top",
        r4,
        e4.color[t4] || t4 || e4.base === "light" ? fo$3(e4.background.app) : e4.background.app,
        "transparent"
      ),
      borderBottomColor: Xe$1(
        "bottom",
        r4,
        e4.color[t4] || t4 || e4.base === "light" ? fo$3(e4.background.app) : e4.background.app,
        "transparent"
      ),
      borderLeftColor: Xe$1(
        "left",
        r4,
        e4.color[t4] || t4 || e4.base === "light" ? fo$3(e4.background.app) : e4.background.app,
        "transparent"
      ),
      borderRightColor: Xe$1(
        "right",
        r4,
        e4.color[t4] || t4 || e4.base === "light" ? fo$3(e4.background.app) : e4.background.app,
        "transparent"
      )
    })
  ), t6 = xr$3.div(
    ({ hidden: e4 }) => ({
      display: e4 ? "none" : "inline-block",
      zIndex: 2147483647,
      colorScheme: "light dark"
    }),
    ({ theme: e4, color: t4, hasChrome: r4 }) => r4 ? {
      background: t4 && e4.color[t4] || t4 || e4.base === "light" ? fo$3(e4.background.app) : e4.background.app,
      filter: `
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,
      borderRadius: e4.appBorderRadius + 2,
      fontSize: e4.typography.size.s1
    } : {}
  ), o0 = e.forwardRef(
    ({
      placement: e$1 = "top",
      hasChrome: t4 = true,
      children: r4,
      arrowProps: n3 = {},
      tooltipRef: a4,
      color: i4,
      withArrows: c3,
      ...l4
    }, s4) => /* @__PURE__ */ e.createElement(t6, { "data-testid": "tooltip", hasChrome: t4, ref: s4, ...l4, color: i4 }, t4 && c3 && /* @__PURE__ */ e.createElement(e6, { placement: e$1, ...n3, color: i4 }), r4)
  );
  o0.displayName = "Tooltip";
});
var i0 = {};
Qr(i0, {
  WithToolTipState: () => a0,
  WithTooltip: () => a0,
  WithTooltipPure: () => Qd
});
const { global: i6 } = __STORYBOOK_MODULE_GLOBAL__;
var jo, l6, c6, Qd, a0, Wo = C$1(() => {
  Yd();
  Kd();
  ({ document: jo } = i6), l6 = xr$3.div`
  display: inline-block;
  cursor: ${(e4) => {
    var _a2;
    return e4.trigger === "hover" || ((_a2 = e4.trigger) == null ? void 0 : _a2.includes("hover")) ? "default" : "pointer";
  }};
`, c6 = xr$3.g`
  cursor: ${(e4) => {
    var _a2;
    return e4.trigger === "hover" || ((_a2 = e4.trigger) == null ? void 0 : _a2.includes("hover")) ? "default" : "pointer";
  }};
`, Qd = /* @__PURE__ */ o$1(({
    svg: e$1 = false,
    trigger: t4 = "click",
    closeOnOutsideClick: r4 = false,
    placement: n3 = "top",
    modifiers: a4 = [
      {
        name: "preventOverflow",
        options: {
          padding: 8
        }
      },
      {
        name: "offset",
        options: {
          offset: [8, 8]
        }
      },
      {
        name: "arrow",
        options: {
          padding: 8
        }
      }
    ],
    hasChrome: i4 = true,
    defaultVisible: c3 = false,
    withArrows: l4,
    offset: s4,
    tooltip: u4,
    children: f4,
    closeOnTriggerHidden: d4,
    mutationObserverOptions: m2,
    delayHide: v2 = t4 === "hover" ? 200 : 0,
    visible: y3,
    interactive: p3,
    delayShow: h2 = t4 === "hover" ? 400 : 0,
    strategy: g2,
    followCursor: w2,
    onVisibleChange: b3,
    ...x3
  }) => {
    let E4 = e$1 ? c6 : l6, {
      getArrowProps: R4,
      getTooltipProps: S4,
      setTooltipRef: A4,
      setTriggerRef: M4,
      visible: L4,
      state: P2
    } = Gd(
      {
        trigger: t4,
        placement: n3,
        defaultVisible: c3,
        delayHide: v2,
        interactive: p3,
        closeOnOutsideClick: r4,
        closeOnTriggerHidden: d4,
        onVisibleChange: b3,
        delayShow: h2,
        followCursor: w2,
        mutationObserverOptions: m2,
        visible: y3,
        offset: s4
      },
      {
        modifiers: a4,
        strategy: g2
      }
    ), _2 = L4 ? /* @__PURE__ */ e.createElement(
      o0,
      {
        placement: P2 == null ? void 0 : P2.placement,
        ref: A4,
        hasChrome: i4,
        arrowProps: R4(),
        withArrows: l4,
        ...S4()
      },
      typeof u4 == "function" ? u4({ onHide: /* @__PURE__ */ o$1(() => b3(false), "onHide") }) : u4
    ) : null;
    return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(E4, { trigger: t4, ref: M4, ...x3 }, f4), L4 && Fg.createPortal(_2, jo.body));
  }, "WithTooltipPure"), a0 = /* @__PURE__ */ o$1(({
    startOpen: e$1 = false,
    onVisibleChange: t4,
    ...r4
  }) => {
    let [n3, a4] = reactExports.useState(e$1), i4 = reactExports.useCallback(
      (c3) => {
        t4 && t4(c3) === false || a4(c3);
      },
      [t4]
    );
    return reactExports.useEffect(() => {
      let c3 = /* @__PURE__ */ o$1(() => i4(false), "hide");
      jo.addEventListener("keydown", c3, false);
      let l4 = Array.from(jo.getElementsByTagName("iframe")), s4 = [];
      return l4.forEach((u4) => {
        let f4 = /* @__PURE__ */ o$1(() => {
          try {
            u4.contentWindow.document && (u4.contentWindow.document.addEventListener("click", c3), s4.push(() => {
              try {
                u4.contentWindow.document.removeEventListener("click", c3);
              } catch {
              }
            }));
          } catch {
          }
        }, "bind");
        f4(), u4.addEventListener("load", f4), s4.push(() => {
          u4.removeEventListener("load", f4);
        });
      }), () => {
        jo.removeEventListener("keydown", c3), s4.forEach((u4) => {
          u4();
        });
      };
    }), /* @__PURE__ */ e.createElement(Qd, { ...r4, visible: n3, onVisibleChange: i4 });
  }, "WithToolTipState");
});
var J$1 = /* @__PURE__ */ o$1(({ ...e4 }, t4) => {
  let r4 = [e4.class, e4.className];
  return delete e4.class, e4.className = ["sbdocs", `sbdocs-${t4}`, ...r4].filter(Boolean).join(" "), e4;
}, "nameSpaceClassNames");
en();
P0();
kn();
function k0(e4, t4) {
  e4.prototype = Object.create(t4.prototype), e4.prototype.constructor = e4, vt(e4, t4);
}
o$1(k0, "_inheritsLoose");
O0();
kn();
function B0(e4) {
  try {
    return Function.toString.call(e4).indexOf("[native code]") !== -1;
  } catch {
    return typeof e4 == "function";
  }
}
o$1(B0, "_isNativeFunction");
function Qo() {
  try {
    var e4 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Qo = /* @__PURE__ */ o$1(function() {
    return !!e4;
  }, "_isNativeReflectConstruct"))();
}
o$1(Qo, "_isNativeReflectConstruct");
kn();
function N0(e4, t4, r4) {
  if (Qo()) return Reflect.construct.apply(null, arguments);
  var n3 = [null];
  n3.push.apply(n3, t4);
  var a4 = new (e4.bind.apply(e4, n3))();
  return r4 && vt(a4, r4.prototype), a4;
}
o$1(N0, "_construct");
function Bn(e4) {
  var t4 = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Bn = /* @__PURE__ */ o$1(function(n3) {
    if (n3 === null || !B0(n3)) return n3;
    if (typeof n3 != "function") throw new TypeError("Super expression must either be null or a function");
    if (t4 !== void 0) {
      if (t4.has(n3)) return t4.get(n3);
      t4.set(n3, a4);
    }
    function a4() {
      return N0(n3, arguments, On(this).constructor);
    }
    return o$1(a4, "Wrapper"), a4.prototype = Object.create(n3.prototype, {
      constructor: {
        value: a4,
        enumerable: false,
        writable: true,
        configurable: true
      }
    }), vt(a4, n3);
  }, "_wrapNativeSuper"), Bn(e4);
}
o$1(Bn, "_wrapNativeSuper");
var Ip = {
  1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,
  2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,
  3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`,
  4: `Couldn't generate valid rgb string from %s, it returned %s.

`,
  5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,
  6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,
  7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,
  8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,
  9: `Please provide a number of steps to the modularScale helper.

`,
  10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,
  12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,
  13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,
  14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  16: `You must provide a template to this method.

`,
  17: `You passed an unsupported selector state to this method.

`,
  18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  19: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  23: `fontFace expects a name of a font-family.

`,
  24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  25: `fontFace expects localFonts to be an array.

`,
  26: `fontFace expects fileFormats to be an array.

`,
  27: `radialGradient requries at least 2 color-stops to properly render.

`,
  28: `Please supply a filename to retinaImage() as the first argument.

`,
  29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,
  32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,
  33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,
  34: `borderRadius expects a radius value as a string or number as the second argument.

`,
  35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  36: `Property must be a string value.

`,
  37: `Syntax Error at %s.

`,
  38: `Formula contains a function that needs parentheses at %s.

`,
  39: `Formula is missing closing parenthesis at %s.

`,
  40: `Formula has too many closing parentheses at %s.

`,
  41: `All values in a formula must have the same unit or be unitless.

`,
  42: `Please provide a number of steps to the modularScale helper.

`,
  43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,
  45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,
  46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,
  47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  48: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,
  51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`,
  52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  53: `fontFace expects localFonts to be an array.

`,
  54: `fontFace expects fileFormats to be an array.

`,
  55: `fontFace expects a name of a font-family.

`,
  56: `linearGradient requries at least 2 color-stops to properly render.

`,
  57: `radialGradient requries at least 2 color-stops to properly render.

`,
  58: `Please supply a filename to retinaImage() as the first argument.

`,
  59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  61: `Property must be a string value.

`,
  62: `borderRadius expects a radius value as a string or number as the second argument.

`,
  63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,
  65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,
  66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,
  67: `You must provide a template to this method.

`,
  68: `You passed an unsupported selector state to this method.

`,
  69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,
  70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,
  71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,
  72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,
  73: `Please provide a valid CSS variable.

`,
  74: `CSS variable not found and no default was provided.

`,
  75: `important requires a valid style object, got a %s instead.

`,
  76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,
  77: `remToPx expects a value in "rem" but you provided it in "%s".

`,
  78: `base must be set in "px" or "%" but you set it in "%s".
`
};
function zp() {
  for (var e4 = arguments.length, t4 = new Array(e4), r4 = 0; r4 < e4; r4++)
    t4[r4] = arguments[r4];
  var n3 = t4[0], a4 = [], i4;
  for (i4 = 1; i4 < t4.length; i4 += 1)
    a4.push(t4[i4]);
  return a4.forEach(function(c3) {
    n3 = n3.replace(/%[a-z]/, c3);
  }), n3;
}
o$1(zp, "format");
var Ae$1 = /* @__PURE__ */ function(e4) {
  k0(t4, e4);
  function t4(r4) {
    for (var n3, a4 = arguments.length, i4 = new Array(a4 > 1 ? a4 - 1 : 0), c3 = 1; c3 < a4; c3++)
      i4[c3 - 1] = arguments[c3];
    return n3 = e4.call(this, zp.apply(void 0, [Ip[r4]].concat(i4))) || this, H0(n3);
  }
  return o$1(t4, "PolishedError"), t4;
}(/* @__PURE__ */ Bn(Error));
function F0(e4, t4) {
  return e4.substr(-t4.length) === t4;
}
o$1(F0, "endsWith");
var Tp = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
function D0(e4) {
  if (typeof e4 != "string") return e4;
  var t4 = e4.match(Tp);
  return t4 ? parseFloat(e4) : e4;
}
o$1(D0, "stripUnit");
var Hp = /* @__PURE__ */ o$1(function(t4) {
  return function(r4, n3) {
    n3 === void 0 && (n3 = "16px");
    var a4 = r4, i4 = n3;
    if (typeof r4 == "string") {
      if (!F0(r4, "px"))
        throw new Ae$1(69, t4, r4);
      a4 = D0(r4);
    }
    if (typeof n3 == "string") {
      if (!F0(n3, "px"))
        throw new Ae$1(70, t4, n3);
      i4 = D0(n3);
    }
    if (typeof a4 == "string")
      throw new Ae$1(71, r4, t4);
    if (typeof i4 == "string")
      throw new Ae$1(72, n3, t4);
    return "" + a4 / i4 + t4;
  };
}, "pxtoFactory"), V0 = Hp;
V0("em");
V0("rem");
function ea(e4) {
  return Math.round(e4 * 255);
}
o$1(ea, "colorToInt");
function Pp(e4, t4, r4) {
  return ea(e4) + "," + ea(t4) + "," + ea(r4);
}
o$1(Pp, "convertToInt");
function tn(e4, t4, r4, n3) {
  if (n3 === void 0 && (n3 = Pp), t4 === 0)
    return n3(r4, r4, r4);
  var a4 = (e4 % 360 + 360) % 360 / 60, i4 = (1 - Math.abs(2 * r4 - 1)) * t4, c3 = i4 * (1 - Math.abs(a4 % 2 - 1)), l4 = 0, s4 = 0, u4 = 0;
  a4 >= 0 && a4 < 1 ? (l4 = i4, s4 = c3) : a4 >= 1 && a4 < 2 ? (l4 = c3, s4 = i4) : a4 >= 2 && a4 < 3 ? (s4 = i4, u4 = c3) : a4 >= 3 && a4 < 4 ? (s4 = c3, u4 = i4) : a4 >= 4 && a4 < 5 ? (l4 = c3, u4 = i4) : a4 >= 5 && a4 < 6 && (l4 = i4, u4 = c3);
  var f4 = r4 - i4 / 2, d4 = l4 + f4, m2 = s4 + f4, v2 = u4 + f4;
  return n3(d4, m2, v2);
}
o$1(tn, "hslToRgb");
var _0 = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function kp(e4) {
  if (typeof e4 != "string") return e4;
  var t4 = e4.toLowerCase();
  return _0[t4] ? "#" + _0[t4] : e4;
}
o$1(kp, "nameToHex");
var Op = /^#[a-fA-F0-9]{6}$/, Bp = /^#[a-fA-F0-9]{8}$/, Np = /^#[a-fA-F0-9]{3}$/, Fp = /^#[a-fA-F0-9]{4}$/, ta = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, Dp = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, _p = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, Vp = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function fr(e4) {
  if (typeof e4 != "string")
    throw new Ae$1(3);
  var t4 = kp(e4);
  if (t4.match(Op))
    return {
      red: parseInt("" + t4[1] + t4[2], 16),
      green: parseInt("" + t4[3] + t4[4], 16),
      blue: parseInt("" + t4[5] + t4[6], 16)
    };
  if (t4.match(Bp)) {
    var r4 = parseFloat((parseInt("" + t4[7] + t4[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t4[1] + t4[2], 16),
      green: parseInt("" + t4[3] + t4[4], 16),
      blue: parseInt("" + t4[5] + t4[6], 16),
      alpha: r4
    };
  }
  if (t4.match(Np))
    return {
      red: parseInt("" + t4[1] + t4[1], 16),
      green: parseInt("" + t4[2] + t4[2], 16),
      blue: parseInt("" + t4[3] + t4[3], 16)
    };
  if (t4.match(Fp)) {
    var n3 = parseFloat((parseInt("" + t4[4] + t4[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t4[1] + t4[1], 16),
      green: parseInt("" + t4[2] + t4[2], 16),
      blue: parseInt("" + t4[3] + t4[3], 16),
      alpha: n3
    };
  }
  var a4 = ta.exec(t4);
  if (a4)
    return {
      red: parseInt("" + a4[1], 10),
      green: parseInt("" + a4[2], 10),
      blue: parseInt("" + a4[3], 10)
    };
  var i4 = Dp.exec(t4.substring(0, 50));
  if (i4)
    return {
      red: parseInt("" + i4[1], 10),
      green: parseInt("" + i4[2], 10),
      blue: parseInt("" + i4[3], 10),
      alpha: parseFloat("" + i4[4]) > 1 ? parseFloat("" + i4[4]) / 100 : parseFloat("" + i4[4])
    };
  var c3 = _p.exec(t4);
  if (c3) {
    var l4 = parseInt("" + c3[1], 10), s4 = parseInt("" + c3[2], 10) / 100, u4 = parseInt("" + c3[3], 10) / 100, f4 = "rgb(" + tn(l4, s4, u4) + ")", d4 = ta.exec(f4);
    if (!d4)
      throw new Ae$1(4, t4, f4);
    return {
      red: parseInt("" + d4[1], 10),
      green: parseInt("" + d4[2], 10),
      blue: parseInt("" + d4[3], 10)
    };
  }
  var m2 = Vp.exec(t4.substring(0, 50));
  if (m2) {
    var v2 = parseInt("" + m2[1], 10), y3 = parseInt("" + m2[2], 10) / 100, p3 = parseInt("" + m2[3], 10) / 100, h2 = "rgb(" + tn(v2, y3, p3) + ")", g2 = ta.exec(h2);
    if (!g2)
      throw new Ae$1(4, t4, h2);
    return {
      red: parseInt("" + g2[1], 10),
      green: parseInt("" + g2[2], 10),
      blue: parseInt("" + g2[3], 10),
      alpha: parseFloat("" + m2[4]) > 1 ? parseFloat("" + m2[4]) / 100 : parseFloat("" + m2[4])
    };
  }
  throw new Ae$1(5);
}
o$1(fr, "parseToRgb");
function $p(e4) {
  var t4 = e4.red / 255, r4 = e4.green / 255, n3 = e4.blue / 255, a4 = Math.max(t4, r4, n3), i4 = Math.min(t4, r4, n3), c3 = (a4 + i4) / 2;
  if (a4 === i4)
    return e4.alpha !== void 0 ? {
      hue: 0,
      saturation: 0,
      lightness: c3,
      alpha: e4.alpha
    } : {
      hue: 0,
      saturation: 0,
      lightness: c3
    };
  var l4, s4 = a4 - i4, u4 = c3 > 0.5 ? s4 / (2 - a4 - i4) : s4 / (a4 + i4);
  switch (a4) {
    case t4:
      l4 = (r4 - n3) / s4 + (r4 < n3 ? 6 : 0);
      break;
    case r4:
      l4 = (n3 - t4) / s4 + 2;
      break;
    default:
      l4 = (t4 - r4) / s4 + 4;
      break;
  }
  return l4 *= 60, e4.alpha !== void 0 ? {
    hue: l4,
    saturation: u4,
    lightness: c3,
    alpha: e4.alpha
  } : {
    hue: l4,
    saturation: u4,
    lightness: c3
  };
}
o$1($p, "rgbToHsl");
function wt(e4) {
  return $p(fr(e4));
}
o$1(wt, "parseToHsl");
var jp = /* @__PURE__ */ o$1(function(t4) {
  return t4.length === 7 && t4[1] === t4[2] && t4[3] === t4[4] && t4[5] === t4[6] ? "#" + t4[1] + t4[3] + t4[5] : t4;
}, "reduceHexValue"), na = jp;
function Dt(e4) {
  var t4 = e4.toString(16);
  return t4.length === 1 ? "0" + t4 : t4;
}
o$1(Dt, "numberToHex");
function ra(e4) {
  return Dt(Math.round(e4 * 255));
}
o$1(ra, "colorToHex");
function Wp(e4, t4, r4) {
  return na("#" + ra(e4) + ra(t4) + ra(r4));
}
o$1(Wp, "convertToHex");
function Nn(e4, t4, r4) {
  return tn(e4, t4, r4, Wp);
}
o$1(Nn, "hslToHex");
function Up(e4, t4, r4) {
  if (typeof e4 == "number" && typeof t4 == "number" && typeof r4 == "number")
    return Nn(e4, t4, r4);
  if (typeof e4 == "object" && t4 === void 0 && r4 === void 0)
    return Nn(e4.hue, e4.saturation, e4.lightness);
  throw new Ae$1(1);
}
o$1(Up, "hsl");
function qp(e4, t4, r4, n3) {
  if (typeof e4 == "number" && typeof t4 == "number" && typeof r4 == "number" && typeof n3 == "number")
    return n3 >= 1 ? Nn(e4, t4, r4) : "rgba(" + tn(e4, t4, r4) + "," + n3 + ")";
  if (typeof e4 == "object" && t4 === void 0 && r4 === void 0 && n3 === void 0)
    return e4.alpha >= 1 ? Nn(e4.hue, e4.saturation, e4.lightness) : "rgba(" + tn(e4.hue, e4.saturation, e4.lightness) + "," + e4.alpha + ")";
  throw new Ae$1(2);
}
o$1(qp, "hsla");
function oa(e4, t4, r4) {
  if (typeof e4 == "number" && typeof t4 == "number" && typeof r4 == "number")
    return na("#" + Dt(e4) + Dt(t4) + Dt(r4));
  if (typeof e4 == "object" && t4 === void 0 && r4 === void 0)
    return na("#" + Dt(e4.red) + Dt(e4.green) + Dt(e4.blue));
  throw new Ae$1(6);
}
o$1(oa, "rgb");
function _t(e4, t4, r4, n3) {
  if (typeof e4 == "string" && typeof t4 == "number") {
    var a4 = fr(e4);
    return "rgba(" + a4.red + "," + a4.green + "," + a4.blue + "," + t4 + ")";
  } else {
    if (typeof e4 == "number" && typeof t4 == "number" && typeof r4 == "number" && typeof n3 == "number")
      return n3 >= 1 ? oa(e4, t4, r4) : "rgba(" + e4 + "," + t4 + "," + r4 + "," + n3 + ")";
    if (typeof e4 == "object" && t4 === void 0 && r4 === void 0 && n3 === void 0)
      return e4.alpha >= 1 ? oa(e4.red, e4.green, e4.blue) : "rgba(" + e4.red + "," + e4.green + "," + e4.blue + "," + e4.alpha + ")";
  }
  throw new Ae$1(7);
}
o$1(_t, "rgba");
var Gp = /* @__PURE__ */ o$1(function(t4) {
  return typeof t4.red == "number" && typeof t4.green == "number" && typeof t4.blue == "number" && (typeof t4.alpha != "number" || typeof t4.alpha > "u");
}, "isRgb"), Yp = /* @__PURE__ */ o$1(function(t4) {
  return typeof t4.red == "number" && typeof t4.green == "number" && typeof t4.blue == "number" && typeof t4.alpha == "number";
}, "isRgba"), Xp = /* @__PURE__ */ o$1(function(t4) {
  return typeof t4.hue == "number" && typeof t4.saturation == "number" && typeof t4.lightness == "number" && (typeof t4.alpha != "number" || typeof t4.alpha > "u");
}, "isHsl"), Zp = /* @__PURE__ */ o$1(function(t4) {
  return typeof t4.hue == "number" && typeof t4.saturation == "number" && typeof t4.lightness == "number" && typeof t4.alpha == "number";
}, "isHsla");
function bt(e4) {
  if (typeof e4 != "object") throw new Ae$1(8);
  if (Yp(e4)) return _t(e4);
  if (Gp(e4)) return oa(e4);
  if (Zp(e4)) return qp(e4);
  if (Xp(e4)) return Up(e4);
  throw new Ae$1(8);
}
o$1(bt, "toColorString");
function $0(e4, t4, r4) {
  return /* @__PURE__ */ o$1(function() {
    var a4 = r4.concat(Array.prototype.slice.call(arguments));
    return a4.length >= t4 ? e4.apply(this, a4) : $0(e4, t4, a4);
  }, "fn");
}
o$1($0, "curried");
function ke$1(e4) {
  return $0(e4, e4.length, []);
}
o$1(ke$1, "curry");
function Kp(e4, t4) {
  if (t4 === "transparent") return t4;
  var r4 = wt(t4);
  return bt(W$1({}, r4, {
    hue: r4.hue + parseFloat(e4)
  }));
}
o$1(Kp, "adjustHue");
ke$1(Kp);
function dr(e4, t4, r4) {
  return Math.max(e4, Math.min(t4, r4));
}
o$1(dr, "guard");
function Jp(e4, t4) {
  if (t4 === "transparent") return t4;
  var r4 = wt(t4);
  return bt(W$1({}, r4, {
    lightness: dr(0, 1, r4.lightness - parseFloat(e4))
  }));
}
o$1(Jp, "darken");
var Qp = ke$1(Jp), yt = Qp;
function e2(e4, t4) {
  if (t4 === "transparent") return t4;
  var r4 = wt(t4);
  return bt(W$1({}, r4, {
    saturation: dr(0, 1, r4.saturation - parseFloat(e4))
  }));
}
o$1(e2, "desaturate");
ke$1(e2);
function t2(e4, t4) {
  if (t4 === "transparent") return t4;
  var r4 = wt(t4);
  return bt(W$1({}, r4, {
    lightness: dr(0, 1, r4.lightness + parseFloat(e4))
  }));
}
o$1(t2, "lighten");
var r2 = ke$1(t2), aa = r2;
function n2(e4, t4, r4) {
  if (t4 === "transparent") return r4;
  if (r4 === "transparent") return t4;
  if (e4 === 0) return r4;
  var n3 = fr(t4), a4 = W$1({}, n3, {
    alpha: typeof n3.alpha == "number" ? n3.alpha : 1
  }), i4 = fr(r4), c3 = W$1({}, i4, {
    alpha: typeof i4.alpha == "number" ? i4.alpha : 1
  }), l4 = a4.alpha - c3.alpha, s4 = parseFloat(e4) * 2 - 1, u4 = s4 * l4 === -1 ? s4 : s4 + l4, f4 = 1 + s4 * l4, d4 = (u4 / f4 + 1) / 2, m2 = 1 - d4, v2 = {
    red: Math.floor(a4.red * d4 + c3.red * m2),
    green: Math.floor(a4.green * d4 + c3.green * m2),
    blue: Math.floor(a4.blue * d4 + c3.blue * m2),
    alpha: a4.alpha * parseFloat(e4) + c3.alpha * (1 - parseFloat(e4))
  };
  return _t(v2);
}
o$1(n2, "mix");
var o2 = ke$1(n2), j0 = o2;
function a2(e4, t4) {
  if (t4 === "transparent") return t4;
  var r4 = fr(t4), n3 = typeof r4.alpha == "number" ? r4.alpha : 1, a4 = W$1({}, r4, {
    alpha: dr(0, 1, (n3 * 100 + parseFloat(e4) * 100) / 100)
  });
  return _t(a4);
}
o$1(a2, "opacify");
ke$1(a2);
function i2(e4, t4) {
  if (t4 === "transparent") return t4;
  var r4 = wt(t4);
  return bt(W$1({}, r4, {
    saturation: dr(0, 1, r4.saturation + parseFloat(e4))
  }));
}
o$1(i2, "saturate");
ke$1(i2);
function l2(e4, t4) {
  return t4 === "transparent" ? t4 : bt(W$1({}, wt(t4), {
    hue: parseFloat(e4)
  }));
}
o$1(l2, "setHue");
ke$1(l2);
function c2(e4, t4) {
  return t4 === "transparent" ? t4 : bt(W$1({}, wt(t4), {
    lightness: parseFloat(e4)
  }));
}
o$1(c2, "setLightness");
ke$1(c2);
function s2(e4, t4) {
  return t4 === "transparent" ? t4 : bt(W$1({}, wt(t4), {
    saturation: parseFloat(e4)
  }));
}
o$1(s2, "setSaturation");
ke$1(s2);
function u2(e4, t4) {
  return t4 === "transparent" ? t4 : j0(parseFloat(e4), "rgb(0, 0, 0)", t4);
}
o$1(u2, "shade");
ke$1(u2);
function f2(e4, t4) {
  return t4 === "transparent" ? t4 : j0(parseFloat(e4), "rgb(255, 255, 255)", t4);
}
o$1(f2, "tint");
ke$1(f2);
function d2(e4, t4) {
  if (t4 === "transparent") return t4;
  var r4 = fr(t4), n3 = typeof r4.alpha == "number" ? r4.alpha : 1, a4 = W$1({}, r4, {
    alpha: dr(0, 1, +(n3 * 100 - parseFloat(e4) * 100).toFixed(2) / 100)
  });
  return _t(a4);
}
o$1(d2, "transparentize");
var p2 = ke$1(d2), ye$1 = p2;
var De$1 = /* @__PURE__ */ o$1(({ theme: e4 }) => ({
  margin: "20px 0 8px",
  padding: 0,
  cursor: "text",
  position: "relative",
  color: e4.color.defaultText,
  "&:first-of-type": {
    marginTop: 0,
    paddingTop: 0
  },
  "&:hover a.anchor": {
    textDecoration: "none"
  },
  "& tt, & code": {
    fontSize: "inherit"
  }
}), "headerCommon"), lt = /* @__PURE__ */ o$1(({ theme: e4 }) => ({
  lineHeight: 1,
  margin: "0 2px",
  padding: "3px 5px",
  whiteSpace: "nowrap",
  borderRadius: 3,
  fontSize: e4.typography.size.s2 - 1,
  border: e4.base === "light" ? `1px solid ${e4.color.mediumlight}` : `1px solid ${e4.color.darker}`,
  color: e4.base === "light" ? ye$1(0.1, e4.color.defaultText) : ye$1(0.3, e4.color.defaultText),
  backgroundColor: e4.base === "light" ? e4.color.lighter : e4.color.border
}), "codeCommon"), N$1 = /* @__PURE__ */ o$1(({ theme: e4 }) => ({
  fontFamily: e4.typography.fonts.base,
  fontSize: e4.typography.size.s3,
  margin: 0,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  WebkitOverflowScrolling: "touch"
}), "withReset"), Le$1 = {
  margin: "16px 0"
};
var W0 = xr$3.div(N$1);
var U0 = /* @__PURE__ */ o$1(({
  href: e$1 = "",
  ...t4
}) => {
  let n3 = /^\//.test(e$1) ? `./?path=${e$1}` : e$1, i4 = /^#.*/.test(e$1) ? "_self" : "_top";
  return /* @__PURE__ */ e.createElement("a", { href: n3, target: i4, ...t4 });
}, "Link");
var ia = xr$3(U0)(N$1, ({ theme: e4 }) => ({
  fontSize: "inherit",
  lineHeight: "24px",
  color: e4.color.secondary,
  textDecoration: "none",
  "&.absent": {
    color: "#cc0000"
  },
  "&.anchor": {
    display: "block",
    paddingLeft: 30,
    marginLeft: -30,
    cursor: "pointer",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0
  }
}));
var la = xr$3.blockquote(N$1, Le$1, ({ theme: e4 }) => ({
  borderLeft: `4px solid ${e4.color.medium}`,
  padding: "0 15px",
  color: e4.color.dark,
  "& > :first-of-type": {
    marginTop: 0
  },
  "& > :last-child": {
    marginBottom: 0
  }
}));
pn();
var W5 = /* @__PURE__ */ o$1((e4) => typeof e4 == "string", "isReactChildString");
var Ch = /[\n\r]/g, Mh = xr$3.code(
  ({ theme: e4 }) => ({
    // from reset
    fontFamily: e4.typography.fonts.mono,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    display: "inline-block",
    paddingLeft: 2,
    paddingRight: 2,
    verticalAlign: "baseline",
    color: "inherit"
  }),
  lt
), Ah = xr$3(dn)(({ theme: e4 }) => ({
  // DocBlocks-specific styling and overrides
  fontFamily: e4.typography.fonts.mono,
  fontSize: `${e4.typography.size.s2 - 1}px`,
  lineHeight: "19px",
  margin: "25px 0 40px",
  borderRadius: e4.appBorderRadius,
  boxShadow: e4.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
  "pre.prismjs": {
    padding: 20,
    background: "inherit"
  }
})), ci = /* @__PURE__ */ o$1(({
  className: e$1,
  children: t4,
  ...r4
}) => {
  let n3 = (e$1 || "").match(/lang-(\S+)/), a4 = reactExports.Children.toArray(t4);
  return a4.filter(W5).some((c3) => c3.match(Ch)) ? /* @__PURE__ */ e.createElement(
    Ah,
    {
      bordered: true,
      copyable: true,
      language: (n3 == null ? void 0 : n3[1]) ?? "text",
      format: false,
      ...r4
    },
    t4
  ) : /* @__PURE__ */ e.createElement(Mh, { ...r4, className: e$1 }, a4);
}, "Code");
var si = xr$3.dl(N$1, Le$1, {
  padding: 0,
  "& dt": {
    fontSize: "14px",
    fontWeight: "bold",
    fontStyle: "italic",
    padding: 0,
    margin: "16px 0 4px"
  },
  "& dt:first-of-type": {
    padding: 0
  },
  "& dt > :first-of-type": {
    marginTop: 0
  },
  "& dt > :last-child": {
    marginBottom: 0
  },
  "& dd": {
    margin: "0 0 16px",
    padding: "0 15px"
  },
  "& dd > :first-of-type": {
    marginTop: 0
  },
  "& dd > :last-child": {
    marginBottom: 0
  }
});
var ui = xr$3.div(N$1);
var fi = xr$3.h1(N$1, De$1, ({ theme: e4 }) => ({
  fontSize: `${e4.typography.size.l1}px`,
  fontWeight: e4.typography.weight.bold
}));
var di = xr$3.h2(N$1, De$1, ({ theme: e4 }) => ({
  fontSize: `${e4.typography.size.m2}px`,
  paddingBottom: 4,
  borderBottom: `1px solid ${e4.appBorderColor}`
}));
var pi = xr$3.h3(N$1, De$1, ({ theme: e4 }) => ({
  fontSize: `${e4.typography.size.m1}px`
}));
var mi = xr$3.h4(N$1, De$1, ({ theme: e4 }) => ({
  fontSize: `${e4.typography.size.s3}px`
}));
var hi = xr$3.h5(N$1, De$1, ({ theme: e4 }) => ({
  fontSize: `${e4.typography.size.s2}px`
}));
var gi = xr$3.h6(N$1, De$1, ({ theme: e4 }) => ({
  fontSize: `${e4.typography.size.s2}px`,
  color: e4.color.dark
}));
var vi = xr$3.hr(({ theme: e4 }) => ({
  border: "0 none",
  borderTop: `1px solid ${e4.appBorderColor}`,
  height: 4,
  padding: 0
}));
var wi = xr$3.img({
  maxWidth: "100%"
});
var bi = xr$3.li(N$1, ({ theme: e4 }) => ({
  fontSize: e4.typography.size.s2,
  color: e4.color.defaultText,
  lineHeight: "24px",
  "& + li": {
    marginTop: ".25em"
  },
  "& ul, & ol": {
    marginTop: ".25em",
    marginBottom: 0
  },
  "& code": lt({ theme: e4 })
}));
var _h = {
  paddingLeft: 30,
  "& :first-of-type": {
    marginTop: 0
  },
  "& :last-child": {
    marginBottom: 0
  }
}, yi = xr$3.ol(N$1, Le$1, _h, {
  listStyle: "decimal"
});
var Ri = xr$3.p(N$1, Le$1, ({ theme: e4 }) => ({
  fontSize: e4.typography.size.s2,
  lineHeight: "24px",
  color: e4.color.defaultText,
  "& code": lt({ theme: e4 })
}));
var xi = xr$3.pre(N$1, Le$1, ({ theme: e4 }) => ({
  // reset
  fontFamily: e4.typography.fonts.mono,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  lineHeight: "18px",
  padding: "11px 1rem",
  whiteSpace: "pre-wrap",
  color: "inherit",
  borderRadius: 3,
  margin: "1rem 0",
  "&:not(.prismjs)": {
    background: "transparent",
    border: "none",
    borderRadius: 0,
    padding: 0,
    margin: 0
  },
  "& pre, &.prismjs": {
    padding: 15,
    margin: 0,
    whiteSpace: "pre-wrap",
    color: "inherit",
    fontSize: "13px",
    lineHeight: "19px",
    code: {
      color: "inherit",
      fontSize: "inherit"
    }
  },
  "& code": {
    whiteSpace: "pre"
  },
  "& code, & tt": {
    border: "none"
  }
}));
var Ei = xr$3.span(N$1, ({ theme: e4 }) => ({
  "&.frame": {
    display: "block",
    overflow: "hidden",
    "& > span": {
      border: `1px solid ${e4.color.medium}`,
      display: "block",
      float: "left",
      overflow: "hidden",
      margin: "13px 0 0",
      padding: 7,
      width: "auto"
    },
    "& span img": {
      display: "block",
      float: "left"
    },
    "& span span": {
      clear: "both",
      color: e4.color.darkest,
      display: "block",
      padding: "5px 0 0"
    }
  },
  "&.align-center": {
    display: "block",
    overflow: "hidden",
    clear: "both",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px auto 0",
      textAlign: "center"
    },
    "& span img": {
      margin: "0 auto",
      textAlign: "center"
    }
  },
  "&.align-right": {
    display: "block",
    overflow: "hidden",
    clear: "both",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px 0 0",
      textAlign: "right"
    },
    "& span img": {
      margin: 0,
      textAlign: "right"
    }
  },
  "&.float-left": {
    display: "block",
    marginRight: 13,
    overflow: "hidden",
    float: "left",
    "& span": {
      margin: "13px 0 0"
    }
  },
  "&.float-right": {
    display: "block",
    marginLeft: 13,
    overflow: "hidden",
    float: "right",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px auto 0",
      textAlign: "right"
    }
  }
}));
var Si = xr$3.title(lt);
var Ci = xr$3.table(N$1, Le$1, ({ theme: e4 }) => ({
  fontSize: e4.typography.size.s2,
  lineHeight: "24px",
  padding: 0,
  borderCollapse: "collapse",
  "& tr": {
    borderTop: `1px solid ${e4.appBorderColor}`,
    backgroundColor: e4.appContentBg,
    margin: 0,
    padding: 0
  },
  "& tr:nth-of-type(2n)": {
    backgroundColor: e4.base === "dark" ? e4.color.darker : e4.color.lighter
  },
  "& tr th": {
    fontWeight: "bold",
    color: e4.color.defaultText,
    border: `1px solid ${e4.appBorderColor}`,
    margin: 0,
    padding: "6px 13px"
  },
  "& tr td": {
    border: `1px solid ${e4.appBorderColor}`,
    color: e4.color.defaultText,
    margin: 0,
    padding: "6px 13px"
  },
  "& tr th :first-of-type, & tr td :first-of-type": {
    marginTop: 0
  },
  "& tr th :last-child, & tr td :last-child": {
    marginBottom: 0
  }
}));
var Gh = {
  paddingLeft: 30,
  "& :first-of-type": {
    marginTop: 0
  },
  "& :last-child": {
    marginBottom: 0
  }
}, Mi = xr$3.ul(N$1, Le$1, Gh, { listStyle: "disc" });
var Ai = {
  h1: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(fi, { ...J$1(e$1, "h1") }), "h1"),
  h2: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(di, { ...J$1(e$1, "h2") }), "h2"),
  h3: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(pi, { ...J$1(e$1, "h3") }), "h3"),
  h4: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(mi, { ...J$1(e$1, "h4") }), "h4"),
  h5: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(hi, { ...J$1(e$1, "h5") }), "h5"),
  h6: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(gi, { ...J$1(e$1, "h6") }), "h6"),
  pre: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(xi, { ...J$1(e$1, "pre") }), "pre"),
  a: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(ia, { ...J$1(e$1, "a") }), "a"),
  hr: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(vi, { ...J$1(e$1, "hr") }), "hr"),
  dl: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(si, { ...J$1(e$1, "dl") }), "dl"),
  blockquote: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(la, { ...J$1(e$1, "blockquote") }), "blockquote"),
  table: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(Ci, { ...J$1(e$1, "table") }), "table"),
  img: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(wi, { ...J$1(e$1, "img") }), "img"),
  div: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(ui, { ...J$1(e$1, "div") }), "div"),
  span: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(Ei, { ...J$1(e$1, "span") }), "span"),
  li: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(bi, { ...J$1(e$1, "li") }), "li"),
  ul: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(Mi, { ...J$1(e$1, "ul") }), "ul"),
  ol: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(yi, { ...J$1(e$1, "ol") }), "ol"),
  p: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(Ri, { ...J$1(e$1, "p") }), "p"),
  code: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(ci, { ...J$1(e$1, "code") }), "code"),
  tt: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(Si, { ...J$1(e$1, "tt") }), "tt"),
  resetwrapper: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(W0, { ...J$1(e$1, "resetwrapper") }), "resetwrapper")
};
var Kh = xr$3.div(
  ({ theme: e4, compact: t4 }) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: e4.typography.size.s1,
    fontWeight: e4.typography.weight.bold,
    lineHeight: "12px",
    minWidth: 20,
    borderRadius: 20,
    padding: t4 ? "4px 7px" : "4px 10px"
  }),
  {
    svg: {
      height: 12,
      width: 12,
      marginRight: 4,
      marginTop: -2,
      path: {
        fill: "currentColor"
      }
    }
  },
  ({ theme: e4, status: t4 }) => {
    switch (t4) {
      case "critical":
        return {
          color: e4.color.critical,
          background: e4.background.critical
        };
      case "negative":
        return {
          color: e4.color.negativeText,
          background: e4.background.negative,
          boxShadow: e4.base === "light" ? `inset 0 0 0 1px ${ye$1(0.9, e4.color.negativeText)}` : "none"
        };
      case "warning":
        return {
          color: e4.color.warningText,
          background: e4.background.warning,
          boxShadow: e4.base === "light" ? `inset 0 0 0 1px ${ye$1(0.9, e4.color.warningText)}` : "none"
        };
      case "neutral":
        return {
          color: e4.textMutedColor,
          background: e4.base === "light" ? e4.background.app : e4.barBg,
          boxShadow: `inset 0 0 0 1px ${ye$1(0.8, e4.textMutedColor)}`
        };
      case "positive":
        return {
          color: e4.color.positiveText,
          background: e4.background.positive,
          boxShadow: e4.base === "light" ? `inset 0 0 0 1px ${ye$1(0.9, e4.color.positiveText)}` : "none"
        };
      case "active":
        return {
          color: e4.color.secondary,
          background: e4.background.hoverable,
          boxShadow: `inset 0 0 0 1px ${ye$1(0.9, e4.color.secondary)}`
        };
      default:
        return {};
    }
  }
), Jh = /* @__PURE__ */ o$1(({ ...e$1 }) => /* @__PURE__ */ e.createElement(Kh, { ...e$1 }), "Badge");
var G5 = /* @__PURE__ */ reactExports.forwardRef(({ color: e4 = "currentColor", size: t4 = 14, ...r4 }, n3) => /* @__PURE__ */ reactExports.createElement(
  "svg",
  {
    width: t4,
    height: t4,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n3,
    ...r4
  },
  /* @__PURE__ */ reactExports.createElement(
    "path",
    {
      d: "M10.139 8.725l1.36-1.323a.568.568 0 00.151-.54.534.534 0 00-.377-.396l-2.705-.708 2.22-4.976a.568.568 0 00-.15-.666.497.497 0 00-.648.008L5.464 4.05l.708.71 2.848-2.47-1.64 3.677.697.697 2.164.567-.81.787.708.708zM2.523 6.6a.566.566 0 00-.177.544.534.534 0 00.382.41l2.782.721-1.494 5.013a.563.563 0 00.217.627.496.496 0 00.629-.06l3.843-3.736-.708-.707-2.51 2.44 1.137-3.814-.685-.685-2.125-.55.844-.731-.71-.71L2.524 6.6zM1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.708-.708l-11-11z",
      fill: e4
    }
  )
));
var Y5 = /* @__PURE__ */ reactExports.forwardRef(({ color: e4 = "currentColor", size: t4 = 14, ...r4 }, n3) => /* @__PURE__ */ reactExports.createElement(
  "svg",
  {
    width: t4,
    height: t4,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n3,
    ...r4
  },
  /* @__PURE__ */ reactExports.createElement(
    "path",
    {
      d: "M1.854 1.146a.5.5 0 10-.708.708L6.293 7l-5.147 5.146a.5.5 0 00.708.708L7 7.707l5.146 5.147a.5.5 0 00.708-.708L7.707 7l5.147-5.146a.5.5 0 00-.708-.708L7 6.293 1.854 1.146z",
      fill: e4
    }
  )
));
var X5 = /* @__PURE__ */ reactExports.forwardRef(({ color: e4 = "currentColor", size: t4 = 14, ...r4 }, n3) => /* @__PURE__ */ reactExports.createElement(
  "svg",
  {
    width: t4,
    height: t4,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n3,
    ...r4
  },
  /* @__PURE__ */ reactExports.createElement(
    "path",
    {
      d: "M11.104 7.354l-5.5 5.5a.5.5 0 01-.708-.708L10.043 7 4.896 1.854a.5.5 0 11.708-.708l5.5 5.5a.5.5 0 010 .708z",
      fill: e4
    }
  )
));
var Qh = 0, eg = /* @__PURE__ */ o$1((e4) => e4.button === Qh && !e4.altKey && !e4.ctrlKey && !e4.metaKey && !e4.shiftKey, "isPlainLeftClick"), tg = /* @__PURE__ */ o$1(
  (e4, t4) => {
    eg(e4) && (e4.preventDefault(), t4(e4));
  },
  "cancelled"
), rg = xr$3.span(
  ({ withArrow: e4 }) => e4 ? {
    "> svg:last-of-type": {
      height: "0.7em",
      width: "0.7em",
      marginRight: 0,
      marginLeft: "0.25em",
      bottom: "auto",
      verticalAlign: "inherit"
    }
  } : {},
  ({ containsIcon: e4 }) => e4 ? {
    svg: {
      height: "1em",
      width: "1em",
      verticalAlign: "middle",
      position: "relative",
      bottom: 0,
      marginRight: 0
    }
  } : {}
), ng = xr$3.a(
  ({ theme: e4 }) => ({
    display: "inline-block",
    transition: "all 150ms ease-out",
    textDecoration: "none",
    color: e4.color.secondary,
    "&:hover, &:focus": {
      cursor: "pointer",
      color: yt(0.07, e4.color.secondary),
      "svg path:not([fill])": {
        fill: yt(0.07, e4.color.secondary)
      }
    },
    "&:active": {
      color: yt(0.1, e4.color.secondary),
      "svg path:not([fill])": {
        fill: yt(0.1, e4.color.secondary)
      }
    },
    svg: {
      display: "inline-block",
      height: "1em",
      width: "1em",
      verticalAlign: "text-top",
      position: "relative",
      bottom: "-0.125em",
      marginRight: "0.4em",
      "& path": {
        fill: e4.color.secondary
      }
    }
  }),
  ({ theme: e4, secondary: t4, tertiary: r4 }) => {
    let n3;
    return t4 && (n3 = [e4.textMutedColor, e4.color.dark, e4.color.darker]), r4 && (n3 = [e4.color.dark, e4.color.darkest, e4.textMutedColor]), n3 ? {
      color: n3[0],
      "svg path:not([fill])": {
        fill: n3[0]
      },
      "&:hover": {
        color: n3[1],
        "svg path:not([fill])": {
          fill: n3[1]
        }
      },
      "&:active": {
        color: n3[2],
        "svg path:not([fill])": {
          fill: n3[2]
        }
      }
    } : {};
  },
  ({ nochrome: e4 }) => e4 ? {
    color: "inherit",
    "&:hover, &:active": {
      color: "inherit",
      textDecoration: "underline"
    }
  } : {},
  ({ theme: e4, inverse: t4 }) => t4 ? {
    color: e4.color.lightest,
    ":not([fill])": {
      fill: e4.color.lightest
    },
    "&:hover": {
      color: e4.color.lighter,
      "svg path:not([fill])": {
        fill: e4.color.lighter
      }
    },
    "&:active": {
      color: e4.color.light,
      "svg path:not([fill])": {
        fill: e4.color.light
      }
    }
  } : {},
  ({ isButton: e4 }) => e4 ? {
    border: 0,
    borderRadius: 0,
    background: "none",
    padding: 0,
    fontSize: "inherit"
  } : {}
), Ii = /* @__PURE__ */ o$1(({
  cancel: e$1 = true,
  children: t4,
  onClick: r4 = void 0,
  withArrow: n3 = false,
  containsIcon: a4 = false,
  className: i4 = void 0,
  style: c3 = void 0,
  ...l4
}) => /* @__PURE__ */ e.createElement(
  ng,
  {
    ...l4,
    onClick: r4 && e$1 ? (s4) => tg(s4, r4) : r4,
    className: i4
  },
  /* @__PURE__ */ e.createElement(rg, { withArrow: n3, containsIcon: a4 }, t4, n3 && /* @__PURE__ */ e.createElement(X5, null))
), "Link");
var ag = xr$3.div(({ theme: e4 }) => ({
  fontSize: `${e4.typography.size.s2}px`,
  lineHeight: "1.6",
  h1: {
    fontSize: `${e4.typography.size.l1}px`,
    fontWeight: e4.typography.weight.bold
  },
  h2: {
    fontSize: `${e4.typography.size.m2}px`,
    borderBottom: `1px solid ${e4.appBorderColor}`
  },
  h3: {
    fontSize: `${e4.typography.size.m1}px`
  },
  h4: {
    fontSize: `${e4.typography.size.s3}px`
  },
  h5: {
    fontSize: `${e4.typography.size.s2}px`
  },
  h6: {
    fontSize: `${e4.typography.size.s2}px`,
    color: e4.color.dark
  },
  "pre:not(.prismjs)": {
    background: "transparent",
    border: "none",
    borderRadius: 0,
    padding: 0,
    margin: 0
  },
  "pre pre, pre.prismjs": {
    padding: 15,
    margin: 0,
    whiteSpace: "pre-wrap",
    color: "inherit",
    fontSize: "13px",
    lineHeight: "19px"
  },
  "pre pre code, pre.prismjs code": {
    color: "inherit",
    fontSize: "inherit"
  },
  "pre code": {
    margin: 0,
    padding: 0,
    whiteSpace: "pre",
    border: "none",
    background: "transparent"
  },
  "pre code, pre tt": {
    backgroundColor: "transparent",
    border: "none"
  },
  /* GitHub inspired Markdown styles loosely from https://gist.github.com/tuzz/3331384 */
  "body > *:first-of-type": {
    marginTop: "0 !important"
  },
  "body > *:last-child": {
    marginBottom: "0 !important"
  },
  a: {
    color: e4.color.secondary,
    textDecoration: "none"
  },
  "a.absent": {
    color: "#cc0000"
  },
  "a.anchor": {
    display: "block",
    paddingLeft: 30,
    marginLeft: -30,
    cursor: "pointer",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0
  },
  "h1, h2, h3, h4, h5, h6": {
    margin: "20px 0 10px",
    padding: 0,
    cursor: "text",
    position: "relative",
    "&:first-of-type": {
      marginTop: 0,
      paddingTop: 0
    },
    "&:hover a.anchor": {
      textDecoration: "none"
    },
    "& tt, & code": {
      fontSize: "inherit"
    }
  },
  "h1:first-of-type + h2": {
    marginTop: 0,
    paddingTop: 0
  },
  "p, blockquote, ul, ol, dl, li, table, pre": {
    margin: "15px 0"
  },
  hr: {
    border: "0 none",
    borderTop: `1px solid ${e4.appBorderColor}`,
    height: 4,
    padding: 0
  },
  "body > h1:first-of-type, body > h2:first-of-type, body > h3:first-of-type, body > h4:first-of-type, body > h5:first-of-type, body > h6:first-of-type": {
    marginTop: 0,
    paddingTop: 0
  },
  "body > h1:first-of-type + h2": {
    marginTop: 0,
    paddingTop: 0
  },
  "a:first-of-type h1, a:first-of-type h2, a:first-of-type h3, a:first-of-type h4, a:first-of-type h5, a:first-of-type h6": {
    marginTop: 0,
    paddingTop: 0
  },
  "h1 p, h2 p, h3 p, h4 p, h5 p, h6 p": {
    marginTop: 0
  },
  "li p.first": {
    display: "inline-block"
  },
  "ul, ol": {
    paddingLeft: 30,
    "& :first-of-type": {
      marginTop: 0
    },
    "& :last-child": {
      marginBottom: 0
    }
  },
  dl: {
    padding: 0
  },
  "dl dt": {
    fontSize: "14px",
    fontWeight: "bold",
    fontStyle: "italic",
    margin: "0 0 15px",
    padding: "0 15px",
    "&:first-of-type": {
      padding: 0
    },
    "& > :first-of-type": {
      marginTop: 0
    },
    "& > :last-child": {
      marginBottom: 0
    }
  },
  blockquote: {
    borderLeft: `4px solid ${e4.color.medium}`,
    padding: "0 15px",
    color: e4.color.dark,
    "& > :first-of-type": {
      marginTop: 0
    },
    "& > :last-child": {
      marginBottom: 0
    }
  },
  table: {
    padding: 0,
    borderCollapse: "collapse",
    "& tr": {
      borderTop: `1px solid ${e4.appBorderColor}`,
      backgroundColor: "white",
      margin: 0,
      padding: 0,
      "& th": {
        fontWeight: "bold",
        border: `1px solid ${e4.appBorderColor}`,
        textAlign: "left",
        margin: 0,
        padding: "6px 13px"
      },
      "& td": {
        border: `1px solid ${e4.appBorderColor}`,
        textAlign: "left",
        margin: 0,
        padding: "6px 13px"
      },
      "&:nth-of-type(2n)": {
        backgroundColor: e4.color.lighter
      },
      "& th :first-of-type, & td :first-of-type": {
        marginTop: 0
      },
      "& th :last-child, & td :last-child": {
        marginBottom: 0
      }
    }
  },
  img: {
    maxWidth: "100%"
  },
  "span.frame": {
    display: "block",
    overflow: "hidden",
    "& > span": {
      border: `1px solid ${e4.color.medium}`,
      display: "block",
      float: "left",
      overflow: "hidden",
      margin: "13px 0 0",
      padding: 7,
      width: "auto"
    },
    "& span img": {
      display: "block",
      float: "left"
    },
    "& span span": {
      clear: "both",
      color: e4.color.darkest,
      display: "block",
      padding: "5px 0 0"
    }
  },
  "span.align-center": {
    display: "block",
    overflow: "hidden",
    clear: "both",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px auto 0",
      textAlign: "center"
    },
    "& span img": {
      margin: "0 auto",
      textAlign: "center"
    }
  },
  "span.align-right": {
    display: "block",
    overflow: "hidden",
    clear: "both",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px 0 0",
      textAlign: "right"
    },
    "& span img": {
      margin: 0,
      textAlign: "right"
    }
  },
  "span.float-left": {
    display: "block",
    marginRight: 13,
    overflow: "hidden",
    float: "left",
    "& span": {
      margin: "13px 0 0"
    }
  },
  "span.float-right": {
    display: "block",
    marginLeft: 13,
    overflow: "hidden",
    float: "right",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px auto 0",
      textAlign: "right"
    }
  },
  "code, tt": {
    margin: "0 2px",
    padding: "0 5px",
    whiteSpace: "nowrap",
    border: `1px solid ${e4.color.mediumlight}`,
    backgroundColor: e4.color.lighter,
    borderRadius: 3,
    color: e4.base === "dark" ? e4.color.darkest : e4.color.dark
  }
}));
var Gt = [], Cr = null, cg = reactExports.lazy(async () => {
  let { SyntaxHighlighter: e$1 } = await Promise.resolve().then(() => (pn(), li));
  return Gt.length > 0 && (Gt.forEach((t4) => {
    e$1.registerLanguage(...t4);
  }), Gt = []), Cr === null && (Cr = e$1), {
    default: /* @__PURE__ */ o$1((t4) => /* @__PURE__ */ e.createElement(e$1, { ...t4 }), "default")
  };
}), sg = reactExports.lazy(async () => {
  let [{ SyntaxHighlighter: e$1 }, { formatter: t4 }] = await Promise.all([
    Promise.resolve().then(() => (pn(), li)),
    Promise.resolve().then(() => (tu(), eu))
  ]);
  return Gt.length > 0 && (Gt.forEach((r4) => {
    e$1.registerLanguage(...r4);
  }), Gt = []), Cr === null && (Cr = e$1), {
    default: /* @__PURE__ */ o$1((r4) => /* @__PURE__ */ e.createElement(e$1, { ...r4, formatter: t4 }), "default")
  };
}), nu = /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(reactExports.Suspense, { fallback: /* @__PURE__ */ e.createElement("div", null) }, e$1.format !== false ? /* @__PURE__ */ e.createElement(sg, { ...e$1 }) : /* @__PURE__ */ e.createElement(cg, { ...e$1 })), "SyntaxHighlighter");
nu.registerLanguage = (...e4) => {
  if (Cr !== null) {
    Cr.registerLanguage(...e4);
    return;
  }
  Gt.push(e4);
};
pn();
Ka();
var Eo = {};
Qr(Eo, {
  Close: () => gl,
  Content: () => pl,
  Description: () => hl,
  Dialog: () => Qi,
  DialogClose: () => cl,
  DialogContent: () => ol,
  DialogDescription: () => ll,
  DialogOverlay: () => nl,
  DialogPortal: () => rl,
  DialogTitle: () => il,
  DialogTrigger: () => el,
  Overlay: () => dl,
  Portal: () => fl,
  Root: () => ul,
  Title: () => ml,
  Trigger: () => Tv,
  WarningProvider: () => Av,
  createDialogScope: () => yv
});
function Mr(e4, t4, { checkForDefaultPrevented: r4 = true } = {}) {
  return /* @__PURE__ */ o$1(function(a4) {
    if (e4 == null ? void 0 : e4(a4), r4 === false || !a4.defaultPrevented)
      return t4 == null ? void 0 : t4(a4);
  }, "handleEvent");
}
o$1(Mr, "composeEventHandlers");
function ou(e4, t4) {
  if (typeof e4 == "function")
    return e4(t4);
  e4 != null && (e4.current = t4);
}
o$1(ou, "setRef");
function Yt(...e4) {
  return (t4) => {
    let r4 = false, n3 = e4.map((a4) => {
      let i4 = ou(a4, t4);
      return !r4 && typeof i4 == "function" && (r4 = true), i4;
    });
    if (r4)
      return () => {
        for (let a4 = 0; a4 < n3.length; a4++) {
          let i4 = n3[a4];
          typeof i4 == "function" ? i4() : ou(e4[a4], null);
        }
      };
  };
}
o$1(Yt, "composeRefs");
function Ke(...e4) {
  return reactExports.useCallback(Yt(...e4), e4);
}
o$1(Ke, "useComposedRefs");
function lu(e4, t4) {
  let r4 = reactExports.createContext(t4), n3 = /* @__PURE__ */ o$1((i4) => {
    let { children: c3, ...l4 } = i4, s4 = reactExports.useMemo(() => l4, Object.values(l4));
    return /* @__PURE__ */ jsxRuntimeExports.jsx(r4.Provider, { value: s4, children: c3 });
  }, "Provider");
  n3.displayName = e4 + "Provider";
  function a4(i4) {
    let c3 = reactExports.useContext(r4);
    if (c3) return c3;
    if (t4 !== void 0) return t4;
    throw new Error(`\`${i4}\` must be used within \`${e4}\``);
  }
  return o$1(a4, "useContext2"), [n3, a4];
}
o$1(lu, "createContext2");
function cu(e4, t4 = []) {
  let r4 = [];
  function n3(i4, c3) {
    let l4 = reactExports.createContext(c3), s4 = r4.length;
    r4 = [...r4, c3];
    let u4 = /* @__PURE__ */ o$1((d4) => {
      var _a2;
      let { scope: m2, children: v2, ...y3 } = d4, p3 = ((_a2 = m2 == null ? void 0 : m2[e4]) == null ? void 0 : _a2[s4]) || l4, h2 = reactExports.useMemo(() => y3, Object.values(y3));
      return /* @__PURE__ */ jsxRuntimeExports.jsx(p3.Provider, { value: h2, children: v2 });
    }, "Provider");
    u4.displayName = i4 + "Provider";
    function f4(d4, m2) {
      var _a2;
      let v2 = ((_a2 = m2 == null ? void 0 : m2[e4]) == null ? void 0 : _a2[s4]) || l4, y3 = reactExports.useContext(v2);
      if (y3) return y3;
      if (c3 !== void 0) return c3;
      throw new Error(`\`${d4}\` must be used within \`${i4}\``);
    }
    return o$1(f4, "useContext2"), [u4, f4];
  }
  o$1(n3, "createContext3");
  let a4 = /* @__PURE__ */ o$1(() => {
    let i4 = r4.map((c3) => reactExports.createContext(c3));
    return /* @__PURE__ */ o$1(function(l4) {
      let s4 = (l4 == null ? void 0 : l4[e4]) || i4;
      return reactExports.useMemo(
        () => ({ [`__scope${e4}`]: { ...l4, [e4]: s4 } }),
        [l4, s4]
      );
    }, "useScope");
  }, "createScope");
  return a4.scopeName = e4, [n3, ug(a4, ...t4)];
}
o$1(cu, "createContextScope");
function ug(...e4) {
  let t4 = e4[0];
  if (e4.length === 1) return t4;
  let r4 = /* @__PURE__ */ o$1(() => {
    let n3 = e4.map((a4) => ({
      useScope: a4(),
      scopeName: a4.scopeName
    }));
    return /* @__PURE__ */ o$1(function(i4) {
      let c3 = n3.reduce((l4, { useScope: s4, scopeName: u4 }) => {
        let d4 = s4(i4)[`__scope${u4}`];
        return { ...l4, ...d4 };
      }, {});
      return reactExports.useMemo(() => ({ [`__scope${t4.scopeName}`]: c3 }), [c3]);
    }, "useComposedScopes");
  }, "createScope");
  return r4.scopeName = t4.scopeName, r4;
}
o$1(ug, "composeContextScopes");
var ut = (globalThis == null ? void 0 : globalThis.document) ? reactExports.useLayoutEffect : () => {
};
var fg = We$3[" useId ".trim().toString()] || (() => {
}), dg = 0;
function lo(e4) {
  let [t4, r4] = reactExports.useState(fg());
  return ut(() => {
    e4 || r4((n3) => n3 ?? String(dg++));
  }, [e4]), e4 || (t4 ? `radix-${t4}` : "");
}
o$1(lo, "useId");
var pg = We$3[" useInsertionEffect ".trim().toString()] || ut;
function uu({
  prop: e4,
  defaultProp: t4,
  onChange: r4 = /* @__PURE__ */ o$1(() => {
  }, "onChange"),
  caller: n3
}) {
  let [a4, i4, c3] = mg({
    defaultProp: t4,
    onChange: r4
  }), l4 = e4 !== void 0, s4 = l4 ? e4 : a4;
  {
    let f4 = reactExports.useRef(e4 !== void 0);
    reactExports.useEffect(() => {
      let d4 = f4.current;
      d4 !== l4 && console.warn(
        `${n3} is changing from ${d4 ? "controlled" : "uncontrolled"} to ${l4 ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f4.current = l4;
    }, [l4, n3]);
  }
  let u4 = reactExports.useCallback(
    (f4) => {
      var _a2;
      if (l4) {
        let d4 = hg(f4) ? f4(e4) : f4;
        d4 !== e4 && ((_a2 = c3.current) == null ? void 0 : _a2.call(c3, d4));
      } else
        i4(f4);
    },
    [l4, e4, i4, c3]
  );
  return [s4, u4];
}
o$1(uu, "useControllableState");
function mg({
  defaultProp: e4,
  onChange: t4
}) {
  let [r4, n3] = reactExports.useState(e4), a4 = reactExports.useRef(r4), i4 = reactExports.useRef(t4);
  return pg(() => {
    i4.current = t4;
  }, [t4]), reactExports.useEffect(() => {
    var _a2;
    a4.current !== r4 && ((_a2 = i4.current) == null ? void 0 : _a2.call(i4, r4), a4.current = r4);
  }, [r4, a4]), [r4, n3, i4];
}
o$1(mg, "useUncontrolledState");
function hg(e4) {
  return typeof e4 == "function";
}
o$1(hg, "isFunction");
function so(e4, t4, { checkForDefaultPrevented: r4 = true } = {}) {
  return /* @__PURE__ */ o$1(function(a4) {
    if (e4 == null ? void 0 : e4(a4), r4 === false || !a4.defaultPrevented)
      return t4 == null ? void 0 : t4(a4);
  }, "handleEvent");
}
o$1(so, "composeEventHandlers");
// @__NO_SIDE_EFFECTS__
function du(e4) {
  let t4 = /* @__PURE__ */ gg(e4), r4 = reactExports.forwardRef((n3, a4) => {
    let { children: i4, ...c3 } = n3, l4 = reactExports.Children.toArray(i4), s4 = l4.find(wg);
    if (s4) {
      let u4 = s4.props.children, f4 = l4.map((d4) => d4 === s4 ? reactExports.Children.count(u4) > 1 ? reactExports.Children.only(null) : reactExports.isValidElement(u4) ? u4.props.children : null : d4);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(t4, { ...c3, ref: a4, children: reactExports.isValidElement(u4) ? reactExports.cloneElement(u4, void 0, f4) : null });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(t4, { ...c3, ref: a4, children: i4 });
  });
  return r4.displayName = `${e4}.Slot`, r4;
}
o$1(du, "createSlot");
// @__NO_SIDE_EFFECTS__
function gg(e4) {
  let t4 = reactExports.forwardRef((r4, n3) => {
    let { children: a4, ...i4 } = r4;
    if (reactExports.isValidElement(a4)) {
      let c3 = yg(a4), l4 = bg(i4, a4.props);
      return a4.type !== reactExports.Fragment && (l4.ref = n3 ? Yt(n3, c3) : c3), reactExports.cloneElement(a4, l4);
    }
    return reactExports.Children.count(a4) > 1 ? reactExports.Children.only(null) : null;
  });
  return t4.displayName = `${e4}.SlotClone`, t4;
}
o$1(gg, "createSlotClone");
var vg = Symbol("radix.slottable");
function wg(e4) {
  return reactExports.isValidElement(e4) && typeof e4.type == "function" && "__radixId" in e4.type && e4.type.__radixId === vg;
}
o$1(wg, "isSlottable");
function bg(e4, t4) {
  let r4 = { ...t4 };
  for (let n3 in t4) {
    let a4 = e4[n3], i4 = t4[n3];
    /^on[A-Z]/.test(n3) ? a4 && i4 ? r4[n3] = (...l4) => {
      i4(...l4), a4(...l4);
    } : a4 && (r4[n3] = a4) : n3 === "style" ? r4[n3] = { ...a4, ...i4 } : n3 === "className" && (r4[n3] = [a4, i4].filter(Boolean).join(" "));
  }
  return { ...e4, ...r4 };
}
o$1(bg, "mergeProps");
function yg(e4) {
  var _a2, _b2;
  let t4 = (_a2 = Object.getOwnPropertyDescriptor(e4.props, "ref")) == null ? void 0 : _a2.get, r4 = t4 && "isReactWarning" in t4 && t4.isReactWarning;
  return r4 ? e4.ref : (t4 = (_b2 = Object.getOwnPropertyDescriptor(e4, "ref")) == null ? void 0 : _b2.get, r4 = t4 && "isReactWarning" in t4 && t4.isReactWarning, r4 ? e4.props.ref : e4.props.ref || e4.ref);
}
o$1(yg, "getElementRef");
var xg = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Oe$1 = xg.reduce((e4, t4) => {
  let r4 = /* @__PURE__ */ du(`Primitive.${t4}`), n3 = reactExports.forwardRef((a4, i4) => {
    let { asChild: c3, ...l4 } = a4, s4 = c3 ? r4 : t4;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), /* @__PURE__ */ jsxRuntimeExports.jsx(s4, { ...l4, ref: i4 });
  });
  return n3.displayName = `Primitive.${t4}`, { ...e4, [t4]: n3 };
}, {});
function hu(e4, t4) {
  e4 && reactDomExports.flushSync(() => e4.dispatchEvent(t4));
}
o$1(hu, "dispatchDiscreteCustomEvent");
function Mt(e4) {
  let t4 = reactExports.useRef(e4);
  return reactExports.useEffect(() => {
    t4.current = e4;
  }), reactExports.useMemo(() => (...r4) => {
    var _a2;
    return (_a2 = t4.current) == null ? void 0 : _a2.call(t4, ...r4);
  }, []);
}
o$1(Mt, "useCallbackRef");
function vu(e4, t4 = globalThis == null ? void 0 : globalThis.document) {
  let r4 = Mt(e4);
  reactExports.useEffect(() => {
    let n3 = /* @__PURE__ */ o$1((a4) => {
      a4.key === "Escape" && r4(a4);
    }, "handleKeyDown");
    return t4.addEventListener("keydown", n3, { capture: true }), () => t4.removeEventListener("keydown", n3, { capture: true });
  }, [r4, t4]);
}
o$1(vu, "useEscapeKeydown");
var Eg = "DismissableLayer", Ti = "dismissableLayer.update", Sg = "dismissableLayer.pointerDownOutside", Cg = "dismissableLayer.focusOutside", wu, Ru = reactExports.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Hi = reactExports.forwardRef(
  (e4, t4) => {
    let {
      disableOutsidePointerEvents: r4 = false,
      onEscapeKeyDown: n3,
      onPointerDownOutside: a4,
      onFocusOutside: i4,
      onInteractOutside: c3,
      onDismiss: l4,
      ...s4
    } = e4, u4 = reactExports.useContext(Ru), [f4, d4] = reactExports.useState(null), m2 = (f4 == null ? void 0 : f4.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v2] = reactExports.useState({}), y3 = Ke(t4, (S4) => d4(
      S4
    )), p3 = Array.from(u4.layers), [h2] = [...u4.layersWithOutsidePointerEventsDisabled].slice(-1), g2 = p3.indexOf(h2), w2 = f4 ? p3.indexOf(f4) : -1, b3 = u4.layersWithOutsidePointerEventsDisabled.size > 0, x3 = w2 >= g2, E4 = Lg((S4) => {
      let A4 = S4.target, M4 = [...u4.branches].some((L4) => L4.contains(A4));
      !x3 || M4 || (a4 == null ? void 0 : a4(S4), c3 == null ? void 0 : c3(S4), S4.defaultPrevented || (l4 == null ? void 0 : l4()));
    }, m2), R4 = Ig((S4) => {
      let A4 = S4.target;
      [...u4.branches].some((L4) => L4.contains(A4)) || (i4 == null ? void 0 : i4(S4), c3 == null ? void 0 : c3(S4), S4.defaultPrevented || (l4 == null ? void 0 : l4()));
    }, m2);
    return vu((S4) => {
      w2 === u4.layers.size - 1 && (n3 == null ? void 0 : n3(S4), !S4.defaultPrevented && l4 && (S4.preventDefault(), l4()));
    }, m2), reactExports.useEffect(() => {
      if (f4)
        return r4 && (u4.layersWithOutsidePointerEventsDisabled.size === 0 && (wu = m2.body.style.pointerEvents, m2.body.style.pointerEvents = "none"), u4.layersWithOutsidePointerEventsDisabled.add(f4)), u4.layers.add(f4), bu(), () => {
          r4 && u4.layersWithOutsidePointerEventsDisabled.size === 1 && (m2.body.style.pointerEvents = wu);
        };
    }, [f4, m2, r4, u4]), reactExports.useEffect(() => () => {
      f4 && (u4.layers.delete(f4), u4.layersWithOutsidePointerEventsDisabled.delete(f4), bu());
    }, [f4, u4]), reactExports.useEffect(() => {
      let S4 = /* @__PURE__ */ o$1(() => v2({}), "handleUpdate");
      return document.addEventListener(Ti, S4), () => document.removeEventListener(Ti, S4);
    }, []), /* @__PURE__ */ jsxRuntimeExports.jsx(
      Oe$1.div,
      {
        ...s4,
        ref: y3,
        style: {
          pointerEvents: b3 ? x3 ? "auto" : "none" : void 0,
          ...e4.style
        },
        onFocusCapture: so(e4.onFocusCapture, R4.onFocusCapture),
        onBlurCapture: so(e4.onBlurCapture, R4.onBlurCapture),
        onPointerDownCapture: so(
          e4.onPointerDownCapture,
          E4.onPointerDownCapture
        )
      }
    );
  }
);
Hi.displayName = Eg;
var Mg = "DismissableLayerBranch", Ag = reactExports.forwardRef((e4, t4) => {
  let r4 = reactExports.useContext(Ru), n3 = reactExports.useRef(null), a4 = Ke(t4, n3);
  return reactExports.useEffect(() => {
    let i4 = n3.current;
    if (i4)
      return r4.branches.add(i4), () => {
        r4.branches.delete(i4);
      };
  }, [r4.branches]), /* @__PURE__ */ jsxRuntimeExports.jsx(Oe$1.div, { ...e4, ref: a4 });
});
Ag.displayName = Mg;
function Lg(e4, t4 = globalThis == null ? void 0 : globalThis.document) {
  let r4 = Mt(e4), n3 = reactExports.useRef(false), a4 = reactExports.useRef(() => {
  });
  return reactExports.useEffect(() => {
    let i4 = /* @__PURE__ */ o$1((l4) => {
      if (l4.target && !n3.current) {
        let u4 = /* @__PURE__ */ o$1(function() {
          xu(
            Sg,
            r4,
            f4,
            { discrete: true }
          );
        }, "handleAndDispatchPointerDownOutsideEvent2");
        let f4 = { originalEvent: l4 };
        l4.pointerType === "touch" ? (t4.removeEventListener("click", a4.current), a4.current = u4, t4.addEventListener("click", a4.current, { once: true })) : u4();
      } else
        t4.removeEventListener("click", a4.current);
      n3.current = false;
    }, "handlePointerDown"), c3 = window.setTimeout(() => {
      t4.addEventListener("pointerdown", i4);
    }, 0);
    return () => {
      window.clearTimeout(c3), t4.removeEventListener("pointerdown", i4), t4.removeEventListener("click", a4.current);
    };
  }, [t4, r4]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: /* @__PURE__ */ o$1(() => n3.current = true, "onPointerDownCapture")
  };
}
o$1(Lg, "usePointerDownOutside");
function Ig(e4, t4 = globalThis == null ? void 0 : globalThis.document) {
  let r4 = Mt(e4), n3 = reactExports.useRef(false);
  return reactExports.useEffect(() => {
    let a4 = /* @__PURE__ */ o$1((i4) => {
      i4.target && !n3.current && xu(Cg, r4, { originalEvent: i4 }, {
        discrete: false
      });
    }, "handleFocus");
    return t4.addEventListener("focusin", a4), () => t4.removeEventListener("focusin", a4);
  }, [t4, r4]), {
    onFocusCapture: /* @__PURE__ */ o$1(() => n3.current = true, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ o$1(() => n3.current = false, "onBlurCapture")
  };
}
o$1(Ig, "useFocusOutside");
function bu() {
  let e4 = new CustomEvent(Ti);
  document.dispatchEvent(e4);
}
o$1(bu, "dispatchUpdate");
function xu(e4, t4, r4, { discrete: n3 }) {
  let a4 = r4.originalEvent.target, i4 = new CustomEvent(e4, { bubbles: false, cancelable: true, detail: r4 });
  t4 && a4.addEventListener(e4, t4, { once: true }), n3 ? hu(a4, i4) : a4.dispatchEvent(i4);
}
o$1(xu, "handleAndDispatchCustomEvent");
var Pi = "focusScope.autoFocusOnMount", ki = "focusScope.autoFocusOnUnmount", Eu = { bubbles: false, cancelable: true }, Tg = "FocusScope", Oi = reactExports.forwardRef(
  (e4, t4) => {
    let {
      loop: r4 = false,
      trapped: n3 = false,
      onMountAutoFocus: a4,
      onUnmountAutoFocus: i4,
      ...c3
    } = e4, [l4, s4] = reactExports.useState(null), u4 = Mt(a4), f4 = Mt(i4), d4 = reactExports.useRef(null), m2 = Ke(t4, (p3) => s4(p3)), v2 = reactExports.useRef({
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    }).current;
    reactExports.useEffect(() => {
      if (n3) {
        let w2 = /* @__PURE__ */ o$1(function(R4) {
          if (v2.paused || !l4) return;
          let S4 = R4.target;
          l4.contains(S4) ? d4.current = S4 : At2(d4.current, { select: true });
        }, "handleFocusIn2"), b3 = /* @__PURE__ */ o$1(function(R4) {
          if (v2.paused || !l4) return;
          let S4 = R4.relatedTarget;
          S4 !== null && (l4.contains(S4) || At2(d4.current, { select: true }));
        }, "handleFocusOut2"), x3 = /* @__PURE__ */ o$1(function(R4) {
          if (document.activeElement === document.body)
            for (let A4 of R4)
              A4.removedNodes.length > 0 && At2(l4);
        }, "handleMutations2");
        document.addEventListener("focusin", w2), document.addEventListener("focusout", b3);
        let E4 = new MutationObserver(x3);
        return l4 && E4.observe(l4, { childList: true, subtree: true }), () => {
          document.removeEventListener("focusin", w2), document.removeEventListener("focusout", b3), E4.disconnect();
        };
      }
    }, [n3, l4, v2.paused]), reactExports.useEffect(() => {
      if (l4) {
        Cu.add(v2);
        let p3 = document.activeElement;
        if (!l4.contains(p3)) {
          let g2 = new CustomEvent(Pi, Eu);
          l4.addEventListener(Pi, u4), l4.dispatchEvent(g2), g2.defaultPrevented || (Hg(Ng(Au(l4)), { select: true }), document.activeElement === p3 && At2(l4));
        }
        return () => {
          l4.removeEventListener(Pi, u4), setTimeout(() => {
            let g2 = new CustomEvent(ki, Eu);
            l4.addEventListener(ki, f4), l4.dispatchEvent(g2), g2.defaultPrevented || At2(p3 ?? document.body, { select: true }), l4.removeEventListener(
              ki,
              f4
            ), Cu.remove(v2);
          }, 0);
        };
      }
    }, [l4, u4, f4, v2]);
    let y3 = reactExports.useCallback(
      (p3) => {
        if (!r4 && !n3 || v2.paused) return;
        let h2 = p3.key === "Tab" && !p3.altKey && !p3.ctrlKey && !p3.metaKey, g2 = document.activeElement;
        if (h2 && g2) {
          let w2 = p3.currentTarget, [b3, x3] = Pg(w2);
          b3 && x3 ? !p3.shiftKey && g2 === x3 ? (p3.preventDefault(), r4 && At2(b3, { select: true })) : p3.shiftKey && g2 === b3 && (p3.preventDefault(), r4 && At2(x3, { select: true })) : g2 === w2 && p3.preventDefault();
        }
      },
      [r4, n3, v2.paused]
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Oe$1.div, { tabIndex: -1, ...c3, ref: m2, onKeyDown: y3 });
  }
);
Oi.displayName = Tg;
function Hg(e4, { select: t4 = false } = {}) {
  let r4 = document.activeElement;
  for (let n3 of e4)
    if (At2(n3, { select: t4 }), document.activeElement !== r4) return;
}
o$1(Hg, "focusFirst");
function Pg(e4) {
  let t4 = Au(e4), r4 = Su(t4, e4), n3 = Su(t4.reverse(), e4);
  return [r4, n3];
}
o$1(Pg, "getTabbableEdges");
function Au(e4) {
  let t4 = [], r4 = document.createTreeWalker(e4, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ o$1((n3) => {
      let a4 = n3.tagName === "INPUT" && n3.type === "hidden";
      return n3.disabled || n3.hidden || a4 ? NodeFilter.FILTER_SKIP : n3.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; r4.nextNode(); ) t4.push(r4.currentNode);
  return t4;
}
o$1(Au, "getTabbableCandidates");
function Su(e4, t4) {
  for (let r4 of e4)
    if (!kg(r4, { upTo: t4 })) return r4;
}
o$1(Su, "findVisible");
function kg(e4, { upTo: t4 }) {
  if (getComputedStyle(e4).visibility === "hidden") return true;
  for (; e4; ) {
    if (t4 !== void 0 && e4 === t4) return false;
    if (getComputedStyle(e4).display === "none") return true;
    e4 = e4.parentElement;
  }
  return false;
}
o$1(kg, "isHidden");
function Og(e4) {
  return e4 instanceof HTMLInputElement && "select" in e4;
}
o$1(Og, "isSelectableInput");
function At2(e4, { select: t4 = false } = {}) {
  if (e4 && e4.focus) {
    let r4 = document.activeElement;
    e4.focus({ preventScroll: true }), e4 !== r4 && Og(e4) && t4 && e4.select();
  }
}
o$1(At2, "focus");
var Cu = Bg();
function Bg() {
  let e4 = [];
  return {
    add(t4) {
      let r4 = e4[0];
      t4 !== r4 && (r4 == null ? void 0 : r4.pause()), e4 = Mu(e4, t4), e4.unshift(t4);
    },
    remove(t4) {
      var _a2;
      e4 = Mu(e4, t4), (_a2 = e4[0]) == null ? void 0 : _a2.resume();
    }
  };
}
o$1(Bg, "createFocusScopesStack");
function Mu(e4, t4) {
  let r4 = [...e4], n3 = r4.indexOf(t4);
  return n3 !== -1 && r4.splice(n3, 1), r4;
}
o$1(Mu, "arrayRemove");
function Ng(e4) {
  return e4.filter((t4) => t4.tagName !== "A");
}
o$1(Ng, "removeLinks");
var _g = "Portal", Bi = reactExports.forwardRef((e4, t4) => {
  var _a2;
  let { container: r4, ...n3 } = e4, [a4, i4] = reactExports.useState(false);
  ut(() => i4(true), []);
  let c3 = r4 || a4 && ((_a2 = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a2.body);
  return c3 ? Fg.createPortal(/* @__PURE__ */ jsxRuntimeExports.jsx(Oe$1.div, { ...n3, ref: t4 }), c3) : null;
});
Bi.displayName = _g;
function Vg(e4, t4) {
  return reactExports.useReducer((r4, n3) => t4[r4][n3] ?? r4, e4);
}
o$1(Vg, "useStateMachine");
var mn = /* @__PURE__ */ o$1((e4) => {
  let { present: t4, children: r4 } = e4, n3 = $g(t4), a4 = typeof r4 == "function" ? r4({ present: n3.isPresent }) : reactExports.Children.only(r4), i4 = Ke(
    n3.ref,
    jg(a4)
  );
  return typeof r4 == "function" || n3.isPresent ? reactExports.cloneElement(a4, { ref: i4 }) : null;
}, "Presence");
mn.displayName = "Presence";
function $g(e4) {
  let [t4, r4] = reactExports.useState(), n3 = reactExports.useRef(null), a4 = reactExports.useRef(e4), i4 = reactExports.useRef("none"), c3 = e4 ? "mounted" : "unmounted", [l4, s4] = Vg(c3, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return reactExports.useEffect(() => {
    let u4 = fo(n3.current);
    i4.current = l4 === "mounted" ? u4 : "none";
  }, [l4]), ut(() => {
    let u4 = n3.current, f4 = a4.current;
    if (f4 !== e4) {
      let m2 = i4.current, v2 = fo(u4);
      e4 ? s4("MOUNT") : v2 === "none" || (u4 == null ? void 0 : u4.display) === "none" ? s4("UNMOUNT") : s4(f4 && m2 !== v2 ? "ANIMATION_OUT" : "UNMOUNT"), a4.current = e4;
    }
  }, [e4, s4]), ut(() => {
    if (t4) {
      let u4, f4 = t4.ownerDocument.defaultView ?? window, d4 = /* @__PURE__ */ o$1((v2) => {
        let p3 = fo(n3.current).includes(v2.animationName);
        if (v2.target === t4 && p3 && (s4("ANIMATION_END"), !a4.current)) {
          let h2 = t4.style.animationFillMode;
          t4.style.animationFillMode = "forwards", u4 = f4.setTimeout(() => {
            t4.style.animationFillMode === "forwards" && (t4.style.animationFillMode = h2);
          });
        }
      }, "handleAnimationEnd"), m2 = /* @__PURE__ */ o$1((v2) => {
        v2.target === t4 && (i4.current = fo(n3.current));
      }, "handleAnimationStart");
      return t4.addEventListener("animationstart", m2), t4.addEventListener("animationcancel", d4), t4.addEventListener("animationend", d4), () => {
        f4.clearTimeout(u4), t4.removeEventListener("animationstart", m2), t4.removeEventListener("animationcancel", d4), t4.removeEventListener("animationend", d4);
      };
    } else
      s4("ANIMATION_END");
  }, [t4, s4]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l4),
    ref: reactExports.useCallback((u4) => {
      n3.current = u4 ? getComputedStyle(u4) : null, r4(u4);
    }, [])
  };
}
o$1($g, "usePresence");
function fo(e4) {
  return (e4 == null ? void 0 : e4.animationName) || "none";
}
o$1(fo, "getAnimationName");
function jg(e4) {
  var _a2, _b2;
  let t4 = (_a2 = Object.getOwnPropertyDescriptor(e4.props, "ref")) == null ? void 0 : _a2.get, r4 = t4 && "isReactWarning" in t4 && t4.isReactWarning;
  return r4 ? e4.ref : (t4 = (_b2 = Object.getOwnPropertyDescriptor(e4, "ref")) == null ? void 0 : _b2.get, r4 = t4 && "isReactWarning" in t4 && t4.isReactWarning, r4 ? e4.props.ref : e4.props.ref || e4.ref);
}
o$1(jg, "getElementRef");
var Ni = 0;
function Tu() {
  reactExports.useEffect(() => {
    let e4 = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e4[0] ?? Iu()), document.body.insertAdjacentElement("beforeend", e4[1] ?? Iu()), Ni++, () => {
      Ni === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t4) => t4.remove()), Ni--;
    };
  }, []);
}
o$1(Tu, "useFocusGuards");
function Iu() {
  let e4 = document.createElement("span");
  return e4.setAttribute("data-radix-focus-guard", ""), e4.tabIndex = 0, e4.style.outline = "none", e4.style.opacity = "0", e4.style.position = "fixed", e4.style.pointerEvents = "none", e4;
}
o$1(Iu, "createFocusGuard");
var He$1 = /* @__PURE__ */ o$1(function() {
  return He$1 = Object.assign || /* @__PURE__ */ o$1(function(t4) {
    for (var r4, n3 = 1, a4 = arguments.length; n3 < a4; n3++) {
      r4 = arguments[n3];
      for (var i4 in r4) Object.prototype.hasOwnProperty.call(r4, i4) && (t4[i4] = r4[i4]);
    }
    return t4;
  }, "__assign"), He$1.apply(this, arguments);
}, "__assign");
function po(e4, t4) {
  var r4 = {};
  for (var n3 in e4) Object.prototype.hasOwnProperty.call(e4, n3) && t4.indexOf(n3) < 0 && (r4[n3] = e4[n3]);
  if (e4 != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a4 = 0, n3 = Object.getOwnPropertySymbols(e4); a4 < n3.length; a4++)
      t4.indexOf(n3[a4]) < 0 && Object.prototype.propertyIsEnumerable.call(e4, n3[a4]) && (r4[n3[a4]] = e4[n3[a4]]);
  return r4;
}
o$1(po, "__rest");
function Hu(e4, t4, r4) {
  if (r4 || arguments.length === 2) for (var n3 = 0, a4 = t4.length, i4; n3 < a4; n3++)
    (i4 || !(n3 in t4)) && (i4 || (i4 = Array.prototype.slice.call(t4, 0, n3)), i4[n3] = t4[n3]);
  return e4.concat(i4 || Array.prototype.slice.call(t4));
}
o$1(Hu, "__spreadArray");
var Xt = "right-scroll-bar-position", Zt = "width-before-scroll-bar", Fi = "with-scroll-bars-hidden", Di = "--removed-body-scroll-bar-size";
function mo(e4, t4) {
  return typeof e4 == "function" ? e4(t4) : e4 && (e4.current = t4), e4;
}
o$1(mo, "assignRef");
function Pu(e4, t4) {
  var r4 = reactExports.useState(function() {
    return {
      // value
      value: e4,
      // last callback
      callback: t4,
      // "memoized" public interface
      facade: {
        get current() {
          return r4.value;
        },
        set current(n3) {
          var a4 = r4.value;
          a4 !== n3 && (r4.value = n3, r4.callback(n3, a4));
        }
      }
    };
  })[0];
  return r4.callback = t4, r4.facade;
}
o$1(Pu, "useCallbackRef");
var Ug = typeof window < "u" ? reactExports.useLayoutEffect : reactExports.useEffect, ku = /* @__PURE__ */ new WeakMap();
function _i(e4, t4) {
  var r4 = Pu(t4 || null, function(n3) {
    return e4.forEach(function(a4) {
      return mo(a4, n3);
    });
  });
  return Ug(function() {
    var n3 = ku.get(r4);
    if (n3) {
      var a4 = new Set(n3), i4 = new Set(e4), c3 = r4.current;
      a4.forEach(function(l4) {
        i4.has(l4) || mo(l4, null);
      }), i4.forEach(function(l4) {
        a4.has(l4) || mo(l4, c3);
      });
    }
    ku.set(r4, e4);
  }, [e4]), r4;
}
o$1(_i, "useMergeRefs");
function qg(e4) {
  return e4;
}
o$1(qg, "ItoI");
function Gg(e4, t4) {
  t4 === void 0 && (t4 = qg);
  var r4 = [], n3 = false, a4 = {
    read: /* @__PURE__ */ o$1(function() {
      if (n3)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r4.length ? r4[r4.length - 1] : e4;
    }, "read"),
    useMedium: /* @__PURE__ */ o$1(function(i4) {
      var c3 = t4(i4, n3);
      return r4.push(c3), function() {
        r4 = r4.filter(function(l4) {
          return l4 !== c3;
        });
      };
    }, "useMedium"),
    assignSyncMedium: /* @__PURE__ */ o$1(function(i4) {
      for (n3 = true; r4.length; ) {
        var c3 = r4;
        r4 = [], c3.forEach(i4);
      }
      r4 = {
        push: /* @__PURE__ */ o$1(function(l4) {
          return i4(l4);
        }, "push"),
        filter: /* @__PURE__ */ o$1(function() {
          return r4;
        }, "filter")
      };
    }, "assignSyncMedium"),
    assignMedium: /* @__PURE__ */ o$1(function(i4) {
      n3 = true;
      var c3 = [];
      if (r4.length) {
        var l4 = r4;
        r4 = [], l4.forEach(i4), c3 = r4;
      }
      var s4 = /* @__PURE__ */ o$1(function() {
        var f4 = c3;
        c3 = [], f4.forEach(i4);
      }, "executeQueue"), u4 = /* @__PURE__ */ o$1(function() {
        return Promise.resolve().then(s4);
      }, "cycle");
      u4(), r4 = {
        push: /* @__PURE__ */ o$1(function(f4) {
          c3.push(f4), u4();
        }, "push"),
        filter: /* @__PURE__ */ o$1(function(f4) {
          return c3 = c3.filter(f4), r4;
        }, "filter")
      };
    }, "assignMedium")
  };
  return a4;
}
o$1(Gg, "innerCreateMedium");
function Vi(e4) {
  e4 === void 0 && (e4 = {});
  var t4 = Gg(null);
  return t4.options = He$1({ async: true, ssr: false }, e4), t4;
}
o$1(Vi, "createSidecarMedium");
var Bu = /* @__PURE__ */ o$1(function(e4) {
  var t4 = e4.sideCar, r4 = po(e4, ["sideCar"]);
  if (!t4)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n3 = t4.read();
  if (!n3)
    throw new Error("Sidecar medium not found");
  return reactExports.createElement(n3, He$1({}, r4));
}, "SideCar");
Bu.isSideCarExport = true;
function $i(e4, t4) {
  return e4.useMedium(t4), Bu;
}
o$1($i, "exportSidecar");
var go = Vi();
var ji = /* @__PURE__ */ o$1(function() {
}, "nothing"), hn = reactExports.forwardRef(function(e4, t4) {
  var r4 = reactExports.useRef(null), n3 = reactExports.useState({
    onScrollCapture: ji,
    onWheelCapture: ji,
    onTouchMoveCapture: ji
  }), a4 = n3[0], i4 = n3[1], c3 = e4.forwardProps, l4 = e4.children, s4 = e4.className, u4 = e4.removeScrollBar, f4 = e4.enabled, d4 = e4.shards, m2 = e4.sideCar, v2 = e4.noIsolation, y3 = e4.inert, p3 = e4.allowPinchZoom, h2 = e4.as, g2 = h2 === void 0 ? "div" : h2, w2 = e4.gapMode, b3 = po(e4, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), x3 = m2, E4 = _i([r4, t4]), R4 = He$1(He$1({}, b3), a4);
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    f4 && reactExports.createElement(x3, {
      sideCar: go,
      removeScrollBar: u4,
      shards: d4,
      noIsolation: v2,
      inert: y3,
      setCallbacks: i4,
      allowPinchZoom: !!p3,
      lockRef: r4,
      gapMode: w2
    }),
    c3 ? reactExports.cloneElement(reactExports.Children.only(l4), He$1(He$1({}, R4), { ref: E4 })) : reactExports.createElement(g2, He$1({}, R4, { className: s4, ref: E4 }), l4)
  );
});
hn.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
hn.classNames = {
  fullWidth: Zt,
  zeroRight: Xt
};
var Fu = /* @__PURE__ */ o$1(function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
}, "getNonce");
function Yg() {
  if (!document)
    return null;
  var e4 = document.createElement("style");
  e4.type = "text/css";
  var t4 = Fu();
  return t4 && e4.setAttribute("nonce", t4), e4;
}
o$1(Yg, "makeStyleTag");
function Xg(e4, t4) {
  e4.styleSheet ? e4.styleSheet.cssText = t4 : e4.appendChild(document.createTextNode(t4));
}
o$1(Xg, "injectStyles");
function Zg(e4) {
  var t4 = document.head || document.getElementsByTagName("head")[0];
  t4.appendChild(e4);
}
o$1(Zg, "insertStyleTag");
var Wi = /* @__PURE__ */ o$1(function() {
  var e4 = 0, t4 = null;
  return {
    add: /* @__PURE__ */ o$1(function(r4) {
      e4 == 0 && (t4 = Yg()) && (Xg(t4, r4), Zg(t4)), e4++;
    }, "add"),
    remove: /* @__PURE__ */ o$1(function() {
      e4--, !e4 && t4 && (t4.parentNode && t4.parentNode.removeChild(t4), t4 = null);
    }, "remove")
  };
}, "stylesheetSingleton");
var Ui = /* @__PURE__ */ o$1(function() {
  var e4 = Wi();
  return function(t4, r4) {
    reactExports.useEffect(function() {
      return e4.add(t4), function() {
        e4.remove();
      };
    }, [t4 && r4]);
  };
}, "styleHookSingleton");
var gn = /* @__PURE__ */ o$1(function() {
  var e4 = Ui(), t4 = /* @__PURE__ */ o$1(function(r4) {
    var n3 = r4.styles, a4 = r4.dynamic;
    return e4(n3, a4), null;
  }, "Sheet");
  return t4;
}, "styleSingleton");
var Kg = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, qi = /* @__PURE__ */ o$1(function(e4) {
  return parseInt(e4 || "", 10) || 0;
}, "parse"), Jg = /* @__PURE__ */ o$1(function(e4) {
  var t4 = window.getComputedStyle(document.body), r4 = t4[e4 === "padding" ? "paddingLeft" : "marginLeft"], n3 = t4[e4 === "padding" ? "paddingTop" : "marginTop"], a4 = t4[e4 === "padding" ? "paddingRight" : "marginRight"];
  return [qi(r4), qi(n3), qi(a4)];
}, "getOffset"), Gi = /* @__PURE__ */ o$1(function(e4) {
  if (e4 === void 0 && (e4 = "margin"), typeof window > "u")
    return Kg;
  var t4 = Jg(e4), r4 = document.documentElement.clientWidth, n3 = window.innerWidth;
  return {
    left: t4[0],
    top: t4[1],
    right: t4[2],
    gap: Math.max(0, n3 - r4 + t4[2] - t4[0])
  };
}, "getGapWidth");
var Qg = gn(), Lr = "data-scroll-locked", ev = /* @__PURE__ */ o$1(function(e4, t4, r4, n3) {
  var a4 = e4.left, i4 = e4.top, c3 = e4.right, l4 = e4.gap;
  return r4 === void 0 && (r4 = "margin"), `
  .`.concat(Fi, ` {
   overflow: hidden `).concat(n3, `;
   padding-right: `).concat(l4, "px ").concat(n3, `;
  }
  body[`).concat(Lr, `] {
    overflow: hidden `).concat(n3, `;
    overscroll-behavior: contain;
    `).concat([
    t4 && "position: relative ".concat(n3, ";"),
    r4 === "margin" && `
    padding-left: `.concat(a4, `px;
    padding-top: `).concat(i4, `px;
    padding-right: `).concat(c3, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l4, "px ").concat(n3, `;
    `),
    r4 === "padding" && "padding-right: ".concat(l4, "px ").concat(n3, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Xt, ` {
    right: `).concat(l4, "px ").concat(n3, `;
  }
  
  .`).concat(Zt, ` {
    margin-right: `).concat(l4, "px ").concat(n3, `;
  }
  
  .`).concat(Xt, " .").concat(Xt, ` {
    right: 0 `).concat(n3, `;
  }
  
  .`).concat(Zt, " .").concat(Zt, ` {
    margin-right: 0 `).concat(n3, `;
  }
  
  body[`).concat(Lr, `] {
    `).concat(Di, ": ").concat(l4, `px;
  }
`);
}, "getStyles"), _u = /* @__PURE__ */ o$1(function() {
  var e4 = parseInt(document.body.getAttribute(Lr) || "0", 10);
  return isFinite(e4) ? e4 : 0;
}, "getCurrentUseCounter"), tv = /* @__PURE__ */ o$1(function() {
  reactExports.useEffect(function() {
    return document.body.setAttribute(Lr, (_u() + 1).toString()), function() {
      var e4 = _u() - 1;
      e4 <= 0 ? document.body.removeAttribute(Lr) : document.body.setAttribute(Lr, e4.toString());
    };
  }, []);
}, "useLockAttribute"), Yi = /* @__PURE__ */ o$1(function(e4) {
  var t4 = e4.noRelative, r4 = e4.noImportant, n3 = e4.gapMode, a4 = n3 === void 0 ? "margin" : n3;
  tv();
  var i4 = reactExports.useMemo(function() {
    return Gi(a4);
  }, [a4]);
  return reactExports.createElement(Qg, { styles: ev(i4, !t4, a4, r4 ? "" : "!important") });
}, "RemoveScrollBar");
var Xi = false;
if (typeof window < "u")
  try {
    vn = Object.defineProperty({}, "passive", {
      get: /* @__PURE__ */ o$1(function() {
        return Xi = true, true;
      }, "get")
    }), window.addEventListener("test", vn, vn), window.removeEventListener("test", vn, vn);
  } catch {
    Xi = false;
  }
var vn, Kt = Xi ? { passive: false } : false;
var rv = /* @__PURE__ */ o$1(function(e4) {
  return e4.tagName === "TEXTAREA";
}, "alwaysContainsScroll"), Vu = /* @__PURE__ */ o$1(function(e4, t4) {
  if (!(e4 instanceof Element))
    return false;
  var r4 = window.getComputedStyle(e4);
  return (
    // not-not-scrollable
    r4[t4] !== "hidden" && // contains scroll inside self
    !(r4.overflowY === r4.overflowX && !rv(e4) && r4[t4] === "visible")
  );
}, "elementCanBeScrolled"), nv = /* @__PURE__ */ o$1(function(e4) {
  return Vu(e4, "overflowY");
}, "elementCouldBeVScrolled"), ov = /* @__PURE__ */ o$1(function(e4) {
  return Vu(e4, "overflowX");
}, "elementCouldBeHScrolled"), Zi = /* @__PURE__ */ o$1(function(e4, t4) {
  var r4 = t4.ownerDocument, n3 = t4;
  do {
    typeof ShadowRoot < "u" && n3 instanceof ShadowRoot && (n3 = n3.host);
    var a4 = $u(e4, n3);
    if (a4) {
      var i4 = ju(e4, n3), c3 = i4[1], l4 = i4[2];
      if (c3 > l4)
        return true;
    }
    n3 = n3.parentNode;
  } while (n3 && n3 !== r4.body);
  return false;
}, "locationCouldBeScrolled"), av = /* @__PURE__ */ o$1(function(e4) {
  var t4 = e4.scrollTop, r4 = e4.scrollHeight, n3 = e4.clientHeight;
  return [
    t4,
    r4,
    n3
  ];
}, "getVScrollVariables"), iv = /* @__PURE__ */ o$1(function(e4) {
  var t4 = e4.scrollLeft, r4 = e4.scrollWidth, n3 = e4.clientWidth;
  return [
    t4,
    r4,
    n3
  ];
}, "getHScrollVariables"), $u = /* @__PURE__ */ o$1(function(e4, t4) {
  return e4 === "v" ? nv(t4) : ov(t4);
}, "elementCouldBeScrolled"), ju = /* @__PURE__ */ o$1(function(e4, t4) {
  return e4 === "v" ? av(t4) : iv(t4);
}, "getScrollVariables"), lv = /* @__PURE__ */ o$1(function(e4, t4) {
  return e4 === "h" && t4 === "rtl" ? -1 : 1;
}, "getDirectionFactor"), Wu = /* @__PURE__ */ o$1(function(e4, t4, r4, n3, a4) {
  var i4 = lv(e4, window.getComputedStyle(t4).direction), c3 = i4 * n3, l4 = r4.target, s4 = t4.contains(l4), u4 = false, f4 = c3 > 0, d4 = 0, m2 = 0;
  do {
    var v2 = ju(e4, l4), y3 = v2[0], p3 = v2[1], h2 = v2[2], g2 = p3 - h2 - i4 * y3;
    (y3 || g2) && $u(e4, l4) && (d4 += g2, m2 += y3), l4 instanceof ShadowRoot ? l4 = l4.host : l4 = l4.parentNode;
  } while (
    // portaled content
    !s4 && l4 !== document.body || // self content
    s4 && (t4.contains(l4) || t4 === l4)
  );
  return (f4 && (a4 && Math.abs(d4) < 1 || !a4 && c3 > d4) || !f4 && (a4 && Math.abs(m2) < 1 || !a4 && -c3 > m2)) && (u4 = true), u4;
}, "handleScroll");
var vo = /* @__PURE__ */ o$1(function(e4) {
  return "changedTouches" in e4 ? [e4.changedTouches[0].clientX, e4.changedTouches[0].clientY] : [0, 0];
}, "getTouchXY"), Uu = /* @__PURE__ */ o$1(function(e4) {
  return [e4.deltaX, e4.deltaY];
}, "getDeltaXY"), qu = /* @__PURE__ */ o$1(function(e4) {
  return e4 && "current" in e4 ? e4.current : e4;
}, "extractRef"), cv = /* @__PURE__ */ o$1(function(e4, t4) {
  return e4[0] === t4[0] && e4[1] === t4[1];
}, "deltaCompare"), sv = /* @__PURE__ */ o$1(function(e4) {
  return `
  .block-interactivity-`.concat(e4, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e4, ` {pointer-events: all;}
`);
}, "generateStyle"), uv = 0, zr = [];
function Gu(e4) {
  var t4 = reactExports.useRef([]), r4 = reactExports.useRef([0, 0]), n3 = reactExports.useRef(), a4 = reactExports.useState(uv++)[0], i4 = reactExports.useState(gn)[0], c3 = reactExports.useRef(e4);
  reactExports.useEffect(function() {
    c3.current = e4;
  }, [e4]), reactExports.useEffect(function() {
    if (e4.inert) {
      document.body.classList.add("block-interactivity-".concat(a4));
      var p3 = Hu([e4.lockRef.current], (e4.shards || []).map(qu), true).filter(Boolean);
      return p3.forEach(function(h2) {
        return h2.classList.add("allow-interactivity-".concat(a4));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a4)), p3.forEach(function(h2) {
          return h2.classList.remove("allow-interactivity-".concat(a4));
        });
      };
    }
  }, [e4.inert, e4.lockRef.current, e4.shards]);
  var l4 = reactExports.useCallback(function(p3, h2) {
    if ("touches" in p3 && p3.touches.length === 2 || p3.type === "wheel" && p3.ctrlKey)
      return !c3.current.allowPinchZoom;
    var g2 = vo(p3), w2 = r4.current, b3 = "deltaX" in p3 ? p3.deltaX : w2[0] - g2[0], x3 = "deltaY" in p3 ? p3.deltaY : w2[1] - g2[1], E4, R4 = p3.target, S4 = Math.abs(b3) > Math.abs(x3) ? "h" : "v";
    if ("touches" in p3 && S4 === "h" && R4.type === "range")
      return false;
    var A4 = Zi(S4, R4);
    if (!A4)
      return true;
    if (A4 ? E4 = S4 : (E4 = S4 === "v" ? "h" : "v", A4 = Zi(S4, R4)), !A4)
      return false;
    if (!n3.current && "changedTouches" in p3 && (b3 || x3) && (n3.current = E4), !E4)
      return true;
    var M4 = n3.current || E4;
    return Wu(M4, h2, p3, M4 === "h" ? b3 : x3, true);
  }, []), s4 = reactExports.useCallback(function(p3) {
    var h2 = p3;
    if (!(!zr.length || zr[zr.length - 1] !== i4)) {
      var g2 = "deltaY" in h2 ? Uu(h2) : vo(h2), w2 = t4.current.filter(function(E4) {
        return E4.name === h2.type && (E4.target === h2.target || h2.target === E4.shadowParent) && cv(E4.delta, g2);
      })[0];
      if (w2 && w2.should) {
        h2.cancelable && h2.preventDefault();
        return;
      }
      if (!w2) {
        var b3 = (c3.current.shards || []).map(qu).filter(Boolean).filter(function(E4) {
          return E4.contains(h2.target);
        }), x3 = b3.length > 0 ? l4(h2, b3[0]) : !c3.current.noIsolation;
        x3 && h2.cancelable && h2.preventDefault();
      }
    }
  }, []), u4 = reactExports.useCallback(function(p3, h2, g2, w2) {
    var b3 = { name: p3, delta: h2, target: g2, should: w2, shadowParent: fv(g2) };
    t4.current.push(b3), setTimeout(function() {
      t4.current = t4.current.filter(function(x3) {
        return x3 !== b3;
      });
    }, 1);
  }, []), f4 = reactExports.useCallback(function(p3) {
    r4.current = vo(p3), n3.current = void 0;
  }, []), d4 = reactExports.useCallback(function(p3) {
    u4(p3.type, Uu(p3), p3.target, l4(p3, e4.lockRef.current));
  }, []), m2 = reactExports.useCallback(function(p3) {
    u4(p3.type, vo(p3), p3.target, l4(p3, e4.lockRef.current));
  }, []);
  reactExports.useEffect(function() {
    return zr.push(i4), e4.setCallbacks({
      onScrollCapture: d4,
      onWheelCapture: d4,
      onTouchMoveCapture: m2
    }), document.addEventListener("wheel", s4, Kt), document.addEventListener("touchmove", s4, Kt), document.addEventListener(
      "touchstart",
      f4,
      Kt
    ), function() {
      zr = zr.filter(function(p3) {
        return p3 !== i4;
      }), document.removeEventListener("wheel", s4, Kt), document.removeEventListener("touchmove", s4, Kt), document.removeEventListener("touchstart", f4, Kt);
    };
  }, []);
  var v2 = e4.removeScrollBar, y3 = e4.inert;
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    y3 ? reactExports.createElement(i4, { styles: sv(a4) }) : null,
    v2 ? reactExports.createElement(Yi, { gapMode: e4.gapMode }) : null
  );
}
o$1(Gu, "RemoveScrollSideCar");
function fv(e4) {
  for (var t4 = null; e4 !== null; )
    e4 instanceof ShadowRoot && (t4 = e4.host, e4 = e4.host), e4 = e4.parentNode;
  return t4;
}
o$1(fv, "getOutermostShadowParent");
var Yu = $i(go, Gu);
var Xu = reactExports.forwardRef(function(e4, t4) {
  return reactExports.createElement(hn, He$1({}, e4, { ref: t4, sideCar: Yu }));
});
Xu.classNames = hn.classNames;
var Ki = Xu;
var dv = /* @__PURE__ */ o$1(function(e4) {
  if (typeof document > "u")
    return null;
  var t4 = Array.isArray(e4) ? e4[0] : e4;
  return t4.ownerDocument.body;
}, "getDefaultParent"), Tr = /* @__PURE__ */ new WeakMap(), bo = /* @__PURE__ */ new WeakMap(), yo = {}, Ji = 0, Zu = /* @__PURE__ */ o$1(function(e4) {
  return e4 && (e4.host || Zu(e4.parentNode));
}, "unwrapHost"), pv = /* @__PURE__ */ o$1(function(e4, t4) {
  return t4.map(function(r4) {
    if (e4.contains(r4))
      return r4;
    var n3 = Zu(r4);
    return n3 && e4.contains(n3) ? n3 : (console.error("aria-hidden", r4, "in not contained inside", e4, ". Doing nothing"), null);
  }).filter(function(r4) {
    return !!r4;
  });
}, "correctTargets"), mv = /* @__PURE__ */ o$1(function(e4, t4, r4, n3) {
  var a4 = pv(t4, Array.isArray(e4) ? e4 : [e4]);
  yo[r4] || (yo[r4] = /* @__PURE__ */ new WeakMap());
  var i4 = yo[r4], c3 = [], l4 = /* @__PURE__ */ new Set(), s4 = new Set(a4), u4 = /* @__PURE__ */ o$1(function(d4) {
    !d4 || l4.has(d4) || (l4.add(d4), u4(d4.parentNode));
  }, "keep");
  a4.forEach(u4);
  var f4 = /* @__PURE__ */ o$1(function(d4) {
    !d4 || s4.has(d4) || Array.prototype.forEach.call(d4.children, function(m2) {
      if (l4.has(m2))
        f4(m2);
      else
        try {
          var v2 = m2.getAttribute(n3), y3 = v2 !== null && v2 !== "false", p3 = (Tr.get(m2) || 0) + 1, h2 = (i4.get(m2) || 0) + 1;
          Tr.set(m2, p3), i4.set(m2, h2), c3.push(m2), p3 === 1 && y3 && bo.set(m2, true), h2 === 1 && m2.setAttribute(r4, "true"), y3 || m2.setAttribute(n3, "true");
        } catch (g2) {
          console.error("aria-hidden: cannot operate on ", m2, g2);
        }
    });
  }, "deep");
  return f4(t4), l4.clear(), Ji++, function() {
    c3.forEach(function(d4) {
      var m2 = Tr.get(d4) - 1, v2 = i4.get(d4) - 1;
      Tr.set(d4, m2), i4.set(d4, v2), m2 || (bo.has(d4) || d4.removeAttribute(n3), bo.delete(d4)), v2 || d4.removeAttribute(r4);
    }), Ji--, Ji || (Tr = /* @__PURE__ */ new WeakMap(), Tr = /* @__PURE__ */ new WeakMap(), bo = /* @__PURE__ */ new WeakMap(), yo = {});
  };
}, "applyAttributeToOthers"), Ku = /* @__PURE__ */ o$1(function(e4, t4, r4) {
  r4 === void 0 && (r4 = "data-aria-hidden");
  var n3 = Array.from(Array.isArray(e4) ? e4 : [e4]), a4 = t4 || dv(e4);
  return a4 ? (n3.push.apply(n3, Array.from(a4.querySelectorAll("[aria-live]"))), mv(n3, a4, r4, "aria-hidden")) : function() {
    return null;
  };
}, "hideOthers");
// @__NO_SIDE_EFFECTS__
function Qu(e4) {
  let t4 = /* @__PURE__ */ hv(e4), r4 = reactExports.forwardRef((n3, a4) => {
    let { children: i4, ...c3 } = n3, l4 = reactExports.Children.toArray(i4), s4 = l4.find(vv);
    if (s4) {
      let u4 = s4.props.children, f4 = l4.map((d4) => d4 === s4 ? reactExports.Children.count(u4) > 1 ? reactExports.Children.only(null) : reactExports.isValidElement(u4) ? u4.props.children : null : d4);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(t4, { ...c3, ref: a4, children: reactExports.isValidElement(u4) ? reactExports.cloneElement(u4, void 0, f4) : null });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(t4, { ...c3, ref: a4, children: i4 });
  });
  return r4.displayName = `${e4}.Slot`, r4;
}
o$1(Qu, "createSlot");
// @__NO_SIDE_EFFECTS__
function hv(e4) {
  let t4 = reactExports.forwardRef((r4, n3) => {
    let { children: a4, ...i4 } = r4;
    if (reactExports.isValidElement(a4)) {
      let c3 = bv(a4), l4 = wv(i4, a4.props);
      return a4.type !== reactExports.Fragment && (l4.ref = n3 ? Yt(n3, c3) : c3), reactExports.cloneElement(a4, l4);
    }
    return reactExports.Children.count(a4) > 1 ? reactExports.Children.only(null) : null;
  });
  return t4.displayName = `${e4}.SlotClone`, t4;
}
o$1(hv, "createSlotClone");
var gv = Symbol("radix.slottable");
function vv(e4) {
  return reactExports.isValidElement(e4) && typeof e4.type == "function" && "__radixId" in e4.type && e4.type.__radixId === gv;
}
o$1(vv, "isSlottable");
function wv(e4, t4) {
  let r4 = { ...t4 };
  for (let n3 in t4) {
    let a4 = e4[n3], i4 = t4[n3];
    /^on[A-Z]/.test(n3) ? a4 && i4 ? r4[n3] = (...l4) => {
      i4(...l4), a4(...l4);
    } : a4 && (r4[n3] = a4) : n3 === "style" ? r4[n3] = { ...a4, ...i4 } : n3 === "className" && (r4[n3] = [a4, i4].filter(Boolean).join(" "));
  }
  return { ...e4, ...r4 };
}
o$1(wv, "mergeProps");
function bv(e4) {
  var _a2, _b2;
  let t4 = (_a2 = Object.getOwnPropertyDescriptor(e4.props, "ref")) == null ? void 0 : _a2.get, r4 = t4 && "isReactWarning" in t4 && t4.isReactWarning;
  return r4 ? e4.ref : (t4 = (_b2 = Object.getOwnPropertyDescriptor(e4, "ref")) == null ? void 0 : _b2.get, r4 = t4 && "isReactWarning" in t4 && t4.isReactWarning, r4 ? e4.props.ref : e4.props.ref || e4.ref);
}
o$1(bv, "getElementRef");
var xo = "Dialog", [rf, yv] = cu(xo), [Rv, Je] = rf(xo), Qi = /* @__PURE__ */ o$1((e4) => {
  let {
    __scopeDialog: t4,
    children: r4,
    open: n3,
    defaultOpen: a4,
    onOpenChange: i4,
    modal: c3 = true
  } = e4, l4 = reactExports.useRef(null), s4 = reactExports.useRef(null), [u4, f4] = uu({
    prop: n3,
    defaultProp: a4 ?? false,
    onChange: i4,
    caller: xo
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Rv,
    {
      scope: t4,
      triggerRef: l4,
      contentRef: s4,
      contentId: lo(),
      titleId: lo(),
      descriptionId: lo(),
      open: u4,
      onOpenChange: f4,
      onOpenToggle: reactExports.useCallback(() => f4((d4) => !d4), [f4]),
      modal: c3,
      children: r4
    }
  );
}, "Dialog");
Qi.displayName = xo;
var nf = "DialogTrigger", el = reactExports.forwardRef(
  (e4, t4) => {
    let { __scopeDialog: r4, ...n3 } = e4, a4 = Je(nf, r4), i4 = Ke(t4, a4.triggerRef);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Oe$1.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": a4.open,
        "aria-controls": a4.contentId,
        "data-state": sl(a4.open),
        ...n3,
        ref: i4,
        onClick: Mr(e4.onClick, a4.onOpenToggle)
      }
    );
  }
);
el.displayName = nf;
var tl = "DialogPortal", [xv, of] = rf(tl, {
  forceMount: void 0
}), rl = /* @__PURE__ */ o$1((e4) => {
  let { __scopeDialog: t4, forceMount: r4, children: n3, container: a4 } = e4, i4 = Je(tl, t4);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(xv, { scope: t4, forceMount: r4, children: reactExports.Children.map(n3, (c3) => /* @__PURE__ */ jsxRuntimeExports.jsx(mn, {
    present: r4 || i4.open,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bi, { asChild: true, container: a4, children: c3 })
  })) });
}, "DialogPortal");
rl.displayName = tl;
var Ro = "DialogOverlay", nl = reactExports.forwardRef(
  (e4, t4) => {
    let r4 = of(Ro, e4.__scopeDialog), { forceMount: n3 = r4.forceMount, ...a4 } = e4, i4 = Je(Ro, e4.__scopeDialog);
    return i4.modal ? /* @__PURE__ */ jsxRuntimeExports.jsx(mn, { present: n3 || i4.open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sv, { ...a4, ref: t4 }) }) : null;
  }
);
nl.displayName = Ro;
var Ev = /* @__PURE__ */ Qu("DialogOverlay.RemoveScroll"), Sv = reactExports.forwardRef(
  (e4, t4) => {
    let { __scopeDialog: r4, ...n3 } = e4, a4 = Je(Ro, r4);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ jsxRuntimeExports.jsx(Ki, { as: Ev, allowPinchZoom: true, shards: [a4.contentRef], children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Oe$1.div,
        {
          "data-state": sl(a4.open),
          ...n3,
          ref: t4,
          style: { pointerEvents: "auto", ...n3.style }
        }
      ) })
    );
  }
), Jt = "DialogContent", ol = reactExports.forwardRef(
  (e4, t4) => {
    let r4 = of(Jt, e4.__scopeDialog), { forceMount: n3 = r4.forceMount, ...a4 } = e4, i4 = Je(Jt, e4.__scopeDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(mn, { present: n3 || i4.open, children: i4.modal ? /* @__PURE__ */ jsxRuntimeExports.jsx(Cv, { ...a4, ref: t4 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      Mv,
      { ...a4, ref: t4 }
    ) });
  }
);
ol.displayName = Jt;
var Cv = reactExports.forwardRef(
  (e4, t4) => {
    let r4 = Je(Jt, e4.__scopeDialog), n3 = reactExports.useRef(null), a4 = Ke(t4, r4.contentRef, n3);
    return reactExports.useEffect(() => {
      let i4 = n3.current;
      if (i4) return Ku(i4);
    }, []), /* @__PURE__ */ jsxRuntimeExports.jsx(
      af,
      {
        ...e4,
        ref: a4,
        trapFocus: r4.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: Mr(e4.onCloseAutoFocus, (i4) => {
          var _a2;
          i4.preventDefault(), (_a2 = r4.triggerRef.current) == null ? void 0 : _a2.focus();
        }),
        onPointerDownOutside: Mr(e4.onPointerDownOutside, (i4) => {
          let c3 = i4.detail.originalEvent, l4 = c3.button === 0 && c3.ctrlKey === true;
          (c3.button === 2 || l4) && i4.preventDefault();
        }),
        onFocusOutside: Mr(
          e4.onFocusOutside,
          (i4) => i4.preventDefault()
        )
      }
    );
  }
), Mv = reactExports.forwardRef(
  (e4, t4) => {
    let r4 = Je(Jt, e4.__scopeDialog), n3 = reactExports.useRef(false), a4 = reactExports.useRef(false);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      af,
      {
        ...e4,
        ref: t4,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: /* @__PURE__ */ o$1((i4) => {
          var _a2, _b2;
          (_a2 = e4.onCloseAutoFocus) == null ? void 0 : _a2.call(e4, i4), i4.defaultPrevented || (n3.current || ((_b2 = r4.triggerRef.current) == null ? void 0 : _b2.focus()), i4.preventDefault()), n3.current = false, a4.current = false;
        }, "onCloseAutoFocus"),
        onInteractOutside: /* @__PURE__ */ o$1((i4) => {
          var _a2, _b2;
          (_a2 = e4.onInteractOutside) == null ? void 0 : _a2.call(e4, i4), i4.defaultPrevented || (n3.current = true, i4.detail.originalEvent.type === "pointerdown" && (a4.current = true));
          let c3 = i4.target;
          ((_b2 = r4.triggerRef.current) == null ? void 0 : _b2.contains(c3)) && i4.preventDefault(), i4.detail.originalEvent.type === "focusin" && a4.current && i4.preventDefault();
        }, "onInteractOutside")
      }
    );
  }
), af = reactExports.forwardRef(
  (e4, t4) => {
    let { __scopeDialog: r4, trapFocus: n3, onOpenAutoFocus: a4, onCloseAutoFocus: i4, ...c3 } = e4, l4 = Je(Jt, r4), s4 = reactExports.useRef(null), u4 = Ke(t4, s4);
    return Tu(), /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Oi,
        {
          asChild: true,
          loop: true,
          trapped: n3,
          onMountAutoFocus: a4,
          onUnmountAutoFocus: i4,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Hi,
            {
              role: "dialog",
              id: l4.contentId,
              "aria-describedby": l4.descriptionId,
              "aria-labelledby": l4.titleId,
              "data-state": sl(l4.open),
              ...c3,
              ref: u4,
              onDismiss: /* @__PURE__ */ o$1(() => l4.onOpenChange(false), "onDismiss")
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Lv, { titleId: l4.titleId }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(zv, { contentRef: s4, descriptionId: l4.descriptionId })
      ] })
    ] });
  }
), al = "DialogTitle", il = reactExports.forwardRef(
  (e4, t4) => {
    let { __scopeDialog: r4, ...n3 } = e4, a4 = Je(al, r4);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Oe$1.h2, { id: a4.titleId, ...n3, ref: t4 });
  }
);
il.displayName = al;
var lf = "DialogDescription", ll = reactExports.forwardRef(
  (e4, t4) => {
    let { __scopeDialog: r4, ...n3 } = e4, a4 = Je(lf, r4);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Oe$1.p, { id: a4.descriptionId, ...n3, ref: t4 });
  }
);
ll.displayName = lf;
var cf = "DialogClose", cl = reactExports.forwardRef(
  (e4, t4) => {
    let { __scopeDialog: r4, ...n3 } = e4, a4 = Je(cf, r4);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Oe$1.button,
      {
        type: "button",
        ...n3,
        ref: t4,
        onClick: Mr(e4.onClick, () => a4.onOpenChange(false))
      }
    );
  }
);
cl.displayName = cf;
function sl(e4) {
  return e4 ? "open" : "closed";
}
o$1(sl, "getState");
var sf = "DialogTitleWarning", [Av, uf] = lu(sf, {
  contentName: Jt,
  titleName: al,
  docsSlug: "dialog"
}), Lv = /* @__PURE__ */ o$1(({ titleId: e4 }) => {
  let t4 = uf(sf), r4 = `\`${t4.contentName}\` requires a \`${t4.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t4.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t4.docsSlug}`;
  return reactExports.useEffect(() => {
    e4 && (document.getElementById(e4) || console.error(r4));
  }, [r4, e4]), null;
}, "TitleWarning"), Iv = "DialogDescriptionWarning", zv = /* @__PURE__ */ o$1(({ contentRef: e4, descriptionId: t4 }) => {
  let n3 = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${uf(Iv).contentName}}.`;
  return reactExports.useEffect(() => {
    var _a2;
    let a4 = (_a2 = e4.current) == null ? void 0 : _a2.getAttribute("aria-describedby");
    t4 && a4 && (document.getElementById(t4) || console.warn(n3));
  }, [n3, e4, t4]), null;
}, "DescriptionWarning"), ul = Qi, Tv = el, fl = rl, dl = nl, pl = ol, ml = il, hl = ll, gl = cl;
var yl = {};
Qr(yl, {
  Actions: () => Qv,
  CloseButton: () => mf,
  Col: () => gf,
  Container: () => bl,
  Content: () => Xv,
  Description: () => Jv,
  Error: () => e3,
  ErrorWrapper: () => vf,
  Header: () => Zv,
  Overlay: () => wl,
  Row: () => hf,
  Title: () => Kv
});
// @__NO_SIDE_EFFECTS__
function Hv(e4) {
  let t4 = /* @__PURE__ */ Pv(e4), r4 = reactExports.forwardRef((n3, a4) => {
    let { children: i4, ...c3 } = n3, l4 = reactExports.Children.toArray(i4), s4 = l4.find(Ov);
    if (s4) {
      let u4 = s4.props.children, f4 = l4.map((d4) => d4 === s4 ? reactExports.Children.count(u4) > 1 ? reactExports.Children.only(null) : reactExports.isValidElement(u4) ? u4.props.children : null : d4);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(t4, { ...c3, ref: a4, children: reactExports.isValidElement(u4) ? reactExports.cloneElement(u4, void 0, f4) : null });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(t4, { ...c3, ref: a4, children: i4 });
  });
  return r4.displayName = `${e4}.Slot`, r4;
}
o$1(Hv, "createSlot");
var df = /* @__PURE__ */ Hv("Slot");
// @__NO_SIDE_EFFECTS__
function Pv(e4) {
  let t4 = reactExports.forwardRef((r4, n3) => {
    let { children: a4, ...i4 } = r4;
    if (reactExports.isValidElement(a4)) {
      let c3 = Nv(a4), l4 = Bv(i4, a4.props);
      return a4.type !== reactExports.Fragment && (l4.ref = n3 ? Yt(n3, c3) : c3), reactExports.cloneElement(a4, l4);
    }
    return reactExports.Children.count(a4) > 1 ? reactExports.Children.only(null) : null;
  });
  return t4.displayName = `${e4}.SlotClone`, t4;
}
o$1(Pv, "createSlotClone");
var kv = Symbol("radix.slottable");
function Ov(e4) {
  return reactExports.isValidElement(e4) && typeof e4.type == "function" && "__radixId" in e4.type && e4.type.__radixId === kv;
}
o$1(Ov, "isSlottable");
function Bv(e4, t4) {
  let r4 = { ...t4 };
  for (let n3 in t4) {
    let a4 = e4[n3], i4 = t4[n3];
    /^on[A-Z]/.test(n3) ? a4 && i4 ? r4[n3] = (...l4) => {
      let s4 = i4(...l4);
      return a4(...l4), s4;
    } : a4 && (r4[n3] = a4) : n3 === "style" ? r4[n3] = { ...a4, ...i4 } : n3 === "className" && (r4[n3] = [a4, i4].filter(Boolean).join(" "));
  }
  return { ...e4, ...r4 };
}
o$1(Bv, "mergeProps");
function Nv(e4) {
  var _a2, _b2;
  let t4 = (_a2 = Object.getOwnPropertyDescriptor(e4.props, "ref")) == null ? void 0 : _a2.get, r4 = t4 && "isReactWarning" in t4 && t4.isReactWarning;
  return r4 ? e4.ref : (t4 = (_b2 = Object.getOwnPropertyDescriptor(e4, "ref")) == null ? void 0 : _b2.get, r4 = t4 && "isReactWarning" in t4 && t4.isReactWarning, r4 ? e4.props.ref : e4.props.ref || e4.ref);
}
o$1(Nv, "getElementRef");
var Hr = reactExports.forwardRef(
  ({
    asChild: e$1 = false,
    animation: t4 = "none",
    size: r4 = "small",
    variant: n3 = "outline",
    padding: a4 = "medium",
    disabled: i4 = false,
    active: c3 = false,
    onClick: l4,
    ...s4
  }, u4) => {
    let f4 = "button";
    e$1 && (f4 = df);
    let [d4, m2] = reactExports.useState(false), v2 = /* @__PURE__ */ o$1((y3) => {
      l4 && l4(y3), t4 !== "none" && m2(true);
    }, "handleClick");
    return reactExports.useEffect(() => {
      let y3 = setTimeout(() => {
        d4 && m2(false);
      }, 1e3);
      return () => clearTimeout(y3);
    }, [d4]), /* @__PURE__ */ e.createElement(
      Wv,
      {
        as: f4,
        ref: u4,
        variant: n3,
        size: r4,
        padding: a4,
        disabled: i4,
        active: c3,
        animating: d4,
        animation: t4,
        onClick: v2,
        ...s4
      }
    );
  }
);
Hr.displayName = "Button";
var Wv = xr$3("button", {
  shouldForwardProp: /* @__PURE__ */ o$1((e4) => yr$3(e4), "shouldForwardProp")
})(({ theme: e4, variant: t4, size: r4, disabled: n3, active: a4, animating: i4, animation: c3 = "none", padding: l4 }) => ({
  border: 0,
  cursor: n3 ? "not-allowed" : "pointer",
  display: "inline-flex",
  gap: "6px",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  padding: l4 === "none" ? 0 : l4 === "small" && r4 === "small" ? "0 7px" : l4 === "small" && r4 === "medium" ? "0 9px" : r4 === "small" ? "0 10px" : r4 === "medium" ? "0 12px" : 0,
  height: r4 === "small" ? "28px" : "32px",
  position: "relative",
  textAlign: "center",
  textDecoration: "none",
  transitionProperty: "background, box-shadow",
  transitionDuration: "150ms",
  transitionTimingFunction: "ease-out",
  verticalAlign: "top",
  whiteSpace: "nowrap",
  userSelect: "none",
  opacity: n3 ? 0.5 : 1,
  margin: 0,
  fontSize: `${e4.typography.size.s1}px`,
  fontWeight: e4.typography.weight.bold,
  lineHeight: "1",
  background: t4 === "solid" ? e4.color.secondary : t4 === "outline" ? e4.button.background : t4 === "ghost" && a4 ? e4.background.hoverable : "transparent",
  ...t4 === "ghost" ? {
    // This is a hack to apply bar styles to the button as soon as it is part of a bar
    // It is a temporary solution until we have implemented Theming 2.0.
    ".sb-bar &": {
      background: a4 ? ye$1(0.9, e4.barTextColor) : "transparent",
      color: a4 ? e4.barSelectedColor : e4.barTextColor,
      "&:hover": {
        color: e4.barHoverColor,
        background: ye$1(0.86, e4.barHoverColor)
      },
      "&:active": {
        color: e4.barSelectedColor,
        background: ye$1(0.9, e4.barSelectedColor)
      },
      "&:focus": {
        boxShadow: `${_t(e4.barHoverColor, 1)} 0 0 0 1px inset`,
        outline: "none"
      }
    }
  } : {},
  color: t4 === "solid" ? e4.color.lightest : t4 === "outline" ? e4.input.color : t4 === "ghost" && a4 ? e4.color.secondary : t4 === "ghost" ? e4.color.mediumdark : e4.input.color,
  boxShadow: t4 === "outline" ? `${e4.button.border} 0 0 0 1px inset` : "none",
  borderRadius: e4.input.borderRadius,
  // Making sure that the button never shrinks below its minimum size
  flexShrink: 0,
  "&:hover": {
    color: t4 === "ghost" ? e4.color.secondary : void 0,
    background: (() => {
      let s4 = e4.color.secondary;
      return t4 === "solid" && (s4 = e4.color.secondary), t4 === "outline" && (s4 = e4.button.background), t4 === "ghost" ? ye$1(0.86, e4.color.secondary) : e4.base === "light" ? yt(0.02, s4) : aa(0.03, s4);
    })()
  },
  "&:active": {
    color: t4 === "ghost" ? e4.color.secondary : void 0,
    background: (() => {
      let s4 = e4.color.secondary;
      return t4 === "solid" && (s4 = e4.color.secondary), t4 === "outline" && (s4 = e4.button.background), t4 === "ghost" ? e4.background.hoverable : e4.base === "light" ? yt(0.02, s4) : aa(0.03, s4);
    })()
  },
  "&:focus": {
    boxShadow: `${_t(e4.color.secondary, 1)} 0 0 0 1px inset`,
    outline: "none"
  },
  "> svg": {
    animation: i4 && c3 !== "none" ? `${e4.animation[c3]} 1000ms ease-out` : ""
  }
}));
var So = reactExports.forwardRef(
  ({ padding: e$1 = "small", variant: t4 = "ghost", ...r4 }, n3) => /* @__PURE__ */ e.createElement(Hr, { padding: e$1, variant: t4, ref: n3, ...r4 })
);
So.displayName = "IconButton";
var pf = Ee$3({
  from: { opacity: 0 },
  to: { opacity: 1 }
}), Gv = Ee$3({
  from: { maxHeight: 0 },
  to: {}
}), Yv = Ee$3({
  from: {
    opacity: 0,
    transform: "translate(-50%, -50%) scale(0.9)"
  },
  to: {
    opacity: 1,
    transform: "translate(-50%, -50%) scale(1)"
  }
}), wl = xr$3.div({
  backdropFilter: "blur(24px)",
  position: "fixed",
  inset: 0,
  width: "100%",
  height: "100%",
  zIndex: 10,
  animation: `${pf} 200ms`
}), bl = xr$3.div(
  ({ theme: e4, width: t4, height: r4 }) => ({
    backgroundColor: e4.background.bar,
    borderRadius: 6,
    boxShadow: "0px 4px 67px 0px #00000040",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: t4 ?? 740,
    height: r4 ?? "auto",
    maxWidth: "calc(100% - 40px)",
    maxHeight: "85vh",
    overflow: "auto",
    zIndex: 11,
    animation: `${Yv} 200ms`,
    "&:focus-visible": {
      outline: "none"
    }
  })
), mf = /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(gl, { asChild: true }, /* @__PURE__ */ e.createElement(So, { "aria-label": "Close", ...e$1 }, /* @__PURE__ */ e.createElement(Y5, null))), "CloseButton"), Xv = xr$3.div({
  display: "flex",
  flexDirection: "column",
  margin: 16,
  gap: 16
}), hf = xr$3.div({
  display: "flex",
  justifyContent: "space-between",
  gap: 16
}), gf = xr$3.div({
  display: "flex",
  flexDirection: "column",
  gap: 4
}), Zv = /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(hf, null, /* @__PURE__ */ e.createElement(gf, { ...e$1 }), /* @__PURE__ */ e.createElement(mf, null)), "Header"), Kv = xr$3(ml)(({ theme: e4 }) => ({
  margin: 0,
  fontSize: e4.typography.size.s3,
  fontWeight: e4.typography.weight.bold
})), Jv = xr$3(hl)(({ theme: e4 }) => ({
  position: "relative",
  zIndex: 1,
  margin: 0,
  fontSize: e4.typography.size.s2
})), Qv = xr$3.div({
  display: "flex",
  flexDirection: "row-reverse",
  gap: 8
}), vf = xr$3.div(({ theme: e4 }) => ({
  maxHeight: 100,
  overflow: "auto",
  animation: `${Gv} 300ms, ${pf} 300ms`,
  backgroundColor: e4.background.critical,
  color: e4.color.lightest,
  fontSize: e4.typography.size.s2,
  "& > div": {
    position: "relative",
    padding: "8px 16px"
  }
})), e3 = /* @__PURE__ */ o$1(({
  children: e$1,
  ...t4
}) => /* @__PURE__ */ e.createElement(vf, { ...t4 }, /* @__PURE__ */ e.createElement("div", null, e$1)), "Error");
function t3({
  children: e$1,
  width: t4,
  height: r4,
  onEscapeKeyDown: n3,
  onInteractOutside: a4 = /* @__PURE__ */ o$1((u4) => u4.preventDefault(), "onInteractOutside"),
  className: i4,
  container: c3,
  portalSelector: l4,
  ...s4
}) {
  let u4 = c3 ?? (l4 ? document.querySelector(l4) : null) ?? document.body;
  return /* @__PURE__ */ e.createElement(ul, { ...s4 }, /* @__PURE__ */ e.createElement(fl, { container: u4 }, /* @__PURE__ */ e.createElement(
    dl,
    { asChild: true },
    /* @__PURE__ */ e.createElement(wl, null)
  ), /* @__PURE__ */ e.createElement(
    pl,
    {
      asChild: true,
      onInteractOutside: a4,
      onEscapeKeyDown: n3
    },
    /* @__PURE__ */ e.createElement(bl, { className: i4, width: t4, height: r4 }, e$1)
  )));
}
o$1(t3, "BaseModal");
var r3 = Object.assign(t3, yl, { Dialog: Eo });
var a3 = /* @__PURE__ */ o$1((e4) => typeof e4 == "number" ? e4 : Number(e4), "toNumber"), i3 = xr$3.div(
  ({ theme: e4, col: t4, row: r4 = 1 }) => t4 ? {
    display: "inline-block",
    verticalAlign: "inherit",
    "& > *": {
      marginLeft: t4 * e4.layoutMargin,
      verticalAlign: "inherit"
    },
    [`& > *:first-child${hf$1}`]: {
      marginLeft: 0
    }
  } : {
    "& > *": {
      marginTop: r4 * e4.layoutMargin
    },
    [`& > *:first-child${hf$1}`]: {
      marginTop: 0
    }
  },
  ({ theme: e4, outer: t4, col: r4, row: n3 }) => {
    switch (true) {
      case !!(t4 && r4):
        return {
          marginLeft: t4 * e4.layoutMargin,
          marginRight: t4 * e4.layoutMargin
        };
      case !!(t4 && n3):
        return {
          marginTop: t4 * e4.layoutMargin,
          marginBottom: t4 * e4.layoutMargin
        };
      default:
        return {};
    }
  }
), l3 = /* @__PURE__ */ o$1(({ col: e$1, row: t4, outer: r4, children: n3, ...a4 }) => {
  let i4 = a3(typeof r4 == "number" || !r4 ? r4 : e$1 || t4);
  return /* @__PURE__ */ e.createElement(i3, { col: e$1, row: t4, outer: i4, ...a4 }, n3);
}, "Spaced");
var s3 = xr$3.div(({ theme: e4 }) => ({
  fontWeight: e4.typography.weight.bold
})), u3 = xr$3.div(), f3 = xr$3.div(({ theme: e4 }) => ({
  padding: 30,
  textAlign: "center",
  color: e4.color.defaultText,
  fontSize: e4.typography.size.s2 - 1
})), d3 = /* @__PURE__ */ o$1(({ children: e$1, ...t4 }) => {
  let [r4, n3] = reactExports.Children.toArray(e$1);
  return /* @__PURE__ */ e.createElement(f3, { ...t4 }, /* @__PURE__ */ e.createElement(s3, null, r4), n3 && /* @__PURE__ */ e.createElement(
    u3,
    null,
    n3
  ));
}, "Placeholder");
oo();
function h3(e4, t4) {
  var r4 = reactExports.useRef(null), n3 = reactExports.useRef(null);
  n3.current = t4;
  var a4 = reactExports.useRef(null);
  reactExports.useEffect(function() {
    i4();
  });
  var i4 = reactExports.useCallback(function() {
    var c3 = a4.current, l4 = n3.current, s4 = c3 || (l4 ? l4 instanceof Element ? l4 : l4.current : null);
    r4.current && r4.current.element === s4 && r4.current.subscriber === e4 || (r4.current && r4.current.cleanup && r4.current.cleanup(), r4.current = {
      element: s4,
      subscriber: e4,
      // Only calling the subscriber, if there's an actual element to report.
      // Setting cleanup to undefined unless a subscriber returns one, as an existing cleanup function would've been just called.
      cleanup: s4 ? e4(s4) : void 0
    });
  }, [e4]);
  return reactExports.useEffect(function() {
    return function() {
      r4.current && r4.current.cleanup && (r4.current.cleanup(), r4.current = null);
    };
  }, []), reactExports.useCallback(function(c3) {
    a4.current = c3, i4();
  }, [i4]);
}
o$1(h3, "useResolvedElement");
function bf(e4, t4, r4) {
  return e4[t4] ? e4[t4][0] ? e4[t4][0][r4] : (
    // TS complains about this, because the RO entry type follows the spec and does not reflect Firefox's current
    // behaviour of returning objects instead of arrays for `borderBoxSize` and `contentBoxSize`.
    // @ts-ignore
    e4[t4][r4]
  ) : t4 === "contentBoxSize" ? e4.contentRect[r4 === "inlineSize" ? "width" : "height"] : void 0;
}
o$1(bf, "extractSize");
function Co(e4) {
  e4 === void 0 && (e4 = {});
  var t4 = e4.onResize, r4 = reactExports.useRef(void 0);
  r4.current = t4;
  var n3 = e4.round || Math.round, a4 = reactExports.useRef(), i4 = reactExports.useState({
    width: void 0,
    height: void 0
  }), c3 = i4[0], l4 = i4[1], s4 = reactExports.useRef(false);
  reactExports.useEffect(function() {
    return s4.current = false, function() {
      s4.current = true;
    };
  }, []);
  var u4 = reactExports.useRef({
    width: void 0,
    height: void 0
  }), f4 = h3(reactExports.useCallback(function(d4) {
    return (!a4.current || a4.current.box !== e4.box || a4.current.round !== n3) && (a4.current = {
      box: e4.box,
      round: n3,
      instance: new ResizeObserver(function(m2) {
        var v2 = m2[0], y3 = e4.box === "border-box" ? "borderBoxSize" : e4.box === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize", p3 = bf(v2, y3, "inlineSize"), h2 = bf(v2, y3, "blockSize"), g2 = p3 ? n3(p3) : void 0, w2 = h2 ? n3(h2) : void 0;
        if (u4.current.width !== g2 || u4.current.height !== w2) {
          var b3 = {
            width: g2,
            height: w2
          };
          u4.current.width = g2, u4.current.height = w2, r4.current ? r4.current(b3) : s4.current || l4(b3);
        }
      })
    }), a4.current.instance.observe(d4, {
      box: e4.box
    }), function() {
      a4.current && a4.current.instance.unobserve(d4);
    };
  }, [e4.box, n3]), e4.ref);
  return reactExports.useMemo(function() {
    return {
      ref: f4,
      width: c3.width,
      height: c3.height
    };
  }, [f4, c3.width, c3.height]);
}
o$1(Co, "useResizeObserver");
var R3 = xr$3.div(
  ({ centered: e4 = false, scale: t4 = 1, elementHeight: r4 }) => ({
    height: r4 || "auto",
    transformOrigin: e4 ? "center top" : "left top",
    transform: `scale(${1 / t4})`
  })
);
function Rf({ centered: e$1, scale: t4, children: r4 }) {
  let n3 = reactExports.useRef(null), [a4, i4] = reactExports.useState(0), c3 = reactExports.useCallback(
    ({ height: l4 }) => {
      l4 && i4(l4 / t4);
    },
    [t4]
  );
  return reactExports.useEffect(() => {
    n3.current && i4(n3.current.getBoundingClientRect().height);
  }, [t4]), Co({
    ref: n3,
    onResize: c3
  }), /* @__PURE__ */ e.createElement(R3, { centered: e$1, scale: t4, elementHeight: a4 }, /* @__PURE__ */ e.createElement("div", { ref: n3, className: "innerZoomElementWrapper" }, r4));
}
o$1(Rf, "ZoomElement");
var Cl = class Cl2 extends reactExports.Component {
  constructor() {
    super(...arguments);
    this.iframe = null;
  }
  componentDidMount() {
    let { iFrameRef: r4 } = this.props;
    this.iframe = r4.current;
  }
  shouldComponentUpdate(r4) {
    let { scale: n3, active: a4 } = this.props;
    return n3 !== r4.scale && this.setIframeInnerZoom(r4.scale), a4 !== r4.active && this.iframe.setAttribute("data-is-storybook", r4.active ? "true" : "false"), r4.children.props.src !== this.props.children.props.src;
  }
  setIframeInnerZoom(r4) {
    try {
      Object.assign(this.iframe.contentDocument.body.style, {
        width: `${r4 * 100}%`,
        height: `${r4 * 100}%`,
        transform: `scale(${1 / r4})`,
        transformOrigin: "top left"
      });
    } catch {
      this.setIframeZoom(r4);
    }
  }
  setIframeZoom(r4) {
    Object.assign(this.iframe.style, {
      width: `${r4 * 100}%`,
      height: `${r4 * 100}%`,
      transform: `scale(${1 / r4})`,
      transformOrigin: "top left"
    });
  }
  render() {
    let { children: r4 } = this.props;
    return /* @__PURE__ */ e.createElement(e.Fragment, null, r4);
  }
};
o$1(Cl, "ZoomIFrame");
var Mo = Cl;
var E3 = {
  Element: Rf,
  IFrame: Mo
};
const { global: S3 } = __STORYBOOK_MODULE_GLOBAL__;
var { document: C3 } = S3, M3 = xr$3.strong(({ theme: e4 }) => ({
  color: e4.color.orange
})), A3 = xr$3.strong(({ theme: e4 }) => ({
  color: e4.color.ancillary,
  textDecoration: "underline"
})), Ef = xr$3.em(({ theme: e4 }) => ({
  color: e4.textMutedColor
})), L3 = /(Error): (.*)\n/, I3 = /at (?:(.*) )?\(?(.+)\)?/, z3 = /([^@]+)?(?:\/<)?@(.+)?/, T3 = /([^@]+)?@(.+)?/, H3 = /* @__PURE__ */ o$1(({
  error: e$1
}) => {
  if (!e$1)
    return /* @__PURE__ */ e.createElement(reactExports.Fragment, null, "This error has no stack or message");
  if (!e$1.stack)
    return /* @__PURE__ */ e.createElement(reactExports.Fragment, null, e$1.message || "This error has no stack or message");
  let t4 = e$1.stack.toString();
  t4 && e$1.message && !t4.includes(e$1.message) && (t4 = `Error: ${e$1.message}

${t4}`);
  let r4 = t4.match(L3);
  if (!r4)
    return /* @__PURE__ */ e.createElement(reactExports.Fragment, null, t4);
  let [, n3, a4] = r4, i4 = t4.split(/\n/).slice(1), [, ...c3] = i4.map((l4) => {
    let s4 = l4.match(I3) || l4.match(z3) || l4.match(T3);
    return s4 ? {
      name: (s4[1] || "").replace("/<", ""),
      location: s4[2].replace(C3.location.origin, "")
    } : null;
  }).filter(Boolean);
  return /* @__PURE__ */ e.createElement(reactExports.Fragment, null, /* @__PURE__ */ e.createElement("span", null, n3), ": ", /* @__PURE__ */ e.createElement(
    M3,
    null,
    a4
  ), /* @__PURE__ */ e.createElement("br", null), c3.map(
    (l4, s4) => (l4 == null ? void 0 : l4.name) ? /* @__PURE__ */ e.createElement(reactExports.Fragment, { key: s4 }, "  ", "at ", /* @__PURE__ */ e.createElement(A3, null, l4.name), " (", /* @__PURE__ */ e.createElement(Ef, null, l4.location), ")", /* @__PURE__ */ e.createElement("br", null)) : /* @__PURE__ */ e.createElement(
      reactExports.Fragment,
      { key: s4 },
      "  ",
      "at ",
      /* @__PURE__ */ e.createElement(Ef, null, l4 == null ? void 0 : l4.location),
      /* @__PURE__ */ e.createElement("br", null)
    )
  ));
}, "ErrorFormatter");
var O3 = xr$3.input({
  appearance: "none",
  display: "grid",
  placeContent: "center",
  width: 14,
  height: 14,
  flexShrink: 0,
  margin: 0,
  border: `1px solid ${h$1.border}`,
  borderRadius: 2,
  backgroundColor: "white",
  transition: "background-color 0.1s",
  "&:enabled": {
    cursor: "pointer"
  },
  "&:disabled": {
    backgroundColor: h$1.medium
  },
  "&:disabled:checked, &:disabled:indeterminate": {
    backgroundColor: h$1.mediumdark
  },
  "&:checked, &:indeterminate": {
    backgroundColor: h$1.secondary
  },
  "&:checked::before": {
    content: '""',
    width: 14,
    height: 14,
    background: `no-repeat center url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14'%3E%3Cpath fill='none' stroke='%23fff' stroke-width='2' d='m3 7 2.5 2.5L11 4'/%3E%3C/svg%3E")`
  },
  "&:indeterminate::before": {
    content: '""',
    width: 8,
    height: 2,
    background: "white"
  },
  "&:enabled:focus-visible": {
    outline: `1px solid ${h$1.secondary}`,
    outlineOffset: 1
  }
}), Sf = /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(O3, { ...e$1, type: "checkbox" }), "Checkbox");
var B3 = xr$3.label(({ theme: e4 }) => ({
  display: "flex",
  borderBottom: `1px solid ${e4.appBorderColor}`,
  margin: "0 15px",
  padding: "8px 0",
  "&:last-child": {
    marginBottom: "3rem"
  }
})), N3 = xr$3.span(({ theme: e4 }) => ({
  minWidth: 100,
  fontWeight: e4.typography.weight.bold,
  marginRight: 15,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  lineHeight: "16px"
})), Mf = /* @__PURE__ */ o$1(({ label: e$1, children: t4, ...r4 }) => /* @__PURE__ */ e.createElement(B3, { ...r4 }, e$1 ? /* @__PURE__ */ e.createElement(
  N3,
  null,
  /* @__PURE__ */ e.createElement("span", null, e$1)
) : null, t4), "Field");
var Or = /* @__PURE__ */ o$1(({ size: e4 }) => {
  switch (e4) {
    case "100%":
      return { width: "100%" };
    case "flex":
      return { flex: 1 };
    case "auto":
    default:
      return { display: "inline" };
  }
}, "sizes"), Ao = /* @__PURE__ */ o$1(({
  align: e4
}) => {
  switch (e4) {
    case "end":
      return { textAlign: "right" };
    case "center":
      return { textAlign: "center" };
    case "start":
    default:
      return { textAlign: "left" };
  }
}, "alignment"), Lo = /* @__PURE__ */ o$1(({
  valid: e4,
  theme: t4
}) => {
  switch (e4) {
    case "valid":
      return { boxShadow: `${t4.color.positive} 0 0 0 1px inset !important` };
    case "error":
      return { boxShadow: `${t4.color.negative} 0 0 0 1px inset !important` };
    case "warn":
      return {
        boxShadow: `${t4.color.warning} 0 0 0 1px inset`
      };
    case void 0:
    case null:
    default:
      return {};
  }
}, "validation"), F3 = {
  // resets
  appearance: "none",
  border: "0 none",
  boxSizing: "inherit",
  display: " block",
  margin: " 0",
  background: "transparent",
  padding: 0,
  fontSize: "inherit",
  position: "relative"
}, Io = /* @__PURE__ */ o$1(({ theme: e4 }) => ({
  ...F3,
  transition: "box-shadow 200ms ease-out, opacity 200ms ease-out",
  color: e4.input.color || "inherit",
  background: e4.input.background,
  boxShadow: `${e4.input.border} 0 0 0 1px inset`,
  borderRadius: e4.input.borderRadius,
  fontSize: e4.typography.size.s2 - 1,
  lineHeight: "20px",
  padding: "6px 10px",
  // 32
  boxSizing: "border-box",
  height: 32,
  '&[type="file"]': {
    height: "auto"
  },
  "&:focus": {
    boxShadow: `${e4.color.secondary} 0 0 0 1px inset`,
    outline: "none",
    "@media (forced-colors: active)": {
      outline: "1px solid highlight"
    }
  },
  "&[disabled]": {
    cursor: "not-allowed",
    opacity: 0.5
  },
  "&:-webkit-autofill": { WebkitBoxShadow: `0 0 0 3em ${e4.color.lightest} inset` },
  "&::placeholder": {
    color: e4.textMutedColor,
    opacity: 1
  }
}), "styles");
var Af = Object.assign(
  xr$3(
    reactExports.forwardRef(/* @__PURE__ */ o$1(function({ size: t4, valid: r4, align: n3, ...a4 }, i4) {
      return /* @__PURE__ */ e.createElement("input", { ...a4, ref: i4 });
    }, "Input"))
  )(Io, Or, Ao, Lo, {
    minHeight: 32
  }),
  {
    displayName: "Input"
  }
);
var W3 = xr$3.input({
  appearance: "none",
  display: "grid",
  placeContent: "center",
  width: 16,
  height: 16,
  flexShrink: 0,
  margin: -1,
  border: `1px solid ${h$1.border}`,
  borderRadius: 8,
  backgroundColor: "white",
  transition: "background-color 0.1s",
  "&:enabled": {
    cursor: "pointer"
  },
  "&:disabled": {
    backgroundColor: h$1.medium
  },
  "&:disabled:checked": {
    backgroundColor: h$1.mediumdark
  },
  "&:checked": {
    backgroundColor: h$1.secondary,
    boxShadow: "inset 0 0 0 2px white"
  },
  "&:enabled:focus-visible": {
    outline: `1px solid ${h$1.secondary}`,
    outlineOffset: 1
  }
}), Lf = /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(W3, { ...e$1, type: "radio" }), "Radio");
function If() {
  var _a2, _b2, _c3;
  try {
    return (
      // @ts-expect-error This property exists in Vitest browser mode
      !!globalThis.__vitest_browser__ || !!((_c3 = (_b2 = (_a2 = globalThis.window) == null ? void 0 : _a2.navigator) == null ? void 0 : _b2.userAgent) == null ? void 0 : _c3.match(/StorybookTestRunner/))
    );
  } catch {
    return false;
  }
}
o$1(If, "isTestEnvironment");
var G3 = xr$3.select(Or, ({ theme: e4 }) => ({
  appearance: "none",
  background: `calc(100% - 12px) center no-repeat url("data:image/svg+xml,%3Csvg width='8' height='4' viewBox='0 0 8 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.30303 0.196815C1.13566 0.0294472 0.864304 0.0294472 0.696937 0.196815C0.529569 0.364182 0.529569 0.635539 0.696937 0.802906L3.69694 3.80291C3.8643 3.97027 4.13566 3.97027 4.30303 3.80291L7.30303 0.802906C7.4704 0.635539 7.4704 0.364182 7.30303 0.196815C7.13566 0.0294473 6.8643 0.0294473 6.69694 0.196815L3.99998 2.89377L1.30303 0.196815Z' fill='%2373828C'/%3E%3C/svg%3E%0A")`,
  backgroundSize: 10,
  padding: "6px 30px 6px 10px",
  "@supports (appearance: base-select)": {
    appearance: "base-select",
    background: e4.input.background,
    padding: "6px 10px"
  },
  transition: "box-shadow 200ms ease-out, opacity 200ms ease-out",
  color: e4.input.color || "inherit",
  boxShadow: `${e4.input.border} 0 0 0 1px inset`,
  borderRadius: e4.input.borderRadius,
  fontSize: e4.typography.size.s2 - 1,
  lineHeight: "20px",
  boxSizing: "border-box",
  border: "none",
  cursor: "pointer",
  "& > button": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    gap: 8,
    "& > svg": {
      width: 14,
      height: 14,
      color: e4.color.mediumdark
    }
  },
  "&:has(option:not([hidden]):checked)": {
    color: e4.color.defaultText
  },
  "&:focus-visible, &:focus-within": {
    outline: "none",
    boxShadow: `${e4.color.secondary} 0 0 0 1px inset`
  },
  "&::picker-icon": {
    display: "none"
  },
  "&::picker(select)": {
    appearance: "base-select",
    border: "1px solid #e4e4e7",
    padding: 4,
    marginTop: 4,
    background: e4.base === "light" ? fo$3(e4.background.app) : e4.background.app,
    filter: `
      drop-shadow(0 5px 5px rgba(0,0,0,0.05))
      drop-shadow(0 0 3px rgba(0,0,0,0.1))
    `,
    borderRadius: e4.appBorderRadius + 2,
    fontSize: e4.typography.size.s1,
    cursor: "default",
    transition: "opacity 100ms ease-in-out, transform 100ms ease-in-out",
    transformOrigin: "top",
    transform: "translateY(0)",
    opacity: 1,
    "@starting-style": {
      transform: "translateY(-0.25rem) scale(0.95)",
      opacity: 0
    }
  },
  "& optgroup label": {
    display: "block",
    padding: "3px 6px"
  },
  "& option": {
    lineHeight: "18px",
    padding: "7px 10px",
    borderRadius: 4,
    outline: "none",
    cursor: "pointer",
    color: e4.color.defaultText,
    "&::checkmark": {
      display: "none"
    },
    "&:hover, &:focus-visible": {
      backgroundColor: e4.background.hoverable
    },
    "&:checked": {
      color: e4.color.secondary,
      fontWeight: e4.typography.weight.bold
    },
    "&:disabled": {
      backgroundColor: "transparent",
      cursor: "default",
      color: e4.color.defaultText
    }
  }
})), zf = /* @__PURE__ */ o$1(({ children: e$1, ...t4 }) => (
  // @ts-expect-error Weird props mismatch
  /* @__PURE__ */ e.createElement(G3, { ...t4 }, !If() && /* @__PURE__ */ e.createElement("button", null, /* @__PURE__ */ e.createElement(
    "selectedcontent",
    null
  ), /* @__PURE__ */ e.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true"
    },
    /* @__PURE__ */ e.createElement("path", { d: "m6 9 6 6 6-6" })
  )), /* @__PURE__ */ e.createElement("optgroup", null, e$1))
), "Select");
en();
Fn();
var Tf = reactExports.useLayoutEffect;
var Hf = /* @__PURE__ */ o$1(function(t4) {
  var r4 = e.useRef(t4);
  return Tf(function() {
    r4.current = t4;
  }), r4;
}, "useLatest");
var kf = /* @__PURE__ */ o$1(function(t4, r4) {
  if (typeof t4 == "function") {
    t4(r4);
    return;
  }
  t4.current = r4;
}, "updateRef"), Of = /* @__PURE__ */ o$1(function(t4, r4) {
  var n3 = e.useRef();
  return e.useCallback(function(a4) {
    t4.current = a4, n3.current && kf(n3.current, null), n3.current = r4, r4 && kf(r4, a4);
  }, [r4]);
}, "useComposedRef");
var Bf = {
  "min-height": "0",
  "max-height": "none",
  height: "0",
  visibility: "hidden",
  overflow: "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0",
  display: "block"
}, Z3 = /* @__PURE__ */ o$1(function(t4) {
  Object.keys(Bf).forEach(function(r4) {
    t4.style.setProperty(r4, Bf[r4], "important");
  });
}, "forceHiddenStyles"), Nf = Z3, Ee$1 = null, Ff = /* @__PURE__ */ o$1(function(t4, r4) {
  var n3 = t4.scrollHeight;
  return r4.sizingStyle.boxSizing === "border-box" ? n3 + r4.borderSize : n3 - r4.paddingSize;
}, "getHeight");
function K3(e4, t4, r4, n3) {
  r4 === void 0 && (r4 = 1), n3 === void 0 && (n3 = 1 / 0), Ee$1 || (Ee$1 = document.createElement("textarea"), Ee$1.setAttribute("tabindex", "-1"), Ee$1.setAttribute("aria-hidden", "true"), Nf(Ee$1)), Ee$1.parentNode === null && document.body.appendChild(Ee$1);
  var a4 = e4.paddingSize, i4 = e4.borderSize, c3 = e4.sizingStyle, l4 = c3.boxSizing;
  Object.keys(c3).forEach(function(m2) {
    var v2 = m2;
    Ee$1.style[v2] = c3[v2];
  }), Nf(Ee$1), Ee$1.value = t4;
  var s4 = Ff(Ee$1, e4);
  Ee$1.value = t4, s4 = Ff(Ee$1, e4), Ee$1.value = "x";
  var u4 = Ee$1.scrollHeight - a4, f4 = u4 * r4;
  l4 === "border-box" && (f4 = f4 + a4 + i4), s4 = Math.max(f4, s4);
  var d4 = u4 * n3;
  return l4 === "border-box" && (d4 = d4 + a4 + i4), s4 = Math.min(d4, s4), [s4, u4];
}
o$1(K3, "calculateNodeHeight");
var Df = /* @__PURE__ */ o$1(function() {
}, "noop"), J3 = /* @__PURE__ */ o$1(function(t4, r4) {
  return t4.reduce(function(n3, a4) {
    return n3[a4] = r4[a4], n3;
  }, {});
}, "pick"), Q3 = [
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderTopWidth",
  "boxSizing",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  // non-standard
  "tabSize",
  "textIndent",
  // non-standard
  "textRendering",
  "textTransform",
  "width",
  "wordBreak",
  "wordSpacing",
  "scrollbarGutter"
], e7 = !!document.documentElement.currentStyle, t7 = /* @__PURE__ */ o$1(function(t4) {
  var r4 = window.getComputedStyle(t4);
  if (r4 === null)
    return null;
  var n3 = J3(Q3, r4), a4 = n3.boxSizing;
  if (a4 === "")
    return null;
  e7 && a4 === "border-box" && (n3.width = parseFloat(n3.width) + parseFloat(n3.borderRightWidth) + parseFloat(n3.borderLeftWidth) + parseFloat(n3.paddingRight) + parseFloat(n3.paddingLeft) + "px");
  var i4 = parseFloat(n3.paddingBottom) + parseFloat(n3.paddingTop), c3 = parseFloat(n3.borderBottomWidth) + parseFloat(n3.borderTopWidth);
  return {
    sizingStyle: n3,
    paddingSize: i4,
    borderSize: c3
  };
}, "getSizingData"), r7 = t7;
function Ll(e4, t4, r4) {
  var n3 = Hf(r4);
  reactExports.useLayoutEffect(function() {
    var a4 = /* @__PURE__ */ o$1(function(c3) {
      return n3.current(c3);
    }, "handler");
    if (e4)
      return e4.addEventListener(t4, a4), function() {
        return e4.removeEventListener(t4, a4);
      };
  }, []);
}
o$1(Ll, "useListener");
var n7 = /* @__PURE__ */ o$1(function(t4, r4) {
  Ll(document.body, "reset", function(n3) {
    t4.current.form === n3.target && r4(n3);
  });
}, "useFormResetListener"), o7 = /* @__PURE__ */ o$1(function(t4) {
  Ll(window, "resize", t4);
}, "useWindowResizeListener"), a7 = /* @__PURE__ */ o$1(function(t4) {
  Ll(document.fonts, "loadingdone", t4);
}, "useFontsLoadedListener"), i7 = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"], l7 = /* @__PURE__ */ o$1(function(t4, r4) {
  var n3 = t4.cacheMeasurements, a4 = t4.maxRows, i4 = t4.minRows, c3 = t4.onChange, l4 = c3 === void 0 ? Df : c3, s4 = t4.onHeightChange, u4 = s4 === void 0 ? Df : s4, f4 = pr(t4, i7), d4 = f4.value !== void 0, m2 = reactExports.useRef(null), v2 = Of(m2, r4), y3 = reactExports.useRef(0), p3 = reactExports.useRef(), h2 = /* @__PURE__ */ o$1(
    function() {
      var b3 = m2.current, x3 = n3 && p3.current ? p3.current : r7(b3);
      if (x3) {
        p3.current = x3;
        var E4 = K3(x3, b3.value || b3.placeholder || "x", i4, a4), R4 = E4[0], S4 = E4[1];
        y3.current !== R4 && (y3.current = R4, b3.style.setProperty("height", R4 + "px", "important"), u4(R4, {
          rowHeight: S4
        }));
      }
    },
    "resizeTextarea"
  ), g2 = /* @__PURE__ */ o$1(function(b3) {
    d4 || h2(), l4(b3);
  }, "handleChange");
  return reactExports.useLayoutEffect(h2), n7(m2, function() {
    if (!d4) {
      var w2 = m2.current.value;
      requestAnimationFrame(function() {
        var b3 = m2.current;
        b3 && w2 !== b3.value && h2();
      });
    }
  }), o7(h2), a7(h2), /* @__PURE__ */ reactExports.createElement("textarea", W$1({}, f4, {
    onChange: g2,
    ref: v2
  }));
}, "TextareaAutosize"), _f = /* @__PURE__ */ reactExports.forwardRef(l7);
var Vf = Object.assign(
  xr$3(
    reactExports.forwardRef(/* @__PURE__ */ o$1(function({ size: t4, valid: r4, align: n3, ...a4 }, i4) {
      return /* @__PURE__ */ e.createElement(_f, { ...a4, ref: i4 });
    }, "Textarea"))
  )(Io, Or, Ao, Lo, ({ height: e4 = 400 }) => ({
    overflow: "visible",
    maxHeight: e4
  })),
  {
    displayName: "Textarea"
  }
);
var d7 = Object.assign(
  xr$3.form({
    boxSizing: "border-box",
    width: "100%"
  }),
  {
    Field: Mf,
    Input: Af,
    Select: zf,
    Textarea: Vf,
    Button: Hr,
    Checkbox: Sf,
    Radio: Lf
  }
);
var s6 = reactExports.lazy(
  () => Promise.resolve().then(() => (Wo(), i0)).then((e4) => ({ default: e4.WithTooltip }))
), u6 = /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(reactExports.Suspense, { fallback: /* @__PURE__ */ e.createElement("div", null) }, /* @__PURE__ */ e.createElement(s6, { ...e$1 })), "WithTooltip"), f6 = reactExports.lazy(
  () => Promise.resolve().then(() => (Wo(), i0)).then((e4) => ({ default: e4.WithTooltipPure }))
), d6 = /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(reactExports.Suspense, { fallback: /* @__PURE__ */ e.createElement("div", null) }, /* @__PURE__ */ e.createElement(f6, { ...e$1 })), "WithTooltipPure");
var p6 = xr$3.div(({ theme: e4 }) => ({
  fontWeight: e4.typography.weight.bold
})), m6 = xr$3.span(), h6 = xr$3.div(({ theme: e4 }) => ({
  marginTop: 8,
  textAlign: "center",
  "> *": {
    margin: "0 8px",
    fontWeight: e4.typography.weight.bold
  }
})), g6 = xr$3.div(({ theme: e4 }) => ({
  color: e4.color.defaultText,
  lineHeight: "18px"
})), v6 = xr$3.div({
  padding: 15,
  width: 280,
  boxSizing: "border-box"
}), w6 = /* @__PURE__ */ o$1(({ title: e$1, desc: t4, links: r4 }) => /* @__PURE__ */ e.createElement(v6, null, /* @__PURE__ */ e.createElement(
  g6,
  null,
  e$1 && /* @__PURE__ */ e.createElement(p6, null, e$1),
  t4 && /* @__PURE__ */ e.createElement(m6, null, t4)
), r4 && /* @__PURE__ */ e.createElement(
  h6,
  null,
  r4.map(({ title: n3, ...a4 }) => /* @__PURE__ */ e.createElement(Ii, { ...a4, key: n3 }, n3))
)), "TooltipMessage");
var R6 = xr$3.div(({ theme: e4 }) => ({
  padding: "2px 6px",
  lineHeight: "16px",
  fontSize: 10,
  fontWeight: e4.typography.weight.bold,
  color: e4.color.lightest,
  boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)",
  borderRadius: 4,
  whiteSpace: "nowrap",
  pointerEvents: "none",
  zIndex: -1,
  background: e4.base === "light" ? "rgba(60, 60, 60, 0.9)" : "rgba(0, 0, 0, 0.95)",
  margin: 6
})), x6 = /* @__PURE__ */ o$1(({ note: e$1, ...t4 }) => /* @__PURE__ */ e.createElement(R6, { ...t4 }, e$1), "TooltipNote");
var rp = ge$1(rn(), 1);
var E6 = xr$3(({ active: e$1, loading: t4, disabled: r4, ...n3 }) => /* @__PURE__ */ e.createElement("span", { ...n3 }))(
  ({ theme: e4 }) => ({
    color: e4.color.defaultText,
    // Previously was theme.typography.weight.normal but this weight does not exists in Theme
    fontWeight: e4.typography.weight.regular
  }),
  ({ active: e4, theme: t4 }) => e4 ? {
    color: t4.color.secondary,
    fontWeight: t4.typography.weight.bold
  } : {},
  ({ loading: e4, theme: t4 }) => e4 ? {
    display: "inline-block",
    flex: "none",
    ...t4.animation.inlineGlow
  } : {},
  ({ disabled: e4, theme: t4 }) => e4 ? {
    color: t4.textMutedColor
  } : {}
), S6 = xr$3.span({
  display: "flex",
  "& svg": {
    height: 12,
    width: 12,
    margin: "3px 0",
    verticalAlign: "top"
  },
  "& path": {
    fill: "inherit"
  }
}), C6 = xr$3.span(
  {
    flex: 1,
    textAlign: "left",
    display: "flex",
    flexDirection: "column"
  },
  ({ isIndented: e4 }) => e4 ? { marginLeft: 24 } : {}
), M6 = xr$3.span(
  ({ theme: e4 }) => ({
    fontSize: "11px",
    lineHeight: "14px"
  }),
  ({ active: e4, theme: t4 }) => e4 ? {
    color: t4.color.secondary
  } : {},
  ({ theme: e4, disabled: t4 }) => t4 ? {
    color: e4.textMutedColor
  } : {}
), A6 = xr$3.span(
  ({ active: e4, theme: t4 }) => e4 ? {
    color: t4.color.secondary
  } : {},
  () => ({
    display: "flex",
    maxWidth: 14
  })
), L6 = xr$3.div(
  ({ theme: e4 }) => ({
    width: "100%",
    border: "none",
    borderRadius: e4.appBorderRadius,
    background: "none",
    fontSize: e4.typography.size.s1,
    transition: "all 150ms ease-out",
    color: e4.color.dark,
    textDecoration: "none",
    justifyContent: "space-between",
    lineHeight: "18px",
    padding: "7px 10px",
    display: "flex",
    alignItems: "center",
    "& > * + *": {
      paddingLeft: 10
    }
  }),
  ({ theme: e4, href: t4, onClick: r4 }) => (t4 || r4) && {
    cursor: "pointer",
    "&:hover": {
      background: e4.background.hoverable
    },
    "&:hover svg": {
      opacity: 1
    }
  },
  ({ theme: e4, as: t4 }) => t4 === "label" && {
    "&:has(input:not(:disabled))": {
      cursor: "pointer",
      "&:hover": {
        background: e4.background.hoverable
      }
    }
  },
  ({ disabled: e4 }) => e4 && { cursor: "not-allowed" }
), I6 = (0, rp.default)(100)(({ onClick: e4, input: t4, href: r4, LinkWrapper: n3 }) => ({
  ...e4 && {
    as: "button",
    onClick: e4
  },
  ...t4 && {
    as: "label"
  },
  ...r4 && {
    as: "a",
    href: r4,
    ...n3 && {
      as: n3,
      to: r4
    }
  }
})), z6 = /* @__PURE__ */ o$1((e$1) => {
  let {
    loading: t4 = false,
    title: r4 = /* @__PURE__ */ e.createElement("span", null, "Loading state"),
    center: n3 = null,
    right: a4 = null,
    active: i4 = false,
    disabled: c3 = false,
    isIndented: l4 = false,
    href: s4 = void 0,
    onClick: u4 = void 0,
    icon: f4,
    input: d4,
    LinkWrapper: m2 = void 0,
    ...v2
  } = e$1, y3 = { active: i4, disabled: c3 }, p3 = I6(e$1), h2 = f4 || d4;
  return /* @__PURE__ */ e.createElement(L6, { ...v2, ...y3, ...p3 }, /* @__PURE__ */ e.createElement(e.Fragment, null, h2 && /* @__PURE__ */ e.createElement(A6, { ...y3 }, h2), r4 || n3 ? /* @__PURE__ */ e.createElement(C6, { isIndented: l4 && !h2 }, r4 && /* @__PURE__ */ e.createElement(
    E6,
    { ...y3, loading: t4 },
    r4
  ), n3 && /* @__PURE__ */ e.createElement(M6, { ...y3 }, n3)) : null, a4 && /* @__PURE__ */ e.createElement(
    S6,
    { ...y3 },
    a4
  )));
}, "ListItem"), l0 = z6;
var P6 = xr$3.div(
  {
    minWidth: 180,
    overflow: "hidden",
    overflowY: "auto",
    maxHeight: 15.5 * 32 + 8
    // 15.5 items at 32px each + 8px padding
  },
  ({ theme: e4 }) => ({
    borderRadius: e4.appBorderRadius + 2
  }),
  ({ theme: e4 }) => e4.base === "dark" ? { background: e4.background.content } : {}
), k6 = xr$3.div(({ theme: e4 }) => ({
  padding: 4,
  "& + &": {
    borderTop: `1px solid ${e4.appBorderColor}`
  }
})), O6 = /* @__PURE__ */ o$1(({ id: e$1, onClick: t4, ...r4 }) => {
  let { active: n3, disabled: a4, title: i4, href: c3 } = r4, l4 = reactExports.useCallback(
    (s4) => t4 == null ? void 0 : t4(s4, { id: e$1, active: n3, disabled: a4, title: i4, href: c3 }),
    [t4, e$1, n3, a4, i4, c3]
  );
  return /* @__PURE__ */ e.createElement(l0, { id: `list-item-${e$1}`, ...r4, ...t4 && { onClick: l4 } });
}, "Item"), c0 = /* @__PURE__ */ o$1(({ links: e$1, LinkWrapper: t4, ...r4 }) => {
  let n3 = Array.isArray(e$1[0]) ? e$1 : [e$1], a4 = n3.some(
    (i4) => i4.some((c3) => "icon" in c3 && c3.icon || "input" in c3 && c3.input)
  );
  return /* @__PURE__ */ e.createElement(P6, { ...r4 }, n3.filter((i4) => i4.length).map((i4, c3) => /* @__PURE__ */ e.createElement(k6, { key: i4.map((l4) => l4.id).join(`~${c3}~`) }, i4.map((l4) => "content" in l4 ? /* @__PURE__ */ e.createElement(reactExports.Fragment, { key: l4.id }, l4.content) : /* @__PURE__ */ e.createElement(O6, { key: l4.id, isIndented: a4, LinkWrapper: t4, ...l4 })))));
}, "TooltipLinkList");
oo();
var s0 = xr$3.div(
  {
    display: "flex",
    whiteSpace: "nowrap",
    flexBasis: "auto",
    marginLeft: 3,
    marginRight: 10
  },
  ({ scrollable: e4 }) => e4 ? { flexShrink: 0 } : {},
  ({ left: e4 }) => e4 ? {
    "& > *": {
      marginLeft: 4
    }
  } : {},
  ({ right: e4 }) => e4 ? {
    gap: 6
  } : {}
);
s0.displayName = "Side";
var N6 = /* @__PURE__ */ o$1(({ children: e$1, className: t4, scrollable: r4 }) => r4 ? /* @__PURE__ */ e.createElement(
  Er,
  { vertical: false, className: t4 },
  e$1
) : /* @__PURE__ */ e.createElement("div", { className: t4 }, e$1), "UnstyledBar"), f0 = xr$3(N6)(
  ({ backgroundColor: e4, theme: t4, scrollable: r4 = true }) => ({
    color: t4.barTextColor,
    width: "100%",
    minHeight: 40,
    flexShrink: 0,
    scrollbarColor: `${t4.barTextColor} ${e4 || t4.barBg}`,
    scrollbarWidth: "thin",
    overflow: r4 ? "auto" : "hidden",
    overflowY: "hidden"
  }),
  ({ theme: e4, border: t4 = false }) => t4 ? {
    boxShadow: `${e4.appBorderColor}  0 -1px 0 0 inset`,
    background: e4.barBg
  } : {}
);
f0.displayName = "Bar";
var F6 = xr$3.div(({ bgColor: e4 }) => ({
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
  flexWrap: "nowrap",
  flexShrink: 0,
  height: 40,
  backgroundColor: e4 || ""
})), Uo = /* @__PURE__ */ o$1(({ children: e$1, backgroundColor: t4, className: r4, ...n3 }) => {
  let [a4, i4] = reactExports.Children.toArray(e$1);
  return /* @__PURE__ */ e.createElement(f0, { backgroundColor: t4, className: `sb-bar ${r4}`, ...n3 }, /* @__PURE__ */ e.createElement(F6, {
    bgColor: t4
  }, /* @__PURE__ */ e.createElement(s0, { scrollable: n3.scrollable, left: true }, a4), i4 ? /* @__PURE__ */ e.createElement(
    s0,
    { right: true },
    i4
  ) : null));
}, "FlexBar");
Uo.displayName = "FlexBar";
var $6 = /* @__PURE__ */ o$1((e4) => typeof e4.props.href == "string", "isLink"), j6 = /* @__PURE__ */ o$1(
  (e4) => typeof e4.props.href != "string",
  "isButton"
);
function W6({ children: e$1, ...t4 }, r4) {
  let n3 = { props: t4, ref: r4 };
  if ($6(n3))
    return /* @__PURE__ */ e.createElement("a", { ref: n3.ref, ...n3.props }, e$1);
  if (j6(n3))
    return /* @__PURE__ */ e.createElement("button", { ref: n3.ref, type: "button", ...n3.props }, e$1);
  throw new Error("invalid props");
}
o$1(W6, "ForwardRefFunction");
var ap = reactExports.forwardRef(W6);
ap.displayName = "ButtonOrLink";
var cr = xr$3(ap, { shouldForwardProp: yr$3 })(
  {
    whiteSpace: "normal",
    display: "inline-flex",
    overflow: "hidden",
    verticalAlign: "top",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textDecoration: "none",
    "&:empty": {
      display: "none"
    },
    "&[hidden]": {
      display: "none"
    }
  },
  ({ theme: e4 }) => ({
    padding: "0 15px",
    transition: "color 0.2s linear, border-bottom-color 0.2s linear",
    height: 40,
    lineHeight: "12px",
    cursor: "pointer",
    background: "transparent",
    border: "0 solid transparent",
    borderTop: "3px solid transparent",
    borderBottom: "3px solid transparent",
    fontWeight: "bold",
    fontSize: 13,
    "&:focus": {
      outline: "0 none",
      borderBottomColor: e4.barSelectedColor
    }
  }),
  ({ active: e4, textColor: t4, theme: r4 }) => e4 ? {
    color: t4 || r4.barSelectedColor,
    borderBottomColor: r4.barSelectedColor
  } : {
    color: t4 || r4.barTextColor,
    borderBottomColor: "transparent",
    "&:hover": {
      color: r4.barHoverColor
    }
  }
);
cr.displayName = "TabButton";
var U6 = xr$3.div(({ theme: e4 }) => ({
  height: "100%",
  display: "flex",
  padding: 30,
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: 15,
  background: e4.background.content
})), q6 = xr$3.div({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  maxWidth: 415
}), G6 = xr$3.div(({ theme: e4 }) => ({
  fontWeight: e4.typography.weight.bold,
  fontSize: e4.typography.size.s2 - 1,
  textAlign: "center",
  color: e4.textColor
})), Y6 = xr$3.div(({ theme: e4 }) => ({
  fontWeight: e4.typography.weight.regular,
  fontSize: e4.typography.size.s2 - 1,
  textAlign: "center",
  color: e4.textMutedColor
})), Yo = /* @__PURE__ */ o$1(({ title: e$1, description: t4, footer: r4 }) => /* @__PURE__ */ e.createElement(U6, null, /* @__PURE__ */ e.createElement(
  q6,
  null,
  /* @__PURE__ */ e.createElement(G6, null, e$1),
  t4 && /* @__PURE__ */ e.createElement(Y6, null, t4)
), r4), "EmptyTabContent");
var d0 = xr$3.div(
  ({ active: e4 }) => e4 ? { display: "block" } : { display: "none" }
), ip = /* @__PURE__ */ o$1((e$1) => reactExports.Children.toArray(e$1).map(
  // @ts-expect-error (non strict)
  ({
    props: { title: t4, id: r4, color: n3, children: a4 }
  }) => {
    let i4 = Array.isArray(
      a4
    ) ? a4[0] : a4;
    return {
      title: t4,
      id: r4,
      ...n3 ? { color: n3 } : {},
      render: typeof i4 == "function" ? i4 : ({ active: l4 }) => /* @__PURE__ */ e.createElement(d0, { active: l4, role: "tabpanel" }, i4)
    };
  }
), "childrenToList");
Wo();
var ew = xr$3.span(({ theme: e4, isActive: t4 }) => ({
  display: "inline-block",
  width: 0,
  height: 0,
  marginLeft: 8,
  color: t4 ? e4.color.secondary : e4.color.mediumdark,
  borderRight: "3px solid transparent",
  borderLeft: "3px solid transparent",
  borderTop: "3px solid",
  transition: "transform .1s ease-out"
})), tw = xr$3(cr)(({ active: e4, theme: t4, preActive: r4 }) => `
    color: ${r4 || e4 ? t4.barSelectedColor : t4.barTextColor};
    .addon-collapsible-icon {
      color: ${r4 || e4 ? t4.barSelectedColor : t4.barTextColor};
    }
    &:hover {
      color: ${t4.barHoverColor};
      .addon-collapsible-icon {
        color: ${t4.barHoverColor};
      }
    }
  `);
function sp(e$1) {
  let t4 = reactExports.useRef(), r4 = reactExports.useRef(), n3 = reactExports.useRef(/* @__PURE__ */ new Map()), { width: a4 = 1 } = Co({
    // @ts-expect-error (non strict)
    ref: t4
  }), [i4, c3] = reactExports.useState(e$1), [l4, s4] = reactExports.useState([]), u4 = reactExports.useRef(e$1), f4 = reactExports.useCallback(
    ({
      menuName: m2,
      actions: v2
    }) => {
      let y3 = l4.some(({ active: g2 }) => g2), [p3, h2] = reactExports.useState(false);
      return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
        a0,
        {
          interactive: true,
          visible: p3,
          onVisibleChange: h2,
          placement: "bottom",
          delayHide: 100,
          tooltip: /* @__PURE__ */ e.createElement(
            c0,
            {
              links: l4.map(({ title: g2, id: w2, color: b3, active: x3 }) => ({
                id: w2,
                title: g2,
                color: b3,
                active: x3,
                onClick: /* @__PURE__ */ o$1((E4) => {
                  E4.preventDefault(), v2.onSelect(w2);
                }, "onClick")
              }))
            }
          )
        },
        /* @__PURE__ */ e.createElement(
          tw,
          {
            id: "addons-menu-button",
            ref: r4,
            active: y3,
            preActive: p3,
            style: { visibility: l4.length ? "visible" : "hidden" },
            "aria-hidden": !l4.length,
            className: "tabbutton",
            type: "button",
            role: "tab"
          },
          m2,
          /* @__PURE__ */ e.createElement(
            ew,
            {
              className: "addon-collapsible-icon",
              isActive: y3 || p3
            }
          )
        )
      ), l4.map(({ title: g2, id: w2, color: b3 }, x3) => {
        let E4 = `index-${x3}`;
        return /* @__PURE__ */ e.createElement(
          cr,
          {
            id: `tabbutton-${jn$1(w2) ?? E4}`,
            style: { visibility: "hidden" },
            "aria-hidden": true,
            tabIndex: -1,
            ref: (R4) => {
              n3.current.set(w2, R4);
            },
            className: "tabbutton",
            type: "button",
            key: w2,
            textColor: b3,
            role: "tab"
          },
          g2
        );
      }));
    },
    [l4]
  ), d4 = reactExports.useCallback(() => {
    if (!t4.current || !r4.current)
      return;
    let { x: m2, width: v2 } = t4.current.getBoundingClientRect(), { width: y3 } = r4.current.getBoundingClientRect(), p3 = l4.length ? m2 + v2 - y3 : m2 + v2, h2 = [], g2 = 0, w2 = e$1.filter((b3) => {
      let { id: x3 } = b3, E4 = n3.current.get(x3), { width: R4 = 0 } = (E4 == null ? void 0 : E4.getBoundingClientRect()) || {}, S4 = m2 + g2 + R4 > p3;
      return (!S4 || !E4) && h2.push(b3), g2 += R4, S4;
    });
    (h2.length !== i4.length || u4.current !== e$1) && (c3(h2), s4(w2), u4.current = e$1);
  }, [l4.length, e$1, i4]);
  return reactExports.useLayoutEffect(d4, [d4, a4]), {
    tabRefs: n3,
    addonsRef: r4,
    tabBarRef: t4,
    visibleList: i4,
    invisibleList: l4,
    AddonTab: f4
  };
}
o$1(sp, "useList");
var aw = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */", iw = xr$3.div(
  ({ theme: e4, bordered: t4 }) => t4 ? {
    backgroundClip: "padding-box",
    border: `1px solid ${e4.appBorderColor}`,
    borderRadius: e4.appBorderRadius,
    overflow: "hidden",
    boxSizing: "border-box"
  } : {},
  ({ absolute: e4 }) => e4 ? {
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column"
  } : {
    display: "block"
  }
), v0 = xr$3.div({
  overflow: "hidden",
  "&:first-of-type": {
    marginLeft: -3
  },
  whiteSpace: "nowrap",
  flexGrow: 1
});
v0.displayName = "TabBar";
var lw = xr$3.div(
  {
    display: "block",
    position: "relative",
    container: "tab-content / inline-size"
  },
  ({ theme: e4 }) => ({
    fontSize: e4.typography.size.s2 - 1,
    background: e4.background.content
  }),
  ({ bordered: e4, theme: t4 }) => e4 ? {
    borderRadius: `0 0 ${t4.appBorderRadius - 1}px ${t4.appBorderRadius - 1}px`
  } : {},
  ({ absolute: e4, bordered: t4 }) => e4 ? {
    height: `calc(100% - ${t4 ? 42 : 40}px)`,
    position: "absolute",
    left: 0 + (t4 ? 1 : 0),
    right: 0 + (t4 ? 1 : 0),
    bottom: 0 + (t4 ? 1 : 0),
    top: 40 + (t4 ? 1 : 0),
    overflow: "auto",
    [`& > *:first-child${aw}`]: {
      position: "absolute",
      left: 0 + (t4 ? 1 : 0),
      right: 0 + (t4 ? 1 : 0),
      bottom: 0 + (t4 ? 1 : 0),
      top: 0 + (t4 ? 1 : 0),
      height: `calc(100% - ${t4 ? 2 : 0}px)`,
      overflow: "auto"
    }
  } : {}
), cw = /* @__PURE__ */ o$1(({ active: e$1, render: t4, children: r4 }) => /* @__PURE__ */ e.createElement(d0, { active: e$1 }, t4 ? t4() : r4), "TabWrapper");
var b0 = class b02 extends reactExports.Component {
  constructor(t4) {
    super(t4), this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(t4, r4) {
    console.error("Error rendering addon panel"), console.error(t4), console.error(r4.componentStack);
  }
  render() {
    return this.state.hasError && this.props.active ? /* @__PURE__ */ e.createElement(
      Yo,
      {
        title: "This addon has errors",
        description: "Check your browser logs and addon code to pinpoint what went wrong. This issue was not caused by Storybook."
      }
    ) : this.props.children;
  }
};
o$1(b0, "TabErrorBoundary");
var m0 = b0, w0 = reactExports.memo(
  ({
    children: e$1,
    selected: t4 = null,
    actions: r4,
    absolute: n3 = false,
    bordered: a4 = false,
    tools: i4 = null,
    backgroundColor: c3,
    id: l4 = null,
    menuName: s4 = "Tabs",
    emptyState: u4,
    showToolsWhenEmpty: f4
  }) => {
    let d4 = reactExports.useMemo(
      () => ip(e$1).map((g2, w2) => ({
        ...g2,
        active: t4 ? g2.id === t4 : w2 === 0
      })),
      [e$1, t4]
    ), { visibleList: m2, tabBarRef: v2, tabRefs: y3, AddonTab: p3 } = sp(d4), h2 = u4 ?? /* @__PURE__ */ e.createElement(Yo, { title: "Nothing found" });
    return !f4 && d4.length === 0 ? h2 : (
      // @ts-expect-error (non strict)
      /* @__PURE__ */ e.createElement(iw, { absolute: n3, bordered: a4, id: l4 }, /* @__PURE__ */ e.createElement(Uo, {
        scrollable: false,
        border: true,
        backgroundColor: c3
      }, /* @__PURE__ */ e.createElement(v0, { style: { whiteSpace: "normal" }, ref: v2, role: "tablist" }, m2.map(({
        title: g2,
        id: w2,
        active: b3,
        color: x3
      }, E4) => {
        let R4 = `index-${E4}`;
        return /* @__PURE__ */ e.createElement(
          cr,
          {
            id: `tabbutton-${jn$1(w2) ?? R4}`,
            ref: (S4) => {
              y3.current.set(w2, S4);
            },
            className: `tabbutton ${b3 ? "tabbutton-active" : ""}`,
            type: "button",
            key: w2,
            active: b3,
            textColor: x3,
            onClick: (S4) => {
              S4.preventDefault(), r4.onSelect(w2);
            },
            role: "tab"
          },
          typeof g2 == "function" ? /* @__PURE__ */ e.createElement("title", null) : g2
        );
      }), /* @__PURE__ */ e.createElement(p3, { menuName: s4, actions: r4 })), i4), /* @__PURE__ */ e.createElement(lw, { id: "panel-tab-content", bordered: a4, absolute: n3 }, d4.length ? d4.map(({ id: g2, active: w2, render: b3 }) => /* @__PURE__ */ e.createElement(
        m0,
        { key: g2, active: w2 },
        e.createElement(b3, { active: w2 }, null)
      )) : h2))
    );
  }
);
w0.displayName = "Tabs";
var Zo = class Zo2 extends reactExports.Component {
  constructor(r4) {
    super(r4);
    this.handlers = {
      onSelect: /* @__PURE__ */ o$1((r6) => this.setState({ selected: r6 }), "onSelect")
    };
    this.state = {
      selected: r4.initial
    };
  }
  render() {
    let { bordered: r4 = false, absolute: n3 = false, children: a4, backgroundColor: i4, menuName: c3 } = this.props, { selected: l4 } = this.state;
    return /* @__PURE__ */ e.createElement(
      w0,
      {
        bordered: r4,
        absolute: n3,
        selected: l4,
        backgroundColor: i4,
        menuName: c3,
        actions: this.handlers
      },
      a4
    );
  }
};
o$1(Zo, "TabsState"), Zo.defaultProps = {
  children: [],
  // @ts-expect-error (non strict)
  initial: null,
  absolute: false,
  bordered: false,
  backgroundColor: "",
  // @ts-expect-error (non strict)
  menuName: void 0
};
var h0 = Zo;
var y0 = xr$3.span(
  ({ theme: e4 }) => ({
    width: 1,
    height: 20,
    background: e4.appBorderColor,
    marginLeft: 2,
    marginRight: 2
  }),
  ({ force: e4 }) => e4 ? {} : {
    "& + &": {
      display: "none"
    }
  }
);
y0.displayName = "Separator";
var fw = /* @__PURE__ */ o$1((e$1) => e$1.reduce(
  (t4, r4, n3) => r4 ? /* @__PURE__ */ e.createElement(reactExports.Fragment, { key: r4.id || r4.key || `f-${n3}` }, t4, n3 > 0 ? /* @__PURE__ */ e.createElement(y0, {
    key: `s-${n3}`
  }) : null, r4.render() || r4) : t4,
  null
), "interleaveSeparators");
var hw = /* @__PURE__ */ o$1((e4) => {
  let t4 = reactExports.useRef();
  return reactExports.useEffect(() => {
    t4.current = e4;
  }, [e4]), t4.current;
}, "usePrevious"), gw = /* @__PURE__ */ o$1((e4, t4) => {
  let r4 = hw(t4);
  return e4 ? t4 : r4;
}, "useUpdate"), vw = /* @__PURE__ */ o$1(({ active: e$1, children: t4 }) => (
  // the hidden attribute is an valid html element that's both accessible and works to visually hide content
  /* @__PURE__ */ e.createElement("div", { hidden: !e$1 }, gw(e$1, t4))
), "AddonPanel");
var ww = /* @__PURE__ */ o$1(({ alt: e$1, ...t4 }) => /* @__PURE__ */ e.createElement("svg", { width: "200px", height: "40px", viewBox: "0 0 200 40", ...t4, role: "img" }, e$1 ? /* @__PURE__ */ e.createElement("title", null, e$1) : null, /* @__PURE__ */ e.createElement("defs", null, /* @__PURE__ */ e.createElement(
  "path",
  {
    d: "M1.2 36.9L0 3.9c0-1.1.8-2 1.9-2.1l28-1.8a2 2 0 0 1 2.2 1.9 2 2 0 0 1 0 .1v36a2 2 0 0 1-2 2 2 2 0 0 1-.1 0L3.2 38.8a2 2 0 0 1-2-2z",
    id: "a"
  }
)), /* @__PURE__ */ e.createElement("g", { fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ e.createElement(
  "path",
  {
    d: "M53.3 31.7c-1.7 0-3.4-.3-5-.7-1.5-.5-2.8-1.1-3.9-2l1.6-3.5c2.2 1.5 4.6 2.3 7.3 2.3 1.5 0 2.5-.2 3.3-.7.7-.5 1.1-1 1.1-1.9 0-.7-.3-1.3-1-1.7s-2-.8-3.7-1.2c-2-.4-3.6-.9-4.8-1.5-1.1-.5-2-1.2-2.6-2-.5-1-.8-2-.8-3.2 0-1.4.4-2.6 1.2-3.6.7-1.1 1.8-2 3.2-2.6 1.3-.6 2.9-.9 4.7-.9 1.6 0 3.1.3 4.6.7 1.5.5 2.7 1.1 3.5 2l-1.6 3.5c-2-1.5-4.2-2.3-6.5-2.3-1.3 0-2.3.2-3 .8-.8.5-1.2 1.1-1.2 2 0 .5.2 1 .5 1.3.2.3.7.6 1.4.9l2.9.8c2.9.6 5 1.4 6.2 2.4a5 5 0 0 1 2 4.2 6 6 0 0 1-2.5 5c-1.7 1.2-4 1.9-7 1.9zm21-3.6l1.4-.1-.2 3.5-1.9.1c-2.4 0-4.1-.5-5.2-1.5-1.1-1-1.6-2.7-1.6-4.8v-6h-3v-3.6h3V11h4.8v4.6h4v3.6h-4v6c0 1.8.9 2.8 2.6 2.8zm11.1 3.5c-1.6 0-3-.3-4.3-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.3-1 1.7 0 3.2.3 4.4 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.4 1zm0-3.6c2.4 0 3.6-1.6 3.6-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.6-1c-2.3 0-3.5 1.4-3.5 4.4 0 3 1.2 4.6 3.5 4.6zm21.7-8.8l-2.7.3c-1.3.2-2.3.5-2.8 1.2-.6.6-.9 1.4-.9 2.5v8.2H96V15.7h4.6v2.6c.8-1.8 2.5-2.8 5-3h1.3l.3 4zm14-3.5h4.8L116.4 37h-4.9l3-6.6-6.4-14.8h5l4 10 4-10zm16-.4c1.4 0 2.6.3 3.6 1 1 .6 1.9 1.6 2.5 2.8.6 1.2.9 2.7.9 4.3 0 1.6-.3 3-1 4.3a6.9 6.9 0 0 1-2.4 2.9c-1 .7-2.2 1-3.6 1-1 0-2-.2-3-.7-.8-.4-1.5-1-2-1.9v2.4h-4.7V8.8h4.8v9c.5-.8 1.2-1.4 2-1.9.9-.4 1.8-.6 3-.6zM135.7 28c1.1 0 2-.4 2.6-1.2.6-.8 1-2 1-3.4 0-1.5-.4-2.5-1-3.3s-1.5-1.1-2.6-1.1-2 .3-2.6 1.1c-.6.8-1 2-1 3.3 0 1.5.4 2.6 1 3.4.6.8 1.5 1.2 2.6 1.2zm18.9 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.3 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm18 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.4 1a7 7 0 0 1 2.9 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm27.4 3.4h-6l-6-7v7h-4.8V8.8h4.9v13.6l5.8-6.7h5.7l-6.6 7.5 7 8.2z",
    fill: "currentColor"
  }
), /* @__PURE__ */ e.createElement("mask", { id: "b", fill: "#fff" }, /* @__PURE__ */ e.createElement("use", { xlinkHref: "#a" })), /* @__PURE__ */ e.createElement("use", { fill: "#FF4785", fillRule: "nonzero", xlinkHref: "#a" }), /* @__PURE__ */ e.createElement(
  "path",
  {
    d: "M23.7 5L24 .2l3.9-.3.1 4.8a.3.3 0 0 1-.5.2L26 3.8l-1.7 1.4a.3.3 0 0 1-.5-.3zm-5 10c0 .9 5.3.5 6 0 0-5.4-2.8-8.2-8-8.2-5.3 0-8.2 2.8-8.2 7.1 0 7.4 10 7.6 10 11.6 0 1.2-.5 1.9-1.8 1.9-1.6 0-2.2-.9-2.1-3.6 0-.6-6.1-.8-6.3 0-.5 6.7 3.7 8.6 8.5 8.6 4.6 0 8.3-2.5 8.3-7 0-7.9-10.2-7.7-10.2-11.6 0-1.6 1.2-1.8 2-1.8.6 0 2 0 1.9 3z",
    fill: "#FFF",
    fillRule: "nonzero",
    mask: "url(#b)"
  }
))), "StorybookLogo");
var bw = /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement("svg", { viewBox: "0 0 64 64", ...e$1 }, /* @__PURE__ */ e.createElement("title", null, "Storybook icon"), /* @__PURE__ */ e.createElement("g", { id: "Artboard", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ e.createElement(
  "path",
  {
    d: "M8.04798541,58.7875918 L6.07908839,6.32540407 C6.01406344,4.5927838 7.34257463,3.12440831 9.07303814,3.01625434 L53.6958037,0.227331489 C55.457209,0.117243658 56.974354,1.45590096 57.0844418,3.21730626 C57.0885895,3.28366922 57.0906648,3.35014546 57.0906648,3.41663791 L57.0906648,60.5834697 C57.0906648,62.3483119 55.6599776,63.7789992 53.8951354,63.7789992 C53.847325,63.7789992 53.7995207,63.7779262 53.7517585,63.775781 L11.0978899,61.8600599 C9.43669044,61.7854501 8.11034889,60.4492961 8.04798541,58.7875918 Z",
    id: "path-1",
    fill: "#FF4785",
    fillRule: "nonzero"
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    d: "M35.9095005,24.1768792 C35.9095005,25.420127 44.2838488,24.8242707 45.4080313,23.9509748 C45.4080313,15.4847538 40.8652557,11.0358878 32.5466666,11.0358878 C24.2280775,11.0358878 19.5673077,15.553972 19.5673077,22.3311017 C19.5673077,34.1346028 35.4965208,34.3605071 35.4965208,40.7987804 C35.4965208,42.606015 34.6115646,43.6790606 32.6646607,43.6790606 C30.127786,43.6790606 29.1248356,42.3834613 29.2428298,37.9783269 C29.2428298,37.0226907 19.5673077,36.7247626 19.2723223,37.9783269 C18.5211693,48.6535354 25.1720308,51.7326752 32.7826549,51.7326752 C40.1572906,51.7326752 45.939005,47.8018145 45.939005,40.6858282 C45.939005,28.035186 29.7738035,28.3740425 29.7738035,22.1051974 C29.7738035,19.5637737 31.6617103,19.2249173 32.7826549,19.2249173 C33.9625966,19.2249173 36.0864917,19.4328883 35.9095005,24.1768792 Z",
    id: "path9_fill-path",
    fill: "#FFFFFF",
    fillRule: "nonzero"
  }
), /* @__PURE__ */ e.createElement(
  "path",
  {
    d: "M44.0461638,0.830433986 L50.1874092,0.446606143 L50.443532,7.7810017 C50.4527198,8.04410717 50.2468789,8.26484453 49.9837734,8.27403237 C49.871115,8.27796649 49.7607078,8.24184808 49.6721567,8.17209069 L47.3089847,6.3104681 L44.5110468,8.43287463 C44.3012992,8.591981 44.0022839,8.55092814 43.8431776,8.34118051 C43.7762017,8.25288717 43.742082,8.14401677 43.7466857,8.03329059 L44.0461638,0.830433986 Z",
    id: "Path",
    fill: "#FFFFFF"
  }
))), "StorybookIcon");
var dp = Ee$3`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;
var xw = xr$3.div(({ size: e4 = 32 }) => ({
  borderRadius: "50%",
  cursor: "progress",
  display: "inline-block",
  overflow: "hidden",
  position: "absolute",
  transition: "all 200ms ease-out",
  verticalAlign: "top",
  top: "50%",
  left: "50%",
  marginTop: -(e4 / 2),
  marginLeft: -(e4 / 2),
  height: e4,
  width: e4,
  zIndex: 4,
  borderWidth: 2,
  borderStyle: "solid",
  borderColor: "rgba(97, 97, 97, 0.29)",
  borderTopColor: "rgb(100,100,100)",
  animation: `${dp} 0.7s linear infinite`,
  mixBlendMode: "difference"
})), pp = xr$3.div({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%"
}), Ew = xr$3.div(({ theme: e4 }) => ({
  position: "relative",
  width: "80%",
  marginBottom: "0.75rem",
  maxWidth: 300,
  height: 5,
  borderRadius: 5,
  background: ye$1(0.8, e4.color.secondary),
  overflow: "hidden",
  cursor: "progress"
})), Sw = xr$3.div(({ theme: e4 }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  background: e4.color.secondary
})), mp = xr$3.div(({ theme: e4 }) => ({
  minHeight: "2em",
  fontSize: `${e4.typography.size.s1}px`,
  color: e4.textMutedColor
})), Cw = xr$3(G5)(({ theme: e4 }) => ({
  width: 20,
  height: 20,
  marginBottom: "0.5rem",
  color: e4.textMutedColor
})), Mw = Ee$3`
  from { content: "..." }
  33% { content: "." }
  66% { content: ".." }
  to { content: "..." }
`, Aw = xr$3.span({
  "&::after": {
    content: "'...'",
    animation: `${Mw} 1s linear infinite`,
    animationDelay: "1s",
    display: "inline-block",
    width: "1em",
    height: "auto"
  }
}), Lw = /* @__PURE__ */ o$1(({ progress: e$1, error: t4, size: r4, ...n3 }) => {
  if (t4)
    return /* @__PURE__ */ e.createElement(pp, { "aria-label": t4.toString(), "aria-live": "polite", role: "status", ...n3 }, /* @__PURE__ */ e.createElement(Cw, null), /* @__PURE__ */ e.createElement(mp, null, t4.message));
  if (e$1) {
    let { value: a4, modules: i4 } = e$1, { message: c3 } = e$1;
    return i4 && (c3 += ` ${i4.complete} / ${i4.total} modules`), /* @__PURE__ */ e.createElement(
      pp,
      {
        "aria-label": "Content is loading...",
        "aria-live": "polite",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": a4 * 100,
        "aria-valuetext": c3,
        role: "progressbar",
        ...n3
      },
      /* @__PURE__ */ e.createElement(Ew, null, /* @__PURE__ */ e.createElement(Sw, { style: { width: `${a4 * 100}%` } })),
      /* @__PURE__ */ e.createElement(mp, null, c3, a4 < 1 && /* @__PURE__ */ e.createElement(Aw, { key: c3 }))
    );
  }
  return /* @__PURE__ */ e.createElement(
    xw,
    {
      "aria-label": "Content is loading...",
      "aria-live": "polite",
      role: "status",
      size: r4,
      ...n3
    }
  );
}, "Loader");
var R0 = "http://www.w3.org/2000/svg", zw = Ee$3({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), hp = xr$3.div(({ size: e4 }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  minWidth: e4,
  minHeight: e4
})), x0 = xr$3.svg(
  ({ size: e4, width: t4 }) => ({
    position: "absolute",
    width: `${e4}px!important`,
    height: `${e4}px!important`,
    transform: "rotate(-90deg)",
    circle: {
      r: (e4 - Math.ceil(t4)) / 2,
      cx: e4 / 2,
      cy: e4 / 2,
      opacity: 0.15,
      fill: "transparent",
      stroke: "currentColor",
      strokeWidth: t4,
      strokeLinecap: "round",
      strokeDasharray: Math.PI * (e4 - Math.ceil(t4))
    }
  }),
  ({ progress: e4 }) => e4 && {
    circle: {
      opacity: 0.75
    }
  },
  ({ spinner: e4 }) => e4 && {
    animation: `${zw} 1s linear infinite`,
    circle: {
      opacity: 0.25
    }
  }
), Tw = /* @__PURE__ */ o$1(({
  percentage: e$1 = void 0,
  running: t4 = true,
  size: r4 = 24,
  width: n3 = 1.5,
  children: a4 = null,
  ...i4
}) => typeof e$1 == "number" ? /* @__PURE__ */ e.createElement(hp, { size: r4, ...i4 }, a4, /* @__PURE__ */ e.createElement(x0, {
  size: r4,
  width: n3,
  xmlns: R0
}, /* @__PURE__ */ e.createElement("circle", null)), t4 && /* @__PURE__ */ e.createElement(
  x0,
  { size: r4, width: n3, xmlns: R0, spinner: true },
  /* @__PURE__ */ e.createElement("circle", { strokeDashoffset: Math.PI * (r4 - Math.ceil(n3)) * (1 - e$1 / 100) })
), /* @__PURE__ */ e.createElement(
  x0,
  { size: r4, width: n3, xmlns: R0, progress: true },
  /* @__PURE__ */ e.createElement("circle", { strokeDashoffset: Math.PI * (r4 - Math.ceil(
    n3
  )) * (1 - e$1 / 100) })
)) : /* @__PURE__ */ e.createElement(hp, { size: r4, ...i4 }, a4), "ProgressSpinner");
function Hw(e4) {
  let t4 = {}, r4 = e4.split("&");
  for (let n3 = 0; n3 < r4.length; n3++) {
    let a4 = r4[n3].split("=");
    t4[decodeURIComponent(a4[0])] = decodeURIComponent(a4[1] || "");
  }
  return t4;
}
o$1(Hw, "parseQuery");
var Pw = /* @__PURE__ */ o$1((e4, t4, r4 = {}) => {
  let [n3, a4] = e4.split("?"), i4 = a4 ? {
    ...Hw(a4),
    ...r4,
    id: t4
  } : {
    ...r4,
    id: t4
  };
  return `${n3}?${Object.entries(i4).map((c3) => `${c3[0]}=${c3[1]}`).join("&")}`;
}, "getStoryHref");
var Nw = xr$3.pre`
  line-height: 18px;
  padding: 11px 1rem;
  white-space: pre-wrap;
  background: rgba(0, 0, 0, 0.05);
  color: ${h$1.darkest};
  border-radius: 3px;
  margin: 1rem 0;
  width: 100%;
  display: block;
  overflow: hidden;
  font-family: ${W$3.fonts.mono};
  font-size: ${W$3.size.s2 - 1}px;
`, Fw = /* @__PURE__ */ o$1(({ code: e$1, ...t4 }) => /* @__PURE__ */ e.createElement(Nw, { id: "clipboard-code", ...t4 }, e$1), "ClipboardCode");
var qO = Ai, Vw = {};
Object.keys(Ai).forEach((e4) => {
  Vw[e4] = reactExports.forwardRef((t4, r4) => reactExports.createElement(e4, { ...t4, ref: r4 }));
});
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  A: ia,
  get ActionBar() {
    return Za;
  },
  AddonPanel: vw,
  Badge: Jh,
  Bar: f0,
  Blockquote: la,
  Button: Hr,
  ClipboardCode: Fw,
  Code: ci,
  DL: si,
  Div: ui,
  DocumentWrapper: ag,
  EmptyTabContent: Yo,
  ErrorFormatter: H3,
  FlexBar: Uo,
  Form: d7,
  H1: fi,
  H2: di,
  H3: pi,
  H4: mi,
  H5: hi,
  H6: gi,
  HR: vi,
  IconButton: So,
  Img: wi,
  LI: bi,
  Link: Ii,
  ListItem: l0,
  Loader: Lw,
  Modal: r3,
  OL: yi,
  P: Ri,
  Placeholder: d3,
  Pre: xi,
  ProgressSpinner: Tw,
  ResetWrapper: W0,
  get ScrollArea() {
    return Er;
  },
  Separator: y0,
  Spaced: l3,
  Span: Ei,
  StorybookIcon: bw,
  StorybookLogo: ww,
  SyntaxHighlighter: nu,
  TT: Si,
  TabBar: v0,
  TabButton: cr,
  TabWrapper: cw,
  Table: Ci,
  Tabs: w0,
  TabsState: h0,
  TooltipLinkList: c0,
  TooltipMessage: w6,
  TooltipNote: x6,
  UL: Mi,
  WithTooltip: u6,
  WithTooltipPure: d6,
  Zoom: E3,
  codeCommon: lt,
  components: qO,
  createCopyToClipboardFunction: ii,
  getStoryHref: Pw,
  interleaveSeparators: fw,
  nameSpaceClassNames: J$1,
  resetComponents: Vw,
  withReset: N$1
}, Symbol.toStringTag, { value: "Module" }));
var ZoomIcon = /* @__PURE__ */ reactExports.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M6 3.5a.5.5 0 01.5.5v1.5H8a.5.5 0 010 1H6.5V8a.5.5 0 01-1 0V6.5H4a.5.5 0 010-1h1.5V4a.5.5 0 01.5-.5z",
        fill: color
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M9.544 10.206a5.5 5.5 0 11.662-.662.5.5 0 01.148.102l3 3a.5.5 0 01-.708.708l-3-3a.5.5 0 01-.102-.148zM10.5 6a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z",
        fill: color
      }
    )
  );
});
var ZoomOutIcon = /* @__PURE__ */ reactExports.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement("path", { d: "M4 5.5a.5.5 0 000 1h4a.5.5 0 000-1H4z", fill: color }),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M6 11.5c1.35 0 2.587-.487 3.544-1.294a.5.5 0 00.102.148l3 3a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.148-.102A5.5 5.5 0 106 11.5zm0-1a4.5 4.5 0 100-9 4.5 4.5 0 000 9z",
        fill: color
      }
    )
  );
});
var ZoomResetIcon = /* @__PURE__ */ reactExports.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M1.5 2.837V1.5a.5.5 0 00-1 0V4a.5.5 0 00.5.5h2.5a.5.5 0 000-1H2.258a4.5 4.5 0 11-.496 4.016.5.5 0 10-.942.337 5.502 5.502 0 008.724 2.353.5.5 0 00.102.148l3 3a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.148-.102A5.5 5.5 0 101.5 2.837z",
        fill: color
      }
    )
  );
});
var EyeIcon = /* @__PURE__ */ reactExports.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement("path", { d: "M7 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z", fill: color }),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7l-.21.293C13.669 7.465 10.739 11.5 7 11.5S.332 7.465.21 7.293L0 7l.21-.293C.331 6.536 3.261 2.5 7 2.5s6.668 4.036 6.79 4.207L14 7zM2.896 5.302A12.725 12.725 0 001.245 7c.296.37.874 1.04 1.65 1.698C4.043 9.67 5.482 10.5 7 10.5c1.518 0 2.958-.83 4.104-1.802A12.72 12.72 0 0012.755 7c-.297-.37-.875-1.04-1.65-1.698C9.957 4.33 8.517 3.5 7 3.5c-1.519 0-2.958.83-4.104 1.802z",
        fill: color
      }
    )
  );
});
var EyeCloseIcon = /* @__PURE__ */ reactExports.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.708-.708l-11-11zM11.104 8.698c-.177.15-.362.298-.553.439l.714.714a13.25 13.25 0 002.526-2.558L14 7l-.21-.293C13.669 6.536 10.739 2.5 7 2.5c-.89 0-1.735.229-2.506.58l.764.763A4.859 4.859 0 017 3.5c1.518 0 2.958.83 4.104 1.802A12.724 12.724 0 0112.755 7a12.72 12.72 0 01-1.65 1.698zM.21 6.707c.069-.096 1.03-1.42 2.525-2.558l.714.714c-.191.141-.376.288-.553.439A12.725 12.725 0 001.245 7c.296.37.874 1.04 1.65 1.698C4.043 9.67 5.482 10.5 7 10.5a4.86 4.86 0 001.742-.344l.764.764c-.772.351-1.616.58-2.506.58C3.262 11.5.332 7.465.21 7.293L0 7l.21-.293z",
        fill: color
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M4.5 7c0-.322.061-.63.172-.914l3.242 3.242A2.5 2.5 0 014.5 7zM9.328 7.914L6.086 4.672a2.5 2.5 0 013.241 3.241z",
        fill: color
      }
    )
  );
});
var DocumentIcon = /* @__PURE__ */ reactExports.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M4 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM4.5 7.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM4 10.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z",
        fill: color
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.5 0a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V3.207a.5.5 0 00-.146-.353L10.146.146A.5.5 0 009.793 0H1.5zM2 1h7.5v2a.5.5 0 00.5.5h2V13H2V1z",
        fill: color
      }
    )
  );
});
var MarkupIcon = /* @__PURE__ */ reactExports.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M8.982 1.632a.5.5 0 00-.964-.263l-3 11a.5.5 0 10.964.263l3-11zM3.32 3.616a.5.5 0 01.064.704L1.151 7l2.233 2.68a.5.5 0 11-.768.64l-2.5-3a.5.5 0 010-.64l2.5-3a.5.5 0 01.704-.064zM10.68 3.616a.5.5 0 00-.064.704L12.849 7l-2.233 2.68a.5.5 0 00.768.64l2.5-3a.5.5 0 000-.64l-2.5-3a.5.5 0 00-.704-.064z",
        fill: color
      }
    )
  );
});
var AddIcon = /* @__PURE__ */ reactExports.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M7 3a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 017 3z",
        fill: color
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
        fill: color
      }
    )
  );
});
var SubtractIcon = /* @__PURE__ */ reactExports.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement("path", { d: "M3.5 6.5a.5.5 0 000 1h7a.5.5 0 000-1h-7z", fill: color }),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
        fill: color
      }
    )
  );
});
var LinkIcon = /* @__PURE__ */ reactExports.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M11.841 2.159a2.25 2.25 0 00-3.182 0l-2.5 2.5a2.25 2.25 0 000 3.182.5.5 0 01-.707.707 3.25 3.25 0 010-4.596l2.5-2.5a3.25 3.25 0 014.596 4.596l-2.063 2.063a4.27 4.27 0 00-.094-1.32l1.45-1.45a2.25 2.25 0 000-3.182z",
        fill: color
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M3.61 7.21c-.1-.434-.132-.88-.095-1.321L1.452 7.952a3.25 3.25 0 104.596 4.596l2.5-2.5a3.25 3.25 0 000-4.596.5.5 0 00-.707.707 2.25 2.25 0 010 3.182l-2.5 2.5A2.25 2.25 0 112.159 8.66l1.45-1.45z",
        fill: color
      }
    )
  );
});
var ChevronDownIcon$1 = /* @__PURE__ */ reactExports.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M1.146 4.604l5.5 5.5a.5.5 0 00.708 0l5.5-5.5a.5.5 0 00-.708-.708L7 9.043 1.854 3.896a.5.5 0 10-.708.708z",
        fill: color
      }
    )
  );
});
var ChevronRightIcon = /* @__PURE__ */ reactExports.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M11.104 7.354l-5.5 5.5a.5.5 0 01-.708-.708L10.043 7 4.896 1.854a.5.5 0 11.708-.708l5.5 5.5a.5.5 0 010 .708z",
        fill: color
      }
    )
  );
});
var ChevronSmallUpIcon = /* @__PURE__ */ reactExports.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M3.854 9.104a.5.5 0 11-.708-.708l3.5-3.5a.5.5 0 01.708 0l3.5 3.5a.5.5 0 01-.708.708L7 5.957 3.854 9.104z",
        fill: color
      }
    )
  );
});
var ChevronSmallDownIcon = /* @__PURE__ */ reactExports.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M3.854 4.896a.5.5 0 10-.708.708l3.5 3.5a.5.5 0 00.708 0l3.5-3.5a.5.5 0 00-.708-.708L7 8.043 3.854 4.896z",
        fill: color
      }
    )
  );
});
var UndoIcon = /* @__PURE__ */ reactExports.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: forwardedRef,
      ...props
    },
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        d: "M1.146 3.854a.5.5 0 010-.708l2-2a.5.5 0 11.708.708L2.707 3h6.295A4 4 0 019 11H3a.5.5 0 010-1h6a3 3 0 100-6H2.707l1.147 1.146a.5.5 0 11-.708.708l-2-2z",
        fill: color
      }
    )
  );
});
function dedent(templ) {
  var values = [];
  for (var _i2 = 1; _i2 < arguments.length; _i2++) {
    values[_i2 - 1] = arguments[_i2];
  }
  var strings = Array.from(typeof templ === "string" ? [templ] : templ);
  strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var indentLengths = strings.reduce(function(arr, str) {
    var matches = str.match(/\n([\t ]+|(?!\s).)/g);
    if (matches) {
      return arr.concat(matches.map(function(match) {
        var _a2, _b2;
        return (_b2 = (_a2 = match.match(/[\t ]/g)) === null || _a2 === void 0 ? void 0 : _a2.length) !== null && _b2 !== void 0 ? _b2 : 0;
      }));
    }
    return arr;
  }, []);
  if (indentLengths.length) {
    var pattern_1 = new RegExp("\n[	 ]{" + Math.min.apply(Math, indentLengths) + "}", "g");
    strings = strings.map(function(str) {
      return str.replace(pattern_1, "\n");
    });
  }
  strings[0] = strings[0].replace(/^\r?\n/, "");
  var string = strings[0];
  values.forEach(function(value2, i4) {
    var endentations = string.match(/(?:^|\n)( *)$/);
    var endentation = endentations ? endentations[1] : "";
    var indentedValue = value2;
    if (typeof value2 === "string" && value2.includes("\n")) {
      indentedValue = String(value2).split("\n").map(function(str, i5) {
        return i5 === 0 ? str : "" + endentation + str;
      }).join("\n");
    }
    string += indentedValue + strings[i4 + 1];
  });
  return string;
}
const { deprecate, once, logger } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
const { NAVIGATE_URL, STORY_ARGS_UPDATED, UPDATE_STORY_ARGS, RESET_STORY_ARGS, GLOBALS_UPDATED } = __STORYBOOK_MODULE_CORE_EVENTS__;
const { filterArgTypes, composeConfigs, Preview: Preview$1, DocsContext: DocsContext$1 } = __STORYBOOK_MODULE_PREVIEW_API__;
const { Channel } = __STORYBOOK_MODULE_CHANNELS__;
var require_memoizerific = __commonJS({ "../../node_modules/memoizerific/memoizerific.js"(exports$1, module) {
  (function(f22) {
    if (typeof exports$1 == "object" && typeof module < "u") module.exports = f22();
    else if (typeof define == "function" && define.amd) define([], f22);
    else {
      var g2;
      typeof window < "u" ? g2 = window : typeof global < "u" ? g2 = global : typeof self < "u" ? g2 = self : g2 = this, g2.memoizerific = f22();
    }
  })(function() {
    return function e22(t22, n22, r22) {
      function s22(o3, u22) {
        if (!n22[o3]) {
          if (!t22[o3]) {
            var a22 = typeof __require == "function" && __require;
            if (!u22 && a22) return a22(o3, true);
            if (i22) return i22(o3, true);
            var f22 = new Error("Cannot find module '" + o3 + "'");
            throw f22.code = "MODULE_NOT_FOUND", f22;
          }
          var l22 = n22[o3] = { exports: {} };
          t22[o3][0].call(l22.exports, function(e32) {
            var n3 = t22[o3][1][e32];
            return s22(n3 || e32);
          }, l22, l22.exports, e22, t22, n22, r22);
        }
        return n22[o3].exports;
      }
      for (var i22 = typeof __require == "function" && __require, o22 = 0; o22 < r22.length; o22++) s22(r22[o22]);
      return s22;
    }({ 1: [function(_dereq_, module3, exports3) {
      module3.exports = function(forceSimilar) {
        if (typeof Map != "function" || forceSimilar) {
          var Similar = _dereq_("./similar");
          return new Similar();
        } else return /* @__PURE__ */ new Map();
      };
    }, { "./similar": 2 }], 2: [function(_dereq_, module3, exports3) {
      function Similar() {
        return this.list = [], this.lastItem = void 0, this.size = 0, this;
      }
      Similar.prototype.get = function(key) {
        var index2;
        if (this.lastItem && this.isEqual(this.lastItem.key, key)) return this.lastItem.val;
        if (index2 = this.indexOf(key), index2 >= 0) return this.lastItem = this.list[index2], this.list[index2].val;
      }, Similar.prototype.set = function(key, val) {
        var index2;
        return this.lastItem && this.isEqual(this.lastItem.key, key) ? (this.lastItem.val = val, this) : (index2 = this.indexOf(key), index2 >= 0 ? (this.lastItem = this.list[index2], this.list[index2].val = val, this) : (this.lastItem = { key, val }, this.list.push(this.lastItem), this.size++, this));
      }, Similar.prototype.delete = function(key) {
        var index2;
        if (this.lastItem && this.isEqual(this.lastItem.key, key) && (this.lastItem = void 0), index2 = this.indexOf(key), index2 >= 0) return this.size--, this.list.splice(index2, 1)[0];
      }, Similar.prototype.has = function(key) {
        var index2;
        return this.lastItem && this.isEqual(this.lastItem.key, key) ? true : (index2 = this.indexOf(key), index2 >= 0 ? (this.lastItem = this.list[index2], true) : false);
      }, Similar.prototype.forEach = function(callback, thisArg) {
        var i22;
        for (i22 = 0; i22 < this.size; i22++) callback.call(thisArg || this, this.list[i22].val, this.list[i22].key, this);
      }, Similar.prototype.indexOf = function(key) {
        var i22;
        for (i22 = 0; i22 < this.size; i22++) if (this.isEqual(this.list[i22].key, key)) return i22;
        return -1;
      }, Similar.prototype.isEqual = function(val1, val2) {
        return val1 === val2 || val1 !== val1 && val2 !== val2;
      }, module3.exports = Similar;
    }, {}], 3: [function(_dereq_, module3, exports3) {
      var MapOrSimilar = _dereq_("map-or-similar");
      module3.exports = function(limit) {
        var cache = new MapOrSimilar(false), lru = [];
        return function(fn2) {
          var memoizerific = function() {
            var currentCache = cache, newMap, fnResult, argsLengthMinusOne = arguments.length - 1, lruPath = Array(argsLengthMinusOne + 1), isMemoized = true, i22;
            if ((memoizerific.numArgs || memoizerific.numArgs === 0) && memoizerific.numArgs !== argsLengthMinusOne + 1) throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (i22 = 0; i22 < argsLengthMinusOne; i22++) {
              if (lruPath[i22] = { cacheItem: currentCache, arg: arguments[i22] }, currentCache.has(arguments[i22])) {
                currentCache = currentCache.get(arguments[i22]);
                continue;
              }
              isMemoized = false, newMap = new MapOrSimilar(false), currentCache.set(arguments[i22], newMap), currentCache = newMap;
            }
            return isMemoized && (currentCache.has(arguments[argsLengthMinusOne]) ? fnResult = currentCache.get(arguments[argsLengthMinusOne]) : isMemoized = false), isMemoized || (fnResult = fn2.apply(null, arguments), currentCache.set(arguments[argsLengthMinusOne], fnResult)), limit > 0 && (lruPath[argsLengthMinusOne] = { cacheItem: currentCache, arg: arguments[argsLengthMinusOne] }, isMemoized ? moveToMostRecentLru(lru, lruPath) : lru.push(lruPath), lru.length > limit && removeCachedResult(lru.shift())), memoizerific.wasMemoized = isMemoized, memoizerific.numArgs = argsLengthMinusOne + 1, fnResult;
          };
          return memoizerific.limit = limit, memoizerific.wasMemoized = false, memoizerific.cache = cache, memoizerific.lru = lru, memoizerific;
        };
      };
      function moveToMostRecentLru(lru, lruPath) {
        var lruLen = lru.length, lruPathLen = lruPath.length, isMatch, i22, ii2;
        for (i22 = 0; i22 < lruLen; i22++) {
          for (isMatch = true, ii2 = 0; ii2 < lruPathLen; ii2++) if (!isEqual(lru[i22][ii2].arg, lruPath[ii2].arg)) {
            isMatch = false;
            break;
          }
          if (isMatch) break;
        }
        lru.push(lru.splice(i22, 1)[0]);
      }
      function removeCachedResult(removedLru) {
        var removedLruLen = removedLru.length, currentLru = removedLru[removedLruLen - 1], tmp, i22;
        for (currentLru.cacheItem.delete(currentLru.arg), i22 = removedLruLen - 2; i22 >= 0 && (currentLru = removedLru[i22], tmp = currentLru.cacheItem.get(currentLru.arg), !tmp || !tmp.size); i22--) currentLru.cacheItem.delete(currentLru.arg);
      }
      function isEqual(val1, val2) {
        return val1 === val2 || val1 !== val1 && val2 !== val2;
      }
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
} });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n22) {
    for (var e22 = 1; e22 < arguments.length; e22++) {
      var t22 = arguments[e22];
      for (var r22 in t22) ({}).hasOwnProperty.call(t22, r22) && (n22[r22] = t22[r22]);
    }
    return n22;
  }, _extends.apply(null, arguments);
}
function _assertThisInitialized(e22) {
  if (e22 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e22;
}
function _setPrototypeOf(t22, e22) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t32, e32) {
    return t32.__proto__ = e32, t32;
  }, _setPrototypeOf(t22, e22);
}
function _inheritsLoose(t22, o22) {
  t22.prototype = Object.create(o22.prototype), t22.prototype.constructor = t22, _setPrototypeOf(t22, o22);
}
function _getPrototypeOf(t22) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t32) {
    return t32.__proto__ || Object.getPrototypeOf(t32);
  }, _getPrototypeOf(t22);
}
function _isNativeFunction(t22) {
  try {
    return Function.toString.call(t22).indexOf("[native code]") !== -1;
  } catch {
    return typeof t22 == "function";
  }
}
function _isNativeReflectConstruct() {
  try {
    var t22 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (_isNativeReflectConstruct = function() {
    return !!t22;
  })();
}
function _construct(t22, e22, r22) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o22 = [null];
  o22.push.apply(o22, e22);
  var p22 = new (t22.bind.apply(t22, o22))();
  return r22 && _setPrototypeOf(p22, r22.prototype), p22;
}
function _wrapNativeSuper(t22) {
  var r22 = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper = function(t32) {
    if (t32 === null || !_isNativeFunction(t32)) return t32;
    if (typeof t32 != "function") throw new TypeError("Super expression must either be null or a function");
    if (r22 !== void 0) {
      if (r22.has(t32)) return r22.get(t32);
      r22.set(t32, Wrapper11);
    }
    function Wrapper11() {
      return _construct(t32, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper11.prototype = Object.create(t32.prototype, { constructor: { value: Wrapper11, enumerable: false, writable: true, configurable: true } }), _setPrototypeOf(Wrapper11, t32);
  }, _wrapNativeSuper(t22);
}
var ERRORS = { 1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`, 2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`, 3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`, 4: `Couldn't generate valid rgb string from %s, it returned %s.

`, 5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`, 6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`, 7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`, 8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`, 9: `Please provide a number of steps to the modularScale helper.

`, 10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`, 11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`, 12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`, 13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`, 14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`, 15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`, 16: `You must provide a template to this method.

`, 17: `You passed an unsupported selector state to this method.

`, 18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`, 19: `fromSize and toSize must be provided as stringified numbers with the same units.

`, 20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`, 21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n", 22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n", 23: `fontFace expects a name of a font-family.

`, 24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`, 25: `fontFace expects localFonts to be an array.

`, 26: `fontFace expects fileFormats to be an array.

`, 27: `radialGradient requries at least 2 color-stops to properly render.

`, 28: `Please supply a filename to retinaImage() as the first argument.

`, 29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`, 30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n", 31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`, 32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`, 33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`, 34: `borderRadius expects a radius value as a string or number as the second argument.

`, 35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`, 36: `Property must be a string value.

`, 37: `Syntax Error at %s.

`, 38: `Formula contains a function that needs parentheses at %s.

`, 39: `Formula is missing closing parenthesis at %s.

`, 40: `Formula has too many closing parentheses at %s.

`, 41: `All values in a formula must have the same unit or be unitless.

`, 42: `Please provide a number of steps to the modularScale helper.

`, 43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`, 44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`, 45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`, 46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`, 47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`, 48: `fromSize and toSize must be provided as stringified numbers with the same units.

`, 49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`, 50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`, 51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`, 52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`, 53: `fontFace expects localFonts to be an array.

`, 54: `fontFace expects fileFormats to be an array.

`, 55: `fontFace expects a name of a font-family.

`, 56: `linearGradient requries at least 2 color-stops to properly render.

`, 57: `radialGradient requries at least 2 color-stops to properly render.

`, 58: `Please supply a filename to retinaImage() as the first argument.

`, 59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`, 60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n", 61: `Property must be a string value.

`, 62: `borderRadius expects a radius value as a string or number as the second argument.

`, 63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`, 64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`, 65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`, 66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`, 67: `You must provide a template to this method.

`, 68: `You passed an unsupported selector state to this method.

`, 69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`, 70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`, 71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`, 72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`, 73: `Please provide a valid CSS variable.

`, 74: `CSS variable not found and no default was provided.

`, 75: `important requires a valid style object, got a %s instead.

`, 76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`, 77: `remToPx expects a value in "rem" but you provided it in "%s".

`, 78: `base must be set in "px" or "%" but you set it in "%s".
` };
function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
  var a22 = args[0], b22 = [], c22;
  for (c22 = 1; c22 < args.length; c22 += 1) b22.push(args[c22]);
  return b22.forEach(function(d22) {
    a22 = a22.replace(/%[a-z]/, d22);
  }), a22;
}
var PolishedError = function(_Error) {
  _inheritsLoose(PolishedError2, _Error);
  function PolishedError2(code) {
    for (var _this, _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) args[_key2 - 1] = arguments[_key2];
    return _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) || this, _assertThisInitialized(_this);
  }
  return PolishedError2;
}(_wrapNativeSuper(Error));
function colorToInt(color) {
  return Math.round(color * 255);
}
function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}
function hslToRgb(hue, saturation, lightness, convert2) {
  if (convert2 === void 0 && (convert2 = convertToInt), saturation === 0) return convert2(lightness, lightness, lightness);
  var huePrime = (hue % 360 + 360) % 360 / 60, chroma = (1 - Math.abs(2 * lightness - 1)) * saturation, secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1)), red = 0, green = 0, blue = 0;
  huePrime >= 0 && huePrime < 1 ? (red = chroma, green = secondComponent) : huePrime >= 1 && huePrime < 2 ? (red = secondComponent, green = chroma) : huePrime >= 2 && huePrime < 3 ? (green = chroma, blue = secondComponent) : huePrime >= 3 && huePrime < 4 ? (green = secondComponent, blue = chroma) : huePrime >= 4 && huePrime < 5 ? (red = secondComponent, blue = chroma) : huePrime >= 5 && huePrime < 6 && (red = chroma, blue = secondComponent);
  var lightnessModification = lightness - chroma / 2, finalRed = red + lightnessModification, finalGreen = green + lightnessModification, finalBlue = blue + lightnessModification;
  return convert2(finalRed, finalGreen, finalBlue);
}
var namedColorMap = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "639", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" };
function nameToHex(color) {
  if (typeof color != "string") return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}
var hexRegex = /^#[a-fA-F0-9]{6}$/, hexRgbaRegex = /^#[a-fA-F0-9]{8}$/, reducedHexRegex = /^#[a-fA-F0-9]{3}$/, reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/, rgbRegex = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, rgbaRegex = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, hslaRegex = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function parseToRgb(color) {
  if (typeof color != "string") throw new PolishedError(3);
  var normalizedColor = nameToHex(color);
  if (normalizedColor.match(hexRegex)) return { red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16), green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16), blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16) };
  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return { red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16), green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16), blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16), alpha };
  }
  if (normalizedColor.match(reducedHexRegex)) return { red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16), green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16), blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16) };
  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));
    return { red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16), green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16), blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16), alpha: _alpha };
  }
  var rgbMatched = rgbRegex.exec(normalizedColor);
  if (rgbMatched) return { red: parseInt("" + rgbMatched[1], 10), green: parseInt("" + rgbMatched[2], 10), blue: parseInt("" + rgbMatched[3], 10) };
  var rgbaMatched = rgbaRegex.exec(normalizedColor.substring(0, 50));
  if (rgbaMatched) return { red: parseInt("" + rgbaMatched[1], 10), green: parseInt("" + rgbaMatched[2], 10), blue: parseInt("" + rgbaMatched[3], 10), alpha: parseFloat("" + rgbaMatched[4]) > 1 ? parseFloat("" + rgbaMatched[4]) / 100 : parseFloat("" + rgbaMatched[4]) };
  var hslMatched = hslRegex.exec(normalizedColor);
  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10), saturation = parseInt("" + hslMatched[2], 10) / 100, lightness = parseInt("" + hslMatched[3], 10) / 100, rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")", hslRgbMatched = rgbRegex.exec(rgbColorString);
    if (!hslRgbMatched) throw new PolishedError(4, normalizedColor, rgbColorString);
    return { red: parseInt("" + hslRgbMatched[1], 10), green: parseInt("" + hslRgbMatched[2], 10), blue: parseInt("" + hslRgbMatched[3], 10) };
  }
  var hslaMatched = hslaRegex.exec(normalizedColor.substring(0, 50));
  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10), _saturation = parseInt("" + hslaMatched[2], 10) / 100, _lightness = parseInt("" + hslaMatched[3], 10) / 100, _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")", _hslRgbMatched = rgbRegex.exec(_rgbColorString);
    if (!_hslRgbMatched) throw new PolishedError(4, normalizedColor, _rgbColorString);
    return { red: parseInt("" + _hslRgbMatched[1], 10), green: parseInt("" + _hslRgbMatched[2], 10), blue: parseInt("" + _hslRgbMatched[3], 10), alpha: parseFloat("" + hslaMatched[4]) > 1 ? parseFloat("" + hslaMatched[4]) / 100 : parseFloat("" + hslaMatched[4]) };
  }
  throw new PolishedError(5);
}
function rgbToHsl(color) {
  var red = color.red / 255, green = color.green / 255, blue = color.blue / 255, max = Math.max(red, green, blue), min = Math.min(red, green, blue), lightness = (max + min) / 2;
  if (max === min) return color.alpha !== void 0 ? { hue: 0, saturation: 0, lightness, alpha: color.alpha } : { hue: 0, saturation: 0, lightness };
  var hue, delta = max - min, saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;
    case green:
      hue = (blue - red) / delta + 2;
      break;
    default:
      hue = (red - green) / delta + 4;
      break;
  }
  return hue *= 60, color.alpha !== void 0 ? { hue, saturation, lightness, alpha: color.alpha } : { hue, saturation, lightness };
}
function parseToHsl(color) {
  return rgbToHsl(parseToRgb(color));
}
var reduceHexValue = function(value2) {
  return value2.length === 7 && value2[1] === value2[2] && value2[3] === value2[4] && value2[5] === value2[6] ? "#" + value2[1] + value2[3] + value2[5] : value2;
}, reduceHexValue$1 = reduceHexValue;
function numberToHex(value2) {
  var hex = value2.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}
function convertToHex(red, green, blue) {
  return reduceHexValue$1("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}
function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}
function hsl(value2, saturation, lightness) {
  if (typeof value2 == "object" && saturation === void 0 && lightness === void 0) return hslToHex(value2.hue, value2.saturation, value2.lightness);
  throw new PolishedError(1);
}
function hsla(value2, saturation, lightness, alpha) {
  if (typeof value2 == "object" && saturation === void 0 && lightness === void 0 && alpha === void 0) return value2.alpha >= 1 ? hslToHex(value2.hue, value2.saturation, value2.lightness) : "rgba(" + hslToRgb(value2.hue, value2.saturation, value2.lightness) + "," + value2.alpha + ")";
  throw new PolishedError(2);
}
function rgb(value2, green, blue) {
  if (typeof value2 == "number" && typeof green == "number" && typeof blue == "number") return reduceHexValue$1("#" + numberToHex(value2) + numberToHex(green) + numberToHex(blue));
  if (typeof value2 == "object" && green === void 0 && blue === void 0) return reduceHexValue$1("#" + numberToHex(value2.red) + numberToHex(value2.green) + numberToHex(value2.blue));
  throw new PolishedError(6);
}
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue == "string" && typeof secondValue == "number") {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else {
    if (typeof firstValue == "object" && secondValue === void 0 && thirdValue === void 0 && fourthValue === void 0) return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }
  throw new PolishedError(7);
}
var isRgb = function(color) {
  return typeof color.red == "number" && typeof color.green == "number" && typeof color.blue == "number" && (typeof color.alpha != "number" || typeof color.alpha > "u");
}, isRgba = function(color) {
  return typeof color.red == "number" && typeof color.green == "number" && typeof color.blue == "number" && typeof color.alpha == "number";
}, isHsl = function(color) {
  return typeof color.hue == "number" && typeof color.saturation == "number" && typeof color.lightness == "number" && (typeof color.alpha != "number" || typeof color.alpha > "u");
}, isHsla = function(color) {
  return typeof color.hue == "number" && typeof color.saturation == "number" && typeof color.lightness == "number" && typeof color.alpha == "number";
};
function toColorString(color) {
  if (typeof color != "object") throw new PolishedError(8);
  if (isRgba(color)) return rgba(color);
  if (isRgb(color)) return rgb(color);
  if (isHsla(color)) return hsla(color);
  if (isHsl(color)) return hsl(color);
  throw new PolishedError(8);
}
function curried(f22, length, acc) {
  return function() {
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f22.apply(this, combined) : curried(f22, length, combined);
  };
}
function curry(f22) {
  return curried(f22, f22.length, []);
}
function adjustHue(degree, color) {
  if (color === "transparent") return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, { hue: hslColor.hue + parseFloat(degree) }));
}
curry(adjustHue);
function guard(lowerBoundary, upperBoundary, value2) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value2));
}
function darken(amount, color) {
  if (color === "transparent") return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, { lightness: guard(0, 1, hslColor.lightness - parseFloat(amount)) }));
}
var curriedDarken = curry(darken), curriedDarken$1 = curriedDarken;
function desaturate(amount, color) {
  if (color === "transparent") return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, { saturation: guard(0, 1, hslColor.saturation - parseFloat(amount)) }));
}
curry(desaturate);
function lighten(amount, color) {
  if (color === "transparent") return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, { lightness: guard(0, 1, hslColor.lightness + parseFloat(amount)) }));
}
var curriedLighten = curry(lighten), curriedLighten$1 = curriedLighten;
function mix(weight, color, otherColor) {
  if (color === "transparent") return otherColor;
  if (otherColor === "transparent") return color;
  if (weight === 0) return otherColor;
  var parsedColor1 = parseToRgb(color), color1 = _extends({}, parsedColor1, { alpha: typeof parsedColor1.alpha == "number" ? parsedColor1.alpha : 1 }), parsedColor2 = parseToRgb(otherColor), color2 = _extends({}, parsedColor2, { alpha: typeof parsedColor2.alpha == "number" ? parsedColor2.alpha : 1 }), alphaDelta = color1.alpha - color2.alpha, x22 = parseFloat(weight) * 2 - 1, y22 = x22 * alphaDelta === -1 ? x22 : x22 + alphaDelta, z22 = 1 + x22 * alphaDelta, weight1 = (y22 / z22 + 1) / 2, weight2 = 1 - weight1, mixedColor = { red: Math.floor(color1.red * weight1 + color2.red * weight2), green: Math.floor(color1.green * weight1 + color2.green * weight2), blue: Math.floor(color1.blue * weight1 + color2.blue * weight2), alpha: color1.alpha * parseFloat(weight) + color2.alpha * (1 - parseFloat(weight)) };
  return rgba(mixedColor);
}
var curriedMix = curry(mix), mix$1 = curriedMix;
function opacify(amount, color) {
  if (color === "transparent") return color;
  var parsedColor = parseToRgb(color), alpha = typeof parsedColor.alpha == "number" ? parsedColor.alpha : 1, colorWithAlpha = _extends({}, parsedColor, { alpha: guard(0, 1, (alpha * 100 + parseFloat(amount) * 100) / 100) });
  return rgba(colorWithAlpha);
}
var curriedOpacify = curry(opacify), curriedOpacify$1 = curriedOpacify;
function saturate(amount, color) {
  if (color === "transparent") return color;
  var hslColor = parseToHsl(color);
  return toColorString(_extends({}, hslColor, { saturation: guard(0, 1, hslColor.saturation + parseFloat(amount)) }));
}
curry(saturate);
function setHue(hue, color) {
  return color === "transparent" ? color : toColorString(_extends({}, parseToHsl(color), { hue: parseFloat(hue) }));
}
curry(setHue);
function setLightness(lightness, color) {
  return color === "transparent" ? color : toColorString(_extends({}, parseToHsl(color), { lightness: parseFloat(lightness) }));
}
curry(setLightness);
function setSaturation(saturation, color) {
  return color === "transparent" ? color : toColorString(_extends({}, parseToHsl(color), { saturation: parseFloat(saturation) }));
}
curry(setSaturation);
function shade(percentage, color) {
  return color === "transparent" ? color : mix$1(parseFloat(percentage), "rgb(0, 0, 0)", color);
}
curry(shade);
function tint(percentage, color) {
  return color === "transparent" ? color : mix$1(parseFloat(percentage), "rgb(255, 255, 255)", color);
}
curry(tint);
function transparentize(amount, color) {
  if (color === "transparent") return color;
  var parsedColor = parseToRgb(color), alpha = typeof parsedColor.alpha == "number" ? parsedColor.alpha : 1, colorWithAlpha = _extends({}, parsedColor, { alpha: guard(0, 1, +(alpha * 100 - parseFloat(amount) * 100).toFixed(2) / 100) });
  return rgba(colorWithAlpha);
}
var curriedTransparentize = curry(transparentize), curriedTransparentize$1 = curriedTransparentize;
var Wrapper = xr$3.div(N$1, ({ theme }) => ({ backgroundColor: theme.base === "light" ? "rgba(0,0,0,.01)" : "rgba(255,255,255,.01)", borderRadius: theme.appBorderRadius, border: `1px dashed ${theme.appBorderColor}`, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, margin: "25px 0 40px", color: curriedTransparentize$1(0.3, theme.color.defaultText), fontSize: theme.typography.size.s2 })), EmptyBlock = (props) => e.createElement(Wrapper, { ...props, className: "docblock-emptyblock sb-unstyled" });
var StyledSyntaxHighlighter = xr$3(nu)(({ theme }) => ({ fontSize: `${theme.typography.size.s2 - 1}px`, lineHeight: "19px", margin: "25px 0 40px", borderRadius: theme.appBorderRadius, boxShadow: theme.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", "pre.prismjs": { padding: 20, background: "inherit" } }));
var SourceSkeletonWrapper = xr$3.div(({ theme }) => ({ background: theme.background.content, borderRadius: theme.appBorderRadius, border: `1px solid ${theme.appBorderColor}`, boxShadow: theme.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", margin: "25px 0 40px", padding: "20px 20px 20px 22px" })), SourceSkeletonPlaceholder = xr$3.div(({ theme }) => ({ animation: `${theme.animation.glow} 1.5s ease-in-out infinite`, background: theme.appBorderColor, height: 17, marginTop: 1, width: "60%", [`&:first-child${hf$1}`]: { margin: 0 } })), SourceSkeleton = () => e.createElement(SourceSkeletonWrapper, null, e.createElement(SourceSkeletonPlaceholder, null), e.createElement(SourceSkeletonPlaceholder, { style: { width: "80%" } }), e.createElement(SourceSkeletonPlaceholder, { style: { width: "30%" } }), e.createElement(SourceSkeletonPlaceholder, { style: { width: "80%" } })), Source = ({ isLoading, error, language, code, dark, format: format3 = true, ...rest }) => {
  let { typography } = St$3();
  if (isLoading) return e.createElement(SourceSkeleton, null);
  if (error) return e.createElement(EmptyBlock, null, error);
  let syntaxHighlighter = e.createElement(StyledSyntaxHighlighter, { bordered: true, copyable: true, format: format3, language: language ?? "jsx", className: "docblock-source sb-unstyled", ...rest }, code);
  if (typeof dark > "u") return syntaxHighlighter;
  let overrideTheme = dark ? Me$3.dark : Me$3.light;
  return e.createElement(Tt$3, { theme: Ir$2({ ...overrideTheme, fontCode: typography.fonts.mono, fontBase: typography.fonts.base }) }, syntaxHighlighter);
};
var toGlobalSelector = (element) => `& :where(${element}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${element}))`, breakpoint = 600, Title = xr$3.h1(N$1, ({ theme }) => ({ color: theme.color.defaultText, fontSize: theme.typography.size.m3, fontWeight: theme.typography.weight.bold, lineHeight: "32px", [`@media (min-width: ${breakpoint}px)`]: { fontSize: theme.typography.size.l1, lineHeight: "36px", marginBottom: "16px" } })), Subtitle = xr$3.h2(N$1, ({ theme }) => ({ fontWeight: theme.typography.weight.regular, fontSize: theme.typography.size.s3, lineHeight: "20px", borderBottom: "none", marginBottom: 15, [`@media (min-width: ${breakpoint}px)`]: { fontSize: theme.typography.size.m1, lineHeight: "28px", marginBottom: 24 }, color: curriedTransparentize$1(0.25, theme.color.defaultText) })), DocsContent = xr$3.div(({ theme }) => {
  let reset = { fontFamily: theme.typography.fonts.base, fontSize: theme.typography.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" }, headers = { margin: "20px 0 8px", padding: 0, cursor: "text", position: "relative", color: theme.color.defaultText, "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& code": { fontSize: "inherit" } }, code = { lineHeight: 1, margin: "0 2px", padding: "3px 5px", whiteSpace: "nowrap", borderRadius: 3, fontSize: theme.typography.size.s2 - 1, border: theme.base === "light" ? `1px solid ${theme.color.mediumlight}` : `1px solid ${theme.color.darker}`, color: theme.base === "light" ? curriedTransparentize$1(0.1, theme.color.defaultText) : curriedTransparentize$1(0.3, theme.color.defaultText), backgroundColor: theme.base === "light" ? theme.color.lighter : theme.color.border };
  return { maxWidth: 1e3, width: "100%", minWidth: 0, [toGlobalSelector("a")]: { ...reset, fontSize: "inherit", lineHeight: "24px", color: theme.color.secondary, textDecoration: "none", "&.absent": { color: "#cc0000" }, "&.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 } }, [toGlobalSelector("blockquote")]: { ...reset, margin: "16px 0", borderLeft: `4px solid ${theme.color.medium}`, padding: "0 15px", color: theme.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, [toGlobalSelector("div")]: reset, [toGlobalSelector("dl")]: { ...reset, margin: "16px 0", padding: 0, "& dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", padding: 0, margin: "16px 0 4px" }, "& dt:first-of-type": { padding: 0 }, "& dt > :first-of-type": { marginTop: 0 }, "& dt > :last-child": { marginBottom: 0 }, "& dd": { margin: "0 0 16px", padding: "0 15px" }, "& dd > :first-of-type": { marginTop: 0 }, "& dd > :last-child": { marginBottom: 0 } }, [toGlobalSelector("h1")]: { ...reset, ...headers, fontSize: `${theme.typography.size.l1}px`, fontWeight: theme.typography.weight.bold }, [toGlobalSelector("h2")]: { ...reset, ...headers, fontSize: `${theme.typography.size.m2}px`, paddingBottom: 4, borderBottom: `1px solid ${theme.appBorderColor}` }, [toGlobalSelector("h3")]: { ...reset, ...headers, fontSize: `${theme.typography.size.m1}px`, fontWeight: theme.typography.weight.bold }, [toGlobalSelector("h4")]: { ...reset, ...headers, fontSize: `${theme.typography.size.s3}px` }, [toGlobalSelector("h5")]: { ...reset, ...headers, fontSize: `${theme.typography.size.s2}px` }, [toGlobalSelector("h6")]: { ...reset, ...headers, fontSize: `${theme.typography.size.s2}px`, color: theme.color.dark }, [toGlobalSelector("hr")]: { border: "0 none", borderTop: `1px solid ${theme.appBorderColor}`, height: 4, padding: 0 }, [toGlobalSelector("img")]: { maxWidth: "100%" }, [toGlobalSelector("li")]: { ...reset, fontSize: theme.typography.size.s2, color: theme.color.defaultText, lineHeight: "24px", "& + li": { marginTop: ".25em" }, "& ul, & ol": { marginTop: ".25em", marginBottom: 0 }, "& code": code }, [toGlobalSelector("ol")]: { ...reset, margin: "16px 0", paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, [toGlobalSelector("p")]: { ...reset, margin: "16px 0", fontSize: theme.typography.size.s2, lineHeight: "24px", color: theme.color.defaultText, "& code": code }, [toGlobalSelector("pre")]: { ...reset, fontFamily: theme.typography.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight: "18px", padding: "11px 1rem", whiteSpace: "pre-wrap", color: "inherit", borderRadius: 3, margin: "1rem 0", "&:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "& pre, &.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px", code: { color: "inherit", fontSize: "inherit" } }, "& code": { whiteSpace: "pre" }, "& code, & tt": { border: "none" } }, [toGlobalSelector("span")]: { ...reset, "&.frame": { display: "block", overflow: "hidden", "& > span": { border: `1px solid ${theme.color.medium}`, display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: theme.color.darkest, display: "block", padding: "5px 0 0" } }, "&.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "&.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "&.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "&.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } } }, [toGlobalSelector("table")]: { ...reset, margin: "16px 0", fontSize: theme.typography.size.s2, lineHeight: "24px", padding: 0, borderCollapse: "collapse", "& tr": { borderTop: `1px solid ${theme.appBorderColor}`, backgroundColor: theme.appContentBg, margin: 0, padding: 0 }, "& tr:nth-of-type(2n)": { backgroundColor: theme.base === "dark" ? theme.color.darker : theme.color.lighter }, "& tr th": { fontWeight: "bold", color: theme.color.defaultText, border: `1px solid ${theme.appBorderColor}`, margin: 0, padding: "6px 13px" }, "& tr td": { border: `1px solid ${theme.appBorderColor}`, color: theme.color.defaultText, margin: 0, padding: "6px 13px" }, "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 }, "& tr th :last-child, & tr td :last-child": { marginBottom: 0 } }, [toGlobalSelector("ul")]: { ...reset, margin: "16px 0", paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 }, listStyle: "disc" } };
}), DocsWrapper = xr$3.div(({ theme }) => ({ background: theme.background.content, display: "flex", flexDirection: "row-reverse", justifyContent: "center", padding: "4rem 20px", minHeight: "100vh", boxSizing: "border-box", gap: "3rem", [`@media (min-width: ${breakpoint}px)`]: {} })), DocsPageWrapper = ({ children, toc }) => e.createElement(DocsWrapper, { className: "sbdocs sbdocs-wrapper" }, toc, e.createElement(DocsContent, { className: "sbdocs sbdocs-content" }, children));
var getBlockBackgroundStyle = (theme) => ({ borderRadius: theme.appBorderRadius, background: theme.background.content, boxShadow: theme.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", border: `1px solid ${theme.appBorderColor}` });
var { window: globalWindow } = globalThis, IFrame = class extends reactExports.Component {
  constructor() {
    super(...arguments);
    this.iframe = null;
  }
  componentDidMount() {
    let { id: id2 } = this.props;
    this.iframe = globalWindow.document.getElementById(id2);
  }
  shouldComponentUpdate(nextProps) {
    let { scale } = nextProps;
    return scale !== this.props.scale && this.setIframeBodyStyle({ width: `${scale * 100}%`, height: `${scale * 100}%`, transform: `scale(${1 / scale})`, transformOrigin: "top left" }), false;
  }
  setIframeBodyStyle(style) {
    return Object.assign(this.iframe.contentDocument.body.style, style);
  }
  render() {
    let { id: id2, title, src, allowFullScreen, scale, ...rest } = this.props;
    return e.createElement("iframe", { id: id2, title, src, ...allowFullScreen ? { allow: "fullscreen" } : {}, loading: "lazy", ...rest });
  }
};
var ZoomContext = reactExports.createContext({ scale: 1 });
var { PREVIEW_URL } = globalThis, BASE_URL = PREVIEW_URL || "iframe.html", storyBlockIdFromId = ({ story, primary }) => `story--${story.id}${primary ? "--primary" : ""}`, InlineStory = (props) => {
  let storyRef = reactExports.useRef(), [showLoader, setShowLoader] = reactExports.useState(true), [error, setError] = reactExports.useState(), { story, height, autoplay, forceInitialArgs, renderStoryToElement } = props;
  return reactExports.useEffect(() => {
    if (!(story && storyRef.current)) return () => {
    };
    let element = storyRef.current, cleanup = renderStoryToElement(story, element, { showMain: () => {
    }, showError: ({ title, description }) => setError(new Error(`${title} - ${description}`)), showException: (err) => setError(err) }, { autoplay, forceInitialArgs });
    return setShowLoader(false), () => {
      Promise.resolve().then(() => cleanup());
    };
  }, [autoplay, renderStoryToElement, story]), error ? e.createElement("pre", null, e.createElement(H3, { error })) : e.createElement(e.Fragment, null, height ? e.createElement("style", null, `#${storyBlockIdFromId(props)} { min-height: ${height}; transform: translateZ(0); overflow: auto }`) : null, showLoader && e.createElement(StorySkeleton, null), e.createElement("div", { ref: storyRef, id: `${storyBlockIdFromId(props)}-inner`, "data-name": story.name }));
}, IFrameStory = ({ story, height = "500px" }) => e.createElement("div", { style: { width: "100%", height } }, e.createElement(ZoomContext.Consumer, null, ({ scale }) => e.createElement(IFrame, { key: "iframe", id: `iframe--${story.id}`, title: story.name, src: Pw(BASE_URL, story.id, { viewMode: "story" }), allowFullScreen: true, scale, style: { width: "100%", height: "100%", border: "0 none" } }))), ErrorMessage = xr$3.strong(({ theme }) => ({ color: theme.color.orange })), Story = (props) => {
  let { inline, story } = props;
  return inline && !props.autoplay && story.usesMount ? e.createElement(ErrorMessage, null, "This story mounts inside of play. Set", " ", e.createElement("a", { href: "https://storybook.js.org/docs/api/doc-blocks/doc-block-story?ref=ui#autoplay" }, "autoplay"), " ", "to true to view this story.") : e.createElement("div", { id: storyBlockIdFromId(props), className: "sb-story sb-unstyled", "data-story-block": "true" }, inline ? e.createElement(InlineStory, { ...props }) : e.createElement(IFrameStory, { ...props }));
}, StorySkeleton = () => e.createElement(Lw, null);
var Bar = xr$3(Uo)({ position: "absolute", left: 0, right: 0, top: 0, transition: "transform .2s linear" }), Wrapper2 = xr$3.div({ display: "flex", alignItems: "center", gap: 4 }), IconPlaceholder = xr$3.div(({ theme }) => ({ width: 14, height: 14, borderRadius: 2, margin: "0 7px", backgroundColor: theme.appBorderColor, animation: `${theme.animation.glow} 1.5s ease-in-out infinite` })), Toolbar = ({ isLoading, storyId, baseUrl, zoom, resetZoom, ...rest }) => e.createElement(Bar, { ...rest }, e.createElement(Wrapper2, { key: "left" }, isLoading ? [1, 2, 3].map((key) => e.createElement(IconPlaceholder, { key })) : e.createElement(e.Fragment, null, e.createElement(So, { key: "zoomin", onClick: (e22) => {
  e22.preventDefault(), zoom(0.8);
}, title: "Zoom in" }, e.createElement(ZoomIcon, null)), e.createElement(So, { key: "zoomout", onClick: (e22) => {
  e22.preventDefault(), zoom(1.25);
}, title: "Zoom out" }, e.createElement(ZoomOutIcon, null)), e.createElement(So, { key: "zoomreset", onClick: (e22) => {
  e22.preventDefault(), resetZoom();
}, title: "Reset zoom" }, e.createElement(ZoomResetIcon, null)))));
var ChildrenContainer = xr$3.div(({ isColumn, columns, layout }) => ({ display: isColumn || !columns ? "block" : "flex", position: "relative", flexWrap: "wrap", overflow: "auto", flexDirection: isColumn ? "column" : "row", "& .innerZoomElementWrapper > *": isColumn ? { width: layout !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "block" } : { maxWidth: layout !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "inline-block" } }), ({ layout = "padded", inline }) => layout === "centered" || layout === "padded" ? { padding: inline ? "32px 22px" : "0px", "& .innerZoomElementWrapper > *": { width: "auto", border: "8px solid transparent!important" } } : {}, ({ layout = "padded", inline }) => layout === "centered" && inline ? { display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "center", alignItems: "center" } : {}, ({ columns }) => columns && columns > 1 ? { ".innerZoomElementWrapper > *": { minWidth: `calc(100% / ${columns} - 20px)` } } : {}), StyledSource = xr$3(Source)(({ theme }) => ({ margin: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: theme.appBorderRadius, borderBottomRightRadius: theme.appBorderRadius, border: "none", background: theme.base === "light" ? "rgba(0, 0, 0, 0.85)" : curriedDarken$1(0.05, theme.background.content), color: theme.color.lightest, button: { background: theme.base === "light" ? "rgba(0, 0, 0, 0.85)" : curriedDarken$1(0.05, theme.background.content) } })), PreviewContainer = xr$3.div(({ theme, withSource, isExpanded }) => ({ position: "relative", overflow: "hidden", margin: "25px 0 40px", ...getBlockBackgroundStyle(theme), borderBottomLeftRadius: withSource && isExpanded && 0, borderBottomRightRadius: withSource && isExpanded && 0, borderBottomWidth: isExpanded && 0, "h3 + &": { marginTop: "16px" } }), ({ withToolbar }) => withToolbar && { paddingTop: 40 }), getSource = (withSource, expanded, setExpanded) => {
  switch (true) {
    case !!(withSource && withSource.error):
      return { source: null, actionItem: { title: "No code available", className: "docblock-code-toggle docblock-code-toggle--disabled", disabled: true, onClick: () => setExpanded(false) } };
    case expanded:
      return { source: e.createElement(StyledSource, { ...withSource, dark: true }), actionItem: { title: "Hide code", className: "docblock-code-toggle docblock-code-toggle--expanded", onClick: () => setExpanded(false) } };
    default:
      return { source: e.createElement(StyledSource, { ...withSource, dark: true }), actionItem: { title: "Show code", className: "docblock-code-toggle", onClick: () => setExpanded(true) } };
  }
};
function getStoryId(children) {
  if (reactExports.Children.count(children) === 1) {
    let elt = children;
    if (elt.props) return elt.props.id;
  }
  return null;
}
var PositionedToolbar = xr$3(Toolbar)({ position: "absolute", top: 0, left: 0, right: 0, height: 40 }), Relative = xr$3.div({ overflow: "hidden", position: "relative" }), Preview = ({ isLoading, isColumn, columns, children, withSource, withToolbar = false, isExpanded = false, additionalActions, className, layout = "padded", inline = false, ...props }) => {
  let [expanded, setExpanded] = reactExports.useState(isExpanded), { source, actionItem } = getSource(withSource, expanded, setExpanded), [scale, setScale] = reactExports.useState(1), previewClasses = [className].concat(["sbdocs", "sbdocs-preview", "sb-unstyled"]), defaultActionItems = withSource ? [actionItem] : [], [additionalActionItems, setAdditionalActionItems] = reactExports.useState(additionalActions ? [...additionalActions] : []), actionItems = [...defaultActionItems, ...additionalActionItems], { window: globalWindow4 } = globalThis, copyToClipboard = reactExports.useCallback(async (text) => {
    let { createCopyToClipboardFunction } = await __vitePreload(() => Promise.resolve().then(() => index), true ? void 0 : void 0, import.meta.url);
    createCopyToClipboardFunction();
  }, []), onCopyCapture = (e22) => {
    let selection = globalWindow4.getSelection();
    selection && selection.type === "Range" || (e22.preventDefault(), additionalActionItems.filter((item) => item.title === "Copied").length === 0 && copyToClipboard((source == null ? void 0 : source.props.code) ?? "").then(() => {
      setAdditionalActionItems([...additionalActionItems, { title: "Copied", onClick: () => {
      } }]), globalWindow4.setTimeout(() => setAdditionalActionItems(additionalActionItems.filter((item) => item.title !== "Copied")), 1500);
    }));
  };
  return e.createElement(PreviewContainer, { withSource, withToolbar, ...props, className: previewClasses.join(" ") }, withToolbar && e.createElement(PositionedToolbar, { isLoading, border: true, zoom: (z22) => setScale(scale * z22), resetZoom: () => setScale(1), storyId: getStoryId(children), baseUrl: "./iframe.html" }), e.createElement(ZoomContext.Provider, { value: { scale } }, e.createElement(Relative, { className: "docs-story", onCopyCapture: withSource && onCopyCapture }, e.createElement(ChildrenContainer, { isColumn: isColumn || !Array.isArray(children), columns, layout, inline }, e.createElement(E3.Element, { centered: layout === "centered", scale: inline ? scale : 1 }, Array.isArray(children) ? children.map((child, i22) => e.createElement("div", { key: i22 }, child)) : e.createElement("div", null, children))), e.createElement(Za, { actionItems }))), withSource && expanded && source);
};
xr$3(Preview)(() => ({ ".docs-story": { paddingTop: 32, paddingBottom: 40 } }));
var TabbedArgsTable = ({ tabs, ...props }) => {
  let entries = Object.entries(tabs);
  return entries.length === 1 ? e.createElement(ArgsTable, { ...entries[0][1], ...props }) : e.createElement(h0, null, entries.map((entry, index2) => {
    let [label, table] = entry, id2 = `prop_table_div_${label}`, Component4 = "div", argsTableProps = index2 === 0 ? props : { sort: props.sort };
    return e.createElement(Component4, { key: id2, id: id2, title: label }, ({ active }) => active ? e.createElement(ArgsTable, { key: `prop_table_${label}`, ...table, ...argsTableProps }) : null);
  }));
};
xr$3.div(({ theme }) => ({ marginRight: 30, fontSize: `${theme.typography.size.s1}px`, color: theme.base === "light" ? curriedTransparentize$1(0.4, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText) }));
xr$3.div({ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" });
xr$3.div({ display: "flex", flexDirection: "row", alignItems: "baseline", "&:not(:last-child)": { marginBottom: "1rem" } });
xr$3.div(N$1, ({ theme }) => ({ ...getBlockBackgroundStyle(theme), margin: "25px 0 40px", padding: "30px 20px" }));
xr$3.div(({ theme }) => ({ fontWeight: theme.typography.weight.bold, color: theme.color.defaultText }));
xr$3.div(({ theme }) => ({ color: theme.base === "light" ? curriedTransparentize$1(0.2, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText) }));
xr$3.div({ flex: "0 0 30%", lineHeight: "20px", marginTop: 5 });
xr$3.div(({ theme }) => ({ flex: 1, textAlign: "center", fontFamily: theme.typography.fonts.mono, fontSize: theme.typography.size.s1, lineHeight: 1, overflow: "hidden", color: theme.base === "light" ? curriedTransparentize$1(0.4, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText), "> div": { display: "inline-block", overflow: "hidden", maxWidth: "100%", textOverflow: "ellipsis" }, span: { display: "block", marginTop: 2 } }));
xr$3.div({ display: "flex", flexDirection: "row" });
xr$3.div(({ background }) => ({ position: "relative", flex: 1, "&::before": { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background, content: '""' } }));
xr$3.div(({ theme }) => ({ ...getBlockBackgroundStyle(theme), display: "flex", flexDirection: "row", height: 50, marginBottom: 5, overflow: "hidden", backgroundColor: "white", backgroundImage: "repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)", backgroundClip: "padding-box" }));
xr$3.div({ display: "flex", flexDirection: "column", flex: 1, position: "relative", marginBottom: 30 });
xr$3.div({ flex: 1, display: "flex", flexDirection: "row" });
xr$3.div({ display: "flex", alignItems: "flex-start" });
xr$3.div({ flex: "0 0 30%" });
xr$3.div({ flex: 1 });
xr$3.div(({ theme }) => ({ display: "flex", flexDirection: "row", alignItems: "center", paddingBottom: 20, fontWeight: theme.typography.weight.bold, color: theme.base === "light" ? curriedTransparentize$1(0.4, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText) }));
xr$3.div(({ theme }) => ({ fontSize: theme.typography.size.s2, lineHeight: "20px", display: "flex", flexDirection: "column" }));
xr$3.div(({ theme }) => ({ fontFamily: theme.typography.fonts.base, fontSize: theme.typography.size.s1, color: theme.color.defaultText, marginLeft: 10, lineHeight: 1.2, display: "-webkit-box", overflow: "hidden", wordBreak: "break-word", textOverflow: "ellipsis", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" }));
xr$3.div(({ theme }) => ({ ...getBlockBackgroundStyle(theme), overflow: "hidden", height: 40, width: 40, display: "flex", alignItems: "center", justifyContent: "center", flex: "none", "> img, > svg": { width: 20, height: 20 } }));
xr$3.div({ display: "inline-flex", flexDirection: "row", alignItems: "center", width: "100%" });
xr$3.div({ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gridGap: "8px 16px", gridAutoFlow: "row dense", gridAutoRows: 50 });
function build_html_default(options) {
  let forEach = [].forEach, some = [].some, body = typeof window < "u" && document.body, SPACE_CHAR = " ", tocElement, currentlyHighlighting = true, eventCount = 0;
  function createEl(d22, container) {
    let link = container.appendChild(createLink(d22));
    if (d22.children.length) {
      let list = createList(d22.isCollapsed);
      d22.children.forEach((child) => {
        createEl(child, list);
      }), link.appendChild(list);
    }
  }
  function render(parent, data) {
    let container = createList(false);
    if (data.forEach((d22) => {
      createEl(d22, container);
    }), tocElement = parent || tocElement, tocElement !== null) return tocElement.firstChild && tocElement.removeChild(tocElement.firstChild), data.length === 0 ? tocElement : tocElement.appendChild(container);
  }
  function createLink(data) {
    let item = document.createElement("li"), a22 = document.createElement("a");
    return options.listItemClass && item.setAttribute("class", options.listItemClass), options.onClick && (a22.onclick = options.onClick), options.includeTitleTags && a22.setAttribute("title", data.textContent), options.includeHtml && data.childNodes.length ? forEach.call(data.childNodes, (node) => {
      a22.appendChild(node.cloneNode(true));
    }) : a22.textContent = data.textContent, a22.setAttribute("href", `${options.basePath}#${data.id}`), a22.setAttribute("class", `${options.linkClass + SPACE_CHAR}node-name--${data.nodeName}${SPACE_CHAR}${options.extraLinkClasses}`), item.appendChild(a22), item;
  }
  function createList(isCollapsed) {
    let listElement = options.orderedList ? "ol" : "ul", list = document.createElement(listElement), classes = options.listClass + SPACE_CHAR + options.extraListClasses;
    return isCollapsed && (classes = classes + SPACE_CHAR + options.collapsibleClass, classes = classes + SPACE_CHAR + options.isCollapsedClass), list.setAttribute("class", classes), list;
  }
  function updateFixedSidebarClass() {
    let scrollTop = getScrollTop(), posFixedEl = document.querySelector(options.positionFixedSelector);
    options.fixedSidebarOffset === "auto" && (options.fixedSidebarOffset = tocElement.offsetTop), scrollTop > options.fixedSidebarOffset ? posFixedEl.className.indexOf(options.positionFixedClass) === -1 && (posFixedEl.className += SPACE_CHAR + options.positionFixedClass) : posFixedEl.className = posFixedEl.className.replace(SPACE_CHAR + options.positionFixedClass, "");
  }
  function getHeadingTopPos(obj) {
    let position = 0;
    return obj !== null && (position = obj.offsetTop, options.hasInnerContainers && (position += getHeadingTopPos(obj.offsetParent))), position;
  }
  function updateClassname(obj, className) {
    return obj && obj.className !== className && (obj.className = className), obj;
  }
  function updateToc(headingsArray, event) {
    var _a2, _b2;
    options.positionFixedSelector && updateFixedSidebarClass();
    let headings = headingsArray, clickedHref = ((_a2 = event == null ? void 0 : event.target) == null ? void 0 : _a2.getAttribute) ? (_b2 = event == null ? void 0 : event.target) == null ? void 0 : _b2.getAttribute("href") : null, isBottomMode = clickedHref && clickedHref.charAt(0) === "#" ? getIsHeaderBottomMode(clickedHref.replace("#", "")) : false, shouldUpdate = currentlyHighlighting || isBottomMode;
    if (event && eventCount < 5 && eventCount++, shouldUpdate && tocElement && headings.length > 0) {
      let topHeader = getTopHeader(headings), oldActiveTocLink = tocElement.querySelector(`.${options.activeLinkClass}`), topHeaderId = topHeader.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g, "\\$1"), hashId = window.location.hash.replace("#", ""), activeId = topHeaderId, isPageBottomMode = getIsPageBottomMode();
      clickedHref && isBottomMode ? activeId = clickedHref.replace("#", "") : hashId && hashId !== topHeaderId && isPageBottomMode && (getIsHeaderBottomMode(topHeaderId) || eventCount <= 2) && (activeId = hashId);
      let activeTocLink = tocElement.querySelector(`.${options.linkClass}[href="${options.basePath}#${activeId}"]`);
      if (oldActiveTocLink === activeTocLink) return;
      let tocLinks = tocElement.querySelectorAll(`.${options.linkClass}`);
      forEach.call(tocLinks, (tocLink) => {
        updateClassname(tocLink, tocLink.className.replace(SPACE_CHAR + options.activeLinkClass, ""));
      });
      let tocLis = tocElement.querySelectorAll(`.${options.listItemClass}`);
      forEach.call(tocLis, (tocLi) => {
        updateClassname(tocLi, tocLi.className.replace(SPACE_CHAR + options.activeListItemClass, ""));
      }), activeTocLink && activeTocLink.className.indexOf(options.activeLinkClass) === -1 && (activeTocLink.className += SPACE_CHAR + options.activeLinkClass);
      let li2 = activeTocLink == null ? void 0 : activeTocLink.parentNode;
      li2 && li2.className.indexOf(options.activeListItemClass) === -1 && (li2.className += SPACE_CHAR + options.activeListItemClass);
      let tocLists = tocElement.querySelectorAll(`.${options.listClass}.${options.collapsibleClass}`);
      forEach.call(tocLists, (list) => {
        list.className.indexOf(options.isCollapsedClass) === -1 && (list.className += SPACE_CHAR + options.isCollapsedClass);
      }), (activeTocLink == null ? void 0 : activeTocLink.nextSibling) && activeTocLink.nextSibling.className.indexOf(options.isCollapsedClass) !== -1 && updateClassname(activeTocLink.nextSibling, activeTocLink.nextSibling.className.replace(SPACE_CHAR + options.isCollapsedClass, "")), removeCollapsedFromParents(activeTocLink == null ? void 0 : activeTocLink.parentNode.parentNode);
    }
  }
  function removeCollapsedFromParents(element) {
    return element && element.className.indexOf(options.collapsibleClass) !== -1 && element.className.indexOf(options.isCollapsedClass) !== -1 ? (updateClassname(element, element.className.replace(SPACE_CHAR + options.isCollapsedClass, "")), removeCollapsedFromParents(element.parentNode.parentNode)) : element;
  }
  function disableTocAnimation(event) {
    let target = event.target || event.srcElement;
    typeof target.className != "string" || target.className.indexOf(options.linkClass) === -1 || (currentlyHighlighting = false);
  }
  function enableTocAnimation() {
    currentlyHighlighting = true;
  }
  function getCurrentlyHighlighting() {
    return currentlyHighlighting;
  }
  function getIsHeaderBottomMode(headerId) {
    let scrollEl = getScrollEl();
    return (document == null ? void 0 : document.getElementById(headerId)).offsetTop > scrollEl.offsetHeight - scrollEl.clientHeight * 1.4 - options.bottomModeThreshold;
  }
  function getIsPageBottomMode() {
    let scrollEl = getScrollEl(), isScrollable = scrollEl.scrollHeight > scrollEl.clientHeight, isBottomMode = getScrollTop() + scrollEl.clientHeight > scrollEl.offsetHeight - options.bottomModeThreshold;
    return isScrollable && isBottomMode;
  }
  function getScrollEl() {
    let el2;
    return options.scrollContainer && document.querySelector(options.scrollContainer) ? el2 = document.querySelector(options.scrollContainer) : el2 = document.documentElement || body, el2;
  }
  function getScrollTop() {
    var _a2;
    return ((_a2 = getScrollEl()) == null ? void 0 : _a2.scrollTop) || 0;
  }
  function getTopHeader(headings, scrollTop = getScrollTop()) {
    let topHeader;
    return some.call(headings, (heading, i22) => {
      if (getHeadingTopPos(heading) > scrollTop + options.headingsOffset + 10) {
        let index2 = i22 === 0 ? i22 : i22 - 1;
        return topHeader = headings[index2], true;
      }
      if (i22 === headings.length - 1) return topHeader = headings[headings.length - 1], true;
    }), topHeader;
  }
  function updateUrlHashForHeader(headingsArray) {
    let scrollTop = getScrollTop(), topHeader = getTopHeader(headingsArray, scrollTop), isPageBottomMode = getIsPageBottomMode();
    if ((!topHeader || scrollTop < 5) && !isPageBottomMode) window.location.hash === "#" || window.location.hash === "" || window.history.pushState(null, null, "#");
    else if (topHeader && !isPageBottomMode) {
      let newHash = `#${topHeader.id}`;
      window.location.hash !== newHash && window.history.pushState(null, null, newHash);
    }
  }
  return { enableTocAnimation, disableTocAnimation, render, updateToc, getCurrentlyHighlighting, getTopHeader, getScrollTop, updateUrlHashForHeader };
}
var default_options_default = { tocSelector: ".js-toc", tocElement: null, contentSelector: ".js-toc-content", contentElement: null, headingSelector: "h1, h2, h3", ignoreSelector: ".js-toc-ignore", hasInnerContainers: false, linkClass: "toc-link", extraLinkClasses: "", activeLinkClass: "is-active-link", listClass: "toc-list", extraListClasses: "", isCollapsedClass: "is-collapsed", collapsibleClass: "is-collapsible", listItemClass: "toc-list-item", activeListItemClass: "is-active-li", collapseDepth: 0, scrollSmooth: true, scrollSmoothDuration: 420, scrollSmoothOffset: 0, scrollEndCallback: function(e22) {
}, headingsOffset: 1, enableUrlHashUpdateOnScroll: false, scrollHandlerType: "auto", scrollHandlerTimeout: 50, throttleTimeout: 50, positionFixedSelector: null, positionFixedClass: "is-position-fixed", fixedSidebarOffset: "auto", includeHtml: false, includeTitleTags: false, onClick: function(e22) {
}, orderedList: true, scrollContainer: null, skipRendering: false, headingLabelCallback: false, ignoreHiddenElements: false, headingObjectCallback: null, basePath: "", disableTocScrollSync: false, tocScrollingWrapper: null, tocScrollOffset: 30, bottomModeThreshold: 30 };
function parseContent(options) {
  let reduce = [].reduce;
  function getLastItem(array2) {
    return array2[array2.length - 1];
  }
  function getHeadingLevel(heading) {
    return +heading.nodeName.toUpperCase().replace("H", "");
  }
  function isHTMLElement(maybeElement) {
    try {
      return maybeElement instanceof window.HTMLElement || maybeElement instanceof window.parent.HTMLElement;
    } catch {
      return maybeElement instanceof window.HTMLElement;
    }
  }
  function getHeadingObject(heading) {
    if (!isHTMLElement(heading)) return heading;
    if (options.ignoreHiddenElements && (!heading.offsetHeight || !heading.offsetParent)) return null;
    let headingLabel = heading.getAttribute("data-heading-label") || (options.headingLabelCallback ? String(options.headingLabelCallback(heading.innerText)) : (heading.innerText || heading.textContent).trim()), obj = { id: heading.id, children: [], nodeName: heading.nodeName, headingLevel: getHeadingLevel(heading), textContent: headingLabel };
    return options.includeHtml && (obj.childNodes = heading.childNodes), options.headingObjectCallback ? options.headingObjectCallback(obj, heading) : obj;
  }
  function addNode(node, nest) {
    let obj = getHeadingObject(node), level = obj.headingLevel, array2 = nest, lastItem = getLastItem(array2), lastItemLevel = lastItem ? lastItem.headingLevel : 0, counter = level - lastItemLevel;
    for (; counter > 0 && (lastItem = getLastItem(array2), !(lastItem && level === lastItem.headingLevel)); ) lastItem && lastItem.children !== void 0 && (array2 = lastItem.children), counter--;
    return level >= options.collapseDepth && (obj.isCollapsed = true), array2.push(obj), array2;
  }
  function selectHeadings(contentElement, headingSelector) {
    let selectors = headingSelector;
    options.ignoreSelector && (selectors = headingSelector.split(",").map(function(selector) {
      return `${selector.trim()}:not(${options.ignoreSelector})`;
    }));
    try {
      return contentElement.querySelectorAll(selectors);
    } catch {
      return console.warn(`Headers not found with selector: ${selectors}`), null;
    }
  }
  function nestHeadingsArray(headingsArray) {
    return reduce.call(headingsArray, function(prev, curr) {
      let currentHeading = getHeadingObject(curr);
      return currentHeading && addNode(currentHeading, prev.nest), prev;
    }, { nest: [] });
  }
  return { nestHeadingsArray, selectHeadings };
}
function initSmoothScrolling(options) {
  var duration = options.duration, offset = options.offset;
  if (typeof window > "u" || typeof location > "u") return;
  var pageUrl = location.hash ? stripHash(location.href) : location.href;
  delegatedLinkHijacking();
  function delegatedLinkHijacking() {
    document.body.addEventListener("click", onClick, false);
    function onClick(e22) {
      !isInPageLink(e22.target) || e22.target.className.indexOf("no-smooth-scroll") > -1 || e22.target.href.charAt(e22.target.href.length - 2) === "#" && e22.target.href.charAt(e22.target.href.length - 1) === "!" || e22.target.className.indexOf(options.linkClass) === -1 || jump(e22.target.hash, { duration, offset, callback: function() {
        setFocus(e22.target.hash);
      } });
    }
  }
  function isInPageLink(n22) {
    return n22.tagName.toLowerCase() === "a" && (n22.hash.length > 0 || n22.href.charAt(n22.href.length - 1) === "#") && (stripHash(n22.href) === pageUrl || stripHash(n22.href) + "#" === pageUrl);
  }
  function stripHash(url) {
    return url.slice(0, url.lastIndexOf("#"));
  }
  function setFocus(hash) {
    var element = document.getElementById(hash.substring(1));
    element && (/^(?:a|select|input|button|textarea)$/i.test(element.tagName) || (element.tabIndex = -1), element.focus());
  }
}
function jump(target, options) {
  var start = window.pageYOffset, opt = { duration: options.duration, offset: options.offset || 0, callback: options.callback, easing: options.easing || easeInOutQuad }, tgt = document.querySelector('[id="' + decodeURI(target).split("#").join("") + '"]') || document.querySelector('[id="' + target.split("#").join("") + '"]'), distance = typeof target == "string" ? opt.offset + (target ? tgt && tgt.getBoundingClientRect().top || 0 : -(document.documentElement.scrollTop || document.body.scrollTop)) : target, duration = typeof opt.duration == "function" ? opt.duration(distance) : opt.duration, timeStart, timeElapsed;
  requestAnimationFrame(function(time) {
    timeStart = time, loop(time);
  });
  function loop(time) {
    timeElapsed = time - timeStart, window.scrollTo(0, opt.easing(timeElapsed, start, distance, duration)), timeElapsed < duration ? requestAnimationFrame(loop) : end();
  }
  function end() {
    window.scrollTo(0, start + distance), typeof opt.callback == "function" && opt.callback();
  }
  function easeInOutQuad(t22, b22, c22, d22) {
    return t22 /= d22 / 2, t22 < 1 ? c22 / 2 * t22 * t22 + b22 : (t22--, -c22 / 2 * (t22 * (t22 - 2) - 1) + b22);
  }
}
function updateTocScroll(options) {
  let toc = options.tocScrollingWrapper || options.tocElement || document.querySelector(options.tocSelector);
  if (toc && toc.scrollHeight > toc.clientHeight) {
    let activeItem = toc.querySelector(`.${options.activeListItemClass}`);
    if (activeItem) {
      let scrollAmount = activeItem.offsetTop - options.tocScrollOffset;
      toc.scrollTop = scrollAmount > 0 ? scrollAmount : 0;
    }
  }
}
var _options = {}, _buildHtml, _parseContent, _headingsArray, _scrollListener, clickListener;
function init(customOptions) {
  let hasInitialized = false;
  _options = extend(default_options_default, customOptions || {}), _options.scrollSmooth && (_options.duration = _options.scrollSmoothDuration, _options.offset = _options.scrollSmoothOffset, initSmoothScrolling(_options)), _buildHtml = build_html_default(_options), _parseContent = parseContent(_options), destroy();
  let contentElement = getContentElement(_options);
  if (contentElement === null) return;
  let tocElement = getTocElement(_options);
  if (tocElement === null || (_headingsArray = _parseContent.selectHeadings(contentElement, _options.headingSelector), _headingsArray === null)) return;
  let nestedHeadings = _parseContent.nestHeadingsArray(_headingsArray).nest;
  if (!_options.skipRendering) _buildHtml.render(tocElement, nestedHeadings);
  else return this;
  let isClick = false, scrollHandlerTimeout = _options.scrollHandlerTimeout || _options.throttleTimeout;
  _scrollListener = ((fn2, delay) => getScrollHandler(fn2, delay, _options.scrollHandlerType))((e22) => {
    var _a2, _b2, _c3;
    _buildHtml.updateToc(_headingsArray, e22), !_options.disableTocScrollSync && !isClick && updateTocScroll(_options), _options.enableUrlHashUpdateOnScroll && hasInitialized && _buildHtml.getCurrentlyHighlighting() && _buildHtml.updateUrlHashForHeader(_headingsArray);
    let isTop = ((_b2 = (_a2 = e22 == null ? void 0 : e22.target) == null ? void 0 : _a2.scrollingElement) == null ? void 0 : _b2.scrollTop) === 0;
    (e22 && (e22.eventPhase === 0 || e22.currentTarget === null) || isTop) && (_buildHtml.updateToc(_headingsArray), (_c3 = _options.scrollEndCallback) == null ? void 0 : _c3.call(_options, e22));
  }, scrollHandlerTimeout), hasInitialized || (_scrollListener(), hasInitialized = true), window.onhashchange = window.onscrollend = (e22) => {
    _scrollListener(e22);
  }, _options.scrollContainer && document.querySelector(_options.scrollContainer) ? (document.querySelector(_options.scrollContainer).addEventListener("scroll", _scrollListener, false), document.querySelector(_options.scrollContainer).addEventListener("resize", _scrollListener, false)) : (document.addEventListener("scroll", _scrollListener, false), document.addEventListener("resize", _scrollListener, false));
  let timeout = null;
  clickListener = throttle((event) => {
    isClick = true, _options.scrollSmooth && _buildHtml.disableTocAnimation(event), _buildHtml.updateToc(_headingsArray, event), timeout && clearTimeout(timeout), timeout = setTimeout(() => {
      _buildHtml.enableTocAnimation();
    }, _options.scrollSmoothDuration), setTimeout(() => {
      isClick = false;
    }, _options.scrollSmoothDuration + 100);
  }, _options.throttleTimeout), _options.scrollContainer && document.querySelector(_options.scrollContainer) ? document.querySelector(_options.scrollContainer).addEventListener("click", clickListener, false) : document.addEventListener("click", clickListener, false);
}
function destroy() {
  let tocElement = getTocElement(_options);
  tocElement !== null && (_options.skipRendering || tocElement && (tocElement.innerHTML = ""), _options.scrollContainer && document.querySelector(_options.scrollContainer) ? (document.querySelector(_options.scrollContainer).removeEventListener("scroll", _scrollListener, false), document.querySelector(_options.scrollContainer).removeEventListener("resize", _scrollListener, false), _buildHtml && document.querySelector(_options.scrollContainer).removeEventListener("click", clickListener, false)) : (document.removeEventListener("scroll", _scrollListener, false), document.removeEventListener("resize", _scrollListener, false), _buildHtml && document.removeEventListener("click", clickListener, false)));
}
function refresh(customOptions) {
  destroy(), init(customOptions || _options);
}
var hasOwnProp = Object.prototype.hasOwnProperty;
function extend(...args) {
  let target = {};
  for (let i22 = 0; i22 < args.length; i22++) {
    let source = args[i22];
    for (let key in source) hasOwnProp.call(source, key) && (target[key] = source[key]);
  }
  return target;
}
function throttle(fn2, threshold, scope) {
  threshold || (threshold = 250);
  let last, deferTimer;
  return function(...args) {
    let context = this, now = +/* @__PURE__ */ new Date();
    last && now < last + threshold ? (clearTimeout(deferTimer), deferTimer = setTimeout(() => {
      last = now, fn2.apply(context, args);
    }, threshold)) : (last = now, fn2.apply(context, args));
  };
}
function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout), timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
function getScrollHandler(func, timeout, type = "auto") {
  switch (type) {
    case "debounce":
      return debounce(func, timeout);
    case "throttle":
      return throttle(func, timeout);
    default:
      return timeout < 334 ? debounce(func, timeout) : throttle(func, timeout);
  }
}
function getContentElement(options) {
  try {
    return options.contentElement || document.querySelector(options.contentSelector);
  } catch {
    return console.warn(`Contents element not found: ${options.contentSelector}`), null;
  }
}
function getTocElement(options) {
  try {
    return options.tocElement || document.querySelector(options.tocSelector);
  } catch {
    return console.warn(`TOC element not found: ${options.tocSelector}`), null;
  }
}
var tocbot = { destroy, init, refresh };
var tocbot_default = tocbot;
var Aside = xr$3.aside(() => ({ width: "10rem", "@media (max-width: 768px)": { display: "none" } })), Nav = xr$3.nav(({ theme }) => ({ position: "fixed", bottom: 0, top: 0, width: "10rem", paddingTop: "4rem", paddingBottom: "2rem", overflowY: "auto", fontFamily: theme.typography.fonts.base, fontSize: theme.typography.size.s2, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch", "& *": { boxSizing: "border-box" }, "& > .toc-wrapper > .toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${theme.color.mediumlight}`, ".toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${theme.color.mediumlight}`, ".toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${theme.color.mediumlight}` } } }, "& .toc-list-item": { position: "relative", listStyleType: "none", marginLeft: 20, paddingTop: 3, paddingBottom: 3 }, "& .toc-list-item::before": { content: '""', position: "absolute", height: "100%", top: 0, left: 0, transform: "translateX(calc(-2px - 20px))", borderLeft: `solid 2px ${theme.color.mediumdark}`, opacity: 0, transition: "opacity 0.2s" }, "& .toc-list-item.is-active-li::before": { opacity: 1 }, "& .toc-list-item > a": { color: theme.color.defaultText, textDecoration: "none" }, "& .toc-list-item.is-active-li > a": { fontWeight: 600, color: theme.color.secondary, textDecoration: "none" } })), Heading = xr$3.p(({ theme }) => ({ fontWeight: 600, fontSize: "0.875em", color: theme.textColor, textTransform: "uppercase", marginBottom: 10 })), Title2 = ({ headingId, title }) => typeof title == "string" || !title ? e.createElement(Heading, { as: "h2", id: headingId, className: title ? "" : "sb-sr-only" }, title || "Table of contents") : e.createElement("div", { id: headingId }, title), TableOfContents = ({ title, disable, headingSelector, contentsSelector, ignoreSelector, unsafeTocbotOptions, channel, className }) => {
  reactExports.useEffect(() => {
    if (disable) return () => {
    };
    let configuration = { tocSelector: ".toc-wrapper", contentSelector: contentsSelector ?? ".sbdocs-content", headingSelector: headingSelector ?? "h3", ignoreSelector: ignoreSelector ?? ".docs-story *, .skip-toc", headingsOffset: 40, scrollSmoothOffset: -40, orderedList: false, onClick: (e22) => {
      if (e22.preventDefault(), e22.currentTarget instanceof HTMLAnchorElement) {
        let [, headerId] = e22.currentTarget.href.split("#");
        headerId && channel.emit(NAVIGATE_URL, `#${headerId}`);
      }
    }, ...unsafeTocbotOptions }, timeout = setTimeout(() => tocbot_default.init(configuration), 100);
    return () => {
      clearTimeout(timeout), tocbot_default.destroy();
    };
  }, [channel, disable, ignoreSelector, contentsSelector, headingSelector, unsafeTocbotOptions]);
  let headingId = reactExports.useId();
  return e.createElement(Aside, { className }, disable ? null : e.createElement(Nav, { "aria-labelledby": headingId }, e.createElement(Title2, { headingId, title }), e.createElement("div", { className: "toc-wrapper" })));
};
function t() {
  return t = Object.assign ? Object.assign.bind() : function(e22) {
    for (var t22 = 1; t22 < arguments.length; t22++) {
      var n22 = arguments[t22];
      for (var r22 in n22) Object.prototype.hasOwnProperty.call(n22, r22) && (e22[r22] = n22[r22]);
    }
    return e22;
  }, t.apply(this, arguments);
}
var n = ["children", "options"], r = { blockQuote: "0", breakLine: "1", breakThematic: "2", codeBlock: "3", codeFenced: "4", codeInline: "5", footnote: "6", footnoteReference: "7", gfmTask: "8", heading: "9", headingSetext: "10", htmlBlock: "11", htmlComment: "12", htmlSelfClosing: "13", image: "14", link: "15", linkAngleBraceStyleDetector: "16", linkBareUrlDetector: "17", linkMailtoDetector: "18", newlineCoalescer: "19", orderedList: "20", paragraph: "21", ref: "22", refImage: "23", refLink: "24", table: "25", text: "27", textBolded: "28", textEmphasized: "29", textEscaped: "30", textMarked: "31", textStrikethroughed: "32", unorderedList: "33" }, i;
(function(e22) {
  e22[e22.MAX = 0] = "MAX", e22[e22.HIGH = 1] = "HIGH", e22[e22.MED = 2] = "MED", e22[e22.LOW = 3] = "LOW", e22[e22.MIN = 4] = "MIN";
})(i || (i = {}));
var l = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e22, t22) => (e22[t22.toLowerCase()] = t22, e22), { class: "className", for: "htmlFor" }), o = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" }, a = ["style", "script"], c = ["src", "href", "data", "formAction", "srcDoc", "action"], s = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, d = /mailto:/i, u = /\n{2,}$/, p = /^(\s*>[\s\S]*?)(?=\n\n|$)/, f = /^ *> ?/gm, h = /^(?:\[!([^\]]*)\]\n)?([\s\S]*)/, m = /^ {2,}\n/, g = /^(?:( *[-*_])){3,} *(?:\n *)+\n/, y = /^(?: {1,3})?(`{3,}|~{3,}) *(\S+)? *([^\n]*?)?\n([\s\S]*?)(?:\1\n?|$)/, k = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, x = /^(`+)((?:\\`|(?!\1)`|[^`])+)\1/, b = /^(?:\n *)*\n/, v = /\r\n?/g, C = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/, $ = /^\[\^([^\]]+)]/, S = /\f/g, w = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/, E = /^\s*?\[(x|\s)\]/, z = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, L = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, A = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/, O = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i, T = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, B = /^<!--[\s\S]*?(?:-->)/, M = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, R = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, I = /^\{.*\}$/, D = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, U = /^<([^ >]+@[^ >]+)>/, N = /^<([^ >]+:\/[^ >]+)>/, j = /-([a-z])?/gi, H = /^(\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/, P = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, _ = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, F = /^\[([^\]]*)\] ?\[([^\]]*)\]/, W = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, G = /\t/g, Z = /(^ *\||\| *$)/g, q = /^ *:-+: *$/, Q = /^ *:-+ *$/, V = /^ *-+: *$/, X = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|\\\\\\1|[\\s\\S])+?)", J = new RegExp(`^([*_])\\1${X}\\1\\1(?!\\1)`), K = new RegExp(`^([*_])${X}\\1(?!\\1)`), Y = new RegExp(`^(==)${X}\\1`), ee = new RegExp(`^(~~)${X}\\1`), te = /^\\([^0-9A-Za-z\s])/, ne = /\\([^0-9A-Za-z\s])/g, re = /^([\s\S](?:(?!  |[0-9]\.)[^=*_~\-\n<`\\\[!])*)/, ie = /^\n+/, le = /^([ \t]*)/, oe = /\\([^\\])/g, ae = /(?:^|\n)( *)$/, ce = "(?:\\d+\\.)", se = "(?:[*+-])";
function de(e22) {
  return "( *)(" + (e22 === 1 ? ce : se) + ") +";
}
var ue = de(1), pe = de(2);
function fe(e22) {
  return new RegExp("^" + (e22 === 1 ? ue : pe));
}
var he = fe(1), me = fe(2);
function ge(e22) {
  return new RegExp("^" + (e22 === 1 ? ue : pe) + "[^\\n]*(?:\\n(?!\\1" + (e22 === 1 ? ce : se) + " )[^\\n]*)*(\\n|$)", "gm");
}
var ye = ge(1), ke = ge(2);
function xe(e22) {
  let t22 = e22 === 1 ? ce : se;
  return new RegExp("^( *)(" + t22 + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t22 + " (?!" + t22 + " ))\\n*|\\s*\\n*$)");
}
var be = xe(1), ve = xe(2);
function Ce(e22, t22) {
  let n22 = t22 === 1, i22 = n22 ? be : ve, l22 = n22 ? ye : ke, o22 = n22 ? he : me;
  return { match: Me2(function(e32, t32) {
    let n3 = ae.exec(t32.prevCapture);
    return n3 && (t32.list || !t32.inline && !t32.simple) ? i22.exec(e32 = n3[1] + e32) : null;
  }), order: 1, parse(e32, t32, r22) {
    let i32 = n22 ? +e32[2] : void 0, a22 = e32[0].replace(u, `
`).match(l22), c22 = false;
    return { items: a22.map(function(e4, n3) {
      let i4 = o22.exec(e4)[0].length, l32 = new RegExp("^ {1," + i4 + "}", "gm"), s22 = e4.replace(l32, "").replace(o22, ""), d22 = n3 === a22.length - 1, u22 = s22.indexOf(`

`) !== -1 || d22 && c22;
      c22 = u22;
      let p22 = r22.inline, f22 = r22.list, h2;
      r22.list = true, u22 ? (r22.inline = false, h2 = ze(s22) + `

`) : (r22.inline = true, h2 = ze(s22));
      let m2 = t32(h2, r22);
      return r22.inline = p22, r22.list = f22, m2;
    }), ordered: n22, start: i32 };
  }, render: (t32, n3, i32) => e22(t32.ordered ? "ol" : "ul", { key: i32.key, start: t32.type === r.orderedList ? t32.start : void 0 }, t32.items.map(function(t4, r22) {
    return e22("li", { key: r22 }, n3(t4, i32));
  })) };
}
var $e = new RegExp(`^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`), Se = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, we = [p, y, k, z, A, L, H, be, ve], Ee = [...we, /^[^\n]+(?:  \n|\n{2,})/, O, B, R];
function ze(e22) {
  let t22 = e22.length;
  for (; t22 > 0 && e22[t22 - 1] <= " "; ) t22--;
  return e22.slice(0, t22);
}
function Le(e22) {
  return e22.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function Ae(e22) {
  return V.test(e22) ? "right" : q.test(e22) ? "center" : Q.test(e22) ? "left" : null;
}
function Oe(e22, t22, n22, r22) {
  let i22 = n22.inTable;
  n22.inTable = true;
  let l22 = [[]], o22 = "";
  function a22() {
    if (!o22) return;
    let e32 = l22[l22.length - 1];
    e32.push.apply(e32, t22(o22, n22)), o22 = "";
  }
  return e22.trim().split(/(`[^`]*`|\\\||\|)/).filter(Boolean).forEach((e32, t32, n3) => {
    e32.trim() === "|" && (a22(), r22) ? t32 !== 0 && t32 !== n3.length - 1 && l22.push([]) : o22 += e32;
  }), a22(), n22.inTable = i22, l22;
}
function Te(e22, t22, n22) {
  n22.inline = true;
  let i22 = e22[2] ? e22[2].replace(Z, "").split("|").map(Ae) : [], l22 = e22[3] ? function(e32, t32, n3) {
    return e32.trim().split(`
`).map(function(e4) {
      return Oe(e4, t32, n3, true);
    });
  }(e22[3], t22, n22) : [], o22 = Oe(e22[1], t22, n22, !!l22.length);
  return n22.inline = false, l22.length ? { align: i22, cells: l22, header: o22, type: r.table } : { children: o22, type: r.paragraph };
}
function Be(e22, t22) {
  return e22.align[t22] == null ? {} : { textAlign: e22.align[t22] };
}
function Me2(e22) {
  return e22.inline = 1, e22;
}
function Re(e22) {
  return Me2(function(t22, n22) {
    return n22.inline ? e22.exec(t22) : null;
  });
}
function Ie2(e22) {
  return Me2(function(t22, n22) {
    return n22.inline || n22.simple ? e22.exec(t22) : null;
  });
}
function De(e22) {
  return function(t22, n22) {
    return n22.inline || n22.simple ? null : e22.exec(t22);
  };
}
function Ue(e22) {
  return Me2(function(t22) {
    return e22.exec(t22);
  });
}
function Ne(e22, t22) {
  if (t22.inline || t22.simple) return null;
  let n22 = "";
  e22.split(`
`).every((e32) => (e32 += `
`, !we.some((t32) => t32.test(e32)) && (n22 += e32, !!e32.trim())));
  let r22 = ze(n22);
  return r22 == "" ? null : [n22, , r22];
}
var je = /(javascript|vbscript|data(?!:image)):/i;
function He(e22) {
  try {
    let t22 = decodeURIComponent(e22).replace(/[^A-Za-z0-9/:]/g, "");
    if (je.test(t22)) return null;
  } catch {
    return null;
  }
  return e22;
}
function Pe(e22) {
  return e22.replace(oe, "$1");
}
function _e(e22, t22, n22) {
  let r22 = n22.inline || false, i22 = n22.simple || false;
  n22.inline = true, n22.simple = true;
  let l22 = e22(t22, n22);
  return n22.inline = r22, n22.simple = i22, l22;
}
function Fe(e22, t22, n22) {
  let r22 = n22.inline || false, i22 = n22.simple || false;
  n22.inline = false, n22.simple = true;
  let l22 = e22(t22, n22);
  return n22.inline = r22, n22.simple = i22, l22;
}
function We(e22, t22, n22) {
  let r22 = n22.inline || false;
  n22.inline = false;
  let i22 = e22(t22, n22);
  return n22.inline = r22, i22;
}
var Ge2 = (e22, t22, n22) => ({ children: _e(t22, e22[2], n22) });
function Ze() {
  return {};
}
function qe() {
  return null;
}
function Qe(...e22) {
  return e22.filter(Boolean).join(" ");
}
function Ve(e22, t22, n22) {
  let r22 = e22, i22 = t22.split(".");
  for (; i22.length && (r22 = r22[i22[0]], r22 !== void 0); ) i22.shift();
  return r22 || n22;
}
function Xe(n22 = "", i22 = {}) {
  function u22(e22, n3, ...r22) {
    let l22 = Ve(i22.overrides, `${e22}.props`, {});
    return i22.createElement(function(e32, t22) {
      let n4 = Ve(t22, e32);
      return n4 ? typeof n4 == "function" || typeof n4 == "object" && "render" in n4 ? n4 : Ve(t22, `${e32}.component`, e32) : e32;
    }(e22, i22.overrides), t({}, n3, l22, { className: Qe(n3 == null ? void 0 : n3.className, l22.className) || void 0 }), ...r22);
  }
  function Z2(e22) {
    e22 = e22.replace(w, "");
    let t22 = false;
    i22.forceInline ? t22 = true : i22.forceBlock || (t22 = W.test(e22) === false);
    let n3 = ae2(oe2(t22 ? e22 : `${ze(e22).replace(ie, "")}

`, { inline: t22 }));
    for (; typeof n3[n3.length - 1] == "string" && !n3[n3.length - 1].trim(); ) n3.pop();
    if (i22.wrapper === null) return n3;
    let r22 = i22.wrapper || (t22 ? "span" : "div"), l22;
    if (n3.length > 1 || i22.forceWrapper) l22 = n3;
    else {
      if (n3.length === 1) return l22 = n3[0], typeof l22 == "string" ? u22("span", { key: "outer" }, l22) : l22;
      l22 = null;
    }
    return i22.createElement(r22, { key: "outer" }, l22);
  }
  function q2(e22, t22) {
    let n3 = t22.match(s);
    return n3 ? n3.reduce(function(t32, n4) {
      let r22 = n4.indexOf("=");
      if (r22 !== -1) {
        let o22 = function(e32) {
          return e32.indexOf("-") !== -1 && e32.match(M) === null && (e32 = e32.replace(j, function(e4, t4) {
            return t4.toUpperCase();
          })), e32;
        }(n4.slice(0, r22)).trim(), a22 = function(e32) {
          let t4 = e32[0];
          return (t4 === '"' || t4 === "'") && e32.length >= 2 && e32[e32.length - 1] === t4 ? e32.slice(1, -1) : e32;
        }(n4.slice(r22 + 1).trim()), s22 = l[o22] || o22;
        if (s22 === "ref") return t32;
        let d22 = t32[s22] = function(e32, t4, n5, r32) {
          return t4 === "style" ? function(e4) {
            let t5 = [], n6 = "", r4 = false, i32 = false, l22 = "";
            if (!e4) return t5;
            for (let o4 = 0; o4 < e4.length; o4++) {
              let a32 = e4[o4];
              if (a32 !== '"' && a32 !== "'" || r4 || (i32 ? a32 === l22 && (i32 = false, l22 = "") : (i32 = true, l22 = a32)), a32 === "(" && n6.endsWith("url") ? r4 = true : a32 === ")" && r4 && (r4 = false), a32 !== ";" || i32 || r4) n6 += a32;
              else {
                let e52 = n6.trim();
                if (e52) {
                  let n72 = e52.indexOf(":");
                  if (n72 > 0) {
                    let r52 = e52.slice(0, n72).trim(), i4 = e52.slice(n72 + 1).trim();
                    t5.push([r52, i4]);
                  }
                }
                n6 = "";
              }
            }
            let o3 = n6.trim();
            if (o3) {
              let e52 = o3.indexOf(":");
              if (e52 > 0) {
                let n72 = o3.slice(0, e52).trim(), r52 = o3.slice(e52 + 1).trim();
                t5.push([n72, r52]);
              }
            }
            return t5;
          }(n5).reduce(function(t5, [n6, i32]) {
            return t5[n6.replace(/(-[a-z])/g, (e4) => e4[1].toUpperCase())] = r32(i32, e32, n6), t5;
          }, {}) : c.indexOf(t4) !== -1 ? r32(n5, e32, t4) : (n5.match(I) && (n5 = n5.slice(1, n5.length - 1)), n5 === "true" || n5 !== "false" && n5);
        }(e22, o22, a22, i22.sanitizer);
        typeof d22 == "string" && (O.test(d22) || R.test(d22)) && (t32[s22] = Z2(d22.trim()));
      } else n4 !== "style" && (t32[l[n4] || n4] = true);
      return t32;
    }, {}) : null;
  }
  i22.overrides = i22.overrides || {}, i22.sanitizer = i22.sanitizer || He, i22.slugify = i22.slugify || Le, i22.namedCodesToUnicode = i22.namedCodesToUnicode ? t({}, o, i22.namedCodesToUnicode) : o, i22.createElement = i22.createElement || reactExports.createElement;
  let Q2 = [], V2 = {}, X2 = { [r.blockQuote]: { match: De(p), order: 1, parse(e22, t22, n3) {
    let [, r22, i32] = e22[0].replace(f, "").match(h);
    return { alert: r22, children: t22(i32, n3) };
  }, render(e22, t22, n3) {
    let l22 = { key: n3.key };
    return e22.alert && (l22.className = "markdown-alert-" + i22.slugify(e22.alert.toLowerCase(), Le), e22.children.unshift({ attrs: {}, children: [{ type: r.text, text: e22.alert }], noInnerParse: true, type: r.htmlBlock, tag: "header" })), u22("blockquote", l22, t22(e22.children, n3));
  } }, [r.breakLine]: { match: Ue(m), order: 1, parse: Ze, render: (e22, t22, n3) => u22("br", { key: n3.key }) }, [r.breakThematic]: { match: De(g), order: 1, parse: Ze, render: (e22, t22, n3) => u22("hr", { key: n3.key }) }, [r.codeBlock]: { match: De(k), order: 0, parse: (e22) => ({ lang: void 0, text: ze(e22[0].replace(/^ {4}/gm, "")).replace(ne, "$1") }), render: (e22, n3, r22) => u22("pre", { key: r22.key }, u22("code", t({}, e22.attrs, { className: e22.lang ? `lang-${e22.lang}` : "" }), e22.text)) }, [r.codeFenced]: { match: De(y), order: 0, parse: (e22) => ({ attrs: q2("code", e22[3] || ""), lang: e22[2] || void 0, text: e22[4], type: r.codeBlock }) }, [r.codeInline]: { match: Ie2(x), order: 3, parse: (e22) => ({ text: e22[2].replace(ne, "$1") }), render: (e22, t22, n3) => u22("code", { key: n3.key }, e22.text) }, [r.footnote]: { match: De(C), order: 0, parse: (e22) => (Q2.push({ footnote: e22[2], identifier: e22[1] }), {}), render: qe }, [r.footnoteReference]: { match: Re($), order: 1, parse: (e22) => ({ target: `#${i22.slugify(e22[1], Le)}`, text: e22[1] }), render: (e22, t22, n3) => u22("a", { key: n3.key, href: i22.sanitizer(e22.target, "a", "href") }, u22("sup", { key: n3.key }, e22.text)) }, [r.gfmTask]: { match: Re(E), order: 1, parse: (e22) => ({ completed: e22[1].toLowerCase() === "x" }), render: (e22, t22, n3) => u22("input", { checked: e22.completed, key: n3.key, readOnly: true, type: "checkbox" }) }, [r.heading]: { match: De(i22.enforceAtxHeadings ? L : z), order: 1, parse: (e22, t22, n3) => ({ children: _e(t22, e22[2], n3), id: i22.slugify(e22[2], Le), level: e22[1].length }), render: (e22, t22, n3) => u22(`h${e22.level}`, { id: e22.id, key: n3.key }, t22(e22.children, n3)) }, [r.headingSetext]: { match: De(A), order: 0, parse: (e22, t22, n3) => ({ children: _e(t22, e22[1], n3), level: e22[2] === "=" ? 1 : 2, type: r.heading }) }, [r.htmlBlock]: { match: Ue(O), order: 1, parse(e22, t22, n3) {
    let [, r22] = e22[3].match(le), i32 = new RegExp(`^${r22}`, "gm"), l22 = e22[3].replace(i32, ""), o22 = (c22 = l22, Ee.some((e32) => e32.test(c22)) ? We : _e);
    var c22;
    let s22 = e22[1].toLowerCase(), d22 = a.indexOf(s22) !== -1, u32 = (d22 ? s22 : e22[1]).trim(), p22 = { attrs: q2(u32, e22[2]), noInnerParse: d22, tag: u32 };
    return n3.inAnchor = n3.inAnchor || s22 === "a", d22 ? p22.text = e22[3] : p22.children = o22(t22, l22, n3), n3.inAnchor = false, p22;
  }, render: (e22, n3, r22) => u22(e22.tag, t({ key: r22.key }, e22.attrs), e22.text || (e22.children ? n3(e22.children, r22) : "")) }, [r.htmlSelfClosing]: { match: Ue(R), order: 1, parse(e22) {
    let t22 = e22[1].trim();
    return { attrs: q2(t22, e22[2] || ""), tag: t22 };
  }, render: (e22, n3, r22) => u22(e22.tag, t({}, e22.attrs, { key: r22.key })) }, [r.htmlComment]: { match: Ue(B), order: 1, parse: () => ({}), render: qe }, [r.image]: { match: Ie2(Se), order: 1, parse: (e22) => ({ alt: e22[1], target: Pe(e22[2]), title: e22[3] }), render: (e22, t22, n3) => u22("img", { key: n3.key, alt: e22.alt || void 0, title: e22.title || void 0, src: i22.sanitizer(e22.target, "img", "src") }) }, [r.link]: { match: Re($e), order: 3, parse: (e22, t22, n3) => ({ children: Fe(t22, e22[1], n3), target: Pe(e22[2]), title: e22[3] }), render: (e22, t22, n3) => u22("a", { key: n3.key, href: i22.sanitizer(e22.target, "a", "href"), title: e22.title }, t22(e22.children, n3)) }, [r.linkAngleBraceStyleDetector]: { match: Re(N), order: 0, parse: (e22) => ({ children: [{ text: e22[1], type: r.text }], target: e22[1], type: r.link }) }, [r.linkBareUrlDetector]: { match: Me2((e22, t22) => t22.inAnchor || i22.disableAutoLink ? null : Re(D)(e22, t22)), order: 0, parse: (e22) => ({ children: [{ text: e22[1], type: r.text }], target: e22[1], title: void 0, type: r.link }) }, [r.linkMailtoDetector]: { match: Re(U), order: 0, parse(e22) {
    let t22 = e22[1], n3 = e22[1];
    return d.test(n3) || (n3 = "mailto:" + n3), { children: [{ text: t22.replace("mailto:", ""), type: r.text }], target: n3, type: r.link };
  } }, [r.orderedList]: Ce(u22, 1), [r.unorderedList]: Ce(u22, 2), [r.newlineCoalescer]: { match: De(b), order: 3, parse: Ze, render: () => `
` }, [r.paragraph]: { match: Me2(Ne), order: 3, parse: Ge2, render: (e22, t22, n3) => u22("p", { key: n3.key }, t22(e22.children, n3)) }, [r.ref]: { match: Re(P), order: 0, parse: (e22) => (V2[e22[1]] = { target: e22[2], title: e22[4] }, {}), render: qe }, [r.refImage]: { match: Ie2(_), order: 0, parse: (e22) => ({ alt: e22[1] || void 0, ref: e22[2] }), render: (e22, t22, n3) => V2[e22.ref] ? u22("img", { key: n3.key, alt: e22.alt, src: i22.sanitizer(V2[e22.ref].target, "img", "src"), title: V2[e22.ref].title }) : null }, [r.refLink]: { match: Re(F), order: 0, parse: (e22, t22, n3) => ({ children: t22(e22[1], n3), fallbackChildren: e22[0], ref: e22[2] }), render: (e22, t22, n3) => V2[e22.ref] ? u22("a", { key: n3.key, href: i22.sanitizer(V2[e22.ref].target, "a", "href"), title: V2[e22.ref].title }, t22(e22.children, n3)) : u22("span", { key: n3.key }, e22.fallbackChildren) }, [r.table]: { match: De(H), order: 1, parse: Te, render(e22, t22, n3) {
    let r22 = e22;
    return u22("table", { key: n3.key }, u22("thead", null, u22("tr", null, r22.header.map(function(e32, i32) {
      return u22("th", { key: i32, style: Be(r22, i32) }, t22(e32, n3));
    }))), u22("tbody", null, r22.cells.map(function(e32, i32) {
      return u22("tr", { key: i32 }, e32.map(function(e4, i4) {
        return u22("td", { key: i4, style: Be(r22, i4) }, t22(e4, n3));
      }));
    })));
  } }, [r.text]: { match: Ue(re), order: 4, parse: (e22) => ({ text: e22[0].replace(T, (e32, t22) => i22.namedCodesToUnicode[t22] ? i22.namedCodesToUnicode[t22] : e32) }), render: (e22) => e22.text }, [r.textBolded]: { match: Ie2(J), order: 2, parse: (e22, t22, n3) => ({ children: t22(e22[2], n3) }), render: (e22, t22, n3) => u22("strong", { key: n3.key }, t22(e22.children, n3)) }, [r.textEmphasized]: { match: Ie2(K), order: 3, parse: (e22, t22, n3) => ({ children: t22(e22[2], n3) }), render: (e22, t22, n3) => u22("em", { key: n3.key }, t22(e22.children, n3)) }, [r.textEscaped]: { match: Ie2(te), order: 1, parse: (e22) => ({ text: e22[1], type: r.text }) }, [r.textMarked]: { match: Ie2(Y), order: 3, parse: Ge2, render: (e22, t22, n3) => u22("mark", { key: n3.key }, t22(e22.children, n3)) }, [r.textStrikethroughed]: { match: Ie2(ee), order: 3, parse: Ge2, render: (e22, t22, n3) => u22("del", { key: n3.key }, t22(e22.children, n3)) } };
  i22.disableParsingRawHTML === true && (delete X2[r.htmlBlock], delete X2[r.htmlSelfClosing]);
  let oe2 = function(e22) {
    let t22 = Object.keys(e22);
    function n3(r22, i32) {
      let l22, o22, a22 = [], c22 = "", s22 = "";
      for (i32.prevCapture = i32.prevCapture || ""; r22; ) {
        let d22 = 0;
        for (; d22 < t22.length; ) {
          if (c22 = t22[d22], l22 = e22[c22], i32.inline && !l22.match.inline) {
            d22++;
            continue;
          }
          let u32 = l22.match(r22, i32);
          if (u32) {
            s22 = u32[0], i32.prevCapture += s22, r22 = r22.substring(s22.length), o22 = l22.parse(u32, n3, i32), o22.type == null && (o22.type = c22), a22.push(o22);
            break;
          }
          d22++;
        }
      }
      return i32.prevCapture = "", a22;
    }
    return t22.sort(function(t32, n4) {
      let r22 = e22[t32].order, i32 = e22[n4].order;
      return r22 !== i32 ? r22 - i32 : t32 < n4 ? -1 : 1;
    }), function(e32, t32) {
      return n3(function(e4) {
        return e4.replace(v, `
`).replace(S, "").replace(G, "    ");
      }(e32), t32);
    };
  }(X2), ae2 = (ce2 = /* @__PURE__ */ function(e22, t22) {
    return function(n3, r22, i32) {
      let l22 = e22[n3.type].render;
      return t22 ? t22(() => l22(n3, r22, i32), n3, r22, i32) : l22(n3, r22, i32);
    };
  }(X2, i22.renderRule), function e22(t22, n3 = {}) {
    if (Array.isArray(t22)) {
      let r22 = n3.key, i32 = [], l22 = false;
      for (let r32 = 0; r32 < t22.length; r32++) {
        n3.key = r32;
        let o22 = e22(t22[r32], n3), a22 = typeof o22 == "string";
        a22 && l22 ? i32[i32.length - 1] += o22 : o22 !== null && i32.push(o22), l22 = a22;
      }
      return n3.key = r22, i32;
    }
    return ce2(t22, e22, n3);
  });
  var ce2;
  let se2 = Z2(n22);
  return Q2.length ? u22("div", null, se2, u22("footer", { key: "footer" }, Q2.map(function(e22) {
    return u22("div", { id: i22.slugify(e22.identifier, Le), key: e22.identifier }, e22.identifier, ae2(oe2(e22.footnote, { inline: true })));
  }))) : se2;
}
var index_modern_default = (t22) => {
  let { children: r22 = "", options: i22 } = t22, l22 = function(e22, t32) {
    if (e22 == null) return {};
    var n22, r32, i32 = {}, l32 = Object.keys(e22);
    for (r32 = 0; r32 < l32.length; r32++) t32.indexOf(n22 = l32[r32]) >= 0 || (i32[n22] = e22[n22]);
    return i32;
  }(t22, n);
  return reactExports.cloneElement(Xe(r22, i22), l22);
};
var Label2 = xr$3.label(({ theme }) => ({ lineHeight: "18px", alignItems: "center", marginBottom: 8, display: "inline-block", position: "relative", whiteSpace: "nowrap", background: theme.boolean.background, borderRadius: "3em", padding: 1, '&[aria-disabled="true"]': { opacity: 0.5, input: { cursor: "not-allowed" } }, input: { appearance: "none", width: "100%", height: "100%", position: "absolute", left: 0, top: 0, margin: 0, padding: 0, border: "none", background: "transparent", cursor: "pointer", borderRadius: "3em", "&:focus": { outline: "none", boxShadow: `${theme.color.secondary} 0 0 0 1px inset !important` }, "@media (forced-colors: active)": { "&:focus": { outline: "1px solid highlight" } } }, span: { textAlign: "center", fontSize: theme.typography.size.s1, fontWeight: theme.typography.weight.bold, lineHeight: "1", cursor: "pointer", display: "inline-block", padding: "7px 15px", transition: "all 100ms ease-out", userSelect: "none", borderRadius: "3em", color: curriedTransparentize$1(0.5, theme.color.defaultText), background: "transparent", "&:hover": { boxShadow: `${curriedOpacify$1(0.3, theme.appBorderColor)} 0 0 0 1px inset` }, "&:active": { boxShadow: `${curriedOpacify$1(0.05, theme.appBorderColor)} 0 0 0 2px inset`, color: curriedOpacify$1(1, theme.appBorderColor) }, "&:first-of-type": { paddingRight: 8 }, "&:last-of-type": { paddingLeft: 8 } }, "input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type": { background: theme.boolean.selectedBackground, boxShadow: theme.base === "light" ? `${curriedOpacify$1(0.1, theme.appBorderColor)} 0 0 2px` : `${theme.appBorderColor} 0 0 0 1px`, color: theme.color.defaultText, padding: "7px 15px", "@media (forced-colors: active)": { textDecoration: "underline" } } })), parse = (value2) => value2 === "true", BooleanControl = ({ name, value: value2, onChange, onBlur, onFocus, argType }) => {
  var _a2;
  let onSetFalse = reactExports.useCallback(() => onChange(false), [onChange]), readonly = !!((_a2 = argType == null ? void 0 : argType.table) == null ? void 0 : _a2.readonly);
  if (value2 === void 0) return e.createElement(Hr, { variant: "outline", size: "medium", id: getControlSetterButtonId(name), onClick: onSetFalse, disabled: readonly }, "Set boolean");
  let controlId = getControlId(name), parsedValue = typeof value2 == "string" ? parse(value2) : value2;
  return e.createElement(Label2, { "aria-disabled": readonly, htmlFor: controlId, "aria-label": name }, e.createElement("input", { id: controlId, type: "checkbox", onChange: (e22) => onChange(e22.target.checked), checked: parsedValue, role: "switch", disabled: readonly, name, onBlur, onFocus }), e.createElement("span", { "aria-hidden": "true" }, "False"), e.createElement("span", { "aria-hidden": "true" }, "True"));
};
var parseDate = (value2) => {
  let [year, month, day] = value2.split("-"), result = /* @__PURE__ */ new Date();
  return result.setFullYear(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10)), result;
}, parseTime = (value2) => {
  let [hours, minutes] = value2.split(":"), result = /* @__PURE__ */ new Date();
  return result.setHours(parseInt(hours, 10)), result.setMinutes(parseInt(minutes, 10)), result;
}, formatDate = (value2) => {
  let date = new Date(value2), year = `000${date.getFullYear()}`.slice(-4), month = `0${date.getMonth() + 1}`.slice(-2), day = `0${date.getDate()}`.slice(-2);
  return `${year}-${month}-${day}`;
}, formatTime = (value2) => {
  let date = new Date(value2), hours = `0${date.getHours()}`.slice(-2), minutes = `0${date.getMinutes()}`.slice(-2);
  return `${hours}:${minutes}`;
}, FormInput = xr$3(d7.Input)(({ readOnly }) => ({ opacity: readOnly ? 0.5 : 1 })), FlexSpaced = xr$3.div(({ theme }) => ({ flex: 1, display: "flex", input: { marginLeft: 10, flex: 1, height: 32, "&::-webkit-calendar-picker-indicator": { opacity: 0.5, height: 12, filter: theme.base === "light" ? void 0 : "invert(1)" } }, "input:first-of-type": { marginLeft: 0, flexGrow: 4 }, "input:last-of-type": { flexGrow: 3 } })), DateControl = ({ name, value: value2, onChange, onFocus, onBlur, argType }) => {
  var _a2;
  let [valid, setValid] = reactExports.useState(true), dateRef = reactExports.useRef(), timeRef = reactExports.useRef(), readonly = !!((_a2 = argType == null ? void 0 : argType.table) == null ? void 0 : _a2.readonly);
  reactExports.useEffect(() => {
    valid !== false && (dateRef && dateRef.current && (dateRef.current.value = value2 ? formatDate(value2) : ""), timeRef && timeRef.current && (timeRef.current.value = value2 ? formatTime(value2) : ""));
  }, [value2]);
  let onDateChange = (e22) => {
    if (!e22.target.value) return onChange();
    let parsed = parseDate(e22.target.value), result = new Date(value2 ?? "");
    result.setFullYear(parsed.getFullYear(), parsed.getMonth(), parsed.getDate());
    let time = result.getTime();
    time && onChange(time), setValid(!!time);
  }, onTimeChange = (e22) => {
    if (!e22.target.value) return onChange();
    let parsed = parseTime(e22.target.value), result = new Date(value2 ?? "");
    result.setHours(parsed.getHours()), result.setMinutes(parsed.getMinutes());
    let time = result.getTime();
    time && onChange(time), setValid(!!time);
  }, controlId = getControlId(name);
  return e.createElement(FlexSpaced, null, e.createElement(FormInput, { type: "date", max: "9999-12-31", ref: dateRef, id: `${controlId}-date`, name: `${controlId}-date`, readOnly: readonly, onChange: onDateChange, onFocus, onBlur }), e.createElement(FormInput, { type: "time", id: `${controlId}-time`, name: `${controlId}-time`, ref: timeRef, onChange: onTimeChange, readOnly: readonly, onFocus, onBlur }), valid ? null : e.createElement("div", null, "invalid"));
};
var Wrapper4 = xr$3.label({ display: "flex" }), parse2 = (value2) => {
  let result = parseFloat(value2);
  return Number.isNaN(result) ? void 0 : result;
}, FormInput2 = xr$3(d7.Input)(({ readOnly }) => ({ opacity: readOnly ? 0.5 : 1 })), NumberControl = ({ name, value: value2, onChange, min, max, step, onBlur, onFocus, argType }) => {
  var _a2;
  let [inputValue, setInputValue] = reactExports.useState(typeof value2 == "number" ? value2 : ""), [forceVisible, setForceVisible] = reactExports.useState(false), [parseError, setParseError] = reactExports.useState(null), readonly = !!((_a2 = argType == null ? void 0 : argType.table) == null ? void 0 : _a2.readonly), handleChange = reactExports.useCallback((event) => {
    setInputValue(event.target.value);
    let result = parseFloat(event.target.value);
    Number.isNaN(result) ? setParseError(new Error(`'${event.target.value}' is not a number`)) : (onChange(result), setParseError(null));
  }, [onChange, setParseError]), onForceVisible = reactExports.useCallback(() => {
    setInputValue("0"), onChange(0), setForceVisible(true);
  }, [setForceVisible]), htmlElRef = reactExports.useRef(null);
  return reactExports.useEffect(() => {
    forceVisible && htmlElRef.current && htmlElRef.current.select();
  }, [forceVisible]), reactExports.useEffect(() => {
    let newInputValue = typeof value2 == "number" ? value2 : "";
    inputValue !== newInputValue && setInputValue(newInputValue);
  }, [value2]), value2 === void 0 ? e.createElement(Hr, { variant: "outline", size: "medium", id: getControlSetterButtonId(name), onClick: onForceVisible, disabled: readonly }, "Set number") : e.createElement(Wrapper4, null, e.createElement(FormInput2, { ref: htmlElRef, id: getControlId(name), type: "number", onChange: handleChange, size: "flex", placeholder: "Edit number...", value: inputValue, valid: parseError ? "error" : void 0, autoFocus: forceVisible, readOnly: readonly, name, min, max, step, onFocus, onBlur }));
};
var selectedKey = (value2, options) => {
  let entry = options && Object.entries(options).find(([_key, val]) => val === value2);
  return entry ? entry[0] : void 0;
}, selectedKeys = (value2, options) => value2 && options ? Object.entries(options).filter((entry) => value2.includes(entry[1])).map((entry) => entry[0]) : [], selectedValues = (keys, options) => keys && options && keys.map((key) => options[key]);
var Wrapper5 = xr$3.div(({ isInline }) => isInline ? { display: "flex", flexWrap: "wrap", alignItems: "flex-start", label: { display: "inline-flex", marginRight: 15 } } : { label: { display: "flex" } }, (props) => {
  if (props["aria-readonly"] === "true") return { input: { cursor: "not-allowed" } };
}), Text = xr$3.span({ "[aria-readonly=true] &": { opacity: 0.5 } }), Label3 = xr$3.label({ lineHeight: "20px", alignItems: "center", marginBottom: 8, "&:last-child": { marginBottom: 0 }, input: { margin: 0, marginRight: 6 } }), CheckboxControl = ({ name, options, value: value2, onChange, isInline, argType }) => {
  var _a2;
  if (!options) return logger.warn(`Checkbox with no options: ${name}`), e.createElement(e.Fragment, null, "-");
  let initial = selectedKeys(value2 || [], options), [selected, setSelected] = reactExports.useState(initial), readonly = !!((_a2 = argType == null ? void 0 : argType.table) == null ? void 0 : _a2.readonly), handleChange = (e22) => {
    let option = e22.target.value, updated = [...selected];
    updated.includes(option) ? updated.splice(updated.indexOf(option), 1) : updated.push(option), onChange(selectedValues(updated, options)), setSelected(updated);
  };
  reactExports.useEffect(() => {
    setSelected(selectedKeys(value2 || [], options));
  }, [value2]);
  let controlId = getControlId(name);
  return e.createElement(Wrapper5, { "aria-readonly": readonly, isInline }, Object.keys(options).map((key, index2) => {
    let id2 = `${controlId}-${index2}`;
    return e.createElement(Label3, { key: id2, htmlFor: id2 }, e.createElement("input", { type: "checkbox", disabled: readonly, id: id2, name: id2, value: key, onChange: handleChange, checked: selected == null ? void 0 : selected.includes(key) }), e.createElement(Text, null, key));
  }));
};
var Wrapper6 = xr$3.div(({ isInline }) => isInline ? { display: "flex", flexWrap: "wrap", alignItems: "flex-start", label: { display: "inline-flex", marginRight: 15 } } : { label: { display: "flex" } }, (props) => {
  if (props["aria-readonly"] === "true") return { input: { cursor: "not-allowed" } };
}), Text2 = xr$3.span({ "[aria-readonly=true] &": { opacity: 0.5 } }), Label4 = xr$3.label({ lineHeight: "20px", alignItems: "center", marginBottom: 8, "&:last-child": { marginBottom: 0 }, input: { margin: 0, marginRight: 6 } }), RadioControl = ({ name, options, value: value2, onChange, isInline, argType }) => {
  var _a2;
  if (!options) return logger.warn(`Radio with no options: ${name}`), e.createElement(e.Fragment, null, "-");
  let selection = selectedKey(value2, options), controlId = getControlId(name), readonly = !!((_a2 = argType == null ? void 0 : argType.table) == null ? void 0 : _a2.readonly);
  return e.createElement(Wrapper6, { "aria-readonly": readonly, isInline }, Object.keys(options).map((key, index2) => {
    let id2 = `${controlId}-${index2}`;
    return e.createElement(Label4, { key: id2, htmlFor: id2 }, e.createElement("input", { type: "radio", id: id2, name: controlId, disabled: readonly, value: key, onChange: (e22) => onChange(options[e22.currentTarget.value]), checked: key === selection }), e.createElement(Text2, null, key));
  }));
};
var styleResets = { appearance: "none", border: "0 none", boxSizing: "inherit", display: " block", margin: " 0", background: "transparent", padding: 0, fontSize: "inherit", position: "relative" }, OptionsSelect = xr$3.select(styleResets, ({ theme }) => ({ boxSizing: "border-box", position: "relative", padding: "6px 10px", width: "100%", color: theme.input.color || "inherit", background: theme.input.background, borderRadius: theme.input.borderRadius, boxShadow: `${theme.input.border} 0 0 0 1px inset`, fontSize: theme.typography.size.s2 - 1, lineHeight: "20px", "&:focus": { boxShadow: `${theme.color.secondary} 0 0 0 1px inset`, outline: "none" }, "&[disabled]": { cursor: "not-allowed", opacity: 0.5 }, "::placeholder": { color: theme.textMutedColor }, "&[multiple]": { overflow: "auto", padding: 0, option: { display: "block", padding: "6px 10px", marginLeft: 1, marginRight: 1 } } })), SelectWrapper = xr$3.span(({ theme }) => ({ display: "inline-block", lineHeight: "normal", overflow: "hidden", position: "relative", verticalAlign: "top", width: "100%", svg: { position: "absolute", zIndex: 1, pointerEvents: "none", height: "12px", marginTop: "-6px", right: "12px", top: "50%", fill: theme.textMutedColor, path: { fill: theme.textMutedColor } } })), NO_SELECTION = "Choose option...", SingleSelect = ({ name, value: value2, options, onChange, argType }) => {
  var _a2;
  let handleChange = (e22) => {
    onChange(options[e22.currentTarget.value]);
  }, selection = selectedKey(value2, options) || NO_SELECTION, controlId = getControlId(name), readonly = !!((_a2 = argType == null ? void 0 : argType.table) == null ? void 0 : _a2.readonly);
  return e.createElement(SelectWrapper, null, e.createElement(ChevronSmallDownIcon, null), e.createElement(OptionsSelect, { disabled: readonly, id: controlId, value: selection, onChange: handleChange }, e.createElement("option", { key: "no-selection", disabled: true }, NO_SELECTION), Object.keys(options).map((key) => e.createElement("option", { key, value: key }, key))));
}, MultiSelect = ({ name, value: value2, options, onChange, argType }) => {
  var _a2;
  let handleChange = (e22) => {
    let selection2 = Array.from(e22.currentTarget.options).filter((option) => option.selected).map((option) => option.value);
    onChange(selectedValues(selection2, options));
  }, selection = selectedKeys(value2, options), controlId = getControlId(name), readonly = !!((_a2 = argType == null ? void 0 : argType.table) == null ? void 0 : _a2.readonly);
  return e.createElement(SelectWrapper, null, e.createElement(OptionsSelect, { disabled: readonly, id: controlId, multiple: true, value: selection, onChange: handleChange }, Object.keys(options).map((key) => e.createElement("option", { key, value: key }, key))));
}, SelectControl = (props) => {
  let { name, options } = props;
  return options ? props.isMulti ? e.createElement(MultiSelect, { ...props }) : e.createElement(SingleSelect, { ...props }) : (logger.warn(`Select with no options: ${name}`), e.createElement(e.Fragment, null, "-"));
};
var normalizeOptions = (options, labels) => Array.isArray(options) ? options.reduce((acc, item) => (acc[(labels == null ? void 0 : labels[item]) || String(item)] = item, acc), {}) : options, Controls = { check: CheckboxControl, "inline-check": CheckboxControl, radio: RadioControl, "inline-radio": RadioControl, select: SelectControl, "multi-select": SelectControl }, OptionsControl = (props) => {
  let { type = "select", labels, argType } = props, normalized = { ...props, argType, options: argType ? normalizeOptions(argType.options, labels) : {}, isInline: type.includes("inline"), isMulti: type.includes("multi") }, Control = Controls[type];
  if (Control) return e.createElement(Control, { ...normalized });
  throw new Error(`Unknown options type: ${type}`);
};
var Container = xr$3.div(({ theme }) => ({ position: "relative", ":hover": { "& > .rejt-accordion-button::after": { background: theme.color.secondary }, "& > .rejt-accordion-region > :is(.rejt-plus-menu, .rejt-minus-menu)": { opacity: 1 } } })), Trigger = xr$3.button(({ theme }) => ({ padding: 0, background: "transparent", border: "none", marginRight: "3px", lineHeight: "22px", color: theme.color.secondary, "::after": { content: '""', position: "absolute", top: 0, display: "block", width: "100%", marginLeft: "-1rem", height: "22px", background: "transparent", borderRadius: 4, transition: "background 0.2s", opacity: 0.1, paddingRight: "20px" }, "::before": { content: '""', position: "absolute" }, '&[aria-expanded="true"]::before': { left: -10, top: 10, borderTop: "3px solid rgba(153,153,153,0.6)", borderLeft: "3px solid transparent", borderRight: "3px solid transparent" }, '&[aria-expanded="false"]::before': { left: -8, top: 8, borderTop: "3px solid transparent", borderBottom: "3px solid transparent", borderLeft: "3px solid rgba(153,153,153,0.6)" } })), Region = xr$3.div({ display: "inline" });
function JsonNodeAccordion({ children, name, collapsed, keyPath, deep, ...props }) {
  let accordionKey = `${keyPath.at(-1) ?? "root"}-${name}-${deep}`, ids = { trigger: `${accordionKey}-trigger`, region: `${accordionKey}-region` }, containerTag = keyPath.length > 0 ? "li" : "div";
  return e.createElement(Container, { as: containerTag }, e.createElement(Trigger, { type: "button", "aria-expanded": !collapsed, id: ids.trigger, "aria-controls": ids.region, className: "rejt-accordion-button", ...props }, name, " :"), e.createElement(Region, { role: "region", id: ids.region, "aria-labelledby": ids.trigger, className: "rejt-accordion-region" }, children));
}
var ERROR = "Error", OBJECT = "Object", ARRAY = "Array", STRING = "String", NUMBER = "Number", BOOLEAN = "Boolean", DATE = "Date", NULL = "Null", UNDEFINED = "Undefined", FUNCTION = "Function", SYMBOL = "Symbol";
var ADD_DELTA_TYPE = "ADD_DELTA_TYPE", REMOVE_DELTA_TYPE = "REMOVE_DELTA_TYPE", UPDATE_DELTA_TYPE = "UPDATE_DELTA_TYPE";
var VALUE = "value", KEY = "key";
function getObjectType(obj) {
  return obj !== null && typeof obj == "object" && !Array.isArray(obj) && typeof obj[Symbol.iterator] == "function" ? "Iterable" : Object.prototype.toString.call(obj).slice(8, -1);
}
function isComponentWillChange(oldValue, newValue) {
  let oldType = getObjectType(oldValue), newType = getObjectType(newValue);
  return (oldType === "Function" || newType === "Function") && newType !== oldType;
}
var JsonAddValue = class extends reactExports.Component {
  constructor(props) {
    super(props), this.state = { inputRefKey: null, inputRefValue: null }, this.refInputValue = this.refInputValue.bind(this), this.refInputKey = this.refInputKey.bind(this), this.onKeydown = this.onKeydown.bind(this), this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    let { inputRefKey, inputRefValue } = this.state, { onlyValue } = this.props;
    inputRefKey && typeof inputRefKey.focus == "function" && inputRefKey.focus(), onlyValue && inputRefValue && typeof inputRefValue.focus == "function" && inputRefValue.focus();
  }
  onKeydown(event) {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.repeat) return;
    let { inputRefKey, inputRefValue } = this.state, { addButtonElement, handleCancel } = this.props;
    [inputRefKey, inputRefValue, addButtonElement].some((elm) => elm === event.target) && ((event.code === "Enter" || event.key === "Enter") && (event.preventDefault(), this.onSubmit()), (event.code === "Escape" || event.key === "Escape") && (event.preventDefault(), handleCancel()));
  }
  onSubmit() {
    let { handleAdd, onlyValue, onSubmitValueParser, keyPath, deep } = this.props, { inputRefKey, inputRefValue } = this.state, result = {};
    if (!onlyValue) {
      if (!inputRefKey.value) return;
      result.key = inputRefKey.value;
    }
    result.newValue = onSubmitValueParser(false, keyPath, deep, result.key, inputRefValue.value), handleAdd(result);
  }
  refInputKey(node) {
    this.state.inputRefKey = node;
  }
  refInputValue(node) {
    this.state.inputRefValue = node;
  }
  render() {
    let { handleCancel, onlyValue, addButtonElement, cancelButtonElement, inputElementGenerator, keyPath, deep } = this.props, addButtonElementLayout = addButtonElement && reactExports.cloneElement(addButtonElement, { onClick: this.onSubmit }), cancelButtonElementLayout = cancelButtonElement && reactExports.cloneElement(cancelButtonElement, { onClick: handleCancel }), inputElementValue = inputElementGenerator(VALUE, keyPath, deep), inputElementValueLayout = reactExports.cloneElement(inputElementValue, { placeholder: "Value", ref: this.refInputValue, onKeyDown: this.onKeydown }), inputElementKeyLayout = null;
    if (!onlyValue) {
      let inputElementKey = inputElementGenerator(KEY, keyPath, deep);
      inputElementKeyLayout = reactExports.cloneElement(inputElementKey, { placeholder: "Key", ref: this.refInputKey, onKeyDown: this.onKeydown });
    }
    return e.createElement("span", { className: "rejt-add-value-node" }, inputElementKeyLayout, inputElementValueLayout, addButtonElementLayout, cancelButtonElementLayout);
  }
};
JsonAddValue.defaultProps = { onlyValue: false, addButtonElement: e.createElement("button", null, "+"), cancelButtonElement: e.createElement("button", null, "c") };
var JsonArray = class extends reactExports.Component {
  constructor(props) {
    super(props);
    let keyPath = [...props.keyPath || [], props.name];
    this.state = { data: props.data, name: props.name, keyPath: keyPath ?? [], deep: props.deep ?? 0, nextDeep: (props.deep ?? 0) + 1, collapsed: props.isCollapsed(keyPath, props.deep ?? 0, props.data), addFormVisible: false }, this.handleCollapseMode = this.handleCollapseMode.bind(this), this.handleRemoveItem = this.handleRemoveItem.bind(this), this.handleAddMode = this.handleAddMode.bind(this), this.handleAddValueAdd = this.handleAddValueAdd.bind(this), this.handleAddValueCancel = this.handleAddValueCancel.bind(this), this.handleEditValue = this.handleEditValue.bind(this), this.onChildUpdate = this.onChildUpdate.bind(this), this.renderCollapsed = this.renderCollapsed.bind(this), this.renderNotCollapsed = this.renderNotCollapsed.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.data !== state.data ? { data: props.data } : null;
  }
  onChildUpdate(childKey, childData) {
    let { data, keyPath = [] } = this.state;
    data[childKey] = childData, this.setState({ data });
    let { onUpdate } = this.props, size = keyPath.length;
    onUpdate(keyPath[size - 1], data);
  }
  handleAddMode() {
    this.setState({ addFormVisible: true });
  }
  handleCollapseMode() {
    this.setState((state) => ({ collapsed: !state.collapsed }));
  }
  handleRemoveItem(index2) {
    return () => {
      let { beforeRemoveAction, logger: logger4 } = this.props, { data, keyPath, nextDeep: deep } = this.state, oldValue = data[index2];
      (beforeRemoveAction || Promise.resolve.bind(Promise))(index2, keyPath, deep, oldValue).then(() => {
        let deltaUpdateResult = { keyPath, deep, key: index2, oldValue, type: REMOVE_DELTA_TYPE };
        data.splice(index2, 1), this.setState({ data });
        let { onUpdate, onDeltaUpdate } = this.props;
        onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate(deltaUpdateResult);
      }).catch(logger4.error);
    };
  }
  handleAddValueAdd({ key, newValue }) {
    let { data, keyPath = [], nextDeep: deep } = this.state, { beforeAddAction, logger: logger4 } = this.props;
    (beforeAddAction || Promise.resolve.bind(Promise))(key, keyPath, deep, newValue).then(() => {
      data[key] = newValue, this.setState({ data }), this.handleAddValueCancel();
      let { onUpdate, onDeltaUpdate } = this.props;
      onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate({ type: ADD_DELTA_TYPE, keyPath, deep, key, newValue });
    }).catch(logger4.error);
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: false });
  }
  handleEditValue({ key, value: value2 }) {
    return new Promise((resolve, reject) => {
      let { beforeUpdateAction } = this.props, { data, keyPath, nextDeep: deep } = this.state, oldValue = data[key];
      (beforeUpdateAction || Promise.resolve.bind(Promise))(key, keyPath, deep, oldValue, value2).then(() => {
        data[key] = value2, this.setState({ data });
        let { onUpdate, onDeltaUpdate } = this.props;
        onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate({ type: UPDATE_DELTA_TYPE, keyPath, deep, key, newValue: value2, oldValue }), resolve(void 0);
      }).catch(reject);
    });
  }
  renderCollapsed() {
    let { name, data, keyPath, deep } = this.state, { handleRemove, readOnly, getStyle, dataType, minusMenuElement } = this.props, { minus, collapsed } = getStyle(name, data, keyPath, deep, dataType), isReadOnly = readOnly(name, data, keyPath, deep, dataType), removeItemButton = minusMenuElement && reactExports.cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: minus, "aria-label": `remove the array '${String(name)}'` });
    return e.createElement(e.Fragment, null, e.createElement("span", { style: collapsed }, "[...] ", data.length, " ", data.length === 1 ? "item" : "items"), !isReadOnly && removeItemButton);
  }
  renderNotCollapsed() {
    let { name, data, keyPath, deep, addFormVisible, nextDeep } = this.state, { isCollapsed, handleRemove, onDeltaUpdate, readOnly, getStyle, dataType, addButtonElement, cancelButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser } = this.props, { minus, plus, delimiter, ul: ul2, addForm } = getStyle(name, data, keyPath, deep, dataType), isReadOnly = readOnly(name, data, keyPath, deep, dataType), addItemButton = plusMenuElement && reactExports.cloneElement(plusMenuElement, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: plus, "aria-label": `add a new item to the '${String(name)}' array` }), removeItemButton = minusMenuElement && reactExports.cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: minus, "aria-label": `remove the array '${String(name)}'` });
    return e.createElement(e.Fragment, null, e.createElement("span", { className: "rejt-not-collapsed-delimiter", style: delimiter }, "["), !addFormVisible && addItemButton, e.createElement("ul", { className: "rejt-not-collapsed-list", style: ul2 }, data.map((item, index2) => e.createElement(JsonNode, { key: index2, name: index2.toString(), data: item, keyPath, deep: nextDeep, isCollapsed, handleRemove: this.handleRemoveItem(index2), handleUpdateValue: this.handleEditValue, onUpdate: this.onChildUpdate, onDeltaUpdate, readOnly, getStyle, addButtonElement, cancelButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser }))), !isReadOnly && addFormVisible && e.createElement("div", { className: "rejt-add-form", style: addForm }, e.createElement(JsonAddValue, { handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, onlyValue: true, addButtonElement, cancelButtonElement, inputElementGenerator, keyPath, deep, onSubmitValueParser })), e.createElement("span", { className: "rejt-not-collapsed-delimiter", style: delimiter }, "]"), !isReadOnly && removeItemButton);
  }
  render() {
    let { name, collapsed, keyPath, deep } = this.state, value2 = collapsed ? this.renderCollapsed() : this.renderNotCollapsed();
    return e.createElement(JsonNodeAccordion, { name, collapsed, deep, keyPath, onClick: this.handleCollapseMode }, value2);
  }
};
JsonArray.defaultProps = { keyPath: [], deep: 0, minusMenuElement: e.createElement("span", null, " - "), plusMenuElement: e.createElement("span", null, " + ") };
var JsonFunctionValue = class extends reactExports.Component {
  constructor(props) {
    super(props);
    let keyPath = [...props.keyPath || [], props.name];
    this.state = { value: props.value, name: props.name, keyPath: keyPath ?? [], deep: props.deep ?? 0, editEnabled: false, inputRef: null }, this.handleEditMode = this.handleEditMode.bind(this), this.refInput = this.refInput.bind(this), this.handleCancelEdit = this.handleCancelEdit.bind(this), this.handleEdit = this.handleEdit.bind(this), this.onKeydown = this.onKeydown.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.value !== state.value ? { value: props.value } : null;
  }
  componentDidUpdate() {
    let { editEnabled, inputRef, name, value: value2, keyPath, deep } = this.state, { readOnly, dataType } = this.props, readOnlyResult = readOnly(name, value2, keyPath, deep, dataType);
    editEnabled && !readOnlyResult && typeof inputRef.focus == "function" && inputRef.focus();
  }
  onKeydown(event) {
    let { inputRef } = this.state;
    event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.repeat || inputRef !== event.target || ((event.code === "Enter" || event.key === "Enter") && (event.preventDefault(), this.handleEdit()), (event.code === "Escape" || event.key === "Escape") && (event.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let { handleUpdateValue, originalValue, logger: logger4, onSubmitValueParser, keyPath } = this.props, { inputRef, name, deep } = this.state;
    if (!inputRef) return;
    let newValue = onSubmitValueParser(true, keyPath, deep, name, inputRef.value), result = { value: newValue, key: name };
    (handleUpdateValue || Promise.resolve.bind(Promise))(result).then(() => {
      isComponentWillChange(originalValue, newValue) || this.handleCancelEdit();
    }).catch(logger4.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: true });
  }
  refInput(node) {
    this.state.inputRef = node;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: false });
  }
  render() {
    let { name, value: value2, editEnabled, keyPath, deep } = this.state, { handleRemove, originalValue, readOnly, dataType, getStyle, textareaElementGenerator, minusMenuElement, keyPath: comeFromKeyPath = [] } = this.props, style = getStyle(name, originalValue, keyPath, deep, dataType), result = null, minusElement = null, resultOnlyResult = readOnly(name, originalValue, keyPath, deep, dataType);
    if (editEnabled && !resultOnlyResult) {
      let textareaElement = textareaElementGenerator(VALUE, comeFromKeyPath, deep, name, originalValue, dataType), textareaElementLayout = reactExports.cloneElement(textareaElement, { ref: this.refInput, defaultValue: value2, onKeyDown: this.onKeydown });
      result = e.createElement("span", { className: "rejt-edit-form", style: style.editForm }, textareaElementLayout), minusElement = null;
    } else {
      result = e.createElement("span", { className: "rejt-value", style: style.value, onClick: resultOnlyResult ? void 0 : this.handleEditMode }, value2);
      let parentPropertyName = comeFromKeyPath.at(-1), minusMenuLayout = minusMenuElement && reactExports.cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: style.minus, "aria-label": `remove the function '${String(name)}'${String(parentPropertyName) ? ` from '${String(parentPropertyName)}'` : ""}` });
      minusElement = resultOnlyResult ? null : minusMenuLayout;
    }
    return e.createElement("li", { className: "rejt-value-node", style: style.li }, e.createElement("span", { className: "rejt-name", style: style.name }, name, " :", " "), result, minusElement);
  }
};
JsonFunctionValue.defaultProps = { keyPath: [], deep: 0, handleUpdateValue: () => {
}, cancelButtonElement: e.createElement("button", null, "c"), minusMenuElement: e.createElement("span", null, " - ") };
var JsonNode = class extends reactExports.Component {
  constructor(props) {
    super(props), this.state = { data: props.data, name: props.name, keyPath: props.keyPath ?? [], deep: props.deep ?? 0 };
  }
  static getDerivedStateFromProps(props, state) {
    return props.data !== state.data ? { data: props.data } : null;
  }
  render() {
    let { data, name, keyPath, deep } = this.state, { isCollapsed, handleRemove, handleUpdateValue, onUpdate, onDeltaUpdate, readOnly, getStyle, addButtonElement, cancelButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser } = this.props, readOnlyTrue = () => true, dataType = getObjectType(data);
    switch (dataType) {
      case ERROR:
        return e.createElement(JsonObject, { data, name, isCollapsed, keyPath, deep, handleRemove, onUpdate, onDeltaUpdate, readOnly: readOnlyTrue, dataType, getStyle, addButtonElement, cancelButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser });
      case OBJECT:
        return e.createElement(JsonObject, { data, name, isCollapsed, keyPath, deep, handleRemove, onUpdate, onDeltaUpdate, readOnly, dataType, getStyle, addButtonElement, cancelButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser });
      case ARRAY:
        return e.createElement(JsonArray, { data, name, isCollapsed, keyPath, deep, handleRemove, onUpdate, onDeltaUpdate, readOnly, dataType, getStyle, addButtonElement, cancelButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser });
      case STRING:
        return e.createElement(JsonValue, { name, value: `"${data}"`, originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case NUMBER:
        return e.createElement(JsonValue, { name, value: data, originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case BOOLEAN:
        return e.createElement(JsonValue, { name, value: data ? "true" : "false", originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case DATE:
        return e.createElement(JsonValue, { name, value: data.toISOString(), originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly: readOnlyTrue, dataType, getStyle, cancelButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case NULL:
        return e.createElement(JsonValue, { name, value: "null", originalValue: "null", keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case UNDEFINED:
        return e.createElement(JsonValue, { name, value: "undefined", originalValue: "undefined", keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case FUNCTION:
        return e.createElement(JsonFunctionValue, { name, value: data.toString(), originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly, dataType, getStyle, cancelButtonElement, textareaElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      case SYMBOL:
        return e.createElement(JsonValue, { name, value: data.toString(), originalValue: data, keyPath, deep, handleRemove, handleUpdateValue, readOnly: readOnlyTrue, dataType, getStyle, cancelButtonElement, inputElementGenerator, minusMenuElement, logger: logger4, onSubmitValueParser });
      default:
        return null;
    }
  }
};
JsonNode.defaultProps = { keyPath: [], deep: 0 };
var JsonObject = class extends reactExports.Component {
  constructor(props) {
    super(props);
    let keyPath = props.deep === -1 ? [] : [...props.keyPath || [], props.name];
    this.state = { name: props.name, data: props.data, keyPath: keyPath ?? [], deep: props.deep ?? 0, nextDeep: (props.deep ?? 0) + 1, collapsed: props.isCollapsed(keyPath, props.deep ?? 0, props.data), addFormVisible: false }, this.handleCollapseMode = this.handleCollapseMode.bind(this), this.handleRemoveValue = this.handleRemoveValue.bind(this), this.handleAddMode = this.handleAddMode.bind(this), this.handleAddValueAdd = this.handleAddValueAdd.bind(this), this.handleAddValueCancel = this.handleAddValueCancel.bind(this), this.handleEditValue = this.handleEditValue.bind(this), this.onChildUpdate = this.onChildUpdate.bind(this), this.renderCollapsed = this.renderCollapsed.bind(this), this.renderNotCollapsed = this.renderNotCollapsed.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.data !== state.data ? { data: props.data } : null;
  }
  onChildUpdate(childKey, childData) {
    let { data, keyPath = [] } = this.state;
    data[childKey] = childData, this.setState({ data });
    let { onUpdate } = this.props, size = keyPath.length;
    onUpdate(keyPath[size - 1], data);
  }
  handleAddMode() {
    this.setState({ addFormVisible: true });
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: false });
  }
  handleAddValueAdd({ key, newValue }) {
    let { data, keyPath = [], nextDeep: deep } = this.state, { beforeAddAction, logger: logger4 } = this.props;
    (beforeAddAction || Promise.resolve.bind(Promise))(key, keyPath, deep, newValue).then(() => {
      data[key] = newValue, this.setState({ data }), this.handleAddValueCancel();
      let { onUpdate, onDeltaUpdate } = this.props;
      onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate({ type: ADD_DELTA_TYPE, keyPath, deep, key, newValue });
    }).catch(logger4.error);
  }
  handleRemoveValue(key) {
    return () => {
      let { beforeRemoveAction, logger: logger4 } = this.props, { data, keyPath = [], nextDeep: deep } = this.state, oldValue = data[key];
      (beforeRemoveAction || Promise.resolve.bind(Promise))(key, keyPath, deep, oldValue).then(() => {
        let deltaUpdateResult = { keyPath, deep, key, oldValue, type: REMOVE_DELTA_TYPE };
        delete data[key], this.setState({ data });
        let { onUpdate, onDeltaUpdate } = this.props;
        onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate(deltaUpdateResult);
      }).catch(logger4.error);
    };
  }
  handleCollapseMode() {
    this.setState((state) => ({ collapsed: !state.collapsed }));
  }
  handleEditValue({ key, value: value2 }) {
    return new Promise((resolve, reject) => {
      let { beforeUpdateAction } = this.props, { data, keyPath = [], nextDeep: deep } = this.state, oldValue = data[key];
      (beforeUpdateAction || Promise.resolve.bind(Promise))(key, keyPath, deep, oldValue, value2).then(() => {
        data[key] = value2, this.setState({ data });
        let { onUpdate, onDeltaUpdate } = this.props;
        onUpdate(keyPath[keyPath.length - 1], data), onDeltaUpdate({ type: UPDATE_DELTA_TYPE, keyPath, deep, key, newValue: value2, oldValue }), resolve();
      }).catch(reject);
    });
  }
  renderCollapsed() {
    let { name, keyPath, deep, data } = this.state, { handleRemove, readOnly, dataType, getStyle, minusMenuElement } = this.props, { minus, collapsed } = getStyle(name, data, keyPath, deep, dataType), keyList = Object.getOwnPropertyNames(data), isReadOnly = readOnly(name, data, keyPath, deep, dataType), removeItemButton = minusMenuElement && reactExports.cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: minus, "aria-label": `remove the object '${String(name)}'` });
    return e.createElement(e.Fragment, null, e.createElement("span", { style: collapsed }, "{...}", " ", keyList.length, " ", keyList.length === 1 ? "key" : "keys"), !isReadOnly && removeItemButton);
  }
  renderNotCollapsed() {
    let { name, data, keyPath, deep, nextDeep, addFormVisible } = this.state, { isCollapsed, handleRemove, onDeltaUpdate, readOnly, getStyle, dataType, addButtonElement, cancelButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser } = this.props, { minus, plus, addForm, ul: ul2, delimiter } = getStyle(name, data, keyPath, deep, dataType), keyList = Object.getOwnPropertyNames(data), isReadOnly = readOnly(name, data, keyPath, deep, dataType), addItemButton = plusMenuElement && reactExports.cloneElement(plusMenuElement, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: plus, "aria-label": `add a new property to the object '${String(name)}'` }), removeItemButton = minusMenuElement && reactExports.cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: minus, "aria-label": `remove the object '${String(name)}'` }), list = keyList.map((key) => e.createElement(JsonNode, { key, name: key, data: data[key], keyPath, deep: nextDeep, isCollapsed, handleRemove: this.handleRemoveValue(key), handleUpdateValue: this.handleEditValue, onUpdate: this.onChildUpdate, onDeltaUpdate, readOnly, getStyle, addButtonElement, cancelButtonElement, inputElementGenerator, textareaElementGenerator, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser }));
    return e.createElement(e.Fragment, null, e.createElement("span", { className: "rejt-not-collapsed-delimiter", style: delimiter }, "{"), !isReadOnly && addItemButton, e.createElement("ul", { className: "rejt-not-collapsed-list", style: ul2 }, list), !isReadOnly && addFormVisible && e.createElement("div", { className: "rejt-add-form", style: addForm }, e.createElement(JsonAddValue, { handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, addButtonElement, cancelButtonElement, inputElementGenerator, keyPath, deep, onSubmitValueParser })), e.createElement("span", { className: "rejt-not-collapsed-delimiter", style: delimiter }, "}"), !isReadOnly && removeItemButton);
  }
  render() {
    let { name, collapsed, keyPath, deep = 0 } = this.state, value2 = collapsed ? this.renderCollapsed() : this.renderNotCollapsed();
    return e.createElement(JsonNodeAccordion, { name, collapsed, deep, keyPath, onClick: this.handleCollapseMode }, value2);
  }
};
JsonObject.defaultProps = { keyPath: [], deep: 0, minusMenuElement: e.createElement("span", null, " - "), plusMenuElement: e.createElement("span", null, " + ") };
var JsonValue = class extends reactExports.Component {
  constructor(props) {
    super(props);
    let keyPath = [...props.keyPath || [], props.name];
    this.state = { value: props.value, name: props.name, keyPath: keyPath ?? [], deep: props.deep ?? 0, editEnabled: false, inputRef: null }, this.handleEditMode = this.handleEditMode.bind(this), this.refInput = this.refInput.bind(this), this.handleCancelEdit = this.handleCancelEdit.bind(this), this.handleEdit = this.handleEdit.bind(this), this.onKeydown = this.onKeydown.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.value !== state.value ? { value: props.value } : null;
  }
  componentDidUpdate() {
    let { editEnabled, inputRef, name, value: value2, keyPath, deep } = this.state, { readOnly, dataType } = this.props, isReadOnly = readOnly(name, value2, keyPath, deep, dataType);
    editEnabled && !isReadOnly && typeof inputRef.focus == "function" && inputRef.focus();
  }
  onKeydown(event) {
    let { inputRef } = this.state;
    event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || event.repeat || inputRef !== event.target || ((event.code === "Enter" || event.key === "Enter") && (event.preventDefault(), this.handleEdit()), (event.code === "Escape" || event.key === "Escape") && (event.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let { handleUpdateValue, originalValue, logger: logger4, onSubmitValueParser, keyPath } = this.props, { inputRef, name, deep } = this.state;
    if (!inputRef) return;
    let newValue = onSubmitValueParser(true, keyPath, deep, name, inputRef.value), result = { value: newValue, key: name };
    (handleUpdateValue || Promise.resolve.bind(Promise))(result).then(() => {
      isComponentWillChange(originalValue, newValue) || this.handleCancelEdit();
    }).catch(logger4.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: true });
  }
  refInput(node) {
    this.state.inputRef = node;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: false });
  }
  render() {
    let { name, value: value2, editEnabled, keyPath, deep } = this.state, { handleRemove, originalValue, readOnly, dataType, getStyle, inputElementGenerator, minusMenuElement, keyPath: comeFromKeyPath } = this.props, style = getStyle(name, originalValue, keyPath, deep, dataType), isReadOnly = readOnly(name, originalValue, keyPath, deep, dataType), isEditing = editEnabled && !isReadOnly, inputElement = inputElementGenerator(VALUE, comeFromKeyPath, deep, name, originalValue, dataType), inputElementLayout = reactExports.cloneElement(inputElement, { ref: this.refInput, defaultValue: JSON.stringify(originalValue), onKeyDown: this.onKeydown }), parentPropertyName = keyPath.at(-2), minusMenuLayout = minusMenuElement && reactExports.cloneElement(minusMenuElement, { onClick: handleRemove, className: "rejt-minus-menu", style: style.minus, "aria-label": `remove the property '${String(name)}' with value '${String(originalValue)}'${String(parentPropertyName) ? ` from '${String(parentPropertyName)}'` : ""}` });
    return e.createElement("li", { className: "rejt-value-node", style: style.li }, e.createElement("span", { className: "rejt-name", style: style.name }, name, " : "), isEditing ? e.createElement("span", { className: "rejt-edit-form", style: style.editForm }, inputElementLayout) : e.createElement("span", { className: "rejt-value", style: style.value, onClick: isReadOnly ? void 0 : this.handleEditMode }, String(value2)), !isReadOnly && !isEditing && minusMenuLayout);
  }
};
JsonValue.defaultProps = { keyPath: [], deep: 0, handleUpdateValue: () => Promise.resolve(), cancelButtonElement: e.createElement("button", null, "c"), minusMenuElement: e.createElement("span", null, " - ") };
function parse3(string) {
  let result = string;
  if (result.indexOf("function") === 0) return (0, eval)(`(${result})`);
  try {
    result = JSON.parse(string);
  } catch {
  }
  return result;
}
var object = { minus: { color: "red" }, plus: { color: "green" }, collapsed: { color: "grey" }, delimiter: {}, ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" }, name: { color: "#2287CD" }, addForm: {} }, array = { minus: { color: "red" }, plus: { color: "green" }, collapsed: { color: "grey" }, delimiter: {}, ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" }, name: { color: "#2287CD" }, addForm: {} }, value = { minus: { color: "red" }, editForm: {}, value: { color: "#7bba3d" }, li: { minHeight: "22px", lineHeight: "22px", outline: "0px" }, name: { color: "#2287CD" } };
var JsonTree = class extends reactExports.Component {
  constructor(props) {
    super(props), this.state = { data: props.data, rootName: props.rootName }, this.onUpdate = this.onUpdate.bind(this), this.removeRoot = this.removeRoot.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    return props.data !== state.data || props.rootName !== state.rootName ? { data: props.data, rootName: props.rootName } : null;
  }
  onUpdate(key, data) {
    var _a2, _b2;
    this.setState({ data }), (_b2 = (_a2 = this.props).onFullyUpdate) == null ? void 0 : _b2.call(_a2, data);
  }
  removeRoot() {
    this.onUpdate(null, null);
  }
  render() {
    let { data, rootName } = this.state, { isCollapsed, onDeltaUpdate, readOnly, getStyle, addButtonElement, cancelButtonElement, inputElement, textareaElement, minusMenuElement, plusMenuElement, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4, onSubmitValueParser, fallback = null } = this.props, dataType = getObjectType(data), readOnlyFunction = readOnly;
    getObjectType(readOnly) === "Boolean" && (readOnlyFunction = () => readOnly);
    let inputElementFunction = inputElement;
    inputElement && getObjectType(inputElement) !== "Function" && (inputElementFunction = () => inputElement);
    let textareaElementFunction = textareaElement;
    return textareaElement && getObjectType(textareaElement) !== "Function" && (textareaElementFunction = () => textareaElement), dataType === "Object" || dataType === "Array" ? e.createElement("div", { className: "rejt-tree" }, e.createElement(JsonNode, { data, name: rootName || "root", deep: -1, isCollapsed: isCollapsed ?? (() => false), onUpdate: this.onUpdate, onDeltaUpdate: onDeltaUpdate ?? (() => {
    }), readOnly: readOnlyFunction, getStyle: getStyle ?? (() => ({})), addButtonElement, cancelButtonElement, inputElementGenerator: inputElementFunction, textareaElementGenerator: textareaElementFunction, minusMenuElement, plusMenuElement, handleRemove: this.removeRoot, beforeRemoveAction, beforeAddAction, beforeUpdateAction, logger: logger4 ?? {}, onSubmitValueParser: onSubmitValueParser ?? ((val) => val) })) : fallback;
  }
};
JsonTree.defaultProps = { rootName: "root", isCollapsed: (keyPath, deep) => deep !== -1, getStyle: (keyName, data, keyPath, deep, dataType) => {
  switch (dataType) {
    case "Object":
    case "Error":
      return object;
    case "Array":
      return array;
    default:
      return value;
  }
}, readOnly: () => false, onFullyUpdate: () => {
}, onDeltaUpdate: () => {
}, beforeRemoveAction: () => Promise.resolve(), beforeAddAction: () => Promise.resolve(), beforeUpdateAction: () => Promise.resolve(), logger: { error: () => {
} }, onSubmitValueParser: (isEditMode, keyPath, deep, name, rawValue) => parse3(rawValue), inputElement: () => e.createElement("input", null), textareaElement: () => e.createElement("textarea", null), fallback: null };
var { window: globalWindow2 } = globalThis, Wrapper7 = xr$3.div(({ theme }) => ({ position: "relative", display: "flex", '&[aria-readonly="true"]': { opacity: 0.5 }, ".rejt-tree": { marginLeft: "1rem", fontSize: "13px", listStyleType: "none" }, ".rejt-value-node:hover": { "& > button": { opacity: 1 } }, ".rejt-add-form": { marginLeft: 10 }, ".rejt-add-value-node": { display: "inline-flex", alignItems: "center" }, ".rejt-name": { lineHeight: "22px" }, ".rejt-not-collapsed-delimiter": { lineHeight: "22px" }, ".rejt-value": { display: "inline-block", border: "1px solid transparent", borderRadius: 4, margin: "1px 0", padding: "0 4px", cursor: "text", color: theme.color.defaultText }, ".rejt-value-node:hover > .rejt-value": { background: theme.color.lighter, borderColor: theme.appBorderColor } })), ButtonInline = xr$3.button(({ theme, primary }) => ({ border: 0, height: 20, margin: 1, borderRadius: 4, background: primary ? theme.color.secondary : "transparent", color: primary ? theme.color.lightest : theme.color.dark, fontWeight: primary ? "bold" : "normal", cursor: "pointer" })), ActionButton = xr$3.button(({ theme }) => ({ background: "none", border: 0, display: "inline-flex", verticalAlign: "middle", padding: 3, marginLeft: 5, color: theme.textMutedColor, opacity: 0, transition: "opacity 0.2s", cursor: "pointer", position: "relative", svg: { width: 9, height: 9 }, ":disabled": { cursor: "not-allowed" }, ":hover, :focus-visible": { opacity: 1 }, "&:hover:not(:disabled), &:focus-visible:not(:disabled)": { "&.rejt-plus-menu": { color: theme.color.ancillary }, "&.rejt-minus-menu": { color: theme.color.negative } } })), Input = xr$3.input(({ theme, placeholder }) => ({ outline: 0, margin: placeholder ? 1 : "1px 0", padding: "3px 4px", color: theme.color.defaultText, background: theme.background.app, border: `1px solid ${theme.appBorderColor}`, borderRadius: 4, lineHeight: "14px", width: placeholder === "Key" ? 80 : 120, "&:focus": { border: `1px solid ${theme.color.secondary}` } })), RawButton = xr$3(So)(({ theme }) => ({ position: "absolute", zIndex: 2, top: 2, right: 2, height: 21, padding: "0 3px", background: theme.background.bar, border: `1px solid ${theme.appBorderColor}`, borderRadius: 3, color: theme.textMutedColor, fontSize: "9px", fontWeight: "bold", textDecoration: "none", span: { marginLeft: 3, marginTop: 1 } })), RawInput = xr$3(d7.Textarea)(({ theme }) => ({ flex: 1, padding: "7px 6px", fontFamily: theme.typography.fonts.mono, fontSize: "12px", lineHeight: "18px", "&::placeholder": { fontFamily: theme.typography.fonts.base, fontSize: "13px" }, "&:placeholder-shown": { padding: "7px 10px" } })), ENTER_EVENT = { bubbles: true, cancelable: true, key: "Enter", code: "Enter", keyCode: 13 }, dispatchEnterKey = (event) => {
  event.currentTarget.dispatchEvent(new globalWindow2.KeyboardEvent("keydown", ENTER_EVENT));
}, selectValue = (event) => {
  event.currentTarget.select();
}, getCustomStyleFunction = (theme) => () => ({ name: { color: theme.color.secondary }, collapsed: { color: theme.color.dark }, ul: { listStyle: "none", margin: "0 0 0 1rem", padding: 0 }, li: { outline: 0 } }), ObjectControl = ({ name, value: value2, onChange, argType }) => {
  var _a2;
  let theme = St$3(), data = reactExports.useMemo(() => value2 && cloneDeep(value2), [value2]), hasData = data != null, [showRaw, setShowRaw] = reactExports.useState(!hasData), [parseError, setParseError] = reactExports.useState(null), readonly = !!((_a2 = argType == null ? void 0 : argType.table) == null ? void 0 : _a2.readonly), updateRaw = reactExports.useCallback((raw) => {
    try {
      raw && onChange(JSON.parse(raw)), setParseError(null);
    } catch (e22) {
      setParseError(e22);
    }
  }, [onChange]), [forceVisible, setForceVisible] = reactExports.useState(false), onForceVisible = reactExports.useCallback(() => {
    onChange({}), setForceVisible(true);
  }, [setForceVisible]), htmlElRef = reactExports.useRef(null);
  if (reactExports.useEffect(() => {
    forceVisible && htmlElRef.current && htmlElRef.current.select();
  }, [forceVisible]), !hasData) return e.createElement(Hr, { disabled: readonly, id: getControlSetterButtonId(name), onClick: onForceVisible }, "Set object");
  let rawJSONForm = e.createElement(RawInput, { ref: htmlElRef, id: getControlId(name), name, defaultValue: value2 === null ? "" : JSON.stringify(value2, null, 2), onBlur: (event) => updateRaw(event.target.value), placeholder: "Edit JSON string...", autoFocus: forceVisible, valid: parseError ? "error" : void 0, readOnly: readonly }), isObjectOrArray = Array.isArray(value2) || typeof value2 == "object" && (value2 == null ? void 0 : value2.constructor) === Object;
  return e.createElement(Wrapper7, { "aria-readonly": readonly }, isObjectOrArray && e.createElement(RawButton, { role: "switch", "aria-checked": showRaw, "aria-label": `Edit the ${name} properties in text format`, onClick: (e22) => {
    e22.preventDefault(), setShowRaw((isRaw) => !isRaw);
  } }, showRaw ? e.createElement(EyeCloseIcon, null) : e.createElement(EyeIcon, null), e.createElement("span", null, "RAW")), showRaw ? rawJSONForm : e.createElement(JsonTree, { readOnly: readonly || !isObjectOrArray, isCollapsed: isObjectOrArray ? void 0 : () => true, data, rootName: name, onFullyUpdate: onChange, getStyle: getCustomStyleFunction(theme), cancelButtonElement: e.createElement(ButtonInline, { type: "button" }, "Cancel"), addButtonElement: e.createElement(ButtonInline, { type: "submit", primary: true }, "Save"), plusMenuElement: e.createElement(ActionButton, { type: "button" }, e.createElement(AddIcon, null)), minusMenuElement: e.createElement(ActionButton, { type: "button" }, e.createElement(SubtractIcon, null)), inputElement: (_2, __, ___, key) => key ? e.createElement(Input, { onFocus: selectValue, onBlur: dispatchEnterKey }) : e.createElement(Input, null), fallback: rawJSONForm }));
};
var RangeInput = xr$3.input(({ theme, min, max, value: value2, disabled }) => ({ "&": { width: "100%", backgroundColor: "transparent", appearance: "none" }, "&::-webkit-slider-runnable-track": { background: theme.base === "light" ? `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value2 - min) / (max - min) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} ${(value2 - min) / (max - min) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} 100%)` : `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value2 - min) / (max - min) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} ${(value2 - min) / (max - min) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} 100%)`, boxShadow: `${theme.appBorderColor} 0 0 0 1px inset`, borderRadius: 6, width: "100%", height: 6, cursor: disabled ? "not-allowed" : "pointer" }, "&::-webkit-slider-thumb": { marginTop: "-6px", width: 16, height: 16, border: `1px solid ${rgba(theme.appBorderColor, 0.2)}`, borderRadius: "50px", boxShadow: `0 1px 3px 0px ${rgba(theme.appBorderColor, 0.2)}`, cursor: disabled ? "not-allowed" : "grab", appearance: "none", background: `${theme.input.background}`, transition: "all 150ms ease-out", "&:hover": { background: `${curriedDarken$1(0.05, theme.input.background)}`, transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)", transition: "all 50ms ease-out" }, "&:active": { background: `${theme.input.background}`, transform: "scale3d(1, 1, 1) translateY(0px)", cursor: disabled ? "not-allowed" : "grab" } }, "&:focus": { outline: "none", "&::-webkit-slider-runnable-track": { borderColor: rgba(theme.color.secondary, 0.4) }, "&::-webkit-slider-thumb": { borderColor: theme.color.secondary, boxShadow: `0 0px 5px 0px ${theme.color.secondary}` } }, "&::-moz-range-track": { background: theme.base === "light" ? `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value2 - min) / (max - min) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} ${(value2 - min) / (max - min) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} 100%)` : `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value2 - min) / (max - min) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} ${(value2 - min) / (max - min) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} 100%)`, boxShadow: `${theme.appBorderColor} 0 0 0 1px inset`, borderRadius: 6, width: "100%", height: 6, cursor: disabled ? "not-allowed" : "pointer", outline: "none" }, "&::-moz-range-thumb": { width: 16, height: 16, border: `1px solid ${rgba(theme.appBorderColor, 0.2)}`, borderRadius: "50px", boxShadow: `0 1px 3px 0px ${rgba(theme.appBorderColor, 0.2)}`, cursor: disabled ? "not-allowed" : "grap", background: `${theme.input.background}`, transition: "all 150ms ease-out", "&:hover": { background: `${curriedDarken$1(0.05, theme.input.background)}`, transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)", transition: "all 50ms ease-out" }, "&:active": { background: `${theme.input.background}`, transform: "scale3d(1, 1, 1) translateY(0px)", cursor: "grabbing" } }, "&::-ms-track": { background: theme.base === "light" ? `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value2 - min) / (max - min) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} ${(value2 - min) / (max - min) * 100}%, 
            ${curriedDarken$1(0.02, theme.input.background)} 100%)` : `linear-gradient(to right, 
            ${theme.color.green} 0%, ${theme.color.green} ${(value2 - min) / (max - min) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} ${(value2 - min) / (max - min) * 100}%, 
            ${curriedLighten$1(0.02, theme.input.background)} 100%)`, boxShadow: `${theme.appBorderColor} 0 0 0 1px inset`, color: "transparent", width: "100%", height: "6px", cursor: "pointer" }, "&::-ms-fill-lower": { borderRadius: 6 }, "&::-ms-fill-upper": { borderRadius: 6 }, "&::-ms-thumb": { width: 16, height: 16, background: `${theme.input.background}`, border: `1px solid ${rgba(theme.appBorderColor, 0.2)}`, borderRadius: 50, cursor: "grab", marginTop: 0 }, "@supports (-ms-ime-align:auto)": { "input[type=range]": { margin: "0" } } })), RangeLabel = xr$3.span({ paddingLeft: 5, paddingRight: 5, fontSize: 12, whiteSpace: "nowrap", fontFeatureSettings: "tnum", fontVariantNumeric: "tabular-nums", "[aria-readonly=true] &": { opacity: 0.5 } }), RangeCurrentAndMaxLabel = xr$3(RangeLabel)(({ numberOFDecimalsPlaces, max }) => ({ width: `${numberOFDecimalsPlaces + max.toString().length * 2 + 3}ch`, textAlign: "right", flexShrink: 0 })), RangeWrapper = xr$3.div({ display: "flex", alignItems: "center", width: "100%" });
function getNumberOfDecimalPlaces(number) {
  let match = number.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return match ? Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0)) : 0;
}
var RangeControl = ({ name, value: value2, onChange, min = 0, max = 100, step = 1, onBlur, onFocus, argType }) => {
  var _a2;
  let handleChange = (event) => {
    onChange(parse2(event.target.value));
  }, hasValue = value2 !== void 0, numberOFDecimalsPlaces = reactExports.useMemo(() => getNumberOfDecimalPlaces(step), [step]), readonly = !!((_a2 = argType == null ? void 0 : argType.table) == null ? void 0 : _a2.readonly);
  return e.createElement(RangeWrapper, { "aria-readonly": readonly }, e.createElement(RangeLabel, null, min), e.createElement(RangeInput, { id: getControlId(name), type: "range", disabled: readonly, onChange: handleChange, name, min, max, step, onFocus, onBlur, value: value2 ?? min }), e.createElement(RangeCurrentAndMaxLabel, { numberOFDecimalsPlaces, max }, hasValue ? value2.toFixed(numberOFDecimalsPlaces) : "--", " / ", max));
};
var Wrapper8 = xr$3.label({ display: "flex" }), MaxLength = xr$3.div(({ isMaxed }) => ({ marginLeft: "0.75rem", paddingTop: "0.35rem", color: isMaxed ? "red" : void 0 })), TextControl = ({ name, value: value2, onChange, onFocus, onBlur, maxLength, argType }) => {
  var _a2;
  let handleChange = (event) => {
    onChange(event.target.value);
  }, readonly = !!((_a2 = argType == null ? void 0 : argType.table) == null ? void 0 : _a2.readonly), [forceVisible, setForceVisible] = reactExports.useState(false), onForceVisible = reactExports.useCallback(() => {
    onChange(""), setForceVisible(true);
  }, [setForceVisible]);
  if (value2 === void 0) return e.createElement(Hr, { variant: "outline", size: "medium", disabled: readonly, id: getControlSetterButtonId(name), onClick: onForceVisible }, "Set string");
  let isValid = typeof value2 == "string";
  return e.createElement(Wrapper8, null, e.createElement(d7.Textarea, { id: getControlId(name), maxLength, onChange: handleChange, disabled: readonly, size: "flex", placeholder: "Edit string...", autoFocus: forceVisible, valid: isValid ? void 0 : "error", name, value: isValid ? value2 : "", onFocus, onBlur }), maxLength && e.createElement(MaxLength, { isMaxed: (value2 == null ? void 0 : value2.length) === maxLength }, (value2 == null ? void 0 : value2.length) ?? 0, " / ", maxLength));
};
var FileInput = xr$3(d7.Input)({ padding: 10 });
function revokeOldUrls(urls) {
  urls.forEach((url) => {
    url.startsWith("blob:") && URL.revokeObjectURL(url);
  });
}
var FilesControl = ({ onChange, name, accept = "image/*", value: value2, argType }) => {
  var _a2;
  let inputElement = reactExports.useRef(null), readonly = (_a2 = argType == null ? void 0 : argType.control) == null ? void 0 : _a2.readOnly;
  function handleFileChange(e22) {
    if (!e22.target.files) return;
    let fileUrls = Array.from(e22.target.files).map((file) => URL.createObjectURL(file));
    onChange(fileUrls), revokeOldUrls(value2 || []);
  }
  return reactExports.useEffect(() => {
    value2 == null && inputElement.current && (inputElement.current.value = "");
  }, [value2, name]), e.createElement(FileInput, { ref: inputElement, id: getControlId(name), type: "file", name, multiple: true, disabled: readonly, onChange: handleFileChange, accept, size: "flex" });
};
var LazyColorControl = reactExports.lazy(() => __vitePreload(() => import("./Color-AVL7NMMY-SKTCXoFT.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0, import.meta.url)), ColorControl = (props) => e.createElement(reactExports.Suspense, { fallback: e.createElement("div", null) }, e.createElement(LazyColorControl, { ...props }));
var Controls2 = { array: ObjectControl, object: ObjectControl, boolean: BooleanControl, color: ColorControl, date: DateControl, number: NumberControl, check: OptionsControl, "inline-check": OptionsControl, radio: OptionsControl, "inline-radio": OptionsControl, select: OptionsControl, "multi-select": OptionsControl, range: RangeControl, text: TextControl, file: FilesControl }, NoControl = () => e.createElement(e.Fragment, null, "-"), ArgControl = ({ row, arg, updateArgs, isHovered }) => {
  var _a2;
  let { key, control } = row, [isFocused, setFocused] = reactExports.useState(false), [boxedValue, setBoxedValue] = reactExports.useState({ value: arg });
  reactExports.useEffect(() => {
    isFocused || setBoxedValue({ value: arg });
  }, [isFocused, arg]);
  let onChange = reactExports.useCallback((argVal) => (setBoxedValue({ value: argVal }), updateArgs({ [key]: argVal }), argVal), [updateArgs, key]), onBlur = reactExports.useCallback(() => setFocused(false), []), onFocus = reactExports.useCallback(() => setFocused(true), []);
  if (!control || control.disable) {
    let canBeSetup = (control == null ? void 0 : control.disable) !== true && ((_a2 = row == null ? void 0 : row.type) == null ? void 0 : _a2.name) !== "function";
    return isHovered && canBeSetup ? e.createElement(Ii, { href: "https://storybook.js.org/docs/essentials/controls?ref=ui", target: "_blank", withArrow: true }, "Setup controls") : e.createElement(NoControl, null);
  }
  let props = { name: key, argType: row, value: boxedValue.value, onChange, onBlur, onFocus }, Control = Controls2[control.type] || NoControl;
  return e.createElement(Control, { ...props, ...control, controlType: control.type });
};
var Table = xr$3.table(({ theme }) => ({ "&&": { borderCollapse: "collapse", borderSpacing: 0, border: "none", tr: { border: "none !important", background: "none" }, "td, th": { padding: 0, border: "none", width: "auto!important" }, marginTop: 0, marginBottom: 0, "th:first-of-type, td:first-of-type": { paddingLeft: 0 }, "th:last-of-type, td:last-of-type": { paddingRight: 0 }, td: { paddingTop: 0, paddingBottom: 4, "&:not(:first-of-type)": { paddingLeft: 10, paddingRight: 0 } }, tbody: { boxShadow: "none", border: "none" }, code: lt({ theme }), div: { span: { fontWeight: "bold" } }, "& code": { margin: 0, display: "inline-block", fontSize: theme.typography.size.s1 } } })), ArgJsDoc = ({ tags }) => {
  var _a2, _b2;
  let params = (tags.params || []).filter((x22) => x22.description), hasDisplayableParams = params.length !== 0, hasDisplayableDeprecated = tags.deprecated != null, hasDisplayableReturns = tags.returns != null && tags.returns.description != null;
  return !hasDisplayableParams && !hasDisplayableReturns && !hasDisplayableDeprecated ? null : e.createElement(e.Fragment, null, e.createElement(Table, null, e.createElement("tbody", null, hasDisplayableDeprecated && e.createElement("tr", { key: "deprecated" }, e.createElement("td", { colSpan: 2 }, e.createElement("strong", null, "Deprecated"), ": ", (_a2 = tags.deprecated) == null ? void 0 : _a2.toString())), hasDisplayableParams && params.map((x22) => e.createElement("tr", { key: x22.name }, e.createElement("td", null, e.createElement("code", null, x22.name)), e.createElement("td", null, x22.description))), hasDisplayableReturns && e.createElement("tr", { key: "returns" }, e.createElement("td", null, e.createElement("code", null, "Returns")), e.createElement("td", null, (_b2 = tags.returns) == null ? void 0 : _b2.description)))));
};
var import_memoizerific = __toESM(require_memoizerific());
var ITEMS_BEFORE_EXPANSION = 8, Summary = xr$3.div(({ isExpanded }) => ({ display: "flex", flexDirection: isExpanded ? "column" : "row", flexWrap: "wrap", alignItems: "flex-start", marginBottom: "-4px", minWidth: 100 })), Text3 = xr$3.span(lt, ({ theme, simple = false }) => ({ flex: "0 0 auto", fontFamily: theme.typography.fonts.mono, fontSize: theme.typography.size.s1, wordBreak: "break-word", whiteSpace: "normal", maxWidth: "100%", margin: 0, marginRight: "4px", marginBottom: "4px", paddingTop: "2px", paddingBottom: "2px", lineHeight: "13px", ...simple && { background: "transparent", border: "0 none", paddingLeft: 0 } })), ExpandButton = xr$3.button(({ theme }) => ({ fontFamily: theme.typography.fonts.mono, color: theme.color.secondary, marginBottom: "4px", background: "none", border: "none" })), Expandable = xr$3.div(lt, ({ theme }) => ({ fontFamily: theme.typography.fonts.mono, color: theme.color.secondary, fontSize: theme.typography.size.s1, margin: 0, whiteSpace: "nowrap", display: "flex", alignItems: "center" })), Detail = xr$3.div(({ theme, width }) => ({ width, minWidth: 200, maxWidth: 800, padding: 15, fontFamily: theme.typography.fonts.mono, fontSize: theme.typography.size.s1, boxSizing: "content-box", "& code": { padding: "0 !important" } })), ChevronUpIcon = xr$3(ChevronSmallUpIcon)({ marginLeft: 4 }), ChevronDownIcon = xr$3(ChevronSmallDownIcon)({ marginLeft: 4 }), EmptyArg = () => e.createElement("span", null, "-"), ArgText = ({ text, simple }) => e.createElement(Text3, { simple }, text), calculateDetailWidth = (0, import_memoizerific.default)(1e3)((detail) => {
  let lines = detail.split(/\r?\n/);
  return `${Math.max(...lines.map((x22) => x22.length))}ch`;
}), getSummaryItems = (summary) => {
  if (!summary) return [summary];
  let summaryItems = summary.split("|").map((value2) => value2.trim());
  return uniq2(summaryItems);
}, renderSummaryItems = (summaryItems, isExpanded = true) => {
  let items = summaryItems;
  return isExpanded || (items = summaryItems.slice(0, ITEMS_BEFORE_EXPANSION)), items.map((item) => e.createElement(ArgText, { key: item, text: item === "" ? '""' : item }));
}, ArgSummary = ({ value: value2, initialExpandedArgs }) => {
  let { summary, detail } = value2, [isOpen, setIsOpen] = reactExports.useState(false), [isExpanded, setIsExpanded] = reactExports.useState(initialExpandedArgs || false);
  if (summary == null) return null;
  let summaryAsString = typeof summary.toString == "function" ? summary.toString() : summary;
  if (detail == null) {
    if (/[(){}[\]<>]/.test(summaryAsString)) return e.createElement(ArgText, { text: summaryAsString });
    let summaryItems = getSummaryItems(summaryAsString), itemsCount = summaryItems.length;
    return itemsCount > ITEMS_BEFORE_EXPANSION ? e.createElement(Summary, { isExpanded }, renderSummaryItems(summaryItems, isExpanded), e.createElement(ExpandButton, { onClick: () => setIsExpanded(!isExpanded) }, isExpanded ? "Show less..." : `Show ${itemsCount - ITEMS_BEFORE_EXPANSION} more...`)) : e.createElement(Summary, null, renderSummaryItems(summaryItems));
  }
  return e.createElement(d6, { closeOnOutsideClick: true, placement: "bottom", visible: isOpen, onVisibleChange: (isVisible) => {
    setIsOpen(isVisible);
  }, tooltip: e.createElement(Detail, { width: calculateDetailWidth(detail) }, e.createElement(nu, { language: "jsx", format: false }, detail)) }, e.createElement(Expandable, { className: "sbdocs-expandable" }, e.createElement("span", null, summaryAsString), isOpen ? e.createElement(ChevronUpIcon, null) : e.createElement(ChevronDownIcon, null)));
}, ArgValue = ({ value: value2, initialExpandedArgs }) => value2 == null ? e.createElement(EmptyArg, null) : e.createElement(ArgSummary, { value: value2, initialExpandedArgs });
var Name = xr$3.span({ fontWeight: "bold" }), Required = xr$3.span(({ theme }) => ({ color: theme.color.negative, fontFamily: theme.typography.fonts.mono, cursor: "help" })), Description = xr$3.div(({ theme }) => ({ "&&": { p: { margin: "0 0 10px 0" }, a: { color: theme.color.secondary } }, code: { ...lt({ theme }), fontSize: 12, fontFamily: theme.typography.fonts.mono }, "& code": { margin: 0, display: "inline-block" }, "& pre > code": { whiteSpace: "pre-wrap" } })), Type = xr$3.div(({ theme, hasDescription }) => ({ color: theme.base === "light" ? curriedTransparentize$1(0.1, theme.color.defaultText) : curriedTransparentize$1(0.2, theme.color.defaultText), marginTop: hasDescription ? 4 : 0 })), TypeWithJsDoc = xr$3.div(({ theme, hasDescription }) => ({ color: theme.base === "light" ? curriedTransparentize$1(0.1, theme.color.defaultText) : curriedTransparentize$1(0.2, theme.color.defaultText), marginTop: hasDescription ? 12 : 0, marginBottom: 12 })), StyledTd = xr$3.td(({ expandable }) => ({ paddingLeft: expandable ? "40px !important" : "20px !important" })), toSummary = (value2) => value2 && { summary: typeof value2 == "string" ? value2 : value2.name }, ArgRow = (props) => {
  var _a2;
  let [isHovered, setIsHovered] = reactExports.useState(false), { row, updateArgs, compact, expandable, initialExpandedArgs } = props, { name, description } = row, table = row.table || {}, type = table.type || toSummary(row.type), defaultValue = table.defaultValue || row.defaultValue, required = (_a2 = row.type) == null ? void 0 : _a2.required, hasDescription = description != null && description !== "";
  return e.createElement("tr", { onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false) }, e.createElement(StyledTd, { expandable: expandable ?? false }, e.createElement(Name, null, name), required ? e.createElement(Required, { title: "Required" }, "*") : null), compact ? null : e.createElement("td", null, hasDescription && e.createElement(Description, null, e.createElement(index_modern_default, null, description)), table.jsDocTags != null ? e.createElement(e.Fragment, null, e.createElement(TypeWithJsDoc, { hasDescription }, e.createElement(ArgValue, { value: type, initialExpandedArgs })), e.createElement(ArgJsDoc, { tags: table.jsDocTags })) : e.createElement(Type, { hasDescription }, e.createElement(ArgValue, { value: type, initialExpandedArgs }))), compact ? null : e.createElement("td", null, e.createElement(ArgValue, { value: defaultValue, initialExpandedArgs })), updateArgs ? e.createElement("td", null, e.createElement(ArgControl, { ...props, isHovered })) : null);
};
var Wrapper9 = xr$3.div(({ inAddonPanel, theme }) => ({ height: inAddonPanel ? "100%" : "auto", display: "flex", border: inAddonPanel ? "none" : `1px solid ${theme.appBorderColor}`, borderRadius: inAddonPanel ? 0 : theme.appBorderRadius, padding: inAddonPanel ? 0 : 40, alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 15, background: theme.background.content })), Links = xr$3.div(({ theme }) => ({ display: "flex", fontSize: theme.typography.size.s2 - 1, gap: 25 })), Empty = ({ inAddonPanel }) => {
  let [isLoading, setIsLoading] = reactExports.useState(true);
  return reactExports.useEffect(() => {
    let load = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(load);
  }, []), isLoading ? null : e.createElement(Wrapper9, { inAddonPanel }, e.createElement(Yo, { title: inAddonPanel ? "Interactive story playground" : "Args table with interactive controls couldn't be auto-generated", description: e.createElement(e.Fragment, null, "Controls give you an easy to use interface to test your components. Set your story args and you'll see controls appearing here automatically."), footer: e.createElement(Links, null, inAddonPanel && e.createElement(e.Fragment, null, e.createElement(Ii, { href: "https://storybook.js.org/docs/essentials/controls?ref=ui", target: "_blank", withArrow: true }, e.createElement(DocumentIcon, null), " Read docs")), !inAddonPanel && e.createElement(Ii, { href: "https://storybook.js.org/docs/essentials/controls?ref=ui", target: "_blank", withArrow: true }, e.createElement(DocumentIcon, null), " Learn how to set that up")) }));
};
var ExpanderIconDown = xr$3(ChevronDownIcon$1)(({ theme }) => ({ marginRight: 8, marginLeft: -10, marginTop: -2, height: 12, width: 12, color: theme.base === "light" ? curriedTransparentize$1(0.25, theme.color.defaultText) : curriedTransparentize$1(0.3, theme.color.defaultText), border: "none", display: "inline-block" })), ExpanderIconRight = xr$3(ChevronRightIcon)(({ theme }) => ({ marginRight: 8, marginLeft: -10, marginTop: -2, height: 12, width: 12, color: theme.base === "light" ? curriedTransparentize$1(0.25, theme.color.defaultText) : curriedTransparentize$1(0.3, theme.color.defaultText), border: "none", display: "inline-block" })), FlexWrapper = xr$3.span(({ theme }) => ({ display: "flex", lineHeight: "20px", alignItems: "center" })), Section = xr$3.td(({ theme }) => ({ position: "relative", letterSpacing: "0.35em", textTransform: "uppercase", fontWeight: theme.typography.weight.bold, fontSize: theme.typography.size.s1 - 1, color: theme.base === "light" ? curriedTransparentize$1(0.4, theme.color.defaultText) : curriedTransparentize$1(0.6, theme.color.defaultText), background: `${theme.background.app} !important`, "& ~ td": { background: `${theme.background.app} !important` } })), Subsection = xr$3.td(({ theme }) => ({ position: "relative", fontWeight: theme.typography.weight.bold, fontSize: theme.typography.size.s2 - 1, background: theme.background.app })), StyledTd2 = xr$3.td({ position: "relative" }), StyledTr = xr$3.tr(({ theme }) => ({ "&:hover > td": { backgroundColor: `${curriedLighten$1(5e-3, theme.background.app)} !important`, boxShadow: `${theme.color.mediumlight} 0 - 1px 0 0 inset`, cursor: "row-resize" } })), ClickIntercept = xr$3.button({ background: "none", border: "none", padding: "0", font: "inherit", position: "absolute", top: 0, bottom: 0, left: 0, right: 0, height: "100%", width: "100%", color: "transparent", cursor: "row-resize !important" }), SectionRow = ({ level = "section", label, children, initialExpanded = true, colSpan = 3 }) => {
  let [expanded, setExpanded] = reactExports.useState(initialExpanded), Level = level === "subsection" ? Subsection : Section, itemCount = (children == null ? void 0 : children.length) || 0, caption = level === "subsection" ? `${itemCount} item${itemCount !== 1 ? "s" : ""}` : "", helperText = `${expanded ? "Hide" : "Show"} ${level === "subsection" ? itemCount : label} item${itemCount !== 1 ? "s" : ""}`;
  return e.createElement(e.Fragment, null, e.createElement(StyledTr, { title: helperText }, e.createElement(Level, { colSpan: 1 }, e.createElement(ClickIntercept, { onClick: (e22) => setExpanded(!expanded), tabIndex: 0 }, helperText), e.createElement(FlexWrapper, null, expanded ? e.createElement(ExpanderIconDown, null) : e.createElement(ExpanderIconRight, null), label)), e.createElement(StyledTd2, { colSpan: colSpan - 1 }, e.createElement(ClickIntercept, { onClick: (e22) => setExpanded(!expanded), tabIndex: -1, style: { outline: "none" } }, helperText), expanded ? null : caption)), expanded ? children : null);
};
var TableWrapper = xr$3.div(({ theme }) => ({ width: "100%", borderSpacing: 0, color: theme.color.defaultText })), Row = xr$3.div(({ theme }) => ({ display: "flex", borderBottom: `1px solid ${theme.appBorderColor}`, "&:last-child": { borderBottom: 0 } })), Column = xr$3.div(({ position, theme }) => {
  let baseStyles = { display: "flex", flexDirection: "column", gap: 5, padding: "10px 15px", alignItems: "flex-start" };
  switch (position) {
    case "first":
      return { ...baseStyles, width: "25%", paddingLeft: 20 };
    case "second":
      return { ...baseStyles, width: "35%" };
    case "third":
      return { ...baseStyles, width: "15%" };
    case "last":
      return { ...baseStyles, width: "25%", paddingRight: 20 };
  }
}), SkeletonText = xr$3.div(({ theme, width, height }) => ({ animation: `${theme.animation.glow} 1.5s ease-in-out infinite`, background: theme.appBorderColor, width: width || "100%", height: height || 16, borderRadius: 3 })), Skeleton = () => e.createElement(TableWrapper, null, e.createElement(Row, null, e.createElement(Column, { position: "first" }, e.createElement(SkeletonText, { width: "60%" })), e.createElement(Column, { position: "second" }, e.createElement(SkeletonText, { width: "30%" })), e.createElement(Column, { position: "third" }, e.createElement(SkeletonText, { width: "60%" })), e.createElement(Column, { position: "last" }, e.createElement(SkeletonText, { width: "60%" }))), e.createElement(Row, null, e.createElement(Column, { position: "first" }, e.createElement(SkeletonText, { width: "60%" })), e.createElement(Column, { position: "second" }, e.createElement(SkeletonText, { width: "80%" }), e.createElement(SkeletonText, { width: "30%" })), e.createElement(Column, { position: "third" }, e.createElement(SkeletonText, { width: "60%" })), e.createElement(Column, { position: "last" }, e.createElement(SkeletonText, { width: "60%" }))), e.createElement(Row, null, e.createElement(Column, { position: "first" }, e.createElement(SkeletonText, { width: "60%" })), e.createElement(Column, { position: "second" }, e.createElement(SkeletonText, { width: "80%" }), e.createElement(SkeletonText, { width: "30%" })), e.createElement(Column, { position: "third" }, e.createElement(SkeletonText, { width: "60%" })), e.createElement(Column, { position: "last" }, e.createElement(SkeletonText, { width: "60%" }))), e.createElement(Row, null, e.createElement(Column, { position: "first" }, e.createElement(SkeletonText, { width: "60%" })), e.createElement(Column, { position: "second" }, e.createElement(SkeletonText, { width: "80%" }), e.createElement(SkeletonText, { width: "30%" })), e.createElement(Column, { position: "third" }, e.createElement(SkeletonText, { width: "60%" })), e.createElement(Column, { position: "last" }, e.createElement(SkeletonText, { width: "60%" }))));
var TableWrapper2 = xr$3.table(({ theme, compact, inAddonPanel }) => ({ "&&": { borderSpacing: 0, color: theme.color.defaultText, "td, th": { padding: 0, border: "none", verticalAlign: "top", textOverflow: "ellipsis" }, fontSize: theme.typography.size.s2 - 1, lineHeight: "20px", textAlign: "left", width: "100%", marginTop: inAddonPanel ? 0 : 25, marginBottom: inAddonPanel ? 0 : 40, "thead th:first-of-type, td:first-of-type": { width: "25%" }, "th:first-of-type, td:first-of-type": { paddingLeft: 20 }, "th:nth-of-type(2), td:nth-of-type(2)": { ...compact ? null : { width: "35%" } }, "td:nth-of-type(3)": { ...compact ? null : { width: "15%" } }, "th:last-of-type, td:last-of-type": { paddingRight: 20, ...compact ? null : { width: "25%" } }, th: { color: theme.base === "light" ? curriedTransparentize$1(0.25, theme.color.defaultText) : curriedTransparentize$1(0.45, theme.color.defaultText), paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15 }, td: { paddingTop: "10px", paddingBottom: "10px", "&:not(:first-of-type)": { paddingLeft: 15, paddingRight: 15 }, "&:last-of-type": { paddingRight: 20 } }, marginLeft: inAddonPanel ? 0 : 1, marginRight: inAddonPanel ? 0 : 1, tbody: { ...inAddonPanel ? null : { filter: theme.base === "light" ? "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))" : "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))" }, "> tr > *": { background: theme.background.content, borderTop: `1px solid ${theme.appBorderColor}` }, ...inAddonPanel ? null : { "> tr:first-of-type > *": { borderBlockStart: `1px solid ${theme.appBorderColor}` }, "> tr:last-of-type > *": { borderBlockEnd: `1px solid ${theme.appBorderColor}` }, "> tr > *:first-of-type": { borderInlineStart: `1px solid ${theme.appBorderColor}` }, "> tr > *:last-of-type": { borderInlineEnd: `1px solid ${theme.appBorderColor}` }, "> tr:first-of-type > td:first-of-type": { borderTopLeftRadius: theme.appBorderRadius }, "> tr:first-of-type > td:last-of-type": { borderTopRightRadius: theme.appBorderRadius }, "> tr:last-of-type > td:first-of-type": { borderBottomLeftRadius: theme.appBorderRadius }, "> tr:last-of-type > td:last-of-type": { borderBottomRightRadius: theme.appBorderRadius } } } } })), TablePositionWrapper = xr$3.div({ position: "relative" }), ButtonPositionWrapper = xr$3.div({ position: "absolute", right: 8, top: 6 });
var sortFns = { alpha: (a22, b22) => (a22.name ?? "").localeCompare(b22.name ?? ""), requiredFirst: (a22, b22) => {
  var _a2, _b2;
  return +!!((_a2 = b22.type) == null ? void 0 : _a2.required) - +!!((_b2 = a22.type) == null ? void 0 : _b2.required) || (a22.name ?? "").localeCompare(b22.name ?? "");
}, none: null }, groupRows = (rows, sort) => {
  let sections = { ungrouped: [], ungroupedSubsections: {}, sections: {} };
  if (!rows) return sections;
  Object.entries(rows).forEach(([key, row]) => {
    let { category, subcategory } = (row == null ? void 0 : row.table) || {};
    if (category) {
      let section = sections.sections[category] || { ungrouped: [], subsections: {} };
      if (!subcategory) section.ungrouped.push({ key, ...row });
      else {
        let subsection = section.subsections[subcategory] || [];
        subsection.push({ key, ...row }), section.subsections[subcategory] = subsection;
      }
      sections.sections[category] = section;
    } else if (subcategory) {
      let subsection = sections.ungroupedSubsections[subcategory] || [];
      subsection.push({ key, ...row }), sections.ungroupedSubsections[subcategory] = subsection;
    } else sections.ungrouped.push({ key, ...row });
  });
  let sortFn = sortFns[sort], sortSubsection = (record) => sortFn ? Object.keys(record).reduce((acc, cur) => ({ ...acc, [cur]: record[cur].sort(sortFn) }), {}) : record;
  return { ungrouped: sortFn ? sections.ungrouped.sort(sortFn) : sections.ungrouped, ungroupedSubsections: sortSubsection(sections.ungroupedSubsections), sections: Object.keys(sections.sections).reduce((acc, cur) => ({ ...acc, [cur]: { ungrouped: sortFn ? sections.sections[cur].ungrouped.sort(sortFn) : sections.sections[cur].ungrouped, subsections: sortSubsection(sections.sections[cur].subsections) } }), {}) };
}, safeIncludeConditionalArg = (row, args, globals) => {
  try {
    return Xr(row, args, globals);
  } catch (err) {
    return once.warn(err.message), false;
  }
}, ArgsTable = (props) => {
  let { updateArgs, resetArgs, compact, inAddonPanel, initialExpandedArgs, sort = "none", isLoading } = props;
  if ("error" in props) {
    let { error } = props;
    return e.createElement(EmptyBlock, null, error, " ", e.createElement(Ii, { href: "http://storybook.js.org/docs/?ref=ui", target: "_blank", withArrow: true }, e.createElement(DocumentIcon, null), " Read the docs"));
  }
  if (isLoading) return e.createElement(Skeleton, null);
  let { rows, args, globals } = "rows" in props ? props : { rows: void 0, args: void 0, globals: void 0 }, groups = groupRows(pickBy(rows || {}, (row) => {
    var _a2;
    return !((_a2 = row == null ? void 0 : row.table) == null ? void 0 : _a2.disable) && safeIncludeConditionalArg(row, args || {}, globals || {});
  }), sort), hasNoUngrouped = groups.ungrouped.length === 0, hasNoSections = Object.entries(groups.sections).length === 0, hasNoUngroupedSubsections = Object.entries(groups.ungroupedSubsections).length === 0;
  if (hasNoUngrouped && hasNoSections && hasNoUngroupedSubsections) return e.createElement(Empty, { inAddonPanel });
  let colSpan = 1;
  updateArgs && (colSpan += 1), compact || (colSpan += 2);
  let expandable = Object.keys(groups.sections).length > 0, common = { updateArgs, compact, inAddonPanel, initialExpandedArgs };
  return e.createElement(W0, null, e.createElement(TablePositionWrapper, null, updateArgs && !isLoading && resetArgs && e.createElement(ButtonPositionWrapper, null, e.createElement(So, { onClick: () => resetArgs(), "aria-label": "Reset controls", title: "Reset controls" }, e.createElement(UndoIcon, null))), e.createElement(TableWrapper2, { compact, inAddonPanel, className: "docblock-argstable sb-unstyled" }, e.createElement("thead", { className: "docblock-argstable-head" }, e.createElement("tr", null, e.createElement("th", null, e.createElement("span", null, "Name")), compact ? null : e.createElement("th", null, e.createElement("span", null, "Description")), compact ? null : e.createElement("th", null, e.createElement("span", null, "Default")), updateArgs ? e.createElement("th", null, e.createElement("span", null, "Control")) : null)), e.createElement("tbody", { className: "docblock-argstable-body" }, groups.ungrouped.map((row) => e.createElement(ArgRow, { key: row.key, row, arg: args && args[row.key], ...common })), Object.entries(groups.ungroupedSubsections).map(([subcategory, subsection]) => e.createElement(SectionRow, { key: subcategory, label: subcategory, level: "subsection", colSpan }, subsection.map((row) => e.createElement(ArgRow, { key: row.key, row, arg: args && args[row.key], expandable, ...common })))), Object.entries(groups.sections).map(([category, section]) => e.createElement(SectionRow, { key: category, label: category, level: "section", colSpan }, section.ungrouped.map((row) => e.createElement(ArgRow, { key: row.key, row, arg: args && args[row.key], ...common })), Object.entries(section.subsections).map(([subcategory, subsection]) => e.createElement(SectionRow, { key: subcategory, label: subcategory, level: "subsection", colSpan }, subsection.map((row) => e.createElement(ArgRow, { key: row.key, row, arg: args && args[row.key], expandable, ...common }))))))))));
};
var anchorBlockIdFromId = (storyId) => `anchor--${storyId}`, Anchor = ({ storyId, children }) => e.createElement("div", { id: anchorBlockIdFromId(storyId), className: "sb-anchor" }, children);
globalThis && globalThis.__DOCS_CONTEXT__ === void 0 && (globalThis.__DOCS_CONTEXT__ = reactExports.createContext(null), globalThis.__DOCS_CONTEXT__.displayName = "DocsContext");
var DocsContext = globalThis ? globalThis.__DOCS_CONTEXT__ : reactExports.createContext(null);
var useOf = (moduleExportOrType, validTypes) => reactExports.useContext(DocsContext).resolveOf(moduleExportOrType, validTypes);
var titleCase = (str) => str.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(""), getComponentName = (component) => {
  if (component) return typeof component == "string" ? component.includes("-") ? titleCase(component) : component : component.__docgenInfo && component.__docgenInfo.displayName ? component.__docgenInfo.displayName : component.name;
};
function scrollToElement(element, block = "start") {
  element.scrollIntoView({ behavior: "smooth", block, inline: "nearest" });
}
function extractComponentArgTypes(component, parameters) {
  let { extractArgTypes } = parameters.docs || {};
  if (!extractArgTypes) throw new Error("Args unsupported. See Args documentation for your framework.");
  return extractArgTypes(component);
}
function getArgTypesFromResolved(resolved) {
  if (resolved.type === "component") {
    let { component: component2, projectAnnotations: { parameters: parameters2 } } = resolved;
    return { argTypes: extractComponentArgTypes(component2, parameters2), parameters: parameters2, component: component2 };
  }
  if (resolved.type === "meta") {
    let { preparedMeta: { argTypes: argTypes2, parameters: parameters2, component: component2, subcomponents: subcomponents2 } } = resolved;
    return { argTypes: argTypes2, parameters: parameters2, component: component2, subcomponents: subcomponents2 };
  }
  let { story: { argTypes, parameters, component, subcomponents } } = resolved;
  return { argTypes, parameters, component, subcomponents };
}
var ArgTypes = (props) => {
  var _a2;
  let { of: of2 } = props;
  if ("of" in props && of2 === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let resolved = useOf(of2 || "meta"), { argTypes, parameters, component, subcomponents } = getArgTypesFromResolved(resolved), argTypesParameters = ((_a2 = parameters == null ? void 0 : parameters.docs) == null ? void 0 : _a2.argTypes) || {}, include = props.include ?? argTypesParameters.include, exclude = props.exclude ?? argTypesParameters.exclude, sort = props.sort ?? argTypesParameters.sort, filteredArgTypes = filterArgTypes(argTypes, include, exclude);
  if (!(!!subcomponents && Object.keys(subcomponents || {}).length > 0)) return e.createElement(ArgsTable, { rows: filteredArgTypes, sort });
  let mainComponentName = getComponentName(component) || "Main", subcomponentTabs = Object.fromEntries(Object.entries(subcomponents || {}).map(([key, comp]) => [key, { rows: filterArgTypes(extractComponentArgTypes(comp, parameters), include, exclude), sort }])), tabs = { [mainComponentName]: { rows: filteredArgTypes, sort }, ...subcomponentTabs };
  return e.createElement(TabbedArgsTable, { tabs, sort });
};
var __create = Object.create, __defProp2 = Object.defineProperty, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropNames = Object.getOwnPropertyNames, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __commonJS2 = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
}, __copyProps = (to2, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function") for (let key of __getOwnPropNames(from)) !__hasOwnProp.call(to2, key) && key !== except && __defProp2(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to2;
}, __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(!mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target, mod)), eventProperties = ["bubbles", "cancelBubble", "cancelable", "composed", "currentTarget", "defaultPrevented", "eventPhase", "isTrusted", "returnValue", "srcElement", "target", "timeStamp", "type"], customEventSpecificProperties = ["detail"];
function extractEventHiddenProperties(event) {
  let rebuildEvent = eventProperties.filter((value2) => event[value2] !== void 0).reduce((acc, value2) => (acc[value2] = event[value2], acc), {});
  if (event instanceof CustomEvent) for (let value2 of customEventSpecificProperties.filter((value22) => event[value22] !== void 0)) rebuildEvent[value2] = event[value2];
  return rebuildEvent;
}
var require_es_object_atoms = __commonJS2({ "node_modules/.pnpm/es-object-atoms@1.1.1/node_modules/es-object-atoms/index.js"(exports$1, module) {
  module.exports = Object;
} }), require_es_errors = __commonJS2({ "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/index.js"(exports$1, module) {
  module.exports = Error;
} }), require_eval = __commonJS2({ "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/eval.js"(exports$1, module) {
  module.exports = EvalError;
} }), require_range = __commonJS2({ "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/range.js"(exports$1, module) {
  module.exports = RangeError;
} }), require_ref = __commonJS2({ "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/ref.js"(exports$1, module) {
  module.exports = ReferenceError;
} }), require_syntax = __commonJS2({ "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/syntax.js"(exports$1, module) {
  module.exports = SyntaxError;
} }), require_type = __commonJS2({ "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js"(exports$1, module) {
  module.exports = TypeError;
} }), require_uri = __commonJS2({ "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/uri.js"(exports$1, module) {
  module.exports = URIError;
} }), require_abs = __commonJS2({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/abs.js"(exports$1, module) {
  module.exports = Math.abs;
} }), require_floor = __commonJS2({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/floor.js"(exports$1, module) {
  module.exports = Math.floor;
} }), require_max = __commonJS2({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/max.js"(exports$1, module) {
  module.exports = Math.max;
} }), require_min = __commonJS2({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/min.js"(exports$1, module) {
  module.exports = Math.min;
} }), require_pow = __commonJS2({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/pow.js"(exports$1, module) {
  module.exports = Math.pow;
} }), require_round = __commonJS2({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/round.js"(exports$1, module) {
  module.exports = Math.round;
} }), require_isNaN = __commonJS2({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/isNaN.js"(exports$1, module) {
  module.exports = Number.isNaN || function(a22) {
    return a22 !== a22;
  };
} }), require_sign = __commonJS2({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/sign.js"(exports$1, module) {
  var $isNaN = require_isNaN();
  module.exports = function(number) {
    return $isNaN(number) || number === 0 ? number : number < 0 ? -1 : 1;
  };
} }), require_gOPD = __commonJS2({ "node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/gOPD.js"(exports$1, module) {
  module.exports = Object.getOwnPropertyDescriptor;
} }), require_gopd = __commonJS2({ "node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/index.js"(exports$1, module) {
  var $gOPD = require_gOPD();
  if ($gOPD) try {
    $gOPD([], "length");
  } catch {
    $gOPD = null;
  }
  module.exports = $gOPD;
} }), require_es_define_property = __commonJS2({ "node_modules/.pnpm/es-define-property@1.0.1/node_modules/es-define-property/index.js"(exports$1, module) {
  var $defineProperty = Object.defineProperty || false;
  if ($defineProperty) try {
    $defineProperty({}, "a", { value: 1 });
  } catch {
    $defineProperty = false;
  }
  module.exports = $defineProperty;
} }), require_shams = __commonJS2({ "node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/shams.js"(exports$1, module) {
  module.exports = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return false;
    if (typeof Symbol.iterator == "symbol") return true;
    var obj = {}, sym = Symbol("test"), symObj = Object(sym);
    if (typeof sym == "string" || Object.prototype.toString.call(sym) !== "[object Symbol]" || Object.prototype.toString.call(symObj) !== "[object Symbol]") return false;
    var symVal = 42;
    obj[sym] = symVal;
    for (var _2 in obj) return false;
    if (typeof Object.keys == "function" && Object.keys(obj).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(obj).length !== 0) return false;
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym || !Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
      if (descriptor.value !== symVal || descriptor.enumerable !== true) return false;
    }
    return true;
  };
} }), require_has_symbols = __commonJS2({ "node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/index.js"(exports$1, module) {
  var origSymbol = typeof Symbol < "u" && Symbol, hasSymbolSham = require_shams();
  module.exports = function() {
    return typeof origSymbol != "function" || typeof Symbol != "function" || typeof origSymbol("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? false : hasSymbolSham();
  };
} }), require_Reflect_getPrototypeOf = __commonJS2({ "node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Reflect.getPrototypeOf.js"(exports$1, module) {
  module.exports = typeof Reflect < "u" && Reflect.getPrototypeOf || null;
} }), require_Object_getPrototypeOf = __commonJS2({ "node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Object.getPrototypeOf.js"(exports$1, module) {
  var $Object = require_es_object_atoms();
  module.exports = $Object.getPrototypeOf || null;
} }), require_implementation = __commonJS2({ "node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/implementation.js"(exports$1, module) {
  var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ", toStr = Object.prototype.toString, max = Math.max, funcType = "[object Function]", concatty = function(a22, b22) {
    for (var arr = [], i22 = 0; i22 < a22.length; i22 += 1) arr[i22] = a22[i22];
    for (var j2 = 0; j2 < b22.length; j2 += 1) arr[j2 + a22.length] = b22[j2];
    return arr;
  }, slicy = function(arrLike, offset) {
    for (var arr = [], i22 = offset, j2 = 0; i22 < arrLike.length; i22 += 1, j2 += 1) arr[j2] = arrLike[i22];
    return arr;
  }, joiny = function(arr, joiner) {
    for (var str = "", i22 = 0; i22 < arr.length; i22 += 1) str += arr[i22], i22 + 1 < arr.length && (str += joiner);
    return str;
  };
  module.exports = function(that) {
    var target = this;
    if (typeof target != "function" || toStr.apply(target) !== funcType) throw new TypeError(ERROR_MESSAGE + target);
    for (var args = slicy(arguments, 1), bound, binder = function() {
      if (this instanceof bound) {
        var result = target.apply(this, concatty(args, arguments));
        return Object(result) === result ? result : this;
      }
      return target.apply(that, concatty(args, arguments));
    }, boundLength = max(0, target.length - args.length), boundArgs = [], i22 = 0; i22 < boundLength; i22++) boundArgs[i22] = "$" + i22;
    if (bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder), target.prototype) {
      var Empty2 = function() {
      };
      Empty2.prototype = target.prototype, bound.prototype = new Empty2(), Empty2.prototype = null;
    }
    return bound;
  };
} }), require_function_bind = __commonJS2({ "node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js"(exports$1, module) {
  var implementation = require_implementation();
  module.exports = Function.prototype.bind || implementation;
} }), require_functionCall = __commonJS2({ "node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionCall.js"(exports$1, module) {
  module.exports = Function.prototype.call;
} }), require_functionApply = __commonJS2({ "node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionApply.js"(exports$1, module) {
  module.exports = Function.prototype.apply;
} }), require_reflectApply = __commonJS2({ "node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/reflectApply.js"(exports$1, module) {
  module.exports = typeof Reflect < "u" && Reflect && Reflect.apply;
} }), require_actualApply = __commonJS2({ "node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/actualApply.js"(exports$1, module) {
  var bind = require_function_bind(), $apply = require_functionApply(), $call = require_functionCall(), $reflectApply = require_reflectApply();
  module.exports = $reflectApply || bind.call($call, $apply);
} }), require_call_bind_apply_helpers = __commonJS2({ "node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/index.js"(exports$1, module) {
  var bind = require_function_bind(), $TypeError = require_type(), $call = require_functionCall(), $actualApply = require_actualApply();
  module.exports = function(args) {
    if (args.length < 1 || typeof args[0] != "function") throw new $TypeError("a function is required");
    return $actualApply(bind, $call, args);
  };
} }), require_get = __commonJS2({ "node_modules/.pnpm/dunder-proto@1.0.1/node_modules/dunder-proto/get.js"(exports$1, module) {
  var callBind = require_call_bind_apply_helpers(), gOPD = require_gopd(), hasProtoAccessor;
  try {
    hasProtoAccessor = [].__proto__ === Array.prototype;
  } catch (e22) {
    if (!e22 || typeof e22 != "object" || !("code" in e22) || e22.code !== "ERR_PROTO_ACCESS") throw e22;
  }
  var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, "__proto__"), $Object = Object, $getPrototypeOf = $Object.getPrototypeOf;
  module.exports = desc && typeof desc.get == "function" ? callBind([desc.get]) : typeof $getPrototypeOf == "function" ? function(value2) {
    return $getPrototypeOf(value2 == null ? value2 : $Object(value2));
  } : false;
} }), require_get_proto = __commonJS2({ "node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/index.js"(exports$1, module) {
  var reflectGetProto = require_Reflect_getPrototypeOf(), originalGetProto = require_Object_getPrototypeOf(), getDunderProto = require_get();
  module.exports = reflectGetProto ? function(O2) {
    return reflectGetProto(O2);
  } : originalGetProto ? function(O2) {
    if (!O2 || typeof O2 != "object" && typeof O2 != "function") throw new TypeError("getProto: not an object");
    return originalGetProto(O2);
  } : getDunderProto ? function(O2) {
    return getDunderProto(O2);
  } : null;
} }), require_hasown = __commonJS2({ "node_modules/.pnpm/hasown@2.0.2/node_modules/hasown/index.js"(exports$1, module) {
  var call = Function.prototype.call, $hasOwn = Object.prototype.hasOwnProperty, bind = require_function_bind();
  module.exports = bind.call(call, $hasOwn);
} }), require_get_intrinsic = __commonJS2({ "node_modules/.pnpm/get-intrinsic@1.3.0/node_modules/get-intrinsic/index.js"(exports$1, module) {
  var undefined2, $Object = require_es_object_atoms(), $Error = require_es_errors(), $EvalError = require_eval(), $RangeError = require_range(), $ReferenceError = require_ref(), $SyntaxError = require_syntax(), $TypeError = require_type(), $URIError = require_uri(), abs = require_abs(), floor = require_floor(), max = require_max(), min = require_min(), pow = require_pow(), round = require_round(), sign = require_sign(), $Function = Function, getEvalledConstructor = function(expressionSyntax) {
    try {
      return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
    } catch {
    }
  }, $gOPD = require_gopd(), $defineProperty = require_es_define_property(), throwTypeError = function() {
    throw new $TypeError();
  }, ThrowTypeError = $gOPD ? function() {
    try {
      return arguments.callee, throwTypeError;
    } catch {
      try {
        return $gOPD(arguments, "callee").get;
      } catch {
        return throwTypeError;
      }
    }
  }() : throwTypeError, hasSymbols = require_has_symbols()(), getProto = require_get_proto(), $ObjectGPO = require_Object_getPrototypeOf(), $ReflectGPO = require_Reflect_getPrototypeOf(), $apply = require_functionApply(), $call = require_functionCall(), needsEval = {}, TypedArray = typeof Uint8Array > "u" || !getProto ? undefined2 : getProto(Uint8Array), INTRINSICS = { __proto__: null, "%AggregateError%": typeof AggregateError > "u" ? undefined2 : AggregateError, "%Array%": Array, "%ArrayBuffer%": typeof ArrayBuffer > "u" ? undefined2 : ArrayBuffer, "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2, "%AsyncFromSyncIteratorPrototype%": undefined2, "%AsyncFunction%": needsEval, "%AsyncGenerator%": needsEval, "%AsyncGeneratorFunction%": needsEval, "%AsyncIteratorPrototype%": needsEval, "%Atomics%": typeof Atomics > "u" ? undefined2 : Atomics, "%BigInt%": typeof BigInt > "u" ? undefined2 : BigInt, "%BigInt64Array%": typeof BigInt64Array > "u" ? undefined2 : BigInt64Array, "%BigUint64Array%": typeof BigUint64Array > "u" ? undefined2 : BigUint64Array, "%Boolean%": Boolean, "%DataView%": typeof DataView > "u" ? undefined2 : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": $Error, "%eval%": eval, "%EvalError%": $EvalError, "%Float16Array%": typeof Float16Array > "u" ? undefined2 : Float16Array, "%Float32Array%": typeof Float32Array > "u" ? undefined2 : Float32Array, "%Float64Array%": typeof Float64Array > "u" ? undefined2 : Float64Array, "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? undefined2 : FinalizationRegistry, "%Function%": $Function, "%GeneratorFunction%": needsEval, "%Int8Array%": typeof Int8Array > "u" ? undefined2 : Int8Array, "%Int16Array%": typeof Int16Array > "u" ? undefined2 : Int16Array, "%Int32Array%": typeof Int32Array > "u" ? undefined2 : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2, "%JSON%": typeof JSON == "object" ? JSON : undefined2, "%Map%": typeof Map > "u" ? undefined2 : Map, "%MapIteratorPrototype%": typeof Map > "u" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()), "%Math%": Math, "%Number%": Number, "%Object%": $Object, "%Object.getOwnPropertyDescriptor%": $gOPD, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": typeof Promise > "u" ? undefined2 : Promise, "%Proxy%": typeof Proxy > "u" ? undefined2 : Proxy, "%RangeError%": $RangeError, "%ReferenceError%": $ReferenceError, "%Reflect%": typeof Reflect > "u" ? undefined2 : Reflect, "%RegExp%": RegExp, "%Set%": typeof Set > "u" ? undefined2 : Set, "%SetIteratorPrototype%": typeof Set > "u" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()), "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? undefined2 : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2, "%Symbol%": hasSymbols ? Symbol : undefined2, "%SyntaxError%": $SyntaxError, "%ThrowTypeError%": ThrowTypeError, "%TypedArray%": TypedArray, "%TypeError%": $TypeError, "%Uint8Array%": typeof Uint8Array > "u" ? undefined2 : Uint8Array, "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? undefined2 : Uint8ClampedArray, "%Uint16Array%": typeof Uint16Array > "u" ? undefined2 : Uint16Array, "%Uint32Array%": typeof Uint32Array > "u" ? undefined2 : Uint32Array, "%URIError%": $URIError, "%WeakMap%": typeof WeakMap > "u" ? undefined2 : WeakMap, "%WeakRef%": typeof WeakRef > "u" ? undefined2 : WeakRef, "%WeakSet%": typeof WeakSet > "u" ? undefined2 : WeakSet, "%Function.prototype.call%": $call, "%Function.prototype.apply%": $apply, "%Object.defineProperty%": $defineProperty, "%Object.getPrototypeOf%": $ObjectGPO, "%Math.abs%": abs, "%Math.floor%": floor, "%Math.max%": max, "%Math.min%": min, "%Math.pow%": pow, "%Math.round%": round, "%Math.sign%": sign, "%Reflect.getPrototypeOf%": $ReflectGPO };
  if (getProto) try {
    null.error;
  } catch (e22) {
    errorProto = getProto(getProto(e22)), INTRINSICS["%Error.prototype%"] = errorProto;
  }
  var errorProto, doEval = function doEval2(name) {
    var value2;
    if (name === "%AsyncFunction%") value2 = getEvalledConstructor("async function () {}");
    else if (name === "%GeneratorFunction%") value2 = getEvalledConstructor("function* () {}");
    else if (name === "%AsyncGeneratorFunction%") value2 = getEvalledConstructor("async function* () {}");
    else if (name === "%AsyncGenerator%") {
      var fn2 = doEval2("%AsyncGeneratorFunction%");
      fn2 && (value2 = fn2.prototype);
    } else if (name === "%AsyncIteratorPrototype%") {
      var gen = doEval2("%AsyncGenerator%");
      gen && getProto && (value2 = getProto(gen.prototype));
    }
    return INTRINSICS[name] = value2, value2;
  }, LEGACY_ALIASES = { __proto__: null, "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, bind = require_function_bind(), hasOwn = require_hasown(), $concat = bind.call($call, Array.prototype.concat), $spliceApply = bind.call($apply, Array.prototype.splice), $replace = bind.call($call, String.prototype.replace), $strSlice = bind.call($call, String.prototype.slice), $exec = bind.call($call, RegExp.prototype.exec), rePropName2 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, reEscapeChar2 = /\\(\\)?/g, stringToPath2 = function(string) {
    var first = $strSlice(string, 0, 1), last = $strSlice(string, -1);
    if (first === "%" && last !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
    if (last === "%" && first !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
    var result = [];
    return $replace(string, rePropName2, function(match, number, quote, subString) {
      result[result.length] = quote ? $replace(subString, reEscapeChar2, "$1") : number || match;
    }), result;
  }, getBaseIntrinsic = function(name, allowMissing) {
    var intrinsicName = name, alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName) && (alias = LEGACY_ALIASES[intrinsicName], intrinsicName = "%" + alias[0] + "%"), hasOwn(INTRINSICS, intrinsicName)) {
      var value2 = INTRINSICS[intrinsicName];
      if (value2 === needsEval && (value2 = doEval(intrinsicName)), typeof value2 > "u" && !allowMissing) throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
      return { alias, name: intrinsicName, value: value2 };
    }
    throw new $SyntaxError("intrinsic " + name + " does not exist!");
  };
  module.exports = function(name, allowMissing) {
    if (typeof name != "string" || name.length === 0) throw new $TypeError("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof allowMissing != "boolean") throw new $TypeError('"allowMissing" argument must be a boolean');
    if ($exec(/^%?[^%]*%?$/, name) === null) throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var parts = stringToPath2(name), intrinsicBaseName = parts.length > 0 ? parts[0] : "", intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing), intrinsicRealName = intrinsic.name, value2 = intrinsic.value, skipFurtherCaching = false, alias = intrinsic.alias;
    alias && (intrinsicBaseName = alias[0], $spliceApply(parts, $concat([0, 1], alias)));
    for (var i22 = 1, isOwn = true; i22 < parts.length; i22 += 1) {
      var part = parts[i22], first = $strSlice(part, 0, 1), last = $strSlice(part, -1);
      if ((first === '"' || first === "'" || first === "`" || last === '"' || last === "'" || last === "`") && first !== last) throw new $SyntaxError("property names with quotes must have matching quotes");
      if ((part === "constructor" || !isOwn) && (skipFurtherCaching = true), intrinsicBaseName += "." + part, intrinsicRealName = "%" + intrinsicBaseName + "%", hasOwn(INTRINSICS, intrinsicRealName)) value2 = INTRINSICS[intrinsicRealName];
      else if (value2 != null) {
        if (!(part in value2)) {
          if (!allowMissing) throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
          return;
        }
        if ($gOPD && i22 + 1 >= parts.length) {
          var desc = $gOPD(value2, part);
          isOwn = !!desc, isOwn && "get" in desc && !("originalValue" in desc.get) ? value2 = desc.get : value2 = value2[part];
        } else isOwn = hasOwn(value2, part), value2 = value2[part];
        isOwn && !skipFurtherCaching && (INTRINSICS[intrinsicRealName] = value2);
      }
    }
    return value2;
  };
} }), require_call_bound = __commonJS2({ "node_modules/.pnpm/call-bound@1.0.4/node_modules/call-bound/index.js"(exports$1, module) {
  var GetIntrinsic = require_get_intrinsic(), callBindBasic = require_call_bind_apply_helpers(), $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
  module.exports = function(name, allowMissing) {
    var intrinsic = GetIntrinsic(name, !!allowMissing);
    return typeof intrinsic == "function" && $indexOf(name, ".prototype.") > -1 ? callBindBasic([intrinsic]) : intrinsic;
  };
} }), require_shams2 = __commonJS2({ "node_modules/.pnpm/has-tostringtag@1.0.2/node_modules/has-tostringtag/shams.js"(exports$1, module) {
  var hasSymbols = require_shams();
  module.exports = function() {
    return hasSymbols() && !!Symbol.toStringTag;
  };
} }), require_is_regex = __commonJS2({ "node_modules/.pnpm/is-regex@1.2.1/node_modules/is-regex/index.js"(exports$1, module) {
  var callBound = require_call_bound(), hasToStringTag = require_shams2()(), hasOwn = require_hasown(), gOPD = require_gopd(), fn2;
  hasToStringTag ? ($exec = callBound("RegExp.prototype.exec"), isRegexMarker = {}, throwRegexMarker = function() {
    throw isRegexMarker;
  }, badStringifier = { toString: throwRegexMarker, valueOf: throwRegexMarker }, typeof Symbol.toPrimitive == "symbol" && (badStringifier[Symbol.toPrimitive] = throwRegexMarker), fn2 = function(value2) {
    if (!value2 || typeof value2 != "object") return false;
    var descriptor = gOPD(value2, "lastIndex"), hasLastIndexDataProperty = descriptor && hasOwn(descriptor, "value");
    if (!hasLastIndexDataProperty) return false;
    try {
      $exec(value2, badStringifier);
    } catch (e22) {
      return e22 === isRegexMarker;
    }
  }) : ($toString = callBound("Object.prototype.toString"), regexClass = "[object RegExp]", fn2 = function(value2) {
    return !value2 || typeof value2 != "object" && typeof value2 != "function" ? false : $toString(value2) === regexClass;
  });
  var $exec, isRegexMarker, throwRegexMarker, badStringifier, $toString, regexClass;
  module.exports = fn2;
} }), require_is_function = __commonJS2({ "node_modules/.pnpm/is-function@1.0.2/node_modules/is-function/index.js"(exports$1, module) {
  module.exports = isFunction3;
  var toString2 = Object.prototype.toString;
  function isFunction3(fn2) {
    if (!fn2) return false;
    var string = toString2.call(fn2);
    return string === "[object Function]" || typeof fn2 == "function" && string !== "[object RegExp]" || typeof window < "u" && (fn2 === window.setTimeout || fn2 === window.alert || fn2 === window.confirm || fn2 === window.prompt);
  }
} }), require_safe_regex_test = __commonJS2({ "node_modules/.pnpm/safe-regex-test@1.1.0/node_modules/safe-regex-test/index.js"(exports$1, module) {
  var callBound = require_call_bound(), isRegex = require_is_regex(), $exec = callBound("RegExp.prototype.exec"), $TypeError = require_type();
  module.exports = function(regex2) {
    if (!isRegex(regex2)) throw new $TypeError("`regex` must be a RegExp");
    return function(s22) {
      return $exec(regex2, s22) !== null;
    };
  };
} }), require_is_symbol = __commonJS2({ "node_modules/.pnpm/is-symbol@1.1.1/node_modules/is-symbol/index.js"(exports$1, module) {
  var callBound = require_call_bound(), $toString = callBound("Object.prototype.toString"), hasSymbols = require_has_symbols()(), safeRegexTest = require_safe_regex_test();
  hasSymbols ? ($symToStr = callBound("Symbol.prototype.toString"), isSymString = safeRegexTest(/^Symbol\(.*\)$/), isSymbolObject = function(value2) {
    return typeof value2.valueOf() != "symbol" ? false : isSymString($symToStr(value2));
  }, module.exports = function(value2) {
    if (typeof value2 == "symbol") return true;
    if (!value2 || typeof value2 != "object" || $toString(value2) !== "[object Symbol]") return false;
    try {
      return isSymbolObject(value2);
    } catch {
      return false;
    }
  }) : module.exports = function(value2) {
    return false;
  };
  var $symToStr, isSymString, isSymbolObject;
} }), import_is_regex = __toESM2(require_is_regex()), import_is_function = __toESM2(require_is_function()), import_is_symbol = __toESM2(require_is_symbol());
function isObject(val) {
  return val != null && typeof val == "object" && Array.isArray(val) === false;
}
var freeGlobal = typeof global == "object" && global && global.Object === Object && global, freeGlobal_default = freeGlobal, freeSelf = typeof self == "object" && self && self.Object === Object && self, root = freeGlobal_default || freeSelf || Function("return this")(), root_default = root, Symbol2 = root_default.Symbol, Symbol_default = Symbol2, objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty, nativeObjectToString = objectProto.toString, symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value2) {
  var isOwn = hasOwnProperty.call(value2, symToStringTag), tag = value2[symToStringTag];
  try {
    value2[symToStringTag] = void 0;
    var unmasked = true;
  } catch {
  }
  var result = nativeObjectToString.call(value2);
  return unmasked && (isOwn ? value2[symToStringTag] = tag : delete value2[symToStringTag]), result;
}
var getRawTag_default = getRawTag, objectProto2 = Object.prototype, nativeObjectToString2 = objectProto2.toString;
function objectToString(value2) {
  return nativeObjectToString2.call(value2);
}
var objectToString_default = objectToString, nullTag = "[object Null]", undefinedTag = "[object Undefined]", symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value2) {
  return value2 == null ? value2 === void 0 ? undefinedTag : nullTag : symToStringTag2 && symToStringTag2 in Object(value2) ? getRawTag_default(value2) : objectToString_default(value2);
}
var baseGetTag_default = baseGetTag;
var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
symbolProto ? symbolProto.toString : void 0;
function isObject2(value2) {
  var type = typeof value2;
  return value2 != null && (type == "object" || type == "function");
}
var isObject_default = isObject2, asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value2) {
  if (!isObject_default(value2)) return false;
  var tag = baseGetTag_default(value2);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction, coreJsData = root_default["__core-js_shared__"], coreJsData_default = coreJsData, maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var isMasked_default = isMasked, funcProto = Function.prototype, funcToString = funcProto.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch {
    }
    try {
      return func + "";
    } catch {
    }
  }
  return "";
}
var toSource_default = toSource, reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reIsHostCtor = /^\[object .+?Constructor\]$/, funcProto2 = Function.prototype, objectProto3 = Object.prototype, funcToString2 = funcProto2.toString, hasOwnProperty2 = objectProto3.hasOwnProperty, reIsNative = RegExp("^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function baseIsNative(value2) {
  if (!isObject_default(value2) || isMasked_default(value2)) return false;
  var pattern = isFunction_default(value2) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource_default(value2));
}
var baseIsNative_default = baseIsNative;
function getValue(object2, key) {
  return object2 == null ? void 0 : object2[key];
}
var getValue_default = getValue;
function getNative(object2, key) {
  var value2 = getValue_default(object2, key);
  return baseIsNative_default(value2) ? value2 : void 0;
}
var getNative_default = getNative;
function eq(value2, other) {
  return value2 === other || value2 !== value2 && other !== other;
}
var eq_default = eq;
var nativeCreate = getNative_default(Object, "create"), nativeCreate_default = nativeCreate;
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {}, this.size = 0;
}
var hashClear_default = hashClear;
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  return this.size -= result ? 1 : 0, result;
}
var hashDelete_default = hashDelete, HASH_UNDEFINED = "__lodash_hash_undefined__", objectProto4 = Object.prototype, hasOwnProperty3 = objectProto4.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result = data[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty3.call(data, key) ? data[key] : void 0;
}
var hashGet_default = hashGet, objectProto5 = Object.prototype, hasOwnProperty4 = objectProto5.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty4.call(data, key);
}
var hashHas_default = hashHas, HASH_UNDEFINED2 = "__lodash_hash_undefined__";
function hashSet(key, value2) {
  var data = this.__data__;
  return this.size += this.has(key) ? 0 : 1, data[key] = nativeCreate_default && value2 === void 0 ? HASH_UNDEFINED2 : value2, this;
}
var hashSet_default = hashSet;
function Hash(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  for (this.clear(); ++index2 < length; ) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear_default;
Hash.prototype.delete = hashDelete_default;
Hash.prototype.get = hashGet_default;
Hash.prototype.has = hashHas_default;
Hash.prototype.set = hashSet_default;
var Hash_default = Hash;
function listCacheClear() {
  this.__data__ = [], this.size = 0;
}
var listCacheClear_default = listCacheClear;
function assocIndexOf(array2, key) {
  for (var length = array2.length; length--; ) if (eq_default(array2[length][0], key)) return length;
  return -1;
}
var assocIndexOf_default = assocIndexOf, arrayProto = Array.prototype, splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index2 = assocIndexOf_default(data, key);
  if (index2 < 0) return false;
  var lastIndex = data.length - 1;
  return index2 == lastIndex ? data.pop() : splice.call(data, index2, 1), --this.size, true;
}
var listCacheDelete_default = listCacheDelete;
function listCacheGet(key) {
  var data = this.__data__, index2 = assocIndexOf_default(data, key);
  return index2 < 0 ? void 0 : data[index2][1];
}
var listCacheGet_default = listCacheGet;
function listCacheHas(key) {
  return assocIndexOf_default(this.__data__, key) > -1;
}
var listCacheHas_default = listCacheHas;
function listCacheSet(key, value2) {
  var data = this.__data__, index2 = assocIndexOf_default(data, key);
  return index2 < 0 ? (++this.size, data.push([key, value2])) : data[index2][1] = value2, this;
}
var listCacheSet_default = listCacheSet;
function ListCache(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  for (this.clear(); ++index2 < length; ) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear_default;
ListCache.prototype.delete = listCacheDelete_default;
ListCache.prototype.get = listCacheGet_default;
ListCache.prototype.has = listCacheHas_default;
ListCache.prototype.set = listCacheSet_default;
var ListCache_default = ListCache, Map2 = getNative_default(root_default, "Map"), Map_default = Map2;
function mapCacheClear() {
  this.size = 0, this.__data__ = { hash: new Hash_default(), map: new (Map_default || ListCache_default)(), string: new Hash_default() };
}
var mapCacheClear_default = mapCacheClear;
function isKeyable(value2) {
  var type = typeof value2;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value2 !== "__proto__" : value2 === null;
}
var isKeyable_default = isKeyable;
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var getMapData_default = getMapData;
function mapCacheDelete(key) {
  var result = getMapData_default(this, key).delete(key);
  return this.size -= result ? 1 : 0, result;
}
var mapCacheDelete_default = mapCacheDelete;
function mapCacheGet(key) {
  return getMapData_default(this, key).get(key);
}
var mapCacheGet_default = mapCacheGet;
function mapCacheHas(key) {
  return getMapData_default(this, key).has(key);
}
var mapCacheHas_default = mapCacheHas;
function mapCacheSet(key, value2) {
  var data = getMapData_default(this, key), size = data.size;
  return data.set(key, value2), this.size += data.size == size ? 0 : 1, this;
}
var mapCacheSet_default = mapCacheSet;
function MapCache(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  for (this.clear(); ++index2 < length; ) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear_default;
MapCache.prototype.delete = mapCacheDelete_default;
MapCache.prototype.get = mapCacheGet_default;
MapCache.prototype.has = mapCacheHas_default;
MapCache.prototype.set = mapCacheSet_default;
var MapCache_default = MapCache, FUNC_ERROR_TEXT = "Expected a function";
function memoize2(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") throw new TypeError(FUNC_ERROR_TEXT);
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) return cache.get(key);
    var result = func.apply(this, args);
    return memoized.cache = cache.set(key, result) || cache, result;
  };
  return memoized.cache = new (memoize2.Cache || MapCache_default)(), memoized;
}
memoize2.Cache = MapCache_default;
var memoize_default = memoize2, MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize_default(func, function(key) {
    return cache.size === MAX_MEMOIZE_SIZE && cache.clear(), key;
  }), cache = result.cache;
  return result;
}
var memoizeCapped_default = memoizeCapped, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, reEscapeChar = /\\(\\)?/g;
memoizeCapped_default(function(string) {
  var result = [];
  return string.charCodeAt(0) === 46 && result.push(""), string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  }), result;
});
var isObject3 = isObject, dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
function convertUnconventionalData(data) {
  if (!isObject3(data)) return data;
  let result = data, wasMutated = false;
  return typeof Event < "u" && data instanceof Event && (result = extractEventHiddenProperties(result), wasMutated = true), result = Object.keys(result).reduce((acc, key) => {
    try {
      result[key] && result[key].toJSON, acc[key] = result[key];
    } catch {
      wasMutated = true;
    }
    return acc;
  }, {}), wasMutated ? result : data;
}
var replacer = function(options) {
  let objects, map, stack, keys;
  return function(key, value2) {
    var _a2;
    try {
      if (key === "") return keys = [], objects = /* @__PURE__ */ new Map([[value2, "[]"]]), map = /* @__PURE__ */ new Map(), stack = [], value2;
      let origin = map.get(this) || this;
      for (; stack.length && origin !== stack[0]; ) stack.shift(), keys.pop();
      if (typeof value2 == "boolean") return value2;
      if (value2 === void 0) return options.allowUndefined ? "_undefined_" : void 0;
      if (value2 === null) return null;
      if (typeof value2 == "number") return value2 === Number.NEGATIVE_INFINITY ? "_-Infinity_" : value2 === Number.POSITIVE_INFINITY ? "_Infinity_" : Number.isNaN(value2) ? "_NaN_" : value2;
      if (typeof value2 == "bigint") return `_bigint_${value2.toString()}`;
      if (typeof value2 == "string") return dateFormat.test(value2) ? options.allowDate ? `_date_${value2}` : void 0 : value2;
      if ((0, import_is_regex.default)(value2)) return options.allowRegExp ? `_regexp_${value2.flags}|${value2.source}` : void 0;
      if ((0, import_is_function.default)(value2)) return;
      if ((0, import_is_symbol.default)(value2)) {
        if (!options.allowSymbol) return;
        let globalRegistryKey = Symbol.keyFor(value2);
        return globalRegistryKey !== void 0 ? `_gsymbol_${globalRegistryKey}` : `_symbol_${value2.toString().slice(7, -1)}`;
      }
      if (stack.length >= options.maxDepth) return Array.isArray(value2) ? `[Array(${value2.length})]` : "[Object]";
      if (value2 === this) return `_duplicate_${JSON.stringify(keys)}`;
      if (value2 instanceof Error && options.allowError) return { __isConvertedError__: true, errorProperties: { ...value2.cause ? { cause: value2.cause } : {}, ...value2, name: value2.name, message: value2.message, stack: value2.stack, "_constructor-name_": value2.constructor.name } };
      if (((_a2 = value2 == null ? void 0 : value2.constructor) == null ? void 0 : _a2.name) && value2.constructor.name !== "Object" && !Array.isArray(value2)) {
        let found2 = objects.get(value2);
        if (!found2) {
          let plainObject = { __isClassInstance__: true, __className__: value2.constructor.name, ...Object.getOwnPropertyNames(value2).reduce((acc, prop) => {
            try {
              acc[prop] = value2[prop];
            } catch {
            }
            return acc;
          }, {}) };
          return keys.push(key), stack.unshift(plainObject), objects.set(value2, JSON.stringify(keys)), value2 !== plainObject && map.set(value2, plainObject), plainObject;
        }
        return `_duplicate_${found2}`;
      }
      let found = objects.get(value2);
      if (!found) {
        let converted = Array.isArray(value2) ? value2 : convertUnconventionalData(value2);
        return keys.push(key), stack.unshift(converted), objects.set(value2, JSON.stringify(keys)), value2 !== converted && map.set(value2, converted), converted;
      }
      return `_duplicate_${found}`;
    } catch {
      return;
    }
  };
};
var defaultOptions = { maxDepth: 10, space: void 0, allowRegExp: true, allowDate: true, allowError: true, allowUndefined: true, allowSymbol: true }, stringify = (data, options = {}) => {
  let mergedOptions = { ...defaultOptions, ...options };
  return JSON.stringify(convertUnconventionalData(data), replacer(mergedOptions), options.space);
};
function argsHash(args) {
  return stringify(args, { maxDepth: 50 });
}
var SourceContext = reactExports.createContext({ sources: {} }), UNKNOWN_ARGS_HASH = "--unknown--", SourceContainer = ({ children, channel }) => {
  let [sources, setSources] = reactExports.useState({});
  return reactExports.useEffect(() => {
    let handleSnippetRendered = (idOrEvent, inputSource = null, inputFormat = false) => {
      let { id: id2, args = void 0, source, format: format3 } = typeof idOrEvent == "string" ? { id: idOrEvent, source: inputSource, format: inputFormat } : idOrEvent, hash = args ? argsHash(args) : UNKNOWN_ARGS_HASH;
      setSources((current) => ({ ...current, [id2]: { ...current[id2], [hash]: { code: source || "", format: format3 } } }));
    };
    return channel.on(ha, handleSnippetRendered), () => channel.off(ha, handleSnippetRendered);
  }, []), e.createElement(SourceContext.Provider, { value: { sources } }, children);
};
function useTransformCode(source, transform, storyContext) {
  let [transformedCode, setTransformedCode] = reactExports.useState("Transforming..."), transformed = transform ? transform == null ? void 0 : transform(source, storyContext) : source;
  return reactExports.useEffect(() => {
    async function getTransformedCode() {
      let transformResult = await transformed;
      transformResult !== transformedCode && setTransformedCode(transformResult);
    }
    getTransformedCode();
  }), typeof transformed == "object" && typeof transformed.then == "function" ? transformedCode : transformed;
}
var getStorySource = (storyId, args, sourceContext) => {
  let { sources } = sourceContext, sourceMap = sources == null ? void 0 : sources[storyId];
  return (sourceMap == null ? void 0 : sourceMap[argsHash(args)]) || (sourceMap == null ? void 0 : sourceMap[UNKNOWN_ARGS_HASH]) || { code: "" };
}, useCode = ({ snippet, storyContext, typeFromProps, transformFromProps }) => {
  var _a2;
  let parameters = storyContext.parameters ?? {}, { __isArgsStory: isArgsStory } = parameters, sourceParameters = ((_a2 = parameters.docs) == null ? void 0 : _a2.source) || {}, type = typeFromProps || sourceParameters.type || Tn$2.AUTO, code = type === Tn$2.DYNAMIC || type === Tn$2.AUTO && snippet && isArgsStory ? snippet : sourceParameters.originalSource || "", transformer = transformFromProps ?? sourceParameters.transform, transformedCode = transformer ? useTransformCode(code, transformer, storyContext) : code;
  return sourceParameters.code !== void 0 ? sourceParameters.code : transformedCode;
}, useSourceProps = (props, docsContext, sourceContext) => {
  var _a2, _b2;
  let { of: of2 } = props, story = reactExports.useMemo(() => {
    if (of2) return docsContext.resolveOf(of2, ["story"]).story;
    try {
      return docsContext.storyById();
    } catch {
    }
  }, [docsContext, of2]), storyContext = story ? docsContext.getStoryContext(story) : {}, argsForSource = props.__forceInitialArgs ? storyContext.initialArgs : storyContext.unmappedArgs, source = story ? getStorySource(story.id, argsForSource, sourceContext) : null, transformedCode = useCode({ snippet: source ? source.code : "", storyContext: { ...storyContext, args: argsForSource }, typeFromProps: props.type, transformFromProps: props.transform });
  if ("of" in props && of2 === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let sourceParameters = ((_b2 = (_a2 = story == null ? void 0 : story.parameters) == null ? void 0 : _a2.docs) == null ? void 0 : _b2.source) || {}, format3 = props.format, language = props.language ?? sourceParameters.language ?? "jsx", dark = props.dark ?? sourceParameters.dark ?? false;
  return !props.code && !story ? { error: "Oh no! The source is not available." } : props.code ? { code: props.code, format: format3, language, dark } : (format3 = (source == null ? void 0 : source.format) ?? true, { code: transformedCode, format: format3, language, dark });
};
function useStory(storyId, context) {
  let stories = useStories([storyId], context);
  return stories && stories[0];
}
function useStories(storyIds, context) {
  let [storiesById, setStories] = reactExports.useState({});
  return reactExports.useEffect(() => {
    Promise.all(storyIds.map(async (storyId) => {
      let story = await context.loadStory(storyId);
      setStories((current) => current[storyId] === story ? current : { ...current, [storyId]: story });
    }));
  }), storyIds.map((storyId) => {
    if (storiesById[storyId]) return storiesById[storyId];
    try {
      return context.storyById(storyId);
    } catch {
      return;
    }
  });
}
var getStoryId2 = (props, context) => {
  let { of: of2, meta } = props;
  if ("of" in props && of2 === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  return meta && context.referenceMeta(meta, false), context.resolveOf(of2 || "story", ["story"]).story.id;
}, getStoryProps = (props, story, context) => {
  let { parameters = {} } = story || {}, { docs = {} } = parameters, storyParameters = docs.story || {};
  if (docs.disable) return null;
  if (props.inline ?? storyParameters.inline ?? false) {
    let height2 = props.height ?? storyParameters.height, autoplay = props.autoplay ?? storyParameters.autoplay ?? false;
    return { story, inline: true, height: height2, autoplay, forceInitialArgs: !!props.__forceInitialArgs, primary: !!props.__primary, renderStoryToElement: context.renderStoryToElement };
  }
  let height = props.height ?? storyParameters.height ?? storyParameters.iframeHeight ?? "100px";
  return { story, inline: false, height, primary: !!props.__primary };
}, Story2 = (props = { __forceInitialArgs: false, __primary: false }) => {
  let context = reactExports.useContext(DocsContext), storyId = getStoryId2(props, context), story = useStory(storyId, context);
  if (!story) return e.createElement(StorySkeleton, null);
  let storyProps = getStoryProps(props, story, context);
  return storyProps ? e.createElement(Story, { ...storyProps }) : null;
};
var Canvas = (props) => {
  var _a2, _b2, _c3, _d3, _e2, _f2, _g2, _h2, _i2, _j, _k, _l2, _m2, _n2;
  let docsContext = reactExports.useContext(DocsContext), sourceContext = reactExports.useContext(SourceContext), { of: of2, source } = props;
  if ("of" in props && of2 === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let { story } = useOf(of2 || "story", ["story"]), sourceProps = useSourceProps({ ...source, ...of2 && { of: of2 } }, docsContext, sourceContext), layout = props.layout ?? story.parameters.layout ?? ((_b2 = (_a2 = story.parameters.docs) == null ? void 0 : _a2.canvas) == null ? void 0 : _b2.layout) ?? "padded", withToolbar = props.withToolbar ?? ((_d3 = (_c3 = story.parameters.docs) == null ? void 0 : _c3.canvas) == null ? void 0 : _d3.withToolbar) ?? false, additionalActions = props.additionalActions ?? ((_f2 = (_e2 = story.parameters.docs) == null ? void 0 : _e2.canvas) == null ? void 0 : _f2.additionalActions), sourceState = props.sourceState ?? ((_h2 = (_g2 = story.parameters.docs) == null ? void 0 : _g2.canvas) == null ? void 0 : _h2.sourceState) ?? "hidden", className = props.className ?? ((_j = (_i2 = story.parameters.docs) == null ? void 0 : _i2.canvas) == null ? void 0 : _j.className), inline = ((_k = props.story) == null ? void 0 : _k.inline) ?? ((_n2 = (_m2 = (_l2 = story.parameters) == null ? void 0 : _l2.docs) == null ? void 0 : _m2.story) == null ? void 0 : _n2.inline) ?? false;
  return e.createElement(Preview, { withSource: sourceState === "none" ? void 0 : sourceProps, isExpanded: sourceState === "shown", withToolbar, additionalActions, className, layout, inline }, e.createElement(Story2, { of: of2 || story.moduleExport, meta: props.meta, ...props.story }));
};
var useArgs = (story, context) => {
  let result = useArgsIfDefined(story, context);
  if (!result) throw new Error("No result when story was defined");
  return result;
}, useArgsIfDefined = (story, context) => {
  let storyContext = story ? context.getStoryContext(story) : { args: {} }, { id: storyId } = story || { id: "none" }, [args, setArgs] = reactExports.useState(storyContext.args);
  reactExports.useEffect(() => {
    let onArgsUpdated = (changed) => {
      changed.storyId === storyId && setArgs(changed.args);
    };
    return context.channel.on(STORY_ARGS_UPDATED, onArgsUpdated), () => context.channel.off(STORY_ARGS_UPDATED, onArgsUpdated);
  }, [storyId, context.channel]);
  let updateArgs = reactExports.useCallback((updatedArgs) => context.channel.emit(UPDATE_STORY_ARGS, { storyId, updatedArgs }), [storyId, context.channel]), resetArgs = reactExports.useCallback((argNames) => context.channel.emit(RESET_STORY_ARGS, { storyId, argNames }), [storyId, context.channel]);
  return story && [args, updateArgs, resetArgs];
};
var useGlobals = (story, context) => {
  let storyContext = context.getStoryContext(story), [globals, setGlobals] = reactExports.useState(storyContext.globals);
  return reactExports.useEffect(() => {
    let onGlobalsUpdated = (changed) => {
      setGlobals(changed.globals);
    };
    return context.channel.on(GLOBALS_UPDATED, onGlobalsUpdated), () => context.channel.off(GLOBALS_UPDATED, onGlobalsUpdated);
  }, [context.channel]), [globals];
};
function extractComponentArgTypes2(component, parameters) {
  let { extractArgTypes } = parameters.docs || {};
  if (!extractArgTypes) throw new Error("Args unsupported. See Args documentation for your framework.");
  return extractArgTypes(component);
}
var Controls3 = (props) => {
  var _a2;
  let { of: of2 } = props;
  if ("of" in props && of2 === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let context = reactExports.useContext(DocsContext), { story } = context.resolveOf(of2 || "story", ["story"]), { parameters, argTypes, component, subcomponents } = story, controlsParameters = ((_a2 = parameters.docs) == null ? void 0 : _a2.controls) || {}, include = props.include ?? controlsParameters.include, exclude = props.exclude ?? controlsParameters.exclude, sort = props.sort ?? controlsParameters.sort, [args, updateArgs, resetArgs] = useArgs(story, context), [globals] = useGlobals(story, context), filteredArgTypes = filterArgTypes(argTypes, include, exclude);
  if (!(!!subcomponents && Object.keys(subcomponents || {}).length > 0)) return Object.keys(filteredArgTypes).length > 0 || Object.keys(args).length > 0 ? e.createElement(ArgsTable, { rows: filteredArgTypes, sort, args, globals, updateArgs, resetArgs }) : null;
  let mainComponentName = getComponentName(component) || "Story", subcomponentTabs = Object.fromEntries(Object.entries(subcomponents || {}).map(([key, comp]) => [key, { rows: filterArgTypes(extractComponentArgTypes2(comp, parameters), include, exclude), sort }])), tabs = { [mainComponentName]: { rows: filteredArgTypes, sort }, ...subcomponentTabs };
  return e.createElement(TabbedArgsTable, { tabs, sort, args, globals, updateArgs, resetArgs });
};
var { document: document2 } = globalThis, CodeOrSourceMdx = ({ className, children, ...rest }) => {
  if (typeof className != "string" && (typeof children != "string" || !children.match(/[\n\r]/g))) return e.createElement(ci, null, children);
  let language = className && className.split("-");
  return e.createElement(Source, { language: language && language[1] || "text", format: false, code: children, ...rest });
};
function navigate(context, url) {
  context.channel.emit(NAVIGATE_URL, url);
}
var A2 = qO.a, AnchorInPage = ({ hash, children }) => {
  let context = reactExports.useContext(DocsContext);
  return e.createElement(A2, { href: hash, target: "_self", onClick: (event) => {
    let id2 = hash.substring(1);
    document2.getElementById(id2) && navigate(context, hash);
  } }, children);
}, AnchorMdx = (props) => {
  let { href, target, children, ...rest } = props, context = reactExports.useContext(DocsContext);
  return !href || target === "_blank" || /^https?:\/\//.test(href) ? e.createElement(A2, { ...props }) : href.startsWith("#") ? e.createElement(AnchorInPage, { hash: href }, children) : e.createElement(A2, { href, onClick: (event) => {
    event.button === 0 && !event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey && (event.preventDefault(), navigate(context, event.currentTarget.getAttribute("href") || ""));
  }, target, ...rest }, children);
}, SUPPORTED_MDX_HEADERS = ["h1", "h2", "h3", "h4", "h5", "h6"], OcticonHeaders = SUPPORTED_MDX_HEADERS.reduce((acc, headerType) => ({ ...acc, [headerType]: xr$3(headerType)({ "& svg": { position: "relative", top: "-0.1em", visibility: "hidden" }, "&:hover svg": { visibility: "visible" } }) }), {}), OcticonAnchor = xr$3.a(() => ({ float: "left", lineHeight: "inherit", paddingRight: "10px", marginLeft: "-24px", color: "inherit" })), HeaderWithOcticonAnchor = ({ as: as2, id: id2, children, ...rest }) => {
  let context = reactExports.useContext(DocsContext), OcticonHeader = OcticonHeaders[as2], hash = `#${id2}`;
  return e.createElement(OcticonHeader, { id: id2, ...rest }, e.createElement(OcticonAnchor, { "aria-hidden": "true", href: hash, tabIndex: -1, target: "_self", onClick: (event) => {
    document2.getElementById(id2) && navigate(context, hash);
  } }, e.createElement(LinkIcon, null)), children);
}, HeaderMdx = (props) => {
  let { as: as2, id: id2, children, ...rest } = props;
  if (id2) return e.createElement(HeaderWithOcticonAnchor, { as: as2, id: id2, ...rest }, children);
  let Component4 = as2, { as: omittedAs, ...withoutAs } = props;
  return e.createElement(Component4, { ...J$1(withoutAs, as2) });
}, HeadersMdx = SUPPORTED_MDX_HEADERS.reduce((acc, headerType) => ({ ...acc, [headerType]: (props) => e.createElement(HeaderMdx, { as: headerType, ...props }) }), {});
var Markdown = (props) => {
  var _a2;
  if (!props.children) return null;
  if (typeof props.children != "string") throw new Error(dedent`The Markdown block only accepts children as a single string, but children were of type: '${typeof props.children}'
        This is often caused by not wrapping the child in a template string.
        
        This is invalid:
        <Markdown>
          # Some heading
          A paragraph
        </Markdown>

        Instead do:
        <Markdown>
        {\`
          # Some heading
          A paragraph
        \`}
        </Markdown>
      `);
  return e.createElement(index_modern_default, { ...props, options: { forceBlock: true, overrides: { code: CodeOrSourceMdx, a: AnchorMdx, ...HeadersMdx, ...(_a2 = props == null ? void 0 : props.options) == null ? void 0 : _a2.overrides }, ...props == null ? void 0 : props.options } });
};
var DescriptionType = ((DescriptionType2) => (DescriptionType2.INFO = "info", DescriptionType2.NOTES = "notes", DescriptionType2.DOCGEN = "docgen", DescriptionType2.AUTO = "auto", DescriptionType2))(DescriptionType || {}), getDescriptionFromResolvedOf = (resolvedOf) => {
  var _a2, _b2, _c3, _d3, _e2, _f2, _g2, _h2;
  switch (resolvedOf.type) {
    case "story":
      return ((_b2 = (_a2 = resolvedOf.story.parameters.docs) == null ? void 0 : _a2.description) == null ? void 0 : _b2.story) || null;
    case "meta": {
      let { parameters, component } = resolvedOf.preparedMeta, metaDescription = (_d3 = (_c3 = parameters.docs) == null ? void 0 : _c3.description) == null ? void 0 : _d3.component;
      return metaDescription || ((_f2 = (_e2 = parameters.docs) == null ? void 0 : _e2.extractComponentDescription) == null ? void 0 : _f2.call(_e2, component, { component, parameters })) || null;
    }
    case "component": {
      let { component, projectAnnotations: { parameters } } = resolvedOf;
      return ((_h2 = (_g2 = parameters == null ? void 0 : parameters.docs) == null ? void 0 : _g2.extractComponentDescription) == null ? void 0 : _h2.call(_g2, component, { component, parameters })) || null;
    }
    default:
      throw new Error(`Unrecognized module type resolved from 'useOf', got: ${resolvedOf.type}`);
  }
}, DescriptionContainer = (props) => {
  let { of: of2 } = props;
  if ("of" in props && of2 === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let resolvedOf = useOf(of2 || "meta"), markdown = getDescriptionFromResolvedOf(resolvedOf);
  return markdown ? e.createElement(Markdown, null, markdown) : null;
};
var { document: document3, window: globalWindow3 } = globalThis, DocsContainer = ({ context, theme, children }) => {
  var _a2, _b2, _c3, _d3, _e2;
  let toc;
  try {
    toc = (_b2 = (_a2 = context.resolveOf("meta", ["meta"]).preparedMeta.parameters) == null ? void 0 : _a2.docs) == null ? void 0 : _b2.toc;
  } catch {
    toc = (_e2 = (_d3 = (_c3 = context == null ? void 0 : context.projectAnnotations) == null ? void 0 : _c3.parameters) == null ? void 0 : _d3.docs) == null ? void 0 : _e2.toc;
  }
  return reactExports.useEffect(() => {
    let url;
    try {
      if (url = new URL(globalWindow3.parent.location.toString()), url.hash) {
        let element = document3.getElementById(decodeURIComponent(url.hash.substring(1)));
        element && setTimeout(() => {
          scrollToElement(element);
        }, 200);
      }
    } catch {
    }
  }), e.createElement(DocsContext.Provider, { value: context }, e.createElement(SourceContainer, { channel: context.channel }, e.createElement(Tt$3, { theme: pf$1(theme) }, e.createElement(DocsPageWrapper, { toc: toc ? e.createElement(TableOfContents, { className: "sbdocs sbdocs-toc--custom", channel: context.channel, ...toc }) : null }, children))));
};
var regex = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g;
var own = Object.hasOwnProperty, BananaSlug = class {
  constructor() {
    this.occurrences, this.reset();
  }
  slug(value2, maintainCase) {
    let self2 = this, result = slug(value2, maintainCase === true), originalSlug = result;
    for (; own.call(self2.occurrences, result); ) self2.occurrences[originalSlug]++, result = originalSlug + "-" + self2.occurrences[originalSlug];
    return self2.occurrences[result] = 0, result;
  }
  reset() {
    this.occurrences = /* @__PURE__ */ Object.create(null);
  }
};
function slug(value2, maintainCase) {
  return typeof value2 != "string" ? "" : (maintainCase || (value2 = value2.toLowerCase()), value2.replace(regex, "").replace(/ /g, "-"));
}
var slugs = new BananaSlug(), Heading2 = ({ children, disableAnchor, ...props }) => {
  if (disableAnchor || typeof children != "string") return e.createElement(di, null, children);
  let tagID = slugs.slug(children.toLowerCase());
  return e.createElement(HeaderMdx, { as: "h2", id: tagID, ...props }, children);
};
var Subheading = ({ children, disableAnchor }) => {
  if (disableAnchor || typeof children != "string") return e.createElement(pi, null, children);
  let tagID = slugs.slug(children.toLowerCase());
  return e.createElement(HeaderMdx, { as: "h3", id: tagID }, children);
};
var DocsStory = ({ of: of2, expanded = true, withToolbar: withToolbarProp = false, __forceInitialArgs = false, __primary = false }) => {
  var _a2, _b2;
  let { story } = useOf(of2 || "story", ["story"]), withToolbar = ((_b2 = (_a2 = story.parameters.docs) == null ? void 0 : _a2.canvas) == null ? void 0 : _b2.withToolbar) ?? withToolbarProp;
  return e.createElement(Anchor, { storyId: story.id }, expanded && e.createElement(e.Fragment, null, e.createElement(Subheading, null, story.name), e.createElement(DescriptionContainer, { of: of2 })), e.createElement(Canvas, { of: of2, withToolbar, story: { __forceInitialArgs, __primary }, source: { __forceInitialArgs } }));
};
var Primary = (props) => {
  let { of: of2 } = props;
  if ("of" in props && of2 === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let { csfFile } = useOf(of2 || "meta", ["meta"]), primaryStory = reactExports.useContext(DocsContext).componentStoriesFromCSFFile(csfFile)[0];
  return primaryStory ? e.createElement(DocsStory, { of: primaryStory.moduleExport, expanded: false, __primary: true, withToolbar: true }) : null;
};
var StyledHeading = xr$3(Heading2)(({ theme }) => ({ fontSize: `${theme.typography.size.s2 - 1}px`, fontWeight: theme.typography.weight.bold, lineHeight: "16px", letterSpacing: "0.35em", textTransform: "uppercase", color: theme.textMutedColor, border: 0, marginBottom: "12px", "&:first-of-type": { marginTop: "56px" } })), Stories = ({ title = "Stories", includePrimary = true }) => {
  var _a2;
  let { componentStories, projectAnnotations, getStoryContext } = reactExports.useContext(DocsContext), stories = componentStories(), { stories: { filter } = { filter: void 0 } } = ((_a2 = projectAnnotations.parameters) == null ? void 0 : _a2.docs) || {};
  return filter && (stories = stories.filter((story) => filter(story, getStoryContext(story)))), stories.some((story) => {
    var _a3;
    return (_a3 = story.tags) == null ? void 0 : _a3.includes("autodocs");
  }) && (stories = stories.filter((story) => {
    var _a3;
    return ((_a3 = story.tags) == null ? void 0 : _a3.includes("autodocs")) && !story.usesMount;
  })), includePrimary || (stories = stories.slice(1)), !stories || stories.length === 0 ? null : e.createElement(e.Fragment, null, typeof title == "string" ? e.createElement(StyledHeading, null, title) : title, stories.map((story) => story && e.createElement(DocsStory, { key: story.id, of: story.moduleExport, expanded: true, __forceInitialArgs: true })));
};
var DEPRECATION_MIGRATION_LINK = "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#subtitle-block-and-parameterscomponentsubtitle", Subtitle2 = (props) => {
  let { of: of2, children } = props;
  if ("of" in props && of2 === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let preparedMeta;
  try {
    preparedMeta = useOf(of2 || "meta", ["meta"]).preparedMeta;
  } catch (error) {
    if (children && !error.message.includes("did you forget to use <Meta of={} />?")) throw error;
  }
  let { componentSubtitle, docs } = (preparedMeta == null ? void 0 : preparedMeta.parameters) || {};
  componentSubtitle && deprecate(`Using 'parameters.componentSubtitle' property to subtitle stories is deprecated. See ${DEPRECATION_MIGRATION_LINK}`);
  let content = children || (docs == null ? void 0 : docs.subtitle) || componentSubtitle;
  return content ? e.createElement(Subtitle, { className: "sbdocs-subtitle sb-unstyled" }, content) : null;
};
var STORY_KIND_PATH_SEPARATOR = /\s*\/\s*/, extractTitle = (title) => {
  let groups = title.trim().split(STORY_KIND_PATH_SEPARATOR);
  return (groups == null ? void 0 : groups[(groups == null ? void 0 : groups.length) - 1]) || title;
}, Title3 = (props) => {
  let { children, of: of2 } = props;
  if ("of" in props && of2 === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let preparedMeta;
  try {
    preparedMeta = useOf(of2 || "meta", ["meta"]).preparedMeta;
  } catch (error) {
    if (children && error instanceof Error && !error.message.includes("did you forget to use <Meta of={} />?")) throw error;
  }
  let content = children || extractTitle((preparedMeta == null ? void 0 : preparedMeta.title) || "");
  return content ? e.createElement(Title, { className: "sbdocs-title sb-unstyled" }, content) : null;
};
var DocsPage = () => {
  let resolvedOf = useOf("meta", ["meta"]), { stories } = resolvedOf.csfFile, isSingleStory = Object.keys(stories).length === 1;
  return e.createElement(e.Fragment, null, e.createElement(Title3, null), e.createElement(Subtitle2, null), e.createElement(DescriptionContainer, { of: "meta" }), isSingleStory ? e.createElement(DescriptionContainer, { of: "story" }) : null, e.createElement(Primary, null), e.createElement(Controls3, null), isSingleStory ? null : e.createElement(Stories, null));
};
function Docs({ context, docsParameter }) {
  let Container2 = docsParameter.container || DocsContainer, Page = docsParameter.page || DocsPage;
  return e.createElement(Container2, { context, theme: docsParameter.theme }, e.createElement(Page, null));
}
var Meta = ({ of: of2 }) => {
  let context = reactExports.useContext(DocsContext);
  of2 && context.referenceMeta(of2, true);
  try {
    let primary = context.storyById();
    return e.createElement(Anchor, { storyId: primary.id });
  } catch {
    return null;
  }
};
export {
  ArgTypes as A,
  Canvas as C,
  Docs as D,
  HeadersMdx as H,
  Meta as M,
  Story2 as S,
  __toESM as _,
  Controls3 as a,
  d7 as b,
  ci as c,
  debounce2 as d,
  MarkupIcon as e,
  __commonJS as f,
  getControlId as g,
  AnchorMdx as h,
  CodeOrSourceMdx as i,
  u6 as u,
  x6 as x
};
