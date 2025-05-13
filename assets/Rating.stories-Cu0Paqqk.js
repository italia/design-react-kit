var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { e, r as reactExports } from "./index-N7T0HPyM.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { F as FormGroup } from "./FormGroup-CBxBMrzE.js";
import { L as Label } from "./Label-BeB_moJD.js";
import { I as Input } from "./Input-DaYKPMIX.js";
import { I as Icon } from "./Icon-Dz7RaEwn.js";
import { n as noop } from "./utils-CwYUlCuU.js";
import "./track-focus-DbJ2CO43.js";
const isCustomLegendObject = (legend) => {
  return legend != null && typeof legend === "object" && "content" in legend;
};
const Rating = ({
  className,
  inputs,
  legend,
  name,
  readOnly,
  value,
  wrapperClassName,
  testId,
  labelTemplate = (value2) => `Valuta ${value2} stelle su 5`,
  onChangeRating = noop,
  ...attributes
}) => {
  const safeInputs = (inputs || []).reverse();
  const labelFn = labelTemplate;
  const onChange = readOnly ? noop : onChangeRating;
  const wrapperClasses = classNames(wrapperClassName, {
    "rating rating-read-only": readOnly,
    "rating rating-label": legend
  });
  const fieldClasses = classNames(className);
  const extraFieldAttrs = readOnly ? { "aria-hidden": true } : {};
  const isLegendString = typeof legend === "string";
  let legendClass = "";
  let legendText = legend;
  if (isCustomLegendObject(legend)) {
    legendClass = classNames({
      "visually-hidden": legend.srOnly
    });
    legendText = legend.content;
  }
  const legendContent = isCustomLegendObject(legend) || isLegendString ? /* @__PURE__ */ e.createElement("legend", { className: legendClass }, legendText) : legend;
  return /* @__PURE__ */ e.createElement(
    FormGroup,
    {
      cssModule: { "form-group": "rating" },
      tag: "fieldset",
      className: wrapperClasses,
      "data-testid": testId,
      ...attributes
    },
    legend && legendContent,
    safeInputs.map((id, i) => {
      const currentValue = 5 - i;
      return /* @__PURE__ */ e.createElement(reactExports.Fragment, { key: id }, /* @__PURE__ */ e.createElement(
        Input,
        {
          type: "radio",
          id,
          name,
          value: String(currentValue),
          cssModule: { "form-control": "" },
          className: fieldClasses,
          onChange: () => onChange(currentValue, name),
          checked: value === currentValue,
          disabled: readOnly,
          ...extraFieldAttrs
        }
      ), /* @__PURE__ */ e.createElement(Label, { className: "full", for: id }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-star-full", size: "sm", "aria-hidden": "true" }), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, labelFn(currentValue))));
    })
  );
};
Rating.__docgenInfo = { "description": "", "methods": [], "displayName": "Rating", "props": { "inputs": { "required": true, "tsType": { "name": "Array", "elements": [{ "name": "string" }], "raw": "string[]" }, "description": "La lista di 5 id, per ciascun elemento intero del Rating. La lista deve essere ordinata dal rating 1 al rating 5." }, "labelTemplate": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "(value: 1 | 2 | 3 | 4 | 5) => string", "signature": { "arguments": [{ "type": { "name": "union", "raw": "1 | 2 | 3 | 4 | 5", "elements": [{ "name": "literal", "value": "1" }, { "name": "literal", "value": "2" }, { "name": "literal", "value": "3" }, { "name": "literal", "value": "4" }, { "name": "literal", "value": "5" }] }, "name": "value" }], "return": { "name": "string" } } }, "description": 'Il campo "label" è impostato di default su "Valuta ${n} stelle su 5", ma può essere personalizzato con questa funzione che riceve il numero input come argomento `function (n: number) => string`.', "defaultValue": { "value": "(value: 1 | 2 | 3 | 4 | 5) => `Valuta ${value} stelle su 5`", "computed": false } }, "legend": { "required": false, "tsType": { "name": "union", "raw": "ReactNode | { content: ReactNode; srOnly: boolean }", "elements": [{ "name": "ReactNode" }, { "name": "signature", "type": "object", "raw": "{ content: ReactNode; srOnly: boolean }", "signature": { "properties": [{ "key": "content", "value": { "name": "ReactNode", "required": true } }, { "key": "srOnly", "value": { "name": "boolean", "required": true } }] } }] }, "description": "Da utilizzare in caso legenda principale del Rating. Passare una componente React da mostrare come legenda (all'interno del tag `<legend>`). È possibile mostrare la leggenda solo ai dispositivi screen reader" }, "name": { "required": true, "tsType": { "name": "string" }, "description": "Parametro name da dare all'input" }, "wrapperClassName": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente wrapper del Rating" }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per ciascun elemento all'interno del componente Rating" }, "onChangeRating": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "(value: 1 | 2 | 3 | 4 | 5 | number, name: string) => void", "signature": { "arguments": [{ "type": { "name": "union", "raw": "1 | 2 | 3 | 4 | 5 | number", "elements": [{ "name": "literal", "value": "1" }, { "name": "literal", "value": "2" }, { "name": "literal", "value": "3" }, { "name": "literal", "value": "4" }, { "name": "literal", "value": "5" }, { "name": "number" }] }, "name": "value" }, { "type": { "name": "string" }, "name": "name" }], "return": { "name": "void" } } }, "description": "Callback chiamata ad ogni cambio di valore di rating. Il nuovo valore ed il name verranno passati: `function (n, name) => void`", "defaultValue": { "value": "() => {}", "computed": false } }, "readOnly": { "required": false, "tsType": { "name": "boolean" }, "description": "Rende il componente read-only" }, "value": { "required": false, "tsType": { "name": "union", "raw": "1 | 2 | 3 | 4 | 5 | number", "elements": [{ "name": "literal", "value": "1" }, { "name": "literal", "value": "2" }, { "name": "literal", "value": "3" }, { "name": "literal", "value": "4" }, { "name": "literal", "value": "5" }, { "name": "number" }] }, "description": "Il valore corrente del componente: deve essere compreso tra 1 e 5" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["Omit"] };
const meta = {
  title: "Documentazione/Componenti/Rating",
  component: Rating
};
const RatingBase = {
  render: ({
    legend
  }) => {
    return /* @__PURE__ */ e.createElement(Rating, { value: 2, legend, inputs: ["star1a", "star2a", "star3a", "star4a", "star5a"], name: "ratingA" });
  },
  args: {
    legend: "Rating"
  },
  argTypes: {
    legend: {
      control: {
        type: "text"
      }
    }
  }
};
const RatingConLabelWithHooks = () => {
  const [rating, setRating] = reactExports.useState(4);
  return /* @__PURE__ */ e.createElement(Rating, { value: rating, legend: /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Valutazione"), " ", /* @__PURE__ */ e.createElement("span", null, rating, " stelle"), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "su 5")), inputs: ["star1b", "star2b", "star3b", "star4b", "star5b"], name: "ratingB", onChangeRating: setRating });
};
const RatingConLabel = {
  render: () => /* @__PURE__ */ e.createElement(RatingConLabelWithHooks, null),
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const RatingReadOnly = {
  render: () => /* @__PURE__ */ e.createElement(Rating, { value: 4, readOnly: true, legend: {
    content: "Valutazione 4 stelle su 5",
    srOnly: true
  }, inputs: ["star1c", "star2c", "star3c", "star4c", "star5c"], name: "ratingC" })
};
RatingBase.parameters = {
  ...RatingBase.parameters,
  docs: {
    ...(_a = RatingBase.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: ({\n    legend\n  }) => {\n    return <Rating value={2} legend={legend} inputs={['star1a', 'star2a', 'star3a', 'star4a', 'star5a']} name='ratingA' />;\n  },\n  args: {\n    legend: 'Rating'\n  },\n  argTypes: {\n    legend: {\n      control: {\n        type: 'text'\n      }\n    }\n  }\n}",
      ...(_c = (_b = RatingBase.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
RatingConLabel.parameters = {
  ...RatingConLabel.parameters,
  docs: {
    ...(_d = RatingConLabel.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  render: () => <RatingConLabelWithHooks />,\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "none"\n      }\n    }\n  }\n}',
      ...(_f = (_e = RatingConLabel.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
RatingReadOnly.parameters = {
  ...RatingReadOnly.parameters,
  docs: {
    ...(_g = RatingReadOnly.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => <Rating value={4} readOnly legend={{\n    content: 'Valutazione 4 stelle su 5',\n    srOnly: true\n  }} inputs={['star1c', 'star2c', 'star3c', 'star4c', 'star5c']} name='ratingC' />\n}",
      ...(_i = (_h = RatingReadOnly.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
const __namedExportsOrder = ["RatingBase", "RatingConLabel", "RatingReadOnly"];
const RatingStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  RatingBase,
  RatingConLabel,
  RatingReadOnly,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  RatingStories as R,
  RatingBase as a,
  RatingConLabel as b,
  RatingReadOnly as c,
  Rating as d
};
