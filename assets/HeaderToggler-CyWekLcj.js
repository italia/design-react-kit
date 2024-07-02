import { r as reactExports, R as React } from "./index-C-_iGYWo.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { N as NavbarToggler } from "./NavbarToggler-CffHox6a.js";
import { u as useHeaderContext, S as SLIM, N as NAVBAR } from "./HeaderContent-Djr8e9Go.js";
const BUTTON = "button";
const HeaderToggler = ({ className, tag, type, testId, ...attributes }) => {
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
  reactExports.useEffect(() => {
    document.querySelectorAll(".container-fluid").forEach((element) => {
      element.classList.remove("container-fluid");
    });
  });
  return /* @__PURE__ */ React.createElement(
    NavbarToggler,
    {
      className: classes,
      ...attributes,
      tag: tag || defaultTag,
      type: type || defaultType,
      href: "#",
      "data-testid": testId
    }
  );
};
HeaderToggler.__docgenInfo = { "description": "", "methods": [], "displayName": "HeaderToggler", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": 'Tipo di elemento DOM da utilizzare: di default "a" per Header Slim, "button" per altri tipi di Header.\nSe fornito questo sovrascriverà il valore di default.' }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente HeaderToggler" }, "type": { "required": false, "tsType": { "name": "union", "raw": "'button' | 'submit' | 'reset'", "elements": [{ "name": "literal", "value": "'button'" }, { "name": "literal", "value": "'submit'" }, { "name": "literal", "value": "'reset'" }] }, "description": `Indica l'attributo "type" sull'elemento DOM. Di default '' per Header Slim, "button" per altri tipi di Header.
Se fornito questo sovrascriverà il valore di default.` }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["ButtonHTMLAttributes"] };
export {
  HeaderToggler as H
};
