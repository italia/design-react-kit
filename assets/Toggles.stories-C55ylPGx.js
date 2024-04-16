var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { R as React } from "./index-CQCy530F.js";
import { T as Toggle } from "./Toggle-DWAfohg0.js";
import { R as Row, C as Col } from "./Col-DTtAS2uD.js";
import { F as Form } from "./Form-DhHNlI4v.js";
import { F as FormGroup } from "./FormGroup-CLeJ8HCL.js";
import { F as FormText } from "./FormText-Cq6ChLH_.js";
const meta = {
  title: "Documentazione/Form/Toggles",
  component: Toggle
};
const Toggles = {
  render: () => {
    return /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
      sm: "6"
    }, /* @__PURE__ */ React.createElement(FormGroup, {
      check: true,
      className: "m-3"
    }, /* @__PURE__ */ React.createElement(Toggle, {
      label: "Label dell'interruttore 1",
      disabled: false
    }))), /* @__PURE__ */ React.createElement(Col, {
      sm: "6"
    }, /* @__PURE__ */ React.createElement(FormGroup, {
      check: true,
      className: "m-3"
    }, /* @__PURE__ */ React.createElement(Toggle, {
      label: /* @__PURE__ */ React.createElement("span", null, "Label dell'interruttore 2"),
      defaultChecked: true,
      disabled: false
    }))));
  }
};
const TogglesDisabilitate = {
  render: () => {
    return /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Col, {
      sm: "6"
    }, /* @__PURE__ */ React.createElement(FormGroup, {
      check: true,
      className: "m-3"
    }, /* @__PURE__ */ React.createElement(Toggle, {
      label: "Label dell'interruttore 1",
      disabled: true
    }))), /* @__PURE__ */ React.createElement(Col, {
      sm: "6"
    }, /* @__PURE__ */ React.createElement(FormGroup, {
      check: true,
      className: "m-3"
    }, /* @__PURE__ */ React.createElement(Toggle, {
      label: /* @__PURE__ */ React.createElement("span", null, "Label dell'interruttore 2"),
      defaultChecked: true,
      disabled: true
    }))));
  }
};
const GruppiDiToggles = {
  render: () => {
    return /* @__PURE__ */ React.createElement(Row, {
      className: "m-5"
    }, /* @__PURE__ */ React.createElement(Col, {
      md: 5
    }, /* @__PURE__ */ React.createElement(Form, null, /* @__PURE__ */ React.createElement(FormGroup, {
      check: true,
      className: "form-check-group"
    }, /* @__PURE__ */ React.createElement(Toggle, {
      defaultChecked: true,
      label: "Toggle acceso"
    })), /* @__PURE__ */ React.createElement(FormGroup, {
      check: true,
      className: "form-check-group"
    }, /* @__PURE__ */ React.createElement(Toggle, {
      label: "Toggle spento"
    })), /* @__PURE__ */ React.createElement(FormGroup, {
      check: true,
      className: "form-check-group"
    }, /* @__PURE__ */ React.createElement(Toggle, {
      disabled: true,
      label: "Toggle disabilitato"
    })))), /* @__PURE__ */ React.createElement(Col, {
      md: 2
    }), /* @__PURE__ */ React.createElement(Col, {
      md: 5
    }, /* @__PURE__ */ React.createElement(Form, null, /* @__PURE__ */ React.createElement(FormGroup, {
      check: true,
      className: "form-check-group"
    }, /* @__PURE__ */ React.createElement(Toggle, {
      defaultChecked: true,
      label: "Toggle acceso"
    }), /* @__PURE__ */ React.createElement(FormText, {
      color: "muted"
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero")), /* @__PURE__ */ React.createElement(FormGroup, {
      check: true,
      className: "form-check-group"
    }, /* @__PURE__ */ React.createElement(Toggle, {
      label: "Toggle spento"
    }), /* @__PURE__ */ React.createElement(FormText, {
      color: "muted"
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero")), /* @__PURE__ */ React.createElement(FormGroup, {
      check: true,
      className: "form-check-group"
    }, /* @__PURE__ */ React.createElement(Toggle, {
      disabled: true,
      label: "Toggle disabilitato"
    }), /* @__PURE__ */ React.createElement(FormText, {
      color: "muted"
    }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero")))));
  }
};
Toggles.parameters = {
  ...Toggles.parameters,
  docs: {
    ...(_a = Toggles.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  render: () => {
    return <Row>
                <Col sm="6">
                    <FormGroup check className="m-3">
                        <Toggle label="Label dell'interruttore 1" disabled={false} />
                    </FormGroup>
                </Col>
                <Col sm="6">
                    <FormGroup check className="m-3">
                        <Toggle label={<span>Label dell&apos;interruttore 2</span>} defaultChecked disabled={false} />
                    </FormGroup>
                </Col>
            </Row>;
  }
}`,
      ...(_c = (_b = Toggles.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
TogglesDisabilitate.parameters = {
  ...TogglesDisabilitate.parameters,
  docs: {
    ...(_d = TogglesDisabilitate.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: `{
  render: () => {
    return <Row>
                <Col sm="6">
                    <FormGroup check className="m-3">
                        <Toggle label="Label dell'interruttore 1" disabled={true} />
                    </FormGroup>
                </Col>
                <Col sm="6">
                    <FormGroup check className="m-3">
                        <Toggle label={<span>Label dell&apos;interruttore 2</span>} defaultChecked disabled={true} />
                    </FormGroup>
                </Col>
            </Row>;
  }
}`,
      ...(_f = (_e = TogglesDisabilitate.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
GruppiDiToggles.parameters = {
  ...GruppiDiToggles.parameters,
  docs: {
    ...(_g = GruppiDiToggles.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <Row className="m-5">\n                <Col md={5}>\n                    <Form>\n                        <FormGroup check className="form-check-group">\n                            <Toggle defaultChecked label="Toggle acceso" />\n                        </FormGroup>\n                        <FormGroup check className="form-check-group">\n                            <Toggle label="Toggle spento" />\n                        </FormGroup>\n                        <FormGroup check className="form-check-group">\n                            <Toggle disabled label="Toggle disabilitato" />\n                        </FormGroup>\n                    </Form>\n                </Col>\n                <Col md={2} />\n                <Col md={5}>\n                    <Form>\n                        <FormGroup check className="form-check-group">\n                            <Toggle defaultChecked label="Toggle acceso" />\n                            <FormText color="muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>\n                        </FormGroup>\n                        <FormGroup check className="form-check-group">\n                            <Toggle label="Toggle spento" />\n                            <FormText color="muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>\n                        </FormGroup>\n                        <FormGroup check className="form-check-group">\n                            <Toggle disabled label="Toggle disabilitato" />\n                            <FormText color="muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero</FormText>\n                        </FormGroup>\n                    </Form>\n                </Col>\n            </Row>;\n  }\n}',
      ...(_i = (_h = GruppiDiToggles.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
const __namedExportsOrder = ["Toggles", "TogglesDisabilitate", "GruppiDiToggles"];
const TogglesStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GruppiDiToggles,
  Toggles,
  TogglesDisabilitate,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  GruppiDiToggles as G,
  TogglesStories as T,
  Toggles as a,
  TogglesDisabilitate as b
};
