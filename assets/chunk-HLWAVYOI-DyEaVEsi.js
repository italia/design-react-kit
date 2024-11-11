const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-BqkeGXjM.js","./index-C-_iGYWo.js","./_commonjsHelpers-CcAunmGO.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./iframe-D6ES2N_w.js";
import { R as React, r as reactExports } from "./index-C-_iGYWo.js";
import { r as renderElement, u as unmountElement } from "./react-18-Cuw8iiT_.js";
import { g as CodeOrSourceMdx, h as AnchorMdx, H as HeadersMdx, D as Docs } from "./index-xkeXP2rK.js";
var defaultComponents = { code: CodeOrSourceMdx, a: AnchorMdx, ...HeadersMdx }, ErrorBoundary = class extends reactExports.Component {
  constructor() {
    super(...arguments);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err) {
    let { showException } = this.props;
    showException(err);
  }
  render() {
    let { hasError } = this.state, { children } = this.props;
    return hasError ? null : React.createElement(React.Fragment, null, children);
  }
}, DocsRenderer = class {
  constructor() {
    this.render = async (context, docsParameter, element) => {
      let components = { ...defaultComponents, ...docsParameter == null ? void 0 : docsParameter.components }, TDocs = Docs;
      return new Promise((resolve, reject) => {
        __vitePreload(async () => {
          const { MDXProvider } = await import("./index-BqkeGXjM.js");
          return { MDXProvider };
        }, true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url).then(({ MDXProvider }) => renderElement(React.createElement(ErrorBoundary, { showException: reject, key: Math.random() }, React.createElement(MDXProvider, { components }, React.createElement(TDocs, { context, docsParameter }))), element)).then(() => resolve());
      });
    }, this.unmount = (element) => {
      unmountElement(element);
    };
  }
};
export {
  DocsRenderer as D,
  defaultComponents as d
};
