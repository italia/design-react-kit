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
        d: "M3.567 1.333h16.762a2.286 2.286 0 0 1 2.286 2.286v16.762a2.286 2.286 0 0 1-2.286 2.286H3.567a2.286 2.286 0 0 1-2.286-2.286V3.619a2.286 2.286 0 0 1 2.286-2.286ZM8.512 16.5a4.506 4.506 0 0 0 4.513-4.5c0-2.485-2.02-4.5-4.513-4.5A4.506 4.506 0 0 0 4 12c0 2.486 2.02 4.5 4.512 4.5Zm7.207-.264c1.246 0 2.256-1.897 2.256-4.236 0-2.34-1.01-4.236-2.256-4.236-1.246 0-2.256 1.897-2.256 4.236 0 2.339 1.01 4.236 2.256 4.236Zm3.487-.44c.439 0 .794-1.7.794-3.796s-.355-3.795-.793-3.795c-.439 0-.794 1.7-.794 3.795 0 2.095.355 3.795.793 3.795Z"
      }
    )
  );
};
component.__docgenInfo = { "description": "", "methods": [], "displayName": "component", "props": { "title": { "required": false, "tsType": { "name": "string" }, "description": "" }, "titleId": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
export {
  component
};
