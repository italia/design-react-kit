var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
import { e, r as reactExports } from "./index-BehpJNG5.js";
import { I as Input } from "./Input-Cuq_2t4X.js";
import "./track-focus-DbJ2CO43.js";
const meta = {
  title: "Documentazione/Form/InputNumerico",
  component: Input
};
const InputNumericoDimensionamentoHooks = () => {
  const [value, setValue] = reactExports.useState("100");
  const [value50, setValue50] = reactExports.useState("100");
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "w-100" }, /* @__PURE__ */ e.createElement(Input, { id: "example-w100", type: "number", label: "Input Number inserito in una colonna a tutta larghezza", incrementLabel: "Aumenta il valore  di 1", decrementLabel: "Diminuisci il valore di 1", value, onChange: (ev) => {
    setValue(ev.target.value);
  } })), /* @__PURE__ */ e.createElement("div", { className: "w-50 mt-5" }, /* @__PURE__ */ e.createElement(Input, { id: "example-w50", type: "number", label: "Input Number inserito in una colonna di larghezza 50%", incrementLabel: "Aumenta il valore  di 1", decrementLabel: "Diminuisci il valore di 1", value: value50, onChange: (ev) => {
    setValue50(ev.target.value);
  } })));
};
const InputNumericoDimensionamento = {
  render: () => {
    return /* @__PURE__ */ e.createElement(InputNumericoDimensionamentoHooks, null);
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const InputNumericoStepsHooks = () => {
  const [value, setValue] = reactExports.useState("100");
  return /* @__PURE__ */ e.createElement(Input, { id: "example-steps", type: "number", label: "Min, Max & Step", incrementLabel: "Aumenta il valore  di 500", decrementLabel: "Diminuisci il valore di 500", value, min: -2e3, max: 15e3, step: 500, onChange: (ev) => {
    setValue(ev.target.value);
  } });
};
const InputNumericoSteps = {
  render: () => {
    return /* @__PURE__ */ e.createElement(InputNumericoStepsHooks, null);
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const InputNumericoDisabilitato = {
  render: () => {
    return /* @__PURE__ */ e.createElement(Input, { type: "number", label: "Disabled", value: "50", min: 0, max: 100, disabled: true });
  }
};
const InputNumericoValutaHooks = () => {
  const [value, setValue] = reactExports.useState("100");
  return /* @__PURE__ */ e.createElement(Input, { id: "example-currency", addonText: "€", type: "currency", label: "Currency", incrementLabel: "Aumenta il valore di 1 euro", decrementLabel: "Diminuisci il valore di 1 euro", value, step: "any", min: 3.5, max: 100, onChange: (ev) => {
    setValue(ev.target.value);
  } });
};
const InputNumericoValuta = {
  render: () => {
    return /* @__PURE__ */ e.createElement(InputNumericoValutaHooks, null);
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const InputNumericoPercentualeHooks = () => {
  const [value, setValue] = reactExports.useState("100");
  return /* @__PURE__ */ e.createElement(Input, { id: "example-percentage", addonText: "%", type: "percentage", label: "Percentage", incrementLabel: "Aumenta il valore in percentuale di 1", decrementLabel: "Diminuisci il valore in percentuale di 1", value, min: 0, max: 100, onChange: (ev) => {
    setValue(ev.target.value);
  } });
};
const InputNumericoPercentuale = {
  render: () => {
    return /* @__PURE__ */ e.createElement(InputNumericoPercentualeHooks, null);
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const InputNumericoRidimensionamentoHooks = () => {
  const [value, setValue] = reactExports.useState("100");
  return /* @__PURE__ */ e.createElement(Input, { id: "example-adaptive", type: "adaptive", label: "Ridimensionamento", incrementLabel: "Aumenta il valore  di 1", decrementLabel: "Diminuisci il valore di 1", value, placeholder: "0", min: 0, max: 99999999999, onChange: (ev) => {
    setValue(ev.target.value);
  } });
};
const InputNumericoRidimensionamento = {
  render: () => {
    return /* @__PURE__ */ e.createElement(InputNumericoRidimensionamentoHooks, null);
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
InputNumericoDimensionamento.parameters = {
  ...InputNumericoDimensionamento.parameters,
  docs: {
    ...(_a = InputNumericoDimensionamento.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <InputNumericoDimensionamentoHooks />;\n  },\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "none"\n      }\n    }\n  }\n}',
      ...(_c = (_b = InputNumericoDimensionamento.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
InputNumericoSteps.parameters = {
  ...InputNumericoSteps.parameters,
  docs: {
    ...(_d = InputNumericoSteps.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <InputNumericoStepsHooks />;\n  },\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "none"\n      }\n    }\n  }\n}',
      ...(_f = (_e = InputNumericoSteps.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
InputNumericoDisabilitato.parameters = {
  ...InputNumericoDisabilitato.parameters,
  docs: {
    ...(_g = InputNumericoDisabilitato.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <Input type="number" label="Disabled" value="50" min={0} max={100} disabled />;\n  }\n}',
      ...(_i = (_h = InputNumericoDisabilitato.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
InputNumericoValuta.parameters = {
  ...InputNumericoValuta.parameters,
  docs: {
    ...(_j = InputNumericoValuta.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <InputNumericoValutaHooks />;\n  },\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "none"\n      }\n    }\n  }\n}',
      ...(_l = (_k = InputNumericoValuta.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
InputNumericoPercentuale.parameters = {
  ...InputNumericoPercentuale.parameters,
  docs: {
    ...(_m = InputNumericoPercentuale.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <InputNumericoPercentualeHooks />;\n  },\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "none"\n      }\n    }\n  }\n}',
      ...(_o = (_n = InputNumericoPercentuale.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
InputNumericoRidimensionamento.parameters = {
  ...InputNumericoRidimensionamento.parameters,
  docs: {
    ...(_p = InputNumericoRidimensionamento.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <InputNumericoRidimensionamentoHooks />;\n  },\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "none"\n      }\n    }\n  }\n}',
      ...(_r = (_q = InputNumericoRidimensionamento.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
const __namedExportsOrder = ["InputNumericoDimensionamento", "InputNumericoSteps", "InputNumericoDisabilitato", "InputNumericoValuta", "InputNumericoPercentuale", "InputNumericoRidimensionamento"];
const InputNumericoStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  InputNumericoDimensionamento,
  InputNumericoDisabilitato,
  InputNumericoPercentuale,
  InputNumericoRidimensionamento,
  InputNumericoSteps,
  InputNumericoValuta,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  InputNumericoStories as I,
  InputNumericoDimensionamento as a,
  InputNumericoSteps as b,
  InputNumericoValuta as c,
  InputNumericoPercentuale as d,
  InputNumericoDisabilitato as e,
  InputNumericoRidimensionamento as f
};
