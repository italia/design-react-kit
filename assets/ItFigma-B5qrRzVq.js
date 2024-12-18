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
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        clipRule: "evenodd",
        d: "M5.5 6A3.5 3.5 0 0 1 9 2.5h3.5v7H9A3.5 3.5 0 0 1 5.5 6ZM9 3.5a2.5 2.5 0 0 0 0 5h2.5v-5H9Z"
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        clipRule: "evenodd",
        d: "M18.5 6A3.5 3.5 0 0 0 15 2.5h-3.5v7H15A3.5 3.5 0 0 0 18.5 6ZM15 3.5a2.5 2.5 0 0 1 0 5h-2.5v-5H15Z"
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        clipRule: "evenodd",
        d: "M18.5 12a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0ZM15 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        clipRule: "evenodd",
        d: "M5.5 12A3.5 3.5 0 0 1 9 8.5h3.5v7H9A3.5 3.5 0 0 1 5.5 12ZM9 9.5a2.5 2.5 0 0 0 0 5h2.5v-5H9Z"
      }
    ),
    /* @__PURE__ */ reactExports.createElement(
      "path",
      {
        clipRule: "evenodd",
        d: "M5.5 18A3.5 3.5 0 0 1 9 14.5h3.5V18a3.5 3.5 0 1 1-7 0ZM9 15.5a2.5 2.5 0 1 0 2.5 2.5v-2.5H9Z"
      }
    )
  );
};
component.__docgenInfo = { "description": "", "methods": [], "displayName": "component", "props": { "title": { "required": false, "tsType": { "name": "string" }, "description": "" }, "titleId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  component
};
