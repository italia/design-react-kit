import { i as WithTooltip, T as TooltipNote, F as Form, j as MarkupIcon, k as getControlId } from "./index-B6OeFasa.js";
import { R as React, r as reactExports } from "./index-CQCy530F.js";
import { g as getDefaultExportFromCjs } from "./_commonjsHelpers-LQfde5yM.js";
import { _ as _root, i as isObject_1, a as isSymbol_1 } from "./index-MBEdkwGi.js";
import { n as newStyled } from "./index-DTvnAYOg.js";
import "./iframe-ADcXWQ_9.js";
import "../sb-preview/runtime.js";
import "./index-Hv2vTVdx.js";
import "./index-CTx2sqk_.js";
import "./inheritsLoose-HEqISCW8.js";
import "./index-BdOSk9or.js";
function u() {
  return (u = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
function c(e, r) {
  if (null == e)
    return {};
  var t, n, o = {}, a = Object.keys(e);
  for (n = 0; n < a.length; n++)
    r.indexOf(t = a[n]) >= 0 || (o[t] = e[t]);
  return o;
}
function i(e) {
  var t = reactExports.useRef(e), n = reactExports.useRef(function(e2) {
    t.current && t.current(e2);
  });
  return t.current = e, n.current;
}
var s = function(e, r, t) {
  return void 0 === r && (r = 0), void 0 === t && (t = 1), e > t ? t : e < r ? r : e;
}, f = function(e) {
  return "touches" in e;
}, v = function(e) {
  return e && e.ownerDocument.defaultView || self;
}, d = function(e, r, t) {
  var n = e.getBoundingClientRect(), o = f(r) ? function(e2, r2) {
    for (var t2 = 0; t2 < e2.length; t2++)
      if (e2[t2].identifier === r2)
        return e2[t2];
    return e2[0];
  }(r.touches, t) : r;
  return { left: s((o.pageX - (n.left + v(e).pageXOffset)) / n.width), top: s((o.pageY - (n.top + v(e).pageYOffset)) / n.height) };
}, h = function(e) {
  !f(e) && e.preventDefault();
}, m = React.memo(function(o) {
  var a = o.onMove, l = o.onKey, s2 = c(o, ["onMove", "onKey"]), m2 = reactExports.useRef(null), g2 = i(a), p2 = i(l), b2 = reactExports.useRef(null), _2 = reactExports.useRef(false), x2 = reactExports.useMemo(function() {
    var e = function(e2) {
      h(e2), (f(e2) ? e2.touches.length > 0 : e2.buttons > 0) && m2.current ? g2(d(m2.current, e2, b2.current)) : t(false);
    }, r = function() {
      return t(false);
    };
    function t(t2) {
      var n = _2.current, o2 = v(m2.current), a2 = t2 ? o2.addEventListener : o2.removeEventListener;
      a2(n ? "touchmove" : "mousemove", e), a2(n ? "touchend" : "mouseup", r);
    }
    return [function(e2) {
      var r2 = e2.nativeEvent, n = m2.current;
      if (n && (h(r2), !function(e3, r3) {
        return r3 && !f(e3);
      }(r2, _2.current) && n)) {
        if (f(r2)) {
          _2.current = true;
          var o2 = r2.changedTouches || [];
          o2.length && (b2.current = o2[0].identifier);
        }
        n.focus(), g2(d(n, r2, b2.current)), t(true);
      }
    }, function(e2) {
      var r2 = e2.which || e2.keyCode;
      r2 < 37 || r2 > 40 || (e2.preventDefault(), p2({ left: 39 === r2 ? 0.05 : 37 === r2 ? -0.05 : 0, top: 40 === r2 ? 0.05 : 38 === r2 ? -0.05 : 0 }));
    }, t];
  }, [p2, g2]), C2 = x2[0], E2 = x2[1], H2 = x2[2];
  return reactExports.useEffect(function() {
    return H2;
  }, [H2]), React.createElement("div", u({}, s2, { onTouchStart: C2, onMouseDown: C2, className: "react-colorful__interactive", ref: m2, onKeyDown: E2, tabIndex: 0, role: "slider" }));
}), g = function(e) {
  return e.filter(Boolean).join(" ");
}, p = function(r) {
  var t = r.color, n = r.left, o = r.top, a = void 0 === o ? 0.5 : o, l = g(["react-colorful__pointer", r.className]);
  return React.createElement("div", { className: l, style: { top: 100 * a + "%", left: 100 * n + "%" } }, React.createElement("div", { className: "react-colorful__pointer-fill", style: { backgroundColor: t } }));
}, b = function(e, r, t) {
  return void 0 === r && (r = 0), void 0 === t && (t = Math.pow(10, r)), Math.round(t * e) / t;
}, _ = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) }, x = function(e) {
  return L(C(e));
}, C = function(e) {
  return "#" === e[0] && (e = e.substring(1)), e.length < 6 ? { r: parseInt(e[0] + e[0], 16), g: parseInt(e[1] + e[1], 16), b: parseInt(e[2] + e[2], 16), a: 4 === e.length ? b(parseInt(e[3] + e[3], 16) / 255, 2) : 1 } : { r: parseInt(e.substring(0, 2), 16), g: parseInt(e.substring(2, 4), 16), b: parseInt(e.substring(4, 6), 16), a: 8 === e.length ? b(parseInt(e.substring(6, 8), 16) / 255, 2) : 1 };
}, E = function(e, r) {
  return void 0 === r && (r = "deg"), Number(e) * (_[r] || 1);
}, H = function(e) {
  var r = /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);
  return r ? N({ h: E(r[1], r[2]), s: Number(r[3]), l: Number(r[4]), a: void 0 === r[5] ? 1 : Number(r[5]) / (r[6] ? 100 : 1) }) : { h: 0, s: 0, v: 0, a: 1 };
}, N = function(e) {
  var r = e.s, t = e.l;
  return { h: e.h, s: (r *= (t < 50 ? t : 100 - t) / 100) > 0 ? 2 * r / (t + r) * 100 : 0, v: t + r, a: e.a };
}, w = function(e) {
  return K(I(e));
}, y = function(e) {
  var r = e.s, t = e.v, n = e.a, o = (200 - r) * t / 100;
  return { h: b(e.h), s: b(o > 0 && o < 200 ? r * t / 100 / (o <= 100 ? o : 200 - o) * 100 : 0), l: b(o / 2), a: b(n, 2) };
}, q = function(e) {
  var r = y(e);
  return "hsl(" + r.h + ", " + r.s + "%, " + r.l + "%)";
}, k = function(e) {
  var r = y(e);
  return "hsla(" + r.h + ", " + r.s + "%, " + r.l + "%, " + r.a + ")";
}, I = function(e) {
  var r = e.h, t = e.s, n = e.v, o = e.a;
  r = r / 360 * 6, t /= 100, n /= 100;
  var a = Math.floor(r), l = n * (1 - t), u2 = n * (1 - (r - a) * t), c2 = n * (1 - (1 - r + a) * t), i2 = a % 6;
  return { r: b(255 * [n, u2, l, l, c2, n][i2]), g: b(255 * [c2, n, n, u2, l, l][i2]), b: b(255 * [l, l, c2, n, n, u2][i2]), a: b(o, 2) };
}, z = function(e) {
  var r = /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);
  return r ? L({ r: Number(r[1]) / (r[2] ? 100 / 255 : 1), g: Number(r[3]) / (r[4] ? 100 / 255 : 1), b: Number(r[5]) / (r[6] ? 100 / 255 : 1), a: void 0 === r[7] ? 1 : Number(r[7]) / (r[8] ? 100 : 1) }) : { h: 0, s: 0, v: 0, a: 1 };
}, D = function(e) {
  var r = e.toString(16);
  return r.length < 2 ? "0" + r : r;
}, K = function(e) {
  var r = e.r, t = e.g, n = e.b, o = e.a, a = o < 1 ? D(b(255 * o)) : "";
  return "#" + D(r) + D(t) + D(n) + a;
}, L = function(e) {
  var r = e.r, t = e.g, n = e.b, o = e.a, a = Math.max(r, t, n), l = a - Math.min(r, t, n), u2 = l ? a === r ? (t - n) / l : a === t ? 2 + (n - r) / l : 4 + (r - t) / l : 0;
  return { h: b(60 * (u2 < 0 ? u2 + 6 : u2)), s: b(a ? l / a * 100 : 0), v: b(a / 255 * 100), a: o };
}, S = React.memo(function(r) {
  var t = r.hue, n = r.onChange, o = g(["react-colorful__hue", r.className]);
  return React.createElement("div", { className: o }, React.createElement(m, { onMove: function(e) {
    n({ h: 360 * e.left });
  }, onKey: function(e) {
    n({ h: s(t + 360 * e.left, 0, 360) });
  }, "aria-label": "Hue", "aria-valuenow": b(t), "aria-valuemax": "360", "aria-valuemin": "0" }, React.createElement(p, { className: "react-colorful__hue-pointer", left: t / 360, color: q({ h: t, s: 100, v: 100, a: 1 }) })));
}), T = React.memo(function(r) {
  var t = r.hsva, n = r.onChange, o = { backgroundColor: q({ h: t.h, s: 100, v: 100, a: 1 }) };
  return React.createElement("div", { className: "react-colorful__saturation", style: o }, React.createElement(m, { onMove: function(e) {
    n({ s: 100 * e.left, v: 100 - 100 * e.top });
  }, onKey: function(e) {
    n({ s: s(t.s + 100 * e.left, 0, 100), v: s(t.v - 100 * e.top, 0, 100) });
  }, "aria-label": "Color", "aria-valuetext": "Saturation " + b(t.s) + "%, Brightness " + b(t.v) + "%" }, React.createElement(p, { className: "react-colorful__saturation-pointer", top: 1 - t.v / 100, left: t.s / 100, color: q(t) })));
}), F = function(e, r) {
  if (e === r)
    return true;
  for (var t in e)
    if (e[t] !== r[t])
      return false;
  return true;
}, P = function(e, r) {
  return e.replace(/\s/g, "") === r.replace(/\s/g, "");
}, X = function(e, r) {
  return e.toLowerCase() === r.toLowerCase() || F(C(e), C(r));
};
function Y(e, t, l) {
  var u2 = i(l), c2 = reactExports.useState(function() {
    return e.toHsva(t);
  }), s2 = c2[0], f2 = c2[1], v2 = reactExports.useRef({ color: t, hsva: s2 });
  reactExports.useEffect(function() {
    if (!e.equal(t, v2.current.color)) {
      var r = e.toHsva(t);
      v2.current = { hsva: r, color: t }, f2(r);
    }
  }, [t, e]), reactExports.useEffect(function() {
    var r;
    F(s2, v2.current.hsva) || e.equal(r = e.fromHsva(s2), v2.current.color) || (v2.current = { hsva: s2, color: r }, u2(r));
  }, [s2, e, u2]);
  var d2 = reactExports.useCallback(function(e2) {
    f2(function(r) {
      return Object.assign({}, r, e2);
    });
  }, []);
  return [s2, d2];
}
var V = "undefined" != typeof window ? reactExports.useLayoutEffect : reactExports.useEffect, $ = function() {
  return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0;
}, J = /* @__PURE__ */ new Map(), Q = function(e) {
  V(function() {
    var r = e.current ? e.current.ownerDocument : document;
    if (void 0 !== r && !J.has(r)) {
      var t = r.createElement("style");
      t.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, J.set(r, t);
      var n = $();
      n && t.setAttribute("nonce", n), r.head.appendChild(t);
    }
  }, []);
}, U = function(t) {
  var n = t.className, o = t.colorModel, a = t.color, l = void 0 === a ? o.defaultColor : a, i2 = t.onChange, s2 = c(t, ["className", "colorModel", "color", "onChange"]), f2 = reactExports.useRef(null);
  Q(f2);
  var v2 = Y(o, l, i2), d2 = v2[0], h2 = v2[1], m2 = g(["react-colorful", n]);
  return React.createElement("div", u({}, s2, { ref: f2, className: m2 }), React.createElement(T, { hsva: d2, onChange: h2 }), React.createElement(S, { hue: d2.h, onChange: h2, className: "react-colorful__last-control" }));
}, W = { defaultColor: "000", toHsva: x, fromHsva: function(e) {
  return w({ h: e.h, s: e.s, v: e.v, a: 1 });
}, equal: X }, Z = function(r) {
  return React.createElement(U, u({}, r, { colorModel: W }));
}, ee = function(r) {
  var t = r.className, n = r.hsva, o = r.onChange, a = { backgroundImage: "linear-gradient(90deg, " + k(Object.assign({}, n, { a: 0 })) + ", " + k(Object.assign({}, n, { a: 1 })) + ")" }, l = g(["react-colorful__alpha", t]), u2 = b(100 * n.a);
  return React.createElement("div", { className: l }, React.createElement("div", { className: "react-colorful__alpha-gradient", style: a }), React.createElement(m, { onMove: function(e) {
    o({ a: e.left });
  }, onKey: function(e) {
    o({ a: s(n.a + e.left) });
  }, "aria-label": "Alpha", "aria-valuetext": u2 + "%", "aria-valuenow": u2, "aria-valuemin": "0", "aria-valuemax": "100" }, React.createElement(p, { className: "react-colorful__alpha-pointer", left: n.a, color: k(n) })));
}, re = function(t) {
  var n = t.className, o = t.colorModel, a = t.color, l = void 0 === a ? o.defaultColor : a, i2 = t.onChange, s2 = c(t, ["className", "colorModel", "color", "onChange"]), f2 = reactExports.useRef(null);
  Q(f2);
  var v2 = Y(o, l, i2), d2 = v2[0], h2 = v2[1], m2 = g(["react-colorful", n]);
  return React.createElement("div", u({}, s2, { ref: f2, className: m2 }), React.createElement(T, { hsva: d2, onChange: h2 }), React.createElement(S, { hue: d2.h, onChange: h2 }), React.createElement(ee, { hsva: d2, onChange: h2, className: "react-colorful__last-control" }));
}, le = { defaultColor: "hsla(0, 0%, 0%, 1)", toHsva: H, fromHsva: k, equal: P }, ue = function(r) {
  return React.createElement(re, u({}, r, { colorModel: le }));
}, Ee = { defaultColor: "rgba(0, 0, 0, 1)", toHsva: z, fromHsva: function(e) {
  var r = I(e);
  return "rgba(" + r.r + ", " + r.g + ", " + r.b + ", " + r.a + ")";
}, equal: P }, He = function(r) {
  return React.createElement(re, u({}, r, { colorModel: Ee }));
};
var colorName = {
  "aliceblue": [240, 248, 255],
  "antiquewhite": [250, 235, 215],
  "aqua": [0, 255, 255],
  "aquamarine": [127, 255, 212],
  "azure": [240, 255, 255],
  "beige": [245, 245, 220],
  "bisque": [255, 228, 196],
  "black": [0, 0, 0],
  "blanchedalmond": [255, 235, 205],
  "blue": [0, 0, 255],
  "blueviolet": [138, 43, 226],
  "brown": [165, 42, 42],
  "burlywood": [222, 184, 135],
  "cadetblue": [95, 158, 160],
  "chartreuse": [127, 255, 0],
  "chocolate": [210, 105, 30],
  "coral": [255, 127, 80],
  "cornflowerblue": [100, 149, 237],
  "cornsilk": [255, 248, 220],
  "crimson": [220, 20, 60],
  "cyan": [0, 255, 255],
  "darkblue": [0, 0, 139],
  "darkcyan": [0, 139, 139],
  "darkgoldenrod": [184, 134, 11],
  "darkgray": [169, 169, 169],
  "darkgreen": [0, 100, 0],
  "darkgrey": [169, 169, 169],
  "darkkhaki": [189, 183, 107],
  "darkmagenta": [139, 0, 139],
  "darkolivegreen": [85, 107, 47],
  "darkorange": [255, 140, 0],
  "darkorchid": [153, 50, 204],
  "darkred": [139, 0, 0],
  "darksalmon": [233, 150, 122],
  "darkseagreen": [143, 188, 143],
  "darkslateblue": [72, 61, 139],
  "darkslategray": [47, 79, 79],
  "darkslategrey": [47, 79, 79],
  "darkturquoise": [0, 206, 209],
  "darkviolet": [148, 0, 211],
  "deeppink": [255, 20, 147],
  "deepskyblue": [0, 191, 255],
  "dimgray": [105, 105, 105],
  "dimgrey": [105, 105, 105],
  "dodgerblue": [30, 144, 255],
  "firebrick": [178, 34, 34],
  "floralwhite": [255, 250, 240],
  "forestgreen": [34, 139, 34],
  "fuchsia": [255, 0, 255],
  "gainsboro": [220, 220, 220],
  "ghostwhite": [248, 248, 255],
  "gold": [255, 215, 0],
  "goldenrod": [218, 165, 32],
  "gray": [128, 128, 128],
  "green": [0, 128, 0],
  "greenyellow": [173, 255, 47],
  "grey": [128, 128, 128],
  "honeydew": [240, 255, 240],
  "hotpink": [255, 105, 180],
  "indianred": [205, 92, 92],
  "indigo": [75, 0, 130],
  "ivory": [255, 255, 240],
  "khaki": [240, 230, 140],
  "lavender": [230, 230, 250],
  "lavenderblush": [255, 240, 245],
  "lawngreen": [124, 252, 0],
  "lemonchiffon": [255, 250, 205],
  "lightblue": [173, 216, 230],
  "lightcoral": [240, 128, 128],
  "lightcyan": [224, 255, 255],
  "lightgoldenrodyellow": [250, 250, 210],
  "lightgray": [211, 211, 211],
  "lightgreen": [144, 238, 144],
  "lightgrey": [211, 211, 211],
  "lightpink": [255, 182, 193],
  "lightsalmon": [255, 160, 122],
  "lightseagreen": [32, 178, 170],
  "lightskyblue": [135, 206, 250],
  "lightslategray": [119, 136, 153],
  "lightslategrey": [119, 136, 153],
  "lightsteelblue": [176, 196, 222],
  "lightyellow": [255, 255, 224],
  "lime": [0, 255, 0],
  "limegreen": [50, 205, 50],
  "linen": [250, 240, 230],
  "magenta": [255, 0, 255],
  "maroon": [128, 0, 0],
  "mediumaquamarine": [102, 205, 170],
  "mediumblue": [0, 0, 205],
  "mediumorchid": [186, 85, 211],
  "mediumpurple": [147, 112, 219],
  "mediumseagreen": [60, 179, 113],
  "mediumslateblue": [123, 104, 238],
  "mediumspringgreen": [0, 250, 154],
  "mediumturquoise": [72, 209, 204],
  "mediumvioletred": [199, 21, 133],
  "midnightblue": [25, 25, 112],
  "mintcream": [245, 255, 250],
  "mistyrose": [255, 228, 225],
  "moccasin": [255, 228, 181],
  "navajowhite": [255, 222, 173],
  "navy": [0, 0, 128],
  "oldlace": [253, 245, 230],
  "olive": [128, 128, 0],
  "olivedrab": [107, 142, 35],
  "orange": [255, 165, 0],
  "orangered": [255, 69, 0],
  "orchid": [218, 112, 214],
  "palegoldenrod": [238, 232, 170],
  "palegreen": [152, 251, 152],
  "paleturquoise": [175, 238, 238],
  "palevioletred": [219, 112, 147],
  "papayawhip": [255, 239, 213],
  "peachpuff": [255, 218, 185],
  "peru": [205, 133, 63],
  "pink": [255, 192, 203],
  "plum": [221, 160, 221],
  "powderblue": [176, 224, 230],
  "purple": [128, 0, 128],
  "rebeccapurple": [102, 51, 153],
  "red": [255, 0, 0],
  "rosybrown": [188, 143, 143],
  "royalblue": [65, 105, 225],
  "saddlebrown": [139, 69, 19],
  "salmon": [250, 128, 114],
  "sandybrown": [244, 164, 96],
  "seagreen": [46, 139, 87],
  "seashell": [255, 245, 238],
  "sienna": [160, 82, 45],
  "silver": [192, 192, 192],
  "skyblue": [135, 206, 235],
  "slateblue": [106, 90, 205],
  "slategray": [112, 128, 144],
  "slategrey": [112, 128, 144],
  "snow": [255, 250, 250],
  "springgreen": [0, 255, 127],
  "steelblue": [70, 130, 180],
  "tan": [210, 180, 140],
  "teal": [0, 128, 128],
  "thistle": [216, 191, 216],
  "tomato": [255, 99, 71],
  "turquoise": [64, 224, 208],
  "violet": [238, 130, 238],
  "wheat": [245, 222, 179],
  "white": [255, 255, 255],
  "whitesmoke": [245, 245, 245],
  "yellow": [255, 255, 0],
  "yellowgreen": [154, 205, 50]
};
const cssKeywords = colorName;
const reverseKeywords = {};
for (const key of Object.keys(cssKeywords)) {
  reverseKeywords[cssKeywords[key]] = key;
}
const convert$2 = {
  rgb: { channels: 3, labels: "rgb" },
  hsl: { channels: 3, labels: "hsl" },
  hsv: { channels: 3, labels: "hsv" },
  hwb: { channels: 3, labels: "hwb" },
  cmyk: { channels: 4, labels: "cmyk" },
  xyz: { channels: 3, labels: "xyz" },
  lab: { channels: 3, labels: "lab" },
  lch: { channels: 3, labels: "lch" },
  hex: { channels: 1, labels: ["hex"] },
  keyword: { channels: 1, labels: ["keyword"] },
  ansi16: { channels: 1, labels: ["ansi16"] },
  ansi256: { channels: 1, labels: ["ansi256"] },
  hcg: { channels: 3, labels: ["h", "c", "g"] },
  apple: { channels: 3, labels: ["r16", "g16", "b16"] },
  gray: { channels: 1, labels: ["gray"] }
};
var conversions$2 = convert$2;
for (const model of Object.keys(convert$2)) {
  if (!("channels" in convert$2[model])) {
    throw new Error("missing channels property: " + model);
  }
  if (!("labels" in convert$2[model])) {
    throw new Error("missing channel labels property: " + model);
  }
  if (convert$2[model].labels.length !== convert$2[model].channels) {
    throw new Error("channel and label counts mismatch: " + model);
  }
  const { channels, labels } = convert$2[model];
  delete convert$2[model].channels;
  delete convert$2[model].labels;
  Object.defineProperty(convert$2[model], "channels", { value: channels });
  Object.defineProperty(convert$2[model], "labels", { value: labels });
}
convert$2.rgb.hsl = function(rgb) {
  const r = rgb[0] / 255;
  const g2 = rgb[1] / 255;
  const b2 = rgb[2] / 255;
  const min = Math.min(r, g2, b2);
  const max = Math.max(r, g2, b2);
  const delta = max - min;
  let h2;
  let s2;
  if (max === min) {
    h2 = 0;
  } else if (r === max) {
    h2 = (g2 - b2) / delta;
  } else if (g2 === max) {
    h2 = 2 + (b2 - r) / delta;
  } else if (b2 === max) {
    h2 = 4 + (r - g2) / delta;
  }
  h2 = Math.min(h2 * 60, 360);
  if (h2 < 0) {
    h2 += 360;
  }
  const l = (min + max) / 2;
  if (max === min) {
    s2 = 0;
  } else if (l <= 0.5) {
    s2 = delta / (max + min);
  } else {
    s2 = delta / (2 - max - min);
  }
  return [h2, s2 * 100, l * 100];
};
convert$2.rgb.hsv = function(rgb) {
  let rdif;
  let gdif;
  let bdif;
  let h2;
  let s2;
  const r = rgb[0] / 255;
  const g2 = rgb[1] / 255;
  const b2 = rgb[2] / 255;
  const v2 = Math.max(r, g2, b2);
  const diff = v2 - Math.min(r, g2, b2);
  const diffc = function(c2) {
    return (v2 - c2) / 6 / diff + 1 / 2;
  };
  if (diff === 0) {
    h2 = 0;
    s2 = 0;
  } else {
    s2 = diff / v2;
    rdif = diffc(r);
    gdif = diffc(g2);
    bdif = diffc(b2);
    if (r === v2) {
      h2 = bdif - gdif;
    } else if (g2 === v2) {
      h2 = 1 / 3 + rdif - bdif;
    } else if (b2 === v2) {
      h2 = 2 / 3 + gdif - rdif;
    }
    if (h2 < 0) {
      h2 += 1;
    } else if (h2 > 1) {
      h2 -= 1;
    }
  }
  return [
    h2 * 360,
    s2 * 100,
    v2 * 100
  ];
};
convert$2.rgb.hwb = function(rgb) {
  const r = rgb[0];
  const g2 = rgb[1];
  let b2 = rgb[2];
  const h2 = convert$2.rgb.hsl(rgb)[0];
  const w2 = 1 / 255 * Math.min(r, Math.min(g2, b2));
  b2 = 1 - 1 / 255 * Math.max(r, Math.max(g2, b2));
  return [h2, w2 * 100, b2 * 100];
};
convert$2.rgb.cmyk = function(rgb) {
  const r = rgb[0] / 255;
  const g2 = rgb[1] / 255;
  const b2 = rgb[2] / 255;
  const k2 = Math.min(1 - r, 1 - g2, 1 - b2);
  const c2 = (1 - r - k2) / (1 - k2) || 0;
  const m2 = (1 - g2 - k2) / (1 - k2) || 0;
  const y2 = (1 - b2 - k2) / (1 - k2) || 0;
  return [c2 * 100, m2 * 100, y2 * 100, k2 * 100];
};
function comparativeDistance(x2, y2) {
  return (x2[0] - y2[0]) ** 2 + (x2[1] - y2[1]) ** 2 + (x2[2] - y2[2]) ** 2;
}
convert$2.rgb.keyword = function(rgb) {
  const reversed = reverseKeywords[rgb];
  if (reversed) {
    return reversed;
  }
  let currentClosestDistance = Infinity;
  let currentClosestKeyword;
  for (const keyword of Object.keys(cssKeywords)) {
    const value = cssKeywords[keyword];
    const distance = comparativeDistance(rgb, value);
    if (distance < currentClosestDistance) {
      currentClosestDistance = distance;
      currentClosestKeyword = keyword;
    }
  }
  return currentClosestKeyword;
};
convert$2.keyword.rgb = function(keyword) {
  return cssKeywords[keyword];
};
convert$2.rgb.xyz = function(rgb) {
  let r = rgb[0] / 255;
  let g2 = rgb[1] / 255;
  let b2 = rgb[2] / 255;
  r = r > 0.04045 ? ((r + 0.055) / 1.055) ** 2.4 : r / 12.92;
  g2 = g2 > 0.04045 ? ((g2 + 0.055) / 1.055) ** 2.4 : g2 / 12.92;
  b2 = b2 > 0.04045 ? ((b2 + 0.055) / 1.055) ** 2.4 : b2 / 12.92;
  const x2 = r * 0.4124 + g2 * 0.3576 + b2 * 0.1805;
  const y2 = r * 0.2126 + g2 * 0.7152 + b2 * 0.0722;
  const z2 = r * 0.0193 + g2 * 0.1192 + b2 * 0.9505;
  return [x2 * 100, y2 * 100, z2 * 100];
};
convert$2.rgb.lab = function(rgb) {
  const xyz = convert$2.rgb.xyz(rgb);
  let x2 = xyz[0];
  let y2 = xyz[1];
  let z2 = xyz[2];
  x2 /= 95.047;
  y2 /= 100;
  z2 /= 108.883;
  x2 = x2 > 8856e-6 ? x2 ** (1 / 3) : 7.787 * x2 + 16 / 116;
  y2 = y2 > 8856e-6 ? y2 ** (1 / 3) : 7.787 * y2 + 16 / 116;
  z2 = z2 > 8856e-6 ? z2 ** (1 / 3) : 7.787 * z2 + 16 / 116;
  const l = 116 * y2 - 16;
  const a = 500 * (x2 - y2);
  const b2 = 200 * (y2 - z2);
  return [l, a, b2];
};
convert$2.hsl.rgb = function(hsl) {
  const h2 = hsl[0] / 360;
  const s2 = hsl[1] / 100;
  const l = hsl[2] / 100;
  let t2;
  let t3;
  let val;
  if (s2 === 0) {
    val = l * 255;
    return [val, val, val];
  }
  if (l < 0.5) {
    t2 = l * (1 + s2);
  } else {
    t2 = l + s2 - l * s2;
  }
  const t1 = 2 * l - t2;
  const rgb = [0, 0, 0];
  for (let i2 = 0; i2 < 3; i2++) {
    t3 = h2 + 1 / 3 * -(i2 - 1);
    if (t3 < 0) {
      t3++;
    }
    if (t3 > 1) {
      t3--;
    }
    if (6 * t3 < 1) {
      val = t1 + (t2 - t1) * 6 * t3;
    } else if (2 * t3 < 1) {
      val = t2;
    } else if (3 * t3 < 2) {
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    } else {
      val = t1;
    }
    rgb[i2] = val * 255;
  }
  return rgb;
};
convert$2.hsl.hsv = function(hsl) {
  const h2 = hsl[0];
  let s2 = hsl[1] / 100;
  let l = hsl[2] / 100;
  let smin = s2;
  const lmin = Math.max(l, 0.01);
  l *= 2;
  s2 *= l <= 1 ? l : 2 - l;
  smin *= lmin <= 1 ? lmin : 2 - lmin;
  const v2 = (l + s2) / 2;
  const sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s2 / (l + s2);
  return [h2, sv * 100, v2 * 100];
};
convert$2.hsv.rgb = function(hsv) {
  const h2 = hsv[0] / 60;
  const s2 = hsv[1] / 100;
  let v2 = hsv[2] / 100;
  const hi = Math.floor(h2) % 6;
  const f2 = h2 - Math.floor(h2);
  const p2 = 255 * v2 * (1 - s2);
  const q2 = 255 * v2 * (1 - s2 * f2);
  const t = 255 * v2 * (1 - s2 * (1 - f2));
  v2 *= 255;
  switch (hi) {
    case 0:
      return [v2, t, p2];
    case 1:
      return [q2, v2, p2];
    case 2:
      return [p2, v2, t];
    case 3:
      return [p2, q2, v2];
    case 4:
      return [t, p2, v2];
    case 5:
      return [v2, p2, q2];
  }
};
convert$2.hsv.hsl = function(hsv) {
  const h2 = hsv[0];
  const s2 = hsv[1] / 100;
  const v2 = hsv[2] / 100;
  const vmin = Math.max(v2, 0.01);
  let sl;
  let l;
  l = (2 - s2) * v2;
  const lmin = (2 - s2) * vmin;
  sl = s2 * vmin;
  sl /= lmin <= 1 ? lmin : 2 - lmin;
  sl = sl || 0;
  l /= 2;
  return [h2, sl * 100, l * 100];
};
convert$2.hwb.rgb = function(hwb) {
  const h2 = hwb[0] / 360;
  let wh = hwb[1] / 100;
  let bl = hwb[2] / 100;
  const ratio = wh + bl;
  let f2;
  if (ratio > 1) {
    wh /= ratio;
    bl /= ratio;
  }
  const i2 = Math.floor(6 * h2);
  const v2 = 1 - bl;
  f2 = 6 * h2 - i2;
  if ((i2 & 1) !== 0) {
    f2 = 1 - f2;
  }
  const n = wh + f2 * (v2 - wh);
  let r;
  let g2;
  let b2;
  switch (i2) {
    default:
    case 6:
    case 0:
      r = v2;
      g2 = n;
      b2 = wh;
      break;
    case 1:
      r = n;
      g2 = v2;
      b2 = wh;
      break;
    case 2:
      r = wh;
      g2 = v2;
      b2 = n;
      break;
    case 3:
      r = wh;
      g2 = n;
      b2 = v2;
      break;
    case 4:
      r = n;
      g2 = wh;
      b2 = v2;
      break;
    case 5:
      r = v2;
      g2 = wh;
      b2 = n;
      break;
  }
  return [r * 255, g2 * 255, b2 * 255];
};
convert$2.cmyk.rgb = function(cmyk) {
  const c2 = cmyk[0] / 100;
  const m2 = cmyk[1] / 100;
  const y2 = cmyk[2] / 100;
  const k2 = cmyk[3] / 100;
  const r = 1 - Math.min(1, c2 * (1 - k2) + k2);
  const g2 = 1 - Math.min(1, m2 * (1 - k2) + k2);
  const b2 = 1 - Math.min(1, y2 * (1 - k2) + k2);
  return [r * 255, g2 * 255, b2 * 255];
};
convert$2.xyz.rgb = function(xyz) {
  const x2 = xyz[0] / 100;
  const y2 = xyz[1] / 100;
  const z2 = xyz[2] / 100;
  let r;
  let g2;
  let b2;
  r = x2 * 3.2406 + y2 * -1.5372 + z2 * -0.4986;
  g2 = x2 * -0.9689 + y2 * 1.8758 + z2 * 0.0415;
  b2 = x2 * 0.0557 + y2 * -0.204 + z2 * 1.057;
  r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92;
  g2 = g2 > 31308e-7 ? 1.055 * g2 ** (1 / 2.4) - 0.055 : g2 * 12.92;
  b2 = b2 > 31308e-7 ? 1.055 * b2 ** (1 / 2.4) - 0.055 : b2 * 12.92;
  r = Math.min(Math.max(0, r), 1);
  g2 = Math.min(Math.max(0, g2), 1);
  b2 = Math.min(Math.max(0, b2), 1);
  return [r * 255, g2 * 255, b2 * 255];
};
convert$2.xyz.lab = function(xyz) {
  let x2 = xyz[0];
  let y2 = xyz[1];
  let z2 = xyz[2];
  x2 /= 95.047;
  y2 /= 100;
  z2 /= 108.883;
  x2 = x2 > 8856e-6 ? x2 ** (1 / 3) : 7.787 * x2 + 16 / 116;
  y2 = y2 > 8856e-6 ? y2 ** (1 / 3) : 7.787 * y2 + 16 / 116;
  z2 = z2 > 8856e-6 ? z2 ** (1 / 3) : 7.787 * z2 + 16 / 116;
  const l = 116 * y2 - 16;
  const a = 500 * (x2 - y2);
  const b2 = 200 * (y2 - z2);
  return [l, a, b2];
};
convert$2.lab.xyz = function(lab) {
  const l = lab[0];
  const a = lab[1];
  const b2 = lab[2];
  let x2;
  let y2;
  let z2;
  y2 = (l + 16) / 116;
  x2 = a / 500 + y2;
  z2 = y2 - b2 / 200;
  const y22 = y2 ** 3;
  const x22 = x2 ** 3;
  const z22 = z2 ** 3;
  y2 = y22 > 8856e-6 ? y22 : (y2 - 16 / 116) / 7.787;
  x2 = x22 > 8856e-6 ? x22 : (x2 - 16 / 116) / 7.787;
  z2 = z22 > 8856e-6 ? z22 : (z2 - 16 / 116) / 7.787;
  x2 *= 95.047;
  y2 *= 100;
  z2 *= 108.883;
  return [x2, y2, z2];
};
convert$2.lab.lch = function(lab) {
  const l = lab[0];
  const a = lab[1];
  const b2 = lab[2];
  let h2;
  const hr = Math.atan2(b2, a);
  h2 = hr * 360 / 2 / Math.PI;
  if (h2 < 0) {
    h2 += 360;
  }
  const c2 = Math.sqrt(a * a + b2 * b2);
  return [l, c2, h2];
};
convert$2.lch.lab = function(lch) {
  const l = lch[0];
  const c2 = lch[1];
  const h2 = lch[2];
  const hr = h2 / 360 * 2 * Math.PI;
  const a = c2 * Math.cos(hr);
  const b2 = c2 * Math.sin(hr);
  return [l, a, b2];
};
convert$2.rgb.ansi16 = function(args, saturation = null) {
  const [r, g2, b2] = args;
  let value = saturation === null ? convert$2.rgb.hsv(args)[2] : saturation;
  value = Math.round(value / 50);
  if (value === 0) {
    return 30;
  }
  let ansi = 30 + (Math.round(b2 / 255) << 2 | Math.round(g2 / 255) << 1 | Math.round(r / 255));
  if (value === 2) {
    ansi += 60;
  }
  return ansi;
};
convert$2.hsv.ansi16 = function(args) {
  return convert$2.rgb.ansi16(convert$2.hsv.rgb(args), args[2]);
};
convert$2.rgb.ansi256 = function(args) {
  const r = args[0];
  const g2 = args[1];
  const b2 = args[2];
  if (r === g2 && g2 === b2) {
    if (r < 8) {
      return 16;
    }
    if (r > 248) {
      return 231;
    }
    return Math.round((r - 8) / 247 * 24) + 232;
  }
  const ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g2 / 255 * 5) + Math.round(b2 / 255 * 5);
  return ansi;
};
convert$2.ansi16.rgb = function(args) {
  let color = args % 10;
  if (color === 0 || color === 7) {
    if (args > 50) {
      color += 3.5;
    }
    color = color / 10.5 * 255;
    return [color, color, color];
  }
  const mult = (~~(args > 50) + 1) * 0.5;
  const r = (color & 1) * mult * 255;
  const g2 = (color >> 1 & 1) * mult * 255;
  const b2 = (color >> 2 & 1) * mult * 255;
  return [r, g2, b2];
};
convert$2.ansi256.rgb = function(args) {
  if (args >= 232) {
    const c2 = (args - 232) * 10 + 8;
    return [c2, c2, c2];
  }
  args -= 16;
  let rem;
  const r = Math.floor(args / 36) / 5 * 255;
  const g2 = Math.floor((rem = args % 36) / 6) / 5 * 255;
  const b2 = rem % 6 / 5 * 255;
  return [r, g2, b2];
};
convert$2.rgb.hex = function(args) {
  const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
  const string = integer.toString(16).toUpperCase();
  return "000000".substring(string.length) + string;
};
convert$2.hex.rgb = function(args) {
  const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!match) {
    return [0, 0, 0];
  }
  let colorString = match[0];
  if (match[0].length === 3) {
    colorString = colorString.split("").map((char) => {
      return char + char;
    }).join("");
  }
  const integer = parseInt(colorString, 16);
  const r = integer >> 16 & 255;
  const g2 = integer >> 8 & 255;
  const b2 = integer & 255;
  return [r, g2, b2];
};
convert$2.rgb.hcg = function(rgb) {
  const r = rgb[0] / 255;
  const g2 = rgb[1] / 255;
  const b2 = rgb[2] / 255;
  const max = Math.max(Math.max(r, g2), b2);
  const min = Math.min(Math.min(r, g2), b2);
  const chroma = max - min;
  let grayscale;
  let hue;
  if (chroma < 1) {
    grayscale = min / (1 - chroma);
  } else {
    grayscale = 0;
  }
  if (chroma <= 0) {
    hue = 0;
  } else if (max === r) {
    hue = (g2 - b2) / chroma % 6;
  } else if (max === g2) {
    hue = 2 + (b2 - r) / chroma;
  } else {
    hue = 4 + (r - g2) / chroma;
  }
  hue /= 6;
  hue %= 1;
  return [hue * 360, chroma * 100, grayscale * 100];
};
convert$2.hsl.hcg = function(hsl) {
  const s2 = hsl[1] / 100;
  const l = hsl[2] / 100;
  const c2 = l < 0.5 ? 2 * s2 * l : 2 * s2 * (1 - l);
  let f2 = 0;
  if (c2 < 1) {
    f2 = (l - 0.5 * c2) / (1 - c2);
  }
  return [hsl[0], c2 * 100, f2 * 100];
};
convert$2.hsv.hcg = function(hsv) {
  const s2 = hsv[1] / 100;
  const v2 = hsv[2] / 100;
  const c2 = s2 * v2;
  let f2 = 0;
  if (c2 < 1) {
    f2 = (v2 - c2) / (1 - c2);
  }
  return [hsv[0], c2 * 100, f2 * 100];
};
convert$2.hcg.rgb = function(hcg) {
  const h2 = hcg[0] / 360;
  const c2 = hcg[1] / 100;
  const g2 = hcg[2] / 100;
  if (c2 === 0) {
    return [g2 * 255, g2 * 255, g2 * 255];
  }
  const pure = [0, 0, 0];
  const hi = h2 % 1 * 6;
  const v2 = hi % 1;
  const w2 = 1 - v2;
  let mg = 0;
  switch (Math.floor(hi)) {
    case 0:
      pure[0] = 1;
      pure[1] = v2;
      pure[2] = 0;
      break;
    case 1:
      pure[0] = w2;
      pure[1] = 1;
      pure[2] = 0;
      break;
    case 2:
      pure[0] = 0;
      pure[1] = 1;
      pure[2] = v2;
      break;
    case 3:
      pure[0] = 0;
      pure[1] = w2;
      pure[2] = 1;
      break;
    case 4:
      pure[0] = v2;
      pure[1] = 0;
      pure[2] = 1;
      break;
    default:
      pure[0] = 1;
      pure[1] = 0;
      pure[2] = w2;
  }
  mg = (1 - c2) * g2;
  return [
    (c2 * pure[0] + mg) * 255,
    (c2 * pure[1] + mg) * 255,
    (c2 * pure[2] + mg) * 255
  ];
};
convert$2.hcg.hsv = function(hcg) {
  const c2 = hcg[1] / 100;
  const g2 = hcg[2] / 100;
  const v2 = c2 + g2 * (1 - c2);
  let f2 = 0;
  if (v2 > 0) {
    f2 = c2 / v2;
  }
  return [hcg[0], f2 * 100, v2 * 100];
};
convert$2.hcg.hsl = function(hcg) {
  const c2 = hcg[1] / 100;
  const g2 = hcg[2] / 100;
  const l = g2 * (1 - c2) + 0.5 * c2;
  let s2 = 0;
  if (l > 0 && l < 0.5) {
    s2 = c2 / (2 * l);
  } else if (l >= 0.5 && l < 1) {
    s2 = c2 / (2 * (1 - l));
  }
  return [hcg[0], s2 * 100, l * 100];
};
convert$2.hcg.hwb = function(hcg) {
  const c2 = hcg[1] / 100;
  const g2 = hcg[2] / 100;
  const v2 = c2 + g2 * (1 - c2);
  return [hcg[0], (v2 - c2) * 100, (1 - v2) * 100];
};
convert$2.hwb.hcg = function(hwb) {
  const w2 = hwb[1] / 100;
  const b2 = hwb[2] / 100;
  const v2 = 1 - b2;
  const c2 = v2 - w2;
  let g2 = 0;
  if (c2 < 1) {
    g2 = (v2 - c2) / (1 - c2);
  }
  return [hwb[0], c2 * 100, g2 * 100];
};
convert$2.apple.rgb = function(apple) {
  return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
};
convert$2.rgb.apple = function(rgb) {
  return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
};
convert$2.gray.rgb = function(args) {
  return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};
