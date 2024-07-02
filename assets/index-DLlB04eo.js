var C = Object.create;
var u = Object.defineProperty;
var B = Object.getOwnPropertyDescriptor;
var F = Object.getOwnPropertyNames;
var h = Object.getPrototypeOf, w = Object.prototype.hasOwnProperty;
var v = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
var E = (r, e, n, t) => {
  if (e && typeof e == "object" || typeof e == "function") for (let a of F(e)) !w.call(r, a) && a !== n && u(r, a, { get: () => e[a], enumerable: !(t = B(e, a)) || t.enumerable });
  return r;
};
var I = (r, e, n) => (n = r != null ? C(h(r)) : {}, E(!r || !r.__esModule ? u(n, "default", { value: r, enumerable: true }) : n, r));
var x = v((T) => {
  Object.defineProperty(T, "__esModule", { value: true }), T.isEqual = /* @__PURE__ */ function() {
    var r = Object.prototype.toString, e = Object.getPrototypeOf, n = Object.getOwnPropertySymbols ? function(t) {
      return Object.keys(t).concat(Object.getOwnPropertySymbols(t));
    } : Object.keys;
    return function(t, a) {
      return function i(o, s, p) {
        var y, g, d, c = r.call(o), b = r.call(s);
        if (o === s) return true;
        if (o == null || s == null) return false;
        if (p.indexOf(o) > -1 && p.indexOf(s) > -1) return true;
        if (p.push(o, s), c != b || (y = n(o), g = n(s), y.length != g.length || y.some(function(A) {
          return !i(o[A], s[A], p);
        }))) return false;
        switch (c.slice(8, -1)) {
          case "Symbol":
            return o.valueOf() == s.valueOf();
          case "Date":
          case "Number":
            return +o == +s || +o != +o && +s != +s;
          case "RegExp":
          case "Function":
          case "String":
          case "Boolean":
            return "" + o == "" + s;
          case "Set":
          case "Map":
            y = o.entries(), g = s.entries();
            do
              if (!i((d = y.next()).value, g.next().value, p)) return false;
            while (!d.done);
            return true;
          case "ArrayBuffer":
            o = new Uint8Array(o), s = new Uint8Array(s);
          case "DataView":
            o = new Uint8Array(o.buffer), s = new Uint8Array(s.buffer);
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
            if (o.length != s.length) return false;
            for (d = 0; d < o.length; d++) if ((d in o || d in s) && (d in o != d in s || !i(o[d], s[d], p))) return false;
            return true;
          case "Object":
            return i(e(o), e(s), p);
          default:
            return false;
        }
      }(t, a, []);
    };
  }();
});
var l = I(x()), S = (r) => r.map((e) => typeof e < "u").filter(Boolean).length, k = (r, e) => {
  let { exists: n, eq: t, neq: a, truthy: i } = r;
  if (S([n, t, a, i]) > 1) throw new Error(`Invalid conditional test ${JSON.stringify({ exists: n, eq: t, neq: a })}`);
  if (typeof t < "u") return (0, l.isEqual)(e, t);
  if (typeof a < "u") return !(0, l.isEqual)(e, a);
  if (typeof n < "u") {
    let s = typeof e < "u";
    return n ? s : !s;
  }
  return (typeof i > "u" ? true : i) ? !!e : !e;
}, P = (r, e, n) => {
  if (!r.if) return true;
  let { arg: t, global: a } = r.if;
  if (S([t, a]) !== 1) throw new Error(`Invalid conditional value ${JSON.stringify({ arg: t, global: a })}`);
  let i = t ? e[t] : n[a];
  return k(r.if, i);
};
var O = (r) => r.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "-").replace(/-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
export {
  O,
  P
};
