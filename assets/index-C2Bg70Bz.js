import { r as reactExports } from "./index-CoR6MlO7.js";
var vn = Object.create;
var nr = Object.defineProperty;
var yn = Object.getOwnPropertyDescriptor;
var xn = Object.getOwnPropertyNames;
var wn = Object.getPrototypeOf, En = Object.prototype.hasOwnProperty;
var o = (e2, r) => nr(e2, "name", { value: r, configurable: true }), we = /* @__PURE__ */ ((e2) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e2, {
  get: (r, t) => (typeof require < "u" ? require : r)[t]
}) : e2)(function(e2) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e2 + '" is not supported');
});
var ze = (e2, r) => () => (r || e2((r = { exports: {} }).exports, r), r.exports);
var Sn = (e2, r, t, n) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let a of xn(r))
      !En.call(e2, a) && a !== t && nr(e2, a, { get: () => r[a], enumerable: !(n = yn(r, a)) || n.enumerable });
  return e2;
};
var ar = (e2, r, t) => (t = e2 != null ? vn(wn(e2)) : {}, Sn(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  r || !e2 || !e2.__esModule ? nr(t, "default", { value: e2, enumerable: true }) : t,
  e2
));
var rt = ze((O) => {
  (function() {
    var e2 = typeof Symbol == "function" && Symbol.for, r = e2 ? Symbol.for("react.element") : 60103, t = e2 ? Symbol.for("react.portal") : 60106, n = e2 ? Symbol.for("react.fragment") : 60107, a = e2 ? Symbol.for("react.strict_mode") : 60108, i = e2 ? Symbol.for("react.profiler") : 60114, s = e2 ? Symbol.for("react.provider") : 60109, u = e2 ? Symbol.for("react.context") : 60110, f = e2 ? Symbol.for("react.async_mode") : 60111, l = e2 ? Symbol.for("react.concurrent_mode") : 60111, c = e2 ? Symbol.for("react.forward_ref") : 60112, p = e2 ? Symbol.for("react.suspense") : 60113, m = e2 ? Symbol.for("react.suspense_list") : 60120, w = e2 ? Symbol.for("react.memo") : 60115, b = e2 ? Symbol.for("react.lazy") : 60116, d = e2 ? Symbol.for("react.block") : 60121, v = e2 ? Symbol.for("react.fundamental") : 60117, y = e2 ? Symbol.for("react.responder") : 60118, x = e2 ? Symbol.for("react.scope") : 60119;
    function A(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === n || g === l || g === i || g === a || g === p || g === m || typeof g == "object" && g !== null && (g.$$typeof === b || g.$$typeof === w || g.$$typeof === s || g.$$typeof === u || g.$$typeof === c || g.$$typeof === v || g.$$typeof === y || g.$$typeof === x || g.$$typeof === d);
    }
    o(A, "isValidElementType");
    function S(g) {
      if (typeof g == "object" && g !== null) {
        var tr = g.$$typeof;
        switch (tr) {
          case r:
            var Le = g.type;
            switch (Le) {
              case f:
              case l:
              case n:
              case i:
              case a:
              case p:
                return Le;
              default:
                var Lr = Le && Le.$$typeof;
                switch (Lr) {
                  case u:
                  case c:
                  case b:
                  case w:
                  case s:
                    return Lr;
                  default:
                    return tr;
                }
            }
          case t:
            return tr;
        }
      }
    }
    o(S, "typeOf");
    var R = f, F = l, T = u, ae = s, oe = r, V = c, G = n, Qe = b, er = w, rr = t, tn = i, nn = a, an = p, Ir = false;
    function on(g) {
      return Ir || (Ir = true, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Pr(g) || S(g) === f;
    }
    o(on, "isAsyncMode");
    function Pr(g) {
      return S(g) === l;
    }
    o(Pr, "isConcurrentMode");
    function sn(g) {
      return S(g) === u;
    }
    o(sn, "isContextConsumer");
    function un(g) {
      return S(g) === s;
    }
    o(un, "isContextProvider");
    function fn(g) {
      return typeof g == "object" && g !== null && g.$$typeof === r;
    }
    o(fn, "isElement");
    function cn(g) {
      return S(g) === c;
    }
    o(cn, "isForwardRef");
    function ln(g) {
      return S(g) === n;
    }
    o(ln, "isFragment");
    function pn(g) {
      return S(g) === b;
    }
    o(pn, "isLazy");
    function dn(g) {
      return S(g) === w;
    }
    o(dn, "isMemo");
    function mn(g) {
      return S(g) === t;
    }
    o(mn, "isPortal");
    function hn(g) {
      return S(g) === i;
    }
    o(hn, "isProfiler");
    function gn(g) {
      return S(g) === a;
    }
    o(gn, "isStrictMode");
    function bn(g) {
      return S(g) === p;
    }
    o(bn, "isSuspense"), O.AsyncMode = R, O.ConcurrentMode = F, O.ContextConsumer = T, O.ContextProvider = ae, O.Element = oe, O.ForwardRef = V, O.Fragment = G, O.Lazy = Qe, O.Memo = er, O.Portal = rr, O.Profiler = tn, O.StrictMode = nn, O.Suspense = an, O.isAsyncMode = on, O.isConcurrentMode = Pr, O.isContextConsumer = sn, O.isContextProvider = un, O.isElement = fn, O.isForwardRef = cn, O.isFragment = ln, O.isLazy = pn, O.isMemo = dn, O.isPortal = mn, O.isProfiler = hn, O.isStrictMode = gn, O.isSuspense = bn, O.isValidElementType = A, O.typeOf = S;
  })();
});
var nt = ze((Vo, tt) => {
  tt.exports = rt();
});
var pr = ze((Go, ft) => {
  var cr = nt(), Mn = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
  }, kn = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
  }, Nn = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
  }, st = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
  }, lr = {};
  lr[cr.ForwardRef] = Nn;
  lr[cr.Memo] = st;
  function at(e2) {
    return cr.isMemo(e2) ? st : lr[e2.$$typeof] || Mn;
  }
  o(at, "getStatics");
  var Bn = Object.defineProperty, Dn = Object.getOwnPropertyNames, ot = Object.getOwnPropertySymbols, $n = Object.getOwnPropertyDescriptor, jn = Object.getPrototypeOf, it = Object.prototype;
  function ut(e2, r, t) {
    if (typeof r != "string") {
      if (it) {
        var n = jn(r);
        n && n !== it && ut(e2, n, t);
      }
      var a = Dn(r);
      ot && (a = a.concat(ot(r)));
      for (var i = at(e2), s = at(r), u = 0; u < a.length; ++u) {
        var f = a[u];
        if (!kn[f] && !(t && t[f]) && !(s && s[f]) && !(i && i[f])) {
          var l = $n(r, f);
          try {
            Bn(e2, f, l);
          } catch {
          }
        }
      }
    }
    return e2;
  }
  o(ut, "hoistNonReactStatics");
  ft.exports = ut;
});
var Ht = ze((jt, Cr) => {
  (function(e2) {
    if (typeof jt == "object" && typeof Cr < "u")
      Cr.exports = e2();
    else if (typeof define == "function" && define.amd)
      define([], e2);
    else {
      var r;
      typeof window < "u" ? r = window : typeof global < "u" ? r = global : typeof self < "u" ? r = self : r = this, r.memoizerific = e2();
    }
  })(function() {
    return (/* @__PURE__ */ o(function n(a, i, s) {
      function u(c, p) {
        if (!i[c]) {
          if (!a[c]) {
            var m = typeof we == "function" && we;
            if (!p && m) return m(c, true);
            if (f) return f(c, true);
            var w = new Error("Cannot find module '" + c + "'");
            throw w.code = "MODULE_NOT_FOUND", w;
          }
          var b = i[c] = { exports: {} };
          a[c][0].call(b.exports, function(d) {
            var v = a[c][1][d];
            return u(v || d);
          }, b, b.exports, n, a, i, s);
        }
        return i[c].exports;
      }
      o(u, "s");
      for (var f = typeof we == "function" && we, l = 0; l < s.length; l++) u(s[l]);
      return u;
    }, "e"))({ 1: [function(n, a, i) {
      a.exports = function(s) {
        if (typeof Map != "function" || s) {
          var u = n("./similar");
          return new u();
        } else
          return /* @__PURE__ */ new Map();
      };
    }, { "./similar": 2 }], 2: [function(n, a, i) {
      function s() {
        return this.list = [], this.lastItem = void 0, this.size = 0, this;
      }
      o(s, "Similar"), s.prototype.get = function(u) {
        var f;
        if (this.lastItem && this.isEqual(this.lastItem.key, u))
          return this.lastItem.val;
        if (f = this.indexOf(u), f >= 0)
          return this.lastItem = this.list[f], this.list[f].val;
      }, s.prototype.set = function(u, f) {
        var l;
        return this.lastItem && this.isEqual(this.lastItem.key, u) ? (this.lastItem.val = f, this) : (l = this.indexOf(u), l >= 0 ? (this.lastItem = this.list[l], this.list[l].val = f, this) : (this.lastItem = { key: u, val: f }, this.list.push(this.lastItem), this.size++, this));
      }, s.prototype.delete = function(u) {
        var f;
        if (this.lastItem && this.isEqual(this.lastItem.key, u) && (this.lastItem = void 0), f = this.indexOf(u), f >= 0)
          return this.size--, this.list.splice(f, 1)[0];
      }, s.prototype.has = function(u) {
        var f;
        return this.lastItem && this.isEqual(this.lastItem.key, u) ? true : (f = this.indexOf(u), f >= 0 ? (this.lastItem = this.list[f], true) : false);
      }, s.prototype.forEach = function(u, f) {
        var l;
        for (l = 0; l < this.size; l++)
          u.call(f || this, this.list[l].val, this.list[l].key, this);
      }, s.prototype.indexOf = function(u) {
        var f;
        for (f = 0; f < this.size; f++)
          if (this.isEqual(this.list[f].key, u))
            return f;
        return -1;
      }, s.prototype.isEqual = function(u, f) {
        return u === f || u !== u && f !== f;
      }, a.exports = s;
    }, {}], 3: [function(n, a, i) {
      var s = n("map-or-similar");
      a.exports = function(c) {
        var p = new s(false), m = [];
        return function(w) {
          var b = /* @__PURE__ */ o(function() {
            var d = p, v, y, x = arguments.length - 1, A = Array(x + 1), S = true, R;
            if ((b.numArgs || b.numArgs === 0) && b.numArgs !== x + 1)
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (R = 0; R < x; R++) {
              if (A[R] = {
                cacheItem: d,
                arg: arguments[R]
              }, d.has(arguments[R])) {
                d = d.get(arguments[R]);
                continue;
              }
              S = false, v = new s(false), d.set(arguments[R], v), d = v;
            }
            return S && (d.has(arguments[x]) ? y = d.get(arguments[x]) : S = false), S || (y = w.apply(null, arguments), d.set(arguments[x], y)), c > 0 && (A[x] = {
              cacheItem: d,
              arg: arguments[x]
            }, S ? u(m, A) : m.push(A), m.length > c && f(m.shift())), b.wasMemoized = S, b.numArgs = x + 1, y;
          }, "memoizerific");
          return b.limit = c, b.wasMemoized = false, b.cache = p, b.lru = m, b;
        };
      };
      function u(c, p) {
        var m = c.length, w = p.length, b, d, v;
        for (d = 0; d < m; d++) {
          for (b = true, v = 0; v < w; v++)
            if (!l(c[d][v].arg, p[v].arg)) {
              b = false;
              break;
            }
          if (b)
            break;
        }
        c.push(c.splice(d, 1)[0]);
      }
      o(u, "moveToMostRecentLru");
      function f(c) {
        var p = c.length, m = c[p - 1], w, b;
        for (m.cacheItem.delete(m.arg), b = p - 2; b >= 0 && (m = c[b], w = m.cacheItem.get(m.arg), !w || !w.size); b--)
          m.cacheItem.delete(m.arg);
      }
      o(f, "removeCachedResult");
      function l(c, p) {
        return c === p || c !== c && p !== p;
      }
      o(l, "isEqual");
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
});
function N() {
  return N = Object.assign ? Object.assign.bind() : function(e2) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) ({}).hasOwnProperty.call(t, n) && (e2[n] = t[n]);
    }
    return e2;
  }, N.apply(null, arguments);
}
o(N, "_extends");
function Cn(e2) {
  if (e2.sheet)
    return e2.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e2)
      return document.styleSheets[r];
}
o(Cn, "sheetForTag");
function On(e2) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e2.key), e2.nonce !== void 0 && r.setAttribute("nonce", e2.nonce), r.appendChild(document.createTextNode(
    ""
  )), r.setAttribute("data-s", ""), r;
}
o(On, "createStyleElement");
var zr = /* @__PURE__ */ function() {
  function e2(t) {
    var n = this;
    this._insertTag = function(a) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(a, i), n.tags.push(a);
    }, this.isSpeedy = t.speedy === void 0 ? true : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  o(e2, "StyleSheet");
  var r = e2.prototype;
  return r.hydrate = /* @__PURE__ */ o(function(n) {
    n.forEach(this._insertTag);
  }, "hydrate"), r.insert = /* @__PURE__ */ o(function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(On(this));
    var a = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Cn(a);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      a.appendChild(document.createTextNode(n));
    this.ctr++;
  }, "insert"), r.flush = /* @__PURE__ */ o(function() {
    this.tags.forEach(function(n) {
      var a;
      return (a = n.parentNode) == null ? void 0 : a.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, "flush"), e2;
}();
var L = "-ms-", Ee = "-moz-", C = "-webkit-", Me = "comm", ie = "rule", se = "decl";
var Mr = "@import";
var ke = "@keyframes";
var kr = "@layer";
var Nr = Math.abs, X = String.fromCharCode, Br = Object.assign;
function Dr(e2, r) {
  return _(e2, 0) ^ 45 ? (((r << 2 ^ _(e2, 0)) << 2 ^ _(e2, 1)) << 2 ^ _(e2, 2)) << 2 ^ _(e2, 3) : 0;
}
o(Dr, "hash");
function Ne(e2) {
  return e2.trim();
}
o(Ne, "trim");
function or(e2, r) {
  return (e2 = r.exec(e2)) ? e2[0] : e2;
}
o(or, "match");
function E(e2, r, t) {
  return e2.replace(r, t);
}
o(E, "replace");
function Se(e2, r) {
  return e2.indexOf(r);
}
o(Se, "indexof");
function _(e2, r) {
  return e2.charCodeAt(r) | 0;
}
o(_, "charat");
function Y(e2, r, t) {
  return e2.slice(r, t);
}
o(Y, "substr");
function z(e2) {
  return e2.length;
}
o(z, "strlen");
function ue(e2) {
  return e2.length;
}
o(ue, "sizeof");
function fe(e2, r) {
  return r.push(e2), e2;
}
o(fe, "append");
function ir(e2, r) {
  return e2.map(r).join("");
}
o(ir, "combine");
var Be = 1, ce = 1, $r = 0, M = 0, I = 0, pe = "";
function Te(e2, r, t, n, a, i, s) {
  return { value: e2, root: r, parent: t, type: n, props: a, children: i, line: Be, column: ce, length: s, return: "" };
}
o(Te, "node");
function de(e2, r) {
  return Br(Te("", null, null, "", null, null, 0), e2, { length: -e2.length }, r);
}
o(de, "copy");
function jr() {
  return I;
}
o(jr, "char");
function Hr() {
  return I = M > 0 ? _(pe, --M) : 0, ce--, I === 10 && (ce = 1, Be--), I;
}
o(Hr, "prev");
function k() {
  return I = M < $r ? _(pe, M++) : 0, ce++, I === 10 && (ce = 1, Be++), I;
}
o(k, "next");
function B() {
  return _(pe, M);
}
o(B, "peek");
function Ce() {
  return M;
}
o(Ce, "caret");
function me(e2, r) {
  return Y(pe, e2, r);
}
o(me, "slice");
function le(e2) {
  switch (e2) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
o(le, "token");
function De(e2) {
  return Be = ce = 1, $r = z(pe = e2), M = 0, [];
}
o(De, "alloc");
function $e(e2) {
  return pe = "", e2;
}
o($e, "dealloc");
function he(e2) {
  return Ne(me(M - 1, sr(e2 === 91 ? e2 + 2 : e2 === 40 ? e2 + 1 : e2)));
}
o(he, "delimit");
function Wr(e2) {
  for (; (I = B()) && I < 33; )
    k();
  return le(e2) > 2 || le(I) > 3 ? "" : " ";
}
o(Wr, "whitespace");
function Ur(e2, r) {
  for (; --r && k() && !(I < 48 || I > 102 || I > 57 && I < 65 || I > 70 && I < 97); )
    ;
  return me(e2, Ce() + (r < 6 && B() == 32 && k() == 32));
}
o(Ur, "escaping");
function sr(e2) {
  for (; k(); )
    switch (I) {
      case e2:
        return M;
      case 34:
      case 39:
        e2 !== 34 && e2 !== 39 && sr(I);
        break;
      case 40:
        e2 === 41 && sr(e2);
        break;
      case 92:
        k();
        break;
    }
  return M;
}
o(sr, "delimiter");
function Vr(e2, r) {
  for (; k() && e2 + I !== 57; )
    if (e2 + I === 84 && B() === 47)
      break;
  return "/*" + me(r, M - 1) + "*" + X(e2 === 47 ? e2 : k());
}
o(Vr, "commenter");
function Gr(e2) {
  for (; !le(B()); )
    k();
  return me(e2, M);
}
o(Gr, "identifier");
function Jr(e2) {
  return $e(je("", null, null, null, [""], e2 = De(e2), 0, [0], e2));
}
o(Jr, "compile");
function je(e2, r, t, n, a, i, s, u, f) {
  for (var l = 0, c = 0, p = s, m = 0, w = 0, b = 0, d = 1, v = 1, y = 1, x = 0, A = "", S = a, R = i, F = n, T = A; v; )
    switch (b = x, x = k()) {
      case 40:
        if (b != 108 && _(T, p - 1) == 58) {
          Se(T += E(he(x), "&", "&\f"), "&\f") != -1 && (y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += he(x);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += Wr(b);
        break;
      case 92:
        T += Ur(Ce() - 1, 7);
        continue;
      case 47:
        switch (B()) {
          case 42:
          case 47:
            fe(Rn(Vr(k(), Ce()), r, t), f);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * d:
        u[l++] = z(T) * y;
      case 125 * d:
      case 59:
      case 0:
        switch (x) {
          case 0:
          case 125:
            v = 0;
          case 59 + c:
            y == -1 && (T = E(T, /\f/g, "")), w > 0 && z(T) - p && fe(
              w > 32 ? qr(T + ";", n, t, p - 1) : qr(E(T, " ", "") + ";", n, t, p - 2),
              f
            );
            break;
          case 59:
            T += ";";
          default:
            if (fe(F = Yr(T, r, t, l, c, a, u, A, S = [], R = [], p), i), x === 123)
              if (c === 0)
                je(T, r, F, F, S, i, p, u, R);
              else
                switch (m === 99 && _(T, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    je(e2, F, F, n && fe(Yr(e2, F, F, 0, 0, a, u, A, a, S = [], p), R), a, R, p, u, n ? S : R);
                    break;
                  default:
                    je(T, F, F, F, [""], R, 0, u, R);
                }
        }
        l = c = w = 0, d = y = 1, A = T = "", p = s;
        break;
      case 58:
        p = 1 + z(T), w = b;
      default:
        if (d < 1) {
          if (x == 123)
            --d;
          else if (x == 125 && d++ == 0 && Hr() == 125)
            continue;
        }
        switch (T += X(x), x * d) {
          case 38:
            y = c > 0 ? 1 : (T += "\f", -1);
            break;
          case 44:
            u[l++] = (z(T) - 1) * y, y = 1;
            break;
          case 64:
            B() === 45 && (T += he(k())), m = B(), c = p = z(A = T += Gr(Ce())), x++;
            break;
          case 45:
            b === 45 && z(T) == 2 && (d = 0);
        }
    }
  return i;
}
o(je, "parse");
function Yr(e2, r, t, n, a, i, s, u, f, l, c) {
  for (var p = a - 1, m = a === 0 ? i : [""], w = ue(m), b = 0, d = 0, v = 0; b < n; ++b)
    for (var y = 0, x = Y(e2, p + 1, p = Nr(d = s[b])), A = e2; y < w; ++y)
      (A = Ne(d > 0 ? m[y] + " " + x : E(x, /&\f/g, m[y]))) && (f[v++] = A);
  return Te(e2, r, t, a === 0 ? ie : u, f, l, c);
}
o(Yr, "ruleset");
function Rn(e2, r, t) {
  return Te(e2, r, t, Me, X(jr()), Y(e2, 2, -2), 0);
}
o(Rn, "comment");
function qr(e2, r, t, n) {
  return Te(e2, r, t, se, Y(e2, 0, n), Y(e2, n + 1, -1), n);
}
o(qr, "declaration");
function Z(e2, r) {
  for (var t = "", n = ue(e2), a = 0; a < n; a++)
    t += r(e2[a], a, e2, r) || "";
  return t;
}
o(Z, "serialize");
function Kr(e2, r, t, n) {
  switch (e2.type) {
    case kr:
      if (e2.children.length) break;
    case Mr:
    case se:
      return e2.return = e2.return || e2.value;
    case Me:
      return "";
    case ke:
      return e2.return = e2.value + "{" + Z(e2.children, n) + "}";
    case ie:
      e2.value = e2.props.join(",");
  }
  return z(t = Z(e2.children, n)) ? e2.return = e2.value + "{" + t + "}" : "";
}
o(Kr, "stringify");
function Xr(e2) {
  var r = ue(e2);
  return function(t, n, a, i) {
    for (var s = "", u = 0; u < r; u++)
      s += e2[u](t, n, a, i) || "";
    return s;
  };
}
o(Xr, "middleware");
function Zr(e2) {
  return function(r) {
    r.root || (r = r.return) && e2(r);
  };
}
o(Zr, "rulesheet");
var ur = /* @__PURE__ */ o(function(r) {
  var t = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (t.has(n))
      return t.get(n);
    var a = r(n);
    return t.set(n, a), a;
  };
}, "weakMemoize");
function He(e2) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e2(t)), r[t];
  };
}
o(He, "memoize");
var An = /* @__PURE__ */ o(function(r, t, n) {
  for (var a = 0, i = 0; a = i, i = B(), a === 38 && i === 12 && (t[n] = 1), !le(i); )
    k();
  return me(r, M);
}, "identifierWithPointTracking"), Fn = /* @__PURE__ */ o(function(r, t) {
  var n = -1, a = 44;
  do
    switch (le(a)) {
      case 0:
        a === 38 && B() === 12 && (t[n] = 1), r[n] += An(M - 1, t, n);
        break;
      case 2:
        r[n] += he(a);
        break;
      case 4:
        if (a === 44) {
          r[++n] = B() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += X(a);
    }
  while (a = k());
  return r;
}, "toRules"), _n = /* @__PURE__ */ o(function(r, t) {
  return $e(Fn(De(r), t));
}, "getRules"), Qr = /* @__PURE__ */ new WeakMap(), In = /* @__PURE__ */ o(function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, a = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !Qr.get(n)) && !a) {
      Qr.set(r, true);
      for (var i = [], s = _n(t, i), u = n.props, f = 0, l = 0; f < s.length; f++)
        for (var c = 0; c < u.length; c++, l++)
          r.props[l] = i[f] ? s[f].replace(/&\f/g, u[c]) : u[c] + " " + s[f];
    }
  }
}, "compat"), Pn = /* @__PURE__ */ o(function(r) {
  if (r.type === "decl") {
    var t = r.value;
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, "removeLabel");
function et(e2, r) {
  switch (Dr(e2, r)) {
    case 5103:
      return C + "print-" + e2 + e2;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return C + e2 + e2;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return C + e2 + Ee + e2 + L + e2 + e2;
    case 6828:
    case 4268:
      return C + e2 + L + e2 + e2;
    case 6165:
      return C + e2 + L + "flex-" + e2 + e2;
    case 5187:
      return C + e2 + E(e2, /(\w+).+(:[^]+)/, C + "box-$1$2" + L + "flex-$1$2") + e2;
    case 5443:
      return C + e2 + L + "flex-item-" + E(e2, /flex-|-self/, "") + e2;
    case 4675:
      return C + e2 + L + "flex-line-pack" + E(e2, /align-content|flex-|-self/, "") + e2;
    case 5548:
      return C + e2 + L + E(e2, "shrink", "negative") + e2;
    case 5292:
      return C + e2 + L + E(e2, "basis", "preferred-size") + e2;
    case 6060:
      return C + "box-" + E(e2, "-grow", "") + C + e2 + L + E(e2, "grow", "positive") + e2;
    case 4554:
      return C + E(e2, /([^-])(transform)/g, "$1" + C + "$2") + e2;
    case 6187:
      return E(E(E(e2, /(zoom-|grab)/, C + "$1"), /(image-set)/, C + "$1"), e2, "") + e2;
    case 5495:
    case 3959:
      return E(e2, /(image-set\([^]*)/, C + "$1$`$1");
    case 4968:
      return E(E(e2, /(.+:)(flex-)?(.*)/, C + "box-pack:$3" + L + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + C + e2 + e2;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return E(e2, /(.+)-inline(.+)/, C + "$1$2") + e2;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (z(e2) - 1 - r > 6) switch (_(e2, r + 1)) {
        case 109:
          if (_(e2, r + 4) !== 45) break;
        case 102:
          return E(e2, /(.+:)(.+)-([^]+)/, "$1" + C + "$2-$3$1" + Ee + (_(e2, r + 3) == 108 ? "$3" : "$2-$3")) + e2;
        case 115:
          return ~Se(e2, "stretch") ? et(E(e2, "stretch", "fill-available"), r) + e2 : e2;
      }
      break;
    case 4949:
      if (_(e2, r + 1) !== 115) break;
    case 6444:
      switch (_(e2, z(e2) - 3 - (~Se(e2, "!important") && 10))) {
        case 107:
          return E(e2, ":", ":" + C) + e2;
        case 101:
          return E(e2, /(.+:)([^;!]+)(;|!.+)?/, "$1" + C + (_(e2, 14) === 45 ? "inline-" : "") + "box$3$1" + C + "$2$3$1" + L + "$2box$3") + e2;
      }
      break;
    case 5936:
      switch (_(e2, r + 11)) {
        case 114:
          return C + e2 + L + E(e2, /[svh]\w+-[tblr]{2}/, "tb") + e2;
        case 108:
          return C + e2 + L + E(e2, /[svh]\w+-[tblr]{2}/, "tb-rl") + e2;
        case 45:
          return C + e2 + L + E(e2, /[svh]\w+-[tblr]{2}/, "lr") + e2;
      }
      return C + e2 + L + e2 + e2;
  }
  return e2;
}
o(et, "prefix");
var Ln = /* @__PURE__ */ o(function(r, t, n, a) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case se:
      r.return = et(r.value, r.length);
      break;
    case ke:
      return Z([de(r, {
        value: E(r.value, "@", "@" + C)
      })], a);
    case ie:
      if (r.length) return ir(r.props, function(i) {
        switch (or(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Z([de(r, {
              props: [E(i, /:(read-\w+)/, ":" + Ee + "$1")]
            })], a);
          case "::placeholder":
            return Z([de(r, {
              props: [E(i, /:(plac\w+)/, ":" + C + "input-$1")]
            }), de(r, {
              props: [E(i, /:(plac\w+)/, ":" + Ee + "$1")]
            }), de(r, {
              props: [E(i, /:(plac\w+)/, L + "input-$1")]
            })], a);
        }
        return "";
      });
  }
}, "prefixer"), zn = [Ln], fr = /* @__PURE__ */ o(function(r) {
  var t = r.key;
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(d) {
      var v = d.getAttribute("data-emotion");
      v.indexOf(" ") !== -1 && (document.head.appendChild(d), d.setAttribute("data-s", ""));
    });
  }
  var a = r.stylisPlugins || zn, i = {}, s, u = [];
  s = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(d) {
      for (var v = d.getAttribute("data-emotion").split(" "), y = 1; y < v.length; y++)
        i[v[y]] = true;
      u.push(d);
    }
  );
  var f, l = [In, Pn];
  {
    var c, p = [Kr, Zr(function(d) {
      c.insert(d);
    })], m = Xr(l.concat(a, p)), w = /* @__PURE__ */ o(function(v) {
      return Z(Jr(v), m);
    }, "stylis");
    f = /* @__PURE__ */ o(function(v, y, x, A) {
      c = x, w(v ? v + "{" + y.styles + "}" : y.styles), A && (b.inserted[y.name] = true);
    }, "insert");
  }
  var b = {
    key: t,
    sheet: new zr({
      key: t,
      container: s,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: i,
    registered: {},
    insert: f
  };
  return b.sheet.hydrate(u), b;
}, "createCache");
var ct = ar(pr());
var lt = /* @__PURE__ */ o(function(e2, r) {
  return (0, ct.default)(e2, r);
}, "hoistNonReactStatics");
var Hn = true;
function ge(e2, r, t) {
  var n = "";
  return t.split(" ").forEach(function(a) {
    e2[a] !== void 0 ? r.push(e2[a] + ";") : a && (n += a + " ");
  }), n;
}
o(ge, "getRegisteredStyles");
var Q = /* @__PURE__ */ o(function(r, t, n) {
  var a = r.key + "-" + t.name;
  (n === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Hn === false) && r.registered[a] === void 0 && (r.registered[a] = t.styles);
}, "registerStyles"), ee = /* @__PURE__ */ o(function(r, t, n) {
  Q(r, t, n);
  var a = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var i = t;
    do
      r.insert(t === i ? "." + a : "", i, r.sheet, true), i = i.next;
    while (i !== void 0);
  }
}, "insertStyles");
function pt(e2) {
  for (var r = 0, t, n = 0, a = e2.length; a >= 4; ++n, a -= 4)
    t = e2.charCodeAt(n) & 255 | (e2.charCodeAt(++n) & 255) << 8 | (e2.charCodeAt(++n) & 255) << 16 | (e2.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      r ^= (e2.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e2.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e2.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
o(pt, "murmur2");
var dt = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var Un = /[A-Z]|^ms/g, Vn = /_EMO_([^_]+?)_([^]*?)_EMO_/g, bt = /* @__PURE__ */ o(function(r) {
  return r.charCodeAt(1) === 45;
}, "isCustomProperty"), mt = /* @__PURE__ */ o(function(r) {
  return r != null && typeof r != "boolean";
}, "isProcessableValue"), dr = /* @__PURE__ */ He(function(e2) {
  return bt(e2) ? e2 : e2.replace(Un, "-$&").toLowerCase();
}), ht = /* @__PURE__ */ o(function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(Vn, function(n, a, i) {
          return H = {
            name: a,
            styles: i,
            next: H
          }, a;
        });
  }
  return dt[r] !== 1 && !bt(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
}, "processStyleValue");
function Oe(e2, r, t) {
  if (t == null)
    return "";
  var n = t;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      var a = t;
      if (a.anim === 1)
        return H = {
          name: a.name,
          styles: a.styles,
          next: H
        }, a.name;
      var i = t;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            H = {
              name: s.name,
              styles: s.styles,
              next: H
            }, s = s.next;
        var u = i.styles + ";";
        return u;
      }
      return Yn(e2, r, t);
    }
    case "function": {
      if (e2 !== void 0) {
        var f = H, l = t(e2);
        return H = f, Oe(e2, r, l);
      }
      break;
    }
  }
  var c = t;
  if (r == null)
    return c;
  var p = r[c];
  return p !== void 0 ? p : c;
}
o(Oe, "handleInterpolation");
function Yn(e2, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var a = 0; a < t.length; a++)
      n += Oe(e2, r, t[a]) + ";";
  else
    for (var i in t) {
      var s = t[i];
      if (typeof s != "object") {
        var u = s;
        r != null && r[u] !== void 0 ? n += i + "{" + r[u] + "}" : mt(u) && (n += dr(i) + ":" + ht(i, u) + ";");
      } else {
        if (Array.isArray(s) && typeof s[0] == "string" && (r == null || r[s[0]] === void 0))
          for (var f = 0; f < s.length; f++)
            mt(s[f]) && (n += dr(i) + ":" + ht(i, s[f]) + ";");
        else {
          var l = Oe(e2, r, s);
          switch (i) {
            case "animation":
            case "animationName": {
              n += dr(i) + ":" + l + ";";
              break;
            }
            default:
              n += i + "{" + l + "}";
          }
        }
      }
    }
  return n;
}
o(Yn, "createStringFromObject");
var gt = /label:\s*([^\s;{]+)\s*(;|$)/g, H;
function q(e2, r, t) {
  if (e2.length === 1 && typeof e2[0] == "object" && e2[0] !== null && e2[0].styles !== void 0)
    return e2[0];
  var n = true, a = "";
  H = void 0;
  var i = e2[0];
  if (i == null || i.raw === void 0)
    n = false, a += Oe(t, r, i);
  else {
    var s = i;
    a += s[0];
  }
  for (var u = 1; u < e2.length; u++)
    if (a += Oe(t, r, e2[u]), n) {
      var f = i;
      a += f[u];
    }
  gt.lastIndex = 0;
  for (var l = "", c; (c = gt.exec(a)) !== null; )
    l += "-" + c[1];
  var p = pt(a) + l;
  return {
    name: p,
    styles: a,
    next: H
  };
}
o(q, "serializeStyles");
var qn = /* @__PURE__ */ o(function(r) {
  return r();
}, "syncFallback"), vt = reactExports.useInsertionEffect ? reactExports.useInsertionEffect : false, be = vt || qn;
var yt = /* @__PURE__ */ reactExports.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ fr({
    key: "css"
  }) : null
);
yt.Provider;
var re = /* @__PURE__ */ o(function(r) {
  return /* @__PURE__ */ reactExports.forwardRef(function(t, n) {
    var a = reactExports.useContext(yt);
    return r(t, a, n);
  });
}, "withEmotionCache"), $ = /* @__PURE__ */ reactExports.createContext({}), wt = /* @__PURE__ */ o(function() {
  return reactExports.useContext($);
}, "useTheme"), Xn = /* @__PURE__ */ o(function(r, t) {
  if (typeof t == "function") {
    var n = t(r);
    return n;
  }
  return N({}, r, t);
}, "getTheme"), Zn = /* @__PURE__ */ ur(function(e2) {
  return ur(function(r) {
    return Xn(e2, r);
  });
}), Et = /* @__PURE__ */ o(function(r) {
  var t = reactExports.useContext($);
  return r.theme !== t && (t = Zn(t)(r.theme)), /* @__PURE__ */ reactExports.createElement($.Provider, {
    value: t
  }, r.children);
}, "ThemeProvider");
function St(e2) {
  var r = e2.displayName || e2.name || "Component", t = /* @__PURE__ */ reactExports.forwardRef(/* @__PURE__ */ o(function(a, i) {
    var s = reactExports.useContext($);
    return /* @__PURE__ */ reactExports.createElement(e2, N({
      theme: s,
      ref: i
    }, a));
  }, "render"));
  return t.displayName = "WithTheme(" + r + ")", lt(t, e2);
}
o(St, "withTheme");
var Ue = {}.hasOwnProperty, hr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Tt = /* @__PURE__ */ o(function(r, t) {
  var n = {};
  for (var a in t)
    Ue.call(t, a) && (n[a] = t[a]);
  return n[hr] = r, n;
}, "createEmotionProps"), Qn = /* @__PURE__ */ o(function(r) {
  var t = r.cache, n = r.serialized, a = r.isStringTag;
  return Q(t, n, a), be(function() {
    return ee(t, n, a);
  }), null;
}, "Insertion"), ea = /* @__PURE__ */ re(function(e2, r, t) {
  var n = e2.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var a = e2[hr], i = [n], s = "";
  typeof e2.className == "string" ? s = ge(r.registered, i, e2.className) : e2.className != null && (s = e2.className + " ");
  var u = q(i, void 0, reactExports.useContext($));
  s += r.key + "-" + u.name;
  var f = {};
  for (var l in e2)
    Ue.call(e2, l) && l !== "css" && l !== hr && true && (f[l] = e2[l]);
  return f.className = s, t && (f.ref = t), /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(Qn, {
    cache: r,
    serialized: u,
    isStringTag: typeof a == "string"
  }), /* @__PURE__ */ reactExports.createElement(a, f));
}), Ct = ea;
ar(pr());
var gr = /* @__PURE__ */ o(function(r, t) {
  var n = arguments;
  if (t == null || !Ue.call(t, "css"))
    return reactExports.createElement.apply(void 0, n);
  var a = n.length, i = new Array(a);
  i[0] = Ct, i[1] = Tt(r, t);
  for (var s = 2; s < a; s++)
    i[s] = n[s];
  return reactExports.createElement.apply(null, i);
}, "jsx");
(function(e2) {
  var r;
  r || (r = e2.JSX || (e2.JSX = {}));
})(gr || (gr = {}));
function Ae() {
  for (var e2 = arguments.length, r = new Array(e2), t = 0; t < e2; t++)
    r[t] = arguments[t];
  return q(r);
}
o(Ae, "css");
function ve() {
  var e2 = Ae.apply(void 0, arguments), r = "animation-" + e2.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + e2.styles + "}",
    anim: 1,
    toString: /* @__PURE__ */ o(function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }, "toString")
  };
}
o(ve, "keyframes");
function na(e2, r, t) {
  var n = [], a = ge(e2, n, t);
  return n.length < 2 ? t : a + r(n);
}
o(na, "merge");
var ia = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, br = /* @__PURE__ */ He(
  function(e2) {
    return ia.test(e2) || e2.charCodeAt(0) === 111 && e2.charCodeAt(1) === 110 && e2.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
var ua = br, fa = /* @__PURE__ */ o(function(r) {
  return r !== "theme";
}, "testOmitPropsOnComponent"), Ot = /* @__PURE__ */ o(function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? ua : fa;
}, "getDefaultShouldForwardProp"), Rt = /* @__PURE__ */ o(function(r, t, n) {
  var a;
  if (t) {
    var i = t.shouldForwardProp;
    a = r.__emotion_forwardProp && i ? function(s) {
      return r.__emotion_forwardProp(s) && i(s);
    } : i;
  }
  return typeof a != "function" && n && (a = r.__emotion_forwardProp), a;
}, "composeShouldForwardProps"), ca = /* @__PURE__ */ o(function(r) {
  var t = r.cache, n = r.serialized, a = r.isStringTag;
  return Q(t, n, a), be(function() {
    return ee(t, n, a);
  }), null;
}, "Insertion"), At = /* @__PURE__ */ o(function e(r, t) {
  var n = r.__emotion_real === r, a = n && r.__emotion_base || r, i, s;
  t !== void 0 && (i = t.label, s = t.target);
  var u = Rt(r, t, n), f = u || Ot(a), l = !f("as");
  return function() {
    var c = arguments, p = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
      p.push.apply(p, c);
    else {
      var m = c[0];
      p.push(m[0]);
      for (var w = c.length, b = 1; b < w; b++)
        p.push(c[b], m[b]);
    }
    var d = re(function(v, y, x) {
      var A = l && v.as || a, S = "", R = [], F = v;
      if (v.theme == null) {
        F = {};
        for (var T in v)
          F[T] = v[T];
        F.theme = reactExports.useContext($);
      }
      typeof v.className == "string" ? S = ge(y.registered, R, v.className) : v.className != null && (S = v.className + " ");
      var ae = q(p.concat(R), y.registered, F);
      S += y.key + "-" + ae.name, s !== void 0 && (S += " " + s);
      var oe = l && u === void 0 ? Ot(A) : f, V = {};
      for (var G in v)
        l && G === "as" || oe(G) && (V[G] = v[G]);
      return V.className = S, x && (V.ref = x), /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(ca, {
        cache: y,
        serialized: ae,
        isStringTag: typeof A == "string"
      }), /* @__PURE__ */ reactExports.createElement(A, V));
    });
    return d.displayName = i !== void 0 ? i : "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")", d.defaultProps = r.defaultProps, d.__emotion_real = d, d.__emotion_base = a, d.__emotion_styles = p, d.__emotion_forwardProp = u, Object.defineProperty(
      d,
      "toString",
      {
        value: /* @__PURE__ */ o(function() {
          return "." + s;
        }, "value")
      }
    ), d.withComponent = function(v, y) {
      var x = e(v, N({}, t, y, {
        shouldForwardProp: Rt(d, y, true)
      }));
      return x.apply(void 0, p);
    }, d;
  };
}, "createStyled");
var la = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], vr = At.bind(null);
la.forEach(function(e2) {
  vr[e2] = vr(e2);
});
function Ft(e2) {
  if (e2 === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e2;
}
o(Ft, "_assertThisInitialized");
function K(e2, r) {
  return K = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, n) {
    return t.__proto__ = n, t;
  }, K(e2, r);
}
o(K, "_setPrototypeOf");
function _t(e2, r) {
  e2.prototype = Object.create(r.prototype), e2.prototype.constructor = e2, K(e2, r);
}
o(_t, "_inheritsLoose");
function Ve(e2) {
  return Ve = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ve(e2);
}
o(Ve, "_getPrototypeOf");
function It(e2) {
  try {
    return Function.toString.call(e2).indexOf("[native code]") !== -1;
  } catch {
    return typeof e2 == "function";
  }
}
o(It, "_isNativeFunction");
function yr() {
  try {
    var e2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (yr = /* @__PURE__ */ o(function() {
    return !!e2;
  }, "_isNativeReflectConstruct"))();
}
o(yr, "_isNativeReflectConstruct");
function Pt(e2, r, t) {
  if (yr()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, r);
  var a = new (e2.bind.apply(e2, n))();
  return t && K(a, t.prototype), a;
}
o(Pt, "_construct");
function Ge(e2) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Ge = /* @__PURE__ */ o(function(n) {
    if (n === null || !It(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (r !== void 0) {
      if (r.has(n)) return r.get(n);
      r.set(n, a);
    }
    function a() {
      return Pt(n, arguments, Ve(this).constructor);
    }
    return o(a, "Wrapper"), a.prototype = Object.create(n.prototype, {
      constructor: {
        value: a,
        enumerable: false,
        writable: true,
        configurable: true
      }
    }), K(a, n);
  }, "_wrapNativeSuper"), Ge(e2);
}
o(Ge, "_wrapNativeSuper");
var pa = {
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
function da() {
  for (var e2 = arguments.length, r = new Array(e2), t = 0; t < e2; t++)
    r[t] = arguments[t];
  var n = r[0], a = [], i;
  for (i = 1; i < r.length; i += 1)
    a.push(r[i]);
  return a.forEach(function(s) {
    n = n.replace(/%[a-z]/, s);
  }), n;
}
o(da, "format");
var W = /* @__PURE__ */ function(e2) {
  _t(r, e2);
  function r(t) {
    for (var n, a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++)
      i[s - 1] = arguments[s];
    return n = e2.call(this, da.apply(void 0, [pa[t]].concat(i))) || this, Ft(n);
  }
  return o(r, "PolishedError"), r;
}(/* @__PURE__ */ Ge(Error));
function xr(e2) {
  return Math.round(e2 * 255);
}
o(xr, "colorToInt");
function ma(e2, r, t) {
  return xr(e2) + "," + xr(r) + "," + xr(t);
}
o(ma, "convertToInt");
function Fe(e2, r, t, n) {
  if (n === void 0 && (n = ma), r === 0)
    return n(t, t, t);
  var a = (e2 % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * t - 1)) * r, s = i * (1 - Math.abs(a % 2 - 1)), u = 0, f = 0, l = 0;
  a >= 0 && a < 1 ? (u = i, f = s) : a >= 1 && a < 2 ? (u = s, f = i) : a >= 2 && a < 3 ? (f = i, l = s) : a >= 3 && a < 4 ? (f = s, l = i) : a >= 4 && a < 5 ? (u = s, l = i) : a >= 5 && a < 6 && (u = i, l = s);
  var c = t - i / 2, p = u + c, m = f + c, w = l + c;
  return n(p, m, w);
}
o(Fe, "hslToRgb");
var Lt = {
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
function ha(e2) {
  if (typeof e2 != "string") return e2;
  var r = e2.toLowerCase();
  return Lt[r] ? "#" + Lt[r] : e2;
}
o(ha, "nameToHex");
var ga = /^#[a-fA-F0-9]{6}$/, ba = /^#[a-fA-F0-9]{8}$/, va = /^#[a-fA-F0-9]{3}$/, ya = /^#[a-fA-F0-9]{4}$/, wr = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, xa = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, wa = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, Ea = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function qe(e2) {
  if (typeof e2 != "string")
    throw new W(3);
  var r = ha(e2);
  if (r.match(ga))
    return {
      red: parseInt("" + r[1] + r[2], 16),
      green: parseInt("" + r[3] + r[4], 16),
      blue: parseInt("" + r[5] + r[6], 16)
    };
  if (r.match(ba)) {
    var t = parseFloat((parseInt("" + r[7] + r[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + r[1] + r[2], 16),
      green: parseInt("" + r[3] + r[4], 16),
      blue: parseInt("" + r[5] + r[6], 16),
      alpha: t
    };
  }
  if (r.match(va))
    return {
      red: parseInt("" + r[1] + r[1], 16),
      green: parseInt("" + r[2] + r[2], 16),
      blue: parseInt("" + r[3] + r[3], 16)
    };
  if (r.match(ya)) {
    var n = parseFloat((parseInt("" + r[4] + r[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + r[1] + r[1], 16),
      green: parseInt("" + r[2] + r[2], 16),
      blue: parseInt("" + r[3] + r[3], 16),
      alpha: n
    };
  }
  var a = wr.exec(r);
  if (a)
    return {
      red: parseInt("" + a[1], 10),
      green: parseInt("" + a[2], 10),
      blue: parseInt("" + a[3], 10)
    };
  var i = xa.exec(r.substring(0, 50));
  if (i)
    return {
      red: parseInt("" + i[1], 10),
      green: parseInt("" + i[2], 10),
      blue: parseInt("" + i[3], 10),
      alpha: parseFloat("" + i[4]) > 1 ? parseFloat("" + i[4]) / 100 : parseFloat("" + i[4])
    };
  var s = wa.exec(r);
  if (s) {
    var u = parseInt("" + s[1], 10), f = parseInt("" + s[2], 10) / 100, l = parseInt("" + s[3], 10) / 100, c = "rgb(" + Fe(u, f, l) + ")", p = wr.exec(c);
    if (!p)
      throw new W(4, r, c);
    return {
      red: parseInt("" + p[1], 10),
      green: parseInt("" + p[2], 10),
      blue: parseInt("" + p[3], 10)
    };
  }
  var m = Ea.exec(r.substring(0, 50));
  if (m) {
    var w = parseInt("" + m[1], 10), b = parseInt("" + m[2], 10) / 100, d = parseInt("" + m[3], 10) / 100, v = "rgb(" + Fe(w, b, d) + ")", y = wr.exec(v);
    if (!y)
      throw new W(4, r, v);
    return {
      red: parseInt("" + y[1], 10),
      green: parseInt("" + y[2], 10),
      blue: parseInt("" + y[3], 10),
      alpha: parseFloat("" + m[4]) > 1 ? parseFloat("" + m[4]) / 100 : parseFloat("" + m[4])
    };
  }
  throw new W(5);
}
o(qe, "parseToRgb");
function Sa(e2) {
  var r = e2.red / 255, t = e2.green / 255, n = e2.blue / 255, a = Math.max(r, t, n), i = Math.min(r, t, n), s = (a + i) / 2;
  if (a === i)
    return e2.alpha !== void 0 ? {
      hue: 0,
      saturation: 0,
      lightness: s,
      alpha: e2.alpha
    } : {
      hue: 0,
      saturation: 0,
      lightness: s
    };
  var u, f = a - i, l = s > 0.5 ? f / (2 - a - i) : f / (a + i);
  switch (a) {
    case r:
      u = (t - n) / f + (t < n ? 6 : 0);
      break;
    case t:
      u = (n - r) / f + 2;
      break;
    default:
      u = (r - t) / f + 4;
      break;
  }
  return u *= 60, e2.alpha !== void 0 ? {
    hue: u,
    saturation: l,
    lightness: s,
    alpha: e2.alpha
  } : {
    hue: u,
    saturation: l,
    lightness: s
  };
}
o(Sa, "rgbToHsl");
function zt(e2) {
  return Sa(qe(e2));
}
o(zt, "parseToHsl");
var Ta = /* @__PURE__ */ o(function(r) {
  return r.length === 7 && r[1] === r[2] && r[3] === r[4] && r[5] === r[6] ? "#" + r[1] + r[3] + r[5] : r;
}, "reduceHexValue"), Sr = Ta;
function te(e2) {
  var r = e2.toString(16);
  return r.length === 1 ? "0" + r : r;
}
o(te, "numberToHex");
function Er(e2) {
  return te(Math.round(e2 * 255));
}
o(Er, "colorToHex");
function Ca(e2, r, t) {
  return Sr("#" + Er(e2) + Er(r) + Er(t));
}
o(Ca, "convertToHex");
function Ye(e2, r, t) {
  return Fe(e2, r, t, Ca);
}
o(Ye, "hslToHex");
function Oa(e2, r, t) {
  if (typeof e2 == "number" && typeof r == "number" && typeof t == "number")
    return Ye(e2, r, t);
  if (typeof e2 == "object" && r === void 0 && t === void 0)
    return Ye(e2.hue, e2.saturation, e2.lightness);
  throw new W(1);
}
o(Oa, "hsl");
function Ra(e2, r, t, n) {
  if (typeof e2 == "number" && typeof r == "number" && typeof t == "number" && typeof n == "number")
    return n >= 1 ? Ye(e2, r, t) : "rgba(" + Fe(e2, r, t) + "," + n + ")";
  if (typeof e2 == "object" && r === void 0 && t === void 0 && n === void 0)
    return e2.alpha >= 1 ? Ye(e2.hue, e2.saturation, e2.lightness) : "rgba(" + Fe(e2.hue, e2.saturation, e2.lightness) + "," + e2.alpha + ")";
  throw new W(2);
}
o(Ra, "hsla");
function Tr(e2, r, t) {
  if (typeof e2 == "number" && typeof r == "number" && typeof t == "number")
    return Sr("#" + te(e2) + te(r) + te(t));
  if (typeof e2 == "object" && r === void 0 && t === void 0)
    return Sr("#" + te(e2.red) + te(e2.green) + te(e2.blue));
  throw new W(6);
}
o(Tr, "rgb");
function ye(e2, r, t, n) {
  if (typeof e2 == "string" && typeof r == "number") {
    var a = qe(e2);
    return "rgba(" + a.red + "," + a.green + "," + a.blue + "," + r + ")";
  } else {
    if (typeof e2 == "number" && typeof r == "number" && typeof t == "number" && typeof n == "number")
      return n >= 1 ? Tr(e2, r, t) : "rgba(" + e2 + "," + r + "," + t + "," + n + ")";
    if (typeof e2 == "object" && r === void 0 && t === void 0 && n === void 0)
      return e2.alpha >= 1 ? Tr(e2.red, e2.green, e2.blue) : "rgba(" + e2.red + "," + e2.green + "," + e2.blue + "," + e2.alpha + ")";
  }
  throw new W(7);
}
o(ye, "rgba");
var Aa = /* @__PURE__ */ o(function(r) {
  return typeof r.red == "number" && typeof r.green == "number" && typeof r.blue == "number" && (typeof r.alpha != "number" || typeof r.alpha > "u");
}, "isRgb"), Fa = /* @__PURE__ */ o(function(r) {
  return typeof r.red == "number" && typeof r.green == "number" && typeof r.blue == "number" && typeof r.alpha == "number";
}, "isRgba"), _a = /* @__PURE__ */ o(function(r) {
  return typeof r.hue == "number" && typeof r.saturation == "number" && typeof r.lightness == "number" && (typeof r.alpha != "number" || typeof r.alpha > "u");
}, "isHsl"), Ia = /* @__PURE__ */ o(function(r) {
  return typeof r.hue == "number" && typeof r.saturation == "number" && typeof r.lightness == "number" && typeof r.alpha == "number";
}, "isHsla");
function Mt(e2) {
  if (typeof e2 != "object") throw new W(8);
  if (Fa(e2)) return ye(e2);
  if (Aa(e2)) return Tr(e2);
  if (Ia(e2)) return Ra(e2);
  if (_a(e2)) return Oa(e2);
  throw new W(8);
}
o(Mt, "toColorString");
function kt(e2, r, t) {
  return /* @__PURE__ */ o(function() {
    var a = t.concat(Array.prototype.slice.call(arguments));
    return a.length >= r ? e2.apply(this, a) : kt(e2, r, a);
  }, "fn");
}
o(kt, "curried");
function Je(e2) {
  return kt(e2, e2.length, []);
}
o(Je, "curry");
function Ke(e2, r, t) {
  return Math.max(e2, Math.min(r, t));
}
o(Ke, "guard");
function Pa(e2, r) {
  if (r === "transparent") return r;
  var t = zt(r);
  return Mt(N({}, t, {
    lightness: Ke(0, 1, t.lightness - parseFloat(e2))
  }));
}
o(Pa, "darken");
var La = /* @__PURE__ */ Je(Pa), Nt = La;
function za(e2, r) {
  if (r === "transparent") return r;
  var t = zt(r);
  return Mt(N({}, t, {
    lightness: Ke(0, 1, t.lightness + parseFloat(e2))
  }));
}
o(za, "lighten");
var Ma = /* @__PURE__ */ Je(za), Bt = Ma;
function ka(e2, r) {
  if (r === "transparent") return r;
  var t = qe(r), n = typeof t.alpha == "number" ? t.alpha : 1, a = N({}, t, {
    alpha: Ke(0, 1, (n * 100 + parseFloat(e2) * 100) / 100)
  });
  return ye(a);
}
o(ka, "opacify");
var Na = /* @__PURE__ */ Je(ka), Dt = Na;
function Ba(e2, r) {
  if (r === "transparent") return r;
  var t = qe(r), n = typeof t.alpha == "number" ? t.alpha : 1, a = N({}, t, {
    alpha: Ke(0, 1, +(n * 100 - parseFloat(e2) * 100).toFixed(2) / 100)
  });
  return ye(a);
}
o(Ba, "transparentize");
var Da = /* @__PURE__ */ Je(Ba), $t = Da;
var h = {
  // coral
  secondary: "#029CFD",
  // ocean
  tertiary: "#FAFBFC",
  ancillary: "#22a699",
  // Complimentary
  orange: "#FC521F",
  gold: "#FFAE00",
  green: "#66BF3C",
  seafoam: "#37D5D3",
  purple: "#6F2CAC",
  ultraviolet: "#2A0481",
  // Monochrome
  lightest: "#FFFFFF",
  lighter: "#F7FAFC",
  light: "#EEF3F6",
  mediumlight: "#ECF4F9",
  medium: "#D9E8F2",
  mediumdark: "#73828C",
  dark: "#5C6870",
  darker: "#454E54",
  darkest: "#2E3438",
  // For borders
  border: "hsla(203, 50%, 30%, 0.15)",
  // Status
  positive: "#66BF3C",
  negative: "#FF4400",
  warning: "#E69D00",
  critical: "#FFFFFF",
  positiveText: "#448028",
  negativeText: "#D43900",
  warningText: "#A15C20"
}, U = {
  app: "#F6F9FC",
  gridCellSize: 10,
  hoverable: $t(0.9, h.secondary),
  // hover state for items in a list
  // Notification, error, and warning backgrounds
  positive: "#E1FFD4",
  negative: "#FEDED2",
  warning: "#FFF5CF",
  critical: "#FF4400"
}, j = {
  fonts: {
    base: [
      '"Nunito Sans"',
      "-apple-system",
      '".SFNSText-Regular"',
      '"San Francisco"',
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Helvetica",
      "Arial",
      "sans-serif"
    ].join(", "),
    mono: [
      "ui-monospace",
      "Menlo",
      "Monaco",
      '"Roboto Mono"',
      '"Oxygen Mono"',
      '"Ubuntu Monospace"',
      '"Source Code Pro"',
      '"Droid Sans Mono"',
      '"Courier New"',
      "monospace"
    ].join(", ")
  },
  weight: {
    regular: 400,
    bold: 700
  },
  size: {
    s1: 12,
    s2: 14,
    s3: 16,
    m1: 20,
    m2: 24,
    m3: 28,
    l1: 32,
    l2: 40,
    l3: 48,
    code: 90
  }
};
var Or = ar(Ht(), 1), Wt = (0, Or.default)(1)(
  ({ typography: e2 }) => ({
    body: {
      fontFamily: e2.fonts.base,
      fontSize: e2.size.s3,
      margin: 0,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      WebkitOverflowScrolling: "touch"
    },
    "*": {
      boxSizing: "border-box"
    },
    "h1, h2, h3, h4, h5, h6": {
      fontWeight: e2.weight.regular,
      margin: 0,
      padding: 0
    },
    "button, input, textarea, select": {
      fontFamily: "inherit",
      fontSize: "inherit",
      boxSizing: "border-box"
    },
    sub: {
      fontSize: "0.8em",
      bottom: "-0.2em"
    },
    sup: {
      fontSize: "0.8em",
      top: "-0.2em"
    },
    "b, strong": {
      fontWeight: e2.weight.bold
    },
    hr: {
      border: "none",
      borderTop: "1px solid silver",
      clear: "both",
      marginBottom: "1.25rem"
    },
    code: {
      fontFamily: e2.fonts.mono,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      display: "inline-block",
      paddingLeft: 2,
      paddingRight: 2,
      verticalAlign: "baseline",
      color: "inherit"
    },
    pre: {
      fontFamily: e2.fonts.mono,
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      lineHeight: "18px",
      padding: "11px 1rem",
      whiteSpace: "pre-wrap",
      color: "inherit",
      borderRadius: 3,
      margin: "1rem 0"
    }
  })
);
(0, Or.default)(1)(({
  color: e2,
  background: r,
  typography: t
}) => {
  let n = Wt({ typography: t });
  return {
    ...n,
    body: {
      ...n.body,
      color: e2.defaultText,
      background: r.app,
      overflow: "hidden"
    },
    hr: {
      ...n.hr,
      borderTop: `1px solid ${e2.border}`
    }
  };
});
var ja = {
  base: "dark",
  // Storybook-specific color palette
  colorPrimary: "#FF4785",
  // coral
  colorSecondary: "#029CFD",
  // ocean
  // UI
  appBg: "#222425",
  appContentBg: "#1B1C1D",
  appPreviewBg: h.lightest,
  appBorderColor: "rgba(255,255,255,.1)",
  appBorderRadius: 4,
  // Fonts
  fontBase: j.fonts.base,
  fontCode: j.fonts.mono,
  // Text colors
  textColor: "#C9CDCF",
  textInverseColor: "#222425",
  textMutedColor: "#798186",
  // Toolbar default and active colors
  barTextColor: h.mediumdark,
  barHoverColor: h.secondary,
  barSelectedColor: h.secondary,
  barBg: "#292C2E",
  // Form colors
  buttonBg: "#222425",
  buttonBorder: "rgba(255,255,255,.1)",
  booleanBg: "#222425",
  booleanSelectedBg: "#2E3438",
  inputBg: "#1B1C1D",
  inputBorder: "rgba(255,255,255,.1)",
  inputTextColor: h.lightest,
  inputBorderRadius: 4
}, Ut = ja;
var Ha = {
  base: "light",
  // Storybook-specific color palette
  colorPrimary: "#FF4785",
  // coral
  colorSecondary: "#029CFD",
  // ocean
  // UI
  appBg: U.app,
  appContentBg: h.lightest,
  appPreviewBg: h.lightest,
  appBorderColor: h.border,
  appBorderRadius: 4,
  // Fonts
  fontBase: j.fonts.base,
  fontCode: j.fonts.mono,
  // Text colors
  textColor: h.darkest,
  textInverseColor: h.lightest,
  textMutedColor: h.dark,
  // Toolbar default and active colors
  barTextColor: h.mediumdark,
  barHoverColor: h.secondary,
  barSelectedColor: h.secondary,
  barBg: h.lightest,
  // Form colors
  buttonBg: U.app,
  buttonBorder: h.medium,
  booleanBg: h.mediumlight,
  booleanSelectedBg: h.lightest,
  inputBg: h.lightest,
  inputBorder: h.border,
  inputTextColor: h.darkest,
  inputBorderRadius: 4
}, xe = Ha;
var Vt = (() => {
  let e2;
  return typeof window < "u" ? e2 = window : typeof globalThis < "u" ? e2 = globalThis : typeof global < "u" ? e2 = global : typeof self < "u" ? e2 = self : e2 = {}, e2;
})();
const { logger: Wa } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var { window: Rr } = Vt, Gt = /* @__PURE__ */ o((e2) => ({ color: e2 }), "mkColor"), Ua = /* @__PURE__ */ o((e2) => typeof e2 != "string" ? (Wa.warn(
  `Color passed to theme object should be a string. Instead ${e2}(${typeof e2}) was passed.`
), false) : true, "isColorString"), Va = /* @__PURE__ */ o((e2) => !/(gradient|var|calc)/.test(e2), "isValidColorForPolished"), Ga = /* @__PURE__ */ o(
  (e2, r) => e2 === "darken" ? ye(`${Nt(1, r)}`, 0.95) : e2 === "lighten" ? ye(`${Bt(1, r)}`, 0.95) : r,
  "applyPolished"
), Yt = /* @__PURE__ */ o(
  (e2) => (r) => {
    if (!Ua(r) || !Va(r))
      return r;
    try {
      return Ga(e2, r);
    } catch {
      return r;
    }
  },
  "colorFactory"
), Ya = Yt("lighten");
Yt("darken");
var Xe = /* @__PURE__ */ o(() => !Rr || !Rr.matchMedia ? "light" : Rr.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light", "getPreferredColorScheme");
var _e = {
  light: xe,
  dark: Ut,
  normal: xe
}, Ar = Xe(), Us = /* @__PURE__ */ o((e2 = { base: Ar }, r) => {
  let t = {
    ..._e[Ar],
    ..._e[e2.base] || {},
    ...e2,
    base: _e[e2.base] ? e2.base : Ar
  };
  return {
    ...r,
    ...t,
    barSelectedColor: e2.barSelectedColor || t.colorSecondary
  };
}, "create");
var qt = {
  rubber: "cubic-bezier(0.175, 0.885, 0.335, 1.05)"
}, Ja = ve`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`, Jt = ve`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`, Ka = ve`
  0% { transform: translateY(1px); }
  25% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(1px); }
`, Xa = ve`
  0%, 100% { transform:translate3d(0,0,0); }
  12.5%, 62.5% { transform:translate3d(-4px,0,0); }
  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }
`, Za = Ae`
  animation: ${Jt} 1.5s ease-in-out infinite;
  color: transparent;
  cursor: progress;
`, Qa = Ae`
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:hover {
    transform: translate3d(0, -2px, 0);
  }

  &:active {
    transform: translate3d(0, 0, 0);
  }
`, Kt = {
  rotate360: Ja,
  glow: Jt,
  float: Ka,
  jiggle: Xa,
  inlineGlow: Za,
  hoverable: Qa
};
var Xt = {
  BASE_FONT_FAMILY: "Menlo, monospace",
  BASE_FONT_SIZE: "11px",
  BASE_LINE_HEIGHT: 1.2,
  BASE_BACKGROUND_COLOR: "rgb(36, 36, 36)",
  BASE_COLOR: "rgb(213, 213, 213)",
  OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
  OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
  OBJECT_NAME_COLOR: "rgb(227, 110, 236)",
  OBJECT_VALUE_NULL_COLOR: "rgb(127, 127, 127)",
  OBJECT_VALUE_UNDEFINED_COLOR: "rgb(127, 127, 127)",
  OBJECT_VALUE_REGEXP_COLOR: "rgb(233, 63, 59)",
  OBJECT_VALUE_STRING_COLOR: "rgb(233, 63, 59)",
  OBJECT_VALUE_SYMBOL_COLOR: "rgb(233, 63, 59)",
  OBJECT_VALUE_NUMBER_COLOR: "hsl(252, 100%, 75%)",
  OBJECT_VALUE_BOOLEAN_COLOR: "hsl(252, 100%, 75%)",
  OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(85, 106, 242)",
  HTML_TAG_COLOR: "rgb(93, 176, 215)",
  HTML_TAGNAME_COLOR: "rgb(93, 176, 215)",
  HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
  HTML_ATTRIBUTE_NAME_COLOR: "rgb(155, 187, 220)",
  HTML_ATTRIBUTE_VALUE_COLOR: "rgb(242, 151, 102)",
  HTML_COMMENT_COLOR: "rgb(137, 137, 137)",
  HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
  ARROW_COLOR: "rgb(145, 145, 145)",
  ARROW_MARGIN_RIGHT: 3,
  ARROW_FONT_SIZE: 12,
  ARROW_ANIMATION_DURATION: "0",
  TREENODE_FONT_FAMILY: "Menlo, monospace",
  TREENODE_FONT_SIZE: "11px",
  TREENODE_LINE_HEIGHT: 1.2,
  TREENODE_PADDING_LEFT: 12,
  TABLE_BORDER_COLOR: "rgb(85, 85, 85)",
  TABLE_TH_BACKGROUND_COLOR: "rgb(44, 44, 44)",
  TABLE_TH_HOVER_COLOR: "rgb(48, 48, 48)",
  TABLE_SORT_ICON_COLOR: "black",
  // 'rgb(48, 57, 66)',
  TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))",
  TABLE_DATA_BACKGROUND_SIZE: "128px 32px"
}, Zt = {
  BASE_FONT_FAMILY: "Menlo, monospace",
  BASE_FONT_SIZE: "11px",
  BASE_LINE_HEIGHT: 1.2,
  BASE_BACKGROUND_COLOR: "white",
  BASE_COLOR: "black",
  OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
  OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
  OBJECT_NAME_COLOR: "rgb(136, 19, 145)",
  OBJECT_VALUE_NULL_COLOR: "rgb(128, 128, 128)",
  OBJECT_VALUE_UNDEFINED_COLOR: "rgb(128, 128, 128)",
  OBJECT_VALUE_REGEXP_COLOR: "rgb(196, 26, 22)",
  OBJECT_VALUE_STRING_COLOR: "rgb(196, 26, 22)",
  OBJECT_VALUE_SYMBOL_COLOR: "rgb(196, 26, 22)",
  OBJECT_VALUE_NUMBER_COLOR: "rgb(28, 0, 207)",
  OBJECT_VALUE_BOOLEAN_COLOR: "rgb(28, 0, 207)",
  OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(13, 34, 170)",
  HTML_TAG_COLOR: "rgb(168, 148, 166)",
  HTML_TAGNAME_COLOR: "rgb(136, 18, 128)",
  HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
  HTML_ATTRIBUTE_NAME_COLOR: "rgb(153, 69, 0)",
  HTML_ATTRIBUTE_VALUE_COLOR: "rgb(26, 26, 166)",
  HTML_COMMENT_COLOR: "rgb(35, 110, 37)",
  HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
  ARROW_COLOR: "#6e6e6e",
  ARROW_MARGIN_RIGHT: 3,
  ARROW_FONT_SIZE: 12,
  ARROW_ANIMATION_DURATION: "0",
  TREENODE_FONT_FAMILY: "Menlo, monospace",
  TREENODE_FONT_SIZE: "11px",
  TREENODE_LINE_HEIGHT: 1.2,
  TREENODE_PADDING_LEFT: 12,
  TABLE_BORDER_COLOR: "#aaa",
  TABLE_TH_BACKGROUND_COLOR: "#eee",
  TABLE_TH_HOVER_COLOR: "hsla(0, 0%, 90%, 1)",
  TABLE_SORT_ICON_COLOR: "#6e6e6e",
  TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))",
  TABLE_DATA_BACKGROUND_SIZE: "128px 32px"
}, eo = /* @__PURE__ */ o((e2) => Object.entries(e2).reduce((r, [t, n]) => ({ ...r, [t]: Gt(n) }), {}), "convertColors"), Qt = /* @__PURE__ */ o(
  ({ colors: e2, mono: r }) => {
    let t = eo(e2);
    return {
      token: {
        fontFamily: r,
        WebkitFontSmoothing: "antialiased",
        "&.tag": t.red3,
        "&.comment": { ...t.green1, fontStyle: "italic" },
        "&.prolog": { ...t.green1, fontStyle: "italic" },
        "&.doctype": { ...t.green1, fontStyle: "italic" },
        "&.cdata": { ...t.green1, fontStyle: "italic" },
        "&.string": t.red1,
        "&.url": t.cyan1,
        "&.symbol": t.cyan1,
        "&.number": t.cyan1,
        "&.boolean": t.cyan1,
        "&.variable": t.cyan1,
        "&.constant": t.cyan1,
        "&.inserted": t.cyan1,
        "&.atrule": t.blue1,
        "&.keyword": t.blue1,
        "&.attr-value": t.blue1,
        "&.punctuation": t.gray1,
        "&.operator": t.gray1,
        "&.function": t.gray1,
        "&.deleted": t.red2,
        "&.important": {
          fontWeight: "bold"
        },
        "&.bold": {
          fontWeight: "bold"
        },
        "&.italic": {
          fontStyle: "italic"
        },
        "&.class-name": t.cyan2,
        "&.selector": t.red3,
        "&.attr-name": t.red4,
        "&.property": t.red4,
        "&.regex": t.red4,
        "&.entity": t.red4,
        "&.directive.tag .tag": {
          background: "#ffff00",
          ...t.gray1
        }
      },
      "language-json .token.boolean": t.blue1,
      "language-json .token.number": t.blue1,
      "language-json .token.property": t.cyan2,
      namespace: {
        opacity: 0.7
      }
    };
  },
  "create"
);
var ro = {
  green1: "#008000",
  red1: "#A31515",
  red2: "#9a050f",
  red3: "#800000",
  red4: "#ff0000",
  gray1: "#393A34",
  cyan1: "#36acaa",
  cyan2: "#2B91AF",
  blue1: "#0000ff",
  blue2: "#00009f"
}, to = {
  green1: "#7C7C7C",
  red1: "#92C379",
  red2: "#9a050f",
  red3: "#A8FF60",
  red4: "#96CBFE",
  gray1: "#EDEDED",
  cyan1: "#C6C5FE",
  cyan2: "#FFFFB6",
  blue1: "#B474DD",
  blue2: "#00009f"
}, no = /* @__PURE__ */ o((e2) => ({
  // Changeable colors
  primary: e2.colorPrimary,
  secondary: e2.colorSecondary,
  tertiary: h.tertiary,
  ancillary: h.ancillary,
  // Complimentary
  orange: h.orange,
  gold: h.gold,
  green: h.green,
  seafoam: h.seafoam,
  purple: h.purple,
  ultraviolet: h.ultraviolet,
  // Monochrome
  lightest: h.lightest,
  lighter: h.lighter,
  light: h.light,
  mediumlight: h.mediumlight,
  medium: h.medium,
  mediumdark: h.mediumdark,
  dark: h.dark,
  darker: h.darker,
  darkest: h.darkest,
  // For borders
  border: h.border,
  // Status
  positive: h.positive,
  negative: h.negative,
  warning: h.warning,
  critical: h.critical,
  defaultText: e2.textColor || h.darkest,
  inverseText: e2.textInverseColor || h.lightest,
  positiveText: h.positiveText,
  negativeText: h.negativeText,
  warningText: h.warningText
}), "createColors"), Fr = /* @__PURE__ */ o((e2 = _e[Xe()]) => {
  let {
    base: r,
    colorPrimary: t,
    colorSecondary: n,
    appBg: a,
    appContentBg: i,
    appPreviewBg: s,
    appBorderColor: u,
    appBorderRadius: f,
    fontBase: l,
    fontCode: c,
    textColor: p,
    textInverseColor: m,
    barTextColor: w,
    barHoverColor: b,
    barSelectedColor: d,
    barBg: v,
    buttonBg: y,
    buttonBorder: x,
    booleanBg: A,
    booleanSelectedBg: S,
    inputBg: R,
    inputBorder: F,
    inputTextColor: T,
    inputBorderRadius: ae,
    brandTitle: oe,
    brandUrl: V,
    brandImage: G,
    brandTarget: Qe,
    gridCellSize: er,
    ...rr
  } = e2;
  return {
    ...rr,
    base: r,
    color: no(e2),
    background: {
      app: a,
      bar: v,
      content: i,
      preview: s,
      gridCellSize: er || U.gridCellSize,
      hoverable: U.hoverable,
      positive: U.positive,
      negative: U.negative,
      warning: U.warning,
      critical: U.critical
    },
    typography: {
      fonts: {
        base: l,
        mono: c
      },
      weight: j.weight,
      size: j.size
    },
    animation: Kt,
    easing: qt,
    input: {
      background: R,
      border: F,
      borderRadius: ae,
      color: T
    },
    button: {
      background: y || R,
      border: x || F
    },
    boolean: {
      background: A || F,
      selectedBackground: S || R
    },
    // UI
    layoutMargin: 10,
    appBorderColor: u,
    appBorderRadius: f,
    // Toolbar default/active colors
    barTextColor: w,
    barHoverColor: b || n,
    barSelectedColor: d || n,
    barBg: v,
    // Brand logo/text
    brand: {
      title: oe,
      url: V,
      image: G || (oe ? null : void 0),
      target: Qe
    },
    code: Qt({
      colors: r === "light" ? ro : to,
      mono: c
    }),
    // Addon actions theme
    // API example https://github.com/storybookjs/react-inspector/blob/master/src/styles/themes/chromeLight.tsx
    addonActionsTheme: {
      ...r === "light" ? Zt : Xt,
      BASE_FONT_FAMILY: c,
      BASE_FONT_SIZE: j.size.s2 - 1,
      BASE_LINE_HEIGHT: "18px",
      BASE_BACKGROUND_COLOR: "transparent",
      BASE_COLOR: p,
      ARROW_COLOR: Dt(0.2, u),
      ARROW_MARGIN_RIGHT: 4,
      ARROW_FONT_SIZE: 8,
      TREENODE_FONT_FAMILY: c,
      TREENODE_FONT_SIZE: j.size.s2 - 1,
      TREENODE_LINE_HEIGHT: "18px",
      TREENODE_PADDING_LEFT: 12
    }
  };
}, "convert");
const { logger: uo } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var _r = /* @__PURE__ */ o((e2) => Object.keys(e2).length === 0, "isEmpty"), ne = /* @__PURE__ */ o((e2) => e2 != null && typeof e2 == "object", "isObject"), Ie = /* @__PURE__ */ o((e2, ...r) => Object.prototype.hasOwnProperty.call(e2, ...r), "hasOwnProperty");
var Pe = /* @__PURE__ */ o(() => /* @__PURE__ */ Object.create(null), "makeObjectWithoutPrototype");
var en = /* @__PURE__ */ o((e2, r) => e2 === r || !ne(e2) || !ne(r) ? {} : Object.keys(e2).reduce((t, n) => {
  if (Ie(r, n)) {
    let a = en(e2[n], r[n]);
    return ne(a) && _r(a) || (t[n] = a), t;
  }
  return t[n] = void 0, t;
}, Pe()), "deletedDiff"), Ze = en;
function rn(e2) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  var n = Array.from(typeof e2 == "string" ? [e2] : e2);
  n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var a = n.reduce(function(u, f) {
    var l = f.match(/\n([\t ]+|(?!\s).)/g);
    return l ? u.concat(l.map(function(c) {
      var p, m;
      return (m = (p = c.match(/[\t ]/g)) === null || p === void 0 ? void 0 : p.length) !== null && m !== void 0 ? m : 0;
    })) : u;
  }, []);
  if (a.length) {
    var i = new RegExp(`
[	 ]{` + Math.min.apply(Math, a) + "}", "g");
    n = n.map(function(u) {
      return u.replace(i, `
`);
    });
  }
  n[0] = n[0].replace(/^\r?\n/, "");
  var s = n[0];
  return r.forEach(function(u, f) {
    var l = s.match(/(?:^|\n)( *)$/), c = l ? l[1] : "", p = u;
    typeof u == "string" && u.includes(`
`) && (p = String(u).split(`
`).map(function(m, w) {
      return w === 0 ? m : "" + c + m;
    }).join(`
`)), s += p + n[f + 1];
  }), s;
}
o(rn, "dedent");
var $u = /* @__PURE__ */ o((e2) => {
  if (!e2)
    return Fr(xe);
  let r = Ze(xe, e2);
  return Object.keys(r).length && uo.warn(
    rn`
          Your theme is missing properties, you should update your theme!

          theme-data missing:
        `,
    r
  ), Fr(e2);
}, "ensure");
var Wu = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */";
export {
  $u as $,
  Et as E,
  Fr as F,
  Us as U,
  Wu as W,
  Ya as Y,
  _e as _,
  ve as a,
  br as b,
  h,
  j,
  vr as v,
  wt as w
};
