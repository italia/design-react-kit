import { c as classNames } from "./index-CuPZ171k.js";
import { e } from "./iframe-BMr-kR9u.js";
import { I as Icon } from "./Icon-CB2E_ttD.js";
const Dimmer = ({
  icon,
  color,
  className,
  show = true,
  wrapperClassName,
  testId,
  ...attributes
}) => {
  const { children, ...rest } = attributes, classes = classNames("dimmer fade", { show }, wrapperClassName === true ? className : wrapperClassName, {
    [`dimmer-${color}`]: color
  }), innerClasses = classNames("dimmer-inner", className), dimmerIcon = icon && /* @__PURE__ */ e.createElement("div", { className: "dimmer-icon" }, /* @__PURE__ */ e.createElement(Icon, { icon }));
  return /* @__PURE__ */ e.createElement("div", { className: classes, ...rest, "data-testid": testId, "aria-hidden": show ? void 0 : true }, /* @__PURE__ */ e.createElement("div", { className: innerClasses, ...rest }, dimmerIcon, children));
};
Dimmer.__docgenInfo = { "description": "", "methods": [], "displayName": "Dimmer", "props": { "icon": { "required": false, "tsType": { "name": "string" }, "description": "Il nome dell'icona da mostrare" }, "color": { "required": false, "tsType": { "name": "union", "raw": "'primary' | 'secondary'", "elements": [{ "name": "literal", "value": "'primary'" }, { "name": "literal", "value": "'secondary'" }] }, "description": "Le varianti di colore definite in Bootstrap Italia" }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Dimmer" }, "show": { "required": false, "tsType": { "name": "boolean" }, "description": "Mostra il wrapper", "defaultValue": { "value": "true", "computed": false } }, "wrapperClassName": { "required": false, "tsType": { "name": "union", "raw": "string | true", "elements": [{ "name": "string" }, { "name": "literal", "value": "true" }] }, "description": "Classi aggiuntive da usare per il componente contenitore del Dimmer\nPer replicare il comportamento precedente, in cui `className` veniva applicato anche al wrapper,\npassare `true`." }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const DimmerButtons = ({
  className,
  single = false,
  dark = true,
  testId,
  ...attributes
}) => {
  const { children, ...rest } = attributes;
  const classes = classNames("dimmer-buttons", className, {
    "bg-dark": dark,
    "single-button": single
  });
  return /* @__PURE__ */ e.createElement("div", { className: classes, ...rest, "data-testid": testId }, children);
};
DimmerButtons.__docgenInfo = { "description": "", "methods": [], "displayName": "DimmerButtons", "props": { "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Dimmer" }, "single": { "required": false, "tsType": { "name": "boolean" }, "description": "Da utilizzare in presenza di un singolo bottone: quando abilitato ne centra il contenuto.", "defaultValue": { "value": "false", "computed": false } }, "dark": { "required": false, "tsType": { "name": "boolean" }, "description": "Da utilizzare con `false` per abilitare il precedente comportamento senza sfondo scuro.\n@deprecated", "defaultValue": { "value": "true", "computed": false } }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
export {
  Dimmer as D,
  DimmerButtons as a
};
