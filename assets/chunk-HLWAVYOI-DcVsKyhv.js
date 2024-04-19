const __vite__fileDeps=["./index-D9eV9cM1.js","./index-CQCy530F.js","./_commonjsHelpers-LQfde5yM.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import { _ as __vitePreload } from "./iframe-8XlFCvOj.js";
import { R as React, r as reactExports } from "./index-CQCy530F.js";
import { R as ReactDOM } from "./index-Hv2vTVdx.js";
import { g as CodeOrSourceMdx, h as AnchorMdx, H as HeadersMdx, D as Docs } from "./index-Cr0aQxsR.js";
var renderElement = async (node, el) => new Promise((resolve) => {
  ReactDOM.render(node, el, () => resolve(null));
}), unmountElement = (el) => {
  ReactDOM.unmountComponentAtNode(el);
};
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
        __vitePreload(() => import("./index-D9eV9cM1.js"), true ? __vite__mapDeps([0,1,2]) : void 0, import.meta.url).then(({ MDXProvider }) => renderElement(React.createElement(ErrorBoundary, { showException: reject, key: Math.random() }, React.createElement(MDXProvider, { components }, React.createElement(TDocs, { context, docsParameter }))), element)).then(() => resolve());
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
