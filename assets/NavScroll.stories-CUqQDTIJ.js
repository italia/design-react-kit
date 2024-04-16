var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { r as reactExports, R as React } from "./index-CQCy530F.js";
import { C as Container } from "./Container-ChumJ9z3.js";
import { R as Row, C as Col } from "./Col-DTtAS2uD.js";
import { N as Navbar } from "./Navbar-C82d94Yg.js";
import { N as NavbarToggler } from "./NavbarToggler-CkfoPab3.js";
import { N as NavItem, a as NavLink } from "./NavLink-f2w7L1cX.js";
import { C as Collapse } from "./Collapse-DEWj2kdJ.js";
import { I as Icon } from "./Icon-CYxksTIN.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-Bip2UIsY.js";
const debounce = (callback, wait) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback.apply(null, args);
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
  }, []);
  const activeIds = reactExports.useMemo(() => activeId ? resolveHierarchyIds(activeId, elsLookup) : [], [activeId, elsLookup]);
  const activeLookups = reactExports.useMemo(() => new Set(activeIds), [activeIds]);
  reactExports.useEffect(() => {
    if (!hasWindow) {
      return;
    }
    const handleIntersection = (entries) => {
      let intersectionId = null;
      let topMin = Infinity;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (topMin > entry.boundingClientRect.top) {
            topMin = entry.boundingClientRect.top;
            intersectionId = entry.target.id;
          }
        }
      });
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
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    els.current.forEach(({ ref }) => {
      if (ref && ref.current) {
        observer.observe(ref.current);
      }
    });
    if (forceRecompute) {
      handleIntersection(observer.takeRecords());
      setForceRecompute(false);
    }
    return () => {
      observer.disconnect();
    };
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
    [elsLookup, refresh]
  );
  const unregister = reactExports.useCallback((idToUnregister) => {
    els.current = els.current.filter(({ id }) => id !== idToUnregister);
  }, []);
  const isActive = reactExports.useCallback((id) => activeLookups.has(id), [activeLookups]);
  const getActiveRef = reactExports.useCallback(() => {
    const entry = els.current.find(({ id }) => id === activeId);
    return entry ? entry.ref : null;
  }, [activeId]);
  return {
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
  } catch (e) {
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
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
    md: 12,
    lg: 4
  }, /* @__PURE__ */ React.createElement(Navbar, {
    expand: "lg",
    className: "it-navscroll-wrapper it-bottom-navscroll it-left-side affix-top"
  }, /* @__PURE__ */ React.createElement(NavbarToggler, {
    className: isOpen ? "custom-navbar-toggler focus--mouse" : "custom-navbar-toggler",
    "data-target": "#navbarNavA",
    onClick: () => toggleNavScroll(!isOpen)
  }, /* @__PURE__ */ React.createElement("span", {
    className: "it-list"
  }), (_b2 = (_a2 = getActiveRef()) == null ? void 0 : _a2.current) == null ? void 0 : _b2.textContent), /* @__PURE__ */ React.createElement(Collapse, {
    isOpen,
    navbar: true,
    id: "navbarNavA"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "it-back-button btn w-100 text-start",
    style: {
      display: isOpen ? "block" : "none"
    },
    onClick: () => toggleNavScroll(!isOpen)
  }, /* @__PURE__ */ React.createElement(Icon, {
    className: "align-top",
    color: "primary",
    icon: "it-chevron-left",
    "aria-hidden": true,
    size: "sm"
  }), /* @__PURE__ */ React.createElement("span", null, "Back ")), /* @__PURE__ */ React.createElement("div", {
    className: "menu-wrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "link-list-wrapper"
  }, /* @__PURE__ */ React.createElement("h3", null, "header"), /* @__PURE__ */ React.createElement(LinkList, {
    noWrapper: true
  }, /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#1",
    className: getActiveClass("1")
  }, /* @__PURE__ */ React.createElement("span", null, "1. Introduzione")), /* @__PURE__ */ React.createElement(LinkList, {
    noWrapper: true
  }, /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("1_1")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#1_1",
    className: getActiveClass("1_1")
  }, /* @__PURE__ */ React.createElement("span", null, "1.1 Nested Item")), /* @__PURE__ */ React.createElement(LinkList, {
    className: "tertiary",
    noWrapper: true
  }, /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("1_1_1")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#1_1_1",
    className: getActiveClass("1_1_1")
  }, /* @__PURE__ */ React.createElement("span", null, "1.1.1 Nested Item"))), /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("1_1_2")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#1_1_2",
    className: getActiveClass("1_1_2")
  }, /* @__PURE__ */ React.createElement("span", null, "1.1.2 Nested Item"))), /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("1_1_3")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#1_1_3",
    className: getActiveClass("1_1_3")
  }, /* @__PURE__ */ React.createElement("span", null, "1.1.3 Nested Item"))))), /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("1_2")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#1_2",
    className: getActiveClass("1_2")
  }, /* @__PURE__ */ React.createElement("span", null, "1.2 Nested Item"))), /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("1_3")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#1_3",
    className: getActiveClass("1_3")
  }, /* @__PURE__ */ React.createElement("span", null, "1.3 Nested Item"))))), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#2",
    className: getActiveClass("2")
  }, /* @__PURE__ */ React.createElement("span", null, "2. List item")), /* @__PURE__ */ React.createElement(LinkList, {
    noWrapper: true
  }, /* @__PURE__ */ React.createElement(NavLink, {
    active: true,
    tag: "li",
    className: getActiveClass("2_1")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#2_1",
    className: getActiveClass("2_1")
  }, /* @__PURE__ */ React.createElement("span", null, "2.1 Nested Item")), /* @__PURE__ */ React.createElement(LinkList, {
    className: "tertiary",
    noWrapper: true
  }, /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("2_1_1")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#2_1_1",
    className: getActiveClass("2_1_1")
  }, /* @__PURE__ */ React.createElement("span", null, "2.1.1 Nested Item"))), /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("2_1_2")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#2_1_2",
    className: getActiveClass("2_1_2")
  }, /* @__PURE__ */ React.createElement("span", null, "2.1.2 Nested Item"))), /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("2_1_3")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#2_1_3",
    className: getActiveClass("2_1_3")
  }, /* @__PURE__ */ React.createElement("span", null, "2.1.3 Nested Item"))))), /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("2_2")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#2_2",
    className: getActiveClass("2_2")
  }, /* @__PURE__ */ React.createElement("span", null, "2.2 Nested Item"))), /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("2_3")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#2_3",
    className: getActiveClass("2_3")
  }, /* @__PURE__ */ React.createElement("span", null, "2.3 Nested Item"))))))))))), /* @__PURE__ */ React.createElement("div", {
    className: "it-page-sections-container col-12 col-lg-8",
    ref: containerRef,
    style: getStorybookExtraStyles()
  }, /* @__PURE__ */ React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec congue eros. Maecenas sagittis commodo libero nec porta. Nunc semper velit venenatis ligula condimentum ultricies. In hac habitasse platea dictumst. In malesuada pharetra nulla, id aliquam metus egestas ut. Nulla sollicitudin cursus felis, eu sagittis ante porta id. Suspendisse pellentesque ex non sem tincidunt, aliquam rhoncus turpis maximus. Vivamus eget massa turpis. Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer feugiat et massa nec rhoncus. Morbi vitae metus et sapien suscipit mattis vitae ac ex. Proin pharetra, sem vitae varius malesuada, risus tortor sodales arcu, eu aliquam lorem libero vel urna. Aliquam massa lacus, faucibus quis urna ac, pharetra pretium ex. In facilisis urna non urna luctus, a bibendum tortor facilisis. Mauris sed risus justo. In et erat fermentum eros hendrerit tempor. Quisque accumsan magna ac risus ultricies, vel condimentum ipsum accumsan. Proin blandit mauris sed sodales sollicitudin."), /* @__PURE__ */ React.createElement("h2", {
    className: "it-page-section",
    ...register("1")
  }, "Introduzione"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h3", {
    className: "it-page-section",
    ...register("1_1", {
      parent: "1"
    })
  }, "Nested item 1.1"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h4", {
    className: "it-page-section",
    ...register("1_1_1", {
      parent: "1_1"
    })
  }, "Nested item 1.1.1"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h4", {
    className: "it-page-section",
    ...register("1_1_2", {
      parent: "1_1"
    })
  }, "Nested item 1.1.2"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h4", {
    className: "it-page-section",
    ...register("1_1_3", {
      parent: "1_1"
    })
  }, "Nested item 1.1.3"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h3", {
    className: "it-page-section",
    ...register("1_2", {
      parent: "1"
    })
  }, "Nested item 1.2"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h3", {
    className: "it-page-section",
    ...register("1_3", {
      parent: "1"
    })
  }, "Nested item 1.3"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h2", {
    className: "it-page-section",
    ...register("2")
  }, "Introduzione 2"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h3", {
    className: "it-page-section",
    ...register("2_1", {
      parent: "2"
    })
  }, "Nested item 2.1"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h4", {
    className: "it-page-section",
    ...register("2_1_1", {
      parent: "2_1"
    })
  }, "Nested item 2.1.1"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h4", {
    className: "it-page-section",
    ...register("2_1_2", {
      parent: "2_1"
    })
  }, "Nested item 2.1.2"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h4", {
    className: "it-page-section",
    ...register("2_1_3", {
      parent: "2_1"
    })
  }, "Nested item 2.1.3"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h3", {
    className: "it-page-section",
    ...register("2_2", {
      parent: "2"
    })
  }, "Nested item 2.2"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h3", {
    className: "it-page-section",
    ...register("2_3", {
      parent: "2"
    })
  }, "Nested item 2.3"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."))));
};
const PosizionamentoFondoPagina = {
  render: () => {
    return /* @__PURE__ */ React.createElement(PosizionamentoFondoPaginaHooks, null);
  }
};
const PosizionamentoTestaAltaHooks = () => {
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
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
    md: 12,
    lg: 4
  }, /* @__PURE__ */ React.createElement(Navbar, {
    expand: "lg",
    className: "it-navscroll-wrapper navbar-expand-lg it-top-navscroll it-right-side affix-top"
  }, /* @__PURE__ */ React.createElement(NavbarToggler, {
    className: isOpen ? "custom-navbar-toggler focus--mouse" : "custom-navbar-toggler",
    "data-target": "#navbarNavB",
    onClick: () => toggleNavScroll(!isOpen)
  }, /* @__PURE__ */ React.createElement("span", {
    className: "it-list"
  }), (_b2 = (_a2 = getActiveRef()) == null ? void 0 : _a2.current) == null ? void 0 : _b2.textContent), /* @__PURE__ */ React.createElement(Collapse, {
    isOpen,
    navbar: true,
    id: "navbarNavB"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "it-back-button btn w-100 text-start",
    style: {
      display: isOpen ? "block" : "none"
    },
    onClick: () => toggleNavScroll(!isOpen)
  }, /* @__PURE__ */ React.createElement(Icon, {
    className: "align-top",
    color: "primary",
    icon: "it-chevron-left",
    "aria-hidden": true,
    size: "sm"
  }), /* @__PURE__ */ React.createElement("span", null, "Back ")), /* @__PURE__ */ React.createElement("div", {
    className: "menu-wrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "link-list-wrapper"
  }, /* @__PURE__ */ React.createElement("h3", null, "header"), /* @__PURE__ */ React.createElement(LinkList, {
    noWrapper: true
  }, /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#1",
    className: getActiveClass("1")
  }, /* @__PURE__ */ React.createElement("span", null, "1. Introduzione")), /* @__PURE__ */ React.createElement(LinkList, {
    noWrapper: true
  }, /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("1_1")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#1_1",
    className: getActiveClass("1_1")
  }, /* @__PURE__ */ React.createElement("span", null, "1.1 Nested Item")), /* @__PURE__ */ React.createElement(LinkList, {
    className: "tertiary",
    noWrapper: true
  }, /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("1_1_1")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#1_1_1",
    className: getActiveClass("1_1_1")
  }, /* @__PURE__ */ React.createElement("span", null, "1.1.1 Nested Item"))), /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("1_1_2")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#1_1_2",
    className: getActiveClass("1_1_2")
  }, /* @__PURE__ */ React.createElement("span", null, "1.1.2 Nested Item"))), /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("1_1_3")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#1_1_3",
    className: getActiveClass("1_1_3")
  }, /* @__PURE__ */ React.createElement("span", null, "1.1.3 Nested Item"))))), /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("1_2")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#1_2",
    className: getActiveClass("1_2")
  }, /* @__PURE__ */ React.createElement("span", null, "1.2 Nested Item"))), /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("1_3")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#1_3",
    className: getActiveClass("1_3")
  }, /* @__PURE__ */ React.createElement("span", null, "1.3 Nested Item"))))), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#2",
    className: getActiveClass("2")
  }, /* @__PURE__ */ React.createElement("span", null, "2. List item")), /* @__PURE__ */ React.createElement(LinkList, {
    noWrapper: true
  }, /* @__PURE__ */ React.createElement(NavLink, {
    active: true,
    tag: "li",
    className: getActiveClass("2_1")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#2_1",
    className: getActiveClass("2_1")
  }, /* @__PURE__ */ React.createElement("span", null, "2.1 Nested Item")), /* @__PURE__ */ React.createElement(LinkList, {
    className: "tertiary",
    noWrapper: true
  }, /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("2_1_1")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#2_1_1",
    className: getActiveClass("2_1_1")
  }, /* @__PURE__ */ React.createElement("span", null, "2.1.1 Nested Item"))), /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("2_1_2")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#2_1_2",
    className: getActiveClass("2_1_2")
  }, /* @__PURE__ */ React.createElement("span", null, "2.1.2 Nested Item"))), /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("2_1_3")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#2_1_3",
    className: getActiveClass("2_1_3")
  }, /* @__PURE__ */ React.createElement("span", null, "2.1.3 Nested Item"))))), /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("2_2")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#2_2",
    className: getActiveClass("2_2")
  }, /* @__PURE__ */ React.createElement("span", null, "2.2 Nested Item"))), /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("2_3")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#2_3",
    className: getActiveClass("2_3")
  }, /* @__PURE__ */ React.createElement("span", null, "2.3 Nested Item"))))))))))), /* @__PURE__ */ React.createElement("div", {
    className: "it-page-sections-container col-12 col-lg-8",
    ref: containerRef,
    style: getStorybookExtraStyles()
  }, /* @__PURE__ */ React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec congue eros. Maecenas sagittis commodo libero nec porta. Nunc semper velit venenatis ligula condimentum ultricies. In hac habitasse platea dictumst. In malesuada pharetra nulla, id aliquam metus egestas ut. Nulla sollicitudin cursus felis, eu sagittis ante porta id. Suspendisse pellentesque ex non sem tincidunt, aliquam rhoncus turpis maximus. Vivamus eget massa turpis. Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer feugiat et massa nec rhoncus. Morbi vitae metus et sapien suscipit mattis vitae ac ex. Proin pharetra, sem vitae varius malesuada, risus tortor sodales arcu, eu aliquam lorem libero vel urna. Aliquam massa lacus, faucibus quis urna ac, pharetra pretium ex. In facilisis urna non urna luctus, a bibendum tortor facilisis. Mauris sed risus justo. In et erat fermentum eros hendrerit tempor. Quisque accumsan magna ac risus ultricies, vel condimentum ipsum accumsan. Proin blandit mauris sed sodales sollicitudin."), /* @__PURE__ */ React.createElement("h2", {
    className: "it-page-section",
    ...register("1")
  }, "Introduzione"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h3", {
    className: "it-page-section",
    ...register("1_1", {
      parent: "1"
    })
  }, "Nested item 1.1"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h4", {
    className: "it-page-section",
    ...register("1_1_1", {
      parent: "1_1"
    })
  }, "Nested item 1.1.1"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h4", {
    className: "it-page-section",
    ...register("1_1_2", {
      parent: "1_1"
    })
  }, "Nested item 1.1.2"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h4", {
    className: "it-page-section",
    ...register("1_1_3", {
      parent: "1_1"
    })
  }, "Nested item 1.1.3"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h3", {
    className: "it-page-section",
    ...register("1_2", {
      parent: "1"
    })
  }, "Nested item 1.2"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h3", {
    className: "it-page-section",
    ...register("1_3", {
      parent: "1"
    })
  }, "Nested item 1.3"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h2", {
    className: "it-page-section",
    ...register("2")
  }, "Introduzione 2"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h3", {
    className: "it-page-section",
    ...register("2_1", {
      parent: "2"
    })
  }, "Nested item 2.1"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h4", {
    className: "it-page-section",
    ...register("2_1_1", {
      parent: "2_1"
    })
  }, "Nested item 2.1.1"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h4", {
    className: "it-page-section",
    ...register("2_1_2", {
      parent: "2_1"
    })
  }, "Nested item 2.1.2"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h4", {
    className: "it-page-section",
    ...register("2_1_3", {
      parent: "2_1"
    })
  }, "Nested item 2.1.3"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h3", {
    className: "it-page-section",
    ...register("2_2", {
      parent: "2"
    })
  }, "Nested item 2.2"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h3", {
    className: "it-page-section",
    ...register("2_3", {
      parent: "2"
    })
  }, "Nested item 2.3"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."))));
};
const PosizionamentoTestaAlta = {
  render: () => {
    return /* @__PURE__ */ React.createElement(PosizionamentoTestaAltaHooks, null);
  }
};
const ComponenteMenuInlineHooks = () => {
  const [isOpenOne, toggleNavScrollOne] = reactExports.useState(false);
  const [isOpenTwo, toggleNavScrollTwo] = reactExports.useState(false);
  const [isOpenThree, toggleNavScrollThree] = reactExports.useState(false);
  const containerRef = reactExports.useRef(null);
  const {
    register,
    isActive
  } = useNavScroll({
    root: containerRef.current || void 0
  });
  const getActiveClass = (id) => isActive(id) ? "active" : void 0;
  const isFirstOpen = isOpenOne || isActive("1");
  const isSecondOpen = isOpenTwo || isActive("2");
  const isThirdOpen = isOpenThree || isActive("3");
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
    md: 12,
    lg: 4
  }, /* @__PURE__ */ React.createElement(Navbar, {
    className: "inline-menu affix-top",
    cssModule: {
      navbar: " "
    }
  }, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: `list-item large medium right-icon ${isFirstOpen ? "" : "collapsed"} ${getActiveClass("1")}`,
    href: `#collapseOne`,
    "data-toggle": "collapse",
    "aria-expanded": "false",
    "aria-controls": "collapseOne",
    onClick: (e) => {
      e.preventDefault();
      toggleNavScrollOne(!isOpenOne);
    }
  }, /* @__PURE__ */ React.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ React.createElement("span", null, "Link list 1"), /* @__PURE__ */ React.createElement(Icon, {
    color: "primary",
    icon: "it-expand",
    "aria-hidden": true,
    size: "sm"
  }))), /* @__PURE__ */ React.createElement(LinkList, {
    sublist: true,
    className: isFirstOpen ? "collapse show" : "collapse",
    id: "collapseOne"
  }, /* @__PURE__ */ React.createElement(LinkListItem, {
    className: getActiveClass("1_1")
  }, "Link list 1.1"), /* @__PURE__ */ React.createElement(LinkListItem, {
    className: getActiveClass("1_2")
  }, "Link list 1.2"), /* @__PURE__ */ React.createElement(LinkListItem, {
    className: getActiveClass("1_3")
  }, "Link list 1.3"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: `list-item large medium right-icon ${isSecondOpen ? "" : "collapsed"} ${getActiveClass("2")}`,
    href: `#collapseTwo`,
    "data-toggle": "collapse",
    "aria-expanded": "false",
    "aria-controls": "collapseTwo",
    onClick: (e) => {
      e.preventDefault();
      toggleNavScrollTwo(!isOpenTwo);
    }
  }, /* @__PURE__ */ React.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ React.createElement("span", null, "Link list 2"), /* @__PURE__ */ React.createElement(Icon, {
    color: "primary",
    icon: "it-expand",
    "aria-hidden": true,
    size: "sm"
  }))), /* @__PURE__ */ React.createElement(LinkList, {
    sublist: true,
    className: isSecondOpen ? "collapse show" : "collapse",
    id: "collapseTwo"
  }, /* @__PURE__ */ React.createElement(LinkListItem, {
    className: getActiveClass("2_1")
  }, "Link list 2.1"), /* @__PURE__ */ React.createElement(LinkListItem, {
    className: getActiveClass("2_2")
  }, "Link list 2.2"), /* @__PURE__ */ React.createElement(LinkListItem, {
    className: getActiveClass("2_3")
  }, "Link list 2.3"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: `list-item large medium right-icon ${isThirdOpen ? "" : "collapsed"} ${getActiveClass("3")}`,
    href: `#collapseThree`,
    "data-toggle": "collapse",
    "aria-expanded": "false",
    "aria-controls": "collapseThree",
    onClick: (e) => {
      e.preventDefault();
      toggleNavScrollThree(!isOpenThree);
    }
  }, /* @__PURE__ */ React.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ React.createElement("span", null, "Link list 3"), /* @__PURE__ */ React.createElement(Icon, {
    color: "primary",
    icon: "it-expand",
    "aria-hidden": true,
    size: "sm"
  }))), /* @__PURE__ */ React.createElement(LinkList, {
    sublist: true,
    className: isThirdOpen ? "collapse show" : "collapse",
    id: "collapseThree"
  }, /* @__PURE__ */ React.createElement(LinkListItem, {
    className: getActiveClass("3_1")
  }, "Link list 3.1"), /* @__PURE__ */ React.createElement(LinkListItem, {
    className: getActiveClass("3_2")
  }, "Link list 3.2"), /* @__PURE__ */ React.createElement(LinkListItem, {
    className: getActiveClass("3_3")
  }, "Link list 3.3")))))), /* @__PURE__ */ React.createElement("div", {
    className: "it-page-sections-container col-12 col-lg-8",
    ref: containerRef,
    style: getStorybookExtraStyles()
  }, /* @__PURE__ */ React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec congue eros. Maecenas sagittis commodo libero nec porta. Nunc semper velit venenatis ligula condimentum ultricies. In hac habitasse platea dictumst. In malesuada pharetra nulla, id aliquam metus egestas ut. Nulla sollicitudin cursus felis, eu sagittis ante porta id. Suspendisse pellentesque ex non sem tincidunt, aliquam rhoncus turpis maximus. Vivamus eget massa turpis. Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer feugiat et massa nec rhoncus. Morbi vitae metus et sapien suscipit mattis vitae ac ex. Proin pharetra, sem vitae varius malesuada, risus tortor sodales arcu, eu aliquam lorem libero vel urna. Aliquam massa lacus, faucibus quis urna ac, pharetra pretium ex. In facilisis urna non urna luctus, a bibendum tortor facilisis. Mauris sed risus justo. In et erat fermentum eros hendrerit tempor. Quisque accumsan magna ac risus ultricies, vel condimentum ipsum accumsan. Proin blandit mauris sed sodales sollicitudin."), /* @__PURE__ */ React.createElement("h2", {
    className: "it-page-section",
    ...register("1")
  }, "Introduzione"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h3", {
    className: "it-page-section",
    ...register("1_1", {
      parent: "1"
    })
  }, "Nested item 1.1"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h3", {
    className: "it-page-section",
    ...register("1_2", {
      parent: "1"
    })
  }, "Nested item 1.2"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h3", {
    className: "it-page-section",
    ...register("1_3", {
      parent: "1"
    })
  }, "Nested item 1.3"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h2", {
    className: "it-page-section",
    ...register("2")
  }, "Introduzione 2"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h3", {
    className: "it-page-section",
    ...register("2_1", {
      parent: "2"
    })
  }, "Nested item 2.1"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h3", {
    className: "it-page-section",
    ...register("2_2", {
      parent: "2"
    })
  }, "Nested item 2.2"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h3", {
    className: "it-page-section",
    ...register("2_3", {
      parent: "2"
    })
  }, "Nested item 2.3"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h2", {
    className: "it-page-section",
    ...register("3")
  }, "Introduzione 3"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h3", {
    className: "it-page-section",
    ...register("3_1", {
      parent: "3"
    })
  }, "Nested item 3.1"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h3", {
    className: "it-page-section",
    ...register("3_2", {
      parent: "3"
    })
  }, "Nested item 3.2"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h3", {
    className: "it-page-section",
    ...register("3_3", {
      parent: "3"
    })
  }, "Nested item 3.3"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."))));
};
const ComponenteMenuInline = {
  render: () => {
    return /* @__PURE__ */ React.createElement(ComponenteMenuInlineHooks, null);
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
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
    md: 12,
    lg: 4
  }, /* @__PURE__ */ React.createElement(Navbar, {
    expand: "lg",
    className: "it-navscroll-wrapper navbar-expand-lg it-top-navscroll it-right-side affix-top theme-dark-desk theme-dark-mobile"
  }, /* @__PURE__ */ React.createElement(NavbarToggler, {
    className: isOpen ? "custom-navbar-toggler focus--mouse" : "custom-navbar-toggler",
    "data-target": "#navbarNavB",
    onClick: () => toggleNavScroll(!isOpen)
  }, /* @__PURE__ */ React.createElement("span", {
    className: "it-list"
  }), (_b2 = (_a2 = getActiveRef()) == null ? void 0 : _a2.current) == null ? void 0 : _b2.textContent), /* @__PURE__ */ React.createElement(Collapse, {
    isOpen,
    navbar: true,
    id: "navbarNavB"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "it-back-button btn w-100 text-start",
    style: {
      display: isOpen ? "block" : "none"
    },
    onClick: () => toggleNavScroll(!isOpen)
  }, /* @__PURE__ */ React.createElement(Icon, {
    className: "align-top",
    color: "primary",
    icon: "it-chevron-left",
    "aria-hidden": true,
    size: "sm"
  }), /* @__PURE__ */ React.createElement("span", null, "Back ")), /* @__PURE__ */ React.createElement("div", {
    className: "menu-wrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "link-list-wrapper"
  }, /* @__PURE__ */ React.createElement("h3", null, "header"), /* @__PURE__ */ React.createElement(LinkList, {
    noWrapper: true
  }, /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#1",
    className: getActiveClass("1")
  }, /* @__PURE__ */ React.createElement("span", null, "1. Introduzione")), /* @__PURE__ */ React.createElement(LinkList, {
    noWrapper: true
  }, /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("1_1")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#1_1",
    className: getActiveClass("1_1")
  }, /* @__PURE__ */ React.createElement("span", null, "1.1 Nested Item")), /* @__PURE__ */ React.createElement(LinkList, {
    className: "tertiary",
    noWrapper: true
  }, /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("1_1_1")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#1_1_1",
    className: getActiveClass("1_1_1")
  }, /* @__PURE__ */ React.createElement("span", null, "1.1.1 Nested Item"))), /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("1_1_2")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#1_1_2",
    className: getActiveClass("1_1_2")
  }, /* @__PURE__ */ React.createElement("span", null, "1.1.2 Nested Item"))), /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("1_1_3")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#1_1_3",
    className: getActiveClass("1_1_3")
  }, /* @__PURE__ */ React.createElement("span", null, "1.1.3 Nested Item"))))), /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("1_2")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#1_2",
    className: getActiveClass("1_2")
  }, /* @__PURE__ */ React.createElement("span", null, "1.2 Nested Item"))), /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("1_3")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#1_3",
    className: getActiveClass("1_3")
  }, /* @__PURE__ */ React.createElement("span", null, "1.3 Nested Item"))))), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#2",
    className: getActiveClass("2")
  }, /* @__PURE__ */ React.createElement("span", null, "2. List item")), /* @__PURE__ */ React.createElement(LinkList, {
    noWrapper: true
  }, /* @__PURE__ */ React.createElement(NavLink, {
    active: true,
    tag: "li",
    className: getActiveClass("2_1")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#2_1",
    className: getActiveClass("2_1")
  }, /* @__PURE__ */ React.createElement("span", null, "2.1 Nested Item")), /* @__PURE__ */ React.createElement(LinkList, {
    className: "tertiary",
    noWrapper: true
  }, /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("2_1_1")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#2_1_1",
    className: getActiveClass("2_1_1")
  }, /* @__PURE__ */ React.createElement("span", null, "2.1.1 Nested Item"))), /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("2_1_2")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#2_1_2",
    className: getActiveClass("2_1_2")
  }, /* @__PURE__ */ React.createElement("span", null, "2.1.2 Nested Item"))), /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("2_1_3")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#2_1_3",
    className: getActiveClass("2_1_3")
  }, /* @__PURE__ */ React.createElement("span", null, "2.1.3 Nested Item"))))), /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("2_2")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#2_2",
    className: getActiveClass("2_2")
  }, /* @__PURE__ */ React.createElement("span", null, "2.2 Nested Item"))), /* @__PURE__ */ React.createElement(NavLink, {
    tag: "li",
    className: getActiveClass("2_3")
  }, /* @__PURE__ */ React.createElement(NavLink, {
    href: "#2_3",
    className: getActiveClass("2_3")
  }, /* @__PURE__ */ React.createElement("span", null, "2.3 Nested Item"))))))))))), /* @__PURE__ */ React.createElement("div", {
    className: "it-page-sections-container col-12 col-lg-8",
    ref: containerRef,
    style: getStorybookExtraStyles()
  }, /* @__PURE__ */ React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec congue eros. Maecenas sagittis commodo libero nec porta. Nunc semper velit venenatis ligula condimentum ultricies. In hac habitasse platea dictumst. In malesuada pharetra nulla, id aliquam metus egestas ut. Nulla sollicitudin cursus felis, eu sagittis ante porta id. Suspendisse pellentesque ex non sem tincidunt, aliquam rhoncus turpis maximus. Vivamus eget massa turpis. Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer feugiat et massa nec rhoncus. Morbi vitae metus et sapien suscipit mattis vitae ac ex. Proin pharetra, sem vitae varius malesuada, risus tortor sodales arcu, eu aliquam lorem libero vel urna. Aliquam massa lacus, faucibus quis urna ac, pharetra pretium ex. In facilisis urna non urna luctus, a bibendum tortor facilisis. Mauris sed risus justo. In et erat fermentum eros hendrerit tempor. Quisque accumsan magna ac risus ultricies, vel condimentum ipsum accumsan. Proin blandit mauris sed sodales sollicitudin."), /* @__PURE__ */ React.createElement("h2", {
    className: "it-page-section",
    ...register("1")
  }, "Introduzione"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue, sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h3", {
    className: "it-page-section",
    ...register("1_1", {
      parent: "1"
    })
  }, "Nested item 1.1"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h4", {
    className: "it-page-section",
    ...register("1_1_1", {
      parent: "1_1"
    })
  }, "Nested item 1.1.1"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h4", {
    className: "it-page-section",
    ...register("1_1_2", {
      parent: "1_1"
    })
  }, "Nested item 1.1.2"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h4", {
    className: "it-page-section",
    ...register("1_1_3", {
      parent: "1_1"
    })
  }, "Nested item 1.1.3"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h3", {
    className: "it-page-section",
    ...register("1_2", {
      parent: "1"
    })
  }, "Nested item 1.2"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h3", {
    className: "it-page-section",
    ...register("1_3", {
      parent: "1"
    })
  }, "Nested item 1.3"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h2", {
    className: "it-page-section",
    ...register("2")
  }, "Introduzione 2"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h3", {
    className: "it-page-section",
    ...register("2_1", {
      parent: "2"
    })
  }, "Nested item 2.1"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h4", {
    className: "it-page-section",
    ...register("2_1_1", {
      parent: "2_1"
    })
  }, "Nested item 2.1.1"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h4", {
    className: "it-page-section",
    ...register("2_1_2", {
      parent: "2_1"
    })
  }, "Nested item 2.1.2"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h4", {
    className: "it-page-section",
    ...register("2_1_3", {
      parent: "2_1"
    })
  }, "Nested item 2.1.3"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h3", {
    className: "it-page-section",
    ...register("2_2", {
      parent: "2"
    })
  }, "Nested item 2.2"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."), /* @__PURE__ */ React.createElement("h3", {
    className: "it-page-section",
    ...register("2_3", {
      parent: "2"
    })
  }, "Nested item 2.3"), /* @__PURE__ */ React.createElement("p", null, "Proin placerat ipsum massa, ac commodo velit tempor quis. In ante augue,sodales ac rhoncus in, ultricies a neque. Morbi non semper felis, at lacinia nibh. Nam quis elit massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam laoreet, diam quis blandit porttitor, leo erat semper sem, vel sagittis dolor quam eu magna. Nunc feugiat pretium tempor. Nam eget augue quis tellus viverra malesuada vel ut quam. Cras vehicula rutrum vehicula. Suspendisse efficitur eget purus vitae convallis. Integer euismod pharetra lorem, non ullamcorper lorem euismod vel. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."))));
};
const ComponenteVersioneScura = {
  render: () => {
    return /* @__PURE__ */ React.createElement(ComponenteVersioneScuraHooks, null);
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