convert$2.gray.hsl = function(args) {
  return [0, 0, args[0]];
};
convert$2.gray.hsv = convert$2.gray.hsl;
convert$2.gray.hwb = function(gray) {
  return [0, 100, gray[0]];
};
convert$2.gray.cmyk = function(gray) {
  return [0, 0, 0, gray[0]];
};
convert$2.gray.lab = function(gray) {
  return [gray[0], 0, 0];
};
convert$2.gray.hex = function(gray) {
  const val = Math.round(gray[0] / 100 * 255) & 255;
  const integer = (val << 16) + (val << 8) + val;
  const string = integer.toString(16).toUpperCase();
  return "000000".substring(string.length) + string;
};
convert$2.rgb.gray = function(rgb) {
  const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
  return [val / 255 * 100];
};
const conversions$1 = conversions$2;
function buildGraph() {
  const graph = {};
  const models2 = Object.keys(conversions$1);
  for (let len = models2.length, i2 = 0; i2 < len; i2++) {
    graph[models2[i2]] = {
      // http://jsperf.com/1-vs-infinity
      // micro-opt, but this is simple.
      distance: -1,
      parent: null
    };
  }
  return graph;
}
function deriveBFS(fromModel) {
  const graph = buildGraph();
  const queue = [fromModel];
  graph[fromModel].distance = 0;
  while (queue.length) {
    const current = queue.pop();
    const adjacents = Object.keys(conversions$1[current]);
    for (let len = adjacents.length, i2 = 0; i2 < len; i2++) {
      const adjacent = adjacents[i2];
      const node = graph[adjacent];
      if (node.distance === -1) {
        node.distance = graph[current].distance + 1;
        node.parent = current;
        queue.unshift(adjacent);
      }
    }
  }
  return graph;
}
function link(from, to) {
  return function(args) {
    return to(from(args));
  };
}
function wrapConversion(toModel, graph) {
  const path = [graph[toModel].parent, toModel];
  let fn = conversions$1[graph[toModel].parent][toModel];
  let cur = graph[toModel].parent;
  while (graph[cur].parent) {
    path.unshift(graph[cur].parent);
    fn = link(conversions$1[graph[cur].parent][cur], fn);
    cur = graph[cur].parent;
  }
  fn.conversion = path;
  return fn;
}
var route$1 = function(fromModel) {
  const graph = deriveBFS(fromModel);
  const conversion = {};
  const models2 = Object.keys(graph);
  for (let len = models2.length, i2 = 0; i2 < len; i2++) {
    const toModel = models2[i2];
    const node = graph[toModel];
    if (node.parent === null) {
      continue;
    }
    conversion[toModel] = wrapConversion(toModel, graph);
  }
  return conversion;
};
const conversions = conversions$2;
const route = route$1;
const convert = {};
const models = Object.keys(conversions);
function wrapRaw(fn) {
  const wrappedFn = function(...args) {
    const arg0 = args[0];
    if (arg0 === void 0 || arg0 === null) {
      return arg0;
    }
    if (arg0.length > 1) {
      args = arg0;
    }
    return fn(args);
  };
  if ("conversion" in fn) {
    wrappedFn.conversion = fn.conversion;
  }
  return wrappedFn;
}
function wrapRounded(fn) {
  const wrappedFn = function(...args) {
    const arg0 = args[0];
    if (arg0 === void 0 || arg0 === null) {
      return arg0;
    }
    if (arg0.length > 1) {
      args = arg0;
    }
    const result = fn(args);
    if (typeof result === "object") {
      for (let len = result.length, i2 = 0; i2 < len; i2++) {
        result[i2] = Math.round(result[i2]);
      }
    }
    return result;
  };
  if ("conversion" in fn) {
    wrappedFn.conversion = fn.conversion;
  }
  return wrappedFn;
}
models.forEach((fromModel) => {
  convert[fromModel] = {};
  Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
  Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
  const routes = route(fromModel);
  const routeModels = Object.keys(routes);
  routeModels.forEach((toModel) => {
    const fn = routes[toModel];
    convert[fromModel][toModel] = wrapRounded(fn);
    convert[fromModel][toModel].raw = wrapRaw(fn);
  });
});
var colorConvert = convert;
const convert$1 = /* @__PURE__ */ getDefaultExportFromCjs(colorConvert);
var root = _root;
var now$1 = function() {
  return root.Date.now();
};
var now_1 = now$1;
var reWhitespace = /\s/;
function trimmedEndIndex$1(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var _trimmedEndIndex = trimmedEndIndex$1;
var trimmedEndIndex = _trimmedEndIndex;
var reTrimStart = /^\s+/;
function baseTrim$1(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
var _baseTrim = baseTrim$1;
var baseTrim = _baseTrim, isObject$2 = isObject_1, isSymbol = isSymbol_1;
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber$1(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$2(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$2(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_1 = toNumber$1;
var isObject$1 = isObject_1, now = now_1, toNumber = toNumber_1;
var FUNC_ERROR_TEXT$1 = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce$1(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject$1(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
var debounce_1 = debounce$1;
var debounce = debounce_1, isObject = isObject_1;
var FUNC_ERROR_TEXT = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
var throttle_1 = throttle;
const throttle$1 = /* @__PURE__ */ getDefaultExportFromCjs(throttle_1);
var Wrapper = newStyled.div({ position: "relative", maxWidth: 250 }), PickerTooltip = newStyled(WithTooltip)({ position: "absolute", zIndex: 1, top: 4, left: 4 }), TooltipContent = newStyled.div({ width: 200, margin: 5, ".react-colorful__saturation": { borderRadius: "4px 4px 0 0" }, ".react-colorful__hue": { boxShadow: "inset 0 0 0 1px rgb(0 0 0 / 5%)" }, ".react-colorful__last-control": { borderRadius: "0 0 4px 4px" } }), Note = newStyled(TooltipNote)(({ theme }) => ({ fontFamily: theme.typography.fonts.base })), Swatches = newStyled.div({ display: "grid", gridTemplateColumns: "repeat(9, 16px)", gap: 6, padding: 3, marginTop: 5, width: 200 }), SwatchColor = newStyled.div(({ theme, active }) => ({ width: 16, height: 16, boxShadow: active ? `${theme.appBorderColor} 0 0 0 1px inset, ${theme.textMutedColor}50 0 0 0 4px` : `${theme.appBorderColor} 0 0 0 1px inset`, borderRadius: theme.appBorderRadius })), swatchBackground = `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`, Swatch = ({ value, active, onClick, style, ...props }) => {
  let backgroundImage = `linear-gradient(${value}, ${value}), ${swatchBackground}, linear-gradient(#fff, #fff)`;
  return React.createElement(SwatchColor, { ...props, active, onClick, style: { ...style, backgroundImage } });
}, Input = newStyled(Form.Input)(({ theme }) => ({ width: "100%", paddingLeft: 30, paddingRight: 30, boxSizing: "border-box", fontFamily: theme.typography.fonts.base })), ToggleIcon = newStyled(MarkupIcon)(({ theme }) => ({ position: "absolute", zIndex: 1, top: 6, right: 7, width: 20, height: 20, padding: 4, boxSizing: "border-box", cursor: "pointer", color: theme.input.color })), ColorSpace = ((ColorSpace2) => (ColorSpace2.RGB = "rgb", ColorSpace2.HSL = "hsl", ColorSpace2.HEX = "hex", ColorSpace2))(ColorSpace || {}), COLOR_SPACES = Object.values(ColorSpace), COLOR_REGEXP = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/, RGB_REGEXP = /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i, HSL_REGEXP = /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i, HEX_REGEXP = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i, SHORTHEX_REGEXP = /^\s*#?([0-9a-f]{3})\s*$/i, ColorPicker = { hex: Z, rgb: He, hsl: ue }, fallbackColor = { hex: "transparent", rgb: "rgba(0, 0, 0, 0)", hsl: "hsla(0, 0%, 0%, 0)" }, stringToArgs = (value) => {
  let match = value == null ? void 0 : value.match(COLOR_REGEXP);
  if (!match)
    return [0, 0, 0, 1];
  let [, x2, y2, z2, a = 1] = match;
  return [x2, y2, z2, a].map(Number);
}, parseValue = (value) => {
  if (!value)
    return;
  let valid = true;
  if (RGB_REGEXP.test(value)) {
    let [r, g2, b2, a] = stringToArgs(value), [h2, s2, l] = convert$1.rgb.hsl([r, g2, b2]) || [0, 0, 0];
    return { valid, value, keyword: convert$1.rgb.keyword([r, g2, b2]), colorSpace: "rgb", rgb: value, hsl: `hsla(${h2}, ${s2}%, ${l}%, ${a})`, hex: `#${convert$1.rgb.hex([r, g2, b2]).toLowerCase()}` };
  }
  if (HSL_REGEXP.test(value)) {
    let [h2, s2, l, a] = stringToArgs(value), [r, g2, b2] = convert$1.hsl.rgb([h2, s2, l]) || [0, 0, 0];
    return { valid, value, keyword: convert$1.hsl.keyword([h2, s2, l]), colorSpace: "hsl", rgb: `rgba(${r}, ${g2}, ${b2}, ${a})`, hsl: value, hex: `#${convert$1.hsl.hex([h2, s2, l]).toLowerCase()}` };
  }
  let plain = value.replace("#", ""), rgb = convert$1.keyword.rgb(plain) || convert$1.hex.rgb(plain), hsl = convert$1.rgb.hsl(rgb), mapped = value;
  if (/[^#a-f0-9]/i.test(value) ? mapped = plain : HEX_REGEXP.test(value) && (mapped = `#${plain}`), mapped.startsWith("#"))
    valid = HEX_REGEXP.test(mapped);
  else
    try {
      convert$1.keyword.hex(mapped);
    } catch {
      valid = false;
    }
  return { valid, value: mapped, keyword: convert$1.rgb.keyword(rgb), colorSpace: "hex", rgb: `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1)`, hsl: `hsla(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%, 1)`, hex: mapped };
}, getRealValue = (value, color, colorSpace) => {
  if (!value || !(color == null ? void 0 : color.valid))
    return fallbackColor[colorSpace];
  if (colorSpace !== "hex")
    return (color == null ? void 0 : color[colorSpace]) || fallbackColor[colorSpace];
  if (!color.hex.startsWith("#"))
    try {
      return `#${convert$1.keyword.hex(color.hex)}`;
    } catch {
      return fallbackColor.hex;
    }
  let short = color.hex.match(SHORTHEX_REGEXP);
  if (!short)
    return HEX_REGEXP.test(color.hex) ? color.hex : fallbackColor.hex;
  let [r, g2, b2] = short[1].split("");
  return `#${r}${r}${g2}${g2}${b2}${b2}`;
}, useColorInput = (initialValue, onChange) => {
  let [value, setValue] = reactExports.useState(initialValue || ""), [color, setColor] = reactExports.useState(() => parseValue(value)), [colorSpace, setColorSpace] = reactExports.useState((color == null ? void 0 : color.colorSpace) || "hex");
  reactExports.useEffect(() => {
    let nextValue = initialValue || "", nextColor = parseValue(nextValue);
    setValue(nextValue), setColor(nextColor), setColorSpace((nextColor == null ? void 0 : nextColor.colorSpace) || "hex");
  }, [initialValue]);
  let realValue = reactExports.useMemo(() => getRealValue(value, color, colorSpace).toLowerCase(), [value, color, colorSpace]), updateValue = reactExports.useCallback((update) => {
    let parsed = parseValue(update), v2 = (parsed == null ? void 0 : parsed.value) || update || "";
    setValue(v2), v2 === "" && (setColor(void 0), onChange(void 0)), parsed && (setColor(parsed), setColorSpace(parsed.colorSpace), onChange(parsed.value));
  }, [onChange]), cycleColorSpace = reactExports.useCallback(() => {
    let next = COLOR_SPACES.indexOf(colorSpace) + 1;
    next >= COLOR_SPACES.length && (next = 0), setColorSpace(COLOR_SPACES[next]);
    let update = (color == null ? void 0 : color[COLOR_SPACES[next]]) || "";
    setValue(update), onChange(update);
  }, [color, colorSpace, onChange]);
  return { value, realValue, updateValue, color, colorSpace, cycleColorSpace };
}, id = (value) => value.replace(/\s*/, "").toLowerCase(), usePresets = (presetColors, currentColor, colorSpace) => {
  let [selectedColors, setSelectedColors] = reactExports.useState((currentColor == null ? void 0 : currentColor.valid) ? [currentColor] : []);
  reactExports.useEffect(() => {
    currentColor === void 0 && setSelectedColors([]);
  }, [currentColor]);
  let presets = reactExports.useMemo(() => (presetColors || []).map((preset) => typeof preset == "string" ? parseValue(preset) : preset.title ? { ...parseValue(preset.color), keyword: preset.title } : parseValue(preset.color)).concat(selectedColors).filter(Boolean).slice(-27), [presetColors, selectedColors]), addPreset = reactExports.useCallback((color) => {
    (color == null ? void 0 : color.valid) && (presets.some((preset) => id(preset[colorSpace]) === id(color[colorSpace])) || setSelectedColors((arr) => arr.concat(color)));
  }, [colorSpace, presets]);
  return { presets, addPreset };
}, ColorControl = ({ name, value: initialValue, onChange, onFocus, onBlur, presetColors, startOpen = false }) => {
  let throttledOnChange = reactExports.useCallback(throttle$1(onChange, 200), [onChange]), { value, realValue, updateValue, color, colorSpace, cycleColorSpace } = useColorInput(initialValue, throttledOnChange), { presets, addPreset } = usePresets(presetColors, color, colorSpace), Picker = ColorPicker[colorSpace];
  return React.createElement(Wrapper, null, React.createElement(PickerTooltip, { startOpen, closeOnOutsideClick: true, onVisibleChange: () => addPreset(color), tooltip: React.createElement(TooltipContent, null, React.createElement(Picker, { color: realValue === "transparent" ? "#000000" : realValue, onChange: updateValue, onFocus, onBlur }), presets.length > 0 && React.createElement(Swatches, null, presets.map((preset, index) => React.createElement(WithTooltip, { key: `${preset.value}-${index}`, hasChrome: false, tooltip: React.createElement(Note, { note: preset.keyword || preset.value }) }, React.createElement(Swatch, { value: preset[colorSpace], active: color && id(preset[colorSpace]) === id(color[colorSpace]), onClick: () => updateValue(preset.value) }))))) }, React.createElement(Swatch, { value: realValue, style: { margin: 4 } })), React.createElement(Input, { id: getControlId(name), value, onChange: (e) => updateValue(e.target.value), onFocus: (e) => e.target.select(), placeholder: "Choose color..." }), value ? React.createElement(ToggleIcon, { onClick: cycleColorSpace }) : null);
}, Color_default = ColorControl;
export {
  ColorControl,
  Color_default as default
};
