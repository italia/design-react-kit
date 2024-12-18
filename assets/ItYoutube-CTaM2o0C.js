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
    /* @__PURE__ */ reactExports.createElement("path", { d: "M21.6 7.2c-.2-.9-.9-1.5-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4c-.9.3-1.5.9-1.8 1.8C2.1 8.8 2 10.4 2 12c0 1.6.1 3.2.4 4.8.2.9.9 1.5 1.8 1.8 1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4c.9-.2 1.5-.9 1.8-1.8.3-1.6.4-3.2.4-4.8 0-1.6-.1-3.2-.4-4.8zM10 15V9l5.2 3-5.2 3z" })
  );
};
component.__docgenInfo = { "description": "", "methods": [], "displayName": "component", "props": { "title": { "required": false, "tsType": { "name": "string" }, "description": "" }, "titleId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  component
};
