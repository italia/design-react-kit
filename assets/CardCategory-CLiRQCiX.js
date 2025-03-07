import { e } from "./index-BehpJNG5.js";
import { c as classNames } from "./index-D3ELxcOV.js";
import { I as Icon } from "./Icon-DyWUmh-K.js";
const CardCategory = ({
  iconName,
  iconTitle,
  date,
  href,
  onClick,
  testId,
  children,
  textDescription,
  dateDescription,
  ...rest
}) => {
  const classes = classNames({
    "category-top": date || " ",
    "categoryicon-top": iconName
  });
  const categoryLink = !iconName && /* @__PURE__ */ e.createElement(e.Fragment, null, textDescription && /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, textDescription), /* @__PURE__ */ e.createElement("a", { href, className: "category", onClick }, children));
  const categoryDate = date && /* @__PURE__ */ e.createElement("span", { className: "data" }, date);
  const categoryText = iconName && /* @__PURE__ */ e.createElement("span", { className: "text" }, children);
  const categoryIcon = iconName && /* @__PURE__ */ e.createElement(Icon, { icon: iconName, title: iconTitle });
  return /* @__PURE__ */ e.createElement("div", { className: classes, ...rest, "data-testid": testId }, categoryLink, categoryIcon, categoryText && textDescription && /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, textDescription), categoryText, dateDescription && /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, dateDescription), categoryDate);
};
CardCategory.__docgenInfo = { "description": "", "methods": [], "displayName": "CardCategory", "props": { "iconName": { "required": false, "tsType": { "name": "string" }, "description": "Mostra un'icona nella Card. Passare il nome dell'icona per utilizzarlo." }, "date": { "required": false, "tsType": { "name": "string" }, "description": "Mostra la data nella Card. Passare una data già formattata come stringa." }, "href": { "required": false, "tsType": { "name": "string" }, "description": "Se usato come link, passare l'URL target." }, "dateDescription": { "required": false, "tsType": { "name": "string" }, "description": "Descrizione della data (es. 'Data evento')" }, "textDescription": { "required": false, "tsType": { "name": "string" }, "description": "Descrizione del testo (es. 'Titolo evento')" }, "iconTitle": { "required": false, "tsType": { "name": "string" }, "description": "Titolo dell' icona" }, "onClick": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "(event: MouseEvent<HTMLAnchorElement>) => void", "signature": { "arguments": [{ "type": { "name": "MouseEvent", "elements": [{ "name": "HTMLAnchorElement" }], "raw": "MouseEvent<HTMLAnchorElement>" }, "name": "event" }], "return": { "name": "void" } } }, "description": "Da utilizzare al posto di url quando la gestione del click è in JS" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
export {
  CardCategory as C
};
