const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Color-AVL7NMMY-ClMqFqbi.js","./iframe-DGcxMoyJ.js","./preload-helper-CQrtv1eE.js","./iframe-D3ZGZbVH.css","./jsx-runtime-OvI7NoMr.js","./index-DtiUNGrX.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value2) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value: value2 }) : obj[key] = value2;
var __publicField = (obj, key, value2) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value2);
var _a, _b, _c, _d2;
import { _ as __vitePreload } from "./preload-helper-CQrtv1eE.js";
import { e, x as xr$3, r as reactExports, y as yr$3, h as h$1, W as W$3, E as Ee$2, a as hf, f as fo$3, V as Ve$3, S as St$3, T as Tt$3, I as Ir$3, M as Me$4, p as pf, b as Tn$3, d as ha$1 } from "./iframe-DGcxMoyJ.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-OvI7NoMr.js";
import { P as Pg, r as reactDomExports } from "./index-DtiUNGrX.js";
var lr$1 = Object.defineProperty;
var i$1 = (e3, t3) => lr$1(e3, "name", { value: t3, configurable: true });
const { once: qs } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
const {
  FORCE_REMOUNT: ir$1,
  SET_CURRENT_STORY: Ks,
  STORY_RENDER_PHASE_CHANGED: Gs$1
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
}, mr$1 = Object.entries(fr$2);
function Ge$3(e3) {
  return String(e3);
}
i$1(Ge$3, "a");
Ge$3.open = "";
Ge$3.close = "";
function Ft$2(e3 = false) {
  let t3 = typeof process < "u" ? process : void 0, n3 = (t3 == null ? void 0 : t3.env) || {}, r3 = (t3 == null ? void 0 : t3.argv) || [];
  return !("NO_COLOR" in n3 || r3.includes("--no-color")) && ("FORCE_COLOR" in n3 || r3.includes("--color") || (t3 == null ? void 0 : t3.platform) === "win32" || e3 && n3.TERM !== "dumb" || "CI" in n3) || typeof window < "u" && !!window.chrome;
}
i$1(Ft$2, "C");
function jt$1(e3 = false) {
  let t3 = Ft$2(e3), n3 = /* @__PURE__ */ i$1((c4, a4, u2, m4) => {
    let p2 = "", l4 = 0;
    do
      p2 += c4.substring(l4, m4) + u2, l4 = m4 + a4.length, m4 = c4.indexOf(a4, l4);
    while (~m4);
    return p2 + c4.substring(l4);
  }, "i"), r3 = /* @__PURE__ */ i$1((c4, a4, u2 = c4) => {
    let m4 = /* @__PURE__ */ i$1((p2) => {
      let l4 = String(p2), b4 = l4.indexOf(a4, c4.length);
      return ~b4 ? c4 + n3(l4, a4, u2, b4) + a4 : c4 + l4 + a4;
    }, "o");
    return m4.open = c4, m4.close = a4, m4;
  }, "g"), o3 = {
    isColorSupported: t3
  }, s2 = /* @__PURE__ */ i$1((c4) => `\x1B[${c4}m`, "d");
  for (let [c4, a4] of mr$1)
    o3[c4] = t3 ? r3(
      s2(a4[0]),
      s2(a4[1]),
      a4[2]
    ) : Ge$3;
  return o3;
}
i$1(jt$1, "p");
var v$1 = jt$1();
function Xt$2(e3, t3) {
  return t3.forEach(function(n3) {
    n3 && typeof n3 != "string" && !Array.isArray(n3) && Object.keys(n3).forEach(function(r3) {
      if (r3 !== "default" && !(r3 in e3)) {
        var o3 = Object.getOwnPropertyDescriptor(n3, r3);
        Object.defineProperty(e3, r3, o3.get ? o3 : {
          enumerable: true,
          get: /* @__PURE__ */ i$1(function() {
            return n3[r3];
          }, "get")
        });
      }
    });
  }), Object.freeze(e3);
}
i$1(Xt$2, "_mergeNamespaces");
function pr$1(e3, t3) {
  let n3 = Object.keys(e3), r3 = t3 === null ? n3 : n3.sort(t3);
  if (Object.getOwnPropertySymbols)
    for (let o3 of Object.getOwnPropertySymbols(e3))
      Object.getOwnPropertyDescriptor(e3, o3).enumerable && r3.push(o3);
  return r3;
}
i$1(pr$1, "getKeysOfEnumerableProperties");
function Ee$1(e3, t3, n3, r3, o3, s2, c4 = ": ") {
  let a4 = "", u2 = 0, m4 = e3.next();
  if (!m4.done) {
    a4 += t3.spacingOuter;
    let p2 = n3 + t3.indent;
    for (; !m4.done; ) {
      if (a4 += p2, u2++ === t3.maxWidth) {
        a4 += "…";
        break;
      }
      let l4 = s2(m4.value[0], t3, p2, r3, o3), b4 = s2(m4.value[1], t3, p2, r3, o3);
      a4 += l4 + c4 + b4, m4 = e3.next(), m4.done ? t3.min || (a4 += ",") : a4 += `,${t3.spacingInner}`;
    }
    a4 += t3.spacingOuter + n3;
  }
  return a4;
}
i$1(Ee$1, "printIteratorEntries");
function Qe$3(e3, t3, n3, r3, o3, s2) {
  let c4 = "", a4 = 0, u2 = e3.next();
  if (!u2.done) {
    c4 += t3.spacingOuter;
    let m4 = n3 + t3.indent;
    for (; !u2.done; ) {
      if (c4 += m4, a4++ === t3.maxWidth) {
        c4 += "…";
        break;
      }
      c4 += s2(u2.value, t3, m4, r3, o3), u2 = e3.next(), u2.done ? t3.min || (c4 += ",") : c4 += `,${t3.spacingInner}`;
    }
    c4 += t3.spacingOuter + n3;
  }
  return c4;
}
i$1(Qe$3, "printIteratorValues");
function Ae$2(e3, t3, n3, r3, o3, s2) {
  let c4 = "";
  e3 = e3 instanceof ArrayBuffer ? new DataView(e3) : e3;
  let a4 = /* @__PURE__ */ i$1((m4) => m4 instanceof DataView, "isDataView"), u2 = a4(e3) ? e3.byteLength : e3.length;
  if (u2 > 0) {
    c4 += t3.spacingOuter;
    let m4 = n3 + t3.indent;
    for (let p2 = 0; p2 < u2; p2++) {
      if (c4 += m4, p2 === t3.maxWidth) {
        c4 += "…";
        break;
      }
      (a4(e3) || p2 in e3) && (c4 += s2(a4(e3) ? e3.getInt8(p2) : e3[p2], t3, m4, r3, o3)), p2 < u2 - 1 ? c4 += `,${t3.spacingInner}` : t3.min || (c4 += ",");
    }
    c4 += t3.spacingOuter + n3;
  }
  return c4;
}
i$1(Ae$2, "printListItems");
function ve$2(e3, t3, n3, r3, o3, s2) {
  let c4 = "", a4 = pr$1(e3, t3.compareKeys);
  if (a4.length > 0) {
    c4 += t3.spacingOuter;
    let u2 = n3 + t3.indent;
    for (let m4 = 0; m4 < a4.length; m4++) {
      let p2 = a4[m4], l4 = s2(p2, t3, u2, r3, o3), b4 = s2(e3[p2], t3, u2, r3, o3);
      c4 += `${u2 + l4}: ${b4}`, m4 < a4.length - 1 ? c4 += `,${t3.spacingInner}` : t3.min || (c4 += ",");
    }
    c4 += t3.spacingOuter + n3;
  }
  return c4;
}
i$1(ve$2, "printObjectProperties");
var gr$2 = typeof Symbol == "function" && Symbol.for ? Symbol.for("jest.asymmetricMatcher") : 1267621, we$2 = " ", hr$1 = /* @__PURE__ */ i$1((e3, t3, n3, r3, o3, s2) => {
  let c4 = e3.toString();
  if (c4 === "ArrayContaining" || c4 === "ArrayNotContaining")
    return ++r3 > t3.maxDepth ? `[${c4}]` : `${c4 + we$2}[${Ae$2(e3.sample, t3, n3, r3, o3, s2)}]`;
  if (c4 === "ObjectContaining" || c4 === "ObjectNotContaining")
    return ++r3 > t3.maxDepth ? `[${c4}]` : `${c4 + we$2}{${ve$2(e3.sample, t3, n3, r3, o3, s2)}}`;
  if (c4 === "StringMatching" || c4 === "StringNotMatching" || c4 === "StringContaining" || c4 === "StringNotContaining")
    return c4 + we$2 + s2(e3.sample, t3, n3, r3, o3);
  if (typeof e3.toAsymmetricMatcher != "function")
    throw new TypeError(`Asymmetric matcher ${e3.constructor.name} does not implement toAsymmetricMatcher()`);
  return e3.toAsymmetricMatcher();
}, "serialize$5"), dr$2 = /* @__PURE__ */ i$1((e3) => e3 && e3.$$typeof === gr$2, "test$5"), yr$2 = {
  serialize: hr$1,
  test: dr$2
}, br$2 = " ", Zt$1 = /* @__PURE__ */ new Set(["DOMStringMap", "NamedNodeMap"]), Sr$1 = /^(?:HTML\w*Collection|NodeList)$/;
function Er$2(e3) {
  return Zt$1.has(e3) || Sr$1.test(e3);
}
i$1(Er$2, "testName");
var _r$2 = /* @__PURE__ */ i$1((e3) => e3 && e3.constructor && !!e3.constructor.name && Er$2(e3.constructor.name), "test$4");
function Tr$1(e3) {
  return e3.constructor.name === "NamedNodeMap";
}
i$1(Tr$1, "isNamedNodeMap");
var Cr$2 = /* @__PURE__ */ i$1((e3, t3, n3, r3, o3, s2) => {
  let c4 = e3.constructor.name;
  return ++r3 > t3.maxDepth ? `[${c4}]` : (t3.min ? "" : c4 + br$2) + (Zt$1.has(c4) ? `{${ve$2(Tr$1(e3) ? [...e3].reduce(
    (a4, u2) => (a4[u2.name] = u2.value, a4),
    {}
  ) : { ...e3 }, t3, n3, r3, o3, s2)}}` : `[${Ae$2([...e3], t3, n3, r3, o3, s2)}]`);
}, "serialize$4"), Or$2 = {
  serialize: Cr$2,
  test: _r$2
};
function Qt$2(e3) {
  return e3.replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
i$1(Qt$2, "escapeHTML");
function et$2(e3, t3, n3, r3, o3, s2, c4) {
  let a4 = r3 + n3.indent, u2 = n3.colors;
  return e3.map((m4) => {
    let p2 = t3[m4], l4 = c4(p2, n3, a4, o3, s2);
    return typeof p2 != "string" && (l4.includes(`
`) && (l4 = n3.spacingOuter + a4 + l4 + n3.spacingOuter + r3), l4 = `{${l4}}`), `${n3.spacingInner + r3 + u2.prop.open + m4 + u2.prop.close}=${u2.value.open}${l4}${u2.value.close}`;
  }).join("");
}
i$1(et$2, "printProps");
function tt$2(e3, t3, n3, r3, o3, s2) {
  return e3.map((c4) => t3.spacingOuter + n3 + (typeof c4 == "string" ? vt$2(c4, t3) : s2(c4, t3, n3, r3, o3))).join("");
}
i$1(tt$2, "printChildren");
function vt$2(e3, t3) {
  let n3 = t3.colors.content;
  return n3.open + Qt$2(e3) + n3.close;
}
i$1(vt$2, "printText");
function $r$2(e3, t3) {
  let n3 = t3.colors.comment;
  return `${n3.open}<!--${Qt$2(e3)}-->${n3.close}`;
}
i$1($r$2, "printComment");
function nt$1(e3, t3, n3, r3, o3) {
  let s2 = r3.colors.tag;
  return `${s2.open}<${e3}${t3 && s2.close + t3 + r3.spacingOuter + o3 + s2.open}${n3 ? `>${s2.close}${n3}${r3.spacingOuter}${o3}${s2.open}</${e3}` : `${t3 && !r3.min ? "" : " "}/`}>${s2.close}`;
}
i$1(nt$1, "printElement");
function rt$2(e3, t3) {
  let n3 = t3.colors.tag;
  return `${n3.open}<${e3}${n3.close} …${n3.open} />${n3.close}`;
}
i$1(rt$2, "printElementAsLeaf");
var wr$1 = 1, en$2 = 3, tn$1 = 8, nn$1 = 11, Rr$1 = /^(?:(?:HTML|SVG)\w*)?Element$/;
function Ar$2(e3) {
  try {
    return typeof e3.hasAttribute == "function" && e3.hasAttribute("is");
  } catch {
    return false;
  }
}
i$1(Ar$2, "testHasAttribute");
function Pr$1(e3) {
  let t3 = e3.constructor.name, { nodeType: n3, tagName: r3 } = e3, o3 = typeof r3 == "string" && r3.includes("-") || Ar$2(e3);
  return n3 === wr$1 && (Rr$1.test(t3) || o3) || n3 === en$2 && t3 === "Text" || n3 === tn$1 && t3 === "Comment" || n3 === nn$1 && t3 === "DocumentFragment";
}
i$1(Pr$1, "testNode");
var Nr$2 = /* @__PURE__ */ i$1((e3) => {
  var t3;
  return (e3 == null || (t3 = e3.constructor) === null || t3 === void 0 ? void 0 : t3.name) && Pr$1(e3);
}, "test$3");
function Ir$2(e3) {
  return e3.nodeType === en$2;
}
i$1(Ir$2, "nodeIsText");
function Mr$1(e3) {
  return e3.nodeType === tn$1;
}
i$1(Mr$1, "nodeIsComment");
function He$3(e3) {
  return e3.nodeType === nn$1;
}
i$1(He$3, "nodeIsFragment");
var Lr$1 = /* @__PURE__ */ i$1((e3, t3, n3, r3, o3, s2) => {
  if (Ir$2(e3))
    return vt$2(e3.data, t3);
  if (Mr$1(e3))
    return $r$2(e3.data, t3);
  let c4 = He$3(e3) ? "DocumentFragment" : e3.tagName.toLowerCase();
  return ++r3 > t3.maxDepth ? rt$2(c4, t3) : nt$1(c4, et$2(He$3(e3) ? [] : Array.from(e3.attributes, (a4) => a4.name).sort(), He$3(e3) ? {} : [...e3.attributes].reduce((a4, u2) => (a4[u2.name] = u2.value, a4), {}), t3, n3 + t3.indent, r3, o3, s2), tt$2(Array.prototype.slice.call(e3.childNodes || e3.children), t3, n3 + t3.indent, r3, o3, s2), t3, n3);
}, "serialize$3"), xr$2 = {
  serialize: Lr$1,
  test: Nr$2
}, Dr$2 = "@@__IMMUTABLE_ITERABLE__@@", Fr$2 = "@@__IMMUTABLE_LIST__@@", jr$1 = "@@__IMMUTABLE_KEYED__@@", kr$2 = "@@__IMMUTABLE_MAP__@@", kt$1 = "@@__IMMUTABLE_ORDERED__@@", Br$2 = "@@__IMMUTABLE_RECORD__@@", zr$1 = "@@__IMMUTABLE_SEQ__@@", Yr$1 = "@@__IMMUTABLE_SET__@@", Ur$1 = "@@__IMMUTABLE_STACK__@@", de$3 = /* @__PURE__ */ i$1((e3) => `Immutable.${e3}`, "getImmutableName"), Ne$3 = /* @__PURE__ */ i$1((e3) => `[${e3}]`, "printAsLeaf"), Se$2 = " ", Bt$1 = "…";
function Wr$1(e3, t3, n3, r3, o3, s2, c4) {
  return ++r3 > t3.maxDepth ? Ne$3(de$3(c4)) : `${de$3(c4) + Se$2}{${Ee$1(e3.entries(), t3, n3, r3, o3, s2)}}`;
}
i$1(Wr$1, "printImmutableEntries");
function Vr$2(e3) {
  let t3 = 0;
  return { next() {
    if (t3 < e3._keys.length) {
      let n3 = e3._keys[t3++];
      return {
        done: false,
        value: [n3, e3.get(n3)]
      };
    }
    return {
      done: true,
      value: void 0
    };
  } };
}
i$1(Vr$2, "getRecordEntries");
function qr$1(e3, t3, n3, r3, o3, s2) {
  let c4 = de$3(e3._name || "Record");
  return ++r3 > t3.maxDepth ? Ne$3(c4) : `${c4 + Se$2}{${Ee$1(Vr$2(e3), t3, n3, r3, o3, s2)}}`;
}
i$1(qr$1, "printImmutableRecord");
function Kr$2(e3, t3, n3, r3, o3, s2) {
  let c4 = de$3("Seq");
  return ++r3 > t3.maxDepth ? Ne$3(c4) : e3[jr$1] ? `${c4 + Se$2}{${e3._iter || e3._object ? Ee$1(e3.entries(), t3, n3, r3, o3, s2) : Bt$1}}` : `${c4 + Se$2}[${e3._iter || e3._array || e3._collection || e3._iterable ? Qe$3(e3.values(), t3, n3, r3, o3, s2) : Bt$1}]`;
}
i$1(Kr$2, "printImmutableSeq");
function Je$2(e3, t3, n3, r3, o3, s2, c4) {
  return ++r3 > t3.maxDepth ? Ne$3(de$3(c4)) : `${de$3(c4) + Se$2}[${Qe$3(e3.values(), t3, n3, r3, o3, s2)}]`;
}
i$1(Je$2, "printImmutableValues");
var Gr$1 = /* @__PURE__ */ i$1((e3, t3, n3, r3, o3, s2) => e3[kr$2] ? Wr$1(e3, t3, n3, r3, o3, s2, e3[kt$1] ? "OrderedMap" : "Map") : e3[Fr$2] ? Je$2(e3, t3, n3, r3, o3, s2, "List") : e3[Yr$1] ? Je$2(e3, t3, n3, r3, o3, s2, e3[kt$1] ? "OrderedSet" : "Set") : e3[Ur$1] ? Je$2(e3, t3, n3, r3, o3, s2, "Stack") : e3[zr$1] ? Kr$2(e3, t3, n3, r3, o3, s2) : qr$1(e3, t3, n3, r3, o3, s2), "serialize$2"), Hr$2 = /* @__PURE__ */ i$1((e3) => e3 && (e3[Dr$2] === true || e3[Br$2] === true), "test$2"), Jr$2 = {
  serialize: Gr$1,
  test: Hr$2
};
function rn$1(e3) {
  return e3 && e3.__esModule && Object.prototype.hasOwnProperty.call(e3, "default") ? e3.default : e3;
}
i$1(rn$1, "getDefaultExportFromCjs");
var Xe$3 = { exports: {} };
var A$1 = {};
var zt$2;
function Xr$2() {
  return zt$2 || (zt$2 = 1, function() {
    function e3(f2) {
      if (typeof f2 == "object" && f2 !== null) {
        var d2 = f2.$$typeof;
        switch (d2) {
          case t3:
            switch (f2 = f2.type, f2) {
              case r3:
              case s2:
              case o3:
              case m4:
              case p2:
              case g4:
                return f2;
              default:
                switch (f2 = f2 && f2.$$typeof, f2) {
                  case a4:
                  case u2:
                  case b4:
                  case l4:
                    return f2;
                  case c4:
                    return f2;
                  default:
                    return d2;
                }
            }
          case n3:
            return d2;
        }
      }
    }
    i$1(e3, "typeOf");
    var t3 = Symbol.for("react.transitional.element"), n3 = Symbol.for("react.portal"), r3 = Symbol.for("react.fragment"), o3 = Symbol.for("react.strict_mode"), s2 = Symbol.for("react.profiler"), c4 = Symbol.for("react.consumer"), a4 = Symbol.for("react.context"), u2 = Symbol.for("react.forward_ref"), m4 = Symbol.for("react.suspense"), p2 = Symbol.for("react.suspense_list"), l4 = Symbol.for("react.memo"), b4 = Symbol.for("react.lazy"), g4 = Symbol.for("react.view_transition"), h4 = Symbol.for("react.client.reference");
    A$1.ContextConsumer = c4, A$1.ContextProvider = a4, A$1.Element = t3, A$1.ForwardRef = u2, A$1.Fragment = r3, A$1.Lazy = b4, A$1.Memo = l4, A$1.Portal = n3, A$1.Profiler = s2, A$1.StrictMode = o3, A$1.Suspense = m4, A$1.SuspenseList = p2, A$1.isContextConsumer = function(f2) {
      return e3(f2) === c4;
    }, A$1.isContextProvider = function(f2) {
      return e3(f2) === a4;
    }, A$1.isElement = function(f2) {
      return typeof f2 == "object" && f2 !== null && f2.$$typeof === t3;
    }, A$1.isForwardRef = function(f2) {
      return e3(f2) === u2;
    }, A$1.isFragment = function(f2) {
      return e3(f2) === r3;
    }, A$1.isLazy = function(f2) {
      return e3(f2) === b4;
    }, A$1.isMemo = function(f2) {
      return e3(f2) === l4;
    }, A$1.isPortal = function(f2) {
      return e3(f2) === n3;
    }, A$1.isProfiler = function(f2) {
      return e3(f2) === s2;
    }, A$1.isStrictMode = function(f2) {
      return e3(f2) === o3;
    }, A$1.isSuspense = function(f2) {
      return e3(f2) === m4;
    }, A$1.isSuspenseList = function(f2) {
      return e3(f2) === p2;
    }, A$1.isValidElementType = function(f2) {
      return typeof f2 == "string" || typeof f2 == "function" || f2 === r3 || f2 === s2 || f2 === o3 || f2 === m4 || f2 === p2 || typeof f2 == "object" && f2 !== null && (f2.$$typeof === b4 || f2.$$typeof === l4 || f2.$$typeof === a4 || f2.$$typeof === c4 || f2.$$typeof === u2 || f2.$$typeof === h4 || f2.getModuleId !== void 0);
    }, A$1.typeOf = e3;
  }()), A$1;
}
i$1(Xr$2, "requireReactIs_development$1");
var Yt$2;
function Zr$2() {
  return Yt$2 || (Yt$2 = 1, Xe$3.exports = Xr$2()), Xe$3.exports;
}
i$1(Zr$2, "requireReactIs$1");
var on$1 = Zr$2(), Qr$2 = /* @__PURE__ */ rn$1(on$1), vr$2 = /* @__PURE__ */ Xt$2({
  __proto__: null,
  default: Qr$2
}, [on$1]), Ze$3 = { exports: {} };
var w$1 = {};
var Ut$2;
function eo$2() {
  return Ut$2 || (Ut$2 = 1, function() {
    var e3 = Symbol.for("react.element"), t3 = Symbol.for("react.portal"), n3 = Symbol.for("react.fragment"), r3 = Symbol.for("react.strict_mode"), o3 = Symbol.for("react.profiler"), s2 = Symbol.for("react.provider"), c4 = Symbol.for("react.context"), a4 = Symbol.for("react.server_context"), u2 = Symbol.for("react.forward_ref"), m4 = Symbol.for("react.suspense"), p2 = Symbol.for("react.suspense_list"), l4 = Symbol.for("react.memo"), b4 = Symbol.for("react.lazy"), g4 = Symbol.for("react.offscreen"), h4 = false, f2 = false, d2 = false, S3 = false, _2 = false, O2;
    O2 = Symbol.for("react.module.reference");
    function y4(C3) {
      return !!(typeof C3 == "string" || typeof C3 == "function" || C3 === n3 || C3 === o3 || _2 || C3 === r3 || C3 === m4 || C3 === p2 || S3 || C3 === g4 || h4 || f2 || d2 || typeof C3 == "object" && C3 !== null && (C3.$$typeof === b4 || C3.$$typeof === l4 || C3.$$typeof === s2 || C3.$$typeof === c4 || C3.$$typeof === u2 || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      C3.$$typeof === O2 || C3.getModuleId !== void 0));
    }
    i$1(y4, "isValidElementType");
    function E3(C3) {
      if (typeof C3 == "object" && C3 !== null) {
        var Ke2 = C3.$$typeof;
        switch (Ke2) {
          case e3:
            var $e2 = C3.type;
            switch ($e2) {
              case n3:
              case o3:
              case r3:
              case m4:
              case p2:
                return $e2;
              default:
                var Dt2 = $e2 && $e2.$$typeof;
                switch (Dt2) {
                  case a4:
                  case c4:
                  case u2:
                  case b4:
                  case l4:
                  case s2:
                    return Dt2;
                  default:
                    return Ke2;
                }
            }
          case t3:
            return Ke2;
        }
      }
    }
    i$1(E3, "typeOf");
    var $2 = c4, T2 = s2, R4 = e3, K2 = u2, Q2 = n3, I2 = b4, k2 = l4, G2 = t3, Y2 = o3, N2 = r3, L2 = m4, x4 = p2, H2 = false, F2 = false;
    function W2(C3) {
      return H2 || (H2 = true, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), false;
    }
    i$1(W2, "isAsyncMode");
    function re2(C3) {
      return F2 || (F2 = true, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), false;
    }
    i$1(re2, "isConcurrentMode");
    function V2(C3) {
      return E3(C3) === c4;
    }
    i$1(V2, "isContextConsumer");
    function q2(C3) {
      return E3(C3) === s2;
    }
    i$1(q2, "isContextProvider");
    function se2(C3) {
      return typeof C3 == "object" && C3 !== null && C3.$$typeof === e3;
    }
    i$1(se2, "isElement");
    function J2(C3) {
      return E3(C3) === u2;
    }
    i$1(J2, "isForwardRef");
    function U2(C3) {
      return E3(C3) === n3;
    }
    i$1(U2, "isFragment");
    function oe2(C3) {
      return E3(C3) === b4;
    }
    i$1(oe2, "isLazy");
    function he2(C3) {
      return E3(C3) === l4;
    }
    i$1(he2, "isMemo");
    function ue2(C3) {
      return E3(C3) === t3;
    }
    i$1(ue2, "isPortal");
    function be2(C3) {
      return E3(C3) === o3;
    }
    i$1(be2, "isProfiler");
    function Ce2(C3) {
      return E3(C3) === r3;
    }
    i$1(Ce2, "isStrictMode");
    function Oe2(C3) {
      return E3(C3) === m4;
    }
    i$1(Oe2, "isSuspense");
    function ar2(C3) {
      return E3(C3) === p2;
    }
    i$1(ar2, "isSuspenseList"), w$1.ContextConsumer = $2, w$1.ContextProvider = T2, w$1.Element = R4, w$1.ForwardRef = K2, w$1.Fragment = Q2, w$1.Lazy = I2, w$1.Memo = k2, w$1.Portal = G2, w$1.Profiler = Y2, w$1.StrictMode = N2, w$1.Suspense = L2, w$1.SuspenseList = x4, w$1.isAsyncMode = W2, w$1.isConcurrentMode = re2, w$1.isContextConsumer = V2, w$1.isContextProvider = q2, w$1.isElement = se2, w$1.isForwardRef = J2, w$1.isFragment = U2, w$1.isLazy = oe2, w$1.isMemo = he2, w$1.isPortal = ue2, w$1.isProfiler = be2, w$1.isStrictMode = Ce2, w$1.isSuspense = Oe2, w$1.isSuspenseList = ar2, w$1.isValidElementType = y4, w$1.typeOf = E3;
  }()), w$1;
}
i$1(eo$2, "requireReactIs_development");
var Wt$1;
function to$1() {
  return Wt$1 || (Wt$1 = 1, Ze$3.exports = eo$2()), Ze$3.exports;
}
i$1(to$1, "requireReactIs");
var sn$2 = to$1(), no$2 = /* @__PURE__ */ rn$1(sn$2), ro$2 = /* @__PURE__ */ Xt$2({
  __proto__: null,
  default: no$2
}, [sn$2]), oo$1 = [
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
], fe$3 = Object.fromEntries(oo$1.map((e3) => [e3, (t3) => ro$2[e3](t3) || vr$2[e3](t3)]));
function cn$1(e3, t3 = []) {
  if (Array.isArray(e3))
    for (let n3 of e3)
      cn$1(n3, t3);
  else e3 != null && e3 !== false && e3 !== "" && t3.push(e3);
  return t3;
}
i$1(cn$1, "getChildren");
function Vt$1(e3) {
  let t3 = e3.type;
  if (typeof t3 == "string")
    return t3;
  if (typeof t3 == "function")
    return t3.displayName || t3.name || "Unknown";
  if (fe$3.isFragment(e3))
    return "React.Fragment";
  if (fe$3.isSuspense(e3))
    return "React.Suspense";
  if (typeof t3 == "object" && t3 !== null) {
    if (fe$3.isContextProvider(e3))
      return "Context.Provider";
    if (fe$3.isContextConsumer(e3))
      return "Context.Consumer";
    if (fe$3.isForwardRef(e3)) {
      if (t3.displayName)
        return t3.displayName;
      let n3 = t3.render.displayName || t3.render.name || "";
      return n3 === "" ? "ForwardRef" : `ForwardRef(${n3})`;
    }
    if (fe$3.isMemo(e3)) {
      let n3 = t3.displayName || t3.type.displayName || t3.type.name || "";
      return n3 === "" ? "Memo" : `Memo(${n3})`;
    }
  }
  return "UNDEFINED";
}
i$1(Vt$1, "getType");
function so$1(e3) {
  let { props: t3 } = e3;
  return Object.keys(t3).filter((n3) => n3 !== "children" && t3[n3] !== void 0).sort();
}
i$1(so$1, "getPropKeys$1");
var io = /* @__PURE__ */ i$1((e3, t3, n3, r3, o3, s2) => ++r3 > t3.maxDepth ? rt$2(Vt$1(e3), t3) : nt$1(Vt$1(e3), et$2(so$1(e3), e3.props, t3, n3 + t3.indent, r3, o3, s2), tt$2(
  cn$1(e3.props.children),
  t3,
  n3 + t3.indent,
  r3,
  o3,
  s2
), t3, n3), "serialize$1"), co = /* @__PURE__ */ i$1((e3) => e3 != null && fe$3.isElement(e3), "test$1"), uo$2 = {
  serialize: io,
  test: co
}, ao$2 = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.test.json") : 245830487;
function lo$2(e3) {
  let { props: t3 } = e3;
  return t3 ? Object.keys(t3).filter((n3) => t3[n3] !== void 0).sort() : [];
}
i$1(lo$2, "getPropKeys");
var fo$2 = /* @__PURE__ */ i$1((e3, t3, n3, r3, o3, s2) => ++r3 > t3.maxDepth ? rt$2(e3.type, t3) : nt$1(e3.type, e3.props ? et$2(
  lo$2(e3),
  e3.props,
  t3,
  n3 + t3.indent,
  r3,
  o3,
  s2
) : "", e3.children ? tt$2(e3.children, t3, n3 + t3.indent, r3, o3, s2) : "", t3, n3), "serialize"), mo$1 = /* @__PURE__ */ i$1((e3) => e3 && e3.$$typeof === ao$2, "test"), po = {
  serialize: fo$2,
  test: mo$1
}, un$2 = Object.prototype.toString, go$1 = Date.prototype.toISOString, ho$2 = Error.prototype.toString, qt$2 = RegExp.prototype.toString;
function Re$3(e3) {
  return typeof e3.constructor == "function" && e3.constructor.name || "Object";
}
i$1(Re$3, "getConstructorName");
function yo$2(e3) {
  return typeof window < "u" && e3 === window;
}
i$1(yo$2, "isWindow");
var bo$2 = /^Symbol\((.*)\)(.*)$/, So$2 = /\n/g, st$1 = class st extends Error {
  constructor(t3, n3) {
    super(t3), this.stack = n3, this.name = this.constructor.name;
  }
};
i$1(st$1, "PrettyFormatPluginError");
var Pe$3 = st$1;
function Eo$2(e3) {
  return e3 === "[object Array]" || e3 === "[object ArrayBuffer]" || e3 === "[object DataView]" || e3 === "[object Float32Array]" || e3 === "[object Float64Array]" || e3 === "[object Int8Array]" || e3 === "[object Int16Array]" || e3 === "[object Int32Array]" || e3 === "[object Uint8Array]" || e3 === "[object Uint8ClampedArray]" || e3 === "[object Uint16Array]" || e3 === "[object Uint32Array]";
}
i$1(Eo$2, "isToStringedArrayType");
function _o$1(e3) {
  return Object.is(e3, -0) ? "-0" : String(e3);
}
i$1(_o$1, "printNumber");
function To$2(e3) {
  return `${e3}n`;
}
i$1(To$2, "printBigInt");
function Kt$2(e3, t3) {
  return t3 ? `[Function ${e3.name || "anonymous"}]` : "[Function]";
}
i$1(Kt$2, "printFunction");
function Gt$2(e3) {
  return String(e3).replace(bo$2, "Symbol($1)");
}
i$1(Gt$2, "printSymbol");
function Ht$1(e3) {
  return `[${ho$2.call(e3)}]`;
}
i$1(Ht$1, "printError");
function an$2(e3, t3, n3, r3) {
  if (e3 === true || e3 === false)
    return `${e3}`;
  if (e3 === void 0)
    return "undefined";
  if (e3 === null)
    return "null";
  let o3 = typeof e3;
  if (o3 === "number")
    return _o$1(e3);
  if (o3 === "bigint")
    return To$2(e3);
  if (o3 === "string")
    return r3 ? `"${e3.replaceAll(/"|\\/g, "\\$&")}"` : `"${e3}"`;
  if (o3 === "function")
    return Kt$2(e3, t3);
  if (o3 === "symbol")
    return Gt$2(e3);
  let s2 = un$2.call(e3);
  return s2 === "[object WeakMap]" ? "WeakMap {}" : s2 === "[object WeakSet]" ? "WeakSet {}" : s2 === "[object Function]" || s2 === "[object GeneratorFunction]" ? Kt$2(e3, t3) : s2 === "[object Symbol]" ? Gt$2(e3) : s2 === "[object Date]" ? Number.isNaN(+e3) ? "Date { NaN }" : go$1.call(e3) : s2 === "[object Error]" ? Ht$1(e3) : s2 === "[object RegExp]" ? n3 ? qt$2.call(e3).replaceAll(/[$()*+.?[\\\]^{|}]/g, "\\$&") : qt$2.call(e3) : e3 instanceof Error ? Ht$1(e3) : null;
}
i$1(an$2, "printBasicValue");
function ln$2(e3, t3, n3, r3, o3, s2) {
  if (o3.includes(e3))
    return "[Circular]";
  o3 = [...o3], o3.push(e3);
  let c4 = ++r3 > t3.maxDepth, a4 = t3.min;
  if (t3.callToJSON && !c4 && e3.toJSON && typeof e3.toJSON == "function" && !s2)
    return ae$3(e3.toJSON(), t3, n3, r3, o3, true);
  let u2 = un$2.call(e3);
  return u2 === "[object Arguments]" ? c4 ? "[Arguments]" : `${a4 ? "" : "Arguments "}[${Ae$2(e3, t3, n3, r3, o3, ae$3)}]` : Eo$2(u2) ? c4 ? `[${e3.constructor.name}]` : `${a4 || !t3.printBasicPrototype && e3.constructor.name === "Array" ? "" : `${e3.constructor.name} `}[${Ae$2(e3, t3, n3, r3, o3, ae$3)}]` : u2 === "[object Map]" ? c4 ? "[Map]" : `Map {${Ee$1(e3.entries(), t3, n3, r3, o3, ae$3, " => ")}}` : u2 === "[object Set]" ? c4 ? "[Set]" : `Set {${Qe$3(
    e3.values(),
    t3,
    n3,
    r3,
    o3,
    ae$3
  )}}` : c4 || yo$2(e3) ? `[${Re$3(e3)}]` : `${a4 || !t3.printBasicPrototype && Re$3(e3) === "Object" ? "" : `${Re$3(e3)} `}{${ve$2(
    e3,
    t3,
    n3,
    r3,
    o3,
    ae$3
  )}}`;
}
i$1(ln$2, "printComplexValue");
var Co$1 = {
  test: /* @__PURE__ */ i$1((e3) => e3 && e3 instanceof Error, "test"),
  serialize(e3, t3, n3, r3, o3, s2) {
    if (o3.includes(e3))
      return "[Circular]";
    o3 = [...o3, e3];
    let c4 = ++r3 > t3.maxDepth, { message: a4, cause: u2, ...m4 } = e3, p2 = {
      message: a4,
      ...typeof u2 < "u" ? { cause: u2 } : {},
      ...e3 instanceof AggregateError ? { errors: e3.errors } : {},
      ...m4
    }, l4 = e3.name !== "Error" ? e3.name : Re$3(e3);
    return c4 ? `[${l4}]` : `${l4} {${Ee$1(Object.entries(p2).values(), t3, n3, r3, o3, s2)}}`;
  }
};
function Oo$2(e3) {
  return e3.serialize != null;
}
i$1(Oo$2, "isNewPlugin");
function fn$2(e3, t3, n3, r3, o3, s2) {
  let c4;
  try {
    c4 = Oo$2(e3) ? e3.serialize(t3, n3, r3, o3, s2, ae$3) : e3.print(t3, (a4) => ae$3(a4, n3, r3, o3, s2), (a4) => {
      let u2 = r3 + n3.indent;
      return u2 + a4.replaceAll(So$2, `
${u2}`);
    }, {
      edgeSpacing: n3.spacingOuter,
      min: n3.min,
      spacing: n3.spacingInner
    }, n3.colors);
  } catch (a4) {
    throw new Pe$3(a4.message, a4.stack);
  }
  if (typeof c4 != "string")
    throw new TypeError(`pretty-format: Plugin must return type "string" but instead returned "${typeof c4}".`);
  return c4;
}
i$1(fn$2, "printPlugin");
function mn$2(e3, t3) {
  for (let n3 of e3)
    try {
      if (n3.test(t3))
        return n3;
    } catch (r3) {
      throw new Pe$3(r3.message, r3.stack);
    }
  return null;
}
i$1(mn$2, "findPlugin");
function ae$3(e3, t3, n3, r3, o3, s2) {
  let c4 = mn$2(t3.plugins, e3);
  if (c4 !== null)
    return fn$2(c4, e3, t3, n3, r3, o3);
  let a4 = an$2(e3, t3.printFunctionName, t3.escapeRegex, t3.escapeString);
  return a4 !== null ? a4 : ln$2(e3, t3, n3, r3, o3, s2);
}
i$1(ae$3, "printer");
var ot$1 = {
  comment: "gray",
  content: "reset",
  prop: "yellow",
  tag: "cyan",
  value: "green"
}, pn$2 = Object.keys(ot$1), ee$2 = {
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
  theme: ot$1
};
function $o$2(e3) {
  for (let t3 of Object.keys(e3))
    if (!Object.prototype.hasOwnProperty.call(ee$2, t3))
      throw new Error(`pretty-format: Unknown option "${t3}".`);
  if (e3.min && e3.indent !== void 0 && e3.indent !== 0)
    throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
}
i$1($o$2, "validateOptions");
function wo$2() {
  return pn$2.reduce((e3, t3) => {
    let n3 = ot$1[t3], r3 = n3 && v$1[n3];
    if (r3 && typeof r3.close == "string" && typeof r3.open == "string")
      e3[t3] = r3;
    else
      throw new Error(`pretty-format: Option "theme" has a key "${t3}" whose value "${n3}" is undefined in ansi-styles.`);
    return e3;
  }, /* @__PURE__ */ Object.create(null));
}
i$1(wo$2, "getColorsHighlight");
function Ro$2() {
  return pn$2.reduce((e3, t3) => (e3[t3] = {
    close: "",
    open: ""
  }, e3), /* @__PURE__ */ Object.create(null));
}
i$1(Ro$2, "getColorsEmpty");
function gn$1(e3) {
  return (e3 == null ? void 0 : e3.printFunctionName) ?? ee$2.printFunctionName;
}
i$1(gn$1, "getPrintFunctionName");
function hn$2(e3) {
  return (e3 == null ? void 0 : e3.escapeRegex) ?? ee$2.escapeRegex;
}
i$1(hn$2, "getEscapeRegex");
function dn$2(e3) {
  return (e3 == null ? void 0 : e3.escapeString) ?? ee$2.escapeString;
}
i$1(dn$2, "getEscapeString");
function Jt$2(e3) {
  return {
    callToJSON: (e3 == null ? void 0 : e3.callToJSON) ?? ee$2.callToJSON,
    colors: (e3 == null ? void 0 : e3.highlight) ? wo$2() : Ro$2(),
    compareKeys: typeof (e3 == null ? void 0 : e3.compareKeys) == "function" || (e3 == null ? void 0 : e3.compareKeys) === null ? e3.compareKeys : ee$2.compareKeys,
    escapeRegex: hn$2(e3),
    escapeString: dn$2(e3),
    indent: (e3 == null ? void 0 : e3.min) ? "" : Ao$2((e3 == null ? void 0 : e3.indent) ?? ee$2.indent),
    maxDepth: (e3 == null ? void 0 : e3.maxDepth) ?? ee$2.maxDepth,
    maxWidth: (e3 == null ? void 0 : e3.maxWidth) ?? ee$2.maxWidth,
    min: (e3 == null ? void 0 : e3.min) ?? ee$2.min,
    plugins: (e3 == null ? void 0 : e3.plugins) ?? ee$2.plugins,
    printBasicPrototype: (e3 == null ? void 0 : e3.printBasicPrototype) ?? true,
    printFunctionName: gn$1(e3),
    spacingInner: (e3 == null ? void 0 : e3.min) ? " " : `
`,
    spacingOuter: (e3 == null ? void 0 : e3.min) ? "" : `
`
  };
}
i$1(Jt$2, "getConfig");
function Ao$2(e3) {
  return Array.from({ length: e3 + 1 }).join(" ");
}
i$1(Ao$2, "createIndent");
function X$1(e3, t3) {
  if (t3 && ($o$2(t3), t3.plugins)) {
    let r3 = mn$2(t3.plugins, e3);
    if (r3 !== null)
      return fn$2(r3, e3, Jt$2(t3), "", 0, []);
  }
  let n3 = an$2(e3, gn$1(t3), hn$2(t3), dn$2(t3));
  return n3 !== null ? n3 : ln$2(e3, Jt$2(t3), "", 0, []);
}
i$1(X$1, "format");
var _e$3 = {
  AsymmetricMatcher: yr$2,
  DOMCollection: Or$2,
  DOMElement: xr$2,
  Immutable: Jr$2,
  ReactElement: uo$2,
  ReactTestComponent: po,
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
function No$2(e3, t3) {
  let n3 = yn$1[Po$2[t3]] || yn$1[t3] || "";
  return n3 ? `\x1B[${n3[0]}m${String(e3)}\x1B[${n3[1]}m` : String(e3);
}
i$1(No$2, "colorise");
function bn$2({
  showHidden: e3 = false,
  depth: t3 = 2,
  colors: n3 = false,
  customInspect: r3 = true,
  showProxy: o3 = false,
  maxArrayLength: s2 = 1 / 0,
  breakLength: c4 = 1 / 0,
  seen: a4 = [],
  // eslint-disable-next-line no-shadow
  truncate: u2 = 1 / 0,
  stylize: m4 = String
} = {}, p2) {
  let l4 = {
    showHidden: !!e3,
    depth: Number(t3),
    colors: !!n3,
    customInspect: !!r3,
    showProxy: !!o3,
    maxArrayLength: Number(s2),
    breakLength: Number(c4),
    truncate: Number(u2),
    seen: a4,
    inspect: p2,
    stylize: m4
  };
  return l4.colors && (l4.stylize = No$2), l4;
}
i$1(bn$2, "normaliseOptions");
function Io$2(e3) {
  return e3 >= "\uD800" && e3 <= "\uDBFF";
}
i$1(Io$2, "isHighSurrogate");
function B$2(e3, t3, n3 = ie$2) {
  e3 = String(e3);
  let r3 = n3.length, o3 = e3.length;
  if (r3 > t3 && o3 > r3)
    return n3;
  if (o3 > t3 && o3 > r3) {
    let s2 = t3 - r3;
    return s2 > 0 && Io$2(e3[s2 - 1]) && (s2 = s2 - 1), `${e3.slice(0, s2)}${n3}`;
  }
  return e3;
}
i$1(B$2, "truncate");
function D$2(e3, t3, n3, r3 = ", ") {
  n3 = n3 || t3.inspect;
  let o3 = e3.length;
  if (o3 === 0)
    return "";
  let s2 = t3.truncate, c4 = "", a4 = "", u2 = "";
  for (let m4 = 0; m4 < o3; m4 += 1) {
    let p2 = m4 + 1 === e3.length, l4 = m4 + 2 === e3.length;
    u2 = `${ie$2}(${e3.length - m4})`;
    let b4 = e3[m4];
    t3.truncate = s2 - c4.length - (p2 ? 0 : r3.length);
    let g4 = a4 || n3(b4, t3) + (p2 ? "" : r3), h4 = c4.length + g4.length, f2 = h4 + u2.length;
    if (p2 && h4 > s2 && c4.length + u2.length <= s2 || !p2 && !l4 && f2 > s2 || (a4 = p2 ? "" : n3(e3[m4 + 1], t3) + (l4 ? "" : r3), !p2 && l4 && f2 > s2 && h4 + a4.length > s2))
      break;
    if (c4 += g4, !p2 && !l4 && h4 + a4.length >= s2) {
      u2 = `${ie$2}(${e3.length - m4 - 1})`;
      break;
    }
    u2 = "";
  }
  return `${c4}${u2}`;
}
i$1(D$2, "inspectList");
function Mo$2(e3) {
  return e3.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/) ? e3 : JSON.stringify(e3).replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
}
i$1(Mo$2, "quoteComplexKey");
function ce$3([e3, t3], n3) {
  return n3.truncate -= 2, typeof e3 == "string" ? e3 = Mo$2(e3) : typeof e3 != "number" && (e3 = `[${n3.inspect(e3, n3)}]`), n3.truncate -= e3.length, t3 = n3.inspect(t3, n3), `${e3}: ${t3}`;
}
i$1(ce$3, "inspectProperty");
function it$2(e3, t3) {
  let n3 = Object.keys(e3).slice(e3.length);
  if (!e3.length && !n3.length)
    return "[]";
  t3.truncate -= 4;
  let r3 = D$2(e3, t3);
  t3.truncate -= r3.length;
  let o3 = "";
  return n3.length && (o3 = D$2(n3.map((s2) => [s2, e3[s2]]), t3, ce$3)), `[ ${r3}${o3 ? `, ${o3}` : ""} ]`;
}
i$1(it$2, "inspectArray");
var Lo = /* @__PURE__ */ i$1((e3) => typeof Buffer == "function" && e3 instanceof Buffer ? "Buffer" : e3[Symbol.toStringTag] ? e3[Symbol.toStringTag] : e3.constructor.name, "getArrayName");
function te$3(e3, t3) {
  let n3 = Lo(e3);
  t3.truncate -= n3.length + 4;
  let r3 = Object.keys(e3).slice(e3.length);
  if (!e3.length && !r3.length)
    return `${n3}[]`;
  let o3 = "";
  for (let c4 = 0; c4 < e3.length; c4++) {
    let a4 = `${t3.stylize(B$2(e3[c4], t3.truncate), "number")}${c4 === e3.length - 1 ? "" : ", "}`;
    if (t3.truncate -= a4.length, e3[c4] !== e3.length && t3.truncate <= 3) {
      o3 += `${ie$2}(${e3.length - e3[c4] + 1})`;
      break;
    }
    o3 += a4;
  }
  let s2 = "";
  return r3.length && (s2 = D$2(r3.map((c4) => [c4, e3[c4]]), t3, ce$3)), `${n3}[ ${o3}${s2 ? `, ${s2}` : ""} ]`;
}
i$1(te$3, "inspectTypedArray");
function ct$2(e3, t3) {
  let n3 = e3.toJSON();
  if (n3 === null)
    return "Invalid Date";
  let r3 = n3.split("T"), o3 = r3[0];
  return t3.stylize(`${o3}T${B$2(r3[1], t3.truncate - o3.length - 1)}`, "date");
}
i$1(ct$2, "inspectDate");
function Ie$2(e3, t3) {
  let n3 = e3[Symbol.toStringTag] || "Function", r3 = e3.name;
  return r3 ? t3.stylize(`[${n3} ${B$2(r3, t3.truncate - 11)}]`, "special") : t3.stylize(`[${n3}]`, "special");
}
i$1(Ie$2, "inspectFunction");
function xo$2([e3, t3], n3) {
  return n3.truncate -= 4, e3 = n3.inspect(e3, n3), n3.truncate -= e3.length, t3 = n3.inspect(t3, n3), `${e3} => ${t3}`;
}
i$1(xo$2, "inspectMapEntry");
function Do$1(e3) {
  let t3 = [];
  return e3.forEach((n3, r3) => {
    t3.push([r3, n3]);
  }), t3;
}
i$1(Do$1, "mapToEntries");
function ut$2(e3, t3) {
  return e3.size === 0 ? "Map{}" : (t3.truncate -= 7, `Map{ ${D$2(Do$1(e3), t3, xo$2)} }`);
}
i$1(ut$2, "inspectMap");
var Fo$2 = Number.isNaN || ((e3) => e3 !== e3);
function Me$3(e3, t3) {
  return Fo$2(e3) ? t3.stylize("NaN", "number") : e3 === 1 / 0 ? t3.stylize("Infinity", "number") : e3 === -1 / 0 ? t3.stylize("-Infinity", "number") : e3 === 0 ? t3.stylize(1 / e3 === 1 / 0 ? "+0" : "-0", "number") : t3.stylize(B$2(String(e3), t3.truncate), "number");
}
i$1(Me$3, "inspectNumber");
function Le$2(e3, t3) {
  let n3 = B$2(e3.toString(), t3.truncate - 1);
  return n3 !== ie$2 && (n3 += "n"), t3.stylize(n3, "bigint");
}
i$1(Le$2, "inspectBigInt");
function at$2(e3, t3) {
  let n3 = e3.toString().split("/")[2], r3 = t3.truncate - (2 + n3.length), o3 = e3.source;
  return t3.stylize(`/${B$2(o3, r3)}/${n3}`, "regexp");
}
i$1(at$2, "inspectRegExp");
function jo$1(e3) {
  let t3 = [];
  return e3.forEach((n3) => {
    t3.push(n3);
  }), t3;
}
i$1(jo$1, "arrayFromSet");
function lt$1(e3, t3) {
  return e3.size === 0 ? "Set{}" : (t3.truncate -= 7, `Set{ ${D$2(jo$1(e3), t3)} }`);
}
i$1(lt$1, "inspectSet");
var Sn$1 = new RegExp("['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]", "g"), ko$2 = {
  "\b": "\\b",
  "	": "\\t",
  "\n": "\\n",
  "\f": "\\f",
  "\r": "\\r",
  "'": "\\'",
  "\\": "\\\\"
}, Bo$2 = 16;
function Yo$2(e3) {
  return ko$2[e3] || `\\u${`0000${e3.charCodeAt(0).toString(Bo$2)}`.slice(-4)}`;
}
i$1(Yo$2, "escape");
function xe$2(e3, t3) {
  return Sn$1.test(e3) && (e3 = e3.replace(Sn$1, Yo$2)), t3.stylize(`'${B$2(e3, t3.truncate - 2)}'`, "string");
}
i$1(xe$2, "inspectString");
function De$2(e3) {
  return "description" in Symbol.prototype ? e3.description ? `Symbol(${e3.description})` : "Symbol()" : e3.toString();
}
i$1(De$2, "inspectSymbol");
var En$1 = /* @__PURE__ */ i$1(() => "Promise{…}", "getPromiseValue");
try {
  let { getPromiseDetails: e3, kPending: t3, kRejected: n3 } = process.binding("util");
  Array.isArray(e3(Promise.resolve())) && (En$1 = /* @__PURE__ */ i$1((r3, o3) => {
    let [s2, c4] = e3(r3);
    return s2 === t3 ? "Promise{<pending>}" : `Promise${s2 === n3 ? "!" : ""}{${o3.inspect(c4, o3)}}`;
  }, "getPromiseValue"));
} catch {
}
var _n$2 = En$1;
function me$3(e3, t3) {
  let n3 = Object.getOwnPropertyNames(e3), r3 = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e3) : [];
  if (n3.length === 0 && r3.length === 0)
    return "{}";
  if (t3.truncate -= 4, t3.seen = t3.seen || [], t3.seen.includes(e3))
    return "[Circular]";
  t3.seen.push(e3);
  let o3 = D$2(n3.map((a4) => [a4, e3[a4]]), t3, ce$3), s2 = D$2(r3.map((a4) => [a4, e3[a4]]), t3, ce$3);
  t3.seen.pop();
  let c4 = "";
  return o3 && s2 && (c4 = ", "), `{ ${o3}${c4}${s2} }`;
}
i$1(me$3, "inspectObject");
var ft$2 = typeof Symbol < "u" && Symbol.toStringTag ? Symbol.toStringTag : false;
function mt$1(e3, t3) {
  let n3 = "";
  return ft$2 && ft$2 in e3 && (n3 = e3[ft$2]), n3 = n3 || e3.constructor.name, (!n3 || n3 === "_class") && (n3 = "<Anonymous Class>"), t3.truncate -= n3.length, `${n3}${me$3(e3, t3)}`;
}
i$1(mt$1, "inspectClass");
function pt$2(e3, t3) {
  return e3.length === 0 ? "Arguments[]" : (t3.truncate -= 13, `Arguments[ ${D$2(e3, t3)} ]`);
}
i$1(pt$2, "inspectArguments");
var Uo$1 = [
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
function gt$1(e3, t3) {
  let n3 = Object.getOwnPropertyNames(e3).filter((c4) => Uo$1.indexOf(c4) === -1), r3 = e3.name;
  t3.truncate -= r3.length;
  let o3 = "";
  if (typeof e3.message == "string" ? o3 = B$2(e3.message, t3.truncate) : n3.unshift("message"), o3 = o3 ? `: ${o3}` : "", t3.truncate -= o3.length + 5, t3.seen = t3.seen || [], t3.seen.includes(e3))
    return "[Circular]";
  t3.seen.push(e3);
  let s2 = D$2(n3.map((c4) => [c4, e3[c4]]), t3, ce$3);
  return `${r3}${o3}${s2 ? ` { ${s2} }` : ""}`;
}
i$1(gt$1, "inspectObject");
function Wo([e3, t3], n3) {
  return n3.truncate -= 3, t3 ? `${n3.stylize(String(e3), "yellow")}=${n3.stylize(`"${t3}"`, "string")}` : `${n3.stylize(String(e3), "yellow")}`;
}
i$1(Wo, "inspectAttribute");
function Fe$2(e3, t3) {
  return D$2(e3, t3, Vo$2, `
`);
}
i$1(Fe$2, "inspectNodeCollection");
function Vo$2(e3, t3) {
  switch (e3.nodeType) {
    case 1:
      return je$2(e3, t3);
    case 3:
      return t3.inspect(e3.data, t3);
    default:
      return t3.inspect(e3, t3);
  }
}
i$1(Vo$2, "inspectNode");
function je$2(e3, t3) {
  let n3 = e3.getAttributeNames(), r3 = e3.tagName.toLowerCase(), o3 = t3.stylize(`<${r3}`, "special"), s2 = t3.stylize(">", "special"), c4 = t3.stylize(
    `</${r3}>`,
    "special"
  );
  t3.truncate -= r3.length * 2 + 5;
  let a4 = "";
  n3.length > 0 && (a4 += " ", a4 += D$2(n3.map((p2) => [p2, e3.getAttribute(p2)]), t3, Wo, " ")), t3.truncate -= a4.length;
  let u2 = t3.truncate, m4 = Fe$2(e3.children, t3);
  return m4 && m4.length > u2 && (m4 = `${ie$2}(${e3.children.length})`), `${o3}${a4}${s2}${m4}${c4}`;
}
i$1(je$2, "inspectHTML");
var qo$2 = typeof Symbol == "function" && typeof Symbol.for == "function", ht$1 = qo$2 ? Symbol.for("chai/inspect") : "@@chai/inspect", dt$2 = Symbol.for("nodejs.util.inspect.custom"), Tn$2 = /* @__PURE__ */ new WeakMap(), Cn$2 = {}, On$2 = {
  undefined: /* @__PURE__ */ i$1((e3, t3) => t3.stylize("undefined", "undefined"), "undefined"),
  null: /* @__PURE__ */ i$1((e3, t3) => t3.stylize("null", "null"), "null"),
  boolean: /* @__PURE__ */ i$1((e3, t3) => t3.stylize(String(e3), "boolean"), "boolean"),
  Boolean: /* @__PURE__ */ i$1((e3, t3) => t3.stylize(String(e3), "boolean"), "Boolean"),
  number: Me$3,
  Number: Me$3,
  bigint: Le$2,
  BigInt: Le$2,
  string: xe$2,
  String: xe$2,
  function: Ie$2,
  Function: Ie$2,
  symbol: De$2,
  // A Symbol polyfill will return `Symbol` not `symbol` from typedetect
  Symbol: De$2,
  Array: it$2,
  Date: ct$2,
  Map: ut$2,
  Set: lt$1,
  RegExp: at$2,
  Promise: _n$2,
  // WeakSet, WeakMap are totally opaque to us
  WeakSet: /* @__PURE__ */ i$1((e3, t3) => t3.stylize("WeakSet{…}", "special"), "WeakSet"),
  WeakMap: /* @__PURE__ */ i$1((e3, t3) => t3.stylize("WeakMap{…}", "special"), "WeakMap"),
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
  Error: gt$1,
  HTMLCollection: Fe$2,
  NodeList: Fe$2
}, Ko$2 = /* @__PURE__ */ i$1((e3, t3, n3) => ht$1 in e3 && typeof e3[ht$1] == "function" ? e3[ht$1](t3) : dt$2 in e3 && typeof e3[dt$2] == "function" ? e3[dt$2](
  t3.depth,
  t3
) : "inspect" in e3 && typeof e3.inspect == "function" ? e3.inspect(t3.depth, t3) : "constructor" in e3 && Tn$2.has(e3.constructor) ? Tn$2.get(e3.constructor)(
  e3,
  t3
) : Cn$2[n3] ? Cn$2[n3](e3, t3) : "", "inspectCustom"), Go = Object.prototype.toString;
function ke$3(e3, t3 = {}) {
  let n3 = bn$2(t3, ke$3), { customInspect: r3 } = n3, o3 = e3 === null ? "null" : typeof e3;
  if (o3 === "object" && (o3 = Go.call(e3).slice(8, -1)), o3 in On$2)
    return On$2[o3](e3, n3);
  if (r3 && e3) {
    let c4 = Ko$2(e3, n3, o3);
    if (c4)
      return typeof c4 == "string" ? c4 : ke$3(c4, n3);
  }
  let s2 = e3 ? Object.getPrototypeOf(e3) : false;
  return s2 === Object.prototype || s2 === null ? me$3(e3, n3) : e3 && typeof HTMLElement == "function" && e3 instanceof HTMLElement ? je$2(e3, n3) : "constructor" in e3 ? e3.constructor !== Object ? mt$1(e3, n3) : me$3(e3, n3) : e3 === Object(e3) ? me$3(e3, n3) : n3.stylize(String(e3), o3);
}
i$1(ke$3, "inspect");
var { AsymmetricMatcher: Jo$2, DOMCollection: Xo$1, DOMElement: Zo, Immutable: Qo$2, ReactElement: vo$2, ReactTestComponent: es$1 } = _e$3, $n$2 = [
  es$1,
  vo$2,
  Zo,
  Xo$1,
  Qo$2,
  Jo$2
];
function pe$2(e3, t3 = 10, { maxLength: n3, ...r3 } = {}) {
  let o3 = n3 ?? 1e4, s2;
  try {
    s2 = X$1(e3, {
      maxDepth: t3,
      escapeString: false,
      plugins: $n$2,
      ...r3
    });
  } catch {
    s2 = X$1(e3, {
      callToJSON: false,
      maxDepth: t3,
      escapeString: false,
      plugins: $n$2,
      ...r3
    });
  }
  return s2.length >= o3 && t3 > 1 ? pe$2(e3, Math.floor(Math.min(t3, Number.MAX_SAFE_INTEGER) / 2), {
    maxLength: n3,
    ...r3
  }) : s2;
}
i$1(pe$2, "stringify");
var ts = /%[sdjifoOc%]/g;
function wn$1(...e3) {
  if (typeof e3[0] != "string") {
    let s2 = [];
    for (let c4 = 0; c4 < e3.length; c4++)
      s2.push(Te$2(e3[c4], {
        depth: 0,
        colors: false
      }));
    return s2.join(" ");
  }
  let t3 = e3.length, n3 = 1, r3 = e3[0], o3 = String(r3).replace(ts, (s2) => {
    if (s2 === "%%")
      return "%";
    if (n3 >= t3)
      return s2;
    switch (s2) {
      case "%s": {
        let c4 = e3[n3++];
        return typeof c4 == "bigint" ? `${c4.toString()}n` : typeof c4 == "number" && c4 === 0 && 1 / c4 < 0 ? "-0" : typeof c4 == "object" && c4 !== null ? typeof c4.toString == "function" && c4.toString !== Object.prototype.toString ? c4.toString() : Te$2(c4, {
          depth: 0,
          colors: false
        }) : String(c4);
      }
      case "%d": {
        let c4 = e3[n3++];
        return typeof c4 == "bigint" ? `${c4.toString()}n` : Number(c4).toString();
      }
      case "%i": {
        let c4 = e3[n3++];
        return typeof c4 == "bigint" ? `${c4.toString()}n` : Number.parseInt(String(c4)).toString();
      }
      case "%f":
        return Number.parseFloat(String(e3[n3++])).toString();
      case "%o":
        return Te$2(e3[n3++], {
          showHidden: true,
          showProxy: true
        });
      case "%O":
        return Te$2(e3[n3++]);
      case "%c":
        return n3++, "";
      case "%j":
        try {
          return JSON.stringify(e3[n3++]);
        } catch (c4) {
          let a4 = c4.message;
          if (a4.includes("circular structure") || a4.includes("cyclic structures") || a4.includes("cyclic object"))
            return "[Circular]";
          throw c4;
        }
      default:
        return s2;
    }
  });
  for (let s2 = e3[n3]; n3 < t3; s2 = e3[++n3])
    s2 === null || typeof s2 != "object" ? o3 += ` ${s2}` : o3 += ` ${Te$2(s2)}`;
  return o3;
}
i$1(wn$1, "format");
function Te$2(e3, t3 = {}) {
  return t3.truncate === 0 && (t3.truncate = Number.POSITIVE_INFINITY), ke$3(e3, t3);
}
i$1(Te$2, "inspect");
function Rn$2(e3) {
  return e3 && e3.__esModule && Object.prototype.hasOwnProperty.call(e3, "default") ? e3.default : e3;
}
i$1(Rn$2, "getDefaultExportFromCjs");
function ns(e3) {
  return e3 === Object.prototype || e3 === Function.prototype || e3 === RegExp.prototype;
}
i$1(ns, "isFinalObj");
function Be$2(e3) {
  return Object.prototype.toString.apply(e3).slice(8, -1);
}
i$1(Be$2, "getType");
function rs$1(e3, t3) {
  let n3 = typeof t3 == "function" ? t3 : (r3) => t3.add(r3);
  Object.getOwnPropertyNames(e3).forEach(n3), Object.getOwnPropertySymbols(e3).forEach(n3);
}
i$1(rs$1, "collectOwnProperties");
function bt$2(e3) {
  let t3 = /* @__PURE__ */ new Set();
  return ns(e3) ? [] : (rs$1(e3, t3), Array.from(t3));
}
i$1(bt$2, "getOwnProperties");
var An$1 = { forceWritable: false };
function St$2(e3, t3 = An$1) {
  return yt$1(e3, /* @__PURE__ */ new WeakMap(), t3);
}
i$1(St$2, "deepClone");
function yt$1(e3, t3, n3 = An$1) {
  let r3, o3;
  if (t3.has(e3))
    return t3.get(e3);
  if (Array.isArray(e3)) {
    for (o3 = Array.from({ length: r3 = e3.length }), t3.set(e3, o3); r3--; )
      o3[r3] = yt$1(e3[r3], t3, n3);
    return o3;
  }
  if (Object.prototype.toString.call(e3) === "[object Object]") {
    o3 = Object.create(Object.getPrototypeOf(e3)), t3.set(e3, o3);
    let s2 = bt$2(e3);
    for (let c4 of s2) {
      let a4 = Object.getOwnPropertyDescriptor(e3, c4);
      if (!a4)
        continue;
      let u2 = yt$1(e3[c4], t3, n3);
      n3.forceWritable ? Object.defineProperty(o3, c4, {
        enumerable: a4.enumerable,
        configurable: true,
        writable: true,
        value: u2
      }) : "get" in a4 ? Object.defineProperty(o3, c4, {
        ...a4,
        get() {
          return u2;
        }
      }) : Object.defineProperty(o3, c4, {
        ...a4,
        value: u2
      });
    }
    return o3;
  }
  return e3;
}
i$1(yt$1, "clone");
var z$2 = -1, j$2 = 1, M$2 = 0, At$2 = class At {
  constructor(t3, n3) {
    __publicField(this, 0);
    __publicField(this, 1);
    this[0] = t3, this[1] = n3;
  }
};
i$1(At$2, "Diff");
var P$1 = At$2;
function os$1(e3, t3) {
  if (!e3 || !t3 || e3.charAt(0) !== t3.charAt(0))
    return 0;
  let n3 = 0, r3 = Math.min(e3.length, t3.length), o3 = r3, s2 = 0;
  for (; n3 < o3; )
    e3.substring(s2, o3) === t3.substring(s2, o3) ? (n3 = o3, s2 = n3) : r3 = o3, o3 = Math.floor((r3 - n3) / 2 + n3);
  return o3;
}
i$1(os$1, "diff_commonPrefix");
function Vn(e3, t3) {
  if (!e3 || !t3 || e3.charAt(e3.length - 1) !== t3.charAt(t3.length - 1))
    return 0;
  let n3 = 0, r3 = Math.min(e3.length, t3.length), o3 = r3, s2 = 0;
  for (; n3 < o3; )
    e3.substring(e3.length - o3, e3.length - s2) === t3.substring(t3.length - o3, t3.length - s2) ? (n3 = o3, s2 = n3) : r3 = o3, o3 = Math.floor((r3 - n3) / 2 + n3);
  return o3;
}
i$1(Vn, "diff_commonSuffix");
function Pn$2(e3, t3) {
  let n3 = e3.length, r3 = t3.length;
  if (n3 === 0 || r3 === 0)
    return 0;
  n3 > r3 ? e3 = e3.substring(n3 - r3) : n3 < r3 && (t3 = t3.substring(0, n3));
  let o3 = Math.min(n3, r3);
  if (e3 === t3)
    return o3;
  let s2 = 0, c4 = 1;
  for (; ; ) {
    let a4 = e3.substring(o3 - c4), u2 = t3.indexOf(a4);
    if (u2 === -1)
      return s2;
    c4 += u2, (u2 === 0 || e3.substring(o3 - c4) === t3.substring(0, c4)) && (s2 = c4, c4++);
  }
}
i$1(Pn$2, "diff_commonOverlap_");
function ss(e3) {
  let t3 = false, n3 = [], r3 = 0, o3 = null, s2 = 0, c4 = 0, a4 = 0, u2 = 0, m4 = 0;
  for (; s2 < e3.length; )
    e3[s2][0] === M$2 ? (n3[r3++] = s2, c4 = u2, a4 = m4, u2 = 0, m4 = 0, o3 = e3[s2][1]) : (e3[s2][0] === j$2 ? u2 += e3[s2][1].length : m4 += e3[s2][1].length, o3 && o3.length <= Math.max(c4, a4) && o3.length <= Math.max(u2, m4) && (e3.splice(n3[r3 - 1], 0, new P$1(z$2, o3)), e3[n3[r3 - 1] + 1][0] = j$2, r3--, r3--, s2 = r3 > 0 ? n3[r3 - 1] : -1, c4 = 0, a4 = 0, u2 = 0, m4 = 0, o3 = null, t3 = true)), s2++;
  for (t3 && qn$1(e3), us(e3), s2 = 1; s2 < e3.length; ) {
    if (e3[s2 - 1][0] === z$2 && e3[s2][0] === j$2) {
      let p2 = e3[s2 - 1][1], l4 = e3[s2][1], b4 = Pn$2(p2, l4), g4 = Pn$2(l4, p2);
      b4 >= g4 ? (b4 >= p2.length / 2 || b4 >= l4.length / 2) && (e3.splice(s2, 0, new P$1(M$2, l4.substring(0, b4))), e3[s2 - 1][1] = p2.substring(0, p2.length - b4), e3[s2 + 1][1] = l4.substring(b4), s2++) : (g4 >= p2.length / 2 || g4 >= l4.length / 2) && (e3.splice(s2, 0, new P$1(M$2, p2.substring(0, g4))), e3[s2 - 1][0] = j$2, e3[s2 - 1][1] = l4.substring(0, l4.length - g4), e3[s2 + 1][0] = z$2, e3[s2 + 1][1] = p2.substring(g4), s2++), s2++;
    }
    s2++;
  }
}
i$1(ss, "diff_cleanupSemantic");
var Nn$2 = /[^a-z0-9]/i, In$1 = /\s/, Mn$1 = /[\r\n]/, is = /\n\r?\n$/, cs = /^\r?\n\r?\n/;
function us(e3) {
  let t3 = 1;
  for (; t3 < e3.length - 1; ) {
    if (e3[t3 - 1][0] === M$2 && e3[t3 + 1][0] === M$2) {
      let n3 = e3[t3 - 1][1], r3 = e3[t3][1], o3 = e3[t3 + 1][1], s2 = Vn(n3, r3);
      if (s2) {
        let p2 = r3.substring(r3.length - s2);
        n3 = n3.substring(0, n3.length - s2), r3 = p2 + r3.substring(0, r3.length - s2), o3 = p2 + o3;
      }
      let c4 = n3, a4 = r3, u2 = o3, m4 = ze$3(n3, r3) + ze$3(r3, o3);
      for (; r3.charAt(0) === o3.charAt(0); ) {
        n3 += r3.charAt(0), r3 = r3.substring(1) + o3.charAt(0), o3 = o3.substring(1);
        let p2 = ze$3(n3, r3) + ze$3(r3, o3);
        p2 >= m4 && (m4 = p2, c4 = n3, a4 = r3, u2 = o3);
      }
      e3[t3 - 1][1] !== c4 && (c4 ? e3[t3 - 1][1] = c4 : (e3.splice(t3 - 1, 1), t3--), e3[t3][1] = a4, u2 ? e3[t3 + 1][1] = u2 : (e3.splice(t3 + 1, 1), t3--));
    }
    t3++;
  }
}
i$1(us, "diff_cleanupSemanticLossless");
function qn$1(e3) {
  e3.push(new P$1(M$2, ""));
  let t3 = 0, n3 = 0, r3 = 0, o3 = "", s2 = "", c4;
  for (; t3 < e3.length; )
    switch (e3[t3][0]) {
      case j$2:
        r3++, s2 += e3[t3][1], t3++;
        break;
      case z$2:
        n3++, o3 += e3[t3][1], t3++;
        break;
      case M$2:
        n3 + r3 > 1 ? (n3 !== 0 && r3 !== 0 && (c4 = os$1(s2, o3), c4 !== 0 && (t3 - n3 - r3 > 0 && e3[t3 - n3 - r3 - 1][0] === M$2 ? e3[t3 - n3 - r3 - 1][1] += s2.substring(0, c4) : (e3.splice(0, 0, new P$1(M$2, s2.substring(0, c4))), t3++), s2 = s2.substring(c4), o3 = o3.substring(c4)), c4 = Vn(s2, o3), c4 !== 0 && (e3[t3][1] = s2.substring(s2.length - c4) + e3[t3][1], s2 = s2.substring(0, s2.length - c4), o3 = o3.substring(0, o3.length - c4))), t3 -= n3 + r3, e3.splice(t3, n3 + r3), o3.length && (e3.splice(t3, 0, new P$1(z$2, o3)), t3++), s2.length && (e3.splice(t3, 0, new P$1(j$2, s2)), t3++), t3++) : t3 !== 0 && e3[t3 - 1][0] === M$2 ? (e3[t3 - 1][1] += e3[t3][1], e3.splice(t3, 1)) : t3++, r3 = 0, n3 = 0, o3 = "", s2 = "";
        break;
    }
  e3[e3.length - 1][1] === "" && e3.pop();
  let a4 = false;
  for (t3 = 1; t3 < e3.length - 1; )
    e3[t3 - 1][0] === M$2 && e3[t3 + 1][0] === M$2 && (e3[t3][1].substring(e3[t3][1].length - e3[t3 - 1][1].length) === e3[t3 - 1][1] ? (e3[t3][1] = e3[t3 - 1][1] + e3[t3][1].substring(0, e3[t3][1].length - e3[t3 - 1][1].length), e3[t3 + 1][1] = e3[t3 - 1][1] + e3[t3 + 1][1], e3.splice(t3 - 1, 1), a4 = true) : e3[t3][1].substring(0, e3[t3 + 1][1].length) === e3[t3 + 1][1] && (e3[t3 - 1][1] += e3[t3 + 1][1], e3[t3][1] = e3[t3][1].substring(e3[t3 + 1][1].length) + e3[t3 + 1][1], e3.splice(t3 + 1, 1), a4 = true)), t3++;
  a4 && qn$1(e3);
}
i$1(qn$1, "diff_cleanupMerge");
function ze$3(e3, t3) {
  if (!e3 || !t3)
    return 6;
  let n3 = e3.charAt(e3.length - 1), r3 = t3.charAt(0), o3 = n3.match(Nn$2), s2 = r3.match(Nn$2), c4 = o3 && n3.match(In$1), a4 = s2 && r3.match(In$1), u2 = c4 && n3.match(Mn$1), m4 = a4 && r3.match(Mn$1), p2 = u2 && e3.match(is), l4 = m4 && t3.match(cs);
  return p2 || l4 ? 5 : u2 || m4 ? 4 : o3 && !c4 && a4 ? 3 : c4 || a4 ? 2 : o3 || s2 ? 1 : 0;
}
i$1(ze$3, "diff_cleanupSemanticScore_");
var Kn$1 = "Compared values have no visual difference.", as = "Compared values serialize to the same structure.\nPrinting internal object structure without calling `toJSON` instead.", Ye$1 = {}, Ln$1;
function ls() {
  if (Ln$1) return Ye$1;
  Ln$1 = 1, Object.defineProperty(Ye$1, "__esModule", {
    value: true
  }), Ye$1.default = b4;
  let e3 = "diff-sequences", t3 = 0, n3 = /* @__PURE__ */ i$1((g4, h4, f2, d2, S3) => {
    let _2 = 0;
    for (; g4 < h4 && f2 < d2 && S3(g4, f2); )
      g4 += 1, f2 += 1, _2 += 1;
    return _2;
  }, "countCommonItemsF"), r3 = /* @__PURE__ */ i$1((g4, h4, f2, d2, S3) => {
    let _2 = 0;
    for (; g4 <= h4 && f2 <= d2 && S3(h4, d2); )
      h4 -= 1, d2 -= 1, _2 += 1;
    return _2;
  }, "countCommonItemsR"), o3 = /* @__PURE__ */ i$1((g4, h4, f2, d2, S3, _2, O2) => {
    let y4 = 0, E3 = -g4, $2 = _2[y4], T2 = $2;
    _2[y4] += n3(
      $2 + 1,
      h4,
      d2 + $2 - E3 + 1,
      f2,
      S3
    );
    let R4 = g4 < O2 ? g4 : O2;
    for (y4 += 1, E3 += 2; y4 <= R4; y4 += 1, E3 += 2) {
      if (y4 !== g4 && T2 < _2[y4])
        $2 = _2[y4];
      else if ($2 = T2 + 1, h4 <= $2)
        return y4 - 1;
      T2 = _2[y4], _2[y4] = $2 + n3($2 + 1, h4, d2 + $2 - E3 + 1, f2, S3);
    }
    return O2;
  }, "extendPathsF"), s2 = /* @__PURE__ */ i$1((g4, h4, f2, d2, S3, _2, O2) => {
    let y4 = 0, E3 = g4, $2 = _2[y4], T2 = $2;
    _2[y4] -= r3(
      h4,
      $2 - 1,
      f2,
      d2 + $2 - E3 - 1,
      S3
    );
    let R4 = g4 < O2 ? g4 : O2;
    for (y4 += 1, E3 -= 2; y4 <= R4; y4 += 1, E3 -= 2) {
      if (y4 !== g4 && _2[y4] < T2)
        $2 = _2[y4];
      else if ($2 = T2 - 1, $2 < h4)
        return y4 - 1;
      T2 = _2[y4], _2[y4] = $2 - r3(
        h4,
        $2 - 1,
        f2,
        d2 + $2 - E3 - 1,
        S3
      );
    }
    return O2;
  }, "extendPathsR"), c4 = /* @__PURE__ */ i$1((g4, h4, f2, d2, S3, _2, O2, y4, E3, $2, T2) => {
    let R4 = d2 - h4, K2 = f2 - h4, I2 = S3 - d2 - K2, k2 = -I2 - (g4 - 1), G2 = -I2 + (g4 - 1), Y2 = t3, N2 = g4 < y4 ? g4 : y4;
    for (let L2 = 0, x4 = -g4; L2 <= N2; L2 += 1, x4 += 2) {
      let H2 = L2 === 0 || L2 !== g4 && Y2 < O2[L2], F2 = H2 ? O2[L2] : Y2, W2 = H2 ? F2 : F2 + 1, re2 = R4 + W2 - x4, V2 = n3(
        W2 + 1,
        f2,
        re2 + 1,
        S3,
        _2
      ), q2 = W2 + V2;
      if (Y2 = O2[L2], O2[L2] = q2, k2 <= x4 && x4 <= G2) {
        let se2 = (g4 - 1 - (x4 + I2)) / 2;
        if (se2 <= $2 && E3[se2] - 1 <= q2) {
          let J2 = R4 + F2 - (H2 ? x4 + 1 : x4 - 1), U2 = r3(
            h4,
            F2,
            d2,
            J2,
            _2
          ), oe2 = F2 - U2, he2 = J2 - U2, ue2 = oe2 + 1, be2 = he2 + 1;
          T2.nChangePreceding = g4 - 1, g4 - 1 === ue2 + be2 - h4 - d2 ? (T2.aEndPreceding = h4, T2.bEndPreceding = d2) : (T2.aEndPreceding = ue2, T2.bEndPreceding = be2), T2.nCommonPreceding = U2, U2 !== 0 && (T2.aCommonPreceding = ue2, T2.bCommonPreceding = be2), T2.nCommonFollowing = V2, V2 !== 0 && (T2.aCommonFollowing = W2 + 1, T2.bCommonFollowing = re2 + 1);
          let Ce2 = q2 + 1, Oe2 = re2 + V2 + 1;
          return T2.nChangeFollowing = g4 - 1, g4 - 1 === f2 + S3 - Ce2 - Oe2 ? (T2.aStartFollowing = f2, T2.bStartFollowing = S3) : (T2.aStartFollowing = Ce2, T2.bStartFollowing = Oe2), true;
        }
      }
    }
    return false;
  }, "extendOverlappablePathsF"), a4 = /* @__PURE__ */ i$1((g4, h4, f2, d2, S3, _2, O2, y4, E3, $2, T2) => {
    let R4 = S3 - f2, K2 = f2 - h4, I2 = S3 - d2 - K2, k2 = I2 - g4, G2 = I2 + g4, Y2 = t3, N2 = g4 < $2 ? g4 : $2;
    for (let L2 = 0, x4 = g4; L2 <= N2; L2 += 1, x4 -= 2) {
      let H2 = L2 === 0 || L2 !== g4 && E3[L2] < Y2, F2 = H2 ? E3[L2] : Y2, W2 = H2 ? F2 : F2 - 1, re2 = R4 + W2 - x4, V2 = r3(
        h4,
        W2 - 1,
        d2,
        re2 - 1,
        _2
      ), q2 = W2 - V2;
      if (Y2 = E3[L2], E3[L2] = q2, k2 <= x4 && x4 <= G2) {
        let se2 = (g4 + (x4 - I2)) / 2;
        if (se2 <= y4 && q2 - 1 <= O2[se2]) {
          let J2 = re2 - V2;
          if (T2.nChangePreceding = g4, g4 === q2 + J2 - h4 - d2 ? (T2.aEndPreceding = h4, T2.bEndPreceding = d2) : (T2.aEndPreceding = q2, T2.bEndPreceding = J2), T2.nCommonPreceding = V2, V2 !== 0 && (T2.aCommonPreceding = q2, T2.bCommonPreceding = J2), T2.nChangeFollowing = g4 - 1, g4 === 1)
            T2.nCommonFollowing = 0, T2.aStartFollowing = f2, T2.bStartFollowing = S3;
          else {
            let U2 = R4 + F2 - (H2 ? x4 - 1 : x4 + 1), oe2 = n3(
              F2,
              f2,
              U2,
              S3,
              _2
            );
            T2.nCommonFollowing = oe2, oe2 !== 0 && (T2.aCommonFollowing = F2, T2.bCommonFollowing = U2);
            let he2 = F2 + oe2, ue2 = U2 + oe2;
            g4 - 1 === f2 + S3 - he2 - ue2 ? (T2.aStartFollowing = f2, T2.bStartFollowing = S3) : (T2.aStartFollowing = he2, T2.bStartFollowing = ue2);
          }
          return true;
        }
      }
    }
    return false;
  }, "extendOverlappablePathsR"), u2 = /* @__PURE__ */ i$1((g4, h4, f2, d2, S3, _2, O2, y4, E3) => {
    let $2 = d2 - h4, T2 = S3 - f2, R4 = f2 - h4, K2 = S3 - d2, Q2 = K2 - R4, I2 = R4, k2 = R4;
    if (O2[0] = h4 - 1, y4[0] = f2, Q2 % 2 === 0) {
      let G2 = (g4 || Q2) / 2, Y2 = (R4 + K2) / 2;
      for (let N2 = 1; N2 <= Y2; N2 += 1)
        if (I2 = o3(N2, f2, S3, $2, _2, O2, I2), N2 < G2)
          k2 = s2(N2, h4, d2, T2, _2, y4, k2);
        else if (
          // If a reverse path overlaps a forward path in the same diagonal,
          // return a division of the index intervals at the middle change.
          a4(
            N2,
            h4,
            f2,
            d2,
            S3,
            _2,
            O2,
            I2,
            y4,
            k2,
            E3
          )
        )
          return;
    } else {
      let G2 = ((g4 || Q2) + 1) / 2, Y2 = (R4 + K2 + 1) / 2, N2 = 1;
      for (I2 = o3(N2, f2, S3, $2, _2, O2, I2), N2 += 1; N2 <= Y2; N2 += 1)
        if (k2 = s2(
          N2 - 1,
          h4,
          d2,
          T2,
          _2,
          y4,
          k2
        ), N2 < G2)
          I2 = o3(N2, f2, S3, $2, _2, O2, I2);
        else if (
          // If a forward path overlaps a reverse path in the same diagonal,
          // return a division of the index intervals at the middle change.
          c4(
            N2,
            h4,
            f2,
            d2,
            S3,
            _2,
            O2,
            I2,
            y4,
            k2,
            E3
          )
        )
          return;
    }
    throw new Error(
      `${e3}: no overlap aStart=${h4} aEnd=${f2} bStart=${d2} bEnd=${S3}`
    );
  }, "divide"), m4 = /* @__PURE__ */ i$1((g4, h4, f2, d2, S3, _2, O2, y4, E3, $2) => {
    if (S3 - d2 < f2 - h4) {
      if (_2 = !_2, _2 && O2.length === 1) {
        let { foundSubsequence: q2, isCommon: se2 } = O2[0];
        O2[1] = {
          foundSubsequence: /* @__PURE__ */ i$1((J2, U2, oe2) => {
            q2(J2, oe2, U2);
          }, "foundSubsequence"),
          isCommon: /* @__PURE__ */ i$1((J2, U2) => se2(U2, J2), "isCommon")
        };
      }
      let re2 = h4, V2 = f2;
      h4 = d2, f2 = S3, d2 = re2, S3 = V2;
    }
    let { foundSubsequence: T2, isCommon: R4 } = O2[_2 ? 1 : 0];
    u2(
      g4,
      h4,
      f2,
      d2,
      S3,
      R4,
      y4,
      E3,
      $2
    );
    let {
      nChangePreceding: K2,
      aEndPreceding: Q2,
      bEndPreceding: I2,
      nCommonPreceding: k2,
      aCommonPreceding: G2,
      bCommonPreceding: Y2,
      nCommonFollowing: N2,
      aCommonFollowing: L2,
      bCommonFollowing: x4,
      nChangeFollowing: H2,
      aStartFollowing: F2,
      bStartFollowing: W2
    } = $2;
    h4 < Q2 && d2 < I2 && m4(
      K2,
      h4,
      Q2,
      d2,
      I2,
      _2,
      O2,
      y4,
      E3,
      $2
    ), k2 !== 0 && T2(k2, G2, Y2), N2 !== 0 && T2(N2, L2, x4), F2 < f2 && W2 < S3 && m4(
      H2,
      F2,
      f2,
      W2,
      S3,
      _2,
      O2,
      y4,
      E3,
      $2
    );
  }, "findSubsequences"), p2 = /* @__PURE__ */ i$1((g4, h4) => {
    if (typeof h4 != "number")
      throw new TypeError(`${e3}: ${g4} typeof ${typeof h4} is not a number`);
    if (!Number.isSafeInteger(h4))
      throw new RangeError(`${e3}: ${g4} value ${h4} is not a safe integer`);
    if (h4 < 0)
      throw new RangeError(`${e3}: ${g4} value ${h4} is a negative integer`);
  }, "validateLength"), l4 = /* @__PURE__ */ i$1((g4, h4) => {
    let f2 = typeof h4;
    if (f2 !== "function")
      throw new TypeError(`${e3}: ${g4} typeof ${f2} is not a function`);
  }, "validateCallback");
  function b4(g4, h4, f2, d2) {
    p2("aLength", g4), p2("bLength", h4), l4("isCommon", f2), l4("foundSubsequence", d2);
    let S3 = n3(0, g4, 0, h4, f2);
    if (S3 !== 0 && d2(S3, 0, 0), g4 !== S3 || h4 !== S3) {
      let _2 = S3, O2 = S3, y4 = r3(
        _2,
        g4 - 1,
        O2,
        h4 - 1,
        f2
      ), E3 = g4 - y4, $2 = h4 - y4, T2 = S3 + y4;
      g4 !== T2 && h4 !== T2 && m4(
        0,
        _2,
        E3,
        O2,
        $2,
        false,
        [
          {
            foundSubsequence: d2,
            isCommon: f2
          }
        ],
        [t3],
        [t3],
        {
          aCommonFollowing: t3,
          aCommonPreceding: t3,
          aEndPreceding: t3,
          aStartFollowing: t3,
          bCommonFollowing: t3,
          bCommonPreceding: t3,
          bEndPreceding: t3,
          bStartFollowing: t3,
          nChangeFollowing: t3,
          nChangePreceding: t3,
          nCommonFollowing: t3,
          nCommonPreceding: t3
        }
      ), y4 !== 0 && d2(y4, E3, $2);
    }
  }
  return i$1(b4, "diffSequence"), Ye$1;
}
i$1(ls, "requireBuild");
var fs$1 = ls(), Gn$1 = /* @__PURE__ */ Rn$2(fs$1);
function ms$1(e3, t3) {
  return e3.replace(/\s+$/, (n3) => t3(n3));
}
i$1(ms$1, "formatTrailingSpaces");
function wt$2(e3, t3, n3, r3, o3, s2) {
  return e3.length !== 0 ? n3(`${r3} ${ms$1(e3, o3)}`) : r3 !== " " ? n3(r3) : t3 && s2.length !== 0 ? n3(`${r3} ${s2}`) : "";
}
i$1(wt$2, "printDiffLine");
function Hn$1(e3, t3, { aColor: n3, aIndicator: r3, changeLineTrailingSpaceColor: o3, emptyFirstOrLastLinePlaceholder: s2 }) {
  return wt$2(e3, t3, n3, r3, o3, s2);
}
i$1(Hn$1, "printDeleteLine");
function Jn$1(e3, t3, { bColor: n3, bIndicator: r3, changeLineTrailingSpaceColor: o3, emptyFirstOrLastLinePlaceholder: s2 }) {
  return wt$2(e3, t3, n3, r3, o3, s2);
}
i$1(Jn$1, "printInsertLine");
function Xn$1(e3, t3, { commonColor: n3, commonIndicator: r3, commonLineTrailingSpaceColor: o3, emptyFirstOrLastLinePlaceholder: s2 }) {
  return wt$2(e3, t3, n3, r3, o3, s2);
}
i$1(Xn$1, "printCommonLine");
function xn$2(e3, t3, n3, r3, { patchColor: o3 }) {
  return o3(`@@ -${e3 + 1},${t3 - e3} +${n3 + 1},${r3 - n3} @@`);
}
i$1(xn$2, "createPatchMark");
function ps(e3, t3) {
  let n3 = e3.length, r3 = t3.contextLines, o3 = r3 + r3, s2 = n3, c4 = false, a4 = 0, u2 = 0;
  for (; u2 !== n3; ) {
    let y4 = u2;
    for (; u2 !== n3 && e3[u2][0] === M$2; )
      u2 += 1;
    if (y4 !== u2)
      if (y4 === 0)
        u2 > r3 && (s2 -= u2 - r3, c4 = true);
      else if (u2 === n3) {
        let E3 = u2 - y4;
        E3 > r3 && (s2 -= E3 - r3, c4 = true);
      } else {
        let E3 = u2 - y4;
        E3 > o3 && (s2 -= E3 - o3, a4 += 1);
      }
    for (; u2 !== n3 && e3[u2][0] !== M$2; )
      u2 += 1;
  }
  let m4 = a4 !== 0 || c4;
  a4 !== 0 ? s2 += a4 + 1 : c4 && (s2 += 1);
  let p2 = s2 - 1, l4 = [], b4 = 0;
  m4 && l4.push("");
  let g4 = 0, h4 = 0, f2 = 0, d2 = 0, S3 = /* @__PURE__ */ i$1((y4) => {
    let E3 = l4.length;
    l4.push(Xn$1(y4, E3 === 0 || E3 === p2, t3)), f2 += 1, d2 += 1;
  }, "pushCommonLine"), _2 = /* @__PURE__ */ i$1((y4) => {
    let E3 = l4.length;
    l4.push(Hn$1(y4, E3 === 0 || E3 === p2, t3)), f2 += 1;
  }, "pushDeleteLine"), O2 = /* @__PURE__ */ i$1((y4) => {
    let E3 = l4.length;
    l4.push(Jn$1(y4, E3 === 0 || E3 === p2, t3)), d2 += 1;
  }, "pushInsertLine");
  for (u2 = 0; u2 !== n3; ) {
    let y4 = u2;
    for (; u2 !== n3 && e3[u2][0] === M$2; )
      u2 += 1;
    if (y4 !== u2)
      if (y4 === 0) {
        u2 > r3 && (y4 = u2 - r3, g4 = y4, h4 = y4, f2 = g4, d2 = h4);
        for (let E3 = y4; E3 !== u2; E3 += 1)
          S3(e3[E3][1]);
      } else if (u2 === n3) {
        let E3 = u2 - y4 > r3 ? y4 + r3 : u2;
        for (let $2 = y4; $2 !== E3; $2 += 1)
          S3(e3[$2][1]);
      } else {
        let E3 = u2 - y4;
        if (E3 > o3) {
          let $2 = y4 + r3;
          for (let R4 = y4; R4 !== $2; R4 += 1)
            S3(e3[R4][1]);
          l4[b4] = xn$2(g4, f2, h4, d2, t3), b4 = l4.length, l4.push("");
          let T2 = E3 - o3;
          g4 = f2 + T2, h4 = d2 + T2, f2 = g4, d2 = h4;
          for (let R4 = u2 - r3; R4 !== u2; R4 += 1)
            S3(e3[R4][1]);
        } else
          for (let $2 = y4; $2 !== u2; $2 += 1)
            S3(e3[$2][1]);
      }
    for (; u2 !== n3 && e3[u2][0] === z$2; )
      _2(e3[u2][1]), u2 += 1;
    for (; u2 !== n3 && e3[u2][0] === j$2; )
      O2(e3[u2][1]), u2 += 1;
  }
  return m4 && (l4[b4] = xn$2(g4, f2, h4, d2, t3)), l4.join(`
`);
}
i$1(ps, "joinAlignedDiffsNoExpand");
function gs$1(e3, t3) {
  return e3.map((n3, r3, o3) => {
    let s2 = n3[1], c4 = r3 === 0 || r3 === o3.length - 1;
    switch (n3[0]) {
      case z$2:
        return Hn$1(s2, c4, t3);
      case j$2:
        return Jn$1(s2, c4, t3);
      default:
        return Xn$1(s2, c4, t3);
    }
  }).join(`
`);
}
i$1(gs$1, "joinAlignedDiffsExpand");
var Et$2 = /* @__PURE__ */ i$1((e3) => e3, "noColor"), Zn = 5, hs = 0;
function ds() {
  return {
    aAnnotation: "Expected",
    aColor: v$1.green,
    aIndicator: "-",
    bAnnotation: "Received",
    bColor: v$1.red,
    bIndicator: "+",
    changeColor: v$1.inverse,
    changeLineTrailingSpaceColor: Et$2,
    commonColor: v$1.dim,
    commonIndicator: " ",
    commonLineTrailingSpaceColor: Et$2,
    compareKeys: void 0,
    contextLines: Zn,
    emptyFirstOrLastLinePlaceholder: "",
    expand: false,
    includeChangeCounts: false,
    omitAnnotationLines: false,
    patchColor: v$1.yellow,
    printBasicPrototype: false,
    truncateThreshold: hs,
    truncateAnnotation: "... Diff result is truncated",
    truncateAnnotationColor: Et$2
  };
}
i$1(ds, "getDefaultOptions");
function ys(e3) {
  return e3 && typeof e3 == "function" ? e3 : void 0;
}
i$1(ys, "getCompareKeys");
function bs(e3) {
  return typeof e3 == "number" && Number.isSafeInteger(e3) && e3 >= 0 ? e3 : Zn;
}
i$1(bs, "getContextLines");
function ge$3(e3 = {}) {
  return {
    ...ds(),
    ...e3,
    compareKeys: ys(e3.compareKeys),
    contextLines: bs(e3.contextLines)
  };
}
i$1(ge$3, "normalizeDiffOptions");
function ye$2(e3) {
  return e3.length === 1 && e3[0].length === 0;
}
i$1(ye$2, "isEmptyString");
function Ss(e3) {
  let t3 = 0, n3 = 0;
  return e3.forEach((r3) => {
    switch (r3[0]) {
      case z$2:
        t3 += 1;
        break;
      case j$2:
        n3 += 1;
        break;
    }
  }), {
    a: t3,
    b: n3
  };
}
i$1(Ss, "countChanges");
function Es$1({ aAnnotation: e3, aColor: t3, aIndicator: n3, bAnnotation: r3, bColor: o3, bIndicator: s2, includeChangeCounts: c4, omitAnnotationLines: a4 }, u2) {
  if (a4)
    return "";
  let m4 = "", p2 = "";
  if (c4) {
    let g4 = String(u2.a), h4 = String(u2.b), f2 = r3.length - e3.length, d2 = " ".repeat(Math.max(0, f2)), S3 = " ".repeat(Math.max(0, -f2)), _2 = h4.length - g4.length, O2 = " ".repeat(Math.max(0, _2)), y4 = " ".repeat(Math.max(0, -_2));
    m4 = `${d2}  ${n3} ${O2}${g4}`, p2 = `${S3}  ${s2} ${y4}${h4}`;
  }
  let l4 = `${n3} ${e3}${m4}`, b4 = `${s2} ${r3}${p2}`;
  return `${t3(l4)}
${o3(b4)}

`;
}
i$1(Es$1, "printAnnotation");
function Rt$1(e3, t3, n3) {
  return Es$1(n3, Ss(e3)) + (n3.expand ? gs$1(e3, n3) : ps(e3, n3)) + (t3 ? n3.truncateAnnotationColor(`
${n3.truncateAnnotation}`) : "");
}
i$1(Rt$1, "printDiffLines");
function We$3(e3, t3, n3) {
  let r3 = ge$3(n3), [o3, s2] = Qn$1(ye$2(e3) ? [] : e3, ye$2(t3) ? [] : t3, r3);
  return Rt$1(o3, s2, r3);
}
i$1(We$3, "diffLinesUnified");
function _s(e3, t3, n3, r3, o3) {
  if (ye$2(e3) && ye$2(n3) && (e3 = [], n3 = []), ye$2(t3) && ye$2(r3) && (t3 = [], r3 = []), e3.length !== n3.length || t3.length !== r3.length)
    return We$3(e3, t3, o3);
  let [s2, c4] = Qn$1(n3, r3, o3), a4 = 0, u2 = 0;
  return s2.forEach((m4) => {
    switch (m4[0]) {
      case z$2:
        m4[1] = e3[a4], a4 += 1;
        break;
      case j$2:
        m4[1] = t3[u2], u2 += 1;
        break;
      default:
        m4[1] = t3[u2], a4 += 1, u2 += 1;
    }
  }), Rt$1(s2, c4, ge$3(o3));
}
i$1(_s, "diffLinesUnified2");
function Qn$1(e3, t3, n3) {
  let r3 = (n3 == null ? void 0 : n3.truncateThreshold) ?? false, o3 = Math.max(Math.floor((n3 == null ? void 0 : n3.truncateThreshold) ?? 0), 0), s2 = r3 ? Math.min(e3.length, o3) : e3.length, c4 = r3 ? Math.min(t3.length, o3) : t3.length, a4 = s2 !== e3.length || c4 !== t3.length, u2 = /* @__PURE__ */ i$1((g4, h4) => e3[g4] === t3[h4], "isCommon"), m4 = [], p2 = 0, l4 = 0;
  for (Gn$1(s2, c4, u2, /* @__PURE__ */ i$1((g4, h4, f2) => {
    for (; p2 !== h4; p2 += 1)
      m4.push(new P$1(z$2, e3[p2]));
    for (; l4 !== f2; l4 += 1)
      m4.push(new P$1(j$2, t3[l4]));
    for (; g4 !== 0; g4 -= 1, p2 += 1, l4 += 1)
      m4.push(new P$1(M$2, t3[l4]));
  }, "foundSubsequence")); p2 !== s2; p2 += 1)
    m4.push(new P$1(z$2, e3[p2]));
  for (; l4 !== c4; l4 += 1)
    m4.push(new P$1(j$2, t3[l4]));
  return [m4, a4];
}
i$1(Qn$1, "diffLinesRaw");
function Dn$1(e3) {
  if (e3 === void 0)
    return "undefined";
  if (e3 === null)
    return "null";
  if (Array.isArray(e3))
    return "array";
  if (typeof e3 == "boolean")
    return "boolean";
  if (typeof e3 == "function")
    return "function";
  if (typeof e3 == "number")
    return "number";
  if (typeof e3 == "string")
    return "string";
  if (typeof e3 == "bigint")
    return "bigint";
  if (typeof e3 == "object") {
    if (e3 != null) {
      if (e3.constructor === RegExp)
        return "regexp";
      if (e3.constructor === Map)
        return "map";
      if (e3.constructor === Set)
        return "set";
      if (e3.constructor === Date)
        return "date";
    }
    return "object";
  } else if (typeof e3 == "symbol")
    return "symbol";
  throw new Error(`value of unknown type: ${e3}`);
}
i$1(Dn$1, "getType");
function Fn$2(e3) {
  return e3.includes(`\r
`) ? `\r
` : `
`;
}
i$1(Fn$2, "getNewLineSymbol");
function Ts(e3, t3, n3) {
  let r3 = (n3 == null ? void 0 : n3.truncateThreshold) ?? false, o3 = Math.max(Math.floor((n3 == null ? void 0 : n3.truncateThreshold) ?? 0), 0), s2 = e3.length, c4 = t3.length;
  if (r3) {
    let g4 = e3.includes(`
`), h4 = t3.includes(`
`), f2 = Fn$2(e3), d2 = Fn$2(t3), S3 = g4 ? `${e3.split(f2, o3).join(f2)}
` : e3, _2 = h4 ? `${t3.split(d2, o3).join(d2)}
` : t3;
    s2 = S3.length, c4 = _2.length;
  }
  let a4 = s2 !== e3.length || c4 !== t3.length, u2 = /* @__PURE__ */ i$1((g4, h4) => e3[g4] === t3[h4], "isCommon"), m4 = 0, p2 = 0, l4 = [];
  return Gn$1(s2, c4, u2, /* @__PURE__ */ i$1((g4, h4, f2) => {
    m4 !== h4 && l4.push(new P$1(z$2, e3.slice(m4, h4))), p2 !== f2 && l4.push(new P$1(j$2, t3.slice(p2, f2))), m4 = h4 + g4, p2 = f2 + g4, l4.push(new P$1(M$2, t3.slice(
      f2,
      p2
    )));
  }, "foundSubsequence")), m4 !== s2 && l4.push(new P$1(z$2, e3.slice(m4))), p2 !== c4 && l4.push(new P$1(j$2, t3.slice(p2))), [l4, a4];
}
i$1(Ts, "diffStrings");
function Cs$1(e3, t3, n3) {
  return t3.reduce((r3, o3) => r3 + (o3[0] === M$2 ? o3[1] : o3[0] === e3 && o3[1].length !== 0 ? n3(o3[1]) : ""), "");
}
i$1(Cs$1, "concatenateRelevantDiffs");
var Pt$2 = class Pt {
  constructor(t3, n3) {
    __publicField(this, "op");
    __publicField(this, "line");
    __publicField(this, "lines");
    __publicField(this, "changeColor");
    this.op = t3, this.line = [], this.lines = [], this.changeColor = n3;
  }
  pushSubstring(t3) {
    this.pushDiff(new P$1(this.op, t3));
  }
  pushLine() {
    this.lines.push(this.line.length !== 1 ? new P$1(this.op, Cs$1(this.op, this.line, this.changeColor)) : this.line[0][0] === this.op ? this.line[0] : new P$1(this.op, this.line[0][1])), this.line.length = 0;
  }
  isLineEmpty() {
    return this.line.length === 0;
  }
  // Minor input to buffer.
  pushDiff(t3) {
    this.line.push(t3);
  }
  // Main input to buffer.
  align(t3) {
    let n3 = t3[1];
    if (n3.includes(`
`)) {
      let r3 = n3.split(`
`), o3 = r3.length - 1;
      r3.forEach((s2, c4) => {
        c4 < o3 ? (this.pushSubstring(s2), this.pushLine()) : s2.length !== 0 && this.pushSubstring(s2);
      });
    } else
      this.pushDiff(t3);
  }
  // Output from buffer.
  moveLinesTo(t3) {
    this.isLineEmpty() || this.pushLine(), t3.push(...this.lines), this.lines.length = 0;
  }
};
i$1(Pt$2, "ChangeBuffer");
var Ue$3 = Pt$2, Nt$2 = class Nt {
  constructor(t3, n3) {
    __publicField(this, "deleteBuffer");
    __publicField(this, "insertBuffer");
    __publicField(this, "lines");
    this.deleteBuffer = t3, this.insertBuffer = n3, this.lines = [];
  }
  pushDiffCommonLine(t3) {
    this.lines.push(t3);
  }
  pushDiffChangeLines(t3) {
    let n3 = t3[1].length === 0;
    (!n3 || this.deleteBuffer.isLineEmpty()) && this.deleteBuffer.pushDiff(t3), (!n3 || this.insertBuffer.isLineEmpty()) && this.insertBuffer.pushDiff(
      t3
    );
  }
  flushChangeLines() {
    this.deleteBuffer.moveLinesTo(this.lines), this.insertBuffer.moveLinesTo(this.lines);
  }
  // Input to buffer.
  align(t3) {
    let n3 = t3[0], r3 = t3[1];
    if (r3.includes(`
`)) {
      let o3 = r3.split(`
`), s2 = o3.length - 1;
      o3.forEach((c4, a4) => {
        if (a4 === 0) {
          let u2 = new P$1(n3, c4);
          this.deleteBuffer.isLineEmpty() && this.insertBuffer.isLineEmpty() ? (this.flushChangeLines(), this.pushDiffCommonLine(u2)) : (this.pushDiffChangeLines(u2), this.flushChangeLines());
        } else a4 < s2 ? this.pushDiffCommonLine(new P$1(n3, c4)) : c4.length !== 0 && this.pushDiffChangeLines(new P$1(n3, c4));
      });
    } else
      this.pushDiffChangeLines(t3);
  }
  // Output from buffer.
  getLines() {
    return this.flushChangeLines(), this.lines;
  }
};
i$1(Nt$2, "CommonBuffer");
var Tt$2 = Nt$2;
function Os(e3, t3) {
  let n3 = new Ue$3(z$2, t3), r3 = new Ue$3(j$2, t3), o3 = new Tt$2(n3, r3);
  return e3.forEach((s2) => {
    switch (s2[0]) {
      case z$2:
        n3.align(s2);
        break;
      case j$2:
        r3.align(s2);
        break;
      default:
        o3.align(s2);
    }
  }), o3.getLines();
}
i$1(Os, "getAlignedDiffs");
function $s$1(e3, t3) {
  if (t3) {
    let n3 = e3.length - 1;
    return e3.some((r3, o3) => r3[0] === M$2 && (o3 !== n3 || r3[1] !== `
`));
  }
  return e3.some((n3) => n3[0] === M$2);
}
i$1($s$1, "hasCommonDiff");
function ws$1(e3, t3, n3) {
  if (e3 !== t3 && e3.length !== 0 && t3.length !== 0) {
    let r3 = e3.includes(`
`) || t3.includes(`
`), [o3, s2] = vn$1(r3 ? `${e3}
` : e3, r3 ? `${t3}
` : t3, true, n3);
    if ($s$1(o3, r3)) {
      let c4 = ge$3(n3), a4 = Os(o3, c4.changeColor);
      return Rt$1(a4, s2, c4);
    }
  }
  return We$3(e3.split(`
`), t3.split(`
`), n3);
}
i$1(ws$1, "diffStringsUnified");
function vn$1(e3, t3, n3, r3) {
  let [o3, s2] = Ts(e3, t3, r3);
  return n3 && ss(o3), [o3, s2];
}
i$1(vn$1, "diffStringsRaw");
function Ct$2(e3, t3) {
  let { commonColor: n3 } = ge$3(t3);
  return n3(e3);
}
i$1(Ct$2, "getCommonMessage");
var { AsymmetricMatcher: Rs$1, DOMCollection: As$1, DOMElement: Ps, Immutable: Ns, ReactElement: Is, ReactTestComponent: Ms } = _e$3, er$2 = [
  Ms,
  Is,
  Ps,
  As$1,
  Ns,
  Rs$1,
  _e$3.Error
], Ot$1 = {
  maxDepth: 20,
  plugins: er$2
}, tr$2 = {
  callToJSON: false,
  maxDepth: 8,
  plugins: er$2
};
function Ls(e3, t3, n3) {
  if (Object.is(e3, t3))
    return "";
  let r3 = Dn$1(e3), o3 = r3, s2 = false;
  if (r3 === "object" && typeof e3.asymmetricMatch == "function") {
    if (e3.$$typeof !== Symbol.for("jest.asymmetricMatcher") || typeof e3.getExpectedType != "function")
      return;
    o3 = e3.getExpectedType(), s2 = o3 === "string";
  }
  if (o3 !== Dn$1(t3)) {
    let d2 = function(O2) {
      return O2.length <= f2 ? O2 : `${O2.slice(0, f2)}...`;
    };
    i$1(d2, "truncate");
    let { aAnnotation: c4, aColor: a4, aIndicator: u2, bAnnotation: m4, bColor: p2, bIndicator: l4 } = ge$3(n3), b4 = $t$1(tr$2, n3), g4 = X$1(e3, b4), h4 = X$1(
      t3,
      b4
    ), f2 = 1e5;
    g4 = d2(g4), h4 = d2(h4);
    let S3 = `${a4(`${u2} ${c4}:`)} 
${g4}`, _2 = `${p2(`${l4} ${m4}:`)} 
${h4}`;
    return `${S3}

${_2}`;
  }
  if (!s2)
    switch (r3) {
      case "string":
        return We$3(e3.split(`
`), t3.split(`
`), n3);
      case "boolean":
      case "number":
        return xs(e3, t3, n3);
      case "map":
        return _t$2(jn$1(e3), jn$1(t3), n3);
      case "set":
        return _t$2(kn$2(e3), kn$2(t3), n3);
      default:
        return _t$2(e3, t3, n3);
    }
}
i$1(Ls, "diff");
function xs(e3, t3, n3) {
  let r3 = X$1(e3, Ot$1), o3 = X$1(t3, Ot$1);
  return r3 === o3 ? "" : We$3(r3.split(`
`), o3.split(`
`), n3);
}
i$1(xs, "comparePrimitive");
function jn$1(e3) {
  return new Map(Array.from(e3.entries()).sort());
}
i$1(jn$1, "sortMap");
function kn$2(e3) {
  return new Set(Array.from(e3.values()).sort());
}
i$1(kn$2, "sortSet");
function _t$2(e3, t3, n3) {
  let r3, o3 = false;
  try {
    let c4 = $t$1(Ot$1, n3);
    r3 = Bn$1(e3, t3, c4, n3);
  } catch {
    o3 = true;
  }
  let s2 = Ct$2(Kn$1, n3);
  if (r3 === void 0 || r3 === s2) {
    let c4 = $t$1(tr$2, n3);
    r3 = Bn$1(e3, t3, c4, n3), r3 !== s2 && !o3 && (r3 = `${Ct$2(as, n3)}

${r3}`);
  }
  return r3;
}
i$1(_t$2, "compareObjects");
function $t$1(e3, t3) {
  let { compareKeys: n3, printBasicPrototype: r3, maxDepth: o3 } = ge$3(t3);
  return {
    ...e3,
    compareKeys: n3,
    printBasicPrototype: r3,
    maxDepth: o3 ?? e3.maxDepth
  };
}
i$1($t$1, "getFormatOptions");
function Bn$1(e3, t3, n3, r3) {
  let o3 = {
    ...n3,
    indent: 0
  }, s2 = X$1(e3, o3), c4 = X$1(t3, o3);
  if (s2 === c4)
    return Ct$2(Kn$1, r3);
  {
    let a4 = X$1(e3, n3), u2 = X$1(t3, n3);
    return _s(a4.split(`
`), u2.split(`
`), s2.split(`
`), c4.split(`
`), r3);
  }
}
i$1(Bn$1, "getObjectsDifference");
var zn = 2e4;
function Yn$1(e3) {
  return Be$2(e3) === "Object" && typeof e3.asymmetricMatch == "function";
}
i$1(Yn$1, "isAsymmetricMatcher");
function Un(e3, t3) {
  let n3 = Be$2(e3), r3 = Be$2(t3);
  return n3 === r3 && (n3 === "Object" || n3 === "Array");
}
i$1(Un, "isReplaceable");
function nr$2(e3, t3, n3) {
  let { aAnnotation: r3, bAnnotation: o3 } = ge$3(n3);
  if (typeof t3 == "string" && typeof e3 == "string" && t3.length > 0 && e3.length > 0 && t3.length <= zn && e3.length <= zn && t3 !== e3) {
    if (t3.includes(`
`) || e3.includes(`
`))
      return ws$1(t3, e3, n3);
    let [p2] = vn$1(t3, e3, true), l4 = p2.some((f2) => f2[0] === M$2), b4 = Ds(r3, o3), g4 = b4(r3) + ks(Wn(p2, z$2, l4)), h4 = b4(o3) + js$1(Wn(p2, j$2, l4));
    return `${g4}
${h4}`;
  }
  let s2 = St$2(t3, { forceWritable: true }), c4 = St$2(e3, { forceWritable: true }), { replacedExpected: a4, replacedActual: u2 } = rr$2(c4, s2);
  return Ls(a4, u2, n3);
}
i$1(nr$2, "printDiffOrStringify");
function rr$2(e3, t3, n3 = /* @__PURE__ */ new WeakSet(), r3 = /* @__PURE__ */ new WeakSet()) {
  return e3 instanceof Error && t3 instanceof Error && typeof e3.cause < "u" && typeof t3.cause > "u" ? (delete e3.cause, {
    replacedActual: e3,
    replacedExpected: t3
  }) : Un(e3, t3) ? n3.has(e3) || r3.has(t3) ? {
    replacedActual: e3,
    replacedExpected: t3
  } : (n3.add(e3), r3.add(t3), bt$2(t3).forEach((o3) => {
    let s2 = t3[o3], c4 = e3[o3];
    if (Yn$1(s2))
      s2.asymmetricMatch(c4) && (e3[o3] = s2);
    else if (Yn$1(c4))
      c4.asymmetricMatch(s2) && (t3[o3] = c4);
    else if (Un(c4, s2)) {
      let a4 = rr$2(c4, s2, n3, r3);
      e3[o3] = a4.replacedActual, t3[o3] = a4.replacedExpected;
    }
  }), {
    replacedActual: e3,
    replacedExpected: t3
  }) : {
    replacedActual: e3,
    replacedExpected: t3
  };
}
i$1(rr$2, "replaceAsymmetricMatcher");
function Ds(...e3) {
  let t3 = e3.reduce((n3, r3) => r3.length > n3 ? r3.length : n3, 0);
  return (n3) => `${n3}: ${" ".repeat(t3 - n3.length)}`;
}
i$1(Ds, "getLabelPrinter");
var Fs = "·";
function or$2(e3) {
  return e3.replace(/\s+$/gm, (t3) => Fs.repeat(t3.length));
}
i$1(or$2, "replaceTrailingSpaces");
function js$1(e3) {
  return v$1.red(or$2(pe$2(e3)));
}
i$1(js$1, "printReceived");
function ks(e3) {
  return v$1.green(or$2(pe$2(e3)));
}
i$1(ks, "printExpected");
function Wn(e3, t3, n3) {
  return e3.reduce((r3, o3) => r3 + (o3[0] === M$2 ? o3[1] : o3[0] === t3 ? n3 ? v$1.inverse(o3[1]) : o3[1] : ""), "");
}
i$1(Wn, "getCommonAndChangedSubstrings");
var Bs = "@@__IMMUTABLE_RECORD__@@", zs = "@@__IMMUTABLE_ITERABLE__@@";
function Ys(e3) {
  return e3 && (e3[zs] || e3[Bs]);
}
i$1(Ys, "isImmutable");
var Us = Object.getPrototypeOf({});
function sr$2(e3) {
  return e3 instanceof Error ? `<unserializable>: ${e3.message}` : typeof e3 == "string" ? `<unserializable>: ${e3}` : "<unserializable>";
}
i$1(sr$2, "getUnserializableMessage");
function le$2(e3, t3 = /* @__PURE__ */ new WeakMap()) {
  if (!e3 || typeof e3 == "string")
    return e3;
  if (e3 instanceof Error && "toJSON" in e3 && typeof e3.toJSON == "function") {
    let n3 = e3.toJSON();
    return n3 && n3 !== e3 && typeof n3 == "object" && (typeof e3.message == "string" && Ve$2(() => n3.message ?? (n3.message = e3.message)), typeof e3.stack == "string" && Ve$2(() => n3.stack ?? (n3.stack = e3.stack)), typeof e3.name == "string" && Ve$2(() => n3.name ?? (n3.name = e3.name)), e3.cause != null && Ve$2(() => n3.cause ?? (n3.cause = le$2(e3.cause, t3)))), le$2(n3, t3);
  }
  if (typeof e3 == "function")
    return `Function<${e3.name || "anonymous"}>`;
  if (typeof e3 == "symbol")
    return e3.toString();
  if (typeof e3 != "object")
    return e3;
  if (typeof Buffer < "u" && e3 instanceof Buffer)
    return `<Buffer(${e3.length}) ...>`;
  if (typeof Uint8Array < "u" && e3 instanceof Uint8Array)
    return `<Uint8Array(${e3.length}) ...>`;
  if (Ys(e3))
    return le$2(e3.toJSON(), t3);
  if (e3 instanceof Promise || e3.constructor && e3.constructor.prototype === "AsyncFunction")
    return "Promise";
  if (typeof Element < "u" && e3 instanceof Element)
    return e3.tagName;
  if (typeof e3.asymmetricMatch == "function")
    return `${e3.toString()} ${wn$1(e3.sample)}`;
  if (typeof e3.toJSON == "function")
    return le$2(e3.toJSON(), t3);
  if (t3.has(e3))
    return t3.get(e3);
  if (Array.isArray(e3)) {
    let n3 = new Array(e3.length);
    return t3.set(e3, n3), e3.forEach((r3, o3) => {
      try {
        n3[o3] = le$2(r3, t3);
      } catch (s2) {
        n3[o3] = sr$2(s2);
      }
    }), n3;
  } else {
    let n3 = /* @__PURE__ */ Object.create(null);
    t3.set(e3, n3);
    let r3 = e3;
    for (; r3 && r3 !== Us; )
      Object.getOwnPropertyNames(r3).forEach((o3) => {
        if (!(o3 in n3))
          try {
            n3[o3] = le$2(e3[o3], t3);
          } catch (s2) {
            delete n3[o3], n3[o3] = sr$2(s2);
          }
      }), r3 = Object.getPrototypeOf(r3);
    return n3;
  }
}
i$1(le$2, "serializeValue");
function Ve$2(e3) {
  try {
    return e3();
  } catch {
  }
}
i$1(Ve$2, "safe");
function Ws(e3) {
  return e3.replace(/__(vite_ssr_import|vi_import)_\d+__\./g, "");
}
i$1(Ws, "normalizeErrorMessage");
function It$2(e3, t3, n3 = /* @__PURE__ */ new WeakSet()) {
  if (!e3 || typeof e3 != "object")
    return { message: String(e3) };
  let r3 = e3;
  (r3.showDiff || r3.showDiff === void 0 && r3.expected !== void 0 && r3.actual !== void 0) && (r3.diff = nr$2(r3.actual, r3.expected, {
    ...t3,
    ...r3.diffOptions
  })), "expected" in r3 && typeof r3.expected != "string" && (r3.expected = pe$2(r3.expected, 10)), "actual" in r3 && typeof r3.actual != "string" && (r3.actual = pe$2(r3.actual, 10));
  try {
    typeof r3.message == "string" && (r3.message = Ws(r3.message));
  } catch {
  }
  try {
    !n3.has(r3) && typeof r3.cause == "object" && (n3.add(r3), r3.cause = It$2(r3.cause, t3, n3));
  } catch {
  }
  try {
    return le$2(r3);
  } catch (o3) {
    return le$2(new Error(`Failed to fully serialize error: ${o3 == null ? void 0 : o3.message}
Inner error message: ${r3 == null ? void 0 : r3.message}`));
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
), cr$2 = /* @__PURE__ */ i$1((e3) => Object.prototype.toString.call(e3) === "[object Object]", "isObject"), Js = /* @__PURE__ */ i$1((e3) => Object.prototype.toString.call(e3) === "[object Module]", "isModule"), Xs$1 = /* @__PURE__ */ i$1((e3) => {
  if (!cr$2(e3) && !Js(e3))
    return false;
  if (e3.constructor === void 0)
    return true;
  let t3 = e3.constructor.prototype;
  return !!cr$2(t3);
}, "isInstrumentable"), Zs = /* @__PURE__ */ i$1((e3) => {
  try {
    return new e3.constructor();
  } catch {
    return {};
  }
}, "construct"), Mt$1 = /* @__PURE__ */ i$1(() => ({
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
}), "getInitialState"), ur$2 = /* @__PURE__ */ i$1((e3, t3 = false) => {
  let n3 = (t3 ? e3.shadowCalls : e3.calls).filter((o3) => o3.retain);
  if (!n3.length)
    return;
  let r3 = new Map(
    Array.from(e3.callRefsByResult.entries()).filter(([, o3]) => o3.retain)
  );
  return { cursor: n3.length, calls: n3, callRefsByResult: r3 };
}, "getRetainedState"), xt$2 = class xt {
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
    let t3 = /* @__PURE__ */ i$1(({
      storyId: u2,
      renderPhase: m4,
      isPlaying: p2 = true,
      isDebugging: l4 = false
    }) => {
      let b4 = this.getState(u2);
      this.setState(u2, {
        ...Mt$1(),
        ...ur$2(b4, l4),
        renderPhase: m4 || b4.renderPhase,
        shadowCalls: l4 ? b4.shadowCalls : [],
        chainedCallIds: l4 ? b4.chainedCallIds : /* @__PURE__ */ new Set(),
        playUntil: l4 ? b4.playUntil : void 0,
        isPlaying: p2,
        isDebugging: l4
      }), this.sync(u2);
    }, "resetState"), n3 = /* @__PURE__ */ i$1((u2) => ({ storyId: m4, playUntil: p2 }) => {
      this.getState(m4).isDebugging || this.setState(m4, ({ calls: b4 }) => ({
        calls: [],
        shadowCalls: b4.map((g4) => ({ ...g4, status: "waiting" })),
        isDebugging: true
      }));
      let l4 = this.getLog(m4);
      this.setState(m4, ({ shadowCalls: b4 }) => {
        var _a2;
        if (p2 || !l4.length)
          return { playUntil: p2 };
        let g4 = b4.findIndex((h4) => h4.id === l4[0].callId);
        return {
          playUntil: (_a2 = b4.slice(0, g4).filter((h4) => {
            var _a3;
            return h4.interceptable && !((_a3 = h4.ancestors) == null ? void 0 : _a3.length);
          }).slice(-1)[0]) == null ? void 0 : _a2.id
        };
      }), u2.emit(ir$1, { storyId: m4, isDebugging: true });
    }, "start"), r3 = /* @__PURE__ */ i$1((u2) => ({ storyId: m4 }) => {
      var _a2;
      let p2 = this.getLog(m4).filter((b4) => {
        var _a3;
        return !((_a3 = b4.ancestors) == null ? void 0 : _a3.length);
      }), l4 = p2.reduceRight((b4, g4, h4) => b4 >= 0 || g4.status === "waiting" ? b4 : h4, -1);
      n3(u2)({ storyId: m4, playUntil: (_a2 = p2[l4 - 1]) == null ? void 0 : _a2.callId });
    }, "back"), o3 = /* @__PURE__ */ i$1((u2) => ({ storyId: m4, callId: p2 }) => {
      var _a2;
      let { calls: l4, shadowCalls: b4, resolvers: g4 } = this.getState(m4), h4 = l4.find(({ id: d2 }) => d2 === p2), f2 = b4.find(({ id: d2 }) => d2 === p2);
      if (!h4 && f2 && Object.values(g4).length > 0) {
        let d2 = (_a2 = this.getLog(m4).find((S3) => S3.status === "waiting")) == null ? void 0 : _a2.callId;
        f2.id !== d2 && this.setState(m4, { playUntil: f2.id }), Object.values(g4).forEach((S3) => S3());
      } else
        n3(u2)({ storyId: m4, playUntil: p2 });
    }, "goto"), s2 = /* @__PURE__ */ i$1((u2) => ({ storyId: m4 }) => {
      var _a2;
      let { resolvers: p2 } = this.getState(m4);
      if (Object.values(p2).length > 0)
        Object.values(p2).forEach((l4) => l4());
      else {
        let l4 = (_a2 = this.getLog(m4).find((b4) => b4.status === "waiting")) == null ? void 0 : _a2.callId;
        l4 ? n3(u2)({ storyId: m4, playUntil: l4 }) : c4({ storyId: m4 });
      }
    }, "next"), c4 = /* @__PURE__ */ i$1(({ storyId: u2 }) => {
      this.setState(u2, { playUntil: void 0, isDebugging: false }), Object.values(this.getState(u2).resolvers).forEach((m4) => m4());
    }, "end"), a4 = /* @__PURE__ */ i$1(({
      storyId: u2,
      newPhase: m4
    }) => {
      let { isDebugging: p2 } = this.getState(u2);
      if (m4 === "preparing" && p2)
        return t3({ storyId: u2, renderPhase: m4 });
      if (m4 === "playing")
        return t3({ storyId: u2, renderPhase: m4, isDebugging: p2 });
      m4 === "played" ? this.setState(u2, {
        renderPhase: m4,
        isLocked: false,
        isPlaying: false,
        isDebugging: false
      }) : m4 === "errored" ? this.setState(u2, {
        renderPhase: m4,
        isLocked: false,
        isPlaying: false
      }) : m4 === "aborted" ? this.setState(u2, {
        renderPhase: m4,
        isLocked: true,
        isPlaying: false
      }) : this.setState(u2, {
        renderPhase: m4
      }), this.sync(u2);
    }, "renderPhaseChanged");
    qe$3 && qe$3.ready().then(() => {
      this.channel = qe$3.getChannel(), this.channel.on(ir$1, t3), this.channel.on(Gs$1, a4), this.channel.on(Ks, () => {
        this.initialized ? this.cleanup() : this.initialized = true;
      }), this.channel.on(ne$3.START, n3(this.channel)), this.channel.on(ne$3.BACK, r3(this.channel)), this.channel.on(ne$3.GOTO, o3(this.channel)), this.channel.on(ne$3.NEXT, s2(this.channel)), this.channel.on(ne$3.END, c4);
    });
  }
  getState(t3) {
    return this.state[t3] || Mt$1();
  }
  setState(t3, n3) {
    if (t3) {
      let r3 = this.getState(t3), o3 = typeof n3 == "function" ? n3(r3) : n3;
      this.state = { ...this.state, [t3]: { ...r3, ...o3 } }, this.updateParentWindowState();
    }
  }
  cleanup() {
    var _a2;
    this.state = Object.entries(this.state).reduce(
      (r3, [o3, s2]) => {
        let c4 = ur$2(s2);
        return c4 && (r3[o3] = Object.assign(Mt$1(), c4)), r3;
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
  getLog(t3) {
    let { calls: n3, shadowCalls: r3 } = this.getState(t3), o3 = [...r3];
    n3.forEach((c4, a4) => {
      o3[a4] = c4;
    });
    let s2 = /* @__PURE__ */ new Set();
    return o3.reduceRight((c4, a4) => (a4.args.forEach((u2) => {
      (u2 == null ? void 0 : u2.__callId__) && s2.add(u2.__callId__);
    }), a4.path.forEach((u2) => {
      u2.__callId__ && s2.add(u2.__callId__);
    }), (a4.interceptable || a4.exception) && !s2.has(a4.id) && (c4.unshift({ callId: a4.id, status: a4.status, ancestors: a4.ancestors }), s2.add(a4.id)), c4), []);
  }
  // Traverses the object structure to recursively patch all function properties.
  // Returns the original object, or a new object with the same constructor,
  // depending on whether it should mutate.
  instrument(t3, n3, r3 = 0) {
    if (!Xs$1(t3))
      return t3;
    let { mutate: o3 = false, path: s2 = [] } = n3, c4 = n3.getKeys ? n3.getKeys(t3, r3) : Object.keys(t3);
    return r3 += 1, c4.reduce(
      (a4, u2) => {
        let m4 = vs$1(t3, u2);
        if (typeof (m4 == null ? void 0 : m4.get) == "function") {
          if (m4.configurable) {
            let l4 = /* @__PURE__ */ i$1(() => {
              var _a2, _b2;
              return (_b2 = (_a2 = m4 == null ? void 0 : m4.get) == null ? void 0 : _a2.bind(t3)) == null ? void 0 : _b2();
            }, "getter");
            Object.defineProperty(a4, u2, {
              get: /* @__PURE__ */ i$1(() => this.instrument(l4(), { ...n3, path: s2.concat(u2) }, r3), "get")
            });
          }
          return a4;
        }
        let p2 = t3[u2];
        return typeof p2 != "function" ? (a4[u2] = this.instrument(p2, { ...n3, path: s2.concat(u2) }, r3), a4) : "__originalFn__" in p2 && typeof p2.__originalFn__ == "function" ? (a4[u2] = p2, a4) : (a4[u2] = (...l4) => this.track(u2, p2, t3, l4, n3), a4[u2].__originalFn__ = p2, Object.defineProperty(
          a4[u2],
          "name",
          { value: u2, writable: false }
        ), Object.keys(p2).length > 0 && Object.assign(
          a4[u2],
          this.instrument({ ...p2 }, { ...n3, path: s2.concat(u2) }, r3)
        ), a4);
      },
      o3 ? t3 : Zs(t3)
    );
  }
  // Monkey patch an object method to record calls.
  // Returns a function that invokes the original function, records the invocation ("call") and
  // returns the original result.
  track(t3, n3, r3, o3, s2) {
    var _a2, _b2, _c2, _d3;
    let c4 = ((_a2 = o3 == null ? void 0 : o3[0]) == null ? void 0 : _a2.__storyId__) || ((_d3 = (_c2 = (_b2 = Z$3.__STORYBOOK_PREVIEW__) == null ? void 0 : _b2.selectionStore) == null ? void 0 : _c2.selection) == null ? void 0 : _d3.storyId), { cursor: a4, ancestors: u2 } = this.getState(
      c4
    );
    this.setState(c4, { cursor: a4 + 1 });
    let m4 = `${u2.slice(-1)[0] || c4} [${a4}] ${t3}`, { path: p2 = [], intercept: l4 = false, retain: b4 = false } = s2, g4 = typeof l4 == "function" ? l4(
      t3,
      p2
    ) : l4, h4 = { id: m4, cursor: a4, storyId: c4, ancestors: u2, path: p2, method: t3, args: o3, interceptable: g4, retain: b4 }, d2 = (g4 && !u2.length ? this.intercept : this.invoke).call(this, n3, r3, h4, s2);
    return this.instrument(d2, { ...s2, mutate: true, path: [{ __callId__: h4.id }] });
  }
  intercept(t3, n3, r3, o3) {
    let { chainedCallIds: s2, isDebugging: c4, playUntil: a4 } = this.getState(r3.storyId), u2 = s2.has(r3.id);
    return !c4 || u2 || a4 ? (a4 === r3.id && this.setState(r3.storyId, { playUntil: void 0 }), this.invoke(t3, n3, r3, o3)) : new Promise((m4) => {
      this.setState(r3.storyId, ({ resolvers: p2 }) => ({
        isLocked: false,
        resolvers: { ...p2, [r3.id]: m4 }
      }));
    }).then(() => (this.setState(r3.storyId, (m4) => {
      let { [r3.id]: p2, ...l4 } = m4.resolvers;
      return { isLocked: true, resolvers: l4 };
    }), this.invoke(t3, n3, r3, o3)));
  }
  invoke(t3, n3, r3, o3) {
    let { callRefsByResult: s2, renderPhase: c4 } = this.getState(r3.storyId), a4 = 25, u2 = /* @__PURE__ */ i$1((l4, b4, g4) => {
      var _a2, _b2, _c2;
      if (g4.includes(l4))
        return "[Circular]";
      if (g4 = [...g4, l4], b4 > a4)
        return "...";
      if (s2.has(l4))
        return s2.get(l4);
      if (l4 instanceof Array)
        return l4.map((h4) => u2(h4, ++b4, g4));
      if (l4 instanceof Date)
        return { __date__: { value: l4.toISOString() } };
      if (l4 instanceof Error) {
        let { name: h4, message: f2, stack: d2 } = l4;
        return { __error__: { name: h4, message: f2, stack: d2 } };
      }
      if (l4 instanceof RegExp) {
        let { flags: h4, source: f2 } = l4;
        return { __regexp__: { flags: h4, source: f2 } };
      }
      if (l4 instanceof ((_a2 = Z$3.window) == null ? void 0 : _a2.HTMLElement)) {
        let { prefix: h4, localName: f2, id: d2, classList: S3, innerText: _2 } = l4, O2 = Array.from(S3);
        return { __element__: { prefix: h4, localName: f2, id: d2, classNames: O2, innerText: _2 } };
      }
      return typeof l4 == "function" ? {
        __function__: { name: "getMockName" in l4 ? l4.getMockName() : l4.name }
      } : typeof l4 == "symbol" ? { __symbol__: { description: l4.description } } : typeof l4 == "object" && ((_b2 = l4 == null ? void 0 : l4.constructor) == null ? void 0 : _b2.name) && ((_c2 = l4 == null ? void 0 : l4.constructor) == null ? void 0 : _c2.name) !== "Object" ? { __class__: { name: l4.constructor.name } } : Object.prototype.toString.call(l4) === "[object Object]" ? Object.fromEntries(
        Object.entries(l4).map(([h4, f2]) => [h4, u2(f2, ++b4, g4)])
      ) : l4;
    }, "serializeValues"), m4 = {
      ...r3,
      args: r3.args.map((l4) => u2(l4, 0, []))
    };
    r3.path.forEach((l4) => {
      (l4 == null ? void 0 : l4.__callId__) && this.setState(r3.storyId, ({ chainedCallIds: b4 }) => ({
        chainedCallIds: new Set(Array.from(b4).concat(l4.__callId__))
      }));
    });
    let p2 = /* @__PURE__ */ i$1((l4) => {
      var _a2;
      if (l4 instanceof Error) {
        let { name: b4, message: g4, stack: h4, callId: f2 = r3.id } = l4, {
          showDiff: d2 = void 0,
          diff: S3 = void 0,
          actual: _2 = void 0,
          expected: O2 = void 0
        } = l4.name === "AssertionError" ? It$2(l4) : l4, y4 = { name: b4, message: g4, stack: h4, callId: f2, showDiff: d2, diff: S3, actual: _2, expected: O2 };
        if (this.update({ ...m4, status: "error", exception: y4 }), this.setState(r3.storyId, (E3) => ({
          callRefsByResult: new Map([
            ...Array.from(E3.callRefsByResult.entries()),
            [l4, { __callId__: r3.id, retain: r3.retain }]
          ])
        })), (_a2 = r3.ancestors) == null ? void 0 : _a2.length)
          throw Object.prototype.hasOwnProperty.call(l4, "callId") || Object.defineProperty(l4, "callId", { value: r3.id }), l4;
      }
      throw l4;
    }, "handleException");
    try {
      if (c4 === "played" && !r3.retain)
        throw Hs;
      let b4 = (o3.getArgs ? o3.getArgs(r3, this.getState(r3.storyId)) : r3.args).map((h4) => typeof h4 != "function" || ei$1(h4) || Object.keys(h4).length ? h4 : (...f2) => {
        let { cursor: d2, ancestors: S3 } = this.getState(r3.storyId);
        this.setState(r3.storyId, { cursor: 0, ancestors: [...S3, r3.id] });
        let _2 = /* @__PURE__ */ i$1(() => this.setState(r3.storyId, { cursor: d2, ancestors: S3 }), "restore"), O2 = false;
        try {
          let y4 = h4(...f2);
          return y4 instanceof Promise ? (O2 = true, y4.finally(_2)) : y4;
        } finally {
          O2 || _2();
        }
      }), g4 = t3.apply(n3, b4);
      return g4 && ["object", "function", "symbol"].includes(typeof g4) && this.setState(r3.storyId, (h4) => ({
        callRefsByResult: new Map([
          ...Array.from(h4.callRefsByResult.entries()),
          [g4, { __callId__: r3.id, retain: r3.retain }]
        ])
      })), this.update({
        ...m4,
        status: g4 instanceof Promise ? "active" : "done"
      }), g4 instanceof Promise ? g4.then((h4) => (this.update({ ...m4, status: "done" }), h4), p2) : g4;
    } catch (l4) {
      return p2(l4);
    }
  }
  // Sends the call info to the manager and synchronizes the log.
  update(t3) {
    var _a2;
    (_a2 = this.channel) == null ? void 0 : _a2.emit(ne$3.CALL, t3), this.setState(t3.storyId, ({ calls: n3 }) => {
      let r3 = n3.concat(t3).reduce((o3, s2) => Object.assign(o3, { [s2.id]: s2 }), {});
      return {
        // Calls are sorted to ensure parent calls always come before calls in their callback.
        calls: Object.values(r3).sort(
          (o3, s2) => o3.id.localeCompare(s2.id, void 0, { numeric: true })
        )
      };
    }), this.sync(t3.storyId);
  }
  // Builds a log of interceptable calls and control states and sends it to the manager.
  // Uses a 0ms debounce because this might get called many times in one tick.
  sync(t3) {
    let n3 = /* @__PURE__ */ i$1(() => {
      var _a2, _b2, _c2;
      let { isLocked: r3, isPlaying: o3 } = this.getState(t3), s2 = this.getLog(t3), c4 = (_a2 = s2.filter(({ ancestors: l4 }) => !l4.length).find((l4) => l4.status === "waiting")) == null ? void 0 : _a2.callId, a4 = s2.some((l4) => l4.status === "active");
      if (this.detached || r3 || a4 || s2.length === 0) {
        let b4 = { controlStates: {
          detached: this.detached,
          start: false,
          back: false,
          goto: false,
          next: false,
          end: false
        }, logItems: s2 };
        (_b2 = this.channel) == null ? void 0 : _b2.emit(ne$3.SYNC, b4);
        return;
      }
      let u2 = s2.some(
        (l4) => l4.status === "done" || l4.status === "error"
      ), p2 = { controlStates: {
        detached: this.detached,
        start: u2,
        back: u2,
        goto: true,
        next: o3,
        end: o3
      }, logItems: s2, pausedAt: c4 };
      (_c2 = this.channel) == null ? void 0 : _c2.emit(ne$3.SYNC, p2);
    }, "synchronize");
    this.setState(t3, ({ syncTimeout: r3 }) => (clearTimeout(r3), { syncTimeout: setTimeout(n3, 0) }));
  }
};
i$1(xt$2, "Instrumenter");
var Lt$2 = xt$2;
function Qs$1(e3, t3 = {}) {
  var _a2, _b2, _c2, _d3, _e2, _f2, _g2, _h;
  try {
    let n3 = false, r3 = false;
    return ((_c2 = (_b2 = (_a2 = Z$3.window) == null ? void 0 : _a2.location) == null ? void 0 : _b2.search) == null ? void 0 : _c2.includes("instrument=true")) ? n3 = true : ((_f2 = (_e2 = (_d3 = Z$3.window) == null ? void 0 : _d3.location) == null ? void 0 : _e2.search) == null ? void 0 : _f2.includes("instrument=false")) && (r3 = true), ((_g2 = Z$3.window) == null ? void 0 : _g2.parent) === Z$3.window && !n3 || r3 ? e3 : (Z$3.window && !Z$3.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ && (Z$3.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ = new Lt$2()), ((_h = Z$3.window) == null ? void 0 : _h.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__).instrument(e3, t3));
  } catch (n3) {
    return qs.warn(n3), e3;
  }
}
i$1(Qs$1, "instrument");
function vs$1(e3, t3) {
  let n3 = e3;
  for (; n3 != null; ) {
    let r3 = Object.getOwnPropertyDescriptor(n3, t3);
    if (r3)
      return r3;
    n3 = Object.getPrototypeOf(n3);
  }
}
i$1(vs$1, "getPropertyDescriptor");
function ei$1(e3) {
  if (typeof e3 != "function")
    return false;
  let t3 = Object.getOwnPropertyDescriptor(e3, "prototype");
  return t3 ? !t3.writable : false;
}
i$1(ei$1, "isClass");
var Br$1 = Object.create;
var ce$2 = Object.defineProperty;
var zr = Object.getOwnPropertyDescriptor;
var Ur = Object.getOwnPropertyNames;
var Gr = Object.getPrototypeOf, Wr = Object.prototype.hasOwnProperty;
var n$1 = (e3, t3) => ce$2(e3, "name", { value: t3, configurable: true });
var Yr = (e3, t3) => () => (t3 || e3((t3 = { exports: {} }).exports, t3), t3.exports), xt$1 = (e3, t3) => {
  for (var r3 in t3)
    ce$2(e3, r3, { get: t3[r3], enumerable: true });
}, Vr$1 = (e3, t3, r3, o3) => {
  if (t3 && typeof t3 == "object" || typeof t3 == "function")
    for (let i3 of Ur(t3))
      !Wr.call(e3, i3) && i3 !== r3 && ce$2(e3, i3, { get: () => t3[i3], enumerable: !(o3 = zr(t3, i3)) || o3.enumerable });
  return e3;
};
var Kr$1 = (e3, t3, r3) => (r3 = e3 != null ? Br$1(Gr(e3)) : {}, Vr$1(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  ce$2(r3, "default", { value: e3, enumerable: true }),
  e3
));
var Tt$1 = Yr((Ee2) => {
  Object.defineProperty(Ee2, "__esModule", { value: true }), Ee2.isEqual = /* @__PURE__ */ function() {
    var e3 = Object.prototype.toString, t3 = Object.getPrototypeOf, r3 = Object.getOwnPropertySymbols ? function(o3) {
      return Object.keys(o3).concat(Object.getOwnPropertySymbols(o3));
    } : Object.keys;
    return function(o3, i3) {
      return (/* @__PURE__ */ n$1(function s2(a4, p2, c4) {
        var l4, y4, u2, h4 = e3.call(a4), T2 = e3.call(p2);
        if (a4 === p2) return true;
        if (a4 == null || p2 == null) return false;
        if (c4.indexOf(a4) > -1 && c4.indexOf(p2) > -1) return true;
        if (c4.push(a4, p2), h4 != T2 || (l4 = r3(a4), y4 = r3(p2), l4.length != y4.length || l4.some(function(R4) {
          return !s2(a4[R4], p2[R4], c4);
        }))) return false;
        switch (h4.slice(8, -1)) {
          case "Symbol":
            return a4.valueOf() == p2.valueOf();
          case "Date":
          case "Number":
            return +a4 == +p2 || +a4 != +a4 && +p2 != +p2;
          case "RegExp":
          case "Function":
          case "String":
          case "Boolean":
            return "" + a4 == "" + p2;
          case "Set":
          case "Map":
            l4 = a4.entries(), y4 = p2.entries();
            do
              if (!s2((u2 = l4.next()).value, y4.next().value, c4)) return false;
            while (!u2.done);
            return true;
          case "ArrayBuffer":
            a4 = new Uint8Array(a4), p2 = new Uint8Array(p2);
          case "DataView":
            a4 = new Uint8Array(a4.buffer), p2 = new Uint8Array(p2.buffer);
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
            if (a4.length != p2.length) return false;
            for (u2 = 0; u2 < a4.length; u2++) if ((u2 in a4 || u2 in p2) && (u2 in a4 != u2 in p2 || !s2(a4[u2], p2[u2], c4))) return false;
            return true;
          case "Object":
            return s2(t3(a4), t3(p2), c4);
          default:
            return false;
        }
      }, "n"))(o3, i3, []);
    };
  }();
});
function bt$1(e3) {
  return e3.replace(/_/g, " ").replace(/-/g, " ").replace(/\./g, " ").replace(/([^\n])([A-Z])([a-z])/g, (t3, r3, o3, i3) => `${r3} ${o3}${i3}`).replace(
    /([a-z])([A-Z])/g,
    (t3, r3, o3) => `${r3} ${o3}`
  ).replace(/([a-z])([0-9])/gi, (t3, r3, o3) => `${r3} ${o3}`).replace(/([0-9])([a-z])/gi, (t3, r3, o3) => `${r3} ${o3}`).replace(/(\s|^)(\w)/g, (t3, r3, o3) => `${r3}${o3.toUpperCase()}`).replace(/ +/g, " ").trim();
}
n$1(bt$1, "toStartCaseStr");
var Ce$2 = Kr$1(Tt$1());
var St$1 = /* @__PURE__ */ n$1((e3) => e3.map((t3) => typeof t3 < "u").filter(Boolean).length, "count"), qr = /* @__PURE__ */ n$1((e3, t3) => {
  let { exists: r3, eq: o3, neq: i3, truthy: s2 } = e3;
  if (St$1([r3, o3, i3, s2]) > 1)
    throw new Error(`Invalid conditional test ${JSON.stringify({ exists: r3, eq: o3, neq: i3 })}`);
  if (typeof o3 < "u")
    return (0, Ce$2.isEqual)(t3, o3);
  if (typeof i3 < "u")
    return !(0, Ce$2.isEqual)(t3, i3);
  if (typeof r3 < "u") {
    let p2 = typeof t3 < "u";
    return r3 ? p2 : !p2;
  }
  return (typeof s2 > "u" ? true : s2) ? !!t3 : !t3;
}, "testValue"), Xr$1 = /* @__PURE__ */ n$1((e3, t3, r3) => {
  if (!e3.if)
    return true;
  let { arg: o3, global: i3 } = e3.if;
  if (St$1([o3, i3]) !== 1)
    throw new Error(`Invalid conditional value ${JSON.stringify({ arg: o3, global: i3 })}`);
  let s2 = o3 ? t3[o3] : r3[i3];
  return qr(e3.if, s2);
}, "includeConditionalArg");
const { global: ve$1 } = __STORYBOOK_MODULE_GLOBAL__;
const { Channel: Zr$1 } = __STORYBOOK_MODULE_CHANNELS__;
function At$1() {
  let e3 = {
    setHandler: /* @__PURE__ */ n$1(() => {
    }, "setHandler"),
    send: /* @__PURE__ */ n$1(() => {
    }, "send")
  };
  return new Zr$1({ transport: e3 });
}
n$1(At$1, "mockChannel");
var Me$2 = class Me {
  constructor() {
    this.getChannel = /* @__PURE__ */ n$1(() => {
      if (!this.channel) {
        let t3 = At$1();
        return this.setChannel(t3), t3;
      }
      return this.channel;
    }, "getChannel");
    this.ready = /* @__PURE__ */ n$1(() => this.promise, "ready");
    this.hasChannel = /* @__PURE__ */ n$1(() => !!this.channel, "hasChannel");
    this.setChannel = /* @__PURE__ */ n$1((t3) => {
      this.channel = t3, this.resolve();
    }, "setChannel");
    this.promise = new Promise((t3) => {
      this.resolve = () => t3(this.getChannel());
    });
  }
};
n$1(Me$2, "AddonStore");
var Pe$2 = Me$2, ke$2 = "__STORYBOOK_ADDONS_PREVIEW";
function Jr$1() {
  return ve$1[ke$2] || (ve$1[ke$2] = new Pe$2()), ve$1[ke$2];
}
n$1(Jr$1, "getAddonsStore");
var Oe$2 = Jr$1();
const { logger: ri$1 } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
const {
  FORCE_RE_RENDER: ni$1,
  RESET_STORY_ARGS: ii$1,
  STORY_RENDERED: Rt,
  UPDATE_GLOBALS: si$1,
  UPDATE_STORY_ARGS: ai$1
} = __STORYBOOK_MODULE_CORE_EVENTS__;
const { global: $e$1 } = __STORYBOOK_MODULE_GLOBAL__;
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
    this.renderListener = /* @__PURE__ */ n$1((t3) => {
      var _a2;
      t3 === ((_a2 = this.currentContext) == null ? void 0 : _a2.id) && (this.triggerEffects(), this.currentContext = null, this.removeRenderListeners());
    }, "renderListener");
    this.init();
  }
  init() {
    this.hookListsMap = /* @__PURE__ */ new WeakMap(), this.mountedDecorators = /* @__PURE__ */ new Set(), this.prevMountedDecorators = /* @__PURE__ */ new Set(), this.currentHooks = [], this.nextHookIndex = 0, this.currentPhase = "NONE", this.currentEffects = [], this.prevEffects = [], this.currentDecoratorName = null, this.hasUpdates = false, this.currentContext = null;
  }
  clean() {
    this.prevEffects.forEach((t3) => {
      t3.destroy && t3.destroy();
    }), this.init(), this.removeRenderListeners();
  }
  getNextHook() {
    let t3 = this.currentHooks[this.nextHookIndex];
    return this.nextHookIndex += 1, t3;
  }
  triggerEffects() {
    this.prevEffects.forEach((t3) => {
      !this.currentEffects.includes(t3) && t3.destroy && t3.destroy();
    }), this.currentEffects.forEach((t3) => {
      this.prevEffects.includes(t3) || (t3.destroy = t3.create());
    }), this.prevEffects = this.currentEffects, this.currentEffects = [];
  }
  addRenderListeners() {
    this.removeRenderListeners(), Oe$2.getChannel().on(Rt, this.renderListener);
  }
  removeRenderListeners() {
    Oe$2.getChannel().removeListener(Rt, this.renderListener);
  }
};
n$1(Ie$1, "HooksContext");
var de$2 = Ie$1;
function wt$1(e3) {
  let t3 = /* @__PURE__ */ n$1((...r3) => {
    let { hooks: o3 } = typeof r3[0] == "function" ? r3[1] : r3[0], i3 = o3.currentPhase, s2 = o3.currentHooks, a4 = o3.nextHookIndex, p2 = o3.currentDecoratorName;
    o3.currentDecoratorName = e3.name, o3.prevMountedDecorators.has(e3) ? (o3.currentPhase = "UPDATE", o3.currentHooks = o3.hookListsMap.get(e3) || []) : (o3.currentPhase = "MOUNT", o3.currentHooks = [], o3.hookListsMap.set(e3, o3.currentHooks), o3.prevMountedDecorators.add(e3)), o3.nextHookIndex = 0;
    let c4 = $e$1.STORYBOOK_HOOKS_CONTEXT;
    $e$1.STORYBOOK_HOOKS_CONTEXT = o3;
    let l4 = e3(...r3);
    if ($e$1.STORYBOOK_HOOKS_CONTEXT = c4, o3.currentPhase === "UPDATE" && o3.getNextHook() != null)
      throw new Error(
        "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
      );
    return o3.currentPhase = i3, o3.currentHooks = s2, o3.nextHookIndex = a4, o3.currentDecoratorName = p2, l4;
  }, "hookified");
  return t3.originalFn = e3, t3;
}
n$1(wt$1, "hookify");
var Fe$1 = 0, Qr$1 = 25, Et$1 = /* @__PURE__ */ n$1((e3) => (t3, r3) => {
  let o3 = e3(
    wt$1(t3),
    r3.map((i3) => wt$1(i3))
  );
  return (i3) => {
    let { hooks: s2 } = i3;
    s2.prevMountedDecorators ?? (s2.prevMountedDecorators = /* @__PURE__ */ new Set()), s2.mountedDecorators = /* @__PURE__ */ new Set([t3, ...r3]), s2.currentContext = i3, s2.hasUpdates = false;
    let a4 = o3(i3);
    for (Fe$1 = 1; s2.hasUpdates; )
      if (s2.hasUpdates = false, s2.currentEffects = [], a4 = o3(i3), Fe$1 += 1, Fe$1 > Qr$1)
        throw new Error(
          "Too many re-renders. Storybook limits the number of renders to prevent an infinite loop."
        );
    return s2.addRenderListeners(), a4;
  };
}, "applyHooks");
function ee$1(e3) {
  if (!e3 || typeof e3 != "object")
    return false;
  let t3 = Object.getPrototypeOf(e3);
  return t3 === null || t3 === Object.prototype || Object.getPrototypeOf(t3) === null ? Object.prototype.toString.call(e3) === "[object Object]" : false;
}
n$1(ee$1, "isPlainObject");
function U$1(e3, t3) {
  let r3 = {}, o3 = Object.keys(e3);
  for (let i3 = 0; i3 < o3.length; i3++) {
    let s2 = o3[i3], a4 = e3[s2];
    r3[s2] = t3(a4, s2, e3);
  }
  return r3;
}
n$1(U$1, "mapValues");
function Le$1(e3, t3) {
  let r3 = {}, o3 = Object.keys(e3);
  for (let i3 = 0; i3 < o3.length; i3++) {
    let s2 = o3[i3], a4 = e3[s2];
    t3(a4, s2) && (r3[s2] = a4);
  }
  return r3;
}
n$1(Le$1, "pickBy");
const { once: Ei$1 } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
function W$2(e3) {
  for (var t3 = [], r3 = 1; r3 < arguments.length; r3++)
    t3[r3 - 1] = arguments[r3];
  var o3 = Array.from(typeof e3 == "string" ? [e3] : e3);
  o3[o3.length - 1] = o3[o3.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var i3 = o3.reduce(function(p2, c4) {
    var l4 = c4.match(/\n([\t ]+|(?!\s).)/g);
    return l4 ? p2.concat(l4.map(function(y4) {
      var u2, h4;
      return (h4 = (u2 = y4.match(/[\t ]/g)) === null || u2 === void 0 ? void 0 : u2.length) !== null && h4 !== void 0 ? h4 : 0;
    })) : p2;
  }, []);
  if (i3.length) {
    var s2 = new RegExp(`
[	 ]{` + Math.min.apply(Math, i3) + "}", "g");
    o3 = o3.map(function(p2) {
      return p2.replace(s2, `
`);
    });
  }
  o3[0] = o3[0].replace(/^\r?\n/, "");
  var a4 = o3[0];
  return t3.forEach(function(p2, c4) {
    var l4 = a4.match(/(?:^|\n)( *)$/), y4 = l4 ? l4[1] : "", u2 = p2;
    typeof p2 == "string" && p2.includes(`
`) && (u2 = String(p2).split(`
`).map(function(h4, T2) {
      return T2 === 0 ? h4 : "" + y4 + h4;
    }).join(`
`)), a4 += u2 + o3[c4 + 1];
  }), a4;
}
n$1(W$2, "dedent");
var De$1 = "UNTARGETED";
function Ct$1({
  args: e3,
  argTypes: t3
}) {
  let r3 = {};
  return Object.entries(e3).forEach(([o3, i3]) => {
    let { target: s2 = De$1 } = t3[o3] || {};
    r3[s2] = r3[s2] || {}, r3[s2][o3] = i3;
  }), r3;
}
n$1(Ct$1, "groupArgsByTarget");
var vt$1 = /* @__PURE__ */ n$1((e3 = {}) => Object.entries(e3).reduce((t3, [r3, { defaultValue: o3 }]) => (typeof o3 < "u" && (t3[r3] = o3), t3), {}), "getValuesFromArgTypes");
var eo$1 = /* @__PURE__ */ n$1((e3) => typeof e3 == "string" ? { name: e3 } : e3, "normalizeType"), to = /* @__PURE__ */ n$1((e3) => typeof e3 == "string" ? { type: e3 } : e3, "normalizeControl"), ro$1 = /* @__PURE__ */ n$1((e3, t3) => {
  let { type: r3, control: o3, ...i3 } = e3, s2 = {
    name: t3,
    ...i3
  };
  return r3 && (s2.type = eo$1(r3)), o3 ? s2.control = to(o3) : o3 === false && (s2.control = { disable: true }), s2;
}, "normalizeInputType"), K$1 = /* @__PURE__ */ n$1((e3) => U$1(e3, ro$1), "normalizeInputTypes");
const { deprecate: oo, logger: no$1 } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var b$1 = /* @__PURE__ */ n$1((e3) => Array.isArray(e3) ? e3 : e3 ? [e3] : [], "normalizeArrays");
var ao$1 = W$2`
CSF .story annotations deprecated; annotate story functions directly:
- StoryFn.story.name => StoryFn.storyName
- StoryFn.story.(parameters|decorators) => StoryFn.(parameters|decorators)
See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations for details and codemod.
`;
function _e$2(e3, t3, r3) {
  let o3 = t3, i3 = typeof t3 == "function" ? t3 : null, { story: s2 } = o3;
  s2 && (no$1.debug("deprecated story", s2), oo(ao$1));
  let a4 = cc$1(e3), p2 = typeof o3 != "function" && o3.name || o3.storyName || (s2 == null ? void 0 : s2.name) || a4, c4 = [
    ...b$1(o3.decorators),
    ...b$1(s2 == null ? void 0 : s2.decorators)
  ], l4 = { ...s2 == null ? void 0 : s2.parameters, ...o3.parameters }, y4 = { ...s2 == null ? void 0 : s2.args, ...o3.args }, u2 = { ...s2 == null ? void 0 : s2.argTypes, ...o3.argTypes }, h4 = [...b$1(o3.loaders), ...b$1(
    s2 == null ? void 0 : s2.loaders
  )], T2 = [
    ...b$1(o3.beforeEach),
    ...b$1(s2 == null ? void 0 : s2.beforeEach)
  ], R4 = [
    ...b$1(o3.afterEach),
    ...b$1(s2 == null ? void 0 : s2.afterEach)
  ], { render: P2, play: L2, tags: O2 = [], globals: F2 = {} } = o3, A3 = l4.__id || lc$1(r3.id, a4);
  return {
    moduleExport: t3,
    id: A3,
    name: p2,
    tags: O2,
    decorators: c4,
    parameters: l4,
    args: y4,
    argTypes: K$1(u2),
    loaders: h4,
    beforeEach: T2,
    afterEach: R4,
    globals: F2,
    ...P2 && { render: P2 },
    ...i3 && { userStoryFn: i3 },
    ...L2 && { play: L2 }
  };
}
n$1(_e$2, "normalizeStory");
function kt(e3, t3 = e3.title, r3) {
  let { id: o3, argTypes: i3 } = e3;
  return {
    id: jn(o3 || t3),
    ...e3,
    title: t3,
    ...i3 && { argTypes: K$1(i3) },
    parameters: {
      fileName: r3,
      ...e3.parameters
    }
  };
}
n$1(kt, "normalizeComponentAnnotations");
const { NoRenderFunctionError: uo$1 } = __STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;
const { global: fo$1 } = __STORYBOOK_MODULE_GLOBAL__;
const { global: yo$1 } = __STORYBOOK_MODULE_GLOBAL__;
function Ot(e3) {
  return e3 != null && lo$1(e3).includes("mount");
}
n$1(Ot, "mountDestructured");
function lo$1(e3) {
  let t3 = e3.toString().match(/[^(]*\(([^)]*)/);
  if (!t3)
    return [];
  let r3 = Pt$1(t3[1]);
  if (!r3.length)
    return [];
  let o3 = r3[0];
  return o3.startsWith("{") && o3.endsWith("}") ? Pt$1(o3.slice(1, -1).replace(/\s/g, "")).map((s2) => s2.replace(/:.*|=.*/g, "")) : [];
}
n$1(lo$1, "getUsedProps");
function Pt$1(e3) {
  let t3 = [], r3 = [], o3 = 0;
  for (let s2 = 0; s2 < e3.length; s2++)
    if (e3[s2] === "{" || e3[s2] === "[")
      r3.push(e3[s2] === "{" ? "}" : "]");
    else if (e3[s2] === r3[r3.length - 1])
      r3.pop();
    else if (!r3.length && e3[s2] === ",") {
      let a4 = e3.substring(o3, s2).trim();
      a4 && t3.push(a4), o3 = s2 + 1;
    }
  let i3 = e3.substring(o3).trim();
  return i3 && t3.push(i3), t3;
}
n$1(Pt$1, "splitByComma");
function Mt(e3, t3, r3) {
  let o3 = r3(e3);
  return (i3) => t3(o3, i3);
}
n$1(Mt, "decorateStory");
function $t({
  componentId: e3,
  title: t3,
  kind: r3,
  id: o3,
  name: i3,
  story: s2,
  parameters: a4,
  initialArgs: p2,
  argTypes: c4,
  ...l4
} = {}) {
  return l4;
}
n$1($t, "sanitizeStoryContextUpdate");
function He$2(e3, t3) {
  let r3 = {}, o3 = /* @__PURE__ */ n$1((s2) => (a4) => {
    if (!r3.value)
      throw new Error("Decorated function called without init");
    return r3.value = {
      ...r3.value,
      ...$t(a4)
    }, s2(r3.value);
  }, "bindWithContext"), i3 = t3.reduce(
    (s2, a4) => Mt(s2, a4, o3),
    e3
  );
  return (s2) => (r3.value = s2, i3(s2));
}
n$1(He$2, "defaultDecorateStory");
var D$1 = /* @__PURE__ */ n$1((...e3) => {
  let t3 = {}, r3 = e3.filter(Boolean), o3 = r3.reduce((i3, s2) => (Object.entries(s2).forEach(([a4, p2]) => {
    let c4 = i3[a4];
    Array.isArray(p2) || typeof c4 > "u" ? i3[a4] = p2 : ee$1(p2) && ee$1(c4) ? t3[a4] = true : typeof p2 < "u" && (i3[a4] = p2);
  }), i3), {});
  return Object.keys(t3).forEach((i3) => {
    let s2 = r3.filter(Boolean).map((a4) => a4[i3]).filter((a4) => typeof a4 < "u");
    s2.every((a4) => ee$1(a4)) ? o3[i3] = D$1(...s2) : o3[i3] = s2[s2.length - 1];
  }), o3;
}, "combineParameters");
function Ne$2(e3, t3, r3) {
  let { moduleExport: o3, id: i3, name: s2 } = e3 || {}, a4 = go(
    e3,
    t3,
    r3
  ), p2 = /* @__PURE__ */ n$1(async (w3) => {
    let d2 = {};
    for (let m4 of [
      b$1(r3.loaders),
      b$1(t3.loaders),
      b$1(e3.loaders)
    ]) {
      if (w3.abortSignal.aborted)
        return d2;
      let f2 = await Promise.all(m4.map((x4) => x4(w3)));
      Object.assign(d2, ...f2);
    }
    return d2;
  }, "applyLoaders"), c4 = /* @__PURE__ */ n$1(async (w3) => {
    let d2 = new Array();
    for (let m4 of [
      ...b$1(r3.beforeEach),
      ...b$1(t3.beforeEach),
      ...b$1(e3.beforeEach)
    ]) {
      if (w3.abortSignal.aborted)
        return d2;
      let f2 = await m4(w3);
      f2 && d2.push(f2);
    }
    return d2;
  }, "applyBeforeEach"), l4 = /* @__PURE__ */ n$1(async (w3) => {
    let d2 = [
      ...b$1(r3.afterEach),
      ...b$1(t3.afterEach),
      ...b$1(e3.afterEach)
    ].reverse();
    for (let m4 of d2) {
      if (w3.abortSignal.aborted)
        return;
      await m4(w3);
    }
  }, "applyAfterEach"), y4 = /* @__PURE__ */ n$1((w3) => w3.originalStoryFn(w3.args, w3), "undecoratedStoryFn"), { applyDecorators: u2 = He$2, runStep: h4 } = r3, T2 = [
    ...b$1(e3 == null ? void 0 : e3.decorators),
    ...b$1(t3 == null ? void 0 : t3.decorators),
    ...b$1(r3 == null ? void 0 : r3.decorators)
  ], R4 = (e3 == null ? void 0 : e3.userStoryFn) || (e3 == null ? void 0 : e3.render) || t3.render || r3.render, P2 = Et$1(u2)(y4, T2), L2 = /* @__PURE__ */ n$1((w3) => P2(w3), "unboundStoryFn"), O2 = (e3 == null ? void 0 : e3.play) ?? (t3 == null ? void 0 : t3.play), F2 = Ot(O2);
  if (!R4 && !F2)
    throw new uo$1({ id: i3 });
  let A3 = /* @__PURE__ */ n$1((w3) => async () => (await w3.renderToCanvas(), w3.canvas), "defaultMount"), S3 = e3.mount ?? t3.mount ?? r3.mount ?? A3, v3 = r3.testingLibraryRender;
  return {
    storyGlobals: {},
    ...a4,
    moduleExport: o3,
    id: i3,
    name: s2,
    story: s2,
    originalStoryFn: R4,
    undecoratedStoryFn: y4,
    unboundStoryFn: L2,
    applyLoaders: p2,
    applyBeforeEach: c4,
    applyAfterEach: l4,
    playFunction: O2,
    runStep: h4,
    mount: S3,
    testingLibraryRender: v3,
    renderToCanvas: r3.renderToCanvas,
    usesMount: F2
  };
}
n$1(Ne$2, "prepareStory");
function go(e3, t3, r3) {
  var _a2;
  let o3 = ["dev", "test"], i3 = ((_a2 = yo$1.DOCS_OPTIONS) == null ? void 0 : _a2.autodocs) === true ? ["autodocs"] : [], s2 = uc$1(
    ...o3,
    ...i3,
    ...r3.tags ?? [],
    ...t3.tags ?? [],
    ...(e3 == null ? void 0 : e3.tags) ?? []
  ), a4 = D$1(
    r3.parameters,
    t3.parameters,
    e3 == null ? void 0 : e3.parameters
  ), { argTypesEnhancers: p2 = [], argsEnhancers: c4 = [] } = r3, l4 = D$1(
    r3.argTypes,
    t3.argTypes,
    e3 == null ? void 0 : e3.argTypes
  );
  if (e3) {
    let O2 = (e3 == null ? void 0 : e3.userStoryFn) || (e3 == null ? void 0 : e3.render) || t3.render || r3.render;
    a4.__isArgsStory = O2 && O2.length > 0;
  }
  let y4 = {
    ...r3.args,
    ...t3.args,
    ...e3 == null ? void 0 : e3.args
  }, u2 = {
    ...t3.globals,
    ...e3 == null ? void 0 : e3.globals
  }, h4 = {
    componentId: t3.id,
    title: t3.title,
    kind: t3.title,
    // Back compat
    id: (e3 == null ? void 0 : e3.id) || t3.id,
    // if there's no story name, we create a fake one since enhancers expect a name
    name: (e3 == null ? void 0 : e3.name) || "__meta",
    story: (e3 == null ? void 0 : e3.name) || "__meta",
    // Back compat
    component: t3.component,
    subcomponents: t3.subcomponents,
    tags: s2,
    parameters: a4,
    initialArgs: y4,
    argTypes: l4,
    storyGlobals: u2
  };
  h4.argTypes = p2.reduce(
    (O2, F2) => F2({ ...h4, argTypes: O2 }),
    h4.argTypes
  );
  let T2 = { ...y4 };
  h4.initialArgs = [...c4].reduce(
    (O2, F2) => ({
      ...O2,
      ...F2({
        ...h4,
        initialArgs: O2
      })
    }),
    T2
  );
  let { name: R4, story: P2, ...L2 } = h4;
  return L2;
}
n$1(go, "preparePartialAnnotations");
function Ft$1(e3) {
  var _a2;
  let { args: t3 } = e3, r3 = {
    ...e3,
    allArgs: void 0,
    argsByTarget: void 0
  };
  if ((_a2 = fo$1.FEATURES) == null ? void 0 : _a2.argTypeTargetsV7) {
    let s2 = Ct$1(e3);
    r3 = {
      ...e3,
      allArgs: e3.args,
      argsByTarget: s2,
      args: s2[De$1] || {}
    };
  }
  let o3 = Object.entries(r3.args).reduce((s2, [a4, p2]) => {
    var _a3;
    if (!((_a3 = r3.argTypes[a4]) == null ? void 0 : _a3.mapping))
      return s2[a4] = p2, s2;
    let c4 = /* @__PURE__ */ n$1((l4) => {
      let y4 = r3.argTypes[a4].mapping;
      return y4 && l4 in y4 ? y4[l4] : l4;
    }, "mappingFn");
    return s2[a4] = Array.isArray(p2) ? p2.map(c4) : c4(p2), s2;
  }, {}), i3 = Object.entries(o3).reduce((s2, [a4, p2]) => {
    let c4 = r3.argTypes[a4] || {};
    return Xr$1(c4, o3, r3.globals) && (s2[a4] = p2), s2;
  }, {});
  return { ...r3, unmappedArgs: t3, args: i3 };
}
n$1(Ft$1, "prepareContext");
const { logger: ho$1 } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var je$1 = /* @__PURE__ */ n$1((e3, t3, r3) => {
  let o3 = typeof e3;
  switch (o3) {
    case "boolean":
    case "string":
    case "number":
    case "function":
    case "symbol":
      return { name: o3 };
  }
  return e3 ? r3.has(e3) ? (ho$1.warn(W$2`
        We've detected a cycle in arg '${t3}'. Args should be JSON-serializable.

        Consider using the mapping feature or fully custom args:
        - Mapping: https://storybook.js.org/docs/writing-stories/args#mapping-to-complex-arg-values
        - Custom args: https://storybook.js.org/docs/essentials/controls#fully-custom-args
      `), { name: "other", value: "cyclic object" }) : (r3.add(e3), Array.isArray(e3) ? { name: "array", value: e3.length > 0 ? je$1(e3[0], t3, new Set(
    r3
  )) : { name: "other", value: "unknown" } } : { name: "object", value: U$1(e3, (s2) => je$1(s2, t3, new Set(r3))) }) : { name: "object", value: {} };
}, "inferType"), Be$1 = /* @__PURE__ */ n$1((e3) => {
  let { id: t3, argTypes: r3 = {}, initialArgs: o3 = {} } = e3, i3 = U$1(o3, (a4, p2) => ({
    name: p2,
    type: je$1(a4, `${t3}.${p2}`, /* @__PURE__ */ new Set())
  })), s2 = U$1(r3, (a4, p2) => ({
    name: p2
  }));
  return D$1(i3, s2, r3);
}, "inferArgTypes");
Be$1.secondPass = true;
const { logger: xo$1 } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var It$1 = /* @__PURE__ */ n$1((e3, t3) => Array.isArray(t3) ? t3.includes(e3) : e3.match(t3), "matches"), ze$2 = /* @__PURE__ */ n$1((e3, t3, r3) => !t3 && !r3 ? e3 : e3 && Le$1(e3, (o3, i3) => {
  let s2 = o3.name || i3.toString();
  return !!(!t3 || It$1(s2, t3)) && (!r3 || !It$1(s2, r3));
}), "filterArgTypes");
var bo$1 = /* @__PURE__ */ n$1((e3, t3, r3) => {
  let { type: o3, options: i3 } = e3;
  if (o3) {
    if (r3.color && r3.color.test(t3)) {
      let s2 = o3.name;
      if (s2 === "string")
        return { control: { type: "color" } };
      s2 !== "enum" && xo$1.warn(
        `Addon controls: Control of type color only supports string, received "${s2}" instead`
      );
    }
    if (r3.date && r3.date.test(t3))
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
        let { value: s2 } = o3;
        return { control: { type: (s2 == null ? void 0 : s2.length) <= 5 ? "radio" : "select" }, options: s2 };
      }
      case "function":
      case "symbol":
        return null;
      default:
        return { control: { type: i3 ? "select" : "object" } };
    }
  }
}, "inferControl"), me$2 = /* @__PURE__ */ n$1((e3) => {
  let {
    argTypes: t3,
    parameters: { __isArgsStory: r3, controls: { include: o3 = null, exclude: i3 = null, matchers: s2 = {} } = {} }
  } = e3;
  if (!r3)
    return t3;
  let a4 = ze$2(t3, o3, i3), p2 = U$1(a4, (c4, l4) => (c4 == null ? void 0 : c4.type) && bo$1(c4, l4.toString(), s2));
  return D$1(p2, a4);
}, "inferControls");
me$2.secondPass = true;
function te$2({
  argTypes: e3,
  globalTypes: t3,
  argTypesEnhancers: r3,
  decorators: o3,
  loaders: i3,
  beforeEach: s2,
  afterEach: a4,
  initialGlobals: p2,
  ...c4
}) {
  return {
    ...e3 && { argTypes: K$1(e3) },
    ...t3 && { globalTypes: K$1(t3) },
    decorators: b$1(o3),
    loaders: b$1(i3),
    beforeEach: b$1(s2),
    afterEach: b$1(a4),
    argTypesEnhancers: [
      ...r3 || [],
      Be$1,
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
    initialGlobals: p2,
    ...c4
  };
}
n$1(te$2, "normalizeProjectAnnotations");
const { global: To$1 } = __STORYBOOK_MODULE_GLOBAL__;
var Lt$1 = /* @__PURE__ */ n$1((e3) => async () => {
  let t3 = [];
  for (let r3 of e3) {
    let o3 = await r3();
    o3 && t3.unshift(o3);
  }
  return async () => {
    for (let r3 of t3)
      await r3();
  };
}, "composeBeforeAllHooks");
function Ue$2(e3) {
  return async (t3, r3, o3) => {
    await e3.reduceRight(
      (s2, a4) => async () => a4(t3, s2, o3),
      async () => r3(o3)
    )();
  };
}
n$1(Ue$2, "composeStepRunners");
function oe$1(e3, t3) {
  return e3.map((r3) => {
    var _a2;
    return ((_a2 = r3.default) == null ? void 0 : _a2[t3]) ?? r3[t3];
  }).filter(Boolean);
}
n$1(oe$1, "getField");
function Y$1(e3, t3, r3 = {}) {
  return oe$1(e3, t3).reduce((o3, i3) => {
    let s2 = b$1(i3);
    return r3.reverseFileOrder ? [...s2, ...o3] : [...o3, ...s2];
  }, []);
}
n$1(Y$1, "getArrayField");
function ue$1(e3, t3) {
  return Object.assign({}, ...oe$1(e3, t3));
}
n$1(ue$1, "getObjectField");
function re$1(e3, t3) {
  return oe$1(e3, t3).pop();
}
n$1(re$1, "getSingletonField");
function ne$2(e3) {
  var _a2;
  let t3 = Y$1(e3, "argTypesEnhancers"), r3 = oe$1(e3, "runStep"), o3 = Y$1(e3, "beforeAll");
  return {
    parameters: D$1(...oe$1(e3, "parameters")),
    decorators: Y$1(e3, "decorators", {
      reverseFileOrder: !(((_a2 = To$1.FEATURES) == null ? void 0 : _a2.legacyDecoratorFileOrder) ?? false)
    }),
    args: ue$1(e3, "args"),
    argsEnhancers: Y$1(e3, "argsEnhancers"),
    argTypes: ue$1(e3, "argTypes"),
    argTypesEnhancers: [
      ...t3.filter((i3) => !i3.secondPass),
      ...t3.filter((i3) => i3.secondPass)
    ],
    initialGlobals: ue$1(e3, "initialGlobals"),
    globalTypes: ue$1(e3, "globalTypes"),
    loaders: Y$1(e3, "loaders"),
    beforeAll: Lt$1(o3),
    beforeEach: Y$1(e3, "beforeEach"),
    afterEach: Y$1(e3, "afterEach"),
    render: re$1(e3, "render"),
    renderToCanvas: re$1(e3, "renderToCanvas"),
    applyDecorators: re$1(e3, "applyDecorators"),
    runStep: Ue$2(r3),
    tags: Y$1(e3, "tags"),
    mount: re$1(e3, "mount"),
    testingLibraryRender: re$1(e3, "testingLibraryRender")
  };
}
n$1(ne$2, "composeConfigs");
const { MountMustBeDestructuredError: Ao$1 } = __STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;
function Dt$1() {
  var _a2, _b2, _c2;
  try {
    return (
      // @ts-expect-error This property exists in Vitest browser mode
      !!globalThis.__vitest_browser__ || !!((_c2 = (_b2 = (_a2 = globalThis.window) == null ? void 0 : _a2.navigator) == null ? void 0 : _b2.userAgent) == null ? void 0 : _c2.match(/StorybookTestRunner/))
    );
  } catch {
    return false;
  }
}
n$1(Dt$1, "isTestEnvironment");
function _t$1(e3 = true) {
  if (!("document" in globalThis && "createElement" in globalThis.document))
    return () => {
    };
  let t3 = document.createElement("style");
  t3.textContent = `*, *:before, *:after {
    animation: none !important;
  }`, document.head.appendChild(t3);
  let r3 = document.createElement("style");
  return r3.textContent = `*, *:before, *:after {
    animation-delay: 0s !important;
    animation-direction: ${e3 ? "reverse" : "normal"} !important;
    animation-play-state: paused !important;
    transition: none !important;
  }`, document.head.appendChild(r3), document.body.clientHeight, document.head.removeChild(t3), () => {
    var _a2;
    (_a2 = r3.parentNode) == null ? void 0 : _a2.removeChild(r3);
  };
}
n$1(_t$1, "pauseAnimations");
async function Ht(e3) {
  if (!("document" in globalThis && "getAnimations" in globalThis.document && "querySelectorAll" in globalThis.document))
    return;
  let t3 = false;
  await Promise.race([
    // After 50ms, retrieve any running animations and wait for them to finish
    // If new animations are created while waiting, we'll wait for them too
    new Promise((r3) => {
      setTimeout(() => {
        let o3 = [globalThis.document, ...Nt$1(globalThis.document)], i3 = /* @__PURE__ */ n$1(async () => {
          if (t3 || (e3 == null ? void 0 : e3.aborted))
            return;
          let s2 = o3.flatMap((a4) => {
            var _a2;
            return ((_a2 = a4 == null ? void 0 : a4.getAnimations) == null ? void 0 : _a2.call(a4)) || [];
          }).filter((a4) => a4.playState === "running" && !So$1(a4));
          s2.length > 0 && (await Promise.all(s2.map((a4) => a4.finished)), await i3());
        }, "checkAnimationsFinished");
        i3().then(r3);
      }, 100);
    }),
    // If animations don't finish within the timeout, continue without waiting
    new Promise(
      (r3) => setTimeout(() => {
        t3 = true, r3(void 0);
      }, 5e3)
    )
  ]);
}
n$1(Ht, "waitForAnimations");
function Nt$1(e3) {
  return [e3, ...e3.querySelectorAll("*")].reduce(
    (t3, r3) => ("shadowRoot" in r3 && r3.shadowRoot && t3.push(r3.shadowRoot, ...Nt$1(r3.shadowRoot)), t3),
    []
  );
}
n$1(Nt$1, "getShadowRoots");
function So$1(e3) {
  var _a2;
  if (e3 instanceof CSSAnimation && e3.effect instanceof KeyframeEffect && e3.effect.target) {
    let t3 = getComputedStyle(e3.effect.target, e3.effect.pseudoElement), r3 = (_a2 = t3.animationName) == null ? void 0 : _a2.split(", ").indexOf(e3.animationName);
    return t3.animationIterationCount.split(", ")[r3] === "infinite";
  }
  return false;
}
n$1(So$1, "isInfiniteAnimation");
var Ge$2 = class Ge {
  constructor() {
    this.reports = [];
  }
  async addReport(t3) {
    this.reports.push(t3);
  }
};
n$1(Ge$2, "ReporterAPI");
var fe$2 = Ge$2;
var Ro$1 = "ComposedStory", wo$1 = "Unnamed Story";
var V$1 = [];
function We$2(e3, t3, r3, o3, i3) {
  var _a2;
  if (e3 === void 0)
    throw new Error("Expected a story but received undefined.");
  t3.title = t3.title ?? Ro$1;
  let s2 = kt(t3), a4 = i3 || e3.storyName || ((_a2 = e3.story) == null ? void 0 : _a2.name) || e3.name || wo$1, p2 = _e$2(
    a4,
    e3,
    s2
  ), c4 = te$2(
    ne$2([
      o3 ?? globalThis.globalProjectAnnotations ?? {},
      r3 ?? {}
    ])
  ), l4 = Ne$2(
    p2,
    s2,
    c4
  ), u2 = {
    ...vt$1(c4.globalTypes),
    ...c4.initialGlobals,
    ...l4.storyGlobals
  }, h4 = new fe$2(), T2 = /* @__PURE__ */ n$1(() => {
    let A3 = Ft$1({
      hooks: new de$2(),
      globals: u2,
      args: { ...l4.initialArgs },
      viewMode: "story",
      reporting: h4,
      loaded: {},
      abortSignal: new AbortController().signal,
      step: /* @__PURE__ */ n$1((S3, v3) => l4.runStep(S3, v3, A3), "step"),
      canvasElement: null,
      canvas: {},
      userEvent: {},
      globalTypes: c4.globalTypes,
      ...l4,
      context: null,
      mount: null
    });
    return A3.parameters.__isPortableStory = true, A3.context = A3, l4.renderToCanvas && (A3.renderToCanvas = async () => {
      var _a3;
      let S3 = await ((_a3 = l4.renderToCanvas) == null ? void 0 : _a3.call(
        l4,
        {
          componentId: l4.componentId,
          title: l4.title,
          id: l4.id,
          name: l4.name,
          tags: l4.tags,
          showMain: /* @__PURE__ */ n$1(() => {
          }, "showMain"),
          showError: /* @__PURE__ */ n$1((v3) => {
            throw new Error(`${v3.title}
${v3.description}`);
          }, "showError"),
          showException: /* @__PURE__ */ n$1((v3) => {
            throw v3;
          }, "showException"),
          forceRemount: true,
          storyContext: A3,
          storyFn: /* @__PURE__ */ n$1(() => l4.unboundStoryFn(A3), "storyFn"),
          unboundStoryFn: l4.unboundStoryFn
        },
        A3.canvasElement
      ));
      S3 && V$1.push(S3);
    }), A3.mount = l4.mount(A3), A3;
  }, "initializeContext"), R4, P2 = /* @__PURE__ */ n$1(async (A3) => {
    var _a3;
    let S3 = T2();
    return S3.canvasElement ?? (S3.canvasElement = (_a3 = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a3.body), R4 && (S3.loaded = R4.loaded), Object.assign(S3, A3), l4.playFunction(S3);
  }, "play"), L2 = /* @__PURE__ */ n$1((A3) => {
    let S3 = T2();
    return Object.assign(S3, A3), Eo$1(l4, S3);
  }, "run"), O2 = l4.playFunction ? P2 : void 0;
  return Object.assign(
    /* @__PURE__ */ n$1(function(S3) {
      let v3 = T2();
      return R4 && (v3.loaded = R4.loaded), v3.args = {
        ...v3.initialArgs,
        ...S3
      }, l4.unboundStoryFn(v3);
    }, "storyFn"),
    {
      id: l4.id,
      storyName: a4,
      load: /* @__PURE__ */ n$1(async () => {
        for (let S3 of [...V$1].reverse())
          await S3();
        V$1.length = 0;
        let A3 = T2();
        A3.loaded = await l4.applyLoaders(A3), V$1.push(...(await l4.applyBeforeEach(A3)).filter(Boolean)), R4 = A3;
      }, "load"),
      globals: u2,
      args: l4.initialArgs,
      parameters: l4.parameters,
      argTypes: l4.argTypes,
      play: O2,
      run: L2,
      reporting: h4,
      tags: l4.tags
    }
  );
}
n$1(We$2, "composeStory");
async function Eo$1(e3, t3) {
  var _a2, _b2;
  for (let s2 of [...V$1].reverse())
    await s2();
  if (V$1.length = 0, !t3.canvasElement) {
    let s2 = document.createElement("div");
    (_b2 = (_a2 = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a2.body) == null ? void 0 : _b2.appendChild(s2), t3.canvasElement = s2, V$1.push(() => {
      var _a3, _b3, _c2, _d3;
      ((_b3 = (_a3 = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a3.body) == null ? void 0 : _b3.contains(s2)) && ((_d3 = (_c2 = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _c2.body) == null ? void 0 : _d3.removeChild(s2));
    });
  }
  if (t3.loaded = await e3.applyLoaders(t3), t3.abortSignal.aborted)
    return;
  V$1.push(...(await e3.applyBeforeEach(t3)).filter(Boolean));
  let r3 = e3.playFunction, o3 = e3.usesMount;
  if (o3 || await t3.mount(), t3.abortSignal.aborted)
    return;
  r3 && (o3 || (t3.mount = async () => {
    throw new Ao$1({ playFunction: r3.toString() });
  }), await r3(t3));
  let i3;
  Dt$1() ? i3 = _t$1() : await Ht(t3.abortSignal), await e3.applyAfterEach(t3), await (i3 == null ? void 0 : i3());
}
n$1(Eo$1, "runStory");
var Ye = "Invariant failed";
function ye$1(e3, t3) {
  if (!e3) {
    var r3 = typeof t3 == "function" ? t3() : t3, o3 = r3 ? "".concat(Ye, ": ").concat(r3) : Ye;
    throw new Error(o3);
  }
}
n$1(ye$1, "invariant");
var Ke = {};
xt$1(Ke, {
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
var Ut$1 = /* @__PURE__ */ n$1((e3, t3) => {
  let r3 = Object.getPrototypeOf(e3);
  return !r3 || t3(r3) ? r3 : Ut$1(r3, t3);
}, "findProto"), Po$1 = /* @__PURE__ */ n$1((e3) => !!(typeof e3 == "object" && e3 && Ut$1(e3, (t3) => /^Synthetic(?:Base)?Event$/.test(t3.constructor.name)) && typeof e3.persist == "function"), "isReactSyntheticEvent"), Oo$1 = /* @__PURE__ */ n$1((e3) => {
  if (Po$1(e3)) {
    let t3 = Object.create(
      e3.constructor.prototype,
      Object.getOwnPropertyDescriptors(e3)
    );
    t3.persist();
    let r3 = Object.getOwnPropertyDescriptor(t3, "view"), o3 = r3 == null ? void 0 : r3.value;
    return typeof o3 == "object" && (o3 == null ? void 0 : o3.constructor.name) === "Window" && Object.defineProperty(t3, "view", {
      ...r3,
      value: Object.create(o3.constructor.prototype)
    }), t3;
  }
  return e3;
}, "serializeArg");
function ie$1(e3, t3 = {}) {
  let r3 = {
    ...Bt,
    ...t3
  }, o3 = /* @__PURE__ */ n$1(function(...s2) {
    var _a2, _b2;
    if (t3.implicit) {
      let T2 = (_a2 = "__STORYBOOK_PREVIEW__" in zt$1 ? zt$1.__STORYBOOK_PREVIEW__ : void 0) == null ? void 0 : _a2.storyRenders.find(
        (R4) => R4.phase === "playing" || R4.phase === "rendering"
      );
      if (T2) {
        let R4 = !((_b2 = globalThis == null ? void 0 : globalThis.FEATURES) == null ? void 0 : _b2.disallowImplicitActionsInRenderV8), P2 = new vo$1({
          phase: T2.phase,
          name: e3,
          deprecated: R4
        });
        if (R4)
          console.warn(P2);
        else
          throw P2;
      }
    }
    let a4 = ko$1.getChannel(), p2 = Date.now().toString(36) + Math.random().toString(36).substring(2), c4 = 5, l4 = s2.map(Oo$1), y4 = s2.length > 1 ? l4 : l4[0], u2 = {
      id: p2,
      count: 0,
      data: { name: e3, args: y4 },
      options: {
        ...r3,
        maxDepth: c4 + (r3.depth || 3)
      }
    };
    a4.emit(jt, u2);
  }, "actionHandler");
  return o3.isAction = true, o3.implicit = t3.implicit, o3;
}
n$1(ie$1, "action");
var Gt$1 = /* @__PURE__ */ n$1((e3, t3) => typeof t3[e3] > "u" && !(e3 in t3), "isInInitialArgs"), Wt = /* @__PURE__ */ n$1((e3) => {
  let {
    initialArgs: t3,
    argTypes: r3,
    id: o3,
    parameters: { actions: i3 }
  } = e3;
  if (!i3 || i3.disable || !i3.argTypesRegex || !r3)
    return {};
  let s2 = new RegExp(i3.argTypesRegex);
  return Object.entries(r3).filter(
    ([p2]) => !!s2.test(p2)
  ).reduce((p2, [c4, l4]) => (Gt$1(c4, t3) && (p2[c4] = ie$1(c4, { implicit: true, id: o3 })), p2), {});
}, "inferActionsFromArgTypesRegex"), Yt$1 = /* @__PURE__ */ n$1((e3) => {
  let {
    initialArgs: t3,
    argTypes: r3,
    parameters: { actions: o3 }
  } = e3;
  return (o3 == null ? void 0 : o3.disable) || !r3 ? {} : Object.entries(r3).filter(([s2, a4]) => !!a4.action).reduce((s2, [a4, p2]) => (Gt$1(a4, t3) && (s2[a4] = ie$1(typeof p2.action == "string" ? p2.action : a4)), s2), {});
}, "addActionsFromArgTypes");
var Mo$1 = [
  Yt$1,
  Wt
];
var qe$2 = {};
xt$1(qe$2, {
  loaders: () => Io$1
});
const { onMockCall: $o$1 } = __STORYBOOK_MODULE_TEST__;
var Vt = false, Fo$1 = /* @__PURE__ */ n$1((e3) => {
  var _a2;
  let { parameters: t3 } = e3;
  ((_a2 = t3 == null ? void 0 : t3.actions) == null ? void 0 : _a2.disable) || Vt || ($o$1((r3, o3) => {
    let i3 = r3.getMockName();
    i3 !== "spy" && (!/^next\/.*::/.test(i3) || [
      "next/router::useRouter()",
      "next/navigation::useRouter()",
      "next/navigation::redirect",
      "next/cache::",
      "next/headers::cookies().set",
      "next/headers::cookies().delete",
      "next/headers::headers().set",
      "next/headers::headers().delete"
    ].some((s2) => i3.startsWith(s2))) && ie$1(i3)(o3);
  }), Vt = true);
}, "logActionsWhenMockCalled"), Io$1 = [Fo$1];
var Xe$2 = /* @__PURE__ */ n$1(() => rc$1({
  ...Ke,
  ...qe$2
}), "default");
var Z$2 = "backgrounds";
const { useEffect: Jt$1 } = __STORYBOOK_MODULE_PREVIEW_API__;
var Kt$1 = {
  light: { name: "light", value: "#F8F8F8" },
  dark: { name: "dark", value: "#333" }
};
var { document: N$2 } = globalThis, qt$1 = /* @__PURE__ */ n$1(() => {
  var _a2;
  return (globalThis == null ? void 0 : globalThis.matchMedia) ? !!((_a2 = globalThis.matchMedia("(prefers-reduced-motion: reduce)")) == null ? void 0 : _a2.matches) : false;
}, "isReduceMotionEnabled"), Ze$2 = /* @__PURE__ */ n$1((e3) => {
  (Array.isArray(e3) ? e3 : [e3]).forEach(_o);
}, "clearStyles"), _o = /* @__PURE__ */ n$1((e3) => {
  if (!N$2)
    return;
  let t3 = N$2.getElementById(e3);
  t3 && t3.parentElement && t3.parentElement.removeChild(t3);
}, "clearStyle"), Xt$1 = /* @__PURE__ */ n$1((e3, t3) => {
  if (!N$2)
    return;
  let r3 = N$2.getElementById(e3);
  if (r3)
    r3.innerHTML !== t3 && (r3.innerHTML = t3);
  else {
    let o3 = N$2.createElement("style");
    o3.setAttribute("id", e3), o3.innerHTML = t3, N$2.head.appendChild(o3);
  }
}, "addGridStyle"), Zt = /* @__PURE__ */ n$1((e3, t3, r3) => {
  var _a2;
  if (!N$2)
    return;
  let o3 = N$2.getElementById(e3);
  if (o3)
    o3.innerHTML !== t3 && (o3.innerHTML = t3);
  else {
    let i3 = N$2.createElement("style");
    i3.setAttribute("id", e3), i3.innerHTML = t3;
    let s2 = `addon-backgrounds-grid${r3 ? `-docs-${r3}` : ""}`, a4 = N$2.getElementById(s2);
    a4 ? (_a2 = a4.parentElement) == null ? void 0 : _a2.insertBefore(i3, a4) : N$2.head.appendChild(i3);
  }
}, "addBackgroundStyle");
var Ho$1 = {
  cellSize: 100,
  cellAmount: 10,
  opacity: 0.8
}, Qt$1 = "addon-backgrounds", er$1 = "addon-backgrounds-grid", No$1 = qt$1() ? "" : "transition: background-color 0.3s;", tr$1 = /* @__PURE__ */ n$1((e3, t3) => {
  let { globals: r3 = {}, parameters: o3 = {}, viewMode: i3, id: s2 } = t3, {
    options: a4 = Kt$1,
    disable: p2,
    grid: c4 = Ho$1
  } = o3[Z$2] || {}, l4 = r3[Z$2] || {}, y4 = typeof l4 == "string" ? l4 : l4 == null ? void 0 : l4.value, u2 = y4 ? a4[y4] : void 0, h4 = typeof u2 == "string" ? u2 : (u2 == null ? void 0 : u2.value) || "transparent", T2 = typeof l4 == "string" ? false : l4.grid || false, R4 = !!u2 && !p2, P2 = i3 === "docs" ? `#anchor--${s2} .docs-story` : ".sb-show-main", L2 = i3 === "docs" ? `#anchor--${s2} .docs-story` : ".sb-show-main", O2 = o3.layout === void 0 || o3.layout === "padded", F2 = i3 === "docs" ? 20 : O2 ? 16 : 0, { cellAmount: A3, cellSize: S3, opacity: v3, offsetX: w3 = F2, offsetY: d2 = F2 } = c4, m4 = i3 === "docs" ? `${Qt$1}-docs-${s2}` : `${Qt$1}-color`, f2 = i3 === "docs" ? s2 : null;
  Jt$1(() => {
    let g4 = `
    ${P2} {
      background: ${h4} !important;
      ${No$1}
      }`;
    if (!R4) {
      Ze$2(m4);
      return;
    }
    Zt(m4, g4, f2);
  }, [P2, m4, f2, R4, h4]);
  let x4 = i3 === "docs" ? `${er$1}-docs-${s2}` : `${er$1}`;
  return Jt$1(() => {
    if (!T2) {
      Ze$2(x4);
      return;
    }
    let g4 = [
      `${S3 * A3}px ${S3 * A3}px`,
      `${S3 * A3}px ${S3 * A3}px`,
      `${S3}px ${S3}px`,
      `${S3}px ${S3}px`
    ].join(", "), E3 = `
        ${L2} {
          background-size: ${g4} !important;
          background-position: ${w3}px ${d2}px, ${w3}px ${d2}px, ${w3}px ${d2}px, ${w3}px ${d2}px !important;
          background-blend-mode: difference !important;
          background-image: linear-gradient(rgba(130, 130, 130, ${v3}) 1px, transparent 1px),
           linear-gradient(90deg, rgba(130, 130, 130, ${v3}) 1px, transparent 1px),
           linear-gradient(rgba(130, 130, 130, ${v3 / 2}) 1px, transparent 1px),
           linear-gradient(90deg, rgba(130, 130, 130, ${v3 / 2}) 1px, transparent 1px) !important;
        }
      `;
    Xt$1(x4, E3);
  }, [A3, S3, L2, x4, T2, w3, d2, v3]), e3();
}, "withBackgroundAndGrid");
var Bo$1 = ((_a = globalThis.FEATURES) == null ? void 0 : _a.backgrounds) ? [tr$1] : [], zo$1 = {
  [Z$2]: {
    grid: {
      cellSize: 20,
      opacity: 0.5,
      cellAmount: 5
    },
    disable: false
  }
}, Uo = {
  [Z$2]: { value: void 0, grid: false }
}, Je$1 = /* @__PURE__ */ n$1(() => rc$1({
  decorators: Bo$1,
  parameters: zo$1,
  initialGlobals: Uo
}), "default");
var { step: Yo$1 } = Qs$1(
  {
    // It seems like the label is unused, but the instrumenter has access to it
    // The context will be bounded later in StoryRender, so that the user can write just:
    // await step("label", (context) => {
    //   // labeled step
    // });
    step: /* @__PURE__ */ n$1(async (e3, t3, r3) => t3(r3), "step")
  },
  { intercept: true }
), Qe$2 = /* @__PURE__ */ n$1(() => rc$1({
  parameters: {
    throwPlayFunctionExceptions: false
  },
  runStep: Yo$1
}), "default");
const { addons: ur$1 } = __STORYBOOK_MODULE_PREVIEW_API__;
const { STORY_RENDER_PHASE_CHANGED: qo$1 } = __STORYBOOK_MODULE_CORE_EVENTS__;
var ge$2 = "storybook/highlight", rr$1 = `${ge$2}/add`, or$1 = `${ge$2}/remove`, nr$1 = `${ge$2}/reset`, ir = `${ge$2}/scroll-into-view`, et$1 = 2147483647, B$1 = 28;
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
var Vo$1 = "svg,path,rect,circle,line,polyline,polygon,ellipse,text".split(","), M$1 = /* @__PURE__ */ n$1((e3, t3 = {}, r3) => {
  let o3 = Vo$1.includes(e3) ? document.createElementNS("http://www.w3.org/2000/svg", e3) : document.createElement(e3);
  return Object.entries(t3).forEach(([i3, s2]) => {
    /[A-Z]/.test(i3) ? (i3 === "onClick" && (o3.addEventListener("click", s2), o3.addEventListener("keydown", (a4) => {
      (a4.key === "Enter" || a4.key === " ") && (a4.preventDefault(), s2());
    })), i3 === "onMouseEnter" && o3.addEventListener("mouseenter", s2), i3 === "onMouseLeave" && o3.addEventListener("mouseleave", s2)) : o3.setAttribute(
      i3,
      s2
    );
  }), r3 == null ? void 0 : r3.forEach((i3) => {
    if (!(i3 == null || i3 === false))
      try {
        o3.appendChild(i3);
      } catch {
        o3.appendChild(document.createTextNode(String(i3)));
      }
  }), o3;
}, "createElement"), ae$2 = /* @__PURE__ */ n$1((e3) => tt$1[e3] && M$1(
  "svg",
  { width: "14", height: "14", viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" },
  tt$1[e3].map(
    (t3) => M$1("path", {
      fill: "currentColor",
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: t3
    })
  )
), "createIcon"), sr$1 = /* @__PURE__ */ n$1((e3) => {
  if ("elements" in e3) {
    let { elements: o3, color: i3, style: s2 } = e3;
    return {
      id: void 0,
      priority: 0,
      selectors: o3,
      styles: {
        outline: `2px ${s2} ${i3}`,
        outlineOffset: "2px",
        boxShadow: "0 0 0 6px rgba(255,255,255,0.6)"
      },
      menu: void 0
    };
  }
  let { menu: t3, ...r3 } = e3;
  return {
    id: void 0,
    priority: 0,
    styles: {
      outline: "2px dashed #029cfd"
    },
    ...r3,
    menu: Array.isArray(t3) ? t3.every(Array.isArray) ? t3 : [t3] : void 0
  };
}, "normalizeOptions"), Ko$1 = /* @__PURE__ */ n$1((e3) => e3 instanceof Function, "isFunction"), se$1 = /* @__PURE__ */ new Map(), q$1 = /* @__PURE__ */ new Map(), he$1 = /* @__PURE__ */ new Map(), z$1 = /* @__PURE__ */ n$1((e3) => {
  let t3 = Symbol();
  return q$1.set(t3, []), se$1.set(t3, e3), { get: /* @__PURE__ */ n$1(() => se$1.get(t3), "get"), set: /* @__PURE__ */ n$1((a4) => {
    var _a2;
    let p2 = se$1.get(t3), c4 = Ko$1(a4) ? a4(p2) : a4;
    c4 !== p2 && (se$1.set(t3, c4), (_a2 = q$1.get(t3)) == null ? void 0 : _a2.forEach((l4) => {
      var _a3;
      (_a3 = he$1.get(l4)) == null ? void 0 : _a3(), he$1.set(l4, l4(c4));
    }));
  }, "set"), subscribe: /* @__PURE__ */ n$1((a4) => {
    var _a2;
    return (_a2 = q$1.get(t3)) == null ? void 0 : _a2.push(a4), () => {
      let p2 = q$1.get(t3);
      p2 && q$1.set(
        t3,
        p2.filter((c4) => c4 !== a4)
      );
    };
  }, "subscribe"), teardown: /* @__PURE__ */ n$1(() => {
    var _a2;
    (_a2 = q$1.get(t3)) == null ? void 0 : _a2.forEach((a4) => {
      var _a3;
      (_a3 = he$1.get(a4)) == null ? void 0 : _a3(), he$1.delete(a4);
    }), q$1.delete(t3), se$1.delete(t3);
  }, "teardown") };
}, "useStore"), rt$1 = /* @__PURE__ */ n$1((e3) => {
  let t3 = document.getElementById("storybook-root"), r3 = /* @__PURE__ */ new Map();
  for (let o3 of e3) {
    let { priority: i3 = 0 } = o3;
    for (let s2 of o3.selectors) {
      let a4 = [
        ...document.querySelectorAll(
          // Elements matching the selector, excluding storybook elements and their descendants.
          // Necessary to find portaled elements (e.g. children of `body`).
          `:is(${s2}):not([id^="storybook-"], [id^="storybook-"] *, [class^="sb-"], [class^="sb-"] *)`
        ),
        // Elements matching the selector inside the storybook root, as these were excluded above.
        ...(t3 == null ? void 0 : t3.querySelectorAll(s2)) || []
      ];
      for (let p2 of a4) {
        let c4 = r3.get(p2);
        (!c4 || c4.priority <= i3) && r3.set(p2, {
          ...o3,
          priority: i3,
          selectors: Array.from(new Set(((c4 == null ? void 0 : c4.selectors) || []).concat(s2)))
        });
      }
    }
  }
  return r3;
}, "mapElements"), ar$1 = /* @__PURE__ */ n$1((e3) => Array.from(e3.entries()).map(([t3, {
  selectors: r3,
  styles: o3,
  hoverStyles: i3,
  focusStyles: s2,
  menu: a4
}]) => {
  let { top: p2, left: c4, width: l4, height: y4 } = t3.getBoundingClientRect(), { position: u2 } = getComputedStyle(t3);
  return {
    element: t3,
    selectors: r3,
    styles: o3,
    hoverStyles: i3,
    focusStyles: s2,
    menu: a4,
    top: u2 === "fixed" ? p2 : p2 + window.scrollY,
    left: u2 === "fixed" ? c4 : c4 + window.scrollX,
    width: l4,
    height: y4
  };
}).sort((t3, r3) => r3.width * r3.height - t3.width * t3.height), "mapBoxes"), ot = /* @__PURE__ */ n$1((e3, t3) => {
  let r3 = e3.getBoundingClientRect(), { x: o3, y: i3 } = t3;
  return (r3 == null ? void 0 : r3.top) && (r3 == null ? void 0 : r3.left) && o3 >= r3.left && o3 <= r3.left + r3.width && i3 >= r3.top && i3 <= r3.top + r3.height;
}, "isOverMenu"), nt = /* @__PURE__ */ n$1((e3, t3, r3) => {
  if (!t3 || !r3)
    return false;
  let { left: o3, top: i3, width: s2, height: a4 } = e3;
  a4 < B$1 && (i3 = i3 - Math.round((B$1 - a4) / 2), a4 = B$1), s2 < B$1 && (o3 = o3 - Math.round((B$1 - s2) / 2), s2 = B$1), t3.style.position === "fixed" && (o3 += window.scrollX, i3 += window.scrollY);
  let { x: p2, y: c4 } = r3;
  return p2 >= o3 && p2 <= o3 + s2 && c4 >= i3 && c4 <= i3 + a4;
}, "isTargeted"), pr = /* @__PURE__ */ n$1((e3, t3, r3 = {}) => {
  let { x: o3, y: i3 } = t3, { margin: s2 = 5, topOffset: a4 = 0, centered: p2 = false } = r3, { scrollX: c4, scrollY: l4, innerHeight: y4, innerWidth: u2 } = window, h4 = Math.min(
    e3.style.position === "fixed" ? i3 - l4 : i3,
    y4 - e3.clientHeight - s2 - a4 + l4
  ), T2 = p2 ? e3.clientWidth / 2 : 0, R4 = e3.style.position === "fixed" ? Math.max(Math.min(o3 - c4, u2 - T2 - s2), T2 + s2) : Math.max(
    Math.min(o3, u2 - T2 - s2 + c4),
    T2 + s2 + c4
  );
  Object.assign(e3.style, {
    ...R4 !== o3 && { left: `${R4}px` },
    ...h4 !== i3 && { top: `${h4}px` }
  });
}, "keepInViewport"), it$1 = /* @__PURE__ */ n$1((e3) => {
  window.HTMLElement.prototype.hasOwnProperty("showPopover") && e3.showPopover();
}, "showPopover"), lr = /* @__PURE__ */ n$1((e3) => {
  window.HTMLElement.prototype.hasOwnProperty("showPopover") && e3.hidePopover();
}, "hidePopover"), cr$1 = /* @__PURE__ */ n$1((e3) => ({
  top: e3.top,
  left: e3.left,
  width: e3.width,
  height: e3.height,
  selectors: e3.selectors,
  element: {
    attributes: Object.fromEntries(
      Array.from(e3.element.attributes).map((t3) => [t3.name, t3.value])
    ),
    localName: e3.element.localName,
    tagName: e3.element.tagName,
    outerHTML: e3.element.outerHTML
  }
}), "getEventDetails");
var C$2 = "storybook-highlights-menu", dr$1 = "storybook-highlights-root", Xo = "storybook-root", mr = /* @__PURE__ */ n$1((e3) => {
  if (globalThis.__STORYBOOK_HIGHLIGHT_INITIALIZED)
    return;
  globalThis.__STORYBOOK_HIGHLIGHT_INITIALIZED = true;
  let { document: t3 } = globalThis, r3 = z$1([]), o3 = z$1(/* @__PURE__ */ new Map()), i3 = z$1([]), s2 = z$1(), a4 = z$1(), p2 = z$1([]), c4 = z$1([]), l4 = z$1(), y4 = z$1(), u2 = t3.getElementById(dr$1);
  r3.subscribe(() => {
    u2 || (u2 = M$1("div", { id: dr$1 }), t3.body.appendChild(u2));
  }), r3.subscribe((d2) => {
    let m4 = t3.getElementById(Xo);
    if (!m4)
      return;
    o3.set(rt$1(d2));
    let f2 = new MutationObserver(() => o3.set(rt$1(d2)));
    return f2.observe(m4, { subtree: true, childList: true }), () => {
      f2.disconnect();
    };
  }), o3.subscribe((d2) => {
    let m4 = /* @__PURE__ */ n$1(() => requestAnimationFrame(() => i3.set(ar$1(d2))), "updateBoxes"), f2 = new ResizeObserver(m4);
    f2.observe(t3.body), Array.from(d2.keys()).forEach((g4) => f2.observe(g4));
    let x4 = Array.from(t3.body.querySelectorAll("*")).filter((g4) => {
      let { overflow: E3, overflowX: I2, overflowY: k2 } = window.getComputedStyle(g4);
      return ["auto", "scroll"].some((H2) => [E3, I2, k2].includes(H2));
    });
    return x4.forEach((g4) => g4.addEventListener("scroll", m4)), () => {
      f2.disconnect(), x4.forEach((g4) => g4.removeEventListener("scroll", m4));
    };
  }), o3.subscribe((d2) => {
    let m4 = Array.from(d2.keys()).filter(({ style: x4 }) => x4.position === "sticky"), f2 = /* @__PURE__ */ n$1(() => requestAnimationFrame(() => {
      i3.set(
        (x4) => x4.map((g4) => {
          if (m4.includes(g4.element)) {
            let { top: E3, left: I2 } = g4.element.getBoundingClientRect();
            return { ...g4, top: E3 + window.scrollY, left: I2 + window.scrollX };
          }
          return g4;
        })
      );
    }), "updateBoxes");
    return t3.addEventListener("scroll", f2), () => t3.removeEventListener("scroll", f2);
  }), o3.subscribe((d2) => {
    p2.set((m4) => m4.filter(({ element: f2 }) => d2.has(f2)));
  }), p2.subscribe((d2) => {
    d2.length ? (y4.set((m4) => d2.some((f2) => f2.element === (m4 == null ? void 0 : m4.element)) ? m4 : void 0), l4.set((m4) => d2.some((f2) => f2.element === (m4 == null ? void 0 : m4.element)) ? m4 : void 0)) : (y4.set(void 0), l4.set(void 0), s2.set(void 0));
  });
  let h4 = new Map(/* @__PURE__ */ new Map());
  r3.subscribe((d2) => {
    d2.forEach(({ keyframes: m4 }) => {
      if (m4) {
        let f2 = h4.get(m4);
        f2 || (f2 = t3.createElement("style"), f2.setAttribute("data-highlight", "keyframes"), h4.set(m4, f2), t3.head.appendChild(f2)), f2.innerHTML = m4;
      }
    }), h4.forEach((m4, f2) => {
      d2.some((x4) => x4.keyframes === f2) || (m4.remove(), h4.delete(f2));
    });
  });
  let T2 = new Map(/* @__PURE__ */ new Map());
  i3.subscribe((d2) => {
    d2.forEach((m4) => {
      let f2 = T2.get(m4.element);
      if (u2 && !f2) {
        let x4 = {
          popover: "manual",
          "data-highlight-dimensions": `w${m4.width.toFixed(0)}h${m4.height.toFixed(0)}`,
          "data-highlight-coordinates": `x${m4.left.toFixed(0)}y${m4.top.toFixed(0)}`
        };
        f2 = u2.appendChild(
          M$1("div", x4, [M$1("div")])
        ), T2.set(m4.element, f2);
      }
    }), T2.forEach((m4, f2) => {
      d2.some(({ element: x4 }) => x4 === f2) || (m4.remove(), T2.delete(f2));
    });
  }), i3.subscribe((d2) => {
    let m4 = d2.filter((x4) => x4.menu);
    if (!m4.length)
      return;
    let f2 = /* @__PURE__ */ n$1((x4) => {
      requestAnimationFrame(() => {
        let g4 = t3.getElementById(C$2), E3 = { x: x4.pageX, y: x4.pageY };
        if (g4 && !ot(g4, E3)) {
          let I2 = m4.filter((k2) => {
            let H2 = T2.get(k2.element);
            return nt(k2, H2, E3);
          });
          s2.set(I2.length ? E3 : void 0), p2.set(I2);
        }
      });
    }, "onClick");
    return t3.addEventListener("click", f2), () => t3.removeEventListener("click", f2);
  });
  let R4 = /* @__PURE__ */ n$1(() => {
    let d2 = t3.getElementById(C$2), m4 = a4.get();
    !m4 || d2 && ot(d2, m4) || c4.set((f2) => {
      let x4 = i3.get().filter((k2) => {
        let H2 = T2.get(k2.element);
        return nt(k2, H2, m4);
      }), g4 = f2.filter((k2) => x4.includes(k2)), E3 = x4.filter((k2) => !f2.includes(k2)), I2 = f2.length - g4.length;
      return E3.length || I2 ? [...g4, ...E3] : f2;
    });
  }, "updateHovered");
  a4.subscribe(R4), i3.subscribe(R4);
  let P2 = /* @__PURE__ */ n$1(() => {
    let d2 = y4.get(), m4 = d2 ? [d2] : p2.get(), f2 = m4.length === 1 ? m4[0] : l4.get(), x4 = s2.get() !== void 0;
    i3.get().forEach((g4) => {
      var _a2;
      let E3 = T2.get(g4.element);
      if (E3) {
        let I2 = f2 === g4, k2 = x4 ? f2 ? I2 : m4.includes(g4) : (_a2 = c4.get()) == null ? void 0 : _a2.includes(g4);
        Object.assign(E3.style, {
          animation: "none",
          background: "transparent",
          border: "none",
          boxSizing: "border-box",
          outline: "none",
          outlineOffset: "0px",
          ...g4.styles,
          ...k2 ? g4.hoverStyles : {},
          ...I2 ? g4.focusStyles : {},
          position: getComputedStyle(g4.element).position === "fixed" ? "fixed" : "absolute",
          zIndex: et$1 - 10,
          top: `${g4.top}px`,
          left: `${g4.left}px`,
          width: `${g4.width}px`,
          height: `${g4.height}px`,
          margin: 0,
          padding: 0,
          cursor: g4.menu && k2 ? "pointer" : "default",
          pointerEvents: g4.menu ? "auto" : "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "visible"
        }), Object.assign(E3.children[0].style, {
          width: "100%",
          height: "100%",
          minHeight: `${B$1}px`,
          minWidth: `${B$1}px`,
          boxSizing: "content-box",
          padding: E3.style.outlineWidth || "0px"
        }), it$1(E3);
      }
    });
  }, "updateBoxStyles");
  i3.subscribe(P2), p2.subscribe(P2), c4.subscribe(P2), l4.subscribe(P2), y4.subscribe(P2);
  let L2 = /* @__PURE__ */ n$1(() => {
    var _a2;
    if (!u2)
      return;
    let d2 = t3.getElementById(C$2);
    if (d2)
      d2.innerHTML = "";
    else {
      let g4 = { id: C$2, popover: "manual" };
      d2 = u2.appendChild(M$1("div", g4)), u2.appendChild(
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
    let m4 = y4.get(), f2 = m4 ? [m4] : p2.get();
    if (f2.length && (d2.style.position = getComputedStyle(f2[0].element).position === "fixed" ? "fixed" : "absolute", d2.appendChild(
      M$1(
        "ul",
        { class: "element-list" },
        f2.map((g4) => {
          var _a3;
          let E3 = f2.length > 1 && !!((_a3 = g4.menu) == null ? void 0 : _a3.some(
            (H2) => H2.some(
              (X2) => !X2.selectors || X2.selectors.some((le2) => g4.selectors.includes(le2))
            )
          )), I2 = E3 ? {
            class: "selectable",
            onClick: /* @__PURE__ */ n$1(() => y4.set(g4), "onClick"),
            onMouseEnter: /* @__PURE__ */ n$1(() => l4.set(g4), "onMouseEnter"),
            onMouseLeave: /* @__PURE__ */ n$1(() => l4.set(void 0), "onMouseLeave")
          } : m4 ? { class: "selected", onClick: /* @__PURE__ */ n$1(() => y4.set(void 0), "onClick") } : {}, k2 = E3 || m4;
          return M$1("li", I2, [
            M$1(k2 ? "button" : "div", k2 ? { type: "button" } : {}, [
              m4 ? ae$2("chevronLeft") : null,
              M$1("code", {}, [g4.element.outerHTML]),
              E3 ? ae$2("chevronRight") : null
            ])
          ]);
        })
      )
    )), y4.get() || p2.get().length === 1) {
      let g4 = y4.get() || p2.get()[0], E3 = (_a2 = g4.menu) == null ? void 0 : _a2.filter(
        (I2) => I2.some(
          (k2) => !k2.selectors || k2.selectors.some((H2) => g4.selectors.includes(H2))
        )
      );
      (E3 == null ? void 0 : E3.length) && d2.appendChild(
        M$1(
          "ul",
          { class: "menu-list" },
          E3.map(
            (I2) => M$1("li", {}, [
              M$1(
                "ul",
                { class: "menu-items" },
                I2.map(
                  ({ id: k2, title: H2, description: X2, iconLeft: le2, iconRight: gt2, clickEvent: ht2 }) => {
                    let we2 = ht2 && (() => e3.emit(ht2, k2, cr$1(g4)));
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
    let x4 = s2.get();
    x4 ? (Object.assign(d2.style, {
      display: "block",
      left: `${d2.style.position === "fixed" ? x4.x - window.scrollX : x4.x}px`,
      top: `${d2.style.position === "fixed" ? x4.y - window.scrollY : x4.y}px`
    }), it$1(d2), requestAnimationFrame(() => pr(d2, x4, { topOffset: 15, centered: true }))) : (lr(d2), Object.assign(d2.style, { display: "none" }));
  }, "renderMenu");
  p2.subscribe(L2), y4.subscribe(L2);
  let O2 = /* @__PURE__ */ n$1((d2) => {
    let m4 = sr$1(d2);
    r3.set((f2) => {
      var _a2;
      let x4 = m4.id ? f2.filter((g4) => g4.id !== m4.id) : f2;
      return ((_a2 = m4.selectors) == null ? void 0 : _a2.length) ? [...x4, m4] : x4;
    });
  }, "addHighlight"), F2 = /* @__PURE__ */ n$1((d2) => {
    d2 && r3.set((m4) => m4.filter((f2) => f2.id !== d2));
  }, "removeHighlight"), A3 = /* @__PURE__ */ n$1(() => {
    r3.set([]), o3.set(/* @__PURE__ */ new Map()), i3.set([]), s2.set(void 0), a4.set(void 0), p2.set([]), c4.set([]), l4.set(void 0), y4.set(void 0);
  }, "resetState"), S3, v3 = /* @__PURE__ */ n$1((d2, m4) => {
    let f2 = "scrollIntoView-highlight";
    clearTimeout(S3), F2(f2);
    let x4 = t3.querySelector(d2);
    if (!x4) {
      console.warn(`Cannot scroll into view: ${d2} not found`);
      return;
    }
    x4.scrollIntoView({ behavior: "smooth", block: "center", ...m4 });
    let g4 = `kf-${Math.random().toString(36).substring(2, 15)}`;
    r3.set((E3) => [
      ...E3,
      {
        id: f2,
        priority: 1e3,
        selectors: [d2],
        styles: {
          outline: "2px solid #1EA7FD",
          outlineOffset: "-1px",
          animation: `${g4} 3s linear forwards`
        },
        keyframes: `@keyframes ${g4} {
          0% { outline: 2px solid #1EA7FD; }
          20% { outline: 2px solid #1EA7FD00; }
          40% { outline: 2px solid #1EA7FD; }
          60% { outline: 2px solid #1EA7FD00; }
          80% { outline: 2px solid #1EA7FD; }
          100% { outline: 2px solid #1EA7FD00; }
        }`
      }
    ]), S3 = setTimeout(() => F2(f2), 3500);
  }, "scrollIntoView"), w3 = /* @__PURE__ */ n$1((d2) => {
    requestAnimationFrame(() => a4.set({ x: d2.pageX, y: d2.pageY }));
  }, "onMouseMove");
  t3.body.addEventListener("mousemove", w3), e3.on(rr$1, O2), e3.on(or$1, F2), e3.on(nr$1, A3), e3.on(ir, v3), e3.on(qo$1, ({ newPhase: d2 }) => {
    d2 === "loading" && A3();
  });
}, "useHighlights");
((_b = globalThis == null ? void 0 : globalThis.FEATURES) == null ? void 0 : _b.highlight) && (ur$1 == null ? void 0 : ur$1.ready) && ur$1.ready().then(mr);
var st2 = /* @__PURE__ */ n$1(() => rc$1({}), "default");
var fr$1 = "measureEnabled";
const { useEffect: kr$1 } = __STORYBOOK_MODULE_PREVIEW_API__;
const { global: be$1 } = __STORYBOOK_MODULE_GLOBAL__;
function yr$1() {
  let e3 = be$1.document.documentElement, t3 = Math.max(e3.scrollHeight, e3.offsetHeight);
  return { width: Math.max(e3.scrollWidth, e3.offsetWidth), height: t3 };
}
n$1(yr$1, "getDocumentWidthAndHeight");
function Jo$1() {
  let e3 = be$1.document.createElement("canvas");
  e3.id = "storybook-addon-measure";
  let t3 = e3.getContext("2d");
  ye$1(t3 != null);
  let { width: r3, height: o3 } = yr$1();
  return at$1(e3, t3, { width: r3, height: o3 }), e3.style.position = "absolute", e3.style.left = "0", e3.style.top = "0", e3.style.zIndex = "2147483647", e3.style.pointerEvents = "none", be$1.document.body.appendChild(e3), { canvas: e3, context: t3, width: r3, height: o3 };
}
n$1(Jo$1, "createCanvas");
function at$1(e3, t3, { width: r3, height: o3 }) {
  e3.style.width = `${r3}px`, e3.style.height = `${o3}px`;
  let i3 = be$1.window.devicePixelRatio;
  e3.width = Math.floor(r3 * i3), e3.height = Math.floor(o3 * i3), t3.scale(i3, i3);
}
n$1(at$1, "setCanvasWidthAndHeight");
var $$1 = {};
function gr$1() {
  $$1.canvas || ($$1 = Jo$1());
}
n$1(gr$1, "init");
function hr() {
  $$1.context && $$1.context.clearRect(0, 0, $$1.width ?? 0, $$1.height ?? 0);
}
n$1(hr, "clear");
function xr$1(e3) {
  hr(), e3($$1.context);
}
n$1(xr$1, "draw");
function br$1() {
  ye$1($$1.canvas, "Canvas should exist in the state."), ye$1($$1.context, "Context should exist in the state."), at$1($$1.canvas, $$1.context, {
    width: 0,
    height: 0
  });
  let { width: e3, height: t3 } = yr$1();
  at$1($$1.canvas, $$1.context, { width: e3, height: t3 }), $$1.width = e3, $$1.height = t3;
}
n$1(br$1, "rescale");
function Tr() {
  var _a2;
  $$1.canvas && (hr(), (_a2 = $$1.canvas.parentNode) == null ? void 0 : _a2.removeChild($$1.canvas), $$1 = {});
}
n$1(Tr, "destroy");
const { global: j$1 } = __STORYBOOK_MODULE_GLOBAL__;
var J$2 = {
  margin: "#f6b26b",
  border: "#ffe599",
  padding: "#93c47d",
  content: "#6fa8dc",
  text: "#232020"
}, G$1 = 6;
function Sr(e3, { x: t3, y: r3, w: o3, h: i3, r: s2 }) {
  t3 = t3 - o3 / 2, r3 = r3 - i3 / 2, o3 < 2 * s2 && (s2 = o3 / 2), i3 < 2 * s2 && (s2 = i3 / 2), e3.beginPath(), e3.moveTo(t3 + s2, r3), e3.arcTo(t3 + o3, r3, t3 + o3, r3 + i3, s2), e3.arcTo(t3 + o3, r3 + i3, t3, r3 + i3, s2), e3.arcTo(t3, r3 + i3, t3, r3, s2), e3.arcTo(t3, r3, t3 + o3, r3, s2), e3.closePath();
}
n$1(Sr, "roundedRect");
function Qo$1(e3, { padding: t3, border: r3, width: o3, height: i3, top: s2, left: a4 }) {
  let p2 = o3 - r3.left - r3.right - t3.left - t3.right, c4 = i3 - t3.top - t3.bottom - r3.top - r3.bottom, l4 = a4 + r3.left + t3.left, y4 = s2 + r3.top + t3.top;
  return e3 === "top" ? l4 += p2 / 2 : e3 === "right" ? (l4 += p2, y4 += c4 / 2) : e3 === "bottom" ? (l4 += p2 / 2, y4 += c4) : e3 === "left" ? y4 += c4 / 2 : e3 === "center" && (l4 += p2 / 2, y4 += c4 / 2), { x: l4, y: y4 };
}
n$1(Qo$1, "positionCoordinate");
function en$1(e3, t3, { margin: r3, border: o3, padding: i3 }, s2, a4) {
  let p2 = /* @__PURE__ */ n$1((h4) => 0, "shift"), c4 = 0, l4 = 0, y4 = a4 ? 1 : 0.5, u2 = a4 ? s2 * 2 : 0;
  return e3 === "padding" ? p2 = /* @__PURE__ */ n$1((h4) => i3[h4] * y4 + u2, "shift") : e3 === "border" ? p2 = /* @__PURE__ */ n$1((h4) => i3[h4] + o3[h4] * y4 + u2, "shift") : e3 === "margin" && (p2 = /* @__PURE__ */ n$1((h4) => i3[h4] + o3[h4] + r3[h4] * y4 + u2, "shift")), t3 === "top" ? l4 = -p2("top") : t3 === "right" ? c4 = p2("right") : t3 === "bottom" ? l4 = p2("bottom") : t3 === "left" && (c4 = -p2("left")), { offsetX: c4, offsetY: l4 };
}
n$1(en$1, "offset");
function tn(e3, t3) {
  return Math.abs(e3.x - t3.x) < Math.abs(e3.w + t3.w) / 2 && Math.abs(e3.y - t3.y) < Math.abs(e3.h + t3.h) / 2;
}
n$1(tn, "collide");
function rn(e3, t3, r3) {
  return e3 === "top" ? t3.y = r3.y - r3.h - G$1 : e3 === "right" ? t3.x = r3.x + r3.w / 2 + G$1 + t3.w / 2 : e3 === "bottom" ? t3.y = r3.y + r3.h + G$1 : e3 === "left" && (t3.x = r3.x - r3.w / 2 - G$1 - t3.w / 2), { x: t3.x, y: t3.y };
}
n$1(rn, "overlapAdjustment");
function Ar$1(e3, t3, { x: r3, y: o3, w: i3, h: s2 }, a4) {
  return Sr(e3, { x: r3, y: o3, w: i3, h: s2, r: 3 }), e3.fillStyle = `${J$2[t3]}dd`, e3.fill(), e3.strokeStyle = J$2[t3], e3.stroke(), e3.fillStyle = J$2.text, e3.fillText(a4, r3, o3), Sr(e3, { x: r3, y: o3, w: i3, h: s2, r: 3 }), e3.fillStyle = `${J$2[t3]}dd`, e3.fill(), e3.strokeStyle = J$2[t3], e3.stroke(), e3.fillStyle = J$2.text, e3.fillText(a4, r3, o3), { x: r3, y: o3, w: i3, h: s2 };
}
n$1(Ar$1, "textWithRect");
function Rr(e3, t3) {
  e3.font = "600 12px monospace", e3.textBaseline = "middle", e3.textAlign = "center";
  let r3 = e3.measureText(t3), o3 = r3.actualBoundingBoxAscent + r3.actualBoundingBoxDescent, i3 = r3.width + G$1 * 2, s2 = o3 + G$1 * 2;
  return { w: i3, h: s2 };
}
n$1(Rr, "configureText");
function on(e3, t3, { type: r3, position: o3 = "center", text: i3 }, s2, a4 = false) {
  let { x: p2, y: c4 } = Qo$1(o3, t3), { offsetX: l4, offsetY: y4 } = en$1(r3, o3, t3, G$1 + 1, a4);
  p2 += l4, c4 += y4;
  let { w: u2, h: h4 } = Rr(e3, i3);
  if (s2 && tn({ x: p2, y: c4, w: u2, h: h4 }, s2)) {
    let T2 = rn(o3, { x: p2, y: c4, w: u2 }, s2);
    p2 = T2.x, c4 = T2.y;
  }
  return Ar$1(e3, r3, { x: p2, y: c4, w: u2, h: h4 }, i3);
}
n$1(on, "drawLabel");
function nn(e3, { w: t3, h: r3 }) {
  let o3 = t3 * 0.5 + G$1, i3 = r3 * 0.5 + G$1;
  return {
    offsetX: (e3.x === "left" ? -1 : 1) * o3,
    offsetY: (e3.y === "top" ? -1 : 1) * i3
  };
}
n$1(nn, "floatingOffset");
function sn$1(e3, t3, { type: r3, text: o3 }) {
  let { floatingAlignment: i3, extremities: s2 } = t3, a4 = s2[i3.x], p2 = s2[i3.y], { w: c4, h: l4 } = Rr(e3, o3), { offsetX: y4, offsetY: u2 } = nn(i3, {
    w: c4,
    h: l4
  });
  return a4 += y4, p2 += u2, Ar$1(e3, r3, { x: a4, y: p2, w: c4, h: l4 }, o3);
}
n$1(sn$1, "drawFloatingLabel");
function pe$1(e3, t3, r3, o3) {
  let i3 = [];
  r3.forEach((s2, a4) => {
    let p2 = o3 && s2.position === "center" ? sn$1(e3, t3, s2) : on(e3, t3, s2, i3[a4 - 1], o3);
    i3[a4] = p2;
  });
}
n$1(pe$1, "drawStack");
function wr(e3, t3, r3, o3) {
  let i3 = r3.reduce((s2, a4) => {
    var _a2;
    return Object.prototype.hasOwnProperty.call(s2, a4.position) || (s2[a4.position] = []), (_a2 = s2[a4.position]) == null ? void 0 : _a2.push(a4), s2;
  }, {});
  i3.top && pe$1(e3, t3, i3.top, o3), i3.right && pe$1(e3, t3, i3.right, o3), i3.bottom && pe$1(e3, t3, i3.bottom, o3), i3.left && pe$1(e3, t3, i3.left, o3), i3.center && pe$1(e3, t3, i3.center, o3);
}
n$1(wr, "labelStacks");
var Te$1 = {
  margin: "#f6b26ba8",
  border: "#ffe599a8",
  padding: "#93c47d8c",
  content: "#6fa8dca8"
}, Er$1 = 30;
function _$1(e3) {
  return parseInt(e3.replace("px", ""), 10);
}
n$1(_$1, "pxToNumber");
function Q$1(e3) {
  return Number.isInteger(e3) ? e3 : e3.toFixed(2);
}
n$1(Q$1, "round");
function pt$1(e3) {
  return e3.filter((t3) => t3.text !== 0 && t3.text !== "0");
}
n$1(pt$1, "filterZeroValues");
function an$1(e3) {
  let t3 = {
    top: j$1.window.scrollY,
    bottom: j$1.window.scrollY + j$1.window.innerHeight,
    left: j$1.window.scrollX,
    right: j$1.window.scrollX + j$1.window.innerWidth
  }, r3 = {
    top: Math.abs(t3.top - e3.top),
    bottom: Math.abs(t3.bottom - e3.bottom),
    left: Math.abs(t3.left - e3.left),
    right: Math.abs(t3.right - e3.right)
  };
  return {
    x: r3.left > r3.right ? "left" : "right",
    y: r3.top > r3.bottom ? "top" : "bottom"
  };
}
n$1(an$1, "floatingAlignment");
function pn$1(e3) {
  let t3 = j$1.getComputedStyle(e3), { top: r3, left: o3, right: i3, bottom: s2, width: a4, height: p2 } = e3.getBoundingClientRect(), {
    marginTop: c4,
    marginBottom: l4,
    marginLeft: y4,
    marginRight: u2,
    paddingTop: h4,
    paddingBottom: T2,
    paddingLeft: R4,
    paddingRight: P2,
    borderBottomWidth: L2,
    borderTopWidth: O2,
    borderLeftWidth: F2,
    borderRightWidth: A3
  } = t3;
  r3 = r3 + j$1.window.scrollY, o3 = o3 + j$1.window.scrollX, s2 = s2 + j$1.window.scrollY, i3 = i3 + j$1.window.scrollX;
  let S3 = {
    top: _$1(c4),
    bottom: _$1(l4),
    left: _$1(y4),
    right: _$1(u2)
  }, v3 = {
    top: _$1(h4),
    bottom: _$1(T2),
    left: _$1(R4),
    right: _$1(P2)
  }, w3 = {
    top: _$1(O2),
    bottom: _$1(L2),
    left: _$1(F2),
    right: _$1(A3)
  }, d2 = {
    top: r3 - S3.top,
    bottom: s2 + S3.bottom,
    left: o3 - S3.left,
    right: i3 + S3.right
  };
  return {
    margin: S3,
    padding: v3,
    border: w3,
    top: r3,
    left: o3,
    bottom: s2,
    right: i3,
    width: a4,
    height: p2,
    extremities: d2,
    floatingAlignment: an$1(d2)
  };
}
n$1(pn$1, "measureElement");
function ln$1(e3, { margin: t3, width: r3, height: o3, top: i3, left: s2, bottom: a4, right: p2 }) {
  let c4 = o3 + t3.bottom + t3.top;
  e3.fillStyle = Te$1.margin, e3.fillRect(s2, i3 - t3.top, r3, t3.top), e3.fillRect(p2, i3 - t3.top, t3.right, c4), e3.fillRect(s2, a4, r3, t3.bottom), e3.fillRect(
    s2 - t3.left,
    i3 - t3.top,
    t3.left,
    c4
  );
  let l4 = [
    {
      type: "margin",
      text: Q$1(t3.top),
      position: "top"
    },
    {
      type: "margin",
      text: Q$1(t3.right),
      position: "right"
    },
    {
      type: "margin",
      text: Q$1(t3.bottom),
      position: "bottom"
    },
    {
      type: "margin",
      text: Q$1(t3.left),
      position: "left"
    }
  ];
  return pt$1(l4);
}
n$1(ln$1, "drawMargin");
function cn(e3, { padding: t3, border: r3, width: o3, height: i3, top: s2, left: a4, bottom: p2, right: c4 }) {
  let l4 = o3 - r3.left - r3.right, y4 = i3 - t3.top - t3.bottom - r3.top - r3.bottom;
  e3.fillStyle = Te$1.padding, e3.fillRect(a4 + r3.left, s2 + r3.top, l4, t3.top), e3.fillRect(
    c4 - t3.right - r3.right,
    s2 + t3.top + r3.top,
    t3.right,
    y4
  ), e3.fillRect(
    a4 + r3.left,
    p2 - t3.bottom - r3.bottom,
    l4,
    t3.bottom
  ), e3.fillRect(a4 + r3.left, s2 + t3.top + r3.top, t3.left, y4);
  let u2 = [
    {
      type: "padding",
      text: t3.top,
      position: "top"
    },
    {
      type: "padding",
      text: t3.right,
      position: "right"
    },
    {
      type: "padding",
      text: t3.bottom,
      position: "bottom"
    },
    {
      type: "padding",
      text: t3.left,
      position: "left"
    }
  ];
  return pt$1(u2);
}
n$1(cn, "drawPadding");
function dn$1(e3, { border: t3, width: r3, height: o3, top: i3, left: s2, bottom: a4, right: p2 }) {
  let c4 = o3 - t3.top - t3.bottom;
  e3.fillStyle = Te$1.border, e3.fillRect(s2, i3, r3, t3.top), e3.fillRect(s2, a4 - t3.bottom, r3, t3.bottom), e3.fillRect(s2, i3 + t3.top, t3.left, c4), e3.fillRect(
    p2 - t3.right,
    i3 + t3.top,
    t3.right,
    c4
  );
  let l4 = [
    {
      type: "border",
      text: t3.top,
      position: "top"
    },
    {
      type: "border",
      text: t3.right,
      position: "right"
    },
    {
      type: "border",
      text: t3.bottom,
      position: "bottom"
    },
    {
      type: "border",
      text: t3.left,
      position: "left"
    }
  ];
  return pt$1(l4);
}
n$1(dn$1, "drawBorder");
function mn$1(e3, { padding: t3, border: r3, width: o3, height: i3, top: s2, left: a4 }) {
  let p2 = o3 - r3.left - r3.right - t3.left - t3.right, c4 = i3 - t3.top - t3.bottom - r3.top - r3.bottom;
  return e3.fillStyle = Te$1.content, e3.fillRect(
    a4 + r3.left + t3.left,
    s2 + r3.top + t3.top,
    p2,
    c4
  ), [
    {
      type: "content",
      position: "center",
      text: `${Q$1(p2)} x ${Q$1(c4)}`
    }
  ];
}
n$1(mn$1, "drawContent");
function un$1(e3) {
  return (t3) => {
    if (e3 && t3) {
      let r3 = pn$1(e3), o3 = ln$1(t3, r3), i3 = cn(t3, r3), s2 = dn$1(t3, r3), a4 = mn$1(t3, r3), p2 = r3.width <= Er$1 * 3 || r3.height <= Er$1;
      wr(
        t3,
        r3,
        [...a4, ...i3, ...s2, ...o3],
        p2
      );
    }
  };
}
n$1(un$1, "drawBoxModel");
function Cr$1(e3) {
  xr$1(un$1(e3));
}
n$1(Cr$1, "drawSelectedElement");
const { global: fn$1 } = __STORYBOOK_MODULE_GLOBAL__;
var vr$1 = /* @__PURE__ */ n$1((e3, t3) => {
  let r3 = fn$1.document.elementFromPoint(e3, t3), o3 = /* @__PURE__ */ n$1((s2) => {
    if (s2 && s2.shadowRoot) {
      let a4 = s2.shadowRoot.elementFromPoint(e3, t3);
      return s2.isEqualNode(a4) ? s2 : a4.shadowRoot ? o3(a4) : a4;
    }
    return s2;
  }, "crawlShadows");
  return o3(r3) || r3;
}, "deepElementFromPoint");
var Pr, Se$1 = { x: 0, y: 0 };
function Or$1(e3, t3) {
  Pr = vr$1(e3, t3), Cr$1(Pr);
}
n$1(Or$1, "findAndDrawElement");
var Mr = /* @__PURE__ */ n$1((e3, t3) => {
  let { measureEnabled: r3 } = t3.globals || {};
  return kr$1(() => {
    if (typeof globalThis.document > "u")
      return;
    let o3 = /* @__PURE__ */ n$1((i3) => {
      window.requestAnimationFrame(() => {
        i3.stopPropagation(), Se$1.x = i3.clientX, Se$1.y = i3.clientY;
      });
    }, "onPointerMove");
    return globalThis.document.addEventListener("pointermove", o3), () => {
      globalThis.document.removeEventListener("pointermove", o3);
    };
  }, []), kr$1(() => {
    let o3 = /* @__PURE__ */ n$1((s2) => {
      window.requestAnimationFrame(() => {
        s2.stopPropagation(), Or$1(s2.clientX, s2.clientY);
      });
    }, "onPointerOver"), i3 = /* @__PURE__ */ n$1(() => {
      window.requestAnimationFrame(() => {
        br$1();
      });
    }, "onResize");
    return t3.viewMode === "story" && r3 && (globalThis.document.addEventListener("pointerover", o3), gr$1(), globalThis.window.addEventListener(
      "resize",
      i3
    ), Or$1(Se$1.x, Se$1.y)), () => {
      globalThis.window.removeEventListener("resize", i3), Tr();
    };
  }, [r3, t3.viewMode]), e3();
}, "withMeasure");
var gn = ((_c = globalThis.FEATURES) == null ? void 0 : _c.measure) ? [Mr] : [], hn$1 = {
  [fr$1]: false
}, lt = /* @__PURE__ */ n$1(() => rc$1({
  decorators: gn,
  initialGlobals: hn$1
}), "default");
var Ae$1 = "outline";
const { useEffect: bn$1, useMemo: Tn$1 } = __STORYBOOK_MODULE_PREVIEW_API__;
const { global: Re$2 } = __STORYBOOK_MODULE_GLOBAL__;
var ct$1 = /* @__PURE__ */ n$1((e3) => {
  (Array.isArray(e3) ? e3 : [e3]).forEach(xn$1);
}, "clearStyles"), xn$1 = /* @__PURE__ */ n$1((e3) => {
  let t3 = typeof e3 == "string" ? e3 : e3.join(""), r3 = Re$2.document.getElementById(t3);
  r3 && r3.parentElement && r3.parentElement.removeChild(r3);
}, "clearStyle"), $r$1 = /* @__PURE__ */ n$1((e3, t3) => {
  let r3 = Re$2.document.getElementById(e3);
  if (r3)
    r3.innerHTML !== t3 && (r3.innerHTML = t3);
  else {
    let o3 = Re$2.document.createElement("style");
    o3.setAttribute("id", e3), o3.innerHTML = t3, Re$2.document.head.appendChild(o3);
  }
}, "addOutlineStyles");
function dt$1(e3) {
  return W$2`
    ${e3} body {
      outline: 1px solid #2980b9 !important;
    }

    ${e3} article {
      outline: 1px solid #3498db !important;
    }

    ${e3} nav {
      outline: 1px solid #0088c3 !important;
    }

    ${e3} aside {
      outline: 1px solid #33a0ce !important;
    }

    ${e3} section {
      outline: 1px solid #66b8da !important;
    }

    ${e3} header {
      outline: 1px solid #99cfe7 !important;
    }

    ${e3} footer {
      outline: 1px solid #cce7f3 !important;
    }

    ${e3} h1 {
      outline: 1px solid #162544 !important;
    }

    ${e3} h2 {
      outline: 1px solid #314e6e !important;
    }

    ${e3} h3 {
      outline: 1px solid #3e5e85 !important;
    }

    ${e3} h4 {
      outline: 1px solid #449baf !important;
    }

    ${e3} h5 {
      outline: 1px solid #c7d1cb !important;
    }

    ${e3} h6 {
      outline: 1px solid #4371d0 !important;
    }

    ${e3} main {
      outline: 1px solid #2f4f90 !important;
    }

    ${e3} address {
      outline: 1px solid #1a2c51 !important;
    }

    ${e3} div {
      outline: 1px solid #036cdb !important;
    }

    ${e3} p {
      outline: 1px solid #ac050b !important;
    }

    ${e3} hr {
      outline: 1px solid #ff063f !important;
    }

    ${e3} pre {
      outline: 1px solid #850440 !important;
    }

    ${e3} blockquote {
      outline: 1px solid #f1b8e7 !important;
    }

    ${e3} ol {
      outline: 1px solid #ff050c !important;
    }

    ${e3} ul {
      outline: 1px solid #d90416 !important;
    }

    ${e3} li {
      outline: 1px solid #d90416 !important;
    }

    ${e3} dl {
      outline: 1px solid #fd3427 !important;
    }

    ${e3} dt {
      outline: 1px solid #ff0043 !important;
    }

    ${e3} dd {
      outline: 1px solid #e80174 !important;
    }

    ${e3} figure {
      outline: 1px solid #ff00bb !important;
    }

    ${e3} figcaption {
      outline: 1px solid #bf0032 !important;
    }

    ${e3} table {
      outline: 1px solid #00cc99 !important;
    }

    ${e3} caption {
      outline: 1px solid #37ffc4 !important;
    }

    ${e3} thead {
      outline: 1px solid #98daca !important;
    }

    ${e3} tbody {
      outline: 1px solid #64a7a0 !important;
    }

    ${e3} tfoot {
      outline: 1px solid #22746b !important;
    }

    ${e3} tr {
      outline: 1px solid #86c0b2 !important;
    }

    ${e3} th {
      outline: 1px solid #a1e7d6 !important;
    }

    ${e3} td {
      outline: 1px solid #3f5a54 !important;
    }

    ${e3} col {
      outline: 1px solid #6c9a8f !important;
    }

    ${e3} colgroup {
      outline: 1px solid #6c9a9d !important;
    }

    ${e3} button {
      outline: 1px solid #da8301 !important;
    }

    ${e3} datalist {
      outline: 1px solid #c06000 !important;
    }

    ${e3} fieldset {
      outline: 1px solid #d95100 !important;
    }

    ${e3} form {
      outline: 1px solid #d23600 !important;
    }

    ${e3} input {
      outline: 1px solid #fca600 !important;
    }

    ${e3} keygen {
      outline: 1px solid #b31e00 !important;
    }

    ${e3} label {
      outline: 1px solid #ee8900 !important;
    }

    ${e3} legend {
      outline: 1px solid #de6d00 !important;
    }

    ${e3} meter {
      outline: 1px solid #e8630c !important;
    }

    ${e3} optgroup {
      outline: 1px solid #b33600 !important;
    }

    ${e3} option {
      outline: 1px solid #ff8a00 !important;
    }

    ${e3} output {
      outline: 1px solid #ff9619 !important;
    }

    ${e3} progress {
      outline: 1px solid #e57c00 !important;
    }

    ${e3} select {
      outline: 1px solid #e26e0f !important;
    }

    ${e3} textarea {
      outline: 1px solid #cc5400 !important;
    }

    ${e3} details {
      outline: 1px solid #33848f !important;
    }

    ${e3} summary {
      outline: 1px solid #60a1a6 !important;
    }

    ${e3} command {
      outline: 1px solid #438da1 !important;
    }

    ${e3} menu {
      outline: 1px solid #449da6 !important;
    }

    ${e3} del {
      outline: 1px solid #bf0000 !important;
    }

    ${e3} ins {
      outline: 1px solid #400000 !important;
    }

    ${e3} img {
      outline: 1px solid #22746b !important;
    }

    ${e3} iframe {
      outline: 1px solid #64a7a0 !important;
    }

    ${e3} embed {
      outline: 1px solid #98daca !important;
    }

    ${e3} object {
      outline: 1px solid #00cc99 !important;
    }

    ${e3} param {
      outline: 1px solid #37ffc4 !important;
    }

    ${e3} video {
      outline: 1px solid #6ee866 !important;
    }

    ${e3} audio {
      outline: 1px solid #027353 !important;
    }

    ${e3} source {
      outline: 1px solid #012426 !important;
    }

    ${e3} canvas {
      outline: 1px solid #a2f570 !important;
    }

    ${e3} track {
      outline: 1px solid #59a600 !important;
    }

    ${e3} map {
      outline: 1px solid #7be500 !important;
    }

    ${e3} area {
      outline: 1px solid #305900 !important;
    }

    ${e3} a {
      outline: 1px solid #ff62ab !important;
    }

    ${e3} em {
      outline: 1px solid #800b41 !important;
    }

    ${e3} strong {
      outline: 1px solid #ff1583 !important;
    }

    ${e3} i {
      outline: 1px solid #803156 !important;
    }

    ${e3} b {
      outline: 1px solid #cc1169 !important;
    }

    ${e3} u {
      outline: 1px solid #ff0430 !important;
    }

    ${e3} s {
      outline: 1px solid #f805e3 !important;
    }

    ${e3} small {
      outline: 1px solid #d107b2 !important;
    }

    ${e3} abbr {
      outline: 1px solid #4a0263 !important;
    }

    ${e3} q {
      outline: 1px solid #240018 !important;
    }

    ${e3} cite {
      outline: 1px solid #64003c !important;
    }

    ${e3} dfn {
      outline: 1px solid #b4005a !important;
    }

    ${e3} sub {
      outline: 1px solid #dba0c8 !important;
    }

    ${e3} sup {
      outline: 1px solid #cc0256 !important;
    }

    ${e3} time {
      outline: 1px solid #d6606d !important;
    }

    ${e3} code {
      outline: 1px solid #e04251 !important;
    }

    ${e3} kbd {
      outline: 1px solid #5e001f !important;
    }

    ${e3} samp {
      outline: 1px solid #9c0033 !important;
    }

    ${e3} var {
      outline: 1px solid #d90047 !important;
    }

    ${e3} mark {
      outline: 1px solid #ff0053 !important;
    }

    ${e3} bdi {
      outline: 1px solid #bf3668 !important;
    }

    ${e3} bdo {
      outline: 1px solid #6f1400 !important;
    }

    ${e3} ruby {
      outline: 1px solid #ff7b93 !important;
    }

    ${e3} rt {
      outline: 1px solid #ff2f54 !important;
    }

    ${e3} rp {
      outline: 1px solid #803e49 !important;
    }

    ${e3} span {
      outline: 1px solid #cc2643 !important;
    }

    ${e3} br {
      outline: 1px solid #db687d !important;
    }

    ${e3} wbr {
      outline: 1px solid #db175b !important;
    }`;
}
n$1(dt$1, "outlineCSS");
var Fr$1 = /* @__PURE__ */ n$1((e3, t3) => {
  let r3 = t3.globals || {}, o3 = [true, "true"].includes(r3[Ae$1]), i3 = t3.viewMode === "docs", s2 = Tn$1(() => dt$1(i3 ? '[data-story-block="true"]' : ".sb-show-main"), [t3]);
  return bn$1(() => {
    let a4 = i3 ? `addon-outline-docs-${t3.id}` : "addon-outline";
    return o3 ? $r$1(a4, s2) : ct$1(a4), () => {
      ct$1(a4);
    };
  }, [o3, s2, t3]), e3();
}, "withOutline");
var An = ((_d2 = globalThis.FEATURES) == null ? void 0 : _d2.outline) ? [Fr$1] : [], Rn$1 = {
  [Ae$1]: false
}, mt = /* @__PURE__ */ n$1(() => rc$1({ decorators: An, initialGlobals: Rn$1 }), "default");
const {
  clearAllMocks: Cn$1,
  fn: vn,
  isMockFunction: kn$1,
  resetAllMocks: Pn$1,
  restoreAllMocks: On$1,
  uninstrumentedUserEvent: Mn,
  within: $n$1
} = __STORYBOOK_MODULE_TEST__;
var Fn$1 = /* @__PURE__ */ n$1(({ parameters: e3 }) => {
  var _a2, _b2, _c2;
  ((_a2 = e3 == null ? void 0 : e3.test) == null ? void 0 : _a2.mockReset) === true ? Pn$1() : ((_b2 = e3 == null ? void 0 : e3.test) == null ? void 0 : _b2.clearMocks) === true ? Cn$1() : ((_c2 = e3 == null ? void 0 : e3.test) == null ? void 0 : _c2.restoreMocks) !== false && On$1();
}, "resetAllMocksLoader"), ut$1 = /* @__PURE__ */ n$1((e3, t3 = 0, r3) => {
  var _a2, _b2;
  if (t3 > 5 || e3 == null)
    return e3;
  if (kn$1(e3))
    return r3 && e3.mockName(r3), e3;
  if (typeof e3 == "function" && "isAction" in e3 && e3.isAction && !("implicit" in e3 && e3.implicit)) {
    let o3 = vn(e3);
    return r3 && o3.mockName(r3), o3;
  }
  if (Array.isArray(e3)) {
    t3++;
    for (let o3 = 0; o3 < e3.length; o3++)
      ((_a2 = Object.getOwnPropertyDescriptor(e3, o3)) == null ? void 0 : _a2.writable) && (e3[o3] = ut$1(e3[o3], t3));
    return e3;
  }
  if (typeof e3 == "object" && e3.constructor === Object) {
    t3++;
    for (let [o3, i3] of Object.entries(e3))
      ((_b2 = Object.getOwnPropertyDescriptor(e3, o3)) == null ? void 0 : _b2.writable) && (e3[o3] = ut$1(i3, t3, o3));
    return e3;
  }
  return e3;
}, "traverseArgs"), In = /* @__PURE__ */ n$1(({ initialArgs: e3 }) => {
  ut$1(e3);
}, "nameSpiesAndWrapActionsInSpies"), Ir$1 = false, Ln = /* @__PURE__ */ n$1(async (e3) => {
  var _a2, _b2;
  globalThis.HTMLElement && e3.canvasElement instanceof globalThis.HTMLElement && (e3.canvas = $n$1(e3.canvasElement));
  let t3 = (_b2 = (_a2 = globalThis.window) == null ? void 0 : _a2.navigator) == null ? void 0 : _b2.clipboard;
  if (t3) {
    e3.userEvent = Qs$1(
      { userEvent: Mn.setup() },
      { intercept: true }
    ).userEvent, Object.defineProperty(globalThis.window.navigator, "clipboard", {
      get: /* @__PURE__ */ n$1(() => t3, "get"),
      configurable: true
    });
    let r3 = HTMLElement.prototype.focus;
    Ir$1 || Object.defineProperties(HTMLElement.prototype, {
      focus: {
        configurable: true,
        set: /* @__PURE__ */ n$1((o3) => {
          r3 = o3, Ir$1 = true;
        }, "set"),
        get: /* @__PURE__ */ n$1(() => r3, "get")
      }
    });
  }
}, "enhanceContext"), ft$1 = /* @__PURE__ */ n$1(() => rc$1({
  loaders: [Fn$1, In, Ln]
}), "default");
var Dr$1 = "viewport";
var _n$1 = {
  [Dr$1]: { value: void 0, isRotated: false }
}, yt = /* @__PURE__ */ n$1(() => rc$1({
  initialGlobals: _n$1
}), "default");
function _r$1() {
  return [
    // @ts-expect-error CJS fallback
    (lt.default ?? lt)(),
    // @ts-expect-error CJS fallback
    (Je$1.default ?? Je$1)(),
    // @ts-expect-error CJS fallback
    (st2.default ?? st2)(),
    // @ts-expect-error CJS fallback
    (mt.default ?? mt)(),
    // @ts-expect-error CJS fallback
    (yt.default ?? yt)(),
    // @ts-expect-error CJS fallback
    (Xe$2.default ?? Xe$2)(),
    // @ts-expect-error CJS fallback
    (Qe$2.default ?? Qe$2)(),
    // @ts-expect-error CJS fallback
    (ft$1.default ?? ft$1)()
  ];
}
n$1(_r$1, "getCoreAnnotations");
function tc$1(e3) {
  let t3, r3 = {
    _tag: "Preview",
    input: e3,
    get composed() {
      if (t3)
        return t3;
      let { addons: o3, ...i3 } = e3;
      return t3 = te$2(
        ne$2([..._r$1(), ...o3 ?? [], i3])
      ), t3;
    },
    meta(o3) {
      return Nn$1(o3, this);
    }
  };
  return globalThis.globalProjectAnnotations = r3.composed, r3;
}
n$1(tc$1, "definePreview");
function rc$1(e3) {
  return e3;
}
n$1(rc$1, "definePreviewAddon");
function oc$1(e3) {
  return e3 != null && typeof e3 == "object" && "_tag" in e3 && (e3 == null ? void 0 : e3._tag) === "Preview";
}
n$1(oc$1, "isPreview");
function nc$1(e3) {
  return e3 != null && typeof e3 == "object" && "_tag" in e3 && (e3 == null ? void 0 : e3._tag) === "Meta";
}
n$1(nc$1, "isMeta");
function Nn$1(e3, t3) {
  return {
    _tag: "Meta",
    input: e3,
    preview: t3,
    get composed() {
      throw new Error("Not implemented");
    },
    // @ts-expect-error hard
    story(r3 = {}) {
      return Hr$1(typeof r3 == "function" ? { render: r3 } : r3, this);
    }
  };
}
n$1(Nn$1, "defineMeta");
function ic$1(e3) {
  return e3 != null && typeof e3 == "object" && "_tag" in e3 && (e3 == null ? void 0 : e3._tag) === "Story";
}
n$1(ic$1, "isStory");
function Hr$1(e3, t3) {
  let r3, o3 = /* @__PURE__ */ n$1(() => (r3 || (r3 = We$2(
    e3,
    t3.input,
    void 0,
    t3.preview.composed
  )), r3), "compose");
  return {
    _tag: "Story",
    input: e3,
    meta: t3,
    __compose: o3,
    get composed() {
      let i3 = o3(), { args: s2, argTypes: a4, parameters: p2, id: c4, tags: l4, globals: y4, storyName: u2 } = i3;
      return { args: s2, argTypes: a4, parameters: p2, id: c4, tags: l4, name: u2, globals: y4 };
    },
    get play() {
      var _a2;
      return e3.play ?? ((_a2 = t3.input) == null ? void 0 : _a2.play) ?? (async () => {
      });
    },
    get run() {
      return o3().run ?? (async () => {
      });
    },
    extend(i3) {
      var _a2, _b2, _c2, _d3;
      return Hr$1(
        {
          ...this.input,
          ...i3,
          args: { ...this.input.args, ...i3.args },
          argTypes: D$1(this.input.argTypes, i3.argTypes),
          afterEach: [
            ...b$1(((_a2 = this.input) == null ? void 0 : _a2.afterEach) ?? []),
            ...b$1(i3.afterEach ?? [])
          ],
          beforeEach: [
            ...b$1(((_b2 = this.input) == null ? void 0 : _b2.beforeEach) ?? []),
            ...b$1(i3.beforeEach ?? [])
          ],
          decorators: [
            ...b$1(((_c2 = this.input) == null ? void 0 : _c2.decorators) ?? []),
            ...b$1(i3.decorators ?? [])
          ],
          globals: { ...this.input.globals, ...i3.globals },
          loaders: [
            ...b$1(((_d3 = this.input) == null ? void 0 : _d3.loaders) ?? []),
            ...b$1(i3.loaders ?? [])
          ],
          parameters: D$1(this.input.parameters, i3.parameters),
          tags: uc$1(...this.input.tags ?? [], ...i3.tags ?? [])
        },
        this.meta
      );
    }
  };
}
n$1(Hr$1, "defineStory");
var jn = /* @__PURE__ */ n$1((e3) => e3.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "-").replace(
  /-+/g,
  "-"
).replace(/^-+/, "").replace(/-+$/, ""), "sanitize"), Nr$1 = /* @__PURE__ */ n$1((e3, t3) => {
  let r3 = jn(e3);
  if (r3 === "")
    throw new Error(`Invalid ${t3} '${e3}', must include alphanumeric characters`);
  return r3;
}, "sanitizeSafe"), lc$1 = /* @__PURE__ */ n$1((e3, t3) => `${Nr$1(e3, "kind")}${t3 ? `--${Nr$1(t3, "name")}` : ""}`, "toId"), cc$1 = /* @__PURE__ */ n$1((e3) => bt$1(
  e3
), "storyNameFromExport");
function jr(e3, t3) {
  return Array.isArray(t3) ? t3.includes(e3) : e3.match(t3);
}
n$1(jr, "matches");
function dc$1(e3, { includeStories: t3, excludeStories: r3 }) {
  return (
    // https://babeljs.io/docs/en/babel-plugin-transform-modules-commonjs
    e3 !== "__esModule" && (!t3 || jr(e3, t3)) && (!r3 || !jr(e3, r3))
  );
}
n$1(dc$1, "isExportStory");
var uc$1 = /* @__PURE__ */ n$1((...e3) => {
  let t3 = e3.reduce((r3, o3) => (o3.startsWith("!") ? r3.delete(o3.slice(1)) : r3.add(o3), r3), /* @__PURE__ */ new Set());
  return Array.from(t3);
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
function isTypedArray(x4) {
  return ArrayBuffer.isView(x4) && !(x4 instanceof DataView);
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
    for (let i3 = 0; i3 < valueToClone.length; i3++) result[i3] = cloneDeepWithImpl(valueToClone[i3], i3, objectToClone, stack, cloneValue);
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
    for (let i3 = 0; i3 < valueToClone.length; i3++) result[i3] = cloneDeepWithImpl(valueToClone[i3], i3, objectToClone, stack, cloneValue);
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
  for (let i3 = 0; i3 < keys.length; i3++) {
    let key = keys[i3], descriptor = Object.getOwnPropertyDescriptor(target, key);
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
  for (let i3 = 0; i3 < length; i3++) result[i3] = start + i3 * step;
  return result;
}
function uniq2(arr) {
  return isArrayLike(arr) ? uniq(Array.from(arr)) : [];
}
function isBuffer(x4) {
  return typeof Buffer < "u" && Buffer.isBuffer(x4);
}
function isPrototype(value2) {
  let constructor = value2 == null ? void 0 : value2.constructor, prototype = typeof constructor == "function" ? constructor.prototype : Object.prototype;
  return value2 === prototype;
}
function isTypedArray2(x4) {
  return isTypedArray(x4);
}
function times(n3, getValue2) {
  if (n3 = toInteger(n3), n3 < 1 || !Number.isSafeInteger(n3)) return [];
  let result = new Array(n3);
  for (let i3 = 0; i3 < n3; i3++) result[i3] = typeof getValue2 == "function" ? getValue2(i3) : i3;
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
  for (let i3 = 0; i3 < keys.length; i3++) {
    let key = isSymbol(keys[i3]) ? keys[i3] : keys[i3].toString(), value2 = obj[key];
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
var __require = ((x4) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(x4, { get: (a4, b4) => (typeof require < "u" ? require : a4)[b4] }) : x4)(function(x4) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x4 + '" is not supported');
});
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames$1(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps$1 = (to2, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function") for (let key of __getOwnPropNames$1(from)) !__hasOwnProp$1.call(to2, key) && key !== except && __defProp$1(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc$1(from, key)) || desc.enumerable });
  return to2;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create$1(__getProtoOf$1(mod)) : {}, __copyProps$1(!mod || !mod.__esModule ? __defProp$1(target, "default", { value: mod, enumerable: true }) : target, mod));
var wp = Object.create;
var Tn = Object.defineProperty;
var bp = Object.getOwnPropertyDescriptor;
var yp = Object.getOwnPropertyNames;
var Rp = Object.getPrototypeOf, xp = Object.prototype.hasOwnProperty;
var o$1 = (e3, t3) => Tn(e3, "name", { value: t3, configurable: true }), Xr = /* @__PURE__ */ ((e3) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e3, {
  get: (t3, r3) => (typeof require < "u" ? require : t3)[r3]
}) : e3)(function(e3) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e3 + '" is not supported');
});
var C$1 = (e3, t3) => () => (e3 && (t3 = e3(e3 = 0)), t3);
var H$1 = (e3, t3) => () => (t3 || e3((t3 = { exports: {} }).exports, t3), t3.exports), Zr = (e3, t3) => {
  for (var r3 in t3)
    Tn(e3, r3, { get: t3[r3], enumerable: true });
}, Ep = (e3, t3, r3, n3) => {
  if (t3 && typeof t3 == "object" || typeof t3 == "function")
    for (let a4 of yp(t3))
      !xp.call(e3, a4) && a4 !== r3 && Tn(e3, a4, { get: () => t3[a4], enumerable: !(n3 = bp(t3, a4)) || n3.enumerable });
  return e3;
};
var me$1 = (e3, t3, r3) => (r3 = e3 != null ? wp(Rp(e3)) : {}, Ep(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  t3 || !e3 || !e3.__esModule ? Tn(r3, "default", { value: e3, enumerable: true }) : r3,
  e3
));
function W$1() {
  return W$1 = Object.assign ? Object.assign.bind() : function(e3) {
    for (var t3 = 1; t3 < arguments.length; t3++) {
      var r3 = arguments[t3];
      for (var n3 in r3) ({}).hasOwnProperty.call(r3, n3) && (e3[n3] = r3[n3]);
    }
    return e3;
  }, W$1.apply(null, arguments);
}
var Kr = C$1(() => {
  o$1(W$1, "_extends");
});
function Tl(e3) {
  if (e3 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e3;
}
var Hl = C$1(() => {
  o$1(Tl, "_assertThisInitialized");
});
function ht(e3, t3) {
  return ht = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r3, n3) {
    return r3.__proto__ = n3, r3;
  }, ht(e3, t3);
}
var Hn = C$1(() => {
  o$1(ht, "_setPrototypeOf");
});
function Pn(e3) {
  return Pn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
    return t3.__proto__ || Object.getPrototypeOf(t3);
  }, Pn(e3);
}
var kl = C$1(() => {
  o$1(Pn, "_getPrototypeOf");
});
var Qr = H$1((Ul, ia) => {
  (function(e3) {
    if (typeof Ul == "object" && typeof ia < "u")
      ia.exports = e3();
    else if (typeof define == "function" && define.amd)
      define([], e3);
    else {
      var t3;
      typeof window < "u" ? t3 = window : typeof global < "u" ? t3 = global : typeof self < "u" ? t3 = self : t3 = this, t3.memoizerific = e3();
    }
  })(function() {
    return (/* @__PURE__ */ o$1(function n3(a4, i3, c4) {
      function l4(f2, d2) {
        if (!i3[f2]) {
          if (!a4[f2]) {
            var m4 = typeof Xr == "function" && Xr;
            if (!d2 && m4) return m4(f2, true);
            if (s2) return s2(f2, true);
            var v3 = new Error("Cannot find module '" + f2 + "'");
            throw v3.code = "MODULE_NOT_FOUND", v3;
          }
          var y4 = i3[f2] = { exports: {} };
          a4[f2][0].call(y4.exports, function(p2) {
            var h4 = a4[f2][1][p2];
            return l4(h4 || p2);
          }, y4, y4.exports, n3, a4, i3, c4);
        }
        return i3[f2].exports;
      }
      o$1(l4, "s");
      for (var s2 = typeof Xr == "function" && Xr, u2 = 0; u2 < c4.length; u2++) l4(c4[u2]);
      return l4;
    }, "e"))({ 1: [function(n3, a4, i3) {
      a4.exports = function(c4) {
        if (typeof Map != "function" || c4) {
          var l4 = n3("./similar");
          return new l4();
        } else
          return /* @__PURE__ */ new Map();
      };
    }, { "./similar": 2 }], 2: [function(n3, a4, i3) {
      function c4() {
        return this.list = [], this.lastItem = void 0, this.size = 0, this;
      }
      o$1(c4, "Similar"), c4.prototype.get = function(l4) {
        var s2;
        if (this.lastItem && this.isEqual(this.lastItem.key, l4))
          return this.lastItem.val;
        if (s2 = this.indexOf(l4), s2 >= 0)
          return this.lastItem = this.list[s2], this.list[s2].val;
      }, c4.prototype.set = function(l4, s2) {
        var u2;
        return this.lastItem && this.isEqual(this.lastItem.key, l4) ? (this.lastItem.val = s2, this) : (u2 = this.indexOf(l4), u2 >= 0 ? (this.lastItem = this.list[u2], this.list[u2].val = s2, this) : (this.lastItem = { key: l4, val: s2 }, this.list.push(this.lastItem), this.size++, this));
      }, c4.prototype.delete = function(l4) {
        var s2;
        if (this.lastItem && this.isEqual(this.lastItem.key, l4) && (this.lastItem = void 0), s2 = this.indexOf(l4), s2 >= 0)
          return this.size--, this.list.splice(s2, 1)[0];
      }, c4.prototype.has = function(l4) {
        var s2;
        return this.lastItem && this.isEqual(this.lastItem.key, l4) ? true : (s2 = this.indexOf(l4), s2 >= 0 ? (this.lastItem = this.list[s2], true) : false);
      }, c4.prototype.forEach = function(l4, s2) {
        var u2;
        for (u2 = 0; u2 < this.size; u2++)
          l4.call(s2 || this, this.list[u2].val, this.list[u2].key, this);
      }, c4.prototype.indexOf = function(l4) {
        var s2;
        for (s2 = 0; s2 < this.size; s2++)
          if (this.isEqual(this.list[s2].key, l4))
            return s2;
        return -1;
      }, c4.prototype.isEqual = function(l4, s2) {
        return l4 === s2 || l4 !== l4 && s2 !== s2;
      }, a4.exports = c4;
    }, {}], 3: [function(n3, a4, i3) {
      var c4 = n3("map-or-similar");
      a4.exports = function(f2) {
        var d2 = new c4(false), m4 = [];
        return function(v3) {
          var y4 = /* @__PURE__ */ o$1(function() {
            var p2 = d2, h4, g4, w3 = arguments.length - 1, b4 = Array(w3 + 1), x4 = true, E3;
            if ((y4.numArgs || y4.numArgs === 0) && y4.numArgs !== w3 + 1)
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (E3 = 0; E3 < w3; E3++) {
              if (b4[E3] = {
                cacheItem: p2,
                arg: arguments[E3]
              }, p2.has(arguments[E3])) {
                p2 = p2.get(arguments[E3]);
                continue;
              }
              x4 = false, h4 = new c4(false), p2.set(arguments[E3], h4), p2 = h4;
            }
            return x4 && (p2.has(arguments[w3]) ? g4 = p2.get(arguments[w3]) : x4 = false), x4 || (g4 = v3.apply(null, arguments), p2.set(arguments[w3], g4)), f2 > 0 && (b4[w3] = {
              cacheItem: p2,
              arg: arguments[w3]
            }, x4 ? l4(m4, b4) : m4.push(b4), m4.length > f2 && s2(m4.shift())), y4.wasMemoized = x4, y4.numArgs = w3 + 1, g4;
          }, "memoizerific");
          return y4.limit = f2, y4.wasMemoized = false, y4.cache = d2, y4.lru = m4, y4;
        };
      };
      function l4(f2, d2) {
        var m4 = f2.length, v3 = d2.length, y4, p2, h4;
        for (p2 = 0; p2 < m4; p2++) {
          for (y4 = true, h4 = 0; h4 < v3; h4++)
            if (!u2(f2[p2][h4].arg, d2[h4].arg)) {
              y4 = false;
              break;
            }
          if (y4)
            break;
        }
        f2.push(f2.splice(p2, 1)[0]);
      }
      o$1(l4, "moveToMostRecentLru");
      function s2(f2) {
        var d2 = f2.length, m4 = f2[d2 - 1], v3, y4;
        for (m4.cacheItem.delete(m4.arg), y4 = d2 - 2; y4 >= 0 && (m4 = f2[y4], v3 = m4.cacheItem.get(m4.arg), !v3 || !v3.size); y4--)
          m4.cacheItem.delete(m4.arg);
      }
      o$1(s2, "removeCachedResult");
      function u2(f2, d2) {
        return f2 === d2 || f2 !== f2 && d2 !== d2;
      }
      o$1(u2, "isEqual");
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
});
function ur(e3, t3) {
  if (e3 == null) return {};
  var r3 = {};
  for (var n3 in e3) if ({}.hasOwnProperty.call(e3, n3)) {
    if (t3.indexOf(n3) !== -1) continue;
    r3[n3] = e3[n3];
  }
  return r3;
}
var Bn = C$1(() => {
  o$1(ur, "_objectWithoutPropertiesLoose");
});
function ql(e3, t3) {
  if (e3 == null) return {};
  var r3, n3, a4 = ur(e3, t3);
  if (Object.getOwnPropertySymbols) {
    var i3 = Object.getOwnPropertySymbols(e3);
    for (n3 = 0; n3 < i3.length; n3++) r3 = i3[n3], t3.indexOf(r3) === -1 && {}.propertyIsEnumerable.call(e3, r3) && (a4[r3] = e3[r3]);
  }
  return a4;
}
var Gl = C$1(() => {
  Bn();
  o$1(ql, "_objectWithoutProperties");
});
function en(e3, t3) {
  (t3 == null || t3 > e3.length) && (t3 = e3.length);
  for (var r3 = 0, n3 = Array(t3); r3 < t3; r3++) n3[r3] = e3[r3];
  return n3;
}
var la = C$1(() => {
  o$1(en, "_arrayLikeToArray");
});
function Yl(e3) {
  if (Array.isArray(e3)) return en(e3);
}
var Xl = C$1(() => {
  la();
  o$1(Yl, "_arrayWithoutHoles");
});
function Zl(e3) {
  if (typeof Symbol < "u" && e3[Symbol.iterator] != null || e3["@@iterator"] != null) return Array.from(e3);
}
var Kl = C$1(() => {
  o$1(Zl, "_iterableToArray");
});
function Jl(e3, t3) {
  if (e3) {
    if (typeof e3 == "string") return en(e3, t3);
    var r3 = {}.toString.call(e3).slice(8, -1);
    return r3 === "Object" && e3.constructor && (r3 = e3.constructor.name), r3 === "Map" || r3 === "Set" ? Array.from(e3) : r3 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r3) ? en(e3, t3) : void 0;
  }
}
var Ql = C$1(() => {
  la();
  o$1(Jl, "_unsupportedIterableToArray");
});
function ec() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var tc = C$1(() => {
  o$1(ec, "_nonIterableSpread");
});
function Nn(e3) {
  return Yl(e3) || Zl(e3) || Jl(e3) || ec();
}
var rc = C$1(() => {
  Xl();
  Kl();
  Ql();
  tc();
  o$1(Nn, "_toConsumableArray");
});
function Dt(e3) {
  "@babel/helpers - typeof";
  return Dt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
    return typeof t3;
  } : function(t3) {
    return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
  }, Dt(e3);
}
var ca = C$1(() => {
  o$1(Dt, "_typeof");
});
function nc(e3, t3) {
  if (Dt(e3) != "object" || !e3) return e3;
  var r3 = e3[Symbol.toPrimitive];
  if (r3 !== void 0) {
    var n3 = r3.call(e3, t3 || "default");
    if (Dt(n3) != "object") return n3;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t3 === "string" ? String : Number)(e3);
}
var oc = C$1(() => {
  ca();
  o$1(nc, "toPrimitive");
});
function ac(e3) {
  var t3 = nc(e3, "string");
  return Dt(t3) == "symbol" ? t3 : t3 + "";
}
var ic = C$1(() => {
  ca();
  oc();
  o$1(ac, "toPropertyKey");
});
function Fn(e3, t3, r3) {
  return (t3 = ac(t3)) in e3 ? Object.defineProperty(e3, t3, {
    value: r3,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e3[t3] = r3, e3;
}
var sa = C$1(() => {
  ic();
  o$1(Fn, "_defineProperty");
});
function lc(e3, t3) {
  var r3 = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n3 = Object.getOwnPropertySymbols(e3);
    t3 && (n3 = n3.filter(function(a4) {
      return Object.getOwnPropertyDescriptor(e3, a4).enumerable;
    })), r3.push.apply(r3, n3);
  }
  return r3;
}
function fr(e3) {
  for (var t3 = 1; t3 < arguments.length; t3++) {
    var r3 = arguments[t3] != null ? arguments[t3] : {};
    t3 % 2 ? lc(Object(r3), true).forEach(function(n3) {
      Fn(e3, n3, r3[n3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r3)) : lc(Object(r3)).forEach(function(n3) {
      Object.defineProperty(e3, n3, Object.getOwnPropertyDescriptor(r3, n3));
    });
  }
  return e3;
}
function m2(e3) {
  var t3 = e3.length;
  if (t3 === 0 || t3 === 1) return e3;
  if (t3 === 2)
    return [e3[0], e3[1], "".concat(e3[0], ".").concat(e3[1]), "".concat(e3[1], ".").concat(e3[0])];
  if (t3 === 3)
    return [e3[0], e3[1], e3[2], "".concat(e3[0], ".").concat(e3[1]), "".concat(e3[0], ".").concat(e3[2]), "".concat(e3[1], ".").concat(e3[0]), "".concat(
      e3[1],
      "."
    ).concat(e3[2]), "".concat(e3[2], ".").concat(e3[0]), "".concat(e3[2], ".").concat(e3[1]), "".concat(e3[0], ".").concat(e3[1], ".").concat(
      e3[2]
    ), "".concat(e3[0], ".").concat(e3[2], ".").concat(e3[1]), "".concat(e3[1], ".").concat(e3[0], ".").concat(e3[2]), "".concat(e3[1], ".").concat(
      e3[2],
      "."
    ).concat(e3[0]), "".concat(e3[2], ".").concat(e3[0], ".").concat(e3[1]), "".concat(e3[2], ".").concat(e3[1], ".").concat(e3[0])];
  if (t3 >= 4)
    return [
      e3[0],
      e3[1],
      e3[2],
      e3[3],
      "".concat(e3[0], ".").concat(e3[1]),
      "".concat(e3[0], ".").concat(e3[2]),
      "".concat(e3[0], ".").concat(e3[3]),
      "".concat(e3[1], ".").concat(e3[0]),
      "".concat(e3[1], ".").concat(e3[2]),
      "".concat(e3[1], ".").concat(e3[3]),
      "".concat(e3[2], ".").concat(e3[0]),
      "".concat(e3[2], ".").concat(e3[1]),
      "".concat(e3[2], ".").concat(e3[3]),
      "".concat(e3[3], ".").concat(e3[0]),
      "".concat(e3[3], ".").concat(e3[1]),
      "".concat(e3[3], ".").concat(e3[2]),
      "".concat(e3[0], ".").concat(e3[1], ".").concat(e3[2]),
      "".concat(e3[0], ".").concat(e3[1], ".").concat(e3[3]),
      "".concat(e3[0], ".").concat(e3[2], ".").concat(e3[1]),
      "".concat(e3[0], ".").concat(e3[2], ".").concat(e3[3]),
      "".concat(e3[0], ".").concat(
        e3[3],
        "."
      ).concat(e3[1]),
      "".concat(e3[0], ".").concat(e3[3], ".").concat(e3[2]),
      "".concat(e3[1], ".").concat(e3[0], ".").concat(e3[2]),
      "".concat(
        e3[1],
        "."
      ).concat(e3[0], ".").concat(e3[3]),
      "".concat(e3[1], ".").concat(e3[2], ".").concat(e3[0]),
      "".concat(e3[1], ".").concat(e3[2], ".").concat(
        e3[3]
      ),
      "".concat(e3[1], ".").concat(e3[3], ".").concat(e3[0]),
      "".concat(e3[1], ".").concat(e3[3], ".").concat(e3[2]),
      "".concat(e3[2], ".").concat(
        e3[0],
        "."
      ).concat(e3[1]),
      "".concat(e3[2], ".").concat(e3[0], ".").concat(e3[3]),
      "".concat(e3[2], ".").concat(e3[1], ".").concat(e3[0]),
      "".concat(
        e3[2],
        "."
      ).concat(e3[1], ".").concat(e3[3]),
      "".concat(e3[2], ".").concat(e3[3], ".").concat(e3[0]),
      "".concat(e3[2], ".").concat(e3[3], ".").concat(
        e3[1]
      ),
      "".concat(e3[3], ".").concat(e3[0], ".").concat(e3[1]),
      "".concat(e3[3], ".").concat(e3[0], ".").concat(e3[2]),
      "".concat(e3[3], ".").concat(
        e3[1],
        "."
      ).concat(e3[0]),
      "".concat(e3[3], ".").concat(e3[1], ".").concat(e3[2]),
      "".concat(e3[3], ".").concat(e3[2], ".").concat(e3[0]),
      "".concat(
        e3[3],
        "."
      ).concat(e3[2], ".").concat(e3[1]),
      "".concat(e3[0], ".").concat(e3[1], ".").concat(e3[2], ".").concat(e3[3]),
      "".concat(e3[0], ".").concat(
        e3[1],
        "."
      ).concat(e3[3], ".").concat(e3[2]),
      "".concat(e3[0], ".").concat(e3[2], ".").concat(e3[1], ".").concat(e3[3]),
      "".concat(e3[0], ".").concat(
        e3[2],
        "."
      ).concat(e3[3], ".").concat(e3[1]),
      "".concat(e3[0], ".").concat(e3[3], ".").concat(e3[1], ".").concat(e3[2]),
      "".concat(e3[0], ".").concat(
        e3[3],
        "."
      ).concat(e3[2], ".").concat(e3[1]),
      "".concat(e3[1], ".").concat(e3[0], ".").concat(e3[2], ".").concat(e3[3]),
      "".concat(e3[1], ".").concat(
        e3[0],
        "."
      ).concat(e3[3], ".").concat(e3[2]),
      "".concat(e3[1], ".").concat(e3[2], ".").concat(e3[0], ".").concat(e3[3]),
      "".concat(e3[1], ".").concat(
        e3[2],
        "."
      ).concat(e3[3], ".").concat(e3[0]),
      "".concat(e3[1], ".").concat(e3[3], ".").concat(e3[0], ".").concat(e3[2]),
      "".concat(e3[1], ".").concat(
        e3[3],
        "."
      ).concat(e3[2], ".").concat(e3[0]),
      "".concat(e3[2], ".").concat(e3[0], ".").concat(e3[1], ".").concat(e3[3]),
      "".concat(e3[2], ".").concat(
        e3[0],
        "."
      ).concat(e3[3], ".").concat(e3[1]),
      "".concat(e3[2], ".").concat(e3[1], ".").concat(e3[0], ".").concat(e3[3]),
      "".concat(e3[2], ".").concat(
        e3[1],
        "."
      ).concat(e3[3], ".").concat(e3[0]),
      "".concat(e3[2], ".").concat(e3[3], ".").concat(e3[0], ".").concat(e3[1]),
      "".concat(e3[2], ".").concat(
        e3[3],
        "."
      ).concat(e3[1], ".").concat(e3[0]),
      "".concat(e3[3], ".").concat(e3[0], ".").concat(e3[1], ".").concat(e3[2]),
      "".concat(e3[3], ".").concat(
        e3[0],
        "."
      ).concat(e3[2], ".").concat(e3[1]),
      "".concat(e3[3], ".").concat(e3[1], ".").concat(e3[0], ".").concat(e3[2]),
      "".concat(e3[3], ".").concat(
        e3[1],
        "."
      ).concat(e3[2], ".").concat(e3[0]),
      "".concat(e3[3], ".").concat(e3[2], ".").concat(e3[0], ".").concat(e3[1]),
      "".concat(e3[3], ".").concat(
        e3[2],
        "."
      ).concat(e3[1], ".").concat(e3[0])
    ];
}
function h2(e3) {
  if (e3.length === 0 || e3.length === 1) return e3;
  var t3 = e3.join(".");
  return ua[t3] || (ua[t3] = m2(e3)), ua[t3];
}
function g2(e3) {
  var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r3 = arguments.length > 2 ? arguments[2] : void 0, n3 = e3.filter(
    function(i3) {
      return i3 !== "token";
    }
  ), a4 = h2(n3);
  return a4.reduce(function(i3, c4) {
    return fr(fr({}, i3), r3[c4]);
  }, t3);
}
function cc(e3) {
  return e3.join(" ");
}
function v2(e3, t3) {
  var r3 = 0;
  return function(n3) {
    return r3 += 1, n3.map(function(a4, i3) {
      return _t({
        node: a4,
        stylesheet: e3,
        useInlineStyles: t3,
        key: "code-segment-".concat(r3, "-").concat(i3)
      });
    });
  };
}
function _t(e$1) {
  var t3 = e$1.node, r3 = e$1.stylesheet, n3 = e$1.style, a4 = n3 === void 0 ? {} : n3, i3 = e$1.useInlineStyles, c4 = e$1.key, l4 = t3.properties, s2 = t3.type, u2 = t3.tagName, f2 = t3.value;
  if (s2 === "text")
    return f2;
  if (u2) {
    var d2 = v2(r3, i3), m4;
    if (!i3)
      m4 = fr(fr({}, l4), {}, {
        className: cc(l4.className)
      });
    else {
      var v3 = Object.keys(r3).reduce(function(g4, w3) {
        return w3.split(".").forEach(function(b4) {
          g4.includes(b4) || g4.push(b4);
        }), g4;
      }, []), y4 = l4.className && l4.className.includes("token") ? ["token"] : [], p2 = l4.className && y4.concat(l4.className.filter(function(g4) {
        return !v3.includes(g4);
      }));
      m4 = fr(fr({}, l4), {}, {
        className: cc(p2) || void 0,
        style: g2(l4.className, Object.assign({}, l4.style, a4), r3)
      });
    }
    var h4 = d2(t3.children);
    return /* @__PURE__ */ e.createElement(u2, W$1({
      key: c4
    }, m4), h4);
  }
}
var ua, fa = C$1(() => {
  Kr();
  sa();
  o$1(lc, "ownKeys");
  o$1(fr, "_objectSpread");
  o$1(m2, "powerSetPermutations");
  ua = {};
  o$1(h2, "getClassNameCombinations");
  o$1(g2, "createStyleObject");
  o$1(cc, "createClassNameString");
  o$1(v2, "createChildren");
  o$1(_t, "createElement");
});
var sc, uc = C$1(() => {
  sc = /* @__PURE__ */ o$1(function(e3, t3) {
    var r3 = e3.listLanguages();
    return r3.indexOf(t3) !== -1;
  }, "default");
});
function fc(e3, t3) {
  var r3 = Object.keys(e3);
  if (Object.getOwnPropertySymbols) {
    var n3 = Object.getOwnPropertySymbols(e3);
    t3 && (n3 = n3.filter(function(a4) {
      return Object.getOwnPropertyDescriptor(e3, a4).enumerable;
    })), r3.push.apply(r3, n3);
  }
  return r3;
}
function bt(e3) {
  for (var t3 = 1; t3 < arguments.length; t3++) {
    var r3 = arguments[t3] != null ? arguments[t3] : {};
    t3 % 2 ? fc(Object(r3), true).forEach(function(n3) {
      Fn(e3, n3, r3[n3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r3)) : fc(Object(r3)).forEach(function(n3) {
      Object.defineProperty(e3, n3, Object.getOwnPropertyDescriptor(r3, n3));
    });
  }
  return e3;
}
function y2(e3) {
  return e3.match(b2);
}
function R2(e$1) {
  var t3 = e$1.lines, r3 = e$1.startingLineNumber, n3 = e$1.style;
  return t3.map(function(a4, i3) {
    var c4 = i3 + r3;
    return /* @__PURE__ */ e.createElement("span", {
      key: "line-".concat(i3),
      className: "react-syntax-highlighter-line-number",
      style: typeof n3 == "function" ? n3(c4) : n3
    }, "".concat(c4, `
`));
  });
}
function x2(e$1) {
  var t3 = e$1.codeString, r3 = e$1.codeStyle, n3 = e$1.containerStyle, a4 = n3 === void 0 ? {
    float: "left",
    paddingRight: "10px"
  } : n3, i3 = e$1.numberStyle, c4 = i3 === void 0 ? {} : i3, l4 = e$1.startingLineNumber;
  return /* @__PURE__ */ e.createElement("code", {
    style: Object.assign({}, r3, a4)
  }, R2({
    lines: t3.replace(/\n$/, "").split(`
`),
    style: c4,
    startingLineNumber: l4
  }));
}
function E2(e3) {
  return "".concat(e3.toString().length, ".25em");
}
function dc(e3, t3) {
  return {
    type: "element",
    tagName: "span",
    properties: {
      key: "line-number--".concat(e3),
      className: ["comment", "linenumber", "react-syntax-highlighter-line-number"],
      style: t3
    },
    children: [{
      type: "text",
      value: e3
    }]
  };
}
function pc(e3, t3, r3) {
  var n3 = {
    display: "inline-block",
    minWidth: E2(r3),
    paddingRight: "1em",
    textAlign: "right",
    userSelect: "none"
  }, a4 = typeof e3 == "function" ? e3(t3) : e3, i3 = bt(bt({}, n3), a4);
  return i3;
}
function Dn(e3) {
  var t3 = e3.children, r3 = e3.lineNumber, n3 = e3.lineNumberStyle, a4 = e3.largestLineNumber, i3 = e3.showInlineLineNumbers, c4 = e3.lineProps, l4 = c4 === void 0 ? {} : c4, s2 = e3.className, u2 = s2 === void 0 ? [] : s2, f2 = e3.showLineNumbers, d2 = e3.wrapLongLines, m4 = e3.wrapLines, v3 = m4 === void 0 ? false : m4, y4 = v3 ? bt({}, typeof l4 == "function" ? l4(r3) : l4) : {};
  if (y4.className = y4.className ? [].concat(Nn(y4.className.trim().split(/\s+/)), Nn(u2)) : u2, r3 && i3) {
    var p2 = pc(n3, r3, a4);
    t3.unshift(dc(r3, p2));
  }
  return d2 & f2 && (y4.style = bt({
    display: "flex"
  }, y4.style)), {
    type: "element",
    tagName: "span",
    properties: y4,
    children: t3
  };
}
function mc(e3) {
  for (var t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], n3 = 0; n3 < e3.length; n3++) {
    var a4 = e3[n3];
    if (a4.type === "text")
      r3.push(Dn({
        children: [a4],
        className: Nn(new Set(t3))
      }));
    else if (a4.children) {
      var i3 = t3.concat(a4.properties.className);
      mc(a4.children, i3).forEach(function(c4) {
        return r3.push(c4);
      });
    }
  }
  return r3;
}
function S2(e3, t3, r3, n3, a4, i3, c4, l4, s2) {
  var u2, f2 = mc(e3.value), d2 = [], m4 = -1, v3 = 0;
  function y4(E3, R4) {
    var S3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return Dn({
      children: E3,
      lineNumber: R4,
      lineNumberStyle: l4,
      largestLineNumber: c4,
      showInlineLineNumbers: a4,
      lineProps: r3,
      className: S3,
      showLineNumbers: n3,
      wrapLongLines: s2,
      wrapLines: t3
    });
  }
  o$1(y4, "createWrappedLine");
  function p2(E3, R4) {
    if (n3 && R4 && a4) {
      var S3 = pc(l4, R4, c4);
      E3.unshift(dc(R4, S3));
    }
    return E3;
  }
  o$1(p2, "createUnwrappedLine");
  function h4(E3, R4) {
    var S3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return t3 || S3.length > 0 ? y4(E3, R4, S3) : p2(E3, R4);
  }
  o$1(h4, "createLine");
  for (var g4 = /* @__PURE__ */ o$1(function() {
    var R4 = f2[v3], S3 = R4.children[0].value, A3 = y2(S3);
    if (A3) {
      var M3 = S3.split(`
`);
      M3.forEach(function(L2, P2) {
        var _2 = n3 && d2.length + i3, D2 = {
          type: "text",
          value: "".concat(L2, `
`)
        };
        if (P2 === 0) {
          var K2 = f2.slice(m4 + 1, v3).concat(Dn({
            children: [D2],
            className: R4.properties.className
          })), T2 = h4(K2, _2);
          d2.push(T2);
        } else if (P2 === M3.length - 1) {
          var z2 = f2[v3 + 1] && f2[v3 + 1].children && f2[v3 + 1].children[0], k2 = {
            type: "text",
            value: "".concat(L2)
          };
          if (z2) {
            var V2 = Dn({
              children: [k2],
              className: R4.properties.className
            });
            f2.splice(v3 + 1, 0, V2);
          } else {
            var F2 = [k2], j2 = h4(F2, _2, R4.properties.className);
            d2.push(j2);
          }
        } else {
          var O2 = [D2], G2 = h4(O2, _2, R4.properties.className);
          d2.push(G2);
        }
      }), m4 = v3;
    }
    v3++;
  }, "_loop"); v3 < f2.length; )
    g4();
  if (m4 !== f2.length - 1) {
    var w3 = f2.slice(m4 + 1, f2.length);
    if (w3 && w3.length) {
      var b4 = n3 && d2.length + i3, x4 = h4(w3, b4);
      d2.push(x4);
    }
  }
  return t3 ? d2 : (u2 = []).concat.apply(u2, d2);
}
function C2(e3) {
  var t3 = e3.rows, r3 = e3.stylesheet, n3 = e3.useInlineStyles;
  return t3.map(function(a4, i3) {
    return _t({
      node: a4,
      stylesheet: r3,
      useInlineStyles: n3,
      key: "code-segement".concat(i3)
    });
  });
}
function hc(e3) {
  return e3 && typeof e3.highlightAuto < "u";
}
function M2(e3) {
  var t3 = e3.astGenerator, r3 = e3.language, n3 = e3.code, a4 = e3.defaultCodeValue;
  if (hc(t3)) {
    var i3 = sc(t3, r3);
    return r3 === "text" ? {
      value: a4,
      language: "text"
    } : i3 ? t3.highlight(r3, n3) : t3.highlightAuto(n3);
  }
  try {
    return r3 && r3 !== "text" ? {
      value: t3.highlight(n3, r3)
    } : {
      value: a4
    };
  } catch {
    return {
      value: a4
    };
  }
}
function da(e$1, t3) {
  return /* @__PURE__ */ o$1(function(n3) {
    var a4 = n3.language, i3 = n3.children, c4 = n3.style, l4 = c4 === void 0 ? t3 : c4, s2 = n3.customStyle, u2 = s2 === void 0 ? {} : s2, f2 = n3.codeTagProps, d2 = f2 === void 0 ? {
      className: a4 ? "language-".concat(a4) : void 0,
      style: bt(bt({}, l4['code[class*="language-"]']), l4['code[class*="language-'.concat(a4, '"]')])
    } : f2, m4 = n3.useInlineStyles, v3 = m4 === void 0 ? true : m4, y4 = n3.showLineNumbers, p2 = y4 === void 0 ? false : y4, h4 = n3.showInlineLineNumbers, g4 = h4 === void 0 ? true : h4, w3 = n3.startingLineNumber, b4 = w3 === void 0 ? 1 : w3, x4 = n3.lineNumberContainerStyle, E3 = n3.lineNumberStyle, R4 = E3 === void 0 ? {} : E3, S3 = n3.wrapLines, A3 = n3.wrapLongLines, M3 = A3 === void 0 ? false : A3, L2 = n3.lineProps, P2 = L2 === void 0 ? {} : L2, _2 = n3.renderer, D2 = n3.PreTag, K2 = D2 === void 0 ? "pre" : D2, T2 = n3.CodeTag, z2 = T2 === void 0 ? "code" : T2, k2 = n3.code, V2 = k2 === void 0 ? (Array.isArray(i3) ? i3[0] : i3) || "" : k2, F2 = n3.astGenerator, j2 = ql(n3, w2);
    F2 = F2 || e$1;
    var O2 = p2 ? /* @__PURE__ */ e.createElement(x2, {
      containerStyle: x4,
      codeStyle: d2.style || {},
      numberStyle: R4,
      startingLineNumber: b4,
      codeString: V2
    }) : null, G2 = l4.hljs || l4['pre[class*="language-"]'] || {
      backgroundColor: "#fff"
    }, Ee2 = hc(F2) ? "hljs" : "prismjs", pe2 = v3 ? Object.assign({}, j2, {
      style: Object.assign({}, G2, u2)
    }) : Object.assign({}, j2, {
      className: j2.className ? "".concat(Ee2, " ").concat(j2.className) : Ee2,
      style: Object.assign({}, u2)
    });
    if (M3 ? d2.style = bt({
      whiteSpace: "pre-wrap"
    }, d2.style) : d2.style = bt({
      whiteSpace: "pre"
    }, d2.style), !F2)
      return /* @__PURE__ */ e.createElement(K2, pe2, O2, /* @__PURE__ */ e.createElement(z2, d2, V2));
    (S3 === void 0 && _2 || M3) && (S3 = true), _2 = _2 || C2;
    var se2 = [{
      type: "text",
      value: V2
    }], ue2 = M2({
      astGenerator: F2,
      language: a4,
      code: V2,
      defaultCodeValue: se2
    });
    ue2.language === null && (ue2.value = se2);
    var ve2 = ue2.value.length;
    ve2 === 1 && ue2.value[0].type === "text" && (ve2 = ue2.value[0].value.split(`
`).length);
    var Se2 = ve2 + b4, Ot2 = S2(ue2, S3, P2, p2, g4, b4, Se2, R4, M3);
    return /* @__PURE__ */ e.createElement(K2, pe2, /* @__PURE__ */ e.createElement(z2, d2, !g4 && O2, _2({
      rows: Ot2,
      stylesheet: l4,
      useInlineStyles: v3
    })));
  }, "SyntaxHighlighter");
}
var w2, b2, gc = C$1(() => {
  Gl();
  rc();
  sa();
  fa();
  uc();
  w2 = ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "wrapLongLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"];
  o$1(fc, "ownKeys");
  o$1(bt, "_objectSpread");
  b2 = /\n/g;
  o$1(y2, "getNewLines");
  o$1(R2, "getAllLineNumbers");
  o$1(x2, "AllLineNumbers");
  o$1(E2, "getEmWidthOfNumber");
  o$1(dc, "getInlineLineNumber");
  o$1(pc, "assembleLineNumberStyles");
  o$1(Dn, "createLineElement");
  o$1(mc, "flattenCodeTree");
  o$1(S2, "processLines");
  o$1(C2, "defaultRenderer");
  o$1(hc, "isHighlightJs");
  o$1(M2, "getCodeTree");
  o$1(da, "default");
});
var wc = H$1((kb, vc) => {
  vc.exports = L2;
  var A22 = Object.prototype.hasOwnProperty;
  function L2() {
    for (var e3 = {}, t3 = 0; t3 < arguments.length; t3++) {
      var r3 = arguments[t3];
      for (var n3 in r3)
        A22.call(r3, n3) && (e3[n3] = r3[n3]);
    }
    return e3;
  }
  o$1(L2, "extend");
});
var ma = H$1((Bb, yc) => {
  yc.exports = bc;
  var pa = bc.prototype;
  pa.space = null;
  pa.normal = {};
  pa.property = {};
  function bc(e3, t3, r3) {
    this.property = e3, this.normal = t3, r3 && (this.space = r3);
  }
  o$1(bc, "Schema");
});
var Ec = H$1((Fb, xc) => {
  var Rc = wc(), I2 = ma();
  xc.exports = z2;
  function z2(e3) {
    for (var t3 = e3.length, r3 = [], n3 = [], a4 = -1, i3, c4; ++a4 < t3; )
      i3 = e3[a4], r3.push(i3.property), n3.push(i3.normal), c4 = i3.space;
    return new I2(
      Rc.apply(null, r3),
      Rc.apply(null, n3),
      c4
    );
  }
  o$1(z2, "merge");
});
var _n = H$1((_b2, Sc) => {
  Sc.exports = T2;
  function T2(e3) {
    return e3.toLowerCase();
  }
  o$1(T2, "normalize");
});
var ha = H$1((Vb, Mc) => {
  Mc.exports = Cc;
  var Fe2 = Cc.prototype;
  Fe2.space = null;
  Fe2.attribute = null;
  Fe2.property = null;
  Fe2.boolean = false;
  Fe2.booleanish = false;
  Fe2.overloadedBoolean = false;
  Fe2.number = false;
  Fe2.commaSeparated = false;
  Fe2.spaceSeparated = false;
  Fe2.commaOrSpaceSeparated = false;
  Fe2.mustUseProperty = false;
  Fe2.defined = false;
  function Cc(e3, t3) {
    this.property = e3, this.attribute = t3;
  }
  o$1(Cc, "Info");
});
var $n = H$1((yt2) => {
  var H2 = 0;
  yt2.boolean = Vt2();
  yt2.booleanish = Vt2();
  yt2.overloadedBoolean = Vt2();
  yt2.number = Vt2();
  yt2.spaceSeparated = Vt2();
  yt2.commaSeparated = Vt2();
  yt2.commaOrSpaceSeparated = Vt2();
  function Vt2() {
    return Math.pow(2, ++H2);
  }
  o$1(Vt2, "increment");
});
var va = H$1((qb, Tc) => {
  var Ic = ha(), Ac = $n();
  Tc.exports = ga;
  ga.prototype = new Ic();
  ga.prototype.defined = true;
  var zc = [
    "boolean",
    "booleanish",
    "overloadedBoolean",
    "number",
    "commaSeparated",
    "spaceSeparated",
    "commaOrSpaceSeparated"
  ], P2 = zc.length;
  function ga(e3, t3, r3, n3) {
    var a4 = -1, i3;
    for (Lc(this, "space", n3), Ic.call(this, e3, t3); ++a4 < P2; )
      i3 = zc[a4], Lc(this, i3, (r3 & Ac[i3]) === Ac[i3]);
  }
  o$1(ga, "DefinedInfo");
  function Lc(e3, t3, r3) {
    r3 && (e3[t3] = r3);
  }
  o$1(Lc, "mark");
});
var dr = H$1((Yb, Pc) => {
  var Hc = _n(), k2 = ma(), O2 = va();
  Pc.exports = B2;
  function B2(e3) {
    var t3 = e3.space, r3 = e3.mustUseProperty || [], n3 = e3.attributes || {}, a4 = e3.properties, i3 = e3.transform, c4 = {}, l4 = {}, s2, u2;
    for (s2 in a4)
      u2 = new O2(
        s2,
        i3(n3, s2),
        a4[s2],
        t3
      ), r3.indexOf(s2) !== -1 && (u2.mustUseProperty = true), c4[s2] = u2, l4[Hc(s2)] = s2, l4[Hc(u2.attribute)] = s2;
    return new k2(c4, l4, t3);
  }
  o$1(B2, "create");
});
var Oc = H$1((Zb, kc) => {
  var N2 = dr();
  kc.exports = N2({
    space: "xlink",
    transform: F2,
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
  function F2(e3, t3) {
    return "xlink:" + t3.slice(5).toLowerCase();
  }
  o$1(F2, "xlinkTransform");
});
var Nc = H$1((Jb, Bc) => {
  var D2 = dr();
  Bc.exports = D2({
    space: "xml",
    transform: _2,
    properties: {
      xmlLang: null,
      xmlBase: null,
      xmlSpace: null
    }
  });
  function _2(e3, t3) {
    return "xml:" + t3.slice(3).toLowerCase();
  }
  o$1(_2, "xmlTransform");
});
var Dc = H$1((e9, Fc) => {
  Fc.exports = $2;
  function $2(e3, t3) {
    return t3 in e3 ? e3[t3] : t3;
  }
  o$1($2, "caseSensitiveTransform");
});
var wa = H$1((r9, _c2) => {
  var V2 = Dc();
  _c2.exports = j2;
  function j2(e3, t3) {
    return V2(e3, t3.toLowerCase());
  }
  o$1(j2, "caseInsensitiveTransform");
});
var Vc = H$1((o9, $c) => {
  var W2 = dr(), U2 = wa();
  $c.exports = W2({
    space: "xmlns",
    attributes: {
      xmlnsxlink: "xmlns:xlink"
    },
    transform: U2,
    properties: {
      xmlns: null,
      xmlnsXLink: null
    }
  });
});
var Wc = H$1((a9, jc) => {
  var ba = $n(), q2 = dr(), Ae2 = ba.booleanish, De2 = ba.number, jt2 = ba.spaceSeparated;
  jc.exports = q2({
    transform: G2,
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: Ae2,
      ariaAutoComplete: null,
      ariaBusy: Ae2,
      ariaChecked: Ae2,
      ariaColCount: De2,
      ariaColIndex: De2,
      ariaColSpan: De2,
      ariaControls: jt2,
      ariaCurrent: null,
      ariaDescribedBy: jt2,
      ariaDetails: null,
      ariaDisabled: Ae2,
      ariaDropEffect: jt2,
      ariaErrorMessage: null,
      ariaExpanded: Ae2,
      ariaFlowTo: jt2,
      ariaGrabbed: Ae2,
      ariaHasPopup: null,
      ariaHidden: Ae2,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: jt2,
      ariaLevel: De2,
      ariaLive: null,
      ariaModal: Ae2,
      ariaMultiLine: Ae2,
      ariaMultiSelectable: Ae2,
      ariaOrientation: null,
      ariaOwns: jt2,
      ariaPlaceholder: null,
      ariaPosInSet: De2,
      ariaPressed: Ae2,
      ariaReadOnly: Ae2,
      ariaRelevant: null,
      ariaRequired: Ae2,
      ariaRoleDescription: jt2,
      ariaRowCount: De2,
      ariaRowIndex: De2,
      ariaRowSpan: De2,
      ariaSelected: Ae2,
      ariaSetSize: De2,
      ariaSort: null,
      ariaValueMax: De2,
      ariaValueMin: De2,
      ariaValueNow: De2,
      ariaValueText: null,
      role: null
    }
  });
  function G2(e3, t3) {
    return t3 === "role" ? t3 : "aria-" + t3.slice(4).toLowerCase();
  }
  o$1(G2, "ariaTransform");
});
var qc = H$1((l9, Uc) => {
  var pr2 = $n(), Y2 = dr(), X2 = wa(), B2 = pr2.boolean, Z2 = pr2.overloadedBoolean, tn2 = pr2.booleanish, Y3 = pr2.number, ye2 = pr2.spaceSeparated, Vn2 = pr2.commaSeparated;
  Uc.exports = Y2({
    space: "html",
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv"
    },
    transform: X2,
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      // Standard Properties.
      abbr: null,
      accept: Vn2,
      acceptCharset: ye2,
      accessKey: ye2,
      action: null,
      allow: null,
      allowFullScreen: B2,
      allowPaymentRequest: B2,
      allowUserMedia: B2,
      alt: null,
      as: null,
      async: B2,
      autoCapitalize: null,
      autoComplete: ye2,
      autoFocus: B2,
      autoPlay: B2,
      capture: B2,
      charSet: null,
      checked: B2,
      cite: null,
      className: ye2,
      cols: Y3,
      colSpan: null,
      content: null,
      contentEditable: tn2,
      controls: B2,
      controlsList: ye2,
      coords: Y3 | Vn2,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: B2,
      defer: B2,
      dir: null,
      dirName: null,
      disabled: B2,
      download: Z2,
      draggable: tn2,
      encType: null,
      enterKeyHint: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: B2,
      formTarget: null,
      headers: ye2,
      height: Y3,
      hidden: B2,
      high: Y3,
      href: null,
      hrefLang: null,
      htmlFor: ye2,
      httpEquiv: ye2,
      id: null,
      imageSizes: null,
      imageSrcSet: Vn2,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: B2,
      itemId: null,
      itemProp: ye2,
      itemRef: ye2,
      itemScope: B2,
      itemType: ye2,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: B2,
      low: Y3,
      manifest: null,
      max: null,
      maxLength: Y3,
      media: null,
      method: null,
      min: null,
      minLength: Y3,
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
      optimum: Y3,
      pattern: null,
      ping: ye2,
      placeholder: null,
      playsInline: B2,
      poster: null,
      preload: null,
      readOnly: B2,
      referrerPolicy: null,
      rel: ye2,
      required: B2,
      reversed: B2,
      rows: Y3,
      rowSpan: Y3,
      sandbox: ye2,
      scope: null,
      scoped: B2,
      seamless: B2,
      selected: B2,
      shape: null,
      size: Y3,
      sizes: null,
      slot: null,
      span: Y3,
      spellCheck: tn2,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: Vn2,
      start: Y3,
      step: null,
      style: null,
      tabIndex: Y3,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: B2,
      useMap: null,
      value: tn2,
      width: Y3,
      wrap: null,
      // Legacy.
      // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
      align: null,
      // Several. Use CSS `text-align` instead,
      aLink: null,
      // `<body>`. Use CSS `a:active {color}` instead
      archive: ye2,
      // `<object>`. List of URIs to archives
      axis: null,
      // `<td>` and `<th>`. Use `scope` on `<th>`
      background: null,
      // `<body>`. Use CSS `background-image` instead
      bgColor: null,
      // `<body>` and table elements. Use CSS `background-color` instead
      border: Y3,
      // `<table>`. Use CSS `border-width` instead,
      borderColor: null,
      // `<table>`. Use CSS `border-color` instead,
      bottomMargin: Y3,
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
      hSpace: Y3,
      // `<img>` and `<object>`
      leftMargin: Y3,
      // `<body>`
      link: null,
      // `<body>`. Use CSS `a:link {color: *}` instead
      longDesc: null,
      // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
      lowSrc: null,
      // `<img>`. Use a `<picture>`
      marginHeight: Y3,
      // `<body>`
      marginWidth: Y3,
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
      rightMargin: Y3,
      // `<body>`
      rules: null,
      // `<table>`
      scheme: null,
      // `<meta>`
      scrolling: tn2,
      // `<frame>`. Use overflow in the child context
      standby: null,
      // `<object>`
      summary: null,
      // `<table>`
      text: null,
      // `<body>`. Use CSS `color` instead
      topMargin: Y3,
      // `<body>`
      valueType: null,
      // `<param>`
      version: null,
      // `<html>`. Use a doctype.
      vAlign: null,
      // Several. Use CSS `vertical-align` instead
      vLink: null,
      // `<body>`. Use CSS `a:visited {color}` instead
      vSpace: Y3,
      // `<img>` and `<object>`
      // Non-standard Properties.
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: B2,
      disableRemotePlayback: B2,
      prefix: null,
      property: null,
      results: Y3,
      security: null,
      unselectable: null
    }
  });
});
var Yc = H$1((c9, Gc) => {
  var K2 = Ec(), J2 = Oc(), Q2 = Nc(), e4 = Vc(), t4 = Wc(), r4 = qc();
  Gc.exports = K2([Q2, J2, e4, t4, r4]);
});
var Kc = H$1((s9, Zc) => {
  var n4 = _n(), o4 = va(), a4 = ha(), ya = "data";
  Zc.exports = c4;
  var i4 = /^data[-\w.:]+$/i, Xc = /-[a-z]/g, l4 = /[A-Z]/g;
  function c4(e3, t3) {
    var r3 = n4(t3), n3 = t3, a5 = a4;
    return r3 in e3.normal ? e3.property[e3.normal[r3]] : (r3.length > 4 && r3.slice(0, 4) === ya && i4.test(t3) && (t3.charAt(4) === "-" ? n3 = s4(t3) : t3 = u4(t3), a5 = o4), new a5(n3, t3));
  }
  o$1(c4, "find");
  function s4(e3) {
    var t3 = e3.slice(5).replace(Xc, d4);
    return ya + t3.charAt(0).toUpperCase() + t3.slice(1);
  }
  o$1(s4, "datasetToProperty");
  function u4(e3) {
    var t3 = e3.slice(4);
    return Xc.test(t3) ? e3 : (t3 = t3.replace(l4, f4), t3.charAt(0) !== "-" && (t3 = "-" + t3), ya + t3);
  }
  o$1(u4, "datasetToAttribute");
  function f4(e3) {
    return "-" + e3.toLowerCase();
  }
  o$1(f4, "kebab");
  function d4(e3) {
    return e3.charAt(1).toUpperCase();
  }
  o$1(d4, "camelcase");
});
var es = H$1((f9, Qc) => {
  Qc.exports = p4;
  var Jc = /[#.]/g;
  function p4(e3, t3) {
    for (var r3 = e3 || "", n3 = t3 || "div", a4 = {}, i3 = 0, c4, l4, s2; i3 < r3.length; )
      Jc.lastIndex = i3, s2 = Jc.exec(r3), c4 = r3.slice(i3, s2 ? s2.index : r3.length), c4 && (l4 ? l4 === "#" ? a4.id = c4 : a4.className ? a4.className.push(
        c4
      ) : a4.className = [c4] : n3 = c4, i3 += c4.length), s2 && (l4 = s2[0], i3++);
    return { type: "element", tagName: n3, properties: a4, children: [] };
  }
  o$1(p4, "parse");
});
var rs = H$1((Ra) => {
  Ra.parse = g4;
  Ra.stringify = v4;
  var ts2 = "", m4 = " ", h4 = /[ \t\n\r\f]+/g;
  function g4(e3) {
    var t3 = String(e3 || ts2).trim();
    return t3 === ts2 ? [] : t3.split(h4);
  }
  o$1(g4, "parse");
  function v4(e3) {
    return e3.join(m4).trim();
  }
  o$1(v4, "stringify");
});
var os = H$1((Ea) => {
  Ea.parse = w4;
  Ea.stringify = b4;
  var xa = ",", ns2 = " ", rn2 = "";
  function w4(e3) {
    for (var t3 = [], r3 = String(e3 || rn2), n3 = r3.indexOf(xa), a4 = 0, i3 = false, c4; !i3; )
      n3 === -1 && (n3 = r3.length, i3 = true), c4 = r3.slice(a4, n3).trim(), (c4 || !i3) && t3.push(c4), a4 = n3 + 1, n3 = r3.indexOf(xa, a4);
    return t3;
  }
  o$1(w4, "parse");
  function b4(e3, t3) {
    var r3 = t3 || {}, n3 = r3.padLeft === false ? rn2 : ns2, a4 = r3.padRight ? ns2 : rn2;
    return e3[e3.length - 1] === rn2 && (e3 = e3.concat(rn2)), e3.join(a4 + xa + n3).trim();
  }
  o$1(b4, "stringify");
});
var fs = H$1((v9, us2) => {
  var y4 = Kc(), as2 = _n(), R4 = es(), is2 = rs().parse, ls2 = os().parse;
  us2.exports = E4;
  var x4 = {}.hasOwnProperty;
  function E4(e3, t3, r3) {
    var n3 = r3 ? L4(r3) : null;
    return a4;
    function a4(c4, l4) {
      var s2 = R4(c4, t3), u2 = Array.prototype.slice.call(arguments, 2), f2 = s2.tagName.toLowerCase(), d2;
      if (s2.tagName = n3 && x4.call(n3, f2) ? n3[f2] : f2, l4 && S4(l4, s2) && (u2.unshift(l4), l4 = null), l4)
        for (d2 in l4)
          i3(s2.properties, d2, l4[d2]);
      return ss2(s2.children, u2), s2.tagName === "template" && (s2.content = { type: "root", children: s2.children }, s2.children = []), s2;
    }
    function i3(c4, l4, s2) {
      var u2, f2, d2;
      s2 == null || s2 !== s2 || (u2 = y4(e3, l4), f2 = u2.property, d2 = s2, typeof d2 == "string" && (u2.spaceSeparated ? d2 = is2(d2) : u2.commaSeparated ? d2 = ls2(d2) : u2.commaOrSpaceSeparated && (d2 = is2(ls2(d2).join(" ")))), f2 === "style" && typeof s2 != "string" && (d2 = A4(d2)), f2 === "className" && c4.className && (d2 = c4.className.concat(d2)), c4[f2] = M4(u2, f2, d2));
    }
  }
  o$1(E4, "factory");
  function S4(e3, t3) {
    return typeof e3 == "string" || "length" in e3 || C4(t3.tagName, e3);
  }
  o$1(S4, "isChildren");
  function C4(e3, t3) {
    var r3 = t3.type;
    return e3 === "input" || !r3 || typeof r3 != "string" ? false : typeof t3.children == "object" && "length" in t3.children ? true : (r3 = r3.toLowerCase(), e3 === "button" ? r3 !== "menu" && r3 !== "submit" && r3 !== "reset" && r3 !== "button" : "value" in t3);
  }
  o$1(C4, "isNode");
  function ss2(e3, t3) {
    var r3, n3;
    if (typeof t3 == "string" || typeof t3 == "number") {
      e3.push({ type: "text", value: String(t3) });
      return;
    }
    if (typeof t3 == "object" && "length" in t3) {
      for (r3 = -1, n3 = t3.length; ++r3 < n3; )
        ss2(e3, t3[r3]);
      return;
    }
    if (typeof t3 != "object" || !("type" in t3))
      throw new Error("Expected node, nodes, or string, got `" + t3 + "`");
    e3.push(t3);
  }
  o$1(ss2, "addChild");
  function M4(e3, t3, r3) {
    var n3, a4, i3;
    if (typeof r3 != "object" || !("length" in r3))
      return cs2(e3, t3, r3);
    for (a4 = r3.length, n3 = -1, i3 = []; ++n3 < a4; )
      i3[n3] = cs2(e3, t3, r3[n3]);
    return i3;
  }
  o$1(M4, "parsePrimitives");
  function cs2(e3, t3, r3) {
    var n3 = r3;
    return e3.number || e3.positiveNumber ? !isNaN(n3) && n3 !== "" && (n3 = Number(n3)) : (e3.boolean || e3.overloadedBoolean) && typeof n3 == "string" && (n3 === "" || as2(r3) === as2(t3)) && (n3 = true), n3;
  }
  o$1(cs2, "parsePrimitive");
  function A4(e3) {
    var t3 = [], r3;
    for (r3 in e3)
      t3.push([r3, e3[r3]].join(": "));
    return t3.join("; ");
  }
  o$1(A4, "style");
  function L4(e3) {
    for (var t3 = e3.length, r3 = -1, n3 = {}, a4; ++r3 < t3; )
      a4 = e3[r3], n3[a4.toLowerCase()] = a4;
    return n3;
  }
  o$1(L4, "createAdjustMap");
});
var ms = H$1((b9, ps2) => {
  var I4 = Yc(), z4 = fs(), ds2 = z4(I4, "div");
  ds2.displayName = "html";
  ps2.exports = ds2;
});
var gs = H$1((y9, hs2) => {
  hs2.exports = ms();
});
var vs = H$1((R9, T4) => {
  T4.exports = {
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
var ws = H$1((x9, H4) => {
  H4.exports = {
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
var Sa = H$1((E9, bs2) => {
  bs2.exports = P4;
  function P4(e3) {
    var t3 = typeof e3 == "string" ? e3.charCodeAt(0) : e3;
    return t3 >= 48 && t3 <= 57;
  }
  o$1(P4, "decimal");
});
var Rs = H$1((C9, ys2) => {
  ys2.exports = k4;
  function k4(e3) {
    var t3 = typeof e3 == "string" ? e3.charCodeAt(0) : e3;
    return t3 >= 97 && t3 <= 102 || t3 >= 65 && t3 <= 70 || t3 >= 48 && t3 <= 57;
  }
  o$1(k4, "hexadecimal");
});
var Es = H$1((A9, xs2) => {
  xs2.exports = O4;
  function O4(e3) {
    var t3 = typeof e3 == "string" ? e3.charCodeAt(0) : e3;
    return t3 >= 97 && t3 <= 122 || t3 >= 65 && t3 <= 90;
  }
  o$1(O4, "alphabetical");
});
var Cs = H$1((I9, Ss2) => {
  var B4 = Es(), N4 = Sa();
  Ss2.exports = F4;
  function F4(e3) {
    return B4(e3) || N4(e3);
  }
  o$1(F4, "alphanumerical");
});
var As = H$1((T9, Ms2) => {
  var jn2, D4 = 59;
  Ms2.exports = _4;
  function _4(e3) {
    var t3 = "&" + e3 + ";", r3;
    return jn2 = jn2 || document.createElement("i"), jn2.innerHTML = t3, r3 = jn2.textContent, r3.charCodeAt(r3.length - 1) === D4 && e3 !== "semi" || r3 === t3 ? false : r3;
  }
  o$1(_4, "decodeEntity");
});
var $s = H$1((P9, _s2) => {
  var Ls2 = vs(), Is2 = ws(), $4 = Sa(), V4 = Rs(), Ps2 = Cs(), j4 = As();
  _s2.exports = rm;
  var W4 = {}.hasOwnProperty, mr2 = String.fromCharCode, U4 = Function.prototype, zs2 = {
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
  }, q4 = 9, Ts2 = 10, G4 = 12, Y4 = 32, Hs2 = 38, X4 = 59, Z4 = 60, K4 = 61, J4 = 35, Q4 = 88, em = 120, tm = 65533, hr2 = "named", Ma = "hexadecimal", Aa = "decimal", La = {};
  La[Ma] = 16;
  La[Aa] = 10;
  var Wn2 = {};
  Wn2[hr2] = Ps2;
  Wn2[Aa] = $4;
  Wn2[Ma] = V4;
  var ks2 = 1, Os2 = 2, Bs2 = 3, Ns2 = 4, Fs2 = 5, Ca = 6, Ds2 = 7, Rt2 = {};
  Rt2[ks2] = "Named character references must be terminated by a semicolon";
  Rt2[Os2] = "Numeric character references must be terminated by a semicolon";
  Rt2[Bs2] = "Named character references cannot be empty";
  Rt2[Ns2] = "Numeric character references cannot be empty";
  Rt2[Fs2] = "Named character references must be known";
  Rt2[Ca] = "Numeric character references cannot be disallowed";
  Rt2[Ds2] = "Numeric character references cannot be outside the permissible Unicode range";
  function rm(e3, t3) {
    var r3 = {}, n3, a4;
    t3 || (t3 = {});
    for (a4 in zs2)
      n3 = t3[a4], r3[a4] = n3 ?? zs2[a4];
    return (r3.position.indent || r3.position.start) && (r3.indent = r3.position.indent || [], r3.position = r3.position.start), nm(e3, r3);
  }
  o$1(rm, "parseEntities");
  function nm(e3, t3) {
    var r3 = t3.additional, n3 = t3.nonTerminated, a4 = t3.text, i3 = t3.reference, c4 = t3.warning, l4 = t3.textContext, s2 = t3.referenceContext, u2 = t3.warningContext, f2 = t3.position, d2 = t3.indent || [], m4 = e3.length, v3 = 0, y4 = -1, p2 = f2.column || 1, h4 = f2.line || 1, g4 = "", w3 = [], b4, x4, E3, R4, S3, A3, M3, L2, P2, _2, D2, K2, T2, z2, k2, V2, F2, j2, O2;
    for (typeof r3 == "string" && (r3 = r3.charCodeAt(0)), V2 = G2(), L2 = c4 ? Ee2 : U4, v3--, m4++; ++v3 < m4; )
      if (S3 === Ts2 && (p2 = d2[y4] || 1), S3 = e3.charCodeAt(v3), S3 === Hs2) {
        if (M3 = e3.charCodeAt(v3 + 1), M3 === q4 || M3 === Ts2 || M3 === G4 || M3 === Y4 || M3 === Hs2 || M3 === Z4 || M3 !== M3 || r3 && M3 === r3) {
          g4 += mr2(S3), p2++;
          continue;
        }
        for (T2 = v3 + 1, K2 = T2, O2 = T2, M3 === J4 ? (O2 = ++K2, M3 = e3.charCodeAt(O2), M3 === Q4 || M3 === em ? (z2 = Ma, O2 = ++K2) : z2 = Aa) : z2 = hr2, b4 = "", D2 = "", R4 = "", k2 = Wn2[z2], O2--; ++O2 < m4 && (M3 = e3.charCodeAt(O2), !!k2(M3)); )
          R4 += mr2(M3), z2 === hr2 && W4.call(Ls2, R4) && (b4 = R4, D2 = Ls2[R4]);
        E3 = e3.charCodeAt(O2) === X4, E3 && (O2++, x4 = z2 === hr2 ? j4(R4) : false, x4 && (b4 = R4, D2 = x4)), j2 = 1 + O2 - T2, !E3 && !n3 || (R4 ? z2 === hr2 ? (E3 && !D2 ? L2(Fs2, 1) : (b4 !== R4 && (O2 = K2 + b4.length, j2 = 1 + O2 - K2, E3 = false), E3 || (P2 = b4 ? ks2 : Bs2, t3.attribute ? (M3 = e3.charCodeAt(O2), M3 === K4 ? (L2(P2, j2), D2 = null) : Ps2(M3) ? D2 = null : L2(P2, j2)) : L2(P2, j2))), A3 = D2) : (E3 || L2(Os2, j2), A3 = parseInt(R4, La[z2]), om(A3) ? (L2(Ds2, j2), A3 = mr2(tm)) : A3 in Is2 ? (L2(Ca, j2), A3 = Is2[A3]) : (_2 = "", am(A3) && L2(Ca, j2), A3 > 65535 && (A3 -= 65536, _2 += mr2(A3 >>> 10 | 55296), A3 = 56320 | A3 & 1023), A3 = _2 + mr2(A3))) : z2 !== hr2 && L2(Ns2, j2)), A3 ? (pe2(), V2 = G2(), v3 = O2 - 1, p2 += O2 - T2 + 1, w3.push(A3), F2 = G2(), F2.offset++, i3 && i3.call(
          s2,
          A3,
          { start: V2, end: F2 },
          e3.slice(T2 - 1, O2)
        ), V2 = F2) : (R4 = e3.slice(T2 - 1, O2), g4 += R4, p2 += R4.length, v3 = O2 - 1);
      } else
        S3 === 10 && (h4++, y4++, p2 = 0), S3 === S3 ? (g4 += mr2(S3), p2++) : pe2();
    return w3.join("");
    function G2() {
      return {
        line: h4,
        column: p2,
        offset: v3 + (f2.offset || 0)
      };
    }
    function Ee2(se2, ue2) {
      var ve2 = G2();
      ve2.column += ue2, ve2.offset += ue2, c4.call(u2, Rt2[se2], ve2, se2);
    }
    function pe2() {
      g4 && (w3.push(g4), a4 && a4.call(l4, g4, { start: V2, end: G2() }), g4 = "");
    }
  }
  o$1(nm, "parse");
  function om(e3) {
    return e3 >= 55296 && e3 <= 57343 || e3 > 1114111;
  }
  o$1(om, "prohibited");
  function am(e3) {
    return e3 >= 1 && e3 <= 8 || e3 === 11 || e3 >= 13 && e3 <= 31 || e3 >= 127 && e3 <= 159 || e3 >= 64976 && e3 <= 65007 || (e3 & 65535) === 65535 || (e3 & 65535) === 65534;
  }
  o$1(am, "disallowed");
});
var js = H$1((O9, Un2) => {
  var im = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {};
  var Vs = function(e3) {
    var t3 = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, r3 = 0, n3 = {}, a4 = {
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
      manual: e3.Prism && e3.Prism.manual,
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
      disableWorkerMessageHandler: e3.Prism && e3.Prism.disableWorkerMessageHandler,
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
        encode: /* @__PURE__ */ o$1(function p2(h4) {
          return h4 instanceof i3 ? new i3(h4.type, p2(h4.content), h4.alias) : Array.isArray(h4) ? h4.map(p2) : h4.replace(/&/g, "&amp;").replace(
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
        type: /* @__PURE__ */ o$1(function(p2) {
          return Object.prototype.toString.call(p2).slice(8, -1);
        }, "type"),
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: /* @__PURE__ */ o$1(function(p2) {
          return p2.__id || Object.defineProperty(p2, "__id", { value: ++r3 }), p2.__id;
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
        clone: /* @__PURE__ */ o$1(function p2(h4, g4) {
          g4 = g4 || {};
          var w3, b4;
          switch (a4.util.type(h4)) {
            case "Object":
              if (b4 = a4.util.objId(h4), g4[b4])
                return g4[b4];
              w3 = /** @type {Record<string, any>} */
              {}, g4[b4] = w3;
              for (var x4 in h4)
                h4.hasOwnProperty(x4) && (w3[x4] = p2(h4[x4], g4));
              return (
                /** @type {any} */
                w3
              );
            case "Array":
              return b4 = a4.util.objId(h4), g4[b4] ? g4[b4] : (w3 = [], g4[b4] = w3, /** @type {Array} */
              /** @type {any} */
              h4.forEach(function(E3, R4) {
                w3[R4] = p2(E3, g4);
              }), /** @type {any} */
              w3);
            default:
              return h4;
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
        getLanguage: /* @__PURE__ */ o$1(function(p2) {
          for (; p2; ) {
            var h4 = t3.exec(p2.className);
            if (h4)
              return h4[1].toLowerCase();
            p2 = p2.parentElement;
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
        setLanguage: /* @__PURE__ */ o$1(function(p2, h4) {
          p2.className = p2.className.replace(RegExp(t3, "gi"), ""), p2.classList.add("language-" + h4);
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
          } catch (w3) {
            var p2 = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(w3.stack) || [])[1];
            if (p2) {
              var h4 = document.getElementsByTagName("script");
              for (var g4 in h4)
                if (h4[g4].src == p2)
                  return h4[g4];
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
        isActive: /* @__PURE__ */ o$1(function(p2, h4, g4) {
          for (var w3 = "no-" + h4; p2; ) {
            var b4 = p2.classList;
            if (b4.contains(h4))
              return true;
            if (b4.contains(w3))
              return false;
            p2 = p2.parentElement;
          }
          return !!g4;
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
        extend: /* @__PURE__ */ o$1(function(p2, h4) {
          var g4 = a4.util.clone(a4.languages[p2]);
          for (var w3 in h4)
            g4[w3] = h4[w3];
          return g4;
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
        insertBefore: /* @__PURE__ */ o$1(function(p2, h4, g4, w3) {
          w3 = w3 || /** @type {any} */
          a4.languages;
          var b4 = w3[p2], x4 = {};
          for (var E3 in b4)
            if (b4.hasOwnProperty(E3)) {
              if (E3 == h4)
                for (var R4 in g4)
                  g4.hasOwnProperty(R4) && (x4[R4] = g4[R4]);
              g4.hasOwnProperty(E3) || (x4[E3] = b4[E3]);
            }
          var S3 = w3[p2];
          return w3[p2] = x4, a4.languages.DFS(a4.languages, function(A3, M3) {
            M3 === S3 && A3 != p2 && (this[A3] = x4);
          }), x4;
        }, "insertBefore"),
        // Traverse a language definition with Depth First Search
        DFS: /* @__PURE__ */ o$1(function p2(h4, g4, w3, b4) {
          b4 = b4 || {};
          var x4 = a4.util.objId;
          for (var E3 in h4)
            if (h4.hasOwnProperty(E3)) {
              g4.call(h4, E3, h4[E3], w3 || E3);
              var R4 = h4[E3], S3 = a4.util.type(R4);
              S3 === "Object" && !b4[x4(R4)] ? (b4[x4(R4)] = true, p2(R4, g4, null, b4)) : S3 === "Array" && !b4[x4(R4)] && (b4[x4(R4)] = true, p2(R4, g4, E3, b4));
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
      highlightAll: /* @__PURE__ */ o$1(function(p2, h4) {
        a4.highlightAllUnder(document, p2, h4);
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
      highlightAllUnder: /* @__PURE__ */ o$1(function(p2, h4, g4) {
        var w3 = {
          callback: g4,
          container: p2,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        a4.hooks.run("before-highlightall", w3), w3.elements = Array.prototype.slice.apply(w3.container.querySelectorAll(w3.selector)), a4.hooks.run(
          "before-all-elements-highlight",
          w3
        );
        for (var b4 = 0, x4; x4 = w3.elements[b4++]; )
          a4.highlightElement(x4, h4 === true, w3.callback);
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
      highlightElement: /* @__PURE__ */ o$1(function(p2, h4, g4) {
        var w3 = a4.util.getLanguage(p2), b4 = a4.languages[w3];
        a4.util.setLanguage(p2, w3);
        var x4 = p2.parentElement;
        x4 && x4.nodeName.toLowerCase() === "pre" && a4.util.setLanguage(x4, w3);
        var E3 = p2.textContent, R4 = {
          element: p2,
          language: w3,
          grammar: b4,
          code: E3
        };
        function S3(M3) {
          R4.highlightedCode = M3, a4.hooks.run("before-insert", R4), R4.element.innerHTML = R4.highlightedCode, a4.hooks.run("after-highlight", R4), a4.hooks.run("complete", R4), g4 && g4.call(R4.element);
        }
        if (o$1(S3, "insertHighlightedCode"), a4.hooks.run("before-sanity-check", R4), x4 = R4.element.parentElement, x4 && x4.nodeName.toLowerCase() === "pre" && !x4.hasAttribute("tabindex") && x4.setAttribute("tabindex", "0"), !R4.code) {
          a4.hooks.run("complete", R4), g4 && g4.call(R4.element);
          return;
        }
        if (a4.hooks.run("before-highlight", R4), !R4.grammar) {
          S3(a4.util.encode(R4.code));
          return;
        }
        if (h4 && e3.Worker) {
          var A3 = new Worker(a4.filename);
          A3.onmessage = function(M3) {
            S3(M3.data);
          }, A3.postMessage(JSON.stringify({
            language: R4.language,
            code: R4.code,
            immediateClose: true
          }));
        } else
          S3(a4.highlight(R4.code, R4.grammar, R4.language));
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
      highlight: /* @__PURE__ */ o$1(function(p2, h4, g4) {
        var w3 = {
          code: p2,
          grammar: h4,
          language: g4
        };
        if (a4.hooks.run("before-tokenize", w3), !w3.grammar)
          throw new Error('The language "' + w3.language + '" has no grammar.');
        return w3.tokens = a4.tokenize(w3.code, w3.grammar), a4.hooks.run("after-tokenize", w3), i3.stringify(a4.util.encode(w3.tokens), w3.language);
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
      tokenize: /* @__PURE__ */ o$1(function(p2, h4) {
        var g4 = h4.rest;
        if (g4) {
          for (var w3 in g4)
            h4[w3] = g4[w3];
          delete h4.rest;
        }
        var b4 = new s2();
        return u2(b4, b4.head, p2), l4(p2, b4, h4, b4.head, 0), d2(b4);
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
        add: /* @__PURE__ */ o$1(function(p2, h4) {
          var g4 = a4.hooks.all;
          g4[p2] = g4[p2] || [], g4[p2].push(h4);
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
        run: /* @__PURE__ */ o$1(function(p2, h4) {
          var g4 = a4.hooks.all[p2];
          if (!(!g4 || !g4.length))
            for (var w3 = 0, b4; b4 = g4[w3++]; )
              b4(h4);
        }, "run")
      },
      Token: i3
    };
    e3.Prism = a4;
    function i3(p2, h4, g4, w3) {
      this.type = p2, this.content = h4, this.alias = g4, this.length = (w3 || "").length | 0;
    }
    o$1(i3, "Token"), i3.stringify = /* @__PURE__ */ o$1(function p2(h4, g4) {
      if (typeof h4 == "string")
        return h4;
      if (Array.isArray(h4)) {
        var w3 = "";
        return h4.forEach(function(S3) {
          w3 += p2(S3, g4);
        }), w3;
      }
      var b4 = {
        type: h4.type,
        content: p2(h4.content, g4),
        tag: "span",
        classes: ["token", h4.type],
        attributes: {},
        language: g4
      }, x4 = h4.alias;
      x4 && (Array.isArray(x4) ? Array.prototype.push.apply(b4.classes, x4) : b4.classes.push(x4)), a4.hooks.run("wrap", b4);
      var E3 = "";
      for (var R4 in b4.attributes)
        E3 += " " + R4 + '="' + (b4.attributes[R4] || "").replace(/"/g, "&quot;") + '"';
      return "<" + b4.tag + ' class="' + b4.classes.join(" ") + '"' + E3 + ">" + b4.content + "</" + b4.tag + ">";
    }, "stringify");
    function c4(p2, h4, g4, w3) {
      p2.lastIndex = h4;
      var b4 = p2.exec(g4);
      if (b4 && w3 && b4[1]) {
        var x4 = b4[1].length;
        b4.index += x4, b4[0] = b4[0].slice(x4);
      }
      return b4;
    }
    o$1(c4, "matchPattern");
    function l4(p2, h4, g4, w3, b4, x4) {
      for (var E3 in g4)
        if (!(!g4.hasOwnProperty(E3) || !g4[E3])) {
          var R4 = g4[E3];
          R4 = Array.isArray(R4) ? R4 : [R4];
          for (var S3 = 0; S3 < R4.length; ++S3) {
            if (x4 && x4.cause == E3 + "," + S3)
              return;
            var A3 = R4[S3], M3 = A3.inside, L2 = !!A3.lookbehind, P2 = !!A3.greedy, _2 = A3.alias;
            if (P2 && !A3.pattern.global) {
              var D2 = A3.pattern.toString().match(/[imsuy]*$/)[0];
              A3.pattern = RegExp(A3.pattern.source, D2 + "g");
            }
            for (var K2 = A3.pattern || A3, T2 = w3.next, z2 = b4; T2 !== h4.tail && !(x4 && z2 >= x4.reach); z2 += T2.value.length, T2 = T2.next) {
              var k2 = T2.value;
              if (h4.length > p2.length)
                return;
              if (!(k2 instanceof i3)) {
                var V2 = 1, F2;
                if (P2) {
                  if (F2 = c4(K2, z2, p2, L2), !F2 || F2.index >= p2.length)
                    break;
                  var Ee2 = F2.index, j2 = F2.index + F2[0].length, O2 = z2;
                  for (O2 += T2.value.length; Ee2 >= O2; )
                    T2 = T2.next, O2 += T2.value.length;
                  if (O2 -= T2.value.length, z2 = O2, T2.value instanceof i3)
                    continue;
                  for (var G2 = T2; G2 !== h4.tail && (O2 < j2 || typeof G2.value == "string"); G2 = G2.next)
                    V2++, O2 += G2.value.length;
                  V2--, k2 = p2.slice(z2, O2), F2.index -= z2;
                } else if (F2 = c4(K2, 0, k2, L2), !F2)
                  continue;
                var Ee2 = F2.index, pe2 = F2[0], se2 = k2.slice(0, Ee2), ue2 = k2.slice(Ee2 + pe2.length), ve2 = z2 + k2.length;
                x4 && ve2 > x4.reach && (x4.reach = ve2);
                var Se2 = T2.prev;
                se2 && (Se2 = u2(h4, Se2, se2), z2 += se2.length), f2(h4, Se2, V2);
                var Ot2 = new i3(E3, M3 ? a4.tokenize(pe2, M3) : pe2, _2, pe2);
                if (T2 = u2(h4, Se2, Ot2), ue2 && u2(h4, T2, ue2), V2 > 1) {
                  var Yr2 = {
                    cause: E3 + "," + S3,
                    reach: ve2
                  };
                  l4(p2, h4, g4, T2.prev, z2, Yr2), x4 && Yr2.reach > x4.reach && (x4.reach = Yr2.reach);
                }
              }
            }
          }
        }
    }
    o$1(l4, "matchGrammar");
    function s2() {
      var p2 = { value: null, prev: null, next: null }, h4 = { value: null, prev: p2, next: null };
      p2.next = h4, this.head = p2, this.tail = h4, this.length = 0;
    }
    o$1(s2, "LinkedList");
    function u2(p2, h4, g4) {
      var w3 = h4.next, b4 = { value: g4, prev: h4, next: w3 };
      return h4.next = b4, w3.prev = b4, p2.length++, b4;
    }
    o$1(u2, "addAfter");
    function f2(p2, h4, g4) {
      for (var w3 = h4.next, b4 = 0; b4 < g4 && w3 !== p2.tail; b4++)
        w3 = w3.next;
      h4.next = w3, w3.prev = h4, p2.length -= b4;
    }
    o$1(f2, "removeRange");
    function d2(p2) {
      for (var h4 = [], g4 = p2.head.next; g4 !== p2.tail; )
        h4.push(g4.value), g4 = g4.next;
      return h4;
    }
    if (o$1(d2, "toArray"), !e3.document)
      return e3.addEventListener && (a4.disableWorkerMessageHandler || e3.addEventListener("message", function(p2) {
        var h4 = JSON.parse(p2.data), g4 = h4.language, w3 = h4.code, b4 = h4.immediateClose;
        e3.postMessage(a4.highlight(w3, a4.languages[g4], g4)), b4 && e3.close();
      }, false)), a4;
    var m4 = a4.util.currentScript();
    m4 && (a4.filename = m4.src, m4.hasAttribute("data-manual") && (a4.manual = true));
    function v3() {
      a4.manual || a4.highlightAll();
    }
    if (o$1(v3, "highlightAutomaticallyCallback"), !a4.manual) {
      var y4 = document.readyState;
      y4 === "loading" || y4 === "interactive" && m4 && m4.defer ? document.addEventListener("DOMContentLoaded", v3) : window.requestAnimationFrame ? window.requestAnimationFrame(v3) : window.setTimeout(v3, 16);
    }
    return a4;
  }(im);
  typeof Un2 < "u" && Un2.exports && (Un2.exports = Vs);
  typeof global < "u" && (global.Prism = Vs);
});
var za = H$1((N9, Ws2) => {
  Ws2.exports = Ia;
  Ia.displayName = "markup";
  Ia.aliases = ["html", "mathml", "svg", "xml", "ssml", "atom", "rss"];
  function Ia(e3) {
    e3.languages.markup = {
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
    }, e3.languages.markup.tag.inside["attr-value"].inside.entity = e3.languages.markup.entity, e3.languages.markup.doctype.inside["internal-subset"].inside = e3.languages.markup, e3.hooks.add("wrap", function(t3) {
      t3.type === "entity" && (t3.attributes.title = t3.content.value.replace(/&amp;/, "&"));
    }), Object.defineProperty(e3.languages.markup.tag, "addInlined", {
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
      value: /* @__PURE__ */ o$1(function(r3, n3) {
        var a4 = {};
        a4["language-" + n3] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: true,
          inside: e3.languages[n3]
        }, a4.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var i3 = {
          "included-cdata": {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: a4
          }
        };
        i3["language-" + n3] = {
          pattern: /[\s\S]+/,
          inside: e3.languages[n3]
        };
        var c4 = {};
        c4[r3] = {
          pattern: RegExp(
            /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
              /__/g,
              function() {
                return r3;
              }
            ),
            "i"
          ),
          lookbehind: true,
          greedy: true,
          inside: i3
        }, e3.languages.insertBefore("markup", "cdata", c4);
      }, "addInlined")
    }), Object.defineProperty(e3.languages.markup.tag, "addAttribute", {
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
      value: /* @__PURE__ */ o$1(function(t3, r3) {
        e3.languages.markup.tag.inside["special-attr"].push({
          pattern: RegExp(
            /(^|["'\s])/.source + "(?:" + t3 + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
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
                  alias: [r3, "language-" + r3],
                  inside: e3.languages[r3]
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
    }), e3.languages.html = e3.languages.markup, e3.languages.mathml = e3.languages.markup, e3.languages.svg = e3.languages.markup, e3.languages.xml = e3.languages.extend("markup", {}), e3.languages.ssml = e3.languages.xml, e3.languages.atom = e3.languages.xml, e3.languages.rss = e3.languages.xml;
  }
  o$1(Ia, "markup");
});
var Ha = H$1((D9, Us2) => {
  Us2.exports = Ta;
  Ta.displayName = "css";
  Ta.aliases = [];
  function Ta(e3) {
    (function(t3) {
      var r3 = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      t3.languages.css = {
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
            "\\burl\\((?:" + r3.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)",
            "i"
          ),
          greedy: true,
          inside: {
            function: /^url/i,
            punctuation: /^\(|\)$/,
            string: {
              pattern: RegExp("^" + r3.source + "$"),
              alias: "url"
            }
          }
        },
        selector: {
          pattern: RegExp(
            `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + r3.source + ")*(?=\\s*\\{)"
          ),
          lookbehind: true
        },
        string: {
          pattern: r3,
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
      }, t3.languages.css.atrule.inside.rest = t3.languages.css;
      var n3 = t3.languages.markup;
      n3 && (n3.tag.addInlined("style", "css"), n3.tag.addAttribute("style", "css"));
    })(e3);
  }
  o$1(Ta, "css");
});
var Gs = H$1(($9, qs2) => {
  qs2.exports = Pa;
  Pa.displayName = "clike";
  Pa.aliases = [];
  function Pa(e3) {
    e3.languages.clike = {
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
  o$1(Pa, "clike");
});
var Xs = H$1((j9, Ys2) => {
  Ys2.exports = ka;
  ka.displayName = "javascript";
  ka.aliases = ["js"];
  function ka(e3) {
    e3.languages.javascript = e3.languages.extend("clike", {
      "class-name": [
        e3.languages.clike["class-name"],
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
    }), e3.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, e3.languages.insertBefore("javascript", "keyword", {
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
            inside: e3.languages.regex
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
          inside: e3.languages.javascript
        },
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: true,
          inside: e3.languages.javascript
        },
        {
          pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: true,
          inside: e3.languages.javascript
        },
        {
          pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: true,
          inside: e3.languages.javascript
        }
      ],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }), e3.languages.insertBefore("javascript", "string", {
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
              rest: e3.languages.javascript
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
    }), e3.languages.insertBefore("javascript", "operator", {
      "literal-property": {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: true,
        alias: "property"
      }
    }), e3.languages.markup && (e3.languages.markup.tag.addInlined("script", "javascript"), e3.languages.markup.tag.addAttribute(
      /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
      "javascript"
    )), e3.languages.js = e3.languages.javascript;
  }
  o$1(ka, "javascript");
});
var Qs = H$1((U9, Js2) => {
  var nn2 = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, lm = xm();
  nn2.Prism = { manual: true, disableWorkerMessageHandler: true };
  var cm = gs(), sm = $s(), Zs2 = js(), um = za(), fm = Ha(), dm = Gs(), pm = Xs();
  lm();
  var Oa = {}.hasOwnProperty;
  function Ks2() {
  }
  o$1(Ks2, "Refractor");
  Ks2.prototype = Zs2;
  var oe2 = new Ks2();
  Js2.exports = oe2;
  oe2.highlight = hm;
  oe2.register = on2;
  oe2.alias = mm;
  oe2.registered = gm;
  oe2.listLanguages = vm;
  on2(um);
  on2(fm);
  on2(dm);
  on2(pm);
  oe2.util.encode = ym;
  oe2.Token.stringify = wm;
  function on2(e3) {
    if (typeof e3 != "function" || !e3.displayName)
      throw new Error("Expected `function` for `grammar`, got `" + e3 + "`");
    oe2.languages[e3.displayName] === void 0 && e3(oe2);
  }
  o$1(on2, "register");
  function mm(e3, t3) {
    var r3 = oe2.languages, n3 = e3, a4, i3, c4, l4;
    t3 && (n3 = {}, n3[e3] = t3);
    for (a4 in n3)
      for (i3 = n3[a4], i3 = typeof i3 == "string" ? [i3] : i3, c4 = i3.length, l4 = -1; ++l4 < c4; )
        r3[i3[l4]] = r3[a4];
  }
  o$1(mm, "alias");
  function hm(e3, t3) {
    var r3 = Zs2.highlight, n3;
    if (typeof e3 != "string")
      throw new Error("Expected `string` for `value`, got `" + e3 + "`");
    if (oe2.util.type(t3) === "Object")
      n3 = t3, t3 = null;
    else {
      if (typeof t3 != "string")
        throw new Error("Expected `string` for `name`, got `" + t3 + "`");
      if (Oa.call(oe2.languages, t3))
        n3 = oe2.languages[t3];
      else
        throw new Error("Unknown language: `" + t3 + "` is not registered");
    }
    return r3.call(this, e3, n3, t3);
  }
  o$1(hm, "highlight");
  function gm(e3) {
    if (typeof e3 != "string")
      throw new Error("Expected `string` for `language`, got `" + e3 + "`");
    return Oa.call(oe2.languages, e3);
  }
  o$1(gm, "registered");
  function vm() {
    var e3 = oe2.languages, t3 = [], r3;
    for (r3 in e3)
      Oa.call(e3, r3) && typeof e3[r3] == "object" && t3.push(r3);
    return t3;
  }
  o$1(vm, "listLanguages");
  function wm(e3, t3, r3) {
    var n3;
    return typeof e3 == "string" ? { type: "text", value: e3 } : oe2.util.type(e3) === "Array" ? bm(e3, t3) : (n3 = {
      type: e3.type,
      content: oe2.Token.stringify(e3.content, t3, r3),
      tag: "span",
      classes: ["token", e3.type],
      attributes: {},
      language: t3,
      parent: r3
    }, e3.alias && (n3.classes = n3.classes.concat(e3.alias)), oe2.hooks.run("wrap", n3), cm(
      n3.tag + "." + n3.classes.join("."),
      Rm(n3.attributes),
      n3.content
    ));
  }
  o$1(wm, "stringify");
  function bm(e3, t3) {
    for (var r3 = [], n3 = e3.length, a4 = -1, i3; ++a4 < n3; )
      i3 = e3[a4], i3 !== "" && i3 !== null && i3 !== void 0 && r3.push(i3);
    for (a4 = -1, n3 = r3.length; ++a4 < n3; )
      i3 = r3[a4], r3[a4] = oe2.Token.stringify(i3, t3, r3);
    return r3;
  }
  o$1(bm, "stringifyAll");
  function ym(e3) {
    return e3;
  }
  o$1(ym, "encode");
  function Rm(e3) {
    var t3;
    for (t3 in e3)
      e3[t3] = sm(e3[t3]);
    return e3;
  }
  o$1(Rm, "attributes");
  function xm() {
    var e3 = "Prism" in nn2, t3 = e3 ? nn2.Prism : void 0;
    return r3;
    function r3() {
      e3 ? nn2.Prism = t3 : delete nn2.Prism, e3 = void 0, t3 = void 0;
    }
  }
  o$1(xm, "capture");
});
var qn, Ba, Gn, e1 = C$1(() => {
  gc();
  qn = me$1(Qs()), Ba = da(qn.default, {});
  Ba.registerLanguage = function(e3, t3) {
    return qn.default.register(t3);
  };
  Ba.alias = function(e3, t3) {
    return qn.default.alias(e3, t3);
  };
  Gn = Ba;
});
var t1 = C$1(() => {
  fa();
});
var n1 = H$1((K9, r1) => {
  r1.exports = Na;
  Na.displayName = "bash";
  Na.aliases = ["shell"];
  function Na(e3) {
    (function(t3) {
      var r3 = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", n3 = {
        pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
        lookbehind: true,
        alias: "punctuation",
        // this looks reasonably well in all themes
        inside: null
        // see below
      }, a4 = {
        bash: n3,
        environment: {
          pattern: RegExp("\\$" + r3),
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
                pattern: RegExp("(\\{)" + r3),
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
      t3.languages.bash = {
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
              pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + r3),
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
          pattern: RegExp("\\$?" + r3),
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
      }, n3.inside = t3.languages.bash;
      for (var i3 = [
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
      ], c4 = a4.variable[1].inside, l4 = 0; l4 < i3.length; l4++)
        c4[i3[l4]] = t3.languages.bash[i3[l4]];
      t3.languages.shell = t3.languages.bash;
    })(e3);
  }
  o$1(Na, "bash");
});
var o1, a1, i1 = C$1(() => {
  o1 = me$1(n1()), a1 = o1.default;
});
var l1, c1, s1 = C$1(() => {
  l1 = me$1(Ha()), c1 = l1.default;
});
var f1 = H$1((ty, u1) => {
  u1.exports = Fa;
  Fa.displayName = "graphql";
  Fa.aliases = [];
  function Fa(e3) {
    e3.languages.graphql = {
      comment: /#.*/,
      description: {
        pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
        greedy: true,
        alias: "string",
        inside: {
          "language-markdown": {
            pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
            lookbehind: true,
            inside: e3.languages.markdown
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
    }, e3.hooks.add("after-tokenize", /* @__PURE__ */ o$1(function(r3) {
      if (r3.language !== "graphql")
        return;
      var n3 = r3.tokens.filter(function(h4) {
        return typeof h4 != "string" && h4.type !== "comment" && h4.type !== "scalar";
      }), a4 = 0;
      function i3(h4) {
        return n3[a4 + h4];
      }
      o$1(i3, "getToken");
      function c4(h4, g4) {
        g4 = g4 || 0;
        for (var w3 = 0; w3 < h4.length; w3++) {
          var b4 = i3(w3 + g4);
          if (!b4 || b4.type !== h4[w3])
            return false;
        }
        return true;
      }
      o$1(c4, "isTokenType");
      function l4(h4, g4) {
        for (var w3 = 1, b4 = a4; b4 < n3.length; b4++) {
          var x4 = n3[b4], E3 = x4.content;
          if (x4.type === "punctuation" && typeof E3 == "string") {
            if (h4.test(E3))
              w3++;
            else if (g4.test(E3) && (w3--, w3 === 0))
              return b4;
          }
        }
        return -1;
      }
      o$1(l4, "findClosingBracket");
      function s2(h4, g4) {
        var w3 = h4.alias;
        w3 ? Array.isArray(w3) || (h4.alias = w3 = [w3]) : h4.alias = w3 = [], w3.push(g4);
      }
      for (o$1(s2, "addAlias"); a4 < n3.length; ) {
        var u2 = n3[a4++];
        if (u2.type === "keyword" && u2.content === "mutation") {
          var f2 = [];
          if (c4(["definition-mutation", "punctuation"]) && i3(1).content === "(") {
            a4 += 2;
            var d2 = l4(/^\($/, /^\)$/);
            if (d2 === -1)
              continue;
            for (; a4 < d2; a4++) {
              var m4 = i3(0);
              m4.type === "variable" && (s2(m4, "variable-input"), f2.push(m4.content));
            }
            a4 = d2 + 1;
          }
          if (c4(["punctuation", "property-query"]) && i3(0).content === "{" && (a4++, s2(i3(0), "property-mutation"), f2.length > 0)) {
            var v3 = l4(/^\{$/, /^\}$/);
            if (v3 === -1)
              continue;
            for (var y4 = a4; y4 < v3; y4++) {
              var p2 = n3[y4];
              p2.type === "variable" && f2.indexOf(p2.content) >= 0 && s2(p2, "variable-input");
            }
          }
        }
      }
    }, "afterTokenizeGraphql"));
  }
  o$1(Fa, "graphql");
});
var d1, p1, m1 = C$1(() => {
  d1 = me$1(f1()), p1 = d1.default;
});
var g1 = H$1((oy, h1) => {
  h1.exports = Da;
  Da.displayName = "jsExtras";
  Da.aliases = [];
  function Da(e3) {
    (function(t3) {
      t3.languages.insertBefore("javascript", "function-variable", {
        "method-variable": {
          pattern: RegExp(
            "(\\.\\s*)" + t3.languages.javascript["function-variable"].pattern.source
          ),
          lookbehind: true,
          alias: ["function-variable", "method", "function", "property-access"]
        }
      }), t3.languages.insertBefore("javascript", "function", {
        method: {
          pattern: RegExp(
            "(\\.\\s*)" + t3.languages.javascript.function.source
          ),
          lookbehind: true,
          alias: ["function", "property-access"]
        }
      }), t3.languages.insertBefore("javascript", "constant", {
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
      function r3(s2, u2) {
        return RegExp(
          s2.replace(/<ID>/g, function() {
            return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
          }),
          u2
        );
      }
      o$1(r3, "withId"), t3.languages.insertBefore("javascript", "keyword", {
        imports: {
          // https://tc39.es/ecma262/#sec-imports
          pattern: r3(
            /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source
          ),
          lookbehind: true,
          inside: t3.languages.javascript
        },
        exports: {
          // https://tc39.es/ecma262/#sec-exports
          pattern: r3(
            /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source
          ),
          lookbehind: true,
          inside: t3.languages.javascript
        }
      }), t3.languages.javascript.keyword.unshift(
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
      ), t3.languages.insertBefore("javascript", "operator", {
        spread: {
          pattern: /\.{3}/,
          alias: "operator"
        },
        arrow: {
          pattern: /=>/,
          alias: "operator"
        }
      }), t3.languages.insertBefore("javascript", "punctuation", {
        "property-access": {
          pattern: r3(/(\.\s*)#?<ID>/.source),
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
        var i3 = n3[a4], c4 = t3.languages.javascript[i3];
        t3.util.type(c4) === "RegExp" && (c4 = t3.languages.javascript[i3] = {
          pattern: c4
        });
        var l4 = c4.inside || {};
        c4.inside = l4, l4["maybe-class-name"] = /^[A-Z][\s\S]*/;
      }
    })(e3);
  }
  o$1(Da, "jsExtras");
});
var v1, w1, b1 = C$1(() => {
  v1 = me$1(g1()), w1 = v1.default;
});
var R1 = H$1((ly, y1) => {
  y1.exports = _a2;
  _a2.displayName = "json";
  _a2.aliases = ["webmanifest"];
  function _a2(e3) {
    e3.languages.json = {
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
    }, e3.languages.webmanifest = e3.languages.json;
  }
  o$1(_a2, "json");
});
var x1, E1, S1 = C$1(() => {
  x1 = me$1(R1()), E1 = x1.default;
});
var Va = H$1((uy, C1) => {
  C1.exports = $a;
  $a.displayName = "jsx";
  $a.aliases = [];
  function $a(e3) {
    (function(t3) {
      var r3 = t3.util.clone(t3.languages.javascript), n3 = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source, a4 = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source, i3 = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
      function c4(u2, f2) {
        return u2 = u2.replace(/<S>/g, function() {
          return n3;
        }).replace(/<BRACES>/g, function() {
          return a4;
        }).replace(/<SPREAD>/g, function() {
          return i3;
        }), RegExp(u2, f2);
      }
      o$1(c4, "re"), i3 = c4(i3).source, t3.languages.jsx = t3.languages.extend("markup", r3), t3.languages.jsx.tag.pattern = c4(
        /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source
      ), t3.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, t3.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, t3.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, t3.languages.jsx.tag.inside.comment = r3.comment, t3.languages.insertBefore(
        "inside",
        "attr-name",
        {
          spread: {
            pattern: c4(/<SPREAD>/.source),
            inside: t3.languages.jsx
          }
        },
        t3.languages.jsx.tag
      ), t3.languages.insertBefore(
        "inside",
        "special-attr",
        {
          script: {
            // Allow for two levels of nesting
            pattern: c4(/=<BRACES>/.source),
            alias: "language-javascript",
            inside: {
              "script-punctuation": {
                pattern: /^=(?=\{)/,
                alias: "punctuation"
              },
              rest: t3.languages.jsx
            }
          }
        },
        t3.languages.jsx.tag
      );
      var l4 = /* @__PURE__ */ o$1(function(u2) {
        return u2 ? typeof u2 == "string" ? u2 : typeof u2.content == "string" ? u2.content : u2.content.map(l4).join("") : "";
      }, "stringifyToken"), s2 = /* @__PURE__ */ o$1(function(u2) {
        for (var f2 = [], d2 = 0; d2 < u2.length; d2++) {
          var m4 = u2[d2], v3 = false;
          if (typeof m4 != "string" && (m4.type === "tag" && m4.content[0] && m4.content[0].type === "tag" ? m4.content[0].content[0].content === "</" ? f2.length > 0 && f2[f2.length - 1].tagName === l4(m4.content[0].content[1]) && f2.pop() : m4.content[m4.content.length - 1].content === "/>" || f2.push({
            tagName: l4(m4.content[0].content[1]),
            openedBraces: 0
          }) : f2.length > 0 && m4.type === "punctuation" && m4.content === "{" ? f2[f2.length - 1].openedBraces++ : f2.length > 0 && f2[f2.length - 1].openedBraces > 0 && m4.type === "punctuation" && m4.content === "}" ? f2[f2.length - 1].openedBraces-- : v3 = true), (v3 || typeof m4 == "string") && f2.length > 0 && f2[f2.length - 1].openedBraces === 0) {
            var y4 = l4(m4);
            d2 < u2.length - 1 && (typeof u2[d2 + 1] == "string" || u2[d2 + 1].type === "plain-text") && (y4 += l4(u2[d2 + 1]), u2.splice(d2 + 1, 1)), d2 > 0 && (typeof u2[d2 - 1] == "string" || u2[d2 - 1].type === "plain-text") && (y4 = l4(u2[d2 - 1]) + y4, u2.splice(d2 - 1, 1), d2--), u2[d2] = new t3.Token(
              "plain-text",
              y4,
              null,
              y4
            );
          }
          m4.content && typeof m4.content != "string" && s2(m4.content);
        }
      }, "walkTokens");
      t3.hooks.add("after-tokenize", function(u2) {
        u2.language !== "jsx" && u2.language !== "tsx" || s2(u2.tokens);
      });
    })(e3);
  }
  o$1($a, "jsx");
});
var M1, A1, L1 = C$1(() => {
  M1 = me$1(Va()), A1 = M1.default;
});
var z1 = H$1((py, I1) => {
  I1.exports = ja;
  ja.displayName = "markdown";
  ja.aliases = ["md"];
  function ja(e3) {
    (function(t3) {
      var r3 = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
      function n3(d2) {
        return d2 = d2.replace(/<inner>/g, function() {
          return r3;
        }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + d2 + ")");
      }
      o$1(n3, "createInline");
      var a4 = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, i3 = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
        /__/g,
        function() {
          return a4;
        }
      ), c4 = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
      t3.languages.markdown = t3.languages.extend("markup", {}), t3.languages.insertBefore("markdown", "prolog", {
        "front-matter-block": {
          pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
          lookbehind: true,
          greedy: true,
          inside: {
            punctuation: /^---|---$/,
            "front-matter": {
              pattern: /\S+(?:\s+\S+)*/,
              alias: ["yaml", "language-yaml"],
              inside: t3.languages.yaml
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
            "^" + i3 + c4 + "(?:" + i3 + ")*",
            "m"
          ),
          inside: {
            "table-data-rows": {
              pattern: RegExp(
                "^(" + i3 + c4 + ")(?:" + i3 + ")*$"
              ),
              lookbehind: true,
              inside: {
                "table-data": {
                  pattern: RegExp(a4),
                  inside: t3.languages.markdown
                },
                punctuation: /\|/
              }
            },
            "table-line": {
              pattern: RegExp("^(" + i3 + ")" + c4 + "$"),
              lookbehind: true,
              inside: {
                punctuation: /\||:?-{3,}:?/
              }
            },
            "table-header-row": {
              pattern: RegExp("^" + i3 + "$"),
              inside: {
                "table-header": {
                  pattern: RegExp(a4),
                  alias: "important",
                  inside: t3.languages.markdown
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
      }), ["url", "bold", "italic", "strike"].forEach(function(d2) {
        ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(m4) {
          d2 !== m4 && (t3.languages.markdown[d2].inside.content.inside[m4] = t3.languages.markdown[m4]);
        });
      }), t3.hooks.add("after-tokenize", function(d2) {
        if (d2.language !== "markdown" && d2.language !== "md")
          return;
        function m4(v3) {
          if (!(!v3 || typeof v3 == "string"))
            for (var y4 = 0, p2 = v3.length; y4 < p2; y4++) {
              var h4 = v3[y4];
              if (h4.type !== "code") {
                m4(h4.content);
                continue;
              }
              var g4 = h4.content[1], w3 = h4.content[3];
              if (g4 && w3 && g4.type === "code-language" && w3.type === "code-block" && typeof g4.content == "string") {
                var b4 = g4.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
                b4 = (/[a-z][\w-]*/i.exec(b4) || [""])[0].toLowerCase();
                var x4 = "language-" + b4;
                w3.alias ? typeof w3.alias == "string" ? w3.alias = [w3.alias, x4] : w3.alias.push(x4) : w3.alias = [x4];
              }
            }
        }
        o$1(m4, "walkTokens"), m4(d2.tokens);
      }), t3.hooks.add("wrap", function(d2) {
        if (d2.type === "code-block") {
          for (var m4 = "", v3 = 0, y4 = d2.classes.length; v3 < y4; v3++) {
            var p2 = d2.classes[v3], h4 = /language-(.+)/.exec(p2);
            if (h4) {
              m4 = h4[1];
              break;
            }
          }
          var g4 = t3.languages[m4];
          if (g4)
            d2.content = t3.highlight(
              f2(d2.content.value),
              g4,
              m4
            );
          else if (m4 && m4 !== "none" && t3.plugins.autoloader) {
            var w3 = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(Math.random() * 1e16);
            d2.attributes.id = w3, t3.plugins.autoloader.loadLanguages(m4, function() {
              var b4 = document.getElementById(w3);
              b4 && (b4.innerHTML = t3.highlight(
                b4.textContent,
                t3.languages[m4],
                m4
              ));
            });
          }
        }
      });
      var l4 = RegExp(t3.languages.markup.tag.pattern.source, "gi"), s2 = {
        amp: "&",
        lt: "<",
        gt: ">",
        quot: '"'
      }, u2 = String.fromCodePoint || String.fromCharCode;
      function f2(d2) {
        var m4 = d2.replace(l4, "");
        return m4 = m4.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(v3, y4) {
          if (y4 = y4.toLowerCase(), y4[0] === "#") {
            var p2;
            return y4[1] === "x" ? p2 = parseInt(y4.slice(2), 16) : p2 = Number(y4.slice(1)), u2(p2);
          } else {
            var h4 = s2[y4];
            return h4 || v3;
          }
        }), m4;
      }
      o$1(f2, "textContent"), t3.languages.md = t3.languages.markdown;
    })(e3);
  }
  o$1(ja, "markdown");
});
var T1, H1, P1 = C$1(() => {
  T1 = me$1(z1()), H1 = T1.default;
});
var k1, O1, B1 = C$1(() => {
  k1 = me$1(za()), O1 = k1.default;
});
var Ua = H$1((vy, N1) => {
  N1.exports = Wa;
  Wa.displayName = "typescript";
  Wa.aliases = ["ts"];
  function Wa(e3) {
    (function(t3) {
      t3.languages.typescript = t3.languages.extend("javascript", {
        "class-name": {
          pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
          lookbehind: true,
          greedy: true,
          inside: null
          // see below
        },
        builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
      }), t3.languages.typescript.keyword.push(
        /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
        // keywords that have to be followed by an identifier
        /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
        // This is for `import type *, {}`
        /\btype\b(?=\s*(?:[\{*]|$))/
      ), delete t3.languages.typescript.parameter, delete t3.languages.typescript["literal-property"];
      var r3 = t3.languages.extend("typescript", {});
      delete r3["class-name"], t3.languages.typescript["class-name"].inside = r3, t3.languages.insertBefore("typescript", "function", {
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
              inside: r3
            }
          }
        }
      }), t3.languages.ts = t3.languages.typescript;
    })(e3);
  }
  o$1(Wa, "typescript");
});
var D1 = H$1((by, F1) => {
  var Em = Va(), Sm = Ua();
  F1.exports = qa;
  qa.displayName = "tsx";
  qa.aliases = [];
  function qa(e3) {
    e3.register(Em), e3.register(Sm), function(t3) {
      var r3 = t3.util.clone(t3.languages.typescript);
      t3.languages.tsx = t3.languages.extend("jsx", r3), delete t3.languages.tsx.parameter, delete t3.languages.tsx["literal-property"];
      var n3 = t3.languages.tsx.tag;
      n3.pattern = RegExp(
        /(^|[^\w$]|(?=<\/))/.source + "(?:" + n3.pattern.source + ")",
        n3.pattern.flags
      ), n3.lookbehind = true;
    }(e3);
  }
  o$1(qa, "tsx");
});
var _1, $1, V1 = C$1(() => {
  _1 = me$1(D1()), $1 = _1.default;
});
var j1, W1, U1 = C$1(() => {
  j1 = me$1(Ua()), W1 = j1.default;
});
var G1 = H$1((Ey, q1) => {
  q1.exports = Ga;
  Ga.displayName = "yaml";
  Ga.aliases = ["yml"];
  function Ga(e3) {
    (function(t3) {
      var r3 = /[*&][^\s[\]{},]+/, n3 = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, a4 = "(?:" + n3.source + "(?:[ 	]+" + r3.source + ")?|" + r3.source + "(?:[ 	]+" + n3.source + ")?)", i3 = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
        /<PLAIN>/g,
        function() {
          return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
        }
      ), c4 = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
      function l4(s2, u2) {
        u2 = (u2 || "").replace(/m/g, "") + "m";
        var f2 = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
          return a4;
        }).replace(/<<value>>/g, function() {
          return s2;
        });
        return RegExp(f2, u2);
      }
      o$1(l4, "createValuePattern"), t3.languages.yaml = {
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
              return "(?:" + i3 + "|" + c4 + ")";
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
          pattern: l4(c4),
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
        important: r3,
        punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
      }, t3.languages.yml = t3.languages.yaml;
    })(e3);
  }
  o$1(Ga, "yaml");
});
var Y1, X1, Z1 = C$1(() => {
  Y1 = me$1(G1()), X1 = Y1.default;
});
var Cm, Q1, Ya, Xa = C$1(() => {
  Cm = xr$3.div(({ theme: e3 }) => ({
    position: "absolute",
    bottom: 0,
    right: 0,
    maxWidth: "100%",
    display: "flex",
    background: e3.background.content,
    zIndex: 1
  })), Q1 = xr$3.button(
    ({ theme: e3 }) => ({
      margin: 0,
      border: "0 none",
      padding: "4px 10px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      color: e3.color.defaultText,
      background: e3.background.content,
      fontSize: 12,
      lineHeight: "16px",
      fontFamily: e3.typography.fonts.base,
      fontWeight: e3.typography.weight.bold,
      borderTop: `1px solid ${e3.appBorderColor}`,
      borderLeft: `1px solid ${e3.appBorderColor}`,
      marginLeft: -1,
      borderRadius: "4px 0 0 0",
      "&:not(:last-child)": { borderRight: `1px solid ${e3.appBorderColor}` },
      "& + *": {
        borderLeft: `1px solid ${e3.appBorderColor}`,
        borderRadius: 0
      },
      "&:focus": {
        boxShadow: `${e3.color.secondary} 0 -3px 0 0 inset`,
        outline: "0 none",
        "@media (forced-colors: active)": {
          outline: "1px solid highlight"
        }
      }
    }),
    ({ disabled: e3 }) => e3 && {
      cursor: "not-allowed",
      opacity: 0.5
    }
  );
  Q1.displayName = "ActionButton";
  Ya = /* @__PURE__ */ o$1(({ actionItems: e$1, ...t3 }) => /* @__PURE__ */ e.createElement(Cm, { ...t3 }, e$1.map(({
    title: r3,
    className: n3,
    onClick: a4,
    disabled: i3
  }, c4) => /* @__PURE__ */ e.createElement(Q1, { key: c4, className: n3, onClick: a4, disabled: !!i3 }, r3))), "ActionBar");
});
function Mm(e3, t3) {
  typeof e3 == "function" ? e3(t3) : e3 != null && (e3.current = t3);
}
function Za(...e3) {
  return (t3) => e3.forEach((r3) => Mm(r3, t3));
}
function it(...e3) {
  return reactExports.useCallback(Za(...e3), e3);
}
var Yn = C$1(() => {
  o$1(Mm, "setRef");
  o$1(Za, "composeRefs");
  o$1(it, "useComposedRefs");
});
function Im(e3) {
  return reactExports.isValidElement(e3) && e3.type === Lm;
}
function zm(e3, t3) {
  let r3 = { ...t3 };
  for (let n3 in t3) {
    let a4 = e3[n3], i3 = t3[n3];
    /^on[A-Z]/.test(n3) ? a4 && i3 ? r3[n3] = (...l4) => {
      i3(...l4), a4(...l4);
    } : a4 && (r3[n3] = a4) : n3 === "style" ? r3[n3] = { ...a4, ...i3 } : n3 === "className" && (r3[n3] = [a4, i3].filter(Boolean).join(" "));
  }
  return { ...e3, ...r3 };
}
function Tm(e3) {
  var _a2, _b2;
  let t3 = (_a2 = Object.getOwnPropertyDescriptor(e3.props, "ref")) == null ? void 0 : _a2.get, r3 = t3 && "isReactWarning" in t3 && t3.isReactWarning;
  return r3 ? e3.ref : (t3 = (_b2 = Object.getOwnPropertyDescriptor(e3, "ref")) == null ? void 0 : _b2.get, r3 = t3 && "isReactWarning" in t3 && t3.isReactWarning, r3 ? e3.props.ref : e3.props.ref || e3.ref);
}
var Qa, Ja, Lm, t5 = C$1(() => {
  Yn();
  Qa = reactExports.forwardRef((e3, t3) => {
    let { children: r3, ...n3 } = e3, a4 = reactExports.Children.toArray(r3), i3 = a4.find(Im);
    if (i3) {
      let c4 = i3.props.children, l4 = a4.map((s2) => s2 === i3 ? reactExports.Children.count(c4) > 1 ? reactExports.Children.only(null) : reactExports.isValidElement(c4) ? c4.props.children : null : s2);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Ja, { ...n3, ref: t3, children: reactExports.isValidElement(c4) ? reactExports.cloneElement(c4, void 0, l4) : null });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Ja, { ...n3, ref: t3, children: r3 });
  });
  Qa.displayName = "Slot";
  Ja = reactExports.forwardRef((e3, t3) => {
    let { children: r3, ...n3 } = e3;
    if (reactExports.isValidElement(r3)) {
      let a4 = Tm(r3);
      return reactExports.cloneElement(r3, {
        ...zm(n3, r3.props),
        // @ts-ignore
        ref: t3 ? Za(t3, a4) : a4
      });
    }
    return reactExports.Children.count(r3) > 1 ? reactExports.Children.only(null) : null;
  });
  Ja.displayName = "SlotClone";
  Lm = /* @__PURE__ */ o$1(({ children: e3 }) => /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: e3 }), "Slottable");
  o$1(Im, "isSlottable");
  o$1(zm, "mergeProps");
  o$1(Tm, "getElementRef");
});
var km, gr, n5 = C$1(() => {
  t5();
  km = [
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
  ], gr = km.reduce((e3, t3) => {
    let r3 = reactExports.forwardRef((n3, a4) => {
      let { asChild: i3, ...c4 } = n3, l4 = i3 ? Qa : t3;
      return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), /* @__PURE__ */ jsxRuntimeExports.jsx(l4, { ...c4, ref: a4 });
    });
    return r3.displayName = `Primitive.${t3}`, { ...e3, [t3]: r3 };
  }, {});
});
var an, ei = C$1(() => {
  an = (globalThis == null ? void 0 : globalThis.document) ? reactExports.useLayoutEffect : () => {
  };
});
function Om(e3, t3) {
  return reactExports.useReducer((r3, n3) => t3[r3][n3] ?? r3, e3);
}
function Bm(e3) {
  let [t3, r3] = reactExports.useState(), n3 = reactExports.useRef({}), a4 = reactExports.useRef(e3), i3 = reactExports.useRef("none"), c4 = e3 ? "mounted" : "unmounted", [l4, s2] = Om(c4, {
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
    let u2 = Xn(n3.current);
    i3.current = l4 === "mounted" ? u2 : "none";
  }, [l4]), an(() => {
    let u2 = n3.current, f2 = a4.current;
    if (f2 !== e3) {
      let m4 = i3.current, v3 = Xn(u2);
      e3 ? s2("MOUNT") : v3 === "none" || (u2 == null ? void 0 : u2.display) === "none" ? s2("UNMOUNT") : s2(f2 && m4 !== v3 ? "ANIMATION_OUT" : "UNMOUNT"), a4.current = e3;
    }
  }, [e3, s2]), an(() => {
    if (t3) {
      let u2 = /* @__PURE__ */ o$1((d2) => {
        let v3 = Xn(n3.current).includes(d2.animationName);
        d2.target === t3 && v3 && reactDomExports.flushSync(() => s2("ANIMATION_END"));
      }, "handleAnimationEnd"), f2 = /* @__PURE__ */ o$1((d2) => {
        d2.target === t3 && (i3.current = Xn(n3.current));
      }, "handleAnimationStart");
      return t3.addEventListener("animationstart", f2), t3.addEventListener("animationcancel", u2), t3.addEventListener("animationend", u2), () => {
        t3.removeEventListener("animationstart", f2), t3.removeEventListener("animationcancel", u2), t3.removeEventListener("animationend", u2);
      };
    } else
      s2("ANIMATION_END");
  }, [t3, s2]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l4),
    ref: reactExports.useCallback((u2) => {
      u2 && (n3.current = getComputedStyle(u2)), r3(u2);
    }, [])
  };
}
function Xn(e3) {
  return (e3 == null ? void 0 : e3.animationName) || "none";
}
function Nm(e3) {
  var _a2, _b2;
  let t3 = (_a2 = Object.getOwnPropertyDescriptor(e3.props, "ref")) == null ? void 0 : _a2.get, r3 = t3 && "isReactWarning" in t3 && t3.isReactWarning;
  return r3 ? e3.ref : (t3 = (_b2 = Object.getOwnPropertyDescriptor(e3, "ref")) == null ? void 0 : _b2.get, r3 = t3 && "isReactWarning" in t3 && t3.isReactWarning, r3 ? e3.props.ref : e3.props.ref || e3.ref);
}
var vr, l5 = C$1(() => {
  "use client";
  Yn();
  ei();
  o$1(Om, "useStateMachine");
  vr = /* @__PURE__ */ o$1((e3) => {
    let { present: t3, children: r3 } = e3, n3 = Bm(t3), a4 = typeof r3 == "function" ? r3({ present: n3.isPresent }) : reactExports.Children.only(r3), i3 = it(n3.ref, Nm(a4));
    return typeof r3 == "function" || n3.isPresent ? reactExports.cloneElement(a4, { ref: i3 }) : null;
  }, "Presence");
  vr.displayName = "Presence";
  o$1(Bm, "usePresence");
  o$1(Xn, "getAnimationName");
  o$1(Nm, "getElementRef");
});
function c5(e3, t3 = []) {
  let r3 = [];
  function n3(i3, c4) {
    let l4 = reactExports.createContext(c4), s2 = r3.length;
    r3 = [...r3, c4];
    function u2(d2) {
      let { scope: m4, children: v3, ...y4 } = d2, p2 = (m4 == null ? void 0 : m4[e3][s2]) || l4, h4 = reactExports.useMemo(() => y4, Object.values(y4));
      return /* @__PURE__ */ jsxRuntimeExports.jsx(p2.Provider, { value: h4, children: v3 });
    }
    o$1(u2, "Provider");
    function f2(d2, m4) {
      let v3 = (m4 == null ? void 0 : m4[e3][s2]) || l4, y4 = reactExports.useContext(v3);
      if (y4) return y4;
      if (c4 !== void 0) return c4;
      throw new Error(`\`${d2}\` must be used within \`${i3}\``);
    }
    return o$1(f2, "useContext2"), u2.displayName = i3 + "Provider", [u2, f2];
  }
  o$1(n3, "createContext3");
  let a4 = /* @__PURE__ */ o$1(() => {
    let i3 = r3.map((c4) => reactExports.createContext(c4));
    return /* @__PURE__ */ o$1(function(l4) {
      let s2 = (l4 == null ? void 0 : l4[e3]) || i3;
      return reactExports.useMemo(
        () => ({ [`__scope${e3}`]: { ...l4, [e3]: s2 } }),
        [l4, s2]
      );
    }, "useScope");
  }, "createScope");
  return a4.scopeName = e3, [n3, Dm(a4, ...t3)];
}
function Dm(...e3) {
  let t3 = e3[0];
  if (e3.length === 1) return t3;
  let r3 = /* @__PURE__ */ o$1(() => {
    let n3 = e3.map((a4) => ({
      useScope: a4(),
      scopeName: a4.scopeName
    }));
    return /* @__PURE__ */ o$1(function(i3) {
      let c4 = n3.reduce((l4, { useScope: s2, scopeName: u2 }) => {
        let d2 = s2(i3)[`__scope${u2}`];
        return { ...l4, ...d2 };
      }, {});
      return reactExports.useMemo(() => ({ [`__scope${t3.scopeName}`]: c4 }), [c4]);
    }, "useComposedScopes");
  }, "createScope");
  return r3.scopeName = t3.scopeName, r3;
}
var s5 = C$1(() => {
  o$1(c5, "createContextScope");
  o$1(Dm, "composeContextScopes");
});
function xt2(e3) {
  let t3 = reactExports.useRef(e3);
  return reactExports.useEffect(() => {
    t3.current = e3;
  }), reactExports.useMemo(() => (...r3) => {
    var _a2;
    return (_a2 = t3.current) == null ? void 0 : _a2.call(t3, ...r3);
  }, []);
}
var u5 = C$1(() => {
  o$1(xt2, "useCallbackRef");
});
function f5(e3) {
  let t3 = reactExports.useContext(_m);
  return e3 || t3 || "ltr";
}
var _m, d5 = C$1(() => {
  _m = reactExports.createContext(void 0);
  o$1(f5, "useDirection");
});
function p5(e3, [t3, r3]) {
  return Math.min(r3, Math.max(t3, e3));
}
var m5 = C$1(() => {
  o$1(p5, "clamp");
});
function Et(e3, t3, { checkForDefaultPrevented: r3 = true } = {}) {
  return /* @__PURE__ */ o$1(function(a4) {
    if (e3 == null ? void 0 : e3(a4), r3 === false || !a4.defaultPrevented)
      return t3 == null ? void 0 : t3(a4);
  }, "handleEvent");
}
var h5 = C$1(() => {
  o$1(Et, "composeEventHandlers");
});
function $m(e3, t3) {
  return reactExports.useReducer((r3, n3) => t3[r3][n3] ?? r3, e3);
}
function Jn(e3) {
  return e3 ? parseInt(e3, 10) : 0;
}
function L5(e3, t3) {
  let r3 = e3 / t3;
  return isNaN(r3) ? 0 : r3;
}
function Qn(e3) {
  let t3 = L5(e3.viewport, e3.content), r3 = e3.scrollbar.paddingStart + e3.scrollbar.paddingEnd, n3 = (e3.scrollbar.size - r3) * t3;
  return Math.max(n3, 18);
}
function Jm(e3, t3, r3, n3 = "ltr") {
  let a4 = Qn(r3), i3 = a4 / 2, c4 = t3 || i3, l4 = a4 - c4, s2 = r3.scrollbar.paddingStart + c4, u2 = r3.scrollbar.size - r3.scrollbar.paddingEnd - l4, f2 = r3.content - r3.viewport, d2 = n3 === "ltr" ? [0, f2] : [f2 * -1, 0];
  return I5([s2, u2], d2)(e3);
}
function g5(e3, t3, r3 = "ltr") {
  let n3 = Qn(t3), a4 = t3.scrollbar.paddingStart + t3.scrollbar.paddingEnd, i3 = t3.scrollbar.size - a4, c4 = t3.content - t3.viewport, l4 = i3 - n3, s2 = r3 === "ltr" ? [0, c4] : [c4 * -1, 0], u2 = p5(e3, s2);
  return I5([0, c4], [0, l4])(u2);
}
function I5(e3, t3) {
  return (r3) => {
    if (e3[0] === e3[1] || t3[0] === t3[1]) return t3[0];
    let n3 = (t3[1] - t3[0]) / (e3[1] - e3[0]);
    return t3[0] + n3 * (r3 - e3[0]);
  };
}
function z5(e3, t3) {
  return e3 > 0 && e3 < t3;
}
function eo(e3, t3) {
  let r3 = xt2(e3), n3 = reactExports.useRef(0);
  return reactExports.useEffect(() => () => window.clearTimeout(n3.current), []), reactExports.useCallback(() => {
    window.clearTimeout(n3.current), n3.current = window.setTimeout(r3, t3);
  }, [r3, t3]);
}
function br(e3, t3) {
  let r3 = xt2(t3);
  an(() => {
    let n3 = 0;
    if (e3) {
      let a4 = new ResizeObserver(() => {
        cancelAnimationFrame(n3), n3 = window.requestAnimationFrame(r3);
      });
      return a4.observe(e3), () => {
        window.cancelAnimationFrame(n3), a4.unobserve(e3);
      };
    }
  }, [e3, r3]);
}
function eh(e3, t3) {
  let { asChild: r3, children: n3 } = e3;
  if (!r3) return typeof t3 == "function" ? t3(n3) : t3;
  let a4 = reactExports.Children.only(n3);
  return reactExports.cloneElement(a4, {
    children: typeof t3 == "function" ? t3(a4.props.children) : t3
  });
}
var ti, w5, mR, Wm, _e$1, b5, y5, R5, rt, x5, Um, qm, E5, ri, Gm, Ym, Xm, S5, C5, Kn, M5, Zm, ni, A5, Km, Qm, T5, H5, P5, k5, O5, B5 = C$1(() => {
  "use client";
  n5();
  l5();
  s5();
  Yn();
  u5();
  d5();
  ei();
  m5();
  h5();
  o$1($m, "useStateMachine");
  ti = "ScrollArea", [w5, mR] = c5(ti), [Wm, _e$1] = w5(ti), b5 = reactExports.forwardRef(
    (e3, t3) => {
      let {
        __scopeScrollArea: r3,
        type: n3 = "hover",
        dir: a4,
        scrollHideDelay: i3 = 600,
        ...c4
      } = e3, [l4, s2] = reactExports.useState(null), [u2, f2] = reactExports.useState(null), [d2, m4] = reactExports.useState(null), [v3, y4] = reactExports.useState(null), [p2, h4] = reactExports.useState(
        null
      ), [g4, w3] = reactExports.useState(0), [b4, x4] = reactExports.useState(0), [E3, R4] = reactExports.useState(false), [S3, A3] = reactExports.useState(false), M3 = it(t3, (P2) => s2(P2)), L2 = f5(
        a4
      );
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        Wm,
        {
          scope: r3,
          type: n3,
          dir: L2,
          scrollHideDelay: i3,
          scrollArea: l4,
          viewport: u2,
          onViewportChange: f2,
          content: d2,
          onContentChange: m4,
          scrollbarX: v3,
          onScrollbarXChange: y4,
          scrollbarXEnabled: E3,
          onScrollbarXEnabledChange: R4,
          scrollbarY: p2,
          onScrollbarYChange: h4,
          scrollbarYEnabled: S3,
          onScrollbarYEnabledChange: A3,
          onCornerWidthChange: w3,
          onCornerHeightChange: x4,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            gr.div,
            {
              dir: L2,
              ...c4,
              ref: M3,
              style: {
                position: "relative",
                // Pass corner sizes as CSS vars to reduce re-renders of context consumers
                "--radix-scroll-area-corner-width": g4 + "px",
                "--radix-scroll-area-corner-height": b4 + "px",
                ...e3.style
              }
            }
          )
        }
      );
    }
  );
  b5.displayName = ti;
  y5 = "ScrollAreaViewport", R5 = reactExports.forwardRef(
    (e3, t3) => {
      let { __scopeScrollArea: r3, children: n3, asChild: a4, nonce: i3, ...c4 } = e3, l4 = _e$1(y5, r3), s2 = reactExports.useRef(null), u2 = it(t3, s2, l4.onViewportChange);
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
            nonce: i3
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          gr.div,
          {
            "data-radix-scroll-area-viewport": "",
            ...c4,
            asChild: a4,
            ref: u2,
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
              ...e3.style
            },
            children: eh({ asChild: a4, children: n3 }, (f2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                "data-radix-scroll-area-content": "",
                ref: l4.onContentChange,
                style: { minWidth: l4.scrollbarXEnabled ? "fit-content" : void 0 },
                children: f2
              }
            ))
          }
        )
      ] });
    }
  );
  R5.displayName = y5;
  rt = "ScrollAreaScrollbar", x5 = reactExports.forwardRef(
    (e3, t3) => {
      let { forceMount: r3, ...n3 } = e3, a4 = _e$1(rt, e3.__scopeScrollArea), { onScrollbarXEnabledChange: i3, onScrollbarYEnabledChange: c4 } = a4, l4 = e3.orientation === "horizontal";
      return reactExports.useEffect(() => (l4 ? i3(true) : c4(true), () => {
        l4 ? i3(false) : c4(false);
      }), [l4, i3, c4]), a4.type === "hover" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Um, { ...n3, ref: t3, forceMount: r3 }) : a4.type === "scroll" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        qm,
        { ...n3, ref: t3, forceMount: r3 }
      ) : a4.type === "auto" ? /* @__PURE__ */ jsxRuntimeExports.jsx(E5, { ...n3, ref: t3, forceMount: r3 }) : a4.type === "always" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ri, { ...n3, ref: t3 }) : null;
    }
  );
  x5.displayName = rt;
  Um = reactExports.forwardRef((e3, t3) => {
    let { forceMount: r3, ...n3 } = e3, a4 = _e$1(rt, e3.__scopeScrollArea), [i3, c4] = reactExports.useState(false);
    return reactExports.useEffect(() => {
      let l4 = a4.scrollArea, s2 = 0;
      if (l4) {
        let u2 = /* @__PURE__ */ o$1(() => {
          window.clearTimeout(s2), c4(true);
        }, "handlePointerEnter"), f2 = /* @__PURE__ */ o$1(() => {
          s2 = window.setTimeout(() => c4(false), a4.scrollHideDelay);
        }, "handlePointerLeave");
        return l4.addEventListener("pointerenter", u2), l4.addEventListener("pointerleave", f2), () => {
          window.clearTimeout(s2), l4.removeEventListener("pointerenter", u2), l4.removeEventListener("pointerleave", f2);
        };
      }
    }, [a4.scrollArea, a4.scrollHideDelay]), /* @__PURE__ */ jsxRuntimeExports.jsx(vr, { present: r3 || i3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      E5,
      {
        "data-state": i3 ? "visible" : "hidden",
        ...n3,
        ref: t3
      }
    ) });
  }), qm = reactExports.forwardRef((e3, t3) => {
    let { forceMount: r3, ...n3 } = e3, a4 = _e$1(rt, e3.__scopeScrollArea), i3 = e3.orientation === "horizontal", c4 = eo(() => s2("SCROLL_END"), 100), [l4, s2] = $m("hidden", {
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
        let u2 = window.setTimeout(() => s2("HIDE"), a4.scrollHideDelay);
        return () => window.clearTimeout(u2);
      }
    }, [l4, a4.scrollHideDelay, s2]), reactExports.useEffect(() => {
      let u2 = a4.viewport, f2 = i3 ? "scrollLeft" : "scrollTop";
      if (u2) {
        let d2 = u2[f2], m4 = /* @__PURE__ */ o$1(() => {
          let v3 = u2[f2];
          d2 !== v3 && (s2("SCROLL"), c4()), d2 = v3;
        }, "handleScroll");
        return u2.addEventListener("scroll", m4), () => u2.removeEventListener("scroll", m4);
      }
    }, [a4.viewport, i3, s2, c4]), /* @__PURE__ */ jsxRuntimeExports.jsx(vr, { present: r3 || l4 !== "hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ri,
      {
        "data-state": l4 === "hidden" ? "hidden" : "visible",
        ...n3,
        ref: t3,
        onPointerEnter: Et(e3.onPointerEnter, () => s2("POINTER_ENTER")),
        onPointerLeave: Et(e3.onPointerLeave, () => s2("POINTER_LEAVE"))
      }
    ) });
  }), E5 = reactExports.forwardRef((e3, t3) => {
    let r3 = _e$1(rt, e3.__scopeScrollArea), { forceMount: n3, ...a4 } = e3, [i3, c4] = reactExports.useState(false), l4 = e3.orientation === "horizontal", s2 = eo(() => {
      if (r3.viewport) {
        let u2 = r3.viewport.offsetWidth < r3.viewport.scrollWidth, f2 = r3.viewport.offsetHeight < r3.viewport.scrollHeight;
        c4(l4 ? u2 : f2);
      }
    }, 10);
    return br(r3.viewport, s2), br(r3.content, s2), /* @__PURE__ */ jsxRuntimeExports.jsx(vr, { present: n3 || i3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ri,
      {
        "data-state": i3 ? "visible" : "hidden",
        ...a4,
        ref: t3
      }
    ) });
  }), ri = reactExports.forwardRef((e3, t3) => {
    let { orientation: r3 = "vertical", ...n3 } = e3, a4 = _e$1(rt, e3.__scopeScrollArea), i3 = reactExports.useRef(null), c4 = reactExports.useRef(0), [l4, s2] = reactExports.useState(
      {
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
      }
    ), u2 = L5(l4.viewport, l4.content), f2 = {
      ...n3,
      sizes: l4,
      onSizesChange: s2,
      hasThumb: u2 > 0 && u2 < 1,
      onThumbChange: /* @__PURE__ */ o$1((m4) => i3.current = m4, "onThumbChange"),
      onThumbPointerUp: /* @__PURE__ */ o$1(() => c4.current = 0, "onThumbPointerUp"),
      onThumbPointerDown: /* @__PURE__ */ o$1((m4) => c4.current = m4, "onThumbPointerDown")
    };
    function d2(m4, v3) {
      return Jm(m4, c4.current, l4, v3);
    }
    return o$1(d2, "getScrollPosition"), r3 === "horizontal" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Gm,
      {
        ...f2,
        ref: t3,
        onThumbPositionChange: /* @__PURE__ */ o$1(() => {
          if (a4.viewport && i3.current) {
            let m4 = a4.viewport.scrollLeft, v3 = g5(m4, l4, a4.dir);
            i3.current.style.transform = `translate3d(${v3}px, 0, 0)`;
          }
        }, "onThumbPositionChange"),
        onWheelScroll: /* @__PURE__ */ o$1((m4) => {
          a4.viewport && (a4.viewport.scrollLeft = m4);
        }, "onWheelScroll"),
        onDragScroll: /* @__PURE__ */ o$1((m4) => {
          a4.viewport && (a4.viewport.scrollLeft = d2(m4, a4.dir));
        }, "onDragScroll")
      }
    ) : r3 === "vertical" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      Ym,
      {
        ...f2,
        ref: t3,
        onThumbPositionChange: /* @__PURE__ */ o$1(() => {
          if (a4.viewport && i3.current) {
            let m4 = a4.viewport.scrollTop, v3 = g5(m4, l4);
            i3.current.style.transform = `translate3d(0, ${v3}px, 0)`;
          }
        }, "onThumbPositionChange"),
        onWheelScroll: /* @__PURE__ */ o$1((m4) => {
          a4.viewport && (a4.viewport.scrollTop = m4);
        }, "onWheelScroll"),
        onDragScroll: /* @__PURE__ */ o$1((m4) => {
          a4.viewport && (a4.viewport.scrollTop = d2(m4));
        }, "onDragScroll")
      }
    ) : null;
  }), Gm = reactExports.forwardRef((e3, t3) => {
    let { sizes: r3, onSizesChange: n3, ...a4 } = e3, i3 = _e$1(rt, e3.__scopeScrollArea), [c4, l4] = reactExports.useState(), s2 = reactExports.useRef(null), u2 = it(t3, s2, i3.onScrollbarXChange);
    return reactExports.useEffect(() => {
      s2.current && l4(getComputedStyle(s2.current));
    }, [s2]), /* @__PURE__ */ jsxRuntimeExports.jsx(
      C5,
      {
        "data-orientation": "horizontal",
        ...a4,
        ref: u2,
        sizes: r3,
        style: {
          bottom: 0,
          left: i3.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
          right: i3.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
          "--radix-scroll-area-thumb-width": Qn(r3) + "px",
          ...e3.style
        },
        onThumbPointerDown: /* @__PURE__ */ o$1((f2) => e3.onThumbPointerDown(f2.x), "onThumbPointerDown"),
        onDragScroll: /* @__PURE__ */ o$1((f2) => e3.onDragScroll(f2.x), "onDragScroll"),
        onWheelScroll: /* @__PURE__ */ o$1((f2, d2) => {
          if (i3.viewport) {
            let m4 = i3.viewport.scrollLeft + f2.deltaX;
            e3.onWheelScroll(m4), z5(m4, d2) && f2.preventDefault();
          }
        }, "onWheelScroll"),
        onResize: /* @__PURE__ */ o$1(() => {
          s2.current && i3.viewport && c4 && n3({
            content: i3.viewport.scrollWidth,
            viewport: i3.viewport.offsetWidth,
            scrollbar: {
              size: s2.current.clientWidth,
              paddingStart: Jn(c4.paddingLeft),
              paddingEnd: Jn(c4.paddingRight)
            }
          });
        }, "onResize")
      }
    );
  }), Ym = reactExports.forwardRef((e3, t3) => {
    let { sizes: r3, onSizesChange: n3, ...a4 } = e3, i3 = _e$1(rt, e3.__scopeScrollArea), [c4, l4] = reactExports.useState(), s2 = reactExports.useRef(null), u2 = it(t3, s2, i3.onScrollbarYChange);
    return reactExports.useEffect(() => {
      s2.current && l4(getComputedStyle(s2.current));
    }, [s2]), /* @__PURE__ */ jsxRuntimeExports.jsx(
      C5,
      {
        "data-orientation": "vertical",
        ...a4,
        ref: u2,
        sizes: r3,
        style: {
          top: 0,
          right: i3.dir === "ltr" ? 0 : void 0,
          left: i3.dir === "rtl" ? 0 : void 0,
          bottom: "var(--radix-scroll-area-corner-height)",
          "--radix-scroll-area-thumb-height": Qn(r3) + "px",
          ...e3.style
        },
        onThumbPointerDown: /* @__PURE__ */ o$1((f2) => e3.onThumbPointerDown(f2.y), "onThumbPointerDown"),
        onDragScroll: /* @__PURE__ */ o$1((f2) => e3.onDragScroll(f2.y), "onDragScroll"),
        onWheelScroll: /* @__PURE__ */ o$1((f2, d2) => {
          if (i3.viewport) {
            let m4 = i3.viewport.scrollTop + f2.deltaY;
            e3.onWheelScroll(m4), z5(m4, d2) && f2.preventDefault();
          }
        }, "onWheelScroll"),
        onResize: /* @__PURE__ */ o$1(() => {
          s2.current && i3.viewport && c4 && n3({
            content: i3.viewport.scrollHeight,
            viewport: i3.viewport.offsetHeight,
            scrollbar: {
              size: s2.current.clientHeight,
              paddingStart: Jn(c4.paddingTop),
              paddingEnd: Jn(c4.paddingBottom)
            }
          });
        }, "onResize")
      }
    );
  }), [Xm, S5] = w5(rt), C5 = reactExports.forwardRef((e3, t3) => {
    let {
      __scopeScrollArea: r3,
      sizes: n3,
      hasThumb: a4,
      onThumbChange: i3,
      onThumbPointerUp: c4,
      onThumbPointerDown: l4,
      onThumbPositionChange: s2,
      onDragScroll: u2,
      onWheelScroll: f2,
      onResize: d2,
      ...m4
    } = e3, v3 = _e$1(rt, r3), [y4, p2] = reactExports.useState(null), h4 = it(t3, (M3) => p2(M3)), g4 = reactExports.useRef(null), w3 = reactExports.useRef(""), b4 = v3.viewport, x4 = n3.content - n3.viewport, E3 = xt2(f2), R4 = xt2(s2), S3 = eo(d2, 10);
    function A3(M3) {
      if (g4.current) {
        let L2 = M3.clientX - g4.current.left, P2 = M3.clientY - g4.current.top;
        u2({ x: L2, y: P2 });
      }
    }
    return o$1(A3, "handleDragScroll"), reactExports.useEffect(() => {
      let M3 = /* @__PURE__ */ o$1((L2) => {
        let P2 = L2.target;
        (y4 == null ? void 0 : y4.contains(P2)) && E3(L2, x4);
      }, "handleWheel");
      return document.addEventListener("wheel", M3, { passive: false }), () => document.removeEventListener("wheel", M3, { passive: false });
    }, [b4, y4, x4, E3]), reactExports.useEffect(R4, [n3, R4]), br(y4, S3), br(v3.content, S3), /* @__PURE__ */ jsxRuntimeExports.jsx(
      Xm,
      {
        scope: r3,
        scrollbar: y4,
        hasThumb: a4,
        onThumbChange: xt2(i3),
        onThumbPointerUp: xt2(c4),
        onThumbPositionChange: R4,
        onThumbPointerDown: xt2(l4),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          gr.div,
          {
            ...m4,
            ref: h4,
            style: { position: "absolute", ...m4.style },
            onPointerDown: Et(e3.onPointerDown, (M3) => {
              M3.button === 0 && (M3.target.setPointerCapture(M3.pointerId), g4.current = y4.getBoundingClientRect(), w3.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", v3.viewport && (v3.viewport.style.scrollBehavior = "auto"), A3(M3));
            }),
            onPointerMove: Et(e3.onPointerMove, A3),
            onPointerUp: Et(e3.onPointerUp, (M3) => {
              let L2 = M3.target;
              L2.hasPointerCapture(M3.pointerId) && L2.releasePointerCapture(M3.pointerId), document.body.style.webkitUserSelect = w3.current, v3.viewport && (v3.viewport.style.scrollBehavior = ""), g4.current = null;
            })
          }
        )
      }
    );
  }), Kn = "ScrollAreaThumb", M5 = reactExports.forwardRef(
    (e3, t3) => {
      let { forceMount: r3, ...n3 } = e3, a4 = S5(Kn, e3.__scopeScrollArea);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(vr, { present: r3 || a4.hasThumb, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zm, { ref: t3, ...n3 }) });
    }
  ), Zm = reactExports.forwardRef(
    (e3, t3) => {
      let { __scopeScrollArea: r3, style: n3, ...a4 } = e3, i3 = _e$1(Kn, r3), c4 = S5(Kn, r3), { onThumbPositionChange: l4 } = c4, s2 = it(
        t3,
        (d2) => c4.onThumbChange(d2)
      ), u2 = reactExports.useRef(), f2 = eo(() => {
        u2.current && (u2.current(), u2.current = void 0);
      }, 100);
      return reactExports.useEffect(() => {
        let d2 = i3.viewport;
        if (d2) {
          let m4 = /* @__PURE__ */ o$1(() => {
            if (f2(), !u2.current) {
              let v3 = Qm(d2, l4);
              u2.current = v3, l4();
            }
          }, "handleScroll");
          return l4(), d2.addEventListener("scroll", m4), () => d2.removeEventListener("scroll", m4);
        }
      }, [i3.viewport, f2, l4]), /* @__PURE__ */ jsxRuntimeExports.jsx(
        gr.div,
        {
          "data-state": c4.hasThumb ? "visible" : "hidden",
          ...a4,
          ref: s2,
          style: {
            width: "var(--radix-scroll-area-thumb-width)",
            height: "var(--radix-scroll-area-thumb-height)",
            ...n3
          },
          onPointerDownCapture: Et(e3.onPointerDownCapture, (d2) => {
            let v3 = d2.target.getBoundingClientRect(), y4 = d2.clientX - v3.left, p2 = d2.clientY - v3.top;
            c4.onThumbPointerDown({ x: y4, y: p2 });
          }),
          onPointerUp: Et(e3.onPointerUp, c4.onThumbPointerUp)
        }
      );
    }
  );
  M5.displayName = Kn;
  ni = "ScrollAreaCorner", A5 = reactExports.forwardRef(
    (e3, t3) => {
      let r3 = _e$1(ni, e3.__scopeScrollArea), n3 = !!(r3.scrollbarX && r3.scrollbarY);
      return r3.type !== "scroll" && n3 ? /* @__PURE__ */ jsxRuntimeExports.jsx(Km, { ...e3, ref: t3 }) : null;
    }
  );
  A5.displayName = ni;
  Km = reactExports.forwardRef((e3, t3) => {
    let { __scopeScrollArea: r3, ...n3 } = e3, a4 = _e$1(ni, r3), [i3, c4] = reactExports.useState(0), [l4, s2] = reactExports.useState(0), u2 = !!(i3 && l4);
    return br(a4.scrollbarX, () => {
      var _a2;
      let f2 = ((_a2 = a4.scrollbarX) == null ? void 0 : _a2.offsetHeight) || 0;
      a4.onCornerHeightChange(f2), s2(f2);
    }), br(a4.scrollbarY, () => {
      var _a2;
      let f2 = ((_a2 = a4.scrollbarY) == null ? void 0 : _a2.offsetWidth) || 0;
      a4.onCornerWidthChange(f2), c4(f2);
    }), u2 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      gr.div,
      {
        ...n3,
        ref: t3,
        style: {
          width: i3,
          height: l4,
          position: "absolute",
          right: a4.dir === "ltr" ? 0 : void 0,
          left: a4.dir === "rtl" ? 0 : void 0,
          bottom: 0,
          ...e3.style
        }
      }
    ) : null;
  });
  o$1(Jn, "toInt");
  o$1(L5, "getThumbRatio");
  o$1(Qn, "getThumbSize");
  o$1(Jm, "getScrollPositionFromPointer");
  o$1(g5, "getThumbOffsetFromScroll");
  o$1(I5, "linearScale");
  o$1(z5, "isScrollingWithinScrollbarBounds");
  Qm = /* @__PURE__ */ o$1((e3, t3 = () => {
  }) => {
    let r3 = { left: e3.scrollLeft, top: e3.scrollTop }, n3 = 0;
    return (/* @__PURE__ */ o$1(function a4() {
      let i3 = { left: e3.scrollLeft, top: e3.scrollTop }, c4 = r3.left !== i3.left, l4 = r3.top !== i3.top;
      (c4 || l4) && t3(), r3 = i3, n3 = window.requestAnimationFrame(a4);
    }, "loop"))(), () => window.cancelAnimationFrame(n3);
  }, "addUnlinkedScrollListener");
  o$1(eo, "useDebounceCallback");
  o$1(br, "useResizeObserver");
  o$1(eh, "getSubtree");
  T5 = b5, H5 = R5, P5 = x5, k5 = M5, O5 = A5;
});
var nh, oh, N5, F5, yr, ro = C$1(() => {
  B5();
  nh = xr$3(T5)(
    ({ scrollbarsize: e3, offset: t3 }) => ({
      width: "100%",
      height: "100%",
      overflow: "hidden",
      "--scrollbar-size": `${e3 + t3}px`,
      "--radix-scroll-area-thumb-width": `${e3}px`
    })
  ), oh = xr$3(H5)({
    width: "100%",
    height: "100%"
  }), N5 = xr$3(P5)(({ offset: e3, horizontal: t3, vertical: r3 }) => ({
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
      paddingRight: e3,
      marginTop: e3,
      marginBottom: t3 === "true" && r3 === "true" ? 0 : e3
    },
    '&[data-orientation="horizontal"]': {
      flexDirection: "column",
      height: "var(--scrollbar-size)",
      paddingBottom: e3,
      marginLeft: e3,
      marginRight: t3 === "true" && r3 === "true" ? 0 : e3
    }
  })), F5 = xr$3(k5)(({ theme: e3 }) => ({
    flex: 1,
    background: e3.textMutedColor,
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
  })), yr = reactExports.forwardRef(
    ({ children: e$1, horizontal: t3 = false, vertical: r3 = false, offset: n3 = 2, scrollbarSize: a4 = 6, className: i3 }, c4) => /* @__PURE__ */ e.createElement(
      nh,
      { scrollbarsize: a4, offset: n3, className: i3 },
      /* @__PURE__ */ e.createElement(oh, { ref: c4 }, e$1),
      t3 && /* @__PURE__ */ e.createElement(
        N5,
        {
          orientation: "horizontal",
          offset: n3,
          horizontal: t3.toString(),
          vertical: r3.toString()
        },
        /* @__PURE__ */ e.createElement(F5, null)
      ),
      r3 && /* @__PURE__ */ e.createElement(
        N5,
        {
          orientation: "vertical",
          offset: n3,
          horizontal: t3.toString(),
          vertical: r3.toString()
        },
        /* @__PURE__ */ e.createElement(F5, null)
      ),
      t3 && r3 && /* @__PURE__ */ e.createElement(O5, null)
    )
  );
  yr.displayName = "ScrollArea";
});
var ai = {};
Zr(ai, {
  SyntaxHighlighter: () => sn,
  createCopyToClipboardFunction: () => oi,
  default: () => wh,
  supportedLanguages: () => $5
});
const { logger: lh } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
const { global: ch } = __STORYBOOK_MODULE_GLOBAL__;
function oi() {
  var _a2;
  return ((_a2 = no.navigator) == null ? void 0 : _a2.clipboard) ? async (e3) => {
    var _a3;
    try {
      await ((_a3 = no.top) == null ? void 0 : _a3.navigator.clipboard.writeText(e3));
    } catch {
      await no.navigator.clipboard.writeText(e3);
    }
  } : async (e3) => {
    let t3 = ln.createElement("TEXTAREA"), r3 = ln.activeElement;
    t3.value = e3, ln.body.appendChild(t3), t3.select(), ln.execCommand("copy"), ln.body.removeChild(t3), r3.focus();
  };
}
var _5, ln, no, $5, sh, uh, fh, dh, ph, mh, hh, V5, gh, vh, sn, wh, un = C$1(() => {
  _5 = me$1(Qr(), 1);
  t1();
  i1();
  s1();
  m1();
  b1();
  S1();
  L1();
  P1();
  B1();
  V1();
  U1();
  Z1();
  e1();
  Xa();
  ro();
  ({ document: ln, window: no } = ch), $5 = {
    jsextra: w1,
    jsx: A1,
    json: E1,
    yml: X1,
    md: H1,
    bash: a1,
    css: c1,
    html: O1,
    tsx: $1,
    typescript: W1,
    graphql: p1
  };
  Object.entries($5).forEach(([e3, t3]) => {
    Gn.registerLanguage(e3, t3);
  });
  sh = (0, _5.default)(2)(
    (e3) => Object.entries(e3.code || {}).reduce((t3, [r3, n3]) => ({ ...t3, [`* .${r3}`]: n3 }), {})
  ), uh = oi();
  o$1(oi, "createCopyToClipboardFunction");
  fh = xr$3.div(
    ({ theme: e3 }) => ({
      position: "relative",
      overflow: "hidden",
      color: e3.color.defaultText
    }),
    ({ theme: e3, bordered: t3 }) => t3 ? {
      border: `1px solid ${e3.appBorderColor}`,
      borderRadius: e3.borderRadius,
      background: e3.background.content
    } : {},
    ({ showLineNumbers: e3 }) => e3 ? {
      // use the before pseudo element to display line numbers
      ".react-syntax-highlighter-line-number::before": {
        content: "attr(data-line-number)"
      }
    } : {}
  ), dh = /* @__PURE__ */ o$1(({ children: e$1, className: t3 }) => /* @__PURE__ */ e.createElement(
    yr,
    { horizontal: true, vertical: true, className: t3 },
    e$1
  ), "UnstyledScroller"), ph = xr$3(dh)(
    {
      position: "relative"
    },
    ({ theme: e3 }) => sh(e3)
  ), mh = xr$3.pre(({ theme: e3, padded: t3 }) => ({
    display: "flex",
    justifyContent: "flex-start",
    margin: 0,
    padding: t3 ? e3.layoutMargin : 0
  })), hh = xr$3.div(({ theme: e3 }) => ({
    flex: 1,
    paddingLeft: 2,
    // TODO: To match theming/global.ts for now
    paddingRight: e3.layoutMargin,
    opacity: 1,
    fontFamily: e3.typography.fonts.mono
  })), V5 = /* @__PURE__ */ o$1((e3) => {
    let t3 = [...e3.children], r3 = t3[0], n3 = r3.children[0].value, a4 = {
      ...r3,
      // empty the line-number element
      children: [],
      properties: {
        ...r3.properties,
        // add a data-line-number attribute to line-number element, so we can access the line number with `content: attr(data-line-number)`
        "data-line-number": n3,
        // remove the 'userSelect: none' style, which will produce extra empty lines when copy-pasting in firefox
        style: { ...r3.properties.style, userSelect: "auto" }
      }
    };
    return t3[0] = a4, { ...e3, children: t3 };
  }, "processLineNumber"), gh = /* @__PURE__ */ o$1(({ rows: e3, stylesheet: t3, useInlineStyles: r3 }) => e3.map((n3, a4) => _t({
    node: V5(n3),
    stylesheet: t3,
    useInlineStyles: r3,
    key: `code-segement${a4}`
  })), "defaultRenderer"), vh = /* @__PURE__ */ o$1((e3, t3) => t3 ? e3 ? ({ rows: r3, ...n3 }) => e3({ rows: r3.map((a4) => V5(a4)), ...n3 }) : gh : e3, "wrapRenderer"), sn = /* @__PURE__ */ o$1(({
    children: e$1,
    language: t3 = "jsx",
    copyable: r3 = false,
    bordered: n3 = false,
    padded: a4 = false,
    format: i3 = true,
    formatter: c4 = void 0,
    className: l4 = void 0,
    showLineNumbers: s2 = false,
    ...u2
  }) => {
    if (typeof e$1 != "string" || !e$1.trim())
      return null;
    let [f2, d2] = reactExports.useState("");
    reactExports.useEffect(() => {
      c4 ? c4(i3, e$1).then(d2) : d2(e$1.trim());
    }, [e$1, i3, c4]);
    let [m4, v3] = reactExports.useState(false), y4 = reactExports.useCallback(
      (h4) => {
        h4.preventDefault(), uh(f2).then(() => {
          v3(true), no.setTimeout(() => v3(false), 1500);
        }).catch(lh.error);
      },
      [f2]
    ), p2 = vh(u2.renderer, s2);
    return /* @__PURE__ */ e.createElement(
      fh,
      {
        bordered: n3,
        padded: a4,
        showLineNumbers: s2,
        className: l4
      },
      /* @__PURE__ */ e.createElement(ph, null, /* @__PURE__ */ e.createElement(
        Gn,
        {
          padded: a4 || n3,
          language: t3,
          showLineNumbers: s2,
          showInlineLineNumbers: s2,
          useInlineStyles: false,
          PreTag: mh,
          CodeTag: hh,
          lineNumberContainerStyle: {},
          ...u2,
          renderer: p2
        },
        f2
      )),
      r3 ? /* @__PURE__ */ e.createElement(Ya, { actionItems: [{ title: m4 ? "Copied" : "Copy", onClick: y4 }] }) : null
    );
  }, "SyntaxHighlighter");
  sn.registerLanguage = (...e3) => Gn.registerLanguage(...e3);
  wh = sn;
});
function Z5(e3) {
  for (var t3 = [], r3 = 1; r3 < arguments.length; r3++)
    t3[r3 - 1] = arguments[r3];
  var n3 = Array.from(typeof e3 == "string" ? [e3] : e3);
  n3[n3.length - 1] = n3[n3.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var a4 = n3.reduce(function(l4, s2) {
    var u2 = s2.match(/\n([\t ]+|(?!\s).)/g);
    return u2 ? l4.concat(u2.map(function(f2) {
      var d2, m4;
      return (m4 = (d2 = f2.match(/[\t ]/g)) === null || d2 === void 0 ? void 0 : d2.length) !== null && m4 !== void 0 ? m4 : 0;
    })) : l4;
  }, []);
  if (a4.length) {
    var i3 = new RegExp(`
[	 ]{` + Math.min.apply(Math, a4) + "}", "g");
    n3 = n3.map(function(l4) {
      return l4.replace(i3, `
`);
    });
  }
  n3[0] = n3[0].replace(/^\r?\n/, "");
  var c4 = n3[0];
  return t3.forEach(function(l4, s2) {
    var u2 = c4.match(/(?:^|\n)( *)$/), f2 = u2 ? u2[1] : "", d2 = l4;
    typeof l4 == "string" && l4.includes(`
`) && (d2 = String(l4).split(`
`).map(function(m4, v3) {
      return v3 === 0 ? m4 : "" + f2 + m4;
    }).join(`
`)), c4 += d2 + n3[s2 + 1];
  }), c4;
}
var K5 = C$1(() => {
  o$1(Z5, "dedent");
});
var Q5 = {};
Zr(Q5, {
  formatter: () => tg
});
var J5, tg, eu = C$1(() => {
  J5 = me$1(Qr(), 1);
  K5();
  tg = (0, J5.default)(2)(async (e3, t3) => e3 === false ? t3 : Z5(t3));
});
var L0, I0, Nf = C$1(() => {
  L0 = /* @__PURE__ */ o$1(function(t3) {
    return t3.reduce(function(r3, n3) {
      var a4 = n3[0], i3 = n3[1];
      return r3[a4] = i3, r3;
    }, {});
  }, "fromEntries"), I0 = typeof window < "u" && window.document && window.document.createElement ? reactExports.useLayoutEffect : reactExports.useEffect;
});
var te$1, le$1, ae$1, ne$1, Io, At2, ut, Kt, Ff, zo, kr, Df, z0, To, K3, J3, Q3, e7, t7, r7, n7, o7, a7, _f, ke$1 = C$1(() => {
  te$1 = "top", le$1 = "bottom", ae$1 = "right", ne$1 = "left", Io = "auto", At2 = [te$1, le$1, ae$1, ne$1], ut = "start", Kt = "end", Ff = "clippingParents", zo = "viewport", kr = "popper", Df = "reference", z0 = /* @__PURE__ */ At2.reduce(function(e3, t3) {
    return e3.concat([t3 + "-" + ut, t3 + "-" + Kt]);
  }, []), To = /* @__PURE__ */ [].concat(At2, [Io]).reduce(function(e3, t3) {
    return e3.concat([t3, t3 + "-" + ut, t3 + "-" + Kt]);
  }, []), K3 = "beforeRead", J3 = "read", Q3 = "afterRead", e7 = "beforeMain", t7 = "main", r7 = "afterMain", n7 = "beforeWrite", o7 = "write", a7 = "afterWrite", _f = [K3, J3, Q3, e7, t7, r7, n7, o7, a7];
});
function fe$1(e3) {
  return e3 ? (e3.nodeName || "").toLowerCase() : null;
}
var Lt = C$1(() => {
  o$1(fe$1, "getNodeName");
});
function Z$1(e3) {
  if (e3 == null)
    return window;
  if (e3.toString() !== "[object Window]") {
    var t3 = e3.ownerDocument;
    return t3 && t3.defaultView || window;
  }
  return e3;
}
var Je = C$1(() => {
  o$1(Z$1, "getWindow");
});
function We$1(e3) {
  var t3 = Z$1(e3).Element;
  return e3 instanceof t3 || e3 instanceof Element;
}
function ce$1(e3) {
  var t3 = Z$1(e3).HTMLElement;
  return e3 instanceof t3 || e3 instanceof HTMLElement;
}
function Or(e3) {
  if (typeof ShadowRoot > "u")
    return false;
  var t3 = Z$1(e3).ShadowRoot;
  return e3 instanceof t3 || e3 instanceof ShadowRoot;
}
var Oe$1 = C$1(() => {
  Je();
  o$1(We$1, "isElement");
  o$1(ce$1, "isHTMLElement");
  o$1(Or, "isShadowRoot");
});
function i7(e3) {
  var t3 = e3.state;
  Object.keys(t3.elements).forEach(function(r3) {
    var n3 = t3.styles[r3] || {}, a4 = t3.attributes[r3] || {}, i3 = t3.elements[r3];
    !ce$1(i3) || !fe$1(i3) || (Object.assign(i3.style, n3), Object.keys(a4).forEach(function(c4) {
      var l4 = a4[c4];
      l4 === false ? i3.removeAttribute(c4) : i3.setAttribute(c4, l4 === true ? "" : l4);
    }));
  });
}
function l7(e3) {
  var t3 = e3.state, r3 = {
    popper: {
      position: t3.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t3.elements.popper.style, r3.popper), t3.styles = r3, t3.elements.arrow && Object.assign(t3.elements.arrow.style, r3.arrow), function() {
    Object.keys(t3.elements).forEach(function(n3) {
      var a4 = t3.elements[n3], i3 = t3.attributes[n3] || {}, c4 = Object.keys(t3.styles.hasOwnProperty(n3) ? t3.styles[n3] : r3[n3]), l4 = c4.reduce(function(s2, u2) {
        return s2[u2] = "", s2;
      }, {});
      !ce$1(a4) || !fe$1(a4) || (Object.assign(a4.style, l4), Object.keys(i3).forEach(function(s2) {
        a4.removeAttribute(s2);
      }));
    });
  };
}
var $f, Vf = C$1(() => {
  Lt();
  Oe$1();
  o$1(i7, "applyStyles");
  o$1(l7, "effect");
  $f = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: i7,
    effect: l7,
    requires: ["computeStyles"]
  };
});
function de$1(e3) {
  return e3.split("-")[0];
}
var It = C$1(() => {
  o$1(de$1, "getBasePlacement");
});
var Qe$1, Jt, ft, zt = C$1(() => {
  Qe$1 = Math.max, Jt = Math.min, ft = Math.round;
});
function Br() {
  var e3 = navigator.userAgentData;
  return e3 != null && e3.brands && Array.isArray(e3.brands) ? e3.brands.map(function(t3) {
    return t3.brand + "/" + t3.version;
  }).join(" ") : navigator.userAgent;
}
var T0 = C$1(() => {
  o$1(Br, "getUAString");
});
function wn() {
  return !/^((?!chrome|android).)*safari/i.test(Br());
}
var H0 = C$1(() => {
  T0();
  o$1(wn, "isLayoutViewport");
});
function Ue$1(e3, t3, r3) {
  t3 === void 0 && (t3 = false), r3 === void 0 && (r3 = false);
  var n3 = e3.getBoundingClientRect(), a4 = 1, i3 = 1;
  t3 && ce$1(e3) && (a4 = e3.offsetWidth > 0 && ft(n3.width) / e3.offsetWidth || 1, i3 = e3.offsetHeight > 0 && ft(n3.height) / e3.offsetHeight || 1);
  var c4 = We$1(e3) ? Z$1(e3) : window, l4 = c4.visualViewport, s2 = !wn() && r3, u2 = (n3.left + (s2 && l4 ? l4.offsetLeft : 0)) / a4, f2 = (n3.top + (s2 && l4 ? l4.offsetTop : 0)) / i3, d2 = n3.width / a4, m4 = n3.height / i3;
  return {
    width: d2,
    height: m4,
    top: f2,
    right: u2 + d2,
    bottom: f2 + m4,
    left: u2,
    x: u2,
    y: f2
  };
}
var Nr = C$1(() => {
  Oe$1();
  zt();
  Je();
  H0();
  o$1(Ue$1, "getBoundingClientRect");
});
function Qt(e3) {
  var t3 = Ue$1(e3), r3 = e3.offsetWidth, n3 = e3.offsetHeight;
  return Math.abs(t3.width - r3) <= 1 && (r3 = t3.width), Math.abs(t3.height - n3) <= 1 && (n3 = t3.height), {
    x: e3.offsetLeft,
    y: e3.offsetTop,
    width: r3,
    height: n3
  };
}
var Ho = C$1(() => {
  Nr();
  o$1(Qt, "getLayoutRect");
});
function bn(e3, t3) {
  var r3 = t3.getRootNode && t3.getRootNode();
  if (e3.contains(t3))
    return true;
  if (r3 && Or(r3)) {
    var n3 = t3;
    do {
      if (n3 && e3.isSameNode(n3))
        return true;
      n3 = n3.parentNode || n3.host;
    } while (n3);
  }
  return false;
}
var P0 = C$1(() => {
  Oe$1();
  o$1(bn, "contains");
});
function xe$1(e3) {
  return Z$1(e3).getComputedStyle(e3);
}
var Fr = C$1(() => {
  Je();
  o$1(xe$1, "getComputedStyle");
});
function k0(e3) {
  return ["table", "td", "th"].indexOf(fe$1(e3)) >= 0;
}
var jf = C$1(() => {
  Lt();
  o$1(k0, "isTableElement");
});
function ge$1(e3) {
  return ((We$1(e3) ? e3.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e3.document
  )) || window.document).documentElement;
}
var dt = C$1(() => {
  Oe$1();
  o$1(ge$1, "getDocumentElement");
});
function pt(e3) {
  return fe$1(e3) === "html" ? e3 : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e3.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e3.parentNode || // DOM Element detected
    (Or(e3) ? e3.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    ge$1(e3)
  );
}
var yn = C$1(() => {
  Lt();
  dt();
  Oe$1();
  o$1(pt, "getParentNode");
});
function Wf(e3) {
  return !ce$1(e3) || // https://github.com/popperjs/popper-core/issues/837
  xe$1(e3).position === "fixed" ? null : e3.offsetParent;
}
function c7(e3) {
  var t3 = /firefox/i.test(Br()), r3 = /Trident/i.test(Br());
  if (r3 && ce$1(e3)) {
    var n3 = xe$1(e3);
    if (n3.position === "fixed")
      return null;
  }
  var a4 = pt(e3);
  for (Or(a4) && (a4 = a4.host); ce$1(a4) && ["html", "body"].indexOf(fe$1(a4)) < 0; ) {
    var i3 = xe$1(a4);
    if (i3.transform !== "none" || i3.perspective !== "none" || i3.contain === "paint" || ["transform", "perspective"].indexOf(i3.willChange) !== -1 || t3 && i3.willChange === "filter" || t3 && i3.filter && i3.filter !== "none")
      return a4;
    a4 = a4.parentNode;
  }
  return null;
}
function et(e3) {
  for (var t3 = Z$1(e3), r3 = Wf(e3); r3 && k0(r3) && xe$1(r3).position === "static"; )
    r3 = Wf(r3);
  return r3 && (fe$1(r3) === "html" || fe$1(r3) === "body" && xe$1(r3).position === "static") ? t3 : r3 || c7(e3) || t3;
}
var Dr = C$1(() => {
  Je();
  Lt();
  Fr();
  Oe$1();
  jf();
  yn();
  T0();
  o$1(Wf, "getTrueOffsetParent");
  o$1(c7, "getContainingBlock");
  o$1(et, "getOffsetParent");
});
function er(e3) {
  return ["top", "bottom"].indexOf(e3) >= 0 ? "x" : "y";
}
var Po = C$1(() => {
  o$1(er, "getMainAxisFromPlacement");
});
function tr(e3, t3, r3) {
  return Qe$1(e3, Jt(t3, r3));
}
function Uf(e3, t3, r3) {
  var n3 = tr(e3, t3, r3);
  return n3 > r3 ? r3 : n3;
}
var O0 = C$1(() => {
  zt();
  o$1(tr, "within");
  o$1(Uf, "withinMaxClamp");
});
function Rn() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
var B0 = C$1(() => {
  o$1(Rn, "getFreshSideObject");
});
function xn(e3) {
  return Object.assign({}, Rn(), e3);
}
var N0 = C$1(() => {
  B0();
  o$1(xn, "mergePaddingObject");
});
function En(e3, t3) {
  return t3.reduce(function(r3, n3) {
    return r3[n3] = e3, r3;
  }, {});
}
var F0 = C$1(() => {
  o$1(En, "expandToHashMap");
});
function u7(e3) {
  var t3, r3 = e3.state, n3 = e3.name, a4 = e3.options, i3 = r3.elements.arrow, c4 = r3.modifiersData.popperOffsets, l4 = de$1(r3.placement), s2 = er(l4), u2 = [
    ne$1,
    ae$1
  ].indexOf(l4) >= 0, f2 = u2 ? "height" : "width";
  if (!(!i3 || !c4)) {
    var d2 = s7(a4.padding, r3), m4 = Qt(i3), v3 = s2 === "y" ? te$1 : ne$1, y4 = s2 === "y" ? le$1 : ae$1, p2 = r3.rects.reference[f2] + r3.rects.reference[s2] - c4[s2] - r3.rects.popper[f2], h4 = c4[s2] - r3.rects.reference[s2], g4 = et(i3), w3 = g4 ? s2 === "y" ? g4.clientHeight || 0 : g4.clientWidth || 0 : 0, b4 = p2 / 2 - h4 / 2, x4 = d2[v3], E3 = w3 - m4[f2] - d2[y4], R4 = w3 / 2 - m4[f2] / 2 + b4, S3 = tr(x4, R4, E3), A3 = s2;
    r3.modifiersData[n3] = (t3 = {}, t3[A3] = S3, t3.centerOffset = S3 - R4, t3);
  }
}
function f7(e3) {
  var t3 = e3.state, r3 = e3.options, n3 = r3.element, a4 = n3 === void 0 ? "[data-popper-arrow]" : n3;
  a4 != null && (typeof a4 == "string" && (a4 = t3.elements.popper.querySelector(a4), !a4) || bn(t3.elements.popper, a4) && (t3.elements.arrow = a4));
}
var s7, qf, Gf = C$1(() => {
  It();
  Ho();
  P0();
  Dr();
  Po();
  O0();
  N0();
  F0();
  ke$1();
  s7 = /* @__PURE__ */ o$1(function(t3, r3) {
    return t3 = typeof t3 == "function" ? t3(Object.assign({}, r3.rects, {
      placement: r3.placement
    })) : t3, xn(typeof t3 != "number" ? t3 : En(t3, At2));
  }, "toPaddingObject");
  o$1(u7, "arrow");
  o$1(f7, "effect");
  qf = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: u7,
    effect: f7,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };
});
function qe$1(e3) {
  return e3.split("-")[1];
}
var _r = C$1(() => {
  o$1(qe$1, "getVariation");
});
function p7(e3, t3) {
  var r3 = e3.x, n3 = e3.y, a4 = t3.devicePixelRatio || 1;
  return {
    x: ft(r3 * a4) / a4 || 0,
    y: ft(n3 * a4) / a4 || 0
  };
}
function Yf(e3) {
  var t3, r3 = e3.popper, n3 = e3.popperRect, a4 = e3.placement, i3 = e3.variation, c4 = e3.offsets, l4 = e3.position, s2 = e3.gpuAcceleration, u2 = e3.adaptive, f2 = e3.roundOffsets, d2 = e3.isFixed, m4 = c4.x, v3 = m4 === void 0 ? 0 : m4, y4 = c4.y, p2 = y4 === void 0 ? 0 : y4, h4 = typeof f2 == "function" ? f2({
    x: v3,
    y: p2
  }) : {
    x: v3,
    y: p2
  };
  v3 = h4.x, p2 = h4.y;
  var g4 = c4.hasOwnProperty("x"), w3 = c4.hasOwnProperty("y"), b4 = ne$1, x4 = te$1, E3 = window;
  if (u2) {
    var R4 = et(r3), S3 = "clientHeight", A3 = "clientWidth";
    if (R4 === Z$1(r3) && (R4 = ge$1(r3), xe$1(R4).position !== "static" && l4 === "absolute" && (S3 = "scrollHeight", A3 = "scrollWidth")), R4 = R4, a4 === te$1 || (a4 === ne$1 || a4 === ae$1) && i3 === Kt) {
      x4 = le$1;
      var M3 = d2 && R4 === E3 && E3.visualViewport ? E3.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        R4[S3]
      );
      p2 -= M3 - n3.height, p2 *= s2 ? 1 : -1;
    }
    if (a4 === ne$1 || (a4 === te$1 || a4 === le$1) && i3 === Kt) {
      b4 = ae$1;
      var L2 = d2 && R4 === E3 && E3.visualViewport ? E3.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        R4[A3]
      );
      v3 -= L2 - n3.width, v3 *= s2 ? 1 : -1;
    }
  }
  var P2 = Object.assign({
    position: l4
  }, u2 && d7), _2 = f2 === true ? p7({
    x: v3,
    y: p2
  }, Z$1(r3)) : {
    x: v3,
    y: p2
  };
  if (v3 = _2.x, p2 = _2.y, s2) {
    var D2;
    return Object.assign({}, P2, (D2 = {}, D2[x4] = w3 ? "0" : "", D2[b4] = g4 ? "0" : "", D2.transform = (E3.devicePixelRatio || 1) <= 1 ? "translate(" + v3 + "px, " + p2 + "px)" : "translate3d(" + v3 + "px, " + p2 + "px, 0)", D2));
  }
  return Object.assign({}, P2, (t3 = {}, t3[x4] = w3 ? p2 + "px" : "", t3[b4] = g4 ? v3 + "px" : "", t3.transform = "", t3));
}
function m7(e3) {
  var t3 = e3.state, r3 = e3.options, n3 = r3.gpuAcceleration, a4 = n3 === void 0 ? true : n3, i3 = r3.adaptive, c4 = i3 === void 0 ? true : i3, l4 = r3.roundOffsets, s2 = l4 === void 0 ? true : l4, u2 = {
    placement: de$1(t3.placement),
    variation: qe$1(t3.placement),
    popper: t3.elements.popper,
    popperRect: t3.rects.popper,
    gpuAcceleration: a4,
    isFixed: t3.options.strategy === "fixed"
  };
  t3.modifiersData.popperOffsets != null && (t3.styles.popper = Object.assign({}, t3.styles.popper, Yf(Object.assign({}, u2, {
    offsets: t3.modifiersData.popperOffsets,
    position: t3.options.strategy,
    adaptive: c4,
    roundOffsets: s2
  })))), t3.modifiersData.arrow != null && (t3.styles.arrow = Object.assign({}, t3.styles.arrow, Yf(Object.assign({}, u2, {
    offsets: t3.modifiersData.arrow,
    position: "absolute",
    adaptive: false,
    roundOffsets: s2
  })))), t3.attributes.popper = Object.assign({}, t3.attributes.popper, {
    "data-popper-placement": t3.placement
  });
}
var d7, Xf, Zf = C$1(() => {
  ke$1();
  Dr();
  Je();
  dt();
  Fr();
  It();
  _r();
  zt();
  d7 = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  o$1(p7, "roundOffsetsByDPR");
  o$1(Yf, "mapToStyles");
  o$1(m7, "computeStyles");
  Xf = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: m7,
    data: {}
  };
});
function h7(e3) {
  var t3 = e3.state, r3 = e3.instance, n3 = e3.options, a4 = n3.scroll, i3 = a4 === void 0 ? true : a4, c4 = n3.resize, l4 = c4 === void 0 ? true : c4, s2 = Z$1(t3.elements.popper), u2 = [].concat(t3.scrollParents.reference, t3.scrollParents.popper);
  return i3 && u2.forEach(function(f2) {
    f2.addEventListener("scroll", r3.update, ko);
  }), l4 && s2.addEventListener("resize", r3.update, ko), function() {
    i3 && u2.forEach(function(f2) {
      f2.removeEventListener("scroll", r3.update, ko);
    }), l4 && s2.removeEventListener("resize", r3.update, ko);
  };
}
var ko, Kf, Jf = C$1(() => {
  Je();
  ko = {
    passive: true
  };
  o$1(h7, "effect");
  Kf = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: /* @__PURE__ */ o$1(function() {
    }, "fn"),
    effect: h7,
    data: {}
  };
});
function $r(e3) {
  return e3.replace(/left|right|bottom|top/g, function(t3) {
    return g7[t3];
  });
}
var g7, Qf = C$1(() => {
  g7 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  o$1($r, "getOppositePlacement");
});
function Oo(e3) {
  return e3.replace(/start|end/g, function(t3) {
    return v7[t3];
  });
}
var v7, ed = C$1(() => {
  v7 = {
    start: "end",
    end: "start"
  };
  o$1(Oo, "getOppositeVariationPlacement");
});
function rr(e3) {
  var t3 = Z$1(e3), r3 = t3.pageXOffset, n3 = t3.pageYOffset;
  return {
    scrollLeft: r3,
    scrollTop: n3
  };
}
var Bo = C$1(() => {
  Je();
  o$1(rr, "getWindowScroll");
});
function nr(e3) {
  return Ue$1(ge$1(e3)).left + rr(e3).scrollLeft;
}
var No = C$1(() => {
  Nr();
  dt();
  Bo();
  o$1(nr, "getWindowScrollBarX");
});
function D0(e3, t3) {
  var r3 = Z$1(e3), n3 = ge$1(e3), a4 = r3.visualViewport, i3 = n3.clientWidth, c4 = n3.clientHeight, l4 = 0, s2 = 0;
  if (a4) {
    i3 = a4.width, c4 = a4.height;
    var u2 = wn();
    (u2 || !u2 && t3 === "fixed") && (l4 = a4.offsetLeft, s2 = a4.offsetTop);
  }
  return {
    width: i3,
    height: c4,
    x: l4 + nr(e3),
    y: s2
  };
}
var td = C$1(() => {
  Je();
  dt();
  No();
  H0();
  o$1(D0, "getViewportRect");
});
function _0(e3) {
  var t3, r3 = ge$1(e3), n3 = rr(e3), a4 = (t3 = e3.ownerDocument) == null ? void 0 : t3.body, i3 = Qe$1(r3.scrollWidth, r3.clientWidth, a4 ? a4.scrollWidth : 0, a4 ? a4.clientWidth : 0), c4 = Qe$1(r3.scrollHeight, r3.clientHeight, a4 ? a4.scrollHeight : 0, a4 ? a4.clientHeight : 0), l4 = -n3.scrollLeft + nr(
    e3
  ), s2 = -n3.scrollTop;
  return xe$1(a4 || r3).direction === "rtl" && (l4 += Qe$1(r3.clientWidth, a4 ? a4.clientWidth : 0) - i3), {
    width: i3,
    height: c4,
    x: l4,
    y: s2
  };
}
var rd = C$1(() => {
  dt();
  Fr();
  No();
  Bo();
  zt();
  o$1(_0, "getDocumentRect");
});
function or(e3) {
  var t3 = xe$1(e3), r3 = t3.overflow, n3 = t3.overflowX, a4 = t3.overflowY;
  return /auto|scroll|overlay|hidden/.test(r3 + a4 + n3);
}
var Fo = C$1(() => {
  Fr();
  o$1(or, "isScrollParent");
});
function Do(e3) {
  return ["html", "body", "#document"].indexOf(fe$1(e3)) >= 0 ? e3.ownerDocument.body : ce$1(e3) && or(e3) ? e3 : Do(pt(e3));
}
var nd = C$1(() => {
  yn();
  Fo();
  Lt();
  Oe$1();
  o$1(Do, "getScrollParent");
});
function Tt(e3, t3) {
  var r3;
  t3 === void 0 && (t3 = []);
  var n3 = Do(e3), a4 = n3 === ((r3 = e3.ownerDocument) == null ? void 0 : r3.body), i3 = Z$1(n3), c4 = a4 ? [i3].concat(i3.visualViewport || [], or(n3) ? n3 : []) : n3, l4 = t3.concat(c4);
  return a4 ? l4 : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    l4.concat(Tt(pt(c4)))
  );
}
var $0 = C$1(() => {
  nd();
  yn();
  Je();
  Fo();
  o$1(Tt, "listScrollParents");
});
function Vr(e3) {
  return Object.assign({}, e3, {
    left: e3.x,
    top: e3.y,
    right: e3.x + e3.width,
    bottom: e3.y + e3.height
  });
}
var V0 = C$1(() => {
  o$1(Vr, "rectToClientRect");
});
function w7(e3, t3) {
  var r3 = Ue$1(e3, false, t3 === "fixed");
  return r3.top = r3.top + e3.clientTop, r3.left = r3.left + e3.clientLeft, r3.bottom = r3.top + e3.clientHeight, r3.right = r3.left + e3.clientWidth, r3.width = e3.clientWidth, r3.height = e3.clientHeight, r3.x = r3.left, r3.y = r3.top, r3;
}
function od(e3, t3, r3) {
  return t3 === zo ? Vr(D0(e3, r3)) : We$1(t3) ? w7(t3, r3) : Vr(_0(ge$1(e3)));
}
function b7(e3) {
  var t3 = Tt(pt(e3)), r3 = ["absolute", "fixed"].indexOf(xe$1(e3).position) >= 0, n3 = r3 && ce$1(e3) ? et(e3) : e3;
  return We$1(n3) ? t3.filter(function(a4) {
    return We$1(a4) && bn(a4, n3) && fe$1(a4) !== "body";
  }) : [];
}
function j0(e3, t3, r3, n3) {
  var a4 = t3 === "clippingParents" ? b7(e3) : [].concat(t3), i3 = [].concat(a4, [r3]), c4 = i3[0], l4 = i3.reduce(function(s2, u2) {
    var f2 = od(e3, u2, n3);
    return s2.top = Qe$1(f2.top, s2.top), s2.right = Jt(f2.right, s2.right), s2.bottom = Jt(f2.bottom, s2.bottom), s2.left = Qe$1(f2.left, s2.left), s2;
  }, od(e3, c4, n3));
  return l4.width = l4.right - l4.left, l4.height = l4.bottom - l4.top, l4.x = l4.left, l4.y = l4.top, l4;
}
var ad = C$1(() => {
  ke$1();
  td();
  rd();
  $0();
  Dr();
  dt();
  Fr();
  Oe$1();
  Nr();
  yn();
  P0();
  Lt();
  V0();
  zt();
  o$1(w7, "getInnerBoundingClientRect");
  o$1(od, "getClientRectFromMixedType");
  o$1(b7, "getClippingParents");
  o$1(j0, "getClippingRect");
});
function Sn(e3) {
  var t3 = e3.reference, r3 = e3.element, n3 = e3.placement, a4 = n3 ? de$1(n3) : null, i3 = n3 ? qe$1(n3) : null, c4 = t3.x + t3.width / 2 - r3.width / 2, l4 = t3.y + t3.height / 2 - r3.height / 2, s2;
  switch (a4) {
    case te$1:
      s2 = {
        x: c4,
        y: t3.y - r3.height
      };
      break;
    case le$1:
      s2 = {
        x: c4,
        y: t3.y + t3.height
      };
      break;
    case ae$1:
      s2 = {
        x: t3.x + t3.width,
        y: l4
      };
      break;
    case ne$1:
      s2 = {
        x: t3.x - r3.width,
        y: l4
      };
      break;
    default:
      s2 = {
        x: t3.x,
        y: t3.y
      };
  }
  var u2 = a4 ? er(a4) : null;
  if (u2 != null) {
    var f2 = u2 === "y" ? "height" : "width";
    switch (i3) {
      case ut:
        s2[u2] = s2[u2] - (t3[f2] / 2 - r3[f2] / 2);
        break;
      case Kt:
        s2[u2] = s2[u2] + (t3[f2] / 2 - r3[f2] / 2);
        break;
    }
  }
  return s2;
}
var W0 = C$1(() => {
  It();
  _r();
  Po();
  ke$1();
  o$1(Sn, "computeOffsets");
});
function tt(e3, t3) {
  t3 === void 0 && (t3 = {});
  var r3 = t3, n3 = r3.placement, a4 = n3 === void 0 ? e3.placement : n3, i3 = r3.strategy, c4 = i3 === void 0 ? e3.strategy : i3, l4 = r3.boundary, s2 = l4 === void 0 ? Ff : l4, u2 = r3.rootBoundary, f2 = u2 === void 0 ? zo : u2, d2 = r3.elementContext, m4 = d2 === void 0 ? kr : d2, v3 = r3.altBoundary, y4 = v3 === void 0 ? false : v3, p2 = r3.padding, h4 = p2 === void 0 ? 0 : p2, g4 = xn(typeof h4 != "number" ? h4 : En(h4, At2)), w3 = m4 === kr ? Df : kr, b4 = e3.rects.popper, x4 = e3.elements[y4 ? w3 : m4], E3 = j0(We$1(x4) ? x4 : x4.contextElement || ge$1(e3.elements.popper), s2, f2, c4), R4 = Ue$1(e3.elements.reference), S3 = Sn(
    {
      reference: R4,
      element: b4,
      placement: a4
    }
  ), A3 = Vr(Object.assign({}, b4, S3)), M3 = m4 === kr ? A3 : R4, L2 = {
    top: E3.top - M3.top + g4.top,
    bottom: M3.bottom - E3.bottom + g4.bottom,
    left: E3.left - M3.left + g4.left,
    right: M3.right - E3.right + g4.right
  }, P2 = e3.modifiersData.offset;
  if (m4 === kr && P2) {
    var _2 = P2[a4];
    Object.keys(L2).forEach(function(D2) {
      var K2 = [ae$1, le$1].indexOf(D2) >= 0 ? 1 : -1, T2 = [te$1, le$1].indexOf(D2) >= 0 ? "y" : "x";
      L2[D2] += _2[T2] * K2;
    });
  }
  return L2;
}
var Cn = C$1(() => {
  ad();
  dt();
  Nr();
  W0();
  V0();
  ke$1();
  Oe$1();
  N0();
  F0();
  o$1(tt, "detectOverflow");
});
function U0(e3, t3) {
  t3 === void 0 && (t3 = {});
  var r3 = t3, n3 = r3.placement, a4 = r3.boundary, i3 = r3.rootBoundary, c4 = r3.padding, l4 = r3.flipVariations, s2 = r3.allowedAutoPlacements, u2 = s2 === void 0 ? To : s2, f2 = qe$1(n3), d2 = f2 ? l4 ? z0 : z0.filter(function(y4) {
    return qe$1(y4) === f2;
  }) : At2, m4 = d2.filter(function(y4) {
    return u2.indexOf(y4) >= 0;
  });
  m4.length === 0 && (m4 = d2);
  var v3 = m4.reduce(function(y4, p2) {
    return y4[p2] = tt(e3, {
      placement: p2,
      boundary: a4,
      rootBoundary: i3,
      padding: c4
    })[de$1(p2)], y4;
  }, {});
  return Object.keys(v3).sort(function(y4, p2) {
    return v3[y4] - v3[p2];
  });
}
var id = C$1(() => {
  _r();
  ke$1();
  Cn();
  It();
  o$1(U0, "computeAutoPlacement");
});
function y7(e3) {
  if (de$1(e3) === Io)
    return [];
  var t3 = $r(e3);
  return [Oo(e3), t3, Oo(t3)];
}
function R7(e3) {
  var t3 = e3.state, r3 = e3.options, n3 = e3.name;
  if (!t3.modifiersData[n3]._skip) {
    for (var a4 = r3.mainAxis, i3 = a4 === void 0 ? true : a4, c4 = r3.altAxis, l4 = c4 === void 0 ? true : c4, s2 = r3.fallbackPlacements, u2 = r3.padding, f2 = r3.boundary, d2 = r3.rootBoundary, m4 = r3.altBoundary, v3 = r3.flipVariations, y4 = v3 === void 0 ? true : v3, p2 = r3.allowedAutoPlacements, h4 = t3.options.placement, g4 = de$1(h4), w3 = g4 === h4, b4 = s2 || (w3 || !y4 ? [$r(h4)] : y7(h4)), x4 = [h4].concat(b4).reduce(function(pe2, se2) {
      return pe2.concat(de$1(se2) === Io ? U0(t3, {
        placement: se2,
        boundary: f2,
        rootBoundary: d2,
        padding: u2,
        flipVariations: y4,
        allowedAutoPlacements: p2
      }) : se2);
    }, []), E3 = t3.rects.reference, R4 = t3.rects.popper, S3 = /* @__PURE__ */ new Map(), A3 = true, M3 = x4[0], L2 = 0; L2 < x4.length; L2++) {
      var P2 = x4[L2], _2 = de$1(P2), D2 = qe$1(P2) === ut, K2 = [te$1, le$1].indexOf(_2) >= 0, T2 = K2 ? "width" : "height", z2 = tt(t3, {
        placement: P2,
        boundary: f2,
        rootBoundary: d2,
        altBoundary: m4,
        padding: u2
      }), k2 = K2 ? D2 ? ae$1 : ne$1 : D2 ? le$1 : te$1;
      E3[T2] > R4[T2] && (k2 = $r(k2));
      var V2 = $r(k2), F2 = [];
      if (i3 && F2.push(z2[_2] <= 0), l4 && F2.push(z2[k2] <= 0, z2[V2] <= 0), F2.every(function(pe2) {
        return pe2;
      })) {
        M3 = P2, A3 = false;
        break;
      }
      S3.set(P2, F2);
    }
    if (A3)
      for (var j2 = y4 ? 3 : 1, O2 = /* @__PURE__ */ o$1(function(se2) {
        var ue2 = x4.find(function(ve2) {
          var Se2 = S3.get(ve2);
          if (Se2)
            return Se2.slice(0, se2).every(function(Ot2) {
              return Ot2;
            });
        });
        if (ue2)
          return M3 = ue2, "break";
      }, "_loop"), G2 = j2; G2 > 0; G2--) {
        var Ee2 = O2(G2);
        if (Ee2 === "break") break;
      }
    t3.placement !== M3 && (t3.modifiersData[n3]._skip = true, t3.placement = M3, t3.reset = true);
  }
}
var ld, cd = C$1(() => {
  Qf();
  It();
  ed();
  Cn();
  id();
  ke$1();
  _r();
  o$1(y7, "getExpandedFallbackPlacements");
  o$1(R7, "flip");
  ld = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: R7,
    requiresIfExists: ["offset"],
    data: {
      _skip: false
    }
  };
});
function sd(e3, t3, r3) {
  return r3 === void 0 && (r3 = {
    x: 0,
    y: 0
  }), {
    top: e3.top - t3.height - r3.y,
    right: e3.right - t3.width + r3.x,
    bottom: e3.bottom - t3.height + r3.y,
    left: e3.left - t3.width - r3.x
  };
}
function ud(e3) {
  return [te$1, ae$1, le$1, ne$1].some(function(t3) {
    return e3[t3] >= 0;
  });
}
function x7(e3) {
  var t3 = e3.state, r3 = e3.name, n3 = t3.rects.reference, a4 = t3.rects.popper, i3 = t3.modifiersData.preventOverflow, c4 = tt(t3, {
    elementContext: "reference"
  }), l4 = tt(t3, {
    altBoundary: true
  }), s2 = sd(c4, n3), u2 = sd(l4, a4, i3), f2 = ud(s2), d2 = ud(u2);
  t3.modifiersData[r3] = {
    referenceClippingOffsets: s2,
    popperEscapeOffsets: u2,
    isReferenceHidden: f2,
    hasPopperEscaped: d2
  }, t3.attributes.popper = Object.assign({}, t3.attributes.popper, {
    "data-popper-reference-hidden": f2,
    "data-popper-escaped": d2
  });
}
var fd, dd = C$1(() => {
  ke$1();
  Cn();
  o$1(sd, "getSideOffsets");
  o$1(ud, "isAnySideFullyClipped");
  o$1(x7, "hide");
  fd = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: x7
  };
});
function E7(e3, t3, r3) {
  var n3 = de$1(e3), a4 = [ne$1, te$1].indexOf(n3) >= 0 ? -1 : 1, i3 = typeof r3 == "function" ? r3(Object.assign({}, t3, {
    placement: e3
  })) : r3, c4 = i3[0], l4 = i3[1];
  return c4 = c4 || 0, l4 = (l4 || 0) * a4, [ne$1, ae$1].indexOf(n3) >= 0 ? {
    x: l4,
    y: c4
  } : {
    x: c4,
    y: l4
  };
}
function S7(e3) {
  var t3 = e3.state, r3 = e3.options, n3 = e3.name, a4 = r3.offset, i3 = a4 === void 0 ? [0, 0] : a4, c4 = To.reduce(function(f2, d2) {
    return f2[d2] = E7(d2, t3.rects, i3), f2;
  }, {}), l4 = c4[t3.placement], s2 = l4.x, u2 = l4.y;
  t3.modifiersData.popperOffsets != null && (t3.modifiersData.popperOffsets.x += s2, t3.modifiersData.popperOffsets.y += u2), t3.modifiersData[n3] = c4;
}
var pd, md = C$1(() => {
  It();
  ke$1();
  o$1(E7, "distanceAndSkiddingToXY");
  o$1(S7, "offset");
  pd = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: ["popperOffsets"],
    fn: S7
  };
});
function C7(e3) {
  var t3 = e3.state, r3 = e3.name;
  t3.modifiersData[r3] = Sn({
    reference: t3.rects.reference,
    element: t3.rects.popper,
    placement: t3.placement
  });
}
var hd, gd = C$1(() => {
  W0();
  o$1(C7, "popperOffsets");
  hd = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: C7,
    data: {}
  };
});
function q0(e3) {
  return e3 === "x" ? "y" : "x";
}
var vd = C$1(() => {
  o$1(q0, "getAltAxis");
});
function M7(e3) {
  var t3 = e3.state, r3 = e3.options, n3 = e3.name, a4 = r3.mainAxis, i3 = a4 === void 0 ? true : a4, c4 = r3.altAxis, l4 = c4 === void 0 ? false : c4, s2 = r3.boundary, u2 = r3.rootBoundary, f2 = r3.altBoundary, d2 = r3.padding, m4 = r3.tether, v3 = m4 === void 0 ? true : m4, y4 = r3.tetherOffset, p2 = y4 === void 0 ? 0 : y4, h4 = tt(t3, {
    boundary: s2,
    rootBoundary: u2,
    padding: d2,
    altBoundary: f2
  }), g4 = de$1(t3.placement), w3 = qe$1(t3.placement), b4 = !w3, x4 = er(g4), E3 = q0(x4), R4 = t3.modifiersData.popperOffsets, S3 = t3.rects.reference, A3 = t3.rects.popper, M3 = typeof p2 == "function" ? p2(Object.assign({}, t3.rects, {
    placement: t3.placement
  })) : p2, L2 = typeof M3 == "number" ? {
    mainAxis: M3,
    altAxis: M3
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, M3), P2 = t3.modifiersData.offset ? t3.modifiersData.offset[t3.placement] : null, _2 = {
    x: 0,
    y: 0
  };
  if (R4) {
    if (i3) {
      var D2, K2 = x4 === "y" ? te$1 : ne$1, T2 = x4 === "y" ? le$1 : ae$1, z2 = x4 === "y" ? "height" : "width", k2 = R4[x4], V2 = k2 + h4[K2], F2 = k2 - h4[T2], j2 = v3 ? -A3[z2] / 2 : 0, O2 = w3 === ut ? S3[z2] : A3[z2], G2 = w3 === ut ? -A3[z2] : -S3[z2], Ee2 = t3.elements.arrow, pe2 = v3 && Ee2 ? Qt(Ee2) : {
        width: 0,
        height: 0
      }, se2 = t3.modifiersData["arrow#persistent"] ? t3.modifiersData["arrow#persistent"].padding : Rn(), ue2 = se2[K2], ve2 = se2[T2], Se2 = tr(
        0,
        S3[z2],
        pe2[z2]
      ), Ot2 = b4 ? S3[z2] / 2 - j2 - Se2 - ue2 - L2.mainAxis : O2 - Se2 - ue2 - L2.mainAxis, Yr2 = b4 ? -S3[z2] / 2 + j2 + Se2 + ve2 + L2.mainAxis : G2 + Se2 + ve2 + L2.mainAxis, Xo2 = t3.elements.arrow && et(t3.elements.arrow), pp = Xo2 ? x4 === "y" ? Xo2.clientTop || 0 : Xo2.clientLeft || 0 : 0, xl = (D2 = P2 == null ? void 0 : P2[x4]) != null ? D2 : 0, mp = k2 + Ot2 - xl - pp, hp = k2 + Yr2 - xl, El = tr(v3 ? Jt(V2, mp) : V2, k2, v3 ? Qe$1(F2, hp) : F2);
      R4[x4] = El, _2[x4] = El - k2;
    }
    if (l4) {
      var Sl, gp = x4 === "x" ? te$1 : ne$1, vp = x4 === "x" ? le$1 : ae$1, Bt2 = R4[E3], zn2 = E3 === "y" ? "height" : "width", Cl = Bt2 + h4[gp], Ml = Bt2 - h4[vp], Zo2 = [te$1, ne$1].indexOf(g4) !== -1, Al = (Sl = P2 == null ? void 0 : P2[E3]) != null ? Sl : 0, Ll = Zo2 ? Cl : Bt2 - S3[zn2] - A3[zn2] - Al + L2.altAxis, Il = Zo2 ? Bt2 + S3[zn2] + A3[zn2] - Al - L2.altAxis : Ml, zl = v3 && Zo2 ? Uf(Ll, Bt2, Il) : tr(v3 ? Ll : Cl, Bt2, v3 ? Il : Ml);
      R4[E3] = zl, _2[E3] = zl - Bt2;
    }
    t3.modifiersData[n3] = _2;
  }
}
var wd, bd = C$1(() => {
  ke$1();
  It();
  Po();
  vd();
  O0();
  Ho();
  Dr();
  Cn();
  _r();
  B0();
  zt();
  o$1(M7, "preventOverflow");
  wd = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: M7,
    requiresIfExists: ["offset"]
  };
});
var G0 = C$1(() => {
});
function Y0(e3) {
  return {
    scrollLeft: e3.scrollLeft,
    scrollTop: e3.scrollTop
  };
}
var yd = C$1(() => {
  o$1(Y0, "getHTMLElementScroll");
});
function X0(e3) {
  return e3 === Z$1(e3) || !ce$1(e3) ? rr(e3) : Y0(e3);
}
var Rd = C$1(() => {
  Bo();
  Je();
  Oe$1();
  yd();
  o$1(X0, "getNodeScroll");
});
function A7(e3) {
  var t3 = e3.getBoundingClientRect(), r3 = ft(t3.width) / e3.offsetWidth || 1, n3 = ft(t3.height) / e3.offsetHeight || 1;
  return r3 !== 1 || n3 !== 1;
}
function Z0(e3, t3, r3) {
  r3 === void 0 && (r3 = false);
  var n3 = ce$1(t3), a4 = ce$1(t3) && A7(t3), i3 = ge$1(t3), c4 = Ue$1(e3, a4, r3), l4 = {
    scrollLeft: 0,
    scrollTop: 0
  }, s2 = {
    x: 0,
    y: 0
  };
  return (n3 || !n3 && !r3) && ((fe$1(t3) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  or(i3)) && (l4 = X0(t3)), ce$1(t3) ? (s2 = Ue$1(t3, true), s2.x += t3.clientLeft, s2.y += t3.clientTop) : i3 && (s2.x = nr(i3))), {
    x: c4.left + l4.scrollLeft - s2.x,
    y: c4.top + l4.scrollTop - s2.y,
    width: c4.width,
    height: c4.height
  };
}
var xd = C$1(() => {
  Nr();
  Rd();
  Lt();
  Oe$1();
  No();
  dt();
  Fo();
  zt();
  o$1(A7, "isElementScaled");
  o$1(Z0, "getCompositeRect");
});
function L7(e3) {
  var t3 = /* @__PURE__ */ new Map(), r3 = /* @__PURE__ */ new Set(), n3 = [];
  e3.forEach(function(i3) {
    t3.set(i3.name, i3);
  });
  function a4(i3) {
    r3.add(i3.name);
    var c4 = [].concat(i3.requires || [], i3.requiresIfExists || []);
    c4.forEach(function(l4) {
      if (!r3.has(l4)) {
        var s2 = t3.get(l4);
        s2 && a4(s2);
      }
    }), n3.push(i3);
  }
  return o$1(a4, "sort"), e3.forEach(function(i3) {
    r3.has(i3.name) || a4(i3);
  }), n3;
}
function K0(e3) {
  var t3 = L7(e3);
  return _f.reduce(function(r3, n3) {
    return r3.concat(t3.filter(function(a4) {
      return a4.phase === n3;
    }));
  }, []);
}
var Ed = C$1(() => {
  ke$1();
  o$1(L7, "order");
  o$1(K0, "orderModifiers");
});
function J0(e3) {
  var t3;
  return function() {
    return t3 || (t3 = new Promise(function(r3) {
      Promise.resolve().then(function() {
        t3 = void 0, r3(e3());
      });
    })), t3;
  };
}
var Sd = C$1(() => {
  o$1(J0, "debounce");
});
function Q0(e3) {
  var t3 = e3.reduce(function(r3, n3) {
    var a4 = r3[n3.name];
    return r3[n3.name] = a4 ? Object.assign({}, a4, n3, {
      options: Object.assign({}, a4.options, n3.options),
      data: Object.assign({}, a4.data, n3.data)
    }) : n3, r3;
  }, {});
  return Object.keys(t3).map(function(r3) {
    return t3[r3];
  });
}
var Cd = C$1(() => {
  o$1(Q0, "mergeByName");
});
function Ad() {
  for (var e3 = arguments.length, t3 = new Array(e3), r3 = 0; r3 < e3; r3++)
    t3[r3] = arguments[r3];
  return !t3.some(function(n3) {
    return !(n3 && typeof n3.getBoundingClientRect == "function");
  });
}
function Ld(e3) {
  e3 === void 0 && (e3 = {});
  var t3 = e3, r3 = t3.defaultModifiers, n3 = r3 === void 0 ? [] : r3, a4 = t3.defaultOptions, i3 = a4 === void 0 ? Md : a4;
  return /* @__PURE__ */ o$1(function(l4, s2, u2) {
    u2 === void 0 && (u2 = i3);
    var f2 = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Md, i3),
      modifiersData: {},
      elements: {
        reference: l4,
        popper: s2
      },
      attributes: {},
      styles: {}
    }, d2 = [], m4 = false, v3 = {
      state: f2,
      setOptions: /* @__PURE__ */ o$1(function(g4) {
        var w3 = typeof g4 == "function" ? g4(f2.options) : g4;
        p2(), f2.options = Object.assign({}, i3, f2.options, w3), f2.scrollParents = {
          reference: We$1(l4) ? Tt(l4) : l4.contextElement ? Tt(l4.contextElement) : [],
          popper: Tt(s2)
        };
        var b4 = K0(Q0([].concat(n3, f2.options.modifiers)));
        return f2.orderedModifiers = b4.filter(function(x4) {
          return x4.enabled;
        }), y4(), v3.update();
      }, "setOptions"),
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: /* @__PURE__ */ o$1(function() {
        if (!m4) {
          var g4 = f2.elements, w3 = g4.reference, b4 = g4.popper;
          if (Ad(w3, b4)) {
            f2.rects = {
              reference: Z0(w3, et(b4), f2.options.strategy === "fixed"),
              popper: Qt(b4)
            }, f2.reset = false, f2.placement = f2.options.placement, f2.orderedModifiers.forEach(function(L2) {
              return f2.modifiersData[L2.name] = Object.assign({}, L2.data);
            });
            for (var x4 = 0; x4 < f2.orderedModifiers.length; x4++) {
              if (f2.reset === true) {
                f2.reset = false, x4 = -1;
                continue;
              }
              var E3 = f2.orderedModifiers[x4], R4 = E3.fn, S3 = E3.options, A3 = S3 === void 0 ? {} : S3, M3 = E3.name;
              typeof R4 == "function" && (f2 = R4({
                state: f2,
                options: A3,
                name: M3,
                instance: v3
              }) || f2);
            }
          }
        }
      }, "forceUpdate"),
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: J0(function() {
        return new Promise(function(h4) {
          v3.forceUpdate(), h4(f2);
        });
      }),
      destroy: /* @__PURE__ */ o$1(function() {
        p2(), m4 = true;
      }, "destroy")
    };
    if (!Ad(l4, s2))
      return v3;
    v3.setOptions(u2).then(function(h4) {
      !m4 && u2.onFirstUpdate && u2.onFirstUpdate(h4);
    });
    function y4() {
      f2.orderedModifiers.forEach(function(h4) {
        var g4 = h4.name, w3 = h4.options, b4 = w3 === void 0 ? {} : w3, x4 = h4.effect;
        if (typeof x4 == "function") {
          var E3 = x4({
            state: f2,
            name: g4,
            instance: v3,
            options: b4
          }), R4 = /* @__PURE__ */ o$1(function() {
          }, "noopFn");
          d2.push(E3 || R4);
        }
      });
    }
    o$1(y4, "runModifierEffects");
    function p2() {
      d2.forEach(function(h4) {
        return h4();
      }), d2 = [];
    }
    return o$1(p2, "cleanupModifierEffects"), v3;
  }, "createPopper");
}
var Md, Id = C$1(() => {
  xd();
  Ho();
  $0();
  Dr();
  Ed();
  Sd();
  Cd();
  Oe$1();
  Md = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  o$1(Ad, "areValidElements");
  o$1(Ld, "popperGenerator");
});
var I7, el, zd = C$1(() => {
  Id();
  Jf();
  gd();
  Zf();
  Vf();
  md();
  cd();
  bd();
  Gf();
  dd();
  G0();
  I7 = [Kf, hd, Xf, $f, pd, ld, wd, qf, fd], el = /* @__PURE__ */ Ld({
    defaultModifiers: I7
  });
});
var Td = C$1(() => {
  ke$1();
  G0();
  zd();
});
var Pd = H$1((hP, Hd) => {
  var z7 = typeof Element < "u", T7 = typeof Map == "function", H7 = typeof Set == "function", P7 = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function _o2(e3, t3) {
    if (e3 === t3) return true;
    if (e3 && t3 && typeof e3 == "object" && typeof t3 == "object") {
      if (e3.constructor !== t3.constructor) return false;
      var r3, n3, a4;
      if (Array.isArray(e3)) {
        if (r3 = e3.length, r3 != t3.length) return false;
        for (n3 = r3; n3-- !== 0; )
          if (!_o2(e3[n3], t3[n3])) return false;
        return true;
      }
      var i3;
      if (T7 && e3 instanceof Map && t3 instanceof Map) {
        if (e3.size !== t3.size) return false;
        for (i3 = e3.entries(); !(n3 = i3.next()).done; )
          if (!t3.has(n3.value[0])) return false;
        for (i3 = e3.entries(); !(n3 = i3.next()).done; )
          if (!_o2(n3.value[1], t3.get(n3.value[0]))) return false;
        return true;
      }
      if (H7 && e3 instanceof Set && t3 instanceof Set) {
        if (e3.size !== t3.size) return false;
        for (i3 = e3.entries(); !(n3 = i3.next()).done; )
          if (!t3.has(n3.value[0])) return false;
        return true;
      }
      if (P7 && ArrayBuffer.isView(e3) && ArrayBuffer.isView(t3)) {
        if (r3 = e3.length, r3 != t3.length) return false;
        for (n3 = r3; n3-- !== 0; )
          if (e3[n3] !== t3[n3]) return false;
        return true;
      }
      if (e3.constructor === RegExp) return e3.source === t3.source && e3.flags === t3.flags;
      if (e3.valueOf !== Object.prototype.valueOf && typeof e3.valueOf == "function" && typeof t3.valueOf == "function") return e3.valueOf() === t3.valueOf();
      if (e3.toString !== Object.prototype.toString && typeof e3.toString == "function" && typeof t3.toString == "function") return e3.toString() === t3.toString();
      if (a4 = Object.keys(e3), r3 = a4.length, r3 !== Object.keys(t3).length) return false;
      for (n3 = r3; n3-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(t3, a4[n3])) return false;
      if (z7 && e3 instanceof Element) return false;
      for (n3 = r3; n3-- !== 0; )
        if (!((a4[n3] === "_owner" || a4[n3] === "__v" || a4[n3] === "__o") && e3.$$typeof) && !_o2(e3[a4[n3]], t3[a4[n3]]))
          return false;
      return true;
    }
    return e3 !== e3 && t3 !== t3;
  }
  o$1(_o2, "equal");
  Hd.exports = /* @__PURE__ */ o$1(function(t3, r3) {
    try {
      return _o2(t3, r3);
    } catch (n3) {
      if ((n3.message || "").match(/stack|recursion/i))
        return console.warn("react-fast-compare cannot handle circular refs"), false;
      throw n3;
    }
  }, "isEqual");
});
var Od, k7, tl, Bd = C$1(() => {
  Td();
  Od = me$1(Pd());
  Nf();
  k7 = [], tl = /* @__PURE__ */ o$1(function(t3, r3, n3) {
    n3 === void 0 && (n3 = {});
    var a4 = reactExports.useRef(null), i3 = {
      onFirstUpdate: n3.onFirstUpdate,
      placement: n3.placement || "bottom",
      strategy: n3.strategy || "absolute",
      modifiers: n3.modifiers || k7
    }, c4 = reactExports.useState({
      styles: {
        popper: {
          position: i3.strategy,
          left: "0",
          top: "0"
        },
        arrow: {
          position: "absolute"
        }
      },
      attributes: {}
    }), l4 = c4[0], s2 = c4[1], u2 = reactExports.useMemo(function() {
      return {
        name: "updateState",
        enabled: true,
        phase: "write",
        fn: /* @__PURE__ */ o$1(function(v3) {
          var y4 = v3.state, p2 = Object.keys(y4.elements);
          reactDomExports.flushSync(function() {
            s2({
              styles: L0(p2.map(function(h4) {
                return [h4, y4.styles[h4] || {}];
              })),
              attributes: L0(p2.map(function(h4) {
                return [h4, y4.attributes[h4]];
              }))
            });
          });
        }, "fn"),
        requires: ["computeStyles"]
      };
    }, []), f2 = reactExports.useMemo(function() {
      var m4 = {
        onFirstUpdate: i3.onFirstUpdate,
        placement: i3.placement,
        strategy: i3.strategy,
        modifiers: [].concat(i3.modifiers, [u2, {
          name: "applyStyles",
          enabled: false
        }])
      };
      return (0, Od.default)(a4.current, m4) ? a4.current || m4 : (a4.current = m4, m4);
    }, [i3.onFirstUpdate, i3.placement, i3.strategy, i3.modifiers, u2]), d2 = reactExports.useRef();
    return I0(function() {
      d2.current && d2.current.setOptions(f2);
    }, [f2]), I0(function() {
      if (!(t3 == null || r3 == null)) {
        var m4 = n3.createPopper || el, v3 = m4(t3, r3, f2);
        return d2.current = v3, function() {
          v3.destroy(), d2.current = null;
        };
      }
    }, [t3, r3, n3.createPopper]), {
      state: d2.current ? d2.current.state : null,
      styles: l4.styles,
      attributes: l4.attributes,
      update: d2.current ? d2.current.update : null,
      forceUpdate: d2.current ? d2.current.forceUpdate : null
    };
  }, "usePopper");
});
var Nd = C$1(() => {
  Bd();
});
function _d(e3) {
  var t3 = reactExports.useRef(e3);
  return t3.current = e3, reactExports.useCallback(function() {
    return t3.current;
  }, []);
}
function B7(e3) {
  var t3 = e3.initial, r3 = e3.value, n3 = e3.onChange, a4 = n3 === void 0 ? O7 : n3;
  if (t3 === void 0 && r3 === void 0)
    throw new TypeError('Either "value" or "initial" variable must be set. Now both are undefined');
  var i3 = reactExports.useState(t3), c4 = i3[0], l4 = i3[1], s2 = _d(c4), u2 = reactExports.useCallback(function(d2) {
    var m4 = s2(), v3 = typeof d2 == "function" ? d2(m4) : d2;
    typeof v3.persist == "function" && v3.persist(), l4(v3), typeof a4 == "function" && a4(v3);
  }, [s2, a4]), f2 = r3 !== void 0;
  return [f2 ? r3 : c4, f2 ? a4 : u2];
}
function $d(e3, t3) {
  return e3 === void 0 && (e3 = 0), t3 === void 0 && (t3 = 0), function() {
    return {
      width: 0,
      height: 0,
      top: t3,
      right: e3,
      bottom: t3,
      left: e3,
      x: 0,
      y: 0,
      toJSON: /* @__PURE__ */ o$1(function() {
        return null;
      }, "toJSON")
    };
  };
}
function Vd(e3, t3) {
  var r3, n3, a4;
  e3 === void 0 && (e3 = {}), t3 === void 0 && (t3 = {});
  var i3 = Object.keys(Dd).reduce(function(T2, z2) {
    var k2;
    return W$1({}, T2, (k2 = {}, k2[z2] = T2[z2] !== void 0 ? T2[z2] : Dd[z2], k2));
  }, e3), c4 = reactExports.useMemo(
    function() {
      return [{
        name: "offset",
        options: {
          offset: i3.offset
        }
      }];
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    Array.isArray(i3.offset) ? i3.offset : []
  ), l4 = W$1({}, t3, {
    placement: t3.placement || i3.placement,
    modifiers: t3.modifiers || c4
  }), s2 = reactExports.useState(null), u2 = s2[0], f2 = s2[1], d2 = reactExports.useState(null), m4 = d2[0], v3 = d2[1], y4 = B7({
    initial: i3.defaultVisible,
    value: i3.visible,
    onChange: i3.onVisibleChange
  }), p2 = y4[0], h4 = y4[1], g4 = reactExports.useRef();
  reactExports.useEffect(function() {
    return function() {
      return clearTimeout(g4.current);
    };
  }, []);
  var w3 = tl(i3.followCursor ? Fd : u2, m4, l4), b4 = w3.styles, x4 = w3.attributes, E3 = ur(w3, N7), R4 = E3.update, S3 = _d({
    visible: p2,
    triggerRef: u2,
    tooltipRef: m4,
    finalConfig: i3
  }), A3 = reactExports.useCallback(
    function(T2) {
      return Array.isArray(i3.trigger) ? i3.trigger.includes(T2) : i3.trigger === T2;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    Array.isArray(i3.trigger) ? i3.trigger : [i3.trigger]
  ), M3 = reactExports.useCallback(function() {
    clearTimeout(g4.current), g4.current = window.setTimeout(function() {
      return h4(false);
    }, i3.delayHide);
  }, [i3.delayHide, h4]), L2 = reactExports.useCallback(function() {
    clearTimeout(g4.current), g4.current = window.setTimeout(function() {
      return h4(true);
    }, i3.delayShow);
  }, [i3.delayShow, h4]), P2 = reactExports.useCallback(function() {
    S3().visible ? M3() : L2();
  }, [S3, M3, L2]);
  reactExports.useEffect(function() {
    if (S3().finalConfig.closeOnOutsideClick) {
      var T2 = /* @__PURE__ */ o$1(function(k2) {
        var V2, F2 = S3(), j2 = F2.tooltipRef, O2 = F2.triggerRef, G2 = (k2.composedPath == null || (V2 = k2.composedPath()) == null ? void 0 : V2[0]) || k2.target;
        G2 instanceof Node && j2 != null && O2 != null && !j2.contains(G2) && !O2.contains(G2) && M3();
      }, "handleClickOutside");
      return document.addEventListener("mousedown", T2), function() {
        return document.removeEventListener("mousedown", T2);
      };
    }
  }, [S3, M3]), reactExports.useEffect(function() {
    if (!(u2 == null || !A3("click")))
      return u2.addEventListener("click", P2), function() {
        return u2.removeEventListener("click", P2);
      };
  }, [u2, A3, P2]), reactExports.useEffect(function() {
    if (!(u2 == null || !A3("double-click")))
      return u2.addEventListener("dblclick", P2), function() {
        return u2.removeEventListener("dblclick", P2);
      };
  }, [u2, A3, P2]), reactExports.useEffect(function() {
    if (!(u2 == null || !A3("right-click"))) {
      var T2 = /* @__PURE__ */ o$1(function(k2) {
        k2.preventDefault(), P2();
      }, "preventDefaultAndToggle");
      return u2.addEventListener("contextmenu", T2), function() {
        return u2.removeEventListener("contextmenu", T2);
      };
    }
  }, [u2, A3, P2]), reactExports.useEffect(function() {
    if (!(u2 == null || !A3("focus")))
      return u2.addEventListener("focus", L2), u2.addEventListener("blur", M3), function() {
        u2.removeEventListener("focus", L2), u2.removeEventListener("blur", M3);
      };
  }, [u2, A3, L2, M3]), reactExports.useEffect(function() {
    if (!(u2 == null || !A3("hover")))
      return u2.addEventListener("mouseenter", L2), u2.addEventListener("mouseleave", M3), function() {
        u2.removeEventListener("mouseenter", L2), u2.removeEventListener("mouseleave", M3);
      };
  }, [u2, A3, L2, M3]), reactExports.useEffect(function() {
    if (!(m4 == null || !A3("hover") || !S3().finalConfig.interactive))
      return m4.addEventListener("mouseenter", L2), m4.addEventListener("mouseleave", M3), function() {
        m4.removeEventListener("mouseenter", L2), m4.removeEventListener("mouseleave", M3);
      };
  }, [m4, A3, L2, M3, S3]);
  var _2 = E3 == null || (r3 = E3.state) == null || (n3 = r3.modifiersData) == null || (a4 = n3.hide) == null ? void 0 : a4.isReferenceHidden;
  reactExports.useEffect(function() {
    i3.closeOnTriggerHidden && _2 && M3();
  }, [i3.closeOnTriggerHidden, M3, _2]), reactExports.useEffect(function() {
    if (!i3.followCursor || u2 == null) return;
    function T2(z2) {
      var k2 = z2.clientX, V2 = z2.clientY;
      Fd.getBoundingClientRect = $d(k2, V2), R4 == null ? void 0 : R4();
    }
    return o$1(T2, "setMousePosition"), u2.addEventListener("mousemove", T2), function() {
      return u2.removeEventListener("mousemove", T2);
    };
  }, [i3.followCursor, u2, R4]), reactExports.useEffect(function() {
    if (!(m4 == null || R4 == null || i3.mutationObserverOptions == null)) {
      var T2 = new MutationObserver(R4);
      return T2.observe(m4, i3.mutationObserverOptions), function() {
        return T2.disconnect();
      };
    }
  }, [i3.mutationObserverOptions, m4, R4]);
  var D2 = /* @__PURE__ */ o$1(function(z2) {
    return z2 === void 0 && (z2 = {}), W$1({}, z2, {
      style: W$1({}, z2.style, b4.popper)
    }, x4.popper, {
      "data-popper-interactive": i3.interactive
    });
  }, "getTooltipProps"), K2 = /* @__PURE__ */ o$1(function(z2) {
    return z2 === void 0 && (z2 = {}), W$1({}, z2, x4.arrow, {
      style: W$1({}, z2.style, b4.arrow),
      "data-popper-arrow": true
    });
  }, "getArrowProps");
  return W$1({
    getArrowProps: K2,
    getTooltipProps: D2,
    setTooltipRef: v3,
    setTriggerRef: f2,
    tooltipRef: m4,
    triggerRef: u2,
    visible: p2
  }, E3);
}
var O7, N7, Fd, Dd, jd = C$1(() => {
  Bn();
  Kr();
  Nd();
  o$1(_d, "useGetLatest");
  O7 = /* @__PURE__ */ o$1(function() {
  }, "noop");
  o$1(B7, "useControlledState");
  o$1($d, "generateBoundingClientRect");
  N7 = ["styles", "attributes"], Fd = {
    getBoundingClientRect: $d()
  }, Dd = {
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
  o$1(Vd, "usePopperTooltip");
});
var Wd, Ge$1, Pt2, F7, D7, nl, qd = C$1(() => {
  Wd = me$1(Qr(), 1), Ge$1 = (0, Wd.default)(1e3)(
    (e3, t3, r3, n3 = 0) => t3.split("-")[0] === e3 ? r3 : n3
  ), Pt2 = 8, F7 = xr$3.div(
    {
      position: "absolute",
      borderStyle: "solid"
    },
    ({ placement: e3 }) => {
      let t3 = 0, r3 = 0;
      switch (true) {
        case (e3.startsWith("left") || e3.startsWith("right")): {
          r3 = 8;
          break;
        }
        case (e3.startsWith("top") || e3.startsWith("bottom")): {
          t3 = 8;
          break;
        }
      }
      return { transform: `translate3d(${t3}px, ${r3}px, 0px)` };
    },
    ({ theme: e3, color: t3, placement: r3 }) => ({
      bottom: `${Ge$1("top", r3, `${Pt2 * -1}px`, "auto")}`,
      top: `${Ge$1("bottom", r3, `${Pt2 * -1}px`, "auto")}`,
      right: `${Ge$1("left", r3, `${Pt2 * -1}px`, "auto")}`,
      left: `${Ge$1("right", r3, `${Pt2 * -1}px`, "auto")}`,
      borderBottomWidth: `${Ge$1("top", r3, "0", Pt2)}px`,
      borderTopWidth: `${Ge$1("bottom", r3, "0", Pt2)}px`,
      borderRightWidth: `${Ge$1("left", r3, "0", Pt2)}px`,
      borderLeftWidth: `${Ge$1("right", r3, "0", Pt2)}px`,
      borderTopColor: Ge$1(
        "top",
        r3,
        e3.color[t3] || t3 || e3.base === "light" ? fo$3(e3.background.app) : e3.background.app,
        "transparent"
      ),
      borderBottomColor: Ge$1(
        "bottom",
        r3,
        e3.color[t3] || t3 || e3.base === "light" ? fo$3(e3.background.app) : e3.background.app,
        "transparent"
      ),
      borderLeftColor: Ge$1(
        "left",
        r3,
        e3.color[t3] || t3 || e3.base === "light" ? fo$3(e3.background.app) : e3.background.app,
        "transparent"
      ),
      borderRightColor: Ge$1(
        "right",
        r3,
        e3.color[t3] || t3 || e3.base === "light" ? fo$3(e3.background.app) : e3.background.app,
        "transparent"
      )
    })
  ), D7 = xr$3.div(
    ({ hidden: e3 }) => ({
      display: e3 ? "none" : "inline-block",
      zIndex: 2147483647,
      colorScheme: "light dark"
    }),
    ({ theme: e3, color: t3, hasChrome: r3 }) => r3 ? {
      background: t3 && e3.color[t3] || t3 || e3.base === "light" ? fo$3(e3.background.app) : e3.background.app,
      filter: `
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,
      borderRadius: e3.appBorderRadius + 2,
      fontSize: e3.typography.size.s1
    } : {}
  ), nl = e.forwardRef(
    ({
      placement: e$1 = "top",
      hasChrome: t3 = true,
      children: r3,
      arrowProps: n3 = {},
      tooltipRef: a4,
      color: i3,
      withArrows: c4,
      ...l4
    }, s2) => /* @__PURE__ */ e.createElement(D7, { "data-testid": "tooltip", hasChrome: t3, ref: s2, ...l4, color: i3 }, t3 && c4 && /* @__PURE__ */ e.createElement(F7, { placement: e$1, ...n3, color: i3 }), r3)
  );
  nl.displayName = "Tooltip";
});
var al = {};
Zr(al, {
  WithToolTipState: () => ol,
  WithTooltip: () => ol,
  WithTooltipPure: () => Yd
});
const { global: W7 } = __STORYBOOK_MODULE_GLOBAL__;
var $o, U7, q7, Yd, ol, Vo = C$1(() => {
  jd();
  qd();
  ({ document: $o } = W7), U7 = xr$3.div`
  display: inline-block;
  cursor: ${(e3) => {
    var _a2;
    return e3.trigger === "hover" || ((_a2 = e3.trigger) == null ? void 0 : _a2.includes("hover")) ? "default" : "pointer";
  }};
`, q7 = xr$3.g`
  cursor: ${(e3) => {
    var _a2;
    return e3.trigger === "hover" || ((_a2 = e3.trigger) == null ? void 0 : _a2.includes("hover")) ? "default" : "pointer";
  }};
`, Yd = /* @__PURE__ */ o$1(({
    svg: e$1 = false,
    trigger: t3 = "click",
    closeOnOutsideClick: r3 = false,
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
    hasChrome: i3 = true,
    defaultVisible: c4 = false,
    withArrows: l4,
    offset: s2,
    tooltip: u2,
    children: f2,
    closeOnTriggerHidden: d2,
    mutationObserverOptions: m4,
    delayHide: v3 = t3 === "hover" ? 200 : 0,
    visible: y4,
    interactive: p2,
    delayShow: h4 = t3 === "hover" ? 400 : 0,
    strategy: g4,
    followCursor: w3,
    onVisibleChange: b4,
    ...x4
  }) => {
    let E3 = e$1 ? q7 : U7, {
      getArrowProps: R4,
      getTooltipProps: S3,
      setTooltipRef: A3,
      setTriggerRef: M3,
      visible: L2,
      state: P2
    } = Vd(
      {
        trigger: t3,
        placement: n3,
        defaultVisible: c4,
        delayHide: v3,
        interactive: p2,
        closeOnOutsideClick: r3,
        closeOnTriggerHidden: d2,
        onVisibleChange: b4,
        delayShow: h4,
        followCursor: w3,
        mutationObserverOptions: m4,
        visible: y4,
        offset: s2
      },
      {
        modifiers: a4,
        strategy: g4
      }
    ), _2 = L2 ? /* @__PURE__ */ e.createElement(
      nl,
      {
        placement: P2 == null ? void 0 : P2.placement,
        ref: A3,
        hasChrome: i3,
        arrowProps: R4(),
        withArrows: l4,
        ...S3()
      },
      typeof u2 == "function" ? u2({ onHide: /* @__PURE__ */ o$1(() => b4(false), "onHide") }) : u2
    ) : null;
    return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(E3, { trigger: t3, ref: M3, ...x4 }, f2), L2 && Pg.createPortal(_2, $o.body));
  }, "WithTooltipPure"), ol = /* @__PURE__ */ o$1(({
    startOpen: e$1 = false,
    onVisibleChange: t3,
    ...r3
  }) => {
    let [n3, a4] = reactExports.useState(e$1), i3 = reactExports.useCallback(
      (c4) => {
        t3 && t3(c4) === false || a4(c4);
      },
      [t3]
    );
    return reactExports.useEffect(() => {
      let c4 = /* @__PURE__ */ o$1(() => i3(false), "hide");
      $o.addEventListener("keydown", c4, false);
      let l4 = Array.from($o.getElementsByTagName("iframe")), s2 = [];
      return l4.forEach((u2) => {
        let f2 = /* @__PURE__ */ o$1(() => {
          try {
            u2.contentWindow.document && (u2.contentWindow.document.addEventListener("click", c4), s2.push(() => {
              try {
                u2.contentWindow.document.removeEventListener("click", c4);
              } catch {
              }
            }));
          } catch {
          }
        }, "bind");
        f2(), u2.addEventListener("load", f2), s2.push(() => {
          u2.removeEventListener("load", f2);
        });
      }), () => {
        $o.removeEventListener("keydown", c4), s2.forEach((u2) => {
          u2();
        });
      };
    }), /* @__PURE__ */ e.createElement(Yd, { ...r3, visible: n3, onVisibleChange: i3 });
  }, "WithToolTipState");
});
var J$1 = /* @__PURE__ */ o$1(({ ...e3 }, t3) => {
  let r3 = [e3.class, e3.className];
  return delete e3.class, e3.className = ["sbdocs", `sbdocs-${t3}`, ...r3].filter(Boolean).join(" "), e3;
}, "nameSpaceClassNames");
Kr();
Hl();
Hn();
function Pl(e3, t3) {
  e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3, ht(e3, t3);
}
o$1(Pl, "_inheritsLoose");
kl();
Hn();
function Ol(e3) {
  try {
    return Function.toString.call(e3).indexOf("[native code]") !== -1;
  } catch {
    return typeof e3 == "function";
  }
}
o$1(Ol, "_isNativeFunction");
function Ko() {
  try {
    var e3 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ko = /* @__PURE__ */ o$1(function() {
    return !!e3;
  }, "_isNativeReflectConstruct"))();
}
o$1(Ko, "_isNativeReflectConstruct");
Hn();
function Bl(e3, t3, r3) {
  if (Ko()) return Reflect.construct.apply(null, arguments);
  var n3 = [null];
  n3.push.apply(n3, t3);
  var a4 = new (e3.bind.apply(e3, n3))();
  return r3 && ht(a4, r3.prototype), a4;
}
o$1(Bl, "_construct");
function kn(e3) {
  var t3 = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return kn = /* @__PURE__ */ o$1(function(n3) {
    if (n3 === null || !Ol(n3)) return n3;
    if (typeof n3 != "function") throw new TypeError("Super expression must either be null or a function");
    if (t3 !== void 0) {
      if (t3.has(n3)) return t3.get(n3);
      t3.set(n3, a4);
    }
    function a4() {
      return Bl(n3, arguments, Pn(this).constructor);
    }
    return o$1(a4, "Wrapper"), a4.prototype = Object.create(n3.prototype, {
      constructor: {
        value: a4,
        enumerable: false,
        writable: true,
        configurable: true
      }
    }), ht(a4, n3);
  }, "_wrapNativeSuper"), kn(e3);
}
o$1(kn, "_wrapNativeSuper");
var Sp = {
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
function Cp() {
  for (var e3 = arguments.length, t3 = new Array(e3), r3 = 0; r3 < e3; r3++)
    t3[r3] = arguments[r3];
  var n3 = t3[0], a4 = [], i3;
  for (i3 = 1; i3 < t3.length; i3 += 1)
    a4.push(t3[i3]);
  return a4.forEach(function(c4) {
    n3 = n3.replace(/%[a-z]/, c4);
  }), n3;
}
o$1(Cp, "format");
var Ce$1 = /* @__PURE__ */ function(e3) {
  Pl(t3, e3);
  function t3(r3) {
    for (var n3, a4 = arguments.length, i3 = new Array(a4 > 1 ? a4 - 1 : 0), c4 = 1; c4 < a4; c4++)
      i3[c4 - 1] = arguments[c4];
    return n3 = e3.call(this, Cp.apply(void 0, [Sp[r3]].concat(i3))) || this, Tl(n3);
  }
  return o$1(t3, "PolishedError"), t3;
}(/* @__PURE__ */ kn(Error));
function Nl(e3, t3) {
  return e3.substr(-t3.length) === t3;
}
o$1(Nl, "endsWith");
var Mp = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
function Fl(e3) {
  if (typeof e3 != "string") return e3;
  var t3 = e3.match(Mp);
  return t3 ? parseFloat(e3) : e3;
}
o$1(Fl, "stripUnit");
var Ap = /* @__PURE__ */ o$1(function(t3) {
  return function(r3, n3) {
    n3 === void 0 && (n3 = "16px");
    var a4 = r3, i3 = n3;
    if (typeof r3 == "string") {
      if (!Nl(r3, "px"))
        throw new Ce$1(69, t3, r3);
      a4 = Fl(r3);
    }
    if (typeof n3 == "string") {
      if (!Nl(n3, "px"))
        throw new Ce$1(70, t3, n3);
      i3 = Fl(n3);
    }
    if (typeof a4 == "string")
      throw new Ce$1(71, r3, t3);
    if (typeof i3 == "string")
      throw new Ce$1(72, n3, t3);
    return "" + a4 / i3 + t3;
  };
}, "pxtoFactory"), _l = Ap;
_l("em");
_l("rem");
function Jo(e3) {
  return Math.round(e3 * 255);
}
o$1(Jo, "colorToInt");
function Lp(e3, t3, r3) {
  return Jo(e3) + "," + Jo(t3) + "," + Jo(r3);
}
o$1(Lp, "convertToInt");
function Jr(e3, t3, r3, n3) {
  if (n3 === void 0 && (n3 = Lp), t3 === 0)
    return n3(r3, r3, r3);
  var a4 = (e3 % 360 + 360) % 360 / 60, i3 = (1 - Math.abs(2 * r3 - 1)) * t3, c4 = i3 * (1 - Math.abs(a4 % 2 - 1)), l4 = 0, s2 = 0, u2 = 0;
  a4 >= 0 && a4 < 1 ? (l4 = i3, s2 = c4) : a4 >= 1 && a4 < 2 ? (l4 = c4, s2 = i3) : a4 >= 2 && a4 < 3 ? (s2 = i3, u2 = c4) : a4 >= 3 && a4 < 4 ? (s2 = c4, u2 = i3) : a4 >= 4 && a4 < 5 ? (l4 = c4, u2 = i3) : a4 >= 5 && a4 < 6 && (l4 = i3, u2 = c4);
  var f2 = r3 - i3 / 2, d2 = l4 + f2, m4 = s2 + f2, v3 = u2 + f2;
  return n3(d2, m4, v3);
}
o$1(Jr, "hslToRgb");
var Dl = {
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
function Ip(e3) {
  if (typeof e3 != "string") return e3;
  var t3 = e3.toLowerCase();
  return Dl[t3] ? "#" + Dl[t3] : e3;
}
o$1(Ip, "nameToHex");
var zp = /^#[a-fA-F0-9]{6}$/, Tp = /^#[a-fA-F0-9]{8}$/, Hp = /^#[a-fA-F0-9]{3}$/, Pp = /^#[a-fA-F0-9]{4}$/, Qo = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, kp = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, Op = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, Bp = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function cr(e3) {
  if (typeof e3 != "string")
    throw new Ce$1(3);
  var t3 = Ip(e3);
  if (t3.match(zp))
    return {
      red: parseInt("" + t3[1] + t3[2], 16),
      green: parseInt("" + t3[3] + t3[4], 16),
      blue: parseInt("" + t3[5] + t3[6], 16)
    };
  if (t3.match(Tp)) {
    var r3 = parseFloat((parseInt("" + t3[7] + t3[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t3[1] + t3[2], 16),
      green: parseInt("" + t3[3] + t3[4], 16),
      blue: parseInt("" + t3[5] + t3[6], 16),
      alpha: r3
    };
  }
  if (t3.match(Hp))
    return {
      red: parseInt("" + t3[1] + t3[1], 16),
      green: parseInt("" + t3[2] + t3[2], 16),
      blue: parseInt("" + t3[3] + t3[3], 16)
    };
  if (t3.match(Pp)) {
    var n3 = parseFloat((parseInt("" + t3[4] + t3[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t3[1] + t3[1], 16),
      green: parseInt("" + t3[2] + t3[2], 16),
      blue: parseInt("" + t3[3] + t3[3], 16),
      alpha: n3
    };
  }
  var a4 = Qo.exec(t3);
  if (a4)
    return {
      red: parseInt("" + a4[1], 10),
      green: parseInt("" + a4[2], 10),
      blue: parseInt("" + a4[3], 10)
    };
  var i3 = kp.exec(t3.substring(0, 50));
  if (i3)
    return {
      red: parseInt("" + i3[1], 10),
      green: parseInt("" + i3[2], 10),
      blue: parseInt("" + i3[3], 10),
      alpha: parseFloat("" + i3[4]) > 1 ? parseFloat("" + i3[4]) / 100 : parseFloat("" + i3[4])
    };
  var c4 = Op.exec(t3);
  if (c4) {
    var l4 = parseInt("" + c4[1], 10), s2 = parseInt("" + c4[2], 10) / 100, u2 = parseInt("" + c4[3], 10) / 100, f2 = "rgb(" + Jr(l4, s2, u2) + ")", d2 = Qo.exec(f2);
    if (!d2)
      throw new Ce$1(4, t3, f2);
    return {
      red: parseInt("" + d2[1], 10),
      green: parseInt("" + d2[2], 10),
      blue: parseInt("" + d2[3], 10)
    };
  }
  var m4 = Bp.exec(t3.substring(0, 50));
  if (m4) {
    var v3 = parseInt("" + m4[1], 10), y4 = parseInt("" + m4[2], 10) / 100, p2 = parseInt("" + m4[3], 10) / 100, h4 = "rgb(" + Jr(v3, y4, p2) + ")", g4 = Qo.exec(h4);
    if (!g4)
      throw new Ce$1(4, t3, h4);
    return {
      red: parseInt("" + g4[1], 10),
      green: parseInt("" + g4[2], 10),
      blue: parseInt("" + g4[3], 10),
      alpha: parseFloat("" + m4[4]) > 1 ? parseFloat("" + m4[4]) / 100 : parseFloat("" + m4[4])
    };
  }
  throw new Ce$1(5);
}
o$1(cr, "parseToRgb");
function Np(e3) {
  var t3 = e3.red / 255, r3 = e3.green / 255, n3 = e3.blue / 255, a4 = Math.max(t3, r3, n3), i3 = Math.min(t3, r3, n3), c4 = (a4 + i3) / 2;
  if (a4 === i3)
    return e3.alpha !== void 0 ? {
      hue: 0,
      saturation: 0,
      lightness: c4,
      alpha: e3.alpha
    } : {
      hue: 0,
      saturation: 0,
      lightness: c4
    };
  var l4, s2 = a4 - i3, u2 = c4 > 0.5 ? s2 / (2 - a4 - i3) : s2 / (a4 + i3);
  switch (a4) {
    case t3:
      l4 = (r3 - n3) / s2 + (r3 < n3 ? 6 : 0);
      break;
    case r3:
      l4 = (n3 - t3) / s2 + 2;
      break;
    default:
      l4 = (t3 - r3) / s2 + 4;
      break;
  }
  return l4 *= 60, e3.alpha !== void 0 ? {
    hue: l4,
    saturation: u2,
    lightness: c4,
    alpha: e3.alpha
  } : {
    hue: l4,
    saturation: u2,
    lightness: c4
  };
}
o$1(Np, "rgbToHsl");
function gt(e3) {
  return Np(cr(e3));
}
o$1(gt, "parseToHsl");
var Fp = /* @__PURE__ */ o$1(function(t3) {
  return t3.length === 7 && t3[1] === t3[2] && t3[3] === t3[4] && t3[5] === t3[6] ? "#" + t3[1] + t3[3] + t3[5] : t3;
}, "reduceHexValue"), ta = Fp;
function Nt2(e3) {
  var t3 = e3.toString(16);
  return t3.length === 1 ? "0" + t3 : t3;
}
o$1(Nt2, "numberToHex");
function ea(e3) {
  return Nt2(Math.round(e3 * 255));
}
o$1(ea, "colorToHex");
function Dp(e3, t3, r3) {
  return ta("#" + ea(e3) + ea(t3) + ea(r3));
}
o$1(Dp, "convertToHex");
function On(e3, t3, r3) {
  return Jr(e3, t3, r3, Dp);
}
o$1(On, "hslToHex");
function _p(e3, t3, r3) {
  if (typeof e3 == "number" && typeof t3 == "number" && typeof r3 == "number")
    return On(e3, t3, r3);
  if (typeof e3 == "object" && t3 === void 0 && r3 === void 0)
    return On(e3.hue, e3.saturation, e3.lightness);
  throw new Ce$1(1);
}
o$1(_p, "hsl");
function $p(e3, t3, r3, n3) {
  if (typeof e3 == "number" && typeof t3 == "number" && typeof r3 == "number" && typeof n3 == "number")
    return n3 >= 1 ? On(e3, t3, r3) : "rgba(" + Jr(e3, t3, r3) + "," + n3 + ")";
  if (typeof e3 == "object" && t3 === void 0 && r3 === void 0 && n3 === void 0)
    return e3.alpha >= 1 ? On(e3.hue, e3.saturation, e3.lightness) : "rgba(" + Jr(e3.hue, e3.saturation, e3.lightness) + "," + e3.alpha + ")";
  throw new Ce$1(2);
}
o$1($p, "hsla");
function ra(e3, t3, r3) {
  if (typeof e3 == "number" && typeof t3 == "number" && typeof r3 == "number")
    return ta("#" + Nt2(e3) + Nt2(t3) + Nt2(r3));
  if (typeof e3 == "object" && t3 === void 0 && r3 === void 0)
    return ta("#" + Nt2(e3.red) + Nt2(e3.green) + Nt2(e3.blue));
  throw new Ce$1(6);
}
o$1(ra, "rgb");
function Ft(e3, t3, r3, n3) {
  if (typeof e3 == "string" && typeof t3 == "number") {
    var a4 = cr(e3);
    return "rgba(" + a4.red + "," + a4.green + "," + a4.blue + "," + t3 + ")";
  } else {
    if (typeof e3 == "number" && typeof t3 == "number" && typeof r3 == "number" && typeof n3 == "number")
      return n3 >= 1 ? ra(e3, t3, r3) : "rgba(" + e3 + "," + t3 + "," + r3 + "," + n3 + ")";
    if (typeof e3 == "object" && t3 === void 0 && r3 === void 0 && n3 === void 0)
      return e3.alpha >= 1 ? ra(e3.red, e3.green, e3.blue) : "rgba(" + e3.red + "," + e3.green + "," + e3.blue + "," + e3.alpha + ")";
  }
  throw new Ce$1(7);
}
o$1(Ft, "rgba");
var Vp = /* @__PURE__ */ o$1(function(t3) {
  return typeof t3.red == "number" && typeof t3.green == "number" && typeof t3.blue == "number" && (typeof t3.alpha != "number" || typeof t3.alpha > "u");
}, "isRgb"), jp = /* @__PURE__ */ o$1(function(t3) {
  return typeof t3.red == "number" && typeof t3.green == "number" && typeof t3.blue == "number" && typeof t3.alpha == "number";
}, "isRgba"), Wp = /* @__PURE__ */ o$1(function(t3) {
  return typeof t3.hue == "number" && typeof t3.saturation == "number" && typeof t3.lightness == "number" && (typeof t3.alpha != "number" || typeof t3.alpha > "u");
}, "isHsl"), Up = /* @__PURE__ */ o$1(function(t3) {
  return typeof t3.hue == "number" && typeof t3.saturation == "number" && typeof t3.lightness == "number" && typeof t3.alpha == "number";
}, "isHsla");
function vt(e3) {
  if (typeof e3 != "object") throw new Ce$1(8);
  if (jp(e3)) return Ft(e3);
  if (Vp(e3)) return ra(e3);
  if (Up(e3)) return $p(e3);
  if (Wp(e3)) return _p(e3);
  throw new Ce$1(8);
}
o$1(vt, "toColorString");
function $l(e3, t3, r3) {
  return /* @__PURE__ */ o$1(function() {
    var a4 = r3.concat(Array.prototype.slice.call(arguments));
    return a4.length >= t3 ? e3.apply(this, a4) : $l(e3, t3, a4);
  }, "fn");
}
o$1($l, "curried");
function He$1(e3) {
  return $l(e3, e3.length, []);
}
o$1(He$1, "curry");
function qp(e3, t3) {
  if (t3 === "transparent") return t3;
  var r3 = gt(t3);
  return vt(W$1({}, r3, {
    hue: r3.hue + parseFloat(e3)
  }));
}
o$1(qp, "adjustHue");
He$1(qp);
function sr(e3, t3, r3) {
  return Math.max(e3, Math.min(t3, r3));
}
o$1(sr, "guard");
function Gp(e3, t3) {
  if (t3 === "transparent") return t3;
  var r3 = gt(t3);
  return vt(W$1({}, r3, {
    lightness: sr(0, 1, r3.lightness - parseFloat(e3))
  }));
}
o$1(Gp, "darken");
var Yp = He$1(Gp), wt = Yp;
function Xp(e3, t3) {
  if (t3 === "transparent") return t3;
  var r3 = gt(t3);
  return vt(W$1({}, r3, {
    saturation: sr(0, 1, r3.saturation - parseFloat(e3))
  }));
}
o$1(Xp, "desaturate");
He$1(Xp);
function Zp(e3, t3) {
  if (t3 === "transparent") return t3;
  var r3 = gt(t3);
  return vt(W$1({}, r3, {
    lightness: sr(0, 1, r3.lightness + parseFloat(e3))
  }));
}
o$1(Zp, "lighten");
var Kp = He$1(Zp), na = Kp;
function Jp(e3, t3, r3) {
  if (t3 === "transparent") return r3;
  if (r3 === "transparent") return t3;
  if (e3 === 0) return r3;
  var n3 = cr(t3), a4 = W$1({}, n3, {
    alpha: typeof n3.alpha == "number" ? n3.alpha : 1
  }), i3 = cr(r3), c4 = W$1({}, i3, {
    alpha: typeof i3.alpha == "number" ? i3.alpha : 1
  }), l4 = a4.alpha - c4.alpha, s2 = parseFloat(e3) * 2 - 1, u2 = s2 * l4 === -1 ? s2 : s2 + l4, f2 = 1 + s2 * l4, d2 = (u2 / f2 + 1) / 2, m4 = 1 - d2, v3 = {
    red: Math.floor(a4.red * d2 + c4.red * m4),
    green: Math.floor(a4.green * d2 + c4.green * m4),
    blue: Math.floor(a4.blue * d2 + c4.blue * m4),
    alpha: a4.alpha * parseFloat(e3) + c4.alpha * (1 - parseFloat(e3))
  };
  return Ft(v3);
}
o$1(Jp, "mix");
var Qp = He$1(Jp), Vl = Qp;
function e2(e3, t3) {
  if (t3 === "transparent") return t3;
  var r3 = cr(t3), n3 = typeof r3.alpha == "number" ? r3.alpha : 1, a4 = W$1({}, r3, {
    alpha: sr(0, 1, (n3 * 100 + parseFloat(e3) * 100) / 100)
  });
  return Ft(a4);
}
o$1(e2, "opacify");
He$1(e2);
function t2(e3, t3) {
  if (t3 === "transparent") return t3;
  var r3 = gt(t3);
  return vt(W$1({}, r3, {
    saturation: sr(0, 1, r3.saturation + parseFloat(e3))
  }));
}
o$1(t2, "saturate");
He$1(t2);
function r2(e3, t3) {
  return t3 === "transparent" ? t3 : vt(W$1({}, gt(t3), {
    hue: parseFloat(e3)
  }));
}
o$1(r2, "setHue");
He$1(r2);
function n2(e3, t3) {
  return t3 === "transparent" ? t3 : vt(W$1({}, gt(t3), {
    lightness: parseFloat(e3)
  }));
}
o$1(n2, "setLightness");
He$1(n2);
function o2(e3, t3) {
  return t3 === "transparent" ? t3 : vt(W$1({}, gt(t3), {
    saturation: parseFloat(e3)
  }));
}
o$1(o2, "setSaturation");
He$1(o2);
function a2(e3, t3) {
  return t3 === "transparent" ? t3 : Vl(parseFloat(e3), "rgb(0, 0, 0)", t3);
}
o$1(a2, "shade");
He$1(a2);
function i2(e3, t3) {
  return t3 === "transparent" ? t3 : Vl(parseFloat(e3), "rgb(255, 255, 255)", t3);
}
o$1(i2, "tint");
He$1(i2);
function l2(e3, t3) {
  if (t3 === "transparent") return t3;
  var r3 = cr(t3), n3 = typeof r3.alpha == "number" ? r3.alpha : 1, a4 = W$1({}, r3, {
    alpha: sr(0, 1, +(n3 * 100 - parseFloat(e3) * 100).toFixed(2) / 100)
  });
  return Ft(a4);
}
o$1(l2, "transparentize");
var c2 = He$1(l2), we$1 = c2;
var Ne$1 = /* @__PURE__ */ o$1(({ theme: e3 }) => ({
  margin: "20px 0 8px",
  padding: 0,
  cursor: "text",
  position: "relative",
  color: e3.color.defaultText,
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
}), "headerCommon"), at = /* @__PURE__ */ o$1(({ theme: e3 }) => ({
  lineHeight: 1,
  margin: "0 2px",
  padding: "3px 5px",
  whiteSpace: "nowrap",
  borderRadius: 3,
  fontSize: e3.typography.size.s2 - 1,
  border: e3.base === "light" ? `1px solid ${e3.color.mediumlight}` : `1px solid ${e3.color.darker}`,
  color: e3.base === "light" ? we$1(0.1, e3.color.defaultText) : we$1(0.3, e3.color.defaultText),
  backgroundColor: e3.base === "light" ? e3.color.lighter : e3.color.border
}), "codeCommon"), N$1 = /* @__PURE__ */ o$1(({ theme: e3 }) => ({
  fontFamily: e3.typography.fonts.base,
  fontSize: e3.typography.size.s3,
  margin: 0,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  WebkitOverflowScrolling: "touch"
}), "withReset"), Me$1 = {
  margin: "16px 0"
};
var jl = xr$3.div(N$1);
var Wl = /* @__PURE__ */ o$1(({
  href: e$1 = "",
  ...t3
}) => {
  let n3 = /^\//.test(e$1) ? `./?path=${e$1}` : e$1, i3 = /^#.*/.test(e$1) ? "_self" : "_top";
  return /* @__PURE__ */ e.createElement("a", { href: n3, target: i3, ...t3 });
}, "Link");
var oa = xr$3(Wl)(N$1, ({ theme: e3 }) => ({
  fontSize: "inherit",
  lineHeight: "24px",
  color: e3.color.secondary,
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
var aa = xr$3.blockquote(N$1, Me$1, ({ theme: e3 }) => ({
  borderLeft: `4px solid ${e3.color.medium}`,
  padding: "0 15px",
  color: e3.color.dark,
  "& > :first-of-type": {
    marginTop: 0
  },
  "& > :last-child": {
    marginBottom: 0
  }
}));
un();
var j5 = /* @__PURE__ */ o$1((e3) => typeof e3 == "string", "isReactChildString");
var yh = /[\n\r]/g, Rh = xr$3.code(
  ({ theme: e3 }) => ({
    // from reset
    fontFamily: e3.typography.fonts.mono,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    display: "inline-block",
    paddingLeft: 2,
    paddingRight: 2,
    verticalAlign: "baseline",
    color: "inherit"
  }),
  at
), xh = xr$3(sn)(({ theme: e3 }) => ({
  // DocBlocks-specific styling and overrides
  fontFamily: e3.typography.fonts.mono,
  fontSize: `${e3.typography.size.s2 - 1}px`,
  lineHeight: "19px",
  margin: "25px 0 40px",
  borderRadius: e3.appBorderRadius,
  boxShadow: e3.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
  "pre.prismjs": {
    padding: 20,
    background: "inherit"
  }
})), ii = /* @__PURE__ */ o$1(({
  className: e$1,
  children: t3,
  ...r3
}) => {
  let n3 = (e$1 || "").match(/lang-(\S+)/), a4 = reactExports.Children.toArray(t3);
  return a4.filter(j5).some((c4) => c4.match(yh)) ? /* @__PURE__ */ e.createElement(
    xh,
    {
      bordered: true,
      copyable: true,
      language: (n3 == null ? void 0 : n3[1]) ?? "text",
      format: false,
      ...r3
    },
    t3
  ) : /* @__PURE__ */ e.createElement(Rh, { ...r3, className: e$1 }, a4);
}, "Code");
var li = xr$3.dl(N$1, Me$1, {
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
var ci = xr$3.div(N$1);
var si = xr$3.h1(N$1, Ne$1, ({ theme: e3 }) => ({
  fontSize: `${e3.typography.size.l1}px`,
  fontWeight: e3.typography.weight.bold
}));
var ui = xr$3.h2(N$1, Ne$1, ({ theme: e3 }) => ({
  fontSize: `${e3.typography.size.m2}px`,
  paddingBottom: 4,
  borderBottom: `1px solid ${e3.appBorderColor}`
}));
var fi = xr$3.h3(N$1, Ne$1, ({ theme: e3 }) => ({
  fontSize: `${e3.typography.size.m1}px`
}));
var di = xr$3.h4(N$1, Ne$1, ({ theme: e3 }) => ({
  fontSize: `${e3.typography.size.s3}px`
}));
var pi = xr$3.h5(N$1, Ne$1, ({ theme: e3 }) => ({
  fontSize: `${e3.typography.size.s2}px`
}));
var mi = xr$3.h6(N$1, Ne$1, ({ theme: e3 }) => ({
  fontSize: `${e3.typography.size.s2}px`,
  color: e3.color.dark
}));
var hi = xr$3.hr(({ theme: e3 }) => ({
  border: "0 none",
  borderTop: `1px solid ${e3.appBorderColor}`,
  height: 4,
  padding: 0
}));
var gi = xr$3.img({
  maxWidth: "100%"
});
var vi = xr$3.li(N$1, ({ theme: e3 }) => ({
  fontSize: e3.typography.size.s2,
  color: e3.color.defaultText,
  lineHeight: "24px",
  "& + li": {
    marginTop: ".25em"
  },
  "& ul, & ol": {
    marginTop: ".25em",
    marginBottom: 0
  },
  "& code": at({ theme: e3 })
}));
var Oh = {
  paddingLeft: 30,
  "& :first-of-type": {
    marginTop: 0
  },
  "& :last-child": {
    marginBottom: 0
  }
}, wi = xr$3.ol(N$1, Me$1, Oh, {
  listStyle: "decimal"
});
var bi = xr$3.p(N$1, Me$1, ({ theme: e3 }) => ({
  fontSize: e3.typography.size.s2,
  lineHeight: "24px",
  color: e3.color.defaultText,
  "& code": at({ theme: e3 })
}));
var yi = xr$3.pre(N$1, Me$1, ({ theme: e3 }) => ({
  // reset
  fontFamily: e3.typography.fonts.mono,
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
var Ri = xr$3.span(N$1, ({ theme: e3 }) => ({
  "&.frame": {
    display: "block",
    overflow: "hidden",
    "& > span": {
      border: `1px solid ${e3.color.medium}`,
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
      color: e3.color.darkest,
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
var xi = xr$3.title(at);
var Ei = xr$3.table(N$1, Me$1, ({ theme: e3 }) => ({
  fontSize: e3.typography.size.s2,
  lineHeight: "24px",
  padding: 0,
  borderCollapse: "collapse",
  "& tr": {
    borderTop: `1px solid ${e3.appBorderColor}`,
    backgroundColor: e3.appContentBg,
    margin: 0,
    padding: 0
  },
  "& tr:nth-of-type(2n)": {
    backgroundColor: e3.base === "dark" ? e3.color.darker : e3.color.lighter
  },
  "& tr th": {
    fontWeight: "bold",
    color: e3.color.defaultText,
    border: `1px solid ${e3.appBorderColor}`,
    margin: 0,
    padding: "6px 13px"
  },
  "& tr td": {
    border: `1px solid ${e3.appBorderColor}`,
    color: e3.color.defaultText,
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
var Vh = {
  paddingLeft: 30,
  "& :first-of-type": {
    marginTop: 0
  },
  "& :last-child": {
    marginBottom: 0
  }
}, Si = xr$3.ul(N$1, Me$1, Vh, { listStyle: "disc" });
var Ci = {
  h1: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(si, { ...J$1(e$1, "h1") }), "h1"),
  h2: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(ui, { ...J$1(e$1, "h2") }), "h2"),
  h3: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(fi, { ...J$1(e$1, "h3") }), "h3"),
  h4: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(di, { ...J$1(e$1, "h4") }), "h4"),
  h5: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(pi, { ...J$1(e$1, "h5") }), "h5"),
  h6: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(mi, { ...J$1(e$1, "h6") }), "h6"),
  pre: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(yi, { ...J$1(e$1, "pre") }), "pre"),
  a: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(oa, { ...J$1(e$1, "a") }), "a"),
  hr: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(hi, { ...J$1(e$1, "hr") }), "hr"),
  dl: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(li, { ...J$1(e$1, "dl") }), "dl"),
  blockquote: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(aa, { ...J$1(e$1, "blockquote") }), "blockquote"),
  table: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(Ei, { ...J$1(e$1, "table") }), "table"),
  img: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(gi, { ...J$1(e$1, "img") }), "img"),
  div: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(ci, { ...J$1(e$1, "div") }), "div"),
  span: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(Ri, { ...J$1(e$1, "span") }), "span"),
  li: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(vi, { ...J$1(e$1, "li") }), "li"),
  ul: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(Si, { ...J$1(e$1, "ul") }), "ul"),
  ol: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(wi, { ...J$1(e$1, "ol") }), "ol"),
  p: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(bi, { ...J$1(e$1, "p") }), "p"),
  code: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(ii, { ...J$1(e$1, "code") }), "code"),
  tt: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(xi, { ...J$1(e$1, "tt") }), "tt"),
  resetwrapper: /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(jl, { ...J$1(e$1, "resetwrapper") }), "resetwrapper")
};
var qh = xr$3.div(
  ({ theme: e3, compact: t3 }) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: e3.typography.size.s1,
    fontWeight: e3.typography.weight.bold,
    lineHeight: "12px",
    minWidth: 20,
    borderRadius: 20,
    padding: t3 ? "4px 7px" : "4px 10px"
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
  ({ theme: e3, status: t3 }) => {
    switch (t3) {
      case "critical":
        return {
          color: e3.color.critical,
          background: e3.background.critical
        };
      case "negative":
        return {
          color: e3.color.negativeText,
          background: e3.background.negative,
          boxShadow: e3.base === "light" ? `inset 0 0 0 1px ${we$1(0.9, e3.color.negativeText)}` : "none"
        };
      case "warning":
        return {
          color: e3.color.warningText,
          background: e3.background.warning,
          boxShadow: e3.base === "light" ? `inset 0 0 0 1px ${we$1(0.9, e3.color.warningText)}` : "none"
        };
      case "neutral":
        return {
          color: e3.textMutedColor,
          background: e3.base === "light" ? e3.background.app : e3.barBg,
          boxShadow: `inset 0 0 0 1px ${we$1(0.8, e3.textMutedColor)}`
        };
      case "positive":
        return {
          color: e3.color.positiveText,
          background: e3.background.positive,
          boxShadow: e3.base === "light" ? `inset 0 0 0 1px ${we$1(0.9, e3.color.positiveText)}` : "none"
        };
      case "active":
        return {
          color: e3.color.secondary,
          background: e3.background.hoverable,
          boxShadow: `inset 0 0 0 1px ${we$1(0.9, e3.color.secondary)}`
        };
      default:
        return {};
    }
  }
), Gh = /* @__PURE__ */ o$1(({ ...e$1 }) => /* @__PURE__ */ e.createElement(qh, { ...e$1 }), "Badge");
var q5 = /* @__PURE__ */ reactExports.forwardRef(({ color: e3 = "currentColor", size: t3 = 14, ...r3 }, n3) => /* @__PURE__ */ reactExports.createElement(
  "svg",
  {
    width: t3,
    height: t3,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n3,
    ...r3
  },
  /* @__PURE__ */ reactExports.createElement(
    "path",
    {
      d: "M10.139 8.725l1.36-1.323a.568.568 0 00.151-.54.534.534 0 00-.377-.396l-2.705-.708 2.22-4.976a.568.568 0 00-.15-.666.497.497 0 00-.648.008L5.464 4.05l.708.71 2.848-2.47-1.64 3.677.697.697 2.164.567-.81.787.708.708zM2.523 6.6a.566.566 0 00-.177.544.534.534 0 00.382.41l2.782.721-1.494 5.013a.563.563 0 00.217.627.496.496 0 00.629-.06l3.843-3.736-.708-.707-2.51 2.44 1.137-3.814-.685-.685-2.125-.55.844-.731-.71-.71L2.524 6.6zM1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.708-.708l-11-11z",
      fill: e3
    }
  )
));
var G5 = /* @__PURE__ */ reactExports.forwardRef(({ color: e3 = "currentColor", size: t3 = 14, ...r3 }, n3) => /* @__PURE__ */ reactExports.createElement(
  "svg",
  {
    width: t3,
    height: t3,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n3,
    ...r3
  },
  /* @__PURE__ */ reactExports.createElement(
    "path",
    {
      d: "M1.854 1.146a.5.5 0 10-.708.708L6.293 7l-5.147 5.146a.5.5 0 00.708.708L7 7.707l5.146 5.147a.5.5 0 00.708-.708L7.707 7l5.147-5.146a.5.5 0 00-.708-.708L7 6.293 1.854 1.146z",
      fill: e3
    }
  )
));
var Y5 = /* @__PURE__ */ reactExports.forwardRef(({ color: e3 = "currentColor", size: t3 = 14, ...r3 }, n3) => /* @__PURE__ */ reactExports.createElement(
  "svg",
  {
    width: t3,
    height: t3,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n3,
    ...r3
  },
  /* @__PURE__ */ reactExports.createElement(
    "path",
    {
      d: "M11.104 7.354l-5.5 5.5a.5.5 0 01-.708-.708L10.043 7 4.896 1.854a.5.5 0 11.708-.708l5.5 5.5a.5.5 0 010 .708z",
      fill: e3
    }
  )
));
var Yh = 0, Xh = /* @__PURE__ */ o$1((e3) => e3.button === Yh && !e3.altKey && !e3.ctrlKey && !e3.metaKey && !e3.shiftKey, "isPlainLeftClick"), Zh = /* @__PURE__ */ o$1(
  (e3, t3) => {
    Xh(e3) && (e3.preventDefault(), t3(e3));
  },
  "cancelled"
), Kh = xr$3.span(
  ({ withArrow: e3 }) => e3 ? {
    "> svg:last-of-type": {
      height: "0.7em",
      width: "0.7em",
      marginRight: 0,
      marginLeft: "0.25em",
      bottom: "auto",
      verticalAlign: "inherit"
    }
  } : {},
  ({ containsIcon: e3 }) => e3 ? {
    svg: {
      height: "1em",
      width: "1em",
      verticalAlign: "middle",
      position: "relative",
      bottom: 0,
      marginRight: 0
    }
  } : {}
), Jh = xr$3.a(
  ({ theme: e3 }) => ({
    display: "inline-block",
    transition: "all 150ms ease-out",
    textDecoration: "none",
    color: e3.color.secondary,
    "&:hover, &:focus": {
      cursor: "pointer",
      color: wt(0.07, e3.color.secondary),
      "svg path:not([fill])": {
        fill: wt(0.07, e3.color.secondary)
      }
    },
    "&:active": {
      color: wt(0.1, e3.color.secondary),
      "svg path:not([fill])": {
        fill: wt(0.1, e3.color.secondary)
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
        fill: e3.color.secondary
      }
    }
  }),
  ({ theme: e3, secondary: t3, tertiary: r3 }) => {
    let n3;
    return t3 && (n3 = [e3.textMutedColor, e3.color.dark, e3.color.darker]), r3 && (n3 = [e3.color.dark, e3.color.darkest, e3.textMutedColor]), n3 ? {
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
  ({ nochrome: e3 }) => e3 ? {
    color: "inherit",
    "&:hover, &:active": {
      color: "inherit",
      textDecoration: "underline"
    }
  } : {},
  ({ theme: e3, inverse: t3 }) => t3 ? {
    color: e3.color.lightest,
    ":not([fill])": {
      fill: e3.color.lightest
    },
    "&:hover": {
      color: e3.color.lighter,
      "svg path:not([fill])": {
        fill: e3.color.lighter
      }
    },
    "&:active": {
      color: e3.color.light,
      "svg path:not([fill])": {
        fill: e3.color.light
      }
    }
  } : {},
  ({ isButton: e3 }) => e3 ? {
    border: 0,
    borderRadius: 0,
    background: "none",
    padding: 0,
    fontSize: "inherit"
  } : {}
), Ai = /* @__PURE__ */ o$1(({
  cancel: e$1 = true,
  children: t3,
  onClick: r3 = void 0,
  withArrow: n3 = false,
  containsIcon: a4 = false,
  className: i3 = void 0,
  style: c4 = void 0,
  ...l4
}) => /* @__PURE__ */ e.createElement(
  Jh,
  {
    ...l4,
    onClick: r3 && e$1 ? (s2) => Zh(s2, r3) : r3,
    className: i3
  },
  /* @__PURE__ */ e.createElement(Kh, { withArrow: n3, containsIcon: a4 }, t3, n3 && /* @__PURE__ */ e.createElement(Y5, null))
), "Link");
var eg = xr$3.div(({ theme: e3 }) => ({
  fontSize: `${e3.typography.size.s2}px`,
  lineHeight: "1.6",
  h1: {
    fontSize: `${e3.typography.size.l1}px`,
    fontWeight: e3.typography.weight.bold
  },
  h2: {
    fontSize: `${e3.typography.size.m2}px`,
    borderBottom: `1px solid ${e3.appBorderColor}`
  },
  h3: {
    fontSize: `${e3.typography.size.m1}px`
  },
  h4: {
    fontSize: `${e3.typography.size.s3}px`
  },
  h5: {
    fontSize: `${e3.typography.size.s2}px`
  },
  h6: {
    fontSize: `${e3.typography.size.s2}px`,
    color: e3.color.dark
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
    color: e3.color.secondary,
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
    borderTop: `1px solid ${e3.appBorderColor}`,
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
    borderLeft: `4px solid ${e3.color.medium}`,
    padding: "0 15px",
    color: e3.color.dark,
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
      borderTop: `1px solid ${e3.appBorderColor}`,
      backgroundColor: "white",
      margin: 0,
      padding: 0,
      "& th": {
        fontWeight: "bold",
        border: `1px solid ${e3.appBorderColor}`,
        textAlign: "left",
        margin: 0,
        padding: "6px 13px"
      },
      "& td": {
        border: `1px solid ${e3.appBorderColor}`,
        textAlign: "left",
        margin: 0,
        padding: "6px 13px"
      },
      "&:nth-of-type(2n)": {
        backgroundColor: e3.color.lighter
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
      border: `1px solid ${e3.color.medium}`,
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
      color: e3.color.darkest,
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
    border: `1px solid ${e3.color.mediumlight}`,
    backgroundColor: e3.color.lighter,
    borderRadius: 3,
    color: e3.base === "dark" ? e3.color.darkest : e3.color.dark
  }
}));
var Ut = [], xr = null, ng = reactExports.lazy(async () => {
  let { SyntaxHighlighter: e$1 } = await Promise.resolve().then(() => (un(), ai));
  return Ut.length > 0 && (Ut.forEach((t3) => {
    e$1.registerLanguage(...t3);
  }), Ut = []), xr === null && (xr = e$1), {
    default: /* @__PURE__ */ o$1((t3) => /* @__PURE__ */ e.createElement(e$1, { ...t3 }), "default")
  };
}), og = reactExports.lazy(async () => {
  let [{ SyntaxHighlighter: e$1 }, { formatter: t3 }] = await Promise.all([
    Promise.resolve().then(() => (un(), ai)),
    Promise.resolve().then(() => (eu(), Q5))
  ]);
  return Ut.length > 0 && (Ut.forEach((r3) => {
    e$1.registerLanguage(...r3);
  }), Ut = []), xr === null && (xr = e$1), {
    default: /* @__PURE__ */ o$1((r3) => /* @__PURE__ */ e.createElement(e$1, { ...r3, formatter: t3 }), "default")
  };
}), ru = /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(reactExports.Suspense, { fallback: /* @__PURE__ */ e.createElement("div", null) }, e$1.format !== false ? /* @__PURE__ */ e.createElement(og, { ...e$1 }) : /* @__PURE__ */ e.createElement(ng, { ...e$1 })), "SyntaxHighlighter");
ru.registerLanguage = (...e3) => {
  if (xr !== null) {
    xr.registerLanguage(...e3);
    return;
  }
  Ut.push(e3);
};
un();
Xa();
var Ro = {};
Zr(Ro, {
  Close: () => h0,
  Content: () => d0,
  Description: () => m0,
  Dialog: () => Ji,
  DialogClose: () => l0,
  DialogContent: () => n0,
  DialogDescription: () => i0,
  DialogOverlay: () => r0,
  DialogPortal: () => t0,
  DialogTitle: () => a0,
  DialogTrigger: () => Qi,
  Overlay: () => f0,
  Portal: () => u0,
  Root: () => s0,
  Title: () => p0,
  Trigger: () => Rv,
  WarningProvider: () => vv,
  createDialogScope: () => uv
});
function Er(e3, t3, { checkForDefaultPrevented: r3 = true } = {}) {
  return /* @__PURE__ */ o$1(function(a4) {
    if (e3 == null ? void 0 : e3(a4), r3 === false || !a4.defaultPrevented)
      return t3 == null ? void 0 : t3(a4);
  }, "handleEvent");
}
o$1(Er, "composeEventHandlers");
function nu(e3, t3) {
  if (typeof e3 == "function")
    return e3(t3);
  e3 != null && (e3.current = t3);
}
o$1(nu, "setRef");
function Li(...e3) {
  return (t3) => {
    let r3 = false, n3 = e3.map((a4) => {
      let i3 = nu(a4, t3);
      return !r3 && typeof i3 == "function" && (r3 = true), i3;
    });
    if (r3)
      return () => {
        for (let a4 = 0; a4 < n3.length; a4++) {
          let i3 = n3[a4];
          typeof i3 == "function" ? i3() : nu(e3[a4], null);
        }
      };
  };
}
o$1(Li, "composeRefs");
function Xe$1(...e3) {
  return reactExports.useCallback(Li(...e3), e3);
}
o$1(Xe$1, "useComposedRefs");
function iu(e3, t3) {
  let r3 = reactExports.createContext(t3), n3 = /* @__PURE__ */ o$1((i3) => {
    let { children: c4, ...l4 } = i3, s2 = reactExports.useMemo(() => l4, Object.values(l4));
    return /* @__PURE__ */ jsxRuntimeExports.jsx(r3.Provider, { value: s2, children: c4 });
  }, "Provider");
  n3.displayName = e3 + "Provider";
  function a4(i3) {
    let c4 = reactExports.useContext(r3);
    if (c4) return c4;
    if (t3 !== void 0) return t3;
    throw new Error(`\`${i3}\` must be used within \`${e3}\``);
  }
  return o$1(a4, "useContext2"), [n3, a4];
}
o$1(iu, "createContext2");
function lu(e3, t3 = []) {
  let r3 = [];
  function n3(i3, c4) {
    let l4 = reactExports.createContext(c4), s2 = r3.length;
    r3 = [...r3, c4];
    let u2 = /* @__PURE__ */ o$1((d2) => {
      var _a2;
      let { scope: m4, children: v3, ...y4 } = d2, p2 = ((_a2 = m4 == null ? void 0 : m4[e3]) == null ? void 0 : _a2[s2]) || l4, h4 = reactExports.useMemo(() => y4, Object.values(y4));
      return /* @__PURE__ */ jsxRuntimeExports.jsx(p2.Provider, { value: h4, children: v3 });
    }, "Provider");
    u2.displayName = i3 + "Provider";
    function f2(d2, m4) {
      var _a2;
      let v3 = ((_a2 = m4 == null ? void 0 : m4[e3]) == null ? void 0 : _a2[s2]) || l4, y4 = reactExports.useContext(v3);
      if (y4) return y4;
      if (c4 !== void 0) return c4;
      throw new Error(`\`${d2}\` must be used within \`${i3}\``);
    }
    return o$1(f2, "useContext2"), [u2, f2];
  }
  o$1(n3, "createContext3");
  let a4 = /* @__PURE__ */ o$1(() => {
    let i3 = r3.map((c4) => reactExports.createContext(c4));
    return /* @__PURE__ */ o$1(function(l4) {
      let s2 = (l4 == null ? void 0 : l4[e3]) || i3;
      return reactExports.useMemo(
        () => ({ [`__scope${e3}`]: { ...l4, [e3]: s2 } }),
        [l4, s2]
      );
    }, "useScope");
  }, "createScope");
  return a4.scopeName = e3, [n3, ag(a4, ...t3)];
}
o$1(lu, "createContextScope");
function ag(...e3) {
  let t3 = e3[0];
  if (e3.length === 1) return t3;
  let r3 = /* @__PURE__ */ o$1(() => {
    let n3 = e3.map((a4) => ({
      useScope: a4(),
      scopeName: a4.scopeName
    }));
    return /* @__PURE__ */ o$1(function(i3) {
      let c4 = n3.reduce((l4, { useScope: s2, scopeName: u2 }) => {
        let d2 = s2(i3)[`__scope${u2}`];
        return { ...l4, ...d2 };
      }, {});
      return reactExports.useMemo(() => ({ [`__scope${t3.scopeName}`]: c4 }), [c4]);
    }, "useComposedScopes");
  }, "createScope");
  return r3.scopeName = t3.scopeName, r3;
}
o$1(ag, "composeContextScopes");
var ct = (globalThis == null ? void 0 : globalThis.document) ? reactExports.useLayoutEffect : () => {
};
var ig = Ve$3[" useId ".trim().toString()] || (() => {
}), lg = 0;
function ao(e3) {
  let [t3, r3] = reactExports.useState(ig());
  return ct(() => {
    e3 || r3((n3) => n3 ?? String(lg++));
  }, [e3]), e3 || (t3 ? `radix-${t3}` : "");
}
o$1(ao, "useId");
var cg = Ve$3[" useInsertionEffect ".trim().toString()] || ct;
function su({
  prop: e3,
  defaultProp: t3,
  onChange: r3 = /* @__PURE__ */ o$1(() => {
  }, "onChange"),
  caller: n3
}) {
  let [a4, i3, c4] = sg({
    defaultProp: t3,
    onChange: r3
  }), l4 = e3 !== void 0, s2 = l4 ? e3 : a4;
  {
    let f2 = reactExports.useRef(e3 !== void 0);
    reactExports.useEffect(() => {
      let d2 = f2.current;
      d2 !== l4 && console.warn(
        `${n3} is changing from ${d2 ? "controlled" : "uncontrolled"} to ${l4 ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), f2.current = l4;
    }, [l4, n3]);
  }
  let u2 = reactExports.useCallback(
    (f2) => {
      var _a2;
      if (l4) {
        let d2 = ug(f2) ? f2(e3) : f2;
        d2 !== e3 && ((_a2 = c4.current) == null ? void 0 : _a2.call(c4, d2));
      } else
        i3(f2);
    },
    [l4, e3, i3, c4]
  );
  return [s2, u2];
}
o$1(su, "useControllableState");
function sg({
  defaultProp: e3,
  onChange: t3
}) {
  let [r3, n3] = reactExports.useState(e3), a4 = reactExports.useRef(r3), i3 = reactExports.useRef(t3);
  return cg(() => {
    i3.current = t3;
  }, [t3]), reactExports.useEffect(() => {
    var _a2;
    a4.current !== r3 && ((_a2 = i3.current) == null ? void 0 : _a2.call(i3, r3), a4.current = r3);
  }, [r3, a4]), [r3, n3, i3];
}
o$1(sg, "useUncontrolledState");
function ug(e3) {
  return typeof e3 == "function";
}
o$1(ug, "isFunction");
function lo(e3, t3, { checkForDefaultPrevented: r3 = true } = {}) {
  return /* @__PURE__ */ o$1(function(a4) {
    if (e3 == null ? void 0 : e3(a4), r3 === false || !a4.defaultPrevented)
      return t3 == null ? void 0 : t3(a4);
  }, "handleEvent");
}
o$1(lo, "composeEventHandlers");
// @__NO_SIDE_EFFECTS__
function fn(e3) {
  let t3 = /* @__PURE__ */ fg(e3), r3 = reactExports.forwardRef((n3, a4) => {
    let { children: i3, ...c4 } = n3, l4 = reactExports.Children.toArray(i3), s2 = l4.find(pg);
    if (s2) {
      let u2 = s2.props.children, f2 = l4.map((d2) => d2 === s2 ? reactExports.Children.count(u2) > 1 ? reactExports.Children.only(null) : reactExports.isValidElement(u2) ? u2.props.children : null : d2);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(t3, { ...c4, ref: a4, children: reactExports.isValidElement(u2) ? reactExports.cloneElement(u2, void 0, f2) : null });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(t3, { ...c4, ref: a4, children: i3 });
  });
  return r3.displayName = `${e3}.Slot`, r3;
}
o$1(fn, "createSlot");
var fu = /* @__PURE__ */ fn("Slot");
// @__NO_SIDE_EFFECTS__
function fg(e3) {
  let t3 = reactExports.forwardRef((r3, n3) => {
    let { children: a4, ...i3 } = r3;
    if (reactExports.isValidElement(a4)) {
      let c4 = hg(a4), l4 = mg(i3, a4.props);
      return a4.type !== reactExports.Fragment && (l4.ref = n3 ? Li(n3, c4) : c4), reactExports.cloneElement(a4, l4);
    }
    return reactExports.Children.count(a4) > 1 ? reactExports.Children.only(null) : null;
  });
  return t3.displayName = `${e3}.SlotClone`, t3;
}
o$1(fg, "createSlotClone");
var dg = Symbol("radix.slottable");
function pg(e3) {
  return reactExports.isValidElement(e3) && typeof e3.type == "function" && "__radixId" in e3.type && e3.type.__radixId === dg;
}
o$1(pg, "isSlottable");
function mg(e3, t3) {
  let r3 = { ...t3 };
  for (let n3 in t3) {
    let a4 = e3[n3], i3 = t3[n3];
    /^on[A-Z]/.test(n3) ? a4 && i3 ? r3[n3] = (...l4) => {
      i3(...l4), a4(...l4);
    } : a4 && (r3[n3] = a4) : n3 === "style" ? r3[n3] = { ...a4, ...i3 } : n3 === "className" && (r3[n3] = [a4, i3].filter(Boolean).join(" "));
  }
  return { ...e3, ...r3 };
}
o$1(mg, "mergeProps");
function hg(e3) {
  var _a2, _b2;
  let t3 = (_a2 = Object.getOwnPropertyDescriptor(e3.props, "ref")) == null ? void 0 : _a2.get, r3 = t3 && "isReactWarning" in t3 && t3.isReactWarning;
  return r3 ? e3.ref : (t3 = (_b2 = Object.getOwnPropertyDescriptor(e3, "ref")) == null ? void 0 : _b2.get, r3 = t3 && "isReactWarning" in t3 && t3.isReactWarning, r3 ? e3.props.ref : e3.props.ref || e3.ref);
}
o$1(hg, "getElementRef");
var vg = [
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
], Pe$1 = vg.reduce((e3, t3) => {
  let r3 = /* @__PURE__ */ fn(`Primitive.${t3}`), n3 = reactExports.forwardRef((a4, i3) => {
    let { asChild: c4, ...l4 } = a4, s2 = c4 ? r3 : t3;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = true), /* @__PURE__ */ jsxRuntimeExports.jsx(s2, { ...l4, ref: i3 });
  });
  return n3.displayName = `Primitive.${t3}`, { ...e3, [t3]: n3 };
}, {});
function mu(e3, t3) {
  e3 && reactDomExports.flushSync(() => e3.dispatchEvent(t3));
}
o$1(mu, "dispatchDiscreteCustomEvent");
function St(e3) {
  let t3 = reactExports.useRef(e3);
  return reactExports.useEffect(() => {
    t3.current = e3;
  }), reactExports.useMemo(() => (...r3) => {
    var _a2;
    return (_a2 = t3.current) == null ? void 0 : _a2.call(t3, ...r3);
  }, []);
}
o$1(St, "useCallbackRef");
function gu(e3, t3 = globalThis == null ? void 0 : globalThis.document) {
  let r3 = St(e3);
  reactExports.useEffect(() => {
    let n3 = /* @__PURE__ */ o$1((a4) => {
      a4.key === "Escape" && r3(a4);
    }, "handleKeyDown");
    return t3.addEventListener("keydown", n3, { capture: true }), () => t3.removeEventListener("keydown", n3, { capture: true });
  }, [r3, t3]);
}
o$1(gu, "useEscapeKeydown");
var wg = "DismissableLayer", zi = "dismissableLayer.update", bg = "dismissableLayer.pointerDownOutside", yg = "dismissableLayer.focusOutside", vu, yu = reactExports.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Ti = reactExports.forwardRef(
  (e3, t3) => {
    let {
      disableOutsidePointerEvents: r3 = false,
      onEscapeKeyDown: n3,
      onPointerDownOutside: a4,
      onFocusOutside: i3,
      onInteractOutside: c4,
      onDismiss: l4,
      ...s2
    } = e3, u2 = reactExports.useContext(yu), [f2, d2] = reactExports.useState(null), m4 = (f2 == null ? void 0 : f2.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, v3] = reactExports.useState({}), y4 = Xe$1(t3, (S3) => d2(
      S3
    )), p2 = Array.from(u2.layers), [h4] = [...u2.layersWithOutsidePointerEventsDisabled].slice(-1), g4 = p2.indexOf(h4), w3 = f2 ? p2.indexOf(f2) : -1, b4 = u2.layersWithOutsidePointerEventsDisabled.size > 0, x4 = w3 >= g4, E3 = Eg((S3) => {
      let A3 = S3.target, M3 = [...u2.branches].some((L2) => L2.contains(A3));
      !x4 || M3 || (a4 == null ? void 0 : a4(S3), c4 == null ? void 0 : c4(S3), S3.defaultPrevented || (l4 == null ? void 0 : l4()));
    }, m4), R4 = Sg((S3) => {
      let A3 = S3.target;
      [...u2.branches].some((L2) => L2.contains(A3)) || (i3 == null ? void 0 : i3(S3), c4 == null ? void 0 : c4(S3), S3.defaultPrevented || (l4 == null ? void 0 : l4()));
    }, m4);
    return gu((S3) => {
      w3 === u2.layers.size - 1 && (n3 == null ? void 0 : n3(S3), !S3.defaultPrevented && l4 && (S3.preventDefault(), l4()));
    }, m4), reactExports.useEffect(() => {
      if (f2)
        return r3 && (u2.layersWithOutsidePointerEventsDisabled.size === 0 && (vu = m4.body.style.pointerEvents, m4.body.style.pointerEvents = "none"), u2.layersWithOutsidePointerEventsDisabled.add(f2)), u2.layers.add(f2), wu(), () => {
          r3 && u2.layersWithOutsidePointerEventsDisabled.size === 1 && (m4.body.style.pointerEvents = vu);
        };
    }, [f2, m4, r3, u2]), reactExports.useEffect(() => () => {
      f2 && (u2.layers.delete(f2), u2.layersWithOutsidePointerEventsDisabled.delete(f2), wu());
    }, [f2, u2]), reactExports.useEffect(() => {
      let S3 = /* @__PURE__ */ o$1(() => v3({}), "handleUpdate");
      return document.addEventListener(zi, S3), () => document.removeEventListener(zi, S3);
    }, []), /* @__PURE__ */ jsxRuntimeExports.jsx(
      Pe$1.div,
      {
        ...s2,
        ref: y4,
        style: {
          pointerEvents: b4 ? x4 ? "auto" : "none" : void 0,
          ...e3.style
        },
        onFocusCapture: lo(e3.onFocusCapture, R4.onFocusCapture),
        onBlurCapture: lo(e3.onBlurCapture, R4.onBlurCapture),
        onPointerDownCapture: lo(
          e3.onPointerDownCapture,
          E3.onPointerDownCapture
        )
      }
    );
  }
);
Ti.displayName = wg;
var Rg = "DismissableLayerBranch", xg = reactExports.forwardRef((e3, t3) => {
  let r3 = reactExports.useContext(yu), n3 = reactExports.useRef(null), a4 = Xe$1(t3, n3);
  return reactExports.useEffect(() => {
    let i3 = n3.current;
    if (i3)
      return r3.branches.add(i3), () => {
        r3.branches.delete(i3);
      };
  }, [r3.branches]), /* @__PURE__ */ jsxRuntimeExports.jsx(Pe$1.div, { ...e3, ref: a4 });
});
xg.displayName = Rg;
function Eg(e3, t3 = globalThis == null ? void 0 : globalThis.document) {
  let r3 = St(e3), n3 = reactExports.useRef(false), a4 = reactExports.useRef(() => {
  });
  return reactExports.useEffect(() => {
    let i3 = /* @__PURE__ */ o$1((l4) => {
      if (l4.target && !n3.current) {
        let u2 = /* @__PURE__ */ o$1(function() {
          Ru(
            bg,
            r3,
            f2,
            { discrete: true }
          );
        }, "handleAndDispatchPointerDownOutsideEvent2");
        let f2 = { originalEvent: l4 };
        l4.pointerType === "touch" ? (t3.removeEventListener("click", a4.current), a4.current = u2, t3.addEventListener("click", a4.current, { once: true })) : u2();
      } else
        t3.removeEventListener("click", a4.current);
      n3.current = false;
    }, "handlePointerDown"), c4 = window.setTimeout(() => {
      t3.addEventListener("pointerdown", i3);
    }, 0);
    return () => {
      window.clearTimeout(c4), t3.removeEventListener("pointerdown", i3), t3.removeEventListener("click", a4.current);
    };
  }, [t3, r3]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: /* @__PURE__ */ o$1(() => n3.current = true, "onPointerDownCapture")
  };
}
o$1(Eg, "usePointerDownOutside");
function Sg(e3, t3 = globalThis == null ? void 0 : globalThis.document) {
  let r3 = St(e3), n3 = reactExports.useRef(false);
  return reactExports.useEffect(() => {
    let a4 = /* @__PURE__ */ o$1((i3) => {
      i3.target && !n3.current && Ru(yg, r3, { originalEvent: i3 }, {
        discrete: false
      });
    }, "handleFocus");
    return t3.addEventListener("focusin", a4), () => t3.removeEventListener("focusin", a4);
  }, [t3, r3]), {
    onFocusCapture: /* @__PURE__ */ o$1(() => n3.current = true, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ o$1(() => n3.current = false, "onBlurCapture")
  };
}
o$1(Sg, "useFocusOutside");
function wu() {
  let e3 = new CustomEvent(zi);
  document.dispatchEvent(e3);
}
o$1(wu, "dispatchUpdate");
function Ru(e3, t3, r3, { discrete: n3 }) {
  let a4 = r3.originalEvent.target, i3 = new CustomEvent(e3, { bubbles: false, cancelable: true, detail: r3 });
  t3 && a4.addEventListener(e3, t3, { once: true }), n3 ? mu(a4, i3) : a4.dispatchEvent(i3);
}
o$1(Ru, "handleAndDispatchCustomEvent");
var Hi = "focusScope.autoFocusOnMount", Pi = "focusScope.autoFocusOnUnmount", xu = { bubbles: false, cancelable: true }, Mg = "FocusScope", ki = reactExports.forwardRef(
  (e3, t3) => {
    let {
      loop: r3 = false,
      trapped: n3 = false,
      onMountAutoFocus: a4,
      onUnmountAutoFocus: i3,
      ...c4
    } = e3, [l4, s2] = reactExports.useState(null), u2 = St(a4), f2 = St(i3), d2 = reactExports.useRef(null), m4 = Xe$1(t3, (p2) => s2(p2)), v3 = reactExports.useRef({
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
        let w3 = /* @__PURE__ */ o$1(function(R4) {
          if (v3.paused || !l4) return;
          let S3 = R4.target;
          l4.contains(S3) ? d2.current = S3 : Ct(d2.current, { select: true });
        }, "handleFocusIn2"), b4 = /* @__PURE__ */ o$1(function(R4) {
          if (v3.paused || !l4) return;
          let S3 = R4.relatedTarget;
          S3 !== null && (l4.contains(S3) || Ct(d2.current, { select: true }));
        }, "handleFocusOut2"), x4 = /* @__PURE__ */ o$1(function(R4) {
          if (document.activeElement === document.body)
            for (let A3 of R4)
              A3.removedNodes.length > 0 && Ct(l4);
        }, "handleMutations2");
        document.addEventListener("focusin", w3), document.addEventListener("focusout", b4);
        let E3 = new MutationObserver(x4);
        return l4 && E3.observe(l4, { childList: true, subtree: true }), () => {
          document.removeEventListener("focusin", w3), document.removeEventListener("focusout", b4), E3.disconnect();
        };
      }
    }, [n3, l4, v3.paused]), reactExports.useEffect(() => {
      if (l4) {
        Su.add(v3);
        let p2 = document.activeElement;
        if (!l4.contains(p2)) {
          let g4 = new CustomEvent(Hi, xu);
          l4.addEventListener(Hi, u2), l4.dispatchEvent(g4), g4.defaultPrevented || (Ag(Hg(Mu(l4)), { select: true }), document.activeElement === p2 && Ct(l4));
        }
        return () => {
          l4.removeEventListener(Hi, u2), setTimeout(() => {
            let g4 = new CustomEvent(Pi, xu);
            l4.addEventListener(Pi, f2), l4.dispatchEvent(g4), g4.defaultPrevented || Ct(p2 ?? document.body, { select: true }), l4.removeEventListener(
              Pi,
              f2
            ), Su.remove(v3);
          }, 0);
        };
      }
    }, [l4, u2, f2, v3]);
    let y4 = reactExports.useCallback(
      (p2) => {
        if (!r3 && !n3 || v3.paused) return;
        let h4 = p2.key === "Tab" && !p2.altKey && !p2.ctrlKey && !p2.metaKey, g4 = document.activeElement;
        if (h4 && g4) {
          let w3 = p2.currentTarget, [b4, x4] = Lg(w3);
          b4 && x4 ? !p2.shiftKey && g4 === x4 ? (p2.preventDefault(), r3 && Ct(b4, { select: true })) : p2.shiftKey && g4 === b4 && (p2.preventDefault(), r3 && Ct(x4, { select: true })) : g4 === w3 && p2.preventDefault();
        }
      },
      [r3, n3, v3.paused]
    );
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Pe$1.div, { tabIndex: -1, ...c4, ref: m4, onKeyDown: y4 });
  }
);
ki.displayName = Mg;
function Ag(e3, { select: t3 = false } = {}) {
  let r3 = document.activeElement;
  for (let n3 of e3)
    if (Ct(n3, { select: t3 }), document.activeElement !== r3) return;
}
o$1(Ag, "focusFirst");
function Lg(e3) {
  let t3 = Mu(e3), r3 = Eu(t3, e3), n3 = Eu(t3.reverse(), e3);
  return [r3, n3];
}
o$1(Lg, "getTabbableEdges");
function Mu(e3) {
  let t3 = [], r3 = document.createTreeWalker(e3, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ o$1((n3) => {
      let a4 = n3.tagName === "INPUT" && n3.type === "hidden";
      return n3.disabled || n3.hidden || a4 ? NodeFilter.FILTER_SKIP : n3.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; r3.nextNode(); ) t3.push(r3.currentNode);
  return t3;
}
o$1(Mu, "getTabbableCandidates");
function Eu(e3, t3) {
  for (let r3 of e3)
    if (!Ig(r3, { upTo: t3 })) return r3;
}
o$1(Eu, "findVisible");
function Ig(e3, { upTo: t3 }) {
  if (getComputedStyle(e3).visibility === "hidden") return true;
  for (; e3; ) {
    if (t3 !== void 0 && e3 === t3) return false;
    if (getComputedStyle(e3).display === "none") return true;
    e3 = e3.parentElement;
  }
  return false;
}
o$1(Ig, "isHidden");
function zg(e3) {
  return e3 instanceof HTMLInputElement && "select" in e3;
}
o$1(zg, "isSelectableInput");
function Ct(e3, { select: t3 = false } = {}) {
  if (e3 && e3.focus) {
    let r3 = document.activeElement;
    e3.focus({ preventScroll: true }), e3 !== r3 && zg(e3) && t3 && e3.select();
  }
}
o$1(Ct, "focus");
var Su = Tg();
function Tg() {
  let e3 = [];
  return {
    add(t3) {
      let r3 = e3[0];
      t3 !== r3 && (r3 == null ? void 0 : r3.pause()), e3 = Cu(e3, t3), e3.unshift(t3);
    },
    remove(t3) {
      var _a2;
      e3 = Cu(e3, t3), (_a2 = e3[0]) == null ? void 0 : _a2.resume();
    }
  };
}
o$1(Tg, "createFocusScopesStack");
function Cu(e3, t3) {
  let r3 = [...e3], n3 = r3.indexOf(t3);
  return n3 !== -1 && r3.splice(n3, 1), r3;
}
o$1(Cu, "arrayRemove");
function Hg(e3) {
  return e3.filter((t3) => t3.tagName !== "A");
}
o$1(Hg, "removeLinks");
var Og = "Portal", Oi = reactExports.forwardRef((e3, t3) => {
  var _a2;
  let { container: r3, ...n3 } = e3, [a4, i3] = reactExports.useState(false);
  ct(() => i3(true), []);
  let c4 = r3 || a4 && ((_a2 = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : _a2.body);
  return c4 ? Pg.createPortal(/* @__PURE__ */ jsxRuntimeExports.jsx(Pe$1.div, { ...n3, ref: t3 }), c4) : null;
});
Oi.displayName = Og;
function Bg(e3, t3) {
  return reactExports.useReducer((r3, n3) => t3[r3][n3] ?? r3, e3);
}
o$1(Bg, "useStateMachine");
var dn = /* @__PURE__ */ o$1((e3) => {
  let { present: t3, children: r3 } = e3, n3 = Ng(t3), a4 = typeof r3 == "function" ? r3({ present: n3.isPresent }) : reactExports.Children.only(r3), i3 = Xe$1(
    n3.ref,
    Fg(a4)
  );
  return typeof r3 == "function" || n3.isPresent ? reactExports.cloneElement(a4, { ref: i3 }) : null;
}, "Presence");
dn.displayName = "Presence";
function Ng(e3) {
  let [t3, r3] = reactExports.useState(), n3 = reactExports.useRef(null), a4 = reactExports.useRef(e3), i3 = reactExports.useRef("none"), c4 = e3 ? "mounted" : "unmounted", [l4, s2] = Bg(c4, {
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
    let u2 = so(n3.current);
    i3.current = l4 === "mounted" ? u2 : "none";
  }, [l4]), ct(() => {
    let u2 = n3.current, f2 = a4.current;
    if (f2 !== e3) {
      let m4 = i3.current, v3 = so(u2);
      e3 ? s2("MOUNT") : v3 === "none" || (u2 == null ? void 0 : u2.display) === "none" ? s2("UNMOUNT") : s2(f2 && m4 !== v3 ? "ANIMATION_OUT" : "UNMOUNT"), a4.current = e3;
    }
  }, [e3, s2]), ct(() => {
    if (t3) {
      let u2, f2 = t3.ownerDocument.defaultView ?? window, d2 = /* @__PURE__ */ o$1((v3) => {
        let p2 = so(n3.current).includes(v3.animationName);
        if (v3.target === t3 && p2 && (s2("ANIMATION_END"), !a4.current)) {
          let h4 = t3.style.animationFillMode;
          t3.style.animationFillMode = "forwards", u2 = f2.setTimeout(() => {
            t3.style.animationFillMode === "forwards" && (t3.style.animationFillMode = h4);
          });
        }
      }, "handleAnimationEnd"), m4 = /* @__PURE__ */ o$1((v3) => {
        v3.target === t3 && (i3.current = so(n3.current));
      }, "handleAnimationStart");
      return t3.addEventListener("animationstart", m4), t3.addEventListener("animationcancel", d2), t3.addEventListener("animationend", d2), () => {
        f2.clearTimeout(u2), t3.removeEventListener("animationstart", m4), t3.removeEventListener("animationcancel", d2), t3.removeEventListener("animationend", d2);
      };
    } else
      s2("ANIMATION_END");
  }, [t3, s2]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l4),
    ref: reactExports.useCallback((u2) => {
      n3.current = u2 ? getComputedStyle(u2) : null, r3(u2);
    }, [])
  };
}
o$1(Ng, "usePresence");
function so(e3) {
  return (e3 == null ? void 0 : e3.animationName) || "none";
}
o$1(so, "getAnimationName");
function Fg(e3) {
  var _a2, _b2;
  let t3 = (_a2 = Object.getOwnPropertyDescriptor(e3.props, "ref")) == null ? void 0 : _a2.get, r3 = t3 && "isReactWarning" in t3 && t3.isReactWarning;
  return r3 ? e3.ref : (t3 = (_b2 = Object.getOwnPropertyDescriptor(e3, "ref")) == null ? void 0 : _b2.get, r3 = t3 && "isReactWarning" in t3 && t3.isReactWarning, r3 ? e3.props.ref : e3.props.ref || e3.ref);
}
o$1(Fg, "getElementRef");
var Bi = 0;
function zu() {
  reactExports.useEffect(() => {
    let e3 = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e3[0] ?? Lu()), document.body.insertAdjacentElement("beforeend", e3[1] ?? Lu()), Bi++, () => {
      Bi === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t3) => t3.remove()), Bi--;
    };
  }, []);
}
o$1(zu, "useFocusGuards");
function Lu() {
  let e3 = document.createElement("span");
  return e3.setAttribute("data-radix-focus-guard", ""), e3.tabIndex = 0, e3.style.outline = "none", e3.style.opacity = "0", e3.style.position = "fixed", e3.style.pointerEvents = "none", e3;
}
o$1(Lu, "createFocusGuard");
var ze$1 = /* @__PURE__ */ o$1(function() {
  return ze$1 = Object.assign || /* @__PURE__ */ o$1(function(t3) {
    for (var r3, n3 = 1, a4 = arguments.length; n3 < a4; n3++) {
      r3 = arguments[n3];
      for (var i3 in r3) Object.prototype.hasOwnProperty.call(r3, i3) && (t3[i3] = r3[i3]);
    }
    return t3;
  }, "__assign"), ze$1.apply(this, arguments);
}, "__assign");
function uo(e3, t3) {
  var r3 = {};
  for (var n3 in e3) Object.prototype.hasOwnProperty.call(e3, n3) && t3.indexOf(n3) < 0 && (r3[n3] = e3[n3]);
  if (e3 != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a4 = 0, n3 = Object.getOwnPropertySymbols(e3); a4 < n3.length; a4++)
      t3.indexOf(n3[a4]) < 0 && Object.prototype.propertyIsEnumerable.call(e3, n3[a4]) && (r3[n3[a4]] = e3[n3[a4]]);
  return r3;
}
o$1(uo, "__rest");
function Tu(e3, t3, r3) {
  if (r3 || arguments.length === 2) for (var n3 = 0, a4 = t3.length, i3; n3 < a4; n3++)
    (i3 || !(n3 in t3)) && (i3 || (i3 = Array.prototype.slice.call(t3, 0, n3)), i3[n3] = t3[n3]);
  return e3.concat(i3 || Array.prototype.slice.call(t3));
}
o$1(Tu, "__spreadArray");
var qt = "right-scroll-bar-position", Gt = "width-before-scroll-bar", Ni = "with-scroll-bars-hidden", Fi = "--removed-body-scroll-bar-size";
function fo(e3, t3) {
  return typeof e3 == "function" ? e3(t3) : e3 && (e3.current = t3), e3;
}
o$1(fo, "assignRef");
function Hu(e3, t3) {
  var r3 = reactExports.useState(function() {
    return {
      // value
      value: e3,
      // last callback
      callback: t3,
      // "memoized" public interface
      facade: {
        get current() {
          return r3.value;
        },
        set current(n3) {
          var a4 = r3.value;
          a4 !== n3 && (r3.value = n3, r3.callback(n3, a4));
        }
      }
    };
  })[0];
  return r3.callback = t3, r3.facade;
}
o$1(Hu, "useCallbackRef");
var _g = typeof window < "u" ? reactExports.useLayoutEffect : reactExports.useEffect, Pu = /* @__PURE__ */ new WeakMap();
function Di(e3, t3) {
  var r3 = Hu(t3 || null, function(n3) {
    return e3.forEach(function(a4) {
      return fo(a4, n3);
    });
  });
  return _g(function() {
    var n3 = Pu.get(r3);
    if (n3) {
      var a4 = new Set(n3), i3 = new Set(e3), c4 = r3.current;
      a4.forEach(function(l4) {
        i3.has(l4) || fo(l4, null);
      }), i3.forEach(function(l4) {
        a4.has(l4) || fo(l4, c4);
      });
    }
    Pu.set(r3, e3);
  }, [e3]), r3;
}
o$1(Di, "useMergeRefs");
function $g(e3) {
  return e3;
}
o$1($g, "ItoI");
function Vg(e3, t3) {
  t3 === void 0 && (t3 = $g);
  var r3 = [], n3 = false, a4 = {
    read: /* @__PURE__ */ o$1(function() {
      if (n3)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r3.length ? r3[r3.length - 1] : e3;
    }, "read"),
    useMedium: /* @__PURE__ */ o$1(function(i3) {
      var c4 = t3(i3, n3);
      return r3.push(c4), function() {
        r3 = r3.filter(function(l4) {
          return l4 !== c4;
        });
      };
    }, "useMedium"),
    assignSyncMedium: /* @__PURE__ */ o$1(function(i3) {
      for (n3 = true; r3.length; ) {
        var c4 = r3;
        r3 = [], c4.forEach(i3);
      }
      r3 = {
        push: /* @__PURE__ */ o$1(function(l4) {
          return i3(l4);
        }, "push"),
        filter: /* @__PURE__ */ o$1(function() {
          return r3;
        }, "filter")
      };
    }, "assignSyncMedium"),
    assignMedium: /* @__PURE__ */ o$1(function(i3) {
      n3 = true;
      var c4 = [];
      if (r3.length) {
        var l4 = r3;
        r3 = [], l4.forEach(i3), c4 = r3;
      }
      var s2 = /* @__PURE__ */ o$1(function() {
        var f2 = c4;
        c4 = [], f2.forEach(i3);
      }, "executeQueue"), u2 = /* @__PURE__ */ o$1(function() {
        return Promise.resolve().then(s2);
      }, "cycle");
      u2(), r3 = {
        push: /* @__PURE__ */ o$1(function(f2) {
          c4.push(f2), u2();
        }, "push"),
        filter: /* @__PURE__ */ o$1(function(f2) {
          return c4 = c4.filter(f2), r3;
        }, "filter")
      };
    }, "assignMedium")
  };
  return a4;
}
o$1(Vg, "innerCreateMedium");
function _i(e3) {
  e3 === void 0 && (e3 = {});
  var t3 = Vg(null);
  return t3.options = ze$1({ async: true, ssr: false }, e3), t3;
}
o$1(_i, "createSidecarMedium");
var Ou = /* @__PURE__ */ o$1(function(e3) {
  var t3 = e3.sideCar, r3 = uo(e3, ["sideCar"]);
  if (!t3)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n3 = t3.read();
  if (!n3)
    throw new Error("Sidecar medium not found");
  return reactExports.createElement(n3, ze$1({}, r3));
}, "SideCar");
Ou.isSideCarExport = true;
function $i(e3, t3) {
  return e3.useMedium(t3), Ou;
}
o$1($i, "exportSidecar");
var mo = _i();
var Vi = /* @__PURE__ */ o$1(function() {
}, "nothing"), pn = reactExports.forwardRef(function(e3, t3) {
  var r3 = reactExports.useRef(null), n3 = reactExports.useState({
    onScrollCapture: Vi,
    onWheelCapture: Vi,
    onTouchMoveCapture: Vi
  }), a4 = n3[0], i3 = n3[1], c4 = e3.forwardProps, l4 = e3.children, s2 = e3.className, u2 = e3.removeScrollBar, f2 = e3.enabled, d2 = e3.shards, m4 = e3.sideCar, v3 = e3.noIsolation, y4 = e3.inert, p2 = e3.allowPinchZoom, h4 = e3.as, g4 = h4 === void 0 ? "div" : h4, w3 = e3.gapMode, b4 = uo(e3, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), x4 = m4, E3 = Di([r3, t3]), R4 = ze$1(ze$1({}, b4), a4);
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    f2 && reactExports.createElement(x4, {
      sideCar: mo,
      removeScrollBar: u2,
      shards: d2,
      noIsolation: v3,
      inert: y4,
      setCallbacks: i3,
      allowPinchZoom: !!p2,
      lockRef: r3,
      gapMode: w3
    }),
    c4 ? reactExports.cloneElement(reactExports.Children.only(l4), ze$1(ze$1({}, R4), { ref: E3 })) : reactExports.createElement(g4, ze$1({}, R4, { className: s2, ref: E3 }), l4)
  );
});
pn.defaultProps = {
  enabled: true,
  removeScrollBar: true,
  inert: false
};
pn.classNames = {
  fullWidth: Gt,
  zeroRight: qt
};
var Nu = /* @__PURE__ */ o$1(function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
}, "getNonce");
function jg() {
  if (!document)
    return null;
  var e3 = document.createElement("style");
  e3.type = "text/css";
  var t3 = Nu();
  return t3 && e3.setAttribute("nonce", t3), e3;
}
o$1(jg, "makeStyleTag");
function Wg(e3, t3) {
  e3.styleSheet ? e3.styleSheet.cssText = t3 : e3.appendChild(document.createTextNode(t3));
}
o$1(Wg, "injectStyles");
function Ug(e3) {
  var t3 = document.head || document.getElementsByTagName("head")[0];
  t3.appendChild(e3);
}
o$1(Ug, "insertStyleTag");
var ji = /* @__PURE__ */ o$1(function() {
  var e3 = 0, t3 = null;
  return {
    add: /* @__PURE__ */ o$1(function(r3) {
      e3 == 0 && (t3 = jg()) && (Wg(t3, r3), Ug(t3)), e3++;
    }, "add"),
    remove: /* @__PURE__ */ o$1(function() {
      e3--, !e3 && t3 && (t3.parentNode && t3.parentNode.removeChild(t3), t3 = null);
    }, "remove")
  };
}, "stylesheetSingleton");
var Wi = /* @__PURE__ */ o$1(function() {
  var e3 = ji();
  return function(t3, r3) {
    reactExports.useEffect(function() {
      return e3.add(t3), function() {
        e3.remove();
      };
    }, [t3 && r3]);
  };
}, "styleHookSingleton");
var mn = /* @__PURE__ */ o$1(function() {
  var e3 = Wi(), t3 = /* @__PURE__ */ o$1(function(r3) {
    var n3 = r3.styles, a4 = r3.dynamic;
    return e3(n3, a4), null;
  }, "Sheet");
  return t3;
}, "styleSingleton");
var qg = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ui = /* @__PURE__ */ o$1(function(e3) {
  return parseInt(e3 || "", 10) || 0;
}, "parse"), Gg = /* @__PURE__ */ o$1(function(e3) {
  var t3 = window.getComputedStyle(document.body), r3 = t3[e3 === "padding" ? "paddingLeft" : "marginLeft"], n3 = t3[e3 === "padding" ? "paddingTop" : "marginTop"], a4 = t3[e3 === "padding" ? "paddingRight" : "marginRight"];
  return [Ui(r3), Ui(n3), Ui(a4)];
}, "getOffset"), qi = /* @__PURE__ */ o$1(function(e3) {
  if (e3 === void 0 && (e3 = "margin"), typeof window > "u")
    return qg;
  var t3 = Gg(e3), r3 = document.documentElement.clientWidth, n3 = window.innerWidth;
  return {
    left: t3[0],
    top: t3[1],
    right: t3[2],
    gap: Math.max(0, n3 - r3 + t3[2] - t3[0])
  };
}, "getGapWidth");
var Yg = mn(), Cr = "data-scroll-locked", Xg = /* @__PURE__ */ o$1(function(e3, t3, r3, n3) {
  var a4 = e3.left, i3 = e3.top, c4 = e3.right, l4 = e3.gap;
  return r3 === void 0 && (r3 = "margin"), `
  .`.concat(Ni, ` {
   overflow: hidden `).concat(n3, `;
   padding-right: `).concat(l4, "px ").concat(n3, `;
  }
  body[`).concat(Cr, `] {
    overflow: hidden `).concat(n3, `;
    overscroll-behavior: contain;
    `).concat([
    t3 && "position: relative ".concat(n3, ";"),
    r3 === "margin" && `
    padding-left: `.concat(a4, `px;
    padding-top: `).concat(i3, `px;
    padding-right: `).concat(c4, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l4, "px ").concat(n3, `;
    `),
    r3 === "padding" && "padding-right: ".concat(l4, "px ").concat(n3, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(qt, ` {
    right: `).concat(l4, "px ").concat(n3, `;
  }
  
  .`).concat(Gt, ` {
    margin-right: `).concat(l4, "px ").concat(n3, `;
  }
  
  .`).concat(qt, " .").concat(qt, ` {
    right: 0 `).concat(n3, `;
  }
  
  .`).concat(Gt, " .").concat(Gt, ` {
    margin-right: 0 `).concat(n3, `;
  }
  
  body[`).concat(Cr, `] {
    `).concat(Fi, ": ").concat(l4, `px;
  }
`);
}, "getStyles"), Du = /* @__PURE__ */ o$1(function() {
  var e3 = parseInt(document.body.getAttribute(Cr) || "0", 10);
  return isFinite(e3) ? e3 : 0;
}, "getCurrentUseCounter"), Zg = /* @__PURE__ */ o$1(function() {
  reactExports.useEffect(function() {
    return document.body.setAttribute(Cr, (Du() + 1).toString()), function() {
      var e3 = Du() - 1;
      e3 <= 0 ? document.body.removeAttribute(Cr) : document.body.setAttribute(Cr, e3.toString());
    };
  }, []);
}, "useLockAttribute"), Gi = /* @__PURE__ */ o$1(function(e3) {
  var t3 = e3.noRelative, r3 = e3.noImportant, n3 = e3.gapMode, a4 = n3 === void 0 ? "margin" : n3;
  Zg();
  var i3 = reactExports.useMemo(function() {
    return qi(a4);
  }, [a4]);
  return reactExports.createElement(Yg, { styles: Xg(i3, !t3, a4, r3 ? "" : "!important") });
}, "RemoveScrollBar");
var Yi = false;
if (typeof window < "u")
  try {
    hn = Object.defineProperty({}, "passive", {
      get: /* @__PURE__ */ o$1(function() {
        return Yi = true, true;
      }, "get")
    }), window.addEventListener("test", hn, hn), window.removeEventListener("test", hn, hn);
  } catch {
    Yi = false;
  }
var hn, Yt = Yi ? { passive: false } : false;
var Kg = /* @__PURE__ */ o$1(function(e3) {
  return e3.tagName === "TEXTAREA";
}, "alwaysContainsScroll"), _u = /* @__PURE__ */ o$1(function(e3, t3) {
  if (!(e3 instanceof Element))
    return false;
  var r3 = window.getComputedStyle(e3);
  return (
    // not-not-scrollable
    r3[t3] !== "hidden" && // contains scroll inside self
    !(r3.overflowY === r3.overflowX && !Kg(e3) && r3[t3] === "visible")
  );
}, "elementCanBeScrolled"), Jg = /* @__PURE__ */ o$1(function(e3) {
  return _u(e3, "overflowY");
}, "elementCouldBeVScrolled"), Qg = /* @__PURE__ */ o$1(function(e3) {
  return _u(e3, "overflowX");
}, "elementCouldBeHScrolled"), Xi = /* @__PURE__ */ o$1(function(e3, t3) {
  var r3 = t3.ownerDocument, n3 = t3;
  do {
    typeof ShadowRoot < "u" && n3 instanceof ShadowRoot && (n3 = n3.host);
    var a4 = $u(e3, n3);
    if (a4) {
      var i3 = Vu(e3, n3), c4 = i3[1], l4 = i3[2];
      if (c4 > l4)
        return true;
    }
    n3 = n3.parentNode;
  } while (n3 && n3 !== r3.body);
  return false;
}, "locationCouldBeScrolled"), ev = /* @__PURE__ */ o$1(function(e3) {
  var t3 = e3.scrollTop, r3 = e3.scrollHeight, n3 = e3.clientHeight;
  return [
    t3,
    r3,
    n3
  ];
}, "getVScrollVariables"), tv = /* @__PURE__ */ o$1(function(e3) {
  var t3 = e3.scrollLeft, r3 = e3.scrollWidth, n3 = e3.clientWidth;
  return [
    t3,
    r3,
    n3
  ];
}, "getHScrollVariables"), $u = /* @__PURE__ */ o$1(function(e3, t3) {
  return e3 === "v" ? Jg(t3) : Qg(t3);
}, "elementCouldBeScrolled"), Vu = /* @__PURE__ */ o$1(function(e3, t3) {
  return e3 === "v" ? ev(t3) : tv(t3);
}, "getScrollVariables"), rv = /* @__PURE__ */ o$1(function(e3, t3) {
  return e3 === "h" && t3 === "rtl" ? -1 : 1;
}, "getDirectionFactor"), ju = /* @__PURE__ */ o$1(function(e3, t3, r3, n3, a4) {
  var i3 = rv(e3, window.getComputedStyle(t3).direction), c4 = i3 * n3, l4 = r3.target, s2 = t3.contains(l4), u2 = false, f2 = c4 > 0, d2 = 0, m4 = 0;
  do {
    var v3 = Vu(e3, l4), y4 = v3[0], p2 = v3[1], h4 = v3[2], g4 = p2 - h4 - i3 * y4;
    (y4 || g4) && $u(e3, l4) && (d2 += g4, m4 += y4), l4 instanceof ShadowRoot ? l4 = l4.host : l4 = l4.parentNode;
  } while (
    // portaled content
    !s2 && l4 !== document.body || // self content
    s2 && (t3.contains(l4) || t3 === l4)
  );
  return (f2 && (a4 && Math.abs(d2) < 1 || !a4 && c4 > d2) || !f2 && (a4 && Math.abs(m4) < 1 || !a4 && -c4 > m4)) && (u2 = true), u2;
}, "handleScroll");
var ho = /* @__PURE__ */ o$1(function(e3) {
  return "changedTouches" in e3 ? [e3.changedTouches[0].clientX, e3.changedTouches[0].clientY] : [0, 0];
}, "getTouchXY"), Wu = /* @__PURE__ */ o$1(function(e3) {
  return [e3.deltaX, e3.deltaY];
}, "getDeltaXY"), Uu = /* @__PURE__ */ o$1(function(e3) {
  return e3 && "current" in e3 ? e3.current : e3;
}, "extractRef"), nv = /* @__PURE__ */ o$1(function(e3, t3) {
  return e3[0] === t3[0] && e3[1] === t3[1];
}, "deltaCompare"), ov = /* @__PURE__ */ o$1(function(e3) {
  return `
  .block-interactivity-`.concat(e3, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e3, ` {pointer-events: all;}
`);
}, "generateStyle"), av = 0, Ar = [];
function qu(e3) {
  var t3 = reactExports.useRef([]), r3 = reactExports.useRef([0, 0]), n3 = reactExports.useRef(), a4 = reactExports.useState(av++)[0], i3 = reactExports.useState(mn)[0], c4 = reactExports.useRef(e3);
  reactExports.useEffect(function() {
    c4.current = e3;
  }, [e3]), reactExports.useEffect(function() {
    if (e3.inert) {
      document.body.classList.add("block-interactivity-".concat(a4));
      var p2 = Tu([e3.lockRef.current], (e3.shards || []).map(Uu), true).filter(Boolean);
      return p2.forEach(function(h4) {
        return h4.classList.add("allow-interactivity-".concat(a4));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a4)), p2.forEach(function(h4) {
          return h4.classList.remove("allow-interactivity-".concat(a4));
        });
      };
    }
  }, [e3.inert, e3.lockRef.current, e3.shards]);
  var l4 = reactExports.useCallback(function(p2, h4) {
    if ("touches" in p2 && p2.touches.length === 2 || p2.type === "wheel" && p2.ctrlKey)
      return !c4.current.allowPinchZoom;
    var g4 = ho(p2), w3 = r3.current, b4 = "deltaX" in p2 ? p2.deltaX : w3[0] - g4[0], x4 = "deltaY" in p2 ? p2.deltaY : w3[1] - g4[1], E3, R4 = p2.target, S3 = Math.abs(b4) > Math.abs(x4) ? "h" : "v";
    if ("touches" in p2 && S3 === "h" && R4.type === "range")
      return false;
    var A3 = Xi(S3, R4);
    if (!A3)
      return true;
    if (A3 ? E3 = S3 : (E3 = S3 === "v" ? "h" : "v", A3 = Xi(S3, R4)), !A3)
      return false;
    if (!n3.current && "changedTouches" in p2 && (b4 || x4) && (n3.current = E3), !E3)
      return true;
    var M3 = n3.current || E3;
    return ju(M3, h4, p2, M3 === "h" ? b4 : x4, true);
  }, []), s2 = reactExports.useCallback(function(p2) {
    var h4 = p2;
    if (!(!Ar.length || Ar[Ar.length - 1] !== i3)) {
      var g4 = "deltaY" in h4 ? Wu(h4) : ho(h4), w3 = t3.current.filter(function(E3) {
        return E3.name === h4.type && (E3.target === h4.target || h4.target === E3.shadowParent) && nv(E3.delta, g4);
      })[0];
      if (w3 && w3.should) {
        h4.cancelable && h4.preventDefault();
        return;
      }
      if (!w3) {
        var b4 = (c4.current.shards || []).map(Uu).filter(Boolean).filter(function(E3) {
          return E3.contains(h4.target);
        }), x4 = b4.length > 0 ? l4(h4, b4[0]) : !c4.current.noIsolation;
        x4 && h4.cancelable && h4.preventDefault();
      }
    }
  }, []), u2 = reactExports.useCallback(function(p2, h4, g4, w3) {
    var b4 = { name: p2, delta: h4, target: g4, should: w3, shadowParent: iv(g4) };
    t3.current.push(b4), setTimeout(function() {
      t3.current = t3.current.filter(function(x4) {
        return x4 !== b4;
      });
    }, 1);
  }, []), f2 = reactExports.useCallback(function(p2) {
    r3.current = ho(p2), n3.current = void 0;
  }, []), d2 = reactExports.useCallback(function(p2) {
    u2(p2.type, Wu(p2), p2.target, l4(p2, e3.lockRef.current));
  }, []), m4 = reactExports.useCallback(function(p2) {
    u2(p2.type, ho(p2), p2.target, l4(p2, e3.lockRef.current));
  }, []);
  reactExports.useEffect(function() {
    return Ar.push(i3), e3.setCallbacks({
      onScrollCapture: d2,
      onWheelCapture: d2,
      onTouchMoveCapture: m4
    }), document.addEventListener("wheel", s2, Yt), document.addEventListener("touchmove", s2, Yt), document.addEventListener(
      "touchstart",
      f2,
      Yt
    ), function() {
      Ar = Ar.filter(function(p2) {
        return p2 !== i3;
      }), document.removeEventListener("wheel", s2, Yt), document.removeEventListener("touchmove", s2, Yt), document.removeEventListener("touchstart", f2, Yt);
    };
  }, []);
  var v3 = e3.removeScrollBar, y4 = e3.inert;
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    y4 ? reactExports.createElement(i3, { styles: ov(a4) }) : null,
    v3 ? reactExports.createElement(Gi, { gapMode: e3.gapMode }) : null
  );
}
o$1(qu, "RemoveScrollSideCar");
function iv(e3) {
  for (var t3 = null; e3 !== null; )
    e3 instanceof ShadowRoot && (t3 = e3.host, e3 = e3.host), e3 = e3.parentNode;
  return t3;
}
o$1(iv, "getOutermostShadowParent");
var Gu = $i(mo, qu);
var Yu = reactExports.forwardRef(function(e3, t3) {
  return reactExports.createElement(pn, ze$1({}, e3, { ref: t3, sideCar: Gu }));
});
Yu.classNames = pn.classNames;
var Zi = Yu;
var lv = /* @__PURE__ */ o$1(function(e3) {
  if (typeof document > "u")
    return null;
  var t3 = Array.isArray(e3) ? e3[0] : e3;
  return t3.ownerDocument.body;
}, "getDefaultParent"), Lr = /* @__PURE__ */ new WeakMap(), vo = /* @__PURE__ */ new WeakMap(), wo = {}, Ki = 0, Xu = /* @__PURE__ */ o$1(function(e3) {
  return e3 && (e3.host || Xu(e3.parentNode));
}, "unwrapHost"), cv = /* @__PURE__ */ o$1(function(e3, t3) {
  return t3.map(function(r3) {
    if (e3.contains(r3))
      return r3;
    var n3 = Xu(r3);
    return n3 && e3.contains(n3) ? n3 : (console.error("aria-hidden", r3, "in not contained inside", e3, ". Doing nothing"), null);
  }).filter(function(r3) {
    return !!r3;
  });
}, "correctTargets"), sv = /* @__PURE__ */ o$1(function(e3, t3, r3, n3) {
  var a4 = cv(t3, Array.isArray(e3) ? e3 : [e3]);
  wo[r3] || (wo[r3] = /* @__PURE__ */ new WeakMap());
  var i3 = wo[r3], c4 = [], l4 = /* @__PURE__ */ new Set(), s2 = new Set(a4), u2 = /* @__PURE__ */ o$1(function(d2) {
    !d2 || l4.has(d2) || (l4.add(d2), u2(d2.parentNode));
  }, "keep");
  a4.forEach(u2);
  var f2 = /* @__PURE__ */ o$1(function(d2) {
    !d2 || s2.has(d2) || Array.prototype.forEach.call(d2.children, function(m4) {
      if (l4.has(m4))
        f2(m4);
      else
        try {
          var v3 = m4.getAttribute(n3), y4 = v3 !== null && v3 !== "false", p2 = (Lr.get(m4) || 0) + 1, h4 = (i3.get(m4) || 0) + 1;
          Lr.set(m4, p2), i3.set(m4, h4), c4.push(m4), p2 === 1 && y4 && vo.set(m4, true), h4 === 1 && m4.setAttribute(r3, "true"), y4 || m4.setAttribute(n3, "true");
        } catch (g4) {
          console.error("aria-hidden: cannot operate on ", m4, g4);
        }
    });
  }, "deep");
  return f2(t3), l4.clear(), Ki++, function() {
    c4.forEach(function(d2) {
      var m4 = Lr.get(d2) - 1, v3 = i3.get(d2) - 1;
      Lr.set(d2, m4), i3.set(d2, v3), m4 || (vo.has(d2) || d2.removeAttribute(n3), vo.delete(d2)), v3 || d2.removeAttribute(r3);
    }), Ki--, Ki || (Lr = /* @__PURE__ */ new WeakMap(), Lr = /* @__PURE__ */ new WeakMap(), vo = /* @__PURE__ */ new WeakMap(), wo = {});
  };
}, "applyAttributeToOthers"), Zu = /* @__PURE__ */ o$1(function(e3, t3, r3) {
  r3 === void 0 && (r3 = "data-aria-hidden");
  var n3 = Array.from(Array.isArray(e3) ? e3 : [e3]), a4 = t3 || lv(e3);
  return a4 ? (n3.push.apply(n3, Array.from(a4.querySelectorAll("[aria-live]"))), sv(n3, a4, r3, "aria-hidden")) : function() {
    return null;
  };
}, "hideOthers");
var yo = "Dialog", [Qu, uv] = lu(yo), [fv, Ze$1] = Qu(yo), Ji = /* @__PURE__ */ o$1((e3) => {
  let {
    __scopeDialog: t3,
    children: r3,
    open: n3,
    defaultOpen: a4,
    onOpenChange: i3,
    modal: c4 = true
  } = e3, l4 = reactExports.useRef(null), s2 = reactExports.useRef(null), [u2, f2] = su({
    prop: n3,
    defaultProp: a4 ?? false,
    onChange: i3,
    caller: yo
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    fv,
    {
      scope: t3,
      triggerRef: l4,
      contentRef: s2,
      contentId: ao(),
      titleId: ao(),
      descriptionId: ao(),
      open: u2,
      onOpenChange: f2,
      onOpenToggle: reactExports.useCallback(() => f2((d2) => !d2), [f2]),
      modal: c4,
      children: r3
    }
  );
}, "Dialog");
Ji.displayName = yo;
var ef = "DialogTrigger", Qi = reactExports.forwardRef(
  (e3, t3) => {
    let { __scopeDialog: r3, ...n3 } = e3, a4 = Ze$1(ef, r3), i3 = Xe$1(t3, a4.triggerRef);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Pe$1.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": a4.open,
        "aria-controls": a4.contentId,
        "data-state": c0(a4.open),
        ...n3,
        ref: i3,
        onClick: Er(e3.onClick, a4.onOpenToggle)
      }
    );
  }
);
Qi.displayName = ef;
var e0 = "DialogPortal", [dv, tf] = Qu(e0, {
  forceMount: void 0
}), t0 = /* @__PURE__ */ o$1((e3) => {
  let { __scopeDialog: t3, forceMount: r3, children: n3, container: a4 } = e3, i3 = Ze$1(e0, t3);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(dv, { scope: t3, forceMount: r3, children: reactExports.Children.map(n3, (c4) => /* @__PURE__ */ jsxRuntimeExports.jsx(dn, {
    present: r3 || i3.open,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Oi, { asChild: true, container: a4, children: c4 })
  })) });
}, "DialogPortal");
t0.displayName = e0;
var bo = "DialogOverlay", r0 = reactExports.forwardRef(
  (e3, t3) => {
    let r3 = tf(bo, e3.__scopeDialog), { forceMount: n3 = r3.forceMount, ...a4 } = e3, i3 = Ze$1(bo, e3.__scopeDialog);
    return i3.modal ? /* @__PURE__ */ jsxRuntimeExports.jsx(dn, { present: n3 || i3.open, children: /* @__PURE__ */ jsxRuntimeExports.jsx(mv, { ...a4, ref: t3 }) }) : null;
  }
);
r0.displayName = bo;
var pv = /* @__PURE__ */ fn("DialogOverlay.RemoveScroll"), mv = reactExports.forwardRef(
  (e3, t3) => {
    let { __scopeDialog: r3, ...n3 } = e3, a4 = Ze$1(bo, r3);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ jsxRuntimeExports.jsx(Zi, { as: pv, allowPinchZoom: true, shards: [a4.contentRef], children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Pe$1.div,
        {
          "data-state": c0(a4.open),
          ...n3,
          ref: t3,
          style: { pointerEvents: "auto", ...n3.style }
        }
      ) })
    );
  }
), Xt = "DialogContent", n0 = reactExports.forwardRef(
  (e3, t3) => {
    let r3 = tf(Xt, e3.__scopeDialog), { forceMount: n3 = r3.forceMount, ...a4 } = e3, i3 = Ze$1(Xt, e3.__scopeDialog);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(dn, { present: n3 || i3.open, children: i3.modal ? /* @__PURE__ */ jsxRuntimeExports.jsx(hv, { ...a4, ref: t3 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
      gv,
      { ...a4, ref: t3 }
    ) });
  }
);
n0.displayName = Xt;
var hv = reactExports.forwardRef(
  (e3, t3) => {
    let r3 = Ze$1(Xt, e3.__scopeDialog), n3 = reactExports.useRef(null), a4 = Xe$1(t3, r3.contentRef, n3);
    return reactExports.useEffect(() => {
      let i3 = n3.current;
      if (i3) return Zu(i3);
    }, []), /* @__PURE__ */ jsxRuntimeExports.jsx(
      rf,
      {
        ...e3,
        ref: a4,
        trapFocus: r3.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: Er(e3.onCloseAutoFocus, (i3) => {
          var _a2;
          i3.preventDefault(), (_a2 = r3.triggerRef.current) == null ? void 0 : _a2.focus();
        }),
        onPointerDownOutside: Er(e3.onPointerDownOutside, (i3) => {
          let c4 = i3.detail.originalEvent, l4 = c4.button === 0 && c4.ctrlKey === true;
          (c4.button === 2 || l4) && i3.preventDefault();
        }),
        onFocusOutside: Er(
          e3.onFocusOutside,
          (i3) => i3.preventDefault()
        )
      }
    );
  }
), gv = reactExports.forwardRef(
  (e3, t3) => {
    let r3 = Ze$1(Xt, e3.__scopeDialog), n3 = reactExports.useRef(false), a4 = reactExports.useRef(false);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      rf,
      {
        ...e3,
        ref: t3,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: /* @__PURE__ */ o$1((i3) => {
          var _a2, _b2;
          (_a2 = e3.onCloseAutoFocus) == null ? void 0 : _a2.call(e3, i3), i3.defaultPrevented || (n3.current || ((_b2 = r3.triggerRef.current) == null ? void 0 : _b2.focus()), i3.preventDefault()), n3.current = false, a4.current = false;
        }, "onCloseAutoFocus"),
        onInteractOutside: /* @__PURE__ */ o$1((i3) => {
          var _a2, _b2;
          (_a2 = e3.onInteractOutside) == null ? void 0 : _a2.call(e3, i3), i3.defaultPrevented || (n3.current = true, i3.detail.originalEvent.type === "pointerdown" && (a4.current = true));
          let c4 = i3.target;
          ((_b2 = r3.triggerRef.current) == null ? void 0 : _b2.contains(c4)) && i3.preventDefault(), i3.detail.originalEvent.type === "focusin" && a4.current && i3.preventDefault();
        }, "onInteractOutside")
      }
    );
  }
), rf = reactExports.forwardRef(
  (e3, t3) => {
    let { __scopeDialog: r3, trapFocus: n3, onOpenAutoFocus: a4, onCloseAutoFocus: i3, ...c4 } = e3, l4 = Ze$1(Xt, r3), s2 = reactExports.useRef(null), u2 = Xe$1(t3, s2);
    return zu(), /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ki,
        {
          asChild: true,
          loop: true,
          trapped: n3,
          onMountAutoFocus: a4,
          onUnmountAutoFocus: i3,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Ti,
            {
              role: "dialog",
              id: l4.contentId,
              "aria-describedby": l4.descriptionId,
              "aria-labelledby": l4.titleId,
              "data-state": c0(l4.open),
              ...c4,
              ref: u2,
              onDismiss: /* @__PURE__ */ o$1(() => l4.onOpenChange(false), "onDismiss")
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(wv, { titleId: l4.titleId }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(yv, { contentRef: s2, descriptionId: l4.descriptionId })
      ] })
    ] });
  }
), o0 = "DialogTitle", a0 = reactExports.forwardRef(
  (e3, t3) => {
    let { __scopeDialog: r3, ...n3 } = e3, a4 = Ze$1(o0, r3);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Pe$1.h2, { id: a4.titleId, ...n3, ref: t3 });
  }
);
a0.displayName = o0;
var nf = "DialogDescription", i0 = reactExports.forwardRef(
  (e3, t3) => {
    let { __scopeDialog: r3, ...n3 } = e3, a4 = Ze$1(nf, r3);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Pe$1.p, { id: a4.descriptionId, ...n3, ref: t3 });
  }
);
i0.displayName = nf;
var of = "DialogClose", l0 = reactExports.forwardRef(
  (e3, t3) => {
    let { __scopeDialog: r3, ...n3 } = e3, a4 = Ze$1(of, r3);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Pe$1.button,
      {
        type: "button",
        ...n3,
        ref: t3,
        onClick: Er(e3.onClick, () => a4.onOpenChange(false))
      }
    );
  }
);
l0.displayName = of;
function c0(e3) {
  return e3 ? "open" : "closed";
}
o$1(c0, "getState");
var af = "DialogTitleWarning", [vv, lf] = iu(af, {
  contentName: Xt,
  titleName: o0,
  docsSlug: "dialog"
}), wv = /* @__PURE__ */ o$1(({ titleId: e3 }) => {
  let t3 = lf(af), r3 = `\`${t3.contentName}\` requires a \`${t3.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t3.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t3.docsSlug}`;
  return reactExports.useEffect(() => {
    e3 && (document.getElementById(e3) || console.error(r3));
  }, [r3, e3]), null;
}, "TitleWarning"), bv = "DialogDescriptionWarning", yv = /* @__PURE__ */ o$1(({ contentRef: e3, descriptionId: t3 }) => {
  let n3 = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${lf(bv).contentName}}.`;
  return reactExports.useEffect(() => {
    var _a2;
    let a4 = (_a2 = e3.current) == null ? void 0 : _a2.getAttribute("aria-describedby");
    t3 && a4 && (document.getElementById(t3) || console.warn(n3));
  }, [n3, e3, t3]), null;
}, "DescriptionWarning"), s0 = Ji, Rv = Qi, u0 = t0, f0 = r0, d0 = n0, p0 = a0, m0 = i0, h0 = l0;
var b0 = {};
Zr(b0, {
  Actions: () => Nv,
  CloseButton: () => sf,
  Col: () => ff,
  Container: () => w0,
  Content: () => Pv,
  Description: () => Bv,
  Error: () => Fv,
  ErrorWrapper: () => df,
  Header: () => kv,
  Overlay: () => v0,
  Row: () => uf,
  Title: () => Ov
});
var Ir = reactExports.forwardRef(
  ({
    asChild: e$1 = false,
    animation: t3 = "none",
    size: r3 = "small",
    variant: n3 = "outline",
    padding: a4 = "medium",
    disabled: i3 = false,
    active: c4 = false,
    onClick: l4,
    ...s2
  }, u2) => {
    let f2 = "button";
    e$1 && (f2 = fu);
    let [d2, m4] = reactExports.useState(false), v3 = /* @__PURE__ */ o$1((y4) => {
      l4 && l4(y4), t3 !== "none" && m4(true);
    }, "handleClick");
    return reactExports.useEffect(() => {
      let y4 = setTimeout(() => {
        d2 && m4(false);
      }, 1e3);
      return () => clearTimeout(y4);
    }, [d2]), /* @__PURE__ */ e.createElement(
      Lv,
      {
        as: f2,
        ref: u2,
        variant: n3,
        size: r3,
        padding: a4,
        disabled: i3,
        active: c4,
        animating: d2,
        animation: t3,
        onClick: v3,
        ...s2
      }
    );
  }
);
Ir.displayName = "Button";
var Lv = xr$3("button", {
  shouldForwardProp: /* @__PURE__ */ o$1((e3) => yr$3(e3), "shouldForwardProp")
})(({ theme: e3, variant: t3, size: r3, disabled: n3, active: a4, animating: i3, animation: c4 = "none", padding: l4 }) => ({
  border: 0,
  cursor: n3 ? "not-allowed" : "pointer",
  display: "inline-flex",
  gap: "6px",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  padding: l4 === "none" ? 0 : l4 === "small" && r3 === "small" ? "0 7px" : l4 === "small" && r3 === "medium" ? "0 9px" : r3 === "small" ? "0 10px" : r3 === "medium" ? "0 12px" : 0,
  height: r3 === "small" ? "28px" : "32px",
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
  fontSize: `${e3.typography.size.s1}px`,
  fontWeight: e3.typography.weight.bold,
  lineHeight: "1",
  background: t3 === "solid" ? e3.color.secondary : t3 === "outline" ? e3.button.background : t3 === "ghost" && a4 ? e3.background.hoverable : "transparent",
  ...t3 === "ghost" ? {
    // This is a hack to apply bar styles to the button as soon as it is part of a bar
    // It is a temporary solution until we have implemented Theming 2.0.
    ".sb-bar &": {
      background: a4 ? we$1(0.9, e3.barTextColor) : "transparent",
      color: a4 ? e3.barSelectedColor : e3.barTextColor,
      "&:hover": {
        color: e3.barHoverColor,
        background: we$1(0.86, e3.barHoverColor)
      },
      "&:active": {
        color: e3.barSelectedColor,
        background: we$1(0.9, e3.barSelectedColor)
      },
      "&:focus": {
        boxShadow: `${Ft(e3.barHoverColor, 1)} 0 0 0 1px inset`,
        outline: "none"
      }
    }
  } : {},
  color: t3 === "solid" ? e3.color.lightest : t3 === "outline" ? e3.input.color : t3 === "ghost" && a4 ? e3.color.secondary : t3 === "ghost" ? e3.color.mediumdark : e3.input.color,
  boxShadow: t3 === "outline" ? `${e3.button.border} 0 0 0 1px inset` : "none",
  borderRadius: e3.input.borderRadius,
  // Making sure that the button never shrinks below its minimum size
  flexShrink: 0,
  "&:hover": {
    color: t3 === "ghost" ? e3.color.secondary : void 0,
    background: (() => {
      let s2 = e3.color.secondary;
      return t3 === "solid" && (s2 = e3.color.secondary), t3 === "outline" && (s2 = e3.button.background), t3 === "ghost" ? we$1(0.86, e3.color.secondary) : e3.base === "light" ? wt(0.02, s2) : na(0.03, s2);
    })()
  },
  "&:active": {
    color: t3 === "ghost" ? e3.color.secondary : void 0,
    background: (() => {
      let s2 = e3.color.secondary;
      return t3 === "solid" && (s2 = e3.color.secondary), t3 === "outline" && (s2 = e3.button.background), t3 === "ghost" ? e3.background.hoverable : e3.base === "light" ? wt(0.02, s2) : na(0.03, s2);
    })()
  },
  "&:focus": {
    boxShadow: `${Ft(e3.color.secondary, 1)} 0 0 0 1px inset`,
    outline: "none"
  },
  "> svg": {
    animation: i3 && c4 !== "none" ? `${e3.animation[c4]} 1000ms ease-out` : ""
  }
}));
var xo = reactExports.forwardRef(
  ({ padding: e$1 = "small", variant: t3 = "ghost", ...r3 }, n3) => /* @__PURE__ */ e.createElement(Ir, { padding: e$1, variant: t3, ref: n3, ...r3 })
);
xo.displayName = "IconButton";
var cf = Ee$2({
  from: { opacity: 0 },
  to: { opacity: 1 }
}), Tv = Ee$2({
  from: { maxHeight: 0 },
  to: {}
}), Hv = Ee$2({
  from: {
    opacity: 0,
    transform: "translate(-50%, -50%) scale(0.9)"
  },
  to: {
    opacity: 1,
    transform: "translate(-50%, -50%) scale(1)"
  }
}), v0 = xr$3.div({
  backdropFilter: "blur(24px)",
  position: "fixed",
  inset: 0,
  width: "100%",
  height: "100%",
  zIndex: 10,
  animation: `${cf} 200ms`
}), w0 = xr$3.div(
  ({ theme: e3, width: t3, height: r3 }) => ({
    backgroundColor: e3.background.bar,
    borderRadius: 6,
    boxShadow: "0px 4px 67px 0px #00000040",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: t3 ?? 740,
    height: r3 ?? "auto",
    maxWidth: "calc(100% - 40px)",
    maxHeight: "85vh",
    overflow: "auto",
    zIndex: 11,
    animation: `${Hv} 200ms`,
    "&:focus-visible": {
      outline: "none"
    }
  })
), sf = /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(h0, { asChild: true }, /* @__PURE__ */ e.createElement(xo, { "aria-label": "Close", ...e$1 }, /* @__PURE__ */ e.createElement(G5, null))), "CloseButton"), Pv = xr$3.div({
  display: "flex",
  flexDirection: "column",
  margin: 16,
  gap: 16
}), uf = xr$3.div({
  display: "flex",
  justifyContent: "space-between",
  gap: 16
}), ff = xr$3.div({
  display: "flex",
  flexDirection: "column",
  gap: 4
}), kv = /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(uf, null, /* @__PURE__ */ e.createElement(ff, { ...e$1 }), /* @__PURE__ */ e.createElement(sf, null)), "Header"), Ov = xr$3(p0)(({ theme: e3 }) => ({
  margin: 0,
  fontSize: e3.typography.size.s3,
  fontWeight: e3.typography.weight.bold
})), Bv = xr$3(m0)(({ theme: e3 }) => ({
  position: "relative",
  zIndex: 1,
  margin: 0,
  fontSize: e3.typography.size.s2
})), Nv = xr$3.div({
  display: "flex",
  flexDirection: "row-reverse",
  gap: 8
}), df = xr$3.div(({ theme: e3 }) => ({
  maxHeight: 100,
  overflow: "auto",
  animation: `${Tv} 300ms, ${cf} 300ms`,
  backgroundColor: e3.background.critical,
  color: e3.color.lightest,
  fontSize: e3.typography.size.s2,
  "& > div": {
    position: "relative",
    padding: "8px 16px"
  }
})), Fv = /* @__PURE__ */ o$1(({
  children: e$1,
  ...t3
}) => /* @__PURE__ */ e.createElement(df, { ...t3 }, /* @__PURE__ */ e.createElement("div", null, e$1)), "Error");
function Dv({
  children: e$1,
  width: t3,
  height: r3,
  onEscapeKeyDown: n3,
  onInteractOutside: a4 = /* @__PURE__ */ o$1((u2) => u2.preventDefault(), "onInteractOutside"),
  className: i3,
  container: c4,
  portalSelector: l4,
  ...s2
}) {
  let u2 = c4 ?? (l4 ? document.querySelector(l4) : null) ?? document.body;
  return /* @__PURE__ */ e.createElement(s0, { ...s2 }, /* @__PURE__ */ e.createElement(u0, { container: u2 }, /* @__PURE__ */ e.createElement(
    f0,
    { asChild: true },
    /* @__PURE__ */ e.createElement(v0, null)
  ), /* @__PURE__ */ e.createElement(
    d0,
    {
      asChild: true,
      onInteractOutside: a4,
      onEscapeKeyDown: n3
    },
    /* @__PURE__ */ e.createElement(w0, { className: i3, width: t3, height: r3 }, e$1)
  )));
}
o$1(Dv, "BaseModal");
var _v = Object.assign(Dv, b0, { Dialog: Ro });
var jv = /* @__PURE__ */ o$1((e3) => typeof e3 == "number" ? e3 : Number(e3), "toNumber"), Wv = xr$3.div(
  ({ theme: e3, col: t3, row: r3 = 1 }) => t3 ? {
    display: "inline-block",
    verticalAlign: "inherit",
    "& > *": {
      marginLeft: t3 * e3.layoutMargin,
      verticalAlign: "inherit"
    },
    [`& > *:first-child${hf}`]: {
      marginLeft: 0
    }
  } : {
    "& > *": {
      marginTop: r3 * e3.layoutMargin
    },
    [`& > *:first-child${hf}`]: {
      marginTop: 0
    }
  },
  ({ theme: e3, outer: t3, col: r3, row: n3 }) => {
    switch (true) {
      case !!(t3 && r3):
        return {
          marginLeft: t3 * e3.layoutMargin,
          marginRight: t3 * e3.layoutMargin
        };
      case !!(t3 && n3):
        return {
          marginTop: t3 * e3.layoutMargin,
          marginBottom: t3 * e3.layoutMargin
        };
      default:
        return {};
    }
  }
), Uv = /* @__PURE__ */ o$1(({ col: e$1, row: t3, outer: r3, children: n3, ...a4 }) => {
  let i3 = jv(typeof r3 == "number" || !r3 ? r3 : e$1 || t3);
  return /* @__PURE__ */ e.createElement(Wv, { col: e$1, row: t3, outer: i3, ...a4 }, n3);
}, "Spaced");
var Gv = xr$3.div(({ theme: e3 }) => ({
  fontWeight: e3.typography.weight.bold
})), Yv = xr$3.div(), Xv = xr$3.div(({ theme: e3 }) => ({
  padding: 30,
  textAlign: "center",
  color: e3.color.defaultText,
  fontSize: e3.typography.size.s2 - 1
})), Zv = /* @__PURE__ */ o$1(({ children: e$1, ...t3 }) => {
  let [r3, n3] = reactExports.Children.toArray(e$1);
  return /* @__PURE__ */ e.createElement(Xv, { ...t3 }, /* @__PURE__ */ e.createElement(Gv, null, r3), n3 && /* @__PURE__ */ e.createElement(
    Yv,
    null,
    n3
  ));
}, "Placeholder");
ro();
function Qv(e3, t3) {
  var r3 = reactExports.useRef(null), n3 = reactExports.useRef(null);
  n3.current = t3;
  var a4 = reactExports.useRef(null);
  reactExports.useEffect(function() {
    i3();
  });
  var i3 = reactExports.useCallback(function() {
    var c4 = a4.current, l4 = n3.current, s2 = c4 || (l4 ? l4 instanceof Element ? l4 : l4.current : null);
    r3.current && r3.current.element === s2 && r3.current.subscriber === e3 || (r3.current && r3.current.cleanup && r3.current.cleanup(), r3.current = {
      element: s2,
      subscriber: e3,
      // Only calling the subscriber, if there's an actual element to report.
      // Setting cleanup to undefined unless a subscriber returns one, as an existing cleanup function would've been just called.
      cleanup: s2 ? e3(s2) : void 0
    });
  }, [e3]);
  return reactExports.useEffect(function() {
    return function() {
      r3.current && r3.current.cleanup && (r3.current.cleanup(), r3.current = null);
    };
  }, []), reactExports.useCallback(function(c4) {
    a4.current = c4, i3();
  }, [i3]);
}
o$1(Qv, "useResolvedElement");
function mf(e3, t3, r3) {
  return e3[t3] ? e3[t3][0] ? e3[t3][0][r3] : (
    // TS complains about this, because the RO entry type follows the spec and does not reflect Firefox's current
    // behaviour of returning objects instead of arrays for `borderBoxSize` and `contentBoxSize`.
    // @ts-ignore
    e3[t3][r3]
  ) : t3 === "contentBoxSize" ? e3.contentRect[r3 === "inlineSize" ? "width" : "height"] : void 0;
}
o$1(mf, "extractSize");
function Eo(e3) {
  e3 === void 0 && (e3 = {});
  var t3 = e3.onResize, r3 = reactExports.useRef(void 0);
  r3.current = t3;
  var n3 = e3.round || Math.round, a4 = reactExports.useRef(), i3 = reactExports.useState({
    width: void 0,
    height: void 0
  }), c4 = i3[0], l4 = i3[1], s2 = reactExports.useRef(false);
  reactExports.useEffect(function() {
    return s2.current = false, function() {
      s2.current = true;
    };
  }, []);
  var u2 = reactExports.useRef({
    width: void 0,
    height: void 0
  }), f2 = Qv(reactExports.useCallback(function(d2) {
    return (!a4.current || a4.current.box !== e3.box || a4.current.round !== n3) && (a4.current = {
      box: e3.box,
      round: n3,
      instance: new ResizeObserver(function(m4) {
        var v3 = m4[0], y4 = e3.box === "border-box" ? "borderBoxSize" : e3.box === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize", p2 = mf(v3, y4, "inlineSize"), h4 = mf(v3, y4, "blockSize"), g4 = p2 ? n3(p2) : void 0, w3 = h4 ? n3(h4) : void 0;
        if (u2.current.width !== g4 || u2.current.height !== w3) {
          var b4 = {
            width: g4,
            height: w3
          };
          u2.current.width = g4, u2.current.height = w3, r3.current ? r3.current(b4) : s2.current || l4(b4);
        }
      })
    }), a4.current.instance.observe(d2, {
      box: e3.box
    }), function() {
      a4.current && a4.current.instance.unobserve(d2);
    };
  }, [e3.box, n3]), e3.ref);
  return reactExports.useMemo(function() {
    return {
      ref: f2,
      width: c4.width,
      height: c4.height
    };
  }, [f2, c4.width, c4.height]);
}
o$1(Eo, "useResizeObserver");
var a3 = xr$3.div(
  ({ centered: e3 = false, scale: t3 = 1, elementHeight: r3 }) => ({
    height: r3 || "auto",
    transformOrigin: e3 ? "center top" : "left top",
    transform: `scale(${1 / t3})`
  })
);
function gf({ centered: e$1, scale: t3, children: r3 }) {
  let n3 = reactExports.useRef(null), [a4, i3] = reactExports.useState(0), c4 = reactExports.useCallback(
    ({ height: l4 }) => {
      l4 && i3(l4 / t3);
    },
    [t3]
  );
  return reactExports.useEffect(() => {
    n3.current && i3(n3.current.getBoundingClientRect().height);
  }, [t3]), Eo({
    ref: n3,
    onResize: c4
  }), /* @__PURE__ */ e.createElement(a3, { centered: e$1, scale: t3, elementHeight: a4 }, /* @__PURE__ */ e.createElement("div", { ref: n3, className: "innerZoomElementWrapper" }, r3));
}
o$1(gf, "ZoomElement");
var S0 = class S02 extends reactExports.Component {
  constructor() {
    super(...arguments);
    this.iframe = null;
  }
  componentDidMount() {
    let { iFrameRef: r3 } = this.props;
    this.iframe = r3.current;
  }
  shouldComponentUpdate(r3) {
    let { scale: n3, active: a4 } = this.props;
    return n3 !== r3.scale && this.setIframeInnerZoom(r3.scale), a4 !== r3.active && this.iframe.setAttribute("data-is-storybook", r3.active ? "true" : "false"), r3.children.props.src !== this.props.children.props.src;
  }
  setIframeInnerZoom(r3) {
    try {
      Object.assign(this.iframe.contentDocument.body.style, {
        width: `${r3 * 100}%`,
        height: `${r3 * 100}%`,
        transform: `scale(${1 / r3})`,
        transformOrigin: "top left"
      });
    } catch {
      this.setIframeZoom(r3);
    }
  }
  setIframeZoom(r3) {
    Object.assign(this.iframe.style, {
      width: `${r3 * 100}%`,
      height: `${r3 * 100}%`,
      transform: `scale(${1 / r3})`,
      transformOrigin: "top left"
    });
  }
  render() {
    let { children: r3 } = this.props;
    return /* @__PURE__ */ e.createElement(e.Fragment, null, r3);
  }
};
o$1(S0, "ZoomIFrame");
var So = S0;
var l3 = {
  Element: gf,
  IFrame: So
};
const { global: c3 } = __STORYBOOK_MODULE_GLOBAL__;
var { document: s3 } = c3, u3 = xr$3.strong(({ theme: e3 }) => ({
  color: e3.color.orange
})), f3 = xr$3.strong(({ theme: e3 }) => ({
  color: e3.color.ancillary,
  textDecoration: "underline"
})), wf = xr$3.em(({ theme: e3 }) => ({
  color: e3.textMutedColor
})), d3 = /(Error): (.*)\n/, p3 = /at (?:(.*) )?\(?(.+)\)?/, m3 = /([^@]+)?(?:\/<)?@(.+)?/, h3 = /([^@]+)?@(.+)?/, g3 = /* @__PURE__ */ o$1(({
  error: e$1
}) => {
  if (!e$1)
    return /* @__PURE__ */ e.createElement(reactExports.Fragment, null, "This error has no stack or message");
  if (!e$1.stack)
    return /* @__PURE__ */ e.createElement(reactExports.Fragment, null, e$1.message || "This error has no stack or message");
  let t3 = e$1.stack.toString();
  t3 && e$1.message && !t3.includes(e$1.message) && (t3 = `Error: ${e$1.message}

${t3}`);
  let r3 = t3.match(d3);
  if (!r3)
    return /* @__PURE__ */ e.createElement(reactExports.Fragment, null, t3);
  let [, n3, a4] = r3, i3 = t3.split(/\n/).slice(1), [, ...c4] = i3.map((l4) => {
    let s2 = l4.match(p3) || l4.match(m3) || l4.match(h3);
    return s2 ? {
      name: (s2[1] || "").replace("/<", ""),
      location: s2[2].replace(s3.location.origin, "")
    } : null;
  }).filter(Boolean);
  return /* @__PURE__ */ e.createElement(reactExports.Fragment, null, /* @__PURE__ */ e.createElement("span", null, n3), ": ", /* @__PURE__ */ e.createElement(
    u3,
    null,
    a4
  ), /* @__PURE__ */ e.createElement("br", null), c4.map(
    (l4, s2) => (l4 == null ? void 0 : l4.name) ? /* @__PURE__ */ e.createElement(reactExports.Fragment, { key: s2 }, "  ", "at ", /* @__PURE__ */ e.createElement(f3, null, l4.name), " (", /* @__PURE__ */ e.createElement(wf, null, l4.location), ")", /* @__PURE__ */ e.createElement("br", null)) : /* @__PURE__ */ e.createElement(
      reactExports.Fragment,
      { key: s2 },
      "  ",
      "at ",
      /* @__PURE__ */ e.createElement(wf, null, l4 == null ? void 0 : l4.location),
      /* @__PURE__ */ e.createElement("br", null)
    )
  ));
}, "ErrorFormatter");
var b3 = xr$3.input({
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
}), bf = /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(b3, { ...e$1, type: "checkbox" }), "Checkbox");
var y3 = xr$3.label(({ theme: e3 }) => ({
  display: "flex",
  borderBottom: `1px solid ${e3.appBorderColor}`,
  margin: "0 15px",
  padding: "8px 0",
  "&:last-child": {
    marginBottom: "3rem"
  }
})), R3 = xr$3.span(({ theme: e3 }) => ({
  minWidth: 100,
  fontWeight: e3.typography.weight.bold,
  marginRight: 15,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  lineHeight: "16px"
})), Rf = /* @__PURE__ */ o$1(({ label: e$1, children: t3, ...r3 }) => /* @__PURE__ */ e.createElement(y3, { ...r3 }, e$1 ? /* @__PURE__ */ e.createElement(
  R3,
  null,
  /* @__PURE__ */ e.createElement("span", null, e$1)
) : null, t3), "Field");
var Hr = /* @__PURE__ */ o$1(({ size: e3 }) => {
  switch (e3) {
    case "100%":
      return { width: "100%" };
    case "flex":
      return { flex: 1 };
    case "auto":
    default:
      return { display: "inline" };
  }
}, "sizes"), Co = /* @__PURE__ */ o$1(({
  align: e3
}) => {
  switch (e3) {
    case "end":
      return { textAlign: "right" };
    case "center":
      return { textAlign: "center" };
    case "start":
    default:
      return { textAlign: "left" };
  }
}, "alignment"), Mo = /* @__PURE__ */ o$1(({
  valid: e3,
  theme: t3
}) => {
  switch (e3) {
    case "valid":
      return { boxShadow: `${t3.color.positive} 0 0 0 1px inset !important` };
    case "error":
      return { boxShadow: `${t3.color.negative} 0 0 0 1px inset !important` };
    case "warn":
      return {
        boxShadow: `${t3.color.warning} 0 0 0 1px inset`
      };
    case void 0:
    case null:
    default:
      return {};
  }
}, "validation"), x3 = {
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
}, Ao = /* @__PURE__ */ o$1(({ theme: e3 }) => ({
  ...x3,
  transition: "box-shadow 200ms ease-out, opacity 200ms ease-out",
  color: e3.input.color || "inherit",
  background: e3.input.background,
  boxShadow: `${e3.input.border} 0 0 0 1px inset`,
  borderRadius: e3.input.borderRadius,
  fontSize: e3.typography.size.s2 - 1,
  lineHeight: "20px",
  padding: "6px 10px",
  // 32
  boxSizing: "border-box",
  height: 32,
  '&[type="file"]': {
    height: "auto"
  },
  "&:focus": {
    boxShadow: `${e3.color.secondary} 0 0 0 1px inset`,
    outline: "none",
    "@media (forced-colors: active)": {
      outline: "1px solid highlight"
    }
  },
  "&[disabled]": {
    cursor: "not-allowed",
    opacity: 0.5
  },
  "&:-webkit-autofill": { WebkitBoxShadow: `0 0 0 3em ${e3.color.lightest} inset` },
  "&::placeholder": {
    color: e3.textMutedColor,
    opacity: 1
  }
}), "styles");
var xf = Object.assign(
  xr$3(
    reactExports.forwardRef(/* @__PURE__ */ o$1(function({ size: t3, valid: r3, align: n3, ...a4 }, i3) {
      return /* @__PURE__ */ e.createElement("input", { ...a4, ref: i3 });
    }, "Input"))
  )(Ao, Hr, Co, Mo, {
    minHeight: 32
  }),
  {
    displayName: "Input"
  }
);
var L3 = xr$3.input({
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
}), Ef = /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(L3, { ...e$1, type: "radio" }), "Radio");
function Sf() {
  var _a2, _b2, _c2;
  try {
    return (
      // @ts-expect-error This property exists in Vitest browser mode
      !!globalThis.__vitest_browser__ || !!((_c2 = (_b2 = (_a2 = globalThis.window) == null ? void 0 : _a2.navigator) == null ? void 0 : _b2.userAgent) == null ? void 0 : _c2.match(/StorybookTestRunner/))
    );
  } catch {
    return false;
  }
}
o$1(Sf, "isTestEnvironment");
var T3 = xr$3.select(Hr, ({ theme: e3 }) => ({
  appearance: "none",
  background: `calc(100% - 12px) center no-repeat url("data:image/svg+xml,%3Csvg width='8' height='4' viewBox='0 0 8 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.30303 0.196815C1.13566 0.0294472 0.864304 0.0294472 0.696937 0.196815C0.529569 0.364182 0.529569 0.635539 0.696937 0.802906L3.69694 3.80291C3.8643 3.97027 4.13566 3.97027 4.30303 3.80291L7.30303 0.802906C7.4704 0.635539 7.4704 0.364182 7.30303 0.196815C7.13566 0.0294473 6.8643 0.0294473 6.69694 0.196815L3.99998 2.89377L1.30303 0.196815Z' fill='%2373828C'/%3E%3C/svg%3E%0A")`,
  backgroundSize: 10,
  padding: "6px 30px 6px 10px",
  "@supports (appearance: base-select)": {
    appearance: "base-select",
    background: e3.input.background,
    padding: "6px 10px"
  },
  transition: "box-shadow 200ms ease-out, opacity 200ms ease-out",
  color: e3.input.color || "inherit",
  boxShadow: `${e3.input.border} 0 0 0 1px inset`,
  borderRadius: e3.input.borderRadius,
  fontSize: e3.typography.size.s2 - 1,
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
      color: e3.color.mediumdark
    }
  },
  "&:has(option:not([hidden]):checked)": {
    color: e3.color.defaultText
  },
  "&:focus-visible, &:focus-within": {
    outline: "none",
    boxShadow: `${e3.color.secondary} 0 0 0 1px inset`
  },
  "&::picker-icon": {
    display: "none"
  },
  "&::picker(select)": {
    appearance: "base-select",
    border: "1px solid #e4e4e7",
    padding: 4,
    marginTop: 4,
    background: e3.base === "light" ? fo$3(e3.background.app) : e3.background.app,
    filter: `
      drop-shadow(0 5px 5px rgba(0,0,0,0.05))
      drop-shadow(0 0 3px rgba(0,0,0,0.1))
    `,
    borderRadius: e3.appBorderRadius + 2,
    fontSize: e3.typography.size.s1,
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
    color: e3.color.defaultText,
    "&::checkmark": {
      display: "none"
    },
    "&:hover, &:focus-visible": {
      backgroundColor: e3.background.hoverable
    },
    "&:checked": {
      color: e3.color.secondary,
      fontWeight: e3.typography.weight.bold
    },
    "&:disabled": {
      backgroundColor: "transparent",
      cursor: "default",
      color: e3.color.defaultText
    }
  }
})), Cf = /* @__PURE__ */ o$1(({ children: e$1, ...t3 }) => (
  // @ts-expect-error Weird props mismatch
  /* @__PURE__ */ e.createElement(T3, { ...t3 }, !Sf() && /* @__PURE__ */ e.createElement("button", null, /* @__PURE__ */ e.createElement(
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
Kr();
Bn();
var Mf = reactExports.useLayoutEffect;
var Af = /* @__PURE__ */ o$1(function(t3) {
  var r3 = e.useRef(t3);
  return Mf(function() {
    r3.current = t3;
  }), r3;
}, "useLatest");
var If = /* @__PURE__ */ o$1(function(t3, r3) {
  if (typeof t3 == "function") {
    t3(r3);
    return;
  }
  t3.current = r3;
}, "updateRef"), zf = /* @__PURE__ */ o$1(function(t3, r3) {
  var n3 = e.useRef();
  return e.useCallback(function(a4) {
    t3.current = a4, n3.current && If(n3.current, null), n3.current = r3, r3 && If(r3, a4);
  }, [r3]);
}, "useComposedRef");
var Tf = {
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
}, k3 = /* @__PURE__ */ o$1(function(t3) {
  Object.keys(Tf).forEach(function(r3) {
    t3.style.setProperty(r3, Tf[r3], "important");
  });
}, "forceHiddenStyles"), Hf = k3, Re$1 = null, Pf = /* @__PURE__ */ o$1(function(t3, r3) {
  var n3 = t3.scrollHeight;
  return r3.sizingStyle.boxSizing === "border-box" ? n3 + r3.borderSize : n3 - r3.paddingSize;
}, "getHeight");
function O3(e3, t3, r3, n3) {
  r3 === void 0 && (r3 = 1), n3 === void 0 && (n3 = 1 / 0), Re$1 || (Re$1 = document.createElement("textarea"), Re$1.setAttribute("tabindex", "-1"), Re$1.setAttribute("aria-hidden", "true"), Hf(Re$1)), Re$1.parentNode === null && document.body.appendChild(Re$1);
  var a4 = e3.paddingSize, i3 = e3.borderSize, c4 = e3.sizingStyle, l4 = c4.boxSizing;
  Object.keys(c4).forEach(function(m4) {
    var v3 = m4;
    Re$1.style[v3] = c4[v3];
  }), Hf(Re$1), Re$1.value = t3;
  var s2 = Pf(Re$1, e3);
  Re$1.value = t3, s2 = Pf(Re$1, e3), Re$1.value = "x";
  var u2 = Re$1.scrollHeight - a4, f2 = u2 * r3;
  l4 === "border-box" && (f2 = f2 + a4 + i3), s2 = Math.max(f2, s2);
  var d2 = u2 * n3;
  return l4 === "border-box" && (d2 = d2 + a4 + i3), s2 = Math.min(d2, s2), [s2, u2];
}
o$1(O3, "calculateNodeHeight");
var kf = /* @__PURE__ */ o$1(function() {
}, "noop"), B3 = /* @__PURE__ */ o$1(function(t3, r3) {
  return t3.reduce(function(n3, a4) {
    return n3[a4] = r3[a4], n3;
  }, {});
}, "pick"), N3 = [
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
], F3 = !!document.documentElement.currentStyle, D3 = /* @__PURE__ */ o$1(function(t3) {
  var r3 = window.getComputedStyle(t3);
  if (r3 === null)
    return null;
  var n3 = B3(N3, r3), a4 = n3.boxSizing;
  if (a4 === "")
    return null;
  F3 && a4 === "border-box" && (n3.width = parseFloat(n3.width) + parseFloat(n3.borderRightWidth) + parseFloat(n3.borderLeftWidth) + parseFloat(n3.paddingRight) + parseFloat(n3.paddingLeft) + "px");
  var i3 = parseFloat(n3.paddingBottom) + parseFloat(n3.paddingTop), c4 = parseFloat(n3.borderBottomWidth) + parseFloat(n3.borderTopWidth);
  return {
    sizingStyle: n3,
    paddingSize: i3,
    borderSize: c4
  };
}, "getSizingData"), _3 = D3;
function A0(e3, t3, r3) {
  var n3 = Af(r3);
  reactExports.useLayoutEffect(function() {
    var a4 = /* @__PURE__ */ o$1(function(c4) {
      return n3.current(c4);
    }, "handler");
    if (e3)
      return e3.addEventListener(t3, a4), function() {
        return e3.removeEventListener(t3, a4);
      };
  }, []);
}
o$1(A0, "useListener");
var $3 = /* @__PURE__ */ o$1(function(t3, r3) {
  A0(document.body, "reset", function(n3) {
    t3.current.form === n3.target && r3(n3);
  });
}, "useFormResetListener"), V3 = /* @__PURE__ */ o$1(function(t3) {
  A0(window, "resize", t3);
}, "useWindowResizeListener"), j3 = /* @__PURE__ */ o$1(function(t3) {
  A0(document.fonts, "loadingdone", t3);
}, "useFontsLoadedListener"), W3 = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"], U3 = /* @__PURE__ */ o$1(function(t3, r3) {
  var n3 = t3.cacheMeasurements, a4 = t3.maxRows, i3 = t3.minRows, c4 = t3.onChange, l4 = c4 === void 0 ? kf : c4, s2 = t3.onHeightChange, u2 = s2 === void 0 ? kf : s2, f2 = ur(t3, W3), d2 = f2.value !== void 0, m4 = reactExports.useRef(null), v3 = zf(m4, r3), y4 = reactExports.useRef(0), p2 = reactExports.useRef(), h4 = /* @__PURE__ */ o$1(
    function() {
      var b4 = m4.current, x4 = n3 && p2.current ? p2.current : _3(b4);
      if (x4) {
        p2.current = x4;
        var E3 = O3(x4, b4.value || b4.placeholder || "x", i3, a4), R4 = E3[0], S3 = E3[1];
        y4.current !== R4 && (y4.current = R4, b4.style.setProperty("height", R4 + "px", "important"), u2(R4, {
          rowHeight: S3
        }));
      }
    },
    "resizeTextarea"
  ), g4 = /* @__PURE__ */ o$1(function(b4) {
    d2 || h4(), l4(b4);
  }, "handleChange");
  return reactExports.useLayoutEffect(h4), $3(m4, function() {
    if (!d2) {
      var w3 = m4.current.value;
      requestAnimationFrame(function() {
        var b4 = m4.current;
        b4 && w3 !== b4.value && h4();
      });
    }
  }), V3(h4), j3(h4), /* @__PURE__ */ reactExports.createElement("textarea", W$1({}, f2, {
    onChange: g4,
    ref: v3
  }));
}, "TextareaAutosize"), Of = /* @__PURE__ */ reactExports.forwardRef(U3);
var Bf = Object.assign(
  xr$3(
    reactExports.forwardRef(/* @__PURE__ */ o$1(function({ size: t3, valid: r3, align: n3, ...a4 }, i3) {
      return /* @__PURE__ */ e.createElement(Of, { ...a4, ref: i3 });
    }, "Textarea"))
  )(Ao, Hr, Co, Mo, ({ height: e3 = 400 }) => ({
    overflow: "visible",
    maxHeight: e3
  })),
  {
    displayName: "Textarea"
  }
);
var Z3 = Object.assign(
  xr$3.form({
    boxSizing: "border-box",
    width: "100%"
  }),
  {
    Field: Rf,
    Input: xf,
    Select: Cf,
    Textarea: Bf,
    Button: Ir,
    Checkbox: bf,
    Radio: Ef
  }
);
var G7 = reactExports.lazy(
  () => Promise.resolve().then(() => (Vo(), al)).then((e3) => ({ default: e3.WithTooltip }))
), Y7 = /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(reactExports.Suspense, { fallback: /* @__PURE__ */ e.createElement("div", null) }, /* @__PURE__ */ e.createElement(G7, { ...e$1 })), "WithTooltip"), X7 = reactExports.lazy(
  () => Promise.resolve().then(() => (Vo(), al)).then((e3) => ({ default: e3.WithTooltipPure }))
), Z7 = /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement(reactExports.Suspense, { fallback: /* @__PURE__ */ e.createElement("div", null) }, /* @__PURE__ */ e.createElement(X7, { ...e$1 })), "WithTooltipPure");
var K7 = xr$3.div(({ theme: e3 }) => ({
  fontWeight: e3.typography.weight.bold
})), J7 = xr$3.span(), Q7 = xr$3.div(({ theme: e3 }) => ({
  marginTop: 8,
  textAlign: "center",
  "> *": {
    margin: "0 8px",
    fontWeight: e3.typography.weight.bold
  }
})), e6 = xr$3.div(({ theme: e3 }) => ({
  color: e3.color.defaultText,
  lineHeight: "18px"
})), t6 = xr$3.div({
  padding: 15,
  width: 280,
  boxSizing: "border-box"
}), r6 = /* @__PURE__ */ o$1(({ title: e$1, desc: t3, links: r3 }) => /* @__PURE__ */ e.createElement(t6, null, /* @__PURE__ */ e.createElement(
  e6,
  null,
  e$1 && /* @__PURE__ */ e.createElement(K7, null, e$1),
  t3 && /* @__PURE__ */ e.createElement(J7, null, t3)
), r3 && /* @__PURE__ */ e.createElement(
  Q7,
  null,
  r3.map(({ title: n3, ...a4 }) => /* @__PURE__ */ e.createElement(Ai, { ...a4, key: n3 }, n3))
)), "TooltipMessage");
var a6 = xr$3.div(({ theme: e3 }) => ({
  padding: "2px 6px",
  lineHeight: "16px",
  fontSize: 10,
  fontWeight: e3.typography.weight.bold,
  color: e3.color.lightest,
  boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)",
  borderRadius: 4,
  whiteSpace: "nowrap",
  pointerEvents: "none",
  zIndex: -1,
  background: e3.base === "light" ? "rgba(60, 60, 60, 0.9)" : "rgba(0, 0, 0, 0.95)",
  margin: 6
})), i6 = /* @__PURE__ */ o$1(({ note: e$1, ...t3 }) => /* @__PURE__ */ e.createElement(a6, { ...t3 }, e$1), "TooltipNote");
var Kd = me$1(Qr(), 1);
var l6 = xr$3(({ active: e$1, loading: t3, disabled: r3, ...n3 }) => /* @__PURE__ */ e.createElement("span", { ...n3 }))(
  ({ theme: e3 }) => ({
    color: e3.color.defaultText,
    // Previously was theme.typography.weight.normal but this weight does not exists in Theme
    fontWeight: e3.typography.weight.regular
  }),
  ({ active: e3, theme: t3 }) => e3 ? {
    color: t3.color.secondary,
    fontWeight: t3.typography.weight.bold
  } : {},
  ({ loading: e3, theme: t3 }) => e3 ? {
    display: "inline-block",
    flex: "none",
    ...t3.animation.inlineGlow
  } : {},
  ({ disabled: e3, theme: t3 }) => e3 ? {
    color: t3.textMutedColor
  } : {}
), c6 = xr$3.span({
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
}), s6 = xr$3.span(
  {
    flex: 1,
    textAlign: "left",
    display: "flex",
    flexDirection: "column"
  },
  ({ isIndented: e3 }) => e3 ? { marginLeft: 24 } : {}
), u6 = xr$3.span(
  ({ theme: e3 }) => ({
    fontSize: "11px",
    lineHeight: "14px"
  }),
  ({ active: e3, theme: t3 }) => e3 ? {
    color: t3.color.secondary
  } : {},
  ({ theme: e3, disabled: t3 }) => t3 ? {
    color: e3.textMutedColor
  } : {}
), f6 = xr$3.span(
  ({ active: e3, theme: t3 }) => e3 ? {
    color: t3.color.secondary
  } : {},
  () => ({
    display: "flex",
    maxWidth: 14
  })
), d6 = xr$3.div(
  ({ theme: e3 }) => ({
    width: "100%",
    border: "none",
    borderRadius: e3.appBorderRadius,
    background: "none",
    fontSize: e3.typography.size.s1,
    transition: "all 150ms ease-out",
    color: e3.color.dark,
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
  ({ theme: e3, href: t3, onClick: r3 }) => (t3 || r3) && {
    cursor: "pointer",
    "&:hover": {
      background: e3.background.hoverable
    },
    "&:hover svg": {
      opacity: 1
    }
  },
  ({ theme: e3, as: t3 }) => t3 === "label" && {
    "&:has(input:not(:disabled))": {
      cursor: "pointer",
      "&:hover": {
        background: e3.background.hoverable
      }
    }
  },
  ({ disabled: e3 }) => e3 && { cursor: "not-allowed" }
), p6 = (0, Kd.default)(100)(({ onClick: e3, input: t3, href: r3, LinkWrapper: n3 }) => ({
  ...e3 && {
    as: "button",
    onClick: e3
  },
  ...t3 && {
    as: "label"
  },
  ...r3 && {
    as: "a",
    href: r3,
    ...n3 && {
      as: n3,
      to: r3
    }
  }
})), m6 = /* @__PURE__ */ o$1((e$1) => {
  let {
    loading: t3 = false,
    title: r3 = /* @__PURE__ */ e.createElement("span", null, "Loading state"),
    center: n3 = null,
    right: a4 = null,
    active: i3 = false,
    disabled: c4 = false,
    isIndented: l4 = false,
    href: s2 = void 0,
    onClick: u2 = void 0,
    icon: f2,
    input: d2,
    LinkWrapper: m4 = void 0,
    ...v3
  } = e$1, y4 = { active: i3, disabled: c4 }, p2 = p6(e$1), h4 = f2 || d2;
  return /* @__PURE__ */ e.createElement(d6, { ...v3, ...y4, ...p2 }, /* @__PURE__ */ e.createElement(e.Fragment, null, h4 && /* @__PURE__ */ e.createElement(f6, { ...y4 }, h4), r3 || n3 ? /* @__PURE__ */ e.createElement(s6, { isIndented: l4 && !h4 }, r3 && /* @__PURE__ */ e.createElement(
    l6,
    { ...y4, loading: t3 },
    r3
  ), n3 && /* @__PURE__ */ e.createElement(u6, { ...y4 }, n3)) : null, a4 && /* @__PURE__ */ e.createElement(
    c6,
    { ...y4 },
    a4
  )));
}, "ListItem"), il = m6;
var v6 = xr$3.div(
  {
    minWidth: 180,
    overflow: "hidden",
    overflowY: "auto",
    maxHeight: 15.5 * 32 + 8
    // 15.5 items at 32px each + 8px padding
  },
  ({ theme: e3 }) => ({
    borderRadius: e3.appBorderRadius + 2
  }),
  ({ theme: e3 }) => e3.base === "dark" ? { background: e3.background.content } : {}
), w6 = xr$3.div(({ theme: e3 }) => ({
  padding: 4,
  "& + &": {
    borderTop: `1px solid ${e3.appBorderColor}`
  }
})), b6 = /* @__PURE__ */ o$1(({ id: e$1, onClick: t3, ...r3 }) => {
  let { active: n3, disabled: a4, title: i3, href: c4 } = r3, l4 = reactExports.useCallback(
    (s2) => t3 == null ? void 0 : t3(s2, { id: e$1, active: n3, disabled: a4, title: i3, href: c4 }),
    [t3, e$1, n3, a4, i3, c4]
  );
  return /* @__PURE__ */ e.createElement(il, { id: `list-item-${e$1}`, ...r3, ...t3 && { onClick: l4 } });
}, "Item"), ll = /* @__PURE__ */ o$1(({ links: e$1, LinkWrapper: t3, ...r3 }) => {
  let n3 = Array.isArray(e$1[0]) ? e$1 : [e$1], a4 = n3.some(
    (i3) => i3.some((c4) => "icon" in c4 && c4.icon || "input" in c4 && c4.input)
  );
  return /* @__PURE__ */ e.createElement(v6, { ...r3 }, n3.filter((i3) => i3.length).map((i3, c4) => /* @__PURE__ */ e.createElement(w6, { key: i3.map((l4) => l4.id).join(`~${c4}~`) }, i3.map((l4) => "content" in l4 ? /* @__PURE__ */ e.createElement(reactExports.Fragment, { key: l4.id }, l4.content) : /* @__PURE__ */ e.createElement(b6, { key: l4.id, isIndented: a4, LinkWrapper: t3, ...l4 })))));
}, "TooltipLinkList");
ro();
var cl = xr$3.div(
  {
    display: "flex",
    whiteSpace: "nowrap",
    flexBasis: "auto",
    marginLeft: 3,
    marginRight: 10
  },
  ({ scrollable: e3 }) => e3 ? { flexShrink: 0 } : {},
  ({ left: e3 }) => e3 ? {
    "& > *": {
      marginLeft: 4
    }
  } : {},
  ({ right: e3 }) => e3 ? {
    gap: 6
  } : {}
);
cl.displayName = "Side";
var R6 = /* @__PURE__ */ o$1(({ children: e$1, className: t3, scrollable: r3 }) => r3 ? /* @__PURE__ */ e.createElement(
  yr,
  { vertical: false, className: t3 },
  e$1
) : /* @__PURE__ */ e.createElement("div", { className: t3 }, e$1), "UnstyledBar"), ul = xr$3(R6)(
  ({ backgroundColor: e3, theme: t3, scrollable: r3 = true }) => ({
    color: t3.barTextColor,
    width: "100%",
    minHeight: 40,
    flexShrink: 0,
    scrollbarColor: `${t3.barTextColor} ${e3 || t3.barBg}`,
    scrollbarWidth: "thin",
    overflow: r3 ? "auto" : "hidden",
    overflowY: "hidden"
  }),
  ({ theme: e3, border: t3 = false }) => t3 ? {
    boxShadow: `${e3.appBorderColor}  0 -1px 0 0 inset`,
    background: e3.barBg
  } : {}
);
ul.displayName = "Bar";
var x6 = xr$3.div(({ bgColor: e3 }) => ({
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
  flexWrap: "nowrap",
  flexShrink: 0,
  height: 40,
  backgroundColor: e3 || ""
})), jo = /* @__PURE__ */ o$1(({ children: e$1, backgroundColor: t3, className: r3, ...n3 }) => {
  let [a4, i3] = reactExports.Children.toArray(e$1);
  return /* @__PURE__ */ e.createElement(ul, { backgroundColor: t3, className: `sb-bar ${r3}`, ...n3 }, /* @__PURE__ */ e.createElement(x6, {
    bgColor: t3
  }, /* @__PURE__ */ e.createElement(cl, { scrollable: n3.scrollable, left: true }, a4), i3 ? /* @__PURE__ */ e.createElement(
    cl,
    { right: true },
    i3
  ) : null));
}, "FlexBar");
jo.displayName = "FlexBar";
var M6 = /* @__PURE__ */ o$1((e3) => typeof e3.props.href == "string", "isLink"), A6 = /* @__PURE__ */ o$1(
  (e3) => typeof e3.props.href != "string",
  "isButton"
);
function L6({ children: e$1, ...t3 }, r3) {
  let n3 = { props: t3, ref: r3 };
  if (M6(n3))
    return /* @__PURE__ */ e.createElement("a", { ref: n3.ref, ...n3.props }, e$1);
  if (A6(n3))
    return /* @__PURE__ */ e.createElement("button", { ref: n3.ref, type: "button", ...n3.props }, e$1);
  throw new Error("invalid props");
}
o$1(L6, "ForwardRefFunction");
var ep = reactExports.forwardRef(L6);
ep.displayName = "ButtonOrLink";
var ar = xr$3(ep, { shouldForwardProp: yr$3 })(
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
  ({ theme: e3 }) => ({
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
      borderBottomColor: e3.barSelectedColor
    }
  }),
  ({ active: e3, textColor: t3, theme: r3 }) => e3 ? {
    color: t3 || r3.barSelectedColor,
    borderBottomColor: r3.barSelectedColor
  } : {
    color: t3 || r3.barTextColor,
    borderBottomColor: "transparent",
    "&:hover": {
      color: r3.barHoverColor
    }
  }
);
ar.displayName = "TabButton";
var I6 = xr$3.div(({ theme: e3 }) => ({
  height: "100%",
  display: "flex",
  padding: 30,
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: 15,
  background: e3.background.content
})), z6 = xr$3.div({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  maxWidth: 415
}), T6 = xr$3.div(({ theme: e3 }) => ({
  fontWeight: e3.typography.weight.bold,
  fontSize: e3.typography.size.s2 - 1,
  textAlign: "center",
  color: e3.textColor
})), H6 = xr$3.div(({ theme: e3 }) => ({
  fontWeight: e3.typography.weight.regular,
  fontSize: e3.typography.size.s2 - 1,
  textAlign: "center",
  color: e3.textMutedColor
})), qo = /* @__PURE__ */ o$1(({ title: e$1, description: t3, footer: r3 }) => /* @__PURE__ */ e.createElement(I6, null, /* @__PURE__ */ e.createElement(
  z6,
  null,
  /* @__PURE__ */ e.createElement(T6, null, e$1),
  t3 && /* @__PURE__ */ e.createElement(H6, null, t3)
), r3), "EmptyTabContent");
var fl = xr$3.div(
  ({ active: e3 }) => e3 ? { display: "block" } : { display: "none" }
), tp = /* @__PURE__ */ o$1((e$1) => reactExports.Children.toArray(e$1).map(
  // @ts-expect-error (non strict)
  ({
    props: { title: t3, id: r3, color: n3, children: a4 }
  }) => {
    let i3 = Array.isArray(
      a4
    ) ? a4[0] : a4;
    return {
      title: t3,
      id: r3,
      ...n3 ? { color: n3 } : {},
      render: typeof i3 == "function" ? i3 : ({ active: l4 }) => /* @__PURE__ */ e.createElement(fl, { active: l4, role: "tabpanel" }, i3)
    };
  }
), "childrenToList");
Vo();
var F6 = xr$3.span(({ theme: e3, isActive: t3 }) => ({
  display: "inline-block",
  width: 0,
  height: 0,
  marginLeft: 8,
  color: t3 ? e3.color.secondary : e3.color.mediumdark,
  borderRight: "3px solid transparent",
  borderLeft: "3px solid transparent",
  borderTop: "3px solid",
  transition: "transform .1s ease-out"
})), D6 = xr$3(ar)(({ active: e3, theme: t3, preActive: r3 }) => `
    color: ${r3 || e3 ? t3.barSelectedColor : t3.barTextColor};
    .addon-collapsible-icon {
      color: ${r3 || e3 ? t3.barSelectedColor : t3.barTextColor};
    }
    &:hover {
      color: ${t3.barHoverColor};
      .addon-collapsible-icon {
        color: ${t3.barHoverColor};
      }
    }
  `);
function op(e$1) {
  let t3 = reactExports.useRef(), r3 = reactExports.useRef(), n3 = reactExports.useRef(/* @__PURE__ */ new Map()), { width: a4 = 1 } = Eo({
    // @ts-expect-error (non strict)
    ref: t3
  }), [i3, c4] = reactExports.useState(e$1), [l4, s2] = reactExports.useState([]), u2 = reactExports.useRef(e$1), f2 = reactExports.useCallback(
    ({
      menuName: m4,
      actions: v3
    }) => {
      let y4 = l4.some(({ active: g4 }) => g4), [p2, h4] = reactExports.useState(false);
      return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
        ol,
        {
          interactive: true,
          visible: p2,
          onVisibleChange: h4,
          placement: "bottom",
          delayHide: 100,
          tooltip: /* @__PURE__ */ e.createElement(
            ll,
            {
              links: l4.map(({ title: g4, id: w3, color: b4, active: x4 }) => ({
                id: w3,
                title: g4,
                color: b4,
                active: x4,
                onClick: /* @__PURE__ */ o$1((E3) => {
                  E3.preventDefault(), v3.onSelect(w3);
                }, "onClick")
              }))
            }
          )
        },
        /* @__PURE__ */ e.createElement(
          D6,
          {
            id: "addons-menu-button",
            ref: r3,
            active: y4,
            preActive: p2,
            style: { visibility: l4.length ? "visible" : "hidden" },
            "aria-hidden": !l4.length,
            className: "tabbutton",
            type: "button",
            role: "tab"
          },
          m4,
          /* @__PURE__ */ e.createElement(
            F6,
            {
              className: "addon-collapsible-icon",
              isActive: y4 || p2
            }
          )
        )
      ), l4.map(({ title: g4, id: w3, color: b4 }, x4) => {
        let E3 = `index-${x4}`;
        return /* @__PURE__ */ e.createElement(
          ar,
          {
            id: `tabbutton-${jn(w3) ?? E3}`,
            style: { visibility: "hidden" },
            "aria-hidden": true,
            tabIndex: -1,
            ref: (R4) => {
              n3.current.set(w3, R4);
            },
            className: "tabbutton",
            type: "button",
            key: w3,
            textColor: b4,
            role: "tab"
          },
          g4
        );
      }));
    },
    [l4]
  ), d2 = reactExports.useCallback(() => {
    if (!t3.current || !r3.current)
      return;
    let { x: m4, width: v3 } = t3.current.getBoundingClientRect(), { width: y4 } = r3.current.getBoundingClientRect(), p2 = l4.length ? m4 + v3 - y4 : m4 + v3, h4 = [], g4 = 0, w3 = e$1.filter((b4) => {
      let { id: x4 } = b4, E3 = n3.current.get(x4), { width: R4 = 0 } = (E3 == null ? void 0 : E3.getBoundingClientRect()) || {}, S3 = m4 + g4 + R4 > p2;
      return (!S3 || !E3) && h4.push(b4), g4 += R4, S3;
    });
    (h4.length !== i3.length || u2.current !== e$1) && (c4(h4), s2(w3), u2.current = e$1);
  }, [l4.length, e$1, i3]);
  return reactExports.useLayoutEffect(d2, [d2, a4]), {
    tabRefs: n3,
    addonsRef: r3,
    tabBarRef: t3,
    visibleList: i3,
    invisibleList: l4,
    AddonTab: f2
  };
}
o$1(op, "useList");
var j6 = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */", W6 = xr$3.div(
  ({ theme: e3, bordered: t3 }) => t3 ? {
    backgroundClip: "padding-box",
    border: `1px solid ${e3.appBorderColor}`,
    borderRadius: e3.appBorderRadius,
    overflow: "hidden",
    boxSizing: "border-box"
  } : {},
  ({ absolute: e3 }) => e3 ? {
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column"
  } : {
    display: "block"
  }
), gl = xr$3.div({
  overflow: "hidden",
  "&:first-of-type": {
    marginLeft: -3
  },
  whiteSpace: "nowrap",
  flexGrow: 1
});
gl.displayName = "TabBar";
var U6 = xr$3.div(
  {
    display: "block",
    position: "relative",
    container: "tab-content / inline-size"
  },
  ({ theme: e3 }) => ({
    fontSize: e3.typography.size.s2 - 1,
    background: e3.background.content
  }),
  ({ bordered: e3, theme: t3 }) => e3 ? {
    borderRadius: `0 0 ${t3.appBorderRadius - 1}px ${t3.appBorderRadius - 1}px`
  } : {},
  ({ absolute: e3, bordered: t3 }) => e3 ? {
    height: `calc(100% - ${t3 ? 42 : 40}px)`,
    position: "absolute",
    left: 0 + (t3 ? 1 : 0),
    right: 0 + (t3 ? 1 : 0),
    bottom: 0 + (t3 ? 1 : 0),
    top: 40 + (t3 ? 1 : 0),
    overflow: "auto",
    [`& > *:first-child${j6}`]: {
      position: "absolute",
      left: 0 + (t3 ? 1 : 0),
      right: 0 + (t3 ? 1 : 0),
      bottom: 0 + (t3 ? 1 : 0),
      top: 0 + (t3 ? 1 : 0),
      height: `calc(100% - ${t3 ? 2 : 0}px)`,
      overflow: "auto"
    }
  } : {}
), q6 = /* @__PURE__ */ o$1(({ active: e$1, render: t3, children: r3 }) => /* @__PURE__ */ e.createElement(fl, { active: e$1 }, t3 ? t3() : r3), "TabWrapper");
var wl = class wl2 extends reactExports.Component {
  constructor(t3) {
    super(t3), this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(t3, r3) {
    console.error("Error rendering addon panel"), console.error(t3), console.error(r3.componentStack);
  }
  render() {
    return this.state.hasError && this.props.active ? /* @__PURE__ */ e.createElement(
      qo,
      {
        title: "This addon has errors",
        description: "Check your browser logs and addon code to pinpoint what went wrong. This issue was not caused by Storybook."
      }
    ) : this.props.children;
  }
};
o$1(wl, "TabErrorBoundary");
var pl = wl, vl = reactExports.memo(
  ({
    children: e$1,
    selected: t3 = null,
    actions: r3,
    absolute: n3 = false,
    bordered: a4 = false,
    tools: i3 = null,
    backgroundColor: c4,
    id: l4 = null,
    menuName: s2 = "Tabs",
    emptyState: u2,
    showToolsWhenEmpty: f2
  }) => {
    let d2 = reactExports.useMemo(
      () => tp(e$1).map((g4, w3) => ({
        ...g4,
        active: t3 ? g4.id === t3 : w3 === 0
      })),
      [e$1, t3]
    ), { visibleList: m4, tabBarRef: v3, tabRefs: y4, AddonTab: p2 } = op(d2), h4 = u2 ?? /* @__PURE__ */ e.createElement(qo, { title: "Nothing found" });
    return !f2 && d2.length === 0 ? h4 : (
      // @ts-expect-error (non strict)
      /* @__PURE__ */ e.createElement(W6, { absolute: n3, bordered: a4, id: l4 }, /* @__PURE__ */ e.createElement(jo, {
        scrollable: false,
        border: true,
        backgroundColor: c4
      }, /* @__PURE__ */ e.createElement(gl, { style: { whiteSpace: "normal" }, ref: v3, role: "tablist" }, m4.map(({
        title: g4,
        id: w3,
        active: b4,
        color: x4
      }, E3) => {
        let R4 = `index-${E3}`;
        return /* @__PURE__ */ e.createElement(
          ar,
          {
            id: `tabbutton-${jn(w3) ?? R4}`,
            ref: (S3) => {
              y4.current.set(w3, S3);
            },
            className: `tabbutton ${b4 ? "tabbutton-active" : ""}`,
            type: "button",
            key: w3,
            active: b4,
            textColor: x4,
            onClick: (S3) => {
              S3.preventDefault(), r3.onSelect(w3);
            },
            role: "tab"
          },
          typeof g4 == "function" ? /* @__PURE__ */ e.createElement("title", null) : g4
        );
      }), /* @__PURE__ */ e.createElement(p2, { menuName: s2, actions: r3 })), i3), /* @__PURE__ */ e.createElement(U6, { id: "panel-tab-content", bordered: a4, absolute: n3 }, d2.length ? d2.map(({ id: g4, active: w3, render: b4 }) => /* @__PURE__ */ e.createElement(
        pl,
        { key: g4, active: w3 },
        e.createElement(b4, { active: w3 }, null)
      )) : h4))
    );
  }
);
vl.displayName = "Tabs";
var Yo = class Yo2 extends reactExports.Component {
  constructor(r3) {
    super(r3);
    this.handlers = {
      onSelect: /* @__PURE__ */ o$1((r4) => this.setState({ selected: r4 }), "onSelect")
    };
    this.state = {
      selected: r3.initial
    };
  }
  render() {
    let { bordered: r3 = false, absolute: n3 = false, children: a4, backgroundColor: i3, menuName: c4 } = this.props, { selected: l4 } = this.state;
    return /* @__PURE__ */ e.createElement(
      vl,
      {
        bordered: r3,
        absolute: n3,
        selected: l4,
        backgroundColor: i3,
        menuName: c4,
        actions: this.handlers
      },
      a4
    );
  }
};
o$1(Yo, "TabsState"), Yo.defaultProps = {
  children: [],
  // @ts-expect-error (non strict)
  initial: null,
  absolute: false,
  bordered: false,
  backgroundColor: "",
  // @ts-expect-error (non strict)
  menuName: void 0
};
var ml = Yo;
var bl = xr$3.span(
  ({ theme: e3 }) => ({
    width: 1,
    height: 20,
    background: e3.appBorderColor,
    marginLeft: 2,
    marginRight: 2
  }),
  ({ force: e3 }) => e3 ? {} : {
    "& + &": {
      display: "none"
    }
  }
);
bl.displayName = "Separator";
var X6 = /* @__PURE__ */ o$1((e$1) => e$1.reduce(
  (t3, r3, n3) => r3 ? /* @__PURE__ */ e.createElement(reactExports.Fragment, { key: r3.id || r3.key || `f-${n3}` }, t3, n3 > 0 ? /* @__PURE__ */ e.createElement(bl, {
    key: `s-${n3}`
  }) : null, r3.render() || r3) : t3,
  null
), "interleaveSeparators");
var Q6 = /* @__PURE__ */ o$1((e3) => {
  let t3 = reactExports.useRef();
  return reactExports.useEffect(() => {
    t3.current = e3;
  }, [e3]), t3.current;
}, "usePrevious"), ew = /* @__PURE__ */ o$1((e3, t3) => {
  let r3 = Q6(t3);
  return e3 ? t3 : r3;
}, "useUpdate"), tw = /* @__PURE__ */ o$1(({ active: e$1, children: t3 }) => (
  // the hidden attribute is an valid html element that's both accessible and works to visually hide content
  /* @__PURE__ */ e.createElement("div", { hidden: !e$1 }, ew(e$1, t3))
), "AddonPanel");
var rw = /* @__PURE__ */ o$1(({ alt: e$1, ...t3 }) => /* @__PURE__ */ e.createElement("svg", { width: "200px", height: "40px", viewBox: "0 0 200 40", ...t3, role: "img" }, e$1 ? /* @__PURE__ */ e.createElement("title", null, e$1) : null, /* @__PURE__ */ e.createElement("defs", null, /* @__PURE__ */ e.createElement(
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
var nw = /* @__PURE__ */ o$1((e$1) => /* @__PURE__ */ e.createElement("svg", { viewBox: "0 0 64 64", ...e$1 }, /* @__PURE__ */ e.createElement("title", null, "Storybook icon"), /* @__PURE__ */ e.createElement("g", { id: "Artboard", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" }, /* @__PURE__ */ e.createElement(
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
var lp = Ee$2`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;
var iw = xr$3.div(({ size: e3 = 32 }) => ({
  borderRadius: "50%",
  cursor: "progress",
  display: "inline-block",
  overflow: "hidden",
  position: "absolute",
  transition: "all 200ms ease-out",
  verticalAlign: "top",
  top: "50%",
  left: "50%",
  marginTop: -(e3 / 2),
  marginLeft: -(e3 / 2),
  height: e3,
  width: e3,
  zIndex: 4,
  borderWidth: 2,
  borderStyle: "solid",
  borderColor: "rgba(97, 97, 97, 0.29)",
  borderTopColor: "rgb(100,100,100)",
  animation: `${lp} 0.7s linear infinite`,
  mixBlendMode: "difference"
})), cp = xr$3.div({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%"
}), lw = xr$3.div(({ theme: e3 }) => ({
  position: "relative",
  width: "80%",
  marginBottom: "0.75rem",
  maxWidth: 300,
  height: 5,
  borderRadius: 5,
  background: we$1(0.8, e3.color.secondary),
  overflow: "hidden",
  cursor: "progress"
})), cw = xr$3.div(({ theme: e3 }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  background: e3.color.secondary
})), sp = xr$3.div(({ theme: e3 }) => ({
  minHeight: "2em",
  fontSize: `${e3.typography.size.s1}px`,
  color: e3.textMutedColor
})), sw = xr$3(q5)(({ theme: e3 }) => ({
  width: 20,
  height: 20,
  marginBottom: "0.5rem",
  color: e3.textMutedColor
})), uw = Ee$2`
  from { content: "..." }
  33% { content: "." }
  66% { content: ".." }
  to { content: "..." }
`, fw = xr$3.span({
  "&::after": {
    content: "'...'",
    animation: `${uw} 1s linear infinite`,
    animationDelay: "1s",
    display: "inline-block",
    width: "1em",
    height: "auto"
  }
}), dw = /* @__PURE__ */ o$1(({ progress: e$1, error: t3, size: r3, ...n3 }) => {
  if (t3)
    return /* @__PURE__ */ e.createElement(cp, { "aria-label": t3.toString(), "aria-live": "polite", role: "status", ...n3 }, /* @__PURE__ */ e.createElement(sw, null), /* @__PURE__ */ e.createElement(sp, null, t3.message));
  if (e$1) {
    let { value: a4, modules: i3 } = e$1, { message: c4 } = e$1;
    return i3 && (c4 += ` ${i3.complete} / ${i3.total} modules`), /* @__PURE__ */ e.createElement(
      cp,
      {
        "aria-label": "Content is loading...",
        "aria-live": "polite",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": a4 * 100,
        "aria-valuetext": c4,
        role: "progressbar",
        ...n3
      },
      /* @__PURE__ */ e.createElement(lw, null, /* @__PURE__ */ e.createElement(cw, { style: { width: `${a4 * 100}%` } })),
      /* @__PURE__ */ e.createElement(sp, null, c4, a4 < 1 && /* @__PURE__ */ e.createElement(fw, { key: c4 }))
    );
  }
  return /* @__PURE__ */ e.createElement(
    iw,
    {
      "aria-label": "Content is loading...",
      "aria-live": "polite",
      role: "status",
      size: r3,
      ...n3
    }
  );
}, "Loader");
var yl = "http://www.w3.org/2000/svg", mw = Ee$2({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), up = xr$3.div(({ size: e3 }) => ({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  minWidth: e3,
  minHeight: e3
})), Rl = xr$3.svg(
  ({ size: e3, width: t3 }) => ({
    position: "absolute",
    width: `${e3}px!important`,
    height: `${e3}px!important`,
    transform: "rotate(-90deg)",
    circle: {
      r: (e3 - Math.ceil(t3)) / 2,
      cx: e3 / 2,
      cy: e3 / 2,
      opacity: 0.15,
      fill: "transparent",
      stroke: "currentColor",
      strokeWidth: t3,
      strokeLinecap: "round",
      strokeDasharray: Math.PI * (e3 - Math.ceil(t3))
    }
  }),
  ({ progress: e3 }) => e3 && {
    circle: {
      opacity: 0.75
    }
  },
  ({ spinner: e3 }) => e3 && {
    animation: `${mw} 1s linear infinite`,
    circle: {
      opacity: 0.25
    }
  }
), hw = /* @__PURE__ */ o$1(({
  percentage: e$1 = void 0,
  running: t3 = true,
  size: r3 = 24,
  width: n3 = 1.5,
  children: a4 = null,
  ...i3
}) => typeof e$1 == "number" ? /* @__PURE__ */ e.createElement(up, { size: r3, ...i3 }, a4, /* @__PURE__ */ e.createElement(Rl, {
  size: r3,
  width: n3,
  xmlns: yl
}, /* @__PURE__ */ e.createElement("circle", null)), t3 && /* @__PURE__ */ e.createElement(
  Rl,
  { size: r3, width: n3, xmlns: yl, spinner: true },
  /* @__PURE__ */ e.createElement("circle", { strokeDashoffset: Math.PI * (r3 - Math.ceil(n3)) * (1 - e$1 / 100) })
), /* @__PURE__ */ e.createElement(
  Rl,
  { size: r3, width: n3, xmlns: yl, progress: true },
  /* @__PURE__ */ e.createElement("circle", { strokeDashoffset: Math.PI * (r3 - Math.ceil(
    n3
  )) * (1 - e$1 / 100) })
)) : /* @__PURE__ */ e.createElement(up, { size: r3, ...i3 }, a4), "ProgressSpinner");
function gw(e3) {
  let t3 = {}, r3 = e3.split("&");
  for (let n3 = 0; n3 < r3.length; n3++) {
    let a4 = r3[n3].split("=");
    t3[decodeURIComponent(a4[0])] = decodeURIComponent(a4[1] || "");
  }
  return t3;
}
o$1(gw, "parseQuery");
var vw = /* @__PURE__ */ o$1((e3, t3, r3 = {}) => {
  let [n3, a4] = e3.split("?"), i3 = a4 ? {
    ...gw(a4),
    ...r3,
    id: t3
  } : {
    ...r3,
    id: t3
  };
  return `${n3}?${Object.entries(i3).map((c4) => `${c4[0]}=${c4[1]}`).join("&")}`;
}, "getStoryHref");
var Rw = xr$3.pre`
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
`, xw = /* @__PURE__ */ o$1(({ code: e$1, ...t3 }) => /* @__PURE__ */ e.createElement(Rw, { id: "clipboard-code", ...t3 }, e$1), "ClipboardCode");
var yO = Ci, Cw = {};
Object.keys(Ci).forEach((e3) => {
  Cw[e3] = reactExports.forwardRef((t3, r3) => reactExports.createElement(e3, { ...t3, ref: r3 }));
});
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  A: oa,
  get ActionBar() {
    return Ya;
  },
  AddonPanel: tw,
  Badge: Gh,
  Bar: ul,
  Blockquote: aa,
  Button: Ir,
  ClipboardCode: xw,
  Code: ii,
  DL: li,
  Div: ci,
  DocumentWrapper: eg,
  EmptyTabContent: qo,
  ErrorFormatter: g3,
  FlexBar: jo,
  Form: Z3,
  H1: si,
  H2: ui,
  H3: fi,
  H4: di,
  H5: pi,
  H6: mi,
  HR: hi,
  IconButton: xo,
  Img: gi,
  LI: vi,
  Link: Ai,
  ListItem: il,
  Loader: dw,
  Modal: _v,
  OL: wi,
  P: bi,
  Placeholder: Zv,
  Pre: yi,
  ProgressSpinner: hw,
  ResetWrapper: jl,
  get ScrollArea() {
    return yr;
  },
  Separator: bl,
  Spaced: Uv,
  Span: Ri,
  StorybookIcon: nw,
  StorybookLogo: rw,
  SyntaxHighlighter: ru,
  TT: xi,
  TabBar: gl,
  TabButton: ar,
  TabWrapper: q6,
  Table: Ei,
  Tabs: vl,
  TabsState: ml,
  TooltipLinkList: ll,
  TooltipMessage: r6,
  TooltipNote: i6,
  UL: Si,
  WithTooltip: Y7,
  WithTooltipPure: Z7,
  Zoom: l3,
  codeCommon: at,
  components: yO,
  createCopyToClipboardFunction: oi,
  getStoryHref: vw,
  interleaveSeparators: X6,
  nameSpaceClassNames: J$1,
  resetComponents: Cw,
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
  values.forEach(function(value2, i3) {
    var endentations = string.match(/(?:^|\n)( *)$/);
    var endentation = endentations ? endentations[1] : "";
    var indentedValue = value2;
    if (typeof value2 === "string" && value2.includes("\n")) {
      indentedValue = String(value2).split("\n").map(function(str, i4) {
        return i4 === 0 ? str : "" + endentation + str;
      }).join("\n");
    }
    string += indentedValue + strings[i3 + 1];
  });
  return string;
}
const { deprecate, once, logger } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
const { NAVIGATE_URL, STORY_ARGS_UPDATED, UPDATE_STORY_ARGS, RESET_STORY_ARGS, GLOBALS_UPDATED } = __STORYBOOK_MODULE_CORE_EVENTS__;
const { filterArgTypes, composeConfigs, Preview: Preview$1, DocsContext: DocsContext$1 } = __STORYBOOK_MODULE_PREVIEW_API__;
const { Channel } = __STORYBOOK_MODULE_CHANNELS__;
var require_memoizerific = __commonJS({ "../../node_modules/memoizerific/memoizerific.js"(exports, module) {
  (function(f2) {
    if (typeof exports == "object" && typeof module < "u") module.exports = f2();
    else if (typeof define == "function" && define.amd) define([], f2);
    else {
      var g22;
      typeof window < "u" ? g22 = window : typeof global < "u" ? g22 = global : typeof self < "u" ? g22 = self : g22 = this, g22.memoizerific = f2();
    }
  })(function() {
    return function e22(t22, n22, r22) {
      function s2(o3, u2) {
        if (!n22[o3]) {
          if (!t22[o3]) {
            var a22 = typeof __require == "function" && __require;
            if (!u2 && a22) return a22(o3, true);
            if (i22) return i22(o3, true);
            var f2 = new Error("Cannot find module '" + o3 + "'");
            throw f2.code = "MODULE_NOT_FOUND", f2;
          }
          var l22 = n22[o3] = { exports: {} };
          t22[o3][0].call(l22.exports, function(e3) {
            var n3 = t22[o3][1][e3];
            return s2(n3 || e3);
          }, l22, l22.exports, e22, t22, n22, r22);
        }
        return n22[o3].exports;
      }
      for (var i22 = typeof __require == "function" && __require, o22 = 0; o22 < r22.length; o22++) s2(r22[o22]);
      return s2;
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
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
    return t3.__proto__ = e3, t3;
  }, _setPrototypeOf(t22, e22);
}
function _inheritsLoose(t22, o22) {
  t22.prototype = Object.create(o22.prototype), t22.prototype.constructor = t22, _setPrototypeOf(t22, o22);
}
function _getPrototypeOf(t22) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
    return t3.__proto__ || Object.getPrototypeOf(t3);
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
  var p2 = new (t22.bind.apply(t22, o22))();
  return r22 && _setPrototypeOf(p2, r22.prototype), p2;
}
function _wrapNativeSuper(t22) {
  var r22 = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper = function(t3) {
    if (t3 === null || !_isNativeFunction(t3)) return t3;
    if (typeof t3 != "function") throw new TypeError("Super expression must either be null or a function");
    if (r22 !== void 0) {
      if (r22.has(t3)) return r22.get(t3);
      r22.set(t3, Wrapper11);
    }
    function Wrapper11() {
      return _construct(t3, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper11.prototype = Object.create(t3.prototype, { constructor: { value: Wrapper11, enumerable: false, writable: true, configurable: true } }), _setPrototypeOf(Wrapper11, t3);
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
  return b22.forEach(function(d2) {
    a22 = a22.replace(/%[a-z]/, d2);
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
function curried(f2, length, acc) {
  return function() {
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f2.apply(this, combined) : curried(f2, length, combined);
  };
}
function curry(f2) {
  return curried(f2, f2.length, []);
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
  var parsedColor1 = parseToRgb(color), color1 = _extends({}, parsedColor1, { alpha: typeof parsedColor1.alpha == "number" ? parsedColor1.alpha : 1 }), parsedColor2 = parseToRgb(otherColor), color2 = _extends({}, parsedColor2, { alpha: typeof parsedColor2.alpha == "number" ? parsedColor2.alpha : 1 }), alphaDelta = color1.alpha - color2.alpha, x22 = parseFloat(weight) * 2 - 1, y22 = x22 * alphaDelta === -1 ? x22 : x22 + alphaDelta, z2 = 1 + x22 * alphaDelta, weight1 = (y22 / z2 + 1) / 2, weight2 = 1 - weight1, mixedColor = { red: Math.floor(color1.red * weight1 + color2.red * weight2), green: Math.floor(color1.green * weight1 + color2.green * weight2), blue: Math.floor(color1.blue * weight1 + color2.blue * weight2), alpha: color1.alpha * parseFloat(weight) + color2.alpha * (1 - parseFloat(weight)) };
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
var StyledSyntaxHighlighter = xr$3(ru)(({ theme }) => ({ fontSize: `${theme.typography.size.s2 - 1}px`, lineHeight: "19px", margin: "25px 0 40px", borderRadius: theme.appBorderRadius, boxShadow: theme.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", "pre.prismjs": { padding: 20, background: "inherit" } }));
var SourceSkeletonWrapper = xr$3.div(({ theme }) => ({ background: theme.background.content, borderRadius: theme.appBorderRadius, border: `1px solid ${theme.appBorderColor}`, boxShadow: theme.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", margin: "25px 0 40px", padding: "20px 20px 20px 22px" })), SourceSkeletonPlaceholder = xr$3.div(({ theme }) => ({ animation: `${theme.animation.glow} 1.5s ease-in-out infinite`, background: theme.appBorderColor, height: 17, marginTop: 1, width: "60%", [`&:first-child${hf}`]: { margin: 0 } })), SourceSkeleton = () => e.createElement(SourceSkeletonWrapper, null, e.createElement(SourceSkeletonPlaceholder, null), e.createElement(SourceSkeletonPlaceholder, { style: { width: "80%" } }), e.createElement(SourceSkeletonPlaceholder, { style: { width: "30%" } }), e.createElement(SourceSkeletonPlaceholder, { style: { width: "80%" } })), Source = ({ isLoading, error, language, code, dark, format: format3 = true, ...rest }) => {
  let { typography } = St$3();
  if (isLoading) return e.createElement(SourceSkeleton, null);
  if (error) return e.createElement(EmptyBlock, null, error);
  let syntaxHighlighter = e.createElement(StyledSyntaxHighlighter, { bordered: true, copyable: true, format: format3, language: language ?? "jsx", className: "docblock-source sb-unstyled", ...rest }, code);
  if (typeof dark > "u") return syntaxHighlighter;
  let overrideTheme = dark ? Me$4.dark : Me$4.light;
  return e.createElement(Tt$3, { theme: Ir$3({ ...overrideTheme, fontCode: typography.fonts.mono, fontBase: typography.fonts.base }) }, syntaxHighlighter);
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
  }, [autoplay, renderStoryToElement, story]), error ? e.createElement("pre", null, e.createElement(g3, { error })) : e.createElement(e.Fragment, null, height ? e.createElement("style", null, `#${storyBlockIdFromId(props)} { min-height: ${height}; transform: translateZ(0); overflow: auto }`) : null, showLoader && e.createElement(StorySkeleton, null), e.createElement("div", { ref: storyRef, id: `${storyBlockIdFromId(props)}-inner`, "data-name": story.name }));
}, IFrameStory = ({ story, height = "500px" }) => e.createElement("div", { style: { width: "100%", height } }, e.createElement(ZoomContext.Consumer, null, ({ scale }) => e.createElement(IFrame, { key: "iframe", id: `iframe--${story.id}`, title: story.name, src: vw(BASE_URL, story.id, { viewMode: "story" }), allowFullScreen: true, scale, style: { width: "100%", height: "100%", border: "0 none" } }))), ErrorMessage = xr$3.strong(({ theme }) => ({ color: theme.color.orange })), Story = (props) => {
  let { inline, story } = props;
  return inline && !props.autoplay && story.usesMount ? e.createElement(ErrorMessage, null, "This story mounts inside of play. Set", " ", e.createElement("a", { href: "https://storybook.js.org/docs/api/doc-blocks/doc-block-story#autoplay" }, "autoplay"), " ", "to true to view this story.") : e.createElement("div", { id: storyBlockIdFromId(props), className: "sb-story sb-unstyled", "data-story-block": "true" }, inline ? e.createElement(InlineStory, { ...props }) : e.createElement(IFrameStory, { ...props }));
}, StorySkeleton = () => e.createElement(dw, null);
var Bar = xr$3(jo)({ position: "absolute", left: 0, right: 0, top: 0, transition: "transform .2s linear" }), Wrapper2 = xr$3.div({ display: "flex", alignItems: "center", gap: 4 }), IconPlaceholder = xr$3.div(({ theme }) => ({ width: 14, height: 14, borderRadius: 2, margin: "0 7px", backgroundColor: theme.appBorderColor, animation: `${theme.animation.glow} 1.5s ease-in-out infinite` })), Toolbar = ({ isLoading, storyId, baseUrl, zoom, resetZoom, ...rest }) => e.createElement(Bar, { ...rest }, e.createElement(Wrapper2, { key: "left" }, isLoading ? [1, 2, 3].map((key) => e.createElement(IconPlaceholder, { key })) : e.createElement(e.Fragment, null, e.createElement(xo, { key: "zoomin", onClick: (e22) => {
  e22.preventDefault(), zoom(0.8);
}, title: "Zoom in" }, e.createElement(ZoomIcon, null)), e.createElement(xo, { key: "zoomout", onClick: (e22) => {
  e22.preventDefault(), zoom(1.25);
}, title: "Zoom out" }, e.createElement(ZoomOutIcon, null)), e.createElement(xo, { key: "zoomreset", onClick: (e22) => {
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
  return e.createElement(PreviewContainer, { withSource, withToolbar, ...props, className: previewClasses.join(" ") }, withToolbar && e.createElement(PositionedToolbar, { isLoading, border: true, zoom: (z2) => setScale(scale * z2), resetZoom: () => setScale(1), storyId: getStoryId(children), baseUrl: "./iframe.html" }), e.createElement(ZoomContext.Provider, { value: { scale } }, e.createElement(Relative, { className: "docs-story", onCopyCapture: withSource && onCopyCapture }, e.createElement(ChildrenContainer, { isColumn: isColumn || !Array.isArray(children), columns, layout, inline }, e.createElement(l3.Element, { centered: layout === "centered", scale: inline ? scale : 1 }, Array.isArray(children) ? children.map((child, i22) => e.createElement("div", { key: i22 }, child)) : e.createElement("div", null, children))), e.createElement(Ya, { actionItems }))), withSource && expanded && source);
};
xr$3(Preview)(() => ({ ".docs-story": { paddingTop: 32, paddingBottom: 40 } }));
var TabbedArgsTable = ({ tabs, ...props }) => {
  let entries = Object.entries(tabs);
  return entries.length === 1 ? e.createElement(ArgsTable, { ...entries[0][1], ...props }) : e.createElement(ml, null, entries.map((entry, index2) => {
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
  function createEl(d2, container) {
    let link = container.appendChild(createLink(d2));
    if (d2.children.length) {
      let list = createList(d2.isCollapsed);
      d2.children.forEach((child) => {
        createEl(child, list);
      }), link.appendChild(list);
    }
  }
  function render(parent, data) {
    let container = createList(false);
    if (data.forEach((d2) => {
      createEl(d2, container);
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
  function easeInOutQuad(t22, b22, c22, d2) {
    return t22 /= d2 / 2, t22 < 1 ? c22 / 2 * t22 * t22 + b22 : (t22--, -c22 / 2 * (t22 * (t22 - 2) - 1) + b22);
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
    var _a2, _b2, _c2;
    _buildHtml.updateToc(_headingsArray, e22), !_options.disableTocScrollSync && !isClick && updateTocScroll(_options), _options.enableUrlHashUpdateOnScroll && hasInitialized && _buildHtml.getCurrentlyHighlighting() && _buildHtml.updateUrlHashForHeader(_headingsArray);
    let isTop = ((_b2 = (_a2 = e22 == null ? void 0 : e22.target) == null ? void 0 : _a2.scrollingElement) == null ? void 0 : _b2.scrollTop) === 0;
    (e22 && (e22.eventPhase === 0 || e22.currentTarget === null) || isTop) && (_buildHtml.updateToc(_headingsArray), (_c2 = _options.scrollEndCallback) == null ? void 0 : _c2.call(_options, e22));
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
  return { match: Me2(function(e3, t3) {
    let n3 = ae.exec(t3.prevCapture);
    return n3 && (t3.list || !t3.inline && !t3.simple) ? i22.exec(e3 = n3[1] + e3) : null;
  }), order: 1, parse(e3, t3, r22) {
    let i3 = n22 ? +e3[2] : void 0, a22 = e3[0].replace(u, `
`).match(l22), c22 = false;
    return { items: a22.map(function(e4, n3) {
      let i4 = o22.exec(e4)[0].length, l32 = new RegExp("^ {1," + i4 + "}", "gm"), s2 = e4.replace(l32, "").replace(o22, ""), d2 = n3 === a22.length - 1, u2 = s2.indexOf(`

`) !== -1 || d2 && c22;
      c22 = u2;
      let p2 = r22.inline, f2 = r22.list, h22;
      r22.list = true, u2 ? (r22.inline = false, h22 = ze(s2) + `

`) : (r22.inline = true, h22 = ze(s2));
      let m22 = t3(h22, r22);
      return r22.inline = p2, r22.list = f2, m22;
    }), ordered: n22, start: i3 };
  }, render: (t3, n3, i3) => e22(t3.ordered ? "ol" : "ul", { key: i3.key, start: t3.type === r.orderedList ? t3.start : void 0 }, t3.items.map(function(t4, r22) {
    return e22("li", { key: r22 }, n3(t4, i3));
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
    let e3 = l22[l22.length - 1];
    e3.push.apply(e3, t22(o22, n22)), o22 = "";
  }
  return e22.trim().split(/(`[^`]*`|\\\||\|)/).filter(Boolean).forEach((e3, t3, n3) => {
    e3.trim() === "|" && (a22(), r22) ? t3 !== 0 && t3 !== n3.length - 1 && l22.push([]) : o22 += e3;
  }), a22(), n22.inTable = i22, l22;
}
function Te(e22, t22, n22) {
  n22.inline = true;
  let i22 = e22[2] ? e22[2].replace(Z, "").split("|").map(Ae) : [], l22 = e22[3] ? function(e3, t3, n3) {
    return e3.trim().split(`
`).map(function(e4) {
      return Oe(e4, t3, n3, true);
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
`).every((e3) => (e3 += `
`, !we.some((t3) => t3.test(e3)) && (n22 += e3, !!e3.trim())));
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
  function u2(e22, n3, ...r22) {
    let l22 = Ve(i22.overrides, `${e22}.props`, {});
    return i22.createElement(function(e3, t22) {
      let n4 = Ve(t22, e3);
      return n4 ? typeof n4 == "function" || typeof n4 == "object" && "render" in n4 ? n4 : Ve(t22, `${e3}.component`, e3) : e3;
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
      if (n3.length === 1) return l22 = n3[0], typeof l22 == "string" ? u2("span", { key: "outer" }, l22) : l22;
      l22 = null;
    }
    return i22.createElement(r22, { key: "outer" }, l22);
  }
  function q2(e22, t22) {
    let n3 = t22.match(s);
    return n3 ? n3.reduce(function(t3, n4) {
      let r22 = n4.indexOf("=");
      if (r22 !== -1) {
        let o22 = function(e3) {
          return e3.indexOf("-") !== -1 && e3.match(M) === null && (e3 = e3.replace(j, function(e4, t4) {
            return t4.toUpperCase();
          })), e3;
        }(n4.slice(0, r22)).trim(), a22 = function(e3) {
          let t4 = e3[0];
          return (t4 === '"' || t4 === "'") && e3.length >= 2 && e3[e3.length - 1] === t4 ? e3.slice(1, -1) : e3;
        }(n4.slice(r22 + 1).trim()), s2 = l[o22] || o22;
        if (s2 === "ref") return t3;
        let d2 = t3[s2] = function(e3, t4, n52, r3) {
          return t4 === "style" ? function(e4) {
            let t52 = [], n6 = "", r4 = false, i3 = false, l22 = "";
            if (!e4) return t52;
            for (let o4 = 0; o4 < e4.length; o4++) {
              let a32 = e4[o4];
              if (a32 !== '"' && a32 !== "'" || r4 || (i3 ? a32 === l22 && (i3 = false, l22 = "") : (i3 = true, l22 = a32)), a32 === "(" && n6.endsWith("url") ? r4 = true : a32 === ")" && r4 && (r4 = false), a32 !== ";" || i3 || r4) n6 += a32;
              else {
                let e5 = n6.trim();
                if (e5) {
                  let n72 = e5.indexOf(":");
                  if (n72 > 0) {
                    let r5 = e5.slice(0, n72).trim(), i4 = e5.slice(n72 + 1).trim();
                    t52.push([r5, i4]);
                  }
                }
                n6 = "";
              }
            }
            let o3 = n6.trim();
            if (o3) {
              let e5 = o3.indexOf(":");
              if (e5 > 0) {
                let n72 = o3.slice(0, e5).trim(), r5 = o3.slice(e5 + 1).trim();
                t52.push([n72, r5]);
              }
            }
            return t52;
          }(n52).reduce(function(t52, [n6, i3]) {
            return t52[n6.replace(/(-[a-z])/g, (e4) => e4[1].toUpperCase())] = r3(i3, e3, n6), t52;
          }, {}) : c.indexOf(t4) !== -1 ? r3(n52, e3, t4) : (n52.match(I) && (n52 = n52.slice(1, n52.length - 1)), n52 === "true" || n52 !== "false" && n52);
        }(e22, o22, a22, i22.sanitizer);
        typeof d2 == "string" && (O.test(d2) || R.test(d2)) && (t3[s2] = Z2(d2.trim()));
      } else n4 !== "style" && (t3[l[n4] || n4] = true);
      return t3;
    }, {}) : null;
  }
  i22.overrides = i22.overrides || {}, i22.sanitizer = i22.sanitizer || He, i22.slugify = i22.slugify || Le, i22.namedCodesToUnicode = i22.namedCodesToUnicode ? t({}, o, i22.namedCodesToUnicode) : o, i22.createElement = i22.createElement || reactExports.createElement;
  let Q2 = [], V2 = {}, X2 = { [r.blockQuote]: { match: De(p), order: 1, parse(e22, t22, n3) {
    let [, r22, i3] = e22[0].replace(f, "").match(h);
    return { alert: r22, children: t22(i3, n3) };
  }, render(e22, t22, n3) {
    let l22 = { key: n3.key };
    return e22.alert && (l22.className = "markdown-alert-" + i22.slugify(e22.alert.toLowerCase(), Le), e22.children.unshift({ attrs: {}, children: [{ type: r.text, text: e22.alert }], noInnerParse: true, type: r.htmlBlock, tag: "header" })), u2("blockquote", l22, t22(e22.children, n3));
  } }, [r.breakLine]: { match: Ue(m), order: 1, parse: Ze, render: (e22, t22, n3) => u2("br", { key: n3.key }) }, [r.breakThematic]: { match: De(g), order: 1, parse: Ze, render: (e22, t22, n3) => u2("hr", { key: n3.key }) }, [r.codeBlock]: { match: De(k), order: 0, parse: (e22) => ({ lang: void 0, text: ze(e22[0].replace(/^ {4}/gm, "")).replace(ne, "$1") }), render: (e22, n3, r22) => u2("pre", { key: r22.key }, u2("code", t({}, e22.attrs, { className: e22.lang ? `lang-${e22.lang}` : "" }), e22.text)) }, [r.codeFenced]: { match: De(y), order: 0, parse: (e22) => ({ attrs: q2("code", e22[3] || ""), lang: e22[2] || void 0, text: e22[4], type: r.codeBlock }) }, [r.codeInline]: { match: Ie2(x), order: 3, parse: (e22) => ({ text: e22[2].replace(ne, "$1") }), render: (e22, t22, n3) => u2("code", { key: n3.key }, e22.text) }, [r.footnote]: { match: De(C), order: 0, parse: (e22) => (Q2.push({ footnote: e22[2], identifier: e22[1] }), {}), render: qe }, [r.footnoteReference]: { match: Re($), order: 1, parse: (e22) => ({ target: `#${i22.slugify(e22[1], Le)}`, text: e22[1] }), render: (e22, t22, n3) => u2("a", { key: n3.key, href: i22.sanitizer(e22.target, "a", "href") }, u2("sup", { key: n3.key }, e22.text)) }, [r.gfmTask]: { match: Re(E), order: 1, parse: (e22) => ({ completed: e22[1].toLowerCase() === "x" }), render: (e22, t22, n3) => u2("input", { checked: e22.completed, key: n3.key, readOnly: true, type: "checkbox" }) }, [r.heading]: { match: De(i22.enforceAtxHeadings ? L : z), order: 1, parse: (e22, t22, n3) => ({ children: _e(t22, e22[2], n3), id: i22.slugify(e22[2], Le), level: e22[1].length }), render: (e22, t22, n3) => u2(`h${e22.level}`, { id: e22.id, key: n3.key }, t22(e22.children, n3)) }, [r.headingSetext]: { match: De(A), order: 0, parse: (e22, t22, n3) => ({ children: _e(t22, e22[1], n3), level: e22[2] === "=" ? 1 : 2, type: r.heading }) }, [r.htmlBlock]: { match: Ue(O), order: 1, parse(e22, t22, n3) {
    let [, r22] = e22[3].match(le), i3 = new RegExp(`^${r22}`, "gm"), l22 = e22[3].replace(i3, ""), o22 = (c22 = l22, Ee.some((e3) => e3.test(c22)) ? We : _e);
    var c22;
    let s2 = e22[1].toLowerCase(), d2 = a.indexOf(s2) !== -1, u32 = (d2 ? s2 : e22[1]).trim(), p2 = { attrs: q2(u32, e22[2]), noInnerParse: d2, tag: u32 };
    return n3.inAnchor = n3.inAnchor || s2 === "a", d2 ? p2.text = e22[3] : p2.children = o22(t22, l22, n3), n3.inAnchor = false, p2;
  }, render: (e22, n3, r22) => u2(e22.tag, t({ key: r22.key }, e22.attrs), e22.text || (e22.children ? n3(e22.children, r22) : "")) }, [r.htmlSelfClosing]: { match: Ue(R), order: 1, parse(e22) {
    let t22 = e22[1].trim();
    return { attrs: q2(t22, e22[2] || ""), tag: t22 };
  }, render: (e22, n3, r22) => u2(e22.tag, t({}, e22.attrs, { key: r22.key })) }, [r.htmlComment]: { match: Ue(B), order: 1, parse: () => ({}), render: qe }, [r.image]: { match: Ie2(Se), order: 1, parse: (e22) => ({ alt: e22[1], target: Pe(e22[2]), title: e22[3] }), render: (e22, t22, n3) => u2("img", { key: n3.key, alt: e22.alt || void 0, title: e22.title || void 0, src: i22.sanitizer(e22.target, "img", "src") }) }, [r.link]: { match: Re($e), order: 3, parse: (e22, t22, n3) => ({ children: Fe(t22, e22[1], n3), target: Pe(e22[2]), title: e22[3] }), render: (e22, t22, n3) => u2("a", { key: n3.key, href: i22.sanitizer(e22.target, "a", "href"), title: e22.title }, t22(e22.children, n3)) }, [r.linkAngleBraceStyleDetector]: { match: Re(N), order: 0, parse: (e22) => ({ children: [{ text: e22[1], type: r.text }], target: e22[1], type: r.link }) }, [r.linkBareUrlDetector]: { match: Me2((e22, t22) => t22.inAnchor || i22.disableAutoLink ? null : Re(D)(e22, t22)), order: 0, parse: (e22) => ({ children: [{ text: e22[1], type: r.text }], target: e22[1], title: void 0, type: r.link }) }, [r.linkMailtoDetector]: { match: Re(U), order: 0, parse(e22) {
    let t22 = e22[1], n3 = e22[1];
    return d.test(n3) || (n3 = "mailto:" + n3), { children: [{ text: t22.replace("mailto:", ""), type: r.text }], target: n3, type: r.link };
  } }, [r.orderedList]: Ce(u2, 1), [r.unorderedList]: Ce(u2, 2), [r.newlineCoalescer]: { match: De(b), order: 3, parse: Ze, render: () => `
` }, [r.paragraph]: { match: Me2(Ne), order: 3, parse: Ge2, render: (e22, t22, n3) => u2("p", { key: n3.key }, t22(e22.children, n3)) }, [r.ref]: { match: Re(P), order: 0, parse: (e22) => (V2[e22[1]] = { target: e22[2], title: e22[4] }, {}), render: qe }, [r.refImage]: { match: Ie2(_), order: 0, parse: (e22) => ({ alt: e22[1] || void 0, ref: e22[2] }), render: (e22, t22, n3) => V2[e22.ref] ? u2("img", { key: n3.key, alt: e22.alt, src: i22.sanitizer(V2[e22.ref].target, "img", "src"), title: V2[e22.ref].title }) : null }, [r.refLink]: { match: Re(F), order: 0, parse: (e22, t22, n3) => ({ children: t22(e22[1], n3), fallbackChildren: e22[0], ref: e22[2] }), render: (e22, t22, n3) => V2[e22.ref] ? u2("a", { key: n3.key, href: i22.sanitizer(V2[e22.ref].target, "a", "href"), title: V2[e22.ref].title }, t22(e22.children, n3)) : u2("span", { key: n3.key }, e22.fallbackChildren) }, [r.table]: { match: De(H), order: 1, parse: Te, render(e22, t22, n3) {
    let r22 = e22;
    return u2("table", { key: n3.key }, u2("thead", null, u2("tr", null, r22.header.map(function(e3, i3) {
      return u2("th", { key: i3, style: Be(r22, i3) }, t22(e3, n3));
    }))), u2("tbody", null, r22.cells.map(function(e3, i3) {
      return u2("tr", { key: i3 }, e3.map(function(e4, i4) {
        return u2("td", { key: i4, style: Be(r22, i4) }, t22(e4, n3));
      }));
    })));
  } }, [r.text]: { match: Ue(re), order: 4, parse: (e22) => ({ text: e22[0].replace(T, (e3, t22) => i22.namedCodesToUnicode[t22] ? i22.namedCodesToUnicode[t22] : e3) }), render: (e22) => e22.text }, [r.textBolded]: { match: Ie2(J), order: 2, parse: (e22, t22, n3) => ({ children: t22(e22[2], n3) }), render: (e22, t22, n3) => u2("strong", { key: n3.key }, t22(e22.children, n3)) }, [r.textEmphasized]: { match: Ie2(K), order: 3, parse: (e22, t22, n3) => ({ children: t22(e22[2], n3) }), render: (e22, t22, n3) => u2("em", { key: n3.key }, t22(e22.children, n3)) }, [r.textEscaped]: { match: Ie2(te), order: 1, parse: (e22) => ({ text: e22[1], type: r.text }) }, [r.textMarked]: { match: Ie2(Y), order: 3, parse: Ge2, render: (e22, t22, n3) => u2("mark", { key: n3.key }, t22(e22.children, n3)) }, [r.textStrikethroughed]: { match: Ie2(ee), order: 3, parse: Ge2, render: (e22, t22, n3) => u2("del", { key: n3.key }, t22(e22.children, n3)) } };
  i22.disableParsingRawHTML === true && (delete X2[r.htmlBlock], delete X2[r.htmlSelfClosing]);
  let oe2 = function(e22) {
    let t22 = Object.keys(e22);
    function n3(r22, i3) {
      let l22, o22, a22 = [], c22 = "", s2 = "";
      for (i3.prevCapture = i3.prevCapture || ""; r22; ) {
        let d2 = 0;
        for (; d2 < t22.length; ) {
          if (c22 = t22[d2], l22 = e22[c22], i3.inline && !l22.match.inline) {
            d2++;
            continue;
          }
          let u32 = l22.match(r22, i3);
          if (u32) {
            s2 = u32[0], i3.prevCapture += s2, r22 = r22.substring(s2.length), o22 = l22.parse(u32, n3, i3), o22.type == null && (o22.type = c22), a22.push(o22);
            break;
          }
          d2++;
        }
      }
      return i3.prevCapture = "", a22;
    }
    return t22.sort(function(t3, n4) {
      let r22 = e22[t3].order, i3 = e22[n4].order;
      return r22 !== i3 ? r22 - i3 : t3 < n4 ? -1 : 1;
    }), function(e3, t3) {
      return n3(function(e4) {
        return e4.replace(v, `
`).replace(S, "").replace(G, "    ");
      }(e3), t3);
    };
  }(X2), ae2 = (ce2 = /* @__PURE__ */ function(e22, t22) {
    return function(n3, r22, i3) {
      let l22 = e22[n3.type].render;
      return t22 ? t22(() => l22(n3, r22, i3), n3, r22, i3) : l22(n3, r22, i3);
    };
  }(X2, i22.renderRule), function e22(t22, n3 = {}) {
    if (Array.isArray(t22)) {
      let r22 = n3.key, i3 = [], l22 = false;
      for (let r3 = 0; r3 < t22.length; r3++) {
        n3.key = r3;
        let o22 = e22(t22[r3], n3), a22 = typeof o22 == "string";
        a22 && l22 ? i3[i3.length - 1] += o22 : o22 !== null && i3.push(o22), l22 = a22;
      }
      return n3.key = r22, i3;
    }
    return ce2(t22, e22, n3);
  });
  var ce2;
  let se2 = Z2(n22);
  return Q2.length ? u2("div", null, se2, u2("footer", { key: "footer" }, Q2.map(function(e22) {
    return u2("div", { id: i22.slugify(e22.identifier, Le), key: e22.identifier }, e22.identifier, ae2(oe2(e22.footnote, { inline: true })));
  }))) : se2;
}
var index_modern_default = (t22) => {
  let { children: r22 = "", options: i22 } = t22, l22 = function(e22, t3) {
    if (e22 == null) return {};
    var n22, r3, i3 = {}, l32 = Object.keys(e22);
    for (r3 = 0; r3 < l32.length; r3++) t3.indexOf(n22 = l32[r3]) >= 0 || (i3[n22] = e22[n22]);
    return i3;
  }(t22, n);
  return reactExports.cloneElement(Xe(r22, i22), l22);
};
var Label2 = xr$3.label(({ theme }) => ({ lineHeight: "18px", alignItems: "center", marginBottom: 8, display: "inline-block", position: "relative", whiteSpace: "nowrap", background: theme.boolean.background, borderRadius: "3em", padding: 1, '&[aria-disabled="true"]': { opacity: 0.5, input: { cursor: "not-allowed" } }, input: { appearance: "none", width: "100%", height: "100%", position: "absolute", left: 0, top: 0, margin: 0, padding: 0, border: "none", background: "transparent", cursor: "pointer", borderRadius: "3em", "&:focus": { outline: "none", boxShadow: `${theme.color.secondary} 0 0 0 1px inset !important` }, "@media (forced-colors: active)": { "&:focus": { outline: "1px solid highlight" } } }, span: { textAlign: "center", fontSize: theme.typography.size.s1, fontWeight: theme.typography.weight.bold, lineHeight: "1", cursor: "pointer", display: "inline-block", padding: "7px 15px", transition: "all 100ms ease-out", userSelect: "none", borderRadius: "3em", color: curriedTransparentize$1(0.5, theme.color.defaultText), background: "transparent", "&:hover": { boxShadow: `${curriedOpacify$1(0.3, theme.appBorderColor)} 0 0 0 1px inset` }, "&:active": { boxShadow: `${curriedOpacify$1(0.05, theme.appBorderColor)} 0 0 0 2px inset`, color: curriedOpacify$1(1, theme.appBorderColor) }, "&:first-of-type": { paddingRight: 8 }, "&:last-of-type": { paddingLeft: 8 } }, "input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type": { background: theme.boolean.selectedBackground, boxShadow: theme.base === "light" ? `${curriedOpacify$1(0.1, theme.appBorderColor)} 0 0 2px` : `${theme.appBorderColor} 0 0 0 1px`, color: theme.color.defaultText, padding: "7px 15px", "@media (forced-colors: active)": { textDecoration: "underline" } } })), parse = (value2) => value2 === "true", BooleanControl = ({ name, value: value2, onChange, onBlur, onFocus, argType }) => {
  var _a2;
  let onSetFalse = reactExports.useCallback(() => onChange(false), [onChange]), readonly = !!((_a2 = argType == null ? void 0 : argType.table) == null ? void 0 : _a2.readonly);
  if (value2 === void 0) return e.createElement(Ir, { variant: "outline", size: "medium", id: getControlSetterButtonId(name), onClick: onSetFalse, disabled: readonly }, "Set boolean");
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
}, FormInput = xr$3(Z3.Input)(({ readOnly }) => ({ opacity: readOnly ? 0.5 : 1 })), FlexSpaced = xr$3.div(({ theme }) => ({ flex: 1, display: "flex", input: { marginLeft: 10, flex: 1, height: 32, "&::-webkit-calendar-picker-indicator": { opacity: 0.5, height: 12, filter: theme.base === "light" ? void 0 : "invert(1)" } }, "input:first-of-type": { marginLeft: 0, flexGrow: 4 }, "input:last-of-type": { flexGrow: 3 } })), DateControl = ({ name, value: value2, onChange, onFocus, onBlur, argType }) => {
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
}, FormInput2 = xr$3(Z3.Input)(({ readOnly }) => ({ opacity: readOnly ? 0.5 : 1 })), NumberControl = ({ name, value: value2, onChange, min, max, step, onBlur, onFocus, argType }) => {
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
  }, [value2]), value2 === void 0 ? e.createElement(Ir, { variant: "outline", size: "medium", id: getControlSetterButtonId(name), onClick: onForceVisible, disabled: readonly }, "Set number") : e.createElement(Wrapper4, null, e.createElement(FormInput2, { ref: htmlElRef, id: getControlId(name), type: "number", onChange: handleChange, size: "flex", placeholder: "Edit number...", value: inputValue, valid: parseError ? "error" : void 0, autoFocus: forceVisible, readOnly: readonly, name, min, max, step, onFocus, onBlur }));
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
var { window: globalWindow2 } = globalThis, Wrapper7 = xr$3.div(({ theme }) => ({ position: "relative", display: "flex", '&[aria-readonly="true"]': { opacity: 0.5 }, ".rejt-tree": { marginLeft: "1rem", fontSize: "13px", listStyleType: "none" }, ".rejt-value-node:hover": { "& > button": { opacity: 1 } }, ".rejt-add-form": { marginLeft: 10 }, ".rejt-add-value-node": { display: "inline-flex", alignItems: "center" }, ".rejt-name": { lineHeight: "22px" }, ".rejt-not-collapsed-delimiter": { lineHeight: "22px" }, ".rejt-value": { display: "inline-block", border: "1px solid transparent", borderRadius: 4, margin: "1px 0", padding: "0 4px", cursor: "text", color: theme.color.defaultText }, ".rejt-value-node:hover > .rejt-value": { background: theme.color.lighter, borderColor: theme.appBorderColor } })), ButtonInline = xr$3.button(({ theme, primary }) => ({ border: 0, height: 20, margin: 1, borderRadius: 4, background: primary ? theme.color.secondary : "transparent", color: primary ? theme.color.lightest : theme.color.dark, fontWeight: primary ? "bold" : "normal", cursor: "pointer" })), ActionButton = xr$3.button(({ theme }) => ({ background: "none", border: 0, display: "inline-flex", verticalAlign: "middle", padding: 3, marginLeft: 5, color: theme.textMutedColor, opacity: 0, transition: "opacity 0.2s", cursor: "pointer", position: "relative", svg: { width: 9, height: 9 }, ":disabled": { cursor: "not-allowed" }, ":hover, :focus-visible": { opacity: 1 }, "&:hover:not(:disabled), &:focus-visible:not(:disabled)": { "&.rejt-plus-menu": { color: theme.color.ancillary }, "&.rejt-minus-menu": { color: theme.color.negative } } })), Input = xr$3.input(({ theme, placeholder }) => ({ outline: 0, margin: placeholder ? 1 : "1px 0", padding: "3px 4px", color: theme.color.defaultText, background: theme.background.app, border: `1px solid ${theme.appBorderColor}`, borderRadius: 4, lineHeight: "14px", width: placeholder === "Key" ? 80 : 120, "&:focus": { border: `1px solid ${theme.color.secondary}` } })), RawButton = xr$3(xo)(({ theme }) => ({ position: "absolute", zIndex: 2, top: 2, right: 2, height: 21, padding: "0 3px", background: theme.background.bar, border: `1px solid ${theme.appBorderColor}`, borderRadius: 3, color: theme.textMutedColor, fontSize: "9px", fontWeight: "bold", textDecoration: "none", span: { marginLeft: 3, marginTop: 1 } })), RawInput = xr$3(Z3.Textarea)(({ theme }) => ({ flex: 1, padding: "7px 6px", fontFamily: theme.typography.fonts.mono, fontSize: "12px", lineHeight: "18px", "&::placeholder": { fontFamily: theme.typography.fonts.base, fontSize: "13px" }, "&:placeholder-shown": { padding: "7px 10px" } })), ENTER_EVENT = { bubbles: true, cancelable: true, key: "Enter", code: "Enter", keyCode: 13 }, dispatchEnterKey = (event) => {
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
  }, [forceVisible]), !hasData) return e.createElement(Ir, { disabled: readonly, id: getControlSetterButtonId(name), onClick: onForceVisible }, "Set object");
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
  if (value2 === void 0) return e.createElement(Ir, { variant: "outline", size: "medium", disabled: readonly, id: getControlSetterButtonId(name), onClick: onForceVisible }, "Set string");
  let isValid = typeof value2 == "string";
  return e.createElement(Wrapper8, null, e.createElement(Z3.Textarea, { id: getControlId(name), maxLength, onChange: handleChange, disabled: readonly, size: "flex", placeholder: "Edit string...", autoFocus: forceVisible, valid: isValid ? void 0 : "error", name, value: isValid ? value2 : "", onFocus, onBlur }), maxLength && e.createElement(MaxLength, { isMaxed: (value2 == null ? void 0 : value2.length) === maxLength }, (value2 == null ? void 0 : value2.length) ?? 0, " / ", maxLength));
};
var FileInput = xr$3(Z3.Input)({ padding: 10 });
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
var LazyColorControl = reactExports.lazy(() => __vitePreload(() => import("./Color-AVL7NMMY-ClMqFqbi.js"), true ? __vite__mapDeps([0,1,2,3,4,5]) : void 0, import.meta.url)), ColorControl = (props) => e.createElement(reactExports.Suspense, { fallback: e.createElement("div", null) }, e.createElement(LazyColorControl, { ...props }));
var Controls2 = { array: ObjectControl, object: ObjectControl, boolean: BooleanControl, color: ColorControl, date: DateControl, number: NumberControl, check: OptionsControl, "inline-check": OptionsControl, radio: OptionsControl, "inline-radio": OptionsControl, select: OptionsControl, "multi-select": OptionsControl, range: RangeControl, text: TextControl, file: FilesControl }, NoControl = () => e.createElement(e.Fragment, null, "-"), ArgControl = ({ row, arg, updateArgs, isHovered }) => {
  var _a2;
  let { key, control } = row, [isFocused, setFocused] = reactExports.useState(false), [boxedValue, setBoxedValue] = reactExports.useState({ value: arg });
  reactExports.useEffect(() => {
    isFocused || setBoxedValue({ value: arg });
  }, [isFocused, arg]);
  let onChange = reactExports.useCallback((argVal) => (setBoxedValue({ value: argVal }), updateArgs({ [key]: argVal }), argVal), [updateArgs, key]), onBlur = reactExports.useCallback(() => setFocused(false), []), onFocus = reactExports.useCallback(() => setFocused(true), []);
  if (!control || control.disable) {
    let canBeSetup = (control == null ? void 0 : control.disable) !== true && ((_a2 = row == null ? void 0 : row.type) == null ? void 0 : _a2.name) !== "function";
    return isHovered && canBeSetup ? e.createElement(Ai, { href: "https://storybook.js.org/docs/essentials/controls", target: "_blank", withArrow: true }, "Setup controls") : e.createElement(NoControl, null);
  }
  let props = { name: key, argType: row, value: boxedValue.value, onChange, onBlur, onFocus }, Control = Controls2[control.type] || NoControl;
  return e.createElement(Control, { ...props, ...control, controlType: control.type });
};
var Table = xr$3.table(({ theme }) => ({ "&&": { borderCollapse: "collapse", borderSpacing: 0, border: "none", tr: { border: "none !important", background: "none" }, "td, th": { padding: 0, border: "none", width: "auto!important" }, marginTop: 0, marginBottom: 0, "th:first-of-type, td:first-of-type": { paddingLeft: 0 }, "th:last-of-type, td:last-of-type": { paddingRight: 0 }, td: { paddingTop: 0, paddingBottom: 4, "&:not(:first-of-type)": { paddingLeft: 10, paddingRight: 0 } }, tbody: { boxShadow: "none", border: "none" }, code: at({ theme }), div: { span: { fontWeight: "bold" } }, "& code": { margin: 0, display: "inline-block", fontSize: theme.typography.size.s1 } } })), ArgJsDoc = ({ tags }) => {
  var _a2, _b2;
  let params = (tags.params || []).filter((x22) => x22.description), hasDisplayableParams = params.length !== 0, hasDisplayableDeprecated = tags.deprecated != null, hasDisplayableReturns = tags.returns != null && tags.returns.description != null;
  return !hasDisplayableParams && !hasDisplayableReturns && !hasDisplayableDeprecated ? null : e.createElement(e.Fragment, null, e.createElement(Table, null, e.createElement("tbody", null, hasDisplayableDeprecated && e.createElement("tr", { key: "deprecated" }, e.createElement("td", { colSpan: 2 }, e.createElement("strong", null, "Deprecated"), ": ", (_a2 = tags.deprecated) == null ? void 0 : _a2.toString())), hasDisplayableParams && params.map((x22) => e.createElement("tr", { key: x22.name }, e.createElement("td", null, e.createElement("code", null, x22.name)), e.createElement("td", null, x22.description))), hasDisplayableReturns && e.createElement("tr", { key: "returns" }, e.createElement("td", null, e.createElement("code", null, "Returns")), e.createElement("td", null, (_b2 = tags.returns) == null ? void 0 : _b2.description)))));
};
var import_memoizerific = __toESM(require_memoizerific());
var ITEMS_BEFORE_EXPANSION = 8, Summary = xr$3.div(({ isExpanded }) => ({ display: "flex", flexDirection: isExpanded ? "column" : "row", flexWrap: "wrap", alignItems: "flex-start", marginBottom: "-4px", minWidth: 100 })), Text3 = xr$3.span(at, ({ theme, simple = false }) => ({ flex: "0 0 auto", fontFamily: theme.typography.fonts.mono, fontSize: theme.typography.size.s1, wordBreak: "break-word", whiteSpace: "normal", maxWidth: "100%", margin: 0, marginRight: "4px", marginBottom: "4px", paddingTop: "2px", paddingBottom: "2px", lineHeight: "13px", ...simple && { background: "transparent", border: "0 none", paddingLeft: 0 } })), ExpandButton = xr$3.button(({ theme }) => ({ fontFamily: theme.typography.fonts.mono, color: theme.color.secondary, marginBottom: "4px", background: "none", border: "none" })), Expandable = xr$3.div(at, ({ theme }) => ({ fontFamily: theme.typography.fonts.mono, color: theme.color.secondary, fontSize: theme.typography.size.s1, margin: 0, whiteSpace: "nowrap", display: "flex", alignItems: "center" })), Detail = xr$3.div(({ theme, width }) => ({ width, minWidth: 200, maxWidth: 800, padding: 15, fontFamily: theme.typography.fonts.mono, fontSize: theme.typography.size.s1, boxSizing: "content-box", "& code": { padding: "0 !important" } })), ChevronUpIcon = xr$3(ChevronSmallUpIcon)({ marginLeft: 4 }), ChevronDownIcon = xr$3(ChevronSmallDownIcon)({ marginLeft: 4 }), EmptyArg = () => e.createElement("span", null, "-"), ArgText = ({ text, simple }) => e.createElement(Text3, { simple }, text), calculateDetailWidth = (0, import_memoizerific.default)(1e3)((detail) => {
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
  return e.createElement(Z7, { closeOnOutsideClick: true, placement: "bottom", visible: isOpen, onVisibleChange: (isVisible) => {
    setIsOpen(isVisible);
  }, tooltip: e.createElement(Detail, { width: calculateDetailWidth(detail) }, e.createElement(ru, { language: "jsx", format: false }, detail)) }, e.createElement(Expandable, { className: "sbdocs-expandable" }, e.createElement("span", null, summaryAsString), isOpen ? e.createElement(ChevronUpIcon, null) : e.createElement(ChevronDownIcon, null)));
}, ArgValue = ({ value: value2, initialExpandedArgs }) => value2 == null ? e.createElement(EmptyArg, null) : e.createElement(ArgSummary, { value: value2, initialExpandedArgs });
var Name = xr$3.span({ fontWeight: "bold" }), Required = xr$3.span(({ theme }) => ({ color: theme.color.negative, fontFamily: theme.typography.fonts.mono, cursor: "help" })), Description = xr$3.div(({ theme }) => ({ "&&": { p: { margin: "0 0 10px 0" }, a: { color: theme.color.secondary } }, code: { ...at({ theme }), fontSize: 12, fontFamily: theme.typography.fonts.mono }, "& code": { margin: 0, display: "inline-block" }, "& pre > code": { whiteSpace: "pre-wrap" } })), Type = xr$3.div(({ theme, hasDescription }) => ({ color: theme.base === "light" ? curriedTransparentize$1(0.1, theme.color.defaultText) : curriedTransparentize$1(0.2, theme.color.defaultText), marginTop: hasDescription ? 4 : 0 })), TypeWithJsDoc = xr$3.div(({ theme, hasDescription }) => ({ color: theme.base === "light" ? curriedTransparentize$1(0.1, theme.color.defaultText) : curriedTransparentize$1(0.2, theme.color.defaultText), marginTop: hasDescription ? 12 : 0, marginBottom: 12 })), StyledTd = xr$3.td(({ expandable }) => ({ paddingLeft: expandable ? "40px !important" : "20px !important" })), toSummary = (value2) => value2 && { summary: typeof value2 == "string" ? value2 : value2.name }, ArgRow = (props) => {
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
  }, []), isLoading ? null : e.createElement(Wrapper9, { inAddonPanel }, e.createElement(qo, { title: inAddonPanel ? "Interactive story playground" : "Args table with interactive controls couldn't be auto-generated", description: e.createElement(e.Fragment, null, "Controls give you an easy to use interface to test your components. Set your story args and you'll see controls appearing here automatically."), footer: e.createElement(Links, null, inAddonPanel && e.createElement(e.Fragment, null, e.createElement(Ai, { href: "https://storybook.js.org/docs/essentials/controls", target: "_blank", withArrow: true }, e.createElement(DocumentIcon, null), " Read docs")), !inAddonPanel && e.createElement(Ai, { href: "https://storybook.js.org/docs/essentials/controls", target: "_blank", withArrow: true }, e.createElement(DocumentIcon, null), " Learn how to set that up")) }));
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
var TableWrapper2 = xr$3.table(({ theme, compact, inAddonPanel }) => ({ "&&": { borderSpacing: 0, color: theme.color.defaultText, "td, th": { padding: 0, border: "none", verticalAlign: "top", textOverflow: "ellipsis" }, fontSize: theme.typography.size.s2 - 1, lineHeight: "20px", textAlign: "left", width: "100%", marginTop: inAddonPanel ? 0 : 25, marginBottom: inAddonPanel ? 0 : 40, "thead th:first-of-type, td:first-of-type": { width: "25%" }, "th:first-of-type, td:first-of-type": { paddingLeft: 20 }, "th:nth-of-type(2), td:nth-of-type(2)": { ...compact ? null : { width: "35%" } }, "td:nth-of-type(3)": { ...compact ? null : { width: "15%" } }, "th:last-of-type, td:last-of-type": { paddingRight: 20, ...compact ? null : { width: "25%" } }, th: { color: theme.base === "light" ? curriedTransparentize$1(0.25, theme.color.defaultText) : curriedTransparentize$1(0.45, theme.color.defaultText), paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15 }, td: { paddingTop: "10px", paddingBottom: "10px", "&:not(:first-of-type)": { paddingLeft: 15, paddingRight: 15 }, "&:last-of-type": { paddingRight: 20 } }, marginLeft: inAddonPanel ? 0 : 1, marginRight: inAddonPanel ? 0 : 1, tbody: { ...inAddonPanel ? null : { filter: theme.base === "light" ? "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))" : "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))" }, "> tr > *": { background: theme.background.content, borderTop: `1px solid ${theme.appBorderColor}` }, ...inAddonPanel ? null : { "> tr:first-of-type > *": { borderBlockStart: `1px solid ${theme.appBorderColor}` }, "> tr:last-of-type > *": { borderBlockEnd: `1px solid ${theme.appBorderColor}` }, "> tr > *:first-of-type": { borderInlineStart: `1px solid ${theme.appBorderColor}` }, "> tr > *:last-of-type": { borderInlineEnd: `1px solid ${theme.appBorderColor}` }, "> tr:first-of-type > td:first-of-type": { borderTopLeftRadius: theme.appBorderRadius }, "> tr:first-of-type > td:last-of-type": { borderTopRightRadius: theme.appBorderRadius }, "> tr:last-of-type > td:first-of-type": { borderBottomLeftRadius: theme.appBorderRadius }, "> tr:last-of-type > td:last-of-type": { borderBottomRightRadius: theme.appBorderRadius } } } } })), StyledIconButton = xr$3(xo)(({ theme }) => ({ margin: "-4px -12px -4px 0" })), ControlHeadingWrapper = xr$3.span({ display: "flex", justifyContent: "space-between" });
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
    return Xr$1(row, args, globals);
  } catch (err) {
    return once.warn(err.message), false;
  }
}, ArgsTable = (props) => {
  let { updateArgs, resetArgs, compact, inAddonPanel, initialExpandedArgs, sort = "none", isLoading } = props;
  if ("error" in props) {
    let { error } = props;
    return e.createElement(EmptyBlock, null, error, " ", e.createElement(Ai, { href: "http://storybook.js.org/docs/", target: "_blank", withArrow: true }, e.createElement(DocumentIcon, null), " Read the docs"));
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
  return e.createElement(jl, null, e.createElement(TableWrapper2, { compact, inAddonPanel, className: "docblock-argstable sb-unstyled" }, e.createElement("thead", { className: "docblock-argstable-head" }, e.createElement("tr", null, e.createElement("th", null, e.createElement("span", null, "Name")), compact ? null : e.createElement("th", null, e.createElement("span", null, "Description")), compact ? null : e.createElement("th", null, e.createElement("span", null, "Default")), updateArgs ? e.createElement("th", null, e.createElement(ControlHeadingWrapper, null, "Control", " ", !isLoading && resetArgs && e.createElement(StyledIconButton, { onClick: () => resetArgs(), title: "Reset controls" }, e.createElement(UndoIcon, { "aria-hidden": true })))) : null)), e.createElement("tbody", { className: "docblock-argstable-body" }, groups.ungrouped.map((row) => e.createElement(ArgRow, { key: row.key, row, arg: args && args[row.key], ...common })), Object.entries(groups.ungroupedSubsections).map(([subcategory, subsection]) => e.createElement(SectionRow, { key: subcategory, label: subcategory, level: "subsection", colSpan }, subsection.map((row) => e.createElement(ArgRow, { key: row.key, row, arg: args && args[row.key], expandable, ...common })))), Object.entries(groups.sections).map(([category, section]) => e.createElement(SectionRow, { key: category, label: category, level: "section", colSpan }, section.ungrouped.map((row) => e.createElement(ArgRow, { key: row.key, row, arg: args && args[row.key], ...common })), Object.entries(section.subsections).map(([subcategory, subsection]) => e.createElement(SectionRow, { key: subcategory, label: subcategory, level: "subsection", colSpan }, subsection.map((row) => e.createElement(ArgRow, { key: row.key, row, arg: args && args[row.key], expandable, ...common })))))))));
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
var require_es_object_atoms = __commonJS2({ "node_modules/.pnpm/es-object-atoms@1.1.1/node_modules/es-object-atoms/index.js"(exports, module) {
  module.exports = Object;
} }), require_es_errors = __commonJS2({ "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/index.js"(exports, module) {
  module.exports = Error;
} }), require_eval = __commonJS2({ "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/eval.js"(exports, module) {
  module.exports = EvalError;
} }), require_range = __commonJS2({ "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/range.js"(exports, module) {
  module.exports = RangeError;
} }), require_ref = __commonJS2({ "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/ref.js"(exports, module) {
  module.exports = ReferenceError;
} }), require_syntax = __commonJS2({ "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/syntax.js"(exports, module) {
  module.exports = SyntaxError;
} }), require_type = __commonJS2({ "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js"(exports, module) {
  module.exports = TypeError;
} }), require_uri = __commonJS2({ "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/uri.js"(exports, module) {
  module.exports = URIError;
} }), require_abs = __commonJS2({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/abs.js"(exports, module) {
  module.exports = Math.abs;
} }), require_floor = __commonJS2({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/floor.js"(exports, module) {
  module.exports = Math.floor;
} }), require_max = __commonJS2({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/max.js"(exports, module) {
  module.exports = Math.max;
} }), require_min = __commonJS2({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/min.js"(exports, module) {
  module.exports = Math.min;
} }), require_pow = __commonJS2({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/pow.js"(exports, module) {
  module.exports = Math.pow;
} }), require_round = __commonJS2({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/round.js"(exports, module) {
  module.exports = Math.round;
} }), require_isNaN = __commonJS2({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/isNaN.js"(exports, module) {
  module.exports = Number.isNaN || function(a22) {
    return a22 !== a22;
  };
} }), require_sign = __commonJS2({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/sign.js"(exports, module) {
  var $isNaN = require_isNaN();
  module.exports = function(number) {
    return $isNaN(number) || number === 0 ? number : number < 0 ? -1 : 1;
  };
} }), require_gOPD = __commonJS2({ "node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/gOPD.js"(exports, module) {
  module.exports = Object.getOwnPropertyDescriptor;
} }), require_gopd = __commonJS2({ "node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/index.js"(exports, module) {
  var $gOPD = require_gOPD();
  if ($gOPD) try {
    $gOPD([], "length");
  } catch {
    $gOPD = null;
  }
  module.exports = $gOPD;
} }), require_es_define_property = __commonJS2({ "node_modules/.pnpm/es-define-property@1.0.1/node_modules/es-define-property/index.js"(exports, module) {
  var $defineProperty = Object.defineProperty || false;
  if ($defineProperty) try {
    $defineProperty({}, "a", { value: 1 });
  } catch {
    $defineProperty = false;
  }
  module.exports = $defineProperty;
} }), require_shams = __commonJS2({ "node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/shams.js"(exports, module) {
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
} }), require_has_symbols = __commonJS2({ "node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/index.js"(exports, module) {
  var origSymbol = typeof Symbol < "u" && Symbol, hasSymbolSham = require_shams();
  module.exports = function() {
    return typeof origSymbol != "function" || typeof Symbol != "function" || typeof origSymbol("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? false : hasSymbolSham();
  };
} }), require_Reflect_getPrototypeOf = __commonJS2({ "node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Reflect.getPrototypeOf.js"(exports, module) {
  module.exports = typeof Reflect < "u" && Reflect.getPrototypeOf || null;
} }), require_Object_getPrototypeOf = __commonJS2({ "node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Object.getPrototypeOf.js"(exports, module) {
  var $Object = require_es_object_atoms();
  module.exports = $Object.getPrototypeOf || null;
} }), require_implementation = __commonJS2({ "node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/implementation.js"(exports, module) {
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
} }), require_function_bind = __commonJS2({ "node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js"(exports, module) {
  var implementation = require_implementation();
  module.exports = Function.prototype.bind || implementation;
} }), require_functionCall = __commonJS2({ "node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionCall.js"(exports, module) {
  module.exports = Function.prototype.call;
} }), require_functionApply = __commonJS2({ "node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionApply.js"(exports, module) {
  module.exports = Function.prototype.apply;
} }), require_reflectApply = __commonJS2({ "node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/reflectApply.js"(exports, module) {
  module.exports = typeof Reflect < "u" && Reflect && Reflect.apply;
} }), require_actualApply = __commonJS2({ "node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/actualApply.js"(exports, module) {
  var bind = require_function_bind(), $apply = require_functionApply(), $call = require_functionCall(), $reflectApply = require_reflectApply();
  module.exports = $reflectApply || bind.call($call, $apply);
} }), require_call_bind_apply_helpers = __commonJS2({ "node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/index.js"(exports, module) {
  var bind = require_function_bind(), $TypeError = require_type(), $call = require_functionCall(), $actualApply = require_actualApply();
  module.exports = function(args) {
    if (args.length < 1 || typeof args[0] != "function") throw new $TypeError("a function is required");
    return $actualApply(bind, $call, args);
  };
} }), require_get = __commonJS2({ "node_modules/.pnpm/dunder-proto@1.0.1/node_modules/dunder-proto/get.js"(exports, module) {
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
} }), require_get_proto = __commonJS2({ "node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/index.js"(exports, module) {
  var reflectGetProto = require_Reflect_getPrototypeOf(), originalGetProto = require_Object_getPrototypeOf(), getDunderProto = require_get();
  module.exports = reflectGetProto ? function(O2) {
    return reflectGetProto(O2);
  } : originalGetProto ? function(O2) {
    if (!O2 || typeof O2 != "object" && typeof O2 != "function") throw new TypeError("getProto: not an object");
    return originalGetProto(O2);
  } : getDunderProto ? function(O2) {
    return getDunderProto(O2);
  } : null;
} }), require_hasown = __commonJS2({ "node_modules/.pnpm/hasown@2.0.2/node_modules/hasown/index.js"(exports, module) {
  var call = Function.prototype.call, $hasOwn = Object.prototype.hasOwnProperty, bind = require_function_bind();
  module.exports = bind.call(call, $hasOwn);
} }), require_get_intrinsic = __commonJS2({ "node_modules/.pnpm/get-intrinsic@1.3.0/node_modules/get-intrinsic/index.js"(exports, module) {
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
} }), require_call_bound = __commonJS2({ "node_modules/.pnpm/call-bound@1.0.4/node_modules/call-bound/index.js"(exports, module) {
  var GetIntrinsic = require_get_intrinsic(), callBindBasic = require_call_bind_apply_helpers(), $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
  module.exports = function(name, allowMissing) {
    var intrinsic = GetIntrinsic(name, !!allowMissing);
    return typeof intrinsic == "function" && $indexOf(name, ".prototype.") > -1 ? callBindBasic([intrinsic]) : intrinsic;
  };
} }), require_shams2 = __commonJS2({ "node_modules/.pnpm/has-tostringtag@1.0.2/node_modules/has-tostringtag/shams.js"(exports, module) {
  var hasSymbols = require_shams();
  module.exports = function() {
    return hasSymbols() && !!Symbol.toStringTag;
  };
} }), require_is_regex = __commonJS2({ "node_modules/.pnpm/is-regex@1.2.1/node_modules/is-regex/index.js"(exports, module) {
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
} }), require_is_function = __commonJS2({ "node_modules/.pnpm/is-function@1.0.2/node_modules/is-function/index.js"(exports, module) {
  module.exports = isFunction3;
  var toString2 = Object.prototype.toString;
  function isFunction3(fn2) {
    if (!fn2) return false;
    var string = toString2.call(fn2);
    return string === "[object Function]" || typeof fn2 == "function" && string !== "[object RegExp]" || typeof window < "u" && (fn2 === window.setTimeout || fn2 === window.alert || fn2 === window.confirm || fn2 === window.prompt);
  }
} }), require_safe_regex_test = __commonJS2({ "node_modules/.pnpm/safe-regex-test@1.1.0/node_modules/safe-regex-test/index.js"(exports, module) {
  var callBound = require_call_bound(), isRegex = require_is_regex(), $exec = callBound("RegExp.prototype.exec"), $TypeError = require_type();
  module.exports = function(regex2) {
    if (!isRegex(regex2)) throw new $TypeError("`regex` must be a RegExp");
    return function(s2) {
      return $exec(regex2, s2) !== null;
    };
  };
} }), require_is_symbol = __commonJS2({ "node_modules/.pnpm/is-symbol@1.1.1/node_modules/is-symbol/index.js"(exports, module) {
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
    return channel.on(ha$1, handleSnippetRendered), () => channel.off(ha$1, handleSnippetRendered);
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
  let parameters = storyContext.parameters ?? {}, { __isArgsStory: isArgsStory } = parameters, sourceParameters = ((_a2 = parameters.docs) == null ? void 0 : _a2.source) || {}, type = typeFromProps || sourceParameters.type || Tn$3.AUTO, code = type === Tn$3.DYNAMIC || type === Tn$3.AUTO && snippet && isArgsStory ? snippet : sourceParameters.originalSource || "", transformer = transformFromProps ?? sourceParameters.transform, transformedCode = transformer ? useTransformCode(code, transformer, storyContext) : code;
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
  var _a2, _b2, _c2, _d3, _e2, _f2, _g2, _h, _i2, _j, _k, _l2, _m2, _n2;
  let docsContext = reactExports.useContext(DocsContext), sourceContext = reactExports.useContext(SourceContext), { of: of2, source } = props;
  if ("of" in props && of2 === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let { story } = useOf(of2 || "story", ["story"]), sourceProps = useSourceProps({ ...source, ...of2 && { of: of2 } }, docsContext, sourceContext), layout = props.layout ?? story.parameters.layout ?? ((_b2 = (_a2 = story.parameters.docs) == null ? void 0 : _a2.canvas) == null ? void 0 : _b2.layout) ?? "padded", withToolbar = props.withToolbar ?? ((_d3 = (_c2 = story.parameters.docs) == null ? void 0 : _c2.canvas) == null ? void 0 : _d3.withToolbar) ?? false, additionalActions = props.additionalActions ?? ((_f2 = (_e2 = story.parameters.docs) == null ? void 0 : _e2.canvas) == null ? void 0 : _f2.additionalActions), sourceState = props.sourceState ?? ((_h = (_g2 = story.parameters.docs) == null ? void 0 : _g2.canvas) == null ? void 0 : _h.sourceState) ?? "hidden", className = props.className ?? ((_j = (_i2 = story.parameters.docs) == null ? void 0 : _i2.canvas) == null ? void 0 : _j.className), inline = ((_k = props.story) == null ? void 0 : _k.inline) ?? ((_n2 = (_m2 = (_l2 = story.parameters) == null ? void 0 : _l2.docs) == null ? void 0 : _m2.story) == null ? void 0 : _n2.inline) ?? false;
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
  if (typeof className != "string" && (typeof children != "string" || !children.match(/[\n\r]/g))) return e.createElement(ii, null, children);
  let language = className && className.split("-");
  return e.createElement(Source, { language: language && language[1] || "text", format: false, code: children, ...rest });
};
function navigate(context, url) {
  context.channel.emit(NAVIGATE_URL, url);
}
var A2 = yO.a, AnchorInPage = ({ hash, children }) => {
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
  var _a2, _b2, _c2, _d3, _e2, _f2, _g2, _h;
  switch (resolvedOf.type) {
    case "story":
      return ((_b2 = (_a2 = resolvedOf.story.parameters.docs) == null ? void 0 : _a2.description) == null ? void 0 : _b2.story) || null;
    case "meta": {
      let { parameters, component } = resolvedOf.preparedMeta, metaDescription = (_d3 = (_c2 = parameters.docs) == null ? void 0 : _c2.description) == null ? void 0 : _d3.component;
      return metaDescription || ((_f2 = (_e2 = parameters.docs) == null ? void 0 : _e2.extractComponentDescription) == null ? void 0 : _f2.call(_e2, component, { component, parameters })) || null;
    }
    case "component": {
      let { component, projectAnnotations: { parameters } } = resolvedOf;
      return ((_h = (_g2 = parameters == null ? void 0 : parameters.docs) == null ? void 0 : _g2.extractComponentDescription) == null ? void 0 : _h.call(_g2, component, { component, parameters })) || null;
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
  var _a2, _b2, _c2, _d3, _e2;
  let toc;
  try {
    toc = (_b2 = (_a2 = context.resolveOf("meta", ["meta"]).preparedMeta.parameters) == null ? void 0 : _a2.docs) == null ? void 0 : _b2.toc;
  } catch {
    toc = (_e2 = (_d3 = (_c2 = context == null ? void 0 : context.projectAnnotations) == null ? void 0 : _c2.parameters) == null ? void 0 : _d3.docs) == null ? void 0 : _e2.toc;
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
  }), e.createElement(DocsContext.Provider, { value: context }, e.createElement(SourceContainer, { channel: context.channel }, e.createElement(Tt$3, { theme: pf(theme) }, e.createElement(DocsPageWrapper, { toc: toc ? e.createElement(TableOfContents, { className: "sbdocs sbdocs-toc--custom", channel: context.channel, ...toc }) : null }, children))));
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
  if (disableAnchor || typeof children != "string") return e.createElement(ui, null, children);
  let tagID = slugs.slug(children.toLowerCase());
  return e.createElement(HeaderMdx, { as: "h2", id: tagID, ...props }, children);
};
var Subheading = ({ children, disableAnchor }) => {
  if (disableAnchor || typeof children != "string") return e.createElement(fi, null, children);
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
  Y7 as Y,
  Z3 as Z,
  __toESM as _,
  Controls3 as a,
  i6 as b,
  MarkupIcon as c,
  debounce2 as d,
  __commonJS as e,
  AnchorMdx as f,
  getControlId as g,
  CodeOrSourceMdx as h,
  ii as i
};
