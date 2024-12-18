var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { e, r as reactExports } from "./index-BehpJNG5.js";
import { S as Select } from "./Select-DYLUvc-D.js";
import "./track-focus-DbJ2CO43.js";
const meta = {
  title: "Documentazione/Form/Select",
  component: Select,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const SelectClassicaHooks = () => {
  const [, setValue] = reactExports.useState();
  const handleChange = (selectedOption) => setValue(selectedOption);
  return /* @__PURE__ */ e.createElement(Select, { id: "example-reactstrap", label: "Etichetta di esempio", onChange: handleChange }, /* @__PURE__ */ e.createElement("option", { value: "" }, "Scegli un'opzione"), /* @__PURE__ */ e.createElement("option", { value: "Value 1" }, "Lorem ipsum dolor sit amet"), /* @__PURE__ */ e.createElement("option", { value: "Value 2" }, "Duis vestibulum eleifend libero"), /* @__PURE__ */ e.createElement("option", { value: "Value 3" }, "Phasellus pretium orci sed odio tempus"), /* @__PURE__ */ e.createElement("option", { value: "Value 4" }, "Vestibulum bibendum ex vel augue porttitor sodales"), /* @__PURE__ */ e.createElement("option", { value: "Value 5" }, "Praesent quis elementum turpis"));
};
const SelectClassica = {
  render: () => {
    return /* @__PURE__ */ e.createElement(SelectClassicaHooks, null);
  }
};
const SelectDisabilitataHooks = () => {
  const [, setValue] = reactExports.useState();
  const handleChange = (selectedOption) => setValue(selectedOption);
  return /* @__PURE__ */ e.createElement(Select, { id: "example-reactstrap", label: "Etichetta di esempio", onChange: handleChange, disabled: true }, /* @__PURE__ */ e.createElement("option", { value: "" }, "Scegli un'opzione"), /* @__PURE__ */ e.createElement("option", { value: "Value 1" }, "Lorem ipsum dolor sit amet"), /* @__PURE__ */ e.createElement("option", { value: "Value 2" }, "Duis vestibulum eleifend libero"), /* @__PURE__ */ e.createElement("option", { value: "Value 3" }, "Phasellus pretium orci sed odio tempus"), /* @__PURE__ */ e.createElement("option", { value: "Value 4" }, "Vestibulum bibendum ex vel augue porttitor sodales"), /* @__PURE__ */ e.createElement("option", { value: "Value 5" }, "Praesent quis elementum turpis"));
};
const SelectDisabilitata = {
  render: () => {
    return /* @__PURE__ */ e.createElement(SelectDisabilitataHooks, null);
  }
};
const SelectConGruppiHooks = () => {
  const [, setValue] = reactExports.useState();
  const handleChange = (selectedOption) => setValue(selectedOption);
  return /* @__PURE__ */ e.createElement(Select, { id: "example-reactstrap", label: "Etichetta di esempio", onChange: handleChange }, /* @__PURE__ */ e.createElement("option", { value: "" }, "Scegli un'opzione"), /* @__PURE__ */ e.createElement("optgroup", { label: "Gruppo 1" }, /* @__PURE__ */ e.createElement("option", { value: "Value 1" }, "Lorem ipsum dolor sit amet"), /* @__PURE__ */ e.createElement("option", { value: "Value 2" }, "Duis vestibulum eleifend libero"), /* @__PURE__ */ e.createElement("option", { value: "Value 3" }, "Phasellus pretium orci sed odio tempus")), /* @__PURE__ */ e.createElement("optgroup", { label: "Gruppo 2" }, /* @__PURE__ */ e.createElement("option", { value: "Value 4" }, "Vestibulum bibendum ex vel augue porttitor sodales"), /* @__PURE__ */ e.createElement("option", { value: "Value 5" }, "Praesent quis elementum turpis")));
};
const SelectConGruppi = {
  render: () => {
    return /* @__PURE__ */ e.createElement(SelectConGruppiHooks, null);
  }
};
SelectClassica.parameters = {
  ...SelectClassica.parameters,
  docs: {
    ...(_a = SelectClassica.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <SelectClassicaHooks />;\n  }\n}",
      ...(_c = (_b = SelectClassica.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
SelectDisabilitata.parameters = {
  ...SelectDisabilitata.parameters,
  docs: {
    ...(_d = SelectDisabilitata.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <SelectDisabilitataHooks />;\n  }\n}",
      ...(_f = (_e = SelectDisabilitata.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
SelectConGruppi.parameters = {
  ...SelectConGruppi.parameters,
  docs: {
    ...(_g = SelectConGruppi.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <SelectConGruppiHooks />;\n  }\n}",
      ...(_i = (_h = SelectConGruppi.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
const __namedExportsOrder = ["SelectClassica", "SelectDisabilitata", "SelectConGruppi"];
const SelectStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SelectClassica,
  SelectConGruppi,
  SelectDisabilitata,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  SelectStories as S,
  SelectClassica as a,
  SelectDisabilitata as b,
  SelectConGruppi as c
};
