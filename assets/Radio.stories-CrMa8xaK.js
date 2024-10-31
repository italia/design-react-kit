var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { R as React } from "./index-C-_iGYWo.js";
import { I as Input } from "./Input-3qIylNdJ.js";
import { F as Form } from "./Form-BekgtyA_.js";
import { R as Row, C as Col } from "./Col-CM3Y6KlU.js";
import { F as FormGroup } from "./FormGroup-Dm03kL2Q.js";
import { F as FormText } from "./FormText-Bpc0R-vF.js";
import { L as Label } from "./Label-Dgx7kIS2.js";
const meta = {
  title: "Documentazione/Form/Radio",
  component: Input
};
const RadioBase = {
  render: () => /* @__PURE__ */ React.createElement(Form, null, /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", null, "Radio"), /* @__PURE__ */ React.createElement(FormGroup, {
    check: true
  }, /* @__PURE__ */ React.createElement(Input, {
    name: "gruppo1",
    type: "radio",
    id: "radio1",
    defaultChecked: true
  }), /* @__PURE__ */ React.createElement(Label, {
    check: true,
    htmlFor: "radio1"
  }, "Radio di esempio 1")), /* @__PURE__ */ React.createElement(FormGroup, {
    check: true
  }, /* @__PURE__ */ React.createElement(Input, {
    name: "gruppo1",
    type: "radio",
    id: "radio2"
  }), /* @__PURE__ */ React.createElement(Label, {
    check: true,
    htmlFor: "radio2"
  }, "Radio di esempio 2"))))
};
const RadioInline = {
  render: () => /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", null, "Radio"), /* @__PURE__ */ React.createElement(Form, null, /* @__PURE__ */ React.createElement(FormGroup, {
    check: true,
    inline: true
  }, /* @__PURE__ */ React.createElement(Input, {
    name: "gruppo1",
    type: "radio",
    id: "radio3",
    defaultChecked: true
  }), /* @__PURE__ */ React.createElement(Label, {
    check: true,
    htmlFor: "radio3"
  }, "Opzione 1")), /* @__PURE__ */ React.createElement(FormGroup, {
    check: true,
    inline: true
  }, /* @__PURE__ */ React.createElement(Input, {
    name: "gruppo1",
    type: "radio",
    id: "radio4"
  }), /* @__PURE__ */ React.createElement(Label, {
    check: true,
    htmlFor: "radio4"
  }, "Opzione 2")))))
};
const RadioDisabilitato = {
  render: () => /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", null, "Radio"), /* @__PURE__ */ React.createElement(Form, null, /* @__PURE__ */ React.createElement(FormGroup, {
    check: true
  }, /* @__PURE__ */ React.createElement(Input, {
    disabled: true,
    name: "gruppo1",
    type: "radio",
    id: "radio5",
    defaultChecked: true
  }), /* @__PURE__ */ React.createElement(Label, {
    check: true,
    htmlFor: "radio5"
  }, "Opzione disabilitata selezionata")), /* @__PURE__ */ React.createElement(FormGroup, {
    check: true
  }, /* @__PURE__ */ React.createElement(Input, {
    disabled: true,
    name: "gruppo1",
    type: "radio",
    id: "radio6"
  }), /* @__PURE__ */ React.createElement(Label, {
    check: true,
    htmlFor: "radio6"
  }, "Opzione disabilitata non selezionata")))))
};
const RadioGruppi = {
  render: () => /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement(Row, {
    className: "m-5"
  }, /* @__PURE__ */ React.createElement(Col, {
    md: 5
  }, /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", null, "Radio"), /* @__PURE__ */ React.createElement(Form, null, /* @__PURE__ */ React.createElement(FormGroup, {
    check: true,
    className: "form-check-group"
  }, /* @__PURE__ */ React.createElement(Input, {
    id: "radio7",
    name: "group1",
    type: "radio",
    defaultChecked: true
  }), /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "radio7",
    check: true
  }, "Opzione 1")), /* @__PURE__ */ React.createElement(FormGroup, {
    check: true,
    className: "form-check-group"
  }, /* @__PURE__ */ React.createElement(Input, {
    id: "radio8",
    name: "group1",
    type: "radio"
  }), /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "radio8",
    check: true
  }, "Opzione 2")), /* @__PURE__ */ React.createElement(FormGroup, {
    check: true,
    className: "form-check-group"
  }, /* @__PURE__ */ React.createElement(Input, {
    id: "radio9",
    name: "group1",
    type: "radio",
    disabled: true
  }), /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "radio9",
    check: true
  }, "Opzione 3"))))), /* @__PURE__ */ React.createElement(Col, {
    md: 2
  }), /* @__PURE__ */ React.createElement(Col, {
    md: 5
  }, /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", null, "Radio"), /* @__PURE__ */ React.createElement(Form, null, /* @__PURE__ */ React.createElement(FormGroup, {
    check: true,
    className: "form-check-group"
  }, /* @__PURE__ */ React.createElement(Input, {
    id: "radio10",
    name: "group2",
    type: "radio",
    defaultChecked: true
  }), /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "radio10",
    check: true
  }, "Opzione 1"), /* @__PURE__ */ React.createElement(FormText, {
    id: "radio10Description"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero")), /* @__PURE__ */ React.createElement(FormGroup, {
    check: true,
    className: "form-check-group"
  }, /* @__PURE__ */ React.createElement(Input, {
    id: "radio11",
    name: "group2",
    type: "radio"
  }), /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "radio11",
    check: true
  }, "Opzione 2"), /* @__PURE__ */ React.createElement(FormText, {
    id: "radio11Description"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero")), /* @__PURE__ */ React.createElement(FormGroup, {
    check: true,
    className: "form-check-group"
  }, /* @__PURE__ */ React.createElement(Input, {
    id: "radio12",
    name: "group2",
    type: "radio",
    disabled: true
  }), /* @__PURE__ */ React.createElement(Label, {
    htmlFor: "radio12",
    check: true
  }, "Opzione 3"), /* @__PURE__ */ React.createElement(FormText, {
    id: "radio12Description"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero")))))))
};
RadioBase.parameters = {
  ...RadioBase.parameters,
  docs: {
    ...(_a = RadioBase.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  render: () => <Form>\n            <fieldset>\n                <legend>Radio</legend>\n\n                <FormGroup check>\n                    <Input name="gruppo1" type="radio" id="radio1" defaultChecked />\n                    <Label check htmlFor="radio1">\n                        Radio di esempio 1\n                    </Label>\n                </FormGroup>\n\n                <FormGroup check>\n                    <Input name="gruppo1" type="radio" id="radio2" />\n                    <Label check htmlFor="radio2">\n                        Radio di esempio 2\n                    </Label>\n                </FormGroup>\n            </fieldset>\n        </Form>\n}',
      ...(_c = (_b = RadioBase.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
RadioInline.parameters = {
  ...RadioInline.parameters,
  docs: {
    ...(_d = RadioInline.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  render: () => <section>\n            <fieldset>\n                <legend>Radio</legend>\n                <Form>\n                    <FormGroup check inline>\n                        <Input name="gruppo1" type="radio" id="radio3" defaultChecked />\n                        <Label check htmlFor="radio3">\n                            Opzione 1\n                        </Label>\n                    </FormGroup>\n                    <FormGroup check inline>\n                        <Input name="gruppo1" type="radio" id="radio4" />\n                        <Label check htmlFor="radio4">\n                            Opzione 2\n                        </Label>\n                    </FormGroup>\n                </Form>\n            </fieldset>\n        </section>\n}',
      ...(_f = (_e = RadioInline.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
RadioDisabilitato.parameters = {
  ...RadioDisabilitato.parameters,
  docs: {
    ...(_g = RadioDisabilitato.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  render: () => <section>\n            <fieldset>\n                <legend>Radio</legend>\n                <Form>\n                    <FormGroup check>\n                        <Input disabled name="gruppo1" type="radio" id="radio5" defaultChecked />\n                        <Label check htmlFor="radio5">\n                            Opzione disabilitata selezionata\n                        </Label>\n                    </FormGroup>\n                    <FormGroup check>\n                        <Input disabled name="gruppo1" type="radio" id="radio6" />\n                        <Label check htmlFor="radio6">\n                            Opzione disabilitata non selezionata\n                        </Label>\n                    </FormGroup>\n                </Form>\n            </fieldset>\n        </section>\n}',
      ...(_i = (_h = RadioDisabilitato.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
RadioGruppi.parameters = {
  ...RadioGruppi.parameters,
  docs: {
    ...(_j = RadioGruppi.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  render: () => <section>\n            <Row className="m-5">\n                <Col md={5}>\n                    <fieldset>\n                        <legend>Radio</legend>\n                        <Form>\n                            <FormGroup check className="form-check-group">\n                                <Input id="radio7" name="group1" type="radio" defaultChecked />\n                                <Label htmlFor="radio7" check>\n                                    Opzione 1\n                                </Label>\n                            </FormGroup>\n                            <FormGroup check className="form-check-group">\n                                <Input id="radio8" name="group1" type="radio" />\n                                <Label htmlFor="radio8" check>\n                                    Opzione 2\n                                </Label>\n                            </FormGroup>\n                            <FormGroup check className="form-check-group">\n                                <Input id="radio9" name="group1" type="radio" disabled />\n                                <Label htmlFor="radio9" check>\n                                    Opzione 3\n                                </Label>\n                            </FormGroup>\n                        </Form>\n                    </fieldset>\n                </Col>\n                <Col md={2} />\n                <Col md={5}>\n                    <fieldset>\n                        <legend>Radio</legend>\n                        <Form>\n                            <FormGroup check className="form-check-group">\n                                <Input id="radio10" name="group2" type="radio" defaultChecked />\n                                <Label htmlFor="radio10" check>\n                                    Opzione 1\n                                </Label>\n                                <FormText id="radio10Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>\n                            </FormGroup>\n                            <FormGroup check className="form-check-group">\n                                <Input id="radio11" name="group2" type="radio" />\n                                <Label htmlFor="radio11" check>\n                                    Opzione 2\n                                </Label>\n                                <FormText id="radio11Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>\n                            </FormGroup>\n                            <FormGroup check className="form-check-group">\n                                <Input id="radio12" name="group2" type="radio" disabled />\n                                <Label htmlFor="radio12" check>\n                                    Opzione 3\n                                </Label>\n                                <FormText id="radio12Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>\n                            </FormGroup>\n                        </Form>\n                    </fieldset>\n                </Col>\n            </Row>\n        </section>\n}',
      ...(_l = (_k = RadioGruppi.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
const __namedExportsOrder = ["RadioBase", "RadioInline", "RadioDisabilitato", "RadioGruppi"];
const RadioStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  RadioBase,
  RadioDisabilitato,
  RadioGruppi,
  RadioInline,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  RadioStories as R,
  RadioBase as a,
  RadioInline as b,
  RadioDisabilitato as c,
  RadioGruppi as d
};
