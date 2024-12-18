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
    /* @__PURE__ */ reactExports.createElement("path", { d: "M17.5 7.3V6c0-.8-.7-1.5-1.5-1.5H5.5C4.7 4.5 4 5.2 4 6v8c0 .8.7 1.5 1.5 1.5h3.4L7.4 21h1l1.6-5.5h1.8l1.6 5.5h1l-1.6-5.5H16c.8 0 1.5-.7 1.5-1.5v-1.3l4 1.5V5.8l-4 1.5zm3 5.5-4-1.5V14c0 .3-.2.5-.5.5H5.5c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5H16c.3 0 .5.2.5.5v2.7l4-1.5v5.6zM2 8h1v4H2V8z" })
  );
};
component.__docgenInfo = { "description": "", "methods": [], "displayName": "component", "props": { "title": { "required": false, "tsType": { "name": "string" }, "description": "" }, "titleId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  component
};
