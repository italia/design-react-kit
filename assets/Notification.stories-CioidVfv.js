var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A;
import { r as reactExports, e } from "./index-N7T0HPyM.js";
import { B as Button } from "./Button-DzBfv9Kx.js";
import "./track-focus-DbJ2CO43.js";
import { r as reactDomExports } from "./index-_6PbV05F.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { I as Icon } from "./Icon-Dnsb7XVC.js";
const PositionContext = /* @__PURE__ */ reactExports.createContext(void 0);
function usePosition() {
  const context = reactExports.useContext(PositionContext);
  return context;
}
const getBorderStyleFix = (fix) => {
  const borderReset = ["top", "bottom", "right", "left"].filter((curPosition) => fix === "left" ? curPosition !== "right" : curPosition !== "left").map(
    (borderPosition) => `border${borderPosition[0].toUpperCase() + borderPosition.substring(1)}`
  );
  const customStyle = {};
  for (const borderPos of borderReset) {
    customStyle[borderPos] = "none";
  }
  return customStyle;
};
function pickIcon(state) {
  switch (state) {
    case "error":
      return "it-close-circle";
    case "info":
      return "it-info-circle";
    case "warning":
      return "it-error";
    case "success":
      return "it-check-circle";
    default:
      return void 0;
  }
}
function NotificationElement({ closeToast, toastProps, title, body, options }) {
  const globalFix = usePosition();
  const { icon: userIcon, state, fix: localFix, dismissable } = options;
  const fixPosition = localFix == null && globalFix ? globalFix : localFix || globalFix;
  const { autoClose, style } = toastProps;
  const content = typeof body === "string" ? /* @__PURE__ */ e.createElement("p", null, body) : body;
  const icon = userIcon || pickIcon(state);
  const borderFixes = getBorderStyleFix(fixPosition);
  const wrapperClass = classNames("notification", state, {
    [`${fixPosition}-fix`]: fixPosition,
    "with-icon": icon,
    dismissable: dismissable || !autoClose
  });
  const customStyle = {
    ...style,
    ...borderFixes,
    // force a display as the notification class has a "display: none" set
    display: "block"
  };
  return /* @__PURE__ */ e.createElement("div", { className: wrapperClass, style: customStyle }, /* @__PURE__ */ e.createElement("h5", null, title, icon ? /* @__PURE__ */ e.createElement(Icon, { icon }) : null), content, (!autoClose || dismissable) && /* @__PURE__ */ e.createElement(Button, { className: "notification-close", onClick: closeToast }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-close" }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Chiudi notifica: ", title)));
}
const createNotification = (title, body, options, closeToast, toastProps) => /* @__PURE__ */ e.createElement(NotificationElement, { title, body, options, closeToast, toastProps });
createNotification.__docgenInfo = { "description": "Internal use only. Exported for documentation purposes.\n@internal", "methods": [], "displayName": "createNotification" };
function r(e2) {
  var t, f, n = "";
  if ("string" == typeof e2 || "number" == typeof e2) n += e2;
  else if ("object" == typeof e2) if (Array.isArray(e2)) for (t = 0; t < e2.length; t++) e2[t] && (f = r(e2[t])) && (n && (n += " "), n += f);
  else for (t in e2) e2[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e2, t, f = 0, n = ""; f < arguments.length; ) (e2 = arguments[f++]) && (t = r(e2)) && (n && (n += " "), n += t);
  return n;
}
function _extends() {
  _extends = Object.assign || function(target) {
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
function isNum(v) {
  return typeof v === "number" && !isNaN(v);
}
function isBool(v) {
  return typeof v === "boolean";
}
function isStr(v) {
  return typeof v === "string";
}
function isFn(v) {
  return typeof v === "function";
}
function parseClassName(v) {
  return isStr(v) || isFn(v) ? v : null;
}
function isToastIdValid(toastId) {
  return toastId === 0 || toastId;
}
function getAutoCloseDelay(toastAutoClose, containerAutoClose) {
  return toastAutoClose === false || isNum(toastAutoClose) && toastAutoClose > 0 ? toastAutoClose : containerAutoClose;
}
var canUseDom = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function canBeRendered(content) {
  return reactExports.isValidElement(content) || isStr(content) || isFn(content) || isNum(content);
}
var POSITION = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  TOP_CENTER: "top-center",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM_CENTER: "bottom-center"
};
var TYPE = {
  INFO: "info",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
  DEFAULT: "default",
  DARK: "dark"
};
function collapseToast(node, done, duration) {
  if (duration === void 0) {
    duration = 300;
  }
  var height = node.scrollHeight;
  var style = node.style;
  requestAnimationFrame(function() {
    style.minHeight = "initial";
    style.height = height + "px";
    style.transition = "all " + duration + "ms";
    requestAnimationFrame(function() {
      style.height = "0";
      style.padding = "0";
      style.margin = "0";
      setTimeout(done, duration);
    });
  });
}
function cssTransition(_ref) {
  var enter = _ref.enter, exit = _ref.exit, _ref$appendPosition = _ref.appendPosition, appendPosition = _ref$appendPosition === void 0 ? false : _ref$appendPosition, _ref$collapse = _ref.collapse, collapse = _ref$collapse === void 0 ? true : _ref$collapse, _ref$collapseDuration = _ref.collapseDuration, collapseDuration = _ref$collapseDuration === void 0 ? 300 : _ref$collapseDuration;
  return function ToastTransition(_ref2) {
    var children = _ref2.children, position = _ref2.position, preventExitTransition = _ref2.preventExitTransition, done = _ref2.done, nodeRef = _ref2.nodeRef, isIn = _ref2.isIn;
    var enterClassName = appendPosition ? enter + "--" + position : enter;
    var exitClassName = appendPosition ? exit + "--" + position : exit;
    var baseClassName = reactExports.useRef();
    var animationStep = reactExports.useRef(
      0
      /* Enter */
    );
    reactExports.useLayoutEffect(function() {
      onEnter();
    }, []);
    reactExports.useEffect(function() {
      if (!isIn) preventExitTransition ? onExited() : onExit();
    }, [isIn]);
    function onEnter() {
      var node = nodeRef.current;
      baseClassName.current = node.className;
      node.className += " " + enterClassName;
      node.addEventListener("animationend", onEntered);
    }
    function onEntered() {
      var node = nodeRef.current;
      node.removeEventListener("animationend", onEntered);
      if (animationStep.current === 0) {
        node.className = baseClassName.current;
      }
    }
    function onExit() {
      animationStep.current = 1;
      var node = nodeRef.current;
      node.className += " " + exitClassName;
      node.addEventListener("animationend", onExited);
    }
    function onExited() {
      var node = nodeRef.current;
      node.removeEventListener("animationend", onExited);
      collapse ? collapseToast(node, done, collapseDuration) : done();
    }
    return e.createElement(e.Fragment, null, children);
  };
}
var eventManager = {
  list: /* @__PURE__ */ new Map(),
  emitQueue: /* @__PURE__ */ new Map(),
  on: function on(event, callback) {
    this.list.has(event) || this.list.set(event, []);
    this.list.get(event).push(callback);
    return this;
  },
  off: function off(event, callback) {
    if (callback) {
      var cb = this.list.get(event).filter(function(cb2) {
        return cb2 !== callback;
      });
      this.list.set(event, cb);
      return this;
    }
    this.list["delete"](event);
    return this;
  },
  cancelEmit: function cancelEmit(event) {
    var timers = this.emitQueue.get(event);
    if (timers) {
      timers.forEach(clearTimeout);
      this.emitQueue["delete"](event);
    }
    return this;
  },
  /**
   * Enqueue the event at the end of the call stack
   * Doing so let the user call toast as follow:
   * toast('1')
   * toast('2')
   * toast('3')
   * Without setTimemout the code above will not work
   */
  emit: function emit(event) {
    var _this = this;
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    this.list.has(event) && this.list.get(event).forEach(function(callback) {
      var timer = setTimeout(function() {
        callback.apply(void 0, args);
      }, 0);
      _this.emitQueue.has(event) || _this.emitQueue.set(event, []);
      _this.emitQueue.get(event).push(timer);
    });
  }
};
function useKeeper(arg, refresh) {
  if (refresh === void 0) {
    refresh = false;
  }
  var ref = reactExports.useRef(arg);
  reactExports.useEffect(function() {
    if (refresh) ref.current = arg;
  });
  return ref.current;
}
function reducer(state, action) {
  switch (action.type) {
    case 0:
      return [].concat(state, [action.toastId]).filter(function(id) {
        return id !== action.staleId;
      });
    case 1:
      return isToastIdValid(action.toastId) ? state.filter(function(id) {
        return id !== action.toastId;
      }) : [];
  }
}
function useToastContainer(props) {
  var _useReducer = reactExports.useReducer(function(x) {
    return x + 1;
  }, 0), forceUpdate = _useReducer[1];
  var _useReducer2 = reactExports.useReducer(reducer, []), toast3 = _useReducer2[0], dispatch = _useReducer2[1];
  var containerRef = reactExports.useRef(null);
  var toastCount = useKeeper(0);
  var queue2 = useKeeper([]);
  var collection = useKeeper({});
  var instance = useKeeper({
    toastKey: 1,
    displayedToast: 0,
    props,
    containerId: null,
    isToastActive,
    getToast: function getToast2(id) {
      return collection[id] || null;
    }
  });
  reactExports.useEffect(function() {
    instance.containerId = props.containerId;
    eventManager.cancelEmit(
      3
      /* WillUnmount */
    ).on(
      0,
      buildToast
    ).on(
      1,
      function(toastId) {
        return containerRef.current && removeToast(toastId);
      }
    ).on(
      5,
      clearWaitingQueue
    ).emit(
      2,
      instance
    );
    return function() {
      return eventManager.emit(
        3,
        instance
      );
    };
  }, []);
  reactExports.useEffect(function() {
    instance.isToastActive = isToastActive;
    instance.displayedToast = toast3.length;
    eventManager.emit(
      4,
      toast3.length,
      props.containerId
    );
  }, [toast3]);
  reactExports.useEffect(function() {
    instance.props = props;
  });
  function isToastActive(id) {
    return toast3.indexOf(id) !== -1;
  }
  function clearWaitingQueue(_ref) {
    var containerId = _ref.containerId;
    var limit = instance.props.limit;
    if (limit && (!containerId || instance.containerId === containerId)) {
      toastCount -= queue2.length;
      queue2 = [];
    }
  }
  function removeToast(toastId) {
    dispatch({
      type: 1,
      toastId
    });
  }
  function dequeueToast() {
    var _queue$shift = queue2.shift(), toastContent = _queue$shift.toastContent, toastProps = _queue$shift.toastProps, staleId = _queue$shift.staleId;
    appendToast(toastContent, toastProps, staleId);
  }
  function isNotValid(_ref2) {
    var containerId = _ref2.containerId, toastId = _ref2.toastId, updateId = _ref2.updateId;
    return !containerRef.current || instance.props.enableMultiContainer && containerId !== instance.props.containerId || collection[toastId] && updateId == null ? true : false;
  }
  function buildToast(content, _ref3) {
    var delay = _ref3.delay, staleId = _ref3.staleId, options = _objectWithoutPropertiesLoose(_ref3, ["delay", "staleId"]);
    if (!canBeRendered(content) || isNotValid(options)) return;
    var toastId = options.toastId, updateId = options.updateId;
    var props2 = instance.props;
    var closeToast = function closeToast2() {
      return removeToast(toastId);
    };
    var isNotAnUpdate = options.updateId == null;
    if (isNotAnUpdate) toastCount++;
    var toastProps = {
      toastId,
      updateId,
      isIn: false,
      key: options.key || instance.toastKey++,
      type: options.type,
      closeToast,
      closeButton: options.closeButton,
      rtl: props2.rtl,
      position: options.position || props2.position,
      transition: options.transition || props2.transition,
      className: parseClassName(options.className || props2.toastClassName),
      bodyClassName: parseClassName(options.bodyClassName || props2.bodyClassName),
      style: options.style || props2.toastStyle,
      bodyStyle: options.bodyStyle || props2.bodyStyle,
      onClick: options.onClick || props2.onClick,
      pauseOnHover: isBool(options.pauseOnHover) ? options.pauseOnHover : props2.pauseOnHover,
      pauseOnFocusLoss: isBool(options.pauseOnFocusLoss) ? options.pauseOnFocusLoss : props2.pauseOnFocusLoss,
      draggable: isBool(options.draggable) ? options.draggable : props2.draggable,
      draggablePercent: isNum(options.draggablePercent) ? options.draggablePercent : props2.draggablePercent,
      draggableDirection: options.draggableDirection || props2.draggableDirection,
      closeOnClick: isBool(options.closeOnClick) ? options.closeOnClick : props2.closeOnClick,
      progressClassName: parseClassName(options.progressClassName || props2.progressClassName),
      progressStyle: options.progressStyle || props2.progressStyle,
      autoClose: getAutoCloseDelay(options.autoClose, props2.autoClose),
      hideProgressBar: isBool(options.hideProgressBar) ? options.hideProgressBar : props2.hideProgressBar,
      progress: options.progress,
      role: isStr(options.role) ? options.role : props2.role,
      deleteToast: function deleteToast() {
        removeFromCollection(toastId);
      }
    };
    if (isFn(options.onOpen)) toastProps.onOpen = options.onOpen;
    if (isFn(options.onClose)) toastProps.onClose = options.onClose;
    if (toastProps.draggableDirection === "y" && toastProps.draggablePercent === 80) {
      toastProps.draggablePercent *= 1.5;
    }
    var closeButton = props2.closeButton;
    if (options.closeButton === false || canBeRendered(options.closeButton)) {
      closeButton = options.closeButton;
    } else if (options.closeButton === true) {
      closeButton = canBeRendered(props2.closeButton) ? props2.closeButton : true;
    }
    toastProps.closeButton = closeButton;
    var toastContent = content;
    if (reactExports.isValidElement(content) && !isStr(content.type)) {
      toastContent = reactExports.cloneElement(content, {
        closeToast,
        toastProps
      });
    } else if (isFn(content)) {
      toastContent = content({
        closeToast,
        toastProps
      });
    }
    if (props2.limit && props2.limit > 0 && toastCount > props2.limit && isNotAnUpdate) {
      queue2.push({
        toastContent,
        toastProps,
        staleId
      });
    } else if (isNum(delay) && delay > 0) {
      setTimeout(function() {
        appendToast(toastContent, toastProps, staleId);
      }, delay);
    } else {
      appendToast(toastContent, toastProps, staleId);
    }
  }
  function appendToast(content, toastProps, staleId) {
    var toastId = toastProps.toastId;
    if (staleId) delete collection[staleId];
    collection[toastId] = {
      content,
      props: toastProps
    };
    dispatch({
      type: 0,
      toastId,
      staleId
    });
  }
  function removeFromCollection(toastId) {
    delete collection[toastId];
    var queueLen = queue2.length;
    toastCount = isToastIdValid(toastId) ? toastCount - 1 : toastCount - instance.displayedToast;
    if (toastCount < 0) toastCount = 0;
    if (queueLen > 0) {
      var freeSlot = isToastIdValid(toastId) ? 1 : instance.props.limit;
      if (queueLen === 1 || freeSlot === 1) {
        instance.displayedToast++;
        dequeueToast();
      } else {
        var toDequeue = freeSlot > queueLen ? queueLen : freeSlot;
        instance.displayedToast = toDequeue;
        for (var i = 0; i < toDequeue; i++) {
          dequeueToast();
        }
      }
    } else {
      forceUpdate();
    }
  }
  function getToastToRender(cb) {
    var toastToRender = {};
    var toastList = props.newestOnTop ? Object.keys(collection).reverse() : Object.keys(collection);
    for (var i = 0; i < toastList.length; i++) {
      var _toast = collection[toastList[i]];
      var position = _toast.props.position;
      toastToRender[position] || (toastToRender[position] = []);
      toastToRender[position].push(_toast);
    }
    return Object.keys(toastToRender).map(function(p) {
      return cb(p, toastToRender[p]);
    });
  }
  return {
    getToastToRender,
    collection,
    containerRef,
    isToastActive
  };
}
function getX(e2) {
  return e2.targetTouches && e2.targetTouches.length >= 1 ? e2.targetTouches[0].clientX : e2.clientX;
}
function getY(e2) {
  return e2.targetTouches && e2.targetTouches.length >= 1 ? e2.targetTouches[0].clientY : e2.clientY;
}
function useToast(props) {
  var _useState = reactExports.useState(true), isRunning = _useState[0], setIsRunning = _useState[1];
  var _useState2 = reactExports.useState(false), preventExitTransition = _useState2[0], setPreventExitTransition = _useState2[1];
  var toastRef = reactExports.useRef(null);
  var drag = useKeeper({
    start: 0,
    x: 0,
    y: 0,
    delta: 0,
    removalDistance: 0,
    canCloseOnClick: true,
    canDrag: false,
    boundingRect: null
  });
  var syncProps = useKeeper(props, true);
  var autoClose = props.autoClose, pauseOnHover = props.pauseOnHover, closeToast = props.closeToast, onClick = props.onClick, closeOnClick = props.closeOnClick;
  reactExports.useEffect(function() {
    if (isFn(props.onOpen)) props.onOpen(reactExports.isValidElement(props.children) && props.children.props);
    return function() {
      if (isFn(syncProps.onClose)) syncProps.onClose(reactExports.isValidElement(syncProps.children) && syncProps.children.props);
    };
  }, []);
  reactExports.useEffect(function() {
    props.draggable && bindDragEvents();
    return function() {
      props.draggable && unbindDragEvents();
    };
  }, [props.draggable]);
  reactExports.useEffect(function() {
    props.pauseOnFocusLoss && bindFocusEvents();
    return function() {
      props.pauseOnFocusLoss && unbindFocusEvents();
    };
  }, [props.pauseOnFocusLoss]);
  function onDragStart(e2) {
    if (props.draggable) {
      var toast3 = toastRef.current;
      drag.canCloseOnClick = true;
      drag.canDrag = true;
      drag.boundingRect = toast3.getBoundingClientRect();
      toast3.style.transition = "";
      drag.x = getX(e2.nativeEvent);
      drag.y = getY(e2.nativeEvent);
      if (props.draggableDirection === "x") {
        drag.start = drag.x;
        drag.removalDistance = toast3.offsetWidth * (props.draggablePercent / 100);
      } else {
        drag.start = drag.y;
        drag.removalDistance = toast3.offsetHeight * (props.draggablePercent / 100);
      }
    }
  }
  function onDragTransitionEnd() {
    if (drag.boundingRect) {
      var _drag$boundingRect = drag.boundingRect, top = _drag$boundingRect.top, bottom = _drag$boundingRect.bottom, left = _drag$boundingRect.left, right = _drag$boundingRect.right;
      if (props.pauseOnHover && drag.x >= left && drag.x <= right && drag.y >= top && drag.y <= bottom) {
        pauseToast();
      } else {
        playToast();
      }
    }
  }
  function playToast() {
    setIsRunning(true);
  }
  function pauseToast() {
    setIsRunning(false);
  }
  function bindFocusEvents() {
    if (!document.hasFocus()) pauseToast();
    window.addEventListener("focus", playToast);
    window.addEventListener("blur", pauseToast);
  }
  function unbindFocusEvents() {
    window.removeEventListener("focus", playToast);
    window.removeEventListener("blur", pauseToast);
  }
  function bindDragEvents() {
    document.addEventListener("mousemove", onDragMove);
    document.addEventListener("mouseup", onDragEnd);
    document.addEventListener("touchmove", onDragMove);
    document.addEventListener("touchend", onDragEnd);
  }
  function unbindDragEvents() {
    document.removeEventListener("mousemove", onDragMove);
    document.removeEventListener("mouseup", onDragEnd);
    document.removeEventListener("touchmove", onDragMove);
    document.removeEventListener("touchend", onDragEnd);
  }
  function onDragMove(e2) {
    if (drag.canDrag) {
      e2.preventDefault();
      var toast3 = toastRef.current;
      if (isRunning) pauseToast();
      drag.x = getX(e2);
      drag.y = getY(e2);
      if (props.draggableDirection === "x") {
        drag.delta = drag.x - drag.start;
      } else {
        drag.delta = drag.y - drag.start;
      }
      if (drag.start !== drag.x) drag.canCloseOnClick = false;
      toast3.style.transform = "translate" + props.draggableDirection + "(" + drag.delta + "px)";
      toast3.style.opacity = "" + (1 - Math.abs(drag.delta / drag.removalDistance));
    }
  }
  function onDragEnd() {
    var toast3 = toastRef.current;
    if (drag.canDrag) {
      drag.canDrag = false;
      if (Math.abs(drag.delta) > drag.removalDistance) {
        setPreventExitTransition(true);
        props.closeToast();
        return;
      }
      toast3.style.transition = "transform 0.2s, opacity 0.2s";
      toast3.style.transform = "translate" + props.draggableDirection + "(0)";
      toast3.style.opacity = "1";
    }
  }
  var eventHandlers = {
    onMouseDown: onDragStart,
    onTouchStart: onDragStart,
    onMouseUp: onDragTransitionEnd,
    onTouchEnd: onDragTransitionEnd
  };
  if (autoClose && pauseOnHover) {
    eventHandlers.onMouseEnter = pauseToast;
    eventHandlers.onMouseLeave = playToast;
  }
  if (closeOnClick) {
    eventHandlers.onClick = function(e2) {
      onClick && onClick(e2);
      drag.canCloseOnClick && closeToast();
    };
  }
  return {
    playToast,
    pauseToast,
    isRunning,
    preventExitTransition,
    toastRef,
    eventHandlers
  };
}
function CloseButton(_ref) {
  var closeToast = _ref.closeToast, type = _ref.type, _ref$ariaLabel = _ref.ariaLabel, ariaLabel = _ref$ariaLabel === void 0 ? "close" : _ref$ariaLabel;
  return reactExports.createElement("button", {
    className: "Toastify__close-button Toastify__close-button--" + type,
    type: "button",
    onClick: function onClick(e2) {
      e2.stopPropagation();
      closeToast(e2);
    },
    "aria-label": ariaLabel
  }, reactExports.createElement("svg", {
    "aria-hidden": "true",
    viewBox: "0 0 14 16"
  }, reactExports.createElement("path", {
    fillRule: "evenodd",
    d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
  })));
}
function ProgressBar(_ref) {
  var _cx, _animationEvent;
  var delay = _ref.delay, isRunning = _ref.isRunning, closeToast = _ref.closeToast, type = _ref.type, hide = _ref.hide, className = _ref.className, userStyle = _ref.style, controlledProgress = _ref.controlledProgress, progress = _ref.progress, rtl = _ref.rtl, isIn = _ref.isIn;
  var style = _extends({}, userStyle, {
    animationDuration: delay + "ms",
    animationPlayState: isRunning ? "running" : "paused",
    opacity: hide ? 0 : 1
  });
  if (controlledProgress) style.transform = "scaleX(" + progress + ")";
  var defaultClassName = clsx("Toastify__progress-bar", controlledProgress ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", "Toastify__progress-bar--" + type, (_cx = {}, _cx["Toastify__progress-bar--rtl"] = rtl, _cx));
  var classNames2 = isFn(className) ? className({
    rtl,
    type,
    defaultClassName
  }) : clsx(defaultClassName, className);
  var animationEvent = (_animationEvent = {}, _animationEvent[controlledProgress && progress >= 1 ? "onTransitionEnd" : "onAnimationEnd"] = controlledProgress && progress < 1 ? null : function() {
    isIn && closeToast();
  }, _animationEvent);
  return reactExports.createElement("div", Object.assign({
    role: "progressbar",
    "aria-hidden": hide ? "true" : "false",
    "aria-label": "notification timer",
    className: classNames2,
    style
  }, animationEvent));
}
ProgressBar.defaultProps = {
  type: TYPE.DEFAULT,
  hide: false
};
var Toast = function Toast2(props) {
  var _cx;
  var _useToast = useToast(props), isRunning = _useToast.isRunning, preventExitTransition = _useToast.preventExitTransition, toastRef = _useToast.toastRef, eventHandlers = _useToast.eventHandlers;
  var closeButton = props.closeButton, children = props.children, autoClose = props.autoClose, onClick = props.onClick, type = props.type, hideProgressBar = props.hideProgressBar, closeToast = props.closeToast, Transition = props.transition, position = props.position, className = props.className, style = props.style, bodyClassName = props.bodyClassName, bodyStyle = props.bodyStyle, progressClassName = props.progressClassName, progressStyle = props.progressStyle, updateId = props.updateId, role = props.role, progress = props.progress, rtl = props.rtl, toastId = props.toastId, deleteToast = props.deleteToast, isIn = props.isIn;
  var defaultClassName = clsx("Toastify__toast", "Toastify__toast--" + type, (_cx = {}, _cx["Toastify__toast--rtl"] = rtl, _cx));
  var cssClasses = isFn(className) ? className({
    rtl,
    position,
    type,
    defaultClassName
  }) : clsx(defaultClassName, className);
  var isProgressControlled = !!progress;
  function renderCloseButton(closeButton2) {
    if (!closeButton2) return;
    var props2 = {
      closeToast,
      type
    };
    if (isFn(closeButton2)) return closeButton2(props2);
    if (reactExports.isValidElement(closeButton2)) return reactExports.cloneElement(closeButton2, props2);
  }
  return reactExports.createElement(Transition, {
    isIn,
    done: deleteToast,
    position,
    preventExitTransition,
    nodeRef: toastRef
  }, reactExports.createElement("div", Object.assign({
    id: toastId,
    onClick,
    className: cssClasses
  }, eventHandlers, {
    style,
    ref: toastRef
  }), reactExports.createElement("div", Object.assign({}, isIn && {
    role
  }, {
    className: isFn(bodyClassName) ? bodyClassName({
      type
    }) : clsx("Toastify__toast-body", bodyClassName),
    style: bodyStyle
  }), children), renderCloseButton(closeButton), (autoClose || isProgressControlled) && reactExports.createElement(ProgressBar, Object.assign({}, updateId && !isProgressControlled ? {
    key: "pb-" + updateId
  } : {}, {
    rtl,
    delay: autoClose,
    isRunning,
    isIn,
    closeToast,
    hide: hideProgressBar,
    type,
    style: progressStyle,
    className: progressClassName,
    controlledProgress: isProgressControlled,
    progress
  }))));
};
var Bounce = /* @__PURE__ */ cssTransition({
  enter: "Toastify--animate Toastify__bounce-enter",
  exit: "Toastify--animate Toastify__bounce-exit",
  appendPosition: true
});
var ToastContainer = function ToastContainer2(props) {
  var _useToastContainer = useToastContainer(props), getToastToRender = _useToastContainer.getToastToRender, containerRef = _useToastContainer.containerRef, isToastActive = _useToastContainer.isToastActive;
  var className = props.className, style = props.style, rtl = props.rtl, containerId = props.containerId;
  function getClassName(position) {
    var _cx;
    var defaultClassName = clsx("Toastify__toast-container", "Toastify__toast-container--" + position, (_cx = {}, _cx["Toastify__toast-container--rtl"] = rtl, _cx));
    return isFn(className) ? className({
      position,
      rtl,
      defaultClassName
    }) : clsx(defaultClassName, parseClassName(className));
  }
  return reactExports.createElement("div", {
    ref: containerRef,
    className: "Toastify",
    id: containerId
  }, getToastToRender(function(position, toastList) {
    var containerStyle = toastList.length === 0 ? _extends({}, style, {
      pointerEvents: "none"
    }) : _extends({}, style);
    return reactExports.createElement("div", {
      className: getClassName(position),
      style: containerStyle,
      key: "container-" + position
    }, toastList.map(function(_ref) {
      var content = _ref.content, toastProps = _ref.props;
      return reactExports.createElement(Toast, Object.assign({}, toastProps, {
        isIn: isToastActive(toastProps.toastId),
        key: "toast-" + toastProps.key,
        closeButton: toastProps.closeButton === true ? CloseButton : toastProps.closeButton
      }), content);
    }));
  }));
};
ToastContainer.defaultProps = {
  position: POSITION.TOP_RIGHT,
  transition: Bounce,
  rtl: false,
  autoClose: 5e3,
  hideProgressBar: false,
  closeButton: CloseButton,
  pauseOnHover: true,
  pauseOnFocusLoss: true,
  closeOnClick: true,
  newestOnTop: false,
  draggable: true,
  draggablePercent: 80,
  draggableDirection: "x",
  role: "alert"
};
var containers = /* @__PURE__ */ new Map();
var latestInstance;
var containerDomNode;
var containerConfig;
var queue = [];
var lazy = false;
function isAnyContainerMounted() {
  return containers.size > 0;
}
function getToast(toastId, _ref) {
  var containerId = _ref.containerId;
  var container = containers.get(containerId || latestInstance);
  if (!container) return null;
  return container.getToast(toastId);
}
function generateToastId() {
  return Math.random().toString(36).substr(2, 9);
}
function getToastId(options) {
  if (options && (isStr(options.toastId) || isNum(options.toastId))) {
    return options.toastId;
  }
  return generateToastId();
}
function dispatchToast(content, options) {
  if (isAnyContainerMounted()) {
    eventManager.emit(
      0,
      content,
      options
    );
  } else {
    queue.push({
      content,
      options
    });
    if (lazy && canUseDom) {
      lazy = false;
      containerDomNode = document.createElement("div");
      document.body.appendChild(containerDomNode);
      reactDomExports.render(reactExports.createElement(ToastContainer, Object.assign({}, containerConfig)), containerDomNode);
    }
  }
  return options.toastId;
}
function mergeOptions(type, options) {
  return _extends({}, options, {
    type: options && options.type || type,
    toastId: getToastId(options)
  });
}
var createToastByType = function createToastByType2(type) {
  return function(content, options) {
    return dispatchToast(content, mergeOptions(type, options));
  };
};
var toast = function toast2(content, options) {
  return dispatchToast(content, mergeOptions(TYPE.DEFAULT, options));
};
toast.success = /* @__PURE__ */ createToastByType(TYPE.SUCCESS);
toast.info = /* @__PURE__ */ createToastByType(TYPE.INFO);
toast.error = /* @__PURE__ */ createToastByType(TYPE.ERROR);
toast.warning = /* @__PURE__ */ createToastByType(TYPE.WARNING);
toast.dark = /* @__PURE__ */ createToastByType(TYPE.DARK);
toast.warn = toast.warning;
toast.dismiss = function(id) {
  return eventManager.emit(
    1,
    id
  );
};
toast.clearWaitingQueue = function(params) {
  if (params === void 0) {
    params = {};
  }
  return eventManager.emit(
    5,
    params
  );
};
toast.isActive = function(id) {
  var isToastActive = false;
  containers.forEach(function(container) {
    if (container.isToastActive && container.isToastActive(id)) {
      isToastActive = true;
    }
  });
  return isToastActive;
};
toast.update = function(toastId, options) {
  if (options === void 0) {
    options = {};
  }
  setTimeout(function() {
    var toast3 = getToast(toastId, options);
    if (toast3) {
      var oldOptions = toast3.props, oldContent = toast3.content;
      var nextOptions = _extends({}, oldOptions, options, {
        toastId: options.toastId || toastId,
        updateId: generateToastId()
      });
      if (nextOptions.toastId !== toastId) nextOptions.staleId = toastId;
      var content = nextOptions.render || oldContent;
      delete nextOptions.render;
      dispatchToast(content, nextOptions);
    }
  }, 0);
};
toast.done = function(id) {
  toast.update(id, {
    progress: 1
  });
};
toast.onChange = function(callback) {
  if (isFn(callback)) {
    eventManager.on(
      4,
      callback
    );
  }
  return function() {
    isFn(callback) && eventManager.off(
      4,
      callback
    );
  };
};
toast.configure = function(config) {
  if (config === void 0) {
    config = {};
  }
  lazy = true;
  containerConfig = config;
};
toast.POSITION = POSITION;
toast.TYPE = TYPE;
eventManager.on(
  2,
  function(containerInstance) {
    latestInstance = containerInstance.containerId || containerInstance;
    containers.set(latestInstance, containerInstance);
    queue.forEach(function(item) {
      eventManager.emit(
        0,
        item.content,
        item.options
      );
    });
    queue = [];
  }
).on(
  3,
  function(containerInstance) {
    containers["delete"](containerInstance.containerId || containerInstance);
    if (containers.size === 0) {
      eventManager.off(
        0
        /* Show */
      ).off(
        1
        /* Clear */
      ).off(
        5
        /* ClearWaitingQueue */
      );
    }
    if (canUseDom && containerDomNode) {
      document.body.removeChild(containerDomNode);
    }
  }
);
const dummyTransition = /* @__PURE__ */ cssTransition({ enter: "", exit: "" });
const Notification = (props) => {
  const { toastRef, eventHandlers } = useToast({
    ...props,
    transition: dummyTransition
  });
  const { children, autoClose, onClick, role, toastId, deleteToast, closeToast, isIn } = props;
  const customStyle = {
    display: isIn ? "block" : "none"
  };
  reactExports.useEffect(() => {
    if (!isIn) deleteToast();
  }, [isIn]);
  reactExports.useEffect(() => {
    let timer;
    if (autoClose) {
      timer = setTimeout(() => closeToast(), autoClose);
    }
    return () => {
      if (timer != null) {
        clearTimeout(Number(timer));
      }
    };
  }, [autoClose, closeToast]);
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      id: toastId,
      onClick,
      ...eventHandlers,
      style: customStyle,
      ref: toastRef,
      ...isIn && { role }
    },
    children
  );
};
Notification.__docgenInfo = { "description": "", "methods": [], "displayName": "Notification", "props": { "containerId": { "required": false, "tsType": { "name": "union", "raw": "string | number", "elements": [{ "name": "string" }, { "name": "number" }] }, "description": "" }, "duration": { "required": false, "tsType": { "name": "number" }, "description": "" }, "fix": { "required": false, "tsType": { "name": "union", "raw": "'top' | 'bottom' | 'right' | 'left'", "elements": [{ "name": "literal", "value": "'top'" }, { "name": "literal", "value": "'bottom'" }, { "name": "literal", "value": "'right'" }, { "name": "literal", "value": "'left'" }] }, "description": "" }, "closeOnClick": { "required": false, "tsType": { "name": "boolean" }, "description": "" }, "icon": { "required": false, "tsType": { "name": "string" }, "description": "Indica quale icona affiancare al titolo." }, "state": { "required": false, "tsType": { "name": "union", "raw": "'success' | 'error' | 'info' | 'warning'", "elements": [{ "name": "literal", "value": "'success'" }, { "name": "literal", "value": "'error'" }, { "name": "literal", "value": "'info'" }, { "name": "literal", "value": "'warning'" }] }, "description": "Lo stato corrente della notifica (modifica il colore delle icone e bordo)" }, "title": { "required": false, "tsType": { "name": "string" }, "description": "Il titolo della notifica" } } };
const KitTransition = /* @__PURE__ */ cssTransition({
  enter: `d-block`,
  exit: `d-none`,
  appendPosition: false
});
const NotificationManager = (props) => {
  const customStyle = {
    ...props.style,
    ...getBorderStyleFix(props.fix)
  };
  const hookProps = {
    autoClose: props.duration ?? 6e3,
    closeOnClick: props.closeOnClick ?? true,
    hideProgressBar: true,
    transition: KitTransition,
    rtl: false,
    pauseOnHover: true,
    pauseOnFocusLoss: true,
    newestOnTop: false,
    // TODO: sort this out
    draggable: false,
    role: "alert",
    style: customStyle,
    enableMultiContainer: props.containerId != null
    // enable multi container when an explicit id is passed
  };
  const { getToastToRender, containerRef, isToastActive } = useToastContainer(hookProps);
  const { containerId, style, fix } = props;
  return /* @__PURE__ */ e.createElement(PositionContext.Provider, { value: fix }, /* @__PURE__ */ e.createElement("div", { ref: containerRef, id: containerId, style }, getToastToRender((_, toastList) => {
    return toastList.map(({ content, props: toastProps }) => {
      return /* @__PURE__ */ e.createElement(
        Notification,
        {
          ...toastProps,
          isIn: isToastActive(toastProps.toastId),
          key: `notification-${toastProps.key}`
        },
        content
      );
    });
  })));
};
NotificationManager.__docgenInfo = { "description": "", "methods": [], "displayName": "NotificationManager", "props": { "containerId": { "required": false, "tsType": { "name": "union", "raw": "string | number", "elements": [{ "name": "string" }, { "name": "number" }] }, "description": "" }, "duration": { "required": false, "tsType": { "name": "number" }, "description": "" }, "fix": { "required": false, "tsType": { "name": "union", "raw": "'top' | 'bottom' | 'right' | 'left'", "elements": [{ "name": "literal", "value": "'top'" }, { "name": "literal", "value": "'bottom'" }, { "name": "literal", "value": "'right'" }, { "name": "literal", "value": "'left'" }] }, "description": "" }, "closeOnClick": { "required": false, "tsType": { "name": "boolean" }, "description": "" }, "style": { "required": false, "tsType": { "name": "CSSProperties" }, "description": "" } } };
function notify(title, bodyOrOptions, options) {
  const body = isReactNode(bodyOrOptions) ? bodyOrOptions : void 0;
  const safeOptions = isReactNode(bodyOrOptions) ? { ...options } : bodyOrOptions || {};
  const NotificationContent = createNotification(title, body, safeOptions);
  const internalOptions = {
    ...safeOptions,
    autoClose: safeOptions.duration
  };
  return toast(NotificationContent, internalOptions);
}
function isReactNode(el) {
  return el != null && (typeof el === "string" || typeof el === "number" || reactExports.isValidElement(el));
}
notify.dismiss = (id) => toast.dismiss(id);
const NotificationStyle = {
  right: "auto",
  bottom: "auto",
  top: "auto",
  left: "auto"
};
const meta = {
  title: "Documentazione/Componenti/Notification",
  component: NotificationManager
};
const NotificationDoc = ({
  title,
  state,
  fix,
  dismissable,
  icon,
  style,
  children
}) => {
  return createNotification(title, children, {
    state,
    fix,
    icon,
    dismissable
  }, () => {
  }, {
    autoClose: false,
    style
  });
};
const EsempioMinimo = {
  render: () => {
    return /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(Button, { outline: true, onClick: () => notify("Titolo", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…") }, "Mostra Notifica"), /* @__PURE__ */ e.createElement(NotificationManager, { containerId: "esempio-base" }));
  }
};
const EsempioMinimoComponente = {
  render: () => {
    return /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(Button, { outline: true, onClick: () => notify("Titolo", /* @__PURE__ */ e.createElement("p", null, /* @__PURE__ */ e.createElement("strong", null, "Lorem ipsum"), " dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…")) }, "Mostra Notifica con componente React"), /* @__PURE__ */ e.createElement(NotificationManager, { containerId: "esempio-avanzato" }));
  }
};
const _Example = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "container test-docs" }, /* @__PURE__ */ e.createElement("div", { className: "row" }, /* @__PURE__ */ e.createElement("div", { className: "col-12 col-md-6 mb-4 mb-md-0" }, /* @__PURE__ */ e.createElement("p", { className: "mb-4" }, /* @__PURE__ */ e.createElement("strong", null, "Notifica standard")), /* @__PURE__ */ e.createElement(NotificationDoc, { id: "notifica-base", title: "Titolo Notifica", style: NotificationStyle })), /* @__PURE__ */ e.createElement("div", { className: "col-12 col-md-6" }, /* @__PURE__ */ e.createElement("p", { className: "mb-4" }, /* @__PURE__ */ e.createElement("strong", null, "Notifica con icona")), /* @__PURE__ */ e.createElement(NotificationDoc, { id: "notifica-base-con-icona", title: "Titolo Notifica", icon: "it-check-circle", style: NotificationStyle }))))
};
const _NotificationWithMessageStatic = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "container test-docs" }, /* @__PURE__ */ e.createElement("div", { className: "row" }, /* @__PURE__ */ e.createElement("div", { className: "col-12 col-md-6 mb-4 mb-md-0" }, /* @__PURE__ */ e.createElement("p", { className: "mb-4" }, /* @__PURE__ */ e.createElement("strong", null, "Notifica standard")), /* @__PURE__ */ e.createElement(NotificationDoc, { title: "Titolo Notifica", style: NotificationStyle, id: "notifica-con-messaggio" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…")), /* @__PURE__ */ e.createElement("div", { className: "col-12 col-md-6" }, /* @__PURE__ */ e.createElement("p", { className: "mb-4" }, /* @__PURE__ */ e.createElement("strong", null, "Notifica con icona")), /* @__PURE__ */ e.createElement(NotificationDoc, { title: "Titolo Notifica", state: "success", style: NotificationStyle, id: "notifica-con-messaggio-e-icona" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"))))
};
const Dismissable = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "container test-docs" }, /* @__PURE__ */ e.createElement("div", { className: "row" }, /* @__PURE__ */ e.createElement("div", { className: "col-12 col-md-6 mb-4 mb-md-0" }, /* @__PURE__ */ e.createElement("p", { className: "mb-4" }, /* @__PURE__ */ e.createElement("strong", null, "Notifica standard")), /* @__PURE__ */ e.createElement(NotificationDoc, { title: "Titolo Notifica", dismissable: true, style: NotificationStyle, id: "notifica-base" })), /* @__PURE__ */ e.createElement("div", { className: "col-12 col-md-6" }, /* @__PURE__ */ e.createElement("p", { className: "mb-4" }, /* @__PURE__ */ e.createElement("strong", null, "Notifica con icona")), /* @__PURE__ */ e.createElement(NotificationDoc, { title: "Titolo Notifica", state: "success", dismissable: true, style: NotificationStyle, id: "notifica-avvenuto-con-successo" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"))))
};
const States = {
  render: () => {
    return /* @__PURE__ */ e.createElement("div", { className: "container test-docs" }, /* @__PURE__ */ e.createElement("div", { className: "row mb-5" }, /* @__PURE__ */ e.createElement("div", { className: "col-12 col-md-6 mb-4 mb-md-0" }, /* @__PURE__ */ e.createElement("p", null, /* @__PURE__ */ e.createElement("strong", null, "Success")), /* @__PURE__ */ e.createElement(NotificationDoc, { state: "success", title: "Titolo Notifica", style: NotificationStyle, id: "notifica-con-success-state" })), /* @__PURE__ */ e.createElement("div", { className: "col-12 col-md-6" }, /* @__PURE__ */ e.createElement("p", null, /* @__PURE__ */ e.createElement("strong", null, "Error")), /* @__PURE__ */ e.createElement(NotificationDoc, { state: "error", title: "Titolo Notifica", style: NotificationStyle, id: "notifica-con-error-state" }))), /* @__PURE__ */ e.createElement("div", { className: "row mb-5" }, /* @__PURE__ */ e.createElement("div", { className: "col-12 col-md-6 mb-4 mb-md-0", style: {
      top: 45
    } }, /* @__PURE__ */ e.createElement("p", null, /* @__PURE__ */ e.createElement("strong", null, "Info")), /* @__PURE__ */ e.createElement(NotificationDoc, { state: "info", title: "Titolo Notifica", style: NotificationStyle, id: "notifica-con-info-state" })), /* @__PURE__ */ e.createElement("div", { className: "col-12 col-md-6", style: {
      top: 45
    } }, /* @__PURE__ */ e.createElement("p", null, /* @__PURE__ */ e.createElement("strong", null, "Warning")), /* @__PURE__ */ e.createElement(NotificationDoc, { state: "warning", title: "Titolo Notifica", style: NotificationStyle, id: "notifica-con-warning-state" }))));
  }
};
const _RoundingOfCorners = {
  render: () => {
    return /* @__PURE__ */ e.createElement("div", { className: "container test-docs" }, /* @__PURE__ */ e.createElement("div", { className: "row mb-5" }, /* @__PURE__ */ e.createElement("div", { className: "col-12 col-md-6 mb-4 mb-md-0" }, /* @__PURE__ */ e.createElement("p", null, /* @__PURE__ */ e.createElement("strong", null, "Base (4 angoli arrotondati)")), /* @__PURE__ */ e.createElement(NotificationDoc, { title: "Titolo Notifica", state: "success", style: NotificationStyle, id: "notifica-round-corners" })), /* @__PURE__ */ e.createElement("div", { className: "col-12 col-md-6" }, /* @__PURE__ */ e.createElement("p", null, /* @__PURE__ */ e.createElement("strong", null, "top-fix")), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(NotificationDoc, { title: "Titolo Notifica", state: "success", fix: "top", id: "notifica-round-corners-top" })), /* @__PURE__ */ e.createElement("p", { className: "mt-4" }, /* @__PURE__ */ e.createElement("strong", null, "bottom-fix")), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(NotificationDoc, { title: "Titolo Notifica", state: "success", fix: "bottom", id: "notifica-round-corners-bottom" })), /* @__PURE__ */ e.createElement("p", { className: "mt-4" }, /* @__PURE__ */ e.createElement("strong", null, "left-fix")), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(NotificationDoc, { title: "Titolo Notifica", state: "success", fix: "left", id: "notifica-round-corners-left" })), /* @__PURE__ */ e.createElement("p", { className: "mt-4" }, /* @__PURE__ */ e.createElement("strong", null, "right-fix")), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(NotificationDoc, { title: "Titolo Notifica", state: "success", fix: "right", id: "notifica-round-corners-right" })))));
  }
};
const DefaultLocation = {
  render: () => {
    return /* @__PURE__ */ e.createElement("div", { className: "container test-desktop" }, /* @__PURE__ */ e.createElement(NotificationDoc, { state: "success", title: "Titolo Notifica", id: "notifica" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…"));
  }
};
const FixedPositions = {
  render: () => {
    return /* @__PURE__ */ e.createElement("div", { className: "container test-desktop" }, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(NotificationDoc, { title: "Top Fix", fix: "top", state: "success", id: "notifica-fixed-top" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…")), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(NotificationDoc, { title: "Left Fix", fix: "left", state: "success", id: "notifica-fixed-left" })), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(NotificationDoc, { title: "Right Fix", fix: "right", state: "success", id: "notifica-fixed-right" })), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(NotificationDoc, { title: "Bottom Fix", fix: "bottom", state: "success", id: "notifica-fixed-bottom" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…")));
  }
};
EsempioMinimo.parameters = {
  ...EsempioMinimo.parameters,
  docs: {
    ...(_a = EsempioMinimo.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <div>\n        <Button outline onClick={() => notify('Titolo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…')}>\n          Mostra Notifica\n        </Button>\n        <NotificationManager containerId='esempio-base' />\n      </div>;\n  }\n}",
      ...(_c = (_b = EsempioMinimo.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
EsempioMinimoComponente.parameters = {
  ...EsempioMinimoComponente.parameters,
  docs: {
    ...(_d = EsempioMinimoComponente.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <div>\n        <Button outline onClick={() => notify('Titolo', <p>\n                <strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n              </p>)}>\n          Mostra Notifica con componente React\n        </Button>\n        <NotificationManager containerId='esempio-avanzato' />\n      </div>;\n  }\n}",
      ...(_f = (_e = EsempioMinimoComponente.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
_Example.parameters = {
  ..._Example.parameters,
  docs: {
    ...(_g = _Example.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => <div className='container test-docs'>\n      <div className='row'>\n        <div className='col-12 col-md-6 mb-4 mb-md-0'>\n          <p className='mb-4'>\n            <strong>Notifica standard</strong>\n          </p>\n          <NotificationDoc id='notifica-base' title='Titolo Notifica' style={NotificationStyle} />\n        </div>\n        <div className='col-12 col-md-6'>\n          <p className='mb-4'>\n            <strong>Notifica con icona</strong>\n          </p>\n          <NotificationDoc id='notifica-base-con-icona' title='Titolo Notifica' icon='it-check-circle' style={NotificationStyle}></NotificationDoc>\n        </div>\n      </div>\n    </div>\n}",
      ...(_i = (_h = _Example.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
_NotificationWithMessageStatic.parameters = {
  ..._NotificationWithMessageStatic.parameters,
  docs: {
    ...(_j = _NotificationWithMessageStatic.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  render: () => <div className='container test-docs'>\n      <div className='row'>\n        <div className='col-12 col-md-6 mb-4 mb-md-0'>\n          <p className='mb-4'>\n            <strong>Notifica standard</strong>\n          </p>\n          <NotificationDoc title='Titolo Notifica' style={NotificationStyle} id='notifica-con-messaggio'>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n          </NotificationDoc>\n        </div>\n        <div className='col-12 col-md-6'>\n          <p className='mb-4'>\n            <strong>Notifica con icona</strong>\n          </p>\n          <NotificationDoc title='Titolo Notifica' state='success' style={NotificationStyle} id='notifica-con-messaggio-e-icona'>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n          </NotificationDoc>\n        </div>\n      </div>\n    </div>\n}",
      ...(_l = (_k = _NotificationWithMessageStatic.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Dismissable.parameters = {
  ...Dismissable.parameters,
  docs: {
    ...(_m = Dismissable.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  render: () => <div className='container test-docs'>\n      <div className='row'>\n        <div className='col-12 col-md-6 mb-4 mb-md-0'>\n          <p className='mb-4'>\n            <strong>Notifica standard</strong>\n          </p>\n          <NotificationDoc title='Titolo Notifica' dismissable style={NotificationStyle} id='notifica-base' />\n        </div>\n        <div className='col-12 col-md-6'>\n          <p className='mb-4'>\n            <strong>Notifica con icona</strong>\n          </p>\n          <NotificationDoc title='Titolo Notifica' state='success' dismissable style={NotificationStyle} id='notifica-avvenuto-con-successo'>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n          </NotificationDoc>\n        </div>\n      </div>\n    </div>\n}",
      ...(_o = (_n = Dismissable.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
States.parameters = {
  ...States.parameters,
  docs: {
    ...(_p = States.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <div className='container test-docs'>\n        <div className='row mb-5'>\n          <div className='col-12 col-md-6 mb-4 mb-md-0'>\n            <p>\n              <strong>Success</strong>\n            </p>\n            <NotificationDoc state='success' title='Titolo Notifica' style={NotificationStyle} id='notifica-con-success-state' />\n          </div>\n          <div className='col-12 col-md-6'>\n            <p>\n              <strong>Error</strong>\n            </p>\n            <NotificationDoc state='error' title='Titolo Notifica' style={NotificationStyle} id='notifica-con-error-state' />\n          </div>\n        </div>\n        <div className='row mb-5'>\n          <div className='col-12 col-md-6 mb-4 mb-md-0' style={{\n          top: 45\n        }}>\n            <p>\n              <strong>Info</strong>\n            </p>\n            <NotificationDoc state='info' title='Titolo Notifica' style={NotificationStyle} id='notifica-con-info-state' />\n          </div>\n          <div className='col-12 col-md-6' style={{\n          top: 45\n        }}>\n            <p>\n              <strong>Warning</strong>\n            </p>\n            <NotificationDoc state='warning' title='Titolo Notifica' style={NotificationStyle} id='notifica-con-warning-state' />\n          </div>\n        </div>\n      </div>;\n  }\n}",
      ...(_r = (_q = States.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
_RoundingOfCorners.parameters = {
  ..._RoundingOfCorners.parameters,
  docs: {
    ...(_s = _RoundingOfCorners.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <div className='container test-docs'>\n        <div className='row mb-5'>\n          <div className='col-12 col-md-6 mb-4 mb-md-0'>\n            <p>\n              <strong>Base (4 angoli arrotondati)</strong>\n            </p>\n            <NotificationDoc title='Titolo Notifica' state='success' style={NotificationStyle} id='notifica-round-corners' />\n          </div>\n          <div className='col-12 col-md-6'>\n            <p>\n              <strong>top-fix</strong>\n            </p>\n            <div>\n              <NotificationDoc title='Titolo Notifica' state='success' fix='top' id='notifica-round-corners-top' />\n            </div>\n            <p className='mt-4'>\n              <strong>bottom-fix</strong>\n            </p>\n            <div>\n              <NotificationDoc title='Titolo Notifica' state='success' fix='bottom' id='notifica-round-corners-bottom' />\n            </div>\n            <p className='mt-4'>\n              <strong>left-fix</strong>\n            </p>\n            <div>\n              <NotificationDoc title='Titolo Notifica' state='success' fix='left' id='notifica-round-corners-left' />\n            </div>\n            <p className='mt-4'>\n              <strong>right-fix</strong>\n            </p>\n            <div>\n              <NotificationDoc title='Titolo Notifica' state='success' fix='right' id='notifica-round-corners-right' />\n            </div>\n          </div>\n        </div>\n      </div>;\n  }\n}",
      ...(_u = (_t = _RoundingOfCorners.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
DefaultLocation.parameters = {
  ...DefaultLocation.parameters,
  docs: {
    ...(_v = DefaultLocation.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <div className='container test-desktop'>\n        <NotificationDoc state='success' title='Titolo Notifica' id='notifica'>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n        </NotificationDoc>\n      </div>;\n  }\n}",
      ...(_x = (_w = DefaultLocation.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
FixedPositions.parameters = {
  ...FixedPositions.parameters,
  docs: {
    ...(_y = FixedPositions.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <div className='container test-desktop'>\n        <div>\n          <NotificationDoc title='Top Fix' fix='top' state='success' id='notifica-fixed-top'>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n          </NotificationDoc>\n        </div>\n        <div>\n          <NotificationDoc title='Left Fix' fix='left' state='success' id='notifica-fixed-left' />\n        </div>\n        <div>\n          <NotificationDoc title='Right Fix' fix='right' state='success' id='notifica-fixed-right' />\n        </div>\n        <div>\n          <NotificationDoc title='Bottom Fix' fix='bottom' state='success' id='notifica-fixed-bottom'>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor…\n          </NotificationDoc>\n        </div>\n      </div>;\n  }\n}",
      ...(_A = (_z = FixedPositions.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
const __namedExportsOrder = ["EsempioMinimo", "EsempioMinimoComponente", "_Example", "_NotificationWithMessageStatic", "Dismissable", "States", "_RoundingOfCorners", "DefaultLocation", "FixedPositions"];
const NotificationStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DefaultLocation,
  Dismissable,
  EsempioMinimo,
  EsempioMinimoComponente,
  FixedPositions,
  States,
  _Example,
  _NotificationWithMessageStatic,
  _RoundingOfCorners,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Dismissable as D,
  EsempioMinimo as E,
  FixedPositions as F,
  NotificationStories as N,
  States as S,
  _Example as _,
  EsempioMinimoComponente as a,
  NotificationManager as b,
  _NotificationWithMessageStatic as c,
  _RoundingOfCorners as d,
  DefaultLocation as e
};
