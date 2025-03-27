import { e, r as reactExports } from "./index-N7T0HPyM.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { p as pick, o as omit } from "./utils-CwYUlCuU.js";
import { T as Transition } from "./Transition-l9AVs-4D.js";
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
  // $transition-collapse
  Collapse: 350
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
  const nodeRef = reactExports.useRef(null);
  const onEntering = reactExports.useCallback(
    (isAppearing) => {
      var _a;
      if (nodeRef.current) {
        setHeight(getHeight(nodeRef.current));
        (_a = attributes.onEntering) == null ? void 0 : _a.call(attributes, nodeRef.current, isAppearing);
      }
    },
    [attributes.onEntering]
  );
  const onEntered = reactExports.useCallback(
    (isAppearing) => {
      var _a;
      setHeight(null);
      if (nodeRef.current) {
        (_a = attributes.onEntered) == null ? void 0 : _a.call(attributes, nodeRef.current, isAppearing);
      }
    },
    [attributes.onEntered]
  );
  const onExit = reactExports.useCallback(
    () => {
      var _a;
      if (nodeRef.current) {
        setHeight(getHeight(nodeRef.current));
        (_a = attributes.onExit) == null ? void 0 : _a.call(attributes, nodeRef.current);
      }
    },
    [attributes.onExit]
  );
  const onExiting = reactExports.useCallback(
    () => {
      var _a;
      if (nodeRef.current) {
        nodeRef.current.offsetHeight;
        setHeight(0);
        (_a = attributes.onExiting) == null ? void 0 : _a.call(attributes, nodeRef.current);
      }
    },
    [attributes.onExiting]
  );
  const onExited = reactExports.useCallback(
    () => {
      var _a;
      setHeight(null);
      if (nodeRef.current) {
        (_a = attributes.onExited) == null ? void 0 : _a.call(attributes, nodeRef.current);
      }
    },
    [attributes.onExited]
  );
  const Tag = tag;
  const transitionProps = pick(attributes, TransitionsKeys);
  const childProps = omit(attributes, TransitionsKeys);
  return /* @__PURE__ */ e.createElement(
    Transition,
    {
      nodeRef,
      timeout,
      in: active,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited,
      ...transitionProps
    },
    (status) => {
      const transitionClass = getTransitionClass(status);
      const classes = classNames(className, transitionClass);
      const listClasses = classNames(listClassName, "accordion-body");
      const style = height == null ? null : { height };
      return /* @__PURE__ */ e.createElement(Tag, { className: classes, ref: nodeRef, style: { ...childProps.style, ...style }, ...childProps }, /* @__PURE__ */ e.createElement("div", { className: listClasses }, children));
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
export {
  Accordion as A,
  AccordionItem as a,
  AccordionHeader as b,
  AccordionBody as c
};
