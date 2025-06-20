import { e } from "./index-CoR6MlO7.js";
const ResponsiveImage = ({
  alt,
  testId,
  proportioned = false,
  children,
  ...attributes
}) => {
  if (children) {
    if (proportioned) {
      return /* @__PURE__ */ e.createElement("div", { className: "img-responsive-wrapper" }, /* @__PURE__ */ e.createElement("div", { className: "img-responsive" }, /* @__PURE__ */ e.createElement("figure", { className: "img-wrapper" }, /* @__PURE__ */ e.createElement("img", { ...attributes, alt, className: "figure-img img-fluid rounded" }), children)));
    } else {
      return /* @__PURE__ */ e.createElement("figure", { className: "figure img-full w-100 img-responsive-wrapper" }, /* @__PURE__ */ e.createElement("img", { ...attributes, alt, className: "figure-img img-fluid rounded" }), children);
    }
  } else {
    return /* @__PURE__ */ e.createElement("div", { className: "img-responsive-wrapper", "data-testid": testId }, /* @__PURE__ */ e.createElement("div", { className: "img-responsive" }, /* @__PURE__ */ e.createElement("div", { className: "img-wrapper" }, /* @__PURE__ */ e.createElement("img", { ...attributes, alt }))));
  }
};
ResponsiveImage.__docgenInfo = { "description": "", "methods": [], "displayName": "ResponsiveImage", "props": { "alt": { "required": true, "tsType": { "name": "string" }, "description": "Un testo alternativo per descrivere l'immagine mostrata" }, "src": { "required": true, "tsType": { "name": "string" }, "description": "L'URI dell'immagine da mostrare" }, "title": { "required": false, "tsType": { "name": "string" }, "description": "Il titolo dell'immagine" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" }, "proportioned": { "required": false, "tsType": { "name": "boolean" }, "description": "Indica se l'immagine deve essere considerata proporzionata", "defaultValue": { "value": "false", "computed": false } } }, "composes": ["HTMLAttributes"] };
export {
  ResponsiveImage as R
};
