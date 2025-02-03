var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { e } from "./index-BehpJNG5.js";
import { B as Button } from "./Button-BVZxHsm7.js";
import { I as Icon } from "./Icon-BAflhtPf.js";
import { P as Progress } from "./Progress-CV0oZVXg.js";
import { S as StepperContainer, a as StepperContent, b as StepperNav } from "./StepperNav-B1-znkkM.js";
import { S as StepperDots } from "./StepperDots-CAnCzpbE.js";
import "./track-focus-DbJ2CO43.js";
import "./_commonjsHelpers-DWwsNxpa.js";
import "./index-D3ELxcOV.js";
import "./Button-Bz_c481c.js";
import "./utils-CruPskUV.js";
import "./iframe-C494kVoV.js";
import "../sb-preview/runtime.js";
import "./index-DH28g3wf.js";
import "./utils-CwYUlCuU.js";
const meta = {
  title: "Documentazione/Componenti/Stepper/Mobile - dark version",
  component: StepperContainer
};
const ProgressBarDark = () => {
  return /* @__PURE__ */ e.createElement(StepperContainer, { mobile: true, dark: true }, /* @__PURE__ */ e.createElement(StepperContent, { dark: true }, /* @__PURE__ */ e.createElement("p", null, "Contenuto di esempio dello step corrente")), /* @__PURE__ */ e.createElement(StepperNav, null, /* @__PURE__ */ e.createElement(Button, { outline: true, color: "primary", size: "sm", className: "steppers-btn-prev" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-left", color: "primary" }), "Indietro"), /* @__PURE__ */ e.createElement("div", { className: "steppers-progress" }, /* @__PURE__ */ e.createElement(Progress, { indeterminate: false, value: "33", tag: "div", style: {
    width: "33%"
  } })), /* @__PURE__ */ e.createElement(Button, { outline: true, color: "primary", size: "sm", className: "steppers-btn-next" }, "Avanti", /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-right", color: "primary" }))));
};
const PalliniDark = () => {
  return /* @__PURE__ */ e.createElement(StepperContainer, { mobile: true, dark: true }, /* @__PURE__ */ e.createElement(StepperContent, { dark: true }, /* @__PURE__ */ e.createElement("p", null, "Contenuto di esempio dello step corrente")), /* @__PURE__ */ e.createElement(StepperNav, null, /* @__PURE__ */ e.createElement(Button, { outline: true, color: "primary", size: "sm", className: "steppers-btn-prev" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-left", color: "primary" }), "Indietro"), /* @__PURE__ */ e.createElement(StepperDots, null, /* @__PURE__ */ e.createElement("li", { className: "done" }, /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Step 1 di 6 - Confermato")), /* @__PURE__ */ e.createElement("li", { className: "done" }, /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Step 2 di 6 - Confermato")), /* @__PURE__ */ e.createElement("li", { className: "done" }, /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Step 3 di 6 - Confermato")), /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Step 4 di 6")), /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Step 5 di 6")), /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Step 6 di 6"))), /* @__PURE__ */ e.createElement(Button, { outline: true, color: "primary", size: "sm", className: "steppers-btn-next" }, "Avanti", /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-right", color: "primary" }))));
};
const SaveButtonDark = () => {
  return /* @__PURE__ */ e.createElement(StepperContainer, { mobile: true, dark: true }, /* @__PURE__ */ e.createElement(StepperContent, { dark: true }, /* @__PURE__ */ e.createElement("p", null, "Contenuto di esempio dello step corrente")), /* @__PURE__ */ e.createElement(StepperNav, null, /* @__PURE__ */ e.createElement(Button, { outline: true, color: "primary", size: "sm", className: "steppers-btn-prev" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-left" }), "Indietro"), /* @__PURE__ */ e.createElement(Button, { color: "primary", size: "sm", className: "steppers-btn-save" }, "Salva"), /* @__PURE__ */ e.createElement(Button, { outline: true, color: "primary", size: "sm", className: "stepper-btn-next" }, "Avanti", /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-right" }))));
};
const ConfirmButtonDark = () => {
  return /* @__PURE__ */ e.createElement(StepperContainer, { mobile: true, dark: true }, /* @__PURE__ */ e.createElement(StepperContent, { dark: true }, /* @__PURE__ */ e.createElement("p", null, "Contenuto di esempio dello step corrente")), /* @__PURE__ */ e.createElement(StepperNav, null, /* @__PURE__ */ e.createElement(Button, { outline: true, color: "primary", size: "sm", className: "steppers-btn-prev" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-left" }), "Indietro"), /* @__PURE__ */ e.createElement(Button, { color: "primary", size: "sm", className: "steppers-btn-confirm" }, "Conferma")));
};
ProgressBarDark.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ProgressBarDark"
};
PalliniDark.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "PalliniDark"
};
SaveButtonDark.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SaveButtonDark"
};
ConfirmButtonDark.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ConfirmButtonDark"
};
ProgressBarDark.parameters = {
  ...ProgressBarDark.parameters,
  docs: {
    ...(_a = ProgressBarDark.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '() => {\n  return <StepperContainer mobile dark>\n            <StepperContent dark>\n                <p>Contenuto di esempio dello step corrente</p>\n            </StepperContent>\n            <StepperNav>\n                <Button outline color="primary" size="sm" className="steppers-btn-prev">\n                    <Icon icon="it-chevron-left" color="primary" />\n                    Indietro\n                </Button>\n                <div className="steppers-progress">\n                    <Progress indeterminate={false} value="33" tag="div" style={{\n          width: "33%"\n        }} />\n                </div>\n                <Button outline color="primary" size="sm" className="steppers-btn-next">\n                    Avanti\n                    <Icon icon="it-chevron-right" color="primary" />\n                </Button>\n            </StepperNav>\n        </StepperContainer>;\n}',
      ...(_c = (_b = ProgressBarDark.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
PalliniDark.parameters = {
  ...PalliniDark.parameters,
  docs: {
    ...(_d = PalliniDark.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '() => {\n  return <StepperContainer mobile dark>\n            <StepperContent dark>\n                <p>Contenuto di esempio dello step corrente</p>\n            </StepperContent>\n            <StepperNav>\n                <Button outline color="primary" size="sm" className="steppers-btn-prev">\n                    <Icon icon="it-chevron-left" color="primary" />\n                    Indietro\n                </Button>\n                <StepperDots>\n                    <li className="done">\n                        <span className="visually-hidden">Step 1 di 6 - Confermato</span>\n                    </li>\n                    <li className="done">\n                        <span className="visually-hidden">Step 2 di 6 - Confermato</span>\n                    </li>\n                    <li className="done">\n                        <span className="visually-hidden">Step 3 di 6 - Confermato</span>\n                    </li>\n                    <li>\n                        <span className="visually-hidden">Step 4 di 6</span>\n                    </li>\n                    <li>\n                        <span className="visually-hidden">Step 5 di 6</span>\n                    </li>\n                    <li>\n                        <span className="visually-hidden">Step 6 di 6</span>\n                    </li>\n                </StepperDots>\n                <Button outline color="primary" size="sm" className="steppers-btn-next">\n                    Avanti\n                    <Icon icon="it-chevron-right" color="primary" />\n                </Button>\n            </StepperNav>\n        </StepperContainer>;\n}',
      ...(_f = (_e = PalliniDark.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
SaveButtonDark.parameters = {
  ...SaveButtonDark.parameters,
  docs: {
    ...(_g = SaveButtonDark.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '() => {\n  return <StepperContainer mobile dark>\n            <StepperContent dark>\n                <p>Contenuto di esempio dello step corrente</p>\n            </StepperContent>\n            <StepperNav>\n                <Button outline color="primary" size="sm" className="steppers-btn-prev">\n                    <Icon icon="it-chevron-left" />\n                    Indietro\n                </Button>\n                <Button color="primary" size="sm" className="steppers-btn-save">\n                    Salva\n                </Button>\n                <Button outline color="primary" size="sm" className="stepper-btn-next">\n                    Avanti\n                    <Icon icon="it-chevron-right" />\n                </Button>\n            </StepperNav>\n        </StepperContainer>;\n}',
      ...(_i = (_h = SaveButtonDark.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
ConfirmButtonDark.parameters = {
  ...ConfirmButtonDark.parameters,
  docs: {
    ...(_j = ConfirmButtonDark.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '() => {\n  return <StepperContainer mobile dark>\n            <StepperContent dark>\n                <p>Contenuto di esempio dello step corrente</p>\n            </StepperContent>\n            <StepperNav>\n                <Button outline color="primary" size="sm" className="steppers-btn-prev">\n                    <Icon icon="it-chevron-left" />\n                    Indietro\n                </Button>\n                <Button color="primary" size="sm" className="steppers-btn-confirm">\n                    Conferma\n                </Button>\n            </StepperNav>\n        </StepperContainer>;\n}',
      ...(_l = (_k = ConfirmButtonDark.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
const __namedExportsOrder = ["ProgressBarDark", "PalliniDark", "SaveButtonDark", "ConfirmButtonDark"];
export {
  ConfirmButtonDark,
  PalliniDark,
  ProgressBarDark,
  SaveButtonDark,
  __namedExportsOrder,
  meta as default
};
