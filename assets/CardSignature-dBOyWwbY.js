import { R as React } from "./index-C-_iGYWo.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { I as Icon } from "./Icon-DRwA3K3x.js";
const CardReadMore = ({
  className,
  text,
  iconName = "it-arrow-right",
  tag = "a",
  href,
  testId,
  ...attributes
}) => {
  const Tag = tag;
  const classes = classNames(className, "read-more");
  return /* @__PURE__ */ React.createElement(Tag, { className: classes, href, ...attributes, "data-testid": testId }, /* @__PURE__ */ React.createElement("span", { className: "text" }, text), iconName && /* @__PURE__ */ React.createElement(Icon, { icon: iconName }));
};
CardReadMore.__docgenInfo = { "description": "", "methods": [], "displayName": "CardReadMore", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'a'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente CardReadMore" }, "text": { "required": true, "tsType": { "name": "string" }, "description": "Il contenuto in testo da mostrare" }, "href": { "required": false, "tsType": { "name": "string" }, "description": "Passare l'URL target." }, "iconName": { "required": false, "tsType": { "name": "string" }, "description": `Mostra un'icona nella Card per l'azione "Leggi di più". Passare il nome dell'icona per utilizzarlo.`, "defaultValue": { "value": "'it-arrow-right'", "computed": false } }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const CardSignature = ({ className, tag = "span", testId, ...attributes }) => {
  const Tag = tag;
  const classes = classNames(className, "card-signature");
  return /* @__PURE__ */ React.createElement(Tag, { className: classes, ...attributes, "data-testid": testId });
};
CardSignature.__docgenInfo = { "description": "", "methods": [], "displayName": "CardSignature", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'span'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente CardSignature" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
export {
  CardSignature as C,
  CardReadMore as a
};
