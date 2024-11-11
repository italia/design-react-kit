var _a, _b, _c, _d, _e, _f;
import { R as React } from "./index-C-_iGYWo.js";
import { H as Header, a as HeaderContent } from "./HeaderContent-Djr8e9Go.js";
import { H as HeaderBrand, a as HeaderRightZone } from "./HeaderRightZone-BsYPHxkO.js";
import { H as HeaderSocialsZone, a as HeaderSearch } from "./HeaderSocialsZone-D9_4XfFj.js";
import { I as Icon } from "./Icon-DYKLX3fq.js";
import "./_commonjsHelpers-CcAunmGO.js";
import "./index-xoeSAV6i.js";
import "./Container-DhalTljb.js";
import "./index-C6XlOQIa.js";
import "./utils-BFoSoHid.js";
import "./Col-CM3Y6KlU.js";
import "./Navbar-BzESDADg.js";
import "./NavbarBrand-B8AJO8Xy.js";
import "./iframe-D6ES2N_w.js";
import "../sb-preview/runtime.js";
const meta = {
  title: "Documentazione/Menu di navigazione/Header/Center",
  component: Header,
  parameters: {
    docs: {
      controls: {
        exclude: ["isOpen", "className", "type", "small", "testId"]
      }
    }
  }
};
const CenterHeaderBasic = {
  render: ({
    theme,
    small
  }) => /* @__PURE__ */ React.createElement(Header, {
    type: "center",
    theme,
    small
  }, /* @__PURE__ */ React.createElement(HeaderContent, null, /* @__PURE__ */ React.createElement(HeaderBrand, {
    iconName: "it-code-circle",
    iconAlt: "it code circle icon"
  }, /* @__PURE__ */ React.createElement("h2", null, "Lorem Ipsum Lorem Ipsum"), /* @__PURE__ */ React.createElement("h3", null, "Inserire qui la tag line")), /* @__PURE__ */ React.createElement(HeaderRightZone, null, /* @__PURE__ */ React.createElement(HeaderSocialsZone, {
    label: "Seguici su"
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    "aria-label": "Facebook",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-facebook"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    "aria-label": "Github",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-github"
  }))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    "aria-label": "Twitter",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Icon, {
    icon: "it-twitter"
  }))))), /* @__PURE__ */ React.createElement(HeaderSearch, {
    label: "Cerca",
    iconName: "it-search"
  })))),
  args: {
    theme: "",
    small: false
  },
  argTypes: {
    theme: {
      control: "radio",
      options: ["", "light", "dark"]
    }
  }
};
const HeaderCenterNarrow = {
  ...CenterHeaderBasic,
  args: {
    theme: "",
    small: true
  }
};
CenterHeaderBasic.parameters = {
  ...CenterHeaderBasic.parameters,
  docs: {
    ...(_a = CenterHeaderBasic.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  render: ({\n    theme,\n    small\n  }) => <Header type='center' theme={theme} small={small}>\n      <HeaderContent>\n        <HeaderBrand iconName='it-code-circle' iconAlt='it code circle icon'>\n          <h2>Lorem Ipsum Lorem Ipsum</h2>\n          <h3>Inserire qui la tag line</h3>\n        </HeaderBrand>\n        <HeaderRightZone>\n          <HeaderSocialsZone label='Seguici su'>\n            <ul>\n              <li>\n                <a href='#' aria-label='Facebook' target='_blank'>\n                  <Icon icon='it-facebook' />\n                </a>\n              </li>\n              <li>\n                <a href='#' aria-label='Github' target='_blank'>\n                  <Icon icon='it-github' />\n                </a>\n              </li>\n              <li>\n                <a href='#' aria-label='Twitter' target='_blank'>\n                  <Icon icon='it-twitter' />\n                </a>\n              </li>\n            </ul>\n          </HeaderSocialsZone>\n          <HeaderSearch label='Cerca' iconName='it-search' />\n        </HeaderRightZone>\n      </HeaderContent>\n    </Header>,\n  args: {\n    theme: '',\n    small: false\n  },\n  argTypes: {\n    theme: {\n      control: 'radio',\n      options: ['', 'light', 'dark']\n    }\n  }\n}",
      ...(_c = (_b = CenterHeaderBasic.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
HeaderCenterNarrow.parameters = {
  ...HeaderCenterNarrow.parameters,
  docs: {
    ...(_d = HeaderCenterNarrow.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  ...CenterHeaderBasic,\n  args: {\n    theme: '',\n    small: true\n  }\n}",
      ...(_f = (_e = HeaderCenterNarrow.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["CenterHeaderBasic", "HeaderCenterNarrow"];
export {
  CenterHeaderBasic,
  HeaderCenterNarrow,
  __namedExportsOrder,
  meta as default
};
