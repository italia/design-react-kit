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
    /* @__PURE__ */ reactExports.createElement("path", { d: "M6.2 9.5h7.5v1H6.2v-1zm14.9 12.4L15.3 16c-1.5 1.3-3.4 2-5.3 2-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8c0 1.9-.7 3.8-2 5.3l5.9 5.8-.8.8zM17 10c0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7 7-3.1 7-7z" })
  );
};
component.__docgenInfo = { "description": "", "methods": [], "displayName": "component", "props": { "title": { "required": false, "tsType": { "name": "string" }, "description": "" }, "titleId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  component
};
