import { e } from "./index-BehpJNG5.js";
import { C as Col, R as Row } from "./Col-DlU8lCnt.js";
import { c as classNames } from "./index-D3ELxcOV.js";
import { D as Dropdown, a as DropdownToggle } from "./DropdownToggle-0D-cclHj.js";
import { D as DropdownMenu } from "./DropdownMenu-DV6KduIR.js";
const MegamenuHighlightColumn = ({ description, className, children, ...attributes }) => {
  const classes = classNames(className, "it-vertical", {
    "it-description": description
  });
  return /* @__PURE__ */ e.createElement(Col, { ...attributes }, /* @__PURE__ */ e.createElement(Row, { className: "max-height-col" }, /* @__PURE__ */ e.createElement(Col, { className: classes }, description ? /* @__PURE__ */ e.createElement("div", { className: "description-content" }, children) : /* @__PURE__ */ e.createElement(e.Fragment, null, children))));
};
MegamenuHighlightColumn.__docgenInfo = { "description": "", "methods": [], "displayName": "MegamenuHighlightColumn", "props": { "description": { "required": false, "tsType": { "name": "boolean" }, "description": "Quanto abilitato gestisce il contenuto della colonna come una sezione che può contentere immagini, testo, ect." }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Megamenu Highlight Column" } }, "composes": ["ColProps"] };
const MegamenuItem = ({ itemName, className, children, ...attributes }) => {
  const classes = classNames(className, "megamenu");
  const [dropdownOpen, setDropdownOpen] = e.useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggleClasses = classNames("px-lg-2", "px-xl-3", dropdownOpen ? "show" : "");
  return /* @__PURE__ */ e.createElement(Dropdown, { className: classes, inNavbar: true, ...attributes, isOpen: dropdownOpen, toggle }, /* @__PURE__ */ e.createElement(DropdownToggle, { inNavbar: true, caret: true, className: toggleClasses }, /* @__PURE__ */ e.createElement("span", null, itemName)), /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement("div", { className: "megamenu pb-5 pt-3 py-lg-0" }, children)));
};
MegamenuItem.__docgenInfo = { "description": "", "methods": [], "displayName": "MegamenuItem", "props": { "itemName": { "required": true, "tsType": { "name": "string" }, "description": "Etichetta del megamenu visibile all'interno della barra di navigazione" }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Dropdown" } }, "composes": ["HTMLAttributes"] };
export {
  MegamenuItem as M,
  MegamenuHighlightColumn as a
};
