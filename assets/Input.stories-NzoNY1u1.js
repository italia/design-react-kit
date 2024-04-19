var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J;
import { c as commonjsGlobal, g as getDefaultExportFromCjs } from "./_commonjsHelpers-LQfde5yM.js";
import { R as React, r as reactExports } from "./index-CQCy530F.js";
import { u as useFocus, g as getValidationTextControlClass, a as getClasses, b as InputContainer, I as Input } from "./Input-rmw1t2PN.js";
import { F as FormGroup } from "./FormGroup-CLeJ8HCL.js";
import { I as Icon } from "./Icon-Dropx6Zw.js";
const TextArea = ({
  id,
  className,
  cssModule,
  innerRef,
  label,
  validationText,
  infoText,
  placeholder,
  normalized,
  value,
  wrapperClassName: originalWrapperClass,
  valid,
  testId,
  ...attributes
}) => {
  const { toggleFocusLabel, toggleBlurLabel, isFocused } = useFocus({
    onFocus: attributes.onFocus,
    onBlur: attributes.onBlur
  });
  const validationTextControlClass = getValidationTextControlClass({ valid }, cssModule);
  const extraAttributes = {};
  const infoId = id ? `${id}Description` : void 0;
  if (id) {
    extraAttributes["aria-describedby"] = infoId;
  }
  const { activeClass, extraLabelClass, validationTextClass, inputClasses, wrapperClass } = getClasses(
    className,
    "textarea",
    {
      valid,
      placeholder,
      value,
      label,
      validationText,
      normalized: Boolean(normalized),
      validationTextControlClass,
      isFocused,
      originalWrapperClass
    },
    cssModule
  );
  const sharedAttributes = {
    id,
    onFocus: toggleFocusLabel,
    onBlur: toggleBlurLabel,
    value,
    ref: innerRef
  };
  const containerProps = {
    id,
    infoId,
    infoText,
    activeClass,
    extraLabelClass,
    label,
    validationTextClass,
    validationText,
    wrapperClass
  };
  if (placeholder) {
    return /* @__PURE__ */ React.createElement(InputContainer, { ...containerProps }, /* @__PURE__ */ React.createElement(
      "textarea",
      {
        ...attributes,
        ...extraAttributes,
        ...sharedAttributes,
        className: inputClasses,
        placeholder,
        "data-testid": testId
      }
    ));
  }
  if (normalized) {
    return /* @__PURE__ */ React.createElement(InputContainer, { ...containerProps }, /* @__PURE__ */ React.createElement(
      "textarea",
      {
        ...attributes,
        ...extraAttributes,
        ...sharedAttributes,
        className: inputClasses,
        readOnly: true,
        "data-testid": testId
      }
    ));
  }
  if (label || validationText) {
    return /* @__PURE__ */ React.createElement(InputContainer, { ...containerProps }, /* @__PURE__ */ React.createElement(
      "textarea",
      {
        ...attributes,
        ...extraAttributes,
        ...sharedAttributes,
        className: inputClasses,
        "data-testid": testId
      }
    ));
  }
  return /* @__PURE__ */ React.createElement(
    "textarea",
    {
      ...attributes,
      ...extraAttributes,
      className: inputClasses,
      ...sharedAttributes,
      ref: innerRef,
      "data-testid": testId
    }
  );
};
TextArea.__docgenInfo = { "description": "", "methods": [], "displayName": "TextArea", "props": { "label": { "required": false, "tsType": { "name": "union", "raw": "string | ReactNode", "elements": [{ "name": "string" }, { "name": "ReactNode" }] }, "description": "Etichetta del campo TextArea." }, "placeholder": { "required": false, "tsType": { "name": "string" }, "description": "Testo di esempio da utilizzare per il campo." }, "validationText": { "required": false, "tsType": { "name": "string" }, "description": "Testo di validazione per l'elemento del moduleo" }, "infoText": { "required": false, "tsType": { "name": "string" }, "description": "Testo di aiuto per l'elemento del moduleo form. Richiede che il componente `TextArea` abbia la prop `id` impostata." }, "value": { "required": false, "tsType": { "name": "union", "raw": "string | number", "elements": [{ "name": "string" }, { "name": "number" }] }, "description": "Il valore nel campo TextArea." }, "readOnly": { "required": false, "tsType": { "name": "boolean" }, "description": "Da utilizzare per impedire la modifica del valore contenuto." }, "normalized": { "required": false, "tsType": { "name": "boolean" }, "description": "Associato all'attributo readOnly mostra il campo con lo stile classico, mantenento lo stato di sola lettura." }, "valid": { "required": false, "tsType": { "name": "boolean" }, "description": "Utilizzare per mostrare il successo nella validazione del valore nel campo TextArea" }, "innerRef": { "required": false, "tsType": { "name": "Ref", "elements": [{ "name": "HTMLTextAreaElement" }], "raw": "Ref<HTMLTextAreaElement>" }, "description": "" }, "cssModule": { "required": false, "tsType": { "name": "CSSModule" }, "description": "Oggetto contenente la nuova mappatura per le classi CSS." }, "wrapperClassName": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il wrapper del componente TextArea" }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente TextArea" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["TextareaHTMLAttributes"] };
var accessibleAutocomplete_react_min = { exports: {} };
(function(module, exports) {
  (function webpackUniversalModuleDefinition(e, t) {
    module.exports = t(reactExports);
  })(commonjsGlobal, function(n) {
    return function(n2) {
      var r = {};
      function o(e) {
        if (r[e])
          return r[e].exports;
        var t = r[e] = { i: e, l: false, exports: {} };
        return n2[e].call(t.exports, t, t.exports, o), t.l = true, t.exports;
      }
      return o.m = n2, o.c = r, o.d = function(e, t, n3) {
        o.o(e, t) || Object.defineProperty(e, t, { enumerable: true, get: n3 });
      }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: true });
      }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e)
          return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
          return t;
        var n3 = /* @__PURE__ */ Object.create(null);
        if (o.r(n3), Object.defineProperty(n3, "default", { enumerable: true, value: t }), 2 & e && "string" != typeof t)
          for (var r2 in t)
            o.d(n3, r2, (function(e2) {
              return t[e2];
            }).bind(null, r2));
        return n3;
      }, o.n = function(e) {
        var t = e && e.__esModule ? function() {
          return e["default"];
        } : function() {
          return e;
        };
        return o.d(t, "a", t), t;
      }, o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }, o.p = "/", o(o.s = 31);
    }([function(e, t) {
      var n2 = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
      "number" == typeof __g && (__g = n2);
    }, function(e, t, n2) {
      var v = n2(0), m = n2(5), y = n2(6), g = n2(14), b = n2(16), O = "prototype", w = function(e2, t2, n3) {
        var r, o, i, u, a = e2 & w.F, s = e2 & w.G, l = e2 & w.S, c = e2 & w.P, p = e2 & w.B, f = s ? v : l ? v[t2] || (v[t2] = {}) : (v[t2] || {})[O], d = s ? m : m[t2] || (m[t2] = {}), h = d[O] || (d[O] = {});
        for (r in s && (n3 = t2), n3)
          i = ((o = !a && f && f[r] !== void 0) ? f : n3)[r], u = p && o ? b(i, v) : c && "function" == typeof i ? b(Function.call, i) : i, f && g(f, r, i, e2 & w.U), d[r] != i && y(d, r, u), c && h[r] != i && (h[r] = i);
      };
      v.core = m, w.F = 1, w.G = 2, w.S = 4, w.P = 8, w.B = 16, w.W = 32, w.U = 64, w.R = 128, e.exports = w;
    }, function(e, t) {
      e.exports = function(e2) {
        return "object" == typeof e2 ? null !== e2 : "function" == typeof e2;
      };
    }, function(e, t, n2) {
      e.exports = !n2(4)(function() {
        return 7 != Object.defineProperty({}, "a", { get: function() {
          return 7;
        } }).a;
      });
    }, function(e, t) {
      e.exports = function(e2) {
        try {
          return !!e2();
        } catch (t2) {
          return true;
        }
      };
    }, function(e, t) {
      var n2 = e.exports = { version: "2.5.7" };
      "number" == typeof __e && (__e = n2);
    }, function(e, t, n2) {
      var r = n2(7), o = n2(35);
      e.exports = n2(3) ? function(e2, t2, n3) {
        return r.f(e2, t2, o(1, n3));
      } : function(e2, t2, n3) {
        return e2[t2] = n3, e2;
      };
    }, function(e, t, n2) {
      var o = n2(8), i = n2(33), u = n2(34), a = Object.defineProperty;
      t.f = n2(3) ? Object.defineProperty : function(e2, t2, n3) {
        if (o(e2), t2 = u(t2, true), o(n3), i)
          try {
            return a(e2, t2, n3);
          } catch (r) {
          }
        if ("get" in n3 || "set" in n3)
          throw TypeError("Accessors not supported!");
        return "value" in n3 && (e2[t2] = n3.value), e2;
      };
    }, function(e, t, n2) {
      var r = n2(2);
      e.exports = function(e2) {
        if (!r(e2))
          throw TypeError(e2 + " is not an object!");
        return e2;
      };
    }, function(e, t) {
      var n2 = 0, r = Math.random();
      e.exports = function(e2) {
        return "Symbol(".concat(e2 === void 0 ? "" : e2, ")_", (++n2 + r).toString(36));
      };
    }, function(e, t, n2) {
      var r = n2(20);
      e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e2) {
        return "String" == r(e2) ? e2.split("") : Object(e2);
      };
    }, function(e, t) {
      e.exports = function(e2) {
        if (e2 == void 0)
          throw TypeError("Can't call method on  " + e2);
        return e2;
      };
    }, function(e, t) {
      e.exports = n;
    }, function(e, t, n2) {
      var r = n2(2), o = n2(0).document, i = r(o) && r(o.createElement);
      e.exports = function(e2) {
        return i ? o.createElement(e2) : {};
      };
    }, function(e, t, n2) {
      var i = n2(0), u = n2(6), a = n2(15), s = n2(9)("src"), r = "toString", o = Function[r], l = ("" + o).split(r);
      n2(5).inspectSource = function(e2) {
        return o.call(e2);
      }, (e.exports = function(e2, t2, n3, r2) {
        var o2 = "function" == typeof n3;
        o2 && (a(n3, "name") || u(n3, "name", t2)), e2[t2] !== n3 && (o2 && (a(n3, s) || u(n3, s, e2[t2] ? "" + e2[t2] : l.join(String(t2)))), e2 === i ? e2[t2] = n3 : r2 ? e2[t2] ? e2[t2] = n3 : u(e2, t2, n3) : (delete e2[t2], u(e2, t2, n3)));
      })(Function.prototype, r, function() {
        return "function" == typeof this && this[s] || o.call(this);
      });
    }, function(e, t) {
      var n2 = {}.hasOwnProperty;
      e.exports = function(e2, t2) {
        return n2.call(e2, t2);
      };
    }, function(e, t, n2) {
      var i = n2(17);
      e.exports = function(r, o, e2) {
        if (i(r), o === void 0)
          return r;
        switch (e2) {
          case 1:
            return function(e3) {
              return r.call(o, e3);
            };
          case 2:
            return function(e3, t2) {
              return r.call(o, e3, t2);
            };
          case 3:
            return function(e3, t2, n3) {
              return r.call(o, e3, t2, n3);
            };
        }
        return function() {
          return r.apply(o, arguments);
        };
      };
    }, function(e, t) {
      e.exports = function(e2) {
        if ("function" != typeof e2)
          throw TypeError(e2 + " is not a function!");
        return e2;
      };
    }, function(e, t, n2) {
      var r = n2(37), o = n2(26);
      e.exports = Object.keys || function(e2) {
        return r(e2, o);
      };
    }, function(e, t, n2) {
      var r = n2(10), o = n2(11);
      e.exports = function(e2) {
        return r(o(e2));
      };
    }, function(e, t) {
      var n2 = {}.toString;
      e.exports = function(e2) {
        return n2.call(e2).slice(8, -1);
      };
    }, function(e, t, n2) {
      var s = n2(19), l = n2(22), c = n2(38);
      e.exports = function(a) {
        return function(e2, t2, n3) {
          var r, o = s(e2), i = l(o.length), u = c(n3, i);
          if (a && t2 != t2) {
            for (; u < i; )
              if ((r = o[u++]) != r)
                return true;
          } else
            for (; u < i; u++)
              if ((a || u in o) && o[u] === t2)
                return a || u || 0;
          return !a && -1;
        };
      };
    }, function(e, t, n2) {
      var r = n2(23), o = Math.min;
      e.exports = function(e2) {
        return 0 < e2 ? o(r(e2), 9007199254740991) : 0;
      };
    }, function(e, t) {
      var n2 = Math.ceil, r = Math.floor;
      e.exports = function(e2) {
        return isNaN(e2 = +e2) ? 0 : (0 < e2 ? r : n2)(e2);
      };
    }, function(e, t, n2) {
      var r = n2(25)("keys"), o = n2(9);
      e.exports = function(e2) {
        return r[e2] || (r[e2] = o(e2));
      };
    }, function(e, t, n2) {
      var r = n2(5), o = n2(0), i = "__core-js_shared__", u = o[i] || (o[i] = {});
      (e.exports = function(e2, t2) {
        return u[e2] || (u[e2] = t2 !== void 0 ? t2 : {});
      })("versions", []).push({ version: r.version, mode: n2(39) ? "pure" : "global", copyright: "© 2018 Denis Pushkarev (zloirock.ru)" });
    }, function(e, t) {
      e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    }, function(e, t, n2) {
      var r = n2(11);
      e.exports = function(e2) {
        return Object(r(e2));
      };
    }, function(e, t, n2) {
      var r = n2(1);
      r(r.S, "Object", { create: n2(42) });
    }, function(e, t, n2) {
      var r = n2(25)("wks"), o = n2(9), i = n2(0).Symbol, u = "function" == typeof i;
      (e.exports = function(e2) {
        return r[e2] || (r[e2] = u && i[e2] || (u ? i : o)("Symbol." + e2));
      }).store = r;
    }, function(e, t, n2) {
      var r = n2(4);
      e.exports = function(e2, t2) {
        return !!e2 && r(function() {
          t2 ? e2.call(null, function() {
          }, 1) : e2.call(null);
        });
      };
    }, function(e, t, n2) {
      t.__esModule = true, t["default"] = void 0, n2(32), n2(28), n2(45), n2(46), n2(51), n2(52), n2(55);
      var $ = n2(12), J = o(n2(57)), r = o(n2(58));
      function o(e2) {
        return e2 && e2.__esModule ? e2 : { "default": e2 };
      }
      function X() {
        return (X = Object.assign || function(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n3 = arguments[t2];
            for (var r2 in n3)
              Object.prototype.hasOwnProperty.call(n3, r2) && (e2[r2] = n3[r2]);
          }
          return e2;
        }).apply(this, arguments);
      }
      function i(e2) {
        if (void 0 === e2)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e2;
      }
      var u = { 13: "enter", 27: "escape", 32: "space", 38: "up", 40: "down" };
      function Y() {
        return "undefined" != typeof navigator && !(!navigator.userAgent.match(/(iPod|iPhone|iPad)/g) || !navigator.userAgent.match(/AppleWebKit/g));
      }
      var a = function(n3) {
        function e2(e3) {
          var t3;
          return (t3 = n3.call(this, e3) || this).elementReferences = {}, t3.state = { focused: null, hovered: null, menuOpen: false, options: e3.defaultValue ? [e3.defaultValue] : [], query: e3.defaultValue, validChoiceMade: false, selected: null, ariaHint: true }, t3.handleComponentBlur = t3.handleComponentBlur.bind(i(i(t3))), t3.handleKeyDown = t3.handleKeyDown.bind(i(i(t3))), t3.handleUpArrow = t3.handleUpArrow.bind(i(i(t3))), t3.handleDownArrow = t3.handleDownArrow.bind(i(i(t3))), t3.handleEnter = t3.handleEnter.bind(i(i(t3))), t3.handlePrintableKey = t3.handlePrintableKey.bind(i(i(t3))), t3.handleListMouseLeave = t3.handleListMouseLeave.bind(i(i(t3))), t3.handleOptionBlur = t3.handleOptionBlur.bind(i(i(t3))), t3.handleOptionClick = t3.handleOptionClick.bind(i(i(t3))), t3.handleOptionFocus = t3.handleOptionFocus.bind(i(i(t3))), t3.handleOptionMouseDown = t3.handleOptionMouseDown.bind(i(i(t3))), t3.handleOptionMouseEnter = t3.handleOptionMouseEnter.bind(i(i(t3))), t3.handleInputBlur = t3.handleInputBlur.bind(i(i(t3))), t3.handleInputChange = t3.handleInputChange.bind(i(i(t3))), t3.handleInputFocus = t3.handleInputFocus.bind(i(i(t3))), t3.pollInputElement = t3.pollInputElement.bind(i(i(t3))), t3.getDirectInputChanges = t3.getDirectInputChanges.bind(i(i(t3))), t3;
        }
        (function r2(e3, t3) {
          e3.prototype = Object.create(t3.prototype), (e3.prototype.constructor = e3).__proto__ = t3;
        })(e2, n3);
        var t2 = e2.prototype;
        return t2.isQueryAnOption = function(e3, t3) {
          var n4 = this;
          return -1 !== t3.map(function(e4) {
            return n4.templateInputValue(e4).toLowerCase();
          }).indexOf(e3.toLowerCase());
        }, t2.componentDidMount = function() {
          this.pollInputElement();
        }, t2.componentWillUnmount = function() {
          clearTimeout(this.$pollInput);
        }, t2.pollInputElement = function() {
          var e3 = this;
          this.getDirectInputChanges(), this.$pollInput = setTimeout(function() {
            e3.pollInputElement();
          }, 100);
        }, t2.getDirectInputChanges = function() {
          var e3 = this.elementReferences[-1];
          e3 && e3.value !== this.state.query && this.handleInputChange({ target: { value: e3.value } });
        }, t2.componentDidUpdate = function(e3, t3) {
          var n4 = this.state.focused, r2 = null === n4, o2 = t3.focused !== n4;
          o2 && !r2 && this.elementReferences[n4].focus();
          var i2 = -1 === n4, u2 = o2 && null === t3.focused;
          if (i2 && u2) {
            var a2 = this.elementReferences[n4];
            a2.setSelectionRange(0, a2.value.length);
          }
        }, t2.hasAutoselect = function() {
          return !Y() && this.props.autoselect;
        }, t2.templateInputValue = function(e3) {
          var t3 = this.props.templates && this.props.templates.inputValue;
          return t3 ? t3(e3) : e3;
        }, t2.templateSuggestion = function(e3) {
          var t3 = this.props.templates && this.props.templates.suggestion;
          return t3 ? t3(e3) : e3;
        }, t2.handleComponentBlur = function(e3) {
          var t3, n4 = this.state, r2 = n4.options, o2 = n4.query, i2 = n4.selected;
          this.props.confirmOnBlur ? (t3 = e3.query || o2, this.props.onConfirm(r2[i2])) : t3 = o2, this.setState({ focused: null, menuOpen: e3.menuOpen || false, query: t3, selected: null, validChoiceMade: this.isQueryAnOption(t3, r2) });
        }, t2.handleListMouseLeave = function(e3) {
          this.setState({ hovered: null });
        }, t2.handleOptionBlur = function(e3, t3) {
          var n4 = this.state, r2 = n4.focused, o2 = n4.menuOpen, i2 = n4.options, u2 = n4.selected, a2 = null === e3.relatedTarget, s = e3.relatedTarget === this.elementReferences[-1], l = r2 !== t3 && -1 !== r2;
          if (!l && a2 || !(l || s)) {
            var c = o2 && Y();
            this.handleComponentBlur({ menuOpen: c, query: this.templateInputValue(i2[u2]) });
          }
        }, t2.handleInputBlur = function(e3) {
          var t3 = this.state, n4 = t3.focused, r2 = t3.menuOpen, o2 = t3.options, i2 = t3.query, u2 = t3.selected;
          if (!(-1 !== n4)) {
            var a2 = r2 && Y(), s = Y() ? i2 : this.templateInputValue(o2[u2]);
            this.handleComponentBlur({ menuOpen: a2, query: s });
          }
        }, t2.handleInputChange = function(e3) {
          var n4 = this, t3 = this.props, r2 = t3.minLength, o2 = t3.source, i2 = t3.showAllValues, u2 = this.hasAutoselect(), a2 = e3.target.value, s = 0 === a2.length, l = this.state.query.length !== a2.length, c = a2.length >= r2;
          this.setState({ query: a2, ariaHint: s }), i2 || !s && l && c ? o2(a2, function(e4) {
            var t4 = 0 < e4.length;
            n4.setState({ menuOpen: t4, options: e4, selected: u2 && t4 ? 0 : -1, validChoiceMade: false });
          }) : !s && c || this.setState({ menuOpen: false, options: [] });
        }, t2.handleInputClick = function(e3) {
          this.handleInputChange(e3);
        }, t2.handleInputFocus = function(e3) {
          var t3 = this.state, n4 = t3.query, r2 = t3.validChoiceMade, o2 = t3.options, i2 = this.props.minLength, u2 = !r2 && n4.length >= i2 && 0 < o2.length;
          u2 ? this.setState(function(e4) {
            var t4 = e4.menuOpen;
            return { focused: -1, menuOpen: u2 || t4, selected: -1 };
          }) : this.setState({ focused: -1 });
        }, t2.handleOptionFocus = function(e3) {
          this.setState({ focused: e3, hovered: null, selected: e3 });
        }, t2.handleOptionMouseEnter = function(e3, t3) {
          Y() || this.setState({ hovered: t3 });
        }, t2.handleOptionClick = function(e3, t3) {
          var n4 = this.state.options[t3], r2 = this.templateInputValue(n4);
          this.props.onConfirm(n4), this.setState({ focused: -1, hovered: null, menuOpen: false, query: r2, selected: -1, validChoiceMade: true }), this.forceUpdate();
        }, t2.handleOptionMouseDown = function(e3) {
          e3.preventDefault();
        }, t2.handleUpArrow = function(e3) {
          e3.preventDefault();
          var t3 = this.state, n4 = t3.menuOpen, r2 = t3.selected;
          -1 !== r2 && n4 && this.handleOptionFocus(r2 - 1);
        }, t2.handleDownArrow = function(e3) {
          var t3 = this;
          if (e3.preventDefault(), this.props.showAllValues && false === this.state.menuOpen)
            e3.preventDefault(), this.props.source("", function(e4) {
              t3.setState({ menuOpen: true, options: e4, selected: 0, focused: 0, hovered: null });
            });
          else if (true === this.state.menuOpen) {
            var n4 = this.state, r2 = n4.menuOpen, o2 = n4.options, i2 = n4.selected;
            i2 !== o2.length - 1 && r2 && this.handleOptionFocus(i2 + 1);
          }
        }, t2.handleSpace = function(e3) {
          var t3 = this;
          this.props.showAllValues && false === this.state.menuOpen && "" === this.state.query && (e3.preventDefault(), this.props.source("", function(e4) {
            t3.setState({ menuOpen: true, options: e4 });
          })), -1 !== this.state.focused && (e3.preventDefault(), this.handleOptionClick(e3, this.state.focused));
        }, t2.handleEnter = function(e3) {
          this.state.menuOpen && (e3.preventDefault(), 0 <= this.state.selected && this.handleOptionClick(e3, this.state.selected));
        }, t2.handlePrintableKey = function(e3) {
          var t3 = this.elementReferences[-1];
          e3.target === t3 || t3.focus();
        }, t2.handleKeyDown = function(e3) {
          switch (u[e3.keyCode]) {
            case "up":
              this.handleUpArrow(e3);
              break;
            case "down":
              this.handleDownArrow(e3);
              break;
            case "space":
              this.handleSpace(e3);
              break;
            case "enter":
              this.handleEnter(e3);
              break;
            case "escape":
              this.handleComponentBlur({ query: this.state.query });
              break;
            default:
              (function t3(e4) {
                return 47 < e4 && e4 < 58 || 32 === e4 || 8 === e4 || 64 < e4 && e4 < 91 || 95 < e4 && e4 < 112 || 185 < e4 && e4 < 193 || 218 < e4 && e4 < 223;
              })(e3.keyCode) && this.handlePrintableKey(e3);
          }
        }, t2.render = function() {
          var e3, i2 = this, t3 = this.props, n4 = t3.cssNamespace, r2 = t3.displayMenu, u2 = t3.id, o2 = t3.minLength, a2 = t3.name, s = t3.placeholder, l = t3.required, c = t3.showAllValues, p = t3.tNoResults, f = t3.tStatusQueryTooShort, d = t3.tStatusNoResults, h = t3.tStatusSelectedOption, v = t3.tStatusResults, m = t3.tAssistiveHint, y = t3.dropdownArrow, g = this.state, b = g.focused, O = g.hovered, w = g.menuOpen, x = g.options, _ = g.query, S = g.selected, C = g.ariaHint, M = g.validChoiceMade, E = this.hasAutoselect(), I = -1 === b, j = 0 === x.length, A = 0 !== _.length, P = _.length >= o2, F = this.props.showNoOptionsFound && I && j && A && P, D = n4 + "__wrapper", R = n4 + "__input", k = null !== b ? " " + R + "--focused" : "", q = this.props.showAllValues ? " " + R + "--show-all-values" : " " + R + "--default", L = n4 + "__dropdown-arrow-down", N = -1 !== b && null !== b, B = n4 + "__menu", T = B + "--" + r2, V = B + "--" + (w || F ? "visible" : "hidden"), U = n4 + "__option", K = n4 + "__hint", H = this.templateInputValue(x[S]), Q = H && 0 === H.toLowerCase().indexOf(_.toLowerCase()) && E ? _ + H.substr(_.length) : "", W = u2 + "__assistiveHint", z = C ? { "aria-describedby": W } : null;
          return c && "string" == typeof (e3 = y({ className: L })) && (e3 = (0, $.createElement)("div", { className: n4 + "__dropdown-arrow-down-wrapper", dangerouslySetInnerHTML: { __html: e3 } })), (0, $.createElement)("div", { className: D, onKeyDown: this.handleKeyDown }, (0, $.createElement)(J["default"], { id: u2, length: x.length, queryLength: _.length, minQueryLength: o2, selectedOption: this.templateInputValue(x[S]), selectedOptionIndex: S, validChoiceMade: M, isInFocus: null !== this.state.focused, tQueryTooShort: f, tNoResults: d, tSelectedOption: h, tResults: v }), Q && (0, $.createElement)("span", null, (0, $.createElement)("input", { className: K, readonly: true, tabIndex: "-1", value: Q })), (0, $.createElement)("input", X({ "aria-expanded": w ? "true" : "false", "aria-activedescendant": !!N && u2 + "__option--" + b, "aria-owns": u2 + "__listbox", "aria-autocomplete": this.hasAutoselect() ? "both" : "list" }, z, { autoComplete: "off", className: "" + R + k + q, id: u2, onClick: function(e4) {
            return i2.handleInputClick(e4);
          }, onBlur: this.handleInputBlur }, /* @__PURE__ */ function G(e4) {
            return { onChange: e4 };
          }(this.handleInputChange), { onFocus: this.handleInputFocus, name: a2, placeholder: s, ref: function(e4) {
            i2.elementReferences[-1] = e4;
          }, type: "text", role: "combobox", required: l, value: _ })), e3, (0, $.createElement)("ul", { className: B + " " + T + " " + V, onMouseLeave: function(e4) {
            return i2.handleListMouseLeave(e4);
          }, id: u2 + "__listbox", role: "listbox" }, x.map(function(e4, t4) {
            var n5 = (-1 === b ? S === t4 : b === t4) && null === O ? " " + U + "--focused" : "", r3 = t4 % 2 ? " " + U + "--odd" : "", o3 = Y() ? "<span id=" + u2 + "__option-suffix--" + t4 + ' style="border:0;clip:rect(0 0 0 0);height:1px;marginBottom:-1px;marginRight:-1px;overflow:hidden;padding:0;position:absolute;whiteSpace:nowrap;width:1px"> ' + (t4 + 1) + " of " + x.length + "</span>" : "";
            return (0, $.createElement)("li", { "aria-selected": b === t4 ? "true" : "false", className: "" + U + n5 + r3, dangerouslySetInnerHTML: { __html: i2.templateSuggestion(e4) + o3 }, id: u2 + "__option--" + t4, key: t4, onBlur: function(e5) {
              return i2.handleOptionBlur(e5, t4);
            }, onClick: function(e5) {
              return i2.handleOptionClick(e5, t4);
            }, onMouseDown: i2.handleOptionMouseDown, onMouseEnter: function(e5) {
              return i2.handleOptionMouseEnter(e5, t4);
            }, ref: function(e5) {
              i2.elementReferences[t4] = e5;
            }, role: "option", tabIndex: "-1", "aria-posinset": t4 + 1, "aria-setsize": x.length });
          }), F && (0, $.createElement)("li", { className: U + " " + U + "--no-results" }, p())), (0, $.createElement)("span", { id: W, style: { display: "none" } }, m()));
        }, e2;
      }($.Component);
      (t["default"] = a).defaultProps = { autoselect: false, cssNamespace: "autocomplete", defaultValue: "", displayMenu: "inline", minLength: 0, name: "input-autocomplete", placeholder: "", onConfirm: function() {
      }, confirmOnBlur: true, showNoOptionsFound: true, showAllValues: false, required: false, tNoResults: function() {
        return "No results found";
      }, tAssistiveHint: function() {
        return "When autocomplete results are available use up and down arrows to review and enter to select.  Touch device users, explore by touch or with swipe gestures.";
      }, dropdownArrow: r["default"] };
    }, function(e, t, n2) {
      var r = n2(1);
      r(r.S + r.F, "Object", { assign: n2(36) });
    }, function(e, t, n2) {
      e.exports = !n2(3) && !n2(4)(function() {
        return 7 != Object.defineProperty(n2(13)("div"), "a", { get: function() {
          return 7;
        } }).a;
      });
    }, function(e, t, n2) {
      var o = n2(2);
      e.exports = function(e2, t2) {
        if (!o(e2))
          return e2;
        var n3, r;
        if (t2 && "function" == typeof (n3 = e2.toString) && !o(r = n3.call(e2)))
          return r;
        if ("function" == typeof (n3 = e2.valueOf) && !o(r = n3.call(e2)))
          return r;
        if (!t2 && "function" == typeof (n3 = e2.toString) && !o(r = n3.call(e2)))
          return r;
        throw TypeError("Can't convert object to primitive value");
      };
    }, function(e, t) {
      e.exports = function(e2, t2) {
        return { enumerable: !(1 & e2), configurable: !(2 & e2), writable: !(4 & e2), value: t2 };
      };
    }, function(e, t, n2) {
      var f = n2(18), d = n2(40), h = n2(41), v = n2(27), m = n2(10), o = Object.assign;
      e.exports = !o || n2(4)(function() {
        var e2 = {}, t2 = {}, n3 = Symbol(), r = "abcdefghijklmnopqrst";
        return e2[n3] = 7, r.split("").forEach(function(e3) {
          t2[e3] = e3;
        }), 7 != o({}, e2)[n3] || Object.keys(o({}, t2)).join("") != r;
      }) ? function(e2, t2) {
        for (var n3 = v(e2), r = arguments.length, o2 = 1, i = d.f, u = h.f; o2 < r; )
          for (var a, s = m(arguments[o2++]), l = i ? f(s).concat(i(s)) : f(s), c = l.length, p = 0; p < c; )
            u.call(s, a = l[p++]) && (n3[a] = s[a]);
        return n3;
      } : o;
    }, function(e, t, n2) {
      var u = n2(15), a = n2(19), s = n2(21)(false), l = n2(24)("IE_PROTO");
      e.exports = function(e2, t2) {
        var n3, r = a(e2), o = 0, i = [];
        for (n3 in r)
          n3 != l && u(r, n3) && i.push(n3);
        for (; t2.length > o; )
          u(r, n3 = t2[o++]) && (~s(i, n3) || i.push(n3));
        return i;
      };
    }, function(e, t, n2) {
      var r = n2(23), o = Math.max, i = Math.min;
      e.exports = function(e2, t2) {
        return (e2 = r(e2)) < 0 ? o(e2 + t2, 0) : i(e2, t2);
      };
    }, function(e, t) {
      e.exports = false;
    }, function(e, t) {
      t.f = Object.getOwnPropertySymbols;
    }, function(e, t) {
      t.f = {}.propertyIsEnumerable;
    }, function(e, t, r) {
      var o = r(8), i = r(43), u = r(26), a = r(24)("IE_PROTO"), s = function() {
      }, l = "prototype", c = function() {
        var e2, t2 = r(13)("iframe"), n2 = u.length;
        for (t2.style.display = "none", r(44).appendChild(t2), t2.src = "javascript:", (e2 = t2.contentWindow.document).open(), e2.write("<script>document.F=Object<\/script>"), e2.close(), c = e2.F; n2--; )
          delete c[l][u[n2]];
        return c();
      };
      e.exports = Object.create || function(e2, t2) {
        var n2;
        return null !== e2 ? (s[l] = o(e2), n2 = new s(), s[l] = null, n2[a] = e2) : n2 = c(), t2 === void 0 ? n2 : i(n2, t2);
      };
    }, function(e, t, n2) {
      var u = n2(7), a = n2(8), s = n2(18);
      e.exports = n2(3) ? Object.defineProperties : function(e2, t2) {
        a(e2);
        for (var n3, r = s(t2), o = r.length, i = 0; i < o; )
          u.f(e2, n3 = r[i++], t2[n3]);
        return e2;
      };
    }, function(e, t, n2) {
      var r = n2(0).document;
      e.exports = r && r.documentElement;
    }, function(e, t, n2) {
      var r = n2(7).f, o = Function.prototype, i = /^\s*function ([^ (]*)/;
      "name" in o || n2(3) && r(o, "name", { configurable: true, get: function() {
        try {
          return ("" + this).match(i)[1];
        } catch (e2) {
          return "";
        }
      } });
    }, function(e, t, n2) {
      var r = n2(1), o = n2(47)(1);
      r(r.P + r.F * !n2(30)([].map, true), "Array", { map: function(e2) {
        return o(this, e2, arguments[1]);
      } });
    }, function(e, t, n2) {
      var b = n2(16), O = n2(10), w = n2(27), x = n2(22), r = n2(48);
      e.exports = function(p, e2) {
        var f = 1 == p, d = 2 == p, h = 3 == p, v = 4 == p, m = 6 == p, y = 5 == p || m, g = e2 || r;
        return function(e3, t2, n3) {
          for (var r2, o, i = w(e3), u = O(i), a = b(t2, n3, 3), s = x(u.length), l = 0, c = f ? g(e3, s) : d ? g(e3, 0) : void 0; l < s; l++)
            if ((y || l in u) && (o = a(r2 = u[l], l, i), p)) {
              if (f)
                c[l] = o;
              else if (o)
                switch (p) {
                  case 3:
                    return true;
                  case 5:
                    return r2;
                  case 6:
                    return l;
                  case 2:
                    c.push(r2);
                }
              else if (v)
                return false;
            }
          return m ? -1 : h || v ? v : c;
        };
      };
    }, function(e, t, n2) {
      var r = n2(49);
      e.exports = function(e2, t2) {
        return new (r(e2))(t2);
      };
    }, function(e, t, n2) {
      var r = n2(2), o = n2(50), i = n2(29)("species");
      e.exports = function(e2) {
        var t2;
        return o(e2) && ("function" != typeof (t2 = e2.constructor) || t2 !== Array && !o(t2.prototype) || (t2 = void 0), r(t2) && null === (t2 = t2[i]) && (t2 = void 0)), t2 === void 0 ? Array : t2;
      };
    }, function(e, t, n2) {
      var r = n2(20);
      e.exports = Array.isArray || function(e2) {
        return "Array" == r(e2);
      };
    }, function(e, t, n2) {
      var r = n2(1), o = n2(21)(false), i = [].indexOf, u = !!i && 1 / [1].indexOf(1, -0) < 0;
      r(r.P + r.F * (u || !n2(30)(i)), "Array", { indexOf: function(e2) {
        return u ? i.apply(this, arguments) || 0 : o(this, e2, arguments[1]);
      } });
    }, function(e, t, n2) {
      var r = n2(1);
      r(r.P, "Function", { bind: n2(53) });
    }, function(e, t, n2) {
      var i = n2(17), u = n2(2), a = n2(54), s = [].slice, l = {};
      e.exports = Function.bind || function(t2) {
        var n3 = i(this), r = s.call(arguments, 1), o = function() {
          var e2 = r.concat(s.call(arguments));
          return this instanceof o ? function(e3, t3, n4) {
            if (!(t3 in l)) {
              for (var r2 = [], o2 = 0; o2 < t3; o2++)
                r2[o2] = "a[" + o2 + "]";
              l[t3] = Function("F,a", "return new F(" + r2.join(",") + ")");
            }
            return l[t3](e3, n4);
          }(n3, e2.length, e2) : a(n3, e2, t2);
        };
        return u(n3.prototype) && (o.prototype = n3.prototype), o;
      };
    }, function(e, t) {
      e.exports = function(e2, t2, n2) {
        var r = n2 === void 0;
        switch (t2.length) {
          case 0:
            return r ? e2() : e2.call(n2);
          case 1:
            return r ? e2(t2[0]) : e2.call(n2, t2[0]);
          case 2:
            return r ? e2(t2[0], t2[1]) : e2.call(n2, t2[0], t2[1]);
          case 3:
            return r ? e2(t2[0], t2[1], t2[2]) : e2.call(n2, t2[0], t2[1], t2[2]);
          case 4:
            return r ? e2(t2[0], t2[1], t2[2], t2[3]) : e2.call(n2, t2[0], t2[1], t2[2], t2[3]);
        }
        return e2.apply(n2, t2);
      };
    }, function(e, t, n2) {
      n2(56)("match", 1, function(r, o, e2) {
        return [function(e3) {
          var t2 = r(this), n3 = e3 == void 0 ? void 0 : e3[o];
          return n3 !== void 0 ? n3.call(e3, t2) : new RegExp(e3)[o](String(t2));
        }, e2];
      });
    }, function(e, t, n2) {
      var a = n2(6), s = n2(14), l = n2(4), c = n2(11), p = n2(29);
      e.exports = function(t2, e2, n3) {
        var r = p(t2), o = n3(c, r, ""[t2]), i = o[0], u = o[1];
        l(function() {
          var e3 = {};
          return e3[r] = function() {
            return 7;
          }, 7 != ""[t2](e3);
        }) && (s(String.prototype, t2, i), a(RegExp.prototype, r, 2 == e2 ? function(e3, t3) {
          return u.call(e3, this, t3);
        } : function(e3) {
          return u.call(e3, this);
        }));
      };
    }, function(e, t, n2) {
      t.__esModule = true, t["default"] = void 0, n2(28);
      var b = n2(12);
      var r = function r2(o2, i, u) {
        var a;
        return function() {
          var e2 = this, t2 = arguments, n3 = function n4() {
            a = null, u || o2.apply(e2, t2);
          }, r3 = u && !a;
          clearTimeout(a), a = setTimeout(n3, i), r3 && o2.apply(e2, t2);
        };
      }, o = function(o2) {
        function e2() {
          for (var e3, t3 = arguments.length, n3 = new Array(t3), r2 = 0; r2 < t3; r2++)
            n3[r2] = arguments[r2];
          return (e3 = o2.call.apply(o2, [this].concat(n3)) || this).state = { bump: false, debounced: false }, e3;
        }
        (function n3(e3, t3) {
          e3.prototype = Object.create(t3.prototype), (e3.prototype.constructor = e3).__proto__ = t3;
        })(e2, o2);
        var t2 = e2.prototype;
        return t2.componentWillMount = function() {
          var e3 = this;
          this.debounceStatusUpdate = r(function() {
            if (!e3.state.debounced) {
              var t3 = !e3.props.isInFocus || e3.props.validChoiceMade;
              e3.setState(function(e4) {
                return { bump: !e4.bump, debounced: true, silenced: t3 };
              });
            }
          }, 1400);
        }, t2.componentWillReceiveProps = function(e3) {
          e3.queryLength;
          this.setState({ debounced: false });
        }, t2.render = function() {
          var e3 = this.props, t3 = e3.id, n3 = e3.length, r2 = e3.queryLength, o3 = e3.minQueryLength, i = e3.selectedOption, u = e3.selectedOptionIndex, a = e3.tQueryTooShort, s = e3.tNoResults, l = e3.tSelectedOption, c = e3.tResults, p = this.state, f = p.bump, d = p.debounced, h = p.silenced, v = r2 < o3, m = 0 === n3, y = i ? l(i, n3, u) : "", g = null;
          return g = v ? a(o3) : m ? s() : c(n3, y), this.debounceStatusUpdate(), (0, b.createElement)("div", { style: { border: "0", clip: "rect(0 0 0 0)", height: "1px", marginBottom: "-1px", marginRight: "-1px", overflow: "hidden", padding: "0", position: "absolute", whiteSpace: "nowrap", width: "1px" } }, (0, b.createElement)("div", { id: t3 + "__status--A", role: "status", "aria-atomic": "true", "aria-live": "polite" }, !h && d && f ? g : ""), (0, b.createElement)("div", { id: t3 + "__status--B", role: "status", "aria-atomic": "true", "aria-live": "polite" }, h || !d || f ? "" : g));
        }, e2;
      }(b.Component);
      (t["default"] = o).defaultProps = { tQueryTooShort: function(e2) {
        return "Type in " + e2 + " or more characters for results";
      }, tNoResults: function() {
        return "No search results";
      }, tSelectedOption: function(e2, t2, n3) {
        return e2 + " " + (n3 + 1) + " of " + t2 + " is highlighted";
      }, tResults: function(e2, t2) {
        return e2 + " " + (1 === e2 ? "result" : "results") + " " + (1 === e2 ? "is" : "are") + " available. " + t2;
      } };
    }, function(e, t, n2) {
      t.__esModule = true, t["default"] = void 0;
      var r = n2(12), o = function i(e2) {
        var t2 = e2.className;
        return (0, r.createElement)("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", className: t2, focusable: "false" }, (0, r.createElement)("g", { stroke: "none", fill: "none", "fill-rule": "evenodd" }, (0, r.createElement)("polygon", { fill: "#000000", points: "0 0 22 0 11 17" })));
      };
      t["default"] = o;
    }]);
  });
})(accessibleAutocomplete_react_min);
var accessibleAutocomplete_react_minExports = accessibleAutocomplete_react_min.exports;
var react = accessibleAutocomplete_react_minExports;
const Autocomplete = /* @__PURE__ */ getDefaultExportFromCjs(react);
const meta = {
  title: "Documentazione/Form/Input",
  component: Input
};
const EsempiDiCampiDiInput = {
  render: () => {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Input, {
      type: "text",
      label: "Campo di tipo testuale",
      id: "exampleInputText"
    }), /* @__PURE__ */ React.createElement(Input, {
      type: "email",
      label: "Campo di tipo email",
      id: "exampleInputEmail"
    }), /* @__PURE__ */ React.createElement(Input, {
      type: "number",
      label: "Campo di tipo numerico",
      id: "exampleInputNumber"
    }), /* @__PURE__ */ React.createElement(Input, {
      type: "tel",
      label: "Campo di tipo telefono",
      id: "exampleInputTel"
    }));
  }
};
const UtilizzoDiPlaceholderELabel = {
  render: () => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Input, {
    label: "Etichetta di esempio",
    id: "exampleLabel"
  }), /* @__PURE__ */ React.createElement(Input, {
    label: "Etichetta di esempio",
    type: "text",
    placeholder: "Testo di esempio",
    id: "examplePlaceholder"
  }), /* @__PURE__ */ React.createElement(Input, {
    label: "Etichetta di esempio",
    type: "text",
    placeholder: "Testo di esempio",
    infoText: "Ulteriore testo informativo",
    id: "exampleInfoText"
  }), /* @__PURE__ */ React.createElement(Input, {
    label: "Etichetta di esempio",
    type: "text",
    placeholder: "Testo di esempio",
    validationText: "Campo non valido",
    id: "examplevalidationText",
    valid: false
  }))
};
const InputConIconaOBottoniHooks = () => {
  const [isFocused1, toggleFocus1] = reactExports.useState(false);
  const [isFocused2, toggleFocus2] = reactExports.useState(false);
  const [isFocused3, toggleFocus3] = reactExports.useState(false);
  const toggleFocusLabel1 = () => toggleFocus1(true);
  const toggleBlurLabel1 = (e) => {
    if (e.target.value === "") {
      toggleFocus1(!isFocused1);
    }
  };
  const toggleFocusLabel2 = () => toggleFocus2(true);
  const toggleBlurLabel2 = (e) => {
    if (e.target.value === "") {
      toggleFocus2(!isFocused2);
    }
  };
  const toggleFocusLabel3 = () => toggleFocus3(true);
  const toggleBlurLabel3 = (e) => {
    if (e.target.value === "") {
      toggleFocus3(!isFocused3);
    }
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "input-group"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "input-group-text"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-pencil",
    "aria-hidden": true,
    size: "sm"
  })), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "input-group-1",
    className: isFocused1 ? "active" : ""
  }, "Con Etichetta"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    className: isFocused1 ? "form-control focus--mouse" : "form-control",
    onFocus: toggleFocusLabel1,
    onBlur: toggleBlurLabel1,
    id: "input-group-1",
    name: "input-group-1"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "input-group"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "input-group-text"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-pencil",
    color: "danger",
    "aria-hidden": true,
    size: "sm"
  })), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "input-group-2",
    className: "active"
  }, "Con Etichetta e placeholder"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    className: isFocused2 ? "form-control focus--mouse" : "form-control",
    onFocus: toggleFocusLabel2,
    onBlur: toggleBlurLabel2,
    id: "input-group-2",
    name: "input-group-2",
    placeholder: "Lorem Ipsum"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "input-group"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "input-group-text"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-pencil",
    color: "primary",
    "aria-hidden": true,
    size: "sm"
  })), /* @__PURE__ */ React.createElement("label", {
    htmlFor: "input-group-3",
    className: isFocused3 ? "active" : ""
  }, "Con Etichetta e bottone di tipo primary"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    className: isFocused3 ? "form-control focus--mouse" : "form-control",
    onFocus: toggleFocusLabel3,
    onBlur: toggleBlurLabel3,
    id: "input-group-3",
    name: "input-group-3"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "input-group-append"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-primary",
    type: "button",
    id: "button-3"
  }, "Invio")))));
};
const InputConIconaOBottoni = {
  render: () => {
    return /* @__PURE__ */ React.createElement(InputConIconaOBottoniHooks, null);
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const InputPassword = {
  args: {
    type: "password",
    id: "exampleInputPassword",
    label: "Password con label, placeholder e testo di aiuto",
    infoText: "Inserisci almeno 8 caratteri e una lettera maiuscola"
  }
};
const Disabilitato = {
  args: {
    label: "Contenuto disabilitato",
    id: "exampleDisabled",
    disabled: true
  }
};
const Readonly = {
  args: {
    label: "Contenuto in sola lettura",
    id: "examplereadOnly",
    readOnly: true
  }
};
const ReadonlyNormalizzato = {
  args: {
    type: "text",
    label: "Contenuto in sola lettura",
    id: "exampleNormalized",
    normalized: true
  }
};
const _InputAutocompleteConDatiAccessibile = {
  render: () => {
    const multiOptions = [{
      value: "1",
      label: "Abruzzo"
    }, {
      value: "2",
      label: "Basilicata"
    }, {
      value: "3",
      label: "Calabria"
    }, {
      value: "4",
      label: "Campania"
    }, {
      value: "5",
      label: "Emilia Romagna"
    }, {
      value: "6",
      label: "Friuli Venezia Giulia"
    }, {
      value: "7",
      label: "Lazio"
    }, {
      value: "8",
      label: "Liguria"
    }, {
      value: "9",
      label: "Lombardia"
    }, {
      value: "10",
      label: "Marche"
    }, {
      value: "11",
      label: "Molise"
    }, {
      value: "12",
      label: "Piemonte"
    }, {
      value: "13",
      label: "Puglia"
    }, {
      value: "14",
      label: "Sardegna"
    }, {
      value: "15",
      label: "Sicilia"
    }, {
      value: "16",
      label: "Toscana"
    }, {
      value: "17",
      label: "Trentino Alto Adige"
    }, {
      value: "18",
      label: "Umbria"
    }, {
      value: "19",
      label: "Valle d'Aosta"
    }, {
      value: "20",
      label: "Veneto"
    }];
    const suggest = (query, populateResults) => {
      const filteredResults = multiOptions.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));
      let data = filteredResults.map((item) => {
        return item.label;
      });
      populateResults(data);
    };
    return /* @__PURE__ */ React.createElement(FormGroup, {
      className: "select-wrapper"
    }, /* @__PURE__ */ React.createElement("label", {
      htmlFor: "autocomplete"
    }, "Provincia"), /* @__PURE__ */ React.createElement(Autocomplete, {
      id: "autocomplete",
      source: suggest,
      placeholder: "Testo da cercare",
      defaultValue: "",
      displayMenu: "inline",
      tNoResults: () => "Nessun risultato"
    }));
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const AreaDiTesto = {
  render: () => /* @__PURE__ */ React.createElement(TextArea, {
    label: "Esempio di area di testo",
    rows: 3
  })
};
const AreaDiTestoConSegnaposto = {
  render: () => /* @__PURE__ */ React.createElement(TextArea, {
    rows: 3,
    label: "Esempio di area di testo",
    placeholder: "Testo di esempio",
    id: "example-textarea-placeholder"
  })
};
const InputDatepickerHooks = () => {
  const [value, setValue] = reactExports.useState("");
  return /* @__PURE__ */ React.createElement(Input, {
    type: "date",
    label: "Datepicker",
    className: "active",
    placeholder: "22/12/2023",
    value,
    onChange: (ev) => {
      setValue(ev.target.value);
    }
  });
};
const InputDatepicker = {
  render: () => {
    return /* @__PURE__ */ React.createElement(InputDatepickerHooks, null);
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const InputHourpickerHooks = () => {
  const [value, setValue] = reactExports.useState("");
  return /* @__PURE__ */ React.createElement(Input, {
    type: "time",
    label: "Hourpicker",
    className: "active",
    value,
    onChange: (ev) => {
      setValue(ev.target.value);
    }
  });
};
const InputHourpicker = {
  render: () => {
    return /* @__PURE__ */ React.createElement(InputHourpickerHooks, null);
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
EsempiDiCampiDiInput.parameters = {
  ...EsempiDiCampiDiInput.parameters,
  docs: {
    ...(_a = EsempiDiCampiDiInput.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <div>\n                <Input type="text" label="Campo di tipo testuale" id="exampleInputText" />\n                <Input type="email" label="Campo di tipo email" id="exampleInputEmail" />\n                <Input type="number" label="Campo di tipo numerico" id="exampleInputNumber" />\n                <Input type="tel" label="Campo di tipo telefono" id="exampleInputTel" />\n            </div>;\n  }\n}',
      ...(_c = (_b = EsempiDiCampiDiInput.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
UtilizzoDiPlaceholderELabel.parameters = {
  ...UtilizzoDiPlaceholderELabel.parameters,
  docs: {
    ...(_d = UtilizzoDiPlaceholderELabel.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  render: () => <div>\n            <Input label="Etichetta di esempio" id="exampleLabel" />\n            <Input label="Etichetta di esempio" type="text" placeholder="Testo di esempio" id="examplePlaceholder" />\n            <Input label="Etichetta di esempio" type="text" placeholder="Testo di esempio" infoText="Ulteriore testo informativo" id="exampleInfoText" />\n            <Input label="Etichetta di esempio" type="text" placeholder="Testo di esempio" validationText="Campo non valido" id="examplevalidationText" valid={false} />\n        </div>\n}',
      ...(_f = (_e = UtilizzoDiPlaceholderELabel.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
InputConIconaOBottoni.parameters = {
  ...InputConIconaOBottoni.parameters,
  docs: {
    ...(_g = InputConIconaOBottoni.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <InputConIconaOBottoniHooks />;\n  },\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "none"\n      }\n    }\n  }\n}',
      ...(_i = (_h = InputConIconaOBottoni.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
InputPassword.parameters = {
  ...InputPassword.parameters,
  docs: {
    ...(_j = InputPassword.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  args: {\n    type: "password",\n    id: "exampleInputPassword",\n    label: "Password con label, placeholder e testo di aiuto",\n    infoText: "Inserisci almeno 8 caratteri e una lettera maiuscola"\n  }\n}',
      ...(_l = (_k = InputPassword.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Disabilitato.parameters = {
  ...Disabilitato.parameters,
  docs: {
    ...(_m = Disabilitato.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: '{\n  args: {\n    label: "Contenuto disabilitato",\n    id: "exampleDisabled",\n    disabled: true\n  }\n}',
      ...(_o = (_n = Disabilitato.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
Readonly.parameters = {
  ...Readonly.parameters,
  docs: {
    ...(_p = Readonly.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: '{\n  args: {\n    label: "Contenuto in sola lettura",\n    id: "examplereadOnly",\n    readOnly: true\n  }\n}',
      ...(_r = (_q = Readonly.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
ReadonlyNormalizzato.parameters = {
  ...ReadonlyNormalizzato.parameters,
  docs: {
    ...(_s = ReadonlyNormalizzato.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: `{
  args: {
    type: 'text',
    label: "Contenuto in sola lettura",
    id: "exampleNormalized",
    normalized: true
  }
}`,
      ...(_u = (_t = ReadonlyNormalizzato.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
_InputAutocompleteConDatiAccessibile.parameters = {
  ..._InputAutocompleteConDatiAccessibile.parameters,
  docs: {
    ...(_v = _InputAutocompleteConDatiAccessibile.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: `{
  render: () => {
    const multiOptions: {
      value: string;
      label: string;
    }[] = [{
      value: "1",
      label: "Abruzzo"
    }, {
      value: "2",
      label: "Basilicata"
    }, {
      value: "3",
      label: "Calabria"
    }, {
      value: "4",
      label: "Campania"
    }, {
      value: "5",
      label: "Emilia Romagna"
    }, {
      value: "6",
      label: "Friuli Venezia Giulia"
    }, {
      value: "7",
      label: "Lazio"
    }, {
      value: "8",
      label: "Liguria"
    }, {
      value: "9",
      label: "Lombardia"
    }, {
      value: "10",
      label: "Marche"
    }, {
      value: "11",
      label: "Molise"
    }, {
      value: "12",
      label: "Piemonte"
    }, {
      value: "13",
      label: "Puglia"
    }, {
      value: "14",
      label: "Sardegna"
    }, {
      value: "15",
      label: "Sicilia"
    }, {
      value: "16",
      label: "Toscana"
    }, {
      value: "17",
      label: "Trentino Alto Adige"
    }, {
      value: "18",
      label: "Umbria"
    }, {
      value: "19",
      label: "Valle d'Aosta"
    }, {
      value: "20",
      label: "Veneto"
    }];
    const suggest = (query: any, populateResults: any) => {
      const filteredResults = multiOptions.filter(i => i.label.toLowerCase().includes(query.toLowerCase()));
      let data = filteredResults.map(item => {
        return item.label;
      });
      populateResults(data);
    };
    return <FormGroup className="select-wrapper">
                <label htmlFor="autocomplete">Provincia</label>
                <Autocomplete id="autocomplete" source={suggest} placeholder={"Testo da cercare"} defaultValue={""} displayMenu={"inline"} tNoResults={() => "Nessun risultato"} />
            </FormGroup>;
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
}`,
      ...(_x = (_w = _InputAutocompleteConDatiAccessibile.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
AreaDiTesto.parameters = {
  ...AreaDiTesto.parameters,
  docs: {
    ...(_y = AreaDiTesto.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: '{\n  render: () => <TextArea label="Esempio di area di testo" rows={3} />\n}',
      ...(_A = (_z = AreaDiTesto.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
AreaDiTestoConSegnaposto.parameters = {
  ...AreaDiTestoConSegnaposto.parameters,
  docs: {
    ...(_B = AreaDiTestoConSegnaposto.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: '{\n  render: () => <TextArea rows={3} label="Esempio di area di testo" placeholder="Testo di esempio" id="example-textarea-placeholder" />\n}',
      ...(_D = (_C = AreaDiTestoConSegnaposto.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
InputDatepicker.parameters = {
  ...InputDatepicker.parameters,
  docs: {
    ...(_E = InputDatepicker.parameters) == null ? void 0 : _E.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <InputDatepickerHooks />;\n  },\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "none"\n      }\n    }\n  }\n}',
      ...(_G = (_F = InputDatepicker.parameters) == null ? void 0 : _F.docs) == null ? void 0 : _G.source
    }
  }
};
InputHourpicker.parameters = {
  ...InputHourpicker.parameters,
  docs: {
    ...(_H = InputHourpicker.parameters) == null ? void 0 : _H.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <InputHourpickerHooks />;\n  },\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "none"\n      }\n    }\n  }\n}',
      ...(_J = (_I = InputHourpicker.parameters) == null ? void 0 : _I.docs) == null ? void 0 : _J.source
    }
  }
};
const __namedExportsOrder = ["EsempiDiCampiDiInput", "UtilizzoDiPlaceholderELabel", "InputConIconaOBottoni", "InputPassword", "Disabilitato", "Readonly", "ReadonlyNormalizzato", "_InputAutocompleteConDatiAccessibile", "AreaDiTesto", "AreaDiTestoConSegnaposto", "InputDatepicker", "InputHourpicker"];
const InputStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AreaDiTesto,
  AreaDiTestoConSegnaposto,
  Disabilitato,
  EsempiDiCampiDiInput,
  InputConIconaOBottoni,
  InputDatepicker,
  InputHourpicker,
  InputPassword,
  Readonly,
  ReadonlyNormalizzato,
  UtilizzoDiPlaceholderELabel,
  _InputAutocompleteConDatiAccessibile,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  AreaDiTesto as A,
  Disabilitato as D,
  EsempiDiCampiDiInput as E,
  InputStories as I,
  Readonly as R,
  UtilizzoDiPlaceholderELabel as U,
  _InputAutocompleteConDatiAccessibile as _,
  InputConIconaOBottoni as a,
  InputPassword as b,
  ReadonlyNormalizzato as c,
  InputHourpicker as d,
  InputDatepicker as e,
  AreaDiTestoConSegnaposto as f
};
