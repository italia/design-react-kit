import { r as reactExports } from "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
const component = ({ title, titleId, ...props }) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      xmlSpace: "preserve",
      enableBackground: "new 0 0 24 24",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ reactExports.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ reactExports.createElement("path", { d: "M12 22 6.3 11.6c-1.7-3.1-.6-7 2.6-8.8s7.1-.6 8.8 2.5c.5 1 .8 2 .8 3.1s-.3 2.2-.8 3.1L12 22zm0-19C9 3 6.5 5.5 6.5 8.5c0 .9.2 1.9.7 2.7L12 20l4.8-8.8c1.5-2.6.5-6-2.1-7.5-.8-.5-1.8-.7-2.7-.7z" })
  );
};
component.__docgenInfo = { "description": "", "methods": [], "displayName": "component", "props": { "title": { "required": false, "tsType": { "name": "string" }, "description": "" }, "titleId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  component
};
