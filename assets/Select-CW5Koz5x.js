import { R as React } from "./index-CQCy530F.js";
const Select = ({ id, disabled = false, label, children, onChange, ...rest }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  const inputProps = {
    ...rest,
    disabled,
    onChange: handleChange
  };
  return /* @__PURE__ */ React.createElement("div", { className: "select-wrapper" }, id ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("label", { htmlFor: id }, label), /* @__PURE__ */ React.createElement("select", { id, ...inputProps }, children)) : /* @__PURE__ */ React.createElement("label", null, label, /* @__PURE__ */ React.createElement("select", { ...inputProps }, children)));
};
Select.__docgenInfo = { "description": "", "methods": [], "displayName": "Select", "props": { "disabled": { "required": false, "tsType": { "name": "boolean" }, "description": "Se `true` determina la disabilitazione del campo", "defaultValue": { "value": "false", "computed": false } }, "label": { "required": true, "tsType": { "name": "string" }, "description": "L'etichetta del campo" }, "children": { "required": true, "tsType": { "name": "union", "raw": "ReactElement<'option'> | ReactElement<'option'>[]", "elements": [{ "name": "ReactElement", "elements": [{ "name": "literal", "value": "'option'" }], "raw": "ReactElement<'option'>" }, { "name": "Array", "elements": [{ "name": "ReactElement", "elements": [{ "name": "literal", "value": "'option'" }], "raw": "ReactElement<'option'>" }], "raw": "ReactElement<'option'>[]" }] }, "description": "La lista di opzioni da visualizzare nella tendina del Select" }, "onChange": { "required": true, "tsType": { "name": "signature", "type": "function", "raw": "(selectedValue: string) => void", "signature": { "arguments": [{ "type": { "name": "string" }, "name": "selectedValue" }], "return": { "name": "void" } } }, "description": "Gestisce il cambio del valore selezionato\n@param selectedValue\n@returns" } }, "composes": ["Omit"] };
export {
  Select as S
};
