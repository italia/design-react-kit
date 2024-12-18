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
    /* @__PURE__ */ reactExports.createElement("path", { d: "M11 22c-1.6.1-2.9-1.2-3-2.8V6c0-2.2 1.8-4 4-4s4 1.8 4 4v10h-1V6c0-1.7-1.3-3-3-3S9 4.3 9 6v13c0 1.1.9 2 2 2s2-.9 2-2V8c0-.6-.4-1-1-1s-1 .4-1 1v8h-1V8c0-1.1.9-2 2-2s2 .9 2 2v11c.1 1.6-1.2 2.9-2.8 3H11z" })
  );
};
component.__docgenInfo = { "description": "", "methods": [], "displayName": "component", "props": { "title": { "required": false, "tsType": { "name": "string" }, "description": "" }, "titleId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  component
};
