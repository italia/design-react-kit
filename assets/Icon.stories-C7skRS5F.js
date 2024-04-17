var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u;
import { R as React } from "./index-CQCy530F.js";
import { I as Icon, i as iconsList } from "./Icon-JP3vHaan.js";
import { R as Row, C as Col } from "./Col-DTtAS2uD.js";
const meta = {
  title: "Documentazione/Utilities/Icon",
  component: Icon
};
const EsempioInterattivo = {
  render: ({
    icon,
    title,
    size,
    padding,
    className,
    color
  }) => /* @__PURE__ */ React.createElement(Icon, {
    icon,
    size,
    title,
    padding,
    color,
    className
  }),
  args: {
    icon: "it-tool",
    title: "Alt Text",
    size: "",
    padding: false,
    color: "",
    className: ""
  },
  argTypes: {
    icon: {
      control: "select",
      options: iconsList
    },
    title: {
      control: "text"
    },
    size: {
      control: "select",
      options: {
        "Extra small": "xs",
        Small: "sm",
        default: "",
        Large: "lg",
        "Extra Large": "xl"
      }
    },
    className: {
      control: "select",
      options: {
        default: "",
        Scuro: "bg-dark",
        Chiaro: "bg-light"
      }
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "danger", "light", "white"]
    }
  }
};
const EsempioDimensioni = {
  render: ({
    icon,
    padding,
    className,
    color
  }) => {
    const dimensions = ["xs", "sm", "", "lg", "xl"];
    return /* @__PURE__ */ React.createElement(React.Fragment, null, dimensions.map((size) => /* @__PURE__ */ React.createElement(Icon, {
      key: size,
      icon,
      size,
      padding,
      color,
      className
    })));
  },
  args: {
    icon: "it-check-circle",
    padding: false,
    color: "",
    className: "bg-grey"
  }
};
const EsempioPadding = {
  args: {
    ...EsempioDimensioni.args,
    icon: "it-check-circle",
    padding: true,
    color: "",
    className: "bg-grey"
  }
};
const EsempioColori = {
  render: ({
    icon
  }) => {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, ["primary", "secondary", "success", "warning", "danger"].map((color) => /* @__PURE__ */ React.createElement(Icon, {
      key: color,
      icon,
      color,
      className: "bg-grey"
    })), ["light", "white"].map((color) => /* @__PURE__ */ React.createElement(Icon, {
      key: color,
      icon,
      color,
      className: "bg-dark"
    })));
  },
  args: {
    icon: "it-check-circle"
  }
};
const EsempioAllineamento = {
  render: () => {
    return /* @__PURE__ */ React.createElement("div", {
      style: {
        lineHeight: "4em"
      }
    }, /* @__PURE__ */ React.createElement(Icon, {
      className: "bg-light align-bottom",
      icon: "it-check-circle"
    }), /* @__PURE__ */ React.createElement(Icon, {
      className: "bg-light align-middle",
      icon: "it-check-circle"
    }), /* @__PURE__ */ React.createElement(Icon, {
      className: "bg-light align-top",
      icon: "it-check-circle"
    }));
  }
};
const ListaIcone = {
  render: () => {
    return /* @__PURE__ */ React.createElement(Row, null, iconsList.map((icon) => /* @__PURE__ */ React.createElement(Col, {
      md: {
        size: 6
      },
      lg: {
        size: 4
      },
      key: icon
    }, /* @__PURE__ */ React.createElement(Icon, {
      icon
    }), " ", icon)));
  }
};
const EsempioLoghiEsterni = {
  render: () => {
    return /* @__PURE__ */ React.createElement("div", {
      style: {
        lineHeight: "4em"
      }
    }, /* @__PURE__ */ React.createElement(Icon, {
      icon: "https://upload.wikimedia.org/wikipedia/it/f/f5/Palermo-Stemma_uff.png",
      title: "Stemma Palermo"
    }), /* @__PURE__ */ React.createElement(Icon, {
      icon: "https://dati.comune.roma.it/catalog/img/Roma-Stemma.png",
      size: "lg",
      title: "Stemma Roma"
    }), /* @__PURE__ */ React.createElement(Icon, {
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/CoA_Citt%C3%A0_di_Milano.svg",
      size: "xl",
      title: "Stemma Milano"
    }));
  }
};
EsempioInterattivo.parameters = {
  ...EsempioInterattivo.parameters,
  docs: {
    ...(_a = EsempioInterattivo.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: ({\n    icon,\n    title,\n    size,\n    padding,\n    className,\n    color\n  }) => <Icon icon={icon} size={size} title={title} padding={padding} color={color} className={className} />,\n  args: {\n    icon: 'it-tool',\n    title: 'Alt Text',\n    size: '',\n    padding: false,\n    color: '',\n    className: ''\n  },\n  argTypes: {\n    icon: {\n      control: 'select',\n      options: icons\n    },\n    title: {\n      control: 'text'\n    },\n    size: {\n      control: 'select',\n      options: {\n        'Extra small': 'xs',\n        Small: 'sm',\n        default: '',\n        Large: 'lg',\n        'Extra Large': 'xl'\n      }\n    },\n    className: {\n      control: 'select',\n      options: {\n        default: '',\n        Scuro: 'bg-dark',\n        Chiaro: 'bg-light'\n      }\n    },\n    color: {\n      control: 'select',\n      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'light', 'white']\n    }\n  }\n}",
      ...(_c = (_b = EsempioInterattivo.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
EsempioDimensioni.parameters = {
  ...EsempioDimensioni.parameters,
  docs: {
    ...(_d = EsempioDimensioni.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: ({\n    icon,\n    padding,\n    className,\n    color\n  }) => {\n    const dimensions = (['xs', 'sm', '', 'lg', 'xl'] as const);\n    return <>\n        {dimensions.map(size => <Icon key={size} icon={icon} size={size} padding={padding} color={color} className={className} />)}\n      </>;\n  },\n  args: {\n    icon: 'it-check-circle',\n    padding: false,\n    color: '',\n    className: 'bg-grey'\n  }\n}",
      ...(_f = (_e = EsempioDimensioni.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
EsempioPadding.parameters = {
  ...EsempioPadding.parameters,
  docs: {
    ...(_g = EsempioPadding.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  args: {\n    ...EsempioDimensioni.args,\n    icon: 'it-check-circle',\n    padding: true,\n    color: '',\n    className: 'bg-grey'\n  }\n}",
      ...(_i = (_h = EsempioPadding.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
EsempioColori.parameters = {
  ...EsempioColori.parameters,
  docs: {
    ...(_j = EsempioColori.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  render: ({\n    icon\n  }) => {\n    return <>\n        {['primary', 'secondary', 'success', 'warning', 'danger'].map(color => <Icon key={color} icon={icon} color={color} className='bg-grey' />)}\n        {['light', 'white'].map(color => <Icon key={color} icon={icon} color={color} className='bg-dark' />)}\n      </>;\n  },\n  args: {\n    icon: 'it-check-circle'\n  }\n}",
      ...(_l = (_k = EsempioColori.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
EsempioAllineamento.parameters = {
  ...EsempioAllineamento.parameters,
  docs: {
    ...(_m = EsempioAllineamento.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <div style={{\n      lineHeight: '4em'\n    }}>\n        <Icon className='bg-light align-bottom' icon='it-check-circle' />\n        <Icon className='bg-light align-middle' icon='it-check-circle' />\n        <Icon className='bg-light align-top' icon='it-check-circle' />\n      </div>;\n  }\n}",
      ...(_o = (_n = EsempioAllineamento.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
ListaIcone.parameters = {
  ...ListaIcone.parameters,
  docs: {
    ...(_p = ListaIcone.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <Row>\n        {icons.map(icon => <Col md={{\n        size: 6\n      }} lg={{\n        size: 4\n      }} key={icon}>\n            <Icon icon={icon} />&nbsp;{icon}\n          </Col>)}\n      </Row>;\n  }\n}",
      ...(_r = (_q = ListaIcone.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
EsempioLoghiEsterni.parameters = {
  ...EsempioLoghiEsterni.parameters,
  docs: {
    ...(_s = EsempioLoghiEsterni.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <div style={{\n      lineHeight: '4em'\n    }}>\n        <Icon icon='https://upload.wikimedia.org/wikipedia/it/f/f5/Palermo-Stemma_uff.png' title='Stemma Palermo' />\n        <Icon icon='https://dati.comune.roma.it/catalog/img/Roma-Stemma.png' size='lg' title='Stemma Roma' />\n        <Icon icon='https://upload.wikimedia.org/wikipedia/commons/9/93/CoA_Citt%C3%A0_di_Milano.svg' size='xl' title='Stemma Milano' />\n      </div>;\n  }\n}",
      ...(_u = (_t = EsempioLoghiEsterni.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
const __namedExportsOrder = ["EsempioInterattivo", "EsempioDimensioni", "EsempioPadding", "EsempioColori", "EsempioAllineamento", "ListaIcone", "EsempioLoghiEsterni"];
const IconStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EsempioAllineamento,
  EsempioColori,
  EsempioDimensioni,
  EsempioInterattivo,
  EsempioLoghiEsterni,
  EsempioPadding,
  ListaIcone,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  EsempioInterattivo as E,
  IconStories as I,
  ListaIcone as L,
  EsempioDimensioni as a,
  EsempioPadding as b,
  EsempioColori as c,
  EsempioAllineamento as d,
  EsempioLoghiEsterni as e
};
