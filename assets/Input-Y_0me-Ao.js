import { R as React, r as reactExports } from "./index-CQCy530F.js";
import { i as isNumber } from "./index-CTmVYaih.js";
import { I as Icon } from "./Icon-CYxksTIN.js";
import { c as classNames } from "./index-CpyNLP69.js";
import { m as mapToCssModules, a as notifyDeprecation } from "./utils-DNvasP3d.js";
const InputContainer = ({
  id,
  infoId,
  infoText,
  testId,
  activeClass,
  extraLabelClass,
  label,
  validationTextClass,
  validationText,
  wrapperClass,
  children
}) => {
  return /* @__PURE__ */ React.createElement("div", { className: wrapperClass, "data-testid": testId }, /* @__PURE__ */ React.createElement("label", { htmlFor: id, className: activeClass + " " + extraLabelClass }, label), children, infoText && /* @__PURE__ */ React.createElement("small", { id: infoId, className: "form-text" }, infoText), /* @__PURE__ */ React.createElement("div", { className: validationTextClass }, validationText));
};
InputContainer.__docgenInfo = { "description": "", "methods": [], "displayName": "InputContainer", "props": { "wrapperClass": { "required": true, "tsType": { "name": "string" }, "description": "" }, "activeClass": { "required": true, "tsType": { "name": "string" }, "description": "" }, "extraLabelClass": { "required": true, "tsType": { "name": "string" }, "description": "" }, "validationTextClass": { "required": true, "tsType": { "name": "string" }, "description": "" }, "label": { "required": true, "tsType": { "name": "union", "raw": "string | ReactNode | undefined", "elements": [{ "name": "string" }, { "name": "ReactNode" }, { "name": "undefined" }] }, "description": "" }, "validationText": { "required": true, "tsType": { "name": "union", "raw": "string | undefined", "elements": [{ "name": "string" }, { "name": "undefined" }] }, "description": "" }, "id": { "required": true, "tsType": { "name": "union", "raw": "string | undefined", "elements": [{ "name": "string" }, { "name": "undefined" }] }, "description": "" }, "infoId": { "required": true, "tsType": { "name": "union", "raw": "string | undefined", "elements": [{ "name": "string" }, { "name": "undefined" }] }, "description": "" }, "infoText": { "required": true, "tsType": { "name": "union", "raw": "string | undefined", "elements": [{ "name": "string" }, { "name": "undefined" }] }, "description": "" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
function getFormControlClassInternal({ plaintext, staticInput, type = "text", addon, normalized }) {
  const formControlClass = "form-control";
  if (plaintext || staticInput || normalized) {
    return `${formControlClass}-plaintext`;
  }
  if (type === "file") {
    return `${formControlClass}-file`;
  }
  if (["radio", "checkbox"].indexOf(type) > -1) {
    if (addon) {
      return null;
    }
  }
  return formControlClass;
}
function getFormControlClass(props, cssModule) {
  return mapToCssModules(getFormControlClassInternal(props), cssModule);
}
function getValidationTextControlClass({ valid }, cssModule) {
  return mapToCssModules(
    classNames({
      "form-text": true,
      "form-feedback just-validate-error-label": valid == false
    }),
    cssModule
  );
}
function getTag({ tag, plaintext, staticInput, type = "text" }) {
  if (tag) {
    return tag;
  }
  if (["radio", "checkbox"].indexOf(type) > -1) {
    return "input";
  }
  if (plaintext || staticInput) {
    return "p";
  }
  return "input";
}
function getClasses(className, type, {
  isFocused,
  valid,
  bsSize,
  placeholder,
  value,
  label,
  validationText,
  normalized,
  inputPassword,
  formControlClass,
  validationTextControlClass,
  originalWrapperClass
}, cssModule) {
  const hasPlainCondition = placeholder || label || validationText;
  const baseCondition = hasPlainCondition && !normalized && !inputPassword;
  const passwordOnlyCondition = inputPassword && !hasPlainCondition && !normalized;
  const normalizedOnlyCondition = normalized && !hasPlainCondition && !inputPassword;
  const classes = mapToCssModules(
    classNames(
      className,
      {
        "is-invalid": valid == false,
        "just-validate-success-field": valid,
        [`form-control-${bsSize}`]: bsSize
      },
      formControlClass
    ),
    cssModule
  );
  const wrapperClass = mapToCssModules(classNames(className, originalWrapperClass, "form-group"), cssModule);
  const validationTextClass = mapToCssModules(
    classNames(
      {
        "valid-feedback": valid,
        "invalid-feedback form-feedback just-validate-error-label": valid == false
      },
      validationTextControlClass
    ),
    cssModule
  );
  const inputClasses = mapToCssModules(
    classNames(
      classes,
      !baseCondition && {
        // we can model here only if stylings
        "form-control-plaintext": normalizedOnlyCondition,
        "form-control": passwordOnlyCondition,
        "input-password": passwordOnlyCondition,
        "focus--mouse": passwordOnlyCondition || normalizedOnlyCondition
      }
    ),
    cssModule
  );
  const activeClass = mapToCssModules(
    classNames({
      active: isFocused || placeholder || value || ["date", "time"].includes(type)
    }),
    cssModule
  );
  const extraLabelClass = mapToCssModules(
    classNames({
      "input-number-label": ["number", "currency", "adaptive", "percentage"].includes(type)
    })
  );
  return {
    wrapperClass,
    inputClasses,
    activeClass,
    extraLabelClass,
    validationTextClass
  };
}
function useFocus({
  onFocus,
  onBlur
}) {
  const [isFocused, setFocus] = reactExports.useState(false);
  const toggleFocusLabel = reactExports.useCallback(
    (e) => {
      setFocus(true);
      onFocus == null ? void 0 : onFocus(e);
    },
    [onFocus]
  );
  const toggleBlurLabel = reactExports.useCallback(
    (e) => {
      if (e.target.value === "") {
        setFocus(!isFocused);
      }
      onBlur == null ? void 0 : onBlur(e);
    },
    [isFocused, onBlur]
  );
  return { toggleFocusLabel, toggleBlurLabel, isFocused };
}
const Input = ({
  id,
  className,
  cssModule,
  type = "text",
  tag,
  addon,
  addonText,
  static: staticInput,
  plaintext,
  innerRef,
  label,
  incrementLabel,
  decrementLabel,
  validationText,
  infoText,
  placeholder,
  normalized,
  value,
  wrapperClass: originalWrapperClassOld,
  wrapperClassName: originalWrapperClass,
  size,
  testId,
  noWrapper = false,
  ...attributes
}) => {
  const [isHidden, setHidden] = reactExports.useState(true);
  const [hasIcon, toggleIcon] = reactExports.useState(true);
  const { toggleFocusLabel, toggleBlurLabel, isFocused } = useFocus({
    onFocus: attributes.onFocus,
    onBlur: attributes.onBlur
  });
  const toggleShow = reactExports.useCallback(() => {
    setHidden(!isHidden);
    toggleIcon(!hasIcon);
  }, [hasIcon, isHidden]);
  const divResizeRef = reactExports.useRef(null);
  const inputRef = reactExports.useRef(null);
  const [width, setWidth] = reactExports.useState("100");
  reactExports.useEffect(() => {
    if (divResizeRef.current != null && divResizeRef.current.classList.contains("input-number-adaptive")) {
      if (!value) {
        setWidth(`calc(70px)`);
      } else {
        setWidth(`calc(70px + ${`${value}`.length}ch)`);
      }
    }
  }, [value]);
  let { bsSize, valid, ...rest } = attributes;
  const Tag = getTag({ tag, plaintext, staticInput, type });
  addon = addonText != null ? true : addon;
  const formControlClass = getFormControlClass(
    {
      plaintext,
      staticInput,
      type,
      addon,
      normalized
    },
    cssModule
  );
  const validationTextControlClass = getValidationTextControlClass({ valid }, cssModule);
  const extraAttributes = {};
  if (size && !isNumber(size)) {
    notifyDeprecation(`Please use the prop "bsSize" instead of the "size" to bootstrap's input sizing.`);
    bsSize = size;
  } else {
    extraAttributes.size = size;
  }
  if (Tag === "input" || typeof tag !== "string") {
    extraAttributes.type = type;
  }
  const infoId = id ? `${id}Description` : void 0;
  if (id) {
    extraAttributes["aria-describedby"] = infoId;
  }
  if (attributes.children && !(plaintext || staticInput || type === "select" || typeof Tag !== "string" || Tag === "select")) {
    notifyDeprecation(
      `Input with a type of "${type}" cannot have children. Please use "value"/"defaultValue" instead.`
    );
    delete attributes.children;
  }
  const inputPassword = extraAttributes.type === "password";
  const indeterminateCheckboxInput = type === "checkbox" && (className == null ? void 0 : className.includes("semi-checked"));
  const { activeClass, extraLabelClass, validationTextClass, inputClasses, wrapperClass } = getClasses(
    className,
    type,
    {
      valid,
      bsSize,
      placeholder,
      value,
      label,
      validationText,
      normalized: Boolean(normalized),
      inputPassword,
      formControlClass,
      validationTextControlClass,
      isFocused,
      originalWrapperClass: originalWrapperClass || originalWrapperClassOld
    },
    cssModule
  );
  const sharedAttributes = {
    id,
    onFocus: toggleFocusLabel,
    onBlur: toggleBlurLabel,
    value,
    ref: innerRef
  };
  const containerProps = {
    id,
    infoId,
    infoText,
    activeClass,
    extraLabelClass,
    label,
    validationTextClass,
    validationText,
    wrapperClass
  };
  if (noWrapper) {
    return /* @__PURE__ */ React.createElement(
      Tag,
      {
        ...rest,
        ...extraAttributes,
        className: inputClasses,
        ...sharedAttributes,
        placeholder,
        "data-testid": testId
      }
    );
  }
  const clickIncrDecr = (mode) => {
    var _a, _b, _c, _d, _e, _f;
    var step = parseFloat(((_a = inputRef.current) == null ? void 0 : _a.step) ? inputRef.current.step : "1");
    const min = parseFloat(((_b = inputRef.current) == null ? void 0 : _b.min) ? inputRef.current.min : "Nan");
    const max = parseFloat(((_c = inputRef.current) == null ? void 0 : _c.max) ? inputRef.current.max : "Nan");
    step = isNaN(step) ? 1 : step;
    const newValue = parseFloat(((_d = inputRef.current) == null ? void 0 : _d.value) ? inputRef.current.value : "0") + mode * step;
    if (!isNaN(max) && newValue > max) {
      return;
    }
    if (!isNaN(min) && newValue < min) {
      return;
    }
    const nativeInputValueSetter = (_e = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")) == null ? void 0 : _e.set;
    nativeInputValueSetter == null ? void 0 : nativeInputValueSetter.call(inputRef.current, `${newValue}`);
    var ev2 = new Event("input", { bubbles: true });
    (_f = inputRef.current) == null ? void 0 : _f.dispatchEvent(ev2);
  };
  if (["currency", "percentage", "adaptive", "number"].includes(type)) {
    return /* @__PURE__ */ React.createElement(InputContainer, { ...containerProps }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: classNames({
          "input-group": true,
          "input-number": true,
          disabled: rest.disabled,
          "input-number-percentage": type == "percentage",
          "input-number-currency": type == "currency",
          "input-number-adaptive": type == "adaptive"
        }),
        style: { width },
        ref: divResizeRef
      },
      ["currency", "percentage"].includes(type) && /* @__PURE__ */ React.createElement("span", { className: "input-group-text fw-semibold" }, addonText),
      /* @__PURE__ */ React.createElement(
        Tag,
        {
          ...rest,
          ...extraAttributes,
          ...sharedAttributes,
          className: inputClasses,
          "data-testid": testId,
          type: "number",
          ref: inputRef
        }
      ),
      /* @__PURE__ */ React.createElement("span", { className: "input-group-text align-buttons flex-column" }, /* @__PURE__ */ React.createElement("button", { className: "input-number-add", onClick: () => clickIncrDecr(1), type: "button" }, /* @__PURE__ */ React.createElement("span", { className: "visually-hidden" }, incrementLabel || "")), /* @__PURE__ */ React.createElement("button", { className: "input-number-sub", onClick: () => clickIncrDecr(-1), type: "button" }, /* @__PURE__ */ React.createElement("span", { className: "visually-hidden" }, decrementLabel || "")))
    ));
  }
  if (placeholder) {
    return /* @__PURE__ */ React.createElement(InputContainer, { ...containerProps }, /* @__PURE__ */ React.createElement(
      Tag,
      {
        ...rest,
        ...extraAttributes,
        ...sharedAttributes,
        className: inputClasses,
        placeholder,
        "data-testid": testId
      }
    ));
  }
  if (indeterminateCheckboxInput) {
    return /* @__PURE__ */ React.createElement(InputContainer, { ...containerProps }, /* @__PURE__ */ React.createElement(
      Tag,
      {
        ...rest,
        ...extraAttributes,
        ...sharedAttributes,
        className: inputClasses,
        "data-testid": testId,
        indeterminate: "true"
      }
    ));
  }
  if (inputPassword) {
    return /* @__PURE__ */ React.createElement(InputContainer, { ...containerProps }, /* @__PURE__ */ React.createElement(
      Tag,
      {
        ...rest,
        ...extraAttributes,
        ...sharedAttributes,
        type: isHidden ? "password" : "text",
        className: inputClasses,
        placeholder,
        "data-testid": testId
      }
    ), /* @__PURE__ */ React.createElement("span", { className: "password-icon", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement(
      Icon,
      {
        size: "sm",
        icon: `it-password-${hasIcon ? "visible" : "invisible"}`,
        className: "password-icon-visible",
        onClick: toggleShow
      }
    )));
  }
  if (normalized) {
    return /* @__PURE__ */ React.createElement(InputContainer, { ...containerProps }, /* @__PURE__ */ React.createElement(
      Tag,
      {
        ...rest,
        ...extraAttributes,
        ...sharedAttributes,
        className: inputClasses,
        "data-testid": testId,
        readOnly: true
      }
    ));
  }
  if (label || validationText) {
    return /* @__PURE__ */ React.createElement(InputContainer, { ...containerProps }, /* @__PURE__ */ React.createElement(Tag, { ...rest, ...extraAttributes, ...sharedAttributes, className: inputClasses, "data-testid": testId }));
  }
  return /* @__PURE__ */ React.createElement(Tag, { ...rest, ...extraAttributes, className: inputClasses, ...sharedAttributes, "data-testid": testId });
};
Input.__docgenInfo = { "description": "", "methods": [], "displayName": "Input", "props": { "type": { "required": false, "tsType": { "name": "union", "raw": "| 'text'\n| 'email'\n| 'select'\n| 'file'\n| 'radio'\n| 'checkbox'\n| 'textarea'\n| 'button'\n| 'reset'\n| 'submit'\n| 'date'\n| 'datetime-local'\n| 'hidden'\n| 'image'\n| 'month'\n| 'number'\n| 'range'\n| 'search'\n| 'tel'\n| 'url'\n| 'week'\n| 'password'\n| 'datetime'\n| 'time'\n| 'color'\n| 'adaptive'\n| 'currency'\n| 'percentage'", "elements": [{ "name": "literal", "value": "'text'" }, { "name": "literal", "value": "'email'" }, { "name": "literal", "value": "'select'" }, { "name": "literal", "value": "'file'" }, { "name": "literal", "value": "'radio'" }, { "name": "literal", "value": "'checkbox'" }, { "name": "literal", "value": "'textarea'" }, { "name": "literal", "value": "'button'" }, { "name": "literal", "value": "'reset'" }, { "name": "literal", "value": "'submit'" }, { "name": "literal", "value": "'date'" }, { "name": "literal", "value": "'datetime-local'" }, { "name": "literal", "value": "'hidden'" }, { "name": "literal", "value": "'image'" }, { "name": "literal", "value": "'month'" }, { "name": "literal", "value": "'number'" }, { "name": "literal", "value": "'range'" }, { "name": "literal", "value": "'search'" }, { "name": "literal", "value": "'tel'" }, { "name": "literal", "value": "'url'" }, { "name": "literal", "value": "'week'" }, { "name": "literal", "value": "'password'" }, { "name": "literal", "value": "'datetime'" }, { "name": "literal", "value": "'time'" }, { "name": "literal", "value": "'color'" }, { "name": "literal", "value": "'adaptive'" }, { "name": "literal", "value": "'currency'" }, { "name": "literal", "value": "'percentage'" }] }, "description": "Il tipo specifico di input da utilizzare. Il valore di default è `text`.", "defaultValue": { "value": "'text'", "computed": false } }, "bsSize": { "required": false, "tsType": { "name": "union", "raw": "'lg' | 'sm'", "elements": [{ "name": "literal", "value": "'lg'" }, { "name": "literal", "value": "'sm'" }] }, "description": "Dimensione personalizzate del campo di Input secondo le classi Bootstrap/Bootstrap Italia." }, "size": { "required": false, "tsType": { "name": "number" }, "description": "" }, "label": { "required": false, "tsType": { "name": "union", "raw": "string | ReactNode", "elements": [{ "name": "string" }, { "name": "ReactNode" }] }, "description": "Etichetta del campo Input." }, "incrementLabel": { "required": false, "tsType": { "name": "union", "raw": "string | ReactNode", "elements": [{ "name": "string" }, { "name": "ReactNode" }] }, "description": "Etichetta del pulsante incremento." }, "decrementLabel": { "required": false, "tsType": { "name": "union", "raw": "string | ReactNode", "elements": [{ "name": "string" }, { "name": "ReactNode" }] }, "description": "Etichetta del pulsante decremento." }, "placeholder": { "required": false, "tsType": { "name": "string" }, "description": "Testo di esempio da utilizzare per il campo." }, "validationText": { "required": false, "tsType": { "name": "string" }, "description": "Testo di validazione per l'elemento del moduleo form." }, "infoText": { "required": false, "tsType": { "name": "string" }, "description": "Testo di aiuto per l'elemento del moduleo form. Richiede che il componente `Input` abbia la prop `id` impostata." }, "value": { "required": false, "tsType": { "name": "union", "raw": "string | number", "elements": [{ "name": "string" }, { "name": "number" }] }, "description": "Il valore nel campo Input." }, "readOnly": { "required": false, "tsType": { "name": "boolean" }, "description": "Da utilizzare per impedire la modifica del valore contenuto." }, "normalized": { "required": false, "tsType": { "name": "boolean" }, "description": "Associato all'attributo readOnly mostra il campo con lo stile classico, mantenendo lo stato di sola lettura." }, "valid": { "required": false, "tsType": { "name": "boolean" }, "description": "Utilizzare per mostrare il successo nella validazione del valore nel campo Input" }, "innerRef": { "required": false, "tsType": { "name": "Ref", "elements": [{ "name": "HTMLInputElement" }], "raw": "Ref<HTMLInputElement>" }, "description": "" }, "plaintext": { "required": false, "tsType": { "name": "boolean" }, "description": "Utilizzare per mostrare testo statico non modificabile." }, "addon": { "required": false, "tsType": { "name": "boolean" }, "description": "Utilizzare per mostrare un elemento addon a fianco (prima o dopo) il campo input all'interno del componente" }, "addonText": { "required": false, "tsType": { "name": "string" }, "description": "Utilizzare per mostrare un elemento un simbolo attivando la proprietà addon nel campo input all'interno del componente" }, "cssModule": { "required": false, "tsType": { "name": "CSSModule" }, "description": "Oggetto contenente la nuova mappatura per le classi CSS." }, "wrapperClassName": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il wrapper del componente Input" }, "wrapperClass": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il wrapper del componente Input.\n@deprecated. Usare `wrapperClassName`." }, "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati" }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente Input" }, "static": { "required": false, "tsType": { "name": "boolean" }, "description": 'Usare "plaintext".\n@deprecated' }, "noWrapper": { "required": false, "tsType": { "name": "boolean" }, "description": "Quando attivo rimuove il componente contenitore dell'Input. Utile per un controllo maggiore dello styling", "defaultValue": { "value": "false", "computed": false } }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["InputHTMLAttributes"] };
export {
  Input as I,
  getClasses as a,
  InputContainer as b,
  getValidationTextControlClass as g,
  useFocus as u
};
