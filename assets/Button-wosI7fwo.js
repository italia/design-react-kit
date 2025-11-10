import { e } from "./iframe-DGcxMoyJ.js";
import { c as classNames } from "./index-yYkzrc3Z.js";
import { B as Button$1 } from "./Button-CHYK7K12.js";
const Button = ({
  tag = "button",
  icon = false,
  color = "",
  className,
  testId,
  ...attributes
}) => {
  const classes = classNames(className, {
    "btn-icon": icon
  });
  const ariaAttributes = {
    ...attributes.disabled && { "aria-disabled": true }
  };
  const baseProps = { color, tag };
  return /* @__PURE__ */ e.createElement(Button$1, { className: classes, "data-testid": testId, ...baseProps, ...attributes, ...ariaAttributes });
};
Button.__docgenInfo = { "description": "", "methods": [], "displayName": "Button", "props": { "block": { "required": false, "tsType": { "name": "boolean" }, "description": "Quando abilitato, estende il componente Button fino a prendere tutta la larghezza disponibile" }, "outline": { "required": false, "tsType": { "name": "boolean" }, "description": "Utilizzarlo disabilitare il colore di sfondo, ed applicarlo invece al bordo." }, "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di componenti personalizzati", "defaultValue": { "value": "'button'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Button" }, "cssModule": { "required": false, "tsType": { "name": "CSSModule" }, "description": "Oggetto contenente la nuova mappatura per le classi CSS." }, "innerRef": { "required": false, "tsType": { "name": "Ref", "elements": [{ "name": "HTMLButtonElement" }], "raw": "Ref<HTMLButtonElement>" }, "description": "" }, "icon": { "required": false, "tsType": { "name": "boolean" }, "description": "Da utilizzare si usa una icona nel contenuto del Button", "defaultValue": { "value": "false", "computed": false } }, "size": { "required": false, "tsType": { "name": "union", "raw": "'lg' | 'sm' | 'xs'", "elements": [{ "name": "literal", "value": "'lg'" }, { "name": "literal", "value": "'sm'" }, { "name": "literal", "value": "'xs'" }] }, "description": "Da utilizzare per le varianti di dimensione del componente Button" }, "close": { "required": false, "tsType": { "name": "boolean" }, "description": "Da utilizzare per i bottoni di chiusura all'interno di altri componenti (i.e. Chips, Modali, etc...)" }, "active": { "required": false, "tsType": { "name": "boolean" }, "description": "" }, "href": { "required": false, "tsType": { "name": "string" }, "description": "" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" }, "color": { "defaultValue": { "value": "''", "computed": false }, "required": false } }, "composes": ["ButtonHTMLAttributes"] };
export {
  Button as B
};
