var _a, _b, _c, _d, _e, _f;
import { e, r as reactExports } from "./index-BehpJNG5.js";
import { R as Row, C as Col } from "./Col-DlU8lCnt.js";
import { F as Form } from "./Form-IWuVEK-s.js";
import { F as FormGroup } from "./FormGroup-BKi20UUN.js";
import { F as FormText } from "./FormText-8bjBekMJ.js";
import { L as Label } from "./Label-BiPf8UIS.js";
import { A as Alert } from "./Alert-DJEUAWBD.js";
import { B as Button } from "./Button-BVZxHsm7.js";
import { I as Input } from "./Input-Cuq_2t4X.js";
import "./track-focus-DbJ2CO43.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./utils-CruPskUV.js";
import "./index-D3ELxcOV.js";
import "./Fade-BZ6Dtg_A.js";
import "./Transition-D0u52PR9.js";
import "./index-DmVNLg0t.js";
import "./Button-Bz_c481c.js";
import "./index-DH28g3wf.js";
import "./Icon-ruXWv551.js";
import "./iframe-Blg4YaEd.js";
import "../sb-preview/runtime.js";
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
  const [city, setCity] = reactExports.useState("");
  const [province, setProvince] = reactExports.useState("");
  const [cap, setCap] = reactExports.useState("");
  const [age, setAge] = reactExports.useState(18);
  const [termsAndConditions, setTermsAndConditions] = reactExports.useState(false);
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(Form, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(FormGroup, { className: "col-md-3 mb-3" }, /* @__PURE__ */ e.createElement(Input, { id: "completeValidation-name", type: "text", value: name, label: "Nome", validationText: "Validato!", valid: true, onChange: (e2) => setName(e2.target.value) })), /* @__PURE__ */ e.createElement(FormGroup, { className: "col-md-3 mb-3" }, /* @__PURE__ */ e.createElement(Input, { id: "completeValidation-surname", type: "text", value: surname, label: "Cognome", validationText: "Validato!", valid: true, onChange: (e2) => setSurname(e2.target.value) })), /* @__PURE__ */ e.createElement(FormGroup, { className: "col-md-3 mb-3" }, /* @__PURE__ */ e.createElement(Input, { id: "completeValidation-username", type: "text", value: username, label: "Username", validationText: "Questo campo è richiesto", valid: false, onChange: (e2) => setUsername(e2.target.value) })), /* @__PURE__ */ e.createElement(FormGroup, { className: "col-md-3 mb-3" }, /* @__PURE__ */ e.createElement(Input, { id: "completeValidation-age", type: "number", value: age, label: "Età (minimo 18 anni)", validationText: "Questo campo è richiesto", valid: age >= 18, onChange: (e2) => setAge(parseInt(e2.target.value)) }))), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(FormGroup, { className: "col-md-6 mb-6" }, /* @__PURE__ */ e.createElement(Input, { id: "completeValidation-date", type: "date", label: "Date picker", validationText: "Questo campo è richiesto", valid: false })), /* @__PURE__ */ e.createElement(FormGroup, { className: "col-md-6 mb-6" }, /* @__PURE__ */ e.createElement(Input, { id: "completeValidation-time", type: "time", label: "Time picker", validationText: "Questo campo è richiesto", valid: false }))), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(FormGroup, { className: "col-md-6 mb-3" }, /* @__PURE__ */ e.createElement(Input, { id: "completeValidation-city", type: "text", value: city, label: "Città", validationText: "Questo campo è richiesto", valid: false, onChange: (e2) => setCity(e2.target.value) })), /* @__PURE__ */ e.createElement(FormGroup, { className: "col-md-3 mb-3" }, /* @__PURE__ */ e.createElement(Input, { id: "completeValidation-province", type: "text", value: province, label: "Provincia", validationText: "Per favore inserisci un nome di provincia valida.", valid: false, onChange: (e2) => setProvince(e2.target.value) })), /* @__PURE__ */ e.createElement(FormGroup, { className: "col-md-3 mb-3" }, /* @__PURE__ */ e.createElement(Input, { id: "completeValidation-cap", type: "text", value: cap, label: "CAP (5 cifre)", validationText: "Questo campo è richiesto", valid: false, onChange: (e2) => setCap(e2.target.value) }))), /* @__PURE__ */ e.createElement(Row, { className: "align-items-center" }, /* @__PURE__ */ e.createElement(Col, { md: "9", lg: "6" }, /* @__PURE__ */ e.createElement(FormGroup, { check: true }, /* @__PURE__ */ e.createElement(Input, { id: "termsAndConditions", type: "checkbox", checked: termsAndConditions, onChange: () => setTermsAndConditions(!termsAndConditions), valid: termsAndConditions }), /* @__PURE__ */ e.createElement(Label, { for: "termsAndConditions", check: true }, "Accetto i termini e condizioni"), /* @__PURE__ */ e.createElement(FormText, { tag: "div" }, "Devi accettare i termini e le condizioni prima di inviare il modulo."))), /* @__PURE__ */ e.createElement(Col, { md: "3", lg: "6", className: "mt-3 mt-md-0 d-flex justify-content-center justify-content-md-end justify-content-lg-start" }, /* @__PURE__ */ e.createElement(Button, { color: "primary", type: "submit" }, "Invia")))), /* @__PURE__ */ e.createElement(Row, { className: "mt-4" }, /* @__PURE__ */ e.createElement(Col, null, /* @__PURE__ */ e.createElement(Alert, { color: "danger" }, /* @__PURE__ */ e.createElement("strong", null, "Attenzione"), " Alcuni campi inseriti sono da controllare."))));
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
      originalSource: '{\n  render: () => <div>\n            <Input label="Valid Input" valid />\n            <Input label="Invalid Input" valid={false} />\n            <Input value="Mario" label="First name" validationText="Validated!" valid />\n            <Input label="Username" validationText="Please choose a username." valid={false} />\n            <Input label="Username" infoText="Username of your account" validationText="Please choose a username." valid={false} />\n        </div>\n}',
      ...(_c = (_b = ValidazioneBase.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
ValidazioneCompleta.parameters = {
  ...ValidazioneCompleta.parameters,
  docs: {
    ...(_d = ValidazioneCompleta.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <ValidazioneCompletaHooks />;\n  },\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "none"\n      }\n    }\n  }\n}',
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
