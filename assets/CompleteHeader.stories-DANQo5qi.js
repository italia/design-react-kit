var _a, _b, _c;
import { e, r as reactExports } from "./index-N7T0HPyM.js";
import { R as Row, C as Col } from "./Col-C4Vz86Og.js";
import { N as NavItem, a as NavLink } from "./NavLink-CE4cVwmb.js";
import { B as Button } from "./Button-DzBfv9Kx.js";
import { C as Collapse } from "./Collapse-DofthOmC.js";
import { D as Dropdown, a as DropdownToggle } from "./DropdownToggle-zzwT72sa.js";
import { D as DropdownMenu } from "./DropdownMenu-CHVBdGUY.js";
import { H as Header, a as HeaderContent } from "./HeaderContent-DV8_z36O.js";
import { H as HeaderBrand, a as HeaderRightZone } from "./HeaderRightZone-d64hZShO.js";
import { H as HeaderLinkZone } from "./HeaderLinkZone-CrST25Yd.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { H as HeaderSocialsZone, a as HeaderSearch } from "./HeaderSocialsZone-CD26ajo0.js";
import { H as HeaderToggler } from "./HeaderToggler-Dbg2iRRU.js";
import { I as Icon } from "./Icon-D5Ay-CRR.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-D-pDHaAX.js";
import { N as Nav, M as MegamenuItem, a as MegamenuHighlightColumn } from "./Nav-Bk3I75vp.js";
import "./track-focus-DbJ2CO43.js";
const Headers = ({ className, shadow = false, sticky = false, testId, ...attributes }) => {
  const classes = classNames(
    "it-header-wrapper",
    {
      "it-shadow": shadow,
      "it-header-sticky": sticky,
      "sticky-top": sticky
    },
    className
  );
  return /* @__PURE__ */ e.createElement("div", { className: classes, ...attributes, "data-testid": testId });
};
Headers.__docgenInfo = { "description": "", "methods": [], "displayName": "Headers", "props": { "shadow": { "required": false, "tsType": { "name": "boolean" }, "description": "Aggiunge un ombra per enfatizzare il componente rispetto alla pagina in cui è contenuto", "defaultValue": { "value": "false", "computed": false } }, "sticky": { "required": false, "tsType": { "name": "boolean" }, "description": 'Aggiunge il comportamento "sticky" ai componenti Header contenuti', "defaultValue": { "value": "false", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi addizionali per il componente Headers" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const CenterHeader = ({
  theme
}) => {
  return /* @__PURE__ */ e.createElement(Header, { type: "center", theme, small: true }, /* @__PURE__ */ e.createElement(HeaderContent, null, /* @__PURE__ */ e.createElement(HeaderBrand, { iconName: "it-code-circle", iconAlt: "it code circle icon" }, /* @__PURE__ */ e.createElement("h2", null, "Lorem Ipsum Lorem Ipsum"), /* @__PURE__ */ e.createElement("h3", null, "Inserire qui la tag line")), /* @__PURE__ */ e.createElement(HeaderRightZone, null, /* @__PURE__ */ e.createElement(HeaderSocialsZone, { label: "Seguici su" }, /* @__PURE__ */ e.createElement("ul", null, /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("a", { href: "#", "aria-label": "Facebook", target: "_blank" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-facebook" }))), /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("a", { href: "#", "aria-label": "Github", target: "_blank" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-github" }))), /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement("a", { href: "#", "aria-label": "Twitter", target: "_blank" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-twitter" }))))), /* @__PURE__ */ e.createElement(HeaderSearch, { label: "Cerca", iconName: "it-search" }))));
};
const NavHeader = ({
  theme
}) => {
  const [isOpenSide, setIsOpenSide] = reactExports.useState(false);
  return /* @__PURE__ */ e.createElement(Header, { type: "navbar", theme }, /* @__PURE__ */ e.createElement(HeaderContent, { expand: "lg", megamenu: true }, /* @__PURE__ */ e.createElement(HeaderToggler, { onClick: () => {
    setIsOpenSide(!isOpenSide);
  }, "aria-controls": "nav1", "aria-expanded": "false", "aria-label": "Toggle navigation" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-burger" })), /* @__PURE__ */ e.createElement(Collapse, { navbar: true, header: true, isOpen: isOpenSide, onOverlayClick: () => {
    setIsOpenSide(!isOpenSide);
  } }, /* @__PURE__ */ e.createElement("div", { className: "menu-wrapper" }, /* @__PURE__ */ e.createElement(Nav, { navbar: true }, /* @__PURE__ */ e.createElement(NavItem, { active: true }, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: true }, /* @__PURE__ */ e.createElement("span", null, "link 1 active "), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "current"))), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", disabled: true }, "Link 2")), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#" }, "Link 3")), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#" }, "Link 4")), /* @__PURE__ */ e.createElement(Dropdown, { inNavbar: true }, /* @__PURE__ */ e.createElement(DropdownToggle, { caret: true }, /* @__PURE__ */ e.createElement("span", null, "Menu Dropdown")), /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 1")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 3")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 4"))))), /* @__PURE__ */ e.createElement(MegamenuItem, { itemName: "Megamenu con Immagine e Descrizione" }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(MegamenuHighlightColumn, { xs: "12", lg: "4", description: true }, /* @__PURE__ */ e.createElement("div", { className: "ratio ratio-21x9 lightgrey-bg-a1 mb-4 rounded" }, /* @__PURE__ */ e.createElement("figure", { className: "figure" }, /* @__PURE__ */ e.createElement("img", { src: "https://placehold.co/560x240/ebebeb/808080/?text=Immagine", className: "figure-img img-fluid rounded", alt: "Segnaposto" }))), /* @__PURE__ */ e.createElement("p", null, "Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.")), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "8" }, /* @__PURE__ */ e.createElement("div", { className: "it-heading-link-wrapper" }, /* @__PURE__ */ e.createElement("a", { className: "it-heading-link", href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "icon icon-sm me-2 mb-1", icon: "it-arrow-right-triangle" }), /* @__PURE__ */ e.createElement("span", null, "Esplora la sezione megamenu"))), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6" }, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 1")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 3")))), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6" }, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 4")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 5")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 6")))))))))))));
};
const SlimHeader = ({
  theme,
  brandText
}) => {
  const [isOpenCollapse, setIsOpenCollapse] = reactExports.useState(false);
  return /* @__PURE__ */ e.createElement(Header, { type: "slim", theme }, /* @__PURE__ */ e.createElement(HeaderContent, null, /* @__PURE__ */ e.createElement(HeaderBrand, null, brandText), /* @__PURE__ */ e.createElement(HeaderLinkZone, { "aria-label": "Navigazione accessoria" }, /* @__PURE__ */ e.createElement(HeaderToggler, { isOpen: isOpenCollapse, onClick: () => {
    setIsOpenCollapse(!isOpenCollapse);
  } }, /* @__PURE__ */ e.createElement("span", null, brandText), /* @__PURE__ */ e.createElement(Icon, { icon: "it-expand" })), /* @__PURE__ */ e.createElement(Collapse, { isOpen: isOpenCollapse, header: true }, /* @__PURE__ */ e.createElement(LinkList, { noWrapper: true }, /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, "Link 1"), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#", active: true }, "Link 2 Active")))), /* @__PURE__ */ e.createElement(HeaderRightZone, null, /* @__PURE__ */ e.createElement(Dropdown, { inNavbar: true }, /* @__PURE__ */ e.createElement(DropdownToggle, { caret: true }, "ITA"), /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { size: "12" }, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "ITA")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "ENG"))))))), /* @__PURE__ */ e.createElement("div", { className: "it-access-top-wrapper" }, /* @__PURE__ */ e.createElement(Button, { color: "primary", size: "sm" }, "Accedi")))));
};
const meta = {
  title: "Documentazione/Menu di navigazione/Header/Complete",
  component: Header,
  parameters: {
    docs: {
      controls: {
        exclude: ["isOpen", "className", "type", "small", "testId"]
      }
    }
  }
};
const CompleteHeaderStory = {
  render: ({
    theme,
    sticky
  }) => /* @__PURE__ */ e.createElement(Headers, { sticky }, /* @__PURE__ */ e.createElement(SlimHeader, { theme, brandText: "Ente di appartenenza" }), /* @__PURE__ */ e.createElement("div", { className: "it-nav-wrapper" }, /* @__PURE__ */ e.createElement(CenterHeader, { theme }), /* @__PURE__ */ e.createElement(NavHeader, { theme }))),
  args: {
    theme: "dark"
  },
  argTypes: {
    theme: {
      control: "radio",
      options: ["", "light", "dark"]
    },
    sticky: {
      control: "boolean"
    }
  }
};
CompleteHeaderStory.parameters = {
  ...CompleteHeaderStory.parameters,
  docs: {
    ...(_a = CompleteHeaderStory.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: ({\n    theme,\n    sticky\n  }) => <Headers sticky={sticky}>\n      <SlimHeader theme={theme} brandText='Ente di appartenenza' />\n      <div className='it-nav-wrapper'>\n        <CenterHeader theme={theme} />\n        <NavHeader theme={theme} />\n      </div>\n    </Headers>,\n  args: {\n    theme: 'dark'\n  },\n  argTypes: {\n    theme: {\n      control: 'radio',\n      options: ['', 'light', 'dark']\n    },\n    sticky: {\n      control: 'boolean'\n    }\n  }\n}",
      ...(_c = (_b = CompleteHeaderStory.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
const __namedExportsOrder = ["CompleteHeaderStory"];
const CompleteHeader_stories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CompleteHeaderStory,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  CompleteHeaderStory as C,
  Headers as H,
  CompleteHeader_stories as a
};
