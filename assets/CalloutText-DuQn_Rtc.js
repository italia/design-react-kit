import { e } from "./index-BehpJNG5.js";
import { c as classNames } from "./index-D3ELxcOV.js";
const Callout = ({
  children,
  color = "",
  highlight = false,
  className,
  detailed,
  tag = "div",
  testId,
  ...attributes
}) => {
  const Tag = tag;
  const classes = classNames(className, color, "callout", {
    "callout-highlight": highlight,
    "callout-more": detailed
  });
  return /* @__PURE__ */ e.createElement(Tag, { className: classes, ...attributes, "data-testid": testId }, !highlight && !detailed ? /* @__PURE__ */ e.createElement("div", { className: "callout-inner" }, children) : children);
};
Callout.__docgenInfo = { "description": "", "methods": [], "displayName": "Callout", "props": { "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive per il componente" }, "color": { "required": false, "tsType": { "name": "union", "raw": "'success' | 'warning' | 'danger' | 'note' | 'important' | string", "elements": [{ "name": "literal", "value": "'success'" }, { "name": "literal", "value": "'warning'" }, { "name": "literal", "value": "'danger'" }, { "name": "literal", "value": "'note'" }, { "name": "literal", "value": "'important'" }, { "name": "string" }] }, "description": "Permette di dichiarare il colore del bordo e del titolo", "defaultValue": { "value": "''", "computed": false } }, "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": 'Permette personalizzare il tag utilizzato per il Callout (diverso da "div"). Accetta sia tag HTML che componenti React.', "defaultValue": { "value": "'div'", "computed": false } }, "highlight": { "required": false, "tsType": { "name": "boolean" }, "description": "Abilita il Callout di tipo Highlight", "defaultValue": { "value": "false", "computed": false } }, "detailed": { "required": false, "tsType": { "name": "boolean" }, "description": "Abilita il Callout di tipo Approfondimento" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const CalloutText = ({
  bigText = false,
  children,
  className,
  tag = "p",
  testId,
  ...attributes
}) => {
  const Tag = tag;
  const classes = classNames(className, {
    "callout-big-text": bigText
  });
  return /* @__PURE__ */ e.createElement(Tag, { className: classes, ...attributes, "data-testid": testId }, children);
};
CalloutText.__docgenInfo = { "description": "", "methods": [], "displayName": "CalloutText", "props": { "bigText": { "required": false, "tsType": { "name": "boolean" }, "description": "Aumenta la dimensione del testo nel paragrafo contenuto", "defaultValue": { "value": "false", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive per il componente" }, "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": 'Permette personalizzare il tag utilizzato per il contenitore del titolo (diverso da "div"). Accetta sia tag HTML che componenti React.', "defaultValue": { "value": "'p'", "computed": false } }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
export {
  Callout as C,
  CalloutText as a
};
