var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
import { r as reactExports, R as React } from "./index-C-_iGYWo.js";
import { C as Callout, a as CalloutText } from "./CalloutText-B3REk1Nj.js";
import { C as CalloutTitle } from "./CalloutTitle-B1JkYBwS.js";
import { I as Icon } from "./Icon-BNsLnf7r.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { B as Button } from "./Button-vuvwJGEz.js";
const CalloutMoreFooter = ({
  id = "cm-footer",
  tag = "div",
  className,
  fileUrl,
  children,
  ...attributes
}) => {
  const Tag = tag;
  const classes = classNames("collapse-div", className);
  const [isOpen, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ React.createElement(Tag, { ...attributes, className: classes }, /* @__PURE__ */ React.createElement("div", { className: "collapse-header", id: `${id}-heading` }, /* @__PURE__ */ React.createElement(
    Button,
    {
      color: "primary",
      className: "callout-more-toggle",
      onClick: () => setOpen(!isOpen),
      "aria-controls": `${id}-collapse`,
      "aria-expanded": isOpen,
      style: { fontFamily: "var(--bs-font-sans-serif)", fontSize: "1rem" }
    },
    "Leggi tutto ",
    /* @__PURE__ */ React.createElement("span", null)
  ), fileUrl && /* @__PURE__ */ React.createElement(
    "a",
    {
      className: "callout-more-download",
      href: fileUrl,
      style: {
        fontFamily: "var(--bs-font-sans-serif)",
        fontSize: "1rem"
      }
    },
    /* @__PURE__ */ React.createElement(Icon, { icon: "it-download" }),
    /* @__PURE__ */ React.createElement("span", { className: "visually-hidden" }, "PDF"),
    "Download"
  )), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `collapse ${isOpen ? "show" : ""}`,
      role: "tabpanel",
      id: `${id}-collapse`,
      "aria-labelledby": `${id}-heading`
    },
    /* @__PURE__ */ React.createElement("div", { className: "collapse-body" }, children)
  ));
};
CalloutMoreFooter.__docgenInfo = { "description": "", "methods": [], "displayName": "CalloutMoreFooter", "props": { "id": { "required": false, "tsType": { "name": "string" }, "description": "", "defaultValue": { "value": "'cm-footer'", "computed": false } }, "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso si utilizzo di componenti personalizzati", "defaultValue": { "value": "'div'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente" }, "fileUrl": { "required": false, "tsType": { "name": "string" }, "description": "" } } };
const meta = {
  title: "Documentazione/Componenti/Callout",
  component: Callout,
  parameters: {
    layout: "centered"
  }
};
const EsempioBasico = {
  render: () => /* @__PURE__ */ React.createElement(Callout, null, /* @__PURE__ */ React.createElement(CalloutTitle, null, /* @__PURE__ */ React.createElement("span", {
    className: "text"
  }, "Titolo Callout")), /* @__PURE__ */ React.createElement(CalloutText, null, "Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius."))
};
const EsempioConIcona = {
  render: () => /* @__PURE__ */ React.createElement(Callout, null, /* @__PURE__ */ React.createElement(CalloutTitle, null, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-info-circle",
    padding: false,
    "aria-hidden": true
  }), /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Confermato"), /* @__PURE__ */ React.createElement("span", {
    className: "text"
  }, "Titolo Callout")), /* @__PURE__ */ React.createElement(CalloutText, null, "Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius."))
};
const EsempioAccessibilita = {
  render: () => /* @__PURE__ */ React.createElement(Callout, null, /* @__PURE__ */ React.createElement(CalloutTitle, null, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-check-circle",
    padding: false,
    "aria-hidden": true
  }), /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Confermato"), /* @__PURE__ */ React.createElement("span", {
    className: "text"
  }, "Titolo Callout")), /* @__PURE__ */ React.createElement(CalloutText, null, "Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius."))
};
const CalloutVariantiColore = {
  render: ({
    ...args
  }) => /* @__PURE__ */ React.createElement(Callout, {
    color: args.color
  }, /* @__PURE__ */ React.createElement(CalloutTitle, null, /* @__PURE__ */ React.createElement(Icon, {
    icon: `it-${args.icon}-circle`,
    padding: false,
    "aria-hidden": true
  }), /* @__PURE__ */ React.createElement("span", {
    className: "text"
  }, args.title)), /* @__PURE__ */ React.createElement(CalloutText, null, "Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius.")),
  parameters: {
    docs: {
      controls: {
        exclude: ["title", "className", "tag", "title", "highlight", "detailed", "testId"]
      }
    }
  },
  /**
   * Da verificare un modo per modificare l'icon al cambio del colore
   */
  args: {
    color: "success",
    icon: "check",
    title: "Usa"
  },
  argTypes: {
    color: {
      control: "radio",
      options: ["success", "warning", "danger", "note", "important"]
    },
    icon: {
      control: "radio",
      options: ["check", "help", "close", "info"]
    }
  }
};
const CalloutHighlights = {
  render: ({
    ...args
  }) => /* @__PURE__ */ React.createElement(Callout, {
    highlight: true,
    color: args.color
  }, /* @__PURE__ */ React.createElement(CalloutTitle, null, /* @__PURE__ */ React.createElement(Icon, {
    icon: `it-${args.icon}-circle`,
    padding: false,
    "aria-hidden": true
  }), args.title), /* @__PURE__ */ React.createElement(CalloutText, null, "Maecenas at erat id sem interdum efficitur eu sed nunc. Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit."), /* @__PURE__ */ React.createElement(CalloutText, null, "Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum varius. Maecenas ullamcorper ", /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "tincidunt nulla quis laoreet."))),
  parameters: {
    docs: {
      controls: {
        exclude: ["title", "className", "tag", "title", "highlight", "detailed", "testId"]
      }
    }
  },
  /**
   * Da verificare un modo per modificare l'icon e il titolo al cambio del colore
   */
  args: {
    color: "success",
    icon: "check",
    title: "Titolo"
  },
  argTypes: {
    color: {
      control: "radio",
      options: ["success", "warning", "danger", "note", "important"]
    },
    icon: {
      control: "radio",
      options: ["check", "help", "close", "info"]
    }
  }
};
const CalloutApprofondimento = {
  render: () => /* @__PURE__ */ React.createElement(Callout, {
    color: "note",
    detailed: true
  }, /* @__PURE__ */ React.createElement(CalloutTitle, null, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-zoom-in",
    padding: false,
    "aria-hidden": true
  }), /* @__PURE__ */ React.createElement("span", null, "Approfondimento")), /* @__PURE__ */ React.createElement(CalloutText, null, "Quisque suscipit interdum augue non volutpat. Cras tristique arcu tortor. Mauris eu magna nibh. Curabitur malesuada neque in lectus sagittis accumsan. In vitae justo eros. Maecenas pellentesque lacinia ipsum vitae rhoncus. Vestibulum pretium tempor turpis, nec gravida eros viverra in. Proin dictum nibh ut semper tristique."), /* @__PURE__ */ React.createElement(CalloutText, null, "Maecenas at erat id ", /* @__PURE__ */ React.createElement("strong", null, "sem interdum efficitur eu sed nunc."), " Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor."), /* @__PURE__ */ React.createElement(CalloutText, null, "Maecenas vulputate ante dictum ", /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "vestibulum volutpat"), ". Lorem ipsum dolor sit amet,", " ", /* @__PURE__ */ React.createElement("strong", null, "consectetur adipiscing elit."), " Aenean non augue non purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis laoreet."), /* @__PURE__ */ React.createElement(CalloutMoreFooter, {
    id: "example",
    fileUrl: "#"
  }, /* @__PURE__ */ React.createElement("p", null, "Aenean tortor enim, suscipit eget commodo at, imperdiet quis diam. Vestibulum non accumsan felis, at ultrices lorem. Pellentesque ac diam a ipsum cursus interdum id nec odio. Vestibulum nec congue mauris. Aliquam et dui purus. Mauris in imperdiet risus, sed blandit tellus. Donec posuere accumsan lacinia. Mauris dignissim, sem vel volutpat rhoncus, neque mi ullamcorper ante, vitae volutpat ipsum quam id purus. Duis tincidunt sodales nisl eget ultricies. Sed condimentum mi eu ex venenatis, quis bibendum dui ultrices. Quisque ex eros, pellentesque vitae enim sed, pharetra tempus dolor. Donec eu nibh ac lacus luctus pellentesque. Duis interdum scelerisque magna nec malesuada."), /* @__PURE__ */ React.createElement("p", null, "Maecenas at erat id ", /* @__PURE__ */ React.createElement("strong", null, "sem interdum efficitur eu sed nunc."), " Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor."), /* @__PURE__ */ React.createElement("p", null, "Maecenas vulputate ante dictum ", /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "vestibulum volutpat"), ". Lorem ipsum dolor sit amet,", " ", /* @__PURE__ */ React.createElement("strong", null, "consectetur adipiscing elit."), " Aenean non augue non purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis laoreet.")))
};
EsempioBasico.parameters = {
  ...EsempioBasico.parameters,
  docs: {
    ...(_a = EsempioBasico.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <Callout>\n      <CalloutTitle>\n        <span className='text'>Titolo Callout</span>\n      </CalloutTitle>\n      <CalloutText>\n        Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n        Aenean non augue non purus vestibulum varius.\n      </CalloutText>\n    </Callout>\n}",
      ...(_c = (_b = EsempioBasico.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
EsempioConIcona.parameters = {
  ...EsempioConIcona.parameters,
  docs: {
    ...(_d = EsempioConIcona.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => <Callout>\n      <CalloutTitle>\n        <Icon icon='it-info-circle' padding={false} aria-hidden />\n        <span className='visually-hidden'>Confermato</span>\n        <span className='text'>Titolo Callout</span>\n      </CalloutTitle>\n      <CalloutText>\n        Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n        Aenean non augue non purus vestibulum varius.\n      </CalloutText>\n    </Callout>\n}",
      ...(_f = (_e = EsempioConIcona.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
EsempioAccessibilita.parameters = {
  ...EsempioAccessibilita.parameters,
  docs: {
    ...(_g = EsempioAccessibilita.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => <Callout>\n      <CalloutTitle>\n        <Icon icon='it-check-circle' padding={false} aria-hidden />\n        <span className='visually-hidden'>Confermato</span>\n        <span className='text'>Titolo Callout</span>\n      </CalloutTitle>\n      <CalloutText>\n        Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n        Aenean non augue non purus vestibulum varius.\n      </CalloutText>\n    </Callout>\n}",
      ...(_i = (_h = EsempioAccessibilita.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
CalloutVariantiColore.parameters = {
  ...CalloutVariantiColore.parameters,
  docs: {
    ...(_j = CalloutVariantiColore.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  render: ({\n    ...args\n  }) => <Callout color={args.color}>\n      <CalloutTitle>\n        <Icon icon={`it-${args.icon}-circle`} padding={false} aria-hidden />\n        <span className='text'>{args.title}</span>\n      </CalloutTitle>\n      <CalloutText>\n        Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n        Aenean non augue non purus vestibulum varius.\n      </CalloutText>\n    </Callout>,\n  parameters: {\n    docs: {\n      controls: {\n        exclude: ['title', 'className', 'tag', 'title', 'highlight', 'detailed', 'testId']\n      }\n    }\n  },\n  /**\n   * Da verificare un modo per modificare l'icon al cambio del colore\n   */\n  args: {\n    color: 'success',\n    icon: 'check',\n    title: 'Usa'\n  },\n  argTypes: {\n    color: {\n      control: 'radio',\n      options: ['success', 'warning', 'danger', 'note', 'important']\n    },\n    icon: {\n      control: 'radio',\n      options: ['check', 'help', 'close', 'info']\n    }\n  }\n}",
      ...(_l = (_k = CalloutVariantiColore.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
CalloutHighlights.parameters = {
  ...CalloutHighlights.parameters,
  docs: {
    ...(_m = CalloutHighlights.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  render: ({\n    ...args\n  }) => <Callout highlight color={args.color}>\n      <CalloutTitle>\n        <Icon icon={`it-${args.icon}-circle`} padding={false} aria-hidden />\n        {args.title}\n      </CalloutTitle>\n      <CalloutText>\n        Maecenas at erat id sem interdum efficitur eu sed nunc. Mauris sit amet erat eget augue molestie malesuada ut\n        sed ex. In sed dignissim elit.\n      </CalloutText>\n      <CalloutText>\n        Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n        Aenean non augue non purus vestibulum varius. Maecenas ullamcorper <a href='#'>tincidunt nulla quis laoreet.</a>\n      </CalloutText>\n    </Callout>,\n  parameters: {\n    docs: {\n      controls: {\n        exclude: ['title', 'className', 'tag', 'title', 'highlight', 'detailed', 'testId']\n      }\n    }\n  },\n  /**\n   * Da verificare un modo per modificare l'icon e il titolo al cambio del colore\n   */\n  args: {\n    color: 'success',\n    icon: 'check',\n    title: 'Titolo'\n  },\n  argTypes: {\n    color: {\n      control: 'radio',\n      options: ['success', 'warning', 'danger', 'note', 'important']\n    },\n    icon: {\n      control: 'radio',\n      options: ['check', 'help', 'close', 'info']\n    }\n  }\n}",
      ...(_o = (_n = CalloutHighlights.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
CalloutApprofondimento.parameters = {
  ...CalloutApprofondimento.parameters,
  docs: {
    ...(_p = CalloutApprofondimento.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  render: () => <Callout color='note' detailed>\n      <CalloutTitle>\n        <Icon icon='it-zoom-in' padding={false} aria-hidden />\n        <span>Approfondimento</span>\n      </CalloutTitle>\n      <CalloutText>\n        Quisque suscipit interdum augue non volutpat. Cras tristique arcu tortor. Mauris eu magna nibh. Curabitur\n        malesuada neque in lectus sagittis accumsan. In vitae justo eros. Maecenas pellentesque lacinia ipsum vitae\n        rhoncus. Vestibulum pretium tempor turpis, nec gravida eros viverra in. Proin dictum nibh ut semper tristique.\n      </CalloutText>\n      <CalloutText>\n        Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue\n        molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat\n        interdum magna, eu commodo odio mauris semper dolor.\n      </CalloutText>\n      <CalloutText>\n        Maecenas vulputate ante dictum <a href='#'>vestibulum volutpat</a>. Lorem ipsum dolor sit amet,{' '}\n        <strong>consectetur adipiscing elit.</strong> Aenean non augue non purus vestibulum varius. Maecenas ullamcorper\n        tincidunt nulla quis laoreet.\n      </CalloutText>\n      <CalloutMoreFooter id='example' fileUrl='#'>\n        <p>\n          Aenean tortor enim, suscipit eget commodo at, imperdiet quis diam. Vestibulum non accumsan felis, at ultrices\n          lorem. Pellentesque ac diam a ipsum cursus interdum id nec odio. Vestibulum nec congue mauris. Aliquam et dui\n          purus. Mauris in imperdiet risus, sed blandit tellus. Donec posuere accumsan lacinia. Mauris dignissim, sem\n          vel volutpat rhoncus, neque mi ullamcorper ante, vitae volutpat ipsum quam id purus. Duis tincidunt sodales\n          nisl eget ultricies. Sed condimentum mi eu ex venenatis, quis bibendum dui ultrices. Quisque ex eros,\n          pellentesque vitae enim sed, pharetra tempus dolor. Donec eu nibh ac lacus luctus pellentesque. Duis interdum\n          scelerisque magna nec malesuada.\n        </p>\n        <p>\n          Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue\n          molestie malesuada ut sed ex. In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat\n          interdum magna, eu commodo odio mauris semper dolor.\n        </p>\n        <p>\n          Maecenas vulputate ante dictum <a href='#'>vestibulum volutpat</a>. Lorem ipsum dolor sit amet,{' '}\n          <strong>consectetur adipiscing elit.</strong> Aenean non augue non purus vestibulum varius. Maecenas\n          ullamcorper tincidunt nulla quis laoreet.\n        </p>\n      </CalloutMoreFooter>\n    </Callout>\n}",
      ...(_r = (_q = CalloutApprofondimento.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
const __namedExportsOrder = ["EsempioBasico", "EsempioConIcona", "EsempioAccessibilita", "CalloutVariantiColore", "CalloutHighlights", "CalloutApprofondimento"];
const CalloutStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CalloutApprofondimento,
  CalloutHighlights,
  CalloutVariantiColore,
  EsempioAccessibilita,
  EsempioBasico,
  EsempioConIcona,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  CalloutStories as C,
  EsempioBasico as E,
  EsempioConIcona as a,
  CalloutVariantiColore as b,
  CalloutHighlights as c,
  CalloutApprofondimento as d,
  CalloutMoreFooter as e
};
