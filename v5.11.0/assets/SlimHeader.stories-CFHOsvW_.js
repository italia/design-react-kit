var _a, _b, _c, _d, _e, _f;
import { e, r as reactExports } from "./iframe-BFi4fVCv.js";
import { R as Row, C as Col } from "./Col-Dox3aL0Q.js";
import { B as Button } from "./Button-CS_eq4Vx.js";
import { C as Collapse } from "./Collapse-BMkW47oI.js";
import { D as Dropdown, a as DropdownToggle } from "./DropdownToggle-BGBUXmOb.js";
import { D as DropdownMenu } from "./DropdownMenu-KnCYaoum.js";
import { H as Header, a as HeaderContent } from "./HeaderContent-0NScf0ay.js";
import { H as HeaderBrand, a as HeaderRightZone } from "./HeaderRightZone-BXl6J9B7.js";
import { H as HeaderLinkZone } from "./HeaderLinkZone-Dp9aaPuZ.js";
import { H as HeaderToggler } from "./HeaderToggler-ksqW1iVV.js";
import { I as Icon } from "./Icon-BWTpzkXQ.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-C_eRjKi7.js";
import "./track-focus-DbJ2CO43.js";
import "./preload-helper-BbOs9S9B.js";
import "./utils-MyL9kXd1.js";
import "./index-XoHdhAmz.js";
import "./Button-O6zFse-8.js";
import "./Transition-BcWpIGEp.js";
import "./index-DyLrPIr7.js";
import "./index-D5O9zO1o.js";
import "./DropdownToggle-C5C6xbi7.js";
import "./Popper-Dirh-cxm.js";
import "./HeaderContext-VZE0SY-k.js";
import "./Container-b9ORjQIB.js";
import "./Navbar-D2skU96g.js";
import "./NavbarBrand-BiDWsZS4.js";
import "./NavbarToggler-DE0EyWNX.js";
const meta = {
  title: "Documentazione/Menu di navigazione/Header/Slim",
  component: Header
};
const SlimHeaderHooks = ({
  theme,
  brandText
}) => {
  const [isOpenCollapse, setIsOpenCollapse] = reactExports.useState(false);
  return /* @__PURE__ */ e.createElement(Header, { type: "slim", theme }, /* @__PURE__ */ e.createElement(HeaderContent, null, /* @__PURE__ */ e.createElement(HeaderBrand, null, brandText), /* @__PURE__ */ e.createElement(HeaderLinkZone, { "aria-label": "Navigazione accessoria" }, /* @__PURE__ */ e.createElement(HeaderToggler, { onClick: () => {
    setIsOpenCollapse(!isOpenCollapse);
  } }, /* @__PURE__ */ e.createElement("span", null, brandText), /* @__PURE__ */ e.createElement(Icon, { icon: "it-expand" })), /* @__PURE__ */ e.createElement(Collapse, { isOpen: isOpenCollapse, header: true }, /* @__PURE__ */ e.createElement(LinkList, { noWrapper: true }, /* @__PURE__ */ e.createElement(LinkListItem, { href: "#" }, "Link 1"), /* @__PURE__ */ e.createElement(LinkListItem, { href: "#", active: true }, "Link 2 Active")))), /* @__PURE__ */ e.createElement(HeaderRightZone, null, /* @__PURE__ */ e.createElement(Dropdown, { inNavbar: true }, /* @__PURE__ */ e.createElement(DropdownToggle, { caret: true }, "ITA"), /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { size: "12" }, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "ITA")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "ENG"))))))), /* @__PURE__ */ e.createElement("div", { className: "it-access-top-wrapper" }, /* @__PURE__ */ e.createElement(Button, { color: "primary", size: "sm" }, "Accedi")))));
};
const SlimHeader = {
  render: ({
    theme,
    brandText
  }) => /* @__PURE__ */ e.createElement(SlimHeaderHooks, { theme, brandText }),
  parameters: {
    docs: {
      controls: {
        exclude: ["isOpen", "className", "type", "small", "testId"]
      }
    }
  },
  args: {
    theme: "",
    brandText: "Ente appartenenza"
  }
};
const SlimHeaderFullResponse = {
  render: ({
    theme
  }) => {
    return /* @__PURE__ */ e.createElement(Header, { type: "slim", theme }, /* @__PURE__ */ e.createElement(HeaderContent, null, /* @__PURE__ */ e.createElement(HeaderBrand, { responsive: true }, "Ente appartenenza/Owner"), /* @__PURE__ */ e.createElement(HeaderRightZone, null, /* @__PURE__ */ e.createElement(Dropdown, { inNavbar: true }, /* @__PURE__ */ e.createElement(DropdownToggle, { caret: true }, "ITA"), /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { size: "12" }, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "ITA")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "ENG"))))))), /* @__PURE__ */ e.createElement(Button, { color: "primary", className: "btn-icon btn-full", href: "#" }, /* @__PURE__ */ e.createElement("span", { className: "rounded-icon" }, /* @__PURE__ */ e.createElement(Icon, { color: "primary", icon: "it-user" })), /* @__PURE__ */ e.createElement("span", { className: "d-none d-lg-block" }, "Accedi all'area personale")))));
  }
};
SlimHeader.parameters = {
  ...SlimHeader.parameters,
  docs: {
    ...(_a = SlimHeader.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: ({\n    theme,\n    brandText\n  }) => <SlimHeaderHooks theme={theme} brandText={brandText}></SlimHeaderHooks>,\n  parameters: {\n    docs: {\n      controls: {\n        exclude: ['isOpen', 'className', 'type', 'small', 'testId']\n      }\n    }\n  },\n  args: {\n    theme: '',\n    brandText: 'Ente appartenenza'\n  }\n}",
      ...(_c = (_b = SlimHeader.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
SlimHeaderFullResponse.parameters = {
  ...SlimHeaderFullResponse.parameters,
  docs: {
    ...(_d = SlimHeaderFullResponse.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: ({\n    theme\n  }) => {\n    return <Header type='slim' theme={theme}>\n        <HeaderContent>\n          <HeaderBrand responsive>Ente appartenenza/Owner</HeaderBrand>\n          <HeaderRightZone>\n            <Dropdown inNavbar>\n              <DropdownToggle caret>\n                ITA\n              </DropdownToggle>\n              <DropdownMenu>\n                <Row>\n                  <Col size='12'>\n                    <LinkList>\n                      <LinkListItem inDropdown href='#'>\n                        <span>ITA</span>\n                      </LinkListItem>\n                      <LinkListItem inDropdown href='#'>\n                        <span>ENG</span>\n                      </LinkListItem>\n                    </LinkList>\n                  </Col>\n                </Row>\n              </DropdownMenu>\n            </Dropdown>\n            <Button color='primary' className='btn-icon btn-full' href='#'>\n              <span className='rounded-icon'>\n                <Icon color='primary' icon='it-user' />\n              </span>\n              <span className='d-none d-lg-block'>Accedi all&#39;area personale</span>\n            </Button>\n          </HeaderRightZone>\n        </HeaderContent>\n      </Header>;\n  }\n}",
      ...(_f = (_e = SlimHeaderFullResponse.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["SlimHeader", "SlimHeaderFullResponse"];
export {
  SlimHeader,
  SlimHeaderFullResponse,
  __namedExportsOrder,
  meta as default
};
