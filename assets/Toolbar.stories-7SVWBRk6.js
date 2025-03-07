var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M;
import { e, r as reactExports } from "./index-BehpJNG5.js";
import { D as DropdownMenu } from "./DropdownMenu-DV6KduIR.js";
import { I as Icon } from "./Icon-DyWUmh-K.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-E5PaFpui.js";
import { c as classNames } from "./index-D3ELxcOV.js";
import { D as Dropdown, a as DropdownToggle } from "./DropdownToggle-CIK1qVdC.js";
import "./track-focus-DbJ2CO43.js";
const SizeContext = /* @__PURE__ */ reactExports.createContext(void 0);
const Toolbar = ({ tag = "nav", size, testId, children, vertical, ...attributes }) => {
  const Tag = tag;
  const classes = classNames("toolbar", {
    [`toolbar-${size}`]: size && size !== "large",
    "toolbar-vertical": vertical
  });
  return /* @__PURE__ */ e.createElement(SizeContext.Provider, { value: size || "large" }, /* @__PURE__ */ e.createElement(Tag, { className: classes, ...attributes, "data-testid": testId }, /* @__PURE__ */ e.createElement("ul", null, children)));
};
Toolbar.__docgenInfo = { "description": "", "methods": [], "displayName": "Toolbar", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "", "defaultValue": { "value": "'nav'", "computed": false } }, "size": { "required": false, "tsType": { "name": "union", "raw": "'large' | 'medium' | 'small'", "elements": [{ "name": "literal", "value": "'large'" }, { "name": "literal", "value": "'medium'" }, { "name": "literal", "value": "'small'" }] }, "description": "" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" }, "vertical": { "required": false, "tsType": { "name": "boolean" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const ToolbarDividerItem = () => /* @__PURE__ */ e.createElement("li", { className: "toolbar-divider", role: "separator", "aria-orientation": "vertical" });
ToolbarDividerItem.__docgenInfo = { "description": "", "methods": [], "displayName": "ToolbarDividerItem" };
function ToolbarItemLabel({
  label,
  size,
  disabled,
  badge
}) {
  const showSrText = size && size !== "large";
  if (disabled) {
    if (!label || showSrText) {
      return /* @__PURE__ */ e.createElement("span", null);
    }
    return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("span", { className: "toolbar-label" }, label));
  }
  if (!label) {
    return null;
  }
  return showSrText ? /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, label) : /* @__PURE__ */ e.createElement("span", { className: "toolbar-label" }, label, (badge == null ? void 0 : badge.label) ? /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, badge.label) : null);
}
const ToolbarItem = ({
  active = false,
  badge,
  url,
  iconName,
  label,
  tag = "a",
  disabled,
  testId,
  srText,
  dropdown,
  dropdownProps,
  children,
  showMore,
  onClick,
  isDropdownOpen,
  ...attributes
}) => {
  const Tag = tag;
  const size = reactExports.useContext(SizeContext);
  const activeClass = classNames({ active, disabled });
  const ariaAttributes = {
    ...disabled && { "aria-disabled": true }
  };
  const badgeObject = typeof badge === "number" ? { value: badge, label: srText || "", srText: srText || "" } : badge;
  const toolbarItemContent = /* @__PURE__ */ e.createElement(e.Fragment, null, badgeObject ? /* @__PURE__ */ e.createElement("div", { className: "badge-wrapper" }, /* @__PURE__ */ e.createElement("span", { className: "toolbar-badge" }, size !== "large" ? null : badgeObject.value), size !== "large" && /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, badgeObject.srText)) : null, /* @__PURE__ */ e.createElement(Icon, { icon: iconName, size: size === "small" ? "sm" : "" }), /* @__PURE__ */ e.createElement(ToolbarItemLabel, { label, size, disabled, badge: badgeObject }));
  if (dropdown) {
    return /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement(Dropdown, { ...dropdownProps, toggle: onClick, isOpen: isDropdownOpen }, /* @__PURE__ */ e.createElement(
      DropdownToggle,
      {
        disabled,
        caret: true,
        className: classNames("btn-dropdown", { "toolbar-more": showMore }),
        color: ""
      },
      toolbarItemContent
    ), children));
  }
  return /* @__PURE__ */ e.createElement("li", null, /* @__PURE__ */ e.createElement(
    Tag,
    {
      href: url || "#",
      className: activeClass,
      "data-testid": testId,
      ...attributes,
      ...ariaAttributes,
      onClick
    },
    toolbarItemContent
  ));
};
ToolbarItem.__docgenInfo = { "description": "", "methods": [], "displayName": "ToolbarItem", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati. Il valore di default è il tag anchor.", "defaultValue": { "value": "'a'", "computed": false } }, "active": { "required": false, "tsType": { "name": "boolean" }, "description": "Indica l'elemento attivo nella Toolbar", "defaultValue": { "value": "false", "computed": false } }, "disabled": { "required": false, "tsType": { "name": "boolean" }, "description": "Mostra l'elemento come disabilitato nella Toolbar" }, "url": { "required": false, "tsType": { "name": "string" }, "description": "L'URL a cui far puntare il tag anchor." }, "label": { "required": false, "tsType": { "name": "string" }, "description": "L'etichetta da mostrare sotto l'icona. In caso di dimensioni più piccole verrà\nautomaticamente sintegrata in uno span per gli screen reader." }, "iconName": { "required": true, "tsType": { "name": "string" }, "description": "Il nome dell'icona da utilizzare" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" }, "srText": { "required": false, "tsType": { "name": "string" }, "description": 'Un testo completo da mostrare per Toolbar di grandezza media e piccola con badge (ad esempio: "ci sono 42 nuovi documenti da esaminare")\n@deprecated' }, "badge": { "required": false, "tsType": { "name": "union", "raw": "number | ToolbarItemBadge", "elements": [{ "name": "number" }, { "name": "ToolbarItemBadge" }] }, "description": `Il badge da mostrare sull'icona del ToolbarItem.
Un badge è composto da:

  * una label per screen reader da affiancare alla label corrente (ad esempio: "da leggere")
  * un testo completo da mostrare per Toolbar di grandezza media e piccola (ad esempio: "ci sono 42 nuovi documenti da esaminare")
  * un eventuale valore numerico (omesso in caso di un badge di alert)` }, "dropdown": { "required": false, "tsType": { "name": "boolean" }, "description": "Indica che il ToolbarItem contiene un menu dropdown.\nQuando questo attributo è attivo il contenuto del componente ToolbarItem verrà mostrato all'interno del dropdown." }, "showMore": { "required": false, "tsType": { "name": "boolean" }, "description": `Quando l'opzione dropdown è attiva questo attributo controlla se
l'elemento è di tipo "altro" contenente altre icone/opzioni o no.` }, "isDropdownOpen": { "required": false, "tsType": { "name": "boolean" }, "description": "Quando il componente è in modalità dropdown permette di controllarne\nlo stato di visibilità. Il valore di default è false." }, "dropdownProps": { "required": false, "tsType": { "name": "Omit", "elements": [{ "name": "DropdownProps" }, { "name": "union", "raw": "'toggle' | 'isOpen'", "elements": [{ "name": "literal", "value": "'toggle'" }, { "name": "literal", "value": "'isOpen'" }] }], "raw": "Omit<DropdownProps, 'toggle' | 'isOpen'>" }, "description": `Da utilizzare quando l'attributo "dropdown" è attivo.
Gli attributi qui passati verranno inoltrati al componente Dropdown interno.` }, "onClick": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "(event: MouseEvent<HTMLAnchorElement>) => void", "signature": { "arguments": [{ "type": { "name": "MouseEvent", "elements": [{ "name": "HTMLAnchorElement" }], "raw": "MouseEvent<HTMLAnchorElement>" }, "name": "event" }], "return": { "name": "void" } } }, "description": "Funzione chiamata al click dell'element ToolbarItem" } }, "composes": ["HTMLAttributes"] };
const meta = {
  title: "Documentazione/Componenti/Toolbar",
  component: Toolbar
};
const Esempio = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "toolbar-docs-style" }, /* @__PURE__ */ e.createElement(Toolbar, null, /* @__PURE__ */ e.createElement(ToolbarItem, { label: "messaggi", iconName: "it-comment", active: true }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "immagini", iconName: "it-camera" }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "documenti", iconName: "it-file" }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "privacy", iconName: "it-lock" }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "preferiti", iconName: "it-star-outline", disabled: true })))
};
const EsempioMedium = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "toolbar-docs-style" }, /* @__PURE__ */ e.createElement(Toolbar, { size: "medium" }, /* @__PURE__ */ e.createElement(ToolbarItem, { label: "messaggi", iconName: "it-comment", active: true }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "immagini", iconName: "it-camera" }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "documenti", iconName: "it-file" }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "privacy", iconName: "it-lock" }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "preferiti", iconName: "it-star-outline", disabled: true })))
};
const EsempioSmall = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "toolbar-docs-style" }, /* @__PURE__ */ e.createElement(Toolbar, { size: "small" }, /* @__PURE__ */ e.createElement(ToolbarItem, { label: "messaggi", iconName: "it-comment", active: true }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "immagini", iconName: "it-camera" }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "documenti", iconName: "it-file" }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "privacy", iconName: "it-lock" }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "preferiti", iconName: "it-star-outline" }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "downloads", iconName: "it-download", disabled: true })))
};
const EsempioWithDivider = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "toolbar-docs-style" }, /* @__PURE__ */ e.createElement(Toolbar, null, /* @__PURE__ */ e.createElement(ToolbarItem, { label: "messaggi", iconName: "it-comment", active: true }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "immagini", iconName: "it-camera" }), /* @__PURE__ */ e.createElement(ToolbarDividerItem, null), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "documenti", iconName: "it-file" }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "privacy", iconName: "it-lock" }), /* @__PURE__ */ e.createElement(ToolbarDividerItem, null), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "preferiti", iconName: "it-star-outline", disabled: true })))
};
const EsempioConBadgeGrande = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "toolbar-docs-style" }, /* @__PURE__ */ e.createElement(Toolbar, null, /* @__PURE__ */ e.createElement(ToolbarItem, { label: "messaggi", iconName: "it-comment", active: true, badge: {
    value: 1,
    label: "da leggere",
    srText: `c'è un messaggio da leggere`
  } }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "documenti", iconName: "it-file", badge: {
    value: 42,
    label: "da esaminare",
    srText: `ci sono 42 documenti da esaminare`
  } }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "immagini", iconName: "it-camera" }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "privacy", iconName: "it-lock" }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "preferiti", iconName: "it-star-outline", disabled: true })))
};
const EsempioConBadgeMedio = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "toolbar-docs-style" }, /* @__PURE__ */ e.createElement(Toolbar, { size: "medium" }, /* @__PURE__ */ e.createElement(ToolbarItem, { label: "messaggi", iconName: "it-comment", active: true, badge: {
    value: 1,
    label: "da leggere",
    srText: `c'è un messaggio da leggere`
  } }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "documenti", iconName: "it-file", badge: {
    value: 42,
    label: "da esaminare",
    srText: `ci sono 42 documenti da esaminare`
  } }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "immagini", iconName: "it-camera" }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "privacy", iconName: "it-lock" }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "preferiti", iconName: "it-star-outline", disabled: true })))
};
const EsempioConBadgePiccolo = {
  render: () => /* @__PURE__ */ e.createElement("div", { className: "toolbar-docs-style" }, /* @__PURE__ */ e.createElement(Toolbar, { size: "small" }, /* @__PURE__ */ e.createElement(ToolbarItem, { label: "messaggi", iconName: "it-comment", active: true, badge: {
    value: 1,
    label: "da leggere",
    srText: `c'è un messaggio da leggere`
  } }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "documenti", iconName: "it-file", badge: {
    value: 42,
    label: "da esaminare",
    srText: `ci sono 42 documenti da esaminare`
  } }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "immagini", iconName: "it-camera" }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "privacy", iconName: "it-lock" }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "preferiti", iconName: "it-star-outline", disabled: true })))
};
const EsempioConDropdownGrandeWithHooks = () => {
  const [openFirst, toggleFirst] = reactExports.useState(false);
  const [openSecond, toggleSecond] = reactExports.useState(false);
  const [openThird, toggleThird] = reactExports.useState(false);
  const [openFourth, toggleFourth] = reactExports.useState(false);
  const [openFifth, toggleFifth] = reactExports.useState(false);
  return /* @__PURE__ */ e.createElement("div", { className: "toolbar-docs-style" }, /* @__PURE__ */ e.createElement(Toolbar, { size: "large" }, /* @__PURE__ */ e.createElement(ToolbarItem, { label: "messaggi", iconName: "it-comment", active: true, badge: {
    value: 1,
    label: "da leggere",
    srText: `c'è un messaggio da leggere`
  }, dropdown: true, isDropdownOpen: openFirst, onClick: () => toggleFirst(!openFirst) }, /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "immagini", iconName: "it-camera", badge: {
    value: 42,
    label: "da visualizzare",
    srText: `ci sono 42 immagini da visualizzare`
  }, dropdown: true, isDropdownOpen: openSecond, onClick: () => toggleSecond(!openSecond) }, /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "documenti", iconName: "it-file", dropdown: true, isDropdownOpen: openThird, onClick: () => toggleThird(!openThird) }, /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "privacy", iconName: "it-lock", disabled: true, dropdown: true, isDropdownOpen: openFourth, onClick: () => toggleFourth(!openFourth) }, /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "altro", iconName: "it-more-actions", dropdown: true, isDropdownOpen: openFifth, onClick: () => toggleFifth(!openFifth), showMore: true }, /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { className: "left-icon" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", icon: "it-link" }), /* @__PURE__ */ e.createElement("span", null, "Azione 1")), /* @__PURE__ */ e.createElement(LinkListItem, { className: "left-icon" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", icon: "it-mail" }), /* @__PURE__ */ e.createElement("span", null, "Azione 2")), /* @__PURE__ */ e.createElement(LinkListItem, { className: "left-icon" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", icon: "it-settings" }), /* @__PURE__ */ e.createElement("span", null, "Azione 3")))))));
};
const EsempioConDropdownGrande = {
  render: () => /* @__PURE__ */ e.createElement(EsempioConDropdownGrandeWithHooks, null),
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const EsempioConDropdownMediaWithHooks = () => {
  const [openFirst, toggleFirst] = reactExports.useState(false);
  const [openSecond, toggleSecond] = reactExports.useState(false);
  const [openThird, toggleThird] = reactExports.useState(false);
  const [openFourth, toggleFourth] = reactExports.useState(false);
  const [openFifth, toggleFifth] = reactExports.useState(false);
  const [openSixth, toggleSixth] = reactExports.useState(false);
  return /* @__PURE__ */ e.createElement("div", { className: "toolbar-docs-style" }, /* @__PURE__ */ e.createElement(Toolbar, { size: "medium" }, /* @__PURE__ */ e.createElement(ToolbarItem, { label: "messaggi", iconName: "it-comment", active: true, badge: {
    value: 1,
    label: "da leggere",
    srText: `c'è un messaggio da leggere`
  }, dropdown: true, isDropdownOpen: openFirst, onClick: () => toggleFirst(!openFirst) }, /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "immagini", iconName: "it-camera", badge: {
    value: 42,
    label: "da visualizzare",
    srText: `ci sono 42 immagini da visualizzare`
  }, dropdown: true, isDropdownOpen: openSecond, onClick: () => toggleSecond(!openSecond) }, /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "documenti", iconName: "it-file", dropdown: true, isDropdownOpen: openThird, onClick: () => toggleThird(!openThird) }, /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "privacy", iconName: "it-lock", dropdown: true, isDropdownOpen: openFourth, onClick: () => toggleFourth(!openFourth) }, /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "preferiti", iconName: "it-star-outline", disabled: true, dropdown: true, isDropdownOpen: openFifth, onClick: () => toggleFifth(!openFifth) }, /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "altro", iconName: "it-more-actions", dropdown: true, isDropdownOpen: openSixth, onClick: () => toggleSixth(!openSixth), showMore: true }, /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { className: "left-icon" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", icon: "it-link" }), /* @__PURE__ */ e.createElement("span", null, "Azione 1")), /* @__PURE__ */ e.createElement(LinkListItem, { className: "left-icon" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", icon: "it-mail" }), /* @__PURE__ */ e.createElement("span", null, "Azione 2")), /* @__PURE__ */ e.createElement(LinkListItem, { className: "left-icon" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", icon: "it-settings" }), /* @__PURE__ */ e.createElement("span", null, "Azione 3")))))));
};
const EsempioConDropdownMedia = {
  render: () => /* @__PURE__ */ e.createElement(EsempioConDropdownMediaWithHooks, null),
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const EsempioConDropdownPiccolaWithHooks = () => {
  const [openFirst, toggleFirst] = reactExports.useState(false);
  const [openSecond, toggleSecond] = reactExports.useState(false);
  const [openThird, toggleThird] = reactExports.useState(false);
  const [openFourth, toggleFourth] = reactExports.useState(false);
  const [openFifth, toggleFifth] = reactExports.useState(false);
  const [openSixth, toggleSixth] = reactExports.useState(false);
  return /* @__PURE__ */ e.createElement("div", { className: "toolbar-docs-style" }, /* @__PURE__ */ e.createElement(Toolbar, { size: "small" }, /* @__PURE__ */ e.createElement(ToolbarItem, { label: "messaggi", iconName: "it-comment", active: true, badge: {
    value: 1,
    label: "da leggere",
    srText: `c'è un messaggio da leggere`
  }, dropdown: true, isDropdownOpen: openFirst, onClick: () => toggleFirst(!openFirst) }, /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "immagini", iconName: "it-camera", badge: {
    value: 42,
    label: "da visualizzare",
    srText: `ci sono 42 immagini da visualizzare`
  }, dropdown: true, isDropdownOpen: openSecond, onClick: () => toggleSecond(!openSecond) }, /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "documenti", iconName: "it-file", dropdown: true, isDropdownOpen: openThird, onClick: () => toggleThird(!openThird) }, /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "privacy", iconName: "it-lock", dropdown: true, isDropdownOpen: openFourth, onClick: () => toggleFourth(!openFourth) }, /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "preferiti", iconName: "it-star-outline", disabled: true, dropdown: true, isDropdownOpen: openFifth, onClick: () => toggleFifth(!openFifth) }, /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "altro", iconName: "it-more-actions", dropdown: true, isDropdownOpen: openSixth, onClick: () => toggleSixth(!openSixth), showMore: true }, /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { className: "left-icon" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", icon: "it-link" }), /* @__PURE__ */ e.createElement("span", null, "Azione 1")), /* @__PURE__ */ e.createElement(LinkListItem, { className: "left-icon" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", icon: "it-mail" }), /* @__PURE__ */ e.createElement("span", null, "Azione 2")), /* @__PURE__ */ e.createElement(LinkListItem, { className: "left-icon" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", icon: "it-settings" }), /* @__PURE__ */ e.createElement("span", null, "Azione 3")))))));
};
const EsempioConDropdownPiccola = {
  render: () => /* @__PURE__ */ e.createElement(EsempioConDropdownPiccolaWithHooks, null),
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const EsempioVerticaleGrandeWithHooks = () => {
  const [openFirst, toggleFirst] = reactExports.useState(false);
  return /* @__PURE__ */ e.createElement("div", { className: "toolbar-docs-style" }, /* @__PURE__ */ e.createElement(Toolbar, { vertical: true }, /* @__PURE__ */ e.createElement(ToolbarItem, { label: "messaggi", iconName: "it-comment", active: true, badge: {
    value: 1,
    label: "da leggere",
    srText: `c'è un messaggio da leggere`
  } }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "immagini", iconName: "it-camera", badge: {
    value: 42,
    label: "da visualizzare",
    srText: `ci sono 42 immagini da visualizzare`
  }, dropdown: true, isDropdownOpen: openFirst, onClick: () => toggleFirst(!openFirst) }, /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ e.createElement(ToolbarDividerItem, null), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "immagini", iconName: "it-camera" }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "privacy", iconName: "it-lock" }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "preferiti", iconName: "it-star-outline", disabled: true })));
};
const EsempioVerticaleGrande = {
  render: () => /* @__PURE__ */ e.createElement(EsempioVerticaleGrandeWithHooks, null),
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const EsempioVerticaleMediaWithHooks = () => {
  const [openFirst, toggleFirst] = reactExports.useState(false);
  return /* @__PURE__ */ e.createElement("div", { className: "toolbar-docs-style" }, /* @__PURE__ */ e.createElement(Toolbar, { vertical: true, size: "medium" }, /* @__PURE__ */ e.createElement(ToolbarItem, { label: "messaggi", iconName: "it-comment", active: true, badge: {
    value: 1,
    label: "da leggere",
    srText: `c'è un messaggio da leggere`
  } }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "immagini", iconName: "it-camera", badge: {
    value: 42,
    label: "da visualizzare",
    srText: `ci sono 42 immagini da visualizzare`
  }, dropdown: true, isDropdownOpen: openFirst, onClick: () => toggleFirst(!openFirst) }, /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ e.createElement(ToolbarDividerItem, null), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "immagini", iconName: "it-camera" }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "privacy", iconName: "it-lock" }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "preferiti", iconName: "it-star-outline", disabled: true })));
};
const EsempioVerticaleMedia = {
  render: () => /* @__PURE__ */ e.createElement(EsempioVerticaleMediaWithHooks, null),
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const EsempioVerticalePiccolaWithHooks = () => {
  const [openFirst, toggleFirst] = reactExports.useState(false);
  return /* @__PURE__ */ e.createElement("div", { className: "toolbar-docs-style" }, /* @__PURE__ */ e.createElement(Toolbar, { vertical: true, size: "small" }, /* @__PURE__ */ e.createElement(ToolbarItem, { label: "messaggi", iconName: "it-comment", active: true, badge: {
    value: 1,
    label: "da leggere",
    srText: `c'è un messaggio da leggere`
  } }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "immagini", iconName: "it-camera", badge: {
    value: 42,
    label: "da visualizzare",
    srText: `ci sono 42 immagini da visualizzare`
  }, dropdown: true, isDropdownOpen: openFirst, onClick: () => toggleFirst(!openFirst) }, /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 1"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 2"), /* @__PURE__ */ e.createElement(LinkListItem, null, "Azione 3")))), /* @__PURE__ */ e.createElement(ToolbarDividerItem, null), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "immagini", iconName: "it-camera" }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "privacy", iconName: "it-lock" }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "preferiti", iconName: "it-star-outline" }), /* @__PURE__ */ e.createElement(ToolbarItem, { label: "download", iconName: "it-download", disabled: true })));
};
const EsempioVerticalePiccola = {
  render: () => /* @__PURE__ */ e.createElement(EsempioVerticalePiccolaWithHooks, null),
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
Esempio.parameters = {
  ...Esempio.parameters,
  docs: {
    ...(_a = Esempio.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <div className='toolbar-docs-style'>\n      <Toolbar>\n        <ToolbarItem label='messaggi' iconName='it-comment' active />\n        <ToolbarItem label='immagini' iconName='it-camera' />\n        <ToolbarItem label='documenti' iconName='it-file' />\n        <ToolbarItem label='privacy' iconName='it-lock' />\n        <ToolbarItem label='preferiti' iconName='it-star-outline' disabled />\n      </Toolbar>\n    </div>\n}",
      ...(_c = (_b = Esempio.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
EsempioMedium.parameters = {
  ...EsempioMedium.parameters,
  docs: {
    ...(_d = EsempioMedium.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => <div className='toolbar-docs-style'>\n      <Toolbar size={'medium'}>\n        <ToolbarItem label='messaggi' iconName='it-comment' active />\n        <ToolbarItem label='immagini' iconName='it-camera' />\n        <ToolbarItem label='documenti' iconName='it-file' />\n        <ToolbarItem label='privacy' iconName='it-lock' />\n        <ToolbarItem label='preferiti' iconName='it-star-outline' disabled />\n      </Toolbar>\n    </div>\n}",
      ...(_f = (_e = EsempioMedium.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
EsempioSmall.parameters = {
  ...EsempioSmall.parameters,
  docs: {
    ...(_g = EsempioSmall.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => <div className='toolbar-docs-style'>\n      <Toolbar size={'small'}>\n        <ToolbarItem label='messaggi' iconName='it-comment' active />\n        <ToolbarItem label='immagini' iconName='it-camera' />\n        <ToolbarItem label='documenti' iconName='it-file' />\n        <ToolbarItem label='privacy' iconName='it-lock' />\n        <ToolbarItem label='preferiti' iconName='it-star-outline' />\n        <ToolbarItem label='downloads' iconName='it-download' disabled />\n      </Toolbar>\n    </div>\n}",
      ...(_i = (_h = EsempioSmall.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
EsempioWithDivider.parameters = {
  ...EsempioWithDivider.parameters,
  docs: {
    ...(_j = EsempioWithDivider.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  render: () => <div className='toolbar-docs-style'>\n      <Toolbar>\n        <ToolbarItem label='messaggi' iconName='it-comment' active />\n        <ToolbarItem label='immagini' iconName='it-camera' />\n        <ToolbarDividerItem />\n        <ToolbarItem label='documenti' iconName='it-file' />\n        <ToolbarItem label='privacy' iconName='it-lock' />\n        <ToolbarDividerItem />\n        <ToolbarItem label='preferiti' iconName='it-star-outline' disabled />\n      </Toolbar>\n    </div>\n}",
      ...(_l = (_k = EsempioWithDivider.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
EsempioConBadgeGrande.parameters = {
  ...EsempioConBadgeGrande.parameters,
  docs: {
    ...(_m = EsempioConBadgeGrande.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  render: () => <div className='toolbar-docs-style'>\n      <Toolbar>\n        <ToolbarItem label='messaggi' iconName='it-comment' active badge={{\n        value: 1,\n        label: 'da leggere',\n        srText: `c'è un messaggio da leggere`\n      }} />\n        <ToolbarItem label='documenti' iconName='it-file' badge={{\n        value: 42,\n        label: 'da esaminare',\n        srText: `ci sono 42 documenti da esaminare`\n      }} />\n        <ToolbarItem label='immagini' iconName='it-camera' />\n        <ToolbarItem label='privacy' iconName='it-lock' />\n        <ToolbarItem label='preferiti' iconName='it-star-outline' disabled />\n      </Toolbar>\n    </div>\n}",
      ...(_o = (_n = EsempioConBadgeGrande.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
EsempioConBadgeMedio.parameters = {
  ...EsempioConBadgeMedio.parameters,
  docs: {
    ...(_p = EsempioConBadgeMedio.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  render: () => <div className='toolbar-docs-style'>\n      <Toolbar size='medium'>\n        <ToolbarItem label='messaggi' iconName='it-comment' active badge={{\n        value: 1,\n        label: 'da leggere',\n        srText: `c'è un messaggio da leggere`\n      }} />\n        <ToolbarItem label='documenti' iconName='it-file' badge={{\n        value: 42,\n        label: 'da esaminare',\n        srText: `ci sono 42 documenti da esaminare`\n      }} />\n        <ToolbarItem label='immagini' iconName='it-camera' />\n        <ToolbarItem label='privacy' iconName='it-lock' />\n        <ToolbarItem label='preferiti' iconName='it-star-outline' disabled />\n      </Toolbar>\n    </div>\n}",
      ...(_r = (_q = EsempioConBadgeMedio.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
EsempioConBadgePiccolo.parameters = {
  ...EsempioConBadgePiccolo.parameters,
  docs: {
    ...(_s = EsempioConBadgePiccolo.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  render: () => <div className='toolbar-docs-style'>\n      <Toolbar size='small'>\n        <ToolbarItem label='messaggi' iconName='it-comment' active badge={{\n        value: 1,\n        label: 'da leggere',\n        srText: `c'è un messaggio da leggere`\n      }} />\n        <ToolbarItem label='documenti' iconName='it-file' badge={{\n        value: 42,\n        label: 'da esaminare',\n        srText: `ci sono 42 documenti da esaminare`\n      }} />\n        <ToolbarItem label='immagini' iconName='it-camera' />\n        <ToolbarItem label='privacy' iconName='it-lock' />\n        <ToolbarItem label='preferiti' iconName='it-star-outline' disabled />\n      </Toolbar>\n    </div>\n}",
      ...(_u = (_t = EsempioConBadgePiccolo.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
EsempioConDropdownGrande.parameters = {
  ...EsempioConDropdownGrande.parameters,
  docs: {
    ...(_v = EsempioConDropdownGrande.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: '{\n  render: () => <EsempioConDropdownGrandeWithHooks />,\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "none"\n      }\n    }\n  }\n}',
      ...(_x = (_w = EsempioConDropdownGrande.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
EsempioConDropdownMedia.parameters = {
  ...EsempioConDropdownMedia.parameters,
  docs: {
    ...(_y = EsempioConDropdownMedia.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: '{\n  render: () => <EsempioConDropdownMediaWithHooks />,\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "none"\n      }\n    }\n  }\n}',
      ...(_A = (_z = EsempioConDropdownMedia.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
EsempioConDropdownPiccola.parameters = {
  ...EsempioConDropdownPiccola.parameters,
  docs: {
    ...(_B = EsempioConDropdownPiccola.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: '{\n  render: () => <EsempioConDropdownPiccolaWithHooks />,\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "none"\n      }\n    }\n  }\n}',
      ...(_D = (_C = EsempioConDropdownPiccola.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
EsempioVerticaleGrande.parameters = {
  ...EsempioVerticaleGrande.parameters,
  docs: {
    ...(_E = EsempioVerticaleGrande.parameters) == null ? void 0 : _E.docs,
    source: {
      originalSource: '{\n  render: () => <EsempioVerticaleGrandeWithHooks />,\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "none"\n      }\n    }\n  }\n}',
      ...(_G = (_F = EsempioVerticaleGrande.parameters) == null ? void 0 : _F.docs) == null ? void 0 : _G.source
    }
  }
};
EsempioVerticaleMedia.parameters = {
  ...EsempioVerticaleMedia.parameters,
  docs: {
    ...(_H = EsempioVerticaleMedia.parameters) == null ? void 0 : _H.docs,
    source: {
      originalSource: '{\n  render: () => <EsempioVerticaleMediaWithHooks />,\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "none"\n      }\n    }\n  }\n}',
      ...(_J = (_I = EsempioVerticaleMedia.parameters) == null ? void 0 : _I.docs) == null ? void 0 : _J.source
    }
  }
};
EsempioVerticalePiccola.parameters = {
  ...EsempioVerticalePiccola.parameters,
  docs: {
    ...(_K = EsempioVerticalePiccola.parameters) == null ? void 0 : _K.docs,
    source: {
      originalSource: '{\n  render: () => <EsempioVerticalePiccolaWithHooks />,\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "none"\n      }\n    }\n  }\n}',
      ...(_M = (_L = EsempioVerticalePiccola.parameters) == null ? void 0 : _L.docs) == null ? void 0 : _M.source
    }
  }
};
const __namedExportsOrder = ["Esempio", "EsempioMedium", "EsempioSmall", "EsempioWithDivider", "EsempioConBadgeGrande", "EsempioConBadgeMedio", "EsempioConBadgePiccolo", "EsempioConDropdownGrande", "EsempioConDropdownMedia", "EsempioConDropdownPiccola", "EsempioVerticaleGrande", "EsempioVerticaleMedia", "EsempioVerticalePiccola"];
const ToolbarStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Esempio,
  EsempioConBadgeGrande,
  EsempioConBadgeMedio,
  EsempioConBadgePiccolo,
  EsempioConDropdownGrande,
  EsempioConDropdownMedia,
  EsempioConDropdownPiccola,
  EsempioMedium,
  EsempioSmall,
  EsempioVerticaleGrande,
  EsempioVerticaleMedia,
  EsempioVerticalePiccola,
  EsempioWithDivider,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Esempio as E,
  ToolbarStories as T,
  EsempioMedium as a,
  EsempioSmall as b,
  EsempioWithDivider as c,
  EsempioConBadgeGrande as d,
  EsempioConBadgeMedio as e,
  EsempioConBadgePiccolo as f,
  EsempioConDropdownGrande as g,
  EsempioConDropdownMedia as h,
  EsempioConDropdownPiccola as i,
  EsempioVerticaleGrande as j,
  EsempioVerticaleMedia as k,
  EsempioVerticalePiccola as l
};
