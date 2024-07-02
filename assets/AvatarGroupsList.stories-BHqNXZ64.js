var _a, _b, _c, _d, _e, _f;
import { R as React } from "./index-C-_iGYWo.js";
import { A as AvatarIcon } from "./AvatarIcon-CvOpSckd.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-BcZlcF5e.js";
import { I as Icon } from "./Icon-DRwA3K3x.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-xoeSAV6i.js";
import "./iframe-MlAXxqxI.js";
import "../sb-preview/runtime.js";
const meta = {
  title: "Documentazione/Componenti/Avatar/Groups List",
  component: AvatarIcon
};
const AvatarSmallList = () => {
  return /* @__PURE__ */ React.createElement(LinkList, {
    avatar: true
  }, /* @__PURE__ */ React.createElement(LinkListItem, {
    href: "#"
  }, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "sm"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://randomuser.me/api/portraits/men/43.jpg",
    alt: "Mario Rossi"
  })), /* @__PURE__ */ React.createElement("span", null, "Mario Rossi")), /* @__PURE__ */ React.createElement(LinkListItem, {
    href: "#"
  }, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "sm",
    color: "orange"
  }, /* @__PURE__ */ React.createElement("p", {
    "aria-hidden": "true"
  }, "A")), /* @__PURE__ */ React.createElement("span", null, "Arianna Gallo")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "sm",
    color: "red"
  }, /* @__PURE__ */ React.createElement("p", {
    "aria-hidden": "true"
  }, "S")), /* @__PURE__ */ React.createElement("span", null, "Sara Ghione")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "sm"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-user"
  })), /* @__PURE__ */ React.createElement("span", null, "Antonio Esposito")));
};
const AvatarMediaList = () => {
  return /* @__PURE__ */ React.createElement(LinkList, {
    avatar: true
  }, /* @__PURE__ */ React.createElement(LinkListItem, {
    href: "#"
  }, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "md"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://randomuser.me/api/portraits/men/43.jpg",
    alt: "Mario Rossi"
  })), /* @__PURE__ */ React.createElement("span", null, "Mario Rossi")), /* @__PURE__ */ React.createElement(LinkListItem, {
    href: "#"
  }, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "md",
    color: "green"
  }, /* @__PURE__ */ React.createElement("p", {
    "aria-hidden": "true"
  }, "AG")), /* @__PURE__ */ React.createElement("span", null, "Arianna Gallo")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "md",
    color: "primary"
  }, /* @__PURE__ */ React.createElement("p", {
    "aria-hidden": "true"
  }, "S")), /* @__PURE__ */ React.createElement("span", null, "Sara Ghione")), /* @__PURE__ */ React.createElement(LinkListItem, null, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "md"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-user"
  })), /* @__PURE__ */ React.createElement("span", null, "Antonio Esposito")));
};
AvatarSmallList.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AvatarSmallList"
};
AvatarMediaList.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "AvatarMediaList"
};
AvatarSmallList.parameters = {
  ...AvatarSmallList.parameters,
  docs: {
    ...(_a = AvatarSmallList.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '() => {\n  return <LinkList avatar>\n            <LinkListItem href="#">\n                <AvatarIcon size="sm">\n                    <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="Mario Rossi" />\n                </AvatarIcon>\n                <span>Mario Rossi</span>\n            </LinkListItem>\n            <LinkListItem href="#">\n                <AvatarIcon size="sm" color="orange">\n                    <p aria-hidden="true">A</p>\n                </AvatarIcon>\n                <span>Arianna Gallo</span>\n            </LinkListItem>\n            <LinkListItem>\n                <AvatarIcon size="sm" color="red">\n                    <p aria-hidden="true">S</p>\n                </AvatarIcon>\n                <span>Sara Ghione</span>\n            </LinkListItem>\n            <LinkListItem>\n                <AvatarIcon size="sm">\n                    <Icon icon="it-user" />\n                </AvatarIcon>\n                <span>Antonio Esposito</span>\n            </LinkListItem>\n        </LinkList>;\n}',
      ...(_c = (_b = AvatarSmallList.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
AvatarMediaList.parameters = {
  ...AvatarMediaList.parameters,
  docs: {
    ...(_d = AvatarMediaList.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '() => {\n  return <LinkList avatar>\n            <LinkListItem href="#">\n                <AvatarIcon size="md">\n                    <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="Mario Rossi" />\n                </AvatarIcon>\n                <span>Mario Rossi</span>\n            </LinkListItem>\n            <LinkListItem href="#">\n                <AvatarIcon size="md" color="green">\n                    <p aria-hidden="true">AG</p>\n                </AvatarIcon>\n                <span>Arianna Gallo</span>\n            </LinkListItem>\n            <LinkListItem>\n                <AvatarIcon size="md" color="primary">\n                    <p aria-hidden="true">S</p>\n                </AvatarIcon>\n                <span>Sara Ghione</span>\n            </LinkListItem>\n            <LinkListItem>\n                <AvatarIcon size="md">\n                    <Icon icon="it-user" />\n                </AvatarIcon>\n                <span>Antonio Esposito</span>\n            </LinkListItem>\n        </LinkList>;\n}',
      ...(_f = (_e = AvatarMediaList.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["AvatarSmallList", "AvatarMediaList"];
export {
  AvatarMediaList,
  AvatarSmallList,
  __namedExportsOrder,
  meta as default
};
