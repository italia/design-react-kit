import { R as React } from "./index-CQCy530F.js";
import { c as classNames } from "./index-CpyNLP69.js";
import { I as Icon } from "./Icon-io8Ds3f9.js";
const HeaderSearch = ({
  className,
  label,
  href,
  iconName = "it-search",
  testId,
  ...attributes
}) => {
  const classes = classNames("it-search-wrapper", className);
  return /* @__PURE__ */ React.createElement("div", { className: classes, ...attributes, "data-testid": testId }, label && /* @__PURE__ */ React.createElement("span", { className: "d-none d-md-block" }, label), /* @__PURE__ */ React.createElement("a", { className: "search-link rounded-icon", "aria-label": label, href }, /* @__PURE__ */ React.createElement(Icon, { icon: iconName })));
};
HeaderSearch.__docgenInfo = { "description": "", "methods": [], "displayName": "HeaderSearch", "props": { "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente HeaderSearch" }, "label": { "required": true, "tsType": { "name": "string" }, "description": "Etichetta di testo da applicare all'elemento. In caso di stringa vuota non verrà mostrato alcun testo" }, "iconName": { "required": false, "tsType": { "name": "string" }, "description": "Nome dell'icona da utilizzare", "defaultValue": { "value": "'it-search'", "computed": false } }, "href": { "required": false, "tsType": { "name": "string" }, "description": "Indirizzo di indirizzamento al click dell'icona" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const HeaderSocialsZone = ({
  className,
  children,
  label,
  testId,
  ...attributes
}) => {
  const classes = classNames("it-socials d-none d-md-flex", className);
  return /* @__PURE__ */ React.createElement("div", { className: classes, ...attributes, "data-testid": testId }, label && /* @__PURE__ */ React.createElement("span", null, label), children);
};
HeaderSocialsZone.__docgenInfo = { "description": "", "methods": [], "displayName": "HeaderSocialsZone", "props": { "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi addizionali per il componente HeaderSocialsZone, verrà applicato all'elemento wrapper più esterno." }, "label": { "required": false, "tsType": { "name": "string" }, "description": "Etichetta utilizzata per presentare i social presenti. In caso di stringa vuota non verrà mostrata alcuna etichetta" }, "children": { "required": false, "tsType": { "name": "ReactChild" }, "description": "Utilizzato per elencare i social da mostrare" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
export {
  HeaderSocialsZone as H,
  HeaderSearch as a
};
