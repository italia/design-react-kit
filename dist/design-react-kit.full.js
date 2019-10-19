(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
	(global = global || self, factory(global.DesignReactKit = {}, global.React, global.ReactDOM));
}(this, function (exports, React, ReactDOM) { 'use strict';

	var React__default = 'default' in React ? React['default'] : React;
	ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var webfontloader = createCommonjsModule(function (module) {
	  /* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */
	  (function () {
	    function aa(a, b, c) {
	      return a.call.apply(a.bind, arguments);
	    }

	    function ba(a, b, c) {
	      if (!a) throw Error();

	      if (2 < arguments.length) {
	        var d = Array.prototype.slice.call(arguments, 2);
	        return function () {
	          var c = Array.prototype.slice.call(arguments);
	          Array.prototype.unshift.apply(c, d);
	          return a.apply(b, c);
	        };
	      }

	      return function () {
	        return a.apply(b, arguments);
	      };
	    }

	    function p(a, b, c) {
	      p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
	      return p.apply(null, arguments);
	    }

	    var q = Date.now || function () {
	      return +new Date();
	    };

	    function ca(a, b) {
	      this.a = a;
	      this.o = b || a;
	      this.c = this.o.document;
	    }

	    var da = !!window.FontFace;

	    function t(a, b, c, d) {
	      b = a.c.createElement(b);
	      if (c) for (var e in c) {
	        c.hasOwnProperty(e) && ("style" == e ? b.style.cssText = c[e] : b.setAttribute(e, c[e]));
	      }
	      d && b.appendChild(a.c.createTextNode(d));
	      return b;
	    }

	    function u(a, b, c) {
	      a = a.c.getElementsByTagName(b)[0];
	      a || (a = document.documentElement);
	      a.insertBefore(c, a.lastChild);
	    }

	    function v(a) {
	      a.parentNode && a.parentNode.removeChild(a);
	    }

	    function w(a, b, c) {
	      b = b || [];
	      c = c || [];

	      for (var d = a.className.split(/\s+/), e = 0; e < b.length; e += 1) {
	        for (var f = !1, g = 0; g < d.length; g += 1) {
	          if (b[e] === d[g]) {
	            f = !0;
	            break;
	          }
	        }

	        f || d.push(b[e]);
	      }

	      b = [];

	      for (e = 0; e < d.length; e += 1) {
	        f = !1;

	        for (g = 0; g < c.length; g += 1) {
	          if (d[e] === c[g]) {
	            f = !0;
	            break;
	          }
	        }

	        f || b.push(d[e]);
	      }

	      a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
	    }

	    function y(a, b) {
	      for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++) {
	        if (c[d] == b) return !0;
	      }

	      return !1;
	    }

	    function ea(a) {
	      return a.o.location.hostname || a.a.location.hostname;
	    }

	    function z(a, b, c) {
	      function d() {
	        m && e && f && (m(g), m = null);
	      }

	      b = t(a, "link", {
	        rel: "stylesheet",
	        href: b,
	        media: "all"
	      });
	      var e = !1,
	          f = !0,
	          g = null,
	          m = c || null;
	      da ? (b.onload = function () {
	        e = !0;
	        d();
	      }, b.onerror = function () {
	        e = !0;
	        g = Error("Stylesheet failed to load");
	        d();
	      }) : setTimeout(function () {
	        e = !0;
	        d();
	      }, 0);
	      u(a, "head", b);
	    }

	    function A(a, b, c, d) {
	      var e = a.c.getElementsByTagName("head")[0];

	      if (e) {
	        var f = t(a, "script", {
	          src: b
	        }),
	            g = !1;

	        f.onload = f.onreadystatechange = function () {
	          g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = !0, c && c(null), f.onload = f.onreadystatechange = null, "HEAD" == f.parentNode.tagName && e.removeChild(f));
	        };

	        e.appendChild(f);
	        setTimeout(function () {
	          g || (g = !0, c && c(Error("Script load timeout")));
	        }, d || 5E3);
	        return f;
	      }

	      return null;
	    }

	    function B() {
	      this.a = 0;
	      this.c = null;
	    }

	    function C(a) {
	      a.a++;
	      return function () {
	        a.a--;
	        D(a);
	      };
	    }

	    function E(a, b) {
	      a.c = b;
	      D(a);
	    }

	    function D(a) {
	      0 == a.a && a.c && (a.c(), a.c = null);
	    }

	    function F(a) {
	      this.a = a || "-";
	    }

	    F.prototype.c = function (a) {
	      for (var b = [], c = 0; c < arguments.length; c++) {
	        b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
	      }

	      return b.join(this.a);
	    };

	    function G(a, b) {
	      this.c = a;
	      this.f = 4;
	      this.a = "n";
	      var c = (b || "n4").match(/^([nio])([1-9])$/i);
	      c && (this.a = c[1], this.f = parseInt(c[2], 10));
	    }

	    function fa(a) {
	      return H(a) + " " + (a.f + "00") + " 300px " + I(a.c);
	    }

	    function I(a) {
	      var b = [];
	      a = a.split(/,\s*/);

	      for (var c = 0; c < a.length; c++) {
	        var d = a[c].replace(/['"]/g, "");
	        -1 != d.indexOf(" ") || /^\d/.test(d) ? b.push("'" + d + "'") : b.push(d);
	      }

	      return b.join(",");
	    }

	    function J(a) {
	      return a.a + a.f;
	    }

	    function H(a) {
	      var b = "normal";
	      "o" === a.a ? b = "oblique" : "i" === a.a && (b = "italic");
	      return b;
	    }

	    function ga(a) {
	      var b = 4,
	          c = "n",
	          d = null;
	      a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))));
	      return c + b;
	    }

	    function ha(a, b) {
	      this.c = a;
	      this.f = a.o.document.documentElement;
	      this.h = b;
	      this.a = new F("-");
	      this.j = !1 !== b.events;
	      this.g = !1 !== b.classes;
	    }

	    function ia(a) {
	      a.g && w(a.f, [a.a.c("wf", "loading")]);
	      K(a, "loading");
	    }

	    function L(a) {
	      if (a.g) {
	        var b = y(a.f, a.a.c("wf", "active")),
	            c = [],
	            d = [a.a.c("wf", "loading")];
	        b || c.push(a.a.c("wf", "inactive"));
	        w(a.f, c, d);
	      }

	      K(a, "inactive");
	    }

	    function K(a, b, c) {
	      if (a.j && a.h[b]) if (c) a.h[b](c.c, J(c));else a.h[b]();
	    }

	    function ja() {
	      this.c = {};
	    }

	    function ka(a, b, c) {
	      var d = [],
	          e;

	      for (e in b) {
	        if (b.hasOwnProperty(e)) {
	          var f = a.c[e];
	          f && d.push(f(b[e], c));
	        }
	      }

	      return d;
	    }

	    function M(a, b) {
	      this.c = a;
	      this.f = b;
	      this.a = t(this.c, "span", {
	        "aria-hidden": "true"
	      }, this.f);
	    }

	    function N(a) {
	      u(a.c, "body", a.a);
	    }

	    function O(a) {
	      return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + I(a.c) + ";" + ("font-style:" + H(a) + ";font-weight:" + (a.f + "00") + ";");
	    }

	    function P(a, b, c, d, e, f) {
	      this.g = a;
	      this.j = b;
	      this.a = d;
	      this.c = c;
	      this.f = e || 3E3;
	      this.h = f || void 0;
	    }

	    P.prototype.start = function () {
	      var a = this.c.o.document,
	          b = this,
	          c = q(),
	          d = new Promise(function (d, e) {
	        function f() {
	          q() - c >= b.f ? e() : a.fonts.load(fa(b.a), b.h).then(function (a) {
	            1 <= a.length ? d() : setTimeout(f, 25);
	          }, function () {
	            e();
	          });
	        }

	        f();
	      }),
	          e = null,
	          f = new Promise(function (a, d) {
	        e = setTimeout(d, b.f);
	      });
	      Promise.race([f, d]).then(function () {
	        e && (clearTimeout(e), e = null);
	        b.g(b.a);
	      }, function () {
	        b.j(b.a);
	      });
	    };

	    function Q(a, b, c, d, e, f, g) {
	      this.v = a;
	      this.B = b;
	      this.c = c;
	      this.a = d;
	      this.s = g || "BESbswy";
	      this.f = {};
	      this.w = e || 3E3;
	      this.u = f || null;
	      this.m = this.j = this.h = this.g = null;
	      this.g = new M(this.c, this.s);
	      this.h = new M(this.c, this.s);
	      this.j = new M(this.c, this.s);
	      this.m = new M(this.c, this.s);
	      a = new G(this.a.c + ",serif", J(this.a));
	      a = O(a);
	      this.g.a.style.cssText = a;
	      a = new G(this.a.c + ",sans-serif", J(this.a));
	      a = O(a);
	      this.h.a.style.cssText = a;
	      a = new G("serif", J(this.a));
	      a = O(a);
	      this.j.a.style.cssText = a;
	      a = new G("sans-serif", J(this.a));
	      a = O(a);
	      this.m.a.style.cssText = a;
	      N(this.g);
	      N(this.h);
	      N(this.j);
	      N(this.m);
	    }

	    var R = {
	      D: "serif",
	      C: "sans-serif"
	    },
	        S = null;

	    function T() {
	      if (null === S) {
	        var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
	        S = !!a && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10));
	      }

	      return S;
	    }

	    Q.prototype.start = function () {
	      this.f.serif = this.j.a.offsetWidth;
	      this.f["sans-serif"] = this.m.a.offsetWidth;
	      this.A = q();
	      U(this);
	    };

	    function la(a, b, c) {
	      for (var d in R) {
	        if (R.hasOwnProperty(d) && b === a.f[R[d]] && c === a.f[R[d]]) return !0;
	      }

	      return !1;
	    }

	    function U(a) {
	      var b = a.g.a.offsetWidth,
	          c = a.h.a.offsetWidth,
	          d;
	      (d = b === a.f.serif && c === a.f["sans-serif"]) || (d = T() && la(a, b, c));
	      d ? q() - a.A >= a.w ? T() && la(a, b, c) && (null === a.u || a.u.hasOwnProperty(a.a.c)) ? V(a, a.v) : V(a, a.B) : ma(a) : V(a, a.v);
	    }

	    function ma(a) {
	      setTimeout(p(function () {
	        U(this);
	      }, a), 50);
	    }

	    function V(a, b) {
	      setTimeout(p(function () {
	        v(this.g.a);
	        v(this.h.a);
	        v(this.j.a);
	        v(this.m.a);
	        b(this.a);
	      }, a), 0);
	    }

	    function W(a, b, c) {
	      this.c = a;
	      this.a = b;
	      this.f = 0;
	      this.m = this.j = !1;
	      this.s = c;
	    }

	    var X = null;

	    W.prototype.g = function (a) {
	      var b = this.a;
	      b.g && w(b.f, [b.a.c("wf", a.c, J(a).toString(), "active")], [b.a.c("wf", a.c, J(a).toString(), "loading"), b.a.c("wf", a.c, J(a).toString(), "inactive")]);
	      K(b, "fontactive", a);
	      this.m = !0;
	      na(this);
	    };

	    W.prototype.h = function (a) {
	      var b = this.a;

	      if (b.g) {
	        var c = y(b.f, b.a.c("wf", a.c, J(a).toString(), "active")),
	            d = [],
	            e = [b.a.c("wf", a.c, J(a).toString(), "loading")];
	        c || d.push(b.a.c("wf", a.c, J(a).toString(), "inactive"));
	        w(b.f, d, e);
	      }

	      K(b, "fontinactive", a);
	      na(this);
	    };

	    function na(a) {
	      0 == --a.f && a.j && (a.m ? (a = a.a, a.g && w(a.f, [a.a.c("wf", "active")], [a.a.c("wf", "loading"), a.a.c("wf", "inactive")]), K(a, "active")) : L(a.a));
	    }

	    function oa(a) {
	      this.j = a;
	      this.a = new ja();
	      this.h = 0;
	      this.f = this.g = !0;
	    }

	    oa.prototype.load = function (a) {
	      this.c = new ca(this.j, a.context || this.j);
	      this.g = !1 !== a.events;
	      this.f = !1 !== a.classes;
	      pa(this, new ha(this.c, a), a);
	    };

	    function qa(a, b, c, d, e) {
	      var f = 0 == --a.h;
	      (a.f || a.g) && setTimeout(function () {
	        var a = e || null,
	            m = d || null || {};
	        if (0 === c.length && f) L(b.a);else {
	          b.f += c.length;
	          f && (b.j = f);
	          var h,
	              l = [];

	          for (h = 0; h < c.length; h++) {
	            var k = c[h],
	                n = m[k.c],
	                r = b.a,
	                x = k;
	            r.g && w(r.f, [r.a.c("wf", x.c, J(x).toString(), "loading")]);
	            K(r, "fontloading", x);
	            r = null;
	            if (null === X) if (window.FontFace) {
	              var x = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),
	                  xa = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
	              X = x ? 42 < parseInt(x[1], 10) : xa ? !1 : !0;
	            } else X = !1;
	            X ? r = new P(p(b.g, b), p(b.h, b), b.c, k, b.s, n) : r = new Q(p(b.g, b), p(b.h, b), b.c, k, b.s, a, n);
	            l.push(r);
	          }

	          for (h = 0; h < l.length; h++) {
	            l[h].start();
	          }
	        }
	      }, 0);
	    }

	    function pa(a, b, c) {
	      var d = [],
	          e = c.timeout;
	      ia(b);
	      var d = ka(a.a, c, a.c),
	          f = new W(a.c, b, e);
	      a.h = d.length;
	      b = 0;

	      for (c = d.length; b < c; b++) {
	        d[b].load(function (b, d, c) {
	          qa(a, f, b, d, c);
	        });
	      }
	    }

	    function ra(a, b) {
	      this.c = a;
	      this.a = b;
	    }

	    ra.prototype.load = function (a) {
	      function b() {
	        if (f["__mti_fntLst" + d]) {
	          var c = f["__mti_fntLst" + d](),
	              e = [],
	              h;
	          if (c) for (var l = 0; l < c.length; l++) {
	            var k = c[l].fontfamily;
	            void 0 != c[l].fontStyle && void 0 != c[l].fontWeight ? (h = c[l].fontStyle + c[l].fontWeight, e.push(new G(k, h))) : e.push(new G(k));
	          }
	          a(e);
	        } else setTimeout(function () {
	          b();
	        }, 50);
	      }

	      var c = this,
	          d = c.a.projectId,
	          e = c.a.version;

	      if (d) {
	        var f = c.c.o;
	        A(this.c, (c.a.api || "https://fast.fonts.net/jsapi") + "/" + d + ".js" + (e ? "?v=" + e : ""), function (e) {
	          e ? a([]) : (f["__MonotypeConfiguration__" + d] = function () {
	            return c.a;
	          }, b());
	        }).id = "__MonotypeAPIScript__" + d;
	      } else a([]);
	    };

	    function sa(a, b) {
	      this.c = a;
	      this.a = b;
	    }

	    sa.prototype.load = function (a) {
	      var b,
	          c,
	          d = this.a.urls || [],
	          e = this.a.families || [],
	          f = this.a.testStrings || {},
	          g = new B();
	      b = 0;

	      for (c = d.length; b < c; b++) {
	        z(this.c, d[b], C(g));
	      }

	      var m = [];
	      b = 0;

	      for (c = e.length; b < c; b++) {
	        if (d = e[b].split(":"), d[1]) for (var h = d[1].split(","), l = 0; l < h.length; l += 1) {
	          m.push(new G(d[0], h[l]));
	        } else m.push(new G(d[0]));
	      }

	      E(g, function () {
	        a(m, f);
	      });
	    };

	    function ta(a, b) {
	      a ? this.c = a : this.c = ua;
	      this.a = [];
	      this.f = [];
	      this.g = b || "";
	    }

	    var ua = "https://fonts.googleapis.com/css";

	    function va(a, b) {
	      for (var c = b.length, d = 0; d < c; d++) {
	        var e = b[d].split(":");
	        3 == e.length && a.f.push(e.pop());
	        var f = "";
	        2 == e.length && "" != e[1] && (f = ":");
	        a.a.push(e.join(f));
	      }
	    }

	    function wa(a) {
	      if (0 == a.a.length) throw Error("No fonts to load!");
	      if (-1 != a.c.indexOf("kit=")) return a.c;

	      for (var b = a.a.length, c = [], d = 0; d < b; d++) {
	        c.push(a.a[d].replace(/ /g, "+"));
	      }

	      b = a.c + "?family=" + c.join("%7C");
	      0 < a.f.length && (b += "&subset=" + a.f.join(","));
	      0 < a.g.length && (b += "&text=" + encodeURIComponent(a.g));
	      return b;
	    }

	    function ya(a) {
	      this.f = a;
	      this.a = [];
	      this.c = {};
	    }

	    var za = {
	      latin: "BESbswy",
	      "latin-ext": "\xE7\xF6\xFC\u011F\u015F",
	      cyrillic: "\u0439\u044F\u0416",
	      greek: "\u03B1\u03B2\u03A3",
	      khmer: "\u1780\u1781\u1782",
	      Hanuman: "\u1780\u1781\u1782"
	    },
	        Aa = {
	      thin: "1",
	      extralight: "2",
	      "extra-light": "2",
	      ultralight: "2",
	      "ultra-light": "2",
	      light: "3",
	      regular: "4",
	      book: "4",
	      medium: "5",
	      "semi-bold": "6",
	      semibold: "6",
	      "demi-bold": "6",
	      demibold: "6",
	      bold: "7",
	      "extra-bold": "8",
	      extrabold: "8",
	      "ultra-bold": "8",
	      ultrabold: "8",
	      black: "9",
	      heavy: "9",
	      l: "3",
	      r: "4",
	      b: "7"
	    },
	        Ba = {
	      i: "i",
	      italic: "i",
	      n: "n",
	      normal: "n"
	    },
	        Ca = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;

	    function Da(a) {
	      for (var b = a.f.length, c = 0; c < b; c++) {
	        var d = a.f[c].split(":"),
	            e = d[0].replace(/\+/g, " "),
	            f = ["n4"];

	        if (2 <= d.length) {
	          var g;
	          var m = d[1];
	          g = [];
	          if (m) for (var m = m.split(","), h = m.length, l = 0; l < h; l++) {
	            var k;
	            k = m[l];

	            if (k.match(/^[\w-]+$/)) {
	              var n = Ca.exec(k.toLowerCase());
	              if (null == n) k = "";else {
	                k = n[2];
	                k = null == k || "" == k ? "n" : Ba[k];
	                n = n[1];
	                if (null == n || "" == n) n = "4";else var r = Aa[n],
	                    n = r ? r : isNaN(n) ? "4" : n.substr(0, 1);
	                k = [k, n].join("");
	              }
	            } else k = "";

	            k && g.push(k);
	          }
	          0 < g.length && (f = g);
	          3 == d.length && (d = d[2], g = [], d = d ? d.split(",") : g, 0 < d.length && (d = za[d[0]]) && (a.c[e] = d));
	        }

	        a.c[e] || (d = za[e]) && (a.c[e] = d);

	        for (d = 0; d < f.length; d += 1) {
	          a.a.push(new G(e, f[d]));
	        }
	      }
	    }

	    function Ea(a, b) {
	      this.c = a;
	      this.a = b;
	    }

	    var Fa = {
	      Arimo: !0,
	      Cousine: !0,
	      Tinos: !0
	    };

	    Ea.prototype.load = function (a) {
	      var b = new B(),
	          c = this.c,
	          d = new ta(this.a.api, this.a.text),
	          e = this.a.families;
	      va(d, e);
	      var f = new ya(e);
	      Da(f);
	      z(c, wa(d), C(b));
	      E(b, function () {
	        a(f.a, f.c, Fa);
	      });
	    };

	    function Ga(a, b) {
	      this.c = a;
	      this.a = b;
	    }

	    Ga.prototype.load = function (a) {
	      var b = this.a.id,
	          c = this.c.o;
	      b ? A(this.c, (this.a.api || "https://use.typekit.net") + "/" + b + ".js", function (b) {
	        if (b) a([]);else if (c.Typekit && c.Typekit.config && c.Typekit.config.fn) {
	          b = c.Typekit.config.fn;

	          for (var e = [], f = 0; f < b.length; f += 2) {
	            for (var g = b[f], m = b[f + 1], h = 0; h < m.length; h++) {
	              e.push(new G(g, m[h]));
	            }
	          }

	          try {
	            c.Typekit.load({
	              events: !1,
	              classes: !1,
	              async: !0
	            });
	          } catch (l) {}

	          a(e);
	        }
	      }, 2E3) : a([]);
	    };

	    function Ha(a, b) {
	      this.c = a;
	      this.f = b;
	      this.a = [];
	    }

	    Ha.prototype.load = function (a) {
	      var b = this.f.id,
	          c = this.c.o,
	          d = this;
	      b ? (c.__webfontfontdeckmodule__ || (c.__webfontfontdeckmodule__ = {}), c.__webfontfontdeckmodule__[b] = function (b, c) {
	        for (var g = 0, m = c.fonts.length; g < m; ++g) {
	          var h = c.fonts[g];
	          d.a.push(new G(h.name, ga("font-weight:" + h.weight + ";font-style:" + h.style)));
	        }

	        a(d.a);
	      }, A(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + ea(this.c) + "/" + b + ".js", function (b) {
	        b && a([]);
	      })) : a([]);
	    };

	    var Y = new oa(window);

	    Y.a.c.custom = function (a, b) {
	      return new sa(b, a);
	    };

	    Y.a.c.fontdeck = function (a, b) {
	      return new Ha(b, a);
	    };

	    Y.a.c.monotype = function (a, b) {
	      return new ra(b, a);
	    };

	    Y.a.c.typekit = function (a, b) {
	      return new Ga(b, a);
	    };

	    Y.a.c.google = function (a, b) {
	      return new Ea(b, a);
	    };

	    var Z = {
	      load: p(Y.load, Y)
	    };
	      module.exports ? module.exports = Z : (window.WebFont = Z, window.WebFontConfig && Y.load(window.WebFontConfig));
	  })();
	});

	function _extends() {
	  _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	function _objectWithoutPropertiesLoose(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	var reactIs_production_min = createCommonjsModule(function (module, exports) {

	  Object.defineProperty(exports, "__esModule", {
	    value: !0
	  });
	  var b = "function" === typeof Symbol && Symbol["for"],
	      c = b ? Symbol["for"]("react.element") : 60103,
	      d = b ? Symbol["for"]("react.portal") : 60106,
	      e = b ? Symbol["for"]("react.fragment") : 60107,
	      f = b ? Symbol["for"]("react.strict_mode") : 60108,
	      g = b ? Symbol["for"]("react.profiler") : 60114,
	      h = b ? Symbol["for"]("react.provider") : 60109,
	      k = b ? Symbol["for"]("react.context") : 60110,
	      l = b ? Symbol["for"]("react.async_mode") : 60111,
	      m = b ? Symbol["for"]("react.concurrent_mode") : 60111,
	      n = b ? Symbol["for"]("react.forward_ref") : 60112,
	      p = b ? Symbol["for"]("react.suspense") : 60113,
	      q = b ? Symbol["for"]("react.suspense_list") : 60120,
	      r = b ? Symbol["for"]("react.memo") : 60115,
	      t = b ? Symbol["for"]("react.lazy") : 60116,
	      v = b ? Symbol["for"]("react.fundamental") : 60117,
	      w = b ? Symbol["for"]("react.responder") : 60118,
	      x = b ? Symbol["for"]("react.scope") : 60119;

	  function y(a) {
	    if ("object" === typeof a && null !== a) {
	      var u = a.$$typeof;

	      switch (u) {
	        case c:
	          switch (a = a.type, a) {
	            case l:
	            case m:
	            case e:
	            case g:
	            case f:
	            case p:
	              return a;

	            default:
	              switch (a = a && a.$$typeof, a) {
	                case k:
	                case n:
	                case h:
	                  return a;

	                default:
	                  return u;
	              }

	          }

	        case t:
	        case r:
	        case d:
	          return u;
	      }
	    }
	  }

	  function z(a) {
	    return y(a) === m;
	  }

	  exports.typeOf = y;
	  exports.AsyncMode = l;
	  exports.ConcurrentMode = m;
	  exports.ContextConsumer = k;
	  exports.ContextProvider = h;
	  exports.Element = c;
	  exports.ForwardRef = n;
	  exports.Fragment = e;
	  exports.Lazy = t;
	  exports.Memo = r;
	  exports.Portal = d;
	  exports.Profiler = g;
	  exports.StrictMode = f;
	  exports.Suspense = p;

	  exports.isValidElementType = function (a) {
	    return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === v || a.$$typeof === w || a.$$typeof === x);
	  };

	  exports.isAsyncMode = function (a) {
	    return z(a) || y(a) === l;
	  };

	  exports.isConcurrentMode = z;

	  exports.isContextConsumer = function (a) {
	    return y(a) === k;
	  };

	  exports.isContextProvider = function (a) {
	    return y(a) === h;
	  };

	  exports.isElement = function (a) {
	    return "object" === typeof a && null !== a && a.$$typeof === c;
	  };

	  exports.isForwardRef = function (a) {
	    return y(a) === n;
	  };

	  exports.isFragment = function (a) {
	    return y(a) === e;
	  };

	  exports.isLazy = function (a) {
	    return y(a) === t;
	  };

	  exports.isMemo = function (a) {
	    return y(a) === r;
	  };

	  exports.isPortal = function (a) {
	    return y(a) === d;
	  };

	  exports.isProfiler = function (a) {
	    return y(a) === g;
	  };

	  exports.isStrictMode = function (a) {
	    return y(a) === f;
	  };

	  exports.isSuspense = function (a) {
	    return y(a) === p;
	  };
	});
	unwrapExports(reactIs_production_min);
	var reactIs_production_min_1 = reactIs_production_min.typeOf;
	var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
	var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
	var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
	var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
	var reactIs_production_min_6 = reactIs_production_min.Element;
	var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
	var reactIs_production_min_8 = reactIs_production_min.Fragment;
	var reactIs_production_min_9 = reactIs_production_min.Lazy;
	var reactIs_production_min_10 = reactIs_production_min.Memo;
	var reactIs_production_min_11 = reactIs_production_min.Portal;
	var reactIs_production_min_12 = reactIs_production_min.Profiler;
	var reactIs_production_min_13 = reactIs_production_min.StrictMode;
	var reactIs_production_min_14 = reactIs_production_min.Suspense;
	var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
	var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
	var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
	var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
	var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
	var reactIs_production_min_20 = reactIs_production_min.isElement;
	var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
	var reactIs_production_min_22 = reactIs_production_min.isFragment;
	var reactIs_production_min_23 = reactIs_production_min.isLazy;
	var reactIs_production_min_24 = reactIs_production_min.isMemo;
	var reactIs_production_min_25 = reactIs_production_min.isPortal;
	var reactIs_production_min_26 = reactIs_production_min.isProfiler;
	var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
	var reactIs_production_min_28 = reactIs_production_min.isSuspense;

	var reactIs_development = createCommonjsModule(function (module, exports) {
	});
	unwrapExports(reactIs_development);
	var reactIs_development_1 = reactIs_development.typeOf;
	var reactIs_development_2 = reactIs_development.AsyncMode;
	var reactIs_development_3 = reactIs_development.ConcurrentMode;
	var reactIs_development_4 = reactIs_development.ContextConsumer;
	var reactIs_development_5 = reactIs_development.ContextProvider;
	var reactIs_development_6 = reactIs_development.Element;
	var reactIs_development_7 = reactIs_development.ForwardRef;
	var reactIs_development_8 = reactIs_development.Fragment;
	var reactIs_development_9 = reactIs_development.Lazy;
	var reactIs_development_10 = reactIs_development.Memo;
	var reactIs_development_11 = reactIs_development.Portal;
	var reactIs_development_12 = reactIs_development.Profiler;
	var reactIs_development_13 = reactIs_development.StrictMode;
	var reactIs_development_14 = reactIs_development.Suspense;
	var reactIs_development_15 = reactIs_development.isValidElementType;
	var reactIs_development_16 = reactIs_development.isAsyncMode;
	var reactIs_development_17 = reactIs_development.isConcurrentMode;
	var reactIs_development_18 = reactIs_development.isContextConsumer;
	var reactIs_development_19 = reactIs_development.isContextProvider;
	var reactIs_development_20 = reactIs_development.isElement;
	var reactIs_development_21 = reactIs_development.isForwardRef;
	var reactIs_development_22 = reactIs_development.isFragment;
	var reactIs_development_23 = reactIs_development.isLazy;
	var reactIs_development_24 = reactIs_development.isMemo;
	var reactIs_development_25 = reactIs_development.isPortal;
	var reactIs_development_26 = reactIs_development.isProfiler;
	var reactIs_development_27 = reactIs_development.isStrictMode;
	var reactIs_development_28 = reactIs_development.isSuspense;

	var reactIs = createCommonjsModule(function (module) {

	  {
	    module.exports = reactIs_production_min;
	  }
	});

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */

	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
	  if (val === null || val === undefined) {
	    throw new TypeError('Object.assign cannot be called with null or undefined');
	  }

	  return Object(val);
	}

	function shouldUseNative() {
	  try {
	    if (!Object.assign) {
	      return false;
	    } // Detect buggy property enumeration order in older V8 versions.
	    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


	    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

	    test1[5] = 'de';

	    if (Object.getOwnPropertyNames(test1)[0] === '5') {
	      return false;
	    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


	    var test2 = {};

	    for (var i = 0; i < 10; i++) {
	      test2['_' + String.fromCharCode(i)] = i;
	    }

	    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
	      return test2[n];
	    });

	    if (order2.join('') !== '0123456789') {
	      return false;
	    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


	    var test3 = {};
	    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
	      test3[letter] = letter;
	    });

	    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
	      return false;
	    }

	    return true;
	  } catch (err) {
	    // We don't expect any of the above to throw, but better to be safe.
	    return false;
	  }
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	  var from;
	  var to = toObject(target);
	  var symbols;

	  for (var s = 1; s < arguments.length; s++) {
	    from = Object(arguments[s]);

	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }

	    if (getOwnPropertySymbols) {
	      symbols = getOwnPropertySymbols(from);

	      for (var i = 0; i < symbols.length; i++) {
	        if (propIsEnumerable.call(from, symbols[i])) {
	          to[symbols[i]] = from[symbols[i]];
	        }
	      }
	    }
	  }

	  return to;
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	var ReactPropTypesSecret_1 = ReactPropTypesSecret;

	var has = Function.call.bind(Object.prototype.hasOwnProperty);

	function emptyFunction() {}

	function emptyFunctionWithReset() {}

	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	var factoryWithThrowingShims = function factoryWithThrowingShims() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret_1) {
	      // It is still safe when called from React.
	      return;
	    }

	    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
	    err.name = 'Invariant Violation';
	    throw err;
	  }
	  shim.isRequired = shim;

	  function getShim() {
	    return shim;
	  }
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,
	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,
	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };
	  ReactPropTypes.PropTypes = ReactPropTypes;
	  return ReactPropTypes;
	};

	var propTypes = createCommonjsModule(function (module) {
	  /**
	   * Copyright (c) 2013-present, Facebook, Inc.
	   *
	   * This source code is licensed under the MIT license found in the
	   * LICENSE file in the root directory of this source tree.
	   */
	  {
	    // By explicitly using `prop-types` you are opting into new production behavior.
	    // http://fb.me/prop-types-in-prod
	    module.exports = factoryWithThrowingShims();
	  }
	});

	var classnames = createCommonjsModule(function (module) {
	  /*!
	    Copyright (c) 2017 Jed Watson.
	    Licensed under the MIT License (MIT), see
	    http://jedwatson.github.io/classnames
	  */

	  /* global define */
	  (function () {

	    var hasOwn = {}.hasOwnProperty;

	    function classNames() {
	      var classes = [];

	      for (var i = 0; i < arguments.length; i++) {
	        var arg = arguments[i];
	        if (!arg) continue;
	        var argType = typeof arg;

	        if (argType === 'string' || argType === 'number') {
	          classes.push(arg);
	        } else if (Array.isArray(arg) && arg.length) {
	          var inner = classNames.apply(null, arg);

	          if (inner) {
	            classes.push(inner);
	          }
	        } else if (argType === 'object') {
	          for (var key in arg) {
	            if (hasOwn.call(arg, key) && arg[key]) {
	              classes.push(key);
	            }
	          }
	        }
	      }

	      return classes.join(' ');
	    }

	    if ( module.exports) {
	      classNames["default"] = classNames;
	      module.exports = classNames;
	    } else {
	      window.classNames = classNames;
	    }
	  })();
	});

	/**
	 * Lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright JS Foundation and other contributors <https://js.foundation/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** `Object#toString` result references. */

	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    nullTag = '[object Null]',
	    proxyTag = '[object Proxy]',
	    undefinedTag = '[object Undefined]';
	/** Detect free variable `global` from Node.js. */

	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
	/** Detect free variable `self`. */

	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	/** Used as a reference to the global object. */

	var root = freeGlobal || freeSelf || Function('return this')();
	/** Used for built-in method references. */

	var objectProto = Object.prototype;
	/** Used to check objects for own properties. */

	var hasOwnProperty$1 = objectProto.hasOwnProperty;
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */

	var nativeObjectToString = objectProto.toString;
	/** Built-in value references. */

	var Symbol$1 = root.Symbol,
	    symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */

	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }

	  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
	}
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */


	function getRawTag(value) {
	  var isOwn = hasOwnProperty$1.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);

	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }

	  return result;
	}
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */


	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */


	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  } // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.


	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */


	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}

	var lodash_isfunction = isFunction;

	function getScrollbarWidth() {
	  var scrollDiv = document.createElement('div'); // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113

	  scrollDiv.style.position = 'absolute';
	  scrollDiv.style.top = '-9999px';
	  scrollDiv.style.width = '50px';
	  scrollDiv.style.height = '50px';
	  scrollDiv.style.overflow = 'scroll';
	  document.body.appendChild(scrollDiv);
	  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	  document.body.removeChild(scrollDiv);
	  return scrollbarWidth;
	}
	function setScrollbarWidth(padding) {
	  document.body.style.paddingRight = padding > 0 ? padding + "px" : null;
	}
	function isBodyOverflowing() {
	  return document.body.clientWidth < window.innerWidth;
	}
	function getOriginalBodyPadding() {
	  var style = window.getComputedStyle(document.body, null);
	  return parseInt(style && style.getPropertyValue('padding-right') || 0, 10);
	}
	function conditionallyUpdateScrollbar() {
	  var scrollbarWidth = getScrollbarWidth(); // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.6/js/src/modal.js#L433

	  var fixedContent = document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top')[0];
	  var bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;

	  if (isBodyOverflowing()) {
	    setScrollbarWidth(bodyPadding + scrollbarWidth);
	  }
	}
	var globalCssModule;
	function setGlobalCssModule(cssModule) {
	  globalCssModule = cssModule;
	}
	function mapToCssModules(className, cssModule) {
	  if (className === void 0) {
	    className = '';
	  }

	  if (cssModule === void 0) {
	    cssModule = globalCssModule;
	  }

	  if (!cssModule) return className;
	  return className.split(' ').map(function (c) {
	    return cssModule[c] || c;
	  }).join(' ');
	}
	/**
	 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
	 */

	function omit(obj, omitKeys) {
	  var result = {};
	  Object.keys(obj).forEach(function (key) {
	    if (omitKeys.indexOf(key) === -1) {
	      result[key] = obj[key];
	    }
	  });
	  return result;
	}
	/**
	 * Returns a filtered copy of an object with only the specified keys.
	 */

	function pick(obj, keys) {
	  var pickKeys = Array.isArray(keys) ? keys : [keys];
	  var length = pickKeys.length;
	  var key;
	  var result = {};

	  while (length > 0) {
	    length -= 1;
	    key = pickKeys[length];
	    result[key] = obj[key];
	  }

	  return result;
	}
	var warned = {};
	function warnOnce(message) {
	  if (!warned[message]) {
	    /* istanbul ignore else */
	    if (typeof console !== 'undefined') {
	      console.error(message); // eslint-disable-line no-console
	    }

	    warned[message] = true;
	  }
	}
	function deprecated(propType, explanation) {
	  return function validate(props, propName, componentName) {
	    if (props[propName] !== null && typeof props[propName] !== 'undefined') {
	      warnOnce("\"" + propName + "\" property of \"" + componentName + "\" has been deprecated.\n" + explanation);
	    }

	    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
	      rest[_key - 3] = arguments[_key];
	    }

	    return propType.apply(void 0, [props, propName, componentName].concat(rest));
	  };
	} // Shim Element if needed (e.g. in Node environment)

	var Element = typeof window === 'object' && window.Element || function () {};

	function DOMElement(props, propName, componentName) {
	  if (!(props[propName] instanceof Element)) {
	    return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Expected prop to be an instance of Element. Validation failed.');
	  }
	}
	var targetPropType = propTypes.oneOfType([propTypes.string, propTypes.func, DOMElement, propTypes.shape({
	  current: propTypes.any
	})]);
	var tagPropType = propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.shape({
	  $$typeof: propTypes.symbol,
	  render: propTypes.func
	}), propTypes.arrayOf(propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.shape({
	  $$typeof: propTypes.symbol,
	  render: propTypes.func
	})]))]);
	/* eslint key-spacing: ["error", { afterColon: true, align: "value" }] */
	// These are all setup to match what is in the bootstrap _variables.scss
	// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss

	var TransitionTimeouts = {
	  Fade: 150,
	  // $transition-fade
	  Collapse: 350,
	  // $transition-collapse
	  Modal: 300,
	  // $modal-transition
	  Carousel: 600 // $carousel-transition

	}; // Duplicated Transition.propType keys to ensure that Reactstrap builds
	// for distribution properly exclude these keys for nested child HTML attributes
	// since `react-transition-group` removes propTypes in production builds.

	var TransitionPropTypeKeys = ['in', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'timeout', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'];
	var TransitionStatuses = {
	  ENTERING: 'entering',
	  ENTERED: 'entered',
	  EXITING: 'exiting',
	  EXITED: 'exited'
	};
	var keyCodes = {
	  esc: 27,
	  space: 32,
	  enter: 13,
	  tab: 9,
	  up: 38,
	  down: 40,
	  home: 36,
	  end: 35,
	  n: 78,
	  p: 80
	};
	var PopperPlacements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	function isReactRefObj(target) {
	  if (target && typeof target === 'object') {
	    return 'current' in target;
	  }

	  return false;
	}
	function findDOMElements(target) {
	  if (isReactRefObj(target)) {
	    return target.current;
	  }

	  if (lodash_isfunction(target)) {
	    return target();
	  }

	  if (typeof target === 'string' && canUseDOM) {
	    var selection = document.querySelectorAll(target);

	    if (!selection.length) {
	      selection = document.querySelectorAll("#" + target);
	    }

	    if (!selection.length) {
	      throw new Error("The target '" + target + "' could not be identified in the dom, tip: check spelling");
	    }

	    return selection;
	  }

	  return target;
	}
	function isArrayOrNodeList(els) {
	  if (els === null) {
	    return false;
	  }

	  return Array.isArray(els) || canUseDOM && typeof els.length === 'number';
	}
	function getTarget(target) {
	  var els = findDOMElements(target);

	  if (isArrayOrNodeList(els)) {
	    return els[0];
	  }

	  return els;
	}
	var defaultToggleEvents = ['touchstart', 'click'];
	function addMultipleEventListeners(_els, handler, _events, useCapture) {
	  var els = _els;

	  if (!isArrayOrNodeList(els)) {
	    els = [els];
	  }

	  var events = _events;

	  if (typeof events === 'string') {
	    events = events.split(/\s+/);
	  }

	  if (!isArrayOrNodeList(els) || typeof handler !== 'function' || !Array.isArray(events)) {
	    throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");
	  }

	  Array.prototype.forEach.call(events, function (event) {
	    Array.prototype.forEach.call(els, function (el) {
	      el.addEventListener(event, handler, useCapture);
	    });
	  });
	  return function removeEvents() {
	    Array.prototype.forEach.call(events, function (event) {
	      Array.prototype.forEach.call(els, function (el) {
	        el.removeEventListener(event, handler, useCapture);
	      });
	    });
	  };
	}
	var focusableElements = ['a[href]', 'area[href]', 'input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'object', 'embed', '[tabindex]:not(.modal)', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];

	var utils = /*#__PURE__*/Object.freeze({
		__proto__: null,
		getScrollbarWidth: getScrollbarWidth,
		setScrollbarWidth: setScrollbarWidth,
		isBodyOverflowing: isBodyOverflowing,
		getOriginalBodyPadding: getOriginalBodyPadding,
		conditionallyUpdateScrollbar: conditionallyUpdateScrollbar,
		setGlobalCssModule: setGlobalCssModule,
		mapToCssModules: mapToCssModules,
		omit: omit,
		pick: pick,
		warnOnce: warnOnce,
		deprecated: deprecated,
		DOMElement: DOMElement,
		targetPropType: targetPropType,
		tagPropType: tagPropType,
		TransitionTimeouts: TransitionTimeouts,
		TransitionPropTypeKeys: TransitionPropTypeKeys,
		TransitionStatuses: TransitionStatuses,
		keyCodes: keyCodes,
		PopperPlacements: PopperPlacements,
		canUseDOM: canUseDOM,
		isReactRefObj: isReactRefObj,
		findDOMElements: findDOMElements,
		isArrayOrNodeList: isArrayOrNodeList,
		getTarget: getTarget,
		defaultToggleEvents: defaultToggleEvents,
		addMultipleEventListeners: addMultipleEventListeners,
		focusableElements: focusableElements
	});

	var propTypes$1 = {
	  tag: tagPropType,
	  fluid: propTypes.bool,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps = {
	  tag: 'div'
	};

	var Container = function Container(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      fluid = props.fluid,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "fluid", "tag"]);

	  var classes = mapToCssModules(classnames(className, fluid ? 'container-fluid' : 'container'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	Container.propTypes = propTypes$1;
	Container.defaultProps = defaultProps;

	var propTypes$2 = {
	  tag: tagPropType,
	  noGutters: propTypes.bool,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  form: propTypes.bool
	};
	var defaultProps$1 = {
	  tag: 'div'
	};

	var Row = function Row(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      noGutters = props.noGutters,
	      Tag = props.tag,
	      form = props.form,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "noGutters", "tag", "form"]);

	  var classes = mapToCssModules(classnames(className, noGutters ? 'no-gutters' : null, form ? 'form-row' : 'row'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	Row.propTypes = propTypes$2;
	Row.defaultProps = defaultProps$1;

	/**
	 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject$1(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	var lodash_isobject = isObject$1;

	var colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
	var stringOrNumberProp = propTypes.oneOfType([propTypes.number, propTypes.string]);
	var columnProps = propTypes.oneOfType([propTypes.bool, propTypes.number, propTypes.string, propTypes.shape({
	  size: propTypes.oneOfType([propTypes.bool, propTypes.number, propTypes.string]),
	  order: stringOrNumberProp,
	  offset: stringOrNumberProp
	})]);
	var propTypes$3 = {
	  tag: tagPropType,
	  xs: columnProps,
	  sm: columnProps,
	  md: columnProps,
	  lg: columnProps,
	  xl: columnProps,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  widths: propTypes.array
	};
	var defaultProps$2 = {
	  tag: 'div',
	  widths: colWidths
	};

	var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
	  if (colSize === true || colSize === '') {
	    return isXs ? 'col' : "col-" + colWidth;
	  } else if (colSize === 'auto') {
	    return isXs ? 'col-auto' : "col-" + colWidth + "-auto";
	  }

	  return isXs ? "col-" + colSize : "col-" + colWidth + "-" + colSize;
	};

	var Col = function Col(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      widths = props.widths,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "widths", "tag"]);

	  var colClasses = [];
	  widths.forEach(function (colWidth, i) {
	    var columnProp = props[colWidth];
	    delete attributes[colWidth];

	    if (!columnProp && columnProp !== '') {
	      return;
	    }

	    var isXs = !i;

	    if (lodash_isobject(columnProp)) {
	      var _classNames;

	      var colSizeInterfix = isXs ? '-' : "-" + colWidth + "-";
	      var colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
	      colClasses.push(mapToCssModules(classnames((_classNames = {}, _classNames[colClass] = columnProp.size || columnProp.size === '', _classNames["order" + colSizeInterfix + columnProp.order] = columnProp.order || columnProp.order === 0, _classNames["offset" + colSizeInterfix + columnProp.offset] = columnProp.offset || columnProp.offset === 0, _classNames)), cssModule));
	    } else {
	      var _colClass = getColumnSizeClass(isXs, colWidth, columnProp);

	      colClasses.push(_colClass);
	    }
	  });

	  if (!colClasses.length) {
	    colClasses.push('col');
	  }

	  var classes = mapToCssModules(classnames(className, colClasses), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	Col.propTypes = propTypes$3;
	Col.defaultProps = defaultProps$2;

	var propTypes$4 = {
	  light: propTypes.bool,
	  dark: propTypes.bool,
	  full: propTypes.bool,
	  fixed: propTypes.string,
	  sticky: propTypes.string,
	  color: propTypes.string,
	  role: propTypes.string,
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  expand: propTypes.oneOfType([propTypes.bool, propTypes.string])
	};
	var defaultProps$3 = {
	  tag: 'nav',
	  expand: false
	};

	var getExpandClass = function getExpandClass(expand) {
	  if (expand === false) {
	    return false;
	  } else if (expand === true || expand === 'xs') {
	    return 'navbar-expand';
	  }

	  return "navbar-expand-" + expand;
	};

	var Navbar = function Navbar(props) {
	  var _classNames;

	  var expand = props.expand,
	      className = props.className,
	      cssModule = props.cssModule,
	      light = props.light,
	      dark = props.dark,
	      fixed = props.fixed,
	      sticky = props.sticky,
	      color = props.color,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["expand", "className", "cssModule", "light", "dark", "fixed", "sticky", "color", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'navbar', getExpandClass(expand), (_classNames = {
	    'navbar-light': light,
	    'navbar-dark': dark
	  }, _classNames["bg-" + color] = color, _classNames["fixed-" + fixed] = fixed, _classNames["sticky-" + sticky] = sticky, _classNames)), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	Navbar.propTypes = propTypes$4;
	Navbar.defaultProps = defaultProps$3;

	var propTypes$5 = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$4 = {
	  tag: 'a'
	};

	var NavbarBrand = function NavbarBrand(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'navbar-brand'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	NavbarBrand.propTypes = propTypes$5;
	NavbarBrand.defaultProps = defaultProps$4;

	var propTypes$6 = {
	  tag: tagPropType,
	  type: propTypes.string,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  children: propTypes.node
	};
	var defaultProps$5 = {
	  tag: 'button',
	  type: 'button'
	};

	var NavbarToggler = function NavbarToggler(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      children = props.children,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "children", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'navbar-toggler'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }), children || React__default.createElement("span", {
	    className: mapToCssModules('navbar-toggler-icon', cssModule)
	  }));
	};

	NavbarToggler.propTypes = propTypes$6;
	NavbarToggler.defaultProps = defaultProps$5;

	var propTypes$7 = {
	  tabs: propTypes.bool,
	  pills: propTypes.bool,
	  vertical: propTypes.oneOfType([propTypes.bool, propTypes.string]),
	  horizontal: propTypes.string,
	  justified: propTypes.bool,
	  fill: propTypes.bool,
	  navbar: propTypes.bool,
	  card: propTypes.bool,
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$6 = {
	  tag: 'ul',
	  vertical: false
	};

	var getVerticalClass = function getVerticalClass(vertical) {
	  if (vertical === false) {
	    return false;
	  } else if (vertical === true || vertical === 'xs') {
	    return 'flex-column';
	  }

	  return "flex-" + vertical + "-column";
	};

	var Nav = function Nav(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      tabs = props.tabs,
	      pills = props.pills,
	      vertical = props.vertical,
	      horizontal = props.horizontal,
	      justified = props.justified,
	      fill = props.fill,
	      navbar = props.navbar,
	      card = props.card,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tabs", "pills", "vertical", "horizontal", "justified", "fill", "navbar", "card", "tag"]);

	  var classes = mapToCssModules(classnames(className, navbar ? 'navbar-nav' : 'nav', horizontal ? "justify-content-" + horizontal : false, getVerticalClass(vertical), {
	    'nav-tabs': tabs,
	    'card-header-tabs': card && tabs,
	    'nav-pills': pills,
	    'card-header-pills': card && pills,
	    'nav-justified': justified,
	    'nav-fill': fill
	  }), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	Nav.propTypes = propTypes$7;
	Nav.defaultProps = defaultProps$6;

	var propTypes$8 = {
	  tag: tagPropType,
	  active: propTypes.bool,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$7 = {
	  tag: 'li'
	};

	var NavItem = function NavItem(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      active = props.active,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "active", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'nav-item', active ? 'active' : false), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	NavItem.propTypes = propTypes$8;
	NavItem.defaultProps = defaultProps$7;

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	var propTypes$9 = {
	  tag: tagPropType,
	  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string]),
	  disabled: propTypes.bool,
	  active: propTypes.bool,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  onClick: propTypes.func,
	  href: propTypes.any
	};
	var defaultProps$8 = {
	  tag: 'a'
	};

	var NavLink =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(NavLink, _React$Component);

	  function NavLink(props) {
	    var _this;

	    _this = _React$Component.call(this, props) || this;
	    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
	    return _this;
	  }

	  var _proto = NavLink.prototype;

	  _proto.onClick = function onClick(e) {
	    if (this.props.disabled) {
	      e.preventDefault();
	      return;
	    }

	    if (this.props.href === '#') {
	      e.preventDefault();
	    }

	    if (this.props.onClick) {
	      this.props.onClick(e);
	    }
	  };

	  _proto.render = function render() {
	    var _this$props = this.props,
	        className = _this$props.className,
	        cssModule = _this$props.cssModule,
	        active = _this$props.active,
	        Tag = _this$props.tag,
	        innerRef = _this$props.innerRef,
	        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "active", "tag", "innerRef"]);

	    var classes = mapToCssModules(classnames(className, 'nav-link', {
	      disabled: attributes.disabled,
	      active: active
	    }), cssModule);
	    return React__default.createElement(Tag, _extends({}, attributes, {
	      ref: innerRef,
	      onClick: this.onClick,
	      className: classes
	    }));
	  };

	  return NavLink;
	}(React__default.Component);

	NavLink.propTypes = propTypes$9;
	NavLink.defaultProps = defaultProps$8;

	var propTypes$a = {
	  tag: tagPropType,
	  listTag: tagPropType,
	  className: propTypes.string,
	  listClassName: propTypes.string,
	  cssModule: propTypes.object,
	  children: propTypes.node,
	  'aria-label': propTypes.string
	};
	var defaultProps$9 = {
	  tag: 'nav',
	  listTag: 'ol',
	  'aria-label': 'breadcrumb'
	};

	var Breadcrumb = function Breadcrumb(props) {
	  var className = props.className,
	      listClassName = props.listClassName,
	      cssModule = props.cssModule,
	      children = props.children,
	      Tag = props.tag,
	      ListTag = props.listTag,
	      label = props['aria-label'],
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "listClassName", "cssModule", "children", "tag", "listTag", "aria-label"]);

	  var classes = mapToCssModules(classnames(className), cssModule);
	  var listClasses = mapToCssModules(classnames('breadcrumb', listClassName), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes,
	    "aria-label": label
	  }), React__default.createElement(ListTag, {
	    className: listClasses
	  }, children));
	};

	Breadcrumb.propTypes = propTypes$a;
	Breadcrumb.defaultProps = defaultProps$9;

	var propTypes$b = {
	  tag: tagPropType,
	  active: propTypes.bool,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$a = {
	  tag: 'li'
	};

	var BreadcrumbItem = function BreadcrumbItem(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      active = props.active,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "active", "tag"]);

	  var classes = mapToCssModules(classnames(className, active ? 'active' : false, 'breadcrumb-item'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes,
	    "aria-current": active ? 'page' : undefined
	  }));
	};

	BreadcrumbItem.propTypes = propTypes$b;
	BreadcrumbItem.defaultProps = defaultProps$a;

	var propTypes$c = {
	  active: propTypes.bool,
	  'aria-label': propTypes.string,
	  block: propTypes.bool,
	  color: propTypes.string,
	  disabled: propTypes.bool,
	  outline: propTypes.bool,
	  tag: tagPropType,
	  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string]),
	  onClick: propTypes.func,
	  size: propTypes.string,
	  children: propTypes.node,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  close: propTypes.bool
	};
	var defaultProps$b = {
	  color: 'secondary',
	  tag: 'button'
	};

	var Button =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(Button, _React$Component);

	  function Button(props) {
	    var _this;

	    _this = _React$Component.call(this, props) || this;
	    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
	    return _this;
	  }

	  var _proto = Button.prototype;

	  _proto.onClick = function onClick(e) {
	    if (this.props.disabled) {
	      e.preventDefault();
	      return;
	    }

	    if (this.props.onClick) {
	      this.props.onClick(e);
	    }
	  };

	  _proto.render = function render() {
	    var _this$props = this.props,
	        active = _this$props.active,
	        ariaLabel = _this$props['aria-label'],
	        block = _this$props.block,
	        className = _this$props.className,
	        close = _this$props.close,
	        cssModule = _this$props.cssModule,
	        color = _this$props.color,
	        outline = _this$props.outline,
	        size = _this$props.size,
	        Tag = _this$props.tag,
	        innerRef = _this$props.innerRef,
	        attributes = _objectWithoutPropertiesLoose(_this$props, ["active", "aria-label", "block", "className", "close", "cssModule", "color", "outline", "size", "tag", "innerRef"]);

	    if (close && typeof attributes.children === 'undefined') {
	      attributes.children = React__default.createElement("span", {
	        "aria-hidden": true
	      }, "\xD7");
	    }

	    var btnOutlineColor = "btn" + (outline ? '-outline' : '') + "-" + color;
	    var classes = mapToCssModules(classnames(className, {
	      close: close
	    }, close || 'btn', close || btnOutlineColor, size ? "btn-" + size : false, block ? 'btn-block' : false, {
	      active: active,
	      disabled: this.props.disabled
	    }), cssModule);

	    if (attributes.href && Tag === 'button') {
	      Tag = 'a';
	    }

	    var defaultAriaLabel = close ? 'Close' : null;
	    return React__default.createElement(Tag, _extends({
	      type: Tag === 'button' && attributes.onClick ? 'button' : undefined
	    }, attributes, {
	      className: classes,
	      ref: innerRef,
	      onClick: this.onClick,
	      "aria-label": ariaLabel || defaultAriaLabel
	    }));
	  };

	  return Button;
	}(React__default.Component);

	Button.propTypes = propTypes$c;
	Button.defaultProps = defaultProps$b;

	function _objectWithoutPropertiesLoose$1(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose$1;

	var _extends_1 = createCommonjsModule(function (module) {
	  function _extends() {
	    module.exports = _extends = Object.assign || function (target) {
	      for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];

	        for (var key in source) {
	          if (Object.prototype.hasOwnProperty.call(source, key)) {
	            target[key] = source[key];
	          }
	        }
	      }

	      return target;
	    };

	    return _extends.apply(this, arguments);
	  }

	  module.exports = _extends;
	});

	function _assertThisInitialized$1(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	var assertThisInitialized = _assertThisInitialized$1;

	function _inheritsLoose$1(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	var inheritsLoose = _inheritsLoose$1;

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	var defineProperty = _defineProperty;

	/**!
	 * @fileOverview Kickass library to create and place poppers near their reference elements.
	 * @version 1.15.0
	 * @license
	 * Copyright (c) 2016 Federico Zivolo and contributors
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 * SOFTWARE.
	 */
	var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
	var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
	var timeoutDuration = 0;

	for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
	  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
	    timeoutDuration = 1;
	    break;
	  }
	}

	function microtaskDebounce(fn) {
	  var called = false;
	  return function () {
	    if (called) {
	      return;
	    }

	    called = true;
	    window.Promise.resolve().then(function () {
	      called = false;
	      fn();
	    });
	  };
	}

	function taskDebounce(fn) {
	  var scheduled = false;
	  return function () {
	    if (!scheduled) {
	      scheduled = true;
	      setTimeout(function () {
	        scheduled = false;
	        fn();
	      }, timeoutDuration);
	    }
	  };
	}

	var supportsMicroTasks = isBrowser && window.Promise;
	/**
	* Create a debounced version of a method, that's asynchronously deferred
	* but called in the minimum time possible.
	*
	* @method
	* @memberof Popper.Utils
	* @argument {Function} fn
	* @returns {Function}
	*/

	var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
	/**
	 * Check if the given variable is a function
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Any} functionToCheck - variable to check
	 * @returns {Boolean} answer to: is a function?
	 */

	function isFunction$1(functionToCheck) {
	  var getType = {};
	  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	}
	/**
	 * Get CSS computed property of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Eement} element
	 * @argument {String} property
	 */


	function getStyleComputedProperty(element, property) {
	  if (element.nodeType !== 1) {
	    return [];
	  } // NOTE: 1 DOM access here


	  var window = element.ownerDocument.defaultView;
	  var css = window.getComputedStyle(element, null);
	  return property ? css[property] : css;
	}
	/**
	 * Returns the parentNode or the host of the element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} parent
	 */


	function getParentNode(element) {
	  if (element.nodeName === 'HTML') {
	    return element;
	  }

	  return element.parentNode || element.host;
	}
	/**
	 * Returns the scrolling parent of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} scroll parent
	 */


	function getScrollParent(element) {
	  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
	  if (!element) {
	    return document.body;
	  }

	  switch (element.nodeName) {
	    case 'HTML':
	    case 'BODY':
	      return element.ownerDocument.body;

	    case '#document':
	      return element.body;
	  } // Firefox want us to check `-x` and `-y` variations as well


	  var _getStyleComputedProp = getStyleComputedProperty(element),
	      overflow = _getStyleComputedProp.overflow,
	      overflowX = _getStyleComputedProp.overflowX,
	      overflowY = _getStyleComputedProp.overflowY;

	  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
	    return element;
	  }

	  return getScrollParent(getParentNode(element));
	}

	var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
	var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
	/**
	 * Determines if the browser is Internet Explorer
	 * @method
	 * @memberof Popper.Utils
	 * @param {Number} version to check
	 * @returns {Boolean} isIE
	 */

	function isIE(version) {
	  if (version === 11) {
	    return isIE11;
	  }

	  if (version === 10) {
	    return isIE10;
	  }

	  return isIE11 || isIE10;
	}
	/**
	 * Returns the offset parent of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} offset parent
	 */


	function getOffsetParent(element) {
	  if (!element) {
	    return document.documentElement;
	  }

	  var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

	  var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

	  while (offsetParent === noOffsetParent && element.nextElementSibling) {
	    offsetParent = (element = element.nextElementSibling).offsetParent;
	  }

	  var nodeName = offsetParent && offsetParent.nodeName;

	  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
	    return element ? element.ownerDocument.documentElement : document.documentElement;
	  } // .offsetParent will return the closest TH, TD or TABLE in case
	  // no offsetParent is present, I hate this job...


	  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
	    return getOffsetParent(offsetParent);
	  }

	  return offsetParent;
	}

	function isOffsetContainer(element) {
	  var nodeName = element.nodeName;

	  if (nodeName === 'BODY') {
	    return false;
	  }

	  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
	}
	/**
	 * Finds the root node (document, shadowDOM root) of the given element
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} node
	 * @returns {Element} root node
	 */


	function getRoot(node) {
	  if (node.parentNode !== null) {
	    return getRoot(node.parentNode);
	  }

	  return node;
	}
	/**
	 * Finds the offset parent common to the two provided nodes
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element1
	 * @argument {Element} element2
	 * @returns {Element} common offset parent
	 */


	function findCommonOffsetParent(element1, element2) {
	  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
	  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
	    return document.documentElement;
	  } // Here we make sure to give as "start" the element that comes first in the DOM


	  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
	  var start = order ? element1 : element2;
	  var end = order ? element2 : element1; // Get common ancestor container

	  var range = document.createRange();
	  range.setStart(start, 0);
	  range.setEnd(end, 0);
	  var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

	  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
	    if (isOffsetContainer(commonAncestorContainer)) {
	      return commonAncestorContainer;
	    }

	    return getOffsetParent(commonAncestorContainer);
	  } // one of the nodes is inside shadowDOM, find which one


	  var element1root = getRoot(element1);

	  if (element1root.host) {
	    return findCommonOffsetParent(element1root.host, element2);
	  } else {
	    return findCommonOffsetParent(element1, getRoot(element2).host);
	  }
	}
	/**
	 * Gets the scroll value of the given element in the given side (top and left)
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @argument {String} side `top` or `left`
	 * @returns {number} amount of scrolled pixels
	 */


	function getScroll(element) {
	  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
	  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
	  var nodeName = element.nodeName;

	  if (nodeName === 'BODY' || nodeName === 'HTML') {
	    var html = element.ownerDocument.documentElement;
	    var scrollingElement = element.ownerDocument.scrollingElement || html;
	    return scrollingElement[upperSide];
	  }

	  return element[upperSide];
	}
	/*
	 * Sum or subtract the element scroll values (left and top) from a given rect object
	 * @method
	 * @memberof Popper.Utils
	 * @param {Object} rect - Rect object you want to change
	 * @param {HTMLElement} element - The element from the function reads the scroll values
	 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
	 * @return {Object} rect - The modifier rect object
	 */


	function includeScroll(rect, element) {
	  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	  var scrollTop = getScroll(element, 'top');
	  var scrollLeft = getScroll(element, 'left');
	  var modifier = subtract ? -1 : 1;
	  rect.top += scrollTop * modifier;
	  rect.bottom += scrollTop * modifier;
	  rect.left += scrollLeft * modifier;
	  rect.right += scrollLeft * modifier;
	  return rect;
	}
	/*
	 * Helper to detect borders of a given element
	 * @method
	 * @memberof Popper.Utils
	 * @param {CSSStyleDeclaration} styles
	 * Result of `getStyleComputedProperty` on the given element
	 * @param {String} axis - `x` or `y`
	 * @return {number} borders - The borders size of the given axis
	 */


	function getBordersSize(styles, axis) {
	  var sideA = axis === 'x' ? 'Left' : 'Top';
	  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
	  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
	}

	function getSize(axis, body, html, computedStyle) {
	  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
	}

	function getWindowSizes(document) {
	  var body = document.body;
	  var html = document.documentElement;
	  var computedStyle = isIE(10) && getComputedStyle(html);
	  return {
	    height: getSize('Height', body, html, computedStyle),
	    width: getSize('Width', body, html, computedStyle)
	  };
	}

	var classCallCheck = function classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

	var defineProperty$1 = function defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

	var _extends$1 = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};
	/**
	 * Given element offsets, generate an output similar to getBoundingClientRect
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Object} offsets
	 * @returns {Object} ClientRect like output
	 */


	function getClientRect(offsets) {
	  return _extends$1({}, offsets, {
	    right: offsets.left + offsets.width,
	    bottom: offsets.top + offsets.height
	  });
	}
	/**
	 * Get bounding client rect of given element
	 * @method
	 * @memberof Popper.Utils
	 * @param {HTMLElement} element
	 * @return {Object} client rect
	 */


	function getBoundingClientRect(element) {
	  var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
	  // considered in DOM in some circumstances...
	  // This isn't reproducible in IE10 compatibility mode of IE11

	  try {
	    if (isIE(10)) {
	      rect = element.getBoundingClientRect();
	      var scrollTop = getScroll(element, 'top');
	      var scrollLeft = getScroll(element, 'left');
	      rect.top += scrollTop;
	      rect.left += scrollLeft;
	      rect.bottom += scrollTop;
	      rect.right += scrollLeft;
	    } else {
	      rect = element.getBoundingClientRect();
	    }
	  } catch (e) {}

	  var result = {
	    left: rect.left,
	    top: rect.top,
	    width: rect.right - rect.left,
	    height: rect.bottom - rect.top
	  }; // subtract scrollbar size from sizes

	  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
	  var width = sizes.width || element.clientWidth || result.right - result.left;
	  var height = sizes.height || element.clientHeight || result.bottom - result.top;
	  var horizScrollbar = element.offsetWidth - width;
	  var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
	  // we make this check conditional for performance reasons

	  if (horizScrollbar || vertScrollbar) {
	    var styles = getStyleComputedProperty(element);
	    horizScrollbar -= getBordersSize(styles, 'x');
	    vertScrollbar -= getBordersSize(styles, 'y');
	    result.width -= horizScrollbar;
	    result.height -= vertScrollbar;
	  }

	  return getClientRect(result);
	}

	function getOffsetRectRelativeToArbitraryNode(children, parent) {
	  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	  var isIE10 = isIE(10);
	  var isHTML = parent.nodeName === 'HTML';
	  var childrenRect = getBoundingClientRect(children);
	  var parentRect = getBoundingClientRect(parent);
	  var scrollParent = getScrollParent(children);
	  var styles = getStyleComputedProperty(parent);
	  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
	  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

	  if (fixedPosition && isHTML) {
	    parentRect.top = Math.max(parentRect.top, 0);
	    parentRect.left = Math.max(parentRect.left, 0);
	  }

	  var offsets = getClientRect({
	    top: childrenRect.top - parentRect.top - borderTopWidth,
	    left: childrenRect.left - parentRect.left - borderLeftWidth,
	    width: childrenRect.width,
	    height: childrenRect.height
	  });
	  offsets.marginTop = 0;
	  offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
	  // we do this only on HTML because it's the only element that behaves
	  // differently when margins are applied to it. The margins are included in
	  // the box of the documentElement, in the other cases not.

	  if (!isIE10 && isHTML) {
	    var marginTop = parseFloat(styles.marginTop, 10);
	    var marginLeft = parseFloat(styles.marginLeft, 10);
	    offsets.top -= borderTopWidth - marginTop;
	    offsets.bottom -= borderTopWidth - marginTop;
	    offsets.left -= borderLeftWidth - marginLeft;
	    offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

	    offsets.marginTop = marginTop;
	    offsets.marginLeft = marginLeft;
	  }

	  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
	    offsets = includeScroll(offsets, parent);
	  }

	  return offsets;
	}

	function getViewportOffsetRectRelativeToArtbitraryNode(element) {
	  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	  var html = element.ownerDocument.documentElement;
	  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
	  var width = Math.max(html.clientWidth, window.innerWidth || 0);
	  var height = Math.max(html.clientHeight, window.innerHeight || 0);
	  var scrollTop = !excludeScroll ? getScroll(html) : 0;
	  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
	  var offset = {
	    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
	    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
	    width: width,
	    height: height
	  };
	  return getClientRect(offset);
	}
	/**
	 * Check if the given element is fixed or is inside a fixed parent
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @argument {Element} customContainer
	 * @returns {Boolean} answer to "isFixed?"
	 */


	function isFixed(element) {
	  var nodeName = element.nodeName;

	  if (nodeName === 'BODY' || nodeName === 'HTML') {
	    return false;
	  }

	  if (getStyleComputedProperty(element, 'position') === 'fixed') {
	    return true;
	  }

	  var parentNode = getParentNode(element);

	  if (!parentNode) {
	    return false;
	  }

	  return isFixed(parentNode);
	}
	/**
	 * Finds the first parent of an element that has a transformed property defined
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Element} first transformed parent or documentElement
	 */


	function getFixedPositionOffsetParent(element) {
	  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
	  if (!element || !element.parentElement || isIE()) {
	    return document.documentElement;
	  }

	  var el = element.parentElement;

	  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
	    el = el.parentElement;
	  }

	  return el || document.documentElement;
	}
	/**
	 * Computed the boundaries limits and return them
	 * @method
	 * @memberof Popper.Utils
	 * @param {HTMLElement} popper
	 * @param {HTMLElement} reference
	 * @param {number} padding
	 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
	 * @param {Boolean} fixedPosition - Is in fixed position mode
	 * @returns {Object} Coordinates of the boundaries
	 */


	function getBoundaries(popper, reference, padding, boundariesElement) {
	  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false; // NOTE: 1 DOM access here

	  var boundaries = {
	    top: 0,
	    left: 0
	  };
	  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference); // Handle viewport case

	  if (boundariesElement === 'viewport') {
	    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
	  } else {
	    // Handle other cases based on DOM element used as boundaries
	    var boundariesNode = void 0;

	    if (boundariesElement === 'scrollParent') {
	      boundariesNode = getScrollParent(getParentNode(reference));

	      if (boundariesNode.nodeName === 'BODY') {
	        boundariesNode = popper.ownerDocument.documentElement;
	      }
	    } else if (boundariesElement === 'window') {
	      boundariesNode = popper.ownerDocument.documentElement;
	    } else {
	      boundariesNode = boundariesElement;
	    }

	    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

	    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
	      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
	          height = _getWindowSizes.height,
	          width = _getWindowSizes.width;

	      boundaries.top += offsets.top - offsets.marginTop;
	      boundaries.bottom = height + offsets.top;
	      boundaries.left += offsets.left - offsets.marginLeft;
	      boundaries.right = width + offsets.left;
	    } else {
	      // for all the other DOM elements, this one is good
	      boundaries = offsets;
	    }
	  } // Add paddings


	  padding = padding || 0;
	  var isPaddingNumber = typeof padding === 'number';
	  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
	  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
	  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
	  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
	  return boundaries;
	}

	function getArea(_ref) {
	  var width = _ref.width,
	      height = _ref.height;
	  return width * height;
	}
	/**
	 * Utility used to transform the `auto` placement to the placement with more
	 * available space.
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */


	function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
	  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

	  if (placement.indexOf('auto') === -1) {
	    return placement;
	  }

	  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
	  var rects = {
	    top: {
	      width: boundaries.width,
	      height: refRect.top - boundaries.top
	    },
	    right: {
	      width: boundaries.right - refRect.right,
	      height: boundaries.height
	    },
	    bottom: {
	      width: boundaries.width,
	      height: boundaries.bottom - refRect.bottom
	    },
	    left: {
	      width: refRect.left - boundaries.left,
	      height: boundaries.height
	    }
	  };
	  var sortedAreas = Object.keys(rects).map(function (key) {
	    return _extends$1({
	      key: key
	    }, rects[key], {
	      area: getArea(rects[key])
	    });
	  }).sort(function (a, b) {
	    return b.area - a.area;
	  });
	  var filteredAreas = sortedAreas.filter(function (_ref2) {
	    var width = _ref2.width,
	        height = _ref2.height;
	    return width >= popper.clientWidth && height >= popper.clientHeight;
	  });
	  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
	  var variation = placement.split('-')[1];
	  return computedPlacement + (variation ? '-' + variation : '');
	}
	/**
	 * Get offsets to the reference element
	 * @method
	 * @memberof Popper.Utils
	 * @param {Object} state
	 * @param {Element} popper - the popper element
	 * @param {Element} reference - the reference element (the popper will be relative to this)
	 * @param {Element} fixedPosition - is in fixed position mode
	 * @returns {Object} An object containing the offsets which will be applied to the popper
	 */


	function getReferenceOffsets(state, popper, reference) {
	  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
	  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
	}
	/**
	 * Get the outer sizes of the given element (offset size + margins)
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element
	 * @returns {Object} object containing width and height properties
	 */


	function getOuterSizes(element) {
	  var window = element.ownerDocument.defaultView;
	  var styles = window.getComputedStyle(element);
	  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
	  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
	  var result = {
	    width: element.offsetWidth + y,
	    height: element.offsetHeight + x
	  };
	  return result;
	}
	/**
	 * Get the opposite placement of the given one
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} placement
	 * @returns {String} flipped placement
	 */


	function getOppositePlacement(placement) {
	  var hash = {
	    left: 'right',
	    right: 'left',
	    bottom: 'top',
	    top: 'bottom'
	  };
	  return placement.replace(/left|right|bottom|top/g, function (matched) {
	    return hash[matched];
	  });
	}
	/**
	 * Get offsets to the popper
	 * @method
	 * @memberof Popper.Utils
	 * @param {Object} position - CSS position the Popper will get applied
	 * @param {HTMLElement} popper - the popper element
	 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
	 * @param {String} placement - one of the valid placement options
	 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
	 */


	function getPopperOffsets(popper, referenceOffsets, placement) {
	  placement = placement.split('-')[0]; // Get popper node sizes

	  var popperRect = getOuterSizes(popper); // Add position, width and height to our offsets object

	  var popperOffsets = {
	    width: popperRect.width,
	    height: popperRect.height
	  }; // depending by the popper placement we have to compute its offsets slightly differently

	  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
	  var mainSide = isHoriz ? 'top' : 'left';
	  var secondarySide = isHoriz ? 'left' : 'top';
	  var measurement = isHoriz ? 'height' : 'width';
	  var secondaryMeasurement = !isHoriz ? 'height' : 'width';
	  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;

	  if (placement === secondarySide) {
	    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
	  } else {
	    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
	  }

	  return popperOffsets;
	}
	/**
	 * Mimics the `find` method of Array
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Array} arr
	 * @argument prop
	 * @argument value
	 * @returns index or -1
	 */


	function find(arr, check) {
	  // use native find if supported
	  if (Array.prototype.find) {
	    return arr.find(check);
	  } // use `filter` to obtain the same behavior of `find`


	  return arr.filter(check)[0];
	}
	/**
	 * Return the index of the matching object
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Array} arr
	 * @argument prop
	 * @argument value
	 * @returns index or -1
	 */


	function findIndex(arr, prop, value) {
	  // use native findIndex if supported
	  if (Array.prototype.findIndex) {
	    return arr.findIndex(function (cur) {
	      return cur[prop] === value;
	    });
	  } // use `find` + `indexOf` if `findIndex` isn't supported


	  var match = find(arr, function (obj) {
	    return obj[prop] === value;
	  });
	  return arr.indexOf(match);
	}
	/**
	 * Loop trough the list of modifiers and run them in order,
	 * each of them will then edit the data object.
	 * @method
	 * @memberof Popper.Utils
	 * @param {dataObject} data
	 * @param {Array} modifiers
	 * @param {String} ends - Optional modifier name used as stopper
	 * @returns {dataObject}
	 */


	function runModifiers(modifiers, data, ends) {
	  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
	  modifiersToRun.forEach(function (modifier) {
	    if (modifier['function']) {
	      // eslint-disable-line dot-notation
	      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
	    }

	    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation

	    if (modifier.enabled && isFunction$1(fn)) {
	      // Add properties to offsets to make them a complete clientRect object
	      // we do this before each modifier to make sure the previous one doesn't
	      // mess with these values
	      data.offsets.popper = getClientRect(data.offsets.popper);
	      data.offsets.reference = getClientRect(data.offsets.reference);
	      data = fn(data, modifier);
	    }
	  });
	  return data;
	}
	/**
	 * Updates the position of the popper, computing the new offsets and applying
	 * the new style.<br />
	 * Prefer `scheduleUpdate` over `update` because of performance reasons.
	 * @method
	 * @memberof Popper
	 */


	function update() {
	  // if popper is destroyed, don't perform any further update
	  if (this.state.isDestroyed) {
	    return;
	  }

	  var data = {
	    instance: this,
	    styles: {},
	    arrowStyles: {},
	    attributes: {},
	    flipped: false,
	    offsets: {}
	  }; // compute reference element offsets

	  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed); // compute auto placement, store placement inside the data object,
	  // modifiers will be able to edit `placement` if needed
	  // and refer to originalPlacement to know the original value

	  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding); // store the computed placement inside `originalPlacement`

	  data.originalPlacement = data.placement;
	  data.positionFixed = this.options.positionFixed; // compute the popper offsets

	  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
	  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'; // run the modifiers

	  data = runModifiers(this.modifiers, data); // the first `update` will call `onCreate` callback
	  // the other ones will call `onUpdate` callback

	  if (!this.state.isCreated) {
	    this.state.isCreated = true;
	    this.options.onCreate(data);
	  } else {
	    this.options.onUpdate(data);
	  }
	}
	/**
	 * Helper used to know if the given modifier is enabled.
	 * @method
	 * @memberof Popper.Utils
	 * @returns {Boolean}
	 */


	function isModifierEnabled(modifiers, modifierName) {
	  return modifiers.some(function (_ref) {
	    var name = _ref.name,
	        enabled = _ref.enabled;
	    return enabled && name === modifierName;
	  });
	}
	/**
	 * Get the prefixed supported property name
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} property (camelCase)
	 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
	 */


	function getSupportedPropertyName(property) {
	  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
	  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

	  for (var i = 0; i < prefixes.length; i++) {
	    var prefix = prefixes[i];
	    var toCheck = prefix ? '' + prefix + upperProp : property;

	    if (typeof document.body.style[toCheck] !== 'undefined') {
	      return toCheck;
	    }
	  }

	  return null;
	}
	/**
	 * Destroys the popper.
	 * @method
	 * @memberof Popper
	 */


	function destroy() {
	  this.state.isDestroyed = true; // touch DOM only if `applyStyle` modifier is enabled

	  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
	    this.popper.removeAttribute('x-placement');
	    this.popper.style.position = '';
	    this.popper.style.top = '';
	    this.popper.style.left = '';
	    this.popper.style.right = '';
	    this.popper.style.bottom = '';
	    this.popper.style.willChange = '';
	    this.popper.style[getSupportedPropertyName('transform')] = '';
	  }

	  this.disableEventListeners(); // remove the popper if user explicity asked for the deletion on destroy
	  // do not use `remove` because IE11 doesn't support it

	  if (this.options.removeOnDestroy) {
	    this.popper.parentNode.removeChild(this.popper);
	  }

	  return this;
	}
	/**
	 * Get the window associated with the element
	 * @argument {Element} element
	 * @returns {Window}
	 */


	function getWindow(element) {
	  var ownerDocument = element.ownerDocument;
	  return ownerDocument ? ownerDocument.defaultView : window;
	}

	function attachToScrollParents(scrollParent, event, callback, scrollParents) {
	  var isBody = scrollParent.nodeName === 'BODY';
	  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
	  target.addEventListener(event, callback, {
	    passive: true
	  });

	  if (!isBody) {
	    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
	  }

	  scrollParents.push(target);
	}
	/**
	 * Setup needed event listeners used to update the popper position
	 * @method
	 * @memberof Popper.Utils
	 * @private
	 */


	function setupEventListeners(reference, options, state, updateBound) {
	  // Resize event listener on window
	  state.updateBound = updateBound;
	  getWindow(reference).addEventListener('resize', state.updateBound, {
	    passive: true
	  }); // Scroll event listener on scroll parents

	  var scrollElement = getScrollParent(reference);
	  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
	  state.scrollElement = scrollElement;
	  state.eventsEnabled = true;
	  return state;
	}
	/**
	 * It will add resize/scroll events and start recalculating
	 * position of the popper element when they are triggered.
	 * @method
	 * @memberof Popper
	 */


	function enableEventListeners() {
	  if (!this.state.eventsEnabled) {
	    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
	  }
	}
	/**
	 * Remove event listeners used to update the popper position
	 * @method
	 * @memberof Popper.Utils
	 * @private
	 */


	function removeEventListeners(reference, state) {
	  // Remove resize event listener on window
	  getWindow(reference).removeEventListener('resize', state.updateBound); // Remove scroll event listener on scroll parents

	  state.scrollParents.forEach(function (target) {
	    target.removeEventListener('scroll', state.updateBound);
	  }); // Reset state

	  state.updateBound = null;
	  state.scrollParents = [];
	  state.scrollElement = null;
	  state.eventsEnabled = false;
	  return state;
	}
	/**
	 * It will remove resize/scroll events and won't recalculate popper position
	 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
	 * unless you call `update` method manually.
	 * @method
	 * @memberof Popper
	 */


	function disableEventListeners() {
	  if (this.state.eventsEnabled) {
	    cancelAnimationFrame(this.scheduleUpdate);
	    this.state = removeEventListeners(this.reference, this.state);
	  }
	}
	/**
	 * Tells if a given input is a number
	 * @method
	 * @memberof Popper.Utils
	 * @param {*} input to check
	 * @return {Boolean}
	 */


	function isNumeric(n) {
	  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
	}
	/**
	 * Set the style to the given popper
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element - Element to apply the style to
	 * @argument {Object} styles
	 * Object with a list of properties and values which will be applied to the element
	 */


	function setStyles(element, styles) {
	  Object.keys(styles).forEach(function (prop) {
	    var unit = ''; // add unit if the value is numeric and is one of the following

	    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
	      unit = 'px';
	    }

	    element.style[prop] = styles[prop] + unit;
	  });
	}
	/**
	 * Set the attributes to the given popper
	 * @method
	 * @memberof Popper.Utils
	 * @argument {Element} element - Element to apply the attributes to
	 * @argument {Object} styles
	 * Object with a list of properties and values which will be applied to the element
	 */


	function setAttributes(element, attributes) {
	  Object.keys(attributes).forEach(function (prop) {
	    var value = attributes[prop];

	    if (value !== false) {
	      element.setAttribute(prop, attributes[prop]);
	    } else {
	      element.removeAttribute(prop);
	    }
	  });
	}
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} data.styles - List of style properties - values to apply to popper element
	 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The same data object
	 */


	function applyStyle(data) {
	  // any property present in `data.styles` will be applied to the popper,
	  // in this way we can make the 3rd party modifiers add custom styles to it
	  // Be aware, modifiers could override the properties defined in the previous
	  // lines of this modifier!
	  setStyles(data.instance.popper, data.styles); // any property present in `data.attributes` will be applied to the popper,
	  // they will be set as HTML attributes of the element

	  setAttributes(data.instance.popper, data.attributes); // if arrowElement is defined and arrowStyles has some properties

	  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
	    setStyles(data.arrowElement, data.arrowStyles);
	  }

	  return data;
	}
	/**
	 * Set the x-placement attribute before everything else because it could be used
	 * to add margins to the popper margins needs to be calculated to get the
	 * correct popper offsets.
	 * @method
	 * @memberof Popper.modifiers
	 * @param {HTMLElement} reference - The reference element used to position the popper
	 * @param {HTMLElement} popper - The HTML element used as popper
	 * @param {Object} options - Popper.js options
	 */


	function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
	  // compute reference element offsets
	  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed); // compute auto placement, store placement inside the data object,
	  // modifiers will be able to edit `placement` if needed
	  // and refer to originalPlacement to know the original value

	  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
	  popper.setAttribute('x-placement', placement); // Apply `position` to popper before anything else because
	  // without the position applied we can't guarantee correct computations

	  setStyles(popper, {
	    position: options.positionFixed ? 'fixed' : 'absolute'
	  });
	  return options;
	}
	/**
	 * @function
	 * @memberof Popper.Utils
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
	 * @returns {Object} The popper's position offsets rounded
	 *
	 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
	 * good as it can be within reason.
	 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
	 *
	 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
	 * as well on High DPI screens).
	 *
	 * Firefox prefers no rounding for positioning and does not have blurriness on
	 * high DPI screens.
	 *
	 * Only horizontal placement and left/right values need to be considered.
	 */


	function getRoundedOffsets(data, shouldRound) {
	  var _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;
	  var round = Math.round,
	      floor = Math.floor;

	  var noRound = function noRound(v) {
	    return v;
	  };

	  var referenceWidth = round(reference.width);
	  var popperWidth = round(popper.width);
	  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
	  var isVariation = data.placement.indexOf('-') !== -1;
	  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
	  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
	  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
	  var verticalToInteger = !shouldRound ? noRound : round;
	  return {
	    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
	    top: verticalToInteger(popper.top),
	    bottom: verticalToInteger(popper.bottom),
	    right: horizontalToInteger(popper.right)
	  };
	}

	var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */

	function computeStyle(data, options) {
	  var x = options.x,
	      y = options.y;
	  var popper = data.offsets.popper; // Remove this legacy support in Popper.js v2

	  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
	    return modifier.name === 'applyStyle';
	  }).gpuAcceleration;

	  if (legacyGpuAccelerationOption !== undefined) {
	    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
	  }

	  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
	  var offsetParent = getOffsetParent(data.instance.popper);
	  var offsetParentRect = getBoundingClientRect(offsetParent); // Styles

	  var styles = {
	    position: popper.position
	  };
	  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
	  var sideA = x === 'bottom' ? 'top' : 'bottom';
	  var sideB = y === 'right' ? 'left' : 'right'; // if gpuAcceleration is set to `true` and transform is supported,
	  //  we use `translate3d` to apply the position to the popper we
	  // automatically use the supported prefixed version if needed

	  var prefixedProperty = getSupportedPropertyName('transform'); // now, let's make a step back and look at this code closely (wtf?)
	  // If the content of the popper grows once it's been positioned, it
	  // may happen that the popper gets misplaced because of the new content
	  // overflowing its reference element
	  // To avoid this problem, we provide two options (x and y), which allow
	  // the consumer to define the offset origin.
	  // If we position a popper on top of a reference element, we can set
	  // `x` to `top` to make the popper grow towards its top instead of
	  // its bottom.

	  var left = void 0,
	      top = void 0;

	  if (sideA === 'bottom') {
	    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
	    // and not the bottom of the html element
	    if (offsetParent.nodeName === 'HTML') {
	      top = -offsetParent.clientHeight + offsets.bottom;
	    } else {
	      top = -offsetParentRect.height + offsets.bottom;
	    }
	  } else {
	    top = offsets.top;
	  }

	  if (sideB === 'right') {
	    if (offsetParent.nodeName === 'HTML') {
	      left = -offsetParent.clientWidth + offsets.right;
	    } else {
	      left = -offsetParentRect.width + offsets.right;
	    }
	  } else {
	    left = offsets.left;
	  }

	  if (gpuAcceleration && prefixedProperty) {
	    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
	    styles[sideA] = 0;
	    styles[sideB] = 0;
	    styles.willChange = 'transform';
	  } else {
	    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
	    var invertTop = sideA === 'bottom' ? -1 : 1;
	    var invertLeft = sideB === 'right' ? -1 : 1;
	    styles[sideA] = top * invertTop;
	    styles[sideB] = left * invertLeft;
	    styles.willChange = sideA + ', ' + sideB;
	  } // Attributes


	  var attributes = {
	    'x-placement': data.placement
	  }; // Update `data` attributes, styles and arrowStyles

	  data.attributes = _extends$1({}, attributes, data.attributes);
	  data.styles = _extends$1({}, styles, data.styles);
	  data.arrowStyles = _extends$1({}, data.offsets.arrow, data.arrowStyles);
	  return data;
	}
	/**
	 * Helper used to know if the given modifier depends from another one.<br />
	 * It checks if the needed modifier is listed and enabled.
	 * @method
	 * @memberof Popper.Utils
	 * @param {Array} modifiers - list of modifiers
	 * @param {String} requestingName - name of requesting modifier
	 * @param {String} requestedName - name of requested modifier
	 * @returns {Boolean}
	 */


	function isModifierRequired(modifiers, requestingName, requestedName) {
	  var requesting = find(modifiers, function (_ref) {
	    var name = _ref.name;
	    return name === requestingName;
	  });
	  var isRequired = !!requesting && modifiers.some(function (modifier) {
	    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
	  });

	  if (!isRequired) {
	    var _requesting = '`' + requestingName + '`';

	    var requested = '`' + requestedName + '`';
	    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
	  }

	  return isRequired;
	}
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */


	function arrow(data, options) {
	  var _data$offsets$arrow; // arrow depends on keepTogether in order to work


	  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
	    return data;
	  }

	  var arrowElement = options.element; // if arrowElement is a string, suppose it's a CSS selector

	  if (typeof arrowElement === 'string') {
	    arrowElement = data.instance.popper.querySelector(arrowElement); // if arrowElement is not found, don't run the modifier

	    if (!arrowElement) {
	      return data;
	    }
	  } else {
	    // if the arrowElement isn't a query selector we must check that the
	    // provided DOM node is child of its popper node
	    if (!data.instance.popper.contains(arrowElement)) {
	      console.warn('WARNING: `arrow.element` must be child of its popper element!');
	      return data;
	    }
	  }

	  var placement = data.placement.split('-')[0];
	  var _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;
	  var isVertical = ['left', 'right'].indexOf(placement) !== -1;
	  var len = isVertical ? 'height' : 'width';
	  var sideCapitalized = isVertical ? 'Top' : 'Left';
	  var side = sideCapitalized.toLowerCase();
	  var altSide = isVertical ? 'left' : 'top';
	  var opSide = isVertical ? 'bottom' : 'right';
	  var arrowElementSize = getOuterSizes(arrowElement)[len]; //
	  // extends keepTogether behavior making sure the popper and its
	  // reference have enough pixels in conjunction
	  //
	  // top/left side

	  if (reference[opSide] - arrowElementSize < popper[side]) {
	    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
	  } // bottom/right side


	  if (reference[side] + arrowElementSize > popper[opSide]) {
	    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
	  }

	  data.offsets.popper = getClientRect(data.offsets.popper); // compute center of the popper

	  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2; // Compute the sideValue using the updated popper offsets
	  // take popper margin in account because we don't have this info available

	  var css = getStyleComputedProperty(data.instance.popper);
	  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
	  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
	  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide; // prevent arrowElement from being placed not contiguously to its popper

	  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
	  data.arrowElement = arrowElement;
	  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty$1(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty$1(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
	  return data;
	}
	/**
	 * Get the opposite placement variation of the given one
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} placement variation
	 * @returns {String} flipped placement variation
	 */


	function getOppositeVariation(variation) {
	  if (variation === 'end') {
	    return 'start';
	  } else if (variation === 'start') {
	    return 'end';
	  }

	  return variation;
	}
	/**
	 * List of accepted placements to use as values of the `placement` option.<br />
	 * Valid placements are:
	 * - `auto`
	 * - `top`
	 * - `right`
	 * - `bottom`
	 * - `left`
	 *
	 * Each placement can have a variation from this list:
	 * - `-start`
	 * - `-end`
	 *
	 * Variations are interpreted easily if you think of them as the left to right
	 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
	 * is right.<br />
	 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
	 *
	 * Some valid examples are:
	 * - `top-end` (on top of reference, right aligned)
	 * - `right-start` (on right of reference, top aligned)
	 * - `bottom` (on bottom, centered)
	 * - `auto-end` (on the side with more space available, alignment depends by placement)
	 *
	 * @static
	 * @type {Array}
	 * @enum {String}
	 * @readonly
	 * @method placements
	 * @memberof Popper
	 */


	var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']; // Get rid of `auto` `auto-start` and `auto-end`

	var validPlacements = placements.slice(3);
	/**
	 * Given an initial placement, returns all the subsequent placements
	 * clockwise (or counter-clockwise).
	 *
	 * @method
	 * @memberof Popper.Utils
	 * @argument {String} placement - A valid placement (it accepts variations)
	 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
	 * @returns {Array} placements including their variations
	 */

	function clockwise(placement) {
	  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	  var index = validPlacements.indexOf(placement);
	  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
	  return counter ? arr.reverse() : arr;
	}

	var BEHAVIORS = {
	  FLIP: 'flip',
	  CLOCKWISE: 'clockwise',
	  COUNTERCLOCKWISE: 'counterclockwise'
	};
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */

	function flip(data, options) {
	  // if `inner` modifier is enabled, we can't use the `flip` modifier
	  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
	    return data;
	  }

	  if (data.flipped && data.placement === data.originalPlacement) {
	    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
	    return data;
	  }

	  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
	  var placement = data.placement.split('-')[0];
	  var placementOpposite = getOppositePlacement(placement);
	  var variation = data.placement.split('-')[1] || '';
	  var flipOrder = [];

	  switch (options.behavior) {
	    case BEHAVIORS.FLIP:
	      flipOrder = [placement, placementOpposite];
	      break;

	    case BEHAVIORS.CLOCKWISE:
	      flipOrder = clockwise(placement);
	      break;

	    case BEHAVIORS.COUNTERCLOCKWISE:
	      flipOrder = clockwise(placement, true);
	      break;

	    default:
	      flipOrder = options.behavior;
	  }

	  flipOrder.forEach(function (step, index) {
	    if (placement !== step || flipOrder.length === index + 1) {
	      return data;
	    }

	    placement = data.placement.split('-')[0];
	    placementOpposite = getOppositePlacement(placement);
	    var popperOffsets = data.offsets.popper;
	    var refOffsets = data.offsets.reference; // using floor because the reference offsets may contain decimals we are not going to consider here

	    var floor = Math.floor;
	    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
	    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
	    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
	    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
	    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
	    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

	    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1; // flips variation if reference element overflows boundaries

	    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom); // flips variation if popper content overflows boundaries

	    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);
	    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

	    if (overlapsRef || overflowsBoundaries || flippedVariation) {
	      // this boolean to detect any flip loop
	      data.flipped = true;

	      if (overlapsRef || overflowsBoundaries) {
	        placement = flipOrder[index + 1];
	      }

	      if (flippedVariation) {
	        variation = getOppositeVariation(variation);
	      }

	      data.placement = placement + (variation ? '-' + variation : ''); // this object contains `position`, we want to preserve it along with
	      // any additional property we may add in the future

	      data.offsets.popper = _extends$1({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
	      data = runModifiers(data.instance.modifiers, data, 'flip');
	    }
	  });
	  return data;
	}
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */


	function keepTogether(data) {
	  var _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;
	  var placement = data.placement.split('-')[0];
	  var floor = Math.floor;
	  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
	  var side = isVertical ? 'right' : 'bottom';
	  var opSide = isVertical ? 'left' : 'top';
	  var measurement = isVertical ? 'width' : 'height';

	  if (popper[side] < floor(reference[opSide])) {
	    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
	  }

	  if (popper[opSide] > floor(reference[side])) {
	    data.offsets.popper[opSide] = floor(reference[side]);
	  }

	  return data;
	}
	/**
	 * Converts a string containing value + unit into a px value number
	 * @function
	 * @memberof {modifiers~offset}
	 * @private
	 * @argument {String} str - Value + unit string
	 * @argument {String} measurement - `height` or `width`
	 * @argument {Object} popperOffsets
	 * @argument {Object} referenceOffsets
	 * @returns {Number|String}
	 * Value in pixels, or original string if no values were extracted
	 */


	function toValue(str, measurement, popperOffsets, referenceOffsets) {
	  // separate value from unit
	  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
	  var value = +split[1];
	  var unit = split[2]; // If it's not a number it's an operator, I guess

	  if (!value) {
	    return str;
	  }

	  if (unit.indexOf('%') === 0) {
	    var element = void 0;

	    switch (unit) {
	      case '%p':
	        element = popperOffsets;
	        break;

	      case '%':
	      case '%r':
	      default:
	        element = referenceOffsets;
	    }

	    var rect = getClientRect(element);
	    return rect[measurement] / 100 * value;
	  } else if (unit === 'vh' || unit === 'vw') {
	    // if is a vh or vw, we calculate the size based on the viewport
	    var size = void 0;

	    if (unit === 'vh') {
	      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	    } else {
	      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	    }

	    return size / 100 * value;
	  } else {
	    // if is an explicit pixel unit, we get rid of the unit and keep the value
	    // if is an implicit unit, it's px, and we return just the value
	    return value;
	  }
	}
	/**
	 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
	 * @function
	 * @memberof {modifiers~offset}
	 * @private
	 * @argument {String} offset
	 * @argument {Object} popperOffsets
	 * @argument {Object} referenceOffsets
	 * @argument {String} basePlacement
	 * @returns {Array} a two cells array with x and y offsets in numbers
	 */


	function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
	  var offsets = [0, 0]; // Use height if placement is left or right and index is 0 otherwise use width
	  // in this way the first offset will use an axis and the second one
	  // will use the other one

	  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1; // Split the offset string to obtain a list of values and operands
	  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)

	  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
	    return frag.trim();
	  }); // Detect if the offset string contains a pair of values or a single one
	  // they could be separated by comma or space

	  var divider = fragments.indexOf(find(fragments, function (frag) {
	    return frag.search(/,|\s/) !== -1;
	  }));

	  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
	    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
	  } // If divider is found, we divide the list of values and operands to divide
	  // them by ofset X and Y.


	  var splitRegex = /\s*,\s*|\s+/;
	  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments]; // Convert the values with units to absolute pixels to allow our computations

	  ops = ops.map(function (op, index) {
	    // Most of the units rely on the orientation of the popper
	    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
	    var mergeWithPrevious = false;
	    return op // This aggregates any `+` or `-` sign that aren't considered operators
	    // e.g.: 10 + +5 => [10, +, +5]
	    .reduce(function (a, b) {
	      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
	        a[a.length - 1] = b;
	        mergeWithPrevious = true;
	        return a;
	      } else if (mergeWithPrevious) {
	        a[a.length - 1] += b;
	        mergeWithPrevious = false;
	        return a;
	      } else {
	        return a.concat(b);
	      }
	    }, []) // Here we convert the string values into number values (in px)
	    .map(function (str) {
	      return toValue(str, measurement, popperOffsets, referenceOffsets);
	    });
	  }); // Loop trough the offsets arrays and execute the operations

	  ops.forEach(function (op, index) {
	    op.forEach(function (frag, index2) {
	      if (isNumeric(frag)) {
	        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
	      }
	    });
	  });
	  return offsets;
	}
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @argument {Number|String} options.offset=0
	 * The offset value as described in the modifier description
	 * @returns {Object} The data object, properly modified
	 */


	function offset(data, _ref) {
	  var offset = _ref.offset;
	  var placement = data.placement,
	      _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;
	  var basePlacement = placement.split('-')[0];
	  var offsets = void 0;

	  if (isNumeric(+offset)) {
	    offsets = [+offset, 0];
	  } else {
	    offsets = parseOffset(offset, popper, reference, basePlacement);
	  }

	  if (basePlacement === 'left') {
	    popper.top += offsets[0];
	    popper.left -= offsets[1];
	  } else if (basePlacement === 'right') {
	    popper.top += offsets[0];
	    popper.left += offsets[1];
	  } else if (basePlacement === 'top') {
	    popper.left += offsets[0];
	    popper.top -= offsets[1];
	  } else if (basePlacement === 'bottom') {
	    popper.left += offsets[0];
	    popper.top += offsets[1];
	  }

	  data.popper = popper;
	  return data;
	}
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */


	function preventOverflow(data, options) {
	  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper); // If offsetParent is the reference element, we really want to
	  // go one step up and use the next offsetParent as reference to
	  // avoid to make this modifier completely useless and look like broken

	  if (data.instance.reference === boundariesElement) {
	    boundariesElement = getOffsetParent(boundariesElement);
	  } // NOTE: DOM access here
	  // resets the popper's position so that the document size can be calculated excluding
	  // the size of the popper element itself


	  var transformProp = getSupportedPropertyName('transform');
	  var popperStyles = data.instance.popper.style; // assignment to help minification

	  var top = popperStyles.top,
	      left = popperStyles.left,
	      transform = popperStyles[transformProp];
	  popperStyles.top = '';
	  popperStyles.left = '';
	  popperStyles[transformProp] = '';
	  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed); // NOTE: DOM access here
	  // restores the original style properties after the offsets have been computed

	  popperStyles.top = top;
	  popperStyles.left = left;
	  popperStyles[transformProp] = transform;
	  options.boundaries = boundaries;
	  var order = options.priority;
	  var popper = data.offsets.popper;
	  var check = {
	    primary: function primary(placement) {
	      var value = popper[placement];

	      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
	        value = Math.max(popper[placement], boundaries[placement]);
	      }

	      return defineProperty$1({}, placement, value);
	    },
	    secondary: function secondary(placement) {
	      var mainSide = placement === 'right' ? 'left' : 'top';
	      var value = popper[mainSide];

	      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
	        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
	      }

	      return defineProperty$1({}, mainSide, value);
	    }
	  };
	  order.forEach(function (placement) {
	    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
	    popper = _extends$1({}, popper, check[side](placement));
	  });
	  data.offsets.popper = popper;
	  return data;
	}
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */


	function shift(data) {
	  var placement = data.placement;
	  var basePlacement = placement.split('-')[0];
	  var shiftvariation = placement.split('-')[1]; // if shift shiftvariation is specified, run the modifier

	  if (shiftvariation) {
	    var _data$offsets = data.offsets,
	        reference = _data$offsets.reference,
	        popper = _data$offsets.popper;
	    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
	    var side = isVertical ? 'left' : 'top';
	    var measurement = isVertical ? 'width' : 'height';
	    var shiftOffsets = {
	      start: defineProperty$1({}, side, reference[side]),
	      end: defineProperty$1({}, side, reference[side] + reference[measurement] - popper[measurement])
	    };
	    data.offsets.popper = _extends$1({}, popper, shiftOffsets[shiftvariation]);
	  }

	  return data;
	}
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by update method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */


	function hide(data) {
	  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
	    return data;
	  }

	  var refRect = data.offsets.reference;
	  var bound = find(data.instance.modifiers, function (modifier) {
	    return modifier.name === 'preventOverflow';
	  }).boundaries;

	  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
	    // Avoid unnecessary DOM access if visibility hasn't changed
	    if (data.hide === true) {
	      return data;
	    }

	    data.hide = true;
	    data.attributes['x-out-of-boundaries'] = '';
	  } else {
	    // Avoid unnecessary DOM access if visibility hasn't changed
	    if (data.hide === false) {
	      return data;
	    }

	    data.hide = false;
	    data.attributes['x-out-of-boundaries'] = false;
	  }

	  return data;
	}
	/**
	 * @function
	 * @memberof Modifiers
	 * @argument {Object} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {Object} The data object, properly modified
	 */


	function inner(data) {
	  var placement = data.placement;
	  var basePlacement = placement.split('-')[0];
	  var _data$offsets = data.offsets,
	      popper = _data$offsets.popper,
	      reference = _data$offsets.reference;
	  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
	  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
	  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
	  data.placement = getOppositePlacement(placement);
	  data.offsets.popper = getClientRect(popper);
	  return data;
	}
	/**
	 * Modifier function, each modifier can have a function of this type assigned
	 * to its `fn` property.<br />
	 * These functions will be called on each update, this means that you must
	 * make sure they are performant enough to avoid performance bottlenecks.
	 *
	 * @function ModifierFn
	 * @argument {dataObject} data - The data object generated by `update` method
	 * @argument {Object} options - Modifiers configuration and options
	 * @returns {dataObject} The data object, properly modified
	 */

	/**
	 * Modifiers are plugins used to alter the behavior of your poppers.<br />
	 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
	 * needed by the library.
	 *
	 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
	 * All the other properties are configurations that could be tweaked.
	 * @namespace modifiers
	 */


	var modifiers = {
	  /**
	   * Modifier used to shift the popper on the start or end of its reference
	   * element.<br />
	   * It will read the variation of the `placement` property.<br />
	   * It can be one either `-end` or `-start`.
	   * @memberof modifiers
	   * @inner
	   */
	  shift: {
	    /** @prop {number} order=100 - Index used to define the order of execution */
	    order: 100,

	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,

	    /** @prop {ModifierFn} */
	    fn: shift
	  },

	  /**
	   * The `offset` modifier can shift your popper on both its axis.
	   *
	   * It accepts the following units:
	   * - `px` or unit-less, interpreted as pixels
	   * - `%` or `%r`, percentage relative to the length of the reference element
	   * - `%p`, percentage relative to the length of the popper element
	   * - `vw`, CSS viewport width unit
	   * - `vh`, CSS viewport height unit
	   *
	   * For length is intended the main axis relative to the placement of the popper.<br />
	   * This means that if the placement is `top` or `bottom`, the length will be the
	   * `width`. In case of `left` or `right`, it will be the `height`.
	   *
	   * You can provide a single value (as `Number` or `String`), or a pair of values
	   * as `String` divided by a comma or one (or more) white spaces.<br />
	   * The latter is a deprecated method because it leads to confusion and will be
	   * removed in v2.<br />
	   * Additionally, it accepts additions and subtractions between different units.
	   * Note that multiplications and divisions aren't supported.
	   *
	   * Valid examples are:
	   * ```
	   * 10
	   * '10%'
	   * '10, 10'
	   * '10%, 10'
	   * '10 + 10%'
	   * '10 - 5vh + 3%'
	   * '-10px + 5vh, 5px - 6%'
	   * ```
	   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
	   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
	   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
	   *
	   * @memberof modifiers
	   * @inner
	   */
	  offset: {
	    /** @prop {number} order=200 - Index used to define the order of execution */
	    order: 200,

	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,

	    /** @prop {ModifierFn} */
	    fn: offset,

	    /** @prop {Number|String} offset=0
	     * The offset value as described in the modifier description
	     */
	    offset: 0
	  },

	  /**
	   * Modifier used to prevent the popper from being positioned outside the boundary.
	   *
	   * A scenario exists where the reference itself is not within the boundaries.<br />
	   * We can say it has "escaped the boundaries" — or just "escaped".<br />
	   * In this case we need to decide whether the popper should either:
	   *
	   * - detach from the reference and remain "trapped" in the boundaries, or
	   * - if it should ignore the boundary and "escape with its reference"
	   *
	   * When `escapeWithReference` is set to`true` and reference is completely
	   * outside its boundaries, the popper will overflow (or completely leave)
	   * the boundaries in order to remain attached to the edge of the reference.
	   *
	   * @memberof modifiers
	   * @inner
	   */
	  preventOverflow: {
	    /** @prop {number} order=300 - Index used to define the order of execution */
	    order: 300,

	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,

	    /** @prop {ModifierFn} */
	    fn: preventOverflow,

	    /**
	     * @prop {Array} [priority=['left','right','top','bottom']]
	     * Popper will try to prevent overflow following these priorities by default,
	     * then, it could overflow on the left and on top of the `boundariesElement`
	     */
	    priority: ['left', 'right', 'top', 'bottom'],

	    /**
	     * @prop {number} padding=5
	     * Amount of pixel used to define a minimum distance between the boundaries
	     * and the popper. This makes sure the popper always has a little padding
	     * between the edges of its container
	     */
	    padding: 5,

	    /**
	     * @prop {String|HTMLElement} boundariesElement='scrollParent'
	     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
	     * `viewport` or any DOM element.
	     */
	    boundariesElement: 'scrollParent'
	  },

	  /**
	   * Modifier used to make sure the reference and its popper stay near each other
	   * without leaving any gap between the two. Especially useful when the arrow is
	   * enabled and you want to ensure that it points to its reference element.
	   * It cares only about the first axis. You can still have poppers with margin
	   * between the popper and its reference element.
	   * @memberof modifiers
	   * @inner
	   */
	  keepTogether: {
	    /** @prop {number} order=400 - Index used to define the order of execution */
	    order: 400,

	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,

	    /** @prop {ModifierFn} */
	    fn: keepTogether
	  },

	  /**
	   * This modifier is used to move the `arrowElement` of the popper to make
	   * sure it is positioned between the reference element and its popper element.
	   * It will read the outer size of the `arrowElement` node to detect how many
	   * pixels of conjunction are needed.
	   *
	   * It has no effect if no `arrowElement` is provided.
	   * @memberof modifiers
	   * @inner
	   */
	  arrow: {
	    /** @prop {number} order=500 - Index used to define the order of execution */
	    order: 500,

	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,

	    /** @prop {ModifierFn} */
	    fn: arrow,

	    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
	    element: '[x-arrow]'
	  },

	  /**
	   * Modifier used to flip the popper's placement when it starts to overlap its
	   * reference element.
	   *
	   * Requires the `preventOverflow` modifier before it in order to work.
	   *
	   * **NOTE:** this modifier will interrupt the current update cycle and will
	   * restart it if it detects the need to flip the placement.
	   * @memberof modifiers
	   * @inner
	   */
	  flip: {
	    /** @prop {number} order=600 - Index used to define the order of execution */
	    order: 600,

	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,

	    /** @prop {ModifierFn} */
	    fn: flip,

	    /**
	     * @prop {String|Array} behavior='flip'
	     * The behavior used to change the popper's placement. It can be one of
	     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
	     * placements (with optional variations)
	     */
	    behavior: 'flip',

	    /**
	     * @prop {number} padding=5
	     * The popper will flip if it hits the edges of the `boundariesElement`
	     */
	    padding: 5,

	    /**
	     * @prop {String|HTMLElement} boundariesElement='viewport'
	     * The element which will define the boundaries of the popper position.
	     * The popper will never be placed outside of the defined boundaries
	     * (except if `keepTogether` is enabled)
	     */
	    boundariesElement: 'viewport',

	    /**
	     * @prop {Boolean} flipVariations=false
	     * The popper will switch placement variation between `-start` and `-end` when
	     * the reference element overlaps its boundaries.
	     *
	     * The original placement should have a set variation.
	     */
	    flipVariations: false,

	    /**
	     * @prop {Boolean} flipVariationsByContent=false
	     * The popper will switch placement variation between `-start` and `-end` when
	     * the popper element overlaps its reference boundaries.
	     *
	     * The original placement should have a set variation.
	     */
	    flipVariationsByContent: false
	  },

	  /**
	   * Modifier used to make the popper flow toward the inner of the reference element.
	   * By default, when this modifier is disabled, the popper will be placed outside
	   * the reference element.
	   * @memberof modifiers
	   * @inner
	   */
	  inner: {
	    /** @prop {number} order=700 - Index used to define the order of execution */
	    order: 700,

	    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
	    enabled: false,

	    /** @prop {ModifierFn} */
	    fn: inner
	  },

	  /**
	   * Modifier used to hide the popper when its reference element is outside of the
	   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
	   * be used to hide with a CSS selector the popper when its reference is
	   * out of boundaries.
	   *
	   * Requires the `preventOverflow` modifier before it in order to work.
	   * @memberof modifiers
	   * @inner
	   */
	  hide: {
	    /** @prop {number} order=800 - Index used to define the order of execution */
	    order: 800,

	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,

	    /** @prop {ModifierFn} */
	    fn: hide
	  },

	  /**
	   * Computes the style that will be applied to the popper element to gets
	   * properly positioned.
	   *
	   * Note that this modifier will not touch the DOM, it just prepares the styles
	   * so that `applyStyle` modifier can apply it. This separation is useful
	   * in case you need to replace `applyStyle` with a custom implementation.
	   *
	   * This modifier has `850` as `order` value to maintain backward compatibility
	   * with previous versions of Popper.js. Expect the modifiers ordering method
	   * to change in future major versions of the library.
	   *
	   * @memberof modifiers
	   * @inner
	   */
	  computeStyle: {
	    /** @prop {number} order=850 - Index used to define the order of execution */
	    order: 850,

	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,

	    /** @prop {ModifierFn} */
	    fn: computeStyle,

	    /**
	     * @prop {Boolean} gpuAcceleration=true
	     * If true, it uses the CSS 3D transformation to position the popper.
	     * Otherwise, it will use the `top` and `left` properties
	     */
	    gpuAcceleration: true,

	    /**
	     * @prop {string} [x='bottom']
	     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
	     * Change this if your popper should grow in a direction different from `bottom`
	     */
	    x: 'bottom',

	    /**
	     * @prop {string} [x='left']
	     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
	     * Change this if your popper should grow in a direction different from `right`
	     */
	    y: 'right'
	  },

	  /**
	   * Applies the computed styles to the popper element.
	   *
	   * All the DOM manipulations are limited to this modifier. This is useful in case
	   * you want to integrate Popper.js inside a framework or view library and you
	   * want to delegate all the DOM manipulations to it.
	   *
	   * Note that if you disable this modifier, you must make sure the popper element
	   * has its position set to `absolute` before Popper.js can do its work!
	   *
	   * Just disable this modifier and define your own to achieve the desired effect.
	   *
	   * @memberof modifiers
	   * @inner
	   */
	  applyStyle: {
	    /** @prop {number} order=900 - Index used to define the order of execution */
	    order: 900,

	    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
	    enabled: true,

	    /** @prop {ModifierFn} */
	    fn: applyStyle,

	    /** @prop {Function} */
	    onLoad: applyStyleOnLoad,

	    /**
	     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
	     * @prop {Boolean} gpuAcceleration=true
	     * If true, it uses the CSS 3D transformation to position the popper.
	     * Otherwise, it will use the `top` and `left` properties
	     */
	    gpuAcceleration: undefined
	  }
	};
	/**
	 * The `dataObject` is an object containing all the information used by Popper.js.
	 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
	 * @name dataObject
	 * @property {Object} data.instance The Popper.js instance
	 * @property {String} data.placement Placement applied to popper
	 * @property {String} data.originalPlacement Placement originally defined on init
	 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
	 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
	 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
	 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
	 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
	 * @property {Object} data.boundaries Offsets of the popper boundaries
	 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
	 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
	 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
	 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
	 */

	/**
	 * Default options provided to Popper.js constructor.<br />
	 * These can be overridden using the `options` argument of Popper.js.<br />
	 * To override an option, simply pass an object with the same
	 * structure of the `options` object, as the 3rd argument. For example:
	 * ```
	 * new Popper(ref, pop, {
	 *   modifiers: {
	 *     preventOverflow: { enabled: false }
	 *   }
	 * })
	 * ```
	 * @type {Object}
	 * @static
	 * @memberof Popper
	 */

	var Defaults = {
	  /**
	   * Popper's placement.
	   * @prop {Popper.placements} placement='bottom'
	   */
	  placement: 'bottom',

	  /**
	   * Set this to true if you want popper to position it self in 'fixed' mode
	   * @prop {Boolean} positionFixed=false
	   */
	  positionFixed: false,

	  /**
	   * Whether events (resize, scroll) are initially enabled.
	   * @prop {Boolean} eventsEnabled=true
	   */
	  eventsEnabled: true,

	  /**
	   * Set to true if you want to automatically remove the popper when
	   * you call the `destroy` method.
	   * @prop {Boolean} removeOnDestroy=false
	   */
	  removeOnDestroy: false,

	  /**
	   * Callback called when the popper is created.<br />
	   * By default, it is set to no-op.<br />
	   * Access Popper.js instance with `data.instance`.
	   * @prop {onCreate}
	   */
	  onCreate: function onCreate() {},

	  /**
	   * Callback called when the popper is updated. This callback is not called
	   * on the initialization/creation of the popper, but only on subsequent
	   * updates.<br />
	   * By default, it is set to no-op.<br />
	   * Access Popper.js instance with `data.instance`.
	   * @prop {onUpdate}
	   */
	  onUpdate: function onUpdate() {},

	  /**
	   * List of modifiers used to modify the offsets before they are applied to the popper.
	   * They provide most of the functionalities of Popper.js.
	   * @prop {modifiers}
	   */
	  modifiers: modifiers
	};
	/**
	 * @callback onCreate
	 * @param {dataObject} data
	 */

	/**
	 * @callback onUpdate
	 * @param {dataObject} data
	 */
	// Utils
	// Methods

	var Popper = function () {
	  /**
	   * Creates a new Popper.js instance.
	   * @class Popper
	   * @param {Element|referenceObject} reference - The reference element used to position the popper
	   * @param {Element} popper - The HTML / XML element used as the popper
	   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
	   * @return {Object} instance - The generated Popper.js instance
	   */
	  function Popper(reference, popper) {
	    var _this = this;

	    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	    classCallCheck(this, Popper);

	    this.scheduleUpdate = function () {
	      return requestAnimationFrame(_this.update);
	    }; // make update() debounced, so that it only runs at most once-per-tick


	    this.update = debounce(this.update.bind(this)); // with {} we create a new object with the options inside it

	    this.options = _extends$1({}, Popper.Defaults, options); // init state

	    this.state = {
	      isDestroyed: false,
	      isCreated: false,
	      scrollParents: []
	    }; // get reference and popper elements (allow jQuery wrappers)

	    this.reference = reference && reference.jquery ? reference[0] : reference;
	    this.popper = popper && popper.jquery ? popper[0] : popper; // Deep merge modifiers options

	    this.options.modifiers = {};
	    Object.keys(_extends$1({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
	      _this.options.modifiers[name] = _extends$1({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
	    }); // Refactoring modifiers' list (Object => Array)

	    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
	      return _extends$1({
	        name: name
	      }, _this.options.modifiers[name]);
	    }) // sort the modifiers by order
	    .sort(function (a, b) {
	      return a.order - b.order;
	    }); // modifiers have the ability to execute arbitrary code when Popper.js get inited
	    // such code is executed in the same order of its modifier
	    // they could add new properties to their options configuration
	    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!

	    this.modifiers.forEach(function (modifierOptions) {
	      if (modifierOptions.enabled && isFunction$1(modifierOptions.onLoad)) {
	        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
	      }
	    }); // fire the first update to position the popper in the right place

	    this.update();
	    var eventsEnabled = this.options.eventsEnabled;

	    if (eventsEnabled) {
	      // setup event listeners, they will take care of update the position in specific situations
	      this.enableEventListeners();
	    }

	    this.state.eventsEnabled = eventsEnabled;
	  } // We can't use class properties because they don't get listed in the
	  // class prototype and break stuff like Sinon stubs


	  createClass(Popper, [{
	    key: 'update',
	    value: function update$$1() {
	      return update.call(this);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy$$1() {
	      return destroy.call(this);
	    }
	  }, {
	    key: 'enableEventListeners',
	    value: function enableEventListeners$$1() {
	      return enableEventListeners.call(this);
	    }
	  }, {
	    key: 'disableEventListeners',
	    value: function disableEventListeners$$1() {
	      return disableEventListeners.call(this);
	    }
	    /**
	     * Schedules an update. It will run on the next UI update available.
	     * @method scheduleUpdate
	     * @memberof Popper
	     */

	    /**
	     * Collection of utilities useful when writing custom modifiers.
	     * Starting from version 1.7, this method is available only if you
	     * include `popper-utils.js` before `popper.js`.
	     *
	     * **DEPRECATION**: This way to access PopperUtils is deprecated
	     * and will be removed in v2! Use the PopperUtils module directly instead.
	     * Due to the high instability of the methods contained in Utils, we can't
	     * guarantee them to follow semver. Use them at your own risk!
	     * @static
	     * @private
	     * @type {Object}
	     * @deprecated since version 1.8
	     * @member Utils
	     * @memberof Popper
	     */

	  }]);
	  return Popper;
	}();
	/**
	 * The `referenceObject` is an object that provides an interface compatible with Popper.js
	 * and lets you use it as replacement of a real DOM node.<br />
	 * You can use this method to position a popper relatively to a set of coordinates
	 * in case you don't have a DOM node to use as reference.
	 *
	 * ```
	 * new Popper(referenceObject, popperNode);
	 * ```
	 *
	 * NB: This feature isn't supported in Internet Explorer 10.
	 * @name referenceObject
	 * @property {Function} data.getBoundingClientRect
	 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
	 * @property {number} data.clientWidth
	 * An ES6 getter that will return the width of the virtual reference element.
	 * @property {number} data.clientHeight
	 * An ES6 getter that will return the height of the virtual reference element.
	 */


	Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
	Popper.placements = placements;
	Popper.Defaults = Defaults;

	var key = '__global_unique_id__';

	var gud = function gud() {
	  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
	};

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var warning = function warning() {};

	var warning_1 = warning;

	var implementation = createCommonjsModule(function (module, exports) {

	  exports.__esModule = true;

	  var _react2 = _interopRequireDefault(React__default);

	  var _propTypes2 = _interopRequireDefault(propTypes);

	  var _gud2 = _interopRequireDefault(gud);

	  var _warning2 = _interopRequireDefault(warning_1);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      "default": obj
	    };
	  }

	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }

	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return call && (typeof call === "object" || typeof call === "function") ? call : self;
	  }

	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	    }

	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }

	  var MAX_SIGNED_31_BIT_INT = 1073741823; // Inlined Object.is polyfill.
	  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is

	  function objectIs(x, y) {
	    if (x === y) {
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      return x !== x && y !== y;
	    }
	  }

	  function createEventEmitter(value) {
	    var handlers = [];
	    return {
	      on: function on(handler) {
	        handlers.push(handler);
	      },
	      off: function off(handler) {
	        handlers = handlers.filter(function (h) {
	          return h !== handler;
	        });
	      },
	      get: function get() {
	        return value;
	      },
	      set: function set(newValue, changedBits) {
	        value = newValue;
	        handlers.forEach(function (handler) {
	          return handler(value, changedBits);
	        });
	      }
	    };
	  }

	  function onlyChild(children) {
	    return Array.isArray(children) ? children[0] : children;
	  }

	  function createReactContext(defaultValue, calculateChangedBits) {
	    var _Provider$childContex, _Consumer$contextType;

	    var contextProp = '__create-react-context-' + (0, _gud2["default"])() + '__';

	    var Provider = function (_Component) {
	      _inherits(Provider, _Component);

	      function Provider() {
	        var _temp, _this, _ret;

	        _classCallCheck(this, Provider);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
	      }

	      Provider.prototype.getChildContext = function getChildContext() {
	        var _ref;

	        return _ref = {}, _ref[contextProp] = this.emitter, _ref;
	      };

	      Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        if (this.props.value !== nextProps.value) {
	          var oldValue = this.props.value;
	          var newValue = nextProps.value;
	          var changedBits = void 0;

	          if (objectIs(oldValue, newValue)) {
	            changedBits = 0; // No change
	          } else {
	            changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

	            changedBits |= 0;

	            if (changedBits !== 0) {
	              this.emitter.set(nextProps.value, changedBits);
	            }
	          }
	        }
	      };

	      Provider.prototype.render = function render() {
	        return this.props.children;
	      };

	      return Provider;
	    }(React__default.Component);

	    Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2["default"].object.isRequired, _Provider$childContex);

	    var Consumer = function (_Component2) {
	      _inherits(Consumer, _Component2);

	      function Consumer() {
	        var _temp2, _this2, _ret2;

	        _classCallCheck(this, Consumer);

	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	          args[_key2] = arguments[_key2];
	        }

	        return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
	          value: _this2.getValue()
	        }, _this2.onUpdate = function (newValue, changedBits) {
	          var observedBits = _this2.observedBits | 0;

	          if ((observedBits & changedBits) !== 0) {
	            _this2.setState({
	              value: _this2.getValue()
	            });
	          }
	        }, _temp2), _possibleConstructorReturn(_this2, _ret2);
	      }

	      Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	        var observedBits = nextProps.observedBits;
	        this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
	        : observedBits;
	      };

	      Consumer.prototype.componentDidMount = function componentDidMount() {
	        if (this.context[contextProp]) {
	          this.context[contextProp].on(this.onUpdate);
	        }

	        var observedBits = this.props.observedBits;
	        this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
	        : observedBits;
	      };

	      Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
	        if (this.context[contextProp]) {
	          this.context[contextProp].off(this.onUpdate);
	        }
	      };

	      Consumer.prototype.getValue = function getValue() {
	        if (this.context[contextProp]) {
	          return this.context[contextProp].get();
	        } else {
	          return defaultValue;
	        }
	      };

	      Consumer.prototype.render = function render() {
	        return onlyChild(this.props.children)(this.state.value);
	      };

	      return Consumer;
	    }(React__default.Component);

	    Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2["default"].object, _Consumer$contextType);
	    return {
	      Provider: Provider,
	      Consumer: Consumer
	    };
	  }

	  exports["default"] = createReactContext;
	  module.exports = exports['default'];
	});
	unwrapExports(implementation);

	var lib = createCommonjsModule(function (module, exports) {

	  exports.__esModule = true;

	  var _react2 = _interopRequireDefault(React__default);

	  var _implementation2 = _interopRequireDefault(implementation);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      "default": obj
	    };
	  }

	  exports["default"] = _react2["default"].createContext || _implementation2["default"];
	  module.exports = exports['default'];
	});
	var createContext = unwrapExports(lib);

	var ManagerContext = createContext({
	  setReferenceNode: undefined,
	  referenceNode: undefined
	});

	var Manager =
	/*#__PURE__*/
	function (_React$Component) {
	  inheritsLoose(Manager, _React$Component);

	  function Manager() {
	    var _this;

	    _this = _React$Component.call(this) || this;

	    defineProperty(assertThisInitialized(_this), "setReferenceNode", function (referenceNode) {
	      if (!referenceNode || _this.state.context.referenceNode === referenceNode) {
	        return;
	      }

	      _this.setState(function (_ref) {
	        var context = _ref.context;
	        return {
	          context: _extends_1({}, context, {
	            referenceNode: referenceNode
	          })
	        };
	      });
	    });

	    _this.state = {
	      context: {
	        setReferenceNode: _this.setReferenceNode,
	        referenceNode: undefined
	      }
	    };
	    return _this;
	  }

	  var _proto = Manager.prototype;

	  _proto.render = function render() {
	    return React.createElement(ManagerContext.Provider, {
	      value: this.state.context
	    }, this.props.children);
	  };

	  return Manager;
	}(React.Component);

	/**
	 * Takes an argument and if it's an array, returns the first item in the array,
	 * otherwise returns the argument. Used for Preact compatibility.
	 */
	var unwrapArray = function unwrapArray(arg) {
	  return Array.isArray(arg) ? arg[0] : arg;
	};
	/**
	 * Takes a maybe-undefined function and arbitrary args and invokes the function
	 * only if it is defined.
	 */

	var safeInvoke = function safeInvoke(fn) {
	  if (typeof fn === "function") {
	    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    return fn.apply(void 0, args);
	  }
	};

	var initialStyle = {
	  position: 'absolute',
	  top: 0,
	  left: 0,
	  opacity: 0,
	  pointerEvents: 'none'
	};
	var initialArrowStyle = {};
	var InnerPopper =
	/*#__PURE__*/
	function (_React$Component) {
	  inheritsLoose(InnerPopper, _React$Component);

	  function InnerPopper() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

	    defineProperty(assertThisInitialized(_this), "state", {
	      data: undefined,
	      placement: undefined
	    });

	    defineProperty(assertThisInitialized(_this), "popperInstance", void 0);

	    defineProperty(assertThisInitialized(_this), "popperNode", null);

	    defineProperty(assertThisInitialized(_this), "arrowNode", null);

	    defineProperty(assertThisInitialized(_this), "setPopperNode", function (popperNode) {
	      if (!popperNode || _this.popperNode === popperNode) return;
	      safeInvoke(_this.props.innerRef, popperNode);
	      _this.popperNode = popperNode;

	      _this.updatePopperInstance();
	    });

	    defineProperty(assertThisInitialized(_this), "setArrowNode", function (arrowNode) {
	      _this.arrowNode = arrowNode;
	    });

	    defineProperty(assertThisInitialized(_this), "updateStateModifier", {
	      enabled: true,
	      order: 900,
	      fn: function fn(data) {
	        var placement = data.placement;

	        _this.setState({
	          data: data,
	          placement: placement
	        });

	        return data;
	      }
	    });

	    defineProperty(assertThisInitialized(_this), "getOptions", function () {
	      return {
	        placement: _this.props.placement,
	        eventsEnabled: _this.props.eventsEnabled,
	        positionFixed: _this.props.positionFixed,
	        modifiers: _extends_1({}, _this.props.modifiers, {
	          arrow: _extends_1({}, _this.props.modifiers && _this.props.modifiers.arrow, {
	            enabled: !!_this.arrowNode,
	            element: _this.arrowNode
	          }),
	          applyStyle: {
	            enabled: false
	          },
	          updateStateModifier: _this.updateStateModifier
	        })
	      };
	    });

	    defineProperty(assertThisInitialized(_this), "getPopperStyle", function () {
	      return !_this.popperNode || !_this.state.data ? initialStyle : _extends_1({
	        position: _this.state.data.offsets.popper.position
	      }, _this.state.data.styles);
	    });

	    defineProperty(assertThisInitialized(_this), "getPopperPlacement", function () {
	      return !_this.state.data ? undefined : _this.state.placement;
	    });

	    defineProperty(assertThisInitialized(_this), "getArrowStyle", function () {
	      return !_this.arrowNode || !_this.state.data ? initialArrowStyle : _this.state.data.arrowStyles;
	    });

	    defineProperty(assertThisInitialized(_this), "getOutOfBoundariesState", function () {
	      return _this.state.data ? _this.state.data.hide : undefined;
	    });

	    defineProperty(assertThisInitialized(_this), "destroyPopperInstance", function () {
	      if (!_this.popperInstance) return;

	      _this.popperInstance.destroy();

	      _this.popperInstance = null;
	    });

	    defineProperty(assertThisInitialized(_this), "updatePopperInstance", function () {
	      _this.destroyPopperInstance();

	      var _assertThisInitialize = assertThisInitialized(_this),
	          popperNode = _assertThisInitialize.popperNode;

	      var referenceElement = _this.props.referenceElement;
	      if (!referenceElement || !popperNode) return;
	      _this.popperInstance = new Popper(referenceElement, popperNode, _this.getOptions());
	    });

	    defineProperty(assertThisInitialized(_this), "scheduleUpdate", function () {
	      if (_this.popperInstance) {
	        _this.popperInstance.scheduleUpdate();
	      }
	    });

	    return _this;
	  }

	  var _proto = InnerPopper.prototype;

	  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
	    // If the Popper.js options have changed, update the instance (destroy + create)
	    if (this.props.placement !== prevProps.placement || this.props.referenceElement !== prevProps.referenceElement || this.props.positionFixed !== prevProps.positionFixed) {
	      this.updatePopperInstance();
	    } else if (this.props.eventsEnabled !== prevProps.eventsEnabled && this.popperInstance) {
	      this.props.eventsEnabled ? this.popperInstance.enableEventListeners() : this.popperInstance.disableEventListeners();
	    } // A placement difference in state means popper determined a new placement
	    // apart from the props value. By the time the popper element is rendered with
	    // the new position Popper has already measured it, if the place change triggers
	    // a size change it will result in a misaligned popper. So we schedule an update to be sure.


	    if (prevState.placement !== this.state.placement) {
	      this.scheduleUpdate();
	    }
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    safeInvoke(this.props.innerRef, null);
	    this.destroyPopperInstance();
	  };

	  _proto.render = function render() {
	    return unwrapArray(this.props.children)({
	      ref: this.setPopperNode,
	      style: this.getPopperStyle(),
	      placement: this.getPopperPlacement(),
	      outOfBoundaries: this.getOutOfBoundariesState(),
	      scheduleUpdate: this.scheduleUpdate,
	      arrowProps: {
	        ref: this.setArrowNode,
	        style: this.getArrowStyle()
	      }
	    });
	  };

	  return InnerPopper;
	}(React.Component);

	defineProperty(InnerPopper, "defaultProps", {
	  placement: 'bottom',
	  eventsEnabled: true,
	  referenceElement: undefined,
	  positionFixed: false
	});
	function Popper$1(_ref) {
	  var referenceElement = _ref.referenceElement,
	      props = objectWithoutPropertiesLoose(_ref, ["referenceElement"]);

	  return React.createElement(ManagerContext.Consumer, null, function (_ref2) {
	    var referenceNode = _ref2.referenceNode;
	    return React.createElement(InnerPopper, _extends_1({
	      referenceElement: referenceElement !== undefined ? referenceElement : referenceNode
	    }, props));
	  });
	}

	var InnerReference =
	/*#__PURE__*/
	function (_React$Component) {
	  inheritsLoose(InnerReference, _React$Component);

	  function InnerReference() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

	    defineProperty(assertThisInitialized(_this), "refHandler", function (node) {
	      safeInvoke(_this.props.innerRef, node);
	      safeInvoke(_this.props.setReferenceNode, node);
	    });

	    return _this;
	  }

	  var _proto = InnerReference.prototype;

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    safeInvoke(this.props.innerRef, null);
	  };

	  _proto.render = function render() {
	    warning_1(Boolean(this.props.setReferenceNode), '`Reference` should not be used outside of a `Manager` component.');
	    return unwrapArray(this.props.children)({
	      ref: this.refHandler
	    });
	  };

	  return InnerReference;
	}(React.Component);

	function Reference(props) {
	  return React.createElement(ManagerContext.Consumer, null, function (_ref) {
	    var setReferenceNode = _ref.setReferenceNode;
	    return React.createElement(InnerReference, _extends_1({
	      setReferenceNode: setReferenceNode
	    }, props));
	  });
	}

	/**
	 * DropdownContext
	 * {
	 *  toggle: PropTypes.func.isRequired,
	 *  isOpen: PropTypes.bool.isRequired,
	 *  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
	 *  inNavbar: PropTypes.bool.isRequired,
	 * }
	 */

	var DropdownContext = React__default.createContext({});

	var propTypes$d = {
	  disabled: propTypes.bool,
	  direction: propTypes.oneOf(['up', 'down', 'left', 'right']),
	  group: propTypes.bool,
	  isOpen: propTypes.bool,
	  nav: propTypes.bool,
	  active: propTypes.bool,
	  addonType: propTypes.oneOfType([propTypes.bool, propTypes.oneOf(['prepend', 'append'])]),
	  size: propTypes.string,
	  tag: tagPropType,
	  toggle: propTypes.func,
	  children: propTypes.node,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  inNavbar: propTypes.bool,
	  setActiveFromChild: propTypes.bool
	};
	var defaultProps$c = {
	  isOpen: false,
	  direction: 'down',
	  nav: false,
	  active: false,
	  addonType: false,
	  inNavbar: false,
	  setActiveFromChild: false
	};

	var Dropdown =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(Dropdown, _React$Component);

	  function Dropdown(props) {
	    var _this;

	    _this = _React$Component.call(this, props) || this;
	    _this.addEvents = _this.addEvents.bind(_assertThisInitialized(_this));
	    _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
	    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
	    _this.removeEvents = _this.removeEvents.bind(_assertThisInitialized(_this));
	    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
	    _this.containerRef = React__default.createRef();
	    return _this;
	  }

	  var _proto = Dropdown.prototype;

	  _proto.getContextValue = function getContextValue() {
	    return {
	      toggle: this.props.toggle,
	      isOpen: this.props.isOpen,
	      direction: this.props.direction === 'down' && this.props.dropup ? 'up' : this.props.direction,
	      inNavbar: this.props.inNavbar
	    };
	  };

	  _proto.componentDidMount = function componentDidMount() {
	    this.handleProps();
	  };

	  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
	    if (this.props.isOpen !== prevProps.isOpen) {
	      this.handleProps();
	    }
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    this.removeEvents();
	  };

	  _proto.getContainer = function getContainer() {
	    return this.containerRef.current;
	  };

	  _proto.getMenuCtrl = function getMenuCtrl() {
	    if (this._$menuCtrl) return this._$menuCtrl;
	    this._$menuCtrl = this.getContainer().querySelector('[aria-expanded]');
	    return this._$menuCtrl;
	  };

	  _proto.getMenuItems = function getMenuItems() {
	    return [].slice.call(this.getContainer().querySelectorAll('[role="menuitem"]'));
	  };

	  _proto.addEvents = function addEvents() {
	    var _this2 = this;

	    ['click', 'touchstart', 'keyup'].forEach(function (event) {
	      return document.addEventListener(event, _this2.handleDocumentClick, true);
	    });
	  };

	  _proto.removeEvents = function removeEvents() {
	    var _this3 = this;

	    ['click', 'touchstart', 'keyup'].forEach(function (event) {
	      return document.removeEventListener(event, _this3.handleDocumentClick, true);
	    });
	  };

	  _proto.handleDocumentClick = function handleDocumentClick(e) {
	    if (e && (e.which === 3 || e.type === 'keyup' && e.which !== keyCodes.tab)) return;
	    var container = this.getContainer();

	    if (container.contains(e.target) && container !== e.target && (e.type !== 'keyup' || e.which === keyCodes.tab)) {
	      return;
	    }

	    this.toggle(e);
	  };

	  _proto.handleKeyDown = function handleKeyDown(e) {
	    var _this4 = this;

	    if (/input|textarea/i.test(e.target.tagName) || keyCodes.tab === e.which && e.target.getAttribute('role') !== 'menuitem') {
	      return;
	    }

	    e.preventDefault();
	    if (this.props.disabled) return;

	    if (this.getMenuCtrl() === e.target) {
	      if (!this.props.isOpen && [keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down].indexOf(e.which) > -1) {
	        this.toggle(e);
	        setTimeout(function () {
	          return _this4.getMenuItems()[0].focus();
	        });
	      }
	    }

	    if (this.props.isOpen && e.target.getAttribute('role') === 'menuitem') {
	      if ([keyCodes.tab, keyCodes.esc].indexOf(e.which) > -1) {
	        this.toggle(e);
	        this.getMenuCtrl().focus();
	      } else if ([keyCodes.space, keyCodes.enter].indexOf(e.which) > -1) {
	        e.target.click();
	        this.getMenuCtrl().focus();
	      } else if ([keyCodes.down, keyCodes.up].indexOf(e.which) > -1 || [keyCodes.n, keyCodes.p].indexOf(e.which) > -1 && e.ctrlKey) {
	        var $menuitems = this.getMenuItems();
	        var index = $menuitems.indexOf(e.target);

	        if (keyCodes.up === e.which || keyCodes.p === e.which && e.ctrlKey) {
	          index = index !== 0 ? index - 1 : $menuitems.length - 1;
	        } else if (keyCodes.down === e.which || keyCodes.n === e.which && e.ctrlKey) {
	          index = index === $menuitems.length - 1 ? 0 : index + 1;
	        }

	        $menuitems[index].focus();
	      } else if (keyCodes.end === e.which) {
	        var _$menuitems = this.getMenuItems();

	        _$menuitems[_$menuitems.length - 1].focus();
	      } else if (keyCodes.home === e.which) {
	        var _$menuitems2 = this.getMenuItems();

	        _$menuitems2[0].focus();
	      } else if (e.which >= 48 && e.which <= 90) {
	        var _$menuitems3 = this.getMenuItems();

	        var charPressed = String.fromCharCode(e.which).toLowerCase();

	        for (var i = 0; i < _$menuitems3.length; i += 1) {
	          var firstLetter = _$menuitems3[i].textContent && _$menuitems3[i].textContent[0].toLowerCase();

	          if (firstLetter === charPressed) {
	            _$menuitems3[i].focus();

	            break;
	          }
	        }
	      }
	    }
	  };

	  _proto.handleProps = function handleProps() {
	    if (this.props.isOpen) {
	      this.addEvents();
	    } else {
	      this.removeEvents();
	    }
	  };

	  _proto.toggle = function toggle(e) {
	    if (this.props.disabled) {
	      return e && e.preventDefault();
	    }

	    return this.props.toggle(e);
	  };

	  _proto.render = function render() {
	    var _classNames, _ref;

	    var _omit = omit(this.props, ['toggle', 'disabled', 'inNavbar']),
	        className = _omit.className,
	        cssModule = _omit.cssModule,
	        direction = _omit.direction,
	        isOpen = _omit.isOpen,
	        group = _omit.group,
	        size = _omit.size,
	        nav = _omit.nav,
	        setActiveFromChild = _omit.setActiveFromChild,
	        active = _omit.active,
	        addonType = _omit.addonType,
	        tag = _omit.tag,
	        attrs = _objectWithoutPropertiesLoose(_omit, ["className", "cssModule", "direction", "isOpen", "group", "size", "nav", "setActiveFromChild", "active", "addonType", "tag"]);

	    var Tag = tag || (nav ? 'li' : 'div');
	    var subItemIsActive = false;

	    if (setActiveFromChild) {
	      React__default.Children.map(this.props.children[1].props.children, function (dropdownItem) {
	        if (dropdownItem && dropdownItem.props.active) subItemIsActive = true;
	      });
	    }

	    var classes = mapToCssModules(classnames(className, direction !== 'down' && "drop" + direction, nav && active ? 'active' : false, setActiveFromChild && subItemIsActive ? 'active' : false, (_classNames = {}, _classNames["input-group-" + addonType] = addonType, _classNames['btn-group'] = group, _classNames["btn-group-" + size] = !!size, _classNames.dropdown = !group && !addonType, _classNames.show = isOpen, _classNames['nav-item'] = nav, _classNames)), cssModule);
	    return React__default.createElement(DropdownContext.Provider, {
	      value: this.getContextValue()
	    }, React__default.createElement(Manager, null, React__default.createElement(Tag, _extends({}, attrs, (_ref = {}, _ref[typeof Tag === 'string' ? 'ref' : 'innerRef'] = this.containerRef, _ref), {
	      onKeyDown: this.handleKeyDown,
	      className: classes
	    }))));
	  };

	  return Dropdown;
	}(React__default.Component);

	Dropdown.propTypes = propTypes$d;
	Dropdown.defaultProps = defaultProps$c;

	var propTypes$e = {
	  children: propTypes.node
	};

	var ButtonDropdown = function ButtonDropdown(props) {
	  return React__default.createElement(Dropdown, _extends({
	    group: true
	  }, props));
	};

	ButtonDropdown.propTypes = propTypes$e;

	var propTypes$f = {
	  tag: tagPropType,
	  'aria-label': propTypes.string,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  role: propTypes.string,
	  size: propTypes.string,
	  vertical: propTypes.bool
	};
	var defaultProps$d = {
	  tag: 'div',
	  role: 'group'
	};

	var ButtonGroup = function ButtonGroup(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      size = props.size,
	      vertical = props.vertical,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "size", "vertical", "tag"]);

	  var classes = mapToCssModules(classnames(className, size ? 'btn-group-' + size : false, vertical ? 'btn-group-vertical' : 'btn-group'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	ButtonGroup.propTypes = propTypes$f;
	ButtonGroup.defaultProps = defaultProps$d;

	var propTypes$g = {
	  tag: tagPropType,
	  'aria-label': propTypes.string,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  role: propTypes.string
	};
	var defaultProps$e = {
	  tag: 'div',
	  role: 'toolbar'
	};

	var ButtonToolbar = function ButtonToolbar(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'btn-toolbar'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	ButtonToolbar.propTypes = propTypes$g;
	ButtonToolbar.defaultProps = defaultProps$e;

	var propTypes$h = {
	  children: propTypes.node,
	  active: propTypes.bool,
	  disabled: propTypes.bool,
	  divider: propTypes.bool,
	  tag: tagPropType,
	  header: propTypes.bool,
	  onClick: propTypes.func,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  toggle: propTypes.bool
	};
	var defaultProps$f = {
	  tag: 'button',
	  toggle: true
	};

	var DropdownItem =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(DropdownItem, _React$Component);

	  function DropdownItem(props) {
	    var _this;

	    _this = _React$Component.call(this, props) || this;
	    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
	    _this.getTabIndex = _this.getTabIndex.bind(_assertThisInitialized(_this));
	    return _this;
	  }

	  var _proto = DropdownItem.prototype;

	  _proto.onClick = function onClick(e) {
	    if (this.props.disabled || this.props.header || this.props.divider) {
	      e.preventDefault();
	      return;
	    }

	    if (this.props.onClick) {
	      this.props.onClick(e);
	    }

	    if (this.props.toggle) {
	      this.context.toggle(e);
	    }
	  };

	  _proto.getTabIndex = function getTabIndex() {
	    if (this.props.disabled || this.props.header || this.props.divider) {
	      return '-1';
	    }

	    return '0';
	  };

	  _proto.render = function render() {
	    var tabIndex = this.getTabIndex();
	    var role = tabIndex > -1 ? 'menuitem' : undefined;

	    var _omit = omit(this.props, ['toggle']),
	        className = _omit.className,
	        cssModule = _omit.cssModule,
	        divider = _omit.divider,
	        Tag = _omit.tag,
	        header = _omit.header,
	        active = _omit.active,
	        props = _objectWithoutPropertiesLoose(_omit, ["className", "cssModule", "divider", "tag", "header", "active"]);

	    var classes = mapToCssModules(classnames(className, {
	      disabled: props.disabled,
	      'dropdown-item': !divider && !header,
	      active: active,
	      'dropdown-header': header,
	      'dropdown-divider': divider
	    }), cssModule);

	    if (Tag === 'button') {
	      if (header) {
	        Tag = 'h6';
	      } else if (divider) {
	        Tag = 'div';
	      } else if (props.href) {
	        Tag = 'a';
	      }
	    }

	    return React__default.createElement(Tag, _extends({
	      type: Tag === 'button' && (props.onClick || this.props.toggle) ? 'button' : undefined
	    }, props, {
	      tabIndex: tabIndex,
	      role: role,
	      className: classes,
	      onClick: this.onClick
	    }));
	  };

	  return DropdownItem;
	}(React__default.Component);

	DropdownItem.propTypes = propTypes$h;
	DropdownItem.defaultProps = defaultProps$f;
	DropdownItem.contextType = DropdownContext;

	function _defineProperty$1(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function _objectSpread(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};
	    var ownKeys = Object.keys(source);

	    if (typeof Object.getOwnPropertySymbols === 'function') {
	      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
	        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
	      }));
	    }

	    ownKeys.forEach(function (key) {
	      _defineProperty$1(target, key, source[key]);
	    });
	  }

	  return target;
	}

	var propTypes$i = {
	  tag: tagPropType,
	  children: propTypes.node.isRequired,
	  right: propTypes.bool,
	  flip: propTypes.bool,
	  modifiers: propTypes.object,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  persist: propTypes.bool,
	  positionFixed: propTypes.bool
	};
	var defaultProps$g = {
	  tag: 'div',
	  flip: true
	};
	var noFlipModifier = {
	  flip: {
	    enabled: false
	  }
	};
	var directionPositionMap = {
	  up: 'top',
	  left: 'left',
	  right: 'right',
	  down: 'bottom'
	};

	var DropdownMenu =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(DropdownMenu, _React$Component);

	  function DropdownMenu() {
	    return _React$Component.apply(this, arguments) || this;
	  }

	  var _proto = DropdownMenu.prototype;

	  _proto.render = function render() {
	    var _this = this;

	    var _this$props = this.props,
	        className = _this$props.className,
	        cssModule = _this$props.cssModule,
	        right = _this$props.right,
	        tag = _this$props.tag,
	        flip = _this$props.flip,
	        modifiers = _this$props.modifiers,
	        persist = _this$props.persist,
	        positionFixed = _this$props.positionFixed,
	        attrs = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "right", "tag", "flip", "modifiers", "persist", "positionFixed"]);

	    var classes = mapToCssModules(classnames(className, 'dropdown-menu', {
	      'dropdown-menu-right': right,
	      show: this.context.isOpen
	    }), cssModule);
	    var Tag = tag;

	    if (persist || this.context.isOpen && !this.context.inNavbar) {
	      var position1 = directionPositionMap[this.context.direction] || 'bottom';
	      var position2 = right ? 'end' : 'start';
	      var poperPlacement = position1 + "-" + position2;
	      var poperModifiers = !flip ? _objectSpread({}, modifiers, noFlipModifier) : modifiers;
	      var popperPositionFixed = !!positionFixed;
	      return React__default.createElement(Popper$1, {
	        placement: poperPlacement,
	        modifiers: poperModifiers,
	        positionFixed: popperPositionFixed
	      }, function (_ref) {
	        var ref = _ref.ref,
	            style = _ref.style,
	            placement = _ref.placement;
	        return React__default.createElement(Tag, _extends({
	          tabIndex: "-1",
	          role: "menu",
	          ref: ref,
	          style: style
	        }, attrs, {
	          "aria-hidden": !_this.context.isOpen,
	          className: classes,
	          "x-placement": placement
	        }));
	      });
	    }

	    return React__default.createElement(Tag, _extends({
	      tabIndex: "-1",
	      role: "menu"
	    }, attrs, {
	      "aria-hidden": !this.context.isOpen,
	      className: classes,
	      "x-placement": attrs.placement
	    }));
	  };

	  return DropdownMenu;
	}(React__default.Component);
	DropdownMenu.propTypes = propTypes$i;
	DropdownMenu.defaultProps = defaultProps$g;
	DropdownMenu.contextType = DropdownContext;

	var propTypes$j = {
	  caret: propTypes.bool,
	  color: propTypes.string,
	  children: propTypes.node,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  disabled: propTypes.bool,
	  onClick: propTypes.func,
	  'aria-haspopup': propTypes.bool,
	  split: propTypes.bool,
	  tag: tagPropType,
	  nav: propTypes.bool
	};
	var defaultProps$h = {
	  'aria-haspopup': true,
	  color: 'secondary'
	};

	var DropdownToggle =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(DropdownToggle, _React$Component);

	  function DropdownToggle(props) {
	    var _this;

	    _this = _React$Component.call(this, props) || this;
	    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
	    return _this;
	  }

	  var _proto = DropdownToggle.prototype;

	  _proto.onClick = function onClick(e) {
	    if (this.props.disabled) {
	      e.preventDefault();
	      return;
	    }

	    if (this.props.nav && !this.props.tag) {
	      e.preventDefault();
	    }

	    if (this.props.onClick) {
	      this.props.onClick(e);
	    }

	    this.context.toggle(e);
	  };

	  _proto.render = function render() {
	    var _this2 = this;

	    var _this$props = this.props,
	        className = _this$props.className,
	        color = _this$props.color,
	        cssModule = _this$props.cssModule,
	        caret = _this$props.caret,
	        split = _this$props.split,
	        nav = _this$props.nav,
	        tag = _this$props.tag,
	        props = _objectWithoutPropertiesLoose(_this$props, ["className", "color", "cssModule", "caret", "split", "nav", "tag"]);

	    var ariaLabel = props['aria-label'] || 'Toggle Dropdown';
	    var classes = mapToCssModules(classnames(className, {
	      'dropdown-toggle': caret || split,
	      'dropdown-toggle-split': split,
	      'nav-link': nav
	    }), cssModule);
	    var children = props.children || React__default.createElement("span", {
	      className: "sr-only"
	    }, ariaLabel);
	    var Tag;

	    if (nav && !tag) {
	      Tag = 'a';
	      props.href = '#';
	    } else if (!tag) {
	      Tag = Button;
	      props.color = color;
	      props.cssModule = cssModule;
	    } else {
	      Tag = tag;
	    }

	    if (this.context.inNavbar) {
	      return React__default.createElement(Tag, _extends({}, props, {
	        className: classes,
	        onClick: this.onClick,
	        "aria-expanded": this.context.isOpen,
	        children: children
	      }));
	    }

	    return React__default.createElement(Reference, null, function (_ref) {
	      var _ref2;

	      var ref = _ref.ref;
	      return React__default.createElement(Tag, _extends({}, props, (_ref2 = {}, _ref2[typeof Tag === 'string' ? 'ref' : 'innerRef'] = ref, _ref2), {
	        className: classes,
	        onClick: _this2.onClick,
	        "aria-expanded": _this2.context.isOpen,
	        children: children
	      }));
	    });
	  };

	  return DropdownToggle;
	}(React__default.Component);

	DropdownToggle.propTypes = propTypes$j;
	DropdownToggle.defaultProps = defaultProps$h;
	DropdownToggle.contextType = DropdownContext;

	var interopRequireDefault = createCommonjsModule(function (module) {
	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      "default": obj
	    };
	  }

	  module.exports = _interopRequireDefault;
	});
	unwrapExports(interopRequireDefault);

	var hasClass_1 = createCommonjsModule(function (module, exports) {

	  exports.__esModule = true;
	  exports["default"] = hasClass;

	  function hasClass(element, className) {
	    if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
	  }

	  module.exports = exports["default"];
	});
	unwrapExports(hasClass_1);

	var addClass_1 = createCommonjsModule(function (module, exports) {

	  exports.__esModule = true;
	  exports["default"] = addClass;

	  var _hasClass = interopRequireDefault(hasClass_1);

	  function addClass(element, className) {
	    if (element.classList) element.classList.add(className);else if (!(0, _hasClass["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
	  }

	  module.exports = exports["default"];
	});
	unwrapExports(addClass_1);

	function replaceClassName(origClass, classToRemove) {
	  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
	}

	var removeClass = function removeClass(element, className) {
	  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
	};

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	function componentWillMount() {
	  // Call this.constructor.gDSFP to support sub-classes.
	  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);

	  if (state !== null && state !== undefined) {
	    this.setState(state);
	  }
	}

	function componentWillReceiveProps(nextProps) {
	  // Call this.constructor.gDSFP to support sub-classes.
	  // Use the setState() updater to ensure state isn't stale in certain edge cases.
	  function updater(prevState) {
	    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
	    return state !== null && state !== undefined ? state : null;
	  } // Binding "this" is important for shallow renderer support.


	  this.setState(updater.bind(this));
	}

	function componentWillUpdate(nextProps, nextState) {
	  try {
	    var prevProps = this.props;
	    var prevState = this.state;
	    this.props = nextProps;
	    this.state = nextState;
	    this.__reactInternalSnapshotFlag = true;
	    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
	  } finally {
	    this.props = prevProps;
	    this.state = prevState;
	  }
	} // React may warn about cWM/cWRP/cWU methods being deprecated.
	// Add a flag to suppress these warnings for this special case.


	componentWillMount.__suppressDeprecationWarning = true;
	componentWillReceiveProps.__suppressDeprecationWarning = true;
	componentWillUpdate.__suppressDeprecationWarning = true;

	function polyfill(Component) {
	  var prototype = Component.prototype;

	  if (!prototype || !prototype.isReactComponent) {
	    throw new Error('Can only polyfill class components');
	  }

	  if (typeof Component.getDerivedStateFromProps !== 'function' && typeof prototype.getSnapshotBeforeUpdate !== 'function') {
	    return Component;
	  } // If new component APIs are defined, "unsafe" lifecycles won't be called.
	  // Error if any of these lifecycles are present,
	  // Because they would work differently between older and newer (16.3+) versions of React.


	  var foundWillMountName = null;
	  var foundWillReceivePropsName = null;
	  var foundWillUpdateName = null;

	  if (typeof prototype.componentWillMount === 'function') {
	    foundWillMountName = 'componentWillMount';
	  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
	    foundWillMountName = 'UNSAFE_componentWillMount';
	  }

	  if (typeof prototype.componentWillReceiveProps === 'function') {
	    foundWillReceivePropsName = 'componentWillReceiveProps';
	  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
	    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
	  }

	  if (typeof prototype.componentWillUpdate === 'function') {
	    foundWillUpdateName = 'componentWillUpdate';
	  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
	    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
	  }

	  if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
	    var componentName = Component.displayName || Component.name;
	    var newApiName = typeof Component.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
	    throw Error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + componentName + ' uses ' + newApiName + ' but also contains the following legacy lifecycles:' + (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') + (foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '') + (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') + '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks');
	  } // React <= 16.2 does not support static getDerivedStateFromProps.
	  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
	  // Newer versions of React will ignore these lifecycles if gDSFP exists.


	  if (typeof Component.getDerivedStateFromProps === 'function') {
	    prototype.componentWillMount = componentWillMount;
	    prototype.componentWillReceiveProps = componentWillReceiveProps;
	  } // React <= 16.2 does not support getSnapshotBeforeUpdate.
	  // As a workaround, use cWU to invoke the new lifecycle.
	  // Newer versions of React will ignore that lifecycle if gSBU exists.


	  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
	    if (typeof prototype.componentDidUpdate !== 'function') {
	      throw new Error('Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype');
	    }

	    prototype.componentWillUpdate = componentWillUpdate;
	    var componentDidUpdate = prototype.componentDidUpdate;

	    prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
	      // 16.3+ will not execute our will-update method;
	      // It will pass a snapshot value to did-update though.
	      // Older versions will require our polyfilled will-update value.
	      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
	      // Because for <= 15.x versions this might be a "prevContext" object.
	      // We also can't just check "__reactInternalSnapshot",
	      // Because get-snapshot might return a falsy value.
	      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
	      var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
	      componentDidUpdate.call(this, prevProps, prevState, snapshot);
	    };
	  }

	  return Component;
	}

	var reactLifecyclesCompat_es = /*#__PURE__*/Object.freeze({
		__proto__: null,
		polyfill: polyfill
	});

	var Transition_1 = createCommonjsModule(function (module, exports) {

	  exports.__esModule = true;
	  exports["default"] = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

	  var PropTypes = _interopRequireWildcard(propTypes);

	  var _react = _interopRequireDefault(React__default);

	  var _reactDom = _interopRequireDefault(ReactDOM);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      "default": obj
	    };
	  }

	  function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	      return obj;
	    } else {
	      var newObj = {};

	      if (obj != null) {
	        for (var key in obj) {
	          if (Object.prototype.hasOwnProperty.call(obj, key)) {
	            var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

	            if (desc.get || desc.set) {
	              Object.defineProperty(newObj, key, desc);
	            } else {
	              newObj[key] = obj[key];
	            }
	          }
	        }
	      }

	      newObj["default"] = obj;
	      return newObj;
	    }
	  }

	  function _objectWithoutPropertiesLoose(source, excluded) {
	    if (source == null) return {};
	    var target = {};
	    var sourceKeys = Object.keys(source);
	    var key, i;

	    for (i = 0; i < sourceKeys.length; i++) {
	      key = sourceKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      target[key] = source[key];
	    }

	    return target;
	  }

	  function _inheritsLoose(subClass, superClass) {
	    subClass.prototype = Object.create(superClass.prototype);
	    subClass.prototype.constructor = subClass;
	    subClass.__proto__ = superClass;
	  }

	  var UNMOUNTED = 'unmounted';
	  exports.UNMOUNTED = UNMOUNTED;
	  var EXITED = 'exited';
	  exports.EXITED = EXITED;
	  var ENTERING = 'entering';
	  exports.ENTERING = ENTERING;
	  var ENTERED = 'entered';
	  exports.ENTERED = ENTERED;
	  var EXITING = 'exiting';
	  /**
	   * The Transition component lets you describe a transition from one component
	   * state to another _over time_ with a simple declarative API. Most commonly
	   * it's used to animate the mounting and unmounting of a component, but can also
	   * be used to describe in-place transition states as well.
	   *
	   * ---
	   *
	   * **Note**: `Transition` is a platform-agnostic base component. If you're using
	   * transitions in CSS, you'll probably want to use
	   * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
	   * instead. It inherits all the features of `Transition`, but contains
	   * additional features necessary to play nice with CSS transitions (hence the
	   * name of the component).
	   *
	   * ---
	   *
	   * By default the `Transition` component does not alter the behavior of the
	   * component it renders, it only tracks "enter" and "exit" states for the
	   * components. It's up to you to give meaning and effect to those states. For
	   * example we can add styles to a component when it enters or exits:
	   *
	   * ```jsx
	   * import { Transition } from 'react-transition-group';
	   *
	   * const duration = 300;
	   *
	   * const defaultStyle = {
	   *   transition: `opacity ${duration}ms ease-in-out`,
	   *   opacity: 0,
	   * }
	   *
	   * const transitionStyles = {
	   *   entering: { opacity: 0 },
	   *   entered:  { opacity: 1 },
	   * };
	   *
	   * const Fade = ({ in: inProp }) => (
	   *   <Transition in={inProp} timeout={duration}>
	   *     {state => (
	   *       <div style={{
	   *         ...defaultStyle,
	   *         ...transitionStyles[state]
	   *       }}>
	   *         I'm a fade Transition!
	   *       </div>
	   *     )}
	   *   </Transition>
	   * );
	   * ```
	   *
	   * There are 4 main states a Transition can be in:
	   *  - `'entering'`
	   *  - `'entered'`
	   *  - `'exiting'`
	   *  - `'exited'`
	   *
	   * Transition state is toggled via the `in` prop. When `true` the component
	   * begins the "Enter" stage. During this stage, the component will shift from
	   * its current transition state, to `'entering'` for the duration of the
	   * transition and then to the `'entered'` stage once it's complete. Let's take
	   * the following example (we'll use the
	   * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
	   *
	   * ```jsx
	   * function App() {
	   *   const [inProp, setInProp] = useState(false);
	   *   return (
	   *     <div>
	   *       <Transition in={inProp} timeout={500}>
	   *         {state => (
	   *           // ...
	   *         )}
	   *       </Transition>
	   *       <button onClick={() => setInProp(true)}>
	   *         Click to Enter
	   *       </button>
	   *     </div>
	   *   );
	   * }
	   * ```
	   *
	   * When the button is clicked the component will shift to the `'entering'` state
	   * and stay there for 500ms (the value of `timeout`) before it finally switches
	   * to `'entered'`.
	   *
	   * When `in` is `false` the same thing happens except the state moves from
	   * `'exiting'` to `'exited'`.
	   */

	  exports.EXITING = EXITING;

	  var Transition =
	  /*#__PURE__*/
	  function (_React$Component) {
	    _inheritsLoose(Transition, _React$Component);

	    function Transition(props, context) {
	      var _this;

	      _this = _React$Component.call(this, props, context) || this;
	      var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

	      var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
	      var initialStatus;
	      _this.appearStatus = null;

	      if (props["in"]) {
	        if (appear) {
	          initialStatus = EXITED;
	          _this.appearStatus = ENTERING;
	        } else {
	          initialStatus = ENTERED;
	        }
	      } else {
	        if (props.unmountOnExit || props.mountOnEnter) {
	          initialStatus = UNMOUNTED;
	        } else {
	          initialStatus = EXITED;
	        }
	      }

	      _this.state = {
	        status: initialStatus
	      };
	      _this.nextCallback = null;
	      return _this;
	    }

	    var _proto = Transition.prototype;

	    _proto.getChildContext = function getChildContext() {
	      return {
	        transitionGroup: null // allows for nested Transitions

	      };
	    };

	    Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
	      var nextIn = _ref["in"];

	      if (nextIn && prevState.status === UNMOUNTED) {
	        return {
	          status: EXITED
	        };
	      }

	      return null;
	    }; // getSnapshotBeforeUpdate(prevProps) {
	    //   let nextStatus = null
	    //   if (prevProps !== this.props) {
	    //     const { status } = this.state
	    //     if (this.props.in) {
	    //       if (status !== ENTERING && status !== ENTERED) {
	    //         nextStatus = ENTERING
	    //       }
	    //     } else {
	    //       if (status === ENTERING || status === ENTERED) {
	    //         nextStatus = EXITING
	    //       }
	    //     }
	    //   }
	    //   return { nextStatus }
	    // }


	    _proto.componentDidMount = function componentDidMount() {
	      this.updateStatus(true, this.appearStatus);
	    };

	    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
	      var nextStatus = null;

	      if (prevProps !== this.props) {
	        var status = this.state.status;

	        if (this.props["in"]) {
	          if (status !== ENTERING && status !== ENTERED) {
	            nextStatus = ENTERING;
	          }
	        } else {
	          if (status === ENTERING || status === ENTERED) {
	            nextStatus = EXITING;
	          }
	        }
	      }

	      this.updateStatus(false, nextStatus);
	    };

	    _proto.componentWillUnmount = function componentWillUnmount() {
	      this.cancelNextCallback();
	    };

	    _proto.getTimeouts = function getTimeouts() {
	      var timeout = this.props.timeout;
	      var exit, enter, appear;
	      exit = enter = appear = timeout;

	      if (timeout != null && typeof timeout !== 'number') {
	        exit = timeout.exit;
	        enter = timeout.enter; // TODO: remove fallback for next major

	        appear = timeout.appear !== undefined ? timeout.appear : enter;
	      }

	      return {
	        exit: exit,
	        enter: enter,
	        appear: appear
	      };
	    };

	    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
	      if (mounting === void 0) {
	        mounting = false;
	      }

	      if (nextStatus !== null) {
	        // nextStatus will always be ENTERING or EXITING.
	        this.cancelNextCallback();

	        var node = _reactDom["default"].findDOMNode(this);

	        if (nextStatus === ENTERING) {
	          this.performEnter(node, mounting);
	        } else {
	          this.performExit(node);
	        }
	      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
	        this.setState({
	          status: UNMOUNTED
	        });
	      }
	    };

	    _proto.performEnter = function performEnter(node, mounting) {
	      var _this2 = this;

	      var enter = this.props.enter;
	      var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
	      var timeouts = this.getTimeouts();
	      var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
	      // if we are mounting and running this it means appear _must_ be set

	      if (!mounting && !enter) {
	        this.safeSetState({
	          status: ENTERED
	        }, function () {
	          _this2.props.onEntered(node);
	        });
	        return;
	      }

	      this.props.onEnter(node, appearing);
	      this.safeSetState({
	        status: ENTERING
	      }, function () {
	        _this2.props.onEntering(node, appearing);

	        _this2.onTransitionEnd(node, enterTimeout, function () {
	          _this2.safeSetState({
	            status: ENTERED
	          }, function () {
	            _this2.props.onEntered(node, appearing);
	          });
	        });
	      });
	    };

	    _proto.performExit = function performExit(node) {
	      var _this3 = this;

	      var exit = this.props.exit;
	      var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

	      if (!exit) {
	        this.safeSetState({
	          status: EXITED
	        }, function () {
	          _this3.props.onExited(node);
	        });
	        return;
	      }

	      this.props.onExit(node);
	      this.safeSetState({
	        status: EXITING
	      }, function () {
	        _this3.props.onExiting(node);

	        _this3.onTransitionEnd(node, timeouts.exit, function () {
	          _this3.safeSetState({
	            status: EXITED
	          }, function () {
	            _this3.props.onExited(node);
	          });
	        });
	      });
	    };

	    _proto.cancelNextCallback = function cancelNextCallback() {
	      if (this.nextCallback !== null) {
	        this.nextCallback.cancel();
	        this.nextCallback = null;
	      }
	    };

	    _proto.safeSetState = function safeSetState(nextState, callback) {
	      // This shouldn't be necessary, but there are weird race conditions with
	      // setState callbacks and unmounting in testing, so always make sure that
	      // we can cancel any pending setState callbacks after we unmount.
	      callback = this.setNextCallback(callback);
	      this.setState(nextState, callback);
	    };

	    _proto.setNextCallback = function setNextCallback(callback) {
	      var _this4 = this;

	      var active = true;

	      this.nextCallback = function (event) {
	        if (active) {
	          active = false;
	          _this4.nextCallback = null;
	          callback(event);
	        }
	      };

	      this.nextCallback.cancel = function () {
	        active = false;
	      };

	      return this.nextCallback;
	    };

	    _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
	      this.setNextCallback(handler);
	      var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

	      if (!node || doesNotHaveTimeoutOrListener) {
	        setTimeout(this.nextCallback, 0);
	        return;
	      }

	      if (this.props.addEndListener) {
	        this.props.addEndListener(node, this.nextCallback);
	      }

	      if (timeout != null) {
	        setTimeout(this.nextCallback, timeout);
	      }
	    };

	    _proto.render = function render() {
	      var status = this.state.status;

	      if (status === UNMOUNTED) {
	        return null;
	      }

	      var _this$props = this.props,
	          children = _this$props.children,
	          childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


	      delete childProps["in"];
	      delete childProps.mountOnEnter;
	      delete childProps.unmountOnExit;
	      delete childProps.appear;
	      delete childProps.enter;
	      delete childProps.exit;
	      delete childProps.timeout;
	      delete childProps.addEndListener;
	      delete childProps.onEnter;
	      delete childProps.onEntering;
	      delete childProps.onEntered;
	      delete childProps.onExit;
	      delete childProps.onExiting;
	      delete childProps.onExited;

	      if (typeof children === 'function') {
	        return children(status, childProps);
	      }

	      var child = _react["default"].Children.only(children);

	      return _react["default"].cloneElement(child, childProps);
	    };

	    return Transition;
	  }(_react["default"].Component);

	  Transition.contextTypes = {
	    transitionGroup: PropTypes.object
	  };
	  Transition.childContextTypes = {
	    transitionGroup: function transitionGroup() {}
	  };
	  Transition.propTypes =  {};

	  function noop() {}

	  Transition.defaultProps = {
	    "in": false,
	    mountOnEnter: false,
	    unmountOnExit: false,
	    appear: false,
	    enter: true,
	    exit: true,
	    onEnter: noop,
	    onEntering: noop,
	    onEntered: noop,
	    onExit: noop,
	    onExiting: noop,
	    onExited: noop
	  };
	  Transition.UNMOUNTED = 0;
	  Transition.EXITED = 1;
	  Transition.ENTERING = 2;
	  Transition.ENTERED = 3;
	  Transition.EXITING = 4;

	  var _default = (0, reactLifecyclesCompat_es.polyfill)(Transition);

	  exports["default"] = _default;
	});
	var Transition = unwrapExports(Transition_1);
	var Transition_2 = Transition_1.EXITING;
	var Transition_3 = Transition_1.ENTERED;
	var Transition_4 = Transition_1.ENTERING;
	var Transition_5 = Transition_1.EXITED;
	var Transition_6 = Transition_1.UNMOUNTED;

	var CSSTransition_1 = createCommonjsModule(function (module, exports) {

	  exports.__esModule = true;
	  exports["default"] = void 0;

	  var PropTypes = _interopRequireWildcard(propTypes);

	  var _addClass = _interopRequireDefault(addClass_1);

	  var _removeClass = _interopRequireDefault(removeClass);

	  var _react = _interopRequireDefault(React__default);

	  var _Transition = _interopRequireDefault(Transition_1);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      "default": obj
	    };
	  }

	  function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	      return obj;
	    } else {
	      var newObj = {};

	      if (obj != null) {
	        for (var key in obj) {
	          if (Object.prototype.hasOwnProperty.call(obj, key)) {
	            var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

	            if (desc.get || desc.set) {
	              Object.defineProperty(newObj, key, desc);
	            } else {
	              newObj[key] = obj[key];
	            }
	          }
	        }
	      }

	      newObj["default"] = obj;
	      return newObj;
	    }
	  }

	  function _extends() {
	    _extends = Object.assign || function (target) {
	      for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];

	        for (var key in source) {
	          if (Object.prototype.hasOwnProperty.call(source, key)) {
	            target[key] = source[key];
	          }
	        }
	      }

	      return target;
	    };

	    return _extends.apply(this, arguments);
	  }

	  function _inheritsLoose(subClass, superClass) {
	    subClass.prototype = Object.create(superClass.prototype);
	    subClass.prototype.constructor = subClass;
	    subClass.__proto__ = superClass;
	  }

	  var addClass = function addClass(node, classes) {
	    return node && classes && classes.split(' ').forEach(function (c) {
	      return (0, _addClass["default"])(node, c);
	    });
	  };

	  var removeClass$1 = function removeClass(node, classes) {
	    return node && classes && classes.split(' ').forEach(function (c) {
	      return (0, _removeClass["default"])(node, c);
	    });
	  };
	  /**
	   * A transition component inspired by the excellent
	   * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
	   * using CSS transitions or animations. It's built upon the
	   * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
	   * component, so it inherits all of its props.
	   *
	   * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
	   * and `exit` states of the transition. The first class is applied and then a
	   * second `*-active` class in order to activate the CSSS transition. After the
	   * transition, matching `*-done` class names are applied to persist the
	   * transition state.
	   *
	   * ```jsx
	   * function App() {
	   *   const [inProp, setInProp] = useState(false);
	   *   return (
	   *     <div>
	   *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
	   *         <div>
	   *           {"I'll receive my-node-* classes"}
	   *         </div>
	   *       </CSSTransition>
	   *       <button type="button" onClick={() => setInProp(true)}>
	   *         Click to Enter
	   *       </button>
	   *     </div>
	   *   );
	   * }
	   * ```
	   *
	   * When the `in` prop is set to `true`, the child component will first receive
	   * the class `example-enter`, then the `example-enter-active` will be added in
	   * the next tick. `CSSTransition` [forces a
	   * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
	   * between before adding the `example-enter-active`. This is an important trick
	   * because it allows us to transition between `example-enter` and
	   * `example-enter-active` even though they were added immediately one after
	   * another. Most notably, this is what makes it possible for us to animate
	   * _appearance_.
	   *
	   * ```css
	   * .my-node-enter {
	   *   opacity: 0;
	   * }
	   * .my-node-enter-active {
	   *   opacity: 1;
	   *   transition: opacity 200ms;
	   * }
	   * .my-node-exit {
	   *   opacity: 1;
	   * }
	   * .my-node-exit-active {
	   *   opacity: 0;
	   *   transition: opacity: 200ms;
	   * }
	   * ```
	   *
	   * `*-active` classes represent which styles you want to animate **to**.
	   */


	  var CSSTransition =
	  /*#__PURE__*/
	  function (_React$Component) {
	    _inheritsLoose(CSSTransition, _React$Component);

	    function CSSTransition() {
	      var _this;

	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

	      _this.onEnter = function (node, appearing) {
	        var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
	            className = _this$getClassNames.className;

	        _this.removeClasses(node, 'exit');

	        addClass(node, className);

	        if (_this.props.onEnter) {
	          _this.props.onEnter(node, appearing);
	        }
	      };

	      _this.onEntering = function (node, appearing) {
	        var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
	            activeClassName = _this$getClassNames2.activeClassName;

	        _this.reflowAndAddClass(node, activeClassName);

	        if (_this.props.onEntering) {
	          _this.props.onEntering(node, appearing);
	        }
	      };

	      _this.onEntered = function (node, appearing) {
	        var appearClassName = _this.getClassNames('appear').doneClassName;

	        var enterClassName = _this.getClassNames('enter').doneClassName;

	        var doneClassName = appearing ? appearClassName + " " + enterClassName : enterClassName;

	        _this.removeClasses(node, appearing ? 'appear' : 'enter');

	        addClass(node, doneClassName);

	        if (_this.props.onEntered) {
	          _this.props.onEntered(node, appearing);
	        }
	      };

	      _this.onExit = function (node) {
	        var _this$getClassNames3 = _this.getClassNames('exit'),
	            className = _this$getClassNames3.className;

	        _this.removeClasses(node, 'appear');

	        _this.removeClasses(node, 'enter');

	        addClass(node, className);

	        if (_this.props.onExit) {
	          _this.props.onExit(node);
	        }
	      };

	      _this.onExiting = function (node) {
	        var _this$getClassNames4 = _this.getClassNames('exit'),
	            activeClassName = _this$getClassNames4.activeClassName;

	        _this.reflowAndAddClass(node, activeClassName);

	        if (_this.props.onExiting) {
	          _this.props.onExiting(node);
	        }
	      };

	      _this.onExited = function (node) {
	        var _this$getClassNames5 = _this.getClassNames('exit'),
	            doneClassName = _this$getClassNames5.doneClassName;

	        _this.removeClasses(node, 'exit');

	        addClass(node, doneClassName);

	        if (_this.props.onExited) {
	          _this.props.onExited(node);
	        }
	      };

	      _this.getClassNames = function (type) {
	        var classNames = _this.props.classNames;
	        var isStringClassNames = typeof classNames === 'string';
	        var prefix = isStringClassNames && classNames ? classNames + '-' : '';
	        var className = isStringClassNames ? prefix + type : classNames[type];
	        var activeClassName = isStringClassNames ? className + '-active' : classNames[type + 'Active'];
	        var doneClassName = isStringClassNames ? className + '-done' : classNames[type + 'Done'];
	        return {
	          className: className,
	          activeClassName: activeClassName,
	          doneClassName: doneClassName
	        };
	      };

	      return _this;
	    }

	    var _proto = CSSTransition.prototype;

	    _proto.removeClasses = function removeClasses(node, type) {
	      var _this$getClassNames6 = this.getClassNames(type),
	          className = _this$getClassNames6.className,
	          activeClassName = _this$getClassNames6.activeClassName,
	          doneClassName = _this$getClassNames6.doneClassName;

	      className && removeClass$1(node, className);
	      activeClassName && removeClass$1(node, activeClassName);
	      doneClassName && removeClass$1(node, doneClassName);
	    };

	    _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
	      // This is for to force a repaint,
	      // which is necessary in order to transition styles when adding a class name.
	      if (className) {
	        /* eslint-disable no-unused-expressions */
	        node && node.scrollTop;
	        /* eslint-enable no-unused-expressions */

	        addClass(node, className);
	      }
	    };

	    _proto.render = function render() {
	      var props = _extends({}, this.props);

	      delete props.classNames;
	      return _react["default"].createElement(_Transition["default"], _extends({}, props, {
	        onEnter: this.onEnter,
	        onEntered: this.onEntered,
	        onEntering: this.onEntering,
	        onExit: this.onExit,
	        onExiting: this.onExiting,
	        onExited: this.onExited
	      }));
	    };

	    return CSSTransition;
	  }(_react["default"].Component);

	  CSSTransition.defaultProps = {
	    classNames: ''
	  };
	  CSSTransition.propTypes =  {};
	  var _default = CSSTransition;
	  exports["default"] = _default;
	  module.exports = exports["default"];
	});
	unwrapExports(CSSTransition_1);

	var ChildMapping = createCommonjsModule(function (module, exports) {

	  exports.__esModule = true;
	  exports.getChildMapping = getChildMapping;
	  exports.mergeChildMappings = mergeChildMappings;
	  exports.getInitialChildMapping = getInitialChildMapping;
	  exports.getNextChildMapping = getNextChildMapping;
	  /**
	   * Given `this.props.children`, return an object mapping key to child.
	   *
	   * @param {*} children `this.props.children`
	   * @return {object} Mapping of key to child
	   */

	  function getChildMapping(children, mapFn) {
	    var mapper = function mapper(child) {
	      return mapFn && (0, React__default.isValidElement)(child) ? mapFn(child) : child;
	    };

	    var result = Object.create(null);
	    if (children) React__default.Children.map(children, function (c) {
	      return c;
	    }).forEach(function (child) {
	      // run the map function here instead so that the key is the computed one
	      result[child.key] = mapper(child);
	    });
	    return result;
	  }
	  /**
	   * When you're adding or removing children some may be added or removed in the
	   * same render pass. We want to show *both* since we want to simultaneously
	   * animate elements in and out. This function takes a previous set of keys
	   * and a new set of keys and merges them with its best guess of the correct
	   * ordering. In the future we may expose some of the utilities in
	   * ReactMultiChild to make this easy, but for now React itself does not
	   * directly have this concept of the union of prevChildren and nextChildren
	   * so we implement it here.
	   *
	   * @param {object} prev prev children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @param {object} next next children as returned from
	   * `ReactTransitionChildMapping.getChildMapping()`.
	   * @return {object} a key set that contains all keys in `prev` and all keys
	   * in `next` in a reasonable order.
	   */


	  function mergeChildMappings(prev, next) {
	    prev = prev || {};
	    next = next || {};

	    function getValueForKey(key) {
	      return key in next ? next[key] : prev[key];
	    } // For each key of `next`, the list of keys to insert before that key in
	    // the combined list


	    var nextKeysPending = Object.create(null);
	    var pendingKeys = [];

	    for (var prevKey in prev) {
	      if (prevKey in next) {
	        if (pendingKeys.length) {
	          nextKeysPending[prevKey] = pendingKeys;
	          pendingKeys = [];
	        }
	      } else {
	        pendingKeys.push(prevKey);
	      }
	    }

	    var i;
	    var childMapping = {};

	    for (var nextKey in next) {
	      if (nextKeysPending[nextKey]) {
	        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
	          var pendingNextKey = nextKeysPending[nextKey][i];
	          childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
	        }
	      }

	      childMapping[nextKey] = getValueForKey(nextKey);
	    } // Finally, add the keys which didn't appear before any key in `next`


	    for (i = 0; i < pendingKeys.length; i++) {
	      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
	    }

	    return childMapping;
	  }

	  function getProp(child, prop, props) {
	    return props[prop] != null ? props[prop] : child.props[prop];
	  }

	  function getInitialChildMapping(props, onExited) {
	    return getChildMapping(props.children, function (child) {
	      return (0, React__default.cloneElement)(child, {
	        onExited: onExited.bind(null, child),
	        "in": true,
	        appear: getProp(child, 'appear', props),
	        enter: getProp(child, 'enter', props),
	        exit: getProp(child, 'exit', props)
	      });
	    });
	  }

	  function getNextChildMapping(nextProps, prevChildMapping, onExited) {
	    var nextChildMapping = getChildMapping(nextProps.children);
	    var children = mergeChildMappings(prevChildMapping, nextChildMapping);
	    Object.keys(children).forEach(function (key) {
	      var child = children[key];
	      if (!(0, React__default.isValidElement)(child)) return;
	      var hasPrev = key in prevChildMapping;
	      var hasNext = key in nextChildMapping;
	      var prevChild = prevChildMapping[key];
	      var isLeaving = (0, React__default.isValidElement)(prevChild) && !prevChild.props["in"]; // item is new (entering)

	      if (hasNext && (!hasPrev || isLeaving)) {
	        // console.log('entering', key)
	        children[key] = (0, React__default.cloneElement)(child, {
	          onExited: onExited.bind(null, child),
	          "in": true,
	          exit: getProp(child, 'exit', nextProps),
	          enter: getProp(child, 'enter', nextProps)
	        });
	      } else if (!hasNext && hasPrev && !isLeaving) {
	        // item is old (exiting)
	        // console.log('leaving', key)
	        children[key] = (0, React__default.cloneElement)(child, {
	          "in": false
	        });
	      } else if (hasNext && hasPrev && (0, React__default.isValidElement)(prevChild)) {
	        // item hasn't changed transition states
	        // copy over the last transition props;
	        // console.log('unchanged', key)
	        children[key] = (0, React__default.cloneElement)(child, {
	          onExited: onExited.bind(null, child),
	          "in": prevChild.props["in"],
	          exit: getProp(child, 'exit', nextProps),
	          enter: getProp(child, 'enter', nextProps)
	        });
	      }
	    });
	    return children;
	  }
	});
	unwrapExports(ChildMapping);
	var ChildMapping_1 = ChildMapping.getChildMapping;
	var ChildMapping_2 = ChildMapping.mergeChildMappings;
	var ChildMapping_3 = ChildMapping.getInitialChildMapping;
	var ChildMapping_4 = ChildMapping.getNextChildMapping;

	var TransitionGroup_1 = createCommonjsModule(function (module, exports) {

	  exports.__esModule = true;
	  exports["default"] = void 0;

	  var _propTypes = _interopRequireDefault(propTypes);

	  var _react = _interopRequireDefault(React__default);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      "default": obj
	    };
	  }

	  function _objectWithoutPropertiesLoose(source, excluded) {
	    if (source == null) return {};
	    var target = {};
	    var sourceKeys = Object.keys(source);
	    var key, i;

	    for (i = 0; i < sourceKeys.length; i++) {
	      key = sourceKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      target[key] = source[key];
	    }

	    return target;
	  }

	  function _extends() {
	    _extends = Object.assign || function (target) {
	      for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];

	        for (var key in source) {
	          if (Object.prototype.hasOwnProperty.call(source, key)) {
	            target[key] = source[key];
	          }
	        }
	      }

	      return target;
	    };

	    return _extends.apply(this, arguments);
	  }

	  function _inheritsLoose(subClass, superClass) {
	    subClass.prototype = Object.create(superClass.prototype);
	    subClass.prototype.constructor = subClass;
	    subClass.__proto__ = superClass;
	  }

	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }

	    return self;
	  }

	  var values = Object.values || function (obj) {
	    return Object.keys(obj).map(function (k) {
	      return obj[k];
	    });
	  };

	  var defaultProps = {
	    component: 'div',
	    childFactory: function childFactory(child) {
	      return child;
	    }
	    /**
	     * The `<TransitionGroup>` component manages a set of transition components
	     * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
	     * components, `<TransitionGroup>` is a state machine for managing the mounting
	     * and unmounting of components over time.
	     *
	     * Consider the example below. As items are removed or added to the TodoList the
	     * `in` prop is toggled automatically by the `<TransitionGroup>`.
	     *
	     * Note that `<TransitionGroup>`  does not define any animation behavior!
	     * Exactly _how_ a list item animates is up to the individual transition
	     * component. This means you can mix and match animations across different list
	     * items.
	     */

	  };

	  var TransitionGroup =
	  /*#__PURE__*/
	  function (_React$Component) {
	    _inheritsLoose(TransitionGroup, _React$Component);

	    function TransitionGroup(props, context) {
	      var _this;

	      _this = _React$Component.call(this, props, context) || this;

	      var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


	      _this.state = {
	        handleExited: handleExited,
	        firstRender: true
	      };
	      return _this;
	    }

	    var _proto = TransitionGroup.prototype;

	    _proto.getChildContext = function getChildContext() {
	      return {
	        transitionGroup: {
	          isMounting: !this.appeared
	        }
	      };
	    };

	    _proto.componentDidMount = function componentDidMount() {
	      this.appeared = true;
	      this.mounted = true;
	    };

	    _proto.componentWillUnmount = function componentWillUnmount() {
	      this.mounted = false;
	    };

	    TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
	      var prevChildMapping = _ref.children,
	          handleExited = _ref.handleExited,
	          firstRender = _ref.firstRender;
	      return {
	        children: firstRender ? (0, ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
	        firstRender: false
	      };
	    };

	    _proto.handleExited = function handleExited(child, node) {
	      var currentChildMapping = (0, ChildMapping.getChildMapping)(this.props.children);
	      if (child.key in currentChildMapping) return;

	      if (child.props.onExited) {
	        child.props.onExited(node);
	      }

	      if (this.mounted) {
	        this.setState(function (state) {
	          var children = _extends({}, state.children);

	          delete children[child.key];
	          return {
	            children: children
	          };
	        });
	      }
	    };

	    _proto.render = function render() {
	      var _this$props = this.props,
	          Component = _this$props.component,
	          childFactory = _this$props.childFactory,
	          props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

	      var children = values(this.state.children).map(childFactory);
	      delete props.appear;
	      delete props.enter;
	      delete props.exit;

	      if (Component === null) {
	        return children;
	      }

	      return _react["default"].createElement(Component, props, children);
	    };

	    return TransitionGroup;
	  }(_react["default"].Component);

	  TransitionGroup.childContextTypes = {
	    transitionGroup: _propTypes["default"].object.isRequired
	  };
	  TransitionGroup.propTypes =  {};
	  TransitionGroup.defaultProps = defaultProps;

	  var _default = (0, reactLifecyclesCompat_es.polyfill)(TransitionGroup);

	  exports["default"] = _default;
	  module.exports = exports["default"];
	});
	unwrapExports(TransitionGroup_1);

	var ReplaceTransition_1 = createCommonjsModule(function (module, exports) {

	  exports.__esModule = true;
	  exports["default"] = void 0;

	  var _propTypes = _interopRequireDefault(propTypes);

	  var _react = _interopRequireDefault(React__default);

	  var _TransitionGroup = _interopRequireDefault(TransitionGroup_1);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      "default": obj
	    };
	  }

	  function _objectWithoutPropertiesLoose(source, excluded) {
	    if (source == null) return {};
	    var target = {};
	    var sourceKeys = Object.keys(source);
	    var key, i;

	    for (i = 0; i < sourceKeys.length; i++) {
	      key = sourceKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      target[key] = source[key];
	    }

	    return target;
	  }

	  function _inheritsLoose(subClass, superClass) {
	    subClass.prototype = Object.create(superClass.prototype);
	    subClass.prototype.constructor = subClass;
	    subClass.__proto__ = superClass;
	  }
	  /**
	   * The `<ReplaceTransition>` component is a specialized `Transition` component
	   * that animates between two children.
	   *
	   * ```jsx
	   * <ReplaceTransition in>
	   *   <Fade><div>I appear first</div></Fade>
	   *   <Fade><div>I replace the above</div></Fade>
	   * </ReplaceTransition>
	   * ```
	   */


	  var ReplaceTransition =
	  /*#__PURE__*/
	  function (_React$Component) {
	    _inheritsLoose(ReplaceTransition, _React$Component);

	    function ReplaceTransition() {
	      var _this;

	      for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
	        _args[_key] = arguments[_key];
	      }

	      _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

	      _this.handleEnter = function () {
	        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	          args[_key2] = arguments[_key2];
	        }

	        return _this.handleLifecycle('onEnter', 0, args);
	      };

	      _this.handleEntering = function () {
	        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	          args[_key3] = arguments[_key3];
	        }

	        return _this.handleLifecycle('onEntering', 0, args);
	      };

	      _this.handleEntered = function () {
	        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	          args[_key4] = arguments[_key4];
	        }

	        return _this.handleLifecycle('onEntered', 0, args);
	      };

	      _this.handleExit = function () {
	        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	          args[_key5] = arguments[_key5];
	        }

	        return _this.handleLifecycle('onExit', 1, args);
	      };

	      _this.handleExiting = function () {
	        for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	          args[_key6] = arguments[_key6];
	        }

	        return _this.handleLifecycle('onExiting', 1, args);
	      };

	      _this.handleExited = function () {
	        for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
	          args[_key7] = arguments[_key7];
	        }

	        return _this.handleLifecycle('onExited', 1, args);
	      };

	      return _this;
	    }

	    var _proto = ReplaceTransition.prototype;

	    _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
	      var _child$props;

	      var children = this.props.children;

	      var child = _react["default"].Children.toArray(children)[idx];

	      if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
	      if (this.props[handler]) this.props[handler]((0, ReactDOM.findDOMNode)(this));
	    };

	    _proto.render = function render() {
	      var _this$props = this.props,
	          children = _this$props.children,
	          inProp = _this$props["in"],
	          props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

	      var _React$Children$toArr = _react["default"].Children.toArray(children),
	          first = _React$Children$toArr[0],
	          second = _React$Children$toArr[1];

	      delete props.onEnter;
	      delete props.onEntering;
	      delete props.onEntered;
	      delete props.onExit;
	      delete props.onExiting;
	      delete props.onExited;
	      return _react["default"].createElement(_TransitionGroup["default"], props, inProp ? _react["default"].cloneElement(first, {
	        key: 'first',
	        onEnter: this.handleEnter,
	        onEntering: this.handleEntering,
	        onEntered: this.handleEntered
	      }) : _react["default"].cloneElement(second, {
	        key: 'second',
	        onEnter: this.handleExit,
	        onEntering: this.handleExiting,
	        onEntered: this.handleExited
	      }));
	    };

	    return ReplaceTransition;
	  }(_react["default"].Component);

	  ReplaceTransition.propTypes =  {};
	  var _default = ReplaceTransition;
	  exports["default"] = _default;
	  module.exports = exports["default"];
	});
	unwrapExports(ReplaceTransition_1);

	var reactTransitionGroup = createCommonjsModule(function (module) {

	  var _CSSTransition = _interopRequireDefault(CSSTransition_1);

	  var _ReplaceTransition = _interopRequireDefault(ReplaceTransition_1);

	  var _TransitionGroup = _interopRequireDefault(TransitionGroup_1);

	  var _Transition = _interopRequireDefault(Transition_1);

	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : {
	      "default": obj
	    };
	  }

	  module.exports = {
	    Transition: _Transition["default"],
	    TransitionGroup: _TransitionGroup["default"],
	    ReplaceTransition: _ReplaceTransition["default"],
	    CSSTransition: _CSSTransition["default"]
	  };
	});
	unwrapExports(reactTransitionGroup);
	var reactTransitionGroup_1 = reactTransitionGroup.Transition;
	var reactTransitionGroup_2 = reactTransitionGroup.TransitionGroup;
	var reactTransitionGroup_3 = reactTransitionGroup.ReplaceTransition;
	var reactTransitionGroup_4 = reactTransitionGroup.CSSTransition;

	var propTypes$k = _objectSpread({}, reactTransitionGroup_1.propTypes, {
	  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
	  tag: tagPropType,
	  baseClass: propTypes.string,
	  baseClassActive: propTypes.string,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  innerRef: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func])
	});

	var defaultProps$i = _objectSpread({}, reactTransitionGroup_1.defaultProps, {
	  tag: 'div',
	  baseClass: 'fade',
	  baseClassActive: 'show',
	  timeout: TransitionTimeouts.Fade,
	  appear: true,
	  enter: true,
	  exit: true,
	  "in": true
	});

	function Fade(props) {
	  var Tag = props.tag,
	      baseClass = props.baseClass,
	      baseClassActive = props.baseClassActive,
	      className = props.className,
	      cssModule = props.cssModule,
	      children = props.children,
	      innerRef = props.innerRef,
	      otherProps = _objectWithoutPropertiesLoose(props, ["tag", "baseClass", "baseClassActive", "className", "cssModule", "children", "innerRef"]);

	  var transitionProps = pick(otherProps, TransitionPropTypeKeys);
	  var childProps = omit(otherProps, TransitionPropTypeKeys);
	  return React__default.createElement(reactTransitionGroup_1, transitionProps, function (status) {
	    var isActive = status === 'entered';
	    var classes = mapToCssModules(classnames(className, baseClass, isActive && baseClassActive), cssModule);
	    return React__default.createElement(Tag, _extends({
	      className: classes
	    }, childProps, {
	      ref: innerRef
	    }), children);
	  });
	}

	Fade.propTypes = propTypes$k;
	Fade.defaultProps = defaultProps$i;

	var propTypes$l = {
	  color: propTypes.string,
	  pill: propTypes.bool,
	  tag: tagPropType,
	  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string]),
	  children: propTypes.node,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$j = {
	  color: 'secondary',
	  pill: false,
	  tag: 'span'
	};

	var Badge = function Badge(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      color = props.color,
	      innerRef = props.innerRef,
	      pill = props.pill,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "color", "innerRef", "pill", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'badge', 'badge-' + color, pill ? 'badge-pill' : false), cssModule);

	  if (attributes.href && Tag === 'span') {
	    Tag = 'a';
	  }

	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes,
	    ref: innerRef
	  }));
	};

	Badge.propTypes = propTypes$l;
	Badge.defaultProps = defaultProps$j;

	var propTypes$m = {
	  tag: tagPropType,
	  inverse: propTypes.bool,
	  color: propTypes.string,
	  body: propTypes.bool,
	  outline: propTypes.bool,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  innerRef: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func])
	};
	var defaultProps$k = {
	  tag: 'div'
	};

	var Card = function Card(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      color = props.color,
	      body = props.body,
	      inverse = props.inverse,
	      outline = props.outline,
	      Tag = props.tag,
	      innerRef = props.innerRef,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "color", "body", "inverse", "outline", "tag", "innerRef"]);

	  var classes = mapToCssModules(classnames(className, 'card', inverse ? 'text-white' : false, body ? 'card-body' : false, color ? (outline ? 'border' : 'bg') + "-" + color : false), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes,
	    ref: innerRef
	  }));
	};

	Card.propTypes = propTypes$m;
	Card.defaultProps = defaultProps$k;

	var propTypes$n = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$l = {
	  tag: 'div'
	};

	var CardGroup = function CardGroup(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'card-group'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	CardGroup.propTypes = propTypes$n;
	CardGroup.defaultProps = defaultProps$l;

	var propTypes$o = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$m = {
	  tag: 'div'
	};

	var CardDeck = function CardDeck(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'card-deck'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	CardDeck.propTypes = propTypes$o;
	CardDeck.defaultProps = defaultProps$m;

	var propTypes$p = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$n = {
	  tag: 'div'
	};

	var CardColumns = function CardColumns(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'card-columns'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	CardColumns.propTypes = propTypes$p;
	CardColumns.defaultProps = defaultProps$n;

	var propTypes$q = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  innerRef: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func])
	};
	var defaultProps$o = {
	  tag: 'div'
	};

	var CardBody = function CardBody(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      innerRef = props.innerRef,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "innerRef", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'card-body'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes,
	    ref: innerRef
	  }));
	};

	CardBody.propTypes = propTypes$q;
	CardBody.defaultProps = defaultProps$o;

	var propTypes$r = {
	  tag: tagPropType,
	  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string]),
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$p = {
	  tag: 'a'
	};

	var CardLink = function CardLink(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      innerRef = props.innerRef,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "innerRef"]);

	  var classes = mapToCssModules(classnames(className, 'card-link'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    ref: innerRef,
	    className: classes
	  }));
	};

	CardLink.propTypes = propTypes$r;
	CardLink.defaultProps = defaultProps$p;

	var propTypes$s = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$q = {
	  tag: 'div'
	};

	var CardFooter = function CardFooter(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'card-footer'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	CardFooter.propTypes = propTypes$s;
	CardFooter.defaultProps = defaultProps$q;

	var propTypes$t = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$r = {
	  tag: 'div'
	};

	var CardHeader = function CardHeader(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'card-header'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	CardHeader.propTypes = propTypes$t;
	CardHeader.defaultProps = defaultProps$r;

	var propTypes$u = {
	  tag: tagPropType,
	  top: propTypes.bool,
	  bottom: propTypes.bool,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$s = {
	  tag: 'img'
	};

	var CardImg = function CardImg(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      top = props.top,
	      bottom = props.bottom,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "top", "bottom", "tag"]);

	  var cardImgClassName = 'card-img';

	  if (top) {
	    cardImgClassName = 'card-img-top';
	  }

	  if (bottom) {
	    cardImgClassName = 'card-img-bottom';
	  }

	  var classes = mapToCssModules(classnames(className, cardImgClassName), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	CardImg.propTypes = propTypes$u;
	CardImg.defaultProps = defaultProps$s;

	var propTypes$v = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$t = {
	  tag: 'div'
	};

	var CardImgOverlay = function CardImgOverlay(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'card-img-overlay'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	CardImgOverlay.propTypes = propTypes$v;
	CardImgOverlay.defaultProps = defaultProps$t;

	var CarouselItem =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(CarouselItem, _React$Component);

	  function CarouselItem(props) {
	    var _this;

	    _this = _React$Component.call(this, props) || this;
	    _this.state = {
	      startAnimation: false
	    };
	    _this.onEnter = _this.onEnter.bind(_assertThisInitialized(_this));
	    _this.onEntering = _this.onEntering.bind(_assertThisInitialized(_this));
	    _this.onExit = _this.onExit.bind(_assertThisInitialized(_this));
	    _this.onExiting = _this.onExiting.bind(_assertThisInitialized(_this));
	    _this.onExited = _this.onExited.bind(_assertThisInitialized(_this));
	    return _this;
	  }

	  var _proto = CarouselItem.prototype;

	  _proto.onEnter = function onEnter(node, isAppearing) {
	    this.setState({
	      startAnimation: false
	    });
	    this.props.onEnter(node, isAppearing);
	  };

	  _proto.onEntering = function onEntering(node, isAppearing) {
	    // getting this variable triggers a reflow
	    var offsetHeight = node.offsetHeight;
	    this.setState({
	      startAnimation: true
	    });
	    this.props.onEntering(node, isAppearing);
	    return offsetHeight;
	  };

	  _proto.onExit = function onExit(node) {
	    this.setState({
	      startAnimation: false
	    });
	    this.props.onExit(node);
	  };

	  _proto.onExiting = function onExiting(node) {
	    this.setState({
	      startAnimation: true
	    });
	    node.dispatchEvent(new CustomEvent('slide.bs.carousel'));
	    this.props.onExiting(node);
	  };

	  _proto.onExited = function onExited(node) {
	    node.dispatchEvent(new CustomEvent('slid.bs.carousel'));
	    this.props.onExited(node);
	  };

	  _proto.render = function render() {
	    var _this2 = this;

	    var _this$props = this.props,
	        isIn = _this$props["in"],
	        children = _this$props.children,
	        cssModule = _this$props.cssModule,
	        slide = _this$props.slide,
	        Tag = _this$props.tag,
	        className = _this$props.className,
	        transitionProps = _objectWithoutPropertiesLoose(_this$props, ["in", "children", "cssModule", "slide", "tag", "className"]);

	    return React__default.createElement(reactTransitionGroup_1, _extends({}, transitionProps, {
	      enter: slide,
	      exit: slide,
	      "in": isIn,
	      onEnter: this.onEnter,
	      onEntering: this.onEntering,
	      onExit: this.onExit,
	      onExiting: this.onExiting,
	      onExited: this.onExited
	    }), function (status) {
	      var direction = _this2.context.direction;
	      var isActive = status === TransitionStatuses.ENTERED || status === TransitionStatuses.EXITING;
	      var directionClassName = (status === TransitionStatuses.ENTERING || status === TransitionStatuses.EXITING) && _this2.state.startAnimation && (direction === 'right' ? 'carousel-item-left' : 'carousel-item-right');
	      var orderClassName = status === TransitionStatuses.ENTERING && (direction === 'right' ? 'carousel-item-next' : 'carousel-item-prev');
	      var itemClasses = mapToCssModules(classnames(className, 'carousel-item', isActive && 'active', directionClassName, orderClassName), cssModule);
	      return React__default.createElement(Tag, {
	        className: itemClasses
	      }, children);
	    });
	  };

	  return CarouselItem;
	}(React__default.Component);

	CarouselItem.propTypes = _objectSpread({}, reactTransitionGroup_1.propTypes, {
	  tag: tagPropType,
	  "in": propTypes.bool,
	  cssModule: propTypes.object,
	  children: propTypes.node,
	  slide: propTypes.bool,
	  className: propTypes.string
	});
	CarouselItem.defaultProps = _objectSpread({}, reactTransitionGroup_1.defaultProps, {
	  tag: 'div',
	  timeout: TransitionTimeouts.Carousel,
	  slide: true
	});
	CarouselItem.contextTypes = {
	  direction: propTypes.string
	};

	var Carousel =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(Carousel, _React$Component);

	  function Carousel(props) {
	    var _this;

	    _this = _React$Component.call(this, props) || this;
	    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_this));
	    _this.renderItems = _this.renderItems.bind(_assertThisInitialized(_this));
	    _this.hoverStart = _this.hoverStart.bind(_assertThisInitialized(_this));
	    _this.hoverEnd = _this.hoverEnd.bind(_assertThisInitialized(_this));
	    _this.state = {
	      direction: 'right',
	      indicatorClicked: false
	    };
	    return _this;
	  }

	  var _proto = Carousel.prototype;

	  _proto.getChildContext = function getChildContext() {
	    return {
	      direction: this.state.direction
	    };
	  };

	  _proto.componentDidMount = function componentDidMount() {
	    // Set up the cycle
	    if (this.props.ride === 'carousel') {
	      this.setInterval();
	    } // TODO: move this to the specific carousel like bootstrap. Currently it will trigger ALL carousels on the page.


	    document.addEventListener('keyup', this.handleKeyPress);
	  };

	  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    this.setInterval(nextProps); // Calculate the direction to turn

	    if (this.props.activeIndex + 1 === nextProps.activeIndex) {
	      this.setState({
	        direction: 'right'
	      });
	    } else if (this.props.activeIndex - 1 === nextProps.activeIndex) {
	      this.setState({
	        direction: 'left'
	      });
	    } else if (this.props.activeIndex > nextProps.activeIndex) {
	      this.setState({
	        direction: this.state.indicatorClicked ? 'left' : 'right'
	      });
	    } else if (this.props.activeIndex !== nextProps.activeIndex) {
	      this.setState({
	        direction: this.state.indicatorClicked ? 'right' : 'left'
	      });
	    }

	    this.setState({
	      indicatorClicked: false
	    });
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    this.clearInterval();
	    document.removeEventListener('keyup', this.handleKeyPress);
	  };

	  _proto.setInterval = function (_setInterval) {
	    function setInterval() {
	      return _setInterval.apply(this, arguments);
	    }

	    setInterval.toString = function () {
	      return _setInterval.toString();
	    };

	    return setInterval;
	  }(function (props) {
	    if (props === void 0) {
	      props = this.props;
	    } // make sure not to have multiple intervals going...


	    this.clearInterval();

	    if (props.interval) {
	      this.cycleInterval = setInterval(function () {
	        props.next();
	      }, parseInt(props.interval, 10));
	    }
	  });

	  _proto.clearInterval = function (_clearInterval) {
	    function clearInterval() {
	      return _clearInterval.apply(this, arguments);
	    }

	    clearInterval.toString = function () {
	      return _clearInterval.toString();
	    };

	    return clearInterval;
	  }(function () {
	    clearInterval(this.cycleInterval);
	  });

	  _proto.hoverStart = function hoverStart() {
	    if (this.props.pause === 'hover') {
	      this.clearInterval();
	    }

	    if (this.props.mouseEnter) {
	      var _this$props;

	      (_this$props = this.props).mouseEnter.apply(_this$props, arguments);
	    }
	  };

	  _proto.hoverEnd = function hoverEnd() {
	    if (this.props.pause === 'hover') {
	      this.setInterval();
	    }

	    if (this.props.mouseLeave) {
	      var _this$props2;

	      (_this$props2 = this.props).mouseLeave.apply(_this$props2, arguments);
	    }
	  };

	  _proto.handleKeyPress = function handleKeyPress(evt) {
	    if (this.props.keyboard) {
	      if (evt.keyCode === 37) {
	        this.props.previous();
	      } else if (evt.keyCode === 39) {
	        this.props.next();
	      }
	    }
	  };

	  _proto.renderItems = function renderItems(carouselItems, className) {
	    var _this2 = this;

	    var slide = this.props.slide;
	    return React__default.createElement("div", {
	      className: className
	    }, carouselItems.map(function (item, index) {
	      var isIn = index === _this2.props.activeIndex;
	      return React__default.cloneElement(item, {
	        "in": isIn,
	        slide: slide
	      });
	    }));
	  };

	  _proto.render = function render() {
	    var _this3 = this;

	    var _this$props3 = this.props,
	        cssModule = _this$props3.cssModule,
	        slide = _this$props3.slide,
	        className = _this$props3.className;
	    var outerClasses = mapToCssModules(classnames(className, 'carousel', slide && 'slide'), cssModule);
	    var innerClasses = mapToCssModules(classnames('carousel-inner'), cssModule); // filter out booleans, null, or undefined

	    var children = this.props.children.filter(function (child) {
	      return child !== null && child !== undefined && typeof child !== 'boolean';
	    });
	    var slidesOnly = children.every(function (child) {
	      return child.type === CarouselItem;
	    }); // Rendering only slides

	    if (slidesOnly) {
	      return React__default.createElement("div", {
	        className: outerClasses,
	        onMouseEnter: this.hoverStart,
	        onMouseLeave: this.hoverEnd
	      }, this.renderItems(children, innerClasses));
	    } // Rendering slides and controls


	    if (children[0] instanceof Array) {
	      var _carouselItems = children[0];
	      var _controlLeft = children[1];
	      var _controlRight = children[2];
	      return React__default.createElement("div", {
	        className: outerClasses,
	        onMouseEnter: this.hoverStart,
	        onMouseLeave: this.hoverEnd
	      }, this.renderItems(_carouselItems, innerClasses), _controlLeft, _controlRight);
	    } // Rendering indicators, slides and controls


	    var indicators = children[0];

	    var wrappedOnClick = function wrappedOnClick(e) {
	      if (typeof indicators.props.onClickHandler === 'function') {
	        _this3.setState({
	          indicatorClicked: true
	        }, function () {
	          return indicators.props.onClickHandler(e);
	        });
	      }
	    };

	    var wrappedIndicators = React__default.cloneElement(indicators, {
	      onClickHandler: wrappedOnClick
	    });
	    var carouselItems = children[1];
	    var controlLeft = children[2];
	    var controlRight = children[3];
	    return React__default.createElement("div", {
	      className: outerClasses,
	      onMouseEnter: this.hoverStart,
	      onMouseLeave: this.hoverEnd
	    }, wrappedIndicators, this.renderItems(carouselItems, innerClasses), controlLeft, controlRight);
	  };

	  return Carousel;
	}(React__default.Component);

	Carousel.propTypes = {
	  // the current active slide of the carousel
	  activeIndex: propTypes.number,
	  // a function which should advance the carousel to the next slide (via activeIndex)
	  next: propTypes.func.isRequired,
	  // a function which should advance the carousel to the previous slide (via activeIndex)
	  previous: propTypes.func.isRequired,
	  // controls if the left and right arrow keys should control the carousel
	  keyboard: propTypes.bool,

	  /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
	   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
	   */
	  pause: propTypes.oneOf(['hover', false]),
	  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
	  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
	  ride: propTypes.oneOf(['carousel']),
	  // the interval at which the carousel automatically cycles (default: 5000)
	  // eslint-disable-next-line react/no-unused-prop-types
	  interval: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.bool]),
	  children: propTypes.array,
	  // called when the mouse enters the Carousel
	  mouseEnter: propTypes.func,
	  // called when the mouse exits the Carousel
	  mouseLeave: propTypes.func,
	  // controls whether the slide animation on the Carousel works or not
	  slide: propTypes.bool,
	  cssModule: propTypes.object,
	  className: propTypes.string
	};
	Carousel.defaultProps = {
	  interval: 5000,
	  pause: 'hover',
	  keyboard: true,
	  slide: true
	};
	Carousel.childContextTypes = {
	  direction: propTypes.string
	};

	var CarouselControl = function CarouselControl(props) {
	  var direction = props.direction,
	      onClickHandler = props.onClickHandler,
	      cssModule = props.cssModule,
	      directionText = props.directionText,
	      className = props.className;
	  var anchorClasses = mapToCssModules(classnames(className, "carousel-control-" + direction), cssModule);
	  var iconClasses = mapToCssModules(classnames("carousel-control-" + direction + "-icon"), cssModule);
	  var screenReaderClasses = mapToCssModules(classnames('sr-only'), cssModule);
	  return React__default.createElement("a", {
	    className: anchorClasses,
	    role: "button",
	    tabIndex: "0",
	    onClick: function onClick(e) {
	      e.preventDefault();
	      onClickHandler();
	    }
	  }, React__default.createElement("span", {
	    className: iconClasses,
	    "aria-hidden": "true"
	  }), React__default.createElement("span", {
	    className: screenReaderClasses
	  }, directionText || direction));
	};

	CarouselControl.propTypes = {
	  direction: propTypes.oneOf(['prev', 'next']).isRequired,
	  onClickHandler: propTypes.func.isRequired,
	  cssModule: propTypes.object,
	  directionText: propTypes.string,
	  className: propTypes.string
	};

	var CarouselIndicators = function CarouselIndicators(props) {
	  var items = props.items,
	      activeIndex = props.activeIndex,
	      cssModule = props.cssModule,
	      onClickHandler = props.onClickHandler,
	      className = props.className;
	  var listClasses = mapToCssModules(classnames(className, 'carousel-indicators'), cssModule);
	  var indicators = items.map(function (item, idx) {
	    var indicatorClasses = mapToCssModules(classnames({
	      active: activeIndex === idx
	    }), cssModule);
	    return React__default.createElement("li", {
	      key: "" + (item.key || Object.values(item).join('')),
	      onClick: function onClick(e) {
	        e.preventDefault();
	        onClickHandler(idx);
	      },
	      className: indicatorClasses
	    });
	  });
	  return React__default.createElement("ol", {
	    className: listClasses
	  }, indicators);
	};

	CarouselIndicators.propTypes = {
	  items: propTypes.array.isRequired,
	  activeIndex: propTypes.number.isRequired,
	  cssModule: propTypes.object,
	  onClickHandler: propTypes.func.isRequired,
	  className: propTypes.string
	};

	var CarouselCaption = function CarouselCaption(props) {
	  var captionHeader = props.captionHeader,
	      captionText = props.captionText,
	      cssModule = props.cssModule,
	      className = props.className;
	  var classes = mapToCssModules(classnames(className, 'carousel-caption', 'd-none', 'd-md-block'), cssModule);
	  return React__default.createElement("div", {
	    className: classes
	  }, React__default.createElement("h3", null, captionHeader), React__default.createElement("p", null, captionText));
	};

	CarouselCaption.propTypes = {
	  captionHeader: propTypes.string,
	  captionText: propTypes.string.isRequired,
	  cssModule: propTypes.object,
	  className: propTypes.string
	};

	var propTypes$w = {
	  items: propTypes.array.isRequired,
	  indicators: propTypes.bool,
	  controls: propTypes.bool,
	  autoPlay: propTypes.bool,
	  defaultActiveIndex: propTypes.number,
	  activeIndex: propTypes.number,
	  next: propTypes.func,
	  previous: propTypes.func,
	  goToIndex: propTypes.func
	};

	var UncontrolledCarousel =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose(UncontrolledCarousel, _Component);

	  function UncontrolledCarousel(props) {
	    var _this;

	    _this = _Component.call(this, props) || this;
	    _this.animating = false;
	    _this.state = {
	      activeIndex: props.defaultActiveIndex || 0
	    };
	    _this.next = _this.next.bind(_assertThisInitialized(_this));
	    _this.previous = _this.previous.bind(_assertThisInitialized(_this));
	    _this.goToIndex = _this.goToIndex.bind(_assertThisInitialized(_this));
	    _this.onExiting = _this.onExiting.bind(_assertThisInitialized(_this));
	    _this.onExited = _this.onExited.bind(_assertThisInitialized(_this));
	    return _this;
	  }

	  var _proto = UncontrolledCarousel.prototype;

	  _proto.onExiting = function onExiting() {
	    this.animating = true;
	  };

	  _proto.onExited = function onExited() {
	    this.animating = false;
	  };

	  _proto.next = function next() {
	    if (this.animating) return;
	    var nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
	    this.setState({
	      activeIndex: nextIndex
	    });
	  };

	  _proto.previous = function previous() {
	    if (this.animating) return;
	    var nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
	    this.setState({
	      activeIndex: nextIndex
	    });
	  };

	  _proto.goToIndex = function goToIndex(newIndex) {
	    if (this.animating) return;
	    this.setState({
	      activeIndex: newIndex
	    });
	  };

	  _proto.render = function render() {
	    var _this2 = this;

	    var _this$props = this.props,
	        defaultActiveIndex = _this$props.defaultActiveIndex,
	        autoPlay = _this$props.autoPlay,
	        indicators = _this$props.indicators,
	        controls = _this$props.controls,
	        items = _this$props.items,
	        goToIndex = _this$props.goToIndex,
	        props = _objectWithoutPropertiesLoose(_this$props, ["defaultActiveIndex", "autoPlay", "indicators", "controls", "items", "goToIndex"]);

	    var activeIndex = this.state.activeIndex;
	    var slides = items.map(function (item) {
	      return React__default.createElement(CarouselItem, {
	        onExiting: _this2.onExiting,
	        onExited: _this2.onExited,
	        key: item.src
	      }, React__default.createElement("img", {
	        className: "d-block w-100",
	        src: item.src,
	        alt: item.altText
	      }), React__default.createElement(CarouselCaption, {
	        captionText: item.caption,
	        captionHeader: item.header || item.caption
	      }));
	    });
	    return React__default.createElement(Carousel, _extends({
	      activeIndex: activeIndex,
	      next: this.next,
	      previous: this.previous,
	      ride: autoPlay ? 'carousel' : undefined
	    }, props), indicators && React__default.createElement(CarouselIndicators, {
	      items: items,
	      activeIndex: props.activeIndex || activeIndex,
	      onClickHandler: goToIndex || this.goToIndex
	    }), slides, controls && React__default.createElement(CarouselControl, {
	      direction: "prev",
	      directionText: "Previous",
	      onClickHandler: props.previous || this.previous
	    }), controls && React__default.createElement(CarouselControl, {
	      direction: "next",
	      directionText: "Next",
	      onClickHandler: props.next || this.next
	    }));
	  };

	  return UncontrolledCarousel;
	}(React.Component);

	UncontrolledCarousel.propTypes = propTypes$w;
	UncontrolledCarousel.defaultProps = {
	  controls: true,
	  indicators: true,
	  autoPlay: true
	};

	var propTypes$x = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$u = {
	  tag: 'div'
	};

	var CardSubtitle = function CardSubtitle(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'card-subtitle'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	CardSubtitle.propTypes = propTypes$x;
	CardSubtitle.defaultProps = defaultProps$u;

	var propTypes$y = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$v = {
	  tag: 'p'
	};

	var CardText = function CardText(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'card-text'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	CardText.propTypes = propTypes$y;
	CardText.defaultProps = defaultProps$v;

	var propTypes$z = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$w = {
	  tag: 'div'
	};

	var CardTitle = function CardTitle(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'card-title'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	CardTitle.propTypes = propTypes$z;
	CardTitle.defaultProps = defaultProps$w;

	function noop() {}

	var propTypes$A = {
	  children: propTypes.node.isRequired,
	  popperClassName: propTypes.string,
	  placement: propTypes.string,
	  placementPrefix: propTypes.string,
	  arrowClassName: propTypes.string,
	  hideArrow: propTypes.bool,
	  tag: tagPropType,
	  isOpen: propTypes.bool.isRequired,
	  cssModule: propTypes.object,
	  offset: propTypes.oneOfType([propTypes.string, propTypes.number]),
	  fallbackPlacement: propTypes.oneOfType([propTypes.string, propTypes.array]),
	  flip: propTypes.bool,
	  container: targetPropType,
	  target: targetPropType.isRequired,
	  modifiers: propTypes.object,
	  boundariesElement: propTypes.oneOfType([propTypes.string, DOMElement]),
	  onClosed: propTypes.func,
	  fade: propTypes.bool,
	  transition: propTypes.shape(Fade.propTypes)
	};
	var defaultProps$x = {
	  boundariesElement: 'scrollParent',
	  placement: 'auto',
	  hideArrow: false,
	  isOpen: false,
	  offset: 0,
	  fallbackPlacement: 'flip',
	  flip: true,
	  container: 'body',
	  modifiers: {},
	  onClosed: noop,
	  fade: true,
	  transition: _objectSpread({}, Fade.defaultProps)
	};

	var PopperContent =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(PopperContent, _React$Component);

	  function PopperContent(props) {
	    var _this;

	    _this = _React$Component.call(this, props) || this;
	    _this.handlePlacementChange = _this.handlePlacementChange.bind(_assertThisInitialized(_this));
	    _this.setTargetNode = _this.setTargetNode.bind(_assertThisInitialized(_this));
	    _this.getTargetNode = _this.getTargetNode.bind(_assertThisInitialized(_this));
	    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
	    _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
	    _this.state = {
	      isOpen: props.isOpen
	    };
	    return _this;
	  }

	  PopperContent.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
	    if (props.isOpen && !state.isOpen) {
	      return {
	        isOpen: props.isOpen
	      };
	    } else return null;
	  };

	  var _proto = PopperContent.prototype;

	  _proto.componentDidUpdate = function componentDidUpdate() {
	    if (this._element && this._element.childNodes && this._element.childNodes[0] && this._element.childNodes[0].focus) {
	      this._element.childNodes[0].focus();
	    }
	  };

	  _proto.setTargetNode = function setTargetNode(node) {
	    this.targetNode = node;
	  };

	  _proto.getTargetNode = function getTargetNode() {
	    return this.targetNode;
	  };

	  _proto.getContainerNode = function getContainerNode() {
	    return getTarget(this.props.container);
	  };

	  _proto.getRef = function getRef(ref) {
	    this._element = ref;
	  };

	  _proto.handlePlacementChange = function handlePlacementChange(data) {
	    if (this.state.placement !== data.placement) {
	      this.setState({
	        placement: data.placement
	      });
	    }

	    return data;
	  };

	  _proto.onClosed = function onClosed() {
	    this.props.onClosed();
	    this.setState({
	      isOpen: false
	    });
	  };

	  _proto.renderChildren = function renderChildren() {
	    var _this$props = this.props,
	        cssModule = _this$props.cssModule,
	        children = _this$props.children,
	        isOpen = _this$props.isOpen,
	        flip = _this$props.flip,
	        target = _this$props.target,
	        offset = _this$props.offset,
	        fallbackPlacement = _this$props.fallbackPlacement,
	        placementPrefix = _this$props.placementPrefix,
	        _arrowClassName = _this$props.arrowClassName,
	        hideArrow = _this$props.hideArrow,
	        _popperClassName = _this$props.popperClassName,
	        tag = _this$props.tag,
	        container = _this$props.container,
	        modifiers = _this$props.modifiers,
	        boundariesElement = _this$props.boundariesElement,
	        onClosed = _this$props.onClosed,
	        fade = _this$props.fade,
	        transition = _this$props.transition,
	        attrs = _objectWithoutPropertiesLoose(_this$props, ["cssModule", "children", "isOpen", "flip", "target", "offset", "fallbackPlacement", "placementPrefix", "arrowClassName", "hideArrow", "popperClassName", "tag", "container", "modifiers", "boundariesElement", "onClosed", "fade", "transition"]);

	    var arrowClassName = mapToCssModules(classnames('arrow', _arrowClassName), cssModule);
	    var placement = this.state.placement || attrs.placement;
	    var placementFirstPart = placement.split('-')[0];
	    var popperClassName = mapToCssModules(classnames(_popperClassName, placementPrefix ? placementPrefix + "-" + placementFirstPart : placementFirstPart), this.props.cssModule);

	    var extendedModifiers = _objectSpread({
	      offset: {
	        offset: offset
	      },
	      flip: {
	        enabled: flip,
	        behavior: fallbackPlacement
	      },
	      preventOverflow: {
	        boundariesElement: boundariesElement
	      },
	      update: {
	        enabled: true,
	        order: 950,
	        fn: this.handlePlacementChange
	      }
	    }, modifiers);

	    var popperTransition = _objectSpread({}, Fade.defaultProps, transition, {
	      baseClass: fade ? transition.baseClass : '',
	      timeout: fade ? transition.timeout : 0
	    });

	    return React__default.createElement(Fade, _extends({}, popperTransition, attrs, {
	      "in": isOpen,
	      onExited: this.onClosed,
	      tag: tag
	    }), React__default.createElement(Popper$1, {
	      referenceElement: this.targetNode,
	      modifiers: extendedModifiers,
	      placement: placement
	    }, function (_ref) {
	      var ref = _ref.ref,
	          style = _ref.style,
	          placement = _ref.placement,
	          arrowProps = _ref.arrowProps;
	      return React__default.createElement("div", {
	        ref: ref,
	        style: style,
	        className: popperClassName,
	        "x-placement": placement
	      }, children, !hideArrow && React__default.createElement("span", {
	        ref: arrowProps.ref,
	        className: arrowClassName,
	        style: arrowProps.style
	      }));
	    }));
	  };

	  _proto.render = function render() {
	    this.setTargetNode(getTarget(this.props.target));

	    if (this.state.isOpen) {
	      return this.props.container === 'inline' ? this.renderChildren() : ReactDOM.createPortal(React__default.createElement("div", {
	        ref: this.getRef
	      }, this.renderChildren()), this.getContainerNode());
	    }

	    return null;
	  };

	  return PopperContent;
	}(React__default.Component);

	PopperContent.propTypes = propTypes$A;
	PopperContent.defaultProps = defaultProps$x;

	var PopperTargetHelper = function PopperTargetHelper(props, context) {
	  context.popperManager.setTargetNode(getTarget(props.target));
	  return null;
	};

	PopperTargetHelper.contextTypes = {
	  popperManager: propTypes.object.isRequired
	};
	PopperTargetHelper.propTypes = {
	  target: targetPropType.isRequired
	};

	var propTypes$B = {
	  placement: propTypes.oneOf(PopperPlacements),
	  target: targetPropType.isRequired,
	  container: targetPropType,
	  isOpen: propTypes.bool,
	  disabled: propTypes.bool,
	  hideArrow: propTypes.bool,
	  boundariesElement: propTypes.oneOfType([propTypes.string, DOMElement]),
	  className: propTypes.string,
	  innerClassName: propTypes.string,
	  arrowClassName: propTypes.string,
	  popperClassName: propTypes.string,
	  cssModule: propTypes.object,
	  toggle: propTypes.func,
	  autohide: propTypes.bool,
	  placementPrefix: propTypes.string,
	  delay: propTypes.oneOfType([propTypes.shape({
	    show: propTypes.number,
	    hide: propTypes.number
	  }), propTypes.number]),
	  modifiers: propTypes.object,
	  offset: propTypes.oneOfType([propTypes.string, propTypes.number]),
	  innerRef: propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.object]),
	  trigger: propTypes.string,
	  fade: propTypes.bool,
	  flip: propTypes.bool
	};
	var DEFAULT_DELAYS = {
	  show: 0,
	  hide: 0
	};
	var defaultProps$y = {
	  isOpen: false,
	  hideArrow: false,
	  autohide: false,
	  delay: DEFAULT_DELAYS,
	  toggle: function toggle() {},
	  trigger: 'click',
	  fade: true
	};

	function isInDOMSubtree(element, subtreeRoot) {
	  return subtreeRoot && (element === subtreeRoot || subtreeRoot.contains(element));
	}

	var TooltipPopoverWrapper =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(TooltipPopoverWrapper, _React$Component);

	  function TooltipPopoverWrapper(props) {
	    var _this;

	    _this = _React$Component.call(this, props) || this;
	    _this._target = null;
	    _this.addTargetEvents = _this.addTargetEvents.bind(_assertThisInitialized(_this));
	    _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
	    _this.removeTargetEvents = _this.removeTargetEvents.bind(_assertThisInitialized(_this));
	    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
	    _this.showWithDelay = _this.showWithDelay.bind(_assertThisInitialized(_this));
	    _this.hideWithDelay = _this.hideWithDelay.bind(_assertThisInitialized(_this));
	    _this.onMouseOverTooltipContent = _this.onMouseOverTooltipContent.bind(_assertThisInitialized(_this));
	    _this.onMouseLeaveTooltipContent = _this.onMouseLeaveTooltipContent.bind(_assertThisInitialized(_this));
	    _this.show = _this.show.bind(_assertThisInitialized(_this));
	    _this.hide = _this.hide.bind(_assertThisInitialized(_this));
	    _this.onEscKeyDown = _this.onEscKeyDown.bind(_assertThisInitialized(_this));
	    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
	    _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
	    _this.state = {
	      isOpen: props.isOpen
	    };
	    _this._isMounted = false;
	    return _this;
	  }

	  var _proto = TooltipPopoverWrapper.prototype;

	  _proto.componentDidMount = function componentDidMount() {
	    this._isMounted = true;
	    this.updateTarget();
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    this._isMounted = false;
	    this.removeTargetEvents();
	    this.clearShowTimeout();
	    this.clearHideTimeout();
	  };

	  TooltipPopoverWrapper.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
	    if (props.isOpen && !state.isOpen) {
	      return {
	        isOpen: props.isOpen
	      };
	    } else return null;
	  };

	  _proto.onMouseOverTooltipContent = function onMouseOverTooltipContent() {
	    if (this.props.trigger.indexOf('hover') > -1 && !this.props.autohide) {
	      if (this._hideTimeout) {
	        this.clearHideTimeout();
	      }

	      if (this.state.isOpen && !this.props.isOpen) {
	        this.toggle();
	      }
	    }
	  };

	  _proto.onMouseLeaveTooltipContent = function onMouseLeaveTooltipContent(e) {
	    if (this.props.trigger.indexOf('hover') > -1 && !this.props.autohide) {
	      if (this._showTimeout) {
	        this.clearShowTimeout();
	      }

	      e.persist();
	      this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
	    }
	  };

	  _proto.onEscKeyDown = function onEscKeyDown(e) {
	    if (e.key === 'Escape') {
	      this.hide(e);
	    }
	  };

	  _proto.getRef = function getRef(ref) {
	    var innerRef = this.props.innerRef;

	    if (innerRef) {
	      if (typeof innerRef === 'function') {
	        innerRef(ref);
	      } else if (typeof innerRef === 'object') {
	        innerRef.current = ref;
	      }
	    }

	    this._popover = ref;
	  };

	  _proto.getDelay = function getDelay(key) {
	    var delay = this.props.delay;

	    if (typeof delay === 'object') {
	      return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
	    }

	    return delay;
	  };

	  _proto.show = function show(e) {
	    if (!this.props.isOpen) {
	      this.clearShowTimeout();
	      this.toggle(e);
	    }
	  };

	  _proto.showWithDelay = function showWithDelay(e) {
	    if (this._hideTimeout) {
	      this.clearHideTimeout();
	    }

	    this._showTimeout = setTimeout(this.show.bind(this, e), this.getDelay('show'));
	  };

	  _proto.hide = function hide(e) {
	    if (this.props.isOpen) {
	      this.clearHideTimeout();
	      this.toggle(e);
	    }
	  };

	  _proto.hideWithDelay = function hideWithDelay(e) {
	    if (this._showTimeout) {
	      this.clearShowTimeout();
	    }

	    this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
	  };

	  _proto.clearShowTimeout = function clearShowTimeout() {
	    clearTimeout(this._showTimeout);
	    this._showTimeout = undefined;
	  };

	  _proto.clearHideTimeout = function clearHideTimeout() {
	    clearTimeout(this._hideTimeout);
	    this._hideTimeout = undefined;
	  };

	  _proto.handleDocumentClick = function handleDocumentClick(e) {
	    var triggers = this.props.trigger.split(' ');

	    if (triggers.indexOf('legacy') > -1 && (this.props.isOpen || isInDOMSubtree(e.target, this._target))) {
	      if (this._hideTimeout) {
	        this.clearHideTimeout();
	      }

	      if (this.props.isOpen && !isInDOMSubtree(e.target, this._popover)) {
	        this.hideWithDelay(e);
	      } else if (!this.props.isOpen) {
	        this.showWithDelay(e);
	      }
	    } else if (triggers.indexOf('click') > -1 && isInDOMSubtree(e.target, this._target)) {
	      if (this._hideTimeout) {
	        this.clearHideTimeout();
	      }

	      if (!this.props.isOpen) {
	        this.showWithDelay(e);
	      } else {
	        this.hideWithDelay(e);
	      }
	    }
	  };

	  _proto.addTargetEvents = function addTargetEvents() {
	    if (this.props.trigger) {
	      var triggers = this.props.trigger.split(' ');

	      if (triggers.indexOf('manual') === -1) {
	        if (triggers.indexOf('click') > -1 || triggers.indexOf('legacy') > -1) {
	          document.addEventListener('click', this.handleDocumentClick, true);
	        }

	        if (this._target) {
	          if (triggers.indexOf('hover') > -1) {
	            this._target.addEventListener('mouseover', this.showWithDelay, true);

	            this._target.addEventListener('mouseout', this.hideWithDelay, true);
	          }

	          if (triggers.indexOf('focus') > -1) {
	            this._target.addEventListener('focusin', this.show, true);

	            this._target.addEventListener('focusout', this.hide, true);
	          }

	          this._target.addEventListener('keydown', this.onEscKeyDown, true);
	        }
	      }
	    }
	  };

	  _proto.removeTargetEvents = function removeTargetEvents() {
	    if (this._target) {
	      this._target.removeEventListener('mouseover', this.showWithDelay, true);

	      this._target.removeEventListener('mouseout', this.hideWithDelay, true);

	      this._target.removeEventListener('keydown', this.onEscKeyDown, true);

	      this._target.removeEventListener('focusin', this.show, true);

	      this._target.removeEventListener('focusout', this.hide, true);
	    }

	    document.removeEventListener('click', this.handleDocumentClick, true);
	  };

	  _proto.updateTarget = function updateTarget() {
	    var newTarget = getTarget(this.props.target);

	    if (newTarget !== this._target) {
	      this.removeTargetEvents();
	      this._target = newTarget;
	      this.addTargetEvents();
	    }
	  };

	  _proto.toggle = function toggle(e) {
	    if (this.props.disabled || !this._isMounted) {
	      return e && e.preventDefault();
	    }

	    return this.props.toggle(e);
	  };

	  _proto.onClosed = function onClosed() {
	    this.setState({
	      isOpen: false
	    });
	  };

	  _proto.render = function render() {
	    if (!this.state.isOpen) {
	      return null;
	    }

	    this.updateTarget();
	    var _this$props = this.props,
	        className = _this$props.className,
	        cssModule = _this$props.cssModule,
	        innerClassName = _this$props.innerClassName,
	        target = _this$props.target,
	        isOpen = _this$props.isOpen,
	        hideArrow = _this$props.hideArrow,
	        boundariesElement = _this$props.boundariesElement,
	        placement = _this$props.placement,
	        placementPrefix = _this$props.placementPrefix,
	        arrowClassName = _this$props.arrowClassName,
	        popperClassName = _this$props.popperClassName,
	        container = _this$props.container,
	        modifiers = _this$props.modifiers,
	        offset = _this$props.offset,
	        fade = _this$props.fade,
	        flip = _this$props.flip;
	    var attributes = omit(this.props, Object.keys(propTypes$B));
	    var popperClasses = mapToCssModules(popperClassName, cssModule);
	    var classes = mapToCssModules(innerClassName, cssModule);
	    return React__default.createElement(PopperContent, {
	      className: className,
	      target: target,
	      isOpen: isOpen,
	      hideArrow: hideArrow,
	      boundariesElement: boundariesElement,
	      placement: placement,
	      placementPrefix: placementPrefix,
	      arrowClassName: arrowClassName,
	      popperClassName: popperClasses,
	      container: container,
	      modifiers: modifiers,
	      offset: offset,
	      cssModule: cssModule,
	      onClosed: this.onClosed,
	      fade: fade,
	      flip: flip
	    }, React__default.createElement("div", _extends({}, attributes, {
	      ref: this.getRef,
	      className: classes,
	      role: "tooltip",
	      "aria-hidden": isOpen,
	      onMouseOver: this.onMouseOverTooltipContent,
	      onMouseLeave: this.onMouseLeaveTooltipContent,
	      onKeyDown: this.onEscKeyDown
	    })));
	  };

	  return TooltipPopoverWrapper;
	}(React__default.Component);

	TooltipPopoverWrapper.propTypes = propTypes$B;
	TooltipPopoverWrapper.defaultProps = defaultProps$y;

	var defaultProps$z = {
	  placement: 'right',
	  placementPrefix: 'bs-popover',
	  trigger: 'click'
	};

	var Popover = function Popover(props) {
	  var popperClasses = classnames('popover', 'show');
	  var classes = classnames('popover-inner', props.innerClassName);
	  return React__default.createElement(TooltipPopoverWrapper, _extends({}, props, {
	    popperClassName: popperClasses,
	    innerClassName: classes
	  }));
	};

	Popover.propTypes = propTypes$B;
	Popover.defaultProps = defaultProps$z;

	var propTypes$C = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$A = {
	  tag: 'h3'
	};

	var PopoverHeader = function PopoverHeader(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'popover-header'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	PopoverHeader.propTypes = propTypes$C;
	PopoverHeader.defaultProps = defaultProps$A;

	var propTypes$D = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$B = {
	  tag: 'div'
	};

	var PopoverBody = function PopoverBody(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'popover-body'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	PopoverBody.propTypes = propTypes$D;
	PopoverBody.defaultProps = defaultProps$B;

	var propTypes$E = {
	  children: propTypes.node.isRequired,
	  node: propTypes.any
	};

	var Portal =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(Portal, _React$Component);

	  function Portal() {
	    return _React$Component.apply(this, arguments) || this;
	  }

	  var _proto = Portal.prototype;

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    if (this.defaultNode) {
	      document.body.removeChild(this.defaultNode);
	    }

	    this.defaultNode = null;
	  };

	  _proto.render = function render() {
	    if (!canUseDOM) {
	      return null;
	    }

	    if (!this.props.node && !this.defaultNode) {
	      this.defaultNode = document.createElement('div');
	      document.body.appendChild(this.defaultNode);
	    }

	    return ReactDOM.createPortal(this.props.children, this.props.node || this.defaultNode);
	  };

	  return Portal;
	}(React__default.Component);

	Portal.propTypes = propTypes$E;

	function noop$1() {}

	var FadePropTypes = propTypes.shape(Fade.propTypes);
	var propTypes$F = {
	  isOpen: propTypes.bool,
	  autoFocus: propTypes.bool,
	  centered: propTypes.bool,
	  scrollable: propTypes.bool,
	  size: propTypes.string,
	  toggle: propTypes.func,
	  keyboard: propTypes.bool,
	  role: propTypes.string,
	  labelledBy: propTypes.string,
	  backdrop: propTypes.oneOfType([propTypes.bool, propTypes.oneOf(['static'])]),
	  onEnter: propTypes.func,
	  onExit: propTypes.func,
	  onOpened: propTypes.func,
	  onClosed: propTypes.func,
	  children: propTypes.node,
	  className: propTypes.string,
	  wrapClassName: propTypes.string,
	  modalClassName: propTypes.string,
	  backdropClassName: propTypes.string,
	  contentClassName: propTypes.string,
	  external: propTypes.node,
	  fade: propTypes.bool,
	  cssModule: propTypes.object,
	  zIndex: propTypes.oneOfType([propTypes.number, propTypes.string]),
	  backdropTransition: FadePropTypes,
	  modalTransition: FadePropTypes,
	  innerRef: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func]),
	  unmountOnClose: propTypes.bool,
	  returnFocusAfterClose: propTypes.bool
	};
	var propsToOmit = Object.keys(propTypes$F);
	var defaultProps$C = {
	  isOpen: false,
	  autoFocus: true,
	  centered: false,
	  scrollable: false,
	  role: 'dialog',
	  backdrop: true,
	  keyboard: true,
	  zIndex: 1050,
	  fade: true,
	  onOpened: noop$1,
	  onClosed: noop$1,
	  modalTransition: {
	    timeout: TransitionTimeouts.Modal
	  },
	  backdropTransition: {
	    mountOnEnter: true,
	    timeout: TransitionTimeouts.Fade // uses standard fade transition

	  },
	  unmountOnClose: true,
	  returnFocusAfterClose: true
	};

	var Modal =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(Modal, _React$Component);

	  function Modal(props) {
	    var _this;

	    _this = _React$Component.call(this, props) || this;
	    _this._element = null;
	    _this._originalBodyPadding = null;
	    _this.getFocusableChildren = _this.getFocusableChildren.bind(_assertThisInitialized(_this));
	    _this.handleBackdropClick = _this.handleBackdropClick.bind(_assertThisInitialized(_this));
	    _this.handleBackdropMouseDown = _this.handleBackdropMouseDown.bind(_assertThisInitialized(_this));
	    _this.handleEscape = _this.handleEscape.bind(_assertThisInitialized(_this));
	    _this.handleTab = _this.handleTab.bind(_assertThisInitialized(_this));
	    _this.onOpened = _this.onOpened.bind(_assertThisInitialized(_this));
	    _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
	    _this.manageFocusAfterClose = _this.manageFocusAfterClose.bind(_assertThisInitialized(_this));
	    _this.state = {
	      isOpen: false
	    };
	    return _this;
	  }

	  var _proto = Modal.prototype;

	  _proto.componentDidMount = function componentDidMount() {
	    var _this$props = this.props,
	        isOpen = _this$props.isOpen,
	        autoFocus = _this$props.autoFocus,
	        onEnter = _this$props.onEnter;

	    if (isOpen) {
	      this.init();
	      this.setState({
	        isOpen: true
	      });

	      if (autoFocus) {
	        this.setFocus();
	      }
	    }

	    if (onEnter) {
	      onEnter();
	    }

	    this._isMounted = true;
	  };

	  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
	    if (this.props.isOpen && !prevProps.isOpen) {
	      this.init();
	      this.setState({
	        isOpen: true
	      }); // let render() renders Modal Dialog first

	      return;
	    } // now Modal Dialog is rendered and we can refer this._element and this._dialog


	    if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
	      this.setFocus();
	    }

	    if (this._element && prevProps.zIndex !== this.props.zIndex) {
	      this._element.style.zIndex = this.props.zIndex;
	    }
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    if (this.props.onExit) {
	      this.props.onExit();
	    }

	    if (this._element) {
	      this.destroy();

	      if (this.state.isOpen) {
	        this.close();
	      }
	    }

	    this._isMounted = false;
	  };

	  _proto.onOpened = function onOpened(node, isAppearing) {
	    this.props.onOpened();
	    (this.props.modalTransition.onEntered || noop$1)(node, isAppearing);
	  };

	  _proto.onClosed = function onClosed(node) {
	    var unmountOnClose = this.props.unmountOnClose; // so all methods get called before it is unmounted

	    this.props.onClosed();
	    (this.props.modalTransition.onExited || noop$1)(node);

	    if (unmountOnClose) {
	      this.destroy();
	    }

	    this.close();

	    if (this._isMounted) {
	      this.setState({
	        isOpen: false
	      });
	    }
	  };

	  _proto.setFocus = function setFocus() {
	    if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
	      this._dialog.parentNode.focus();
	    }
	  };

	  _proto.getFocusableChildren = function getFocusableChildren() {
	    return this._element.querySelectorAll(focusableElements.join(', '));
	  };

	  _proto.getFocusedChild = function getFocusedChild() {
	    var currentFocus;
	    var focusableChildren = this.getFocusableChildren();

	    try {
	      currentFocus = document.activeElement;
	    } catch (err) {
	      currentFocus = focusableChildren[0];
	    }

	    return currentFocus;
	  } // not mouseUp because scrollbar fires it, shouldn't close when user scrolls
	  ;

	  _proto.handleBackdropClick = function handleBackdropClick(e) {
	    if (e.target === this._mouseDownElement) {
	      e.stopPropagation();
	      if (!this.props.isOpen || this.props.backdrop !== true) return;
	      var backdrop = this._dialog ? this._dialog.parentNode : null;

	      if (backdrop && e.target === backdrop && this.props.toggle) {
	        this.props.toggle(e);
	      }
	    }
	  };

	  _proto.handleTab = function handleTab(e) {
	    if (e.which !== 9) return;
	    var focusableChildren = this.getFocusableChildren();
	    var totalFocusable = focusableChildren.length;
	    if (totalFocusable === 0) return;
	    var currentFocus = this.getFocusedChild();
	    var focusedIndex = 0;

	    for (var i = 0; i < totalFocusable; i += 1) {
	      if (focusableChildren[i] === currentFocus) {
	        focusedIndex = i;
	        break;
	      }
	    }

	    if (e.shiftKey && focusedIndex === 0) {
	      e.preventDefault();
	      focusableChildren[totalFocusable - 1].focus();
	    } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
	      e.preventDefault();
	      focusableChildren[0].focus();
	    }
	  };

	  _proto.handleBackdropMouseDown = function handleBackdropMouseDown(e) {
	    this._mouseDownElement = e.target;
	  };

	  _proto.handleEscape = function handleEscape(e) {
	    if (this.props.isOpen && this.props.keyboard && e.keyCode === 27 && this.props.toggle) {
	      e.preventDefault();
	      e.stopPropagation();
	      this.props.toggle(e);
	    }
	  };

	  _proto.init = function init() {
	    try {
	      this._triggeringElement = document.activeElement;
	    } catch (err) {
	      this._triggeringElement = null;
	    }

	    if (!this._element) {
	      this._element = document.createElement('div');

	      this._element.setAttribute('tabindex', '-1');

	      this._element.style.position = 'relative';
	      this._element.style.zIndex = this.props.zIndex;
	      document.body.appendChild(this._element);
	    }

	    this._originalBodyPadding = getOriginalBodyPadding();
	    conditionallyUpdateScrollbar();

	    if (Modal.openCount === 0) {
	      document.body.className = classnames(document.body.className, mapToCssModules('modal-open', this.props.cssModule));
	    }

	    Modal.openCount += 1;
	  };

	  _proto.destroy = function destroy() {
	    if (this._element) {
	      document.body.removeChild(this._element);
	      this._element = null;
	    }

	    this.manageFocusAfterClose();
	  };

	  _proto.manageFocusAfterClose = function manageFocusAfterClose() {
	    if (this._triggeringElement) {
	      var returnFocusAfterClose = this.props.returnFocusAfterClose;
	      if (this._triggeringElement.focus && returnFocusAfterClose) this._triggeringElement.focus();
	      this._triggeringElement = null;
	    }
	  };

	  _proto.close = function close() {
	    if (Modal.openCount <= 1) {
	      var modalOpenClassName = mapToCssModules('modal-open', this.props.cssModule); // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`

	      var modalOpenClassNameRegex = new RegExp("(^| )" + modalOpenClassName + "( |$)");
	      document.body.className = document.body.className.replace(modalOpenClassNameRegex, ' ').trim();
	    }

	    this.manageFocusAfterClose();
	    Modal.openCount = Math.max(0, Modal.openCount - 1);
	    setScrollbarWidth(this._originalBodyPadding);
	  };

	  _proto.renderModalDialog = function renderModalDialog() {
	    var _classNames,
	        _this2 = this;

	    var attributes = omit(this.props, propsToOmit);
	    var dialogBaseClass = 'modal-dialog';
	    return React__default.createElement("div", _extends({}, attributes, {
	      className: mapToCssModules(classnames(dialogBaseClass, this.props.className, (_classNames = {}, _classNames["modal-" + this.props.size] = this.props.size, _classNames[dialogBaseClass + "-centered"] = this.props.centered, _classNames[dialogBaseClass + "-scrollable"] = this.props.scrollable, _classNames)), this.props.cssModule),
	      role: "document",
	      ref: function ref(c) {
	        _this2._dialog = c;
	      }
	    }), React__default.createElement("div", {
	      className: mapToCssModules(classnames('modal-content', this.props.contentClassName), this.props.cssModule)
	    }, this.props.children));
	  };

	  _proto.render = function render() {
	    var unmountOnClose = this.props.unmountOnClose;

	    if (!!this._element && (this.state.isOpen || !unmountOnClose)) {
	      var isModalHidden = !!this._element && !this.state.isOpen && !unmountOnClose;
	      this._element.style.display = isModalHidden ? 'none' : 'block';
	      var _this$props2 = this.props,
	          wrapClassName = _this$props2.wrapClassName,
	          modalClassName = _this$props2.modalClassName,
	          backdropClassName = _this$props2.backdropClassName,
	          cssModule = _this$props2.cssModule,
	          isOpen = _this$props2.isOpen,
	          backdrop = _this$props2.backdrop,
	          role = _this$props2.role,
	          labelledBy = _this$props2.labelledBy,
	          external = _this$props2.external,
	          innerRef = _this$props2.innerRef;
	      var modalAttributes = {
	        onClick: this.handleBackdropClick,
	        onMouseDown: this.handleBackdropMouseDown,
	        onKeyUp: this.handleEscape,
	        onKeyDown: this.handleTab,
	        style: {
	          display: 'block'
	        },
	        'aria-labelledby': labelledBy,
	        role: role,
	        tabIndex: '-1'
	      };
	      var hasTransition = this.props.fade;

	      var modalTransition = _objectSpread({}, Fade.defaultProps, this.props.modalTransition, {
	        baseClass: hasTransition ? this.props.modalTransition.baseClass : '',
	        timeout: hasTransition ? this.props.modalTransition.timeout : 0
	      });

	      var backdropTransition = _objectSpread({}, Fade.defaultProps, this.props.backdropTransition, {
	        baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
	        timeout: hasTransition ? this.props.backdropTransition.timeout : 0
	      });

	      var Backdrop = backdrop && (hasTransition ? React__default.createElement(Fade, _extends({}, backdropTransition, {
	        "in": isOpen && !!backdrop,
	        cssModule: cssModule,
	        className: mapToCssModules(classnames('modal-backdrop', backdropClassName), cssModule)
	      })) : React__default.createElement("div", {
	        className: mapToCssModules(classnames('modal-backdrop', 'show', backdropClassName), cssModule)
	      }));
	      return React__default.createElement(Portal, {
	        node: this._element
	      }, React__default.createElement("div", {
	        className: mapToCssModules(wrapClassName)
	      }, React__default.createElement(Fade, _extends({}, modalAttributes, modalTransition, {
	        "in": isOpen,
	        onEntered: this.onOpened,
	        onExited: this.onClosed,
	        cssModule: cssModule,
	        className: mapToCssModules(classnames('modal', modalClassName), cssModule),
	        innerRef: innerRef
	      }), external, this.renderModalDialog()), Backdrop));
	    }

	    return null;
	  };

	  return Modal;
	}(React__default.Component);

	Modal.propTypes = propTypes$F;
	Modal.defaultProps = defaultProps$C;
	Modal.openCount = 0;

	var propTypes$G = {
	  tag: tagPropType,
	  wrapTag: tagPropType,
	  toggle: propTypes.func,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  children: propTypes.node,
	  closeAriaLabel: propTypes.string,
	  charCode: propTypes.oneOfType([propTypes.string, propTypes.number]),
	  close: propTypes.object
	};
	var defaultProps$D = {
	  tag: 'h5',
	  wrapTag: 'div',
	  closeAriaLabel: 'Close',
	  charCode: 215
	};

	var ModalHeader = function ModalHeader(props) {
	  var closeButton;

	  var className = props.className,
	      cssModule = props.cssModule,
	      children = props.children,
	      toggle = props.toggle,
	      Tag = props.tag,
	      WrapTag = props.wrapTag,
	      closeAriaLabel = props.closeAriaLabel,
	      charCode = props.charCode,
	      close = props.close,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "children", "toggle", "tag", "wrapTag", "closeAriaLabel", "charCode", "close"]);

	  var classes = mapToCssModules(classnames(className, 'modal-header'), cssModule);

	  if (!close && toggle) {
	    var closeIcon = typeof charCode === 'number' ? String.fromCharCode(charCode) : charCode;
	    closeButton = React__default.createElement("button", {
	      type: "button",
	      onClick: toggle,
	      className: mapToCssModules('close', cssModule),
	      "aria-label": closeAriaLabel
	    }, React__default.createElement("span", {
	      "aria-hidden": "true"
	    }, closeIcon));
	  }

	  return React__default.createElement(WrapTag, _extends({}, attributes, {
	    className: classes
	  }), React__default.createElement(Tag, {
	    className: mapToCssModules('modal-title', cssModule)
	  }, children), close || closeButton);
	};

	ModalHeader.propTypes = propTypes$G;
	ModalHeader.defaultProps = defaultProps$D;

	var propTypes$H = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$E = {
	  tag: 'div'
	};

	var ModalBody = function ModalBody(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'modal-body'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	ModalBody.propTypes = propTypes$H;
	ModalBody.defaultProps = defaultProps$E;

	var propTypes$I = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$F = {
	  tag: 'div'
	};

	var ModalFooter = function ModalFooter(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'modal-footer'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	ModalFooter.propTypes = propTypes$I;
	ModalFooter.defaultProps = defaultProps$F;

	var defaultProps$G = {
	  placement: 'top',
	  autohide: true,
	  placementPrefix: 'bs-tooltip',
	  trigger: 'click hover focus'
	};

	var Tooltip = function Tooltip(props) {
	  var popperClasses = classnames('tooltip', 'show');
	  var classes = classnames('tooltip-inner', props.innerClassName);
	  return React__default.createElement(TooltipPopoverWrapper, _extends({}, props, {
	    popperClassName: popperClasses,
	    innerClassName: classes
	  }));
	};

	Tooltip.propTypes = propTypes$B;
	Tooltip.defaultProps = defaultProps$G;

	var propTypes$J = {
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  size: propTypes.string,
	  bordered: propTypes.bool,
	  borderless: propTypes.bool,
	  striped: propTypes.bool,
	  dark: propTypes.bool,
	  hover: propTypes.bool,
	  responsive: propTypes.oneOfType([propTypes.bool, propTypes.string]),
	  tag: tagPropType,
	  responsiveTag: tagPropType,
	  innerRef: propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.object])
	};
	var defaultProps$H = {
	  tag: 'table',
	  responsiveTag: 'div'
	};

	var Table = function Table(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      size = props.size,
	      bordered = props.bordered,
	      borderless = props.borderless,
	      striped = props.striped,
	      dark = props.dark,
	      hover = props.hover,
	      responsive = props.responsive,
	      Tag = props.tag,
	      ResponsiveTag = props.responsiveTag,
	      innerRef = props.innerRef,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "size", "bordered", "borderless", "striped", "dark", "hover", "responsive", "tag", "responsiveTag", "innerRef"]);

	  var classes = mapToCssModules(classnames(className, 'table', size ? 'table-' + size : false, bordered ? 'table-bordered' : false, borderless ? 'table-borderless' : false, striped ? 'table-striped' : false, dark ? 'table-dark' : false, hover ? 'table-hover' : false), cssModule);
	  var table = React__default.createElement(Tag, _extends({}, attributes, {
	    ref: innerRef,
	    className: classes
	  }));

	  if (responsive) {
	    var responsiveClassName = mapToCssModules(responsive === true ? 'table-responsive' : "table-responsive-" + responsive, cssModule);
	    return React__default.createElement(ResponsiveTag, {
	      className: responsiveClassName
	    }, table);
	  }

	  return table;
	};

	Table.propTypes = propTypes$J;
	Table.defaultProps = defaultProps$H;

	var propTypes$K = {
	  tag: tagPropType,
	  flush: propTypes.bool,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$I = {
	  tag: 'ul'
	};

	var ListGroup = function ListGroup(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      flush = props.flush,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "flush"]);

	  var classes = mapToCssModules(classnames(className, 'list-group', flush ? 'list-group-flush' : false), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	ListGroup.propTypes = propTypes$K;
	ListGroup.defaultProps = defaultProps$I;

	var propTypes$L = {
	  children: propTypes.node,
	  inline: propTypes.bool,
	  tag: tagPropType,
	  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string]),
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$J = {
	  tag: 'form'
	};

	var Form =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose(Form, _Component);

	  function Form(props) {
	    var _this;

	    _this = _Component.call(this, props) || this;
	    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
	    _this.submit = _this.submit.bind(_assertThisInitialized(_this));
	    return _this;
	  }

	  var _proto = Form.prototype;

	  _proto.getRef = function getRef(ref) {
	    if (this.props.innerRef) {
	      this.props.innerRef(ref);
	    }

	    this.ref = ref;
	  };

	  _proto.submit = function submit() {
	    if (this.ref) {
	      this.ref.submit();
	    }
	  };

	  _proto.render = function render() {
	    var _this$props = this.props,
	        className = _this$props.className,
	        cssModule = _this$props.cssModule,
	        inline = _this$props.inline,
	        Tag = _this$props.tag,
	        innerRef = _this$props.innerRef,
	        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "inline", "tag", "innerRef"]);

	    var classes = mapToCssModules(classnames(className, inline ? 'form-inline' : false), cssModule);
	    return React__default.createElement(Tag, _extends({}, attributes, {
	      ref: innerRef,
	      className: classes
	    }));
	  };

	  return Form;
	}(React.Component);

	Form.propTypes = propTypes$L;
	Form.defaultProps = defaultProps$J;

	var propTypes$M = {
	  children: propTypes.node,
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  valid: propTypes.bool,
	  tooltip: propTypes.bool
	};
	var defaultProps$K = {
	  tag: 'div',
	  valid: undefined
	};

	var FormFeedback = function FormFeedback(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      valid = props.valid,
	      tooltip = props.tooltip,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "valid", "tooltip", "tag"]);

	  var validMode = tooltip ? 'tooltip' : 'feedback';
	  var classes = mapToCssModules(classnames(className, valid ? "valid-" + validMode : "invalid-" + validMode), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	FormFeedback.propTypes = propTypes$M;
	FormFeedback.defaultProps = defaultProps$K;

	var propTypes$N = {
	  children: propTypes.node,
	  row: propTypes.bool,
	  check: propTypes.bool,
	  inline: propTypes.bool,
	  disabled: propTypes.bool,
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$L = {
	  tag: 'div'
	};

	var FormGroup = function FormGroup(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      row = props.row,
	      disabled = props.disabled,
	      check = props.check,
	      inline = props.inline,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "row", "disabled", "check", "inline", "tag"]);

	  var classes = mapToCssModules(classnames(className, row ? 'row' : false, check ? 'form-check' : 'form-group', check && inline ? 'form-check-inline' : false, check && disabled ? 'disabled' : false), cssModule);

	  if (Tag === 'fieldset') {
	    attributes.disabled = disabled;
	  }

	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	FormGroup.propTypes = propTypes$N;
	FormGroup.defaultProps = defaultProps$L;

	var propTypes$O = {
	  children: propTypes.node,
	  inline: propTypes.bool,
	  tag: tagPropType,
	  color: propTypes.string,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$M = {
	  tag: 'small',
	  color: 'muted'
	};

	var FormText = function FormText(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      inline = props.inline,
	      color = props.color,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "inline", "color", "tag"]);

	  var classes = mapToCssModules(classnames(className, !inline ? 'form-text' : false, color ? "text-" + color : false), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	FormText.propTypes = propTypes$O;
	FormText.defaultProps = defaultProps$M;

	var propTypes$P = {
	  children: propTypes.node,
	  type: propTypes.string,
	  size: propTypes.string,
	  bsSize: propTypes.string,
	  valid: propTypes.bool,
	  invalid: propTypes.bool,
	  tag: tagPropType,
	  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string]),
	  plaintext: propTypes.bool,
	  addon: propTypes.bool,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$N = {
	  type: 'text'
	};

	var Input =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose(Input, _React$Component);

	  function Input(props) {
	    var _this;

	    _this = _React$Component.call(this, props) || this;
	    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
	    _this.focus = _this.focus.bind(_assertThisInitialized(_this));
	    return _this;
	  }

	  var _proto = Input.prototype;

	  _proto.getRef = function getRef(ref) {
	    if (this.props.innerRef) {
	      this.props.innerRef(ref);
	    }

	    this.ref = ref;
	  };

	  _proto.focus = function focus() {
	    if (this.ref) {
	      this.ref.focus();
	    }
	  };

	  _proto.render = function render() {
	    var _this$props = this.props,
	        className = _this$props.className,
	        cssModule = _this$props.cssModule,
	        type = _this$props.type,
	        bsSize = _this$props.bsSize,
	        valid = _this$props.valid,
	        invalid = _this$props.invalid,
	        tag = _this$props.tag,
	        addon = _this$props.addon,
	        plaintext = _this$props.plaintext,
	        innerRef = _this$props.innerRef,
	        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "type", "bsSize", "valid", "invalid", "tag", "addon", "plaintext", "innerRef"]);

	    var checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
	    var isNotaNumber = new RegExp('\\D', 'g');
	    var fileInput = type === 'file';
	    var textareaInput = type === 'textarea';
	    var selectInput = type === 'select';
	    var Tag = tag || (selectInput || textareaInput ? type : 'input');
	    var formControlClass = 'form-control';

	    if (plaintext) {
	      formControlClass = formControlClass + "-plaintext";
	      Tag = tag || 'input';
	    } else if (fileInput) {
	      formControlClass = formControlClass + "-file";
	    } else if (checkInput) {
	      if (addon) {
	        formControlClass = null;
	      } else {
	        formControlClass = 'form-check-input';
	      }
	    }

	    if (attributes.size && isNotaNumber.test(attributes.size)) {
	      warnOnce('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
	      bsSize = attributes.size;
	      delete attributes.size;
	    }

	    var classes = mapToCssModules(classnames(className, invalid && 'is-invalid', valid && 'is-valid', bsSize ? "form-control-" + bsSize : false, formControlClass), cssModule);

	    if (Tag === 'input' || tag && typeof tag === 'function') {
	      attributes.type = type;
	    }

	    if (attributes.children && !(plaintext || type === 'select' || typeof Tag !== 'string' || Tag === 'select')) {
	      warnOnce("Input with a type of \"" + type + "\" cannot have children. Please use \"value\"/\"defaultValue\" instead.");
	      delete attributes.children;
	    }

	    return React__default.createElement(Tag, _extends({}, attributes, {
	      ref: innerRef,
	      className: classes
	    }));
	  };

	  return Input;
	}(React__default.Component);

	Input.propTypes = propTypes$P;
	Input.defaultProps = defaultProps$N;

	var propTypes$Q = {
	  tag: tagPropType,
	  size: propTypes.string,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$O = {
	  tag: 'div'
	};

	var InputGroup = function InputGroup(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      size = props.size,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "size"]);

	  var classes = mapToCssModules(classnames(className, 'input-group', size ? "input-group-" + size : null), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	InputGroup.propTypes = propTypes$Q;
	InputGroup.defaultProps = defaultProps$O;

	var propTypes$R = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$P = {
	  tag: 'span'
	};

	var InputGroupText = function InputGroupText(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'input-group-text'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	InputGroupText.propTypes = propTypes$R;
	InputGroupText.defaultProps = defaultProps$P;

	var propTypes$S = {
	  tag: tagPropType,
	  addonType: propTypes.oneOf(['prepend', 'append']).isRequired,
	  children: propTypes.node,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$Q = {
	  tag: 'div'
	};

	var InputGroupAddon = function InputGroupAddon(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      addonType = props.addonType,
	      children = props.children,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "addonType", "children"]);

	  var classes = mapToCssModules(classnames(className, 'input-group-' + addonType), cssModule); // Convenience to assist with transition

	  if (typeof children === 'string') {
	    return React__default.createElement(Tag, _extends({}, attributes, {
	      className: classes
	    }), React__default.createElement(InputGroupText, {
	      children: children
	    }));
	  }

	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes,
	    children: children
	  }));
	};

	InputGroupAddon.propTypes = propTypes$S;
	InputGroupAddon.defaultProps = defaultProps$Q;

	var propTypes$T = {
	  addonType: propTypes.oneOf(['prepend', 'append']).isRequired,
	  children: propTypes.node
	};

	var InputGroupButtonDropdown = function InputGroupButtonDropdown(props) {
	  return React__default.createElement(Dropdown, props);
	};

	InputGroupButtonDropdown.propTypes = propTypes$T;

	var colWidths$1 = ['xs', 'sm', 'md', 'lg', 'xl'];
	var stringOrNumberProp$1 = propTypes.oneOfType([propTypes.number, propTypes.string]);
	var columnProps$1 = propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.shape({
	  size: stringOrNumberProp$1,
	  order: stringOrNumberProp$1,
	  offset: stringOrNumberProp$1
	})]);
	var propTypes$U = {
	  children: propTypes.node,
	  hidden: propTypes.bool,
	  check: propTypes.bool,
	  size: propTypes.string,
	  "for": propTypes.string,
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  xs: columnProps$1,
	  sm: columnProps$1,
	  md: columnProps$1,
	  lg: columnProps$1,
	  xl: columnProps$1,
	  widths: propTypes.array
	};
	var defaultProps$R = {
	  tag: 'label',
	  widths: colWidths$1
	};

	var getColumnSizeClass$1 = function getColumnSizeClass(isXs, colWidth, colSize) {
	  if (colSize === true || colSize === '') {
	    return isXs ? 'col' : "col-" + colWidth;
	  } else if (colSize === 'auto') {
	    return isXs ? 'col-auto' : "col-" + colWidth + "-auto";
	  }

	  return isXs ? "col-" + colSize : "col-" + colWidth + "-" + colSize;
	};

	var Label = function Label(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      hidden = props.hidden,
	      widths = props.widths,
	      Tag = props.tag,
	      check = props.check,
	      size = props.size,
	      htmlFor = props["for"],
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "hidden", "widths", "tag", "check", "size", "for"]);

	  var colClasses = [];
	  widths.forEach(function (colWidth, i) {
	    var columnProp = props[colWidth];
	    delete attributes[colWidth];

	    if (!columnProp && columnProp !== '') {
	      return;
	    }

	    var isXs = !i;
	    var colClass;

	    if (lodash_isobject(columnProp)) {
	      var _classNames;

	      var colSizeInterfix = isXs ? '-' : "-" + colWidth + "-";
	      colClass = getColumnSizeClass$1(isXs, colWidth, columnProp.size);
	      colClasses.push(mapToCssModules(classnames((_classNames = {}, _classNames[colClass] = columnProp.size || columnProp.size === '', _classNames["order" + colSizeInterfix + columnProp.order] = columnProp.order || columnProp.order === 0, _classNames["offset" + colSizeInterfix + columnProp.offset] = columnProp.offset || columnProp.offset === 0, _classNames))), cssModule);
	    } else {
	      colClass = getColumnSizeClass$1(isXs, colWidth, columnProp);
	      colClasses.push(colClass);
	    }
	  });
	  var classes = mapToCssModules(classnames(className, hidden ? 'sr-only' : false, check ? 'form-check-label' : false, size ? "col-form-label-" + size : false, colClasses, colClasses.length ? 'col-form-label' : false), cssModule);
	  return React__default.createElement(Tag, _extends({
	    htmlFor: htmlFor
	  }, attributes, {
	    className: classes
	  }));
	};

	Label.propTypes = propTypes$U;
	Label.defaultProps = defaultProps$R;

	var propTypes$V = {
	  body: propTypes.bool,
	  bottom: propTypes.bool,
	  children: propTypes.node,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  heading: propTypes.bool,
	  left: propTypes.bool,
	  list: propTypes.bool,
	  middle: propTypes.bool,
	  object: propTypes.bool,
	  right: propTypes.bool,
	  tag: tagPropType,
	  top: propTypes.bool
	};

	var Media = function Media(props) {
	  var body = props.body,
	      bottom = props.bottom,
	      className = props.className,
	      cssModule = props.cssModule,
	      heading = props.heading,
	      left = props.left,
	      list = props.list,
	      middle = props.middle,
	      object = props.object,
	      right = props.right,
	      tag = props.tag,
	      top = props.top,
	      attributes = _objectWithoutPropertiesLoose(props, ["body", "bottom", "className", "cssModule", "heading", "left", "list", "middle", "object", "right", "tag", "top"]);

	  var defaultTag;

	  if (heading) {
	    defaultTag = 'h4';
	  } else if (attributes.href) {
	    defaultTag = 'a';
	  } else if (attributes.src || object) {
	    defaultTag = 'img';
	  } else if (list) {
	    defaultTag = 'ul';
	  } else {
	    defaultTag = 'div';
	  }

	  var Tag = tag || defaultTag;
	  var classes = mapToCssModules(classnames(className, {
	    'media-body': body,
	    'media-heading': heading,
	    'media-left': left,
	    'media-right': right,
	    'media-top': top,
	    'media-bottom': bottom,
	    'media-middle': middle,
	    'media-object': object,
	    'media-list': list,
	    media: !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list
	  }), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	Media.propTypes = propTypes$V;

	var propTypes$W = {
	  active: propTypes.bool,
	  children: propTypes.node,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  disabled: propTypes.bool,
	  tag: tagPropType
	};
	var defaultProps$S = {
	  tag: 'li'
	};

	var PaginationItem = function PaginationItem(props) {
	  var active = props.active,
	      className = props.className,
	      cssModule = props.cssModule,
	      disabled = props.disabled,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["active", "className", "cssModule", "disabled", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'page-item', {
	    active: active,
	    disabled: disabled
	  }), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	PaginationItem.propTypes = propTypes$W;
	PaginationItem.defaultProps = defaultProps$S;

	var propTypes$X = {
	  'aria-label': propTypes.string,
	  children: propTypes.node,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  next: propTypes.bool,
	  previous: propTypes.bool,
	  first: propTypes.bool,
	  last: propTypes.bool,
	  tag: tagPropType
	};
	var defaultProps$T = {
	  tag: 'a'
	};

	var PaginationLink = function PaginationLink(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      next = props.next,
	      previous = props.previous,
	      first = props.first,
	      last = props.last,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "next", "previous", "first", "last", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'page-link'), cssModule);
	  var defaultAriaLabel;

	  if (previous) {
	    defaultAriaLabel = 'Previous';
	  } else if (next) {
	    defaultAriaLabel = 'Next';
	  } else if (first) {
	    defaultAriaLabel = 'First';
	  } else if (last) {
	    defaultAriaLabel = 'Last';
	  }

	  var ariaLabel = props['aria-label'] || defaultAriaLabel;
	  var defaultCaret;

	  if (previous) {
	    defaultCaret = "\u2039";
	  } else if (next) {
	    defaultCaret = "\u203A";
	  } else if (first) {
	    defaultCaret = "\xAB";
	  } else if (last) {
	    defaultCaret = "\xBB";
	  }

	  var children = props.children;

	  if (children && Array.isArray(children) && children.length === 0) {
	    children = null;
	  }

	  if (!attributes.href && Tag === 'a') {
	    Tag = 'button';
	  }

	  if (previous || next || first || last) {
	    children = [React__default.createElement("span", {
	      "aria-hidden": "true",
	      key: "caret"
	    }, children || defaultCaret), React__default.createElement("span", {
	      className: "sr-only",
	      key: "sr"
	    }, ariaLabel)];
	  }

	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes,
	    "aria-label": ariaLabel
	  }), children);
	};

	PaginationLink.propTypes = propTypes$X;
	PaginationLink.defaultProps = defaultProps$T;

	/**
	 * TabContext
	 * {
	 *  activeTabId: PropTypes.any
	 * }
	 */

	var TabContext = React__default.createContext({});

	var propTypes$Y = {
	  tag: tagPropType,
	  activeTab: propTypes.any,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$U = {
	  tag: 'div'
	};

	var TabContent =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose(TabContent, _Component);

	  TabContent.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
	    if (prevState.activeTab !== nextProps.activeTab) {
	      return {
	        activeTab: nextProps.activeTab
	      };
	    }

	    return null;
	  };

	  function TabContent(props) {
	    var _this;

	    _this = _Component.call(this, props) || this;
	    _this.state = {
	      activeTab: _this.props.activeTab
	    };
	    return _this;
	  }

	  var _proto = TabContent.prototype;

	  _proto.render = function render() {
	    var _this$props = this.props,
	        className = _this$props.className,
	        cssModule = _this$props.cssModule,
	        Tag = _this$props.tag;
	    var attributes = omit(this.props, Object.keys(propTypes$Y));
	    var classes = mapToCssModules(classnames('tab-content', className), cssModule);
	    return React__default.createElement(TabContext.Provider, {
	      value: {
	        activeTabId: this.state.activeTab
	      }
	    }, React__default.createElement(Tag, _extends({}, attributes, {
	      className: classes
	    })));
	  };

	  return TabContent;
	}(React.Component);

	polyfill(TabContent);
	TabContent.propTypes = propTypes$Y;
	TabContent.defaultProps = defaultProps$U;

	var propTypes$Z = {
	  tag: tagPropType,
	  className: propTypes.string,
	  cssModule: propTypes.object,
	  tabId: propTypes.any
	};
	var defaultProps$V = {
	  tag: 'div'
	};
	function TabPane(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      tabId = props.tabId,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tabId", "tag"]);

	  var getClasses = function getClasses(activeTabId) {
	    return mapToCssModules(classnames('tab-pane', className, {
	      active: tabId === activeTabId
	    }), cssModule);
	  };

	  return React__default.createElement(TabContext.Consumer, null, function (_ref) {
	    var activeTabId = _ref.activeTabId;
	    return React__default.createElement(Tag, _extends({}, attributes, {
	      className: getClasses(activeTabId)
	    }));
	  });
	}
	TabPane.propTypes = propTypes$Z;
	TabPane.defaultProps = defaultProps$V;

	var propTypes$_ = {
	  tag: tagPropType,
	  fluid: propTypes.bool,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$W = {
	  tag: 'div'
	};

	var Jumbotron = function Jumbotron(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      fluid = props.fluid,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "fluid"]);

	  var classes = mapToCssModules(classnames(className, 'jumbotron', fluid ? 'jumbotron-fluid' : false), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	Jumbotron.propTypes = propTypes$_;
	Jumbotron.defaultProps = defaultProps$W;

	var propTypes$$ = {
	  children: propTypes.node,
	  className: propTypes.string,
	  closeClassName: propTypes.string,
	  closeAriaLabel: propTypes.string,
	  cssModule: propTypes.object,
	  color: propTypes.string,
	  fade: propTypes.bool,
	  isOpen: propTypes.bool,
	  toggle: propTypes.func,
	  tag: tagPropType,
	  transition: propTypes.shape(Fade.propTypes),
	  innerRef: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func])
	};
	var defaultProps$X = {
	  color: 'success',
	  isOpen: true,
	  tag: 'div',
	  closeAriaLabel: 'Close',
	  fade: true,
	  transition: _objectSpread({}, Fade.defaultProps, {
	    unmountOnExit: true
	  })
	};

	function Alert(props) {
	  var className = props.className,
	      closeClassName = props.closeClassName,
	      closeAriaLabel = props.closeAriaLabel,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      color = props.color,
	      isOpen = props.isOpen,
	      toggle = props.toggle,
	      children = props.children,
	      transition = props.transition,
	      fade = props.fade,
	      innerRef = props.innerRef,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "closeClassName", "closeAriaLabel", "cssModule", "tag", "color", "isOpen", "toggle", "children", "transition", "fade", "innerRef"]);

	  var classes = mapToCssModules(classnames(className, 'alert', "alert-" + color, {
	    'alert-dismissible': toggle
	  }), cssModule);
	  var closeClasses = mapToCssModules(classnames('close', closeClassName), cssModule);

	  var alertTransition = _objectSpread({}, Fade.defaultProps, transition, {
	    baseClass: fade ? transition.baseClass : '',
	    timeout: fade ? transition.timeout : 0
	  });

	  return React__default.createElement(Fade, _extends({}, attributes, alertTransition, {
	    tag: Tag,
	    className: classes,
	    "in": isOpen,
	    role: "alert",
	    innerRef: innerRef
	  }), toggle ? React__default.createElement("button", {
	    type: "button",
	    className: closeClasses,
	    "aria-label": closeAriaLabel,
	    onClick: toggle
	  }, React__default.createElement("span", {
	    "aria-hidden": "true"
	  }, "\xD7")) : null, children);
	}

	Alert.propTypes = propTypes$$;
	Alert.defaultProps = defaultProps$X;

	var _transitionStatusToCl;

	var propTypes$10 = _objectSpread({}, reactTransitionGroup_1.propTypes, {
	  isOpen: propTypes.bool,
	  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
	  tag: tagPropType,
	  className: propTypes.node,
	  navbar: propTypes.bool,
	  cssModule: propTypes.object,
	  innerRef: propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.object])
	});

	var defaultProps$Y = _objectSpread({}, reactTransitionGroup_1.defaultProps, {
	  isOpen: false,
	  appear: false,
	  enter: true,
	  exit: true,
	  tag: 'div',
	  timeout: TransitionTimeouts.Collapse
	});

	var transitionStatusToClassHash = (_transitionStatusToCl = {}, _transitionStatusToCl[TransitionStatuses.ENTERING] = 'collapsing', _transitionStatusToCl[TransitionStatuses.ENTERED] = 'collapse show', _transitionStatusToCl[TransitionStatuses.EXITING] = 'collapsing', _transitionStatusToCl[TransitionStatuses.EXITED] = 'collapse', _transitionStatusToCl);

	function getTransitionClass(status) {
	  return transitionStatusToClassHash[status] || 'collapse';
	}

	function getHeight(node) {
	  return node.scrollHeight;
	}

	var Collapse =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose(Collapse, _Component);

	  function Collapse(props) {
	    var _this;

	    _this = _Component.call(this, props) || this;
	    _this.state = {
	      height: null
	    };
	    ['onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'].forEach(function (name) {
	      _this[name] = _this[name].bind(_assertThisInitialized(_this));
	    });
	    return _this;
	  }

	  var _proto = Collapse.prototype;

	  _proto.onEntering = function onEntering(node, isAppearing) {
	    this.setState({
	      height: getHeight(node)
	    });
	    this.props.onEntering(node, isAppearing);
	  };

	  _proto.onEntered = function onEntered(node, isAppearing) {
	    this.setState({
	      height: null
	    });
	    this.props.onEntered(node, isAppearing);
	  };

	  _proto.onExit = function onExit(node) {
	    this.setState({
	      height: getHeight(node)
	    });
	    this.props.onExit(node);
	  };

	  _proto.onExiting = function onExiting(node) {
	    // getting this variable triggers a reflow
	    var _unused = node.offsetHeight; // eslint-disable-line no-unused-vars

	    this.setState({
	      height: 0
	    });
	    this.props.onExiting(node);
	  };

	  _proto.onExited = function onExited(node) {
	    this.setState({
	      height: null
	    });
	    this.props.onExited(node);
	  };

	  _proto.render = function render() {
	    var _this2 = this;

	    var _this$props = this.props,
	        Tag = _this$props.tag,
	        isOpen = _this$props.isOpen,
	        className = _this$props.className,
	        navbar = _this$props.navbar,
	        cssModule = _this$props.cssModule,
	        children = _this$props.children,
	        innerRef = _this$props.innerRef,
	        otherProps = _objectWithoutPropertiesLoose(_this$props, ["tag", "isOpen", "className", "navbar", "cssModule", "children", "innerRef"]);

	    var height = this.state.height;
	    var transitionProps = pick(otherProps, TransitionPropTypeKeys);
	    var childProps = omit(otherProps, TransitionPropTypeKeys);
	    return React__default.createElement(reactTransitionGroup_1, _extends({}, transitionProps, {
	      "in": isOpen,
	      onEntering: this.onEntering,
	      onEntered: this.onEntered,
	      onExit: this.onExit,
	      onExiting: this.onExiting,
	      onExited: this.onExited
	    }), function (status) {
	      var collapseClass = getTransitionClass(status);
	      var classes = mapToCssModules(classnames(className, collapseClass, navbar && 'navbar-collapse'), cssModule);
	      var style = height === null ? null : {
	        height: height
	      };
	      return React__default.createElement(Tag, _extends({}, childProps, {
	        style: _objectSpread({}, childProps.style, style),
	        className: classes,
	        ref: _this2.props.innerRef
	      }), children);
	    });
	  };

	  return Collapse;
	}(React.Component);

	Collapse.propTypes = propTypes$10;
	Collapse.defaultProps = defaultProps$Y;

	var propTypes$11 = {
	  tag: tagPropType,
	  active: propTypes.bool,
	  disabled: propTypes.bool,
	  color: propTypes.string,
	  action: propTypes.bool,
	  className: propTypes.any,
	  cssModule: propTypes.object
	};
	var defaultProps$Z = {
	  tag: 'li'
	};

	var handleDisabledOnClick = function handleDisabledOnClick(e) {
	  e.preventDefault();
	};

	var ListGroupItem = function ListGroupItem(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      active = props.active,
	      disabled = props.disabled,
	      action = props.action,
	      color = props.color,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "active", "disabled", "action", "color"]);

	  var classes = mapToCssModules(classnames(className, active ? 'active' : false, disabled ? 'disabled' : false, action ? 'list-group-item-action' : false, color ? "list-group-item-" + color : false, 'list-group-item'), cssModule); // Prevent click event when disabled.

	  if (disabled) {
	    attributes.onClick = handleDisabledOnClick;
	  }

	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	ListGroupItem.propTypes = propTypes$11;
	ListGroupItem.defaultProps = defaultProps$Z;

	var propTypes$12 = {
	  tag: tagPropType,
	  className: propTypes.any,
	  cssModule: propTypes.object
	};
	var defaultProps$_ = {
	  tag: 'h5'
	};

	var ListGroupItemHeading = function ListGroupItemHeading(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'list-group-item-heading'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	ListGroupItemHeading.propTypes = propTypes$12;
	ListGroupItemHeading.defaultProps = defaultProps$_;

	var propTypes$13 = {
	  tag: tagPropType,
	  className: propTypes.any,
	  cssModule: propTypes.object
	};
	var defaultProps$$ = {
	  tag: 'p'
	};

	var ListGroupItemText = function ListGroupItemText(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

	  var classes = mapToCssModules(classnames(className, 'list-group-item-text'), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, {
	    className: classes
	  }));
	};

	ListGroupItemText.propTypes = propTypes$13;
	ListGroupItemText.defaultProps = defaultProps$$;

	var UncontrolledAlert =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose(UncontrolledAlert, _Component);

	  function UncontrolledAlert(props) {
	    var _this;

	    _this = _Component.call(this, props) || this;
	    _this.state = {
	      isOpen: true
	    };
	    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
	    return _this;
	  }

	  var _proto = UncontrolledAlert.prototype;

	  _proto.toggle = function toggle() {
	    this.setState({
	      isOpen: !this.state.isOpen
	    });
	  };

	  _proto.render = function render() {
	    return React__default.createElement(Alert, _extends({
	      isOpen: this.state.isOpen,
	      toggle: this.toggle
	    }, this.props));
	  };

	  return UncontrolledAlert;
	}(React.Component);

	var omitKeys = ['defaultOpen'];

	var UncontrolledButtonDropdown =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose(UncontrolledButtonDropdown, _Component);

	  function UncontrolledButtonDropdown(props) {
	    var _this;

	    _this = _Component.call(this, props) || this;
	    _this.state = {
	      isOpen: props.defaultOpen || false
	    };
	    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
	    return _this;
	  }

	  var _proto = UncontrolledButtonDropdown.prototype;

	  _proto.toggle = function toggle() {
	    this.setState({
	      isOpen: !this.state.isOpen
	    });
	  };

	  _proto.render = function render() {
	    return React__default.createElement(ButtonDropdown, _extends({
	      isOpen: this.state.isOpen,
	      toggle: this.toggle
	    }, omit(this.props, omitKeys)));
	  };

	  return UncontrolledButtonDropdown;
	}(React.Component);
	UncontrolledButtonDropdown.propTypes = _objectSpread({
	  defaultOpen: propTypes.bool
	}, ButtonDropdown.propTypes);

	var omitKeys$1 = ['toggleEvents', 'defaultOpen'];
	var propTypes$14 = {
	  defaultOpen: propTypes.bool,
	  toggler: propTypes.string.isRequired,
	  toggleEvents: propTypes.arrayOf(propTypes.string)
	};
	var defaultProps$10 = {
	  toggleEvents: defaultToggleEvents
	};

	var UncontrolledCollapse =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose(UncontrolledCollapse, _Component);

	  function UncontrolledCollapse(props) {
	    var _this;

	    _this = _Component.call(this, props) || this;
	    _this.togglers = null;
	    _this.removeEventListeners = null;
	    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
	    _this.state = {
	      isOpen: props.defaultOpen || false
	    };
	    return _this;
	  }

	  var _proto = UncontrolledCollapse.prototype;

	  _proto.componentDidMount = function componentDidMount() {
	    this.togglers = findDOMElements(this.props.toggler);

	    if (this.togglers.length) {
	      this.removeEventListeners = addMultipleEventListeners(this.togglers, this.toggle, this.props.toggleEvents);
	    }
	  };

	  _proto.componentWillUnmount = function componentWillUnmount() {
	    if (this.togglers.length && this.removeEventListeners) {
	      this.removeEventListeners();
	    }
	  };

	  _proto.toggle = function toggle(e) {
	    this.setState(function (_ref) {
	      var isOpen = _ref.isOpen;
	      return {
	        isOpen: !isOpen
	      };
	    });
	    e.preventDefault();
	  };

	  _proto.render = function render() {
	    return React__default.createElement(Collapse, _extends({
	      isOpen: this.state.isOpen
	    }, omit(this.props, omitKeys$1)));
	  };

	  return UncontrolledCollapse;
	}(React.Component);

	UncontrolledCollapse.propTypes = propTypes$14;
	UncontrolledCollapse.defaultProps = defaultProps$10;

	var omitKeys$2 = ['defaultOpen'];

	var UncontrolledDropdown =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose(UncontrolledDropdown, _Component);

	  function UncontrolledDropdown(props) {
	    var _this;

	    _this = _Component.call(this, props) || this;
	    _this.state = {
	      isOpen: props.defaultOpen || false
	    };
	    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
	    return _this;
	  }

	  var _proto = UncontrolledDropdown.prototype;

	  _proto.toggle = function toggle() {
	    this.setState({
	      isOpen: !this.state.isOpen
	    });
	  };

	  _proto.render = function render() {
	    return React__default.createElement(Dropdown, _extends({
	      isOpen: this.state.isOpen,
	      toggle: this.toggle
	    }, omit(this.props, omitKeys$2)));
	  };

	  return UncontrolledDropdown;
	}(React.Component);
	UncontrolledDropdown.propTypes = _objectSpread({
	  defaultOpen: propTypes.bool
	}, Dropdown.propTypes);

	var omitKeys$3 = ['defaultOpen'];

	var UncontrolledTooltip =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose(UncontrolledTooltip, _Component);

	  function UncontrolledTooltip(props) {
	    var _this;

	    _this = _Component.call(this, props) || this;
	    _this.state = {
	      isOpen: props.defaultOpen || false
	    };
	    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
	    return _this;
	  }

	  var _proto = UncontrolledTooltip.prototype;

	  _proto.toggle = function toggle() {
	    this.setState({
	      isOpen: !this.state.isOpen
	    });
	  };

	  _proto.render = function render() {
	    return React__default.createElement(Tooltip, _extends({
	      isOpen: this.state.isOpen,
	      toggle: this.toggle
	    }, omit(this.props, omitKeys$3)));
	  };

	  return UncontrolledTooltip;
	}(React.Component);
	UncontrolledTooltip.propTypes = _objectSpread({
	  defaultOpen: propTypes.bool
	}, Tooltip.propTypes);

	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  }
	}

	var arrayWithoutHoles = _arrayWithoutHoles;

	function _iterableToArray(iter) {
	  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
	}

	var iterableToArray = _iterableToArray;

	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance");
	}

	var nonIterableSpread = _nonIterableSpread;

	function _toConsumableArray(arr) {
	  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
	}

	var toConsumableArray = _toConsumableArray;

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var classCallCheck$1 = _classCallCheck;

	var _typeof_1 = createCommonjsModule(function (module) {
	  function _typeof2(obj) {
	    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	      _typeof2 = function _typeof2(obj) {
	        return typeof obj;
	      };
	    } else {
	      _typeof2 = function _typeof2(obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	      };
	    }

	    return _typeof2(obj);
	  }

	  function _typeof(obj) {
	    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
	      module.exports = _typeof = function _typeof(obj) {
	        return _typeof2(obj);
	      };
	    } else {
	      module.exports = _typeof = function _typeof(obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
	      };
	    }

	    return _typeof(obj);
	  }

	  module.exports = _typeof;
	});

	function _possibleConstructorReturn(self, call) {
	  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
	    return call;
	  }

	  return assertThisInitialized(self);
	}

	var possibleConstructorReturn = _possibleConstructorReturn;

	var getPrototypeOf = createCommonjsModule(function (module) {
	  function _getPrototypeOf(o) {
	    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	      return o.__proto__ || Object.getPrototypeOf(o);
	    };
	    return _getPrototypeOf(o);
	  }

	  module.exports = _getPrototypeOf;
	});

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	var createClass$1 = _createClass;

	var setPrototypeOf = createCommonjsModule(function (module) {
	  function _setPrototypeOf(o, p) {
	    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    };

	    return _setPrototypeOf(o, p);
	  }

	  module.exports = _setPrototypeOf;
	});

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) setPrototypeOf(subClass, superClass);
	}

	var inherits = _inherits;

	var throttle_1 = createCommonjsModule(function (module, exports) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports["default"] = void 0;

	  var throttle = function throttle(fn) {
	    var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
	    var last;
	    var timer;
	    return function () {
	      var now = +new Date();
	      var timePassed = !!last && now < last + threshold;

	      if (timePassed) {
	        clearTimeout(timer);
	        timer = setTimeout(function () {
	          last = now;
	          fn();
	        }, threshold);
	      } else {
	        last = now;
	        fn();
	      }
	    };
	  };

	  var _default = throttle;
	  exports["default"] = _default;
	});
	unwrapExports(throttle_1);

	var Scrollspy_1 = createCommonjsModule(function (module, exports) {

	  Object.defineProperty(exports, "__esModule", {
	    value: true
	  });
	  exports["default"] = void 0;

	  var _extends2 = interopRequireDefault(_extends_1);

	  var _defineProperty2 = interopRequireDefault(defineProperty);

	  var _toConsumableArray2 = interopRequireDefault(toConsumableArray);

	  var _classCallCheck2 = interopRequireDefault(classCallCheck$1);

	  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn);

	  var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf);

	  var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized);

	  var _createClass2 = interopRequireDefault(createClass$1);

	  var _inherits2 = interopRequireDefault(inherits);

	  var _propTypes = interopRequireDefault(propTypes);

	  var _react = interopRequireDefault(React__default);

	  var _classnames = interopRequireDefault(classnames);

	  var _throttle = interopRequireDefault(throttle_1);

	  function isEqualArray(a, b) {
	    return a.length === b.length && a.every(function (item, index) {
	      return item === b[index];
	    });
	  }

	  var Scrollspy =
	  /*#__PURE__*/
	  function (_React$Component) {
	    (0, _inherits2["default"])(Scrollspy, _React$Component);
	    (0, _createClass2["default"])(Scrollspy, null, [{
	      key: "propTypes",
	      get: function get() {
	        return {
	          items: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
	          currentClassName: _propTypes["default"].string.isRequired,
	          scrolledPastClassName: _propTypes["default"].string,
	          style: _propTypes["default"].object,
	          componentTag: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
	          offset: _propTypes["default"].number,
	          rootEl: _propTypes["default"].string,
	          onUpdate: _propTypes["default"].func
	        };
	      }
	    }, {
	      key: "defaultProps",
	      get: function get() {
	        return {
	          items: [],
	          currentClassName: '',
	          style: {},
	          componentTag: 'ul',
	          offset: 0,
	          onUpdate: function onUpdate() {}
	        };
	      }
	    }]);

	    function Scrollspy(props) {
	      var _this;

	      (0, _classCallCheck2["default"])(this, Scrollspy);
	      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Scrollspy).call(this, props));
	      _this.state = {
	        targetItems: [],
	        inViewState: [],
	        isScrolledPast: [] // manually bind as ES6 does not apply this
	        // auto binding as React.createClass does

	      };
	      _this._handleSpy = _this._handleSpy.bind((0, _assertThisInitialized2["default"])(_this));
	      return _this;
	    }

	    (0, _createClass2["default"])(Scrollspy, [{
	      key: "_initSpyTarget",
	      value: function _initSpyTarget(items) {
	        var targetItems = items.map(function (item) {
	          return document.getElementById(item);
	        });
	        return targetItems;
	      } // https://github.com/makotot/react-scrollspy/pull/45

	    }, {
	      key: "_fillArray",
	      value: function _fillArray(array, val) {
	        var newArray = [];

	        for (var i = 0, max = array.length; i < max; i++) {
	          newArray[i] = val;
	        }

	        return newArray;
	      }
	    }, {
	      key: "_isScrolled",
	      value: function _isScrolled() {
	        return this._getScrollDimension().scrollTop > 0;
	      }
	    }, {
	      key: "_getScrollDimension",
	      value: function _getScrollDimension() {
	        var doc = document;
	        var rootEl = this.props.rootEl;
	        var scrollTop = rootEl ? doc.querySelector(rootEl).scrollTop : doc.documentElement.scrollTop || doc.body.parentNode.scrollTop || doc.body.scrollTop;
	        var scrollHeight = rootEl ? doc.querySelector(rootEl).scrollHeight : doc.documentElement.scrollHeight || doc.body.parentNode.scrollHeight || doc.body.scrollHeight;
	        return {
	          scrollTop: scrollTop,
	          scrollHeight: scrollHeight
	        };
	      }
	    }, {
	      key: "_getElemsViewState",
	      value: function _getElemsViewState(targets) {
	        var elemsInView = [];
	        var elemsOutView = [];
	        var viewStatusList = [];
	        var targetItems = targets ? targets : this.state.targetItems;
	        var hasInViewAlready = false;

	        for (var i = 0, max = targetItems.length; i < max; i++) {
	          var currentContent = targetItems[i];
	          var isInView = hasInViewAlready ? false : this._isInView(currentContent);

	          if (isInView) {
	            hasInViewAlready = true;
	            elemsInView.push(currentContent);
	          } else {
	            elemsOutView.push(currentContent);
	          }

	          var isLastItem = i === max - 1;

	          var isScrolled = this._isScrolled(); // https://github.com/makotot/react-scrollspy/pull/26#issue-167413769


	          var isLastShortItemAtBottom = this._isAtBottom() && this._isInView(currentContent) && !isInView && isLastItem && isScrolled;

	          if (isLastShortItemAtBottom) {
	            elemsOutView.pop();
	            elemsOutView.push.apply(elemsOutView, (0, _toConsumableArray2["default"])(elemsInView));
	            elemsInView = [currentContent];
	            viewStatusList = this._fillArray(viewStatusList, false);
	            isInView = true;
	          }

	          viewStatusList.push(isInView);
	        }

	        return {
	          inView: elemsInView,
	          outView: elemsOutView,
	          viewStatusList: viewStatusList,
	          scrolledPast: this.props.scrolledPastClassName && this._getScrolledPast(viewStatusList)
	        };
	      }
	    }, {
	      key: "_isInView",
	      value: function _isInView(el) {
	        if (!el) {
	          return false;
	        }

	        var _this$props = this.props,
	            rootEl = _this$props.rootEl,
	            offset = _this$props.offset;
	        var rootRect;

	        if (rootEl) {
	          rootRect = document.querySelector(rootEl).getBoundingClientRect();
	        }

	        var rect = el.getBoundingClientRect();
	        var winH = rootEl ? rootRect.height : window.innerHeight;

	        var _this$_getScrollDimen = this._getScrollDimension(),
	            scrollTop = _this$_getScrollDimen.scrollTop;

	        var scrollBottom = scrollTop + winH;
	        var elTop = rootEl ? rect.top + scrollTop - rootRect.top + offset : rect.top + scrollTop + offset;
	        var elBottom = elTop + el.offsetHeight;
	        return elTop < scrollBottom && elBottom > scrollTop;
	      }
	    }, {
	      key: "_isAtBottom",
	      value: function _isAtBottom() {
	        var rootEl = this.props.rootEl;

	        var _this$_getScrollDimen2 = this._getScrollDimension(),
	            scrollTop = _this$_getScrollDimen2.scrollTop,
	            scrollHeight = _this$_getScrollDimen2.scrollHeight;

	        var winH = rootEl ? document.querySelector(rootEl).getBoundingClientRect().height : window.innerHeight;
	        var scrolledToBottom = scrollTop + winH >= scrollHeight;
	        return scrolledToBottom;
	      }
	    }, {
	      key: "_getScrolledPast",
	      value: function _getScrolledPast(viewStatusList) {
	        if (!viewStatusList.some(function (item) {
	          return item;
	        })) {
	          return viewStatusList;
	        }

	        var hasFoundInView = false;
	        var scrolledPastItems = viewStatusList.map(function (item) {
	          if (item && !hasFoundInView) {
	            hasFoundInView = true;
	            return false;
	          }

	          return !hasFoundInView;
	        });
	        return scrolledPastItems;
	      }
	    }, {
	      key: "_spy",
	      value: function _spy(targets) {
	        var _this2 = this;

	        var elemensViewState = this._getElemsViewState(targets);

	        var currentStatuses = this.state.inViewState;
	        this.setState({
	          inViewState: elemensViewState.viewStatusList,
	          isScrolledPast: elemensViewState.scrolledPast
	        }, function () {
	          _this2._update(currentStatuses);
	        });
	      }
	    }, {
	      key: "_update",
	      value: function _update(prevStatuses) {
	        if (isEqualArray(this.state.inViewState, prevStatuses)) {
	          return;
	        }

	        this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(true)]);
	      }
	    }, {
	      key: "_handleSpy",
	      value: function _handleSpy() {
	        (0, _throttle["default"])(this._spy(), 100);
	      }
	    }, {
	      key: "_initFromProps",
	      value: function _initFromProps() {
	        var targetItems = this._initSpyTarget(this.props.items);

	        this.setState({
	          targetItems: targetItems
	        });

	        this._spy(targetItems);
	      }
	    }, {
	      key: "offEvent",
	      value: function offEvent() {
	        var el = this.props.rootEl ? document.querySelector(this.props.rootEl) : window;
	        el.removeEventListener('scroll', this._handleSpy);
	      }
	    }, {
	      key: "onEvent",
	      value: function onEvent() {
	        var el = this.props.rootEl ? document.querySelector(this.props.rootEl) : window;
	        el.addEventListener('scroll', this._handleSpy);
	      }
	    }, {
	      key: "componentDidMount",
	      value: function componentDidMount() {
	        this._initFromProps();

	        this.onEvent();
	      }
	    }, {
	      key: "componentWillUnmount",
	      value: function componentWillUnmount() {
	        this.offEvent();
	      }
	    }, {
	      key: "componentWillReceiveProps",
	      value: function componentWillReceiveProps() {
	        this._initFromProps();
	      }
	    }, {
	      key: "render",
	      value: function render() {
	        var _this3 = this;

	        var Tag = this.props.componentTag;
	        var _this$props2 = this.props,
	            children = _this$props2.children,
	            className = _this$props2.className,
	            scrolledPastClassName = _this$props2.scrolledPastClassName,
	            style = _this$props2.style;
	        var counter = 0;

	        var items = _react["default"].Children.map(children, function (child, idx) {
	          var _classNames;

	          if (!child) {
	            return null;
	          }

	          var ChildTag = child.type;
	          var isScrolledPast = scrolledPastClassName && _this3.state.isScrolledPast[idx];
	          var childClass = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(child.props.className), child.props.className), (0, _defineProperty2["default"])(_classNames, "".concat(_this3.props.currentClassName), _this3.state.inViewState[idx]), (0, _defineProperty2["default"])(_classNames, "".concat(_this3.props.scrolledPastClassName), isScrolledPast), _classNames));
	          return _react["default"].createElement(ChildTag, (0, _extends2["default"])({}, child.props, {
	            className: childClass,
	            key: counter++
	          }), child.props.children);
	        });

	        var itemClass = (0, _classnames["default"])((0, _defineProperty2["default"])({}, "".concat(className), className));
	        return _react["default"].createElement(Tag, {
	          className: itemClass,
	          style: style
	        }, items);
	      }
	    }]);
	    return Scrollspy;
	  }(_react["default"].Component);

	  exports["default"] = Scrollspy;
	});
	var Scrollspy = unwrapExports(Scrollspy_1);

	function _defineProperty$2(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	function _extends$2() {
	  _extends$2 = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends$2.apply(this, arguments);
	}

	function _inheritsLoose$2(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}

	function _objectWithoutPropertiesLoose$2(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;

	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }

	  return target;
	}

	function _assertThisInitialized$2(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	var propTypes$15 = {
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.string
	};
	var defaultProps$11 = {
	  tag: 'div'
	};
	function Accordion(props) {
	  var className = props.className,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose$2(props, ["className", "tag"]);

	  var classes = classnames('collapse-div', className);
	  return React__default.createElement(Tag, _extends$2({}, attributes, {
	    className: classes
	  }));
	}
	Accordion.propTypes = propTypes$15;
	Accordion.defaultProps = defaultProps$11;

	var propTypes$16 = {
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.string,
	  active: propTypes.bool,
	  onToggle: propTypes.func
	};
	var defaultProps$12 = {
	  tag: 'button'
	};
	function AccordionHeader(props) {
	  var className = props.className,
	      Tag = props.tag,
	      active = props.active,
	      onToggle = props.onToggle,
	      attributes = _objectWithoutPropertiesLoose$2(props, ["className", "tag", "active", "onToggle"]);

	  var classes = classnames('collapse-header');
	  var toggleClasses = classnames(className, {
	    collapsed: active
	  });
	  return React__default.createElement("div", {
	    className: classes
	  }, React__default.createElement(Tag, _extends$2({
	    "data-toggle": "collapse",
	    "aria-expanded": active ? 'true' : 'false',
	    className: toggleClasses,
	    onClick: onToggle
	  }, attributes)));
	}
	AccordionHeader.propTypes = propTypes$16;
	AccordionHeader.defaultProps = defaultProps$12;

	var _transitionStatusToCl$1;
	var TransitionTimeouts$1 = TransitionTimeouts,
	    TransitionPropTypeKeys$1 = TransitionPropTypeKeys,
	    TransitionStatuses$1 = TransitionStatuses,
	    pick$1 = pick,
	    omit$1 = omit;

	var propTypes$17 = _extends$2({}, Transition.propTypes, {
	  // eslint-disable-line react/forbid-foreign-prop-types
	  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.string,
	  active: propTypes.bool,
	  onToggle: propTypes.func
	});

	var defaultProps$13 = _extends$2({}, Transition.defaultProps, {
	  timeout: TransitionTimeouts$1.Collapse,
	  tag: 'div'
	});

	var transitionStatusToClassHash$1 = (_transitionStatusToCl$1 = {}, _transitionStatusToCl$1[TransitionStatuses$1.ENTERING] = 'collapsing', _transitionStatusToCl$1[TransitionStatuses$1.ENTERED] = 'collapse show', _transitionStatusToCl$1[TransitionStatuses$1.EXITING] = 'collapsing', _transitionStatusToCl$1[TransitionStatuses$1.EXITED] = 'collapse', _transitionStatusToCl$1);

	function getTransitionClass$1(status) {
	  return transitionStatusToClassHash$1[status] || 'collapse';
	}

	function getHeight$1(node) {
	  return node.scrollHeight;
	}

	var AccordionBody =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose$2(AccordionBody, _Component);

	  function AccordionBody() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

	    _defineProperty$2(_assertThisInitialized$2(_this), "state", {
	      height: null
	    });

	    _defineProperty$2(_assertThisInitialized$2(_this), "onEntering", function (node, isAppearing) {
	      _this.setState({
	        height: getHeight$1(node)
	      });

	      _this.props.onEntering(node, isAppearing);
	    });

	    _defineProperty$2(_assertThisInitialized$2(_this), "onEntered", function (node, isAppearing) {
	      _this.setState({
	        height: null
	      });

	      _this.props.onEntered(node, isAppearing);
	    });

	    _defineProperty$2(_assertThisInitialized$2(_this), "onExit", function (node) {
	      _this.setState({
	        height: getHeight$1(node)
	      });

	      _this.props.onExit(node);
	    });

	    _defineProperty$2(_assertThisInitialized$2(_this), "onExiting", function (node) {
	      // getting this variable triggers a reflow
	      var _unused = node.offsetHeight; // eslint-disable-line no-unused-vars

	      _this.setState({
	        height: 0
	      });

	      _this.props.onExiting(node);
	    });

	    _defineProperty$2(_assertThisInitialized$2(_this), "onExited", function (node) {
	      _this.setState({
	        height: null
	      });

	      _this.props.onExited(node);
	    });

	    return _this;
	  }

	  var _proto = AccordionBody.prototype;

	  _proto.render = function render() {
	    var _this$props = this.props,
	        className = _this$props.className,
	        Tag = _this$props.tag,
	        active = _this$props.active,
	        children = _this$props.children,
	        attributes = _objectWithoutPropertiesLoose$2(_this$props, ["className", "tag", "active", "children"]);

	    var height = this.state.height;
	    var transitionProps = pick$1(attributes, TransitionPropTypeKeys$1);
	    var childProps = omit$1(attributes, TransitionPropTypeKeys$1);
	    return React__default.createElement(Transition, _extends$2({}, transitionProps, {
	      "in": active,
	      onEntering: this.onEntering,
	      onEntered: this.onEntered,
	      onExit: this.onExit,
	      onExiting: this.onExiting,
	      onExited: this.onExited
	    }), function (status) {
	      var transitionClass = getTransitionClass$1(status);
	      var classes = classnames(className, transitionClass);
	      var style = height === null ? null : {
	        height: height
	      };
	      return React__default.createElement(Tag, _extends$2({
	        className: classes,
	        style: _extends$2({}, childProps.style, {}, style)
	      }, childProps), React__default.createElement("div", {
	        className: "collapse-body"
	      }, children));
	    });
	  };

	  return AccordionBody;
	}(React.Component);
	AccordionBody.propTypes = propTypes$17;
	AccordionBody.defaultProps = defaultProps$13;

	var propTypes$18 = {
	  color: propTypes.string,
	  pill: propTypes.bool,
	  tag: propTypes.string,
	  children: propTypes.node,
	  cssModule: propTypes.object,
	  className: propTypes.string
	};
	var defaultProps$14 = {
	  color: 'secondary',
	  pill: false,
	  tag: 'span'
	};

	var Badge$1 = function Badge$1(props) {
	  var children = props.children;
	  return React__default.createElement(Badge, props, children);
	};

	Badge$1.propTypes = propTypes$18;
	Badge$1.defaultProps = defaultProps$14;

	var propTypes$19 = _extends$2({}, Button.propTypes, {
	  icon: propTypes.bool
	});

	var defaultProps$15 = _extends$2({}, Button.defaultProps, {
	  icon: false
	});

	var Button$1 = function Button$1(_ref) {
	  var icon = _ref.icon,
	      className = _ref.className,
	      attributes = _objectWithoutPropertiesLoose$2(_ref, ["icon", "className"]);

	  var classes = classnames(className, {
	    'btn-icon': icon
	  });
	  return React__default.createElement(Button, _extends$2({
	    className: classes
	  }, attributes));
	};

	Button$1.propTypes = propTypes$19;
	Button$1.defaultProps = defaultProps$15;

	var propTypes$1a = _extends$2({}, Collapse.propTypes, {
	  // eslint-disable-line react/forbid-foreign-prop-types

	  /** Indica se il componente Collapse è usato all'interno di un componente Header */
	  header: propTypes.bool,

	  /** Indica se il menu HeaderNav sia aperto o meno. Usato unicamente nel caso della HeaderNav, ovvero con navbar e header entrambi true */
	  inOpen: propTypes.bool,

	  /** Funzione chiamata su click di overlay dell'HeaderNav aperto. Usato unicamente nel caso della HeaderNav, ovvero con navbar e header entrambi true */
	  onOverlayClick: propTypes.func
	});

	var Collapse$1 = function Collapse$1(_ref) {
	  var header = _ref.header,
	      className = _ref.className,
	      navbar = _ref.navbar,
	      children = _ref.children,
	      isOpen = _ref.isOpen,
	      onOverlayClick = _ref.onOverlayClick,
	      attributes = _objectWithoutPropertiesLoose$2(_ref, ["header", "className", "navbar", "children", "isOpen", "onOverlayClick"]);

	  if (navbar && header) {
	    var _classes = classnames(className, 'navbar-collapsable', {
	      expanded: isOpen
	    });

	    return React__default.createElement(Collapse, _extends$2({
	      className: _classes,
	      navbar: navbar,
	      style: {
	        display: isOpen ? 'block' : 'none'
	      }
	    }, attributes), React__default.createElement("div", {
	      className: "overlay",
	      style: {
	        display: isOpen ? 'block' : 'none'
	      },
	      onClick: onOverlayClick
	    }), React__default.createElement("div", {
	      className: "close-div sr-only"
	    }, React__default.createElement("button", {
	      className: "btn close-menu",
	      type: "button"
	    }, React__default.createElement("span", {
	      className: "it-close"
	    }), "close")), children);
	  }

	  var classes = classnames(className, {
	    'link-list-wrapper': header
	  });
	  return React__default.createElement(Collapse, _extends$2({
	    className: classes
	  }, attributes, {
	    navbar: navbar,
	    isOpen: isOpen
	  }), children);
	};

	Collapse$1.propTypes = propTypes$1a;
	Collapse$1.defaultProps = Collapse.defaultProps;

	var FormGroup$1 =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose$2(FormGroup$1, _Component);

	  function FormGroup$1() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

	    _defineProperty$2(_assertThisInitialized$2(_this), "state", {
	      active: _this.props.active || false,
	      value: null
	    });

	    _defineProperty$2(_assertThisInitialized$2(_this), "onFocus", function (callback, active) {
	      if (active === void 0) {
	        active = true;
	      }

	      _this.setState({
	        active: active
	      }, function () {
	        if (callback) {
	          callback();
	        }
	      });
	    });

	    _defineProperty$2(_assertThisInitialized$2(_this), "onBlur", function (callback, active) {
	      if (active === void 0) {
	        active = false;
	      }

	      _this.setState({
	        active: active
	      }, function () {
	        if (callback) {
	          callback();
	        }
	      });
	    });

	    _defineProperty$2(_assertThisInitialized$2(_this), "onChange", function (callback, event) {
	      var value;
	      var target;

	      if (event && event.persist) {
	        // SyntheticEvent
	        event.persist();
	        target = {
	          event: event
	        };
	        value = {
	          target: target
	        };
	      } else if (event.label) {
	        // Autocomplete
	        value = event.label;
	      }

	      _this.setState({
	        value: value
	      }, function () {
	        if (callback) {
	          callback(event);
	        }
	      });
	    });

	    return _this;
	  }

	  var _proto = FormGroup$1.prototype;

	  _proto.render = function render() {
	    var _this2 = this;

	    var _this$state = this.state,
	        active = _this$state.active,
	        value = _this$state.value;

	    var _this$props = this.props,
	        children = _this$props.children,
	        className = _this$props.className,
	        col = _this$props.col,
	        rest = _objectWithoutPropertiesLoose$2(_this$props, ["children", "className", "col"]);

	    var hasValue = !!value;
	    var classNames = [className, active ? 'active' : '', col ? 'col' : ''].join(' ');
	    return React__default.createElement(FormGroup, _extends$2({}, rest, {
	      className: classNames
	    }), function () {
	      return React__default.Children.map(children, function (child) {
	        if (child === null) return;
	        var _child$props = child.props,
	            _onFocus = _child$props.onFocus,
	            _onBlur = _child$props.onBlur,
	            _onChange = _child$props.onChange,
	            className = _child$props.className;

	        switch (child.type) {
	          case Input:
	            var isLabelActive = null;
	            return React__default.cloneElement(child, _extends$2({}, child.props, {
	              onFocus: function onFocus() {
	                _this2.onFocus(_onFocus);
	              },
	              onBlur: function onBlur() {
	                _this2.onBlur(_onBlur);
	              },
	              onChange: function onChange(e) {
	                _this2.onChange(_onChange, e);
	              }
	            }, isLabelActive));

	          case Label:
	            var hasChildValue = false;
	            React__default.Children.toArray(children).filter(function (child) {
	              switch (child.type) {
	                case Input:
	                  return true;

	                default:
	                  return false;
	              }
	            }).map(function (child) {
	              if (child.props.value) {
	                hasChildValue = true;
	              }

	              return false;
	            });
	            classNames = hasValue || hasChildValue ? [className, 'active'].join(' ') : className;
	            return React__default.cloneElement(child, _extends$2({}, child.props, {
	              className: classNames
	            }));

	          default:
	            return child;
	        }
	      });
	    }());
	  };

	  return FormGroup$1;
	}(React.Component);

	FormGroup$1.defaultProps = FormGroup.defaultProps;
	FormGroup$1.propTypes = FormGroup.propTypes;

	/**
	 * HeaderContext
	 * {
	 *  type: PropTypes.oneOf([SLIM, CENTER, NAVBAR]).isRequired
	 * }
	 */

	var HeaderContext = React__default.createContext({});
	var SLIM = 'slim';
	var CENTER = 'center';
	var NAVBAR = 'navbar';

	var propTypes$1b = {
	  /** Classi addizionali per il componente Header */
	  className: propTypes.string,
	  // cannot use variables above here or storybook writes the full import stacktrace

	  /** Tipo di componente Header: può essere solamente uno di questi tre tipi */
	  type: propTypes.oneOf(['slim', 'center', 'navbar']).isRequired,

	  /** Quando abilitato render il componente "sticky", ovvero fisso in alto quando si scorre la pagina */
	  sticky: propTypes.bool,

	  /** Riduce la grandezza del componente Header. Funziona solamente con Header "center". */
	  small: propTypes.bool,

	  /** Imposta il tema per il componente Header. Per gli Header di tipo "slim" o "center"
	   *  il valore di default è "dark". Per l'Header di tipo "nav" il tema di default è "light"
	   *  in mobile, mentre "dark" in versione desktop.
	   */
	  theme: propTypes.oneOf(['', 'light', 'dark'])
	};
	var defaultProps$16 = {
	  small: false,
	  sticky: false
	};

	var Header = function Header(_ref) {
	  var _classNames;

	  var className = _ref.className,
	      small = _ref.small,
	      sticky = _ref.sticky,
	      theme = _ref.theme,
	      type = _ref.type,
	      attributes = _objectWithoutPropertiesLoose$2(_ref, ["className", "small", "sticky", "theme", "type"]);

	  // use context here as theme
	  var classes = classnames(className, (_classNames = {}, _classNames["it-header-" + type + "-wrapper"] = type, _classNames['it-header-sticky'] = sticky, _classNames['it-small-header'] = type === CENTER && small, _classNames["theme-" + theme] = type !== NAVBAR && theme, _classNames['theme-dark-mobile'] = type === NAVBAR && theme === 'dark', _classNames['theme-light-desk'] = type === NAVBAR && theme === 'light', _classNames));
	  return React__default.createElement(HeaderContext.Provider, {
	    value: {
	      type: type
	    }
	  }, React__default.createElement("div", _extends$2({
	    className: classes
	  }, attributes)));
	};

	Header.propTypes = propTypes$1b;
	Header.defaultProps = defaultProps$16;

	var propTypes$1c = {
	  /** Aggiunge un ombra per enfatizzare il componente rispetto alla pagina in cui è contenuto */
	  shadow: propTypes.bool,

	  /** Classi addizionali per il componente Headers */
	  className: propTypes.string
	};
	var defaultProps$17 = {
	  shadow: false
	};

	var Headers = function Headers(_ref) {
	  var className = _ref.className,
	      shadow = _ref.shadow,
	      attributes = _objectWithoutPropertiesLoose$2(_ref, ["className", "shadow"]);

	  var classes = classnames('it-header-wrapper', {
	    'it-shadow': shadow
	  }, className);
	  return React__default.createElement("div", _extends$2({
	    className: classes
	  }, attributes));
	};

	Headers.propTypes = propTypes$1c;
	Headers.defaultProps = defaultProps$17;

	var iconSprite = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctZG93biIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTcuOSAxMy4ybC01LjQgNS4zVjNoLTF2MTUuNWwtNS40LTUuMy0uNy43IDYuNiA2LjUgNi42LTYuNXpNMTIgMTl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctZG93bi1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1LjYgMTMuMmwuNy43LTQuMyA0LjMtNC4zLTQuMy43LS43IDMuMSAzLjFWN2gxdjkuMnpNMjIgMTJBMTAgMTAgMCAxMTEyIDJhMTAgMTAgMCAwMTEwIDEwem0tMSAwYTkgOSAwIDEwLTkgOSA5IDkgMCAwMDktOXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1hcnJvdy1kb3duLXRyaWFuZ2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05LjIgMTJoNS42YTEgMSAwIDAxLjcgMS43TDEyIDE3LjNsLTMuNS0zLjZhMSAxIDAgMDEuNy0xLjd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctbGVmdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjEgMTEuNUg1LjVsNS4zLTUuNC0uNy0uN0wzLjYgMTJsNi41IDYuNi43LS43LTUuMy01LjRIMjF6TTUgMTJ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctbGVmdC1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcuNyAxMS41SDE3djFINy44bDMgMy4xLS43LjdMNS44IDEybDQuMy00LjMuNy43ek0yMiAxMkExMCAxMCAwIDExMTIgMmExMCAxMCAwIDAxMTAgMTB6bS0xIDBhOSA5IDAgMTAtOSA5IDkgOSAwIDAwOS05eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWFycm93LWxlZnQtdHJpYW5nbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDkuMnY1LjZhMSAxIDAgMDEtMS43LjdMNi44IDEybDMuNS0zLjVhMSAxIDAgMDExLjcuN3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1hcnJvdy1yaWdodCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTMuOSA1LjRsLS43LjcgNS4zIDUuNEgzdjFoMTUuNWwtNS4zIDUuNC43LjcgNi42LTYuNnpNMTkgMTJ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctcmlnaHQtY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMy45IDcuN2w0LjMgNC4zLTQuMyA0LjMtLjctLjcgMy4xLTMuMUg3di0xaDkuMmwtMy0zLjF6TTIyIDEyQTEwIDEwIDAgMTExMiAyYTEwIDEwIDAgMDExMCAxMHptLTEgMGE5IDkgMCAxMC05IDkgOSA5IDAgMDA5LTl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctcmlnaHQtdHJpYW5nbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDE0LjhWOS4yYTEgMSAwIDAxMS43LS43bDMuNSAzLjUtMy41IDMuNWExIDEgMCAwMS0xLjctLjd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctdXAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE4LjYgMTAuMUwxMiAzLjVsLTYuNiA2LjYuNy43IDUuNC01LjNWMjFoMVY1LjVsNS40IDUuM3pNMTIgNXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1hcnJvdy11cC1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDUuOGw0LjMgNC4zLS43LjctMy4xLTMuMVYxN2gtMVY3LjhsLTMuMSAzLS43LS43ek0yMiAxMkExMCAxMCAwIDExMTIgMmExMCAxMCAwIDAxMTAgMTB6bS0xIDBhOSA5IDAgMTAtOSA5IDkgOSAwIDAwOS05eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWFycm93LXVwLXRyaWFuZ2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNC44IDEySDkuMmExIDEgMCAwMS0uNy0xLjdMMTIgNi44bDMuNSAzLjVhMSAxIDAgMDEtLjcgMS43eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWJlaGFuY2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik03LjgzIDUuNzVhOCA4IDAgMDExLjYuMTUgMy4zOCAzLjM4IDAgMDExLjI0LjUxYy4zNDUuMjMzLjYyLjU1NC44LjkzLjIwMi40NTYuMjk4Ljk1Mi4yOCAxLjQ1YTIuNjggMi42OCAwIDAxLS40MiAxLjU0IDMuMDUgMy4wNSAwIDAxLTEuMjUgMSAyLjkyIDIuOTIgMCAwMTEuNjggMS4xNWMuMzkzLjU5LjU5IDEuMjkuNTYgMmEzLjM5IDMuMzkgMCAwMS0uMzIgMS41OSAzLjA4IDMuMDggMCAwMS0xIDEuMTEgNC4yNyA0LjI3IDAgMDEtMS40LjY0QTYgNiAwIDAxOCAxOEgyVjUuNzVoNS44M3ptLS4zNSA1YTIgMiAwIDAwMS4xOS0uMzVjLjMyOC0uMjcuNS0uNjg3LjQ2LTEuMTFBMS40NyAxLjQ3IDAgMDA5IDguNTRhMS4xNiAxLjE2IDAgMDAtLjQyLS40M0ExLjggMS44IDAgMDA4IDcuOWEzLjI2IDMuMjYgMCAwMC0uNy0uMDZINC43NHYyLjg3bDIuNzQuMDR6bS4xNSA1LjIyYy4yNTIuMDAzLjUwMy0uMDIuNzUtLjA3YTIgMiAwIDAwLjYyLS4zIDEuMzkgMS4zOSAwIDAwLjQ0LS40OSAxLjczIDEuNzMgMCAwMC4xNi0uOEExLjY0IDEuNjQgMCAwMDkuMDkgMTNhMi4zMyAyLjMzIDAgMDAtMS40MS0uNEg0Ljc0djMuMzhsMi44OS0uMDF6bTguNTQtLjA4YTIuMTggMi4xOCAwIDAwMS41OC41NCAyLjI0IDIuMjQgMCAwMDEuMjUtLjM3IDEuNiAxLjYgMCAwMC42NS0uNzloMi4xNWE0LjA2IDQuMDYgMCAwMS0xLjU4IDIuMjkgNC42NCA0LjY0IDAgMDEtMi41OC42OSA1LjIzIDUuMjMgMCAwMS0xLjktLjMzIDQgNCAwIDAxLTIuMzMtMi40NCA1LjI1IDUuMjUgMCAwMS0uMzItMS44OSA1LjEyIDUuMTIgMCAwMS4zMy0xLjg2IDQuMTQgNC4xNCAwIDAxLjkzLTEuNDkgNC40OCA0LjQ4IDAgMDExLjQ0LTEgNC41OSA0LjU5IDAgMDExLjg1LS4zNiA0LjMxIDQuMzEgMCAwMTIgLjQ0QTQgNCAwIDAxMjEgMTAuNWMuMzcuNTA1LjYzNiAxLjA4Ljc4IDEuNjlhNi4xOCA2LjE4IDAgMDEuMTcgMmgtNi4zOGEyLjUgMi41IDAgMDAuNiAxLjd6TTE5IDExLjIyYTEuODMgMS44MyAwIDAwLTEuMzgtLjQ5IDIgMiAwIDAwLTEgLjIgMS44IDEuOCAwIDAwLS42Mi40OSAxLjYyIDEuNjIgMCAwMC0uMzMuNjIgMi44NyAyLjg3IDAgMDAtLjExLjU5aDRhMi40IDIuNCAwIDAwLS41Ni0xLjQxem0tMy45My00LjY1aDQuOTh2MS4yMWgtNC45OFY2LjU3eiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYnVyZ2VyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMiA1djFIMlY1ek0yIDEyLjVoMjB2LTFIMnpNMiAxOWgyMHYtMUgyeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNhbGVuZGFyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMC41IDRIMTdWM2gtMXYxSDhWM0g3djFIMy41QTEuNSAxLjUgMCAwMDIgNS41djEzQTEuNSAxLjUgMCAwMDMuNSAyMGgxN2ExLjUgMS41IDAgMDAxLjUtMS41di0xM0ExLjUgMS41IDAgMDAyMC41IDR6bS41IDE0LjVhLjUuNSAwIDAxLS41LjVoLTE3YS41LjUgMCAwMS0uNS0uNXYtMTNhLjUuNSAwIDAxLjUtLjVIN3YxaDFWNWg4djFoMVY1aDMuNWEuNS41IDAgMDEuNS41ek00IDhoMTZ2MUg0eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNhbWVyYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAuNSAyMGgtMTdBMS41IDEuNSAwIDAxMiAxOC41di0xMEExLjUgMS41IDAgMDEzLjUgN2g0LjNsMS41LTIuM2ExLjUgMS41IDAgMDExLjItLjdoM2ExLjUgMS41IDAgMDExLjIuN0wxNi4yIDdoNC4zQTEuNSAxLjUgMCAwMTIyIDguNXYxMGExLjUgMS41IDAgMDEtMS41IDEuNXpNMy41IDhhLjUuNSAwIDAwLS41LjV2MTBhLjUuNSAwIDAwLjUuNWgxN2EuNS41IDAgMDAuNS0uNXYtMTBhLjUuNSAwIDAwLS41LS41aC00LjhsLTEuOC0yLjgtLjQtLjJoLTNsLS40LjJMOC4zIDh6TTEyIDE4YTUgNSAwIDExNS01IDUgNSAwIDAxLTUgNXptMC05YTQgNCAwIDEwNCA0IDQgNCAwIDAwLTQtNHpNNyA1SDR2MWgzeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNhcmQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwLjUgNWgtMTdBMS41IDEuNSAwIDAwMiA2LjV2MTFBMS41IDEuNSAwIDAwMy41IDE5aDE3YTEuNSAxLjUgMCAwMDEuNS0xLjV2LTExQTEuNSAxLjUgMCAwMDIwLjUgNXpNMyA5aDE4djNIM3ptMTggOC41YS41LjUgMCAwMS0uNS41aC0xN2EuNS41IDAgMDEtLjUtLjVWMTNoMTh6TTMgOFY2LjVhLjUuNSAwIDAxLjUtLjVoMTdhLjUuNSAwIDAxLjUuNVY4em01IDdINHYtMWg0eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNoZWNrIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05LjYgMTYuOUw0IDExLjRsLjgtLjcgNC44IDQuOCA4LjUtOC40LjcuN3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1jaGVjay1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE3LjEgNy45bC43LjctNy44IDcuNi00LjctNC42LjctLjcgNCAzLjl6TTIyIDEyQTEwIDEwIDAgMTExMiAyYTEwIDEwIDAgMDExMCAxMHptLTEgMGE5IDkgMCAxMC05IDkgOSA5IDAgMDA5LTl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY2hldnJvbi1sZWZ0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNC42IDE3LjJMOSAxMS42IDE0LjYgNmwuOC43LTQuOSA0LjkgNC45IDQuOXoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNoZXZyb24tcmlnaHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkuOCAxNy4ybC0uOC0uNyA0LjktNC45TDkgNi43bC44LS43IDUuNiA1LjZ6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1jbGlwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMSAyMmEyLjkgMi45IDAgMDEtMy0zVjZhNCA0IDAgMDE4IDB2MTBoLTFWNmEzIDMgMCAwMC02IDB2MTNhMiAyIDAgMDA0IDBWOGExIDEgMCAwMC0yIDB2OGgtMVY4YTIgMiAwIDAxNCAwdjExYTIuOSAyLjkgMCAwMS0zIDN6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY2xvY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjUgNWgxdjcuNUg3di0xaDQuNXpNMjIgMTJBMTAgMTAgMCAxMTEyIDJhMTAgMTAgMCAwMTEwIDEwem0tMSAwYTkgOSAwIDEwLTkgOSA5IDkgMCAwMDktOXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1jbG9zZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIuNyAxMmwzLjcgMy42LS44LjgtMy42LTMuNy0zLjYgMy43LS44LS44IDMuNy0zLjYtMy43LTMuNi44LS44IDMuNiAzLjcgMy42LTMuNy44Ljh6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY2xvc2UtYmlnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMi43IDEybDYuNyA2LjYtLjguOC02LjYtNi43LTYuNiA2LjctLjgtLjggNi43LTYuNi02LjctNi42LjgtLjggNi42IDYuNyA2LjYtNi43LjguOHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1jbG9zZS1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE2LjMgOC4zTDEyLjYgMTJsMy43IDMuNi0uNy43LTMuNy0zLjYtMy42IDMuNi0uNy0uNyAzLjYtMy42LTMuNi0zLjcuNy0uNyAzLjYgMy43IDMuNy0zLjd6TTIyIDEyQTEwIDEwIDAgMTExMiAyYTEwIDEwIDAgMDExMCAxMHptLTEgMGE5IDkgMCAxMC05IDkgOSA5IDAgMDA5LTl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY29kZS1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE5IDEybC0yLjkgMi45LS43LS44IDIuMS0yLjEtMi4xLTIuMS43LS44ek03LjkgOS4xTDUgMTJsMi45IDIuOS43LS44TDYuNSAxMmwyLjEtMi4xek0yMiAxMkExMCAxMCAwIDExMTIgMmExMCAxMCAwIDAxMTAgMTB6bS0xIDBhOSA5IDAgMTAtOSA5IDkgOSAwIDAwOS05ek05LjYgMTYuNWwxIC4zIDMuNy05LjMtLjktLjN6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY29sbGFwc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE2LjUgMTUuNGwtNC45LTQuOS00LjkgNC45LS43LS44TDExLjYgOWw1LjYgNS42eiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY29tbWVudCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTkgM0g1YTIgMiAwIDAwLTIgMnYxMGEyIDIgMCAwMDIgMmgydjUuNGwxLjctMS43IDMuNy0zLjdIMTlhMiAyIDAgMDAyLTJWNWEyIDIgMCAwMC0yLTJ6bTEgMTJhLjkuOSAwIDAxLTEgMWgtN2wtNCA0di00SDVhLjkuOSAwIDAxLTEtMVY1YS45LjkgMCAwMTEtMWgxNGEuOS45IDAgMDExIDF6TTkgMTBhLjkuOSAwIDAxLTEgMSAuOS45IDAgMDEtMS0xIC45LjkgMCAwMTEtMSAuOS45IDAgMDExIDF6bTQgMGExIDEgMCAwMS0yIDAgMSAxIDAgMDEyIDB6bTQgMGExIDEgMCAwMS0yIDAgMSAxIDAgMDEyIDB6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY29weSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTkuNSA0SDE4di0uNkExLjUgMS41IDAgMDAxNi41IDJoLTExQTEuNSAxLjUgMCAwMDQgMy40djE1LjJBMS41IDEuNSAwIDAwNS41IDIwSDd2LjZBMS41IDEuNSAwIDAwOC41IDIyaDExYTEuNSAxLjUgMCAwMDEuNS0xLjRWNS40QTEuNSAxLjUgMCAwMDE5LjUgNHpNNSAxOC42VjMuNGEuNS41IDAgMDEuNS0uNGgxMWEuNS41IDAgMDEuNS40djE1LjJhLjUuNSAwIDAxLS41LjRoLTExYS41LjUgMCAwMS0uNS0uNHptMTUgMmEuNS41IDAgMDEtLjUuNGgtMTFhLjUuNSAwIDAxLS41LS40VjIwaDguNWExLjUgMS41IDAgMDAxLjUtMS40VjVoMS41YS41LjUgMCAwMS41LjR6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZGVzaWduZXJzLWl0YWxpYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOC42NjMgMjAuNjc1VjcuNjQxSDEyLjN2MTMuMDU3SDguNjYzdi0uMDIzek0yMi45NTIgMTAuNjFoLTMuMzI1djUuMzU3YzAgLjUzNC4wMjQuODgyLjA0OCAxLjExMy4wMjQuMjEuMTIuMzk1LjI4OS41NTcuMTY5LjE2Mi40MzQuMjMyLjc5NS4yMzJsMi4wNzItLjA0Ni4xNjkgMi43ODNjLTEuMjA1LjI1NS0yLjE0NS4zOTQtMi43NzEuMzk0LTEuNjM5IDAtMi43NDctLjM0OC0zLjMyNS0xLjA2Ny0uNjAzLS42OTYtLjg5Mi0xLjk5NC0uODkyLTMuODk2VjRoMy42Mzl2My42MThoMy4zMjV2Mi45OTJoLS4wMjR6bS0xOS43Ni45OTdjLS42MjYgMC0xLjE1Ni0uMjA5LTEuNTY1LS42MjZBMi4xMTMgMi4xMTMgMCAwMTEgOS40NWMwLS42MDQuMjE3LTEuMTE0LjYwMi0xLjUzMS40MS0uNDE4Ljk0LS42MDMgMS41NjctLjYwMy42MjYgMCAxLjE1Ni4yMDggMS41NjYuNjI2LjQxLjQxNy42MDIuOTI3LjYwMiAxLjU1NCAwIC42MjYtLjE5MiAxLjExMy0uNjAyIDEuNTMtLjM4Ni4zNzEtLjg5Mi41OC0xLjU0Mi41OHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWRvd25sb2FkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiAxNC4yTDcuNyA5LjlsLjctLjcgMy4xIDMuMVYzaDF2OS4ybDMuMS0zIC43Ljd6bTctMi4ydjcuNWEuNS41IDAgMDEtLjUuNWgtMTNhLjUuNSAwIDAxLS41LS41VjEySDR2Ny41QTEuNSAxLjUgMCAwMDUuNSAyMWgxM2ExLjUgMS41IDAgMDAxLjUtMS41VjEyeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWVycm9yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMS41IDE0LjJWNS43aDEuMnY4LjV6bS0uMSA0LjFoMS4ydi0xLjhoLTEuMnpNMjIgNy45djguM0wxNi4xIDIySDcuOUwyIDE2LjJWNy45TDcuOSAyaDguMnptLTEgLjRMMTUuNyAzSDguM0wzIDguM3Y3LjVMOC4zIDIxaDcuNGw1LjMtNS4yeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWV4Y2hhbmdlLWNpcmNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMmExMCAxMCAwIDEwMTAgMTBBMTAgMTAgMCAwMDEyIDJ6bTAgMTlhOSA5IDAgMTE5LTkgOSA5IDAgMDEtOSA5em01LjEtOC45bC44LjgtNC4zIDQuM2ExLjUgMS41IDAgMDEtMS4xLjQgMS41IDEuNSAwIDAxLTEuMS0uNEw5IDE0LjdWMTdIOHYtNGg0djFIOS43bDIuNCAyLjVoLjh6bS02LTQuNmwtNC4yIDQuNC0uOC0uOCA0LjMtNC4zYTEuNSAxLjUgMCAwMTEuMS0uNCAxLjUgMS41IDAgMDExLjEuNEwxNSA5LjNWN2gxdjRoLTR2LTFoMi4zbC0yLjQtMi41aC0uOHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1leHBhbmQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjYgMTUuNEw2IDkuOGwuNy0uOCA0LjkgNC45TDE2LjUgOWwuNy44eiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZXh0ZXJuYWwtbGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjEgM3Y2aC0xVjQuN2wtNy42IDcuNy0uOC0uOEwxOS4zIDRIMTVWM3ptLTQgMTYuNWEuNS41IDAgMDEtLjUuNWgtMTJhLjUuNSAwIDAxLS41LS41di0xMmEuNS41IDAgMDEuNS0uNUgxMlY2SDQuNUExLjUgMS41IDAgMDAzIDcuNXYxMkExLjUgMS41IDAgMDA0LjUgMjFoMTJhMS41IDEuNSAwIDAwMS41LTEuNVYxMmgtMXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1mYWNlYm9vayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTEzLjU1IDIydi05LjExaDMuMDdsLjQ2LTMuNTZoLTMuNTNWNy4wNWMwLTEgLjI5LTEuNzMgMS43Ny0xLjczaDEuODdWMi4xNEEyNS4xNCAyNS4xNCAwIDAwMTQuNDUgMmMtMi43MiAwLTQuNTggMS42Ni00LjU4IDQuN3YyLjYySDYuODF2My41N2gzLjA2VjIyaDMuNjh6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1mYWNlYm9vay1zcXVhcmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0yMCAzSDRhMSAxIDAgMDAtMSAxdjE2YTEgMSAwIDAwMSAxaDguNjN2LTYuOTVoLTIuMzd2LTIuNzRoMi4zNHYtMmEzLjI4IDMuMjggMCAwMTMuNS0zLjZjLjcwNSAwIDEuNDEuMDQgMi4xMS4xMnYyLjQ0aC0xLjQ0Yy0xLjEzIDAtMS4zNC41My0xLjM0IDEuMzJ2MS43NGgyLjdsLS4zNSAyLjcyaC0yLjM1djdIMjBhMSAxIDAgMDAxLTFWNGExIDEgMCAwMC0xLTF6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1maWxlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNC43IDJINi41QTEuNSAxLjUgMCAwMDUgMy41djE3QTEuNSAxLjUgMCAwMDYuNSAyMmgxMWExLjUgMS41IDAgMDAxLjUtMS41VjYuM3ptLjMgMS43TDE3LjMgNmgtMS44YS41LjUgMCAwMS0uNS0uNXpNMTcuNSAyMWgtMTFhLjUuNSAwIDAxLS41LS41di0xN2EuNS41IDAgMDEuNS0uNUgxNHYyLjVBMS41IDEuNSAwIDAwMTUuNSA3SDE4djEzLjVhLjUuNSAwIDAxLS41LjV6TTggOWg4djFIOHptMCAyaDh2MUg4em0wIDJoNHYxSDh6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZmlsZXMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1LjcgMkg3LjVBMS41IDEuNSAwIDAwNiAzLjVWNGgtLjVBMS41IDEuNSAwIDAwNCA1LjV2MTVBMS41IDEuNSAwIDAwNS41IDIyaDExYTEuNSAxLjUgMCAwMDEuNS0xLjVWMjBoLjVhMS41IDEuNSAwIDAwMS41LTEuNVY2LjN6bS4zIDEuN0wxOC4zIDZoLTEuOGEuNS41IDAgMDEtLjUtLjV6bTEgMTYuOGEuNS41IDAgMDEtLjUuNWgtMTFhLjUuNSAwIDAxLS41LS41di0xNWEuNS41IDAgMDEuNS0uNUg2djEzLjVBMS41IDEuNSAwIDAwNy41IDIwSDE3em0xLjUtMS41aC0xMWEuNS41IDAgMDEtLjUtLjV2LTE1YS41LjUgMCAwMS41LS41SDE1djIuNUExLjUgMS41IDAgMDAxNi41IDdIMTl2MTEuNWEuNS41IDAgMDEtLjUuNXpNOSA5aDh2MUg5em0wIDJoOHYxSDl6bTAgMmg0djFIOXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1mbGlja3IiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxjaXJjbGUgY3g9IjYuNzMiIGN5PSIxMiIgcj0iNC43MyIvPjxjaXJjbGUgY3g9IjE3LjI3IiBjeT0iMTIiIHI9IjQuNzMiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWZsaWNrci1zcXVhcmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0yMCA0YTMuMjYgMy4yNiAwIDAwLTIuMzgtMUg2LjM4QTMuMjYgMy4yNiAwIDAwNCA0YTMuMjYgMy4yNiAwIDAwLTEgMi4zN3YxMS4yNUEzLjI2IDMuMjYgMCAwMDQgMjBhMy4yNiAzLjI2IDAgMDAyLjM5IDFoMTEuMjRBMy4zOCAzLjM4IDAgMDAyMSAxNy42MlY2LjM3QTMuMjYgMy4yNiAwIDAwMjAgNHptLTkuNTYgOS43N2EyLjUgMi41IDAgMDEtMy41MSAwIDIuNDkgMi40OSAwIDAxMC0zLjUyIDIuNSAyLjUgMCAwMTMuNTEgMCAyLjQ5IDIuNDkgMCAwMTAgMy41MnptNi42MSAwQTIuNDkgMi40OSAwIDAxMTIuODIgMTJhMi40OSAyLjQ5IDAgMDE0LjI0LTEuNzYgMi40OSAyLjQ5IDAgMDEwIDMuNTJsLS4wMS4wMXoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWZvbGRlciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgNmgtOGwtMi0ySDRhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyaDE2YTIgMiAwIDAwMi0yVjhhMiAyIDAgMDAtMi0yem0xIDEyYS45LjkgMCAwMS0xIDFINGEuOS45IDAgMDEtMS0xVjZhLjkuOSAwIDAxMS0xaDUuNmwxLjcgMS43LjMuM0gyMGEuOS45IDAgMDExIDF6TTQgOGgxNnYxSDR6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZ2l0aHViIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48cGF0aCBkPSJNMTIgMmExMCAxMCAwIDAwLTMuMTYgMTkuNDljLjUuMDkuNjgtLjIyLjY4LS40OHYtMS43QzYuNzMgMTkuOTEgNi4xNCAxOCA2LjE0IDE4QTIuNjkgMi42OSAwIDAwNSAxNi41Yy0uOTEtLjYyLjA3LS42MS4wNy0uNjFhMi4xMyAyLjEzIDAgMDExLjUzIDEgMi4xNCAyLjE0IDAgMDAyLjkxLjgzIDIuMTYgMi4xNiAwIDAxLjYzLTEuMzRjLTIuMTQtLjIxLTQuNTItMS4wNy00LjUyLTQuOWEzLjg5IDMuODkgMCAwMTEtMi42OSAzLjU3IDMuNTcgMCAwMS4xLTIuNjRzLjg0LS4yNyAyLjc1IDFhOS42MyA5LjYzIDAgMDE1IDBjMS45MS0xLjI5IDIuNzUtMSAyLjc1LTEgLjM3LjgzNS40MDUgMS43OC4xIDIuNjRhMy44OSAzLjg5IDAgMDExIDIuNjljMCAzLjg0LTIuMzQgNC42OC00LjU3IDQuOTMuNDgyLjQ5LjczIDEuMTY0LjY4IDEuODV2Mi43NWMwIC4zMy4xOC41OC42OS40OEExMCAxMCAwIDAwMTIgMnoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWhlYXJpbmciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIDlhNi44IDYuOCAwIDAxLTMuNSA2bC0yIDEuMWEzLjMgMy4zIDAgMDAtMS41IDIuN0EzLjIgMy4yIDAgMDE5LjggMjJoLS42YTMuNCAzLjQgMCAwMS0zLTIuMWwuOS0uNUEyLjMgMi4zIDAgMDA5LjIgMjFoLjZhMi4xIDIuMSAwIDAwMS42LS43IDIgMiAwIDAwLjYtMS41IDQgNCAwIDAxMi0zLjVsMi0xLjJBNS45IDUuOSAwIDAwMTkgOWE2IDYgMCAwMC02LTYgNiA2IDAgMDAtNC44IDIuNGwtLjgtLjZBNyA3IDAgMDExMyAyYTcgNyAwIDAxNyA3ek03LjUgMTJBNS41IDUuNSAwIDAwMiA2LjV2MWE0LjUgNC41IDAgMDEwIDl2MUE1LjUgNS41IDAgMDA3LjUgMTJ6TTUgMTJhMi45IDIuOSAwIDAwLTMtM3YxYTIgMiAwIDAxMCA0djFhMi45IDIuOSAwIDAwMy0zem01IDBhOCA4IDAgMDAtOC04djFhNyA3IDAgMDEwIDE0djFhOCA4IDAgMDA4LTh6bTUuOS4zYTQuNSA0LjUgMCAwMDEuMi0zLjIgNC41IDQuNSAwIDAwLTEuMi0zLjIgNC41IDQuNSAwIDAwLTMuMi0xLjRBNC44IDQuOCAwIDAwOS41IDZsLS4zLjMuMi4zYTguOCA4LjggMCAwMTEuMyAzdi40aC40YTEuNSAxLjUgMCAwMTAgM3YxYTIuNSAyLjUgMCAwMDIuNS0yLjUgMi42IDIuNiAwIDAwLTItMi41IDguNSA4LjUgMCAwMC0xLjEtMi42IDMuOSAzLjkgMCAwMTIuMi0uOSAzLjUgMy41IDAgMDEyLjQgMSAzLjUgMy41IDAgMDExIDIuNiAzLjUgMy41IDAgMDEtMSAyLjZ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtaGVscCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIuOCAyMmgtMS40di0yLjFoMS40em0tLjEtNC45aC0xLjJhOS43IDkuNyAwIDAxLS4xLTEuNyAyLjcgMi43IDAgMDEuMy0xLjIgNS42IDUuNiAwIDAxLjctMS4zbDIuMy0yLjFhOS42IDkuNiAwIDAwMS44LTIuMSA0LjUgNC41IDAgMDAuNS0yLjMgMyAzIDAgMDAtMS4xLTIuNiA2LjIgNi4yIDAgMDAtMy40LS43IDIyLjkgMjIuOSAwIDAwLTMuNi41bC0xIC4zLS4yLTEuMmguMWExOC4xIDE4LjEgMCAwMTQuNy0uOCA3LjQgNy40IDAgMDE0LjMgMSA0LjIgNC4yIDAgMDExLjQgMy41IDUgNSAwIDAxLS41IDIuNyA4LjYgOC42IDAgMDEtMS45IDIuMiAxOS43IDE5LjcgMCAwMC0xLjggMS42IDYuMiA2LjIgMCAwMC0uOSAxLjIgMi4zIDIuMyAwIDAwLS40IDEuNHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1oZWxwLWNpcmNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMmExMCAxMCAwIDEwMTAgMTBBMTAgMTAgMCAwMDEyIDJ6bTAgMTlhOSA5IDAgMTE5LTkgOSA5IDAgMDEtOSA5em0tMS4yLTQuNUgxMnYxLjhoLTEuMnptNC41LThhNC4yIDQuMiAwIDAxLS4zIDEuOCA1LjQgNS40IDAgMDEtMS4zIDEuNEwxMi4zIDEzYTIuOCAyLjggMCAwMC0uNCAxLjJ2LjZIMTFhMyAzIDAgMDEtLjItMSAyLjEgMi4xIDAgMDEuNS0xLjIgOSA5IDAgMDExLjQtMS40IDYuNCA2LjQgMCAwMDEuMi0xLjMgMi42IDIuNiAwIDAwLjMtMS40IDEuNyAxLjcgMCAwMC0uNi0xLjQgMy41IDMuNSAwIDAwLTItLjRMOS4zIDdoLS41di0uOGExMC4yIDEwLjIgMCAwMTMtLjUgNC45IDQuOSAwIDAxMi43LjYgMi43IDIuNyAwIDAxLjggMi4yeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWhvcm4iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUgOWEzIDMgMCAwMDAgNmguNUw3IDE5LjNBMi41IDIuNSAwIDAwOS4zIDIxaC4yYTEuNCAxLjQgMCAwMDEuMi0uNiAxLjQgMS40IDAgMDAuMi0xLjRsLTEuMy00aDEuOGw4LjYgMy44VjQuN0wxMS40IDl6bTUgMTAuM2EuNy43IDAgMDEtLjEuNWwtLjQuMmgtLjJhMS41IDEuNSAwIDAxLTEuNC0xbC0xLjMtNGgxLjl6TTUgMTRhMiAyIDAgMDEwLTRoNnY0em0xNCAzLjJsLTctM1Y5LjhsNy0zLjV6TTIyIDl2NmgtMVY5eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWluZm8tY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiAyYTEwIDEwIDAgMTAxMCAxMEExMCAxMCAwIDAwMTIgMnptMCAxOWE5IDkgMCAxMTktOSA5IDkgMCAwMS05IDl6bS0uNy0xNWgxLjV2MmgtMS41em0wIDNoMS41djloLTEuNXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1pbnN0YWdyYW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0xMiA0LjYybC0uMDEuMDhIOC4zNWE1LjEyIDUuMTIgMCAwMC0xLjY3LjMxYy0uMzguMTUtLjcyLjM4Mi0xIC42OC0uMjk4LjI4LS41My42Mi0uNjggMWE1LjEyIDUuMTIgMCAwMC0uMyAxLjY4djcuMjhjLjAxLjU3LjExNCAxLjEzNC4zMSAxLjY3LjE1LjM4LjM4Mi43Mi42OCAxIC4yOC4yOTguNjIuNTMgMSAuNjguNTM2LjE5NiAxLjEuMyAxLjY3LjMxLjk1LjA1IDEuMjQuMDUgMy42NC4wNSAyLjQgMCAyLjY0LS4wNSAzLjY0LS4wNWE1LjEyIDUuMTIgMCAwMDEuNjctLjMxQTMuMDggMy4wOCAwIDAwMTkgMTcuMzFhNS4xMiA1LjEyIDAgMDAuMy0xLjY4Yy4wNS0uOTUuMDUtMS4yNC4wNS0zLjY0IDAtMi40LS4wNS0yLjY0LS4wNS0zLjY0YTUuMTIgNS4xMiAwIDAwLS4zMS0xLjY3IDIuNzcgMi43NyAwIDAwLS42OC0xIDIuNzcgMi43NyAwIDAwLTEtLjY4IDUuMTIgNS4xMiAwIDAwLTEuNjctLjM4SDEyek0xMiAzdi4wNWgzLjcxYTYuOSA2LjkgMCAwMTIuMTkuNDIgNC42NCA0LjY0IDAgMDEyLjY4IDIuNjNBNi45IDYuOSAwIDAxMjEgOC4yOWMwIC45Ni4wNSAxLjI3LjA1IDMuNzFTMjEgMTQuNzEgMjEgMTUuNzFhNi45IDYuOSAwIDAxLS40NyAyLjI0IDQuNjQgNC42NCAwIDAxLTIuNjMgMi42MyA2LjkgNi45IDAgMDEtMi4xOS40MmMtLjk2LjA1LTEuMjcuMDUtMy43MS4wNVM5LjI5IDIxIDguMjkgMjFhNi45IDYuOSAwIDAxLTIuMTktLjQ3IDQuNjQgNC42NCAwIDAxLTIuNjMtMi42MyA2LjkgNi45IDAgMDEtLjQyLTIuMTlWMTIgOC4yOWE2LjkgNi45IDAgMDEuNDItMi4xOUE0LjY0IDQuNjQgMCAwMTYuMSAzLjQyIDYuOSA2LjkgMCAwMTguMjkgM0gxMnptMCA0LjM4YTQuNjIgNC42MiAwIDExMCA5LjI0IDQuNjIgNC42MiAwIDAxMC05LjI0ek0xMiAxNWEzIDMgMCAxMDAtNiAzIDMgMCAwMDAgNnptNC44LTYuNzJhMS4wOCAxLjA4IDAgMTEwLTIuMTYgMS4wOCAxLjA4IDAgMDEwIDIuMTZ6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1rZXkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE4IDEwYTIgMiAwIDEwMiAyIDIgMiAwIDAwLTItMnptMCAzYTEgMSAwIDExMS0xIC45LjkgMCAwMS0xIDF6bS0xLTZhNS4xIDUuMSAwIDAwLTQuNiAzSDMuM2wtMiAyIDMgM0g3di0xaC4zbDEgMUgxMXYtMWgxLjRhNS4xIDUuMSAwIDAwNC42IDMgNSA1IDAgMDAwLTEwem0wIDlhNC4xIDQuMSAwIDAxLTMuOC0yLjdWMTNIMTB2MUg4LjdsLTEtMUg2djFINC43bC0yLTIgMS0xaDkuNHYtLjNBNC4xIDQuMSAwIDAxMTcgOGE0IDQgMCAwMTAgOHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1sZXNzLWNpcmNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgM2E5IDkgMCAwMTYuMzYgMTUuMzZBOSA5IDAgMDE1LjY0IDUuNjIgOC45MyA4LjkzIDAgMDExMiAzbTAtMWExMCAxMCAwIDEwNy4wNyAyLjkzQTkuOTMgOS45MyAwIDAwMTIgMnoiLz48cmVjdCB4PSI3IiB5PSIxMS4yNSIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEuNSIgcng9Ii43NSIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTMuNCAxMy40bC0uNy0uN2EyLjkgMi45IDAgMDAuOS0yLjEgMi43IDIuNyAwIDAwLS45LTIuMUw5LjIgNC45YTMuMiAzLjIgMCAwMC00LjMgMCAzLjIgMy4yIDAgMDAwIDQuM0w3LjggMTJsLS43LjctMi45LTIuOGE0LjIgNC4yIDAgMDEwLTUuNyA0LjIgNC4yIDAgMDE1LjcgMGwzLjUgMy42YTMuNiAzLjYgMCAwMTEuMiAyLjggMy42IDMuNiAwIDAxLTEuMiAyLjh6bTYuNCA2LjRhNC4yIDQuMiAwIDAwMC01LjdsLTIuOS0yLjgtLjcuNyAyLjkgMi44YTMuMiAzLjIgMCAwMTAgNC4zIDMuMiAzLjIgMCAwMS00LjMgMGwtMy41LTMuNmEyLjcgMi43IDAgMDEtLjktMi4xIDIuOSAyLjkgMCAwMS45LTIuMWwtLjctLjdhMy42IDMuNiAwIDAwLTEuMiAyLjggMy42IDMuNiAwIDAwMS4yIDIuOGwzLjUgMy42YTMuOCAzLjggMCAwMDIuOCAxLjEgMy45IDMuOSAwIDAwMi45LTEuMXptLTYuNy02LjciLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1saW5rZWRpbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTE2LjUzIDguNjhBMy45NCAzLjk0IDAgMDAxMyAxMC42MlY5SDkuMzd2MTJoMy43M3YtNS45NWMwLTEuNTcuMjktMy4wOSAyLjI0LTMuMDkgMS45NSAwIDEuOTMgMS44IDEuOTMgMy4xOVYyMUgyMXYtNi42YzAtMy4yMy0uNjktNS43Mi00LjQ3LTUuNzJ6TTUuMTYgM2EyLjE3IDIuMTcgMCAxMDIuMTYgMi4xOEEyLjE2IDIuMTYgMCAwMDUuMTYgM3pNMy4yOSA5djEySDdWOUgzLjI5em0xMy4yNC0uM0EzLjk0IDMuOTQgMCAwMDEzIDEwLjYyVjlIOS4zN3YxMmgzLjczdi01Ljk1YzAtMS41Ny4yOS0zLjA5IDIuMjQtMy4wOSAxLjk1IDAgMS45MyAxLjggMS45MyAzLjE5VjIxSDIxdi02LjZjMC0zLjIzLS42OS01LjcyLTQuNDctNS43MnYuMDJ6TTMuMjkgMjFIN1Y5SDMuMjl2MTJ6TTUuMTYgM2EyLjE3IDIuMTcgMCAxMDIuMTYgMi4xOEEyLjE2IDIuMTYgMCAwMDUuMTYgM3oiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWxpbmtlZGluLXNxdWFyZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTE5LjY3IDNINC4zM0ExLjMyIDEuMzIgMCAwMDMgNC4zdjE1LjRBMS4zMiAxLjMyIDAgMDA0LjMzIDIxaDE1LjM0QTEuMzIgMS4zMiAwIDAwMjEgMTkuN1Y0LjNBMS4zMiAxLjMyIDAgMDAxOS42NyAzek04LjM0IDE4LjM0SDUuNjdWOS43NWgyLjY3djguNTl6TTcgOC41N0ExLjU1IDEuNTUgMCAxMTguNTUgNyAxLjU0IDEuNTQgMCAwMTcgOC41N3ptMTEuMzQgOS43N2gtMi42N3YtNC4xOGMwLTEgMC0yLjI4LTEuMzktMi4yOHMtMS42IDEuMDktMS42IDIuMjF2NC4yNUgxMFY5Ljc1aDIuNTZ2MS4xN2EyLjgzIDIuODMgMCAwMTIuNTMtMS4zOWMyLjcgMCAzLjIgMS43OCAzLjIgNC4xbC4wNSA0LjcxeiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbGlzdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCAxMmEuOS45IDAgMDEtMSAxIDEgMSAwIDAxMC0yIC45LjkgMCAwMTEgMXpNMyA0LjVhLjkuOSAwIDAwLTEgMSAuOS45IDAgMDAxIDEgLjkuOSAwIDAwMS0xIC45LjkgMCAwMC0xLTF6bTAgMTNhMSAxIDAgMDAwIDIgMSAxIDAgMDAwLTJ6TTYgNXYxaDE2VjV6bTAgNy41aDE2di0xSDZ6TTYgMTloMTZ2LTFINnoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1sb2NrIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xOC41IDguNUgxN1Y4QTUgNSAwIDAwNyA4di41SDUuNUExLjUgMS41IDAgMDA0IDEwdjguNUExLjUgMS41IDAgMDA1LjUgMjBoMTNhMS41IDEuNSAwIDAwMS41LTEuNVYxMGExLjUgMS41IDAgMDAtMS41LTEuNXpNOCA4YTQgNCAwIDAxOCAwdi41SDh6bTExIDEwLjVhLjUuNSAwIDAxLS41LjVoLTEzYS41LjUgMCAwMS0uNS0uNVYxMGEuNS41IDAgMDEuNS0uNWgxM2EuNS41IDAgMDEuNS41eiIvPjxwYXRoIGQ9Ik0xMiAxMy4yNWExIDEgMCAxMS0xIDEgMSAxIDAgMDExLTFtMC0xYTIgMiAwIDEwMiAyIDIgMiAwIDAwLTItMnoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWxvY2tlZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTYuNSAxMkgxNlY3YTQgNCAwIDAwLTggMHY1aC0uNWExLjEgMS4xIDAgMDAtMS4xIDEuMXY2LjhBMS4xIDEuMSAwIDAwNy41IDIxaDlhMS4xIDEuMSAwIDAwMS4xLTEuMXYtNi44YTEuMSAxLjEgMCAwMC0xLjEtMS4xek05IDdhMyAzIDAgMDE2IDB2NUg5em03LjYgMTIuOWEuMS4xIDAgMDEtLjEuMWgtOWEuMS4xIDAgMDEtLjEtLjF2LTYuOGg5LjJ6TTEzIDE1LjVhLjguOCAwIDAxLS41Ljh2MS41aC0xdi0xLjVhLjguOCAwIDAxLS41LS44IDEgMSAwIDAxMiAweiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LW1haWwiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwLjUgNWgtMTdBMS41IDEuNSAwIDAwMiA2LjV2MTFBMS41IDEuNSAwIDAwMy41IDE5aDE3YTEuNSAxLjUgMCAwMDEuNS0xLjV2LTExQTEuNSAxLjUgMCAwMDIwLjUgNXptLS4zIDFsLTcuMSA3LjJhMS42IDEuNiAwIDAxLTIuMiAwTDMuOCA2ek0zIDE3LjNWNi42TDguMyAxMnptLjcuN0w5IDEyLjdsMS4yIDEuMmEyLjcgMi43IDAgMDAzLjYgMGwxLjItMS4yIDUuMyA1LjN6bTEyLTZMMjEgNi42djEwLjd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbWVkaXVtIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48cGF0aCBkPSJNNSA3LjYzQS43Mi43MiAwIDAwNC44MiA3TDMuMTMgNXYtLjNoNS4yMmw0IDguODQgMy41NC04Ljg0aDVWNWwtMS40MiAxLjRhLjQzLjQzIDAgMDAtLjE2LjR2MTAuMTJhLjQ1LjQ1IDAgMDAuMTYuNDFsMS40IDEuMzd2LjNoLTd2LS4zbDEuNDUtMS40MWMuMTQtLjE0LjE0LS4xOC4xNC0uNFY4LjcxTDExLjM3IDE5aC0uNTVMNi4xMiA4LjcxdjYuODhhLjkzLjkzIDAgMDAuMjYuNzlsMS44OSAyLjI5VjE5SDIuOTF2LS4zbDEuODktMi4zMmEuOTIuOTIgMCAwMC4yLS43OVY3LjYzeiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbWVkaXVtLXNxdWFyZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgM2gxOHYxOEgzVjN6bTQuMyAxMS4zNmEuNjQuNjQgMCAwMS0uMTcuNTRsLTEuMjcgMS41NHYuMmgzLjZ2LS4yTDguMTkgMTQuOWEuNjcuNjcgMCAwMS0uMTktLjU0VjkuNzRsMy4xNiA2LjloLjM3bDIuNzEtNi45djUuNWMwIC4xNSAwIC4xNy0uMDkuMjdsLTEgMXYuMmg0Ljc0di0uMmwtLjg5LS45OGEuMjcuMjcgMCAwMS0uMTEtLjI3di02LjhhLjI4LjI4IDAgMDEuMTEtLjI3bDEtLjkzdi0uMmgtMy4zOUwxMi4yMyAxMyA5LjUyIDcuMDZINnYuMmwxLjE0IDEuMzZBLjUuNSAwIDAxNy4zIDl2NS4zNnoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LW1pbnVzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMCAxMi41SDR2LTFoMTZ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbWludXMtY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik02LjkgMTEuNWgxMHYxaC0xMHpNMjIgMTJBMTAgMTAgMCAxMTEyIDJhMTAgMTAgMCAwMTEwIDEwem0tMSAwYTkgOSAwIDEwLTkgOSA5IDkgMCAwMDktOXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1tb3JlLWFjdGlvbnMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYgMTBhMiAyIDAgMTAyIDIgMiAyIDAgMDAtMi0yem0wIDNhMSAxIDAgMDEwLTIgMSAxIDAgMDEwIDJ6bTYtM2EyIDIgMCAxMDIgMiAyIDIgMCAwMC0yLTJ6bTAgM2ExIDEgMCAxMTEtMSAuOS45IDAgMDEtMSAxem02LTNhMiAyIDAgMTAyIDIgMiAyIDAgMDAtMi0yem0wIDNhMSAxIDAgMTExLTEgLjkuOSAwIDAxLTEgMXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1tb3JlLWl0ZW1zIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiAxOGExIDEgMCAxMS0xIDEgLjkuOSAwIDAxMS0xbTAtMWEyIDIgMCAxMDIgMiAyIDIgMCAwMC0yLTJ6bTAtNmExIDEgMCAxMS0xIDEgLjkuOSAwIDAxMS0xbTAtMWEyIDIgMCAxMDIgMiAyIDIgMCAwMC0yLTJ6bTAtNmEuOS45IDAgMDExIDEgMSAxIDAgMDEtMiAwIC45LjkgMCAwMTEtMW0wLTFhMiAyIDAgMTAyIDIgMiAyIDAgMDAtMi0yeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LW5vdGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE4LjUgNGgtMTNBMS41IDEuNSAwIDAwNCA1LjV2MTNBMS41IDEuNSAwIDAwNS41IDIwaDEwLjJsNC4zLTQuM1Y1LjVBMS41IDEuNSAwIDAwMTguNSA0ek01IDE4LjV2LTEzYS41LjUgMCAwMS41LS41aDEzYS41LjUgMCAwMS41LjVWMTVoLTIuNWExLjUgMS41IDAgMDAtMS41IDEuNVYxOUg1LjVhLjUuNSAwIDAxLS41LS41ek0xOC4zIDE2TDE2IDE4LjN2LTEuOGEuNS41IDAgMDEuNS0uNXpNMTYgOUg4VjhoOHptMCAySDh2LTFoOHptLTIgMXYxSDh2LTF6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtcGEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMgMjFoMTh2MUgzem0wLTFoMTh2LTFIM3pNMjIgOUgybDEwLTd6TTUuMiA4aDEzLjZMMTIgMy4yek02IDE4di04SDV2OHptNCAwdi04SDl2OHptNSAwdi04aC0xdjh6bTQgMHYtOGgtMXY4eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXBhc3N3b3JkLWludmlzaWJsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUgMTJhMy4yIDMuMiAwIDAwLS43LTEuOWwuNC0xLjFhNC4yIDQuMiAwIDAxMS4zIDMgNCA0IDAgMDEtMy45IDRsLjQtMS4xQTIuOSAyLjkgMCAwMDE1IDEyek0zLjEgMTJBOS44IDkuOCAwIDAxMTIgNi41aC40bC40LS45SDEyYTEwLjkgMTAuOSAwIDAwLTkuOCA2TDIgMTJsLjIuNWExMSAxMSAwIDAwNi4xIDUuM2wuMy0uOUE5LjggOS44IDAgMDEzLjEgMTJ6bTE4LjctLjVhMTEgMTEgMCAwMC02LjEtNS4zbC0uMy45YTkuOCA5LjggMCAwMTUuNSA0LjkgOS44IDkuOCAwIDAxLTguOSA1LjVoLS40bC0uNC45aC44YTEwLjkgMTAuOSAwIDAwOS44LTZsLjItLjR6TTExLjUgOS4xbC40LTEuMUE0IDQgMCAwMDggMTJhNC4yIDQuMiAwIDAwMS4zIDNsLjQtMS4xQTMuMiAzLjIgMCAwMTkgMTJhMi45IDIuOSAwIDAxMi41LTIuOXptMy4xLTUuN0w4LjUgMjAuM2wuOS4zIDYuMS0xNi45eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXBhc3N3b3JkLXZpc2libGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIxLjggMTEuNWExMSAxMSAwIDAwLTE5LjYgMEwyIDEybC4yLjVhMTEgMTEgMCAwMDE5LjYgMGwuMi0uNXptLTkuOCA2QTkuOCA5LjggMCAwMTMuMSAxMiA5LjggOS44IDAgMDExMiA2LjVhOS44IDkuOCAwIDAxOC45IDUuNSA5LjggOS44IDAgMDEtOC45IDUuNXpNMTIgOGE0IDQgMCAxMDQgNCA0IDQgMCAwMC00LTR6bTAgN2EzIDMgMCAxMTMtMyAyLjkgMi45IDAgMDEtMyAzeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXBlbmNpbCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAuNSAzLjVhMi45IDIuOSAwIDAwLTIuMS0uOSAzLjEgMy4xIDAgMDAtMi4yLjlMNC42IDE1LjJsLTEgNS4yIDUuMi0xTDIwLjUgNy44YTMgMyAwIDAwMC00LjN6bS01LjcgMi44bC43LS43IDIuOSAyLjktLjcuN3ptLS43LjhsMS4xIDEtOC40IDguNC0xLjEtMS4xek01LjcgMTguM2EuNy43IDAgMDAtLjYtLjNsLjMtMS41IDIuMSAyLjEtMS41LjNhLjcuNyAwIDAwLS4zLS42em0yLjkgMGwtMS4xLTEuMSA4LjQtOC40IDEgMS4xek0xOS44IDcuMWwtLjcuNy0yLjktMi45LjctLjdhMi4yIDIuMiAwIDAxMS41LS42IDIgMiAwIDAxMS40LjYgMi4xIDIuMSAwIDAxMCAyLjl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtcGluIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xOC4xIDE0TDE1IDEwLjNWNC42TDE2LjMgMkg3LjdMOSA0LjZ2NS43TDUuOSAxNGg1LjZ2OGgxdi04ek0xMCA1aDR2NWgtNHptNC43LTJsLS41IDFIOS44bC0uNS0xem0tNSA4aDQuNmwxLjYgMkg4LjF6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtcGx1cyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMTIuNWgtNy41VjIwaC0xdi03LjVINHYtMWg3LjVWNGgxdjcuNUgyMHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1wbHVzLWNpcmNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIuNCAxMS41aDQuNXYxaC00LjVWMTdoLTF2LTQuNUg2Ljl2LTFoNC41VjdoMXptOS42LjVBMTAgMTAgMCAxMTEyIDJhMTAgMTAgMCAwMTEwIDEwem0tMSAwYTkgOSAwIDEwLTkgOSA5IDkgMCAwMDktOXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1wcmVzZW50YXRpb24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQgNXYxMC42QTIuNCAyLjQgMCAwMDYuNCAxOGgzLjFsLTEuMSA0aDFsMS4xLTRoMi43bDEuMiA0aDFsLTEuMi00aDMuNWEyLjMgMi4zIDAgMDAyLjMtMi4zVjV6bTE1IDEwLjdhMS4zIDEuMyAwIDAxLTEuMyAxLjNINi40QTEuNCAxLjQgMCAwMTUgMTUuNlY2aDE0ek0yMSAzdjFIM1Yzem0tOSAxM2E0LjUgNC41IDAgMTAtNC41LTQuNUE0LjUgNC41IDAgMDAxMiAxNnptLS41LTcuOVYxMUg4LjZhMy40IDMuNCAwIDAxMi45LTIuOXptMSAzLjlWOGEzLjUgMy41IDAgMDEtLjUgNyAzLjQgMy40IDAgMDEtMy40LTN6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtcHJpbnQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIxIDkuNUExLjUgMS41IDAgMDAxOS41IDhIMTdWM0g3djVINC41QTEuNSAxLjUgMCAwMDMgOS41VjE2aDJ2M2gydjJoMTB2LTJoMnYtM2gyek04IDRoOHY0SDh6TTYgMTh2LTRoMXY0em0xMCAySDh2LTZoOHY2em0yLTJoLTF2LTRoMXY0em0yLTNoLTF2LTJINXYySDRWOS41YS41LjUgMCAwMS41LS41aDE1YS41LjUgMCAwMS41LjV6TTYgMTFoNHYxSDZ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtc2VhcmNoIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMS45IDIxLjFMMTYgMTUuM2E4LjMgOC4zIDAgMDAyLTUuMyA4IDggMCAxMC04IDggOC4zIDguMyAwIDAwNS4zLTJsNS44IDUuOXpNMTAgMTdhNyA3IDAgMTE3LTcgNyA3IDAgMDEtNyA3eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXNldHRpbmdzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiA3LjVhNC41IDQuNSAwIDEwNC41IDQuNUE0LjUgNC41IDAgMDAxMiA3LjV6bTAgOGEzLjUgMy41IDAgMTEzLjUtMy41IDMuNSAzLjUgMCAwMS0zLjUgMy41em05LjgtMS42QTEyLjMgMTIuMyAwIDAwMjIgMTJhMTIuMyAxMi4zIDAgMDAtLjItMS45bC0yLjEtLjNhOC43IDguNyAwIDAwLS43LTEuN2wxLjMtMS43YTguNyA4LjcgMCAwMC0yLjctMi43TDE1LjkgNWwtMS43LS43LS4zLTIuMUwxMiAybC0xLjkuMi0uMyAyLjEtMS43LjctMS43LTEuM2E4LjcgOC43IDAgMDAtMi43IDIuN0w1IDguMWE4LjcgOC43IDAgMDAtLjcgMS43bC0yLjEuM0ExMi4zIDEyLjMgMCAwMDIgMTJhMTIuMyAxMi4zIDAgMDAuMiAxLjlsMi4xLjNhOC43IDguNyAwIDAwLjcgMS43bC0xLjMgMS43YTguNyA4LjcgMCAwMDIuNyAyLjdMOC4xIDE5bDEuNy43LjMgMi4xIDEuOS4yIDEuOS0uMi4zLTIuMSAxLjctLjcgMS43IDEuM2E4LjcgOC43IDAgMDAyLjctMi43TDE5IDE1LjlhOC43IDguNyAwIDAwLjctMS43em0tMi45LS43bC0uMi43YTMuOSAzLjkgMCAwMS0uNiAxLjVsLS4zLjYuNC41LjggMS4xYTkuMyA5LjMgMCAwMS0xLjQgMS40bC0xLjEtLjgtLjUtLjQtLjYuM2EzLjkgMy45IDAgMDEtMS41LjZsLS43LjJ2LjdsLS4yIDEuM2gtMmwtLjItMS4zdi0uN2wtLjctLjJhMy45IDMuOSAwIDAxLTEuNS0uNmwtLjYtLjMtLjUuNC0xLjEuOEE5LjMgOS4zIDAgMDE1IDE3LjZsLjgtMS4xLjQtLjUtLjMtLjZhMy45IDMuOSAwIDAxLS42LTEuNWwtLjItLjdoLS43TDMuMSAxM2EzLjQgMy40IDAgMDEtLjEtMSAzLjQgMy40IDAgMDEuMS0xbDEuMy0uMmguN2wuMi0uN2EzLjkgMy45IDAgMDEuNi0xLjVsLjMtLjYtLjQtLjVMNSA2LjQgNi40IDVsMS4xLjguNS40LjYtLjNhMy45IDMuOSAwIDAxMS41LS42bC43LS4ydi0uN2wuMi0xLjNoMmwuMiAxLjN2LjdsLjcuMmEzLjkgMy45IDAgMDExLjUuNmwuNi4zLjUtLjQgMS4xLS44QTkuMyA5LjMgMCAwMTE5IDYuNGwtLjggMS4xLS40LjUuMy42YTMuOSAzLjkgMCAwMS42IDEuNWwuMi43aC43bDEuMy4yYTMuNCAzLjQgMCAwMS4xIDEgMy40IDMuNCAwIDAxLS4xIDFsLTEuMy4yeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXNoYXJlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNy41IDE1YTIuNSAyLjUgMCAwMC0yIDFsLTcuNi0zLjRBMS4zIDEuMyAwIDAwOCAxMmExLjMgMS4zIDAgMDAtLjEtLjZMMTUuNSA4YTIuNSAyLjUgMCAxMC0uNS0xLjUgMS4zIDEuMyAwIDAwLjEuNmwtNy42IDMuNGEyLjUgMi41IDAgMTAwIDNsNy42IDMuNGExLjMgMS4zIDAgMDAtLjEuNiAyLjUgMi41IDAgMTAyLjUtMi41em0wLTEwQTEuNSAxLjUgMCAwMTE5IDYuNWExLjUgMS41IDAgMDEtMyAwQTEuNSAxLjUgMCAwMTE3LjUgNXptLTEyIDguNWExLjUgMS41IDAgMDEwLTMgMS41IDEuNSAwIDAxMCAzem0xMiA1LjVhMS41IDEuNSAwIDExMS41LTEuNSAxLjUgMS41IDAgMDEtMS41IDEuNXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1zdGFyLWZ1bGwiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDEuN0w5LjUgOS4ySDEuNkw4IDEzLjlsLTIuNCA3LjYgNi40LTQuNyA2LjQgNC43LTIuNC03LjYgNi40LTQuN2gtNy45TDEyIDEuN3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1zdGFyLW91dGxpbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDQuOWwxLjUgNC42LjIuN2g1LjdsLTQgMi45LS42LjQuMi43IDEuNSA0LjctMy45LTIuOS0uNi0uNC0uNi40LTMuOSAyLjlMOSAxNC4ybC4yLS43LS42LS40LTQtMi45aDUuN2wuMi0uN0wxMiA0LjltMC0zLjJMOS41IDkuMkgxLjZMOCAxMy45bC0yLjQgNy42IDYuNC00LjcgNi40IDQuNy0yLjQtNy42IDYuNC00LjdoLTcuOUwxMiAxLjd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtdGVhbS1kaWdpdGFsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjMuNjQ4IDI0SC4zNTJBLjM1My4zNTMgMCAwMTAgMjMuNjQ4Vi4zNTJDMCAuMTU4LjE1OCAwIC4zNTIgMGgyMy4yOTZjLjE5NCAwIC4zNTIuMTU4LjM1Mi4zNTJ2MjMuMjk2YS4zNTMuMzUzIDAgMDEtLjM1Mi4zNTJ6TTUuODE0IDExLjc5MmExLjU5NiAxLjU5NiAwIDEwMC0zLjE5MiAxLjU5NiAxLjU5NiAwIDAwMCAzLjE5MnpNMTAgMTguOTk0VjE5aDQuNDE4QzE5LjEzIDE5IDIwIDE2LjY4NSAyMCAxMi4yNTMgMjAgNy45MyAxOC45OTUgNiAxNC40MTggNkgxMHYxMi45OTR6bTQuNDE4LTEwLjcwMmMyLjU4NiAwIDIuODM4IDEuMTEgMi44MzggMy45NTUgMCAyLjg5LS4yNTIgNC40NTUtMi44MzggNC40NTVoLTEuNzU2di04LjQxaDEuNzU2eiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtdGVsZXBob25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01IDNoLjE4TTIwIDExLjU2QTcuNTkgNy41OSAwIDAwMTIuNDggNGgtLjA2YS40OS40OSAwIDAwLS40OS40OC41LjUgMCAwMC40OS41MUE2LjYxIDYuNjEgMCAwMTE5IDExLjYyYS41MS41MSAwIDAwLjU0LjQ2LjQ5LjQ5IDAgMDAuNDUtLjQ2cy4wMS0uMDQuMDEtLjA2eiIvPjxwYXRoIGQ9Ik0xNi45MyAxMS42OGE0LjUgNC41IDAgMDAtNC40OC00LjQ4LjUxLjUxIDAgMDAwIDEgMy41IDMuNSAwIDAxMy40OSAzLjQ5LjUuNSAwIDAwLjUuNS41MS41MSAwIDAwLjUtLjUxek0xNS42OCAyMS4xOWExMy4zMiAxMy4zMiAwIDAxLTEyLjgtMTMuMS45Mi45MiAwIDAxLjYyLS44OGMxLjc0LS41NiA0LTEgNC43LjA2YTcuMzkgNy4zOSAwIDAxLjg1IDIuOTF2LjIxYTEuNDggMS40OCAwIDAxLS43IDEuNjguODEuODEgMCAwMC0uNDkuNzEgMTIuNTUgMTIuNTUgMCAwMDMuMzggMy41MS44OC44OCAwIDAwLjQ4LS41NmMuMDktLjUzLjU4LTEgMS43LS44NWguMjFhNyA3IDAgMDEyLjg1Ljg3YzEgLjcyLjYyIDMgLjA5IDQuNzJhMSAxIDAgMDEtLjg5Ljcyek02LjU1IDcuNTJhOS41IDkuNSAwIDAwLTIuNzguNTUgMTIuNDEgMTIuNDEgMCAwMDExLjkxIDEyLjIyYy43My0yLjI2LjY2LTMuNTQuMzEtMy43OGE2LjY2IDYuNjYgMCAwMC0yLjQ2LS43MmgtLjIyYy0uMzIgMC0uNjUgMC0uNjguMTJhMS45IDEuOSAwIDAxLTEuMjcgMS4zNGwtLjIxLjA3LS4xNS0uMTVhMTMuNDQgMTMuNDQgMCAwMS0zLjktNEw3IDEzYTEuNjggMS42OCAwIDAxMS0xLjdjLjEyLS4wNy4zMy0uMTguMjUtLjc1di0uMjJhNi44NCA2Ljg0IDAgMDAtLjctMi41NGMtLjItLjE4LS41NS0uMjctMS0uMjd6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC10b29sIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik03LjcgNWEzLjEgMy4xIDAgMDExLjcuNSAzLjEgMy4xIDAgMDExLjYgMyAzIDMgMCAwMC44IDIuNGw2LjMgNi4zYTEgMSAwIDAxLjIgMS4zIDEgMSAwIDAxLS44LjUuOS45IDAgMDEtLjctLjNsLTYuNC02LjRhMyAzIDAgMDAtMi4xLS44aC0uNmEyLjggMi44IDAgMDEtMi4yLTFoMi43VjYuNEg1LjFhMi43IDIuNyAwIDAxMS4xLTFBMi44IDIuOCAwIDAxNy43IDVtMC0xYTQuNiA0LjYgMCAwMC0yIC41IDQuMSA0LjEgMCAwMC0yLjEgMi45aDMuNnYyLjFIMy43YTUuNCA1LjQgMCAwMDEgMS44IDQuNCA0LjQgMCAwMDMgMS4yaC42YTIuNCAyLjQgMCAwMTEuNC41bDYuNCA2LjRhMiAyIDAgMDAxLjQuNiAxLjkgMS45IDAgMDAxLjYtLjkgMiAyIDAgMDAtLjMtMi42bC02LjMtNi4zYTEuOCAxLjggMCAwMS0uNS0xLjYgNC40IDQuNCAwIDAwLTItNEE0LjYgNC42IDAgMDA3LjcgNHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC10d2l0dGVyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48cGF0aCBkPSJNOC4wOCAyMGExMC45MyAxMC45MyAwIDAwMTEtMTF2LS41YTggOCAwIDAwMS45Mi0yIDcuODUgNy44NSAwIDAxLTIuMjIuNjFBMy44OSAzLjg5IDAgMDAyMC40OCA1YTggOCAwIDAxLTIuNDguOTEgMy44NyAzLjg3IDAgMDAtNi41OSAzLjUyIDExIDExIDAgMDEtOC00IDMuODUgMy44NSAwIDAwMS4xOSA1LjE2IDMuNzYgMy43NiAwIDAxLTEuNzUtLjQ4QTMuODcgMy44NyAwIDAwNiAxMy45MWEzLjczIDMuNzMgMCAwMS0xIC4xNCA0LjMgNC4zIDAgMDEtLjczLS4wNSAzLjg3IDMuODcgMCAwMDMuNjEgMi42OCA3LjczIDcuNzMgMCAwMS00LjggMS42NiA3IDcgMCAwMS0uOTItLjA2QTEwLjkgMTAuOSAwIDAwOC4wOCAyMCIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtdHdpdHRlci1zcXVhcmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0xOS41IDIyaC0xNUEyLjUgMi41IDAgMDEyIDE5LjV2LTE1QTIuNSAyLjUgMCAwMTQuNSAyaDE1QTIuNSAyLjUgMCAwMTIyIDQuNXYxNWEyLjUgMi41IDAgMDEtMi41IDIuNXptLTkuODItNC45MkE3LjI0IDcuMjQgMCAwMDE3IDkuNzl2LS4zM2E1LjIyIDUuMjIgMCAwMDEuMjgtMS4zMyA1LjIyIDUuMjIgMCAwMS0xLjQ4LjQgMi41NiAyLjU2IDAgMDAxLjE0LTEuNDIgNC45MyA0LjkzIDAgMDEtMS42NC42MiAyLjUzIDIuNTMgMCAwMC0xLjg2LS44MSAyLjU3IDIuNTcgMCAwMC0yLjU3IDIuNTdjLjAwMy4xOTUuMDI2LjM5LjA3LjU4YTcuMjYgNy4yNiAwIDAxLTUuMzItMi42OCAyLjU5IDIuNTkgMCAwMC44IDMuNDMgMi43OCAyLjc4IDAgMDEtMS4xNi0uMzIgMi41NyAyLjU3IDAgMDAyLjA1IDIuNTIgMi40NiAyLjQ2IDAgMDEtMS4xNS4wNCAyLjU1IDIuNTUgMCAwMDIuMzkgMS43OEE1LjEzIDUuMTMgMCAwMTYuMzcgMTZhNi4wOCA2LjA4IDAgMDEtLjYxIDAgNy4yMyA3LjIzIDAgMDAzLjkyIDEuMTR2LS4wNnoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXVubG9ja2VkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNi41IDEySDE2VjZhNCA0IDAgMDAtOCAwdjNoMVY2YTMgMyAwIDAxNiAwdjZINy41YTEuMSAxLjEgMCAwMC0xLjEgMS4xdjYuOEExLjEgMS4xIDAgMDA3LjUgMjFoOWExLjEgMS4xIDAgMDAxLjEtMS4xdi02LjhhMS4xIDEuMSAwIDAwLTEuMS0xLjF6bS4xIDcuOWEuMS4xIDAgMDEtLjEuMWgtOWEuMS4xIDAgMDEtLjEtLjF2LTYuOGg5LjJ6TTEzIDE1LjVhLjguOCAwIDAxLS41Ljh2MS41aC0xdi0xLjVhLjguOCAwIDAxLS41LS44IDEgMSAwIDAxMiAweiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXVwbG9hZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOC40IDcuM2wtLjctLjdMMTIgMi4zbDQuMyA0LjMtLjcuNy0zLjEtMy4xdjkuM2gtMVY0LjJ6TTE5IDEydjcuNWEuNS41IDAgMDEtLjUuNWgtMTNhLjUuNSAwIDAxLS41LS41VjEySDR2Ny41QTEuNSAxLjUgMCAwMDUuNSAyMWgxM2ExLjUgMS41IDAgMDAxLjUtMS41VjEyeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXVzZXIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDEzYTQgNCAwIDAwNC00VjZhNCA0IDAgMDAtOCAwdjNhNCA0IDAgMDA0IDR6TTkgNmEzIDMgMCAwMTYgMHYzYTMgMyAwIDAxLTYgMHptMTEgMTZoLTFhNyA3IDAgMDAtMTQgMEg0YTggOCAwIDAxMTYgMHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC12aWRlbyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTcuNSA3LjNWNkExLjUgMS41IDAgMDAxNiA0LjVINS41QTEuNSAxLjUgMCAwMDQgNnY4YTEuNSAxLjUgMCAwMDEuNSAxLjVoMy40TDcuNCAyMWgxbDEuNi01LjVoMS44bDEuNiA1LjVoMWwtMS42LTUuNUgxNmExLjUgMS41IDAgMDAxLjUtMS41di0xLjNsNCAxLjVWNS44em0zIDUuNWwtNC0xLjVWMTRhLjUuNSAwIDAxLS41LjVINS41QS41LjUgMCAwMTUgMTRWNmEuNS41IDAgMDEuNS0uNUgxNmEuNS41IDAgMDEuNS41djIuN2w0LTEuNXpNMiA4aDF2NEgyeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXdhcm5pbmciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjUgMTdoLTFWMmgxem0wIDNoLTF2MmgxeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXdhcm5pbmctY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiAyYTEwIDEwIDAgMTAxMCAxMEExMCAxMCAwIDAwMTIgMnptMCAxOWE5IDkgMCAxMTktOSA5IDkgMCAwMS05IDl6bS0uNS02LjhWNS43aDEuMnY4LjV6bS0uMSAyLjNoMS4ydjEuOGgtMS4yeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXdoYXRzYXBwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48cGF0aCBkPSJNMTkuMDkgNC42M2ExMCAxMCAwIDAwLTE1LjY4IDEyTDIgMjEuOGw1LjI4LTEuMzhBMTAgMTAgMCAwMDEyIDIxLjYzYTEwIDEwIDAgMDA3LjA1LTE3aC4wNHpNMTIgMjBhOC4xOCA4LjE4IDAgMDEtNC4yMS0xLjE2bC0uMzEtLjE4LTMuMTMuODMuODQtMy4wNi0uMTktLjM2QTguMjggOC4yOCAwIDExMTIgMjB6bTQuNTQtNi4yYy0uMjUtLjEzLTEuNDctLjczLTEuNy0uODEtLjIzLS4wOC0uMzktLjEzLS41Ni4xMi0uMjQ2LjM0Ny0uNTEuNjgtLjc5IDEtLjE0LjE2LS4yOS4xOC0uNTQuMDZhNi45MiA2LjkyIDAgMDEtMi0xLjIzIDcuMjcgNy4yNyAwIDAxLTEuMzgtMS43M2MtLjE1LS4yNSAwLS4zOC4xMS0uNTFzLjI1LS4yOS4zNy0uNDNhMS41MSAxLjUxIDAgMDAuMjUtLjQyLjQ2LjQ2IDAgMDAwLS40M2MtLjA0LS4yLS41NC0xLjQyLS43NS0xLjkyLS4yMS0uNS0uNC0uNDItLjU2LS40M2gtLjQ3YTEgMSAwIDAwLS42Ny4zMUEyLjgxIDIuODEgMCAwMDcgOS40NSA0LjczIDQuNzMgMCAwMDggMTJhMTEgMTEgMCAwMDQuMjUgMy43NmMuNDY0LjIuOTM4LjM3OCAxLjQyLjUzYTMuMjggMy4yOCAwIDAwMS41Ni4wOSAyLjU0IDIuNTQgMCAwMDEuNjgtMS4xOCAyLjA5IDIuMDkgMCAwMC4xNS0xLjJjLS4wNi0uMDctLjIzLS4xMy0uNDgtLjI1bC0uMDQuMDV6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC13aGF0c2FwcC1zcXVhcmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0xNiA4LjA3YTUuMzQgNS4zNCAwIDAwLTkuMTEgMy43NyA1LjI4IDUuMjggMCAwMC44MiAyLjg0bC4xMi4yLS41MyAyIDItLjUzLjIuMTFjLjgyLjQ5IDEuNzU2Ljc1IDIuNzEuNzVBNS4zNCA1LjM0IDAgMDAxNiA4LjA3em0tLjgzIDUuODNhMS42NiAxLjY2IDAgMDEtMS4wOC43NiAyLjIzIDIuMjMgMCAwMS0xLS4wNmMtLjIzLS4wOC0uNTMtLjE4LS45MS0uMzRhNy4xNiA3LjE2IDAgMDEtMi43OC0yLjQyIDMuMTMgMy4xMyAwIDAxLS42Ni0xLjY2IDEuODMgMS44MyAwIDAxLjU2LTEuMzQuNTkuNTkgMCAwMS40My0uMkgxMGMuMSAwIC4yMyAwIC4zNi4yNy4xMy4yNy40NSAxLjExLjQ5IDEuMTlhLjMuMyAwIDAxMCAuMjggMS4yIDEuMiAwIDAxLS4xNi4yN2MtLjA4LjEtLjE3LjIxLS4yNC4yOC0uMDcuMDctLjE3LjE3LS4wNy4zMy4yMzkuNDEzLjU0Ljc4Ny44OSAxLjExLjM4LjM0LjgxNi42MTIgMS4yOS44LjE2LjA4LjI1LjA2LjM0IDAgLjA5LS4wNi40LS40Ny41MS0uNjMuMTEtLjE2LjIxLS4xNC4zNi0uMDguMTUuMDYuOTQuNDQgMS4xLjUyLjE2LjA4LjI2LjEyLjMuMTlhMS4zNiAxLjM2IDAgMDEtLjAzLjczaC4wM3oiLz48cGF0aCBkPSJNMjEgNy4wOWE4LjI2IDguMjYgMCAwMC0uMDktMS4xNSAzLjQ5IDMuNDkgMCAwMC0xLjg1LTIuNTEgMy44OSAzLjg5IDAgMDAtMS0uMzJBOC4zNiA4LjM2IDAgMDAxNi45MSAzSDcuMDlhOC4yNiA4LjI2IDAgMDAtMS4xNS4wOUEzLjQ5IDMuNDkgMCAwMDMuNDMgNWEzLjg5IDMuODkgMCAwMC0uMzIgMUE4LjM2IDguMzYgMCAwMDMgNy4wOXY5LjgyYy4wMDMuMzg1LjAzMy43Ny4wOSAxLjE1QTMuNDkgMy40OSAwIDAwNSAyMC41N2EzLjg5IDMuODkgMCAwMDEgLjMyYy4zODQuMDYuNzcxLjA5NCAxLjE2LjFoOS44MmE4LjI2IDguMjYgMCAwMDEuMTUtLjA5IDMuNDkgMy40OSAwIDAwMi41MS0xLjg1IDMuODkgMy44OSAwIDAwLjMyLTEgOC4zNiA4LjM2IDAgMDAuMS0xLjE2VjcuNTdjLS4wNi0uMS0uMDYtLjMxLS4wNi0uNDh6bS04LjggMTEuMTdhNi4zOSA2LjM5IDAgMDEtMy4wNi0uNzhsLTMuNDEuODkuOTItMy4zMmE2LjMzIDYuMzMgMCAwMS0uODYtMy4yMSA2LjQxIDYuNDEgMCAwMTExLTQuNTMgNi4zMyA2LjMzIDAgMDExLjg4IDQuNTQgNi40MiA2LjQyIDAgMDEtNi40NyA2LjQxeiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQteW91dHViZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTIxLjU2IDcuMmEyLjUgMi41IDAgMDAtMS43Ni0xLjc3QzE4LjI0IDUgMTIgNSAxMiA1cy02LjI0IDAtNy44LjQyQTIuNSAyLjUgMCAwMDIuNDQgNy4yIDI1LjcyIDI1LjcyIDAgMDAyIDEyYy0uMDEgMS42MS4xMyAzLjIxNy40MiA0LjhhMi41IDIuNSAwIDAwMS43OCAxLjc3QzUuNzYgMTkgMTIgMTkgMTIgMTlzNi4yNCAwIDcuOC0uNDJhMi41IDIuNSAwIDAwMS43Ni0xLjc3QTI1LjcyIDI1LjcyIDAgMDAyMiAxMmEyNS43MiAyNS43MiAwIDAwLS40NC00Ljh6TTEwIDE1VjlsNS4xOSAzTDEwIDE1eiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtem9vbS1pbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAuNCA5LjVoMy4zdjFoLTMuM3YzLjJoLTF2LTMuMkg2LjJ2LTFoMy4yVjYuMmgxem0xMC43IDEyLjRMMTUuMyAxNmE4LjMgOC4zIDAgMDEtNS4zIDIgOCA4IDAgMTE4LTggOC4zIDguMyAwIDAxLTIgNS4zbDUuOSA1Ljh6TTE3IDEwYTcgNyAwIDEwLTcgNyA3IDcgMCAwMDctN3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC16b29tLW91dCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNi4yIDkuNWg3LjV2MUg2LjJ6bTE0LjkgMTIuNEwxNS4zIDE2YTguMyA4LjMgMCAwMS01LjMgMiA4IDggMCAxMTgtOCA4LjMgOC4zIDAgMDEtMiA1LjNsNS45IDUuOHpNMTcgMTBhNyA3IDAgMTAtNyA3IDcgNyAwIDAwNy03eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48L2RlZnM+PC9zdmc+';

	var propTypes$1d = {
	  className: propTypes.string,
	  color: propTypes.string,
	  size: propTypes.string,
	  icon: propTypes.string,
	  padding: propTypes.bool
	};
	var defaultProps$18 = {
	  color: '',
	  size: '',
	  icon: '',
	  padding: false
	};

	var Icon = function Icon(_ref) {
	  var _classNames;

	  var color = _ref.color,
	      size = _ref.size,
	      icon = _ref.icon,
	      className = _ref.className,
	      padding = _ref.padding,
	      attributes = _objectWithoutPropertiesLoose$2(_ref, ["color", "size", "icon", "className", "padding"]);

	  var classes = classnames('icon', className, (_classNames = {}, _classNames["icon-" + color] = color, _classNames["icon-" + size] = size, _classNames['icon-padded'] = padding, _classNames), size);
	  return React__default.createElement("svg", _extends$2({
	    className: classes
	  }, attributes), React__default.createElement("use", {
	    xlinkHref: iconSprite + "#" + icon
	  }));
	};

	Icon.propTypes = propTypes$1d;
	Icon.defaultProps = defaultProps$18;

	var propTypes$1e = {
	  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),

	  /** Classi aggiuntive da usare per il componente HeaderBrand */
	  className: propTypes.string,

	  /** Da usare per la sovrascrittura di classi predefinite */
	  cssModule: propTypes.object,

	  /** Da usare con il componente Header Nav in versione "responsive" */
	  responsive: propTypes.bool,

	  /** Da utilizzare per specificare URL risorsa esterna. */
	  href: propTypes.string,

	  /** Icona da utilizzare nel componente. Utilizzata unicamente quando l'Header è di tipo Center.  */
	  iconName: propTypes.string,

	  /** Elementi React da renderizzare al proprio interno. */
	  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node])
	};
	var defaultProps$19 = {
	  tag: 'a',
	  responsive: false
	};

	var HeaderBrand =
	/*#__PURE__*/
	function (_PureComponent) {
	  _inheritsLoose$2(HeaderBrand, _PureComponent);

	  function HeaderBrand() {
	    return _PureComponent.apply(this, arguments) || this;
	  }

	  var _proto = HeaderBrand.prototype;

	  _proto.addChildClasses = function addChildClasses(child, i) {
	    // convention here: first item is the main title, while others subtext
	    var className = classnames(child.props.className, 'no_toc', {
	      'd-none d-md-block': i
	    } // subtext is anything but first element
	    );
	    var props = {
	      className: className
	    };
	    return React__default.cloneElement(child, props);
	  };

	  _proto.render = function render() {
	    var _this = this;

	    var _this$props = this.props,
	        className = _this$props.className,
	        href = _this$props.href,
	        iconName = _this$props.iconName,
	        children = _this$props.children,
	        responsive = _this$props.responsive,
	        attributes = _objectWithoutPropertiesLoose$2(_this$props, ["className", "href", "iconName", "children", "responsive"]);

	    var type = this.context.type;

	    if (type !== CENTER) {
	      var classes = classnames('d-lg-block', className, {
	        'd-none': !responsive
	      });
	      return React__default.createElement(NavbarBrand, _extends$2({
	        className: classes,
	        href: href
	      }, attributes), children);
	    }

	    return React__default.createElement("div", {
	      className: "it-brand-wrapper"
	    }, React__default.createElement("a", {
	      href: href
	    }, iconName && React__default.createElement(Icon, {
	      icon: iconName
	    }), React__default.createElement("div", {
	      className: "it-brand-text"
	    }, React__default.Children.map(children, function (child, i) {
	      return _this.addChildClasses(child, i);
	    }))));
	  };

	  return HeaderBrand;
	}(React.PureComponent);

	_defineProperty$2(HeaderBrand, "propTypes", propTypes$1e);

	_defineProperty$2(HeaderBrand, "defaultProps", defaultProps$19);

	_defineProperty$2(HeaderBrand, "contextType", HeaderContext);

	var propTypes$1f = {
	  /** Classi addizionali per il componente HeaderContent */
	  className: propTypes.string,

	  /** Da utilizzare per indicare che all'interno dell'Header verrà utilizzato un Megamenu */
	  megamenu: propTypes.bool,

	  /** Parametro per il controllo responsive del componente: valori Bootstrap standard sono "sm", "md", "lg", "xl" */
	  expand: propTypes.oneOfType([propTypes.bool, propTypes.string])
	};
	var defaultProps$1a = {};

	var HeaderContent =
	/*#__PURE__*/
	function (_PureComponent) {
	  _inheritsLoose$2(HeaderContent, _PureComponent);

	  function HeaderContent() {
	    return _PureComponent.apply(this, arguments) || this;
	  }

	  var _proto = HeaderContent.prototype;

	  _proto.render = function render() {
	    var _this$props = this.props,
	        className = _this$props.className,
	        megamenu = _this$props.megamenu,
	        attributes = _objectWithoutPropertiesLoose$2(_this$props, ["className", "megamenu"]);

	    var type = this.context.type;
	    var classes = classnames(className, {
	      'it-header-slim-wrapper-content': type === SLIM,
	      'it-header-center-content-wrapper': type === CENTER,
	      navbar: type === NAVBAR,
	      'has-megamenu': megamenu
	    });
	    var Content = type === NAVBAR ? React__default.createElement(Navbar, _extends$2({
	      className: classes
	    }, attributes)) : React__default.createElement("div", _extends$2({
	      className: classes
	    }, attributes));
	    return React__default.createElement("div", {
	      className: "container"
	    }, React__default.createElement("div", {
	      className: "row"
	    }, React__default.createElement("div", {
	      className: "col-12"
	    }, Content)));
	  };

	  return HeaderContent;
	}(React.PureComponent);

	_defineProperty$2(HeaderContent, "propTypes", propTypes$1f);

	_defineProperty$2(HeaderContent, "defaultProps", defaultProps$1a);

	_defineProperty$2(HeaderContent, "contextType", HeaderContext);

	var propTypes$1g = {
	  /** Classi addizionali per il componente HeaderLinkZone, applicata all'element "nav" annidato */
	  className: propTypes.string
	};
	var defaultProps$1b = {};

	var HeaderLinkZone = function HeaderLinkZone(_ref) {
	  var className = _ref.className,
	      attributes = _objectWithoutPropertiesLoose$2(_ref, ["className"]);

	  var classes = classnames(className);
	  return React__default.createElement("div", {
	    className: "nav-mobile"
	  }, React__default.createElement("nav", _extends$2({
	    className: classes
	  }, attributes)));
	};

	HeaderLinkZone.propTypes = propTypes$1g;
	HeaderLinkZone.defaultProps = defaultProps$1b;

	var propTypes$1h = {
	  /** Classi addizionali per il componente HeaderRightZone */
	  className: propTypes.string
	};
	var defaultProps$1c = {};

	var HeaderRightZone =
	/*#__PURE__*/
	function (_PureComponent) {
	  _inheritsLoose$2(HeaderRightZone, _PureComponent);

	  function HeaderRightZone() {
	    return _PureComponent.apply(this, arguments) || this;
	  }

	  var _proto = HeaderRightZone.prototype;

	  _proto.render = function render() {
	    var _this$props = this.props,
	        className = _this$props.className,
	        attributes = _objectWithoutPropertiesLoose$2(_this$props, ["className"]);

	    var type = this.context.type;
	    var classes = classnames(className, {
	      // BI >= 1.3.6
	      'it-header-slim-right-zone': type === SLIM,
	      // BI < 1.3.6
	      'header-slim-right-zone': type === SLIM,
	      'it-right-zone': type !== SLIM
	    });
	    return React__default.createElement("div", _extends$2({
	      className: classes
	    }, attributes));
	  };

	  return HeaderRightZone;
	}(React.PureComponent);

	_defineProperty$2(HeaderRightZone, "propTypes", propTypes$1h);

	_defineProperty$2(HeaderRightZone, "defaultProps", defaultProps$1c);

	_defineProperty$2(HeaderRightZone, "contextType", HeaderContext);

	var propTypes$1i = {
	  /** Classi addizionali per il componente HeaderSearch */
	  className: propTypes.string,

	  /** Etichetta di testo da applicare all'elemento. In caso di stringa vuota non verrà mostrato alcun testo */
	  label: propTypes.string,

	  /** Nome dell'icona da utilizzare */
	  iconName: propTypes.string,

	  /** Indirizzo di indirizzamento al click dell'icona */
	  href: propTypes.string
	};
	var defaultProps$1d = {
	  iconName: 'it-search'
	};

	var HeaderSearch = function HeaderSearch(_ref) {
	  var className = _ref.className,
	      label = _ref.label,
	      href = _ref.href,
	      iconName = _ref.iconName,
	      attributes = _objectWithoutPropertiesLoose$2(_ref, ["className", "label", "href", "iconName"]);

	  var classes = classnames('it-search-wrapper', className);
	  return React__default.createElement("div", _extends$2({
	    className: classes
	  }, attributes), label && React__default.createElement("span", {
	    className: "d-none d-md-block"
	  }, label), React__default.createElement("a", {
	    className: "search-link rounded-icon",
	    "aria-label": label,
	    href: href
	  }, React__default.createElement(Icon, {
	    icon: iconName
	  })));
	};

	HeaderSearch.propTypes = propTypes$1i;
	HeaderSearch.defaultProps = defaultProps$1d;

	var propTypes$1j = {
	  /** Classi addizionali per il componente HeaderSocialsZone, verrà applicato all'elemento wrapper più esterno. */
	  className: propTypes.string,

	  /** Etichetta utilizzata per presentare i social presenti. In caso di stringa vuota non verrà mostrata alcuna etichetta */
	  label: propTypes.string,

	  /** Utilizzato per elencare i social da mostrare */
	  children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node])
	};
	var defaultProps$1e = {};

	var HeaderSocialsZone = function HeaderSocialsZone(_ref) {
	  var className = _ref.className,
	      children = _ref.children,
	      label = _ref.label,
	      attributes = _objectWithoutPropertiesLoose$2(_ref, ["className", "children", "label"]);

	  var classes = classnames('it-socials d-none d-md-flex', className);
	  return React__default.createElement("div", _extends$2({
	    className: classes
	  }, attributes), label && React__default.createElement("span", null, label), children);
	};

	HeaderSocialsZone.propTypes = propTypes$1j;
	HeaderSocialsZone.defaultProps = defaultProps$1e;

	var propTypes$1k = {
	  /** Tipo di elemento DOM da utilizzare: di default "a" per Header Slim, "button" per altri tipi di Header.
	   * Se fornito questo sovrascriverà il valore di default.
	   */
	  tag: propTypes.string,

	  /** Indica l'attributo "type" sull'elemento DOM. Di default '' per Header Slim, "button" per altri tipi di Header.
	   * Se fornito questo sovrascriverà il valore di default.
	   */
	  type: propTypes.string,

	  /** Classi addizionali per il componente HeaderToggler */
	  className: propTypes.string
	};
	var defaultProps$1f = {};

	var HeaderToggler =
	/*#__PURE__*/
	function (_PureComponent) {
	  _inheritsLoose$2(HeaderToggler, _PureComponent);

	  function HeaderToggler() {
	    return _PureComponent.apply(this, arguments) || this;
	  }

	  var _proto = HeaderToggler.prototype;

	  _proto.render = function render() {
	    var _this$props = this.props,
	        className = _this$props.className,
	        tag = _this$props.tag,
	        type = _this$props.type,
	        attributes = _objectWithoutPropertiesLoose$2(_this$props, ["className", "tag", "type"]);

	    var HeaderType = this.context.type;
	    var BUTTON = 'button';
	    var defaultTag = HeaderType === SLIM ? 'a' : BUTTON;
	    var defaultType = HeaderType === SLIM ? '' : BUTTON;
	    var classes = classnames({
	      'it-opener d-lg-none': HeaderType === SLIM,
	      'custom-navbar-toggler': HeaderType === NAVBAR
	    }, className);
	    return React__default.createElement(NavbarToggler, _extends$2({
	      className: classes
	    }, attributes, {
	      tag: tag || defaultTag,
	      type: type || defaultType,
	      href: "#"
	    }));
	  };

	  return HeaderToggler;
	}(React.PureComponent);

	_defineProperty$2(HeaderToggler, "propTypes", propTypes$1k);

	_defineProperty$2(HeaderToggler, "defaultProps", defaultProps$1f);

	_defineProperty$2(HeaderToggler, "contextType", HeaderContext);

	function Hero(props) {
	  return React__default.createElement(Jumbotron, props);
	}
	Hero.defaultProps = Jumbotron.defaultProps;
	Hero.propTypes = Jumbotron.propTypes;

	var mapToCssModules$1 = mapToCssModules,
	    deprecated$1 = deprecated,
	    warnOnce$1 = warnOnce;
	var propTypes$1l = {
	  children: propTypes.node,
	  type: propTypes.string,
	  size: propTypes.string,
	  label: propTypes.string,
	  placeholder: propTypes.string,
	  value: propTypes.string,
	  id: propTypes.string,
	  infoText: propTypes.string,
	  normalized: propTypes.bool,
	  bsSize: propTypes.string,
	  state: deprecated$1(propTypes.string, 'Please use the props "valid" and "invalid" to indicate the state.'),
	  valid: propTypes.bool,
	  invalid: propTypes.bool,
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string]),
	  "static": deprecated$1(propTypes.bool, 'Please use the prop "plaintext"'),
	  plaintext: propTypes.bool,
	  addon: propTypes.bool,
	  className: propTypes.string,
	  cssModule: propTypes.object
	};
	var defaultProps$1g = {
	  type: 'text'
	};

	var Input$1 =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose$2(Input, _React$Component);

	  function Input() {
	    var _this;

	    _this = _React$Component.call(this) || this;

	    _defineProperty$2(_assertThisInitialized$2(_this), "toggleFocusLabel", function () {
	      _this.setState({
	        isFocused: true
	      });
	    });

	    _defineProperty$2(_assertThisInitialized$2(_this), "toggleBlurLabel", function (e) {
	      if (e.target.value === '') {
	        _this.setState({
	          isFocused: !_this.state.isFocused
	        });
	      }
	    });

	    _this.state = {
	      isFocused: false,
	      hidden: true,
	      icon: true
	    };
	    _this.toggleShow = _this.toggleShow.bind(_assertThisInitialized$2(_this));
	    return _this;
	  }

	  var _proto = Input.prototype;

	  _proto.toggleShow = function toggleShow() {
	    this.setState({
	      hidden: !this.state.hidden,
	      icon: !this.state.icon
	    });
	  };

	  _proto.render = function render() {
	    var _this2 = this;

	    var _this$props = this.props,
	        className = _this$props.className,
	        cssModule = _this$props.cssModule,
	        type = _this$props.type,
	        state = _this$props.state,
	        tag = _this$props.tag,
	        addon = _this$props.addon,
	        staticInput = _this$props["static"],
	        plaintext = _this$props.plaintext,
	        innerRef = _this$props.innerRef,
	        label = _this$props.label,
	        infoText = _this$props.infoText,
	        placeholder = _this$props.placeholder,
	        normalized = _this$props.normalized,
	        value = _this$props.value,
	        attributes = _objectWithoutPropertiesLoose$2(_this$props, ["className", "cssModule", "type", "state", "tag", "addon", "static", "plaintext", "innerRef", "label", "infoText", "placeholder", "normalized", "value"]);

	    var _this$props2 = this.props,
	        bsSize = _this$props2.bsSize,
	        valid = _this$props2.valid,
	        invalid = _this$props2.invalid;
	    var checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
	    var isNotaNumber = new RegExp('\\D', 'g');
	    var fileInput = type === 'file';
	    var textareaInput = type === 'textarea';
	    var selectInput = type === 'select';
	    var Tag = tag || (selectInput || textareaInput ? type : 'input');
	    var formControlClass = 'form-control';
	    var infoTextControlClass = 'form-text text-muted';

	    if (plaintext || staticInput) {
	      formControlClass = formControlClass + "-plaintext";
	      Tag = tag || 'p';
	    } else if (fileInput) {
	      formControlClass = formControlClass + "-file";
	    } else if (checkInput) {
	      if (addon) {
	        formControlClass = null;
	      }
	      /* Causes a regression with `bootstrap-italia`
	            else {
	                formControlClass = 'form-check-input';
	            }
	            */

	    }

	    if (valid || invalid) {
	      infoTextControlClass = null;
	    }

	    if (state && typeof valid === 'undefined' && typeof invalid === 'undefined') {
	      if (state === 'danger') {
	        invalid = true;
	      } else if (state === 'success') {
	        valid = true;
	      }
	    }

	    if (attributes.size && isNotaNumber.test(attributes.size)) {
	      warnOnce$1('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
	      bsSize = attributes.size;
	      delete attributes.size;
	    }

	    var classes = mapToCssModules$1(classnames(className, invalid && 'is-invalid', valid && 'is-valid', bsSize ? "form-control-" + bsSize : false, formControlClass), cssModule);
	    var wrapperClass = mapToCssModules$1(classnames(className, 'form-group'), cssModule);
	    var infoTextClass = mapToCssModules$1(classnames(className, valid ? 'valid-feedback' : false, invalid ? 'invalid-feedback' : false, infoTextControlClass));

	    if (Tag === 'input' || typeof tag !== 'string') {
	      attributes.type = type;
	    }

	    if (attributes.children && !(plaintext || staticInput || type === 'select' || typeof Tag !== 'string' || Tag === 'select')) {
	      warnOnce$1("Input with a type of \"" + type + "\" cannot have children. Please use \"value\"/\"defaultValue\" instead.");
	      delete attributes.children;
	    }

	    if (placeholder || value) {
	      return React__default.createElement("div", {
	        className: wrapperClass
	      }, React__default.createElement(Tag, _extends$2({}, attributes, {
	        ref: innerRef,
	        className: classes,
	        id: this.props.id,
	        onFocus: this.toggleFocusLabel,
	        onBlur: function onBlur(e) {
	          return _this2.toggleBlurLabel(e);
	        },
	        placeholder: this.props.placeholder,
	        value: this.props.value
	      })), React__default.createElement("label", {
	        htmlFor: this.props.id,
	        className: "active"
	      }, this.props.label), React__default.createElement("small", {
	        className: infoTextClass
	      }, this.props.infoText));
	    }

	    if (attributes.type === 'password') {
	      return React__default.createElement("div", {
	        className: wrapperClass
	      }, React__default.createElement(Tag, _extends$2({}, attributes, {
	        ref: innerRef,
	        type: this.state.hidden ? 'password' : 'text',
	        className: this.state.isFocused ? 'form-control input-password focus--mouse' : 'form-control input-password',
	        onFocus: this.toggleFocusLabel,
	        onBlur: function onBlur(e) {
	          return _this2.toggleBlurLabel(e);
	        },
	        id: this.props.id,
	        placeholder: this.props.placeholder,
	        value: this.props.value
	      })), React__default.createElement("span", {
	        className: "password-icon",
	        "aria-hidden": "true"
	      }, React__default.createElement("svg", {
	        className: "password-icon-visible icon icon-sm",
	        onClick: this.toggleShow
	      }, React__default.createElement("use", {
	        xlinkHref: "/svg/sprite.svg#it-password-" + (this.state.icon ? 'visible' : 'invisible')
	      }))), React__default.createElement("label", {
	        htmlFor: this.props.id,
	        className: this.state.isFocused ? 'active' : ''
	      }, this.props.label), React__default.createElement("small", {
	        className: infoTextClass
	      }, this.props.infoText));
	    }

	    if (normalized) {
	      return React__default.createElement("div", {
	        className: wrapperClass
	      }, React__default.createElement(Tag, _extends$2({}, attributes, {
	        className: this.state.isFocused ? 'form-control-plaintext focus--mouse' : 'form-control-plaintext',
	        onFocus: this.toggleFocusLabel,
	        onBlur: function onBlur(e) {
	          return _this2.toggleBlurLabel(e);
	        },
	        id: this.props.id,
	        value: this.props.value,
	        readOnly: true
	      })), React__default.createElement("label", {
	        htmlFor: this.props.id,
	        className: this.state.isFocused ? 'active' : ''
	      }, this.props.label), React__default.createElement("small", {
	        className: infoTextClass
	      }, this.props.infoText));
	    }

	    if (label || infoText) {
	      return React__default.createElement("div", {
	        className: wrapperClass
	      }, React__default.createElement(Tag, _extends$2({}, attributes, {
	        ref: innerRef,
	        className: classes,
	        id: this.props.id,
	        onFocus: this.toggleFocusLabel,
	        onBlur: function onBlur(e) {
	          return _this2.toggleBlurLabel(e);
	        },
	        value: this.props.value
	      })), React__default.createElement("label", {
	        htmlFor: this.props.id,
	        className: this.state.isFocused ? 'active' : ''
	      }, this.props.label), React__default.createElement("small", {
	        className: infoTextClass
	      }, this.props.infoText));
	    }

	    return React__default.createElement(Tag, _extends$2({}, attributes, {
	      ref: innerRef,
	      className: classes
	    }));
	  };

	  return Input;
	}(React__default.Component);

	Input$1.propTypes = propTypes$1l;
	Input$1.defaultProps = defaultProps$1g;

	var propTypes$1m = {
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.string,
	  multiline: propTypes.bool,
	  sublist: propTypes.bool
	};
	var defaultProps$1h = {
	  tag: 'div'
	};

	var LinkList = function LinkList(props) {
	  var className = props.className,
	      Tag = props.tag,
	      multiline = props.multiline,
	      sublist = props.sublist,
	      attributes = _objectWithoutPropertiesLoose$2(props, ["className", "tag", "multiline", "sublist"]);

	  var wrapperClasses = classnames(multiline ? 'multiline' : false, 'link-list-wrapper');
	  var classes = classnames(className, sublist ? 'link-sublist' : 'link-list');

	  if (sublist) {
	    return React__default.createElement("ul", _extends$2({}, attributes, {
	      className: classes
	    }));
	  }

	  return React__default.createElement(Tag, {
	    className: wrapperClasses
	  }, React__default.createElement("ul", _extends$2({}, attributes, {
	    className: classes
	  })));
	};

	LinkList.propTypes = propTypes$1m;
	LinkList.defaultProps = defaultProps$1h;

	var propTypes$1n = {
	  active: propTypes.bool,
	  disabled: propTypes.bool,
	  header: propTypes.bool,
	  divider: propTypes.bool,
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.any,
	  href: propTypes.string,
	  size: propTypes.string
	};
	var defaultProps$1i = {
	  tag: 'a'
	};

	var handleDisabledOnClick$1 = function handleDisabledOnClick(e) {
	  e.preventDefault();
	};

	var LinkListItem = function LinkListItem(props) {
	  var className = props.className,
	      active = props.active,
	      disabled = props.disabled,
	      header = props.header,
	      divider = props.divider,
	      href = props.href,
	      size = props.size,
	      attributes = _objectWithoutPropertiesLoose$2(props, ["className", "active", "disabled", "header", "divider", "href", "size"]);

	  var Tag = props.tag;
	  var classes = classnames(className, {
	    active: active,
	    disabled: disabled,
	    header: header,
	    divider: divider,
	    size: size
	  }, 'list-item'); // Prevent click event when disabled.

	  if (disabled) {
	    attributes.onClick = handleDisabledOnClick$1;
	  }

	  if (header) {
	    Tag = 'h3';
	  } else if (divider) {
	    Tag = 'span';
	  }

	  return React__default.createElement("li", null, header && href ? React__default.createElement(Tag, null, React__default.createElement("a", _extends$2({
	    // eslint-disable-line jsx-a11y/anchor-has-content
	    href: href || '#'
	  }, attributes, {
	    className: classes
	  }))) : React__default.createElement(Tag, _extends$2({
	    href: href || '#'
	  }, attributes, {
	    className: classes
	  })));
	};

	LinkListItem.propTypes = propTypes$1n;
	LinkListItem.defaultProps = defaultProps$1i;

	var propTypes$1o = {
	  /** Renderizza i componenti NavItem al suo interno come tab. */
	  tabs: propTypes.bool,

	  /** Renderizza i componenti NavItem al suo interno come pills. */
	  pills: propTypes.bool,

	  /** Renderizza i componenti NavItem al suo interno come tab. */
	  card: propTypes.bool,

	  /** Se abilitato tutti i NavItem all'interno avranno la stessa larghezza */
	  justified: propTypes.bool,

	  /** Se abilitato i NavItem all'intero occuperanno tutto lo spazio disponibile  */
	  fill: propTypes.bool,

	  /** Da utilizzare per rendere il componente Nav verticale. Viene abilitato automaticamente in versione mobile. Valori possibili sono `true`, `false` o `"xs"` */
	  vertical: propTypes.oneOfType([propTypes.bool, propTypes.string]),

	  /** Da utilizzare per cambiare l'allineamento all'interno della Nav. Valori possibili sono `"center"` o `"end"` per posizionare il contenuto a centro o sulla destra. */
	  horizontal: propTypes.string,

	  /** Se utilizzata all'interno di una navbar, impostarlo su `true`. In caso di Header Nav, impostarlo a `true` insieme a inHeader. */
	  navbar: propTypes.bool,

	  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string])
	};
	var defaultProps$1j = {
	  tag: 'ul',
	  vertical: false
	};

	var Nav$1 = function Nav$1(_ref) {
	  var attributes = _extends$2({}, _ref);

	  return React__default.createElement(Nav, attributes);
	};

	Nav$1.propTypes = propTypes$1o;
	Nav$1.defaultProps = defaultProps$1j;

	var propTypes$1p = {
	  children: propTypes.node,
	  className: propTypes.string,
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  'aria-label': propTypes.string
	};
	var defaultProps$1k = {
	  tag: 'nav',
	  'aria-label': 'pagination'
	};

	var Pager = function Pager(props) {
	  var children = props.children,
	      className = props.className,
	      Tag = props.tag,
	      label = props['aria-label'];
	  var classes = classnames(className, 'pagination-wrapper');
	  return React__default.createElement(Tag, {
	    className: classes,
	    "aria-label": label
	  }, children);
	};

	Pager.propTypes = propTypes$1p;
	Pager.defaultProps = defaultProps$1k;

	var propTypes$1q = {
	  className: propTypes.string,
	  size: propTypes.string,
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string])
	};
	var defaultProps$1l = {
	  tag: 'ul'
	};

	var PagerList = function PagerList(props) {
	  var _classNames;

	  var className = props.className,
	      size = props.size,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose$2(props, ["className", "size", "tag"]);

	  var listClasses = classnames(className, 'pagination', (_classNames = {}, _classNames["pagination-" + size] = !!size, _classNames));
	  return React__default.createElement(Tag, _extends$2({}, attributes, {
	    className: listClasses
	  }));
	};

	PagerList.propTypes = propTypes$1q;
	PagerList.defaultProps = defaultProps$1l;

	var PasswordInput =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose$2(PasswordInput, _Component);

	  function PasswordInput() {
	    var _this;

	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

	    _defineProperty$2(_assertThisInitialized$2(_this), "state", {
	      showPassword: false
	    });

	    _defineProperty$2(_assertThisInitialized$2(_this), "onPasswordToggle", function () {
	      _this.setState(function (prevState) {
	        return {
	          showPassword: !prevState.showPassword
	        };
	      });
	    });

	    return _this;
	  }

	  var _proto = PasswordInput.prototype;

	  _proto.render = function render() {
	    var showPassword = this.state.showPassword;

	    var _this$props = this.props,
	        type = _this$props.type,
	        rest = _objectWithoutPropertiesLoose$2(_this$props, ["type"]);

	    var classNames = ['btn-eye', showPassword ? 'eye-off' : 'eye-on'].join(' ');
	    return React__default.createElement(React.Fragment, null, React__default.createElement("span", {
	      className: classNames,
	      onClick: this.onPasswordToggle
	    }), React__default.createElement(Input$1, _extends$2({}, rest, {
	      type: showPassword ? 'text' : type
	    })));
	  };

	  return PasswordInput;
	}(React.Component);

	_defineProperty$2(PasswordInput, "defaultProps", {
	  type: 'password'
	});

	PasswordInput.propTypes = _extends$2({}, Input$1.propTypes);

	var defaultSteps = [{
	  score: 0,
	  label: 'inserisci almeno 8 caratteri e una lettera maiuscola',
	  className: 'danger'
	}, {
	  score: 1,
	  label: 'password troppo debole',
	  className: 'danger'
	}, {
	  score: 25,
	  label: 'password debole',
	  className: 'danger'
	}, {
	  score: 50,
	  label: 'password sicura',
	  className: 'warning'
	}, {
	  score: 75,
	  label: 'password molto sicura',
	  className: 'success'
	}];

	var PasswordMeter =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose$2(PasswordMeter, _Component);

	  function PasswordMeter() {
	    return _Component.apply(this, arguments) || this;
	  }

	  var _proto = PasswordMeter.prototype;

	  _proto.render = function render() {
	    var _this$props = this.props,
	        steps = _this$props.steps,
	        score = _this$props.score;
	    var currentStep = steps.filter(function (step) {
	      return step.score <= score;
	    }).reduce(function (acc, current) {
	      return acc.score > current.score ? acc : current;
	    });
	    var label = currentStep.label,
	        className = currentStep.className;
	    return React__default.createElement("div", {
	      className: "psw-wrapper"
	    }, React__default.createElement("span", {
	      className: "psw-text text-" + className + " " + className
	    }, label), React__default.createElement("div", {
	      className: "progress rounded-0 position-relative psw-meter"
	    }, React__default.createElement("div", {
	      className: "row position-absolute w-100 m-0"
	    }, React__default.createElement("div", {
	      className: "col-3 border-left border-right border-white"
	    }), React__default.createElement("div", {
	      className: "col-3 border-left border-right border-white"
	    }), React__default.createElement("div", {
	      className: "col-3 border-left border-right border-white"
	    }), React__default.createElement("div", {
	      className: "col-3 border-left border-right border-white"
	    })), React__default.createElement("div", {
	      className: "progress-bar bg-" + className + " " + className,
	      style: {
	        width: score + "%"
	      }
	    })));
	  };

	  return PasswordMeter;
	}(React.Component);

	_defineProperty$2(PasswordMeter, "defaultProps", {
	  score: 0,
	  steps: defaultSteps
	});

	PasswordMeter.propTypes = {
	  score: propTypes.number,
	  steps: propTypes.arrayOf(propTypes.shape({
	    score: propTypes.number,
	    label: propTypes.string,
	    className: propTypes.string
	  }))
	};

	var propTypes$1r = {
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.string
	};
	var defaultProps$1m = {
	  tag: 'div'
	};

	var Skiplink = function Skiplink(props) {
	  var className = props.className,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose$2(props, ["className", "tag"]);

	  var classes = classnames(className, 'skiplinks');
	  return React__default.createElement(Tag, _extends$2({
	    className: classes
	  }, attributes));
	};

	Skiplink.propTypes = propTypes$1r;
	Skiplink.defaultProps = defaultProps$1m;

	var propTypes$1s = {
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.string
	};
	var defaultProps$1n = {
	  tag: 'a'
	};

	var SkiplinkItem = function SkiplinkItem(props) {
	  var className = props.className,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose$2(props, ["className", "tag"]);

	  var classes = classnames(className, 'sr-only', 'sr-only-focusable');
	  return React__default.createElement(Tag, _extends$2({
	    className: classes
	  }, attributes));
	};

	SkiplinkItem.propTypes = propTypes$1s;
	SkiplinkItem.defaultProps = defaultProps$1n;

	var Toggle =
	/*#__PURE__*/
	function (_Component) {
	  _inheritsLoose$2(Toggle, _Component);

	  function Toggle() {
	    return _Component.apply(this, arguments) || this;
	  }

	  var _proto = Toggle.prototype;

	  _proto.render = function render() {
	    var _this$props = this.props,
	        label = _this$props.label,
	        rest = _objectWithoutPropertiesLoose$2(_this$props, ["label"]);

	    return React__default.createElement("div", {
	      className: "toggles"
	    }, React__default.createElement(Label, {
	      check: true
	    }, label, React__default.createElement(Input, _extends$2({
	      type: "checkbox"
	    }, rest)), React__default.createElement("span", {
	      className: "lever"
	    })));
	  };

	  return Toggle;
	}(React.Component);

	Toggle.propTypes = _extends$2({
	  label: propTypes.oneOfType([propTypes.string, propTypes.element])
	}, Input.propTypes);

	var propTypes$1t = {
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.string,
	  secondary: propTypes.bool,
	  left: propTypes.bool,
	  right: propTypes.bool,
	  dark: propTypes.bool
	};
	var defaultProps$1o = {
	  tag: 'div'
	};

	var Sidebar = function Sidebar(props) {
	  var className = props.className,
	      Tag = props.tag,
	      secondary = props.secondary,
	      left = props.left,
	      right = props.right,
	      dark = props.dark,
	      attributes = _objectWithoutPropertiesLoose$2(props, ["className", "tag", "secondary", "left", "right", "dark"]);

	  var wrapperClasses = classnames(className, left ? 'it-line-left-side' : false, right ? 'it-line-right-side' : false, dark ? 'theme-dark' : false, 'sidebar-wrapper');
	  var wrapperClassesLinkList = classnames(secondary ? 'linklist-secondary' : false, 'sidebar-linklist-wrapper');

	  if (secondary) {
	    return React__default.createElement(Tag, _extends$2({}, attributes, {
	      className: wrapperClassesLinkList
	    }));
	  }

	  return React__default.createElement(Tag, {
	    className: wrapperClasses
	  }, React__default.createElement(Tag, _extends$2({}, attributes, {
	    className: wrapperClassesLinkList
	  })));
	};

	Sidebar.propTypes = propTypes$1t;
	Sidebar.defaultProps = defaultProps$1o;

	var propTypes$1u = {
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.string,
	  value: propTypes.number,
	  label: propTypes.string,
	  indeterminate: propTypes.bool,
	  color: propTypes.string
	};
	var defaultProps$1p = {
	  tag: 'div',
	  role: 'progressbar',
	  indeterminate: false
	};

	var Progress =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose$2(Progress, _React$Component);

	  function Progress() {
	    return _React$Component.apply(this, arguments) || this;
	  }

	  var _proto = Progress.prototype;

	  _proto.render = function render() {
	    var _this$props = this.props,
	        className = _this$props.className,
	        Tag = _this$props.tag,
	        value = _this$props.value,
	        label = _this$props.label,
	        indeterminate = _this$props.indeterminate,
	        color = _this$props.color,
	        attributes = _objectWithoutPropertiesLoose$2(_this$props, ["className", "tag", "value", "label", "indeterminate", "color"]);

	    var wrapperClasses = classnames('progress-bar-wrapper');
	    var secondaryWrapperClasses = classnames(className, indeterminate ? 'progress-indeterminate' : false, color ? 'progress-color' : false, 'progress');
	    var classes = classnames(className, 'progress-bar', color ? "bg-" + this.props.color : false);

	    if (label && value) {
	      return React__default.createElement(Tag, {
	        className: wrapperClasses
	      }, React__default.createElement("div", {
	        className: "progress-bar-label"
	      }, React__default.createElement("span", {
	        className: "sr-only"
	      }, this.props.label), this.props.value + '%'), React__default.createElement(Tag, {
	        className: secondaryWrapperClasses
	      }, React__default.createElement("div", _extends$2({}, attributes, {
	        className: classes,
	        role: "progressbar",
	        style: {
	          width: this.props.value + '%'
	        },
	        "aria-valuenow": this.props.value,
	        "aria-valuemin": "0",
	        "aria-valuemax": "100"
	      }))));
	    }

	    return React__default.createElement(Tag, {
	      className: secondaryWrapperClasses
	    }, React__default.createElement("div", {
	      className: "progress-bar-label"
	    }, React__default.createElement("span", {
	      className: "sr-only"
	    }, this.props.label)), React__default.createElement("div", _extends$2({}, attributes, {
	      className: classes,
	      role: "progressbar",
	      style: {
	        width: this.props.value + '%'
	      },
	      "aria-valuenow": this.props.value,
	      "aria-valuemin": "0",
	      "aria-valuemax": "100"
	    })));
	  };

	  return Progress;
	}(React__default.Component);

	Progress.propTypes = propTypes$1u;
	Progress.defaultProps = defaultProps$1p;

	var propTypes$1v = {
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.string,
	  active: propTypes.bool,
	  small: propTypes.bool,
	  "double": propTypes.bool
	};
	var defaultProps$1q = {
	  tag: 'span',
	  active: false,
	  small: false,
	  "double": false
	};

	var Spinner =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose$2(Spinner, _React$Component);

	  function Spinner() {
	    return _React$Component.apply(this, arguments) || this;
	  }

	  var _proto = Spinner.prototype;

	  _proto.render = function render() {
	    var _this$props = this.props,
	        className = _this$props.className,
	        Tag = _this$props.tag,
	        active = _this$props.active,
	        small = _this$props.small,
	        _double = _this$props["double"],
	        attributes = _objectWithoutPropertiesLoose$2(_this$props, ["className", "tag", "active", "small", "double"]);

	    var wrapperClasses = classnames(active ? 'progress-spinner-active' : false, small ? 'size-sm' : false, _double ? 'progress-spinner-double' : false, 'progress-spinner');
	    var innerClasses = classnames('progress-spinner-inner');
	    var classes = classnames(className, 'sr-only');

	    if (_double) {
	      return React__default.createElement(Tag, {
	        className: wrapperClasses
	      }, React__default.createElement("div", {
	        className: innerClasses
	      }), React__default.createElement("div", {
	        className: innerClasses
	      }), React__default.createElement(Tag, _extends$2({}, attributes, {
	        className: classes
	      }), "Caricamento..."));
	    }

	    return React__default.createElement(Tag, {
	      className: wrapperClasses
	    }, React__default.createElement(Tag, _extends$2({}, attributes, {
	      className: classes
	    }), "Caricamento..."));
	  };

	  return Spinner;
	}(React__default.Component);

	Spinner.propTypes = propTypes$1v;
	Spinner.defaultProps = defaultProps$1q;

	var propTypes$1w = _extends$2({}, Card.propTypes, {
	  teaser: propTypes.bool,
	  spacing: propTypes.bool,
	  noWrapper: propTypes.bool,
	  wrapperClassName: propTypes.string
	});

	var defaultProps$1r = _extends$2({}, Card.defaultProps, {
	  noWrapper: false
	});

	var Card$1 = function Card$1(_ref) {
	  var teaser = _ref.teaser,
	      spacing = _ref.spacing,
	      noWrapper = _ref.noWrapper,
	      wrapperClassName = _ref.wrapperClassName,
	      attributes = _objectWithoutPropertiesLoose$2(_ref, ["teaser", "spacing", "noWrapper", "wrapperClassName"]);

	  var wrapperClasses = classnames('card-wrapper', wrapperClassName, {
	    'card-space': spacing,
	    'card-teaser-wrapper': teaser
	  });
	  var cardClasses = classnames(attributes.className, {
	    'card-teaser': teaser
	  });

	  if (noWrapper) {
	    return React__default.createElement(Card, _extends$2({}, attributes, {
	      className: cardClasses
	    }));
	  }

	  return React__default.createElement("div", {
	    className: wrapperClasses
	  }, React__default.createElement(Card, _extends$2({}, attributes, {
	    className: cardClasses
	  })));
	};

	Card$1.propTypes = propTypes$1w;
	Card$1.defaultProps = defaultProps$1r;

	var propTypes$1x = {
	  iconName: propTypes.string,
	  date: propTypes.string,
	  href: propTypes.string
	};

	var CardCategory = function CardCategory(props) {
	  var iconName = props.iconName,
	      date = props.date,
	      href = props.href,
	      attributes = _objectWithoutPropertiesLoose$2(props, ["iconName", "date", "href"]);

	  var children = attributes.children,
	      rest = _objectWithoutPropertiesLoose$2(attributes, ["children"]);

	  var classes = classnames({
	    'category-top': !iconName,
	    'categoryicon-top': iconName
	  }); // Simple category link

	  var categoryLink = !iconName && React__default.createElement("a", {
	    href: href,
	    className: "category"
	  }, children);
	  var categoryDate = !iconName && React__default.createElement("span", {
	    className: "data"
	  }, date); // Category with icon

	  var categoryText = iconName && React__default.createElement("span", {
	    className: "text"
	  }, children);
	  var categoryIcon = iconName && React__default.createElement(Icon, {
	    icon: iconName
	  });
	  return React__default.createElement("div", _extends$2({
	    className: classes
	  }, rest), categoryLink, categoryDate, categoryIcon, categoryText);
	};

	CardCategory.propTypes = propTypes$1x;

	var propTypes$1y = {
	  tag: propTypes.string,
	  className: propTypes.string
	};
	var defaultProps$1s = {
	  tag: 'a'
	};

	var CardTag = function CardTag(props) {
	  var className = props.className,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose$2(props, ["className", "tag"]);

	  var classes = classnames(className, 'card-tag');
	  return React__default.createElement(Tag, _extends$2({
	    className: classes
	  }, attributes));
	};

	CardTag.propTypes = propTypes$1y;
	CardTag.defaultProps = defaultProps$1s;

	var propTypes$1z = {
	  children: propTypes.node,
	  date: propTypes.string
	};

	var CardTagsHeader = function CardTagsHeader(props) {
	  var date = props.date,
	      children = props.children,
	      attributes = _objectWithoutPropertiesLoose$2(props, ["date", "children"]);

	  return React__default.createElement("div", _extends$2({
	    className: "head-tags"
	  }, attributes), children, date && React__default.createElement("span", {
	    className: "data"
	  }, date));
	};

	CardTagsHeader.propTypes = propTypes$1z;

	var propTypes$1A = {
	  className: propTypes.string
	};

	var CardSignature = function CardSignature(props) {
	  var className = props.className,
	      attributes = _objectWithoutPropertiesLoose$2(props, ["className"]);

	  var classes = classnames(className, 'card-signature');
	  return React__default.createElement("span", _extends$2({
	    className: classes
	  }, attributes));
	};

	CardSignature.propTypes = propTypes$1A;

	var propTypes$1B = {
	  className: propTypes.string
	};

	var CardFooterCTA = function CardFooterCTA(props) {
	  var className = props.className,
	      attributes = _objectWithoutPropertiesLoose$2(props, ["className"]);

	  var classes = classnames(className, 'it-card-footer');
	  return React__default.createElement("div", _extends$2({
	    className: classes
	  }, attributes));
	};

	CardFooterCTA.propTypes = propTypes$1B;

	var propTypes$1C = {
	  className: propTypes.string,
	  iconName: propTypes.string,
	  href: propTypes.string,
	  text: propTypes.string
	};
	var defaultTypes = {
	  iconName: 'it-arrow-right'
	};

	var CardReadMore = function CardReadMore(props) {
	  var className = props.className,
	      text = props.text,
	      iconName = props.iconName,
	      attributes = _objectWithoutPropertiesLoose$2(props, ["className", "text", "iconName"]);

	  var classes = classnames(className, 'read-more');
	  return React__default.createElement("a", _extends$2({
	    className: classes
	  }, attributes), React__default.createElement("span", {
	    className: "text"
	  }, text), iconName && React__default.createElement(Icon, {
	    icon: iconName
	  }));
	};

	CardReadMore.propTypes = propTypes$1C;
	CardReadMore.defaultTypes = defaultTypes;

	var propTypes$1D = {
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.string
	};
	var defaultProps$1t = {
	  tag: 'nav'
	};

	var BottomNav = function BottomNav(props) {
	  var Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose$2(props, ["tag"]);

	  var wrapperClasses = classnames('bottom-nav');
	  return React__default.createElement(Tag, {
	    className: wrapperClasses
	  }, React__default.createElement("ul", attributes));
	};

	BottomNav.propTypes = propTypes$1D;
	BottomNav.defaultProps = defaultProps$1t;

	var propTypes$1E = {
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.string,
	  active: propTypes.bool,
	  link: propTypes.string,
	  label: propTypes.string,
	  iconName: propTypes.string,
	  srText: propTypes.string,
	  alert: propTypes.bool,
	  badge: propTypes.bool
	};
	var defaultProps$1u = {
	  tag: 'a',
	  link: '#',
	  iconName: 'it-comment',
	  srText: false
	};

	var BottomNavItem = function BottomNavItem(_ref) {
	  var active = _ref.active,
	      badge = _ref.badge,
	      alert = _ref.alert,
	      link = _ref.link,
	      srText = _ref.srText,
	      iconName = _ref.iconName,
	      label = _ref.label,
	      Tag = _ref.tag,
	      attributes = _objectWithoutPropertiesLoose$2(_ref, ["active", "badge", "alert", "link", "srText", "iconName", "label", "tag"]);

	  var activeClass = classnames(active ? 'active' : false);
	  var badgeWrapper = badge ? React__default.createElement("div", {
	    className: "badge-wrapper"
	  }, React__default.createElement("span", {
	    className: "bottom-nav-badge"
	  }, badge)) : false;
	  var alertWrapper = alert ? React__default.createElement("div", {
	    className: "badge-wrapper"
	  }, React__default.createElement("span", {
	    className: "bottom-nav-alert"
	  })) : false;
	  return React__default.createElement("li", attributes, React__default.createElement(Tag, {
	    href: link,
	    className: activeClass
	  }, badgeWrapper, alertWrapper, React__default.createElement(Icon, {
	    icon: iconName
	  }), React__default.createElement("span", {
	    className: "bottom-nav-label"
	  }, label, React__default.createElement("span", {
	    className: "sr-only"
	  }, srText))));
	};

	BottomNavItem.propTypes = propTypes$1E;
	BottomNavItem.defaultProps = defaultProps$1u;

	var propTypes$1F = {
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.string
	};
	var defaultProps$1v = {
	  tag: 'div'
	};

	function CookieBar(props) {
	  var className = props.className,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose$2(props, ["className", "tag"]);

	  var wrapperClasses = classnames('cookiebar show', className);
	  return React__default.createElement(Tag, _extends$2({}, attributes, {
	    className: wrapperClasses
	  }));
	}

	CookieBar.propTypes = propTypes$1F;
	CookieBar.defaultProps = defaultProps$1v;

	var propTypes$1G = {
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.string
	};
	var defaultProps$1w = {
	  tag: 'div'
	};

	var CookieBarButtons = function CookieBarButtons(props) {
	  var className = props.className,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose$2(props, ["className", "tag"]);

	  var buttonClasses = classnames(className, 'cookiebar-buttons');
	  return React__default.createElement(Tag, _extends$2({
	    className: buttonClasses
	  }, attributes));
	};

	CookieBarButtons.propTypes = propTypes$1G;
	CookieBarButtons.defaultProps = defaultProps$1w;

	var propTypes$1H = {
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
	  className: propTypes.string
	};
	var defaultProps$1x = {
	  tag: 'button'
	};

	var CookieBarButton =
	/*#__PURE__*/
	function (_React$Component) {
	  _inheritsLoose$2(CookieBarButton, _React$Component);

	  function CookieBarButton() {
	    return _React$Component.apply(this, arguments) || this;
	  }

	  var _proto = CookieBarButton.prototype;

	  _proto.render = function render() {
	    var _this$props = this.props,
	        Tag = _this$props.tag,
	        className = _this$props.className,
	        attributes = _objectWithoutPropertiesLoose$2(_this$props, ["tag", "className"]);

	    var activeClass = classnames(className, 'cookiebar-btn');
	    return React__default.createElement(Tag, _extends$2({
	      href: true,
	      className: activeClass
	    }, attributes));
	  };

	  return CookieBarButton;
	}(React__default.Component);

	CookieBarButton.propTypes = propTypes$1H;
	CookieBarButton.defaultProps = defaultProps$1x;

	var propTypes$1I = {
	  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),

	  /** Classi aggiuntive da usare per il componente Chip */
	  className: propTypes.string,

	  /** Impostarlo su `true` per centrare la label all'interno */
	  simple: propTypes.bool,

	  /** Impostarlo su `true` per una versione più grande del componente Chip. */
	  large: propTypes.bool,

	  /** Impostarlo su `true` per renderizzare il componente Chip come disabilitato */
	  disabled: propTypes.bool,
	  color: propTypes.string
	};
	var defaultProps$1y = {
	  tag: 'div',
	  simple: false,
	  large: false,
	  disabled: false,
	  color: ''
	};

	var Chip = function Chip(props) {
	  var _classNames;

	  var className = props.className,
	      color = props.color,
	      Tag = props.tag,
	      simple = props.simple,
	      large = props.large,
	      disabled = props.disabled,
	      attributes = _objectWithoutPropertiesLoose$2(props, ["className", "color", "tag", "simple", "large", "disabled"]);

	  var classes = classnames('chip', className, (_classNames = {
	    'chip-simple': simple,
	    'chip-lg': large,
	    'chip-disabled': disabled
	  }, _classNames["chip-" + color] = color, _classNames));
	  return React__default.createElement(Tag, _extends$2({
	    className: classes
	  }, attributes));
	};

	Chip.propTypes = propTypes$1I;
	Chip.defaultProps = defaultProps$1y;

	var propTypes$1J = {
	  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
	  tag: propTypes.oneOfType([propTypes.func, propTypes.string]),

	  /** Classi aggiuntive da usare per il componente ChipLabel */
	  className: propTypes.string
	};
	var defaultProps$1z = {
	  tag: 'span'
	};

	var ChipLabel = function ChipLabel(props) {
	  var className = props.className,
	      Tag = props.tag,
	      attributes = _objectWithoutPropertiesLoose$2(props, ["className", "tag"]);

	  var classes = classnames(className, 'chip-label');
	  return React__default.createElement(Tag, _extends$2({}, attributes, {
	    className: classes
	  }));
	};

	ChipLabel.propTypes = propTypes$1J;
	ChipLabel.defaultProps = defaultProps$1z;

	webfontloader.load({
	  custom: {
	    families: ['Titillium Web:300,400,600,700:latin-ext', 'Lora:400,700:latin-ext', 'Roboto Mono:400,700:latin-ext']
	  }
	});

	exports.Accordion = Accordion;
	exports.AccordionBody = AccordionBody;
	exports.AccordionHeader = AccordionHeader;
	exports.Alert = Alert;
	exports.Badge = Badge$1;
	exports.BottomNav = BottomNav;
	exports.BottomNavItem = BottomNavItem;
	exports.Breadcrumb = Breadcrumb;
	exports.BreadcrumbItem = BreadcrumbItem;
	exports.Button = Button$1;
	exports.ButtonDropdown = ButtonDropdown;
	exports.ButtonGroup = ButtonGroup;
	exports.ButtonToolbar = ButtonToolbar;
	exports.Card = Card$1;
	exports.CardBody = CardBody;
	exports.CardCategory = CardCategory;
	exports.CardColumns = CardColumns;
	exports.CardDeck = CardDeck;
	exports.CardFooter = CardFooter;
	exports.CardFooterCTA = CardFooterCTA;
	exports.CardGroup = CardGroup;
	exports.CardHeader = CardHeader;
	exports.CardImg = CardImg;
	exports.CardImgOverlay = CardImgOverlay;
	exports.CardLink = CardLink;
	exports.CardReadMore = CardReadMore;
	exports.CardSignature = CardSignature;
	exports.CardSubtitle = CardSubtitle;
	exports.CardTag = CardTag;
	exports.CardTagsHeader = CardTagsHeader;
	exports.CardText = CardText;
	exports.CardTitle = CardTitle;
	exports.Carousel = Carousel;
	exports.CarouselCaption = CarouselCaption;
	exports.CarouselControl = CarouselControl;
	exports.CarouselIndicators = CarouselIndicators;
	exports.CarouselItem = CarouselItem;
	exports.Chip = Chip;
	exports.ChipLabel = ChipLabel;
	exports.Col = Col;
	exports.Collapse = Collapse$1;
	exports.Container = Container;
	exports.CookieBar = CookieBar;
	exports.CookieBarButton = CookieBarButton;
	exports.CookieBarButtons = CookieBarButtons;
	exports.Dropdown = Dropdown;
	exports.DropdownItem = DropdownItem;
	exports.DropdownMenu = DropdownMenu;
	exports.DropdownToggle = DropdownToggle;
	exports.Fade = Fade;
	exports.Form = Form;
	exports.FormFeedback = FormFeedback;
	exports.FormGroup = FormGroup$1;
	exports.FormText = FormText;
	exports.Header = Header;
	exports.HeaderBrand = HeaderBrand;
	exports.HeaderContent = HeaderContent;
	exports.HeaderLinkZone = HeaderLinkZone;
	exports.HeaderRightZone = HeaderRightZone;
	exports.HeaderSearch = HeaderSearch;
	exports.HeaderSocialsZone = HeaderSocialsZone;
	exports.HeaderToggler = HeaderToggler;
	exports.Headers = Headers;
	exports.Hero = Hero;
	exports.Icon = Icon;
	exports.Input = Input$1;
	exports.InputGroup = InputGroup;
	exports.InputGroupAddon = InputGroupAddon;
	exports.InputGroupButtonDropdown = InputGroupButtonDropdown;
	exports.InputGroupText = InputGroupText;
	exports.Jumbotron = Jumbotron;
	exports.Label = Label;
	exports.LinkList = LinkList;
	exports.LinkListItem = LinkListItem;
	exports.ListGroup = ListGroup;
	exports.ListGroupItem = ListGroupItem;
	exports.ListGroupItemHeading = ListGroupItemHeading;
	exports.ListGroupItemText = ListGroupItemText;
	exports.Media = Media;
	exports.Modal = Modal;
	exports.ModalBody = ModalBody;
	exports.ModalFooter = ModalFooter;
	exports.ModalHeader = ModalHeader;
	exports.Nav = Nav$1;
	exports.NavItem = NavItem;
	exports.NavLink = NavLink;
	exports.Navbar = Navbar;
	exports.NavbarBrand = NavbarBrand;
	exports.NavbarToggler = NavbarToggler;
	exports.Pager = Pager;
	exports.PagerItem = PaginationItem;
	exports.PagerLink = PaginationLink;
	exports.PagerList = PagerList;
	exports.PasswordInput = PasswordInput;
	exports.PasswordMeter = PasswordMeter;
	exports.Popover = Popover;
	exports.PopoverBody = PopoverBody;
	exports.PopoverHeader = PopoverHeader;
	exports.PopperContent = PopperContent;
	exports.PopperTargetHelper = PopperTargetHelper;
	exports.Progress = Progress;
	exports.Row = Row;
	exports.Scrollspy = Scrollspy;
	exports.Sidebar = Sidebar;
	exports.Skiplink = Skiplink;
	exports.SkiplinkItem = SkiplinkItem;
	exports.Spinner = Spinner;
	exports.TabContent = TabContent;
	exports.TabPane = TabPane;
	exports.Table = Table;
	exports.Toggle = Toggle;
	exports.Tooltip = Tooltip;
	exports.UncontrolledAlert = UncontrolledAlert;
	exports.UncontrolledButtonDropdown = UncontrolledButtonDropdown;
	exports.UncontrolledCarousel = UncontrolledCarousel;
	exports.UncontrolledCollapse = UncontrolledCollapse;
	exports.UncontrolledDropdown = UncontrolledDropdown;
	exports.UncontrolledTooltip = UncontrolledTooltip;
	exports.Util = utils;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=design-react-kit.full.js.map
