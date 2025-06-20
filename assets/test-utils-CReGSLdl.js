import { g as getDefaultExportFromCjs } from "./_commonjsHelpers-CcAunmGO.js";
import { r as reactExports } from "./index-CoR6MlO7.js";
import { r as reactDomExports } from "./index-CnhJHytA.js";
function _mergeNamespaces(n2, m2) {
  for (var i = 0; i < m2.length; i++) {
    const e = m2[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k2 in e) {
        if (k2 !== "default" && !(k2 in n2)) {
          const d = Object.getOwnPropertyDescriptor(e, k2);
          if (d) {
            Object.defineProperty(n2, k2, d.get ? d : {
              enumerable: true,
              get: () => e[k2]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
var testUtils$2 = { exports: {} };
var reactDomTestUtils_production_min = {};
/**
 * @license React
 * react-dom-test-utils.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var k = reactExports, l = reactDomExports;
function m(a) {
  var b = a, c = a;
  if (a.alternate) for (; b.return; ) b = b.return;
  else {
    a = b;
    do
      b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
    while (a);
  }
  return 3 === b.tag ? c : null;
}
function n(a) {
  if (m(a) !== a) throw Error("Unable to find node on an unmounted component.");
}
function p(a) {
  var b = a.alternate;
  if (!b) {
    b = m(a);
    if (null === b) throw Error("Unable to find node on an unmounted component.");
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var f = c.return;
    if (null === f) break;
    var g = f.alternate;
    if (null === g) {
      d = f.return;
      if (null !== d) {
        c = d;
        continue;
      }
      break;
    }
    if (f.child === g.child) {
      for (g = f.child; g; ) {
        if (g === c) return n(f), a;
        if (g === d) return n(f), b;
        g = g.sibling;
      }
      throw Error("Unable to find node on an unmounted component.");
    }
    if (c.return !== d.return) c = f, d = g;
    else {
      for (var e = false, h = f.child; h; ) {
        if (h === c) {
          e = true;
          c = f;
          d = g;
          break;
        }
        if (h === d) {
          e = true;
          d = f;
          c = g;
          break;
        }
        h = h.sibling;
      }
      if (!e) {
        for (h = g.child; h; ) {
          if (h === c) {
            e = true;
            c = g;
            d = f;
            break;
          }
          if (h === d) {
            e = true;
            d = g;
            c = f;
            break;
          }
          h = h.sibling;
        }
        if (!e) throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
      }
    }
    if (c.alternate !== d) throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
  }
  if (3 !== c.tag) throw Error("Unable to find node on an unmounted component.");
  return c.stateNode.current === c ? a : b;
}
var q = Object.assign;
function r(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function t() {
  return true;
}
function u() {
  return false;
}
function v(a) {
  function b(c, b2, f, g, e) {
    this._reactName = c;
    this._targetInst = f;
    this.type = b2;
    this.nativeEvent = g;
    this.target = e;
    this.currentTarget = null;
    for (var d in a) a.hasOwnProperty(d) && (c = a[d], this[d] = c ? c(g) : g[d]);
    this.isDefaultPrevented = (null != g.defaultPrevented ? g.defaultPrevented : false === g.returnValue) ? t : u;
    this.isPropagationStopped = u;
    return this;
  }
  q(b.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = t);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = t);
  }, persist: function() {
  }, isPersistent: t });
  return b;
}
var w = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, x = v(w), y = q({}, w, { view: 0, detail: 0 });
v(y);
var z, A, B, D = q({}, y, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: C, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a) return a.movementX;
  a !== B && (B && "mousemove" === a.type ? (z = a.screenX - B.screenX, A = a.screenY - B.screenY) : A = z = 0, B = a);
  return z;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : A;
} });
v(D);
var E = q({}, D, { dataTransfer: 0 });
v(E);
var F = q({}, y, { relatedTarget: 0 });
v(F);
var aa = q({}, w, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
v(aa);
var ba = q({}, w, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} });
v(ba);
var ca = q({}, w, { data: 0 });
v(ca);
var da = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, ea = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, fa = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function ha(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = fa[a]) ? !!b[a] : false;
}
function C() {
  return ha;
}
var ia = q({}, y, { key: function(a) {
  if (a.key) {
    var b = da[a.key] || a.key;
    if ("Unidentified" !== b) return b;
  }
  return "keypress" === a.type ? (a = r(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? ea[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: C, charCode: function(a) {
  return "keypress" === a.type ? r(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? r(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} });
v(ia);
var ja = q({}, D, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
v(ja);
var ka = q({}, y, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: C });
v(ka);
var la = q({}, w, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
v(la);
var ma = q({}, D, { deltaX: function(a) {
  return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
}, deltaY: function(a) {
  return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
}, deltaZ: 0, deltaMode: 0 });
v(ma);
function na(a, b, c, d, f, g, e, h, N) {
  var G = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, G);
  } catch (oa) {
    this.onError(oa);
  }
}
var H = false, I = null, J = false, K = null, pa = { onError: function(a) {
  H = true;
  I = a;
} };
function qa(a, b, c, d, f, g, e, h, N) {
  H = false;
  I = null;
  na.apply(pa, arguments);
}
function ra(a, b, c, d, f, g, e, h, N) {
  qa.apply(this, arguments);
  if (H) {
    if (H) {
      var G = I;
      H = false;
      I = null;
    } else throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    J || (J = true, K = G);
  }
}
var L = Array.isArray, M = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events, sa = M[0], ta = M[1], ua = M[2], va = M[3], wa = M[4], xa = k.unstable_act;
function ya() {
}
function za(a, b) {
  if (!a) return [];
  a = p(a);
  if (!a) return [];
  for (var c = a, d = []; ; ) {
    if (5 === c.tag || 6 === c.tag || 1 === c.tag || 0 === c.tag) {
      var f = c.stateNode;
      b(f) && d.push(f);
    }
    if (c.child) c.child.return = c, c = c.child;
    else {
      if (c === a) return d;
      for (; !c.sibling; ) {
        if (!c.return || c.return === a) return d;
        c = c.return;
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  }
}
function O(a, b) {
  if (a && !a._reactInternals) {
    var c = String(a);
    a = L(a) ? "an array" : a && 1 === a.nodeType && a.tagName ? "a DOM node" : "[object Object]" === c ? "object with keys {" + Object.keys(a).join(", ") + "}" : c;
    throw Error(b + "(...): the first argument must be a React class instance. Instead received: " + (a + "."));
  }
}
function P(a) {
  return !(!a || 1 !== a.nodeType || !a.tagName);
}
function Q(a) {
  return P(a) ? false : null != a && "function" === typeof a.render && "function" === typeof a.setState;
}
function R(a, b) {
  return Q(a) ? a._reactInternals.type === b : false;
}
function S(a, b) {
  O(a, "findAllInRenderedTree");
  return a ? za(a._reactInternals, b) : [];
}
function T(a, b) {
  O(a, "scryRenderedDOMComponentsWithClass");
  return S(a, function(a2) {
    if (P(a2)) {
      var c = a2.className;
      "string" !== typeof c && (c = a2.getAttribute("class") || "");
      var f = c.split(/\s+/);
      if (!L(b)) {
        if (void 0 === b) throw Error("TestUtils.scryRenderedDOMComponentsWithClass expects a className as a second argument.");
        b = b.split(/\s+/);
      }
      return b.every(function(a3) {
        return -1 !== f.indexOf(a3);
      });
    }
    return false;
  });
}
function U(a, b) {
  O(a, "scryRenderedDOMComponentsWithTag");
  return S(a, function(a2) {
    return P(a2) && a2.tagName.toUpperCase() === b.toUpperCase();
  });
}
function V(a, b) {
  O(a, "scryRenderedComponentsWithType");
  return S(a, function(a2) {
    return R(a2, b);
  });
}
function W(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = ta(c);
  ra(d, b, void 0, a);
  a.currentTarget = null;
}
function X(a, b, c) {
  for (var d = []; a; ) {
    d.push(a);
    do
      a = a.return;
    while (a && 5 !== a.tag);
    a = a ? a : null;
  }
  for (a = d.length; 0 < a--; ) b(d[a], "captured", c);
  for (a = 0; a < d.length; a++) b(d[a], "bubbled", c);
}
function Y(a, b) {
  var c = a.stateNode;
  if (!c) return null;
  var d = ua(c);
  if (!d) return null;
  c = d[b];
  a: switch (b) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
      a = !d;
      break a;
    default:
      a = false;
  }
  if (a) return null;
  if (c && "function" !== typeof c) throw Error("Expected `" + b + "` listener to be a function, instead got a value of `" + typeof c + "` type.");
  return c;
}
function Aa(a, b, c) {
  a && c && c._reactName && (b = Y(a, c._reactName)) && (null == c._dispatchListeners && (c._dispatchListeners = []), null == c._dispatchInstances && (c._dispatchInstances = []), c._dispatchListeners.push(b), c._dispatchInstances.push(a));
}
function Ba(a, b, c) {
  var d = c._reactName;
  "captured" === b && (d += "Capture");
  if (b = Y(a, d)) null == c._dispatchListeners && (c._dispatchListeners = []), null == c._dispatchInstances && (c._dispatchInstances = []), c._dispatchListeners.push(b), c._dispatchInstances.push(a);
}
var Z = {}, Ca = /* @__PURE__ */ new Set(["mouseEnter", "mouseLeave", "pointerEnter", "pointerLeave"]);
function Da(a) {
  return function(b, c) {
    if (k.isValidElement(b)) throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a React element. Pass the DOM node you wish to simulate the event on instead. Note that TestUtils.Simulate will not work if you are using shallow rendering.");
    if (Q(b)) throw Error("TestUtils.Simulate expected a DOM node as the first argument but received a component instance. Pass the DOM node you wish to simulate the event on instead.");
    var d = "on" + a[0].toUpperCase() + a.slice(1), f = new ya();
    f.target = b;
    f.type = a.toLowerCase();
    var g = sa(b), e = new x(d, f.type, g, f, b);
    e.persist();
    q(e, c);
    Ca.has(a) ? e && e._reactName && Aa(e._targetInst, null, e) : e && e._reactName && X(e._targetInst, Ba, e);
    l.unstable_batchedUpdates(function() {
      va(b);
      if (e) {
        var a2 = e._dispatchListeners, c2 = e._dispatchInstances;
        if (L(a2)) for (var d2 = 0; d2 < a2.length && !e.isPropagationStopped(); d2++) W(e, a2[d2], c2[d2]);
        else a2 && W(e, a2, c2);
        e._dispatchListeners = null;
        e._dispatchInstances = null;
        e.isPersistent() || e.constructor.release(e);
      }
      if (J) throw a2 = K, J = false, K = null, a2;
    });
    wa();
  };
}
"blur cancel click close contextMenu copy cut auxClick doubleClick dragEnd dragStart drop focus input invalid keyDown keyPress keyUp mouseDown mouseUp paste pause play pointerCancel pointerDown pointerUp rateChange reset resize seeked submit touchCancel touchEnd touchStart volumeChange drag dragEnter dragExit dragLeave dragOver mouseMove mouseOut mouseOver pointerMove pointerOut pointerOver scroll toggle touchMove wheel abort animationEnd animationIteration animationStart canPlay canPlayThrough durationChange emptied encrypted ended error gotPointerCapture load loadedData loadedMetadata loadStart lostPointerCapture playing progress seeking stalled suspend timeUpdate transitionEnd waiting mouseEnter mouseLeave pointerEnter pointerLeave change select beforeInput compositionEnd compositionStart compositionUpdate".split(" ").forEach(function(a) {
  Z[a] = Da(a);
});
reactDomTestUtils_production_min.Simulate = Z;
reactDomTestUtils_production_min.act = xa;
reactDomTestUtils_production_min.findAllInRenderedTree = S;
reactDomTestUtils_production_min.findRenderedComponentWithType = function(a, b) {
  O(a, "findRenderedComponentWithType");
  a = V(a, b);
  if (1 !== a.length) throw Error("Did not find exactly one match (found: " + a.length + ") for componentType:" + b);
  return a[0];
};
reactDomTestUtils_production_min.findRenderedDOMComponentWithClass = function(a, b) {
  O(a, "findRenderedDOMComponentWithClass");
  a = T(a, b);
  if (1 !== a.length) throw Error("Did not find exactly one match (found: " + a.length + ") for class:" + b);
  return a[0];
};
reactDomTestUtils_production_min.findRenderedDOMComponentWithTag = function(a, b) {
  O(a, "findRenderedDOMComponentWithTag");
  a = U(a, b);
  if (1 !== a.length) throw Error("Did not find exactly one match (found: " + a.length + ") for tag:" + b);
  return a[0];
};
reactDomTestUtils_production_min.isCompositeComponent = Q;
reactDomTestUtils_production_min.isCompositeComponentWithType = R;
reactDomTestUtils_production_min.isDOMComponent = P;
reactDomTestUtils_production_min.isDOMComponentElement = function(a) {
  return !!(a && k.isValidElement(a) && a.tagName);
};
reactDomTestUtils_production_min.isElement = function(a) {
  return k.isValidElement(a);
};
reactDomTestUtils_production_min.isElementOfType = function(a, b) {
  return k.isValidElement(a) && a.type === b;
};
reactDomTestUtils_production_min.mockComponent = function(a, b) {
  b = b || a.mockTagName || "div";
  a.prototype.render.mockImplementation(function() {
    return k.createElement(b, null, this.props.children);
  });
  return this;
};
reactDomTestUtils_production_min.nativeTouchData = function(a, b) {
  return { touches: [{ pageX: a, pageY: b }] };
};
reactDomTestUtils_production_min.renderIntoDocument = function(a) {
  var b = document.createElement("div");
  return l.render(a, b);
};
reactDomTestUtils_production_min.scryRenderedComponentsWithType = V;
reactDomTestUtils_production_min.scryRenderedDOMComponentsWithClass = T;
reactDomTestUtils_production_min.scryRenderedDOMComponentsWithTag = U;
reactDomTestUtils_production_min.traverseTwoPhase = X;
{
  testUtils$2.exports = reactDomTestUtils_production_min;
}
var testUtilsExports = testUtils$2.exports;
const testUtils = /* @__PURE__ */ getDefaultExportFromCjs(testUtilsExports);
const testUtils$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: testUtils
}, [testUtilsExports]);
export {
  testUtils$1 as t
};
