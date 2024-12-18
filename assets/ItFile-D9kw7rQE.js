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
    /* @__PURE__ */ reactExports.createElement("path", { d: "M14.7 2H6.5C5.7 2 5 2.7 5 3.5v17c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5V6.3L14.7 2zm.3 1.7L17.3 6h-1.8c-.3 0-.5-.2-.5-.5V3.7zM17.5 21h-11c-.3 0-.5-.2-.5-.5v-17c0-.3.2-.5.5-.5H14v2.5c0 .8.7 1.5 1.5 1.5H18v13.5c0 .3-.2.5-.5.5zM8 9h8v1H8V9zm0 2h8v1H8v-1zm0 2h4v1H8v-1z" })
  );
};
component.__docgenInfo = { "description": "", "methods": [], "displayName": "component", "props": { "title": { "required": false, "tsType": { "name": "string" }, "description": "" }, "titleId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  component
};
