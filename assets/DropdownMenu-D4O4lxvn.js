import { R as React } from "./index-CQCy530F.js";
import { c as classNames } from "./index-CpyNLP69.js";
const DropdownMenu = ({ className, testId, children, ...attributes }) => {
  const classes = classNames(className, {
    "dropdown-menu": true
  });
  return /* @__PURE__ */ React.createElement("div", { className: classes, "data-testid": testId, ...attributes }, children);
};
DropdownMenu.__docgenInfo = { "description": "", "methods": [], "displayName": "DropdownMenu", "props": { "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Button" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
export {
  DropdownMenu as D
};
