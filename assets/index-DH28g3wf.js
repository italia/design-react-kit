import { g as getDefaultExportFromCjs } from "./_commonjsHelpers-DWwsNxpa.js";
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */
var isNumber = function(num) {
  if (typeof num === "number") {
    return num - num === 0;
  }
  if (typeof num === "string" && num.trim() !== "") {
    return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
  }
  return false;
};
const isNumber$1 = /* @__PURE__ */ getDefaultExportFromCjs(isNumber);
export {
  isNumber$1 as i
};
