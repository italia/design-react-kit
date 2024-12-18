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
    /* @__PURE__ */ reactExports.createElement("path", { d: "M5.7 15.7c-1.5 0-2.7 1.2-2.7 2.7S4.2 21 5.7 21s2.7-1.2 2.7-2.7c-.1-1.4-1.3-2.6-2.7-2.6z" }),
    /* @__PURE__ */ reactExports.createElement("path", { d: "M3.3 8.9c-.2 0-.3.1-.3.3v3.4c0 .2.1.3.3.3 4.4 0 7.9 3.5 7.9 7.9 0 .2.1.3.3.3h3.4c.2 0 .3-.1.3-.3-.1-6.6-5.4-11.9-11.9-11.9z" }),
    /* @__PURE__ */ reactExports.createElement("path", { d: "M21 20.7C20.9 11 13 3.1 3.3 3c-.2 0-.3.1-.3.3v3.5c0 .1.1.2.3.2C10.8 7 17 13.1 17 20.7v.1c0 .2.1.3.3.3h3.5c.1-.1.3-.2.2-.4z" })
  );
};
component.__docgenInfo = { "description": "", "methods": [], "displayName": "component", "props": { "title": { "required": false, "tsType": { "name": "string" }, "description": "" }, "titleId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  component
};
