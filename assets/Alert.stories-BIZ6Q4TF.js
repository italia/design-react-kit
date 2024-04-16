var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { R as React, r as reactExports } from "./index-CQCy530F.js";
import { c as componentColor } from "./stories-helper-xr0oHPtf.js";
import { A as Alert } from "./Alert-cHi4VX8U.js";
const meta = {
  title: "Documentazione/Componenti/Alert",
  component: Alert,
  args: {
    color: "success"
  },
  argTypes: {
    color: {
      control: "select",
      options: componentColor
    }
  }
};
const _EsempiInterattivi = {
  render: ({
    ...args
  }) => /* @__PURE__ */ React.createElement(Alert, {
    ...args
  }, "Questo è un alert di", /* @__PURE__ */ React.createElement("b", null, args.color), "!")
};
const _LinkEvidenziato = {
  render: ({
    ...args
  }) => /* @__PURE__ */ React.createElement(Alert, {
    ...args
  }, "Questo è un alert con un esempio di", /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "alert-link"
  }, "link"), "evidenziato."),
  args: {
    color: "danger"
  }
};
const _ContenutoAggiuntivo = {
  render: ({
    ...args
  }) => /* @__PURE__ */ React.createElement(Alert, {
    ...args
  }, /* @__PURE__ */ React.createElement("h4", {
    className: "alert-heading"
  }, "Avviso di successo!"), /* @__PURE__ */ React.createElement("p", null, "Stai leggendo questo importante messaggio di avviso di successo. Questo testo di esempio sarà più a lungo in modo da poter vedere come funzioni la spaziatura all'interno di un avviso con questo tipo di contenuto."), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", {
    className: "mb-0"
  }, "Quando necessario, assicurarti di inserire le utilità di margine per mantenere gli spazi equilibrati."))
};
const ChiusuraControllataWithHooks = ({
  ...args
}) => {
  const [open, setOpen] = reactExports.useState(true);
  const closeAlert = () => setOpen(false);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Alert, {
    ...args,
    isOpen: open,
    toggle: closeAlert
  }, /* @__PURE__ */ React.createElement("strong", null, "Attenzione"), "Alcuni campi inseriti sono da controllare."));
};
const ChiusuraControllata = {
  render: (args) => /* @__PURE__ */ React.createElement(ChiusuraControllataWithHooks, {
    ...args
  }),
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  },
  args: {
    color: "warning"
  }
};
_EsempiInterattivi.parameters = {
  ..._EsempiInterattivi.parameters,
  docs: {
    ...(_a = _EsempiInterattivi.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: ({\n    ...args\n  }) => <Alert {...args}>\n            Questo è un alert di<b>{args.color}</b>!\n        </Alert>\n}",
      ...(_c = (_b = _EsempiInterattivi.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
_LinkEvidenziato.parameters = {
  ..._LinkEvidenziato.parameters,
  docs: {
    ...(_d = _LinkEvidenziato.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  render: ({\n    ...args\n  }) => <Alert {...args}>\n            Questo è un alert con un esempio di\n            <a href="#" className="alert-link">\n                link\n            </a>\n            evidenziato.\n        </Alert>,\n  args: {\n    color: "danger"\n  }\n}',
      ...(_f = (_e = _LinkEvidenziato.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
_ContenutoAggiuntivo.parameters = {
  ..._ContenutoAggiuntivo.parameters,
  docs: {
    ...(_g = _ContenutoAggiuntivo.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  render: ({\n    ...args\n  }) => <Alert {...args}>\n            <h4 className="alert-heading">Avviso di successo!</h4>\n            <p>\n                Stai leggendo questo importante messaggio di avviso di successo. Questo testo di esempio sarà più a lungo in modo da poter vedere come funzioni\n                la spaziatura all&#39;interno di un avviso con questo tipo di contenuto.\n            </p>\n            <hr />\n            <p className="mb-0">Quando necessario, assicurarti di inserire le utilità di margine per mantenere gli spazi equilibrati.</p>\n        </Alert>\n}',
      ...(_i = (_h = _ContenutoAggiuntivo.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
ChiusuraControllata.parameters = {
  ...ChiusuraControllata.parameters,
  docs: {
    ...(_j = ChiusuraControllata.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  render: args => <ChiusuraControllataWithHooks {...args} />,\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "none"\n      }\n    }\n  },\n  args: {\n    color: "warning"\n  }\n}',
      ...(_l = (_k = ChiusuraControllata.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
const __namedExportsOrder = ["_EsempiInterattivi", "_LinkEvidenziato", "_ContenutoAggiuntivo", "ChiusuraControllata"];
const AlertStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ChiusuraControllata,
  _ContenutoAggiuntivo,
  _EsempiInterattivi,
  _LinkEvidenziato,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  AlertStories as A,
  ChiusuraControllata as C,
  _LinkEvidenziato as _,
  _ContenutoAggiuntivo as a
};
