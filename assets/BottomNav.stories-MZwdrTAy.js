var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { R as React } from "./index-C-_iGYWo.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { I as Icon } from "./Icon-BNsLnf7r.js";
const BottomNav = ({ tag = "nav", testId, ...attributes }) => {
  const Tag = tag;
  return /* @__PURE__ */ React.createElement(Tag, { className: "bottom-nav", "data-testid": testId }, /* @__PURE__ */ React.createElement("ul", { ...attributes }));
};
BottomNav.__docgenInfo = { "description": "", "methods": [], "displayName": "BottomNav", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'nav'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente BottomNav" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const BottomNavItem = ({
  active = false,
  badge,
  alert = false,
  url,
  to,
  srText,
  iconName = "it-comment",
  label,
  tag = "a",
  onLinkClick,
  link,
  testId,
  ...attributes
}) => {
  const Tag = tag;
  const activeClass = classNames({ active });
  const badgeWrapper = Boolean(badge) && /* @__PURE__ */ React.createElement("div", { className: "badge-wrapper" }, /* @__PURE__ */ React.createElement("span", { className: "bottom-nav-badge" }, badge));
  const alertWrapper = Boolean(alert) && /* @__PURE__ */ React.createElement("div", { className: "badge-wrapper" }, /* @__PURE__ */ React.createElement("span", { className: "bottom-nav-alert" }));
  return /* @__PURE__ */ React.createElement("li", { ...attributes, "data-testid": testId }, /* @__PURE__ */ React.createElement(Tag, { href: url || link || "#", className: activeClass, to, onClick: onLinkClick }, badgeWrapper, alertWrapper, /* @__PURE__ */ React.createElement(Icon, { icon: iconName }), /* @__PURE__ */ React.createElement("span", { className: "bottom-nav-label" }, label, srText ? /* @__PURE__ */ React.createElement("span", { className: "visually-hidden" }, srText) : null)));
};
BottomNavItem.__docgenInfo = { "description": "", "methods": [], "displayName": "BottomNavItem", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'a'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente BottomNavItem" }, "active": { "required": false, "tsType": { "name": "boolean" }, "description": "Quando abilitato mostra l'elemento come attivo", "defaultValue": { "value": "false", "computed": false } }, "url": { "required": false, "tsType": { "name": "string" }, "description": "Indica l'URL a cui puntare (utilizzare o questo o onClick)" }, "to": { "required": false, "tsType": { "name": "string" }, "description": "Indica il link route a cui l'elemento deve puntare." }, "label": { "required": false, "tsType": { "name": "string" }, "description": "Etichetta da associare all'elemento" }, "srText": { "required": false, "tsType": { "name": "string" }, "description": "Testo esplicativo per dispositivi screen reader." }, "iconName": { "required": false, "tsType": { "name": "string" }, "description": "Icona da utilizzare per l'elemento", "defaultValue": { "value": "'it-comment'", "computed": false } }, "alert": { "required": false, "tsType": { "name": "boolean" }, "description": "Quando abilitato indica una sezione che richiede attenzione o presenta nuovi contenuti", "defaultValue": { "value": "false", "computed": false } }, "badge": { "required": false, "tsType": { "name": "number" }, "description": "Visualizza dei badge con indicazioni numeriche in alto a destra dell'icona" }, "onLinkClick": { "required": false, "tsType": { "name": "signature", "type": "function", "raw": "(event: MouseEvent<HTMLAnchorElement>) => void", "signature": { "arguments": [{ "type": { "name": "MouseEvent", "elements": [{ "name": "HTMLAnchorElement" }], "raw": "MouseEvent<HTMLAnchorElement>" }, "name": "event" }], "return": { "name": "void" } } }, "description": "Da utilizzare al posto di url quando la gestione del click è in JS" }, "link": { "required": false, "tsType": { "name": "string" }, "description": "Indica l'URL a cui far puntare il componente BottomNavItem.\n@deprecated. Usare `url` o `onLinkClick`" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const meta = {
  title: "Documentazione/Menu di navigazione/BottomNav",
  component: BottomNav,
  parameters: {
    docs: {
      story: {
        height: "150px"
      }
    }
  }
};
const Esempi = {
  render: () => /* @__PURE__ */ React.createElement(BottomNav, null, /* @__PURE__ */ React.createElement(BottomNavItem, {
    label: "messaggi"
  }), /* @__PURE__ */ React.createElement(BottomNavItem, {
    label: "immagini",
    iconName: "it-camera"
  }), /* @__PURE__ */ React.createElement(BottomNavItem, {
    label: "documenti",
    iconName: "it-file"
  }))
};
const Esempi4Links = {
  render: () => /* @__PURE__ */ React.createElement(BottomNav, null, /* @__PURE__ */ React.createElement(BottomNavItem, {
    label: "messaggi"
  }), /* @__PURE__ */ React.createElement(BottomNavItem, {
    label: "immagini",
    iconName: "it-camera"
  }), /* @__PURE__ */ React.createElement(BottomNavItem, {
    label: "documenti",
    iconName: "it-file"
  }), /* @__PURE__ */ React.createElement(BottomNavItem, {
    label: "preferiti",
    iconName: "it-star-outline"
  }))
};
const EsempioBadge = {
  render: () => /* @__PURE__ */ React.createElement(BottomNav, null, /* @__PURE__ */ React.createElement(BottomNavItem, {
    label: "messaggi",
    badge: 1,
    srText: "- 1 da leggere"
  }), /* @__PURE__ */ React.createElement(BottomNavItem, {
    label: "immagini",
    badge: 2,
    iconName: "it-camera",
    srText: "- 2 da vedere",
    active: true
  }), /* @__PURE__ */ React.createElement(BottomNavItem, {
    label: "documenti",
    badge: 88,
    iconName: "it-file",
    srText: "- 88 da esaminare"
  }), /* @__PURE__ */ React.createElement(BottomNavItem, {
    label: "preferiti",
    iconName: "it-star-outline"
  }), /* @__PURE__ */ React.createElement(BottomNavItem, {
    label: "preferenze",
    iconName: "it-settings"
  }))
};
const Alert = {
  render: () => /* @__PURE__ */ React.createElement(BottomNav, null, /* @__PURE__ */ React.createElement(BottomNavItem, {
    alert: true,
    label: "messaggi",
    srText: "- nuovo contenuto disponibile"
  }), /* @__PURE__ */ React.createElement(BottomNavItem, {
    label: "immagini",
    iconName: "it-camera"
  }), /* @__PURE__ */ React.createElement(BottomNavItem, {
    alert: true,
    label: "documenti",
    iconName: "it-file",
    srText: "- nuovo contenuto disponibile"
  }), /* @__PURE__ */ React.createElement(BottomNavItem, {
    label: "preferiti",
    iconName: "it-star-outline"
  }), /* @__PURE__ */ React.createElement(BottomNavItem, {
    label: "preferenze",
    iconName: "it-settings"
  }))
};
Esempi.parameters = {
  ...Esempi.parameters,
  docs: {
    ...(_a = Esempi.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  render: () => <BottomNav>\n            <BottomNavItem label="messaggi" />\n            <BottomNavItem label="immagini" iconName="it-camera" />\n            <BottomNavItem label="documenti" iconName="it-file" />\n        </BottomNav>\n}',
      ...(_c = (_b = Esempi.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Esempi4Links.parameters = {
  ...Esempi4Links.parameters,
  docs: {
    ...(_d = Esempi4Links.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  render: () => <BottomNav>\n            <BottomNavItem label="messaggi" />\n            <BottomNavItem label="immagini" iconName="it-camera" />\n            <BottomNavItem label="documenti" iconName="it-file" />\n            <BottomNavItem label="preferiti" iconName="it-star-outline" />\n        </BottomNav>\n}',
      ...(_f = (_e = Esempi4Links.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
EsempioBadge.parameters = {
  ...EsempioBadge.parameters,
  docs: {
    ...(_g = EsempioBadge.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  render: () => <BottomNav>\n            <BottomNavItem label="messaggi" badge={1} srText="- 1 da leggere" />\n            <BottomNavItem label="immagini" badge={2} iconName="it-camera" srText="- 2 da vedere" active />\n            <BottomNavItem label="documenti" badge={88} iconName="it-file" srText="- 88 da esaminare" />\n            <BottomNavItem label="preferiti" iconName="it-star-outline" />\n            <BottomNavItem label="preferenze" iconName="it-settings" />\n        </BottomNav>\n}',
      ...(_i = (_h = EsempioBadge.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Alert.parameters = {
  ...Alert.parameters,
  docs: {
    ...(_j = Alert.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  render: () => <BottomNav>\n            <BottomNavItem alert label="messaggi" srText="- nuovo contenuto disponibile" />\n            <BottomNavItem label="immagini" iconName="it-camera" />\n            <BottomNavItem alert label="documenti" iconName="it-file" srText="- nuovo contenuto disponibile" />\n            <BottomNavItem label="preferiti" iconName="it-star-outline" />\n            <BottomNavItem label="preferenze" iconName="it-settings" />\n        </BottomNav>\n}',
      ...(_l = (_k = Alert.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
const __namedExportsOrder = ["Esempi", "Esempi4Links", "EsempioBadge", "Alert"];
const BottomNavStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Alert,
  Esempi,
  Esempi4Links,
  EsempioBadge,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Alert as A,
  BottomNavStories as B,
  Esempi as E,
  Esempi4Links as a,
  EsempioBadge as b,
  BottomNav as c,
  BottomNavItem as d
};
