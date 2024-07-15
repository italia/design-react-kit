import { R as React } from "./index-C-_iGYWo.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { I as Icon } from "./Icon-IJSTKVwe.js";
const CardCategory = ({ iconName, date, href, onClick, testId, children, ...rest }) => {
  const classes = classNames({
    "category-top": date || " ",
    "categoryicon-top": iconName
  });
  const categoryLink = !iconName && /* @__PURE__ */ React.createElement("a", { href, className: "category", onClick }, children);
  const categoryDate = date && /* @__PURE__ */ React.createElement("span", { className: "data" }, date);
  const categoryText = iconName && /* @__PURE__ */ React.createElement("span", { className: "text" }, children);
  const categoryIcon = iconName && /* @__PURE__ */ React.createElement(Icon, { icon: iconName });
  return /* @__PURE__ */ React.createElement("div", { className: classes, ...rest, "data-testid": testId }, categoryLink, categoryIcon, categoryText, categoryDate);
};
CardCategory.__docgenInfo = { "description": "", "methods": [], "displayName": "CardCategory", "props": { "iconName": { "required": false, "tsType": { "name": "string" }, "description": "Mostra un'icona nella Card. Passare il nome dell'icona per utilizzarlo." }, "date": { "required": false, "tsType": { "name": "string" }, "description": "Mostra la data nella Card. Passare una data già formattata come stringa." }, "href": { "required": false, "tsType": { "name": "string" }, "description": "Se usato come link, passare l'URL target." }, "onClick": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "(event: MouseEvent<HTMLAnchorElement>) => void", "signature": { "arguments": [{ "type": { "name": "MouseEvent", "elements": [{ "name": "HTMLAnchorElement" }], "raw": "MouseEvent<HTMLAnchorElement>" }, "name": "event" }], "return": { "name": "void" } } }, "description": "Da utilizzare al posto di url quando la gestione del click è in JS" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
export {
  CardCategory as C
};
