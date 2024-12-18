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
    /* @__PURE__ */ reactExports.createElement("path", { d: "m4.7 4 6.7 6.6-.7.7L4 4.7v3.8H3V3h5.5v1zM20 19.3l-6.6-6.7-.7.7 6.6 6.7h-3.8v1H21v-5.5h-1zM15.5 3v1h3.8l-6.6 6.6.7.7L20 4.7v3.8h1V3zM10.6 12.6 4 19.3v-3.8H3V21h5.5v-1H4.7l6.7-6.7z" })
  );
};
component.__docgenInfo = { "description": "", "methods": [], "displayName": "component", "props": { "title": { "required": false, "tsType": { "name": "string" }, "description": "" }, "titleId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  component
};
