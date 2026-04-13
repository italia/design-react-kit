import { g as getDefaultExportFromCjs } from "./iframe-BCTfBavy.js";
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */
var isNumber$1;
var hasRequiredIsNumber;
function requireIsNumber() {
  if (hasRequiredIsNumber) return isNumber$1;
  hasRequiredIsNumber = 1;
  isNumber$1 = function(num) {
    if (typeof num === "number") {
      return num - num === 0;
    }
    if (typeof num === "string" && num.trim() !== "") {
      return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
    }
    return false;
  };
  return isNumber$1;
}
var isNumberExports = requireIsNumber();
const isNumber = /* @__PURE__ */ getDefaultExportFromCjs(isNumberExports);
export {
  isNumber as i
};
