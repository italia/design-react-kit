var _a, _b, _c, _d, _e, _f;
import { R as React } from "./index-C-_iGYWo.js";
import { c as classNames } from "./index-xoeSAV6i.js";
import { A as AvatarIcon } from "./AvatarIcon-CWYmjvUI.js";
import { I as Icon } from "./Icon-CdS0NozM.js";
import { D as Dropdown, a as DropdownToggle } from "./DropdownToggle-BKAecgrs.js";
import { D as DropdownMenu } from "./DropdownMenu-BQNQz3tb.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-BcZlcF5e.js";
const AvatarGroupContainer = ({
  tag = "ul",
  wrapperClassName,
  testId,
  ...attributes
}) => {
  const Tag = tag;
  const wrapperClasses = classNames("avatar-group-stacked", wrapperClassName);
  return /* @__PURE__ */ React.createElement(Tag, { ...attributes, className: wrapperClasses, "data-testid": testId });
};
AvatarGroupContainer.__docgenInfo = { "description": "", "methods": [], "displayName": "AvatarGroupContainer", "props": { "tag": { "required": false, "tsType": { "name": "ElementType" }, "description": "Utilizzarlo in caso di utilizzo di componenti personalizzati", "defaultValue": { "value": "'ul'", "computed": false } }, "wrapperClassName": { "required": false, "tsType": { "name": "string" }, "description": "Classi aggiuntive da usare per il componente più esterno di AvatarGroupContainer" }, "testId": { "required": false, "tsType": { "name": "string" }, "description": "" } }, "composes": ["HTMLAttributes"] };
const meta = {
  title: "Documentazione/Componenti/Avatar/Groups Overlapping",
  component: AvatarGroupContainer
};
const SmallOverlappingAvatars = () => {
  return /* @__PURE__ */ React.createElement(AvatarGroupContainer, null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "sm",
    href: "#"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://randomuser.me/api/portraits/women/12.jpg",
    alt: "Arianna Rossi"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "sm",
    href: "#"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://randomuser.me/api/portraits/men/13.jpg",
    alt: "Giulio Neri"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "sm",
    color: "primary",
    href: "#"
  }, /* @__PURE__ */ React.createElement("p", {
    "aria-hidden": "true"
  }, "A"), /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Andrea Gallo"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "sm",
    color: "secondary",
    href: "#"
  }, /* @__PURE__ */ React.createElement("p", {
    "aria-hidden": "true"
  }, "S"), /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Sara Ghioni"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "sm",
    color: "green",
    href: "#"
  }, /* @__PURE__ */ React.createElement("p", {
    "aria-hidden": "true"
  }, "T"), /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Tomasso Sordi"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "sm",
    color: "orange",
    href: "#"
  }, /* @__PURE__ */ React.createElement("p", {
    "aria-hidden": "true"
  }, "B"), /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Barbera Tosi"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "sm",
    color: "red",
    href: "#"
  }, /* @__PURE__ */ React.createElement("p", {
    "aria-hidden": "true"
  }, "R"), /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Roberto Milano"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "sm",
    href: "#"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-search"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "sm",
    color: "dropdown"
  }, /* @__PURE__ */ React.createElement(Dropdown, null, /* @__PURE__ */ React.createElement(DropdownToggle, {
    id: "dropdownMenuLink"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Visualizza altri 4 utenti"), /* @__PURE__ */ React.createElement("span", {
    "aria-hidden": "true"
  }, "+4")), /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(LinkList, null, /* @__PURE__ */ React.createElement(LinkListItem, {
    inDropdown: true
  }, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "sm"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://randomuser.me/api/portraits/men/46.jpg",
    alt: "Mario Rossi"
  })), /* @__PURE__ */ React.createElement("span", null, "Mario Rossi")), /* @__PURE__ */ React.createElement(LinkListItem, {
    inDropdown: true
  }, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "sm",
    color: "green"
  }, /* @__PURE__ */ React.createElement("p", {
    "aria-hidden": "true"
  }, "A")), /* @__PURE__ */ React.createElement("span", null, "Arianna Gello")), /* @__PURE__ */ React.createElement(LinkListItem, {
    inDropdown: true
  }, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "sm",
    color: "primary"
  }, /* @__PURE__ */ React.createElement("p", {
    "aria-hidden": "true"
  }, "S")), /* @__PURE__ */ React.createElement("span", null, "Sara Ghioni")), /* @__PURE__ */ React.createElement(LinkListItem, {
    inDropdown: true
  }, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "sm"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-search"
  })), /* @__PURE__ */ React.createElement("span", null, "Antonio Esposito"))))))));
};
const MediumOverlaidAvatars = () => {
  return /* @__PURE__ */ React.createElement(AvatarGroupContainer, null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "md",
    href: "#"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://randomuser.me/api/portraits/women/12.jpg",
    alt: "Arianna Rossi"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "md",
    href: "#"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://randomuser.me/api/portraits/men/13.jpg",
    alt: "Giulio Neri"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "md",
    color: "orange",
    href: "#"
  }, /* @__PURE__ */ React.createElement("p", {
    "aria-hidden": "true"
  }, "B"), /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Barbera Tosi"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "md",
    color: "red",
    href: "#"
  }, /* @__PURE__ */ React.createElement("p", {
    "aria-hidden": "true"
  }, "R"), /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Roberto Milano"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "md",
    href: "#"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-search"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "md",
    color: "dropdown"
  }, /* @__PURE__ */ React.createElement(Dropdown, null, /* @__PURE__ */ React.createElement(DropdownToggle, {
    id: "dropdownMenuLink2"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "visually-hidden"
  }, "Visualizza altri 4 utenti"), /* @__PURE__ */ React.createElement("span", {
    "aria-hidden": "true"
  }, "+4")), /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(LinkListItem, {
    inDropdown: true
  }, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "md"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://randomuser.me/api/portraits/men/46.jpg",
    alt: "Mario Rossi"
  })), /* @__PURE__ */ React.createElement("span", null, "Mario Rossi")), /* @__PURE__ */ React.createElement(LinkListItem, {
    inDropdown: true
  }, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "md",
    color: "green"
  }, /* @__PURE__ */ React.createElement("p", {
    "aria-hidden": "true"
  }, "A")), /* @__PURE__ */ React.createElement("span", null, "Arianna Gello")), /* @__PURE__ */ React.createElement(LinkListItem, {
    inDropdown: true
  }, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "md",
    color: "primary"
  }, /* @__PURE__ */ React.createElement("p", {
    "aria-hidden": "true"
  }, "S")), /* @__PURE__ */ React.createElement("span", null, "Sara Ghioni")), /* @__PURE__ */ React.createElement(LinkListItem, {
    inDropdown: true
  }, /* @__PURE__ */ React.createElement(AvatarIcon, {
    size: "md"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-search"
  })), /* @__PURE__ */ React.createElement("span", null, "Antonio Esposito")))))));
};
SmallOverlappingAvatars.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "SmallOverlappingAvatars"
};
MediumOverlaidAvatars.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "MediumOverlaidAvatars"
};
SmallOverlappingAvatars.parameters = {
  ...SmallOverlappingAvatars.parameters,
  docs: {
    ...(_a = SmallOverlappingAvatars.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "() => {\n  return <AvatarGroupContainer>\n      <li>\n        <AvatarIcon size='sm' href='#'>\n          <img src='https://randomuser.me/api/portraits/women/12.jpg' alt='Arianna Rossi' />\n        </AvatarIcon>\n      </li>\n      <li>\n        <AvatarIcon size='sm' href='#'>\n          <img src='https://randomuser.me/api/portraits/men/13.jpg' alt='Giulio Neri' />\n        </AvatarIcon>\n      </li>\n      <li>\n        <AvatarIcon size='sm' color='primary' href='#'>\n          <p aria-hidden='true'>A</p>\n          <span className='visually-hidden'>Andrea Gallo</span>\n        </AvatarIcon>\n      </li>\n      <li>\n        <AvatarIcon size='sm' color='secondary' href='#'>\n          <p aria-hidden='true'>S</p>\n          <span className='visually-hidden'>Sara Ghioni</span>\n        </AvatarIcon>\n      </li>\n      <li>\n        <AvatarIcon size='sm' color='green' href='#'>\n          <p aria-hidden='true'>T</p>\n          <span className='visually-hidden'>Tomasso Sordi</span>\n        </AvatarIcon>\n      </li>\n      <li>\n        <AvatarIcon size='sm' color='orange' href='#'>\n          <p aria-hidden='true'>B</p>\n          <span className='visually-hidden'>Barbera Tosi</span>\n        </AvatarIcon>\n      </li>\n      <li>\n        <AvatarIcon size='sm' color='red' href='#'>\n          <p aria-hidden='true'>R</p>\n          <span className='visually-hidden'>Roberto Milano</span>\n        </AvatarIcon>\n      </li>\n      <li>\n        <AvatarIcon size='sm' href='#'>\n          <Icon icon='it-search' />\n        </AvatarIcon>\n      </li>\n      <li>\n        <AvatarIcon size='sm' color='dropdown'>\n          <Dropdown>\n            <DropdownToggle id='dropdownMenuLink'>\n              <span className='visually-hidden'>Visualizza altri 4 utenti</span>\n              <span aria-hidden='true'>+4</span>\n            </DropdownToggle>\n            <DropdownMenu>\n              <LinkList>\n                <LinkListItem inDropdown>\n                  <AvatarIcon size='sm'>\n                    <img src='https://randomuser.me/api/portraits/men/46.jpg' alt='Mario Rossi' />\n                  </AvatarIcon>\n                  <span>Mario Rossi</span>\n                </LinkListItem>\n                <LinkListItem inDropdown>\n                  <AvatarIcon size='sm' color='green'>\n                    <p aria-hidden='true'>A</p>\n                  </AvatarIcon>\n                  <span>Arianna Gello</span>\n                </LinkListItem>\n                <LinkListItem inDropdown>\n                  <AvatarIcon size='sm' color='primary'>\n                    <p aria-hidden='true'>S</p>\n                  </AvatarIcon>\n                  <span>Sara Ghioni</span>\n                </LinkListItem>\n                <LinkListItem inDropdown>\n                  <AvatarIcon size='sm'>\n                    <Icon icon='it-search' />\n                  </AvatarIcon>\n                  <span>Antonio Esposito</span>\n                </LinkListItem>\n              </LinkList>\n            </DropdownMenu>\n          </Dropdown>\n        </AvatarIcon>\n      </li>\n    </AvatarGroupContainer>;\n}",
      ...(_c = (_b = SmallOverlappingAvatars.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
MediumOverlaidAvatars.parameters = {
  ...MediumOverlaidAvatars.parameters,
  docs: {
    ...(_d = MediumOverlaidAvatars.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "() => {\n  return <AvatarGroupContainer>\n      <li>\n        <AvatarIcon size='md' href='#'>\n          <img src='https://randomuser.me/api/portraits/women/12.jpg' alt='Arianna Rossi' />\n        </AvatarIcon>\n      </li>\n      <li>\n        <AvatarIcon size='md' href='#'>\n          <img src='https://randomuser.me/api/portraits/men/13.jpg' alt='Giulio Neri' />\n        </AvatarIcon>\n      </li>\n      <li>\n        <AvatarIcon size='md' color='orange' href='#'>\n          <p aria-hidden='true'>B</p>\n          <span className='visually-hidden'>Barbera Tosi</span>\n        </AvatarIcon>\n      </li>\n      <li>\n        <AvatarIcon size='md' color='red' href='#'>\n          <p aria-hidden='true'>R</p>\n          <span className='visually-hidden'>Roberto Milano</span>\n        </AvatarIcon>\n      </li>\n      <li>\n        <AvatarIcon size='md' href='#'>\n          <Icon icon='it-search' />\n        </AvatarIcon>\n      </li>\n      <li>\n        <AvatarIcon size='md' color='dropdown'>\n          <Dropdown>\n            <DropdownToggle id='dropdownMenuLink2'>\n              <span className='visually-hidden'>Visualizza altri 4 utenti</span>\n              <span aria-hidden='true'>+4</span>\n            </DropdownToggle>\n            <DropdownMenu>\n              <LinkListItem inDropdown>\n                <AvatarIcon size='md'>\n                  <img src='https://randomuser.me/api/portraits/men/46.jpg' alt='Mario Rossi' />\n                </AvatarIcon>\n                <span>Mario Rossi</span>\n              </LinkListItem>\n              <LinkListItem inDropdown>\n                <AvatarIcon size='md' color='green'>\n                  <p aria-hidden='true'>A</p>\n                </AvatarIcon>\n                <span>Arianna Gello</span>\n              </LinkListItem>\n              <LinkListItem inDropdown>\n                <AvatarIcon size='md' color='primary'>\n                  <p aria-hidden='true'>S</p>\n                </AvatarIcon>\n                <span>Sara Ghioni</span>\n              </LinkListItem>\n              <LinkListItem inDropdown>\n                <AvatarIcon size='md'>\n                  <Icon icon='it-search' />\n                </AvatarIcon>\n                <span>Antonio Esposito</span>\n              </LinkListItem>\n            </DropdownMenu>\n          </Dropdown>\n        </AvatarIcon>\n      </li>\n    </AvatarGroupContainer>;\n}",
      ...(_f = (_e = MediumOverlaidAvatars.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["SmallOverlappingAvatars", "MediumOverlaidAvatars"];
const AvatarGroupsOverlapping_stories = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MediumOverlaidAvatars,
  SmallOverlappingAvatars,
  __namedExportsOrder,
  default: meta
}, Symbol.toStringTag, { value: "Module" }));
export {
  AvatarGroupContainer as A,
  MediumOverlaidAvatars as M,
  SmallOverlappingAvatars as S,
  AvatarGroupsOverlapping_stories as a
};
