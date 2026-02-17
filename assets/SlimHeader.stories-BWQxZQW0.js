var _a, _b, _c, _d, _e, _f;
import { e, r as reactExports } from "./iframe-BMr-kR9u.js";
import { R as Row, C as Col } from "./Col-HPJviJYk.js";
import { B as Button } from "./Button-B9FEd-mO.js";
import { C as Collapse } from "./Collapse-ByLtC6DF.js";
import { D as Dropdown, a as DropdownToggle } from "./DropdownToggle-_JWGoq-b.js";
import { D as DropdownMenu } from "./DropdownMenu-D7VZFbdZ.js";
import { H as Header, a as HeaderContent } from "./HeaderContent-DzF0HQf7.js";
import { H as HeaderBrand, a as HeaderRightZone } from "./HeaderRightZone-Ce7cu3nc.js";
import { H as HeaderLinkZone } from "./HeaderLinkZone-DqZjfTvc.js";
import { H as HeaderToggler } from "./HeaderToggler-CyxBh6rN.js";
import { I as Icon } from "./Icon-CB2E_ttD.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-BvBww0Tm.js";
import "./track-focus-DbJ2CO43.js";
import "./preload-helper-CQrtv1eE.js";
import "./utils-R1pK7pq0.js";
import "./index-CuPZ171k.js";
import "./Button-Cjou70v-.js";
import "./Transition-Du0bJJBs.js";
import "./index-CJ9b0Pjr.js";
import "./DropdownToggle-6bbkho7w.js";
import "./Popper-BMg5Gqzx.js";
import "./HeaderContext-BeS5K7Ua.js";
import "./Container-1Ojq-Yvn.js";
import "./Navbar-B7AcJ8Bb.js";
import "./NavbarBrand-2-KfDTrS.js";
import "./NavbarToggler-wcAZ10sF.js";
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
