import { R as React } from "./index-CQCy530F.js";
import { C as Col, R as Row } from "./Col-DTtAS2uD.js";
import { c as classNames } from "./index-CpyNLP69.js";
import { D as Dropdown, a as DropdownToggle } from "./DropdownToggle-W0G3cUar.js";
import { D as DropdownMenu } from "./DropdownMenu-D4O4lxvn.js";
const MegamenuHighlightColumn = ({ description, className, children, ...attributes }) => {
  const classes = classNames(className, "it-vertical", {
    "it-description": description
  });
  return /* @__PURE__ */ React.createElement(Col, { ...attributes }, /* @__PURE__ */ React.createElement(Row, { className: "max-height-col" }, /* @__PURE__ */ React.createElement(Col, { className: classes }, description ? /* @__PURE__ */ React.createElement("div", { className: "description-content" }, children) : /* @__PURE__ */ React.createElement(React.Fragment, null, children))));
};
MegamenuHighlightColumn.__docgenInfo = { "description": "", "methods": [], "displayName": "MegamenuHighlightColumn", "props": { "description": { "required": false, "tsType": { "name": "boolean" }, "description": "Quanto abilitato gestisce il contenuto della colonna come una sezione che può contentere immagini, testo, ect." }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Megamenu Highlight Column" } }, "composes": ["ColProps"] };
const MegamenuItem = ({ itemName, className, children, ...attributes }) => {
  const classes = classNames(className, "megamenu");
  const toggleClasses = classNames("px-lg-2", "px-xl-3");
  return /* @__PURE__ */ React.createElement(Dropdown, { tag: "li", className: classes, ...attributes, inNavbar: true }, /* @__PURE__ */ React.createElement(DropdownToggle, { caret: true, className: toggleClasses, inNavbar: true }, /* @__PURE__ */ React.createElement("span", null, itemName)), /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement("div", { className: "megamenu pb-5 pt-3 py-lg-0" }, children)));
};
MegamenuItem.__docgenInfo = { "description": "", "methods": [], "displayName": "MegamenuItem", "props": { "itemName": { "required": true, "tsType": { "name": "string" }, "description": "Etichetta del megamenu visibile all'interno della barra di navigazione" }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Dropdown" } }, "composes": ["HTMLAttributes"] };
export {
  MegamenuItem as M,
  MegamenuHighlightColumn as a
};
