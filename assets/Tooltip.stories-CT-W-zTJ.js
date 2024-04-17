var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { R as React, r as reactExports } from "./index-CQCy530F.js";
import { T as Tooltip, U as UncontrolledTooltip } from "./UncontrolledTooltip-CwwPcv3i.js";
import { B as Button } from "./Button-CDo48zCf.js";
const meta = {
  title: "Documentazione/Componenti/Tooltip",
  component: Tooltip,
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const EsempiWithHooks = () => {
  const ref1 = reactExports.useRef(null);
  const ref2 = reactExports.useRef(null);
  const ref3 = reactExports.useRef(null);
  return /* @__PURE__ */ React.createElement("div", {
    className: "bd-example tooltip-demo"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "muted"
  }, "Ecco un", " ", /* @__PURE__ */ React.createElement("a", {
    href: "#",
    ref: ref1
  }, "bianco scenario"), /* @__PURE__ */ React.createElement("br", null), "per tratteggiarvi l’accompagnamento", /* @__PURE__ */ React.createElement("br", null), "degli oggetti di sfondo che pur vivono.", /* @__PURE__ */ React.createElement("br", null), "Non ne sarò", " ", /* @__PURE__ */ React.createElement("a", {
    href: "#",
    ref: ref2
  }, "l’artefice"), " ", "impaziente.", /* @__PURE__ */ React.createElement("br", null), "Berrò alle coppe della nostalgia,", /* @__PURE__ */ React.createElement("br", null), "avrò preteso d’ozio nelle lacrime...", /* @__PURE__ */ React.createElement("br", null), "perché non mi ribello alla natura:", /* @__PURE__ */ React.createElement("br", null), "la mia lentezza li esaspera...", /* @__PURE__ */ React.createElement("br", null), "La mia lentezza? No, la mia fiducia.", /* @__PURE__ */ React.createElement("br", null), "Per adesso è deserto.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    ref: ref3
  }, "Il mondo può rifarsi senza me"), ",", /* @__PURE__ */ React.createElement("br", null), "E intanto gli altri mi denigreranno"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("em", null, "La città nuova, Alda Merini")), /* @__PURE__ */ React.createElement(UncontrolledTooltip, {
    placement: "top",
    target: ref1
  }, "Primo tooltip"), /* @__PURE__ */ React.createElement(UncontrolledTooltip, {
    placement: "top",
    target: ref2
  }, "Secondo tooltip"), /* @__PURE__ */ React.createElement(UncontrolledTooltip, {
    placement: "top",
    target: ref3
  }, "Terzo tooltip"));
};
const Esempi = {
  render: () => /* @__PURE__ */ React.createElement(EsempiWithHooks, null)
};
const EsempiConControlloWithHooks = () => {
  const [openOne, toggleOne] = reactExports.useState(false);
  const [openTwo, toggleTwo] = reactExports.useState(false);
  const [openThree, toggleThree] = reactExports.useState(false);
  const ref1 = reactExports.useRef(null);
  const ref2 = reactExports.useRef(null);
  const ref3 = reactExports.useRef(null);
  return /* @__PURE__ */ React.createElement("div", {
    className: "bd-example tooltip-demo"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "muted"
  }, "Ecco un", " ", /* @__PURE__ */ React.createElement("a", {
    href: "#",
    ref: ref1
  }, "bianco scenario"), /* @__PURE__ */ React.createElement("br", null), "per tratteggiarvi l’accompagnamento", /* @__PURE__ */ React.createElement("br", null), "degli oggetti di sfondo che pur vivono.", /* @__PURE__ */ React.createElement("br", null), "Non ne sarò", " ", /* @__PURE__ */ React.createElement("a", {
    href: "#",
    ref: ref2
  }, "l’artefice"), " ", "impaziente.", /* @__PURE__ */ React.createElement("br", null), "Berrò alle coppe della nostalgia,", /* @__PURE__ */ React.createElement("br", null), "avrò preteso d’ozio nelle lacrime...", /* @__PURE__ */ React.createElement("br", null), "perché non mi ribello alla natura:", /* @__PURE__ */ React.createElement("br", null), "la mia lentezza li esaspera...", /* @__PURE__ */ React.createElement("br", null), "La mia lentezza? No, la mia fiducia.", /* @__PURE__ */ React.createElement("br", null), "Per adesso è deserto.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    ref: ref3
  }, "Il mondo può rifarsi senza me"), ",", /* @__PURE__ */ React.createElement("br", null), "E intanto gli altri mi denigreranno"), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("em", null, "La città nuova, Alda Merini")), /* @__PURE__ */ React.createElement(Tooltip, {
    placement: "top",
    target: ref1,
    isOpen: openOne,
    toggle: () => toggleOne(!openOne)
  }, "Primo tooltip"), /* @__PURE__ */ React.createElement(Tooltip, {
    placement: "top",
    target: ref2,
    isOpen: openTwo,
    toggle: () => toggleTwo(!openTwo)
  }, "Secondo tooltip"), /* @__PURE__ */ React.createElement(Tooltip, {
    placement: "top",
    target: ref3,
    isOpen: openThree,
    toggle: () => toggleThree(!openThree)
  }, "Terzo tooltip"));
};
const EsempiConControllo = {
  render: () => /* @__PURE__ */ React.createElement(EsempiConControlloWithHooks, null)
};
const PosizioniWithHooks = () => {
  const ref1 = reactExports.useRef(null);
  const ref2 = reactExports.useRef(null);
  const ref3 = reactExports.useRef(null);
  const ref4 = reactExports.useRef(null);
  const ref5 = reactExports.useRef(null);
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      padding: 100
    }
  }, /* @__PURE__ */ React.createElement(Button, {
    innerRef: ref1,
    className: "m-3"
  }, "Tooltip in alto"), /* @__PURE__ */ React.createElement(Button, {
    innerRef: ref2,
    className: "m-3"
  }, "Tooltip a destra"), /* @__PURE__ */ React.createElement(Button, {
    innerRef: ref3,
    className: "m-3"
  }, "Tooltip in basso"), /* @__PURE__ */ React.createElement(Button, {
    innerRef: ref4,
    className: "m-3"
  }, "Tooltip a sinistra"), /* @__PURE__ */ React.createElement(Button, {
    innerRef: ref5,
    className: "m-3"
  }, "Tooltip con HTML"), /* @__PURE__ */ React.createElement(UncontrolledTooltip, {
    placement: "top",
    target: ref1
  }, "Tooltip on top"), /* @__PURE__ */ React.createElement(UncontrolledTooltip, {
    placement: "right",
    target: ref2
  }, "Tooltip on right"), /* @__PURE__ */ React.createElement(UncontrolledTooltip, {
    placement: "bottom",
    target: ref3
  }, "Tooltip on bottom"), /* @__PURE__ */ React.createElement(UncontrolledTooltip, {
    placement: "left",
    target: ref4
  }, "Tooltip on left"), /* @__PURE__ */ React.createElement(UncontrolledTooltip, {
    placement: "top",
    target: ref5
  }, /* @__PURE__ */ React.createElement("em", null, "Tooltip"), " ", /* @__PURE__ */ React.createElement("u", null, "with"), " ", /* @__PURE__ */ React.createElement("b", null, "HTML")));
};
const Posizioni = {
  render: () => /* @__PURE__ */ React.createElement(PosizioniWithHooks, null)
};
const EsempiInterattiviWithHooks = (x) => {
  const ref = reactExports.useRef(null);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, {
    innerRef: ref,
    className: "m-3"
  }, "Tooltip"), /* @__PURE__ */ React.createElement(UncontrolledTooltip, {
    placement: x.placement,
    target: ref
  }, x.text));
};
const EsempiInterattivi = {
  render: (placement, text) => /* @__PURE__ */ React.createElement(EsempiInterattiviWithHooks, {
    ...placement,
    ...text
  }),
  parameters: {
    layout: "centered"
  },
  args: {
    placement: "top",
    text: "Tooltip"
  },
  argTypes: {
    placement: {
      control: "select",
      options: ["top", "bottom", "left", "right"]
    }
  }
};
Esempi.parameters = {
  ...Esempi.parameters,
  docs: {
    ...(_a = Esempi.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <EsempiWithHooks />\n}",
      ...(_c = (_b = Esempi.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
EsempiConControllo.parameters = {
  ...EsempiConControllo.parameters,
  docs: {
    ...(_d = EsempiConControllo.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => <EsempiConControlloWithHooks />\n}",
      ...(_f = (_e = EsempiConControllo.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Posizioni.parameters = {
  ...Posizioni.parameters,
  docs: {
    ...(_g = Posizioni.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => <PosizioniWithHooks />\n}",
      ...(_i = (_h = Posizioni.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
EsempiInterattivi.parameters = {
  ...EsempiInterattivi.parameters,
  docs: {
    ...(_j = EsempiInterattivi.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: `{
  render: (placement, text) => <EsempiInterattiviWithHooks {...placement} {...text} />,
  parameters: {
    layout: "centered"
  },
  args: {
    placement: 'top',
    text: 'Tooltip'
  },
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right']
    }
  }
}`,
      ...(_l = (_k = EsempiInterattivi.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
const __namedExportsOrder = ["Esempi", "EsempiConControllo", "Posizioni", "EsempiInterattivi"];
const TooltipStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Esempi,
  EsempiConControllo,
  EsempiInterattivi,
  Posizioni,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  EsempiInterattivi as E,
  Posizioni as P,
  TooltipStories as T,
  Esempi as a,
  EsempiConControllo as b
};
