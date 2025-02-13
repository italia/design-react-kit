const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-BDy3TOcs.js","./index-BehpJNG5.js","./_commonjsHelpers-DWwsNxpa.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./iframe-Blg4YaEd.js";
import { e, r as reactExports } from "./index-BehpJNG5.js";
import { aj as CodeOrSourceMdx, ak as AnchorMdx, al as HeadersMdx, am as Docs } from "./index-BvRgJbWC.js";
import { renderElement, unmountElement } from "./react-18-DS5g-8ln.js";
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
    return hasError ? null : e.createElement(e.Fragment, null, children);
  }
}, DocsRenderer = class {
  constructor() {
    this.render = async (context, docsParameter, element) => {
      let components = { ...defaultComponents, ...docsParameter == null ? void 0 : docsParameter.components }, TDocs = Docs;
      return new Promise((resolve, reject) => {
        __vitePreload(async () => {
          const { MDXProvider } = await import("./index-BDy3TOcs.js");
          return { MDXProvider };
        }, true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url).then(({ MDXProvider }) => renderElement(e.createElement(ErrorBoundary, { showException: reject, key: Math.random() }, e.createElement(MDXProvider, { components }, e.createElement(TDocs, { context, docsParameter }))), element)).then(() => resolve());
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
