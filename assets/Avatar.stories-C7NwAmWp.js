var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
import { R as React, r as reactExports } from "./index-CQCy530F.js";
import { A as AvatarIcon } from "./AvatarIcon-BtWd5PRe.js";
import { A as AvatarContainer, a as AvatarWrapper } from "./AvatarWrapper-11RnJjLL.js";
import { I as Icon } from "./Icon-CYxksTIN.js";
import { c as classNames } from "./index-CpyNLP69.js";
import { U as UncontrolledTooltip } from "./UncontrolledTooltip-CwwPcv3i.js";
const AvatarExtraText = ({ className, tag = "div", testId, ...attributes }) => {
  const Tag = tag;
  const wrapperClass = classNames("extra-text", className);
  return /* @__PURE__ */ React.createElement(Tag, { className: wrapperClass, ...attributes, "data-testid": testId });
};
AvatarExtraText.__docgenInfo = { "description": "", "methods": [], "displayName": "AvatarExtraText", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'div'", "computed": false } }, "className": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente AvatarExtraText" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const meta = {
  title: "Documentazione/Componenti/Avatar",
  component: AvatarIcon,
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "green", "orange", "red"]
    }
  }
};
const AvatarWithImageWithHooks = (args) => {
  return /* @__PURE__ */ React.createElement(AvatarContainer, null, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "lg"
  }, args.results && args.results.length ? /* @__PURE__ */ React.createElement("img", {
    src: args.results.at(0).picture.large,
    alt: `${args.results.at(0).name.last} ${args.results.at(0).name.first}`
  }) : null));
};
const AvatarWithImage = {
  loaders: [async () => ({
    fakeUser: await (await fetch("https://randomuser.me/api")).json()
    //https://randomuser.me/documentation#howto
  })],
  render: (args, {
    loaded: {
      fakeUser
    }
  }) => /* @__PURE__ */ React.createElement(AvatarWithImageWithHooks, {
    ...args,
    ...fakeUser
  })
};
const AvatarWithText = {
  render: () => /* @__PURE__ */ React.createElement(AvatarContainer, null, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "xs"
  }, /* @__PURE__ */ React.createElement("p", {
    "aria-hidden": "true"
  }, "M"), /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Mario Rossi")), /* @__PURE__ */ React.createElement(AvatarIcon, {
    color: "primary",
    size: "sm"
  }, /* @__PURE__ */ React.createElement("p", {
    "aria-hidden": "true"
  }, "M"), /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Mario Rossi")), /* @__PURE__ */ React.createElement(AvatarIcon, {
    color: "secondary"
  }, /* @__PURE__ */ React.createElement("p", {
    "aria-hidden": "true"
  }, "MR"), /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Mario Rossi")), /* @__PURE__ */ React.createElement(AvatarIcon, {
    color: "green",
    size: "lg"
  }, /* @__PURE__ */ React.createElement("p", {
    "aria-hidden": "true"
  }, "MR"), /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Mario Rossi")), /* @__PURE__ */ React.createElement(AvatarIcon, {
    color: "orange",
    size: "xl"
  }, /* @__PURE__ */ React.createElement("p", {
    "aria-hidden": "true"
  }, "MR"), /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Mario Rossi")), /* @__PURE__ */ React.createElement(AvatarIcon, {
    color: "red",
    size: "xxl"
  }, /* @__PURE__ */ React.createElement("p", {
    "aria-hidden": "true"
  }, "MR"), /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Mario Rossi")))
};
const AvatarWithIcon = {
  render: () => /* @__PURE__ */ React.createElement(AvatarContainer, null, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "xs"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-search"
  })), /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "sm"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-search"
  })), /* @__PURE__ */ React.createElement(AvatarIcon, null, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-search"
  })), /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "lg"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-search"
  })), /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "xl"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-search"
  })), /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "xxl"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-search"
  })))
};
const AvatarLink = {
  render: () => /* @__PURE__ */ React.createElement(AvatarContainer, null, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "xl",
    href: "#"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://randomuser.me/api/portraits/women/41.jpg",
    alt: "Anna Barbieri"
  })), /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "xl",
    color: "red",
    href: "#"
  }, /* @__PURE__ */ React.createElement("p", {
    "aria-hidden": "true"
  }, "MR"), /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Mario Rossi")), /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "xl"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-search",
    onClick: () => console.log("Click")
  })))
};
const AvatarLinkWithTooltipWithHooks = () => {
  const withImageRef = reactExports.useRef(null);
  const withTextRef = reactExports.useRef(null);
  const withIconRef = reactExports.useRef(null);
  return /* @__PURE__ */ React.createElement(AvatarContainer, null, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "xl",
    href: "#",
    innerRef: withImageRef
  }, /* @__PURE__ */ React.createElement(UncontrolledTooltip, {
    placement: "left",
    target: withImageRef
  }, "Anna Barbieri", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("i", null, "Administrator")), /* @__PURE__ */ React.createElement("img", {
    src: "https://randomuser.me/api/portraits/women/41.jpg",
    alt: "Anna Barbieri"
  })), /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "xl",
    color: "red",
    href: "#",
    innerRef: withTextRef
  }, /* @__PURE__ */ React.createElement(UncontrolledTooltip, {
    placement: "top",
    target: withTextRef
  }, "Mario Rossi", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("i", null, "Editor")), /* @__PURE__ */ React.createElement("p", {
    "aria-hidden": "true"
  }, "MR"), /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Mario Rossi")), /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "xl",
    href: "#",
    innerRef: withIconRef
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-search"
  }), /* @__PURE__ */ React.createElement(UncontrolledTooltip, {
    placement: "right",
    target: withIconRef
  }, "Search", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("i", null, "News Archive"))));
};
const AvatarLinkWithTooltip = {
  render: () => /* @__PURE__ */ React.createElement(AvatarLinkWithTooltipWithHooks, null),
  parameters: {
    docs: {
      canvas: {
        sourceState: "none"
      }
    }
  }
};
const AvatarWithAdditionalText = {
  render: () => /* @__PURE__ */ React.createElement(AvatarContainer, null, /* @__PURE__ */ React.createElement(AvatarWrapper, {
    extra: "text"
  }, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "xl"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://randomuser.me/api/portraits/men/33.jpg",
    alt: "Mario Rossi"
  })), /* @__PURE__ */ React.createElement(AvatarExtraText, null, /* @__PURE__ */ React.createElement("h4", null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Mario Rossi")), /* @__PURE__ */ React.createElement("time", {
    dateTime: "2018-09-15"
  }, "15 Set 2018"))), /* @__PURE__ */ React.createElement(AvatarWrapper, {
    extra: "text"
  }, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "xl"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://randomuser.me/api/portraits/women/33.jpg",
    alt: "Guilia Neri"
  })), /* @__PURE__ */ React.createElement(AvatarExtraText, null, /* @__PURE__ */ React.createElement("h4", null, "Guilia Neri"), /* @__PURE__ */ React.createElement("p", null, "Lorem ipsum dolor"))), /* @__PURE__ */ React.createElement(AvatarWrapper, {
    extra: "text"
  }, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "xl"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://randomuser.me/api/portraits/men/15.jpg",
    alt: "Michele Dotti"
  })), /* @__PURE__ */ React.createElement(AvatarExtraText, null, /* @__PURE__ */ React.createElement("h4", null, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, "Micehele Dotti")), /* @__PURE__ */ React.createElement("time", {
    dateTime: "2018-09-15"
  }, "15 Mag 2018"))))
};
AvatarWithImage.parameters = {
  ...AvatarWithImage.parameters,
  docs: {
    ...(_a = AvatarWithImage.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  loaders: [async () => ({\n    fakeUser: await (await fetch("https://randomuser.me/api")).json() //https://randomuser.me/documentation#howto\n  })],\n  render: (args, {\n    loaded: {\n      fakeUser\n    }\n  }) => <AvatarWithImageWithHooks {...args} {...fakeUser} />\n}',
      ...(_c = (_b = AvatarWithImage.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
AvatarWithText.parameters = {
  ...AvatarWithText.parameters,
  docs: {
    ...(_d = AvatarWithText.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  render: () => <AvatarContainer>\n            <AvatarIcon size="xs">\n                <p aria-hidden="true">M</p>\n                <span className="visually-hidden">Mario Rossi</span>\n            </AvatarIcon>\n            <AvatarIcon color="primary" size="sm">\n                <p aria-hidden="true">M</p>\n                <span className="visually-hidden">Mario Rossi</span>\n            </AvatarIcon>\n            <AvatarIcon color="secondary">\n                <p aria-hidden="true">MR</p>\n                <span className="visually-hidden">Mario Rossi</span>\n            </AvatarIcon>\n            <AvatarIcon color="green" size="lg">\n                <p aria-hidden="true">MR</p>\n                <span className="visually-hidden">Mario Rossi</span>\n            </AvatarIcon>\n            <AvatarIcon color="orange" size="xl">\n                <p aria-hidden="true">MR</p>\n                <span className="visually-hidden">Mario Rossi</span>\n            </AvatarIcon>\n            <AvatarIcon color="red" size="xxl">\n                <p aria-hidden="true">MR</p>\n                <span className="visually-hidden">Mario Rossi</span>\n            </AvatarIcon>\n        </AvatarContainer>\n}',
      ...(_f = (_e = AvatarWithText.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
AvatarWithIcon.parameters = {
  ...AvatarWithIcon.parameters,
  docs: {
    ...(_g = AvatarWithIcon.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  render: () => <AvatarContainer>\n            <AvatarIcon size="xs">\n                <Icon icon="it-search" />\n            </AvatarIcon>\n            <AvatarIcon size="sm">\n                <Icon icon="it-search" />\n            </AvatarIcon>\n            <AvatarIcon>\n                <Icon icon="it-search" />\n            </AvatarIcon>\n            <AvatarIcon size="lg">\n                <Icon icon="it-search" />\n            </AvatarIcon>\n            <AvatarIcon size="xl">\n                <Icon icon="it-search" />\n            </AvatarIcon>\n            <AvatarIcon size="xxl">\n                <Icon icon="it-search" />\n            </AvatarIcon>\n        </AvatarContainer>\n}',
      ...(_i = (_h = AvatarWithIcon.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
AvatarLink.parameters = {
  ...AvatarLink.parameters,
  docs: {
    ...(_j = AvatarLink.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  render: () => <AvatarContainer>\n            <AvatarIcon size="xl" href="#">\n                <img src="https://randomuser.me/api/portraits/women/41.jpg" alt="Anna Barbieri"></img>\n            </AvatarIcon>\n            <AvatarIcon size="xl" color="red" href="#">\n                <p aria-hidden="true">MR</p>\n                <span className="visually-hidden">Mario Rossi</span>\n            </AvatarIcon>\n            <AvatarIcon size="xl">\n                <Icon icon="it-search" onClick={() => console.log("Click")} />\n            </AvatarIcon>\n        </AvatarContainer>\n}',
      ...(_l = (_k = AvatarLink.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
AvatarLinkWithTooltip.parameters = {
  ...AvatarLinkWithTooltip.parameters,
  docs: {
    ...(_m = AvatarLinkWithTooltip.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: '{\n  render: () => <AvatarLinkWithTooltipWithHooks></AvatarLinkWithTooltipWithHooks>,\n  parameters: {\n    docs: {\n      canvas: {\n        sourceState: "none"\n      }\n    }\n  }\n}',
      ...(_o = (_n = AvatarLinkWithTooltip.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
AvatarWithAdditionalText.parameters = {
  ...AvatarWithAdditionalText.parameters,
  docs: {
    ...(_p = AvatarWithAdditionalText.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: '{\n  render: () => <AvatarContainer>\n            <AvatarWrapper extra="text">\n                <AvatarIcon size="xl">\n                    <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Mario Rossi" />\n                </AvatarIcon>\n                <AvatarExtraText>\n                    <h4>\n                        <a href="#">Mario Rossi</a>\n                    </h4>\n                    <time dateTime="2018-09-15">15 Set 2018</time>\n                </AvatarExtraText>\n            </AvatarWrapper>\n            <AvatarWrapper extra="text">\n                <AvatarIcon size="xl">\n                    <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="Guilia Neri" />\n                </AvatarIcon>\n                <AvatarExtraText>\n                    <h4>Guilia Neri</h4>\n                    <p>Lorem ipsum dolor</p>\n                </AvatarExtraText>\n            </AvatarWrapper>\n            <AvatarWrapper extra="text">\n                <AvatarIcon size="xl">\n                    <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="Michele Dotti" />\n                </AvatarIcon>\n                <AvatarExtraText>\n                    <h4>\n                        <a href="#">Micehele Dotti</a>\n                    </h4>\n                    <time dateTime="2018-09-15">15 Mag 2018</time>\n                </AvatarExtraText>\n            </AvatarWrapper>\n        </AvatarContainer>\n}',
      ...(_r = (_q = AvatarWithAdditionalText.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
const __namedExportsOrder = ["AvatarWithImage", "AvatarWithText", "AvatarWithIcon", "AvatarLink", "AvatarLinkWithTooltip", "AvatarWithAdditionalText"];
const AvatarStories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AvatarLink,
  AvatarLinkWithTooltip,
  AvatarWithAdditionalText,
  AvatarWithIcon,
  AvatarWithImage,
  AvatarWithText,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  AvatarStories as A,
  AvatarWithImage as a,
  AvatarWithText as b,
  AvatarWithIcon as c,
  AvatarLink as d,
  AvatarLinkWithTooltip as e,
  AvatarExtraText as f
};
