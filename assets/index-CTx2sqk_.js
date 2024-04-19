var F = Object.create;
var u = Object.defineProperty;
var B = Object.getOwnPropertyDescriptor;
var C = Object.getOwnPropertyNames;
var h = Object.getPrototypeOf, w = Object.prototype.hasOwnProperty;
var I = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
var E = (r, e, n, t) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let a of C(e))
      !w.call(r, a) && a !== n && u(r, a, { get: () => e[a], enumerable: !(t = B(e, a)) || t.enumerable });
  return r;
};
var v = (r, e, n) => (n = r != null ? F(h(r)) : {}, E(e || !r || !r.__esModule ? u(n, "default", { value: r, enumerable: true }) : n, r));
var x = I((T) => {
  Object.defineProperty(T, "__esModule", { value: true }), T.isEqual = /* @__PURE__ */ function() {
    var r = Object.prototype.toString, e = Object.getPrototypeOf, n = Object.getOwnPropertySymbols ? function(t) {
      return Object.keys(t).concat(Object.getOwnPropertySymbols(t));
    } : Object.keys;
    return function(t, a) {
      return function i(o, s, d) {
        var y, g, p, l = r.call(o), b = r.call(s);
        if (o === s)
          return true;
        if (o == null || s == null)
          return false;
        if (d.indexOf(o) > -1 && d.indexOf(s) > -1)
          return true;
        if (d.push(o, s), l != b || (y = n(o), g = n(s), y.length != g.length || y.some(function(A) {
          return !i(o[A], s[A], d);
        })))
          return false;
        switch (l.slice(8, -1)) {
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
              if (!i((p = y.next()).value, g.next().value, d))
                return false;
            while (!p.done);
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
            if (o.length != s.length)
              return false;
            for (p = 0; p < o.length; p++)
              if ((p in o || p in s) && (p in o != p in s || !i(o[p], s[p], d)))
                return false;
            return true;
          case "Object":
            return i(e(o), e(s), d);
          default:
            return false;
        }
      }(t, a, []);
    };
  }();
});
var c = v(x()), S = (r) => r.map((e) => typeof e < "u").filter(Boolean).length, P = (r, e) => {
  let { exists: n, eq: t, neq: a, truthy: i } = r;
  if (S([n, t, a, i]) > 1)
    throw new Error(`Invalid conditional test ${JSON.stringify({ exists: n, eq: t, neq: a })}`);
  if (typeof t < "u")
    return (0, c.isEqual)(e, t);
  if (typeof a < "u")
    return !(0, c.isEqual)(e, a);
  if (typeof n < "u") {
    let s = typeof e < "u";
    return n ? s : !s;
  }
  return (typeof i > "u" ? true : i) ? !!e : !e;
}, O = (r, e, n) => {
  if (!r.if)
    return true;
  let { arg: t, global: a } = r.if;
  if (S([t, a]) !== 1)
    throw new Error(`Invalid conditional value ${JSON.stringify({ arg: t, global: a })}`);
  let i = t ? e[t] : n[a];
  return P(r.if, i);
};
var k = (r) => r.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "-").replace(/-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
export {
  O,
  k
};
