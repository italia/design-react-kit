var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { e } from "./index-CoR6MlO7.js";
import { B as Button } from "./Button-DWiqemTT.js";
import { I as Icon } from "./Icon-DiIdFz3Z.js";
import { P as Progress } from "./Progress-BIRFZiVh.js";
import { S as StepperContainer, a as StepperContent, b as StepperNav } from "./StepperNav-CSdK4jue.js";
import { S as StepperDots } from "./StepperDots-Cbh6siwp.js";
import "./track-focus-DbJ2CO43.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-xoeSAV6i.js";
import "./Button-9tmxVOl-.js";
import "./utils-Cn8VSNph.js";
import "./iframe-DF2Pyat-.js";
import "./index-C2nrqh0v.js";
import "./utils-CwYUlCuU.js";
const meta = {
  title: "Documentazione/Componenti/Stepper/Mobile",
  component: StepperContainer
};
const ProgressBar = () => {
  return /* @__PURE__ */ e.createElement(StepperContainer, { mobile: true }, /* @__PURE__ */ e.createElement(StepperContent, null, /* @__PURE__ */ e.createElement("p", null, "Contenuto di esempio dello step corrente")), /* @__PURE__ */ e.createElement(StepperNav, null, /* @__PURE__ */ e.createElement(Button, { outline: true, color: "primary", size: "sm", className: "steppers-btn-prev" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-left", color: "primary" }), "Indietro"), /* @__PURE__ */ e.createElement("div", { className: "steppers-progress" }, /* @__PURE__ */ e.createElement(Progress, { indeterminate: false, value: "33", tag: "div", style: {
    width: "33%"
  } })), /* @__PURE__ */ e.createElement(Button, { outline: true, color: "primary", size: "sm", className: "steppers-btn-next" }, "Avanti", /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-right", color: "primary" }))));
};
const Pallini = () => {
  return /* @__PURE__ */ e.createElement(StepperContainer, { mobile: true }, /* @__PURE__ */ e.createElement(StepperContent, null, /* @__PURE__ */ e.createElement("p", null, "Contenuto di esempio dello step corrente")), /* @__PURE__ */ e.createElement(StepperNav, null, /* @__PURE__ */ e.createElement(Button, { outline: true, color: "primary", size: "sm", className: "steppers-btn-prev" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-left", color: "primary" }), "Indietro"), /* @__PURE__ */ e.createElement(StepperDots, null, /* @__PURE__ */ e.createElement("li", { className: "done" }, /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Step 1 di 6 - Confermato")), /* @__PURE__ */ e.createElement("li", { className: "done" }, /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Step 2 di 6 - Confermato")), /* @__PURE__ */ e.createElement("li", { className: "done" }, /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Step 3 di 6 - Confermato")), /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Step 4 di 6")), /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Step 5 di 6")), /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "Step 6 di 6"))), /* @__PURE__ */ e.createElement(Button, { outline: true, color: "primary", size: "sm", className: "steppers-btn-next" }, "Avanti", /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-right", color: "primary" }))));
};
const SaveButton = () => {
  return /* @__PURE__ */ e.createElement(StepperContainer, { mobile: true }, /* @__PURE__ */ e.createElement(StepperContent, null, /* @__PURE__ */ e.createElement("p", null, "Contenuto di esempio dello step corrente")), /* @__PURE__ */ e.createElement(StepperNav, null, /* @__PURE__ */ e.createElement(Button, { outline: true, color: "primary", size: "sm", className: "steppers-btn-prev" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-left" }), "Indietro"), /* @__PURE__ */ e.createElement(Button, { color: "primary", size: "sm", className: "steppers-btn-save" }, "Salva"), /* @__PURE__ */ e.createElement(Button, { outline: true, color: "primary", size: "sm", className: "stepper-btn-next" }, "Avanti", /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-right" }))));
};
const ConfirmButton = () => {
  return /* @__PURE__ */ e.createElement(StepperContainer, { mobile: true }, /* @__PURE__ */ e.createElement(StepperContent, null, /* @__PURE__ */ e.createElement("p", null, "Contenuto di esempio dello step corrente")), /* @__PURE__ */ e.createElement(StepperNav, null, /* @__PURE__ */ e.createElement(Button, { outline: true, color: "primary", size: "sm", className: "steppers-btn-prev" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-chevron-left" }), "Indietro"), /* @__PURE__ */ e.createElement(Button, { color: "primary", size: "sm", className: "steppers-btn-confirm" }, "Conferma")));
};
ProgressBar.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ProgressBar"
};
Pallini.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Pallini"
};
SaveButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SaveButton"
};
ConfirmButton.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "ConfirmButton"
};
ProgressBar.parameters = {
  ...ProgressBar.parameters,
  docs: {
    ...(_a = ProgressBar.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "() => {\n  return <StepperContainer mobile>\n      <StepperContent>\n        <p>Contenuto di esempio dello step corrente</p>\n      </StepperContent>\n      <StepperNav>\n        <Button outline color='primary' size='sm' className='steppers-btn-prev'>\n          <Icon icon='it-chevron-left' color='primary' />\n          Indietro\n        </Button>\n        <div className='steppers-progress'>\n          <Progress indeterminate={false} value='33' tag='div' style={{\n          width: '33%'\n        }} />\n        </div>\n        <Button outline color='primary' size='sm' className='steppers-btn-next'>\n          Avanti\n          <Icon icon='it-chevron-right' color='primary' />\n        </Button>\n      </StepperNav>\n    </StepperContainer>;\n}",
      ...(_c = (_b = ProgressBar.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Pallini.parameters = {
  ...Pallini.parameters,
  docs: {
    ...(_d = Pallini.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "() => {\n  return <StepperContainer mobile>\n      <StepperContent>\n        <p>Contenuto di esempio dello step corrente</p>\n      </StepperContent>\n      <StepperNav>\n        <Button outline color='primary' size='sm' className='steppers-btn-prev'>\n          <Icon icon='it-chevron-left' color='primary' />\n          Indietro\n        </Button>\n        <StepperDots>\n          <li className='done'>\n            <span className='visually-hidden'>Step 1 di 6 - Confermato</span>\n          </li>\n          <li className='done'>\n            <span className='visually-hidden'>Step 2 di 6 - Confermato</span>\n          </li>\n          <li className='done'>\n            <span className='visually-hidden'>Step 3 di 6 - Confermato</span>\n          </li>\n          <li>\n            <span className='visually-hidden'>Step 4 di 6</span>\n          </li>\n          <li>\n            <span className='visually-hidden'>Step 5 di 6</span>\n          </li>\n          <li>\n            <span className='visually-hidden'>Step 6 di 6</span>\n          </li>\n        </StepperDots>\n        <Button outline color='primary' size='sm' className='steppers-btn-next'>\n          Avanti\n          <Icon icon='it-chevron-right' color='primary' />\n        </Button>\n      </StepperNav>\n    </StepperContainer>;\n}",
      ...(_f = (_e = Pallini.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
SaveButton.parameters = {
  ...SaveButton.parameters,
  docs: {
    ...(_g = SaveButton.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "() => {\n  return <StepperContainer mobile>\n      <StepperContent>\n        <p>Contenuto di esempio dello step corrente</p>\n      </StepperContent>\n      <StepperNav>\n        <Button outline color='primary' size='sm' className='steppers-btn-prev'>\n          <Icon icon='it-chevron-left' />\n          Indietro\n        </Button>\n        <Button color='primary' size='sm' className='steppers-btn-save'>\n          Salva\n        </Button>\n        <Button outline color='primary' size='sm' className='stepper-btn-next'>\n          Avanti\n          <Icon icon='it-chevron-right' />\n        </Button>\n      </StepperNav>\n    </StepperContainer>;\n}",
      ...(_i = (_h = SaveButton.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
ConfirmButton.parameters = {
  ...ConfirmButton.parameters,
  docs: {
    ...(_j = ConfirmButton.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "() => {\n  return <StepperContainer mobile>\n      <StepperContent>\n        <p>Contenuto di esempio dello step corrente</p>\n      </StepperContent>\n      <StepperNav>\n        <Button outline color='primary' size='sm' className='steppers-btn-prev'>\n          <Icon icon='it-chevron-left' />\n          Indietro\n        </Button>\n        <Button color='primary' size='sm' className='steppers-btn-confirm'>\n          Conferma\n        </Button>\n      </StepperNav>\n    </StepperContainer>;\n}",
      ...(_l = (_k = ConfirmButton.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
const __namedExportsOrder = ["ProgressBar", "Pallini", "SaveButton", "ConfirmButton"];
export {
  ConfirmButton,
  Pallini,
  ProgressBar,
  SaveButton,
  __namedExportsOrder,
  meta as default
};
