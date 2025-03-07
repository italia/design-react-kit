var _a, _b, _c;
import { r as reactExports, e } from "./index-BehpJNG5.js";
import { R as Row, C as Col } from "./Col-DlU8lCnt.js";
import { N as NavItem, a as NavLink } from "./NavLink-Doet5_NL.js";
import { B as Button } from "./Button-BVZxHsm7.js";
import { C as Collapse } from "./Collapse-nMvl-Ojs.js";
import { D as Dropdown, a as DropdownToggle } from "./DropdownToggle-YbWETlbf.js";
import { D as DropdownMenu } from "./DropdownMenu-DV6KduIR.js";
import { H as Header, a as HeaderContent } from "./HeaderContent-BIRN_xLE.js";
import { H as HeaderBrand, a as HeaderRightZone } from "./HeaderRightZone-BhOZ-Fa-.js";
import { H as HeaderLinkZone } from "./HeaderLinkZone-Bpxwbazd.js";
import { c as classNames } from "./index-D3ELxcOV.js";
import { H as HeaderSocialsZone, a as HeaderSearch } from "./HeaderSocialsZone-DtS9R-No.js";
import { H as HeaderToggler } from "./HeaderToggler-BJAGwhAW.js";
import { I as Icon } from "./Icon-DyWUmh-K.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-E5PaFpui.js";
import { N as Nav, M as MegamenuItem, a as MegamenuHighlightColumn } from "./Nav-D2FPr1jw.js";
import "./track-focus-DbJ2CO43.js";
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual2) {
  if (isEqual2 === void 0) {
    isEqual2 = areInputsEqual;
  }
  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (calledOnce && lastThis === this && isEqual2(newArgs, lastArgs)) {
      return lastResult;
    }
    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }
  return memoized;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var extendStatics$1 = function(d, b) {
  extendStatics$1 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
  };
  return extendStatics$1(d, b);
};
function __extends$1(d, b) {
  extendStatics$1(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign$1 = function() {
  __assign$1 = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$1.apply(this, arguments);
};
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
var shallowEqualScroll = function(a, b) {
  if (a === b) {
    return true;
  }
  return a.x === b.x && a.y === b.y && a.xTurn === b.xTurn && a.yTurn === b.yTurn && a.xDTurn === b.xDTurn && a.yDTurn === b.yDTurn && a.isScrollingUp === b.isScrollingUp && a.isScrollingDown === b.isScrollingDown && a.isScrollingLeft === b.isScrollingLeft && a.isScrollingRight === b.isScrollingRight;
};
var shallowEqualRect = function(a, b) {
  if (a === b) {
    return true;
  }
  return a.top === b.top && a.right === b.right && a.bottom === b.bottom && a.left === b.left && a.height === b.height && a.width === b.width;
};
var shallowEqualDimensions = function(a, b) {
  if (a === b) {
    return true;
  }
  return a.width === b.width && a.height === b.height && a.clientWidth === b.clientWidth && a.clientHeight === b.clientHeight && a.outerWidth === b.outerWidth && a.outerHeight === b.outerHeight && a.documentWidth === b.documentWidth && a.documentHeight === b.documentHeight;
};
var browserSupportsPassiveEvents = function() {
  if (typeof window === "undefined") {
    return false;
  }
  var supportsPassive = false;
  try {
    var opts = Object.defineProperty({}, "passive", {
      get: function() {
        supportsPassive = true;
      }
    });
    window.addEventListener("testPassive", null, opts);
    window.removeEventListener("testPassive", null, opts);
  } catch (e2) {
    return false;
  }
  return supportsPassive;
}();
var simpleDebounce = function(fn, delay) {
  var timeout;
  return function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    clearTimeout(timeout);
    timeout = setTimeout.apply(void 0, __spreadArrays([fn, delay], args));
  };
};
var debounceOnUpdate = function(fn, delay) {
  var timeout;
  var scrollDidUpdate = false;
  var dimensionsDidUpdate = false;
  return function(viewport, options) {
    clearTimeout(timeout);
    scrollDidUpdate = scrollDidUpdate || options.scrollDidUpdate;
    dimensionsDidUpdate = dimensionsDidUpdate || options.dimensionsDidUpdate;
    timeout = setTimeout(function() {
      fn(viewport, {
        scrollDidUpdate,
        dimensionsDidUpdate
      });
      scrollDidUpdate = false;
      dimensionsDidUpdate = false;
    }, delay);
  };
};
var requestAnimationFrame = function() {
  if (typeof window !== "undefined") {
    var nativeRAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
    if (nativeRAF) {
      return nativeRAF.bind(window);
    }
  }
  return function requestAnimationFrameFallback(callback) {
    return setTimeout(callback, 1e3 / 60);
  };
}();
var cancelAnimationFrame = function() {
  if (typeof window !== "undefined") {
    var nativeCAF = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame;
    if (nativeCAF) {
      return nativeCAF.bind(window);
    }
  }
  return clearTimeout;
}();
var now = typeof performance !== "undefined" && performance.now ? performance.now.bind(performance) : Date.now.bind(Date);
var createPerformanceMarker = function() {
  var start = now();
  return function() {
    return now() - start;
  };
};
var getClientDimensions = function() {
  if (typeof document === "undefined" || !document.documentElement) {
    return createEmptyDimensionState();
  }
  var innerWidth = window.innerWidth, innerHeight = window.innerHeight, outerWidth = window.outerWidth, outerHeight = window.outerHeight;
  var _a2 = document.documentElement, clientWidth = _a2.clientWidth, clientHeight = _a2.clientHeight, scrollHeight = _a2.scrollHeight, scrollWidth = _a2.scrollWidth, offsetHeight = _a2.offsetHeight, offsetWidth = _a2.offsetWidth;
  return {
    width: innerWidth,
    height: innerHeight,
    clientWidth,
    clientHeight,
    outerWidth,
    outerHeight,
    documentWidth: Math.max(scrollWidth, offsetWidth, clientWidth),
    documentHeight: Math.max(scrollHeight, offsetHeight, clientHeight)
  };
};
var getNodeScroll = function(elem) {
  if (elem === void 0) {
    elem = window;
  }
  var scrollX = elem.scrollX, scrollY = elem.scrollY;
  if (scrollX === void 0) {
    scrollX = elem.pageXOffset;
  }
  if (scrollY === void 0) {
    scrollY = elem.pageYOffset;
  }
  return {
    x: scrollX,
    y: scrollY
  };
};
var getClientScroll = function(prevScrollState) {
  if (prevScrollState === void 0) {
    prevScrollState = createEmptyScrollState();
  }
  if (typeof window === "undefined") {
    return createEmptyScrollState();
  }
  var _a2 = getNodeScroll(), x = _a2.x, y = _a2.y;
  var nextScrollState = __assign$1({}, prevScrollState);
  var prevIsScrollingLeft = prevScrollState.isScrollingLeft, prevIsScrollingUp = prevScrollState.isScrollingUp, prevXTurn = prevScrollState.xTurn, prevYTurn = prevScrollState.yTurn;
  nextScrollState.isScrollingLeft = isScrollingLeft(x, nextScrollState);
  nextScrollState.isScrollingRight = isScrollingRight(x, nextScrollState);
  nextScrollState.isScrollingUp = isScrollingUp(y, nextScrollState);
  nextScrollState.isScrollingDown = isScrollingDown(y, nextScrollState);
  nextScrollState.xTurn = nextScrollState.isScrollingLeft === prevIsScrollingLeft ? prevXTurn : x;
  nextScrollState.yTurn = nextScrollState.isScrollingUp === prevIsScrollingUp ? prevYTurn : y;
  nextScrollState.xDTurn = x - nextScrollState.xTurn;
  nextScrollState.yDTurn = y - nextScrollState.yTurn;
  nextScrollState.x = x;
  nextScrollState.y = y;
  return nextScrollState;
};
var isScrollingLeft = function(x, prev) {
  switch (true) {
    case x < prev.x:
      return true;
    case x > prev.x:
      return false;
    case x === prev.x:
      return prev.isScrollingLeft;
    default:
      throw new Error("Could not calculate isScrollingLeft");
  }
};
var isScrollingRight = function(x, prev) {
  switch (true) {
    case x > prev.x:
      return true;
    case x < prev.x:
      return false;
    case x === prev.x:
      return prev.isScrollingRight;
    default:
      throw new Error("Could not calculate isScrollingRight");
  }
};
var isScrollingUp = function(y, prev) {
  switch (true) {
    case y < prev.y:
      return true;
    case y > prev.y:
      return false;
    case y === prev.y:
      return prev.isScrollingUp;
    default:
      throw new Error("Could not calculate isScrollingUp");
  }
};
var isScrollingDown = function(y, prev) {
  switch (true) {
    case y > prev.y:
      return true;
    case y < prev.y:
      return false;
    case y === prev.y:
      return prev.isScrollingDown;
    default:
      throw new Error("Could not calculate isScrollingDown");
  }
};
var createEmptyScrollState = function() {
  return {
    x: 0,
    y: 0,
    isScrollingUp: false,
    isScrollingDown: false,
    isScrollingLeft: false,
    isScrollingRight: false,
    xTurn: 0,
    yTurn: 0,
    xDTurn: 0,
    yDTurn: 0
  };
};
var createEmptyDimensionState = function() {
  return {
    width: 0,
    height: 0,
    clientWidth: 0,
    clientHeight: 0,
    outerWidth: 0,
    outerHeight: 0,
    documentWidth: 0,
    documentHeight: 0
  };
};
var ViewportCollector = (
  /** @class */
  function(_super) {
    __extends$1(ViewportCollector2, _super);
    function ViewportCollector2(props) {
      var _this = _super.call(this, props) || this;
      _this.tick = function() {
        if (_this) {
          if (_this.scrollMightHaveUpdated || _this.resizeMightHaveUpdated) {
            _this.syncState();
            _this.scrollMightHaveUpdated = false;
            _this.resizeMightHaveUpdated = false;
          }
          _this.tickId = void 0;
        }
      };
      _this.handleScroll = function() {
        _this.scrollMightHaveUpdated = true;
        if (!_this.tickId) {
          _this.tickId = requestAnimationFrame(_this.tick);
        }
      };
      _this.handleResize = function() {
        _this.resizeMightHaveUpdated = true;
        if (!_this.tickId) {
          _this.tickId = requestAnimationFrame(_this.tick);
        }
      };
      _this.handleResizeDebounce = simpleDebounce(_this.handleResize, 88);
      _this.getPublicScroll = memoizeOne(function(scroll) {
        return __assign$1({}, scroll);
      }, function(_a2, _b2) {
        var a = _a2[0];
        var b = _b2[0];
        return shallowEqualScroll(a, b);
      });
      _this.getPublicDimensions = memoizeOne(function(dimensions) {
        return __assign$1({}, dimensions);
      }, function(_a2, _b2) {
        var a = _a2[0];
        var b = _b2[0];
        return shallowEqualDimensions(a, b);
      });
      _this.syncState = function() {
        if (!_this.syncedStateOnce) {
          _this.syncedStateOnce = true;
        }
        if (_this.scrollMightHaveUpdated) {
          Object.assign(_this.scrollState, getClientScroll(_this.scrollState));
        }
        if (_this.resizeMightHaveUpdated) {
          Object.assign(_this.dimensionsState, getClientDimensions());
        }
        var scrollDidUpdate = _this.scrollMightHaveUpdated && !shallowEqualScroll(_this.lastSyncedScrollState, _this.scrollState);
        var dimensionsDidUpdate = _this.resizeMightHaveUpdated && !shallowEqualDimensions(_this.lastSyncedDimensionsState, _this.dimensionsState);
        if (scrollDidUpdate) {
          _this.lastSyncedScrollState = __assign$1({}, _this.scrollState);
        }
        if (dimensionsDidUpdate) {
          _this.lastSyncedDimensionsState = __assign$1({}, _this.dimensionsState);
        }
        if (scrollDidUpdate || dimensionsDidUpdate) {
          var publicState = _this.getPropsFromState();
          _this.props.onUpdate(publicState, {
            scrollDidUpdate,
            dimensionsDidUpdate
          });
          _this.updateOnIdle(publicState, {
            scrollDidUpdate,
            dimensionsDidUpdate
          });
        }
      };
      _this.updateOnIdle = debounceOnUpdate(function() {
        var _a2;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        if (typeof _this.props.onIdledUpdate === "function") {
          (_a2 = _this.props).onIdledUpdate.apply(_a2, args);
        }
      }, 166);
      _this.state = {
        parentProviderExists: false
      };
      _this.scrollMightHaveUpdated = false;
      _this.resizeMightHaveUpdated = false;
      _this.scrollState = createEmptyScrollState();
      _this.dimensionsState = createEmptyDimensionState();
      _this.lastSyncedDimensionsState = __assign$1({}, _this.dimensionsState);
      _this.lastSyncedScrollState = __assign$1({}, _this.scrollState);
      _this.resizeObserver = null;
      _this.syncedStateOnce = false;
      return _this;
    }
    ViewportCollector2.prototype.componentDidMount = function() {
      var options = browserSupportsPassiveEvents ? { passive: true } : false;
      window.addEventListener("scroll", this.handleScroll, options);
      window.addEventListener("resize", this.handleResizeDebounce, options);
      window.addEventListener("orientationchange", this.handleResizeDebounce, options);
      if (typeof window.ResizeObserver !== "undefined") {
        this.resizeObserver = new window.ResizeObserver(this.handleResizeDebounce);
        this.resizeObserver.observe(document.body);
      }
      this.handleScroll();
      this.handleResize();
    };
    ViewportCollector2.prototype.componentWillUnmount = function() {
      window.removeEventListener("scroll", this.handleScroll, false);
      window.removeEventListener("resize", this.handleResizeDebounce, false);
      window.removeEventListener("orientationchange", this.handleResizeDebounce, false);
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
        this.resizeObserver = null;
      }
      if (typeof this.tickId === "number") {
        cancelAnimationFrame(this.tickId);
      }
    };
    ViewportCollector2.prototype.getPropsFromState = function() {
      return {
        scroll: this.getPublicScroll(this.lastSyncedScrollState),
        dimensions: this.getPublicDimensions(this.lastSyncedDimensionsState)
      };
    };
    ViewportCollector2.prototype.render = function() {
      return null;
    };
    return ViewportCollector2;
  }(reactExports.PureComponent)
);
var createFallbackViewportRequester = function() {
  var defaultValue;
  var lastAccess = 0;
  return function() {
    if (!defaultValue || now() - lastAccess > 1e3) {
      defaultValue = {
        scroll: getClientScroll(),
        dimensions: getClientDimensions()
      };
      lastAccess = now();
    }
    return defaultValue;
  };
};
var ViewportContext = reactExports.createContext({
  removeViewportChangeListener: function(handler) {
  },
  scheduleReinitializeChangeHandler: function(handler) {
  },
  addViewportChangeListener: function(handler, options) {
  },
  getCurrentViewport: createFallbackViewportRequester(),
  hasRootProviderAsParent: false,
  version: "1.12.1"
});
var maxIterations = function(priority) {
  switch (priority) {
    case "highest":
      return 0;
    case "high":
      return 4;
    case "normal":
      return 16;
    case "low":
      return 64;
  }
};
var shouldSkipIteration = function(_a2, budget) {
  var getPriority = _a2.priority, averageExecutionCost = _a2.averageExecutionCost, skippedIterations = _a2.skippedIterations;
  var priority = getPriority();
  if (priority === "highest") {
    return false;
  }
  if (priority !== "low" && averageExecutionCost <= budget) {
    return false;
  }
  if (averageExecutionCost <= budget / 10) {
    return false;
  }
  var probability = skippedIterations / maxIterations(priority);
  if (probability >= 1) {
    return false;
  }
  return Math.random() > probability;
};
var ViewportProvider = (
  /** @class */
  function(_super) {
    __extends$1(ViewportProvider2, _super);
    function ViewportProvider2(props) {
      var _this = _super.call(this, props) || this;
      _this.listeners = [];
      _this.triggerUpdateToListeners = function(state, _a2, options) {
        var scrollDidUpdate = _a2.scrollDidUpdate, dimensionsDidUpdate = _a2.dimensionsDidUpdate;
        var getOverallDuration = createPerformanceMarker();
        var _b2 = Object.assign({ isIdle: false, shouldInitialize: false }, options), isIdle = _b2.isIdle, shouldInitialize = _b2.shouldInitialize;
        var updatableListeners = _this.listeners.filter(function(_a22) {
          var notifyScroll = _a22.notifyScroll, notifyDimensions = _a22.notifyDimensions, notifyOnlyWhenIdle = _a22.notifyOnlyWhenIdle, skippedIterations = _a22.skippedIterations, initialized = _a22.initialized;
          var needsUpdate = skippedIterations > 0;
          if (notifyOnlyWhenIdle() !== isIdle && !needsUpdate) {
            return false;
          }
          if (shouldInitialize && !initialized) {
            return true;
          }
          var updateForScroll = notifyScroll() && scrollDidUpdate;
          var updateForDimensions = notifyDimensions() && dimensionsDidUpdate;
          return updateForScroll || updateForDimensions;
        });
        if (_this.props.experimentalSchedulerEnabled) {
          if (!isIdle) {
            var budget_1 = 16 / updatableListeners.length;
            updatableListeners = updatableListeners.filter(function(listener) {
              var skip = listener.initialized ? shouldSkipIteration(listener, budget_1) : false;
              if (skip) {
                listener.skippedIterations++;
                return false;
              }
              listener.skippedIterations = 0;
              return true;
            });
          }
        }
        var layouts = updatableListeners.map(function(_a22) {
          var recalculateLayoutBeforeUpdate = _a22.recalculateLayoutBeforeUpdate;
          if (recalculateLayoutBeforeUpdate) {
            var getDuration = createPerformanceMarker();
            var layoutState = recalculateLayoutBeforeUpdate(state);
            return [layoutState, getDuration()];
          }
          return null;
        });
        var overallJSHandlerTotalCost = 0;
        updatableListeners.forEach(function(listener, index) {
          var handler = listener.handler, averageExecutionCost = listener.averageExecutionCost, iterations = listener.iterations;
          var _a22 = layouts[index] || [null, 0], layout = _a22[0], layoutCost = _a22[1];
          var getDuration = createPerformanceMarker();
          handler(state, layout);
          var totalCost = layoutCost + getDuration();
          var diff = totalCost - averageExecutionCost;
          var i = iterations + 1;
          listener.averageExecutionCost = averageExecutionCost + diff / i;
          listener.iterations = i;
          listener.initialized = true;
          overallJSHandlerTotalCost += totalCost;
        });
        if (_this.props.experimentalSchedulerLayoutCalculatorEnabled && updatableListeners.length) {
          setTimeout(function() {
            var diffPerHandler = (getOverallDuration() - overallJSHandlerTotalCost) / updatableListeners.length;
            updatableListeners.forEach(function(listener) {
              listener.averageExecutionCost = listener.averageExecutionCost + diffPerHandler / listener.iterations;
            });
          }, 0);
        }
      };
      _this.addViewportChangeListener = function(handler, options) {
        _this.listeners.push(__assign$1({ handler, iterations: 0, averageExecutionCost: 0, skippedIterations: 0, initialized: false }, options));
        _this.handleListenerUpdate();
      };
      _this.scheduleReinitializeChangeHandler = function(h) {
        var listener = _this.listeners.find(function(_a2) {
          var handler = _a2.handler;
          return handler === h;
        });
        if (listener && listener.initialized) {
          listener.initialized = false;
          _this.handleListenerUpdate();
        }
      };
      _this.removeViewportChangeListener = function(h) {
        _this.listeners = _this.listeners.filter(function(_a2) {
          var handler = _a2.handler;
          return handler !== h;
        });
        _this.handleListenerUpdate();
      };
      _this.collector = reactExports.createRef();
      _this.getCurrentDefaultViewport = createFallbackViewportRequester();
      _this.contextValue = {
        addViewportChangeListener: _this.addViewportChangeListener,
        removeViewportChangeListener: _this.removeViewportChangeListener,
        scheduleReinitializeChangeHandler: _this.scheduleReinitializeChangeHandler,
        getCurrentViewport: function() {
          if (_this.collector.current && _this.collector.current.syncedStateOnce) {
            return _this.collector.current.getPropsFromState();
          }
          return _this.getCurrentDefaultViewport();
        },
        hasRootProviderAsParent: true,
        version: "1.12.1"
      };
      _this.renderChildren = function(props2) {
        if (props2.hasRootProviderAsParent) {
          return _this.props.children;
        }
        return reactExports.createElement(
          reactExports.Fragment,
          null,
          _this.state.hasListeners && reactExports.createElement(ViewportCollector, { ref: _this.collector, onUpdate: _this.triggerUpdateToListeners, onIdledUpdate: function(state, updates) {
            return _this.triggerUpdateToListeners(state, updates, { isIdle: true });
          } }),
          reactExports.createElement(ViewportContext.Provider, { value: _this.contextValue }, _this.props.children)
        );
      };
      _this.state = {
        hasListeners: false
      };
      return _this;
    }
    ViewportProvider2.prototype.componentWillUnmount = function() {
      if (typeof this.updateListenersTick === "number") {
        clearTimeout(this.updateListenersTick);
      }
      if (typeof this.initializeListenersTick === "number") {
        cancelAnimationFrame(this.initializeListenersTick);
      }
    };
    ViewportProvider2.prototype.handleListenerUpdate = function() {
      var _this = this;
      if (this.updateListenersTick === void 0) {
        this.updateListenersTick = setTimeout(function() {
          var nextState = _this.listeners.length !== 0;
          if (_this.state.hasListeners !== nextState) {
            _this.setState({
              hasListeners: _this.listeners.length !== 0
            });
          }
          _this.updateListenersTick = void 0;
        }, 1);
      }
      if (this.initializeListenersTick === void 0) {
        this.initializeListenersTick = requestAnimationFrame(function() {
          if (_this.collector.current && _this.collector.current.syncedStateOnce && _this.listeners.some(function(l) {
            return !l.initialized;
          })) {
            _this.triggerUpdateToListeners(_this.collector.current.getPropsFromState(), {
              dimensionsDidUpdate: false,
              scrollDidUpdate: false
            }, {
              isIdle: false,
              shouldInitialize: true
            });
          }
          _this.initializeListenersTick = void 0;
        });
      }
    };
    ViewportProvider2.prototype.render = function() {
      return reactExports.createElement(ViewportContext.Consumer, null, this.renderChildren);
    };
    return ViewportProvider2;
  }(reactExports.PureComponent)
);
var ObserveViewport = (
  /** @class */
  function(_super) {
    __extends$1(ObserveViewport2, _super);
    function ObserveViewport2(props) {
      var _this = _super.call(this, props) || this;
      _this.handleViewportUpdate = function(viewport, layoutSnapshot) {
        if (_this.props.onUpdate) {
          _this.props.onUpdate(viewport, layoutSnapshot);
        }
        if (_this.props.children) {
          _this.syncState(viewport);
        }
      };
      _this.registerViewportListeners = function(_a2) {
        var addViewportChangeListener = _a2.addViewportChangeListener, removeViewportChangeListener = _a2.removeViewportChangeListener, scheduleReinitializeChangeHandler = _a2.scheduleReinitializeChangeHandler, hasRootProviderAsParent = _a2.hasRootProviderAsParent, getCurrentViewport = _a2.getCurrentViewport;
        if (!hasRootProviderAsParent) {
          return null;
        }
        var shouldRegister = _this.removeViewportChangeListener !== removeViewportChangeListener;
        if (!shouldRegister) {
          return null;
        }
        if (_this.removeViewportChangeListener) {
          _this.removeViewportChangeListener(_this.handleViewportUpdate);
        }
        _this.removeViewportChangeListener = removeViewportChangeListener;
        _this.scheduleReinitializeChangeHandler = scheduleReinitializeChangeHandler;
        addViewportChangeListener(_this.handleViewportUpdate, {
          notifyScroll: function() {
            return !_this.props.disableScrollUpdates;
          },
          notifyDimensions: function() {
            return !_this.props.disableDimensionsUpdates;
          },
          notifyOnlyWhenIdle: function() {
            return _this.props.deferUpdateUntilIdle;
          },
          priority: function() {
            return _this.props.priority;
          },
          recalculateLayoutBeforeUpdate: function(viewport) {
            if (_this.props.recalculateLayoutBeforeUpdate) {
              return _this.props.recalculateLayoutBeforeUpdate(viewport);
            }
            return null;
          }
        });
        if (_this.props.children) {
          _this.syncState(getCurrentViewport());
        }
        return null;
      };
      _this.state = {
        scroll: createEmptyScrollState(),
        dimensions: createEmptyDimensionState()
      };
      return _this;
    }
    ObserveViewport2.prototype.componentDidUpdate = function(prevProps) {
      var dimensionsBecameActive = !this.props.disableDimensionsUpdates && prevProps.disableDimensionsUpdates;
      var scrollBecameActive = !this.props.disableScrollUpdates && prevProps.disableScrollUpdates;
      if (typeof this.scheduleReinitializeChangeHandler === "function" && (dimensionsBecameActive || scrollBecameActive)) {
        this.scheduleReinitializeChangeHandler(this.handleViewportUpdate);
      }
    };
    ObserveViewport2.prototype.componentWillUnmount = function() {
      if (this.removeViewportChangeListener) {
        this.removeViewportChangeListener(this.handleViewportUpdate);
      }
      this.removeViewportChangeListener = void 0;
      this.scheduleReinitializeChangeHandler = void 0;
      if (typeof this.tickId === "number") {
        cancelAnimationFrame(this.tickId);
      }
    };
    ObserveViewport2.prototype.syncState = function(nextViewport) {
      var _this = this;
      this.nextViewport = nextViewport;
      if (this.tickId === void 0) {
        this.tickId = requestAnimationFrame(function() {
          if (_this.nextViewport) {
            _this.setState(_this.nextViewport);
          }
          _this.tickId = void 0;
          _this.nextViewport = void 0;
        });
      }
    };
    Object.defineProperty(ObserveViewport2.prototype, "optionNotifyScroll", {
      get: function() {
        return !this.props.disableScrollUpdates;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ObserveViewport2.prototype, "optionNotifyDimensions", {
      get: function() {
        return !this.props.disableDimensionsUpdates;
      },
      enumerable: true,
      configurable: true
    });
    ObserveViewport2.prototype.render = function() {
      var children = this.props.children;
      return reactExports.createElement(
        reactExports.Fragment,
        null,
        reactExports.createElement(ViewportContext.Consumer, null, this.registerViewportListeners),
        children ? children(this.state) : null
      );
    };
    ObserveViewport2.defaultProps = {
      disableScrollUpdates: false,
      disableDimensionsUpdates: false,
      deferUpdateUntilIdle: false,
      priority: "normal"
    };
    return ObserveViewport2;
  }(reactExports.Component)
);
/** @class */
(function(_super) {
  __extends$1(ObserveBoundingClientRect2, _super);
  function ObserveBoundingClientRect2(props) {
    var _this = _super.call(this, props) || this;
    _this.syncState = function() {
      var node = _this.props.node;
      if (!node || !node.current) {
        return;
      }
      var rect = _this.getRectFromNode();
      if (rect && !_this.state.isInitialized) {
        _this.setState(__assign$1(__assign$1({}, rect), { isInitialized: true }));
        return;
      }
      _this.setState(rect);
    };
    _this.state = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      height: 0,
      width: 0,
      isInitialized: false
    };
    return _this;
  }
  ObserveBoundingClientRect2.prototype.componentDidMount = function() {
    this.tick(this.syncState);
  };
  ObserveBoundingClientRect2.prototype.componentDidUpdate = function(prevProps, prevState) {
    var rect = this.getRectFromState();
    var prevRect = this.getRectFromState(prevState);
    if (!rect) {
      return;
    }
    if (this.props.onInit) {
      if (!prevState.isInitialized && this.state.isInitialized) {
        this.props.onInit(rect);
      }
    }
    if (this.props.onUpdate) {
      if (prevRect === null || !shallowEqualRect(rect, prevRect)) {
        this.props.onUpdate(rect);
      }
    }
  };
  ObserveBoundingClientRect2.prototype.componentWillUnmount = function() {
    if (typeof this.tickId === "number") {
      cancelAnimationFrame(this.tickId);
    }
  };
  ObserveBoundingClientRect2.prototype.tick = function(updater) {
    var _this = this;
    this.tickId = requestAnimationFrame(function() {
      updater();
      _this.tick(updater);
    });
  };
  ObserveBoundingClientRect2.prototype.getRectFromState = function(state) {
    if (state === void 0) {
      state = this.state;
    }
    if (!state.isInitialized) {
      return null;
    }
    return {
      height: state.height,
      width: state.width,
      top: state.top,
      bottom: state.bottom,
      left: state.left,
      right: state.right
    };
  };
  ObserveBoundingClientRect2.prototype.getRectFromNode = function() {
    var node = this.props.node;
    if (!node || !node.current) {
      return null;
    }
    var rect = node.current.getBoundingClientRect();
    return {
      height: rect.height,
      width: rect.width,
      top: rect.top,
      bottom: rect.bottom,
      left: rect.left,
      right: rect.right
    };
  };
  ObserveBoundingClientRect2.prototype.render = function() {
    var children = this.props.children;
    return typeof children === "function" ? children(this.getRectFromState()) : null;
  };
  return ObserveBoundingClientRect2;
})(reactExports.PureComponent);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e2) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e2.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e2.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
var StickyGroupContext = reactExports.createContext({
  stickyOffset: { top: 0, height: 0 },
  updateStickyOffset: function(offset, height) {
  }
});
var connect = function() {
  return function(WrappedComponent) {
    var ConnectedComponent = function(props) {
      return reactExports.createElement(StickyGroupContext.Consumer, null, function(context) {
        return reactExports.createElement(WrappedComponent, __assign({}, props, { stickyOffset: context.stickyOffset, updateStickyOffset: context.updateStickyOffset }));
      });
    };
    var displayName = WrappedComponent.displayName || WrappedComponent.name || "Component";
    ConnectedComponent.displayName = "connectSticky(" + displayName + ")";
    return ConnectedComponent;
  };
};
var StickyScrollUpProvider = (
  /** @class */
  function(_super) {
    __extends(StickyScrollUpProvider2, _super);
    function StickyScrollUpProvider2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.stickyOffset = {
        top: 0,
        height: 0
      };
      _this.updateStickyOffset = function(stickyOffset, height) {
        _this.stickyOffset.top = Math.min(stickyOffset, height);
        _this.stickyOffset.height = height;
      };
      return _this;
    }
    StickyScrollUpProvider2.prototype.render = function() {
      return reactExports.createElement(
        ViewportProvider,
        { experimentalSchedulerEnabled: true },
        reactExports.createElement(StickyGroupContext.Provider, { value: {
          updateStickyOffset: this.updateStickyOffset,
          stickyOffset: this.stickyOffset
        } }, this.props.children)
      );
    };
    return StickyScrollUpProvider2;
  }(reactExports.PureComponent)
);
var baseStyles = {
  width: "inherit"
};
var prefixTransform = function(transform) {
  return {
    transform,
    WebkitTransform: transform,
    msTransform: transform,
    OTransform: transform
  };
};
var StickyElement = function(_a2) {
  var children = _a2.children, forwardRef = _a2.forwardRef, _b2 = _a2.style, overrideStyles = _b2 === void 0 ? {} : _b2, _c2 = _a2.positionStyle, positionStyle = _c2 === void 0 ? {} : _c2, disabled = _a2.disabled, renderArgs = _a2.renderArgs, props = __rest(_a2, ["children", "forwardRef", "style", "positionStyle", "disabled", "renderArgs"]);
  var style = !disabled ? __assign(__assign(__assign({}, baseStyles), positionStyle), overrideStyles) : {};
  if (style.transform) {
    Object.assign(style, prefixTransform(style.transform));
  }
  return reactExports.createElement("div", __assign({ ref: forwardRef, style }, props), typeof children === "function" ? children(renderArgs) : children);
};
var ElementResizeObserver = (
  /** @class */
  function(_super) {
    __extends(ElementResizeObserver2, _super);
    function ElementResizeObserver2(props) {
      var _this = _super.call(this, props) || this;
      _this.resizeObserver = null;
      return _this;
    }
    ElementResizeObserver2.prototype.componentDidMount = function() {
      this.resetObserver();
      this.installObserver();
    };
    ElementResizeObserver2.prototype.componentDidUpdate = function() {
      this.resetObserver();
      this.installObserver();
    };
    ElementResizeObserver2.prototype.componentWillUnmount = function() {
      this.resetObserver();
    };
    ElementResizeObserver2.prototype.installObserver = function() {
      var _this = this;
      if (!this.props.stickyRef.current) {
        return;
      }
      if (typeof window.ResizeObserver !== "undefined") {
        this.resizeObserver = new window.ResizeObserver(function(entries) {
          if (entries && entries[0] && entries[0].contentRect) {
            _this.props.onUpdate(entries[0].contentRect);
          }
        });
        this.resizeObserver.observe(this.props.stickyRef.current);
      }
    };
    ElementResizeObserver2.prototype.resetObserver = function() {
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
        this.resizeObserver = null;
      }
    };
    ElementResizeObserver2.prototype.render = function() {
      return null;
    };
    return ElementResizeObserver2;
  }(reactExports.PureComponent)
);
var StickyPlaceholder = (
  /** @class */
  function(_super) {
    __extends(StickyPlaceholder2, _super);
    function StickyPlaceholder2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.state = {
        isRecalculating: false,
        isWaitingForRecalculation: false,
        stickyHeight: null,
        stickyWidth: null,
        clientHash: null
      };
      _this.calculateSize = function() {
        if (_this.props.stickyRef.current && !_this.state.isRecalculating && _this.state.isWaitingForRecalculation) {
          return _this.props.stickyRef.current.getBoundingClientRect();
        }
        return null;
      };
      _this.handleDimensionsUpdate = function(_a2, stickyRect) {
        var dimensions = _a2.dimensions;
        if (_this.isUnmounted) {
          return;
        }
        _this.lastDimensions = dimensions;
        var width = dimensions.width, clientWidth = dimensions.clientWidth;
        var nextClientHash = [width, clientWidth].join(",");
        if (!_this.state.isWaitingForRecalculation && _this.state.clientHash !== nextClientHash) {
          _this.setState({
            clientHash: nextClientHash,
            isRecalculating: true,
            isWaitingForRecalculation: true
          }, function() {
            if (_this.isUnmounted) {
              return;
            }
            _this.recalculationTick = requestAnimationFrame(function() {
              _this.setState({
                isRecalculating: false
              });
              _this.recalculationTick = void 0;
            });
          });
          return;
        }
        if (stickyRect) {
          if (_this.state.isWaitingForRecalculation || stickyRect.height !== _this.state.stickyHeight || stickyRect.width !== _this.state.stickyWidth) {
            _this.setState({
              clientHash: nextClientHash,
              stickyHeight: stickyRect.height,
              stickyWidth: stickyRect.width,
              isWaitingForRecalculation: false
            });
            return;
          }
        }
      };
      _this.handleElementResize = function(stickyRect) {
        if (_this.lastDimensions) {
          _this.handleDimensionsUpdate({ dimensions: _this.lastDimensions }, stickyRect);
        }
      };
      return _this;
    }
    StickyPlaceholder2.prototype.componentWillUnmount = function() {
      cancelAnimationFrame(this.recalculationTick);
      this.isUnmounted = true;
    };
    StickyPlaceholder2.prototype.render = function() {
      var _a2 = this.props, children = _a2.children, disabled = _a2.disabled, style = _a2.style, className = _a2.className, forwardRef = _a2.forwardRef;
      var _b2 = this.state, isRecalculating = _b2.isRecalculating, isWaitingForRecalculation = _b2.isWaitingForRecalculation, stickyHeight = _b2.stickyHeight, stickyWidth = _b2.stickyWidth;
      var isActive = !disabled && !isWaitingForRecalculation;
      var baseStyle = __assign({ position: "relative" }, style);
      var containerStyle = isActive ? __assign({ height: stickyHeight, width: stickyWidth }, baseStyle) : baseStyle;
      return reactExports.createElement(
        reactExports.Fragment,
        null,
        reactExports.createElement("div", { ref: forwardRef, style: containerStyle, className }, children({
          isRecalculating: isWaitingForRecalculation
        })),
        !this.props.disableResizing && reactExports.createElement(
          reactExports.Fragment,
          null,
          reactExports.createElement(ObserveViewport, { disableScrollUpdates: true, disableDimensionsUpdates: isRecalculating, onUpdate: this.handleDimensionsUpdate, recalculateLayoutBeforeUpdate: this.calculateSize, priority: "highest" }),
          reactExports.createElement(ElementResizeObserver, { stickyRef: this.props.stickyRef, onUpdate: this.handleElementResize })
        )
      );
    };
    StickyPlaceholder2.defaultProps = {
      style: {}
    };
    return StickyPlaceholder2;
  }(reactExports.Component)
);
var supportsWillChange = function() {
  var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && document.documentElement;
  if (!isBrowser) {
    return false;
  }
  return "willChange" in document.documentElement.style;
}();
var supportsPositionSticky = function() {
  var isBrowser = typeof window !== "undefined" && typeof CSS !== "undefined";
  if (!isBrowser) {
    return false;
  }
  return CSS.supports ? CSS.supports("position: sticky") : false;
}();
var shallowEqualPositionStyles = function(a, b) {
  if (a === b) {
    return true;
  }
  if (a.position !== b.position) {
    return false;
  }
  if (a.top !== b.top) {
    return false;
  }
  if (a.transform !== b.transform) {
    return false;
  }
  if (a.willChange !== b.willChange) {
    return false;
  }
  return true;
};
var Sticky = (
  /** @class */
  function(_super) {
    __extends(Sticky2, _super);
    function Sticky2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.stickyRef = reactExports.createRef();
      _this.placeholderRef = reactExports.createRef();
      _this.nativeStickyThrewOnce = false;
      _this.state = {
        isSticky: false,
        isDockedToBottom: false,
        isNearToViewport: false,
        appliedOverflowScroll: "end",
        styles: {},
        useNativeSticky: false
      };
      _this.hasContainer = function() {
        return Boolean(_this.props.container);
      };
      _this.isNearToViewport = function(rect) {
        var padding = 700;
        return rect.top - padding < 0 && rect.bottom + padding > 0;
      };
      _this.getOverflowScrollType = function(rectSticky, dimensions) {
        return _this.props.overflowScroll === "flow" && _this.calcHeightDifference(rectSticky, dimensions) > 0 ? "flow" : "end";
      };
      _this.isSticky = function(rect, containerRect, dimensions) {
        if (!_this.hasContainer()) {
          return Math.round(containerRect.top) <= _this.offsetTop;
        }
        if (Math.round(containerRect.top) > _this.offsetTop) {
          return false;
        }
        var height = _this.props.overflowScroll === "flow" ? Math.min(rect.height, dimensions.height) : rect.height;
        if (Math.round(containerRect.bottom) - _this.offsetTop < height) {
          return false;
        }
        return true;
      };
      _this.shouldUseNativeSticky = function(appliedOverflowScroll) {
        if (!_this.props.experimentalNative || !supportsPositionSticky || appliedOverflowScroll !== "end" || _this.props.stickyOffset.top !== 0) {
          return false;
        }
        return true;
      };
      _this.isDockedToBottom = function(rect, containerRect, dimensions) {
        if (!rect || !containerRect) {
          return false;
        }
        if (!_this.hasContainer()) {
          return false;
        }
        if (rect.height > containerRect.height) {
          return false;
        }
        var height = _this.props.overflowScroll === "flow" ? Math.min(rect.height, dimensions.height) : rect.height;
        if (Math.round(containerRect.bottom) - _this.offsetTop >= height) {
          return false;
        }
        return true;
      };
      _this.recalculateLayoutBeforeUpdate = function() {
        var containerRect = _this.container.current.getBoundingClientRect();
        var stickyRect = _this.stickyRef.current.getBoundingClientRect();
        return {
          stickyRect,
          containerRect
        };
      };
      _this.handleScrollUpdate = function(_a2, _b2) {
        var scroll = _a2.scroll, dimensions = _a2.dimensions;
        var stickyRect = _b2.stickyRect, containerRect = _b2.containerRect;
        if (_this.props.disabled) {
          return;
        }
        var willRenderAsAFunction = typeof _this.props.children === "function";
        var appliedOverflowScroll = _this.getOverflowScrollType(stickyRect, dimensions);
        var useNativeSticky = _this.shouldUseNativeSticky(appliedOverflowScroll);
        var styles = useNativeSticky ? {} : _this.getStickyStyles(stickyRect, containerRect, scroll, dimensions);
        var stateStyles = _this.state.styles;
        var stylesDidChange = !shallowEqualPositionStyles(styles, stateStyles);
        var isSticky = willRenderAsAFunction ? _this.isSticky(stickyRect, containerRect, dimensions) : false;
        var isDockedToBottom = willRenderAsAFunction ? _this.isDockedToBottom(stickyRect, containerRect, dimensions) : false;
        var isNearToViewport = _this.isNearToViewport(stickyRect);
        var useNativeStickyDidChange = _this.state.useNativeSticky !== useNativeSticky;
        var isStickyDidChange = _this.state.isSticky !== isSticky;
        var isDockedToBottomDidChange = _this.state.isDockedToBottom !== isDockedToBottom;
        var isNearToViewportDidChange = _this.state.isNearToViewport !== isNearToViewport;
        var appliedOverflowScrollDidChange = appliedOverflowScroll !== _this.state.appliedOverflowScroll;
        if (!useNativeStickyDidChange && !stylesDidChange && !isStickyDidChange && !isDockedToBottomDidChange && !isNearToViewportDidChange && !appliedOverflowScrollDidChange) {
          return;
        }
        _this.setState({
          useNativeSticky,
          isSticky,
          isDockedToBottom,
          isNearToViewport,
          appliedOverflowScroll,
          styles: stylesDidChange ? styles : stateStyles
        });
      };
      _this.renderSticky = function(_a2) {
        var isRecalculating = _a2.isRecalculating;
        var _b2 = _this.props, children = _b2.children, disabled = _b2.disabled, stickyProps = _b2.stickyProps;
        return reactExports.createElement(StickyElement, __assign({ forwardRef: _this.stickyRef, positionStyle: _this.state.styles, disabled: disabled || isRecalculating, children, renderArgs: {
          isSticky: _this.state.isSticky,
          isDockedToBottom: _this.state.isDockedToBottom,
          isNearToViewport: _this.state.isNearToViewport,
          appliedOverflowScroll: _this.state.appliedOverflowScroll
        } }, stickyProps));
      };
      return _this;
    }
    Object.defineProperty(Sticky2.prototype, "container", {
      get: function() {
        return this.props.container || this.placeholderRef;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Sticky2.prototype, "offsetTop", {
      get: function() {
        return this.props.stickyOffset.top + this.props.defaultOffsetTop;
      },
      enumerable: false,
      configurable: true
    });
    Sticky2.prototype.calcHeightDifference = function(rectSticky, dimensions) {
      if (!dimensions) {
        return 0;
      }
      return Math.max(0, Math.round(rectSticky.height) - dimensions.height);
    };
    Sticky2.prototype.calcOverflowScrollFlowStickyStyles = function(rectSticky, containerRect, scroll, dimensions) {
      var containerTop = Math.round(containerRect.top);
      var stickyTop = Math.round(rectSticky.top);
      var scrollY = Math.round(scroll.y);
      var scrollYTurn = Math.round(scroll.yTurn);
      var heightDiff = this.calcHeightDifference(rectSticky, dimensions);
      var containerTopOffset = containerTop + scrollY - this.props.stickyOffset.height;
      var isStickyBottomReached = Math.round(rectSticky.bottom) <= dimensions.height;
      var isContainerTopReached = containerTop < this.offsetTop;
      var isTurnWithinHeightOffset = scrollYTurn - heightDiff <= containerTopOffset;
      var isTurnPointBeforeContainer = scrollYTurn < containerTopOffset;
      var isTurnPointAfterContainer = scrollYTurn > containerTopOffset + containerRect.height;
      var isTurnPointWithinContainer = !(isTurnPointBeforeContainer || isTurnPointAfterContainer);
      if (scroll.isScrollingDown && !isStickyBottomReached && !isTurnPointWithinContainer || scroll.isScrollingUp && !isContainerTopReached || scroll.isScrollingUp && isTurnWithinHeightOffset && !isTurnPointWithinContainer) {
        return {
          position: "absolute",
          top: 0
        };
      }
      if (scroll.isScrollingDown && isStickyBottomReached) {
        return {
          position: "fixed",
          top: -heightDiff
        };
      }
      var isStickyTopReached = stickyTop >= this.offsetTop;
      if (scroll.isScrollingDown && isTurnPointWithinContainer || scroll.isScrollingUp && !isTurnPointBeforeContainer && !isStickyTopReached) {
        return {
          position: "absolute",
          top: Math.abs(scrollY - stickyTop + (containerTop - scrollY))
        };
      }
      return {
        position: "fixed",
        top: this.offsetTop
      };
    };
    Sticky2.prototype.calcPositionStyles = function(rectSticky, containerRect, scroll, dimensions) {
      if (this.isSticky(rectSticky, containerRect, dimensions)) {
        if (this.getOverflowScrollType(rectSticky, dimensions) === "flow") {
          return this.calcOverflowScrollFlowStickyStyles(rectSticky, containerRect, scroll, dimensions);
        }
        var stickyOffset = this.props.stickyOffset.top;
        var stickyHeight = this.props.stickyOffset.height;
        var headIsFlexible = stickyOffset > 0 && stickyOffset < stickyHeight;
        if (headIsFlexible) {
          var relYTurn = Math.round(scroll.yTurn - scroll.y + scroll.yDTurn) - Math.round(containerRect.top);
          return {
            position: "absolute",
            top: relYTurn + this.offsetTop
          };
        }
        return {
          position: "fixed",
          top: this.offsetTop
        };
      }
      if (this.isDockedToBottom(rectSticky, containerRect, dimensions)) {
        return {
          position: "absolute",
          top: containerRect.height - rectSticky.height
        };
      }
      return {
        position: "absolute",
        top: 0
      };
    };
    Sticky2.prototype.getStickyStyles = function(rect, containerRect, scroll, dimensions) {
      var styles = this.calcPositionStyles(rect, containerRect, scroll, dimensions);
      if (!this.props.disableHardwareAcceleration) {
        var shouldAccelerate = this.isNearToViewport(rect);
        if (supportsWillChange) {
          styles.willChange = shouldAccelerate ? "position, top" : null;
        } else {
          styles.transform = shouldAccelerate ? "translateZ(0)" : null;
        }
      }
      return styles;
    };
    Sticky2.prototype.render = function() {
      var _a2 = this.props, disabled = _a2.disabled, disableResizing = _a2.disableResizing, style = _a2.style, className = _a2.className, overflowScroll = _a2.overflowScroll;
      return reactExports.createElement(
        reactExports.Fragment,
        null,
        reactExports.createElement(StickyPlaceholder, { className, style: this.state.useNativeSticky ? __assign({ position: "sticky", top: this.props.defaultOffsetTop }, style) : style, disabled, forwardRef: this.placeholderRef, stickyRef: this.stickyRef, disableResizing }, this.renderSticky),
        reactExports.createElement(ObserveViewport, { disableScrollUpdates: disabled, disableDimensionsUpdates: disabled || overflowScroll !== "flow", onUpdate: this.handleScrollUpdate, recalculateLayoutBeforeUpdate: this.recalculateLayoutBeforeUpdate, priority: this.state.isNearToViewport ? "highest" : "low" })
      );
    };
    Sticky2.defaultProps = {
      stickyOffset: { top: 0, height: 0 },
      defaultOffsetTop: 0,
      disableResizing: false,
      disableHardwareAcceleration: false,
      overflowScroll: "end",
      experimentalNative: false,
      style: {}
    };
    return Sticky2;
  }(reactExports.PureComponent)
);
var Sticky$1 = connect()(Sticky);
var calcPositionStyles = function(rect, scroll, _a2) {
  var _b2 = _a2.offsetTop, offsetTop = _b2 === void 0 ? 0 : _b2;
  var rectTop = Math.round(rect.top);
  var scrollY = Math.round(scroll.y);
  if (scroll.isScrollingDown) {
    if (rectTop > 0 && scrollY < offsetTop) {
      return {
        position: "absolute",
        top: 0
      };
    }
    return {
      position: "absolute",
      top: Math.max(scrollY - offsetTop + rectTop, 0)
    };
  }
  var isTopVisible = rectTop >= 0;
  var isBottomVisible = rectTop + rect.height <= 0;
  if (!isTopVisible && !isBottomVisible) {
    return {
      position: "absolute",
      top: scrollY - offsetTop + rectTop
    };
  }
  if (scrollY <= offsetTop) {
    return {
      position: "absolute",
      top: 0
    };
  }
  if (Math.round(scroll.yDTurn) === 0) {
    if (isBottomVisible) {
      return {
        position: "absolute",
        top: Math.round(scroll.yTurn) - offsetTop - rect.height
      };
    }
    return {
      position: "absolute",
      top: Math.max(scrollY - offsetTop, 0)
    };
  }
  return {
    position: "fixed",
    top: 0
  };
};
var StickyScrollUp = (
  /** @class */
  function(_super) {
    __extends(StickyScrollUp2, _super);
    function StickyScrollUp2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.stickyRef = reactExports.createRef();
      _this.placeholderRef = reactExports.createRef();
      _this.stickyOffset = null;
      _this.stickyOffsetHeight = 0;
      _this.state = {
        styles: {},
        isNearToViewport: false,
        isSticky: false
      };
      _this.isNearToViewport = function(rect) {
        var padding = 700;
        return rect.top - padding < 0;
      };
      _this.recalculateLayoutBeforeUpdate = function() {
        return {
          placeholderRect: _this.placeholderRef.current.getBoundingClientRect(),
          stickyRect: _this.stickyRef.current.getBoundingClientRect()
        };
      };
      _this.handleViewportUpdate = function(_a2, _b2) {
        var scroll = _a2.scroll;
        var stickyRect = _b2.stickyRect, placeholderRect = _b2.placeholderRect;
        if (_this.props.disabled) {
          return;
        }
        var willRenderAsAFunction = typeof _this.props.children === "function";
        var nextOffset = Math.max(Math.round(stickyRect.bottom), 0);
        var nextOffsetHeight = stickyRect.height;
        var offsetDidChange = _this.stickyOffset !== nextOffset;
        var offsetHeightDidChange = _this.stickyOffsetHeight !== nextOffsetHeight;
        var styles = _this.getStickyStyles(stickyRect, placeholderRect, scroll);
        var stateStyles = _this.state.styles;
        var stylesDidChange = !shallowEqualPositionStyles(styles, stateStyles);
        var isNearToViewport = _this.isNearToViewport(stickyRect);
        var isSticky = willRenderAsAFunction ? styles.top === 0 && styles.position === "fixed" : false;
        var isNearToViewportDidChange = _this.state.isNearToViewport !== isNearToViewport;
        var isStickyDidChange = _this.state.isSticky !== isSticky;
        if (_this.props.updateStickyOffset && (offsetDidChange || offsetHeightDidChange)) {
          _this.props.updateStickyOffset(nextOffset, nextOffsetHeight);
        }
        if (!stylesDidChange && !isNearToViewportDidChange && !isStickyDidChange) {
          return;
        }
        _this.setState({
          styles: stylesDidChange ? styles : stateStyles,
          isNearToViewport,
          isSticky
        });
      };
      _this.renderSticky = function(_a2) {
        var isRecalculating = _a2.isRecalculating;
        var _b2 = _this.props, disabled = _b2.disabled, children = _b2.children, stickyProps = _b2.stickyProps;
        return reactExports.createElement(StickyElement, __assign({ forwardRef: _this.stickyRef, positionStyle: _this.state.styles, disabled: disabled || isRecalculating, children, renderArgs: {
          isNearToViewport: _this.state.isNearToViewport,
          isSticky: _this.state.isSticky
        } }, stickyProps));
      };
      return _this;
    }
    StickyScrollUp2.prototype.componentDidUpdate = function(prevProps, prevState) {
      if (this.props.updateStickyOffset && prevProps.disabled !== this.props.disabled) {
        this.props.updateStickyOffset(this.props.disabled ? 0 : this.stickyOffset, this.stickyOffsetHeight);
      }
    };
    StickyScrollUp2.prototype.getStickyStyles = function(stickyRect, placeholderRect, scroll) {
      var offsetTop = isNaN(this.props.defaultOffsetTop) ? Math.round(placeholderRect.top) + Math.round(scroll.y) : this.props.defaultOffsetTop;
      var styles = calcPositionStyles(stickyRect, scroll, {
        offsetTop
      });
      if (!this.props.disableHardwareAcceleration) {
        var shouldAccelerate = this.isNearToViewport(stickyRect);
        if (supportsWillChange) {
          styles.willChange = shouldAccelerate ? "position, top" : null;
        } else {
          styles.transform = shouldAccelerate ? "translateZ(0)" : null;
        }
      }
      return styles;
    };
    StickyScrollUp2.prototype.render = function() {
      var _a2 = this.props, disabled = _a2.disabled, disableResizing = _a2.disableResizing, style = _a2.style, className = _a2.className;
      return reactExports.createElement(
        reactExports.Fragment,
        null,
        reactExports.createElement(StickyPlaceholder, { className, style, disabled, stickyRef: this.stickyRef, disableResizing, forwardRef: this.placeholderRef }, this.renderSticky),
        reactExports.createElement(ObserveViewport, { disableScrollUpdates: disabled, disableDimensionsUpdates: true, onUpdate: this.handleViewportUpdate, recalculateLayoutBeforeUpdate: this.recalculateLayoutBeforeUpdate, priority: this.state.isNearToViewport ? "highest" : "low" })
      );
    };
    StickyScrollUp2.defaultProps = {
      disableHardwareAcceleration: false,
      disableResizing: false,
      style: {}
    };
    return StickyScrollUp2;
  }(reactExports.PureComponent)
);
connect()(StickyScrollUp);
const Headers = ({ className, shadow = false, sticky = false, testId, ...attributes }) => {
  const classes = classNames(
    "it-header-wrapper",
    {
      "it-shadow": shadow,
      "it-header-sticky": sticky
    },
    className
  );
  if (!sticky) {
    return /* @__PURE__ */ e.createElement("div", { className: classes, ...attributes, "data-testid": testId });
  }
  return /* @__PURE__ */ e.createElement(StickyScrollUpProvider, null, /* @__PURE__ */ e.createElement(Sticky$1, { style: { position: "sticky", zIndex: 2 }, "data-testid": testId }, /* @__PURE__ */ e.createElement("div", { className: classes, ...attributes })));
};
Headers.__docgenInfo = { "description": "", "methods": [], "displayName": "Headers", "props": { "shadow": { "required": false, "tsType": { "name": "boolean" }, "description": "Aggiunge un ombra per enfatizzare il componente rispetto alla pagina in cui è contenuto", "defaultValue": { "value": "false", "computed": false } }, "sticky": { "required": false, "tsType": { "name": "boolean" }, "description": 'Aggiunge il comportamento "sticky" ai componenti Header contenuti', "defaultValue": { "value": "false", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi addizionali per il componente Headers" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const CenterHeader = ({
  theme
}) => {
  return /* @__PURE__ */ e.createElement(Header, { type: "center", theme, small: true }, /* @__PURE__ */ e.createElement(HeaderContent, null, /* @__PURE__ */ e.createElement(HeaderBrand, { iconName: "it-code-circle", iconAlt: "it code circle icon" }, /* @__PURE__ */ e.createElement("h2", null, "Lorem Ipsum Lorem Ipsum"), /* @__PURE__ */ e.createElement("h3", null, "Inserire qui la tag line")), /* @__PURE__ */ e.createElement(HeaderRightZone, null, /* @__PURE__ */ e.createElement(HeaderSocialsZone, { label: "Seguici su" }, /* @__PURE__ */ e.createElement("ul", null, /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("a", { href: "#", "aria-label": "Facebook", target: "_blank" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-facebook" }))), /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("a", { href: "#", "aria-label": "Github", target: "_blank" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-github" }))), /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("a", { href: "#", "aria-label": "Twitter", target: "_blank" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-twitter" }))))), /* @__PURE__ */ e.createElement(HeaderSearch, { label: "Cerca", iconName: "it-search" }))));
};
const NavHeader = ({
  theme
}) => {
  const [isOpenSide, setIsOpenSide] = reactExports.useState(false);
  return /* @__PURE__ */ e.createElement(Header, { type: "navbar", theme }, /* @__PURE__ */ e.createElement(HeaderContent, { expand: "lg", megamenu: true }, /* @__PURE__ */ e.createElement(HeaderToggler, { onClick: () => {
    setIsOpenSide(!isOpenSide);
  }, "aria-controls": "nav1", "aria-expanded": "false", "aria-label": "Toggle navigation" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-burger" })), /* @__PURE__ */ e.createElement(Collapse, { navbar: true, header: true, isOpen: isOpenSide, onOverlayClick: () => {
    setIsOpenSide(!isOpenSide);
  } }, /* @__PURE__ */ e.createElement("div", { className: "menu-wrapper" }, /* @__PURE__ */ e.createElement(Nav, { navbar: true }, /* @__PURE__ */ e.createElement(NavItem, { active: true }, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: true }, /* @__PURE__ */ e.createElement("span", null, "link 1 active "), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "current"))), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", disabled: true }, "Link 2")), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#" }, "Link 3")), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#" }, "Link 4")), /* @__PURE__ */ e.createElement(Dropdown, { inNavbar: true }, /* @__PURE__ */ e.createElement(DropdownToggle, { caret: true }, /* @__PURE__ */ e.createElement("span", null, "Menu Dropdown")), /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 1")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 3")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 4"))))), /* @__PURE__ */ e.createElement(MegamenuItem, { itemName: "Megamenu con Immagine e Descrizione" }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(MegamenuHighlightColumn, { xs: "12", lg: "4", description: true }, /* @__PURE__ */ e.createElement("div", { className: "ratio ratio-21x9 lightgrey-bg-a1 mb-4 rounded" }, /* @__PURE__ */ e.createElement("figure", { className: "figure" }, /* @__PURE__ */ e.createElement("img", { src: "https://placehold.co/560x240/ebebeb/808080/?text=Immagine", className: "figure-img img-fluid rounded", alt: "Segnaposto" }))), /* @__PURE__ */ e.createElement("p", null, "Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.")), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "8" }, /* @__PURE__ */ e.createElement("div", { className: "it-heading-link-wrapper" }, /* @__PURE__ */ e.createElement("a", { className: "it-heading-link", href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "icon icon-sm me-2 mb-1", icon: "it-arrow-right-triangle" }), /* @__PURE__ */ e.createElement("span", null, "Esplora la sezione megamenu"))), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6" }, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 1")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 3")))), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6" }, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 4")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 5")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 6")))))))))))));
};
const SlimHeader = ({
  theme,
  brandText
}) => {
  const [isOpenCollapse, setIsOpenCollapse] = reactExports.useState(false);
  return /* @__PURE__ */ e.createElement(Header, { type: "slim", theme }, /* @__PURE__ */ e.createElement(HeaderContent, null, /* @__PURE__ */ e.createElement(HeaderBrand, null, brandText), /* @__PURE__ */ e.createElement(HeaderLinkZone, { "aria-label": "Navigazione accessoria" }, /* @__PURE__ */ e.createElement(HeaderToggler, { isOpen: isOpenCollapse, onClick: () => {
    setIsOpenCollapse(!isOpenCollapse);
  } }, /* @__PURE__ */ e.createElement("span", null, brandText), /* @__PURE__ */ e.createElement(Icon, { icon: "it-expand" })), /* @__PURE__ */ e.createElement(Collapse, { isOpen: isOpenCollapse, header: true }, /* @__PURE__ */ e.createElement(LinkList, { noWrapper: true }, /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, "Link 1"), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#", active: true }, "Link 2 Active")))), /* @__PURE__ */ e.createElement(HeaderRightZone, null, /* @__PURE__ */ e.createElement(Dropdown, { inNavbar: true }, /* @__PURE__ */ e.createElement(DropdownToggle, { caret: true }, "ITA"), /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { size: "12" }, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "ITA")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "ENG"))))))), /* @__PURE__ */ e.createElement("div", { className: "it-access-top-wrapper" }, /* @__PURE__ */ e.createElement(Button, { color: "primary", size: "sm" }, "Accedi")))));
};
const meta = {
  title: "Documentazione/Menu di navigazione/Header/Complete",
  component: Header,
  parameters: {
    docs: {
      controls: {
        exclude: ["isOpen", "className", "type", "small", "testId"]
      }
    }
  }
};
const CompleteHeaderStory = {
  render: ({
    theme,
    sticky
  }) => /* @__PURE__ */ e.createElement(Headers, { sticky }, /* @__PURE__ */ e.createElement(SlimHeader, { theme, brandText: "Ente di appartenenza" }), /* @__PURE__ */ e.createElement("div", { className: "it-nav-wrapper" }, /* @__PURE__ */ e.createElement(CenterHeader, { theme }), /* @__PURE__ */ e.createElement(NavHeader, { theme }))),
  args: {
    theme: "dark"
  },
  argTypes: {
    theme: {
      control: "radio",
      options: ["", "light", "dark"]
    }
  }
};
CompleteHeaderStory.parameters = {
  ...CompleteHeaderStory.parameters,
  docs: {
    ...(_a = CompleteHeaderStory.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: ({\n    theme,\n    sticky\n  }) => <Headers sticky={sticky}>\n      <SlimHeader theme={theme} brandText='Ente di appartenenza' />\n      <div className='it-nav-wrapper'>\n        <CenterHeader theme={theme} />\n        <NavHeader theme={theme} />\n      </div>\n    </Headers>,\n  args: {\n    theme: 'dark'\n  },\n  argTypes: {\n    theme: {\n      control: 'radio',\n      options: ['', 'light', 'dark']\n    }\n  }\n}",
      ...(_c = (_b = CompleteHeaderStory.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["CompleteHeaderStory"];
const CompleteHeader_stories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CompleteHeaderStory,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  CompleteHeaderStory as C,
  Headers as H,
  CompleteHeader_stories as a
};
