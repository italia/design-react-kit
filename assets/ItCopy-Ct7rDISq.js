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
    /* @__PURE__ */ reactExports.createElement("path", { d: "M19.5 4H18v-.6c-.1-.8-.7-1.4-1.5-1.4h-11c-.8 0-1.4.6-1.5 1.4v15.2c.1.8.7 1.4 1.5 1.4H7v.6c.1.8.7 1.4 1.5 1.4h11c.8 0 1.4-.6 1.5-1.4V5.4c-.1-.8-.7-1.4-1.5-1.4zM5 18.6V3.4c0-.2.3-.4.5-.4h11c.2 0 .5.2.5.4v15.2c0 .2-.3.4-.5.4h-11c-.2 0-.5-.2-.5-.4zm15 2c0 .2-.3.4-.5.4h-11c-.2 0-.5-.2-.5-.4V20h8.5c.8 0 1.4-.6 1.5-1.4V5h1.5c.2 0 .5.2.5.4v15.2z" })
  );
};
component.__docgenInfo = { "description": "", "methods": [], "displayName": "component", "props": { "title": { "required": false, "tsType": { "name": "string" }, "description": "" }, "titleId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  component
};
