var _a, _b, _c, _d, _e, _f;
import { e, r as reactExports } from "./iframe-DGcxMoyJ.js";
import { R as Row, C as Col } from "./Col-Kbz4ORpX.js";
import { F as Form } from "./Form-BUPaAZw5.js";
import { F as FormGroup } from "./FormGroup-CVtCuC0Z.js";
import { F as FormText } from "./FormText-BLDj62ws.js";
import { L as Label } from "./Label-BkfP5R3n.js";
import { A as Alert } from "./Alert-Bt5cm8P-.js";
import { A as Autocomplete } from "./Autocomplete-BExRk38u.js";
import { B as Button } from "./Button-wosI7fwo.js";
import { I as Input } from "./Input-DPclf-CR.js";
import "./track-focus-DbJ2CO43.js";
import "./preload-helper-CQrtv1eE.js";
import "./utils-_G002CXH.js";
import "./index-yYkzrc3Z.js";
import "./Fade-Bjs-95zj.js";
import "./Transition-CLiuIDXl.js";
import "./index-DtiUNGrX.js";
import "./Button-CHYK7K12.js";
import "./index-DAwvaHyD.js";
import "./Icon-DyCGQbBS.js";
import "./utils-CwYUlCuU.js";
const meta = {
  title: "Documentazione/Form/Validazione"
};
const ValidazioneBase = {
  render: () => /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(Input, { label: "Valid Input", valid: true }), /* @__PURE__ */ e.createElement(Input, { label: "Invalid Input", valid: false }), /* @__PURE__ */ e.createElement(Input, { value: "Mario", label: "First name", validationText: "Validated!", valid: true }), /* @__PURE__ */ e.createElement(Input, { label: "Username", validationText: "Please choose a username.", valid: false }), /* @__PURE__ */ e.createElement(Input, { label: "Username", infoText: "Username of your account", validationText: "Please choose a username.", valid: false }))
};
const ValidazioneCompletaHooks = () => {
  const [name, setName] = reactExports.useState("Mario");
  const [surname, setSurname] = reactExports.useState("Rossi");
  const [username, setUsername] = reactExports.useState("");
  const [region, setRegion] = reactExports.useState("");
  const [province, setProvince] = reactExports.useState("");
  const [cap, setCap] = reactExports.useState("");
  const [age, setAge] = reactExports.useState(18);
  const [date, setDate] = reactExports.useState("");
  const [time, setTime] = reactExports.useState("");
  const [termsAndConditions, setTermsAndConditions] = reactExports.useState(false);
  const regions = ["Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia Romagna", "Friuli Venezia Giulia", "Lazio", "Liguria", "Lombardia", "Marche", "Molise", "Piemonte", "Puglia", "Sardegna", "Sicilia", "Toscana", "Trentino Alto Adige", "Umbria", "Valle d'Aosta", "Veneto"];
  const suggest = (query, syncResults) => {
    syncResults(query ? regions.filter(function(result) {
      return result.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    }) : []);
  };
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(Form, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(FormGroup, { className: "col-md-3 mb-3" }, /* @__PURE__ */ e.createElement(Input, { id: "completeValidation-name", type: "text", value: name, label: "Nome", validationText: "Validato!", valid: name != "", onChange: (e2) => setName(e2.target.value) })), /* @__PURE__ */ e.createElement(FormGroup, { className: "col-md-3 mb-3" }, /* @__PURE__ */ e.createElement(Input, { id: "completeValidation-surname", type: "text", value: surname, label: "Cognome", validationText: "Validato!", valid: surname != "", onChange: (e2) => setSurname(e2.target.value) })), /* @__PURE__ */ e.createElement(FormGroup, { className: "col-md-3 mb-3" }, /* @__PURE__ */ e.createElement(Input, { id: "completeValidation-username", type: "text", value: username, label: "Username", validationText: "Questo campo è richiesto", valid: username != "", onChange: (e2) => setUsername(e2.target.value) })), /* @__PURE__ */ e.createElement(FormGroup, { className: "col-md-3 mb-3" }, /* @__PURE__ */ e.createElement(Input, { id: "completeValidation-age", type: "number", value: age, label: "Età (minimo 18 anni)", validationText: "Questo campo è richiesto", valid: age >= 18, onChange: (e2) => setAge(parseInt(e2.target.value)) }))), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(FormGroup, { className: "col-md-6 mb-6" }, /* @__PURE__ */ e.createElement(Input, { id: "completeValidation-date", type: "date", value: date, label: "Date picker", validationText: "Questo campo è richiesto", valid: date != "", onChange: (e2) => setDate(e2.target.value) })), /* @__PURE__ */ e.createElement(FormGroup, { className: "col-md-6 mb-6" }, /* @__PURE__ */ e.createElement(Input, { id: "completeValidation-time", type: "time", value: time, label: "Time picker", validationText: "Questo campo è richiesto", valid: time != "", onChange: (e2) => setTime(e2.target.value) }))), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(FormGroup, { className: "form-group col-md-4 mb-3" }, /* @__PURE__ */ e.createElement(Autocomplete, { id: 'completeValidation-region"', label: "Regione", source: suggest, tNoResults: () => "Nessun risultato", valid: regions.includes(region), validationText: "Per favore inserisci una regione valida.", onConfirm: (region2) => {
    setRegion(region2);
  } })), /* @__PURE__ */ e.createElement(FormGroup, { className: "col-md-4 mb-3" }, /* @__PURE__ */ e.createElement(Input, { id: "completeValidation-province", type: "text", value: province, label: "Provincia", validationText: "Per favore inserisci un nome di provincia valida.", valid: province != "", onChange: (e2) => setProvince(e2.target.value) })), /* @__PURE__ */ e.createElement(FormGroup, { className: "col-md-4 mb-3" }, /* @__PURE__ */ e.createElement(Input, { id: "completeValidation-cap", type: "text", value: cap, label: "CAP (5 cifre)", validationText: "Questo campo è richiesto", valid: cap != "", onChange: (e2) => setCap(e2.target.value) }))), /* @__PURE__ */ e.createElement(Row, { className: "align-items-center" }, /* @__PURE__ */ e.createElement(Col, { md: "9", lg: "6" }, /* @__PURE__ */ e.createElement(FormGroup, { check: true }, /* @__PURE__ */ e.createElement(Input, { id: "termsAndConditions", type: "checkbox", checked: termsAndConditions, onChange: () => setTermsAndConditions(!termsAndConditions), valid: termsAndConditions }), /* @__PURE__ */ e.createElement(Label, { for: "termsAndConditions", check: true }, "Accetto i termini e condizioni"), /* @__PURE__ */ e.createElement(FormText, { tag: "div" }, "Devi accettare i termini e le condizioni prima di inviare il modulo."))), /* @__PURE__ */ e.createElement(Col, { md: "3", lg: "6", className: "mt-3 mt-md-0 d-flex justify-content-center justify-content-md-end justify-content-lg-start" }, /* @__PURE__ */ e.createElement(Button, { color: "primary", type: "submit" }, "Invia")))), /* @__PURE__ */ e.createElement(Row, { className: "mt-4" }, /* @__PURE__ */ e.createElement(Col, null, /* @__PURE__ */ e.createElement(Alert, { color: "danger" }, /* @__PURE__ */ e.createElement("strong", null, "Attenzione"), " Alcuni campi inseriti sono da controllare."))));
};
const ValidazioneCompleta = {
  render: () => {
    return /* @__PURE__ */ e.createElement(ValidazioneCompletaHooks, null);
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
ValidazioneBase.parameters = {
  ...ValidazioneBase.parameters,
  docs: {
    ...(_a = ValidazioneBase.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <div>\n      <Input label='Valid Input' valid />\n      <Input label='Invalid Input' valid={false} />\n      <Input value='Mario' label='First name' validationText='Validated!' valid />\n      <Input label='Username' validationText='Please choose a username.' valid={false} />\n      <Input label='Username' infoText='Username of your account' validationText='Please choose a username.' valid={false} />\n    </div>\n}",
      ...(_c = (_b = ValidazioneBase.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
ValidazioneCompleta.parameters = {
  ...ValidazioneCompleta.parameters,
  docs: {
    ...(_d = ValidazioneCompleta.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <ValidazioneCompletaHooks />;\n  },\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: 'none'\n      }\n    }\n  }\n}",
      ...(_f = (_e = ValidazioneCompleta.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["ValidazioneBase", "ValidazioneCompleta"];
export {
  ValidazioneBase,
  ValidazioneCompleta,
  __namedExportsOrder,
  meta as default
};
