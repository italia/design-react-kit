var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V;
import { R as React, r as reactExports } from "./index-C-_iGYWo.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-BcZlcF5e.js";
import { N as Navbar } from "./Navbar-BzESDADg.js";
import { N as NavItem, a as NavLink } from "./NavLink-DiRF8l1-.js";
import { F as FormGroup } from "./FormGroup-Dm03kL2Q.js";
import { L as Label } from "./Label-Dgx7kIS2.js";
import { I as Icon } from "./Icon-BNsLnf7r.js";
import { T as Toggle } from "./Toggle-BWGPiEzQ.js";
import { I as Input } from "./Input-BqSYI14t.js";
import { C as Collapse } from "./Collapse-DXWFzISy.js";
const meta = {
  title: "Documentazione/Organizzare i contenuti/Liste di link",
  component: LinkList
};
const TitoloLista = {
  render: () => {
    return /* @__PURE__ */ React.createElement("div", {
      className: "sticky-wrapper navbar-wrapper"
    }, /* @__PURE__ */ React.createElement(Navbar, {
      expand: "lg",
      className: "it-navscroll-wrapper it-top-navscroll"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "menu-wrapper"
    }, /* @__PURE__ */ React.createElement(LinkList, {
      wrapperClassName: "menu-link-list",
      header: /* @__PURE__ */ React.createElement("h3", null, "Indice della pagina")
    }, /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
      href: "#cos-e"
    }, /* @__PURE__ */ React.createElement("span", null, "Cos'è"))), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
      href: "#luogo"
    }, /* @__PURE__ */ React.createElement("span", null, "Luogo"))), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
      href: "#date-e-orari"
    }, /* @__PURE__ */ React.createElement("span", null, "Date e orari"))), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
      href: "#costi"
    }, /* @__PURE__ */ React.createElement("span", null, "Costi"))), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
      href: "#documenti"
    }, /* @__PURE__ */ React.createElement("span", null, "Documenti"))), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
      href: "#contatti"
    }, /* @__PURE__ */ React.createElement("span", null, "Contatti"))), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
      href: "#appuntamenti"
    }, /* @__PURE__ */ React.createElement("span", null, "Appuntamenti"))), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(NavLink, {
      href: "#ulteriori-informazioni"
    }, /* @__PURE__ */ React.createElement("span", null, "Ulteriori informazioni")))))));
  }
};
const _Esempi = {
  render: () => /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 1")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 2")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 3")))
};
const _StatoAttivo = {
  render: () => /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 1")), /* @__PURE__ */ React.createElement(LinkListItem, {
    active: true
  }, /* @__PURE__ */ React.createElement("span", null, "Link list 2 active")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 3")))
};
const _StatoDisabilitato = {
  render: () => /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 1")), /* @__PURE__ */ React.createElement(LinkListItem, {
    disabled: true
  }, /* @__PURE__ */ React.createElement("span", null, "Link list 2 disabled")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 3")))
};
const HeaderEDividerNoLink = {
  render: () => /* @__PURE__ */ React.createElement(LinkList, {
    header: /* @__PURE__ */ React.createElement("div", {
      className: "link-list-heading"
    }, "Intestazione senza link")
  }, /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 1")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 2")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 3")), /* @__PURE__ */ React.createElement(LinkListItem, {
    divider: true
  }), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 4")))
};
const HeaderEDividerConLink = {
  render: () => /* @__PURE__ */ React.createElement(LinkList, {
    header: /* @__PURE__ */ React.createElement("div", {
      className: "link-list-heading"
    }, /* @__PURE__ */ React.createElement("a", {
      href: "#"
    }, "Intestazione con link"))
  }, /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 1")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 2")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 3")), /* @__PURE__ */ React.createElement(LinkListItem, {
    divider: true
  }), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 4")))
};
const Sizing = {
  render: () => /* @__PURE__ */ React.createElement(LinkList, {
    header: /* @__PURE__ */ React.createElement("div", {
      className: "link-list-heading"
    }, "Intestazione senza link")
  }, /* @__PURE__ */ React.createElement(LinkListItem, {
    large: true,
    href: "#"
  }, /* @__PURE__ */ React.createElement("span", null, "Link list 1")), /* @__PURE__ */ React.createElement(LinkListItem, {
    large: true,
    href: "#"
  }, /* @__PURE__ */ React.createElement("span", null, "Link list 2")), /* @__PURE__ */ React.createElement(LinkListItem, {
    large: true,
    href: "#"
  }, /* @__PURE__ */ React.createElement("span", null, "Link list 3")), /* @__PURE__ */ React.createElement(LinkListItem, {
    divider: true
  }), /* @__PURE__ */ React.createElement(LinkListItem, {
    large: true,
    href: "#"
  }, /* @__PURE__ */ React.createElement("span", null, "Link list 4")))
};
const EsempioMultiline = {
  render: () => /* @__PURE__ */ React.createElement(LinkList, {
    multiline: true
  }, /* @__PURE__ */ React.createElement(LinkListItem, {
    active: true,
    className: "icon-right",
    href: "#"
  }, /* @__PURE__ */ React.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ React.createElement("span", null, "Link list 1 active"), /* @__PURE__ */ React.createElement(Icon, {
    color: "primary",
    icon: "it-chevron-right",
    "aria-hidden": true
  })), /* @__PURE__ */ React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit…")), /* @__PURE__ */ React.createElement(LinkListItem, {
    divider: true
  }), /* @__PURE__ */ React.createElement(LinkListItem, {
    className: "icon-right",
    href: "#"
  }, /* @__PURE__ */ React.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ React.createElement("span", null, "Link list 2"), /* @__PURE__ */ React.createElement(Icon, {
    color: "primary",
    icon: "it-chevron-right",
    "aria-hidden": true
  })), /* @__PURE__ */ React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit…")), /* @__PURE__ */ React.createElement(LinkListItem, {
    divider: true
  }), /* @__PURE__ */ React.createElement(LinkListItem, {
    disabled: true,
    className: "icon-right",
    href: "#"
  }, /* @__PURE__ */ React.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ React.createElement("span", null, "Link list 3 disabled"), /* @__PURE__ */ React.createElement(Icon, {
    color: "primary",
    icon: "it-chevron-right",
    "aria-hidden": true
  })), /* @__PURE__ */ React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit…")))
};
const CollapseExampleHooks = () => {
  const [collapseOpen1, toggleCollapse1] = reactExports.useState(false);
  const [collapseOpen2, toggleCollapse2] = reactExports.useState(false);
  const [collapseOpen3, toggleCollapse3] = reactExports.useState(false);
  const onToggle1 = (e) => {
    e.preventDefault();
    toggleCollapse1(!collapseOpen1);
  };
  const onToggle2 = (e) => {
    e.preventDefault();
    toggleCollapse2(!collapseOpen2);
  };
  const onToggle3 = (e) => {
    e.preventDefault();
    toggleCollapse3(!collapseOpen3);
  };
  const expanded = {
    "aria-expanded": true
  };
  return /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, {
    bold: true,
    large: true,
    className: "icon-right",
    onClick: onToggle1,
    ...collapseOpen1 ? expanded : {}
  }, /* @__PURE__ */ React.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ React.createElement("span", null, "Link list 1 "), /* @__PURE__ */ React.createElement(Icon, {
    className: "right",
    color: "primary",
    icon: "it-expand",
    "aria-hidden": true
  }))), /* @__PURE__ */ React.createElement(Collapse, {
    isOpen: collapseOpen1
  }, /* @__PURE__ */ React.createElement(LinkList, {
    sublist: true
  }, /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 4 ")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 5 ")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 6 ")))), /* @__PURE__ */ React.createElement(LinkListItem, {
    bold: true,
    large: true,
    className: "icon-right",
    onClick: onToggle2,
    ...collapseOpen2 ? expanded : {}
  }, /* @__PURE__ */ React.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ React.createElement("span", null, "Link list 2 "), /* @__PURE__ */ React.createElement(Icon, {
    className: "right",
    color: "primary",
    icon: "it-expand",
    "aria-hidden": true
  }))), /* @__PURE__ */ React.createElement(Collapse, {
    isOpen: collapseOpen2
  }, /* @__PURE__ */ React.createElement(LinkList, {
    sublist: true
  }, /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 7 ")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 8 ")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 9 ")))), /* @__PURE__ */ React.createElement(LinkListItem, {
    bold: true,
    large: true,
    className: "icon-right",
    onClick: onToggle3,
    ...collapseOpen3 ? expanded : {}
  }, /* @__PURE__ */ React.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ React.createElement("span", null, "Link list 3 "), /* @__PURE__ */ React.createElement(Icon, {
    className: "right",
    color: "primary",
    icon: "it-expand",
    "aria-hidden": true
  }))), /* @__PURE__ */ React.createElement(Collapse, {
    isOpen: collapseOpen3
  }, /* @__PURE__ */ React.createElement(LinkList, {
    sublist: true
  }, /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 10 ")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 11 ")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 12 ")))));
};
const CollapseExample = {
  render: () => {
    return /* @__PURE__ */ React.createElement(CollapseExampleHooks, null);
  }
};
const NavigationComponentFixed = {
  render: () => /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, {
    bold: true,
    large: true,
    className: "icon-right"
  }, /* @__PURE__ */ React.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ React.createElement("span", null, "Link list 1 "), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-link",
    color: "primary",
    className: "right"
  }))), /* @__PURE__ */ React.createElement(LinkListItem, {
    bold: true,
    large: true,
    className: "icon-right"
  }, /* @__PURE__ */ React.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ React.createElement("span", null, "Link list 2 "), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-link",
    color: "primary",
    className: "right"
  }))), /* @__PURE__ */ React.createElement(LinkList, {
    sublist: true
  }, /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 4 ")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 5 ")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("span", null, "Link list 6 "))), /* @__PURE__ */ React.createElement(LinkListItem, {
    bold: true,
    large: true,
    className: "icon-right"
  }, /* @__PURE__ */ React.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ React.createElement("span", null, "Link list 3 "), /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-link",
    color: "primary",
    className: "right"
  }))))
};
const ControlliComponent = {
  render: () => /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, {
    active: true,
    className: "icon-left"
  }, /* @__PURE__ */ React.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ React.createElement(Icon, {
    color: "primary",
    icon: "it-chevron-right",
    "aria-hidden": true
  }), /* @__PURE__ */ React.createElement("span", null, "Link list 1 active"))), /* @__PURE__ */ React.createElement(LinkListItem, {
    className: "icon-left"
  }, /* @__PURE__ */ React.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ React.createElement(Icon, {
    color: "primary",
    icon: "it-chevron-right",
    "aria-hidden": true
  }), /* @__PURE__ */ React.createElement("span", null, "Link list 2"))), /* @__PURE__ */ React.createElement(LinkListItem, {
    disabled: true,
    className: "icon-left"
  }, /* @__PURE__ */ React.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ React.createElement(Icon, {
    color: "primary",
    icon: "it-chevron-right",
    "aria-hidden": true
  }), /* @__PURE__ */ React.createElement("span", null, "Link list 3 disabled"))))
};
const ControlliSecondariComponent = {
  render: () => /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, {
    active: true,
    className: "icon-right"
  }, /* @__PURE__ */ React.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ React.createElement("span", null, "Link list 1 active"), /* @__PURE__ */ React.createElement(Icon, {
    color: "primary",
    icon: "it-link",
    "aria-hidden": true
  }))), /* @__PURE__ */ React.createElement(LinkListItem, {
    className: "icon-right"
  }, /* @__PURE__ */ React.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ React.createElement("span", null, "Link list 2"), /* @__PURE__ */ React.createElement(Icon, {
    color: "primary",
    icon: "it-link",
    "aria-hidden": true
  }))), /* @__PURE__ */ React.createElement(LinkListItem, {
    disabled: true,
    className: "icon-right"
  }, /* @__PURE__ */ React.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ React.createElement("span", null, "Link list 3 disabled"), /* @__PURE__ */ React.createElement(Icon, {
    color: "primary",
    icon: "it-link",
    "aria-hidden": true
  }))))
};
const PrimaryESecondaryAction = {
  render: () => /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, {
    active: true,
    className: "icon-left"
  }, /* @__PURE__ */ React.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ React.createElement(Icon, {
    color: "primary",
    icon: "it-link",
    "aria-hidden": true
  }), /* @__PURE__ */ React.createElement("span", null, "Link list 1 active"))), /* @__PURE__ */ React.createElement(LinkListItem, {
    className: "icon-left"
  }, /* @__PURE__ */ React.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ React.createElement(Icon, {
    color: "primary",
    icon: "it-link",
    "aria-hidden": true
  }), /* @__PURE__ */ React.createElement("span", null, "Link list 2"))), /* @__PURE__ */ React.createElement(LinkListItem, {
    disabled: true,
    className: "icon-left"
  }, /* @__PURE__ */ React.createElement(LinkListItem.TitleIconWrapper, null, /* @__PURE__ */ React.createElement(Icon, {
    color: "primary",
    icon: "it-link",
    "aria-hidden": true
  }), /* @__PURE__ */ React.createElement("span", null, "Link list 3 disabled"))))
};
const ConAvatar = {
  render: () => /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, {
    active: true
  }, /* @__PURE__ */ React.createElement("img", {
    className: "avatar lg-size",
    src: "http://placehold.co/40x40",
    title: "avatartitle",
    alt: "avataralt"
  }), /* @__PURE__ */ React.createElement("span", null, "Link list 1 active ")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement("img", {
    className: "avatar lg-size",
    src: "http://placehold.co/40x40",
    title: "avatartitle",
    alt: "avataralt"
  }), /* @__PURE__ */ React.createElement("span", null, "Link list 2 ")), /* @__PURE__ */ React.createElement(LinkListItem, {
    disabled: true
  }, /* @__PURE__ */ React.createElement("img", {
    className: "avatar lg-size",
    src: "http://placehold.co/40x40",
    title: "avatartitle",
    alt: "avataralt"
  }), /* @__PURE__ */ React.createElement("span", null, "Link list 3 disabled ")))
};
const ConSwitch = {
  render: () => /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, {
    tag: "div",
    active: true
  }, /* @__PURE__ */ React.createElement(Toggle, {
    label: "Label per toggle"
  })), /* @__PURE__ */ React.createElement(LinkListItem, {
    tag: "div",
    disabled: true
  }, /* @__PURE__ */ React.createElement(Toggle, {
    disabled: true,
    label: "Label per disabled toggle"
  })))
};
const ConCheckbox = {
  render: () => /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, {
    tag: "div",
    active: true
  }, /* @__PURE__ */ React.createElement(FormGroup, {
    check: true,
    className: "form-check-group"
  }, /* @__PURE__ */ React.createElement(Input, {
    id: "checkbox1",
    type: "checkbox",
    defaultChecked: true
  }), /* @__PURE__ */ React.createElement(Label, {
    for: "checkbox1",
    check: true
  }, "Checkbox selezionato"))), /* @__PURE__ */ React.createElement(LinkListItem, {
    tag: "div",
    active: true
  }, /* @__PURE__ */ React.createElement(FormGroup, {
    check: true,
    className: "form-check-group"
  }, /* @__PURE__ */ React.createElement(Input, {
    id: "checkbox2",
    type: "checkbox"
  }), /* @__PURE__ */ React.createElement(Label, {
    for: "checkbox2",
    check: true
  }, "Checkbox non selezionato"))), /* @__PURE__ */ React.createElement(LinkListItem, {
    tag: "div",
    disabled: true
  }, /* @__PURE__ */ React.createElement(FormGroup, {
    check: true,
    className: "form-check-group"
  }, /* @__PURE__ */ React.createElement(Input, {
    id: "checkbox3",
    type: "checkbox",
    disabled: true
  }), /* @__PURE__ */ React.createElement(Label, {
    for: "checkbox3",
    check: true
  }, "Checkbox disabilitato non selezionato"))))
};
TitoloLista.parameters = {
  ...TitoloLista.parameters,
  docs: {
    ...(_a = TitoloLista.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <div className="sticky-wrapper navbar-wrapper">\n        <Navbar expand="lg" className="it-navscroll-wrapper it-top-navscroll">\n          <div className="menu-wrapper">\n            <LinkList wrapperClassName="menu-link-list" header={<h3>Indice della pagina</h3>}>\n              <NavItem>\n                <NavLink href="#cos-e">\n                  <span>Cos&#39;è</span>\n                </NavLink>\n              </NavItem>\n              <NavItem>\n                <NavLink href="#luogo">\n                  <span>Luogo</span>\n                </NavLink>\n              </NavItem>\n              <NavItem>\n                <NavLink href="#date-e-orari">\n                  <span>Date e orari</span>\n                </NavLink>\n              </NavItem>\n              <NavItem>\n                <NavLink href="#costi">\n                  <span>Costi</span>\n                </NavLink>\n              </NavItem>\n              <NavItem>\n                <NavLink href="#documenti">\n                  <span>Documenti</span>\n                </NavLink>\n              </NavItem>\n              <NavItem>\n                <NavLink href="#contatti">\n                  <span>Contatti</span>\n                </NavLink>\n              </NavItem>\n              <NavItem>\n                <NavLink href="#appuntamenti">\n                  <span>Appuntamenti</span>\n                </NavLink>\n              </NavItem>\n              <NavItem>\n                <NavLink href="#ulteriori-informazioni">\n                  <span>Ulteriori informazioni</span>\n                </NavLink>\n              </NavItem>\n            </LinkList>\n          </div>\n        </Navbar>\n      </div>;\n  }\n}',
      ...(_c = (_b = TitoloLista.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
_Esempi.parameters = {
  ..._Esempi.parameters,
  docs: {
    ...(_d = _Esempi.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => <LinkList>\n      <LinkListItem>\n        <span>Link list 1</span>\n      </LinkListItem>\n      <LinkListItem>\n        <span>Link list 2</span>\n      </LinkListItem>\n      <LinkListItem>\n        <span>Link list 3</span>\n      </LinkListItem>\n    </LinkList>\n}",
      ...(_f = (_e = _Esempi.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
_StatoAttivo.parameters = {
  ..._StatoAttivo.parameters,
  docs: {
    ...(_g = _StatoAttivo.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => <LinkList>\n      <LinkListItem>\n        <span>Link list 1</span>\n      </LinkListItem>\n      <LinkListItem active>\n        <span>Link list 2 active</span>\n      </LinkListItem>\n      <LinkListItem>\n        <span>Link list 3</span>\n      </LinkListItem>\n    </LinkList>\n}",
      ...(_i = (_h = _StatoAttivo.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
_StatoDisabilitato.parameters = {
  ..._StatoDisabilitato.parameters,
  docs: {
    ...(_j = _StatoDisabilitato.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  render: () => <LinkList>\n      <LinkListItem>\n        <span>Link list 1</span>\n      </LinkListItem>\n      <LinkListItem disabled>\n        <span>Link list 2 disabled</span>\n      </LinkListItem>\n      <LinkListItem>\n        <span>Link list 3</span>\n      </LinkListItem>\n    </LinkList>\n}",
      ...(_l = (_k = _StatoDisabilitato.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
HeaderEDividerNoLink.parameters = {
  ...HeaderEDividerNoLink.parameters,
  docs: {
    ...(_m = HeaderEDividerNoLink.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: '{\n  render: () => <LinkList header={<div className="link-list-heading">Intestazione senza link</div>}>\n      <LinkListItem>\n        <span>Link list 1</span>\n      </LinkListItem>\n      <LinkListItem>\n        <span>Link list 2</span>\n      </LinkListItem>\n      <LinkListItem>\n        <span>Link list 3</span>\n      </LinkListItem>\n      <LinkListItem divider />\n      <LinkListItem>\n        <span>Link list 4</span>\n      </LinkListItem>\n    </LinkList>\n}',
      ...(_o = (_n = HeaderEDividerNoLink.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
HeaderEDividerConLink.parameters = {
  ...HeaderEDividerConLink.parameters,
  docs: {
    ...(_p = HeaderEDividerConLink.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: '{\n  render: () => <LinkList header={<div className="link-list-heading">\n          <a href="#">Intestazione con link</a>\n        </div>}>\n      <LinkListItem>\n        <span>Link list 1</span>\n      </LinkListItem>\n      <LinkListItem>\n        <span>Link list 2</span>\n      </LinkListItem>\n      <LinkListItem>\n        <span>Link list 3</span>\n      </LinkListItem>\n      <LinkListItem divider />\n      <LinkListItem>\n        <span>Link list 4</span>\n      </LinkListItem>\n    </LinkList>\n}',
      ...(_r = (_q = HeaderEDividerConLink.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
Sizing.parameters = {
  ...Sizing.parameters,
  docs: {
    ...(_s = Sizing.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: '{\n  render: () => <LinkList header={<div className="link-list-heading">Intestazione senza link</div>}>\n      <LinkListItem large href="#">\n        <span>Link list 1</span>\n      </LinkListItem>\n      <LinkListItem large href="#">\n        <span>Link list 2</span>\n      </LinkListItem>\n      <LinkListItem large href="#">\n        <span>Link list 3</span>\n      </LinkListItem>\n      <LinkListItem divider />\n      <LinkListItem large href="#">\n        <span>Link list 4</span>\n      </LinkListItem>\n    </LinkList>\n}',
      ...(_u = (_t = Sizing.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
EsempioMultiline.parameters = {
  ...EsempioMultiline.parameters,
  docs: {
    ...(_v = EsempioMultiline.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: '{\n  render: () => <LinkList multiline>\n      <LinkListItem active className="icon-right" href="#">\n        <LinkListItem.TitleIconWrapper>\n          <span>Link list 1 active</span>\n          <Icon color="primary" icon="it-chevron-right" aria-hidden />\n        </LinkListItem.TitleIconWrapper>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>\n      </LinkListItem>\n      <LinkListItem divider />\n      <LinkListItem className="icon-right" href="#">\n        <LinkListItem.TitleIconWrapper>\n          <span>Link list 2</span>\n          <Icon color="primary" icon="it-chevron-right" aria-hidden />\n        </LinkListItem.TitleIconWrapper>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>\n      </LinkListItem>\n      <LinkListItem divider />\n      <LinkListItem disabled className="icon-right" href="#">\n        <LinkListItem.TitleIconWrapper>\n          <span>Link list 3 disabled</span>\n          <Icon color="primary" icon="it-chevron-right" aria-hidden />\n        </LinkListItem.TitleIconWrapper>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit…</p>\n      </LinkListItem>\n    </LinkList>\n}',
      ...(_x = (_w = EsempioMultiline.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
CollapseExample.parameters = {
  ...CollapseExample.parameters,
  docs: {
    ...(_y = CollapseExample.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <CollapseExampleHooks />;\n  }\n}",
      ...(_A = (_z = CollapseExample.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
NavigationComponentFixed.parameters = {
  ...NavigationComponentFixed.parameters,
  docs: {
    ...(_B = NavigationComponentFixed.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: '{\n  render: () => <LinkList>\n      <LinkListItem bold large className="icon-right">\n        <LinkListItem.TitleIconWrapper>\n          <span>Link list 1 </span>\n          <Icon icon="it-link" color="primary" className="right" />\n        </LinkListItem.TitleIconWrapper>\n      </LinkListItem>\n      <LinkListItem bold large className="icon-right">\n        <LinkListItem.TitleIconWrapper>\n          <span>Link list 2 </span>\n          <Icon icon="it-link" color="primary" className="right" />\n        </LinkListItem.TitleIconWrapper>\n      </LinkListItem>\n      <LinkList sublist>\n        <LinkListItem>\n          <span>Link list 4 </span>\n        </LinkListItem>\n        <LinkListItem>\n          <span>Link list 5 </span>\n        </LinkListItem>\n        <LinkListItem>\n          <span>Link list 6 </span>\n        </LinkListItem>\n      </LinkList>\n      <LinkListItem bold large className="icon-right">\n        <LinkListItem.TitleIconWrapper>\n          <span>Link list 3 </span>\n          <Icon icon="it-link" color="primary" className="right" />\n        </LinkListItem.TitleIconWrapper>\n      </LinkListItem>\n    </LinkList>\n}',
      ...(_D = (_C = NavigationComponentFixed.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
ControlliComponent.parameters = {
  ...ControlliComponent.parameters,
  docs: {
    ...(_E = ControlliComponent.parameters) == null ? void 0 : _E.docs,
    source: {
      originalSource: '{\n  render: () => <LinkList>\n      <LinkListItem active className="icon-left">\n        <LinkListItem.TitleIconWrapper>\n          <Icon color="primary" icon="it-chevron-right" aria-hidden />\n          <span>Link list 1 active</span>\n        </LinkListItem.TitleIconWrapper>\n      </LinkListItem>\n      <LinkListItem className="icon-left">\n        <LinkListItem.TitleIconWrapper>\n          <Icon color="primary" icon="it-chevron-right" aria-hidden />\n          <span>Link list 2</span>\n        </LinkListItem.TitleIconWrapper>\n      </LinkListItem>\n      <LinkListItem disabled className="icon-left">\n        <LinkListItem.TitleIconWrapper>\n          <Icon color="primary" icon="it-chevron-right" aria-hidden />\n          <span>Link list 3 disabled</span>\n        </LinkListItem.TitleIconWrapper>\n      </LinkListItem>\n    </LinkList>\n}',
      ...(_G = (_F = ControlliComponent.parameters) == null ? void 0 : _F.docs) == null ? void 0 : _G.source
    }
  }
};
ControlliSecondariComponent.parameters = {
  ...ControlliSecondariComponent.parameters,
  docs: {
    ...(_H = ControlliSecondariComponent.parameters) == null ? void 0 : _H.docs,
    source: {
      originalSource: '{\n  render: () => <LinkList>\n      <LinkListItem active className="icon-right">\n        <LinkListItem.TitleIconWrapper>\n          <span>Link list 1 active</span>\n          <Icon color="primary" icon="it-link" aria-hidden />\n        </LinkListItem.TitleIconWrapper>\n      </LinkListItem>\n      <LinkListItem className="icon-right">\n        <LinkListItem.TitleIconWrapper>\n          <span>Link list 2</span>\n          <Icon color="primary" icon="it-link" aria-hidden />\n        </LinkListItem.TitleIconWrapper>\n      </LinkListItem>\n      <LinkListItem disabled className="icon-right">\n        <LinkListItem.TitleIconWrapper>\n          <span>Link list 3 disabled</span>\n          <Icon color="primary" icon="it-link" aria-hidden />\n        </LinkListItem.TitleIconWrapper>\n      </LinkListItem>\n    </LinkList>\n}',
      ...(_J = (_I = ControlliSecondariComponent.parameters) == null ? void 0 : _I.docs) == null ? void 0 : _J.source
    }
  }
};
PrimaryESecondaryAction.parameters = {
  ...PrimaryESecondaryAction.parameters,
  docs: {
    ...(_K = PrimaryESecondaryAction.parameters) == null ? void 0 : _K.docs,
    source: {
      originalSource: '{\n  render: () => <LinkList>\n      <LinkListItem active className="icon-left">\n        <LinkListItem.TitleIconWrapper>\n          <Icon color="primary" icon="it-link" aria-hidden />\n          <span>Link list 1 active</span>\n        </LinkListItem.TitleIconWrapper>\n      </LinkListItem>\n      <LinkListItem className="icon-left">\n        <LinkListItem.TitleIconWrapper>\n          <Icon color="primary" icon="it-link" aria-hidden />\n          <span>Link list 2</span>\n        </LinkListItem.TitleIconWrapper>\n      </LinkListItem>\n      <LinkListItem disabled className="icon-left">\n        <LinkListItem.TitleIconWrapper>\n          <Icon color="primary" icon="it-link" aria-hidden />\n          <span>Link list 3 disabled</span>\n        </LinkListItem.TitleIconWrapper>\n      </LinkListItem>\n    </LinkList>\n}',
      ...(_M = (_L = PrimaryESecondaryAction.parameters) == null ? void 0 : _L.docs) == null ? void 0 : _M.source
    }
  }
};
ConAvatar.parameters = {
  ...ConAvatar.parameters,
  docs: {
    ...(_N = ConAvatar.parameters) == null ? void 0 : _N.docs,
    source: {
      originalSource: '{\n  render: () => <LinkList>\n      <LinkListItem active>\n        <img className="avatar lg-size" src="http://placehold.co/40x40" title="avatartitle" alt="avataralt" />\n        <span>Link list 1 active </span>\n      </LinkListItem>\n      <LinkListItem>\n        <img className="avatar lg-size" src="http://placehold.co/40x40" title="avatartitle" alt="avataralt" />\n        <span>Link list 2 </span>\n      </LinkListItem>\n      <LinkListItem disabled>\n        <img className="avatar lg-size" src="http://placehold.co/40x40" title="avatartitle" alt="avataralt" />\n        <span>Link list 3 disabled </span>\n      </LinkListItem>\n    </LinkList>\n}',
      ...(_P = (_O = ConAvatar.parameters) == null ? void 0 : _O.docs) == null ? void 0 : _P.source
    }
  }
};
ConSwitch.parameters = {
  ...ConSwitch.parameters,
  docs: {
    ...(_Q = ConSwitch.parameters) == null ? void 0 : _Q.docs,
    source: {
      originalSource: '{\n  render: () => <LinkList>\n      <LinkListItem tag="div" active>\n        <Toggle label="Label per toggle" />\n      </LinkListItem>\n      <LinkListItem tag="div" disabled>\n        <Toggle disabled label="Label per disabled toggle" />\n      </LinkListItem>\n    </LinkList>\n}',
      ...(_S = (_R = ConSwitch.parameters) == null ? void 0 : _R.docs) == null ? void 0 : _S.source
    }
  }
};
ConCheckbox.parameters = {
  ...ConCheckbox.parameters,
  docs: {
    ...(_T = ConCheckbox.parameters) == null ? void 0 : _T.docs,
    source: {
      originalSource: '{\n  render: () => <LinkList>\n      <LinkListItem tag="div" active>\n        <FormGroup check className="form-check-group">\n          <Input id="checkbox1" type="checkbox" defaultChecked />\n          <Label for="checkbox1" check>\n            Checkbox selezionato\n          </Label>\n        </FormGroup>\n      </LinkListItem>\n      <LinkListItem tag="div" active>\n        <FormGroup check className="form-check-group">\n          <Input id="checkbox2" type="checkbox" />\n          <Label for="checkbox2" check>\n            Checkbox non selezionato\n          </Label>\n        </FormGroup>\n      </LinkListItem>\n      <LinkListItem tag="div" disabled>\n        <FormGroup check className="form-check-group">\n          <Input id="checkbox3" type="checkbox" disabled />\n          <Label for="checkbox3" check>\n            Checkbox disabilitato non selezionato\n          </Label>\n        </FormGroup>\n      </LinkListItem>\n    </LinkList>\n}',
      ...(_V = (_U = ConCheckbox.parameters) == null ? void 0 : _U.docs) == null ? void 0 : _V.source
    }
  }
};
const __namedExportsOrder = ["TitoloLista", "_Esempi", "_StatoAttivo", "_StatoDisabilitato", "HeaderEDividerNoLink", "HeaderEDividerConLink", "Sizing", "EsempioMultiline", "CollapseExample", "NavigationComponentFixed", "ControlliComponent", "ControlliSecondariComponent", "PrimaryESecondaryAction", "ConAvatar", "ConSwitch", "ConCheckbox"];
const LinkListStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CollapseExample,
  ConAvatar,
  ConCheckbox,
  ConSwitch,
  ControlliComponent,
  ControlliSecondariComponent,
  EsempioMultiline,
  HeaderEDividerConLink,
  HeaderEDividerNoLink,
  NavigationComponentFixed,
  PrimaryESecondaryAction,
  Sizing,
  TitoloLista,
  _Esempi,
  _StatoAttivo,
  _StatoDisabilitato,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  ConAvatar as C,
  EsempioMultiline as E,
  HeaderEDividerNoLink as H,
  LinkListStories as L,
  NavigationComponentFixed as N,
  PrimaryESecondaryAction as P,
  Sizing as S,
  _Esempi as _,
  _StatoAttivo as a,
  _StatoDisabilitato as b,
  HeaderEDividerConLink as c,
  ControlliComponent as d,
  ControlliSecondariComponent as e,
  CollapseExample as f,
  ConSwitch as g,
  ConCheckbox as h
};
