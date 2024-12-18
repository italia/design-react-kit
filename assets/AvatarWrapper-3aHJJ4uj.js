import { e } from "./index-BehpJNG5.js";
import { c as classNames } from "./index-D3ELxcOV.js";
const AvatarContainer = ({ className, tag = "div", testId, ...attributes }) => {
  const Tag = tag;
  const wrapperClasses = classNames(
    "d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap",
    className
  );
  return /* @__PURE__ */ e.createElement(Tag, { ...attributes, className: wrapperClasses, "data-testid": testId });
};
AvatarContainer.__docgenInfo = { "description": "", "methods": [], "displayName": "AvatarContainer", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'div'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente AvatarContainer" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const AvatarWrapper = ({ className, tag = "div", extra, testId, ...attributes }) => {
  const Tag = tag;
  const wrapperClass = classNames("avatar-wrapper", className, {
    [`avatar-extra-${extra}`]: extra
  });
  return /* @__PURE__ */ e.createElement(Tag, { ...attributes, className: wrapperClass, "data-testid": testId });
};
AvatarWrapper.__docgenInfo = { "description": "", "methods": [], "displayName": "AvatarWrapper", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'div'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente AvatarStatus" }, "extra": { "required": false, "tsType": { "name": "union", "raw": "'text' | string", "elements": [{ "name": "literal", "value": "'text'" }, { "name": "string" }] }, "description": "Utilizzare questo attributo qualora si volesse utilizzare un componente AvatarExtraText all'interno dell'Avatar." }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
export {
  AvatarContainer as A,
  AvatarWrapper as a
};
