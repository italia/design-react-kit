import { r as reactExports, e } from "./iframe-DGcxMoyJ.js";
import { c as classNames } from "./index-yYkzrc3Z.js";
import { N as NavbarToggler } from "./NavbarToggler-p3y6rwWV.js";
import { u as useHeaderContext, N as NAVBAR, S as SLIM } from "./HeaderContext-40FfGo5C.js";
const BUTTON = "button";
const HeaderToggler = ({ className, tag, type, isOpen = false, testId, ...attributes }) => {
  const HeaderType = useHeaderContext();
  const defaultTag = HeaderType === SLIM ? "a" : BUTTON;
  const defaultType = HeaderType === SLIM ? void 0 : BUTTON;
  const classes = classNames(
    {
      "it-opener d-lg-none": HeaderType === SLIM,
      "custom-navbar-toggler": HeaderType === NAVBAR
    },
    className
  );
  const expanded = isOpen ? "true" : "false";
  reactExports.useEffect(() => {
    document.querySelectorAll(".container-fluid").forEach((element) => {
      element.classList.remove("container-fluid");
    });
  });
  return /* @__PURE__ */ e.createElement(
    NavbarToggler,
    {
      className: classes,
      ...attributes,
      tag: tag || defaultTag,
      type: type || defaultType,
      "data-testid": testId,
      "aria-expanded": expanded
    }
  );
};
HeaderToggler.__docgenInfo = { "description": "", "methods": [], "displayName": "HeaderToggler", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": 'Tipo di elemento DOM da utilizzare: di default "a" per Header Slim, "button" per altri tipi di Header.\nSe fornito questo sovrascriverà il valore di default.' }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente HeaderToggler" }, "type": { "required": false, "tsType": { "name": "union", "raw": "'button' | 'submit' | 'reset'", "elements": [{ "name": "literal", "value": "'button'" }, { "name": "literal", "value": "'submit'" }, { "name": "literal", "value": "'reset'" }] }, "description": `Indica l'attributo "type" sull'elemento DOM. Di default '' per Header Slim, "button" per altri tipi di Header.
Se fornito questo sovrascriverà il valore di default.` }, "isOpen": { "required": false, "tsType": { "name": "boolean" }, "description": "", "defaultValue": { "value": "false", "computed": false } }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["ButtonHTMLAttributes"] };
export {
  HeaderToggler as H
};
