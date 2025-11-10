var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { r as reactExports, e } from "./iframe-DGcxMoyJ.js";
import { C as Container } from "./Container-C-M9HmGe.js";
import { R as Row, C as Col } from "./Col-Kbz4ORpX.js";
import { N as Navbar } from "./Navbar-Bg2rX1rm.js";
import { N as NavbarToggler } from "./NavbarToggler-p3y6rwWV.js";
import { N as NavItem, a as NavLink } from "./NavLink-ClnAMBE9.js";
import { C as Collapse } from "./Collapse-9cOJoQx5.js";
import { I as Icon } from "./Icon-DyCGQbBS.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-CLDLIAjX.js";
import { P as Progress } from "./Progress-4oS4_sOU.js";
import "./track-focus-DbJ2CO43.js";
const debounce = (callback, wait) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, wait);
  };
};
const DEFAULT_DELAY = 150;
const useSizeDetector = ({
  root,
  isHorizontal,
  activeId,
  onChange,
  setForceRecompute,
  updateActiveId,
  hasWindow: hasWindow2
}) => {
  const [targetSize, setTargetSize] = reactExports.useState(1);
  const useViewport = root == null || hasWindow2 && (isHorizontal ? window.innerWidth < root.clientWidth : window.innerHeight < root.clientHeight);
  const scrollEnd = reactExports.useCallback(
    debounce(() => {
      setForceRecompute(true);
    }, DEFAULT_DELAY),
    [setForceRecompute]
  );
  reactExports.useEffect(() => {
    if (!hasWindow2) {
      return;
    }
    let observer = null;
    const resizeWindowHandler = () => {
      setTimeout(() => {
        setTargetSize(isHorizontal ? window.innerWidth : window.innerHeight);
      }, DEFAULT_DELAY);
    };
    const resizeElementHandler = (entries) => {
      const [entry] = entries;
      if (!useViewport) {
        setTargetSize(isHorizontal ? entry.boundingClientRect.width : entry.boundingClientRect.height);
      }
      if (entry.intersectionRatio === 0) {
        if (activeId != null) {
          updateActiveId(null);
          if (onChange) {
            onChange({
              added: null,
              removed: activeId
            });
          }
        }
      }
    };
    addEventListener("scroll", scrollEnd);
    if (useViewport) {
      setTargetSize(isHorizontal ? window.innerWidth : window.innerHeight);
      addEventListener("resize", resizeWindowHandler);
    }
    if (root) {
      observer = new IntersectionObserver(resizeElementHandler);
      observer.observe(root);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
      removeEventListener("resize", resizeWindowHandler);
      removeEventListener("scroll", scrollEnd);
    };
  }, [root, isHorizontal, activeId, onChange, useViewport, scrollEnd, hasWindow2, updateActiveId]);
  return { targetSize, useViewport };
};
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  if (!getRandomValues) {
    getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
    if (!getRandomValues) {
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
  }
  return getRandomValues(rnds8);
}
const REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function validate(uuid) {
  return typeof uuid === "string" && REGEX.test(uuid);
}
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).substr(1));
}
function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
  if (!validate(uuid)) {
    throw TypeError("Stringified UUID is invalid");
  }
  return uuid;
}
function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  return stringify(rnds);
}
let ticking = false;
let callbacks = [];
class ScrollCallback {
  constructor(id, callback) {
    __publicField(this, "_callback");
    __publicField(this, "id");
    this.id = id;
    this._callback = callback;
  }
  //Public
  dispose() {
    removeCallBack(this.id);
  }
  //Private
  _execute(data) {
    this._callback(data);
  }
}
const removeCallBack = (id) => {
  callbacks = callbacks.filter((cb) => cb.id !== id);
};
const onDocumentScroll = (callback) => {
  if (typeof document === "undefined") {
    return;
  }
  if (!callbacks.length) {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      document.addEventListener("scroll", (evt) => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            callbacks.forEach((cbObj) => cbObj.cb._execute(evt));
            ticking = false;
          });
          ticking = true;
        }
      });
    }
  }
  if (typeof callback === "function") {
    const newCb = new ScrollCallback(v4(), callback);
    callbacks.push({
      id: newCb.id,
      cb: newCb
    });
    return newCb;
  }
  console.error("[onDocumentScroll] the provided data has to be of type function");
  return null;
};
const hasWindow = typeof window !== "undefined";
const REGISTER_DELAY = 50;
function resolveHierarchyIds(id, lookup) {
  const newActiveIds = [id];
  let lastId = newActiveIds[0];
  while (lastId != null && lookup[lastId] != null) {
    newActiveIds.push(lookup[lastId]);
    lastId = lookup[lastId];
  }
  return newActiveIds.reverse();
}
function useNavScroll(args = {}) {
  const { onChange, root, offset = 50, isHorizontal = false } = args;
  const els = reactExports.useRef([]);
  const [counter, setCounter] = reactExports.useState(0);
  const [forceRecompute, setForceRecompute] = reactExports.useState(false);
  const [activeId, updateActiveId] = reactExports.useState(null);
  const [percentageValue, setPercentageValue] = reactExports.useState(0);
  const { targetSize, useViewport } = useSizeDetector({
    root,
    isHorizontal,
    onChange,
    activeId,
    setForceRecompute,
    updateActiveId,
    hasWindow
  });
  const observerMargin = Math.floor(targetSize * offset / 100) || 1;
  const observerOptions = reactExports.useMemo(() => {
    const topMargin = observerMargin % 2 === 1 ? observerMargin - 1 : observerMargin;
    const bottomMargin = targetSize - observerMargin;
    return {
      root: useViewport ? null : root,
      rootMargin: isHorizontal ? `0px ${-topMargin}px 0px ${-bottomMargin}px` : `${-topMargin}px 0px ${-bottomMargin}px 0px`
    };
  }, [root, targetSize, observerMargin, isHorizontal, useViewport]);
  const elsLookup = reactExports.useMemo(() => {
    const lookup = {};
    for (const { id, parent } of els.current) {
      lookup[id] = parent;
    }
    return lookup;
  }, [counter]);
  const activeIds = reactExports.useMemo(() => activeId ? resolveHierarchyIds(activeId, elsLookup) : [], [activeId, elsLookup]);
  const activeLookups = reactExports.useMemo(() => new Set(activeIds), [activeIds]);
  reactExports.useEffect(() => {
    if (!hasWindow) {
      return;
    }
    const _onScroll = () => {
      var _a2, _b2, _c2, _d2;
      let intersectionId = null;
      for (let k = 0; k < els.current.length; k++) {
        const entry = els.current[k].ref.current;
        const min = (entry == null ? void 0 : entry.getBoundingClientRect().top) ? entry == null ? void 0 : entry.getBoundingClientRect().top : 0;
        if (!min) {
          break;
        }
        if (min > 0 && k > 0) {
          const totEls = ((_c2 = (_b2 = (_a2 = root == null ? void 0 : root.previousSibling) == null ? void 0 : _a2.firstChild) == null ? void 0 : _b2.parentNode) == null ? void 0 : _c2.querySelectorAll(".it-navscroll-wrapper .nav-link").length) || 1;
          setPercentageValue(k / (totEls / 2) * 100);
          intersectionId = (_d2 = els.current[k - 1].ref.current) == null ? void 0 : _d2.id;
          break;
        }
      }
      if (intersectionId != null) {
        updateActiveId(intersectionId);
        if (onChange) {
          const diffIds = {
            added: intersectionId,
            removed: activeId
          };
          onChange(diffIds);
        }
      }
    };
    onDocumentScroll(_onScroll);
    setTimeout(() => {
      _onScroll();
    }, 300);
  }, [
    activeIds,
    updateActiveId,
    els,
    elsLookup,
    onChange,
    activeLookups,
    activeId,
    observerOptions,
    isHorizontal,
    root,
    forceRecompute
  ]);
  const refresh = reactExports.useCallback(
    debounce(() => {
      setCounter(counter + 1);
    }, REGISTER_DELAY),
    [counter]
  );
  const register = reactExports.useCallback(
    (id, options = {}) => {
      if (!hasWindow) {
        return { id, ref: null };
      }
      const alreadyRegistered = id in elsLookup;
      const entry = alreadyRegistered ? els.current.find(({ id: existingId }) => existingId === id) : options;
      const ref = entry && entry.ref || reactExports.createRef();
      if (!alreadyRegistered) {
        els.current = [...els.current, { id, ref, parent: options.parent }];
        refresh();
      }
      return { id, ref };
    },
    [counter]
  );
  const unregister = reactExports.useCallback(
    (idToUnregister) => {
      els.current = els.current.filter(({ id }) => id !== idToUnregister);
    },
    [counter]
  );
  const isActive = reactExports.useCallback((id) => activeLookups.has(id), [activeLookups]);
  const percentage = reactExports.useMemo(() => percentageValue, [percentageValue]);
  const getActiveRef = reactExports.useCallback(() => {
    const entry = els.current.find(({ id }) => id === activeId);
    return entry ? entry.ref : null;
  }, [activeId]);
  return {
    percentage,
    register,
    unregister,
    activeIds,
    isActive,
    getActiveRef
  };
}
function getStorybookExtraStyles() {
  return insideIframe() && insideDocsPage() ? {
    maxHeight: 600,
    overflowY: "scroll"
  } : {};
}
function insideDocsPage() {
  return document.querySelector(".innerZoomElementWrapper");
}
function insideIframe() {
  try {
    return window.self !== window.top;
  } catch (e2) {
    console.log(e2);
    return true;
  }
}
const meta = {
  title: "Documentazione/Menu di navigazione/Navscroll",
  component: Container,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const PosizionamentoFondoPaginaHooks = () => {
  var _a2, _b2;
  const [isOpen, toggleNavScroll] = reactExports.useState(false);
  const containerRef = reactExports.useRef(null);
  const {
    register,
    isActive,
    getActiveRef
  } = useNavScroll({
    root: containerRef.current || void 0
  });
  const getActiveClass = (id) => isActive(id) ? "active" : void 0;
  return /* @__PURE__ */ e.createElement(Container, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { md: 12, lg: 4 }, /* @__PURE__ */ e.createElement(Navbar, { expand: "lg", className: "it-navscroll-wrapper it-bottom-navscroll it-right-side affix-top" }, /* @__PURE__ */ e.createElement(NavbarToggler, { className: "custom-navbar-toggler", "data-target": "#navbarNavA", onClick: () => toggleNavScroll(!isOpen) }, /* @__PURE__ */ e.createElement("span", { className: "it-list" }), (_b2 = (_a2 = getActiveRef()) == null ? void 0 : _a2.current) == null ? void 0 : _b2.textContent), /* @__PURE__ */ e.createElement(Collapse, { isOpen, navbar: true, id: "navbarNavA" }, /* @__PURE__ */ e.createElement("button", { className: `${isOpen ? "show" : ""} it-back-button btn w-100 text-start`, style: {
    display: isOpen ? "block" : "none"
  }, onClick: () => toggleNavScroll(!isOpen) }, /* @__PURE__ */ e.createElement(Icon, { className: "align-top", color: "primary", icon: "it-chevron-left", "aria-hidden": true, size: "sm" }), /* @__PURE__ */ e.createElement("span", null, "Indietro")), /* @__PURE__ */ e.createElement("div", { className: "menu-wrapper" }, /* @__PURE__ */ e.createElement("div", { className: "link-list-wrapper" }, /* @__PURE__ */ e.createElement("h3", null, "header"), /* @__PURE__ */ e.createElement(LinkList, { noWrapper: true }, /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#1", className: getActiveClass("1") }, /* @__PURE__ */ e.createElement("span", null, "1. Introduzione")), /* @__PURE__ */ e.createElement(LinkList, { noWrapper: true }, /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("1_1") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#1_1", className: getActiveClass("1_1") }, /* @__PURE__ */ e.createElement("span", null, "1.1 Nested Item")), /* @__PURE__ */ e.createElement(LinkList, { className: "tertiary", noWrapper: true }, /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("1_1_1") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#1_1_1", className: getActiveClass("1_1_1") }, /* @__PURE__ */ e.createElement("span", null, "1.1.1 Nested Item"))), /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("1_1_2") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#1_1_2", className: getActiveClass("1_1_2") }, /* @__PURE__ */ e.createElement("span", null, "1.1.2 Nested Item"))), /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("1_1_3") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#1_1_3", className: getActiveClass("1_1_3") }, /* @__PURE__ */ e.createElement("span", null, "1.1.3 Nested Item"))))), /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("1_2") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#1_2", className: getActiveClass("1_2") }, /* @__PURE__ */ e.createElement("span", null, "1.2 Nested Item"))), /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("1_3") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#1_3", className: getActiveClass("1_3") }, /* @__PURE__ */ e.createElement("span", null, "1.3 Nested Item"))))), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#2", className: getActiveClass("2") }, /* @__PURE__ */ e.createElement("span", null, "2. List item")), /* @__PURE__ */ e.createElement(LinkList, { noWrapper: true }, /* @__PURE__ */ e.createElement(NavLink, { active: true, tag: "li", className: getActiveClass("2_1") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#2_1", className: getActiveClass("2_1") }, /* @__PURE__ */ e.createElement("span", null, "2.1 Nested Item")), /* @__PURE__ */ e.createElement(LinkList, { className: "tertiary", noWrapper: true }, /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("2_1_1") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#2_1_1", className: getActiveClass("2_1_1") }, /* @__PURE__ */ e.createElement("span", null, "2.1.1 Nested Item"))), /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("2_1_2") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#2_1_2", className: getActiveClass("2_1_2") }, /* @__PURE__ */ e.createElement("span", null, "2.1.2 Nested Item"))), /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("2_1_3") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#2_1_3", className: getActiveClass("2_1_3") }, /* @__PURE__ */ e.createElement("span", null, "2.1.3 Nested Item"))))), /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("2_2") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#2_2", className: getActiveClass("2_2") }, /* @__PURE__ */ e.createElement("span", null, "2.2 Nested Item"))), /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("2_3") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#2_3", className: getActiveClass("2_3") }, /* @__PURE__ */ e.createElement("span", null, "2.3 Nested Item"))))))))))), /* @__PURE__ */ e.createElement("div", { className: "it-page-sections-container col-12 col-lg-8", ref: containerRef, style: getStorybookExtraStyles() }, /* @__PURE__ */ e.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec congue eros. Maecenas sagittis commodo libero nec porta. Nunc semper velit venenatis ligula condimentum ultricies. In hac habitasse platea dictumst. In malesuada pharetra nulla, id aliquam metus egestas ut. Nulla sollicitudin cursus felis, eu sagittis ante porta id. Suspendisse pellentesque ex non sem tincidunt, aliquam rhoncus turpis maximus. Vivamus eget massa turpis. Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer feugiat et massa nec rhoncus. Morbi vitae metus et sapien suscipit mattis vitae ac ex. Proin pharetra, sem vitae varius malesuada, risus tortor sodales arcu, eu aliquam lorem libero vel urna. Aliquam massa lacus, faucibus quis urna ac, pharetra pretium ex. In facilisis urna non urna luctus, a bibendum tortor facilisis. Mauris sed risus justo. In et erat fermentum eros hendrerit tempor. Quisque accumsan magna ac risus ultricies, vel condimentum ipsum accumsan. Proin blandit mauris sed sodales sollicitudin."), /* @__PURE__ */ e.createElement("h2", { className: "it-page-section", ...register("1") }, "Introduzione"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h3", { className: "it-page-section", ...register("1_1", {
    parent: "1"
  }) }, "Nested item 1.1"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h4", { className: "it-page-section", ...register("1_1_1", {
    parent: "1_1"
  }) }, "Nested item 1.1.1"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h4", { className: "it-page-section", ...register("1_1_2", {
    parent: "1_1"
  }) }, "Nested item 1.1.2"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h4", { className: "it-page-section", ...register("1_1_3", {
    parent: "1_1"
  }) }, "Nested item 1.1.3"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h3", { className: "it-page-section", ...register("1_2", {
    parent: "1"
  }) }, "Nested item 1.2"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h3", { className: "it-page-section", ...register("1_3", {
    parent: "1"
  }) }, "Nested item 1.3"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h2", { className: "it-page-section", ...register("2") }, "Introduzione 2"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h3", { className: "it-page-section", ...register("2_1", {
    parent: "2"
  }) }, "Nested item 2.1"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h4", { className: "it-page-section", ...register("2_1_1", {
    parent: "2_1"
  }) }, "Nested item 2.1.1"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h4", { className: "it-page-section", ...register("2_1_2", {
    parent: "2_1"
  }) }, "Nested item 2.1.2"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h4", { className: "it-page-section", ...register("2_1_3", {
    parent: "2_1"
  }) }, "Nested item 2.1.3"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h3", { className: "it-page-section", ...register("2_2", {
    parent: "2"
  }) }, "Nested item 2.2"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h3", { className: "it-page-section", ...register("2_3", {
    parent: "2"
  }) }, "Nested item 2.3"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."))));
};
const PosizionamentoFondoPagina = {
  render: () => {
    return /* @__PURE__ */ e.createElement(PosizionamentoFondoPaginaHooks, null);
  }
};
const PosizionamentoTestaAltaHooks = () => {
  var _a2, _b2;
  const [isOpen, toggleNavScroll] = reactExports.useState(false);
  const containerRef = reactExports.useRef(null);
  const {
    register,
    isActive,
    getActiveRef,
    percentage
  } = useNavScroll({
    root: containerRef.current || void 0
  });
  const getActiveClass = (id) => isActive(id) ? "active" : void 0;
  return /* @__PURE__ */ e.createElement(Container, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { md: 12, lg: 4 }, /* @__PURE__ */ e.createElement(Navbar, { expand: "lg", className: "it-navscroll-wrapper it-top-navscroll it-right-side affix-top" }, /* @__PURE__ */ e.createElement(NavbarToggler, { className: "custom-navbar-toggler", "data-target": "#navbarNavB", onClick: () => toggleNavScroll(!isOpen) }, /* @__PURE__ */ e.createElement("span", { className: "it-list" }), (_b2 = (_a2 = getActiveRef()) == null ? void 0 : _a2.current) == null ? void 0 : _b2.textContent, /* @__PURE__ */ e.createElement(Progress, { wrapperClassName: "custom-navbar-progressbar", value: percentage })), /* @__PURE__ */ e.createElement(Collapse, { isOpen, navbar: true, id: "navbarNavB" }, /* @__PURE__ */ e.createElement("button", { className: `${isOpen ? "show" : ""} it-back-button btn w-100 text-start`, style: {
    display: isOpen ? "block" : "none"
  }, onClick: () => toggleNavScroll(!isOpen) }, /* @__PURE__ */ e.createElement(Icon, { className: "align-top", color: "primary", icon: "it-chevron-left", "aria-hidden": true, size: "sm" }), /* @__PURE__ */ e.createElement("span", null, "Indietro")), /* @__PURE__ */ e.createElement("div", { className: "menu-wrapper" }, /* @__PURE__ */ e.createElement("div", { className: "link-list-wrapper" }, /* @__PURE__ */ e.createElement("h3", null, "header"), /* @__PURE__ */ e.createElement(Progress, { value: percentage }), /* @__PURE__ */ e.createElement(LinkList, { noWrapper: true }, /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#1", className: getActiveClass("1") }, /* @__PURE__ */ e.createElement("span", null, "1. Introduzione")), /* @__PURE__ */ e.createElement(LinkList, { noWrapper: true }, /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("1_1") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#1_1", className: getActiveClass("1_1") }, /* @__PURE__ */ e.createElement("span", null, "1.1 Nested Item")), /* @__PURE__ */ e.createElement(LinkList, { className: "tertiary", noWrapper: true }, /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("1_1_1") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#1_1_1", className: getActiveClass("1_1_1") }, /* @__PURE__ */ e.createElement("span", null, "1.1.1 Nested Item"))), /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("1_1_2") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#1_1_2", className: getActiveClass("1_1_2") }, /* @__PURE__ */ e.createElement("span", null, "1.1.2 Nested Item"))), /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("1_1_3") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#1_1_3", className: getActiveClass("1_1_3") }, /* @__PURE__ */ e.createElement("span", null, "1.1.3 Nested Item"))))), /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("1_2") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#1_2", className: getActiveClass("1_2") }, /* @__PURE__ */ e.createElement("span", null, "1.2 Nested Item"))), /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("1_3") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#1_3", className: getActiveClass("1_3") }, /* @__PURE__ */ e.createElement("span", null, "1.3 Nested Item"))))), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#2", className: getActiveClass("2") }, /* @__PURE__ */ e.createElement("span", null, "2. List item")), /* @__PURE__ */ e.createElement(LinkList, { noWrapper: true }, /* @__PURE__ */ e.createElement(NavLink, { active: true, tag: "li", className: getActiveClass("2_1") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#2_1", className: getActiveClass("2_1") }, /* @__PURE__ */ e.createElement("span", null, "2.1 Nested Item")), /* @__PURE__ */ e.createElement(LinkList, { className: "tertiary", noWrapper: true }, /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("2_1_1") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#2_1_1", className: getActiveClass("2_1_1") }, /* @__PURE__ */ e.createElement("span", null, "2.1.1 Nested Item"))), /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("2_1_2") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#2_1_2", className: getActiveClass("2_1_2") }, /* @__PURE__ */ e.createElement("span", null, "2.1.2 Nested Item"))), /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("2_1_3") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#2_1_3", className: getActiveClass("2_1_3") }, /* @__PURE__ */ e.createElement("span", null, "2.1.3 Nested Item"))))), /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("2_2") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#2_2", className: getActiveClass("2_2") }, /* @__PURE__ */ e.createElement("span", null, "2.2 Nested Item"))), /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("2_3") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#2_3", className: getActiveClass("2_3") }, /* @__PURE__ */ e.createElement("span", null, "2.3 Nested Item"))))))))))), /* @__PURE__ */ e.createElement("div", { className: "it-page-sections-container col-12 col-lg-8", ref: containerRef, style: getStorybookExtraStyles() }, /* @__PURE__ */ e.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec congue eros. Maecenas sagittis commodo libero nec porta. Nunc semper velit venenatis ligula condimentum ultricies. In hac habitasse platea dictumst. In malesuada pharetra nulla, id aliquam metus egestas ut. Nulla sollicitudin cursus felis, eu sagittis ante porta id. Suspendisse pellentesque ex non sem tincidunt, aliquam rhoncus turpis maximus. Vivamus eget massa turpis. Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer feugiat et massa nec rhoncus. Morbi vitae metus et sapien suscipit mattis vitae ac ex. Proin pharetra, sem vitae varius malesuada, risus tortor sodales arcu, eu aliquam lorem libero vel urna. Aliquam massa lacus, faucibus quis urna ac, pharetra pretium ex. In facilisis urna non urna luctus, a bibendum tortor facilisis. Mauris sed risus justo. In et erat fermentum eros hendrerit tempor. Quisque accumsan magna ac risus ultricies, vel condimentum ipsum accumsan. Proin blandit mauris sed sodales sollicitudin."), /* @__PURE__ */ e.createElement("h2", { className: "it-page-section", ...register("1") }, "Introduzione"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h3", { className: "it-page-section", ...register("1_1", {
    parent: "1"
  }) }, "Nested item 1.1"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h4", { className: "it-page-section", ...register("1_1_1", {
    parent: "1_1"
  }) }, "Nested item 1.1.1"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h4", { className: "it-page-section", ...register("1_1_2", {
    parent: "1_1"
  }) }, "Nested item 1.1.2"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h4", { className: "it-page-section", ...register("1_1_3", {
    parent: "1_1"
  }) }, "Nested item 1.1.3"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h3", { className: "it-page-section", ...register("1_2", {
    parent: "1"
  }) }, "Nested item 1.2"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h3", { className: "it-page-section", ...register("1_3", {
    parent: "1"
  }) }, "Nested item 1.3"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h2", { className: "it-page-section", ...register("2") }, "Introduzione 2"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h3", { className: "it-page-section", ...register("2_1", {
    parent: "2"
  }) }, "Nested item 2.1"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h4", { className: "it-page-section", ...register("2_1_1", {
    parent: "2_1"
  }) }, "Nested item 2.1.1"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h4", { className: "it-page-section", ...register("2_1_2", {
    parent: "2_1"
  }) }, "Nested item 2.1.2"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h4", { className: "it-page-section", ...register("2_1_3", {
    parent: "2_1"
  }) }, "Nested item 2.1.3"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h3", { className: "it-page-section", ...register("2_2", {
    parent: "2"
  }) }, "Nested item 2.2"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h3", { className: "it-page-section", ...register("2_3", {
    parent: "2"
  }) }, "Nested item 2.3"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."))));
};
const PosizionamentoTestaAlta = {
  render: () => {
    return /* @__PURE__ */ e.createElement(PosizionamentoTestaAltaHooks, null);
  }
};
const ComponenteMenuInlineHooks = () => {
  const containerRef = reactExports.useRef(null);
  const {
    register,
    isActive,
    activeIds
  } = useNavScroll({
    root: containerRef.current || void 0
  });
  const [collapseOpen1, toggleCollapse1] = reactExports.useState(false);
  const [collapseOpen2, toggleCollapse2] = reactExports.useState(false);
  const [collapseOpen3, toggleCollapse3] = reactExports.useState(false);
  const isFirstOpen = collapseOpen1 || isActive("1");
  const isSecondOpen = collapseOpen2 || isActive("2");
  const isThirdOpen = collapseOpen3 || isActive("3");
  const onToggle1 = (e2) => {
    e2.preventDefault();
    toggleCollapse1(!collapseOpen1);
  };
  const onToggle2 = (e2) => {
    e2.preventDefault();
    toggleCollapse2(!collapseOpen2);
  };
  const onToggle3 = (e2) => {
    e2.preventDefault();
    toggleCollapse3(!collapseOpen3);
  };
  const getActiveClass = (id) => isActive(id) ? "nav-link active" : void 0;
  const isInLinksGroup = (group, activeIds2) => {
    return activeIds2.length > 0 && activeIds2[0][0] == group;
  };
  return /* @__PURE__ */ e.createElement(Container, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { md: 12, lg: 4 }, /* @__PURE__ */ e.createElement(Navbar, { className: "inline-menu affix-top", cssModule: {
    navbar: " "
  } }, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { bold: true, large: true, className: `right-icon ${getActiveClass("1")}`, onClick: onToggle1, "aria-expanded": isFirstOpen || isInLinksGroup("1", activeIds) }, /* @__PURE__ */ e.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ e.createElement("span", null, "Link list 1 "), /* @__PURE__ */ e.createElement(Icon, { className: "right", size: "xs", color: "primary", icon: "it-expand", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(Collapse, { isOpen: isFirstOpen || isInLinksGroup("1", activeIds) }, /* @__PURE__ */ e.createElement(LinkList, { sublist: true }, /* @__PURE__ */ e.createElement(LinkListItem, { href: "#1_1", className: getActiveClass("1_1") }, "Link list 1.1"), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#1_2", className: getActiveClass("1_2") }, "Link list 1.2"), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#1_3", className: getActiveClass("1_3") }, "Link list 1.3"))), /* @__PURE__ */ e.createElement(LinkListItem, { bold: true, large: true, className: `right-icon ${getActiveClass("2")}`, onClick: onToggle2, "aria-expanded": isSecondOpen || isInLinksGroup("2", activeIds) }, /* @__PURE__ */ e.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ e.createElement("span", null, "Link list 2 "), /* @__PURE__ */ e.createElement(Icon, { className: "right", size: "xs", color: "primary", icon: "it-expand", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(Collapse, { isOpen: isSecondOpen || isInLinksGroup("2", activeIds) }, /* @__PURE__ */ e.createElement(LinkList, { sublist: true }, /* @__PURE__ */ e.createElement(LinkListItem, { href: "#2_1", className: getActiveClass("2_1") }, "Link list 2.1"), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#2_2", className: getActiveClass("2_2") }, "Link list 2.2"), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#2_3", className: getActiveClass("2_3") }, "Link list 2.3"))), /* @__PURE__ */ e.createElement(LinkListItem, { bold: true, large: true, className: `right-icon ${getActiveClass("3")}`, onClick: onToggle3, "aria-expanded": isThirdOpen || isInLinksGroup("3", activeIds) }, /* @__PURE__ */ e.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ e.createElement("span", null, "Link list 3 "), /* @__PURE__ */ e.createElement(Icon, { className: "right", size: "xs", color: "primary", icon: "it-expand", "aria-hidden": true }))), /* @__PURE__ */ e.createElement(Collapse, { isOpen: isThirdOpen || isInLinksGroup("3", activeIds) }, /* @__PURE__ */ e.createElement(LinkList, { sublist: true }, /* @__PURE__ */ e.createElement(LinkListItem, { href: "#3_1", className: getActiveClass("3_1") }, "Link list 3.1"), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#3_2", className: getActiveClass("3_2") }, "Link list 3.2"), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#3_3", className: getActiveClass("3_3") }, "Link list 3.3")))))), /* @__PURE__ */ e.createElement("div", { className: "it-page-sections-container col-12 col-lg-8", ref: containerRef, style: getStorybookExtraStyles() }, /* @__PURE__ */ e.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec congue eros. Maecenas sagittis commodo libero nec porta. Nunc semper velit venenatis ligula condimentum ultricies. In hac habitasse platea dictumst. In malesuada pharetra nulla, id aliquam metus egestas ut. Nulla sollicitudin cursus felis, eu sagittis ante porta id. Suspendisse pellentesque ex non sem tincidunt, aliquam rhoncus turpis maximus. Vivamus eget massa turpis. Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer feugiat et massa nec rhoncus. Morbi vitae metus et sapien suscipit mattis vitae ac ex. Proin pharetra, sem vitae varius malesuada, risus tortor sodales arcu, eu aliquam lorem libero vel urna. Aliquam massa lacus, faucibus quis urna ac, pharetra pretium ex. In facilisis urna non urna luctus, a bibendum tortor facilisis. Mauris sed risus justo. In et erat fermentum eros hendrerit tempor. Quisque accumsan magna ac risus ultricies, vel condimentum ipsum accumsan. Proin blandit mauris sed sodales sollicitudin."), /* @__PURE__ */ e.createElement("h2", { className: "it-page-section", ...register("1") }, "Introduzione"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h3", { className: "it-page-section", ...register("1_1", {
    parent: "1"
  }) }, "Nested item 1.1"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h3", { className: "it-page-section", ...register("1_2", {
    parent: "1"
  }) }, "Nested item 1.2"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h3", { className: "it-page-section", ...register("1_3", {
    parent: "1"
  }) }, "Nested item 1.3"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h2", { className: "it-page-section", ...register("2") }, "Introduzione 2"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h3", { className: "it-page-section", ...register("2_1", {
    parent: "2"
  }) }, "Nested item 2.1"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h3", { className: "it-page-section", ...register("2_2", {
    parent: "2"
  }) }, "Nested item 2.2"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h3", { className: "it-page-section", ...register("2_3", {
    parent: "2"
  }) }, "Nested item 2.3"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h2", { className: "it-page-section", ...register("3") }, "Introduzione 3"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h3", { className: "it-page-section", ...register("3_1", {
    parent: "3"
  }) }, "Nested item 3.1"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h3", { className: "it-page-section", ...register("3_2", {
    parent: "3"
  }) }, "Nested item 3.2"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h3", { className: "it-page-section", ...register("3_3", {
    parent: "3"
  }) }, "Nested item 3.3"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."))));
};
const ComponenteMenuInline = {
  render: () => {
    return /* @__PURE__ */ e.createElement(ComponenteMenuInlineHooks, null);
  }
};
const ComponenteVersioneScuraHooks = () => {
  var _a2, _b2;
  const [isOpen, toggleNavScroll] = reactExports.useState(false);
  const containerRef = reactExports.useRef(null);
  const {
    register,
    isActive,
    getActiveRef
  } = useNavScroll({
    root: containerRef.current || void 0
  });
  const getActiveClass = (id) => isActive(id) ? "active" : void 0;
  return /* @__PURE__ */ e.createElement(Container, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { md: 12, lg: 4 }, /* @__PURE__ */ e.createElement(Navbar, { expand: "lg", className: "it-navscroll-wrapper it-top-navscroll it-right-side affix-top theme-dark-desk theme-dark-mobile" }, /* @__PURE__ */ e.createElement(NavbarToggler, { className: "custom-navbar-toggler", "data-target": "#navbarNavB", onClick: () => toggleNavScroll(!isOpen) }, /* @__PURE__ */ e.createElement("span", { className: "it-list" }), (_b2 = (_a2 = getActiveRef()) == null ? void 0 : _a2.current) == null ? void 0 : _b2.textContent), /* @__PURE__ */ e.createElement(Collapse, { isOpen, navbar: true, id: "navbarNavB" }, /* @__PURE__ */ e.createElement("button", { className: `${isOpen ? "show" : ""} it-back-button btn w-100 text-start`, style: {
    display: isOpen ? "block" : "none"
  }, onClick: () => toggleNavScroll(!isOpen) }, /* @__PURE__ */ e.createElement(Icon, { className: "align-top", color: "primary", icon: "it-chevron-left", "aria-hidden": true, size: "sm" }), /* @__PURE__ */ e.createElement("span", null, "Indietro")), /* @__PURE__ */ e.createElement("div", { className: "menu-wrapper" }, /* @__PURE__ */ e.createElement("div", { className: "link-list-wrapper" }, /* @__PURE__ */ e.createElement("h3", null, "header"), /* @__PURE__ */ e.createElement(LinkList, { noWrapper: true }, /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#1", className: getActiveClass("1") }, /* @__PURE__ */ e.createElement("span", null, "1. Introduzione")), /* @__PURE__ */ e.createElement(LinkList, { noWrapper: true }, /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("1_1") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#1_1", className: getActiveClass("1_1") }, /* @__PURE__ */ e.createElement("span", null, "1.1 Nested Item")), /* @__PURE__ */ e.createElement(LinkList, { className: "tertiary", noWrapper: true }, /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("1_1_1") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#1_1_1", className: getActiveClass("1_1_1") }, /* @__PURE__ */ e.createElement("span", null, "1.1.1 Nested Item"))), /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("1_1_2") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#1_1_2", className: getActiveClass("1_1_2") }, /* @__PURE__ */ e.createElement("span", null, "1.1.2 Nested Item"))), /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("1_1_3") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#1_1_3", className: getActiveClass("1_1_3") }, /* @__PURE__ */ e.createElement("span", null, "1.1.3 Nested Item"))))), /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("1_2") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#1_2", className: getActiveClass("1_2") }, /* @__PURE__ */ e.createElement("span", null, "1.2 Nested Item"))), /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("1_3") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#1_3", className: getActiveClass("1_3") }, /* @__PURE__ */ e.createElement("span", null, "1.3 Nested Item"))))), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#2", className: getActiveClass("2") }, /* @__PURE__ */ e.createElement("span", null, "2. List item")), /* @__PURE__ */ e.createElement(LinkList, { noWrapper: true }, /* @__PURE__ */ e.createElement(NavLink, { active: true, tag: "li", className: getActiveClass("2_1") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#2_1", className: getActiveClass("2_1") }, /* @__PURE__ */ e.createElement("span", null, "2.1 Nested Item")), /* @__PURE__ */ e.createElement(LinkList, { className: "tertiary", noWrapper: true }, /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("2_1_1") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#2_1_1", className: getActiveClass("2_1_1") }, /* @__PURE__ */ e.createElement("span", null, "2.1.1 Nested Item"))), /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("2_1_2") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#2_1_2", className: getActiveClass("2_1_2") }, /* @__PURE__ */ e.createElement("span", null, "2.1.2 Nested Item"))), /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("2_1_3") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#2_1_3", className: getActiveClass("2_1_3") }, /* @__PURE__ */ e.createElement("span", null, "2.1.3 Nested Item"))))), /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("2_2") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#2_2", className: getActiveClass("2_2") }, /* @__PURE__ */ e.createElement("span", null, "2.2 Nested Item"))), /* @__PURE__ */ e.createElement(NavLink, { tag: "li", className: getActiveClass("2_3") }, /* @__PURE__ */ e.createElement(NavLink, { onClick: () => toggleNavScroll(!isOpen), href: "#2_3", className: getActiveClass("2_3") }, /* @__PURE__ */ e.createElement("span", null, "2.3 Nested Item"))))))))))), /* @__PURE__ */ e.createElement("div", { className: "it-page-sections-container col-12 col-lg-8", ref: containerRef, style: getStorybookExtraStyles() }, /* @__PURE__ */ e.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec congue eros. Maecenas sagittis commodo libero nec porta. Nunc semper velit venenatis ligula condimentum ultricies. In hac habitasse platea dictumst. In malesuada pharetra nulla, id aliquam metus egestas ut. Nulla sollicitudin cursus felis, eu sagittis ante porta id. Suspendisse pellentesque ex non sem tincidunt, aliquam rhoncus turpis maximus. Vivamus eget massa turpis. Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer feugiat et massa nec rhoncus. Morbi vitae metus et sapien suscipit mattis vitae ac ex. Proin pharetra, sem vitae varius malesuada, risus tortor sodales arcu, eu aliquam lorem libero vel urna. Aliquam massa lacus, faucibus quis urna ac, pharetra pretium ex. In facilisis urna non urna luctus, a bibendum tortor facilisis. Mauris sed risus justo. In et erat fermentum eros hendrerit tempor. Quisque accumsan magna ac risus ultricies, vel condimentum ipsum accumsan. Proin blandit mauris sed sodales sollicitudin."), /* @__PURE__ */ e.createElement("h2", { className: "it-page-section", ...register("1") }, "Introduzione"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h3", { className: "it-page-section", ...register("1_1", {
    parent: "1"
  }) }, "Nested item 1.1"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h4", { className: "it-page-section", ...register("1_1_1", {
    parent: "1_1"
  }) }, "Nested item 1.1.1"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h4", { className: "it-page-section", ...register("1_1_2", {
    parent: "1_1"
  }) }, "Nested item 1.1.2"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h4", { className: "it-page-section", ...register("1_1_3", {
    parent: "1_1"
  }) }, "Nested item 1.1.3"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h3", { className: "it-page-section", ...register("1_2", {
    parent: "1"
  }) }, "Nested item 1.2"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h3", { className: "it-page-section", ...register("1_3", {
    parent: "1"
  }) }, "Nested item 1.3"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h2", { className: "it-page-section", ...register("2") }, "Introduzione 2"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h3", { className: "it-page-section", ...register("2_1", {
    parent: "2"
  }) }, "Nested item 2.1"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h4", { className: "it-page-section", ...register("2_1_1", {
    parent: "2_1"
  }) }, "Nested item 2.1.1"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h4", { className: "it-page-section", ...register("2_1_2", {
    parent: "2_1"
  }) }, "Nested item 2.1.2"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h4", { className: "it-page-section", ...register("2_1_3", {
    parent: "2_1"
  }) }, "Nested item 2.1.3"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h3", { className: "it-page-section", ...register("2_2", {
    parent: "2"
  }) }, "Nested item 2.2"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ e.createElement("h3", { className: "it-page-section", ...register("2_3", {
    parent: "2"
  }) }, "Nested item 2.3"), /* @__PURE__ */ e.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."))));
};
const ComponenteVersioneScura = {
  render: () => {
    return /* @__PURE__ */ e.createElement(ComponenteVersioneScuraHooks, null);
  }
};
PosizionamentoFondoPagina.parameters = {
  ...PosizionamentoFondoPagina.parameters,
  docs: {
    ...(_a = PosizionamentoFondoPagina.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <PosizionamentoFondoPaginaHooks />;\n  }\n}",
      ...(_c = (_b = PosizionamentoFondoPagina.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
PosizionamentoTestaAlta.parameters = {
  ...PosizionamentoTestaAlta.parameters,
  docs: {
    ...(_d = PosizionamentoTestaAlta.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <PosizionamentoTestaAltaHooks />;\n  }\n}",
      ...(_f = (_e = PosizionamentoTestaAlta.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
ComponenteMenuInline.parameters = {
  ...ComponenteMenuInline.parameters,
  docs: {
    ...(_g = ComponenteMenuInline.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <ComponenteMenuInlineHooks />;\n  }\n}",
      ...(_i = (_h = ComponenteMenuInline.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
ComponenteVersioneScura.parameters = {
  ...ComponenteVersioneScura.parameters,
  docs: {
    ...(_j = ComponenteVersioneScura.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <ComponenteVersioneScuraHooks />;\n  }\n}",
      ...(_l = (_k = ComponenteVersioneScura.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
const __namedExportsOrder = ["PosizionamentoFondoPagina", "PosizionamentoTestaAlta", "ComponenteMenuInline", "ComponenteVersioneScura"];
const NavScrollStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ComponenteMenuInline,
  ComponenteVersioneScura,
  PosizionamentoFondoPagina,
  PosizionamentoTestaAlta,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  ComponenteVersioneScura as C,
  NavScrollStories as N,
  PosizionamentoFondoPagina as P,
  PosizionamentoTestaAlta as a,
  ComponenteMenuInline as b
};
