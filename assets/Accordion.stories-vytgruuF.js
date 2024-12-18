var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
import { e, r as reactExports } from "./index-BehpJNG5.js";
import { c as classNames } from "./index-D3ELxcOV.js";
import { p as pick, o as omit } from "./utils-CwYUlCuU.js";
import { T as Transition } from "./Transition-D-QAwXWC.js";
import "./track-focus-DbJ2CO43.js";
const Accordion = ({
  tag = "div",
  className,
  background,
  iconLeft = false,
  testId,
  ...attributes
}) => {
  const Tag = tag;
  const classes = classNames("accordion", className, {
    "accordion-background-active": background === "active",
    "accordion-background-hover": background === "hover",
    "accordion-left-icon": iconLeft
  });
  return /* @__PURE__ */ e.createElement(Tag, { ...attributes, className: classes, "data-testid": testId });
};
Accordion.__docgenInfo = { "description": "", "methods": [], "displayName": "Accordion", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'div'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Badge" }, "background": { "required": false, "tsType": { "name": "union", "raw": "'active' | 'hover'", "elements": [{ "name": "literal", "value": "'active'" }, { "name": "literal", "value": "'hover'" }] }, "description": "Utilizzare questo attributo per ottenere header con sfondo di colore primario quando questi è attivo o all’hover." }, "iconLeft": { "required": false, "tsType": { "name": "boolean" }, "description": "Utilizzare questo attributo per mostrare, mediante un'icona a sinistra, lo stato di apertura", "defaultValue": { "value": "false", "computed": false } }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const TransitionTimeouts = {
  // $transition-fade
  Fade: 150,
  // $transition-collapse
  Collapse: 350,
  // $modal-transition
  Modal: 300,
  // $carousel-transition
  Carousel: 600
};
const TransitionsKeys = [
  "in",
  "mountOnEnter",
  "unmountOnExit",
  "appear",
  "enter",
  "exit",
  "timeout",
  "onEnter",
  "onEntering",
  "onEntered",
  "onExit",
  "onExiting",
  "onExited"
];
const transitionStatusToClassHash = {
  entering: "collapsing",
  entered: "collapse show",
  exiting: "collapsing",
  exited: "collapse"
};
function getTransitionClass(status) {
  return transitionStatusToClassHash[status] || "collapse";
}
function getHeight(node) {
  return node.scrollHeight;
}
const AccordionBody = ({
  className,
  listClassName,
  tag = "div",
  active = false,
  children,
  timeout = TransitionTimeouts.Collapse,
  ...attributes
}) => {
  const [height, setHeight] = reactExports.useState(null);
  const onEntering = reactExports.useCallback(
    (node, isAppearing) => {
      var _a2;
      setHeight(getHeight(node));
      (_a2 = attributes.onEntering) == null ? void 0 : _a2.call(attributes, node, isAppearing);
    },
    [attributes.onEntering]
  );
  const onEntered = reactExports.useCallback(
    (node, isAppearing) => {
      var _a2;
      setHeight(null);
      (_a2 = attributes.onEntered) == null ? void 0 : _a2.call(attributes, node, isAppearing);
    },
    [attributes.onEntered]
  );
  const onExit = reactExports.useCallback(
    (node) => {
      var _a2;
      setHeight(getHeight(node));
      (_a2 = attributes.onExit) == null ? void 0 : _a2.call(attributes, node);
    },
    [attributes.onExit]
  );
  const onExiting = reactExports.useCallback(
    (node) => {
      var _a2;
      node.offsetHeight;
      setHeight(0);
      (_a2 = attributes.onExiting) == null ? void 0 : _a2.call(attributes, node);
    },
    [attributes.onExiting]
  );
  const onExited = reactExports.useCallback(
    (node) => {
      var _a2;
      setHeight(null);
      (_a2 = attributes.onExited) == null ? void 0 : _a2.call(attributes, node);
    },
    [attributes.onExited]
  );
  const Tag = tag;
  const transitionProps = pick(attributes, TransitionsKeys);
  const childProps = omit(attributes, TransitionsKeys);
  return /* @__PURE__ */ e.createElement(
    Transition,
    {
      ...transitionProps,
      timeout,
      in: active,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited
    },
    (status) => {
      const transitionClass = getTransitionClass(status);
      const classes = classNames(className, transitionClass);
      const listClasses = classNames(listClassName, "accordion-body");
      const style = height == null ? null : { height };
      return /* @__PURE__ */ e.createElement(Tag, { className: classes, style: { ...childProps.style, ...style }, ...childProps }, /* @__PURE__ */ e.createElement("div", { className: listClasses }, children));
    }
  );
};
AccordionBody.__docgenInfo = { "description": "", "methods": [], "displayName": "AccordionBody", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "", "defaultValue": { "value": "'div'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "" }, "listClassName": { "required": false, "tsType": { "name": "string" }, "description": "" }, "active": { "required": false, "tsType": { "name": "boolean" }, "description": "", "defaultValue": { "value": "false", "computed": false } }, "onToggle": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "() => void", "signature": { "arguments": [], "return": { "name": "void" } } }, "description": "" }, "timeout": { "defaultValue": { "value": "350", "computed": false }, "required": false } } };
const AccordionHeader = ({
  className,
  tag = "button",
  active = false,
  append,
  onToggle,
  testId,
  ...attributes
}) => {
  const Tag = tag;
  const toggleClasses = classNames(className, "accordion-button", {
    collapsed: !active
  });
  return /* @__PURE__ */ e.createElement("div", { className: "accordion-header", "data-testid": testId }, /* @__PURE__ */ e.createElement(
    Tag,
    {
      "data-bs-toggle": "collapse",
      "aria-expanded": active ? "true" : "false",
      className: toggleClasses,
      onClick: onToggle,
      ...attributes,
      ...tag === "button" && { type: "button" }
    }
  ), append);
};
AccordionHeader.__docgenInfo = { "description": "", "methods": [], "displayName": "AccordionHeader", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'button'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente AccordionHeader" }, "active": { "required": false, "tsType": { "name": "boolean" }, "description": "Utilizzare questo attributo per indicare se l'elemento è attivo o no", "defaultValue": { "value": "false", "computed": false } }, "onToggle": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "() => void", "signature": { "arguments": [], "return": { "name": "void" } } }, "description": "Questa funzione verrà chiamata quando avviene un click sul componente AccordionHeader" }, "append": { "required": false, "tsType": { "name": "ReactNode" }, "description": "Contenuto aggiuntivo all'interno del bottone dell'AccordionHeader" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const AccordionItem = ({ tag = "div", className, ...attributes }) => {
  const Tag = tag;
  const classes = classNames("accordion-item", className);
  return /* @__PURE__ */ e.createElement(Tag, { ...attributes, className: classes });
};
AccordionItem.__docgenInfo = { "description": "", "methods": [], "displayName": "AccordionItem", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'div'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente" } }, "composes": ["HTMLAttributes"] };
const meta = {
  title: "Documentazione/Componenti/Accordion",
  component: Accordion,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const GruppiDiElementiRichiudibiliWithHooks = () => {
  const [collapseElementOpen, setCollapseElement] = reactExports.useState("");
  return /* @__PURE__ */ e.createElement(Accordion, null, /* @__PURE__ */ e.createElement(AccordionItem, null, /* @__PURE__ */ e.createElement(AccordionHeader, { active: collapseElementOpen === "1", onToggle: () => setCollapseElement(collapseElementOpen !== "1" ? "1" : "") }, "Elemento Richiudibile #1"), /* @__PURE__ */ e.createElement(AccordionBody, { active: collapseElementOpen === "1" }, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.")), /* @__PURE__ */ e.createElement(AccordionItem, null, /* @__PURE__ */ e.createElement(AccordionHeader, { active: collapseElementOpen === "2", onToggle: () => setCollapseElement(collapseElementOpen !== "2" ? "2" : "") }, "Elemento Richiudibile #2"), /* @__PURE__ */ e.createElement(AccordionBody, { active: collapseElementOpen === "2" }, "Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.")), /* @__PURE__ */ e.createElement(AccordionItem, null, /* @__PURE__ */ e.createElement(AccordionHeader, { active: collapseElementOpen === "3", onToggle: () => setCollapseElement(collapseElementOpen !== "3" ? "3" : "") }, "Elemento Richiudibile #3"), /* @__PURE__ */ e.createElement(AccordionBody, { active: collapseElementOpen === "3" }, "Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.")));
};
const GruppiDiElementiRichiudibili = {
  render: () => /* @__PURE__ */ e.createElement(GruppiDiElementiRichiudibiliWithHooks, null)
};
const _AccordionWithHooks = () => {
  const [collapseElementOpen, setCollapseElement] = reactExports.useState("");
  return /* @__PURE__ */ e.createElement(Accordion, null, /* @__PURE__ */ e.createElement(AccordionItem, null, /* @__PURE__ */ e.createElement(AccordionHeader, { active: collapseElementOpen === "1", onToggle: () => setCollapseElement(collapseElementOpen !== "1" ? "1" : "") }, "Accordion Group Item #1"), /* @__PURE__ */ e.createElement(AccordionBody, { active: collapseElementOpen === "1", listClassName: "custom-class" }, "Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.")), /* @__PURE__ */ e.createElement(AccordionItem, null, /* @__PURE__ */ e.createElement(AccordionHeader, { active: collapseElementOpen === "2", onToggle: () => setCollapseElement(collapseElementOpen !== "2" ? "2" : "") }, "Accordion Group Item #2"), /* @__PURE__ */ e.createElement(AccordionBody, { active: collapseElementOpen === "2", listClassName: "custom-class" }, "Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.")), /* @__PURE__ */ e.createElement(AccordionItem, null, /* @__PURE__ */ e.createElement(AccordionHeader, { active: collapseElementOpen === "3", onToggle: () => setCollapseElement(collapseElementOpen !== "3" ? "3" : "") }, "Accordion Group Item #3"), /* @__PURE__ */ e.createElement(AccordionBody, { active: collapseElementOpen === "3", listClassName: "custom-class" }, "Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.")));
};
const _Accordion = {
  render: () => /* @__PURE__ */ e.createElement(_AccordionWithHooks, null)
};
const AccordionAnnidatiWithHooks = () => {
  const [collapseElementOpen, setCollapseElement] = reactExports.useState("");
  const [nestedCollapseOpen, setNestedCollapseOpen] = reactExports.useState("");
  return /* @__PURE__ */ e.createElement(Accordion, null, /* @__PURE__ */ e.createElement(AccordionItem, null, /* @__PURE__ */ e.createElement(AccordionHeader, { active: collapseElementOpen === "1", onToggle: () => setCollapseElement(collapseElementOpen !== "1" ? "1" : "") }, "Elemento Accordion #1"), /* @__PURE__ */ e.createElement(AccordionBody, { active: collapseElementOpen === "1" }, /* @__PURE__ */ e.createElement(Accordion, null, /* @__PURE__ */ e.createElement(AccordionItem, null, /* @__PURE__ */ e.createElement(AccordionHeader, { active: nestedCollapseOpen === "1", onToggle: () => setNestedCollapseOpen(nestedCollapseOpen !== "1" ? "1" : "") }, "Elemento Accordion annidato #1"), /* @__PURE__ */ e.createElement(AccordionBody, { active: nestedCollapseOpen === "1" }, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.")), /* @__PURE__ */ e.createElement(AccordionItem, null, /* @__PURE__ */ e.createElement(AccordionHeader, { active: nestedCollapseOpen === "2", onToggle: () => setNestedCollapseOpen(nestedCollapseOpen !== "2" ? "2" : "") }, "Elemento Accordion annidato #2"), /* @__PURE__ */ e.createElement(AccordionBody, { active: nestedCollapseOpen === "2" }, "Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.")), /* @__PURE__ */ e.createElement(AccordionItem, null, /* @__PURE__ */ e.createElement(AccordionHeader, { active: nestedCollapseOpen === "3", onToggle: () => setNestedCollapseOpen(nestedCollapseOpen !== "3" ? "3" : "") }, "Elemento Accordion annidato #3"), /* @__PURE__ */ e.createElement(AccordionBody, { active: nestedCollapseOpen === "3" }, "Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."))))), /* @__PURE__ */ e.createElement(AccordionHeader, { active: collapseElementOpen === "2", onToggle: () => setCollapseElement(collapseElementOpen !== "2" ? "2" : "") }, "Elemento Accordion #2"), /* @__PURE__ */ e.createElement(AccordionBody, { active: collapseElementOpen === "2" }, "Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."), /* @__PURE__ */ e.createElement(AccordionHeader, { active: collapseElementOpen === "3", onToggle: () => setCollapseElement(collapseElementOpen !== "3" ? "3" : "") }, "Elemento Accordion #3"), /* @__PURE__ */ e.createElement(AccordionBody, { active: collapseElementOpen === "3" }, "Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."));
};
const AccordionAnnidati = {
  render: () => /* @__PURE__ */ e.createElement(AccordionAnnidatiWithHooks, null)
};
const HeaderAttiviWithHooks = () => {
  const [collapseElementOpen, setCollapseElement] = reactExports.useState("");
  return /* @__PURE__ */ e.createElement(Accordion, { background: "active" }, /* @__PURE__ */ e.createElement(AccordionItem, null, /* @__PURE__ */ e.createElement(AccordionHeader, { active: collapseElementOpen === "1", onToggle: () => setCollapseElement(collapseElementOpen !== "1" ? "1" : "") }, "Elemento Accordion #1"), /* @__PURE__ */ e.createElement(AccordionBody, { active: collapseElementOpen === "1" }, "Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.")), /* @__PURE__ */ e.createElement(AccordionItem, null, /* @__PURE__ */ e.createElement(AccordionHeader, { active: collapseElementOpen === "2", onToggle: () => setCollapseElement(collapseElementOpen !== "2" ? "2" : "") }, "Elemento Accordion #2"), /* @__PURE__ */ e.createElement(AccordionBody, { active: collapseElementOpen === "2" }, "Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.")), /* @__PURE__ */ e.createElement(AccordionItem, null, /* @__PURE__ */ e.createElement(AccordionHeader, { active: collapseElementOpen === "3", onToggle: () => setCollapseElement(collapseElementOpen !== "3" ? "3" : "") }, "Elemento Accordion #3"), /* @__PURE__ */ e.createElement(AccordionBody, { active: collapseElementOpen === "3" }, "Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.")));
};
const HeaderAttivi = {
  render: () => /* @__PURE__ */ e.createElement(HeaderAttiviWithHooks, null)
};
const HeaderHoverWithHooks = () => {
  const [collapseElementOpen, setCollapseElement] = reactExports.useState("");
  return /* @__PURE__ */ e.createElement(Accordion, { background: "hover" }, /* @__PURE__ */ e.createElement(AccordionItem, null, /* @__PURE__ */ e.createElement(AccordionHeader, { active: collapseElementOpen === "1", onToggle: () => setCollapseElement(collapseElementOpen !== "1" ? "1" : "") }, "Elemento Accordion #1"), /* @__PURE__ */ e.createElement(AccordionBody, { active: collapseElementOpen === "1" }, "Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.")), /* @__PURE__ */ e.createElement(AccordionItem, null, /* @__PURE__ */ e.createElement(AccordionHeader, { active: collapseElementOpen === "2", onToggle: () => setCollapseElement(collapseElementOpen !== "2" ? "2" : "") }, "Elemento Accordion #2"), /* @__PURE__ */ e.createElement(AccordionBody, { active: collapseElementOpen === "2" }, "Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.")), /* @__PURE__ */ e.createElement(AccordionItem, null, /* @__PURE__ */ e.createElement(AccordionHeader, { active: collapseElementOpen === "3", onToggle: () => setCollapseElement(collapseElementOpen !== "3" ? "3" : "") }, "Elemento Accordion #3"), /* @__PURE__ */ e.createElement(AccordionBody, { active: collapseElementOpen === "3" }, "Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.")));
};
const HeaderHover = {
  render: () => /* @__PURE__ */ e.createElement(HeaderHoverWithHooks, null)
};
const IconaSinistraWithHooks = () => {
  const [collapseElementOpen, setCollapseElement] = reactExports.useState("");
  return /* @__PURE__ */ e.createElement(Accordion, { iconLeft: true }, /* @__PURE__ */ e.createElement(AccordionItem, null, /* @__PURE__ */ e.createElement(AccordionHeader, { active: collapseElementOpen === "1", onToggle: () => setCollapseElement(collapseElementOpen !== "1" ? "1" : "") }, "Elemento Accordion #1"), /* @__PURE__ */ e.createElement(AccordionBody, { active: collapseElementOpen === "1" }, "Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.")), /* @__PURE__ */ e.createElement(AccordionItem, null, /* @__PURE__ */ e.createElement(AccordionHeader, { active: collapseElementOpen === "2", onToggle: () => setCollapseElement(collapseElementOpen !== "2" ? "2" : "") }, "Elemento Accordion #2"), /* @__PURE__ */ e.createElement(AccordionBody, { active: collapseElementOpen === "2" }, "Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.")), /* @__PURE__ */ e.createElement(AccordionItem, null, /* @__PURE__ */ e.createElement(AccordionHeader, { active: collapseElementOpen === "3", onToggle: () => setCollapseElement(collapseElementOpen !== "3" ? "3" : "") }, "Elemento Accordion #3"), /* @__PURE__ */ e.createElement(AccordionBody, { active: collapseElementOpen === "3" }, "Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.")));
};
const IconaSinistra = {
  render: () => /* @__PURE__ */ e.createElement(IconaSinistraWithHooks, null)
};
GruppiDiElementiRichiudibili.parameters = {
  ...GruppiDiElementiRichiudibili.parameters,
  docs: {
    ...(_a = GruppiDiElementiRichiudibili.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <GruppiDiElementiRichiudibiliWithHooks></GruppiDiElementiRichiudibiliWithHooks>\n}",
      ...(_c = (_b = GruppiDiElementiRichiudibili.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
_Accordion.parameters = {
  ..._Accordion.parameters,
  docs: {
    ...(_d = _Accordion.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => <_AccordionWithHooks />\n}",
      ...(_f = (_e = _Accordion.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
AccordionAnnidati.parameters = {
  ...AccordionAnnidati.parameters,
  docs: {
    ...(_g = AccordionAnnidati.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => <AccordionAnnidatiWithHooks></AccordionAnnidatiWithHooks>\n}",
      ...(_i = (_h = AccordionAnnidati.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
HeaderAttivi.parameters = {
  ...HeaderAttivi.parameters,
  docs: {
    ...(_j = HeaderAttivi.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  render: () => <HeaderAttiviWithHooks></HeaderAttiviWithHooks>\n}",
      ...(_l = (_k = HeaderAttivi.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
HeaderHover.parameters = {
  ...HeaderHover.parameters,
  docs: {
    ...(_m = HeaderHover.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  render: () => <HeaderHoverWithHooks />\n}",
      ...(_o = (_n = HeaderHover.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
IconaSinistra.parameters = {
  ...IconaSinistra.parameters,
  docs: {
    ...(_p = IconaSinistra.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  render: () => <IconaSinistraWithHooks />\n}",
      ...(_r = (_q = IconaSinistra.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
const __namedExportsOrder = ["GruppiDiElementiRichiudibili", "_Accordion", "AccordionAnnidati", "HeaderAttivi", "HeaderHover", "IconaSinistra"];
const AccordionStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AccordionAnnidati,
  GruppiDiElementiRichiudibili,
  HeaderAttivi,
  HeaderHover,
  IconaSinistra,
  _Accordion,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  AccordionStories as A,
  GruppiDiElementiRichiudibili as G,
  HeaderAttivi as H,
  IconaSinistra as I,
  _Accordion as _,
  AccordionAnnidati as a,
  HeaderHover as b,
  AccordionItem as c,
  AccordionHeader as d,
  AccordionBody as e
};
