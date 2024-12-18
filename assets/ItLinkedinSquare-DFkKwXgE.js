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
    /* @__PURE__ */ reactExports.createElement("path", { d: "M19.7 3H4.3C3.6 3 3 3.6 3 4.3v15.4c0 .7.6 1.3 1.3 1.3h15.3c.7 0 1.3-.6 1.3-1.3V4.3c.1-.7-.5-1.3-1.2-1.3zM8.3 18.3H5.7V9.8h2.7v8.5zM7 8.6c-.9 0-1.5-.7-1.5-1.6 0-.9.7-1.5 1.5-1.6s1.5.7 1.6 1.6c0 .4-.2.8-.4 1.1-.4.3-.8.5-1.2.5zm11.3 9.7h-2.7v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3H10V9.8h2.6V11c.5-.9 1.5-1.4 2.5-1.4 2.7 0 3.2 1.8 3.2 4.1v4.6z" })
  );
};
component.__docgenInfo = { "description": "", "methods": [], "displayName": "component", "props": { "title": { "required": false, "tsType": { "name": "string" }, "description": "" }, "titleId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  component
};
