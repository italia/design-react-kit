var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
import { R as React } from "./index-C-_iGYWo.js";
import { P as Progress } from "./Progress-21SlT9UC.js";
import { B as Button } from "./Button-vuvwJGEz.js";
import { I as Icon } from "./Icon-uenOWmYY.js";
const meta = {
  title: "Documentazione/Componenti/Progress",
  component: Progress
};
const Esempio = {
  render: () => /* @__PURE__ */ React.createElement(Progress, {
    value: "50"
  })
};
const Etichette = {
  render: () => /* @__PURE__ */ React.createElement(Progress, {
    value: "35",
    label: "progresso"
  })
};
const ProgressoIndeterminato = {
  render: () => /* @__PURE__ */ React.createElement(Progress, {
    indeterminate: true,
    label: "In elaborazione..."
  })
};
const Colori = {
  render: () => /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Progress, {
    value: "25",
    color: "success"
  }), /* @__PURE__ */ React.createElement(Progress, {
    value: "33",
    color: "info"
  }), /* @__PURE__ */ React.createElement(Progress, {
    value: "50",
    color: "warning"
  }), /* @__PURE__ */ React.createElement(Progress, {
    value: "66",
    color: "danger"
  }))
};
const BottoneConProgressBar = {
  render: () => /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col-12 col-sm-6"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, "Bottone primario")), /* @__PURE__ */ React.createElement(Button, {
    color: "primary",
    className: "btn-progress",
    disabled: true
  }, "Label bottone ", /* @__PURE__ */ React.createElement(Icon, {
    color: "light",
    icon: "it-github",
    "aria-hidden": true
  }), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(Progress, {
    value: "50"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "col-12 col-sm-6"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, "Bottone secondario")), /* @__PURE__ */ React.createElement(Button, {
    color: "secondary",
    className: "btn-progress",
    disabled: true
  }, "Label bottone ", /* @__PURE__ */ React.createElement(Icon, {
    color: "light",
    icon: "it-github",
    "aria-hidden": true
  }), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement(Progress, {
    value: "50"
  }))))))
};
const _EsempiInterattivi = {
  render: ({
    value,
    color,
    label
  }) => {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Progress, {
      value,
      label,
      color
    }));
  },
  args: {
    color: "",
    value: 25,
    label: "progresso"
  },
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["", "success", "info", "warning", "danger"]
      }
    }
  }
};
Esempio.parameters = {
  ...Esempio.parameters,
  docs: {
    ...(_a = Esempio.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  render: () => <Progress value="50" />\n}',
      ...(_c = (_b = Esempio.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Etichette.parameters = {
  ...Etichette.parameters,
  docs: {
    ...(_d = Etichette.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  render: () => <Progress value="35" label="progresso" />\n}',
      ...(_f = (_e = Etichette.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
ProgressoIndeterminato.parameters = {
  ...ProgressoIndeterminato.parameters,
  docs: {
    ...(_g = ProgressoIndeterminato.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  render: () => <Progress indeterminate label="In elaborazione..." />\n}',
      ...(_i = (_h = ProgressoIndeterminato.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Colori.parameters = {
  ...Colori.parameters,
  docs: {
    ...(_j = Colori.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  render: () => <div>\n            <Progress value="25" color="success" />\n            <Progress value="33" color="info" />\n            <Progress value="50" color="warning" />\n            <Progress value="66" color="danger" />\n        </div>\n}',
      ...(_l = (_k = Colori.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
BottoneConProgressBar.parameters = {
  ...BottoneConProgressBar.parameters,
  docs: {
    ...(_m = BottoneConProgressBar.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: '{\n  render: () => <div className="container">\n            <div className="row">\n                <div className="col-12 col-sm-6">\n                    <p>\n                        <strong>Bottone primario</strong>\n                    </p>\n                    <Button color="primary" className="btn-progress" disabled>\n                        Label bottone <Icon color="light" icon="it-github" aria-hidden />\n                        <span>\n                            <Progress value="50" />\n                        </span>\n                    </Button>\n                </div>\n                <div className="col-12 col-sm-6">\n                    <p>\n                        <strong>Bottone secondario</strong>\n                    </p>\n                    <Button color="secondary" className="btn-progress" disabled>\n                        Label bottone <Icon color="light" icon="it-github" aria-hidden />\n                        <span>\n                            <Progress value="50" />\n                        </span>\n                    </Button>\n                </div>\n            </div>\n        </div>\n}',
      ...(_o = (_n = BottoneConProgressBar.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
_EsempiInterattivi.parameters = {
  ..._EsempiInterattivi.parameters,
  docs: {
    ...(_p = _EsempiInterattivi.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: '{\n  render: ({\n    value,\n    color,\n    label\n  }) => {\n    return <div>\n                <Progress value={value} label={label} color={color} />\n            </div>;\n  },\n  args: {\n    color: "",\n    value: 25,\n    label: "progresso"\n  },\n  argTypes: {\n    color: {\n      control: {\n        type: "select",\n        options: ["", "success", "info", "warning", "danger"]\n      }\n    }\n  }\n}',
      ...(_r = (_q = _EsempiInterattivi.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
const __namedExportsOrder = ["Esempio", "Etichette", "ProgressoIndeterminato", "Colori", "BottoneConProgressBar", "_EsempiInterattivi"];
const ProgressStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BottoneConProgressBar,
  Colori,
  Esempio,
  Etichette,
  ProgressoIndeterminato,
  _EsempiInterattivi,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  BottoneConProgressBar as B,
  Colori as C,
  Esempio as E,
  ProgressStories as P,
  Etichette as a,
  ProgressoIndeterminato as b
};
