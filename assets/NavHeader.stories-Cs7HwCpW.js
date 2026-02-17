var _a, _b, _c, _d, _e, _f;
import { e } from "./iframe-BMr-kR9u.js";
import { R as Row, C as Col } from "./Col-HPJviJYk.js";
import { N as NavItem, a as NavLink } from "./NavLink-T7NYLPgo.js";
import { C as Collapse } from "./Collapse-ByLtC6DF.js";
import { D as Dropdown, a as DropdownToggle } from "./DropdownToggle-_JWGoq-b.js";
import { D as DropdownMenu } from "./DropdownMenu-D7VZFbdZ.js";
import { H as Header, a as HeaderContent } from "./HeaderContent-DzF0HQf7.js";
import { H as HeaderToggler } from "./HeaderToggler-CyxBh6rN.js";
import { I as Icon } from "./Icon-CB2E_ttD.js";
import { L as LinkList, a as LinkListItem } from "./LinkListItem-BvBww0Tm.js";
import { N as Nav, M as MegamenuItem, a as MegamenuHighlightColumn } from "./Nav-DAWWUDSn.js";
import "./track-focus-DbJ2CO43.js";
import "./preload-helper-CQrtv1eE.js";
import "./utils-R1pK7pq0.js";
import "./index-CuPZ171k.js";
import "./Transition-Du0bJJBs.js";
import "./index-CJ9b0Pjr.js";
import "./DropdownToggle-6bbkho7w.js";
import "./Popper-BMg5Gqzx.js";
import "./Button-Cjou70v-.js";
import "./HeaderContext-BeS5K7Ua.js";
import "./Container-1Ojq-Yvn.js";
import "./Navbar-B7AcJ8Bb.js";
import "./NavbarToggler-wcAZ10sF.js";
const meta = {
  title: "Documentazione/Menu di navigazione/Header/Nav",
  component: Header
};
const NavHeader = {
  render: ({
    theme,
    isOpen
  }) => {
    return /* @__PURE__ */ e.createElement(Header, { type: "navbar", theme }, /* @__PURE__ */ e.createElement(HeaderContent, { expand: "lg", megamenu: true }, /* @__PURE__ */ e.createElement(HeaderToggler, { onClick: () => {
    }, "aria-controls": "nav1", "aria-expanded": "false", "aria-label": "Toggle navigation" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-burger" })), /* @__PURE__ */ e.createElement(Collapse, { navbar: true, header: true, isOpen, onOverlayClick: () => {
    } }, /* @__PURE__ */ e.createElement("div", { className: "menu-wrapper" }, /* @__PURE__ */ e.createElement(Nav, { navbar: true }, /* @__PURE__ */ e.createElement(NavItem, { active: true }, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: true }, /* @__PURE__ */ e.createElement("span", null, "link 1 active "), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "current"))), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#", disabled: true }, "Link 2")), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#" }, "Link 3")), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#" }, "Link 4")), /* @__PURE__ */ e.createElement(Dropdown, { tag: "li", inNavbar: true, theme }, /* @__PURE__ */ e.createElement(DropdownToggle, { caret: true }, /* @__PURE__ */ e.createElement("span", null, "Dropdown Menu")), /* @__PURE__ */ e.createElement(DropdownMenu, null, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 1")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 3")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement("span", null, "Link list 4"))))), /* @__PURE__ */ e.createElement(MegamenuItem, { itemName: "Megamenu con Immagine e Descrizione" }, /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(MegamenuHighlightColumn, { xs: "12", lg: "4", description: true }, /* @__PURE__ */ e.createElement("div", { className: "ratio ratio-21x9 lightgrey-bg-a1 mb-4 rounded" }, /* @__PURE__ */ e.createElement("figure", { className: "figure" }, /* @__PURE__ */ e.createElement("img", { src: "https://placehold.co/560x240/ebebeb/808080/?text=Immagine", className: "figure-img img-fluid rounded", alt: "Segnaposto" }))), /* @__PURE__ */ e.createElement("p", null, "Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.")), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "8" }, /* @__PURE__ */ e.createElement("div", { className: "it-heading-link-wrapper" }, /* @__PURE__ */ e.createElement("a", { className: "it-heading-link", href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "icon icon-sm me-2 mb-1", icon: "it-arrow-right-triangle" }), /* @__PURE__ */ e.createElement("span", null, "Esplora la sezione megamenu"))), /* @__PURE__ */ e.createElement(Row, null, /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6" }, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 1")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 2")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 3")))), /* @__PURE__ */ e.createElement(Col, { xs: "12", lg: "6" }, /* @__PURE__ */ e.createElement(LinkList, null, /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 4")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 5")), /* @__PURE__ */ e.createElement(LinkListItem, { inDropdown: true, href: "#" }, /* @__PURE__ */ e.createElement(Icon, { className: "me-2", color: "primary", icon: "it-arrow-right-triangle", size: "xs" }), /* @__PURE__ */ e.createElement("span", null, "Link lista 6")))))))))))));
  },
  parameters: {
    docs: {
      controls: {
        exclude: ["isOpen", "className", "type", "small", "testId"]
      }
    }
  },
  args: {
    theme: "",
    isOpen: false
  }
};
const NavHeaderSecondary = {
  render: ({
    theme,
    isOpen
  }) => {
    return /* @__PURE__ */ e.createElement(Header, { type: "navbar", theme }, /* @__PURE__ */ e.createElement(HeaderContent, { expand: "lg", megamenu: true }, /* @__PURE__ */ e.createElement(HeaderToggler, { onClick: () => {
    }, "aria-controls": "nav1", "aria-expanded": "false", "aria-label": "Toggle navigation" }, /* @__PURE__ */ e.createElement(Icon, { icon: "it-burger" })), /* @__PURE__ */ e.createElement(Collapse, { navbar: true, header: true, isOpen, onOverlayClick: () => {
    } }, /* @__PURE__ */ e.createElement("div", { className: "menu-wrapper" }, /* @__PURE__ */ e.createElement(Nav, { navbar: true }, /* @__PURE__ */ e.createElement(NavItem, { active: true }, /* @__PURE__ */ e.createElement(NavLink, { href: "#", active: true }, /* @__PURE__ */ e.createElement("span", null, "link 1 active "), /* @__PURE__ */ e.createElement("span", { className: "visually-hidden" }, "current"))), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#" }, "Link 2")), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#" }, "Link 3")), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#" }, "Link 4"))), /* @__PURE__ */ e.createElement(Nav, { navbar: true, secondary: true }, /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#" }, "Link 5")), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#" }, "Link 6")), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#" }, "Link 7")), /* @__PURE__ */ e.createElement(NavItem, null, /* @__PURE__ */ e.createElement(NavLink, { href: "#" }, "Link 8")))))));
  }
};
NavHeader.parameters = {
  ...NavHeader.parameters,
  docs: {
    ...(_a = NavHeader.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: ({\n    theme,\n    isOpen\n  }) => {\n    return <Header type='navbar' theme={theme}>\n        <HeaderContent expand='lg' megamenu>\n          <HeaderToggler onClick={() => {\n          /* set logic open state  */\n        }} aria-controls='nav1' aria-expanded='false' aria-label='Toggle navigation'>\n            <Icon icon='it-burger' />\n          </HeaderToggler>\n          <Collapse navbar header isOpen={isOpen} onOverlayClick={() => {\n          /* set close logic here */\n        }}>\n            <div className='menu-wrapper'>\n              <Nav navbar>\n                <NavItem active>\n                  <NavLink href='#' active>\n                    <span>link 1 active </span>\n                    <span className='visually-hidden'>current</span>\n                  </NavLink>\n                </NavItem>\n                <NavItem>\n                  <NavLink href='#' disabled>\n                    Link 2\n                  </NavLink>\n                </NavItem>\n                <NavItem>\n                  <NavLink href='#'>Link 3</NavLink>\n                </NavItem>\n                <NavItem>\n                  <NavLink href='#'>Link 4</NavLink>\n                </NavItem>\n                <Dropdown tag='li' inNavbar theme={theme}>\n                  <DropdownToggle caret>\n                    <span>Dropdown Menu</span>\n                  </DropdownToggle>\n                  <DropdownMenu>\n                    <LinkList>\n                      <LinkListItem inDropdown href='#'>\n                        <span>Link list 1</span>\n                      </LinkListItem>\n                      <LinkListItem inDropdown href='#'>\n                        <span>Link list 2</span>\n                      </LinkListItem>\n                      <LinkListItem inDropdown href='#'>\n                        <span>Link list 3</span>\n                      </LinkListItem>\n                      <LinkListItem inDropdown href='#'>\n                        <span>Link list 4</span>\n                      </LinkListItem>\n                    </LinkList>\n                  </DropdownMenu>\n                </Dropdown>\n                <MegamenuItem itemName='Megamenu con Immagine e Descrizione'>\n                  <Row>\n                    <MegamenuHighlightColumn xs='12' lg='4' description>\n                      <div className='ratio ratio-21x9 lightgrey-bg-a1 mb-4 rounded'>\n                        <figure className='figure'>\n                          <img src='https://placehold.co/560x240/ebebeb/808080/?text=Immagine' className='figure-img img-fluid rounded' alt='Segnaposto' />\n                        </figure>\n                      </div>\n                      <p>Omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>\n                    </MegamenuHighlightColumn>\n                    <Col xs='12' lg='8'>\n                      <div className='it-heading-link-wrapper'>\n                        <a className='it-heading-link' href='#'>\n                          <Icon className='icon icon-sm me-2 mb-1' icon='it-arrow-right-triangle'></Icon>\n                          <span>Esplora la sezione megamenu</span>\n                        </a>\n                      </div>\n                      <Row>\n                        <Col xs='12' lg='6'>\n                          <LinkList>\n                            <LinkListItem inDropdown href='#'>\n                              <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\n                              <span>Link lista 1</span>\n                            </LinkListItem>\n                            <LinkListItem inDropdown href='#'>\n                              <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\n                              <span>Link lista 2</span>\n                            </LinkListItem>\n                            <LinkListItem inDropdown href='#'>\n                              <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\n                              <span>Link lista 3</span>\n                            </LinkListItem>\n                          </LinkList>\n                        </Col>\n                        <Col xs='12' lg='6'>\n                          <LinkList>\n                            <LinkListItem inDropdown href='#'>\n                              <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\n                              <span>Link lista 4</span>\n                            </LinkListItem>\n                            <LinkListItem inDropdown href='#'>\n                              <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\n                              <span>Link lista 5</span>\n                            </LinkListItem>\n                            <LinkListItem inDropdown href='#'>\n                              <Icon className='me-2' color='primary' icon='it-arrow-right-triangle' size='xs' />\n                              <span>Link lista 6</span>\n                            </LinkListItem>\n                          </LinkList>\n                        </Col>\n                      </Row>\n                    </Col>\n                  </Row>\n                </MegamenuItem>\n              </Nav>\n            </div>\n          </Collapse>\n        </HeaderContent>\n      </Header>;\n  },\n  parameters: {\n    docs: {\n      controls: {\n        exclude: ['isOpen', 'className', 'type', 'small', 'testId']\n      }\n    }\n  },\n  args: {\n    theme: '',\n    isOpen: false\n  }\n}",
      ...(_c = (_b = NavHeader.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
NavHeaderSecondary.parameters = {
  ...NavHeaderSecondary.parameters,
  docs: {
    ...(_d = NavHeaderSecondary.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  render: ({\n    theme,\n    isOpen\n  }) => {\n    return <Header type='navbar' theme={theme}>\n        <HeaderContent expand='lg' megamenu>\n          <HeaderToggler onClick={() => {\n          /* set logic open state  */\n        }} aria-controls='nav1' aria-expanded='false' aria-label='Toggle navigation'>\n            <Icon icon='it-burger' />\n          </HeaderToggler>\n          <Collapse navbar header isOpen={isOpen} onOverlayClick={() => {\n          /* set close logic here */\n        }}>\n            <div className='menu-wrapper'>\n              <Nav navbar>\n                <NavItem active>\n                  <NavLink href='#' active>\n                    <span>link 1 active </span>\n                    <span className='visually-hidden'>current</span>\n                  </NavLink>\n                </NavItem>\n                <NavItem>\n                  <NavLink href='#'>Link 2</NavLink>\n                </NavItem>\n                <NavItem>\n                  <NavLink href='#'>Link 3</NavLink>\n                </NavItem>\n                <NavItem>\n                  <NavLink href='#'>Link 4</NavLink>\n                </NavItem>\n              </Nav>\n              <Nav navbar secondary>\n                <NavItem>\n                  <NavLink href='#'>Link 5</NavLink>\n                </NavItem>\n                <NavItem>\n                  <NavLink href='#'>Link 6</NavLink>\n                </NavItem>\n                <NavItem>\n                  <NavLink href='#'>Link 7</NavLink>\n                </NavItem>\n                <NavItem>\n                  <NavLink href='#'>Link 8</NavLink>\n                </NavItem>\n              </Nav>\n            </div>\n          </Collapse>\n        </HeaderContent>\n      </Header>;\n  }\n}",
      ...(_f = (_e = NavHeaderSecondary.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["NavHeader", "NavHeaderSecondary"];
export {
  NavHeader,
  NavHeaderSecondary,
  __namedExportsOrder,
  meta as default
};
