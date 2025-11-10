import { e } from "./iframe-DGcxMoyJ.js";
import { c as classNames } from "./index-yYkzrc3Z.js";
import { N as NAVBAR, C as CENTER, H as HeaderContext, u as useHeaderContext, S as SLIM } from "./HeaderContext-40FfGo5C.js";
import { C as Container } from "./Container-C-M9HmGe.js";
import { R as Row, C as Col } from "./Col-Kbz4ORpX.js";
import { N as Navbar } from "./Navbar-Bg2rX1rm.js";
const Header = ({ className, small = false, theme = "", type, testId, ...attributes }) => {
  const classes = classNames(className, {
    [`it-header-${type}-wrapper`]: type,
    "it-small-header": type === CENTER && small,
    [`theme-${theme}`]: type !== NAVBAR && theme,
    "theme-dark-mobile": type === NAVBAR && theme === "dark",
    "theme-light-desk": type === NAVBAR && theme === "light"
  });
  return /* @__PURE__ */ e.createElement(HeaderContext.Provider, { value: { type } }, /* @__PURE__ */ e.createElement("div", { className: classes, ...attributes, "data-testid": testId }));
};
Header.__docgenInfo = { "description": "", "methods": [], "displayName": "Header", "props": { "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Header" }, "type": { "required": true, "tsType": { "name": "union", "raw": "'slim' | 'center' | 'navbar'", "elements": [{ "name": "literal", "value": "'slim'" }, { "name": "literal", "value": "'center'" }, { "name": "literal", "value": "'navbar'" }] }, "description": "Tipo di componente Header: può essere solamente uno di questi tre tipi" }, "small": { "required": false, "tsType": { "name": "boolean" }, "description": 'Riduce la grandezza del componente Header. Funziona solamente con Header "center".', "defaultValue": { "value": "false", "computed": false } }, "theme": { "required": false, "tsType": { "name": "union", "raw": "'light' | 'dark' | ''", "elements": [{ "name": "literal", "value": "'light'" }, { "name": "literal", "value": "'dark'" }, { "name": "literal", "value": "''" }] }, "description": `Imposta il tema per il componente Header. Per gli Header di tipo "slim" o "center"
 il valore di default è "dark". Per l'Header di tipo "nav" il tema di default è "light"
 in mobile, mentre "dark" in versione desktop.`, "defaultValue": { "value": "''", "computed": false } }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const HeaderContent = ({ className, megamenu, testId, ...attributes }) => {
  const type = useHeaderContext();
  const classes = classNames(className, {
    "it-header-slim-wrapper-content": type === SLIM,
    "it-header-center-content-wrapper": type === CENTER,
    navbar: type === NAVBAR,
    "has-megamenu": megamenu
  });
  const Content = type === NAVBAR ? /* @__PURE__ */ e.createElement(Navbar, { className: classes, ...attributes, "data-testid": testId }) : /* @__PURE__ */ e.createElement("div", { className: classes, ...attributes, "data-testid": testId });
  return /* @__PURE__ */ e.createElement(Container, { className: "container-xxl", fluid: true }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, null, Content)));
};
HeaderContent.__docgenInfo = { "description": "", "methods": [], "displayName": "HeaderContent", "props": { "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente HeaderContent" }, "megamenu": { "required": false, "tsType": { "name": "boolean" }, "description": "Da utilizzare per indicare che all'interno dell'Header verrà utilizzato un Megamenu" }, "expand": { "required": false, "tsType": { "name": "union", "raw": "boolean | 'sm' | 'md' | 'lg' | 'xl'", "elements": [{ "name": "boolean" }, { "name": "literal", "value": "'sm'" }, { "name": "literal", "value": "'md'" }, { "name": "literal", "value": "'lg'" }, { "name": "literal", "value": "'xl'" }] }, "description": "Parametro per il controllo responsive del componente secondo Bootstrap Italia." }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
export {
  Header as H,
  HeaderContent as a
};
