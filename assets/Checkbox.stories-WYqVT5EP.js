var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
import { e } from "./index-CoR6MlO7.js";
import { R as Row, C as Col } from "./Col-DbKMWTUR.js";
import { F as Form } from "./Form-3EvdnBnA.js";
import { F as FormGroup } from "./FormGroup-DDSqtlx4.js";
import { F as FormText } from "./FormText-bS_Nxa8n.js";
import { L as Label } from "./Label-BDijq1tJ.js";
import { I as Input } from "./Input-DoJtmhsT.js";
import "./track-focus-DbJ2CO43.js";
const meta = {
  title: "Documentazione/Form/Checkbox",
  component: Input
};
const CheckboxBase = {
  render: () => /* @__PURE__ */ e.createElement(Form, null, /* @__PURE__ */ e.createElement("fieldset", null, /* @__PURE__ */ e.createElement("legend", null, "Checkbox"), /* @__PURE__ */ e.createElement(FormGroup, { check: true }, /* @__PURE__ */ e.createElement(Input, { id: "checkbox1", type: "checkbox" }), /* @__PURE__ */ e.createElement(Label, { for: "checkbox1", check: true }, "Checkbox di esempio"))))
};
const CheckboxInline = {
  render: () => /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement("fieldset", null, /* @__PURE__ */ e.createElement("legend", null, "Checkbox"), /* @__PURE__ */ e.createElement(Form, null, /* @__PURE__ */ e.createElement(FormGroup, { check: true, inline: true }, /* @__PURE__ */ e.createElement(Input, { id: "inline-checkbox1", type: "checkbox" }), /* @__PURE__ */ e.createElement(Label, { for: "inline-checkbox1", check: true }, "Checkbox non selezionato")), /* @__PURE__ */ e.createElement(FormGroup, { check: true, inline: true }, /* @__PURE__ */ e.createElement(Input, { id: "inline-checkbox2", type: "checkbox", defaultChecked: true }), /* @__PURE__ */ e.createElement(Label, { for: "inline-checkbox2", check: true }, "Checkbox selezionato")))))
};
const CheckboxDisabilitato = {
  render: () => /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement("fieldset", null, /* @__PURE__ */ e.createElement("legend", null, "Checkbox"), /* @__PURE__ */ e.createElement(Form, null, /* @__PURE__ */ e.createElement(FormGroup, { check: true }, /* @__PURE__ */ e.createElement(Input, { disabled: true, id: "disabled-checkbox1", type: "checkbox" }), /* @__PURE__ */ e.createElement(Label, { for: "disabled-checkbox1", check: true }, "Checkbox disabilitato non selezionato")), /* @__PURE__ */ e.createElement(FormGroup, { check: true }, /* @__PURE__ */ e.createElement(Input, { disabled: true, id: "disabled-checkbox2", type: "checkbox", defaultChecked: true }), /* @__PURE__ */ e.createElement(Label, { for: "disabled-checkbox2", check: true }, "Checkbox disabilitato selezionato")))))
};
const CheckboxGruppi = {
  render: () => /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement(Row, { className: "m-5" }, /* @__PURE__ */ e.createElement(Col, { md: 5 }, /* @__PURE__ */ e.createElement("fieldset", null, /* @__PURE__ */ e.createElement("legend", null, "Checkbox"), /* @__PURE__ */ e.createElement(Form, null, /* @__PURE__ */ e.createElement(FormGroup, { check: true, className: "form-check-group" }, /* @__PURE__ */ e.createElement(Input, { id: "group-checkbox1", type: "checkbox", defaultChecked: true }), /* @__PURE__ */ e.createElement(Label, { for: "group-checkbox1", check: true }, "Checkbox selezionato")), /* @__PURE__ */ e.createElement(FormGroup, { check: true, className: "form-check-group" }, /* @__PURE__ */ e.createElement(Input, { id: "group-checkbox2", type: "checkbox" }), /* @__PURE__ */ e.createElement(Label, { for: "group-checkbox2", check: true }, "Checkbox non selezionato")), /* @__PURE__ */ e.createElement(FormGroup, { check: true, className: "form-check-group" }, /* @__PURE__ */ e.createElement(Input, { id: "group-checkbox3", type: "checkbox", disabled: true }), /* @__PURE__ */ e.createElement(Label, { for: "group-checkbox3", check: true }, "Checkbox disabilitato non selezionato"))))), /* @__PURE__ */ e.createElement(Col, { md: 2 }), /* @__PURE__ */ e.createElement(Col, { md: 5 }, /* @__PURE__ */ e.createElement("fieldset", null, /* @__PURE__ */ e.createElement("legend", null, "Checkbox"), /* @__PURE__ */ e.createElement(Form, null, /* @__PURE__ */ e.createElement(FormGroup, { check: true, className: "form-check-group" }, /* @__PURE__ */ e.createElement(Input, { id: "group-checkbox4", type: "checkbox", defaultChecked: true }), /* @__PURE__ */ e.createElement(Label, { for: "group-checkbox4", check: true }, "Checkbox selezionato"), /* @__PURE__ */ e.createElement(FormText, { id: "group-checkbox4Description" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero")), /* @__PURE__ */ e.createElement(FormGroup, { check: true, className: "form-check-group" }, /* @__PURE__ */ e.createElement(Input, { id: "group-checkbox5", type: "checkbox" }), /* @__PURE__ */ e.createElement(Label, { for: "group-checkbox5", check: true }, "Checkbox non selezionato"), /* @__PURE__ */ e.createElement(FormText, { id: "group-checkbox5Description" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero")), /* @__PURE__ */ e.createElement(FormGroup, { check: true, className: "form-check-group" }, /* @__PURE__ */ e.createElement(Input, { id: "group-checkbox6", type: "checkbox", disabled: true }), /* @__PURE__ */ e.createElement(Label, { for: "group-checkbox6", check: true }, "Checkbox disabilitato non selezionato"), /* @__PURE__ */ e.createElement(FormText, { id: "group-checkbox6Description" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero")))))))
};
const CheckboxMixedButton = {
  render: () => /* @__PURE__ */ e.createElement(Form, null, /* @__PURE__ */ e.createElement("fieldset", null, /* @__PURE__ */ e.createElement("legend", null, "Checkbox"), /* @__PURE__ */ e.createElement(FormGroup, { check: true }, /* @__PURE__ */ e.createElement(Input, { id: "checkbox-semi-checked", type: "checkbox", className: "semi-checked" }), /* @__PURE__ */ e.createElement(Label, { for: "checkbox-semi-checked", check: true }, "Checkbox di esempio"))))
};
CheckboxBase.parameters = {
  ...CheckboxBase.parameters,
  docs: {
    ...(_a = CheckboxBase.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  render: () => <Form>\n            <fieldset>\n                <legend>Checkbox</legend>\n                <FormGroup check>\n                    <Input id="checkbox1" type="checkbox" />\n                    <Label for="checkbox1" check>\n                        Checkbox di esempio\n                    </Label>\n                </FormGroup>\n            </fieldset>\n        </Form>\n}',
      ...(_c = (_b = CheckboxBase.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
CheckboxInline.parameters = {
  ...CheckboxInline.parameters,
  docs: {
    ...(_d = CheckboxInline.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  render: () => <section>\n            <fieldset>\n                <legend>Checkbox</legend>\n                <Form>\n                    <FormGroup check inline>\n                        <Input id="inline-checkbox1" type="checkbox" />\n                        <Label for="inline-checkbox1" check>\n                            Checkbox non selezionato\n                        </Label>\n                    </FormGroup>\n                    <FormGroup check inline>\n                        <Input id="inline-checkbox2" type="checkbox" defaultChecked />\n                        <Label for="inline-checkbox2" check>\n                            Checkbox selezionato\n                        </Label>\n                    </FormGroup>\n                </Form>\n            </fieldset>\n        </section>\n}',
      ...(_f = (_e = CheckboxInline.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
CheckboxDisabilitato.parameters = {
  ...CheckboxDisabilitato.parameters,
  docs: {
    ...(_g = CheckboxDisabilitato.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  render: () => <section>\n            <fieldset>\n                <legend>Checkbox</legend>\n                <Form>\n                    <FormGroup check>\n                        <Input disabled id="disabled-checkbox1" type="checkbox" />\n                        <Label for="disabled-checkbox1" check>\n                            Checkbox disabilitato non selezionato\n                        </Label>\n                    </FormGroup>\n                    <FormGroup check>\n                        <Input disabled id="disabled-checkbox2" type="checkbox" defaultChecked />\n                        <Label for="disabled-checkbox2" check>\n                            Checkbox disabilitato selezionato\n                        </Label>\n                    </FormGroup>\n                </Form>\n            </fieldset>\n        </section>\n}',
      ...(_i = (_h = CheckboxDisabilitato.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
CheckboxGruppi.parameters = {
  ...CheckboxGruppi.parameters,
  docs: {
    ...(_j = CheckboxGruppi.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  render: () => <section>\n            <Row className="m-5">\n                <Col md={5}>\n                    <fieldset>\n                        <legend>Checkbox</legend>\n                        <Form>\n                            <FormGroup check className="form-check-group">\n                                <Input id="group-checkbox1" type="checkbox" defaultChecked />\n                                <Label for="group-checkbox1" check>\n                                    Checkbox selezionato\n                                </Label>\n                            </FormGroup>\n                            <FormGroup check className="form-check-group">\n                                <Input id="group-checkbox2" type="checkbox" />\n                                <Label for="group-checkbox2" check>\n                                    Checkbox non selezionato\n                                </Label>\n                            </FormGroup>\n                            <FormGroup check className="form-check-group">\n                                <Input id="group-checkbox3" type="checkbox" disabled />\n                                <Label for="group-checkbox3" check>\n                                    Checkbox disabilitato non selezionato\n                                </Label>\n                            </FormGroup>\n                        </Form>\n                    </fieldset>\n                </Col>\n                <Col md={2} />\n                <Col md={5}>\n                    <fieldset>\n                        <legend>Checkbox</legend>\n                        <Form>\n                            <FormGroup check className="form-check-group">\n                                <Input id="group-checkbox4" type="checkbox" defaultChecked />\n                                <Label for="group-checkbox4" check>\n                                    Checkbox selezionato\n                                </Label>\n                                <FormText id="group-checkbox4Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>\n                            </FormGroup>\n                            <FormGroup check className="form-check-group">\n                                <Input id="group-checkbox5" type="checkbox" />\n                                <Label for="group-checkbox5" check>\n                                    Checkbox non selezionato\n                                </Label>\n                                <FormText id="group-checkbox5Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>\n                            </FormGroup>\n                            <FormGroup check className="form-check-group">\n                                <Input id="group-checkbox6" type="checkbox" disabled />\n                                <Label for="group-checkbox6" check>\n                                    Checkbox disabilitato non selezionato\n                                </Label>\n                                <FormText id="group-checkbox6Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>\n                            </FormGroup>\n                        </Form>\n                    </fieldset>\n                </Col>\n            </Row>\n        </section>\n}',
      ...(_l = (_k = CheckboxGruppi.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
CheckboxMixedButton.parameters = {
  ...CheckboxMixedButton.parameters,
  docs: {
    ...(_m = CheckboxMixedButton.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: '{\n  render: () => <Form>\n            <fieldset>\n                <legend>Checkbox</legend>\n                <FormGroup check>\n                    <Input id="checkbox-semi-checked" type="checkbox" className="semi-checked" />\n                    <Label for="checkbox-semi-checked" check>\n                        Checkbox di esempio\n                    </Label>\n                </FormGroup>\n            </fieldset>\n        </Form>\n}',
      ...(_o = (_n = CheckboxMixedButton.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
const __namedExportsOrder = ["CheckboxBase", "CheckboxInline", "CheckboxDisabilitato", "CheckboxGruppi", "CheckboxMixedButton"];
const CheckboxStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CheckboxBase,
  CheckboxDisabilitato,
  CheckboxGruppi,
  CheckboxInline,
  CheckboxMixedButton,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  CheckboxStories as C,
  CheckboxBase as a,
  CheckboxInline as b,
  CheckboxDisabilitato as c,
  CheckboxGruppi as d,
  CheckboxMixedButton as e
};
