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
    /* @__PURE__ */ reactExports.createElement("path", { d: "M15.5 4v-.5c0-.8-.7-1.5-1.5-1.5h-4c-.8 0-1.5.7-1.5 1.5V4H3v1h2v15.5c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5V5h2V4h-5.5zm-6-.5c0-.3.2-.5.5-.5h4c.3 0 .5.2.5.5V4h-5v-.5zm8.5 17c0 .3-.2.5-.5.5h-11c-.3 0-.5-.2-.5-.5V5h12v15.5z" }),
    /* @__PURE__ */ reactExports.createElement("path", { d: "M11.5 8h1v10h-1zM8 8h1v10H8zM15 8h1v10h-1z" })
  );
};
component.__docgenInfo = { "description": "", "methods": [], "displayName": "component", "props": { "title": { "required": false, "tsType": { "name": "string" }, "description": "" }, "titleId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  component
};
