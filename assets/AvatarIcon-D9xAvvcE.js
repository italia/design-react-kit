import { c as classNames } from "./index-D3ELxcOV.js";
import { e } from "./index-BehpJNG5.js";
const AvatarIcon = ({
  className,
  tag = "div",
  size = "md",
  href,
  color,
  innerRef,
  testId,
  children,
  ...attributes
}) => {
  const Tag = tag;
  const typeClass = classNames("avatar", {
    [`size-${size}`]: size,
    [`avatar-${color}`]: color,
    className
  });
  if (href) {
    return /* @__PURE__ */ e.createElement(
      "a",
      {
        href,
        ...attributes,
        className: typeClass,
        ref: innerRef,
        "data-testid": testId
      },
      children
    );
  }
  return /* @__PURE__ */ e.createElement(Tag, { ...attributes, className: typeClass, "data-testid": testId }, children);
};
AvatarIcon.__docgenInfo = { "description": "", "methods": [], "displayName": "AvatarIcon", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati, come ad esempio\nun link gestito da handler onClick.", "defaultValue": { "value": "'div'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente AvatarIcon" }, "color": { "required": false, "tsType": { "name": "union", "raw": "'primary' | 'secondary' | 'green' | 'orange' | 'red' | string", "elements": [{ "name": "literal", "value": "'primary'" }, { "name": "literal", "value": "'secondary'" }, { "name": "literal", "value": "'green'" }, { "name": "literal", "value": "'orange'" }, { "name": "literal", "value": "'red'" }, { "name": "string" }] }, "description": "Le varianti di colore definite in Bootstrap Italia" }, "size": { "required": false, "tsType": { "name": "union", "raw": "'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'", "elements": [{ "name": "literal", "value": "'xs'" }, { "name": "literal", "value": "'sm'" }, { "name": "literal", "value": "'md'" }, { "name": "literal", "value": "'lg'" }, { "name": "literal", "value": "'xl'" }, { "name": "literal", "value": "'xxl'" }] }, "description": "Le dimensioni dell'icona definite in Bootstrap Italia", "defaultValue": { "value": "'md'", "computed": false } }, "href": { "required": false, "tsType": { "name": "string" }, "description": "Quando definito rende l'icona un link cliccabile. Nota: se definito ignora la prop Tag." }, "innerRef": { "required": false, "tsType": { "name": "Ref", "elements": [{ "name": "union", "raw": "HTMLElement | HTMLAnchorElement", "elements": [{ "name": "HTMLElement" }, { "name": "HTMLAnchorElement" }] }], "raw": "Ref<HTMLElement | HTMLAnchorElement>" }, "description": "Da utilizzare per impostare un riferimento all'elemento DOM" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
export {
  AvatarIcon as A
};
