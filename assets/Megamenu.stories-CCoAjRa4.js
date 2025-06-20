var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
import { e, r as reactExports } from "./index-CoR6MlO7.js";
import { R as Row, C as Col } from "./Col-DbKMWTUR.js";
import { N as Navbar } from "./Navbar-QOV4yCJ6.js";
import { N as NavbarBrand } from "./NavbarBrand-CDiDFGoH.js";
import { N as NavbarToggler } from "./NavbarToggler-CZ3Jv3hM.js";
import { C as Collapse } from "./Collapse-DHOwoUc6.js";
import { I as Icon } from "./Icon-DiIdFz3Z.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-OwWjEjRO.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { M as MegamenuItem, N as Nav, a as MegamenuHighlightColumn } from "./Nav-EtCfTUpW.js";
import "./track-focus-DbJ2CO43.js";
const MegamenuFooter = ({ className, children, vertical, ...attributes }) => {
  const classes = classNames(className, `it-footer-link-wrapper${vertical ? "-vertical" : ""}`);
  return /* @__PURE__ */ e.createElement("div", { className: classes, ...attributes }, children);
};
const Item = ({ href, children }) => {
  return /* @__PURE__ */ e.createElement("a", { href: href || "#", className: "it-footer-link" }, children);
};
MegamenuFooter.Item = Item;
MegamenuFooter.__docgenInfo = { "description": "", "methods": [{ "name": "Item", "docblock": null, "modifiers": ["static"], "params": [{ "name": "{ href, children }", "optional": false, "type": null }], "returns": null }], "displayName": "MegamenuFooter" };
const meta = {
  title: "Documentazione/Menu di navigazione/Megamenu",
  component: MegamenuItem,
  parameters: {
    docs: {
      story: {
        height: "350px"
      },
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const ConLinkMoreHooks = () => {
  const [openNav, setOpenNav] = reactExports.useState(false);
  const toggle = () => {
    setOpenNav(!openNav);
  };
  return /* @__PURE__ */ e.createElement(Navbar, { expand: "lg", className: "has-megamenu" }, /* @__PURE__ */ e.createElement(NavbarBrand, null), /* @__PURE__ */ e.createElement(NavbarToggler, { className: "custom-navbar-toggler", onClick: toggle }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-list", size: "sm" })), /* @__PURE__ */ e.createElement(Collapse, { isOpen: openNav, navbar: true, header: true, megamenu: true }, /* @__PURE__ */ e.createElement(Nav, { className: "mt-0", navbar: true }, /* @__PURE__ */ e.createElement(MegamenuItem, { itemName: 'Megamenu con link "Esplora tutti"' }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "4" }, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 1")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 3")))), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "4" }, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 4")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 5")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 6")))), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "4" }, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 7")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 8")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 9")))), /* @__PURE__ */ e.createElement(MegamenuFooter, { className: "text-end" }, /* @__PURE__ */ e.createElement("a", { href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Esplora tutti i contenuti del megamenu", " ", /* @__PURE__ */ e.createElement(Icon, { className: "ms-2", color: "primary", icon: "it-arrow-right", size: "sm" }))))))));
};
const ConLinkMore = {
  render: () => {
    return /* @__PURE__ */ e.createElement(ConLinkMoreHooks, null);
  }
};
const ConIntestazioneELinkMoreHooks = () => {
  const [openNav, setOpenNav] = reactExports.useState(false);
  const toggle = () => {
    setOpenNav(!openNav);
  };
  return /* @__PURE__ */ e.createElement(Navbar, { expand: "lg", className: "has-megamenu" }, /* @__PURE__ */ e.createElement(NavbarBrand, null), /* @__PURE__ */ e.createElement(NavbarToggler, { className: "custom-navbar-toggler", onClick: toggle }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-list", size: "sm" })), /* @__PURE__ */ e.createElement(Collapse, { isOpen: openNav, navbar: true, header: true, megamenu: true }, /* @__PURE__ */ e.createElement(Nav, { className: "mt-0", navbar: true }, /* @__PURE__ */ e.createElement(MegamenuItem, { itemName: 'Megamenu con intestazione e "esplora tutti"' }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12" }, /* @__PURE__ */ e.createElement("div", { className: "it-heading-link-wrapper" }, /* @__PURE__ */ e.createElement("a", { className: "it-heading-link", href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2 mb-1", icon: "it-arrow-right-triangle" }), /* @__PURE__ */ e.createElement("span", null, "Esplora la sezione megamenu"))), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "4" }, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 1")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 3"))), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "4" }, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 4")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 5")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 6"))), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "4" }, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 7")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 8")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 9"))))))))));
};
const ConIntestazioneELinkMore = {
  render: () => {
    return /* @__PURE__ */ e.createElement(ConIntestazioneELinkMoreHooks, null);
  }
};
const ConCallToActionInBassoHooks = () => {
  const [openNav, setOpenNav] = reactExports.useState(false);
  const toggle = () => {
    setOpenNav(!openNav);
  };
  return /* @__PURE__ */ e.createElement(Navbar, { expand: "lg", className: "has-megamenu" }, /* @__PURE__ */ e.createElement(NavbarBrand, null), /* @__PURE__ */ e.createElement(NavbarToggler, { className: "custom-navbar-toggler", onClick: toggle }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-list", size: "sm" })), /* @__PURE__ */ e.createElement(Collapse, { isOpen: openNav, navbar: true, header: true, megamenu: true }, /* @__PURE__ */ e.createElement(Nav, { className: "mt-0", navbar: true }, /* @__PURE__ */ e.createElement(MegamenuItem, { itemName: "Megamenu con Call to Action in basso" }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "4" }, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 1")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 3"))), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "4" }, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 4")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 5")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 6"))), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "4" }, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 7")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 8")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 9")))), /* @__PURE__ */ e.createElement(MegamenuFooter, null, /* @__PURE__ */ e.createElement("div", { className: "d-flex flex-column flex-lg-row justify-content-around" }, /* @__PURE__ */ e.createElement("a", { href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-bookmark", size: "sm" }), /* @__PURE__ */ e.createElement("span", null, "Call to action 1")), /* @__PURE__ */ e.createElement("a", { href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-bookmark", size: "sm" }), /* @__PURE__ */ e.createElement("span", null, "Call to action 2"))))))));
};
const ConCallToActionInBasso = {
  render: () => {
    return /* @__PURE__ */ e.createElement(ConCallToActionInBassoHooks, null);
  }
};
const ConCallToActionADestraHooks = () => {
  const [openNav, setOpenNav] = reactExports.useState(false);
  const toggle = () => {
    setOpenNav(!openNav);
  };
  return /* @__PURE__ */ e.createElement(Navbar, { expand: "lg", className: "has-megamenu" }, /* @__PURE__ */ e.createElement(NavbarBrand, null), /* @__PURE__ */ e.createElement(NavbarToggler, { className: "custom-navbar-toggler", onClick: toggle }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-list", size: "sm" })), /* @__PURE__ */ e.createElement(Collapse, { isOpen: openNav, navbar: true, header: true, megamenu: true }, /* @__PURE__ */ e.createElement(Nav, { className: "mt-0", navbar: true }, /* @__PURE__ */ e.createElement(MegamenuItem, { itemName: "Megamenu con Call to Action a destra" }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "8" }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6" }, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 1")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 3"))), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6" }, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 1")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 3"))))), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "4" }, /* @__PURE__ */ e.createElement(MegamenuFooter, { vertical: true }, /* @__PURE__ */ e.createElement("div", { className: "d-flex flex-column justify-content-around" }, /* @__PURE__ */ e.createElement("a", { href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-bookmark", size: "sm" }), /* @__PURE__ */ e.createElement("span", null, "Call to action 1")), /* @__PURE__ */ e.createElement("a", { href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-bookmark", size: "sm" }), /* @__PURE__ */ e.createElement("span", null, "Call to action 2"))))))))));
};
const ConCallToActionADestra = {
  render: () => {
    return /* @__PURE__ */ e.createElement(ConCallToActionADestraHooks, null);
  }
};
const ConImmagineEDescrizioneHooks = () => {
  const [openNav, setOpenNav] = reactExports.useState(false);
  const toggle = () => {
    setOpenNav(!openNav);
  };
  return /* @__PURE__ */ e.createElement(Navbar, { expand: "lg", className: "has-megamenu" }, /* @__PURE__ */ e.createElement(NavbarBrand, null), /* @__PURE__ */ e.createElement(NavbarToggler, { className: "custom-navbar-toggler", onClick: toggle }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-list", size: "sm" })), /* @__PURE__ */ e.createElement(Collapse, { isOpen: openNav, navbar: true, header: true, megamenu: true }, /* @__PURE__ */ e.createElement(Nav, { className: "mt-0", navbar: true }, /* @__PURE__ */ e.createElement(MegamenuItem, { itemName: "Megamenu con Immagine e Descrizione" }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(MegamenuHighlightColumn, { xs: "12", lg: "4", description: true }, /* @__PURE__ */ e.createElement("div", { className: "ratio ratio-21x9 lightgrey-bg-a1 mb-4 rounded" }, /* @__PURE__ */ e.createElement("figure", { className: "figure" }, /* @__PURE__ */ e.createElement("img", { src: "https://placehold.co/560x240/ebebeb/808080/?text=Immagine", className: "figure-img img-fluid rounded", alt: "Segnaposto" }))), /* @__PURE__ */ e.createElement("p", null, "Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.")), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "8" }, /* @__PURE__ */ e.createElement("div", { className: "it-heading-link-wrapper" }, /* @__PURE__ */ e.createElement("a", { className: "it-heading-link", href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "icon icon-sm me-2 mb-1", icon: "it-arrow-right-triangle" }), /* @__PURE__ */ e.createElement("span", null, "Esplora la sezione megamenu"))), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6" }, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 1")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 3"))), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6" }, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 4")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 5")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 6"))))))))));
};
const ConImmagineEDescrizione = {
  render: () => {
    return /* @__PURE__ */ e.createElement(ConImmagineEDescrizioneHooks, null);
  }
};
ConLinkMore.parameters = {
  ...ConLinkMore.parameters,
  docs: {
    ...(_a = ConLinkMore.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <ConLinkMoreHooks />;\n  }\n}",
      ...(_c = (_b = ConLinkMore.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
ConIntestazioneELinkMore.parameters = {
  ...ConIntestazioneELinkMore.parameters,
  docs: {
    ...(_d = ConIntestazioneELinkMore.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <ConIntestazioneELinkMoreHooks />;\n  }\n}",
      ...(_f = (_e = ConIntestazioneELinkMore.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
ConCallToActionInBasso.parameters = {
  ...ConCallToActionInBasso.parameters,
  docs: {
    ...(_g = ConCallToActionInBasso.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <ConCallToActionInBassoHooks />;\n  }\n}",
      ...(_i = (_h = ConCallToActionInBasso.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
ConCallToActionADestra.parameters = {
  ...ConCallToActionADestra.parameters,
  docs: {
    ...(_j = ConCallToActionADestra.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <ConCallToActionADestraHooks />;\n  }\n}",
      ...(_l = (_k = ConCallToActionADestra.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
ConImmagineEDescrizione.parameters = {
  ...ConImmagineEDescrizione.parameters,
  docs: {
    ...(_m = ConImmagineEDescrizione.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  render: () => {\n    return <ConImmagineEDescrizioneHooks />;\n  }\n}",
      ...(_o = (_n = ConImmagineEDescrizione.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
const __namedExportsOrder = ["ConLinkMore", "ConIntestazioneELinkMore", "ConCallToActionInBasso", "ConCallToActionADestra", "ConImmagineEDescrizione"];
const MegamenuStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ConCallToActionADestra,
  ConCallToActionInBasso,
  ConImmagineEDescrizione,
  ConIntestazioneELinkMore,
  ConLinkMore,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  ConImmagineEDescrizione as C,
  MegamenuStories as M,
  ConLinkMore as a,
  ConIntestazioneELinkMore as b,
  ConCallToActionInBasso as c,
  ConCallToActionADestra as d,
  MegamenuFooter as e
};
