var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M;
import { e } from "./index-BehpJNG5.js";
import { c as classNames } from "./index-D3ELxcOV.js";
import "./track-focus-DbJ2CO43.js";
const ThumbNav = ({
  isSmall = false,
  fixedWidth = false,
  isVertical = false,
  noZoomOnHover = false,
  rowItems,
  overlayOnHover,
  position,
  testId,
  ...attributes
}) => {
  const classes = classNames("thumb-nav", {
    "thumb-nav-fixed": fixedWidth,
    "thumb-nav-small": isSmall,
    "thumb-nav-vertical": isVertical || position === "left" || position === "right",
    "thumb-nav-nozoom": noZoomOnHover,
    [`thumb-nav-${overlayOnHover}`]: overlayOnHover,
    [`thumb-nav-${position}`]: position,
    "thumb-nav-auto": rowItems != null,
    [`thumb-nav-auto-${rowItems}`]: rowItems != null
  });
  return /* @__PURE__ */ e.createElement("ul", { className: classes, ...attributes, "data-testid": testId });
};
ThumbNav.__docgenInfo = { "description": "", "methods": [], "displayName": "ThumbNav", "props": { "fixedWidth": { "required": false, "tsType": { "name": "boolean" }, "description": "", "defaultValue": { "value": "false", "computed": false } }, "isSmall": { "required": false, "tsType": { "name": "boolean" }, "description": "", "defaultValue": { "value": "false", "computed": false } }, "isVertical": { "required": false, "tsType": { "name": "boolean" }, "description": "", "defaultValue": { "value": "false", "computed": false } }, "noZoomOnHover": { "required": false, "tsType": { "name": "boolean" }, "description": "", "defaultValue": { "value": "false", "computed": false } }, "overlayOnHover": { "required": false, "tsType": { "name": "union", "raw": "'black' | 'primary'", "elements": [{ "name": "literal", "value": "'black'" }, { "name": "literal", "value": "'primary'" }] }, "description": "" }, "position": { "required": false, "tsType": { "name": "union", "raw": "'top' | 'right' | 'bottom' | 'left'", "elements": [{ "name": "literal", "value": "'top'" }, { "name": "literal", "value": "'right'" }, { "name": "literal", "value": "'bottom'" }, { "name": "literal", "value": "'left'" }] }, "description": "" }, "rowItems": { "required": false, "tsType": { "name": "union", "raw": "2 | 3 | 4 | 5", "elements": [{ "name": "literal", "value": "2" }, { "name": "literal", "value": "3" }, { "name": "literal", "value": "4" }, { "name": "literal", "value": "5" }] }, "description": "" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const ThumbNavItem = ({
  active = false,
  targetUrl,
  imageUrl,
  actionDescription,
  testId,
  ...attributes
}) => {
  const classes = classNames({ active }, "ratio", "ratio-3x2");
  return /* @__PURE__ */ e.createElement("li", { ...attributes, "data-testid": testId }, /* @__PURE__ */ e.createElement("a", { href: targetUrl, className: classes }, /* @__PURE__ */ e.createElement("img", { src: imageUrl, alt: actionDescription })));
};
ThumbNavItem.__docgenInfo = { "description": "", "methods": [], "displayName": "ThumbNavItem", "props": { "active": { "required": false, "tsType": { "name": "boolean" }, "description": "", "defaultValue": { "value": "false", "computed": false } }, "targetUrl": { "required": false, "tsType": { "name": "string" }, "description": "" }, "imageUrl": { "required": true, "tsType": { "name": "string" }, "description": "" }, "actionDescription": { "required": false, "tsType": { "name": "string" }, "description": "" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const meta = {
  title: "Documentazione/Menu di navigazione/ThumbNav",
  component: ThumbNav
};
const Esempio = {
  render: () => /* @__PURE__ */ e.createElement(ThumbNav, null, /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1044", actionDescription: "Visualizza immagine 1" }), /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1050", actionDescription: "Visualizza immagine 2" }), /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1037", actionDescription: "Visualizza immagine 3" }))
};
const EsempioSmall = {
  render: () => /* @__PURE__ */ e.createElement(ThumbNav, { isSmall: true }, /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1044", actionDescription: "Visualizza immagine 1" }), /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1050", actionDescription: "Visualizza immagine 2" }), /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1037", actionDescription: "Visualizza immagine 3" }))
};
const EsempioNoZoom = {
  render: () => /* @__PURE__ */ e.createElement(ThumbNav, { noZoomOnHover: true }, /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1044", actionDescription: "Visualizza immagine 1" }), /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1050", actionDescription: "Visualizza immagine 2" }), /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1037", actionDescription: "Visualizza immagine 3" }))
};
const EsempioBlackLayer = {
  render: () => /* @__PURE__ */ e.createElement(ThumbNav, { overlayOnHover: "black" }, /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1044", actionDescription: "Visualizza immagine 1" }), /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1050", actionDescription: "Visualizza immagine 2" }), /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1037", actionDescription: "Visualizza immagine 3" }))
};
const EsempioPrimaryLayer = {
  render: () => /* @__PURE__ */ e.createElement(ThumbNav, { overlayOnHover: "primary" }, /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1044", actionDescription: "Visualizza immagine 1" }), /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1050", actionDescription: "Visualizza immagine 2" }), /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1037", actionDescription: "Visualizza immagine 3" }))
};
const EsempioVerticale = {
  render: () => /* @__PURE__ */ e.createElement(ThumbNav, { isVertical: true }, /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1044", actionDescription: "Visualizza immagine 1" }), /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1050", actionDescription: "Visualizza immagine 2" }), /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1037", actionDescription: "Visualizza immagine 3" }))
};
const Overlay = {
  render: ({
    position
  }) => /* @__PURE__ */ e.createElement("div", { className: "position-relative" }, /* @__PURE__ */ e.createElement("img", { src: "https://picsum.photos/1280/720?image=1050", className: "test-image", alt: "Amazing landscape" }), /* @__PURE__ */ e.createElement(ThumbNav, { isSmall: true, position }, /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1044", actionDescription: "Visualizza immagine 1" }), /* @__PURE__ */ e.createElement(ThumbNavItem, { active: true, targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1050", actionDescription: "Visualizza immagine 2" }), /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1037", actionDescription: "Visualizza immagine 3" }), /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1040", actionDescription: "Visualizza immagine 4" }))),
  args: {
    position: "bottom"
  },
  argTypes: {
    position: {
      control: {
        type: "select",
        options: ["left", "bottom", "right", "top"]
      }
    }
  }
};
const OverlayTop = {
  ...Overlay,
  args: {
    position: "top"
  }
};
const OverlayLeft = {
  ...Overlay,
  args: {
    position: "left"
  }
};
const OverlayRight = {
  ...Overlay,
  args: {
    position: "right"
  }
};
const EsempioFixed = {
  render: () => /* @__PURE__ */ e.createElement(ThumbNav, { fixedWidth: true }, /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1044", actionDescription: "Visualizza immagine 1" }), /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1050", actionDescription: "Visualizza immagine 2" }), /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1037", actionDescription: "Visualizza immagine 3" }), /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1040", actionDescription: "Visualizza immagine 4" }), /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1055", actionDescription: "Visualizza immagine 5" }), /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1057", actionDescription: "Visualizza immagine 6" }))
};
const EsempioAutoWidth = {
  render: ({
    rowItems
  }) => /* @__PURE__ */ e.createElement(ThumbNav, { rowItems }, /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1044", actionDescription: "Visualizza immagine 1" }), /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1050", actionDescription: "Visualizza immagine 2" }), /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1037", actionDescription: "Visualizza immagine 3" }), /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1040", actionDescription: "Visualizza immagine 4" }), /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1055", actionDescription: "Visualizza immagine 5" }), /* @__PURE__ */ e.createElement(ThumbNavItem, { targetUrl: "#", imageUrl: "https://picsum.photos/480/320?image=1057", actionDescription: "Visualizza immagine 6" })),
  args: {
    rowItems: 3
  },
  argTypes: {
    rowItems: {
      control: {
        type: "select",
        options: [2, 3, 4, 5]
      }
    }
  }
};
const EsempioAutoWidthFive = {
  ...EsempioAutoWidth,
  args: {
    rowItems: 5
  }
};
Esempio.parameters = {
  ...Esempio.parameters,
  docs: {
    ...(_a = Esempio.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: () => <ThumbNav>\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1044' actionDescription='Visualizza immagine 1' />\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1050' actionDescription='Visualizza immagine 2' />\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1037' actionDescription='Visualizza immagine 3' />\n    </ThumbNav>\n}",
      ...(_c = (_b = Esempio.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
EsempioSmall.parameters = {
  ...EsempioSmall.parameters,
  docs: {
    ...(_d = EsempioSmall.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: () => <ThumbNav isSmall>\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1044' actionDescription='Visualizza immagine 1' />\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1050' actionDescription='Visualizza immagine 2' />\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1037' actionDescription='Visualizza immagine 3' />\n    </ThumbNav>\n}",
      ...(_f = (_e = EsempioSmall.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
EsempioNoZoom.parameters = {
  ...EsempioNoZoom.parameters,
  docs: {
    ...(_g = EsempioNoZoom.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  render: () => <ThumbNav noZoomOnHover>\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1044' actionDescription='Visualizza immagine 1' />\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1050' actionDescription='Visualizza immagine 2' />\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1037' actionDescription='Visualizza immagine 3' />\n    </ThumbNav>\n}",
      ...(_i = (_h = EsempioNoZoom.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
EsempioBlackLayer.parameters = {
  ...EsempioBlackLayer.parameters,
  docs: {
    ...(_j = EsempioBlackLayer.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  render: () => <ThumbNav overlayOnHover='black'>\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1044' actionDescription='Visualizza immagine 1' />\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1050' actionDescription='Visualizza immagine 2' />\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1037' actionDescription='Visualizza immagine 3' />\n    </ThumbNav>\n}",
      ...(_l = (_k = EsempioBlackLayer.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
EsempioPrimaryLayer.parameters = {
  ...EsempioPrimaryLayer.parameters,
  docs: {
    ...(_m = EsempioPrimaryLayer.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  render: () => <ThumbNav overlayOnHover='primary'>\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1044' actionDescription='Visualizza immagine 1' />\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1050' actionDescription='Visualizza immagine 2' />\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1037' actionDescription='Visualizza immagine 3' />\n    </ThumbNav>\n}",
      ...(_o = (_n = EsempioPrimaryLayer.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
EsempioVerticale.parameters = {
  ...EsempioVerticale.parameters,
  docs: {
    ...(_p = EsempioVerticale.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  render: () => <ThumbNav isVertical>\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1044' actionDescription='Visualizza immagine 1' />\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1050' actionDescription='Visualizza immagine 2' />\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1037' actionDescription='Visualizza immagine 3' />\n    </ThumbNav>\n}",
      ...(_r = (_q = EsempioVerticale.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
Overlay.parameters = {
  ...Overlay.parameters,
  docs: {
    ...(_s = Overlay.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  render: ({\n    position\n  }: ThumbNavProps) => <div className='position-relative'>\n      <img src='https://picsum.photos/1280/720?image=1050' className='test-image' alt='Amazing landscape' />\n      <ThumbNav isSmall position={position}>\n        <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1044' actionDescription='Visualizza immagine 1' />\n        <ThumbNavItem active targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1050' actionDescription='Visualizza immagine 2' />\n        <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1037' actionDescription='Visualizza immagine 3' />\n        <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1040' actionDescription='Visualizza immagine 4' />\n      </ThumbNav>\n    </div>,\n  args: {\n    position: 'bottom'\n  },\n  argTypes: {\n    position: {\n      control: {\n        type: 'select',\n        options: ['left', 'bottom', 'right', 'top']\n      }\n    }\n  }\n}",
      ...(_u = (_t = Overlay.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
OverlayTop.parameters = {
  ...OverlayTop.parameters,
  docs: {
    ...(_v = OverlayTop.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: "{\n  ...Overlay,\n  args: {\n    position: 'top'\n  }\n}",
      ...(_x = (_w = OverlayTop.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
OverlayLeft.parameters = {
  ...OverlayLeft.parameters,
  docs: {
    ...(_y = OverlayLeft.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: "{\n  ...Overlay,\n  args: {\n    position: 'left'\n  }\n}",
      ...(_A = (_z = OverlayLeft.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
OverlayRight.parameters = {
  ...OverlayRight.parameters,
  docs: {
    ...(_B = OverlayRight.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: "{\n  ...Overlay,\n  args: {\n    position: 'right'\n  }\n}",
      ...(_D = (_C = OverlayRight.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
EsempioFixed.parameters = {
  ...EsempioFixed.parameters,
  docs: {
    ...(_E = EsempioFixed.parameters) == null ? void 0 : _E.docs,
    source: {
      originalSource: "{\n  render: () => <ThumbNav fixedWidth>\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1044' actionDescription='Visualizza immagine 1' />\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1050' actionDescription='Visualizza immagine 2' />\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1037' actionDescription='Visualizza immagine 3' />\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1040' actionDescription='Visualizza immagine 4' />\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1055' actionDescription='Visualizza immagine 5' />\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1057' actionDescription='Visualizza immagine 6' />\n    </ThumbNav>\n}",
      ...(_G = (_F = EsempioFixed.parameters) == null ? void 0 : _F.docs) == null ? void 0 : _G.source
    }
  }
};
EsempioAutoWidth.parameters = {
  ...EsempioAutoWidth.parameters,
  docs: {
    ...(_H = EsempioAutoWidth.parameters) == null ? void 0 : _H.docs,
    source: {
      originalSource: "{\n  render: ({\n    rowItems\n  }: ThumbNavProps) => <ThumbNav rowItems={rowItems}>\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1044' actionDescription='Visualizza immagine 1' />\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1050' actionDescription='Visualizza immagine 2' />\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1037' actionDescription='Visualizza immagine 3' />\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1040' actionDescription='Visualizza immagine 4' />\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1055' actionDescription='Visualizza immagine 5' />\n      <ThumbNavItem targetUrl='#' imageUrl='https://picsum.photos/480/320?image=1057' actionDescription='Visualizza immagine 6' />\n    </ThumbNav>,\n  args: {\n    rowItems: 3\n  },\n  argTypes: {\n    rowItems: {\n      control: {\n        type: 'select',\n        options: [2, 3, 4, 5]\n      }\n    }\n  }\n}",
      ...(_J = (_I = EsempioAutoWidth.parameters) == null ? void 0 : _I.docs) == null ? void 0 : _J.source
    }
  }
};
EsempioAutoWidthFive.parameters = {
  ...EsempioAutoWidthFive.parameters,
  docs: {
    ...(_K = EsempioAutoWidthFive.parameters) == null ? void 0 : _K.docs,
    source: {
      originalSource: "{\n  ...EsempioAutoWidth,\n  args: {\n    rowItems: 5\n  }\n}",
      ...(_M = (_L = EsempioAutoWidthFive.parameters) == null ? void 0 : _L.docs) == null ? void 0 : _M.source
    }
  }
};
const __namedExportsOrder = ["Esempio", "EsempioSmall", "EsempioNoZoom", "EsempioBlackLayer", "EsempioPrimaryLayer", "EsempioVerticale", "Overlay", "OverlayTop", "OverlayLeft", "OverlayRight", "EsempioFixed", "EsempioAutoWidth", "EsempioAutoWidthFive"];
const ThumbNavStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Esempio,
  EsempioAutoWidth,
  EsempioAutoWidthFive,
  EsempioBlackLayer,
  EsempioFixed,
  EsempioNoZoom,
  EsempioPrimaryLayer,
  EsempioSmall,
  EsempioVerticale,
  Overlay,
  OverlayLeft,
  OverlayRight,
  OverlayTop,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  Esempio as E,
  Overlay as O,
  ThumbNavStories as T,
  EsempioSmall as a,
  EsempioNoZoom as b,
  EsempioBlackLayer as c,
  EsempioPrimaryLayer as d,
  EsempioVerticale as e,
  OverlayTop as f,
  OverlayLeft as g,
  OverlayRight as h,
  EsempioFixed as i,
  EsempioAutoWidth as j,
  EsempioAutoWidthFive as k
};
