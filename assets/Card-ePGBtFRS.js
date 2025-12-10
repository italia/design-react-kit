import { e } from "./iframe-BhIAR_-T.js";
import { c as classNames } from "./index-DlmjVlZ8.js";
const Card = ({
  tag = "article",
  teaser,
  image,
  border = true,
  borderTop,
  inline,
  inlineReverse,
  inlineMini,
  rounded,
  fullHeight,
  banner,
  profile,
  shadow = null,
  testId,
  ...attributes
}) => {
  const cardClasses = classNames("it-card", attributes.className, {
    "card-teaser": teaser,
    "it-card-image": image,
    "border": border,
    "it-card-inline": inline,
    "it-card-inline-reverse": inlineReverse,
    "it-card-inline-mini": inlineMini,
    "it-card-height-full": fullHeight,
    "rounded": rounded,
    "card-teaser-wrapper": teaser,
    "shadow": shadow === "normal",
    "shadow-lg": shadow === "lg",
    "shadow-sm": shadow === "sm",
    "it-card-banner": banner,
    "it-card-profile": profile,
    "it-border-top": borderTop,
    "it-border-top-secondary": borderTop
  });
  const T = tag;
  return /* @__PURE__ */ e.createElement(
    T,
    {
      ...attributes,
      className: cardClasses,
      "data-testid": testId
    }
  );
};
Card.__docgenInfo = { "description": "", "methods": [], "displayName": "Card", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'article'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Card" }, "innerRef": { "required": false, "tsType": { "name": "Ref", "elements": [{ "name": "HTMLElement" }], "raw": "Ref<HTMLElement>" }, "description": "Da utilizzare per impostare un riferimento all'elemento DOM" }, "cssModule": { "required": false, "tsType": { "name": "CSSModule" }, "description": "Oggetto contenente la nuova mappatura per le classi CSS." }, "teaser": { "required": false, "tsType": { "name": "boolean" }, "description": "Abilita la versione teaser della Card" }, "image": { "required": false, "tsType": { "name": "boolean" }, "description": "La card contiene un'immagine" }, "banner": { "required": false, "tsType": { "name": "boolean" }, "description": "La card è di tipo banner" }, "profile": { "required": false, "tsType": { "name": "boolean" }, "description": "La card è di tipo profile" }, "inline": { "required": false, "tsType": { "name": "boolean" }, "description": "La card è inline" }, "inlineReverse": { "required": false, "tsType": { "name": "boolean" }, "description": "La card è inline-reverse" }, "inlineMini": { "required": false, "tsType": { "name": "boolean" }, "description": "La card è inline-mini" }, "rounded": { "required": false, "tsType": { "name": "boolean" }, "description": "La card è arrotondata" }, "fullHeight": { "required": false, "tsType": { "name": "boolean" }, "description": "La card è full height" }, "border": { "required": false, "tsType": { "name": "boolean" }, "description": "La card ha un bordo", "defaultValue": { "value": "true", "computed": false } }, "borderTop": { "required": false, "tsType": { "name": "boolean" }, "description": "La card ha un bordo di estremità" }, "shadow": { "required": false, "tsType": { "name": "union", "raw": "'sm' | 'lg' | 'normal' | null", "elements": [{ "name": "literal", "value": "'sm'" }, { "name": "literal", "value": "'lg'" }, { "name": "literal", "value": "'normal'" }, { "name": "null" }] }, "description": "La card ha un bordo", "defaultValue": { "value": "null", "computed": false } }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
export {
  Card as C
};
