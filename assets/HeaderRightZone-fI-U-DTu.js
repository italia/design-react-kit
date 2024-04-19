import { R as React } from "./index-CQCy530F.js";
import { c as classNames } from "./index-CpyNLP69.js";
import { N as NavbarBrand } from "./NavbarBrand-Cy1-5-LH.js";
import { u as useHeaderContext, C as CENTER, S as SLIM } from "./HeaderContent-DeePoa8e.js";
import { I as Icon } from "./Icon-Dropx6Zw.js";
const HeaderBrand = ({
  className,
  href,
  iconName,
  iconAlt,
  children,
  tag = "a",
  responsive = false,
  testId,
  ...attributes
}) => {
  const type = useHeaderContext();
  const defaultAttributes = { tag };
  if (type !== CENTER) {
    const classes = classNames("d-lg-block", className, {
      "d-none": !responsive
    });
    return /* @__PURE__ */ React.createElement(NavbarBrand, { className: classes, href, "data-testid": testId, ...attributes, ...defaultAttributes }, children);
  }
  return /* @__PURE__ */ React.createElement("div", { className: "it-brand-wrapper", "data-testid": testId }, /* @__PURE__ */ React.createElement("a", { href }, iconName && /* @__PURE__ */ React.createElement(Icon, { icon: iconName, title: iconAlt }), /* @__PURE__ */ React.createElement("div", { className: "it-brand-text" }, React.Children.map(children, (child, i) => {
    if (typeof child !== "object" || child == null || !("props" in child)) {
      return child;
    }
    const className2 = classNames(
      child.props.className,
      { "d-none d-md-block": i }
      // subtext is anything but first element
    );
    const props = {
      className: className2
    };
    return React.cloneElement(child, props);
  }))));
};
HeaderBrand.__docgenInfo = { "description": "", "methods": [], "displayName": "HeaderBrand", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'a'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente HeaderBrand" }, "cssModule": { "required": false, "tsType": { "name": "CSSModule" }, "description": "Oggetto contenente la nuova mappatura per le classi CSS." }, "responsive": { "required": false, "tsType": { "name": "boolean" }, "description": 'Da usare con il componente Header Nav in versione "responsive"', "defaultValue": { "value": "false", "computed": false } }, "href": { "required": false, "tsType": { "name": "string" }, "description": "Da utilizzare per specificare URL risorsa esterna." }, "iconName": { "required": false, "tsType": { "name": "string" }, "description": "Icona da utilizzare nel componente. Utilizzata unicamente quando l'Header è di tipo Center." }, "iconAlt": { "required": false, "tsType": { "name": "string" }, "description": "Alt text da utilizzare nell'icona. Utilizzata unicamente quando l'Header è di tipo Center." }, "children": { "required": true, "tsType": { "name": "union", "raw": "ReactChild | ReactChild[]", "elements": [{ "name": "ReactChild" }, { "name": "Array", "elements": [{ "name": "ReactChild" }], "raw": "ReactChild[]" }] }, "description": "Elementi React da renderizzare al proprio interno." }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["AnchorHTMLAttributes"] };
const HeaderRightZone = ({ className, testId, ...attributes }) => {
  const type = useHeaderContext();
  const classes = classNames(className, {
    // BI >= 1.3.6
    "it-header-slim-right-zone": type === SLIM,
    // BI < 1.3.6
    "header-slim-right-zone": type === SLIM,
    "it-right-zone": type !== SLIM
  });
  return /* @__PURE__ */ React.createElement("div", { className: classes, ...attributes, "data-testid": testId });
};
HeaderRightZone.__docgenInfo = { "description": "", "methods": [], "displayName": "HeaderRightZone", "props": { "className": { "required": false, "tsType": { "name": "string" }, "description": `Classi addizionali per il componente HeaderLinkZone, applicata all'element "nav" annidato` }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
export {
  HeaderBrand as H,
  HeaderRightZone as a
};
