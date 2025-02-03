var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
import { r as reactExports, e } from "./index-BehpJNG5.js";
import { I as Icon } from "./Icon-BAflhtPf.js";
import { c as classNames } from "./index-D3ELxcOV.js";
import "./track-focus-DbJ2CO43.js";
const backToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const BackToTop = ({
  ariaLabel = "Torna su",
  className,
  dark = false,
  small = false,
  shadow = false,
  showOffset = 200
}) => {
  const [showBtn, setShowBtn] = reactExports.useState(false);
  reactExports.useLayoutEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > showOffset) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, [showOffset]);
  return /* @__PURE__ */ e.createElement(
    "a",
    {
      "aria-label": ariaLabel,
      href: "#",
      className: classNames(
        className,
        "back-to-top",
        small && "back-to-top-small",
        showBtn && "back-to-top-show",
        dark && "dark",
        shadow && "shadow"
      ),
      id: "back-to-top-btn",
      onClick: backToTop,
      style: { padding: 0 },
      color: !dark ? "primary" : ""
    },
    /* @__PURE__ */ e.createElement(Icon, { color: dark ? "secondary" : "light", icon: "it-arrow-up", style: { cursor: "pointer" } })
  );
};
BackToTop.__docgenInfo = { "description": "", "methods": [], "displayName": "BackToTop", "props": { "ariaLabel": { "required": false, "tsType": { "name": "string" }, "description": "Aria label che definisce lo scopo del componente (default: `Torna su`)", "defaultValue": { "value": "'Torna su'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente" }, "dark": { "required": false, "tsType": { "name": "boolean" }, "description": "Renderizza la variante `dark` del componente", "defaultValue": { "value": "false", "computed": false } }, "small": { "required": false, "tsType": { "name": "boolean" }, "description": "Renderizza la variante `small` del componente", "defaultValue": { "value": "false", "computed": false } }, "shadow": { "required": false, "tsType": { "name": "boolean" }, "description": "Aggiunge l'ombra al componente", "defaultValue": { "value": "false", "computed": false } }, "showOffset": { "required": false, "tsType": { "name": "number" }, "description": "Configurazione riguardante dopo quanti pixel di scroll il bottone viene mostrato", "defaultValue": { "value": "200", "computed": false } } } };
const meta = {
  title: "Documentazione/Menu di navigazione/BackToTop",
  component: BackToTop
};
const Esempio = {
  render: () => /* @__PURE__ */ e.createElement(BackToTop, null)
};
const Small = {
  render: (args) => /* @__PURE__ */ e.createElement(BackToTop, { ...args }),
  args: {
    small: true
  }
};
const Shadow = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "d-flex align-items-center" }, /* @__PURE__ */ e.createElement(BackToTop, { shadow: true }), /* @__PURE__ */ e.createElement(BackToTop, { shadow: true, small: true }))
};
const Dark = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "d-flex align-items-center" }, /* @__PURE__ */ e.createElement(BackToTop, { dark: true }), /* @__PURE__ */ e.createElement(BackToTop, { dark: true, small: true }))
};
const DarkShadow = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "d-flex align-items-center" }, /* @__PURE__ */ e.createElement(BackToTop, { dark: true, shadow: true }), /* @__PURE__ */ e.createElement(BackToTop, { dark: true, shadow: true, small: true }))
};
Esempio.parameters = {
  ...Esempio.parameters,
  docs: {
    ...(_a = Esempio.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <BackToTop />\n}",
      ...(_c = (_b = Esempio.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Small.parameters = {
  ...Small.parameters,
  docs: {
    ...(_d = Small.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: args => <BackToTop {...args} />,\n  args: {\n    small: true\n  }\n}",
      ...(_f = (_e = Small.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Shadow.parameters = {
  ...Shadow.parameters,
  docs: {
    ...(_g = Shadow.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => <div className='d-flex align-items-center'>\n      <BackToTop shadow />\n      <BackToTop shadow small />\n    </div>\n}",
      ...(_i = (_h = Shadow.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Dark.parameters = {
  ...Dark.parameters,
  docs: {
    ...(_j = Dark.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  render: () => <div className='d-flex align-items-center'>\n      <BackToTop dark />\n      <BackToTop dark small />\n    </div>\n}",
      ...(_l = (_k = Dark.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
DarkShadow.parameters = {
  ...DarkShadow.parameters,
  docs: {
    ...(_m = DarkShadow.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  render: () => <div className='d-flex align-items-center'>\n      <BackToTop dark shadow />\n      <BackToTop dark shadow small />\n    </div>\n}",
      ...(_o = (_n = DarkShadow.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
const __namedExportsOrder = ["Esempio", "Small", "Shadow", "Dark", "DarkShadow"];
const BackToTopStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dark,
  DarkShadow,
  Esempio,
  Shadow,
  Small,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  BackToTopStories as B,
  Dark as D,
  Esempio as E,
  Small as S,
  Shadow as a,
  DarkShadow as b
};
