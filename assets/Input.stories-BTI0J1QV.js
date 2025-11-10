var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J;
import { e, r as reactExports } from "./iframe-DGcxMoyJ.js";
import { F as FormGroup } from "./FormGroup-CVtCuC0Z.js";
import { A as Autocomplete } from "./Autocomplete-BExRk38u.js";
import { B as Button } from "./Button-wosI7fwo.js";
import { I as Icon } from "./Icon-DyCGQbBS.js";
import { u as useFocus, g as getValidationTextControlClass, a as getFormControlClass, b as getClasses, c as InputContainer, I as Input } from "./Input-DPclf-CR.js";
import "./track-focus-DbJ2CO43.js";
const TextArea = ({
  id,
  className,
  cssModule,
  innerRef,
  label,
  validationText,
  infoText,
  placeholder,
  normalized,
  value,
  wrapperClassName: originalWrapperClass,
  valid,
  testId,
  ...attributes
}) => {
  const { toggleFocusLabel, toggleBlurLabel, isFocused } = useFocus({
    onFocus: attributes.onFocus,
    onBlur: attributes.onBlur
  });
  const validationTextControlClass = getValidationTextControlClass({ valid }, cssModule);
  const extraAttributes = {};
  const formControlClass = getFormControlClass({}, cssModule);
  const infoId = id ? `${id}Description` : void 0;
  if (id) {
    extraAttributes["aria-describedby"] = infoId;
  }
  const { activeClass, extraLabelClass, validationTextClass, inputClasses, wrapperClass } = getClasses(
    className,
    "textarea",
    {
      valid,
      placeholder,
      value,
      label,
      validationText,
      normalized: Boolean(normalized),
      formControlClass,
      validationTextControlClass,
      isFocused,
      originalWrapperClass
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
  if (placeholder) {
    return /* @__PURE__ */ e.createElement(InputContainer, { ...containerProps }, /* @__PURE__ */ e.createElement(
      "textarea",
      {
        ...attributes,
        ...extraAttributes,
        ...sharedAttributes,
        className: inputClasses,
        placeholder,
        "data-testid": testId
      }
    ));
  }
  if (normalized) {
    return /* @__PURE__ */ e.createElement(InputContainer, { ...containerProps }, /* @__PURE__ */ e.createElement(
      "textarea",
      {
        ...attributes,
        ...extraAttributes,
        ...sharedAttributes,
        className: inputClasses,
        readOnly: true,
        "data-testid": testId
      }
    ));
  }
  if (label || validationText) {
    return /* @__PURE__ */ e.createElement(InputContainer, { ...containerProps }, /* @__PURE__ */ e.createElement(
      "textarea",
      {
        ...attributes,
        ...extraAttributes,
        ...sharedAttributes,
        className: inputClasses,
        "data-testid": testId
      }
    ));
  }
  return /* @__PURE__ */ e.createElement(
    "textarea",
    {
      ...attributes,
      ...extraAttributes,
      className: inputClasses,
      ...sharedAttributes,
      ref: innerRef,
      "data-testid": testId
    }
  );
};
TextArea.__docgenInfo = { "description": "", "methods": [], "displayName": "TextArea", "props": { "label": { "required": false, "tsType": { "name": "union", "raw": "string | ReactNode", "elements": [{ "name": "string" }, { "name": "ReactNode" }] }, "description": "Etichetta del campo TextArea." }, "placeholder": { "required": false, "tsType": { "name": "string" }, "description": "Testo di esempio da utilizzare per il campo." }, "validationText": { "required": false, "tsType": { "name": "string" }, "description": "Testo di validazione per l'elemento del moduleo" }, "infoText": { "required": false, "tsType": { "name": "string" }, "description": "Testo di aiuto per l'elemento del moduleo form. Richiede che il componente `TextArea` abbia la prop `id` impostata." }, "value": { "required": false, "tsType": { "name": "union", "raw": "string | number", "elements": [{ "name": "string" }, { "name": "number" }] }, "description": "Il valore nel campo TextArea." }, "readOnly": { "required": false, "tsType": { "name": "boolean" }, "description": "Da utilizzare per impedire la modifica del valore contenuto." }, "normalized": { "required": false, "tsType": { "name": "boolean" }, "description": "Associato all'attributo readOnly mostra il campo con lo stile classico, mantenento lo stato di sola lettura." }, "valid": { "required": false, "tsType": { "name": "boolean" }, "description": "Utilizzare per mostrare il successo nella validazione del valore nel campo TextArea" }, "innerRef": { "required": false, "tsType": { "name": "Ref", "elements": [{ "name": "HTMLTextAreaElement" }], "raw": "Ref<HTMLTextAreaElement>" }, "description": "" }, "cssModule": { "required": false, "tsType": { "name": "CSSModule" }, "description": "Oggetto contenente la nuova mappatura per le classi CSS." }, "wrapperClassName": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il wrapper del componente TextArea" }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente TextArea" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["TextareaHTMLAttributes"] };
const meta = {
  title: "Documentazione/Form/Input",
  component: Input
};
const EsempiDiCampiDiInput = {
  render: () => {
    return /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(Input, { type: "text", label: "Campo di tipo testuale", id: "exampleInputText" }), /* @__PURE__ */ e.createElement(Input, { type: "text", label: "Campo di tipo testuale con descrizione", infoText: "Questo campo contiene anche una descrizione", id: "exampleInputTextInfo" }), /* @__PURE__ */ e.createElement(Input, { type: "email", label: "Campo di tipo email", id: "exampleInputEmail" }), /* @__PURE__ */ e.createElement(Input, { type: "number", label: "Campo di tipo numerico", id: "exampleInputNumber", incrementLabel: "Aumenta il valore di 1", decrementLabel: "Diminuisci il valore di 1" }), /* @__PURE__ */ e.createElement(Input, { type: "tel", label: "Campo di tipo telefono", id: "exampleInputTel" }));
  }
};
const UtilizzoDiPlaceholderELabel = {
  render: () => /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(Input, { label: "Etichetta di esempio", id: "exampleLabel" }), /* @__PURE__ */ e.createElement(Input, { label: "Etichetta di esempio", type: "text", placeholder: "Testo di esempio", id: "examplePlaceholder" }), /* @__PURE__ */ e.createElement(Input, { label: "Etichetta di esempio", type: "text", placeholder: "Testo di esempio", infoText: "Ulteriore testo informativo", id: "exampleInfoText" }), /* @__PURE__ */ e.createElement(Input, { label: "Etichetta di esempio", type: "text", placeholder: "Testo di esempio", validationText: "Campo non valido", id: "examplevalidationText", valid: false }))
};
const InputConIconaOBottoni = {
  render: () => {
    return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(Input, { id: "exampleInputIcon", label: "Campo di tipo testuale", type: "text", hasIconLeft: true, iconLeft: /* @__PURE__ */ e.createElement(Icon, { icon: "it-pencil", "aria-hidden": true, size: "sm" }) }), /* @__PURE__ */ e.createElement(Input, { id: "exampleInputIconDanger", label: "Con etichetta e placeholder", placeholder: "Lorem Ipsum", type: "text", hasIconLeft: true, iconLeft: /* @__PURE__ */ e.createElement(Icon, { icon: "it-pencil", "aria-hidden": true, color: "danger", size: "sm" }) }), /* @__PURE__ */ e.createElement(Input, { id: "exampleInputButton", label: "Con etichetta e bottone di tipo primary", type: "text", hasIconLeft: true, iconLeft: /* @__PURE__ */ e.createElement(Icon, { icon: "it-pencil", color: "primary", "aria-hidden": true, size: "sm" }), hasButtonRight: true, buttonRight: /* @__PURE__ */ e.createElement(Button, { color: "primary" }, "Invio") }));
  }
};
const InputPassword = {
  args: {
    type: "password",
    id: "exampleInputPassword",
    label: "Password con label, placeholder e testo di aiuto",
    infoText: "Inserisci almeno 8 caratteri e una lettera maiuscola"
  }
};
const Disabilitato = {
  args: {
    label: "Contenuto disabilitato",
    id: "exampleDisabled",
    disabled: true
  }
};
const Readonly = {
  args: {
    label: "Contenuto in sola lettura",
    id: "examplereadOnly",
    readOnly: true
  }
};
const ReadonlyNormalizzato = {
  args: {
    type: "text",
    label: "Contenuto in sola lettura",
    id: "exampleNormalized",
    normalized: true
  }
};
const _InputAutocompleteConDatiAccessibile = {
  render: () => {
    const suggest = (query, syncResults) => {
      const results = ["Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia Romagna", "Friuli Venezia Giulia", "Lazio", "Liguria", "Lombardia", "Marche", "Molise", "Piemonte", "Puglia", "Sardegna", "Sicilia", "Toscana", "Trentino Alto Adige", "Umbria", "Valle d'Aosta", "Veneto"];
      syncResults(query ? results.filter(function(result) {
        return result.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      }) : []);
    };
    return /* @__PURE__ */ e.createElement(FormGroup, { className: "form-group" }, /* @__PURE__ */ e.createElement(Autocomplete, { id: "autocomplete", label: "Regione", source: suggest, tNoResults: () => "Nessun risultato" }));
  }
};
const AreaDiTesto = {
  render: () => /* @__PURE__ */ e.createElement(TextArea, { label: "Esempio di area di testo", rows: 3 })
};
const AreaDiTestoConSegnaposto = {
  render: () => /* @__PURE__ */ e.createElement(TextArea, { rows: 3, label: "Esempio di area di testo", placeholder: "Testo di esempio", id: "example-textarea-placeholder" })
};
const InputDatepickerHooks = () => {
  const [value, setValue] = reactExports.useState("");
  return /* @__PURE__ */ e.createElement(Input, { type: "date", label: "Datepicker", className: "active", placeholder: "22/12/2023", value, onChange: (ev) => {
    setValue(ev.target.value);
  } });
};
const InputDatepicker = {
  render: () => {
    return /* @__PURE__ */ e.createElement(InputDatepickerHooks, null);
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const InputHourpickerHooks = () => {
  const [value, setValue] = reactExports.useState("");
  return /* @__PURE__ */ e.createElement(Input, { type: "time", label: "Hourpicker", className: "active", value, onChange: (ev) => {
    setValue(ev.target.value);
  } });
};
const InputHourpicker = {
  render: () => {
    return /* @__PURE__ */ e.createElement(InputHourpickerHooks, null);
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
EsempiDiCampiDiInput.parameters = {
  ...EsempiDiCampiDiInput.parameters,
  docs: {
    ...(_a = EsempiDiCampiDiInput.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  render: () => {
    return <div>
        <Input type='text' label='Campo di tipo testuale' id='exampleInputText' />
        <Input type='text' label='Campo di tipo testuale con descrizione' infoText='Questo campo contiene anche una descrizione' id='exampleInputTextInfo' />
        <Input type='email' label='Campo di tipo email' id='exampleInputEmail' />
        <Input type='number' label='Campo di tipo numerico' id='exampleInputNumber' incrementLabel="Aumenta il valore di 1" decrementLabel="Diminuisci il valore di 1" />
        <Input type='tel' label='Campo di tipo telefono' id='exampleInputTel' />
      </div>;
  }
}`,
      ...(_c = (_b = EsempiDiCampiDiInput.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
UtilizzoDiPlaceholderELabel.parameters = {
  ...UtilizzoDiPlaceholderELabel.parameters,
  docs: {
    ...(_d = UtilizzoDiPlaceholderELabel.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => <div>\n      <Input label='Etichetta di esempio' id='exampleLabel' />\n      <Input label='Etichetta di esempio' type='text' placeholder='Testo di esempio' id='examplePlaceholder' />\n      <Input label='Etichetta di esempio' type='text' placeholder='Testo di esempio' infoText='Ulteriore testo informativo' id='exampleInfoText' />\n      <Input label='Etichetta di esempio' type='text' placeholder='Testo di esempio' validationText='Campo non valido' id='examplevalidationText' valid={false} />\n    </div>\n}",
      ...(_f = (_e = UtilizzoDiPlaceholderELabel.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
InputConIconaOBottoni.parameters = {
  ...InputConIconaOBottoni.parameters,
  docs: {
    ...(_g = InputConIconaOBottoni.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <>\n        <Input id='exampleInputIcon' label='Campo di tipo testuale' type='text' hasIconLeft iconLeft={<Icon icon='it-pencil' aria-hidden size='sm' />} />\n        <Input id='exampleInputIconDanger' label='Con etichetta e placeholder' placeholder='Lorem Ipsum' type='text' hasIconLeft iconLeft={<Icon icon='it-pencil' aria-hidden color='danger' size='sm' />} />\n        <Input id='exampleInputButton' label='Con etichetta e bottone di tipo primary' type='text' hasIconLeft iconLeft={<Icon icon='it-pencil' color='primary' aria-hidden size='sm' />} hasButtonRight buttonRight={<Button color='primary'>Invio</Button>} />\n      </>;\n  }\n}",
      ...(_i = (_h = InputConIconaOBottoni.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
InputPassword.parameters = {
  ...InputPassword.parameters,
  docs: {
    ...(_j = InputPassword.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  args: {\n    type: 'password',\n    id: 'exampleInputPassword',\n    label: 'Password con label, placeholder e testo di aiuto',\n    infoText: 'Inserisci almeno 8 caratteri e una lettera maiuscola'\n  }\n}",
      ...(_l = (_k = InputPassword.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Disabilitato.parameters = {
  ...Disabilitato.parameters,
  docs: {
    ...(_m = Disabilitato.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  args: {\n    label: 'Contenuto disabilitato',\n    id: 'exampleDisabled',\n    disabled: true\n  }\n}",
      ...(_o = (_n = Disabilitato.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
Readonly.parameters = {
  ...Readonly.parameters,
  docs: {
    ...(_p = Readonly.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  args: {\n    label: 'Contenuto in sola lettura',\n    id: 'examplereadOnly',\n    readOnly: true\n  }\n}",
      ...(_r = (_q = Readonly.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
ReadonlyNormalizzato.parameters = {
  ...ReadonlyNormalizzato.parameters,
  docs: {
    ...(_s = ReadonlyNormalizzato.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  args: {\n    type: 'text',\n    label: 'Contenuto in sola lettura',\n    id: 'exampleNormalized',\n    normalized: true\n  }\n}",
      ...(_u = (_t = ReadonlyNormalizzato.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
_InputAutocompleteConDatiAccessibile.parameters = {
  ..._InputAutocompleteConDatiAccessibile.parameters,
  docs: {
    ...(_v = _InputAutocompleteConDatiAccessibile.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: "{\n  render: () => {\n    const suggest = (query: string, syncResults: (p: string[]) => void) => {\n      const results = ['Abruzzo', 'Basilicata', 'Calabria', 'Campania', 'Emilia Romagna', 'Friuli Venezia Giulia', 'Lazio', 'Liguria', 'Lombardia', 'Marche', 'Molise', 'Piemonte', 'Puglia', 'Sardegna', 'Sicilia', 'Toscana', 'Trentino Alto Adige', 'Umbria', 'Valle d\\'Aosta', 'Veneto'];\n      syncResults(query ? results.filter(function (result) {\n        return result.toLowerCase().indexOf(query.toLowerCase()) !== -1;\n      }) : []);\n    };\n    return <FormGroup className='form-group'>\n        <Autocomplete id='autocomplete' label='Regione' source={suggest} tNoResults={() => 'Nessun risultato'} />\n      </FormGroup>;\n  }\n}",
      ...(_x = (_w = _InputAutocompleteConDatiAccessibile.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
AreaDiTesto.parameters = {
  ...AreaDiTesto.parameters,
  docs: {
    ...(_y = AreaDiTesto.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: "{\n  render: () => <TextArea label='Esempio di area di testo' rows={3} />\n}",
      ...(_A = (_z = AreaDiTesto.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
AreaDiTestoConSegnaposto.parameters = {
  ...AreaDiTestoConSegnaposto.parameters,
  docs: {
    ...(_B = AreaDiTestoConSegnaposto.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: "{\n  render: () => <TextArea rows={3} label='Esempio di area di testo' placeholder='Testo di esempio' id='example-textarea-placeholder' />\n}",
      ...(_D = (_C = AreaDiTestoConSegnaposto.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
InputDatepicker.parameters = {
  ...InputDatepicker.parameters,
  docs: {
    ...(_E = InputDatepicker.parameters) == null ? void 0 : _E.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <InputDatepickerHooks />;\n  },\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: 'none'\n      }\n    }\n  }\n}",
      ...(_G = (_F = InputDatepicker.parameters) == null ? void 0 : _F.docs) == null ? void 0 : _G.source
    }
  }
};
InputHourpicker.parameters = {
  ...InputHourpicker.parameters,
  docs: {
    ...(_H = InputHourpicker.parameters) == null ? void 0 : _H.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <InputHourpickerHooks />;\n  },\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: 'none'\n      }\n    }\n  }\n}",
      ...(_J = (_I = InputHourpicker.parameters) == null ? void 0 : _I.docs) == null ? void 0 : _J.source
    }
  }
};
const __namedExportsOrder = ["EsempiDiCampiDiInput", "UtilizzoDiPlaceholderELabel", "InputConIconaOBottoni", "InputPassword", "Disabilitato", "Readonly", "ReadonlyNormalizzato", "_InputAutocompleteConDatiAccessibile", "AreaDiTesto", "AreaDiTestoConSegnaposto", "InputDatepicker", "InputHourpicker"];
const InputStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AreaDiTesto,
  AreaDiTestoConSegnaposto,
  Disabilitato,
  EsempiDiCampiDiInput,
  InputConIconaOBottoni,
  InputDatepicker,
  InputHourpicker,
  InputPassword,
  Readonly,
  ReadonlyNormalizzato,
  UtilizzoDiPlaceholderELabel,
  _InputAutocompleteConDatiAccessibile,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  AreaDiTesto as A,
  Disabilitato as D,
  EsempiDiCampiDiInput as E,
  InputStories as I,
  Readonly as R,
  UtilizzoDiPlaceholderELabel as U,
  _InputAutocompleteConDatiAccessibile as _,
  InputConIconaOBottoni as a,
  InputPassword as b,
  ReadonlyNormalizzato as c,
  InputHourpicker as d,
  InputDatepicker as e,
  AreaDiTestoConSegnaposto as f
};
