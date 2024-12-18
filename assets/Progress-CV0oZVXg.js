import { c as classNames } from "./index-D3ELxcOV.js";
import { i as isNumber } from "./index-DH28g3wf.js";
import { e } from "./index-BehpJNG5.js";
import { l as logError } from "./utils-CwYUlCuU.js";
const Progress = ({
  wrapperClassName,
  className,
  tag = "div",
  value,
  label,
  indeterminate = false,
  color,
  testId,
  ...attributes
}) => {
  const Tag = tag;
  if (!isNumber(value) && !indeterminate) {
    logError(`The passed "value" is not a valid number. You passed "${value}"`);
  }
  const numericValue = Number(value);
  const wrapperClasses = classNames("progress-bar-wrapper");
  const secondaryWrapperClasses = classNames(wrapperClassName === true ? className : wrapperClassName, "progress", {
    "progress-indeterminate": indeterminate,
    "progress-color": color
  });
  const classes = classNames(className, "progress-bar", {
    [`bg-${color}`]: color
  });
  if (label && numericValue) {
    return /* @__PURE__ */ e.createElement(Tag, { className: wrapperClasses, "data-testid": testId }, /* @__PURE__ */ e.createElement("div", { className: "progress-bar-label" }, /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, label), numericValue + "%"), /* @__PURE__ */ e.createElement(Tag, { className: secondaryWrapperClasses }, /* @__PURE__ */ e.createElement(
      "div",
      {
        ...attributes,
        className: classes,
        role: "progressbar",
        style: { width: numericValue + "%" },
        "aria-valuenow": numericValue,
        "aria-valuemin": 0,
        "aria-valuemax": 100
      }
    )));
  }
  return /* @__PURE__ */ e.createElement(Tag, { className: secondaryWrapperClasses, "data-testid": testId }, /* @__PURE__ */ e.createElement("div", { className: "progress-bar-label" }, /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, label)), /* @__PURE__ */ e.createElement(
    "div",
    {
      ...attributes,
      className: classes,
      role: "progressbar",
      style: { width: numericValue + "%" },
      "aria-valuenow": numericValue,
      "aria-valuemin": 0,
      "aria-valuemax": 100
    }
  ));
};
Progress.__docgenInfo = { "description": "", "methods": [], "displayName": "Progress", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'div'", "computed": false } }, "wrapperClassName": { "required": false, "tsType": { "name": "union", "raw": "string | true", "elements": [{ "name": "string" }, { "name": "literal", "value": "true" }] }, "description": "Classi aggiuntive da usare per il componente contenitore del Progress\nPer replicare il comportamento precedente, in cui `className` veniva applicato anche al wrapper,\npassare `true`." }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente interno del Progress" }, "value": { "required": false, "tsType": { "name": "union", "raw": "number | string", "elements": [{ "name": "number" }, { "name": "string" }] }, "description": "Valore corrente (numerico)" }, "label": { "required": false, "tsType": { "name": "string" }, "description": "Etichetta con testo per indicare il progresso corrente da mostrare ai dispositivi screen reader" }, "indeterminate": { "required": false, "tsType": { "name": "boolean" }, "description": "Quando non è possibile stabilire una percentuale di progressione utilizzare una Progress Bar di tipo indeterminato", "defaultValue": { "value": "false", "computed": false } }, "color": { "required": false, "tsType": { "name": "union", "raw": "'primary' | 'secondary' | 'success' | 'danger' | 'warning' | string", "elements": [{ "name": "literal", "value": "'primary'" }, { "name": "literal", "value": "'secondary'" }, { "name": "literal", "value": "'success'" }, { "name": "literal", "value": "'danger'" }, { "name": "literal", "value": "'warning'" }, { "name": "string" }] }, "description": "Le varianti di colore definite in Bootstrap Italia" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
export {
  Progress as P
};
