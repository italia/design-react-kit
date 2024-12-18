import { r as reactExports } from "./index-BehpJNG5.js";
import "./_commonjsHelpers-DWwsNxpa.js";
const component = ({ title, titleId, ...props }) => {
  return /* @__PURE__ */ reactExports.createElement(
    "svg",
    {
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      "aria-labelledby": titleId,
      ...props
    },
    title ? /* @__PURE__ */ reactExports.createElement("title", { id: titleId }, title) : null,
    /* @__PURE__ */ reactExports.createElement("path", { d: "M16.412 18.572V14.29h1.428V20H5v-5.71h1.428v4.282h9.984Z" }),
    /* @__PURE__ */ reactExports.createElement("path", { d: "M7.857 17.145h7.137v-1.428H7.857v1.428ZM14.254 4l-1.146.852 4.26 5.727 1.146-.852L14.254 4Zm-3.54 3.377 5.484 4.567.913-1.097-5.484-4.567-.914 1.097ZM8.922 10.55l6.47 3.013.603-1.294-6.47-3.013-.603 1.294Zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468-.294 1.397Z" })
  );
};
component.__docgenInfo = { "description": "", "methods": [], "displayName": "component", "props": { "title": { "required": false, "tsType": { "name": "string" }, "description": "" }, "titleId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  component
};
