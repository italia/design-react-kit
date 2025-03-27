var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u;
import { e } from "./index-N7T0HPyM.js";
import { B as Button } from "./Button-DzBfv9Kx.js";
import { I as Icon } from "./Icon-CpFYfyxV.js";
import "./track-focus-DbJ2CO43.js";
const colors = ["primary", "secondary", "success", "info", "danger", "warning", "link"];
const meta = {
  title: "Documentazione/Componenti/Button",
  component: Button,
  parameters: {
    layout: "centered"
  }
};
const EsempioInterattivo = {
  render: ({
    ...args
  }) => {
    return /* @__PURE__ */ e.createElement(Button, { ...args }, "Bottone");
  },
  args: {
    color: "primary"
  },
  argTypes: {
    color: {
      control: "select",
      options: colors
    }
  }
};
const Tipologie = {
  render: () => {
    return /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(Button, { tag: "a", href: "#", role: "button" }, "Link"), /* @__PURE__ */ e.createElement(Button, { type: "submit" }, "Button"), /* @__PURE__ */ e.createElement(Button, { tag: "input", type: "button", value: "Input" }), /* @__PURE__ */ e.createElement(Button, { tag: "input", type: "submit", value: "Submit" }), /* @__PURE__ */ e.createElement(Button, { tag: "input", type: "reset", value: "Reset" }));
  }
};
const VariantiColore = {
  render: () => {
    return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("div", { className: "btn-example" }, /* @__PURE__ */ e.createElement(Button, { color: "primary" }, "Primary"), /* @__PURE__ */ e.createElement(Button, { outline: true, color: "primary" }, "Primary Outline"), /* @__PURE__ */ e.createElement(Button, { color: "primary", disabled: true }, "Primary disabled"), /* @__PURE__ */ e.createElement(Button, { color: "primary", outline: true, disabled: true }, "Primary out. disabled")), /* @__PURE__ */ e.createElement("div", { className: "btn-example" }, /* @__PURE__ */ e.createElement(Button, { color: "secondary" }, "Secondary"), /* @__PURE__ */ e.createElement(Button, { outline: true, color: "secondary" }, "Secondary Outline"), /* @__PURE__ */ e.createElement(Button, { color: "secondary", disabled: true }, "Secondary disabled"), /* @__PURE__ */ e.createElement(Button, { color: "secondary", outline: true, disabled: true }, "Secondary out. disabled")), /* @__PURE__ */ e.createElement("div", { className: "btn-example" }, /* @__PURE__ */ e.createElement(Button, { color: "success" }, "success"), /* @__PURE__ */ e.createElement(Button, { outline: true, color: "success" }, "success Outline"), /* @__PURE__ */ e.createElement(Button, { color: "success", disabled: true }, "success disabled"), /* @__PURE__ */ e.createElement(Button, { color: "success", outline: true, disabled: true }, "success out. disabled")), /* @__PURE__ */ e.createElement("div", { className: "btn-example" }, /* @__PURE__ */ e.createElement(Button, { color: "danger" }, "danger"), /* @__PURE__ */ e.createElement(Button, { outline: true, color: "danger" }, "danger Outline"), /* @__PURE__ */ e.createElement(Button, { color: "danger", disabled: true }, "danger disabled"), /* @__PURE__ */ e.createElement(Button, { color: "danger", outline: true, disabled: true }, "danger out. disabled")), /* @__PURE__ */ e.createElement("div", { className: "btn-example" }, /* @__PURE__ */ e.createElement(Button, { color: "warning" }, "warning"), /* @__PURE__ */ e.createElement(Button, { outline: true, color: "warning" }, "warning Outline"), /* @__PURE__ */ e.createElement(Button, { color: "warning", disabled: true }, "warning disabled"), /* @__PURE__ */ e.createElement(Button, { color: "warning", outline: true, disabled: true }, "warning out. disabled")));
  }
};
const SfondoScuro = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "bg-dark py-1" }, /* @__PURE__ */ e.createElement("div", { className: "btn-example" }, /* @__PURE__ */ e.createElement(Button, { color: "primary" }, "Primary"), /* @__PURE__ */ e.createElement(Button, { outline: true, color: "primary" }, "Primary Outline"), /* @__PURE__ */ e.createElement(Button, { color: "primary", disabled: true }, "Primary disabled"), /* @__PURE__ */ e.createElement(Button, { color: "primary", outline: true, disabled: true }, "Primary out. disabled")), /* @__PURE__ */ e.createElement("div", { className: "btn-example" }, /* @__PURE__ */ e.createElement(Button, { color: "secondary" }, "Secondary"), /* @__PURE__ */ e.createElement(Button, { outline: true, color: "secondary" }, "Secondary Outline"), /* @__PURE__ */ e.createElement(Button, { color: "secondary", disabled: true }, "Secondary disabled"), /* @__PURE__ */ e.createElement(Button, { color: "secondary", outline: true, disabled: true }, "Secondary out. disabled")))
};
const VariantiDiDimensione = {
  render: () => /* @__PURE__ */ e.createElement("section", { className: "col-12" }, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(Button, { className: "me-2", color: "primary", size: "lg" }, "Primary Large"), /* @__PURE__ */ e.createElement(Button, { color: "secondary", size: "lg" }, "Secondary Large"), /* @__PURE__ */ e.createElement("div", { className: "mt-3" }), /* @__PURE__ */ e.createElement(Button, { className: "me-2", color: "primary", size: "sm" }, "Primary Small"), /* @__PURE__ */ e.createElement(Button, { color: "secondary", size: "sm" }, "Secondary Small"), /* @__PURE__ */ e.createElement("div", { className: "mt-3" }), /* @__PURE__ */ e.createElement(Button, { className: "me-2", color: "primary", size: "xs" }, "Primary Mini"), /* @__PURE__ */ e.createElement(Button, { color: "secondary", size: "xs" }, "Secondary Mini"), /* @__PURE__ */ e.createElement("div", { className: "mt-3" }), /* @__PURE__ */ e.createElement(Button, { color: "primary", block: true }, "Primary Block"), /* @__PURE__ */ e.createElement(Button, { color: "secondary", block: true }, "Secondary Block"))),
  parameters: {
    layout: "padded"
  }
};
const BottoniConIcona = {
  render: () => /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(Button, { className: "me-2", color: "success", size: "lg", icon: true }, /* @__PURE__ */ e.createElement(Icon, { color: "white", icon: "it-star-full" }), " Icon Button Large"), /* @__PURE__ */ e.createElement(Button, { className: "me-2", color: "primary", icon: true }, /* @__PURE__ */ e.createElement(Icon, { color: "white", icon: "it-star-full" }), " Icon Button"), /* @__PURE__ */ e.createElement(Button, { className: "me-2", color: "danger", size: "sm", icon: true }, /* @__PURE__ */ e.createElement(Icon, { color: "white", icon: "it-star-full" }), " Icon Button Small"), /* @__PURE__ */ e.createElement(Button, { color: "info", size: "xs", icon: true }, /* @__PURE__ */ e.createElement(Icon, { color: "white", icon: "it-star-full" }), " Icon Button Extra Small"))
};
const BottoniConIconaCerchiata = {
  render: () => /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(Button, { className: "me-2", color: "success", size: "lg", icon: true }, /* @__PURE__ */ e.createElement("span", { className: "rounded-icon" }, /* @__PURE__ */ e.createElement(Icon, { color: "success", icon: "it-user" })), /* @__PURE__ */ e.createElement("span", null, "Round Icon Large")), /* @__PURE__ */ e.createElement(Button, { className: "me-2", color: "primary", icon: true }, /* @__PURE__ */ e.createElement("span", { className: "rounded-icon" }, /* @__PURE__ */ e.createElement(Icon, { color: "primary", icon: "it-user" })), /* @__PURE__ */ e.createElement("span", null, "Round Icon")), /* @__PURE__ */ e.createElement(Button, { className: "me-2", color: "danger", size: "sm", icon: true }, /* @__PURE__ */ e.createElement("span", { className: "rounded-icon" }, /* @__PURE__ */ e.createElement(Icon, { color: "danger", icon: "it-user" })), /* @__PURE__ */ e.createElement("span", null, "Round Icon Small")), /* @__PURE__ */ e.createElement(Button, { color: "info", size: "xs", icon: true }, /* @__PURE__ */ e.createElement("span", { className: "rounded-icon" }, /* @__PURE__ */ e.createElement(Icon, { color: "secondary", icon: "it-user" })), /* @__PURE__ */ e.createElement("span", null, "Round Icon Extra Small")))
};
EsempioInterattivo.parameters = {
  ...EsempioInterattivo.parameters,
  docs: {
    ...(_a = EsempioInterattivo.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  render: ({\n    ...args\n  }) => {\n    return <Button {...args}>Bottone</Button>;\n  },\n  args: {\n    color: "primary"\n  },\n  argTypes: {\n    color: {\n      control: "select",\n      options: colors\n    }\n  }\n}',
      ...(_c = (_b = EsempioInterattivo.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Tipologie.parameters = {
  ...Tipologie.parameters,
  docs: {
    ...(_d = Tipologie.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <div>\n                <Button tag="a" href="#" role="button">\n                    Link\n                </Button>\n                <Button type="submit">Button</Button>\n                <Button tag="input" type="button" value="Input" />\n                <Button tag="input" type="submit" value="Submit" />\n                <Button tag="input" type="reset" value="Reset" />\n            </div>;\n  }\n}',
      ...(_f = (_e = Tipologie.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
VariantiColore.parameters = {
  ...VariantiColore.parameters,
  docs: {
    ...(_g = VariantiColore.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <>\n                <div className="btn-example">\n                    <Button color="primary">Primary</Button>\n                    <Button outline color="primary">\n                        Primary Outline\n                    </Button>\n                    <Button color="primary" disabled>\n                        Primary disabled\n                    </Button>\n                    <Button color="primary" outline disabled>\n                        Primary out. disabled\n                    </Button>\n                </div>\n                <div className="btn-example">\n                    <Button color="secondary">Secondary</Button>\n                    <Button outline color="secondary">\n                        Secondary Outline\n                    </Button>\n                    <Button color="secondary" disabled>\n                        Secondary disabled\n                    </Button>\n                    <Button color="secondary" outline disabled>\n                        Secondary out. disabled\n                    </Button>\n                </div>\n                <div className="btn-example">\n                    <Button color="success">success</Button>\n                    <Button outline color="success">\n                        success Outline\n                    </Button>\n                    <Button color="success" disabled>\n                        success disabled\n                    </Button>\n                    <Button color="success" outline disabled>\n                        success out. disabled\n                    </Button>\n                </div>\n                <div className="btn-example">\n                    <Button color="danger">danger</Button>\n                    <Button outline color="danger">\n                        danger Outline\n                    </Button>\n                    <Button color="danger" disabled>\n                        danger disabled\n                    </Button>\n                    <Button color="danger" outline disabled>\n                        danger out. disabled\n                    </Button>\n                </div>\n                <div className="btn-example">\n                    <Button color="warning">warning</Button>\n                    <Button outline color="warning">\n                        warning Outline\n                    </Button>\n                    <Button color="warning" disabled>\n                        warning disabled\n                    </Button>\n                    <Button color="warning" outline disabled>\n                        warning out. disabled\n                    </Button>\n                </div>\n            </>;\n  }\n}',
      ...(_i = (_h = VariantiColore.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
SfondoScuro.parameters = {
  ...SfondoScuro.parameters,
  docs: {
    ...(_j = SfondoScuro.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  render: () => <div className="bg-dark py-1">\n            <div className="btn-example">\n                <Button color="primary">Primary</Button>\n                <Button outline color="primary">\n                    Primary Outline\n                </Button>\n                <Button color="primary" disabled>\n                    Primary disabled\n                </Button>\n                <Button color="primary" outline disabled>\n                    Primary out. disabled\n                </Button>\n            </div>\n            <div className="btn-example">\n                <Button color="secondary">Secondary</Button>\n                <Button outline color="secondary">\n                    Secondary Outline\n                </Button>\n                <Button color="secondary" disabled>\n                    Secondary disabled\n                </Button>\n                <Button color="secondary" outline disabled>\n                    Secondary out. disabled\n                </Button>\n            </div>\n        </div>\n}',
      ...(_l = (_k = SfondoScuro.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
VariantiDiDimensione.parameters = {
  ...VariantiDiDimensione.parameters,
  docs: {
    ...(_m = VariantiDiDimensione.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: '{\n  render: () => <section className="col-12">\n            <div>\n                <Button className="me-2" color="primary" size="lg">\n                    Primary Large\n                </Button>\n                <Button color="secondary" size="lg">\n                    Secondary Large\n                </Button>\n                <div className="mt-3" />\n                <Button className="me-2" color="primary" size="sm">\n                    Primary Small\n                </Button>\n                <Button color="secondary" size="sm">\n                    Secondary Small\n                </Button>\n                <div className="mt-3" />\n                <Button className="me-2" color="primary" size="xs">\n                    Primary Mini\n                </Button>\n                <Button color="secondary" size="xs">\n                    Secondary Mini\n                </Button>\n                <div className="mt-3" />\n                <Button color="primary" block>\n                    Primary Block\n                </Button>\n                <Button color="secondary" block>\n                    Secondary Block\n                </Button>\n            </div>\n        </section>,\n  parameters: {\n    layout: "padded"\n  }\n}',
      ...(_o = (_n = VariantiDiDimensione.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
BottoniConIcona.parameters = {
  ...BottoniConIcona.parameters,
  docs: {
    ...(_p = BottoniConIcona.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: '{\n  render: () => <div>\n            <Button className="me-2" color="success" size="lg" icon>\n                <Icon color="white" icon="it-star-full" /> Icon Button Large\n            </Button>\n            <Button className="me-2" color="primary" icon>\n                <Icon color="white" icon="it-star-full" /> Icon Button\n            </Button>\n            <Button className="me-2" color="danger" size="sm" icon>\n                <Icon color="white" icon="it-star-full" /> Icon Button Small\n            </Button>\n            <Button color="info" size="xs" icon>\n                <Icon color="white" icon="it-star-full" /> Icon Button Extra Small\n            </Button>\n        </div>\n}',
      ...(_r = (_q = BottoniConIcona.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
BottoniConIconaCerchiata.parameters = {
  ...BottoniConIconaCerchiata.parameters,
  docs: {
    ...(_s = BottoniConIconaCerchiata.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: '{\n  render: () => <div>\n            <Button className="me-2" color="success" size="lg" icon>\n                <span className="rounded-icon">\n                    <Icon color="success" icon="it-user" />\n                </span>\n                <span>Round Icon Large</span>\n            </Button>\n            <Button className="me-2" color="primary" icon>\n                <span className="rounded-icon">\n                    <Icon color="primary" icon="it-user" />\n                </span>\n                <span>Round Icon</span>\n            </Button>\n            <Button className="me-2" color="danger" size="sm" icon>\n                <span className="rounded-icon">\n                    <Icon color="danger" icon="it-user" />\n                </span>\n                <span>Round Icon Small</span>\n            </Button>\n            <Button color="info" size="xs" icon>\n                <span className="rounded-icon">\n                    <Icon color="secondary" icon="it-user" />\n                </span>\n                <span>Round Icon Extra Small</span>\n            </Button>\n        </div>\n}',
      ...(_u = (_t = BottoniConIconaCerchiata.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
const __namedExportsOrder = ["EsempioInterattivo", "Tipologie", "VariantiColore", "SfondoScuro", "VariantiDiDimensione", "BottoniConIcona", "BottoniConIconaCerchiata"];
const ButtonStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BottoniConIcona,
  BottoniConIconaCerchiata,
  EsempioInterattivo,
  SfondoScuro,
  Tipologie,
  VariantiColore,
  VariantiDiDimensione,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  ButtonStories as B,
  EsempioInterattivo as E,
  SfondoScuro as S,
  Tipologie as T,
  VariantiColore as V,
  BottoniConIcona as a,
  BottoniConIconaCerchiata as b,
  VariantiDiDimensione as c
};
