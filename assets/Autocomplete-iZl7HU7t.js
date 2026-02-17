import { r as reactExports, c as commonjsGlobal, g as getDefaultExportFromCjs, e } from "./iframe-BMr-kR9u.js";
var accessibleAutocomplete_react_min = { exports: {} };
(function(module, exports$1) {
  !function(t, e2) {
    module.exports = e2(reactExports);
  }(commonjsGlobal, function(t) {
    return function() {
      var e2 = { 680: function(e3) {
        e3.exports = t;
      }, 8952: function(t2, e3, n2) {
        var r2 = n2(4328), o2 = n2(36), i = TypeError;
        t2.exports = function(t3) {
          if (r2(t3)) return t3;
          throw new i(o2(t3) + " is not a function");
        };
      }, 2096: function(t2, e3, n2) {
        var r2 = n2(2424), o2 = String, i = TypeError;
        t2.exports = function(t3) {
          if (r2(t3)) return t3;
          throw new i("Can't set " + o2(t3) + " as a prototype");
        };
      }, 4764: function(t2, e3, n2) {
        var r2 = n2(9764).charAt;
        t2.exports = function(t3, e4, n3) {
          return e4 + (n3 ? r2(t3, e4).length : 1);
        };
      }, 6100: function(t2, e3, n2) {
        var r2 = n2(7e3), o2 = TypeError;
        t2.exports = function(t3, e4) {
          if (r2(e4, t3)) return t3;
          throw new o2("Incorrect invocation");
        };
      }, 3951: function(t2, e3, n2) {
        var r2 = n2(1632), o2 = String, i = TypeError;
        t2.exports = function(t3) {
          if (r2(t3)) return t3;
          throw new i(o2(t3) + " is not an object");
        };
      }, 2504: function(t2, e3, n2) {
        var r2 = n2(4096), o2 = n2(2495), i = n2(3556), u = function(t3) {
          return function(e4, n3, u2) {
            var a = r2(e4), c = i(a);
            if (0 === c) return !t3 && -1;
            var s, l = o2(u2, c);
            if (t3 && n3 != n3) {
              for (; c > l; ) if ((s = a[l++]) != s) return true;
            } else for (; c > l; l++) if ((t3 || l in a) && a[l] === n3) return t3 || l || 0;
            return !t3 && -1;
          };
        };
        t2.exports = { includes: u(true), indexOf: u(false) };
      }, 3364: function(t2, e3, n2) {
        var r2 = n2(8992), o2 = n2(1664), i = n2(5712), u = n2(4356), a = n2(3556), c = n2(2568), s = o2([].push), l = function(t3) {
          var e4 = 1 === t3, n3 = 2 === t3, o3 = 3 === t3, l2 = 4 === t3, f = 6 === t3, p = 7 === t3, h = 5 === t3 || f;
          return function(d, v, y, g) {
            for (var m, b, x = u(d), w = i(x), O = a(w), S = r2(v, y), E = 0, I = g || c, j = e4 ? I(d, O) : n3 || p ? I(d, 0) : void 0; O > E; E++) if ((h || E in w) && (b = S(m = w[E], E, x), t3)) if (e4) j[E] = b;
            else if (b) switch (t3) {
              case 3:
                return true;
              case 5:
                return m;
              case 6:
                return E;
              case 2:
                s(j, m);
            }
            else switch (t3) {
              case 4:
                return false;
              case 7:
                s(j, m);
            }
            return f ? -1 : o3 || l2 ? l2 : j;
          };
        };
        t2.exports = { forEach: l(0), map: l(1), filter: l(2), some: l(3), every: l(4), find: l(5), findIndex: l(6), filterReject: l(7) };
      }, 953: function(t2, e3, n2) {
        var r2 = n2(9957), o2 = n2(9972), i = n2(8504), u = o2("species");
        t2.exports = function(t3) {
          return i >= 51 || !r2(function() {
            var e4 = [];
            return (e4.constructor = {})[u] = function() {
              return { foo: 1 };
            }, 1 !== e4[t3](Boolean).foo;
          });
        };
      }, 1496: function(t2, e3, n2) {
        var r2 = n2(9957);
        t2.exports = function(t3, e4) {
          var n3 = [][t3];
          return !!n3 && r2(function() {
            n3.call(null, e4 || function() {
              return 1;
            }, 1);
          });
        };
      }, 6728: function(t2, e3, n2) {
        var r2 = n2(3476), o2 = n2(1432), i = TypeError, u = Object.getOwnPropertyDescriptor, a = r2 && !function() {
          if (void 0 !== this) return true;
          try {
            Object.defineProperty([], "length", { writable: false }).length = 1;
          } catch (t3) {
            return t3 instanceof TypeError;
          }
        }();
        t2.exports = a ? function(t3, e4) {
          if (o2(t3) && !u(t3, "length").writable) throw new i("Cannot set read only .length");
          return t3.length = e4;
        } : function(t3, e4) {
          return t3.length = e4;
        };
      }, 6736: function(t2, e3, n2) {
        var r2 = n2(1432), o2 = n2(6072), i = n2(1632), u = n2(9972)("species"), a = Array;
        t2.exports = function(t3) {
          var e4;
          return r2(t3) && (e4 = t3.constructor, (o2(e4) && (e4 === a || r2(e4.prototype)) || i(e4) && null === (e4 = e4[u])) && (e4 = void 0)), void 0 === e4 ? a : e4;
        };
      }, 2568: function(t2, e3, n2) {
        var r2 = n2(6736);
        t2.exports = function(t3, e4) {
          return new (r2(t3))(0 === e4 ? 0 : e4);
        };
      }, 8696: function(t2, e3, n2) {
        var r2 = n2(3951), o2 = n2(3112);
        t2.exports = function(t3, e4, n3, i) {
          try {
            return i ? e4(r2(n3)[0], n3[1]) : e4(n3);
          } catch (u) {
            o2(t3, "throw", u);
          }
        };
      }, 1888: function(t2, e3, n2) {
        var r2 = n2(1664), o2 = r2({}.toString), i = r2("".slice);
        t2.exports = function(t3) {
          return i(o2(t3), 8, -1);
        };
      }, 4427: function(t2, e3, n2) {
        var r2 = n2(16), o2 = n2(4328), i = n2(1888), u = n2(9972)("toStringTag"), a = Object, c = "Arguments" === i(/* @__PURE__ */ function() {
          return arguments;
        }());
        t2.exports = r2 ? i : function(t3) {
          var e4, n3, r3;
          return void 0 === t3 ? "Undefined" : null === t3 ? "Null" : "string" == typeof (n3 = function(t4, e5) {
            try {
              return t4[e5];
            } catch (n4) {
            }
          }(e4 = a(t3), u)) ? n3 : c ? i(e4) : "Object" === (r3 = i(e4)) && o2(e4.callee) ? "Arguments" : r3;
        };
      }, 9968: function(t2, e3, n2) {
        var r2 = n2(5152), o2 = n2(9252), i = n2(9444), u = n2(8352);
        t2.exports = function(t3, e4, n3) {
          for (var a = o2(e4), c = u.f, s = i.f, l = 0; l < a.length; l++) {
            var f = a[l];
            r2(t3, f) || n3 && r2(n3, f) || c(t3, f, s(e4, f));
          }
        };
      }, 2272: function(t2, e3, n2) {
        var r2 = n2(9957);
        t2.exports = !r2(function() {
          function t3() {
          }
          return t3.prototype.constructor = null, Object.getPrototypeOf(new t3()) !== t3.prototype;
        });
      }, 3336: function(t2) {
        t2.exports = function(t3, e3) {
          return { value: t3, done: e3 };
        };
      }, 3440: function(t2, e3, n2) {
        var r2 = n2(3476), o2 = n2(8352), i = n2(9728);
        t2.exports = r2 ? function(t3, e4, n3) {
          return o2.f(t3, e4, i(1, n3));
        } : function(t3, e4, n3) {
          return t3[e4] = n3, t3;
        };
      }, 9728: function(t2) {
        t2.exports = function(t3, e3) {
          return { enumerable: !(1 & t3), configurable: !(2 & t3), writable: !(4 & t3), value: e3 };
        };
      }, 92: function(t2, e3, n2) {
        var r2 = n2(3476), o2 = n2(8352), i = n2(9728);
        t2.exports = function(t3, e4, n3) {
          r2 ? o2.f(t3, e4, i(0, n3)) : t3[e4] = n3;
        };
      }, 2544: function(t2, e3, n2) {
        var r2 = n2(5312), o2 = n2(8352);
        t2.exports = function(t3, e4, n3) {
          return n3.get && r2(n3.get, e4, { getter: true }), n3.set && r2(n3.set, e4, { setter: true }), o2.f(t3, e4, n3);
        };
      }, 6076: function(t2, e3, n2) {
        var r2 = n2(4328), o2 = n2(8352), i = n2(5312), u = n2(4636);
        t2.exports = function(t3, e4, n3, a) {
          a || (a = {});
          var c = a.enumerable, s = void 0 !== a.name ? a.name : e4;
          if (r2(n3) && i(n3, s, a), a.global) c ? t3[e4] = n3 : u(e4, n3);
          else {
            try {
              a.unsafe ? t3[e4] && (c = true) : delete t3[e4];
            } catch (l) {
            }
            c ? t3[e4] = n3 : o2.f(t3, e4, { value: n3, enumerable: false, configurable: !a.nonConfigurable, writable: !a.nonWritable });
          }
          return t3;
        };
      }, 4036: function(t2, e3, n2) {
        var r2 = n2(6076);
        t2.exports = function(t3, e4, n3) {
          for (var o2 in e4) r2(t3, o2, e4[o2], n3);
          return t3;
        };
      }, 4636: function(t2, e3, n2) {
        var r2 = n2(6420), o2 = Object.defineProperty;
        t2.exports = function(t3, e4) {
          try {
            o2(r2, t3, { value: e4, configurable: true, writable: true });
          } catch (n3) {
            r2[t3] = e4;
          }
          return e4;
        };
      }, 3476: function(t2, e3, n2) {
        var r2 = n2(9957);
        t2.exports = !r2(function() {
          return 7 !== Object.defineProperty({}, 1, { get: function() {
            return 7;
          } })[1];
        });
      }, 8168: function(t2, e3, n2) {
        var r2 = n2(6420), o2 = n2(1632), i = r2.document, u = o2(i) && o2(i.createElement);
        t2.exports = function(t3) {
          return u ? i.createElement(t3) : {};
        };
      }, 4316: function(t2) {
        var e3 = TypeError;
        t2.exports = function(t3) {
          if (t3 > 9007199254740991) throw e3("Maximum allowed index exceeded");
          return t3;
        };
      }, 6064: function(t2) {
        t2.exports = "undefined" != typeof navigator && String(navigator.userAgent) || "";
      }, 8504: function(t2, e3, n2) {
        var r2, o2, i = n2(6420), u = n2(6064), a = i.process, c = i.Deno, s = a && a.versions || c && c.version, l = s && s.v8;
        l && (o2 = (r2 = l.split("."))[0] > 0 && r2[0] < 4 ? 1 : +(r2[0] + r2[1])), !o2 && u && (!(r2 = u.match(/Edge\/(\d+)/)) || r2[1] >= 74) && (r2 = u.match(/Chrome\/(\d+)/)) && (o2 = +r2[1]), t2.exports = o2;
      }, 8256: function(t2) {
        t2.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
      }, 6520: function(t2, e3, n2) {
        var r2 = n2(1664), o2 = Error, i = r2("".replace), u = String(new o2("zxcasd").stack), a = /\n\s*at [^:]*:[^\n]*/, c = a.test(u);
        t2.exports = function(t3, e4) {
          if (c && "string" == typeof t3 && !o2.prepareStackTrace) for (; e4--; ) t3 = i(t3, a, "");
          return t3;
        };
      }, 3696: function(t2, e3, n2) {
        var r2 = n2(3440), o2 = n2(6520), i = n2(9184), u = Error.captureStackTrace;
        t2.exports = function(t3, e4, n3, a) {
          i && (u ? u(t3, e4) : r2(t3, "stack", o2(n3, a)));
        };
      }, 9184: function(t2, e3, n2) {
        var r2 = n2(9957), o2 = n2(9728);
        t2.exports = !r2(function() {
          var t3 = new Error("a");
          return !("stack" in t3) || (Object.defineProperty(t3, "stack", o2(1, 7)), 7 !== t3.stack);
        });
      }, 9160: function(t2, e3, n2) {
        var r2 = n2(6420), o2 = n2(9444).f, i = n2(3440), u = n2(6076), a = n2(4636), c = n2(9968), s = n2(6704);
        t2.exports = function(t3, e4) {
          var n3, l, f, p, h, d = t3.target, v = t3.global, y = t3.stat;
          if (n3 = v ? r2 : y ? r2[d] || a(d, {}) : r2[d] && r2[d].prototype) for (l in e4) {
            if (p = e4[l], f = t3.dontCallGetSet ? (h = o2(n3, l)) && h.value : n3[l], !s(v ? l : d + (y ? "." : "#") + l, t3.forced) && void 0 !== f) {
              if (typeof p == typeof f) continue;
              c(p, f);
            }
            (t3.sham || f && f.sham) && i(p, "sham", true), u(n3, l, p, t3);
          }
        };
      }, 9957: function(t2) {
        t2.exports = function(t3) {
          try {
            return !!t3();
          } catch (e3) {
            return true;
          }
        };
      }, 7176: function(t2, e3, n2) {
        n2(880);
        var r2 = n2(8448), o2 = n2(6076), i = n2(7680), u = n2(9957), a = n2(9972), c = n2(3440), s = a("species"), l = RegExp.prototype;
        t2.exports = function(t3, e4, n3, f) {
          var p = a(t3), h = !u(function() {
            var e5 = {};
            return e5[p] = function() {
              return 7;
            }, 7 !== ""[t3](e5);
          }), d = h && !u(function() {
            var e5 = false, n4 = /a/;
            return "split" === t3 && ((n4 = {}).constructor = {}, n4.constructor[s] = function() {
              return n4;
            }, n4.flags = "", n4[p] = /./[p]), n4.exec = function() {
              return e5 = true, null;
            }, n4[p](""), !e5;
          });
          if (!h || !d || n3) {
            var v = /./[p], y = e4(p, ""[t3], function(t4, e5, n4, o3, u2) {
              var a2 = e5.exec;
              return a2 === i || a2 === l.exec ? h && !u2 ? { done: true, value: r2(v, e5, n4, o3) } : { done: true, value: r2(t4, n4, e5, o3) } : { done: false };
            });
            o2(String.prototype, t3, y[0]), o2(l, p, y[1]);
          }
          f && c(l[p], "sham", true);
        };
      }, 908: function(t2, e3, n2) {
        var r2 = n2(7332), o2 = Function.prototype, i = o2.apply, u = o2.call;
        t2.exports = "object" == typeof Reflect && Reflect.apply || (r2 ? u.bind(i) : function() {
          return u.apply(i, arguments);
        });
      }, 8992: function(t2, e3, n2) {
        var r2 = n2(3180), o2 = n2(8952), i = n2(7332), u = r2(r2.bind);
        t2.exports = function(t3, e4) {
          return o2(t3), void 0 === e4 ? t3 : i ? u(t3, e4) : function() {
            return t3.apply(e4, arguments);
          };
        };
      }, 7332: function(t2, e3, n2) {
        var r2 = n2(9957);
        t2.exports = !r2(function() {
          var t3 = (function() {
          }).bind();
          return "function" != typeof t3 || t3.hasOwnProperty("prototype");
        });
      }, 8448: function(t2, e3, n2) {
        var r2 = n2(7332), o2 = Function.prototype.call;
        t2.exports = r2 ? o2.bind(o2) : function() {
          return o2.apply(o2, arguments);
        };
      }, 6208: function(t2, e3, n2) {
        var r2 = n2(3476), o2 = n2(5152), i = Function.prototype, u = r2 && Object.getOwnPropertyDescriptor, a = o2(i, "name"), c = a && "something" === (function() {
        }).name, s = a && (!r2 || r2 && u(i, "name").configurable);
        t2.exports = { EXISTS: a, PROPER: c, CONFIGURABLE: s };
      }, 5288: function(t2, e3, n2) {
        var r2 = n2(1664), o2 = n2(8952);
        t2.exports = function(t3, e4, n3) {
          try {
            return r2(o2(Object.getOwnPropertyDescriptor(t3, e4)[n3]));
          } catch (i) {
          }
        };
      }, 3180: function(t2, e3, n2) {
        var r2 = n2(1888), o2 = n2(1664);
        t2.exports = function(t3) {
          if ("Function" === r2(t3)) return o2(t3);
        };
      }, 1664: function(t2, e3, n2) {
        var r2 = n2(7332), o2 = Function.prototype, i = o2.call, u = r2 && o2.bind.bind(i, i);
        t2.exports = r2 ? u : function(t3) {
          return function() {
            return i.apply(t3, arguments);
          };
        };
      }, 5232: function(t2, e3, n2) {
        var r2 = n2(6420), o2 = n2(4328);
        t2.exports = function(t3, e4) {
          return arguments.length < 2 ? (n3 = r2[t3], o2(n3) ? n3 : void 0) : r2[t3] && r2[t3][e4];
          var n3;
        };
      }, 6752: function(t2) {
        t2.exports = function(t3) {
          return { iterator: t3, next: t3.next, done: false };
        };
      }, 4504: function(t2, e3, n2) {
        var r2 = n2(8952), o2 = n2(9760);
        t2.exports = function(t3, e4) {
          var n3 = t3[e4];
          return o2(n3) ? void 0 : r2(n3);
        };
      }, 6420: function(t2, e3, n2) {
        var r2 = function(t3) {
          return t3 && t3.Math === Math && t3;
        };
        t2.exports = r2("object" == typeof globalThis && globalThis) || r2("object" == typeof window && window) || r2("object" == typeof self && self) || r2("object" == typeof n2.g && n2.g) || r2("object" == typeof this && this) || /* @__PURE__ */ function() {
          return this;
        }() || Function("return this")();
      }, 5152: function(t2, e3, n2) {
        var r2 = n2(1664), o2 = n2(4356), i = r2({}.hasOwnProperty);
        t2.exports = Object.hasOwn || function(t3, e4) {
          return i(o2(t3), e4);
        };
      }, 2560: function(t2) {
        t2.exports = {};
      }, 4168: function(t2, e3, n2) {
        var r2 = n2(5232);
        t2.exports = r2("document", "documentElement");
      }, 9888: function(t2, e3, n2) {
        var r2 = n2(3476), o2 = n2(9957), i = n2(8168);
        t2.exports = !r2 && !o2(function() {
          return 7 !== Object.defineProperty(i("div"), "a", { get: function() {
            return 7;
          } }).a;
        });
      }, 5712: function(t2, e3, n2) {
        var r2 = n2(1664), o2 = n2(9957), i = n2(1888), u = Object, a = r2("".split);
        t2.exports = o2(function() {
          return !u("z").propertyIsEnumerable(0);
        }) ? function(t3) {
          return "String" === i(t3) ? a(t3, "") : u(t3);
        } : u;
      }, 7512: function(t2, e3, n2) {
        var r2 = n2(4328), o2 = n2(1632), i = n2(4024);
        t2.exports = function(t3, e4, n3) {
          var u, a;
          return i && r2(u = e4.constructor) && u !== n3 && o2(a = u.prototype) && a !== n3.prototype && i(t3, a), t3;
        };
      }, 9112: function(t2, e3, n2) {
        var r2 = n2(1664), o2 = n2(4328), i = n2(3976), u = r2(Function.toString);
        o2(i.inspectSource) || (i.inspectSource = function(t3) {
          return u(t3);
        }), t2.exports = i.inspectSource;
      }, 3480: function(t2, e3, n2) {
        var r2 = n2(1632), o2 = n2(3440);
        t2.exports = function(t3, e4) {
          r2(e4) && "cause" in e4 && o2(t3, "cause", e4.cause);
        };
      }, 9104: function(t2, e3, n2) {
        var r2, o2, i, u = n2(4288), a = n2(6420), c = n2(1632), s = n2(3440), l = n2(5152), f = n2(3976), p = n2(6504), h = n2(2560), d = "Object already initialized", v = a.TypeError, y = a.WeakMap;
        if (u || f.state) {
          var g = f.state || (f.state = new y());
          g.get = g.get, g.has = g.has, g.set = g.set, r2 = function(t3, e4) {
            if (g.has(t3)) throw new v(d);
            return e4.facade = t3, g.set(t3, e4), e4;
          }, o2 = function(t3) {
            return g.get(t3) || {};
          }, i = function(t3) {
            return g.has(t3);
          };
        } else {
          var m = p("state");
          h[m] = true, r2 = function(t3, e4) {
            if (l(t3, m)) throw new v(d);
            return e4.facade = t3, s(t3, m, e4), e4;
          }, o2 = function(t3) {
            return l(t3, m) ? t3[m] : {};
          }, i = function(t3) {
            return l(t3, m);
          };
        }
        t2.exports = { set: r2, get: o2, has: i, enforce: function(t3) {
          return i(t3) ? o2(t3) : r2(t3, {});
        }, getterFor: function(t3) {
          return function(e4) {
            var n3;
            if (!c(e4) || (n3 = o2(e4)).type !== t3) throw new v("Incompatible receiver, " + t3 + " required");
            return n3;
          };
        } };
      }, 1432: function(t2, e3, n2) {
        var r2 = n2(1888);
        t2.exports = Array.isArray || function(t3) {
          return "Array" === r2(t3);
        };
      }, 4328: function(t2) {
        var e3 = "object" == typeof document && document.all;
        t2.exports = void 0 === e3 && void 0 !== e3 ? function(t3) {
          return "function" == typeof t3 || t3 === e3;
        } : function(t3) {
          return "function" == typeof t3;
        };
      }, 6072: function(t2, e3, n2) {
        var r2 = n2(1664), o2 = n2(9957), i = n2(4328), u = n2(4427), a = n2(5232), c = n2(9112), s = function() {
        }, l = a("Reflect", "construct"), f = /^\s*(?:class|function)\b/, p = r2(f.exec), h = !f.test(s), d = function(t3) {
          if (!i(t3)) return false;
          try {
            return l(s, [], t3), true;
          } catch (e4) {
            return false;
          }
        }, v = function(t3) {
          if (!i(t3)) return false;
          switch (u(t3)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
              return false;
          }
          try {
            return h || !!p(f, c(t3));
          } catch (e4) {
            return true;
          }
        };
        v.sham = true, t2.exports = !l || o2(function() {
          var t3;
          return d(d.call) || !d(Object) || !d(function() {
            t3 = true;
          }) || t3;
        }) ? v : d;
      }, 6704: function(t2, e3, n2) {
        var r2 = n2(9957), o2 = n2(4328), i = /#|\.prototype\./, u = function(t3, e4) {
          var n3 = c[a(t3)];
          return n3 === l || n3 !== s && (o2(e4) ? r2(e4) : !!e4);
        }, a = u.normalize = function(t3) {
          return String(t3).replace(i, ".").toLowerCase();
        }, c = u.data = {}, s = u.NATIVE = "N", l = u.POLYFILL = "P";
        t2.exports = u;
      }, 9760: function(t2) {
        t2.exports = function(t3) {
          return null == t3;
        };
      }, 1632: function(t2, e3, n2) {
        var r2 = n2(4328);
        t2.exports = function(t3) {
          return "object" == typeof t3 ? null !== t3 : r2(t3);
        };
      }, 2424: function(t2, e3, n2) {
        var r2 = n2(1632);
        t2.exports = function(t3) {
          return r2(t3) || null === t3;
        };
      }, 7048: function(t2) {
        t2.exports = false;
      }, 7728: function(t2, e3, n2) {
        var r2 = n2(5232), o2 = n2(4328), i = n2(7e3), u = n2(6536), a = Object;
        t2.exports = u ? function(t3) {
          return "symbol" == typeof t3;
        } : function(t3) {
          var e4 = r2("Symbol");
          return o2(e4) && i(e4.prototype, a(t3));
        };
      }, 3112: function(t2, e3, n2) {
        var r2 = n2(8448), o2 = n2(3951), i = n2(4504);
        t2.exports = function(t3, e4, n3) {
          var u, a;
          o2(t3);
          try {
            if (!(u = i(t3, "return"))) {
              if ("throw" === e4) throw n3;
              return n3;
            }
            u = r2(u, t3);
          } catch (c) {
            a = true, u = c;
          }
          if ("throw" === e4) throw n3;
          if (a) throw u;
          return o2(u), n3;
        };
      }, 9724: function(t2, e3, n2) {
        var r2 = n2(8448), o2 = n2(9368), i = n2(3440), u = n2(4036), a = n2(9972), c = n2(9104), s = n2(4504), l = n2(336).IteratorPrototype, f = n2(3336), p = n2(3112), h = a("toStringTag"), d = "IteratorHelper", v = "WrapForValidIterator", y = c.set, g = function(t3) {
          var e4 = c.getterFor(t3 ? v : d);
          return u(o2(l), { next: function() {
            var n3 = e4(this);
            if (t3) return n3.nextHandler();
            try {
              var r3 = n3.done ? void 0 : n3.nextHandler();
              return f(r3, n3.done);
            } catch (o3) {
              throw n3.done = true, o3;
            }
          }, return: function() {
            var n3 = e4(this), o3 = n3.iterator;
            if (n3.done = true, t3) {
              var i2 = s(o3, "return");
              return i2 ? r2(i2, o3) : f(void 0, true);
            }
            if (n3.inner) try {
              p(n3.inner.iterator, "normal");
            } catch (u2) {
              return p(o3, "throw", u2);
            }
            return p(o3, "normal"), f(void 0, true);
          } });
        }, m = g(true), b = g(false);
        i(b, h, "Iterator Helper"), t2.exports = function(t3, e4) {
          var n3 = function(n4, r3) {
            r3 ? (r3.iterator = n4.iterator, r3.next = n4.next) : r3 = n4, r3.type = e4 ? v : d, r3.nextHandler = t3, r3.counter = 0, r3.done = false, y(this, r3);
          };
          return n3.prototype = e4 ? m : b, n3;
        };
      }, 5792: function(t2, e3, n2) {
        var r2 = n2(8448), o2 = n2(8952), i = n2(3951), u = n2(6752), a = n2(9724), c = n2(8696), s = a(function() {
          var t3 = this.iterator, e4 = i(r2(this.next, t3));
          if (!(this.done = !!e4.done)) return c(t3, this.mapper, [e4.value, this.counter++], true);
        });
        t2.exports = function(t3) {
          return i(this), o2(t3), new s(u(this), { mapper: t3 });
        };
      }, 336: function(t2, e3, n2) {
        var r2, o2, i, u = n2(9957), a = n2(4328), c = n2(1632), s = n2(9368), l = n2(7796), f = n2(6076), p = n2(9972), h = n2(7048), d = p("iterator"), v = false;
        [].keys && ("next" in (i = [].keys()) ? (o2 = l(l(i))) !== Object.prototype && (r2 = o2) : v = true), !c(r2) || u(function() {
          var t3 = {};
          return r2[d].call(t3) !== t3;
        }) ? r2 = {} : h && (r2 = s(r2)), a(r2[d]) || f(r2, d, function() {
          return this;
        }), t2.exports = { IteratorPrototype: r2, BUGGY_SAFARI_ITERATORS: v };
      }, 3556: function(t2, e3, n2) {
        var r2 = n2(7584);
        t2.exports = function(t3) {
          return r2(t3.length);
        };
      }, 5312: function(t2, e3, n2) {
        var r2 = n2(1664), o2 = n2(9957), i = n2(4328), u = n2(5152), a = n2(3476), c = n2(6208).CONFIGURABLE, s = n2(9112), l = n2(9104), f = l.enforce, p = l.get, h = String, d = Object.defineProperty, v = r2("".slice), y = r2("".replace), g = r2([].join), m = a && !o2(function() {
          return 8 !== d(function() {
          }, "length", { value: 8 }).length;
        }), b = String(String).split("String"), x = t2.exports = function(t3, e4, n3) {
          "Symbol(" === v(h(e4), 0, 7) && (e4 = "[" + y(h(e4), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), n3 && n3.getter && (e4 = "get " + e4), n3 && n3.setter && (e4 = "set " + e4), (!u(t3, "name") || c && t3.name !== e4) && (a ? d(t3, "name", { value: e4, configurable: true }) : t3.name = e4), m && n3 && u(n3, "arity") && t3.length !== n3.arity && d(t3, "length", { value: n3.arity });
          try {
            n3 && u(n3, "constructor") && n3.constructor ? a && d(t3, "prototype", { writable: false }) : t3.prototype && (t3.prototype = void 0);
          } catch (o3) {
          }
          var r3 = f(t3);
          return u(r3, "source") || (r3.source = g(b, "string" == typeof e4 ? e4 : "")), t3;
        };
        Function.prototype.toString = x(function() {
          return i(this) && p(this).source || s(this);
        }, "toString");
      }, 1748: function(t2) {
        var e3 = Math.ceil, n2 = Math.floor;
        t2.exports = Math.trunc || function(t3) {
          var r2 = +t3;
          return (r2 > 0 ? n2 : e3)(r2);
        };
      }, 8948: function(t2, e3, n2) {
        var r2 = n2(5016);
        t2.exports = function(t3, e4) {
          return void 0 === t3 ? arguments.length < 2 ? "" : e4 : r2(t3);
        };
      }, 9292: function(t2, e3, n2) {
        var r2 = n2(3476), o2 = n2(1664), i = n2(8448), u = n2(9957), a = n2(1531), c = n2(9392), s = n2(8912), l = n2(4356), f = n2(5712), p = Object.assign, h = Object.defineProperty, d = o2([].concat);
        t2.exports = !p || u(function() {
          if (r2 && 1 !== p({ b: 1 }, p(h({}, "a", { enumerable: true, get: function() {
            h(this, "b", { value: 3, enumerable: false });
          } }), { b: 2 })).b) return true;
          var t3 = {}, e4 = {}, n3 = Symbol("assign detection"), o3 = "abcdefghijklmnopqrst";
          return t3[n3] = 7, o3.split("").forEach(function(t4) {
            e4[t4] = t4;
          }), 7 !== p({}, t3)[n3] || a(p({}, e4)).join("") !== o3;
        }) ? function(t3, e4) {
          for (var n3 = l(t3), o3 = arguments.length, u2 = 1, p2 = c.f, h2 = s.f; o3 > u2; ) for (var v, y = f(arguments[u2++]), g = p2 ? d(a(y), p2(y)) : a(y), m = g.length, b = 0; m > b; ) v = g[b++], r2 && !i(h2, y, v) || (n3[v] = y[v]);
          return n3;
        } : p;
      }, 9368: function(t2, e3, n2) {
        var r2, o2 = n2(3951), i = n2(2056), u = n2(8256), a = n2(2560), c = n2(4168), s = n2(8168), l = n2(6504), f = "prototype", p = "script", h = l("IE_PROTO"), d = function() {
        }, v = function(t3) {
          return "<" + p + ">" + t3 + "</" + p + ">";
        }, y = function(t3) {
          t3.write(v("")), t3.close();
          var e4 = t3.parentWindow.Object;
          return t3 = null, e4;
        }, g = function() {
          try {
            r2 = new ActiveXObject("htmlfile");
          } catch (i2) {
          }
          var t3, e4, n3;
          g = "undefined" != typeof document ? document.domain && r2 ? y(r2) : (e4 = s("iframe"), n3 = "java" + p + ":", e4.style.display = "none", c.appendChild(e4), e4.src = String(n3), (t3 = e4.contentWindow.document).open(), t3.write(v("document.F=Object")), t3.close(), t3.F) : y(r2);
          for (var o3 = u.length; o3--; ) delete g[f][u[o3]];
          return g();
        };
        a[h] = true, t2.exports = Object.create || function(t3, e4) {
          var n3;
          return null !== t3 ? (d[f] = o2(t3), n3 = new d(), d[f] = null, n3[h] = t3) : n3 = g(), void 0 === e4 ? n3 : i.f(n3, e4);
        };
      }, 2056: function(t2, e3, n2) {
        var r2 = n2(3476), o2 = n2(1576), i = n2(8352), u = n2(3951), a = n2(4096), c = n2(1531);
        e3.f = r2 && !o2 ? Object.defineProperties : function(t3, e4) {
          u(t3);
          for (var n3, r3 = a(e4), o3 = c(e4), s = o3.length, l = 0; s > l; ) i.f(t3, n3 = o3[l++], r3[n3]);
          return t3;
        };
      }, 8352: function(t2, e3, n2) {
        var r2 = n2(3476), o2 = n2(9888), i = n2(1576), u = n2(3951), a = n2(88), c = TypeError, s = Object.defineProperty, l = Object.getOwnPropertyDescriptor, f = "enumerable", p = "configurable", h = "writable";
        e3.f = r2 ? i ? function(t3, e4, n3) {
          if (u(t3), e4 = a(e4), u(n3), "function" == typeof t3 && "prototype" === e4 && "value" in n3 && h in n3 && !n3[h]) {
            var r3 = l(t3, e4);
            r3 && r3[h] && (t3[e4] = n3.value, n3 = { configurable: p in n3 ? n3[p] : r3[p], enumerable: f in n3 ? n3[f] : r3[f], writable: false });
          }
          return s(t3, e4, n3);
        } : s : function(t3, e4, n3) {
          if (u(t3), e4 = a(e4), u(n3), o2) try {
            return s(t3, e4, n3);
          } catch (r3) {
          }
          if ("get" in n3 || "set" in n3) throw new c("Accessors not supported");
          return "value" in n3 && (t3[e4] = n3.value), t3;
        };
      }, 9444: function(t2, e3, n2) {
        var r2 = n2(3476), o2 = n2(8448), i = n2(8912), u = n2(9728), a = n2(4096), c = n2(88), s = n2(5152), l = n2(9888), f = Object.getOwnPropertyDescriptor;
        e3.f = r2 ? f : function(t3, e4) {
          if (t3 = a(t3), e4 = c(e4), l) try {
            return f(t3, e4);
          } catch (n3) {
          }
          if (s(t3, e4)) return u(!o2(i.f, t3, e4), t3[e4]);
        };
      }, 5048: function(t2, e3, n2) {
        var r2 = n2(9008), o2 = n2(8256).concat("length", "prototype");
        e3.f = Object.getOwnPropertyNames || function(t3) {
          return r2(t3, o2);
        };
      }, 9392: function(t2, e3) {
        e3.f = Object.getOwnPropertySymbols;
      }, 7796: function(t2, e3, n2) {
        var r2 = n2(5152), o2 = n2(4328), i = n2(4356), u = n2(6504), a = n2(2272), c = u("IE_PROTO"), s = Object, l = s.prototype;
        t2.exports = a ? s.getPrototypeOf : function(t3) {
          var e4 = i(t3);
          if (r2(e4, c)) return e4[c];
          var n3 = e4.constructor;
          return o2(n3) && e4 instanceof n3 ? n3.prototype : e4 instanceof s ? l : null;
        };
      }, 7e3: function(t2, e3, n2) {
        var r2 = n2(1664);
        t2.exports = r2({}.isPrototypeOf);
      }, 9008: function(t2, e3, n2) {
        var r2 = n2(1664), o2 = n2(5152), i = n2(4096), u = n2(2504).indexOf, a = n2(2560), c = r2([].push);
        t2.exports = function(t3, e4) {
          var n3, r3 = i(t3), s = 0, l = [];
          for (n3 in r3) !o2(a, n3) && o2(r3, n3) && c(l, n3);
          for (; e4.length > s; ) o2(r3, n3 = e4[s++]) && (~u(l, n3) || c(l, n3));
          return l;
        };
      }, 1531: function(t2, e3, n2) {
        var r2 = n2(9008), o2 = n2(8256);
        t2.exports = Object.keys || function(t3) {
          return r2(t3, o2);
        };
      }, 8912: function(t2, e3) {
        var n2 = {}.propertyIsEnumerable, r2 = Object.getOwnPropertyDescriptor, o2 = r2 && !n2.call({ 1: 2 }, 1);
        e3.f = o2 ? function(t3) {
          var e4 = r2(this, t3);
          return !!e4 && e4.enumerable;
        } : n2;
      }, 4024: function(t2, e3, n2) {
        var r2 = n2(5288), o2 = n2(3951), i = n2(2096);
        t2.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
          var t3, e4 = false, n3 = {};
          try {
            (t3 = r2(Object.prototype, "__proto__", "set"))(n3, []), e4 = n3 instanceof Array;
          } catch (u) {
          }
          return function(n4, r3) {
            return o2(n4), i(r3), e4 ? t3(n4, r3) : n4.__proto__ = r3, n4;
          };
        }() : void 0);
      }, 7032: function(t2, e3, n2) {
        var r2 = n2(16), o2 = n2(4427);
        t2.exports = r2 ? {}.toString : function() {
          return "[object " + o2(this) + "]";
        };
      }, 2104: function(t2, e3, n2) {
        var r2 = n2(8448), o2 = n2(4328), i = n2(1632), u = TypeError;
        t2.exports = function(t3, e4) {
          var n3, a;
          if ("string" === e4 && o2(n3 = t3.toString) && !i(a = r2(n3, t3))) return a;
          if (o2(n3 = t3.valueOf) && !i(a = r2(n3, t3))) return a;
          if ("string" !== e4 && o2(n3 = t3.toString) && !i(a = r2(n3, t3))) return a;
          throw new u("Can't convert object to primitive value");
        };
      }, 9252: function(t2, e3, n2) {
        var r2 = n2(5232), o2 = n2(1664), i = n2(5048), u = n2(9392), a = n2(3951), c = o2([].concat);
        t2.exports = r2("Reflect", "ownKeys") || function(t3) {
          var e4 = i.f(a(t3)), n3 = u.f;
          return n3 ? c(e4, n3(t3)) : e4;
        };
      }, 584: function(t2, e3, n2) {
        var r2 = n2(8352).f;
        t2.exports = function(t3, e4, n3) {
          n3 in t3 || r2(t3, n3, { configurable: true, get: function() {
            return e4[n3];
          }, set: function(t4) {
            e4[n3] = t4;
          } });
        };
      }, 9092: function(t2, e3, n2) {
        var r2 = n2(8448), o2 = n2(3951), i = n2(4328), u = n2(1888), a = n2(7680), c = TypeError;
        t2.exports = function(t3, e4) {
          var n3 = t3.exec;
          if (i(n3)) {
            var s = r2(n3, t3, e4);
            return null !== s && o2(s), s;
          }
          if ("RegExp" === u(t3)) return r2(a, t3, e4);
          throw new c("RegExp#exec called on incompatible receiver");
        };
      }, 7680: function(t2, e3, n2) {
        var r2, o2, i = n2(8448), u = n2(1664), a = n2(5016), c = n2(8872), s = n2(3548), l = n2(4696), f = n2(9368), p = n2(9104).get, h = n2(8e3), d = n2(9124), v = l("native-string-replace", String.prototype.replace), y = RegExp.prototype.exec, g = y, m = u("".charAt), b = u("".indexOf), x = u("".replace), w = u("".slice), O = (o2 = /b*/g, i(y, r2 = /a/, "a"), i(y, o2, "a"), 0 !== r2.lastIndex || 0 !== o2.lastIndex), S = s.BROKEN_CARET, E = void 0 !== /()??/.exec("")[1];
        (O || E || S || h || d) && (g = function(t3) {
          var e4, n3, r3, o3, u2, s2, l2, h2 = this, d2 = p(h2), I = a(t3), j = d2.raw;
          if (j) return j.lastIndex = h2.lastIndex, e4 = i(g, j, I), h2.lastIndex = j.lastIndex, e4;
          var C = d2.groups, _ = S && h2.sticky, A = i(c, h2), P = h2.source, R = 0, T = I;
          if (_ && (A = x(A, "y", ""), -1 === b(A, "g") && (A += "g"), T = w(I, h2.lastIndex), h2.lastIndex > 0 && (!h2.multiline || h2.multiline && "\n" !== m(I, h2.lastIndex - 1)) && (P = "(?: " + P + ")", T = " " + T, R++), n3 = new RegExp("^(?:" + P + ")", A)), E && (n3 = new RegExp("^" + P + "$(?!\\s)", A)), O && (r3 = h2.lastIndex), o3 = i(y, _ ? n3 : h2, T), _ ? o3 ? (o3.input = w(o3.input, R), o3[0] = w(o3[0], R), o3.index = h2.lastIndex, h2.lastIndex += o3[0].length) : h2.lastIndex = 0 : O && o3 && (h2.lastIndex = h2.global ? o3.index + o3[0].length : r3), E && o3 && o3.length > 1 && i(v, o3[0], n3, function() {
            for (u2 = 1; u2 < arguments.length - 2; u2++) void 0 === arguments[u2] && (o3[u2] = void 0);
          }), o3 && C) for (o3.groups = s2 = f(null), u2 = 0; u2 < C.length; u2++) s2[(l2 = C[u2])[0]] = o3[l2[1]];
          return o3;
        }), t2.exports = g;
      }, 8872: function(t2, e3, n2) {
        var r2 = n2(3951);
        t2.exports = function() {
          var t3 = r2(this), e4 = "";
          return t3.hasIndices && (e4 += "d"), t3.global && (e4 += "g"), t3.ignoreCase && (e4 += "i"), t3.multiline && (e4 += "m"), t3.dotAll && (e4 += "s"), t3.unicode && (e4 += "u"), t3.unicodeSets && (e4 += "v"), t3.sticky && (e4 += "y"), e4;
        };
      }, 3548: function(t2, e3, n2) {
        var r2 = n2(9957), o2 = n2(6420).RegExp, i = r2(function() {
          var t3 = o2("a", "y");
          return t3.lastIndex = 2, null !== t3.exec("abcd");
        }), u = i || r2(function() {
          return !o2("a", "y").sticky;
        }), a = i || r2(function() {
          var t3 = o2("^r", "gy");
          return t3.lastIndex = 2, null !== t3.exec("str");
        });
        t2.exports = { BROKEN_CARET: a, MISSED_STICKY: u, UNSUPPORTED_Y: i };
      }, 8e3: function(t2, e3, n2) {
        var r2 = n2(9957), o2 = n2(6420).RegExp;
        t2.exports = r2(function() {
          var t3 = o2(".", "s");
          return !(t3.dotAll && t3.test("\n") && "s" === t3.flags);
        });
      }, 9124: function(t2, e3, n2) {
        var r2 = n2(9957), o2 = n2(6420).RegExp;
        t2.exports = r2(function() {
          var t3 = o2("(?<a>b)", "g");
          return "b" !== t3.exec("b").groups.a || "bc" !== "b".replace(t3, "$<a>c");
        });
      }, 5436: function(t2, e3, n2) {
        var r2 = n2(9760), o2 = TypeError;
        t2.exports = function(t3) {
          if (r2(t3)) throw new o2("Can't call method on " + t3);
          return t3;
        };
      }, 6504: function(t2, e3, n2) {
        var r2 = n2(4696), o2 = n2(7776), i = r2("keys");
        t2.exports = function(t3) {
          return i[t3] || (i[t3] = o2(t3));
        };
      }, 3976: function(t2, e3, n2) {
        var r2 = n2(7048), o2 = n2(6420), i = n2(4636), u = "__core-js_shared__", a = t2.exports = o2[u] || i(u, {});
        (a.versions || (a.versions = [])).push({ version: "3.36.0", mode: r2 ? "pure" : "global", copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE", source: "https://github.com/zloirock/core-js" });
      }, 4696: function(t2, e3, n2) {
        var r2 = n2(3976);
        t2.exports = function(t3, e4) {
          return r2[t3] || (r2[t3] = e4 || {});
        };
      }, 9764: function(t2, e3, n2) {
        var r2 = n2(1664), o2 = n2(6180), i = n2(5016), u = n2(5436), a = r2("".charAt), c = r2("".charCodeAt), s = r2("".slice), l = function(t3) {
          return function(e4, n3) {
            var r3, l2, f = i(u(e4)), p = o2(n3), h = f.length;
            return p < 0 || p >= h ? t3 ? "" : void 0 : (r3 = c(f, p)) < 55296 || r3 > 56319 || p + 1 === h || (l2 = c(f, p + 1)) < 56320 || l2 > 57343 ? t3 ? a(f, p) : r3 : t3 ? s(f, p, p + 2) : l2 - 56320 + (r3 - 55296 << 10) + 65536;
          };
        };
        t2.exports = { codeAt: l(false), charAt: l(true) };
      }, 772: function(t2, e3, n2) {
        var r2 = n2(8504), o2 = n2(9957), i = n2(6420).String;
        t2.exports = !!Object.getOwnPropertySymbols && !o2(function() {
          var t3 = Symbol("symbol detection");
          return !i(t3) || !(Object(t3) instanceof Symbol) || !Symbol.sham && r2 && r2 < 41;
        });
      }, 2495: function(t2, e3, n2) {
        var r2 = n2(6180), o2 = Math.max, i = Math.min;
        t2.exports = function(t3, e4) {
          var n3 = r2(t3);
          return n3 < 0 ? o2(n3 + e4, 0) : i(n3, e4);
        };
      }, 4096: function(t2, e3, n2) {
        var r2 = n2(5712), o2 = n2(5436);
        t2.exports = function(t3) {
          return r2(o2(t3));
        };
      }, 6180: function(t2, e3, n2) {
        var r2 = n2(1748);
        t2.exports = function(t3) {
          var e4 = +t3;
          return e4 != e4 || 0 === e4 ? 0 : r2(e4);
        };
      }, 7584: function(t2, e3, n2) {
        var r2 = n2(6180), o2 = Math.min;
        t2.exports = function(t3) {
          var e4 = r2(t3);
          return e4 > 0 ? o2(e4, 9007199254740991) : 0;
        };
      }, 4356: function(t2, e3, n2) {
        var r2 = n2(5436), o2 = Object;
        t2.exports = function(t3) {
          return o2(r2(t3));
        };
      }, 7024: function(t2, e3, n2) {
        var r2 = n2(8448), o2 = n2(1632), i = n2(7728), u = n2(4504), a = n2(2104), c = n2(9972), s = TypeError, l = c("toPrimitive");
        t2.exports = function(t3, e4) {
          if (!o2(t3) || i(t3)) return t3;
          var n3, c2 = u(t3, l);
          if (c2) {
            if (void 0 === e4 && (e4 = "default"), n3 = r2(c2, t3, e4), !o2(n3) || i(n3)) return n3;
            throw new s("Can't convert object to primitive value");
          }
          return void 0 === e4 && (e4 = "number"), a(t3, e4);
        };
      }, 88: function(t2, e3, n2) {
        var r2 = n2(7024), o2 = n2(7728);
        t2.exports = function(t3) {
          var e4 = r2(t3, "string");
          return o2(e4) ? e4 : e4 + "";
        };
      }, 16: function(t2, e3, n2) {
        var r2 = {};
        r2[n2(9972)("toStringTag")] = "z", t2.exports = "[object z]" === String(r2);
      }, 5016: function(t2, e3, n2) {
        var r2 = n2(4427), o2 = String;
        t2.exports = function(t3) {
          if ("Symbol" === r2(t3)) throw new TypeError("Cannot convert a Symbol value to a string");
          return o2(t3);
        };
      }, 36: function(t2) {
        var e3 = String;
        t2.exports = function(t3) {
          try {
            return e3(t3);
          } catch (n2) {
            return "Object";
          }
        };
      }, 7776: function(t2, e3, n2) {
        var r2 = n2(1664), o2 = 0, i = Math.random(), u = r2(1 .toString);
        t2.exports = function(t3) {
          return "Symbol(" + (void 0 === t3 ? "" : t3) + ")_" + u(++o2 + i, 36);
        };
      }, 6536: function(t2, e3, n2) {
        var r2 = n2(772);
        t2.exports = r2 && !Symbol.sham && "symbol" == typeof Symbol.iterator;
      }, 1576: function(t2, e3, n2) {
        var r2 = n2(3476), o2 = n2(9957);
        t2.exports = r2 && o2(function() {
          return 42 !== Object.defineProperty(function() {
          }, "prototype", { value: 42, writable: false }).prototype;
        });
      }, 4288: function(t2, e3, n2) {
        var r2 = n2(6420), o2 = n2(4328), i = r2.WeakMap;
        t2.exports = o2(i) && /native code/.test(String(i));
      }, 9972: function(t2, e3, n2) {
        var r2 = n2(6420), o2 = n2(4696), i = n2(5152), u = n2(7776), a = n2(772), c = n2(6536), s = r2.Symbol, l = o2("wks"), f = c ? s.for || s : s && s.withoutSetter || u;
        t2.exports = function(t3) {
          return i(l, t3) || (l[t3] = a && i(s, t3) ? s[t3] : f("Symbol." + t3)), l[t3];
        };
      }, 6488: function(t2, e3, n2) {
        var r2 = n2(5232), o2 = n2(5152), i = n2(3440), u = n2(7e3), a = n2(4024), c = n2(9968), s = n2(584), l = n2(7512), f = n2(8948), p = n2(3480), h = n2(3696), d = n2(3476), v = n2(7048);
        t2.exports = function(t3, e4, n3, y) {
          var g = "stackTraceLimit", m = y ? 2 : 1, b = t3.split("."), x = b[b.length - 1], w = r2.apply(null, b);
          if (w) {
            var O = w.prototype;
            if (!v && o2(O, "cause") && delete O.cause, !n3) return w;
            var S = r2("Error"), E = e4(function(t4, e5) {
              var n4 = f(y ? e5 : t4, void 0), r3 = y ? new w(t4) : new w();
              return void 0 !== n4 && i(r3, "message", n4), h(r3, E, r3.stack, 2), this && u(O, this) && l(r3, this, E), arguments.length > m && p(r3, arguments[m]), r3;
            });
            if (E.prototype = O, "Error" !== x ? a ? a(E, S) : c(E, S, { name: true }) : d && g in w && (s(E, w, g), s(E, w, "prepareStackTrace")), c(E, w), !v) try {
              O.name !== x && i(O, "name", x), O.constructor = E;
            } catch (I) {
            }
            return E;
          }
        };
      }, 7476: function(t2, e3, n2) {
        var r2 = n2(9160), o2 = n2(9957), i = n2(1432), u = n2(1632), a = n2(4356), c = n2(3556), s = n2(4316), l = n2(92), f = n2(2568), p = n2(953), h = n2(9972), d = n2(8504), v = h("isConcatSpreadable"), y = d >= 51 || !o2(function() {
          var t3 = [];
          return t3[v] = false, t3.concat()[0] !== t3;
        }), g = function(t3) {
          if (!u(t3)) return false;
          var e4 = t3[v];
          return void 0 !== e4 ? !!e4 : i(t3);
        };
        r2({ target: "Array", proto: true, arity: 1, forced: !y || !p("concat") }, { concat: function(t3) {
          var e4, n3, r3, o3, i2, u2 = a(this), p2 = f(u2, 0), h2 = 0;
          for (e4 = -1, r3 = arguments.length; e4 < r3; e4++) if (g(i2 = -1 === e4 ? u2 : arguments[e4])) for (o3 = c(i2), s(h2 + o3), n3 = 0; n3 < o3; n3++, h2++) n3 in i2 && l(p2, h2, i2[n3]);
          else s(h2 + 1), l(p2, h2++, i2);
          return p2.length = h2, p2;
        } });
      }, 6932: function(t2, e3, n2) {
        var r2 = n2(9160), o2 = n2(3364).filter;
        r2({ target: "Array", proto: true, forced: !n2(953)("filter") }, { filter: function(t3) {
          return o2(this, t3, arguments.length > 1 ? arguments[1] : void 0);
        } });
      }, 700: function(t2, e3, n2) {
        var r2 = n2(9160), o2 = n2(1664), i = n2(5712), u = n2(4096), a = n2(1496), c = o2([].join);
        r2({ target: "Array", proto: true, forced: i !== Object || !a("join", ",") }, { join: function(t3) {
          return c(u(this), void 0 === t3 ? "," : t3);
        } });
      }, 4456: function(t2, e3, n2) {
        var r2 = n2(9160), o2 = n2(3364).map;
        r2({ target: "Array", proto: true, forced: !n2(953)("map") }, { map: function(t3) {
          return o2(this, t3, arguments.length > 1 ? arguments[1] : void 0);
        } });
      }, 4728: function(t2, e3, n2) {
        var r2 = n2(9160), o2 = n2(4356), i = n2(3556), u = n2(6728), a = n2(4316);
        r2({ target: "Array", proto: true, arity: 1, forced: n2(9957)(function() {
          return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
        }) || !function() {
          try {
            Object.defineProperty([], "length", { writable: false }).push();
          } catch (t3) {
            return t3 instanceof TypeError;
          }
        }() }, { push: function(t3) {
          var e4 = o2(this), n3 = i(e4), r3 = arguments.length;
          a(n3 + r3);
          for (var c = 0; c < r3; c++) e4[n3] = arguments[c], n3++;
          return u(e4, n3), n3;
        } });
      }, 8752: function(t2, e3, n2) {
        var r2 = n2(9160), o2 = n2(6420), i = n2(908), u = n2(6488), a = "WebAssembly", c = o2[a], s = 7 !== new Error("e", { cause: 7 }).cause, l = function(t3, e4) {
          var n3 = {};
          n3[t3] = u(t3, e4, s), r2({ global: true, constructor: true, arity: 1, forced: s }, n3);
        }, f = function(t3, e4) {
          if (c && c[t3]) {
            var n3 = {};
            n3[t3] = u(a + "." + t3, e4, s), r2({ target: a, stat: true, constructor: true, arity: 1, forced: s }, n3);
          }
        };
        l("Error", function(t3) {
          return function(e4) {
            return i(t3, this, arguments);
          };
        }), l("EvalError", function(t3) {
          return function(e4) {
            return i(t3, this, arguments);
          };
        }), l("RangeError", function(t3) {
          return function(e4) {
            return i(t3, this, arguments);
          };
        }), l("ReferenceError", function(t3) {
          return function(e4) {
            return i(t3, this, arguments);
          };
        }), l("SyntaxError", function(t3) {
          return function(e4) {
            return i(t3, this, arguments);
          };
        }), l("TypeError", function(t3) {
          return function(e4) {
            return i(t3, this, arguments);
          };
        }), l("URIError", function(t3) {
          return function(e4) {
            return i(t3, this, arguments);
          };
        }), f("CompileError", function(t3) {
          return function(e4) {
            return i(t3, this, arguments);
          };
        }), f("LinkError", function(t3) {
          return function(e4) {
            return i(t3, this, arguments);
          };
        }), f("RuntimeError", function(t3) {
          return function(e4) {
            return i(t3, this, arguments);
          };
        });
      }, 508: function(t2, e3, n2) {
        var r2 = n2(3476), o2 = n2(6208).EXISTS, i = n2(1664), u = n2(2544), a = Function.prototype, c = i(a.toString), s = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/, l = i(s.exec);
        r2 && !o2 && u(a, "name", { configurable: true, get: function() {
          try {
            return l(s, c(this))[1];
          } catch (t3) {
            return "";
          }
        } });
      }, 232: function(t2, e3, n2) {
        var r2 = n2(9160), o2 = n2(9292);
        r2({ target: "Object", stat: true, arity: 2, forced: Object.assign !== o2 }, { assign: o2 });
      }, 5443: function(t2, e3, n2) {
        var r2 = n2(16), o2 = n2(6076), i = n2(7032);
        r2 || o2(Object.prototype, "toString", i, { unsafe: true });
      }, 880: function(t2, e3, n2) {
        var r2 = n2(9160), o2 = n2(7680);
        r2({ target: "RegExp", proto: true, forced: /./.exec !== o2 }, { exec: o2 });
      }, 9836: function(t2, e3, n2) {
        var r2 = n2(8448), o2 = n2(7176), i = n2(3951), u = n2(9760), a = n2(7584), c = n2(5016), s = n2(5436), l = n2(4504), f = n2(4764), p = n2(9092);
        o2("match", function(t3, e4, n3) {
          return [function(e5) {
            var n4 = s(this), o3 = u(e5) ? void 0 : l(e5, t3);
            return o3 ? r2(o3, e5, n4) : new RegExp(e5)[t3](c(n4));
          }, function(t4) {
            var r3 = i(this), o3 = c(t4), u2 = n3(e4, r3, o3);
            if (u2.done) return u2.value;
            if (!r3.global) return p(r3, o3);
            var s2 = r3.unicode;
            r3.lastIndex = 0;
            for (var l2, h = [], d = 0; null !== (l2 = p(r3, o3)); ) {
              var v = c(l2[0]);
              h[d] = v, "" === v && (r3.lastIndex = f(o3, a(r3.lastIndex), s2)), d++;
            }
            return 0 === d ? null : h;
          }];
        });
      }, 3536: function(t2, e3, n2) {
        var r2 = n2(9160), o2 = n2(6420), i = n2(6100), u = n2(3951), a = n2(4328), c = n2(7796), s = n2(2544), l = n2(92), f = n2(9957), p = n2(5152), h = n2(9972), d = n2(336).IteratorPrototype, v = n2(3476), y = n2(7048), g = "constructor", m = "Iterator", b = h("toStringTag"), x = TypeError, w = o2[m], O = y || !a(w) || w.prototype !== d || !f(function() {
          w({});
        }), S = function() {
          if (i(this, d), c(this) === d) throw new x("Abstract class Iterator not directly constructable");
        }, E = function(t3, e4) {
          v ? s(d, t3, { configurable: true, get: function() {
            return e4;
          }, set: function(e5) {
            if (u(this), this === d) throw new x("You can't redefine this property");
            p(this, t3) ? this[t3] = e5 : l(this, t3, e5);
          } }) : d[t3] = e4;
        };
        p(d, b) || E(b, m), !O && p(d, g) && d[g] !== Object || E(g, S), S.prototype = d, r2({ global: true, constructor: true, forced: O }, { Iterator: S });
      }, 2144: function(t2, e3, n2) {
        var r2 = n2(9160), o2 = n2(8448), i = n2(8952), u = n2(3951), a = n2(6752), c = n2(9724), s = n2(8696), l = n2(7048), f = c(function() {
          for (var t3, e4, n3 = this.iterator, r3 = this.predicate, i2 = this.next; ; ) {
            if (t3 = u(o2(i2, n3)), this.done = !!t3.done) return;
            if (e4 = t3.value, s(n3, r3, [e4, this.counter++], true)) return e4;
          }
        });
        r2({ target: "Iterator", proto: true, real: true, forced: l }, { filter: function(t3) {
          return u(this), i(t3), new f(a(this), { predicate: t3 });
        } });
      }, 9080: function(t2, e3, n2) {
        var r2 = n2(9160), o2 = n2(5792);
        r2({ target: "Iterator", proto: true, real: true, forced: n2(7048) }, { map: o2 });
      } }, n = {};
      function r(t2) {
        var o2 = n[t2];
        if (void 0 !== o2) return o2.exports;
        var i = n[t2] = { exports: {} };
        return e2[t2].call(i.exports, i, i.exports, r), i.exports;
      }
      r.d = function(t2, e3) {
        for (var n2 in e3) r.o(e3, n2) && !r.o(t2, n2) && Object.defineProperty(t2, n2, { enumerable: true, get: e3[n2] });
      }, r.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t2) {
          if ("object" == typeof window) return window;
        }
      }(), r.o = function(t2, e3) {
        return Object.prototype.hasOwnProperty.call(t2, e3);
      }, r.r = function(t2) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
      };
      var o = {};
      return function() {
        r.r(o), r.d(o, { default: function() {
          return f;
        } });
        r(8752), r(6932), r(700), r(4456), r(4728), r(508), r(232), r(5443), r(880), r(9836), r(3536), r(2144), r(9080);
        var t2 = r(680);
        r(7476);
        function e3(t3, n3) {
          return e3 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e4) {
            return t4.__proto__ = e4, t4;
          }, e3(t3, n3);
        }
        var n2 = function(n3) {
          var r2, o2;
          function i2() {
            for (var t3, e4 = arguments.length, r3 = new Array(e4), o3 = 0; o3 < e4; o3++) r3[o3] = arguments[o3];
            return (t3 = n3.call.apply(n3, [this].concat(r3)) || this).state = { bump: false, debounced: false }, t3;
          }
          o2 = n3, (r2 = i2).prototype = Object.create(o2.prototype), r2.prototype.constructor = r2, e3(r2, o2);
          var u2 = i2.prototype;
          return u2.componentWillMount = function() {
            var t3, e4, r3, o3 = this;
            this.debounceStatusUpdate = (t3 = function() {
              if (!o3.state.debounced) {
                var t4 = !o3.props.isInFocus || o3.props.validChoiceMade;
                o3.setState(function(e5) {
                  return { bump: !e5.bump, debounced: true, silenced: t4 };
                });
              }
            }, e4 = 1400, function() {
              var o4 = this, i3 = arguments;
              clearTimeout(r3), r3 = setTimeout(function() {
                r3 = null, t3.apply(o4, i3);
              }, e4);
            });
          }, u2.componentWillReceiveProps = function(t3) {
            t3.queryLength;
            this.setState({ debounced: false });
          }, u2.render = function() {
            var e4 = this.props, n4 = e4.id, r3 = e4.length, o3 = e4.queryLength, i3 = e4.minQueryLength, u3 = e4.selectedOption, a2 = e4.selectedOptionIndex, c2 = e4.tQueryTooShort, s2 = e4.tNoResults, l2 = e4.tSelectedOption, f2 = e4.tResults, p = e4.className, h = this.state, d = h.bump, v = h.debounced, y = h.silenced, g = o3 < i3, m = 0 === r3, b = u3 ? l2(u3, r3, a2) : "", x = null;
            return x = g ? c2(i3) : m ? s2() : f2(r3, b), this.debounceStatusUpdate(), (0, t2.createElement)("div", { className: p, style: { border: "0", clip: "rect(0 0 0 0)", height: "1px", marginBottom: "-1px", marginRight: "-1px", overflow: "hidden", padding: "0", position: "absolute", whiteSpace: "nowrap", width: "1px" } }, (0, t2.createElement)("div", { id: n4 + "__status--A", role: "status", "aria-atomic": "true", "aria-live": "polite" }, !y && v && d ? x : ""), (0, t2.createElement)("div", { id: n4 + "__status--B", role: "status", "aria-atomic": "true", "aria-live": "polite" }, y || !v || d ? "" : x));
          }, i2;
        }(t2.Component);
        n2.defaultProps = { tQueryTooShort: function(t3) {
          return "Type in " + t3 + " or more characters for results";
        }, tNoResults: function() {
          return "No search results";
        }, tSelectedOption: function(t3, e4, n3) {
          return t3 + " " + (n3 + 1) + " of " + e4 + " is highlighted";
        }, tResults: function(t3, e4) {
          return t3 + " " + (1 === t3 ? "result" : "results") + " " + (1 === t3 ? "is" : "are") + " available. " + e4;
        } };
        var i = function(e4) {
          var n3 = e4.className;
          return (0, t2.createElement)("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", className: n3, focusable: "false" }, (0, t2.createElement)("g", { stroke: "none", fill: "none", "fill-rule": "evenodd" }, (0, t2.createElement)("polygon", { fill: "#000000", points: "0 0 22 0 11 17" })));
        };
        function u() {
          return u = Object.assign ? Object.assign.bind() : function(t3) {
            for (var e4 = 1; e4 < arguments.length; e4++) {
              var n3 = arguments[e4];
              for (var r2 in n3) Object.prototype.hasOwnProperty.call(n3, r2) && (t3[r2] = n3[r2]);
            }
            return t3;
          }, u.apply(this, arguments);
        }
        function a(t3) {
          if (void 0 === t3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t3;
        }
        function c(t3, e4) {
          return c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t4, e5) {
            return t4.__proto__ = e5, t4;
          }, c(t3, e4);
        }
        var s = { 13: "enter", 27: "escape", 32: "space", 38: "up", 40: "down" };
        function l() {
          return "undefined" != typeof navigator && !(!navigator.userAgent.match(/(iPod|iPhone|iPad)/g) || !navigator.userAgent.match(/AppleWebKit/g));
        }
        var f = function(e4) {
          var r2, o2;
          function i2(t3) {
            var n3;
            return (n3 = e4.call(this, t3) || this).elementReferences = {}, n3.state = { focused: null, hovered: null, menuOpen: false, options: t3.defaultValue ? [t3.defaultValue] : [], query: t3.defaultValue, validChoiceMade: false, selected: null, ariaHint: true }, n3.handleComponentBlur = n3.handleComponentBlur.bind(a(n3)), n3.handleKeyDown = n3.handleKeyDown.bind(a(n3)), n3.handleUpArrow = n3.handleUpArrow.bind(a(n3)), n3.handleDownArrow = n3.handleDownArrow.bind(a(n3)), n3.handleEnter = n3.handleEnter.bind(a(n3)), n3.handlePrintableKey = n3.handlePrintableKey.bind(a(n3)), n3.handleListMouseLeave = n3.handleListMouseLeave.bind(a(n3)), n3.handleOptionBlur = n3.handleOptionBlur.bind(a(n3)), n3.handleOptionClick = n3.handleOptionClick.bind(a(n3)), n3.handleOptionFocus = n3.handleOptionFocus.bind(a(n3)), n3.handleOptionMouseDown = n3.handleOptionMouseDown.bind(a(n3)), n3.handleOptionMouseEnter = n3.handleOptionMouseEnter.bind(a(n3)), n3.handleInputBlur = n3.handleInputBlur.bind(a(n3)), n3.handleInputChange = n3.handleInputChange.bind(a(n3)), n3.handleInputClick = n3.handleInputClick.bind(a(n3)), n3.handleInputFocus = n3.handleInputFocus.bind(a(n3)), n3.pollInputElement = n3.pollInputElement.bind(a(n3)), n3.getDirectInputChanges = n3.getDirectInputChanges.bind(a(n3)), n3;
          }
          o2 = e4, (r2 = i2).prototype = Object.create(o2.prototype), r2.prototype.constructor = r2, c(r2, o2);
          var f2 = i2.prototype;
          return f2.isQueryAnOption = function(t3, e5) {
            var n3 = this;
            return -1 !== e5.map(function(t4) {
              return n3.templateInputValue(t4).toLowerCase();
            }).indexOf(t3.toLowerCase());
          }, f2.componentDidMount = function() {
            this.pollInputElement();
          }, f2.componentWillUnmount = function() {
            clearTimeout(this.$pollInput);
          }, f2.pollInputElement = function() {
            var t3 = this;
            this.getDirectInputChanges(), this.$pollInput = setTimeout(function() {
              t3.pollInputElement();
            }, 100);
          }, f2.getDirectInputChanges = function() {
            var t3 = this.elementReferences[-1];
            t3 && t3.value !== this.state.query && this.handleInputChange({ target: { value: t3.value } });
          }, f2.componentDidUpdate = function(t3, e5) {
            var n3 = this.state.focused, r3 = null === n3, o3 = e5.focused !== n3;
            o3 && !r3 && this.elementReferences[n3].focus();
            var i3 = -1 === n3, u2 = o3 && null === e5.focused;
            if (i3 && u2) {
              var a2 = this.elementReferences[n3];
              a2.setSelectionRange(0, a2.value.length);
            }
          }, f2.hasAutoselect = function() {
            return !l() && this.props.autoselect;
          }, f2.templateInputValue = function(t3) {
            var e5 = this.props.templates && this.props.templates.inputValue;
            return e5 ? e5(t3) : t3;
          }, f2.templateSuggestion = function(t3) {
            var e5 = this.props.templates && this.props.templates.suggestion;
            return e5 ? e5(t3) : t3;
          }, f2.handleComponentBlur = function(t3) {
            var e5, n3 = this.state, r3 = n3.options, o3 = n3.query, i3 = n3.selected;
            this.props.confirmOnBlur ? (e5 = t3.query || o3, this.props.onConfirm(r3[i3])) : e5 = o3, this.setState({ focused: null, menuOpen: t3.menuOpen || false, query: e5, selected: null, validChoiceMade: this.isQueryAnOption(e5, r3) });
          }, f2.handleListMouseLeave = function(t3) {
            this.setState({ hovered: null });
          }, f2.handleOptionBlur = function(t3, e5) {
            var n3 = this.state, r3 = n3.focused, o3 = n3.menuOpen, i3 = n3.options, u2 = n3.selected, a2 = null === t3.relatedTarget, c2 = t3.relatedTarget === this.elementReferences[-1], s2 = r3 !== e5 && -1 !== r3;
            if (!s2 && a2 || !(s2 || c2)) {
              var f3 = o3 && l();
              this.handleComponentBlur({ menuOpen: f3, query: this.templateInputValue(i3[u2]) });
            }
          }, f2.handleInputBlur = function(t3) {
            var e5 = this.state, n3 = e5.focused, r3 = e5.menuOpen, o3 = e5.options, i3 = e5.query, u2 = e5.selected;
            if (!(-1 !== n3)) {
              var a2 = r3 && l(), c2 = l() ? i3 : this.templateInputValue(o3[u2]);
              this.handleComponentBlur({ menuOpen: a2, query: c2 });
            }
          }, f2.handleInputChange = function(t3) {
            var e5 = this, n3 = this.props, r3 = n3.minLength, o3 = n3.source, i3 = n3.showAllValues, u2 = this.hasAutoselect(), a2 = t3.target.value, c2 = 0 === a2.length, s2 = this.state.query !== a2, l2 = a2.length >= r3;
            this.setState({ query: a2, ariaHint: c2 }), i3 || !c2 && s2 && l2 ? o3(a2, function(t4) {
              var n4 = t4.length > 0;
              e5.setState({ menuOpen: n4, options: t4, selected: u2 && n4 ? 0 : -1, validChoiceMade: false });
            }) : !c2 && l2 || this.setState({ menuOpen: false, options: [] });
          }, f2.handleInputClick = function(t3) {
            this.handleInputChange(t3);
          }, f2.handleInputFocus = function(t3) {
            var e5 = this.state, n3 = e5.query, r3 = e5.validChoiceMade, o3 = e5.options, i3 = this.props.minLength, u2 = !r3 && n3.length >= i3 && o3.length > 0;
            u2 ? this.setState(function(t4) {
              var e6 = t4.menuOpen;
              return { focused: -1, menuOpen: u2 || e6, selected: -1 };
            }) : this.setState({ focused: -1 });
          }, f2.handleOptionFocus = function(t3) {
            this.setState({ focused: t3, hovered: null, selected: t3 });
          }, f2.handleOptionMouseEnter = function(t3, e5) {
            l() || this.setState({ hovered: e5 });
          }, f2.handleOptionClick = function(t3, e5) {
            var n3 = this.state.options[e5], r3 = this.templateInputValue(n3);
            this.props.onConfirm(n3), this.setState({ focused: -1, hovered: null, menuOpen: false, query: r3, selected: -1, validChoiceMade: true }), this.forceUpdate();
          }, f2.handleOptionMouseDown = function(t3) {
            t3.preventDefault();
          }, f2.handleUpArrow = function(t3) {
            t3.preventDefault();
            var e5 = this.state, n3 = e5.menuOpen, r3 = e5.selected;
            -1 !== r3 && n3 && this.handleOptionFocus(r3 - 1);
          }, f2.handleDownArrow = function(t3) {
            var e5 = this;
            if (t3.preventDefault(), this.props.showAllValues && false === this.state.menuOpen) t3.preventDefault(), this.props.source("", function(t4) {
              e5.setState({ menuOpen: true, options: t4, selected: 0, focused: 0, hovered: null });
            });
            else if (true === this.state.menuOpen) {
              var n3 = this.state, r3 = n3.menuOpen, o3 = n3.options, i3 = n3.selected;
              i3 !== o3.length - 1 && r3 && this.handleOptionFocus(i3 + 1);
            }
          }, f2.handleSpace = function(t3) {
            var e5 = this;
            this.props.showAllValues && false === this.state.menuOpen && "" === this.state.query && (t3.preventDefault(), this.props.source("", function(t4) {
              e5.setState({ menuOpen: true, options: t4 });
            })), -1 !== this.state.focused && (t3.preventDefault(), this.handleOptionClick(t3, this.state.focused));
          }, f2.handleEnter = function(t3) {
            this.state.menuOpen && (t3.preventDefault(), this.state.selected >= 0 && this.handleOptionClick(t3, this.state.selected));
          }, f2.handlePrintableKey = function(t3) {
            var e5 = this.elementReferences[-1];
            t3.target === e5 || e5.focus();
          }, f2.handleKeyDown = function(t3) {
            switch (s[t3.keyCode]) {
              case "up":
                this.handleUpArrow(t3);
                break;
              case "down":
                this.handleDownArrow(t3);
                break;
              case "space":
                this.handleSpace(t3);
                break;
              case "enter":
                this.handleEnter(t3);
                break;
              case "escape":
                this.handleComponentBlur({ query: this.state.query });
                break;
              default:
                ((e5 = t3.keyCode) > 47 && e5 < 58 || 32 === e5 || 8 === e5 || e5 > 64 && e5 < 91 || e5 > 95 && e5 < 112 || e5 > 185 && e5 < 193 || e5 > 218 && e5 < 223) && this.handlePrintableKey(t3);
            }
            var e5;
          }, f2.render = function() {
            var e5, r3 = this, o3 = this.props, i3 = o3.cssNamespace, a2 = o3.displayMenu, c2 = o3.id, s2 = o3.minLength, f3 = o3.name, p = o3.placeholder, h = o3.required, d = o3.showAllValues, v = o3.tNoResults, y = o3.tStatusQueryTooShort, g = o3.tStatusNoResults, m = o3.tStatusSelectedOption, b = o3.tStatusResults, x = o3.tAssistiveHint, w = o3.dropdownArrow, O = o3.menuAttributes, S = o3.inputClasses, E = o3.hintClasses, I = o3.menuClasses, j = this.state, C = j.focused, _ = j.hovered, A = j.menuOpen, P = j.options, R = j.query, T = j.selected, k = j.ariaHint, M = j.validChoiceMade, D = this.hasAutoselect(), N = -1 === C, F = 0 === P.length, L = 0 !== R.length, B = R.length >= s2, q = this.props.showNoOptionsFound && N && F && L && B, V = i3 + "__wrapper", U = i3 + "__status", K = i3 + "__dropdown-arrow-down", H = -1 !== C && null !== C, W = i3 + "__option", z = i3 + "__hint", Q = this.templateInputValue(P[T]), G = Q && 0 === Q.toLowerCase().indexOf(R.toLowerCase()) && D ? R + Q.substr(R.length) : "", $ = c2 + "__assistiveHint", Y = { "aria-describedby": k ? $ : null, "aria-expanded": A ? "true" : "false", "aria-activedescendant": H ? c2 + "__option--" + C : null, "aria-controls": c2 + "__listbox", "aria-autocomplete": this.hasAutoselect() ? "both" : "list" };
            d && "string" == typeof (e5 = w({ className: K })) && (e5 = (0, t2.createElement)("div", { className: i3 + "__dropdown-arrow-down-wrapper", dangerouslySetInnerHTML: { __html: e5 } }));
            var X = i3 + "__input", J = [X, this.props.showAllValues ? X + "--show-all-values" : X + "--default"];
            null !== C && J.push(X + "--focused"), S && J.push(S);
            var Z = i3 + "__menu", tt = [Z, Z + "--" + a2, Z + "--" + (A || q ? "visible" : "hidden")];
            I && tt.push(I), (null != O && O.class || null != O && O.className) && tt.push((null == O ? void 0 : O.class) || (null == O ? void 0 : O.className));
            var et = Object.assign({ "aria-labelledby": c2 }, O, { id: c2 + "__listbox", role: "listbox", className: tt.join(" "), onMouseLeave: this.handleListMouseLeave });
            return delete et.class, (0, t2.createElement)("div", { className: V, onKeyDown: this.handleKeyDown }, (0, t2.createElement)(n2, { id: c2, length: P.length, queryLength: R.length, minQueryLength: s2, selectedOption: this.templateInputValue(P[T]), selectedOptionIndex: T, validChoiceMade: M, isInFocus: null !== this.state.focused, tQueryTooShort: y, tNoResults: g, tSelectedOption: m, tResults: b, className: U }), G && (0, t2.createElement)("span", null, (0, t2.createElement)("input", { className: [z, null === E ? S : E].filter(Boolean).join(" "), readonly: true, tabIndex: "-1", value: G })), (0, t2.createElement)("input", u({}, Y, { autoComplete: "off", className: J.join(" "), id: c2, onClick: this.handleInputClick, onBlur: this.handleInputBlur }, { onChange: this.handleInputChange }, { onFocus: this.handleInputFocus, name: f3, placeholder: p, ref: function(t3) {
              r3.elementReferences[-1] = t3;
            }, type: "text", role: "combobox", required: h, value: R })), e5, (0, t2.createElement)("ul", et, P.map(function(e6, n3) {
              var o4 = (-1 === C ? T === n3 : C === n3) && null === _ ? " " + W + "--focused" : "", i4 = n3 % 2 ? " " + W + "--odd" : "", u2 = l() ? "<span id=" + c2 + "__option-suffix--" + n3 + ' style="border:0;clip:rect(0 0 0 0);height:1px;marginBottom:-1px;marginRight:-1px;overflow:hidden;padding:0;position:absolute;whiteSpace:nowrap;width:1px"> ' + (n3 + 1) + " of " + P.length + "</span>" : "";
              return (0, t2.createElement)("li", { "aria-selected": C === n3 ? "true" : "false", className: "" + W + o4 + i4, dangerouslySetInnerHTML: { __html: r3.templateSuggestion(e6) + u2 }, id: c2 + "__option--" + n3, key: n3, onBlur: function(t3) {
                return r3.handleOptionBlur(t3, n3);
              }, onClick: function(t3) {
                return r3.handleOptionClick(t3, n3);
              }, onMouseDown: r3.handleOptionMouseDown, onMouseEnter: function(t3) {
                return r3.handleOptionMouseEnter(t3, n3);
              }, ref: function(t3) {
                r3.elementReferences[n3] = t3;
              }, role: "option", tabIndex: "-1", "aria-posinset": n3 + 1, "aria-setsize": P.length });
            }), q && (0, t2.createElement)("li", { className: W + " " + W + "--no-results", role: "option", "aria-disabled": "true" }, v())), (0, t2.createElement)("span", { id: $, style: { display: "none" } }, x()));
          }, i2;
        }(t2.Component);
        f.defaultProps = { autoselect: false, cssNamespace: "autocomplete", defaultValue: "", displayMenu: "inline", minLength: 0, name: "input-autocomplete", placeholder: "", onConfirm: function() {
        }, confirmOnBlur: true, showNoOptionsFound: true, showAllValues: false, required: false, tNoResults: function() {
          return "No results found";
        }, tAssistiveHint: function() {
          return "When autocomplete results are available use up and down arrows to review and enter to select.  Touch device users, explore by touch or with swipe gestures.";
        }, dropdownArrow: i, menuAttributes: {}, inputClasses: null, hintClasses: null, menuClasses: null };
      }(), o;
    }();
  });
})(accessibleAutocomplete_react_min);
var accessibleAutocomplete_react_minExports = accessibleAutocomplete_react_min.exports;
var react = accessibleAutocomplete_react_minExports;
const BaseAutocomplete = /* @__PURE__ */ getDefaultExportFromCjs(react);
const tAssistiveHintDefault = () => "Quando i risultati del completamento automatico sono disponibili, usa le frecce su e giù per rivedere e Invio per selezionare. Utenti di dispositivi touch, esplora tramite tocco o con gesti di scorrimento";
const tNoResultsDefault = () => "Nessun risultato trovato";
const tStatusQueryTooShortDefault = (minQueryLength) => `Digita ${minQueryLength} o più caratteri per mostrare le opzioni di ricerca`;
const tStatusNoResultsDefault = () => "Nessun risultato di ricerca";
const tStatusSelectedOptionDefault = (selectedOption, length, index) => `${selectedOption} ${index + 1} di ${length} è sottolineato`;
const tStatusResultsDefault = (length, contentSelectedOption) => {
  const words = {
    result: length === 1 ? "risultato" : "risultati",
    is: length === 1 ? "è" : "sono",
    available: length === 1 ? "disponibile" : "disponibili"
  };
  return `${length} ${words.result} ${words.is} ${words.available}. ${contentSelectedOption}`;
};
const Autocomplete = ({
  tAssistiveHint = tAssistiveHintDefault,
  tNoResults = tNoResultsDefault,
  tStatusQueryTooShort = tStatusQueryTooShortDefault,
  tStatusNoResults = tStatusNoResultsDefault,
  tStatusSelectedOption = tStatusSelectedOptionDefault,
  tStatusResults = tStatusResultsDefault,
  placeholder = "",
  defaultValue = "",
  displayMenu = "inline",
  source,
  validationText,
  onConfirm,
  ...attributes
}) => {
  const { id, valid } = attributes;
  const validityCheck = valid === true || valid === false;
  reactExports.useEffect(() => {
    var _a, _b;
    const inputElement = document.getElementById(id);
    const labelElement = (_b = (_a = inputElement == null ? void 0 : inputElement.parentElement) == null ? void 0 : _a.parentElement) == null ? void 0 : _b.getElementsByTagName("label")[0];
    if (inputElement.value !== "") {
      labelElement == null ? void 0 : labelElement.classList.add("active");
    }
    inputElement == null ? void 0 : inputElement.addEventListener("focus", () => {
      labelElement == null ? void 0 : labelElement.classList.add("active");
    });
    inputElement == null ? void 0 : inputElement.addEventListener("blur", () => {
      if (inputElement.value === "") {
        labelElement == null ? void 0 : labelElement.classList.remove("active");
      }
      if (onConfirm) {
        onConfirm(inputElement.value);
      }
    });
  }, [id]);
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("label", { htmlFor: attributes.id }, attributes.label), /* @__PURE__ */ e.createElement(
    BaseAutocomplete,
    {
      source,
      placeholder,
      defaultValue,
      displayMenu,
      tAssistiveHint,
      tNoResults,
      tStatusQueryTooShort,
      tStatusNoResults,
      tStatusSelectedOption,
      tStatusResults,
      onConfirm,
      inputClasses: `form-control ${validityCheck && (valid === false ? "is-invalid" : "just-validate-success-field")}`,
      showNoOptionsFound: true,
      hintClasses: "app-hint",
      autoselect: false,
      showAllValues: false,
      templates: void 0,
      confirmOnBlur: false,
      menuAttributes: null,
      menuClasses: null,
      ...attributes
    }
  ), /* @__PURE__ */ e.createElement("div", { className: "form-feedback just-validate-error-label form-text form-feedback just-validate-error-label" }, !valid && validationText));
};
Autocomplete.__docgenInfo = { "description": "", "methods": [], "displayName": "Autocomplete", "props": { "id": { "required": true, "tsType": { "name": "string" }, "description": "Identificativo" }, "label": { "required": true, "tsType": { "name": "string" }, "description": "Label" }, "source": { "required": true, "tsType": { "name": "signature", "type": "function", "raw": "(query: string, syncResults: () => void) => void", "signature": { "arguments": [{ "type": { "name": "string" }, "name": "query" }, { "type": { "name": "signature", "type": "function", "raw": "() => void", "signature": { "arguments": [], "return": { "name": "void" } } }, "name": "syncResults" }], "return": { "name": "void" } } }, "description": "Valori all'interno della select" }, "onConfirm": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "(value: string) => void", "signature": { "arguments": [{ "type": { "name": "string" }, "name": "value" }], "return": { "name": "void" } } }, "description": "Valori chiave - valore all'interno della select" }, "placeholder": { "required": false, "tsType": { "name": "string" }, "description": "Placeholder (default: ``)", "defaultValue": { "value": "''", "computed": false } }, "defaultValue": { "required": false, "tsType": { "name": "string" }, "description": "Valore di default (default: ``)", "defaultValue": { "value": "''", "computed": false } }, "displayMenu": { "required": false, "tsType": { "name": "string" }, "description": "Modalità display menu (default: `inline`)", "defaultValue": { "value": "'inline'", "computed": false } }, "valid": { "required": false, "tsType": { "name": "boolean" }, "description": "Utilizzare per mostrare il successo nella validazione del valore nel campo Input" }, "validationText": { "required": false, "tsType": { "name": "string" }, "description": "Testo di validazione per l'elemento del moduleo form." }, "tNoResults": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "() => string", "signature": { "arguments": [], "return": { "name": "string" } } }, "description": "Funzione ritornante stringa in caso di nessun risultato", "defaultValue": { "value": "() => 'Nessun risultato trovato'", "computed": false } }, "tAssistiveHint": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "() => string", "signature": { "arguments": [], "return": { "name": "string" } } }, "description": "Funzione ritornante stringa di suggerimento", "defaultValue": { "value": "() =>\n'Quando i risultati del completamento automatico sono disponibili, usa le frecce su e giù per rivedere e Invio per selezionare. Utenti di dispositivi touch, esplora tramite tocco o con gesti di scorrimento'", "computed": false } }, "tStatusQueryTooShort": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "() => string", "signature": { "arguments": [], "return": { "name": "string" } } }, "description": "Funzione ritornante stringa se la query è troppo corta", "defaultValue": { "value": "(minQueryLength: number) =>\n`Digita ${minQueryLength} o più caratteri per mostrare le opzioni di ricerca`", "computed": false } }, "tStatusNoResults": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "() => string", "signature": { "arguments": [], "return": { "name": "string" } } }, "description": "Funzione ritornante stringa se non ci sono risultati di ricerca", "defaultValue": { "value": "() => 'Nessun risultato di ricerca'", "computed": false } }, "tStatusSelectedOption": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "() => string", "signature": { "arguments": [], "return": { "name": "string" } } }, "description": "Funzione ritornante stringa che identifica l'opzione selezionata", "defaultValue": { "value": "(selectedOption: number, length: number, index: number) =>\n`${selectedOption} ${index + 1} di ${length} è sottolineato`", "computed": false } }, "tStatusResults": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "() => string", "signature": { "arguments": [], "return": { "name": "string" } } }, "description": "Funzione ritornante stringa che identifica i risultati", "defaultValue": { "value": "(length: number, contentSelectedOption: number) => {\n  const words = {\n    result: length === 1 ? 'risultato' : 'risultati',\n    is: length === 1 ? 'è' : 'sono',\n    available: length === 1 ? 'disponibile' : 'disponibili'\n  };\n\n  return `${length} ${words.result} ${words.is} ${words.available}. ${contentSelectedOption}`;\n}", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Button" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  Autocomplete as A
};
