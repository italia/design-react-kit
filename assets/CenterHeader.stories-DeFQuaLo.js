var _a, _b, _c, _d, _e, _f;
import { R as React } from "./index-CQCy530F.js";
import { H as Header, a as HeaderContent } from "./HeaderContent-DeePoa8e.js";
import { H as HeaderBrand, a as HeaderRightZone } from "./HeaderRightZone-B7jkkeyE.js";
import { H as HeaderSocialsZone, a as HeaderSearch } from "./HeaderSocialsZone-DYqYT_PK.js";
import { I as Icon } from "./Icon-CYxksTIN.js";
import "./_commonjsHelpers-LQfde5yM.js";
import "./index-CpyNLP69.js";
import "./Container-ChumJ9z3.js";
import "./index-Cas18JYw.js";
import "./utils-l7qJ8bIE.js";
import "./Col-DTtAS2uD.js";
import "./Navbar-C82d94Yg.js";
import "./NavbarBrand-Cy1-5-LH.js";
import "./iframe-CotRnxHI.js";
import "../sb-preview/runtime.js";
const CenterHeader = ({
  theme,
  small
}) => {
  return /* @__PURE__ */ React.createElement(Header, {
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
  }))));
};
const meta = {
  title: "Documentazione/Menu di navigazione/Header/Center",
  component: CenterHeader
};
const CenterHeaderBasic = {
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
      originalSource: `{
  args: {
    theme: "",
    small: false
  },
  argTypes: {
    theme: {
      control: "radio",
      options: ["", "light", 'dark']
    }
  }
}`,
      ...(_c = (_b = CenterHeaderBasic.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
HeaderCenterNarrow.parameters = {
  ...HeaderCenterNarrow.parameters,
  docs: {
    ...(_d = HeaderCenterNarrow.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  args: {\n    theme: "",\n    small: true\n  }\n}',
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
